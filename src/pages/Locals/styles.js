import styled from 'styled-components'

export const Container = styled.div`
  /* min-height: 100vh; */

  & .container-img {
    width: 100%;
    margin-bottom: 25px;
  }

  & .container {
    padding: 0 5%;
  }

  & .container .about-business-content {
    padding-bottom: 20px;

    & h2 {
      color: var(--text-button-default-color);
    }

    & p {
      width: 70%;
      font-size: 14px;
      color: gray;
    }
  }

  & .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    & .primary-content {
      width: 70%;
      display: flex;
      position: relative;
    }

    & .columns {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    & .unique .text-content {
      display: flex;
      padding: 0 20px;
      justify-content: space-between;
    }

    & .special {
      width: 30%;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      padding-left: 20px;
    }

    & .unique::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
      height: 100%;
      background-color: var(--border-button-color-default);
    }
  }
`
