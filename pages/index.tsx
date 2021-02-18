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
              <div className={style_css.intro__image}><img src="undraw_Powerful_re_frhr.svg" className={style_css.intro__code} /></div>
              <div className={style_css.intro__textBox}>
                <h2>Seiwa</h2>
                {/* <p>1998/01/31　生まれ</p> */}
                <p>大学では微生物を活用した遺伝子の研究を行う。<br></br>
                  同郷の友人達とのAR開発を行ったことがきっかけでプログラミングを始める。<br></br>趣味: 温泉と二郎と開発。</p>
                <p>Team<br></br>Cicada: 同郷の友人3人とAR開発を中心に活動中。<br></br>ガンバイト: WEBアプリ開発を同郷の友人3人と。</p>
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
              {/* <div className={style_css.programming_image}><img src="/logo-01.png" alt="HTML Logo"/></div> */}
              <div className={style_css.hello}>
                <h4>HTML/CSS</h4>
                <p>開発経験 約1年間。<br></br>
                   Webサイトの作成、WEBサービスの作成、デザインからのサイト作成も経験。</p>
              </div>
            </div>
            <h4>JavaScript React</h4>
            <p> React, Next js, TypeScript を中心に学習中</p>
            <div className={style_css.programming_wrapper}>
              <h3 className={style_css.programming_cate}>Back-end</h3>
            </div>
            <div className={style_css.programming__comp}>
              {/* <div className={style_css.programming__image}><img src="rails-1.svg" width="150px"/></div> */}
              <div className={style_css.hello}>
                <h4>Ruby on Rails</h4>
                <p>開発経験 約４ヶ月<br></br>
                WEBサービス作成中</p>
              </div>
            </div>
            <div>
              <h3 className={style_css.programming_cate}>infrastructure</h3>
            </div>
            <h4>AWS</h4>
            <p>勉強中</p>
          </div>
        </section>
        <section className={style_css.works_section}>
          <div className={style_css.skill__wrapper}>
            <h2 className={style_css.section_title}>Work</h2>
            <div className={card_css.cardlayout_wrap}>
              <Card title="自己紹介サイト" id="work/nkgjap1lrf" body="Nextjs TypeScriptでサイト作成" image="team-5614157_1280.png" />
            </div>
            <Link href="/works">
              <a className={style_css.detail__link}>もっと見る</a>
            </Link>
          </div>
        </section>
        <section className={style_css.blog_section}>
          <div className={style_css.skill__wrapper}>
            <h2 className={style_css.section_title}>Blog</h2>
            <div className={card_css.cardlayout_wrap}>
              <Card title="Hello world" id="blog/yaurrrnlm" body="microcms動作確認" image="team-5614157_1280.png" />
            </div>
            <Link href="/blog">
              <a className={style_css.detail__link}>もっと見る</a>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}
