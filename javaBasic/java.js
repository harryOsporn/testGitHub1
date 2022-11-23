//Bài 6: string method
let name_bai6 = 'Huynh Hoang Hai';
console.log(name_bai6.slice(6, 11)); //Lấy tên ở vị trí tu 6 -> 11 => Hoang

console.log(name_bai6.slice(6))      // Lấy tên sau vị trí 6 => Hoang Hai 

console.log(name_bai6.slice(-8));    //Nếu là số âm thì lấy từ cuối vị trí => oang Hai

console.log(name_bai6.slice(-9, -3)) // Lấy vị trí 9 và 3 từ dưới chuỗi lên => Hoang 
//substring giống slice... có thể tìm hiểu thêm trên gg
console.log(name_bai6.substring(6, 11));
//Replace
function replace_methodString() {
    confirm(name_bai6.replace("Hai", "Hai dep trai?"))
}
//Lưu ý nếu như trong chuỗi có 2 ký tự giống nhau (Hai xin chao Hai)
//Khi replace sẽ chỉ lấy chuỗi đầu tiên replace("Hai", "Hoang") => (Hoang xin chao Hai)
//Nên ta dùng replace(/{tên đc thay thế}/g, {tên thay thế})để thế tất cả ký tự đc thay thế.
function replace_global() {
    let x = alert(name_bai6.replace(/Hai/g, "Hoang")) // g là global mathches
    //VD : "Hai xin chao hai" => "Hoang xin chao Hoang"
}
//g là global matches 
function replace_withPrompt() {
    let x = prompt(name_bai6.replace(/HAI/i, "Hai dep trai thanh lich"));
}
//Để tránh sự nhạy cảm của từ được thay thế ta dùng
//replace(/{tên muốn đc thay thế}/i, {tên thay thế}) i là insensitive(kh nhạy cảm)

console.log(name_bai6.replaceAll("Hai", "Cu bự")); //Thế tất cả "Hải" 