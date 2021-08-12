import { useState } from 'react'
import Button from '../../Atoms/Button'
import Logo from '../../../assets/img/logosennova.PNG'
import { Header, Figure } from './stlyes'
import Portal from '../Portal'
import LoginForm from '../LoginForm'

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState([false, false])

  const handleVisibility = (id) =>
    setIsVisible(
      isVisible.map((prevState, i) => (i === id ? !prevState : prevState))
    )

  const handleClose = () => setIsVisible([false, false])

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
              onClick={() => handleVisibility(0)}
            >
              Acceder
            </Button>
          </li>
          <li>
            <Button isRed bigSize onClick={() => handleVisibility(1)}>
              Registrarse
            </Button>
          </li>
        </ul>
      </nav>
      <Portal
        titleModal="Iniciar sesión"
        isVisible={isVisible[0]}
        sizeModal="30%"
        onClose={handleClose}
      >
        <LoginForm />
      </Portal>
      <Portal
        titleModal="Registrarse"
        isVisible={isVisible[1]}
        sizeModal="30%"
        onClose={handleClose}
      />
    </Header>
  )
}
