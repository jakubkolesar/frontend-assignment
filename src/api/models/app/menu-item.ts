export interface MenuItem {
  title: string;
  icon: any;
  isActive?: boolean;
  onClick?: () => void;
}
