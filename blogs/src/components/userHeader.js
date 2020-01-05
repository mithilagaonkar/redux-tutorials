import React from 'react';
import { connect } from 'react-redux';
//import {FetchUser} from '../actions';

class UserHeader extends React.Component{
// componentDidMount(){
//     this.props.FetchUser(this.props.userId);

// }
render(){
    //console.log(this.props);
    const {user} = this.props;
//const user = this.props.users.find(user =>{return user.id === this.props.userId});//find is a jquery method
 if(!user){
          return null;
 }
return <div className="header">{user.name}</div>
};
}

const mapStateToProps = (state , ownprops) => {
// We can access the component props by simply saying ownprops ...Its accessible also to the mapStatetoprops .
//console.log(state);
   
   // return {users: state.users};
   return {user : state.users.find(user => user.id === ownprops.userId)};
}

export default connect(mapStateToProps)(UserHeader);