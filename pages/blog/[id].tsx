import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/Layout'

export default function BlogId ({blog}) {
    return (
        <main>{blog.title}
                <p>{blog.publishedAt}</p>
            <div
                dangerouslySetInnerHTML={{
                __html: `${blog.body}`,
                }}
            />
    </main>
    )
}

    export const getStaticPaths: GetStaticPaths = async () => {
      const key = {
        // headers: {'X-API-KEY': process.env.API_KEY},
        headers: {'X-API-KEY': '92887c9a-4cc2-45c9-addc-1074f7676411'},
      };
      const data = await fetch('https://seiwa-portfolio.microcms.io/api/v1/blogs',key)
      .then(res => res.json())
      .catch(()=>null);
      const paths = data.contents.map(content => `/blog/${content.id}`)
    
      return { paths, fallback: false}
    }
    
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
      

      // 参考
      //https://nextjs.org/blog/next-9-3
      //https://github.com/vercel/next.js/blob/canary/examples/with-typescript/pages/users/%5Bid%5D.tsx
      //https://nextjs.org/docs/basic-features/typescript
      