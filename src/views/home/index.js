import   "./index.css";
import {
  Input,
  Select,
} from 'antd';
const { Option } = Select;
var createReactClass = require('create-react-class');
var Home = createReactClass({
  render: function() {
    return  <div>
        <Input.Group compact>
      <Select defaultValue="Movie">
        <Option value="Movie">Movie</Option>
        <Option value="Actor">Actor</Option>
        <Option value="Director">Director</Option>
      </Select>
      <Input style={{ width: '50%' }} defaultValue="" />
    </Input.Group>
    </div>
  },
  getInitialState: function() {
    return {
      
    }
  },
  getDefaultProps: function() {
    return {
    };
  },
  componentDidMount(){
    
  },
 
});



export default Home;
