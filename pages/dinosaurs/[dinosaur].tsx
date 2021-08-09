import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPosts, getPostBySlug } from '../../utils/routes';
import type { Locale } from '../../utils/i18nextTypes';
import { HeadingSection } from '../../components/layouts/HeadingSection';
import { useTranslation } from 'react-i18next';
import { LabelValuePair } from '../../components/table/LabelValuePair';
import {
  DinosaurType,
  DinoInformation,
  Affect,
  EggItemsType,
} from '../../lib/DinosaurType';
import { createUseStyles, DefaultTheme } from 'react-jss';
import { Box } from '../../components/layouts/Box';
import { BiomeGraph } from '../../components/styled/BiomeGraph';
import clsx from 'clsx';
import { Heading } from '../../components/typography/Heading';
import { EggItems } from '../../components/dinosaurs/EggItems';

const useStyles = createUseStyles<string, unknown, DefaultTheme>((theme) => ({
  dinoInfo: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  profilePicture: {
    margin: 0,
    padding: 15,
    backgroundColor: 'white',
    width: 'calc((100vw / 12) * 3)',
    borderRadius: 15,
    marginRight: theme.spacing.normal,

    '& img': {
      aspectRatio: '1:1',
      width: '100%',
    },
  },
  affects: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  biomeHeading: {
    display: 'block',
    backgroundColor: theme.palette.green,
    padding: '10px 85px',
    width: 'fit-content',
    borderRadius: 5,
    boxShadow: '3px 3px 3px 1px rgba(0,0,0,0.75)',
    position: 'absolute',
    top: -45,
  },
  biomeSection: {
    backgroundColor: theme.palette.blue,
    position: 'relative',
    padding: '50px',
    marginTop: 50,
  },
}));

export default function Dinosaur({ post }: { post: DinosaurType }): JSX.Element {
  const { t } = useTranslation('dinosaurs');
  const classes = useStyles();

  const {
    dino_information,
    affect,
    egg_items,
  }: { dino_information: DinoInformation; affect: Affect; egg_items: EggItemsType } =
    post;

  const information = Object.entries(dino_information).map(([key, value]) => {
    return {
      label: t(key),
      value:
        typeof value === 'string'
          ? t(value)
          : key === 'weight'
          ? `${value} Kg`
          : `${value} meter`,
    };
  });

  const affects = Object.entries(affect).map(([key, value]) => {
    return {
      label: t(key),
      value: typeof value === 'string' ? t(value) : value,
    };
  });

  const materials = Object.entries(egg_items).map(([type, value]) => {
    let remains = `${post.class}_${type}`;
    if (type === 'gem') {
      remains = type;
    }

    return {
      label: value > 1 ? t(`${remains}_plural`) : t(`${remains}`),
      value: value,
    };
  });

  return (
    <>
      <HeadingSection title={typeof post.name === 'string' ? t(post.name) : post.name} />
      <section className={classes.section}>
        <Box col={8} className={clsx(classes.dinoInfo)}>
          <figure className={classes.profilePicture}>
            <img src={post.image} alt={`Image of ${post.name}`} />
          </figure>
          <div>
            <LabelValues info={information} color="blue" />
          </div>
          <div className={classes.affects}>
            <LabelValues info={affects} color="yellow" />
          </div>
        </Box>
      </section>
      <section className={clsx(classes.section, classes.biomeSection)}>
        <Heading component={2} disablelink className={classes.biomeHeading}>
          Grass
        </Heading>
        <Box col={8}>
          <BiomeGraph biome={post.exhibit.biome} tiles={post.exhibit.tiles} />
        </Box>
      </section>
      <section className={classes.section} style={{ padding: '80px 0' }}>
        <Heading component={2} disablelink className={'a11y-hide'}>
          {t('egg_items')}
        </Heading>
        <EggItems items={materials} />
      </section>
      <section className={classes.section}>section</section>
    </>
  );
}

type LabelValuesType = (props: {
  info: { label: string; value: string | number }[];
  color: 'yellow' | 'blue';
}) => JSX.Element;

const LabelValues: LabelValuesType = ({ info, color }) => {
  return (
    <>
      {info.map(({ label, value }) => {
        return (
          <LabelValuePair key={label} label={label} value={value} typeColor={color} />
        );
      })}
    </>
  );
};

export async function getStaticPaths() {
  const posts = getAllPosts('dinosaurs');

  return {
    paths: posts.map((post) => {
      return {
        params: {
          dinosaur: post.name,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
  locale,
}: {
  params: Record<string, string>;
  locale: Locale;
}) {
  const post = getPostBySlug(params.dinosaur, 'dinosaurs');

  if (!locale) {
    throw new Error('locale is undefined.');
  }

  return {
    props: {
      post: {
        ...post,
      },
      ...(await serverSideTranslations(locale, ['common', 'dinosaurs', 'biomes'])),
    },
  };
}
