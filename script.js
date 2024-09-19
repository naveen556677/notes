 let note1=document.getElementById('saran')
 console.log(note1) 
 function add() {
    
     document.getElementById('logu').style.display="none";
     document.getElementById('addtc').style.display="block";
     addtitle.value=''
     addcontent.value=''
 }
 let arr=[];
 let add3;
 let add4;
 let get=localStorage.getItem('array');
 let geth1=JSON.parse(get);
 if(geth1 === null){
     arr = []
     geth1=[]
 }
 else{
     arr=geth1
 console.log(geth1)}
 function save(){
     let div=document.createElement('div');
     document.getElementById('saran').appendChild(div);
 const h2=div.appendChild(document.createElement('h1'));
     const p1=div.appendChild(document.createElement('p'));
 h2.innerHTML=add3;
     p1.innerHTML=add4;
     let obj={title:add3,paragraph:add4,    }
     div.addEventListener('dblclick', function(){
         div.remove()
         console.log(obj.title)
         remove(obj)

    })
 }
 geth1.forEach((newall)=>{
     add3=newall.title
     add4=newall.paragraph
     save()
 })
 function can() {
    
     document.getElementById('logu').style.display="block";
     document.getElementById('addtc').style.display="none";
     }
 function saved(obj){
    if(addtitle.value!=''&&  addcontent.value!=''){
     const div=document.createElement('div');
    
     let h1=div.appendChild(document.createElement('h1'));
     let p=div.appendChild(document.createElement('p'));
     let add1=addtitle.value;
     let add2=addcontent.value;
     h1.innerHTML=add1;
     p.innerHTML=add2;
     let obj={title:add1,paragraph:add2}
     arr.push(obj)
     console.log(arr)
     document.getElementById('saran').appendChild(div);
     console.log(note1)
     document.getElementById('logu').style.display="block";
     document.getElementById('addtc').style.display="none";
     console.log(h1.textContent)

     div.addEventListener('dblclick',()=>{
         div.remove()
         console.log(obj)
         remove(obj.title)
         console.log(arr)
  })
 }

 else{
     alert("Please enter all detial")
 }
 const local=localStorage.setItem("array",JSON.stringify(arr))
 }
 function remove(obj){
     let index= null
     arr.forEach((value, ind, arr)=>{
         if(value === obj){
             index = ind
         }
     })
     console.log(index)
     if(index>-1){
         arr.splice(index,1)
     }
     localStorage.setItem('array', JSON.stringify(arr))
 }





    