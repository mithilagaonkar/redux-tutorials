

//export default () => 123;

//So instead of writing the if statement , it is advisable to use switch statements. So by default let it return the original state array/obj .So

const initialState = {
    postList: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST':
            return {
                ...state,
                postList: action.payload
            };
        case 'POST_AND_USER_DELETING': {
            const filteredPosts = state.postList.filter(post => post.id !== action.payload);

            return { ...state, postList: filteredPosts };
        }
        case 'UPDATE_POSTS': {
            const updatedPosts = state.postList.map(post => {
                if (post.id === action.payload.id) {
                    post = action.payload;
                }
                return post;
            });
            return { ...state, postList: updatedPosts };
        }
        case 'ADD_POST':{
            const newPostList = [...state.postList,action.payload]
            return {...state,postList: newPostList};
        }

        default:
            return state;
    }

}