import React from 'react';
import styled from 'styled-components';

const ImageIcon = styled.img`
  width: 1.5em;
  padding: 1.4em;
  cursor: pointer;
  ${(props) => props.isClicked && 'background-color: #150096;'}
`;

// Se o seu ícone precisar de estilos adicionais, você pode criar um componente separado para ele
const StyledImageIcon = ({ src, onClick, isClicked }) => {
  return <ImageIcon src={src} onClick={onClick} isClicked={isClicked} />;
};

export default StyledImageIcon;