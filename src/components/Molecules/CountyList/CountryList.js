import Button from '../../Atoms/Button'

const countries = ['Neiva', 'Pitalito', 'La Plata', 'Garzon']

export const CountryList = () => {
  return (
    <ul>
      {countries.map((title, i) => (
        <li key={i}>
          <Button style={{ justifyContent: 'flex-start' }}>{title}</Button>
        </li>
      ))}
    </ul>
  )
}
