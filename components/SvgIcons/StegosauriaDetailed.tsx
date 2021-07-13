import { createUseStyles } from 'react-jss';

import type { SvgIconProps } from './SvgIcon';
import { SvgIcon } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#8362cc',
  },
  bodyShadow: {
    fill: '#b340ab',
  },
  markings: {
    fill: '#f440ab',
  },
});

export function StegosauriaDetailed(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="56.64 47.22 62.83 47.22 63.48 40.62 64.13 38.07 54.37 36.97 56.64 47.22"
        className={classes.bodyShadow}
      />
      <polygon
        points="43.09 47.22 49 47.22 46.05 36.56 37.24 38.83 43.09 47.22"
        className={classes.bodyShadow}
      />
      <polygon
        points="25.14 29.13 21.84 28.58 21.84 18.75 28.86 20.54 29.68 26.31 25.14 29.13"
        className={classes.body}
      />
      <polygon
        points="34.98 22.74 31.68 20.33 32.29 7.82 40.22 9.26 41.23 16.69 34.98 22.74"
        className={classes.body}
      />
      <polygon
        points="45.62 18.09 42.66 11.35 49.2 0 56.9 8.11 53.05 18.09 45.62 18.09"
        className={classes.body}
      />
      <polygon
        points="60.8 17 58.74 9.54 69.67 6.85 71.26 14.35 65 18.75 60.8 17"
        className={classes.body}
      />
      <polygon
        points="72.04 21.02 72.04 18.06 77.68 16.48 78.85 20.13 75.44 23.29 72.04 21.02"
        className={classes.body}
      />
      <polygon
        points="99.56 32.49 90.87 34.33 87.52 33.85 82.56 31.43 85.82 34.89 78.33 34.45 71.21 38.47 79.23 48.91 69.78 48.91 62.96 39.93 41.89 39.78 40.22 50 30.89 50 33.53 35.28 19.43 42.88 0 42.1 18.23 35.67 40.22 13.71 63.57 12.03 77.9 24.89 93.11 25.87 99.56 32.49"
        className={classes.markings}
      />
      <rect
        x="90.3"
        y="25.41"
        width="4.31"
        height="4.31"
        rx="2.16"
        style={{ fill: '#fff' }}
      />
      <rect x="91.1" y="26.21" width="2.71" height="2.71" rx="1.35" />
      <rect
        x="84.36"
        y="26.94"
        width="4.31"
        height="4.31"
        rx="2.16"
        style={{ fill: '#fff' }}
      />
      <rect x="85.16" y="27.75" width="2.71" height="2.71" rx="1.35" />
      <polygon
        points="33.78 24.5 35.64 20.39 39.52 17 43.13 17.55 39.79 20.39 33.78 24.5"
        className={classes.bodyShadow}
      />
      <polygon
        points="69.03 24.14 73.3 25.41 71.53 21.84 65.6 17.77 64.67 20.75 69.03 24.14"
        className={classes.bodyShadow}
      />
      <polygon
        points="63.18 16.48 62.4 15.28 54.37 14.66 50.81 15.57 55.61 17 63.18 16.48"
        className={classes.bodyShadow}
      />
    </SvgIcon>
  );
}

StegosauriaDetailed.defaultProps = {
  viewBox: '0 0 100 50',
  height: 50,
};
