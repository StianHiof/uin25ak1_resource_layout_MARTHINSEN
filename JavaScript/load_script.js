document.addEventListener("DOMContentLoaded", () => {
    const listResources = document.getElementById("listResources")
    const buttons = document.querySelectorAll(".button-script")

    function displaySelected(category) {
        const filtered = resources.filter(resource => resource.category === category)

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

            buttons.forEach(button => {
                if (button.dataset.category === category) {
                    button.classList.add("active")
                } else {
                    button.classList.remove("active")
                }
            })
    }
 

    displaySelected("HTML")

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.dataset.category
            displaySelected(category)
        })
    })

})