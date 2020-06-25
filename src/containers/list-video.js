import React from 'react'
import VideoListItem from '../components/video-list-item'
const VideoList = ({movieList}) => {

    // console.log('===========');
    // console.log('',movieList);
    // console.log("==============");

    // const movies =['film1','film2','film3','film4','film5'];

    return (
         
        <div>
             <ul>
                 {
                    movieList.map(movie => {
                        return <VideoListItem key={movie.id} movie={movie}/>
                     })
                 }

                
             </ul>

        </div>

    );

}
export default VideoList;