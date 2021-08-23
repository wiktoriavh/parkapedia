import { createUseStyles } from 'react-jss';

import type { DinosaurType } from '../../lib/DinosaurType';
import { AnkylosauriaDetailed } from '../SvgIcons/AnkylosauriaDetailed';
import { CeratopsiaDetailed } from '../SvgIcons/CeratopsiaDetailed';
import { OrnithopodiaDetailed } from '../SvgIcons/OrnithopodiaDetailed';
import { SauropodaDetailed } from '../SvgIcons/SauropodaDetailed';
import { TheropodaDetailed } from '../SvgIcons/TheropodaDetailed';

type HerdProps = {
  herd: Pick<DinosaurType, 'herd'>;
  type: Pick<DinosaurType, 'class'>;
};

const useStyles = createUseStyles({
  herd: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export function Herd({ herd, type }: HerdProps): JSX.Element {
  const Dino = getDinoIcon(type);
  const classes = useStyles();

  const dinoAmount = herd ? 5 : 2;

  return (
    <div className={classes.herd}>
      {/* {[...Array(dinoAmount)].map((_) => (
        <Dino height="250" />
      ))} */}
    </div>
  );
}

function getDinoIcon(type: Pick<DinosaurType, 'class'>): JSX.Element {
  switch (type) {
    case 'ceratopsia':
      return CeratopsiaDetailed;
    case 'ornithopoda':
      return OrnithopodiaDetailed;
    case 'sauropoda':
      return SauropodaDetailed;
    case 'stegosauria':
      return SauropodaDetailed;
    case 'theropoda':
      return TheropodaDetailed;
    case 'ankylosauria':
    default:
      return AnkylosauriaDetailed;
  }
}
