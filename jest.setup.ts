import "@testing-library/jest-dom";
import { mockUseRouter } from "./tests/mocks";

jest.mock("next/navigation", () => ({ useRouter: mockUseRouter }));
jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));
