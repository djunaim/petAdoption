console.log('pet adoption');

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const petCollection = [
    {
        image: 'https://i.pinimg.com/originals/78/1b/e6/781be6cd01b8cb5736a7c8d8e5465f28.jpg',
        name: 'snuggle butt',
        color: 'grey',
        specialSkill: 'praying',
        typeOfPet: 'cat',
    },
    {
        image: 'https://i.pinimg.com/originals/9a/87/44/9a8744953a24fa0f179d9b1d51851fb3.jpg',
        name: 'buddy',
        color: 'beige',
        specialSkill: 'run really fast',
        typeOfPet: 'dog',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/378800000458901170/e097eee3baa875b4b32458c41cf68ab2.jpeg',
        name: 'little foot',
        color: 'brown',
        specialSkill: 'fighting for justice',
        typeOfPet: 'dino',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCQy6URu6KiIopYaTKsU3gXgM6kom_PUVTfNVwgjdIpTnbK5Q9g',
        name: 'pie',
        color: 'tri-color',
        specialSkill: 'being cute',
        typeOfPet: 'dog',
    },
    {
        image: 'http://search.lostpetusa.net/petimages/256/69479d5b-df04-49eb-ae13-f2f1d89defdc.jpg',
        name: 'chuck',
        color: 'black',
        specialSkill: 'being fluffy',
        typeOfPet: 'cat',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/378800000439852386/f00e96c61439e60b1c2ba4590f9afb28.jpeg',
        name: 'sabrina',
        color: 'black',
        specialSkill: 'snuggles',
        typeOfPet: 'cat',
    },
]

const choosePet = (mammals) => {
    // created empty string to build card on. Have to be outside of for loop so that whenever arrays are concatenating the string isn't restarted as blank
    let group = '';
    // fot loop that will keep going as long as it is smaller than the length of the array, goes up by 1
    for (let i=0; i < mammals.length; i++) {
    // declared an empty box to put each object in
        const selectMammal = mammals[i];
    // concatenates to emptry string
        group += `
        <div class='buildMammal'>
            <h3>${selectMammal.name}</h3>
            <img src='${selectMammal.image}' alt="">
            <p>${selectMammal.color}</p>
            <p>${selectMammal.specialSkill}</p>
            <p class='type'>${selectMammal.typeOfPet}</p>
        </div>
        `
    }
    // outside of the for loop so that it only prints once after it finishes concatenating, instead of printing each card every time it gets added to empty string
    printToDOM(group, 'petGroup');
}

const buttonClick = (e) => {
    // figure out animal from button we click on
    // selects id of button click and assign to empty variable
    const petID = e.target.id;
    // filter animal to what we want
    // declare variable for empty array to push array into
    const selectedPet = [];
    // 
    for (let i=0; i < petCollection.length; i++) {
        const pet = petCollection[i];
        if (petCollection[i].typeOfPet === petID) {   
            selectedPet.push(pet);
        }
    }
    // pass list into empty container to print out
    choosePet(selectedPet);
}

document.getElementById('cat').addEventListener('click', buttonClick);
document.getElementById('dog').addEventListener('click', buttonClick);
document.getElementById('dino').addEventListener('click', buttonClick);

// choosePet(petCollection);

