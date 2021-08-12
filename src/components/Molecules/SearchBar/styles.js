import styled from 'styled-components'

export const Container = styled.div`
  width: 80%;
  height: 45px;
  display: grid;
  grid-template-columns: 47.5% 47.5% 5%;
  /* display: flex; */
  /* align-items: center;
  justify-content: space-between; */
  background-color: var(--bg-layout-color);
  border-radius: 7px;
  z-index: 1;

  & .search-input,
  .county-input {
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 10%;
      width: 1px;
      height: 80%;
      background-color: gray;
    }
  }

  & .search-input button p,
  .county-input button p {
    font-size: 16px;
    margin: 0;
    color: gray;
  }

  & .search-input .options,
  .county-input .options {
    width: 100%;
    background-color: #fff;
    padding: 5px;
    /* bottom: -29px; */
    position: absolute;
  }

  & .search-input button,
  .county-input button {
    width: 100%;
    overflow: hidden;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid transparent;
    background-color: var(--bg-layout-color);
    cursor: pointer;
  }

  & .search-input button:hover,
  .county-input button:hover {
    background-color: #f2f2f2;
  }

  & button {
    height: 100%;
  }
`
