//task1 start
function mode(){
//variables 
    var priceinput=document.getElementById('priceinput').value;
    var select=document.getElementById('select').value;
    var interest=document.getElementById('interest').value;
    var month=document.getElementById('month');
    var all=document.getElementById('all');
//variables
    var priceint=parseInt(priceinput);
    var interestint=parseFloat(interest);
    if(priceinput!=""&&interest!=""){
      var calall=priceint+(priceint*interestint/100);
      var calmonth=calall/select;
      all.innerHTML= calall;
      month.innerHTML=calmonth.toFixed(2);
    }
    else
    {
      alert('deyerleri daxil et')
    }
}
// task1 end

// task2 start
var value=document.getElementById('value'); 
count=1;
function plus(){
  count++;
  value.innerHTML=count;
}
function minus(){
  if(count==1){
    alert("minimum reqem 1 olmailidir");
   }
  if(count>1){
    count--;
    value.innerHTML=count;
  }

}
function reset(){
  count=1;
  value.innerHTML=count;
}




// task2 end
