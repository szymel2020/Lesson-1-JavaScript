//egzamine the document object
//console.dir(document);

/*console.log(document.all[10]);
document.all[8].textContent = 'cześć';*/

// ZMIANA TEKSTU HTML
//console.log(document.getElementById('header-title'));
/*var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');*/
/*console.log(headerTitle);*/
/*headerTitle.textContent = 'hello ';*/
//console.log(headerTitle.textContent);

// ZMIANA STYLU CSS
//header.style.borderBottom = 'solid 4px yellow';

// POBIERZ ELEMENTY WEDŁUG NAZWY KLASY
/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = 'czesc 2';
items[2].style.fontWeight = 'bold';
items[0].style.color = '#33be09';
items[0].style.backgroundColor = 'grey';
items[1].style.color = 'blue';
items[1].style.backgroundColor = 'pink';

//items.style.backgroundColor = 'grey';

// ROBIENIE ZBIOROWEGO STYLU DLA TABLICY ZA POMOCĄ PĘTLI 'FOR'
for(var i = 0; i < items.length; i++){
	items[i].style.backgroundColor = 'lightgrey';
}*/

// GET ELEMENTS BY TAG NAME
/*
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[2].textContent = 'czesc 2';
li[2].style.fontWeight = 'bold';
li[0].style.color = '#33be09';
li[0].style.backgroundColor = 'grey';
li[1].style.color = 'blue';
li[1].style.backgroundColor = 'pink';

//items.style.backgroundColor = 'grey';

// ROBIENIE ZBIOROWEGO STYLU DLA TABLICY ZA POMOCĄ PĘTLI 'FOR'
for(var i = 0; i < li.length; i++){
	li[i].style.backgroundColor = 'lightgrey';
}
*/

// QUERY SELECTOR 
/*var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 10px pink';

var input = document.querySelector('input');
input.value = 'wprowadź coś'

var submit = document.querySelector('input[type="submit"]');
submit.value="send"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.color = 'green';*/

// QUERY SELECTORALL
/*var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'yellow';

//odd- nieparzyste, even- parzyste
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
	odd[i].style.backgroundColor = 'lightgrey';
	even[i].style.backgroundColor = 'lightpink';
}*/

//TRAVERSING THE DOM 
//var itemList = document.querySelector('#items');
//parentNode
/*console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);
itemList.parentNode.parentNode.style.backgroundColor = 'pink';*/

//parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);*/

// (parentNode i parentElement są używane zamiennie)

//childNode
/*var itemList = document.querySelector('#items');
//console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[2].style.backgroundColor = 'yellow';*/

/*//firstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'czesc';*/

//lastChild
/*var itemList = document.querySelector('#items');
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'to ja';*/

//nextSibling - rodzeństwo
/*var itemList = document.querySelector('#items');
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);*/

// previousSibling
/*var itemList = document.querySelector('#items');
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'red';*/

// CREATE ELEMENT

//CREATE DIV
//var newDiv = document.createElement('div');
//addClass
//newDiv.className = 'zxcvbnm';
//add Id
//newDiv.id = 'zxcvbnm1';

//add attribute
//newDiv.setAttribute('title', 'hello div')

// create text node
//var newDivText = document.createTextNode('hello woorld');

// add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');

//console.log(newDiv);

//container.insertBefore(newDiv,  h1);


//EVENTS
/*var button = document.getElementById('button').addEventListener('click', buttonClick);*/


//function buttonClick(e){
//console.log('Button cicked');
//document.getElementById('header-title').textContent = 'Changed';
//document.querySelector('#main').style.backgroundColor = '#f4f4f4';
//console.log(e.target);
//console.log(e.target.id);
//console.log(e.target.className);
//var output = document.getElementById('output');
//output.innerHTML = '<h3>'+e.target.id+'</h3>';
//console.log(e.offsetX);
//console.log(e.clientY);
//console.log(e.altKey);
//console.log(e.ctrlKey);
//console.log(e.shiftKey);


//var button = document.getElementById('button');
//var box = document.getElementById('box');

//button.addEventListener('click', runEvent);
//button.addEventListener('dbclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);

//box.addEventListener('mousemove', runEvent);


var itemInput = document.getElementById('item');
var submit = document.getElementById('input[type="submit"]');
//var form = document.querySelector('form');

//var select = document.querySelector('select');


//itemInput.addEventListener('keydown', runEvent);
//itemInput.addEventListener('keyup', runEvent);
//itemInput.addEventListener('keypress', runEvent);


//itemInput.addEventListener('focus', runEvent);
//itemInput.addEventListener('blur', runEvent);

//itemInput.addEventListener('input', runEvent);

//select.addEventListener('change', runEvent);

button.addEventListener('click', runThis);
//form.addEventListener('submit', runEvent);

function runThis(e) {
	document.getElementById('header-title').innerHTML = itemInput.value
};

function runEvent(e) {
	e.preventDefault();
	console.log('EVENT TYPE: ' + e.type);
	console.log(e.target.value);
	//ZMIANA KOLORU TŁA I WSTAWIANIE TEKSTU

	document.getElementById('header-title').innerHTML = itemInput.value;
	document.getElementById('header-title').innerHTML = select.value;
	if (option.value = 1) {
		document.getElementById('header-title').style.fontFamily = font - family: "Lucida Console", Courier, monospace;
	}
	var color = ['pink', 'purple', 'red', 'green',
	'orange',
	'#11EEC7',
	'#5AFF00',
	'#025E20',
	'#FFACFF',
	'#CF8E05',
	'#885151',
	'#A4F7A7',
	'#16EED8',
	'grey',
	'blue'];
	document.body.style.backgroundColor = color[Math.random() * color.length << 0];
	document.querySelector('form').style.backgroundColor = color[Math.random() * color.length << 0];
	document.getElementById('header-title').style.color = color[Math.random() * color.length << 0];
	//ZMIANA KOLORU ZA POMOCĄ RUCHU MYSZKI
	box.innerHTML = '<h2>color RGB:  ' + e.offsetX + '</h2><h2>color RGB:  ' + e.offsetY + '</h2>';

	document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",0)";
};

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
//form submit event
form.addEventListener('submit', addItem);
//delete event
itemList.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup', filterItems);
//add item
function addItem(e) {
	e.preventDefault();

	//get input value
	var newItem = document.getElementById('item').value;

	//create new li elements
	var li = document.createElement('li');
	//add class
	li.className = 'list-group-item';
	//add text node with input value
	li.appendChild(document.createTextNode(newItem));
	//create button del elements
	var deleteBtn = document.createElement('button');
	//add classes to del button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	//append text node
	deleteBtn.appendChild(document.createTextNode('x'));
	//append button to li 
	li.appendChild(deleteBtn);
	//append li to list
	itemList.appendChild(li);
}
//remove item
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Czy na pewno USUNĄĆ?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

//filter items
function filterItems(e) {
	//convert text to lowercase .zamiana na małe litery
	var text = e.target.value.toLowerCase();
	//get list
	var items = itemList.getElementsByTagName('li');
	//convert to an array . przekonwertuj na tablice
	Array.from(items).forEach(function (item) {
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}
