<template lang="pug">
.docs
  FetchNav(v-slot="{ navigation }" target="docs")
    NavMenu(@open="drawer = true")
      template(#title) {{ $t('documentation') }}
      Nav(:list="navigation.children" :active="$route.path")
    .content.markdown
      RenderContent(:path="contentPath" :share="share")
        template(#not-found)
          NotFound(:standalone="false")
    Drawer(v-model="drawer")
      .drawer-content
        Nav(:list="navigation.children" :active="$route.path")
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import FetchNav from '@/components/FetchNav.vue'
import Nav from '@/components/Nav.vue'
import RenderContent from '@/components/RenderContent.vue'
import Drawer from '@/components/shared/Drawer.vue'
import NavMenu from '@/components/shared/NavMenu.vue'
import NotFound from '@/components/shared/NotFound.vue'

import { useContentPath } from '../../shared/content'
import { useDrawer } from '../../shared/drawer'

export default defineComponent({
  setup() {
    const contentPath = useContentPath()
    const drawer = useDrawer()

    return {
      contentPath,
      drawer: drawer.active
    }
  },
  methods: {
    share(data) {
      return `${data.title}, ${this.$t('share.docs')}`
    }
  },
  components: {
    Drawer,
    Nav,
    FetchNav,
    NavMenu,
    RenderContent,
    NotFound
  }
})
</script>

<style lang="sass" scoped>
@import '@/assets/styles/media.sass'
$offset: 60px

.docs
  display: flex
  text-align: left
  .content
    flex: 1
    position: relative
    padding: 2em
    // hide scroll for articles with editors without overflow
    overflow: hidden
    +phone
      padding: 5vw
</style>

<style lang="sass">
@import '@/assets/styles/media.sass'

.docs .content
  img
    margin: 1em 0
    max-width: 100%

.drawer-content
  padding-bottom: 4em
</style>
