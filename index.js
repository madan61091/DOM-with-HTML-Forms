const table = document.getElementById('t-body')
function onSubmitHandler(event){
    event.preventDefault()

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address')
    const pincode = document.getElementById('pincode');
    const gender = document.getElementById('gender');
    const food = document.getElementById('food');
    const state = document.getElementById('state');
    const country = document.getElementById('country');
    createNewRow(firstName,lastName,address,pincode,gender,food,state,country)
}

function createNewRow(...elements){
    const tr = document.createElement('tr');
    

    for(let ele of elements){
        console.log(ele)
      
        if(ele.localName == "select"){
            if(ele.selectedOptions.length < 2){
                alert("Please select al least 2 items");
                return;
            }

            let value = ""
            for(let i = 0; i < ele.selectedOptions.length;i++){
                if(!value) value = ele.selectedOptions[i].value;
                else{
                    value = value + ", " + ele.selectedOptions[i].value;
                }
            }

            const td = document.createElement('td');
            if(!value){
                alert("enter all fields")
                return;
            }
            td.textContent = value;
            tr.append(td);
            continue;
        }

        const td = document.createElement('td');
       
        if(!ele.value){
            alert("enter all fields")
            return;
        }

        td.textContent = ele.value;
        ele.value = ""

        
        
        tr.append(td);
    }
   
    for(ele of elements){
        ele.value = "";
    }

    table.append(tr);
}

document.addEventListener('submit',onSubmitHandler)