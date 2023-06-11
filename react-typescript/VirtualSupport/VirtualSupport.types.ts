import { Theme } from '@x/x'; // Sensitive information hidden.

interface SharedProps {
  textAlign?: 'left' | 'center' | 'right';
}

export interface VirtualSupportData {
  title: string;
  description: string;
  websiteUrl: string;
  phone: string;
  zoomUrl: string;
}

export interface VirtualSupportProps extends SharedProps {
  className?: string;
  data: VirtualSupportData[];
  open?: boolean;
  disableToggle?: boolean;
  buttonCloseLabel?: string;
  buttonOpenLabel?: string;
  fullWidth?: boolean;
}

export interface VirtualSupportThemeProps extends SharedProps {
  theme?: typeof Theme;
}
