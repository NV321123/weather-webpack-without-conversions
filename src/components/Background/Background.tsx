import { FC, memo } from 'react';
import { useWeatherData } from '@hooks/useWeather';
import { useBackgroundTheme } from '@hooks/useBackgroundTheme';
import styles from './Background.module.scss';
import test from './test.js';

test();

import clearJpg from '@assets/images/clear.jpg';
import cloudsJpg from '@assets/images/clouds.jpg';
import rainJpg from '@assets/images/rain.jpg';
import stormJpg from '@assets/images/storm.jpg';
import snowJpg from '@assets/images/snow.jpg';
import mistJpg from '@assets/images/mist.jpg';

import clearWebp from '@assets/images/clear.webp';
import cloudsWebp from '@assets/images/clouds.webp';
import rainWebp from '@assets/images/rain.webp';
import stormWebp from '@assets/images/storm.webp';
import snowWebp from '@assets/images/snow.webp';
import mistWebp from '@assets/images/mist.webp';

import clearAvif from '@assets/images/clear.avif';
import cloudsAvif from '@assets/images/clouds.avif';
import rainAvif from '@assets/images/rain.avif';
import stormAvif from '@assets/images/storm.avif';
import snowAvif from '@assets/images/snow.avif';
import mistAvif from '@assets/images/mist.avif';

const imageMap: Record<string, { jpg: string; webp: string; avif: string }> = {
  'theme-clear': { jpg: clearJpg, webp: clearWebp, avif: clearAvif },
  'theme-clouds': { jpg: cloudsJpg, webp: cloudsWebp, avif: cloudsAvif },
  'theme-rain': { jpg: rainJpg, webp: rainWebp, avif: rainAvif },
  'theme-storm': { jpg: stormJpg, webp: stormWebp, avif: stormAvif },
  'theme-snow': { jpg: snowJpg, webp: snowWebp, avif: snowAvif },
  'theme-mist': { jpg: mistJpg, webp: mistWebp, avif: mistAvif },
};

const BackgroundComponent: FC = () => {
  const weatherData = useWeatherData();
  const themeClass = useBackgroundTheme(weatherData);
  const currentImages = imageMap[themeClass];

  return (
    <div className={`${styles.backgroundContainer} ${styles[themeClass]}`} aria-hidden="true">
      {currentImages && (
        <picture className={styles.imageWrapper}>
          <source srcSet={currentImages.avif} type="image/avif" />
          
          <source srcSet={currentImages.webp} type="image/webp" />
          
          <img 
            src={currentImages.jpg} 
            className={styles.backgroundImage} 
            alt="Weather background" 
          />
        </picture>
      )}
      <div className={styles.overlay}></div>
    </div>
  );
};

export const Background = memo(BackgroundComponent);