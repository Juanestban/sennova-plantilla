import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  width: auto;
  height: 80vh;
  margin: 10px 0 0 0;
  margin-right: 0;

  & h2 {
    color: var(--title-color-default);
  }
`
export const FiltersContainer = styled.div`
  width: 20vw;
  padding: 0 40px;
  & h2 {
    text-align: center;
  }
`

export const CardsDetailsContainer = styled.div`
  width: 60vw;
`

export const CardsContainer = styled.div`
  margin-right: 40px;
  box-shadow: 7px 7px 15px #592a08;
`

export const MapContainer = styled.figure`
  width: 20vw;
  height: 80vh;
  margin: 0;
`

export const CardsContainerHeader = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`
