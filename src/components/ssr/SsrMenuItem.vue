<template lang="pug">
NuxtLink.ivu-menu-item(
  :to="to"
  :class="{ 'ivu-menu-item-active': active }"
)
  slot
</template>

<script lang="ts">
export default {
  props: ['to', 'active']
}
</script>
