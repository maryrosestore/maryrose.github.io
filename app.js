document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { label: 'Christian Dior', price: 35000.00, qtyElement: document.getElementById('qty1') },
        { label: 'Prada', price: 10000.00, qtyElement: document.getElementById('qty2') },
        { label: 'Channel', price: 62000.00, qtyElement: document.getElementById('qty3') },
        { label: 'Louis Vuitton', price: 30000.00, qtyElement: document.getElementById('qty4') },
        { label: 'Gucci', price: 20000.00, qtyElement: document.getElementById('qty5') },
        { label: 'Lacoste', price: 30000.00, qtyElement: document.getElementById('qty6') },
    ];

    const carts = document.getElementById("carts");
    const total = document.getElementById("total");
    const cash = document.getElementById("cash");
    const change = document.getElementById("change");

    function addOrder() {
        carts.value = ""; // Clear previous orders
        let totalPrice = 0;

        products.forEach(product => {
            const qty = parseFloat(product.qtyElement.value);
            if (qty > 0) {
                const order = `${qty} pc/s x ${product.price} ------ ${product.label} ------ Php ${(qty * product.price).toFixed(2)}\n`;
                carts.value += order;
                totalPrice += qty * product.price;
            }
        });

        total.value = '₱ ' + totalPrice.toFixed(2);
    }

    function calculateChange() {
        const totalPrice = parseFloat(total.value.replace('₱ ', ''));
        const cashTendered = parseFloat(cash.value);
        if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
            const changeAmount = cashTendered - totalPrice;
            change.value = '₱ ' + changeAmount.toFixed(2);
        } else {
            change.value = '';
        }
    }

    products.forEach(product => {
        product.qtyElement.addEventListener("keyup", addOrder);
        product.qtyElement.addEventListener("change", addOrder);
    });

    cash.addEventListener("keyup", calculateChange);
    cash.addEventListener("change", calculateChange);
});
