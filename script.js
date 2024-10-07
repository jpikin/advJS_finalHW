const localStorage = window.localStorage;
const sendBtn = document.querySelector('.send-btn');
const prodTitle = document.querySelector('.title');
const prodComment = document.querySelector('.text');
let ID = 0;


sendBtn.addEventListener('click', () => {
    const title = prodTitle.value;
    const comment = prodComment.value;
    localStorage.setItem(ID++, JSON.stringify({title, comment}));
    prodTitle.value = '';
    prodComment.value = '';
});

