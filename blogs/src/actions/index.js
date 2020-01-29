//import store  from '../reducers';
import _ from 'lodash';
import JsonPlaceholder from '../apis/jsonPlaceholder';


// We use the lodash function named memoize because this particular function allows you to make the request only once ,
// That is if the same key is passed to the function ..Based on the key , the network request is made only once .

//Introducing a new action creator that is common for both ..The post as well as the users.The second parameter for an action creator is the getState of the store .
export const FetchPostsAndUsers = () => async (dispatch,getState) =>{
    dispatch({type:'POST_AND_USER_LOADING', payload: true})
    await dispatch(FetchPost());
    const ids =_.uniq(_.map(getState().posts,'userId'));
    ids.forEach(id=>dispatch(FetchUser(id)));
    dispatch({type:'POST_AND_USER_LOADING', payload: false})
}

export const deletePostsAndUsers = (postId) => async (dispatch,getState) =>{
    dispatch({type:'POST_AND_USER_DELETING', payload: postId})
    
}

export const updatePosts = (posts) => (dispatch,getState)=>{
    dispatch({type:'UPDATE_POSTS',payload:posts});
};

//This type of action creators has an arrow function inside another arrow function with dispatch as its args for thunk.
//So basically , this action creator gives a call to the other two action creators . and than those a ction creators 
// performs the request and dispatches it . Here we have given await to make sure it waits till the resonse gets returned .

///We can also refactor the above code by using chain function of the lodash.

 
export const FetchPost = () => async function(dispatch){
    const response = await JsonPlaceholder.get('/posts');
    //Whenever we use the thunk , we dont have to return the obj separately , since we than call the dispatcher manually .

    // return {
    //     type:'FETCH_POST',
    //     payload:response,
    // }
    dispatch({type:'FETCH_POST',payload:response.data});
    };
//We will have to remove the async and await function becuase due to this , the es5 treats them as some other parameters areturned .
//So it think that intead of the action creator returning back the action type / action it returns the action request .
//SInce internally if you do it in babel you see from es to es5 it returns somthg else.


//Without memoize
export const FetchUser = id => async dispatch => {
            const response = await JsonPlaceholder.get(`/users/${id}`);
            dispatch({type:'FETCH_USER',payload:response.data});
        };



//Use memoize function for the below function so that equest goes just once .
//export const FetchUser = (id) => dispatch => _fetchUser(id,dispatch);

// //Now here , we are defining the memoize function only for the inner function by calling the inner function separatelu .
// //Reason being , the outer function though every time it gets called gets craeted in the new memory , even than it gives a call to 
// // to he inside function . This inside function is stored at one single address always. So it maintains memoization .

// const _fetchUser = _.memoize(async (id,dispatch)=>{
//     const response = await JsonPlaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response.data});
// });
//We cannot use the memoize on the outside function because as per the memoize , it always returns the outer function .
//But its the outer function that makes a call to the network ..So the outer function returns the same response always
//But the inside function is responsible for making the network request ..So lets memoize inner function .

// export const FetchUser = _.memoize(function (id){
// return  async function(dispatch){
//     const response = await JsonPlaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response.data});
// };
// });


//Even still the problem continues because every time our action creator is called , we tend to create a new instance 
//of this function in memory . So memoize doesnt work .

// export const FetchUser = function (id){
//     return  _.memoize(async function(dispatch){
//         const response = await JsonPlaceholder.get(`/users/${id}`);
//         dispatch({type:'FETCH_USER',payload:response.data});
//     });
//     };