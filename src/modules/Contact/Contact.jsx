import { HeaderSection } from '../HeaderSection';
import comingSoon from '../../assets/coming-soon.jpg';
import { useTitle } from '../../queryHooks/useTitle';

export const Contact = () => {
  useTitle('Contact');
  return <HeaderSection title='Contact' description='Coming soon' image={comingSoon} />;
};
