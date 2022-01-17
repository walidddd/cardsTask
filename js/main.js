
let data = {};
function toLoopDara(){
    for (const customer of data) {
        document.getElementById("cards").innerHTML += `
    <div class=" col col-lg-3">
    <div class="card"> 
      <div class="header-card"><img class="img-card" src="${customer.img}" srcset="">
        <div class="hover"> 
          <button>View</button>
          <button class="edit">Edit</button>
        </div>
      </div>
      <div class="body-card">
        <h4 class="name">${customer.name} </h4>
        <h6>${customer.email}</h6>
        <span class="subtitle">${customer.subtitle}</span>
        <ul> 
          <li><img src="images/icones/Vector.svg"/> <span>${customer.message}</span></li>
          <li><img src="images/icones/Vector-2.svg"/> <span>${customer.gps}</span> </li>
          <li><img src="images/icones/Vector-3.svg"/> <span>${customer.phone}</span> </li>
          <li><img src="images/icones/Vector-4.svg"/> <span>${customer.web}</span> </li>
          <li><img src="images/icones/Vector-5.svg"/> <span>${customer.work}</span> </li>
        </ul>
      </div>
    </div>
  </div>
    `
    }
}
fetch('https://cardslex.netlify.app/js/api.json).then(response => response.json())
.then(customers => {
    data = customers
    toLoopDara()
})
function filterCustomers(){
    let value = document.getElementById("customer").value.toUpperCase();
    let elementAlert = document.getElementById("alert");
    let dataS = data.filter((el)=> {
        return el.name.toUpperCase().includes(value)
    })
    document.getElementById("cards").innerHTML = "";
    if(dataS.length >= 1){
        
        for (const customer of dataS) {
            document.getElementById("cards").innerHTML += `
        <div class=" col col-lg-3">
        <div class="card"> 
          <div class="header-card"><img class="img-card" src="${customer.img}" srcset="">
            <div class="hover"> 
              <button>View</button>
              <button class="edit">Edit</button>
            </div>
          </div>
          <div class="body-card">
            <h4 class="name">${customer.name} </h4>
            <h6>${customer.email}</h6>
            <span class="subtitle">${customer.subtitle}</span>
            <ul> 
              <li><img src="images/icones/Vector.svg"/> <span>${customer.message}</span></li>
              <li><img src="images/icones/Vector-2.svg"/> <span>${customer.gps}</span> </li>
              <li><img src="images/icones/Vector-3.svg"/> <span>${customer.phone}</span> </li>
              <li><img src="images/icones/Vector-4.svg"/> <span>${customer.web}</span> </li>
              <li><img src="images/icones/Vector-5.svg"/> <span>${customer.work}</span> </li>
            </ul>
          </div>
        </div>
      </div>
        `
        elementAlert.classList.add("d-none")

        }
    }else{
        elementAlert.classList.remove("d-none")
        elementAlert.innerHTML = `
        <p>“no customer(${value}) found with the search criteria.”  </p>
        `
    }   
}
/*start sorting */
function showSort(){
    document.getElementById("selected").classList.toggle("show")

}
 function sort(value){
    document.getElementById("title-select").textContent = `Filter by Name ${value}`;
    if(value === "(Z-A)"){
        data.sort((z, a) => {
            let fa = a.name.toLowerCase(),
                fz = z.name.toLowerCase();
            if (fa < fz) {
                return -1;
            }
            if (fa > fz) {
                return 1;
            }
            return 0;
        });
    }
    else{
        data.sort((a, z) => {
            let fa = a.name.toLowerCase(),
                fz = z.name.toLowerCase();
            if (fa < fz) {
                return -1;
            }
            if (fa > fz) {
                return 1;
            }
            return 0;
        });
    }
    document.getElementById("cards").innerHTML= "";
    toLoopDara()
}
