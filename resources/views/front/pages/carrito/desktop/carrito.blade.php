<div class="cart page-section" id="cart">
    <div class="resume">
 
            <table>
                
                <tr>
                    <th></th>
                    <th>Producto</th>
                    <th>Precio€</th>
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
                                            <button class="plus-minus-button" data-url="{{route('front_cart_minus',['price_id'=> $cart->price_id, 'fingerprint' => $fingerprint])}}">-</button>
                                        </div>
                                        
                                        <div class="number">
                                            <input type="number" class="show" value="{{$cart->quantity}}"  name="quantity">
                                        </div>
                                        
                                        <div class="more">
                                            <button class="plus-minus-button" data-url="{{route('front_cart_plus', ['price_id'=> $cart->price_id ,'fingerprint' => $fingerprint])}}">+</button>
                                        </div>  
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                @endif
            </table>
  
    </div>

    <div class="payment">
        @if(isset($carts))
        <table>
            <tr>
                <th></th>
                <th>Resumen de la compra</th>
                <th></th>
            </tr>
            <tr> 
                <td>IVA</td>
                <td></td>
                <td>{{$tax_total}}€</td>
            </tr>
            <tr> 
                <td>Precio Base</td>
                <td></td>
                <td>{{$base_total}}€</td>
            </tr>
            <tr>
                <td>Total</td>
                <td></td>
                <td>{{$total}}€</td>
            </tr>
        </table>
        @endif
    

        <div class="payment-buttons">
            <div class="back" >
                <button class="back-button" >Volver</button>
            </div>
            <div class="buy">
                <button class="buy-button-cart" data-url="{{route('front_checkout', ['fingerprint' => $fingerprint])}}">Pagar</button>
            </div>
        </div>
    </div>   
</div>