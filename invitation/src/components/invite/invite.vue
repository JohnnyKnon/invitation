<template>
    <main id="main">
      <subNav></subNav>
      <inviteList/>
    </main>
</template>
<script>
import subNav from '../subDefault/subNav.vue'
import inviteList from './inviteItemList.vue'

export default {
  name: 'InviteSub',
  components: {
    subNav,
    inviteList,
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