console.log("test");
//1 завдання
let z1elem = document.querySelector('#z1');
let z2elem = document.querySelector('#z2');
let z3elem = document.querySelector('#z3');
let z4elem = document.querySelector('#z4');
let z5elem = document.querySelector('#z5');
let z6elem = document.querySelector('#z6');
let z7elem = document.querySelector('#z7');


z1elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block1');
	z1listElem.classList.toggle('z1block');
});
z2elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block2');
	z1listElem.classList.toggle('z2block');
});
z3elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block3');
	z1listElem.classList.toggle('z3block');
});
z4elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block4');
	z1listElem.classList.toggle('z4block');
});
z5elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block5');
	z1listElem.classList.toggle('z5block');
});
z6elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block6');
	z1listElem.classList.toggle('z6block');
});
z7elem.addEventListener('click',function(){
	let z1listElem = document.querySelector('#block7');
	z1listElem.classList.toggle('z7block');
});
// 2 завдання
let elTables = document.querySelectorAll('#table tr td');
let elTable = document.querySelector('#table');

elTable.addEventListener('click', function(event){
	if(event.target.classList.contains("right-selected")){
		event.target.classList.remove('right-selected');
		event.target.classList.add('double-selected');
		return 'double-selected';
	}
	
	if(event.target.classList.contains("double-selected")){
		event.target.classList.remove('double-selected');
		return 'no_selected';
	}
	
	event.target.classList.toggle('selected');
	return 'selected';
});

elTable.addEventListener('contextmenu', function(event){
	event.preventDefault();
	if(event.target.classList.contains("selected")){
		event.target.classList.remove('selected');
		event.target.classList.add('double-selected');
		return 'double-selected';
	}
	
	if(event.target.classList.contains("double-selected")){
		event.target.classList.remove('double-selected');
		return 'no_selected';
	}
	
	event.target.classList.toggle('right-selected');
	return 'right-selected';
});
//*********************************************
let blockElem = document.querySelector('#block');
document.body.addEventListener('keydown',function(event){
	switch(event.code){
		case 'Numpad4':
			blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 10) + 'px';
			break;
		case 'Numpad6':
			blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 10) + 'px';
			break;
		case 'Numpad8':
			blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 10) + 'px';
			break;
		case 'Numpad2':
			blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 10) + 'px';
			break;	
		case 'Numpad7':
			blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 10) + 'px';
			blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 10) + 'px';
			break;
		case 'Numpad9':
			blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 10) + 'px';
			blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) - 10) + 'px';
			break;
		case 'Numpad1':
			blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) - 10) + 'px';
			blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 10) + 'px';
			break;
		case 'Numpad3':
			blockElem.style.top = (parseInt(getComputedStyle(blockElem).top) + 10) + 'px';
			blockElem.style.left = (parseInt(getComputedStyle(blockElem).left) + 10) + 'px';
			break;	
	}
	console.log(event);
});