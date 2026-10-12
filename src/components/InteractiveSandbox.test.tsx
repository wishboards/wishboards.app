import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { InteractiveSandbox } from "./InteractiveSandbox";

describe("InteractiveSandbox", () => {
  it("allows switching between tabs", () => {
    render(<InteractiveSandbox />);

    expect(screen.getByText(/Attendee: Post a Wish/i)).toBeInTheDocument();
    expect(screen.getByText(/Dynamic Rule Matching/i)).toBeInTheDocument();
    expect(screen.getByText(/Organizer: 5-Minute Setup/i)).toBeInTheDocument();

    // Switch to Rule Matching
    fireEvent.click(screen.getByText(/Dynamic Rule Matching/i));
    expect(
      screen.getByText(
        /Wishboard uses deterministic, profile-driven rules evaluated directly in SQLite/i,
      ),
    ).toBeInTheDocument();

    // Switch to Organizer
    fireEvent.click(screen.getByText(/Organizer: 5-Minute Setup/i));
    expect(
      screen.getByText(/100% Offline Kiosk \(Raspberry Pi\)/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/AWS Serverless Cloud/i)).toBeInTheDocument();
  });

  it("allows creating and pinning a wish on the corkboard", () => {
    render(<InteractiveSandbox />);

    const topicInput = screen.getByPlaceholderText(/BOARD GAMES/i);
    fireEvent.change(topicInput, { target: { value: "RETRO GAMING" } });

    const textInput = screen.getByPlaceholderText(
      /What are you hoping to find or offer/i,
    );
    fireEvent.change(textInput, {
      target: { value: "Looking for a Mario Kart 64 rival!" },
    });

    // Click pin button
    const pinBtn = screen.getByText(/Pin to Corkboard/i);
    fireEvent.click(pinBtn);

    expect(screen.getByText(/Pinned to live board!/i)).toBeInTheDocument();
    expect(screen.getByText(/RETRO GAMING/i)).toBeInTheDocument();
    expect(
      screen.getAllByText(/Looking for a Mario Kart 64 rival!/i).length,
    ).toBeGreaterThanOrEqual(1);
  });

  it("faithfully demonstrates dynamic rule types without hallucinated scores", () => {
    render(<InteractiveSandbox />);

    // Switch to Rule Matching
    fireEvent.click(screen.getByText(/Dynamic Rule Matching/i));

    // Test cross_match (Mentoring ↔ Mentee)
    fireEvent.click(
      screen.getByText(/Cross-Match: Mentee Looking for Mentor/i),
    );
    expect(
      screen.getByText(/Rule: cross_match \(Mentoring ↔ Mentee\)/i),
    ).toBeInTheDocument();

    // Test attribute_overlap (#Tabletop Tag)
    fireEvent.click(screen.getByText(/Attribute Match: #Tabletop Tag/i));
    expect(
      screen.getByText(/Rule: attribute_overlap \(Sticker: 🎲 Tabletop\)/i),
    ).toBeInTheDocument();

    // Test cross_match (Cosplayer ↔ Photographer)
    fireEvent.click(screen.getByText(/Cross-Match: Cosplayer ↔ Photographer/i));
    expect(
      screen.getByText(/Rule: cross_match \(Cosplayer ↔ Photographer\)/i),
    ).toBeInTheDocument();
  });
});
