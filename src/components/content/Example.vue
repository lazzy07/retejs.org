<template lang="pug">
BaseExample
  iframe(
    :src="src"
    title="Rete.js v2"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  )
</template>

<script lang="ts">
import qs from 'qs'
import { computed } from 'vue'

import BaseExample from '../shared/BaseExample.vue'

export default {
  props: {
    id: String,
    module: String
  },
  setup(props) {
    const params = {
      autoresize: 1,
      hidedevtools: 1,
      fontsize: 11,
      hidenavigation: 1,
      module: props.module,
      theme: 'light',
      view: process.client && window.innerWidth <= 768
        ? 'preview'
        : 'split',
      verticallayout: 1
    }

    return {
      src: computed(() => `https://codesandbox.io/embed/${props.id}?${qs.stringify(params)}`)
    }
  },
  components: {
    BaseExample
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/styles/media.sass'

iframe
  width: 100%
  height: 100%
  border: none
  text-align: left
  border: 2px solid #f3f3f3
  border-radius: 0.7em
  +phone
    width: 100%
    height: 80vh

</style>
