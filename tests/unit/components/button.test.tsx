import { Button } from "@/components/ui/button";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Button component- TDD approach", () => {
  it("should render a button with text", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click me");
  });

  it("should call onClick handler when button is clicked", () => {
    const handleClick = jest.fn();
    
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("should render the button with correct variant", () => {
    render(<Button variant="destructive">Click me</Button>);

    expect(screen.getByText("Click me")).toHaveClass("bg-destructive");
  });

  it("should render the button with the correct disabled state", () => {
    render(<Button disabled>Click me</Button>);

    expect(screen.getByText("Click me")).toHaveAttribute("disabled");
  });
});