@if($agent->isDesktop())
    <script type="module" href="{{mix('front/desktop/js/app.js')}}"></script>
@endif

@if($agent->isMobile())
    <script type="module" href="{{mix('front/mobile/js/app.js')}}"></script>
@endif
