import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid black;
`;

export const Info = styled.div`
  width: 900px;
`;

export const MoviePoster = styled.img`
  width: 100%;
`;

export const BackLink = styled(Link)`
  color: orangered;
  text-decoration: none;
  font-weight: 500;
`;

export const PosterContainer = styled.div`
  margin: 12px;
  border-radius: 4px;
  background-color: #dcdcdc;
  width: 300px;
  height: 450px;
  overflow: hidden;
`;
