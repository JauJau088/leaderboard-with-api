const container = document.querySelector('.scores');
const parentContainer = document.querySelector('.recent-scores-container-wrapper');

let data = [];
const current = [];
export const previous = [];
export const next = [];

/**
 * Generate the scores for the current page, update previous and next page
 * @param [_startIndex] - The index of the first score to be displayed.
 */
export const generateScores = (_startIndex = 0) => {
  current[0] = _startIndex;
  previous[0] = Math.max(_startIndex - 10, 0);
  next[0] = data.length < _startIndex + 10 ? current[0] : _startIndex + 10;

  container.innerHTML = '';

  for (let i = _startIndex; i < _startIndex + 10; i += 1) {
    const no = data.length > i ? `${i + 1}.` : '-';
    const user = data.length > i ? data[i].user : '-';
    const score = data.length > i ? parseInt(data[i].score, 10) : '-';
    container.innerHTML += `
    <li>
      <span>${no}</span>
      <span>${user}</span>
      <span>${score}</span>
    </li>`;
  }
};

const renderScores = (_data) => {
  data = _data;

  const sorted = data.sort((a, b) => {
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

  generateScores();
};

export default renderScores;
