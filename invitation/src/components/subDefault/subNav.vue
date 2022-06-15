<template>
    <nav id="subNav">
        <ul class="subNav-items-wrapper">
            <li class="subNav-items">
                <!-- top category -->
                <a href="#" class="top-item">모바일 초대장 <span class="more"><i class="fa-solid fa-angle-down"></i></span></a>
                <!-- bottom -->
                <ul class="bottom-items-wrapper">
                    <li class="bottom-item">
                        <a href="#">행사초대</a>
                    </li>
                    <li class="bottom-item">
                        <a href="#">청첩장</a>
                    </li>
                    <li class="bottom-item">
                            <a href="#">돌잔치</a>
                    </li>
                </ul>
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
                // more
                .more{
                    // display
                    display: none;
                    @include ResponsiveMobile() {
                        // display
                        display: inline-block;
                    }
                }
            }
            // bottom
            .bottom-items-wrapper{
                // text
                text-align: center;     
                // size
                width: 100%;
                // position
                position: absolute;
                top: 100%;
                left: 50%;
                // padding
                padding: 10px 0;
                // background
                background-color: var(--dark-grey-color);
                // transform
                transform: translateX(-50%) translateY(-20px);
                // opacity
                opacity: 0;
                // visible
                visibility: hidden;
                 // transition
                transition: all 250ms ease-in-out;
                 @include ResponsiveMobile() {
                        //  position
                        position: relative;
                        top: 10px;
                        left: 0;
                        // padding
                        padding: 0;
                        // background
                        background-color: transparent;
                        // flex
                        display: none;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        gap: 10px;
                        // opacity
                        opacity: 1;
                        // visible
                        visibility: visible;
                         // transform
                        transform: translateX(0) translateY(0);
                        
                 }
                // bottom item
                .bottom-item{
                    a{
                        // font
                        font-size: 0.9rem;
                        color: #fff;
                        @include ResponsiveMobile() {
                            // size
                            width: 100px;
                        }
                    }
                }
                @for $i from 1 through 2 {
                    .bottom-item:nth-child(#{$i}){
                        // size
                        width: 100%;
                        // padding
                        padding-bottom: 10px;
                        // border
                        border-bottom: 1px solid var(--light-grey-color);
                        @include ResponsiveMobile() {
                            // text
                            text-align: left;
                            // padding
                            padding-bottom: 0;

                        }
                    }
                }
                .bottom-item:nth-child(3){
                    @include ResponsiveMobile() {
                         // text
                        text-align: left;
                         // size
                        width: 100%;
                        // border
                        border-bottom: 1px solid var(--light-grey-color);
                    }
                }
                .bottom-item:nth-child(2),
                .bottom-item:nth-child(3)
                {
                    // padding
                    padding-top: 8px;
                    @include ResponsiveMobile() {
                         // padding
                        padding-top: 0;
                    }
                }
            }
            // bottom hover
            &:hover,
            &:focus{
                .bottom-items-wrapper{
                    // transform
                    transform: translateX(-50%) translateY(0);
                    // opacity
                    opacity: 1;
                    // visible
                    visibility: visible;
                    @include ResponsiveMobile() {
                        // display
                        display: flex;
                        // transform
                        transform: translateX(0) translateY(0);
                        // opacity
                        opacity: 1;
                        // visible
                        visibility: visible;
                    }
                
                }
            }
        }
    }
}


</style>
