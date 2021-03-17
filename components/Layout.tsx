import React,{ ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import header_css from '../styles/layout.module.css'
import ActiveLink from './ActiveLink'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Seiwa Blog'}: Props)=> (
      
       <div>
             <style jsx>{`
                .active {
                    padding: 0.5rem 0;
                    border-bottom: 2px solid #ff993e;
                }
                
                
                `}</style>
           <Head>
               <title>{title}</title>
               <meta charSet="utf-8" />
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
           <div className={header_css.content}>
           <header className={header_css.header}>
               <div className={header_css.header__wrap}>
               　　<div className={header_css.header__slide}>
                        <Link href="/" ><a className ={header_css.title_text}>Seiwa Blog</a></Link>
                        <div className="Contact"><Link href="/contact"><a className={header_css.header__contact}>Contact</a></Link></div>
                   </div>
               </div>
           </header>
           <nav className={header_css.navi}>
               <div className={header_css.nav__wrap}>
                   <div className={header_css.nav__slide}>
                    <ActiveLink activeClassName="active" href="/"><a className={header_css.navi_a} >Home!</a></ActiveLink>
                    <ActiveLink activeClassName="active" href="/works"><a className={header_css.navi_a}>Work!</a></ActiveLink>
                    <ActiveLink activeClassName="active" href="/blog"><a className={header_css.navi_a}>Blog!</a></ActiveLink>
                   </div>
               </div>
            </nav>
            <main>{children}</main>
           <footer className={header_css.footer}>
               <div className={header_css.footer__wrapper}>
                   <div className={header_css.footer__nav__slide}>
                    <Link href="/"><a className={header_css.footer__nav__a}>Home</a></Link>
                    <Link href="/works"><a className={header_css.footer__nav__a}>Work</a></Link>
                    <Link href="/blog"><a className={header_css.footer__nav__a}>Blog</a></Link>
                   </div>
               </div>
               <p className={header_css.footer__message}>Thank you for visiting my websaite!</p>
           </footer>
       </div>
    </div>
    )

export default Layout

//Layout Component参考
//https://github.com/vercel/next.js/blob/canary/examples/blog-starter-typescript/components/layout.tsx
