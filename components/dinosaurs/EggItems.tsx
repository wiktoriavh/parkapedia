import { Box } from '../layouts/Box';
import { Text } from '../typography/Text';
import type { EggItemsType } from '../../lib/DinosaurType';
import { createUseStyles, DefaultTheme } from 'react-jss';

type EggItemsProps = {
  items: { label: string; value: number }[];
};

const useStyles = createUseStyles<string, unknown, DefaultTheme>((theme) => ({
  eggItems: {
    backgroundColor: 'rgba(93, 91, 88, 0.3)',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: 35,
    borderRadius: 15,

    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    '& img': {
      width: 180,
      height: 180,
      backgroundColor: 'black',
      outline: 'none',
      border: 0,
    },
  },
  value: {
    backgroundColor: theme.palette.blue,
    border: `5px solid ${theme.palette.white}`,
    borderRadius: 50,
    width: 55,
    height: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 26,
    fontWeight: 600,
    position: 'absolute',
    bottom: `${55 - 35}px`,
  },
}));

export const EggItems = ({ items }: EggItemsProps): JSX.Element => {
  const classes = useStyles();

  return (
    <Box col={8} className={classes.eggItems}>
      {items.map(({ label, value }) => {
        return (
          <div key={label}>
            <Text component="span" style={{ fontSize: 20, marginBottom: 20 }}>
              {value} {label}
            </Text>
            <img />
            <Text component="span" className={classes.value}>
              {value}
            </Text>
          </div>
        );
      })}
    </Box>
  );
};
