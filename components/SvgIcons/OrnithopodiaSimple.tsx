import { createUseStyles } from 'react-jss';
import { SvgIcon, SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#b23950',
  },
});

export function OrnithopodiaSimple(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="56.74 4.14 52.99 2.05 52.67 1.92 49.88 0.73 46.96 0 43.33 0 40.1 1.98 40.67 2.79 42.49 2.34 44.97 2.02 46.61 2.63 46.27 3.67 45.16 7.08 43.96 12.41 29.37 14.65 20.66 22.19 14 34.88 0 41.1 13.56 41.59 23.53 35.22 27.28 34.04 25.61 39.16 28.21 48.01 31.22 48.35 31.85 50 37.1 50 33.94 39.64 39.92 28.41 42.45 26.94 43.31 29.03 41.95 33.16 42.35 34.88 44.95 33.63 45.89 31.76 45.95 33.08 49.26 31.82 50.52 26.56 48.14 21.55 50.47 9.15 51.34 9.24 50.49 5.8 52.36 8.43 54.63 9.57 58.69 9.98 56.74 4.14"
        className={classes.body}
      />
    </SvgIcon>
  );
}

OrnithopodiaSimple.defaultProps = {
  viewBox: '0 0 59 50',
  height: 50,
};
