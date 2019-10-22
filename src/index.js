import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Pages and Styles here
import './index.css'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker'

const cache = new InMemoryCache()

const link = new HttpLink({
	cache,
	uri: 'http://localhost:4000/',
	headers: {
		authorization: `Bearer ${localStorage.token}`
	}
})

const client = new ApolloClient({
	link,
	cache
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
