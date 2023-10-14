const weight_result = document.querySelector('#weight-result');
const height_result = document.querySelector('#height-result');
let weight = 0, height = 0;

let alert_message = document.querySelector('.alert-message');
let bmi_number = document.querySelector('.bmi-number');

let person_list = ""; // string type to innerHTML
let all_person = document.querySelector('.all-person');

const message = [
  ["過輕", "yellow"],
  ["適中", "green"],
  ["過重", "red"]
];


const weight_select_container = [
  document.querySelector('#weight0'),
  document.querySelector('#weight1'),
  document.querySelector('#weight2')
];

const height_select_container = [
  document.querySelector('#height0'),
  document.querySelector('#height1'),
  document.querySelector('#height2')
];

function showBMI() {
  let name = document.querySelector('#pname').value;

  if(name == "") {
    alert('請輸入名字');
    return;
  } else if(weight == 0) {
    alert('請輸入體重');
    return;
  } else if(height == 0) {
    alert('請輸入身高');
    return;
  }

  height /= 100;
  const bmi = Math.round((weight / (height * height)) * 100) / 100;
  bmi_number.innerHTML = `<p>${bmi}</p>`;

  let idx = 1;

  if(bmi < 18.5) {
    idx = 0;
  } else if(bmi > 24) {
    idx = 2
  }

  alert_message.innerHTML = `<p>${message[idx][0]}</p>`;
  alert_message.style.backgroundColor = message[idx][1];

  let person_info = `<li><div class="username">${name}</div><div class="bmi-value">${bmi}</div><div class="alert-message" style="background-color:${message[idx][1]}">${message[idx][0]}</div></li>`;
  person_list = person_info + person_list;

  all_person.innerHTML = "<p>All person</p>" + person_list;
  
  weight = weight_result.innerHTML = 0;
  height = height_result.innerHTML = 0;
  
  // 初始化
  generateheight();
  generateweight();
  document.querySelector('#pname').value = "";

  return;
}


function CurVal(sel) {
  return parseFloat(sel[0].value) * 100 + parseFloat(sel[1].value) * 10 + parseFloat(sel[2].value);
}

for(let i = 0; i < 3; i++) {
  weight_select_container[i].addEventListener('change', ()=>{
    weight = weight_result.innerHTML = CurVal(weight_select_container);
  })

  height_select_container[i].addEventListener('change', ()=>{
    height = height_result.innerHTML = CurVal(height_select_container);
  })
}



function generateweight() {
  let options = "<option value=0>百位</option>";
  let idx = 0;
  for(let value = 0; value <= 5; value++) {
      const option = `<option value='${value}'>${value}</option>`;
      options += option;
  }
  weight_select_container[idx++].innerHTML = options;
  options = "<option value=0>十位</option>";
  for(let value = 0; value <= 9; value++) {
    const option = `<option value='${value}'>${value}</option>`;
    options += option;
  }
  weight_select_container[idx++].innerHTML = options;
  options = "<option value=0>個位</option>";
  for(let value = 0; value <= 9; value++) {
    const option = `<option value='${value}'>${value}</option>`;
    options += option;
  }
  weight_select_container[idx++].innerHTML = options;
  return;
}


function generateheight() {
  let options = "<option value=0>百位</option>";
  let idx = 0;
  for(let value = 0; value <= 2; value++) {
      const option = `<option value='${value}'>${value}</option>`;
      options += option;
  }
  height_select_container[idx++].innerHTML = options;
  options = "<option value=0>十位</option>";
  for(let value = 0; value <= 9; value++) {
    const option = `<option value='${value}'>${value}</option>`;
    options += option;
  }
  height_select_container[idx++].innerHTML = options;
  options = "<option value=0>個位</option>";
  for(let value = 0; value <= 9; value++) {
    const option = `<option value='${value}'>${value}</option>`;
    options += option;
  }
  height_select_container[idx++].innerHTML = options;
  return;
}

generateweight();
generateheight();


