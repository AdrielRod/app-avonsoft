export interface ToastState {
  id: string;
  message: string;
  duration: number;
}

export interface ToastParams {
  message: string;
  duration?: number;
}

export interface ToastItemProps {
  item: ToastState;
}
