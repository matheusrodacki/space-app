import styled from 'styled-components';
import Imagem from '../Galeria/Imagem';
import BotaoIcone from '../BotaoIcone';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const DialogStyled = styled.dialog`
  position: absolute;
  top: 294px;
  background-color: transparent;
  padding: 0;
  border: none;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export const ModalZoom = ({ foto }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogStyled open={!!foto}>
            <Imagem foto={foto} expandida={true}></Imagem>
            <form method='dialog'>
              <BotaoIcone formMethod='dialog'>
                <img src='/icons/fechar.png' alt='Icone de fechar' />
              </BotaoIcone>
            </form>
          </DialogStyled>
        </>
      )}
    </>
  );
};