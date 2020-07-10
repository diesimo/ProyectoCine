import React from 'react';
import { Component } from 'react';
import './productos.css';

import * as $ from 'jquery';

window.jQuery = window.$ =$;





class Productos extends Component{

   

    render(){

        $(document).ready(function(){
            $('.category_list .category_item[category="all"]').addClass('ct_item-active');
        
            $('.category_item').click(function(){
                var catProduct=$(this).attr('category');
                
        
                $('.category_item').removeClass('ct_item-active');
                $(this).addClass('ct_item-active');
        
                /*ocultando productos*/
        
                $('.product-item').hide();
        
                /*mostrando productos*/
        
                $('.product-item[category="'+catProduct+'"]').show();
            })
        
            $('.category_item[category="all"]').click(function(){
        
                $('.product-item').show();
        
            })
        })

       

        return(
            <div  classname="productos">
                <h1>Catálogo de productos</h1>
                <div class="store-wrapper">
                    <div class="category_list">
                        <a href="#" class="category_item " category="all">Todo</a>
                        <a href="#" class="category_item" category="comida">Comida</a>
                        <a href="#" class="category_item" category="dulces">Snacks</a>
                        <a href="#" class="category_item" category="bebidas">Bebidas</a>
                        <a href="#" class="category_item" category="alcohol">Alcohol</a>
        
        
                    </div>
                    <section class="products-list">
                        <div class="product-item" category="comida">
                        <img src="imagenes/cotufas.png"></img>
                        <a href="#">Pop Corn</a>
                    </div>

                    <div class="product-item" category="comida">
                        <img src="./hotdog.png"></img>
                        <a href="#">Hot Dog</a>
                    </div>

                    <div class="product-item" category="comida">
                        <img src="imagenes/nuggets.png"></img>
                        <a href="#">Nuggets</a>
                    </div>

                    <div class="product-item" category="comida">
                        <img src="imagenes/papitas.png"></img>
                        <a href="#">Papitas Fritas</a>
                    </div>

                    <div class="product-item" category="comida">
                        <img src="imagenes/tequenos.png"></img>
                        <a href="#">Tequeños</a>
                    </div>

                    <div class="product-item" category="dulces">
                        <img src="imagenes/mym.png"></img>
                        <a href="#">MM</a>
                    </div>

                    <div class="product-item" category="dulces">
                        <img src="imagenes/cheetos.png"></img>
                        <a href="#">Cheetos</a>
                    </div>

                    <div class="product-item" category="dulces">
                        <img src="imagenes/oreo.png"></img>
                        <a href="#">Oreos</a>
                    </div>

                    <div class="product-item" category="dulces">
                        <img src="imagenes/ruffles.png"></img>
                        <a href="#">Ruffles</a>
                    </div>

                    <div class="product-item" category="dulces">
                        <img src="imagenes/skittles.png"></img>
                        <a href="#">Skittles</a>
                    </div>

                    <div class="product-item" category="bebidas">
                        <img src="imagenes/cocacola.png"></img>
                        <a href="#">Coca-cola</a>
                    </div>

                    <div class="product-item" category="bebidas">
                        <img src="imagenes/Sprite.png"></img>
                        <a href="#">Sprite</a>
                    </div>

                    <div class="product-item" category="bebidas">
                        <img src="imagenes/agua.png"></img>
                        <a href="#">Agua</a>
                    </div>

                    <div class="product-item" category="bebidas">
                        <img src="imagenes/fanta.png"></img>
                        <a href="#">Fanta</a>
                    </div>

                    <div class="product-item" category="bebidas">
                        <img src="imagenes/nestea.png"></img>
                        <a href="#">Nestea</a>
                    </div>

                    <div class="product-item" category="alcohol">
                        <img src="imagenes/ron.png"></img>
                        <a href="#">Ron Santa Teresa</a>
                    </div>

                    <div class="product-item" category="alcohol">
                        <img src="imagenes/vodka.png"></img>
                        <a href="#">Vodka</a>
                    </div>

                    <div class="product-item" category="alcohol">
                        <img src="imagenes/vino.png"></img>
                        <a href="#">Vinos</a>
                    </div>

                    <div class="product-item" category="alcohol">
                        <img src="imagenes/cerveza.png"></img>
                        <a href="#">Cervezas</a>
                    </div>

                    <div class="product-item" category="alcohol">
                        <img src="imagenes/whiskey.png"></img>
                        <a href="#">Jack Daniel's</a>
                    </div>
                </section>
                
                </div>
            </div>
        );
    }
}

export default Productos;
