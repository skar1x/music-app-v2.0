let container = document.querySelector(`.album_open`);

let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
// готово! i это нужное нам число

let album = albums[i];
if(!album){
    container.innerHTML = `ERROR, редирект на главную страницу через 3 секунды`;
    setTimeout(function() {
        window.location.pathname = `C:/Users/79198/Desktop/music-app-v0.1/index.html`;  
    }, 3000);
}else{
        container.innerHTML += `
<div class="card mb-3">
                    <div class="row">
                        <div class="col-md-4 col-ms-12">
                            <img src="${album.img}" alt="" class="img-fluid rounded-start h-100">
                        </div>
                        <div class="col-md-8 col-ms-12">
                            <div class="card-body">
                                <h5 class="card-title">${album.title}</h5>
                                <p class="card-text">${album.description}</p>
                                <p class="card-text"><small class="text-muted">Выпущен в ${album.year} году</small></p>
                            </div>
                        </div>
                    </div>
                </div>
`


let playlist = document.querySelector(`.playlist`)
let tracks = album.tracks;

for(let j = 0; j < tracks.length; j++){
    let track = tracks[j];
    playlist.innerHTML += `
    <li class="list-group-item d-flex align-items-center mb-2">
                        <img src="${track.img}" alt="" class="me-3 " height="42px">
                        <div>
                         <div>${track.title}</div>
                        <div class="text-secondary">${track.author}</div>   
                        </div>
                        <div class="ms-auto">${track.time}</div>
                    </li>
    `

}
}