const productList=document.getElementById('product-list');
const basketList=document.getElementById('basket-list');
const basketSummary=document.getElementById('basket-summary');
const basket=[];
const products = [
    {
        "title": "Wireless Mouse",
        "category": "Electronics",
        "price": 25.99,
        "stock": 150
    },
    {
        "title": "Bluetooth Headphones",
        "category": "Electronics",
        "price": 59.99,
        "stock": 85
    },
    {
        "title": "Office Desk Chair",
        "category": "Furniture",
        "price": 119.99,
        "stock": 0
    },
    {
        "title": "Stainless Steel Water Bottle",
        "category": "Home & Kitchen",
        "price": 19.99,
        "stock": 0
    },
    {
        "title": "Yoga Mat",
        "category": "Fitness",
        "price": 29.99,
        "stock": 75
    },
    {
        "title": "Gaming Keyboard",
        "category": "Electronics",
        "price": 79.99,
        "stock": 60
    },
    {
        "title": "LED Desk Lamp",
        "category": "Home & Kitchen",
        "price": 39.99,
        "stock": 0
    },
    {
        "title": "Electric Kettle",
        "category": "Home & Kitchen",
        "price": 34.99,
        "stock": 90
    },
    {
        "title": "Fitness Tracker",
        "category": "Wearables",
        "price": 49.99,
        "stock": 40
    },
    {
        "title": "Backpack",
        "category": "Accessories",
        "price": 39.99,
        "stock": 10
    }
]
const updateBasket=()=>
{
    basketList.innerHTML='';
    let totalPrice=0;
    basket.forEach(product=>
    {
        const basketItem = document.createElement('li');
        basketItem.textContent=`Product title: ${product.title} Price: ${product.price}`
        basketList.append(basketItem);
        totalPrice+=product.price;
    }
    )
    basketSummary.textContent = `Total Items: ${basket.length}, Total Price: $${totalPrice.toFixed(2)}`;
   
}
const addBasket=(index)=>
{
    const product = products[index];
    if(product.stock>0)
    {
        basket.push(product);
        updateBasket();
    }
    else
    {
        console.log(`Product: ${product.title} sold out! `)
    }
}
products.forEach((product,index)=>
{
    const li = document.createElement('li');
    li.textContent=`
      Title: ${product.title}
      Category:${product.category}
      Price:${product.price}   
      Stock:${product.stock}`;
   
    li.onclick=()=>
    {
        addBasket(index);
    }
    productList.append(li);
})





