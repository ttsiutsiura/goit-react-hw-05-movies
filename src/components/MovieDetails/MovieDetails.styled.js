import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid black;
`;

export const MoviePoster = styled.img`
  margin: 12px;
  border-radius: 4px;
`;

export const BackLink = styled(Link)`
  color: orangered;
  text-decoration: none;
  font-weight: 500;
`;
