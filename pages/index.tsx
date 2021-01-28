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
                  <p>趣味は温泉と二郎と開発。</p>
                </div>
              </div>
            </div>
          </section>
          <section className={style_css.skill_section}>
            <div>
              <h2>Skill</h2>
              <h3>Frontend</h3>
              <p>HTML/CSS</p>
              <p>JavaScript React</p>
              <h3>Backend</h3>
              <p>Ruby on Rails</p>
              <h3>nfrastructure</h3>
              <p>AWS</p>
            </div>
          </section>
          <section className={style_css.works_section}>
         　 <div>
              <h2>Works</h2>
            </div>
          </section>
          <section className={style_css.blog_section}>
          <div>
              <h2>Blogs</h2>
            </div>
          </section>
        </div>
      </Layout>

  )
}
