document.getElementById("fetchJokeBtn").addEventListener("click", () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  // Show loading text
  document.getElementById("joke").innerHTML = "<p>Fetching a joke...</p>";

  fetch(url)
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerHTML = `
        <p><b>Setup:</b> ${data.setup}</p>
        <p><b>Punchline:</b> ${data.punchline}</p>
      `;
    })
    .catch(error => {
      console.error("Error fetching joke:", error);
      document.getElementById("joke").innerHTML = "<p>Error fetching joke 😅</p>";
    });
});
