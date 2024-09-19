

// Show Cash Out Form
document.getElementById('btn-show-cash-out')
.addEventListener('click', function () {
    console.log('Show Cash Out button clicked');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
});

// Show Add Money Form
document.getElementById('btn-show-add-money')
.addEventListener('click', function () {
    console.log('Show Add Money button clicked');
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
});
