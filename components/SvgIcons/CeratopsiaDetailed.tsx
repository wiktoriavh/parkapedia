import { createUseStyles } from 'react-jss';

import { SvgIcon } from './SvgIcon';
import type { SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#bb014c',
  },
  bodyShadow: {
    fill: '#931b46',
  },
  markings: {
    fill: '#2c3240',
  },
});

export function CeratopsiaDetailed(props: SvgIconProps): JSX.Element {
  const classes = useStyle();
  return (
    <SvgIcon {...props}>
      <polygon
        points="42.78 42.49 46.12 49.05 55.45 49.05 50.03 31.66 40.13 38 42.78 42.49"
        className={classes.bodyShadow}
      />
      <polygon
        points="65.24 34.89 60.75 49.05 68 49.05 73.99 37.08 65.24 34.89"
        className={classes.bodyShadow}
      />
      <polygon
        points="115.36 19.13 103.63 39.24 97.45 39.53 101.45 36.73 100.67 32.08 93.99 27.83 95.27 33.34 76.95 32.47 85.75 49.44 76.4 49.44 69.41 37.85 61.45 38.83 48.88 34.5 40.78 50 29.47 50 33.38 38.55 39.38 29.61 22.77 33.52 7.68 27.65 0 14.95 11.73 20.39 28.13 18.72 29.61 18.57 31.1 16.96 33.15 14.73 36.21 11.42 40.42 6.86 42.35 4.75 44.59 2.33 46.7 2.22 51.37 1.98 55.95 1.75 59.31 1.58 65.64 1.26 65.8 1.36 69.31 3.63 73.15 6.12 75.89 7.9 77.95 9.23 79 10.23 81.6 12.72 81.69 12.8 83.24 5.17 80.45 0 87.43 1.26 91.62 15.22 98.46 19.55 106.14 13.97 102.79 24.72 106.42 25.56 115.36 19.13"
        className={classes.body}
      />
      <polygon
        points="31.1 16.96 31.67 19.69 30.15 25 28.13 18.72 29.61 18.57 31.1 16.96"
        className={classes.markings}
      />
      <polygon
        points="36.21 11.42 38.85 15.42 35.95 21.98 35.19 18.01 33.15 14.73 36.21 11.42"
        className={classes.markings}
      />
      <polygon
        points="42.35 4.75 43.43 9.77 40.42 6.86 42.35 4.75"
        className={classes.markings}
      />
      <polygon
        points="46.7 2.22 51.37 1.98 51.37 8.24 47.79 13.74 46.7 2.22"
        className={classes.markings}
      />
      <polygon
        points="55.95 1.75 59.31 1.58 59.31 5.19 56.87 15.26 55.45 6.26 55.95 1.75"
        className={classes.markings}
      />
      <polygon
        points="69.31 3.63 66.49 9 62.82 18.01 64.96 5.49 65.8 1.36 69.31 3.63"
        className={classes.markings}
      />
      <polygon
        points="74.89 11.51 67.37 18.32 71.83 10.38 73.15 6.12 75.89 7.9 74.89 11.51"
        className={classes.markings}
      />
      <polygon
        points="81.6 12.72 81.6 15.11 73.99 18.32 77.17 14.65 79 10.23 81.6 12.72"
        className={classes.markings}
      />
      <rect
        x="93"
        y="17.39"
        width="6.31"
        height="6.31"
        rx="3.15"
        transform="translate(0.3 42.43) rotate(-24.92)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="94.18"
        y="18.56"
        width="3.96"
        height="3.96"
        rx="1.98"
        transform="translate(0.3 42.43) rotate(-24.92)"
      />
      <rect
        x="84.93"
        y="18.27"
        width="6.31"
        height="6.31"
        rx="3.15"
        transform="translate(-0.82 39.11) rotate(-24.92)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="86.1"
        y="19.44"
        width="3.96"
        height="3.96"
        rx="1.98"
        transform="translate(-0.82 39.11) rotate(-24.92)"
      />
    </SvgIcon>
  );
}

CeratopsiaDetailed.defaultProps = {
  viewBox: '0 0 115 50',
  height: 50,
};
