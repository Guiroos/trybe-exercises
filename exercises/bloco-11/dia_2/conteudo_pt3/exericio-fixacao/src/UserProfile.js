import React from 'react';

class UserProfile extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        <h1>{this.props.user.email}</h1>
        <img src={this.props.user.avatar} alt={this.props.user.name}></img>
      </div>
    );
  }
}

export default UserProfile;