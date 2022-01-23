import logo from '../../assets/logo-footer.png';
import { Link } from '../Link';
import { Container, Content, FooterList, FooterSection, FooterWrapper, Logo, TitleSection } from './Footer.styles';

const footerLinks = [
  {
    title: 'About us',
    links: [
      { linkTitle: 'Newsroom', path: '/newsroom' },
      { linkTitle: 'Careers', path: '/careers' },
      { linkTitle: 'Our story', path: '/our-story' },
      { linkTitle: 'Customer Stories', path: '/customer-stories' },
    ],
  },
  {
    title: 'Products',
    links: [
      { linkTitle: 'Vacation / Holiday', path: '/vacation-holiday' },
      { linkTitle: 'Student / Scholar', path: '/student-scholar' },
      { linkTitle: 'Mission', path: '/mission' },
      { linkTitle: 'Marine Captain / Crew', path: '/captain-crew' },
      { linkTitle: 'Employer / Business Travel', path: '/employer-business' },
    ],
  },
  {
    title: 'Members',
    links: [
      { linkTitle: 'Forms Library', path: '/forms-library' },
      { linkTitle: 'Find a Doctor', path: '/find-doctor' },
      { linkTitle: 'Renew Policy', path: '/renew-policy' },
      { linkTitle: 'Claims Center', path: '/claims-center' },
    ],
  },
];

export const Footer = () => (
  <Container>
    <Content>
      <Logo alt='JM insurer' src={logo} />
      <FooterWrapper>
        {footerLinks.map(({ title, links }) => (
          <FooterSection key={title}>
            <TitleSection>{title}</TitleSection>
            <FooterList>
              {links.map(({ linkTitle, path }) => (
                <li key={linkTitle}>
                  <Link exact='true' to={path}>
                    {linkTitle}
                  </Link>
                </li>
              ))}
            </FooterList>
          </FooterSection>
        ))}
      </FooterWrapper>
    </Content>
  </Container>
);
