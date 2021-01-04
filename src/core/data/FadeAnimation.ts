import { EasingFunction } from 'react-native';
import { BaseAnimationConfig } from './BaseAnimation';


interface FadeInAnimationConfig extends BaseAnimationConfig {

    animationDuration: number;
    initialOpacity?: number;
}

interface FadeOutAnimationConfig extends BaseAnimationConfig {
    animationDuration: number;
    finalOpacity?: number;
}


export { FadeInAnimationConfig, FadeOutAnimationConfig };
