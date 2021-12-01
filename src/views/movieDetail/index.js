import   "./index.css";
import axios from 'axios'

var createReactClass = require('create-react-class');
var App = createReactClass({
  render: function() {
    return  <div className="App">
      <div className="a">
        <div className="a-t">
          <div className="img">
            <img  src={this.state.allData.movie_url} alt='' /> 
          </div>
          <div className="desc">
            <div className="header">
              <span className="title">{this.state.allData.title}</span>
              <span className="year">{this.state.allData.year}</span>
            </div>
            <div className="detail">
              <div>
                <span className="name">Original Title:</span>
                <span className="value">{this.state.allData.original_title}</span>
              </div>
              <div>
                <span className="name">Duration:</span>
                <span className="value">{this.state.allData.duration}</span>
              </div>
              <div>
                <span className="name">Language:</span>
                <span className="value">{this.state.allData.language}</span>
              </div>
              <div>
                <span className="name">Description:</span>
                <span className="value">{this.state.allData.description}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="a-b">
        <div>
          <div className="box">
            <img  src={this.state.allData.actor_url} alt='' />
          </div>
          <div className="nick">{this.state.allData.actor_name}</div>
          </div>
          <div>
          <div className="box">
            <img  src={this.state.allData.actor_url} alt='' />
          </div>
          <div className="nick">{this.state.allData.actor_name}</div>
          </div>
          <div>
          <div className="box">
            <img  src={this.state.allData.actor_url} alt='' />
          </div>
          <div className="nick">{this.state.allData.actor_name}</div>
          </div>
        </div>
      </div>
      <div className="b">
        <div className="b-t">
          <div>
          <div className="box1">
            <span className="name">Rating:</span>
            <span className="value">{this.state.allData.vote}</span>
          </div>
          <div className="box1">
            <span className="name">Bechdel Score:</span>
            <span className="value">{this.state.allData.score}</span>
          </div>
          <div className="box1">
            <span className="name">Box Office:</span>
            <span className="value">{this.state.allData.boxOffice}</span>
          </div>
          </div>
          
          
        </div>
        <div className="b-b">
          <div className="ques">Is this movie a oscar winner?</div>
          <div className="ans">{this.state.allData.winner?'Yes':'No'}</div>
        </div>
      </div>
    </div>
  },
  getInitialState: function() {
    console.log(222,this.props)
    return {
      allData:{}
    };
  },
  getDefaultProps: function() {
    return {
      name: 'Mary'
    };
  },
  componentDidMount(){
    axios.get('http://localhost:8080/hello?id=tt0059113').then(res=>{
      console.log(res)
      this.setState({allData:res.data.results})
    })
  }
});



export default App;
