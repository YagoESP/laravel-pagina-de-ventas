@extends('admin.layout.table-form')

@section('table')
    @include('admin.components.desktop.model-delay')
    <div class="registers">
            @if(isset($checkouts))
                @foreach($checkouts as $checkouts_element)     
                    <div class="registers-item">
                        <div class="desktop-two-columns">
                            <div class="column">
                                <div class="register">
                                    <div><label for="">Id:<span>{{$checkouts_element->id}}</span></label></div>
                                    <div><label for="">Name:<span>{{$checkouts_element->name}}</span></label></div>
                                    <div><label for="">Creado:<span>{{$checkouts_element->created_at}}</span></label></div>
                                </div>
                            </div>
                                
                            <div class="column">
                                <div class="register-icons">
                                    <span>
                                        <svg viewBox="0 0 24 24" class="edit-button" data-url="{{route('users_edit',['user'=>$checkouts_element->id])}}">
                                            <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg viewBox="0 0 24 24" class="delete-button" data-url="{{route('users_destroy',['user'=>$checkouts_element->id])}}">
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
            <div>
                <p>1 Registro</p>
                <p>Mostrando la Pagina 1 de 1</p>
            </div>
            <ul>
                <li>Primera</li>
                <li>Anterior</li>
                <li>Siguiente</li>
                <li>Ultima</li>
            </ul>   
        </div>
    </div>

@endsection

@section('form')
    @if(isset($checkouts))
        <form class="admin-form" action="{{route("checkouts_store")}}">
            <input type="hidden" name="id" value="{{isset($checkout->id) ? $checkout->id : ''}}">
                <div class="desktop-two-columns" id="color-panel">
                    <div class="column">
                        <div class="gestion">
                            <div class="contents">
                                <button>Contenido</button>
                                <button>Imagenes</button>
                                <button>Seo</button>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        @include('admin.components.desktop.items-options')
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Nombre</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="name" value="{{isset($checkout->name) ? $checkout->name : ''}}">
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Apellido</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="surname" value="{{isset($checkout->surname) ? $checkout->surname : ''}}">
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Teléfono</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="cellphone" value="{{isset($checkout->cellphone) ? $checkout->cellphone : ''}}">
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Correo</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="email" value="{{isset($checkout->email) ? $checkout->email : ''}}">
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Ciudad</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="city" value="{{isset($checkout->city) ? $checkout->city : ''}}">
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Codigo Postal</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="postal_code" value="{{isset($checkout->postal_code) ? $checkout->postal_code : ''}}">
                        </div>
                    </div>
                </div>
                <div class="desktop-one-column">
                    <div class="form-group">
                        <div class="form-label">
                            <label for="">Dirección</label>
                        </div>
                        <div class="form-input">
                            <input type="text" name="direction" value="{{isset($checkout->direction) ? $checkout->direction : ''}}">
                        </div>
                    </div>
                </div>
        </form>
    @endif    
@endsection
