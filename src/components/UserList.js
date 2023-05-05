import React, { Component } from 'react';
import User from './User';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }));
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>User List</h1>
        <ul>
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
