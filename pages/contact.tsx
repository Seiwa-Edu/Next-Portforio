import Link from 'next/link'
import Layout from '../components/Layout'
import contact_css from '../styles/contact.module.css'

const ContactPage = () => (
    <Layout title="Contact | Seiwa Blog">
      <section className={contact_css.contact_link}>
          <div  className={contact_css.contact_wrapper}>
          <h1>Contact</h1>
          <div>
            <p className={contact_css.text}>
              <a href="https://github.com/Seiwa-Edu" className={contact_css.contact_link}>GitHub:Seiwa-Edu</a>
              <a href="" className={contact_css.contact_link} >mail:kuma.0131@icloud.com</a>
              <a href="https://twitter.com/rsa66xkt" className={contact_css.contact_link}>Twitter:Seiwa</a>  
              <a href="" className={contact_css.contact_link}>Facebook:none</a>
            </p>
                        </div>
            <Link href="/">
              <a>Go home</a>
            </Link>
          </div>
      </section>

      
    </Layout>
  )
  
  export default ContactPage