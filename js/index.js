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
// console.log(productNameInput , productPriceInput , productCategoryInput , productDescriptionInput);
var productList =[];


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
    // console.log(product);
    productList.push(product);

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
    </tr>`
    }
    // console.log(cartona);
    document.getElementById("tableBody").innerHTML = cartona;

}
