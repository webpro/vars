import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Comment from '../../../components/Comment';

function Page({ item }) {
  return (
    <>
      <style jsx>{`
        article {
          margin: 0 0 1em 0;
        }

        a {
          display: block;
          margin: 0 0 1em 0;
        }

        h1 {
          font-size: 1.4em;
          margin: 0;
        }
      `}</style>

      <Head>
        <title>{item.title}</title>
      </Head>

      <article>
        <a href={item.url}>
          <h1>{item.title}</h1>
          <small>{item.domain}</small>
        </a>

        <p className="meta">
          submitted by {item.user} {item.time_ago}
        </p>
      </article>

      <div className="comments">
        {item.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    </>
  );
}

Page.getInitialProps = async ({ query }) => {
  const { id } = query;
  const res = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
  const item = await res.json();
  return { item };
};

export default Page;
