import { TitleCard, ContainerCard } from './styles'

export const Card = ({ title = '', children }) => {
  return (
    <ContainerCard>
      <div className="card-header">
        <TitleCard>{title}</TitleCard>
      </div>
      <div className="card-body">{children}</div>
    </ContainerCard>
  )
}
