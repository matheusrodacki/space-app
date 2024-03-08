import styled from 'styled-components';
import ItemNavegacao from './ItemNavegacao';

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

export const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <StyledList>
          <ItemNavegacao iconeAtivo='/icons/home-ativo.png' iconeInativo='/icons/home-inativo.png' ativo>
            Inicio
          </ItemNavegacao>
          <ItemNavegacao iconeAtivo='/icons/mais-vistas-ativo.png' iconeInativo='/icons/mais-vistas-inativo.png'>
            Mais Vistas
          </ItemNavegacao>
          <ItemNavegacao iconeAtivo='/icons/mais-curtidas-ativo.png' iconeInativo='/icons/mais-curtidas-inativo.png'>
            Mais Curtidas
          </ItemNavegacao>
          <ItemNavegacao iconeAtivo='/icons/novas-ativo.png' iconeInativo='/icons/novas-inativo.png'>
            Novas
          </ItemNavegacao>
          <ItemNavegacao iconeAtivo='/icons/surpreenda-me-ativo.png' iconeInativo='/icons/surpreenda-me-inativo.png'>
            Surpreenda-me
          </ItemNavegacao>
        </StyledList>
      </nav>
    </aside>
  );
};
