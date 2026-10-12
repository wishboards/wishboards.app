import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { DemoShowcase } from "./DemoShowcase";

describe("DemoShowcase", () => {
  it("renders correct URLs for active stacks resolving #262", () => {
    render(<DemoShowcase />);

    const lifestyleBtn = screen.getByText(/Launch Lifestyle Demo/i);
    expect(lifestyleBtn.closest("a")).toHaveAttribute(
      "href",
      "https://demo.wishboards.app",
    );

    const conferenceBtn = screen.getByText(/Launch Conference Demo/i);
    expect(conferenceBtn.closest("a")).toHaveAttribute(
      "href",
      "https://conference.wishboards.app",
    );

    // Sublinks
    const corkboardLinks = screen.getAllByText(/Corkboard \(\/display\)/i);
    expect(corkboardLinks[0].closest("a")).toHaveAttribute(
      "href",
      "https://demo.wishboards.app/display",
    );
    expect(corkboardLinks[1].closest("a")).toHaveAttribute(
      "href",
      "https://conference.wishboards.app/display",
    );
  });
});
