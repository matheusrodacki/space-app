import styled from 'styled-components';
import Titulo from '../Titulo';
import Tags from './Tags';
import Populares from './Populares';
import Imagem from './Imagem';

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`;
const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Galeria = ({ fotos = [], aoFotoSelecionado }) => {
  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map((foto) => (
              <Imagem aoZoomSolicitado={aoFotoSelecionado} key={foto.id} foto={foto} />
            ))}
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};
