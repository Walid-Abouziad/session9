// array method
var friends = ["ahmed" , "bahnsy" , "usama" , "mohamed" , "ibrahim"]

// for sort
// friends.sort();

// for reverse sort
// friends.reverse();

// to add at end of array
// friends.push("hamada" , "medo" , "abdo");

// to add at begining of an array
// friends.unshift("ibrahim" , "medo");

// to remove from end of array
// friends.pop()

// to remve from begining of array
// friends.shift()

// to remove from specified location of Array
// friends.splice (2 , 1);

// to add at specified location of Array
// friends.splice (2 , 0 , "hamada" ,"ali");

// to add and remove in the same time at specified location of Array
// friends.splice (2 , 1 , "aliiiiii");

// to find index of element or return -1 if not found and (return first item found even it is repeated)
// friends.indexOf("usama");

// to find index of element or return -1 if not found and (return last item found even it is repeated)
// friends.lastIndexOf("usama");

// return true if found the element or false
// friends.includes("usama");

// take a copy of part of array and not affect original array ( be carful end is not taken)
// friends.slice(2 ,4);

// to trasfer array to string and change the icon between element in array for example (/ - &)
// friends.join("/");

// merge 2 array
// friends.concat (oldfriends);







// start CRUD session


// create general vriable
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");

var searchInput = document.getElementById("searchInput");
var updateBtn = document.getElementById("updateBtn");
var addteBtn = document.getElementById("addBtn");
var indexUpdate = 0;
// console.log(productNameInput , productPriceInput , productCategoryInput , productDescriptionInput);
var productList =[];

if(localStorage.getItem("products") !=null){
    productList = JSON.parse(localStorage.getItem("products"));
    displayData()

}


// start add function

function addProduct(){


    // console.log (productNameInput.value);
    // console.log (productPriceInput.value);
    // console.log (productCategoryInput.value);
    // console.log (productDescriptionInput.value);
    var product = {
        name: productNameInput.value ,
        price: productPriceInput.value ,
        category: productCategoryInput.value ,
        desc: productDescriptionInput.value ,
    }

// If condition added from my side to validate name anw url

        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);

    productList.push(product);
    localStorage.setItem("products",JSON.stringify(productList));
    console.log(productList);

    // clearform is ready created function below
    clearForm();
    // console.log(productList);
    
     // displayData is ready created function below
    displayData();
}

// we can use this clear form anywhere
function clearForm (){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescriptionInput.value="";
}
function displayData(){

    var cartona = "";

    for( var i=0 ; i<productList.length  ; i++){
        cartona += ` <tr>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <td>
            <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">Update</button>
            <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td>
    </tr>`
    }
    // console.log(cartona);
    document.getElementById("tableBody").innerHTML = cartona;

}

function deleteProduct(elementNumber){
    productList.splice(elementNumber,1);
    localStorage.setItem("products",JSON.stringify(productList));
    displayData();
}

// explain for some sting method we will use

// return true or false and it is sensitive
// console.log("ahmed menisy".includes("ah") );

// transfer all letters to lower or upper case
// console.log("Ahmed menisy".toLowerCase() );



// search is a filter display and we will use disply code and modify it

function searchProduct(){
    var term =searchInput.value;
    var cartona = "";

    for( var i=0 ; i<productList.length  ; i++){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
        cartona += ` <tr>
        <td>${productList[i].name}</td>
        <td>${productList[i].price}</td>
        <td>${productList[i].category}</td>
        <td>${productList[i].desc}</td>
        <>
        <button class="btn btn-outline-warning btn-sm" onclick="setData(${i})">Update</button>
        <button class="btn btn-outline-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td>
    </tr>`
    }    
}
    // console.log(cartona);
    document.getElementById("tableBody").innerHTML = cartona;
}

// update is same as add with some modification

function setData(index){
    // alert(index);
    indexUpdate = index ;
    var currentProduct = productList[index];
    // console.log(currentProduct);
    productNameInput.value = currentProduct.name;
    // console.log(productNameInput);
    productPriceInput.value = currentProduct.price;
    productCategoryInput.value = currentProduct.category;
    productDescriptionInput.value = currentProduct.desc;
    updateBtn.classList.remove("d-none");
    addteBtn.classList.add("d-none");
}
function updateProduct(){
    var product = {
        name: productNameInput.value ,
        price: productPriceInput.value ,
        category: productCategoryInput.value ,
        desc: productDescriptionInput.value ,
    };
    productList.splice(indexUpdate,1,product);
    localStorage.setItem("products",JSON.stringify(productList));
    displayData()
    updateBtn.classList.add("d-none");
    addteBtn.classList.remove("d-none");
    clearForm ()
}