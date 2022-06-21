<template>
    <main id="main">
      <subNav></subNav>
      <bugoList/>
    </main>
</template>
<script>
import subNav from '../subDefault/subNav.vue'
import bugoList from './bugoItemList.vue'

export default {
  name: 'BugoSub',
  components: {
    subNav,
    bugoList,
  },
}
</script>

<style lang="scss">
  #main{
    // flex
    display: flex;
    flex-direction: column;
    align-content: center;
  }
</style>