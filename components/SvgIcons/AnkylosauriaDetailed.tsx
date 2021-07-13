import { createUseStyles } from 'react-jss';

import { SvgIcon } from './SvgIcon';
import type { SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#2c59c6',
  },
  bodyShadow: {
    fill: '#39a3e5',
  },
  markings: {
    fill: '#edbd5d',
  },
});

export function AnkylosauriaDetailed(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="73.63 45.61 82.4 45.61 82.4 27.57 68.02 26.35 73.63 45.61"
        className={classes.body}
      />
      <polygon
        points="103.13 45.61 111.17 45.61 115.32 33.18 105.08 28.3 101.91 29.76 103.13 45.61"
        className={classes.body}
      />
      <polygon
        points="11.23 29.2 9.42 25.31 13.22 17.8 14.13 26.35 16.57 28.65 22.81 27.3 21.36 24.22 24.35 16.26 25.07 23.77 27.51 26.93 19.46 30.1 11.23 29.2"
        className={classes.markings}
      />
      <polygon
        points="53.38 12.44 55.51 7.62 59.77 5.38 66.16 7.74 70.64 3.81 77.03 1.91 82.4 2.7 84.77 7.17 89.14 1.91 95.98 0 100.13 0.79 102.37 6.22 108.09 3.59 114.48 3.7 118.85 6.95 119.41 10.65 128.83 9.75 132.53 9.53 134.88 11.77 134.88 14.24 110.44 16.26 53.38 12.44"
        className={classes.markings}
      />
      <polygon
        points="164.81 35.62 154.97 36.18 151.08 31.68 149.57 27.19 148.2 32.51 148.76 34.31 139.21 28.55 122.88 30.25 127.51 50 114.58 50 109.46 35.62 92.4 36.35 75.82 31.71 67.05 50 52.66 50 58.02 27.81 33.89 34.15 0 30.25 30.96 24.64 48.51 13.43 65.58 5.63 100.93 2.7 129.7 11.72 146.28 15.14 161.4 23.18 164.81 35.62"
        className={classes.bodyShadow}
      />
      <rect
        x="152.6"
        y="17.86"
        width="7.8"
        height="7.8"
        rx="3.9"
        transform="translate(1.98 54.77) rotate(-19.97)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="154.05"
        y="19.31"
        width="4.9"
        height="4.9"
        rx="2.45"
        transform="translate(1.98 54.77) rotate(-19.97)"
      />
      <rect
        x="142.55"
        y="18.09"
        width="7.8"
        height="7.8"
        rx="3.9"
        transform="translate(1.3 51.35) rotate(-19.97)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="144"
        y="19.54"
        width="4.9"
        height="4.9"
        rx="2.45"
        transform="translate(1.3 51.35) rotate(-19.97)"
      />
      <polygon
        points="127.7 14.3 124.77 12.07 119.61 11.52 119.21 14.3 123.02 15.88 127.7 14.3"
        className={classes.body}
      />
      <polygon
        points="113.5 8.66 105.88 5.65 100.48 6.52 104.29 9.22 110.72 10.09 113.5 8.66"
        className={classes.body}
      />
      <polygon
        points="88.66 6.04 80.64 6.04 76.67 7.87 78.89 9.38 83.47 9.87 86.91 8.13 88.66 6.04"
        className={classes.body}
      />
      <polygon
        points="69.77 8.13 64.13 8.13 59.45 10.73 60.96 13.11 65.32 12.15 68.82 10.62 69.77 8.13"
        className={classes.body}
      />
    </SvgIcon>
  );
}

AnkylosauriaDetailed.defaultProps = {
  viewBox: '0 0 165 50',
  height: 50,
};
