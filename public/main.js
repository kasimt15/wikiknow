async function loadListing(){
    try{
         let response = await fetch(`https://attackontitanapi.herokuapp.com/api/titans/`); //1. Send http request and get response
         let results = await response.json();//2. Get data from response
        displayListing(results);// 3. DO something with the data
     }catch(e){
           console.log (e);//catch and log any errors
     }
}
loadListing();

function displayListing(titan){

     let result = document.querySelector('#main');

    //add html code inside of result
    let html = '';// create html string
        //build html string
        html += `<article>
        <h1>ABOUT EREN YEAGER</h1>
        <p>
            ${titan.description}
        </p>
        <div>
            <img src=${titan.picture_url}>
            <p>${titan.description}</p>
            <p> ${titan.height_m}</p>
        </div>
    </article>`;


    result.innerHTML = html;//add html string to DOM
}