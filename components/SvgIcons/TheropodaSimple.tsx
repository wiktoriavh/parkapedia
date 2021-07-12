import { createUseStyles } from 'react-jss';
import { SvgIcon, SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#e24b4b',
  },
});

export function TheropodaSimple(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="71.22 0.45 64.96 0 64.81 0.12 58.99 5.13 56.04 14.73 35.65 14.35 27.27 10.57 25.76 10.51 12.54 9.97 0 14.73 13.9 13.82 26.36 16.54 41.36 29.04 37.69 35.42 39.84 47.58 42.35 47.58 42.9 50 49.24 50 47.58 45.85 52.19 45.17 47.36 42.6 44.94 44.49 45.09 36.93 52.12 28.25 58 26.59 60.27 28.32 59.59 31.19 57.48 33.38 58.01 35.27 60.8 34.59 62.84 28.7 62.31 27.04 63.45 27.27 62.99 30.51 62.09 33.46 62.24 35.35 65.26 34.59 66.62 28.02 63.82 23.19 65.71 9.97 68.51 8.53 70.71 10.36 71.59 6.97 73.05 10.83 74.62 12.06 77.8 13.06 78.78 8.53 71.22 0.45"
        className={classes.body}
      />
    </SvgIcon>
  );
}

TheropodaSimple.defaultProps = {
  viewBox: '0 0 79 50',
  height: 50,
};
