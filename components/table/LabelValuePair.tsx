import { createUseStyles } from 'react-jss';
import { Text } from '../typography/Text';

const useStyles = createUseStyles<
  string,
  { [key: string]: string },
  { [key: string]: string }
>((theme) => ({
  label: {
    backgroundColor: (props) => (props.typeColor === 'blue' ? theme.blue : theme.yellow),
    padding: 10,
    width: 180,
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: 20,
    letterSpacing: 1,
  },
  value: {
    backgroundColor: 'white',
    padding: '10px 22px',
    fontSize: 20,
    letterSpacing: 1,
  },
  labelValueContainer: {
    margin: '16px 0',
    display: 'flex',
    flexDirection: 'row',
  },
}));

type LabelValuePairProps = {
  label: string;
  value: string | number;
  typeColor: 'blue' | 'yellow';
};

export function LabelValuePair({
  label,
  value,
  typeColor,
}: LabelValuePairProps): JSX.Element {
  const classes = useStyles({ typeColor });

  return (
    <div className={classes.labelValueContainer}>
      <Text component="span" className={classes.label}>
        {label}
      </Text>
      <Text component="span" className={classes.value}>
        {value}
      </Text>
    </div>
  );
}
