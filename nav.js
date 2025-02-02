const titleimg = "/static/TBBGreenText.png";

navItems = [
    {
        link: '/#palestine',
        text: 'statement on palestine'
    },
    {
        link: '/#raid',
        text: 'the encampment and raid'
    },
    {
        link: '/#about',
        text: 'about'
    },
    {
        link: "/meet-the-bikes",
        text: 'the bikes'
    },
    {
        link: '/how-to-use-your-bike',
        text: 'how to use'
    },
];

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
    <button onClick=useDropDown() class="dropDownButton"> + </button>
  </div>`;

const getDropDownNav = () => {
    let navItemsDivs = `
    <div class="dropDownItem">
        <a href="/"> home </a>
    </div>`;
    for (const navItem of navItems) {
        navItemsDivs += 
        `<div class="dropDownItem">
            <a onClick=removeDropDown() href="${navItem.link}"> ${navItem.text} </a>
        </div>`
    }
    return `
    <div class="dropDown"> 
        <button onClick=useDropDown() class="dropDownButton"> x </button>
        ${navItemsDivs} 
    </div>`;
};

let dropDownOn = false;

const removeDropDown = () => {
  dropDownOn = false;
  renderNav();
}
const useDropDown = () => {
  dropDownOn = !dropDownOn;
  renderNav();
}

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
  const div = window.innerWidth > 1250 ? doBigNav() : dropDownOn ? doDropDownNav() : doSmallNav();
  if (dropDownOn) {
    document.querySelector('html').style.overflow = "hidden";
  } else {
    document.querySelector('html').style.overflow = "scroll";
  }
  document.querySelector('#navContainer').innerHTML = div;
};

window.addEventListener("resize", renderNav);

renderNav();