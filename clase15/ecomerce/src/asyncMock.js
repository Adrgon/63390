import { collection, doc, writeBatch } from "firebase/firestore";
import { db } from "./services/firebase";

const products = [
  {
    id: "1",
    name: "iPhone 13",
    price: 799,
    category: "phones",
    img: "https://acdn.mitiendanube.com/stores/004/225/021/products/3447123_1_1-d5e4677c987a5c693f17065859030898-1024-1024.webp",
    stock: 25,
    description: "El último iPhone con tecnología avanzada.",
  },
  {
    id: "2",
    name: "Samsung Galaxy S21",
    price: 699,
    category: "phones",
    img: "https://i.ebayimg.com/images/g/C0EAAOSwPC9mVjpy/s-l1600.jpg",
    stock: 30,
    description:
      "Smartphone con cámara de alta resolución y rendimiento rápido.",
  },
  {
    id: "3",
    name: "Google Pixel 6",
    price: 599,
    category: "phones",
    img: "https://resizer.glanacion.com/resizer/v2/los-colores-del-pixel-6-pro-que-tiene-tres-GMHU3FXKAFBP3E5JA2DREMSOWU.jpg?auth=2f0bf015ccf8255d9e10618e7f92afc53f8a6b776f59be2a09fbbae3c8dd91c1&width=420&height=280&quality=70&smart=true",
    stock: 20,
    description: "Teléfono con Android puro y cámara excepcional.",
  },
  {
    id: "4",
    name: "OnePlus 9",
    price: 729,
    category: "phones",
    img: "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvM2E4Mzk0NjUtODc5MC00MGNlLWJkYzQtYjNhMWRmYTFkZmYzLmZlOWRjZGYxMDMyMmUyYTY2YTBlZTUzMGZiZTkxMDgxLnBuZz9vZG5XaWR0aD00MDAmYW1wO29kbkhlaWdodD00MDAmYW1wO29kbkJnPWZmZmZmZg.jpg",
    stock: 15,
    description: "Rendimiento superior y carga rápida.",
  },
  {
    id: "5",
    name: "Sony Xperia 5",
    price: 799,
    category: "phones",
    img: "https://m.media-amazon.com/images/I/7118-aZi+BL._AC_SL1500_.jpg",
    stock: 10,
    description: "Experiencia multimedia increíble con pantalla OLED.",
  },
  {
    id: "6",
    name: "iPad Pro",
    price: 999,
    category: "tablets",
    img: "https://www.cnet.com/a/img/resize/ccef5642fdf26153fe643badf50966b5d1dcc555/hub/2022/10/26/f011b628-3114-4e33-b146-434f13daa92f/ipad-pro-12-9-2022.jpg?auto=webp&fit=crop&height=675&width=1200",
    stock: 12,
    description: "Tableta de alto rendimiento con pantalla Liquid Retina.",
  },
  {
    id: "7",
    name: "Samsung Galaxy Tab S7",
    price: 649,
    category: "tablets",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1hQ7y12od2hMPlrXAgKU9W93YgvRjaWI7ZQ&s",
    stock: 18,
    description: "Pantalla AMOLED y soporte para S Pen.",
  },
  {
    id: "8",
    name: "Microsoft Surface Pro 7",
    price: 749,
    category: "tablets",
    img: "https://m.media-amazon.com/images/I/71VRcitluuL._AC_SL1500_.jpg",
    stock: 8,
    description: "Tableta versátil con Windows 10.",
  },
  {
    id: "9",
    name: "Lenovo Tab P11 Pro",
    price: 499,
    category: "tablets",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQxRr6vgFC5_sZgR0ZkimvjK3dh3t3Jr2DQ&s",
    stock: 20,
    description: "Pantalla OLED y sonido Dolby Atmos.",
  },
  {
    id: "10",
    name: "Amazon Fire HD 10",
    price: 149,
    category: "tablets",
    img: "https://images.fravega.com/f1000/2aa23fb1ab667e7959e9f1f83567ae07.jpg",
    stock: 50,
    description: "Tableta asequible con Alexa integrada.",
  },
  {
    id: "11",
    name: "MacBook Air",
    price: 999,
    category: "computers",
    img: "https://http2.mlstatic.com/D_NQ_NP_801112-MLA46516512347_062021-O.webp",
    stock: 10,
    description: "Portátil ligero con chip M1 de Apple.",
  },
  {
    id: "12",
    name: "Dell XPS 13",
    price: 1099,
    category: "computers",
    img: "https://m.media-amazon.com/images/I/91MXLpouhoL._AC_SL1500_.jpg",
    stock: 7,
    description: "Pantalla InfinityEdge y rendimiento excepcional.",
  },
  {
    id: "13",
    name: "HP Spectre x360",
    price: 1199,
    category: "computers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVQcSfb5YBrwiL_h6SWA4Edyhqvnj8hpRQQ&s",
    stock: 12,
    description: "Portátil convertible con pantalla táctil.",
  },
  {
    id: "14",
    name: "Asus ZenBook 14",
    price: 899,
    category: "computers",
    img: "https://m.media-amazon.com/images/I/81DkONvgRVL._AC_SL1500_.jpg",
    stock: 15,
    description: "Diseño compacto y pantalla NanoEdge.",
  },
  {
    id: "15",
    name: "Microsoft Surface Laptop 4",
    price: 1299,
    category: "computers",
    img: "https://support.content.office.net/es-es/media/b21b03e7-ea23-4339-99b8-185e3d3e916e.png",
    stock: 9,
    description: "Portátil elegante con rendimiento potente.",
  },
  {
    id: "16",
    name: "iPhone 12",
    price: 699,
    category: "phones",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmd5vjpPZOoTD0Z1IpDvBadjJYNVcgck1IOg&s",
    stock: 35,
    description: "Smartphone con tecnología 5G y cámara avanzada.",
  },
  {
    id: "17",
    name: "Samsung Galaxy A52",
    price: 499,
    category: "phones",
    img: "https://m.media-amazon.com/images/I/51KuMb9VYfL._SL500_.jpg",
    stock: 40,
    description: "Teléfono de gama media con gran pantalla y buena cámara.",
  },
  {
    id: "18",
    name: "Xiaomi Mi 11",
    price: 599,
    category: "phones",
    img: "https://acdn.mitiendanube.com/stores/001/531/943/products/415tla0m5wl-_sl500_1-94a983a633b0db14e516402861499690-640-0.jpg",
    stock: 25,
    description: "Smartphone con cámara de 108MP y pantalla AMOLED.",
  },
  {
    id: "19",
    name: "OnePlus Nord",
    price: 399,
    category: "phones",
    img: "https://m.media-amazon.com/images/I/61yDd06pY6L._AC_SL1500_.jpg",
    stock: 20,
    description: "Rendimiento equilibrado y buen diseño.",
  },
  {
    id: "20",
    name: "Nokia 8.3 5G",
    price: 499,
    category: "phones",
    img: "https://m.media-amazon.com/images/I/71jBWPO04qL.jpg",
    stock: 30,
    description: "Teléfono 5G con pantalla grande y batería duradera.",
  },
  {
    id: "21",
    name: "iPad Air",
    price: 599,
    category: "tablets",
    img: "https://rossellimac.es/cdn/shop/files/iPad_Air_13_M2_WiFi_Blue_PDP_Image_Position_1b__ESES_d2a7162d-fc9d-4149-883d-aa0ffa392edd.jpg?v=1716474655&width=1445",
    stock: 14,
    description: "Tableta ligera con rendimiento potente.",
  },
  {
    id: "22",
    name: "Samsung Galaxy Tab A7",
    price: 229,
    category: "tablets",
    img: "https://http2.mlstatic.com/D_765874-MLA47146197629_082021-O.jpg",
    stock: 30,
    description: "Tableta asequible con pantalla grande.",
  },
  {
    id: "23",
    name: "Lenovo Yoga Smart Tab",
    price: 299,
    category: "tablets",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2s_-sOoOsytRxf6K8GPqupOPUwhTDmERvpg&s",
    stock: 20,
    description: "Diseño innovador y altavoces JBL.",
  },
  {
    id: "24",
    name: "Amazon Fire HD 8",
    price: 89,
    category: "tablets",
    img: "https://http2.mlstatic.com/D_NQ_NP_647928-MLU69124692517_042023-O.webp",
    stock: 40,
    description: "Tableta económica con pantalla de 8 pulgadas.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 1000);
  });
};

export const subirProductosFake = async () => {
  const bactch = writeBatch(db)
  const productRef = collection(db, "products")

  products.forEach((item)=> {
    const nuevoDoc = doc(productRef);
    bactch.set(nuevoDoc, item);
  })

  try {
    await bactch.commit()
    console.log("Todos los productos fueron cargados")

  } catch (error){
    console.log("Error al subir productos", error)
  }
}
