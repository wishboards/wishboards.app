import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders all primary landing page sections", () => {
    render(<App />);

    // Brand and Hero
    expect(screen.getAllByText(/Wishboard/i).length).toBeGreaterThan(0);
    expect(
      screen.getByText(/The Private, Disconnected Connection Board/i),
    ).toBeInTheDocument();

    // Interactive Demo Section
    expect(screen.getByText(/See Wishboard in Action/i)).toBeInTheDocument();

    // Live Demos Showcase
    expect(
      screen.getByText(/Experience Live Demonstrations/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Lifestyle & Community Meetup/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Professional & Tech Unconference/i),
    ).toBeInTheDocument();

    // Feature Pillars
    expect(
      screen.getByText(/Built for Real-World Event Realities/i),
    ).toBeInTheDocument();

    // Deployment Guide
    expect(
      screen.getByText(/Host a Wishboard for Your Event/i),
    ).toBeInTheDocument();

    // Footer with Copyright
    expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
  });
});
