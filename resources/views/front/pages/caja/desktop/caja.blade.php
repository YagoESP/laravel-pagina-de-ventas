<div class="check page-section" id="check">
    <form class="front-form-checkout" action="{{route('front_checkout_form')}}">

        <div class="desktop-two-columns">
            <div class="column">
                <div class="checkout-form">
                    <input type="hidden" name="tax_total_price" value="{{$tax_total}}">
                    <input type="hidden" name="base_total_price" value="{{$base_total}}">
                    <input type="hidden" name="total_price" value="{{$total}}">
                    <input type="hidden" name="fingerprint" value="{{$fingerprint}}">

                    <div class="desktop-two-columns">
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Nombre</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text" name="name">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Apellidos</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text" name="surname">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="desktop-two-columns ">
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Teléfono</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="tel" name="phone">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Correo</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="email" name="email">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="desktop-two-columns">
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Ciudad</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text" name="city">
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Codigo Postal</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="number" name="postal_code">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="desktop-one-columns">
                        <div class="column">
                            <div class="form-element">
                                <div class="form-element-label">
                                    <label>Dirección</label>
                                </div>
                                <div class="form-element-input">
                                    <input type="text" name="address">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="column border">
                <div class="pay">
                    <div class="payment">
                    
                        <table>
                            <tr>
                                <th></th>
                                <th>Resumen de la compra</th>
                                <th></th>
                            </tr>
                        
                            <tr class="transport"> 
                                <td>Base Imponible</td>
                                <td></td>
                                <td>{{$base_total}}</td>
                            </tr>
                            <tr class="Iva"> 
                                <td>IVA</td>
                                <td></td>
                                <td>{{$tax_total}}</td>
                            </tr>
                            <tr class="total">
                                <td>Total</td>
                                <td></td>
                                <td>{{$total}}</td>
                            </tr>
                        </table>
                        
                    </div>

                    

                    <div class="pay-options">
                        <div class="">
                            <input type="radio" name="payment_method_id" value="1">
                        <label for="">Transferencia Bancaria</label>
                        </div>
                        <div>
                            <input type="radio" name="payment_method_id" value="2"> 
                        <label for="">Paypal</label>
                        </div>
                        <div>
                            <input type="radio" name="payment_method_id" value="3"> 
                        <label for="">Tarjeta de crédito</label>
                        </div>

                        <div class="pay-button">
                            <button class="purchase-button">PAGAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>