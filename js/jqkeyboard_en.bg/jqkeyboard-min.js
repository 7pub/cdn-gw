/* jqKeyboard | v1.0.2 | https://github.com/hawkgs/jqKeyboard#readme | MIT */
var jqKeyboard = jqKeyboard || {};
!(function(t, e) {
    "use strict";
    var a,
        n = {},
        i = {},
        s = {},
        o = {};
    a = {
        insertCharacter: function(t, e, a) {
            return t.slice(0, e.start) + a + t.slice(e.end);
        },
        backspaceStrManipulation: function(t, e, a) {
            return 0 === e.start && 0 === e.end ?
                t :
                t.slice(0, e.start - a) + t.slice(e.end);
        },
        getSelectedLangClass: function() {
            return "." + o.selectedLanguage + "-lang";
        },
        setCaretPosition: function(t, e) {
            var a;
            null !== t &&
                (t.createTextRange ?
                    ((a = t.createTextRange()).move("character", e), a.select()) :
                    t.selectionStart ?
                    (t.focus(), t.setSelectionRange(e, e)) :
                    t.focus());
        },
    };
    (n = {
        $$createBase: function() {
            var t,
                a,
                n = e("body");
            (this.$base = e("<div>").attr("id", "jq-keyboard")),
            (this.$langCont = e("<div>").attr("id", "jqk-lang-cont")),
            (this.$minBtn = e("<div>")
                .addClass("minimize-btn")
                .prop("title", "Minimize")),
            (this.$toggleBtn = e("<div>").attr("id", "jqk-toggle-btn")),
            o.options &&
                "dark" === o.options.icon &&
                this.$toggleBtn.addClass("dark"),
                this.$langCont.append(this.$minBtn),
                this.$base.append(this.$langCont),
                n.append(this.$toggleBtn),
                this.createLayout(),
                o.options && o.options.containment ?
                ((this.containment = e(o.options.containment)),
                    this.containment.append(this.$base)) :
                (n.append(this.$base),
                    (t = e(window).outerWidth() - this.$base.outerWidth()),
                    (a = e(window).outerHeight() - this.$base.outerHeight()),
                    (this.containment = [0, 0, t, a]),
                    this.maintainContainment());
        },
        maintainContainment: function() {
            var t;
            e(window).resize(function() {
                clearTimeout(t),
                    (t = setTimeout(function() {
                        var t = [
                            0,
                            0,
                            e(window).outerWidth() - n.$base.outerWidth(),
                            e(window).outerHeight() - n.$base.outerHeight(),
                        ];
                        n.$base.draggable("option", "containment", t);
                    }, 100));
            });
        },
        createLayout: function() {
            var e,
                a,
                n,
                i = t.layouts.length;
            for (n = 0; n < i && n < 3; n += 1)
                (a = t.layouts[n]),
                (e = this.createButtons(a, n)),
                this.createLangSwitchBtn(a.lang, n),
                this.$base.append(e);
        },
        createButtons: function(t, a) {
            var n,
                i,
                s,
                o,
                c,
                l = e("<div>").addClass(t.lang + "-lang");
            for (
                a > 0 && l.addClass("jqk-hide"), o = 0; o < t.layout.length; o += 1
            ) {
                for (
                    n = e("<div>").addClass("btn-row"), s = t.layout[o].split(" "), c = 0; c < s.length; c += 1
                )
                    (i = this.buildButtonFromString(s[c])), n.append(i);
                l.append(n);
            }
            return l;
        },
        buildButtonFromString: function(t) {
            var a = e("<button>").addClass("jqk-btn");
            return (
                1 === t.length ?
                a.addClass("normal").data("val", t).html(t) :
                3 === t.length ?
                a
                .addClass("shift-b")
                .data("val", t[0])
                .data("shift", t[2])
                .data("normal", t[0])
                .html(t[0]) :
                -1 !== t.indexOf("<<") &&
                -1 !== t.indexOf(">>") &&
                (a = this.createSpecialBtn(a, t)),
                a
            );
        },
        createSpecialBtn: function(t, e) {
            var a = e.replace("<<", "").replace(">>", "");
            switch (a) {
                case "space":
                    t.data("val", " ");
                    break;
                case "tab":
                    t.data("val", "\t");
                    break;
                case "enter":
                    t.data("val", "\n");
            }
            return t.addClass("special " + a).html("&nbsp;"), t;
        },
        createLangSwitchBtn: function(t, a) {
            var n = e("<button>")
                .addClass("jqk-lang-btn")
                .data("lang", t)
                .html(t.toUpperCase());
            0 === a && (n.addClass("selected"), (o.selectedLanguage = t)),
                this.$langCont.append(n);
        },
    }),
    (i = {
        SHIFT_CLASS: ".special.shift",
        CPSLCK_CLASS: ".special.capslock",
        areLangEventsLoaded: {},
        loadLanguageSwitcher: function() {
            e(".jqk-lang-btn").on("click", function() {
                var t = e(this),
                    n = t.data("lang"),
                    s = "." + n + "-lang",
                    c = a.getSelectedLangClass();
                i._resetCaretOfActiveElem(),
                    c !== s &&
                    (e(c).addClass("jqk-hide"),
                        e(s).removeClass("jqk-hide"),
                        e(".jqk-lang-btn.selected").removeClass("selected"),
                        t.addClass("selected"),
                        (o.selectedLanguage = n),
                        i.areLangEventsLoaded[o.selectedLanguage] ||
                        (i.loadCapsLockEvent(),
                            i.loadShiftEvent(),
                            (i.areLangEventsLoaded[o.selectedLanguage] = !0)));
            });
        },
        loadCapsLockEvent: function() {
            var t = a.getSelectedLangClass();
            this._onLocalButtonClick(i.CPSLCK_CLASS, function() {
                var a, n;
                i._resetCaretOfActiveElem(),
                    o.shift[o.selectedLanguage] ||
                    ((n = (a = e(this)).closest(t)),
                        o.capsLock[o.selectedLanguage] ?
                        (a.removeClass("selected"),
                            (o.capsLock[o.selectedLanguage] = !1)) :
                        (a.addClass("selected"),
                            (o.capsLock[o.selectedLanguage] = !0)),
                        i._traverseLetterButtons(n, o.capsLock[o.selectedLanguage]));
            });
        },
        loadShiftEvent: function() {
            var t = a.getSelectedLangClass();
            this._onLocalButtonClick(i.SHIFT_CLASS, function() {
                var a,
                    n = e(t),
                    s = n.find(i.SHIFT_CLASS),
                    c = n.find(i.CPSLCK_CLASS);
                i._resetCaretOfActiveElem(),
                    o.shift[o.selectedLanguage] ?
                    i._unshift() :
                    (o.capsLock[o.selectedLanguage] &&
                        (c.removeClass("selected"),
                            (o.capsLock[o.selectedLanguage] = !1)),
                        (a = e(this).closest(t)),
                        i._traverseInputButtons(a, !0, "shift"),
                        (o.shift[o.selectedLanguage] = !0),
                        s.addClass("selected"));
            });
        },
        loadBackspaceEvent: function() {
            e(".special.backspace").on("click", function() {
                i._onActiveElemTextManipulation(function(t, e) {
                    var n;
                    return (
                        (n = t.start === t.end ? 1 : 0), {
                            updatedContent: a.backspaceStrManipulation(e, t, n),
                            caretOffset: -n,
                        }
                    );
                });
            });
        },
        loadInputButtonEvent: function() {
            n.$base
                .find(".normal")
                .add(".shift-b")
                .add(".special.space")
                .add(".special.tab")
                .add(".special.enter")
                .on("click", function() {
                    var t = e(this).data("val");
                    i._onActiveElemTextManipulation(function(e, n) {
                            return {
                                updatedContent: a.insertCharacter(n, e, t),
                                caretOffset: 1,
                            };
                        }),
                        o.shift[o.selectedLanguage] && i._unshift();
                });
        },
        activeElementListener: function() {
            var t;
            (t =
                o.options && o.options.allowed ?
                o.options.allowed.join(", ") :
                'input [ type= "text"     ],' +
                'input [ type= "date"     ],' +
                'input [ type= "datetime" ],' +
                'input [ type= "datetime-local"],' +
                'input [ type= "email"    ],' +
                'input [ type= "password" ],' +
                'input [ type= "search"   ],' +
                'input [ type= "month"    ],' +
                'input [ type= "url"      ],' +
                'input [ type= "time"     ],' +
                'input [ type= "tel"      ],' +
                'input [ type= "week"     ],' +
                'input [ type= "number"   ],' +
                'textarea,'
            ),
            e(document).on("focus", t, function() {
                i.$activeElement = e(this);
            });
        },
        _onActiveElemTextManipulation: function(t) {
            var e, n, s, o;
            i.$activeElement &&
                ((n = i.$activeElement.val() || ""),
                    (s = t(
                        (o = {
                            start: (e = i.$activeElement[0]).selectionStart,
                            end: e.selectionEnd,
                        }),
                        n
                    )),
                    i.$activeElement.val(s.updatedContent),
                    a.setCaretPosition(e, o.start + s.caretOffset));
        },
        _resetCaretOfActiveElem: function() {
            this.$activeElement &&
                a.setCaretPosition(
                    this.$activeElement[0],
                    this.$activeElement[0].selectionStart
                );
        },
        _unshift: function() {
            var t = a.getSelectedLangClass(),
                n = e(a.getSelectedLangClass()).find(i.SHIFT_CLASS),
                s = n.closest(t);
            this._traverseInputButtons(s, !1, "normal"),
                (o.shift[o.selectedLanguage] = !1),
                n.removeClass("selected");
        },
        _onLocalButtonClick: function(t, e) {
            n.$base.find(a.getSelectedLangClass()).find(t).on("click", e);
        },
        _traverseLetterButtons: function(t, a) {
            t.find(".normal").each(function() {
                var t = e(this),
                    n = t.data("val");
                (n = a ? n.toUpperCase() : n.toLowerCase()), t.html(n).data("val", n);
            });
        },
        _traverseInputButtons: function(t, a, n) {
            this._traverseLetterButtons(t, a),
                t.find(".shift-b").each(function() {
                    var t = e(this),
                        a = t.data(n);
                    t.html(a).data("val", a);
                });
        },
        $$loadEvents: function() {
            this.activeElementListener(),
                this.loadLanguageSwitcher(),
                this.loadInputButtonEvent(),
                this.loadBackspaceEvent(),
                this.loadCapsLockEvent(),
                this.loadShiftEvent(),
                (this.areLangEventsLoaded[o.selectedLanguage] = !0);
        },
    }),
    (s = {
        attachDragToBase: function() {
            n.$base.draggable({
                containment: n.containment,
                cursor: "move",
                stop: function() {
                    e(this).css({ width: "auto", height: "auto" });
                },
            });
        },
        attachOnClickBtnEvent: function() {
            e(".jqk-btn")
                .on("mousedown", function() {
                    var t = e(this);
                    t.addClass("clicked"),
                        setTimeout(function() {
                            t.removeClass("clicked");
                        }, 500);
                })
                .on("mouseup", function() {
                    e(this).removeClass("clicked");
                });
        },
        minimizeKeyboard: function() {
            n.$minBtn.on("click", function() {
                n.$base.removeClass("show"), n.$toggleBtn.fadeIn();
            });
        },
        maximizeKeyboard: function() {
            n.$toggleBtn.on("click", function() {
                n.$base.addClass("show"), e(this).hide();
            });
        },
        $$load: function() {
            this.attachDragToBase(),
                this.attachOnClickBtnEvent(),
                this.minimizeKeyboard(),
                this.maximizeKeyboard();
        },
    }),
    (o = {
        isReadyToRun: function() {
            return t.layouts ?
                !this.isRunning ||
                (console.error(
                    "jqKeyboard: The library is already used/running in the current context/page."
                ), !1) :
                (console.error(
                    "jqKeyboard: The keyboard layout configuration file hasn't been loaded."
                ), !1);
        },
        init: function(t) {
            o.isReadyToRun() &&
                ((o.options = t),
                    (o.isRunning = !0),
                    (o.selectedLanguage = null),
                    (o.shift = {}),
                    (o.capsLock = {}),
                    n.$$createBase(),
                    i.$$loadEvents(),
                    s.$$load());
        },
    });
    t.init = o.init;
})(jqKeyboard, jQuery);