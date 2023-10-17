function getFox(){
    fetch("https://randomfox.ca/floof/")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        displayImage(data.image)
    }).catch((err)=>console.log("error",err));
}

function displayImage(image){
    document.getElementById("image").src = image;

}