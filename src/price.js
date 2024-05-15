if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
 } else {
    ready()
 }
 
 function ready(){
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cartItem')
    var subtotalPrice = document.getElementsByClassName('cart-item-subtotal')[0]
    var stp = subtotalPrice.innerText
    console.log(cartItemContainer)
     console.log(subtotalPrice)
     for (var i = 0; i < cartItemContainer.length; i++) {
        var total = 0
        var cartItem= cartItemContainer[i]
        var priceElement = cartItem.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartItem.getElementsByClassName('cart-quantity-input')
        [0]
        console.log(priceElement)
         var price = parseFloat(priceElement.innerText.replace('$', ''))
         var quantity = quantityElement.value
         console.log(quantity)
         total = total + (price * quantity)
         updateCartTotal()
}
total = Math.round(total * 100) / 100
document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
updateCartTotal()
}
 }
