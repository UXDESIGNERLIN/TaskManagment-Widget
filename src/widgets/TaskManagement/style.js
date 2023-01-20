import styled from '@emotion/styled';
import { colors } from '../../styles/variables'

export const Container = styled.div`
  margin: auto;
  margin-top: 1rem;
  padding: 2rem;
  max-width: 50%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  border: 1px solid ${colors.default}; 
  border-radius: 25px;
`