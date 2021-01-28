import Link from 'next/link'
import Layout from '../components/Layout'
import { GetStaticProps } from 'next'
import { NextPage } from 'next';
import * as React from 'react';
import { Works } from '../src/types/works';
import work_css from '../styles/work.module.css'

type Props = {
  works: Works[];
}

  const WorksPage: NextPage<Props> = ({ works}) => {
    return (
    <Layout title="Works | Seiwa Blog">
      <div className={work_css.cardlayout__wrap}>
        <div className={work_css.card_list}>
          {/* カード要素 */}
          { works.map(work => (
            <a href="#"　className={work_css.card__link} >
              <figure className={work_css.card_figure}><img src="#" /></figure>
              <h2 className={work_css.card_title}>カードレイアウト1</h2>
              <p className={work_css.card_text_tax}></p>
            </a>
          ))}
          {/* カード要素 */}
        </div>
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