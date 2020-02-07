import { fetchQuery } from './request-manager'
import { configuration } from '../config/config'

class Authentication {
  authToken () {
    return fetchQuery(
      configuration.API_URL + 'option=token&api=oauth2',
      'POST',
      {
        grant_type: 'client_credentials',
        client_id: 'a.ricardoguzman@gmail.com',
        client_secret: 201010425
      }
    )
  }
}

export const auth = new Authentication()
