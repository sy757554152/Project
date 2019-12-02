const MOCKURL = "http://www.shop.com/";
const SERVERURL ="http://localhost:3000/";
const URL ={
    getVarietyItem:MOCKURL+"getlist",
    getSwipeItem:MOCKURL+"getSwipe",
    getHotSwiperItem:MOCKURL +"getHotSwiper",
    registUser:SERVERURL+'user/registUser',
    loginUser:SERVERURL+'user/loginUser',
    getProductsByType:SERVERURL+'product/getProductsByType',
    getTypes:SERVERURL+'type/getTypes',
    getDetail:SERVERURL+'product/getDetail'

};
export default URL;