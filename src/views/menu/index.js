import   "./index.css";
import { Menu  } from 'antd';
var createReactClass = require('create-react-class');
var MovieList = createReactClass({
  render: function() {
    return  <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
      <Menu.Item key="/home" >
        Home
      </Menu.Item>
      <Menu.Item key="/movieList" >
        Movie List
      </Menu.Item>
      <Menu.Item key="/Oscar" >
        Oscar
      </Menu.Item>
      <Menu.Item key="/BoxOffice" >
        Box Office
      </Menu.Item>
    </Menu>
  },
  getInitialState: function() {
    return {
      current:'/movieList'
    }
  },
  getDefaultProps: function() {
    return {
    };
  },
  componentDidMount(){
    
  },
  handleClick({ item, key, keyPath, domEvent }){
    console.log(key)
    this.setState({current:key})
    window.location = key
  }
});



export default MovieList;
