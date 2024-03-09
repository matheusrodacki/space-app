import styled from 'styled-components';
import BotaoIcone from '../../BotaoIcone';

const FigureStyled = styled.figure`
  width: ${(props) => (props.$expandida ? '90%' : '460px')};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 20px;

  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background: #001634;
    border-radius: 0 0 20px 20px;
    color: #ffffff;
    box-sizing: border-box;
    padding: 12px;
    h3,
    footer {
      margin: 0;
    }
    h3 {
      font-family: 'GandhiSansBold';
      font-weight: 700;
      font-size: 20;
      line-height: 24px;
    }
    footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const Imagem = ({ foto, expandida, aoZoomSolicitado }) => {
  return (
    <FigureStyled $expandida={expandida}>
      <img src={foto.path} alt='' />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <footer>
          <p>Fonte/{foto.fonte}</p>
          <BotaoIcone>
            <img src='/icons/favorito.png' alt='Icone de favorito' />
          </BotaoIcone>
          {!expandida && (
            <BotaoIcone
              aria-hidden={expandida}
              onClick={() => {
                aoZoomSolicitado(foto);
              }}>
              <img src='/icons/expandir.png' alt='Icone de expandir' />
            </BotaoIcone>
          )}
        </footer>
      </figcaption>
    </FigureStyled>
  );
};
