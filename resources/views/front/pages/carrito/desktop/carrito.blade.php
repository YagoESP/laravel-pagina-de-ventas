<div class="cart">
    <div class="resume">
 
            <table>
                
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio€</th>
                    <th></th>
                    <th>Cantidad</th>
                </tr>

                @if(isset($carts))
                    @foreach($carts as $cart)
                        <tr>
                            <td></td>
                            <td>{{$cart->price->product->title}}</td>
                            <td>{{$cart->price->base_price}}</td>
                            <td>
                                <div class="product-amount">
                                    <div class="amount">
                                        <div class="less">
                                            <button class="subtract" data-url="{{route('front_cart_minus',['price_id'=> $cart->price_id, 'fingerprint' => $fingerprint])}}">-</button>
                                        </div>
                                        
                                        <div class="number">
                                            <input type="number" class="show" value="{{$cart->quantity}}"  name="quantity">
                                        </div>
                                        
                                        <div class="more">
                                            <button class="add" data-url="{{route('front_cart_plus', ['price_id'=> $cart->price_id ,'fingerprint' => $fingerprint])}}">+</button>
                                        </div>  
                                    </div>
                                </div>
                            </td>
                            <td></td>
                        </tr>
                    @endforeach
                @endif
            </table>
  
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