const nameEle = document.getElementById('name')
const ageEle = document.getElementById('age')
function save(){
    const details = {
        name:nameEle.value,
        age:ageEle.value
    }
    localStorage.setItem('details',JSON.stringify(details))
    nameEle.value = ''
    ageEle.value = ''
}

function load(){
    let details = JSON.parse(localStorage.getItem('details'))
    const {name,age} = details
    nameEle.value = name
    ageEle.value = age
}