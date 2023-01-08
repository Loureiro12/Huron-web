import styled from 'styled-components'

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  padding: 0 20px;
`
export const Content = styled.div`
  width: 1120px;
  margin-top: 3.875rem;
`

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
  display: flex;
  width: 100%;
`
export const TextPosition = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`
export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`
