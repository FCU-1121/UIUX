function showBMI() {
    let pname = document.forms["bmi"]["pname"].value;
    let h = parseFloat(document.forms["bmi"]["height"].value) / 100;
    let w = parseFloat(document.forms["bmi"]["weight"].value);
    // console.log(h, w);
    if (pname == "") {
      alert("Name is required");
      return;
    }

    bmi = w / (h * h);
    bmi = bmi.toFixed(2);

    newBMIstr = "<br>" + pname + ": " + bmi.toString();
    document.getElementById("p-all").innerHTML += newBMIstr;

    if (bmi > 25) {
      document.getElementById("p-over-w").innerHTML += newBMIstr;
    }
    if (bmi < 18.5) {
      document.getElementById("p-under-w").innerHTML += newBMIstr;
    }
  }


function generateweight() {
    let options = "";

    for(let value = 30; value <= 300; value++) {
        const option = `<option value='${value}'>${value}</option>`;
        options += option;
    }   

    const select_container = document.querySelector('#weight');
    select_container.innerHTML = options;
}


function generateheight() {
    let options = "";

    for(let value = 100; value <= 250; value++) {
        const option = `<option value='${value}'>${value}</option>`;
        options += option;
    }

    const select_container = document.querySelector('#height');
    select_container.innerHTML = options;
}

generateweight();
generateheight();


