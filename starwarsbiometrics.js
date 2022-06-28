


let output = document.querySelector('#output');
const enterBtn = document.querySelector('#enter');
const ctrl = document.querySelector('#name');

enterBtn.addEventListener('click', function() {

    if(ctrl.value === '') return;

    let uri = 'https://www.swapi.tech/api/people/?name=';

    uri += ctrl.value;
    ctrl.value = '';

    console.log(uri)

    fetch(uri)
        .then(res => res.json())
        .then(data => {
            
            console.log(data.message);
            console.log(data.result);
            console.log(data);

            const resLen = Number.parseInt(data.result.length)
            if(resLen === 0) {
                output.innerHTML = 'No match found'
                return
            }
            
            let prop = data.result[0].properties
            console.log(prop)

            const uid = data.result[0].uid
            const name = prop.name
            const description = data.result[0].description
            const gender = prop.gender
            const height = prop.height
            const mass = prop.mass
            const skinColour = prop.skin_color
            const hairColour = prop.hair_color
            const eyeColour = prop.eye_color
            const homeWorld = prop.homeworld

            output.innerHTML = `Id: ${uid}\n` +
                `Name: ${name}\nDescription: ${description}\nGender: ${gender}\nHeight: ${height}\nMass: ${mass}\n` +
                `Skin-colour: ${skinColour}\nHair-colour ${hairColour}\nEye-colour: ${eyeColour}\n` +
                `Home Planet: ${homeWorld}`

        })
        // .catch(error => console.log('Error: ' + error))
});








// function getApi() {
    
//     /*Skriv din kod här*/
    
//     fetch(uri)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             // output.innerHTML += data;
//         })
//         .catch(err => console.log(err))

// }



// if(ctrl.value === '') return;

//     uri += ctrl.value;

//     getApi();

    
//     ctrl.value = '';