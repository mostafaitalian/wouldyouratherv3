import {ADD_USERS} from '../actions/users'
import {SAVE_QUESTION} from '../actions/questions'



export default function users(state={}, action){
    switch(action.type){
        case ADD_USERS:
            return {...state, ...action.users}
        case SAVE_QUESTION:
            return {...state, [action.question.author]:{...state[action.question.author],questions:state[action.question.author].questions.concat([action.question.id])}}
        default:
            return state    
    }
}
