let indexValue = 1;

const img = document.querySelectorAll("img")
const sliders = document.querySelectorAll(".btm-slider span")

console.log(sliders)

const btmSlide = (e) =>{
  return   showing(indexValue = e)
}

const sideSlide = (e) =>{
  return  showing(indexValue += e)
}

const showing = (e) => {
    
   

    if(e > img.length){indexValue = 1}
    if(e < 1){indexValue = img.length}

    for(let i = 0; i < img.length; i++){
        img[i].style.display = "none"
    }

    for(let i = 0; i < sliders.length; i++){
        sliders[i].style.background = "rgba(255,255,255,0.4)"
    }
    img[indexValue -1].style.display = "block"
    sliders[indexValue -1].style.background ="white"
}

showing(indexValue)

