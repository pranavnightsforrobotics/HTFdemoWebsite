function show1() {
    /* Get image and change value 
    of src attribute */
    let image = document.getElementById("image1");
    image.src = "/yolo.png"
    document.getElementById("btnID1")
        .style.display = "none";
    
    document.getElementById("image1").style.height = "100px";
}

function show2() {
    /* Get image and change value 
    of src attribute */
    let image = document.getElementById("image2");
    image.src = "/coreml.png"
    document.getElementById("btnID2")
        .style.display = "none";

    document.getElementById("image2").style.height = "100px";
}

function show3() {
    /* Get image and change value 
    of src attribute */
    let image = document.getElementById("image3");
    image.src = "/swift.png"
    document.getElementById("btnID3")
        .style.display = "none";

    document.getElementById("image3").style.width = "100px";
}

function mOut() {
    let text = document.getElementById("hoverText");
    text.innerHTML = "Website by Pranav Neti"
}

function mOver() {
    let text = document.getElementById("hoverText");
    text.innerHTML = "<img class=\"prawnImg\" src=\"pranav.png\">"
}