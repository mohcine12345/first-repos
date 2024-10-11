const emojis = ["😊", "😊", "😇", "😇", "🙂", "🙂", "🙃", "🙃", "😉", "😉", "😌", "😌", "😍", "😍", "🤣", "🤣"];

// Mélanger les emojis
var shuf_emojis = emojis.sort(() => Math.random() - 0.5);

// Créer les éléments du jeu
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];
    box.onclick = function() {
        this.classList.add('boxOpen');
        setTimeout(() => {
            if (document.querySelectorAll('.boxOpen').length > 1) {
                if (document.querySelectorAll('.boxOpen')[0].innerHTML === document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    document.querySelectorAll('.boxOpen').forEach(box => {
                        box.classList.add('boxMatch');
                        box.classList.remove('boxOpen');
                    });
                    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
                        alert('Win');
                    }
                } else {
                    document.querySelectorAll('.boxOpen').forEach(box => {
                        box.classList.remove('boxOpen');
                    });
                }
            }
        }, 500);
    };
    document.querySelector('.game').appendChild(box);
}
