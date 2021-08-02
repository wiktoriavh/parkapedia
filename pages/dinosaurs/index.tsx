import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPosts, getPostBySlug } from '../../utils/routes';
import type { Locale } from '../../utils/i18nextTypes';

export default function Dinosaurs(): JSX.Element {
  return <span>Dinosaurs</span>;
}

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
  const post = getPostBySlug(params.slug, 'dinosaurs');

  if (!locale) {
    throw new Error('locale is undefined.');
  }

  return {
    props: {
      post: {
        ...post,
      },
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
