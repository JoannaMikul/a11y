import { useNavigate } from 'react-router-dom';

import airplane from '../../assets/airplane.jpg';
import airport from '../../assets/airport.jpg';
import safeTravel from '../../assets/safe-travel-2.jpg';
import { Offer } from './Offer';
import { PhotoSection } from './PhotoSection';
import { Quote } from './Quote';
import { ContactSection } from './ContactSection';
import { HeaderSection } from '../HeaderSection';
import { useTitle } from '../../queryHooks/useTitle';

export const Insurance = () => {
  useTitle('Insurance');
  const navigation = useNavigate();

  return (
    <>
      <HeaderSection
        title='Travel Insurance'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.'
        isButton
        buttonText='Order now'
        image={airport}
        redirectTo={() => navigation('/order-now')}
      />
      <Offer img={airplane} alt='flight to another country' title='Insurance for International Visitors'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <ul>
          <li>List item #1</li>
          <li>List item #2</li>
          <li>List item #3</li>
        </ul>
      </Offer>
      <Offer img={safeTravel} reverse alt='flight to another country' title='Safe travels'>
        <p>
          Mauris in aliquam sem fringilla ut morbi tincidunt augue. Eget sit amet tellus cras adipiscing. Viverra
          accumsan in nisl nisi. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Massa sapien
          faucibus et molestie ac feugiat. Dignissim convallis aenean et tortor at risus viverra adipiscing.
        </p>
      </Offer>
      <PhotoSection />
      <Quote />
      <ContactSection />
    </>
  );
};
