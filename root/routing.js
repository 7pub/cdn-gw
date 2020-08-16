function cssJqMobile145min() { location.href = "css/jquery.mobile-1.4.5.min.css"; } //[CSS]
function cssFa430Min() { location.href = "css/font-awesome.4.3.0.min.css"; } //[CSS]
function cssWaves072Min() { location.href = "css/waves-0.7.2.min.css"; } //[CSS]
function cssWow112Animate() { location.href = "css/wow-1.1.2.animate.css"; } //[CSS]
function cssNativeDroid2() { location.href = "css/nativeDroid2.css"; } //[CSS]
function cssBs400Min() { location.href = "css/bootstrap.4.0.0.min.css"; } //[CSS]
function jsQueryMobile145Min() { location.href = "js/jQueryMobile-1.4.5.mobile.min.js"; } //[JS]
function jsQuery214Min() { location.href = "js/jquery-2.1.4.min.js"; } //[JS]
function jsQuery1114UiMin() { location.href = "js/jquery-1.11.4.ui.min.js"; } //[JS]
function jsWaves072Min() { location.href = "js/waves-0.7.2.min.js"; } //[JS]
function jsWow112Min() { location.href = "js/wow-1.1.2.min.js"; } //[JS]
function jsNativeDroid2() { location.href = "js/nativeDroid2.js"; } //[JS]
function jsnd2settings() { location.href = "js/settings.js"; } //[JS]

function Index() { location.href = "/"; } //[N2D]
function noJS() { location.href = "/_site/noJS.html"; } //[N2D]
function panelLeft() { location.href = "/_site/fragments/panel.left/"; } //[N2D]
function Copyright() { location.href = "/_site/info/copyright.html"; } //[info]
function ColorStyles() { location.href = "/_site/info/ColorStyles.html"; } //[info]
function Credits() { location.href = "/_site/info/Credits.html"; } //[info]
function Airshare() { location.href = "/_site/public/Airshare/"; } //[APP]
function SSSFile() { location.href = "/_site/public/3SFile/"; } //[APP]
function SSSText() { location.href = "/_site/public/3SText/"; } //[APP]
function SSSChat() { location.href = "/_site/public/3SChat/"; } //[APP]
function Blockrain() { location.href = "/_site/public/Blockrain/"; } //[GAME]
function Bricks() { location.href = "/_site/public/Bricks/"; } //[GAME]
function Hexagon() { location.href = "/_site/public/Hexagon/"; } //[GAME]





$(document).ready(function() {
    $(".spinner").spinner();
    $(".spinner").click(function(event) { $(this).removeAttr('readonly').select(); });
    $(".spinner").blur(function(event) { $(this).attr('readonly', 'readonly'); });
});
