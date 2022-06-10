<template>
    <section id="category">
        <!-- images wrapper -->
        <atropos class="my-atropos">
            <figure class="category-images-wrapper">
                <!-- wedding image one -->
                <img class="wedding-img-one" src="../../../public/images/wedding/wedding-image02.png" alt="웨딩이미지1"/>
                <!-- wedding image two --> 
                <atropos class="my-atropos"> 
                    <img class="wedding-img-two" data-atropos-offset="-5"  src="../../../public/images/wedding/wedding-img01.png" alt="웨딩이미지2"/>
                </atropos>
            </figure>
       </atropos>
       <section class="category-contents">
           <header id="category-header"><h1>Category</h1></header>
           <div class="category-contents-item-wrapper">
           </div>
       </section>
    </section>
</template>

<script>

  // import Atropos component
  import Atropos from 'atropos/vue';

export default {
  name: 'mainCategory',
  components: {
      Atropos,
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

@mixin ResponsiveMobile {
  @media screen and (max-width: 767px) {
    @content;
  }
}

@mixin ResponsiveSmallTablet {
  @media screen and (max-width: 820px) {
    @content;
  }
}

@mixin ResponsiveTablet {
  @media screen and (max-width: 912px) {
    @content;
  }
}

@for $i from 1 through 4 {
    .slidesItems:nth-child(#{$i}) {
      animation-delay: $i * 300ms;
    }
}
    #category{
        // max-size
        max-width: 1200px;
        // size
        width: 90%;
        // margin
        margin: 0 auto;
        // overflow
        overflow-x:hidden;
        // images
        .category-images-wrapper{
            // position
            position: relative;
            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
            .my-atropos{
                height: 550px;
                @include ResponsiveMobile() {
                    height: 420px;
                }
            }
            // Image
            .wedding-img-one{
              // position
            position: absolute;
            // size
            width: 280px;
            @include ResponsiveMobile() {
                // size
                width: 200px;
            }
            }
            .wedding-img-two{
                // position
                position: relative;
                top: 100px;
                // size
                width: 650px;
            @include ResponsiveMobile() {
                // size
                width: 450px;
            }
            }
        }
        
        .atropos-shadow{
            background: transparent;
        }
    }

</style>