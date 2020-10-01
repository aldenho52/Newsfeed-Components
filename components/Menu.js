// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

function menuMaker (array) {
  const menu = document.createElement('div')
  const list = document.createElement('ul')

  menu.appendChild(list)
  menu.classList.add('menu')

  array.forEach (item => {
    const listItem = document.createElement('li')
    listItem.textContent = item
    list.appendChild(listItem)
  })

  const menuButton = document.querySelector('.menu-button')
  menuButton.addEventListener('click', event => {
  menu.classList.toggle('menu--open')
  
})

  return menu
}

const header = document.querySelector('.header')
header.appendChild(menuMaker(menuItems))


// jQuery Code

$(document).ready(function() {
  $('h1').hover(function() {
    $(this).css('color', 'red')
  },
  function() {
    $(this).css('color', 'white')
  })

  $('.articles').hover(function () {
    $(this).css('background', 'lightblue')
  },
  function () {
    $(this).css('background', 'white')
  })

})


// * Animation Goal #1. Animate the menu opening: You will need to change the CSS for the menu in order to achieve this. Get the menu to slide in from the left side of the screen. And slide out when the button is clicked. Bonus: Get the menu to slide back out when the user clicks anywhere on the screen other than the menu.

const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', event => {
  if (menuButton.style.display === 'block') {
      menuButton.classList.remove('menu-button')

  }
})


// * Animation Goal #2 Animate the article opening. This one is a bit trickier. You will need to change the CSS for this component as well. Animate the component so that it slides open and slides closed on each click. Update the text in the expand button to read `'Click to Expand'` or `'Click to Close'` depending on the state of the article.

// * Close Button

//   Add a close (or 'read') button to each Article component. When clicked the article will disappear.

// * Component Constructor

//   Create a function that builds Article components. You are not expected to finish this. This goal is simply an exercise in thinking about how you would implement a function that took some data, created a new Article from it, and appended it to the HTML (without actually writing anything in the HTML file). This is a difficult concept to undertake, but even thinking about how you would implement it will give you a better understanding of how we use frameworks in upcoming sprints.

// * Implement a way to write your own articles using the Component Constructor and some input fields.
