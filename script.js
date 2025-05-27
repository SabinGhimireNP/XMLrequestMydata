const url = "https://api.github.com/users/SabinGhimireNP";
const button = document.getElementById("getData");
const resultDiv = document.getElementById("result");
const xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(this.responseText);
    const btn = document.getElementById("btn");
    const image = document.querySelector(".image");
    btn.addEventListener("click", () => {
      const card = document.getElementById("card");
      const btnDiv = document.getElementById("btnDiv");
      console.log("pressed");
      btnDiv.remove();
      btn.style.display = "none";
      card.style.display = "block";
      document.querySelector(".name").innerHTML = `${data.name}`;
      document.querySelector(
        ".following"
      ).innerHTML = `Following:${data.following}`;
      document.querySelector(
        ".repo"
      ).innerHTML = `Repositories: ${data.public_repos}`;
      image.innerHTML = `<img src="${data.avatar_url}" alt="Image">`;
    });
  }
};
xhr.send();
