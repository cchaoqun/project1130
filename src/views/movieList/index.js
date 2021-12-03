import   "./index.css";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
var createReactClass = require('create-react-class');
var MovieList = createReactClass({
  render: function() {
    return  <div className="movieList">
      {this.state.a}
      <div className='content'>
        {
          this.state.movieList.map(it=>{
            return (
              <div
                className='movie_box'
                key={it.id}
                onClick={(e)=>this.goToDetail(it.id)}
              >
                <div className='movie_url'>
                  <img src={it.url} alt=""  />
                </div>
                <div className='movie_name'>
                    <a href={`/movieDetail?id=${it.id}`}>{it.title}</a>
                </div>
                <div className='movie_name'>
                  {it.year}
                </div>
                <div className='movie_name'>
                  {it.vote}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  },
  getInitialState: function() {
    return {
      movieList:[
      ],
      a:111
    };
  },
  getDefaultProps: function() {
    return {
    };
  },
  componentDidMount(){
    axios.get('http://localhost:8080/movie_list').then(res=>{
      console.log(res)
      this.setState({movieList:res.data.results})
    })
  },
  goToDetail(id){
    console.log(id)
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }
});



export default MovieList;
