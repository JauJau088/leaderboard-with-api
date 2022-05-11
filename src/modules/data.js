// API
// My game: Eclipse war 2256
// My game id: dWUvZiAqWcoRfPMsUQDv

import generateScores from './recent-score-generator.js';

export const fetchData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dWUvZiAqWcoRfPMsUQDv/scores/')
    .then((response) => response.json())
    .then((json) => {
      generateScores(json.result);
    });
};

export const postData = (_name, _score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dWUvZiAqWcoRfPMsUQDv/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user: _name,
      score: _score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};
