import { createUseStyles } from 'react-jss';
import { SvgIcon, SvgIconProps } from './SvgIcon';

const useStyle = createUseStyles({
  body: {
    fill: '#792f89',
  },
});

export function SauropodaSimple(props: SvgIconProps): JSX.Element {
  const classes = useStyle();

  return (
    <SvgIcon {...props}>
      <polygon
        points="59.03 3.36 60.74 0 53.14 0 48.51 6.74 47.26 22.81 42.32 25.16 31.66 25.78 21.16 35.03 10.03 43.1 0 47.1 8.46 46.63 17.01 43.57 24.92 38.87 22.73 50 28.61 50 29.45 45.41 30.37 48.43 34.8 48.43 34.32 42.28 39.6 39.62 38.72 48.43 42.01 48.43 43.26 41.95 45.3 50 49.92 50 47.18 37.7 52.35 29.86 53.92 6.66 57.49 4.94 56.62 4.7 55.28 3.36 57.17 3.75 59.03 3.36"
        className={classes.body}
      />
    </SvgIcon>
  );
}

SauropodaSimple.defaultProps = {
  viewBox: '0 0 60 50',
  height: 50,
};
