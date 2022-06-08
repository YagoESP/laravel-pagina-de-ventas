<div class="shop">
    <div class="desktop-two-columns-aside">
        <div class="column-aside column">
            <div class="shop-categories">
                <div class="shop-categories-title">
                    <h2>Categorias</h2>
                </div>
                <div class="shop-categories-elements">
                    <div class="shop-categories-element">
                        <h3>America</h3>
                    </div>
                    <div class="shop-categories-element">
                        <h3>Europa</h3>
                    </div>
                    <div class="shop-categories-element">
                        <h3>Africa</h3>
                    </div>
                    <div class="shop-categories-element">
                        <h3>Asiá</h3>
                    </div>
                    <div class="shop-categories-element">
                        <h3>Oceania</h3>
                    </div>
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
                            <div class="shop-articles-information-select">
                                <select name="perros">
                                    <option value="perros">Seleccionar</option>
                                    @if(isset($product_categories))
                                        @foreach($product_categories as $category)
                                            <option value="{{$category->id}}">{{$category->category}}</option>
                                        @endforeach
                                    @endif
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
                                            <img src="images/orange-gd5b3a6325_1280.jpg" alt="">
                                        </div>
                                        <div class="shop-articles-sections-cards-content-price" data-content="{{$product->price}}">
                                            <span>{{$product->price}}</span>
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