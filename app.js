const main = document.querySelector("#main");
const image = document.querySelector("#page>img");

main.addEventListener("mousemove", function(dets) {
    // console.log(dets.x, dets.y);
    // we subtract the image by -1 to tell when we move the mouse to right it goes left and vice-versa to every direction
    image.style.top = `${1- dets.y * 0.05}px` /* this movement for y-axis with a time delay of 0.05s  */
    image.style.left = `${1- dets.x * 0.05}px` /* this movement for x-axis with a time delay of 0.05s  */
})