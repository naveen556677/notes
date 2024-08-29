function add() {
	
	document.getElementById('logu').style.display="none";
	document.getElementById('addtc').style.display="block";
}
function can() {
	
	document.getElementById('logu').style.display="block";
	document.getElementById('addtc').style.display="none";
	addtitle.value=''
	addcontent.value=''
}

let array=[];
console.log(array)
function saved(){
	if(addtitle.value!='' && addcontent.value!=''){
	let div=document.createElement('div');
	div.addEventListener('dblclick',()=>{
		div.remove(div)
	})
	let h1=div.appendChild(document.createElement('h1'));
	let p=div.appendChild(document.createElement('p'));
	h1.innerHTML=addtitle.value;
	p.innerHTML=addcontent.value;
	array.push(addtitle.value)
	array.push(addcontent.value)
	//localStorage.setItem('new',JSON.stringify(addtitle.value))
	//localStorage.setItem('new1',JSON.stringify(addcontent.value))
    document.getElementById('notes').appendChild(div);
	document.getElementById('logu').style.display="block";
	document.getElementById('addtc').style.display="none";
	addtitle.value=''
	addcontent.value=''

	
}
else{
	alert("Please enter all detial")
}

}
