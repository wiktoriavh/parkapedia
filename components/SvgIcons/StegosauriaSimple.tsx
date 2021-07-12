import { createUseStyles } from 'react-jss';
import { SvgIcon, SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#b340ab',
  },
});

export function StegosauriaSimple(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="93.11 25.87 77.9 24.89 75.77 22.98 78.85 20.13 77.68 16.48 72.04 18.06 72.04 19.63 68.4 16.36 71.26 14.35 69.67 6.85 58.74 9.54 59.51 12.32 55.15 12.63 56.9 8.11 49.2 0 42.66 11.35 43.59 13.46 40.82 13.66 40.22 9.26 32.29 7.82 31.68 20.33 32.78 21.14 29.42 24.49 28.86 20.54 21.84 18.75 21.84 28.58 24.83 29.08 18.23 35.67 0 42.1 19.43 42.88 33.53 35.28 30.89 50 40.22 50 41.13 44.41 43.09 47.22 49 47.22 46.95 39.81 55.01 39.87 56.64 47.22 62.83 47.22 63.48 40.62 63.48 40.62 69.78 48.91 79.23 48.91 71.21 38.47 78.33 34.45 85.82 34.89 82.56 31.43 87.52 33.85 90.87 34.33 99.56 32.49 93.11 25.87"
        className={classes.body}
      />
    </SvgIcon>
  );
}

StegosauriaSimple.defaultProps = {
  viewBox: '0 0 100 50',
  height: 50,
};
