async function load() {
  document.getElementById("year").textContent = new Date().getFullYear();
  try {
    const res = await fetch("projects.json");
    const list = await res.json();
    const root = document.getElementById("projects");
    root.innerHTML = list.map(p => `
      <article class="card">
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
        <p>${p.desc}</p>
        <div class="tags">${(p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      </article>
    `).join("");
  } catch (e) {
    document.getElementById("projects").innerHTML = "<p>Couldn’t load projects.</p>";
    console.error(e);
  }
}
load();
