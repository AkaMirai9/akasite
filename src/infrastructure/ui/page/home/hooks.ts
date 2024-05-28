import useEffectOnce from 'application/utils/use-effect-once/use-effect-once';
import useWindowDimensions from 'application/utils/use-window-dimensions/use-window-dimensions';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const useHomePageData = () => {
  const { width, height } = useWindowDimensions();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const homePageTimeLine = gsap.timeline();

  const displayContent = () => {
    homePageTimeLine
      .to('.content', { opacity: 1, duration: 0.5 })
      .fromTo('.education', { y: 50, opacity: 0, duration: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.experiences', { y: 50, opacity: 0, duration: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.myself', { y: 50, opacity: 0, duration: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
      .fromTo('.projects', { y: 50, opacity: 0, duration: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.3');
  };

  const launchHelloAnimation = () =>
    homePageTimeLine
      .to('.hello', { opacity: 1, duration: 0 })
      .fromTo('.h', { x: -width, y: height, rotation: 200 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'expo' })
      .fromTo(
        '.e',
        { x: width, y: -height, rotation: 0 },
        { x: 0, y: 0, duration: 1, rotation: 0, ease: 'elastic' },
        '-=0.7'
      )
      .fromTo(
        '.l1',
        { x: 0, y: -height, rotation: 0 },
        { x: 0, y: 0, duration: 1, rotation: 0, ease: 'bounce' },
        '-=0.7'
      )
      .fromTo('.l2', { x: 0, y: height, rotation: 0 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'bounce' }, '-=1')
      .fromTo('.o', { x: width, y: 0, rotation: 0 }, { x: 0, y: 0, duration: 1, rotation: 0, ease: 'back' }, '-=0.7')
      .to('.hello', { y: -500, opacity: 0, duration: 1.2 })
      .then(() => displayContent());

  useEffectOnce(() => {
    console.log(document.location);
    launchHelloAnimation();
  });

  const onClickCard = (route: string) => () => {
    homePageTimeLine
      .to('.projects', { y: 50, opacity: 0, duration: 0.5 })
      .to('.myself', { y: 50, opacity: 0, duration: 0.5 }, '-=0.3')
      .to('.experiences', { y: 50, opacity: 0, duration: 0.5 }, '-=0.3')
      .to('.education', { y: 50, opacity: 0, duration: 0.5 }, '-=0.3')
      .then(() => {
        navigate(route);
      });
  };

  return {
    t,
    onClickCard
  };
};

export default useHomePageData;
