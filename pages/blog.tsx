import Link from 'next/link'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { NextPage } from 'next';
import * as React from 'react';
import { Blog } from '../src/types';
import card_css from '../styles/card.module.css'

type Props = {
  blogs: Blog[];
}

//アロー演算子を使った関数の書き方
// const BlogPage = ({blogs}) => (
  const BlogsPage: NextPage<Props> = ({ blogs }) => {
    return (
    <Layout title="Blog | Seiwa Blog">
            <h2 className ={card_css.card_cate}>Blog</h2>
      <div className={card_css.cardlayout_wrap}>
          {/* カード要素 */}
          { blogs.map(blog=> (
            <div className={card_css.card_list}>
             <Link href={`blog/${blog.id}`}>
                <a href="#" className={card_css.card__link} >
                  <figure className={card_css.card_figure}><img src={blog.image.url} className={card_css.cardlayout_wrap_image}/></figure>
                  <h2 className={card_css.card_title}>{blog.title}</h2>
                  <p className={card_css.card_text_tax}><div dangerouslySetInnerHTML={{
                                __html: `${blog.body}`,
                              }}
                            /></p>
                </a>
            </Link>
            </div>
          ))}
          {/* カード要素 */}
      </div>
      </Layout>
  //)
  );
};
  
    // APIキーの取得
    export const getStaticProps: GetStaticProps = async context => {
    const key = {
      // headers: {'X-API-KEY': process.env.API_KEY},
      headers: {'X-API-KEY': '92887c9a-4cc2-45c9-addc-1074f7676411'},
    };
    const data = await fetch('https://seiwa-portfolio.microcms.io/api/v1/blogs',key)
    .then( res => res.json())
    .catch(()=> null);
    return {
      props: {
        blogs: data.contents,
      },
      
    };
  };

  export default BlogsPage