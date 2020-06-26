import React, { Component } from 'react'
import SearchBar from '../components/search-bar'
import VideoList from './list-video'
import axios from 'axios'
import VideoDetail from '../components/video-details'
import Video from '../components/video'

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=6f001d57bda6a9d2051b0740c79b1a9b";
const SEARCH_URL = "search/movie?language=fr&include_adult=false";

const divStyle = {
 
    marginTop: 50,
    marginBottom: 30

};

const VideoDet = {

   backgroundColor:'#E0E0E0',
   marginTop:40

}


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
               
            console.log('=========RESPONSE=======');
            console.log('',response);
            console.log("==============");
            const YoutubeKey = response.data.videos.results[0].key;
            console.log(YoutubeKey);
            let newCurrentMovieState = this.state.currentMovie;
            newCurrentMovieState.videoId = YoutubeKey;
            this.setState({currentMovie: newCurrentMovieState});
              console.log('================');
              console.log('', newCurrentMovieState);
             console.log("==============");
            


         }.bind(this));


    }

    onClickListItem(movie) {

           this.setState({currentMovie:movie},function(){

                   this.applyVideotoCurrentMovie();
                   this.setRecommandation();
           });
    }

     setRecommandation() {
         axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(function (response) {
             this.setState({
                 movieList: response.data.results.slice(0,6)
             });
         }.bind(this));
     }

    onClickButton(searchText){

        // console.log('',searchText);

        if(searchText){
  axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response) {

             if(response.data && response.data.results[0]){
                  
                if(response.data.results[0].id != this.state.currentMovie.id){

                        this.setState({currentMovie:response.data.results[0]},function(){
                              
                            this.applyVideotoCurrentMovie();
                            this.setRecommandation();

                        });
                }

             }

  }.bind(this));
        }
    }

    render(){

        const renderVideoList = () =>{

            if(this.state.movieList.length >= 5){

                return <VideoList movieList = {this.state.movieList} callback={this.onClickListItem.bind(this)}/>
            }
        }

        return <div>
            <div className="search_bar" style={divStyle}>
            <SearchBar callback={this.onClickButton.bind(this)}/>
            </div>
            <div className="row">
                <diV className="col-md-8">
            <Video videoId={this.state.currentMovie.videoId}/>
            <div style={VideoDet}>
            <VideoDetail title={
                this.state.currentMovie.original_title
            }
            description = {
                this.state.currentMovie.overview
            }
            />
            </div>
            </diV>
             <diV  className="col-md-4">
            {renderVideoList()}
            </diV>
            </div>
            </div>
    }
 
}

export default App;