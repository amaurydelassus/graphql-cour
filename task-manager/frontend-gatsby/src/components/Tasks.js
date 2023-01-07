import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { CHANGE_ASSIGNEE_MUTATION } from '../store/GraphqlQueries'

import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'


const Tasks = () => {

  const [addrtype, setAddrType] = React.useState(null)
  const [setAssignee] = useMutation(CHANGE_ASSIGNEE_MUTATION)

  const onSelectChange = (e) => {
    const value = e.target.value
    e.preventDefault()

    setAssignee({
      variables: {
        created_at : new Date().toISOString().split('T')[0],
        taskId : value,
        userId : value
      }
    })
    console.log(value, 'value')
  }
  return (
    <div className="col">
      <Table variant="light" striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>State</th>
            <th>Due Date</th>
            <th>Assignee</th>
          </tr>
        </thead>
        <tbody>
          <tr key="task-5a03c3ee-f307-47e7-9039-bf9077c66b2b">
            <td>Sample Task 1</td>
            <td>
              <Badge bg="secondary">DRAFT</Badge>
            </td>
            <td>&mdash;</td>
            <td>
              <select
                defaultValue={addrtype}
                className="browser-default custom-select"
                onChange={onSelectChange}>

                <option value="null">&mdash;</option>
                <option selected value="Efficom">Efficom</option>
                <option value="Me">Me</option>
                <option value="Not me">Not me</option>

              </select>
            </td>
                      </tr>
          <tr key="task-1e6cfab9-549f-46c0-91dd-88dc34a7293a">
            <td>Sample Task 2</td>
            <td>
              <Badge bg="warning">PENDING</Badge>
            </td>
            <td>&mdash;</td>
            <td>
              <select
                defaultValue={addrtype}
                className="browser-default custom-select"

                onChange={onSelectChange}>

                <option selected value="null">&mdash;</option>
                <option value="Efficom">Efficom</option>
                <option value="Me">Me</option>
                <option value="Not me">Not me</option>

              </select>
            </td>
          </tr>
          <tr key="task-5a511001-08d1-4317-9c89-c5f39484b851">
            <td>Sample Task 3</td>
            <td>
              <Badge bg="success">DONE</Badge>
            </td>
            <td>&mdash;</td>
            <td>
              <select
                defaultValue={addrtype}
                className="browser-default custom-select"
                onChange={onSelectChange}>

                <option selected value="null">&mdash;</option>
                <option value="Efficom">Efficom</option>
                <option value="Me">Me</option>
                <option value="Not me">Not me</option>

              </select>
            </td>
          </tr>
          <tr key="task-55508152-b524-4feb-933c-65b0c6245bf3">
            <td>Sample Task 4</td>
            <td>
            <Badge bg="danger">PENDING</Badge>
            </td>
            <td>{new Date('2022-12-25').toLocaleString()}</td>
            <td>
              <select
                defaultValue={addrtype}
                className="browser-default custom-select"

                onChange={onSelectChange}>

                <option value="null">&mdash;</option>
                <option value="Efficom">Efficom</option>
                <option selected value="Me">Me</option>
                <option value="Not me">Not me</option>

              </select>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Tasks
