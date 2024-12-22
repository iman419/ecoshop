// Theme Switcher
document.getElementById('themeSwitcher').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Toggle FAQ
document.getElementById('toggleFaq').addEventListener('click', () => {
    const faqList = document.getElementById('faqList');
    faqList.style.display = faqList.style.display === 'none' ? 'block' : 'none';
});

// Notifications
toastr.options = {
    "closeButton": true,
    "progressBar": true
};

// Edit/Delete Simulation
document.querySelectorAll('.delete-item').forEach(button => {
    button.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        row.remove();
        toastr.success('Item removed successfully!');
    });
});

document.querySelectorAll('.edit-item').forEach(button => {
    button.addEventListener('click', () => {
        toastr.info('Edit functionality is under development.');
    });
});

// Checkout Button Simulation
document.getElementById('checkoutButton').addEventListener('click', () => {
    toastr.success('Proceeding to checkout!');
});
