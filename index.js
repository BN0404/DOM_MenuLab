
// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];

  var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//1
const mainEl = document.querySelector('main');
// console.log(mainEl);
// console.dir(mainEl);
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
 
// for (eachItem of menuLinks) {
//     const a = document.createElement('a');
//     a.setAttribute('href', eachItem.href);
//     a.innerText = eachItem.text;
//     topMenuEl.appendChild(a);
// }

menuLinks.forEach((element) => {
  //Create an <a>element.
const a = document.createElement("a");
console.log(a);

//On the new element, add an href attribute with its value set to the href property of the "link" object.
a.setAttribute("href", element.href);

//Set the new element's content to the value of the text property of the "link" object.
a.textContent = element.text;

//Append the new element to the topMenu Element.
topMenuEl.appendChild(a);
});


//========================2=============================

//4.0
const subMenuE1 = document.getElementById('sub-menu');

4.1
subMenuE1.style.height = '100%';

//4.2
subMenuE1.style.backgroundColor = 'var(--sub-menu-bg)';

//4.3
subMenuE1.classList.add('flex-around');

//4.4
subMenuE1.style.position = 'absolute';

//4.5
subMenuE1.style.top = '0';


//5.0Select and cache the all of the <a>elements inside of topMenuEl in a variable named topMenuLinks

const topMenuLinks = document.querySelectorAll('#top-menu > a');
console.log(topMenuLinks);

const showingSubMenu = false;

//5.2

topMenuEl.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e)
  if (e.target.tagName !== "A") {
  return
  }

  if (clickedObj.subLinks) {
    showingSubMenu = true;
    buildSubMenu(clickedObj.subLinks);
    // buildSubMenu(clickObj.subLinks); 
    subMenuE1.style.top ='100%'
  } else
  {
    subMenuE1.style.top = '0'
  }
  
  function buildSubMenu(subLinks) {
    subMenuE1.textContent = "";
    let subMenuE1 = subLinks.forEach((li) => {
      document.createElement('a');
    li.setAttribute('href', li.href);
      li.textContent = li.text;
      return li;
  })
    subMenuE1.append(li);
  }
// console.log(e.target.textContent);


//5.3
console.dir(e.target);
if (e.target.classList.contains('active')) {
  e.target.classList.remove('active');
  showingSubMenu = false;
  subMenuE1.style.top = '0';
  return
}
})

// //5.4
// e.target
// removeEvent.topMenuLinks('active', a)
// removeEvent.addEventListener('click', function () {
//   button.removeEventListener('click', sayHello)
// });
// 5.5
// topMenuEl.addEventListener('active', a)
// // 5.6Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty (all do, except for the "link" object for ABOUT), otherwise, set it to false.
// let clickObj = menuLinks.find((lin) => lin.text === e.target.textContent);
// console.dir(e.target);
// console.log(menuLinks);
// if(clickObj.subLinks){
//   showingSubMenu = true;
//   menuLinks.forEach((lin) => {
//     console.log(clickObj.subLinks)
  
//     if (clickObj.subLinks) {
//       showingSubMenu = true;

//     }
//     else {
//       // showingSubMenu = false;

//     }
//     console.log(clickObj.subLinks);

    // 5.8  
topMenuLinks.forEach(link => {
  link.classList.remove("active");
  console.log(link.classList);
});

//Task 5.5 Next, the event listener should add a class name of active to the <a>element that was clicked.
event1.target.classList.add('active');
console.log(event1.target.classList);

//Task 5.6

let clickedItemSublinks;
menuLinks.forEach(link =>{
console.log(event1.target);
console.log(link);
  if(link.subLinks && event.target.textContent === link.text){
  
    showingSubMenu = true;
    console.log(showingSubMenu);
    clickedItemSublinks = link.subLinks;
    console.log(clickedItemSublinks);
    return;
  }
    else {
    showingSubMenu = false;
  }
  
})

//Task 5.7
console.log(showingSubMenu);
if (showingSubMenu){
   buildSubMenu(clickedItemSublinks);
  subMenuE1.style.top = '100%';
}else
subMenuE1.style.top = '0';

//Task 5.8
function buildSubMenu(sublink){
  sublink.forEach(link => {
    const a = document.createElement('a');
    a.setAttribute('href',link.href);
    a.textContent = link.text;
    subMenuE1.appendChild(a);
  });
}


//Task 6.0
subMenuE1.addEventListener('click',function(event){
  event.preventDefault();
  if(event.target.tagName != 'A') {
    return ;
  }
  console.log(event.target.textContent);

//Task 6.1
  showingSubMenu = false;
  subMenuE1.style.top = '0';

//Task 6.2
topMenuLinks.forEach(link => {
  link.classList.remove("active");
  console.log(link.classList);
});

//Task 6.3
  console.log(mainEl.textContent);
  mainEl.textContent = event.target.text;

})

//Task 6.4

if(event1.target.text === 'about'){
  mainEl.innerHTML = `<h1>ABOUT</h1>`;
}