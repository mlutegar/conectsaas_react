import styled, { keyframes } from "styled-components";

// 🔄 Animação do loader
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 🔹 Estilização do Loader
const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9); /* Fundo semi-transparente */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

// 🔹 Ícone de carregamento
const LoaderIcon = styled.div`
  width: 50px;
  height: 50px;
  border: 5px solid var(--primaria); /* Cor principal do site */
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const Loader = () => (
    <LoaderOverlay>
        <LoaderIcon />
    </LoaderOverlay>
);

export default Loader;
