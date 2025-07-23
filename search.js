const data = [
    { name: "Passing Drill", link: "./frontend/pages/Passing/content-passing.html#passing" },
    { name: "Possession Drill", link: "./frontend/pages/Possession/content-possession.html#possession" },
    { name: "Pep Guardiola", link: "./frontend/pages/Guardiola/guardiola.html#guardiola" },
    { name: "Xabi Alonso", link: "./frontend/pages/Alonso/alonso.html#alonso" },
    { name: "Roberto De Zerbi", link: "./frontend/pages/De_Zerbi/de_zerbi.html" },
    { name: "Hansi Flick", link: "./frontend/pages/Flick/flick.html#flick" },
    { name: "Cesc Fabregas", link: "./frontend/pages/Fabregas/fabregas.html" },
    { name: "Julian Nagelsmann", link: "../frontend/pages/Nagelsmann/nagelsmann.html" },
    { name: "Coaches", link: "./frontend/pages/coaches.html" },
    { name: "Content of drills", link: "./frontend/pages/content.html" },
    { name: "Training methods", link: "./frontend/pages/Alonso/alonso.html", group: "Xabi Alonso" },
    { name: "Training methods", link: "./frontend/pages/Flick/flick.html#flick", group: "Hansi Flick" }
];

const input = document.getElementById('searchInput');
const results = document.getElementById('searchResults');

function filterData(query) {
    return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
}

function clearResults() {
    results.innerHTML = '';
}


function renderResults(filtered) {
    if (filtered.length === 0) {
        const div = document.createElement('div');
        div.textContent = "Brak wyników.";
        results.appendChild(div);
        return;
    }

    filtered.forEach(item => {
        const div = document.createElement('div');
        
        
        const label = item.group ? ` <span style="color: gray;">(${item.group})</span>` : '';

        div.innerHTML = `<a href="${item.link}" style="text-decoration:none;color:inherit;">${item.name}${label}</a>`;
        div.style.padding = "6px 0";
        results.appendChild(div);
    });
}

input.addEventListener('input', function() {
    const query = this.value.trim();
    clearResults();
    if (query === '') return;
    const filtered = filterData(query);
    renderResults(filtered);
});
