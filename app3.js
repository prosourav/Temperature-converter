let chk = document.querySelector("#check");
let clr = document.querySelector("#clear");
let val = document.querySelector("#text1");
let val2 =  document.querySelector("#text2");
clr.addEventListener("click",clearing)
function clearing()
{
    val.value = " ";
    val2.value= " ";
};
chk.addEventListener("click",function()
{
  let cel =  val.value;
if(cel===""|| isNaN(cel)|| cel < 0){
 val2.value = "please provide a right value";}
 else{
    let fahr = (((cel * 9) / 5) + 32);
    val2.value = fahr;
 }
 
});