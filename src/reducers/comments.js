import { SAVE_COMMENT, FETCH_COMMENTS } from "../actions/types";

export default function (state=[], actions){
    switch(actions.type){
        case SAVE_COMMENT:
            return [...state, actions.payload]
        case FETCH_COMMENTS:
            const comments = actions.payload.data.map(comment => comment.name)
            return [...state, ...comments]
        default:
            return state;

    }

}