import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import User from 'store/User'

export const getClient = () => {
  return new ApolloClient({
    uri: process.env.GATSBY_API_URL,
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
  mutation CreateOneUser($email: String!, $password: String!, $name: String!, $password_digest: String!) {
    createOneUser(data: { email: $email, password: $password, name: $name , password_digest: $password_digest}) {
      id
      name
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

export const CHANGE_ASSIGNEE_MUTATION = gql`
  mutation ChangeAssigneeMutation($created_at: Date!, $taskId: String!, $userId: String ) {
    ChangeAssigneeMutation(created_at: $created_at, taskId: $taskId, userId: $userId) {
      id
      created_at
      taskId
      userId
    }
  }
`;
