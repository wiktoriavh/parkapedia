import { createUseStyles, DefaultTheme } from 'react-jss';

import { Heading } from '../typography/Heading';
import { Box } from './Box';

const useStyles = createUseStyles<string, unknown, DefaultTheme>((theme) => ({
  headingSection: {
    backgroundColor: theme.palette.magenta,
    height: 140,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingSectionTextContainer: {
    height: 50,
    backgroundColor: 'white',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingSectionText: {
    margin: 0,
    textAlign: 'center',
  },
}));

type HeadingSectionProps = {
  title: string;
};

export function HeadingSection({ title }: HeadingSectionProps): JSX.Element {
  const classes = useStyles();

  return (
    <Box fullWidth col={12} className={classes.headingSection}>
      <Box col={6} className={classes.headingSectionTextContainer}>
        <Heading className={classes.headingSectionText} component="h1" disablelink>
          {title}
        </Heading>
      </Box>
    </Box>
  );
}
