let students = [];

const nameSelector = document.querySelector(".enter-name");
const emailSelector = document.querySelector(".enter-email");
const phoneSelector = document.querySelector(".enter-phone");
const addressSelector = document.querySelector(".enter-address");
const genderSelector = document.querySelector(".enter-gender");
const saveButtonSelector = document.querySelector(".save");
const searchSelector = document.querySelector(".search");
const searchButtonSelector = document.querySelector(".enter");
const sortButtonSelector = document.querySelector(".apha-b");
const studentListSelector = document.querySelector(".studentList tbody");

saveButtonSelector.addEventListener("click", function () {
  const nameValue = nameSelector.value;
  const emailValue = emailSelector.value;
  const phoneValue = phoneSelector.value;
  const addressValue = addressSelector.value;
  const genderValue = genderSelector.value;

  const student = {
    name: nameSelector.value,
    email: emailSelector.value,
    phone: phoneSelector.value,
    address: addressSelector.value,
    gender: genderSelector.value,
  };

  students.push(student);

  nameSelector.value = "";
  emailSelector.value = "";
  phoneSelector.value = "";
  addressSelector.value = "";

  displayStudents();
});

function displayStudents() {
  studentListSelector.innerHTML = "";

  students.forEach(function (student, index) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Sửa</button>
        <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
    studentListSelector.appendChild(row);
  });
}

searchButtonSelector.addEventListener("click", function () {
  const keyword = searchSelector.value.toLowerCase();

  const filteredList = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(keyword) ||
      student.email.toLowerCase().includes(keyword) ||
      student.phone.toLowerCase().includes(keyword) ||
      student.address.toLowerCase().includes(keyword) ||
      student.gender.toLowerCase().includes(keyword)
    );
  });

  displayFilteredStudents(filteredList);
});

function displayFilteredStudents(filteredList) {
  studentListSelector.innerHTML = "";

  filteredList.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.email}</td>
      <td>${student.phone}</td>
      <td>${student.address}</td>
      <td>${student.gender}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">Sửa</button>
        <button class="delete" onclick="deleteStudent(${index})">Xóa</button>
      </td>
    `;
    studentListSelector.appendChild(row);
  });
}
sortButtonSelector.addEventListener("click", function () {
  students.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  displayStudents();
});

function deleteStudent(index) {
  students.splice(index, 1);

  displayStudents();
}

function editStudent(index) {
  const student = students[index];

  nameSelector.value = student.name;
  emailSelector.value = student.email;
  phoneSelector.value = student.phone;
  addressSelector.value = student.address;
  genderSelector.value = student.gender;

  deleteStudent(index);
}
