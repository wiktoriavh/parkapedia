import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPosts, getPostBySlug } from '../../utils/routes';
import type { Locale } from '../../utils/i18nextTypes';
import { HeadingSection } from '../../components/layouts/HeadingSection';
import { useTranslation } from 'react-i18next';
import { LabelValuePair } from '../../components/table/LabelValuePair';
import { DinosaurType, DinoInformation, Affect } from '../../lib/DinosaurType';
import { createUseStyles, DefaultTheme } from 'react-jss';
import { Box } from '../../components/layouts/Box';

const useStyles = createUseStyles<string, unknown, DefaultTheme>((theme) => ({
  dinoInfo: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 'auto',
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
}));

export default function Dinosaur({ post }: { post: DinosaurType }): JSX.Element {
  const { t } = useTranslation('dinosaurs');
  const classes = useStyles();

  const {
    dino_information,
    affect,
  }: { dino_information: DinoInformation; affect: Affect } = post;

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

  return (
    <>
      <HeadingSection title={typeof post.name === 'string' ? t(post.name) : post.name} />
      <Box col={8} className={classes.dinoInfo}>
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
      <section className={classes.biomeSection}>
        <Box col={8}>biome</Box>
      </section>
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
      ...(await serverSideTranslations(locale, ['common', 'dinosaurs'])),
    },
  };
}
