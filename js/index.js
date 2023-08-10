let data = [];

function handleAddProject() {
  let name = document.getElementById("input-name").value;
  let startDate = document.getElementById("date-start").value;
  let endDate = document.getElementById("date-end").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-file").files;
  image = URL.createObjectURL(image[0]);

  let project = {
    name,
    startDate,
    endDate,
    description,
    image,
  };

  data.push(project);
  console.log(data);

  renderProject();
}

function renderProject() {
  document.getElementById("card-project").innerHTML = "";

  for (let i = 0; i < data.length; i++) {
    if (data.length < 1) {
      document.getElementById("card-project").innerHTML = "Project Kosong";
    } else {
      document.getElementById("card-project").innerHTML += `
    <div class="row">
    <img src="${data[i].image}" alt="" />
    <h3>${data[i].name}</h3>
    <p>durasi : 3 bulan</p>
    <p>
      ${data[i].description}
    </p>
    <div class="icon">
      <i class="fa-brands fa-android" style="color: #000000"></i>
      <i class="fa-brands fa-java" style="color: #000000"></i>
    </div>
    <div class="button-group">
      <button>edit</button>
      <button>delete</button>
    </div>
</div>
    `;
    }
  }
}
