imgSquare = document.querySelectorAll(".polaroid");


imgSquare.forEach(function(squares){
    squares.addEventListener("click", function(ev) {
        ev.preventDefault();

        let idImg = document.getElementsByClassName("polaroid");
        console.log(idImg);
        
        let ImgId = idImg[0];
        console.log(ImgId);
    })
} 
);