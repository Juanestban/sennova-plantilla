import Button from '../../Atoms/Button'
import Logo from '../../../assets/img/logosennova.PNG'
import { Header, Figure } from './stlyes'

export const Navigation = () => {
  return (
    <Header>
      <div className="title-header">
        <Figure>
          <img src={Logo} alt="director-logo" />
        </Figure>
      </div>
      <nav>
        <ul>
          <li>
            <Button
              bigSize
              m="0 10px 0 0"
              borderColor="var(--border-button-color-default)"
            >
              Acceder
            </Button>
          </li>
          <li>
            <Button isRed bigSize>
              Registrarse
            </Button>
          </li>
        </ul>
      </nav>
    </Header>
  )
}
