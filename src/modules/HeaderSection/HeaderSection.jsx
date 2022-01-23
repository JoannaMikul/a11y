import { Img, Textbox, Section, Wrapper } from './HeaderSection.styles';

import { Button } from '../../components/Button';

export const HeaderSection = ({ isButton, buttonText, title, description, image, redirectTo }) => (
  <Section>
    <Img src={image} alt='' />
    <Textbox>
      <Wrapper>
        <h1>{title}</h1>
        <p>{description}</p>
        {isButton && <Button text={buttonText} onClick={redirectTo} />}
      </Wrapper>
    </Textbox>
  </Section>
);
