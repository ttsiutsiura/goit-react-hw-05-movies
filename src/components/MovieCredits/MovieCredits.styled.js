import styled from '@emotion/styled';

export const ActorCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 220px;
  text-align: center;
`;

export const ActorList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const ActorImage = styled.img`
  display: block;
`;

export const ImageContainer = styled.div`
  margin-bottom: 12px;
  width: 200px;
  height: 300px;
  background-color: #dcdcdc;
  overflow: hidden;
  border-radius: 4px;
`;
