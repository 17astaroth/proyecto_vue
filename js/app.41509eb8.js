(function(){"use strict";var a={9430:function(a,e,n){var l=n(9963),o=n(2201),r=n(6252);const i={id:"app"};function s(a,e,n,l,o,s){const t=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(t)])}var t={name:"App"},u=n(3744);const c=(0,u.Z)(t,[["render",s]]);var d=c,p=n(6154),m=n(2346),g=n(3577);const v=a=>((0,r.dD)("data-v-7b8bfb76"),a=a(),(0,r.Cn)(),a),_={class:"container"},b={class:"row"},h={class:"col m12 card-panel"},f={class:"row"},y={class:"col m4"},w=v((()=>(0,r._)("label",null,"Nombre completo",-1))),U={class:"col m4"},k=v((()=>(0,r._)("label",null,"Edad",-1))),z={class:"col m4"},O=v((()=>(0,r._)("label",null,"Correo",-1))),j={class:"row"},D={class:"col m4"},S=v((()=>(0,r._)("label",null,"¿Cuántos minutos pasas en la ducha?",-1))),C={class:"col m4"},E=v((()=>(0,r._)("label",null,"¿Lava la ropa a mano o utiliza una lavadora?",-1))),x=v((()=>(0,r._)("option",{value:""},"Seleccione",-1))),A=["value"],V={class:"col m4"},q=v((()=>(0,r._)("label",null,"¿Lava los trastes a mano o utiliza un lavavajillas?",-1))),N=v((()=>(0,r._)("option",{value:""},"Seleccione",-1))),M=["value"],L={class:"row"},I={class:"col m4"},P=v((()=>(0,r._)("label",null,"¿Cuántos días a la semana trapeas el suelo de tu casa o patio?",-1))),R={class:"col m4"},H=v((()=>(0,r._)("label",null,"¿Cuántos días al mes lavas tu auto? (Si no tienes un auto, por favor, pon 0)",-1))),Y={class:"col m4"},F=v((()=>(0,r._)("label",null,"¿Cuántas veces al día descargas el inodoro?",-1))),K={class:"row"},T={class:"col m4 card-panel"},Z=v((()=>(0,r._)("label",null,"Ingrese los lugares que visita a diario en los que es consciente de que consume agua",-1))),W=v((()=>(0,r._)("button",{type:"submit",class:"btn indigo darken-3"},[(0,r.Uk)("AGREGAR lugar "),(0,r._)("i",{class:"material-icons right"},"add_circle")],-1))),G=v((()=>(0,r._)("br",null,null,-1))),B=v((()=>(0,r._)("a",{href:"#!"},[(0,r._)("i",{class:"material-icons"},"close")],-1))),J={class:"row"},Q={class:"col m4"},X=v((()=>(0,r._)("span",null,"Conscientemente ¿sientes que en tu día a día desperdicias agua?",-1))),$=v((()=>(0,r._)("div",{class:"row"},[(0,r._)("button",{type:"submit",class:"btn indigo darken-4"},[(0,r.Uk)("ENVIAR "),(0,r._)("i",{class:"material-icons right"},"send")])],-1))),aa={class:"row"},ea={class:"col m12"},na={class:"table bordered striped"},la=v((()=>(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Nombre completo"),(0,r._)("th",null,"Edad"),(0,r._)("th",null,"Correo"),(0,r._)("th",null,"Lugares"),(0,r._)("th",null,"Son concientes")])],-1))),oa=["onUpdate:modelValue"],ra=v((()=>(0,r._)("span",null,null,-1))),ia={type:"button",class:"btn indigo darken-4"},sa=v((()=>(0,r._)("i",{class:"material-icons right"},"local_drink",-1))),ta=v((()=>(0,r._)("br",null,null,-1)));function ua(a,e,n,o,i,s){const t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",_,[(0,r._)("div",b,[(0,r._)("div",h,[(0,r._)("form",{onSubmit:e[12]||(e[12]=(0,l.iM)(((...a)=>s.agregarUsuario&&s.agregarUsuario(...a)),["prevent"]))},[(0,r._)("div",f,[(0,r._)("div",y,[w,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>i.nombre=a)},null,512),[[l.nr,i.nombre]])]),(0,r._)("div",U,[k,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=a=>i.edad=a)},null,512),[[l.nr,i.edad]])]),(0,r._)("div",z,[O,(0,r.wy)((0,r._)("input",{type:"email","onUpdate:modelValue":e[2]||(e[2]=a=>i.correo=a)},null,512),[[l.nr,i.correo]])])]),(0,r._)("div",j,[(0,r._)("div",D,[S,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=a=>i.ducha=a)},null,512),[[l.nr,i.ducha]])]),(0,r._)("div",C,[E,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":e[4]||(e[4]=a=>i.lavar_ropa=a)},[x,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.lavarRopaOp,(a=>((0,r.wg)(),(0,r.iD)("option",{key:a,value:a.id1},(0,g.zw)(a.descripcion1),9,A)))),128))],512),[[l.bM,i.lavar_ropa]])]),(0,r._)("div",V,[q,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":e[5]||(e[5]=a=>i.lavar_ropa=a)},[N,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.lavarTrastesOp,(a=>((0,r.wg)(),(0,r.iD)("option",{key:a,value:a.id2},(0,g.zw)(a.descripcion2),9,M)))),128))],512),[[l.bM,i.lavar_ropa]])])]),(0,r._)("div",L,[(0,r._)("div",I,[P,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[6]||(e[6]=a=>i.trapeando=a)},null,512),[[l.nr,i.trapeando]])]),(0,r._)("div",R,[H,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=a=>i.lavarAuto=a)},null,512),[[l.nr,i.lavarAuto]])]),(0,r._)("div",Y,[F,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=a=>i.inodoro=a)},null,512),[[l.nr,i.inodoro]])])]),(0,r._)("div",K,[(0,r._)("form",{onSubmit:e[10]||(e[10]=(0,l.iM)(((...a)=>s.agregarLugar&&s.agregarLugar(...a)),["prevent"]))},[(0,r._)("div",T,[Z,(0,r.wy)((0,r._)("input",{type:"text","onUpdate:modelValue":e[9]||(e[9]=a=>i.lugar=a)},null,512),[[l.nr,i.lugar]]),W,G,(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.lugars,(a=>((0,r.wg)(),(0,r.iD)("li",{key:a},[(0,r.Uk)((0,g.zw)(a.id)+" - "+(0,g.zw)(a.descripcion)+" ",1),B])))),128))])])],32)]),(0,r._)("div",J,[(0,r._)("div",Q,[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":e[11]||(e[11]=a=>i.confirmacion=a)},null,512),[[l.e8,i.confirmacion]]),X])])]),$],32)])]),(0,r._)("div",aa,[(0,r._)("div",ea,[(0,r._)("table",na,[la,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.usuarios,(a=>((0,r.wg)(),(0,r.iD)("tr",{key:a},[(0,r._)("td",null,(0,g.zw)(a.nombre),1),(0,r._)("td",null,(0,g.zw)(a.edad),1),(0,r._)("td",null,(0,g.zw)(a.correo),1),(0,r._)("td",null,[(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.lugars,(a=>((0,r.wg)(),(0,r.iD)("li",{key:a},(0,g.zw)(a.id)+" - "+(0,g.zw)(a.descripcion),1)))),128))])]),(0,r._)("td",null,[(0,r._)("label",null,[(0,r.wy)((0,r._)("input",{type:"checkbox",disabled:"","onUpdate:modelValue":e=>a.confirmacion=e},null,8,oa),[[l.e8,a.confirmacion]]),ra])])])))),128))])])])])]),(0,r._)("div",null,[(0,r._)("button",ia,[(0,r.Wm)(t,{to:"/detail"},{default:(0,r.w5)((()=>[(0,r.Uk)("RECOMENDACIONESSS")])),_:1}),sa])]),ta],64)}n(560);var ca=n(1747),da=n.n(ca),pa={name:"FormularioPrincipal",data(){return{nombre:"",edad:0,correo:"",ducha:0,lavar_ropa:"",lavar_trastes:"",trapeando:0,lavarAuto:0,inodoro:0,confirmacion:!1,lugar:"",lugars:[],usuarios:[],select_instances1:[],lavarRopaOp:[{id1:"L",descripcion1:"Lavadora"},{id1:"F",descripcion1:"Fregando"}],select_instances2:[],lavarTrastesOp:[{id2:"MM",descripcion2:"Lavavajillas"},{id2:"M",descripcion2:"A mano"}]}},mounted(){var a=document.querySelectorAll("select");this.select_instances1=da().FormSelect.init(a,null);var e=document.querySelectorAll("select");this.select_instances2=da().FormSelect.init(e,null)},methods:{redireccion(){location.href="ventana.html"},agregarUsuario(){var a={nombre:this.nombre,edad:this.edad,correo:this.correo,lugars:this.lugars,confirmacion:this.confirmacion};this.usuarios.push(a),this.nombre="",this.edad=0,this.correo="",this.lugar="",this.lugars=[],this.confirmacion=!1},agregarLugar(){var a=this.lugars.length,e=0;a>0&&(e=this.lugars[a-1].id);var n={id:e+1,descripcion:this.lugar};this.lugars.push(n),this.lugar=""}}};const ma=(0,u.Z)(pa,[["render",ua],["__scopeId","data-v-7b8bfb76"]]);var ga=ma,va=n(2262);const _a=a=>((0,r.dD)("data-v-787a181a"),a=a(),(0,r.Cn)(),a),ba=_a((()=>(0,r._)("h1",null,"Practicas",-1))),ha=["src"],fa={class:"last-paragraph"};var ya={__name:"PracticasComponente",setup(a){const e=(0,va.iH)([{image:"../src/components/imagenes/img3.jpg",title:"Reducir el uso del agua",description:"Reducir el uso de agua es la manera más efectiva de cuidar el agua. Participar en campañas de limpieza puede ayudar a reducir la cantidad de basura y contaminantes en el agua. Además, al participar en estas campañas, puedes sensibilizar a otros sobre la importancia del cuidado del agua."},{image:"../src/components/imagenes/img2.jpg",title:"Cuida las instalaciones de agua de tu casa",description:"Una de las maneras de cuidar el agua es tener en cuenta las revisiones de las instalaciones. Es aconsejable revisar si hay pérdidas en el sistema de cañerías y reparar las fugas de agua cuanto antes. El goteo constante en los grifos de agua potable y de tuberías de entrada y salida de agua de tu casa puede hacer que se pierdan varios litros al día, cantidad nada despreciable a lo largo de, por ejemplo, un año. Asimismo, también da aviso a quien corresponda si ves alguna fuga de agua en cualquier lugar fuera de casa par arreglarlo lo antes posible."},{image:"../src/components/imagenes/img1.jpg",title:"Reduce el agua de la cisterna del inodoro",description:"Otra de las mejores ideas para cuidar el agua es colocar una o dos botellas llenas de agua en la cisterna del retrete. Este gesto evitará malgastar agua, ya que se ocupa espacio y así se reduce el volumen de agua de la cisterna y realmente casi nunca se necesita la gran cantidad que se desprende cada vez que tiramos de la cadena."},{image:"../src/components/imagenes/img4.jpg",title:"En la ducha",description:"No malgastes el agua fría. Prepare un balde mientras te bañas para recoger agua fría mientras sale agua caliente. Puede usarlo para limpiar la casa, el automóvil, regar las plantas o dárselo a su mascota. No tomes mucho tiempo bañándote. Tome una ducha corta y cierre el grifo mientras te enjabona o lava con champú. No en la ducha! No te afeites ni te laves los dientes en la ducha, además de tirar mucha agua estarás haciéndolo en el lugar incorrecto. Ahorro y control total del agua. Instala dispensadores para ahorrar agua en la ducha, inodoro y lavabo; Son fáciles de instalar y se pueden comprar en tiendas de autoservicio, ferreterías o supermercados."},{image:"../src/components/imagenes/img5.jpg",title:"Limpieza en la casa",description:"Elimine las partículas faltantes con otras herramientas como un cepillo o franela. Dale un buen uso a tus herramientas de limpieza. Solo usa solo una tina de agua, franela y una escoba para limpiar pisos, paredes y vidrio. No gastes agua en otros recipientes para limpiar. Uso de productos amigables con el planeta. Usa productos de limpieza biodegradables para la limpieza general de la casa, los platos y la ropa. De este modo no se contaminan las aguas residuales. No la tires solo así. Use el agua con jabón que utilizaste para limpiar en otras áreas como en lavadora para limpiar los inodoros, la terraza o el baño."}]);return(a,n)=>{const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",null,[ba,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.value,(a=>((0,r.wg)(),(0,r.iD)("div",{key:a.id},[(0,r._)("img",{src:a.image,style:{width:"300px"}},null,8,ha),(0,r._)("h2",null,(0,g.zw)(a.title),1),(0,r._)("p",fa,(0,g.zw)(a.description),1)])))),128)),(0,r.Wm)(l,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("INICIO")])),_:1})])}}};const wa=(0,u.Z)(ya,[["__scopeId","data-v-787a181a"]]);var Ua=wa;const ka=[{path:"/",component:ga},{path:"/detail",component:Ua}],za=(0,o.p7)({history:(0,o.r5)(),routes:ka}),Oa=(0,l.ri)(d);Oa.use(za,m.Z,p.Z),Oa.mount("#app")}},e={};function n(l){var o=e[l];if(void 0!==o)return o.exports;var r=e[l]={id:l,loaded:!1,exports:{}};return a[l].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=a,function(){n.amdO={}}(),function(){var a=[];n.O=function(e,l,o,r){if(!l){var i=1/0;for(c=0;c<a.length;c++){l=a[c][0],o=a[c][1],r=a[c][2];for(var s=!0,t=0;t<l.length;t++)(!1&r||i>=r)&&Object.keys(n.O).every((function(a){return n.O[a](l[t])}))?l.splice(t--,1):(s=!1,r<i&&(i=r));if(s){a.splice(c--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var c=a.length;c>0&&a[c-1][2]>r;c--)a[c]=a[c-1];a[c]=[l,o,r]}}(),function(){n.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(e,{a:e}),e}}(),function(){n.d=function(a,e){for(var l in e)n.o(e,l)&&!n.o(a,l)&&Object.defineProperty(a,l,{enumerable:!0,get:e[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(a){return a=Object.create(a),a.children||(a.children=[]),Object.defineProperty(a,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+a.id)}}),a}}(),function(){n.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){var a={143:0};n.O.j=function(e){return 0===a[e]};var e=function(e,l){var o,r,i=l[0],s=l[1],t=l[2],u=0;if(i.some((function(e){return 0!==a[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(t)var c=t(n)}for(e&&e(l);u<i.length;u++)r=i[u],n.o(a,r)&&a[r]&&a[r][0](),a[r]=0;return n.O(c)},l=self["webpackChunkvue_proyecto02"]=self["webpackChunkvue_proyecto02"]||[];l.forEach(e.bind(null,0)),l.push=e.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(9430)}));l=n.O(l)})();
//# sourceMappingURL=app.41509eb8.js.map