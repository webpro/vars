import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import Summary from '../../../components/Summary';

const PAGE_SIZE = 30;

function Page({ items, page }) {
  const start = 1 + (Number(page) - 1) * PAGE_SIZE;
  const next = `/hacker-news/top/${Number(page) + 1}`;

  return (
    <>
      <style jsx>{`
        a {
          padding: 2em;
          display: block;
        }
      `}</style>
      {items.map((item, i) => (
        <Summary item={item} index={start + i} key={start + i} />
      ))}
      {next && (
        <a className="more" href={next}>
          More...
        </a>
      )}
    </>
  );
}

Page.getInitialProps = async ({ query }) => {
  const { page } = query;
  const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
  const items = await res.json();
  return { items, page };
};

export default Page;
