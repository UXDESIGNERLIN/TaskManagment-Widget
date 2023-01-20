//#f3fbfa
//#4cb393
// how to make variable
import styled from '@emotion/styled';

export const Progress = styled.div`
  display: flex;
  height: 1rem
  overflow: hidden;
  font-size: .75rem;
  background-color: #f3fbfa;
  border-radius: 0.25rem;
  width: 50%;
`

export const Bar = styled.div`
    padding: 5px;
    width: ${({ progress }) => progress}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    background-color: #4cb393;
    transition: width .6s ease;
`