import styled from '@emotion/styled';
import { colors } from '../../styles/variables'

export const Title = styled.h4`
  color: ${({ allTasksChecked }) => allTasksChecked ? colors.primary : colors.gray1};
`
export const Wrapper = styled.li`
  &:last-of-type {
    border: none;
  }
  padding: 1rem;
  border-bottom: 1px solid ${colors.default};
  overflow: auto;
`
export const Pannel = styled.div`
  max-height:${({ expand }) => (expand ? '300px' : '0')};
  overflow: hidden;
  transition: max-height .8s ease;
`

export const ClickingPannel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`

export const Arrow = styled.span`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${({ expand }) => (expand ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: transform .5s ease;
`