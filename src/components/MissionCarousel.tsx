import React, { useState } from 'react';
import { Mission } from '../model/Mission'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import MissionCard from './MissionCard';
import styled from 'styled-components';

interface MissionCarouselProps {
    items: Mission[];
}

const MissionCarousel: React.FC<MissionCarouselProps> = ({ items }) => {

    const [value, setValue] = useState(0);

    return (
        <Carousel 
        value={value}
        onChange={e => setValue((e || 0))}
        slides={items.map((mission: Mission, index: number) => (
            <MissionCard mission={mission} key={index} />
        ))}
        plugins={[
            'arrows',
            'clickToChange',
            'centered',
            {
                resolve: slidesToShowPlugin,
                options: {
                 numberOfSlides: 2
                }
              }
          ]}/>
    );
};

export default MissionCarousel;