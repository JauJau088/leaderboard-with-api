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
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

prevButton.onclick = () => {
  generateScores(previous[0]);
};

nextButton.onclick = () => {
  generateScores(next[0]);
};
