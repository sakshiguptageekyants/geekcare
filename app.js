const icon = document.querySelector('.fa-bars');
const list = document.querySelector('.list');

document.addEventListener("DOMContentLoaded", function () {
    icon.addEventListener('click', function () {
        icon.classList.toggle("fa-times")
        list.classList.toggle('active');
    })
    icon.addEventListener("click", function () {
        list.classList.toggle("show");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            list.classList.remove("show");
        }
    });
});

/*carousel*/
const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
const radioInputs = document.querySelectorAll('input[type="radio"]');

prevArrow.addEventListener('click', () => {
  const checkedIndex = Array.from(radioInputs).findIndex(input => input.checked);
  const prevIndex = (checkedIndex - 1 + radioInputs.length) % radioInputs.length;
  radioInputs[prevIndex].checked = true;
});

nextArrow.addEventListener('click', () => {
  const checkedIndex = Array.from(radioInputs).findIndex(input => input.checked);
  const nextIndex = (checkedIndex + 1) % radioInputs.length;
  radioInputs[nextIndex].checked = true;
});

// var imgList = document.getElementById('imgList');
//   var scrollRight = document.getElementById('scroll-right');
//   var scrollLeft = document.getElementById('scroll-left');

// // When a user clicks on the right arrow, the ul will scroll 750px to the right
//   scrollRight.addEventListener('click', (event) => {
//     imgList.scrollBy(750, 0);
// });

// // When a user clicks on the left arrow, the ul will scroll 750px to the left
//   scrollLeft.addEventListener('click', (event) => {
//     imgList.scrollBy(-750, 0);
// });