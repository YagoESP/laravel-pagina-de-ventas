<div class="faqs page-section" id="faqs">  
    @if(isset($faqs))  
        @foreach($faqs as $faq)
            <div class="faq-item">
                <div class="faq-item-title" >
                    <h3>{{ $faq->title }}</h3>
                    <div class="item"></div>
                </div>
                <div class="faq-item-content" >
                    <p>{!! $faq->description !!}</p>
                </div> 
            </div>
        @endforeach
    @endif
</div>
