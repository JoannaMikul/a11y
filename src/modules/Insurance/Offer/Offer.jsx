import { StyledImage, TextContent, Wrapper } from './Offer.styles';

export const Offer = ({ reverse, img, alt, title, children }) => (
  <Wrapper reverse={reverse}>
    <StyledImage src={img} alt={alt} />
    <TextContent>
      <h2>{title}</h2>
      {children}
    </TextContent>
  </Wrapper>
);
