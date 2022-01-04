import { shallowMount } from "@vue/test-utils"
import WorldMap from "@/components/WorldMap/WorldMap.vue"
import panZoom from 'vue-panzoom'
import Vue from "vue"

describe('WorldMap.vue', () => {
  Vue.component("panZoom",panZoom)
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(WorldMap)
    expect(wrapper).toBeTruthy()
  })
})
