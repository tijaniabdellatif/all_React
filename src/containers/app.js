import React, { Component } from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './list-video'
import axios from 'axios'
import VideoDetail from '../components/video-details'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=6f001d57bda6a9d2051b0740c79b1a9b"

class App extends Component {

    constructor(props){
          super(props)
          this.state = {movieList:{},currentMovie:{}}
    }

    componentWillMount(){

        this.initMovies();
    }

    initMovies(){
        axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function (response) {

            this.setState({
                movieList: response.data.results.slice(1,6),
                currentMovie: response.data.results[1]
            },function(){

                this.applyVideotoCurrentMovie(); //state est mise a jour dans une callback function

            });
            // console.log({
            //     movieList: response.data.results
            // });


        }.bind(this));
    }

    applyVideotoCurrentMovie(){
            
   
               
         axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function (response) {
               
            // console.log('================');
            // console.log('',response);
            // console.log("==============");
            const YoutubeKey = response.data.videos.results[0].key;
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = YoutubeKey;
            this.setState({currentMovie: newCurrentMovieState});
              console.log('================');
              console.log('',newCurrentMovieState);
             console.log("==============");
            


         }.bind(this));


    }

    render(){

        const renderVideoList = () =>{

            if(this.state.movieList.length >= 5){

                return <VideoList movieList = {this.state.movieList}/>
            }
        }

        return <div>
            <SearchBar/>
            {renderVideoList()}
            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
            </div>
    }
 
}

export default App;