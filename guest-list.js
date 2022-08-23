let guests = [];
const input = document.querySelector('input[name="full-name"]');
document.querySelectorAll('button').forEach((button) => {
button.addEventListener('click', (e) => {
  e.preventDefault();
  switch (e.target.name) {
    case "push":
      guests.push(input.value);
      break;
    case "unshift":
      guests.unshift(input.value);
      break;
    case "shift":
      guests.shift();
      break;
    case "pop":
      guests.pop();
      break;
    case "reverse":
      const reversedArray = guests.reverse();
      guests = reversedArray;
      break;
    }
  window.localStorage.setItem('guests', JSON.stringify(guests);
  updateGuests();
})});

function updateGuests() {
  if (document.querySelector("body > main > div.guestsss > ol")) {
  document.querySelector("body > main > div.guestsss > ol").remove();
  }
  const guestsOl = document.createElement("ol");
  guests.forEach((guest) => {
  const singleGuest = document.createElement("li");
  oneGuest.textContent = guest;
  guestsOl.appendChild(singleGuest);
  });
  document.querySelector('.guestsss').appendChild(guestListOl);
}

  window.addEventListener("load", () => {
  if (window.localStorage.getItem('guests')) {
  const guestsData = JSON.parse(window.localStorage.getItem("guests"));
  guestList = guestListData;
  updateGuestList();
}});