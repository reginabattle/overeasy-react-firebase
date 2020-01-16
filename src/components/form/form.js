import React from 'react'
import './form.scss'

const Form = props => {
    return (
        <form className={props.type} onSubmit={props.onSubmit} autoComplete="off">
            {props.children}
        </form>
    )
}

export default Form