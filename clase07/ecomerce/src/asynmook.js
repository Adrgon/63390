const products =[
  {
    id: "1",
    name: "iPhone 12",
    price: 1000,
    category: "celular",
    img: "https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png",
    stock: 25,
    description: "Descripción de iPhone 12",
  },
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: 900,
    category: "celular",
    img: "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-g991bzgearo/gallery/ar-galaxy-s21-5g-g991-371504-sm-g991bzgearo-368615470",
    stock: 30,
    description: "Descripción de Samsung Galaxy S21",
  },
  {
    id: "3",
    name: "Xiaomi Mi 11",
    price: 800,
    category: "celular",
    img: "https://www.clikstore.com.uy/wp-content/uploads/2021/05/Xiaomi-mi-11-blanco.jpg",
    stock: 20,
    description: "Descripción de Xiaomi Mi 11",
  },
  {
    id: "4",
    name: "MacBook Pro 16",
    price: 2500,
    category: "laptop",
    img: "https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Apple_MacBook_Pro_16_MVVM2D_A_V01_2805.jpg",
    stock: 10,
    description: "Descripción de MacBook Pro 16",
  },
  {
    id: "5",
    name: "Dell XPS 13",
    price: 1200,
    category: "laptop",
    img: "https://i.dell.com/sites/csimages/Merchandizing_Imagery/all/xps-13-9305-laptop-left-facing.png",
    stock: 15,
    description: "Descripción de Dell XPS 13",
  },
  {
    id: "6",
    name: "Lenovo ThinkPad X1",
    price: 1300,
    category: "laptop",
    img: "https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Lenovo_ThinkPad_X1_Carbon_Gen9_V01.png",
    stock: 12,
    description: "Descripción de Lenovo ThinkPad X1",
  },
  {
    id: "7",
    name: "Sony WH-1000XM4",
    price: 350,
    category: "audifonos",
    img: "https://cdn1.smartprix.com/rx-iNDCiUDIo-w1200-h1200/NDCiUDIo.jpg",
    stock: 40,
    description: "Descripción de Sony WH-1000XM4",
  },
  {
    id: "8",
    name: "Bose QuietComfort 35 II",
    price: 300,
    category: "audifonos",
    img: "https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/headphones/quietcomfort_35_ii/product_silo_images/qc35ii_blk_ecom_1a.psd/jcr:content/renditions/cq5dam.web.320.320.png",
    stock: 35,
    description: "Descripción de Bose QuietComfort 35 II",
  },
  {
    id: "9",
    name: "Apple Watch Series 6",
    price: 500,
    category: "reloj inteligente",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAX2_VW_34FR+watch-44-alum-spacegray-nc-6s_VW_34FR_WF_CO_GEO_US?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1599366595000",
    stock: 25,
    description: "Descripción de Apple Watch Series 6",
  },
  {
    id: "10",
    name: "Fitbit Charge 4",
    price: 150,
    category: "reloj inteligente",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MYAX2_VW_34FR+watch-44-alum-spacegray-nc-6s_VW_34FR_WF_CO_GEO_US?wid=400&hei=400&fmt=jpeg&qlt=95&.v=1599366595000",
    stock: 40,
    description: "Descripción de Fitbit Charge 4",
  },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        }, 2500)
    })
}

export const getProductsByCategory = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((product) => product.category === categoria))
    }, 2500);
  });
};
