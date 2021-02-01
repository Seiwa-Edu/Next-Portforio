import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import style_css from '../styles/style.module.css'
import Card from '../components/Card'
import card_css from '../styles/card.module.css'
import Link from 'next/link'


export default function Home() {
  return (
      <Layout title="Home | Seiwa Blog">
        <div>
          <section className={style_css.intro_section}>
            <div className={style_css.intro__wrapper}>
              <div className={style_css.intro__content}>
                <div className={style_css.intro__image}><img src="undraw_Powerful_re_frhr.svg" className={style_css.intro__code}/></div>
                <div className={style_css.intro__textBox}>
                  <h2>Seiwa</h2>
                  {/* <p>1998/01/31　生まれ</p> */}
                  <p>岩手県盛岡市育ち。大学では微生物を活用した遺伝子の研究を行う。</p>
                  <p>同郷の友人達とのAR開発を行ったことがきっかけでプログラミングを始める。</p>
                  <p>趣味: 温泉と二郎と開発</p>
                </div>
              </div>
            </div>
          </section>
          <section className={style_css.skill_section}>
            <div className={style_css.skill__wrapper}>
              <h2 className={style_css.section_title}>Skill</h2>
              <div className={style_css.programming_wrapper}>
                 <h3 className={style_css.programming_cate}>Front-end</h3>
              </div> 
              <div className={style_css.programming__comp}>
                <div className={style_css.programming__image}><img src="HTML5_Badge.svg"/></div>
                <div className={style_css.hello}>
                <h4>HTML/CSS</h4>
                <p>開発経験 約1年間。<br></br>
                   Webサイトの作成、WEBサービスの作成、<br></br>
                   デザインからのサイト作成も経験。</p>
                </div>
              </div>             
              
              <p>JavaScript React</p>
              <h3 className={style_css.programming_cate}>Back-end</h3>
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
              <div className={card_css.cardlayout_wrap}>
                  <Card title ="hello" id ="blog/yaurrrnlm" body="Micocms導入完了" image="team-5614157_1280.png"/>
                  <Card title ="hello" id ="blog/yaurrrnlm" body="Micocms導入完了" image="team-5614157_1280.png"/>
                  <Card title ="hello" id ="blog/yaurrrnlm" body="Micocms導入完了" image="team-5614157_1280.png"/>
              </div>
              <Link href="/works">
               <a>もっと見る</a>
              </Link>
              
            </div>
          </section>
          <section className={style_css.blog_section}>
          <div className={style_css.skill__wrapper}>
              <h2 className={style_css.section_title}>Blogs</h2>
              <div className={card_css.cardlayout_wrap}>
                <Card title ="hello" id ="blog/yaurrrnlm" body="Micocms導入完了" image="team-5614157_1280.png"/>
                <Card title ="hello" id ="blog/yaurrrnlm" body="Micocms導入完了" image="team-5614157_1280.png"/>
                <Card title ="hello" id ="blog/yaurrrnlm" body="Micocms導入完了" image="team-5614157_1280.png"/>
              </div>
              <Link href="/blog">
               <a>もっと見る</a>
              </Link>
            </div>
          </section>
        </div>
      </Layout>
  )
}
