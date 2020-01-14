import React from 'react'
import './form.scss'

const Form = props => {
    return (
        <form className={props.type}>
            {props.children}
        </form>
    )
}

export default Form