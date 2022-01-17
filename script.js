const addToCartButton = document.getElementsByClassName("btn-primary")
for(var i=0; i<addToCartButton.length; i++){
    addToCartButton[i].addEventListener('click', addToCart)
}

var totalPrice = 0;
function addToCart(event){

    let btn = event.target
    let btnParent = btn.parentElement
    let itemName= btnParent.children[0].innerText
    let itemPrice = btnParent.children[2].innerText
    
    let itemContainer = document.getElementById('cartItems')
    itemContainer.innerHTML += `<tr>
    <td><h5>${itemName}</h5></td>
    <td><h5 class="itemPrice">${itemPrice}</h5></td>
    <td><button class="btn btn-danger">Remove</button></td>  
  </tr>`
  
  totalPrice = totalPrice + parseInt(itemPrice);

  //console.log(totalPrice);
  document.getElementById('totalPrice').textContent = totalPrice;
  
  for(let i = 0; i < delete_button.length; i++){
    delete_button[i].addEventListener('click', removeItem)
  }


}


let delete_button = document.getElementsByClassName('btn-danger')

function removeItem(event){
  del_btn = event.target
  del_btn_parent = del_btn.parentElement.parentElement
  var removePrice = del_btn_parent.getElementsByClassName('itemPrice')[0].innerHTML;
  totalPrice = totalPrice - parseInt(removePrice);
  document.getElementById('totalPrice').textContent = totalPrice;
  del_btn_parent.remove()
  
}