import React from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_ALL_SITES, LOGOUT_MUTATION } from '../queries/queries'

function Sites(props) {
	const { data, loading, error } = useQuery(GET_ALL_SITES)

	const [logout] = useMutation(LOGOUT_MUTATION, {
		variables: { token: localStorage.token },
		onCompleted({ logout }) {
			localStorage.removeItem('token')
			props.history.push('/register2')
		}
	})

	if (loading) return <small>Loading...</small>
	if (error) return <small>You need to register or signup to see this page</small>

	return (
		<div>
			{(data &&
				data.sites &&
				data.sites.sites &&
				data.sites.sites.map(site => (
					<div key={site.id}>
						<p>{site.url}</p>
					</div>
				))) ||
				'no sites'}
			<button onClick={logout}>Logout</button>
		</div>
	)
}

export default Sites
