import { createUseStyles } from 'react-jss';
import { SvgIcon, SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#bb014c',
  },
});

export function CeratopsiaSimple(props: SvgIconProps): JSX.Element {
  const classes = useStyle();
  return (
    <SvgIcon {...props}>
      <polygon
        points="106.42 25.56 102.79 24.72 106.14 13.97 98.46 19.55 91.62 15.22 87.43 1.26 80.45 0 83.24 5.17 81.69 12.8 81.6 12.72 79 10.23 77.95 9.23 75.89 7.9 73.15 6.12 69.31 3.63 65.8 1.36 65.64 1.26 59.31 1.58 55.95 1.75 51.37 1.98 46.7 2.22 44.59 2.33 42.35 4.75 40.42 6.86 36.21 11.42 33.15 14.73 31.1 16.96 29.61 18.57 28.13 18.72 11.73 20.39 0 14.95 7.68 27.65 22.77 33.52 39.38 29.61 33.38 38.55 29.47 50 40.78 50 43.73 44.36 46.12 49.05 55.45 49.05 51.16 35.28 61.45 38.83 64.09 38.5 60.75 49.05 68 49.05 71.7 41.65 76.4 49.44 85.75 49.44 76.95 32.47 95.27 33.34 93.99 27.83 100.67 32.08 101.45 36.73 97.45 39.53 103.63 39.24 115.36 19.13 106.42 25.56"
        className={classes.body}
      />
    </SvgIcon>
  );
}

CeratopsiaSimple.defaultProps = {
  viewBox: "0 0 115 50",
  height: 50
}
