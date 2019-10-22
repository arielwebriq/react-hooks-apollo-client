import gql from 'graphql-tag'

// MUTATIONS SECTION

// Sign Up
const SIGNUP_MUTATION = gql`
  mutation SignUpMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      verificationCode
      token
    }
  }
`
// Sign In
const SIGNIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`
//Logout
const LOGOUT_MUTATION = gql`
  mutation LogoutMutation($token: String!) {
    logout(token: $token)
  }
`

// ** QUERY SECTIONS **//

// Get all sites
const GET_ALL_SITES = gql`
  query siteLists {
    sites(pageSize: 10) {
      cursor
      hasMore
      sites {
        id
        primaryOwner
        role
        primaryDomain
        subdomain
        domains {
          id
          name
          isPrimary
          isSSL
        }
        url
        isActive
        isSecure
        createdAt
        updatedAt
      }
      totalCount
    }
  }
`

export { SIGNUP_MUTATION, SIGNIN_MUTATION, LOGOUT_MUTATION, GET_ALL_SITES }
