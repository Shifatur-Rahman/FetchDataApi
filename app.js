let hello = () => {
  fetch(`https://restcountries.com/v2/all`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

hello();

let box = document.getElementById("box");

let displayData = (data) => {
  for (let item of data) {
    // let list = document.createElement("li");
    // list.classList.add("para");
    // list.innerHTML = `
    //     <p> <img src="${item.flag}" /> </p>
    //     <h3>  ${item.name}  </h3>
    //     <h3> Capital: ${item.capital} </h3>
    //     <h3> Region: ${item.region} </h3>

    // `;
    // box.appendChild(list);
    console.log(item);
  }
};
