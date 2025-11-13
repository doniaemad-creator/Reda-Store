const scriptURL = "https://script.google.com/macros/s/AKfycbz-8pGSOlRZz3gBnJuZ5SVMUpZ2nXjkJ7t5isxYlBUgu_nBEy6XbmuIwfifrr2DXAdLJw/exec"

let form = document.getElementById("form_contact")

form.addEventListener("submit" , (e) => {
    e.preventDefault()

    fetch(scriptURL , {
        method: "POST",
        body: new FormData(form) ,
})
.then((response) => {
    setTimeout(() => {
                localStorage.removeItem("cart")
        window.location.reload()
    },3000)
})
.catch((error) => console.error("eroor!" , error.message))
})