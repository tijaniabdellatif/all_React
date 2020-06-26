import React from 'react'
import { reduce } from 'lodash';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const hStyle = {

         paddingTop: 40,
         textAlign: "center"

};

const LiStyle = {

        cursor : 'pointer'
}

const VideoListItem = (props) =>{
     const {movie} = props;
    return <li className = "list-group-item" style={LiStyle} onClick={handlerClick}>
            <div className="media">
                     <div className="media-left">
                  <img className="media-object img-rounded" height="100px" width="100px" src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
                     </div>

            
            <div className="media-body">

                      <h5 className="title_list_item" style={hStyle}>{movie.original_title}</h5> 
            </div>

            </div>
         
        
        </li>
      

        function handlerClick(){
             
                props.callback(movie);


        }
}

export default VideoListItem;
