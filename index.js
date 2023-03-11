const body = document.body
const ratingState = document.querySelector(".rating-state")
const thankYouState = document.querySelector(".thank-you-state")
const submitButton = document.querySelector(".submit")
const rate = document.querySelector(".ratings")
var rating;


if (rating == null) {
    thankYouState.style.visibility = "hidden"
}

// to change style as use clicks number i.e select
function selectedNumber (element) {
    element.style.backgroundColor = "hsl(25, 97%, 53%)"
    element.style.color = "hsl(0, 0%, 100%)"
    return true
}

// deselect and revert style
unselectNumber = (element) => {
    element.style.backgroundColor = "hsl(210, 19%, 18%)"
    element.style.color = "hsl(217, 12%, 63%)"
    return false
}

let selected = false
// choose our rating
for (let i of rate.children) {
    i.addEventListener("click", () => {
        i.style.cursor = "pointer"
        //  deselect previously selected numbers
        for (let i of rate.children) {
            unselectNumber(i)
        }

        selected = selectedNumber(i)
        rating = i.textContent
    })
}

// submit rating when we have one
submitButton.addEventListener("click", () => {
    submitButton.style.backgroundColor = "hsl(0, 0%, 100%)"
    submitButton.style.color = "hsl(25, 97%, 53%)"
    submitButton.style.cursor = "pointer"
    if (rating != null) {
        const selection = document.getElementById("mySpan")
        selection.textContent = rating
        ratingState.style.visibility = "hidden"
        thankYouState.style.visibility = "visible"
    }
})