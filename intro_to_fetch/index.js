// console.log("Hello World")
/*
let url="https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49"

fetch(url) // the fetch method is available to us in the browser and we supply at least a url and it will kick off a "GET" request to that url
.then(res => res.json()) // .then can be chained on a fetch to allow us to take a response and do something with it 
.then(json => {  // In this case I have used the json data to display in the console
    console.log(json)
    console.log(json.title) // These logs are unique to the json that we got back and only work on this objects structure
    console.log(json.locations) 
    console.log(json.director)
})

console.log(json)

/*
BASIC fetch usage

fetch(<url>)
    .then(<cb to process the data>)
    .then(<cb to use the data>)

 */   

const baseURL = "https://ghibliapi.herokuapp.com"

fetch(baseURL + "/films")
    .then(res => res.json())
    .then(json => {
        //console.log(json)
        let myArr = json.map(film => {
        return {
            title: film.title,
            rt_score: Number(film.rt_score)
        }
    }).sort((cur, prev) => prev.rt_score - cur.rt_score)

    displayResults(myArr)
})

function displayResults(films) {
    console.log("Hello from diplay results", films)
    let filmList = document.getElementById("film-list")
    films.map(film => {
        let filmLi = document.createElement('li')
        filmLi.innerText = `${film.title } ${film.rt_score}`
        filmList.appendChild(filmLi)
    })
}