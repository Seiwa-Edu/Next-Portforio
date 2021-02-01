import React,{ ReactNode} from 'react'
import card_css from '../styles/card.module.css'
import Link from 'next/link'

type Props = {
    children?: ReactNode
}

// const Card = ({props}: Props)=> (
    function Card(props) {
        return (
        <div>
            <div className={card_css.card_list}>
                  {/* <Link href={`work/${props.id}`}> */}
                <Link href={`${props.id}`}>
                    <a href="#"　className={card_css.card__link} >
                    <figure className={card_css.card_figure}><img src={props.image} className={card_css.cardlayout_wrap_image}/></figure>
                    <h2 className={card_css.card_title}>{props.title}</h2>
                    <p className={card_css.card_text_tax}><div dangerouslySetInnerHTML={{
                                    __html: `${props.body}`,
                                }}
                                /></p>
                    </a>
                </Link>
            </div>
        </div>

        )
//  )
}


export default Card