

export const customersData = [
    {
        CustomerCode: 1,
        CustomerName: 'Tionge Turan',
        ContactNo: '316563304',
        Address: 'Kentucky, United States',
        Status: 'Active'
    },
    {
        CustomerCode: 2,
        CustomerName: 'Averill Nasim',
        ContactNo: '472758078',
        Address: 'Virginia, United States',
        Status: 'Active'
    },
    {
        CustomerCode: 3,
        CustomerName: 'Jerry Jayden',
        ContactNo: '876841390',
        Address: 'Utah, United States',
        Status: 'Active'
    }
];


export const productData = [
    {
        ProductCode: "55023",
        Description: "Bagpack",
        ProductCategory: "SchoolSupplies",
        UnitOfMeasure: "Piece",
        RetailPrice: 1000
    },
    {
        ProductCode: "66223",
        Description: "Leather Shoes",
        ProductCategory: "Shoes",
        UnitOfMeasure: "Piece",
        RetailPrice: 800
    },
    {
        ProductCode: "88799",
        Description: "Dress Shirt",
        ProductCategory: "Apparel",
        UnitOfMeasure: "Piece",
        RetailPrice: 750
    }
];


export const salesData = [
    {
        TransNo: "S-101",
        CustomerCode: "001",
        CustomerName: "Tionge Turan",
        GrossTotal: 4400.00,
        NetTotal: 4400.00,
        TenderedAmount: 4500.00,
        InvNo: 10001,
        ServeStatus: 1,
        DateSold: "2022-06-05"
    },
    {
        TransNo: "S-102",
        CustomerCode: "002",
        CustomerName: "Averill Nasim",
        GrossTotal: 1550.00,
        NetTotal: 1535.00,
        TenderedAmount: 1700.00,
        InvNo: 10002,
        ServeStatus: 1,
        DateSold: "2022-10-07"
    },
    {
        TransNo: "S-103",
        CustomerCode: "003",
        CustomerName: "Jerry Jayden",
        GrossTotal: 5000.00,
        NetTotal: 4900.00,
        TenderedAmount: 5000.00,
        InvNo: 10003,
        ServeStatus: 1,
        DateSold: "2023-01-01"
    },
    {
        TransNo: "S-104",
        CustomerCode: "003",
        CustomerName: "Jerry Jayden",
        GrossTotal: 1500.00,
        NetTotal: 1500.00,
        TenderedAmount: 1500.00,
        InvNo: 10004,
        ServeStatus: 1,
        DateSold: "2023-02-13"
    }
];



export const salesDetailsData = [
    {
        Idtrack: 2001,
        TransNo: "S-101",
        ProductCode: "55023",
        Description: "Bagpack",
        Qty: 2,
        Discount: 0.00,
        Amount: 2000.00,
        RetailPrice: 1000.00,
        NetAmount: 2000.00
    },
    {
        Idtrack: 2002,
        TransNo: "S-101",
        ProductCode: "66223",
        Description: "Leather Shoes",
        Qty: 3,
        Discount: 0.00,
        Amount: 2400.00,
        RetailPrice: 800.00,
        NetAmount: 2400.00
    },
    {
        Idtrack: 2003,
        TransNo: "S-102",
        ProductCode: "66223",
        Description: "Leather Shoes",
        Qty: 1,
        Discount: 0.00,
        Amount: 800.00,
        RetailPrice: 800.00,
        NetAmount: 800.00
    },
    {
        Idtrack: 2004,
        TransNo: "S-102",
        ProductCode: "88799",
        Description: "Dress Shirt",
        Qty: 1,
        Discount: 15.00,
        Amount: 750.00,
        RetailPrice: 750.00,
        NetAmount: 735.00
    },
    {
        Idtrack: 2005,
        TransNo: "S-103",
        ProductCode: "55023",
        Description: "Bagpack",
        Qty: 5,
        Discount: 100.00,
        Amount: 5000.00,
        RetailPrice: 1000.00,
        NetAmount: 4900.00
    },
    {
        Idtrack: 2006,
        TransNo: "S-104",
        ProductCode: "88799",
        Description: "Dress Shirt",
        Qty: 2,
        Discount: 0.00,
        Amount: 1500.00,
        RetailPrice: 750.00,
        NetAmount: 1500.00
    }
];