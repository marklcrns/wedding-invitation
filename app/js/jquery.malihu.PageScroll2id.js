/* == Page scroll to id == Version: 1.5.7, License: MIT License (MIT) */ ! function(e, t, a) {
    var l, n, s, i, o, r, c, u, h, g, f, d, p = "mPageScroll2id",
        _ = "mPS2id",
        C = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id",
        v = {
            scrollSpeed: 1e3,
            autoScrollSpeed: !0,
            scrollEasing: "easeInOutQuint",
            scrollingEasing: "easeOutQuint",
            pageEndSmoothScroll: !0,
            layout: "vertical",
            offset: 0,
            highlightSelector: !1,
            clickedClass: _ + "-clicked",
            targetClass: _ + "-target",
            highlightClass: _ + "-highlight",
            forceSingleHighlight: !1,
            keepHighlightUntilNext: !1,
            highlightByNextTarget: !1,
            disablePluginBelow: !1,
            clickEvents: !0,
            appendHash: !1,
            onStart: function() {},
            onComplete: function() {},
            defaultSelector: !1,
            live: !0,
            liveSelector: !1
        },
        m = 0,
        S = {
            init: function(r) {
                var r = e.extend(!0, {}, v, r);
                if (e(a).data(_, r), n = e(a).data(_), !this.selector) {
                    var c = "__" + _;
                    this.each(function() {
                        var t = e(this);
                        t.hasClass(c) || t.addClass(c)
                    }), this.selector = "." + c
                }
                n.liveSelector && (this.selector += "," + n.liveSelector), l = l ? l + "," + this.selector : this.selector, n.defaultSelector && ("object" == typeof e(l) && 0 !== e(l).length || (l = C)), n.clickEvents && e(a).undelegate("." + _).delegate(l, "click." + _, function(t) {
                    if (I._isDisabled.call(null)) return void I._removeClasses.call(null);
                    var a = e(this),
                        l = a.attr("href"),
                        n = a.prop("href");
                    l && -1 !== l.indexOf("#/") || (I._reset.call(null), g = a.data("ps2id-offset") || 0, I._isValid.call(null, l, n) && I._findTarget.call(null, l) && (t.preventDefault(), i = "selector", o = a, I._setClasses.call(null, !0), I._scrollTo.call(null)))
                }), e(t).unbind("." + _).bind("scroll." + _ + " resize." + _, function() {
                    if (I._isDisabled.call(null)) return void I._removeClasses.call(null);
                    var t = e("._" + _ + "-t");
                    t.each(function(a) {
                        var l = e(this),
                            n = l.attr("id"),
                            s = I._findHighlight.call(null, n);
                        I._setClasses.call(null, !1, l, s), a == t.length - 1 && I._extendClasses.call(null)
                    })
                }), s = !0, I._setup.call(null), I._live.call(null)
            },
            scrollTo: function(t, a) {
                if (I._isDisabled.call(null)) return void I._removeClasses.call(null);
                if (t && "undefined" != typeof t) {
                    I._isInit.call(null);
                    var l = {
                            layout: n.layout,
                            offset: n.offset,
                            clicked: !1
                        },
                        a = e.extend(!0, {}, l, a);
                    I._reset.call(null), u = a.layout, h = a.offset, t = -1 !== t.indexOf("#") ? t : "#" + t, I._isValid.call(null, t) && I._findTarget.call(null, t) && (i = "scrollTo", o = a.clicked, o && I._setClasses.call(null, !0), I._scrollTo.call(null))
                }
            },
            destroy: function() {
                e(t).unbind("." + _), e(a).undelegate("." + _).removeData(_), e("._" + _ + "-t").removeData(_), I._removeClasses.call(null, !0)
            }
        },
        I = {
            _isDisabled: function() {
                var e = t,
                    l = "inner",
                    s = n.disablePluginBelow instanceof Array ? [n.disablePluginBelow[0] || 0, n.disablePluginBelow[1] || 0] : [n.disablePluginBelow || 0, 0];
                return "innerWidth" in t || (l = "client", e = a.documentElement || a.body), e[l + "Width"] <= s[0] || e[l + "Height"] <= s[1]
            },
            _isValid: function(e, a) {
                if (e) {
                    a = a ? a : e;
                    var l = -1 !== a.indexOf("#/") ? a.split("#/")[0] : a.split("#")[0],
                        n = t.location.toString().split("#")[0];
                    return "#" !== e && -1 !== e.indexOf("#") && ("" === l || l === n)
                }
            },
            _setup: function() {
                var t = I._highlightSelector(),
                    a = 1,
                    l = 0;
                return e(t).each(function() {
                    var s = e(this),
                        i = s.attr("href"),
                        o = s.prop("href");
                    if (I._isValid.call(null, i, o)) {
                        var r = -1 !== i.indexOf("#/") ? i.split("#/")[1] : i.split("#")[1],
                            c = e("#" + r);
                        if (c.length > 0) {
                            n.highlightByNextTarget && c !== l && (l ? l.data(_, {
                                tn: c
                            }) : c.data(_, {
                                tn: "0"
                            }), l = c), c.hasClass("_" + _ + "-t") || c.addClass("_" + _ + "-t"), c.data(_, {
                                i: a
                            }), s.hasClass("_" + _ + "-h") || s.addClass("_" + _ + "-h");
                            var u = I._findHighlight.call(null, r);
                            I._setClasses.call(null, !1, c, u), m = a, a++, a == e(t).length && I._extendClasses.call(null)
                        }
                    }
                })
            },
            _highlightSelector: function() {
                return n.highlightSelector && "" !== n.highlightSelector ? n.highlightSelector : l
            },
            _findTarget: function(t) {
                var a = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.split("#")[1],
                    l = e("#" + a);
                if (l.length < 1 || "fixed" === l.css("position")) {
                    if ("top" !== a) return;
                    l = e("body")
                }
                return r = l, u || (u = n.layout), h = I._setOffset.call(null), c = [(l.offset().top - h[0]).toString(), (l.offset().left - h[1]).toString()], c[0] = c[0] < 0 ? 0 : c[0], c[1] = c[1] < 0 ? 0 : c[1], c
            },
            _setOffset: function() {
                h || (h = n.offset ? n.offset : 0), g && (h = g);
                var t, a, l, s;
                switch (typeof h) {
                    case "object":
                    case "string":
                        t = [h.y ? h.y : h, h.x ? h.x : h], a = [t[0] instanceof jQuery ? t[0] : e(t[0]), t[1] instanceof jQuery ? t[1] : e(t[1])], a[0].length > 0 ? (l = a[0].height(), "fixed" === a[0].css("position") && (l += a[0][0].offsetTop)) : l = !isNaN(parseFloat(t[0])) && isFinite(t[0]) ? parseInt(t[0]) : 0, a[1].length > 0 ? (s = a[1].width(), "fixed" === a[1].css("position") && (s += a[1][0].offsetLeft)) : s = !isNaN(parseFloat(t[1])) && isFinite(t[1]) ? parseInt(t[1]) : 0;
                        break;
                    case "function":
                        t = h.call(null), t instanceof Array ? (l = t[0], s = t[1]) : l = s = t;
                        break;
                    default:
                        l = s = parseInt(h)
                }
                return [l, s]
            },
            _findHighlight: function(a) {
                var l = t.location,
                    n = l.toString().split("#")[0],
                    s = l.pathname;
                return e("._" + _ + "-h[href='#" + a + "'],._" + _ + "-h[href='" + n + "#" + a + "'],._" + _ + "-h[href='" + s + "#" + a + "'],._" + _ + "-h[href='#/" + a + "'],._" + _ + "-h[href='" + n + "#/" + a + "'],._" + _ + "-h[href='" + s + "#/" + a + "']")
            },
            _setClasses: function(t, a, l) {
                var s = n.clickedClass,
                    i = n.targetClass,
                    r = n.highlightClass;
                t && s && "" !== s ? (e("." + s).removeClass(s), o.addClass(s)) : a && i && "" !== i && l && r && "" !== r && (I._currentTarget.call(null, a) ? (a.addClass(i), l.addClass(r)) : (!n.keepHighlightUntilNext || e("." + r).length > 1) && (a.removeClass(i), l.removeClass(r)))
            },
            _extendClasses: function() {
                var t = n.targetClass,
                    a = n.highlightClass,
                    l = e("." + t),
                    s = e("." + a),
                    i = t + "-first",
                    o = t + "-last",
                    r = a + "-first",
                    c = a + "-last";
                e("._" + _ + "-t").removeClass(i + " " + o), e("._" + _ + "-h").removeClass(r + " " + c), n.forceSingleHighlight ? n.keepHighlightUntilNext && l.length > 1 ? (l.slice(0, 1).removeClass(t), s.slice(0, 1).removeClass(a)) : (l.slice(1).removeClass(t), s.slice(1).removeClass(a)) : (l.slice(0, 1).addClass(i).end().slice(-1).addClass(o), s.slice(0, 1).addClass(r).end().slice(-1).addClass(c))
            },
            _removeClasses: function(t) {
                e("." + n.clickedClass).removeClass(n.clickedClass), e("." + n.targetClass).removeClass(n.targetClass + " " + n.targetClass + "-first " + n.targetClass + "-last"), e("." + n.highlightClass).removeClass(n.highlightClass + " " + n.highlightClass + "-first " + n.highlightClass + "-last"), t && (e("._" + _ + "-t").removeClass("_" + _ + "-t"), e("._" + _ + "-h").removeClass("_" + _ + "-h"))
            },
            _currentTarget: function(a) {
                var l = n["target_" + a.data(_).i],
                    s = a.data("ps2id-target"),
                    i = s && e(s)[0] ? e(s)[0].getBoundingClientRect() : a[0].getBoundingClientRect();
                if ("undefined" != typeof l) {
                    var o = a.offset().top,
                        r = a.offset().left,
                        c = l.from ? l.from + o : o,
                        u = l.to ? l.to + o : o,
                        h = l.fromX ? l.fromX + r : r,
                        g = l.toX ? l.toX + r : r;
                    return i.top >= u && i.top <= c && i.left >= g && i.left <= h
                }
                var f = e(t).height(),
                    d = e(t).width(),
                    p = s ? e(s).height() : a.height(),
                    C = s ? e(s).width() : a.width(),
                    v = 1 + p / f,
                    m = v,
                    S = f > p ? v * (f / p) : v,
                    I = 1 + C / d,
                    O = I,
                    M = d > C ? I * (d / C) : I,
                    b = [i.top <= f / m, i.bottom >= f / S, i.left <= d / O, i.right >= d / M];
                if (n.highlightByNextTarget) {
                    var y = a.data(_).tn;
                    if (y) {
                        var w = y[0].getBoundingClientRect();
                        "vertical" === n.layout ? b = [i.top <= f / 2, w.top > f / 2, 1, 1] : "horizontal" === n.layout && (b = [1, 1, i.left <= d / 2, w.left > d / 2])
                    }
                }
                return b[0] && b[1] && b[2] && b[3]
            },
            _scrollTo: function() {
                d = I._scrollSpeed.call(null), c = n.pageEndSmoothScroll ? I._pageEndSmoothScroll.call(null) : c;
                var a = e("html,body"),
                    l = n.autoScrollSpeed ? I._autoScrollSpeed.call(null) : d,
                    s = a.is(":animated") ? n.scrollingEasing : n.scrollEasing,
                    i = e(t).scrollTop(),
                    o = e(t).scrollLeft();
                switch (u) {
                    case "horizontal":
                        o != c[1] && (I._callbacks.call(null, "onStart"), a.stop().animate({
                            scrollLeft: c[1]
                        }, l, s).promise().then(function() {
                            I._callbacks.call(null, "onComplete")
                        }));
                        break;
                    case "auto":
                        if (i != c[0] || o != c[1])
                            if (I._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                                var r;
                                a.stop().animate({
                                    pageYOffset: c[0],
                                    pageXOffset: c[1]
                                }, {
                                    duration: l,
                                    easing: s,
                                    step: function(e, a) {
                                        "pageXOffset" == a.prop ? r = e : "pageYOffset" == a.prop && t.scrollTo(r, e)
                                    }
                                }).promise().then(function() {
                                    I._callbacks.call(null, "onComplete")
                                })
                            } else a.stop().animate({
                                scrollTop: c[0],
                                scrollLeft: c[1]
                            }, l, s).promise().then(function() {
                                I._callbacks.call(null, "onComplete")
                            });
                        break;
                    default:
                        i != c[0] && (I._callbacks.call(null, "onStart"), a.stop().animate({
                            scrollTop: c[0]
                        }, l, s).promise().then(function() {
                            I._callbacks.call(null, "onComplete")
                        }))
                }
            },
            _pageEndSmoothScroll: function() {
                var l = e(a).height(),
                    n = e(a).width(),
                    s = e(t).height(),
                    i = e(t).width();
                return [l - c[0] < s ? l - s : c[0], n - c[1] < i ? n - i : c[1]]
            },
            _scrollSpeed: function() {
                var t = n.scrollSpeed;
                return o && o.length && o.add(o.parent()).each(function() {
                    var a = e(this);
                    if (a.attr("class")) {
                        var l = a.attr("class").split(" ");
                        for (var n in l)
                            if (String(l[n]).match(/^ps2id-speed-\d+$/)) {
                                t = l[n].split("ps2id-speed-")[1];
                                break
                            }
                    }
                }), parseInt(t)
            },
            _autoScrollSpeed: function() {
                var l = e(t).scrollTop(),
                    n = e(t).scrollLeft(),
                    s = e(a).height(),
                    i = e(a).width(),
                    o = [d + d * Math.floor(Math.abs(c[0] - l) / s * 100) / 100, d + d * Math.floor(Math.abs(c[1] - n) / i * 100) / 100];
                return Math.max.apply(Math, o)
            },
            _callbacks: function(e) {
                if (n) switch (this[_] = {
                    trigger: i,
                    clicked: o,
                    target: r,
                    scrollTo: {
                        y: c[0],
                        x: c[1]
                    }
                }, e) {
                    case "onStart":
                        if (n.appendHash && t.history && t.history.pushState && o && o.length) {
                            var a = "#" + o.attr("href").split("#")[1];
                            a !== t.location.hash && history.pushState("", "", a)
                        }
                        n.onStart.call(null, this[_]);
                        break;
                    case "onComplete":
                        n.onComplete.call(null, this[_])
                }
            },
            _reset: function() {
                u = h = g = !1
            },
            _isInit: function() {
                s || S.init.apply(this)
            },
            _live: function() {
                f = setTimeout(function() {
                    n.live ? e(I._highlightSelector()).length !== m && I._setup.call(null) : f && clearTimeout(f), I._live.call(null)
                }, 1e3)
            },
            _easing: function() {
                function t(e) {
                    var t = 7.5625,
                        a = 2.75;
                    return 1 / a > e ? t * e * e : 2 / a > e ? t * (e -= 1.5 / a) * e + .75 : 2.5 / a > e ? t * (e -= 2.25 / a) * e + .9375 : t * (e -= 2.625 / a) * e + .984375
                }
                e.easing.easeInQuad = e.easing.easeInQuad || function(e) {
                    return e * e
                }, e.easing.easeOutQuad = e.easing.easeOutQuad || function(e) {
                    return 1 - (1 - e) * (1 - e)
                }, e.easing.easeInOutQuad = e.easing.easeInOutQuad || function(e) {
                    return .5 > e ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2
                }, e.easing.easeInCubic = e.easing.easeInCubic || function(e) {
                    return e * e * e
                }, e.easing.easeOutCubic = e.easing.easeOutCubic || function(e) {
                    return 1 - Math.pow(1 - e, 3)
                }, e.easing.easeInOutCubic = e.easing.easeInOutCubic || function(e) {
                    return .5 > e ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2
                }, e.easing.easeInQuart = e.easing.easeInQuart || function(e) {
                    return e * e * e * e
                }, e.easing.easeOutQuart = e.easing.easeOutQuart || function(e) {
                    return 1 - Math.pow(1 - e, 4)
                }, e.easing.easeInOutQuart = e.easing.easeInOutQuart || function(e) {
                    return .5 > e ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2
                }, e.easing.easeInQuint = e.easing.easeInQuint || function(e) {
                    return e * e * e * e * e
                }, e.easing.easeOutQuint = e.easing.easeOutQuint || function(e) {
                    return 1 - Math.pow(1 - e, 5)
                }, e.easing.easeInOutQuint = e.easing.easeInOutQuint || function(e) {
                    return .5 > e ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2
                }, e.easing.easeInExpo = e.easing.easeInExpo || function(e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * e - 10)
                }, e.easing.easeOutExpo = e.easing.easeOutExpo || function(e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
                }, e.easing.easeInOutExpo = e.easing.easeInOutExpo || function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2
                }, e.easing.easeInSine = e.easing.easeInSine || function(e) {
                    return 1 - Math.cos(e * Math.PI / 2)
                }, e.easing.easeOutSine = e.easing.easeOutSine || function(e) {
                    return Math.sin(e * Math.PI / 2)
                }, e.easing.easeInOutSine = e.easing.easeInOutSine || function(e) {
                    return -(Math.cos(Math.PI * e) - 1) / 2
                }, e.easing.easeInCirc = e.easing.easeInCirc || function(e) {
                    return 1 - Math.sqrt(1 - Math.pow(e, 2))
                }, e.easing.easeOutCirc = e.easing.easeOutCirc || function(e) {
                    return Math.sqrt(1 - Math.pow(e - 1, 2))
                }, e.easing.easeInOutCirc = e.easing.easeInOutCirc || function(e) {
                    return .5 > e ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2
                }, e.easing.easeInElastic = e.easing.easeInElastic || function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * (2 * Math.PI / 3))
                }, e.easing.easeOutElastic = e.easing.easeOutElastic || function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * (2 * Math.PI / 3)) + 1
                }, e.easing.easeInOutElastic = e.easing.easeInOutElastic || function(e) {
                    return 0 === e ? 0 : 1 === e ? 1 : .5 > e ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5))) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * (2 * Math.PI / 4.5)) / 2 + 1
                }, e.easing.easeInBack = e.easing.easeInBack || function(e) {
                    return 2.70158 * e * e * e - 1.70158 * e * e
                }, e.easing.easeOutBack = e.easing.easeOutBack || function(e) {
                    return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2)
                }, e.easing.easeInOutBack = e.easing.easeInOutBack || function(e) {
                    return .5 > e ? Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) + 2) / 2
                }, e.easing.easeInBounce = e.easing.easeInBounce || function(e) {
                    return 1 - t(1 - e)
                }, e.easing.easeOutBounce = e.easing.easeOutBounce || t, e.easing.easeInOutBounce = e.easing.easeInOutBounce || function(e) {
                    return .5 > e ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2
                }
            }
        };
    I._easing.call(), e.fn[p] = function(t) {
        return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : S.init.apply(this, arguments)
    }, e[p] = function(t) {
        return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : S.init.apply(this, arguments)
    }, e[p].defaults = v
}(jQuery, window, document);

