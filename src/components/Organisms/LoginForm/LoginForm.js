import './LoginForm.css'

export const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className="modal-content">
      <div className="container">
        <label htmlFor="username">
          <b>Username</b>
        </label>
        <input
          id="username"
          type="text"
          className="input"
          placeholder="Enter Username"
          name="username"
        />
        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          id="password"
          className="input"
          type="password"
          placeholder="Enter Password"
          name="psw"
        />
        <button className="button" type="submit" onClick={handleSubmit}>
          Login
        </button>
        <label>
          <input type="checkbox" name="remember" /> Remember me
        </label>
      </div>
    </form>
  )
}
