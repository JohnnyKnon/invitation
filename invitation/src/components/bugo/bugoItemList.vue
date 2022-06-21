<template>
    <section id="invite-list">
        <!-- Header -->
        <header class="invite-list-header">
            <h1>모바일 부고장<br/><span class="small">(Mobile Obituary Notice)</span></h1>
        </header>
        <!-- list -->
        <form id="list">
            <!-- main -->
            <section class="list-main">
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>
                <div class="list-item post">
                    <figure class="mb-iv"></figure>
                    <section class="list-item-info">
                        <h1 class="item-name"><a href="#">Default Name</a></h1>
                        <div class="category-price">
                            <span class="category">부고</span>
                            <h2 class="price">10,000원</h2>
                        </div>
                    </section>
                </div>         
            </section>
            <!-- page -->
            <footer class="page">
                <a href="#" class="prev"><i class="fas fa-angle-left"></i></a>
                <ul class="page-wrapper">
                    <li class="number"><a href="#">1</a></li>
                    <li class="number"><a href="#">2</a></li>
                    <li class="number"><a href="#">3</a></li>
                    <li class="number"><a href="#">4</a></li>
                    <li class="number"><a href="#">5</a></li>
                </ul>
                <a href="#" class="next"><i class="fas fa-angle-right"></i></a>
            </footer>
        </form>
    </section>
</template>
<script>


export default {
  name: 'InviteList',
  components: {

  },
}
</script>

<style lang="scss">
    #invite-list{
        // font
        font-family: var(--font-kr);
        // max-size
        max-width: 1300px;
        // size
        width: 100%;
        // margin
        margin: 0 auto;
        // flex
        display: flex;
        flex-direction: column;
        align-items: center;
        // header
        .invite-list-header{
            // text
            text-align: center;
            // padding
            padding: 40px 0;
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
        // form
        #list{
            // size
            width: 95%;
            // padding
            padding-bottom: 40px;
            // flex
            display: flex;
            flex-direction: column;
            align-items: center;
            .list-main{
                // size
                width: 100%;
                // padding
                padding: 0;
                // gird
                display: grid;
                align-content: center;
                grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
                .list-item {
                    // size
                    width: 340px;
                    // padding
                    padding-bottom: 50px;
                    // flex
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // grid
                    align-self: center;
                    justify-self: center;
                    
                    .mb-iv{
                        // size
                        width: 100%;
                        height: 340px;
                        // margin
                        margin: 0;
                        // background
                        background-color: var(--dark-sub-color);
                    }
                    .list-item-info{
                        // size
                        width: 100%;
                        .item-name{
                            // font
                            font-family: var(--font-eng);
                            font-weight: var(--weight-light);
                            font-size: 1.2rem;
                            a{
                                // font
                                color: var(--dark-main-color);
                            }
                        }
                        .category-price{
                            // flex
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            // category
                            .category{
                                // font
                                font-size: 0.8rem;
                                color: #fff;
                                // text
                                text-align: center;
                                // size
                                width: 55px;
                                // padding
                                padding: 5px 0;
                                // background
                                background-color: var(--dark-grey-color);
                                // border
                                border-radius: 20px
                            }
                            // price
                            .price{
                                // font
                                font-size: 1rem;
                                color: var(--dark-grey-color);
                            }
                        }
                    }
                }
            }
            // footer page number
            .page{
                a{
                    // font
                    color: #000;
                    // transition
                    transition: all 250ms ease-in-out;
                    &:hover{
                        // font
                        color: var( --sub-color);
                    }
                }
                // padding
                padding: 20px 0;
                // flex
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 30px;
                .page-wrapper{
                    // padding
                    padding: 0;
                    // flex
                    display: flex;
                    align-content: center;
                    gap: 20px;
                }

            }
        }
    }
</style>