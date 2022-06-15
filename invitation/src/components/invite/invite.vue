<template>
    <main id="main">
      <subNav></subNav>
    </main>
</template>
<script>
import subNav from '../subDefault/subNav.vue'

export default {
  name: 'InviteSub',
  components: {
    subNav
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