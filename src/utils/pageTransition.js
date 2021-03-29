import anime from 'animejs';

export default ({ onMiddle }) => ({ currentTarget }) => {
  const { width, height, top, left } = currentTarget.getBoundingClientRect();
  const container = document.getElementById('animation-portal');
  const targetClone = currentTarget.cloneNode(true);

  targetClone.style.position = 'fixed';
  targetClone.style.top = ~~top + 'px';
  targetClone.style.left = ~~left + 'px';
  targetClone.style.width = `${width}px`;
  targetClone.style.height = `${height}px`;

  container.appendChild(targetClone);

  const end = anime({
    targets: targetClone,
    opacity: [1, 0],
    easing: 'linear',
    autoplay: false,
    duration: 300,
    endDelay: 200,
    complete() {
      container.removeChild(targetClone);
    },
  });

  const begin = anime({
    targets: targetClone,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    easing: 'easeInOutExpo',
    duration: 300,
    autoplay: false,
    endDelay: 200,
    backroundColor: 'none',
    complete() {
      if (typeof onMiddle === 'function') {
        onMiddle();
      }
      setTimeout(() => {
        end.play();
      }, 300);
    },
  });

  setTimeout(() => {
    begin.play();
  }, 0);
};
