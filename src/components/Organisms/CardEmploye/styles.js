import styled from 'styled-components'

export const ContentImages = styled.div`
  padding: 20px;
  display: flex !important;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 95%;

  & .slick-slider .slick-list {
    width: 98%;
    margin: 0 auto;
  }

  & .slick-slider .slick-prev {
    left: -10px;
    z-index: 2;
  }

  & .slick-slider .slick-prev::before,
  & .slick-slider .slick-next::before {
    color: rgba(0, 0, 0, 0.5);
  }

  & .slick-slider .slick-next {
    right: -10px;
    z-index: 2;
  }
`

export const ImageContent = styled.div`
  width: 350px;
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
