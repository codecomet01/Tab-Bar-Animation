const interval = setInterval(() => {
  const index = Math.floor(Math.random() * Math.floor(4)) + 1;
  document.getElementById('item-'+index).click();
}, 1400)

window.onmouseover = () => {
  clearInterval(interval);
}