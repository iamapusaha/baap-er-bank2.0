document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field')
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalString);

    const currentWithDrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const preBalancerTotal = parseFloat(balanceTotalElementString);

    const currentBalanceTotal = preBalancerTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})