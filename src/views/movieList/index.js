import   "./index.css";
import axios from 'axios';
import { Table } from 'antd';
var createReactClass = require('create-react-class');
var MovieList = createReactClass({
  render: function() {
    return  <div className="movieList">
      
                <Table rowKey='id' pagination={false} dataSource={this.state.dataSource} columns={this.state.columns} />
             
              </div>
  },
  getInitialState: function() {
    return {
      dataSource:[],
      columns :[
        {
          title: 'Movie_url',
          dataIndex: 'url',
          key: 'url',
          render:function(text, record, index){
            return <img src={text} className='movie_img' />
          }
        },
        {
          title: 'Movie_name',
          dataIndex: 'title',
          key: 'title',
          render:function(text, record, index){
            return <a href={`/movieDetail?id=${record.id}`} >{text}</a>
          }
        },
        {
          title: 'Year',
          dataIndex: 'year',
          key: 'year',
          sorter: (a, b) => a.year - b.year,
        },
        {
          title: 'Vote',
          dataIndex: 'vote',
          key: 'vote',
          sorter: (a, b) => a.vote - b.vote,
        },
      ],
    };
  },
  getDefaultProps: function() {
    return {
    };
  },
  componentDidMount(){
    axios.get('http://localhost:8080/movie_list').then(res=>{
      console.log(res)
      this.setState({dataSource:res.data.results})
    })
  },
  goToDetail(id){
    console.log(id)
    // eslint-disable-next-line react-hooks/rules-of-hooks
  }
});



export default MovieList;
