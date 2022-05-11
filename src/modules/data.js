// API
// My game: Eclipse war 2256
// My game id: dWUvZiAqWcoRfPMsUQDv

import generateScores from './recent-score-generator.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dWUvZiAqWcoRfPMsUQDv/scores/';

export const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();
  generateScores(json.result);
};

export const postData = (_name, _score) => {
  fetch(url, {
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
