import Head from 'next/head';

export default function Page({ stars }) {
  return (
    <>
      <style jsx>{`
        h1 {
          text-align: center;
          margin: 0 auto;
          font-size: 2.8em;
          font-weight: 700;
          margin: 0 0 0.5em 0;
        }

        @media (min-width: 480px) {
          h1 {
            font-size: 4em;
          }
        }
      `}</style>
      <Head>
        <title>React (with Next.js)</title>
        <meta name="description" content="VARS - React" />
      </Head>
      <h1>React (with Next.js)</h1>
    </>
  );
}
