const ACTIONS = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT'
}
const intialState = {
    isLoggedIn: {
        status: sessionStorage.getItem('status'),
        pin: sessionStorage.getItem('pin')
    }
}

const LoginReducer = (state = intialState, action) => {
    switch (action.type) {
        case ACTIONS.LOGIN:
            let pin = action.payload
            sessionStorage.setItem('status',true)
            sessionStorage.setItem('pin',pin)
            return {
                ...state,
                isLoggedIn: {
                    status: true,
                    pin: pin
                }
            }
        case ACTIONS.LOGOUT:
            sessionStorage.clear()
            return {
                ...state,
                isLoggedIn: {
                    status: false,
                    pin: null
                }
            }

        default: return state

    }

}

export default LoginReducer