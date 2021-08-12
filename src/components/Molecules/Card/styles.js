import styled from 'styled-components'

export const ContainerCard = styled.div`
  width: 100%;
  padding: 10px 0;

  & .card-header {
    padding: 10px 0;
  }

  & .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const TitleCard = styled.h2`
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  color: var(--text-button-default-color);
  font-size: 20px;
`
