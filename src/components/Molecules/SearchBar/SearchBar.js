import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Button from '../../Atoms/Button'
import SearchList from '../SearchList'
import CountryList from '../CountyList'
import { Container } from './styles'

export const SearchBar = () => {
  const [visible, setVisible] = useState([false, false])

  const handleClick = (id) =>
    setVisible(visible.map((val, i) => (i === id ? !val : val)))

  return (
    <Container>
      <div className="search-input">
        <button onClick={() => handleClick(0)}>
          <p>
            <b>Buscar:</b> Hamburgesas, pastelerias, hoteles
          </p>
        </button>
        {visible[0] && (
          <div className="options">
            <SearchList />
          </div>
        )}
      </div>
      <div className="county-input">
        <button onClick={() => handleClick(1)}>
          <p>
            <b>Ciudades:</b> Neiva, Pitalito, Garzón
          </p>
        </button>
        {visible[1] && (
          <div className="options">
            <CountryList />
          </div>
        )}
      </div>
      <Button isRed bigSize borderRadius="6px">
        <FaSearch color="white" size={20} />
      </Button>
    </Container>
  )
}
