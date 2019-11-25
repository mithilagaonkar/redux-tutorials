import React from 'react';
import { connect } from 'react-redux';

const SongDetails = (props) => {
   // console.log(props);
    if (!props.state) {
        return <div>Please select a song</div>;
    }
    return (
        <div>
            <h3>Details are:
        <p>{props.state.title}</p>
                <p>{props.state.duration}</p>
            </h3>
        </div>
    );
}

const mapStateToProops = (state) => {
    //console.log(state);
    return { state: state.selectedSong };
}

export default connect(mapStateToProops)(SongDetails);