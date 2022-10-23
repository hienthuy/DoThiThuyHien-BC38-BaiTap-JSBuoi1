//Bài 1: Tính tiền lương nhân viên

/** SƠ ĐỒ 3 KHỐI
 * input: lương 1 ngày,số ngày làm
 * process: 
 *      1. Lấy input: lương 1 ngày=100000, số ngày làm = 26
 *      2. Công thức tính lương = lương 1 ngày * số ngày làm
 *      3. In output ra màn hình
 * output: lương
 */
 var workDays = 26;
 var salaryPerDay = 100000;
 var totalSalary = 0;
 
 var totalSalary = salaryPerDay * workDays;
 console.log("Tổng tiền lương: " + totalSalary);
 
 //Bài 2: Tính giá trị trung bình
 /**SƠ ĐỒ 3 KHỐI
  * input: nhập vào 5 số thực
  * process: 
  *      1. Input: nhâp vào 5 số thực: numR1 = 15.5, numR2 = -3.5,
  *       numR3 = 30, numR4 = 100, numR5 = 0
  *      2. Tính giá trị trung bình = (numR1 + numR2 + numR3 + numR4 + numR5) / 5
  *      3. In kết quả
  * output: Giá trị trung bình
  * 
  */
 var numR1 = 15.5;
 var numR2 = -3.5;
 var numR3 = 30;
 var numR4 = 100;
 var numR5 = 0;
 var averageValue = 0;
 var averageValue = (numR1 + numR2 + numR3 + numR4 + numR5) / 5;
 console.log("Giá trị trung bình của 5 số thực là: " + averageValue);
 
 
 // Bài 3: Quy đổi tiên tệ
 /**SƠ ĐỒ 3 KHÔI
  * input: Tỷ giá oneUsd = 23500 VND, số tiền usd
  * process: 
  *      1. Input:  oneUsd = 23500 , Số tiền Usd = 1000
  *      2. Tính số tiền quy đổi VND = oneUsd * số tiền Usd
  *      3. In kết quả
  * output: Số tiền quy đổi VND
  * 
  */
 
 var oneUsd = 23500;
 var numberOfUsd = 1000;
 var vndConversionAmount = oneUsd * numberOfUsd;
 console.log("Số tiền quy đổi VND: " + vndConversionAmount);
 
 // Bài 4: Tính diện tích, chu vi hình chữ nhật
 /**SƠ ĐỒ 3 KHÔI
  * input: chiều dài, chiều rộng
  * process: 
  *      1. Input: chiều dài = 6; chiều rộng = 4;
  *      2. Công thức tính diện tính, chu vi:
  *          diện tích = chiều dài* chiều rộng;
  *          chuvi = (chiều dài + chiều rộng) * 2;
  *      3. In kết quả
  * output: diện tích, chu vi
  */
 var length = 6;
 var width = 4;
 var area = length * width;
 var perimeter = (length + width) * 2;
 console.log("Diện tích hình chữ nhật: " + area);
 console.log("Chu vi hình chữ nhật: " + perimeter);
 
 // Bài 5: Tính tổng 2 ký số
 /**SƠ ĐỒ 3 KHỐI
  * input:  số có 2 chữ số
  * process:
  *      1. Input: n = 46; tạo biến ten, unit, sum
  *      2.  Tách số hàng chục: ten = Math.floor(n / 10);
  *          Tách số hàng đơn vị: unit = n % 10;
  *          Tổng 2 ký số = ten + unit;
  *      3. In kết quả
  * output: 
  */
 var n = 46;
 var ten = Math.floor(n / 10);
 var unit = n % 10;
 var sum = ten + unit;
 console.log("Tổng 2 ký số là: " + sum);