const localStorage = window.localStorage;  

const prodList = document.querySelector('.product-list');

for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        const prodName = JSON.parse(localStorage.getItem(key)).title;
        const li = document.createElement('li');
        li.textContent = prodName;
        prodList.append(li);  
    }

}
