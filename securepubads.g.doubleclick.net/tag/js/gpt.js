(function(sttc) {
    var window = this;
    if (window.googletag && googletag.evalScripts) {
        googletag.evalScripts();
    }
    if (window.googletag && googletag._loaded_) return;
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        da = ca(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        q = {},
        fa = {},
        t = function(a, b, c) {
            if (!c || null != a) {
                c = fa[b];
                if (null == c) return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b]
            }
        },
        u = function(a, b, c) {
            if (b) a: {
                var d = a.split(".");a = 1 === d.length;
                var e = d[0],
                    f;!a && e in q ? f = q : f = da;
                for (e = 0; e < d.length - 1; e++) {
                    var g = d[e];
                    if (!(g in f)) break a;
                    f = f[g]
                }
                d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ba(q, d, {
                    configurable: !0,
                    writable: !0,
                    value: b
                }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = ea ? da.Symbol(d) : "$jscp$" + a + "$" + d), ba(f, fa[d], {
                    configurable: !0,
                    writable: !0,
                    value: b
                })))
            }
        };
    u("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.h = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.h
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    u("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, q.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ha(aa(this))
                }
            })
        }
        return a
    }, "es6");
    var ha = function(a) {
            a = {
                next: a
            };
            a[t(q.Symbol, "iterator")] = function() {
                return this
            };
            return a
        },
        ia = function(a) {
            return a.raw = a
        },
        v = function(a) {
            var b = "undefined" != typeof q.Symbol && t(q.Symbol, "iterator") && a[t(q.Symbol, "iterator")];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        w = function(a) {
            if (!(a instanceof Array)) {
                a = v(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ja = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a, b)
        },
        la = ea && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ja(d, e) && (a[e] = d[e])
            }
            return a
        };
    u("Object.assign", function(a) {
        return a || la
    }, "es6");
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        na;
    if (ea && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na,
        x = function(a, b) {
            a.prototype = ma(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Sa = b.prototype
        },
        sa = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    u("WeakMap", function(a) {
        function b() {}

        function c(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var d = "$jscomp_hidden_" + Math.random(),
            e = 0,
            f = function(g) {
                this.h = (e += Math.random() + 1).toString();
                if (g) {
                    g = v(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!ja(g, d)) {
                var k = new b;
                ba(g, d, {
                    value: k
                })
            }
            if (!ja(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.h] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && ja(g, d) ? g[d][this.h] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && ja(g, d) && ja(g[d], this.h)
        };
        f.prototype.delete = function(g) {
            return c(g) && ja(g, d) && ja(g[d], this.h) ? delete g[d][this.h] : !1
        };
        return f
    }, "es6");
    u("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(v([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x || "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new q.WeakMap,
            c = function(h) {
                this.i = {};
                this.h = f();
                this.size = 0;
                if (h) {
                    h = v(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.o ? l.o.value = k : (l.o = {
                next: this.h,
                C: this.h.C,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.o), this.h.C.next = l.o, this.h.C = l.o, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.o && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.o.C.next = h.o.next, h.o.next.C = h.o.C, h.o.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.i = {};
            this.h = this.h.C = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).o
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).o) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value, h.call(k, m[1], m[0], this)
        };
        c.prototype[t(q.Symbol, "iterator")] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var m = h.i[l];
                if (m && ja(h.i, l))
                    for (h = 0; h < m.length; h++) {
                        var r = m[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: m,
                            index: h,
                            o: r
                        }
                    }
                return {
                    id: l,
                    list: m,
                    index: -1,
                    o: void 0
                }
            },
            e = function(h, k) {
                var l = h.h;
                return ha(function() {
                    if (l) {
                        for (; l.head != h.h;) l = l.C;
                        for (; l.next != l.head;) return l = l.next, {
                            done: !1,
                            value: k(l)
                        };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.C = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var ta = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[t(q.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    u("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ta(this, function(b) {
                return b
            })
        }
    }, "es6");
    u("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof q.Symbol && t(q.Symbol, "iterator") && b[t(q.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    u("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ta(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    u("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(v([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.h = new q.Map;
            if (c) {
                c = v(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return t(this.h, "values").call(this.h)
        };
        b.prototype.keys = t(b.prototype, "values");
        b.prototype[t(q.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    var ua = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    u("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    u("String.prototype.repeat", function(a) {
        return a ? a : function(b) {
            var c = ua(this, null, "repeat");
            if (0 > b || 1342177279 < b) throw new RangeError("Invalid count value");
            b |= 0;
            for (var d = ""; b;)
                if (b & 1 && (d += c), b >>>= 1) c += c;
            return d
        }
    }, "es6");
    u("globalThis", function(a) {
        return a || da
    }, "es_2020");
    u("String.prototype.padStart", function(a) {
        return a ? a : function(b, c) {
            var d = ua(this, null, "padStart");
            b -= d.length;
            c = void 0 !== c ? String(c) : " ";
            return (0 < b && c ? t(c, "repeat").call(c, Math.ceil(b / c.length)).substring(0, b) : "") + d
        }
    }, "es8");
    u("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    u("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    u("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ua(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    var y = this || self,
        xa = function(a, b) {
            var c = va("CLOSURE_FLAGS");
            a = c && c[a];
            return null != a ? a : b
        },
        va = function(a) {
            a = a.split(".");
            for (var b = y, c = 0; c < a.length; c++)
                if (b = b[a[c]], null == b) return null;
            return b
        },
        ya = function(a, b) {
            a = a.split(".");
            var c = y;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var za = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ha = function(a) {
            if (!Aa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ba, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ca, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Da, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ea, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Fa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ga, "&#0;"));
            return a
        },
        Ba = /&/g,
        Ca = /</g,
        Da = />/g,
        Ea = /"/g,
        Fa = /'/g,
        Ga = /\x00/g,
        Aa = /[\x00&<>"']/,
        Ja = function(a, b) {
            var c = 0;
            a = za(String(a)).split(".");
            b = za(String(b)).split(".");
            for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                var f = a[e] || "",
                    g = b[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    c = Ia(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Ia(0 == f[2].length, 0 == g[2].length) || Ia(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == c)
            }
            return c
        },
        Ia = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var Ka = xa(610401301, !1),
        La = xa(516931134, xa(1, !0));

    function Ma() {
        var a = y.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Na, Oa = y.navigator;
    Na = Oa ? Oa.userAgentData || null : null;

    function Pa(a) {
        return Ka ? Na ? Na.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function z(a) {
        return -1 != Ma().indexOf(a)
    };

    function Ra() {
        return Ka ? !!Na && 0 < Na.brands.length : !1
    }

    function Sa() {
        return Ra() ? Pa("Chromium") : (z("Chrome") || z("CriOS")) && !(Ra() ? 0 : z("Edge")) || z("Silk")
    };
    var Ta = function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        },
        Ua = function(a, b) {
            return Array.prototype.filter.call(a, b, void 0)
        },
        Va = function(a, b) {
            return Array.prototype.map.call(a, b, void 0)
        };

    function Wa(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Xa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ya(a, b) {
        return 0 <= Array.prototype.indexOf.call(a, b, void 0)
    };
    var Za = function(a) {
        Za[" "](a);
        return a
    };
    Za[" "] = function() {};
    var $a = Ra() ? !1 : z("Trident") || z("MSIE");
    !z("Android") || Sa();
    Sa();
    z("Safari") && (Sa() || (Ra() ? 0 : z("Coast")) || (Ra() ? 0 : z("Opera")) || (Ra() ? 0 : z("Edge")) || (Ra() ? Pa("Microsoft Edge") : z("Edg/")) || Ra() && Pa("Opera"));
    var ab = {},
        bb = null,
        db = function(a) {
            var b = [];
            cb(a, function(c) {
                b.push(c)
            });
            return b
        },
        cb = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        m = bb[l];
                    if (null != m) return m;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            eb();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        eb = function() {
            if (!bb) {
                bb = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    ab[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === bb[f] && (bb[f] = e)
                    }
                }
            }
        };
    var fb = "undefined" !== typeof Uint8Array,
        gb = !$a && "function" === typeof btoa;
    var A = "function" === typeof q.Symbol && "symbol" === typeof(0, q.Symbol)() ? (0, q.Symbol)() : void 0;

    function hb(a, b) {
        if (A) return a[A] |= b;
        if (void 0 !== a.h) return a.h |= b;
        Object.defineProperties(a, {
            h: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    }

    function B(a) {
        var b;
        A ? b = a[A] : b = a.h;
        return null == b ? 0 : b
    }

    function C(a, b) {
        A ? a[A] = b : void 0 !== a.h ? a.h = b : Object.defineProperties(a, {
            h: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    }

    function ib(a) {
        hb(a, 1);
        return a
    }

    function jb(a) {
        hb(a, 16);
        return a
    }

    function kb(a, b) {
        C(b, (a | 0) & -51)
    }

    function lb(a, b) {
        C(b, (a | 18) & -41)
    };
    var mb = {};

    function nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ob, pb = Object.freeze(C([], 23));

    function qb(a) {
        if (B(a.l) & 2) throw Error();
    }

    function rb(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && nb(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    var D = !La;

    function sb(a) {
        if (null == a) return a;
        switch (typeof a) {
            case "string":
                return +a;
            case "number":
                return a
        }
    }

    function tb(a) {
        return a
    }

    function ub(a) {
        return a
    }

    function vb(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.S === mb) return a;
        if (d) return wb(a, c), new b(a)
    }

    function wb(a, b) {
        var c = B(a),
            d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && C(a, d)
    }
    var xb = "function" === typeof q.Symbol && "symbol" === typeof(0, q.Symbol)() ? (0, q.Symbol)() : "di";
    var yb = function(a) {
            var b = a.i + a.D;
            return a.u || (a.u = a.l[b] = {})
        },
        E = function(a, b, c) {
            return -1 === b ? null : b >= a.i ? a.u ? a.u[b] : void 0 : c && a.u && (c = a.u[b], null != c) ? c : a.l[b + a.D]
        },
        G = function(a, b, c, d) {
            qb(a);
            return F(a, b, c, d)
        },
        F = function(a, b, c, d) {
            a.j && (a.j = void 0);
            if (b >= a.i || d) return yb(a)[b] = c, a;
            a.l[b + a.D] = c;
            (c = a.u) && b in c && delete c[b];
            return a
        };

    function zb(a, b, c, d) {
        var e = E(a, b);
        Array.isArray(e) || (e = pb);
        var f = B(e);
        f & 1 || ib(e);
        if (d) f & 2 || hb(e, 18), c & 1 || Object.freeze(e);
        else {
            d = !(c & 2);
            var g = f & 2;
            c & 1 || !g ? d && f & 16 && !g && (a = e, A ? a[A] && (a[A] &= -17) : void 0 !== a.h && (a.h &= -17)) : (e = ib(Array.prototype.slice.call(e)), F(a, b, e))
        }
        return e
    }
    var Ab = function(a, b) {
        a = E(a, b);
        return H(null == a ? a : !!a, !1)
    };

    function Bb(a, b, c, d) {
        if (null == c) return G(a, b, pb);
        var e = B(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (var f = 0; f < c.length; f++) c[f] = d(c[f]);
            C(c, e | 5)
        }
        return G(a, b, c)
    }

    function I(a, b, c, d) {
        qb(a);
        c !== d ? F(a, b, c) : F(a, b, void 0, !1);
        return a
    }
    var Db = function(a, b, c, d) {
            qb(a);
            (c = Cb(a, c)) && c !== b && null != d && F(a, c, void 0, !1);
            return F(a, b, d)
        },
        J = function(a, b, c) {
            return Cb(a, b) === c ? c : -1
        },
        Cb = function(a, b) {
            for (var c = 0, d = 0; d < b.length; d++) {
                var e = b[d];
                null != E(a, e) && (0 !== c && F(a, c, void 0, !1), c = e)
            }
            return c
        },
        Eb = function(a, b, c, d) {
            var e = E(a, c, d);
            b = vb(e, b, B(a.l));
            b !== e && null != b && F(a, c, b, d);
            return b
        },
        L = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            b = Eb(a, b, c, d);
            if (null == b) return b;
            if (!(B(a.l) & 2)) {
                var e = Fb(b);
                e !== b && (b = e, F(a, c, b, d))
            }
            return b
        },
        M = function(a, b, c) {
            var d = B(a.l),
                e = !!(d & 2);
            var f = e ? 1 : 2;
            var g = !!(d & 2);
            D && !a.h && (a.h = {});
            var h = D ? a.h[c] : void 0,
                k = zb(a, c, 1 | (D ? 2 : 0), g);
            if (D ? h : k !== pb && B(k) & 4) {
                if (3 !== f && !g)
                    if (D)(g = Object.isFrozen(h), 1 !== f || g) ? 2 === f && g && (h = Array.prototype.slice.call(h), a.h[c] = h) : Object.freeze(h);
                    else if (g = Object.isFrozen(k), 1 === f) g || Object.freeze(k);
                else {
                    f = B(k);
                    var l = f & -19;
                    g && (k = Array.prototype.slice.call(k), f = 0, F(a, c, k));
                    f !== l && C(k, l)
                }
                f = D ? h : k
            } else {
                var m = k;
                h = D ? [] : void 0;
                k = !!(d & 2);
                g = !!(B(m) & 2);
                l = m;
                !k && g && (m = Array.prototype.slice.call(m));
                var r = d | (g ? 2 : 0);
                d = g;
                for (var p = 0, Q = 0; p < m.length; p++) {
                    var K = m[p];
                    if (D) {
                        var wa = b;
                        Array.isArray(K) ? (wb(K, r), K = new wa(K)) : K = void 0
                    } else K = vb(K, b, r);
                    void 0 !== K && (d || (d = !!(2 & B(K.l))), D ? h.push(K) : m[Q++] = K)
                }
                D ? a.h[c] = h : Q < p && (m.length = Q);
                r = B(m);
                b = r | 1;
                b = D ? b | 32 : b | 4;
                b = d ? b & -9 : b | 8;
                r != b && (d = m, Object.isFrozen(d) && (d = Array.prototype.slice.call(d)), C(d, b), m = d);
                l !== m && F(a, c, m);
                D && (k || 1 === f && g) && hb(h, 18);
                (k || 1 === f) && Object.freeze(D ? h : m);
                f = D ? h : m
            }
            a = D ? zb(a, c, 3, e) : f;
            if (!(e || B(a) & 8)) {
                for (e = 0; e < f.length; e++) c = f[e], h = Fb(c), c !== h && (f[e] = h, D && (a[e] = h.l));
                hb(a, 8)
            }
            return f
        },
        Gb = function(a, b, c) {
            qb(a);
            null == c && (c = void 0);
            return F(a, b, c)
        },
        Hb = function(a, b, c, d) {
            qb(a);
            null == d && (d = void 0);
            return Db(a, b, c, d)
        },
        Ib = function(a, b, c, d) {
            qb(a);
            var e = null == c ? pb : D ? ib([]) : c;
            if (null != c) {
                for (var f = !!c.length, g = 0; g < c.length; g++) {
                    var h = c[g];
                    f = f && !(B(h.l) & 2);
                    D && (e[g] = h.l)
                }
                f = 1 | (f ? 8 : 0) | (D ? 0 : 4);
                g = B(e);
                (g & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), C(e, g | f));
                D && (a.h || (a.h = {}), a.h[b] = c)
            } else D && a.h && (a.h[b] = void 0);
            return F(a, b, e, d)
        },
        Jb = function(a, b) {
            var c = !!(B(a.l) & 2),
                d = zb(a, b, 1, c),
                e = B(d);
            if (!(e & 4)) {
                Object.isFrozen(d) && (d = ib(d.slice()), F(a, b, d));
                for (var f = 0, g = 0; f < d.length; f++) {
                    var h = d[f];
                    null != h && (d[g++] = h)
                }
                g < f && (d.length = g);
                e |= 5;
                c && (e |= 18);
                C(d, e);
                e & 2 && Object.freeze(d)
            }!c && (e & 2 || Object.isFrozen(d)) && (d = Array.prototype.slice.call(d), hb(d, 5), F(a, b, d));
            return d
        };

    function H(a, b) {
        return null == a ? b : a
    }
    var Kb = function(a, b) {
            return H(E(a, b), "")
        },
        Lb = function(a, b) {
            var c = void 0 === c ? 0 : c;
            var d = E(a, b);
            var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
            null != e && e !== d && F(a, b, e);
            return H(e, c)
        },
        N = function(a, b) {
            return H(E(a, b), 0)
        };
    var Mb;

    function Nb(a, b) {
        Mb = b;
        a = new a(b);
        Mb = void 0;
        return a
    };

    function Ob(a, b) {
        return Pb(b)
    }

    function Pb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (B(a) & 128)) return a = Array.prototype.slice.call(a), rb(a), a
                    } else if (fb && null != a && a instanceof Uint8Array) {
                    if (gb) {
                        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                        a = btoa(b)
                    } else {
                        void 0 === b && (b = 0);
                        eb();
                        b = ab[b];
                        c = Array(Math.floor(a.length / 3));
                        d = b[64] || "";
                        for (var e = 0, f = 0; e < a.length - 2; e += 3) {
                            var g = a[e],
                                h = a[e + 1],
                                k = a[e + 2],
                                l = b[g >> 2];
                            g = b[(g & 3) << 4 | h >> 4];
                            h = b[(h & 15) << 2 | k >> 6];
                            k = b[k & 63];
                            c[f++] = l + g + h + k
                        }
                        l = 0;
                        k = d;
                        switch (a.length - e) {
                            case 2:
                                l = a[e + 1], k = b[(l & 15) << 2] || d;
                            case 1:
                                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
                        }
                        a = c.join("")
                    }
                    return a
                }
        }
        return a
    };

    function Qb(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && B(a) & 1 ? void 0 : f && B(a) & 2 ? a : Rb(a, b, c, void 0 !== d, e, f);
            else if (nb(a)) {
                var g = {},
                    h;
                for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Qb(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Rb(a, b, c, d, e, f) {
        var g = B(a);
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++) a[h] = Qb(a[h], b, c, d, e, f);
        c(g, a);
        return a
    }

    function Sb(a) {
        return a.S === mb ? a.toJSON() : Pb(a)
    }

    function Tb(a, b) {
        a & 128 && rb(b)
    };

    function Ub(a, b, c) {
        c = void 0 === c ? lb : c;
        if (null != a) {
            if (fb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = B(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return C(a, d | 18), a;
                a = Rb(a, Ub, d & 4 ? lb : c, !0, !1, !0);
                b = B(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            return a.S === mb ? Vb(a) : a
        }
    }

    function Wb(a, b, c, d, e, f, g) {
        (a = D ? a.h && a.h[c] : void 0) ? (d = B(a), d & 2 ? d = a : (f = Va(a, Vb), lb(d, f), Object.freeze(f), d = f), Ib(b, c, d, e)) : G(b, c, Ub(d, f, g), e)
    }

    function Vb(a) {
        if (B(a.l) & 2) return a;
        a = Xb(a, !0);
        hb(a.l, 18);
        return a
    }

    function Xb(a, b) {
        var c = a.l,
            d = jb([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.u;
        if (e) {
            d.length = c.length;
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (B(c) & 128) && rb(d);
        b = b || B(a.l) & 2 ? lb : kb;
        d = Nb(a.constructor, d);
        a.ia && (d.ia = a.ia.slice());
        f = !!(B(c) & 16);
        for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++) Wb(a, d, h - a.D, c[h], !1, f, b);
        if (e)
            for (var k in e) Wb(a, d, +k, e[k], !0, f, b);
        return d
    }

    function Fb(a) {
        if (!(B(a.l) & 2)) return a;
        var b = Xb(a, !1);
        b.j = a;
        return b
    };
    var O = function(a, b, c, d) {
        null == a && (a = Mb);
        Mb = void 0;
        var e = this.constructor.messageId;
        if (null == a) {
            a = e ? [e] : [];
            var f = 48;
            var g = !0;
            d && (f |= 128);
            C(a, f)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (e && e !== a[0]) throw Error();
            f = hb(a, 0) | 32;
            g = 0 !== (16 & f);
            if (d) {
                if (f |= 128, 0 < a.length) {
                    var h = a[a.length - 1];
                    if (nb(h) && "g" in h) {
                        delete h.g;
                        var k = !0,
                            l;
                        for (l in h) {
                            k = !1;
                            break
                        }
                        k && a.pop()
                    }
                }
            } else if (128 & f) throw Error();
            C(a, f)
        }
        this.D = e ? 0 : -1;
        this.h = void 0;
        this.l = a;
        a: {
            f = this.l.length;e = f - 1;
            if (f && (f = this.l[e], nb(f))) {
                this.u = f;
                this.i = e - this.D;
                break a
            }
            void 0 !== b && -1 < b ? (this.i = Math.max(b, e + 1 - this.D), this.u = void 0) : this.i = Number.MAX_VALUE
        }
        if (!d && this.u && "g" in this.u) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = g && !0;
            d = this.i;
            var m;
            for (g = 0; g < c.length; g++) e = c[g], e < d ? (e += this.D, (f = a[e]) ? Yb(f, b) : a[e] = pb) : (m || (m = yb(this)), (f = m[e]) ? Yb(f, b) : m[e] = pb)
        }
    };
    O.prototype.toJSON = function() {
        var a = this.l,
            b;
        ob ? b = a : b = Rb(a, Sb, Tb, void 0, !1, !1);
        return b
    };

    function Yb(a, b) {
        if (Array.isArray(a)) {
            var c = B(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && C(a, c | d)
        }
    }
    O.prototype.S = mb;
    var Zb = void 0;

    function $b() {
        var a = Zb;
        Zb = void 0;
        return a
    };

    function ac(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Nb(a, jb(b))
            }
            return b
        }
    };
    var dc = function(a, b) {
        this.i = a === bc && b || "";
        this.j = cc
    };
    dc.prototype.G = !0;
    dc.prototype.h = function() {
        return this.i
    };
    var ec = function(a) {
            return a instanceof dc && a.constructor === dc && a.j === cc ? a.i : "type_error:Const"
        },
        P = function(a) {
            return new dc(bc, a)
        },
        cc = {},
        bc = {};
    var fc = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var gc = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function hc(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    var ic = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var R = function(a, b) {
        this.i = b === jc ? a : ""
    };
    R.prototype.toString = function() {
        return this.i + ""
    };
    R.prototype.G = !0;
    R.prototype.h = function() {
        return this.i.toString()
    };
    var nc = function(a, b) {
            a = kc.exec(lc(a).toString());
            var c = a[3] || "";
            return new R(a[1] + mc("?", a[2] || "", b) + mc("#", c), jc)
        },
        lc = function(a) {
            return a instanceof R && a.constructor === R ? a.i : "type_error:TrustedResourceUrl"
        },
        kc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        oc = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b += ec(a[c]);
            return new R(b, jc)
        },
        jc = {},
        mc = function(a, b, c) {
            if (null == c) return b;
            if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
            for (var d in c)
                if (Object.prototype.hasOwnProperty.call(c, d)) {
                    var e = c[d];
                    e = Array.isArray(e) ? e : [e];
                    for (var f = 0; f < e.length; f++) {
                        var g = e[f];
                        null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                    }
                }
            return b
        };
    var S = function(a, b) {
        this.i = b === pc ? a : ""
    };
    S.prototype.toString = function() {
        return this.i.toString()
    };
    S.prototype.G = !0;
    S.prototype.h = function() {
        return this.i.toString()
    };
    var qc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        rc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        pc = {},
        sc = new S("about:invalid#zClosurez", pc);
    var tc = {},
        uc = function(a, b) {
            this.i = b === tc ? a : "";
            this.G = !0
        };
    uc.prototype.h = function() {
        return this.i.toString()
    };
    uc.prototype.toString = function() {
        return this.i.toString()
    };
    var vc = function(a) {
            return a instanceof uc && a.constructor === uc ? a.i : "type_error:SafeHtml"
        },
        wc = function(a) {
            return a instanceof uc ? a : new uc(Ha("object" == typeof a && a.G ? a.h() : String(a)), tc)
        },
        Ac = function(a, b) {
            var c = {
                    src: a
                },
                d = {};
            a = {};
            for (var e in c) Object.prototype.hasOwnProperty.call(c, e) && (a[e] = c[e]);
            for (var f in d) Object.prototype.hasOwnProperty.call(d, f) && (a[f] = d[f]);
            if (b)
                for (var g in b)
                    if (Object.prototype.hasOwnProperty.call(b, g)) {
                        e = g.toLowerCase();
                        if (e in c) throw Error("");
                        e in d && delete a[e];
                        a[g] = b[g]
                    }
            var h;
            b = "";
            if (a)
                for (k in a)
                    if (Object.prototype.hasOwnProperty.call(a, k)) {
                        if (!xc.test(k)) throw Error("");
                        c = a[k];
                        if (null != c) {
                            g = k;
                            if (c instanceof dc) c = ec(c);
                            else {
                                if ("style" == g.toLowerCase()) throw Error("");
                                if (/^on/i.test(g)) throw Error("");
                                if (g.toLowerCase() in yc)
                                    if (c instanceof R) c = lc(c).toString();
                                    else if (c instanceof S) c = c instanceof S && c.constructor === S ? c.i : "type_error:SafeUrl";
                                else if ("string" === typeof c) c instanceof S || (c = "object" == typeof c && c.G ? c.h() : String(c), rc.test(c) ? c = new S(c, pc) : (c = String(c), c = c.replace(/(%0A|%0D)/g, ""), c = c.match(qc) ? new S(c, pc) : null)), c = (c || sc).h();
                                else throw Error("");
                            }
                            c.G && (c = c.h());
                            g = g + '="' + Ha(String(c)) + '"';
                            b += " " + g
                        }
                    }
            var k = "<script" + b;
            null == h ? h = [] : Array.isArray(h) || (h = [h]);
            !0 === ic.script ? k += ">" : (h = zc(h), k += ">" + vc(h).toString() + "\x3c/script>");
            return new uc(k, tc)
        },
        Cc = function(a) {
            var b = wc(Bc),
                c = [],
                d = function(e) {
                    Array.isArray(e) ? e.forEach(d) : (e = wc(e), c.push(vc(e).toString()))
                };
            a.forEach(d);
            return new uc(c.join(vc(b).toString()), tc)
        },
        zc = function(a) {
            return Cc(Array.prototype.slice.call(arguments))
        },
        xc = /^[a-zA-Z0-9-]+$/,
        yc = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Bc = new uc(y.trustedTypes && y.trustedTypes.emptyHTML || "", tc);
    var Ec = function() {
            a: {
                var a = y.document;
                if (a.querySelector && (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Dc.test(a)) break a;a = ""
            }
            return a
        },
        Dc = /^[\w+/_-]+[=]{0,2}$/;
    var Fc = function() {
        return Ka && Na ? !Na.mobile && (z("iPad") || z("Android") || z("Silk")) : z("iPad") || z("Android") && !z("Mobile") || z("Silk")
    };
    var Gc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        Hc = function(a) {
            return a ? decodeURI(a) : a
        },
        Ic = /#|$/,
        Jc = function(a, b) {
            var c = a.search(Ic);
            a: {
                var d = 0;
                for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                    var f = a.charCodeAt(d - 1);
                    if (38 == f || 63 == f)
                        if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                    d += e + 1
                }
                d = -1
            }
            if (0 > d) return null;
            e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Kc(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };

    function Lc(a, b) {
        a.write(vc(b))
    };
    var Mc = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        Za(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        Nc = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? y : c;
            for (var d = 0; c && 40 > d++ && (!b && !Mc(c) || !a(c));) a: {
                try {
                    var e = c.parent;
                    if (e && e != c) {
                        c = e;
                        break a
                    }
                } catch (f) {}
                c = null
            }
        },
        Oc = function(a) {
            var b = a;
            Nc(function(c) {
                b = c;
                return !1
            });
            return b
        },
        Pc = function(a) {
            return Mc(a.top) ? a.top : null
        },
        Tc = function(a, b) {
            if (!Qc() && !Rc()) {
                var c = Math.random();
                if (c < b) return c = Sc(), a[Math.floor(c * a.length)]
            }
            return null
        },
        Sc = function() {
            if (!q.globalThis.crypto) return Math.random();
            try {
                var a = new Uint32Array(1);
                q.globalThis.crypto.getRandomValues(a);
                return a[0] / 65536 / 65536
            } catch (b) {
                return Math.random()
            }
        },
        Uc = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        },
        Vc = function(a) {
            var b = a.length;
            if (0 == b) return 0;
            for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
            return 0 < c ? c : 4294967296 + c
        },
        Rc = fc(function() {
            return Array.prototype.some.call(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Wc, void 0) || 1E-4 > Math.random()
        }),
        Qc = fc(function() {
            return Wc("MSIE")
        }),
        Wc = function(a) {
            return -1 != Ma().indexOf(a)
        },
        Xc = /^(-?[0-9.]{1,30})$/;

    function Yc(a) {
        if (!Xc.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    var Zc = function() {
            return /^true$/.test("false")
        },
        $c = fc(function() {
            return (Ka && Na ? Na.mobile : !Fc() && (z("iPod") || z("iPhone") || z("Android") || z("IEMobile"))) ? 2 : Fc() ? 1 : 0
        }),
        ad = function(a) {
            if ("number" !== typeof a.goog_pvsid) try {
                var b = Object,
                    c = b.defineProperty,
                    d = void 0;
                d = void 0 === d ? Math.random : d;
                var e = Math.floor(d() * Math.pow(2, 52));
                c.call(b, a, "goog_pvsid", {
                    value: e,
                    configurable: !1
                })
            } catch (f) {}
            return Number(a.goog_pvsid) || -1
        },
        bd = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function cd(a) {
        var b = sa.apply(1, arguments);
        if (0 === b.length) return new R(a[0], jc);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return new R(c.join(""), jc)
    };
    var dd = {
        Ia: 0,
        Ha: 1,
        Ea: 2,
        za: 3,
        Fa: 4,
        Aa: 5,
        Ga: 6,
        Ca: 7,
        Da: 8,
        ya: 9,
        Ba: 10
    };
    var ed = {
        Ka: 0,
        La: 1,
        Ja: 2
    };
    var fd = "a".charCodeAt(),
        gd = hc(dd),
        hd = hc(ed);
    var id = function(a) {
            if (/[^01]/.test(a)) throw Error("Input bitstring " + a + " is malformed!");
            this.i = a;
            this.h = 0
        },
        ld = function(a) {
            var b = T(a, 16);
            return !0 === !!T(a, 1) ? (a = jd(a), a.forEach(function(c) {
                if (c > b) throw Error("ID " + c + " is past MaxVendorId " + b + "!");
            }), a) : kd(a, b)
        },
        jd = function(a) {
            for (var b = T(a, 12), c = []; b--;) {
                var d = !0 === !!T(a, 1),
                    e = T(a, 16);
                if (d)
                    for (d = T(a, 16); e <= d; e++) c.push(e);
                else c.push(e)
            }
            c.sort(function(f, g) {
                return f - g
            });
            return c
        },
        kd = function(a, b, c) {
            for (var d = [], e = 0; e < b; e++)
                if (T(a, 1)) {
                    var f = e + 1;
                    if (c && -1 === c.indexOf(f)) throw Error("ID: " + f + " is outside of allowed values!");
                    d.push(f)
                }
            return d
        },
        T = function(a, b) {
            if (a.h + b > a.i.length) throw Error("Requested length " + b + " is past end of string.");
            var c = a.i.substring(a.h, a.h + b);
            a.h += b;
            return parseInt(c, 2)
        };
    var nd = function(a, b) {
            try {
                var c = db(a.split(".")[0]).map(function(e) {
                        return (n = e.toString(2), t(n, "padStart")).call(n, 8, "0")
                    }).join(""),
                    d = new id(c);
                c = {};
                c.tcString = a;
                c.gdprApplies = !0;
                d.h += 78;
                c.cmpId = T(d, 12);
                c.cmpVersion = T(d, 12);
                d.h += 30;
                c.tcfPolicyVersion = T(d, 6);
                c.isServiceSpecific = !!T(d, 1);
                c.useNonStandardStacks = !!T(d, 1);
                c.specialFeatureOptins = md(kd(d, 12, hd), hd);
                c.purpose = {
                    consents: md(kd(d, 24, gd), gd),
                    legitimateInterests: md(kd(d, 24, gd), gd)
                };
                c.purposeOneTreatment = !!T(d, 1);
                c.publisherCC = String.fromCharCode(fd + T(d, 6)) + String.fromCharCode(fd + T(d, 6));
                c.vendor = {
                    consents: md(ld(d), b),
                    legitimateInterests: md(ld(d), b)
                };
                return c
            } catch (e) {
                return null
            }
        },
        md = function(a, b) {
            var c = {};
            if (Array.isArray(b) && 0 !== b.length) {
                b = v(b);
                for (var d = b.next(); !d.done; d = b.next()) d = d.value, c[d] = -1 !== a.indexOf(d)
            } else
                for (a = v(a), d = a.next(); !d.done; d = a.next()) c[d.value] = !0;
            delete c[0];
            return c
        };

    function od(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.ka] = b.message.toJSON(), c)]
        })])
    };
    var pd = function(a, b) {
        if (q.globalThis.fetch) q.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(function() {});
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };
    var qd = function(a) {
        O.call(this, a)
    };
    x(qd, O);
    var rd = function(a, b) {
            return I(a, 1, b, 0)
        },
        sd = function(a, b) {
            return I(a, 2, b, 0)
        };
    var td = function(a) {
        O.call(this, a)
    };
    x(td, O);
    var ud = [1, 2];
    var wd = function(a) {
        O.call(this, a, -1, vd)
    };
    x(wd, O);
    var xd = function(a, b) {
            return Gb(a, 1, b)
        },
        yd = function(a, b) {
            return Ib(a, 2, b)
        },
        zd = function(a, b) {
            return Bb(a, 4, b, tb)
        },
        Ad = function(a, b) {
            return Ib(a, 5, b)
        },
        Bd = function(a, b) {
            return I(a, 6, b, 0)
        },
        vd = [2, 4, 5];
    var Dd = function(a) {
        O.call(this, a, -1, Cd)
    };
    x(Dd, O);
    var Cd = [5],
        Ed = [1, 2, 3, 4];
    var Gd = function(a) {
        O.call(this, a, -1, Fd)
    };
    x(Gd, O);
    var Fd = [2, 3];
    var Hd = function(a) {
        O.call(this, a)
    };
    x(Hd, O);
    Hd.prototype.getTagSessionCorrelator = function() {
        return H(E(this, 2), 0)
    };
    var Jd = function(a) {
            var b = new Hd;
            return Hb(b, 4, Id, a)
        },
        Id = [4, 5, 7];
    var Ld = function(a) {
        O.call(this, a, -1, Kd)
    };
    x(Ld, O);
    var Kd = [3];
    var Nd = function(a) {
        O.call(this, a, -1, Md)
    };
    x(Nd, O);
    var Md = [4, 5];
    var Pd = function(a) {
        O.call(this, a, -1, Od)
    };
    x(Pd, O);
    Pd.prototype.getTagSessionCorrelator = function() {
        return H(E(this, 1), 0)
    };
    var Od = [2];
    var Qd = function(a) {
        O.call(this, a)
    };
    x(Qd, O);
    var Rd = [4];

    function Sd(a) {
        a.ja.apply(a, w(sa.apply(1, arguments).map(function(b) {
            return {
                ka: 2,
                message: b
            }
        })))
    }

    function Td(a) {
        a.ja.apply(a, w(sa.apply(1, arguments).map(function(b) {
            return {
                ka: 4,
                message: b
            }
        })))
    };
    var Ud = function() {
        this.j = this.j;
        this.m = this.m
    };
    Ud.prototype.j = !1;
    Ud.prototype.T = function() {
        if (this.m)
            for (; this.m.length;) this.m.shift()()
    };
    var Vd = function(a, b, c, d, e) {
            this.F = a;
            this.A = b;
            this.I = c;
            this.j = d;
            this.m = e;
            this.h = [];
            this.i = null
        },
        Wd = function(a) {
            null !== a.i && (clearTimeout(a.i), a.i = null);
            if (a.h.length) {
                var b = od(a.h);
                a.A(a.F + "?e=1", b);
                a.h = []
            }
        };
    Vd.prototype.ja = function() {
        var a = sa.apply(0, arguments),
            b = this;
        this.m && 65536 <= od(this.h.concat(a)).length && Wd(this);
        this.h.push.apply(this.h, w(a));
        this.h.length >= this.j && Wd(this);
        this.h.length && null === this.i && (this.i = setTimeout(function() {
            Wd(b)
        }, this.I))
    };
    var Xd = function(a, b, c) {
        Vd.call(this, "https://pagead2.googlesyndication.com/pagead/ping", pd, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!q.globalThis.fetch)
    };
    x(Xd, Vd);
    var Yd = function(a) {
        this.h = a;
        this.defaultValue = !1
    };
    var Zd = new Yd(501898423),
        $d = new Yd(494337909),
        ae = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? 0 : b
        }(24),
        be = new function(a, b) {
            b = void 0 === b ? [] : b;
            this.h = a;
            this.defaultValue = b
        }(1934, ["A0VQgOQvA+kwCj319NCwgf8+syUgEQ8/LLpB8RxxlRC3AkJ9xx8IAvVuQ/dcwy0ok7sGKufLLu6WhsXbQR9/UwwAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A6kRo9zXJhOvsR4D/VeZ9CiApPAxnOGzBkW88d8eIt9ex2oOzlX+AoUk/BS50Y9Ysy2jwyHR49Mb7XwP+l9yygIAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3mbHZoS4VJtJ8j1aE8+Z9vaGf/oMV1eTNIWMrvGqWgNnOmvaxnRGliqKIZU2eiTzCj5Qpz8B1/UTTLuony5bAAAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="]),
        ce = new Yd(203);
    var de = function(a) {
        O.call(this, a)
    };
    x(de, O);
    var ee = function(a) {
        O.call(this, a)
    };
    x(ee, O);
    var ge = function(a) {
        O.call(this, a, -1, fe)
    };
    x(ge, O);
    var he = ac(ge),
        fe = [7];
    var ie = function(a) {
        this.h = a || {
            cookie: ""
        }
    };
    ie.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Qa;
            d = c.Ra || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.ua
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    ie.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = za(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    ie.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    ie.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = za(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            ua: 0,
            path: void 0,
            domain: void 0
        })
    };

    function je(a) {
        return (a = ke(a)) ? L(a, ee, 4) : null
    }

    function ke(a) {
        if (a = (new ie(a)).get("FCCDCF", ""))
            if (t(a, "startsWith").call(a, "%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        try {
            return b ? he(b) : null
        } catch (c) {
            return null
        }
    };
    hc(dd).map(function(a) {
        return Number(a)
    });
    hc(ed).map(function(a) {
        return Number(a)
    });
    var le = function(a) {
            this.h = a;
            this.i = null
        },
        ne = function(a) {
            a.__tcfapiPostMessageReady || me(new le(a))
        },
        me = function(a) {
            a.i = function(b) {
                var c = "string" == typeof b.data;
                try {
                    var d = c ? JSON.parse(b.data) : b.data
                } catch (f) {
                    return
                }
                var e = d.__tcfapiCall;
                !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.h.__tcfapi(e.command, e.version, function(f, g) {
                    var h = {};
                    h.__tcfapiReturn = "removeEventListener" === e.command ? {
                        success: f,
                        callId: e.callId
                    } : {
                        returnValue: f,
                        success: g,
                        callId: e.callId
                    };
                    f = c ? JSON.stringify(h) : h;
                    b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                    return f
                }, e.parameter)
            };
            a.h.addEventListener("message", a.i);
            a.h.__tcfapiPostMessageReady = !0
        };
    var oe = function(a, b) {
        var c = a.document,
            d = function() {
                if (!a.frames[b])
                    if (c.body) {
                        var e = bd("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    var pe = function(a) {
            this.h = a;
            var b;
            this.m = (b = (b = ke(a.document)) ? L(b, de, 5) || null : null) ? E(b, 2) : null;
            this.i = (b = je(a.document)) && null != E(b, 1) ? E(b, 1) : null;
            this.j = (a = je(a.document)) && null != E(a, 2) ? E(a, 2) : null
        },
        se = function(a) {
            a.__uspapi || a.frames.__uspapiLocator || (a = new pe(a), qe(a), re(a))
        },
        qe = function(a) {
            !a.m || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", oe(a.h, "__uspapiLocator"), ya("__uspapi", function() {
                return a.F.apply(a, w(sa.apply(0, arguments)))
            }))
        };
    pe.prototype.F = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.m
        }, !0)
    };
    var re = function(a) {
        !a.i || a.h.__tcfapi || a.h.frames.__tcfapiLocator || (a.h.__tcfapiManager = "fc", oe(a.h, "__tcfapiLocator"), a.h.__tcfapiEventListeners = a.h.__tcfapiEventListeners || [], ya("__tcfapi", function() {
            return a.A.apply(a, w(sa.apply(0, arguments)))
        }), ne(a.h))
    };
    pe.prototype.A = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("function" === typeof c)
            if (b && 2 !== b) c(null, !1);
            else switch (b = this.h.__tcfapiEventListeners, a) {
                case "getTCData":
                    !d || Array.isArray(d) && d.every(function(e) {
                        return "number" === typeof e
                    }) ? c(te(this, d, null), !0) : c(null, !1);
                    break;
                case "ping":
                    c({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.0",
                        cmpVersion: 1,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    a = b.push(c);
                    c(te(this, null, a - 1), !0);
                    break;
                case "removeEventListener":
                    b[d] ? (b[d] = null, c(!0)) : c(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    c(null, !1)
            }
    };
    var te = function(a, b, c) {
        if (!a.i) return null;
        b = nd(a.i, b);
        b.addtlConsent = null != a.j ? a.j : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    };
    var ue = function(a) {
        return "string" === typeof a
    };
    var ve = function(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var we = null,
        xe = function() {
            if (null === we) {
                we = "";
                try {
                    var a = "";
                    try {
                        a = y.top.location.hash
                    } catch (c) {
                        a = y.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        we = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return we
        };
    var ze = function(a) {
        O.call(this, a, -1, ye)
    };
    x(ze, O);
    var ye = [2, 8],
        Ae = [3, 4, 5],
        Be = [6, 7];

    function Ce(a) {
        return null != a ? !a : a
    }

    function De(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function Ee(a, b) {
        var c = M(a, ze, 2);
        if (!c.length) return Fe(a, b);
        a = N(a, 1);
        if (1 === a) return Ce(Ee(c[0], b));
        c = Va(c, function(d) {
            return function() {
                return Ee(d, b)
            }
        });
        switch (a) {
            case 2:
                return De(c, !1);
            case 3:
                return De(c, !0)
        }
    }

    function Fe(a, b) {
        var c = Cb(a, Ae);
        a: {
            switch (c) {
                case 3:
                    var d = N(a, J(a, Ae, 3));
                    break a;
                case 4:
                    d = N(a, J(a, Ae, 4));
                    break a;
                case 5:
                    d = N(a, J(a, Ae, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, w(Jb(a, 8)))
            } catch (f) {
                return
            }
            b = N(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = Kb(a, J(a, Be, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = Lb(a, J(a, Be, 6));
                        break a;
                    case 5:
                        a = Kb(a, J(a, Be, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ja(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return ue(a) && ue(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ja(String(e), a);
                    case 11:
                        return null != e && 1 === Ja(String(e), a)
                }
            }
        }
    }

    function Ge(a, b) {
        return !a || !(!b || !Ee(a, b))
    };
    var Ie = function(a) {
        O.call(this, a, -1, He)
    };
    x(Ie, O);
    var He = [4];
    var Je = function(a) {
        O.call(this, a)
    };
    x(Je, O);
    var Le = function(a) {
        O.call(this, a, -1, Ke)
    };
    x(Le, O);
    var Me = ac(Le),
        Ke = [5],
        Ne = [1, 2, 3, 6, 7];
    var Oe = function(a, b, c) {
            var d = void 0 === d ? new Xd(b) : d;
            this.A = a;
            this.m = c;
            this.i = d;
            this.h = [];
            this.j = 0 < a && Sc() < 1 / a
        },
        Qe = function(a, b, c, d, e, f) {
            if (a.j) {
                var g = sd(rd(new qd, b), c);
                b = Bd(yd(xd(Ad(zd(new wd, d), e), g), a.h.slice()), f);
                b = Jd(b);
                Td(a.i, Pe(a, b));
                if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                        return N(h, 1) === N(g, 1) && N(h, 2) === c
                    })) a.h.push(g), 100 < a.h.length && a.h.shift()
            }
        },
        Re = function(a, b, c, d) {
            if (a.j && a.m) {
                var e = new Gd;
                b = Ib(e, 2, b);
                c = Ib(b, 3, c);
                d && I(c, 1, d, 0);
                d = new Hd;
                d = Hb(d, 7, Id, c);
                Td(a.i, Pe(a, d))
            }
        },
        Pe = function(a, b) {
            b = I(b, 1, Date.now(), 0);
            var c = ad(window);
            b = I(b, 2, c, 0);
            return I(b, 6, a.A, 0)
        };
    var U = function(a) {
        var b = "P";
        if (a.P && a.hasOwnProperty(b)) return a.P;
        b = new a;
        return a.P = b
    };
    var Se = function() {
        var a = {};
        this.s = (a[3] = {}, a[4] = {}, a[5] = {}, a)
    };
    var Te = Zc();

    function Ue(a, b) {
        switch (b) {
            case 1:
                return N(a, J(a, Ne, 1));
            case 2:
                return N(a, J(a, Ne, 2));
            case 3:
                return N(a, J(a, Ne, 3));
            case 6:
                return N(a, J(a, Ne, 6));
            default:
                return null
        }
    }

    function Ve(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return Ab(a, 1);
            case 7:
                return Kb(a, 3);
            case 2:
                return Lb(a, 2);
            case 3:
                return Kb(a, 3);
            case 6:
                return Jb(a, 4);
            default:
                return null
        }
    }
    var We = fc(function() {
        if (!Te) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Xe(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        U(V).j[e] = null != (g = null == (f = U(V).j[e]) ? void 0 : f.add(b)) ? g : (new q.Set).add(b);
        e = We();
        if (null != e[b]) return e[b];
        b = Ye(d)[b];
        if (!b) return c;
        b = Me(JSON.stringify(b));
        b = Ze(b);
        a = Ve(b, a);
        return null != a ? a : c
    }

    function Ze(a) {
        var b = U(Se).s;
        if (b) {
            var c = Xa(M(a, Je, 5), function(f) {
                return Ge(L(f, ze, 1), b)
            });
            if (c) {
                var d;
                return null != (d = L(c, Ie, 2)) ? d : null
            }
        }
        var e;
        return null != (e = L(a, Ie, 4)) ? e : null
    }
    var V = function() {
        this.i = {};
        this.m = [];
        this.j = {};
        this.h = new q.Map
    };

    function $e(a, b, c) {
        return !!Xe(1, a, void 0 === b ? !1 : b, c)
    }

    function af(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Xe(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function bf(a, b, c) {
        b = void 0 === b ? "" : b;
        a = Xe(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function cf(a, b, c) {
        b = void 0 === b ? [] : b;
        a = Xe(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function Ye(a) {
        return U(V).i[a] || (U(V).i[a] = {})
    }

    function df(a, b) {
        var c = Ye(b);
        Uc(a, function(d, e) {
            return c[e] = d
        })
    }

    function ef(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ta(b, function(h) {
            var k = Ye(h);
            Ta(a, function(l) {
                var m = Cb(l, Ne),
                    r = Ue(l, m);
                if (r) {
                    var p, Q, K;
                    var wa = null != (K = null == (p = U(V).h.get(h)) ? void 0 : null == (Q = p.get(r)) ? void 0 : Q.slice(0)) ? K : [];
                    a: {
                        p = new Dd;
                        switch (m) {
                            case 1:
                                Db(p, 1, Ed, r);
                                break;
                            case 2:
                                Db(p, 2, Ed, r);
                                break;
                            case 3:
                                Db(p, 3, Ed, r);
                                break;
                            case 6:
                                Db(p, 4, Ed, r);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        Bb(p, 5, wa, tb);m = p
                    }
                    if (wa = m) {
                        var Qa;
                        wa = !(null == (Qa = U(V).j[h]) || !Qa.has(r))
                    }
                    wa && f.push(m);
                    if (Qa = m) {
                        var ka;
                        Qa = !(null == (ka = U(V).h.get(h)) || !ka.has(r))
                    }
                    Qa && g.push(m);
                    e || (ka = U(V), ka.h.has(h) || ka.h.set(h, new q.Map), ka.h.get(h).has(r) || ka.h.get(h).set(r, []), d && ka.h.get(h).get(r).push(d));
                    k[r] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && Re(c, f, g, null != d ? d : void 0)
    }

    function ff(a, b) {
        var c = Ye(b);
        Ta(a, function(d) {
            var e = Me(JSON.stringify(d)),
                f = Cb(e, Ne);
            (e = Ue(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function gf() {
        return Va(t(Object, "keys").call(Object, U(V).i), function(a) {
            return Number(a)
        })
    }

    function hf(a) {
        Ya(U(V).m, a) || df(Ye(4), a)
    };

    function W(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function X(a, b, c) {
        return b[a] || c
    }

    function jf(a) {
        W(5, $e, a);
        W(6, af, a);
        W(7, bf, a);
        W(8, cf, a);
        W(13, ff, a);
        W(15, hf, a)
    }

    function kf(a) {
        W(4, function(b) {
            U(Se).s = b
        }, a);
        W(9, function(b, c) {
            var d = U(Se);
            null == d.s[3][b] && (d.s[3][b] = c)
        }, a);
        W(10, function(b, c) {
            var d = U(Se);
            null == d.s[4][b] && (d.s[4][b] = c)
        }, a);
        W(11, function(b, c) {
            var d = U(Se);
            null == d.s[5][b] && (d.s[5][b] = c)
        }, a);
        W(14, function(b) {
            for (var c = U(Se), d = v([3, 4, 5]), e = d.next(); !e.done; e = d.next()) e = e.value, t(Object, "assign").call(Object, c.s[e], b[e])
        }, a)
    }

    function lf(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };
    var mf = function() {};
    mf.prototype.i = function() {};
    mf.prototype.h = function() {
        return []
    };
    var nf = function(a, b, c) {
        a.i = function(d) {
            X(2, b, function() {
                return []
            })(d, c, void 0)
        };
        a.h = function() {
            return X(3, b, function() {
                return []
            })(c)
        }
    };

    function of (a, b) {
        if (a.length && b.head) {
            a = v(a);
            for (var c = a.next(); !c.done; c = a.next())
                if ((c = c.value) && b.head) {
                    var d = bd("META");
                    b.head.appendChild(d);
                    d.httpEquiv = "origin-trial";
                    d.content = c
                }
        }
    };

    function pf(a, b) {
        try {
            var c = a.split(".");
            a = y;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }
    var qf = {},
        rf = {},
        sf = {},
        tf = {},
        uf = (tf[3] = (qf[8] = function(a) {
            try {
                return null != va(a)
            } catch (b) {}
        }, qf[9] = function(a) {
            try {
                var b = va(a)
            } catch (c) {
                return
            }
            if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
            return a
        }, qf[10] = function() {
            return window === window.top
        }, qf[6] = function(a) {
            return Ya(U(mf).h(), Number(a))
        }, qf[27] = function(a) {
            a = pf(a, "boolean");
            return void 0 !== a ? a : void 0
        }, qf[60] = function(a) {
            try {
                return !!y.document.querySelector(a)
            } catch (b) {}
        }, qf[69] = function(a) {
            var b = y.document;
            b = void 0 === b ? document : b;
            var c;
            return !(null == (c = b.featurePolicy) || !(n = c.features(), t(n, "includes")).call(n, a))
        }, qf[70] = function(a) {
            var b = y.document;
            b = void 0 === b ? document : b;
            var c;
            return !(null == (c = b.featurePolicy) || !(n = c.allowedFeatures(), t(n, "includes")).call(n, a))
        }, qf), tf[4] = (rf[3] = function() {
            return $c()
        }, rf[6] = function(a) {
            a = pf(a, "number");
            return void 0 !== a ? a : void 0
        }, rf), tf[5] = (sf[2] = function() {
            return window.location.href
        }, sf[3] = function() {
            try {
                return window.top.location.hash
            } catch (a) {
                return ""
            }
        }, sf[4] = function(a) {
            a = pf(a, "string");
            return void 0 !== a ? a : void 0
        }, sf), tf);

    function vf() {
        var a = void 0 === a ? y : a;
        return a.ggeac || (a.ggeac = {})
    };
    var xf = function(a) {
        O.call(this, a, -1, wf)
    };
    x(xf, O);
    xf.prototype.getId = function() {
        return H(E(this, 1), 0)
    };
    var wf = [2];
    var zf = function(a) {
        O.call(this, a, -1, yf)
    };
    x(zf, O);
    var yf = [2];
    var Bf = function(a) {
        O.call(this, a, -1, Af)
    };
    x(Bf, O);
    var Af = [2];
    var Cf = function(a) {
        O.call(this, a)
    };
    x(Cf, O);
    var Ef = function(a) {
        O.call(this, a, -1, Df)
    };
    x(Ef, O);
    var Df = [1, 4, 2, 3];
    var Ff = [12, 13, 20],
        Gf = function(a, b, c, d) {
            var e = this,
                f = void 0 === d ? {} : d,
                g = void 0 === f.O ? !1 : f.O;
            d = void 0 === f.wa ? [] : f.wa;
            f = void 0 === f.H ? {} : f.H;
            this.B = c;
            this.j = a.slice();
            this.m = {};
            this.O = g;
            this.H = f;
            a = {};
            this.h = (a[b] = [], a[4] = [], a);
            this.i = {};
            (b = xe()) && Ta(b.split(",") || [], function(h) {
                (h = Number(h)) && (e.i[h] = !0)
            });
            Ta(d, function(h) {
                e.i[h] = !0
            })
        },
        Kf = function(a, b, c) {
            var d = [],
                e = Hf(a.j, b),
                f;
            if (f = 9 !== b) a.m[b] ? f = !0 : (a.m[b] = !0, f = !1);
            if (f) return Qe(a.B, b, c, d, [], 4), d;
            if (!e.length) return Qe(a.B, b, c, d, [], 3), d;
            var g = Ya(Ff, b),
                h = [];
            Ta(e, function(k) {
                var l = new td;
                if (k = If(a, k, c, l)) 0 !== Cb(l, ud) && h.push(l), l = k.getId(), d.push(l), Jf(a, l, g ? 4 : c), (k = M(k, Le, 2)) && (g ? ef(k, gf(), a.B, l) : ef(k, [c], a.B, l))
            });
            Qe(a.B, b, c, d, h, 1);
            return d
        },
        Jf = function(a, b, c) {
            a.h[c] || (a.h[c] = []);
            a = a.h[c];
            Ya(a, b) || a.push(b)
        },
        Lf = function(a, b) {
            a.j.push.apply(a.j, w(Ua(Va(b, function(c) {
                return new Bf(c)
            }), function(c) {
                return !Ya(Ff, N(c, 1))
            })))
        },
        If = function(a, b, c, d) {
            var e = U(Se).s;
            if (!Ge(L(b, ze, 3), e)) return null;
            var f = M(b, xf, 2),
                g = N(b, 6);
            if (g) {
                Db(d, 1, ud, g);
                f = e[4];
                switch (c) {
                    case 2:
                        var h = f[8];
                        break;
                    case 1:
                        h = f[7]
                }
                c = void 0;
                if (h) try {
                    c = h(g), I(d, 3, c, 0)
                } catch (k) {}
                return (b = Mf(b, c)) ? Nf(a, [b], 1) : null
            }
            if (g = N(b, 10)) {
                Db(d, 2, ud, g);
                h = null;
                switch (c) {
                    case 1:
                        h = e[4][9];
                        break;
                    case 2:
                        h = e[4][10];
                        break;
                    default:
                        return null
                }
                c = h ? h(String(g)) : void 0;
                if (void 0 === c && 1 === N(b, 11)) return null;
                void 0 !== c && I(d, 3, c, 0);
                return (b = Mf(b, c)) ? Nf(a, [b], 1) : null
            }
            d = e ? Ua(f, function(k) {
                return Ge(L(k, ze, 3), e)
            }) : f;
            if (!d.length) return null;
            c = d.length * H(sb(E(b, 1)), 0);
            return (b = N(b, 4)) ? Of(a, b, c, d) : Nf(a, d, c / 1E3)
        },
        Of = function(a, b, c, d) {
            var e = null != a.H[b] ? a.H[b] : 1E3;
            if (0 >= e) return null;
            d = Nf(a, d, c / e);
            a.H[b] = d ? 0 : e - c;
            return d
        },
        Nf = function(a, b, c) {
            var d = a.i,
                e = Wa(b, function(f) {
                    return !!d[f.getId()]
                });
            return e ? e : a.O ? null : Tc(b, c)
        },
        Pf = function(a, b) {
            W(1, function(c) {
                a.i[c] = !0
            }, b);
            W(2, function(c, d) {
                return Kf(a, c, d)
            }, b);
            W(3, function(c) {
                return (a.h[c] || []).concat(a.h[4])
            }, b);
            W(12, function(c) {
                return void Lf(a, c)
            }, b);
            W(16, function(c, d) {
                return void Jf(a, c, d)
            }, b)
        };

    function Hf(a, b) {
        return (a = Wa(a, function(c) {
            return N(c, 1) === b
        })) && M(a, zf, 2) || []
    }

    function Mf(a, b) {
        var c = M(a, xf, 2),
            d = c.length,
            e = H(sb(E(a, 8)), 0);
        a = d * H(sb(E(a, 1)), 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * Sc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = U(Se).s;
        return !c || e && !Ge(L(c, ze, 3), e) ? null : c
    };
    var Qf = function() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.A = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    };

    function Rf(a) {
        return U(Qf).h(a.h, a.defaultValue)
    };
    var Sf = function() {
            this.h = function() {}
        },
        Tf = function(a, b) {
            a.h = X(14, b, function() {})
        };

    function Uf(a) {
        U(Sf).h(a)
    };
    var Vf, Wf, Xf, Yf, Zf, $f;

    function ag(a) {
        var b = a.oa,
            c = a.s,
            d = a.Ma,
            e = void 0 === a.la ? vf() : a.la,
            f = void 0 === a.ga ? 0 : a.ga;
        a = void 0 === a.B ? new Oe(null != (Yf = null == (Vf = L(b, Cf, 5)) ? void 0 : H(E(Vf, 2), 0)) ? Yf : 0, null != (Zf = null == (Wf = L(b, Cf, 5)) ? void 0 : H(E(Wf, 4), 0)) ? Zf : 0, null != ($f = null == (Xf = L(b, Cf, 5)) ? void 0 : Ab(Xf, 3)) ? $f : !1) : a.B;
        e.hasOwnProperty("init-done") ? (X(12, e, function() {})(Va(M(b, Bf, 2), function(g) {
            return g.toJSON()
        })), X(13, e, function() {})(Va(M(b, Le, 1), function(g) {
            return g.toJSON()
        }), f), c && X(14, e, function() {})(c), bg(f, e)) : (Pf(new Gf(M(b, Bf, 2), f, a, d), e), jf(e), kf(e), lf(e), bg(f, e), ef(M(b, Le, 1), [f], a, void 0, !0), Te = Te || !(!d || !d.Na), Uf(uf), c && Uf(c))
    }

    function bg(a, b) {
        var c = b = void 0 === b ? vf() : b;
        nf(U(mf), c, a);
        cg(b, a);
        a = b;
        Tf(U(Sf), a);
        U(Qf).m()
    }

    function cg(a, b) {
        var c = U(Qf);
        c.h = function(d, e) {
            return X(5, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return X(6, a, function() {
                return 0
            })(d, e, b)
        };
        c.A = function(d, e) {
            return X(7, a, function() {
                return ""
            })(d, e, b)
        };
        c.j = function(d, e) {
            return X(8, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            X(15, a, function() {})(b)
        }
    };
    var dg = ia(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]),
        eg = function() {
            var a = void 0 === a ? "jserror" : a;
            var b = void 0 === b ? .01 : b;
            var c = void 0 === c ? cd(dg) : c;
            this.j = a;
            this.i = b;
            this.h = c
        };

    function fg(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = bd("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            gc(e, "load", f);
            gc(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var hg = function(a) {
            var b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=gpt_inv_ver";
            Uc(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            gg(c, b)
        },
        gg = function(a, b) {
            var c = window;
            b = void 0 === b ? !1 : b;
            var d = void 0 === d ? !1 : d;
            c.fetch ? (b = {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }, d && (b.mode = "cors", b.headers = {
                "Attribution-Reporting-Eligible": "event-source"
            }), c.fetch(a, b)) : fg(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var ig = P("gpt/pubads_impl_"),
        jg = P("pagead/managed/js/gpt/");

    function kg(a) {
        a = void 0 === a ? y : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var lg = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        mg = function(a, b) {
            var c = kg(b);
            c && lg({
                label: a,
                type: 9,
                value: c
            }, b)
        },
        ng = function(a, b, c) {
            var d = !1;
            d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = kg(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && lg(t(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (kg() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        },
        og = function(a, b) {
            return ng(a, b, function(c, d) {
                var e = new eg;
                var f = void 0 === f ? e.i : f;
                var g = void 0 === g ? e.j : g;
                Math.random() > f || (d.error && d.meta && d.id || (d = new ve(d, {
                    context: c,
                    id: g
                })), y.google_js_errors = y.google_js_errors || [], y.google_js_errors.push(d), y.error_rep_loaded || (f = y.document, c = bd("SCRIPT", f), c.src = lc(e.h), Kc(c), (e = f.getElementsByTagName("script")[0]) && e.parentNode && e.parentNode.insertBefore(c, e), y.error_rep_loaded = !0))
            })
        };

    function Y(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function pg(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function qg() {
        var a = new q.Set;
        var b = void 0 === b ? window : b;
        b = b.googletag;
        b = (null == b ? 0 : b.apiReady) ? b : void 0;
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = v(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function rg(a) {
        a = a.id;
        return null != a && (qg().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
    }

    function sg(a, b, c) {
        if (!a.sources) return !1;
        switch (tg(a)) {
            case 2:
                var d = ug(a);
                if (d) return c.some(function(f) {
                    return vg(d, f)
                });
                break;
            case 1:
                var e = wg(a);
                if (e) return b.some(function(f) {
                    return vg(e, f)
                })
        }
        return !1
    }

    function tg(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function wg(a) {
        return xg(a, function(b) {
            return b.currentRect
        })
    }

    function ug(a) {
        return xg(a, function(b) {
            return b.previousRect
        })
    }

    function xg(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function vg(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    var yg = function() {
            Ud.call(this);
            this.i = this.h = this.L = this.K = this.I = 0;
            this.ca = this.Z = Number.NEGATIVE_INFINITY;
            this.V = this.X = this.Y = this.aa = this.fa = this.A = this.ea = this.N = 0;
            this.W = !1;
            this.M = this.J = this.F = 0;
            this.B = null;
            this.ba = !1;
            this.U = function() {};
            var a = document.querySelector("[data-google-query-id]");
            this.da = a ? a.getAttribute("data-google-query-id") : null
        },
        zg, Ag;
    x(yg, Ud);
    var Dg = function() {
            var a = new yg;
            if (Rf(ce)) {
                var b = window;
                if (!b.google_plmetrics && window.PerformanceObserver) {
                    b.google_plmetrics = !0;
                    b = v(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                    for (var c = b.next(); !c.done; c = b.next()) c = c.value, Bg(a).observe({
                        type: c,
                        buffered: !0
                    });
                    Cg(a)
                }
            }
        },
        Bg = function(a) {
            a.B || (a.B = new PerformanceObserver(og(640, function(b) {
                var c = zg !== window.scrollX || Ag !== window.scrollY ? [] : Eg,
                    d = Fg();
                b = v(b.getEntries());
                for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                    case "layout-shift":
                        var f = a;
                        if (!e.hadRecentInput) {
                            f.I += Number(e.value);
                            Number(e.value) > f.K && (f.K = Number(e.value));
                            f.L += 1;
                            var g = sg(e, c, d);
                            g && (f.A += e.value, f.aa++);
                            if (5E3 < e.startTime - f.Z || 1E3 < e.startTime - f.ca) f.Z = e.startTime, f.h = 0, f.i = 0;
                            f.ca = e.startTime;
                            f.h += e.value;
                            g && (f.i += e.value);
                            f.h > f.N && (f.N = f.h, f.fa = f.i, f.ea = e.startTime + e.duration)
                        }
                        break;
                    case "largest-contentful-paint":
                        a.Y = Math.floor(e.renderTime || e.loadTime);
                        a.X = e.size;
                        break;
                    case "first-input":
                        a.V = Number((e.processingStart - e.startTime).toFixed(3));
                        a.W = !0;
                        break;
                    case "longtask":
                        e = Math.max(0, e.duration - 50), a.F += e, a.J = Math.max(a.J, e), a.M += 1
                }
            })));
            return a.B
        },
        Cg = function(a) {
            var b = og(641, function() {
                    var d = document;
                    2 === (d.prerendering ? 3 : {
                        visible: 1,
                        hidden: 2,
                        prerender: 3,
                        preview: 4,
                        unloaded: 5
                    }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Gg(a)
                }),
                c = og(641, function() {
                    return void Gg(a)
                });
            document.addEventListener("visibilitychange", b);
            document.addEventListener("pagehide", c);
            a.U = function() {
                document.removeEventListener("visibilitychange", b);
                document.removeEventListener("pagehide", c);
                Bg(a).disconnect()
            }
        };
    yg.prototype.T = function() {
        Ud.prototype.T.call(this);
        this.U()
    };
    var Gg = function(a) {
            if (!a.ba) {
                a.ba = !0;
                Bg(a).takeRecords();
                var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
                window.LayoutShift && (b += pg("cls", a.I), b += pg("mls", a.K), b += Y("nls", a.L), window.LayoutShiftAttribution && (b += pg("cas", a.A), b += Y("nas", a.aa), b += pg("was", a.fa)), b += pg("wls", a.N), b += pg("tls", a.ea));
                window.LargestContentfulPaint && (b += Y("lcp", a.Y), b += Y("lcps", a.X));
                window.PerformanceEventTiming && a.W && (b += Y("fid", a.V));
                window.PerformanceLongTaskTiming && (b += Y("cbt", a.F), b += Y("mbt", a.J), b += Y("nlt", a.M));
                for (var c = 0, d = v(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) rg(e.value) && c++;
                b += Y("nif", c);
                c = window.google_unique_id;
                b += Y("ifi", "number" === typeof c ? c : 0);
                c = U(mf).h();
                b += "&eid=" + encodeURIComponent(c.join());
                b += "&top=" + (y === y.top ? 1 : 0);
                b += a.da ? "&qqid=" + encodeURIComponent(a.da) : Y("pvsid", ad(y));
                window.googletag && (b += "&gpt=1");
                window.fetch(b, {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                });
                a.j || (a.j = !0, a.T())
            }
        },
        Fg = function() {
            var a = t(Array, "from").call(Array, document.getElementsByTagName("iframe")).filter(rg),
                b = [].concat(w(qg())).map(function(c) {
                    return document.getElementById(c)
                }).filter(function(c) {
                    return null !== c
                });
            zg = window.scrollX;
            Ag = window.scrollY;
            return Eg = [].concat(w(a), w(b)).map(function(c) {
                return c.getBoundingClientRect()
            })
        },
        Eg = [];
    var Hg = function(a) {
        O.call(this, a)
    };
    x(Hg, O);
    Hg.prototype.getVersion = function() {
        return Kb(this, 2)
    };
    var Jg = function(a) {
        O.call(this, a, -1, Ig)
    };
    x(Jg, O);
    var Kg = function(a, b) {
            return G(a, 2, b)
        },
        Lg = function(a, b) {
            return G(a, 3, b)
        },
        Mg = function(a, b) {
            return G(a, 4, b)
        },
        Ng = function(a, b) {
            return G(a, 5, b)
        },
        Og = function(a, b) {
            return G(a, 9, b)
        },
        Pg = function(a, b) {
            return Ib(a, 10, b)
        },
        Qg = function(a, b) {
            return G(a, 11, b)
        },
        Rg = function(a, b) {
            return G(a, 1, b)
        },
        Sg = function(a, b) {
            return G(a, 7, b)
        },
        Ig = [10, 6];
    var Tg = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Ug(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Vg(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function Wg(a) {
        if (!Vg(a)) return null;
        var b = Ug(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(Tg).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function Xg(a) {
        var b;
        return Qg(Pg(Ng(Kg(Rg(Mg(Sg(Og(Lg(new Jg, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new Hg;
            d = G(d, 1, c.brand);
            return G(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function Yg(a) {
        var b, c;
        return null != (c = null == (b = Wg(a)) ? void 0 : b.then(function(d) {
            return Xg(d)
        })) ? c : null
    };
    var Z = {},
        Zg = (Z[23] = .001, Z[253] = !1, Z[246] = [], Z[150] = "", Z[221] = Zc(), Z[36] = Zc(), Z[172] = null, Z[260] = void 0, Z[251] = null, Z),
        $g = function() {
            this.h = !1
        };

    function ah(a) {
        U($g).h = !0;
        return Zg[a]
    }

    function bh(a, b) {
        U($g).h = !0;
        Zg[a] = b
    };
    var ch = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;

    function dh(a) {
        var b = a.ha,
            c = a.sa,
            d = a.ra,
            e = a.na,
            f = b ? !ch.test(b.src) : !0;
        a = {};
        var g = {},
            h = {};
        return h[3] = (a[3] = function() {
            return !f
        }, a[59] = function() {
            var k = sa.apply(0, arguments),
                l = t(k, "includes"),
                m = String,
                r;
            var p = void 0 === p ? window : p;
            var Q;
            p = null != (Q = null == (r = Hc(p.location.href.match(Gc)[3] || null)) ? void 0 : r.split(".")) ? Q : [];
            r = 2 > p.length ? null : "uk" === p[p.length - 1] ? 3 > p.length ? null : Vc(p.splice(p.length - 3).join(".")) : Vc(p.splice(p.length - 2).join("."));
            return l.call(k, m(r))
        }, a[61] = function() {
            return d
        }, a[63] = function() {
            return d || ".google.ch" === ah(150)
        }, a), h[4] = (g[1] = function() {
            return e
        }, g[4] = function() {
            return Yc("0") || 0
        }, g[12] = function() {
            if (b) {
                var k = RegExp("[?&]gmeid=([^&]*)").exec(b.src);
                var l;
                k = k ? null != (l = Yc(k[1])) ? l : -1 : -1
            } else k = -1;
            return k
        }, g[13] = function() {
            return c || 0
        }, g), h[5] = {}, h
    };

    function eh(a, b) {
        var c = new Ef(ah(246));
        if (!M(c, Le, 1).length && M(a, Le, 1).length) {
            var d = M(a, Le, 1);
            Ib(c, 1, d)
        }!M(c, Bf, 2).length && M(a, Bf, 2).length && (d = M(a, Bf, 2), Ib(c, 2, d));
        void 0 === Eb(c, Cf, 5, !1) && void 0 !== Eb(a, Cf, 5, !1) && (a = L(a, Cf, 5), Gb(c, 5, a));
        ag({
            oa: c,
            s: dh(b),
            ga: 2
        })
    };

    function fh(a, b, c, d, e) {
        a = a.location.host;
        var f = Jc(b.src, "domain");
        b = Jc(b.src, "network-code");
        if (a || f || b) {
            var g = {};
            a && (g.ippd = a);
            f && (g.pppd = f);
            b && (g.pppnc = b);
            a = g
        } else a = void 0;
        a ? (c = nc(oc([c ? P("https://pagead2.googlesyndication.com") : P("https://securepubads.g.doubleclick.net"), P("/pagead/ppub_config")]), a), gh(c, d, e)) : e(new q.globalThis.Error("no provided or inferred data"))
    }

    function gh(a, b, c) {
        var d = new q.globalThis.XMLHttpRequest;
        d.open("GET", a.toString(), !0);
        d.withCredentials = !1;
        d.onload = function() {
            300 > d.status ? (mg("13", window), b(204 === d.status ? "" : d.responseText)) : c(new q.globalThis.Error("resp:" + d.status))
        };
        d.onerror = function() {
            return void c(new q.globalThis.Error("s:" + d.status + " rs:" + d.readyState))
        };
        d.send()
    };
    var hh = function() {
            this.h = []
        },
        kh = function(a, b, c, d) {
            Oc(b) === Pc(b) && c && (ih(a), fh(b.top, c, d, function(e) {
                return void jh(a, e)
            }, function(e) {
                jh(a, void 0, e)
            }))
        },
        ih = function(a) {
            ah(260);
            bh(260, function(b) {
                void 0 !== a.i || a.j ? b(a.i, a.j) : a.h.push(b)
            })
        },
        jh = function(a, b, c) {
            a.i = b;
            a.j = c;
            for (var d = v(a.h), e = d.next(); !e.done; e = d.next()) e = e.value, e(b, c);
            a.h.length = 0
        };

    function lh() {
        var a;
        return null != (a = y.googletag) ? a : y.googletag = {
            cmd: []
        }
    }

    function mh(a, b) {
        var c = lh();
        c.hasOwnProperty(a) || (c[a] = b)
    };
    var oh = function() {
            return [].concat(w(t(nh, "values").call(nh))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        nh = new q.Map;

    function ph(a, b, c) {
        if (a.xa) {
            c = c.error && c.meta && c.id ? c.error : c;
            var d = new Qd,
                e = new Pd;
            try {
                var f = ad(window);
                I(e, 1, f, 0)
            } catch (p) {}
            try {
                var g = U(mf).h();
                Bb(e, 2, g, tb)
            } catch (p) {}
            try {
                I(e, 3, window.document.URL, "")
            } catch (p) {}
            f = Gb(d, 2, e);
            g = new Nd;
            b = I(g, 1, b, 0);
            try {
                var h = ue(null == c ? void 0 : c.name) ? c.name : "Unknown error";
                I(b, 2, h, "")
            } catch (p) {}
            try {
                var k = ue(null == c ? void 0 : c.message) ? c.message : "Caught " + c;
                I(b, 3, k, "")
            } catch (p) {}
            try {
                var l = ue(null == c ? void 0 : c.stack) ? c.stack : Error().stack;
                l && Bb(b, 4, l.split(/\n\s*/), ub)
            } catch (p) {}
            h = Gb(f, 1, b);
            k = new Ld;
            try {
                I(k, 1, a.R || a.pa, "")
            } catch (p) {}
            try {
                var m = oh();
                I(k, 2, m, 0)
            } catch (p) {}
            try {
                var r = [].concat(w(t(nh, "keys").call(nh)));
                Bb(k, 3, r, ub)
            } catch (p) {}
            Hb(h, 4, Rd, k);
            I(h, 5, a.ma, 0);
            Sd(a.va, h)
        }
    };

    function qh() {
        var a = rh,
            b = sh(),
            c = th,
            d = {
                ra: Ab(uh, 5),
                sa: H(E(uh, 2), 0),
                na: H(E(uh, 7), 0)
            },
            e, f = null != (e = a.fifWin) ? e : window,
            g = f.document;
        e = a.fifWin ? window : f;
        mh("_loaded_", !0);
        var h = vh(c);
        mh("cmd", []);
        var k;
        c = null != (k = wh(g)) ? k : xh(g);
        yh(b, f, t(Object, "assign").call(Object, {}, {
            ha: c
        }, d));
        try {
            Dg()
        } catch (Q) {}
        mg("1", f);
        b = zh(h, c);
        d = !1;
        if (!Ah(g)) {
            f = "gpt-impl-" + Math.random();
            try {
                Lc(g, Ac(b, {
                    id: f,
                    nonce: Ec()
                }))
            } catch (Q) {}
            g.getElementById(f) && (Rf(Zd) ? d = !0 : a._loadStarted_ = !0)
        }
        if (Rf(Zd) ? !d : !a._loadStarted_) {
            var l = bd("SCRIPT");
            l.src = lc(b);
            Kc(l);
            l.async = !0;
            g = a.fifWin ? e.document : g;
            b = g.body;
            d = g.documentElement;
            var m, r, p = null != (r = null != (m = g.head) ? m : b) ? r : d;
            "complete" !== e.document.readyState && a.fifWin ? gc(e, "load", function() {
                return void p.appendChild(l)
            }) : p.appendChild(l);
            Rf(Zd) || (a._loadStarted_ = !0)
        }
        e === e.top && se(e);
        kh(new hh, e, c, Bh(c))
    }

    function Ch() {
        var a = Number("2019072601");
        1 > a || Math.floor(a) !== a ? (hg({
            v: "2019072601"
        }), a = "1") : a = "2019072601";
        return {
            pa: a,
            R: "m202304170101",
            va: new Xd,
            xa: .01 > Sc(),
            ma: 100
        }
    }

    function vh(a) {
        var b = P("2019072601");
        var c = a.R;
        /m\d+/.test(c) ? c = Number(c.substring(1)) : (c && hg({
            mjsv: c
        }), c = void 0);
        return t(Object, "assign").call(Object, {}, a, {
            qa: b,
            Oa: c,
            ta: P("m202304170101"),
            Pa: ad(window)
        })
    }

    function wh(a) {
        return (a = a.currentScript) ? a : null
    }

    function xh(a) {
        var b;
        a = v(null != (b = a.scripts) ? b : []);
        for (b = a.next(); !b.done; b = a.next())
            if (b = b.value, t(b.src, "includes").call(b.src, "/tag/js/gpt")) return b;
        return null
    }

    function zh(a, b) {
        b = Bh(b) ? P("https://pagead2.googlesyndication.com/") : P("https://securepubads.g.doubleclick.net/");
        a = a.R ? oc([b, jg, a.ta, P("/pubads_impl.js")]) : oc([b, ig, a.qa, P(".js")]);
        b = {};
        var c;
        (c = U(Qf).i(ae.h, ae.defaultValue)) && (b.cb = c);
        return t(Object, "keys").call(Object, b).length ? nc(a, b) : a
    }

    function yh(a, b, c) {
        bh(172, c.ha);
        eh(a, c);
        U(mf).i(12);
        U(mf).i(5);
        Rf($d) || (a = Yg(b)) && a.then(function(d) {
            a: {
                ob = !0;
                try {
                    var e = JSON.stringify(d.toJSON(), Ob);
                    break a
                } finally {
                    ob = !1
                }
                e = void 0
            }
            return void bh(251, e)
        }); of (U(Qf).j(be.h, be.defaultValue), b.document)
    }

    function Ah(a) {
        var b = wh(a);
        return "complete" === a.readyState || "loaded" === a.readyState || !(null == b || !b.async)
    }

    function Bh(a) {
        return !(null == a || !a.src) && "pagead2.googlesyndication.com" === Hc(a.src.match(Gc)[3] || null)
    };
    var Dh = function(a) {
        O.call(this, a)
    };
    x(Dh, O);
    var sh = function() {
            var a = Eb(uh, Ef, 1, !1);
            a || (a = Ef[xb], a || (a = new Ef, hb(a.l, 18), a = Ef[xb] = a));
            return a
        },
        Eh = ac(Dh);
    var Fh = "undefined" === typeof sttc ? void 0 : sttc;
    try {
        var rh = lh(),
            th = Ch(),
            Gh;
        var Hh = th;
        try {
            var Ih = $b();
            if (!ue(Fh)) {
                var Jh = Ih ? Ih() + "\n" : "";
                throw Error(Jh + String(Fh));
            }
            Gh = Eh(Fh)
        } catch (a) {
            ph(Hh, 838, a), Gh = new Dh
        }
        var uh = Gh,
            Kh = rh,
            Lh = uh,
            Mh = !U($g).h,
            Nh = $b();
        if (!Mh) throw Error(Nh && Nh() || String(Mh));
        t(Object, "assign").call(Object, Zg, Kh._vars_);
        Kh._vars_ = Zg;
        Lh && (Ab(Lh, 3) && bh(36, !0), Ab(Lh, 5) && bh(221, !0), Kb(Lh, 6) && bh(150, Kb(Lh, 6)));
        qh()
    } catch (a) {
        try {
            ph(Ch(), 420, a)
        } catch (b) {}
    };
}).call(this.googletag && googletag.fifWin ? googletag.fifWin.parent : this, "[[[[null,472785970,null,[null,500]],[null,7,null,[null,0.1]],[519393152,null,null,[1]],[514499457,null,null,[1]],[null,448338836,null,[null,0.01]],[null,427198696,null,[null,1]],[513922122,null,null,[1]],[501616476,null,null,[1]],[null,408380992,null,[null,0.01]],[null,377289019,null,[null,10000]],[null,529,null,[null,20]],[null,447000223,null,[null,0.01]],[360245597,null,null,[1]],[521759470,null,null,[1]],[503331120,null,null,[1]],[512833161,null,null,[1]],[520704445,null,null,[1]],[null,492,null,[null,0.01]],[437061931,null,null,[1]],[null,398776877,null,[null,60000]],[null,374201269,null,[null,60000]],[null,371364213,null,[null,60000]],[null,376149757,null,[null,0.0025]],[517454235,null,null,[1]],[377936516,null,null,[1]],[null,null,2,[null,null,\"1-0-40\"]],[516945042,null,null,[1]],[null,506394061,null,[null,100]],[null,null,null,[],null,489],[392065905,null,null,null,[[[4,null,68],[1]]]],[null,360245595,null,[null,500]],[513312887,null,null,[1]],[45397804,null,null,[]],[45398607,null,null,[]],[null,397316938,null,[null,1000]],[507033477,null,null,[1]],[518989998,null,null,[1]],[521798275,null,null,[1]],[515410344,null,null,[1]],[503991213,null,null,[1]],[null,null,null,[],null,489560439],[null,null,null,[],null,505762507],[null,1921,null,[null,72]],[null,1920,null,[null,12]],[null,426169222,null,[null,1000]],[null,1917,null,[null,300]],[null,1916,null,[null,0.001]],[null,null,null,[null,null,null,[\"A0VQgOQvA+kwCj319NCwgf8+syUgEQ8\/LLpB8RxxlRC3AkJ9xx8IAvVuQ\/dcwy0ok7sGKufLLu6WhsXbQR9\/UwwAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A6kRo9zXJhOvsR4D\/VeZ9CiApPAxnOGzBkW88d8eIt9ex2oOzlX+AoUk\/BS50Y9Ysy2jwyHR49Mb7XwP+l9yygIAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A3mbHZoS4VJtJ8j1aE8+Z9vaGf\/oMV1eTNIWMrvGqWgNnOmvaxnRGliqKIZU2eiTzCj5Qpz8B1\/UTTLuony5bAAAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjg4MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[null,1116,null,[null,300]],[469675169,null,null,[1]],[485990406,null,null,[]]],[[3,[[null,[[1337,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]],[84,null,null,[1]],[188,null,null,[1]]]]]],[1,[[31070955],[31070956],[31070957,[[null,514795754,null,[null,1]]]],[31072833],[31072834,[[null,514795754,null,[null,1]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[01])\\\\d{3,})\",[\"navigator.userAgent\"]],[1,[[4,null,63]]]]],59],[null,[[31073203],[31073204,[[45397804,null,null,[1]],[45398607,null,null,[1]]]]]],[10,[[31073452],[31073453],[31073454,[[null,514795754,null,[null,1]]]],[31073455],[31073456,[[null,514795754,null,[null,1]]]]],[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[12,null,null,null,4,null,\"Chrome\\\\\/((?!10\\\\d)(?!11[01])\\\\d{3,})\",[\"navigator.userAgent\"]],[1,[[4,null,63]]]]],59],[10,[[31073558],[31073559]]],[null,[[676982960],[676982998]]]]],[5,[[50,[[21062785,null,[4,null,8,null,null,null,null,[\"_gmptnl\"]]],[21062786,[[23,null,null,[1]]],[4,null,8,null,null,null,null,[\"_gmptnl\"]]]],[12,null,null,null,2,null,\"today\\\\.line\\\\.me\/.+\/(main|article)\"],43],[900,[[21062812,[[23,null,null,[1]]],[4,null,8,null,null,null,null,[\"_gmptnl\"]]]],[12,null,null,null,2,null,\"today\\\\.line\\\\.me\/.+\/(main|article)\"],43],[50,[[21063916,null,[4,null,8,null,null,null,null,[\"webkit.messageHandlers._gmptnl\"]]],[21063917,[[23,null,null,[1]]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers._gmptnl\"]]]],[12,null,null,null,2,null,\"today\\\\.line\\\\.me\/.+\/(main|article)\"],44],[900,[[21064113,[[23,null,null,[1]]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers._gmptnl\"]]]],[12,null,null,null,2,null,\"today\\\\.line\\\\.me\/.+\/(main|article)\"],44],[50,[[31067420],[31067421,[[360245597,null,null,[]]]],[44776073],[44776367],[44779108],[44779905],[44784467],[44785148]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[1,[[31071991],[31071992,[[501898423,null,null,[1]]]]]],[100,[[31072019],[31072020,[[471855283,null,null,[1]]]]]],[100,[[31072878],[31072879,[[494337909,null,null,[1]]]]]],[50,[[31073318],[31073319,[[489217043,null,null,[1]]]],[31073320,[[495013820,null,null,[1]]]]]],[1000,[[31073384,null,[3,[[2,[[2,[[8,null,null,1,null,0],[7,null,null,1,null,6]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,10],[7,null,null,1,null,16]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,20],[7,null,null,1,null,35]]],[4,null,3]]]]]],[31073385,[[514876375,null,null,[1]]],[3,[[2,[[2,[[8,null,null,1,null,5],[7,null,null,1,null,11]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,15],[7,null,null,1,null,21]]],[4,null,3]]],[2,[[2,[[8,null,null,1,null,34],[7,null,null,1,null,49]]],[4,null,3]]]]]]]],[1000,[[31073560,null,[2,[[2,[[8,null,null,1,null,0],[7,null,null,1,null,11]]],[4,null,3]]]],[31073561,null,[2,[[2,[[8,null,null,1,null,10],[7,null,null,1,null,21]]],[4,null,3]]]]]],[100,[[31073677],[31073678,[[null,488,null,[null,0.01]]]]]],[100,[[31073828],[31073829,[[503519166,null,null,[1]]]]]],[10,[[31073863],[31073864,[[200,null,null,[1]]]]]],[50,[[31073865],[31073866,[[220,null,null,[1]]]]]],[100,[[31073996],[31073997,[[522655635,null,null,[1]]]]]],[100,[[31073998],[31073999,[[503558781,null,null,[1]]]]]],[100,[[31074000],[31074001,[[522677843,null,null,[1]]]]]],[10,[[31074020],[31074021,[[523120704,null,null,[1]]]]]],[1000,[[31074032,[[null,24,null,[null,31074032]]],[6,null,null,13,null,31074032]],[31074033,[[null,24,null,[null,31074033]]],[6,null,null,13,null,31074033]]],[4,null,3],1],[10,[[31074045],[31074046,[[523495418,null,null,[1]]]]]],[1000,[[31074053,[[null,24,null,[null,31074053]]],[6,null,null,13,null,31074053]],[31074054,[[null,24,null,[null,31074054]]],[6,null,null,13,null,31074054]]],[4,null,3],1],[100,[[31074067],[31074068,[[512522806,null,null,[1]]]]]],[1000,[[31074079,[[null,24,null,[null,31074079]]],[6,null,null,13,null,31074079]],[31074080,[[null,24,null,[null,31074080]]],[6,null,null,13,null,31074080]]],[4,null,3],1],[10,[[31074093],[31074094,[[522597402,null,null,[1]]]]]],[10,[[31074095],[31074096,[[513133013,null,null,[1]]]]]],[10,[[44776366],[44779256]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69]]],[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31067146,null,[4,null,70,null,null,null,null,[\"browsing-topics\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067147,null,[2,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067148,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067672,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067673,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067674,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31067675,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068556,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[1000,[[31068557,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]],[12,null,null,null,4,null,\"Chrome\/((?!100)\\\\d{3,})\",[\"navigator.userAgent\"]]],[null,[[44768158,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44768159,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[10,[[44776500,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776501,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[200,[[44776502,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44776503,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74],[10,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44783617,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44784847,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,74]]],[25,[[50,[[31068366],[31068367,[[null,455645877,null,[null,0.1]]]]]],[10,[[31068825],[31068826,[[null,462420536,null,[null,0.1]]]]]],[50,[[31070232],[31070233,[[476475256,null,null,[1]]]]]]]],[2,[[10,[[31071324],[31071325,[[null,363650251,null,[null,2]]]],[31071326,[[null,363650251,null,[null,1]]]]],null,null,null,null,null,1,null,102],[1,[[31073055],[31073056,[[501,null,null,[1]]]]],[2,[[4,null,66],[12,null,null,null,4,null,\"Chrome\\\\\/((?!100|101|102|103|104|105)\\\\d{3,})\",[\"navigator.userAgent\"]],[1,[[4,null,8,null,null,null,null,[\"navigator.serviceWorker.controller\"]]]],[4,null,9,null,null,null,null,[\"document.head.appendChild\"]]]],62],[10,[[44752585],[44752586,[[392065905,null,null,[1]]]]],null,41],[50,[[44777628],[44777629,[[392065905,null,null,[]]]]],[4,null,68],41],[10,[[44789124],[44789125],[44789126],[44789127]],null,null,null,null,null,601,null,102],[20,[[44789878],[44789879,[[1122,null,null,[1]]]]],null,null,null,null,null,501,null,102]]],[4,[[null,[[44714449,[[null,7,null,[null,1]]]],[676982961,[[null,7,null,[null,0.4]],[212,null,null,[1]]]],[676982996,[[null,7,null,[null,1]]]]]]]]],null,null,[null,\"1000\",1,\"1000\"]],null,null,null,null,\".google.co.in\",228,2021]")