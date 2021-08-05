
import React from 'react';
import SearchBar from './searchbar';
import youtube from '../apis/youtube';
import VideoList from './videoList';
import VideoDetail from './videoDetail';

class App extends React.Component{

    state ={videos :[] , selectedVideo : null}
    onTermSubmit =async(term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });
        this.setState({videos: response.data.items , selectedVideo:null});
    };
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video});
    }
    render(){
        return(
            <div className ="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <h1> I have {this.state.videos.length} videos</h1>
                <VideoDetail video ={this.state.selectedVideo} />
                 <VideoList onVideoSelect ={this.onVideoSelect} videos ={this.state.videos} /> 
            </div>
        )
    }
}
export default App;