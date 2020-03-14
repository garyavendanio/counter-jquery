function visible(t) {
    let i = t,
        n = jQuery(window),
        o = n.scrollTop(),
        e = o + n.height(),
        u = i.offset().top,
        s = u + i.height();
    return (!0 === t ? u : s) <= e && o <= (!0 === t ? s : u) && i.is(":visible")
}
$(window).scroll(function() {
    if (visible($(".count-digit"))) {
        if ($(".count-digit").hasClass("counter-loaded")) return;
        $(".count-digit").addClass("counter-loaded"), $(".count-digit").each(function() {
            let t = $(this);
            jQuery({ Counter: 0 }).animate({ Counter: t.text() }, { duration: 5e3, easing: "swing", step: function() { t.text(Math.ceil(this.Counter)) } })

        })
    }
}), $(document).ready(function() { $("#modal-full").modal("show") });