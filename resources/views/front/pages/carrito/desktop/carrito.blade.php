<div class="cart">
    <div class="resume">
        @if(isset($carts))
            @foreach($carts as $cart)
            <table>
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio€</th>
                    <th>Cantidad</th>
                    <th></th>
                </tr>
                <tr>
                    <td></td>
                    <td>ALASKAN MALAMUTE</td>
                    <td></td>
                    <td>
                        <div class="product-amount">
                            <div class="amount">
                                <div class="less">
                                    <button class="subtract">-</button>
                                </div>
                                <div class="number"><input type="number" class="show" value="1" name="quantity"></div>
                                <div class="more">
                                    <button class="add">+</button>
                                </div>  
                            </div>
                        </div>
                    </td>
                </tr>
            </table>
            @endforeach
        @endif
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