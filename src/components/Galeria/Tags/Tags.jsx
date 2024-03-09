import styled from 'styled-components';
import tags from './tags.json';

const TagsContainerConteudo = styled.section`
  display: flex;
  align-items: center;
  gap: 30px;
  P {
    color: #d9d9d9;
    font-family: Gandhi Sans;
    font-size: 24px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

const TagsContainerBtns = styled.div`
  display: flex;
  gap: 24px;
  button {
    background: rgba(217, 217, 217, 0.3);
    height: 49px;
    padding: 10px, 8px, 10px, 8px;
    border-radius: 10px;
    gap: 10px;
    color: #ffffff;
    transition: background-color 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
    box-sizing: border-box;
    &:hover {
      border-color: #c98cf1;
      //background: linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%);
    }
  }
`;

export const Tags = () => {
  return (
    <TagsContainerConteudo>
      <p>Busque por tags:</p>
      <TagsContainerBtns>
        {tags.map((tag) => (
          <button key={tag.id}>{tag.titulo}</button>
        ))}
      </TagsContainerBtns>
    </TagsContainerConteudo>
  );
};
