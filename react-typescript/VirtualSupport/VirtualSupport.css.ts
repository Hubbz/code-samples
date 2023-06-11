import type { VirtualSupportThemeProps } from './VirtualSupport.types';

const styles = (props: VirtualSupportThemeProps) => {
  const { theme, textAlign = 'left' } = props;

  if (!theme) return;

  return {
    textAlign,

    '& .comp-virtual-support__item': {
      maxWidth: '600px',
    },
  };
};

export default styles;
