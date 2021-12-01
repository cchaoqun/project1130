import   "./index.css";

var createReactClass = require('create-react-class');
var MovieList = createReactClass({
  render: function() {
    return  <div className="movieList">
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
                  <img src={it.movie_url} alt=""  />
                </div>
                <div className='movie_name'>
                  {it.movie_name}
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
        {
          movie_url:"https://m.media-amazon.com/images/M/MV5BNzdmZTk4MTktZmExNi00OWEwLTgxZDctNTE4NWMwNjc1Nzg2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
          movie_name:'第一步电影',
          id:1
        },
        {
          movie_url:"https://m.media-amazon.com/images/M/MV5BNzdmZTk4MTktZmExNi00OWEwLTgxZDctNTE4NWMwNjc1Nzg2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
          movie_name:'第一步电影',
          id:2
        },
        {
          movie_url:"https://m.media-amazon.com/images/M/MV5BNzdmZTk4MTktZmExNi00OWEwLTgxZDctNTE4NWMwNjc1Nzg2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
          movie_name:'第一步电影',
          id:3
        },
        {
          movie_url:"https://m.media-amazon.com/images/M/MV5BNzdmZTk4MTktZmExNi00OWEwLTgxZDctNTE4NWMwNjc1Nzg2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
          movie_name:'第一步电影',
          id:4
        },
        {
          movie_url:"https://m.media-amazon.com/images/M/MV5BNzdmZTk4MTktZmExNi00OWEwLTgxZDctNTE4NWMwNjc1Nzg2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_FMjpg_UX1000_.jpg",
          movie_name:'第一步电影',
          id:5
        },
      ]
    };
  },
  getDefaultProps: function() {
    return {
    };
  },
  componentDidMount(){
  },
  goToDetail(id){
    console.log(111)
  }
});



export default MovieList;
