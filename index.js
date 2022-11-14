const timer = Number(prompt("Jaký chcete nastavit odpočet v sekundách? ")) * 1000

const alarmElm = document.querySelector('.alarm')
const audioElm = document.querySelector('audio')
const buttonElm = document.querySelector('.buttonStop')

const timeIsUp = () => {
	alarmElm.classList.add('alarm--ring')
	audioElm.play()
}

const timerId = setTimeout(timeIsUp, timer)

buttonElm.addEventListener('click', () => {
	clearTimeout(timerId)
	buttonElm.textContent = 'Zastaveno'
})