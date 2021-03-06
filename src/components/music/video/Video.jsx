import React, {useEffect} from 'react';
import VideoContainer from './Video-container';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
    selectMusicList,
    selectSearchEntry,
} from '../../../redux/music/music.selectors';
import { togglePlaylist } from '../../../redux/music/music.actions';


const Video = ({ musicList, searchEntry, togglePlaylist }) => {
    useEffect(()=>{
        togglePlaylist(false)
    },[togglePlaylist])

    const regex = new RegExp(searchEntry.toLowerCase());
    const musicCategory = musicList
        .filter(file => file.fileMetadata.customMetadata.category === 'video')
        .filter(file => regex.test(file.fileMetadata.name.toLowerCase()))

    return (
        <div className="relative w-full flex items-center justify-end">
            <div className="w-full">
                {
                    musicCategory.length === 0
                        ?
                        <div className="w-full flex items-center justify-center ">
                            <div className="w-auto rounded-2xl text-purple-500 shadow-lg text-lg px-6">No item found</div>
                        </div>
                        :
                        <VideoContainer musicCategory={musicCategory} />
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    musicList: selectMusicList,
    searchEntry: selectSearchEntry,
})

const mapDispatchToProps = dispatch => ({
    togglePlaylist: state => dispatch(togglePlaylist(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(Video);