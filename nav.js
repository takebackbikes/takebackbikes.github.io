const titleimg = "/static/TBBGreenText.png";
let dropDownOn = false;
const navItems = [
    {
        link: '/#palestine',
        text: 'On Palestine'
    },
    {
        link: '/#raid',
        text: 'The Raid'
    },
    {
        link: '/#about',
        text: 'About'
    },
    {
        link: "/meet-the-bikes",
        text: 'The Bikes'
    },
    {
        link: '/how-to-use-your-bike',
        text: 'How to Use'
    },
];

const changeDropDown = () => {
  dropDownOn = !dropDownOn;
  console.log('button pressed!');
  renderNav();
}

const getBigNav = () => {
    let navItemsDivs = "";
    for (const navItem of navItems) {
        navItemsDivs += 
        `<a href=${navItem.link}> ${navItem.text} </a>
        <span class="divider">|</span>`
    }

    return `
    <div class="bigNav">
        <div>
            <a href="/"><img class="titleimg" loading="lazy" src=${titleimg} /></a>
        </div>
        <div id="bigNavItems">
            ${navItemsDivs}
        </div>
    </div>`;
}

const smallNav =  
  `<div class="smallNav">
    <a href="/"><img class="titleimg" loading="lazy" src=${titleimg} /></a>
    <button onclick="changeDropDown()" class="dropDownButton"> ☰ </button>
  </div>`;

const getDropDownNav = () => {
    let navItemsDivs = `
    <div class="dropDownItem">
        <a href="/"> Home </a>
    </div>`;
    for (const navItem of navItems) {
        navItemsDivs += 
        `<div class="dropDownItem">
            <a onclick="changeDropDown()" href="${navItem.link}"> ${navItem.text} </a>
        </div>`
    }
    return `
    <div class="dropDown"> 
      <button onclick="changeDropDown()" class="dropDownButton"> x </button>
      <div class="dropDownItems">
        ${navItemsDivs} 
      </div>
    </div>`;
};

const doBigNav = () => {
  return getBigNav();
}

const doSmallNav = () => {
  return smallNav;
}

const doDropDownNav = () => {
  return getDropDownNav();
}

const renderNav = () => {
  console.log('dropDownis:', dropDownOn);
  const div = window.innerWidth > 1115 ? doBigNav() : dropDownOn ? doDropDownNav() : doSmallNav();
  if (dropDownOn) {
    document.querySelector('html').style['overflow-y'] = "hidden";
  } else {
    document.querySelector('html').style['overflow-y'] = "scroll";
  }
  document.querySelector('#navContainer').innerHTML = div;
};

window.addEventListener("resize", renderNav);

renderNav();