//! 1

// const changeButtonText = () => {
//     const input = document.getElementById("input").value;
//     const button = document.getElementById("button");
//     button.textContent = input;
// }

// document.getElementById("button").addEventListener("click", changeButtonText);

//! 2


// const image = document.getElementById("image");
// image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRauJ6evjDqOODiZ0VkSH0AGIh3ko7BfCTB2g&s"; 
// console.log(image);

//! 3


// const image2 = document.getElementById("image2");
// image2.alt = "this is a dog"; 
// console.log(image2);
// const link = document.getElementById("link");
// link.href = "https://www.instagram.com/";
// console.log(link);

//! 4

// const list = document.getElementById("list");
// const child = list.firstElementChild;
// child.textContent = 'giraffe';
// console.log(child.textContent);




//!!! DOM(2)


//! 1


    // const categories = document.querySelectorAll('#categories > li');
    // console.log(`У списку ${categories.length} категорії.`);
    
    // categories.forEach(category => {
    //     const title = category.querySelector('h2').textContent;
    //     console.log(`Категорія: ${title}`);
    
    //     const itemsCount = category.querySelector('.item').children.length;
    //     console.log(`Кількість елементів: ${itemsCount}`);
    // });
    


//! 2

// const ingredients = [
//     'Картопля',
//     'Гриби',
//     'Часник',
//     'Помідори',
//     'Зелень',
//     'Приправи',
//    ];

// const listIngredients = document.getElementById('ingredients')

// const items = ingredients.map(ingredient => {
//     const li = document.createElement('li')
//     li.textContent = ingredient;
//     return li;
// });

// listIngredients.append(...items);
// console.log(listIngredients);

//! 3

// const images = [
//     {
//      url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'White and Black Long Fur Cat',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//     },
//     {
//      url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//      alt: 'Group of Horses Running',
//     },
//    ];

//    const gallery = document.getElementById('gallery');

//    const galleryItems = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}"></li>`).join('');

//    gallery.insertAdjacentHTML('beforeend', galleryItems);

//! 4

let counterValue = 0;
let valueSpan = document.getElementById('value');
let decrementButton = document.querySelector('button[data-action="decrement"]');
let incrementButton = document.querySelector('button[data-action="increment"]');

function increment() {
  counterValue += 1;
  changeCounter();
}

function decrement() {
  counterValue -= 1;
  changeCounter();
}

function changeCounter() {
  valueSpan.textContent = counterValue;
}

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);