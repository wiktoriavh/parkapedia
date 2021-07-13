import { createUseStyles } from 'react-jss';

import type { SvgIconProps } from './SvgIcon';
import { SvgIcon } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#edbd5d',
  },
  bodyShadow: {
    fill: '#ba7c3e',
  },
  markings: {
    fill: '#e24b4b',
  },
});

export function TheropodaDetailed(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="41.99 27.95 37.69 35.42 39.84 47.58 43.81 47.58 43.2 39.58 46.3 29.15 41.99 27.95"
        className={classes.bodyShadow}
      />
      <polygon
        points="56.8 25.68 60.27 28.32 59.59 31.19 57.48 33.38 58.01 35.27 60.8 34.59 62.84 28.7 61.48 24.47 56.8 25.68"
        className={classes.bodyShadow}
      />
      <polygon
        points="78.78 8.53 77.8 13.06 74.62 12.06 73.05 10.83 71.59 6.97 70.71 10.36 68.51 8.53 65.71 9.97 63.82 23.19 66.62 28.02 65.26 34.59 62.24 35.35 62.09 33.46 62.99 30.51 63.45 27.27 58.84 26.36 52.12 28.25 45.09 36.93 44.94 44.49 47.36 42.6 52.19 45.17 47.58 45.85 49.24 50 42.9 50 39.8 36.48 43.58 30.89 26.36 16.54 13.9 13.82 0 14.73 12.54 9.97 25.76 10.51 27.27 10.57 35.65 14.35 56.04 14.73 58.99 5.13 64.81 0.12 64.96 0 71.22 0.45 78.78 8.53"
        className={classes.body}
      />
      <rect
        x="72.57"
        y="1.8"
        width="4.1"
        height="4.1"
        rx="2.05"
        transform="translate(2.05 -13.95) rotate(10.83)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="73.34"
        y="2.57"
        width="2.57"
        height="2.57"
        rx="1.29"
        transform="translate(2.05 -13.95) rotate(10.83)"
      />
      <rect
        x="67.36"
        y="1.17"
        width="4.1"
        height="4.1"
        rx="2.05"
        transform="matrix(0.98, 0.19, -0.19, 0.98, 1.84, -12.98)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="68.12"
        y="1.93"
        width="2.57"
        height="2.57"
        rx="1.29"
        transform="translate(1.84 -12.98) rotate(10.83)"
      />
      <polygon
        points="65.52 1.06 62.6 2.75 62.34 4.34 59.82 5.56 59.82 8.15 58.42 10.48 58.42 14.4 55.99 15.88 55.56 17.68 50.16 15.61 47.25 18.1 42.65 15.77 39.63 17.84 36.98 15.4 32.22 16.09 30.63 12.65 26.45 12.65 25.76 10.51 27.27 10.57 35.65 14.35 56.04 14.73 58.99 5.13 64.81 0.12 65.52 1.06"
        className={classes.markings}
      />
    </SvgIcon>
  );
}

TheropodaDetailed.defaultProps = {
  viewBox: '0 0 79 50',
  height: 50,
};
