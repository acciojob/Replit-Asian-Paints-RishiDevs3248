//your JS code here. If required.

let items = document.querySelectorAll('.grid-item')

let changebutton = document.getElementById('change_button')
let reset = document.getElementById('reset_button')

changebutton.addEventListener("click", () => {
	items.forEach((cell)=>{
		cell.style.backgroundColor='transparent'
	})
	let ipid = document.getElementById('block_id').value
	let ipco = document.getElementById('colour_id').value

	let changeCell = document.getElementById(`${ipid}`)
	changeCell.style.backgroundColor=ipco
})

reset.addEventListener("click", () => {
	items.forEach((cell)=>{
		cell.style.backgroundColor='transparent'
	})
})