

let booksId = [];      // mảng lưu mã sách
let booksName = [];    // mảng lưu tên sách
let bookStatus = [];   // mảng lưu tình trạng hiện tại

let ask;
let id;
let book;
let choice;

do {
  ask = +prompt("Có bao nhiêu cuốn sách cần kiểm tra tình trạng hôm nay?");
} while (ask <= 0);

for (let i = 1; i <= ask; i++) {
  // Nhập mã sách (không được để trống)
  do {
    id = prompt("Nhập mã sách: ");
  } while (id.trim() === "");
  booksId.push(id);

  // Nhập tên sách (không được để trống)
  do {
    book = prompt("Nhập tên sách: ");
  } while (book.trim() === "");
  booksName.push(book);

  // Nhập tình trạng ban đầu (chỉ được chọn 1–3)
  do {
    choice = +prompt(`Nhập tình trạng ban đầu (chọn số 1–3): 
1 → "Hỏng nhẹ" 
2 → "Hỏng nặng" 
3 → "Cần sửa gấp"`);
  } while (choice < 1 || choice > 3);

  // Gán tình trạng vào mảng bookStatus
  if (choice === 1) {
    bookStatus.push("Hỏng nhẹ");
  } else if (choice === 2) {
    bookStatus.push("Hỏng nặng");
  } else {
    bookStatus.push("Cần sửa gấp");
  }
}

console.log(`Danh sách hiện tại (${booksName.length} cuốn):`);
for (let j = 0; j < booksName.length; j++) {
  console.log(`${j + 1}. ${booksName[j]} - ${bookStatus[j]}`);
}

let success = 0; // số sách đã sửa xong
let vut = 0;     // số sách bị loại bỏ
let choice2;

do {

  // Menu lựa chọn chức năng
  choice2 = +prompt(`Bạn muốn làm gì:
1: Sửa tình trạng một cuốn sách
2: Loại bỏ (xóa) một cuốn sách khỏi danh sách
0: Kết thúc và in báo cáo cuối`);

  switch (choice2) {

    case 1: {

      let ask3 = prompt("Nhập mã sách cần sửa: ");

      // indexOf giúp tìm vị trí của mã sách trong mảng
      let post = booksId.indexOf(ask3);

      // Nếu không tìm thấy → indexOf trả về -1
      if (post === -1) {
        console.log("Không tìm thấy sách");
      } else {

        // Nếu tìm thấy thì nhập tình trạng mới
        let newChoose = +prompt(`Chọn tình trạng mới (1–5): 
1: Hỏng nhẹ 
2: Hỏng nặng 
3: Cần sửa gấp 
4: Đã sửa xong 
5: Loại bỏ`);

        // Cập nhật bookStatus tại đúng vị trí
        switch (newChoose) {

          case 1:
            bookStatus[post] = "Hỏng nhẹ";
            break;

          case 2:
            bookStatus[post] = "Hỏng nặng";
            break;

          case 3:
            bookStatus[post] = "Cần sửa gấp";
            break;

          case 4:
            bookStatus[post] = "Đã sửa xong";
            success++;
            break;

          case 5:
            bookStatus[post] = "Loại bỏ";
            vut++;
            break;

          default:
            console.log("Lựa chọn không hợp lệ!");
        }
      }

      break;
    }


    case 2: {

      let ask4 = prompt("Nhập mã sách cần xóa: ");

      // Tìm vị trí sách cần xóa
      let pos = booksId.indexOf(ask4);

      // Nếu không tồn tại
      if (pos === -1) {
        console.log("Không tìm thấy sách để xóa");
      } else {

        // splice dùng để xóa phần tử tại vị trí pos
        booksId.splice(pos, 1);
        booksName.splice(pos, 1);
        bookStatus.splice(pos, 1);

        console.log("Đã xóa thành công!");
      }

      break;
    }

    case 0: {

    //báo cáo
      console.log(`Tổng số sách còn lại: ${booksName.length}`);
      console.log(`Số sách đã sửa xong: ${success}`);
      console.log(`Số sách loại bỏ: ${vut}`);

      break;
    }

    default:
      console.log("Bạn nhập sai lựa chọn!");
  }

} while (choice2 !== 0);
