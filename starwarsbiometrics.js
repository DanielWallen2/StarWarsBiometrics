
const ctrl = document.querySelector('#q-name');
const enterBtn = document.querySelector('#enter');
const eUid = document.querySelector('#uid');
const eLable = document.querySelector('#c-lable');
const eName = document.querySelector('#c-name');
const eDescription = document.querySelector('#description');
const propLable = document.querySelector('#property');
const output = document.querySelector('#output');

enterBtn.addEventListener('click', function() {

    if(ctrl.value === '') return;

    let uri = 'https://www.swapi.tech/api/people/?name=';

    uri += ctrl.value;
    ctrl.value = '';

    fetch(uri)
        .then(res => res.json())
        .then(data => makeOutput(data))

});

function makeOutput(data) {

    const resLen = Number.parseInt(data.result.length)
    if(resLen === 0) {
        output.innerHTML = 'No match found'
        return
    }
    
    const props = data.result[0].properties

    const uid = data.result[0].uid
    const name = props.name
    const description = data.result[0].description

    eUid.innerText = `Id: ${uid}`
    eLable.innerText = 'Namn: '
    eName.innerText = `${name}`
    eDescription.innerText = `Description: ${description}`
    propLable.innerText = 'Egenskaper:'

    let html = '', br = '', propName = '', propValue = '';
    Object.entries(props).map(prop => {

        if(prop[0] !== 'name') {

            propName = prop[0].replace(/_/g, '-')
            propName = propName[0].toUpperCase() + propName.slice(1).toLowerCase()
            propValue = prop[1][0].toUpperCase() + prop[1].slice(1).toLowerCase()

            html += br + `${propName}: ${propValue}`
            br = '\n'
        }
        
    })
    output.innerHTML = html

}
