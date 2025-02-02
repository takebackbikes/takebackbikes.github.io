const titleimg = "https://cdn.glitch.global/bb39c166-73aa-4eb6-91a2-37e86f975c6b/titleimg.png?v=1737441557702";

const bigNav =
    `<div class="nav">
      <a href="/"><img class="titleimg" loading="lazy" src=${titleimg} /></a>
      <div id="nav-items" class="links">
        <a href="/about.html">about</a>
        <span class="divider">|</span>
        <a href="/illustrations.html">illustrations</a>
        <span class="divider">|</span>
        <a href="/coding.html">coding</a>
      </div>
    </div>`;

const smallNav =  
  `<div>
    <a href="/"><img class="titleimg" loading="lazy" src=${titleimg} /></a>
    <button onClick=useDropDown() class="dropDownButton"> ≡ </button>
  </div>`;

const dropDownNav = 
  `<div class="dropDown">
    <div class="dropDownItem">
      <a href="/about.html">about →</a>
    </div>
    <div class="dropDownItem">
      <a href="/illustrations.html">illustrations →</a>
    </div>
    <div class="dropDownItem">
      <a href="/coding.html"> coding →</a>
    </div>
  </div>`;

let dropDownOn = false;

const useDropDown = () => {
  dropDownOn = true;
  document.querySelector('#navContainer').innerHTML = dropDownNav;
}

const doBigNav= () => {
  document.querySelector('html').style['overflow-y'] = 'visible';
  return bigNav;
}

const doSmallNav = () => {
  document.querySelector('html').style['overflow-y'] = 'visible';
  return smallNav
}

const doDropDownNav = () => {
  document.querySelector('html').style['overflow-y'] = 'hidden';
  return dropDownNav;
}

const renderNav = () => {
  const div = window.innerWidth > 900 ? doBigNav() : dropDownOn ? doDropDownNav() : doSmallNav();
  document.querySelector('#navContainer').innerHTML = div;
};

window.addEventListener("resize", renderNav);


renderNav();