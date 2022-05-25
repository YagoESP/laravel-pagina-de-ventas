@extends('admin.layout.table-form')

@section('table')

    <div class="registers">
            @if(isset($faqs))
            
                <div class="registers-item">
                    <div class="desktop-two-columns">
                        <div class="column">
                            @foreach($faqs as $faqs_element)
                                <div class="register">
                                    <div><label for="">Id:<span>{{$faqs_element->id}}</span></label></div>
                                    <div><label for="">Name:<span>{{$faqs_element->name}}</span></label></div>
                                    <div><label for="">Email:<span>{{$faqs_element->title}}</span></label></div>
                                </div>
                            @endforeach
                        </div>
                        
                        <div class="column">
                            @include('admin.components.desktop.register-icons')
                        </div>
                    </div>
                </div>
            
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
    
<form class="admin-form" action="{{route("faqs_store")}}">
    <input type="hidden" name="id">
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
                    <input type="text" name="name">
                </div>
            </div>
        </div>
        <div class="desktop-one-column">
            <div class="form-group">
                <div class="form-label">
                    <label for="">Titulo</label>
                </div>
                <div class="form-input">
                    <input type="text" name="title">
                </div>
            </div>
        </div>
        <div class="desktop-one-column">
            <div class="form-group">
                <div class="form-label">
                    <label for="">Descripción</label>
                </div>
                <div class="form-input">
                    <textarea class="ckeditor" name="description"></textarea>
                </div>
            </div>
        </div>
    </form>
@endsection
