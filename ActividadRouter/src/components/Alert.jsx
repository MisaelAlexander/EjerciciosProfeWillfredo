const Alert = ({ mensaje }) => {
  return (
    <div className="alert alert-dark" role="alert">
  {mensaje}
</div>
  )
}

export default Alert;