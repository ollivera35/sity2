function sort(){
    let price=document.getElementById("price")
    let surprise=document.getElementById("title")
    if(price.checked){
        document.getElementById('node_for_insert').innerHTML = '';
         getResponce()}

    if(surprise.checked){
        document.getElementById('node_for_insert').innerHTML = '';
        getResponce1()}
}

async function getResponce() {
    let responce = await fetch("shop_data.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)

    content = content.splice(0, 12)

    console.log(content)

    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/
    content_price=content.sort((a, b) => b.price - a.price);

    let node_for_insert = document.getElementById("node_for_insert")
    //let ul_0 = document.getElementsByTagName("ul")[1]
    for (key in content_price) {
        node_for_insert.innerHTML += `
        <li style="width: 200px" class="d-flex flex-column m-1 p-3 border bg-body">
        <img style="width: 180px" class="img-fluid" src=${content[key].img}>
        <h5>${content[key].title}</h5>
        <p>${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name= "vendor_code" value=${content[key].vendor_code}>
        <p>Заказать <input class="w-25" type="number" name="amount" value="0">
        </p>
        </li>
                `
    }


}

//getResponce()

async function getResponce1() {
   // let responce = await fetch("https://my-json-server.typicode.com/typicode/demo/posts")
    //let responce = await fetch("https://vmarshirov.github.io/g06u28/030_js/data/0620.json")
    //let responce = await fetch("http://185.182.111.214:7628/tmp/g06u28.txt_api.json")
//    let responce = await fetch("shop.json")
    let responce = await fetch("shop_data.json")

    let content = await responce.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.splice(0, 12)
    //content.sort()
    console.log(content)
    let key
    /*for (key in content) {
        console.log(content[key].id, content[key].title)
        console.log(content[key])
    }*/

    // sort by name
    content_title=content.sort((a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

   // node_for_insert.innerHTML='';
    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content_title) {
            node_for_insert.innerHTML += `
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

sort()