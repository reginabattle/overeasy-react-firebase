import React, { useState } from 'react'
import { getFirebase } from '../firebase'
import Form from '../components/form/form'
import SectionHeader from '../components/section/header'

const Create = () => {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [coverImage, setCoverImage] = useState('')
    const [coverImageAlt, setCoverImageAlt] = useState('')
    const [content, setContent] = useState('')

    const generateDate = () => {
        const now = new Date()
        const year = now.getFullYear()
        const options = { month: "long", day: "numeric", year: "numeric" }
        
        let month = now.getMonth() + 1
        if (month < 10) {
            month = `0${month}`
        }
        
        let day = now.getDate()
        if(day < 10) {
            day `0${day}`
        }

        return {
            "formatted": `${month}/${day}/${year}`,
            "pretty": now.toLocaleDateString("en-US", options)
        }
    }

    const createPost = e => {
        e.preventDefault()
        const date = generateDate()

        const newPost = {
            title,
            date: date.pretty,
            slug,
            coverImage,
            coverImageAlt,
            content
        }

        console.log('new post', newPost)

        getFirebase()
            .database()
            .ref()
            .child(`posts/${slug}`)
            .set(newPost)
            .then(post => console.log('post added'))

        document.querySelector('Form').reset()
    }

    return (
        <>
            <section className="page-content">
                
                <SectionHeader title="Create Post" />

                <Form type="create-post" onSubmit={createPost}>
                    <div className="form-field">
                        <label htmlFor="title">Title</label>
                        <input id="title" type="text" value={title} 
                            onChange={({ target: { value } }) => {setTitle(value)}} /> 
                    </div>

                    <div className="form-field">
                        <label htmlFor="slug">Slug</label>
                        <input id="slug" type="text" value={slug} 
                            onChange={({ target: { value } }) => {setSlug(value)}} /> 
                    </div>

                    <div className="form-field">
                        <label htmlFor="cover">Cover image</label>
                        <input id="cover" type="text" value={coverImage} 
                            onChange={({ target: { value } }) => {setCoverImage(value)}} /> 
                    </div>

                    <div className="form-field">
                        <label htmlFor="alt">Alternative text</label>
                        <input id="alt" type="text" value={coverImageAlt} 
                            onChange={({ target: { value } }) => {setCoverImageAlt(value)}} />
                    </div>

                    <div className="form-field">
                        <label htmlFor="content">Content</label>
                        <textarea id="content" type="text" value={content}
                            onChange={({ target: { value } }) => {setContent(value)}} />
                    </div>

                    <button type="submit">Create</button>
                </Form>
            </section>
        </>
    )
}

export default Create