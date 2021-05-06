import {
    creatSongs
} from "./musicManajer.js"

window.onload = () => {
    init();

}

const init = () => {

    let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=dennis Lloyd";
    doApi(myUrl);
    viewEvents();
}

const viewEvents = () => {
    document.querySelector("#btn").addEventListener('click', () => {
        let valSearch = document.querySelector("#id_input").value;
        let myUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=${valSearch}`;
        doApi(myUrl);
    })
}


const doApi = (_url) => {
    fetch(_url)
        .then(resp => resp.json())
        .then(data => {
            creatSongs(data.data)
        })
}