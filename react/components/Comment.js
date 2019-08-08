import { Fragment } from 'react';

function Comment({ comment }) {
  return (
    <>
      <style jsx>{`
        article {
          border-top: 1px solid #eee;
          margin: 1em 0 0 0;
          padding: 1em 0 0 0;
          font-size: 14px;
        }

        .meta {
          color: #999;
        }

        .replies {
          padding: 0 0 0 1em;
        }
      `}</style>
      <article>
        <p className="meta">
          {comment.user} {comment.time_ago}
        </p>

        <div dangerouslySetInnerHTML={{ __html: comment.content }} />

        <div className="replies">
          {comment.comments.map(comment => (
            <Comment comment={comment} key={comment.id} />
          ))}
        </div>
      </article>
    </>
  );
}

export default Comment;
