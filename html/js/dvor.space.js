
function addAnimation(classname) {
  const cl = document.getElementsByClassName(classname);
  Array.from(cl).forEach((e) =>{
    e.style.animationDuration = '0.7s';
    e.style.animationTimingFunction = 'linear';
  });
}

function removeAnimation(classname) {
  const cl = document.getElementsByClassName(classname);
  Array.from(cl).forEach((e) =>{
    e.style.animationDuration = '3s';
    e.style.animationTimingFunction = 'ease';
  });
}


document.addEventListener("DOMContentLoaded", function() {
  const animator = document.getElementsByClassName('animator');
  Array.from(animator).forEach((e) =>{
    e.addEventListener('mouseover',()=>{
      addAnimation('bubble1');
    })
  });
  Array.from(animator).forEach((e) =>{
    e.addEventListener('mouseout',()=>{
      removeAnimation('bubble1');
    })
  });
});
