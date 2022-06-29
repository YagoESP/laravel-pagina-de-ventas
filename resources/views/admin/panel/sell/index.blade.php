@extends('admin.layout.table-form')

@section('table')
    @include('admin.components.desktop.model-delay')
    <div class="registers">
        @if(isset($sells))
            @foreach($sells as $sell_element)     
                <div class="registers-item">
                    <div class="desktop-two-columns">
                        <div class="column">
                            <div class="register">
                                <div><label for="">Ticket:<span>{{$sell_element->id}}</span></label></div>
                                <div><label for="">Metodo de Pago:<span>{{$sell_element->payment_method_id}}</span></label></div>
                                <div><label for="">Creado:<span>{{$sell_element->created_at}}</span></label></div>
                            </div>
                        </div>
                    
                        <div class="column">
                            <div class="register-icons">
                                <span>
                                    <svg viewBox="0 0 24 24" class="edit-button" data-url="{{route('sells_edit',['sell'=>$sell_element->id])}}">
                                        <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                    </svg>
                                </span>
                                <span>
                                    <svg viewBox="0 0 24 24" class="delete-button" data-url="{{route('sells_destroy',['sell'=>$sell_element->id])}}">
                                        <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        @endif

        <div class="register-data">
           
        </div>
    </div>

@endsection

@section('form')
    @if(isset($sells))
        <form class="admin-form" action="{{route("sells_store")}}">
            <input type="hidden" name="id" value="{{isset($sells->id) ? $sells->id : ''}}">
                <div class="desktop-one-column">
                    <div class="form-group label-group-info">
                        <div class="form-label title">
                            <label for="">Datos de la Venta:</label>
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group label-group">
                        <div class="form-label title">
                            <label for="">Ticket:</label>
                        </div>
                        <div class="form-label content">
                            <label name="ticket_number">{{$sell->ticket_number}}</label>
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group label-group">
                        <div class="form-label">
                            <label for="">Metodo de Pago:</label>
                        </div>
                        <div class="form-label">
                            <label name="payment_method_id">{{$sell->payment_method_id}}</label>
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group label-group">
                        <div class="form-label">
                            <label for="">Total Base:</label>
                        </div>
                        <div class="form-label">
                            <label name="total_base_price">{{ $sell->total_base_price }}</label>
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group label-group">
                        <div class="form-label">
                            <label for="">Total IVA:</label>
                        </div>
                        <div class="form-label">
                            <label name="total_tax_price">{{ $sell->total_tax_price }}</label>
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group label-group">
                        <div class="form-label">
                            <label for="">Total:</label>
                        </div>
                        <div class="form-label">
                            <label name="total_price">{{ $sell->total_price }}</label>
                        </div>
                    </div>
                </div>
                @if(isset($customers))
                    <div class="desktop-one-column">
                        <div class="form-group label-group">
                            <div class="form-label">
                                <label for="">Nombre:</label>
                            </div>
                            <div class="form-label">
                                <label name="name">{{ $customer->name }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-one-column">
                        <div class="form-group label-group">
                            <div class="form-label">
                                <label for="">Email:</label>
                            </div>
                            <div class="form-label">
                                <label name="email">{{ $customer->email }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-one-column">
                        <div class="form-group label-group">
                            <div class="form-label">
                                <label for="">Telefono:</label>
                            </div>
                            <div class="form-label">
                                <label name="phone">{{ $customer->phone }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-one-column">
                        <div class="form-group label-group">
                            <div class="form-label">
                                <label for="">Direccion:</label>
                            </div>
                            <div class="form-label">
                                <label name="address">{{ $customer->address }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-one-column">
                        <div class="form-group label-group">
                            <div class="form-label">
                                <label for="">Ciudad:</label>
                            </div>
                            <div class="form-label">
                                <label name="city">{{ $customer->city }}</label>
                            </div>
                        </div>
                    </div>
                    <div class="desktop-one-column">
                        <div class="form-group label-group">
                            <div class="form-label">
                                <label for="">Codigo Postal:</label>
                            </div>
                            <div class="form-label">
                                <label name="postal_code">{{ $customer->postal_code }}</label>
                            </div>
                        </div>
                    </div>
                @endif
        </form>
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
                                        <div class="number">
                                            <input type="number" class="show" value="{{$cart->quantity}}"  name="quantity">
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                @endif
            </table>
        </div>
    @endif
    
        
        
@endsection
