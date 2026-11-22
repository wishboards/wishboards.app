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

    const wishmailLinks = screen.getAllByText(/Wishmail \(\/account\)/i);
    expect(wishmailLinks[0].closest("a")).toHaveAttribute(
      "href",
      "https://demo.wishboards.app/account",
    );
    expect(wishmailLinks[1].closest("a")).toHaveAttribute(
      "href",
      "https://conference.wishboards.app/account",
    );
  });

  it("links to the opt-in AI comparison stack and live Storybook catalog", () => {
    render(<DemoShowcase />);

    const aiDemoLink = screen.getByText(/Launch AI Comparison Demo/i);
    expect(aiDemoLink.closest("a")).toHaveAttribute(
      "href",
      "https://ai.wishboards.app",
    );

    const semanticSearchLink = screen.getByText(
      /Semantic Search \(\/search\)/i,
    );
    expect(semanticSearchLink.closest("a")).toHaveAttribute(
      "href",
      "https://ai.wishboards.app/search",
    );

    const aiDocsLink = screen.getByText(/AI Docs/i);
    expect(aiDocsLink.closest("a")).toHaveAttribute(
      "href",
      "https://wishboards.github.io/wishboard/ai-features/",
    );

    const storybookLink = screen.getByText(/Open Component Catalog/i);
    expect(storybookLink.closest("a")).toHaveAttribute(
      "href",
      "https://wishboards.github.io/wishboard/storybook/",
    );

    const catalogGuideLink = screen.getByText(/Catalog Guide/i);
    expect(catalogGuideLink.closest("a")).toHaveAttribute(
      "href",
      "https://wishboards.github.io/wishboard/component-catalog/",
    );
  });
});
