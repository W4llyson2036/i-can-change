let divs = document.getElementById("container").getElementsByTagName('div');

const themes = [
  {
    "dark-red-0": "#70012B",
    "dark-red-1": "#5D0124",
    "dark-red-2": "#4B011D",
    "dark-red-3": "#380116",
    "dark-red-4": "#25000E",
    "dark-red-5": "#130007",
    "dark-red-6": "#000000"
  },
  {
    "light-red-0": "#E65763",
    "light-red-1": "#C14A54",
    "light-red-2": "#9C3D45",
    "light-red-3": "#773036",
    "light-red-4": "#522226",
    "light-red-5": "#2D1517",
    "light-red-6": "#2D1517"
  }
];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let upd_theme = 0;
let changes_theme = ['dark-red', 'light-red'];

async function from_top_bottom() {
  for (let increase_index=0; increase_index<=divs.length-1; increase_index++) {
    divs[increase_index].style.display = 'none';
    divs[increase_index].style.opacity = 9;
    await delay(120);
  }

  from_bottom_top();
}

async function from_bottom_top() {
  for (let decrease_index = divs.length-1; decrease_index >=0; decrease_index--) {
    divs[decrease_index].style.display = 'block';
    divs[decrease_index].style.backgroundColor = aplay_theme(upd_theme, changes_theme[upd_theme], decrease_index);
    await delay(120);
  }
  
  upd_theme++
  from_top_bottom();
}

function aplay_theme(po, name, index) {
  if (po > themes.length-1) {
    po = 0;
    upd_theme = 0;
  }

  return `${themes[po][`${name}-${index}`]}`;
}

document.addEventListener('DOMContentLoaded', from_top_bottom);