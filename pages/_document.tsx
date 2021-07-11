import NextDocument, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export default function ParkasaurusDocument(): JSX.Element {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/zao8law.css" />
        <meta content="Wiktoria Mielcarek" name="authro" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

async function getInitialProps(ctx: DocumentContext) {
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) =>
        (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
    });

  const initialProps = await NextDocument.getInitialProps(ctx);

  const styles = (
    <style type="text/css" data-meta="jss-ssr" id="server-side-rendering">
      {registry.toString()}
    </style>
  );

  return {
    ...initialProps,
    styles,
  };
}

ParkasaurusDocument.renderDocument = NextDocument.renderDocument;
ParkasaurusDocument.getInitialProps = getInitialProps;
