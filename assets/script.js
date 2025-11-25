// Load navbar
fetch("./components/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });

// Load homepage hero + form
fetch("./components/homepage.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("homepage").innerHTML = data;
  });
