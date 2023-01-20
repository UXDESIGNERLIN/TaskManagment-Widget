import styled from '@emotion/styled';

export const Title = styled.h3`
  color: red;
`
export const Wrapper = styled.li`
  border: 1px solid green;
  padding: 10px;
`
export const Pannel = styled.div`
  max-height:${({ expand }) => (expand ? '300px' : '0')};
  overflow: hidden;
  transition: max-height .8s ease;
`