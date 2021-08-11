import { Btn } from './styles'

export const Button = ({
  p,
  m,
  style,
  children,
  borderColor,
  borderRadius,
  isRed = false,
  bigSize = false,
  onClick,
}) => (
  <Btn
    p={p}
    m={m}
    style={style}
    isRed={isRed}
    borderColor={borderColor}
    borderRadius={borderRadius}
    bigSize={bigSize}
    onClick={onClick}
  >
    {children}
  </Btn>
)
