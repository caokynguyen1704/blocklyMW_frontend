//Lệnh console F12 để tạo nhanh chuỗi tag
let get_block = Object.keys(Blockly.Blocks);

function placeBlockInToCategory(name_category, get_block) {
	let txt = ""
	for (let str of get_block) {
		if (str.search(name_category + "_") == 0) {
			txt = txt + `<block type="${str}"></block>`
		}
	}
	return txt
}
placeBlockInToCategory("worldcontainer", get_block)