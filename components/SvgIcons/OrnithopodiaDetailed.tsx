import { createUseStyles } from 'react-jss';
import { SvgIcon, SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#e24b4b',
  },
  bodyShadow: {
    fill: '#b23950',
  },
  markings: {
    fill: '#64af38',
  },
});

export function OrnithopodiaDetailed(props: SvgIconProps): JSX.Element {
  const classes = useStyle();
  return (
    <SvgIcon {...props}>
      <polygon
        points="27.85 32.27 25.61 39.16 28.21 48.01 32.78 48.53 29.81 40 33.38 31.99 27.85 32.27"
        className={classes.bodyShadow}
      />
      <polygon
        points="41.95 25.71 42.03 25.92 43.31 29.03 41.95 33.16 42.35 34.88 44.95 33.63 47.11 29.31 47.91 26.03 45.35 23.06 41.95 25.71"
        className={classes.bodyShadow}
      />
      <polygon
        points="58.69 9.98 54.63 9.57 52.36 8.43 50.49 5.8 51.34 9.24 50.47 9.15 48.14 21.55 50.52 26.56 49.26 31.82 45.95 33.08 45.86 31.03 46.92 27.05 45.46 25.2 39.92 28.41 33.94 39.64 37.1 50 31.85 50 28.2 40.47 30.78 32.93 23.53 35.22 13.56 41.59 0 41.1 14 34.88 20.66 22.19 29.37 14.65 43.96 12.41 45.16 7.08 46.27 3.67 46.61 2.63 44.97 2.02 42.49 2.34 40.67 2.79 40.1 1.98 43.33 0 46.96 0 49.88 0.73 52.67 1.92 52.99 2.05 56.74 4.14 58.69 9.98"
        className={classes.body}
      />
      <rect
        x="52.86"
        y="1.85"
        width="2.33"
        height="2.33"
        rx="1.17"
        transform="translate(3.76 23.05) rotate(-24.92)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="53.3"
        y="2.28"
        width="1.46"
        height="1.46"
        rx="0.73"
        transform="translate(3.76 23.05) rotate(-24.92)"
      />
      <polygon
        points="52.67 1.92 52.41 3.33 49.41 2.21 45.84 4.99 46.27 3.67 46.61 2.63 44.97 2.02 42.49 2.34 40.67 2.79 40.1 1.98 43.33 0 46.96 0 49.88 0.73 52.67 1.92"
        className={classes.markings}
      />
      <rect
        x="49.45"
        y="2.16"
        width="2.33"
        height="2.33"
        rx="1.17"
        transform="translate(3.31 21.64) rotate(-24.92)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="49.88"
        y="2.6"
        width="1.46"
        height="1.46"
        rx="0.73"
        transform="translate(3.31 21.64) rotate(-24.92)"
      />
      <polygon
        points="35.77 15.01 31.9 15.5 28.96 17.03 28.16 18.88 30.61 18.51 33.68 16.94 35.77 15.01"
        className={classes.bodyShadow}
      />
      <polygon
        points="26.1 19.22 24.85 19.63 23.27 21.04 23.65 21.85 25.25 21.52 26.1 20.4 26.1 19.22"
        className={classes.bodyShadow}
      />
    </SvgIcon>
  );
}

OrnithopodiaDetailed.defaultProps = {
  viewBox: '0 0 59 50',
  height: 50,
};
