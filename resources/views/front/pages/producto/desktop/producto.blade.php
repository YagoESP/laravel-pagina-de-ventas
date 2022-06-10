<div class="notification desktop-only">
    <span id="notification-text desktop-only"></span>
</div>
<div class="product form-container">
    <div class="desktop-two-columns">
        <div class="column">
            <div class="product-carousel">
                <div class="carousel-image " id="image-1">
                    <img src="images/perro1.jpg" alt="">
                </div>
                <div class="carousel-image" id="image-2">
                    <img src="images/perro2.jpg" alt="">
                </div>
                <div class="carousel-image" id="image-3">
                    <img src="images/perro3.jpg" alt="">
                </div>
                <div class="carousel-image" id="image-4">
                    <img src="images/perro4.jpg" alt="">
                </div>
                <div class="carousel-image" id="image-5">
                    <img src="images/perro5.jpg" alt="">
                </div>
            </div>
            <div class="carousel-buttons">
                <a href="#image-1">
                    <img src="images/perro1.jpg" alt="">
                </a>
                <a href="#image-2">
                    <img src="images/perro2.jpg" alt="">
                </a>
                <a href="#image-3">
                    <img src="images/perro3.jpg" alt="">
                </a>
                <a href="#image-4">
                    <img src="images/perro4.jpg" alt="">
                </a>
                <a href="#image-5">
                    <img src="images/perro5.jpg" alt="">
                </a>
            </div>
        </div>

        <div class="column">
            <div class="product-information product-container" >
                <div class="product-title">
                    <h2>{{$product->title}}</h2>
                </div>
                <div class="product-title">
                    <h3>{{$product->productCategory->title}}</h3>
                </div>
                <div class="product-price">
                    <h3>{{$product->price}}</h3>
                </div>

                @include('front.components.desktop.tabs')

                @include('front.components.desktop.buttons')

                
                <div class="buy">
                    
                    <div class="add-to-cart-button" >
                        <button>COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>