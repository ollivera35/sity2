async function getResponce() {
    let responce = await fetch("shop_data.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)

    content = content.splice(0, 12)

    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }


    let ul_0 = document.getElementsByTagName("ul")[1]
    for (key in content) {
        ul_0.innerHTML += ` 
        <li style="width: 200px" class="d-flex flex-column m-1 p-3 border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <h5>${content[key].title}</h5>
        <p>${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p>Заказать <input class="w-25" type="number" name="amount" value="0">
        </p> 
        </li>
                `
    }


}

getResponce()