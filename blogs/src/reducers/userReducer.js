// export default (state=[],action)=>{
//     switch(action.type){
//         case 'FETCH_USER' :
//             return [...state,action.payload];
//             default : 
//             return state;
//     }
// };

const initialState = {
    isLoading: true,
    userList: []
};

export default (state= initialState ,action)=>{
    switch(action.type){
        case 'POST_AND_USER_LOADING' :
            return {
                ...state,
                isLoading: action.payload
            };
        case 'FETCH_USER' :
            return {
                ...state,
                userList: [...state.userList , action.payload]
            };
            default : 
            return state;
    }
};