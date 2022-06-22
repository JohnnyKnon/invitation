<template>
    <main id="main">
        <header class="request-header"><h1>모바일 감사장<br/><span class="small">(Mobile Thanks Cards)</span></h1></header>
        <!-- UserInfo -->
        <userInfoForm/>
        <!-- Preview -->
        <ThanksDefault/>
    </main>
</template>
<script>

import userInfoForm from "../userInfoForm.vue"
import ThanksDefault from "./thanksDefaultForm.vue"

export default {
  name: 'ThanksRequestWord',
  components: {
    userInfoForm,
    ThanksDefault,
  },
}
</script>

<style lang="scss">
  #main{
    // flex
    display: flex;
    flex-direction: column;
    align-content: center;
    gap: 20px;

    // header
    .request-header{
      // text
      text-align: center;
      // padding
      padding: 80px 0 20px 0;
      //h1
      h1{
        // font
        font-size: 2rem;
        color: var(--dark-sub-color);
        .small{
          // font
          font-weight: var(--weight-regular);
          font-size: 1.4rem;
        }
      }
    }
  }
</style>