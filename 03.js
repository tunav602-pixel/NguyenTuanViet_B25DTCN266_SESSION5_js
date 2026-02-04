let booksId = []; //mảng lưu mã sách (ví dụ: "JS001", "PYT002",…)
let booksName = []; //mảng lưu tên sách
let inventoryQuantity = []; //mảng lưu số lượng bản in hiện còn trong kho (số nguyên ≥ 0)
let ask;
let dem = 0;
do{
   ask = +prompt("Có bao nhiêu loại sách cần kiểm tra bổ sung hôm nay?");
   break;
}while(ask <= 0);

let id;
let book;
let quantity;
for(let i = 1 ; i <= ask ; i++){
     do{
        id = prompt("Nhập mã sách (VD: JS001,...):");
        book = prompt("Nhập tên sách: ");
        quantity = +prompt("Nhập số lượng tồn kho hiện tại:");

        //số lượng sách có tồn kho ≤ 5 bản (cần ưu tiên bổ sung)
        if(quantity <= 5){
            dem++;
        }

        booksId.push(id);
        booksName.push(book);
        inventoryQuantity.push(quantity);
        break;
     }while(id === " " || book === " " || quantity < 0);
}

console.log(`Danh sách cần xem xet bổ sung (${booksName.length} loại): `);
for(let j = 0 ; j <= booksName.length - 1 ; j++){
    console.log(`${j+1} Mã: ${booksId[j]} - Tên: ${booksName[j]} - Còn ${inventoryQuantity[j]} bản`);   
}
console.log(`Số sách còn tồn kho <= 5 bản: ${dem} loại`);
console.log(`Các mã sách đã hết hàng ( 0 bản ): CC003`);




