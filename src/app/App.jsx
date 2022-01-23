import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { ROUTES } from '../routes';
import { theme } from '../styles/theme';
import { ThemeProvider } from '../styles/ThemeProvider';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { SkipLink } from '../components/SkipLink';
import { Insurance } from '../modules/Insurance';
import { AboutUs } from '../modules/AboutUs';
import { ClaimReport } from '../modules/ClaimReport';
import { Contact } from '../modules/Contact';
import { NotFoundPage } from '../modules/NotFoundPage';

const { HOME_PAGE, CONTACT, CLAIM_REPORT, ABOUT_US } = ROUTES;

const Content = styled.main`
  max-width: 1440px;
  margin: 0 auto;
`;

export const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <SkipLink />
      <NavigationBar />
      <Content id='main'>
        <Routes>
          <Route path={HOME_PAGE} element={<Insurance />} />
          <Route path={ABOUT_US} element={<AboutUs />} />
          <Route path={CLAIM_REPORT} element={<ClaimReport />} />
          <Route path={CONTACT} element={<Contact />} />
          <Route path={'/*'} element={<NotFoundPage />} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  </ThemeProvider>
);
