import styled from '@emotion/styled';
import { colors } from '../../styles/variables'

export const Progress = styled.div`
  display: flex;
  height: 1rem
  overflow: hidden;
  font-size: .75rem;
  background-color: ${colors.secondary};
  border-radius: 0.25rem;
  width: 100%;
`

export const Bar = styled.div`
  padding: 5px;
  width: ${({ progress }) => progress}%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: ${colors.brightDefault};
  text-align: center;
  white-space: nowrap;
  background-color: ${colors.primary};
  transition: width .6s ease;
`