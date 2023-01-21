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
  margin-top: 2.875rem;
`

export const Text = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`
export const ContentHeaderPage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ButtonBack = styled.button`
  outline: 0;
  border: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.theme['gray-900']};

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
  }

  svg {
    font-size: 1.75rem;
  }

  :hover {
    color: #7c7c7c;
  }
`

export const TextHeaderPage = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 19px;

  color: ${(props) => props.theme['gray-900']};
`

export const ContainerFloatingBox = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5625rem;

  :hover {
    p {
      color: ${(props) => props.theme['blue-200']};
    }

    svg {
      color: ${(props) => props.theme['blue-200']};
    }
  }

  svg {
    color: ${(props) => props.theme['blue-100']};
    font-weight: 700;
  }
`

export const TextFloatingBox = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: ${(props) => props.theme['blue-100']};
`

export const TitleBox = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: start;
  margin-bottom: 31px;

  color: ${(props) => props.theme['gray-900']};
`

export const WrapperInput = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 21px;
`

export const ContainerButtonAddDoctor = styled.div`
  justify-content: center;
  display: flex;
`

export const ButtonAddDoctor = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  outline: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: 0.8;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;

  p {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: ${(props) => props.theme['gray-900']};
  }

  svg {
    color: ${(props) => props.theme['blue-150']};
  }

  :hover {
    p {
      color: ${(props) => props.theme['gray-500']};
    }

    svg {
      color: ${(props) => props.theme['blue-50']};
    }
  }
`
