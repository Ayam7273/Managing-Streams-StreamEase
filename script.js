// $(document).ready(function() {
//     var gsearch = function() {
//         var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value;
//         window.open(url, 'google');
//     };

//     var glucky = function() {
//         var url = 'https://www.google.com/search?q=' + document.getElementById('searchme').value + '&btnI';
//         window.open(url, 'google');
//     };
//     $(".left").click(gsearch);
//     $(".right").click(glucky);
//     $("#searchme").keypress(function(e) {
//     if (e.which == 13) {
//         gsearch();
//     }
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const addShortcutButton = document.getElementById('addShortcut');
    
    addShortcutButton.addEventListener('click', function() {
        const link = prompt('Enter the URL for the shortcut:');
        if (link && link.trim() !== '') {
            const imgURL = prompt('Enter the URL for the shortcut image:');
            const newShortcut = document.createElement('div');
            newShortcut.classList.add('shortcut');
            newShortcut.setAttribute('data-link', link);
            newShortcut.innerHTML = `
                <img src="${imgURL || 'https://example.com/placeholder-icon.png'}" alt="Shortcut">
                <span>Shortcut</span>
            `;
            shortcutsContainer.appendChild(newShortcut);
        }
    });
    
});

