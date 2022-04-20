import React from 'react';
import Search from './Search';
import "./styles.css"
import VideoList from './VideoList';
import Videoplayer from './VideoPlayer';

const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
const YOUTUBE_API_KEY = 'AIzaSyB46htx7KBrmUMPLevY5-t8ChM7sRI7pCU';

export default class App extends React.Component{   
    state = {
        videoMetaInfo: [],
        selectedVideoId: null,
        meta2: []
    }
    onVideoSelected = videoId => {
        this.setState({
            selectedVideoId:videoId
        })
    }
    async componentDidMount(){
        const response = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${this.props.playListId}&key=${YOUTUBE_API_KEY}`)
        const data = await response.json()


        const response2 = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=contentDetails&playlistId=${this.props.playListId}&key=${YOUTUBE_API_KEY}`)
        const data2 = await response2.json()
        this.setState({
            videoMetaInfo: data.items,
            selectedVideoId: data2.items[0].contentDetails.videoId, 
            meta2: data2.items      
        });
        console.log(this.state)
    };
    render(){
        return(
            <div className='App'>
                <Search onSearch={this.onSearch}/>
                <VideoList onVideoSelected={this.onVideoSelected} data = {this.state.videoMetaInfo} meta2 = {this.state.meta2}/>
                <Videoplayer videoId={this.state.selectedVideoId}/>
            </div>
        )
    }
}