import React from 'react'

import { useMutation } from '@apollo/react-hooks'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { CREATE_USER_MUTATION } from '../store/GraphqlQueries'

import User from 'store/User'

const SignUp = () => {
  const [name, setName] = React.useState(User.get('new', 'name'))
  const [email, setEmail] = React.useState(User.get('new', 'email'))
  const [password, setPassword] = React.useState()
  const [signUp] = useMutation(CREATE_USER_MUTATION)

  const onInputChange = (e) => {
    User.set('new', { [e.target.name]: e.target.value })
    switch (e.target.name) {
      case 'name':
        setName(e.target.value)
        break
      case 'email':
        setEmail(e.target.value)
        break
      case 'password':
        setPassword(e.target.value)
        break
    }
  }

  function submit() {
    // getClient()
    //   .useMutation({
    //     mutation: CREATE_USER_MUTATION,
    //     variables: {
    //       data: {
    //         name: name,
    //         password: password,
    //         email: email,
    //         last_sign_in_at : new Date().toISOString().split('T')[0],
    //         password_digest : password,
    //         created_at : new Date().toISOString().split('T')[0],
    //         updated_at : new Date().toISOString().split('T')[0],
    //       }
    //     }
    //   })

      signUp({
        variables: {
            name: name,
            password: password,
            email: email,
            last_sign_in_at : new Date().toISOString().split('T')[0],
            password_digest : password,
            created_at : new Date().toISOString().split('T')[0],
            updated_at : new Date().toISOString().split('T')[0],
          }
      }
      )
      .then(res => {
        console.log(res.data);
      })
      .catch(e => console.error(e));
  }

  return (
    <div className="col">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your Name here"
            onChange={onInputChange}
            defaultValue={name}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={onInputChange}
            defaultValue={email}
          />
          <Form.Text className="text-muted">
            {"We'll never share your email with anyone else."}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={onInputChange}
            defaultValue={password}
          />
        </Form.Group>
        <Button variant="primary" type="button" onClick={() => submit()}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SignUp
