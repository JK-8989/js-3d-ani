const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
console.log(title);
const nftInfo = document.querySelector('.nft-info');
const circle = document.querySelector('.circle');
const purchase = document.querySelector('.purchase button');
const size = document.querySelector('.size');

container.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener('mouseenter', e => {
  card.style.transition = 'all 0.1s ease';

  title.style.transform = 'translateZ(300px)';
})

container.addEventListener('mouseleave', e => {
  card.style.transition = 'all 0.5s ease';
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // title.style.transform = 'translateZ(0px)';
})