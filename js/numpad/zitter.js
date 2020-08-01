/* eslint-disable */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define(t)
        : ((e = e || self).mobiscroll = t());
})(this, function () {
    "use strict";
    var e,
        t,
        a,
        n,
        oa = oa || {},
        s = {},
        Q = {},
        i = [],
        o = "undefined" != typeof window,
        r =
            o &&
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme:dark)").matches,
        l = o ? navigator.userAgent : "",
        c = o ? navigator.platform : "",
        d = o ? navigator.maxTouchPoints : 0,
        m = /Safari/.test(l),
        u = l.match(/Android|iPhone|iPad|iPod|Windows Phone|Windows|MSIE/i),
        ra =
            (o && window.requestAnimationFrame) ||
            function (e) {
                return setTimeout(e, 20);
            },
        la =
            (o && window.cancelAnimationFrame) ||
            function (e) {
                clearTimeout(e);
            };
    function h(e) {
        var t;
        for (t in e) if (void 0 !== b[e[t]]) return !0;
        return !1;
    }
    function ca(e, t) {
        if ("touchstart" == e.type) t.__mbscTouched = 1;
        else if (t.__mbscTouched) return delete t.__mbscTouched, !1;
        return !0;
    }
    function da(e, t) {
        for (
            var a,
                n,
                s = ["t", "webkitT", "MozT", "OT", "msT"],
                i = getComputedStyle(e[0]),
                o = 0;
            !a && o < s.length;

        )
            void 0 !== i[(n = s[o]) + "ransform"] && (a = i[n + "ransform"]),
                o++;
        return (
            (a = a.split(")")[0].split(", ")), t ? a[13] || a[5] : a[12] || a[4]
        );
    }
    function st(e) {
        if (e) {
            if (y[e]) return y[e];
            var t = p && p.getContext("2d");
            if (!t) return "#fff";
            (t.fillStyle = e), t.fillRect(0, 0, 1, 1);
            var a = t.getImageData(0, 0, 1, 1).data,
                n =
                    0.299 * a[0] + 0.587 * a[1] + 0.114 * a[2] < 130
                        ? "#fff"
                        : "#000";
            return (y[e] = n);
        }
    }
    function ee(e, t, a, n) {
        a
            ? ((e.scrollTop = t), n && n())
            : (function e(t, a, n, s, i) {
                  var o = Math.min(1, (new Date() - a) / 468),
                      r = 0.5 * (1 - Math.cos(Math.PI * o)),
                      l = n + (s - n) * r;
                  (t.scrollTop = l) !== s
                      ? ra(function () {
                            e(t, a, n, s, i);
                        })
                      : i && i();
              })(e, new Date(), e.scrollTop, t, n);
    }
    function ma(e, t, a, n) {
        e && e.addEventListener(t, a, n);
    }
    function ua(e, t, a, n) {
        e && e.removeEventListener(t, a, n);
    }
    function f(e, t) {
        return (
            !(!t || !e || 1 !== e.nodeType) &&
            (
                e.matches ||
                e.matchesSelector ||
                e.webkitMatchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector
            ).call(e, t)
        );
    }
    function ha(e, t, a) {
        for (; t; ) {
            if (f(t, a)) return t;
            t = t !== e ? t.parentNode : null;
        }
        return null;
    }
    function fa(e, t, a) {
        var n;
        try {
            n = new CustomEvent(t, { detail: a, bubbles: !0, cancelable: !0 });
        } catch (e) {
            (n = document.createEvent("Event")).initEvent(t, !0, !0),
                (n.detail = a);
        }
        e.dispatchEvent(n);
    }
    function te() {
        ne.__mbscFocusVisible = !1;
    }
    function ae() {
        ne.__mbscFocusVisible = !0;
    }
    /Android/i.test(u)
        ? ((e = "android"),
          (t = l.match(/Android\s+([\d.]+)/i)) &&
              (i = t[0].replace("Android ", "").split(".")))
        : /iPhone|iPad|iPod/i.test(u) ||
          /iPhone|iPad|iPod/i.test(c) ||
          ("MacIntel" === c && 1 < d)
        ? ((e = "ios"),
          (t = l.match(/OS\s+([\d_]+)/i)) &&
              (i = t[0].replace(/_/g, ".").replace("OS ", "").split(".")))
        : /Windows Phone/i.test(u)
        ? (e = "wp")
        : /Windows|MSIE/i.test(u) && (e = "windows"),
        (a = i[0]),
        (n = i[1]);
    var pa,
        p,
        b,
        ba,
        v,
        g,
        x,
        T,
        va,
        ne,
        y = {};
    o &&
        ((ne = window),
        (p = document.createElement("canvas")),
        (b = document.createElement("modernizr").style),
        (ba = (function () {
            var e,
                t = ["Webkit", "Moz", "O", "ms"];
            for (e in t)
                if (h([t[e] + "Transform"]))
                    return "-" + t[e].toLowerCase() + "-";
            return "";
        })()),
        (va = ba.replace(/^-/, "").replace(/-$/, "").replace("moz", "Moz")),
        (pa = void 0 !== b.animation ? "animationend" : "webkitAnimationEnd"),
        (g = void 0 !== b.transition),
        (T = (x = "ios" === e && !m) && ne.webkit && ne.webkit.messageHandlers),
        (v = void 0 === b.touchAction || (x && !T)));
    var _ = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1,
        },
        w = { readonly: "readOnly" },
        C = [],
        M = Array.prototype.slice;
    function S(e) {
        return "function" == typeof e;
    }
    function k(e) {
        return "object" == typeof e;
    }
    function D(e) {
        return "number" == typeof e.length;
    }
    function N(e) {
        return e.replace(/-+(.)?/g, function (e, t) {
            return t ? t.toUpperCase() : "";
        });
    }
    function V(e) {
        return e
            .replace(/::/g, "/")
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
            .replace(/([a-z\d])([A-Z])/g, "$1_$2")
            .replace(/_/g, "-")
            .toLowerCase();
    }
    function A(e, t) {
        return "number" != typeof t || _[V(e)] ? t : t + "px";
    }
    var E,
        F =
            ((E = function e(t, a) {
                var n,
                    s,
                    i,
                    o = [],
                    r = 0;
                if (t && !a && t instanceof H) return t;
                if (S(t)) return e(document).ready(t);
                if (t)
                    if ("string" == typeof t)
                        if (
                            ((t = i = t.trim()),
                            0 <= i.indexOf("<") && 0 <= i.indexOf(">"))
                        ) {
                            var l = "div";
                            for (
                                0 === i.indexOf("<li") && (l = "ul"),
                                    0 === i.indexOf("<tr") && (l = "tbody"),
                                    (0 !== i.indexOf("<td") &&
                                        0 !== i.indexOf("<th")) ||
                                        (l = "tr"),
                                    0 === i.indexOf("<tbody") && (l = "table"),
                                    0 === i.indexOf("<option") &&
                                        (l = "select"),
                                    (s = document.createElement(
                                        l
                                    )).innerHTML = i,
                                    r = 0;
                                r < s.childNodes.length;
                                r++
                            )
                                o.push(s.childNodes[r]);
                        } else
                            for (
                                n =
                                    a || "#" !== t[0] || t.match(/[ .<>:~]/)
                                        ? (a instanceof H && (a = a[0]),
                                          (a || document).querySelectorAll(t))
                                        : [
                                              document.getElementById(
                                                  t.split("#")[1]
                                              ),
                                          ],
                                    r = 0;
                                r < n.length;
                                r++
                            )
                                n[r] && o.push(n[r]);
                    else if (t.nodeType || t === window || t === document)
                        o.push(t);
                    else if (0 < t.length && t[0].nodeType)
                        for (r = 0; r < t.length; r++) o.push(t[r]);
                    else e.isArray(t) && (o = t);
                return new H(o);
            }),
            (H.prototype = {
                ready: function (e) {
                    return (
                        (
                            document.attachEvent
                                ? "complete" == document.readyState
                                : "loading" != document.readyState
                        )
                            ? e(E)
                            : document.addEventListener(
                                  "DOMContentLoaded",
                                  function () {
                                      e(E);
                                  },
                                  !1
                              ),
                        this
                    );
                },
                concat: C.concat,
                empty: function () {
                    return this.each(function () {
                        this.innerHTML = "";
                    });
                },
                map: function (a) {
                    return E(
                        E.map(this, function (e, t) {
                            return a.call(e, t, e);
                        })
                    );
                },
                slice: function () {
                    return E(M.apply(this, arguments));
                },
                addClass: function (e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var n = 0; n < this.length; n++)
                            void 0 !== this[n].classList &&
                                "" !== t[a] &&
                                this[n].classList.add(t[a]);
                    return this;
                },
                removeClass: function (e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var n = 0; n < this.length; n++)
                            void 0 !== this[n].classList &&
                                "" !== t[a] &&
                                this[n].classList.remove(t[a]);
                    return this;
                },
                hasClass: function (e) {
                    return !!this[0] && this[0].classList.contains(e);
                },
                toggleClass: function (e) {
                    for (var t = e.split(" "), a = 0; a < t.length; a++)
                        for (var n = 0; n < this.length; n++)
                            void 0 !== this[n].classList &&
                                this[n].classList.toggle(t[a]);
                    return this;
                },
                closest: function (e, t) {
                    var a = this[0],
                        n = !1;
                    for (
                        k(e) && (n = E(e));
                        a && !(n ? 0 <= n.indexOf(a) : f(a, e));

                    )
                        a =
                            a !== t &&
                            a.nodeType !== a.DOCUMENT_NODE &&
                            a.parentNode;
                    return E(a);
                },
                attr: function (e, t) {
                    var a;
                    if (1 !== arguments.length || "string" != typeof e) {
                        for (var n = 0; n < this.length; n++)
                            if (2 === arguments.length)
                                this[n].setAttribute(e, t);
                            else
                                for (var s in e)
                                    (this[n][s] = e[s]),
                                        this[n].setAttribute(s, e[s]);
                        return this;
                    }
                    if (this.length)
                        return (
                            (a = this[0].getAttribute(e)),
                            a || "" === a ? a : void 0
                        );
                },
                removeAttr: function (e) {
                    for (var t = 0; t < this.length; t++)
                        this[t].removeAttribute(e);
                    return this;
                },
                prop: function (e, t) {
                    if (
                        ((e = w[e] || e),
                        1 === arguments.length && "string" == typeof e)
                    )
                        return this[0] ? this[0][e] : void 0;
                    for (var a = 0; a < this.length; a++) this[a][e] = t;
                    return this;
                },
                val: function (e) {
                    if (void 0 === e)
                        return this.length && this[0].multiple
                            ? E.map(this.find("option:checked"), function (e) {
                                  return e.value;
                              })
                            : this[0]
                            ? this[0].value
                            : void 0;
                    if (this.length && this[0].multiple)
                        E.each(this[0].options, function () {
                            this.selected = -1 != e.indexOf(this.value);
                        });
                    else
                        for (var t = 0; t < this.length; t++) this[t].value = e;
                    return this;
                },
                on: function (e, a, n, t) {
                    var s,
                        i,
                        o,
                        r,
                        l,
                        c = e.split(" ");
                    function d(e) {
                        for (var t = e.target; t; )
                            E(t).is(a) && n.call(t, e),
                                (t = t !== this ? t.parentNode : null);
                    }
                    function m(e, t, a, n) {
                        var s = t.split(".");
                        e.DomNameSpaces || (e.DomNameSpaces = []),
                            e.DomNameSpaces.push({
                                namespace: s[1],
                                event: s[0],
                                listener: a,
                                capture: n,
                            }),
                            e.addEventListener(s[0], a, n);
                    }
                    for (r = 0; r < this.length; r++)
                        if (((i = this[r]), S(a) || !1 === a))
                            for (
                                S(a) && ((t = n || !1), (n = a)), l = 0;
                                l < c.length;
                                l++
                            )
                                -1 != (o = c[l]).indexOf(".")
                                    ? m(i, o, n, t)
                                    : i.addEventListener(o, n, t);
                        else
                            for (s = d.bind(i), l = 0; l < c.length; l++)
                                (o = c[l]),
                                    i.DomLiveListeners ||
                                        (i.DomLiveListeners = []),
                                    i.DomLiveListeners.push({
                                        listener: n,
                                        liveListener: s,
                                    }),
                                    -1 != o.indexOf(".")
                                        ? m(i, o, s, t)
                                        : i.addEventListener(o, s, t);
                    return this;
                },
                off: function (e, t, a, n) {
                    var s,
                        i,
                        o,
                        r,
                        l,
                        c,
                        d,
                        m = this;
                    function u(e) {
                        var t,
                            a,
                            n,
                            s,
                            i,
                            o = e.split("."),
                            r = o[0],
                            l = o[1];
                        for (a = 0; a < m.length; ++a)
                            if ((i = (t = m[a]).DomNameSpaces)) {
                                for (n = 0; n < i.length; ++n)
                                    (s = i[n]).namespace != l ||
                                        (s.event != r && r) ||
                                        (t.removeEventListener(
                                            s.event,
                                            s.listener,
                                            s.capture
                                        ),
                                        (s.removed = !0));
                                for (n = i.length - 1; 0 <= n; --n)
                                    i[n].removed && i.splice(n, 1);
                            }
                    }
                    for (o = e.split(" "), r = 0; r < o.length; r++)
                        for (i = o[r], l = 0; l < this.length; l++)
                            if (
                                ((d = (s = this[l]).DomLiveListeners),
                                S(t) || !1 === t)
                            )
                                S(t) && ((n = a || !1), (a = t)),
                                    0 === i.indexOf(".")
                                        ? u(i.substr(1))
                                        : s.removeEventListener(i, a, n);
                            else {
                                if (d)
                                    for (c = 0; c < d.length; c++)
                                        d[c].listener === a &&
                                            s.removeEventListener(
                                                i,
                                                d[c].liveListener,
                                                n
                                            );
                                s.DomNameSpaces &&
                                    s.DomNameSpaces.length &&
                                    i &&
                                    u(i);
                            }
                    return this;
                },
                trigger: function (e, t) {
                    for (var a = e.split(" "), n = 0; n < a.length; n++)
                        for (var s = 0; s < this.length; s++)
                            fa(this[s], a[n], t);
                    return this;
                },
                width: function (e) {
                    return void 0 !== e
                        ? this.css("width", e)
                        : this[0] === window
                        ? window.innerWidth
                        : this[0] === document
                        ? document.documentElement.scrollWidth
                        : 0 < this.length
                        ? parseFloat(this.css("width"))
                        : null;
                },
                height: function (e) {
                    if (void 0 !== e) return this.css("height", e);
                    if (this[0] === window) return window.innerHeight;
                    if (this[0] !== document)
                        return 0 < this.length
                            ? parseFloat(this.css("height"))
                            : null;
                    var t = document.body,
                        a = document.documentElement;
                    return Math.max(
                        t.scrollHeight,
                        t.offsetHeight,
                        a.clientHeight,
                        a.scrollHeight,
                        a.offsetHeight
                    );
                },
                innerWidth: function () {
                    var t = this;
                    if (0 < this.length) {
                        if (this[0].innerWidth) return this[0].innerWidth;
                        var a = this[0].offsetWidth;
                        return (
                            ["left", "right"].forEach(function (e) {
                                a -= parseInt(
                                    t.css(N("border-" + e + "-width")) || 0,
                                    10
                                );
                            }),
                            a
                        );
                    }
                },
                innerHeight: function () {
                    var t = this;
                    if (0 < this.length) {
                        if (this[0].innerHeight) return this[0].innerHeight;
                        var a = this[0].offsetHeight;
                        return (
                            ["top", "bottom"].forEach(function (e) {
                                a -= parseInt(
                                    t.css(N("border-" + e + "-width")) || 0,
                                    10
                                );
                            }),
                            a
                        );
                    }
                },
                offset: function () {
                    if (0 < this.length) {
                        var e = this[0].getBoundingClientRect(),
                            t = document.documentElement;
                        return {
                            top: e.top + window.pageYOffset - t.clientTop,
                            left: e.left + window.pageXOffset - t.clientLeft,
                        };
                    }
                },
                hide: function () {
                    for (var e = 0; e < this.length; e++)
                        this[e].style.display = "none";
                    return this;
                },
                show: function () {
                    for (var e = 0; e < this.length; e++)
                        "none" == this[e].style.display &&
                            (this[e].style.display = ""),
                            "none" ==
                                getComputedStyle(this[e], "").getPropertyValue(
                                    "display"
                                ) && (this[e].style.display = "block");
                    return this;
                },
                clone: function () {
                    return this.map(function () {
                        return this.cloneNode(!0);
                    });
                },
                styles: function () {
                    return this[0]
                        ? window.getComputedStyle(this[0], null)
                        : void 0;
                },
                css: function (e, t) {
                    var a,
                        n,
                        s = this[0],
                        i = "";
                    if (arguments.length < 2) {
                        if (!s) return;
                        if ("string" == typeof e)
                            return (
                                s.style[e] ||
                                getComputedStyle(s, "").getPropertyValue(e)
                            );
                    }
                    if ("string" == typeof e)
                        t || 0 === t
                            ? (i = V(e) + ":" + A(e, t))
                            : this.each(function () {
                                  this.style.removeProperty(V(e));
                              });
                    else
                        for (n in e)
                            if (e[n] || 0 === e[n])
                                i += V(n) + ":" + A(n, e[n]) + ";";
                            else
                                for (a = 0; a < this.length; a++)
                                    this[a].style.removeProperty(V(n));
                    return this.each(function () {
                        this.style.cssText += ";" + i;
                    });
                },
                each: function (e) {
                    for (
                        var t = 0;
                        t < this.length &&
                        !1 !== e.apply(this[t], [t, this[t]]);
                        t++
                    );
                    return this;
                },
                filter: function (e) {
                    for (var t = [], a = 0; a < this.length; a++)
                        S(e)
                            ? e.call(this[a], a, this[a]) && t.push(this[a])
                            : f(this[a], e) && t.push(this[a]);
                    return new H(t);
                },
                html: function (e) {
                    if (void 0 === e)
                        return this[0] ? this[0].innerHTML : void 0;
                    this.empty();
                    for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                    return this;
                },
                text: function (e) {
                    if (void 0 === e)
                        return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t++)
                        this[t].textContent = e;
                    return this;
                },
                is: function (e) {
                    return 0 < this.length && f(this[0], e);
                },
                not: function (t) {
                    var a = [];
                    if (S(t) && void 0 !== t.call)
                        this.each(function (e) {
                            t.call(this, e) || a.push(this);
                        });
                    else {
                        var n =
                            "string" == typeof t
                                ? this.filter(t)
                                : D(t) && S(t.item)
                                ? M.call(t)
                                : E(t);
                        k(n) &&
                            (n = E.map(n, function (e) {
                                return e;
                            })),
                            this.each(function (e, t) {
                                n.indexOf(t) < 0 && a.push(t);
                            });
                    }
                    return E(a);
                },
                indexOf: function (e) {
                    for (var t = 0; t < this.length; t++)
                        if (this[t] === e) return t;
                },
                index: function (e) {
                    return e
                        ? this.indexOf(E(e)[0])
                        : this.parent().children().indexOf(this[0]);
                },
                get: function (e) {
                    return void 0 === e
                        ? M.call(this)
                        : this[0 <= e ? e : e + this.length];
                },
                eq: function (e) {
                    if (void 0 === e) return this;
                    var t,
                        a = this.length;
                    return new H(
                        a - 1 < e
                            ? []
                            : e < 0
                            ? (t = a + e) < 0
                                ? []
                                : [this[t]]
                            : [this[e]]
                    );
                },
                append: function (e) {
                    var t, a;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof e) {
                            var n = document.createElement("div");
                            for (n.innerHTML = e; n.firstChild; )
                                this[t].appendChild(n.firstChild);
                        } else if (e instanceof H)
                            for (a = 0; a < e.length; a++)
                                this[t].appendChild(e[a]);
                        else this[t].appendChild(e);
                    return this;
                },
                appendTo: function (e) {
                    return E(e).append(this), this;
                },
                prepend: function (e) {
                    var t, a;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof e) {
                            var n = document.createElement("div");
                            for (
                                n.innerHTML = e, a = n.childNodes.length - 1;
                                0 <= a;
                                a--
                            )
                                this[t].insertBefore(
                                    n.childNodes[a],
                                    this[t].childNodes[0]
                                );
                        } else if (e instanceof H)
                            for (a = 0; a < e.length; a++)
                                this[t].insertBefore(
                                    e[a],
                                    this[t].childNodes[0]
                                );
                        else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this;
                },
                prependTo: function (e) {
                    return E(e).prepend(this), this;
                },
                insertBefore: function (e) {
                    for (var t = E(e), a = 0; a < this.length; a++)
                        if (1 === t.length)
                            t[0].parentNode.insertBefore(this[a], t[0]);
                        else if (1 < t.length)
                            for (var n = 0; n < t.length; n++)
                                t[n].parentNode.insertBefore(
                                    this[a].cloneNode(!0),
                                    t[n]
                                );
                    return this;
                },
                insertAfter: function (e) {
                    for (var t = E(e), a = 0; a < this.length; a++)
                        if (1 === t.length)
                            t[0].parentNode.insertBefore(
                                this[a],
                                t[0].nextSibling
                            );
                        else if (1 < t.length)
                            for (var n = 0; n < t.length; n++)
                                t[n].parentNode.insertBefore(
                                    this[a].cloneNode(!0),
                                    t[n].nextSibling
                                );
                    return this;
                },
                next: function (e) {
                    return 0 < this.length
                        ? e
                            ? this[0].nextElementSibling &&
                              E(this[0].nextElementSibling).is(e)
                                ? new H([this[0].nextElementSibling])
                                : new H([])
                            : this[0].nextElementSibling
                            ? new H([this[0].nextElementSibling])
                            : new H([])
                        : new H([]);
                },
                nextAll: function (e) {
                    var t = [],
                        a = this[0];
                    if (!a) return new H([]);
                    for (; a.nextElementSibling; ) {
                        var n = a.nextElementSibling;
                        e ? E(n).is(e) && t.push(n) : t.push(n), (a = n);
                    }
                    return new H(t);
                },
                prev: function (e) {
                    return 0 < this.length
                        ? e
                            ? this[0].previousElementSibling &&
                              E(this[0].previousElementSibling).is(e)
                                ? new H([this[0].previousElementSibling])
                                : new H([])
                            : this[0].previousElementSibling
                            ? new H([this[0].previousElementSibling])
                            : new H([])
                        : new H([]);
                },
                prevAll: function (e) {
                    var t = [],
                        a = this[0];
                    if (!a) return new H([]);
                    for (; a.previousElementSibling; ) {
                        var n = a.previousElementSibling;
                        e ? E(n).is(e) && t.push(n) : t.push(n), (a = n);
                    }
                    return new H(t);
                },
                parent: function (e) {
                    for (var t = [], a = 0; a < this.length; a++)
                        null !== this[a].parentNode &&
                            (e
                                ? E(this[a].parentNode).is(e) &&
                                  t.push(this[a].parentNode)
                                : t.push(this[a].parentNode));
                    return E(E.unique(t));
                },
                parents: function (e) {
                    for (var t = [], a = 0; a < this.length; a++)
                        for (var n = this[a].parentNode; n; )
                            e ? E(n).is(e) && t.push(n) : t.push(n),
                                (n = n.parentNode);
                    return E(E.unique(t));
                },
                find: function (e) {
                    for (var t = [], a = 0; a < this.length; a++)
                        for (
                            var n = this[a].querySelectorAll(e), s = 0;
                            s < n.length;
                            s++
                        )
                            t.push(n[s]);
                    return new H(t);
                },
                children: function (e) {
                    for (var t = [], a = 0; a < this.length; a++)
                        for (
                            var n = this[a].childNodes, s = 0;
                            s < n.length;
                            s++
                        )
                            e
                                ? 1 === n[s].nodeType &&
                                  E(n[s]).is(e) &&
                                  t.push(n[s])
                                : 1 === n[s].nodeType && t.push(n[s]);
                    return new H(E.unique(t));
                },
                remove: function () {
                    for (var e = 0; e < this.length; e++)
                        this[e].parentNode &&
                            this[e].parentNode.removeChild(this[e]);
                    return this;
                },
                add: function () {
                    var e, t;
                    for (e = 0; e < arguments.length; e++) {
                        var a = E(arguments[e]);
                        for (t = 0; t < a.length; t++)
                            (this[this.length] = a[t]), this.length++;
                    }
                    return this;
                },
                before: function (e) {
                    return E(e).insertBefore(this), this;
                },
                after: function (e) {
                    return E(e).insertAfter(this), this;
                },
                scrollTop: function (e) {
                    if (this.length) {
                        var t = "scrollTop" in this[0];
                        return void 0 === e
                            ? t
                                ? this[0].scrollTop
                                : this[0].pageYOffset
                            : this.each(
                                  t
                                      ? function () {
                                            this.scrollTop = e;
                                        }
                                      : function () {
                                            this.scrollTo(this.scrollX, e);
                                        }
                              );
                    }
                },
                scrollLeft: function (e) {
                    if (this.length) {
                        var t = "scrollLeft" in this[0];
                        return void 0 === e
                            ? t
                                ? this[0].scrollLeft
                                : this[0].pageXOffset
                            : this.each(
                                  t
                                      ? function () {
                                            this.scrollLeft = e;
                                        }
                                      : function () {
                                            this.scrollTo(e, this.scrollY);
                                        }
                              );
                    }
                },
                contents: function () {
                    return this.map(function (e, t) {
                        return M.call(t.childNodes);
                    });
                },
                nextUntil: function (e) {
                    for (
                        var t = this, a = [];
                        t.length && !t.filter(e).length;

                    )
                        a.push(t[0]), (t = t.next());
                    return E(a);
                },
                prevUntil: function (e) {
                    for (
                        var t = this, a = [];
                        t.length && !E(t).filter(e).length;

                    )
                        a.push(t[0]), (t = t.prev());
                    return E(a);
                },
                detach: function () {
                    return this.remove();
                },
            }),
            (E.fn = H.prototype),
            E);
    function H(e) {
        var t = 0;
        for (t = 0; t < e.length; t++) this[t] = e[t];
        return (this.length = e.length), E(this);
    }
    var I = F;
    function O(o, r, l) {
        oa[o] = function (e, t) {
            var a,
                n,
                s = {},
                i = t || {};
            return (
                !1 !== l && (i.preset = o),
                I(e).each(function () {
                    (a = new r(this, i)), (s[this.id] = a);
                }),
                1 == (n = Object.keys(s)).length ? s[n[0]] : s
            );
        };
    }
    function ga() {}
    function se(e) {
        var t,
            a = [];
        for (t in e) a.push(e[t]);
        return a;
    }
    function ie(e) {
        var t,
            a = {};
        if (e) for (t = 0; t < e.length; t++) a[e[t]] = e[t];
        return a;
    }
    function xa(e) {
        return 0 <= e - parseFloat(e);
    }
    function ue(e) {
        return "string" == typeof e;
    }
    function he(e, t, a) {
        return Math.max(t, Math.min(e, a));
    }
    function oe(e, t) {
        for (e += "", t = t || 2; e.length < t; ) e = "0" + e;
        return e;
    }
    function Ta(n, s) {
        var i, o;
        return (
            (s = s || 100),
            function () {
                var e = this,
                    t = +new Date(),
                    a = arguments;
                i && t < i + s
                    ? (clearTimeout(o),
                      (o = setTimeout(function () {
                          (i = t), n.apply(e, a);
                      }, s)))
                    : ((i = t), n.apply(e, a));
            }
        );
    }
    function ya(e) {
        "vibrate" in navigator && navigator.vibrate(e || 50);
    }
    function X(e, t, a) {
        return (100 * (e - t)) / (a - t);
    }
    function P(e, t, a) {
        var n = a.attr(e);
        return void 0 === n || "" === n ? t : "true" === n;
    }
    (oa.$ = F),
        (I.inArray = function (e, t, a) {
            return C.indexOf.call(t, e, a);
        }),
        (I.extend = function (t) {
            var a,
                e = M.call(arguments, 1);
            return (
                "boolean" == typeof t && ((a = t), (t = e.shift())),
                (t = t || {}),
                e.forEach(function (e) {
                    !(function e(t, a, n) {
                        for (var s in a)
                            n && (I.isPlainObject(a[s]) || I.isArray(a[s]))
                                ? (((I.isPlainObject(a[s]) &&
                                      !I.isPlainObject(t[s])) ||
                                      (I.isArray(a[s]) && !I.isArray(t[s]))) &&
                                      (t[s] = {}),
                                  e(t[s], a[s], n))
                                : void 0 !== a[s] && (t[s] = a[s]);
                    })(t, e, a);
                }),
                t
            );
        }),
        (I.isFunction = S),
        (I.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.apply(e);
        }),
        (I.isPlainObject = function (e) {
            return (
                k(e) &&
                null !== e &&
                e !== e.window &&
                Object.getPrototypeOf(e) == Object.prototype
            );
        }),
        (I.each = function (e, t) {
            var a, n;
            if (k(e) && t) {
                if (I.isArray(e) || e instanceof F)
                    for (
                        a = 0;
                        a < e.length && !1 !== t.call(e[a], a, e[a]);
                        a++
                    );
                else
                    for (n in e)
                        if (
                            e.hasOwnProperty(n) &&
                            "length" !== n &&
                            !1 === t.call(e[n], n, e[n])
                        )
                            break;
                return this;
            }
        }),
        (I.unique = function (e) {
            for (var t = [], a = 0; a < e.length; a++)
                -1 === t.indexOf(e[a]) && t.push(e[a]);
            return t;
        }),
        (I.map = function (e, t) {
            var a,
                n,
                s,
                i = [];
            if (D(e))
                for (n = 0; n < e.length; n++)
                    null !== (a = t(e[n], n)) && i.push(a);
            else for (s in e) null !== (a = t(e[s], s)) && i.push(a);
            return 0 < i.length ? I.fn.concat.apply([], i) : i;
        });
    var L,
        Y = 0;
    function _a() {
        Y++,
            setTimeout(function () {
                Y--;
            }, 500);
    }
    function z(e, t) {
        if (!t.mbscClick) {
            var a = (e.originalEvent || e).changedTouches[0],
                n = document.createEvent("MouseEvents");
            n.initMouseEvent(
                "click",
                !0,
                !0,
                window,
                1,
                a.screenX,
                a.screenY,
                a.clientX,
                a.clientY,
                !1,
                !1,
                !1,
                !1,
                0,
                null
            ),
                (n.isMbscTap = !0),
                (n.isIonicTap = !0),
                (L = !0),
                (t.mbscChange = !0),
                (t.mbscClick = !0),
                t.dispatchEvent(n),
                (L = !1),
                _a(),
                setTimeout(function () {
                    delete t.mbscClick;
                });
        }
    }
    function wa(e, t, a) {
        var n = e.originalEvent || e,
            s = (a ? "page" : "client") + t;
        return n.targetTouches && n.targetTouches[0]
            ? n.targetTouches[0][s]
            : n.changedTouches && n.changedTouches[0]
            ? n.changedTouches[0][s]
            : e[s];
    }
    function Ca(e) {
        var t = ["switch", "range", "rating", "segmented", "stepper"],
            a = e[0],
            n = e.attr("data-role"),
            s = e.attr("type") || a.nodeName.toLowerCase();
        if (/(switch|range|rating|segmented|stepper|select)/.test(n)) s = n;
        else
            for (var i = 0; i < t.length; i++)
                e.is("[mbsc-" + t[i] + "]") && (s = t[i]);
        return s;
    }
    function Ma(e, t, a) {
        e.focus(),
            /(button|submit|checkbox|switch|radio)/.test(t) &&
                a.preventDefault(),
            /select/.test(t) || z(a, e);
    }
    function $(a, e, t, n, s, i) {
        var o,
            r,
            l,
            c,
            d,
            m = (0, oa.$)(e);
        function u(e) {
            l ||
                ((l = this),
                (o = wa(e, "X")),
                (r = wa(e, "Y")),
                (c = !1),
                (d = new Date()));
        }
        function h(e) {
            l &&
                !c &&
                (Math.abs(wa(e, "X") - o) > s ||
                    Math.abs(wa(e, "Y") - r) > s) &&
                (c = !0);
        }
        function f(e) {
            l &&
                ((i && new Date() - d < 100) || !c ? z(e, e.target) : _a(),
                (l = !1));
        }
        function p(e) {
            n && e.preventDefault(), t.call(this, e, a);
        }
        function b() {
            l = !1;
        }
        (s = s || 9),
            m.each(function (e, t) {
                a.settings.tap &&
                    (ma(t, "touchstart", u, { passive: !0 }),
                    ma(t, "touchcancel", b),
                    ma(t, "touchmove", h, { passive: !0 }),
                    ma(t, "touchend", f)),
                    ma(t, "click", p),
                    (t.__mbscOff = function () {
                        ua(t, "touchstart", u, { passive: !0 }),
                            ua(t, "touchcancel", b),
                            ua(t, "touchmove", h, { passive: !0 }),
                            ua(t, "touchend", f),
                            ua(t, "click", p),
                            delete t.__mbscOff;
                    });
            });
    }
    function re(e) {
        e && e[0] && e[0].__mbscOff && e[0].__mbscOff();
    }
    function R(e) {
        if (
            Y &&
            !L &&
            !e.isMbscTap &&
            ("TEXTAREA" != e.target.nodeName || "mousedown" != e.type)
        )
            return e.stopPropagation(), e.preventDefault(), !1;
    }
    function it(e, t, a, n, s, i, o) {
        var r = new Date(e, t, a, n || 0, s || 0, i || 0, o || 0);
        return (
            23 == r.getHours() &&
                0 === (n || 0) &&
                r.setHours(r.getHours() + 2),
            r
        );
    }
    function le(a, e, t) {
        if (!e) return null;
        function s(e) {
            for (var t = 0; o + 1 < a.length && a.charAt(o + 1) == e; )
                t++, o++;
            return t;
        }
        function n(e, t, a) {
            var n = "" + t;
            if (s(e)) for (; n.length < a; ) n = "0" + n;
            return n;
        }
        function i(e, t, a, n) {
            return s(e) ? n[t] : a[t];
        }
        var o,
            r,
            l = Da({}, fe, t),
            c = "",
            d = !1;
        for (o = 0; o < a.length; o++)
            if (d) "'" != a.charAt(o) || s("'") ? (c += a.charAt(o)) : (d = !1);
            else
                switch (a.charAt(o)) {
                    case "d":
                        c += n("d", l.getDay(e), 2);
                        break;
                    case "D":
                        c += i("D", e.getDay(), l.dayNamesShort, l.dayNames);
                        break;
                    case "o":
                        c += n(
                            "o",
                            (e.getTime() -
                                new Date(e.getFullYear(), 0, 0).getTime()) /
                                864e5,
                            3
                        );
                        break;
                    case "m":
                        c += n("m", l.getMonth(e) + 1, 2);
                        break;
                    case "M":
                        c += i(
                            "M",
                            l.getMonth(e),
                            l.monthNamesShort,
                            l.monthNames
                        );
                        break;
                    case "y":
                        (r = l.getYear(e)),
                            (c += s("y")
                                ? r
                                : (r % 100 < 10 ? "0" : "") + (r % 100));
                        break;
                    case "h":
                        var m = e.getHours();
                        c += n("h", 12 < m ? m - 12 : 0 === m ? 12 : m, 2);
                        break;
                    case "H":
                        c += n("H", e.getHours(), 2);
                        break;
                    case "i":
                        c += n("i", e.getMinutes(), 2);
                        break;
                    case "s":
                        c += n("s", e.getSeconds(), 2);
                        break;
                    case "a":
                        c += 11 < e.getHours() ? l.pmText : l.amText;
                        break;
                    case "A":
                        c +=
                            11 < e.getHours()
                                ? l.pmText.toUpperCase()
                                : l.amText.toUpperCase();
                        break;
                    case "'":
                        s("'") ? (c += "'") : (d = !0);
                        break;
                    default:
                        c += a.charAt(o);
                }
        return c;
    }
    function ce(a, i, e) {
        var t = Da({}, fe, e),
            n = ct(t.defaultValue || new Date());
        if (!a || !i) return n;
        if (i.getTime) return i;
        i = "object" == typeof i ? i.toString() : i + "";
        function o(e) {
            var t = c + 1 < a.length && a.charAt(c + 1) == e;
            return t && c++, t;
        }
        function s(e) {
            o(e);
            var t = new RegExp(
                    "^\\d{1," +
                        ("@" == e
                            ? 14
                            : "!" == e
                            ? 20
                            : "y" == e
                            ? 4
                            : "o" == e
                            ? 3
                            : 2) +
                        "}"
                ),
                a = i.substr(T).match(t);
            return a ? ((T += a[0].length), parseInt(a[0], 10)) : 0;
        }
        function r(e, t, a) {
            var n,
                s = o(e) ? a : t;
            for (n = 0; n < s.length; n++)
                if (
                    i.substr(T, s[n].length).toLowerCase() == s[n].toLowerCase()
                )
                    return (T += s[n].length), n + 1;
            return 0;
        }
        function l() {
            T++;
        }
        var c,
            d = t.shortYearCutoff,
            m = t.getYear(n),
            u = t.getMonth(n) + 1,
            h = t.getDay(n),
            f = -1,
            p = n.getHours(),
            b = n.getMinutes(),
            v = 0,
            g = -1,
            x = !1,
            T = 0;
        for (c = 0; c < a.length; c++)
            if (x) "'" != a.charAt(c) || o("'") ? l() : (x = !1);
            else
                switch (a.charAt(c)) {
                    case "d":
                        h = s("d");
                        break;
                    case "D":
                        r("D", t.dayNamesShort, t.dayNames);
                        break;
                    case "o":
                        f = s("o");
                        break;
                    case "m":
                        u = s("m");
                        break;
                    case "M":
                        u = r("M", t.monthNamesShort, t.monthNames);
                        break;
                    case "y":
                        m = s("y");
                        break;
                    case "H":
                        p = s("H");
                        break;
                    case "h":
                        p = s("h");
                        break;
                    case "i":
                        b = s("i");
                        break;
                    case "s":
                        v = s("s");
                        break;
                    case "a":
                        g =
                            r("a", [t.amText, t.pmText], [t.amText, t.pmText]) -
                            1;
                        break;
                    case "A":
                        g =
                            r("A", [t.amText, t.pmText], [t.amText, t.pmText]) -
                            1;
                        break;
                    case "'":
                        o("'") ? l() : (x = !0);
                        break;
                    default:
                        l();
                }
        if (
            (m < 100 &&
                (m +=
                    new Date().getFullYear() -
                    (new Date().getFullYear() % 100) +
                    (m <=
                    ("string" != typeof d
                        ? d
                        : (new Date().getFullYear() % 100) + parseInt(d, 10))
                        ? 0
                        : -100)),
            -1 < f)
        ) {
            (u = 1), (h = f);
            do {
                var y = 32 - new Date(m, u - 1, 32, 12).getDate();
                y < h && (u++, (h -= y));
            } while (y < h);
        }
        p = -1 == g ? p : g && p < 12 ? p + 12 : g || 12 != p ? p : 0;
        var _ = t.getDate(m, u - 1, h, p, b, v);
        return t.getYear(_) != m || t.getMonth(_) + 1 != u || t.getDay(_) != h
            ? n
            : _;
    }
    function ot(e, t) {
        return Math.round((t - e) / 864e5);
    }
    function rt(e) {
        return it(e.getFullYear(), e.getMonth(), e.getDate());
    }
    function lt(e) {
        return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
    }
    function j(e, t) {
        var a = "",
            n = "";
        return (
            e &&
                (t.h &&
                    ((n += oe(e.getHours()) + ":" + oe(e.getMinutes())),
                    t.s && (n += ":" + oe(e.getSeconds())),
                    t.u && (n += "." + oe(e.getMilliseconds(), 3)),
                    t.tz && (n += t.tz)),
                t.y
                    ? ((a += e.getFullYear()),
                      t.m &&
                          ((a += "-" + oe(e.getMonth() + 1)),
                          t.d && (a += "-" + oe(e.getDate())),
                          t.h && (a += "T" + n)))
                    : t.h && (a = n)),
            a
        );
    }
    function W(e, t, a) {
        var n,
            s,
            i = { y: 1, m: 2, d: 3, h: 4, i: 5, s: 6, u: 7, tz: 8 };
        if (a) for (n in i) (s = e[i[n] - t]) && (a[n] = "tz" == n ? s : 1);
    }
    function de(e, t, a) {
        var n = window.moment || t.moment,
            s = t.returnFormat;
        if (e) {
            if ("moment" == s && n) return n(e);
            if ("locale" == s) return le(a, e, t);
            if ("iso8601" == s) return j(e, t.isoParts);
        }
        return e;
    }
    function ct(e, t, a, n) {
        var s;
        return e
            ? e.getTime
                ? e
                : e.toDate
                ? e.toDate()
                : ("string" == typeof e && (e = e.trim()),
                  (s = me.exec(e))
                      ? (W(s, 2, n),
                        new Date(
                            1970,
                            0,
                            1,
                            s[2] ? +s[2] : 0,
                            s[3] ? +s[3] : 0,
                            s[4] ? +s[4] : 0,
                            s[5] ? +s[5] : 0
                        ))
                      : (s = s || J.exec(e))
                      ? (W(s, 0, n),
                        new Date(
                            s[1] ? +s[1] : 1970,
                            s[2] ? s[2] - 1 : 0,
                            s[3] ? +s[3] : 1,
                            s[4] ? +s[4] : 0,
                            s[5] ? +s[5] : 0,
                            s[6] ? +s[6] : 0,
                            s[7] ? +s[7] : 0
                        ))
                      : ce(t, e, a))
            : null;
    }
    function dt(e, t) {
        return (
            e.getFullYear() == t.getFullYear() &&
            e.getMonth() == t.getMonth() &&
            e.getDate() == t.getDate()
        );
    }
    o &&
        (["mouseover", "mousedown", "mouseup", "click"].forEach(function (e) {
            document.addEventListener(e, R, !0);
        }),
        "android" == e &&
            a < 5 &&
            document.addEventListener(
                "change",
                function (e) {
                    Y &&
                        "checkbox" == e.target.type &&
                        !e.target.mbscChange &&
                        (e.stopPropagation(), e.preventDefault()),
                        delete e.target.mbscChange;
                },
                !0
            ));
    var J = /^(\d{4}|[+-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?((Z)|([+-])(\d{2})(?::(\d{2}))?)?)?$/,
        me = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+-])(\d{2})(?::(\d{2}))?)?)?$/,
        mt = /^\d{1,2}(\/\d{1,2})?$/,
        ut = /^w\d$/i,
        fe = {
            shortYearCutoff: "+10",
            monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            dayNames: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
            amText: "am",
            pmText: "pm",
            getYear: function (e) {
                return e.getFullYear();
            },
            getMonth: function (e) {
                return e.getMonth();
            },
            getDay: function (e) {
                return e.getDate();
            },
            getDate: it,
            getMaxDayOfMonth: function (e, t) {
                return 32 - new Date(e, t, 32, 12).getDate();
            },
            getWeekNumber: function (e) {
                (e = new Date(e)).setHours(0, 0, 0),
                    e.setDate(e.getDate() + 4 - (e.getDay() || 7));
                var t = new Date(e.getFullYear(), 0, 1);
                return Math.ceil(((e - t) / 864e5 + 1) / 7);
            },
        };
    function ht(e) {
        return e[0].innerWidth || e.innerWidth();
    }
    function B(e) {
        var t = e.theme,
            a = e.themeVariant;
        return (
            ("auto" != t && t) || (t = K.autoTheme),
            "default" == t && (t = "mobiscroll"),
            ("dark" === a || (r && "auto" === a)) && K.themes.form[t + "-dark"]
                ? (t += "-dark")
                : "light" === a &&
                  /.+-dark$/.test(t) &&
                  (t = t.replace(/-dark$/, "")),
            t
        );
    }
    function q(a, n, e) {
        o &&
            Sa(function () {
                Sa(a).each(function () {
                    new n(this, {});
                }),
                    Sa(document).on("mbsc-enhance", function (e, t) {
                        Sa(e.target).is(a)
                            ? new n(e.target, t || {})
                            : Sa(a, e.target).each(function () {
                                  new n(this, t || {});
                              });
                    }),
                    e &&
                        Sa(document).on("mbsc-refresh", function (e) {
                            var t;
                            Sa(e.target).is(a)
                                ? (t = ka[e.target.id]) && t.refresh()
                                : Sa(a, e.target).each(function () {
                                      (t = ka[this.id]) && t.refresh();
                                  });
                        });
            });
    }
    var U,
        K,
        Sa = oa.$,
        G = +new Date(),
        ka = {},
        Z = {},
        pe = {},
        be = { xsmall: 0, small: 576, medium: 768, large: 992, xlarge: 1200 },
        Da = Sa.extend;
    Da(s, { getCoord: wa, preventClick: _a, vibrate: ya }),
        (K = Da(oa, {
            $: Sa,
            version: "4.10.6",
            autoTheme: "mobiscroll",
            themes: {
                form: {},
                page: {},
                frame: {},
                scroller: {},
                listview: {},
                navigation: {},
                progress: {},
                card: {},
            },
            platform: { name: e, majorVersion: a, minorVersion: n },
            i18n: {},
            instances: ka,
            classes: Z,
            util: s,
            settings: {},
            setDefaults: function (e) {
                Da(this.settings, e);
            },
            customTheme: function (e, t) {
                var a,
                    n = oa.themes,
                    s = [
                        "frame",
                        "scroller",
                        "listview",
                        "navigation",
                        "form",
                        "page",
                        "progress",
                        "card",
                    ];
                for (a = 0; a < s.length; a++)
                    n[s[a]][e] = Da({}, n[s[a]][t], { baseTheme: t });
            },
        }));
    function Na(p, b) {
        var v,
            g,
            x,
            T,
            y,
            _,
            w,
            C,
            M,
            S = this;
        (S.settings = {}),
            (S._getText = new Function(
                "mobiscroll, p",
                (function () {
                    var e,
                        t = (function (e, t) {
                            var a,
                                n = (function (e) {
                                    var t,
                                        a = e[0];
                                    for (t = 0; t < 16; ++t)
                                        if ((a * t) % 16 == 1) return [t, e[1]];
                                })(t),
                                s = (function (e, t, a, n) {
                                    var s,
                                        i = "0123456789abcdef",
                                        o = "",
                                        r = t.length;
                                    for (s = 0; s < r; ++s)
                                        o += e
                                            ? i[(a * i.indexOf(t[s]) + n) % 16]
                                            : i[
                                                  (((a * i.indexOf(t[s]) -
                                                      a * n) %
                                                      16) +
                                                      16) %
                                                      16
                                              ];
                                    return o;
                                })(0, e, n[0], n[1]),
                                i = s.length,
                                o = [];
                            for (a = 0; a < i; a += 2) o.push(s[a] + s[a + 1]);
                            return o;
                        })(
                            "7c7a797bedefeae973e37aefe4e4a6e5c072c2cc3d313b7ae57c757ae6a0cde17ce0a67ae1e6ecefeda0a934cde17ce0a6ede170a038a6383ea478a93fa734ece97ea8737c79e4e53daaa7abee75e6e37ce9efe6a0e5a97b7ee17aa87c3de5a6e4e5e6e77ce0a4e6a47a3b77e0e9e4e5a038a13d3d7ca97b7a3dcde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a27ca93b7cad3d313be63de55b7c5d3be55b7c5d3de55b7a5d3be55b7a5d3de67d7ae57c757ae6a8e57da05ba7ece97378e4e17932eae4efe3eba1e9ed78ef7a7ce1e67ca7a4a778ef73e97ce9efe632e1ea73efe4757ce5a1e9ed78ef7a7ce1e67ca7a4a772ade9e6ece57032ad31a7a4a77cef783238a1e9ed78ef7a7ce1e67ca7a4a7e4e5ee7c3238a1e9ed78ef7a7ce1e67ca7a4a7eaef7c7cefed3238a1e9ed78ef7a7ce1e67ca7a4a77ae9e7e07c3238a1e9ed78ef7a7ce1e67ca7a4a7ede17ae7e9e63238a1e9ed78ef7a7ce1e67ca7a4a778e1ecece9e6e73238a1e9ed78ef7a7ce1e67ca7a4a7eeefe67cad73e972e532307870a1e9ed78ef7a7ce1e67ca7a4a7e4e9e6e5ade0e5e9e7e07c32313a7870a7a4a77ce5707cade1e4e9e7e632e3e5e67ce57aa7a4a7ef78e1e3e97c7932a7aba0cde17ce0a6eee4efef7aa0cde17ce0a67ae1e6ecefeda0a9a23a38a9af313838ab38a630a9aba7a1e9ed78ef7a7ce1e67ca75da9a6e2efe9e6a0a73ba7a9aba7aa3654753838353c54753838353a547538383c39547538383c31547538383ce334afece97e36a732a7a7a97de3e17ce3e0a0e5a97b7ae57c757ae6a8a7a77dd2",
                            [9, 8]
                        ),
                        a = "",
                        n = t.length;
                    for (e = 0; e < n; e++)
                        a += String.fromCharCode(parseInt(t[e], 16));
                    return a;
                })()
            )),
            (S.element = p),
            (S._init = ga),
            (S._destroy = ga),
            (S._processSettings = ga),
            (S._checkResp = function (e) {
                if (S && S._responsive) {
                    var t = D(e);
                    if (T !== t) return (T = t), S.init({}), !0;
                }
            }),
            (S._getRespCont = function () {
                return Sa("body" == y.context ? window : y.context);
            }),
            (S.init = function (e, t) {
                var a, n;
                for (a in (e && S.getVal && (n = S.getVal()), S.settings))
                    delete S.settings[a];
                (y = S.settings),
                    Da(b, e),
                    S._hasDef && (M = K.settings),
                    Da(y, S._defaults, M, b),
                    S._hasTheme &&
                        ((w = B(y)),
                        (b.theme = w),
                        (_ = K.themes[S._class] ? K.themes[S._class][w] : {})),
                    S._hasLang && (g = K.i18n[y.lang]),
                    Da(y, _, g, M, b),
                    (v = S._getRespCont()),
                    S._responsive && ((T = T || D()), Da(y, T)),
                    S._processSettings(T || {});
                function s(e) {
                    return "string" == typeof e
                        ? e
                        : j(ct(e), {
                              y: 1,
                              m: 1,
                              d: 1,
                              h: 1,
                              i: 1,
                              s: 1,
                              u: 1,
                          });
                }
                function i() {
                    S._init(e),
                        e && S.setVal && S.setVal(void 0 === t ? n : t, !0),
                        C("onInit");
                }
                if (
                    !S._class ||
                    {
                        form: !0,
                        page: !0,
                        progress: !0,
                        switch: !0,
                        slider: !0,
                        stepper: !0,
                    }[S._class]
                )
                    i();
                else {
                    if (!K.fwv) {
                        var o;
                        switch (K.fw) {
                            case "angular":
                                o = Sa("[ng-version]").attr("ng-version");
                                break;
                            case "jquery":
                                o = Sa.fn && Sa.fn.jquery;
                        }
                        K.fwv = o || "N/A";
                    }
                    var r,
                        l,
                        c = {
                            className: S._class,
                            buttons: S.buttons,
                            platform: K.platform,
                            v: K.version,
                            userAgent: navigator.userAgent,
                            defSortHandle: Sa(p).find(y.listSelector || "ul,ol")
                                .length
                                ? "left"
                                : "right",
                            settings: {
                                activeClass: y.activeClass,
                                ampmText: y.ampmText,
                                amText: y.amText,
                                animateIcons: y.animateIcons,
                                backText: y.backText,
                                baseTheme: y.baseTheme,
                                buttons: y.buttons,
                                btnClass: y.btnClass,
                                btnWidth: y.btnWidth,
                                btnReverse: y.btnReverse,
                                closeIcon: y.closeIcon,
                                context: "body" == y.context ? "body" : "",
                                controls: y.controls,
                                cssClass: y.cssClass,
                                dateDisplay: y.dateDisplay,
                                dateFormat: y.dateFormat,
                                dateWheels: y.dateWheels,
                                dayNames: y.dayNames,
                                dayNamesShort: y.dayNamesShort,
                                daySuffix: y.daySuffix,
                                display: y.display,
                                dayText: y.dayText,
                                endYear: y.endYear,
                                fixedHeader: y.fixedHeader,
                                handleClass: y.handleClass,
                                handleMarkup: y.handleMarkup,
                                hideText: y.hideText,
                                hourText: y.hourText,
                                itemNode: y.itemNode,
                                itemWidth: y.itemWidth,
                                lang: y.lang,
                                lapIcon: y.lapIcon,
                                lapText: y.lapText,
                                layout: y.layout,
                                leftArrowClass: y.leftArrowClass,
                                max: s(y.max),
                                min: s(y.min),
                                minuteText: y.minuteText,
                                monthNames: y.monthNames,
                                monthNamesShort: y.monthNamesShort,
                                monthSuffix: y.monthSuffix,
                                monthText: y.monthText,
                                nowIcon: y.nowIcon,
                                nowText: y.nowText,
                                pmText: y.pmText,
                                preset: y.preset,
                                resetIcon: y.resetIcon,
                                resetText: y.resetText,
                                rightArrowClass: y.rightArrowClass,
                                rtl: y.rtl,
                                secText: y.secText,
                                select: y.select,
                                showOverlay: y.showOverlay,
                                snap: y.snap,
                                sort: y.sort,
                                sortable: y.sortable,
                                sortHandle: y.sortHandle,
                                startIcon: y.startIcon,
                                startText: y.startText,
                                startYear: y.startYear,
                                stepHour: y.stepHour,
                                stepMinute: y.stepMinute,
                                stepSecond: y.stepSecond,
                                steps: y.steps,
                                stopIcon: y.stopIcon,
                                stopText: y.stopText,
                                striped: y.striped,
                                theme: y.theme,
                                timeFormat: y.timeFormat,
                                timeWheels: y.timeWheels,
                                todayText: y.todayText,
                                type: y.type,
                                variant: y.variant,
                                wrapperClass: y.wrapperClass,
                                yearSuffix: y.yearSuffix,
                                yearText: y.yearText,
                            },
                        },
                        d = [],
                        m = {},
                        u = [
                            "refresh",
                            "redraw",
                            "navigate",
                            "changeTab",
                            "getDate",
                            "setDate",
                            "addEvent",
                            "removeEvent",
                            "getEvents",
                            "setEvents",
                            "setActiveDate",
                            "start",
                            "stop",
                            "reset",
                            "lap",
                            "resetlap",
                            "getTime",
                            "setTime",
                            "getEllapsedTime",
                            "setEllapsedTime",
                        ],
                        h = { jsonp: 1, getInst: 1, init: 1, destroy: 1 },
                        f = function (e) {
                            S[e] = function () {
                                d.push({ func: e, args: arguments });
                            };
                        };
                    for (l in S)
                        "function" != typeof S[l] ||
                            h[l] ||
                            ((m[l] = S[l]), f(l));
                    for (r = 0; r < u.length; r++) f(u[r]);
                    "timer" != y.preset ||
                        b.buttons ||
                        ((c.settings.buttons = ["resetlap", "toggle"]),
                        "inline" !== y.display &&
                            c.settings.buttons.unshift("hide")),
                        "eventcalendar" != y.preset ||
                            b.buttons ||
                            "inline" == y.display ||
                            (c.settings.buttons = ["close"]),
                        (y.zone = y.zone || {
                            run: function (e) {
                                e();
                            },
                            runOutsideAngular: function (e) {
                                e();
                            },
                        }),
                        "mbscdemo" !== K.apiKey &&
                            ((xe.theme = y.theme),
                            (xe.components = xe.components || []),
                            xe.components.push(
                                S._class + "_" + (y.preset || "")
                            ),
                            clearTimeout(ve),
                            (ve = setTimeout(function () {
                                Da(xe, {
                                    trialCode: K.apiKey,
                                    fw:
                                        K.fw +
                                        (window.Ionic || window.ionic
                                            ? "-ionic"
                                            : ""),
                                    fwv: K.fwv,
                                    demo: !!window.isMbscDemo,
                                }),
                                    ye("log", xe, function () {
                                        xe = {};
                                    });
                            }, 5e3))),
                        S.jsonp(
                            "remote",
                            c,
                            function (t) {
                                y.zone.run(function () {
                                    if (S) {
                                        for (l in ((S.remote = t), m))
                                            S[l] = m[l];
                                        void 0 === t.notification ||
                                            U ||
                                            ((U = !0),
                                            oa.snackbar(t.notification));
                                        var e = Da({}, b);
                                        for (
                                            delete e.data,
                                                S._presets &&
                                                    (x =
                                                        S._presets[y.preset]) &&
                                                    ((x = x.call(p, S, b)),
                                                    Da(y, x, e, T)),
                                                i(),
                                                r = 0;
                                            r < d.length;
                                            r++
                                        )
                                            S[d[r].func].apply(S, d[r].args);
                                        m = d = null;
                                    }
                                });
                            },
                            k
                        );
                }
            }),
            (S.destroy = function () {
                S &&
                    (S._destroy(), C("onDestroy"), delete ka[p.id], (S = null));
            }),
            (S.tap = function (e, t, a, n, s) {
                $(S, e, t, a, n, s);
            }),
            (S.trigger = function (e, t) {
                var a,
                    n,
                    s,
                    i = [M, _, x, b];
                for (n = 0; n < 4; n++)
                    (s = i[n]) && s[e] && (a = s[e].call(p, t || {}, S));
                return a;
            }),
            (S.option = function (e, t, a) {
                var n = {},
                    s = ["data", "invalid", "valid", "readonly"];
                /calendar|eventcalendar|range/.test(y.preset) &&
                    s.push("marked", "labels", "colors"),
                    "object" == typeof e ? (n = e) : (n[e] = t),
                    s.forEach(function (e) {
                        b[e] = y[e];
                    }),
                    S.init(n, a);
            }),
            (S.getInst = function () {
                return S;
            }),
            (S.jsonp = ye);
        var k = "comp_" + (p.id || ++ge);
        function D(e) {
            var a,
                n = pe;
            return (
                y.responsive &&
                    ((a = e || ht(v)),
                    Sa.each(y.responsive, function (e, t) {
                        a >= (t.breakpoint || be[e]) && (n = t);
                    })),
                n
            );
        }
        (b = b || {}),
            (C = S.trigger),
            S.__ready ||
                (Sa(p).addClass("mbsc-comp"),
                p.id
                    ? ka[p.id] && ka[p.id].destroy()
                    : (p.id = "mobiscroll" + ++G),
                ((ka[p.id] = S).__ready = !0));
    }
    var ve,
        ge = 0,
        xe = {};
    function Te() {
        var e = document.cookie.replace(
            /(?:(?:^|.*;\s*)ASP.NET_SessionId\s*=\s*([^;]*).*$)|^.*$/,
            "$1"
        );
        document.cookie =
            "mobiscrollClientError=1; expires=" +
            new Date(new Date().getTime() + 864e5).toUTCString() +
            "; path=/";
        try {
            window.name = (window.name || "") + ";mobiscrollClientError";
        } catch (e) {}
        ye("error", { trialCode: K.apiKey, sessionID: e }, function () {
            document.cookie =
                "mobiscrollClientError=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
            try {
                window.name = (window.name || "").replace(
                    /;mobiscrollClientError/g,
                    ""
                );
            } catch (e) {}
        });
    }
    function ye(e, t, a, n, s) {
        var i,
            o = document.createElement("script"),
            r = "mbsc_jsonp_" + (n || ++G);
        function l() {
            window[r] && window[r](),
                "remote" === e &&
                    (s < 4
                        ? ye(e, t, a, n, s + 1)
                        : K.trialError ||
                          ((K.trialError = !0),
                          Te(),
                          "mbscdemo" != K.apiKey &&
                              alert(
                                  "Mobiscroll trial not loaded. Please check your connection. If the problem persists, contact us at support@mobiscroll.com"
                              )));
        }
        (s = s || 1),
            (window[r] = function (e) {
                clearTimeout(i),
                    o.parentNode.removeChild(o),
                    delete window[r],
                    a(
                        e
                            ? JSON.parse(e, function (e, t) {
                                  return "string" != typeof t
                                      ? t
                                      : "function" === t.substring(0, 8)
                                      ? window.eval("(" + t + ")")
                                      : t.match(J)
                                      ? ct(t)
                                      : t;
                              })
                            : {}
                    );
            }),
            (i = setTimeout(l, 6e3)),
            (o.onerror = l),
            (o.src =
                K.apiUrl +
                K.apiKey +
                "/" +
                e +
                "?callback=" +
                r +
                "&data=" +
                encodeURIComponent(JSON.stringify(t))),
            document.body.appendChild(o);
    }
    function ft(e, t, a, n, s, i) {
        var o,
            r,
            l,
            c,
            d,
            m,
            u,
            h,
            f,
            p = n || ga;
        function b(e) {
            var t;
            (o = Sa(this)),
                (h = +o.attr("data-step")),
                (l = +o.attr("data-index")),
                (r = !0),
                s && e.stopPropagation(),
                "touchstart" == e.type &&
                    o.closest(".mbsc-no-touch").removeClass("mbsc-no-touch"),
                "mousedown" == e.type && e.preventDefault(),
                (t =
                    "keydown" != e.type
                        ? ((m = wa(e, "X")), (u = wa(e, "Y")), ca(e, this))
                        : 32 === e.keyCode),
                c ||
                    !t ||
                    o.hasClass("mbsc-disabled") ||
                    (T(l, h, e) &&
                        (o.addClass("mbsc-active"),
                        i && i.addRipple(o.find(".mbsc-segmented-content"), e)),
                    "mousedown" == e.type &&
                        Sa(document).on("mousemove", v).on("mouseup", g));
        }
        function v(e) {
            (7 < Math.abs(m - wa(e, "X")) || 7 < Math.abs(u - wa(e, "Y"))) &&
                ((r = !0), x());
        }
        function g(e) {
            "touchend" == e.type && e.preventDefault(),
                x(),
                "mouseup" == e.type &&
                    Sa(document).off("mousemove", v).off("mouseup", g);
        }
        function x() {
            (c = !1),
                clearInterval(f),
                o &&
                    (o.removeClass("mbsc-active"),
                    i &&
                        setTimeout(function () {
                            i.removeRipple();
                        }, 100));
        }
        function T(e, t, a) {
            return (
                c ||
                    p(e) ||
                    ((l = e),
                    (h = t),
                    (d = a),
                    (r = !(c = !0)),
                    setTimeout(y, 100)),
                c
            );
        }
        function y() {
            o && o.hasClass("mbsc-disabled")
                ? x()
                : ((!c && r) || ((r = !0), t(l, h, d, y)),
                  c &&
                      a &&
                      (clearInterval(f),
                      (f = setInterval(function () {
                          t(l, h, d);
                      }, a))));
        }
        return (
            e.each(function (e, t) {
                ma(t, "touchstart", b, { passive: !0 }),
                    ma(t, "mousedown", b),
                    ma(t, "keydown", b),
                    ma(t, "touchmove", v, { passive: !0 }),
                    ma(t, "touchend", g),
                    ma(t, "touchcancel", g),
                    ma(t, "keyup", g);
            }),
            {
                start: T,
                stop: x,
                destroy: function () {
                    e.each(function (e, t) {
                        ua(t, "touchstart", b, { passive: !0 }),
                            ua(t, "mousedown", b),
                            ua(t, "keydown", b),
                            ua(t, "touchmove", v, { passive: !0 }),
                            ua(t, "touchend", g),
                            ua(t, "touchcancel", g),
                            ua(t, "keyup", g);
                    });
                },
            }
        );
    }
    o &&
        Sa(function () {
            (document.cookie.replace(
                /(?:(?:^|.*;\s*)mobiscrollClientError\s*=\s*([^;]*).*$)|^.*$/,
                "$1"
            ) ||
                /mobiscrollClientError/.test(window.name || "")) &&
                Te();
        });
    var _e,
        we = "position:absolute;left:0;top:0;",
        Ce = we + "right:0;bottom:0;overflow:hidden;z-index:-1;",
        Me =
            '<div style="' +
            Ce +
            '"><div style="' +
            we +
            '"></div></div><div style="' +
            Ce +
            '"><div style="' +
            we +
            'width:200%;height:200%;"></div></div>',
        Se = 0;
    function ke(e, t, a) {
        function n() {
            (l.style.width = "100000px"),
                (l.style.height = "100000px"),
                (r.scrollLeft = 1e5),
                (r.scrollTop = 1e5),
                (u.scrollLeft = 1e5),
                (u.scrollTop = 1e5);
        }
        function s() {
            var e = new Date();
            (d = 0),
                h ||
                    (200 < e - f &&
                        !r.scrollTop &&
                        !r.scrollLeft &&
                        ((f = e), n()),
                    (d = d || ra(s)));
        }
        function i() {
            m = m || ra(o);
        }
        function o() {
            (m = 0), n(), t();
        }
        var r,
            l,
            c,
            d,
            m,
            u,
            h,
            f = 0;
        return (
            window.ResizeObserver
                ? ((_e =
                      _e ||
                      new ResizeObserver(function (e) {
                          var t = e,
                              a = Array.isArray(t),
                              n = 0;
                          for (t = a ? t : t[Symbol.iterator](); ; ) {
                              var s;
                              if (a) {
                                  if (n >= t.length) break;
                                  s = t[n++];
                              } else {
                                  if ((n = t.next()).done) break;
                                  s = n.value;
                              }
                              s.target.__mbscResize();
                          }
                      })),
                  Se++,
                  (e.__mbscResize = t),
                  _e.observe(e))
                : (((c = document.createElement("div")).innerHTML = Me),
                  (c.dir = "ltr"),
                  (u = c.childNodes[1]),
                  (r = c.childNodes[0]),
                  (l = r.childNodes[0]),
                  e.appendChild(c),
                  r.addEventListener("scroll", i),
                  u.addEventListener("scroll", i),
                  a
                      ? a.runOutsideAngular(function () {
                            ra(s);
                        })
                      : ra(s)),
            {
                detach: function () {
                    _e
                        ? (Se--, _e.unobserve(e), Se || (_e = null))
                        : (e.removeChild(c), (h = !0));
                },
            }
        );
    }
    function De(e) {
        e.preventDefault();
    }
    function Ne(a, n, e) {
        var M,
            i,
            o,
            S,
            c,
            k,
            D,
            N,
            V,
            d,
            s,
            A,
            m,
            E,
            F,
            H,
            r,
            I,
            O,
            P,
            L,
            l,
            u,
            h,
            Y,
            t,
            f,
            z,
            $,
            p,
            R,
            j,
            W,
            J = this,
            B = Sa(a),
            b = [],
            v = new Date();
        function g(e) {
            z.stopProp && e.stopPropagation();
            var t = ha(this, e.target, ".mbsc-fr-btn-e");
            t &&
                (s && s.removeClass("mbsc-active"),
                (s = Sa(t)).hasClass("mbsc-disabled") ||
                    s.hasClass("mbsc-fr-btn-nhl") ||
                    s.addClass("mbsc-active"),
                "mousedown" === e.type && Sa(document).on("mouseup", x));
        }
        function x(e) {
            s && (s.removeClass("mbsc-active"), (s = null)),
                "mouseup" === e.type && Sa(document).off("mouseup", x);
        }
        function T(e) {
            $ && I.contains(e.target) && e.preventDefault();
        }
        function y(e) {
            oa.activeInstance == J &&
                (13 != e.keyCode ||
                (Sa(e.target).is(
                    'textarea,button,input[type="button"],input[type="submit"]'
                ) &&
                    !e.shiftKey)
                    ? 27 == e.keyCode && J.cancel()
                    : J.select());
        }
        function _(e) {
            e ||
                He ||
                !J._activeElm ||
                ((v = new Date()), J._activeElm.focus());
        }
        function w(e) {
            var t = Ve,
                a = z.focusOnClose;
            J._markupRemove(),
                S.remove(),
                F &&
                    (A.mbscModals--,
                    z.scrollLock && A.mbscLock--,
                    A.mbscLock || o.removeClass("mbsc-fr-lock"),
                    l &&
                        (A.mbscIOSLock--,
                        A.mbscIOSLock ||
                            (o.removeClass("mbsc-fr-lock-ios"),
                            M.css({ top: "", left: "" }),
                            N.scrollLeft(A.mbscScrollLeft),
                            N.scrollTop(A.mbscScrollTop))),
                    A.mbscModals || o.removeClass("mbsc-fr-lock-ctx"),
                    (A.mbscModals && !f) ||
                        e ||
                        ((t = t || B),
                        setTimeout(function () {
                            void 0 === a || !0 === a
                                ? ((Ae = !0), t[0].focus())
                                : a && Sa(a)[0].focus();
                        }, 200))),
                (f = void 0),
                (H = !1),
                R("onHide");
        }
        function C() {
            clearTimeout(t),
                (t = setTimeout(function () {
                    J.position(!0) &&
                        ((Y.style.visibility = "hidden"),
                        Y.offsetHeight,
                        (Y.style.visibility = ""));
                }, 200));
        }
        function q(e) {
            oa.activeInstance == J &&
                e.target.nodeType &&
                !h.contains(e.target) &&
                100 < new Date() - v &&
                ((v = new Date()), J._activeElm.focus());
        }
        function U(e, t) {
            function a(e) {
                o ||
                    e.target != h ||
                    ((i = !(o = !0)), (r = wa(e, "X")), (l = wa(e, "Y")));
            }
            function n(e) {
                o &&
                    !i &&
                    (9 < Math.abs(wa(e, "X") - r) ||
                        9 < Math.abs(wa(e, "Y") - l)) &&
                    (i = !0);
            }
            if (J._isVisible) {
                if (F) S.appendTo(M);
                else if (B.is("div") && !J._hasContent) B.empty().append(S);
                else if (B.hasClass("mbsc-control")) {
                    var s = B.closest(".mbsc-control-w");
                    S.insertAfter(s),
                        s.hasClass("mbsc-select") &&
                            s.addClass("mbsc-select-inline");
                } else S.insertAfter(B);
                var i, o, r, l;
                if (
                    ((H = !0),
                    J._markupInserted(S),
                    R("onMarkupInserted", { target: I }),
                    F && z.closeOnOverlayTap)
                )
                    ma(h, "touchstart", a, { passive: !0 }),
                        ma(h, "touchmove", n, { passive: !0 }),
                        c
                            .on("mousedown", a)
                            .on("mousemove", n)
                            .on("touchcancel", function () {
                                o = !1;
                            })
                            .on("touchend click", function (e) {
                                o &&
                                    !i &&
                                    (J.cancel(), "touchend" == e.type && _a()),
                                    (o = !1);
                            });
                S.on("mousedown", ".mbsc-btn-e,.mbsc-fr-btn-e", De)
                    .on("keydown", ".mbsc-fr-btn-e", function (e) {
                        32 == e.keyCode &&
                            (e.preventDefault(),
                            e.stopPropagation(),
                            this.click());
                    })
                    .on("keydown", function (e) {
                        if (32 != e.keyCode || Sa(e.target).is(Pe)) {
                            if (9 == e.keyCode && F && z.focusTrap) {
                                var t = S.find(
                                        'input,select,textarea,button,[tabindex="0"]'
                                    ).filter(function () {
                                        return (
                                            0 < this.offsetWidth ||
                                            0 < this.offsetHeight
                                        );
                                    }),
                                    a = t.index(Sa(":focus", S)),
                                    n = t.length - 1,
                                    s = 0;
                                e.shiftKey && ((n = 0), (s = -1)),
                                    a === n &&
                                        (t.eq(s)[0].focus(),
                                        e.preventDefault());
                            }
                        } else e.preventDefault();
                    })
                    .on("touchend", ".mbsc-fr-btn-e", x),
                    ma(I, "touchstart", g, { passive: !0 }),
                    ma(I, "mousedown", g),
                    ma(
                        I,
                        "touchstart",
                        function () {
                            p ||
                                ((p = !0),
                                M.find(".mbsc-no-touch").removeClass(
                                    "mbsc-no-touch"
                                ));
                        },
                        { passive: !0, capture: !0 }
                    ),
                    Sa.each(d, function (e, t) {
                        J.tap(
                            Sa(".mbsc-fr-btn" + e, S),
                            function (e) {
                                (t = ue(t) ? J.buttons[t] : t),
                                    (ue(t.handler)
                                        ? J.handlers[t.handler]
                                        : t.handler
                                    ).call(this, e, J);
                            },
                            !0
                        );
                    }),
                    J._attachEvents(S),
                    !1 !== J.position() &&
                        ((F || J._checkSize) && (u = ke(I, C, z.zone)),
                        F &&
                            (S.removeClass("mbsc-fr-pos"),
                            m && !e
                                ? S.addClass(
                                      "mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" +
                                          m
                                  )
                                      .on(pa, function e() {
                                          S.off(pa, e)
                                              .removeClass(
                                                  "mbsc-anim-in mbsc-anim-trans mbsc-anim-trans-" +
                                                      m
                                              )
                                              .find(".mbsc-fr-popup")
                                              .removeClass("mbsc-anim-" + m),
                                              _(t);
                                      })
                                      .find(".mbsc-fr-popup")
                                      .addClass("mbsc-anim-" + m)
                                : _(t)),
                        R("onShow", { target: I, valueText: J._tempValue }));
            }
        }
        function K(e, t) {
            J._isVisible || (e && e(), !1 !== J.show() && (Ve = t));
        }
        function G() {
            J._fillValue(), R("onSet", { valueText: J._value });
        }
        function X() {
            R("onCancel", { valueText: J._value });
        }
        function Z() {
            J.setVal(null, !0);
        }
        Na.call(this, a, n, !0),
            (J.position = function (e) {
                var t,
                    a,
                    n,
                    s,
                    i,
                    o,
                    r,
                    l,
                    c,
                    d,
                    m,
                    u,
                    h,
                    f,
                    p,
                    b,
                    v,
                    g,
                    x,
                    T = {},
                    y = 0,
                    _ = 0,
                    w = 0,
                    C = 0;
                if (!H) return !1;
                if (
                    ((b = j),
                    (p = W),
                    (h = Math.min(
                        I.offsetHeight,
                        E ? 1 / 0 : window.innerHeight
                    )),
                    (f = Math.min(
                        I.offsetWidth,
                        E ? 1 / 0 : window.innerWidth
                    )) &&
                        h &&
                        (j !== f || W !== h || !e))
                ) {
                    if (J._checkResp(f)) return !1;
                    if (
                        ((j = f),
                        (W = h),
                        J._isFullScreen || /top|bottom/.test(z.display)
                            ? D.width(f)
                            : F && V.width(""),
                        J._position(S),
                        !J._isFullScreen &&
                            /center|bubble/.test(z.display) &&
                            (Sa(".mbsc-w-p", S).each(function () {
                                (v = this.getBoundingClientRect().width),
                                    (C += v),
                                    (w = w < v ? v : w);
                            }),
                            (u = f - 16 < C || !0 === z.tabs),
                            V.css({
                                width: J._isLiquid
                                    ? Math.min(z.maxPopupWidth, f - 16)
                                    : Math.ceil(u ? w : C),
                                "white-space": u ? "" : "nowrap",
                            })),
                        !1 !==
                            R("onPosition", {
                                target: I,
                                popup: Y,
                                hasTabs: u,
                                oldWidth: b,
                                oldHeight: p,
                                windowWidth: f,
                                windowHeight: h,
                            }) && F)
                    )
                        return (
                            L &&
                                ((y = N.scrollLeft()),
                                (_ = N.scrollTop()),
                                j && k.css({ width: "", height: "" })),
                            (O = Y.offsetWidth),
                            (P = Y.offsetHeight),
                            ($ = P <= h && O <= f),
                            "center" == z.display
                                ? ((x = Math.max(0, y + (f - O) / 2)),
                                  (g = Math.max(0, _ + (h - P) / 2)))
                                : "bubble" == z.display
                                ? ((t = void 0 === z.anchor ? B : Sa(z.anchor)),
                                  (r = Sa(".mbsc-fr-arr-i", S)[0]),
                                  (i =
                                      (s = t.offset()).top +
                                      (E ? _ - M.offset().top : 0)),
                                  (o = s.left + (E ? y - M.offset().left : 0)),
                                  (a = t[0].offsetWidth),
                                  (n = t[0].offsetHeight),
                                  (l = r.offsetWidth),
                                  (c = r.offsetHeight),
                                  (x = he(
                                      o - (O - a) / 2,
                                      y + 3,
                                      y + f - O - 3
                                  )),
                                  _ + h < (g = i + n + c / 2) + P + 8 &&
                                  _ < i - P - c / 2
                                      ? (D.removeClass(
                                            "mbsc-fr-bubble-bottom"
                                        ).addClass("mbsc-fr-bubble-top"),
                                        (g = i - P - c / 2))
                                      : D.removeClass(
                                            "mbsc-fr-bubble-top"
                                        ).addClass("mbsc-fr-bubble-bottom"),
                                  Sa(".mbsc-fr-arr", S).css({
                                      left: he(
                                          o + a / 2 - (x + (O - l) / 2),
                                          0,
                                          l
                                      ),
                                  }),
                                  ($ =
                                      _ < g &&
                                      y < x &&
                                      g + P <= _ + h &&
                                      x + O <= y + f))
                                : ((x = y),
                                  (g =
                                      "top" == z.display
                                          ? _
                                          : Math.max(0, _ + h - P))),
                            L &&
                                ((d = Math.max(
                                    g + P,
                                    E ? A.scrollHeight : Sa(document).height()
                                )),
                                (m = Math.max(
                                    x + O,
                                    E ? A.scrollWidth : Sa(document).width()
                                )),
                                k.css({ width: m, height: d }),
                                z.scroll &&
                                    "bubble" == z.display &&
                                    (_ + h < g + P + 8 ||
                                        _ + h < i ||
                                        i + n < _) &&
                                    N.scrollTop(
                                        Math.min(i, g + P - h + 8, d - h)
                                    )),
                            (T.top = Math.floor(g)),
                            (T.left = Math.floor(x)),
                            D.css(T),
                            !0
                        );
                }
            }),
            (J.attachShow = function (e, t) {
                var a,
                    n = Sa(e).off(".mbsc"),
                    s = n.prop("readonly");
                re(n),
                    "inline" !== z.display &&
                        ((z.showOnFocus || z.showOnTap) &&
                            n.is("input,select") &&
                            (n
                                .prop("readonly", !0)
                                .on("mousedown.mbsc", function (e) {
                                    e.preventDefault();
                                })
                                .on("focus.mbsc", function () {
                                    J._isVisible && this.blur();
                                }),
                            (a = Sa('label[for="' + n.attr("id") + '"]'))
                                .length || (a = n.closest("label"))),
                        n.is("select") ||
                            (z.showOnFocus &&
                                n.on("focus.mbsc", function () {
                                    Ae ? (Ae = !1) : K(t, n);
                                }),
                            z.showOnTap &&
                                (n.on("keydown.mbsc", function (e) {
                                    (32 != e.keyCode && 13 != e.keyCode) ||
                                        (e.preventDefault(),
                                        e.stopPropagation(),
                                        K(t, n));
                                }),
                                J.tap(n, function (e) {
                                    e.isMbscTap && (p = !0), K(t, n);
                                }),
                                a &&
                                    a.length &&
                                    J.tap(a, function (e) {
                                        e.preventDefault(),
                                            e.target !== n[0] && K(t, n);
                                    }))),
                        b.push({ readOnly: s, el: n, lbl: a }));
            }),
            (J.select = function () {
                F ? J.hide(!1, "set", !1, G) : G();
            }),
            (J.cancel = function () {
                F ? J.hide(!1, "cancel", !1, X) : X();
            }),
            (J.clear = function () {
                J._clearValue(),
                    R("onClear"),
                    F && J._isVisible && !J.live
                        ? J.hide(!1, "clear", !1, Z)
                        : Z();
            }),
            (J.enable = function () {
                (z.disabled = !1),
                    Sa.each(b, function (e, t) {
                        t.el.is("input,select") && (t.el[0].disabled = !1);
                    });
            }),
            (J.disable = function () {
                (z.disabled = !0),
                    Sa.each(b, function (e, t) {
                        t.el.is("input,select") && (t.el[0].disabled = !0);
                    });
            }),
            (J.show = function (e, t) {
                var a, n, s;
                if (!z.disabled && !J._isVisible) {
                    if ((J._readValue(), !1 === R("onBeforeShow"))) return !1;
                    (Ve = null),
                        (m = z.animate),
                        (d = z.buttons || []),
                        (L = E || "bubble" == z.display),
                        (l = Fe && !L && z.scrollLock),
                        0 < d.length,
                        !1 !== m &&
                            ("top" == z.display
                                ? (m = m || "slidedown")
                                : "bottom" == z.display
                                ? (m = m || "slideup")
                                : ("center" != z.display &&
                                      "bubble" != z.display) ||
                                  (m = m || "pop")),
                        F &&
                            ((W = j = 0),
                            l &&
                                !o.hasClass("mbsc-fr-lock-ios") &&
                                ((A.mbscScrollTop = s = Math.max(
                                    0,
                                    N.scrollTop()
                                )),
                                (A.mbscScrollLeft = n = Math.max(
                                    0,
                                    N.scrollLeft()
                                )),
                                M.css({ top: -s + "px", left: -n + "px" })),
                            o.addClass(
                                (z.scrollLock ? "mbsc-fr-lock" : "") +
                                    (l ? " mbsc-fr-lock-ios" : "") +
                                    (E ? " mbsc-fr-lock-ctx" : "")
                            ),
                            Sa(document.activeElement).is("input,textarea") &&
                                document.activeElement.blur(),
                            (f = oa.activeInstance),
                            (oa.activeInstance = J),
                            (A.mbscModals = (A.mbscModals || 0) + 1),
                            l && (A.mbscIOSLock = (A.mbscIOSLock || 0) + 1),
                            z.scrollLock &&
                                (A.mbscLock = (A.mbscLock || 0) + 1)),
                        (a =
                            J.remote.html1.replace("mbsc-no-touch", "") +
                            " mbsc-fr-" +
                            z.display +
                            " " +
                            (z.cssClass || "") +
                            " " +
                            (z.compClass || "") +
                            (F
                                ? " mbsc-fr-pos" +
                                  (z.showOverlay ? "" : " mbsc-fr-no-overlay")
                                : "") +
                            (r ? " mbsc-fr-pointer" : "") +
                            (J._isLiquid ? " mbsc-fr-liq" : "") +
                            (Oe ? " mbsc-fr-hb" : "") +
                            (p ? "" : " mbsc-no-touch") +
                            J.remote.html2 +
                            (z.headerText ? " mbsc-fr-has-hdr" : "") +
                            '">' +
                            ("bubble" === z.display
                                ? '<div class="mbsc-fr-arr-w"><div class="mbsc-fr-arr-i"><div class="mbsc-fr-arr"></div></div></div>'
                                : "") +
                            J.remote.html3 +
                            (z.headerText
                                ? '<div class="mbsc-fr-hdr">' +
                                  (ue(z.headerText) ? z.headerText : "") +
                                  "</div>"
                                : "") +
                            '<div class="mbsc-fr-c">'),
                        (a += J._generateContent()),
                        (a += J.remote.html4),
                        (S = Sa(a)),
                        (k = Sa(".mbsc-fr-persp", S)),
                        (c = Sa(".mbsc-fr-scroll", S)),
                        (V = Sa(".mbsc-fr-w", S)),
                        (D = Sa(".mbsc-fr-popup", S)),
                        (i = Sa(".mbsc-fr-hdr", S)),
                        (I = S[0]),
                        (h = c[0]),
                        (Y = D[0]),
                        (J._activeElm = Sa(".mbsc-fr-focus", S)[0]),
                        (J._markup = S),
                        (J._isVisible = !0),
                        (J.markup = I),
                        J._markupReady(S),
                        R("onMarkupReady", { target: I }),
                        F &&
                            (Sa(window).on("keydown", y),
                            z.scrollLock &&
                                (ma(document, "touchmove", T, { passive: !1 }),
                                ma(document, "mousewheel", T, { passive: !1 }),
                                ma(document, "wheel", T, { passive: !1 })),
                            z.focusTrap && N.on("focusin", q)),
                        F
                            ? setTimeout(
                                  function () {
                                      U(e, t);
                                  },
                                  l ? 100 : 0
                              )
                            : U(e, t);
                }
            }),
            (J.hide = function (t, e, a, n) {
                if (
                    !J._isVisible ||
                    (!a && !J._isValid && "set" == e) ||
                    (!a &&
                        !1 ===
                            R("onBeforeClose", {
                                valueText: J._tempValue,
                                button: e,
                            }))
                )
                    return !1;
                (J._isVisible = !1),
                    u && (u.detach(), (u = null)),
                    F &&
                        (Sa(document.activeElement).is("input,textarea") &&
                            Y.contains(document.activeElement) &&
                            document.activeElement.blur(),
                        oa.activeInstance == J && (oa.activeInstance = f),
                        Sa(window).off("keydown", y),
                        N.off("focusin", q),
                        ua(document, "touchmove", T, { passive: !1 }),
                        ua(document, "mousewheel", T, { passive: !1 }),
                        ua(document, "wheel", T, { passive: !1 })),
                    S &&
                        (F && m && !t
                            ? S.addClass(
                                  "mbsc-anim-out mbsc-anim-trans mbsc-anim-trans-" +
                                      m
                              )
                                  .on(pa, function e() {
                                      S.off(pa, e), w(t);
                                  })
                                  .find(".mbsc-fr-popup")
                                  .addClass("mbsc-anim-" + m)
                            : w(t),
                        J._detachEvents(S)),
                    n && n(),
                    B.trigger("blur"),
                    R("onClose", { valueText: J._value });
            }),
            (J.isVisible = function () {
                return J._isVisible;
            }),
            (J.setVal = ga),
            (J.getVal = ga),
            (J._generateContent = ga),
            (J._attachEvents = ga),
            (J._detachEvents = ga),
            (J._readValue = ga),
            (J._clearValue = ga),
            (J._fillValue = ga),
            (J._markupReady = ga),
            (J._markupInserted = ga),
            (J._markupRemove = ga),
            (J._position = ga),
            (J.__processSettings = ga),
            (J.__init = ga),
            (J.__destroy = ga),
            (J._destroy = function () {
                J.hide(!0, !1, !0),
                    B.off(".mbsc"),
                    re(B),
                    Sa.each(b, function (e, t) {
                        t.el.off(".mbsc").prop("readonly", t.readOnly),
                            re(t.el),
                            t.lbl && (t.lbl.off(".mbsc"), re(t.lbl));
                    }),
                    J.__destroy();
            }),
            (J._updateHeader = function () {
                var e = z.headerText,
                    t = e
                        ? "function" == typeof e
                            ? e.call(a, J._tempValue)
                            : e.replace(/\{value\}/i, J._tempValue)
                        : "";
                i.html(t || "&nbsp;");
            }),
            (J._getRespCont = function () {
                return (
                    (E = "body" != z.context),
                    (N = Sa(E ? z.context : window)),
                    "inline" == z.display ? (B.is("div") ? B : B.parent()) : N
                );
            }),
            (J._processSettings = function (e) {
                var t, a;
                for (
                    J.__processSettings(e),
                        (r = !z.touchUi) &&
                            ((z.display = e.display || n.display || "bubble"),
                            (z.buttons = e.buttons || n.buttons || []),
                            (z.showOverlay =
                                e.showOverlay || n.showOverlay || !1)),
                        z.buttons =
                            z.buttons ||
                            ("inline" !== z.display ? ["cancel", "set"] : []),
                        z.headerText =
                            void 0 === z.headerText
                                ? "inline" !== z.display && "{value}"
                                : z.headerText,
                        d = z.buttons || [],
                        F = "inline" !== z.display,
                        M = Sa(z.context),
                        o = E ? M : Sa("body,html"),
                        A = M[0],
                        J.live = !0,
                        a = 0;
                    a < d.length;
                    a++
                )
                    ("ok" != (t = d[a]) && "set" != t && "set" != t.handler) ||
                        (J.live = !1);
                (J.buttons.set = {
                    text: z.setText,
                    icon: z.setIcon,
                    handler: "set",
                }),
                    (J.buttons.cancel = {
                        text: z.cancelText,
                        icon: z.cancelIcon,
                        handler: "cancel",
                    }),
                    (J.buttons.close = {
                        text: z.closeText,
                        icon: z.closeIcon,
                        handler: "cancel",
                    }),
                    (J.buttons.clear = {
                        text: z.clearText,
                        icon: z.clearIcon,
                        handler: "clear",
                    }),
                    (J._isInput = B.is("input"));
            }),
            (J._init = function (e) {
                var t = J._isVisible,
                    a = t && !S.hasClass("mbsc-fr-pos");
                t && J.hide(!0, !1, !0),
                    B.off(".mbsc"),
                    re(B),
                    J.__init(e),
                    (J._isLiquid = "liquid" == z.layout),
                    F
                        ? (J._readValue(),
                          J._hasContent || z.skipShow || J.attachShow(B),
                          t && J.show(a))
                        : J.show(),
                    B.removeClass("mbsc-cloak")
                        .filter("input, select, textarea")
                        .on("change.mbsc", function () {
                            J._preventChange || J.setVal(B.val(), !0, !1),
                                (J._preventChange = !1);
                        });
            }),
            (J.buttons = {}),
            (J.handlers = { set: J.select, cancel: J.cancel, clear: J.clear }),
            (J._value = null),
            (J._isValid = !0),
            (J._isVisible = !1),
            (z = J.settings),
            (R = J.trigger),
            e || J.init();
    }
    var Ve,
        Ae,
        Ee = oa.themes,
        Fe = /(iphone|ipod)/i.test(l) && 7 <= a,
        He = "android" == e,
        Ie = "ios" == e,
        Oe = Ie && 7 < a,
        Pe = "input,select,textarea,button";
    (Ne.prototype._defaults = {
        lang: "en",
        setText: "Set",
        selectedText: "{count} selected",
        closeText: "Close",
        cancelText: "Cancel",
        clearText: "Clear",
        context: "body",
        maxPopupWidth: 600,
        disabled: !1,
        closeOnOverlayTap: !0,
        showOnFocus: He || Ie,
        showOnTap: !0,
        display: "center",
        scroll: !0,
        scrollLock: !0,
        showOverlay: !0,
        tap: !0,
        touchUi: !0,
        btnClass: "mbsc-fr-btn",
        btnWidth: !0,
        focusTrap: !0,
        focusOnClose: !(Ie && 8 == a),
    }),
        (Z.Frame = Ne),
        (Ee.frame.mobiscroll = { headerText: !1, btnWidth: !1 }),
        (Ee.scroller.mobiscroll = Da({}, Ee.frame.mobiscroll, {
            rows: 5,
            showLabel: !1,
            selectedLineBorder: 1,
            weekDays: "min",
            checkIcon: "ion-ios7-checkmark-empty",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        })),
        o &&
            Sa(window).on("focus", function () {
                Ve && (Ae = !0);
            });
    function pt(s, e, t) {
        var n,
            a,
            i,
            o,
            c,
            r,
            l,
            d,
            m,
            u,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T,
            y,
            _,
            w,
            C,
            M,
            S,
            k,
            D,
            N,
            V,
            A,
            E,
            F,
            H,
            I,
            O,
            P,
            L,
            Y,
            z,
            $,
            R,
            j,
            W,
            J,
            B,
            q,
            U = this,
            K = 0,
            G = 1,
            X = e,
            Z = Sa(s);
        function Q(e) {
            J("onStart", { domEvent: e }),
                X.stopProp && e.stopPropagation(),
                X.prevDef && "mousedown" == e.type && e.preventDefault(),
                X.readonly ||
                    (X.lock && w) ||
                    (ca(e, this) &&
                        !_ &&
                        oa.eHzJD &&
                        (n && n.removeClass("mbsc-active"),
                        (v = !1),
                        w ||
                            ((n = Sa(e.target).closest(".mbsc-btn-e", this))
                                .length &&
                                !n.hasClass("mbsc-disabled") &&
                                ((v = !0),
                                (o = setTimeout(function () {
                                    n.addClass("mbsc-active");
                                }, 100)))),
                        (C = A = !(_ = !0)),
                        (U.scrolled = w),
                        (Y = wa(e, "X")),
                        (z = wa(e, "Y")),
                        (f = Y),
                        (d = l = r = 0),
                        (L = new Date()),
                        (P = +da(R, B) || 0),
                        w && me(P, Le ? 0 : 1),
                        "mousedown" === e.type &&
                            Sa(document)
                                .on("mousemove", ee)
                                .on("mouseup", ae)));
        }
        function ee(e) {
            _ &&
                (X.stopProp && e.stopPropagation(),
                (f = wa(e, "X")),
                (p = wa(e, "Y")),
                (r = f - Y),
                (l = p - z),
                (d = B ? l : r),
                v &&
                    (Math.abs(l) > X.thresholdY ||
                        Math.abs(r) > X.thresholdX) &&
                    (clearTimeout(o), n.removeClass("mbsc-active"), (v = !1)),
                (U.scrolled || (!C && Math.abs(d) > W)) &&
                    (A || J("onGestureStart", b),
                    (U.scrolled = A = !0),
                    S || ((S = !0), (M = ra(te)))),
                B || X.scrollLock
                    ? e.preventDefault()
                    : U.scrolled
                    ? e.preventDefault()
                    : 7 < Math.abs(l) && ((C = !0), (U.scrolled = !0), ae()));
        }
        function te() {
            T && (d = he(d, -I * T, I * T)),
                me(he(P + d, y - h, x + h)),
                (S = !1);
        }
        function ae(e) {
            if (_) {
                var t,
                    a = new Date() - L;
                X.stopProp && e && e.stopPropagation(),
                    la(M),
                    (S = !1),
                    !C &&
                        U.scrolled &&
                        (X.momentum &&
                            a < 300 &&
                            ((t = d / a),
                            (d =
                                Math.max(Math.abs(d), (t * t) / X.speedUnit) *
                                (d < 0 ? -1 : 1))),
                        de(d)),
                    v &&
                        (clearTimeout(o),
                        n.addClass("mbsc-active"),
                        setTimeout(function () {
                            n.removeClass("mbsc-active");
                        }, 100),
                        C ||
                            U.scrolled ||
                            J("onBtnTap", { target: n[0], domEvent: e })),
                    e &&
                        "mouseup" == e.type &&
                        Sa(document).off("mousemove", ee).off("mouseup", ae),
                    (_ = !1);
            }
        }
        function ne(e) {
            U.scrolled &&
                ((U.scrolled = !1), e.stopPropagation(), e.preventDefault());
        }
        function se(e) {
            if (
                s.contains(e.target) &&
                ((e = e.originalEvent || e),
                (d = B
                    ? null == e.deltaY
                        ? e.wheelDelta || e.detail
                        : e.deltaY
                    : e.deltaX),
                J("onStart", { domEvent: e }),
                X.stopProp && e.stopPropagation(),
                d && oa.eHzJD)
            ) {
                if (
                    (e.preventDefault(),
                    e.deltaMode && 1 == e.deltaMode && (d *= 15),
                    (d = he(-d, -F, F)),
                    (P = q),
                    X.readonly)
                )
                    return;
                if (
                    (A || ce(),
                    P + d < y && ((P = y), (d = 0)),
                    x < P + d && ((P = x), (d = 0)),
                    S || ((S = !0), (M = ra(te))),
                    !d && A)
                )
                    return;
                (A = !0),
                    clearTimeout(E),
                    (E = setTimeout(function () {
                        la(M), (A = S = !1), de(d);
                    }, 200));
            }
        }
        function ie(e) {
            J("onStart", { domEvent: e }),
                X.readonly ||
                    (e.stopPropagation(),
                    (P = q),
                    (A = !1),
                    e.target == k
                        ? ((z = wa(e, "Y", !0)),
                          Sa(document).on("mousemove", oe).on("mouseup", re))
                        : ((z = a.offset().top), oe(e), re()));
        }
        function oe(e) {
            var t = (wa(e, "Y", !0) - z) / c;
            (d = g
                ? he((d = -(T * I * 2 + c) * t), -I * T, I * T)
                : (y - x - c) * t),
                A || ce(),
                (A = !0),
                me(he(P + d, y - h, x + h));
        }
        function re() {
            (P = q),
                de(0),
                Sa(document).off("mousemove", oe).off("mouseup", re);
        }
        function le(e) {
            e.stopPropagation();
        }
        function ce() {
            J(
                "onGestureStart",
                (b = {
                    posX: B ? 0 : q,
                    posY: B ? q : 0,
                    originX: B ? 0 : P,
                    originY: B ? P : 0,
                    direction: 0 < d ? (B ? 270 : 360) : B ? 90 : 180,
                })
            );
        }
        function de(e) {
            var t, a, n;
            if (
                (T && (e = he(e, -I * T, I * T)),
                (n = he(Math.round((P + e) / I) * I, y, x)),
                O)
            ) {
                if (e < 0) {
                    for (t = O.length - 1; 0 <= t; t--)
                        if (Math.abs(n) + c >= O[t].breakpoint) {
                            (G = 2), (n = O[(K = t)].snap2);
                            break;
                        }
                } else if (0 <= e)
                    for (t = 0; t < O.length; t++)
                        if (Math.abs(n) <= O[t].breakpoint) {
                            (G = 1), (n = O[(K = t)].snap1);
                            break;
                        }
                n = he(n, y, x);
            }
            (a =
                X.time ||
                (q < y || x < q
                    ? 1e3
                    : Math.max(1e3, Math.abs(n - q) * X.timeUnit))),
                (b.destinationX = B ? 0 : n),
                (b.destinationY = B ? n : 0),
                (b.duration = a),
                (b.transitionTiming = u),
                J("onGestureEnd", b),
                U.scroll(n, a);
        }
        function me(t, e, a, n) {
            function s() {
                clearInterval(H),
                    clearTimeout(j),
                    (w = !1),
                    (q = t),
                    (b.posX = B ? 0 : t),
                    (b.posY = B ? t : 0),
                    o && J("onMove", b),
                    r && J("onAnimationEnd", b),
                    n && n();
            }
            var i,
                o = t != q,
                r = 1 < e,
                l = e ? ba + "transform " + Math.round(e) + "ms " + u : "";
            (b = {
                posX: B ? 0 : q,
                posY: B ? q : 0,
                originX: B ? 0 : P,
                originY: B ? P : 0,
                direction: 0 < t - q ? (B ? 270 : 360) : B ? 90 : 180,
            }),
                (q = t),
                r &&
                    ((b.destinationX = B ? 0 : t),
                    (b.destinationY = B ? t : 0),
                    (b.duration = e),
                    (b.transitionTiming = u),
                    J("onAnimationStart", b)),
                ($[va + "Transition"] = l),
                ($[va + "Transform"] =
                    "translate3d(" +
                    (B ? "0," + t + "px," : t + "px,0,") +
                    "0)"),
                k &&
                    D &&
                    ((i = g ? (N - t) / (T * I * 2) : (t - x) / (y - x)),
                    (k.style[va + "Transition"] = l),
                    (k.style[va + "Transform"] =
                        "translate3d(0," +
                        Math.max(0, Math.min((c - D) * i, c - D)) +
                        "px,0)")),
                (!o && !w) || !e || e <= 1
                    ? s()
                    : e &&
                      ((w = !a),
                      clearInterval(H),
                      (H = setInterval(function () {
                          var e = +da(R, B) || 0;
                          (b.posX = B ? 0 : e),
                              (b.posY = B ? e : 0),
                              J("onMove", b),
                              Math.abs(e - t) < 2 && s();
                      }, 100)),
                      clearTimeout(j),
                      (j = setTimeout(function () {
                          s();
                      }, e))),
                X.sync && X.sync(t, e, u);
        }
        Na.call(this, s, e, !0),
            (U.scrolled = !1),
            (U.scroll = function (e, t, a, n) {
                (e = he(
                    (e = xa(e)
                        ? Math.round(e / I) * I
                        : Math.ceil(
                              (Sa(e, s).length
                                  ? Math.round(
                                        R.offset()[m] - Sa(e, s).offset()[m]
                                    )
                                  : q) / I
                          ) * I),
                    y,
                    x
                )),
                    (K = Math.round(e / I)),
                    (P = q),
                    (N = T * I + e),
                    me(e, t, a, n);
            }),
            (U.refresh = function (e) {
                var t;
                for (
                    c =
                        (void 0 === X.contSize
                            ? B
                                ? Z.height()
                                : Z.width()
                            : X.contSize) || 0,
                        x = (void 0 === X.maxScroll ? 0 : X.maxScroll) || 0,
                        y =
                            Math.min(
                                x,
                                void 0 === X.minScroll
                                    ? Math.min(
                                          0,
                                          B ? c - R.height() : c - R.width()
                                      )
                                    : X.minScroll
                            ) || 0,
                        O = null,
                        !B && X.rtl && ((t = x), (x = -y), (y = -t)),
                        ue(X.snap) &&
                            ((O = []),
                            R.find(X.snap).each(function () {
                                var e = B ? this.offsetTop : this.offsetLeft,
                                    t = B
                                        ? this.offsetHeight
                                        : this.offsetWidth;
                                O.push({
                                    breakpoint: e + t / 2,
                                    snap1: -e,
                                    snap2: c - e - t,
                                });
                            })),
                        I = xa(X.snap) ? X.snap : 1,
                        T = X.snap ? X.maxSnapScroll : 0,
                        u = X.easing,
                        h = X.elastic
                            ? xa(X.snap)
                                ? I
                                : xa(X.elastic)
                                ? X.elastic
                                : 0
                            : 0,
                        F = I;
                    44 < F;

                )
                    F /= 2;
                (F = Math.round(44 / F) * F),
                    k &&
                        ((g = y == -1 / 0 || x == 1 / 0),
                        (D = y < x ? Math.max(20, (c * c) / (x - y + c)) : 0),
                        (k.style.height = D + "px"),
                        (V.style.height = D ? "" : 0)),
                    void 0 === q &&
                        ((q = X.initialPos), (K = Math.round(q / I))),
                    e ||
                        U.scroll(
                            X.snap ? (O && O[K] ? O[K]["snap" + G] : K * I) : q
                        );
            }),
            (U._processSettings = function () {
                (B = "Y" == X.axis),
                    (m = B ? "top" : "left"),
                    (R = X.moveElement || Z.children().eq(0)),
                    ($ = R[0].style),
                    (W = B ? X.thresholdY : X.thresholdX),
                    X.scrollbar &&
                        ((i = X.scrollbar),
                        (a = i.find(".mbsc-sc-bar")),
                        (k = a[0]),
                        (V = i[0]));
            }),
            (U._init = function () {
                U.refresh(),
                    ma(s, "mousedown", Q),
                    ma(s, "touchstart", Q, { passive: !0 }),
                    ma(s, "touchend", ae),
                    ma(s, "touchcancel", ae),
                    ma(s, "click", ne, !0),
                    ma(document, "touchmove", ee, { passive: !1 }),
                    X.mousewheel &&
                        (ma(document, "wheel", se, {
                            passive: !1,
                            capture: !0,
                        }),
                        ma(document, "mousewheel", se, {
                            passive: !1,
                            capture: !0,
                        })),
                    k && i.on("mousedown", ie).on("click", le);
            }),
            (U._destroy = function () {
                clearInterval(H),
                    ua(s, "mousedown", Q),
                    ua(s, "touchstart", Q, { passive: !0 }),
                    ua(s, "touchend", ae),
                    ua(s, "touchcancel", ae),
                    ua(s, "click", ne, !0),
                    ua(document, "touchmove", ee, { passive: !1 }),
                    ua(document, "wheel", se, { passive: !1, capture: !0 }),
                    ua(document, "mousewheel", se, {
                        passive: !1,
                        capture: !0,
                    }),
                    k && i.off("mousedown", ie).off("click", le);
            }),
            (X = U.settings),
            (J = U.trigger),
            t || U.init();
    }
    var Le = "ios" == e;
    pt.prototype = {
        _defaults: {
            speedUnit: 0.0022,
            timeUnit: 3,
            initialPos: 0,
            axis: "Y",
            thresholdX: 10,
            thresholdY: 5,
            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
            stopProp: !0,
            momentum: !0,
            mousewheel: !0,
            elastic: !0,
        },
    };
    var Ye = {},
        ze = o ? window.CSS : null,
        $e = ze && ze.supports && ze.supports("(transform-style: preserve-3d)");
    function Re(e) {
        return (e + "").replace('"', "___");
    }
    function je(h, t, e) {
        var a,
            c,
            g,
            f,
            x,
            d,
            s,
            T,
            y,
            m,
            u,
            p,
            _,
            b,
            w,
            v,
            o,
            C = 40,
            M = 1e3,
            S = this,
            r = Sa(h);
        function n(e) {
            var t,
                a,
                n = +Sa(this).attr("data-index");
            38 == e.keyCode
                ? ((t = !0), (a = -1))
                : 40 == e.keyCode
                ? ((t = !0), (a = 1))
                : 32 == e.keyCode && ((t = !0), l(n, Sa(e.target))),
                t &&
                    (e.stopPropagation(),
                    e.preventDefault(),
                    a && s.start(n, a, e));
        }
        function i() {
            s.stop();
        }
        function l(e, t) {
            var a = v[e],
                n = +t.attr("data-index"),
                s = E(a, n),
                i = S._tempSelected[e],
                o = xa(a.multiple) ? a.multiple : 1 / 0;
            !1 ===
                b("onItemTap", {
                    target: t[0],
                    index: e,
                    value: s,
                    selected: t.hasClass("mbsc-sc-itm-sel"),
                }) ||
                S._prevItemTap ||
                (a.multiple &&
                    !a._disabled[s] &&
                    (void 0 !== i[s]
                        ? (t.removeClass(x).removeAttr("aria-selected"),
                          delete i[s])
                        : (1 == o &&
                              ((S._tempSelected[e] = i = {}),
                              a._$markup
                                  .find(".mbsc-sc-itm-sel")
                                  .removeClass(x)
                                  .removeAttr("aria-selected")),
                          se(i).length < o &&
                              (t.addClass(x).attr("aria-selected", "true"),
                              (i[s] = s)))),
                Y(a, e, n, M, a._index < n ? 1 : 2, !0, a.multiple),
                S.live &&
                    (!a.multiple || (1 === a.multiple && _.tapSelect)) &&
                    (!0 === _.setOnTap || _.setOnTap[e]) &&
                    setTimeout(
                        function () {
                            S.select();
                        },
                        _.tapSelect ? 0 : 200
                    )),
                (S._prevItemTap = !1);
        }
        function k(e) {
            return (
                -(
                    e.max -
                    e._offset -
                    (e.multiple && !f ? Math.floor(_.rows / 2) : 0)
                ) * y
            );
        }
        function D(e) {
            return (
                -(
                    e.min -
                    e._offset +
                    (e.multiple && !f ? Math.floor(_.rows / 2) : 0)
                ) * y
            );
        }
        function N(e, t) {
            return (e._array ? e._map[t] : +e.getIndex(t, S)) || 0;
        }
        function V(e, t) {
            var a = e.data;
            if (t >= e.min && t <= e.max)
                return e._array
                    ? e.circular
                        ? Sa(a).get(t % e._length)
                        : a[t]
                    : Sa.isFunction(a)
                    ? a(t, S)
                    : "";
        }
        function A(e) {
            return Sa.isPlainObject(e)
                ? void 0 !== e.value
                    ? e.value
                    : e.display
                : e;
        }
        function E(e, t) {
            return A(V(e, t));
        }
        function F(e, t, a) {
            var n = v[e];
            Y(
                n,
                e,
                n._index + t,
                _.delay + 100,
                1 == t ? 1 : 2,
                !1,
                !1,
                "keydown" == a.type
            );
        }
        function H(e) {
            return Sa.isArray(_.readonly) ? _.readonly[e] : _.readonly;
        }
        function I(e, t, a) {
            var n = Da(v[t] || {}, e),
                s = n._index - n._batch;
            return (
                (n.data = n.data || []),
                (n.key = void 0 !== n.key ? n.key : t),
                (n.label = void 0 !== n.label ? n.label : t),
                (n._map = {}),
                (n._array = Sa.isArray(n.data)),
                n._array &&
                    ((n._length = n.data.length),
                    Sa.each(n.data, function (e, t) {
                        n._map[A(t)] = e;
                    })),
                (n.circular =
                    void 0 === _.circular
                        ? void 0 === n.circular
                            ? n._array && n._length > _.rows
                            : n.circular
                        : Sa.isArray(_.circular)
                        ? _.circular[t]
                        : _.circular),
                (n.min = n._array
                    ? n.circular
                        ? -1 / 0
                        : 0
                    : void 0 === n.min
                    ? -1 / 0
                    : n.min),
                (n.max = n._array
                    ? n.circular
                        ? 1 / 0
                        : n._length - 1
                    : void 0 === n.max
                    ? 1 / 0
                    : n.max),
                (n._nr = t),
                (n._index = N(n, T[t])),
                (n._disabled = {}),
                (n._batch = 0),
                (n._current = n._index),
                (n._first = n._index - C),
                (n._last = n._index + C),
                (n._offset = n._first),
                a
                    ? ((n._offset -= n._margin / y + (n._index - s)),
                      (n._margin += (n._index - s) * y))
                    : (n._margin = 0),
                (n._refresh = function (e) {
                    Da(n._scroller.settings, {
                        minScroll: k(n),
                        maxScroll: D(n),
                    }),
                        n._scroller.refresh(e);
                }),
                (o[n.key] = n)
            );
        }
        function O(e, t, a, n, s) {
            var i,
                o,
                r,
                l,
                c,
                d,
                m,
                u,
                h,
                f,
                p = "",
                b = S._tempSelected[t],
                v = e._disabled || {};
            for (i = a; i <= n; i++)
                (r = V(e, i)),
                    (h = r),
                    (c =
                        void 0 === (f = Sa.isPlainObject(h) ? h.display : h)
                            ? ""
                            : f + S._getText(oa, 0.2)),
                    (l = A(r)),
                    (o = r && void 0 !== r.cssClass ? r.cssClass : ""),
                    (d = r && void 0 !== r.label ? r.label : ""),
                    (m = r && r.invalid),
                    (u = void 0 !== l && l == T[t] && !e.multiple),
                    (p +=
                        '<div role="option" tabindex="-1" aria-selected="' +
                        !!b[l] +
                        '" class="mbsc-sc-itm ' +
                        (s ? "mbsc-sc-itm-3d " : "") +
                        o +
                        " " +
                        (u ? "mbsc-sc-itm-sel " : "") +
                        (b[l] ? x : "") +
                        (void 0 === l ? " mbsc-sc-itm-ph" : " mbsc-btn-e") +
                        (m ? " mbsc-sc-itm-inv-h mbsc-disabled" : "") +
                        (v[l] ? " mbsc-sc-itm-inv mbsc-disabled" : "") +
                        '" data-index="' +
                        i +
                        '" data-val="' +
                        Re(l) +
                        '"' +
                        (d ? ' aria-label="' + d + '"' : "") +
                        (u ? ' aria-selected="true"' : "") +
                        ' style="height:' +
                        y +
                        "px;line-height:" +
                        y +
                        "px;" +
                        (s
                            ? ba +
                              "transform:rotateX(" +
                              (((e._offset - i) * g) % 360) +
                              "deg) translateZ(" +
                              (y * _.rows) / 2 +
                              "px);"
                            : "") +
                        '">' +
                        (1 < w
                            ? '<div class="mbsc-sc-itm-ml" style="line-height:' +
                              Math.round(y / w) +
                              "px;font-size:" +
                              Math.round((y / w) * 0.8) +
                              'px;">'
                            : "") +
                        c +
                        (1 < w ? "</div>" : "") +
                        "</div>");
            return p;
        }
        function P(e, t, a, n) {
            var s,
                i = v[e],
                o = n || i._disabled,
                r = N(i, t),
                l = E(i, r),
                c = l,
                d = l,
                m = 0,
                u = 0;
            if (!0 === o[l]) {
                for (s = 0; r - m >= i.min && o[c] && s < 100; )
                    s++, (c = E(i, r - ++m));
                for (s = 0; r + u < i.max && o[d] && s < 100; )
                    s++, (d = E(i, r + ++u));
                l =
                    ((u < m && u && 2 !== a) || !m || r - m < 0 || 1 == a) &&
                    !o[d]
                        ? d
                        : c;
            }
            return l;
        }
        function L(n, s, i, e, o, t, r) {
            var l,
                c,
                d,
                m,
                u = S._isVisible;
            (p = !0),
                (m =
                    _.validate.call(
                        h,
                        { values: T.slice(0), index: s, direction: i },
                        S
                    ) || {}),
                (p = !1),
                m.valid && (S._tempWheelArray = T = m.valid.slice(0)),
                t ||
                    Sa.each(v, function (e, a) {
                        if (
                            (u &&
                                a._$markup
                                    .find(".mbsc-sc-itm-inv")
                                    .removeClass(
                                        "mbsc-sc-itm-inv mbsc-disabled"
                                    ),
                            (a._disabled = {}),
                            m.disabled &&
                                m.disabled[e] &&
                                Sa.each(m.disabled[e], function (e, t) {
                                    (a._disabled[t] = !0),
                                        u &&
                                            a._$markup
                                                .find(
                                                    '.mbsc-sc-itm[data-val="' +
                                                        Re(t) +
                                                        '"]'
                                                )
                                                .addClass(
                                                    "mbsc-sc-itm-inv mbsc-disabled"
                                                );
                                }),
                            (T[e] = a.multiple ? T[e] : P(e, T[e], i)),
                            u)
                        ) {
                            if (
                                ((a.multiple && void 0 !== s) ||
                                    a._$markup
                                        .find(".mbsc-sc-itm-sel")
                                        .removeClass(x)
                                        .removeAttr("aria-selected"),
                                (c = N(a, T[e])),
                                (l = c - a._index + a._batch),
                                Math.abs(l) > 2 * C + 1 &&
                                    ((d = l + (2 * C + 1) * (0 < l ? -1 : 1)),
                                    (a._offset += d),
                                    (a._margin -= d * y),
                                    a._refresh()),
                                (a._index = c + a._batch),
                                a.multiple)
                            ) {
                                if (void 0 === s)
                                    for (var t in S._tempSelected[e])
                                        a._$markup
                                            .find(
                                                '.mbsc-sc-itm[data-val="' +
                                                    Re(t) +
                                                    '"]'
                                            )
                                            .addClass(x)
                                            .attr("aria-selected", "true");
                            } else
                                a._$markup
                                    .find(
                                        '.mbsc-sc-itm[data-val="' +
                                            Re(T[e]) +
                                            '"]'
                                    )
                                    .addClass("mbsc-sc-itm-sel")
                                    .attr("aria-selected", "true");
                            a._$active && a._$active.attr("tabindex", -1),
                                (a._$active = a._$markup
                                    .find(
                                        '.mbsc-sc-itm[data-index="' +
                                            a._index +
                                            '"]'
                                    )
                                    .eq(f && a.multiple ? 1 : 0)
                                    .attr("tabindex", 0)),
                                r &&
                                    s === e &&
                                    a._$active.length &&
                                    (a._$active[0].focus(),
                                    a._$scroller.parent().scrollTop(0)),
                                a._scroller.scroll(
                                    -(c - a._offset + a._batch) * y,
                                    s === e || void 0 === s ? n : M,
                                    o
                                );
                        }
                    }),
                b("onValidated", { index: s, time: n }),
                (S._tempValue = _.formatValue.call(h, T, S)),
                u && S._updateHeader(),
                S.live &&
                    (function (e, t) {
                        var a = v[e];
                        return (
                            a &&
                            (!a.multiple ||
                                (1 !== a.multiple &&
                                    t &&
                                    (!0 === _.setOnTap || _.setOnTap[e])))
                        );
                    })(s, t) &&
                    ((S._hasValue = e || S._hasValue),
                    z(e, e, 0, !0),
                    e && b("onSet", { valueText: S._value })),
                e && b("onChange", { index: s, valueText: S._tempValue });
        }
        function Y(e, t, a, n, s, i, o, r) {
            var l = E(e, a);
            void 0 !== l &&
                ((T[t] = l),
                (e._batch = e._array
                    ? Math.floor(a / e._length) * e._length
                    : 0),
                (e._index = a),
                setTimeout(function () {
                    L(n, t, s, !0, i, o, r);
                }, 10));
        }
        function z(e, t, a, n, s) {
            if (
                (n
                    ? (S._tempValue = _.formatValue.call(
                          h,
                          S._tempWheelArray,
                          S
                      ))
                    : L(a),
                !s)
            ) {
                S._wheelArray = [];
                for (var i = 0; i < T.length; i++)
                    S._wheelArray[i] =
                        v[i] && v[i].multiple
                            ? Object.keys(S._tempSelected[i] || {})[0]
                            : T[i];
                (S._value = S._hasValue ? S._tempValue : null),
                    (S._selected = Da(!0, {}, S._tempSelected));
            }
            e &&
                (S._isInput && r.val(S._hasValue ? S._tempValue : ""),
                b("onFill", {
                    valueText: S._hasValue ? S._tempValue : "",
                    change: t,
                }),
                t && ((S._preventChange = !0), r.trigger("change")));
        }
        Ne.call(this, h, t, !0),
            (S.setVal = S._setVal = function (e, t, a, n, s) {
                (S._hasValue = null != e),
                    (S._tempWheelArray = T = Sa.isArray(e)
                        ? e.slice(0)
                        : _.parseValue.call(h, e, S) || []),
                    z(t, void 0 === a ? t : a, s, !1, n);
            }),
            (S.getVal = S._getVal = function (e) {
                var t =
                    S._hasValue || e ? S[e ? "_tempValue" : "_value"] : null;
                return xa(t) ? +t : t;
            }),
            (S.setArrayVal = S.setVal),
            (S.getArrayVal = function (e) {
                return e ? S._tempWheelArray : S._wheelArray;
            }),
            (S.changeWheel = function (e, t, a) {
                var n, s, i;
                Sa.each(e, function (e, t) {
                    (i = o[e]) &&
                        ((n = i._nr),
                        (s = I(t, n, !0)),
                        S._isVisible &&
                            (f &&
                                s._$3d.html(
                                    O(
                                        s,
                                        n,
                                        s._first + C - c + 1,
                                        s._last - C + c,
                                        !0
                                    )
                                ),
                            s._$scroller
                                .html(O(s, n, s._first, s._last))
                                .css("margin-top", s._margin + "px"),
                            s._refresh(p)));
                }),
                    !S._isVisible || S._isLiquid || p || S.position(),
                    p || L(t, void 0, void 0, a);
            }),
            (S.getValidValue = P),
            (S._generateContent = function () {
                var n,
                    s = 0,
                    i = "",
                    o = f
                        ? ba +
                          "transform: translateZ(" +
                          ((y * _.rows) / 2 + 3) +
                          "px);"
                        : "",
                    r =
                        '<div class="mbsc-sc-whl-l" style="' +
                        o +
                        "height:" +
                        y +
                        "px;margin-top:-" +
                        (y / 2 + (_.selectedLineBorder || 0)) +
                        'px;"></div>',
                    l = 0;
                return (
                    Sa.each(_.wheels, function (e, t) {
                        (i +=
                            '<div class="mbsc-w-p mbsc-sc-whl-gr-c' +
                            (f ? " mbsc-sc-whl-gr-3d-c" : "") +
                            (_.showLabel ? " mbsc-sc-lbl-v" : "") +
                            '">' +
                            r +
                            '<div class="mbsc-sc-whl-gr' +
                            (f ? " mbsc-sc-whl-gr-3d" : "") +
                            (d ? " mbsc-sc-cp" : "") +
                            (_.width || _.maxWidth
                                ? '"'
                                : '" style="max-width:' +
                                  _.maxPopupWidth +
                                  'px;"') +
                            ">"),
                            Sa.each(t, function (e, t) {
                                S._tempSelected[l] = Da({}, S._selected[l]);
                                var a = I(t, l);
                                (v[l] = a),
                                    (s += _.maxWidth
                                        ? _.maxWidth[l] || _.maxWidth
                                        : _.width
                                        ? _.width[l] || _.width
                                        : 0),
                                    (n = void 0 !== a.label ? a.label : e),
                                    (i +=
                                        '<div class="mbsc-sc-whl-w ' +
                                        (a.cssClass || "") +
                                        (a.multiple
                                            ? " mbsc-sc-whl-multi"
                                            : "") +
                                        '" style="' +
                                        (_.width
                                            ? "width:" +
                                              (_.width[l] || _.width) +
                                              "px;"
                                            : (_.minWidth
                                                  ? "min-width:" +
                                                    (_.minWidth[l] ||
                                                        _.minWidth) +
                                                    "px;"
                                                  : "") +
                                              (_.maxWidth
                                                  ? "max-width:" +
                                                    (_.maxWidth[l] ||
                                                        _.maxWidth) +
                                                    "px;"
                                                  : "")) +
                                        '">' +
                                        (u
                                            ? '<div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div>'
                                            : "") +
                                        '<div class="mbsc-sc-whl-o" style="' +
                                        o +
                                        '"></div>' +
                                        r +
                                        '<div aria-live="off" aria-label="' +
                                        n +
                                        '"' +
                                        (a.multiple
                                            ? ' aria-multiselectable="true"'
                                            : "") +
                                        ' role="listbox" data-index="' +
                                        l +
                                        '" class="mbsc-sc-whl" style="height:' +
                                        _.rows * y * (f ? 1.1 : 1) +
                                        'px;">' +
                                        (d
                                            ? '<div data-index="' +
                                              l +
                                              '" data-step="1" class="mbsc-sc-btn mbsc-sc-btn-plus ' +
                                              (_.btnPlusClass || "") +
                                              '"></div><div data-index="' +
                                              l +
                                              '" data-step="-1" class="mbsc-sc-btn mbsc-sc-btn-minus ' +
                                              (_.btnMinusClass || "") +
                                              '"></div>'
                                            : "") +
                                        '<div class="mbsc-sc-lbl">' +
                                        n +
                                        '</div><div class="mbsc-sc-whl-c" style="height:' +
                                        m +
                                        "px;margin-top:-" +
                                        (m / 2 + 1) +
                                        "px;" +
                                        o +
                                        '"><div class="mbsc-sc-whl-sc" style="top:' +
                                        (m - y) / 2 +
                                        'px;">'),
                                    (i +=
                                        O(a, l, a._first, a._last) +
                                        "</div></div>"),
                                    f &&
                                        ((i +=
                                            '<div class="mbsc-sc-whl-3d" style="height:' +
                                            y +
                                            "px;margin-top:-" +
                                            y / 2 +
                                            'px;">'),
                                        (i += O(
                                            a,
                                            l,
                                            a._first + C - c + 1,
                                            a._last - C + c,
                                            !0
                                        )),
                                        (i += "</div>")),
                                    (i += "</div></div>"),
                                    l++;
                            }),
                            (i += "</div></div>");
                    }),
                    s && (_.maxPopupWidth = s),
                    i
                );
            }),
            (S._attachEvents = function (e) {
                (s = ft(Sa(".mbsc-sc-btn", e), F, _.delay, H, !0)),
                    Sa(".mbsc-sc-whl", e).on("keydown", n).on("keyup", i);
            }),
            (S._detachEvents = function () {
                s.stop();
                for (var e = 0; e < v.length; e++) v[e]._scroller.destroy();
            }),
            (S._markupReady = function (e) {
                Sa(".mbsc-sc-whl-w", (a = e)).each(function (s) {
                    var i,
                        e = Sa(this),
                        o = v[s];
                    (o._$markup = e),
                        (o._$scroller = Sa(".mbsc-sc-whl-sc", this)),
                        (o._$3d = Sa(".mbsc-sc-whl-3d", this)),
                        (o._scroller = new pt(this, {
                            mousewheel: _.mousewheel,
                            moveElement: o._$scroller,
                            scrollbar: Sa(".mbsc-sc-bar-c", this),
                            initialPos: (o._first - o._index) * y,
                            contSize: _.rows * y,
                            snap: y,
                            minScroll: k(o),
                            maxScroll: D(o),
                            maxSnapScroll: C,
                            prevDef: !0,
                            stopProp: !0,
                            timeUnit: 3,
                            easing: "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
                            sync: function (e, t, a) {
                                var n = t
                                    ? ba +
                                      "transform " +
                                      Math.round(t) +
                                      "ms " +
                                      a
                                    : "";
                                f &&
                                    ((o._$3d[0].style[va + "Transition"] = n),
                                    (o._$3d[0].style[va + "Transform"] =
                                        "rotateX(" + (-e / y) * g + "deg)"));
                            },
                            onStart: function (e, t) {
                                t.settings.readonly = H(s);
                            },
                            onGestureStart: function () {
                                e.addClass("mbsc-sc-whl-a mbsc-sc-whl-anim"),
                                    b("onWheelGestureStart", { index: s });
                            },
                            onGestureEnd: function (e) {
                                var t = 90 == e.direction ? 1 : 2,
                                    a = e.duration,
                                    n = e.destinationY;
                                (i = Math.round(-n / y) + o._offset),
                                    Y(o, s, i, a, t);
                            },
                            onAnimationStart: function () {
                                e.addClass("mbsc-sc-whl-anim");
                            },
                            onAnimationEnd: function () {
                                e.removeClass("mbsc-sc-whl-a mbsc-sc-whl-anim"),
                                    b("onWheelAnimationEnd", { index: s }),
                                    o._$3d.find(".mbsc-sc-itm-del").remove();
                            },
                            onMove: function (e) {
                                !(function (e, t, a) {
                                    var n = Math.round(-a / y) + e._offset,
                                        s = n - e._current,
                                        i = e._first,
                                        o = e._last,
                                        r = i + C - c + 1,
                                        l = o - C + c;
                                    s &&
                                        ((e._first += s),
                                        (e._last += s),
                                        (e._current = n),
                                        0 < s
                                            ? (e._$scroller.append(
                                                  O(
                                                      e,
                                                      t,
                                                      Math.max(o + 1, i + s),
                                                      o + s
                                                  )
                                              ),
                                              Sa(".mbsc-sc-itm", e._$scroller)
                                                  .slice(
                                                      0,
                                                      Math.min(s, o - i + 1)
                                                  )
                                                  .remove(),
                                              f &&
                                                  (e._$3d.append(
                                                      O(
                                                          e,
                                                          t,
                                                          Math.max(
                                                              l + 1,
                                                              r + s
                                                          ),
                                                          l + s,
                                                          !0
                                                      )
                                                  ),
                                                  Sa(".mbsc-sc-itm", e._$3d)
                                                      .slice(
                                                          0,
                                                          Math.min(s, l - r + 1)
                                                      )
                                                      .attr(
                                                          "class",
                                                          "mbsc-sc-itm-del"
                                                      )))
                                            : s < 0 &&
                                              (e._$scroller.prepend(
                                                  O(
                                                      e,
                                                      t,
                                                      i + s,
                                                      Math.min(i - 1, o + s)
                                                  )
                                              ),
                                              Sa(".mbsc-sc-itm", e._$scroller)
                                                  .slice(Math.max(s, i - o - 1))
                                                  .remove(),
                                              f &&
                                                  (e._$3d.prepend(
                                                      O(
                                                          e,
                                                          t,
                                                          r + s,
                                                          Math.min(
                                                              r - 1,
                                                              l + s
                                                          ),
                                                          !0
                                                      )
                                                  ),
                                                  Sa(".mbsc-sc-itm", e._$3d)
                                                      .slice(
                                                          Math.max(s, r - l - 1)
                                                      )
                                                      .attr(
                                                          "class",
                                                          "mbsc-sc-itm-del"
                                                      ))),
                                        (e._margin += s * y),
                                        e._$scroller.css(
                                            "margin-top",
                                            e._margin + "px"
                                        ));
                                })(o, s, e.posY);
                            },
                            onBtnTap: function (e) {
                                l(s, Sa(e.target));
                            },
                        }));
                }),
                    L();
            }),
            (S._fillValue = function () {
                z((S._hasValue = !0), !0, 0, !0);
            }),
            (S._clearValue = function () {
                Sa(".mbsc-sc-whl-multi .mbsc-sc-itm-sel", a)
                    .removeClass(x)
                    .removeAttr("aria-selected");
            }),
            (S._readValue = function () {
                var e = r.val() || "",
                    a = 0;
                "" !== e && (S._hasValue = !0),
                    (S._tempWheelArray = T =
                        S._hasValue && S._wheelArray
                            ? S._wheelArray.slice(0)
                            : _.parseValue.call(h, e, S) || []),
                    (S._tempSelected = Da(!0, {}, S._selected)),
                    Sa.each(_.wheels, function (e, t) {
                        Sa.each(t, function (e, t) {
                            (v[a] = I(t, a)), a++;
                        });
                    }),
                    z(!1, !1, 0, !0),
                    b("onRead");
            }),
            (S.__processSettings = function (e) {
                (_ = S.settings),
                    (b = S.trigger),
                    (w = _.multiline),
                    (x = "mbsc-sc-itm-sel mbsc-ic mbsc-ic-" + _.checkIcon),
                    (u = !_.touchUi) &&
                        ((_.tapSelect = !0),
                        (_.circular = !1),
                        (_.rows = e.rows || t.rows || 7));
            }),
            (S.__init = function (e) {
                e && (S._wheelArray = null),
                    (v = []),
                    (o = {}),
                    (d = _.showScrollArrows),
                    (f =
                        _.scroll3d &&
                        $e &&
                        !d &&
                        !u &&
                        ("ios" == _.theme || "ios" == _.baseTheme)),
                    (y = _.height),
                    (m = f
                        ? 2 *
                          Math.round((y - 0.03 * ((y * _.rows) / 2 + 3)) / 2)
                        : y),
                    (c = Math.round(1.8 * _.rows)),
                    (g = 360 / (2 * c)),
                    d && (_.rows = Math.max(3, _.rows));
            }),
            (S._getItemValue = A),
            (S._tempSelected = {}),
            (S._selected = {}),
            e || S.init();
    }
    (je.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _responsive: !0,
        _class: "scroller",
        _presets: Ye,
        _defaults: Da({}, Ne.prototype._defaults, {
            minWidth: 80,
            height: 40,
            rows: 3,
            multiline: 1,
            delay: 200,
            readonly: !1,
            showLabel: !0,
            setOnTap: !1,
            wheels: [],
            preset: "",
            speedUnit: 0.0012,
            timeUnit: 0.08,
            checkIcon: "checkmark",
            compClass: "mbsc-sc",
            validate: function () {},
            formatValue: function (e) {
                return e.join(" ");
            },
            parseValue: function (e, a) {
                var n,
                    s,
                    i = [],
                    o = [],
                    r = 0;
                return (
                    null != e && (i = (e + "").split(" ")),
                    Sa.each(a.settings.wheels, function (e, t) {
                        Sa.each(t, function (e, t) {
                            (s = t.data),
                                (n = a._getItemValue(s[0])),
                                Sa.each(s, function (e, t) {
                                    if (i[r] == a._getItemValue(t))
                                        return (n = a._getItemValue(t)), !1;
                                }),
                                o.push(n),
                                r++;
                        });
                    }),
                    o
                );
            },
        }),
    }),
        (Z.Scroller = je);
    function bt(g) {
        function e(e) {
            var t,
                a,
                n,
                s,
                i = [];
            if (e) {
                for (t = 0; t < e.length; t++)
                    if ((a = e[t]).start && a.end && !me.test(a.start))
                        for (
                            n = new Date(ct(a.start, f, H)),
                                s = new Date(ct(a.end, f, H));
                            n <= s;

                        )
                            i.push(
                                it(n.getFullYear(), n.getMonth(), n.getDate())
                            ),
                                n.setDate(n.getDate() + 1);
                    else i.push(a);
                return i;
            }
            return e;
        }
        function A(e, t, a, n) {
            return Math.min(n, Math.floor(e / t) * t + a);
        }
        function t(e, t, a) {
            return Math.floor((a - t) / e) * e + t;
        }
        function a(e) {
            return (
                e.getFullYear() +
                "-" +
                oe(e.getMonth() + 1) +
                "-" +
                oe(e.getDate())
            );
        }
        function r(e, t, a, n) {
            var s;
            return void 0 === M[t] || ((s = +e[M[t]]), isNaN(s))
                ? a
                    ? Z[t](a)
                    : void 0 !== l[t]
                    ? l[t]
                    : Z[t](n)
                : s;
        }
        function x(e) {
            var t,
                a = new Date(new Date().setHours(0, 0, 0, 0));
            if (null === e) return e;
            void 0 !== M.dd &&
                ((t = e[M.dd].split("-")),
                (t = new Date(t[0], t[1] - 1, t[2]))),
                void 0 !== M.tt &&
                    ((t = t || a),
                    (t = new Date(t.getTime() + (e[M.tt] % 86400) * 1e3)));
            var n = r(e, "y", t, a),
                s = r(e, "m", t, a),
                i = Math.min(r(e, "d", t, a), H.getMaxDayOfMonth(n, s)),
                o = r(e, "h", t, a);
            return H.getDate(
                n,
                s,
                i,
                O && r(e, "a", t, a) ? o + 12 : o,
                r(e, "i", t, a),
                r(e, "s", t, a),
                r(e, "u", t, a)
            );
        }
        function T(e, t) {
            var a,
                n,
                s = ["y", "m", "d", "a", "h", "i", "s", "u", "dd", "tt"],
                i = [];
            if (null == e) return e;
            for (a = 0; a < s.length; a++)
                void 0 !== M[(n = s[a])] && (i[M[n]] = Z[n](e)),
                    t && (l[n] = Z[n](e));
            return i;
        }
        function y(e, t) {
            return (
                H.getYear(e) === H.getYear(t) && H.getMonth(e) === H.getMonth(t)
            );
        }
        function _(e, t) {
            return !(!t && e < N) && !(!t && V < e) && (!!n(e, D) || !n(e, k));
        }
        function n(e, t) {
            var a, n, s, i;
            if (t)
                for (n = 0; n < t.length; n++)
                    if (((s = (i = (a = t[n]).d || a) + ""), !a.start))
                        if (ut.test(s)) {
                            if ((s = +s.replace("w", "")) == e.getDay())
                                return !0;
                        } else if (mt.test(s)) {
                            if ((s = s.split("/"))[1]) {
                                if (
                                    s[0] - 1 == e.getMonth() &&
                                    s[1] == e.getDate()
                                )
                                    return !0;
                            } else if (s[0] == e.getDate()) return !0;
                        } else if (
                            ((a = ct(i, f, H)),
                            e.getFullYear() == a.getFullYear() &&
                                e.getMonth() == a.getMonth() &&
                                e.getDate() == a.getDate())
                        )
                            return !0;
            return !1;
        }
        function w(e, t, a, n, s, i, o) {
            var r, l, c, d, m;
            if (e)
                for (c = 0; c < e.length; c++)
                    if (((m = (l = (r = e[c]).d || r) + ""), !r.start))
                        if (ut.test(m))
                            for (
                                d = (m = +m.replace("w", "")) - n;
                                d < s;
                                d += 7
                            )
                                0 <= d && (i[d + 1] = o);
                        else
                            mt.test(m)
                                ? (m = m.split("/"))[1]
                                    ? m[0] - 1 == a && (i[m[1]] = o)
                                    : (i[m[0]] = o)
                                : ((r = ct(l, f, H)),
                                  H.getYear(r) == t &&
                                      H.getMonth(r) == a &&
                                      (i[H.getDay(r)] = o));
        }
        function C(e, t, a, n, s, i, o, r) {
            var l,
                c,
                d,
                m,
                u,
                h,
                f,
                p,
                b,
                v,
                g,
                x,
                T,
                y,
                _,
                w,
                C,
                M,
                S,
                k,
                D = {},
                N = H.getDate(n, s, i),
                V = ["a", "h", "i", "s"];
            if (e) {
                for (f = 0; f < e.length; f++)
                    (g = e[f]).start &&
                        ((g.apply = !1),
                        (M = (C = (d = g.d) + "").split("/")),
                        d &&
                            ((d.getTime &&
                                n == H.getYear(d) &&
                                s == H.getMonth(d) &&
                                i == H.getDay(d)) ||
                                (!ut.test(C) &&
                                    ((M[1] && i == M[1] && s == M[0] - 1) ||
                                        (!M[1] && i == M[0]))) ||
                                (ut.test(C) &&
                                    N.getDay() == +C.replace("w", ""))) &&
                            ((g.apply = !0), (D[N] = !0)));
                for (f = 0; f < e.length; f++)
                    if (
                        ((g = e[f]),
                        (w = l = 0),
                        (p = K[a]),
                        (b = G[a]),
                        (c = !(_ = y = !0)),
                        g.start && (g.apply || (!g.d && !D[N])))
                    ) {
                        for (
                            x = g.start.split(":"), T = g.end.split(":"), v = 0;
                            v < 3;
                            v++
                        )
                            void 0 === x[v] && (x[v] = 0),
                                void 0 === T[v] && (T[v] = 59),
                                (x[v] = +x[v]),
                                (T[v] = +T[v]);
                        if ("tt" == a)
                            (p = A(
                                Math.round(
                                    (new Date(N).setHours(x[0], x[1], x[2]) -
                                        new Date(N).setHours(0, 0, 0, 0)) /
                                        1e3
                                ),
                                E,
                                0,
                                86400
                            )),
                                (b = A(
                                    Math.round(
                                        (new Date(N).setHours(
                                            T[0],
                                            T[1],
                                            T[2]
                                        ) -
                                            new Date(N).setHours(0, 0, 0, 0)) /
                                            1e3
                                    ),
                                    E,
                                    0,
                                    86400
                                ));
                        else {
                            for (
                                x.unshift(11 < x[0] ? 1 : 0),
                                    T.unshift(11 < T[0] ? 1 : 0),
                                    O &&
                                        (12 <= x[1] && (x[1] = x[1] - 12),
                                        12 <= T[1] && (T[1] = T[1] - 12)),
                                    v = 0;
                                v < t;
                                v++
                            )
                                void 0 !== F[v] &&
                                    ((S = A(x[v], X[V[v]], K[V[v]], G[V[v]])),
                                    (k = A(T[v], X[V[v]], K[V[v]], G[V[v]])),
                                    (h = u = m = 0),
                                    O &&
                                        1 == v &&
                                        ((m = x[0] ? 12 : 0),
                                        (u = T[0] ? 12 : 0),
                                        (h = F[0] ? 12 : 0)),
                                    y || (S = 0),
                                    _ || (k = G[V[v]]),
                                    (y || _) &&
                                        S + m < F[v] + h &&
                                        F[v] + h < k + u &&
                                        (c = !0),
                                    F[v] != S && (y = !1),
                                    F[v] != k && (_ = !1));
                            if (!r)
                                for (v = t + 1; v < 4; v++)
                                    0 < x[v] && (l = X[a]),
                                        T[v] < G[V[v]] && (w = X[a]);
                            c ||
                                ((S = A(x[t], X[a], K[a], G[a]) + l),
                                (k = A(T[t], X[a], K[a], G[a]) - w),
                                y && (p = S),
                                _ && (b = k));
                        }
                        if (y || _ || c)
                            for (v = p; v <= b; v += X[a]) o[v] = !r;
                    }
            }
        }
        var E,
            s,
            i,
            o,
            M = {},
            l = {},
            F = [],
            c = (function (e) {
                var t,
                    a,
                    n,
                    s = {};
                if (e.is("input")) {
                    switch (e.attr("type")) {
                        case "date":
                            t = "yy-mm-dd";
                            break;
                        case "datetime":
                            t = "yy-mm-ddTHH:ii:ssZ";
                            break;
                        case "datetime-local":
                            t = "yy-mm-ddTHH:ii:ss";
                            break;
                        case "month":
                            (t = "yy-mm"), (s.dateOrder = "mmyy");
                            break;
                        case "time":
                            t = "HH:ii:ss";
                    }
                    (s.format = t),
                        (a = e.attr("min")),
                        (n = e.attr("max")),
                        a && "undefined" != a && (s.min = ce(t, a)),
                        n && "undefined" != n && (s.max = ce(t, n));
                }
                return s;
            })(Sa(this)),
            d = Da({}, g.settings),
            m = Q[d.calendarSystem],
            H = Da(g.settings, fe, m, We, c, d),
            u = H.preset,
            h =
                "datetime" == u
                    ? H.dateFormat + H.separator + H.timeFormat
                    : "time" == u
                    ? H.timeFormat
                    : H.dateFormat,
            f = c.format || h,
            p = (H.dateWheels || H.dateFormat, H.timeWheels || H.timeFormat),
            S = H.dateWheels || H.dateDisplay,
            b = p,
            v = H.baseTheme || H.theme,
            k = e(H.invalid),
            D = e(H.valid),
            N = ct(H.min, f, H),
            V = ct(H.max, f, H),
            I = /time/i.test(u),
            O = /h/.test(b),
            P = /D/.test(S),
            L = H.steps || {},
            Y = L.hour || H.stepHour || 1,
            z = L.minute || H.stepMinute || 1,
            $ = L.second || H.stepSecond || 1,
            R = L.zeroBased,
            j = R || !N ? 0 : N.getHours() % Y,
            W = R || !N ? 0 : N.getMinutes() % z,
            J = R || !N ? 0 : N.getSeconds() % $,
            B = t(Y, j, O ? 11 : 23),
            q = t(z, W, 59),
            U = t(z, W, 59),
            K = {
                y: N ? N.getFullYear() : -1 / 0,
                m: 0,
                d: 1,
                h: j,
                i: W,
                s: J,
                a: 0,
                tt: 0,
            },
            G = {
                y: V ? V.getFullYear() : 1 / 0,
                m: 11,
                d: 31,
                h: B,
                i: q,
                s: U,
                a: 1,
                tt: 86400,
            },
            X = { y: 1, m: 1, d: 1, h: Y, i: z, s: $, a: 1, tt: 1 },
            Z = {
                y: function (e) {
                    return H.getYear(e);
                },
                m: function (e) {
                    return H.getMonth(e);
                },
                d: function (e) {
                    return H.getDay(e);
                },
                h: function (e) {
                    var t = e.getHours();
                    return A((t = O && 12 <= t ? t - 12 : t), Y, j, B);
                },
                i: function (e) {
                    return A(e.getMinutes(), z, W, q);
                },
                s: function (e) {
                    return A(e.getSeconds(), $, J, U);
                },
                u: function (e) {
                    return e.getMilliseconds();
                },
                a: function (e) {
                    return 11 < e.getHours() ? 1 : 0;
                },
                dd: a,
                tt: function (e) {
                    return A(
                        Math.round(
                            (e.getTime() - new Date(e).setHours(0, 0, 0, 0)) /
                                1e3
                        ),
                        E || 1,
                        0,
                        86400
                    );
                },
            };
        return (
            (g.getVal = function (e) {
                return g._hasValue || e ? de(x(g.getArrayVal(e)), H, f) : null;
            }),
            (g.getDate = function (e) {
                return g._hasValue || e ? x(g.getArrayVal(e)) : null;
            }),
            (g.setDate = function (e, t, a, n, s) {
                g.setArrayVal(T(e, !0), t, s, n, a);
            }),
            (M = g.remote.datetime.wheelOrder),
            (s = g.remote.datetime.oneDateWheel),
            (E = g.remote.datetime.timeStep),
            (i = g.remote.datetime.wheels),
            (H.isoParts = o = g.remote.datetime.isoParts),
            (H.dateDisplay = S),
            (g.remote.datetime.isValid = _),
            (g.remote.datetime.getFullDate = a),
            (g.remote.datetime.getDateIndex = function (e, t) {
                return t
                    ? Math.floor(new Date(e) / 864e5)
                    : e.getMonth() + 12 * (e.getFullYear() - 1970);
            }),
            (g.remote.datetime.datetime = { formatDate: le }),
            (g._format = h),
            (g._order = M),
            (g.handlers.now = function () {
                g.setDate(new Date(), g.live, 1e3, !0, !0);
            }),
            (g.buttons.now = {
                text: H.nowText,
                icon: H.nowIcon,
                handler: "now",
            }),
            {
                minWidth:
                    s && I
                        ? {
                              bootstrap: 46,
                              ios: 50,
                              material: 46,
                              mobiscroll: 46,
                              windows: 50,
                          }[v]
                        : void 0,
                compClass: "mbsc-dt mbsc-sc",
                wheels: i,
                headerText:
                    !!H.headerText &&
                    function () {
                        return le(h, x(g.getArrayVal(!0)), H);
                    },
                formatValue: function (e) {
                    return le(f, x(e), H);
                },
                parseValue: function (e) {
                    return (
                        e || ((l = {}), (g._hasValue = !1)),
                        T(ct(e || H.defaultValue || new Date(), f, H, o), !!e)
                    );
                },
                validate: function (e) {
                    var t,
                        r,
                        a,
                        n,
                        s = e.values,
                        i = e.index,
                        o = e.direction,
                        l = H.wheels[0][M.d],
                        c = (function (e, t) {
                            var a,
                                n,
                                s = !1,
                                i = !1,
                                o = 0,
                                r = 0,
                                l = N ? x(T(N)) : -1 / 0,
                                c = V ? x(T(V)) : 1 / 0;
                            if (_(e)) return e;
                            if (
                                (e < l && (e = l),
                                c < e && (e = c),
                                (n = a = e),
                                2 !== t)
                            )
                                for (s = _(a, !0); !s && a < c && o < 100; )
                                    (s = _(
                                        (a = new Date(a.getTime() + 864e5)),
                                        !0
                                    )),
                                        o++;
                            if (1 !== t)
                                for (i = _(n, !0); !i && l < n && r < 100; )
                                    (i = _(
                                        (n = new Date(n.getTime() - 864e5)),
                                        !0
                                    )),
                                        r++;
                            return 1 === t && s
                                ? a
                                : 2 === t && i
                                ? n
                                : y(e, a)
                                ? a
                                : y(e, n)
                                ? n
                                : r <= o && i
                                ? n
                                : a;
                        })(x(s), o),
                        d = T(c),
                        m = [],
                        u = {},
                        h = Z.y(c),
                        f = Z.m(c),
                        p = H.getMaxDayOfMonth(h, f),
                        b = !0,
                        v = !0;
                    if (
                        (Sa.each(
                            ["dd", "y", "m", "d", "tt", "a", "h", "i", "s"],
                            function (e, a) {
                                var t = K[a],
                                    n = G[a],
                                    s = Z[a](c);
                                if (
                                    ((m[M[a]] = []),
                                    b && N && (t = Z[a](N)),
                                    v && V && (n = Z[a](V)),
                                    s < t && (s = t),
                                    n < s && (s = n),
                                    "dd" !== a &&
                                        "tt" !== a &&
                                        ((b = b && s == t), (v = v && s == n)),
                                    void 0 !== M[a])
                                ) {
                                    if ("y" != a && "dd" != a)
                                        for (r = K[a]; r <= G[a]; r += X[a])
                                            (r < t || n < r) && m[M[a]].push(r);
                                    if ("d" == a) {
                                        var i = H.getDate(h, f, 1).getDay(),
                                            o = {};
                                        w(k, h, f, i, p, o, 1),
                                            w(D, h, f, i, p, o, 0),
                                            Sa.each(o, function (e, t) {
                                                t && m[M[a]].push(e);
                                            });
                                    }
                                }
                            }
                        ),
                        I &&
                            Sa.each(["a", "h", "i", "s", "tt"], function (
                                e,
                                a
                            ) {
                                var t = Z[a](c),
                                    n = Z.d(c),
                                    s = {};
                                void 0 !== M[a] &&
                                    (C(k, e, a, h, f, n, s, 0),
                                    C(D, e, a, h, f, n, s, 1),
                                    Sa.each(s, function (e, t) {
                                        t && m[M[a]].push(e);
                                    }),
                                    (F[e] = g.getValidValue(M[a], t, o, s)));
                            }),
                        l &&
                            (l.data.length !== p ||
                                (P &&
                                    (void 0 === i || i === M.y || i === M.m))))
                    ) {
                        for ((u[M.d] = l).data = [], t = 1; t <= p; t++)
                            (n = H.getDate(h, f, t).getDay()),
                                (a = S.replace(/[my|]/gi, "")
                                    .replace(
                                        /dd/,
                                        (t < 10 ? "0" + t : t) +
                                            (H.daySuffix || "")
                                    )
                                    .replace(/d/, t + (H.daySuffix || ""))),
                                l.data.push({
                                    value: t,
                                    display: /DD/.test(a)
                                        ? a.replace(
                                              /DD/,
                                              '<span class="mbsc-dt-day">' +
                                                  H.dayNames[n] +
                                                  "</span>"
                                          )
                                        : a.replace(
                                              /D/,
                                              '<span class="mbsc-dt-day">' +
                                                  H.dayNamesShort[n] +
                                                  "</span>"
                                          ),
                                });
                        (g._tempWheelArray[M.d] = d[M.d]), g.changeWheel(u);
                    }
                    return { disabled: m, valid: d };
                },
            }
        );
    }
    var We = {
            separator: " ",
            dateFormat: "mm/dd/yy",
            dateDisplay: "MMddyy",
            timeFormat: "h:ii A",
            dayText: "Day",
            monthText: "Month",
            yearText: "Year",
            hourText: "Hours",
            minuteText: "Minutes",
            ampmText: "&nbsp;",
            secText: "Seconds",
            nowText: "Now",
            todayText: "Today",
        },
        Je = 0;
    function Be(e, t, a) {
        "jsonp" == a
            ? (function (e, t) {
                  var a = document.createElement("script"),
                      n = "mbscjsonp" + ++Je;
                  (window[n] = function (e) {
                      a.parentNode.removeChild(a), delete window[n], e && t(e);
                  }),
                      (a.src =
                          e +
                          (0 <= e.indexOf("?") ? "&" : "?") +
                          "callback=" +
                          n),
                      document.body.appendChild(a);
              })(e, t)
            : (function (e, t) {
                  var a = new XMLHttpRequest();
                  a.open("GET", e, !0),
                      (a.onload = function () {
                          200 <= this.status &&
                              this.status < 400 &&
                              t(JSON.parse(this.response));
                      }),
                      (a.onerror = function () {}),
                      a.send();
              })(e, t);
    }
    s.getJson = Be;
    function qe(D) {
        var p,
            b,
            v,
            a,
            n,
            g,
            c,
            s,
            o,
            e,
            N,
            x,
            T,
            i,
            y,
            _,
            r,
            V,
            l,
            w,
            C,
            A,
            M,
            S,
            E,
            k,
            F,
            d,
            H,
            I,
            O,
            P,
            m,
            u,
            L,
            h,
            Y,
            z,
            $,
            R,
            f,
            j,
            W,
            J,
            B,
            q,
            U,
            K,
            G,
            X,
            Z,
            Q,
            ee,
            te,
            ae,
            ne,
            se,
            ie,
            oe,
            re,
            le,
            ce,
            de,
            me,
            ue,
            he,
            fe,
            pe,
            be,
            ve,
            ge,
            xe,
            Te,
            ye,
            t,
            _e,
            we,
            Ce = 1,
            Me = this;
        function Se(e) {
            e.hasClass("mbsc-cal-h") || e.addClass("mbsc-cal-h");
        }
        function ke(e) {
            e.hasClass("mbsc-cal-h")
                ? (function (e) {
                      e.hasClass("mbsc-cal-h") && e.removeClass("mbsc-cal-h");
                  })(e)
                : Se(e);
        }
        function De(e, t, a) {
            (e[t] = e[t] || []), e[t].push(a);
        }
        function Ne(e, r, l) {
            var c,
                d,
                m,
                u,
                h,
                f,
                p,
                b = ce.getDate,
                v = ce.getYear,
                g = ce.getMonth,
                x = ce.getDay,
                T = ce.getMaxDayOfMonth,
                y = v(r),
                _ = g(r),
                w = {};
            return (
                e &&
                    Sa.each(e, function (e, t) {
                        if (
                            ((c = t.d || t.start || t),
                            (d = c + ""),
                            t.start && t.end)
                        )
                            for (
                                p = rt(ct(t.start, S, ce)),
                                    f = rt(ct(t.end, S, ce));
                                p <= f;

                            )
                                De(w, p, t), (p = b(v(p), g(p), x(p) + 1));
                        else if (ut.test(d))
                            for (p = Ge(r, !1, +d.replace("w", "")); p <= l; )
                                De(w, p, t), (p = b(v(p), g(p), x(p) + 7));
                        else if (mt.test(d)) {
                            var a = !!(d = d.split("/"))[1],
                                n = a ? 1 : 0,
                                s = a ? 0 : 1,
                                i = a ? d[0] - 1 : _,
                                o = a ? +d[1] : +d[0];
                            for (
                                h = T(y, i), p = b(y, i, Math.min(o, h));
                                p <= l;

                            )
                                (m = v(p)),
                                    (u = g(p)),
                                    x(p) === o && De(w, p, t),
                                    (h = T(m + n, u + s)),
                                    (p = b(m + n, u + s, Math.min(o, h)));
                        } else De(w, rt(ct(c, S, ce)), t);
                    }),
                w
            );
        }
        function Ve(e) {
            var t,
                a,
                n,
                s,
                i = !!f[e] && f[e],
                o = !!j[e] && j[e],
                r =
                    o && o[0].background
                        ? o[0].background
                        : i && i[0].background,
                l = "";
            if (o)
                for (t = 0; t < o.length; t++) l += (o[t].cssClass || "") + " ";
            if (i) {
                for (
                    n = '<div class="mbsc-cal-marks">', t = 0;
                    t < i.length;
                    t++
                )
                    (l += ((a = i[t]).cssClass || "") + " "),
                        (n +=
                            '<div class="mbsc-cal-mark"' +
                            (a.color
                                ? ' style="background:' + a.color + ';"'
                                : "") +
                            "></div>");
                n += "</div>";
            }
            return (
                (s = {
                    marked: i,
                    background: r,
                    cssClass: l,
                    markup: C[e] ? C[e].join("") : d ? n : "",
                }),
                Da(s, D._getDayProps(e, s))
            );
        }
        function Ae(e) {
            return (
                ' style="' +
                ($
                    ? "transform: translateY(" + 100 * e + "%)"
                    : "left:" + 100 * e * le + "%") +
                '"'
            );
        }
        function Ee(e) {
            return (
                Xe(e, ie - 1) > W && (e = Xe(W, 1 - ie)), e < K && (e = K), e
            );
        }
        function Fe(e, t, a) {
            var n = "none" === e.background,
                s = n ? "none" : e.color,
                i = n ? e.color : st(s),
                o = e.text;
            return (
                '<div data-id="' +
                e._id +
                '" data-index="' +
                t +
                '" class="mbsc-cal-txt' +
                (n ? " mbsc-cal-txt-only" : "") +
                '" title="' +
                Sa("<div>" + o + "</div>").text() +
                '"' +
                (s
                    ? ' style="background:' +
                      s +
                      (a && i ? ";color:" + i : "") +
                      ';"'
                    : "") +
                ">" +
                (a ? o : "") +
                "</div>"
            );
        }
        function He(e) {
            var t = Ge(Xe(e, -oe - se), !1),
                a = Ge(Xe(e, -oe + ie + se - 1), !1);
            (a = ce.getDate(
                ce.getYear(a),
                ce.getMonth(a),
                ce.getDay(a) + 7 * N
            )),
                D._onGenMonth(t, a),
                (P = Ne(ce.invalid, t, a)),
                (he = Ne(ce.valid, t, a)),
                (f = Ne(ce.labels || ce.events || ce.marked, t, a)),
                (j = Ne(ce.colors, t, a)),
                (R = D._labels || f || j),
                (F = ce.labels || D._labels) &&
                    (function () {
                        C = {};
                        for (
                            var g = {},
                                x = t,
                                e = function () {
                                    x.getDay() == E && (g = {});
                                    for (
                                        var e = B,
                                            t = R[x] || [],
                                            a = t.length,
                                            n = [],
                                            s = void 0,
                                            i = void 0,
                                            o = 0,
                                            r = 0,
                                            l = 0,
                                            c = void 0;
                                        o < e;

                                    )
                                        if (
                                            ((s = null),
                                            t.forEach(function (e, t) {
                                                g[o] == e && ((s = e), (i = t));
                                            }),
                                            o == e - 1 &&
                                                (r < a - 1 ||
                                                    (a && l == a && !s)))
                                        ) {
                                            var d = a - r,
                                                m = (
                                                    (1 < d &&
                                                        ce.moreEventsPluralText) ||
                                                    ce.moreEventsText
                                                ).replace(/{count}/, d);
                                            d &&
                                                n.push(
                                                    '<div class="mbsc-cal-txt-more">' +
                                                        m +
                                                        "</div>"
                                                ),
                                                s &&
                                                    ((g[o] = null),
                                                    s._days.forEach(function (
                                                        e
                                                    ) {
                                                        C[e][o] =
                                                            '<div class="mbsc-cal-txt-more">' +
                                                            ce.moreEventsText.replace(
                                                                /{count}/,
                                                                1
                                                            ) +
                                                            "</div>";
                                                    })),
                                                r++,
                                                o++;
                                        } else if (s)
                                            i == l && l++,
                                                dt(x, ct(s.end)) &&
                                                    (g[o] = null),
                                                n.push(Fe(s, i)),
                                                o++,
                                                r++,
                                                s._days.push(x);
                                        else if (l < a) {
                                            var u = t[l],
                                                h = u.start && ct(u.start),
                                                f = u.end && ct(u.end),
                                                p = x.getDay(),
                                                b = 0 < E - p ? 7 : 0,
                                                v = f && !dt(h, f);
                                            (h && !dt(x, h) && p != E) ||
                                                (void 0 === u._id &&
                                                    (u._id = Ce++),
                                                v && (g[o] = u),
                                                (u._days = [x]),
                                                (c = v
                                                    ? 100 *
                                                      Math.min(
                                                          ot(x, rt(f)) + 1,
                                                          7 + E - p - b
                                                      )
                                                    : 100),
                                                n.push(
                                                    v
                                                        ? '<div class="mbsc-cal-txt-w" style="width:' +
                                                              c +
                                                              '%">' +
                                                              Fe(u, l, !0) +
                                                              "</div>" +
                                                              Fe(u, l)
                                                        : Fe(u, l, !0)
                                                ),
                                                o++,
                                                r++),
                                                l++;
                                        } else
                                            n.push(
                                                '<div class="mbsc-cal-txt-ph"></div>'
                                            ),
                                                o++;
                                    (C[x] = n),
                                        (x = ce.getDate(
                                            ce.getYear(x),
                                            ce.getMonth(x),
                                            ce.getDay(x) + 1
                                        ));
                                };
                            x < a;

                        )
                            e();
                    })();
        }
        function Ie(e) {
            var t = ce.getYear(e),
                a = ce.getMonth(e);
            We((o = w = e)),
                ue("onMonthChange", { year: t, month: a }),
                ue("onMonthLoading", { year: t, month: a }),
                ue("onPageChange", { firstDay: e }),
                ue("onPageLoading", { firstDay: e }),
                He(e);
        }
        function Oe(e) {
            var t = ce.getYear(e),
                a = ce.getMonth(e);
            void 0 === ne ? Pe(e, t, a) : ze(e, ne, !0),
                $e(o, M.focus),
                (M.focus = !1);
        }
        function Pe(e, t, a) {
            var n = M.$scroller;
            Sa(".mbsc-cal-slide", n).removeClass("mbsc-cal-slide-a"),
                Sa(".mbsc-cal-slide", n)
                    .slice(se, se + ie)
                    .addClass("mbsc-cal-slide-a"),
                Sa(".mbsc-cal-slide-a .mbsc-cal-day", n)
                    .on("mouseenter", function () {
                        var e = Sa(this);
                        pe ||
                            Y ||
                            (O = setTimeout(function () {
                                (m = !0), ue("onCellHoverIn", Be(e));
                            }, 150));
                    })
                    .on("mouseleave", function () {
                        clearTimeout(O),
                            !pe &&
                                m &&
                                ((m = !1), ue("onCellHoverOut", Be(Sa(this))));
                    }),
                F &&
                    Sa(".mbsc-cal-slide-a .mbsc-cal-txt", n)
                        .on("mouseenter", function () {
                            var e = Sa(this).attr("data-id");
                            Sa(
                                '.mbsc-cal-txt[data-id="' + e + '"]',
                                n
                            ).addClass("mbsc-hover");
                        })
                        .on("mouseleave", function () {
                            Sa(".mbsc-cal-txt.mbsc-hover", n).removeClass(
                                "mbsc-hover"
                            );
                        }),
                ue("onMonthLoaded", { year: t, month: a }),
                ue("onPageLoaded", { firstDay: e });
        }
        function Le(e, t) {
            var a,
                n = ce.getYear(e),
                s =
                    '<div class="mbsc-cal-slide"' +
                    Ae(t) +
                    '><div role="grid" class="mbsc-cal-table"><div role="row" class="mbsc-cal-row">';
            for (a = 0; a < 12; a++)
                a &&
                    a % 3 == 0 &&
                    (s += '</div><div role="row" class="mbsc-cal-row">'),
                    (s +=
                        '<div role="gridcell" tabindex="-1" aria-label="' +
                        n +
                        '" data-val="' +
                        n +
                        '" class="mbsc-cal-cell mbsc-btn-e ' +
                        (n < Z || U < n ? " mbsc-disabled " : "") +
                        (n == ce.getYear(w) ? V : "") +
                        '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' +
                        n +
                        ye +
                        "</div></div>"),
                    n++;
            return (s += "</div></div></div>");
        }
        function Ye(e, t) {
            var a,
                n,
                s,
                i,
                o,
                r,
                l,
                c,
                d,
                m,
                u,
                h,
                f,
                p,
                b,
                v,
                g,
                x,
                T = 1,
                y = ce.getYear(e),
                _ = ce.getMonth(e),
                w = ce.getDay(e),
                C =
                    null !== ce.defaultValue || D._hasValue
                        ? D.getDate(!0)
                        : null,
                M = ce.getDate(y, _, w).getDay(),
                S = 0 < E - M ? 7 : 0,
                k =
                    '<div class="mbsc-cal-slide"' +
                    Ae(t) +
                    '><div role="grid" class="mbsc-cal-table"><div role="row" class="mbsc-cal-row">';
            for (g = 0; g < 7 * N; g++)
                (v = g + E - S),
                    (i = (n = ce.getDate(y, _, v - M + w)).getFullYear()),
                    (o = n.getMonth()),
                    (r = n.getDate()),
                    (l = ce.getMonth(n)),
                    (c = ce.getDay(n)),
                    (b = ce.getMaxDayOfMonth(i, o)),
                    (d = i + "-" + (o + 1) + "-" + r),
                    (a =
                        "none" !==
                            (m = Da(
                                {
                                    valid:
                                        ((x = n),
                                        !(
                                            x < K ||
                                            W < x ||
                                            (void 0 !== P[x] &&
                                                void 0 === he[x])
                                        )),
                                    selected: C && dt(C, n),
                                },
                                Ve(n)
                            )).background && m.background),
                    (u = m.valid),
                    (h = m.selected),
                    (s = m.cssClass),
                    (f =
                        new Date(n).setHours(12, 0, 0, 0) ===
                        new Date().setHours(12, 0, 0, 0)),
                    (p = l !== _),
                    (A[d] = m),
                    g &&
                        g % 7 == 0 &&
                        (k += '</div><div role="row" class="mbsc-cal-row">'),
                    be &&
                        g % 7 == 0 &&
                        ("month" == be && p && 1 < T
                            ? (T = 1 == r ? 1 : 2)
                            : "year" == be &&
                              (T = ce.getWeekNumber(
                                  ce.getDate(i, o, r + ((7 - E + 1) % 7))
                              )),
                        (k +=
                            '<div role="gridcell" class="mbsc-cal-cell mbsc-cal-week-nr">' +
                            T +
                            "</div>"),
                        T++),
                    (k +=
                        '<div role="gridcell" aria-label="' +
                        (f ? ce.todayText + ", " : "") +
                        ce.dayNames[n.getDay()] +
                        ", " +
                        ce.monthNames[l] +
                        " " +
                        c +
                        " " +
                        (m.ariaLabel ? ", " + m.ariaLabel : "") +
                        '"' +
                        (p && !me
                            ? ' aria-hidden="true"'
                            : ' data-full="' + d + '"') +
                        (p || !u ? ' aria-disabled="true"' : "") +
                        (h ? ' aria-selected="true"' : "") +
                        (u ? ' tabindex="-1"' : "") +
                        ' class="mbsc-cal-cell mbsc-cal-day mbsc-cal-day' +
                        (v % 7) +
                        " " +
                        (ce.dayClass || "") +
                        " " +
                        (h ? V : "") +
                        (f ? " " + ce.todayClass : "") +
                        (s ? " " + s : "") +
                        (1 == c ? " mbsc-cal-day-first" : "") +
                        (c == b ? " mbsc-cal-day-last" : "") +
                        (p ? " mbsc-cal-day-diff" : "") +
                        (u ? " mbsc-btn-e" : " mbsc-disabled") +
                        (m.marked ? " mbsc-cal-day-marked" : "") +
                        (a ? " mbsc-cal-day-colored" : "") +
                        '"><div class="mbsc-cal-cell-i mbsc-cal-day-i"><div class="mbsc-cal-day-date mbsc-cal-cell-txt"' +
                        (a
                            ? ' style="background:' +
                              a +
                              ";color:" +
                              st(a) +
                              '"'
                            : "") +
                        ">" +
                        c +
                        "</div>" +
                        D._getText(oa, 0.06) +
                        (m.markup
                            ? '<div class="mbsc-cal-day-markup">' +
                              m.markup +
                              "</div>"
                            : "") +
                        "</div></div>");
            return (k += "</div></div></div>");
        }
        function ze(e, t, a) {
            var n,
                s = ce.getYear(e),
                i = ce.getMonth(e),
                o = M ? M.pos : 0,
                r = "";
            if (((A = {}), N))
                for (
                    t ||
                        (ue("onMonthLoading", { year: s, month: i }),
                        ue("onPageLoading", { firstDay: e })),
                        He(e),
                        n = 0;
                    n < re;
                    n++
                )
                    r += Ye(Xe(e, n - oe - se), o * le + n - se);
            return (
                (ne = void 0),
                a &&
                    M &&
                    ((M.$active = null), M.$scroller.html(r), Pe(e, s, i)),
                r
            );
        }
        function $e(e, t) {
            if (M) {
                var a = M.$active;
                a &&
                    a.length &&
                    (a[0].blur(),
                    a.hasClass("mbsc-disabled")
                        ? a.removeAttr("tabindex")
                        : a.attr("tabindex", "-1")),
                    (M.$active = Sa(
                        '.mbsc-cal-slide-a .mbsc-cal-day[data-full="' +
                            lt(e) +
                            '"]',
                        M.$scroller
                    ).attr("tabindex", "0")),
                    t && M.$active.length && M.$active[0].focus();
            }
        }
        function Re(e, t) {
            Sa(".mbsc-selected", t).removeClass(V).removeAttr("aria-selected"),
                Sa('.mbsc-cal-cell[data-val="' + e + '"]', t)
                    .addClass(V)
                    .attr("aria-selected", "true");
        }
        function je(e, t, a, n) {
            var s, i;
            fe &&
                (e < K && (e = K),
                W < e && (e = W),
                ("calendar" !== fe && H && !t) ||
                    ((D._isSetDate = !t),
                    k &&
                        N &&
                        ((i = Ge(Ee(e), h)),
                        ae &&
                            (e < Xe(w, -oe) || e >= Xe(w, ie - oe)) &&
                            (s = h
                                ? ce.getMonth(i) -
                                  ce.getMonth(w) +
                                  12 * (ce.getYear(i) - ce.getYear(w))
                                : Math.floor(ot(w, i) / (7 * N))) &&
                            ((M.queue = []), (M.focus = n && a), Qe(M, s, a)),
                        (s && a) || $e(e, n),
                        t ||
                            (function (e) {
                                var t = M && M.$scroller;
                                ce.highlight &&
                                    M &&
                                    (Sa(".mbsc-selected", t)
                                        .removeClass(V)
                                        .removeAttr("aria-selected"),
                                    (null === ce.defaultValue &&
                                        !D._hasValue) ||
                                        Sa(
                                            '.mbsc-cal-day[data-full="' +
                                                lt(e) +
                                                '"]',
                                            t
                                        )
                                            .addClass(V)
                                            .attr("aria-selected", "true"));
                            })(e),
                        h || s || We(w, !0),
                        (o = e),
                        (ae = !0)),
                    D._onSetDate(e, s),
                    (D._isSetDate = !1)));
        }
        function We(e, t) {
            var a,
                n,
                s,
                i,
                o = ce.getYear(e),
                r = ce.getMonth(e),
                l = o + ye;
            if (I) {
                if (
                    (Re(r, te.$scroller),
                    Re(o, Te.$scroller),
                    Qe(
                        Te,
                        Math.floor(o / 12) -
                            Math.floor(ce.getYear(Te.first) / 12),
                        !0
                    ),
                    Sa(".mbsc-cal-cell", te.$scroller).removeClass(
                        "mbsc-disabled"
                    ),
                    o === Z)
                )
                    for (a = 0; a < X; a++)
                        Sa(
                            '.mbsc-cal-cell[data-val="' + a + '"]',
                            te.$scroller
                        ).addClass("mbsc-disabled");
                if (o === U)
                    for (a = q + 1; a <= 12; a++)
                        Sa(
                            '.mbsc-cal-cell[data-val="' + a + '"]',
                            te.$scroller
                        ).addClass("mbsc-disabled");
            }
            for (
                t ||
                    (Je(Sa(".mbsc-cal-prev-m", b), Xe(e, -oe) <= K),
                    Je(Sa(".mbsc-cal-next-m", b), Xe(e, ie - oe) > W),
                    Je(
                        Sa(".mbsc-cal-prev-y", b),
                        ce.getDate(o - 1, r + 1, 1) <= K
                    ),
                    Je(Sa(".mbsc-cal-next-y", b), ce.getDate(o + 1, r, 1) > W)),
                    c.attr("aria-label", o).html(l),
                    a = 0;
                a < ie;
                a++
            )
                (i = Xe(e, a - oe)) <= de && de < Xe(i, 1) && (i = de),
                    (n = ce.getYear(i)),
                    (s = ce.getMonth(i)),
                    (l = n + ye),
                    v
                        .eq(a)
                        .attr(
                            "aria-label",
                            ce.monthNames[s] + (ge ? "" : " " + o)
                        )
                        .html(
                            (!ge && xe < Q ? l + " " : "") +
                                ee[s] +
                                (!ge && Q < xe ? " " + l : "")
                        );
        }
        function Je(e, t) {
            t
                ? e.addClass(r).attr("aria-disabled", "true")
                : e.removeClass(r).removeAttr("aria-disabled");
        }
        function Be(e) {
            var t = e[0],
                a = e.attr("data-full"),
                n = a ? a.split("-") : [],
                s = it(n[0], n[1] - 1, n[2]),
                i = e.hasClass("mbsc-selected");
            return Da(A[a], { date: s, target: t, selected: i });
        }
        function qe(e, t) {
            var a = D.getDate(!0),
                n = Be(e),
                s = e[0],
                i = n.date,
                o = it(
                    i.getFullYear(),
                    i.getMonth(),
                    i.getDate(),
                    a.getHours(),
                    a.getMinutes(),
                    a.getSeconds()
                ),
                r = Sa(t.target),
                l = r[0];
            if (me || !e.hasClass("mbsc-cal-day-diff")) {
                if (((n.date = o), F && s.contains(l)))
                    for (; l != s; ) {
                        if (
                            r.hasClass("mbsc-cal-txt") ||
                            r.hasClass("mbsc-cal-txt-more")
                        ) {
                            var c = r.attr("data-index"),
                                d = R[i];
                            if (
                                !1 ===
                                ue("onLabelTap", {
                                    date: o,
                                    domEvent: t,
                                    target: r[0],
                                    labels: d,
                                    label: d[c],
                                })
                            )
                                return;
                            break;
                        }
                        l = (r = r.parent())[0];
                    }
                !1 === ue("onDayChange", n) ||
                    ce.readonly ||
                    e.hasClass("mbsc-disabled") ||
                    D._selectDay(e, i, o, n.selected);
            }
        }
        function Ue(e) {
            Se(a),
                je(
                    ce.getDate(ce.getYear(M.first), e.attr("data-val"), 1),
                    !0,
                    !0
                );
        }
        function Ke(e) {
            Se(s),
                je(
                    ce.getDate(e.attr("data-val"), ce.getMonth(M.first), 1),
                    !0,
                    !0
                );
        }
        function Ge(e, t, a) {
            var n = ce.getYear(e),
                s = ce.getMonth(e),
                i = e.getDay(),
                o = 0 < E - i ? 7 : 0;
            return t
                ? ce.getDate(n, s, 1)
                : ce.getDate(
                      n,
                      s,
                      (void 0 === a ? E : a) - o - i + ce.getDay(e)
                  );
        }
        function Xe(e, t) {
            var a = ce.getYear(e),
                n = ce.getMonth(e),
                s = ce.getDay(e);
            return h
                ? ce.getDate(a, n + t, 1)
                : ce.getDate(a, n, s + t * N * 7);
        }
        function Ze(e, t) {
            var a = 12 * Math.floor(ce.getYear(e) / 12);
            return ce.getDate(a + 12 * t, 0, 1);
        }
        function Qe(e, t, a, n) {
            t &&
                D._isVisible &&
                (e.queue.push(arguments),
                1 == e.queue.length &&
                    (function n(s, i, e, o) {
                        var r,
                            l,
                            t = "",
                            c = s.$scroller,
                            d = s.buffer,
                            m = s.offset,
                            a = s.pages,
                            u = s.total,
                            h = s.first,
                            f = s.genPage,
                            p = s.getFirst,
                            b = 0 < i ? Math.min(i, d) : Math.max(i, -d),
                            v = s.pos * le + b - i + m,
                            g = Math.abs(i) > d;
                        s.callback && (s.load(), s.callback(!0));
                        s.first = p(h, i);
                        s.pos += b * le;
                        s.changing = !0;
                        s.load = function () {
                            if (g) {
                                for (r = 0; r < a; r++)
                                    t += f(p(h, (l = i + r - m)), v + l);
                                0 < i
                                    ? (Sa(".mbsc-cal-slide", c)
                                          .slice(-a)
                                          .remove(),
                                      c.append(t))
                                    : i < 0 &&
                                      (Sa(".mbsc-cal-slide", c)
                                          .slice(0, a)
                                          .remove(),
                                      c.prepend(t));
                            }
                        };
                        s.callback = function (e) {
                            var t = Math.abs(b),
                                a = "";
                            if (D._isVisible) {
                                for (r = 0; r < t; r++)
                                    a += f(
                                        p(
                                            h,
                                            (l =
                                                i +
                                                r -
                                                m -
                                                d +
                                                (0 < i ? u - t : 0))
                                        ),
                                        v + l
                                    );
                                if (
                                    (0 < i
                                        ? (c.append(a),
                                          Sa(".mbsc-cal-slide", c)
                                              .slice(0, b)
                                              .remove())
                                        : i < 0 &&
                                          (c.prepend(a),
                                          Sa(".mbsc-cal-slide", c)
                                              .slice(b)
                                              .remove()),
                                    g)
                                ) {
                                    for (a = "", r = 0; r < t; r++)
                                        a += f(
                                            p(
                                                h,
                                                (l =
                                                    i +
                                                    r -
                                                    m -
                                                    d +
                                                    (0 < i ? 0 : u - t))
                                            ),
                                            v + l
                                        );
                                    0 < i
                                        ? (Sa(".mbsc-cal-slide", c)
                                              .slice(0, b)
                                              .remove(),
                                          c.prepend(a))
                                        : i < 0 &&
                                          (Sa(".mbsc-cal-slide", c)
                                              .slice(b)
                                              .remove(),
                                          c.append(a));
                                }
                                tt(s),
                                    o && !e && o(),
                                    (s.callback = null),
                                    (s.load = null),
                                    s.queue.shift(),
                                    (g = !1),
                                    s.queue.length
                                        ? n.apply(this, s.queue[0])
                                        : ((s.changing = !1),
                                          s.onAfterChange(s.first));
                            }
                        };
                        s.onBeforeChange(s.first);
                        s.load &&
                            (s.load(),
                            s.scroller.scroll(
                                -s.pos * s.size,
                                e ? 200 : 0,
                                !1,
                                s.callback
                            ));
                    })(e, t, a, n));
        }
        function et(e, t, a, n, s, i, o, r, l, c, d, m, u) {
            var h = $ ? "Y" : "X",
                f = {
                    $scroller: Sa(".mbsc-cal-scroll", e),
                    queue: [],
                    buffer: n,
                    offset: s,
                    pages: i,
                    first: r,
                    total: o,
                    pos: 0,
                    min: t,
                    max: a,
                    genPage: m,
                    getFirst: u,
                    onBeforeChange: c,
                    onAfterChange: d,
                };
            return (
                (f.scroller = new pt(e, {
                    axis: h,
                    easing: "",
                    contSize: 0,
                    maxSnapScroll: n,
                    mousewheel: void 0 === ce.mousewheel ? $ : ce.mousewheel,
                    time: 200,
                    lock: !0,
                    rtl: z,
                    stopProp: !1,
                    minScroll: 0,
                    maxScroll: 0,
                    onBtnTap: function (e) {
                        "touchend" == e.domEvent.type && _a(),
                            l(Sa(e.target), e.domEvent);
                    },
                    onStart: function () {
                        clearTimeout(O);
                    },
                    onGestureStart: function () {
                        Y = !0;
                    },
                    onAnimationStart: function () {
                        f.changing = !0;
                    },
                    onAnimationEnd: function (e) {
                        (Y = !1),
                            m &&
                                Qe(
                                    f,
                                    Math.round(
                                        (-f.pos * f.size - e["pos" + h]) /
                                            f.size
                                    ) * le
                                );
                    },
                })),
                D._scrollers.push(f.scroller),
                f
            );
        }
        function tt(e, t) {
            var a,
                n = 0,
                s = 0,
                i = e.first;
            if (!e.changing || !t) {
                if (e.getFirst) {
                    for (
                        n = e.buffer, s = e.buffer;
                        s && e.getFirst(i, s + e.pages - e.offset - 1) > e.max;

                    )
                        s--;
                    for (; n && e.getFirst(i, 1 - n - e.offset) <= e.min; ) n--;
                }
                (a = Math.round(x / e.pages)),
                    L &&
                        a &&
                        e.size != a &&
                        e.$scroller[$ ? "height" : "width"](a),
                    Da(e.scroller.settings, {
                        snap: a,
                        minScroll: (-e.pos * le - s) * a,
                        maxScroll: (-e.pos * le + n) * a,
                    }),
                    (e.size = a),
                    e.scroller.refresh();
            }
        }
        function at(e) {
            D._onRefresh(e),
                D._isVisible &&
                    k &&
                    N &&
                    (M && M.changing ? (ne = e) : (ze(w, e, !0), $e(o)));
        }
        function nt(e) {
            pe = "touchstart" === e.type;
        }
        return (
            (y = {}),
            (_ = []),
            (C = {}),
            (ue = D.trigger),
            (we = Da({}, D.settings)),
            (t = (ce = Da(D.settings, vt, we)).controls.join(",")),
            (E = ce.firstDay),
            (z = ce.rtl),
            (se = ce.pageBuffer),
            (be = ce.weekCounter),
            (N = ce.weeks),
            (h = 6 == N),
            ($ = "vertical" == ce.calendarScroll),
            (i = D._getRespCont()),
            (ve =
                "full" == ce.weekDays
                    ? ""
                    : "min" == ce.weekDays
                    ? "Min"
                    : "Short"),
            (_e =
                ce.layout ||
                ("inline" == ce.display ||
                (/top|bottom/.test(ce.display) && ce.touchUi)
                    ? "liquid"
                    : "")),
            (T = (L = "liquid" == _e) ? null : ce.calendarWidth),
            (le = z && !$ ? -1 : 1),
            (r = "mbsc-disabled " + (ce.disabledClass || "")),
            (l = "mbsc-selected " + (ce.selectedTabClass || "")),
            (V = "mbsc-selected " + (ce.selectedClass || "")),
            (B = Math.max(
                1,
                Math.floor(((ce.calendarHeight || 0) / N - 45) / 18)
            )),
            t.match(/calendar/) && ((y.calendar = 1), (k = !0)),
            t.match(/date/) && !k && (y.date = 1),
            t.match(/time/) && (y.time = 1),
            ce.controls.forEach(function (e) {
                y[e] && _.push(e);
            }),
            (I = ce.quickNav && k && h),
            (ge = ce.yearChange && h),
            L && k && "center" == ce.display && (D._isFullScreen = !0),
            (ce.layout = _e),
            (ce.preset = (y.date || k ? "date" : "") + (y.time ? "time" : "")),
            (e = bt.call(this, D)),
            (ee = ge ? ce.monthNamesShort : ce.monthNames),
            (ye = ce.yearSuffix || ""),
            (Q = (ce.dateWheels || ce.dateFormat).search(/m/i)),
            (xe = (ce.dateWheels || ce.dateFormat).search(/y/i)),
            (S = D._format),
            ce.min &&
                ((K = rt(ct(ce.min, S, ce))),
                (Z = ce.getYear(K)),
                (X = ce.getMonth(K)),
                (G = ce.getDate(12 * Math.floor(Z / 12), 0, 1))),
            ce.max &&
                ((W = rt(ct(ce.max, S, ce))),
                (U = ce.getYear(W)),
                (q = ce.getMonth(W)),
                (J = ce.getDate(12 * Math.floor(U / 12), 0, 1))),
            (D._minDate = K),
            (D._maxDate = W),
            (D.refresh = function () {
                at(!1);
            }),
            (D.redraw = function () {
                at(!0);
            }),
            (D.navigate = function (e, t) {
                je(ct(e, S, ce), !0, t);
            }),
            (D.changeTab = function (e) {
                D._isVisible &&
                    y[e] &&
                    fe != e &&
                    ((fe = e),
                    Sa(".mbsc-cal-tab", b)
                        .removeClass(l)
                        .removeAttr("aria-selected"),
                    Sa('.mbsc-cal-tab[data-control="' + e + '"]', b)
                        .addClass(l)
                        .attr("aria-selected", "true"),
                    H &&
                        (g.addClass("mbsc-cal-h"),
                        y[fe].removeClass("mbsc-cal-h")),
                    "calendar" == fe && je(D.getDate(!0), !1, !0),
                    D._showDayPicker(),
                    D.trigger("onTabChange", { tab: fe }));
            }),
            (D._checkSize = !0),
            (D._onGenMonth = ga),
            (D._onSetDate = ga),
            (D._onRefresh = ga),
            (D._getDayProps = ga),
            (D._prepareObj = Ne),
            (D._showDayPicker = function () {
                I && (Se(s), Se(a));
            }),
            (D._selectDay = D.__selectDay = function (e, t, a) {
                var n = D.live;
                (ae = ce.outerMonthChange),
                    (u = !0),
                    D.setDate(a, n, 1e3, !n, !0),
                    n && ue("onSet", { valueText: D._value });
            }),
            (D._checkBtn = Je),
            Da(e, {
                labels: null,
                compClass: "mbsc-calendar mbsc-dt mbsc-sc",
                onMarkupReady: function (e) {
                    var t = 0;
                    (b = Sa(e.target)),
                        (n = Sa(".mbsc-fr-c", b)),
                        (o = D.getDate(!0)),
                        (x = 0),
                        k &&
                            ((d = !(
                                (!ce.marked && !ce.data) ||
                                ce.labels ||
                                ce.multiLabel ||
                                ce.showEventCount
                            )),
                            (ae = !0),
                            (fe = "calendar"),
                            (ie =
                                "auto" == ce.months
                                    ? Math.max(
                                          1,
                                          Math.min(
                                              3,
                                              Math.floor((T || ht(i)) / 280)
                                          )
                                      )
                                    : +ce.months),
                            (re = ie + 2 * se),
                            ($ = $ && ie < 2),
                            (me =
                                void (oe = 0) === ce.showOuterDays
                                    ? (ie < 2 && !$) || !h
                                    : ce.showOuterDays),
                            (w = Ge(Ee(o), h)),
                            n.append(
                                (function () {
                                    var e,
                                        t,
                                        a,
                                        n,
                                        s,
                                        i,
                                        o = "",
                                        r = z
                                            ? ce.btnCalNextClass
                                            : ce.btnCalPrevClass,
                                        l = z
                                            ? ce.btnCalPrevClass
                                            : ce.btnCalNextClass;
                                    for (
                                        s =
                                            '<div class="mbsc-cal-btn-w"><div data-step="-1" role="button" tabindex="0" aria-label="' +
                                            ce.prevMonthText +
                                            '" class="' +
                                            r +
                                            ' mbsc-cal-prev mbsc-cal-prev-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div>',
                                            t = 0;
                                        t < (N ? ie : 1);
                                        t++
                                    )
                                        s +=
                                            '<div role="button" class="mbsc-cal-month"></div>';
                                    if (
                                        ((s +=
                                            '<div data-step="1" role="button" tabindex="0" aria-label="' +
                                            ce.nextMonthText +
                                            '" class="' +
                                            l +
                                            ' mbsc-cal-next mbsc-cal-next-m mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'),
                                        ge &&
                                            (o =
                                                '<div class="mbsc-cal-btn-w"><div data-step="-12" role="button" tabindex="0" aria-label="' +
                                                ce.prevYearText +
                                                '" class="' +
                                                r +
                                                ' mbsc-cal-prev mbsc-cal-prev-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div><div role="button" class="mbsc-cal-year"></div><div data-step="12" role="button" tabindex="0" aria-label="' +
                                                ce.nextYearText +
                                                '" class="' +
                                                l +
                                                ' mbsc-cal-next mbsc-cal-next-y mbsc-cal-btn mbsc-fr-btn mbsc-fr-btn-e"></div></div>'),
                                        N && (i = ze(w)),
                                        (e =
                                            '<div class="mbsc-w-p mbsc-cal-c"><div class="mbsc-cal ' +
                                            (h ? "" : " mbsc-cal-week-view") +
                                            (1 < ie ? " mbsc-cal-multi " : "") +
                                            (be ? " mbsc-cal-weeks " : "") +
                                            ($ ? " mbsc-cal-vertical" : "") +
                                            (d ? " mbsc-cal-has-marks" : "") +
                                            (F ? " mbsc-cal-has-labels" : "") +
                                            (me ? "" : " mbsc-cal-hide-diff ") +
                                            (ce.calendarClass || "") +
                                            '"' +
                                            (L
                                                ? ""
                                                : ' style="width:' +
                                                  (T || 280 * ie) +
                                                  'px;"') +
                                            '><div class="mbsc-cal-hdr">' +
                                            (xe < Q || 1 < ie ? o + s : s + o) +
                                            "</div>"),
                                        N)
                                    ) {
                                        for (
                                            e +=
                                                '<div class="mbsc-cal-body"><div class="mbsc-cal-day-picker"><div class="mbsc-cal-days-c">',
                                                a = 0;
                                            a < ie;
                                            a++
                                        ) {
                                            for (
                                                e +=
                                                    '<div class="mbsc-cal-days">',
                                                    t = 0;
                                                t < 7;
                                                t++
                                            )
                                                e +=
                                                    '<div class="mbsc-cal-week-day' +
                                                    (n = (t + E) % 7) +
                                                    '" aria-label="' +
                                                    ce.dayNames[n] +
                                                    '">' +
                                                    ce["dayNames" + ve][n] +
                                                    "</div>";
                                            e += "</div>";
                                        }
                                        e +=
                                            '</div><div class="mbsc-cal-scroll-c mbsc-cal-day-scroll-c ' +
                                            (ce.calendarClass || "") +
                                            '"' +
                                            (ce.calendarHeight
                                                ? ' style="height:' +
                                                  ce.calendarHeight +
                                                  'px"'
                                                : "") +
                                            '><div class="mbsc-cal-scroll" style="width:' +
                                            100 / ie +
                                            '%">' +
                                            i +
                                            "</div></div>";
                                    }
                                    if (((e += "</div>"), I)) {
                                        for (
                                            e +=
                                                '<div class="mbsc-cal-month-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' +
                                                (ce.calendarClass || "") +
                                                '"><div class="mbsc-cal-scroll">',
                                                t = 0;
                                            t < 3;
                                            t++
                                        ) {
                                            for (
                                                e +=
                                                    '<div class="mbsc-cal-slide"' +
                                                    Ae(t - 1) +
                                                    '><div role="grid" class="mbsc-cal-table"><div role="row" class="mbsc-cal-row">',
                                                    a = 0;
                                                a < 12;
                                                a++
                                            )
                                                a &&
                                                    a % 3 == 0 &&
                                                    (e +=
                                                        '</div><div role="row" class="mbsc-cal-row">'),
                                                    (e +=
                                                        '<div role="gridcell"' +
                                                        (1 == t
                                                            ? ' tabindex="-1" aria-label="' +
                                                              ce.monthNames[a] +
                                                              '" data-val="' +
                                                              a +
                                                              '"'
                                                            : "") +
                                                        ' class="mbsc-cal-cell' +
                                                        (1 == t
                                                            ? " mbsc-btn-e"
                                                            : "") +
                                                        '"><div class="mbsc-cal-cell-i mbsc-cal-cell-txt">' +
                                                        (1 == t
                                                            ? ce
                                                                  .monthNamesShort[
                                                                  a
                                                              ]
                                                            : "&nbsp;") +
                                                        "</div></div>");
                                            e += "</div></div></div>";
                                        }
                                        for (
                                            e += "</div></div></div>",
                                                e +=
                                                    '<div class="mbsc-cal-year-picker mbsc-cal-picker mbsc-cal-h"><div class="mbsc-cal-scroll-c ' +
                                                    (ce.calendarClass || "") +
                                                    '"><div class="mbsc-cal-scroll">',
                                                t = -1;
                                            t < 2;
                                            t++
                                        )
                                            e += Le(Ze(w, t), t);
                                        e += "</div></div></div>";
                                    }
                                    return (e += "</div></div></div>");
                                })()
                            ),
                            (v = Sa(".mbsc-cal-month", b)),
                            (c = Sa(".mbsc-cal-year", b)),
                            (p = Sa(".mbsc-cal-day-scroll-c", b))),
                        I &&
                            ((s = Sa(".mbsc-cal-year-picker", b)),
                            (a = Sa(".mbsc-cal-month-picker", b))),
                        (g = Sa(".mbsc-w-p", b)),
                        1 < _.length &&
                            n.before(
                                (function () {
                                    var a, n;
                                    return (
                                        (a =
                                            '<div class="mbsc-cal-tabs-c"><div class="mbsc-cal-tabs" role="tablist">'),
                                        _.forEach(function (e, t) {
                                            (n =
                                                ce[
                                                    ("calendar" == e
                                                        ? "date"
                                                        : e) + "Text"
                                                ]),
                                                (a +=
                                                    '<div role="tab" aria-controls="' +
                                                    Me.id +
                                                    "-mbsc-pnl-" +
                                                    t +
                                                    '" class="mbsc-cal-tab mbsc-fr-btn-e ' +
                                                    (t ? "" : l) +
                                                    '" data-control="' +
                                                    e +
                                                    '"' +
                                                    (ce.tabLink
                                                        ? '><a href="#">' +
                                                          n +
                                                          "</a>"
                                                        : ' tabindex="0">' +
                                                          n) +
                                                    "</div>");
                                        }),
                                        (a += "</div></div>")
                                    );
                                })()
                            ),
                        ["date", "time", "calendar"].forEach(function (e) {
                            y[e]
                                ? ((y[e] = g.eq(t)), t++)
                                : "date" == e &&
                                  !y.date &&
                                  k &&
                                  (g.eq(t).remove(), t++);
                        }),
                        _.forEach(function (e) {
                            n.append(y[e]);
                        }),
                        !k && y.date && y.date.css("position", "relative"),
                        (D._scrollers = []),
                        (function () {
                            if (k && N) {
                                var e = Sa(".mbsc-cal-scroll-c", b);
                                (M = et(
                                    e[0],
                                    K,
                                    W,
                                    se,
                                    oe,
                                    ie,
                                    re,
                                    w,
                                    qe,
                                    Ie,
                                    Oe,
                                    Ye,
                                    Xe
                                )),
                                    I &&
                                        ((te = et(
                                            e[1],
                                            null,
                                            null,
                                            1,
                                            0,
                                            1,
                                            3,
                                            w,
                                            Ue
                                        )),
                                        (Te = et(
                                            e[2],
                                            G,
                                            J,
                                            1,
                                            0,
                                            1,
                                            3,
                                            w,
                                            Ke,
                                            ga,
                                            ga,
                                            Le,
                                            Ze
                                        )),
                                        D.tap(v, function () {
                                            ke(a), Se(s);
                                        }),
                                        D.tap(c, function () {
                                            ke(s), Se(a);
                                        })),
                                    ft(Sa(".mbsc-cal-btn", b), function (
                                        e,
                                        t,
                                        a,
                                        n
                                    ) {
                                        Qe(M, t, !0, n);
                                    }),
                                    Oe(w),
                                    (null === ce.defaultValue &&
                                        !D._hasValue) ||
                                        D._multiple ||
                                        (D._activeElm = M.$active[0]),
                                    ma(p[0], "touchstart", nt, { passive: !0 }),
                                    ma(p[0], "mousedown", nt),
                                    p.on("keydown", function (e) {
                                        var t,
                                            a = ce.getYear(o),
                                            n = ce.getMonth(o),
                                            s = ce.getDay(o);
                                        switch (e.keyCode) {
                                            case 32:
                                                qe(M.$active, e);
                                                break;
                                            case 37:
                                                t = ce.getDate(
                                                    a,
                                                    n,
                                                    s - 1 * le
                                                );
                                                break;
                                            case 39:
                                                t = ce.getDate(
                                                    a,
                                                    n,
                                                    s + 1 * le
                                                );
                                                break;
                                            case 38:
                                                t = ce.getDate(a, n, s - 7);
                                                break;
                                            case 40:
                                                t = ce.getDate(a, n, s + 7);
                                                break;
                                            case 36:
                                                t = ce.getDate(a, n, 1);
                                                break;
                                            case 35:
                                                t = ce.getDate(a, n + 1, 0);
                                                break;
                                            case 33:
                                                t = e.altKey
                                                    ? ce.getDate(a - 1, n, s)
                                                    : h
                                                    ? ce.getDate(a, n - 1, s)
                                                    : ce.getDate(
                                                          a,
                                                          n,
                                                          s - 7 * N
                                                      );
                                                break;
                                            case 34:
                                                t = e.altKey
                                                    ? ce.getDate(a + 1, n, s)
                                                    : h
                                                    ? ce.getDate(a, n + 1, s)
                                                    : ce.getDate(
                                                          a,
                                                          n,
                                                          s + 7 * N
                                                      );
                                        }
                                        t &&
                                            (e.preventDefault(),
                                            je(t, !0, !1, !0));
                                    });
                            }
                            D.tap(Sa(".mbsc-cal-tab", b), function () {
                                D.changeTab(Sa(this).attr("data-control"));
                            });
                        })();
                },
                onShow: function () {
                    k && N && We(w);
                },
                onHide: function () {
                    D._scrollers.forEach(function (e) {
                        e.destroy();
                    }),
                        (fe = Te = te = M = A = null);
                },
                onValidated: function (e) {
                    var t,
                        a,
                        n = e.index,
                        s = D._order;
                    (a = D.getDate(!0)),
                        (de = a),
                        u
                            ? (t = "calendar")
                            : void 0 !== n &&
                              (t =
                                  s.dd == n || s.d == n || s.m == n || s.y == n
                                      ? "date"
                                      : "time"),
                        ue("onSetDate", { date: a, control: t }),
                        "time" !== t && je(a, !1, !!e.time, u && !D._multiple),
                        (u = !1);
                },
                onPosition: function (e) {
                    var t,
                        a,
                        n,
                        s,
                        i,
                        o,
                        r,
                        l = e.oldHeight,
                        c = e.windowHeight;
                    if (
                        ((H =
                            (e.hasTabs ||
                                !0 === ce.tabs ||
                                (!1 !== ce.tabs && L)) &&
                            1 < _.length),
                        L &&
                            (e.windowWidth >= ce.breakPointMd
                                ? Sa(e.target).addClass("mbsc-fr-md")
                                : Sa(e.target).removeClass("mbsc-fr-md")),
                        H
                            ? (b.addClass("mbsc-cal-tabbed"),
                              (fe = Sa(".mbsc-cal-tab.mbsc-selected", b).attr(
                                  "data-control"
                              )),
                              g.addClass("mbsc-cal-h"),
                              y[fe].removeClass("mbsc-cal-h"))
                            : (b.removeClass("mbsc-cal-tabbed"),
                              g.removeClass("mbsc-cal-h")),
                        D._isFullScreen &&
                            (p.height(""),
                            (r =
                                c -
                                (i = e.popup.offsetHeight) +
                                p[0].offsetHeight),
                            i <= c && p.height(r)),
                        F && N && c != l)
                    ) {
                        var d = r || p[0].offsetHeight,
                            m = p.find(".mbsc-cal-txt,.mbsc-cal-txt-ph")[0],
                            u = m.offsetTop,
                            h = m.offsetHeight,
                            f = Math.max(1, Math.floor((d / N - u) / (h + 2)));
                        B != f && ((B = f), D.redraw());
                    }
                    if (k && N) {
                        if (
                            ((s =
                                (o =
                                    L || $ || H
                                        ? p[0][
                                              $ ? "offsetHeight" : "offsetWidth"
                                          ]
                                        : T || 280 * ie) != x),
                            (x = o),
                            L && s && ge)
                        )
                            for (
                                ee =
                                    ce.maxMonthWidth > v[0].offsetWidth
                                        ? ce.monthNamesShort
                                        : ce.monthNames,
                                    a = ce.getYear(w),
                                    n = ce.getMonth(w),
                                    t = 0;
                                t < ie;
                                t++
                            )
                                v.eq(t).text(
                                    ee[
                                        ce.getMonth(
                                            ce.getDate(a, n - oe + t, 1)
                                        )
                                    ]
                                );
                        s && tt(M, !0);
                    }
                    I && s && (tt(te, !0), tt(Te, !0));
                },
            })
        );
    }
    var vt = {
            controls: ["calendar"],
            firstDay: 0,
            weekDays: "short",
            maxMonthWidth: 170,
            breakPointMd: 768,
            months: 1,
            pageBuffer: 1,
            weeks: 6,
            highlight: !0,
            outerMonthChange: !0,
            quickNav: !0,
            yearChange: !0,
            tabs: "auto",
            todayClass: "mbsc-cal-today",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left6",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right6",
            dateText: "Date",
            timeText: "Time",
            todayText: "Today",
            fromText: "Start",
            toText: "End",
            moreEventsText: "{count} more",
            prevMonthText: "Previous Month",
            nextMonthText: "Next Month",
            prevYearText: "Previous Year",
            nextYearText: "Next Year",
        },
        Ue = {};
    function Ke(e, t) {
        (e.prototype = Object.create(t.prototype)),
            ((e.prototype.constructor = e).__proto__ = t);
    }
    function Ge(e) {
        if (void 0 === e)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
        return e;
    }
    (Ye.calendar = function (c) {
        function i(e) {
            var t,
                a,
                n,
                s = null;
            if (((v = {}), e && e.length))
                for (a = 0; a < e.length; a++)
                    (t = ct(e[a], o, h, h.isoParts)),
                        (s = s || t),
                        (v[
                            it((n = t).getFullYear(), n.getMonth(), n.getDate())
                        ] = t);
            return s;
        }
        function d() {
            c.redraw();
        }
        var n,
            m,
            o,
            u,
            t,
            e = Da({}, c.settings),
            h = Da(c.settings, Ue, e),
            f = "mbsc-selected " + (h.selectedClass || ""),
            a = h.defaultValue,
            p =
                "multiple" == h.select ||
                1 < h.select ||
                "week" == h.selectType,
            b = xa(h.select) ? h.select : 1 / 0,
            v = {};
        return (
            (n = qe.call(this, c)),
            (u = void 0 === h.firstSelectDay ? h.firstDay : h.firstSelectDay),
            (o = c._format),
            p && i(a),
            (c._multiple = p),
            (c._getDayProps = function (e) {
                return { selected: p ? void 0 !== v[e] : void 0 };
            }),
            (c._selectDay = function (e, t, a, n) {
                var s =
                    "single" == h.select ||
                    1 == h.select ||
                    void 0 === h.select;
                if (h.setOnDayTap && s && "inline" != h.display)
                    return c.setDate(a), void c.select();
                if (p)
                    if ("week" == h.selectType) {
                        var i,
                            o,
                            r = t.getDay() - u;
                        for (
                            r = r < 0 ? 7 + r : r, s && (v = {}), i = 0;
                            i < 7;
                            i++
                        )
                            (o = it(
                                t.getFullYear(),
                                t.getMonth(),
                                t.getDate() - r + i
                            )),
                                n
                                    ? delete v[o]
                                    : se(v).length / 7 < b && (v[o] = o);
                        d();
                    } else {
                        var l = Sa(
                            '.mbsc-cal-day[data-full="' +
                                e.attr("data-full") +
                                '"]',
                            m
                        );
                        n
                            ? (l.removeClass(f).removeAttr("aria-selected"),
                              delete v[t])
                            : se(v).length < b &&
                              (l.addClass(f).attr("aria-selected", "true"),
                              (v[t] = t));
                    }
                c.__selectDay(e, t, a);
            }),
            (c.setVal = function (e, t, a, n, s) {
                p && (e = i(e)), c._setVal(e, t, a, n, s), p && d();
            }),
            (c.getVal = function (e) {
                var t,
                    a = [];
                if (p) {
                    for (t in v) a.push(de(v[t], h, o));
                    return a;
                }
                return de(c.getDate(e), h, o);
            }),
            Da({}, n, {
                highlight: !p,
                outerMonthChange: !p,
                parseValue: function (e) {
                    return (
                        p && e && "string" == typeof e && (e = i(e.split(","))),
                        p && a && a.length && (h.defaultValue = a[0]),
                        n.parseValue.call(this, e)
                    );
                },
                formatValue: function (e) {
                    var t,
                        a = [];
                    if (p) {
                        for (t in v) a.push(le(o, v[t], h));
                        return a.join(", ");
                    }
                    return n.formatValue.call(this, e, c);
                },
                onClear: function () {
                    p && ((v = {}), d());
                },
                onBeforeShow: function () {
                    void 0 !== h.setOnDayTap ||
                        (h.buttons && h.buttons.length) ||
                        1 != h.controls.length ||
                        (h.setOnDayTap = !0),
                        h.setOnDayTap &&
                            "inline" != h.display &&
                            (h.outerMonthChange = !1),
                        h.counter &&
                            p &&
                            (h.headerText = function () {
                                var e = 0,
                                    t = "week" == h.selectType ? 7 : 1;
                                return (
                                    Sa.each(v, function () {
                                        e++;
                                    }),
                                    (
                                        (1 < (e = Math.round(e / t)) &&
                                            h.selectedPluralText) ||
                                        h.selectedText
                                    ).replace(/{count}/, e)
                                );
                            });
                },
                onMarkupReady: function (e) {
                    n.onMarkupReady.call(this, e),
                        (m = Sa(e.target)),
                        p &&
                            (Sa(".mbsc-fr-hdr", m).attr("aria-live", "off"),
                            (t = Da({}, v)));
                },
                onCancel: function () {
                    !c.live && p && (v = Da({}, t));
                },
            })
        );
    }),
        O("calendar", je);
    var Xe,
        Ze = "mbsc-input-wrap",
        Qe = [
            "touchend",
            "touchcancel",
            "mousedown",
            "mousemove",
            "mouseup",
            "mouseleave",
        ],
        et = { tap: v };
    function tt(e, t) {
        var a = {},
            n = e[0],
            s = e.parent(),
            i = s.find(".mbsc-err-msg"),
            o = e.attr("data-icon-align") || "left",
            r = e.attr("data-icon");
        s.hasClass(Ze)
            ? (s = s.parent())
            : Sa('<span class="' + Ze + '"></span>')
                  .insertAfter(e)
                  .append(e),
            i && s.find("." + Ze).append(i),
            r && (-1 !== r.indexOf("{") ? (a = JSON.parse(r)) : (a[o] = r)),
            "file" == n.type &&
                (a.right = e.attr("data-icon-upload") || "upload"),
            (r || t) &&
                (Da(a, t),
                s
                    .addClass(
                        (a.right ? "mbsc-ic-right " : "") +
                            (a.left ? " mbsc-ic-left" : "")
                    )
                    .find("." + Ze)
                    .append('<span class="mbsc-input-fill"></span>')
                    .append(
                        a.left
                            ? '<span class="mbsc-input-ic mbsc-left-ic mbsc-ic mbsc-ic-' +
                                  a.left +
                                  '"></span>'
                            : ""
                    )
                    .append(
                        a.right
                            ? '<span class="mbsc-input-ic mbsc-right-ic mbsc-ic mbsc-ic-' +
                                  a.right +
                                  '"></span>'
                            : ""
                    ));
    }
    function at(e, t, a, n, s) {
        "segmented" == t
            ? e
                  .closest(".mbsc-segmented")
                  .addClass("box" == a ? "mbsc-input-box" : "")
                  .addClass("outline" == a ? "mbsc-input-outline" : "")
            : "button" != t &&
              "submit" != t &&
              (e
                  .addClass("mbsc-control-w")
                  .addClass("box" == a ? "mbsc-input-box" : "")
                  .addClass("outline" == a ? "mbsc-input-outline" : "")
                  .addClass("inline" == n ? "mbsc-label-inline" : "")
                  .addClass("stacked" == n ? "mbsc-label-stacked" : "")
                  .addClass("floating" == n ? "mbsc-label-floating" : "")
                  .addClass(
                      "floating" == n && s.value
                          ? "mbsc-label-floating-active"
                          : ""
                  )
                  .find("label")
                  .addClass("mbsc-label")
                  .each(function (e, t) {
                      Sa(t).attr("title", Sa(t).text());
                  }),
              e
                  .contents()
                  .filter(function () {
                      return (
                          3 == this.nodeType &&
                          this.nodeValue &&
                          /\S/.test(this.nodeValue)
                      );
                  })
                  .each(function () {
                      Sa(
                          '<span class="mbsc-label" title="' +
                              this.textContent.trim() +
                              '"></span>'
                      )
                          .insertAfter(this)
                          .append(this);
                  }));
    }
    function nt(e) {
        var t = oa.themes.form[e];
        return t && t.addRipple ? t : null;
    }
    function gt(e, t, a) {
        var n = e.attr(t);
        return void 0 === n || "" === n ? a : n;
    }
    function xt(e) {
        var t = B(e),
            a = oa.themes.form[t].baseTheme;
        return (
            "mbsc-" +
            t +
            (a ? " mbsc-" + a : "") +
            (e.rtl ? " mbsc-rtl" : " mbsc-ltr")
        );
    }
    var Tt = (function () {
        function e(e, t) {
            var a = this,
                n = Da({}, et, oa.settings, t),
                s = Sa(e),
                i = s.parent(),
                o = i.hasClass("mbsc-input-wrap") ? i.parent() : i,
                r = s.next().hasClass("mbsc-fr") ? s.next() : null,
                l = Ca(s),
                c = gt(s, "data-input-style", n.inputStyle),
                d = gt(s, "data-label-style", n.labelStyle);
            e.mbscInst && e.mbscInst.destroy(),
                r && r.insertAfter(o),
                (n.theme = B(n)),
                void 0 === n.rtl &&
                    n.lang &&
                    oa.i18n[n.lang] &&
                    (n.rtl = oa.i18n[n.lang].rtl),
                at(o, l, c, d, e),
                s.addClass("mbsc-control"),
                (this._handle = this._handle.bind(this)),
                Qe.forEach(function (e) {
                    s.on(e, a._handle);
                }),
                ma(e, "touchstart", this._handle, { passive: !0 }),
                ma(e, "touchmove", this._handle, { passive: !0 }),
                (this.settings = n),
                (this._type = l),
                (this._elm = e),
                (this._$elm = s),
                (this._$parent = o),
                (this._$frame = r),
                (this._ripple = nt(n.theme)),
                (this._isFloating =
                    "floating" == d || o.hasClass("mbsc-label-floating")),
                (this.cssClass = xt(n)),
                this.getClassElm().addClass(this.cssClass),
                (e.mbscInst = this);
        }
        var t = e.prototype;
        return (
            (t.getClassElm = function () {
                return this._$parent;
            }),
            (t.destroy = function () {
                var t = this,
                    a = this._$elm,
                    e = this._elm;
                a.removeClass("mbsc-control"),
                    this.getClassElm().removeClass(this.cssClass),
                    Qe.forEach(function (e) {
                        a.off(e, t._handle);
                    }),
                    ua(e, "touchstart", this._handle, { passive: !0 }),
                    ua(e, "touchmove", this._handle, { passive: !0 }),
                    delete e.mbscInst;
            }),
            (t.option = function (e) {
                Da(this.settings, e);
                var t = this.getClassElm();
                this.cssClass && t.removeClass(this.cssClass),
                    (this.cssClass = xt(this.settings)),
                    t.addClass(this.cssClass),
                    (this._ripple = nt(this.settings.theme));
            }),
            (t._handle = function (e) {
                switch (e.type) {
                    case "touchstart":
                    case "mousedown":
                        this._onStart(e);
                        break;
                    case "touchmove":
                    case "mousemove":
                        this._onMove(e);
                        break;
                    case "touchend":
                    case "touchcancel":
                    case "mouseup":
                    case "mouseleave":
                        this._onEnd(e);
                }
            }),
            (t._addRipple = function (e) {
                this._ripple &&
                    this._$rippleElm &&
                    this._ripple.addRipple(this._$rippleElm, e);
            }),
            (t._removeRipple = function () {
                this._ripple && this._$rippleElm && this._ripple.removeRipple();
            }),
            (t._onStart = function (e) {
                var t = this._elm;
                ca(e, t) &&
                    ((this._startX = wa(e, "X")),
                    (this._startY = wa(e, "Y")),
                    Xe && Xe.removeClass("mbsc-active"),
                    t.disabled ||
                        ((this._isActive = !0),
                        (Xe = this._$elm).addClass("mbsc-active"),
                        this._addRipple(e))),
                    "touchstart" == e.type &&
                        this._$elm
                            .closest(".mbsc-no-touch")
                            .removeClass("mbsc-no-touch");
            }),
            (t._onMove = function (e) {
                ((this._isActive && 9 < Math.abs(wa(e, "X") - this._startX)) ||
                    9 < Math.abs(wa(e, "Y") - this._startY)) &&
                    (this._$elm.removeClass("mbsc-active"),
                    this._removeRipple(),
                    (this._isActive = !1));
            }),
            (t._onEnd = function (e) {
                var t = this,
                    a = this._elm,
                    n = this._type;
                this._isActive &&
                    this.settings.tap &&
                    "touchend" == e.type &&
                    !a.readOnly &&
                    Ma(a, n, e),
                    this._isActive &&
                        setTimeout(function () {
                            t._$elm.removeClass("mbsc-active"),
                                t._removeRipple();
                        }, 100),
                    (this._isActive = !1),
                    (Xe = null);
            }),
            e
        );
    })();
    oa.themes.form.mobiscroll = {};
    var yt = ["focus", "change", "blur", "animationstart"],
        _t = (function (r) {
            function e(e, t) {
                var a,
                    n = (a = r.call(this, e, t) || this)._$elm,
                    s = a._$parent,
                    i = s.find(".mbsc-select-input, .mbsc-color-input");
                if (
                    (!(function (e, t, a) {
                        var n = {},
                            s = a[0],
                            i = a.attr("data-password-toggle"),
                            o = a.attr("data-icon-show") || "eye",
                            r = a.attr("data-icon-hide") || "eye-blocked";
                        i && (n.right = "password" == s.type ? o : r),
                            tt(a, n),
                            i &&
                                $(
                                    e,
                                    t
                                        .find(".mbsc-right-ic")
                                        .addClass("mbsc-input-toggle"),
                                    function () {
                                        "text" == s.type
                                            ? ((s.type = "password"),
                                              Sa(this)
                                                  .addClass("mbsc-ic-" + o)
                                                  .removeClass("mbsc-ic-" + r))
                                            : ((s.type = "text"),
                                              Sa(this)
                                                  .removeClass("mbsc-ic-" + o)
                                                  .addClass("mbsc-ic-" + r));
                                    }
                                );
                    })(Ge(a), s, n),
                    (a._checkLabel = a._checkLabel.bind(Ge(a))),
                    (a._mouseDown = a._mouseDown.bind(Ge(a))),
                    (a._setText = a._setText.bind(Ge(a))),
                    "file" == e.type)
                ) {
                    var o = s.find(".mbsc-file-input");
                    (a._$input = o.length
                        ? o
                        : Sa(
                              '<input type="text" class="' +
                                  (n.attr("class") || "") +
                                  ' mbsc-file-input" placeholder="' +
                                  (n.attr("placeholder") || "") +
                                  '"/>'
                          ).insertAfter(n)),
                        n.on("change", a._setText);
                }
                return (
                    s.addClass("mbsc-input").on("mousedown", a._mouseDown),
                    yt.forEach(function (e) {
                        n.on(e, a._checkLabel);
                    }),
                    i.length &&
                        (n.after(i),
                        i.hasClass("mbsc-select-input") &&
                            ((a._delm = i[0]), a.refresh())),
                    a
                );
            }
            Ke(e, r);
            var t = e.prototype;
            return (
                (t._setText = function (e) {
                    for (
                        var t = e.target.files, a = [], n = 0;
                        n < t.length;
                        ++n
                    )
                        a.push(t[n].name);
                    this._$input.val(a);
                }),
                (t._checkLabel = function (e) {
                    if (this._isFloating) {
                        var t = this._delm || this._elm;
                        t.value ||
                        document.activeElement === t ||
                        (e &&
                            ("focus" == e.type ||
                                ("animationstart" == e.type &&
                                    this._$elm.is("*:-webkit-autofill"))))
                            ? this._$parent.addClass(
                                  "mbsc-label-floating-active"
                              )
                            : this._$parent.removeClass(
                                  "mbsc-label-floating-active"
                              );
                    }
                }),
                (t._mouseDown = function (e) {
                    document.activeElement === this._elm &&
                        e.target !== this._elm &&
                        e.preventDefault();
                }),
                (t.refresh = function () {
                    this._checkLabel();
                }),
                (t.destroy = function () {
                    var t = this;
                    r.prototype.destroy.call(this),
                        this._$parent
                            .off("mousedown", this._mouseDown)
                            .removeClass("mbsc-ic-left mbsc-ic-right")
                            .find(".mbsc-input-ic")
                            .remove(),
                        this._$parent.find(".mbsc-input-fill").remove(),
                        yt.forEach(function (e) {
                            t._$elm.off(e, t._checkLabel);
                        }),
                        this._$elm.off("change", this._setText);
                }),
                e
            );
        })(Tt);
    q("[mbsc-input]", _t);
    var wt = (function (i) {
        function e(e, t) {
            var a,
                n = (a = i.call(this, e, t) || this)._$elm,
                s = n.attr("data-icon");
            return (
                n
                    .addClass("mbsc-btn mbsc-no-touch")
                    .find(".mbsc-btn-ic")
                    .remove(),
                s &&
                    (n.prepend(
                        '<span class="mbsc-btn-ic mbsc-ic mbsc-ic-' +
                            s +
                            '"></span>'
                    ),
                    "" === n.text() && n.addClass("mbsc-btn-icon-only")),
                (a._$rippleElm = n),
                a
            );
        }
        return (
            Ke(e, i),
            (e.prototype.getClassElm = function () {
                return this._$elm;
            }),
            e
        );
    })(Tt);
    q("[mbsc-button]", wt);
    var Ct = (function (n) {
        function e(e, t) {
            var a;
            return (
                (a = n.call(this, e, t) || this)._$parent
                    .prepend(a._$elm)
                    .addClass("mbsc-checkbox mbsc-control-w")
                    .find(".mbsc-checkbox-box")
                    .remove(),
                a._$elm.after('<span class="mbsc-checkbox-box"></span>'),
                a
            );
        }
        return Ke(e, n), e;
    })(Tt);
    q("[mbsc-checkbox]", Ct);
    var Mt = (function (n) {
        function e(e, t) {
            var a;
            return (
                (a = n.call(this, e, t) || this)._$parent
                    .addClass("mbsc-radio mbsc-control-w")
                    .find(".mbsc-radio-box")
                    .remove(),
                a._$elm.after(
                    '<span class="mbsc-radio-box"><span></span></span>'
                ),
                a
            );
        }
        return Ke(e, n), e;
    })(Tt);
    q("[mbsc-radio]", Mt);
    var St = (function (r) {
        function e(e, t) {
            var a,
                n = (a = r.call(this, e, t) || this)._$elm,
                s = a._$parent,
                i = s.find(".mbsc-select-input"),
                o = i.length
                    ? i
                    : Sa(
                          '<input tabindex="-1" class="mbsc-select-input mbsc-control" readonly>'
                      );
            return (
                (a._$input = o),
                (a._delm = o[0]),
                (a._setText = a._setText.bind(Ge(a))),
                s.addClass(
                    "mbsc-select" + (a._$frame ? " mbsc-select-inline" : "")
                ),
                n.after(o),
                o.after(
                    '<span class="mbsc-select-ic mbsc-ic mbsc-ic-arrow-down5"></span>'
                ),
                n.on("change", a._setText),
                a._setText(),
                a
            );
        }
        Ke(e, r);
        var t = e.prototype;
        return (
            (t.destroy = function () {
                r.prototype.destroy.call(this),
                    this._$parent.find(".mbsc-select-ic").remove(),
                    this._$elm.off("change", this._setText);
            }),
            (t._setText = function () {
                var e = this._elm,
                    t = Sa(e);
                t.is("select") &&
                    !t.hasClass("mbsc-comp") &&
                    this._$input.val(
                        -1 != e.selectedIndex
                            ? e.options[e.selectedIndex].text
                            : ""
                    ),
                    this.refresh();
            }),
            e
        );
    })(_t);
    q("[mbsc-dropdown]", St);
    var kt,
        Dt = ["change", "keydown", "input", "scroll"];
    function Nt() {
        clearTimeout(kt),
            (kt = setTimeout(function () {
                Sa("textarea.mbsc-control").each(function () {
                    Vt(this);
                });
            }, 100));
    }
    function Vt(e) {
        var t,
            a,
            n,
            s = Sa(e).attr("rows") || 6;
        e.offsetHeight &&
            ((e.style.height = ""),
            (n = e.scrollHeight - e.offsetHeight),
            (t = e.offsetHeight + (0 < n ? n : 0)),
            s < (a = Math.round(t / 24))
                ? ((t = 24 * s + (t - 24 * a)),
                  Sa(e).addClass("mbsc-textarea-scroll"))
                : Sa(e).removeClass("mbsc-textarea-scroll"),
            t && (e.style.height = t + "px"));
    }
    o && Sa(window).on("resize orientationchange", Nt);
    var At = (function (n) {
        function e(e, t) {
            var a;
            return (
                (a = n.call(this, e, t) || this)._$parent.addClass(
                    "mbsc-textarea"
                ),
                Dt.forEach(function (e) {
                    a._$elm.on(e, a._handle);
                }),
                Vt(e),
                a
            );
        }
        Ke(e, n);
        var t = e.prototype;
        return (
            (t.destroy = function () {
                var t = this;
                n.prototype.destroy.call(this),
                    Dt.forEach(function (e) {
                        t._$elm.off(e, t._handle);
                    });
            }),
            (t.refresh = function () {
                n.prototype.refresh.call(this),
                    clearTimeout(this._debounce),
                    Vt(this._elm);
            }),
            (t._handle = function (e) {
                switch ((n.prototype._handle.call(this, e), e.type)) {
                    case "change":
                        Vt(this._elm);
                        break;
                    case "keydown":
                    case "input":
                        this._onInput(e);
                        break;
                    case "scroll":
                        !(function (e) {
                            var t = Sa(e);
                            if (!t.hasClass("mbsc-textarea-scroll")) {
                                var a = e.scrollHeight - e.offsetHeight,
                                    n = e.offsetHeight + a;
                                Math.round(n / 24) <= (t.attr("rows") || 6) &&
                                    ((e.scrollTop = 0),
                                    (e.style.height = n + "px"));
                            }
                        })(this._elm);
                }
            }),
            (t._onInput = function () {
                var e = this;
                clearTimeout(this._debounce),
                    (this._debounce = setTimeout(function () {
                        Vt(e._elm);
                    }, 100));
            }),
            e
        );
    })(_t);
    q("[mbsc-textarea]", At);
    var Et = (function (r) {
        function e(e, t) {
            var a,
                n,
                s,
                i = (a = r.call(this, e, t) || this)._$elm,
                o = a._$parent;
            return (
                o.hasClass("mbsc-segmented-item-ready") ||
                    ((n = Sa(
                        '<div class="mbsc-segmented mbsc-no-touch"></div>'
                    )),
                    o.after(n),
                    o
                        .parent()
                        .find('input[name="' + i.attr("name") + '"]')
                        .each(function () {
                            var e = Sa(this);
                            (s = e
                                .parent()
                                .addClass(
                                    "mbsc-segmented-item mbsc-segmented-item-ready"
                                )),
                                Sa(
                                    '<span class="mbsc-segmented-content">' +
                                        (e.attr("data-icon")
                                            ? '<span class="mbsc-ic mbsc-ic-' +
                                              e.attr("data-icon") +
                                              '"></span>'
                                            : "") +
                                        "</span>"
                                )
                                    .append(s.contents())
                                    .appendTo(s),
                                s.prepend(e),
                                n.append(s);
                        })),
                (a._$rippleElm = i.next()),
                a
            );
        }
        return (
            Ke(e, r),
            (e.prototype.getClassElm = function () {
                return this._$elm.closest(".mbsc-segmented");
            }),
            e
        );
    })(Tt);
    q("[mbsc-segmented]", Et);
    function Ft(t, e) {
        var n,
            s,
            i,
            a,
            o,
            r,
            l,
            c,
            d,
            m,
            u,
            h,
            f,
            p,
            b,
            v,
            g = "",
            x = this,
            T = Sa(t),
            y = p;
        function _() {
            var e;
            t.disabled ||
                ((e = parseFloat(Sa(this).val())), M(isNaN(e) ? p : e));
        }
        function w() {
            return t.disabled;
        }
        function C(e, t) {
            M(p + t * m);
        }
        function M(e, t, a) {
            (y = p),
                void 0 === t && (t = !0),
                void 0 === a && (a = t),
                (p = k(e)),
                i.removeClass("mbsc-disabled"),
                t && T.val(p),
                p == r
                    ? s.addClass("mbsc-disabled")
                    : p == o && n.addClass("mbsc-disabled"),
                p !== y && a && T.trigger("change");
        }
        function S(e, t, a) {
            var n = T.attr(e);
            return void 0 === n || "" === n ? t : a ? n : +n;
        }
        function k(e) {
            return +Math.min(o, Math.max(Math.round(e / m) * m, r)).toFixed(d);
        }
        Na.call(this, t, e, !0),
            (x.getVal = function () {
                var e = parseFloat(T.val());
                return k((e = isNaN(e) ? p : e));
            }),
            (x.setVal = function (e, t, a) {
                (e = parseFloat(e)), M(isNaN(e) ? p : e, t, a);
            }),
            (x._init = function () {
                (b = T.parent().hasClass("mbsc-stepper")),
                    (v = b ? T.closest(".mbsc-stepper-cont") : T.parent()),
                    (h = x.settings),
                    (r = void 0 === e.min ? S("min", h.min) : e.min),
                    (o = void 0 === e.max ? S("max", h.max) : e.max),
                    (m = void 0 === e.step ? S("step", h.step) : e.step),
                    (d = Math.abs(m) < 1 ? (m + "").split(".")[1].length : 0),
                    (l =
                        void 0 === e.inputStyle
                            ? S("data-input-style", h.inputStyle, !0)
                            : e.inputStyle),
                    (a = T.attr("data-val") || h.val),
                    (p = k(+t.value || 0)),
                    (f = oa.themes.form[h.theme]),
                    (c = f && f.addRipple ? f : null),
                    b ||
                        v
                            .addClass(
                                "mbsc-stepper-cont mbsc-no-touch mbsc-control-w"
                            )
                            .addClass("box" == l ? "mbsc-input-box" : "")
                            .addClass(
                                "outline" == l ? "mbsc-input-outline" : ""
                            )
                            .append(
                                '<span class="mbsc-segmented mbsc-stepper"></span>'
                            )
                            .find(".mbsc-stepper")
                            .append(
                                '<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-minus ' +
                                    (p == r ? "mbsc-disabled" : "") +
                                    '" data-step="-1" tabindex="0"><span class="mbsc-segmented-content"><span class="mbsc-ic mbsc-ic-minus"></span></span></span>'
                            )
                            .append(
                                '<span class="mbsc-segmented-item mbsc-stepper-control mbsc-stepper-plus ' +
                                    (p == o ? "mbsc-disabled" : "") +
                                    '"  data-step="1" tabindex="0"><span class="mbsc-segmented-content"> <span class="mbsc-ic mbsc-ic-plus"></span></span></span>'
                            )
                            .prepend(T),
                    g &&
                        v.removeClass(g).find(".mbsc-segmented").removeClass(g),
                    (g =
                        "mbsc-" +
                        h.theme +
                        (f.baseTheme ? " mbsc-" + f.baseTheme : "") +
                        (h.rtl ? " mbsc-rtl" : " mbsc-ltr")),
                    v.addClass(g).find(".mbsc-segmented").addClass(g),
                    (s = Sa(".mbsc-stepper-minus", v)),
                    (n = Sa(".mbsc-stepper-plus", v)),
                    (i = Sa(".mbsc-stepper-control", v)),
                    b ||
                        ("left" == a
                            ? (v.addClass("mbsc-stepper-val-left"),
                              T.after(
                                  '<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>'
                              ))
                            : "right" == a
                            ? (v.addClass("mbsc-stepper-val-right"),
                              n.after(
                                  '<span class="mbsc-segmented-item"><span class="mbsc-segmented-content"></span></span>'
                              ))
                            : s.after(
                                  '<span class="mbsc-segmented-item"><span class="mbsc-segmented-content mbsc-stepper-val"></span></span>'
                              )),
                    u || (T.on("change", _), (u = ft(i, C, 150, w, !1, c))),
                    T.val(p)
                        .attr("data-role", "stepper")
                        .attr("min", r)
                        .attr("max", o)
                        .attr("step", m)
                        .addClass("mbsc-control"),
                    (t.mbscInst = x);
            }),
            (x._destroy = function () {
                T.removeClass("mbsc-control").off("change", _),
                    u.destroy(),
                    delete t.mbscInst;
            }),
            x.init();
    }
    (Ft.prototype = {
        _class: "stepper",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: { min: 0, max: 100, step: 1 },
    }),
        q("[mbsc-stepper]", (Z.Stepper = Ft));
    function Ht(t, e, a) {
        var n,
            s,
            i,
            o,
            r = this;
        Na.call(this, t, e, !0),
            (r.__init = ga),
            (r.__destroy = ga),
            (r._init = function () {
                var e;
                (o = r.settings),
                    (n = Sa(t)),
                    (e = !!s),
                    (s = (s = n.parent()).hasClass("mbsc-input-wrap")
                        ? s.parent()
                        : s),
                    (r._$parent = s),
                    i && s.removeClass(i),
                    (i = r._css + " mbsc-progress-w mbsc-control-w " + xt(o)),
                    s.addClass(i),
                    n.addClass("mbsc-control"),
                    r.__init(),
                    e || r._attachChange(),
                    r.refresh(),
                    (t.mbscInst = r);
            }),
            (r._destroy = function () {
                r.__destroy(),
                    s.removeClass(i),
                    n.removeClass("mbsc-control"),
                    delete t.mbscInst;
            }),
            a || r.init();
    }
    function It(a, e, t) {
        var n,
            s,
            i,
            l,
            o,
            r,
            c,
            d,
            m,
            u,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T,
            y,
            _,
            w,
            C,
            M,
            S,
            k,
            D,
            N,
            V,
            A,
            E,
            F,
            H,
            I,
            O,
            P = this,
            L = new Date();
        function Y(e) {
            "mousedown" === e.type && e.preventDefault(),
                !ca(e, this) ||
                    (c && !g) ||
                    a.disabled ||
                    a.readOnly ||
                    (N.stopProp && e.stopPropagation(),
                    (m = M = !(c = !0)),
                    (A = wa(e, "X")),
                    (E = wa(e, "Y")),
                    (p = A),
                    r.removeClass("mbsc-progress-anim"),
                    (s = S ? Sa(".mbsc-slider-handle", this) : l),
                    i && i.removeClass("mbsc-handle-curr"),
                    (i = s.parent().addClass("mbsc-active mbsc-handle-curr")),
                    n.addClass("mbsc-active"),
                    (v = +s.attr("data-index")),
                    (I = r[0].offsetWidth),
                    (f = r[0].getBoundingClientRect().left),
                    "mousedown" === e.type &&
                        ((x = !0),
                        Sa(document).on("mousemove", z).on("mouseup", $)),
                    "mouseenter" === e.type &&
                        ((g = !0), Sa(document).on("mousemove", z)));
        }
        function z(e) {
            c &&
                ((p = wa(e, "X")),
                (b = wa(e, "Y")),
                (u = p - A),
                (h = b - E),
                5 < Math.abs(u) && (M = !0),
                (M || x || g) &&
                    50 < Math.abs(L - new Date()) &&
                    ((L = new Date()), K(p, N.round, _ && (!g || x))),
                M
                    ? e.preventDefault()
                    : 7 < Math.abs(h) && "touchmove" == e.type && U());
        }
        function $(e) {
            c &&
                (e.preventDefault(),
                S || r.addClass("mbsc-progress-anim"),
                g && !x ? G(O[v], v, !1, !1, !0) : K(p, !0, !0),
                M || m || ("touchend" == e.type && _a(), P._onTap(O[v])),
                "mouseup" == e.type && (x = !1),
                "mouseleave" == e.type && (g = !1),
                g || U());
        }
        function R() {
            c && U();
        }
        function j() {
            var e = P._readValue(Sa(this)),
                t = +Sa(this).attr("data-index");
            e !== O[t] && ((O[t] = e), G((k[t] = e), t));
        }
        function W(e) {
            e.stopPropagation();
        }
        function J(e) {
            e.preventDefault();
        }
        function B(e) {
            var t;
            if (!a.disabled) {
                switch (e.keyCode) {
                    case 38:
                    case 39:
                        t = 1;
                        break;
                    case 40:
                    case 37:
                        t = -1;
                }
                t &&
                    (e.preventDefault(),
                    H ||
                        ((v = +Sa(this).attr("data-index")),
                        G(O[v] + D * t, v, !0),
                        (H = setInterval(function () {
                            G(O[v] + D * t, v, !0);
                        }, 200))));
            }
        }
        function q(e) {
            e.preventDefault(), clearInterval(H), (H = null);
        }
        function U() {
            (c = !1),
                i.removeClass("mbsc-active"),
                n.removeClass("mbsc-active"),
                Sa(document).off("mousemove", z).off("mouseup", $);
        }
        function K(e, t, a) {
            var n = t
                ? Math.min(
                      (Math[P._rounding || "round"](
                          Math.max((100 * (e - f)) / I, 0) / V / D
                      ) *
                          D *
                          100) /
                          (w - C + d),
                      100
                  )
                : Math.max(0, Math.min((100 * (e - f)) / I, 100));
            T && (n = 100 - n), G(Math.round((C - d + n / V) * F) / F, v, a, n);
        }
        function G(e, t, a, n, s, i) {
            var o = l.eq(t),
                r = o.parent();
            (e = Math.min(w, Math.max(e, C))),
                void 0 === i && (i = a),
                P._update
                    ? (e = P._update(e, O, t, n, S, s, r))
                    : r.css({
                          left: T ? "auto" : (n || X(e, C, w)) + "%",
                          right: T ? (n || X(e, C, w)) + "%" : "auto",
                      }),
                C < e
                    ? r.removeClass("mbsc-slider-start")
                    : (O[t] > C || s) && r.addClass("mbsc-slider-start"),
                a && (O[t] = e),
                a && k[t] != e && ((m = !0), (k[t] = e), P._fillValue(e, t, i)),
                o.attr("aria-valuenow", e);
        }
        Ht.call(this, a, e, !0),
            (P._onTap = ga),
            (P.___init = ga),
            (P.___destroy = ga),
            (P._attachChange = function () {
                n.on(N.changeEvent, j);
            }),
            (P.__init = function () {
                var e;
                l && ((e = !0), l.parent().remove()),
                    P.___init(),
                    (o = P._$parent),
                    (r = P._$track),
                    (n = o.find("input")),
                    (N = P.settings),
                    (C = P._min),
                    (w = P._max),
                    (d = P._base || 0),
                    (D = P._step),
                    (_ = P._live),
                    (F = D % 1 != 0 ? 100 / (100 * (D % 1).toFixed(2)) : 1),
                    (V = 100 / (w - C + d) || 100),
                    (S = 1 < n.length),
                    (T = N.rtl),
                    (O = []),
                    (k = []),
                    n.each(function (e) {
                        (O[e] = P._readValue(Sa(this))),
                            Sa(this).attr("data-index", e);
                    }),
                    (l = o.find(".mbsc-slider-handle")),
                    (y = o.find(
                        S ? ".mbsc-slider-handle-cont" : ".mbsc-progress-cont"
                    )[0]),
                    l.on("keydown", B).on("keyup", q).on("blur", q),
                    ma(y, "touchstart", Y, { passive: !0 }),
                    ma(y, "mousedown", Y),
                    ma(y, "touchend", $),
                    ma(y, "touchcancel", $),
                    ma(y, "pointercancel", R),
                    N.hover && (ma(y, "mouseenter", Y), ma(y, "mouseleave", $)),
                    e ||
                        (n.on("click", W),
                        o.on("click", J),
                        ma(document, "touchmove", z, { passive: !1 }));
            }),
            (P.__destroy = function () {
                o.off("click", J),
                    n.off(N.changeEvent, j).off("click", W),
                    l.off("keydown", B).off("keyup", q).off("blur", q),
                    ua(y, "touchstart", Y, { passive: !0 }),
                    ua(y, "mousedown", Y),
                    ua(y, "touchend", $),
                    ua(y, "touchcancel", $),
                    ua(y, "pointercancel", R),
                    ua(y, "mouseenter", Y),
                    ua(y, "mouseleave", $),
                    ua(document, "touchmove", z, { passive: !1 }),
                    P.___destroy();
            }),
            (P.refresh = function () {
                n.each(function (e) {
                    G(P._readValue(Sa(this)), e, !0, !1, !0, !1);
                });
            }),
            (P.getVal = function () {
                return S ? O.slice(0) : O[0];
            }),
            (P.setVal = P._setVal = function (e, t, a) {
                Sa.isArray(e) || (e = [e]),
                    Sa.each(e, function (e, t) {
                        O[e] = t;
                    }),
                    Sa.each(e, function (e, t) {
                        G(t, e, !0, !1, !0, a);
                    });
            }),
            t || P.init();
    }
    function Ot(e, t) {
        var n,
            a,
            s,
            i,
            o = this;
        Da((t = t || {}), { changeEvent: "click", round: !1 }),
            It.call(this, e, t, !0),
            (o._readValue = function () {
                return e.checked ? 1 : 0;
            }),
            (o._fillValue = function (e, t, a) {
                n.prop("checked", !!e), a && n.trigger("change");
            }),
            (o._onTap = function (e) {
                o._setVal(e ? 0 : 1);
            }),
            (o.___init = function () {
                (s = o.settings),
                    (n = Sa(e)),
                    (a = n.parent()).find(".mbsc-switch-track").remove(),
                    a.prepend(n),
                    n
                        .attr("data-role", "switch")
                        .after(
                            '<span class="mbsc-progress-cont mbsc-switch-track"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-slider-handle-cont"><span class="mbsc-slider-handle mbsc-switch-handle" data-index="0"><span class="mbsc-switch-txt-off">' +
                                s.offText +
                                '</span><span class="mbsc-switch-txt-on">' +
                                s.onText +
                                "</span></span></span></span></span>"
                        ),
                    i && i.destroy(),
                    (i = new Tt(e, s)),
                    (o._$track = a.find(".mbsc-progress-track")),
                    (o._min = 0),
                    (o._max = 1),
                    (o._step = 1);
            }),
            (o.___destroy = function () {
                i.destroy();
            }),
            (o.getVal = function () {
                return e.checked;
            }),
            (o.setVal = function (e, t, a) {
                o._setVal(e ? 1 : 0, t, a);
            }),
            o.init();
    }
    (Ot.prototype = {
        _class: "switch",
        _css: "mbsc-switch",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: { stopProp: !0, offText: "Off", onText: "On" },
    }),
        q("[mbsc-switch]", (Z.Switch = Ot));
    function Pt(s, i, e) {
        var o,
            r,
            l,
            c,
            d,
            m,
            u,
            h,
            f,
            p,
            b,
            v,
            g,
            t,
            x = this;
        function a() {
            var e = T("value", u);
            e !== g && n(e);
        }
        function T(e, t, a) {
            var n = r.attr(e);
            return void 0 === n || "" === n ? t : a ? n : +n;
        }
        function n(e, t, a, n) {
            (e = Math.min(h, Math.max(e, u))),
                c.css("width", (100 * (e - u)) / (h - u) + "%"),
                void 0 === a && (a = !0),
                void 0 === n && (n = a),
                (e === g && !t) || x._display(e),
                e !== g &&
                    ((g = e),
                    a && r.attr("value", g),
                    n && r.trigger("change"));
        }
        Ht.call(this, s, i, !0),
            (x._display = function (e) {
                (t =
                    v && b.returnAffix
                        ? v.replace(/\{value\}/, e).replace(/\{max\}/, h)
                        : e),
                    d && d.html(t),
                    o && o.html(t);
            }),
            (x._attachChange = function () {
                r.on("change", a);
            }),
            (x.__init = function () {
                var e, t, a, n;
                if (
                    ((b = x.settings),
                    (r = Sa(s)),
                    (n = !!l),
                    (l = x._$parent),
                    (u = x._min = void 0 === i.min ? T("min", b.min) : i.min),
                    (h = x._max = void 0 === i.max ? T("max", b.max) : i.max),
                    (f =
                        void 0 === i.inputStyle
                            ? T("data-input-style", b.inputStyle, !0)
                            : i.inputStyle),
                    (p =
                        void 0 === i.labelStyle
                            ? T("data-label-style", b.labelStyle, !0)
                            : i.labelStyle),
                    (g = T("value", u)),
                    (e = r.attr("data-val") || b.val),
                    (a = (a = r.attr("data-step-labels"))
                        ? JSON.parse(a)
                        : b.stepLabels),
                    (v =
                        r.attr("data-template") ||
                        (100 != h || b.template ? b.template : "{value}%")),
                    n
                        ? (e &&
                              (o.remove(),
                              l.removeClass(
                                  "mbsc-progress-value-" +
                                      ("right" == e ? "right" : "left")
                              )),
                          a && Sa(".mbsc-progress-step-label", m).remove())
                        : (at(l, null, f, p, s),
                          tt(r),
                          l
                              .find(".mbsc-input-wrap")
                              .append(
                                  '<span class="mbsc-progress-cont"><span class="mbsc-progress-track mbsc-progress-anim"><span class="mbsc-progress-bar"></span></span></span>'
                              ),
                          (c = x._$progress = l.find(".mbsc-progress-bar")),
                          (m = x._$track = l.find(".mbsc-progress-track"))),
                    r.attr("min", u).attr("max", h),
                    e &&
                        ((o = Sa('<span class="mbsc-progress-value"></span>')),
                        l
                            .addClass(
                                "mbsc-progress-value-" +
                                    ("right" == e ? "right" : "left")
                            )
                            .find(".mbsc-input-wrap")
                            .append(o)),
                    a)
                )
                    for (t = 0; t < a.length; ++t)
                        m.append(
                            '<span class="mbsc-progress-step-label" style="' +
                                (b.rtl ? "right" : "left") +
                                ": " +
                                (100 * (a[t] - u)) / (h - u) +
                                '%" >' +
                                a[t] +
                                "</span>"
                        );
                d = Sa(r.attr("data-target") || b.target);
            }),
            (x.__destroy = function () {
                l
                    .removeClass("mbsc-ic-left mbsc-ic-right")
                    .find(".mbsc-progress-cont")
                    .remove(),
                    l.find(".mbsc-input-ic").remove(),
                    r.off("change", a);
            }),
            (x.refresh = function () {
                n(T("value", u), !0, !1);
            }),
            (x.getVal = function () {
                return g;
            }),
            (x.setVal = function (e, t, a) {
                n(e, !0, t, a);
            }),
            e || x.init();
    }
    (Pt.prototype = {
        _class: "progress",
        _css: "mbsc-progress",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: { min: 0, max: 100, returnAffix: !0 },
    }),
        q("[mbsc-progress]", (Z.Progress = Pt));
    function Lt(e, t, a) {
        var n,
            s,
            r,
            l,
            i,
            c,
            d,
            m,
            u,
            h,
            f,
            o,
            p,
            b = this;
        Pt.call(this, e, t, !0);
        var v = b.__init,
            g = b.__destroy;
        It.call(this, e, t, !0);
        var x = b.__init,
            T = b.__destroy;
        (b.__init = function () {
            v(), x();
        }),
            (b.__destroy = function () {
                g(), T();
            }),
            (b._update = function (e, t, a, n, s, i, o) {
                return (
                    m
                        ? 0 === a
                            ? ((e = Math.min(e, t[1])),
                              r.css({
                                  width: X(t[1], f, h) - X(e, f, h) + "%",
                                  left: u ? "auto" : X(e, f, h) + "%",
                                  right: u ? X(e, f, h) + "%" : "auto",
                              }))
                            : ((e = Math.max(e, t[0])),
                              r.css({
                                  width: X(e, f, h) - X(t[0], f, h) + "%",
                              }))
                        : s || !c
                        ? o.css({
                              left: u ? "auto" : (n || X(e, f, h)) + "%",
                              right: u ? (n || X(e, f, h)) + "%" : "auto",
                          })
                        : r.css("width", (n || X(e, f, h)) + "%"),
                    d && l.eq(a).html(e),
                    s || (t[a] == e && !i) || b._display(e),
                    e
                );
            }),
            (b._readValue = function (e) {
                return +e.val();
            }),
            (b._fillValue = function (e, t, a) {
                n.eq(t).val(e), a && n.eq(t).trigger("change");
            }),
            (b._markupReady = function () {
                var e, t;
                if ((d && s.addClass("mbsc-slider-has-tooltip"), 1 != o))
                    for (t = (h - f) / o, e = 0; e <= t; ++e)
                        i.append(
                            '<span class="mbsc-slider-step" style="' +
                                (u ? "right" : "left") +
                                ":" +
                                (100 / t) * e +
                                '%"></span>'
                        );
                n.each(function (e) {
                    "range" == this.type &&
                        Sa(this).attr("min", f).attr("max", h).attr("step", o),
                        (c ? r : i).append(
                            '<span class="mbsc-slider-handle-cont' +
                                (m && !e ? " mbsc-slider-handle-left" : "") +
                                '"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' +
                                f +
                                '" aria-valuemax="' +
                                h +
                                '" data-index="' +
                                e +
                                '"></span>' +
                                (d
                                    ? '<span class="mbsc-slider-tooltip"></span>'
                                    : "") +
                                "</span>"
                        );
                }),
                    (l = s.find(".mbsc-slider-tooltip"));
            }),
            (b.___init = function () {
                s &&
                    (s.removeClass("mbsc-slider-has-tooltip"),
                    1 != o && Sa(".mbsc-slider-step", i).remove()),
                    (s = b._$parent),
                    (i = b._$track),
                    (r = b._$progress),
                    (n = s.find("input")),
                    (p = b.settings),
                    (f = b._min),
                    (h = b._max),
                    (b._step = o =
                        void 0 === t.step ? +n.attr("step") || p.step : t.step),
                    (b._live = P("data-live", p.live, n)),
                    (d = P("data-tooltip", p.tooltip, n)),
                    (c = P("data-highlight", p.highlight, n) && n.length < 3),
                    (m = c && 2 == n.length),
                    (u = p.rtl),
                    b._markupReady();
            }),
            a || b.init();
    }
    (Lt.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-slider",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 0,
            max: 100,
            step: 1,
            live: !0,
            highlight: !0,
            round: !0,
            returnAffix: !0,
        },
    }),
        q("[mbsc-slider]", (Z.Slider = Lt));
    function Yt(e, t, a) {
        var o,
            n,
            r,
            s,
            i,
            l,
            c,
            d = this,
            m = Sa(e);
        Lt.call(this, e, t, !0),
            (d._update = function (e, t, a, n, s, i) {
                return (
                    o.css("width", X(e, 0, r) + "%"),
                    s || (t[a] == e && !i) || d._display(e),
                    e
                );
            }),
            (d._markupReady = function () {
                var e,
                    t = "",
                    a = "";
                for (
                    n = d._$track,
                        o = d._$progress,
                        c = d.settings,
                        s = d._min,
                        r = d._max,
                        d._base = s,
                        d._rounding = c.rtl ? "floor" : "ceil",
                        i = m.attr("data-empty") || c.empty,
                        l = m.attr("data-filled") || c.filled,
                        e = 0;
                    e < r;
                    ++e
                )
                    (t += '<span class="mbsc-ic mbsc-ic-' + i + '"></span>'),
                        (a +=
                            '<span class="mbsc-ic mbsc-ic-' + l + '"></span>');
                n.html(t),
                    n.append(o),
                    o.html(a),
                    n.append(
                        '<span class="mbsc-rating-handle-cont"><span tabindex="0" class="mbsc-slider-handle" aria-valuemin="' +
                            s +
                            '" aria-valuemax="' +
                            r +
                            '" data-index="0"></span></span>'
                    );
            }),
            a || d.init();
    }
    (Yt.prototype = {
        _class: "progress",
        _css: "mbsc-progress mbsc-rating",
        _hasTheme: !0,
        _hasLang: !0,
        _hasDef: !0,
        _defaults: {
            changeEvent: "change",
            stopProp: !0,
            min: 1,
            max: 5,
            step: 1,
            live: !0,
            round: !0,
            hover: !0,
            highlight: !0,
            returnAffix: !0,
            empty: "star",
            filled: "star3",
        },
    }),
        q("[mbsc-rating]", (Z.Rating = Yt));
    var zt = 1,
        $t = (function () {
            function e(e, t) {
                var a,
                    n,
                    s,
                    i = this,
                    o = Sa(e);
                if (
                    ((this.settings = t),
                    (this._isOpen = t.isOpen || !1),
                    o.addClass(
                        "mbsc-collapsible " +
                            (this._isOpen ? "mbsc-collapsible-open" : "")
                    ),
                    (a = (s = o.hasClass("mbsc-card")
                        ? ((n = o
                              .find(".mbsc-card-header")
                              .eq(0)
                              .addClass("mbsc-collapsible-header")),
                          o
                              .find(".mbsc-card-content")
                              .eq(0)
                              .addClass("mbsc-collapsible-content"))
                        : o.hasClass("mbsc-form-group") ||
                          o.hasClass("mbsc-form-group-inset")
                        ? ((n = o
                              .find(".mbsc-form-group-title")
                              .eq(0)
                              .addClass("mbsc-collapsible-header")),
                          o
                              .find(".mbsc-form-group-content")
                              .eq(0)
                              .addClass("mbsc-collapsible-content"))
                        : ((n = o.find(".mbsc-collapsible-header").eq(0)),
                          o.find(".mbsc-collapsible-content").eq(0)))[0]) &&
                        !a.id &&
                        (a.id = "mbsc-collapsible-" + zt++),
                    n.length && a)
                ) {
                    var r = Sa(
                        '<span class="mbsc-collapsible-icon mbsc-ic mbsc-ic-arrow-down5"></span>'
                    );
                    $(this, n, function () {
                        i.collapse();
                    }),
                        n
                            .attr("role", "button")
                            .attr("aria-expanded", this._isOpen)
                            .attr("aria-controls", a.id)
                            .attr("tabindex", "0")
                            .on("mousedown", function (e) {
                                e.preventDefault();
                            })
                            .on("keydown", function (e) {
                                (32 !== e.which && 13 != e.keyCode) ||
                                    (e.preventDefault(), i.collapse());
                            })
                            .append(r);
                }
                ((e.mbscInst = this)._$header = n),
                    (this._$content = s),
                    (this._$elm = o),
                    (this._$accordionParent = o.parent(
                        "[mbsc-accordion], mbsc-accordion, .mbsc-accordion"
                    )),
                    (this.show = this.show.bind(this)),
                    (this.hide = this.hide.bind(this)),
                    (this.toggle = this.toggle.bind(this));
            }
            var t = e.prototype;
            return (
                (t.collapse = function (e) {
                    var t = this._$elm,
                        a = this._$content;
                    void 0 === e && (e = !this._isOpen),
                        (e && this._isOpen) ||
                            (!e && !this._isOpen) ||
                            !a.length ||
                            (e
                                ? (g &&
                                      a
                                          .on("transitionend", function e() {
                                              a.off("transitionend", e).css(
                                                  "height",
                                                  ""
                                              );
                                          })
                                          .css("height", a[0].scrollHeight),
                                  t.addClass("mbsc-collapsible-open"))
                                : (g &&
                                      a.css(
                                          "height",
                                          getComputedStyle(a[0]).height
                                      ),
                                  setTimeout(function () {
                                      a.css("height", 0),
                                          t.removeClass(
                                              "mbsc-collapsible-open"
                                          );
                                  }, 50)),
                            e &&
                                this._$accordionParent &&
                                this._$accordionParent
                                    .find(".mbsc-collapsible-open")
                                    .each(function () {
                                        this !== t[0] && this.mbscInst.hide();
                                    }),
                            (this._isOpen = e),
                            this._$header.attr("aria-expanded", this._isOpen));
                }),
                (t.show = function () {
                    this.collapse(!0);
                }),
                (t.hide = function () {
                    this.collapse(!1);
                }),
                (t.toggle = function () {
                    this.collapse();
                }),
                (t.destroy = function () {
                    this._$elm.removeClass(
                        "mbsc-collapsible mbsc-collapsible-open"
                    ),
                        this._$content.removeClass("mbsc-collapsible-content"),
                        this._$header
                            .removeClass("mbsc-collapsible-header")
                            .find(".mbsc-collapsible-icon")
                            .remove();
                }),
                e
            );
        })();
    Z.CollapsibleBase = $t;
    var Rt = 0;
    function jt(e, n, s, t) {
        Sa("input,select,textarea,progress,button", e).each(function () {
            var e = this,
                t = Sa(e),
                a = Ca(t);
            if ("false" != t.attr("data-enhance"))
                if (t.hasClass("mbsc-control"))
                    e.mbscInst &&
                        e.mbscInst.option({
                            theme: s.theme,
                            lang: s.lang,
                            rtl: s.rtl,
                            onText: s.onText,
                            offText: s.offText,
                            stopProp: s.stopProp,
                        });
                else
                    switch ((e.id || (e.id = "mbsc-form-control-" + ++Rt), a)) {
                        case "button":
                        case "submit":
                            n[e.id] = new wt(e, {
                                theme: s.theme,
                                rtl: s.rtl,
                                tap: s.tap,
                            });
                            break;
                        case "switch":
                            n[e.id] = new Ot(e, {
                                theme: s.theme,
                                lang: s.lang,
                                rtl: s.rtl,
                                tap: s.tap,
                                onText: s.onText,
                                offText: s.offText,
                                stopProp: s.stopProp,
                            });
                            break;
                        case "checkbox":
                            n[e.id] = new Ct(e, {
                                tap: s.tap,
                                theme: s.theme,
                                rtl: s.rtl,
                            });
                            break;
                        case "range":
                            Sa(e).parent().hasClass("mbsc-slider") ||
                                (n[e.id] = new Lt(e, {
                                    theme: s.theme,
                                    lang: s.lang,
                                    rtl: s.rtl,
                                    stopProp: s.stopProp,
                                    labelStyle: s.labelStyle,
                                }));
                            break;
                        case "rating":
                            n[e.id] = new Yt(e, {
                                theme: s.theme,
                                lang: s.lang,
                                rtl: s.rtl,
                                stopProp: s.stopProp,
                            });
                            break;
                        case "progress":
                            n[e.id] = new Pt(e, {
                                theme: s.theme,
                                lang: s.lang,
                                rtl: s.rtl,
                                labelStyle: s.labelStyle,
                            });
                            break;
                        case "radio":
                            n[e.id] = new Mt(e, {
                                tap: s.tap,
                                theme: s.theme,
                                rtl: s.rtl,
                            });
                            break;
                        case "select":
                        case "select-one":
                        case "select-multiple":
                            n[e.id] = new St(e, {
                                tap: s.tap,
                                inputStyle: s.inputStyle,
                                labelStyle: s.labelStyle,
                                theme: s.theme,
                                rtl: s.rtl,
                            });
                            break;
                        case "textarea":
                            n[e.id] = new At(e, {
                                tap: s.tap,
                                inputStyle: s.inputStyle,
                                labelStyle: s.labelStyle,
                                theme: s.theme,
                                rtl: s.rtl,
                            });
                            break;
                        case "segmented":
                            n[e.id] = new Et(e, {
                                theme: s.theme,
                                rtl: s.rtl,
                                tap: s.tap,
                                inputStyle: s.inputStyle,
                            });
                            break;
                        case "stepper":
                            n[e.id] = new Ft(e, { theme: s.theme, rtl: s.rtl });
                            break;
                        case "hidden":
                            return;
                        default:
                            n[e.id] = new _t(e, {
                                tap: s.tap,
                                inputStyle: s.inputStyle,
                                labelStyle: s.labelStyle,
                                theme: s.theme,
                                rtl: s.rtl,
                            });
                    }
        }),
            Sa("[data-collapsible]:not(.mbsc-collapsible)", e).each(
                function () {
                    var e = this,
                        t = Sa(e).attr("data-open");
                    e.id || (e.id = "mbsc-form-control-" + ++Rt),
                        (n[e.id] = new $t(e, {
                            isOpen: void 0 !== t && "false" != t,
                        })),
                        (ka[e.id] = n[e.id]);
                }
            ),
            t || Nt();
    }
    function Wt(a, e) {
        var n,
            s,
            i = "",
            o = Sa(a),
            t = {},
            r = this;
        function l() {
            o.removeClass("mbsc-no-touch");
        }
        Na.call(this, a, e, !0),
            (r.refresh = function (e) {
                jt(o, t, n, e);
            }),
            (r._init = function () {
                var e =
                    void 0 !== n.collapsible ||
                    void 0 !== o.attr("data-collapsible");
                if (
                    (o.hasClass("mbsc-card") ||
                        (o.show(), ma(a, "touchstart", l, { passive: !0 })),
                    i && o.removeClass(i),
                    (i = r.remote.cards.cssClass),
                    o.addClass(i).removeClass("mbsc-cloak"),
                    e && !s)
                ) {
                    var t = o.attr("data-open");
                    s = new $t(a, {
                        isOpen:
                            (void 0 !== t && "false" != t) ||
                            !0 === n.collapsible,
                    });
                }
                o.append(r._getText(oa, 0.5)), r.refresh();
            }),
            (r._destroy = function () {
                for (var e in (o.removeClass(i),
                ua(a, "touchstart", l, { passive: !0 }),
                t))
                    t[e].destroy();
                s && s.destroy();
            }),
            (r.toggle = function () {
                s && s.toggle();
            }),
            (r.hide = function () {
                s && s.hide();
            }),
            (r.show = function () {
                s && s.show();
            }),
            (n = r.settings),
            r.init();
    }
    function Jt(e) {
        var a = [
            Math.round(e.r).toString(16),
            Math.round(e.g).toString(16),
            Math.round(e.b).toString(16),
        ];
        return (
            Sa.each(a, function (e, t) {
                1 == t.length && (a[e] = "0" + t);
            }),
            "#" + a.join("")
        );
    }
    function Bt(e) {
        return {
            r:
                (e = parseInt(-1 < e.indexOf("#") ? e.substring(1) : e, 16)) >>
                16,
            g: (65280 & e) >> 8,
            b: 255 & e,
            toString: function () {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            },
        };
    }
    function qt(e) {
        var t,
            a,
            n,
            s = e.h,
            i = (255 * e.s) / 100,
            o = (255 * e.v) / 100;
        if (0 == i) t = a = n = o;
        else {
            var r = ((255 - i) * o) / 255,
                l = ((s % 60) * (o - r)) / 60;
            360 == s && (s = 0),
                s < 60
                    ? ((t = o), (a = (n = r) + l))
                    : s < 120
                    ? ((n = r), (t = (a = o) - l))
                    : s < 180
                    ? ((a = o), (n = (t = r) + l))
                    : s < 240
                    ? ((t = r), (a = (n = o) - l))
                    : s < 300
                    ? ((n = o), (t = (a = r) + l))
                    : s < 360
                    ? ((a = r), (n = (t = o) - l))
                    : (t = a = n = 0);
        }
        return {
            r: t,
            g: a,
            b: n,
            toString: function () {
                return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
            },
        };
    }
    function Ut(e) {
        var t,
            a,
            n = 0,
            s = Math.min(e.r, e.g, e.b),
            i = Math.max(e.r, e.g, e.b),
            o = i - s;
        return (
            (n = (t = (a = i) ? (255 * o) / i : 0)
                ? e.r == i
                    ? (e.g - e.b) / o
                    : e.g == i
                    ? 2 + (e.b - e.r) / o
                    : 4 + (e.r - e.g) / o
                : -1),
            (n *= 60) < 0 && (n += 360),
            {
                h: n,
                s: (t *= 100 / 255),
                v: (a *= 100 / 255),
                toString: function () {
                    return (
                        "hsv(" +
                        Math.round(this.h) +
                        "," +
                        Math.round(this.s) +
                        "%," +
                        Math.round(this.v) +
                        "%)"
                    );
                },
            }
        );
    }
    function Kt(e) {
        var t,
            a,
            n = e.r / 255,
            s = e.g / 255,
            i = e.b / 255,
            o = Math.max(n, s, i),
            r = Math.min(n, s, i),
            l = (o + r) / 2;
        if (o == r) t = a = 0;
        else {
            var c = o - r;
            switch (((a = 0.5 < l ? c / (2 - o - r) : c / (o + r)), o)) {
                case n:
                    t = (s - i) / c + (s < i ? 6 : 0);
                    break;
                case s:
                    t = (i - n) / c + 2;
                    break;
                case i:
                    t = (n - s) / c + 4;
            }
            t /= 6;
        }
        return {
            h: Math.round(360 * t),
            s: Math.round(100 * a),
            l: Math.round(100 * l),
            toString: function () {
                return "hsl(" + this.h + "," + this.s + "%," + this.l + "%)";
            },
        };
    }
    function Gt(e) {
        return Kt(Bt(e));
    }
    function Xt(e) {
        return Jt(
            (function (e) {
                var t,
                    a,
                    n,
                    s,
                    i,
                    o,
                    r = e.h,
                    l = e.s,
                    c = e.l;
                return (
                    isFinite(r) || (r = 0),
                    isFinite(l) || (l = 0),
                    isFinite(c) || (c = 0),
                    (r /= 60) < 0 && (r = 6 - (-r % 6)),
                    (r %= 6),
                    (l = Math.max(0, Math.min(1, l / 100))),
                    (c = Math.max(0, Math.min(1, c / 100))),
                    (o =
                        (i = (1 - Math.abs(2 * c - 1)) * l) *
                        (1 - Math.abs((r % 2) - 1))),
                    (n =
                        r < 1
                            ? ((t = i), (a = o), 0)
                            : r < 2
                            ? ((t = o), (a = i), 0)
                            : r < 3
                            ? ((t = 0), (a = i), o)
                            : r < 4
                            ? ((t = 0), (a = o), i)
                            : r < 5
                            ? ((t = o), (a = 0), i)
                            : ((t = i), (a = 0), o)),
                    (s = c - i / 2),
                    {
                        r: Math.round(255 * (t + s)),
                        g: Math.round(255 * (a + s)),
                        b: Math.round(255 * (n + s)),
                        toString: function () {
                            return (
                                "rgb(" +
                                this.r +
                                "," +
                                this.g +
                                "," +
                                this.b +
                                ")"
                            );
                        },
                    }
                );
            })(e)
        );
    }
    function Zt(e) {
        return Jt(qt(e));
    }
    function Qt(e) {
        return Ut(Bt(e));
    }
    (Wt.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "card",
        _defaults: { tap: v, stopProp: !0, rtl: !1 },
    }),
        q("[mbsc-card]", (Z.Card = Wt), !0),
        O("card", Wt, !1);
    function ea(a, e, t) {
        var c,
            n,
            d,
            s,
            m,
            u,
            i,
            o,
            r,
            l,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T,
            y,
            _,
            w,
            C,
            M,
            S,
            k,
            D = this,
            N = Sa(a),
            V = 0,
            A = {},
            E = {};
        function F(e, t, a) {
            if (!a) {
                D._value = D._hasValue ? D._tempValue.slice(0) : null;
                for (var n = 0; n < d.length; ++n)
                    d[n].tempChangedColor &&
                        D._value &&
                        -1 != D._value.indexOf(d[n].tempChangedColor) &&
                        (d[n].changedColor = d[n].tempChangedColor),
                        delete d[n].tempChangedColor;
            }
            e &&
                (D._isInput && N.val(D._hasValue ? D._tempValue : ""),
                s("onFill", {
                    valueText: D._hasValue ? D._tempValue : "",
                    change: t,
                }),
                t &&
                    ((A = Da(!0, {}, E)),
                    (D._preventChange = !0),
                    N.trigger("change")),
                Y(D._value, !0));
        }
        function H(e, t) {
            return (
                '<div class="mbsc-color-input-item" data-color="' +
                (void 0 !== (t = void 0 !== t ? t : O(e)) ? t : e) +
                '" style="background: ' +
                e +
                ';">' +
                (T
                    ? ""
                    : '<div class="mbsc-color-input-item-close mbsc-ic mbsc-ic-material-close"></div>') +
                "</div>"
            );
        }
        function I(e) {
            f[0].style.background = e
                ? ba +
                  "linear-gradient(left, " +
                  (c.rtl ? "#000000" : "#FFFFFF") +
                  " 0%, " +
                  e +
                  " 50%, " +
                  (c.rtl ? "#FFFFFF" : "#000000") +
                  " 100%)"
                : "";
        }
        function O(e) {
            if (Object.keys(E).length && !isNaN(e)) return e;
            for (var t in d)
                if (e == d[t].color || e == d[t].changedColor) return t;
        }
        function P(e, t) {
            var a,
                n = e.match(/\d+/gim);
            switch (!0) {
                case -1 < e.indexOf("rgb"):
                    a = Jt({ r: n[0], g: n[1], b: n[2] });
                    break;
                case -1 < e.indexOf("hsl"):
                    a = Xt({ h: n[0], s: n[1], l: n[2] });
                    break;
                case -1 < e.indexOf("hsv"):
                    a = Zt({ h: n[0], s: n[1], v: n[2] });
                    break;
                case -1 < e.indexOf("#"):
                    a = e;
            }
            return (function (e, t) {
                switch (t) {
                    case "rgb":
                        return Bt(e);
                    case "hsl":
                        return Gt(e);
                    case "hsv":
                        return Qt(e);
                    default:
                        return e;
                }
            })(a, t || c.format);
        }
        function L(e, t) {
            Sa(".mbsc-color-active", t).removeClass("mbsc-color-active"),
                p &&
                    (e.parent().addClass("mbsc-color-active"),
                    h &&
                        e &&
                        void 0 !== V &&
                        M.eq(V).parent().addClass("mbsc-color-active"));
        }
        function Y(e, t) {
            var a,
                n,
                s = [],
                i = 0,
                o = Sa.map(d, function (e) {
                    return e.changedColor || e.color;
                });
            if (T) {
                if (
                    ((e = Sa.isArray(e) ? e[0] : e),
                    -1 < (n = o.indexOf(e)) && s.push(n),
                    e && !s.length && p)
                ) {
                    var r = +Sa(".mbsc-color-input-item", w).attr("data-color");
                    isNaN(r) ? (r = void 0) : s.push(r), (g = r);
                }
            } else if (e)
                if (h && p)
                    for (var l in A)
                        void 0 !== A[l].colorIndex && s.push(+A[l].colorIndex);
                else
                    for (a = 0; a < e.length; ++a)
                        -1 < (n = o.indexOf(e[a])) &&
                            (s.push(n), (o[n] = "temp" + a));
            for (a = 0; a < s.length; ++a)
                d[s[a]] &&
                    z(!0, s[a], i++, d[s[a]].changedColor || d[s[a]].color, !0);
            for (a = 0; a < d.length; ++a)
                -1 == s.indexOf(a) &&
                    z(!1, a, void 0, d[a].changedColor || d[a].color, !1);
            if (h)
                for (a = i; a < c.select; ++a)
                    (E[a] = {}),
                        M &&
                            M.eq(a)
                                .addClass("mbsc-color-preview-item-empty")
                                .css({ background: "transparent" });
            (A = Da(!0, {}, E)),
                !1 !== t &&
                    (function () {
                        if (x) {
                            var e,
                                t = "";
                            if ((w.empty(), D._hasValue)) {
                                if (T) t += H(D._value, g);
                                else
                                    for (e = 0; e < D._value.length; ++e)
                                        t += H(
                                            D._value[e],
                                            Object.keys(E).length &&
                                                E[e].colorIndex
                                                ? E[e].colorIndex
                                                : O(D._value[e])
                                        );
                                w.append(t),
                                    D.tap(
                                        Sa(".mbsc-color-input-item", w),
                                        function (e) {
                                            if (
                                                Sa(e.target).hasClass(
                                                    "mbsc-color-input-item-close"
                                                )
                                            ) {
                                                var t = Sa(this).index();
                                                e.stopPropagation(),
                                                    e.preventDefault(),
                                                    void 0 === g &&
                                                        (g = Sa(e.target)
                                                            .parent()
                                                            .attr(
                                                                "data-color"
                                                            )),
                                                    h &&
                                                        d[g] &&
                                                        ((V = d[g].previewInd),
                                                        M.eq(V)
                                                            .parent()
                                                            .removeClass(
                                                                "mbsc-color-active"
                                                            ),
                                                        (A[t] = {}),
                                                        (E[t] = {})),
                                                    D._value.splice(t, 1),
                                                    D.setVal(D._value, !0, !0);
                                            } else
                                                p &&
                                                    "inline" !== c.display &&
                                                    ((g = Sa(e.target).attr(
                                                        "data-color"
                                                    )),
                                                    isNaN(g) && (g = O(g)),
                                                    g &&
                                                        d[g] &&
                                                        ((d[g].selected = !0),
                                                        (V = d[g].previewInd),
                                                        setTimeout(function () {
                                                            m.scroll(
                                                                C.eq(g),
                                                                400
                                                            ),
                                                                h &&
                                                                    u.scroll(
                                                                        M.eq(V),
                                                                        400
                                                                    );
                                                        }, 200)));
                                        }
                                    );
                            }
                        }
                    })();
        }
        function z(e, t, a, n, s, i) {
            if (
                h &&
                s &&
                ((E[a].colorIndex = e ? t : void 0),
                (E[a].color = e ? n : void 0),
                M)
            ) {
                var o = M.eq(a);
                o
                    .removeClass("mbsc-color-preview-item-empty")
                    .css({ background: e ? n : "transparent" }),
                    e ||
                        o
                            .addClass("mbsc-color-preview-item-empty")
                            .parent()
                            .removeClass("mbsc-color-active");
            }
            i &&
                (e
                    ? D._tempValue.splice(a, 0, n)
                    : D._tempValue.splice(D._tempValue.indexOf(n), 1)),
                C &&
                    (e
                        ? C.eq(t).addClass("mbsc-color-selected")
                        : C.eq(t)
                              .removeClass("mbsc-color-selected")
                              .parent()
                              .removeClass("mbsc-color-active")),
                (d[t].previewInd = e ? a : void 0),
                (d[t].selected = e);
        }
        function $(e, t) {
            void 0 !== e && (T || (d[e] && d[e].selected))
                ? d[(g = e)] &&
                  ((o = d[e].changedColor || d[e].color),
                  (S = C.eq(e)),
                  p &&
                      (L(C.eq(e), t || ""),
                      ((r = P(d[e].color, "hsl")).l = P(o, "hsl").l),
                      I(d[e].color),
                      v.setVal(100 - r.l, !1, !1)))
                : p && I();
        }
        function R(e, t) {
            var a = Sa(e.target).index();
            (g = E[a].colorIndex),
                (S = C.eq(g)),
                (V = a),
                $(g, t),
                m.scroll(S, 250),
                s("onPreviewItemTap", {
                    target: e.target,
                    value: E[a].color,
                    index: a,
                });
        }
        function j(e, t) {
            var a = !1,
                n = Sa(".mbsc-color-selected", t);
            if ((S = Sa(e.target)).hasClass("mbsc-color-clear-item"))
                return (o = ""), void D.clear();
            (T || y > +n.length || S.hasClass("mbsc-color-selected")) &&
                oa.eHzJD &&
                ((g = S.attr("data-index")),
                h &&
                    ((V =
                        void 0 !== d[g].previewInd
                            ? d[g].previewInd
                            : (function () {
                                  var e;
                                  for (e = 0; e < c.select; ++e)
                                      if (void 0 === E[e].colorIndex) return e;
                              })()),
                    (a =
                        p &&
                        S.hasClass("mbsc-color-selected") &&
                        !S.parent().hasClass("mbsc-color-active")),
                    6 < M.length && u.scroll(M.eq(V))),
                (o = d[g].changedColor || d[g].color),
                T
                    ? (n.removeClass("mbsc-color-selected"),
                      (D._tempValue = o) &&
                          S.toggleClass("mbsc-color-selected"),
                      L(S, t))
                    : (L(S, t), a || z(!d[g].selected, g, V, o, !0, !0)),
                $(g, t),
                D.live && (D._fillValue(), s("onSet", { value: D._value })),
                s("onItemTap", {
                    target: e.target,
                    value: o,
                    selected: d[g].selected,
                    index: g,
                }),
                D._updateHeader());
        }
        Ne.call(this, a, e, !0),
            (D.setVal = D._setVal = function (e, t, a, n) {
                (D._hasValue = null != e),
                    (D._tempValue = T
                        ? Sa.isArray(e)
                            ? e[0]
                            : e
                        : Sa.isArray(e)
                        ? e
                        : e
                        ? [e]
                        : []),
                    F(t, void 0 === a ? t : a, n);
            }),
            (D.getVal = D._getVal = function (e) {
                return D._hasValue || e
                    ? _
                        ? (function () {
                              var e,
                                  t = [];
                              for (e = 0; e < d.length; ++e)
                                  d[e].selected && t.push(d[e]);
                              return t;
                          })()
                        : D[e ? "_tempValue" : "_value"]
                    : null;
            }),
            (D._readValue = function () {
                var e = N.val() || "";
                (D._hasValue = !1),
                    0 !== e.length && "" !== e && (D._hasValue = !0),
                    D._hasValue
                        ? ((D._tempValue = T
                              ? e
                              : "hex" == c.format
                              ? e.split(",")
                              : e.match(
                                    /[a-z]{3}\((\d+\.?\d{0,}?),\s*([\d.]+)%{0,},\s*([\d.]+)%{0,}\)/gim
                                )),
                          F(!0))
                        : (D._tempValue = []),
                    Y(D._tempValue, D._hasValue);
            }),
            (D._fillValue = function () {
                F((D._hasValue = !0), !0);
            }),
            (D._generateContent = function () {
                var e,
                    t,
                    a,
                    n = i ? 1 : 0;
                for (
                    b = l ? Math.ceil((d.length + n) / c.rows) : c.rows,
                        t =
                            '<div class="mbsc-color-scroll-cont mbsc-w-p ' +
                            (l ? "" : "mbsc-color-vertical") +
                            '"><div class="mbsc-color-cont">' +
                            (l ? '<div class="mbsc-color-row">' : ""),
                        e = 0;
                    e < d.length;
                    ++e
                )
                    (a = d[e].changedColor || d[e].color),
                        i &&
                            0 === e &&
                            (t +=
                                '<div class="mbsc-color-item-c"><div tabindex="0" class="mbsc-color-clear-item mbsc-btn-e mbsc-color-selected"><div class="mbsc-color-clear-cross"></div></div></div>'),
                        0 !== e &&
                            (e + n) % b == 0 &&
                            (t += l
                                ? '</div><div class="mbsc-color-row">'
                                : ""),
                        (t +=
                            '<div class="mbsc-color-item-c"><div tabindex="0" data-index="' +
                            e +
                            '" class="mbsc-color-item mbsc-btn-e mbsc-ic mbsc-ic-material-check mbsc-color-btn-e ' +
                            (d[e].selected ? "mbsc-color-selected" : "") +
                            '"  style="background:' +
                            a +
                            '"></div>' +
                            D._getText(oa, 0.2) +
                            "</div>");
                if (
                    ((t += "</div></div>" + (l ? "</div>" : "")),
                    p &&
                        (t +=
                            '<div class="mbsc-color-slider-cont"><input class="mbsc-color-slider" type="range" data-highlight="false" value="50" min="0" max="100"/></div>'),
                    h)
                ) {
                    for (var s in ((t +=
                        '<div class="mbsc-color-preview-cont"><div class="mbsc-color-refine-preview">'),
                    A))
                        t +=
                            '<div class="mbsc-color-preview-item-c mbsc-btn-e mbsc-color-btn-e" tabindex="0"><div class="mbsc-color-preview-item ' +
                            (A[s].color
                                ? ""
                                : "mbsc-color-preview-item-empty") +
                            '" style="background: ' +
                            (A[s].color || "initial") +
                            ';"></div></div>';
                    t += "</div></div>";
                }
                return t;
            }),
            (D._position = function (e) {
                var t, a;
                l ||
                    ((t = e.find(".mbsc-color-cont")),
                    (a = Math.ceil(
                        t.find(".mbsc-color-item-c")[0].offsetWidth
                    )),
                    t.width(
                        Math.min(
                            Math.floor(e.find(".mbsc-fr-c").width() / a),
                            Math.round(d.length / c.rows)
                        ) *
                            a +
                            1
                    )),
                    m && m.refresh(),
                    u && u.refresh();
            }),
            (D._markupInserted = function (t) {
                l ||
                    t
                        .find(".mbsc-color-scroll-cont")
                        .css(
                            "max-height",
                            t.find(".mbsc-color-item-c")[0].offsetHeight *
                                c.rows
                        ),
                    (m = new pt(t.find(".mbsc-color-scroll-cont")[0], {
                        axis: l ? "X" : "Y",
                        rtl: c.rtl,
                        elastic: 60,
                        stopProp: !1,
                        mousewheel: c.mousewheel,
                        onBtnTap: function (e) {
                            j(e, t);
                        },
                    }));
            }),
            (D._attachEvents = function (t) {
                var e;
                (C = Sa(".mbsc-color-item", t)),
                    t.on("keydown", ".mbsc-color-btn-e", function (e) {
                        e.stopPropagation(),
                            32 == e.keyCode &&
                                (e.target.classList.contains("mbsc-color-item")
                                    ? j(e, t)
                                    : R(e, t));
                    }),
                    h && (M = Sa(".mbsc-color-preview-item", t)),
                    p &&
                        (t.addClass("mbsc-color-refine"),
                        (k = Sa(".mbsc-color-slider", t)),
                        (v = new Lt(k[0], { theme: c.theme, rtl: c.rtl })),
                        (f = t.find(".mbsc-progress-track")),
                        g && D._value && $(g, t),
                        k.on("change", function () {
                            void 0 !== g &&
                                (T || (d[g] && d[g].selected)) &&
                                ((r.l = 100 - this.value),
                                (e = P(r.toString()).toString()),
                                T
                                    ? (D._tempValue = e)
                                    : (D._tempValue[
                                          void 0 !== V ? V : D._tempValue.length
                                      ] = e),
                                (d[g].tempChangedColor = e),
                                C.eq(g).css("background", e),
                                h &&
                                    ((E[V].color = e),
                                    M.eq(V)
                                        .removeClass(
                                            "mbsc-color-preview-item-empty"
                                        )
                                        .css({ background: e })),
                                D.live && Ta(D._fillValue()));
                        })),
                    h &&
                        (u = new pt(t.find(".mbsc-color-preview-cont")[0], {
                            axis: "X",
                            rtl: c.rtl,
                            stopProp: !1,
                            mousewheel: c.mousewheel,
                            onBtnTap: function (e) {
                                R(e, t);
                            },
                        })),
                    D._updateHeader();
            }),
            (D._markupRemove = function () {
                m && m.destroy(), v && v.destroy(), u && u.destroy();
            }),
            (D.__processSettings = function () {
                var e, t;
                if (
                    ((c = D.settings),
                    (s = D.trigger),
                    (l = "horizontal" == c.navigation),
                    (D._value = []),
                    (D._tempValue = []),
                    (T = "single" == c.select),
                    (i = void 0 !== c.clear ? c.clear : T),
                    !(t = c.data || []).length)
                )
                    switch (c.format) {
                        case "rgb":
                            (t = [
                                "rgb(255,235,60)",
                                "rgb(255,153,0)",
                                "rgb(244,68,55)",
                                "rgb(234,30,99)",
                                "rgb(156,38,176)",
                                "rgb(104,58,183)",
                                "rgb(63,81,181)",
                                "rgb(33,150,243)",
                                "rgb(0,151,136)",
                                "rgb(75,175,79)",
                                "rgb(126,93,78)",
                                "rgb(158,158,158)",
                            ]),
                                i && t.splice(10, 0, "rgb(83, 71, 65)");
                            break;
                        case "hsl":
                            (t = [
                                "hsl(54,100%,62%)",
                                "hsl(36,100%,50%)",
                                "hsl(4,90%,59%)",
                                "hsl(340,83%,52%)",
                                "hsl(291,64%,42%)",
                                "hsl(262,52%,47%)",
                                "hsl(231,48%,48%)",
                                "hsl(207,90%,54%)",
                                "hsl(174,100%,30%)",
                                "hsl(122,40%,49%)",
                                "hsl(19,24%,40%)",
                                "hsl(0,0%,62%)",
                            ]),
                                i && t.splice(10, 0, "hsl(20, 12%, 29%)");
                            break;
                        default:
                            (t = [
                                "#ffeb3c",
                                "#ff9900",
                                "#f44437",
                                "#ea1e63",
                                "#9c26b0",
                                "#683ab7",
                                "#3f51b5",
                                "#2196f3",
                                "#009788",
                                "#4baf4f",
                                "#7e5d4e",
                                "#9e9e9e",
                            ]),
                                i && t.splice(10, 0, "#534741");
                    }
                if (
                    ((p = "refine" == c.mode),
                    (h = !isNaN(c.select)),
                    (y = isNaN(c.select) ? (T ? 2 : t.length) : c.select),
                    (_ = Sa.isPlainObject(t[0])),
                    h && !Object.keys(A).length)
                )
                    for (e = 0; e < c.select; ++e) (A[e] = {}), (E[e] = {});
                for (d = t.slice(0), e = 0; e < d.length; ++e)
                    Sa.isPlainObject(t[e])
                        ? (d[e].color = t[e].color)
                        : ((t[e] = t[e].toLowerCase()),
                          (d[e] = { key: e, name: t[e], color: t[e] }));
                (n = c.defaultValue || d[0].color),
                    (r = P((o = n), "hsl")),
                    (x = c.enhance && N.is("input")) &&
                        (N.hasClass("mbsc-color-input-hdn")
                            ? (w = N.prev())
                            : ((w = Sa(
                                  "<div " +
                                      (a.placeholder
                                          ? 'data-placeholder="' +
                                            a.placeholder +
                                            '"'
                                          : "") +
                                      ' class="mbsc-control mbsc-color-input ' +
                                      (c.inputClass || "") +
                                      '" readonly ></div>'
                              )).insertBefore(N),
                              N.addClass("mbsc-color-input-hdn").attr(
                                  "tabindex",
                                  -1
                              )),
                        (c.anchor = w),
                        D.attachShow(w));
            }),
            (D.__destroy = function () {
                x && (N.removeClass("mbsc-color-input-hdn"), w.remove());
            }),
            (D._checkSize = !0),
            t || D.init();
    }
    (ea.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "color",
        _defaults: Da({}, Ne.prototype._defaults, {
            headerText: !1,
            validate: ga,
            parseValue: ga,
            enhance: !0,
            rows: 2,
            select: "single",
            format: "hex",
            navigation: "horizontal",
            compClass: "mbsc-color",
        }),
    }),
        (Z.Color = ea),
        (oa.themes.color = oa.themes.frame),
        O(
            "color",
            ea,
            !(s.color = {
                hsv2hex: Zt,
                hsv2rgb: qt,
                rgb2hsv: Ut,
                rgb2hex: Jt,
                rgb2hsl: Kt,
                hex2rgb: Bt,
                hex2hsv: Qt,
                hex2hsl: Gt,
            })
        ),
        (Ye.date = bt),
        (Ye.time = bt),
        (Ye.datetime = bt),
        O("date", je),
        O("time", je),
        O("datetime", je);
    var ta = function (e, t, a) {
        function n(e) {
            Sa(".mbsc-fr-c", e).append(r._getText(oa, 0.7)),
                !Sa(".mbsc-fr-c", e).hasClass("mbsc-wdg-c") &&
                    oa.eHzJD &&
                    (Sa(".mbsc-fr-c", e)
                        .addClass("mbsc-wdg-c")
                        .append(o.show()),
                    Sa(".mbsc-w-p", e).length ||
                        Sa(".mbsc-fr-c", e).addClass("mbsc-w-p"));
        }
        var s,
            i,
            o = Sa(e),
            r = this;
        Ne.call(this, e, t, !0),
            (r._generateContent = function () {
                return "";
            }),
            (r._markupReady = function (e) {
                "inline" != s.display && n(e);
            }),
            (r._markupInserted = function (e) {
                "inline" == s.display && n(e),
                    e.trigger("mbsc-enhance", [
                        { theme: s.theme, lang: s.lang },
                    ]);
            }),
            (r._markupRemove = function () {
                o.hide(), i && i.parent().length && i.after(o);
            }),
            (r.__processSettings = function () {
                (s = r.settings),
                    (r.buttons.ok = {
                        text: s.okText,
                        icon: s.okIcon,
                        handler: "set",
                    }),
                    (s.buttons =
                        s.buttons || ("inline" == s.display ? [] : ["ok"])),
                    !i &&
                        o.parent().length &&
                        ((i = Sa(document.createComment("popup"))),
                        o.before(i)),
                    o.hide();
            }),
            a || r.init();
    };
    (ta.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasContent: !0,
        _hasLang: !0,
        _responsive: !0,
        _class: "popup",
        _defaults: Da({}, Ne.prototype._defaults, {
            compClass: "mbsc-wdg",
            okText: "OK",
            headerText: !1,
        }),
    }),
        (Z.Popup = ta);
    var aa = (Z.Widget = ta);
    oa.themes.popup = oa.themes.frame;
    var na = {
            view: { calendar: { type: "month", popover: !0 } },
            allDayText: "All-day",
            labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"],
            eventText: "event",
            eventsText: "events",
            noEventsText: "No events",
        },
        sa = { yearChange: !1, weekDays: "short" };
    (Ye.eventcalendar = function (_, e) {
        function n(e, t, a) {
            var n,
                s,
                i,
                o,
                r,
                l = 0,
                c = [],
                d = "",
                m = [];
            for (
                a = a || _._prepareObj(G, e, t), n = rt(e);
                n <= t;
                n.setDate(n.getDate() + 1)
            )
                (o = a[rt(n)]) &&
                    o.length &&
                    m.push({ d: new Date(n), list: C(o) });
            if (0 < m.length)
                for (s = 0; s < m.length; s++) {
                    for (
                        d +=
                            '<div><div class="mbsc-lv-gr-title mbsc-event-day" data-full="' +
                            lt((o = m[s]).d) +
                            '">' +
                            le(q.dateFormat, o.d, q) +
                            "</div>",
                            i = 0;
                        i < o.list.length;
                        i++
                    ) {
                        var u = o.list[i],
                            h = u.start ? ct(u.start) : null,
                            f = u.end ? ct(u.end) : null,
                            p = u.color,
                            b = ut.test(u.d) || mt.test(u.d),
                            v = h && f && !dt(h, f),
                            g = !v || dt(h, o.d),
                            x = !v || dt(f, o.d),
                            T = u.d ? (b ? u.d : ct(u.d)) : h,
                            y = u.allDay || b || (v && !g && !x);
                        c.push({ d: o.d, e: u }),
                            (d +=
                                '<div tabindex="0" role="button" class="mbsc-lv-item mbsc-lv-item-actionable" data-index="' +
                                l +
                                '"><div class="mbsc-event-time">' +
                                (y
                                    ? q.allDayText
                                    : g && T && T.getTime
                                    ? le(q.timeFormat, T)
                                    : v && x
                                    ? q.toText
                                    : "") +
                                (!y && x && f && f.getTime
                                    ? "<br/>" + le(q.timeFormat, f)
                                    : "") +
                                '</div><div class="mbsc-event-color"' +
                                (p ? ' style="background:' + p + ';"' : "") +
                                '></div><div class="mbsc-event-txt">' +
                                u.text +
                                "</div>" +
                                _._getText(oa, 0.3) +
                                "</div>"),
                            l++;
                    }
                    d += "</div>";
                }
            else
                d +=
                    '<div class="mbsc-lv-gr-title mbsc-event-empty"><div class="mbsc-empty"><h3>' +
                    q.noEventsText +
                    "</h3></div></div>";
            U++,
                M.html(
                    '<div class="mbsc-lv mbsc-lv-v">' + d + "</div>"
                ).scrollTop(0),
                setTimeout(function () {
                    U--;
                }, 150),
                (r = Sa(".mbsc-lv-item", M)),
                _.tap(r, function (e) {
                    var t = c[Sa(this).attr("data-index")];
                    Z("onEventSelect", { domEvent: e, event: t.e, date: t.d });
                }),
                w(r);
        }
        function w(e) {
            e.on("keydown", function (e) {
                (13 !== e.keyCode && 32 !== e.keyCode) || this.click();
            })
                .on("focus", function () {
                    window.__mbscFocusVisible &&
                        Sa(this).addClass("mbsc-focus");
                })
                .on("blur", function () {
                    Sa(this).removeClass("mbsc-focus");
                });
        }
        function s() {
            if (V) {
                var e = rt(V.d);
                !(function (t, f, e) {
                    if (t) {
                        var a,
                            n,
                            s,
                            i,
                            o,
                            p = '<div class="mbsc-cal-event-list">';
                        (a = Sa(
                            '<div class="mbsc-cal-events ' +
                                (q.eventBubbleClass || "") +
                                '"><div class="mbsc-cal-events-i"><div class="mbsc-cal-events-sc"></div><div class="mbsc-sc-bar-c"><div class="mbsc-sc-bar"></div></div></div></div>'
                        )),
                            (n = Sa(".mbsc-cal-events-i", a)),
                            (s = Sa(".mbsc-cal-events-sc", a)),
                            _.tap(n, function () {
                                i.scrolled || r();
                            }),
                            (A = new ta(a[0], {
                                display: "bubble",
                                theme: q.theme,
                                lang: q.lang,
                                context: q.context,
                                buttons: [],
                                anchor: e,
                                showOverlay: !1,
                                cssClass:
                                    "mbsc-no-padding mbsc-cal-events-popup",
                                onShow: function () {
                                    (i = new pt(n[0], {
                                        scrollbar: Sa(".mbsc-sc-bar-c", a),
                                        stopProp: !1,
                                    })),
                                        Sa(document).on("click", l);
                                },
                                onClose: function (e, t) {
                                    t.destroy(),
                                        i && i.destroy(),
                                        Sa(document).off("click", l);
                                },
                            })),
                            (_._popup = A),
                            (b = e),
                            (t = C(t)),
                            Sa.each(t, function (e, t) {
                                var a = t.start ? ct(t.start) : null,
                                    n = t.end ? ct(t.end) : null,
                                    s = ut.test(t.d) || mt.test(t.d),
                                    i = t.d ? (s ? t.d : ct(t.d)) : a,
                                    o = a && n && !dt(a, n),
                                    r = !o || dt(a, f),
                                    l = !o || dt(n, f),
                                    c = t.allDay || s || (o && !r && !l),
                                    d = t.color,
                                    m = "",
                                    u = "",
                                    h = Sa("<div>" + t.text + "</div>").text();
                                i.getTime &&
                                    (m = le(
                                        (o ? "MM d yy " : "") + q.timeFormat,
                                        i
                                    )),
                                    n &&
                                        (u = le(
                                            (o ? "MM d yy " : "") +
                                                q.timeFormat,
                                            n
                                        )),
                                    (p +=
                                        '<div tabindex="0" role="button" title="' +
                                        h +
                                        '" aria-label="' +
                                        h +
                                        (m
                                            ? ", " + q.fromText + ": " + m
                                            : "") +
                                        (u ? ", " + q.toText + ": " + u : "") +
                                        '" class="mbsc-cal-event mbsc-lv-item mbsc-lv-item-actionable"><div class="mbsc-cal-event-color" style="' +
                                        (d ? "background:" + d + ";" : "") +
                                        '"></div><div class="mbsc-cal-event-text"><div class="mbsc-cal-event-time">' +
                                        (c
                                            ? q.allDayText
                                            : r && i.getTime
                                            ? le(q.timeFormat, i)
                                            : "") +
                                        "</div>" +
                                        t.text +
                                        "</div>" +
                                        (a && n && !t.allDay
                                            ? '<div class="mbsc-cal-event-dur">' +
                                              q.formatDuration(a, n, t) +
                                              "</div>"
                                            : "") +
                                        "</div>");
                            }),
                            (p += "</div>"),
                            s.html(p),
                            A.show(),
                            Z("onEventBubbleShow", {
                                target: b,
                                eventList: a[0],
                            }),
                            (o = Sa(".mbsc-cal-event", s)),
                            _.tap(o, function (e) {
                                i.scrolled ||
                                    Z("onEventSelect", {
                                        domEvent: e,
                                        event: t[Sa(this).index()],
                                        date: f,
                                    });
                            }),
                            w(o),
                            (x = !0);
                    }
                })(
                    V.events || g[e],
                    e,
                    V.cell ||
                        Sa(
                            '.mbsc-cal-slide-a .mbsc-cal-day[data-full="' +
                                lt(e) +
                                '"]',
                            _._markup
                        )[0]
                ),
                    (V = null);
            }
        }
        function C(e) {
            return e.slice(0).sort(function (e, t) {
                var a = e.start ? ct(e.start) : null,
                    n = t.start ? ct(t.start) : null,
                    s = e.end ? ct(e.end) : null,
                    i = t.end ? ct(t.end) : null,
                    o = ut.test(e.d) || mt.test(e.d),
                    r = ut.test(t.d) || mt.test(t.d),
                    l = e.d ? (o ? e.d : ct(e.d)) : a,
                    c = t.d ? (r ? t.d : ct(t.d)) : n,
                    d = l.getTime
                        ? a && s && a.toDateString() !== s.toDateString()
                            ? 1
                            : e.allDay
                            ? 2
                            : l.getTime()
                        : 0,
                    m = c.getTime
                        ? n && i && n.toDateString() !== i.toDateString()
                            ? 1
                            : t.allDay
                            ? 2
                            : c.getTime()
                        : 0;
                return d == m ? (e.text > t.text ? 1 : -1) : d - m;
            });
        }
        function a() {
            var e, t, a;
            U ||
                Sa(".mbsc-event-day", this).each(function () {
                    if (0 <= (t = this.offsetTop - v.scrollTop) && t < 35)
                        return (
                            (a = Sa(this).attr("data-full").split("-")),
                            dt((e = it(a[0], a[1] - 1, a[2])), h) ||
                                ((E = !0), _.setVal(e)),
                            !1
                        );
                });
        }
        function r() {
            A && x && A.hide(), (b = null), (x = !1);
        }
        function l(e) {
            0 == Sa(e.target).closest(".mbsc-cal-day").length && r();
        }
        function t() {
            r(), _.redraw();
        }
        function i(e) {
            var t = q.getYear(e),
                a = q.getMonth(e),
                n = q.getDay(e);
            if (((f = e), "day" == k)) p = q.getDate(t, a, n + D - 1);
            else if ("week" == k) {
                var s,
                    i = f.getDay();
                (s = n + q.firstDay - (0 < q.firstDay - i ? 7 : 0) - i),
                    (f = q.getDate(t, a, s)),
                    (p = q.getDate(t, a, s + 7 * D - 1));
            } else
                "month" == k
                    ? ((f = q.getDate(t, a, 1)), (p = q.getDate(t, a + D, 0)))
                    : "year" == k &&
                      ((f = q.getDate(t, 0, 1)), (p = q.getDate(t + D, 0, 0)));
        }
        function o(e, t) {
            if (P && !E) {
                var a = Sa('.mbsc-event-day[data-full="' + lt(e) + '"]', M);
                a.length &&
                    (U++,
                    ee(v, a.parent()[0].offsetTop, t, function () {
                        setTimeout(function () {
                            U--;
                        }, 150);
                    }));
            }
        }
        function c(e, t) {
            e && Z("onPageChange", { firstDay: f, lastDay: p }),
                t || Z("onPageLoading", { firstDay: f, lastDay: p }),
                Z("onPageLoaded", { firstDay: f, lastDay: p });
        }
        var d,
            m,
            M,
            u,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T,
            y,
            S,
            k,
            D,
            N,
            V,
            A,
            E,
            F,
            H,
            I,
            O,
            P,
            L,
            Y,
            z,
            $,
            R,
            j,
            W,
            J = this,
            B = Da({}, _.settings),
            q = Da(_.settings, na, B, sa, e),
            U = 0,
            K = 0,
            G = Da(!0, [], q.data),
            X = !0,
            Z = _.trigger;
        return (
            (q.data = G),
            Sa.each(G, function (e, t) {
                void 0 === t._id && (t._id = K++);
            }),
            (z = q.view),
            ($ = z.calendar),
            (R = z.eventList),
            (j = q.months),
            (W = q.weeks),
            (S = $
                ? ("week" == $.type
                      ? (W = $.size || 1)
                      : $.size && (j = $.size),
                  !1)
                : !(W = 0)),
            R && ((k = R.type), (D = R.size || 1)),
            (N = $ && $.labels),
            (O = R && R.scrollable),
            (P = z.eventList),
            (L = void 0 === q.eventBubble ? $ && $.popover : q.eventBubble),
            (q.weeks = W),
            (q.months = j),
            (d = qe.call(this, _)),
            (_._onGenMonth = function (e, t) {
                (g = _._prepareObj(G, e, t)), (_._labels = N ? g : null);
            }),
            (_._onRefresh = function (e) {
                (F = !0), (I = H = null), S && c(!1, e);
            }),
            (_._onSetDate = function (e, t) {
                (h = e),
                    S
                        ? E ||
                          T ||
                          (i(e), (H && I && dt(H, f) && dt(I, p)) || c(!0))
                        : t ||
                          T ||
                          (r(),
                          P && "day" == k && n(e, e, g),
                          (!L && !Y) || y || s(),
                          o(e)),
                    (y = Y = E = !1);
            }),
            (_._getDayProps = function (e) {
                var t = g[e],
                    a = { events: t };
                return (
                    q.marked ||
                        q.labels ||
                        N ||
                        (t
                            ? ((a.background = t[0] && t[0].background),
                              (a.marked = t),
                              (a.markup = q.showEventCount
                                  ? '<div class="mbsc-cal-txt">' +
                                    t.length +
                                    " " +
                                    (1 < t.length
                                        ? q.eventsText
                                        : q.eventText) +
                                    "</div>"
                                  : '<div class="mbsc-cal-marks"><div class="mbsc-cal-mark"></div></div>'))
                            : (a.markup = q.showEventCount
                                  ? '<div class="mbsc-cal-txt-ph"></div>'
                                  : "")),
                    a
                );
            }),
            (_.addEvent = function (e) {
                var a = [];
                return (
                    (e = Da(!0, [], Sa.isArray(e) ? e : [e])),
                    Sa.each(e, function (e, t) {
                        void 0 === t._id && (t._id = K++),
                            G.push(t),
                            a.push(t._id);
                    }),
                    t(),
                    a
                );
            }),
            (_.updateEvent = function (a) {
                Sa.each(G, function (e, t) {
                    if (t._id === a._id) return G.splice(e, 1, a), !1;
                }),
                    t();
            }),
            (_.removeEvent = function (e) {
                (e = Sa.isArray(e) ? e : [e]),
                    Sa.each(e, function (e, a) {
                        Sa.each(G, function (e, t) {
                            if (t._id === a) return G.splice(e, 1), !1;
                        });
                    }),
                    t();
            }),
            (_.getEvents = function (e) {
                var t;
                return e
                    ? (e.setHours(0, 0, 0, 0),
                      (t = _._prepareObj(G, e, e))[e] ? C(t[e]) : [])
                    : Da(!0, [], G);
            }),
            (_.setEvents = function (e) {
                var a = [];
                return (
                    (q.data = G = Da(!0, [], e)),
                    Sa.each(G, function (e, t) {
                        void 0 === t._id && (t._id = K++), a.push(t._id);
                    }),
                    t(),
                    a
                );
            }),
            (_.navigate = function (e, t, a) {
                (e = ct(e, _._format, q)),
                    (V = a ? { d: e } : null),
                    _.setVal(e, !0, !0, !1, t ? 200 : 0);
            }),
            Da({}, d, {
                multiLabel: N,
                headerText: !1,
                buttons: "inline" !== q.display ? ["close"] : q.buttons,
                compClass: "mbsc-ev-cal mbsc-calendar mbsc-dt mbsc-sc",
                formatDuration: function (e, t) {
                    var a = q.labelsShort,
                        n = t - e,
                        s = Math.abs(n) / 1e3,
                        i = s / 60,
                        o = i / 60,
                        r = o / 24,
                        l = r / 365;
                    return (
                        (s < 45 && Math.round(s) + " " + a[5].toLowerCase()) ||
                        (i < 45 && Math.round(i) + " " + a[4].toLowerCase()) ||
                        (o < 24 && Math.round(o) + " " + a[3].toLowerCase()) ||
                        (r < 30 && Math.round(r) + " " + a[2].toLowerCase()) ||
                        (r < 365 &&
                            Math.round(r / 30) + " " + a[1].toLowerCase()) ||
                        Math.round(l) + " " + a[0].toLowerCase()
                    );
                },
                onMarkupReady: function (e, t) {
                    (m = Sa(e.target)),
                        (h = t.getDate(!0)),
                        P &&
                            ((M = Sa(
                                '<div class="mbsc-lv-cont mbsc-lv-' +
                                    q.theme +
                                    (q.baseTheme
                                        ? " mbsc-lv-" + q.baseTheme
                                        : "") +
                                    (O ? " mbsc-event-list-h" : "") +
                                    ' mbsc-event-list"></div>'
                            ).appendTo(Sa(".mbsc-fr-w", m))).on(
                                "scroll",
                                Ta(a)
                            ),
                            (v = M[0])),
                        d.onMarkupReady.call(this, e),
                        (u = Sa(".mbsc-cal-month", m)),
                        (x = !1),
                        i(h),
                        P &&
                            S &&
                            (c(),
                            ft(
                                Sa(".mbsc-cal-btn", m),
                                function (e, t) {
                                    var a = q.getYear(f),
                                        n = q.getMonth(f),
                                        s = q.getDay(f);
                                    "day" == k
                                        ? ((f = q.getDate(a, n, s + t * D)),
                                          (p = q.getDate(
                                              a,
                                              n,
                                              s + (t + 1) * D - 1
                                          )))
                                        : "week" == k
                                        ? ((f = q.getDate(a, n, s + t * D * 7)),
                                          (p = q.getDate(
                                              a,
                                              n,
                                              s + (t + 1) * D * 7 - 1
                                          )))
                                        : "month" == k
                                        ? ((f = q.getDate(a, n + t * D, 1)),
                                          (p = q.getDate(
                                              a,
                                              n + (t + 1) * D,
                                              0
                                          )))
                                        : "year" == k &&
                                          ((f = q.getDate(a + t * D, 0, 1)),
                                          (p = q.getDate(
                                              a + (t + 1) * D,
                                              0,
                                              0
                                          ))),
                                        c(!0);
                                },
                                200
                            )),
                        (function () {
                            var e = ne.__mbscFocusCount || 0;
                            0 === e &&
                                (ma(ne, "mousedown", te, !0),
                                ma(ne, "keydown", ae, !0)),
                                (ne.__mbscFocusCount = ++e);
                        })();
                },
                onDayChange: function (e) {
                    var t = e.target;
                    t !== b &&
                        ((Y = !1 !== L && Sa(".mbsc-cal-txt-more", t).length),
                        (V = {
                            d: e.date,
                            cell:
                                q.outerMonthChange &&
                                Sa(t).hasClass("mbsc-cal-day-diff")
                                    ? null
                                    : t,
                            events: e.events,
                        }));
                },
                onLabelTap: function (e) {
                    e.label &&
                        (Z("onEventSelect", {
                            domEvent: e.domEvent,
                            event: e.label,
                            date: e.date,
                        }),
                        (y = !0));
                },
                onPageChange: function (e) {
                    r(), (T = !0), _._isSetDate || _.setVal(e.firstDay);
                },
                onPageLoaded: function (e) {
                    var t = e.firstDay,
                        a = e.lastDay;
                    P &&
                        (S
                            ? (H && I && dt(H, t) && dt(I, a)) ||
                              (n((H = t), (I = a)),
                              (function (e, t) {
                                  var a,
                                      n = (q.dateWheels || q.dateFormat).search(
                                          /m/i
                                      ),
                                      s = (q.dateWheels || q.dateFormat).search(
                                          /y/i
                                      ),
                                      i = q.getYear(e),
                                      o = q.getMonth(e),
                                      r = q.getYear(t),
                                      l = q.getMonth(t);
                                  _._checkBtn(
                                      Sa(".mbsc-cal-prev-m", m),
                                      rt(e) <= _._minDate
                                  ),
                                      _._checkBtn(
                                          Sa(".mbsc-cal-next-m", m),
                                          rt(t) >= _._maxDate
                                      ),
                                      "day" == k
                                          ? (a =
                                                le(q.dateFormat, e, q) +
                                                (1 < D
                                                    ? " - " +
                                                      le(q.dateFormat, t, q)
                                                    : ""))
                                          : "week" == k
                                          ? (a =
                                                le(q.dateFormat, e, q) +
                                                " - " +
                                                le(q.dateFormat, t, q))
                                          : "month" == k
                                          ? (a =
                                                1 == D
                                                    ? s < n
                                                        ? i +
                                                          " " +
                                                          q.monthNames[o]
                                                        : q.monthNames[o] +
                                                          " " +
                                                          i
                                                    : s < n
                                                    ? i +
                                                      " " +
                                                      q.monthNamesShort[o] +
                                                      " - " +
                                                      r +
                                                      " " +
                                                      q.monthNamesShort[l]
                                                    : q.monthNamesShort[o] +
                                                      " " +
                                                      i +
                                                      " - " +
                                                      q.monthNamesShort[l] +
                                                      " " +
                                                      r)
                                          : "year" == k &&
                                            (a = i + (1 < D ? " - " + r : "")),
                                      u.html(a);
                              })(t, a))
                            : ((a =
                                  "month" == k
                                      ? q.getDate(
                                            q.getYear(t),
                                            q.getMonth(t) + D,
                                            0
                                        )
                                      : "week" == k
                                      ? q.getDate(
                                            q.getYear(t),
                                            q.getMonth(t),
                                            q.getDay(t) + 7 * D - 1
                                        )
                                      : (t = _.getVal(!0))),
                              n(t, a, g)),
                        X || dt(h, t) || (o(h, F), (F = !1))),
                        L && s(),
                        (T = !1);
                },
                onPosition: function (e) {
                    if (
                        (d.onPosition.call(this, e), A && A.position(), P && O)
                    ) {
                        M.addClass("mbsc-event-list-h");
                        var t =
                            (function (e) {
                                var t = getComputedStyle(e);
                                return (
                                    e.innerHeight ||
                                    e.clientHeight -
                                        parseFloat(t.paddingTop) -
                                        parseFloat(t.paddingBottom)
                                );
                            })("inline" == q.display ? J.parentNode : window) -
                            e.popup.offsetHeight;
                        (v.style.height = 200 < t ? t + "px" : ""),
                            M.removeClass("mbsc-event-list-h"),
                            X && t && (o(h, !0), (X = !1));
                    }
                },
                onHide: function () {
                    d.onHide.call(this),
                        _._popup && _._popup.destroy(),
                        (function () {
                            var e = ne.__mbscFocusCount || 0;
                            (ne.__mbscFocusCount = --e),
                                0 === ne.__mbscFocusCount &&
                                    (ua(ne, "mousedown", te),
                                    ua(ne, "keydown", ae));
                        })();
                },
            })
        );
    }),
        O("eventcalendar", je);
    var ia,
        Va = o && !!window.Promise,
        Aa = [],
        Ea = [];
    function Fa(e) {
        Aa.length || e.show(), Aa.push(e);
    }
    function Ha(e, a, n, t) {
        return Da(
            {
                display: a.display || "center",
                cssClass: "mbsc-alert",
                okText: a.okText,
                cancelText: a.cancelText,
                context: a.context,
                theme: a.theme,
                closeOnOverlayTap: !1,
                onBeforeClose: function () {
                    e.shift();
                },
                onHide: function (e, t) {
                    n && n(t._resolve),
                        a.callback && a.callback(t._resolve),
                        t && t.destroy(),
                        Aa.length
                            ? Aa[0].show()
                            : Ea.length && Ea[0].show(!1, !0);
                },
            },
            t
        );
    }
    function Ia(e) {
        return (
            (e.title ? "<h2>" + e.title + "</h2>" : "") +
            "<p>" +
            (e.message || "") +
            "</p>"
        );
    }
    function Oa(e, t, a) {
        Fa(new ta(e, Ha(Aa, t, a)));
    }
    function Pa(e, t, a) {
        var n = new ta(
            e,
            Ha(Aa, t, a, {
                buttons: ["cancel", "ok"],
                onSet: function () {
                    n._resolve = !0;
                },
            })
        );
        (n._resolve = !1), Fa(n);
    }
    function La(e, t, a) {
        var n,
            s = new ta(
                e,
                Ha(Aa, t, a, {
                    buttons: ["cancel", "ok"],
                    onMarkupReady: function (e, t) {
                        var a = t.settings;
                        t._markup
                            .find("label")
                            .addClass(
                                "mbsc-" +
                                    a.theme +
                                    (a.baseTheme ? " mbsc-" + a.baseTheme : "")
                            ),
                            (n = t._markup.find("input")[0]),
                            setTimeout(function () {
                                n.focus(),
                                    n.setSelectionRange(0, n.value.length);
                            }, 300);
                    },
                    onSet: function () {
                        s._resolve = n.value;
                    },
                })
            );
        (s._resolve = null), Fa(s);
    }
    function Ya(e, a, t, n, s) {
        var i;
        !(function (e) {
            var t = Ea.length;
            Ea.push(e), Aa.length || (t ? Ea[0].hide() : e.show(!1, !0));
        })(
            new ta(
                e,
                Ha(Ea, a, t, {
                    display: a.display || "bottom",
                    animate: s,
                    cssClass:
                        (n || "mbsc-snackbar") +
                        (a.color ? " mbsc-" + a.color : ""),
                    scrollLock: !1,
                    focusTrap: !1,
                    buttons: [],
                    onMarkupReady: function (e, t) {
                        var a = t.settings;
                        t._markup
                            .find("button")
                            .addClass(
                                "mbsc-" +
                                    a.theme +
                                    (a.baseTheme ? " mbsc-" + a.baseTheme : "")
                            );
                    },
                    onShow: function (e, t) {
                        (ia = t),
                            !1 !== a.duration &&
                                (i = setTimeout(function () {
                                    t && t.hide();
                                }, a.duration || 3e3)),
                            a.button &&
                                t.tap(
                                    Sa(".mbsc-snackbar-btn", e.target),
                                    function () {
                                        t.hide(),
                                            a.button.action &&
                                                a.button.action.call(this);
                                    }
                                );
                    },
                    onClose: function () {
                        (ia = null), clearTimeout(i);
                    },
                })
            )
        );
    }
    function za(e, t, a) {
        Ya(e, t, a, "mbsc-toast", "fade");
    }
    function $a(t, a, n) {
        var e;
        return (
            Va
                ? (e = new Promise(function (e) {
                      t(a, n, e);
                  }))
                : t(a, n),
            e
        );
    }
    (oa.alert = function (e) {
        var t = document.createElement("div");
        return (t.innerHTML = Ia(e)), $a(Oa, t, e);
    }),
        (oa.confirm = function (e) {
            var t = document.createElement("div");
            return (t.innerHTML = Ia(e)), $a(Pa, t, e);
        }),
        (oa.prompt = function (e) {
            var t = document.createElement("div");
            return (
                (t.innerHTML =
                    Ia(e) +
                    '<label class="mbsc-input">' +
                    (e.label
                        ? '<span class="mbsc-label">' + e.label + "</span>"
                        : "") +
                    '<input class="mbsc-control" tabindex="0" type="' +
                    (e.inputType || "text") +
                    '" placeholder="' +
                    (e.placeholder || "") +
                    '" value="' +
                    (e.value || "") +
                    '"></label>'),
                $a(La, t, e)
            );
        }),
        (oa.snackbar = function (e) {
            var t = document.createElement("div"),
                a = e.button;
            return (
                (t.innerHTML =
                    '<div class="mbsc-snackbar-cont"><div class="mbsc-snackbar-msg">' +
                    (e.message || "") +
                    "</div>" +
                    (a
                        ? '<button class="mbsc-snackbar-btn mbsc-btn mbsc-btn-flat">' +
                          (a.icon
                              ? '<span class="mbsc-ic ' +
                                (a.text ? "mbsc-btn-ic " : "") +
                                "mbsc-ic-" +
                                a.icon +
                                '"></span>'
                              : "") +
                          (a.text || "") +
                          "</button>"
                        : "") +
                    "</div>"),
                $a(Ya, t, e)
            );
        }),
        (oa.toast = function (e) {
            var t = document.createElement("div");
            return (
                (t.innerHTML =
                    '<div class="mbsc-toast-msg">' +
                    (e.message || "") +
                    "</div>"),
                $a(za, t, e)
            );
        }),
        (oa.notification = {
            dismiss: function () {
                ia && ia.hide();
            },
        });
    function Ra(e, t) {
        var a,
            n = "",
            s = Sa(e),
            i = {},
            o = this;
        function r() {
            s.removeClass("mbsc-no-touch");
        }
        Na.call(this, e, t, !0),
            (o.refresh = function (e) {
                a.enhance && jt(s, i, a, e);
            }),
            (o._init = function () {
                oa.themes.form[a.theme] || (a.theme = "mobiscroll"),
                    s.hasClass("mbsc-form") ||
                        (s.show(), ma(s[0], "touchstart", r, { passive: !0 })),
                    n && s.removeClass(n),
                    (n =
                        "mbsc-form mbsc-no-touch mbsc-" +
                        a.theme +
                        (ja ? " mbsc-form-hb" : "") +
                        (a.baseTheme ? " mbsc-" + a.baseTheme : "") +
                        (a.rtl ? " mbsc-rtl" : " mbsc-ltr") +
                        ("box" == a.inputStyle ? " mbsc-form-box" : "") +
                        ("outline" == a.inputStyle
                            ? " mbsc-form-outline"
                            : "")),
                    s.addClass(n).removeClass("mbsc-cloak"),
                    o.refresh();
            }),
            (o._destroy = function () {
                for (var e in (s.removeClass(n),
                ua(s[0], "touchstart", r, { passive: !0 }),
                i))
                    i[e].destroy();
            }),
            (o.controls = i),
            (a = o.settings),
            o.init();
    }
    var ja = "ios" == e && 7 < a;
    (Ra.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "form",
        _defaults: { tap: v, stopProp: !0, rtl: !1, enhance: !0 },
    }),
        q("[mbsc-enhance],[mbsc-form]", (Z.Form = Ra), !0);
    function Wa(e, t) {
        var i = "",
            o = Sa(e),
            a = this,
            r = a.settings;
        Na.call(this, e, t, !0),
            (a._init = function () {
                var e = r.context,
                    t = Sa(e),
                    a = t.find(".mbsc-ms-top .mbsc-ms"),
                    n = t.find(".mbsc-ms-bottom .mbsc-ms"),
                    s = {};
                "body" == e
                    ? Sa("body,html").addClass("mbsc-page-ctx")
                    : t.addClass("mbsc-page-ctx"),
                    i && o.removeClass(i),
                    a.length && (s.paddingTop = a[0].offsetHeight),
                    n.length && (s.paddingBottom = n[0].offsetHeight),
                    (i =
                        "mbsc-page mbsc-" +
                        r.theme +
                        (r.baseTheme ? " mbsc-" + r.baseTheme : "") +
                        (r.rtl ? " mbsc-rtl" : " mbsc-ltr")),
                    o.addClass(i).removeClass("mbsc-cloak").css(s);
            }),
            (a._destroy = function () {
                o.removeClass(i);
            }),
            (r = a.settings),
            a.init();
    }
    (Wa.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _class: "page",
        _defaults: { context: "body" },
    }),
        (Z.Page = Wa),
        (oa.themes.page.mobiscroll = {}),
        q("[mbsc-page]", Wa),
        O("page", Wa, !1),
        O("form", Ra, !1),
        O("progress", Pt, !1),
        O("slider", Lt, !1),
        O("stepper", Ft, !1),
        O("switch", Ot, !1),
        O("rating", Yt, !1);
    function Ja(c) {
        var s,
            t,
            l,
            e,
            a = Da({}, c.settings),
            d = Da(c.settings, Ba, a),
            n = d.layout || (/top|bottom/.test(d.display) ? "liquid" : ""),
            m = "liquid" == n,
            i = d.readonly,
            o = Sa(this),
            r = this.id + "_dummy",
            u = 0,
            h = [],
            f =
                d.wheelArray ||
                (function r(e) {
                    var l = [];
                    var t = 1 < e.length ? e : e.children(d.itemSelector);
                    t.each(function (e) {
                        var t = Sa(this),
                            a = t.clone();
                        a.children("ul,ol").remove(),
                            a.children(d.itemSelector).remove();
                        var n = c._processMarkup
                                ? c._processMarkup(a)
                                : a
                                      .html()
                                      .replace(/^\s\s*/, "")
                                      .replace(/\s\s*$/, ""),
                            s = !!t.attr("data-invalid"),
                            i = {
                                key:
                                    void 0 === t.attr("data-val") ||
                                    null === t.attr("data-val")
                                        ? e
                                        : t.attr("data-val"),
                                value: n,
                                invalid: s,
                                children: null,
                            },
                            o =
                                "li" === d.itemSelector
                                    ? t.children("ul,ol")
                                    : t.children(d.itemSelector);
                        o.length && (i.children = r(o)), l.push(i);
                    });
                    return l;
                })(o),
            p = (function (e) {
                var t,
                    a = [],
                    n = e,
                    s = !0,
                    i = 0;
                for (; s; )
                    (t = g(n)), (a[i++] = t.key), (s = t.children) && (n = s);
                return a;
            })(f);
        function b(e, t, a) {
            for (var n, s = 0, i = a, o = []; s < t; ) {
                var r = e[s];
                for (n in i)
                    if (i[n].key == r) {
                        i = i[n].children;
                        break;
                    }
                s++;
            }
            for (s = 0; s < i.length; ) i[s].invalid && o.push(i[s].key), s++;
            return o;
        }
        function v(e, t, a) {
            var n,
                s,
                i = 0,
                o = !0,
                r = [[]],
                l = f;
            if (t) for (s = 0; s < t; s++) m ? (r[0][s] = {}) : (r[s] = [{}]);
            for (; o; ) {
                for (
                    m ? (r[0][i] = x(l, i)) : (r[i] = [x(l, i)]),
                        s = 0,
                        n = null;
                    s < l.length && !n;

                )
                    l[s].key == e[i] &&
                        ((void 0 !== a && i <= a) || void 0 === a) &&
                        (n = l[s]),
                        s++;
                (n = n || g(l)) && n.children
                    ? ((l = n.children), i++)
                    : (o = !1);
            }
            return r;
        }
        function g(e, t) {
            if (!e) return !1;
            for (var a, n = 0; n < e.length; )
                if (!(a = e[n++]).invalid) return t ? n - 1 : a;
            return !1;
        }
        function x(e, t) {
            for (
                var a = {
                        data: [],
                        label: d.labels && d.labels[t] ? d.labels[t] : t,
                    },
                    n = 0;
                n < e.length;

            )
                a.data.push({ value: e[n].key, display: e[n].value }), n++;
            return a;
        }
        function T(e) {
            c._isVisible &&
                Sa(".mbsc-sc-whl-w", c._markup)
                    .css("display", "")
                    .slice(e)
                    .hide();
        }
        function y(e, t) {
            for (var a, n, s, i = 0, o = f, r = !0, l = []; r; ) {
                if (void 0 !== e[i] && i <= t)
                    for (
                        s = 0, n = e[i], a = void 0;
                        s < o.length && void 0 === a;

                    )
                        o[s].key != e[i] || o[s].invalid || (a = s), s++;
                else n = o[(a = g(o, !0))] && o[a].key;
                (l[i] = n),
                    i++,
                    (r = !!o[a] && o[a].children),
                    (o = o[a] && o[a].children);
            }
            return { lvl: i, nVector: l };
        }
        function _(e, t, a) {
            var n,
                s,
                i = (t || 0) + 1,
                o = [],
                r = {};
            for (s = v(e, null, t), n = 0; n < e.length; n++)
                c._tempWheelArray[n] = e[n] = a.nVector[n] || 0;
            for (; i < a.lvl; ) (r[i] = m ? s[0][i] : s[i][0]), o.push(i++);
            T(a.lvl),
                (h = e.slice(0)),
                o.length && ((l = !0), c.changeWheel(r));
        }
        return (
            (function e(t, a) {
                var n;
                for (u = u < a ? a : u, n = 0; n < t.length; n++)
                    t[n].children && e(t[n].children, a + 1);
            })(f, 1),
            (e = v(p, u)),
            Sa("#" + r).remove(),
            d.input
                ? (t = Sa(d.input))
                : d.showInput &&
                  (t = Sa(
                      '<input type="text" id="' +
                          r +
                          '" value="" class="' +
                          d.inputClass +
                          '" placeholder="' +
                          (d.placeholder || "") +
                          '" readonly />'
                  ).insertBefore(o)),
            t && c.attachShow(t),
            d.wheelArray || o.hide(),
            {
                wheels: e,
                anchor: t,
                layout: n,
                headerText: !1,
                setOnTap: 1 == u,
                formatValue: function (e) {
                    return (
                        void 0 === s && (s = y(e, e.length).lvl),
                        e.slice(0, s).join(" ")
                    );
                },
                parseValue: function (e) {
                    return e
                        ? (e + "").split(" ")
                        : (d.defaultValue || p).slice(0);
                },
                onBeforeShow: function () {
                    var e = c.getArrayVal(!0);
                    (h = e.slice(0)), (d.wheels = v(e, u, u)), (l = !0);
                },
                onWheelGestureStart: function (e) {
                    d.readonly = (function (e, t) {
                        for (var a = []; e; ) a[--e] = !0;
                        return (a[t] = !1), a;
                    })(u, e.index);
                },
                onWheelAnimationEnd: function (e) {
                    var t = e.index,
                        a = c.getArrayVal(!0),
                        n = y(a, t);
                    (s = n.lvl), (d.readonly = i), a[t] != h[t] && _(a, t, n);
                },
                onFill: function (e) {
                    (s = void 0), t && t.val(e.valueText);
                },
                validate: function (e) {
                    var t = e.values,
                        a = e.index,
                        n = y(t, t.length);
                    return (
                        (s = n.lvl),
                        void 0 === a && (T(n.lvl), l || _(t, a, n)),
                        (l = !1),
                        {
                            disabled: (function (e, t, a) {
                                for (var n = 0, s = []; n < e; )
                                    (s[n] = b(a, n, t)), n++;
                                return s;
                            })(s, f, t),
                        }
                    );
                },
                onDestroy: function () {
                    t && Sa("#" + r).remove(), o.show();
                },
            }
        );
    }
    var Ba = { invalid: [], showInput: !0, inputClass: "", itemSelector: "li" };
    (Ye.image = function (e) {
        return (
            e.settings.enhance &&
                (e._processMarkup = function (e) {
                    var t = e.attr("data-icon");
                    return (
                        e.children().each(function (e, t) {
                            (t = Sa(t)).is("img")
                                ? Sa('<div class="mbsc-img-c"></div>')
                                      .insertAfter(t)
                                      .append(t.addClass("mbsc-img"))
                                : t.is("p") && t.addClass("mbsc-img-txt");
                        }),
                        t &&
                            e.prepend(
                                '<div class="mbsc-ic mbsc-ic-' + t + '"></div'
                            ),
                        e.html(
                            '<div class="mbsc-img-w">' + e.html() + "</div>"
                        ),
                        e.html()
                    );
                }),
            Ja.call(this, e)
        );
    }),
        O("image", je);
    function qa(e, t) {
        var l,
            o,
            c,
            d,
            n,
            r,
            m,
            T,
            u,
            h,
            f,
            p,
            b,
            a,
            v,
            s,
            i,
            g,
            x,
            y,
            _,
            w,
            C,
            M,
            S,
            k,
            D,
            N,
            V,
            A,
            E,
            F,
            H,
            I,
            O,
            P,
            L,
            Y,
            z,
            $,
            R,
            j,
            W,
            J,
            B,
            q,
            U,
            K,
            G,
            X,
            Z,
            Q,
            ee,
            te,
            ae,
            ne,
            se,
            ie,
            oe,
            re,
            le,
            ce,
            de,
            me,
            ue,
            he,
            fe,
            pe,
            be,
            ve,
            ge,
            xe,
            Te,
            ye,
            _e,
            we,
            Ce,
            Me,
            Se,
            ke,
            De,
            Ne,
            Ve,
            Ae,
            Ee,
            Fe,
            He,
            Ie,
            Oe,
            Pe,
            Le,
            Ye,
            ze,
            $e,
            Re,
            je,
            We,
            Je,
            Be,
            qe,
            Ue,
            Ke,
            Ge,
            Xe,
            Ze,
            Qe,
            et = this,
            tt = e,
            at = Sa(tt),
            nt = 0,
            st = 0,
            it = 0,
            ot = {},
            rt = {},
            lt = {};
        function ct() {
            (be = Ce = !1),
                (He = d = 0),
                (Ie = new Date()),
                (G = f.width()),
                (a = $t(f)),
                (Q = a.index(X)),
                (Z = X[0].offsetHeight),
                (it = X[0].offsetTop),
                (Je = Be[X.attr("data-type") || "defaults"]),
                (Fe = Je.stages);
        }
        function dt(e) {
            var t,
                a = ha(u, e.target, ".mbsc-lv-item");
            a &&
                u.contains(a) &&
                ("touchstart" === e.type &&
                    (T.removeClass("mbsc-no-touch"),
                    (ve = !0),
                    clearTimeout(ge)),
                !ca(e, a) ||
                    l ||
                    nt ||
                    Ua ||
                    ta ||
                    !oa.eHzJD ||
                    ((q = !(n = l = !0)),
                    (K = "touchstart" === e.type),
                    (Oe = wa(e, "X")),
                    (Pe = wa(e, "Y")),
                    (y = x = 0),
                    (X = Sa(a)),
                    (t = X),
                    ct(),
                    (Re =
                        Je.actionable ||
                        X.hasClass("mbsc-lv-parent") ||
                        X.hasClass("mbsc-lv-back")),
                    (ae = X.offset().top),
                    Re &&
                        (c = setTimeout(function () {
                            t.addClass(K ? Ga : ""),
                                N("onItemActivate", {
                                    target: t[0],
                                    domEvent: e,
                                });
                        }, 120)),
                    et.sortable &&
                        !X.hasClass("mbsc-lv-back") &&
                        (et.sortable.group ||
                            ((he = X.nextUntil(".mbsc-lv-gr-title").filter(
                                ".mbsc-lv-item"
                            )),
                            (xe = X.prevUntil(".mbsc-lv-gr-title").filter(
                                ".mbsc-lv-item"
                            ))),
                        (re =
                            (et.sortable.group
                                ? f.children(te).eq(0)
                                : xe.length
                                ? xe.eq(-1)
                                : X)[0].offsetTop - it),
                        (oe =
                            (et.sortable.group
                                ? f.children(te).eq(-1)
                                : he.length
                                ? he.eq(-1)
                                : X)[0].offsetTop - it),
                        et.sortable.handle
                            ? Sa(e.target).hasClass("mbsc-lv-handle") &&
                              (clearTimeout(c),
                              "Moz" === va
                                  ? (e.preventDefault(), gt())
                                  : (We = setTimeout(function () {
                                        gt();
                                    }, 100)))
                            : (We = setTimeout(function () {
                                  V.appendTo(X),
                                      (V[0].style[va + "Animation"] =
                                          "mbsc-lv-fill " +
                                          (ke.sortDelay - 100) +
                                          "ms linear"),
                                      clearTimeout(S),
                                      clearTimeout(c),
                                      (n = !1),
                                      (We = setTimeout(function () {
                                          (V[0].style[va + "Animation"] = ""),
                                              gt();
                                      }, ke.sortDelay - 80));
                              }, 80))),
                    "mousedown" == e.type &&
                        Sa(document).on("mousemove", mt).on("mouseup", ut)));
        }
        function mt(e) {
            var t = !1,
                a = !0,
                n = d;
            if (l)
                if (
                    ((k = wa(e, "X")),
                    (D = wa(e, "Y")),
                    (x = k - Oe),
                    (y = D - Pe),
                    clearTimeout(S),
                    C ||
                        Ye ||
                        De ||
                        X.hasClass("mbsc-lv-back") ||
                        (10 < Math.abs(y)
                            ? ((De = !0),
                              ut(
                                  Da({}, e, {
                                      type:
                                          "mousemove" == e.type
                                              ? "mouseup"
                                              : "touchend",
                                  })
                              ),
                              clearTimeout(c))
                            : 7 < Math.abs(x) && pt()),
                    Ye)
                )
                    e.preventDefault(), (d = (x / G) * 100), bt(n);
                else if (C) {
                    e.preventDefault();
                    var s,
                        i = Ke.scrollTop(),
                        o = Math.max(re, Math.min(y + Ze, oe)),
                        r = H ? ae - Qe + i - Ze : ae;
                    Xe + i < r + o + Z
                        ? (Ke.scrollTop(r + o - Xe + Z), (s = !0))
                        : r + o < i && (Ke.scrollTop(r + o), (s = !0)),
                        s && (Ze += Ke.scrollTop() - i),
                        me &&
                            (et.sortable.multiLevel &&
                            de.hasClass("mbsc-lv-parent")
                                ? me < it + Z / 4 + o
                                    ? (t = !0)
                                    : me < it + Z - Z / 4 + o &&
                                      ((_ = de.addClass("mbsc-lv-item-hl")),
                                      (a = !1))
                                : me < it + Z / 2 + o &&
                                  (de.hasClass("mbsc-lv-back")
                                      ? et.sortable.multiLevel &&
                                        ((w = de.addClass("mbsc-lv-item-hl")),
                                        (a = !1))
                                      : (t = !0)),
                            t &&
                                (Te.insertAfter(de),
                                (de = jt((ye = de), "next")),
                                (_e = me),
                                (me = de.length && de[0].offsetTop),
                                h++)),
                        !t &&
                            _e &&
                            (et.sortable.multiLevel &&
                            ye.hasClass("mbsc-lv-parent")
                                ? it + Z - Z / 4 + o < _e
                                    ? (t = !0)
                                    : it + Z / 4 + o < _e &&
                                      ((_ = ye.addClass("mbsc-lv-item-hl")),
                                      (a = !1))
                                : it + Z / 2 + o < _e &&
                                  (ye.hasClass("mbsc-lv-back")
                                      ? et.sortable.multiLevel &&
                                        ((w = ye.addClass("mbsc-lv-item-hl")),
                                        (a = !1))
                                      : (t = !0)),
                            t &&
                                (Te.insertBefore(ye),
                                (ye = jt((de = ye), "prev")),
                                (me = _e),
                                (_e =
                                    ye.length &&
                                    ye[0].offsetTop + ye[0].offsetHeight),
                                h--)),
                        a &&
                            (_ && (_.removeClass("mbsc-lv-item-hl"), (_ = !1)),
                            w && (w.removeClass("mbsc-lv-item-hl"), (w = !1))),
                        t && N("onSortChange", { target: X[0], index: h }),
                        At(X, o),
                        N("onSort", { target: X[0], index: h });
                } else (5 < Math.abs(x) || 5 < Math.abs(y)) && Et();
        }
        function ut(e) {
            var t,
                a,
                n,
                s = X;
            l &&
                ((l = !1),
                Et(),
                "mouseup" == e.type &&
                    Sa(document).off("mousemove", mt).off("mouseup", ut),
                De ||
                    (ge = setTimeout(function () {
                        ve = !1;
                    }, 300)),
                (Ye || De || C) && (be = !0),
                Ye
                    ? vt()
                    : C
                    ? ((n = f),
                      _
                          ? (Ot(X.detach()),
                            (a = lt[_.attr("data-ref")]),
                            (h = $t(a.child).length),
                            _.removeClass("mbsc-lv-item-hl"),
                            ke.navigateOnDrop
                                ? Kt(_, function () {
                                      et.add(null, X, null, null, _, !0),
                                          qt(X),
                                          xt(X, Q, n, !0);
                                  })
                                : (et.add(null, X, null, null, _, !0),
                                  xt(X, Q, n, !0)))
                          : w
                          ? (Ot(X.detach()),
                            (a = lt[w.attr("data-back")]),
                            (h = $t(a.parent).index(a.item) + 1),
                            w.removeClass("mbsc-lv-item-hl"),
                            ke.navigateOnDrop
                                ? Kt(w, function () {
                                      et.add(null, X, h, null, f, !0),
                                          qt(X),
                                          xt(X, Q, n, !0);
                                  })
                                : (et.add(null, X, h, null, a.parent, !0),
                                  xt(X, Q, n, !0)))
                          : ((t = Te[0].offsetTop - it),
                            At(
                                X,
                                t,
                                6 *
                                    Math.abs(
                                        t - Math.max(re, Math.min(y + Ze, oe))
                                    ),
                                function () {
                                    Ot(X),
                                        X.insertBefore(Te),
                                        xt(X, Q, n, h !== Q);
                                }
                            )),
                      (C = !1))
                    : !De &&
                      Math.abs(x) < 5 &&
                      Math.abs(y) < 5 &&
                      ((q = !0),
                      "touchend" === e.type &&
                          ke.tap &&
                          Ma(e.target, Ca(Sa(e.target)), e)),
                clearTimeout(c),
                setTimeout(function () {
                    s.removeClass(Ga), N("onItemDeactivate", { target: s[0] });
                }, 100),
                (De = !1),
                (v = null));
        }
        function ht(e) {
            var t;
            q &&
                ((t = "true" == X.attr("data-selected")),
                Je.tap &&
                    Je.tap.call(tt, { target: X, index: Q, domEvent: e }, et),
                Re &&
                    !X.hasClass(Ga) &&
                    (X.addClass(K ? Ga : ""),
                    N("onItemActivate", { target: X[0], domEvent: e })),
                Ne &&
                    (ce
                        ? t
                            ? ea(X)
                            : Qt(X)
                        : (ea(Sa(te, T).filter("." + Ka)), Qt(X))),
                !1 !==
                    N("onItemTap", {
                        target: X[0],
                        index: Q,
                        domEvent: e,
                        selected: t,
                    }) && Kt(X));
        }
        function ft(e) {
            ha(u, e.target, ".mbsc-lv-ic-m") &&
                (g || (e.stopPropagation(), e.preventDefault()),
                (Oe = wa(e, "X")),
                (Pe = wa(e, "Y")));
        }
        function pt() {
            (Ye = Pt(Je.swipe, {
                target: X[0],
                index: Q,
                direction: 0 < x ? "right" : "left",
            })) &&
                (Et(),
                clearTimeout(c),
                Je.actions
                    ? ((o = Bt(Je, x)),
                      le
                          .html(Je.icons)
                          .show()
                          .children()
                          .css("width", o + "%"),
                      J.hide(),
                      Sa(".mbsc-lv-ic-m", B).removeClass("mbsc-lv-ic-disabled"),
                      Sa(Je.leftMenu).each(Mt),
                      Sa(Je.rightMenu).each(Mt))
                    : (J.show(),
                      le.hide(),
                      (s = Je.start),
                      (v = Fe[s]),
                      (we = Fe[s - 1]),
                      (ue = Fe[s + 1])),
                X.addClass("mbsc-lv-item-swiping").removeClass(Ga),
                je.css("line-height", Z + "px"),
                B.css({ top: it, height: Z, backgroundColor: Wt(x) })
                    .addClass("mbsc-lv-stage-c-v")
                    .appendTo(f.parent()),
                ke.iconSlide && X.append(J),
                N("onSlideStart", { target: X[0], index: Q }));
        }
        function bt(e) {
            var t = !1;
            Se ||
                (Je.actions
                    ? B.attr(
                          "class",
                          "mbsc-lv-stage-c-v mbsc-lv-stage-c mbsc-lv-" +
                              (d < 0 ? "right" : "left")
                      )
                    : (we && (d < 0 ? d <= we.percent : d < v.percent)
                          ? ((ue = v), (v = we), (we = Fe[--s - 1]), (t = !0))
                          : ue &&
                            (d < 0 ? d > v.percent : d >= ue.percent) &&
                            ((we = v), (v = ue), (ue = Fe[++s + 1]), (t = !0)),
                      v &&
                          ((!t && 0 < d != e <= 0) || Ft(v, ke.iconSlide),
                          t &&
                              N("onStageChange", {
                                  target: X[0],
                                  index: Q,
                                  stage: v,
                              }))),
                Ve || ((Se = !0), (Me = ra(Dt))));
        }
        function vt(t) {
            function e(e) {
                ha(u, e.target, ".mbsc-lv-ic-m") ||
                    (e.preventDefault(), Nt(X, !0, t));
            }
            var a,
                n,
                s = X[0],
                i = !1;
            la(Me),
                (Se = !1),
                Ve || Dt(),
                Je.actions
                    ? 10 < Math.abs(d) &&
                      o &&
                      (Vt(X, d < 0 ? -o : o, 200),
                      (Ua = i = !0),
                      (r = X),
                      (m = Q),
                      s.__mbscOff && s.__mbscOff(),
                      ma(document, "touchstart", e, { passive: !1 }),
                      ma(document, "mousedown", e),
                      (s.__mbscOff = function () {
                          ua(document, "touchstart", e, { passive: !1 }),
                              ua(document, "mousedown", e),
                              delete s.__mbscOff;
                      }))
                    : d &&
                      (ke.quickSwipe &&
                          !Ve &&
                          ((a = (n = new Date() - Ie) < 300 && 50 < x),
                          n < 300 && x < -50
                              ? ((Ce = !0), Ft((v = Je.left), ke.iconSlide))
                              : a &&
                                ((Ce = !0), Ft((v = Je.right), ke.iconSlide))),
                      v &&
                          v.action &&
                          (Pt(v.disabled, { target: X[0], index: Q }) ||
                              ((i = !0),
                              (Ua =
                                  Ve ||
                                  Pt(v.confirm, { target: X[0], index: Q }))
                                  ? (Vt(
                                        X,
                                        ((d < 0 ? -1 : 1) *
                                            J[0].offsetWidth *
                                            100) /
                                            G,
                                        200,
                                        !0
                                    ),
                                    kt(v, X, Q, !1, t))
                                  : St(v, X, Q, t)))),
                i || Nt(X, !0, t),
                (Ye = !1);
        }
        function gt() {
            (w = _ = !(C = !0)),
                (Ze = 0),
                (h = Q),
                ke.vibrate && ya(),
                (de = jt(X, "next")),
                (me = de.length && de[0].offsetTop),
                (ye = jt(X, "prev")),
                (_e = ye.length && ye[0].offsetTop + ye[0].offsetHeight),
                Te.height(Z).insertAfter(X),
                X.css({ top: it })
                    .addClass("mbsc-lv-item-dragging")
                    .removeClass(Ga)
                    .appendTo(M),
                N("onSortStart", { target: X[0], index: h });
        }
        function xt(t, a, n, e) {
            t.removeClass("mbsc-lv-item-dragging"),
                Te.remove(),
                N("onSortEnd", { target: t[0], index: h }),
                ke.vibrate && ya(),
                e &&
                    (et.addUndoAction(function (e) {
                        et.move(t, a, null, e, n, !0);
                    }, !0),
                    N("onSortUpdate", { target: t[0], index: h }));
        }
        function Tt() {
            ve ||
                (clearTimeout($),
                Ua && fa(document, "touchstart"),
                L && (et.close(P, Y), (L = !1), (P = null)));
        }
        function yt() {
            clearTimeout(i),
                (i = setTimeout(function () {
                    (Xe = Ge.innerHeight || Ke.innerHeight()),
                        (Qe = H ? Ke.offset().top : 0),
                        l &&
                            ((it = X[0].offsetTop),
                            (Z = X[0].offsetHeight),
                            B.css({ top: it, height: Z }));
                }, 200));
        }
        function _t(e) {
            be && (e.stopPropagation(), e.preventDefault(), (be = !1));
        }
        function wt() {
            U ||
                (clearTimeout(pe),
                (pe = setTimeout(function () {
                    var e = H
                            ? Ge.getBoundingClientRect().top + Ke.innerHeight()
                            : window.innerHeight,
                        t = ie[0].getBoundingClientRect().top - 3 < e;
                    !U && t && N("onListEnd");
                }, 250)));
        }
        function Ct() {
            if (C || !l) {
                var a,
                    e = Ke.scrollTop(),
                    t = at.offset().top,
                    n = at[0].offsetHeight,
                    s = H ? Ke.offset().top : e;
                Sa(".mbsc-lv-gr-title", at).each(function (e, t) {
                    Sa(t).offset().top < s && (a = t);
                }),
                    t < s && s < t + n
                        ? E.show().empty().append(Sa(a).clone())
                        : E.hide();
            }
        }
        function Mt(e, t) {
            Pt(t.disabled, { target: X[0], index: Q }) &&
                Sa(".mbsc-ic-" + t.icon, B).addClass("mbsc-lv-ic-disabled");
        }
        function St(e, t, a, n) {
            var s,
                i = {
                    icon: "undo2",
                    text: ke.undoText,
                    action: function () {
                        et.undo();
                    },
                };
            e.undo &&
                (et.startActionTrack(),
                Sa.isFunction(e.undo) &&
                    et.addUndoAction(function () {
                        e.undo.call(tt, { target: t[0], index: a }, et);
                    }),
                (qe = t.attr("data-ref"))),
                (s = e.action.call(tt, { target: t[0], index: a }, et)),
                e.undo
                    ? (et.endActionTrack(),
                      !1 !== s &&
                          Vt(t, +t.attr("data-pos") < 0 ? -100 : 100, 200),
                      Te.height(Z).insertAfter(t),
                      t.css("top", it).addClass("mbsc-lv-item-undo"),
                      le.hide(),
                      J.show(),
                      B.append(J),
                      Ft(i),
                      kt(i, t, a, !0, n))
                    : Nt(t, s, n);
        }
        function kt(t, a, n, s, i) {
            function e(e) {
                e.preventDefault(), s && It(a), Nt(a, !0, i);
            }
            function o(e) {
                e.stopPropagation(), (l = wa(e, "X")), (c = wa(e, "Y"));
            }
            function r(e) {
                e.preventDefault(),
                    "touchend" === e.type && _a(),
                    Math.abs(wa(e, "X") - l) < 10 &&
                        Math.abs(wa(e, "Y") - c) < 10 &&
                        (St(t, a, n, i), s && ((Ue = null), It(a)));
            }
            var l,
                c,
                d = a[0];
            (Ua = !0),
                d.__mbscOff && d.__mbscOff(),
                ma(document, "touchstart", e, { passive: !1 }),
                ma(document, "mousedown", e),
                g ||
                    (ma(J[0], "touchstart", o, { passive: !0 }),
                    ma(J[0], "mousedown", o),
                    ma(J[0], "touchend", r),
                    ma(J[0], "mouseup", r)),
                (d.__mbscOff = function () {
                    ua(document, "touchstart", e, { passive: !1 }),
                        ua(document, "mousedown", e),
                        ua(J[0], "touchstart", o, { passive: !0 }),
                        ua(J[0], "mousedown", o),
                        ua(J[0], "touchend", r),
                        ua(J[0], "mouseup", r),
                        delete d.__mbscOff;
                });
        }
        function Dt() {
            Vt(X, He + (100 * x) / G), (Se = !1);
        }
        function Nt(e, t, a) {
            e[0].__mbscOff && e[0].__mbscOff(),
                !1 !== t
                    ? Vt(
                          e,
                          0,
                          "0" !== e.attr("data-pos") ? 200 : 0,
                          !1,
                          function () {
                              Ht(e, a), Ot(e);
                          }
                      )
                    : Ht(e, a),
                (Ua = !1);
        }
        function Vt(e, t, a, n, s) {
            (t = Math.max(
                "right" == Ye ? 0 : -100,
                Math.min(t, "left" == Ye ? 0 : 100)
            )),
                (Le = e[0].style),
                e.attr("data-pos", t),
                (Le[va + "Transform"] =
                    "translate3d(" +
                    (n ? (G * t) / 100 + "px" : t + "%") +
                    ",0,0)"),
                (Le[va + "Transition"] = ba + "transform " + (a || 0) + "ms"),
                s &&
                    (nt++,
                    setTimeout(function () {
                        s(), nt--;
                    }, a)),
                (d = t);
        }
        function At(e, t, a, n) {
            (t = Math.max(re, Math.min(t, oe))),
                ((Le = e[0].style)[va + "Transform"] =
                    "translate3d(0," + t + "px,0)"),
                (Le[va + "Transition"] =
                    ba + "transform " + (a || 0) + "ms ease-out"),
                n &&
                    (nt++,
                    setTimeout(function () {
                        n(), nt--;
                    }, a));
        }
        function Et() {
            clearTimeout(We), !n && et.sortable && ((n = !0), V.remove());
        }
        function Ft(e, t) {
            var a = Pt(e.text, { target: X[0], index: Q }) || "";
            Pt(e.disabled, { target: X[0], index: Q })
                ? B.addClass("mbsc-lv-ic-disabled")
                : B.removeClass("mbsc-lv-ic-disabled"),
                B.css(
                    "background-color",
                    e.color || (0 === e.percent ? Wt(d) : Za)
                ),
                J.attr(
                    "class",
                    "mbsc-lv-ic-c mbsc-lv-ic-" +
                        (t ? "move-" : "") +
                        (d < 0 ? "right" : "left")
                ),
                W.attr(
                    "class",
                    " mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-" +
                        (e.icon || "none")
                ),
                je
                    .attr(
                        "class",
                        "mbsc-lv-ic-text" +
                            (e.icon ? "" : " mbsc-lv-ic-text-only") +
                            (a ? "" : " mbsc-lv-ic-only")
                    )
                    .html(a || "&nbsp;"),
                ke.animateIcons &&
                    (Ce
                        ? W.addClass("mbsc-lv-ic-v")
                        : setTimeout(function () {
                              W.addClass("mbsc-lv-ic-a");
                          }, 10));
        }
        function Ht(e, t) {
            l ||
                (W.attr(
                    "class",
                    "mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"
                ),
                B.attr("style", "").removeClass("mbsc-lv-stage-c-v"),
                je.html("")),
                B.removeClass("mbsc-lv-left mbsc-lv-right"),
                e && (N("onSlideEnd", { target: e[0], index: Q }), t && t());
        }
        function It(e) {
            e.css("top", "").removeClass("mbsc-lv-item-undo"),
                Ue
                    ? et.animate(Te, "collapse", function () {
                          Te.remove();
                      })
                    : Te.remove(),
                Ht(),
                (Ue = qe = null);
        }
        function Ot(e) {
            ((Le = e[0].style)[va + "Transform"] = ""),
                (Le[va + "Transition"] = ""),
                (Le.top = ""),
                e.removeClass("mbsc-lv-item-swiping");
        }
        function Pt(e, t) {
            return Sa.isFunction(e) ? e.call(this, t, et) : e;
        }
        function Lt(e) {
            return (
                Ne &&
                !e.hasClass("mbsc-lv-parent") &&
                !e.hasClass("mbsc-lv-back")
            );
        }
        function Yt(e) {
            var t = e.attr("data-ref"),
                a = e.attr("data-role"),
                n = Be[e.attr("data-type") || "defaults"],
                s = Lt(e) && "true" == e.attr("data-selected");
            if (
                (t || ((t = Xa++), e.attr("data-ref", t)),
                (lt[t] = {
                    item: e,
                    child: e.children(se),
                    parent: e.parent(),
                    ref:
                        e.parent()[0] === tt
                            ? null
                            : e.parent().parent().attr("data-ref"),
                }),
                e.addClass(
                    "list-divider" == a
                        ? "mbsc-lv-gr-title"
                        : "mbsc-lv-item" +
                              (n.actionable ? " mbsc-lv-item-actionable" : "") +
                              (s ? " " + Ka : "")
                ),
                e.attr("aria-selected", s ? "true" : "false"),
                et.sortable.handle &&
                    "list-divider" != a &&
                    !e.children(".mbsc-lv-handle-c").length &&
                    e.append(I),
                ke.enhance && !e.hasClass("mbsc-lv-item-enhanced"))
            ) {
                var i = e.attr("data-icon"),
                    o = e.find("img").eq(0).addClass("mbsc-lv-img");
                o.is(":first-child")
                    ? e.addClass("mbsc-lv-img-" + (ke.rtl ? "right" : "left"))
                    : o.length &&
                      e.addClass("mbsc-lv-img-" + (ke.rtl ? "left" : "right")),
                    e
                        .addClass("mbsc-lv-item-enhanced")
                        .children()
                        .each(function (e, t) {
                            (t = Sa(t)).is("p, h1, h2, h3, h4, h5, h6") &&
                                t.addClass("mbsc-lv-txt");
                        }),
                    i &&
                        e
                            .addClass(
                                "mbsc-lv-item-ic-" +
                                    (e.attr("data-icon-align") ||
                                        (ke.rtl ? "right" : "left"))
                            )
                            .append(
                                '<div class="mbsc-lv-item-ic mbsc-ic mbsc-ic-' +
                                    i +
                                    '"></div>'
                            );
            }
            e.append(et._getText(oa, 0.2));
        }
        function zt(e) {
            Sa(te, e)
                .not(".mbsc-lv-back")
                .each(function () {
                    Yt(Sa(this));
                }),
                Sa(se, e)
                    .not(".mbsc-lv")
                    .addClass("mbsc-lv")
                    .prepend(R)
                    .parent()
                    .addClass("mbsc-lv-parent mbsc-lv-item-actionable")
                    .prepend(j),
                Sa(".mbsc-lv-back", e).each(function () {
                    Sa(this).attr(
                        "data-back",
                        Sa(this).parent().parent().attr("data-ref")
                    );
                });
        }
        function $t(e) {
            return e
                .children(te)
                .not(".mbsc-lv-back")
                .not(".mbsc-lv-removed")
                .not(".mbsc-lv-ph");
        }
        function Rt(e) {
            return (
                "object" != typeof e &&
                    (e = Sa(te, T).filter('[data-id="' + e + '"]')),
                Sa(e)
            );
        }
        function jt(e, t) {
            for (
                e = e[t]();
                e.length &&
                (!e.hasClass("mbsc-lv-item") ||
                    e.hasClass("mbsc-lv-ph") ||
                    e.hasClass("mbsc-lv-item-dragging"));

            ) {
                if (!et.sortable.group && e.hasClass("mbsc-lv-gr-title"))
                    return !1;
                e = e[t]();
            }
            return e;
        }
        function Wt(e) {
            return (0 < e ? Je.right : Je.left).color || Za;
        }
        function Jt(e) {
            return xa(e) ? e + "" : 0;
        }
        function Bt(e, t) {
            return +(t < 0
                ? Jt((e.actionsWidth || 0).right) ||
                  Jt(e.actionsWidth) ||
                  Jt(ke.actionsWidth.right) ||
                  Jt(ke.actionsWidth)
                : Jt((e.actionsWidth || 0).left) ||
                  Jt(e.actionsWidth) ||
                  Jt(ke.actionsWidth.left) ||
                  Jt(ke.actionsWidth));
        }
        function qt(e, t) {
            if (e) {
                var a = Ke.scrollTop(),
                    n = e.is(".mbsc-lv-item") ? e[0].offsetHeight : 0,
                    s = e.offset().top + (H ? a - Qe : 0);
                t
                    ? (s < a || a + Xe < s + n) && Ke.scrollTop(s)
                    : s < a
                    ? Ke.scrollTop(s)
                    : a + Xe < s + n &&
                      Ke.scrollTop(Math.min(s, s + n - Xe / 2));
            }
        }
        function Ut(e, t, a, n, s) {
            var i = t.parent(),
                o = t.prev();
            (n = n || ga),
                o[0] === J[0] && (o = J.prev()),
                ke.rtl && (e = "l" === e ? "r" : "l"),
                f[0] !== t[0]
                    ? (N("onNavStart", { level: st, direction: e, list: t[0] }),
                      Ae.prepend(t.addClass("mbsc-lv-v mbsc-lv-sl-new")),
                      qt(T),
                      Gt(Ae, "mbsc-lv-sl-" + e, function () {
                          f.removeClass("mbsc-lv-sl-curr"),
                              t
                                  .removeClass("mbsc-lv-sl-new")
                                  .addClass("mbsc-lv-sl-curr"),
                              p && p.length
                                  ? f.removeClass("mbsc-lv-v").insertAfter(p)
                                  : b.append(f.removeClass("mbsc-lv-v")),
                              (p = o),
                              (b = i),
                              (f = t),
                              qt(a, s),
                              n.call(tt, a),
                              N("onNavEnd", {
                                  level: st,
                                  direction: e,
                                  list: t[0],
                              });
                      }))
                    : (qt(a, s), n.call(tt, a));
        }
        function Kt(e, t) {
            nt ||
                (e.hasClass("mbsc-lv-parent")
                    ? (st++, Ut("r", lt[e.attr("data-ref")].child, null, t))
                    : e.hasClass("mbsc-lv-back") &&
                      (st--,
                      Ut(
                          "l",
                          lt[e.attr("data-back")].parent,
                          lt[e.attr("data-back")].item,
                          t
                      )));
        }
        function Gt(e, t, a) {
            var n;
            function s() {
                clearTimeout(n),
                    nt--,
                    e.off(pa, s).removeClass(t),
                    a.call(tt, e);
            }
            (a = a || ga),
                ke.animation && "mbsc-lv-item-none" !== t
                    ? (nt++, e.on(pa, s).addClass(t), (n = setTimeout(s, 250)))
                    : a.call(tt, e);
        }
        function Xt(e, t) {
            var a,
                n = e.attr("data-ref");
            (a = rt[n] = rt[n] || []),
                t && a.push(t),
                e.attr("data-action") ||
                    ((t = a.shift()) &&
                        (e.attr("data-action", 1),
                        t(function () {
                            e.removeAttr("data-action"),
                                a.length ? Xt(e) : delete rt[n];
                        })));
        }
        function Zt(a, n, s) {
            var i, o;
            a &&
                a.length &&
                ((i = 100 / (a.length + 2)),
                Sa.each(a, function (e, t) {
                    void 0 === t.key && (t.key = Ee++),
                        void 0 === t.percent &&
                            ((t.percent = n * i * (e + 1)),
                            s &&
                                (((o = Da({}, t)).key = Ee++),
                                (o.percent = -i * (e + 1)),
                                a.push(o),
                                (ot[o.key] = o))),
                        (ot[t.key] = t);
                }));
        }
        function Qt(e) {
            Lt(e) &&
                e
                    .addClass(Ka)
                    .attr("data-selected", "true")
                    .attr("aria-selected", "true");
        }
        function ea(e) {
            e.removeClass(Ka)
                .removeAttr("data-selected")
                .removeAttr("aria-selected");
        }
        Na.call(this, e, t, !0),
            (et.animate = function (e, t, a) {
                Gt(e, "mbsc-lv-item-" + t, a);
            }),
            (et.add = function (e, t, a, n, s, i) {
                var o,
                    r,
                    l,
                    c,
                    d,
                    m,
                    u = "",
                    h = void 0 === s ? at : Rt(s),
                    f = h,
                    p = Sa(
                        "object" != typeof t
                            ? "<" +
                                  ee +
                                  ' data-ref="' +
                                  Xa++ +
                                  '" data-id="' +
                                  e +
                                  '">' +
                                  t +
                                  "</" +
                                  ee +
                                  ">"
                            : t
                    ),
                    b = p[0],
                    v = b.style,
                    g = p.attr("data-pos") < 0 ? "left" : "right",
                    x = p.attr("data-ref");
                (n = n || ga),
                    x || ((x = Xa++), p.attr("data-ref", x)),
                    Yt(p),
                    i ||
                        et.addUndoAction(function (e) {
                            c
                                ? et.navigate(h, function () {
                                      f.remove(),
                                          h
                                              .removeClass("mbsc-lv-parent")
                                              .children(".mbsc-lv-arr")
                                              .remove(),
                                          (d.child = h.children(se)),
                                          et.remove(p, null, e, !0);
                                  })
                                : et.remove(p, null, e, !0);
                        }, !0),
                    Xt(p, function (t) {
                        Ot(p.css("top", "").removeClass("mbsc-lv-item-undo")),
                            h.is(te)
                                ? ((m = h.attr("data-ref")),
                                  h.children(se).length ||
                                      ((c = !0),
                                      h.append("<" + ne + "></" + ne + ">")))
                                : (m = h
                                      .children(".mbsc-lv-back")
                                      .attr("data-back")),
                            (d = lt[m]) &&
                                (d.child.length
                                    ? (f = d.child)
                                    : (h.addClass("mbsc-lv-parent").prepend(j),
                                      (f = h
                                          .children(se)
                                          .prepend(R)
                                          .addClass("mbsc-lv")),
                                      (d.child = f),
                                      Sa(".mbsc-lv-back", h).attr(
                                          "data-back",
                                          m
                                      ))),
                            (lt[x] = {
                                item: p,
                                child: p.children(se),
                                parent: f,
                                ref: m,
                            }),
                            (l = $t(f)),
                            (r = l.length),
                            null == a && (a = r),
                            i && (u = "mbsc-lv-item-new-" + (i ? g : "")),
                            zt(p.addClass(u)),
                            !1 !== a &&
                                (r
                                    ? a < r
                                        ? p.insertBefore(l.eq(a))
                                        : p.insertAfter(l.eq(r - 1))
                                    : (o = Sa(".mbsc-lv-back", f)).length
                                    ? p.insertAfter(o)
                                    : f.append(p)),
                            T.trigger("mbsc-refresh"),
                            ke.animateAddRemove && f.hasClass("mbsc-lv-v")
                                ? ((v.height = b.offsetHeight + "px"),
                                  et.animate(
                                      p,
                                      i && qe === x ? "none" : "expand",
                                      function (e) {
                                          et.animate(
                                              e,
                                              i ? "add-" + g : "pop-in",
                                              function (e) {
                                                  (v.height = ""),
                                                      n.call(
                                                          tt,
                                                          e.removeClass(u)
                                                      ),
                                                      t();
                                              }
                                          );
                                      }
                                  ))
                                : (n.call(tt, p.removeClass(u)), t()),
                            N("onItemAdd", { target: b });
                    });
            }),
            (et.swipe = function (e, t, a, n, s) {
                var i;
                (e = Rt(e)),
                    (X = e),
                    (g = n),
                    (l = Ve = !0),
                    (a = void 0 === a ? 300 : a),
                    (x = 0 < t ? 1 : -1),
                    ct(),
                    pt(),
                    Vt(e, t, a),
                    clearTimeout($e),
                    clearInterval(ze),
                    (ze = setInterval(function () {
                        (i = d), (d = (da(e) / G) * 100), bt(i);
                    }, 10)),
                    ($e = setTimeout(function () {
                        clearInterval(ze),
                            (i = d),
                            (d = t),
                            bt(i),
                            vt(s),
                            (l = Ve = g = !1);
                    }, a));
            }),
            (et.openStage = function (e, t, a, n) {
                ot[t] && et.swipe(e, ot[t].percent, a, n);
            }),
            (et.openActions = function (e, t, a, n) {
                e = Rt(e);
                var s = Bt(
                    Be[e.attr("data-type") || "defaults"],
                    "left" == t ? -1 : 1
                );
                et.swipe(e, "left" == t ? -s : s, a, n);
            }),
            (et.close = function (e, t) {
                et.swipe(e, 0, t);
            }),
            (et.remove = function (e, a, n, s) {
                var i, o, t, r, l, c, d;
                (n = n || ga),
                    (l = (i = Rt(e)).attr("data-ref")),
                    i.length &&
                        lt[l] &&
                        ((o = i.parent()),
                        (r = $t(o).index(i)),
                        (d = i[0].style),
                        (function t(e) {
                            e &&
                                ((c = c || e.hasClass("mbsc-lv-v")),
                                e.children("[data-ref]").each(function () {
                                    var e = Sa(this).attr("data-ref");
                                    lt[e] && (t(lt[e].child), delete lt[e]);
                                }));
                        })(lt[l].child),
                        c &&
                            ((t = ke.animation),
                            (ke.animation = !1),
                            et.navigate(i),
                            (ke.animation = t)),
                        delete lt[l],
                        s ||
                            (i.attr("data-ref") === qe && (Ue = !0),
                            et.addUndoAction(function (e) {
                                et.add(null, i, r, e, o, !0);
                            }, !0)),
                        Xt(i, function (t) {
                            (a =
                                a ||
                                (i.attr("data-pos") < 0 ? "left" : "right")),
                                ke.animateAddRemove && o.hasClass("mbsc-lv-v")
                                    ? et.animate(
                                          i.addClass("mbsc-lv-removed"),
                                          s ? "pop-out" : "remove-" + a,
                                          function (e) {
                                              (d.height =
                                                  e[0].offsetHeight + "px"),
                                                  et.animate(
                                                      e,
                                                      "collapse",
                                                      function (e) {
                                                          (d.height = ""),
                                                              Ot(
                                                                  e.removeClass(
                                                                      "mbsc-lv-removed"
                                                                  )
                                                              ),
                                                              !1 !==
                                                                  n.call(
                                                                      tt,
                                                                      e
                                                                  ) &&
                                                                  e.remove(),
                                                              t();
                                                      }
                                                  );
                                          }
                                      )
                                    : (!1 !== n.call(tt, i) && i.remove(), t()),
                                N("onItemRemove", { target: i[0] });
                        }));
            }),
            (et.move = function (e, t, a, n, s, i) {
                (e = Rt(e)),
                    i || et.startActionTrack(),
                    B.append(J),
                    et.remove(e, a, null, i),
                    et.add(null, e, t, n, s, i),
                    i || et.endActionTrack();
            }),
            (et.navigate = function (e, t) {
                var a, n;
                (e = Rt(e)),
                    (a = lt[e.attr("data-ref")]),
                    (n = (function (e) {
                        for (
                            var t = 0, a = lt[e.attr("data-ref")];
                            a && a.ref;

                        )
                            t++, (a = lt[a.ref]);
                        return t;
                    })(e)),
                    a &&
                        (Ut(st <= n ? "r" : "l", a.parent, e, t, !0), (st = n));
            }),
            (et.showLoading = function () {
                (U = !0),
                    ie.addClass("mbsc-show-lv-loading"),
                    Ke.scrollTop(
                        H ? Ge.scrollHeight : Sa(ke.context)[0].scrollHeight
                    );
            }),
            (et.hideLoading = function () {
                ie.removeClass("mbsc-show-lv-loading"),
                    setTimeout(function () {
                        U = !1;
                    }, 100);
            }),
            (et.select = function (e) {
                ce || ea(Sa(te, T).filter("." + Ka)), Qt(Rt(e));
            }),
            (et.deselect = function (e) {
                ea(Rt(e));
            }),
            (et._processSettings = function () {
                at.is("[mbsc-enhance]") &&
                    ((F = !0), at.removeAttr("mbsc-enhance"));
            }),
            (et._init = function () {
                var e,
                    t,
                    a,
                    n = 0,
                    s = "",
                    i = "",
                    o = "";
                (ne = ke.listNode),
                    (se = ke.listSelector),
                    (ee = ke.itemNode),
                    (te = ke.itemSelector),
                    (ce = "multiple" == ke.select),
                    (Ne = "off" != ke.select),
                    (a = et.remote.listview.sortable),
                    et.remote.listview.handlePos,
                    (I = et.remote.listview.handleDiv),
                    (R = et.remote.listview.htmlLeft),
                    (j = et.remote.listview.htmlRight),
                    (e = et.remote.listview.contClass),
                    (et.sortable = a || !1),
                    T
                        ? (T.attr("class", e),
                          Sa(".mbsc-lv-handle-c", T).remove(),
                          Sa(te, T)
                              .not(".mbsc-lv-back")
                              .removeClass("mbsc-lv-item"),
                          ua(Ge, "orientationchange", yt),
                          ua(Ge, "resize", yt),
                          ua(Ge, "scroll", wt),
                          ua(Ge, "touchmove", wt, { passive: !0 }),
                          fe &&
                              (ua(Ge, "scroll", fe),
                              ua(Ge, "touchmove", fe, { passive: !0 })))
                        : ((s += '<div class="mbsc-lv-multi-c"></div>'),
                          (s +=
                              '<div class="mbsc-lv-ic-c"><div class="mbsc-lv-ic-s mbsc-lv-ic mbsc-ic mbsc-ic-none"></div><div class="mbsc-lv-ic-text"></div></div>'),
                          at
                              .addClass("mbsc-lv mbsc-lv-v mbsc-lv-root")
                              .removeClass("mbsc-cloak")
                              .show(),
                          (B = Sa(
                              '<div class="mbsc-lv-stage-c">' + s + "</div>"
                          )),
                          (J = Sa(".mbsc-lv-ic-c", B)),
                          (le = Sa(".mbsc-lv-multi-c", B)),
                          (W = Sa(".mbsc-lv-ic-s", B)),
                          (je = Sa(".mbsc-lv-ic-text", B)),
                          (Te = Sa(
                              "<" +
                                  ee +
                                  ' class="mbsc-lv-item mbsc-lv-ph"></' +
                                  ee +
                                  ">"
                          )),
                          (V = Sa('<div class="mbsc-lv-fill-item"></div>')),
                          (T = Sa(
                              '<div class="' +
                                  e +
                                  '"><' +
                                  ne +
                                  ' class="mbsc-lv mbsc-lv-dummy"></' +
                                  ne +
                                  '><div class="mbsc-lv-sl-c"></div><div class="mbsc-lv-loading"><span class="mbsc-ic mbsc-ic-' +
                                  (ke.loadingIcon || "loop2") +
                                  '"></span></div></div>'
                          )),
                          (u = T[0]),
                          (M = Sa(".mbsc-lv-dummy", T)),
                          (ie = Sa(".mbsc-lv-loading", T)),
                          T.insertAfter(at),
                          yt(),
                          ma(u, "mousedown", dt),
                          ma(document, "touchstart", dt, { passive: !1 }),
                          ma(document, "touchmove", mt, { passive: !1 }),
                          T.on("touchend touchcancel", ".mbsc-lv-item", ut).on(
                              "click",
                              ".mbsc-lv-item",
                              ht
                          ),
                          ma(tt, "click", _t, !0),
                          ma(u, "mousedown", ft),
                          ma(document, "touchstart", ft, { passive: !1 }),
                          T.on("touchend mouseup", ".mbsc-lv-ic-m", function (
                              e
                          ) {
                              g ||
                                  ("touchend" === e.type && _a(),
                                  Ua &&
                                      !Sa(this).hasClass(
                                          "mbsc-lv-ic-disabled"
                                      ) &&
                                      Math.abs(wa(e, "X") - Oe) < 10 &&
                                      Math.abs(wa(e, "Y") - Pe) < 10 &&
                                      St(
                                          (d < 0 ? Je.rightMenu : Je.leftMenu)[
                                              Sa(this).index()
                                          ],
                                          r,
                                          m
                                      ));
                          }),
                          (Ae = Sa(".mbsc-lv-sl-c", T)
                              .append(at.addClass("mbsc-lv-sl-curr"))
                              .attr("data-ref", Xa++)),
                          (f = at),
                          (b = T)),
                    (H = "body" !== ke.context),
                    (Ke = Sa(H ? ke.context : window)),
                    ma((Ge = Ke[0]), "orientationchange", yt),
                    ma(Ge, "resize", yt),
                    ma(Ge, "scroll", wt),
                    ma(Ge, "touchmove", wt, { passive: !0 }),
                    (Ee = 0),
                    ((Be = ke.itemGroups || {}).defaults = {
                        swipeleft: ke.swipeleft,
                        swiperight: ke.swiperight,
                        stages: ke.stages,
                        actions: ke.actions,
                        actionsWidth: ke.actionsWidth,
                        actionable: ke.actionable,
                    }),
                    zt(at),
                    Sa.each(Be, function (e, a) {
                        if (
                            ((a.swipe =
                                void 0 !== a.swipe ? a.swipe : ke.swipe),
                            (a.actionable =
                                void 0 !== a.actionable
                                    ? a.actionable
                                    : ke.actionable),
                            (a.stages = a.stages || []),
                            Zt(a.stages, 1, !0),
                            Zt(a.stages.left, 1),
                            Zt(a.stages.right, -1),
                            (a.stages.left || a.stages.right) &&
                                (a.stages = [].concat(
                                    a.stages.left || [],
                                    a.stages.right || []
                                )),
                            (A = !1),
                            a.stages.length ||
                                (a.swipeleft &&
                                    a.stages.push({
                                        percent: -30,
                                        action: a.swipeleft,
                                    }),
                                a.swiperight &&
                                    a.stages.push({
                                        percent: 30,
                                        action: a.swiperight,
                                    })),
                            Sa.each(a.stages, function (e, t) {
                                if (0 === t.percent) return !(A = !0);
                            }),
                            A || a.stages.push({ percent: 0 }),
                            a.stages.sort(function (e, t) {
                                return e.percent - t.percent;
                            }),
                            Sa.each(a.stages, function (e, t) {
                                if (0 === t.percent) return (a.start = e), !1;
                            }),
                            A
                                ? (a.left = a.right = a.stages[a.start])
                                : ((a.left = a.stages[a.start - 1] || {}),
                                  (a.right = a.stages[a.start + 1] || {})),
                            a.actions)
                        ) {
                            for (
                                a.leftMenu = a.actions.left || a.actions,
                                    a.rightMenu = a.actions.right || a.leftMenu,
                                    o = i = "",
                                    n = 0;
                                n < a.leftMenu.length;
                                n++
                            )
                                i +=
                                    "<div " +
                                    (a.leftMenu[n].color
                                        ? 'style="background-color: ' +
                                          a.leftMenu[n].color +
                                          '"'
                                        : "") +
                                    ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' +
                                    a.leftMenu[n].icon +
                                    '">' +
                                    (a.leftMenu[n].text || "") +
                                    "</div>";
                            for (n = 0; n < a.rightMenu.length; ++n)
                                o +=
                                    "<div " +
                                    (a.rightMenu[n].color
                                        ? 'style="background-color: ' +
                                          a.rightMenu[n].color +
                                          '"'
                                        : "") +
                                    ' class="mbsc-lv-ic-m mbsc-lv-ic mbsc-ic mbsc-ic-' +
                                    a.rightMenu[n].icon +
                                    '">' +
                                    (a.rightMenu[n].text || "") +
                                    "</div>";
                            a.actions.left &&
                                (a.swipe = a.actions.right ? a.swipe : "right"),
                                a.actions.right &&
                                    (a.swipe = a.actions.left
                                        ? a.swipe
                                        : "left"),
                                (a.icons =
                                    '<div class="mbsc-lv-multi mbsc-lv-multi-ic-left">' +
                                    i +
                                    '</div><div class="mbsc-lv-multi mbsc-lv-multi-ic-right">' +
                                    o +
                                    "</div>");
                        }
                    }),
                    ke.fixedHeader &&
                        ((t =
                            "mbsc-lv-fixed-header" +
                            (H
                                ? " mbsc-lv-fixed-header-ctx mbsc-lv-" +
                                  ke.theme +
                                  " mbsc-" +
                                  ke.theme +
                                  (ke.baseTheme
                                      ? " mbsc-lv-" +
                                        ke.baseTheme +
                                        " mbsc-" +
                                        ke.baseTheme
                                      : "")
                                : "")),
                        E
                            ? (E.attr("class", t), Ct())
                            : (E = Sa('<div class="' + t + '"></div>')),
                        H ? Ke.before(E) : T.prepend(E),
                        (fe = Ta(Ct, 200)),
                        ma(Ge, "scroll", fe),
                        ma(Ge, "touchmove", fe, { passive: !0 })),
                    ke.hover &&
                        (Y ||
                            T.on(
                                "mouseover.mbsc-lv",
                                ".mbsc-lv-item",
                                function () {
                                    (P && P[0] == this) ||
                                        (Tt(),
                                        (P = Sa(this)),
                                        Be[P.attr("data-type") || "defaults"]
                                            .actions &&
                                            ($ = setTimeout(function () {
                                                ve
                                                    ? (P = null)
                                                    : ((L = !0),
                                                      et.openActions(
                                                          P,
                                                          O,
                                                          Y,
                                                          !1
                                                      ));
                                            }, z)));
                                }
                            ).on("mouseleave.mbsc-lv", Tt),
                        (Y = ke.hover.time || 200),
                        (z = ke.hover.timeout || 200),
                        (O = ke.hover.direction || ke.hover || "right")),
                    F && T.attr("mbsc-enhance", ""),
                    T.trigger("mbsc-enhance", [
                        { theme: ke.theme, lang: ke.lang },
                    ]);
            }),
            (et._destroy = function () {
                var e;
                b.append(f),
                    H && E && E.remove(),
                    F &&
                        (at.attr("mbsc-enhance", ""),
                        (e = ka[u.id]) && e.destroy()),
                    ua(document, "touchstart", dt, { passive: !1 }),
                    ua(document, "touchstart", ft, { passive: !1 }),
                    ua(document, "touchmove", mt, { passive: !1 }),
                    ua(tt, "click", _t, !0),
                    T.find(".mbsc-lv-txt,.mbsc-lv-img").removeClass(
                        "mbsc-lv-txt mbsc-lv-img"
                    ),
                    T.find(se)
                        .removeClass(
                            "mbsc-lv mbsc-lv-v mbsc-lv-root mbsc-lv-sl-curr"
                        )
                        .find(te)
                        .removeClass(
                            "mbsc-lv-gr-title mbsc-lv-item mbsc-lv-item-enhanced mbsc-lv-parent mbsc-lv-img-left mbsc-lv-img-right mbsc-lv-item-ic-left mbsc-lv-item-ic-right"
                        )
                        .removeAttr("data-ref"),
                    Sa(
                        ".mbsc-lv-back,.mbsc-lv-handle-c,.mbsc-lv-arr,.mbsc-lv-item-ic",
                        T
                    ).remove(),
                    at.insertAfter(T),
                    T.remove(),
                    B.remove(),
                    ua(Ge, "orientationchange", yt),
                    ua(Ge, "resize", yt),
                    ua(Ge, "scroll", wt),
                    ua(Ge, "touchmove", wt, { passive: !0 }),
                    fe &&
                        (ua(Ge, "scroll", fe),
                        ua(Ge, "touchmove", fe, { passive: !0 }));
            });
        var ta,
            aa = [],
            na = [],
            sa = [],
            ia = 0;
        (et.startActionTrack = function () {
            ia || (sa = []), ia++;
        }),
            (et.endActionTrack = function () {
                --ia || na.push(sa);
            }),
            (et.addUndoAction = function (e, t) {
                var a = { action: e, async: t };
                ia
                    ? sa.push(a)
                    : (na.push([a]), na.length > ke.undoLimit && na.shift());
            }),
            (et.undo = function () {
                var e, t, a;
                function n() {
                    t < 0
                        ? ((ta = !1), s())
                        : ((e = a[t]),
                          t--,
                          e.async ? e.action(n) : (e.action(), n()));
                }
                function s() {
                    (a = aa.shift()) && ((ta = !0), (t = a.length - 1), n());
                }
                na.length && aa.push(na.pop()), ta || s();
            }),
            (ke = et.settings),
            (N = et.trigger),
            et.init();
    }
    var Ua,
        Ka = "mbsc-selected",
        Ga = "mbsc-lv-item-active",
        Xa = 1,
        Za = "transparent";
    (qa.prototype = {
        _class: "listview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _defaults: {
            context: "body",
            actionsWidth: 90,
            sortDelay: 250,
            undoLimit: 10,
            tap: v,
            swipe: !0,
            quickSwipe: !0,
            animateAddRemove: !0,
            animateIcons: !0,
            animation: !0,
            revert: !0,
            vibrate: !0,
            actionable: !0,
            handleClass: "",
            handleMarkup:
                '<div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div><div class="mbsc-lv-handle-bar mbsc-lv-handle"></div>',
            listNode: "ul",
            listSelector: "ul,ol",
            itemNode: "li",
            itemSelector: "li",
            leftArrowClass: "mbsc-ic-arrow-left4",
            rightArrowClass: "mbsc-ic-arrow-right4",
            backText: "Back",
            undoText: "Undo",
            stages: [],
            select: "off",
        },
    }),
        O(
            "listview",
            (Z.ListView = qa),
            !(oa.themes.listview.mobiscroll = {
                leftArrowClass: "mbsc-ic-arrow-left5",
                rightArrowClass: "mbsc-ic-arrow-right5",
            })
        );
    var Qa = {
        batch: 50,
        min: 0,
        max: 100,
        defaultUnit: "",
        units: null,
        unitNames: null,
        invalid: [],
        sign: !1,
        step: 0.05,
        scale: 2,
        convert: function (e) {
            return e;
        },
        decimalSeparator: ".",
        signText: "&nbsp;",
        wholeText: "Whole",
        fractionText: "Fraction",
        unitText: "Unit",
    };
    Ye.measurement = function (b) {
        var a,
            v,
            g,
            x,
            T,
            y,
            _,
            w,
            C,
            M,
            S,
            k,
            e,
            t,
            n = Da({}, b.settings),
            D = Da(b.settings, Qa, n),
            s = {},
            i = [[]],
            N = {},
            V = {},
            o = {},
            A = [],
            E = D.sign,
            F = D.units && D.units.length,
            H = F ? D.defaultUnit || D.units[0] : "",
            r = [],
            I = D.step < 1,
            O = 1 < D.step ? D.step : 1,
            l = I ? Math.max(D.scale, (D.step + "").split(".")[1].length) : 1,
            c = Math.pow(10, l),
            P = Math.round(I ? D.step * c : D.step),
            d = 0,
            m = 0,
            L = 0;
        function u(e) {
            return Math.max(
                C,
                Math.min(
                    M,
                    I
                        ? e < 0
                            ? Math.ceil(e)
                            : Math.floor(e)
                        : $(Math.round(e - d), P) + d
                )
            );
        }
        function h(e) {
            return I ? $((Math.abs(e) - Math.abs(u(e))) * c - m, P) + m : 0;
        }
        function Y(e) {
            var t = u(e),
                a = h(e);
            return (
                c <= a && (e < 0 ? t-- : t++, (a = 0)),
                [e < 0 ? "-" : "+", t, a]
            );
        }
        function z(e) {
            var t = +e[T],
                a = I ? (e[x] / c) * (t < 0 ? -1 : 1) : 0;
            return (E && "-" == e[0] ? -1 : 1) * (t + a);
        }
        function $(e, t) {
            return Math.round(e / t) * t;
        }
        function R(e, t, a) {
            return t !== a && D.convert ? D.convert.call(this, e, t, a) : e;
        }
        function j(e) {
            var t, a;
            (_ = R(D.min, H, e)),
                (w = R(D.max, H, e)),
                I
                    ? ((C = _ < 0 ? Math.ceil(_) : Math.floor(_)),
                      (M = w < 0 ? Math.ceil(w) : Math.floor(w)),
                      (S = h(_)),
                      (k = h(w)))
                    : ((C = Math.round(_)),
                      (M = Math.round(w)),
                      (M = C + Math.floor((M - C) / P) * P),
                      (d = C % P)),
                (t = C),
                (a = M),
                E &&
                    ((a =
                        Math.abs(t) > Math.abs(a) ? Math.abs(t) : Math.abs(a)),
                    (t = t < 0 ? 0 : t)),
                (V.min = t < 0 ? Math.ceil(t / O) : Math.floor(t / O)),
                (V.max = a < 0 ? Math.ceil(a / O) : Math.floor(a / O));
        }
        function f(e) {
            return z(e).toFixed(I ? l : 0) + (F ? " " + r[e[y]] : "");
        }
        if (
            ((b.setVal = function (e, t, a, n, s) {
                b._setVal(Sa.isArray(e) ? f(e) : e, t, a, n, s);
            }),
            D.units)
        )
            for (t = 0; t < D.units.length; ++t)
                (e = D.units[t]), r.push((D.unitNames && D.unitNames[e]) || e);
        if (E)
            if (((E = !1), F))
                for (t = 0; t < D.units.length; t++)
                    R(D.min, H, D.units[t]) < 0 && (E = !0);
            else E = D.min < 0;
        if (
            (E && (i[0].push({ data: ["-", "+"], label: D.signText }), L++),
            (V = {
                label: D.wholeText,
                data: function (e) {
                    return (C % O) + e * O;
                },
                getIndex: function (e) {
                    return Math.round((e - (C % O)) / O);
                },
            }),
            i[0].push(V),
            (T = L++),
            j(H),
            I)
        ) {
            for (
                i[0].push(o), o.data = [], o.label = D.fractionText, t = m;
                t < c;
                t += P
            )
                A.push(t),
                    o.data.push({
                        value: t,
                        display: D.decimalSeparator + oe(t, l),
                    });
            (x = L++),
                (a = Math.ceil(100 / P)),
                D.invalid &&
                    D.invalid.length &&
                    (Sa.each(D.invalid, function (e, t) {
                        var a = 0 < t ? Math.floor(t) : Math.ceil(t);
                        0 === a && (a = t <= 0 ? -0.001 : 0.001),
                            (N[a] = (N[a] || 0) + 1),
                            0 === t && (N[(a = 0.001)] = (N[a] || 0) + 1);
                    }),
                    Sa.each(N, function (e, t) {
                        t < a ? delete N[e] : (N[e] = e);
                    }));
        }
        if (F) {
            for (
                s = {
                    data: [],
                    label: D.unitText,
                    cssClass: "mbsc-msr-whl-unit",
                    circular: !1,
                },
                    t = 0;
                t < D.units.length;
                t++
            )
                s.data.push({ value: t, display: r[t] });
            i[0].push(s);
        }
        return (
            (y = L),
            {
                wheels: i,
                minWidth: E && I ? 70 : 80,
                showLabel: !1,
                formatValue: f,
                compClass: "mbsc-msr mbsc-sc",
                parseValue: function (e) {
                    var t,
                        a = (
                            (("number" == typeof e ? e + "" : e) ||
                                D.defaultValue) + ""
                        ).split(" "),
                        n = +a[0],
                        s = [],
                        i = "";
                    return (
                        F &&
                            (i =
                                -1 ==
                                (i =
                                    -1 == (i = Sa.inArray(a[1], r))
                                        ? Sa.inArray(H, D.units)
                                        : i)
                                    ? 0
                                    : i),
                        j((g = F ? D.units[i] : "")),
                        ((t = Y(
                            (n = he((n = isNaN(n) ? 0 : n), _, w))
                        ))[1] = he(t[1], C, M)),
                        (v = n),
                        E && ((s[0] = t[0]), (t[1] = Math.abs(t[1]))),
                        (s[T] = t[1]),
                        I && (s[x] = t[2]),
                        F && (s[y] = i),
                        s
                    );
                },
                onCancel: function () {
                    v = void 0;
                },
                validate: function (e) {
                    var a,
                        n,
                        t,
                        s,
                        i,
                        o = e.values,
                        r = e.index,
                        l = e.direction,
                        c = {},
                        d = [],
                        m = {},
                        u = F ? D.units[o[y]] : "";
                    if (
                        (E &&
                            0 === r &&
                            (v = Math.abs(v) * ("-" == o[0] ? -1 : 1)),
                        (r === T ||
                            (r === x && I) ||
                            void 0 === v ||
                            void 0 === r) &&
                            ((v = z(o)), (g = u)),
                        ((F && r === y && g !== u) || void 0 === r) &&
                            (j(u),
                            (v = R(v, g, u)),
                            (g = u),
                            (n = Y(v)),
                            void 0 !== r && ((m[T] = V), b.changeWheel(m)),
                            E && (o[0] = n[0])),
                        (d[T] = []),
                        E)
                    )
                        for (
                            d[0] = [],
                                0 < _ && (d[0].push("-"), (o[0] = "+")),
                                w < 0 && (d[0].push("+"), (o[0] = "-")),
                                i = Math.abs("-" == o[0] ? C : M),
                                L = i + O;
                            L < i + 20 * O;
                            L += O
                        )
                            d[T].push(L), (c[L] = !0);
                    if (
                        ((v = he(v, _, w)),
                        (n = Y(v)),
                        (t = E ? Math.abs(n[1]) : n[1]),
                        (a = E ? "-" == o[0] : v < 0),
                        (o[T] = t),
                        a && (n[0] = "-"),
                        I && (o[x] = n[2]),
                        Sa.each(I ? N : D.invalid, function (e, t) {
                            if (E && a) {
                                if (!(t <= 0)) return;
                                t = Math.abs(t);
                            }
                            (t = $(R(t, H, u), I ? 1 : P)),
                                (c[t] = !0),
                                d[T].push(t);
                        }),
                        (o[T] = b.getValidValue(T, t, l, c)),
                        (n[1] = o[T] * (E && a ? -1 : 1)),
                        I)
                    ) {
                        d[x] = [];
                        var h = E
                                ? o[0] + o[1]
                                : (v < 0 ? "-" : "+") + Math.abs(n[1]),
                            f = (_ < 0 ? "-" : "+") + Math.abs(C),
                            p = (w < 0 ? "-" : "+") + Math.abs(M);
                        h === f &&
                            Sa(A).each(function (e, t) {
                                (a ? S < t : t < S) && d[x].push(t);
                            }),
                            h === p &&
                                Sa(A).each(function (e, t) {
                                    (a ? t < k : k < t) && d[x].push(t);
                                }),
                            Sa.each(D.invalid, function (e, t) {
                                (s = Y(R(t, H, u))),
                                    (n[0] === s[0] ||
                                        (0 === n[1] &&
                                            0 === s[1] &&
                                            0 === s[2])) &&
                                        n[1] === s[1] &&
                                        d[x].push(s[2]);
                            });
                    }
                    return { disabled: d, valid: o };
                },
            }
        );
    };
    var en = {
            min: 0,
            max: 100,
            defaultUnit: "km",
            units: ["m", "km", "in", "ft", "yd", "mi"],
        },
        tn = {
            mm: 0.001,
            cm: 0.01,
            dm: 0.1,
            m: 1,
            dam: 10,
            hm: 100,
            km: 1e3,
            in: 0.0254,
            ft: 0.3048,
            yd: 0.9144,
            ch: 20.1168,
            fur: 201.168,
            mi: 1609.344,
            lea: 4828.032,
        };
    Ye.distance = function (e) {
        var t = Da({}, en, e.settings);
        return (
            Da(e.settings, t, {
                sign: !1,
                convert: function (e, t, a) {
                    return (e * tn[t]) / tn[a];
                },
            }),
            Ye.measurement.call(this, e)
        );
    };
    var an = {
            min: 0,
            max: 100,
            defaultUnit: "N",
            units: ["N", "kp", "lbf", "pdl"],
        },
        nn = { N: 1, kp: 9.80665, lbf: 4.448222, pdl: 0.138255 };
    Ye.force = function (e) {
        var t = Da({}, an, e.settings);
        return (
            Da(e.settings, t, {
                sign: !1,
                convert: function (e, t, a) {
                    return (e * nn[t]) / nn[a];
                },
            }),
            Ye.measurement.call(this, e)
        );
    };
    var sn = {
            min: 0,
            max: 1e3,
            defaultUnit: "kg",
            units: ["g", "kg", "oz", "lb"],
            unitNames: { tlong: "t (long)", tshort: "t (short)" },
        },
        on = {
            mg: 0.001,
            cg: 0.01,
            dg: 0.1,
            g: 1,
            dag: 10,
            hg: 100,
            kg: 1e3,
            t: 1e6,
            drc: 1.7718452,
            oz: 28.3495,
            lb: 453.59237,
            st: 6350.29318,
            qtr: 12700.58636,
            cwt: 50802.34544,
            tlong: 1016046.9088,
            tshort: 907184.74,
        };
    Ye.mass = function (e) {
        var t = Da({}, sn, e.settings);
        return (
            Da(e.settings, t, {
                sign: !1,
                convert: function (e, t, a) {
                    return (e * on[t]) / on[a];
                },
            }),
            Ye.measurement.call(this, e)
        );
    };
    var rn = {
            min: 0,
            max: 100,
            defaultUnit: "kph",
            units: ["kph", "mph", "mps", "fps", "knot"],
            unitNames: {
                kph: "km/h",
                mph: "mi/h",
                mps: "m/s",
                fps: "ft/s",
                knot: "knot",
            },
        },
        ln = { kph: 1, mph: 1.60934, mps: 3.6, fps: 1.09728, knot: 1.852 };
    Ye.speed = function (e) {
        var t = Da({}, rn, e.settings);
        return (
            Da(e.settings, t, {
                sign: !1,
                convert: function (e, t, a) {
                    return (e * ln[t]) / ln[a];
                },
            }),
            Ye.measurement.call(this, e)
        );
    };
    var cn = {
            min: -20,
            max: 40,
            defaultUnit: "c",
            units: ["c", "k", "f", "r"],
            unitNames: { c: "°C", k: "K", f: "°F", r: "°R" },
        },
        dn = {
            c2k: function (e) {
                return e + 273.15;
            },
            c2f: function (e) {
                return (9 * e) / 5 + 32;
            },
            c2r: function (e) {
                return (9 * (e + 273.15)) / 5;
            },
            k2c: function (e) {
                return e - 273.15;
            },
            k2f: function (e) {
                return (9 * e) / 5 - 459.67;
            },
            k2r: function (e) {
                return (9 * e) / 5;
            },
            f2c: function (e) {
                return (5 * (e - 32)) / 9;
            },
            f2k: function (e) {
                return (5 * (e + 459.67)) / 9;
            },
            f2r: function (e) {
                return e + 459.67;
            },
            r2c: function (e) {
                return (5 * (e - 491.67)) / 9;
            },
            r2k: function (e) {
                return (5 * e) / 9;
            },
            r2f: function (e) {
                return e - 459.67;
            },
        };
    (Ye.temperature = function (e) {
        var t = Da({}, cn, e.settings);
        return (
            Da(e.settings, t, {
                sign: !0,
                convert: function (e, t, a) {
                    return dn[t + "2" + a](e);
                },
            }),
            Ye.measurement.call(this, e)
        );
    }),
        O("measurement", je),
        O("distance", je),
        O("force", je),
        O("mass", je),
        O("speed", je),
        O("temperature", je);
    function mn(o, e, t) {
        var r,
            l,
            a,
            n,
            c,
            s,
            i,
            d,
            m,
            u,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T = {},
            y = 1e3,
            _ = this,
            w = Sa(o);
        function C(e) {
            clearTimeout(u),
                (u = setTimeout(function () {
                    D(!e || "load" !== e.type);
                }, 200));
        }
        function M() {
            i && this.parentNode === o && S(Sa(this), !0);
        }
        function S(e, t) {
            if (e.length) {
                if (((t = _._onItemTap(e, t)), (r = e).parent()[0] == o)) {
                    var a = e.offset().left,
                        n = e[0].offsetLeft,
                        s = e[0].offsetWidth,
                        i = l.offset().left;
                    h && (n = v - n - s),
                        "a" == b.variant
                            ? a < i
                                ? f.scroll(h ? n + s - c : -n, y, !0)
                                : i + c < a + s &&
                                  f.scroll(h ? n : c - n - s, y, !0)
                            : f.scroll(
                                  (c / 2 - n - s / 2) * (h ? -1 : 1),
                                  y,
                                  !0
                              );
                }
                t && x("onItemTap", { target: e[0] });
            }
        }
        function k() {
            var s;
            _._initMarkup(l),
                w.find(".mbsc-ripple").remove(),
                (_._$items = w.children()),
                _._$items.each(function (e) {
                    var t,
                        a = Sa(this),
                        n = a.attr("data-ref");
                    (n = n || un++),
                        0 === e && (s = a),
                        (r = r || _._getActiveItem(a)),
                        (t =
                            "mbsc-scv-item mbsc-btn-e " +
                            ((_._getItemProps(a) || {}).cssClass || "")),
                        a.attr("data-ref", n).removeClass(T[n]).addClass(t),
                        (T[n] = t),
                        a.append(_._getText(oa, 0.2));
                }),
                (r = r || s),
                _._markupReady(l);
        }
        function D(e, t) {
            var a = b.itemWidth,
                n = b.layout;
            if (((_.contWidth = c = l.width()), _._checkResp())) return !1;
            (e && m === c) ||
                !c ||
                ((m = c),
                xa(n) && (s = c ? c / n : a) < a && (n = "liquid"),
                a &&
                    ("liquid" == n
                        ? (s = c
                              ? c /
                                Math.min(Math.floor(c / a), _._$items.length)
                              : a)
                        : "fixed" == n && (s = a)),
                _._size(c, s),
                s && w.children().css("width", s + "px"),
                (_.totalWidth = v = o.offsetWidth),
                Da(f.settings, {
                    contSize: c,
                    maxSnapScroll: !!b.paging && 1,
                    maxScroll: 0,
                    minScroll: c < v ? c - v : 0,
                    snap: b.paging ? c : !!p && (s || ".mbsc-scv-item"),
                    elastic: c < v && (s || c),
                }),
                f.refresh(t),
                r && S(r, !1));
        }
        Na.call(this, o, e, !0),
            (_.navigate = function (e, t) {
                S(_._getItem(e), t);
            }),
            (_.next = function (e) {
                if (r) {
                    var t = r.next();
                    t.length && S((r = t), e);
                }
            }),
            (_.prev = function (e) {
                if (r) {
                    var t = r.prev();
                    t.length && S((r = t), e);
                }
            }),
            (_.refresh = _.position = function (e) {
                k(), D(!1, e);
            }),
            (_._init = function () {
                var e;
                (a = Sa(b.context)),
                    (n = Sa("body" == b.context ? window : b.context)),
                    _.__init(),
                    (h = _.remote.menustrip.rtlSetting),
                    (p = _.remote.menustrip.snapSetting),
                    (e =
                        _.remote.menustrip.contClass +
                        (_._getContClass() || "")),
                    l
                        ? (l.attr("class", e),
                          o.__mbscRippleOff && o.__mbscRippleOff())
                        : ((l = Sa(
                              '<div class="' +
                                  e +
                                  '"><div class="mbsc-scv-sc"></div></div>'
                          )
                              .on("click", ".mbsc-scv-item", M)
                              .insertAfter(w))
                              .find(".mbsc-scv-sc")
                              .append(w),
                          l.find("img").on("load", C),
                          n.on("orientationchange resize", C),
                          (d = ke(l[0], C, b.zone)),
                          (f = new pt(l[0], {
                              axis: "X",
                              contSize: 0,
                              maxScroll: 0,
                              maxSnapScroll: 1,
                              minScroll: 0,
                              snap: 1,
                              elastic: 1,
                              rtl: h,
                              mousewheel: b.mousewheel,
                              thresholdX: b.threshold,
                              stopProp: b.stopProp,
                              onStart: function (e) {
                                  "touchstart" == e.domEvent.type &&
                                      ((i = !1),
                                      g ||
                                          ((g = !0),
                                          a
                                              .find(".mbsc-no-touch")
                                              .removeClass("mbsc-no-touch")));
                              },
                              onBtnTap: function (e) {
                                  i = !0;
                                  var t = e.domEvent,
                                      a = t.target;
                                  "touchend" === t.type &&
                                      b.tap &&
                                      Ma(a, Ca(Sa(a)), t);
                              },
                              onGestureStart: function (e) {
                                  x("onGestureStart", e);
                              },
                              onGestureEnd: function (e) {
                                  x("onGestureEnd", e);
                              },
                              onMove: function (e) {
                                  x("onMove", e);
                              },
                              onAnimationStart: function (e) {
                                  x("onAnimationStart", e);
                              },
                              onAnimationEnd: function (e) {
                                  x("onAnimationEnd", e);
                              },
                          }))),
                    w
                        .css("display", "")
                        .addClass("mbsc-scv")
                        .removeClass("mbsc-cloak"),
                    k(),
                    x("onMarkupReady", { target: l[0] }),
                    D();
            }),
            (_._size = ga),
            (_._initMarkup = ga),
            (_._markupReady = ga),
            (_._getContClass = ga),
            (_._getItemProps = ga),
            (_._getActiveItem = ga),
            (_.__init = ga),
            (_.__destroy = ga),
            (_._destroy = function () {
                _.__destroy(),
                    n.off("orientationchange resize", C),
                    w
                        .removeClass("mbsc-scv")
                        .insertAfter(l)
                        .find(".mbsc-scv-item")
                        .each(function () {
                            var e = Sa(this);
                            e.width("").removeClass(T[e.attr("data-ref")]);
                        }),
                    l.remove(),
                    f.destroy(),
                    d.detach();
            }),
            (_._getItem = function (e) {
                return (
                    "object" != typeof e &&
                        (e = _._$items.filter('[data-id="' + e + '"]')),
                    Sa(e)
                );
            }),
            (_._onItemTap = function (e, t) {
                return void 0 === t || t;
            }),
            (b = _.settings),
            (x = _.trigger),
            t || _.init();
    }
    var un = 1;
    (mn.prototype = {
        _class: "scrollview",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _responsive: !0,
        _defaults: { tap: v, stopProp: !1, context: "body", layout: "liquid" },
    }),
        (Z.ScrollView = mn);
    function hn(a, e, t) {
        var n,
            s,
            i,
            o,
            r,
            l,
            c = Sa(a),
            d = this;
        function m() {
            s && "inline" != s && n.find(".mbsc-page").css("padding-" + s, "");
        }
        function u(e) {
            e.addClass(r)
                .attr("data-selected", "true")
                .attr("aria-selected", "true");
        }
        function h(e) {
            e.removeClass(r)
                .removeAttr("data-selected")
                .removeAttr("aria-selected");
        }
        mn.call(this, a, e, !0),
            (d.select = function (e) {
                i || h(d._$items.filter(".mbsc-ms-item-sel")), u(d._getItem(e));
            }),
            (d.deselect = function (e) {
                h(d._getItem(e));
            }),
            (d.enable = function (e) {
                d._getItem(e)
                    .removeClass("mbsc-disabled")
                    .removeAttr("data-disabled")
                    .removeAttr("aria-disabled");
            }),
            (d.disable = function (e) {
                d._getItem(e)
                    .addClass("mbsc-disabled")
                    .attr("data-disabled", "true")
                    .attr("aria-disabled", "true");
            }),
            (d.setBadge = function (e, t) {
                var a;
                (e = d._getItem(e).attr("data-badge", t)),
                    (a = Sa(".mbsc-ms-badge", e)).length
                        ? t
                            ? a.html(t)
                            : a.remove()
                        : t &&
                          e.append(
                              '<span class="mbsc-ms-badge">' + t + "</span>"
                          );
            }),
            (d._markupReady = function (e) {
                d._hasIcons
                    ? e.addClass("mbsc-ms-icons")
                    : e.removeClass("mbsc-ms-icons"),
                    d._hasText
                        ? e.addClass("mbsc-ms-txt")
                        : e.removeClass("mbsc-ms-txt"),
                    d.__markupReady(e);
            }),
            (d._size = function (e, t) {
                d.__size(e, t),
                    "inline" != s &&
                        n
                            .find(".mbsc-page")
                            .css("padding-" + s, a.offsetHeight + "px");
            }),
            (d._onItemTap = function (e, t) {
                return (
                    !1 !== d.__onItemTap(e, t) &&
                    (void 0 === t && (t = !i),
                    o &&
                        t &&
                        !e.hasClass("mbsc-disabled") &&
                        (i
                            ? "true" == e.attr("data-selected")
                                ? h(e)
                                : u(e)
                            : (h(d._$items.filter(".mbsc-ms-item-sel")), u(e))),
                    t)
                );
            }),
            (d._getActiveItem = function (e) {
                var t = "true" == e.attr("data-selected");
                if (o && !i && t) return e;
            }),
            (d._getItemProps = function (e) {
                var t = "true" == e.attr("data-selected"),
                    a = "true" == e.attr("data-disabled"),
                    n = e.attr("data-icon"),
                    s = e.attr("data-badge");
                return (
                    e
                        .attr("data-role", "button")
                        .attr("aria-selected", t ? "true" : "false")
                        .attr("aria-disabled", a ? "true" : "false")
                        .find(".mbsc-ms-badge")
                        .remove(),
                    s &&
                        e.append(
                            '<span class="mbsc-ms-badge">' + s + "</span>"
                        ),
                    n && (d._hasIcons = !0),
                    e.text() && (d._hasText = !0),
                    {
                        cssClass:
                            "mbsc-ms-item " +
                            (l.itemClass || "") +
                            " " +
                            (t ? r : "") +
                            (a
                                ? " mbsc-disabled " + (l.disabledClass || "")
                                : "") +
                            (n ? " mbsc-ms-ic mbsc-ic mbsc-ic-" + n : ""),
                    }
                );
            }),
            (d._getContClass = function () {
                return (
                    " mbsc-ms-c mbsc-ms-" +
                    l.variant +
                    " mbsc-ms-" +
                    s +
                    (o ? "" : " mbsc-ms-nosel") +
                    (d.__getContClass() || "")
                );
            }),
            (d.__init = function () {
                d.___init(),
                    (n = Sa(l.context)),
                    m(),
                    (s = l.display),
                    (i = "multiple" == l.select),
                    (o = "off" != l.select),
                    (r = " mbsc-ms-item-sel " + (l.activeClass || "")),
                    c.addClass("mbsc-ms mbsc-ms-base " + (l.groupClass || ""));
            }),
            (d.__destroy = function () {
                c.removeClass("mbsc-ms mbsc-ms-base " + (l.groupClass || "")),
                    m(),
                    d.___destroy();
            }),
            (d.__onItemTap = ga),
            (d.__getContClass = ga),
            (d.__markupReady = ga),
            (d.__size = ga),
            (d.___init = ga),
            (d.___destroy = ga),
            (l = d.settings),
            t || d.init();
    }
    hn.prototype = { _defaults: Da({}, mn.prototype._defaults) };
    function fn(e, t) {
        hn.call(this, e, t, !0), (this.___init = function () {}), this.init();
    }
    (fn.prototype = {
        _class: "optionlist",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _responsive: !0,
        _defaults: Da({}, hn.prototype._defaults, {
            select: "multiple",
            variant: "a",
            display: "inline",
        }),
    }),
        (Z.Optionlist = fn),
        (oa.themes.optionlist = oa.themes.navigation),
        O("optionlist", fn, !1);
    function pn(e, t) {
        var l,
            c,
            d,
            m,
            u,
            h = Sa(e),
            n = h.is("ul,ol"),
            f = this;
        hn.call(this, e, t, !0),
            (f._initMarkup = function () {
                l && l.remove(), c && h.append(c.children());
            }),
            (f.__size = function (a, n) {
                var s,
                    i = n || 72,
                    o = f._$items.length,
                    r = 0;
                u.hide(),
                    "bottom" == m.type &&
                        (h.removeClass("mbsc-scv-liq"),
                        l.remove(),
                        f._$items.remove().each(function (e) {
                            var t = Sa(this);
                            h.append(t),
                                (r += n || this.offsetWidth || 0),
                                Math.round(r + (e < o - 1 ? i : 0)) > a &&
                                    ((s = !0),
                                    c.append(
                                        t
                                            .css("width", "")
                                            .addClass("mbsc-fr-btn-e")
                                    ));
                        }),
                        l
                            .attr(
                                "class",
                                d +
                                    (m.moreIcon
                                        ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" +
                                          m.moreIcon
                                        : "")
                            )
                            .html(f._hasIcons && f._hasText ? m.moreText : ""),
                        s && h.append(l)),
                    "liquid" == m.layout && h.addClass("mbsc-scv-liq");
            }),
            (f.__onItemTap = function (e) {
                if (
                    e.hasClass("mbsc-menu-item") &&
                    !1 !== f.trigger("onMenuShow", { target: e[0], menu: u })
                )
                    return u.show(!1, !0), !1;
            }),
            (f.__getContClass = function () {
                return "hamburger" == m.type ? " mbsc-ms-hamburger" : "";
            }),
            (f.__markupReady = function (e) {
                "hamburger" == m.type &&
                    (c.append(f._$items.addClass("mbsc-fr-btn-e")),
                    l
                        .attr(
                            "class",
                            d +
                                (m.menuIcon
                                    ? " mbsc-menu-item-ic mbsc-ms-ic mbsc-ic mbsc-ic-" +
                                      m.menuIcon
                                    : "")
                        )
                        .html(m.menuText || ""),
                    h.append(l),
                    (m.menuText && m.menuIcon) ||
                        e.removeClass("mbsc-ms-icons"),
                    m.menuText
                        ? e.addClass("mbsc-ms-txt")
                        : e.removeClass("mbsc-ms-txt"));
            }),
            (f.___init = function () {
                var a;
                "tab" == m.type
                    ? ((m.display = m.display || "top"),
                      (m.variant = m.variant || "b"))
                    : "bottom" == m.type
                    ? ((m.display = m.display || "bottom"),
                      (m.variant = m.variant || "a"))
                    : "hamburger" == m.type &&
                      ((m.display = m.display || "inline"),
                      (m.variant = m.variant || "a")),
                    (d =
                        "mbsc-scv-item mbsc-ms-item mbsc-btn-e mbsc-menu-item " +
                        (m.itemClass || "")),
                    l ||
                        ((l = Sa(n ? "<li></li>" : "<div></div>")),
                        (c = Sa(n ? "<ul></ul>" : "<div></div>").addClass(
                            "mbsc-scv mbsc-ms"
                        ))),
                    (u = new ta(c[0], {
                        display: "bubble",
                        theme: m.theme,
                        lang: m.lang,
                        context: m.context,
                        buttons: [],
                        anchor: l,
                        onBeforeShow: function (e, t) {
                            (a = null),
                                (t.settings.cssClass =
                                    "mbsc-wdg mbsc-ms-a mbsc-ms-more" +
                                    (f._hasText ? "" : " mbsc-ms-more-icons"));
                        },
                        onBeforeClose: function () {
                            return f.trigger("onMenuHide", {
                                target: a && a[0],
                                menu: u,
                            });
                        },
                        onMarkupReady: function (e, t) {
                            f.tap(t._markup.find(".mbsc-fr-c"), function (e) {
                                (a = Sa(e.target).closest(".mbsc-ms-item"))
                                    .length &&
                                    !a.hasClass("mbsc-disabled") &&
                                    (f.navigate(a, !0), u.hide());
                            });
                        },
                    }));
            }),
            (f.___destroy = function () {
                u.destroy(), h.append(f._$items), l.remove();
            }),
            (m = f.settings),
            f.init();
    }
    (pn.prototype = {
        _class: "navigation",
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _responsive: !0,
        _defaults: Da({}, hn.prototype._defaults, {
            type: "bottom",
            moreText: "More",
            moreIcon: "material-more-horiz",
            menuIcon: "material-menu",
        }),
    }),
        O("nav", (Z.Navigation = pn), !1),
        (Ye.number = Ye.measurement),
        O("number", je);
    function bn(s, e, t) {
        var i,
            o,
            r,
            l,
            c,
            d,
            m,
            a,
            n,
            u,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T,
            y,
            _,
            w = Sa(s),
            C = this,
            M = [],
            S = [],
            k = {},
            D = {},
            N = {},
            V = {
                48: 0,
                49: 1,
                50: 2,
                51: 3,
                52: 4,
                53: 5,
                54: 6,
                55: 7,
                56: 8,
                57: 9,
                96: 0,
                97: 1,
                98: 2,
                99: 3,
                100: 4,
                101: 5,
                102: 6,
                103: 7,
                104: 8,
                105: 9,
            };
        function A(e) {
            var t,
                a =
                    d.validate.call(
                        s,
                        { values: g.slice(0), variables: k },
                        C
                    ) || [],
                n = (a && a.disabled) || [];
            if (
                ((C._isValid = !a.invalid),
                (C._tempValue = d.formatValue.call(s, g.slice(0), k, C)),
                (c = g.length),
                (x = a.length || y),
                C._isVisible && oa.eHzJD)
            ) {
                if (
                    (Sa(".mbsc-np-ph", i).each(function (e) {
                        Sa(this).html(
                            "ltr" == d.fill
                                ? c <= e
                                    ? l
                                    : m || g[e]
                                : y - x <= e
                                ? e + c < y
                                    ? l
                                    : m || g[e + c - y]
                                : ""
                        );
                    }),
                    Sa(".mbsc-np-cph", i).each(function () {
                        Sa(this).html(
                            k[Sa(this).attr("data-var")] ||
                                Sa(this).attr("data-ph")
                        );
                    }),
                    c === y)
                )
                    for (t = 0; t <= 9; t++) n.push(t);
                for (
                    Sa(".mbsc-np-btn", i).removeClass(r), t = 0;
                    t < n.length;
                    t++
                )
                    Sa('.mbsc-np-btn[data-val="' + n[t] + '"]', i).addClass(r);
                C._isValid
                    ? Sa(".mbsc-fr-btn-s .mbsc-fr-btn", i).removeClass(r)
                    : Sa(".mbsc-fr-btn-s .mbsc-fr-btn", i).addClass(r),
                    C.live &&
                        ((C._hasValue = e || C._hasValue),
                        E(e, !1, e),
                        e && T("onSet", { valueText: C._value }));
            }
        }
        function E(e, t, a, n) {
            t && A(),
                n ||
                    ((_ = g.slice(0)),
                    (D = Da({}, k)),
                    (M = S.slice(0)),
                    (C._value = C._hasValue ? C._tempValue : null)),
                e &&
                    (C._isInput &&
                        w.val(C._hasValue && C._isValid ? C._value : ""),
                    T("onFill", {
                        valueText: C._hasValue ? C._tempValue : "",
                        change: a,
                    }),
                    a && ((C._preventChange = !0), w.trigger("change")));
        }
        function F(e) {
            var t,
                a,
                n = e || [],
                s = [];
            for (S = [], k = {}, t = 0; t < n.length; t++)
                /:/.test(n[t])
                    ? ((a = n[t].split(":")), (k[a[0]] = a[1]), S.push(a[0]))
                    : (s.push(n[t]), S.push("digit"));
            return s;
        }
        function H(e, t) {
            T("onInput", {
                domEvent: t,
                target: e,
                values: g.slice(0),
                valueText: C._tempValue,
                variables: k,
            });
        }
        function I(e, t) {
            e &&
                (e = Sa.isArray(e) ? e : [e]).forEach(function (e) {
                    N[e] = t;
                });
        }
        function O(e, t, a) {
            !(c || t || d.allowLeadingZero) ||
                e.hasClass("mbsc-disabled") ||
                e.hasClass("mbsc-np-btn-empty") ||
                (c < y &&
                    oa.eHzJD &&
                    (S.push("digit"), g.push(t), A(!0), H(e[0], a)));
        }
        function P(e, t) {
            var a,
                n,
                s = e.attr("data-val"),
                i = "false" !== e.attr("data-track"),
                o = e.attr("data-var");
            if (!e.hasClass("mbsc-disabled")) {
                if (
                    (o &&
                        ((n = o.split(":")),
                        i && S.push(n[0]),
                        (k[n[0]] =
                            void 0 === n[2]
                                ? n[1]
                                : k[n[0]] == n[1]
                                ? n[2]
                                : n[1])),
                    s.length + c <= x)
                )
                    for (a = 0; a < s.length; ++a)
                        (n = xa(s[a]) ? +s[a] : s[a]),
                            (d.allowLeadingZero || c || n) &&
                                (S.push("digit"), g.push(n), (c = g.length));
                A(!0), H(e[0], t);
            }
        }
        function L(e) {
            var t,
                a,
                n = S.pop();
            if (c || "digit" !== n) {
                if ("digit" !== n && k[n])
                    for (
                        delete k[n], a = S.slice(0), S = [], t = 0;
                        t < a.length;
                        t++
                    )
                        a[t] !== n && S.push(a[t]);
                else g.pop();
                A(!0), H(o, e);
            }
        }
        function Y() {
            clearInterval(v), (b = !1);
        }
        function z(e) {
            if (ca(e, this)) {
                if ("keydown" == e.type && 32 != e.keyCode) return;
                !(function (e) {
                    (b = !0),
                        (a = wa(e, "X")),
                        (n = wa(e, "Y")),
                        clearInterval(v),
                        clearTimeout(v),
                        L(e),
                        (v = setInterval(function () {
                            L(e);
                        }, 150));
                })(e),
                    "mousedown" == e.type &&
                        Sa(document).on("mousemove", $).on("mouseup", R);
            }
        }
        function $(e) {
            b &&
                ((u = wa(e, "X")),
                (h = wa(e, "Y")),
                (f = u - a),
                (p = h - n),
                (7 < Math.abs(f) || 7 < Math.abs(p)) && Y());
        }
        function R(e) {
            b &&
                (e.preventDefault(),
                Y(),
                "mouseup" == e.type &&
                    Sa(document).off("mousemove", $).off("mouseup", R));
        }
        Ne.call(this, s, e, !0),
            (C.setVal = C._setVal = function (e, t, a, n) {
                (C._hasValue = null != e),
                    (g = F(
                        Sa.isArray(e) ? e.slice(0) : d.parseValue.call(s, e, C)
                    )),
                    E(t, !0, void 0 === a ? t : a, n);
            }),
            (C.getVal = C._getVal = function (e) {
                return C._hasValue || e ? C[e ? "_tempValue" : "_value"] : null;
            }),
            (C.setArrayVal = C.setVal),
            (C.getArrayVal = function (e) {
                return e ? g.slice(0) : C._hasValue ? _.slice(0) : null;
            }),
            (C._readValue = function () {
                var e = w.val() || "";
                "" !== e && (C._hasValue = !0),
                    m
                        ? ((k = {}), (S = []), (g = []))
                        : ((k = C._hasValue ? D : {}),
                          (S = C._hasValue ? M : []),
                          (g =
                              C._hasValue && _
                                  ? _.slice(0)
                                  : F(d.parseValue.call(s, e, C))),
                          E(!1, !0));
            }),
            (C._fillValue = function () {
                E((C._hasValue = !0), !1, !0);
            }),
            (C._generateContent = function () {
                var e,
                    t,
                    a,
                    n = 1,
                    s = d.leftKey,
                    i = d.rightKey,
                    o = "";
                for (
                    o +=
                        '<div class="mbsc-np-hdr"><div role="button" tabindex="0" aria-label="' +
                        d.deleteText +
                        '" class="mbsc-np-del mbsc-fr-btn-e mbsc-ic mbsc-ic-' +
                        d.deleteIcon +
                        '"></div><div class="mbsc-np-dsp">',
                        o += d.template
                            .replace(
                                /d/g,
                                '<span class="mbsc-np-ph">' + l + "</span>"
                            )
                            .replace(/&#100;/g, "d")
                            .replace(
                                /{([a-zA-Z0-9]*):?([a-zA-Z0-9\-_]*)}/g,
                                '<span class="mbsc-np-cph" data-var="$1" data-ph="$2">$2</span>'
                            ),
                        o += "</div></div>",
                        o +=
                            '<div class="mbsc-np-tbl-c mbsc-w-p"><div class="mbsc-np-tbl">',
                        e = 0;
                    e < 4;
                    e++
                ) {
                    for (o += '<div class="mbsc-np-row">', t = 0; t < 3; t++)
                        10 == (a = n) || 12 == n
                            ? (a = "")
                            : 11 == n && (a = 0),
                            "" === a
                                ? 10 == n && s
                                    ? (I(s.keys, "left"),
                                      (o +=
                                          '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-np-btn-custom-left mbsc-fr-btn-e" ' +
                                          (s.variable
                                              ? 'data-var="' + s.variable + '"'
                                              : "") +
                                          ' data-val="' +
                                          (s.value || "") +
                                          '" ' +
                                          (void 0 !== s.track
                                              ? ' data-track="' + s.track + '"'
                                              : "") +
                                          ">" +
                                          s.text +
                                          "</div>"))
                                    : 12 == n && d.rightKey
                                    ? (I(i.keys, "right"),
                                      (o +=
                                          '<div role="button" tabindex="0" class="mbsc-np-btn mbsc-np-btn-custom mbsc-np-btn-custom-right mbsc-fr-btn-e" ' +
                                          (i.variable
                                              ? 'data-var="' + i.variable + '"'
                                              : "") +
                                          ' data-val="' +
                                          (i.value || "") +
                                          '" ' +
                                          (void 0 !== i.track
                                              ? ' data-track="' + i.track + '"'
                                              : "") +
                                          " >" +
                                          i.text +
                                          "</div>"))
                                    : (o +=
                                          '<div class="mbsc-np-btn mbsc-np-btn-empty"></div>')
                                : (o +=
                                      '<div tabindex="0" role="button" class="mbsc-np-btn mbsc-fr-btn-e" data-val="' +
                                      a +
                                      '">' +
                                      a +
                                      C._getText(oa, 0.2) +
                                      "</div>"),
                            n++;
                    o += "</div>";
                }
                return (o += "</div></div>");
            }),
            (C._markupReady = function () {
                (i = C._markup), A();
            }),
            (C._attachEvents = function (n) {
                n.on("keydown", function (e) {
                    var t,
                        a = e.keyCode;
                    void 0 !== N[a]
                        ? (t = Sa(".mbsc-np-btn-custom-" + N[a], n)).length &&
                          ("sign:-:" === t.attr("data-var") &&
                              (k.sign = 107 === a || 187 === a ? "-" : ""),
                          P(t, e))
                        : void 0 !== V[a]
                        ? O(
                              Sa('.mbsc-np-btn[data-val="' + V[a] + '"]', n),
                              V[a],
                              e
                          )
                        : 8 == a && (e.preventDefault(), L(e));
                }),
                    C.tap(
                        Sa(".mbsc-np-btn", n),
                        function (e) {
                            var t = Sa(this);
                            t.hasClass("mbsc-np-btn-custom")
                                ? P(t, e)
                                : O(t, +t.attr("data-val"), e);
                        },
                        !1,
                        30,
                        !0
                    ),
                    ma((o = Sa(".mbsc-np-del", n)[0]), "touchstart", z, {
                        passive: !0,
                    }),
                    ma(o, "mousedown", z),
                    ma(o, "keydown", z),
                    ma(o, "touchmove", $, { passive: !0 }),
                    ma(o, "mousemove", $),
                    ma(o, "touchend", R),
                    ma(o, "mouseup", R),
                    ma(o, "keyup", R);
            }),
            (C.__init = function () {
                ((d = C.settings).template = d.template.replace(
                    /\\d/,
                    "&#100;"
                )),
                    (l = d.placeholder),
                    (y = (d.template.match(/d/g) || []).length),
                    (r = "mbsc-disabled " + (d.disabledClass || "")),
                    (m = d.mask),
                    (T = C.trigger),
                    m && w.is("input") && w.attr("type", "password");
            }),
            (C._indexOf = function (e, t) {
                var a;
                for (a = 0; a < e.length; ++a)
                    if (e[a].toString() === t.toString()) return a;
                return -1;
            }),
            t || C.init();
    }
    var vn = {};
    (bn.prototype = {
        _hasDef: !0,
        _hasTheme: !0,
        _hasLang: !0,
        _responsive: !0,
        _class: "numpad",
        _presets: vn,
        _defaults: Da({}, Ne.prototype._defaults, {
            template: "dd.dd",
            placeholder: "0",
            deleteIcon: "backspace",
            allowLeadingZero: !1,
            headerText: !1,
            fill: "rtl",
            compClass: "mbsc-np",
            deleteText: "Delete",
            decimalSeparator: ".",
            thousandsSeparator: ",",
            validate: ga,
            parseValue: ga,
            formatValue: function (e, t, a) {
                var n,
                    s = 1,
                    i = a.settings,
                    o = i.placeholder,
                    r = i.template,
                    l = e.length,
                    c = r.length,
                    d = "";
                for (n = 0; n < c; n++)
                    "d" == r[c - n - 1]
                        ? ((d = s <= l ? e[l - s] + d : o + d), s++)
                        : (d = r[c - n - 1] + d);
                return (
                    Sa.each(t, function (e, t) {
                        d = d.replace("{" + e + "}", t);
                    }),
                    Sa("<div>" + d + "</div>").text()
                );
            },
        }),
    }),
        (Z.Numpad = bn),
        (oa.themes.numpad = oa.themes.frame);
    var gn = {
        entryMode: "template",
        min: 0,
        max: 99.99,
        maxScale: 4,
        prefix: "",
        suffix: "",
        returnAffix: !1,
    };
    function xn(e) {
        for (var t = 0, a = 1, n = 0; e.length; )
            3 < t ? (a = 3600) : 1 < t && (a = 60),
                (n += e.pop() * a * (t % 2 ? 10 : 1)),
                t++;
        return n;
    }
    vn.decimal = function (l) {
        var e = Da({}, l.settings),
            t = { scale: "freeform" == e.entryMode ? void 0 : 2 },
            c = Da(l.settings, gn, t, e),
            d = c.scale,
            m = +c.min.toFixed(d),
            u = +c.max.toFixed(d),
            a = m < 0,
            h = new RegExp(c.thousandsSeparator, "g"),
            f = (Math.floor(Math.max(u, Math.abs(m))) + "").length + 1,
            p = "freeform" == c.entryMode;
        function b(e, t) {
            var a = +e
                .map(function (e, t) {
                    return (0 === t && "." === e ? "0" : "") + e;
                })
                .join("");
            if (!p) for (var n = 0; n < d; n++) a /= 10;
            return t ? -1 * a : a;
        }
        function v(e, t) {
            var a = "";
            !p || (void 0 !== d && t)
                ? (a = b(e).toFixed(d))
                : ("." === e[0] && (a += "0"), (a += e.join("")));
            var n = a.split("."),
                s = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, c.thousandsSeparator),
                i = n[1] ? c.decimalSeparator + n[1] : "";
            return (
                void 0 !== n[1] &&
                    !n[1].length &&
                    p &&
                    (i = c.decimalSeparator),
                s + i
            );
        }
        (l.setVal = function (e, t, a, n) {
            return (
                "string" == typeof e &&
                    (e = +e
                        .replace(c.thousandsSeparator, "")
                        .replace(c.decimalSeparator, ".")),
                l._setVal(he(e, m, u), t, a, n)
            );
        }),
            (l.getVal = function (e) {
                var t = l._getVal(e),
                    a = (t + "")
                        .replace(h, "")
                        .replace(c.decimalSeparator, ".");
                return xa(a) ? +a : t;
            });
        var n = Array(f).join("d");
        return (
            (n += p
                ? void 0 !== d
                    ? d
                        ? Array(d + 2).join("d")
                        : ""
                    : Array(c.maxScale + 2).join("d")
                : d
                ? "." + Array(d + 1).join("d")
                : ""),
            {
                template:
                    (a ? "{sign}" : "") +
                    c.prefix.replace(/d/g, "\\d") +
                    n +
                    c.suffix.replace(/d/g, "\\d"),
                leftKey: a
                    ? {
                          text: "-/+",
                          variable: "sign:-:",
                          track: !1,
                          keys: [107, 109, 187, 189],
                      }
                    : void 0,
                rightKey: p
                    ? { text: c.decimalSeparator, value: ".", keys: [110, 190] }
                    : void 0,
                allowLeadingZero: p,
                parseValue: function (e) {
                    var t,
                        a,
                        n = e || c.defaultValue,
                        s = [],
                        i = void 0 !== d ? d : c.maxScale;
                    if (0 === e || "0" === e) return [0];
                    if (
                        n &&
                        (a = (n = (n + "")
                            .replace(h, "")
                            .replace(c.decimalSeparator, ".")).match(
                            /\d+\.?\d*/g
                        ))
                    ) {
                        for (a = (+a[0]).toFixed(i), t = 0; t < a.length; t++)
                            if ("." != a[t]) {
                                if (+a[t]) s.push(+a[t]);
                                else if (s.length) {
                                    var o = a.indexOf("."),
                                        r =
                                            a.length > t + 1 &&
                                            a.substring(t + 1).match(/[1-9]+/);
                                    (!p || t < o || r) && s.push(0);
                                }
                            } else p && s.push(".");
                        var l = a.indexOf(".");
                        (a.length <= l + 1 ||
                            !a.substring(l + 1).match(/[1-9]+/)) &&
                            s.splice(s.indexOf("."), 1);
                    }
                    return e < 0 && s.unshift("sign:-"), s;
                },
                formatValue: function (e, t) {
                    var a = v(e, !0);
                    return (
                        (b(e, t && "-" == t.sign) < 0 ? "-" : "") +
                        (c.returnAffix ? c.prefix + a + c.suffix : a)
                    );
                },
                validate: function (e) {
                    var t,
                        a = e.values,
                        n = v(a),
                        s = b(a, e.variables && "-" == e.variables.sign),
                        i = [],
                        o =
                            u < s ||
                            s < m ||
                            (!!c.invalid && -1 != l._indexOf(c.invalid, s));
                    if (
                        (a.length || c.allowLeadingZero || p || i.push(0),
                        (a.length >= f || -1 !== a.indexOf(".")) && i.push("."),
                        p)
                    ) {
                        if (1 == a.length && 0 === a[0])
                            for (t = 0; t <= 9; t++) i.push(t);
                        (a.length && "." != a[a.length - 1]) || (o = !0);
                        var r = void 0 !== d ? d : c.maxScale;
                        if (a.length >= r + 1 && "." == a[a.length - r - 1])
                            for (t = 0; t <= 9; t++) i.push(t);
                    }
                    return (
                        l.isVisible() &&
                            Sa(".mbsc-np-dsp", l._markup).html(
                                (e.variables.sign || "") +
                                    c.prefix +
                                    n +
                                    c.suffix || "&nbsp;"
                            ),
                        { disabled: i, invalid: o }
                    );
                },
            }
        );
    };
    var Tn = ["h", "m", "s"],
        yn = {
            min: 0,
            max: 362439,
            defaultValue: 0,
            hourTextShort: "h",
            minuteTextShort: "m",
            secTextShort: "s",
        };
    vn.timespan = function (s) {
        var e = Da({}, s.settings),
            i = Da(s.settings, yn, e),
            o = {
                h: i.hourTextShort.replace(/d/g, "\\d"),
                m: i.minuteTextShort.replace(/d/g, "\\d"),
                s: i.secTextShort.replace(/d/g, "\\d"),
            },
            t = 'd<span class="mbsc-np-sup mbsc-np-time">' + o.s + "</span>";
        function r(a) {
            var n,
                s = "",
                i = 3600;
            return (
                Sa(Tn).each(function (e, t) {
                    (n = Math.floor(a / i)),
                        (a -= n * i),
                        (i /= 60),
                        (0 < n || ("s" == t && !s)) &&
                            (s = s + (s ? " " : "") + n + o[t]);
                }),
                s
            );
        }
        return (
            9 < i.max && (t = "d" + t),
            99 < i.max &&
                (t =
                    '<span class="mbsc-np-ts-m">' +
                    (639 < i.max ? "d" : "") +
                    'd</span><span class="mbsc-np-sup mbsc-np-time">' +
                    o.m +
                    "</span>" +
                    t),
            6039 < i.max &&
                (t =
                    '<span class="mbsc-np-ts-h">' +
                    (38439 < i.max ? "d" : "") +
                    'd</span><span class="mbsc-np-sup mbsc-np-time">' +
                    o.h +
                    "</span>" +
                    t),
            (s.setVal = function (e, t, a, n) {
                return xa(e) && (e = r(e)), s._setVal(e, t, a, n);
            }),
            (s.getVal = function (e) {
                return s._hasValue || e ? xn(s.getArrayVal(e)) : null;
            }),
            {
                template: t,
                parseValue: function (e) {
                    var a,
                        n = e || r(i.defaultValue),
                        s = [];
                    return (
                        n &&
                            Sa(Tn).each(function (e, t) {
                                (a = new RegExp("(\\d+)" + o[t], "gi").exec(n))
                                    ? 9 < (a = +a[1])
                                        ? (s.push(Math.floor(a / 10)),
                                          s.push(a % 10))
                                        : (s.length && s.push(0),
                                          (a || s.length) && s.push(a))
                                    : s.length && (s.push(0), s.push(0));
                            }),
                        s
                    );
                },
                formatValue: function (e) {
                    return r(xn(e));
                },
                validate: function (e) {
                    var t = e.values,
                        a = xn(t.slice(0)),
                        n = [];
                    return (
                        t.length || n.push(0),
                        {
                            disabled: n,
                            invalid:
                                a > i.max ||
                                a < i.min ||
                                (!!i.invalid &&
                                    -1 != s._indexOf(i.invalid, +a)),
                        }
                    );
                },
            }
        );
    };
    var _n = { timeFormat: "hh:ii A", amText: "am", pmText: "pm" };
    vn.time = function (s) {
        var e = Da({}, s.settings),
            h = Da(s.settings, _n, e),
            f = h.timeFormat.split(":"),
            p = h.timeFormat.match(/a/i),
            i = p ? ("a" == p[0] ? h.amText : h.amText.toUpperCase()) : "",
            o = p ? ("a" == p[0] ? h.pmText : h.pmText.toUpperCase()) : "",
            b = 0,
            v = h.min ? "" + h.min.getHours() : "",
            g = h.max ? "" + h.max.getHours() : "",
            x = h.min
                ? "" +
                  (h.min.getMinutes() < 10
                      ? "0" + h.min.getMinutes()
                      : h.min.getMinutes())
                : "",
            T = h.max
                ? "" +
                  (h.max.getMinutes() < 10
                      ? "0" + h.max.getMinutes()
                      : h.max.getMinutes())
                : "",
            y = h.min
                ? "" +
                  (h.min.getSeconds() < 10
                      ? "0" + h.min.getSeconds()
                      : h.min.getSeconds())
                : "",
            _ = h.max
                ? "" +
                  (h.max.getSeconds() < 10
                      ? "0" + h.max.getSeconds()
                      : h.max.getSeconds())
                : "";
        function r(e, t) {
            var a,
                n = "";
            for (a = 0; a < e.length; ++a)
                n +=
                    e[a] +
                    (a % 2 == (e.length % 2 == 1 ? 0 : 1) && a != e.length - 1
                        ? ":"
                        : "");
            return (
                Sa.each(t, function (e, t) {
                    n += " " + t;
                }),
                n
            );
        }
        return (
            h.min && h.min.setFullYear(2014, 7, 20),
            h.max && h.max.setFullYear(2014, 7, 20),
            {
                placeholder: "-",
                allowLeadingZero: !0,
                template:
                    (3 == f.length
                        ? "dd:dd:dd"
                        : 2 == f.length
                        ? "dd:dd"
                        : "dd") +
                    (p ? '<span class="mbsc-np-sup">{ampm:--}</span>' : ""),
                leftKey: p
                    ? { text: i, variable: "ampm:" + i, value: "00" }
                    : { text: ":00", value: "00" },
                rightKey: p
                    ? { text: o, variable: "ampm:" + o, value: "00" }
                    : { text: ":30", value: "30" },
                parseValue: function (e) {
                    var t,
                        a,
                        n = e || h.defaultValue,
                        s = [];
                    if (n) {
                        if ((a = (n += "").match(/\d/g)))
                            for (t = 0; t < a.length; t++) s.push(+a[t]);
                        p &&
                            s.push(
                                "ampm:" +
                                    (n.match(new RegExp(h.pmText, "gi"))
                                        ? o
                                        : i)
                            );
                    }
                    return s;
                },
                formatValue: function (e, t) {
                    return r(e, t);
                },
                validate: function (e) {
                    var t = e.values,
                        a = r(t, e.variables),
                        n =
                            3 <= t.length
                                ? new Date(
                                      2014,
                                      7,
                                      20,
                                      "" +
                                          t[0] +
                                          (t.length % 2 == 0 ? t[1] : ""),
                                      "" +
                                          t[t.length % 2 == 0 ? 2 : 1] +
                                          t[t.length % 2 == 0 ? 3 : 2]
                                  )
                                : "";
                    return {
                        disabled: (function (e) {
                            var t,
                                a,
                                n,
                                s,
                                i,
                                o,
                                r,
                                l,
                                c,
                                d,
                                m = [],
                                u = 2 * f.length;
                            if (
                                ((b = u),
                                e.length ||
                                    (p && (m.push(0), m.push(h.leftKey.value)),
                                    m.push(h.rightKey.value)),
                                !p &&
                                    (u - e.length < 2 ||
                                        (1 != e[0] &&
                                            (2 < e[0] || 3 < e[1]) &&
                                            u - e.length <= 2)) &&
                                    (m.push("30"), m.push("00")),
                                (p
                                    ? 1 < e[0] || 2 < e[1]
                                    : 1 != e[0] && (2 < e[0] || 3 < e[1])) &&
                                    e[0] &&
                                    (e.unshift(0), (b = u - 1)),
                                e.length == u)
                            )
                                for (t = 0; t <= 9; ++t) m.push(t);
                            else if (
                                (1 == e.length && p && 1 == e[0]) ||
                                (e.length && e.length % 2 == 0) ||
                                (!p &&
                                    2 == e[0] &&
                                    3 < e[1] &&
                                    e.length % 2 == 1)
                            )
                                for (t = 6; t <= 9; ++t) m.push(t);
                            if (
                                ((c = void 0 !== e[1] ? "" + e[0] + e[1] : ""),
                                (d =
                                    +T ==
                                    +(void 0 !== e[3] ? "" + e[2] + e[3] : "")),
                                h.invalid)
                            )
                                for (t = 0; t < h.invalid.length; ++t)
                                    if (
                                        ((o = h.invalid[t].getHours()),
                                        (r = h.invalid[t].getMinutes()),
                                        (l = h.invalid[t].getSeconds()),
                                        o == +c)
                                    ) {
                                        if (
                                            2 == f.length &&
                                            (r < 10 ? 0 : +("" + r)[0]) == +e[2]
                                        ) {
                                            m.push(r < 10 ? r : +("" + r)[1]);
                                            break;
                                        }
                                        if (
                                            (l < 10 ? 0 : +("" + l)[0]) == +e[4]
                                        ) {
                                            m.push(l < 10 ? l : +("" + l)[1]);
                                            break;
                                        }
                                    }
                            if (h.min || h.max) {
                                if (
                                    ((i = (n = +g == +c) && d),
                                    (s = (a = +v == +c) && d),
                                    0 === e.length)
                                ) {
                                    for (
                                        t = p ? 2 : 19 < v ? v[0] : 3;
                                        t <= (1 == v[0] ? 9 : v[0] - 1);
                                        ++t
                                    )
                                        m.push(t);
                                    if (10 <= v && (m.push(0), 2 == v[0]))
                                        for (t = 3; t <= 9; ++t) m.push(t);
                                    if ((g && g < 10) || (v && 10 <= v))
                                        for (
                                            t = g && g < 10 ? +g[0] + 1 : 0;
                                            t < (v && 10 <= v ? v[0] : 10);
                                            ++t
                                        )
                                            m.push(t);
                                }
                                if (1 == e.length) {
                                    if (0 === e[0])
                                        for (t = 0; t < v[0]; ++t) m.push(t);
                                    if (
                                        v &&
                                        0 !== e[0] &&
                                        (p ? 1 == e[0] : 2 == e[0])
                                    )
                                        for (t = p ? 3 : 4; t <= 9; ++t)
                                            m.push(t);
                                    if (e[0] == v[0])
                                        for (t = 0; t < v[1]; ++t) m.push(t);
                                    if (e[0] == g[0] && !p)
                                        for (t = +g[1] + 1; t <= 9; ++t)
                                            m.push(t);
                                }
                                if (2 == e.length && (a || n))
                                    for (
                                        t = n ? +T[0] + 1 : 0;
                                        t < (a ? +x[0] : 10);
                                        ++t
                                    )
                                        m.push(t);
                                if (
                                    3 == e.length &&
                                    ((n && e[2] == T[0]) || (a && e[2] == x[0]))
                                )
                                    for (
                                        t = n && e[2] == T[0] ? +T[1] + 1 : 0;
                                        t < (a && e[2] == x[0] ? +x[1] : 10);
                                        ++t
                                    )
                                        m.push(t);
                                if (4 == e.length && (s || i))
                                    for (
                                        t = i ? +_[0] + 1 : 0;
                                        t < (s ? +y[0] : 10);
                                        ++t
                                    )
                                        m.push(t);
                                if (
                                    5 == e.length &&
                                    ((s && e[4] == y[0]) || (i && e[4] == _[0]))
                                )
                                    for (
                                        t = i && e[4] == _[0] ? +_[1] + 1 : 0;
                                        t < (s && e[4] == y[0] ? +y[1] : 10);
                                        ++t
                                    )
                                        m.push(t);
                            }
                            return m;
                        })(t),
                        length: b,
                        invalid:
                            (p
                                ? !new RegExp(
                                      "^(0?[1-9]|1[012])(:[0-5]\\d)?(:[0-5][0-9]) (?:" +
                                          h.amText +
                                          "|" +
                                          h.pmText +
                                          ")$",
                                      "i"
                                  ).test(a)
                                : !/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(
                                      a
                                  )) ||
                            (!!h.invalid && -1 != s._indexOf(h.invalid, n)) ||
                            !((!h.min || h.min <= n) && (!h.max || n <= h.max)),
                    };
                },
            }
        );
    };
    var wn = { dateOrder: "mdy", dateFormat: "mm/dd/yy", delimiter: "/" };
    O(
        "numpad",
        bn,
        !(vn.date = function (n) {
            var f,
                p,
                b,
                e,
                i = [],
                t = Da({}, n.settings),
                v = Da(n.settings, fe, wn, t),
                a = v.dateOrder,
                g = v.min ? "" + (v.getMonth(v.min) + 1) : 0,
                x = v.max ? "" + (v.getMonth(v.max) + 1) : 0,
                T = v.min ? "" + v.getDay(v.min) : 0,
                y = v.max ? "" + v.getDay(v.max) : 0,
                _ = v.min ? "" + v.getYear(v.min) : 0,
                w = v.max ? "" + v.getYear(v.max) : 0;
            for (
                a = (a = (a = a.replace(/y+/gi, "yyyy")).replace(
                    /m+/gi,
                    "mm"
                )).replace(/d+/gi, "dd"),
                    f = a.toUpperCase().indexOf("Y"),
                    p = a.toUpperCase().indexOf("M"),
                    b = a.toUpperCase().indexOf("D"),
                    a = "",
                    i.push(
                        { val: f, n: "yyyy" },
                        { val: p, n: "mm" },
                        { val: b, n: "dd" }
                    ),
                    i.sort(function (e, t) {
                        return e.val - t.val;
                    }),
                    Sa.each(i, function (e, t) {
                        a += t.n;
                    }),
                    f = a.indexOf("y"),
                    p = a.indexOf("m"),
                    b = a.indexOf("d"),
                    a = "",
                    e = 0;
                e < 8;
                ++e
            )
                (a += "d"),
                    (e + 1 != f && e + 1 != p && e + 1 != b) ||
                        (a += v.delimiter);
            function s(e) {
                return new Date(
                    +("" + e[f] + e[f + 1] + e[f + 2] + e[f + 3]),
                    "" + e[p] + e[p + 1] - 1,
                    +("" + e[b] + e[b + 1])
                );
            }
            return (
                (n.getVal = function (e) {
                    return n._hasValue || e ? s(n.getArrayVal(e)) : null;
                }),
                {
                    placeholder: "-",
                    fill: "ltr",
                    allowLeadingZero: !0,
                    template: a,
                    parseValue: function (e) {
                        var t,
                            a = [],
                            n = e || v.defaultValue,
                            s = ce(v.dateFormat, n, v);
                        if (n)
                            for (t = 0; t < i.length; ++t)
                                a = /m/i.test(i[t].n)
                                    ? a.concat(
                                          (
                                              (v.getMonth(s) < 9 ? "0" : "") +
                                              (v.getMonth(s) + 1)
                                          ).split("")
                                      )
                                    : /d/i.test(i[t].n)
                                    ? a.concat(
                                          (
                                              (v.getDay(s) < 10 ? "0" : "") +
                                              v.getDay(s)
                                          ).split("")
                                      )
                                    : a.concat((v.getYear(s) + "").split(""));
                        return a;
                    },
                    formatValue: function (e) {
                        return le(v.dateFormat, s(e), v);
                    },
                    validate: function (e) {
                        var t = e.values,
                            a = s(t);
                        return {
                            disabled: (function (e) {
                                var t,
                                    a,
                                    n,
                                    s,
                                    i,
                                    o,
                                    r = [],
                                    l =
                                        void 0 !== e[f + 3]
                                            ? "" +
                                              e[f] +
                                              e[f + 1] +
                                              e[f + 2] +
                                              e[f + 3]
                                            : "",
                                    c =
                                        void 0 !== e[p + 1]
                                            ? "" + e[p] + e[p + 1]
                                            : "",
                                    d =
                                        void 0 !== e[b + 1]
                                            ? "" + e[b] + e[b + 1]
                                            : "",
                                    m =
                                        "" +
                                        v.getMaxDayOfMonth(
                                            l || 2012,
                                            c - 1 || 0
                                        ),
                                    u = _ === l && +g == +c,
                                    h = w === l && +x == +c;
                                if (v.invalid)
                                    for (t = 0; t < v.invalid.length; ++t) {
                                        if (
                                            ((n = v.getYear(v.invalid[t])),
                                            (s = v.getMonth(v.invalid[t])),
                                            (i = v.getDay(v.invalid[t])),
                                            n == +l &&
                                                s + 1 == +c &&
                                                (i < 10 ? 0 : +("" + i)[0]) ==
                                                    +e[b])
                                        ) {
                                            r.push(i < 10 ? i : +("" + i)[1]);
                                            break;
                                        }
                                        if (
                                            s + 1 == +c &&
                                            i == +d &&
                                            ("" + n).substring(0, 3) ==
                                                "" + e[f] + e[f + 1] + e[f + 2]
                                        ) {
                                            r.push(("" + n)[3]);
                                            break;
                                        }
                                        if (
                                            n == +l &&
                                            i == +d &&
                                            (s < 10 ? 0 : +("" + (s + 1))[0]) ==
                                                +e[p]
                                        ) {
                                            r.push(
                                                s < 10 ? s : +("" + (s + 1))[1]
                                            );
                                            break;
                                        }
                                    }
                                if (
                                    ("31" != d ||
                                        (e.length != p && e.length != p + 1) ||
                                        (1 != e[p]
                                            ? r.push(2, 4, 6, 9, 11)
                                            : r.push(1)),
                                    "30" == d &&
                                        0 === e[p] &&
                                        e.length <= p + 1 &&
                                        r.push(2),
                                    e.length == p)
                                ) {
                                    for (
                                        t = w === l && +x < 10 ? 1 : 2;
                                        t <= 9;
                                        ++t
                                    )
                                        r.push(t);
                                    _ === l && 10 <= +g && r.push(0);
                                }
                                if (e.length == p + 1) {
                                    if (1 == e[p]) {
                                        for (
                                            t = w === l ? +x[1] + 1 : 3;
                                            t <= 9;
                                            ++t
                                        )
                                            r.push(t);
                                        if (_ == l)
                                            for (t = 0; t < +g[1]; ++t)
                                                r.push(t);
                                    }
                                    if (
                                        0 === e[p] &&
                                        (r.push(0), w === l || _ === l)
                                    )
                                        for (
                                            t =
                                                w === l
                                                    ? +y < +d
                                                        ? +x
                                                        : +x + 1
                                                    : 0;
                                            t <= (_ === l ? g - 1 : 9);
                                            ++t
                                        )
                                            r.push(t);
                                }
                                if (e.length == b) {
                                    for (
                                        t = h
                                            ? 1 + (10 < +y ? +y[0] : 0)
                                            : +m[0] + 1;
                                        t <= 9;
                                        ++t
                                    )
                                        r.push(t);
                                    if (u)
                                        for (
                                            t = 0;
                                            t < (+T < 10 ? 0 : T[0]);
                                            ++t
                                        )
                                            r.push(t);
                                }
                                if (e.length == b + 1) {
                                    if (3 <= e[b] || "02" == c)
                                        for (t = +m[1] + 1; t <= 9; ++t)
                                            r.push(t);
                                    if (h && +y[0] == e[b])
                                        for (t = +y[1] + 1; t <= 9; ++t)
                                            r.push(t);
                                    if (u && T[0] == e[b])
                                        for (t = 0; t < +T[1]; ++t) r.push(t);
                                    if (0 === e[b] && (r.push(0), h || u))
                                        for (
                                            t = h ? +y + 1 : 1;
                                            t <= (u ? T - 1 : 9);
                                            ++t
                                        )
                                            r.push(t);
                                }
                                if (
                                    void 0 !== e[f + 2] &&
                                    "02" == c &&
                                    "29" == d
                                )
                                    for (
                                        a = +(
                                            "" +
                                            e[f] +
                                            e[f + 1] +
                                            e[f + 2] +
                                            0
                                        );
                                        a <=
                                        +("" + e[f] + e[f + 1] + e[f + 2] + 9);
                                        ++a
                                    )
                                        r.push(
                                            ((o = a) % 4 == 0 &&
                                                o % 100 != 0) ||
                                                o % 400 == 0
                                                ? ""
                                                : a % 10
                                        );
                                if (e.length == f) {
                                    if (v.min)
                                        for (t = 0; t < +_[0]; ++t) r.push(t);
                                    if (v.max)
                                        for (t = +w[0] + 1; t <= 9; ++t)
                                            r.push(t);
                                    r.push(0);
                                }
                                if (v.min || v.max)
                                    for (a = 1; a < 4; ++a)
                                        if (e.length == f + a) {
                                            if (
                                                e[f + a - 1] == +_[a - 1] &&
                                                (3 != a ||
                                                    e[f + a - 2] == +_[a - 2])
                                            )
                                                for (
                                                    t = 0;
                                                    t <
                                                    +_[a] +
                                                        (3 == a &&
                                                        e[p + 1] &&
                                                        +c < +g
                                                            ? 1
                                                            : 0);
                                                    ++t
                                                )
                                                    r.push(t);
                                            if (
                                                e[f + a - 1] == +w[a - 1] &&
                                                (3 != a ||
                                                    e[f + a - 2] == +w[a - 2])
                                            )
                                                for (
                                                    t =
                                                        +w[a] +
                                                        (3 == a && +x < +c
                                                            ? 0
                                                            : 1);
                                                    t <= 9;
                                                    ++t
                                                )
                                                    r.push(t);
                                        }
                                return r;
                            })(t),
                            invalid:
                                !(
                                    "Invalid Date" != a &&
                                    (!v.min || v.min <= a) &&
                                    (!v.max || a <= v.max)
                                ) ||
                                (!!v.invalid && -1 != n._indexOf(v.invalid, a)),
                        };
                    },
                }
            );
        })
    );
    var Cn = { autoCorrect: !0, showSelector: !0, minRange: 1, rangeTap: !0 };
    (Ye.range = function (l) {
        function a(e, t) {
            e &&
                (e.setFullYear(t.getFullYear()),
                e.setMonth(t.getMonth()),
                e.setDate(t.getDate()));
        }
        function n(e, t) {
            var a = l._order,
                n = new Date(e);
            return (
                void 0 === a.h && n.setHours(t ? 23 : 0),
                void 0 === a.i && n.setMinutes(t ? 59 : 0),
                void 0 === a.s && n.setSeconds(t ? 59 : 0),
                n.setMilliseconds(t ? 999 : 0),
                n
            );
        }
        function t(e, t) {
            return new Date(e.getFullYear(), e.getMonth(), e.getDate() + t);
        }
        function s(e) {
            b
                ? (w - y > A.maxRange - 1 &&
                      (e
                          ? (y = new Date(Math.max(x, w - A.maxRange + 1)))
                          : (w = new Date(Math.min(g, +y + A.maxRange - 1)))),
                  w - y < A.minRange - 1 &&
                      (e
                          ? (y = new Date(Math.max(x, w - A.minRange + 1)))
                          : (w = new Date(Math.min(g, +y + A.minRange - 1)))))
                : (Math.ceil((w - y) / H) > O &&
                      (e
                          ? (y = n(Math.max(x, t(w, 1 - O)), !1))
                          : (w = n(Math.min(g, t(y, O - 1)), !0))),
                  Math.ceil((w - y) / H) < I &&
                      (e
                          ? (y = n(Math.max(x, t(w, 1 - I)), !1))
                          : (w = n(Math.min(g, t(y, I - 1)), !0))));
        }
        function i(e, t) {
            var a = !0;
            return (
                e && y && w && (s(N), s(!N)), (y && w) || (a = !1), t && r(), a
            );
        }
        function o() {
            S &&
                h &&
                (Sa(".mbsc-range-btn", h)
                    .removeClass(L)
                    .removeAttr("aria-checked"),
                (function (e) {
                    e.addClass(L).attr("aria-checked", "true");
                })(Sa(".mbsc-range-btn", h).eq(N)));
        }
        function r() {
            var e,
                t,
                a,
                n,
                s,
                i = 0,
                o =
                    F || !N
                        ? " mbsc-cal-day-hl mbsc-cal-sel-start"
                        : " mbsc-cal-sel-start",
                r =
                    F || N
                        ? " mbsc-cal-day-hl mbsc-cal-sel-end"
                        : " mbsc-cal-sel-end";
            if (
                ((l.startVal = y ? le(p, y, A) : ""),
                (l.endVal = w ? le(p, w, A) : ""),
                h &&
                    (Sa(".mbsc-range-btn-v-start", h).html(
                        l.startVal || "&nbsp;"
                    ),
                    Sa(".mbsc-range-btn-v-end", h).html(l.endVal || "&nbsp;"),
                    (e = y ? new Date(y) : null),
                    (a = w ? new Date(w) : null),
                    !e && a && (e = new Date(a)),
                    !a && e && (a = new Date(e)),
                    (s = N ? a : e),
                    Sa(".mbsc-cal-day-picker .mbsc-cal-day-hl", h).removeClass(
                        Y
                    ),
                    Sa(".mbsc-cal-day-picker .mbsc-selected", h)
                        .removeClass("mbsc-cal-sel-start mbsc-cal-sel-end " + L)
                        .removeAttr("aria-selected"),
                    e && a))
            )
                for (
                    t = e.setHours(0, 0, 0, 0), n = a.setHours(0, 0, 0, 0);
                    e <= a && i < 126;

                )
                    Sa(
                        '.mbsc-cal-day[data-full="' +
                            s.getFullYear() +
                            "-" +
                            (s.getMonth() + 1) +
                            "-" +
                            s.getDate() +
                            '"]',
                        h
                    )
                        .addClass(
                            L +
                                " " +
                                (s.getTime() === t ? o : "") +
                                (s.getTime() === n ? r : "")
                        )
                        .attr("aria-selected", "true"),
                        s.setDate(s.getDate() + (N ? -1 : 1)),
                        s.setHours(0, 0, 0, 0),
                        i++;
        }
        function c(e, t) {
            return {
                h: e ? e.getHours() : t ? 23 : 0,
                i: e ? e.getMinutes() : t ? 59 : 0,
                s: e ? e.getSeconds() : t ? 59 : 0,
            };
        }
        function d() {
            y && ((v = !0), l.setDate(y, !1, 0, !0), (y = l.getDate(!0))),
                w && ((v = !0), l.setDate(w, !1, 0, !0), (w = l.getDate(!0)));
        }
        function m(e) {
            ca(e, this) &&
                (l._showDayPicker(),
                l.setActiveDate(Sa(this).attr("data-select")));
        }
        var u,
            h,
            f,
            p,
            b,
            v,
            g,
            x,
            T,
            y,
            _,
            w,
            C,
            M,
            S,
            k = l._startDate,
            D = l._endDate,
            N = 0,
            e = new Date(),
            V = Da({}, l.settings),
            A = Da(l.settings, Cn, V),
            E = A.anchor,
            F = A.rangeTap,
            H = 864e5,
            I = Math.max(1, Math.ceil(A.minRange / H)),
            O = Math.max(1, Math.ceil(A.maxRange / H)),
            P = "mbsc-disabled " + (A.disabledClass || ""),
            L = "mbsc-selected " + (A.selectedClass || ""),
            Y = "mbsc-cal-day-hl",
            z =
                null === A.defaultValue
                    ? []
                    : A.defaultValue || [
                          new Date(e.setHours(0, 0, 0, 0)),
                          new Date(
                              e.getFullYear(),
                              e.getMonth(),
                              e.getDate() + 6,
                              23,
                              59,
                              59,
                              999
                          ),
                      ];
        return (
            F && (A.tabs = !0),
            (u = qe.call(this, l)),
            (p = l._format),
            (b = /time/i.test(A.controls.join(","))),
            (M = "time" === A.controls.join("")),
            (S = A.showSelector),
            (g = A.max ? n(ct(A.max, p, A), !0) : 1 / 0),
            (x = A.min ? n(ct(A.min, p, A), !1) : -1 / 0),
            (z[0] = ct(z[0], p, A, A.isoParts)),
            (z[1] = ct(z[1], p, A, A.isoParts)),
            A.startInput &&
                l.attachShow(Sa(A.startInput), function () {
                    (N = 0), (A.anchor = E || Sa(A.startInput));
                }),
            A.endInput &&
                l.attachShow(Sa(A.endInput), function () {
                    (N = 1), (A.anchor = E || Sa(A.endInput));
                }),
            (l._getDayProps = function (e, t) {
                var a = y
                        ? new Date(y.getFullYear(), y.getMonth(), y.getDate())
                        : null,
                    n = w
                        ? new Date(w.getFullYear(), w.getMonth(), w.getDate())
                        : null;
                return {
                    selected: a && n && a <= e && e <= w,
                    cssClass:
                        t.cssClass +
                        " " +
                        (((F || !N) && a && a.getTime() === e.getTime()) ||
                        ((F || N) && n && n.getTime() === e.getTime())
                            ? Y
                            : "") +
                        (a && a.getTime() === e.getTime()
                            ? " mbsc-cal-sel-start"
                            : "") +
                        (n && n.getTime() === e.getTime()
                            ? " mbsc-cal-sel-end"
                            : ""),
                };
            }),
            (l.setVal = function (e, t, a, n, s) {
                var i,
                    o = e || [];
                (y = ct(o[0], p, A, A.isoParts)),
                    (w = ct(o[1], p, A, A.isoParts)),
                    d(),
                    (l.startVal = y ? le(p, y, A) : ""),
                    (l.endVal = w ? le(p, w, A) : ""),
                    (i = u.parseValue(N ? w : y, l)),
                    n || ((l._startDate = k = y), (l._endDate = D = w)),
                    (T = !0),
                    l._setVal(i, t, a, n, s);
            }),
            (l.getVal = function (e) {
                return e
                    ? [de(y, A, p), de(w, A, p)]
                    : l._hasValue
                    ? [de(k, A, p), de(D, A, p)]
                    : null;
            }),
            (l.setActiveDate = function (e) {
                var t;
                (N = "start" == e ? 0 : 1),
                    (t = "start" == e ? y : w),
                    l.isVisible() &&
                        (o(),
                        F ||
                            (Sa(
                                ".mbsc-cal-table .mbsc-cal-day-hl",
                                h
                            ).removeClass(Y),
                            t &&
                                Sa(
                                    '.mbsc-cal-day[data-full="' +
                                        t.getFullYear() +
                                        "-" +
                                        (t.getMonth() + 1) +
                                        "-" +
                                        t.getDate() +
                                        '"]',
                                    h
                                ).addClass(Y)),
                        t && ((v = !0), l.setDate(t, !1, 1e3, !0)));
            }),
            (l.getValue = l.getVal),
            Da({}, u, {
                highlight: !1,
                outerMonthChange: !1,
                formatValue: function () {
                    return (
                        l.startVal +
                        (A.endInput ? "" : l.endVal ? " - " + l.endVal : "")
                    );
                },
                parseValue: function (e) {
                    var t = e ? e.split(" - ") : [],
                        a = A.startInput ? Sa(A.startInput).val() : t[0],
                        n = A.endInput ? Sa(A.endInput).val() : t[1];
                    return (
                        (A.defaultValue = z[1]),
                        (D = n ? ce(p, n, A) : z[1]),
                        (A.defaultValue = z[0]),
                        (k = a ? ce(p, a, A) : z[2]),
                        (A.defaultValue = z[N]),
                        (l.startVal = k ? le(p, k, A) : ""),
                        (l.endVal = D ? le(p, D, A) : ""),
                        (l._startDate = k),
                        (l._endDate = D),
                        u.parseValue(N ? D : k, l)
                    );
                },
                onFill: function (e) {
                    !(function (e) {
                        (l._startDate = k = y),
                            (l._endDate = D = w),
                            A.startInput &&
                                (Sa(A.startInput).val(l.startVal),
                                e && Sa(A.startInput).trigger("change")),
                            A.endInput &&
                                (Sa(A.endInput).val(l.endVal),
                                e && Sa(A.endInput).trigger("change"));
                    })(e.change);
                },
                onBeforeClose: function (e) {
                    if ("set" === e.button && !i(!0, !0))
                        return l.setActiveDate(N ? "start" : "end"), !1;
                },
                onHide: function () {
                    u.onHide.call(l), (N = 0), (h = null), (A.anchor = E);
                },
                onClear: function () {
                    F && (N = 0);
                },
                onBeforeShow: function () {
                    (y = k || z[0]),
                        (w = D || z[1]),
                        (_ = c(y, 0)),
                        (C = c(w, 1)),
                        A.counter &&
                            (A.headerText = function () {
                                var e =
                                    y && w
                                        ? Math.max(
                                              1,
                                              Math.round(
                                                  (new Date(w).setHours(
                                                      0,
                                                      0,
                                                      0,
                                                      0
                                                  ) -
                                                      new Date(y).setHours(
                                                          0,
                                                          0,
                                                          0,
                                                          0
                                                      )) /
                                                      864e5
                                              ) + 1
                                          )
                                        : 0;
                                return (
                                    (1 < e && A.selectedPluralText) ||
                                    A.selectedText
                                ).replace(/{count}/, e);
                            }),
                        (T = !0);
                },
                onMarkupReady: function (e) {
                    var t;
                    d(),
                        ((N && w) || (!N && y)) &&
                            ((v = !0), l.setDate(N ? w : y, !1, 0, !0)),
                        r(),
                        u.onMarkupReady.call(this, e),
                        (h = Sa(e.target)).addClass("mbsc-range"),
                        S &&
                            ((t =
                                '<div class="mbsc-range-btn-t" role="radiogroup"><div class="mbsc-range-btn-c mbsc-range-btn-start"><div role="radio" data-select="start" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' +
                                A.fromText +
                                '<div class="mbsc-range-btn-v mbsc-range-btn-v-start">' +
                                (l.startVal || "&nbsp;") +
                                '</div></div></div><div class="mbsc-range-btn-c mbsc-range-btn-end"><div role="radio" data-select="end" class="mbsc-fr-btn-e mbsc-fr-btn-nhl mbsc-range-btn">' +
                                A.toText +
                                '<div class="mbsc-range-btn-v mbsc-range-btn-v-end">' +
                                (l.endVal || "&nbsp;") +
                                "</div></div></div></div>"),
                            A.headerText
                                ? Sa(".mbsc-fr-hdr", h).after(t)
                                : Sa(".mbsc-fr-w", h).prepend(t),
                            o()),
                        Sa(".mbsc-range-btn", h).each(function (e, t) {
                            ma(t, "touchstart", m, { passive: !0 }),
                                ma(t, "click", m);
                        });
                },
                onDayChange: function (e) {
                    (e.active = N ? "end" : "start"), (f = !0);
                },
                onSetDate: function (e) {
                    var t;
                    v ||
                        ((t = n(e.date, N)),
                        (T && !f) ||
                            (F &&
                                f &&
                                (1 == N && t < y && (N = 0),
                                N
                                    ? t.setHours(C.h, C.i, C.s, 999)
                                    : t.setHours(_.h, _.i, _.s, 0)),
                            N
                                ? ((w = new Date(t)), (C = c(w)))
                                : ((y = new Date(t)), (_ = c(y))),
                            M && A.autoCorrect && (a(y, t), a(w, t)),
                            F && f && !N && (w = null))),
                        M &&
                            !A.autoCorrect &&
                            w < y &&
                            (w = new Date(w.setDate(w.getDate() + 1))),
                        (l._isValid = i(T || f || A.autoCorrect, !v)),
                        (e.active = N ? "end" : "start"),
                        !v && F && (f && (N = N ? 0 : 1), o()),
                        l.isVisible() &&
                            (l._isValid
                                ? Sa(
                                      ".mbsc-fr-btn-s .mbsc-fr-btn",
                                      l._markup
                                  ).removeClass(P)
                                : Sa(
                                      ".mbsc-fr-btn-s .mbsc-fr-btn",
                                      l._markup
                                  ).addClass(P)),
                        (v = T = f = !1);
                },
                onTabChange: function (e) {
                    "calendar" != e.tab && l.setDate(N ? w : y, !1, 1e3, !0),
                        i(!0, !0);
                },
            })
        );
    }),
        O("range", je),
        O("scroller", je, !1),
        O("scrollview", mn, !1);
    var Mn = {
        inputClass: "",
        rtl: !1,
        showInput: !0,
        groupLabel: "Groups",
        dataHtml: "html",
        dataText: "text",
        dataValue: "value",
        dataGroup: "group",
        dataDisabled: "disabled",
        filterPlaceholderText: "Type to filter",
        filterEmptyText: "No results",
        filterClearIcon: "material-close",
    };
    (Ye.select = function (r, e) {
        var l,
            h,
            c,
            d,
            a,
            f,
            n,
            p,
            m,
            u,
            s,
            b,
            i,
            v,
            o,
            t = "",
            g = {},
            x = 1e3,
            T = this,
            y = Sa(T),
            _ = Da({}, r.settings),
            w = Da(r.settings, Mn, _),
            C = Sa(
                '<div class="mbsc-sel-empty">' + w.filterEmptyText + "</div>"
            ),
            M = w.readonly,
            S = {},
            k =
                w.layout ||
                (/top|bottom|inline/.test(w.display) || w.filter
                    ? "liquid"
                    : ""),
            D = "liquid" == k || !w.touchUi,
            N = xa(w.select)
                ? w.select
                : "multiple" == w.select || y.prop("multiple"),
            V = N || (!(!w.filter && !w.tapSelect) && 1),
            A = this.id + "_dummy",
            E = Sa('label[for="' + this.id + '"]').attr("for", A),
            F =
                void 0 !== w.label
                    ? w.label
                    : E.length
                    ? E.text()
                    : y.attr("name"),
            H = w.group,
            I = !!w.data,
            O = I ? !!w.group : Sa("optgroup", y).length,
            P = O && H && !1 !== H.groupWheel,
            L = O && H && P && !0 === H.clustered,
            Y = O && (!H || (!1 !== H.header && !L)),
            z = y.val() || (N ? [] : [""]),
            $ = [];
        function R(a) {
            var n,
                s,
                i,
                o,
                r,
                l,
                c = 0,
                d = 0,
                m = {};
            if (((S = {}), (p = {}), (b = []), (f = []), ($.length = 0), I))
                Sa.each(h, function (e, t) {
                    (r = t[w.dataText] + ""),
                        (s = t[w.dataHtml]),
                        (l = t[w.dataValue]),
                        (i = t[w.dataGroup]),
                        (o = {
                            value: l,
                            html: s,
                            text: r,
                            index: e,
                            cssClass: Y ? "mbsc-sel-gr-itm" : "",
                        }),
                        (S[l] = o),
                        (a && !G(r, a)) ||
                            (b.push(o),
                            O &&
                                (void 0 === m[i]
                                    ? ((n = {
                                          text: i,
                                          value: d,
                                          options: [],
                                          index: d,
                                      }),
                                      (p[d] = n),
                                      (m[i] = d),
                                      f.push(n),
                                      d++)
                                    : (n = p[m[i]]),
                                L && (o.index = n.options.length),
                                (o.group = m[i]),
                                n.options.push(o)),
                            t[w.dataDisabled] && $.push(l));
                });
            else if (O) {
                var u = !0;
                Sa("optgroup", y).each(function (t) {
                    (p[t] = {
                        text: this.label,
                        value: t,
                        options: [],
                        index: t,
                    }),
                        (u = !0),
                        Sa("option", this).each(function (e) {
                            (o = {
                                value: this.value,
                                text: this.text,
                                index: L ? e : c++,
                                group: t,
                                cssClass: Y ? "mbsc-sel-gr-itm" : "",
                            }),
                                (S[this.value] = o),
                                (a && !G(this.text, a)) ||
                                    (u && (f.push(p[t]), (u = !1)),
                                    b.push(o),
                                    p[t].options.push(o),
                                    this.disabled && $.push(this.value));
                        });
                });
            } else
                Sa("option", y).each(function (e) {
                    (o = { value: this.value, text: this.text, index: e }),
                        (S[this.value] = o),
                        (a && !G(this.text, a)) ||
                            (b.push(o), this.disabled && $.push(this.value));
                });
            (t = w.defaultValue ? w.defaultValue : b.length ? b[0].value : ""),
                Y &&
                    ((b = []),
                    (c = 0),
                    Sa.each(p, function (e, t) {
                        t.options.length &&
                            ((l = "__group" + e),
                            (o = {
                                text: t.text,
                                value: l,
                                group: e,
                                index: c++,
                                cssClass: "mbsc-sel-gr",
                            }),
                            (S[l] = o),
                            b.push(o),
                            $.push(o.value),
                            Sa.each(t.options, function (e, t) {
                                (t.index = c++), b.push(t);
                            }));
                    })),
                C &&
                    (b.length
                        ? C.removeClass("mbsc-sel-empty-v")
                        : C.addClass("mbsc-sel-empty-v"));
        }
        function j(e, t, a, n, s) {
            var i,
                o = [];
            for (i = 0; i < e.length; i++)
                o.push({
                    value: e[i].value,
                    display: e[i].html || e[i].text,
                    cssClass: e[i].cssClass,
                });
            return {
                circular: !1,
                multiple: t && !n ? 1 : n,
                cssClass: (t && !n ? "mbsc-sel-one" : "") + " " + s,
                data: o,
                label: a,
            };
        }
        function W() {
            return j(L && p[a] ? p[a].options : b, V, F, N, "");
        }
        function J() {
            var e = [[]];
            return (
                P &&
                    ((n = j(f, V, w.groupLabel, !1, "mbsc-sel-gr-whl")),
                    D ? (e[0][m] = n) : (e[m] = [n])),
                (i = W()),
                D ? (e[0][v] = i) : (e[v] = [i]),
                e
            );
        }
        function B(e) {
            N &&
                (e && ue(e) && (e = e.split(",")), Sa.isArray(e) && (e = e[0])),
                !S[(s = null == e || "" === e ? t : e)] &&
                    b &&
                    b.length &&
                    (s = b[0].value),
                P && (a = S[s] ? S[s].group : null);
        }
        function q(e) {
            return g[e] || (S[e] ? S[e].text : "");
        }
        function U() {
            var e,
                t = "",
                a = r.getVal(),
                n = w.formatValue.call(T, r.getArrayVal(), r, !0);
            if (
                ((w.filter && "inline" == w.display) || l.val(n),
                y.is("select") && I)
            ) {
                if (N)
                    for (e = 0; e < a.length; e++)
                        t +=
                            '<option value="' +
                            a[e] +
                            '">' +
                            q(a[e]) +
                            "</option>";
                else
                    t =
                        '<option value="' +
                        (null === a ? "" : a) +
                        '">' +
                        n +
                        "</option>";
                y.html(t);
            }
            T !== l[0] && y.val(a);
        }
        function K() {
            var e = {};
            (e[v] = W()), (o = !0), r.changeWheel(e);
        }
        function G(e, t) {
            return (
                (t = t.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")),
                e.match(new RegExp(t, "ig"))
            );
        }
        function X(e) {
            return w.data.dataField
                ? e[w.data.dataField]
                : w.data.processResponse
                ? w.data.processResponse(e)
                : e;
        }
        function Z(e) {
            var t = {};
            R(e),
                B(s),
                (w.wheels = J()),
                (t[v] = i),
                (r._tempWheelArray[v] = s),
                P && ((t[m] = n), (r._tempWheelArray[m] = a)),
                r.changeWheel(t, 0, !0),
                U();
        }
        function Q(e) {
            return r.trigger("onFilter", { filterText: e });
        }
        function ee(e) {
            e[m] != a &&
                ((a = e[m]),
                (s = p[a].options[0].value),
                (e[v] = s),
                L ? K() : r.setArrayVal(e, !1, !1, !0, x));
        }
        return (
            (r.setVal = function (e, t, a, n, s) {
                if (
                    V &&
                    (null == e || N || (e = [e]),
                    e && ue(e) && (e = e.split(",")),
                    (r._tempSelected[v] = ie(e)),
                    n || (r._selected[v] = ie(e)),
                    (e = e ? e[0] : null),
                    P)
                ) {
                    var i = S[e],
                        o = i && i.group;
                    (r._tempSelected[m] = ie([o])),
                        n || (r._selected[m] = ie([o]));
                }
                r._setVal(e, t, a, n, s);
            }),
            (r.getVal = function (e, t) {
                var a;
                return (
                    (a = V
                        ? ((a = se(e ? r._tempSelected[v] : r._selected[v])),
                          N ? a : a.length ? a[0] : null)
                        : (a = e
                              ? r._tempWheelArray
                              : r._hasValue
                              ? r._wheelArray
                              : null)
                        ? a[v]
                        : null),
                    N
                        ? a
                        : void 0 !== a
                        ? O && t
                            ? [S[a] ? S[a].group : null, a]
                            : a
                        : null
                );
            }),
            (r.refresh = function (e, t, a) {
                (a = a || ga),
                    e
                        ? ((h = e), u || (w.data = e))
                        : Sa.isArray(w.data) && (h = w.data),
                    !e && u && void 0 === t
                        ? Be(
                              w.data.url,
                              function (e) {
                                  (h = X(e)), Z(), a();
                              },
                              w.data.dataType
                          )
                        : (Z(t), a());
            }),
            e.invalid || (w.invalid = $),
            (v = P ? ((m = 0), 1) : ((m = -1), 0)),
            V &&
                (N && y.is("select") && y.prop("multiple", !0),
                z && ue(z) && (z = z.split(",")),
                (r._selected[v] = ie(z))),
            r._$input && r._$input.remove(),
            y.next().is(".mbsc-select-input")
                ? (l = y.next().removeAttr("tabindex"))
                : w.input
                ? (l = Sa(w.input))
                : (w.filter && "inline" == w.display
                      ? (r._$input = Sa(
                            '<div class="mbsc-sel-input-wrap"><input type="text" id="' +
                                A +
                                '" class="mbsc-select-input mbsc-control ' +
                                w.inputClass +
                                '" readonly /></div>'
                        ))
                      : ((l = Sa(
                            '<input type="text" id="' +
                                A +
                                '" class="mbsc-select-input mbsc-control ' +
                                w.inputClass +
                                '" readonly />'
                        )),
                        (r._$input = l)),
                  w.showInput &&
                      (r._$input.insertAfter(y),
                      (l = l || r._$input.find("#" + A)))),
            r.attachShow(l.attr("placeholder", w.placeholder || "")),
            l[0] !== T &&
                (y.addClass("mbsc-sel-hdn").attr("tabindex", -1),
                w.showInput || y.attr("data-enhance", !1)),
            !V || w.rows % 2 || (w.rows = w.rows - 1),
            w.filter && (c = w.filter.minLength || 0),
            (u = w.data && w.data.url)
                ? r.refresh()
                : (I && (h = w.data), R(), B(y.val())),
            {
                layout: k,
                headerText: !1,
                anchor: l,
                compClass: "mbsc-sc mbsc-sel" + (V ? " mbsc-sel-multi" : ""),
                setOnTap: !P || [!1, !0],
                formatValue: function (e, t, a) {
                    var n,
                        s = [],
                        i = a ? t._selected : t._tempSelected;
                    if (V) {
                        for (n in i[v]) s.push(q(n));
                        return s.join(", ");
                    }
                    return q(e[v]);
                },
                tapSelect: V,
                parseValue: function (e) {
                    return B(void 0 === e ? y.val() : e), P ? [a, s] : [s];
                },
                validate: function (e) {
                    var t = e.index,
                        a = [];
                    return (
                        (a[v] = w.invalid),
                        L && !o && void 0 === t && K(),
                        (o = !1),
                        { disabled: a }
                    );
                },
                onRead: U,
                onFill: U,
                onMarkupReady: function (e, t) {
                    if (w.filter) {
                        var a,
                            n,
                            s,
                            i = Sa(".mbsc-fr-w", e.target),
                            o = Sa(
                                '<span class="mbsc-sel-filter-clear mbsc-ic mbsc-ic-' +
                                    w.filterClearIcon +
                                    '"></span>'
                            );
                        "inline" == w.display
                            ? (a = l)
                                  .parent()
                                  .find(".mbsc-sel-filter-clear")
                                  .remove()
                            : (i
                                  .find(".mbsc-fr-c")
                                  .before(
                                      '<div class="mbsc-input mbsc-sel-filter-cont mbsc-control-w mbsc-' +
                                          w.theme +
                                          (w.baseTheme
                                              ? " mbsc-" + w.baseTheme
                                              : "") +
                                          '"><span class="mbsc-input-wrap"><input tabindex="0" type="text" class="mbsc-sel-filter-input mbsc-control"/></span></div>'
                                  ),
                              (a = i.find(".mbsc-sel-filter-input"))),
                            (d = null),
                            (s = a[0]),
                            a
                                .prop("readonly", !1)
                                .attr("placeholder", w.filterPlaceholderText)
                                .parent()
                                .append(o),
                            i.find(".mbsc-fr-c").prepend(C),
                            (t._activeElm = s),
                            t.tap(o, function () {
                                (d = null),
                                    (s.value = ""),
                                    t.refresh(),
                                    o.removeClass("mbsc-sel-filter-show-clear"),
                                    Q("");
                            }),
                            a
                                .on("keydown", function (e) {
                                    (13 != e.keyCode && 27 != e.keyCode) ||
                                        (e.stopPropagation(), s.blur());
                                })
                                .on("input", function () {
                                    clearTimeout(n),
                                        s.value.length
                                            ? o.addClass(
                                                  "mbsc-sel-filter-show-clear"
                                              )
                                            : o.removeClass(
                                                  "mbsc-sel-filter-show-clear"
                                              ),
                                        (n = setTimeout(function () {
                                            d !== s.value &&
                                                !1 !== Q(s.value) &&
                                                ((d = s.value).length >= c ||
                                                    !d.length) &&
                                                (u && w.data.remoteFilter
                                                    ? Be(
                                                          w.data.url +
                                                              encodeURIComponent(
                                                                  d
                                                              ),
                                                          function (e) {
                                                              t.refresh(X(e));
                                                          },
                                                          w.data.dataType
                                                      )
                                                    : t.refresh(void 0, d));
                                        }, 500));
                                });
                    }
                },
                onBeforeShow: function () {
                    N &&
                        w.counter &&
                        (w.headerText = function () {
                            var e = 0;
                            return (
                                Sa.each(r._tempSelected[v], function () {
                                    e++;
                                }),
                                (
                                    (1 < e && w.selectedPluralText) ||
                                    w.selectedText
                                ).replace(/{count}/, e)
                            );
                        }),
                        B(y.val()),
                        V && P && (r._selected[m] = ie([a])),
                        w.filter && R(void 0),
                        (r.settings.wheels = J()),
                        (o = !0);
                },
                onWheelGestureStart: function (e) {
                    e.index == m && (w.readonly = [!1, !0]);
                },
                onWheelAnimationEnd: function (e) {
                    var t = r.getArrayVal(!0);
                    e.index == m
                        ? ((w.readonly = M), V || ee(t))
                        : e.index == v &&
                          t[v] != s &&
                          ((s = t[v]),
                          P &&
                              S[s] &&
                              S[s].group != a &&
                              ((a = S[s].group),
                              (t[m] = a),
                              (r._tempSelected[m] = ie([a])),
                              r.setArrayVal(t, !1, !1, !0, x)));
                },
                onItemTap: function (e) {
                    var t;
                    if (
                        e.index == v &&
                        ((g[e.value] = S[e.value].text), V && !N && e.selected)
                    )
                        return !(r._prevItemTap = !0);
                    if (e.index == m && V) {
                        if (e.selected) return !(r._prevItemTap = !0);
                        ((t = r.getArrayVal(!0))[m] = e.value), ee(t);
                    }
                },
                onClose: function () {
                    u && w.data.remoteFilter && d && r.refresh();
                },
                onDestroy: function () {
                    r._$input && r._$input.remove(),
                        y.removeClass("mbsc-sel-hdn").removeAttr("tabindex");
                },
            }
        );
    }),
        O("select", je);
    var Sn = {
        autostart: !1,
        step: 1,
        useShortLabels: !1,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds", ""],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs", ""],
        startText: "Start",
        stopText: "Stop",
        resetText: "Reset",
        lapText: "Lap",
        hideText: "Hide",
        mode: "countdown",
    };
    (Ye.timer = function (a) {
        function c(e) {
            return new Date(
                e.getUTCFullYear(),
                e.getUTCMonth(),
                e.getUTCDate(),
                e.getUTCHours(),
                e.getUTCMinutes(),
                e.getUTCSeconds(),
                e.getUTCMilliseconds()
            );
        }
        function r(e, t, a) {
            return (
                (t || "") +
                (e < 10 ? "0" : "") +
                e +
                '<span class="mbsc-timer-lbl">' +
                a +
                "</span>"
            );
        }
        function n(e) {
            var a,
                n = [],
                s = (function (a) {
                    var n = {};
                    if (F && _[V].index > _.days.index) {
                        var e,
                            t,
                            s,
                            i,
                            o = new Date(),
                            r = f ? o : E,
                            l = f ? E : o;
                        for (
                            l = c(l),
                                r = c(r),
                                n.years = r.getFullYear() - l.getFullYear(),
                                n.months = r.getMonth() - l.getMonth(),
                                n.days = r.getDate() - l.getDate(),
                                n.hours = r.getHours() - l.getHours(),
                                n.minutes = r.getMinutes() - l.getMinutes(),
                                n.seconds = r.getSeconds() - l.getSeconds(),
                                n.fract =
                                    (r.getMilliseconds() -
                                        l.getMilliseconds()) /
                                    10,
                                e = y.length;
                            0 < e;
                            e--
                        )
                            (t = y[e - 1]),
                                (s = _[t]),
                                (i = y[Sa.inArray(t, y) - 1]),
                                _[i] &&
                                    n[t] < 0 &&
                                    (n[i]--,
                                    (n[t] +=
                                        "months" == i
                                            ? 32 -
                                              new Date(
                                                  r.getFullYear(),
                                                  r.getMonth(),
                                                  32
                                              ).getDate()
                                            : s.until + 1));
                        "months" == V &&
                            ((n.months += 12 * n.years), delete n.years);
                    } else
                        Sa(y).each(function (e, t) {
                            _[t].index <= _[V].index &&
                                ((n[t] = Math.floor(a / _[t].limit)),
                                (a -= n[t] * _[t].limit));
                        });
                    return n;
                })(e);
            return (
                Sa(y).each(function (e, t) {
                    w[t] &&
                        ((a = Math.max(Math.round(N / _[t].limit), 1)),
                        n.push(Math.round(s[t] / a) * a));
                }),
                n
            );
        }
        function s(e) {
            F
                ? ((u = E - new Date()),
                  (f = u < 0 && ((u *= -1), !0)),
                  (D = !(h = 0)))
                : (void 0 !== E
                      ? ((D = !1), (u = 1e3 * E), (f = "countdown" != g.mode))
                      : ((u = 0), (f = "countdown" != g.mode), (D = f)),
                  e && (h = 0));
        }
        function t() {
            S
                ? (Sa(".mbsc-fr-w", p).addClass(
                      "mbsc-timer-running mbsc-timer-locked"
                  ),
                  Sa(".mbsc-timer-btn-toggle-c > div", p).text(g.stopText),
                  a.buttons.start.icon &&
                      Sa(".mbsc-timer-btn-toggle-c > div", p).removeClass(
                          "mbsc-ic-" + a.buttons.start.icon
                      ),
                  a.buttons.stop.icon &&
                      Sa(".mbsc-timer-btn-toggle-c > div", p).addClass(
                          "mbsc-ic-" + a.buttons.stop.icon
                      ),
                  "stopwatch" == g.mode &&
                      (Sa(".mbsc-timer-btn-resetlap-c > div", p).text(
                          g.lapText
                      ),
                      a.buttons.reset.icon &&
                          Sa(".mbsc-timer-btn-resetlap-c > div", p).removeClass(
                              "mbsc-ic-" + a.buttons.reset.icon
                          ),
                      a.buttons.lap.icon &&
                          Sa(".mbsc-timer-btn-resetlap-c > div", p).addClass(
                              "mbsc-ic-" + a.buttons.lap.icon
                          )))
                : (Sa(".mbsc-fr-w", p).removeClass("mbsc-timer-running"),
                  Sa(".mbsc-timer-btn-toggle-c > div", p).text(g.startText),
                  a.buttons.start.icon &&
                      Sa(".mbsc-timer-btn-toggle-c > div", p).addClass(
                          "mbsc-ic-" + a.buttons.start.icon
                      ),
                  a.buttons.stop.icon &&
                      Sa(".mbsc-timer-btn-toggle-c > div", p).removeClass(
                          "mbsc-ic-" + a.buttons.stop.icon
                      ),
                  "stopwatch" == g.mode &&
                      (Sa(".mbsc-timer-btn-resetlap-c > div", p).text(
                          g.resetText
                      ),
                      a.buttons.reset.icon &&
                          Sa(".mbsc-timer-btn-resetlap-c > div", p).addClass(
                              "mbsc-ic-" + a.buttons.reset.icon
                          ),
                      a.buttons.lap.icon &&
                          Sa(".mbsc-timer-btn-resetlap-c > div", p).removeClass(
                              "mbsc-ic-" + a.buttons.lap.icon
                          )));
        }
        var l,
            e,
            d,
            i,
            o,
            m,
            u,
            h,
            f,
            p,
            b,
            v = Da({}, a.settings),
            g = Da(a.settings, Sn, v),
            x = g.useShortLabels ? g.labelsShort : g.labels,
            T = ["resetlap", "toggle"],
            y = [
                "years",
                "months",
                "days",
                "hours",
                "minutes",
                "seconds",
                "fract",
            ],
            _ = {
                years: {
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: x[0],
                    wheel: {},
                },
                months: {
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: x[1],
                    wheel: {},
                },
                days: {
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: x[2],
                    wheel: {},
                },
                hours: {
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: x[3],
                    wheel: {},
                },
                minutes: {
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: x[4],
                    wheel: {},
                },
                seconds: {
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: x[5],
                    wheel: {},
                },
                fract: {
                    index: 0,
                    until: 99,
                    limit: 10,
                    label: x[6],
                    prefix: ".",
                    wheel: {},
                },
            },
            w = {},
            C = [],
            M = 0,
            S = !1,
            k = !0,
            D = !1,
            N = Math.max(10, 1e3 * g.step),
            V = g.maxWheel,
            A = "stopwatch" == g.mode || F,
            E = g.targetTime,
            F = E && void 0 !== E.getTime,
            H = [[]];
        return (
            (a.start = function () {
                if ((k && a.reset(), !S)) {
                    if ((s(), !D && u <= h)) return;
                    (k = !(S = !0)),
                        (o = new Date()),
                        (i = h),
                        (g.readonly = !0),
                        a.setVal(n(f ? h : u - h), !0, !0, !1, 100),
                        (e = setInterval(function () {
                            (h = new Date() - o + i),
                                a.setVal(
                                    n(f ? h : u - h),
                                    !0,
                                    !0,
                                    !1,
                                    Math.min(100, d - 10)
                                ),
                                !D &&
                                    u <= h + d &&
                                    (clearInterval(e),
                                    setTimeout(function () {
                                        a.stop(),
                                            (h = u),
                                            a.setVal(
                                                n(f ? h : 0),
                                                !0,
                                                !0,
                                                !1,
                                                100
                                            ),
                                            a.trigger("onFinish", { time: u }),
                                            (k = !0);
                                    }, u - h));
                        }, d)),
                        t(),
                        a.trigger("onStart");
                }
            }),
            (a.stop = function () {
                S &&
                    ((S = !1),
                    clearInterval(e),
                    (h = new Date() - o + i),
                    t(),
                    a.trigger("onStop", { ellapsed: h }));
            }),
            (a.toggle = function () {
                S ? a.stop() : a.start();
            }),
            (a.reset = function () {
                a.stop(),
                    (C = []),
                    (M = h = 0),
                    a.setVal(n(f ? 0 : u), !0, !0, !1, 1e3),
                    (a.settings.readonly = A),
                    (k = !0),
                    A || Sa(".mbsc-fr-w", p).removeClass("mbsc-timer-locked"),
                    a.trigger("onReset");
            }),
            (a.lap = function () {
                S &&
                    ((m = new Date() - o + i),
                    (b = m - M),
                    (M = m),
                    C.push(m),
                    a.trigger("onLap", { ellapsed: m, lap: b, laps: C }));
            }),
            (a.resetlap = function () {
                S && "stopwatch" == g.mode ? a.lap() : a.reset();
            }),
            (a.getTime = function () {
                return u;
            }),
            (a.setTime = function (e) {
                (E = e / 1e3), (u = e);
            }),
            (a.getEllapsedTime = function () {
                return k ? 0 : S ? new Date() - o + i : h;
            }),
            (a.setEllapsedTime = function (e, t) {
                k ||
                    ((i = h = e),
                    (o = new Date()),
                    a.setVal(n(f ? h : u - h), !0, t, !1, 1e3));
            }),
            s(!0),
            V || u || (V = "minutes"),
            "inline" !== g.display && T.unshift("hide"),
            V ||
                Sa(y).each(function (e, t) {
                    if (!V && u >= _[t].limit) return (V = t), !1;
                }),
            Sa(y).each(function (e, t) {
                !(function (e) {
                    var t = 1,
                        a = _[e],
                        n = a.wheel,
                        s = a.prefix,
                        i = a.until,
                        o = _[y[Sa.inArray(e, y) - 1]];
                    if (a.index <= _[V].index && (!o || o.limit > N))
                        if (
                            (w[e] || H[0].push(n),
                            (w[e] = 1),
                            (n.data = []),
                            (n.label = a.label || ""),
                            (n.cssClass = "mbsc-timer-whl-" + e),
                            N >= a.limit &&
                                ((t = Math.max(Math.round(N / a.limit), 1)),
                                (d = t * a.limit)),
                            e == V)
                        )
                            (n.min = 0),
                                (n.data = function (e) {
                                    return {
                                        value: e,
                                        display: r(e, s, a.label),
                                    };
                                }),
                                (n.getIndex = function (e) {
                                    return e;
                                });
                        else
                            for (l = 0; l <= i; l += t)
                                n.data.push({
                                    value: l,
                                    display: r(l, s, a.label),
                                });
                })(t);
            }),
            (d = Math.max(97, d)),
            g.autostart &&
                setTimeout(function () {
                    a.start();
                }, 0),
            (a.handlers.toggle = a.toggle),
            (a.handlers.start = a.start),
            (a.handlers.stop = a.stop),
            (a.handlers.resetlap = a.resetlap),
            (a.handlers.reset = a.reset),
            (a.handlers.lap = a.lap),
            (a.buttons.toggle = {
                parentClass: "mbsc-timer-btn-toggle-c",
                text: g.startText,
                icon: g.startIcon,
                handler: "toggle",
            }),
            (a.buttons.start = {
                text: g.startText,
                icon: g.startIcon,
                handler: "start",
            }),
            (a.buttons.stop = {
                text: g.stopText,
                icon: g.stopIcon,
                handler: "stop",
            }),
            (a.buttons.reset = {
                text: g.resetText,
                icon: g.resetIcon,
                handler: "reset",
            }),
            (a.buttons.lap = {
                text: g.lapText,
                icon: g.lapIcon,
                handler: "lap",
            }),
            (a.buttons.resetlap = {
                parentClass: "mbsc-timer-btn-resetlap-c",
                text: g.resetText,
                icon: g.resetIcon,
                handler: "resetlap",
            }),
            (a.buttons.hide = {
                parentClass: "mbsc-timer-btn-hide-c",
                text: g.hideText,
                icon: g.closeIcon,
                handler: "cancel",
            }),
            {
                minWidth: 100,
                wheels: H,
                headerText: !1,
                readonly: A,
                buttons: T,
                compClass: "mbsc-timer mbsc-sc",
                parseValue: function () {
                    return n(f ? 0 : u);
                },
                formatValue: function (a) {
                    var n = "",
                        s = 0;
                    return (
                        Sa(y).each(function (e, t) {
                            "fract" != t &&
                                w[t] &&
                                ((n +=
                                    a[s] +
                                    ("seconds" == t && w.fract
                                        ? "." + a[s + 1]
                                        : "") +
                                    " " +
                                    x[e] +
                                    " "),
                                s++);
                        }),
                        n
                    );
                },
                validate: function (e) {
                    var a = e.values,
                        t = e.index,
                        n = 0;
                    k &&
                        void 0 !== t &&
                        ((E = 0),
                        Sa(y).each(function (e, t) {
                            w[t] && ((E += _[t].limit * a[n]), n++);
                        }),
                        (E /= 1e3),
                        s(!0));
                },
                onBeforeShow: function () {
                    g.showLabel = !0;
                },
                onMarkupReady: function (e) {
                    (p = Sa(e.target)),
                        t(),
                        A && Sa(".mbsc-fr-w", p).addClass("mbsc-timer-locked");
                },
                onPosition: function (e) {
                    Sa(".mbsc-fr-w", e.target)
                        .css("min-width", 0)
                        .css(
                            "min-width",
                            Sa(".mbsc-fr-btn-cont", e.target)[0].offsetWidth
                        );
                },
                onDestroy: function () {
                    clearInterval(e);
                },
            }
        );
    }),
        O("timer", je);
    var kn = {
        wheelOrder: "hhiiss",
        useShortLabels: !1,
        min: 0,
        max: 1 / 0,
        labels: ["Years", "Months", "Days", "Hours", "Minutes", "Seconds"],
        labelsShort: ["Yrs", "Mths", "Days", "Hrs", "Mins", "Secs"],
    };
    function Dn(e) {
        return e < -1e-7 ? Math.ceil(e - 1e-7) : Math.floor(e + 1e-7);
    }
    function Nn(e, t, a) {
        (e = parseInt(e)), (t = parseInt(t)), (a = parseInt(a));
        var n,
            s,
            i,
            o,
            r = new Array(0, 0, 0);
        return (
            (n =
                1582 < e ||
                (1582 == e && 10 < t) ||
                (1582 == e && 10 == t && 14 < a)
                    ? Dn((1461 * (e + 4800 + Dn((t - 14) / 12))) / 4) +
                      Dn((367 * (t - 2 - 12 * Dn((t - 14) / 12))) / 12) -
                      Dn((3 * Dn((e + 4900 + Dn((t - 14) / 12)) / 100)) / 4) +
                      a -
                      32075
                    : 367 * e -
                      Dn((7 * (e + 5001 + Dn((t - 9) / 7))) / 4) +
                      Dn((275 * t) / 9) +
                      a +
                      1729777),
            (o = Dn(((s = n - 1948440 + 10632) - 1) / 10631)),
            (i =
                Dn((10985 - (s = s - 10631 * o + 354)) / 5316) *
                    Dn((50 * s) / 17719) +
                Dn(s / 5670) * Dn((43 * s) / 15238)),
            (s =
                s -
                Dn((30 - i) / 15) * Dn((17719 * i) / 50) -
                Dn(i / 16) * Dn((15238 * i) / 43) +
                29),
            (t = Dn((24 * s) / 709)),
            (a = s - Dn((709 * t) / 24)),
            (e = 30 * o + i - 30),
            (r[2] = a),
            (r[1] = t),
            (r[0] = e),
            r
        );
    }
    (Ye.timespan = function (m) {
        function u(a) {
            var n = {};
            return (
                Sa(b).each(function (e, t) {
                    (n[t] = x[t] ? Math.floor(a / v[t].limit) : 0),
                        (a -= n[t] * v[t].limit);
                }),
                n
            );
        }
        function o(e, t, a) {
            return (
                (e < 10 && t ? "0" : "") +
                e +
                '<span class="mbsc-ts-lbl">' +
                a +
                "</span>"
            );
        }
        function h(a) {
            var n = 0;
            return (
                Sa.each(d, function (e, t) {
                    isNaN(+a[0]) || (n += v[t.v].limit * a[e]);
                }),
                n
            );
        }
        var r,
            a,
            i,
            f,
            p,
            e = Da({}, m.settings),
            l = Da(m.settings, kn, e),
            c = l.wheelOrder,
            t = l.useShortLabels ? l.labelsShort : l.labels,
            b = ["years", "months", "days", "hours", "minutes", "seconds"],
            v = {
                years: {
                    ord: 0,
                    index: 6,
                    until: 10,
                    limit: 31536e6,
                    label: t[0],
                    re: "y",
                    wheel: {},
                },
                months: {
                    ord: 1,
                    index: 5,
                    until: 11,
                    limit: 2592e6,
                    label: t[1],
                    re: "m",
                    wheel: {},
                },
                days: {
                    ord: 2,
                    index: 4,
                    until: 31,
                    limit: 864e5,
                    label: t[2],
                    re: "d",
                    wheel: {},
                },
                hours: {
                    ord: 3,
                    index: 3,
                    until: 23,
                    limit: 36e5,
                    label: t[3],
                    re: "h",
                    wheel: {},
                },
                minutes: {
                    ord: 4,
                    index: 2,
                    until: 59,
                    limit: 6e4,
                    label: t[4],
                    re: "i",
                    wheel: {},
                },
                seconds: {
                    ord: 5,
                    index: 1,
                    until: 59,
                    limit: 1e3,
                    label: t[5],
                    re: "s",
                    wheel: {},
                },
            },
            d = [],
            g = l.steps || [],
            x = {},
            T = "seconds",
            y = l.defaultValue || Math.max(l.min, Math.min(0, l.max)),
            n = [[]];
        return (
            Sa(b).each(function (e, t) {
                -1 < (a = c.search(new RegExp(v[t].re, "i"))) &&
                    (d.push({ o: a, v: t }),
                    v[t].index > v[T].index && (T = t));
            }),
            d.sort(function (e, t) {
                return e.o > t.o ? 1 : -1;
            }),
            Sa.each(d, function (e, t) {
                (x[t.v] = e + 1), n[0].push(v[t.v].wheel);
            }),
            (f = u(l.min)),
            (p = u(l.max)),
            Sa.each(d, function (e, t) {
                !(function (e) {
                    var t = !1,
                        a = g[x[e] - 1] || 1,
                        n = v[e],
                        s = n.label,
                        i = n.wheel;
                    if (
                        ((i.data = []),
                        (i.label = n.label),
                        c.match(new RegExp(n.re + n.re, "i")) && (t = !0),
                        e == T)
                    )
                        (i.min = f[e]),
                            (i.max = p[e]),
                            (i.data = function (e) {
                                return {
                                    value: e * a,
                                    display: o(e * a, t, s),
                                };
                            }),
                            (i.getIndex = function (e) {
                                return Math.round(e / a);
                            });
                    else
                        for (r = 0; r <= n.until; r += a)
                            i.data.push({ value: r, display: o(r, t, s) });
                })(t.v);
            }),
            (m.getVal = function (e, t) {
                return t
                    ? m._getVal(e)
                    : m._hasValue || e
                    ? h(m.getArrayVal(e))
                    : null;
            }),
            {
                minWidth: 100,
                showLabel: !0,
                wheels: n,
                compClass: "mbsc-ts mbsc-sc",
                parseValue: function (a) {
                    var n,
                        s = [];
                    return (
                        xa(a) || !a
                            ? ((i = u(a || y)),
                              Sa.each(d, function (e, t) {
                                  s.push(i[t.v]);
                              }))
                            : Sa.each(d, function (e, t) {
                                  (n = new RegExp(
                                      "(\\d+)\\s?(" +
                                          l.labels[v[t.v].ord] +
                                          "|" +
                                          l.labelsShort[v[t.v].ord] +
                                          ")",
                                      "gi"
                                  ).exec(a)),
                                      s.push(n ? n[1] : 0);
                              }),
                        Sa(s).each(function (e, t) {
                            s[e] = (function (e, t) {
                                return Math.floor(e / t) * t;
                            })(t, g[e] || 1);
                        }),
                        s
                    );
                },
                formatValue: function (a) {
                    var n = "";
                    return (
                        Sa.each(d, function (e, t) {
                            n += +a[e] ? a[e] + " " + v[t.v].label + " " : "";
                        }),
                        n ? n.replace(/\s+$/g, "") : 0
                    );
                },
                validate: function (e) {
                    var a,
                        n,
                        s,
                        i,
                        o = e.values,
                        r = e.direction,
                        l = [],
                        c = !0,
                        d = !0;
                    return (
                        Sa(b).each(function (e, t) {
                            if (void 0 !== x[t]) {
                                if (
                                    ((s = x[t] - 1),
                                    (l[s] = []),
                                    (i = {}),
                                    t != T)
                                ) {
                                    if (c)
                                        for (n = p[t] + 1; n <= v[t].until; n++)
                                            i[n] = !0;
                                    if (d) for (n = 0; n < f[t]; n++) i[n] = !0;
                                }
                                (o[s] = m.getValidValue(s, o[s], r, i)),
                                    (a = u(h(o))),
                                    (c = c && a[t] == p[t]),
                                    (d = d && a[t] == f[t]),
                                    Sa.each(i, function (e) {
                                        l[s].push(e);
                                    });
                            }
                        }),
                        { disabled: l }
                    );
                },
            }
        );
    }),
        O("timespan", je),
        (Ye.treelist = Ja),
        O("treelist", je),
        O("popup", ta, !1),
        O("widget", aa, !1),
        (Q.hijri = {
            getYear: function (e) {
                return Nn(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
            },
            getMonth: function (e) {
                return --Nn(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
            },
            getDay: function (e) {
                return Nn(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
            },
            getDate: function (e, t, a, n, s, i, o) {
                t < 0 &&
                    ((e += Math.floor(t / 12)),
                    (t = t % 12 ? 12 + (t % 12) : 0)),
                    11 < t && ((e += Math.floor(t / 12)), (t %= 12));
                var r = (function (e, t, a) {
                    (e = parseInt(e)), (t = parseInt(t)), (a = parseInt(a));
                    var n,
                        s,
                        i,
                        o,
                        r,
                        l,
                        c = new Array(3);
                    return (
                        (e =
                            2299160 <
                            (n =
                                Dn((11 * e + 3) / 30) +
                                354 * e +
                                30 * t -
                                Dn((t - 1) / 2) +
                                a +
                                1948440 -
                                385)
                                ? ((o = Dn((4 * (s = 68569 + n)) / 146097)),
                                  (s -= Dn((146097 * o + 3) / 4)),
                                  (r = Dn((4e3 * (s + 1)) / 1461001)),
                                  (s = s - Dn((1461 * r) / 4) + 31),
                                  (i = Dn((80 * s) / 2447)),
                                  (a = s - Dn((2447 * i) / 80)),
                                  (t = i + 2 - 12 * (s = Dn(i / 11))),
                                  100 * (o - 49) + r + s)
                                : ((l = Dn(((i = 1402 + n) - 1) / 1461)),
                                  (o =
                                      Dn(((s = i - 1461 * l) - 1) / 365) -
                                      Dn(s / 1461)),
                                  (i = Dn(
                                      (80 * (r = s - 365 * o + 30)) / 2447
                                  )),
                                  (a = r - Dn((2447 * i) / 80)),
                                  (t = i + 2 - 12 * (r = Dn(i / 11))),
                                  4 * l + o + r - 4716)),
                        (c[2] = a),
                        (c[1] = t),
                        (c[0] = e),
                        c
                    );
                })(e, +t + 1, a);
                return new Date(
                    r[0],
                    r[1] - 1,
                    r[2],
                    n || 0,
                    s || 0,
                    i || 0,
                    o || 0
                );
            },
            getMaxDayOfMonth: function (e, t) {
                t < 0 &&
                    ((e += Math.floor(t / 12)),
                    (t = t % 12 ? 12 + (t % 12) : 0)),
                    11 < t && ((e += Math.floor(t / 12)), (t %= 12));
                return (
                    [30, 29, 30, 29, 30, 29, 30, 29, 30, 29, 30, 29][t] +
                    (11 === t && (11 * e + 14) % 30 < 11 ? 1 : 0)
                );
            },
        }),
        (oa.i18n.ar = {
            rtl: !0,
            setText: "تعيين",
            cancelText: "إلغاء",
            clearText: "مسح",
            selectedText: "{count} المحدد",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "الأحد",
                "الاثنين",
                "الثلاثاء",
                "الأربعاء",
                "الخميس",
                "الجمعة",
                "السبت",
            ],
            dayNamesShort: [
                "أحد",
                "اثنين",
                "ثلاثاء",
                "أربعاء",
                "خميس",
                "جمعة",
                "سبت",
            ],
            dayNamesMin: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
            dayText: "يوم",
            hourText: "ساعات",
            minuteText: "الدقائق",
            monthNames: [
                "يناير",
                "فبراير",
                "مارس",
                "ابريل",
                "مايو",
                "يونيو",
                "يوليو",
                "أغسطس",
                "سبتمبر",
                "أكتوبر",
                "نوفمبر",
                "ديسمبر",
            ],
            monthNamesShort: [
                "يناير",
                "فبراير",
                "مارس",
                "ابريل",
                "مايو",
                "يونيو",
                "يوليو",
                "أغسطس",
                "سبتمبر",
                "أكتوبر",
                "نوفمبر",
                "ديسمبر",
            ],
            monthText: "شهر",
            secText: "ثواني",
            amText: "ص",
            pmText: "م",
            timeFormat: "hh:ii A",
            yearText: "عام",
            nowText: "الآن",
            firstDay: 0,
            dateText: "تاريخ",
            timeText: "وقت",
            closeText: "إغلاق",
            todayText: "اليوم",
            prevMonthText: "الشهر السابق",
            nextMonthText: "الشهر القادم",
            prevYearText: "السنه السابقة",
            nextYearText: "العام القادم",
            allDayText: "اليوم كله",
            noEventsText: "لا توجد احداث",
            eventText: "الحدث",
            eventsText: "أحداث",
            moreEventsText: "واحد آخر",
            moreEventsPluralText: "اثنان آخران {count}",
            fromText: "يبدا",
            toText: "ينتهي",
            wholeText: "كامل",
            fractionText: "جزء",
            unitText: "وحدة",
            delimiter: "/",
            decimalSeparator: ".",
            thousandsSeparator: ",",
            labels: ["سنوات", "أشهر", "أيام", "ساعة", "دقائق", "ثواني", ""],
            labelsShort: [
                "سنوات",
                "أشهر",
                "أيام",
                "ساعة",
                "دقائق",
                "ثواني",
                "",
            ],
            startText: "بدء",
            stopText: "إيقاف",
            resetText: "إعادة ضبط",
            lapText: "الدورة",
            hideText: "إخفاء",
            offText: "إيقاف",
            onText: "تشغيل",
            backText: "رجوع",
            undoText: "تراجع",
        }),
        (oa.i18n.bg = {
            setText: "Задаване",
            cancelText: "Отмяна",
            clearText: "Изчистване",
            selectedText: "{count} подбран",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Неделя",
                "Понеделник",
                "Вторник",
                "Сряда",
                "Четвъртък",
                "Петък",
                "Събота",
            ],
            dayNamesShort: ["Нед", "Пон", "Вто", "Сря", "Чет", "Пет", "Съб"],
            dayNamesMin: ["Не", "По", "Вт", "Ср", "Че", "Пе", "Съ"],
            dayText: "ден",
            delimiter: ".",
            hourText: "час",
            minuteText: "минута",
            monthNames: [
                "Януари",
                "Февруари",
                "Март",
                "Април",
                "Май",
                "Юни",
                "Юли",
                "Август",
                "Септември",
                "Октомври",
                "Ноември",
                "Декември",
            ],
            monthNamesShort: [
                "Яну",
                "Фев",
                "Мар",
                "Апр",
                "Май",
                "Юни",
                "Юли",
                "Авг",
                "Сеп",
                "Окт",
                "Нов",
                "Дек",
            ],
            monthText: "месец",
            secText: "секунди",
            timeFormat: "H:ii",
            yearText: "година",
            nowText: "Сега",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Дата",
            timeText: "път",
            todayText: "днес",
            prevMonthText: "Предишния месец",
            nextMonthText: "Следващият месец",
            prevYearText: "Предходната година",
            nextYearText: "Следващата година",
            closeText: "затвори",
            eventText: "Събитие",
            eventsText: "Събития",
            allDayText: "Цял ден",
            noEventsText: "Няма събития",
            moreEventsText: "Още {count}",
            fromText: "ОТ",
            toText: "ДО",
            wholeText: "цяло",
            fractionText: "фракция",
            unitText: "единица",
            labels: [
                "Години",
                "месеца",
                "дни",
                "часа",
                "минути",
                "секунди",
                "",
            ],
            labelsShort: [
                "Години",
                "месеца",
                "дни",
                "часа",
                "минути",
                "секунди",
                "",
            ],
            startText: "Старт",
            stopText: "Стоп",
            resetText: "Нулиране",
            lapText: "Обиколка",
            hideText: "крия",
            backText: "връщане",
            undoText: "ОТМЯНА",
            offText: "ИЗКЛ",
            onText: "ВКЛ",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.ca = {
            setText: "Acceptar",
            cancelText: "Cancel·lar",
            clearText: "Esborrar",
            selectedText: "{count} seleccionat",
            selectedPluralText: "{count} seleccionats",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Diumenge",
                "Dilluns",
                "Dimarts",
                "Dimecres",
                "Dijous",
                "Divendres",
                "Dissabte",
            ],
            dayNamesShort: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayNamesMin: ["Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds"],
            dayText: "Dia",
            hourText: "Hores",
            minuteText: "Minuts",
            monthNames: [
                "Gener",
                "Febrer",
                "Març",
                "Abril",
                "Maig",
                "Juny",
                "Juliol",
                "Agost",
                "Setembre",
                "Octubre",
                "Novembre",
                "Desembre",
            ],
            monthNamesShort: [
                "Gen",
                "Feb",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Oct",
                "Nov",
                "Des",
            ],
            monthText: "Mes",
            secText: "Segons",
            timeFormat: "HH:ii",
            yearText: "Any",
            nowText: "Ara",
            pmText: "pm",
            amText: "am",
            todayText: "Avui",
            firstDay: 1,
            dateText: "Data",
            timeText: "Temps",
            closeText: "Tancar",
            allDayText: "Tot el dia",
            noEventsText: "Cap esdeveniment",
            eventText: "Esdeveniments",
            eventsText: "Esdeveniments",
            moreEventsText: "{count} més",
            fromText: "Iniciar",
            toText: "Final",
            wholeText: "Sencer",
            fractionText: "Fracció",
            unitText: "Unitat",
            labels: ["Anys", "Mesos", "Dies", "Hores", "Minuts", "Segons", ""],
            labelsShort: ["Anys", "Mesos", "Dies", "Hrs", "Mins", "Secs", ""],
            startText: "Iniciar",
            stopText: "Aturar",
            resetText: "Reiniciar",
            lapText: "Volta",
            hideText: "Amagar",
            backText: "Enrere",
            undoText: "Desfés",
            offText: "No",
            onText: "Si",
        }),
        (oa.i18n.cs = {
            setText: "Zadej",
            cancelText: "Storno",
            clearText: "Vymazat",
            selectedText: "Označený: {count}",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Neděle",
                "Pondělí",
                "Úterý",
                "Středa",
                "Čtvrtek",
                "Pátek",
                "Sobota",
            ],
            dayNamesShort: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"],
            dayNamesMin: ["N", "P", "Ú", "S", "Č", "P", "S"],
            dayText: "Den",
            hourText: "Hodiny",
            minuteText: "Minuty",
            monthNames: [
                "Leden",
                "Únor",
                "Březen",
                "Duben",
                "Květen",
                "Červen",
                "Červenec",
                "Srpen",
                "Září",
                "Říjen",
                "Listopad",
                "Prosinec",
            ],
            monthNamesShort: [
                "Led",
                "Úno",
                "Bře",
                "Dub",
                "Kvě",
                "Čer",
                "Čvc",
                "Spr",
                "Zář",
                "Říj",
                "Lis",
                "Pro",
            ],
            monthText: "Měsíc",
            secText: "Sekundy",
            timeFormat: "HH:ii",
            yearText: "Rok",
            nowText: "Teď",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            closeText: "Zavřít",
            allDayText: "Celý den",
            noEventsText: "Žádné události",
            eventText: "Událostí",
            eventsText: "Události",
            moreEventsText: "{count} další",
            fromText: "Začátek",
            toText: "Konec",
            wholeText: "Celý",
            fractionText: "Část",
            unitText: "Jednotka",
            labels: [
                "Roky",
                "Měsíce",
                "Dny",
                "Hodiny",
                "Minuty",
                "Sekundy",
                "",
            ],
            labelsShort: ["Rok", "Měs", "Dny", "Hod", "Min", "Sec", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Resetovat",
            lapText: "Etapa",
            hideText: "Schovat",
            backText: "Zpět",
            undoText: "Zpět",
            offText: "O",
            onText: "I",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.da = {
            setText: "Sæt",
            cancelText: "Annuller",
            clearText: "Ryd",
            selectedText: "{count} valgt",
            selectedPluralText: "{count} valgt",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Søndag",
                "Mandag",
                "Tirsdag",
                "Onsdag",
                "Torsdag",
                "Fredag",
                "Lørdag",
            ],
            dayNamesShort: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            dayText: "Dag",
            hourText: "Timer",
            minuteText: "Minutter",
            monthNames: [
                "Januar",
                "Februar",
                "Marts",
                "April",
                "Maj",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "December",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Maj",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            monthText: "Måned",
            secText: "Sekunder",
            amText: "am",
            pmText: "pm",
            timeFormat: "HH.ii",
            yearText: "År",
            nowText: "Nu",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            closeText: "Luk",
            allDayText: "Hele dagen",
            noEventsText: "Ingen begivenheder",
            eventText: "Begivenheder",
            eventsText: "Begivenheder",
            moreEventsText: "{count} mere",
            fromText: "Start",
            toText: "Slut",
            wholeText: "Hele",
            fractionText: "Dele",
            unitText: "Enhed",
            labels: [
                "År",
                "Måneder",
                "Dage",
                "Timer",
                "Minutter",
                "Sekunder",
                "",
            ],
            labelsShort: ["År", "Mdr", "Dg", "Timer", "Min", "Sek", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Nulstil",
            lapText: "Omgang",
            hideText: "Skjul",
            offText: "Fra",
            onText: "Til",
            backText: "Tilbage",
            undoText: "Fortryd",
        }),
        (oa.i18n.de = {
            setText: "OK",
            cancelText: "Abbrechen",
            clearText: "Löschen",
            selectedText: "{count} ausgewählt",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Sonntag",
                "Montag",
                "Dienstag",
                "Mittwoch",
                "Donnerstag",
                "Freitag",
                "Samstag",
            ],
            dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
            dayNamesMin: ["S", "M", "D", "M", "D", "F", "S"],
            dayText: "Tag",
            delimiter: ".",
            hourText: "Stunde",
            minuteText: "Minuten",
            monthNames: [
                "Januar",
                "Februar",
                "März",
                "April",
                "Mai",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "Dezember",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mär",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dez",
            ],
            monthText: "Monat",
            secText: "Sekunden",
            timeFormat: "HH:ii",
            yearText: "Jahr",
            nowText: "Jetzt",
            pmText: "pm",
            amText: "am",
            todayText: "Heute",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Zeit",
            closeText: "Schließen",
            allDayText: "Ganztägig",
            noEventsText: "Keine Ereignisse",
            eventText: "Ereignis",
            eventsText: "Ereignisse",
            moreEventsText: "{count} weiteres Element",
            moreEventsPluralText: "{count} weitere Elemente",
            fromText: "Von",
            toText: "Bis",
            wholeText: "Ganze Zahl",
            fractionText: "Bruchzahl",
            unitText: "Maßeinheit",
            labels: [
                "Jahre",
                "Monate",
                "Tage",
                "Stunden",
                "Minuten",
                "Sekunden",
                "",
            ],
            labelsShort: ["Jahr.", "Mon.", "Tag.", "Std.", "Min.", "Sek.", ""],
            startText: "Starten",
            stopText: "Stoppen",
            resetText: "Zurücksetzen",
            lapText: "Lap",
            hideText: "Ausblenden",
            backText: "Zurück",
            undoText: "Rückgängig machen",
            offText: "Aus",
            onText: "Ein",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.el = {
            setText: "Ορισμος",
            cancelText: "Ακυρωση",
            clearText: "Διαγραφη",
            selectedText: "{count} επιλεγμένα",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Κυριακή",
                "Δευτέρα",
                "Τρίτη",
                "Τετάρτη",
                "Πέμπτη",
                "Παρασκευή",
                "Σάββατο",
            ],
            dayNamesShort: ["Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"],
            dayNamesMin: ["Κυ", "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα"],
            dayText: "ημέρα",
            delimiter: "/",
            hourText: "ώρα",
            minuteText: "λεπτό",
            monthNames: [
                "Ιανουάριος",
                "Φεβρουάριος",
                "Μάρτιος",
                "Απρίλιος",
                "Μάιος",
                "Ιούνιος",
                "Ιούλιος",
                "Αύγουστος",
                "Σεπτέμβριος",
                "Οκτώβριος",
                "Νοέμβριος",
                "Δεκέμβριος",
            ],
            monthNamesShort: [
                "Ιαν",
                "Φεβ",
                "Μαρ",
                "Απρ",
                "Μαι",
                "Ιουν",
                "Ιουλ",
                "Αυγ",
                "Σεπ",
                "Οκτ",
                "Νοε",
                "Δεκ",
            ],
            monthText: "Μήνας",
            secText: "δευτερόλεπτα",
            timeFormat: "H:ii",
            yearText: "έτος",
            nowText: "τώρα",
            pmText: "μμ",
            amText: "πμ",
            firstDay: 1,
            dateText: "Ημερομηνία",
            timeText: "φορά",
            todayText: "Σήμερα",
            prevMonthText: "Προηγούμενο μήνα",
            nextMonthText: "Επόμενο μήνα",
            prevYearText: "Προηγούμενο έτος",
            nextYearText: "Επόμενο έτος",
            closeText: "Κλείσιμο",
            eventText: "Γεγονότα",
            eventsText: "Γεγονότα",
            allDayText: "Ολοήμερο",
            noEventsText: "Δεν υπάρχουν γεγονότα",
            moreEventsText: "{count} ακόμη",
            fromText: "Αρχή",
            toText: "Τέλος",
            wholeText: "Ολόκληρος",
            fractionText: "κλάσμα",
            unitText: "Μονάδα",
            labels: [
                "Χρόνια",
                "Μήνες",
                "Ημέρες",
                "Ωρες",
                "Λεπτά",
                "δευτερόλεπτα",
                "",
            ],
            labelsShort: [
                "Χρόνια",
                "Μήνες",
                "Ημέρες",
                "Ωρες",
                "Λεπτά",
                "δευτ",
                "",
            ],
            startText: "΄Εναρξη",
            stopText: "Διακοπή",
            resetText: "Επαναφορά",
            lapText: "Γύρος",
            hideText: "κρύβω",
            backText: "Πίσω",
            undoText: "Αναιρεση",
            offText: "Ανενεργό",
            onText: "Ενεργό",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n["en-GB"] = oa.i18n["en-UK"] = {
            dateFormat: "dd/mm/yy",
            timeFormat: "HH:ii",
        }),
        (oa.i18n.es = {
            setText: "Aceptar",
            cancelText: "Cancelar",
            clearText: "Borrar",
            selectedText: "{count} seleccionado",
            selectedPluralText: "{count} seleccionados",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Domingo",
                "Lunes",
                "Martes",
                "Miércoles",
                "Jueves",
                "Viernes",
                "Sábado",
            ],
            dayNamesShort: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sá"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            dayText: "Día",
            hourText: "Horas",
            minuteText: "Minutos",
            monthNames: [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre",
            ],
            monthNamesShort: [
                "Ene",
                "Feb",
                "Mar",
                "Abr",
                "May",
                "Jun",
                "Jul",
                "Ago",
                "Sep",
                "Oct",
                "Nov",
                "Dic",
            ],
            monthText: "Mes",
            secText: "Segundos",
            timeFormat: "HH:ii",
            yearText: "A&ntilde;o",
            nowText: "Ahora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Fecha",
            timeText: "Tiempo",
            closeText: "Cerrar",
            allDayText: "Todo el día",
            noEventsText: "No hay eventos",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "{count} más",
            fromText: "Iniciar",
            toText: "Final",
            wholeText: "Entero",
            fractionText: "Fracción",
            unitText: "Unidad",
            labels: [
                "Años",
                "Meses",
                "Días",
                "Horas",
                "Minutos",
                "Segundos",
                "",
            ],
            labelsShort: ["Año", "Mes", "Día", "Hora", "Min", "Seg", ""],
            startText: "Iniciar",
            stopText: "Deténgase",
            resetText: "Reinicializar",
            lapText: "Lap",
            hideText: "Esconder",
            backText: "Atrás",
            undoText: "Deshacer",
            offText: "No",
            onText: "Sí",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        });
    var Vn = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        An = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
    function En(e, t, a) {
        var n,
            s = (e = parseInt(e)) - 1600,
            i = (t = parseInt(t)) - 1,
            o = (a = parseInt(a)) - 1,
            r =
                365 * s +
                parseInt((3 + s) / 4) -
                parseInt((99 + s) / 100) +
                parseInt((399 + s) / 400);
        for (n = 0; n < i; ++n) r += Vn[n];
        1 < i && ((s % 4 == 0 && s % 100 != 0) || s % 400 == 0) && ++r;
        var l = (r += o) - 79,
            c = parseInt(l / 12053);
        l %= 12053;
        var d = 979 + 33 * c + 4 * parseInt(l / 1461);
        for (
            366 <= (l %= 1461) &&
                ((d += parseInt((l - 1) / 365)), (l = (l - 1) % 365)),
                n = 0;
            n < 11 && l >= An[n];
            ++n
        )
            l -= An[n];
        return [d, n + 1, l + 1];
    }
    (Q.jalali = {
        getYear: function (e) {
            return En(e.getFullYear(), e.getMonth() + 1, e.getDate())[0];
        },
        getMonth: function (e) {
            return --En(e.getFullYear(), e.getMonth() + 1, e.getDate())[1];
        },
        getDay: function (e) {
            return En(e.getFullYear(), e.getMonth() + 1, e.getDate())[2];
        },
        getDate: function (e, t, a, n, s, i, o) {
            t < 0 &&
                ((e += Math.floor(t / 12)), (t = t % 12 ? 12 + (t % 12) : 0)),
                11 < t && ((e += Math.floor(t / 12)), (t %= 12));
            var r = (function (e, t, a) {
                var n,
                    s = (e = parseInt(e)) - 979,
                    i = (t = parseInt(t)) - 1,
                    o = (a = parseInt(a)) - 1,
                    r =
                        365 * s +
                        8 * parseInt(s / 33) +
                        parseInt(((s % 33) + 3) / 4);
                for (n = 0; n < i; ++n) r += An[n];
                var l = (r += o) + 79,
                    c = 1600 + 400 * parseInt(l / 146097),
                    d = !0;
                for (
                    36525 <= (l %= 146097) &&
                        (l--,
                        (c += 100 * parseInt(l / 36524)),
                        365 <= (l %= 36524) ? l++ : (d = !1)),
                        c += 4 * parseInt(l / 1461),
                        366 <= (l %= 1461) &&
                            ((d = !1),
                            l--,
                            (c += parseInt(l / 365)),
                            (l %= 365)),
                        n = 0;
                    Vn[n] + (1 == n && d) <= l;
                    n++
                )
                    l -= Vn[n] + (1 == n && d);
                return [c, n + 1, l + 1];
            })(e, +t + 1, a);
            return new Date(
                r[0],
                r[1] - 1,
                r[2],
                n || 0,
                s || 0,
                i || 0,
                o || 0
            );
        },
        getMaxDayOfMonth: function (e, t) {
            var a,
                n,
                s,
                i = 31;
            for (
                t < 0 &&
                    ((e += Math.floor(t / 12)),
                    (t = t % 12 ? 12 + (t % 12) : 0)),
                    11 < t && ((e += Math.floor(t / 12)), (t %= 12));
                !1 ==
                ((n = t + 1),
                (s = i),
                !(
                    (a = e) < 0 ||
                    32767 < a ||
                    n < 1 ||
                    12 < n ||
                    s < 1 ||
                    s > An[n - 1] + (12 == n && ((a - 979) % 33) % 4 == 0)
                ));

            )
                i--;
            return i;
        },
    }),
        (oa.i18n.fa = {
            setText: "تاييد",
            cancelText: "انصراف",
            clearText: "واضح ",
            selectedText: "{count} منتخب",
            calendarSystem: "jalali",
            dateFormat: "yy/mm/dd",
            dayNames: [
                "يکشنبه",
                "دوشنبه",
                "سه‌شنبه",
                "چهارشنبه",
                "پنج‌شنبه",
                "جمعه",
                "شنبه",
            ],
            dayNamesShort: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayNamesMin: ["ی", "د", "س", "چ", "پ", "ج", "ش"],
            dayText: "روز",
            hourText: "ساعت",
            minuteText: "دقيقه",
            monthNames: [
                "فروردين",
                "ارديبهشت",
                "خرداد",
                "تير",
                "مرداد",
                "شهريور",
                "مهر",
                "آبان",
                "آذر",
                "دی",
                "بهمن",
                "اسفند",
            ],
            monthNamesShort: [
                "فروردين",
                "ارديبهشت",
                "خرداد",
                "تير",
                "مرداد",
                "شهريور",
                "مهر",
                "آبان",
                "آذر",
                "دی",
                "بهمن",
                "اسفند",
            ],
            monthText: "ماه",
            secText: "ثانيه",
            timeFormat: "HH:ii",
            timeWheels: "iiHH",
            yearText: "سال",
            nowText: "اکنون",
            amText: "ب",
            pmText: "ص",
            todayText: "امروز",
            firstDay: 6,
            rtl: !0,
            dateText: "تاریخ ",
            timeText: "زمان ",
            closeText: "نزدیک",
            allDayText: "تمام روز",
            noEventsText: "هیچ رویداد",
            eventText: "رویداد",
            eventsText: "رویدادها",
            moreEventsText: "{count} مورد دیگر",
            fromText: "شروع ",
            toText: "پایان",
            wholeText: "تمام",
            fractionText: "کسر",
            unitText: "واحد",
            labels: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
            labelsShort: ["سال", "ماه", "روز", "ساعت", "دقیقه", "ثانیه", ""],
            startText: "شروع",
            stopText: "پايان",
            resetText: "تنظیم مجدد",
            lapText: "Lap",
            hideText: "پنهان کردن",
            backText: "پشت",
            undoText: "واچیدن",
        }),
        (oa.i18n.fi = {
            setText: "Aseta",
            cancelText: "Peruuta",
            clearText: "Tyhjennä",
            selectedText: "{count} valita",
            dateFormat: "d. MM yy",
            dayNames: [
                "Sunnuntai",
                "Maanantai",
                "Tiistai",
                "Keskiviiko",
                "Torstai",
                "Perjantai",
                "Lauantai",
            ],
            dayNamesShort: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
            dayNamesMin: ["S", "M", "T", "K", "T", "P", "L"],
            dayText: "Päivä",
            delimiter: ".",
            hourText: "Tuntia",
            minuteText: "Minuutti",
            monthNames: [
                "Tammikuu",
                "Helmikuu",
                "Maaliskuu",
                "Huhtikuu",
                "Toukokuu",
                "Kesäkuu",
                "Heinäkuu",
                "Elokuu",
                "Syyskuu",
                "Lokakuu",
                "Marraskuu",
                "Joulukuu",
            ],
            monthNamesShort: [
                "Tam",
                "Hel",
                "Maa",
                "Huh",
                "Tou",
                "Kes",
                "Hei",
                "Elo",
                "Syy",
                "Lok",
                "Mar",
                "Jou",
            ],
            monthText: "Kuukausi",
            secText: "Sekunda",
            timeFormat: "H:ii",
            yearText: "Vuosi",
            nowText: "Nyt",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Päiväys",
            timeText: "Aika",
            todayText: "Tänään",
            prevMonthText: "Edellinen kuukausi",
            nextMonthText: "Ensi kuussa",
            prevYearText: "Edellinen vuosi",
            nextYearText: "Ensi vuosi",
            closeText: "Sulje",
            eventText: "Tapahtumia",
            eventsText: "Tapahtumia",
            allDayText: "Koko päivä",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} muu",
            moreEventsPluralText: "{count} muuta",
            fromText: "Alkaa",
            toText: "Päättyy",
            wholeText: "Kokonainen",
            fractionText: "Murtoluku",
            unitText: "Yksikkö",
            labels: [
                "Vuosi",
                "Kuukausi",
                "Päivä",
                "Tunnin",
                "Minuutti",
                "sekuntia",
                "",
            ],
            labelsShort: ["Vuo", "Kuu", "Päi", "Tun", "Min", "Sek", ""],
            startText: "Käynnistys",
            stopText: "Seis",
            resetText: "Aseta uudelleen",
            lapText: "Kierros",
            hideText: "Vuota",
            backText: "Edellinen",
            undoText: "Kumoa",
            offText: "Pois",
            onText: "Päällä",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.fr = {
            setText: "Terminer",
            cancelText: "Annuler",
            clearText: "Effacer",
            selectedText: "{count} sélectionné",
            selectedPluralText: "{count} sélectionnés",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Dimanche",
                "Lundi",
                "Mardi",
                "Mercredi",
                "Jeudi",
                "Vendredi",
                "Samedi",
            ],
            dayNamesShort: [
                "Dim.",
                "Lun.",
                "Mar.",
                "Mer.",
                "Jeu.",
                "Ven.",
                "Sam.",
            ],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            dayText: "Jour",
            monthText: "Mois",
            monthNames: [
                "Janvier",
                "Février",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juillet",
                "Août",
                "Septembre",
                "Octobre",
                "Novembre",
                "Décembre",
            ],
            monthNamesShort: [
                "Janv.",
                "Févr.",
                "Mars",
                "Avril",
                "Mai",
                "Juin",
                "Juil.",
                "Août",
                "Sept.",
                "Oct.",
                "Nov.",
                "Déc.",
            ],
            hourText: "Heures",
            minuteText: "Minutes",
            secText: "Secondes",
            timeFormat: "HH:ii",
            yearText: "Année",
            nowText: "Maintenant",
            pmText: "pm",
            amText: "am",
            todayText: "Aujourd'hui",
            firstDay: 1,
            dateText: "Date",
            timeText: "Heure",
            closeText: "Fermer",
            allDayText: "Toute la journée",
            noEventsText: "Aucun événement",
            eventText: "Événement",
            eventsText: "Événements",
            moreEventsText: "{count} autre",
            moreEventsPluralText: "{count} autres",
            fromText: "Démarrer",
            toText: "Fin",
            wholeText: "Entier",
            fractionText: "Fraction",
            unitText: "Unité",
            labels: [
                "Ans",
                "Mois",
                "Jours",
                "Heures",
                "Minutes",
                "Secondes",
                "",
            ],
            labelsShort: ["Ans", "Mois", "Jours", "Hrs", "Min", "Sec", ""],
            startText: "Démarrer",
            stopText: "Arrêter",
            resetText: "Réinitialiser",
            lapText: "Lap",
            hideText: "Cachez",
            backText: "Retour",
            undoText: "Annuler",
            offText: "Non",
            onText: "Oui",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.he = {
            rtl: !0,
            setText: "שמירה",
            cancelText: "ביטול",
            clearText: "נקה",
            selectedText: "{count} נבחר",
            selectedPluralText: "{count} נבחרו",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "ראשון",
                "שני",
                "שלישי",
                "רביעי",
                "חמישי",
                "שישי",
                "שבת",
            ],
            dayNamesShort: ["א'", "ב'", "ג'", "ד'", "ה'", "ו'", "ש'"],
            dayNamesMin: ["א", "ב", "ג", "ד", "ה", "ו", "ש"],
            dayText: "יום",
            hourText: "שעות",
            minuteText: "דקות",
            monthNames: [
                "ינואר",
                "פברואר",
                "מרץ",
                "אפריל",
                "מאי",
                "יוני",
                "יולי",
                "אוגוסט",
                "ספטמבר",
                "אוקטובר",
                "נובמבר",
                "דצמבר",
            ],
            monthNamesShort: [
                "ינו",
                "פבר",
                "מרץ",
                "אפר",
                "מאי",
                "יונ",
                "יול",
                "אוג",
                "ספט",
                "אוק",
                "נוב",
                "דצמ",
            ],
            monthText: "חודש",
            secText: "שניות",
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:ii",
            timeWheels: "iiHH",
            yearText: "שנה",
            nowText: "עכשיו",
            firstDay: 0,
            dateText: "תאריך",
            timeText: "זמן",
            closeText: "סגירה",
            todayText: "היום",
            allDayText: "כל היום",
            noEventsText: "אין אירועים",
            eventText: "מִקרֶה",
            eventsText: "מִקרֶה",
            moreEventsText: "אירוע אחד נוסף",
            moreEventsPluralText: "{count} אירועים נוספים",
            fromText: "התחלה",
            toText: "סיום",
            wholeText: "כֹּל",
            fractionText: "שבריר",
            unitText: "יחידה",
            labels: ["שנים", "חודשים", "ימים", "שעות", "דקות", "שניים", ""],
            labelsShort: [
                "שנים",
                "חודשים",
                "ימים",
                "שעות",
                "דקות",
                "שניים",
                "",
            ],
            startText: "התחל",
            stopText: "עצור",
            resetText: "אתחול",
            lapText: "הקפה",
            hideText: "הסתר",
            offText: "כיבוי",
            onText: "הפעלה",
            backText: "חזור",
            undoText: "ביטול פעולה",
        }),
        (oa.i18n.hi = {
            setText: "सैट करें",
            cancelText: "रद्द करें",
            clearText: "साफ़ को",
            selectedText: "{count} चयनित",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "रविवार",
                "सोमवार",
                "मंगलवार",
                "बुधवार",
                "गुरुवार",
                "शुक्रवार",
                "शनिवार",
            ],
            dayNamesShort: [
                "रवि",
                "सोम",
                "मंगल",
                "बुध",
                "गुरु",
                "शुक्र",
                "शनि",
            ],
            dayNamesMin: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
            dayText: "दिन",
            delimiter: ".",
            hourText: "घंटा",
            minuteText: "मिनट",
            monthNames: [
                "जनवरी ",
                "फरवरी",
                "मार्च",
                "अप्रेल",
                "मई",
                "जून",
                "जूलाई",
                "अगस्त ",
                "सितम्बर",
                "अक्टूबर",
                "नवम्बर",
                "दिसम्बर",
            ],
            monthNamesShort: [
                "जन",
                "फर",
                "मार्च",
                "अप्रेल",
                "मई",
                "जून",
                "जूलाई",
                "अग",
                "सित",
                "अक्ट",
                "नव",
                "दि",
            ],
            monthText: "महीना",
            secText: "सेकंड",
            timeFormat: "H:ii",
            yearText: "साल",
            nowText: "अब",
            pmText: "अपराह्न",
            amText: "पूर्वाह्न",
            firstDay: 1,
            dateText: "तिथि",
            timeText: "समय",
            todayText: "आज",
            prevMonthText: "पिछ्ला महिना",
            nextMonthText: "अगले महीने",
            prevYearText: "पिछला साल",
            nextYearText: "अगले वर्ष",
            closeText: "बंद",
            eventText: "इवेट३",
            eventsText: "इवेट३",
            allDayText: "पूरे दिन",
            noEventsText: "Ei tapahtumia",
            moreEventsText: "{count} और",
            fromText: "से",
            toText: "तक",
            wholeText: "समूचा",
            fractionText: "अंश",
            unitText: "इकाई",
            labels: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
            labelsShort: ["साल", "महीने", "दिन", "घंटे", "मिनट", "सेकंड", ""],
            startText: "प्रारंभ",
            stopText: "रोकें",
            resetText: "रीसेट करें",
            lapText: "लैप",
            hideText: "छिपाना",
            backText: "वापस",
            undoText: "वापस लाएं",
            offText: "बंद",
            onText: "चालू",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.hr = {
            setText: "Postavi",
            cancelText: "Izlaz",
            clearText: "Izbriši",
            selectedText: "{count} odabran",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Nedjelja",
                "Ponedjeljak",
                "Utorak",
                "Srijeda",
                "Četvrtak",
                "Petak",
                "Subota",
            ],
            dayNamesShort: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"],
            dayNamesMin: ["Ne", "Po", "Ut", "Sr", "Če", "Pe", "Su"],
            dayText: "Dan",
            delimiter: ".",
            hourText: "Sat",
            minuteText: "Minuta",
            monthNames: [
                "Siječanj",
                "Veljača",
                "Ožujak",
                "Travanj",
                "Svibanj",
                "Lipanj",
                "Srpanj",
                "Kolovoz",
                "Rujan",
                "Listopad",
                "Studeni",
                "Prosinac",
            ],
            monthNamesShort: [
                "Sij",
                "Velj",
                "Ožu",
                "Tra",
                "Svi",
                "Lip",
                "Srp",
                "Kol",
                "Ruj",
                "Lis",
                "Stu",
                "Pro",
            ],
            monthText: "Mjesec",
            secText: "Sekunda",
            timeFormat: "H:ii",
            yearText: "Godina",
            nowText: "Sada",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Vrijeme",
            todayText: "Danas",
            prevMonthText: "Prethodni mjesec",
            nextMonthText: "Sljedeći mjesec",
            prevYearText: "Prethodni godina",
            nextYearText: "Slijedeće godine",
            closeText: "Zatvori",
            eventText: "Događaj",
            eventsText: "događaja",
            allDayText: "Cijeli dan",
            noEventsText: "Bez događaja",
            moreEventsText: "Još {count}",
            fromText: "Počinje",
            toText: "Završava",
            wholeText: "Cjelina",
            fractionText: "Frakcija",
            unitText: "Jedinica",
            labels: ["godina", "mjesec", "dan", "sat", "minuta", "sekunda", ""],
            labelsShort: ["god", "mje", "dan", "sat", "min", "sec", ""],
            startText: "Početak",
            stopText: "Prekid",
            resetText: "Resetiraj",
            lapText: "Ciklus",
            hideText: "Sakriti",
            backText: "Natrag",
            undoText: "Poništavanje",
            offText: "Uklj.",
            onText: "Isklj.",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.hu = {
            setText: "OK",
            cancelText: "Mégse",
            clearText: "Törlés",
            selectedText: "{count} kiválasztva",
            dateFormat: "yy.mm.dd.",
            dayNames: [
                "Vasárnap",
                "Hétfő",
                "Kedd",
                "Szerda",
                "Csütörtök",
                "Péntek",
                "Szombat",
            ],
            dayNamesShort: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"],
            dayNamesMin: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
            dayText: "Nap",
            delimiter: ".",
            hourText: "Óra",
            minuteText: "Perc",
            monthNames: [
                "Január",
                "Február",
                "Március",
                "Április",
                "Május",
                "Június",
                "Július",
                "Augusztus",
                "Szeptember",
                "Október",
                "November",
                "December",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Már",
                "Ápr",
                "Máj",
                "Jún",
                "Júl",
                "Aug",
                "Szep",
                "Okt",
                "Nov",
                "Dec",
            ],
            monthText: "Hónap",
            secText: "Másodperc",
            timeFormat: "H:ii",
            yearText: "Év",
            nowText: "Most",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Dátum",
            timeText: "Idő",
            todayText: "Ma",
            prevMonthText: "Előző hónap",
            nextMonthText: "Következő hónap",
            prevYearText: "Előző év",
            nextYearText: "Következő év",
            closeText: "Bezár",
            eventText: "esemény",
            eventsText: "esemény",
            allDayText: "Egész nap",
            noEventsText: "Nincs esemény",
            moreEventsText: "{count} további",
            fromText: "Eleje",
            toText: "Vége",
            wholeText: "Egész",
            fractionText: "Tört",
            unitText: "Egység",
            labels: ["Év", "Hónap", "Nap", "Óra", "Perc", "Másodperc", ""],
            labelsShort: ["Év", "Hó.", "Nap", "Óra", "Perc", "Mp.", ""],
            startText: "Indít",
            stopText: "Megállít",
            resetText: "Visszaállít",
            lapText: "Lap",
            hideText: "Elrejt",
            backText: "Vissza",
            undoText: "Visszavon",
            offText: "Ki",
            onText: "Be",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.it = {
            setText: "OK",
            cancelText: "Annulla",
            clearText: "Chiarire",
            selectedText: "{count} selezionato",
            selectedPluralText: "{count} selezionati",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Domenica",
                "Lunedì",
                "Mertedì",
                "Mercoledì",
                "Giovedì",
                "Venerdì",
                "Sabato",
            ],
            dayNamesShort: ["Do", "Lu", "Ma", "Me", "Gi", "Ve", "Sa"],
            dayNamesMin: ["D", "L", "M", "M", "G", "V", "S"],
            dayText: "Giorno",
            hourText: "Ore",
            minuteText: "Minuti",
            monthNames: [
                "Gennaio",
                "Febbraio",
                "Marzo",
                "Aprile",
                "Maggio",
                "Giugno",
                "Luglio",
                "Agosto",
                "Settembre",
                "Ottobre",
                "Novembre",
                "Dicembre",
            ],
            monthNamesShort: [
                "Gen",
                "Feb",
                "Mar",
                "Apr",
                "Mag",
                "Giu",
                "Lug",
                "Ago",
                "Set",
                "Ott",
                "Nov",
                "Dic",
            ],
            monthText: "Mese",
            secText: "Secondi",
            timeFormat: "HH:ii",
            yearText: "Anno",
            nowText: "Ora",
            pmText: "pm",
            amText: "am",
            todayText: "Oggi",
            firstDay: 1,
            dateText: "Data",
            timeText: "Volta",
            closeText: "Chiudere",
            allDayText: "Tutto il giorno",
            noEventsText: "Nessun evento",
            eventText: "Evento",
            eventsText: "Eventi",
            moreEventsText: "{count} altro",
            moreEventsPluralText: "altri {count}",
            fromText: "Inizio",
            toText: "Fine",
            wholeText: "Intero",
            fractionText: "Frazione",
            unitText: "Unità",
            labels: ["Anni", "Mesi", "Giorni", "Ore", "Minuti", "Secondi", ""],
            labelsShort: ["Anni", "Mesi", "Gio", "Ore", "Min", "Sec", ""],
            startText: "Inizio",
            stopText: "Arresto",
            resetText: "Ripristina",
            lapText: "Lap",
            hideText: "Nascondi",
            backText: "Indietro",
            undoText: "Annulla",
            offText: "Via",
            onText: "Su",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.ja = {
            setText: "セット",
            cancelText: "キャンセル",
            clearText: "クリア",
            selectedText: "{count} 選択",
            dateFormat: "yy年mm月dd日",
            dayNames: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesShort: ["日", "月", "火", "水", "木", "金", "土"],
            dayNamesMin: ["日", "月", "火", "水", "木", "金", "土"],
            dayText: "日",
            hourText: "時",
            minuteText: "分",
            monthNames: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            monthNamesShort: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            monthText: "月",
            secText: "秒",
            timeFormat: "HH:ii",
            yearText: "年",
            nowText: "今",
            pmText: "午後",
            amText: "午前",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今日",
            dateText: "日付",
            timeText: "時間",
            closeText: "クローズ",
            allDayText: "終日",
            noEventsText: "イベントはありません",
            eventText: "イベント",
            eventsText: "イベント",
            moreEventsText: "他 {count} 件",
            fromText: "開始",
            toText: "終わり",
            wholeText: "全数",
            fractionText: "分数",
            unitText: "単位",
            labels: ["年間", "月間", "日間", "時間", "分", "秒", ""],
            labelsShort: ["年間", "月間", "日間", "時間", "分", "秒", ""],
            startText: "開始",
            stopText: "停止",
            resetText: "リセット",
            lapText: "ラップ",
            hideText: "隠す",
            backText: "バック",
            undoText: "アンドゥ",
        }),
        (oa.i18n.ko = {
            setText: "설정",
            cancelText: "취소",
            clearText: "삭제",
            selectedText: "{count} 선택된",
            dateFormat: "yy년mm월dd일",
            dayNames: [
                "일요일",
                "월요일",
                "화요일",
                "수요일",
                "목요일",
                "금요일",
                "토요일",
            ],
            dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
            dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
            dayText: "일",
            delimiter: "-",
            hourText: "시간",
            minuteText: "분",
            monthNames: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
            ],
            monthNamesShort: [
                "1월",
                "2월",
                "3월",
                "4월",
                "5월",
                "6월",
                "7월",
                "8월",
                "9월",
                "10월",
                "11월",
                "12월",
            ],
            monthText: "달",
            secText: "초",
            timeFormat: "H:ii",
            yearText: "년",
            nowText: "지금",
            pmText: "오후",
            amText: "오전",
            yearSuffix: "년",
            monthSuffix: "월",
            daySuffix: "일",
            firstDay: 0,
            dateText: "날짜",
            timeText: "시간",
            todayText: "오늘",
            prevMonthText: "이전 달",
            nextMonthText: "다음 달",
            prevYearText: "이전 년",
            nextYearText: "다음 년",
            closeText: "닫기",
            eventText: "이벤트",
            eventsText: "이벤트",
            allDayText: "종일",
            noEventsText: "이벤트 없음",
            moreEventsText: "{count}개 더보기",
            fromText: "시작",
            toText: "종료",
            wholeText: "정수",
            fractionText: "분수",
            unitText: "단위",
            labels: ["년", "달", "일", "시간", "분", "초", ""],
            labelsShort: ["년", "달", "일", "시간", "분", "초", ""],
            startText: "시작",
            stopText: "중지 ",
            resetText: "초기화",
            lapText: "기록",
            hideText: "숨는 장소",
            backText: "뒤로",
            undoText: "실행취소",
            offText: "끔",
            onText: "켬",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.lt = {
            setText: "OK",
            cancelText: "Atšaukti",
            clearText: "Išvalyti",
            selectedText: "Pasirinktas {count}",
            selectedPluralText: "Pasirinkti {count}",
            dateFormat: "yy-mm-dd",
            dayNames: [
                "Sekmadienis",
                "Pirmadienis",
                "Antradienis",
                "Trečiadienis",
                "Ketvirtadienis",
                "Penktadienis",
                "Šeštadienis",
            ],
            dayNamesShort: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayNamesMin: ["S", "Pr", "A", "T", "K", "Pn", "Š"],
            dayText: "Diena",
            hourText: "Valanda",
            minuteText: "Minutes",
            monthNames: [
                "Sausis",
                "Vasaris",
                "Kovas",
                "Balandis",
                "Gegužė",
                "Birželis",
                "Liepa",
                "Rugpjūtis",
                "Rugsėjis",
                "Spalis",
                "Lapkritis",
                "Gruodis",
            ],
            monthNamesShort: [
                "Sau",
                "Vas",
                "Kov",
                "Bal",
                "Geg",
                "Bir",
                "Lie",
                "Rugp",
                "Rugs",
                "Spa",
                "Lap",
                "Gruo",
            ],
            monthText: "Mėnuo",
            secText: "Sekundes",
            amText: "am",
            pmText: "pm",
            timeFormat: "HH:ii",
            yearText: "Metai",
            nowText: "Dabar",
            todayText: "Šiandien",
            firstDay: 1,
            dateText: "Data",
            timeText: "Laikas",
            closeText: "Uždaryti",
            allDayText: "Visą dieną",
            noEventsText: "Nėra įvykių",
            eventText: "Įvykių",
            eventsText: "Įvykiai",
            moreEventsText: "Dar {count}",
            fromText: "Nuo",
            toText: "Iki",
            wholeText: "Visas",
            fractionText: "Frakcija",
            unitText: "Vienetas",
            labels: [
                "Metai",
                "Mėnesiai",
                "Dienos",
                "Valandos",
                "Minutes",
                "Sekundes",
                "",
            ],
            labelsShort: ["m", "mėn.", "d", "h", "min", "s", ""],
            startText: "Pradėti",
            stopText: "Sustabdyti",
            resetText: "Išnaujo",
            lapText: "Ratas",
            hideText: "Slėpti",
            backText: "Atgal",
            undoText: "Anuliuoti",
            offText: "Išj.",
            onText: "Įj.",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.nl = {
            setText: "Instellen",
            cancelText: "Annuleren",
            clearText: "Leegmaken",
            selectedText: "{count} gekozen",
            dateFormat: "dd-mm-yy",
            dayNames: [
                "Zondag",
                "Maandag",
                "Dinsdag",
                "Woensdag",
                "Donderdag",
                "Vrijdag",
                "Zaterdag",
            ],
            dayNamesShort: ["zo", "ma", "di", "wo", "do", "vr", "za"],
            dayNamesMin: ["z", "m", "d", "w", "d", "v", "z"],
            dayText: "Dag",
            hourText: "Uur",
            minuteText: "Minuten",
            monthNames: [
                "januari",
                "februari",
                "maart",
                "april",
                "mei",
                "juni",
                "juli",
                "augustus",
                "september",
                "oktober",
                "november",
                "december",
            ],
            monthNamesShort: [
                "jan",
                "feb",
                "mrt",
                "apr",
                "mei",
                "jun",
                "jul",
                "aug",
                "sep",
                "okt",
                "nov",
                "dec",
            ],
            monthText: "Maand",
            secText: "Seconden",
            timeFormat: "HH:ii",
            yearText: "Jaar",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "Vandaag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tijd",
            closeText: "Sluiten",
            allDayText: "Hele dag",
            noEventsText: "Geen activiteiten",
            eventText: "Activiteit",
            eventsText: "Activiteiten",
            moreEventsText: "nog {count}",
            fromText: "Start",
            toText: "Einde",
            wholeText: "geheel",
            fractionText: "fractie",
            unitText: "eenheid",
            labels: [
                "Jaren",
                "Maanden",
                "Dagen",
                "Uren",
                "Minuten",
                "Seconden",
                "",
            ],
            labelsShort: ["j", "m", "d", "u", "min", "sec", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Reset",
            lapText: "Ronde",
            hideText: "Verbergen",
            backText: "Terug",
            undoText: "Onged. maken",
            offText: "Uit",
            onText: "Aan",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.no = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Tømme",
            selectedText: "{count} valgt",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Søndag",
                "Mandag",
                "Tirsdag",
                "Onsdag",
                "Torsdag",
                "Fredag",
                "Lørdag",
            ],
            dayNamesShort: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            dayText: "Dag",
            delimiter: ".",
            hourText: "Time",
            minuteText: "Minutt",
            monthNames: [
                "Januar",
                "Februar",
                "Mars",
                "April",
                "Mai",
                "Juni",
                "Juli",
                "August",
                "September",
                "Oktober",
                "November",
                "Desember",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mai",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Des",
            ],
            monthText: "Måned",
            secText: "Sekund",
            timeFormat: "HH:ii",
            yearText: "År",
            nowText: "Nå",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Dato",
            timeText: "Tid",
            closeText: "Lukk",
            allDayText: "Hele dagen",
            noEventsText: "Ingen hendelser",
            eventText: "Hendelse",
            eventsText: "Hendelser",
            moreEventsText: "{count} mere",
            fromText: "Start",
            toText: "End",
            wholeText: "Hele",
            fractionText: "Fraksjon",
            unitText: "Enhet",
            labels: [
                "År",
                "Måneder",
                "Dager",
                "Timer",
                "Minutter",
                "Sekunder",
                "",
            ],
            labelsShort: ["År", "Mån", "Dag", "Time", "Min", "Sek", ""],
            startText: "Start",
            stopText: "Stopp",
            resetText: "Tilbakestille",
            lapText: "Runde",
            hideText: "Skjul",
            backText: "Tilbake",
            undoText: "Angre",
            offText: "Av",
            onText: "På",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.pl = {
            setText: "Zestaw",
            cancelText: "Anuluj",
            clearText: "Oczyścić",
            selectedText: "Wybór: {count}",
            dateFormat: "yy-mm-dd",
            dayNames: [
                "Niedziela",
                "Poniedziałek",
                "Wtorek",
                "Środa",
                "Czwartek",
                "Piątek",
                "Sobota",
            ],
            dayNamesShort: [
                "Niedz.",
                "Pon.",
                "Wt.",
                "Śr.",
                "Czw.",
                "Pt.",
                "Sob.",
            ],
            dayNamesMin: ["N", "P", "W", "Ś", "C", "P", "S"],
            dayText: "Dzień",
            hourText: "Godziny",
            minuteText: "Minuty",
            monthNames: [
                "Styczeń",
                "Luty",
                "Marzec",
                "Kwiecień",
                "Maj",
                "Czerwiec",
                "Lipiec",
                "Sierpień",
                "Wrzesień",
                "Październik",
                "Listopad",
                "Grudzień",
            ],
            monthNamesShort: [
                "Sty",
                "Lut",
                "Mar",
                "Kwi",
                "Maj",
                "Cze",
                "Lip",
                "Sie",
                "Wrz",
                "Paź",
                "Lis",
                "Gru",
            ],
            monthText: "Miesiąc",
            secText: "Sekundy",
            timeFormat: "HH:ii",
            yearText: "Rok",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dzisiaj",
            firstDay: 1,
            dateText: "Data",
            timeText: "Czas",
            closeText: "Zakończenie",
            allDayText: "Cały dzień",
            noEventsText: "Brak wydarzeń",
            eventText: "Wydarzeń",
            eventsText: "Wydarzenia",
            moreEventsText: "Jeszcze {count}",
            fromText: "Rozpoczęcie",
            toText: "Koniec",
            wholeText: "Cały",
            fractionText: "Ułamek",
            unitText: "Jednostka",
            labels: [
                "Lata",
                "Miesiąc",
                "Dni",
                "Godziny",
                "Minuty",
                "Sekundy",
                "",
            ],
            labelsShort: ["R", "M", "Dz", "Godz", "Min", "Sek", ""],
            startText: "Rozpoczęcie",
            stopText: "Zatrzymać",
            resetText: "Zresetować",
            lapText: "Zakładka",
            hideText: "Ukryć",
            backText: "Wróć",
            undoText: "Cofnij",
            offText: "Wył",
            onText: "Wł",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n["pt-BR"] = {
            setText: "Selecionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado",
            ],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            dayText: "Dia",
            hourText: "Hora",
            minuteText: "Minutos",
            monthNames: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
            ],
            monthNamesShort: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
            ],
            monthText: "Mês",
            secText: "Segundo",
            timeFormat: "HH:ii",
            yearText: "Ano",
            nowText: "Agora",
            pmText: "pm",
            amText: "am",
            todayText: "Hoje",
            dateText: "Data",
            timeText: "Tempo",
            closeText: "Fechar",
            allDayText: "Dia inteiro",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "Mais {count}",
            fromText: "In&iacute;cio",
            toText: "Fim",
            wholeText: "Inteiro",
            fractionText: "Fração",
            unitText: "Unidade",
            labels: [
                "Anos",
                "Meses",
                "Dias",
                "Horas",
                "Minutos",
                "Segundos",
                "",
            ],
            labelsShort: ["Ano", "M&ecirc;s", "Dia", "Hora", "Min", "Seg", ""],
            startText: "Começar",
            stopText: "Pare",
            resetText: "Reinicializar",
            lapText: "Lap",
            hideText: "Esconder",
            backText: "Anterior",
            undoText: "Desfazer",
            offText: "Desl",
            onText: "Lig",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n["pt-PT"] = {
            setText: "Seleccionar",
            cancelText: "Cancelar",
            clearText: "Claro",
            selectedText: "{count} selecionado",
            selectedPluralText: "{count} selecionados",
            dateFormat: "dd-mm-yy",
            dayNames: [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado",
            ],
            dayNamesShort: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
            dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
            dayText: "Dia",
            hourText: "Horas",
            minuteText: "Minutos",
            monthNames: [
                "Janeiro",
                "Fevereiro",
                "Março",
                "Abril",
                "Maio",
                "Junho",
                "Julho",
                "Agosto",
                "Setembro",
                "Outubro",
                "Novembro",
                "Dezembro",
            ],
            monthNamesShort: [
                "Jan",
                "Fev",
                "Mar",
                "Abr",
                "Mai",
                "Jun",
                "Jul",
                "Ago",
                "Set",
                "Out",
                "Nov",
                "Dez",
            ],
            monthText: "Mês",
            secText: "Segundo",
            timeFormat: "HH:ii",
            yearText: "Ano",
            nowText: "Actualizar",
            pmText: "pm",
            amText: "am",
            todayText: "Hoy",
            firstDay: 1,
            dateText: "Data",
            timeText: "Tempo",
            closeText: "Fechar",
            allDayText: "Todo o dia",
            noEventsText: "Nenhum evento",
            eventText: "Evento",
            eventsText: "Eventos",
            moreEventsText: "mais {count}",
            fromText: "Início",
            toText: "Fim",
            wholeText: "Inteiro",
            fractionText: "Fracção",
            unitText: "Unidade",
            labels: [
                "Anos",
                "Meses",
                "Dias",
                "Horas",
                "Minutos",
                "Segundos",
                "",
            ],
            labelsShort: ["Ano", "Mês", "Dia", "Hora", "Min", "Seg", ""],
            startText: "Começar",
            stopText: "Parar",
            resetText: "Reinicializar",
            lapText: "Lap",
            hideText: "Esconder",
            backText: "Anterior",
            undoText: "Anular",
            offText: "Desl",
            onText: "Lig",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.ro = {
            setText: "Setare",
            cancelText: "Anulare",
            clearText: "Ştergere",
            selectedText: "{count} selectat",
            selectedPluralText: "{count} selectate",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Duminică",
                "Luni",
                "Marți",
                "Miercuri",
                "Joi",
                "Vineri",
                "Sâmbătă",
            ],
            dayNamesShort: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ"],
            dayNamesMin: ["D", "L", "M", "M", "J", "V", "S"],
            dayText: " Ziua",
            delimiter: ".",
            hourText: " Ore ",
            minuteText: "Minute",
            monthNames: [
                "Ianuarie",
                "Februarie",
                "Martie",
                "Aprilie",
                "Mai",
                "Iunie",
                "Iulie",
                "August",
                "Septembrie",
                "Octombrie",
                "Noiembrie",
                "Decembrie",
            ],
            monthNamesShort: [
                "Ian.",
                "Feb.",
                "Mar.",
                "Apr.",
                "Mai",
                "Iun.",
                "Iul.",
                "Aug.",
                "Sept.",
                "Oct.",
                "Nov.",
                "Dec.",
            ],
            monthText: "Luna",
            secText: "Secunde",
            timeFormat: "HH:ii",
            yearText: "Anul",
            nowText: "Acum",
            amText: "am",
            pmText: "pm",
            todayText: "Astăzi",
            prevMonthText: "Luna anterioară",
            nextMonthText: "Luna următoare",
            prevYearText: "Anul anterior",
            nextYearText: "Anul următor",
            eventText: "Eveniment",
            eventsText: "Evenimente",
            allDayText: "Toată ziua",
            noEventsText: "Niciun eveniment",
            moreEventsText: "Încă unul",
            moreEventsPluralText: "Încă {count}",
            firstDay: 1,
            dateText: "Data",
            timeText: "Ora",
            closeText: "Închidere",
            fromText: "Start",
            toText: "Final",
            wholeText: "Complet",
            fractionText: "Parţial",
            unitText: "Unitate",
            labels: ["Ani", "Luni", "Zile", "Ore", "Minute", "Secunde", ""],
            labelsShort: ["Ani", "Luni", "Zile", "Ore", "Min.", "Sec.", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Resetare",
            lapText: "Tură",
            hideText: "Ascundere",
            backText: "Înapoi",
            undoText: "Anulează",
            offText: "Nu",
            onText: "Da",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n["ru-UA"] = {
            setText: "Установить",
            cancelText: "Отменить",
            clearText: "Очиститьr",
            selectedText: "{count} Вібрать",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "воскресенье",
                "понедельник",
                "вторник",
                "среда",
                "четверг",
                "пятница",
                "суббота",
            ],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            dayText: "День",
            delimiter: ".",
            hourText: "Часы",
            minuteText: "Минуты",
            monthNames: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь",
            ],
            monthNamesShort: [
                "Янв.",
                "Февр.",
                "Март",
                "Апр.",
                "Май",
                "Июнь",
                "Июль",
                "Авг.",
                "Сент.",
                "Окт.",
                "Нояб.",
                "Дек.",
            ],
            monthText: "Месяцы",
            secText: "Сикунды",
            timeFormat: "HH:ii",
            yearText: "Год",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            closeText: "Закрыть",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            fromText: "Начало",
            toText: "Конец",
            wholeText: "Весь",
            fractionText: "Часть",
            unitText: "Единица",
            labels: [
                "Годы",
                " Месяцы ",
                " Дни ",
                " Часы ",
                " Минуты ",
                " Секунды",
                "",
            ],
            labelsShort: ["Год", "Мес.", "Дн.", "Ч.", "Мин.", "Сек.", ""],
            startText: "Старт",
            stopText: "Стоп",
            resetText: " Сброс ",
            lapText: " Этап ",
            hideText: " Скрыть ",
            backText: "назад",
            undoText: "ОтменитЬ",
            offText: "O",
            onText: "I",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n["ru-RU"] = oa.i18n.ru = {
            setText: "Установить",
            cancelText: "Отмена",
            clearText: "Очистить",
            selectedText: "{count} Выбрать",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "воскресенье",
                "понедельник",
                "вторник",
                "среда",
                "четверг",
                "пятница",
                "суббота",
            ],
            dayNamesShort: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            dayNamesMin: ["в", "п", "в", "с", "ч", "п", "с"],
            dayText: "День",
            delimiter: ".",
            hourText: "Час",
            minuteText: "Минут",
            monthNames: [
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь",
            ],
            monthNamesShort: [
                "Янв",
                "Фев",
                "Мар",
                "Апр",
                "Май",
                "Июн",
                "Июл",
                "Авг",
                "Сен",
                "Окт",
                "Ноя",
                "Дек",
            ],
            monthText: "Месяц",
            secText: "Секунд",
            timeFormat: "HH:ii",
            yearText: "Год",
            nowText: "Сейчас",
            amText: "am",
            pmText: "pm",
            todayText: "Cегодня",
            firstDay: 1,
            dateText: "Дата",
            timeText: "Время",
            closeText: "Закрыть",
            allDayText: "Весь день",
            noEventsText: "Нет событий",
            eventText: "Мероприятия",
            eventsText: "Мероприятия",
            moreEventsText: "Ещё {count}",
            fromText: "Начало",
            toText: "Конец",
            wholeText: "Целое",
            fractionText: "Дробное",
            unitText: "Единица",
            labels: ["Лет", "Месяцев", "Дней", "Часов", "Минут", "Секунд", ""],
            labelsShort: ["Лет", "Мес", "Дн", "Час", "Мин", "Сек", ""],
            startText: "Старт",
            stopText: "Стоп",
            resetText: "Сбросить",
            lapText: "Круг",
            hideText: "Скрыть",
            backText: "назад",
            undoText: "ОтменитЬ",
            offText: "O",
            onText: "I",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.sk = {
            setText: "Zadaj",
            cancelText: "Zrušiť",
            clearText: "Vymazať",
            selectedText: "Označený: {count}",
            dateFormat: "d.m.yy",
            dayNames: [
                "Nedeľa",
                "Pondelok",
                "Utorok",
                "Streda",
                "Štvrtok",
                "Piatok",
                "Sobota",
            ],
            dayNamesShort: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"],
            dayNamesMin: ["N", "P", "U", "S", "Š", "P", "S"],
            dayText: "Ďeň",
            hourText: "Hodiny",
            minuteText: "Minúty",
            monthNames: [
                "Január",
                "Február",
                "Marec",
                "Apríl",
                "Máj",
                "Jún",
                "Júl",
                "August",
                "September",
                "Október",
                "November",
                "December",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Máj",
                "Jún",
                "Júl",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            monthText: "Mesiac",
            secText: "Sekundy",
            timeFormat: "H:ii",
            yearText: "Rok",
            nowText: "Teraz",
            amText: "am",
            pmText: "pm",
            todayText: "Dnes",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Čas",
            closeText: "Zavrieť",
            allDayText: "Celý deň",
            noEventsText: "Žiadne udalosti",
            eventText: "Udalostí",
            eventsText: "Udalosti",
            moreEventsText: "{count} ďalšia",
            moreEventsPluralText: "{count} ďalšie",
            fromText: "Začiatok",
            toText: "Koniec",
            wholeText: "Celý",
            fractionText: "Časť",
            unitText: "Jednotka",
            labels: [
                "Roky",
                "Mesiace",
                "Dni",
                "Hodiny",
                "Minúty",
                "Sekundy",
                "",
            ],
            labelsShort: ["Rok", "Mes", "Dni", "Hod", "Min", "Sec", ""],
            startText: "Start",
            stopText: "Stop",
            resetText: "Resetovať",
            lapText: "Etapa",
            hideText: "Schovať",
            backText: "Späť",
            undoText: "Späť",
            offText: "O",
            onText: "I",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.sr = {
            setText: "Постави",
            cancelText: "Откажи",
            clearText: "Обриши",
            selectedText: "{count} изабрана",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Недеља",
                "Понедељак",
                "Уторак",
                "Среда",
                "Четвртак",
                "Петак",
                "Субота",
            ],
            dayNamesShort: ["Нед", "Пон", "Уто", "Сре", "Чет", "Пет", "Суб"],
            dayNamesMin: ["Не", "По", "Ут", "Ср", "Че", "Пе", "Су"],
            dayText: "Дан",
            delimiter: ".",
            hourText: "Час",
            minuteText: "Минут",
            monthNames: [
                "Јануар",
                "Фебруар",
                "Март",
                "Април",
                "Мај",
                "Јун",
                "Јул",
                "Август",
                "Септембар",
                "Октобар",
                "Новембар",
                "Децембар",
            ],
            monthNamesShort: [
                "Јан",
                "Феб",
                "Мар",
                "Апр",
                "Мај",
                "Јун",
                "Јул",
                "Авг",
                "Сеп",
                "Окт",
                "Нов",
                "Дец",
            ],
            monthText: "месец",
            secText: "Секунд",
            timeFormat: "H:ii",
            yearText: "година",
            nowText: "сада",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "Датум",
            timeText: "време",
            todayText: "Данас",
            prevMonthText: "Претходни мјесец",
            nextMonthText: "Следећег месеца",
            prevYearText: "Претходна године",
            nextYearText: "Следеће године",
            closeText: "Затвори",
            eventText: "Догађај",
            eventsText: "Догађаји",
            allDayText: "Цео дан",
            noEventsText: "Нема догађаја",
            moreEventsText: "Још {count}",
            fromText: "Од",
            toText: "До",
            wholeText: "цео",
            fractionText: "Фракција",
            unitText: "единица",
            labels: [
                "Године",
                "Месеци",
                "Дана",
                "Сати",
                "Минута",
                "Секунди",
                "",
            ],
            labelsShort: ["Год", "Мес", "Дана", "Сати", "Мину", "Секу", ""],
            startText: "Започни",
            stopText: "Стоп",
            resetText: "Ресетуј",
            lapText: "Круг",
            hideText: "Сакрити",
            backText: "Повратак",
            undoText: "Опозови",
            offText: "нe",
            onText: "да",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.sv = {
            setText: "OK",
            cancelText: "Avbryt",
            clearText: "Klara",
            selectedText: "{count} vald",
            dateFormat: "yy-mm-dd",
            dayNames: [
                "Söndag",
                "Måndag",
                "Tisdag",
                "Onsdag",
                "Torsdag",
                "Fredag",
                "Lördag",
            ],
            dayNamesShort: ["Sö", "Må", "Ti", "On", "To", "Fr", "Lö"],
            dayNamesMin: ["S", "M", "T", "O", "T", "F", "L"],
            dayText: "Dag",
            hourText: "Timme",
            minuteText: "Minut",
            monthNames: [
                "Januari",
                "Februari",
                "Mars",
                "April",
                "Maj",
                "Juni",
                "Juli",
                "Augusti",
                "September",
                "Oktober",
                "November",
                "December",
            ],
            monthNamesShort: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Maj",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Okt",
                "Nov",
                "Dec",
            ],
            monthText: "Månad",
            secText: "Sekund",
            timeFormat: "HH:ii",
            yearText: "År",
            nowText: "Nu",
            pmText: "pm",
            amText: "am",
            todayText: "I dag",
            firstDay: 1,
            dateText: "Datum",
            timeText: "Tid",
            closeText: "Stäng",
            allDayText: "Heldag",
            noEventsText: "Inga aktiviteter",
            eventText: "Händelse",
            eventsText: "Händelser",
            moreEventsText: "{count} till",
            fromText: "Start",
            toText: "Slut",
            wholeText: "Hela",
            fractionText: "Bråk",
            unitText: "Enhet",
            labels: [
                "År",
                "Månader",
                "Dagar",
                "Timmar",
                "Minuter",
                "Sekunder",
                "",
            ],
            labelsShort: ["År", "Mån", "Dag", "Tim", "Min", "Sek", ""],
            startText: "Start",
            stopText: "Stopp",
            resetText: "Återställ",
            lapText: "Varv",
            hideText: "Dölj",
            backText: "Tillbaka",
            undoText: "Ångra",
            offText: "Av",
            onText: "På",
        }),
        (oa.i18n.th = {
            setText: "ตั้งค่า",
            cancelText: "ยกเลิก",
            clearText: "ล้าง",
            selectedText: "{count} เลือก",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "อาทิตย์",
                "จันทร์",
                "อังคาร",
                "พุธ",
                "พฤหัสบดี",
                "ศุกร์",
                "เสาร์",
            ],
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayNamesMin: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            dayText: "วัน",
            delimiter: ".",
            hourText: "ชั่วโมง",
            minuteText: "นาที",
            monthNames: [
                "มกราคม",
                "กุมภาพันธ์",
                "มีนาคม",
                "เมษายน",
                "พฤษภาคม",
                "มิถุนายน",
                "กรกฎาคม",
                "สิงหาคม",
                "กันยายน",
                "ตุลาคม",
                "พฤศจิกายน",
                "ธันวาคม",
            ],
            monthNamesShort: [
                "ม.ค.",
                "ก.พ.",
                "มี.ค.",
                "เม.ย.",
                "พ.ค.",
                "มิ.ย.",
                "ก.ค.",
                "ส.ค.",
                "ก.ย.",
                "ต.ค.",
                "พ.ย.",
                "ธ.ค.",
            ],
            monthText: "เดือน",
            secText: "วินาที",
            timeFormat: "HH:ii",
            yearText: "ปี",
            nowText: "ตอนนี้",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "วัน",
            timeText: "เวลา",
            today: "วันนี้",
            prevMonthText: "เดือนก่อนหน้า",
            nextMonthText: "เดือนถัดไป",
            prevYearText: "ปีก่อนหน้า",
            nextYearText: "ปีถัดไป",
            closeText: "ปิด",
            eventText: "เหตุการณ์",
            eventsText: "เหตุการณ์",
            allDayText: "ตลอดวัน",
            noEventsText: "ไม่มีกิจกรรม",
            moreEventsText: "อีก {count} กิจกรรม",
            fromText: "จาก",
            toText: "ถึง",
            wholeText: "ทั้งหมด",
            fractionText: "เศษส่วน",
            unitText: "หน่วย",
            labels: ["ปี", "เดือน", "วัน", "ชั่วโมง", "นาที", "วินาที", ""],
            labelsShort: [
                "ปี",
                "เดือน",
                "วัน",
                "ชั่วโมง",
                "นาที",
                "วินาที",
                "",
            ],
            startText: "เริ่ม",
            stopText: "หยุด",
            resetText: "รีเซ็ต",
            lapText: "รอบ",
            hideText: "ซ่อน",
            backText: "ย้อนกลับ",
            undoText: "เลิกทา",
            offText: "ปิด",
            onText: "เปิด",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.tr = {
            setText: "Seç",
            cancelText: "İptal",
            clearText: "Temizleyin",
            selectedText: "{count} seçilmiş",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "Pazar",
                "Pazartesi",
                "Salı",
                "Çarşamba",
                "Perşembe",
                "Cuma",
                "Cumartesi",
            ],
            dayNamesShort: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
            dayNamesMin: ["P", "P", "S", "Ç", "P", "C", "C"],
            dayText: "Gün",
            delimiter: ".",
            hourText: "Saat",
            minuteText: "Dakika",
            monthNames: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık",
            ],
            monthNamesShort: [
                "Oca",
                "Şub",
                "Mar",
                "Nis",
                "May",
                "Haz",
                "Tem",
                "Ağu",
                "Eyl",
                "Eki",
                "Kas",
                "Ara",
            ],
            monthText: "Ay",
            secText: "Saniye",
            timeFormat: "HH:ii",
            yearText: "Yıl",
            nowText: "Şimdi",
            pmText: "pm",
            amText: "am",
            todayText: "Bugün",
            firstDay: 1,
            dateText: "Tarih",
            timeText: "Zaman",
            closeText: "Kapatmak",
            allDayText: "Tüm gün",
            noEventsText: "Etkinlik Yok",
            eventText: "Etkinlik",
            eventsText: "Etkinlikler",
            moreEventsText: "{count} tane daha",
            fromText: "Başla",
            toText: "Son",
            wholeText: "Tam",
            fractionText: "Kesir",
            unitText: "Birim",
            labels: ["Yıl", "Ay", "Gün", "Saat", "Dakika", "Saniye", ""],
            labelsShort: ["Yıl", "Ay", "Gün", "Sa", "Dak", "Sn", ""],
            startText: "Başla",
            stopText: "Durdur",
            resetText: "Sıfırla",
            lapText: "Tur",
            hideText: "Gizle",
            backText: "Geri",
            undoText: "Geri Al",
            offText: "O",
            onText: "I",
            decimalSeparator: ",",
            thousandsSeparator: ".",
        }),
        (oa.i18n.ua = {
            setText: "встановити",
            cancelText: "відміна",
            clearText: "очистити",
            selectedText: "{count} вибрані",
            dateFormat: "dd.mm.yy",
            dayNames: [
                "неділя",
                "понеділок",
                "вівторок",
                "середа",
                "четвер",
                "п’ятниця",
                "субота",
            ],
            dayNamesShort: ["нед", "пнд", "вів", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            dayText: "День",
            delimiter: ".",
            hourText: "година",
            minuteText: "хвилина",
            monthNames: [
                "Січень",
                "Лютий",
                "Березень",
                "Квітень",
                "Травень",
                "Червень",
                "Липень",
                "Серпень",
                "Вересень",
                "Жовтень",
                "Листопад",
                "Грудень",
            ],
            monthNamesShort: [
                "Січ",
                "Лют",
                "Бер",
                "Кві",
                "Тра",
                "Чер",
                "Лип",
                "Сер",
                "Вер",
                "Жов",
                "Лис",
                "Гру",
            ],
            monthText: "Місяць",
            secText: "Секунд",
            timeFormat: "H:ii",
            yearText: "Рік",
            nowText: "Зараз",
            pmText: "pm",
            amText: "am",
            firstDay: 1,
            dateText: "дата",
            timeText: "Час",
            todayText: "Сьогодні",
            prevMonthText: "Попередній місяць",
            nextMonthText: "Наступного місяця",
            prevYearText: "Попередній рік",
            nextYearText: "Наступного року",
            closeText: "Закрити",
            eventText: "подія",
            eventsText: "події",
            allDayText: "Увесь день",
            noEventsText: "Жодної події",
            moreEventsText: "та ще {count}",
            fromText: "від",
            toText: "кінець",
            wholeText: "всі",
            fractionText: "фракція",
            unitText: "одиниця",
            labels: [
                "Рік",
                "Місяць",
                "День",
                "година",
                "хвилина",
                "Секунд",
                "",
            ],
            labelsShort: [
                "Рік",
                "Місяць",
                "День",
                "година",
                "хвилина",
                "Секунд",
                "",
            ],
            startText: "Початок",
            stopText: "СТОП",
            resetText: "скинути",
            lapText: "коло",
            hideText: "сховати",
            backText: "назад",
            undoText: "відмінити",
            offText: "Вимикати",
            onText: "Увімкнути",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.vi = {
            setText: "Đặt",
            cancelText: "Hủy bò",
            clearText: "Xóa",
            selectedText: "{count} chọn",
            dateFormat: "dd/mm/yy",
            dayNames: [
                "Chủ Nhật",
                "Thứ Hai",
                "Thứ Ba",
                "Thứ Tư",
                "Thứ Năm",
                "Thứ Sáu",
                "Thứ Bảy",
            ],
            dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
            dayText: "",
            delimiter: "/",
            hourText: "Giờ",
            minuteText: "Phút",
            monthNames: [
                "Tháng Một",
                "Tháng Hai",
                "Tháng Ba",
                "Tháng Tư",
                "Tháng Năm",
                "Tháng Sáu",
                "Tháng Bảy",
                "Tháng Tám",
                "Tháng Chín",
                "Tháng Mười",
                "Tháng Mười Một",
                "Tháng Mười Hai",
            ],
            monthNamesShort: [
                "Tháng 1",
                "Tháng 2",
                "Tháng 3",
                "Tháng 4",
                "Tháng 5",
                "Tháng 6",
                "Tháng 7",
                "Tháng 8",
                "Tháng 9",
                "Tháng 10",
                "Tháng 11",
                "Tháng 12",
            ],
            monthText: "Tháng",
            secText: "Giây",
            timeFormat: "H:ii",
            yearText: "Năm",
            nowText: "Bây giờ",
            pmText: "pm",
            amText: "am",
            firstDay: 0,
            dateText: "Ngày",
            timeText: "Hồi",
            todayText: "Hôm nay",
            prevMonthText: "Tháng trước",
            nextMonthText: "Tháng tới",
            prevYearText: "Măm trước",
            nextYearText: "Năm tới",
            closeText: "Đóng",
            eventText: "Sự kiện",
            eventsText: "Sự kiện",
            allDayText: "Cả ngày",
            noEventsText: "Không có sự kiện",
            moreEventsText: "{count} thẻ khác",
            fromText: "Từ",
            toText: "Tới",
            wholeText: "Toàn thể",
            fractionText: "Phân số",
            unitText: "đơn vị",
            labels: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
            labelsShort: ["Năm", "Tháng", "Ngày", "Giờ", "Phút", "Giây", ""],
            startText: "Bắt đầu",
            stopText: "Dừng",
            resetText: "Đặt lại",
            lapText: "Vòng",
            hideText: "Giấu",
            backText: "Quay lại",
            undoText: "Hoàn tác",
            offText: "Tất",
            onText: "Bật",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        }),
        (oa.i18n.zh = {
            setText: "确定",
            cancelText: "取消",
            clearText: "明确",
            selectedText: "{count} 选",
            dateFormat: "yy年mm月d日",
            dayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
            dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
            dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"],
            dayText: "日",
            hourText: "时",
            minuteText: "分",
            monthNames: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月",
            ],
            monthNamesShort: [
                "一",
                "二",
                "三",
                "四",
                "五",
                "六",
                "七",
                "八",
                "九",
                "十",
                "十一",
                "十二",
            ],
            monthText: "月",
            secText: "秒",
            timeFormat: "HH:ii",
            yearText: "年",
            nowText: "当前",
            pmText: "下午",
            amText: "上午",
            yearSuffix: "年",
            monthSuffix: "月",
            daySuffix: "日",
            todayText: "今天",
            dateText: "日",
            timeText: "时间",
            closeText: "关闭",
            allDayText: "全天",
            noEventsText: "无事件",
            eventText: "活动",
            eventsText: "活动",
            moreEventsText: "他 {count} 件",
            fromText: "开始时间",
            toText: "结束时间",
            wholeText: "合计",
            fractionText: "分数",
            unitText: "单位",
            labels: ["年", "月", "日", "小时", "分钟", "秒", ""],
            labelsShort: ["年", "月", "日", "点", "分", "秒", ""],
            startText: "开始",
            stopText: "停止",
            resetText: "重置",
            lapText: "圈",
            hideText: "隐藏",
            backText: "返回",
            undoText: "复原",
            offText: "关闭",
            onText: "开启",
            decimalSeparator: ",",
            thousandsSeparator: " ",
        });
    var Fn = oa.themes;
    (Fn.frame.bootstrap = {
        disabledClass: "disabled",
        selectedClass: "btn-primary",
        selectedTabClass: "active",
        tabLink: !0,
        todayClass: "text-primary mbsc-cal-today",
        onMarkupInserted: function (e) {
            var t = Sa(e.target),
                a = Sa(".mbsc-cal-tabs", t);
            Sa(".mbsc-fr-popup", t).addClass("popover"),
                Sa(".mbsc-fr-w", t).addClass("popover-content"),
                Sa(".mbsc-fr-hdr", t).addClass("popover-title popover-header"),
                Sa(".mbsc-fr-arr-i", t).addClass("popover"),
                Sa(".mbsc-fr-arr", t).addClass("arrow"),
                Sa(".mbsc-fr-btn", t).addClass("btn btn-default btn-secondary"),
                Sa(".mbsc-fr-btn-s .mbsc-fr-btn", t)
                    .removeClass("btn-default btn-secondary")
                    .addClass("btn btn-primary"),
                a.addClass("nav nav-tabs"),
                a.find(".mbsc-cal-tab").addClass("nav-item"),
                a.find("a").addClass("nav-link"),
                a.find(".mbsc-cal-tab.active .nav-link").addClass("active"),
                Sa(".mbsc-cal-picker", t).addClass("popover"),
                Sa(".mbsc-range-btn", t).addClass(
                    "btn btn-sm btn-small btn-default"
                ),
                Sa(".mbsc-np-btn", t).addClass("btn btn-default"),
                Sa(".mbsc-sel-filter-cont", t).removeClass("mbsc-input"),
                Sa(".mbsc-sel-filter-input", t).addClass("form-control");
        },
        onTabChange: function (e, t) {
            Sa(".mbsc-cal-tabs .nav-link", t._markup).removeClass("active"),
                Sa(".mbsc-cal-tab.active .nav-link", t._markup).addClass(
                    "active"
                );
        },
        onPosition: function (e) {
            setTimeout(function () {
                Sa(
                    ".mbsc-fr-bubble-top, .mbsc-fr-bubble-top .mbsc-fr-arr-i",
                    e.target
                )
                    .removeClass("bottom bs-popover-bottom")
                    .addClass("top bs-popover-top"),
                    Sa(
                        ".mbsc-fr-bubble-bottom, .mbsc-fr-bubble-bottom .mbsc-fr-arr-i",
                        e.target
                    )
                        .removeClass("top bs-popover-top")
                        .addClass("bottom  bs-popover-bottom");
            }, 10);
        },
    }),
        (Fn.scroller.bootstrap = Da({}, Fn.frame.bootstrap, {
            dateDisplay: "Mddyy",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5 btn-light",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5 btn-light",
            selectedLineHeight: !0,
            onEventBubbleShow: function (e) {
                var t = Sa(e.eventList);
                Sa(".mbsc-cal-event-list", t).addClass("list-group"),
                    Sa(".mbsc-cal-event", t).addClass("list-group-item");
            },
        })),
        (Fn.navigation.bootstrap = {
            wrapperClass: "popover panel panel-default",
            groupClass: "btn-group",
            activeClass: "btn-primary",
            disabledClass: "disabled",
            itemClass: "btn btn-default",
        }),
        (Fn.form.bootstrap = {});
    var Hn = oa.themes;
    function In(e, t) {
        var a = wa(t, "X", !0),
            n = wa(t, "Y", !0),
            s = e[0],
            i = e.offset(),
            o = a - i.left,
            r = n - i.top,
            l = Math.max(o, s.offsetWidth - o),
            c = Math.max(r, s.offsetHeight - r),
            d = 2 * Math.sqrt(Math.pow(l, 2) + Math.pow(c, 2));
        On(Yn),
            (Yn = Sa('<span class="mbsc-ripple"></span>')
                .css({
                    backgroundColor: getComputedStyle(s).color,
                    width: d,
                    height: d,
                    top: n - i.top - d / 2,
                    left: a - i.left - d / 2,
                })
                .appendTo(e)),
            setTimeout(function () {
                Yn.addClass("mbsc-ripple-scaled mbsc-ripple-visible");
            }, 10);
    }
    function On(e) {
        setTimeout(function () {
            e &&
                (e.removeClass("mbsc-ripple-visible"),
                setTimeout(function () {
                    e.remove();
                }, 2e3));
        }, 100);
    }
    function Pn(e, a, n, s) {
        var i,
            o,
            r = e[0];
        function t(e) {
            var t = ha(r, e.target, a);
            t &&
                ca(e, t) &&
                ((i = wa(e, "X")),
                (o = wa(e, "Y")),
                (Ln = Sa(t)).hasClass(n) || Ln.hasClass(s)
                    ? (Ln = null)
                    : In(Ln, e));
        }
        function l(e) {
            ((Ln && 9 < Math.abs(wa(e, "X") - i)) ||
                9 < Math.abs(wa(e, "Y") - o)) &&
                (On(Yn), (Ln = null));
        }
        function c() {
            Ln &&
                (setTimeout(function () {
                    On(Yn);
                }, 100),
                (Ln = null));
        }
        r &&
            (r.__mbscRippleOff && r.__mbscRippleOff(),
            ma(r, "touchstart", t, { passive: !0 }),
            ma(r, "mousedown", t),
            ma(r, "touchmove", l, { passive: !0 }),
            ma(r, "mousemove", l),
            ma(r, "touchend", c),
            ma(r, "touchcancel", c),
            ma(r, "mouseleave", c),
            ma(r, "mouseup", c),
            (r.__mbscRippleOff = function () {
                ua(r, "touchstart", t, { passive: !0 }),
                    ua(r, "mousedown", t),
                    ua(r, "touchmove", l, { passive: !0 }),
                    ua(r, "mousemove", l),
                    ua(r, "touchend", c),
                    ua(r, "touchcancel", c),
                    ua(r, "mouseleave", c),
                    ua(r, "mouseup", c),
                    delete r.__mbscRippleOff;
            }));
    }
    (Hn.frame.ios = {
        display: "bottom",
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "ios-backspace",
        scroll3d: "wp" != e && ("android" != e || 7 < a),
    }),
        (Hn.scroller.ios = Da({}, Hn.frame.ios, {
            rows: 5,
            height: 34,
            minWidth: 55,
            selectedLineHeight: !0,
            selectedLineBorder: 1,
            showLabel: !1,
            useShortLabels: !0,
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            checkIcon: "ion-ios7-checkmark-empty",
            filterClearIcon: "ion-close-circled",
            dateDisplay: "MMdyy",
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
        })),
        (Hn.listview.ios = {
            leftArrowClass: "mbsc-ic-ion-ios7-arrow-back",
            rightArrowClass: "mbsc-ic-ion-ios7-arrow-forward",
        }),
        (Hn.form.ios = {});
    var Ln,
        Yn,
        zn = oa.themes;
    (zn.frame.material = {
        headerText: !1,
        btnWidth: !1,
        deleteIcon: "material-backspace",
        onMarkupReady: function (e) {
            Pn(
                Sa(e.target),
                ".mbsc-fr-btn-e",
                "mbsc-disabled",
                "mbsc-fr-btn-nhl"
            );
        },
    }),
        (zn.scroller.material = Da({}, zn.frame.material, {
            showLabel: !1,
            selectedLineBorder: 2,
            weekDays: "min",
            icon: { filled: "material-star", empty: "material-star-outline" },
            checkIcon: "material-check",
            btnPlusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-down",
            btnMinusClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-up",
            btnCalPrevClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-left",
            btnCalNextClass: "mbsc-ic mbsc-ic-material-keyboard-arrow-right",
        })),
        (zn.listview.material = {
            leftArrowClass: "mbsc-ic-material-keyboard-arrow-left",
            rightArrowClass: "mbsc-ic-material-keyboard-arrow-right",
            onItemActivate: function (e) {
                In(Sa(e.target), e.domEvent);
            },
            onItemDeactivate: function () {
                On(Yn);
            },
            onSlideStart: function (e) {
                Sa(".mbsc-ripple", e.target).remove();
            },
            onSortStart: function (e) {
                Sa(".mbsc-ripple", e.target).remove();
            },
        }),
        (zn.navigation.material = {
            onInit: function () {
                Pn(
                    Sa(this),
                    ".mbsc-ms-item.mbsc-btn-e",
                    "mbsc-disabled",
                    "mbsc-btn-nhl"
                );
            },
            onMarkupInit: function () {
                Sa(".mbsc-ripple", this).remove();
            },
            onDestroy: function () {
                this.__mbscRippleOff && this.__mbscRippleOff();
            },
        }),
        (zn.form.material = {
            addRipple: function (e, t) {
                In(e, t);
            },
            removeRipple: function () {
                On(Yn);
            },
        });
    var $n = oa.themes;
    ($n.frame.windows = {
        headerText: !1,
        deleteIcon: "backspace4",
        btnReverse: !0,
    }),
        ($n.scroller.windows = Da({}, $n.frame.windows, {
            rows: 6,
            minWidth: 88,
            height: 44,
            btnPlusClass: "mbsc-ic mbsc-ic-arrow-down5",
            btnMinusClass: "mbsc-ic mbsc-ic-arrow-up5",
            checkIcon: "material-check",
            dateDisplay: "MMdyy",
            showLabel: !1,
            showScrollArrows: !0,
            btnCalPrevClass: "mbsc-ic mbsc-ic-arrow-left5",
            btnCalNextClass: "mbsc-ic mbsc-ic-arrow-right5",
            dayNamesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            useShortLabels: !0,
        })),
        ($n.form.windows = {}),
        oa.customTheme("ios-dark", "ios"),
        oa.customTheme("material-dark", "material"),
        oa.customTheme("mobiscroll-dark", "mobiscroll"),
        oa.customTheme("windows-dark", "windows");
    var Rn = oa.themes,
        jn = "mobiscroll";
    return (
        "android" == e
            ? (jn = "material")
            : "ios" == e
            ? (jn = "ios")
            : "wp" == e && (jn = "windows"),
        Sa.each(Rn.frame, function (e, t) {
            if (jn && t.baseTheme == jn && e != jn + "-dark")
                return (oa.autoTheme = e), !1;
            e == jn && (oa.autoTheme = e);
        }),
        oa.customTheme("ios-gray", "ios"),
        oa.customTheme("material-indigo", "material"),
        oa.customTheme("mobiscroll-lime", "mobiscroll"),
        oa.customTheme("windows-yellow", "windows"),
        (oa.fw = "javascript"),
        oa
    );
});
