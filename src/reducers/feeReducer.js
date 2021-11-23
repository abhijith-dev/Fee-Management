const intialState = []
const SYNC = 'SYNC'

const FeeReducer = (state=intialState,action)=>{
    switch(action.type){
        case SYNC :
            let syncData = action.payload
            return {
            ...state,
            data :syncData
            }
        default :
            return state
    }
    
}

export default FeeReducer