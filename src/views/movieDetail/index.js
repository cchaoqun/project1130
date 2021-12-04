import   "./index.css";
import axios from 'axios'
 
var createReactClass = require('create-react-class');
var App = createReactClass({
  render: function() {
    return  <div className="App">
      <div className="a">
        <div className="a-t">
          <div className="img">
            <img  src={this.state.movieInfo.movie_url} alt='' /> 
          </div>
          <div className="desc">
            <div className="header">
              <span className="title">{this.state.movieInfo.movie_title || '--'}</span>
              <span className="year">{this.state.movieInfo.year || '--'}</span>
            </div>
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
                <span className="name">Description:</span>
                <span className="value">{this.state.movieInfo.description || '--'}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="a-b">
          <div >
                  <div className="box">
                    <img  src={this.state.director.director_url} alt='' />
                  </div>
                  <div className="nick">
                  <a href={`/search/director?name=${this.state.director.director_name}`}>Director : {this.state.director.director_name}</a>
                    </div>
          </div>
        {
            this.state.actorList.map(it=>{
              return (
                <div key={it.actor_name} >
                  <div className="box">
                    <img  src={it.actor_url} alt='' />
                  </div>
                  <div className="nick">
                  <a href={`/actorDetail?name=${it.actor_name}`}>Actor : {it.actor_name}</a>
                    </div>
                  </div>
              )
            })
          }
        </div>
      </div>
      <div className="b">
        <div className="b-t">
          <div>
          <div className="box1">
            <span className="name">Rating:</span>
            <span className="value">{this.state.rating.vote || '--'}</span>
          </div>
          <div className="box1">
            <span className="name">Bechdel Score:</span>
            <span className="value">{this.state.rating.score || '--'}</span>
          </div>
          <div className="box1">
            <span className="name">Box Office:</span>
            <span className="value">{this.state.boxOffice.boxOffice || "--"}</span>
          </div>
          </div>
        </div>
        <div className="b-b">
          <div className="ques">Is this movie a oscar winner?</div>
          <div className="ans">{this.state.winner.winner || 'NO'}</div>
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
    };
  },
  getDefaultProps: function() {
    return {
    };
  },
  getMovieInfo(id){
    axios.get(`http://localhost:8080/movie_info?id=${id}`).then(res=>{
      console.log(res)
      this.setState({movieInfo:res.data.data})
    }).catch(err=>{
      console.log(3,err)
    })
  },
  getActorList(id){
    axios.get(`http://localhost:8080/actor_list?id=${id}`).then(res=>{
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
    this.getActorList(this.state.id)
    this.getBox(this.state.id)
    this.getDirector(this.state.id)
  }
});



export default App;
