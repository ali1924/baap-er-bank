console.log('deposite');
// Step-1 add eventlistenet to deposite button
document.getElementById('btn-deposite').addEventListener('click',function(){
    // Step-2 get the deposite amount from the deposite input field
    // always remember to use .valueto get text form an input field
    const depositeField=document.getElementById('user-deposite');
    const depositeAmount=depositeField.value;
    // Step-3 get the current deposite total
    // for non-input use innerText
    const depositeTotalElement=document.getElementById('deposite-id');
    const depositeTotal=depositeTotalElement.innerText;
    depositeTotalElement.innerText=depositeAmount;
    console.log(depositeAmount);
})