import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import HomePage from "features/home/index";

// test with vitest
describe("HomePage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
