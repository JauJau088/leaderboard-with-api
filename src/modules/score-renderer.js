let data = [];
const current = [];
export const previous = [];
export const next = [];

export const generateScores = (_startIndex = 0) => {
  current[0] = _startIndex;
  previous[0] = Math.max(_startIndex - 10, 0);
  next[0] = data.length < _startIndex + 10 ? current[0] : _startIndex + 10;

  const container = document.querySelector('.scores');
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
  const parentContainer = document.querySelector('.recent-scores-container-wrapper');
  data = _data;
  generateScores();

  if (data.length > 10) {
    parentContainer.innerHTML += `
    <div class="nav-container">
      <a id="prev"><span class="material-icons">arrow_left</span>Prev</a>
      <a id="next">Next<span class="material-icons">arrow_right</span></a>
    </div>`;
  }
};

export default renderScores;
