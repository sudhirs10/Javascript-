'use strict';
const names = ['John', 'Paul', 'Jones'];

const target = document.getElementById('target');
for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.textContent = names[i];
    target.appendChild(li);
}
