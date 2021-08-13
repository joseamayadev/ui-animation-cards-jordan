# 🏀 Animación de cards al estilo Jordan 🏀
![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628822848/IMAGENES/GITHUB/header-jordan-animation_c1is5k.svg)
<br>

Este diseñ fue creado usando unicamente css y html, lenguajes de programaciones sobre los cuales se fundamente la web.
<br>

Abajo te explico como utilizar este diseño en tu web o relacionados otros de tus elementos para crear una mejor experiencia de usuario.
<br><br>
### Veamos como se ve el diseño final
<br>

![](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628826735/IMAGENES/GITHUB/preview-jordan-cards-animation_rgmjdl.png)

## ¿Conocimiento importantes para el desarrollo?

* CSS / Position Relative
```
.card {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 10000;
    transition: 0.6s;
}
```

* CSS / Position Absolute
```
img {
    position: absolute;
    max-width: 280px;
    left: 20px;
    top: 80px;
    transform: rotate(-35deg);
    transition: 0.5s;
}

```

* CSS / Hover Selector 

```
.contenedor:hover .card img {
    left: 20px;
    top: 40px;
    transition: 0.5s;
}
```

* CSS / ::Before and After Pseudo ELements
```
.contenedor:hover::before {
    width: 250px;
    height: 250px;
    right: -35px;
    top: -30px;
}
```



> Sí no conoces CSS te costará mil veces .

<br>
<br>

## El código en Javascript que permite cambiar las zapatillas
<br>
Es bien sabido que javascript es el lenguaje por mucho mas usado en la web, pero para generar dinamismo esto puede servirte como un compoente y de esa forma te permite generar ids, enlaces dinamicos entre otras cosas para que tus compoentes sean totalmente reactivos o simplemente integrar la card a un motor de plantilla o lo que quieras hacer con ella.
<br>

* Código en js

```
btnMorado.addEventListener("click", () => {
    document.getElementById("imagen").src = "img/awesome-shoes-violet.png";
});
```

Qué simplemente detecta el elemento y te permite cambiar dinamicamente la imagen previamente almacenada en el repo, o generar una función para extraer estos datos desde el backend y generar ids personalizados de forma dinamica y no manual que es mi caso particular.

<br><br>

Este es mi correo profesional ***jose@joseamaya.tech***, si me escribes te aseguro que tendrás una respuesta.

Atentamente, 
<br>
<br>
![Perfil](https://res.cloudinary.com/www-ismyt-com/image/upload/v1628821040/IMAGENES/GITHUB/profile_qcrojr.png)<br>
<strong style="color:#4E54FF;">José A. Amaya</strong>



