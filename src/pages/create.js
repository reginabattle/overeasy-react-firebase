import React, { useState } from 'react'
import Form from '../components/form/form'
import SectionHeader from '../components/section/header'

const Create = () => {
    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [coverImage, setCoverImage] = useState('')
    const [coverImageAlt, setCoverImageAlt] = useState('')
    const [content, setContent] = useState('')

    const createPost = () => {
        console.log({ title, slug, coverImage, coverImageAlt, content })
    }

    return (
        <>
            <section className="page-content">
                
                <SectionHeader title="Create Post" />

                <Form type='create-post'>
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

                    <button type="submit" onClick={createPost}>Create</button>
                </Form>
            </section>
        </>
    )
}

export default Create