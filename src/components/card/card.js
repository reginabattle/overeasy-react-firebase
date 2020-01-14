import React from 'react'
import { Link } from 'react-router-dom'
import './card.scss'

const Card = props => {
    return (
        <>
            {/* {console.log(props.data)} */}
            <article key={props.data.slug} className="card">
                <img src={props.data.coverImage} alt={props.data.coverImageAlt} />
                <div className="card-content">
                    <h2>{props.data.title}
                        <span style={{ color: "#5e5e5e" }}>{props.data.date}</span>
                    </h2>
                    <p dangerouslySetInnerHTML={{
                            __html: `${props.data.content.substring(0, 60)}...`
                        }}
                    ></p>
                    <Link className="button read-more" to={`/${props.data.slug}`}>Read more</Link>
                </div>
            </article>
        </>
    )
}

export default Card