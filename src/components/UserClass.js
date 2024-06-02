import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        html_url: "https://dummy.url.com",
        avatar_url: "dummy url here",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Wolverine2098");
    const info = await data.json();
    console.log("we get the data", info);

    this.setState({
      userInfo: info,
    });
  }

  render() {
    const { name, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="avatar" src={avatar_url}></img>
        <h1>{name}</h1>
        <h2>{html_url}</h2>
      </div>
    );
  }
}

export default UserClass;
