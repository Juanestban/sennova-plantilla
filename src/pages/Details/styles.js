import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;
  width: auto;
  height: 90vh;
  margin: 10px 0 0 0;
  margin-right: 0;
  color: var(--text-button-default-color);
  /* border-top: 3px solid black; */
  box-shadow: inset 0px 5px 10px -6px #ccc6bd;

  & h2 {
    color: var(--title-color-default);
  }

  & label {
    font-size: 0.8rem;
  }
`
export const FiltersContainer = styled.div`
  width: 20vw;
  padding: 0 40px;
  position: relative;

  & h2 {
    text-align: center;
  }

  & .content-all {
    position: relative;

    & h3 {
      padding-top: 10px;
    }

    & button {
      text-align: initial;
    }
  }

  & .sugeridos::after,
  .distancia::after {
    content: '';
    display: block;
    width: 100%;
    box-shadow: 0px 0px 100px 12px rgba(0, 0, 0, 0.29);
    height: 1px;
    top: 0;
    left: 0;
    position: absolute;
    background-color: gray;
  }
`

export const CardsDetailsContainer = styled.div`
  width: 60vw;
  overflow-y: scroll;
  padding-bottom: 20px;
`

export const CardsContainer = styled.div`
  margin-right: 40px;
  box-shadow: 7px 7px 15px #592a08;
`

export const MapContainer = styled.figure`
  width: 20vw;
  height: 90vh;
  margin: 0;
`

export const CardsContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  color: var(--text-button-default-color);
  & p {
    margin: 0;
    padding: 0 0 0 8px;
  }

  & select {
    border: none;
    color: var(--text-button-default-color);
  }

  .order {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
