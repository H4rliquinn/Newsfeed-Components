/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 

//   Step 1: Write a function that will create a menu component as seen below:



//   <div class="menu">
//     <ul>
//       {each menu item as a list item}
//     </ul>
//   </div>
//   Pass the function an array as it's only argument.

function menuComp(arr){
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');
  const menuList = document.createElement('ul');

  menuDiv.appendChild(menuList);
  //   Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
//   Add those items to the <ul>

  arr.forEach(item=>{
    const menuItem = document.createElement('li');
    menuItem.textContent=item;
    menuList.appendChild(menuItem);
  });
  // console.log(menuDiv);
  return menuDiv;
};



//   Step 3: Using a DOM selector, select the menu button currently on the DOM.

const menuButton=document.querySelector('.menu-button');
// console.log(menuButton);

//   Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself
menuButton.addEventListener('click', e => {
  const menuDiv=document.querySelector('.menu');

  menuDiv.classList.toggle('menu--open');
  console.log(menuDiv.classList);
  if (menuDiv.classList.contains('menu--open')){
    console.log("OPEN");
    TweenLite.to('.menu', 1, {width: 350});
    TweenLite.to('.menu ul li', 1, {fontSize:32});
  } else{
    console.log("CLOSE");
    TweenLite.to('.menu', 1, {width: 0});
    TweenLite.to('.menu ul li', 1, {fontSize:0});
  }
});
//   Step 5: return the menu component.
const menuComplete = menuComp(menuItems);
// console.log(menuComplete);

//   Step 6: add the menu component to the DOM.
const headerDiv=document.querySelector('.header');
headerDiv.appendChild(menuComplete);
  

// TweenMax.from('.header',2,{right:600});