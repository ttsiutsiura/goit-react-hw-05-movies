import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;

  :hover {
    color: orangered;
  }

  &.active {
    color: orangered;
  }
`;

export const TrandingListItem = styled.li`
  padding: 4px;
`;
