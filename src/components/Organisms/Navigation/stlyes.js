import styled from 'styled-components'

export const Header = styled.header`
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg-layout-color);

  &.title-header,
  nav {
    width: 50%;
  }

  & nav ul {
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0 15px;
  }
`

export const Figure = styled.figure`
  display: flex;
  width: auto;
  height: 20vh;
  margin: 10px 20px;
  align-items: center;

  &img {
    width: 100%;
    height: 100%;
  }
`
