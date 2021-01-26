import Link from 'next/link'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { TableBody } from '@material-ui/core'
import React from 'react';

type Props = {
  id: number;
  title: string;
  body: string;
}

//ここに原因があるかな？blogsの渡し方
const BlogPage = ({blogs}) => (
    <Layout title="Blog | Seiwa Blog">
      <div>
        <div>
          {/* カード要素 */}
          { blogs.map(blog => (
              <div className="card">
                  <div className="card__imgframe"></div>
                  <div className="card__textbox">
                    <div className="card__titletext">
                      <p>{blog.title}</p>
                    </div>
                    <div className="card__overviewtext">
                      <p>{blog.body}</p>
                    </div>
                  </div>
              </div>
          ))}
          {/* カード要素 */}
        </div>
      </div>
    </Layout>
  )
  
    // APIキーの取得
    //  export async function getStaticProps(context) {
    // export const GetStaticProps = async () => {
    export const getStaticProps: GetStaticProps = async context => {
    const key = {
      // headers: {'X-API-KEY': process.env.API_KEY},
      headers: {'X-API-KEY': '92887c9a-4cc2-45c9-addc-1074f7676411'},
    };
    const data = await fetch('https://seiwa-portfolio.microcms.io/api/v1/blog',key)
    .then( res => res.json())
    .catch(()=> null);
    return {
      props: {
        blog: data.contents,
      },
      
    };
  };

  export default BlogPage