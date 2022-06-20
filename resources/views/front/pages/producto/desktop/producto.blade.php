<div class="notification desktop-only">
    <span id="notification-text desktop-only"></span>
</div>
<div class="product form-container">
    <div class="desktop-two-columns">
        <div class="column">
            <div class="product-carousel">
                <div class="carousel-image " id="image-1">
                </div>
                <div class="carousel-image" id="image-2">
                </div>
                <div class="carousel-image" id="image-3">
                </div>
                <div class="carousel-image" id="image-4">
                </div>
                <div class="carousel-image" id="image-5">
                </div>
            </div>
            <div class="carousel-buttons">
                <a href="#image-1">
                </a>
                <a href="#image-2">
                </a>
                <a href="#image-3">
                </a>
                <a href="#image-4">
                </a>
                <a href="#image-5">
                </a>
            </div>
        </div>

        <div class="column">
            <div class="product-information product-container" >
                <div class="product-title">
                    <h2>{{$product->title}}</h2>
                </div>
                <div class="product-title">
                    <h3>{{$product->category->title}}</h3>
                </div>
                <div class="product-price">
                    <h3></h3>
                </div>

                @include('front.components.desktop.tabs')

                <form class="front-form-product" action="{{route('front_cart_store')}}">
                    
                    <div class="product-amount" >
                        <div class="amount">
                            <input type="hidden" name="price_id" value="{{$product->prices->first()->id}}">

                            <div class="less">
                                <button class="subtract">-</button>
                            </div>
                            <div class="number">
                                <input type="number" class="show" value="1"  name="quantity">
                            </div>
                            <div class="more">
                                <button class="add">+</button>
                            </div>  
                        </div>
                    </div>
                </form>

                
                <div class="buy">
                    <div class="add-to-cart-button" >
                        <button class="buy-button">COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>