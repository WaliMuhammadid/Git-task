// Simple JavaScript for Git Explorer
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('li');
    
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const command = this.textContent.split(':')[0].trim();
            alert(`You clicked on: ${command}\n\nThis is a basic Git command. Try it in your terminal!`);
        });
    });
});