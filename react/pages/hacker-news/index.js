import Router from 'next/router';

function Page({ stars }) {
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
      <h1>Hacker News</h1>
    </>
  );
}

Page.getInitialProps = async ({ res }) => {
  if (res) {
    res.writeHead(302, {
      Location: '/hacker-news/top/1'
    });
    res.end();
  } else {
    Router.push('/hacker-news/top/[page]', '/hacker-news/top/1');
  }
  return {};
};

export default Page;
