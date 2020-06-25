import React from 'react'

const BASE_URL = "https://www.youtube.com/embed/";

//composant fonctionnel
const Video = ({videoId}) => {

    return (
          <div>

              <iframe src={`${BASE_URL}${videoId}`} />
          </div>

    )
}

export default Video;