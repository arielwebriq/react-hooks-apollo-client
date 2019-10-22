import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { allSites, logoutMutation } from '../queries/queries'

function Sites(props) {
	const { data, loading, error } = useQuery(allSites, { refetchQueries: [{ query: allSites }] })

	const [logout] = useMutation(logoutMutation, {
		variables: { token: localStorage.token },
		onCompleted({ logout }) {
			localStorage.removeItem('token')
			// client.writeData({ data: { isLoggedIn: false } })
			props.history.push('/register2')
		}
	})

	if (loading) return <small>Loading...</small>
	if (error) return <small>You need to register or signup to see this page</small>

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
