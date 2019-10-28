var menu_elements = Array.from(document.querySelector("nav ul").children);


var item = document.querySelector('body');

window.addEventListener('wheel', function(e) {
    console.log(item.scrollTop)
  if (e.deltaY > 0) item.scrollLeft += 100;
  else item.scrollLeft -= 100;
});

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const scroller = new SweetScroll({
      /* some options */
    });
  },
  false,
);

if  (window.location.href == "https://cristianrodriguez.herokuapp.com/#TheBeginning") {
  console.log("beg");
} else if (window.location.href == "https://cristianrodriguez.herokuapp.com/#TheApproach") {
  console.log("apro");

} else if (window.location.href == "https://cristianrodriguez.herokuapp.com/#TheProjects") {
  console.log("proj");

} else if (window.location.href == "https://cristianrodriguez.herokuapp.com/#Contact") {
  console.log("contac");

} 