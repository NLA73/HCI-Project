function slideNext() {
  const slider = document.getElementById("compact-slider");
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
  if (slider.scrollLeft >= maxScrollLeft - 5) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft += slider.clientWidth;
  }
}

function slidePrev() {
  const slider = document.getElementById("compact-slider");
  if (slider.scrollLeft <= 5) {
    slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
  } else {
    slider.scrollLeft -= slider.clientWidth;
  }
}

function bukaProductPreview(card) {
  const dataGambar = card.querySelector(".product-image img").src;
  const dataNama = card.querySelector(".product-name").innerText;
  const dataHarga = card.querySelector(".product-price").innerText;
  const dataDeskripsi =
    card.getAttribute("data-desc") || "No description available.";

  document.getElementById("productPreviewImg").src = dataGambar;
  document.getElementById("productPreviewName").innerText = dataNama;
  document.getElementById("productPreviewDesc").innerText = dataDeskripsi;
  document.getElementById("productPreviewPrice").innerText = dataHarga;

  document.getElementById("productPreview").classList.add("active");
}

function tutupProductPreview() {
  document.getElementById("productPreview").classList.remove("active");
}

function tutupProductPreviewLuar(event) {
  const wadahProductPreview = document.getElementById("productPreview");
  if (event.target === wadahProductPreview) {
    wadahProductPreview.classList.remove("active");
  }
}

function tambahKeKeranjang() {
  const namaProduk = document.getElementById("productPreviewName").innerText;
  document.getElementById("message").innerText =
    `${namaProduk} successfully added to cart!`;

  const popupMessage = document.getElementById("popupMessage");
  popupMessage.classList.add("tampil");
  document.getElementById("productPreview").classList.remove("active");

  setTimeout(function () {
    popupMessage.classList.remove("tampil");
  }, 3000);
}

function kurangiQty() {
  const qtyInput = document.getElementById("quantity");
  let currentVal = parseInt(qtyInput.value) || 1;
  if (currentVal > 1) {
    qtyInput.value = currentVal - 1;
  }
}

function tambahQty() {
  const qtyInput = document.getElementById("quantity");
  let currentVal = parseInt(qtyInput.value) || 1;
  qtyInput.value = currentVal + 1;
}

function toggleSidebar(event) {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebar-toggle");
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    toggleBtn.innerHTML = "✕";
  } else {
    toggleBtn.innerHTML = "☰";
  }
  event.stopPropagation();
}

function tutupSidebarLuar(event) {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("sidebar-toggle");
  if (sidebar && toggleBtn) {
    if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
      sidebar.classList.remove("active");
      toggleBtn.innerHTML = "☰";
    }
  }
}

function tutupSidebarMobile() {
  if (window.innerWidth < 768) {
    const sidebar = document.getElementById("sidebar");
    const toggleBtn = document.getElementById("sidebar-toggle");
    if (sidebar && toggleBtn) {
      sidebar.classList.remove("active");
      toggleBtn.innerHTML = "☰";
    }
  }
}

const form = document.getElementById("registerForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var dob = document.getElementById("datebirth").value;
  var email = document.getElementById("email").value;
  var pass = document.getElementById("password").value;
  var conPass = document.getElementById("confirm-password").value;
  var maleChecked = document.getElementById("male").checked;
  var femaleChecked = document.getElementById("female").checked;
  var agreement = document.getElementById("agreement").checked;

  if (!name) {
    alert("Name musn't be NULL");
    return false;
  }

  if (!dob) {
    alert("Date of Birth must be filled");
    return false;
  }
  if (!maleChecked && !femaleChecked) {
    alert("Please select your gender");
    return false;
  }
  if (!email) {
    alert("Email must be filled");
    return false;
  }
  if (!email.endsWith("@gmail.com")) {
    alert("Email must use a @gmail.com domain!");
    return false;
  }
  if (!pass) {
    alert("Password must be filled");
    return false;
  }
  if (conPass != pass) {
    alert("Password doesn't match");
    return false;
  }
  if (!pass) {
    alert("Password must be filled");
    return false;
  }
  if (!agreement) {
    alert("You must agree to the Terms and Conditions");
    return false;
  }

  document.getElementById("message").innerText = `Successfully Register!`;

  const popupMessage = document.getElementById("popupMessage");
  popupMessage.classList.add("tampil");
  setTimeout(function () {
    popupMessage.classList.remove("tampil");
    window.location.reload();
  }, 3000);
});

function togglePassword(inputId, toggleBtn) {
  let passInput = document.getElementById(inputId);

  if (passInput.type === "password") {
    passInput.type = "text";
    toggleBtn.innerText = "Hide";
  } else {
    passInput.type = "password";
    toggleBtn.innerText = "Show";
  }
}
