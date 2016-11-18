import React from 'react';
import Home from './Home';
import About from './About';
import Blog from './Blog';

const App = () => {
  return (
    <div>
      <Menu active="home" />
    </div>
  );
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
    };

    this.togglePage = this.togglePage.bind(this);
  }

  togglePage(e) {
    const page = e.target.text;
    console.log(page);

    this.setState({active: page});
  }
  render() {
    let page;

    switch(this.state.active) {
      case 'Home':
        page = <Home />
        break;
      case 'About':
        page = <About />
        break;
      case 'Blog':
        page = <Blog />
        break;
    }
    return(
      <div>
        active: {this.props.active}
        <ul>
          <li><a onClick={this.togglePage}>Home</a></li>
          <li><a onClick={this.togglePage}>About</a></li>
          <li><a onClick={this.togglePage}>Blog</a></li>
        </ul>

        {page}
      </div>
    );
  }
}

export default App;
