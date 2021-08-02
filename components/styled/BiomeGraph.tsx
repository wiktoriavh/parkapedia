import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { createUseStyles } from 'react-jss';
import type { DefaultTheme } from 'react-jss';

import { Text } from '../typography/Text';

const useStyles = createUseStyles<string, Pick<BiomeGraphProps, 'biome'>, DefaultTheme>(
  (theme) => ({
    graph: {
      position: 'relative',
      paddingLeft: 20,
    },
    biomeGraph: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gap: 0,
      border: '5px solid white',
      height: 200,
    },
    grassBiome: {
      gridTemplateAreas: (props) => getBiomeAreas(props.biome),
    },
    swampBione: {
      gridTemplateAreas: (props) => getBiomeAreas(props.biome),
    },
    sandBiome: {
      gridTemplateAreas: (props) => getBiomeAreas(props.biome),
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
    },
  })
);

type GrassBiome = {
  biome: 'grass';
  type: 'taiga' | 'forest' | 'rainforest';
};

type SwampBiome = {
  biome: 'swamp';
  type: 'swamp' | 'tundra' | 'alpine';
};

type SandBiome = {
  biome: 'sand';
  type: 'prairie' | 'savannah' | 'desert';
};

type BiomeGraphProps = GrassBiome | SwampBiome | SandBiome;

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

export function BiomeGraph({ biome, type }: BiomeGraphProps): JSX.Element {
  const classes = useStyles({ biome });
  const { t } = useTranslation('biomes');

  return (
    <div className={classes.graph}>
      <div
        aria-label={t(biome)}
        tabIndex={0}
        className={clsx(classes.biomeGraph, {
          [classes.grassBiome]: biome === 'grass',
          [classes.swampBione]: biome === 'swamp',
          [classes.sandBiome]: biome === 'sand',
        })}
      >
        <div
          aria-label={
            type === firstArea[biome]
              ? t('{{type}}_is_selected', { type: firstArea[biome] })
              : t(firstArea[biome])
          }
          tabIndex={0}
          className={clsx(classes.biomeArea, {
            [classes.taiga]: biome === 'grass',
            [classes.desert]: biome === 'sand',
            [classes.tundra]: biome === 'swamp',
          })}
        >
          <Text
            component="span"
            className={clsx(classes.text, {
              [classes.selected]: type === firstArea[biome],
            })}
          >
            {t(firstArea[biome])}
          </Text>
        </div>
        <div
          aria-label={
            type === secondArea[biome]
              ? t('{{type}}_is_selected', { type: secondArea[biome] })
              : t(secondArea[biome])
          }
          tabIndex={0}
          className={clsx(classes.biomeArea, {
            [classes.forest]: biome === 'grass',
            [classes.prairie]: biome === 'sand',
            [classes.alpine]: biome === 'swamp',
          })}
        >
          <Text
            component="span"
            className={clsx(classes.text, {
              [classes.selected]: type === secondArea[biome],
            })}
          >
            {t(secondArea[biome])}
          </Text>
        </div>
        <div
          aria-label={
            type === thirdArea[biome]
              ? t('{{type}}_is_selected', { type: thirdArea[biome] })
              : t(thirdArea[biome])
          }
          tabIndex={0}
          className={clsx(classes.biomeArea, {
            [classes.rainforest]: biome === 'grass',
            [classes.savannah]: biome === 'sand',
            [classes.swamp]: biome === 'swamp',
          })}
        >
          <Text
            component="span"
            className={clsx(classes.text, {
              [classes.selected]: type === thirdArea[biome],
            })}
          >
            {t(thirdArea[biome])}.
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

const getBiomeAreas = (biome: string): string | undefined => {
  switch (biome) {
    case 'grass':
      return '"taiga taiga" "forest rainforest"';
    case 'sand':
      return '"desert prairie" "desert savannah"';
    case 'swamp':
      return '"tundra alpine" "swamp swamp"';
  }
};
