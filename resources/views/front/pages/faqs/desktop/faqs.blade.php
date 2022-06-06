<div class="desktop-one-column">
    @if(isset($faqs))
        @foreach($faqs as $faq)
            <div class="faq-item">
                <div class="faq-item-title" data-list="{{$faq->title}}">
                    <h3>{{ $faq->title }}</h3>
                </div>
                <div class="faq-item-content" data-content="{{$faq->title}}">
                    {!! $faq->content !!}
                </div>
            </div>
        @endforeach
    @endif
</div>
