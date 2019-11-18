function wakeDog(dogName, dogBreed) {
    let task = `Wake ${dogName} the ${dogBreed}`
    console.log(task)
    return task 
}
// const wakeDog = (dogName, dogBreed) => {
//    let task = `Wake ${dogName} the ${dogBreed}`
//    console.log(task)
//    return task 
//}
function leashDog(dogName, dogBreed) {
    let task = `Leash ${dogName} the ${dogBreed}`
    console.log(task)
    return task 
}
function walkToPark(dogName, dogBreed) {
    let task = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(task)
    return task 
}
function throwFrisbee(dogName, dogBreed) {
    let task = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(task)
    return task 
}
function walkHome(dogName, dogBreed) {
    let task = `Walk home with ${dogName} the ${dogBreed}`
    console.log(task)
    return task 
}
function unleashDog(dogName, dogBreed) {
    let task = `Unleash ${dogName} the ${dogBreed}`
    console.log(task)
    return task 
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    let array = routine.map(function(dogTask){
       return dogTask(dogName, dogBreed)
    })
    return array
}

