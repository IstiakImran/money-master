function reduce(exist, depart, hidden) {
    if ( exist > depart) {
        const remain = parseFloat(exist) - parseFloat(depart);
        const notMatched = hidden;
        notMatched.style.display = 'none';
        return remain;
    }
    else{
        const notMatched = hidden;
        notMatched.style.display = 'block';
    }
}

// ------------------calculate button-------------------

document.getElementById('calc-btn').addEventListener('click', function() {
    // get income ammount
    const income = document.getElementById('income-amount');
    const incomeAmount = income.value;
    if ( incomeAmount > 0) {
        const notmatchedIncome = document.getElementById('income-hidden');
        notmatchedIncome.style.display = 'none';
    }
    else{
        const notmatched = document.getElementById('income-hidden');
        notmatched.style.display = 'block';
    }

    // get food cost
    const foodCost = document.getElementById('food-cost');
    const foodAmount = foodCost.value;
    if (foodAmount > 0) {
        const notmatched = document.getElementById('food-hidden');
        notmatched.style.display = 'none';
    }
    else {
        const notmatched = document.getElementById('food-hidden');
        notmatched.style.display = 'block';
    }
    
    // get rent cost
    const rentCost = document.getElementById('rent-cost');
    const rentAmount = rentCost.value;
    if (rentAmount > 0) {
        const notmatched = document.getElementById('rent-hidden');
        notmatched.style.display = 'none';
    }
    else {
        const notmatched = document.getElementById('rent-hidden');
        notmatched.style.display = 'block';
    }
    
    // get cloth cost
    const clothCost = document.getElementById('cloth-cost');
    const clothAmount = clothCost.value;
    if (incomeAmount > 0) {
        
    }
    else {
        const notmatched = document.getElementById('cloth-hidden');
        notmatched.style.display = 'block';
    }
    
    // insert total cost
    const totalExpense = document.getElementById('total-expense');

    // insert balance
    const totalBalance = document.getElementById('balance');
    const errorBalance = document.getElementById('amount-hidden');

    if ( incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothAmount > 0) {
        // total cost
        const totalCost = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothAmount);
        totalExpense.innerText = totalCost;

        // current balance
        const currentBalance = reduce(incomeAmount, totalCost, errorBalance);
        totalBalance.innerText = currentBalance;
    }
    else{
        console.log('plese inter rite value')
    }
    


    // foodCost.value = '';
    // rentCost.value = '';
    // clothCost.value = '';
    // income.value ='';

})

// ----------------save button---------------

document.getElementById('save-btn').addEventListener('click', function (){
    // get income ammount
    const income = document.getElementById('income-amount');
    const incomeAmount = income.value;

    // get saving percentage
    const save = document.getElementById('saving');
    const savings = save.value;
    if (savings > 0) {
        const notmatchedRate = document.getElementById('rate-hidden');
        notmatchedRate.style.display = 'none';
    }
    else {
        const notmatchedRate = document.getElementById('rate-hidden');
        notmatchedRate.style.display = 'block';
    }
    

    // saving amount

    if (savings > 0) {
        const savingAmount = document.getElementById('saving-amount');
        const savingRate = parseFloat(savings) / 100;
        const savedMoney = parseFloat(savingRate) * parseFloat(incomeAmount);
        savingAmount.innerText = savedMoney;
        // save.value = '';

        // remaining balance
        const errorSaving = document.getElementById('total-amount-hidden');
        const lastBalance = document.getElementById('remaining-balance');
        const lastmoney = document.getElementById('balance');
        const totalMoney = lastmoney.innerText;
        const remainingBalance = reduce(totalMoney, savedMoney, errorSaving);
        lastBalance.innerText = remainingBalance;
        console.log(totalMoney);
    }
    else{
        console.log('plese inter rite value')
    }
})

