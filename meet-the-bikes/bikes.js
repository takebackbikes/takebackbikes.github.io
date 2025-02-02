const bikeContainer = document.querySelector("#bikeRack");
const bikes = [
    {
        name: 'Sticky',
        pronouns: 'it/she',
        img: '../static/bikes/sticky-itshe.jpg',
        description: 'black bike with red and green tape',
        notes: '',
        combination: '37,23,37',
        funfact: ''
    },
    {
        name: 'Pants',
        pronouns: 'they/she',
        img: '../static/bikes/pants-theyshe.jpg',
        description: 'purple bike with black milk crate',
        notes: '',
        combination: '37,23,37'
    },
    {
        name: 'Lilo',
        pronouns: 'any',
        img: '../static/bikes/lilo-any.png',
        description: 'copper bike with black milk crate and Palestinian flag painted on the side',
        notes: 'use back pedal to brake!',
        combination: '00,10,24'
    },
    {
        name: 'Sandy',
        pronouns: 'she/her',
        img: '../static/bikes/sandi-sheher.png',
        description: 'off-white bike with blue milk crate and flowers painted on the side',
        notes: '',
        combination: '06,12,34'
    },
    {
        name: 'Peapod',
        pronouns: 'he/it',
        img: '../static/bikes/peapod.png',
        description: `green with red paint and 'free the people' written on the side`,
        notes: ''
    },
    {
        name: 'Clifford',
        pronouns: 'any',
        img: '../static/bikes/clifford.png',
        description: `red with letters on the side, and black milk crate`,
        notes: ''
    },
    {
        name: 'Lola',
        pronouns: 'they/them',
        img: '../static/bikes/lola.png',
        description: `curly yellow handle bars and 'free palestine' written on body`,
        notes: ''
    },
    {
        name: 'Lalo',
        pronouns: 'they/them',
        img: '../static/bikes/lalo.png',
        description: `'white and yellow bike with palestine' on front wheel, 'tbb' on body and keffiyeh pattern painted on, too!`,
        notes: ''
    },
    {
        name: 'Neely',
        pronouns: 'any',
        img: '../static/bikes/neely.png',
        description: `pink and white bike with flowers painted on`,
        notes: ''
    },
    {
        name: 'Roxy (MacGyver',
        pronouns: 'they/them',
        img: '../static/bikes/roxy.png',
        description: `yellow bike with 'hands off palestine' written on the side`,
        notes: ''
    }
];

function getbikeDivInnerHTML(bike, num) {
    const noteView = bike.notes === '' 
      ? '' 
      : `<div>
          <span class="coral">NOTE:</span> ${bike.notes}
        </div>`;
    return `
        <h3> bike #${num}: <span class="bike-title">${bike.name}</span> (${bike.pronouns}) </h3>
        <div>
            <div>
                <img src="${bike.img}">
            </div> 
            <div>
            description: ${bike.description}
            </div>
            ${noteView}
            <button id="${bike.name}-button" class='unclicked'>
            click to reveal ${bike.name}'s code
            </button>
        </div>
        <hr>
    `;
}

function renderBikes() {
    for (let i = 0; i < bikes.length; i++ ) {
        const bike = bikes[i];
        const bikeDiv = document.createElement("div");
        bikeDiv.classList.add("bike");
        bikeDiv.id = bike.name;
        bikeDiv.innerHTML = getbikeDivInnerHTML(bike, i + 1);
        bikeContainer.appendChild(bikeDiv);
        document.querySelector('#'+bike.name+'-button').onclick = function revealCode() {
           document.querySelector('#'+bike.name+'-button').innerHTML = `lock combination: ${bike.combination}`;
        }
    }
}

renderBikes();
