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

  return (
    <div className={classes.herd}>
      <Dino height="250" />
      <Dino height="250" />
      <Dino height="250" />
      <Dino height="250" />
      <Dino height="250" />
    </div>
  );
}

function getDinoIcon(type): JSX.Element | null {
  switch (type) {
    case 'ankylosauria':
      return AnkylosauriaDetailed;
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
    default:
      
  }
}
