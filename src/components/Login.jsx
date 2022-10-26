import React, { useEffect, useState, useContext } from 'react'
import { useRef } from 'react'
import AuthContext from './context/AuthProvider'
import axios from './api/axios'
const LOGIN_URL = '/'
const Login = () => {

  const { setAuth } = useContext(AuthContext)

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [sucess, setSucess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])


  const handleSubmit = async (e) => {
    // e.preventDefault()
    // console.log(user, pwd)
    // setPwd('')
    // setUser('')
    // setSucess(true)

    e.preventDefault()

    try {
      const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }))
      setUser('')
      setPwd('')
    } catch (error) {

    }
  }

  return (
    <>
      {
        sucess ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <a href="#">Go to Home</a>
            </p>
          </section>
        ) : (
          <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>sign in</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor='username'>username</label>
              <input
                type="text"
                id='username'
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required />
              <label htmlFor='password'>password</label>
              <input
                type="password"
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required />
              <button>Sign in</button>
            </form>
            <p>
              Need an Account?<br />
              <span className="line">
                <a href="#">Sign Up</a>
              </span>
            </p>
          </section>

        )
      }
    </>
  )
}

export default Login