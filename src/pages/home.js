import React, { useState } from 'react'
import { getFirebase } from '../firebase'
import Card from '../components/card/card'
import SectionHeader from '../components/section/header'

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [blogPosts, setBlogPosts] = useState([]);

	// console.log('posts', blogPosts)

	if (loading && !blogPosts.length) {
		getFirebase()
			.database()
			.ref("/posts")
			.orderByChild("date")
			.once("value")
			.then(snapshot => {
				let posts = []
				const snapshotVal = snapshot.val()
		
				for (let slug in snapshotVal) {
					posts.push(snapshotVal[slug])
				}
				
				posts.reverse()
				setBlogPosts(posts);
				setLoading(false); 
			})
		}

	if (loading) {
		return <h1>Loading...</h1>;
	}

	return (
		<>
			<SectionHeader title="Blog" desc="Check out some of the latest recipes." />
			<section className="cards">
				{blogPosts.map((blogPost, index) => (
					<Card key={index} data={blogPost} />
				))}
			</section>
		</>
	)
}

export default Home
