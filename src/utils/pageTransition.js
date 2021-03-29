import anime from 'animejs';

export default ({ onMiddle }) => (event) => {
  const {
    width,
    height,
    top,
    left,
  } = event.currentTarget.getBoundingClientRect();

  const anim = document.getElementById('animation-portal');

  anim.style.width = `${width}px`;
  anim.style.height = `${height}px`;
  anim.style.background = 'rgb(67, 56, 202)';
  anim.style.top = ~~top + 'px';
  anim.style.left = ~~left + 'px';
  // anim.style.opacity = 0;
  anim.style.display = 'block';

  const end = anime({
    targets: anim,
    opacity: [1, 0],
    easing: 'linear',
    autoplay: false,
    duration: 200,
    complete: () => {
      anim.style.display = 'none';
    },
  });

  const begin = anime({
    targets: anim,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    easing: 'easeInOutCirc',
    duration: 300,
    opacity: 1,
    complete: function (anim) {
      if (typeof onMiddle === 'function') {
        onMiddle();
      }
      setTimeout(() => {
        end.play();
      }, 400);
    },
  });
};
