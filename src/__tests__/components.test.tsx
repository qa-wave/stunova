import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FAQ } from "@/components/FAQ";
import { Newsletter } from "@/components/Newsletter";
import { CookieConsent } from "@/components/CookieConsent";
import { BackToTop } from "@/components/BackToTop";

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("FAQ", () => {
  it("renders all questions", () => {
    render(<FAQ />);
    expect(screen.getByText(/Musím za tebou chodit osobně/)).toBeDefined();
    expect(screen.getByText(/Jak ti posílám doklady/)).toBeDefined();
    expect(screen.getByText(/Kolik to bude stát/)).toBeDefined();
  });

  it("expands answer on click", () => {
    render(<FAQ />);
    const button = screen.getByText(/Musím za tebou chodit osobně/);
    fireEvent.click(button);
    expect(button.closest("button")?.getAttribute("aria-expanded")).toBe("true");
  });

  it("collapses on second click", () => {
    render(<FAQ />);
    const button = screen.getByText(/Musím za tebou chodit osobně/);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(button.closest("button")?.getAttribute("aria-expanded")).toBe("false");
  });
});

describe("Newsletter", () => {
  it("renders email input and submit button", () => {
    render(<Newsletter />);
    expect(screen.getByPlaceholderText(/tvuj@email/)).toBeDefined();
    expect(screen.getByText("Odebírat")).toBeDefined();
  });

  it("shows success after submit", () => {
    render(<Newsletter />);
    const input = screen.getByPlaceholderText(/tvuj@email/) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test@test.cz" } });
    fireEvent.click(screen.getByText("Odebírat"));
    expect(screen.getByText(/Díky/)).toBeDefined();
  });
});

describe("BackToTop", () => {
  it("does not render initially (scrollY = 0)", () => {
    render(<BackToTop />);
    expect(screen.queryByLabelText("Zpět nahoru")).toBeNull();
  });
});
