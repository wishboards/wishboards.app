import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import axe from "axe-core";
import App from "./App";

describe("Accessibility (WCAG 2.1 AA) via axe-core", () => {
  it("has zero axe accessibility violations on the main landing page", async () => {
    const { container } = render(<App />);
    const results = await axe.run(container, {
      runOnly: {
        type: "tag",
        values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"],
      },
    });

    expect(results.violations).toEqual([]);
  });

  it("contains a functional skip-to-content link pointing to main content", () => {
    const { container } = render(<App />);
    const skipLink = container.querySelector(".skip-link");
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute("href", "#main-content");

    const mainElement = container.querySelector("main#main-content");
    expect(mainElement).toBeInTheDocument();
  });

  it("exposes accessible navigation landmarks and tablist roles", () => {
    const { container } = render(<App />);

    const nav = container.querySelector('nav[aria-label="Main Navigation"]');
    expect(nav).toBeInTheDocument();

    const tablist = container.querySelector('[role="tablist"]');
    expect(tablist).toBeInTheDocument();
    expect(tablist).toHaveAttribute("aria-label", "Interactive Demo Modes");

    const tabs = container.querySelectorAll('[role="tab"]');
    expect(tabs.length).toBe(3);

    const activeTab = container.querySelector(
      '[role="tab"][aria-selected="true"]',
    );
    expect(activeTab).toBeInTheDocument();

    const tabpanel = container.querySelector('[role="tabpanel"]');
    expect(tabpanel).toBeInTheDocument();
  });
});
