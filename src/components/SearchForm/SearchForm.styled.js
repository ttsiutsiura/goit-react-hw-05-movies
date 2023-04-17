import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: fit-content;

  svg {
    color: black;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 5px;
    right: 5px;
  }
`;

export const Input = styled.input({
  fontSize: 16,
  borderRadius: 4,
  outline: 'none',
  padding: 4,
  paddingRight: 30,
  borderColor: 'orangered',
  borderStyle: 'solid',
  position: 'relative',
  bottom: 0,
  left: 0,
  height: 30,
  boxSizing: 'border-box',
});
