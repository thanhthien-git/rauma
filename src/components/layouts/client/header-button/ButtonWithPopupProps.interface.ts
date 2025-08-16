export interface ButtonWithPopupProps {
  count?: number;
  onClick?: () => void;
  buttonClassName?: string;
  children: React.ReactNode;
  popupContent: React.ReactNode;
}
