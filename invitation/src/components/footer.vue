<template>
    <footer id="footer">
        <h1>Modern & Classic</h1>
        <p>대표 : 홍준표 | 대표번호: 070-0000-0000 </p>
        <p>사업자등록번호 : 000-00-00000 | 통신판매신고번호 : 제0000-경기성남-0000호</p>
        <p>주소: 경기도 성남시 분당구 판교로 700 분당테크노파크 E동 111호</p>
        <a href="#">개인정보취급방침</a>
        <span class="copy">© 2022 modern&classic . All rights reserved.</span>
    </footer>
</template>
<script>
export default {
    name: 'footerDefault',
    data(){
        return{}
    }
}
</script>

<style lang="scss">
    #footer{
        // padding
        padding-top: 50px;
        padding-bottom: 20px;   
        // background
        background-color: var(--light-grey-color);
        // flex
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            // font
            font-family: var(--font-eng);
            font-size: 1.3rem;
            color: var(--sub-color);
        }
        p{
            // font
            font-family: var(--font-kr);
            font-size: 0.8rem;
            // text
            line-height: 20px;
            text-align: center;
            // size
            width: 90%;
        }
        a{
            // font
            font-family: var(--font-kr);
            font-size: 0.8rem;
            color: var(--dark-sub-color);
            // margin
            margin: 13px 0;
             // border
                border-bottom: 1px solid var(--light-grey-color);
            &:hover{
                // border
                border-bottom: 1px solid var(--dark-sub-color);
            }
        }
        .copy{
            // font
            font-size: 0.7rem;
            // margin
            margin: 10px 0;
        }
    }
</style>