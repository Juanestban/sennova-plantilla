import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid ${({ borderColor = 'transparent' }) => borderColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-layout-color);
  border-radius: 6px;

  & .search-input,
  .country-input {
    width: 100%;
    height: 100%;
    position: relative;
  }

  & .country-input::after {
    content: '';
    display: block;
    position: absolute;
    top: 10%;
    width: 1px;
    height: 80%;
    background-color: gray;
  }

  & .search-input button p,
  .country-input button p {
    font-size: 16px;
    margin: 0;
    color: gray;
  }

  & .search-input .options,
  .country-input .options {
    width: 100%;
    background-color: #fff;
    padding: 5px;
    /* bottom: -29px; */
    position: absolute;
    z-index: 101;
  }

  & .search-input button,
  .country-input button {
    width: 100%;
    overflow: hidden;
    padding: 10px;
    border: 1px solid transparent;
    background-color: var(--bg-layout-color);
    cursor: pointer;
  }

  & .search-input button {
    border-radius: 6px 0 0 6px;
  }

  & .search-input button:hover,
  .country-input button:hover {
    background-color: #f2f2f2;
  }

  & button {
    height: 100%;
  }

  & .search-input button p,
  .country-input button p {
    max-width: 250px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`
