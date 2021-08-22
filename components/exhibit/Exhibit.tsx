import { createUseStyles } from 'react-jss';

import { SvgIcon } from '../SvgIcons/SvgIcon';

const useStyles = createUseStyles({
  exhibit: {
    border: '1px solid black',
  },
});

type ExhibitProps = {
  size: number;
};

export function Exhibit({ size }: ExhibitProps): JSX.Element {
  const classes = useStyles();

  return (
    <SvgIcon height="500" viewBox="0 0 100 100">
      <path
        d="M 10, 10 h 30 v 10 v 4 v 1 h -5 v -1 h -10 v -4 h -15 z"
        stroke="black"
        fill="transparent"
      />
    </SvgIcon>
  );
}
