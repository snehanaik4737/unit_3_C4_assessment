async function apiCall(url) {

try{
let res= await fetch(url);
let data = await res.json();
return data;

}
catch(err){
 console.log(err);
}
    //add api call logic here


}


function appendArticles(articles, main) {
  let cart=[];
 articles.forEach(element => {
     

    let div = document.createElement("div");
    div.setAttribute("id","box")

     div.onclick=()=>{
      cart.push(element);
      localStorage.setItem("article",JSON.stringify(cart));
      window.location.href="news.html";


     }



    let image= document.createElement("img");
    image.src= element.urlToImage
    console.log(image);
     

    let para =document.createElement("p");
   // para.innerText=element.source.title; 
   para.innerText="Headline: "+element.title;
   console.log(para);

   let para2=document.createElement("p");
   para2.innerText="Description: "+element.description;   


    div.append(image,para,para2);
    main.append(div);
     
     
 });
   
  //  add append logic here

}


function appendnews(data,parent){

    data.forEach(element => {

        let div = document.createElement("div");
        div.setAttribute("id","newsbox")

        let div1 = document.createElement("div");
        div1.setAttribute("id","fdiv")

       let image= document.createElement("img");
       image.src= element.urlToImage;


       div1.append(image);

       let div2=document.createElement("div");
       div2.setAttribute("id","sdiv")

      
       let para =document.createElement("p");

       para.innerText=element.content;

     div2.append(para);

   div.append(div1,div2);

   parent.append(div);


    });     

}



export { apiCall, appendArticles, appendnews }