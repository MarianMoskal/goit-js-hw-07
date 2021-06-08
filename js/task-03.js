'use strict';

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imageList = document.querySelector('#gallery');

    images.forEach(image => {
        const { url, alt }  = image;
        imageList.insertAdjacentHTML(
            'beforeend',
            `<li><img src=${url} alt='${alt}'
            width = 420 height = 350</li>`
        );
    
    });

imageList.classList.add('gallery');

    
console.log(imageList);






// const createElements = images => {
//     return images.map(image => {
//         const { url, alt }  = image;
//         const itemEl = document.createElement('li');
//         const imgEl = document.createElement('img');
//         // console.log(imgEl);
//         imgEl.src = url;
//         imgEl.alt = alt;
//         imgEl.width = 420;
//         imgEl.height = 350;
        
//         // itemEl.insertAdjacentElement('afterbegin', imgEl);
        
//         itemEl.insertAdjacentHTML('afterbegin', imgEl);
//         return itemEl;
//     });
// };


// const items = createElements(images);

// imageList.prepend(...items);

// imageList.classList.add('gallery');

    
// console.log(imageList);





















