import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.overrideStyles = () => ({
  a: {
    textShadow: ''
  }
});

const typography = new Typography(lincolnTheme);

export default typography;
