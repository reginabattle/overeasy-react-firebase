import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './app.scss'
import Header from '../header/header'
import Home from '../../pages/home'
import Post from '../../pages/post'
import Create from '../../pages/create'
import NotFound from '../../pages/not-found'

function App() {
  return (
    <Router>
    	<Header />
      	<main>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/create" component={Create} />
				<Route path="/404" component={NotFound} />
				<Route path="/:slug" component={Post} />
			</Switch>
      	</main>
    </Router>
  )
}

export default App
