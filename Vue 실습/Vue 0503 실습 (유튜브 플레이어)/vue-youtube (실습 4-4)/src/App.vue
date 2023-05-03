<template>
  <div id="app">
    <div id="container">
      <div class="d-flex justify-content-center">
        <h1 class="mt-3">SSAFY TUBE</h1>

      </div>
      <div class="mt-3" v-if="isSelectedVideo">
        <div class="ratio ratio-16x9">
          <iframe :src="videoSrc" frameborder="0"></iframe>
        </div>
        <div>
          <h4>{{videoTitle}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import _ from "lodash"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const URL = "https://www.googleapis.com/youtube/v3/search"
const API_KEY = "AIzaSyBh2a2SfPUy1Fs2qJfdtaZZgQkBfbhAEWM"

export default {
  name: 'App',
  
  data : function() {
    return {
      videos : [],
      selectedVideo: {},
    }
  },
  computed : {
    videoSrc() {
      return `http://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
    },
    videoTitle() {
      return _.unescape(this.selectedVideo.snippet.title)
    },
    isSelectedVideo() {
      if (this.selectedVideo) {
        return true
      }
      else {
        return false
      }
    }
  },
  created() {
    axios.get(URL, {
      params: {
        key : API_KEY,
        type : 'video',
        part : 'snippet',
        q : '코딩노래',
        
      }
    })
    .then((response) => {
        console.log(response)
        this.videos = response.data.items
        this.selectedVideo = this.videos[0]
    })
    
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>