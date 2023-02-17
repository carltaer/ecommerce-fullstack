const orders = [
    {
        "id": "1",
        "user": 1,
        "order": [
            {
                "name": "Product 1",
                "qty": 2,
                "image": "https://example.com/product1.jpg",
                "price": 20.99,
                "item": 1,
            },
            {
                "name": "Product 2",
                "qty": 1,
                "image": "https://example.com/product2.jpg",
                "price": 9.99,
                "item": 2,
            }
        ],
        "shippingAddress": {
            "address": "123 Main St",
            "city": "Anytown",
            "postalCode": "12345",
            "country": "USA",
        },
        "paymentMethod": "Credit Card",
        "paymentResult": {
            "id": "PAYMENT_ID",
            "status": "COMPLETED",
            "update_time": "2023-02-15T12:34:56Z",
            "email_address": "john@example.com",
        },
        "taxPrice": 2.50,
        "shippingPrice": 5.00,
        "totalPrice": 37.47,
        "isPaid": true,
        "paidAt": "2023-02-15",
        "deliveredAt": "2023-02-22",
    },

    {
        "id": "2",
        "user": 2,
        "order": [
            {
                "name": "Product 3",
                "qty": 1,
                "image": "https://example.com/product3.jpg",
                "price": 15.99,
                "item": 3,
            }
        ],
        "shippingAddress": {
            "address": "456 Elm St",
            "city": "Anycity",
            "postalCode": "67890",
            "country": "USA",
        },
        "paymentMethod": "PayPal",
        "paymentResult": {
            "id": "PAYMENT_ID",
            "status": "COMPLETED",
            "update_time": "2023-02-14T23:45:01Z",
            "email_address": "jane@example.com",
        },
        "taxPrice": 1.60,
        "shippingPrice": 4.50,
        "totalPrice": 22.09,
        "isPaid": true,
        "paidAt": "2023-02-14",
        "deliveredAt": "2023-02-20",
    },
    
    {
        "id": "3",
        "user": 3,
        "order": [
            {
                "name": "Product 4",
                "qty": 3,
                "image": "https://example.com/product4.jpg",
                "price": 7.99,
                "item": 4,
            },
            {
                "name": "Product 5",
                "qty": 1,
                "image": "https://example.com/product5.jpg",
                "price": 14.99,
                "item": 5,
            },
            {
                "name": "Product 6",
                "qty": 2,
                "image": "https://example.com/product6.jpg",
                "price": 12.99,
                "item": 6,
            }
        ],
        "shippingAddress": {
            "address": "456 Elm St",
            "city": "Anycity",
            "postalCode": "67890",
            "country": "USA",
        },
        "paymentMethod": "PayPal",
        "paymentResult": {
            "id": "PAYMENT_ID",
            "status": "COMPLETED",
            "update_time": "2023-02-14T23:45:01Z",
            "email_address": "jane@example.com",
        },
        "taxPrice": 1.60,
        "shippingPrice": 4.50,
        "totalPrice": 22.09,
        "isPaid": true,
        "paidAt": "2023-02-14",
        "deliveredAt": "2023-02-20",
    },

    {
        "id": "4",
        "user": 4,
        "order": [
            {
                "name": "Product 4",
                "qty": 3,
                "image": "https://example.com/product4.jpg",
                "price": 7.99,
                "item": 4,
            },
            {
                "name": "Product 5",
                "qty": 1,
                "image": "https://example.com/product5.jpg",
                "price": 14.99,
                "item": 5,
            },
            {
                "name": "Product 6",
                "qty": 2,
                "image": "https://example.com/product6.jpg",
                "price": 12.99,
                "item": 6,
            }
        ],
        "shippingAddress": {
            "address": "456 Elm St",
            "city": "Anycity",
            "postalCode": "67890",
            "country": "USA",
        },
        "paymentMethod": "PayPal",
        "paymentResult": {
            "id": "PAYMENT_ID",
            "status": "COMPLETED",
            "update_time": "2023-02-14T23:45:01Z",
            "email_address": "jane@example.com",
        },
        "taxPrice": 1.60,
        "shippingPrice": 4.50,
        "totalPrice": 22.09,
        "isPaid": true,
        "paidAt": "2023-02-14",
        "deliveredAt": "2023-02-20",
    },
]

export default orders