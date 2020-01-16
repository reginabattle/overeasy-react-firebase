import React, { useState } from 'react'
import { getFirebase } from "../firebase"
import { Redirect } from 'react-router-dom'

const Post = ({ match }) => {
	const slug = match.params.slug
	const [loading, setLoading] = useState(true)
	const [currentPost, setCurrentPost] = useState()

	// get post
	if(loading && !currentPost) {
		getFirebase()
			.database()
			.ref()
			.child(`/posts/${slug}`)
			.once('value')
			.then(snapshot => {
				const data = snapshot.val();
				console.log('snapshot', data)
				if (snapshot.val()) {
					setCurrentPost(snapshot.val());
				}
				setLoading(false);
			});
	}

	// loading
	if (loading) {
		return <h1>Loading...</h1>
	}
	
	// Check if post exists
	const postDoesNotExist = !currentPost;
	if (postDoesNotExist) {
		return <Redirect to="/404" />
	}

	return (
		<>
			<h1>{currentPost.title}</h1>
			<p dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
		</>
	)
}

export default Post
