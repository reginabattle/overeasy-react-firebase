import React from 'react'
import './header.scss'

const SectionHeader = props => {
    return (
        <header className="section-header">
            <h1>{props.title}</h1>
            { props.desc ? <p>{props.desc}</p> : '' }
        </header>
    )
}

export default SectionHeader