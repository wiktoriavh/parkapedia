import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import type { DefaultTheme } from 'react-jss';

import type { SandBiome, GrassBiome, SwampBiome } from '../../lib/DinosaurType';
import { Text } from '../typography/Text';

const useStyles = createUseStyles<string, Pick<BiomeGraphProps, 'tiles'>>(
  (theme) => ({
    graph: {
      position: 'relative',
      paddingLeft: '3rem',
      marginBottom: '3rem',
      marginTop: '2rem',
    },
    biomeGraph: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 0,
      border: '5px solid white',
      height: 480,
    },
    grassBiome: {
      gridTemplateAreas: (props) => getBiomeAreas(props.tiles),
    },
    swampBione: {
      gridTemplateAreas: (props) => getBiomeAreas(props.tiles),
    },
    sandBiome: {
      gridTemplateAreas: (props) => getBiomeAreas(props.tiles),
    },
    biomeArea: {
      border: '5px solid white',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    taiga: {
      gridArea: 'taiga',
      backgroundColor: theme.palette.biomes.taiga,
    },
    forest: {
      gridArea: 'forest',
      backgroundColor: theme.palette.biomes.forest,
    },
    rainforest: {
      gridArea: 'rainforest',
      backgroundColor: theme.palette.biomes.rainforest,
    },
    tundra: {
      gridArea: 'tundra',
      backgroundColor: theme.palette.biomes.tundra,
    },
    alpine: {
      gridArea: 'alpine',
      backgroundColor: theme.palette.biomes.alpine,
    },
    swamp: {
      gridArea: 'swamp',
      backgroundColor: theme.palette.biomes.swamp,
    },
    desert: {
      gridArea: 'desert',
      backgroundColor: theme.palette.biomes.desert,
    },
    prairie: {
      gridArea: 'prairie',
      backgroundColor: theme.palette.biomes.prairie,
    },
    savannah: {
      gridArea: 'savannah',
      backgroundColor: theme.palette.biomes.savannah,
    },
    text: {
      position: 'relative',
    },
    selected: {
      '&::before': {
        display: 'block',
        content: '""',
        width: '1rem',
        height: '1rem',
        borderRadius: 15,
        backgroundColor: theme.palette.magenta,
        position: 'absolute',
        left: -20,
        border: '2px solid white',
        boxSizing: 'border-box',
      },
    },
    rugginess: {
      position: 'absolute',
      left: -55,
      top: 'calc(50% - 1.5rem)',
      transform: 'rotate(-90deg)',
      fontSize: '1.5rem',
    },
    wetness: {
      position: 'absolute',
      fontSize: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: '-3rem',
    },
  })
);

const firstArea = {
  grass: 'taiga',
  sand: 'desert',
  swamp: 'swamp',
};

const secondArea = {
  grass: 'forest',
  sand: 'prairie',
  swamp: 'alpine',
};

const thirdArea = {
  grass: 'rainforest',
  sand: 'savannah',
  swamp: 'tundra',
};

type BiomeGraphProps = GrassBiome | SwampBiome | SandBiome;

export function BiomeGraph({
  biome,
  tiles,
}: Omit<BiomeGraphProps, 'exhibit_size'>): JSX.Element {
  const classes = useStyles({ tiles });
  const { t } = useTranslation('biomes');

  const isSelected = '{{type}}_is_selected';

  return (
    <div className={classes.graph}>
      <div
        aria-label={t(tiles)}
        // tabIndex={0}
        className={clsx(classes.biomeGraph, {
          [classes.grassBiome]: tiles === 'grass',
          [classes.swampBione]: tiles === 'swamp',
          [classes.sandBiome]: tiles === 'sand',
        })}
      >
        <div
          aria-label={
            biome === firstArea[tiles]
              ? t(isSelected, { type: firstArea[tiles] })
              : t(firstArea[tiles])
          }
          // tabIndex={0}
          className={clsx(classes.biomeArea, {
            [classes.taiga]: tiles === 'grass',
            [classes.desert]: tiles === 'sand',
            [classes.tundra]: tiles === 'swamp',
          })}
        >
          <Text
            component="span"
            className={clsx(classes.text, {
              [classes.selected]: biome === firstArea[tiles],
            })}
          >
            {t(firstArea[tiles])}
          </Text>
        </div>
        <div
          aria-label={
            biome === secondArea[tiles]
              ? t(isSelected, { type: secondArea[tiles] })
              : t(secondArea[tiles])
          }
          // tabIndex={0}
          className={clsx(classes.biomeArea, {
            [classes.forest]: tiles === 'grass',
            [classes.prairie]: tiles === 'sand',
            [classes.alpine]: tiles === 'swamp',
          })}
        >
          <Text
            component="span"
            className={clsx(classes.text, {
              [classes.selected]: biome === secondArea[tiles],
            })}
          >
            {t(secondArea[tiles])}
          </Text>
        </div>
        <div
          aria-label={
            biome === thirdArea[tiles]
              ? t(isSelected, { type: thirdArea[tiles] })
              : t(thirdArea[tiles])
          }
          // tabIndex={0}
          className={clsx(classes.biomeArea, {
            [classes.rainforest]: tiles === 'grass',
            [classes.savannah]: tiles === 'sand',
            [classes.swamp]: tiles === 'swamp',
          })}
        >
          <Text
            component="span"
            className={clsx(classes.text, {
              [classes.selected]: biome === thirdArea[tiles],
            })}
          >
            {t(thirdArea[tiles])}
          </Text>
        </div>
      </div>
      <Text component="span" className={classes.rugginess} aria-label={t('y_axis')}>
        {t('rugginess')}
      </Text>
      <Text component="span" className={classes.wetness} aria-label={t('x_axis')}>
        {t('wetness')}
      </Text>
    </div>
  );
}

const getBiomeAreas = (tiles: string): string | undefined => {
  switch (tiles) {
    case 'grass':
      return '"taiga taiga" "forest rainforest"';
    case 'sand':
      return '"desert prairie" "desert savannah"';
    case 'swamp':
      return '"tundra alpine" "swamp swamp"';
  }
};
