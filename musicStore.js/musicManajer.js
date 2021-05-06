import Music from "./musicClass.js"

export const creatSongs = (_ar) => {
    document.querySelector("#id_row").innerHTML = "";
    _ar.map(item => {
        let song = new Music("#id_row", item.title, item.preview, item.rank, item.artist.name, item.artist.picture_medium, item.album.title, item.album.cover_xl)
        song.render();

    })
}