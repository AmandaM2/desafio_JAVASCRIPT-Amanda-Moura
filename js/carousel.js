

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, uri){
        this.image = image;
    }

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const carrouselElement = document.getElementById("carousel");
        const titleElement = document.getElementById("carousel-title");

        if(!carrouselElement || !titleElement){
            console.error("Elementos do carrossel não encontrados!");
            return
        }
            const item = Carousel._arr[Carousel._sequence];

            carrouselElement.style.backgroundImage = `url(projeto/img/${item.image})`;
            carrouselElement.style.backgroundPosition = "center";
            carrouselElement
    }
};
