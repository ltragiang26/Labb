//----------------------------------------------------------------------
let numberA = 3;
checkSoLe = num => num % 2 === 1;
const isOdd = (num) => {return num % 2 === 1;}

document.write(checkSoLe(numberA));
document.write('<br>');
document.write(isOdd(numberA));
document.write('<br>'+'----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
var books = [
   {
       tacGia : 'LeThiTraGiang',
       tieuDe : 'Books1',
       namXuatBan :'2024',
       trangThai : true
   },
   {
       tacGia : 'LeThiTraGiang',
       tieuDe : 'Books1',
       namXuatBan :'2024',
       trangThai : true
   }
]
books.forEach((item)=>
{
  console.log( `tacGia : ${item.tacGia} tieuDe : ${item.tieuDe}  namXuatBan : ${item.namXuatBan} TrangThai : ${item.trangThai}`)
})
document.write('----------------------------------------------------------------------'+'<br>');
// ----------------------------------------------------------------------
const arrDemo = [3, 2, 5, 4];
let i = 0, a = arrDemo[0], b = arrDemo[0];
checkNumberA = number => a < number;

for(let i in arrDemo){
   if(checkNumberA(arrDemo[i])){
      a = arrDemo[i];
   }else if(b > arrDemo[i]){
         b = arrDemo[i];
   }
}

document.write(a + ', ' + b);
document.write('<br>'+'----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
let text = 'Lê Thị Trà Giang';

function checkKiTu(sentence){
   const words = sentence.split(' ');

   let maxLength = 0;
   let kiTuDai = '';

   for(let i = 0; i < words.length; i++){
      if(words[i].length > maxLength){
         maxLength = words[i].length;
         kiTuDai = words[i];
      }
   }
   return kiTuDai;
}

document.write("Câu cần kiểm tra là: " + text);
document.write('<br>');
document.write("Từ dài nhất là: " + checkKiTu(text));
document.write('<br>'+'----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
function plusAll(){
   var res = 0;
   for(var i in arguments){
      res += arguments[i];
   }
   return res;
}

document.write(plusAll(1) + "<br>");
document.write(plusAll(1,3,6) + "<br>");
document.write('----------------------------------------------------------------------'+'<br>');
//----------------------------------------------------------------------
var person1 = {name: 'Tra Giang', age: 12};
var person1 = {name: 'Tra Giang 1', age: 13};

