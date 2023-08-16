document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-filed');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotalElement = document.getElementById('deposit-total');
    const preDepositTotalAmountString = depositTotalElement.innerText;
    const preDepositTotalAmount = parseFloat(preDepositTotalAmountString)

    const currentDepositTotal = preDepositTotalAmount + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const preBalanceTotalElementString = balanceTotalElement.innerText;
    const preBalanceTotalAmount = parseFloat(preBalanceTotalElementString);

    const currentBalanceTotal = preBalanceTotalAmount + newDepositAmount;

    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})