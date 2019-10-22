import React, { useState } from 'react'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { Button, FormGroup } from 'reactstrap'
import { signUpMutation } from '../queries/queries'

function RegisterView2(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const client = useApolloClient()
	const [signup, { loading, error }] = useMutation(signUpMutation, {
		variables: { email, password },
		onCompleted({ signup }) {
			localStorage.setItem('token', signup.token)
			client.writeData({ data: { isLoggedIn: true } })
			props.history.push('/sites')
		}
	})

	if (loading) return <p>loading...</p>
	if (error) return <p>An error occurred</p>
	return (
		<div>
			<h1>Register View 2</h1>
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
				<Button onClick={signup}>Submit</Button>
			</form>
		</div>
	)
}

export default RegisterView2
