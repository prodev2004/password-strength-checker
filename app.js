// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

const input = document.querySelector('input')
const pwStrengthEl = document.querySelector('.strength')
const indicatorEl = document.querySelector('.indicator')

const colors = ['#ff0000', '#ffe100', '#0bd600']
const texts = ['weak', 'medium', 'strong']

let current_strength = 0

function checker (width, text, background, color) {
    indicatorEl.style.width = width
    indicatorEl.style.background = background
    pwStrengthEl.innerText = text
    pwStrengthEl.style.color = color
}

input.addEventListener('input', () => {
    if (input.value.length <= 8) {
        current_strength = 3
        checker(`${100 / 3}%`, texts[0], colors[0], colors[0])
    } else if (input.value.length <= 15) {
        current_strength = 2
        checker(`${100 / 2}%`, texts[1], colors[1], colors[1])
    } else {
        current_strength = 1
        checker(`${100 / 1}%`, texts[2], colors[2], colors[2])
    }
})

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh

// SUBSCRIBE ==> https://www.youtube.com/channel/UCzWS-AiirxpTDq_AGSg9Fhg
// Join Facebook Group ==> https://www.facebook.com/groups/html.css.javascript.albtechhh