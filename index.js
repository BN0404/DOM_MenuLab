
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//1
const mainEl = document.querySelector('main');
console.log(mainEl);
console.dir(mainEl);
//1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

//1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

//1.3
mainEl.classList.add('flex-ctr');

//2.0
const topMenuEl = document.getElementById('top-menu');

//2.1
topMenuEl.style.height = '100%';

//2.2
topMenuEl.style.backgroundColor ='var(--top-menu-bg)'

//2.3
topMenuEl.classList.add('flex-around');

//3.1

for (eachItem of menuLinks) {
    const a = document.createElement('a');
    a.setAttribute('href', eachItem.href);
    a.innerText = eachItem.text;
    topMenuEl.appendChild(a);
}
