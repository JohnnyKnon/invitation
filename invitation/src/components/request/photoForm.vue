<template>
    <section id="photo">
       <!-- header -->
        <header class="thanks-form-header">
            <h1>사진 등록</h1>
            <div class="choose">
              <span class="photoOn">
                
              </span>
              <span class="photoOff">
                
              </span>
            </div>
        </header>
        <form class="comment-contents">
            <p>메인 사진<span class="required">*</span></p>
            
        </form>
    </section>
</template>
<script>


export default {
  name: 'photoForm',
  components: {

  },
}
</script>

<style lang="scss">
 @mixin BoxStyle {
    // font
    font-family: var(--font-kr);
    // max-size
    max-width: 1200px;
    // size
    width: 90%;
    // padding
    padding: 40px 0;
    // margin
    margin: 0px auto;
    // background
    background-color: var(--light-grey-color);
    // flex
    display: flex;
    flex-direction: column;
    align-items: center;
}
#photo{
  @include BoxStyle();
}
</style>