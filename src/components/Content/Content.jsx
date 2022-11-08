import { lazy, Suspense } from 'react';

import Layout from '../Layout';
import NavBar from '../NavBar';
import Spinner from '../Spinner';

const Comments = lazy(() => import('../Comments' /* webpackPrefetch: true */));
const Sidebar = lazy(() => import('../Sidebar' /* webpackPrefetch: true */));
const Post = lazy(() => import('../Post' /* webpackPrefetch: true */));

function Content() {
  return (
    <Layout>
      <NavBar />
      <aside className="sidebar">
        <Suspense fallback={<Spinner />}>
          <Sidebar />
        </Suspense>
      </aside>
      <article className="post">
        <Suspense fallback={<Spinner />}>
          <Post />
        </Suspense>
        <section className="comments">
          <h2>Comments</h2>
          <Suspense fallback={<Spinner />}>
            <Comments />
          </Suspense>
        </section>
        <h2>Thanks for reading!</h2>
      </article>
    </Layout>
  );
}

export default Content;
