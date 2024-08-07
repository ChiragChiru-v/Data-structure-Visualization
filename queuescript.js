const push = document.querySelector(".push");
const pop = document.querySelector(".pop");
const reset = document.querySelector(".reset");
const bucket = document.querySelector(".main-stack-bucket");
const input = document.querySelector(".text");
const massage = document.querySelector(".massage");
const massageBox = document.querySelector(".massage-box");
const box = document.querySelectorAll(".box");
const stack = [];
var r=-1;
var f=-1;
var s;

const buttonDisable = () => {
	push.disabled = true;
	push.classList.add("disable-button");
	pop.disabled = true;
	pop.classList.add("disable-button");
	reset.disabled = true;
	reset.classList.add("disable-button");
	input.disabled = true;
};

const buttonEnable = () => {
	push.disabled = false;
	push.classList.remove("disable-button");
	pop.disabled = false;
	pop.classList.remove("disable-button");
	reset.disabled = false;
	reset.classList.remove("disable-button");
	input.disabled = false;
};

push.addEventListener("click", () => {
	if (input.value == "") {
		massage.innerHTML = "Please Enter a value.";
		massageBox.classList.add("error-massage");
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1000);
		return;
	}
	if(f==r & r==-1){
		while (stack.length > 0) {
			stack.pop();
		}

	}

	if (stack.length == 5) {
		input.value = "";
		massage.innerHTML = "Queue Overflow";
		massageBox.classList.add("error-massage");
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1000);
		return;
	}
	const itemValue = input.value; 
	insert(itemValue) 

	const element = document.createElement("div");
	element.classList.add("ele");
	element.innerText = stack[stack.length - 1];
	bucket.appendChild(element);

	box[0].innerHTML = stack[0];

	input.value = "";

	element.classList.add("ele-add");

	buttonDisable();

	setTimeout(() => {
		element.classList.remove("ele-add");

		box[1].innerHTML = itemValue;
		box[2].innerHTML= itemValue;

		massage.innerHTML = `Item ${stack[stack.length - 1]} is Inserted.`;

		buttonEnable();
	}, 1000);
});

pop.addEventListener("click", () => {
	if (stack.length == 0) {
		massageBox.classList.add("error-massage");
		massage.innerHTML = "Queue Underflow";
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	
	bucket.firstElementChild.classList.add("ele-remove");

	buttonDisable();

	setTimeout(() => {
		const itemValue =Delete();
		bucket.removeChild(bucket.firstElementChild);

		
		
		if (f==-1){
			box[0].innerHTML="";
			box[1].innerHTML="";
			box[2].innerHTML="";
			buttonEnable();
		}
		else{
			if(f==r)
			{box[0].innerHTML=itemValue}
		box[0].innerHTML =stack[f]; 
		}
		buttonEnable();
		if (stack.length == 0) {
			box[0].innerHTML = "";
		} else {
			
			box[3].innerHTML = itemValue;
		}

		massage.innerHTML = `Item ${itemValue} is Deleted.`;
	
		buttonEnable();
	}, 1500);
});


reset.addEventListener("click", () => {
	while (stack.length > 0) {
		stack.pop();
	}

	box[0].innerHTML = "";
	box[1].innerHTML = "";
	box[2].innerHTML = "";
	box[3].innerHTML="";
	massage.innerHTML = "";

	while (bucket.firstChild) {
		bucket.removeChild(bucket.firstChild);
	}
	r=-1;
	f=-1;
	setTimeout(() => {
		massage.innerHTML = "Reset Queue";

	}, 1200);

	
});



function insert(v){
	/*r+=1;
	stack[r]=v;
	if(r==5)
	{
		alert("rear is 5");
	}*/
	if (r==4)
		if(f==-1){r=0;}
	
	r+=1;
	stack[r]=v;
	if(r==0)
	{f+=1;}

}

function Delete(){
	if(f==-1){
	massageBox.classList.add("error-massage");	
	massage.innerHTML = "Stack Underflow,can't delete";
	setTimeout(() => {
		massageBox.classList.remove("error-massage");
	}, 1200);
	return;
	}

	if(f==r){
		
		s=stack[f];
		f=-1;
		r=-1;
		
		return s;
	}
	
	
	s=stack[f];
	
	f+=1;
	if (f==10){
		massageBox.classList.add("error-massage");
		massage.innerHTML = "Stack Underflow";
		setTimeout(() => {
			massageBox.classList.remove("error-massage");
		}, 1200);
		return;
	}
	
	return s;
	

}