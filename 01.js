let array = [];

let ask = +prompt("Bạn muốn trả bao nhiêu cuốn sách: ");

for(let i = 0 ; i <= ask ; i++){
let bookName = prompt("Nhập tên sách thứ: " + ( i + 1 ));
    array.push(bookName);
}
console.log("Tổng số danh sách được trả: " + array.length);
console.log("Danh sách đã trả: ");

for(let j = 1 ; j <= 3 ; j++){
    console.log(`${j}array`);
}
