import { Work__detail } from '../../src/types/work__detail';
import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Layout from '../../components/Layout'


type Props = {
  work: Work__detail;
}

//Next jsとしての書き方
// export default function BlogId({ blog }) {
  const WorkId: NextPage<Props> = ({ work }) => {
    return (
        <Layout title="Blog | Seiwa Blog">
          <div>
          <div><img  src={work.image.url} /></div>
                <h1>{work.title}</h1>
              <p>{work.publishedAt}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${work.body}`,
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
    const data = await fetch('https://seiwa-portfolio.microcms.io/api/v1/works', key)
      .then(res => res.json())
      .catch(() => null);
    const paths = data.contents.map(content => `/work/${content.id}`);
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
      'https://seiwa-portfolio.microcms.io/api/v1/works/' + id,
      key,
    )
      .then(res => res.json())
      .catch(() => null);
    return {
      props: {
        work: data,
      },
    };
  };


  export default WorkId;