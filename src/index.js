// imports
import './style.scss';
import { fetchData, postData } from './modules/data.js';
import { previous, next, generateScores } from './modules/score-renderer.js';

// Generate scores
fetchData();

// Add a score
const container = document.querySelector('.form');
const inputName = document.querySelector('#input-name');
const inputScore = document.querySelector('#input-score');

container.onsubmit = (e) => {
  e.preventDefault();

  const name = inputName.value;
  const score = inputScore.value;
  postData(name, score);

  container.reset();
};

// Refresh button
const refreshButton = document.querySelector('#refresh-btn');

refreshButton.onclick = () => {
  fetchData();
};

// Prev-next
document.addEventListener('click', (e) => {
  if (e.target.matches('#prev')) {
    generateScores(previous[0]);
  }

  if (e.target.matches('#next')) {
    generateScores(next[0]);
  }
});
