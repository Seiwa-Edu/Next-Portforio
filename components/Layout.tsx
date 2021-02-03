import React,{ ReactNode} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import header_css from '../styles/layout.module.css'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Seiwa Blog' }: Props)=> (

       <div>
           <Head>
               <title>{title}</title>
               <meta charSet="utf-8" />
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
           </Head>
           <header className={header_css.header}>
               <div className={header_css.header__wrap}>
               　　<div className={header_css.header__slide}>
                        <Link href="/"><a className ="logo">Seiwa Blog</a></Link>
                        <div className="Contact"><Link href="/"><a className={header_css.header__contact}>Contact</a></Link></div>
                   </div>
               </div>
           </header>
           <nav className={header_css.navi}>
               <div className={header_css.nav__wrap}>
                   <div className={header_css.nav__slide}>
                    <Link href="/"><a className={header_css.navi_a}>Home!</a></Link>
                    <Link href="/works"><a className={header_css.navi_a}>Works!</a></Link>
                    <Link href="/blog"><a className={header_css.navi_a}>Blog!</a></Link>
                   </div>
               </div>
            </nav>
            <main>{children}</main>
           <footer className={header_css.footer}>
               <div className={header_css.footer__wrapper}>
                   <div className={header_css.footer__nav__slide}>
                    <Link href="/"><a className={header_css.footer__nav__a}>Home</a></Link>
                    <Link href="/works"><a className={header_css.footer__nav__a}>Works</a></Link>
                    <Link href="/blog"><a className={header_css.footer__nav__a}>Blog</a></Link>
                   </div>
               </div>
               <p className={header_css.footer__message}>Thank you for visiting my websaite!</p>
           </footer>
       </div>
    )

export default Layout

//Layout Component参考
//https://github.com/vercel/next.js/blob/canary/examples/blog-starter-typescript/components/layout.tsx
