const picker = document.getElementById('picker')
let last = null;
let drawing = true;

picker.addEventListener('change', () => {picker.blur();});
document.addEventListener('keydown', (ev) => {if(ev.key == 'f'){picker.focus(); picker.click();}});

function add(x, y){
  const newdiv = document.createElement('div');
  document.body.appendChild(newdiv);
  newdiv.style.position = 'absolute';
  newdiv.style.backgroundColor = 'gray';
  newdiv.style.height = '1%';
  newdiv.style.width = '1%';
  newdiv.style.left = `${x}%`;
  newdiv.style.bottom = `${y}%`;
  if(last != null && drawing == true){last.style.backgroundColor = picker.value;}else if(last != null){last.style.opacity = '0%';}
  last = newdiv;
}

add(25, 25);

document.addEventListener('keydown', (ev) => {
  switch (ev.code) {
    case 'ArrowUp':
        add(parseInt(last.style.left), parseInt(last.style.bottom) + 1);
      break;
    case 'ArrowDown':
        add(parseInt(last.style.left), parseInt(last.style.bottom) - 1);
      break;
    case 'ArrowLeft':
        add(parseInt(last.style.left) - 1, parseInt(last.style.bottom));
      break;
    case 'ArrowRight':
      add(parseInt(last.style.left) + 1, parseInt(last.style.bottom));
      break;
    case 'Space':
      drawing = !drawing;
      last.style.backgroundColor = 'gray';
      if (drawing == false){
        document.getElementById('toggle').innerText = 'off';
      }else {
        document.getElementById('toggle').innerText = 'on';
      }
      break;
  }
})