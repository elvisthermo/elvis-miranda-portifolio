import styled from 'styled-components';

export const Card = styled.div`
  width:100vw;
  height:100vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const CardImage = styled.img`
  width: 150px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

export const CardDate = styled.p`
  font-size: 14px;
  color: #666;
`;

export const CardLink = styled.a`
  font-size: 14px;
  color: #0077ff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #0055cc;
  }
`;
