const outerWheel = document.querySelector('.outer-wheel');
const innerWheel = document.querySelector('.inner-wheel');
const centerWheel = document.querySelector('.wheel-center');
const hideWheel = document.querySelector('.hide-wheel');
const container = document.querySelector('.container')
const box = document.querySelector('.box')
let key = document.querySelector('.key');
const body = document.querySelector('body')

let counter = 0

key.addEventListener('input', function(e){
  let key = e.target.value
  outerWheel.style.transform = `translate(-50%, -50%) rotate(0deg)`
  innerWheel.style.transform =  `translate(-50%, -50%) rotate(${key * 13.84615}deg)`
  centerWheel.style.transform = `translate(-50%, -50%) rotate(0deg) rotate(${key * -13.84615}deg)`
  counter = key
})