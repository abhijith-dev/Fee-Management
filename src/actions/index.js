export const login = (pin)=>{
    return {
        type : 'LOGIN',
        payload : pin
    }
}

export const logout = () =>{
    return {
        type :'LOGOUT',
        payload :null
    }
}

export const updateFireBaseData =(data) =>{
    return {
        type : 'SYNC',
        payload  : data
    }
}