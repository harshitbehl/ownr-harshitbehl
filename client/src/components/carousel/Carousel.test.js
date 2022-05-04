import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from "./Carousel";

describe("Carousel Buttons Rendering", () => {
  test("carousel buttons should be rendered", () => {
    render(<Carousel />);

    // Carousel Option Buttons
    const carouselButtons = screen.getAllByRole("button");

    // Sharks Button
    expect(carouselButtons[0]).toBeInTheDocument();

    // Cats Button
    expect(carouselButtons[1]).toBeInTheDocument();
  });
});

describe("Carousel Rendering", () => {
  test("carousel should be rendered", () => {
    render(<Carousel />);

    // Carousel
    const carousel = screen.getAllByTestId("carousel");
    expect(carousel[0]).toBeInTheDocument();
  });
});
