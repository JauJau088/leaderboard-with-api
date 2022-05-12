// API
// My game: Eclipse war 2256
// My game id: dWUvZiAqWcoRfPMsUQDv

import renderScores from './score-renderer.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dWUvZiAqWcoRfPMsUQDv/scores/';

export const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();

  const sorted = json.result.sort((a, b) => {
    let ret;
    if (parseInt(a.score, 10) > parseInt(b.score, 10)) {
      ret = -1;
    } else if (parseInt(a.score, 10) < parseInt(b.score, 10)) {
      ret = 1;
    } else {
      ret = 0;
    }
    return ret;
  });

  renderScores(sorted);
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
