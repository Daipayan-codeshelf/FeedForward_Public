import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8002",
    issuerBaseURL: "https://daipayan-code-shelf.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck