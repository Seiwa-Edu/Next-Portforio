import Link from 'next/link'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { NextPage } from 'next';
import * as React from 'react';
import { Works } from '../src/types/works';
import card_css from '../styles/card.module.css'

type Props = {
  works: Works[];
}

  const WorksPage: NextPage<Props> = ({ works}) => {
    return (
    <Layout title="Works | Seiwa Blog">
      <h2 className ={card_css.card_cate}>Works</h2>
      <div className={card_css.cardlayout_wrap}>
          {/* カード要素 */}
          { works.map(work => (
            <div className={card_css.card_list}>
              <Link href={`work/${work.id}`}>
            <a href="#"　className={card_css.card__link} >
              <figure className={card_css.card_figure}><img src={work.image.url} className={card_css.cardlayout_wrap_image}/></figure>
              <h2 className={card_css.card_title}>{work.title}</h2>
              <p>詳細へ</p>
              {/* <p className={card_css.card_text_tax}><div dangerouslySetInnerHTML={{
                            __html: `${work.body}`,
                          }}
                        /></p> */}
            </a>
            </Link>
            </div>
          ))}
          {/* カード要素 */}
      </div>
    </Layout>
  // )
  );
};

    export const getStaticProps: GetStaticProps = async context => {
    const key = {
      // headers: {'X-API-KEY': process.env.API_KEY},
      headers: {'X-API-KEY': '92887c9a-4cc2-45c9-addc-1074f7676411'},
    };
    const data = await fetch('https://seiwa-portfolio.microcms.io/api/v1/works',key)
    .then( res => res.json())
    .catch(()=> null);
    return {
      props: {
        works: data.contents,
      },
      
    };
  };

  export default WorksPage