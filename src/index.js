function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;
  let apiKey = "c7toebfcc94abe906b833ab411bc2f1c";
  let prompt = `User instructions: Generate a poem ${instructionsInput}`;
  let context =
    "you are a romantic poem expert and you love writting short poems about love. Your mission is to create a beautiul poem  in Shakesphere style. Donnot include a title to the poem. Line break every sentence with a <br/>. Sign with 'SheCodes AI' make it bold with a <strong></strong> element at the end of the poem. Make sure to include vivid imagery and emotional depth. This poem should only be 5 lines";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="blink">⌛Generating English poem ${instructionsInput}</span>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemForm = document.querySelector("#poem-generator-form");
poemForm.addEventListener("submit", generatePoem);
