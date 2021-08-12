import {
  FaHamburger,
  FaCut,
  FaCamera,
  FaHeartbeat,
  FaChartPie,
} from 'react-icons/fa'
import { GrDebian } from 'react-icons/gr'
import Button from '../../Atoms/Button'

const searchEats = [
  { Icon: FaHamburger, title: 'Alimentos y bebidas' },
  { Icon: FaCut, title: 'Textil' },
  { Icon: FaCamera, title: 'Entretenimiento' },
  { Icon: FaHeartbeat, title: 'Salud' },
  { Icon: GrDebian, title: 'Artesanías' },
  { Icon: FaChartPie, title: 'Servicios empresariales' },
]

export const SearchList = () => {
  return (
    <ul>
      {searchEats.map((el, i) => (
        <li key={i}>
          <Button style={{ justifyContent: 'flex-start' }}>
            <el.Icon size={20} style={{ marginRight: 10 }} />
            {el.title}
          </Button>
        </li>
      ))}
    </ul>
  )
}
