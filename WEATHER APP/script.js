const getweather=()=>{
    let inp=document.getElementById('input-btn');  
    let v=inp.value;
    const options = {
    method: 'GET',
    headers: {
    'X-RapidAPI-Key': '0159d73bc7msh8039c0c8b90a17bp1d3294jsn9bd57a9b8b30',
    'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
   }
};
 fetch(`https://open-weather13.p.rapidapi.com/city/${v}`, options)
.then(response => response.json())
.then(response =>{
console.log(response)
document.getElementById('input-name').innerHTML=`${v}`
document.getElementById('temp').innerHTML=`temp:${response.main.temp}`;
document.getElementById('min-temp').innerHTML=`mintemp:${response.main.temp_min}`;
document.getElementById('max-temp').innerHTML=`maxtemp:${response.main.temp}`;
})
.catch(err => console.error(err));

}
const BTN=document.getElementById('search-btn');
BTN.onclick=()=>getweather();

const reset=document.getElementById('reset');
reset.addEventListener('click',(e)=>{
document.getElementById('input-btn').innerHTML='enter city';
document.getElementById('input-name').innerHTML="";
document.getElementById('temp').innerHTML="TEMP--";
document.getElementById('min-temp').innerHTML="min temp--";
document.getElementById('max-temp').innerHTML="max temp--";

})