var menu_elements = Array.from(document.querySelector("nav ul").children);


var item = document.querySelector('body');

window.addEventListener('wheel', function(e) {
    console.log(item.scrollTop)
  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});
