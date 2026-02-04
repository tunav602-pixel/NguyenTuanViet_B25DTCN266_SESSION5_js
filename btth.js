let choice;
let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];
do{
   choice = +prompt(`--- THƯ VIỆN KHOA HỌC ---

1. Xem danh sách
2. Nhập sách mới
3. Mượn sách (Xóa)
4. Sửa tên sách
5. Sắp xếp kệ
0. Thoát`)

switch (choice) {
    case 1:
        // hiện thì số sách và danh sách sách
        console.log("Số lượng sách trong kho: ", books.length);
        console.log("Danh sách các quyển sách trong kho: ");
        for(let i = 0; i < books.length ; i++){
            console.log(`${i+1}.Tên sách ${books[i]}`);
        }
        break;
    case 2:
        //Thêm sách
        const bookNameApp = prompt("Nhập tên sách cần thêm: ");
        books.push(bookNameApp);
        alert("Đã thêm thành công");
        break;
    
    case 3:
        //Nhập vào tên cuốn sách cần mượn
        const bookBorrow = prompt("Nhập tên cuốn sách cần mượn: ")
  
        //Kiểm tra cuốn sách đó có tồn tại trong mảng không
        const searchIndex = books.indexOf(bookBorrow);

        //Kết quả
        if(searchIndex !== -1){
            alert("Đã mượn cuốn sách ${bookBorrow}");

            //xóa cuốn sách khỏi mảng
            books.splice(searchIndex , 1)
        }else{
            alert("Không có sách trong kho");
        }
        break;

    case 4: 
    //Nhập tên sách cũ cần cập nhật
    const bookNameOld = prompt("Vui lòng nhập tên sách cần cập nhật");
    //Tìm kiến cuốn sách dựa vào trên

    const searchBookNameOld = books.indexOf(bookNameOld);

    // Xử lý kết quả trả về
    if(searchBookNameOld !== -1){
        //Nhập tên sách mới
        const bookNameNew = prompt("Vui lòng nhập tên sách mới");
        //Cập nhật sách mới vào sách cũ
        books[searchBookNameOld] = bookNameNew;
        //In ra thông báo
        alert("Cập nhật thành công");
    } else {

    }
       break;
    case 5:
        //Sắp xếp sách theo tên
        books.sort();

        console.log("Danh sách các quyển sau khi sắp xếp: ", books);
        for(let i = 0 ; i < books.length ; i++){
            console.log(`${i + 1 }. ${book[i]}`);
            
        }
        
        break;
    case 0:
        alert("Thoát chương trình!")
        break;

    default:
        break;
}
}while(choice !==0);
    
    

 