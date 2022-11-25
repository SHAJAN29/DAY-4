 let request =new XMLHttpRequest();
  console.log(request)
 request.open("GET","https://restcountries.com/v3.1/all")
 console.log(request.open("GET","https://restcountries.com/v3.1/all"));
 request.send();
request.onload=function(){

 let data =request.response

let result =JSON.parse(data)




 console.log(result)

for(let index of result)
   {

    console.log("name : ",index.name.common.concat(",region : ",index.region).concat(",subregion : ",index.subregion).concat(",population : ",index.population))
 }





 for(let index of result){

     console.log(index.flags.svg)
 }











}
console.log(result[0].name.common);

 for(let i=0;i<result.length;i++){

         console.log(result[i].flag)
 console.log(result[i].name.common);
    }


 for(let obj of result){
     console.log("name :",obj.name.common.concat(" ,region: ",obj.region).concat(" ,subregion: ",obj.subregion));


}




let person1={

    name:"shajan",
    age:"23"
    
    }
    let person2={
        
        age:"23",
        name:"shajan"
    }
    console.log(JSON.stringify(person1));