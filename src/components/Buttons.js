const Button = ({ text, textColor, color, type, size }) => {
  return (
    <button type="button" class={`btn ${type} ${ color } ${ textColor } ${size}`}>{ text }</button>
  )
}

Button.defaultProps = {
  text: 'Default',
  color: 'bg-primary',
  textColor: 'text-white',
}

export default Button
