import cottage from '../../../assets/cottage.jpg';
import dubrovnik from '../../../assets/dubrovnik.jpg';
import tenerife from '../../../assets/teide.jpg';
import safeTravel from '../../../assets/safe-travel.jpg';
import { Description, Gallery, Image, Section } from './PhotoSection.styles';

const topicsList = [
  { image: cottage, alt: 'a cottage', title: 'Renting Vacation Homes' },
  { image: dubrovnik, alt: 'croatia - dubrovnik', title: 'Trends & Predictions' },
  { image: tenerife, alt: 'tenerife - teide volcano', title: 'Popular Travel Destinations for 2021' },
  { image: safeTravel, alt: 'protection at height', title: 'Travel Gear for Safe Travels in 2021' },
];

export const PhotoSection = () => (
  <Section>
    <h3>Explore Our Travel Topics</h3>
    <Gallery>
      {topicsList.map(({ image, alt, title }) => (
        <figure key={title}>
          <Image src={image} alt={alt} />
          <Description>{title}</Description>
        </figure>
      ))}
    </Gallery>
  </Section>
);
