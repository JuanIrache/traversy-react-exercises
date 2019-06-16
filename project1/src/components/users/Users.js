import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        login: 'errfree',
        id: 44,
        avatar_url: 'https://avatars2.githubusercontent.com/u/44?v=4',
        html_url: 'https://github.com/errfree'
      },
      {
        login: 'mojodna',
        id: 45,
        avatar_url: 'https://avatars2.githubusercontent.com/u/45?v=4',
        html_url: 'https://github.com/mojodna'
      },
      {
        login: 'bmizerany',
        id: 46,
        avatar_url: 'https://avatars2.githubusercontent.com/u/46?v=4',
        html_url: 'https://github.com/bmizerany'
      }
    ]
  };
  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
