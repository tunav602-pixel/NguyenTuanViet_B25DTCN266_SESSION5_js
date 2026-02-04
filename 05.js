let booksId = [];
let booksName = [];
let booksCategory = [];
let inventoryQuantity = [];

let ask;
do{
   ask = prompt("Có bao nhiêu loại sách cần nhập thông tin hôm nay?");
}while(ask <= 0);

let id;
let book;
let category;
let quantity;
for(let i = 1 ; i <= ask ; i++){
    do{
        id = prompt(`"Nhập mã sách thứ ${i}: `);
        booksId.push(id);
    }while(id.trim() === "");

    do{
        book = prompt(`Nhập tên sách thứ ${i}: `);
        booksName.push(book);
    }while(book.trim() === "");

    category = prompt(`Nhập các thể loại của sách thứ ${i} (các thể loại cách nhau bởi dấu phẩy): `);
    // dùng tolowerCase hoặc toUpperCase để không phân biệt hoa thường
    category = category.toLowerCase();
    booksCategory.push(category);
    
    do{
        quantity = prompt(`Nhập số lượng tồn kho của sách thứ ${i}: `);
        inventoryQuantity.push(quantity);
    }while(quantity < 0);
}

let countLaptrinh = 0;
for(let i = 0 ; i <= booksName.length - 1 ; i++){
    // Đếm và in ra tổng số sách thuộc thể loại "Lập trình" (kiểm tra chuỗi thể loại có chứa từ "Lập trình" hay không - không phân biệt hoa thường)
    if(booksCategory[i].includes("lập trình")){
        countLaptrinh += Number(inventoryQuantity[i]);  
    }
}
console.log(`Tổng số sách thuộc thể loại lập trình là: ${countLaptrinh}`);

// in ra tất cả mã sách thuộc cả hai thể loại "JavaScript" và "Web"

console.log(`Danh sách mã sách thuộc cả hai thể loại 'JavaScript' và 'Web':`);
for( let i = 0 ; i <= booksCategory.length - 1 ; i++){
    if(booksCategory[i].includes("javascript") && booksCategory[i].includes("web")){
                     console.log(booksId);
    }
}

//sách có số lượng tồn kho thấp nhất

let minIndex = 0;
for (let i = 1; i < inventoryQuantity.length; i++) {
  if (inventoryQuantity[i] < inventoryQuantity[minIndex]) {
                     minIndex = i;
  }
  console.log(`Loại sách có số lượng tồn kho thấp nhất:
               Mã sách: ${booksId[minIndex]}, Tên sách: ${booksName[minIndex]}, Tồn kho: ${inventoryQuantity[minIndex]}`);
}

