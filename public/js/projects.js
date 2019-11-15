projectsArray = document.querySelectorAll('.project');
console.log(projectsArray);

positionsArrayTop = [];
positionsArrayLeft = [];

projectsArray.forEach(element => {
    const maxW = 3;
    const minW = 2;
    const width = (Math.random() * (maxW - minW + 1) + minW) *100;

    /*
    const maxT = window.innerHeight - width - 40;
    const minT = 40;
    let top = randomBetween(minT, maxT);
    let defTop = checkSimilarity(positionsArrayTop, top, randomBetween(minT, maxT));

    */
    const topArray= [100,200,300]
    let topIndex = Math.floor(randomBetween(0, 4));
    console.log(topIndex)
    defTop = topArray[topIndex]
    
    const leftArray= [100,200,300,400,500,600,700 ]
    let leftIndex = Math.floor(randomBetween(0, 5));
    console.log(leftIndex)
    defLeft = leftArray[topIndex]

/*    const maxL = window.innerWidth - width - 40;
    const minL = 40;
    const left = (Math.random() * (maxL - minL + 1) + minL);
    positionsArrayLeft.push(left);
*/
    //element.style.top= 'calc('+'100vh'+ ' - ' + width + 'px'+ ' - ' + '40px'+')';
   element.style.width= width+'px';
   element.style.height= width+'px';
   element.style.top= defTop+'px';
   element.style.left= defLeft+'px';
   
});


function randomBetween(min, max) {
  return (Math.random() * (max - min + 1) + min)
}
