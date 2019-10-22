import React, { useState } from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { SIGNIN_MUTATION, GET_ALL_SITES } from '../queries/queries'
import { Button, FormGroup } from 'reactstrap'

function LoginView(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const client = useApolloClient()
	const [signin, { loading, error }] = useMutation(SIGNIN_MUTATION, {
		variables: { email, password },
		onCompleted(signin) {
			localStorage.setItem('token', signin.login)
			client.writeData({ data: { isLoggedIn: true } })
			props.history.push('/sites')
		},
		refetchQueries: [{ query: GET_ALL_SITES }]
	})
	if (loading) return <small>loading...</small>
	if (error) return <small>error...</small>
	return (
		<div>
			<h2>Please Login</h2>
			<form>
				<FormGroup>
					<input
						type="text"
						name="email"
						placeholder="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						className="form-control"
					/>
				</FormGroup>
				<input
					type="password"
					name="password"
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					className="form-control"
				/>
				<Button onClick={signin}>Submit</Button>
			</form>
		</div>
	)
}

export default LoginView
