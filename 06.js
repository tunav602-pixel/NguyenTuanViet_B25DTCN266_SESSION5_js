// 1. Khai báo 4 mảng song song
let readerCardIds = [];
let readerNames = [];
let borrowedBookCodes = [];
let overdueDays = [];

// 2. Hỏi số lượng bạn đọc bị ghi nhận quá hạn
let n;
do {
  n = +prompt("Hôm nay có bao nhiêu bạn đọc bị ghi nhận quá hạn?");
} while (n <= 0);

// 3. Nhập thông tin từng bạn đọc
for (let i = 0; i < n; i++) {

  // ---- Nhập mã thẻ bạn đọc (duy nhất) ----
  let cardId;
  let isDuplicate;

  do {
    cardId = prompt(`Nhập mã thẻ bạn đọc thứ ${i + 1} (VD: TV001):`).trim();

    // Kiểm tra trùng
    isDuplicate = false;
    for (let j = 0; j < readerCardIds.length; j++) {
      if (readerCardIds[j] === cardId) {
        isDuplicate = true;
        alert("Mã thẻ đã tồn tại! Vui lòng nhập mã khác.");
        break;
      }
    }
  } while (cardId === "" || isDuplicate);

  readerCardIds.push(cardId);

  // ---- Nhập tên bạn đọc ----
  let name;
  do {
    name = prompt(`Nhập tên bạn đọc thứ ${i + 1}:`).trim();
  } while (name === "");

  readerNames.push(name);

  // ---- Nhập chuỗi mã sách đang mượn ----
  let bookCodes;
  do {
    bookCodes = prompt(
      `Nhập các mã sách đang mượn (cách nhau dấu phẩy, VD: JS001,PYT002):`
    ).trim();
  } while (bookCodes === "");

  borrowedBookCodes.push(bookCodes);

  // ---- Nhập số ngày quá hạn ----
  let days;
  do {
    days = +prompt("Nhập số ngày quá hạn (>= 0):");
  } while (days < 0 || isNaN(days));

  overdueDays.push(days);
}

// 4. XỬ LÝ YÊU CẦU SAU KHI NHẬP

console.log("===== DANH SÁCH BẠN ĐỌC QUÁ HẠN =====");
for (let i = 0; i < n; i++) {
  console.log(
    `${readerCardIds[i]} - ${readerNames[i]} - Mượn: ${borrowedBookCodes[i]} - Quá hạn: ${overdueDays[i]} ngày`
  );
}

// a. Đếm tổng số bạn đọc quá hạn ≥ 10 ngày
let count10 = 0;
for (let i = 0; i < n; i++) {
  if (overdueDays[i] >= 10) {
    count10++;
  }
}
console.log("(a) Tổng số bạn đọc quá hạn ≥ 10 ngày:", count10);

// b. In mã thẻ bạn đọc mượn cả JS và PYT
console.log("\n(b) Bạn đọc đang mượn cả sách JS và PYT:");

let found = false;

for (let i = 0; i < n; i++) {
  let codes = borrowedBookCodes[i].split(",");

  let hasJS = false;
  let hasPYT = false;

  for (let code of codes) {
    code = code.trim().toUpperCase();

    if (code.startsWith("JS")) hasJS = true;
    if (code.startsWith("PYT")) hasPYT = true;
  }

  if (hasJS && hasPYT) {
    console.log("→", readerCardIds[i]);
    found = true;
  }
}

if (!found) {
  console.log("Không có bạn đọc nào mượn cả JS và PYT.");
}

// c. In tên bạn đọc quá hạn cao nhất

let maxDays = overdueDays[0];
let maxReader = readerNames[0];

for (let i = 1; i < n; i++) {
  if (overdueDays[i] > maxDays) {
    maxDays = overdueDays[i];
    maxReader = readerNames[i];
  }
}

console.log(
  `\n(c) Bạn đọc quá hạn nhiều nhất: ${maxReader} (${maxDays} ngày)`
);

// d. Cảnh báo theo tình hình quá hạn ≥ 7 ngày
let count7 = 0;
for (let i = 0; i < n; i++) {
  if (overdueDays[i] >= 7) {
    count7++;
  }
}

console.log("\n(d) CẢNH BÁO:");

if (count7 === 0) {
  console.log("Tình hình trả sách hôm nay khá tốt!");
} else if (count7 >= 1 && count7 <= 4) {
  console.log("Cần gửi nhắc nhở cho một số bạn đọc!");
} else {
  console.log("Tình trạng quá hạn nghiêm trọng! Cần liên hệ ngay!");
}