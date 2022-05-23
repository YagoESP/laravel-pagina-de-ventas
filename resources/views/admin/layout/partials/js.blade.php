@if($agent->isDesktop())
<script type="module" href="{{mix('admin/desktop/js/app.js')}}"></script>
@endif

@if($agent->isMobile())
    <script type="module" href="{{mix('admin/mobile/js/app.js')}}"></script>
@endif
