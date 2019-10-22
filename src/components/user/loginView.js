import React, { useState } from 'react'
import { useMutation, useQuery } from '@apollo/react-hooks'
import { signInMutation, allSites } from '../queries/queries'
import { Button, FormGroup } from 'reactstrap'

function LoginView(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [signin, { loading, error }] = useMutation(signInMutation, {
		variables: { email, password },
		refetchQueries: { query: useQuery(allSites) },
		onCompleted(signin) {
			localStorage.setItem('token', signin.login)
			props.history.push('/sites')
		}
	})
	if (loading) return <small>loading...</small>
	if (error) return <small>error...</small>
	return (
		<div>
			<h1>This is login View</h1>
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
