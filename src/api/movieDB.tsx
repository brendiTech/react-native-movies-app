import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '1201e411b03f947a2be22060f4977dc8'
    }
})

export default movieDB;