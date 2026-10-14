import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

if (typeof HTMLCanvasElement !== "undefined") {
  HTMLCanvasElement.prototype.getContext =
    vi.fn() as unknown as typeof HTMLCanvasElement.prototype.getContext;
}
