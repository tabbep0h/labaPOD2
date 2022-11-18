//Задание 1//
function js_style(){
    let text = document.getElementById('text')
    text.style = "font-size: 30px;color:red;background:blue;border:2px black solid;width:300px"
    console.log("Ширина экрана = "+screen.width)
    console.log("Высота экрана = "+screen.height)
}
//Задание 2//
function getFormvalue(){
    event.preventDefault();
    let form = document.querySelector("#form1")
    let abzac = document.createElement('p')
    abzac.innerHTML = `${form.fname.value}<br>${form.lname.value}` 
    document.getElementById("form1").appendChild(abzac)
}
//Задание 3//
function getAttributes(){
    let data = document.querySelector('#w3r')
    let href = data.getAttribute('href')
    let hreflang = data.getAttribute('hreflang')
    let rel = data.getAttribute('rel')
    let target = data.getAttribute('target')
    let type = data.getAttribute('type')
    let arr = []
    arr.push(href,hreflang,rel,target,type)
    console.log(arr)
    for (let i = 0;i < arr.length;i++){
        let p = document.createElement('p')
        p.classList.add(`style${i}`)
        p.innerHTML = arr[i]
        document.querySelector("#div").appendChild(p)
    }
}
//Задание 4//
function insert_Row(){
    let table = document.querySelector("#sampleTable")
    let row = table.insertRow()
    row.innerHTML = "<td>Row1 cell1</td><td>Row1 cell2</td>"
}
//Задание 5//
function CLICK(){
    let x = prompt('x')
    let y = prompt('y')
    let text1 = prompt('text')
    console.log("text1")
    document.querySelector("#myTable").querySelectorAll("tr")[x-1].querySelectorAll('td')[y-1].outerHTML = text1
}
//Задание 6//
function createTable(){
    let table = document.getElementById('myTable1')

}

//Задание 7//
function removecolor(){
    let selector = document.querySelector("#colorSelect")
    selectElem = selector[selector.selectedIndex].innerHTML
    addP = document.createElement('p')
    document.body.appendChild(addP)
    addP.innerHTML = `Элемент ${selectElem} был удален.`
    selector.remove(selector.selectedIndex)
}
//Задание 8//
function getOptions(){
    let selector1 = document.querySelector("#mySelect")
    selectElem1 = selector1.textContent
    selectLen = selectElem1.length / 20
    console.log(selectLen)
     alert(`Colors:${selectElem1}         
Count:
            ${selectLen}`)
}

