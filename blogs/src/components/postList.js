import React from 'react';

import { connect } from 'react-redux';
import { FetchPostsAndUsers , deletePostsAndUsers ,updatePosts } from '../actions';

import UserHeader from './userHeader';
class PostList extends React.Component{
    componentDidMount(){
        this.props.FetchPostsAndUsers();

    }

    deletePost=(postId)=>{
        
        this.props.deletePostsAndUsers(postId);
    }

    updatePost= ()=>{
        debugger;
        const obj = {title:'Mithila',id:1,UserId:7};
        this.props.updatePosts(obj);
    }

    renderList(){
        
        return this.props.posts.map(post => {
            return(
                
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
            <p>{post.description}</p>
                        </div>
                        <UserHeader userId = {post.userId}/>
                    </div>
                    <button onClick={() => this.deletePost(post.id)}>Delete</button>
                    <button onClick={()=>this.updatePost()}>Update</button>
                </div>
                

             
               
        )

        });
    }
    render(){  
        return <div className="ui relaxed divided list">{!this.props.uiIsLoading ? this.renderList() : <h1>IS LOADING</h1>}</div>
    }

}

const mapStateToProps = (state) =>{
    return {
        posts:state.posts.postList,
        uiIsLoading: state.users.isLoading
    };

}

export default connect(mapStateToProps,{FetchPostsAndUsers,deletePostsAndUsers,updatePosts})(PostList);