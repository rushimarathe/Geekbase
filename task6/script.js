document.addEventListener("DOMContentLoaded", function() {
    const productContainer = document.getElementById("product-container");

    fetch("https://fakestoreapi.com/products/1")
        .then(response => response.json())
        .then(data => {
            const product = document.createElement("div");
            product.classList.add("product");

            product.innerHTML = `
                <h2>${data.title}</h2>
                <img src="${data.image}" alt="${data.title}">
                <p><strong>Price:</strong> $${data.price}</p>
                <p>${data.description}</p>
            `;

            productContainer.appendChild(product);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            productContainer.innerHTML = "<p>Error fetching data. Please try again later.</p>";
        });
});
