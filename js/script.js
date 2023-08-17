const menu = document.querySelector('#menu');

const lists  = [
    'strawberry.jpg',
    'mango.jpg',
    'lime.jpg',
    'lemon.jpg',
    'fig.jpg',
    'apple.jpg',
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
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    menu.insertAdjacentHTML('beforeend', content);
}
// contentをmenuにHTML要素として表示させる。第一引数にHTML内の挿入位置、第二引数に挿入したい内容を書く。


// くりかえし構文forを変数letとあわせて出力
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}回目のあはよう！`);
// }

