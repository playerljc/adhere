import type { StepsSwiperProps } from '../types';
import { createFactory } from '../util';
import Steps from './Steps';
import StepsSwiper from './StepsSwiper';

Steps.StepsSwiper = createFactory<StepsSwiperProps>(StepsSwiper, {});

export default Steps;
