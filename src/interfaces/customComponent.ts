export interface CustomComponent {
  title?: string;
  ariaLabel: string;
  bg?: string;
  icon?: React.ReactElement;
  children?: React.ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
