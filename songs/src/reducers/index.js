//Reducers
import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title:'kaho na pyar hain',duration:'3.20'},
        {title:'tumse pyar hain',duration:'1.20'},
        {title:'mujhe chodke',duration:'2.00'},
    ]
};

const selectedSongReducer = (selectedSong=null,action) =>{
    if (action.type === 'SONG_SELECTED'){
        selectedSong = action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    song : songsReducer,
    selectedSong : selectedSongReducer,
});

