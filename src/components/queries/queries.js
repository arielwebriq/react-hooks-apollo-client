import gql from 'graphql-tag'

// Mutations Section
const signUpMutation = gql`
  mutation SignUpMutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      id
      verificationCode
      token
    }
  }
`
const signInMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

const logoutMutation = gql`
  mutation LogoutMutation($token: String!) {
    logout(token: $token)
  }
`

const allSites = gql`
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

// Queries Section

export { signUpMutation, signInMutation, logoutMutation, allSites }
