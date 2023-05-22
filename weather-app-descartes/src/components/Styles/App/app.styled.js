import styled from "styled-components";
import ocean from "../../../assets/pexels-matt-hardy-3560168.jpg";

export const Container = styled.div`
  width: 80rem;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);
  border-radius: 8px;
`;
export const ContainerApp = styled.div`
  background: url(${ocean}) no-repeat center center/cover;
`;
export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;
