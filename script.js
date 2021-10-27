"use strict"

let dogs=[]

dogs.push({name:"Fluffy",Breed:"Poodle",picture:"/Images/Fluffy",age:1})
dogs.push({name:"Otto",Breed:"Chihuahua",picture:"/Images/Otto",age:2})
dogs.push({name:"Alfie",Breed:"French Bulldog",picture:"/Images/Alfie", age:3})
dogs.push({name:"Perkins",Breed:"American Bulldog",picture:"/Images/Perkins", age:4})
dogs.push({name:"Tyson",Breed:"Rottweiler",picture:"/Images/Tyson", age:5})
dogs.push({name:"Rocky",Breed:"German Shepherd",picture:"/Images/Rocky", age:6})

// add an 'Adopt Now' button on each dog

for(let i=0;i<dogs.length;i++){

    let card = document.createElement("div")
    document.body.appendChild(card)

    document.getElementById("cardholder").
    appendChild(card)

    let dogName=document.createElement("h1")
    card.appendChild(dogName)
    dogName.innerHTML=dogs[i].name


    let dogBreed = document.createElement("h2")
    card.appendChild(dogBreed)
    dogBreed.innerHTML=dogs[i].Breed

    card.classList.add("card")

    let dogPic = document.createElement("img")
    dogPic.classList.add("dogPic")
    card.appendChild(dogPic)
    dogPic.src=dogs[i].picture + ".jpg"

    let adopt= document.createElement("button")
    adopt.innerHTML= "Adopt now"
    card.appendChild(adopt)
    adopt.classList.add("adopt")





}

