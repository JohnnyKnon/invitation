<template>
    <nav id="subNav">
        <ul class="subNav-items-wrapper">
            <li class="subNav-items">
                <!-- top category -->
                <a href="#" class="top-item">모바일 초대장</a>
        
            </li>
            <li class="subNav-items">
                <!-- top category -->
                <a href="#" class="top-item">모바일 감사장</a>
            </li>
            <li class="subNav-items">
                <!-- top category -->
                <a href="#" class="top-item">모바일 부고장</a>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  name: 'subNav',
  components: {},
}
</script>

<style lang="scss">

@mixin ResponsiveMobile {
    @media screen and (max-width: 768px) {
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

// SubNav
#subNav{
    // font
    font-family: var(--font-kr);
    // size
    width: 100%;
    height: 100%;
    // margin
    margin-top: 115px;
    // background
    background-color: var(--dark-sub-color);
    // flex
    display: flex;
    justify-content: center;
    // items wrapper
    .subNav-items-wrapper{
        // size
        width: 80%;
        // padding
        padding: 0;
        // flex
        display: flex;
        justify-content: space-around;
        align-items: center;
         @include ResponsiveMobile() {
             // size
            width: 80%;
            // flex
             flex-direction: column;
             align-items: flex-start;
             gap: 25px;
         }
        .subNav-items{
            // position
            position: relative;
            .top-item{
                // font
                font-size: 1.1rem;
                color: #fff;
            }
            
        }
    }
}


</style>
