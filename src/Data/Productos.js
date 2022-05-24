const Products = [
  {
    id: "1", name: "Xiaomi Redmi Note 10", price: "56899", description: "Ligero y elegante, amor a primera vista. Parte posterior curva 3D para mejorar el agarre y disfrutar de la máxima comodidad. El suave detalle de los colores naturales acentúa una sencillez de alta calidad.", category: "Celulares", stock: "4", img: "../img/Xiaomi Redmi Note 10.jpg", features: {
      featuresOne: "Dispositivo liberado para que elijas la compañía telefónica que prefieras.", featuresTwo: `Pantalla AMOLED de 6.67".`, featuresThree: "Tiene 4 cámaras traseras de 108Mpx/8Mpx/5Mpx/2Mpx.", featuresFour: "Cámara delantera de 16Mpx.", featuresFive: "Procesador Snapdragon 732G Octa-Core de 2.3GHz con 6GB de RAM.", featuresSix: "Batería de 5020mAh", featuresSeven: "Memoria interna de 128GB.", featuresEight: "Con reconocimiento facial y sensor de huella dactilar."
    }
  },
  {
    id: "2", name: "Motorola Edge 20", price: "119999", description: "El Motorola Edge 20 es la segunda generación de la serie Edge. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, está potenciado por un procesador Snapdragon 778G con 8GB de memoria RAM y 256GB de almacenamiento.", category: "Celulares", stock: "10", img: "../img/Motorola Edge 20.jpg", features: {
      featuresOne: "Dispositivo liberado para que elijas la compañía telefónica que prefieras.", featuresTwo: `Pantalla AMOLED de 6.7".`, featuresThree: "Tiene 3 cámaras traseras de 108Mpx/8Mpx/2Mpx", featuresFour: "Cámara delantera de 32Mpx.", featuresFive: "Procesador MediaTek Dimensity 720 Octa-Core de 2GHz con 6GB de RAM.", featuresSix: "Batería de 5000mAh", featuresSeven: "Memoria interna de 128GB.", featuresEight: "Con reconocimiento facial y sensor de huella dactilar."
    }
  },
  {
    id: "3", name: "Samsung Galaxy S20", price: "86999", description: "Este es un teléfono hecho a la medida para fanáticos de todo tipo. Independientemente de si sos fanático de la fotografía, los juegos o llenar tus redes con todo lo que te inspira, hicimos la mejor combinación de la innovación del S20", category: "Celulares", stock: "5", img: "../img/Samsung Galaxy S20.jpg", features: {
      featuresOne: "Dispositivo liberado para que elijas la compañía telefónica que prefieras.", featuresTwo: `Pantalla Super AMOLED de 6.5".`, featuresThree: "Tiene 4 cámaras traseras de 64Mpx/12Mpx/5Mpx/5Mpx.", featuresFour: "Cámara delantera de 32Mpx.", featuresFive: "Procesador Snapdragon 720G Octa-Core de 2.3GHz con 6GB de RAM.", featuresSix: "Batería de 4500mAh", featuresSeven: "Memoria interna de 128GB.", featuresEight: "Con sensor de huella dactilar."
    }
  },
  {
    id: "4", name: `Smart TV TCL S65A FullHD 40"`, price: "46999", description: "Con el Smart TV L40S65A vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos", category: "Televisores", stock: "2", img: "../img/Smart TV TCL S65A FullHD 40.png", features: {
      featuresOne: "Su resolución es Full HD.", featuresTwo: `Modo de sonido: Dolby Audio, Standard, Dolby MS12D.`, featuresThree: "Manejalo por comando de voz.", featuresFour: "Con Netflix, YouTube, Google Play Movies & TV, Centro de medios, Google Play Games, Google Play Store, Google Cast, E-Sticker.", featuresFive: "Google Assistant, Alexa y AI-IN incorporados.", featuresSix: "Sistema operativo Android Oreo.", featuresSeven: "Capacidad de almacenamiento de 8GB.", featuresEight: "Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB."
    }
  },
  {
    id: "5", name: `Smart TV Philips 7000 4K 50"`, price: "84499", description: "Con el Smart TV 50PUD7406 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.", category: "Televisores", stock: "7", img: "../img/Smart TV Philips 7000 4K 50.jpg", features: {
      featuresOne: "Su resolución es 4K.", featuresTwo: `Modo de sonido: Dolby Atmos, AI Sound.`, featuresThree: "Manejalo por comando de voz.", featuresFour: "Con Prime Video, Disney+, YouTube, Netflix.", featuresFive: "Google Assistant incorporado.", featuresSix: "Sistema operativo Android 10.", featuresSeven: "Capacidad de almacenamiento de 8GB.", featuresEight: "Conectá tus dispositivos mediante sus 4 puertos HDMI y sus 2 puertos USB."
    }
  },
  {
    id: "6", name: `Smart TV Xiaomi 4K 55"`, price: "119900", description: "Con el Smart TV Mi TV P1 55 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.", category: "Televisores", stock: "1", img: "../img/Smart TV Xiaomi 4K 55.jpeg", features: {
      featuresOne: "Su resolución es 4K.", featuresTwo: `Modo de sonido: Dolby Audio, DTS-HD.`, featuresThree: "Manejalo por comando de voz.", featuresFour: "Con Netflix, Prime Video.", featuresFive: "Google Assistant incorporado.", featuresSix: "Sistema operativo Android 10.", featuresSeven: "Capacidad de almacenamiento de 16GB.", featuresEight: "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB."
    }
  },
  {
    id: "7", name: "Notebook HP Pavilion ec1035la", price: "147999", description: "La notebook HP Pavilion Gaming 15-ec1035la es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.", category: "Notebook", stock: "12", img: "../img/Notebook HP Pavilion.jpg", features: {
      featuresOne: "Procesador AMD Ryzen 5.", featuresTwo: `Memoria RAM de 8GB.`, featuresThree: "Disco Rigido SDD 256GB.", featuresFour: "Resolución de 1920x1080 px.", featuresFive: "Placa de video NVIDIA GeForce GTX 1050.", featuresSix: "Conexión wifi y bluetooth.", featuresSeven: "Cuenta con 3 puertos USB y puerto HDMI.", featuresEight: "Con teclado retroiluminado."
    }
  },
  {
    id: "8", name: "Notebook HP 240 G8", price: "49499", description: "La notebook HP 240 G8 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina", category: "Notebook", stock: "7", img: "../img/Notebook HP 240 G8.jpg", features: {
      featuresOne: "Procesador Intel Celeron.", featuresTwo: `Memoria RAM de 4GB.`, featuresThree: "Disco Rigido HDD 512GB.", featuresFour: "Resolución de 1366x768 px", featuresFive: "Placa de video Intel UHD Graphics 600", featuresSix: "Conexión wifi y bluetooth.", featuresSeven: "Cuenta con 3 puertos USB y puerto HDMI.", featuresEight: "Modo de sonido Stereo."
    }
  },
  {
    id: "9", name: "Notebook Dell XPS 7390", price: "331000", description: "Con la notebook 2 en 1 Dell XPS 7390 vas a disfrutar de la combinación única entre portabilidad y usabilidad. Su principal beneficio es su capacidad de transformarse en una tablet sin perder la potencia y el rendimiento de una computadora portátil", category: "Notebook", stock: "5", img: "../img/Notebook Dell XPS 7390.JPG", features: {
      featuresOne: "Procesador Intel i7 1065-G7.", featuresTwo: `Memoria RAM de 16GB.`, featuresThree: "Disco Rigido SDD 512GB.", featuresFour: "Pantalla táctil 4K UHD (3840 x 2160) de 13,3", featuresFive: "Sistema operativo: Windows 10 Home", featuresSix: "Conexión wifi y bluetooth.", featuresSeven: "Cuenta con 4 puertos USB 3.0 y puerto HDMI.", featuresEight: "Altavoces estéreo con Waves MaxxAudio Pro."
    }
  }
]

export const getProducts = new Promise((resolve, reject) => {
  let respond = true
  setTimeout(() => { respond ? resolve(Products) : reject(console.log("Algo salio mal")) }, 2000)
})

