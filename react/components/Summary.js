import Link from 'next/link';

export default ({ item, index }) => (
  <>
    <style jsx>{`
      article {
        position: relative;
        padding: 0 0 0 4em;
        margin: 0 0 1.5em 0;
      }
      h2 {
        font-size: 1em;
        font-weight: 500;
        margin: 0 0 0.5em 0;
        color: #333;
      }
      h2 a {
        text-decoration: none;
      }
      p {
        font-size: 0.8em;
        color: #666;
        margin: 0;
        font-weight: 300;
      }
      small {
        color: #666;
        font-weight: 300;
      }
      .index {
        position: absolute;
        font-size: 1.6em;
        font-weight: 200;
        color: #666;
        left: 0.2em;
        top: 0;
        text-align: right;
        width: 0.75em;
        line-height: 1;
      }
    `}</style>

    <article>
      <h2>
        {item.domain ? (
          <a href={item.url}>
            {item.title}
            <small> ({item.domain})</small>
          </a>
        ) : (
          <Link href={`/hacker-news/item/[id]`} as={`/hacker-news/item/${item.id}`}>
            <a>{item.title}</a>
          </Link>
        )}
      </h2>

      {item.type === 'job' ? (
        <p>{item.time_ago}</p>
      ) : (
        <p>
          {item.points} points by {item.user} | {item.time_ago} |{' '}
          <Link href={`/hacker-news/item/[id]`} as={`/hacker-news/item/${item.id}`}>
            <a>
              {item.comments_count} {item.comments_count === 1 ? 'comment' : 'comments'}
            </a>
          </Link>
        </p>
      )}

      {index && <span className="index">{index}</span>}
    </article>
  </>
);
