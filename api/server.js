const express = require('express')
const cors = require('cors');
//const jwt = require('express-jwt')
const jwks = require('jwks-rsa')
const axios = require('axios')
//var jwt = require('express-jwt');
const { expressjwt: expressJwt } = require('express-jwt');
const app = express()
app.use(cors())

const verifyJwt =  expressJwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-u1y8vownxrf1p3rb.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'unique identifier',
  issuer: 'https://dev-u1y8vownxrf1p3rb.us.auth0.com/',
  algorithms: ['RS256']
}).unless({path: ['/']})

app.use(verifyJwt)


// var corsOptions = {
//   origin: "http://localhost:3000"
// };

app.get('/', (req, res) => {
  res.send("hi")
})

app.get('/protected', async (req, res) => {
  try {
    //res.send(req.user)

  const accessToken = req.headers.authorization.split(' ')[1]
  const response = await axios.get('https://dev-u1y8vownxrf1p3rb.us.auth0.com/userinfo' , {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  })
  const userifno = response.data
  console.log(userifno)
  res.send(userifno)
  res.send("protected")
  } catch (error) {
    console.log(error)
  }
  
  
})

// app.get('/' ,(req,res) => {
//   res.send("hi")
// })
app.listen(4000, () => {
  console.log(`Server is running on port 4000.`);
});