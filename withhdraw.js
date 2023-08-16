document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please provide a number')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalString);



    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const preBalancerTotal = parseFloat(balanceTotalElementString);
    if (newWithdrawAmount > preBalancerTotal) {
        alert('tor baap er bank a ato tk nai ra vai')
        return;
    }
    const currentWithDrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;


    const currentBalanceTotal = preBalancerTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


})