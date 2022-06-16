<div class="cart">
    <div class="resume" data-url="{{route('front_cart_store')}}">
        @for($i = 0; $i < count($cart); $i++)
            <table>
                <input type="hidden" id="price_id">
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio€</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
                <tr>
                    <td><img src="images/alaskan-malamute-product.jpg" alt=""></td>
                    <td>ALASKAN MALAMUTE</td>
                    <td>{{$product->prices->base_price}}</td>
                    <td>
                        @include('front.components.desktop.buttons')
                    </td>
                </tr>
            </table>
        @endfor
    </div>

    <div class="payment">
        <table>
            <tr>
                <th></th>
                <th>Resumen de la compra</th>
                <th></th>
            </tr>
            <tr> 
                <td>IVA</td>
                <td></td>
                <td>10€</td>
            </tr>
            <tr> 
                <td>Transporte</td>
                <td></td>
                <td>10€</td>
            </tr>
            <tr>
                <td>Total</td>
                <td></td>
                <td>2420€</td>
            </tr>
        </table>

        <div class="payment-buttons">
            <div class="back">
                <button>Volver</button>
            </div>
            <div class="buy">
                <button>Comprar</button>
            </div>
        </div>
    </div>   
</div>