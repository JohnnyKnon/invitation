<template>
    <main id="main">
      <subNav></subNav>
        <ThanksList/>
    </main>
</template>
<script>
import subNav from '../subDefault/subNav.vue'
import ThanksList from './thanksItemList.vue'

export default {
  name: 'ThanksSub',
  components: {
    subNav,
    ThanksList,
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