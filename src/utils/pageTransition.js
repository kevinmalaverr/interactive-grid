export default ({ onMiddle }) => ({ currentTarget }) => {
  const { width, height, top, left } = currentTarget.getBoundingClientRect();
  const container = document.getElementById('animation-portal');
  const targetClone = currentTarget.cloneNode(true);

  targetClone.style.position = 'fixed';
  targetClone.style.top = ~~top + 'px';
  targetClone.style.left = ~~left + 'px';
  targetClone.style.width = `${width}px`;
  targetClone.style.height = `${height}px`;
  targetClone.classList.add('page-transition');

  targetClone.addEventListener('animationend', ({ animationName }) => {
    if (animationName === 'pageTransition') {
      if (typeof onMiddle === 'function') {
        onMiddle();
      }

      targetClone.style.top = '0';
      targetClone.style.left = '0';
      targetClone.style.width = '100vw';
      targetClone.style.height = '100vh';

      targetClone.classList.remove('page-transition');
      targetClone.classList.add('page-transition-end');
    } else if (animationName === 'pageTransitionEnd') {
      container.removeChild(targetClone);
    }
  });

  container.appendChild(targetClone);
};
