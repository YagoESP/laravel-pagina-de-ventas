<div class="shop">
    <div class="desktop-two-columns-aside">
        <div class="column-aside column">
            <div class="shop-categories">
                <div class="shop-categories-title">
                    <h2>Categorias</h2>
                </div>
                
                <div class="shop-categories-elements" data-url="{{route('front_products')}}">
                    @if(isset($product_categories))
                        @foreach($product_categories as $category_element)
                            <h3 class="category {{isset($category) && $category->id == $category_element->id ? 'active' : ''}}" data-url="{{route('front_product_category',['product_category'=>$category_element->id])}}">{{$category_element->title}}</h3>
                        @endforeach
                    @endif
                </div>

                
            </div>
        </div>

        <div class="column-main column">
            <div class="shop-articles">
                <div class="shop-articles-information">
                    <div class="desktop-two-columns">
                        <div class="column">
                            <div class="shop-articles-information-counter">
                                <p>Mostrando 20 perros de 200</p>
                            </div>
                        </div>
                        <div class="column">
                            <div class="shop-articles-information-select" >
                                <select id="filter" name="filter">
                                    <option selected value="{{route('front_products')}}">Seleccionar</option>
                                    <option class="filter" value="{{route('front_product_filter', ['filter'=>'asc'])}}">
                                        Mayor a menor
                                    </option>
                                    <option class="filter" value="{{route('front_product_filter', ['filter'=>'desc'])}}">
                                        Menor a mayor
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="shop-articles-sections-cards">
                        @if(isset($products))
                            @foreach($products as $product)
                                    <div class="shop-articles-sections-cards-content form-container">
                                        <div class="shop-articles-sections-cards-content-image">
                                        </div>
                                        <div class="shop-articles-sections-cards-content-price" data-content="{{$product->price}}">
                                            <span >{{$product->price->first()->base_price}}</span>
                                        </div>
                                        <div class="shop-articles-sections-cards-content-title" data-content="{{$product->title}}">
                                            <h3>{{$product->title}}</h3>
                                        </div>
                                        <div class="shop-articles-sections-cards-content-button">
                                            <button class="view-button" data-url="{{route('front_product_show',['product'=>$product->id])}}">COMPRAR</button>
                                        </div>
                                    </div>
                            @endforeach
                        @endif
                </div>
            </div>
        </div>
    </div>
</div>