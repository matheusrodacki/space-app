import styled from 'styled-components';

const FigureEstilizado = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  background-repeat: no-repeat;
  display: flex;
  flex-grow: 1;
  align-items: center;
  min-height: 328px;
  max-width: 100%;
  margin: 0;
  border-radius: 20px;
`;

const TituloEstilizado = styled.h1`
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #ffffff;
  max-width: 300px;
  padding: 0 64px;
`;

export const Banner = ({ texto, backgroundImage }) => {
  return (
    <FigureEstilizado $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FigureEstilizado>
  );
};
