// 准备商品数据
const products = [
    {
        name: "Max Verstappen",
        price: 66.61
    },
    {
        name: "Esteban Ocon",
        price: 66.62
    },
    {
        name: "Lewis Hamilton",
        price: 66.63
    },
    {
        name: "Zhou Guanyu",
        price: 66.64
    },
    {
        name: "Pierre Gasly",
        price: 66.65
    },
    {
        name: "Charles Leclerc",
        price: 66.66
    }
];

// 显示商品列表
function render() {
    let productList = document.getElementById("productList");
    productList.innerHTML = "";

    for (let i = 0; i < products.length; i++) {
        let productListItem = document.createElement("li");
        let productTitle = document.createElement("h3");
        let productPrice = document.createElement("p");

        productTitle.innerText = products[i].name;
        productPrice.innerText = "价格：" + products[i].price + "元";

        productListItem.appendChild(productTitle);
        productListItem.appendChild(productPrice);

        productList.appendChild(productListItem);
    }
}

// 页面加载完成后显示商品列表
window.onload = function () {
    render();
}

// 按名称排序商品
function sortAlphabetically() {
    products.sort(function (a, b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    render();
}

// 按价格排序商品
function sortPrice() {
    products.sort(function (a, b) {
        return a.price - b.price;
    });

    render();
}

// 搜索商品
function search() {
    let searchText = document.getElementById("search").value.toUpperCase();

    for (let i = 0; i < products.length; i++) {
        let productListItem = document.querySelectorAll("#productList li")[i];
        let productTitle = productListItem.querySelector("h3");

        if (productTitle.innerText.toUpperCase().includes(searchText)) {
            // 如果商品名称包含搜索关键字
            // 将该商品排在最前面
            let firstProductListItem = document.querySelectorAll("#productList li")[0];
            productListItem.parentNode.insertBefore(productListItem, firstProductListItem);
            break;
        }
    }
}