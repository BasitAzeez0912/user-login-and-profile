import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/userSlice'

const Login = () => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name && email) {
      // Perform login logic here
      console.log('Logging in with:', { name, email })
      dispatch(setUser({ name, email }))
    }
  }


  return (
    <div>
      Welcome Back, Please Login to Continue

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='py-1'>
            <label htmlFor="name">Full Name       </label>
            <input id="name" name="name" className="login" value={name} type="text" onChange={(e) => setName(e.target.value)} required placeholder="Enter your full name" />
          </div>
          <div className='py-1'>
            <label htmlFor="email">Email         </label>
            <input id="email" name="email" className="login" value={email} type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Enter your email" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login