// // const parentContainer = document.querySelector("#container");

// // const paragraphTag = document.createElement("p");
// // paragraphTag.setAttribute("style", "color: red;")
// // paragraphTag.textContent = "Hey I'm red!";
// // parentContainer.appendChild(paragraphTag);

// // const headingTag = document.createElement("h3");
// // headingTag.setAttribute("style", "color: blue");
// // headingTag.textContent = "I'm a blue h3";
// // parentContainer.append(headingTag);

// // const pinkContainer = document.createElement("div");
// // pinkContainer.setAttribute("style", "background-color: pink; border: 2px solid black");
// // parentContainer.appendChild(pinkContainer);

// // const secondHeadingTag = document.createElement("h1");
// // secondHeadingTag.textContent = "I'm in a div";
// // pinkContainer.appendChild(secondHeadingTag);

// // const secondPTag = document.createElement("p");
// // secondPTag.textContent = "ME TOO!";
// // pinkContainer.appendChild(secondPTag);

// // const btn = document.querySelector("#btn");
// // btn.addEventListener("click", (e) => {
// //   e.target.style.background = "blue";
// // })

// function highlight(elem) {
//   const bgColor = 'yellow';

//   elem.style.backgroundColor = bgColor;

//   let event = new CustomEvent('mark', {
//     detail: {
//       backgroundColor: bgColor
//     }
//   });

//   elem.dispatchEvent(event);
// }

// let div = document.querySelector('.note');

// function addBorder(elem){
//   elem.style.border = 'solid 1px red';
// }

// div.addEventListener('mark',function (e) {
//   addBorder(this);
//   console.log(e.detail);
// })

// highlight(div);

