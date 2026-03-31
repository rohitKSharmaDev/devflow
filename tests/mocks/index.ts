export * from "./router.mock";
export * from "./toast.mock";

// Prevents TEST POLLUTION
export const resetAllMocks = () => {
  jest.clearAllMocks();
};