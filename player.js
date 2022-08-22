document.getElementById('select-btn-1').addEventListener('click',function(){

    const messi = document.getElementById('player-messi');
    messi.innerText = '1. Lionel Messi';
    disableButton("select-btn-1");


})
document.getElementById('select-btn-2').addEventListener('click',function(){

    const neymar = document.getElementById('player-neymar');
    neymar.innerText = '2. Neymar Jr';
    disableButton("select-btn-2");
})
document.getElementById('select-btn-3').addEventListener('click',function(){

    const mbappe = document.getElementById('player-mbappe');
    mbappe.innerText = '3. Kylian Mbappé';
    disableButton("select-btn-3");
})
document.getElementById('select-btn-4').addEventListener('click',function(){

    const vitor = document.getElementById('player-vitor');
    vitor.innerText = '4. Vítor Machado';
    disableButton("select-btn-4");
})
document.getElementById('select-btn-5').addEventListener('click',function(){

    const ramos = document.getElementById('player-ramos');
   ramos.innerText = '5. Sergio Ramos';
   disableButton("select-btn-5");
})
document.getElementById('select-btn-6').addEventListener('click',function(){

   alert("You cannot add more than five players");
   disableButton("select-btn-6");
})
// calculate button
document.getElementById("calculate-btn").addEventListener('click',function(){

    const playerSalary = getInputValueById('player-salary-input');
    const playerExpense  = getTextValueById('player-expense');

    const totalPlayerExpense = playerSalary * 5;
    setTextValueById('player-expense',totalPlayerExpense);
})
// calculate button for total
document.getElementById('calculate-btn-total').addEventListener('click',function(){

    const managerExpense = getInputValueById('manager-salary-input');
    const coachExpense = getInputValueById('coach-salary-input');
    const expense = getTextValueById('total-expense');
    const playerExpense  = getTextValueById('player-expense');

    const totalExpense = playerExpense + managerExpense + coachExpense;
    setTextValueById('total-expense',totalExpense);

})