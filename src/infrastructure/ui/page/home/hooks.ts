import useEffectOnce from 'application/utils/use-effect-once/use-effect-once';
import { gsap } from 'gsap';

const useHomePageData = () => {
  const helloTimeLine = gsap.timeline();

  const launchHelloAnimation = () =>
    helloTimeLine
      .fromTo('.h', { x: -1000, y: 500, rotation: 200 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'expo' })
      .fromTo(
        '.e',
        { x: 1000, y: -700, rotation: 0 },
        { x: 0, y: 0, duration: 1, rotation: 0, ease: 'elastic' },
        '-=0.7'
      )
      .fromTo('.l1', { x: 0, y: -700, rotation: 0 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'bounce' }, '-=0.7')
      .fromTo('.l2', { x: 0, y: 700, rotation: 0 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'bounce' }, '-=1')
      .fromTo('.o', { x: 1000, y: 0, rotation: 0 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'back' }, '-=0.7')
      .to('.hello', { x: -500, y: -500, duration: 2 })
      .to('.hello', { opacity: 0, duration: 1 }, '-=2')
      .to('.content', { opacity: 1, duration: 0.5 }, '-=1.2');

  useEffectOnce(() => {
    launchHelloAnimation();
  });
};

export default useHomePageData;
