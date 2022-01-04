<template>
  <div id="app">
    <h1>Please select a country on the map</h1>
    <div class="map-container"><WorldMap v-on:selectedCountryChanged="changeSelectedCountry"/></div>
    <h2>{{selectedCountryName}}</h2>
  </div>
</template>

<script>
import WorldMap from './components/WorldMap.vue'

export default {
  name: 'App',
  components: {
    WorldMap
  },
  data() {
    return {
      selectedCountryName: ""
    };
  },
  methods:{changeSelectedCountry(event){
    this.selectedCountryName = event
  }}
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
.map-container{
  margin: auto;
  overflow: hidden;
  width: 60vw;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;;
  border-radius: 8px;
}
</style>
