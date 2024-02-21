let clock = document.querySelector("#clock");




setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString()
    console.log("hello");
    

},1000)
