import React from 'react'
import { Mutation } from 'react-apollo'
import { signUpMutation } from '../queries/queries'
import { Button, FormGroup } from 'reactstrap'

class RegisterView1 extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	render() {
		const { email, password } = this.state
		return (
			<Mutation
				mutation={signUpMutation}
				variables={{ email, password }}
				onCompleted={data => this._confirm(data)}
			>
				{postMutation => (
					<div>
						<h1>Register View 1</h1>
						<FormGroup>
							<input
								type="text"
								name="email"
								placeholder="email"
								value={email}
								onChange={this.handleChange}
								className="form-control"
							/>
						</FormGroup>
						<input
							type="password"
							name="password"
							placeholder="password"
							value={password}
							onChange={this.handleChange}
							className="form-control"
						/>
						<Button onClick={postMutation}>Submit</Button>
					</div>
				)}
			</Mutation>
		)
	}

	_confirm = async data => {
		const { token } = data.signup
		this._saveUserData(token)
		this.props.history.push(`/sites`)
	}

	_saveUserData = token => {
		localStorage.setItem('token', token)
	}
}

export default RegisterView1
