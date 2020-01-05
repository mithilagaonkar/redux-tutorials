import React from 'react';

import { connect } from 'react-redux';
import { FetchPostsAndUsers } from '../actions';
import UserHeader from './userHeader';
class PostList extends React.Component{
    componentDidMount(){
        this.props.FetchPostsAndUsers();

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
                </div>
        )

        });
    }
    render(){
       
    return <div className="ui relaxed divided list">{this.renderList()}</div>
    }

}

const mapStateToProps = (state) =>{
    return {posts:state.posts};

}

export default connect(mapStateToProps,{FetchPostsAndUsers})(PostList);