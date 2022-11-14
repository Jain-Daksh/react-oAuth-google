import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
function LoginAuthO() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently } = useAuth0()

  function callApi() {
    axios.get("http://localhost:4000/").then(response => {
      console.log(response.data)
    }).catch(err => console.log(err))
  }

  async function callProtectedApi() {
    // axios.get("http://localhost:4000/protected")
    //   .then(response => {
    //     console.log(response.data)
    //   }).catch(err => console.log(err))

    try {
      const token = await getAccessTokenSilently()
      const response = await axios.get('http://localhost:4000/protected', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
    } catch (error) {
       console.log(error.message)
      
    }

  }



  return (
    <div>LoginAuthO
      <ul>
        <li>
          <button onClick={loginWithPopup}>
            login with popup
          </button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>
            login with redirect
          </button></li>
        <li>
          <button onClick={logout}>
            logout
          </button>
        </li>

      </ul>

      <ul>
        <button onClick={callApi}>call api</button>
        <button onClick={callProtectedApi}>protected call api</button>
      </ul>
      <h3>user is {isAuthenticated ? "logged in" : "not logged in"}</h3>
      {isAuthenticated && (
        <pre className='text-start'>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}

    </div>
  )
}

export default LoginAuthO