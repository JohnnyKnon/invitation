<template>
    <section id="category">
        <!-- images wrapper -->
        <figure class="category-images-wrapper">
            <!-- wedding image one -->
            <img class="wedding-img-one" src="../../../public/images/wedding/wedding-image02.png" alt="웨딩이미지1"/>
            <!-- wedding image two --> 
             <img class="wedding-img-two"  src="../../../public/images/wedding/wedding-img01.png" alt="웨딩이미지2"/>
        </figure>
    </section>
</template>

<script>

export default {
  name: 'mainCategory',
  components: {

  },
  data(){
      return{

      }
  },
  methods:{

  }
}
</script>

<style lang="scss">
    #category{
        // max-size
        max-width: 1300px;
        // size
        width: 100%;
        // margin
        margin: 0 auto;
        // images
        .category-images-wrapper{
            // position
            position: relative;
            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .wedding-img-one{
            // size
            width: 280px;
        }
        .wedding-img-two{
            // size
            width: 300px;
        }
    }

</style>