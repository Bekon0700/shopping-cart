function calculateBalance(price){
    const subTotal = price;
    const tax = subTotal / 10;
    const total = tax + subTotal

    return [subTotal, tax, total]
}

function totalPrice(id1, id2){
    const price1 = document.getElementById(id1)
    const price2 = document.getElementById(id2)
    return parseInt(price1.innerText) + parseInt(price2.innerText)
}


function balanceSetter(id, val){
    const balanceSet = document.getElementById(id)
    balanceSet.innerText = val
}

function balanceHandler(){
    const totalProductPrice = totalPrice('product1_price', 'product2_price')
    const [subTotal, tax, total] = calculateBalance(totalProductPrice)

    balanceSetter('sub_total', subTotal)
    balanceSetter('tax', tax)
    balanceSetter('total', total)
}

function eventHandler(id, product){
    const input = document.getElementById(id)

    const minusBtn = input.children[0]
    const cartValue = input.children[1]
    const plusBtn = input.children[2]

    let productPrice = 0
    if(product == 'product1_price'){
        productPrice = 1219
    }else if(product == 'product2_price'){
        productPrice = 59
    }

    minusBtn.addEventListener('click', (e)=>{
        const price = document.getElementById(product)
        const priceInt = parseInt(price.innerText)


        if(parseInt(cartValue.value) > 0){
            cartValue.value--;
            price.innerText = priceInt - productPrice
            balanceHandler()
        }
    })

    plusBtn.addEventListener('click', (e)=>{
        const price = document.getElementById(product)
        const priceInt = parseInt(price.innerText)

        cartValue.value++;
        price.innerText = priceInt + productPrice

        balanceHandler()

    })
}