import { Blog__detail } from '../../src/types/blog__detail';
import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout'


type Props = {
  blog: Blog__detail;
}

//Next jsとしての書き方
// export default function BlogId({ blog }) {
  const BlogId: NextPage<Props> = ({ blog }) => {
    return (
      <Layout title="Blog | Seiwa Blog">
        <div>
            <div><img  src={blog.image.url} /></div>
                <h1>{blog.title}</h1>
                <p>{blog.publishedAt}</p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${blog.body}`,
                  }}
                />
        </div>
            
        
      </Layout>
    );
  }

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
    const key = {
      headers: {'X-API-KEY': '92887c9a-4cc2-45c9-addc-1074f7676411'},
    };
    const data = await fetch('https://seiwa-portfolio.microcms.io/api/v1/blogs', key)
      .then(res => res.json())
      .catch(() => null);
    const paths = data.contents.map(content => `/blog/${content.id}`);
    return {paths, fallback: false};
  };
  
  // Next js としての書き方
  // export const getStaticProps = async context => {
    export const getStaticProps:GetStaticProps = async (context) =>{
    const id = context.params.id;
    const key = {
      headers: {'X-API-KEY': '92887c9a-4cc2-45c9-addc-1074f7676411'},
    };
    const data = await fetch(
      'https://seiwa-portfolio.microcms.io/api/v1/blogs/' + id,
      key,
    )
      .then(res => res.json())
      .catch(() => null);
    return {
      props: {
        blog: data,
      },
    };
  };


  export default BlogId;