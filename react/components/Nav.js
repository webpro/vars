import Link from 'next/link';

export default ({ route }) => (
  <>
    <style jsx>{`
      nav {
        border-bottom: 1px solid rgba(255, 62, 0, 0.1);
        font-weight: 300;
        padding: 0 1em;
      }

      ul {
        margin: 0;
        padding: 0;
      }

      /* clearfix */
      ul::after {
        content: '';
        display: block;
        clear: both;
      }

      li {
        display: block;
        float: left;
      }

      .selected {
        position: relative;
        display: inline-block;
      }

      .selected::after {
        position: absolute;
        content: '';
        width: calc(100% - 1em);
        height: 2px;
        background-color: rgb(255, 62, 0);
        display: block;
        bottom: -1px;
      }

      a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
      }
    `}</style>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a className={route === '/' ? 'selected' : ''}>home</a>
          </Link>
        </li>
        <li>
          <Link href="/hacker-news">
            <a className={route.startsWith('/hacker-news') ? 'selected' : ''} href="/hacker-news">
              Hacker News
            </a>
          </Link>
        </li>
        <li>
          <Link href="/crud">
            <a className={route === '/crud' ? 'selected' : ''} href="/crud">
              CRUD
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  </>
);
