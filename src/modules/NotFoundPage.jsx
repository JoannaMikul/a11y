import { useTitle } from '../queryHooks/useTitle';
import { HeaderSection } from './HeaderSection';
import comingSoon from '../assets/coming-soon.jpg';

export const NotFoundPage = () => {
  useTitle('Not Found Page');

  return <HeaderSection title='No page content' description='coming soon' image={comingSoon} />;
};
