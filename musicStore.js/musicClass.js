class Music {
    constructor(_parent, _title, _preview, _rank, _artist, _img, _album) {
        this.parent = _parent,
            this.title = _title,
            this.preview = _preview,
            this.rank = _rank,
            this.artist = _artist,
            this.img = _img,
            this.album = _album;
    }


    render() {
        let newDiv = document.createElement("div");
        newDiv.className = " newDiv col-lg-6 ";
        document.querySelector(this.parent).append(newDiv);

        newDiv.innerHTML = `
           <h2 class="text-light"> ${this.title}</h2> 
           <img src=${this.img} class= "w-25 mr-2 float-left">
           <p >Artist: ${this.artist}</p>
           <p>Rank: ${this.rank}</p>
           <audio controls
           src="${this.preview}" id="audio"></audio>
           `
    }
}
export default Music;