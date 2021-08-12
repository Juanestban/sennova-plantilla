import { useHistory } from 'react-router-dom'
import Button from '../../Atoms/Button'

const countries = ['Neiva', 'Pitalito', 'La Plata', 'Garzon']

export const CountryList = () => {
  const navigation = useHistory()

  const handleNavigation = () => navigation.push('/details')

  return (
    <ul>
      {countries.map((title, i) => (
        <li key={i}>
          <Button
            onClick={handleNavigation}
            style={{ justifyContent: 'flex-start' }}
          >
            {title}
          </Button>
        </li>
      ))}
    </ul>
  )
}
