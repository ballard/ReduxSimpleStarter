/**
 * Created by ivanlazarev on 06.10.16.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAInLlLqW1mFGCLlt3olT3ar3Rwi97b0-Y';

// create a new component producing some html
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfBoards')
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => { // equals to function(data)
            this.setState({
                videos : videos,
                selectedVideo : videos[0]
            }); //equals to this.setState({ videos: videos}) if key and value has the same name
            //console.log(this.state);
        });
    }

    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange = {videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

//put generated html on page
ReactDOM.render(<App />, document.querySelector('.container'));