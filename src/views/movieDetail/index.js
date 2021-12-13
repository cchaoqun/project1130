import   "./index.css";
import axios from 'axios'
import { Row, Col,Tooltip,Button,Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';

var createReactClass = require('create-react-class');
var App = createReactClass({
  render: function() {
    return  <div className="App">
      <div className="a">
        <div className="header">
          <span className="title">{this.state.movieInfo.movie_title || '--'}</span>
          <span className="year">{this.state.movieInfo.year || '--'}</span>
        </div>
          <div className="a-t">
            <div className="img">
              <img  src={this.state.movieInfo.movie_url} alt='' /> 
            </div>
            <div className="desc">
              <div className="detail">
                <div>
                  <span className="name">Original Title:</span>
                  <span className="value">{this.state.movieInfo.original_title || '--'}</span>
                </div>
                <div>
                  <span className="name">Duration:</span>
                  <span className="value">{this.state.movieInfo.duration || '--'}</span>
                </div>
                <div>
                  <span className="name">Language:</span>
                  <span className="value">{this.state.movieInfo.language || '--'}</span>
                </div>
                
                <div>
                  <span className="name">Rating:</span>
                  <span className="value">{this.state.movieInfo.vote || '--'}</span>
                </div>
                <div>
                  <span className="name">Bechdel Score:</span>
                  <span className="value">{this.state.rating.score || '--'}</span>
                </div>
                <div>
                  <span className="name">Box Office:</span>
                  <span className="value">{this.state.boxOffice.boxOffice || '--'}</span>
                </div>
                <div>
                  <span className="name">Is this movie a oscar winner?</span>
                  <span className="value">{this.state.winner.winner? 'YES' : 'NO'}</span>
                </div>
                <div>
                  <span className="name">Description:</span>
                  <span className="value over" >{this.state.movieInfo.description || '--'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="a-b">
            <div className="actor_list">
              Director & Actors   <Button type='link' onClick={this.handleClick}>{this.state.isAll ? "Pull up":'Show all'}</Button>
            </div>
            <Row gutter={20}>
              <Col span={4}>
                <div className="actor-box">
                  <div className="box">
                      <img  src={this.state.director.director_url} alt='' />
                    </div>
                      <div className="nick">
                      <Tooltip placement="topLeft" title={this.state.director.director_name}>
                        <a href={`/search/director?name=${this.state.director.director_name}`}>Director : {this.state.director.director_name}</a>
                      </Tooltip>
                    </div>
                    </div>
              </Col>
            {
                this.state.actorList.map(it=>{
                  return (
                    <Col span={4}>
                      <div className="actor-box">
                      <div key={it.actor_name} >
                        <div className="box">
                        <img  src={it.actor_url} alt='' />
                        </div>
                        <div className="nick">
                        <Tooltip placement="topLeft" title={it.actor_name}>
                          <a href={`/search/actor?name=${it.actor_name}`}>{it.actor_name}</a>
                        </Tooltip>
                          </div>
                      </div>
                      </div>
                    </Col>
                  )
                })
              }
            </Row>
          </div>

        </div>

      </div>
  },
  getInitialState: function() {
    return {
      id:window.location.search.split('=')[1],
      movieInfo:{},
      actorList:[],
      rating:{},
      winner:{},
      boxOffice:{},
      director:{},
      isAll:false
    };
  },
  getDefaultProps: function() {
    return {
    };
  },
  handleClick(){
    if(this.state.isAll){
      this.getActorList(this.state.id,5)
    this.setState({isAll:false})

    }else{
      this.getActorList(this.state.id,'')
    this.setState({isAll:true})

    }
  },
  getMovieInfo(id){
    axios.get(`http://localhost:8080/movie_info?id=${id}`).then(res=>{
      console.log(res)
      this.setState({movieInfo:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  getActorList(id,limit){
    axios.get(`http://localhost:8080/actor_list?id=${id}&limit=${limit}`).then(res=>{
      console.log(res)
      this.setState({actorList:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  getRating(id){
    axios.get(`http://localhost:8080/rating?id=${id}`).then(res=>{
      console.log(res)
      this.setState({rating:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  getWinner(id){
    axios.get(`http://localhost:8080/winner?id=${id}`).then(res=>{
      console.log(res)
      this.setState({winner:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  getBox(id){
    axios.get(`http://localhost:8080/boxOffice?id=${id}`).then(res=>{
      console.log(res)
      this.setState({boxOffice:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  getDirector(id){
    axios.get(`http://localhost:8080/director?id=${id}`).then(res=>{
      console.log(res)
      this.setState({director:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  componentDidMount(){
    console.log(123,this.props.history)
    this.getMovieInfo(this.state.id)
    this.getWinner(this.state.id)
    this.getRating(this.state.id)
    this.getActorList(this.state.id,5)
    this.getBox(this.state.id)
    this.getDirector(this.state.id)
  }
});



export default App;
