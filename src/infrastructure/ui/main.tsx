import initI18n from 'infrastructure/controllers/translation/i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'infrastructure/ui/index.css';
import App from 'infrastructure/ui/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { CustomEase } from 'gsap/CustomEase';
import { RoughEase, ExpoScaleEase, SlowMo } from 'gsap/EasePack';

import { Flip } from 'gsap/Flip';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Observer } from 'gsap/Observer';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from 'gsap/Draggable';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { EaselPlugin } from 'gsap/EaselPlugin';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  Observer,
  ScrollToPlugin,
  Draggable,
  MotionPathPlugin,
  EaselPlugin,
  PixiPlugin,
  TextPlugin,
  RoughEase,
  ExpoScaleEase,
  SlowMo,
  CustomEase
);

initI18n();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
