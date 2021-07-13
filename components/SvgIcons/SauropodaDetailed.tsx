import { createUseStyles } from 'react-jss';

import type { SvgIconProps } from './SvgIcon';
import { SvgIcon } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#b340ab',
  },
  bodyShadow: {
    fill: '#792f89',
  },
  markings: {
    fill: '', // no markings
  },
});

export function SauropodaDetailed(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="29.61 48.47 33.92 48.47 33.31 40.53 27.73 42.36 29.61 48.47"
        className={classes.bodyShadow}
      />
      <polygon
        points="37.74 48.47 40.95 48.47 43.17 37.01 38.97 36.32 37.74 48.47"
        className={classes.bodyShadow}
      />
      <polygon
        points="55.73 4.91 53.89 4.54 55.19 5.83 56.04 6.07 52.56 7.75 51.04 30.36 45.99 38.01 48.67 50 44.16 50 41.26 38.54 32.93 42.74 29.19 42.9 27.89 50 22.16 50 24.3 39.15 16.58 43.73 8.25 46.72 0 47.17 9.78 43.28 20.63 35.41 30.87 26.39 41.26 25.78 46.07 23.49 47.29 7.83 51.8 1.26 59.21 1.26 57.54 4.54 55.73 4.91"
        className={classes.body}
      />
      <polygon
        points="26.3 32.88 27.73 31.08 30.16 30.82 29.42 32.09 28.23 32.62 26.3 32.88"
        className={classes.bodyShadow}
      />
      <polygon
        points="29.61 29.28 31.61 27.49 35.82 27.49 35.82 28.8 33.45 30.16 29.61 29.28"
        className={classes.bodyShadow}
      />
      <polygon
        points="38.05 27.22 40.45 26.65 41.91 27.22 40.95 28.14 39.41 28.41 38.05 27.22"
        className={classes.bodyShadow}
      />
      <rect
        x="53.09"
        width="2.85"
        height="2.85"
        rx="1.42"
        transform="translate(4.48 23.1) rotate(-24.92)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="53.62"
        y="0.53"
        width="1.79"
        height="1.79"
        rx="0.89"
        transform="translate(4.48 23.1) rotate(-24.92)"
      />
      <rect
        x="49.96"
        y="2.57"
        width="2.85"
        height="2.85"
        rx="1.42"
        transform="translate(3.1 22.02) rotate(-24.92)"
        style={{ fill: '#fff' }}
      />
      <rect
        x="50.49"
        y="3.1"
        width="1.79"
        height="1.79"
        rx="0.89"
        transform="translate(3.1 22.02) rotate(-24.92)"
      />
    </SvgIcon>
  );
}

SauropodaDetailed.defaultProps = {
  viewBox: '0 0 60 50',
  height: 50,
};
