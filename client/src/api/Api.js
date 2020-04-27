import axios from 'axios';

export default axios.create({
    baseURL: 'https://jlpt-learning.herokuapp.com/'
})