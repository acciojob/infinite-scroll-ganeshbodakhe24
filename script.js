// script.js

const infi_list = document.getElementById("infi-list");
let count = 1;

// Add 10 items by default
function loadInitialItems() {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement("li");
    li.textContent = "List " + count++;
    infi_list.appendChild(li);
  }
}
loadInitialItems();

// Add 2 more items when reached end
function addMoreItems() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement("li");
    li.textContent = "List " + count++;
    infi_list.appendChild(li);
  }
}

// Check if scrolled to bottom of list
function isAtBottom() {
  return infi_list.scrollTop + infi_list.clientHeight >= infi_list.scrollHeight;
}

infi_list.addEventListener("scroll", () => {
  if (infi_list.scrollTop + infi_list.clientHeight >= infi_list.scrollHeight - 5) {
    addMoreItems();
  }
});

