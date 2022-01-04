<template>
 <div>
  <panZoom>
    <CheckboxSvgMap @click="show" :map="World" v-model="selectedCountries" />
  </panZoom>
  </div>
</template>

<script>
import { CheckboxSvgMap } from "vue-svg-map";
import { World } from "@svg-maps/world";

export default {
  name: "WorldMap",
  components: {
    CheckboxSvgMap,
  },
  data() {
    return {
      World,
      selectedCountries: [],
      selectedCountryName: ""
    };
  },
  methods: {
    show: function (event) {
      if (this.selectedCountryName === event.target.getAttribute("name")) {
        this.selectedCountries = [];
        this.selectedCountryName = "";
      } else {
        this.selectedCountries = [event.target.id];
        this.selectedCountryName = event.target.getAttribute("name");
      }
      this.$emit('selectedCountryChanged',this.selectedCountryName)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="vue-svg-map/dist/index.css"></style>
<style scoped>
</style>
