'use strict';
// declaring the objects we would use in our project

var showModelButtons = document.querySelectorAll('.show-modal');
var hidden = document.querySelector('.hidden');
var close = document.querySelector('.close-modal');
var overlay = document.querySelector('.overlay');
// Adding buttons event
for (var i = 0; i < showModelButtons.length ; i++){
  
  showModelButtons[i].addEventListener('click', function(event){
    removingHiddenClass();
    console.log(event)

  })
}
// adding close symbol event
close.addEventListener('click', function(){
  addingHiddenClass();
})

// adding the overlay an event

overlay.addEventListener('click', function(){
  addingHiddenClass();
})

// using esc key to close show models

document.addEventListener('keydown', function(event){
  if (event.key == 'Escape'){
    addingHiddenClass()
  }
})

function addingHiddenClass(){
  hidden.classList.add('hidden')
  overlay.classList.add('hidden')
}

function removingHiddenClass(){
  hidden.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
