import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getAllPosts, getPostBySlug } from '../../utils/routes';
import type { Locale } from '../../utils/i18nextTypes';
import Link from 'next/Link';

export default function Dinosaurs(props: Record<string, string[]>): JSX.Element {
  return (
    <ul>
      {props.slugs.map((slug) => (
        <li>
          <Link href={`/dinosaurs/${slug}`}>
            <a>{slug}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps({
  locale,
}: {
  params: Record<string, string>;
  locale: Locale;
}) {
  const posts = getAllPosts('dinosaurs');

  if (!locale) {
    throw new Error('locale is undefined.');
  }

  return {
    props: {
      slugs: posts.map((post) => post.name),
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
