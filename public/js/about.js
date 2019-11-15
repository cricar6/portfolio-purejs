var experienceItems = document.querySelectorAll('.experience__container .item');
var itemChanger = document.querySelector('.item__changer');

experienceItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        itemChanger.innerHTML = '-- ' + item.getAttribute('name') + '--';
        experienceItems.forEach(element => {
            element.style.opacity = '.2';
        })
        item.style.opacity = '1';

    });
    
})