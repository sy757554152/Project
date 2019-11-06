import Mock from 'mockjs'

let Random = Mock.Random;
let productsData=()=>{
    let products=[];
    for(let i=0;i<10;i++){
        let product={
            name:Random.ctitle(10,20),
            img:Random.dataImage('250x250','商城'+Random.integer(1,100)),
            id:Random.integer(1000,10000),
            owner:Random.cname(),
            price:Random.integer(5000,30000)
        };
        products.push(product);
    }
    return products;
}
Mock.mock('http://www.shop.com/getlist',productsData);

let RandomSwipe = Mock.Random;
let productsDataSwipe=()=>{
    let products=[];
    for(let i=0;i<3;i++){
        let product={
            name:RandomSwipe.ctitle(10,20),
            img:RandomSwipe.dataImage('234x60','商城'+Random.integer(1,3)),
            id:RandomSwipe.integer(1000,10000),
            owner:RandomSwipe.cname(),
            price:RandomSwipe.integer(5000,30000)
        };
        products.push(product);
    }
    return products;
}
Mock.mock('http://www.shop.com/getSwipe',productsDataSwipe);

let RandomHot = Mock.Random;
let productsDataHot=()=>{
    let products=[];
    for(let i=0;i<12;i++){
        let product={
            name:RandomHot.ctitle(10,20),
            img:RandomHot.dataImage('234x60','商城'+Random.integer(1,12)),
            id:RandomHot.integer(1000,10000),
            owner:RandomHot.cname(),
            price:RandomHot.integer(5000,30000)
        };
        products.push(product);
    }
    return products;
}
Mock.mock('http://www.shop.com/getHotSwiper',productsDataHot);