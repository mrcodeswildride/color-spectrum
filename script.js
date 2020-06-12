let rgbForRed = document.getElementById(`rgbForRed`)
let greenSliderForRed = document.getElementById(`greenSliderForRed`)
let blueSliderForRed = document.getElementById(`blueSliderForRed`)
let redSpectrum = document.getElementById(`redSpectrum`)

let rgbForGreen = document.getElementById(`rgbForGreen`)
let redSliderForGreen = document.getElementById(`redSliderForGreen`)
let blueSliderForGreen = document.getElementById(`blueSliderForGreen`)
let greenSpectrum = document.getElementById(`greenSpectrum`)

let rgbForBlue = document.getElementById(`rgbForBlue`)
let redSliderForBlue = document.getElementById(`redSliderForBlue`)
let greenSliderForBlue = document.getElementById(`greenSliderForBlue`)
let blueSpectrum = document.getElementById(`blueSpectrum`)

greenSliderForRed.addEventListener(`input`, makeRed)
blueSliderForRed.addEventListener(`input`, makeRed)

redSliderForGreen.addEventListener(`input`, makeGreen)
blueSliderForGreen.addEventListener(`input`, makeGreen)

redSliderForBlue.addEventListener(`input`, makeBlue)
greenSliderForBlue.addEventListener(`input`, makeBlue)

makeRed()
makeGreen()
makeBlue()

function makeRed() {
  redSpectrum.innerHTML = ``

  for (let i = 0; i < 256; i++) {
    let sliver = document.createElement(`div`)
    sliver.classList.add(`sliver`)
    sliver.style.backgroundColor = `rgb(${i}, ${greenSliderForRed.value}, ${blueSliderForRed.value})`

    sliver.addEventListener(`mouseover`, showRgbForRed)
    sliver.addEventListener(`mouseout`, hideRgbForRed)

    redSpectrum.appendChild(sliver)
  }
}

function makeGreen() {
  greenSpectrum.innerHTML = ``

  for (let i = 0; i < 256; i++) {
    let sliver = document.createElement(`div`)
    sliver.classList.add(`sliver`)
    sliver.style.backgroundColor = `rgb(${redSliderForGreen.value}, ${i}, ${blueSliderForGreen.value})`

    sliver.addEventListener(`mouseover`, showRgbForGreen)
    sliver.addEventListener(`mouseout`, hideRgbForGreen)

    greenSpectrum.appendChild(sliver)
  }
}

function makeBlue() {
  blueSpectrum.innerHTML = ``

  for (let i = 0; i < 256; i++) {
    let sliver = document.createElement(`div`)
    sliver.classList.add(`sliver`)
    sliver.style.backgroundColor = `rgb(${redSliderForBlue.value}, ${greenSliderForBlue.value}, ${i})`

    sliver.addEventListener(`mouseover`, showRgbForBlue)
    sliver.addEventListener(`mouseout`, hideRgbForBlue)

    blueSpectrum.appendChild(sliver)
  }
}

function showRgbForRed() {
  rgbForRed.innerHTML = this.style.backgroundColor
}

function hideRgbForRed() {
  rgbForRed.innerHTML = `Loop through red values`
}

function showRgbForGreen() {
  rgbForGreen.innerHTML = this.style.backgroundColor
}

function hideRgbForGreen() {
  rgbForGreen.innerHTML = `Loop through green values`
}

function showRgbForBlue() {
  rgbForBlue.innerHTML = this.style.backgroundColor
}

function hideRgbForBlue() {
  rgbForBlue.innerHTML = `Loop through blue values`
}