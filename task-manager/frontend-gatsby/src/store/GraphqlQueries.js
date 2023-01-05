import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import User from 'store/User'

export const getClient = () => {
  return new ApolloClient({
    uri: 'http://localhost:5432/',
    cache: new InMemoryCache({
      possibleTypes: {},
    }),
    credentials: 'include',
    headers: {
      user: User.get('account', 'id') || null,
    },
  })
}

const USER_FRAGMENT = gql`
  fragment UserFragment on User {
    id
    email
    name
  }
`

export const GET_CURRENT_USER = gql`
  query getCurrentUser($id: ID!) {
    getOneUser(id: $id) {
      ...UserFragment
    }
  }
  ${USER_FRAGMENT}
`

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(where: { email: $email, password: $password }) {
      id
      name
    }
  }
  ${USER_FRAGMENT}
`

export const CREATE_USER_MUTATION = gql`
  mutation CreateOneUser($email: String!, $password: String!, $name: String!) {
    createOneUser(input: { email: $email, password: $password, name: $name }) {
      id
      name
      password
      password_digest
      last_sign_in_at
      created_at
      updated_at
    }
  }
`;

export const CREATE_TASK_MUTATION = gql`
  mutation CreateOneTask($data: TaskCreateInput!) {
    createOneTask(data: $data) {
      id
      due_at
      description
      created_at
      state
      title
      updated_at
    }
  }
`;
