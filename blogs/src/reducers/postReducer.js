

//export default () => 123;

//So instead of writing the if statement , it is advisable to use switch statements. So by default let it return the original state array/obj .So

export default (state=[],action) => {
    switch(action.type){
        case 'FETCH_POST' :
            return action.payload;
            default:
                return state;
    }

}