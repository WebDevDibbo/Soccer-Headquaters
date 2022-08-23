const players = document.getElementsByClassName('select-btn');
for(let player of players){
    
    player.addEventListener('click',function(){
        
        let parentName = player.parentNode.children[0].innerText;
        let listLength = document.getElementById('container-list').childElementCount;
        if(listLength == 5){
            alert('you can not add more than five players');
        }
        else{
            const list = document.createElement('li');
            list.innerText = parentName;
            list.style.padding = '10px';
            document.getElementById('container-list').appendChild(list);        
        }
    })
}
document.getElementById('select-btn-1').addEventListener('click',function(){

    disableButton("select-btn-1");
})
 document.getElementById('select-btn-2').addEventListener('click',function(){

     disableButton("select-btn-2");
 })
 document.getElementById('select-btn-3').addEventListener('click',function(){

    disableButton("select-btn-3");
 })
 document.getElementById('select-btn-4').addEventListener('click',function(){

     disableButton("select-btn-4");
 })
 document.getElementById('select-btn-5').addEventListener('click',function(){

   disableButton("select-btn-5");
 })
 document.getElementById('select-btn-6').addEventListener('click',function(){
    
    disableButton("select-btn-6");
 })
// calculate button
document.getElementById("calculate-btn").addEventListener('click',function(){
    const childLength = document.getElementById('container-list')
    const playersLength = childLength.children.length
    const playerSalary = getInputValueById('player-salary-input');
    const playerExpense  = getTextValueById('player-expense');
   
    const totalPlayerExpense = playerSalary * playersLength;
    setTextValueById('player-expense',totalPlayerExpense);
})
// calculate button for total
document.getElementById('calculate-btn-total').addEventListener('click',function(){

    const managerExpense = getInputValueById('manager-salary-input');
    const coachExpense = getInputValueById('coach-salary-input');
    const playerExpense  = getTextValueById('player-expense');

    const totalExpense = playerExpense + managerExpense + coachExpense;
    setTextValueById('total-expense',totalExpense);

})