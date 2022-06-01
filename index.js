document.querySelector("form").addEventListener("submit", movieSearch);
var cont = document.querySelector("#cont");

function movieSearch() {
  event.preventDefault();
  cont.innerHTML = null;
  var moviename = document.querySelector("#movie").value;

  var url = `http://www.omdbapi.com/?s=${moviename}&apikey=836238f8`;
  async function getmov() {
    try {
      let res = await fetch(url);
      let movies = await res.json();
      var arr = movies.Search;
      
      Movie(arr);
    } catch (error) {
      console.log(error);
      var Error = document.createElement("img");
      Error.src =
        "https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=20&m=1222806141&s=612x612&w=0&h=GoODCHnR0mSefDBLWJpnqVnfRKH9ttdYPO0-KEYbb7w=";
      document.querySelector("#cont").append(Error);
    }
  }

 function Movie(getmov) {
    getmov.forEach(function (ele) {
      var div = document.createElement("div");
      div.setAttribute("id", "div");
      var img = document.createElement("img");
      img.src = ele.Poster;
      img.setAttribute("id", "image");
      img.setAttribute("alt", "Image Not Found");

      var divtext = document.createElement("div");
      divtext.setAttribute("id", "divtext");
      var divfine = document.createElement("div");
      var name = document.createElement("h2");
      name.innerText = ele.Title;
      name.setAttribute("id", "name");

      var type = document.createElement("h3");
      type.innerText = ele.Type;
      type.setAttribute("id", "type");

      var divfyear = document.createElement("div");
      divfyear.setAttribute("id", "divfyear");
      var year = document.createElement("h3");
      year.innerText = ele.Year;
      year.setAttribute("id", "year");

      var imdb = document.createElement("h3");
      imdb.innerText = "imdbID :" + ele.imdbID;
      imdb.setAttribute("id", "imbd");
      // getimdbid(ele.imdbID);

      divfine.append(name, type);
      divfyear.append(year, imdb);
      divtext.append(divfine, divfyear);
      div.append(img, divtext);

      cont.append(div);
    });
  }
  getmov();
}
