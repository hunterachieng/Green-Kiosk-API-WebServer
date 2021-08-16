

function newNode(element){
    return document.createElement(element);
}

function appendingNode(parent,el){
    return parent.appendChild(el);
}
//adding all products into the product list
const product = document.getElementById("products");


let url = "http://127.0.0.1:5003/products"
fetch(url)
.then(res => res.json())
.then(data =>{
      
    return data.map(item =>{
        let li = newNode("li");
        li.innerHTML = item.name;
        appendingNode(product,li)
        
    })
})
.catch( error =>{
    console.log(error)
})

//adding all fruits into the fruList

const fruits = document.getElementById("fruList");
let url2 = "http://127.0.0.1:5003/products/fruits";
fetch(url2)
.then(res => res.json())
.then(data =>{
    
    return data.map(fruit =>{
        let li = newNode("li");
        li.innerHTML = fruit.name;
        appendingNode(fruits, li)
       
    })
})
.catch(error =>{
    console.log(error)
})

const veges = document.getElementById("vegList");
let url3 = "http://127.0.0.1:5003/products/vegetables";
fetch(url3)
.then(res => res.json())
.then(data =>{
    return data.map( greens =>{
        let li = newNode("li");
        li.innerHTML = greens.name;
        appendingNode(veges, li)
      
    })
})
