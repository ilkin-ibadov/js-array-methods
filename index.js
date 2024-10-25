// const divItem = document.getElementsByClassName('divItem')[0]
// const changeTextBtn = document.getElementById("changeTextBtn")
// const changeElementVisibility = document.getElementById("changeElementVisibility")



// changeTextBtn.addEventListener("click", () => {
//     // divItem.innerText = "Background color changed"
//     // divItem.style.backgroundColor = "red"
//     // divItem.style.fontSize = "48px"

//        const itemClasses = divItem.classList
//        const isGreen = itemClasses.contains("green")

//        if(isGreen){
//         divItem.classList.remove("green")
//         divItem.classList.add("red")
//        } else{
//         divItem.classList.remove("red")
//         divItem.classList.add("green")
//        }



// })

// let isItemVisible = true

// changeElementVisibility.addEventListener("click", () => {
// //     isItemVisible = !isItemVisible 
// //    if(isItemVisible){
// //     divItem.style.display = "none"
// //     changeElementVisibility.innerText = "Make visible"
// //    } else{
// //     divItem.style.display = "block"
// //     changeElementVisibility.innerText = "Make invisible"
// //    }

//    divItem.classList.toggle("makeInvisible")
//    isItemVisible = !isItemVisible 
//    changeElementVisibility.innerText = isItemVisible ? "Make invisible" : "Make visible"
// })

const data = [
    {
        name: "Ilkin",
        age: 25,
        job: "Developer"
    },
    {
        name: "Vaqif",
        age: 21,
        job: "Developer"
    },
    {
        name: "Zibeyde",
        age: 21,
        job: "Developer"
    }
]

const container = document.getElementById("container")

data.map(person => {
    // const div = document.createElement("div")
    // const h3 = document.createElement("h3")
    // const p = document.createElement("p")
    // const span = document.createElement("span")


    // h3.innerText = person.name
    // p.innerText = person.job
    // span.innerText = `Age: ${person.age}`

    // div.appendChild(h3)
    // div.appendChild(p)
    // div.appendChild(span)

    // div.classList.add("cardItem")

    // container.appendChild(div)

    const div = `
    <div class="cardItem">
            <h3>${person.name}</h3>
            <p>${person.job}</p>
            <span>Age: ${person.age}</span>
        </div>
    `
    const containerContent = container.innerHTML

    container.innerHTML = `${containerContent} ${div}`

})

// const div = document.getElementsByTagName("div")

const item = document.querySelector(".cardItem:nth-child(3)")
const items = document.querySelectorAll(".cardItem.green")

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruitNamesString = fruits.toString();
// fruits.push("Kiwi");
// fruits.pop()
// const firstItem = fruits.shift()
// fruits.unshift("Lemon");

// delete istifade etmirik
//delete fruits[0];

// console.log("First item is:",fruits[0])

// let size = fruits.length;

// for(let i = 0; i < fruits.length; i++){
// console.log(fruits[i])
// }

// fruits.splice(0, 1);
// fruits.splice(2, 2, "Lemon", "Kiwi");
// const citrus = fruits.slice(1);

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// const myChildren = myGirls.concat(myBoys);
const myChildren = [...myBoys, ...myGirls]



// console.log(myChildren)

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8]

// const evenNums = nums.filter(item => !(item % 2))
// const oddNums = nums.filter(item => (item % 2))


// console.log(oddNums)


function myFunction(arr) {
    var flag = false;
    for (let i = 0; i < arr.length; i++) {
       
      for (let j = 0; j < arr.length; j++) {
        
        if (arr[i] !== arr[j])
          flag = false
     
     
      }
    }
    return flag;
  }
   
myFunction([1, 1, 1, 1])

const arr1 = [1, 1, 3, 4, 5, 5]

const arr2 = [6, 7, 8, 8, 7]

const uniq = [...new Set([...arr1, ...arr2])].sort();
   
console.log(uniq)