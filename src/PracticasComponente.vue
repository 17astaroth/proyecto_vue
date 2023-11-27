<template>
    <div>
        <h1>Practicas</h1>
        <div v-for="practica in practicas" :key="practica.id">
            <img :src="practica.image" :style="{ width: '300px' }" />
            <h2>{{ practica.title }}</h2>
            <p class="last-paragraph">{{ practica.description }}</p>
        </div>
        <router-link to="/">INICIO</router-link>
    </div>
</template>
  
<!--
<tr v-for="user in users" :key="user.id">
	<td>{{ user.firstName }}</td>
	<td>{{ user.lastName }}</td>
</tr>
-->


<script setup>
import { ref } from 'vue';

const practicas = ref([
    {
        image: '../src/components/imagenes/img3.jpg',
        title: "Reducir el uso del agua",
        description:
            "Reducir el uso de agua es la manera más efectiva de cuidar el agua. Participar en campañas de limpieza puede ayudar a reducir la cantidad de basura y contaminantes en el agua. Además, al participar en estas campañas, puedes sensibilizar a otros sobre la importancia del cuidado del agua.",
    },
    {
        image: '../src/components/imagenes/img2.jpg',
        title: "Cuida las instalaciones de agua de tu casa",
        description:
            "Una de las maneras de cuidar el agua es tener en cuenta las revisiones de las instalaciones. Es aconsejable revisar si hay pérdidas en el sistema de cañerías y reparar las fugas de agua cuanto antes. El goteo constante en los grifos de agua potable y de tuberías de entrada y salida de agua de tu casa puede hacer que se pierdan varios litros al día, cantidad nada despreciable a lo largo de, por ejemplo, un año. Asimismo, también da aviso a quien corresponda si ves alguna fuga de agua en cualquier lugar fuera de casa par arreglarlo lo antes posible.",
    },
    {
        image: '../src/components/imagenes/img1.jpg',
        title: "Reduce el agua de la cisterna del inodoro",
        description:
            "Otra de las mejores ideas para cuidar el agua es colocar una o dos botellas llenas de agua en la cisterna del retrete. Este gesto evitará malgastar agua, ya que se ocupa espacio y así se reduce el volumen de agua de la cisterna y realmente casi nunca se necesita la gran cantidad que se desprende cada vez que tiramos de la cadena.",
    },
    {
        image: '../src/components/imagenes/img4.jpg',
        title: "En la ducha",
        description:
            "No malgastes el agua fría. Prepare un balde mientras te bañas para recoger agua fría mientras sale agua caliente. Puede usarlo para limpiar la casa, el automóvil, regar las plantas o dárselo a su mascota. No tomes mucho tiempo bañándote. Tome una ducha corta y cierre el grifo mientras te enjabona o lava con champú. No en la ducha! No te afeites ni te laves los dientes en la ducha, además de tirar mucha agua estarás haciéndolo en el lugar incorrecto. Ahorro y control total del agua. Instala dispensadores para ahorrar agua en la ducha, inodoro y lavabo; Son fáciles de instalar y se pueden comprar en tiendas de autoservicio, ferreterías o supermercados.",
    },
    {
        image: '../src/components/imagenes/img5.jpg',
        title: "Limpieza en la casa",
        description:
            "Elimine las partículas faltantes con otras herramientas como un cepillo o franela. Dale un buen uso a tus herramientas de limpieza. Solo usa solo una tina de agua, franela y una escoba para limpiar pisos, paredes y vidrio. No gastes agua en otros recipientes para limpiar. Uso de productos amigables con el planeta. Usa productos de limpieza biodegradables para la limpieza general de la casa, los platos y la ropa. De este modo no se contaminan las aguas residuales. No la tires solo así. Use el agua con jabón que utilizaste para limpiar en otras áreas como en lavadora para limpiar los inodoros, la terraza o el baño.",
    }
]);
</script>




<style scoped>
p.last-paragraph {
    font-size: 18px;
    color: #000;
    font-weight: 500;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.h2 {
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 900;
    color: #000;
    line-height: 1.5;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>




  
 