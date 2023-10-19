import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostData } from '../lib/posts';
import Link from 'next/link';
import { GetStaticProps } from 'next';

export default function Home({ allPostsData }: {
  allPostsData: {
    date: string;
    title: string;
    id: string
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, My Name is John Doe, I am a software engineer focusing on backend development.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn" target='_blank'>Next.js tutorial</a>.)
        </p>
      </section>

      {/* Blog List */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headlingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostData()

  return {
    props: {
      allPostsData
    }
  }
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostData()

//   return {
//     props: {
//       allPostsData
//     }
//   }
// }