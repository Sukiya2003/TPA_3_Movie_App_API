let apiKey = "3c3ac7000007e4238f66d62779043774";
let col = document.getElementsByClassName("col")[0];

let getData = async () => {
    let response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1`
    );
    let movie = await response.json();
    let print = "";
    movie.results.forEach((item) => {
        console.log(item);
        // PRINT CARD MOVIE
        print += `<div class="card mb-3">
                    <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" alt="">
                    <div class="card-body">
                        <div class="flex-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.vote_average}</p> 
                        </div>
                        <div class="card-footer bg-transparent">
                            <p class="card-text"><small class="text-muted">${item.release_date}</small></p>
                        </div>
                    </div>
            </div>`;
        col.innerHTML = print;
    });
};

getData();

let form = document.getElementsByClassName("d-flex")[0];
let input = document.getElementsByClassName("form-control")[0];

let dataSearch = async (inputUser) => {
    let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${inputUser}&page=1`
    );
    let movie = await response.json();
    let print = "";
    movie.results.forEach((item) => {
        console.log(item);
        print += `<div class="card mb-3">
               <img src="https://image.tmdb.org/t/p/original/${item.poster_path}" class="card-img-top" alt="">
              <div class="card-body">
                <div class="flex-body">
                  <h5 class="card-title">${item.title}</h5>
                  <p class="card-text">${item.vote_average}</p> 
                </div>
                <p class="card-text"><small class="text-muted">${item.release_date}</small></p>
              </div>
              </div>`;
        col.innerHTML = print;
    });
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputUser = input.value;
    dataSearch(inputUser);
    form.reset();
});
