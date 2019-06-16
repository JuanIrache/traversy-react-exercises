import React, { Component } from 'react';

class UserItem extends Component {
  static defaultProps = {
    user: {
      login: 'defunkt',
      id: 2,
      avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
      html_url: 'https://github.com/defunkt'
    }
  };
  render() {
    const { login, avatar_url, html_url } = this.props.user;
    return (
      <div className="card text-center">
        <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
