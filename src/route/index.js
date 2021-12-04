import movieDetail from '../views/movieDetail'
import home from '../views/home'
import movieList from '../views/movieList'

export const routes = [
    {
        path:'/movieDetail',
        com:movieDetail
    },
    {
        path:'/movieList',
        com:movieList
    },
    {
        path:'/home',
        com:home
    }
]