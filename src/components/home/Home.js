import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { allSites, logoutMutation } from '../queries/queries'

function Sites(props) {
	const { loading, data, error } = useQuery(allSites)

	const [logout] = useMutation(logoutMutation, {
		variables: { token: localStorage.token },
		onCompleted({ logout }) {
			localStorage.removeItem('token')
			// client.writeData({ data: { isLoggedIn: false } })
			props.history.push('/register2')
		}
	})

	if (loading) return <small>Loading...</small>
	if (error) return <small>Error</small>

	return (
		<div>
			{data.sites.sites.map(site => (
				<div key={site.id}>
					<p>{site.url}</p>
				</div>
			)) || 'no sites'}
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Sites
