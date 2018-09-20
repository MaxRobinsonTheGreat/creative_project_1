var pictures = [
    {
        src : "Living_room.jpg",
        name : "Living Room"
    },
    {
        src : "kitchen.jpg",
        name : "Kitchen"
    },
    {
        src : "bathroom_1.jpeg",
        name : "Bathroom"
    },
    {
        src : "bedroom.jpg",
        name : "Bedroom"
    },
];

var image, left_button, right_button;
var cur_index = 0;
window.onload = function(){ 
    image = document.getElementById("tour-image");
    left_button = document.getElementById("left-button");
    right_button = document.getElementById("right-button");
    left_button.onclick = function(){
        setImage(getLeftImage());
    };
    right_button.onclick = function(){
        setImage(getRightImage());
    };
};

function setImage(img_info){
    left_button.innerHTML = getLeftImage().name;
    getRightImage();
    right_button.innerHTML = getRightImage().name;
    getLeftImage();
    image.src = "./img/"+img_info.src;
}

function getRightImage(){
    cur_index++;
    if(cur_index >= pictures.length){
        cur_index = 0;
    }
    return pictures[cur_index];
}

function getLeftImage(){
    cur_index--;
    if(cur_index < 0){
        cur_index = pictures.length-1;
    }
    return pictures[cur_index];
}