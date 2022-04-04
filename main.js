let divcontainer = document.querySelector('#containerbox')
let divcontainer2 = document.querySelector('#containerbox2')
let divcontainer3 = document.querySelector('#containerbox3')
let divcontainer4 = document.querySelector('#containerbox4')
let imgs = document.getElementById('imgs');
let leftBtn = document.getElementById('left');
let rightBtn = document.getElementById('right');


let img = document.querySelectorAll('#imgs img');

let idx = 0;

function changeImg() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 300}px)`
}

rightBtn.addEventListener('click', function change() {
    idx++;
    resetInter();
    changeImg()
})
leftBtn.addEventListener('click', function change() {
    idx--;
    resetInter();
    changeImg()
})

let interval = setInterval(run, 10000000);

function run() {
    idx++;

    changeImg();
}

function resetInter() {
    clearInterval(interval);
     interval = setInterval(run, 10000000);

}


stories.forEach(function (stories) {
  let newLi = document.createElement('li')
  newLi.innerHTML = `<video width="100%" height="100%" controls>
  <source src="${stories.storiesvideo}" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video>
<div class="info__user">~
  <div class="info__user-left">
  <img class="user__img" src="img/avatar.jpg" alt="">
  <p class="username">asaxiy</p>
  <span class="userclock">19hr</span>
  </div>
  <div class="info__user-right">
    <i class='bx bxs-downvote' style='color:#ffffff' ></i>
    <i class='bx bx-volume-full' style='color:#ffffff' ></i>
    <i class='bx bx-dots-horizontal-rounded' style='color:#ffffff' ></i>
  </div>
</div>
<form >
  <input class="send__message" type="text" placeholder="Reply to ">
  <i class='bx bx-send'></i>
</form>`
divcontainer.appendChild(newLi)
divcontainer2.appendChild(newLi)
divcontainer3.appendChild(newLi)
divcontainer4.appendChild(newLi)
});