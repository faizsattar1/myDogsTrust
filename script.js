"use strict"

let dogs=[]
function setupDogs (){

dogs.push(new Dog("Fluffy","Poodle","/Images/Fluffy","Age:1"))
dogs.push(new Dog("Otto","Chihuahua","/Images/Otto","Age:2"))
dogs.push(new Dog("Alfie","French Bulldog","/Images/Alfie", "Age:3"))
dogs.push(new Dog("Perkins","American Bulldog","/Images/Perkins", "Age:4"))
dogs.push(new Dog("Tyson","Rottweiler","/Images/Tyson", "Age:5"))
dogs.push(new Dog("Rocky","German Shepherd","/Images/Rocky", "Age:6"))
}
// add an 'Adopt Now' button on each dog
function showDogs () {
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
}

class Dog{

constructor(name, Breed, picture, age){
    
    this.name = name
    this.Breed = Breed
    this.picture = picture + ".jpg"
    this.age = age
}


}

setupDogs ()
showDogs ()