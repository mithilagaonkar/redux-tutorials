import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(song => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={()=>{debugger;console.log(this.props.selectSong(song));return this.props.selectSong(song)}}>SELECT</button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        debugger;
       // console.log(this.props);
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

//It is preferred to use mapStatetoProps by convention .Still we can use any other function name.
//This funct is fed to the connect . It should ideally return somthg . And the returned one than acts as the prop to our parent component .
const fetchMe = (me) => {
    debugger;
    //console.log(me.song.title);
    //console.log(me);
    return { songs: me.song };

}
export default connect(fetchMe,{selectSong:selectSong})(SongList);