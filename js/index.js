let container = document.querySelector(`.albums`);


for(let i = 0; i < albums.length; i++) {
     let album = albums[i]; 
    container.innerHTML += `<div class="mb-3 col-xl-3 col-lg-4 col-md-4 col-xs-6 ">
    <a href="alumChill.html?i=${i}" class="text-decoration-none">
        <div class="card h-100">
        <img src="${album.img}" alt="" class="card-image-top">
        <div class="card-body">
            <p class="card-text">${album.title}</p>
        </div>
    </div>
    </a> 
</div>`
}
    
