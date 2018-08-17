import url from './url';
import axios from 'axios';

const postResult = async (name, score) => {
    return axios({
      method: 'post',
      url: url.result,
      data: {
        nickname: name,
        score: score
      }
    })
  }

const getWords = async () => {
    return axios({
      method: 'get',
      url: url.getWords
    }).then(res => res.data);
  }

  const getScores = async () => {
    return axios({
      method: 'get',
      url: url.scores
    }).then(scores => scores.data);
  }

  export default {
      postResult,
      getWords,
      getScores
  }