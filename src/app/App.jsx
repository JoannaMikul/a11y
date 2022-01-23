import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { ThemeProvider } from '../styles/ThemeProvider';
import { theme } from '../styles/theme';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { Insurance } from '../modules/Insurance';
import { AboutUs } from '../modules/AboutUs/AboutUs';
import { ClaimReport } from '../modules/ClaimReport/ClaimReport';
import { Contact } from '../modules/Contact/Contact';
import { ROUTES } from '../routes';
import { NotFoundPage } from '../modules/NotFoundPage';
import { SkipLink } from '../components/SkipLink';

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
