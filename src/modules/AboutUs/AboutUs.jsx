import { HeaderSection } from '../HeaderSection';
import comingSoon from '../../assets/coming-soon.jpg';
import { useTitle } from '../../queryHooks/useTitle';

export const AboutUs = () => {
  useTitle('About Us');
  return <HeaderSection title='About us' description='Coming soon' image={comingSoon} />;
};
