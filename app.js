var app= new Vue({
    el: '#app',//Elemento
    data: {//Parametros
       items:[
           {name: 'servicios Web', 
           amount:200, 
           paid:false
        },
           {name: 'Hosting de PixelStone', 
           amount:90, 
           paid: true
        },
        methods:{
            remove(index){
                this.remove.splice(index,1);
            }
        }
       ]
    }
});