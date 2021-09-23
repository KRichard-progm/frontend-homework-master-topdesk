function joke() {
    fetch("https://api.chucknorris.io/jokes/random"
    )
        .then(response =>
            response.json()
        )
        .then(data => {
            console.log("data", data);
            document.getElementById('joke').innerHTML = data.value;
            const img = document.querySelector("img");
            img.src = "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSse3HRtpkCj3MlSv2lJ_bXfCe2voXMtGle8-0pC6DgtO8LjdoDImaH_sJDssSIE45CdOIIJMGr_d1fwjmLhso";
            if (!data.ok) {
                throw Error(data.statusText)
            } else {
                return data;
            }
        })
        .catch(error => {
            console.log(error)
        })
}
