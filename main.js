  addBtn.addEventListener("click", () => {
    overlay.style.height = "100vh";
  });
  closebtn.addEventListener("click", () => {
    overlay.style.height = "0vh";
    window.location.reload();
  });
  createBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (
      firstname.value.trim() == "" ||
      lastname.value.trim() == "" ||
      phone.value.trim() == "" ||
      loc.value.trim() == "" ||
      email.value.trim() == "" ||
      photo.value.trim() == ""
    ) {
      alert("Enter Data!!!");
    } else if (
      !email.value.trim().includes("@") ||
      !email.value.trim().includes(".") ||
      email.value.trim().length < 6
    ) {
      alert("Enter correct email");
    } else if (!photo.value.trim().includes("http")) {
      alert("Enter correct URL!!!");
    } else if (phone.value.trim().length < 7) {
      alert("Enter correct Phone number!!!");
    } else {
      let user = person();
      localStorage.setItem(`${user.email}`, JSON.stringify(user));
      $trambon.innerHTML = "";
      checkStorage();
    }
  });
  let $details = document.querySelector(".details"),
    $trambon = document.querySelector(".gg");
  
  function checkStorage() {
    $trambon.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
      let user = JSON.parse(localStorage.getItem(localStorage.key(i)));
      addCard(user);
    }
  }
  checkStorage();
  let $deleteButton = document.querySelectorAll(".jumbotron button"),
    userEmail = document.querySelectorAll(".workEmail");
  for (let i = 0; i < $deleteButton.length; i++) {
    $deleteButton[i].addEventListener("click", () => {
      localStorage.removeItem(`${userEmail[i].textContent}`);
      checkStorage();
      window.location.reload();
    });
  }
  function addCard(user) {
    $trambon.insertAdjacentHTML(
      "afterbegin",
      `<div class="row mt-2 jumbotron">
        <div class="img col-md-4 col-xs-12 col-sm-6 col-lg-4" style="background-image: url('${user.photo}');">
        </div>
      <div class="col-md-8 col-xs-12 col-sm-6 col-lg-8">
      <div class="container" style="border-bottom:1px solid black">
        <h2>${user.firstname} ${user.lastname}</h2>
        
      </div>
      <ul class="container details">
        <li><p><i class="fas fa-phone-alt"></i><a href="tel:+" >${user.phone}</a></p></li>
        <li><p><i class="fas fa-envelope"></i><a class='workEmail' href="mailto:">${user.email}</a> </p></li>
        <li><p><i class="fas fa-map-marker-alt"></i><a href="#">${user.location}</a></p></li>
      </ul>
  </div>
  <button class="delete btn btn-primary mt-4"><i class="fas fa-trash-alt"></i></i></button>
  </div>
  `
    );
  }
  function person() {
    return {
      firstname: firstname.value.trim(),
      lastname: lastname.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      location: loc.value.trim(),
      photo: photo.value.trim(),
    };
  }
  
