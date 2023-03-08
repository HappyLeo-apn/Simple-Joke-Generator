const getJokeBtn = document.querySelector("#btn");
const apiKey = "ycb2flzVuLVRXCCZ2pZq4g==j1vAKwbKjzvmfAio";
let jokeTextP = document.querySelector("#jokeText");
var limit = 1;
function getJokes(){
    jokeTextP.innerHTML = "updating";
   
   
    
        $.ajax({
            method: "GET",
            url: "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
            headers: {'X-Api-Key' : "ycb2flzVuLVRXCCZ2pZq4g==j1vAKwbKjzvmfAio"},
            contentType: "application/json",
            success: function(result) {
                
                let joke_text = result[0].joke;
                console.log(joke_text);
                jokeTextP.innerHTML = joke_text;
    
            },
             error: function ajaxError(jqXHR) {
                 console.error(jqXHR.responseText)
                 jokeTextP.innerHTML = "Error Occured";
             }
        });
        
    
        
    
   
}

getJokeBtn.addEventListener('click', getJokes)