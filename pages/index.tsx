import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import style_css from '../styles/style.module.css'

export default function Home() {
  return (
      <Layout title="Home | Seiwa Blog">
        <div>
          <section className={style_css.intro_section}>
            <div className={style_css.intro__wrapper}>
              <div className={style_css.intro__content}>
                <div className={style_css.intro__image}><img src="" className={style_css.intro__code}/></div>
                <div className={style_css.intro__textBox}>
                  <h2>Seiwa</h2>
                  <p>1998/01/31　生まれ</p>
                  <p>高校まで岩手県盛岡市で生活し、大学では微生物を活用した遺伝子の研究を行う。</p>
                  <p>2020年3月 友人とのAR開発がきっかけでプログラミングを始める。</p>
                  <p>趣味: 温泉と二郎と開発</p>
                </div>
              </div>
            </div>
          </section>
          <section className={style_css.skill_section}>
            <div className={style_css.skill__wrapper}>
              <h2 className={style_css.section_title}>Skill</h2>
              <div className={style_css.programming_wrapper}>
                 <h3 className={style_css.programming_cate}>Frontend</h3>
              </div>              
              <p>HTML/CSS</p>
              <p>JavaScript React</p>
              <h3 className={style_css.programming_cate}>Backend</h3>
              <p>Ruby on Rails</p>
              <div>
                 <h3 className={style_css.programming_cate}>infrastructure</h3>
              </div>   
              <p>AWS</p>
            </div>
          </section>
          <section className={style_css.works_section}>
         　 <div className={style_css.skill__wrapper}>
              <h2 className={style_css.section_title}>Works</h2>
              <a>もっと見る</a>
            </div>
          </section>
          <section className={style_css.blog_section}>
          <div className={style_css.skill__wrapper}>
              <h2 className={style_css.section_title}>Blogs</h2>
              <a>もっと見る</a>
            </div>
          </section>
        </div>
      </Layout>
  )
}
