let input = document.getElementById("inputBox");
let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");

function qrGenerator() {
    if (input.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + input.value;
        imgBox.classList.add("shake-img");
    } else {
        input.classList.add("error")
        setTimeout(() => {
            input.classList.remove("error")
        }, 1000)
    }
    input.value = "";
}