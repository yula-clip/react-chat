import { 
  SIGNUP_REQUEST, SIGNUP_FAILURE, SIGNUP_SUCCESS,
  LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
  LOGOUT_REQUEST, LOGOUT_FAILURE, LOGOUT_SUCCESS,
} from '../constants'

export function signup(username, password) {
  return(dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

     return fetch('http://localhost:8000/v1/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        })
      })
      .then(response =>  response.json())
      .then(json => {
        if(json.success){
          return json;
        }
        throw new Error(json.massage);
      })
      .then( json => {
        if(!json.token){
          throw new Error('Token has not been provded!');
        }
         
        localStorage.setItem('token', json.token);

        dispatch({
          type: SIGNUP_SUCCESS,
          payload: json,
          })
      })
      .catch(reason => dispatch({
        type: SIGNUP_FAILURE,
        payload: reason,
      }));
  };
}

export function login(username, password) {
  return(dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });
    return fetch('http://localhost:8000/v1/login', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    .then(response =>  response.json())
    .then(json => {
      if(json.success){
        return json;
      }
      throw new Error(json.massage);
    })
    .then(json => {
      if(!json.token){
        throw new Error('Token has not been provded!');
      }
       
      localStorage.setItem('token', json.token);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: json,
      })
  })
    .catch(reason => dispatch({
      type: LOGIN_FAILURE,
      payload: reason,
    }));
  }; 
}

export function logout() {
  return(dispatch) => {
    dispatch({
      type: LOGOUT_REQUEST,
    });
  };  
}
