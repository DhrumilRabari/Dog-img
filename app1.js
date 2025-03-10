let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("#show");

btn.addEventListener("click", async () => {
    let image = await getDog();
    let img = document.querySelector("#result")

    img.setAttribute("src", image);

})


async function getDog() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch (err) {
        console.log("Error : ", err);
        return "You are Not Beautiful."
    }
}