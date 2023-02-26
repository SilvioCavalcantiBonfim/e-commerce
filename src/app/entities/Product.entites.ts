export interface Product{
    id: string,
    name: string,
    img: string,
    price: number,
    discount: number
}


export const products = [
    { id: '1',  name: "Mouse gamer",              price: 439.00,   img: "/assets/mouse-3.png",          discount: 0.2 },
    { id: '2',  name: "Monitor muito bom",        price: 1200.50,  img: "/assets/monitor-1.png" ,       discount: 0},
    { id: '3',  name: "Teclado excelente",        price: 749.99,   img: "/assets/teclado-1.png",        discount: 0.22},
    { id: '4',  name: "Fone para quem joga FPS",  price: 599.99,   img: "/assets/fone-de-ouvido-2.png", discount: 0.15},
    { id: '5',  name: "Fone de ouvido",           price: 299.99,   img: "/assets/fone-de-ouvido-1.png", discount: 0},
    { id: '6',  name: "Fone de ouvido bom",       price: 399.99,   img: "/assets/fone-de-ouvido-3.png", discount: 0},
    { id: '7',  name: "HD 1TB",                   price: 499.99,   img: "/assets/hd.png",               discount: 0.1  },
    { id: '8',  name: "Combo de placa de vídeos", price: 18449.99, img: "/assets/placa-video.png",      discount: 0},
    { id: '9',  name: "Processador Ryzen",        price: 1000,     img: "/assets/processador.png",      discount: 0},
    { id: '10', name: "Notebook bom",             price: 2500,     img: "/assets/laptop-1.png",         discount: 0},
    { id: '11', name: "Notebook excelente",       price: 4500,     img: "/assets/laptop-2.png",         discount: 0},
    { id: '12', name: "Mouse barato",             price: 20,       img: "/assets/mouse-4.png",          discount: 0},
    { id: '13', name: "Mouse ótimo",              price: 200,      img: "/assets/mouse-2.png",          discount: 0},
    { id: '14', name: "Mouse bom",                price: 50,       img: "/assets/mouse-1.png",          discount: 0},
    { id: '15', name: "Teclado bom",              price: 159.99,   img: "/assets/teclado-2.png",        discount: 0}
]