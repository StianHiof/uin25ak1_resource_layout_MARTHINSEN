document.addEventListener("DOMContentLoaded", () => {
    // Variabel som henviser til section i HTML. I denne section vil det bli skrevet ut en article
    const listResources = document.getElementById("listResources")
    // Alle buttons i HTML har samme klasse. Alle disse, som da er kategorier, blir lagret i variabel buttons
    const buttons = document.querySelectorAll(".button-script")

    // Funksjon som tester arrayen resources, etter objekter, som er i en ekstern js fil. Og lagrer array/obj. i variabelen filterd
    function displaySelected(category) {
        const filtered = resources.filter(resource => resource.category === category)
        console.log(filtered)

        // Skriver ut data som er lagret i variabelen filtered, til seksjonen med id listResources. Henter ut spesifikk data, 
        // som er relevant å vise i artikkelen.
        listResources.innerHTML = filtered.map(resource =>
            `<article>
                <h2>${resource.category}</h2>
                <p>${resource.text}</p>
                <ul>
                    ${resource.sources.map(source => `
                        <li><a href="${source.url}" target="_blank">${source.title}</a></li>
                     ` ).join('')}
                </ul>
            </article>
            `).join('')

            // Kjører en if test som sjekker om valgt button på siden, har like kategori-navn. Har den det, aktiverer den active
            // i CSS - som edrer farge på fanen. Hvis ikke, forblir fargene de samme. 
            buttons.forEach(button => {
                if (button.dataset.category === category) {
                    button.classList.add("active")
                } else {
                    button.classList.remove("active")
                }
            })
    }
 

    // Kjører funksjonen med parameter HTML, dette vil gjøre at HTML kategorien lastes, når siden oppdateres.
    displaySelected("HTML")

    // Ser igjennom alle kategoriene lagret i buttons, og mellomlagrer i button.Videre registrer den klikk på valgt knapp,
    // og lagrer valgt kategori i variabelen catergory. Til slutt kjører funksjonen displaySelected, med riktig kategori/parameter
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category
            displaySelected(category)
        })
    })

})