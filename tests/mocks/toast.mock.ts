import { toast } from "sonner";

export const mockToast = toast.success as jest.Mock;
export const mockToastError = toast.error as jest.Mock;
