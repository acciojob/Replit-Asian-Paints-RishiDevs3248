//your JS code here. If required.

let items = document.querySelectorAll('.grid-item')

let changebutton = document.getElementById('change_button')
let reset = document.getElementById('Reset')

changebutton.addEventListener("click", () => {
	items.forEach((cell)=>{
		cell.style.backgroundColor='transparent'
	})
	let ipid = document.getElementById('block-id').value
	let ipco = document.getElementById('colour-id').value

	let changeCell = document.getElementById(`${ipid}`)
	changeCell.style.backgroundColor=ipco
})

reset.addEventListener("click", () => {
	items.forEach((cell)=>{
		cell.style.backgroundColor='transparent'
	})
})