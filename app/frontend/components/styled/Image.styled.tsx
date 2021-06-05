import styled from "styled-components";

interface StyledImageProps {}

const Img = styled.img<StyledImageProps>`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export default Img;
