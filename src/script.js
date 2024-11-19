function Calculate(){
   let height=parseFloat(document.querySelector('.height').value);
   let weight=parseFloat(document.querySelector('.weight').value);
   let bmiResult=document.querySelector('.bmi');
   let result=document.querySelector('.result');

let bmi=weight/(height*height)
if(bmi<15){
  bmiResult.textContent=bmi.toFixed(2)
  result.textContent='very severly underweight'
}
else if(bmi>=15 && bmi<16){
   bmiResult.textContent=bmi.toFixed(2)
  result.textContent='severly underweight'
}
else if(bmi>=16 && bmi<18.5){
    bmiResult.textContent=bmi.toFixed(2)
   result.textContent='underweight'
}
else if(bmi>=18.5 && bmi<25){
     bmiResult.textContent=bmi.toFixed(2)
  result.textContent='normal underweight'
}
else if(bmi>=25 && bmi<=30){
 bmiResult.textContent=bmi.toFixed(2)
  result.textContent='over underweight'
}
else if(bmi>=30 && bmi<35){
    bmiResult.textContent=bmi.toFixed(2)
  result.textContent='moderately obese'
 
}

else if(bmi>=35 && bmi<=40){
    bmiResult.textContent=bmi.toFixed(2)
  result.textContent='severly obese '
}
else{
      bmiResult.textContent=bmi.toFixed(2)
  result.textContent='very severly obese '
 
}




}






