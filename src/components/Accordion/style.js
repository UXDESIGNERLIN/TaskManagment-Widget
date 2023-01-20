import styled from '@emotion/styled';
import { colors } from '../../styles/variables'

export const Container = styled.ul`
  margin-top: 3rem;
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.default};
  border-radius: 25px;
`