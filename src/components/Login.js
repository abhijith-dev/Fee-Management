import React from 'react'
import admins from '../assets/admin.json'
import {useDispatch} from 'react-redux'
import {login} from '../actions'
import '../stylesheets/login.css'
import Header from '../components/Header'

export default function Login() {
    let intialState = {
        pin: '',
        password: ''
    }

    const [pin, setPin] = React.useState(intialState.pin)
    const [password, setPassword] = React.useState(intialState.password)
    const [error, setError] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState(null)
    const dispatch = useDispatch()

    const pinHandler = (event) => setPin(event.target.value)

    const passwordHandler = (event) => setPassword(event.target.value)

    const clearHandler = () => {
        setPin('')
        setPassword('')
        setError(false)
        setErrorMessage(null)
    }    
    const storeFlagAndRidrect = async (pin) => {
        await dispatch(login(pin))
        clearHandler()
        return
    }

    const invalidLoginCreds = () => {
        setError(true)
        setErrorMessage('*invalid PIN/Password')
    }

    const Authorization = async (event) => {
        event.preventDefault()
        let authStatus = admins.some(admin => admin.pin === pin && admin.pass === password)
        if (authStatus) await storeFlagAndRidrect(pin)
        else invalidLoginCreds()
    }

    return (
        <>
        <Header />
        <div className="login-container" >
            <form onSubmit={Authorization}>
                <h2>Login</h2>
                <input type="number" value={pin} onChange={pinHandler} placeholder="PIN" />
                <input type="password" value={password} onChange={passwordHandler} placeholder="password" />
                <button type="submit">Login</button>
                {
                error ? (
                    <>
                        <div className="error-container">
                            <p>{errorMessage}</p>
                        </div>
                    </>) : null
            }
            </form>
            
        </div>
        </>
    )
}
