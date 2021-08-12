import styled from 'styled-components'

export const ContainerCard = styled.div`
  display: flex;
  border: 1px solid var(--title-color-default);
  padding-right: 20px;

  & p {
    color: var(--text-button-default-color);
  }
`

export const TitleCard = styled.h2`
  font-weight: bold;
  color: var(--title-color-default);
  font-size: 22px;
  margin: 25px 0 0 0;
`

export const LocationCard = styled.p`
  font-size: 0.8rem;
  margin-top: 10px;
`

export const TextInfoCard = styled.p`
  size: 1rem;
  padding-top: 10px;
`

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0 20px 0;
`

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`

export const ContactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-right: 7px;
  }
`
