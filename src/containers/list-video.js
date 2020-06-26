import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {

       const {movieList} = props;
    // console.log('===========');
    // console.log('',movieList);
    // console.log("==============");

    // const movies =['film1','film2','film3','film4','film5'];

    return (
         
        <div>
             <ul>
                 {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie} callback={receiveCall}/>
                     })
                 }

                
             </ul>

        </div>

    );

    function receiveCall(movie){
     
        props.callback(movie);

        
    }

}
export default VideoList;