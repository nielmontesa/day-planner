const addButton = document.querySelector("#addButton");
const sections = document.querySelectorAll(".sections");
const plannedContainer = document.querySelector(".plannedSection");
const finishedSection = document.querySelector(".finishedSection");
const input = document.querySelector("#taskInput");
const selectButton = document.querySelectorAll(".selectButton");

removeMessage = () => {
  if (finishedSection.querySelector("h1")) {
    finishedSection.innerHTML = "";
    finishedSection.style.alignContent = "flex-start";
  }
};

message = () => {
  if (plannedContainer.childElementCount == 0) {
    plannedContainer.style.alignContent = "center";
    plannedContainer.innerHTML = `<h1>This is where all your planned tasks will go!
                <br>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </h1>`;
  }
  if (finishedSection.childElementCount == 0) {
    finishedSection.style.alignContent = "center";
    finishedSection.innerHTML = `<h1>This is where all your finished tasks will go!
                <br>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            </h1>`;
  }
};

message();

for (let button of selectButton) {
  button.addEventListener("click", () => {
    message();
    for (let i = 0; i < selectButton.length; i++) {
      selectButton[i].classList.remove("activeButton");
    }
    button.classList.add("activeButton");

    if (selectButton[1].classList.contains("activeButton")) {
      sections[1].classList.remove("hidden");
      sections[0].classList.add("hidden");
    }
    if (selectButton[0].classList.contains("activeButton")) {
      sections[0].classList.remove("hidden");
      sections[1].classList.add("hidden");
    }
  });
}

addButton.addEventListener("click", () => {
  if (plannedContainer.querySelector("h1")) {
    plannedContainer.innerHTML = "";
    plannedContainer.style.alignContent = "flex-start";
  }
  const taskName = input.value;
  const card = document.createElement("div");
  card.classList.add("card", "planned");
  const title = document.createElement("p");
  title.innerText = taskName;
  card.appendChild(title);
  const trash = document.createElement("button");
  const finish = document.createElement("button");

  trash.setAttribute("onclick", "this.parentNode.remove();message();");
  finish.setAttribute(
    "onclick",
    "removeMessage();finishedSection.appendChild(this.parentNode);message();"
  );
  trash.innerHTML = `<svg class="w-6 h-6 buttonOne" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                        </path>
                    </svg>`;

  finish.innerHTML = `<svg class="w-6 h-6 buttonTwo" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>`;
  trash.classList.add("trash");
  finish.classList.add("finish");
  card.appendChild(trash);
  card.appendChild(finish);

  plannedContainer.appendChild(card);
  input.value = "";
});
