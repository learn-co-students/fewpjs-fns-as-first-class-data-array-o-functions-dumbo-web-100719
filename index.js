const wakeDog = ( dogName, dogBreed ) =>{
  let msg = `Wake ${dogName} the ${dogBreed}`
  console.log(msg);
  return msg
}

const leashDog = ( dogName, dogBreed ) =>{
  let msg = `Leash ${dogName} the ${dogBreed}`
  console.log(msg)
  return msg
}

const walkToPark = (dogName, dogBreed) => {
  let msg = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(msg)
  return msg
}


const throwFrisbee = (dogName, dogBreed) =>{
  let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(msg)
  return msg
}


const walkHome = (dogName, dogBreed) =>{
  let msg = `Walk home with ${dogName} the ${dogBreed}`
  console.log(msg)
  return msg
}

const unleashDog = (dogName, dogBreed) =>{
  let msg = `Unleash ${dogName} the ${dogBreed}`
  console.log(msg)
  return msg
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

const exerciseDog = (dogName, dogBreed) => {
  let newRoutine = routine.map(item => item(dogName, dogBreed))
  return newRoutine
}

