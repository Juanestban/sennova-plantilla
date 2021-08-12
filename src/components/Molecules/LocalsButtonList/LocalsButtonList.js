import {
  FaListAlt,
  FaCottonBureau,
  FaCocktail,
  FaUtensils,
} from 'react-icons/fa'
import Button from '../../Atoms/Button'
import { ContainerList } from './styles'

const buttons = [
  { Icon: FaListAlt, title: 'Acepta reservas' },
  { Icon: FaUtensils, title: 'Acepta reservas' },
  { Icon: FaCottonBureau, title: 'Naturaleza' },
  { Icon: FaCocktail, title: 'Acepta reservas' },
]

export const LocalsButtonList = () => {
  return (
    <ContainerList>
      <ul>
        {buttons.map((el, i) => (
          <li key={i}>
            <Button m="10px 0" style={{ fontSize: 20 }}>
              <el.Icon size={50} style={{ marginRight: '20px' }} />
              <b>{el.title}</b>
            </Button>
          </li>
        ))}
      </ul>
    </ContainerList>
  )
}
