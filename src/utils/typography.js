import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

lincolnTheme.overrideStyles = ({ rhythm }, options) => ({
  a: {
    textShadow: ''
  }
});

const typography = new Typography(lincolnTheme);

export default typography;
