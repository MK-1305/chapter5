const menu = document.querySelector('#menu');

// オブジェクトを指定する
// const strawberry = {
//     name: 'イチゴ',
//     img: 'strawberry.jpg',
//     price: 450,
// };

// console.log(strawberry.name);
// console.log(strawberry['img']);

const lists  = [
    {
        name: 'イチゴ',
        img: 'strawberry.jpg',
        price: 450,
    },
    {
        name: 'ライム',
        img: 'lime.jpg',
        price: '400',
    },
    {
        name: 'マンゴー',
        img: 'mango.jpg',
        price: '500',
    },
    {
        name:'レモン',
        img: 'lemon.jpg',
        price: '400',
    },
    {
        name: 'イチジク',
        img: 'fig.jpg',
        price: '500',
    },
    {
        name: 'リンゴ',
        img: 'apple.jpg',
        price:'400',
    },
];
// 

// const content = `<div><img src="images/${lists[0]}" alt=""></div>
// <div><img src="images/${lists[1]}" alt=""></div>
// <div><img src="images/${lists[2]}" alt=""></div>
// <div><img src="images/${lists[3]}" alt=""></div>
// <div><img src="images/${lists[4]}" alt=""></div>
// <div><img src="images/${lists[5]}" alt=""></div>
// `;
// 要素の数が変わっても良いようにlengthで要素の数を取得する
// console.log(lists.length);
// 上のコードをforの繰り返しでスッキリさせる
for(let i = 0; i < lists.length; i++){
    // const name = lists[i].name;
    // const img = lists[i].img;
    // const price = lists[i].price;
    // 分割代入で短くする
    const {name, img, price} = lists[i];

    const content = `<div><img src="images/${img}" alt=""><h2>${name}</h2><p>${price}円</p></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}
// contentをmenuにHTML要素として表示させる。第一引数にHTML内の挿入位置、第二引数に挿入したい内容を書く。


// くりかえし構文forを変数letとあわせて出力
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}回目のあはよう！`);
// }

