//Khai báo một mảng rỗng để lưu tên các cuốn sách bị trả muộn.

let array = [];
let ask;
let bookLate;
let newArray;
let dem = 0;
//Yêu cầu người dùng : "Hôm nay có bao nhiêu cuốn sách bị trả muộn? " (prompt - số nguyên dương)

do{
ask = +prompt("Hôm nay có bao nhiêu cuốn sách bị trả muộn?");
break;
}while(ask <= 0);

//Vòng lặp

for(let i = 1 ; i <= ask ; i++){
    bookLate = prompt("Nhập tên sách trả muộn thứ " + i +":");
    array.push(bookLate);
}

//Harry Potter và Hòn đá Phù thủy

//  The Catcher in the Rye

// Đắc Nhân Tâm

// Sapiens: Lược sử loài người

console.log("Tổng số sách bị trả muộn: " + ask);
for( let j = 0 ; j <= array.length - 1 ; j++){
    console.log(`${j + 1 }.` + array[j]);
    newArray = array[j];
    newArray = newArray.split('');
    if (newArray.length > 20) {
        dem++;
    }
}
  console.log(`Số lượng sách có tên dài hơn 20 ký tự: ${dem}`);



