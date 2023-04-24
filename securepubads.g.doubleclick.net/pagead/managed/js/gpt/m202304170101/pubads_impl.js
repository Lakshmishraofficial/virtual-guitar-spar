(function(_) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var ca, fa, ka, la, ma, ra, ua, wa, Aa, ya, Ba, Ca, Da, Ea, Ga, Ia, Ja, Na, Oa, Pa, Qa, Ra, Sa, Ua, Va, Xa, Wa, Za, $a, ab, bb, hb, ib, kb, mb, pb, rb, xb, zb, Fb, Jb, Mb, Qb, Sb, Wb, Yb, cc, ec, Zb, gc, hc, ic, jc, kc, pc, qc, rc, sc, tc, uc, yc, Ac, zc, Bc, Dc, Ec, Fc, Gc, Kc, Oc, Nc, Mc, Qc, Rc, Tc, Uc, Xc, Yc, Zc, $c, dd, kd, od, qd, sd, rd, wd, vd, zd, xd, yd, Ad, Ed, Bd, Sc, Kd, Ld, Pd, Sd, Md, Nd, Wd, Xd, Yd, $d, Ud, Vd, ae, ee, ge, je, ke, le, se, te, ve, we, ye, ze, Ae, Be, Ee, Ge, Ie, $e, Re, bf, ef, gf, hf, kf, of , pf, qf, tf, uf, yf, zf, Af, Df, Jf, Hf, Gf, Ff, Nf, Xf, Yf, bg, Zf, og, vg, tg, ug, Bg, Og, Pg, Rg, Vg, Tg, $g, eh, ih, jh, kh, gh, hh, lh, mh, sh, qh, vh, Bh, Dh, Eh, Fh, Mh, Qh, I, Rh, Xh, Vh, gi, ki, mi, ni, pi, qi, si, Mi, Pi, Si, Ui, Wi, Vi, cj, dj, ej, fj, Xi, gj, Yi, ij, kj, lj, nj, mj, tj, rj, uj, Dj, Gj, yj, zj, Hj, Ij, Kj, Lj, Mj, Nj, Rj, Xj, Tj, Pj, ek, ck, dk, fk, gk, hk, jk, vk, wk, zk, Bk, K, Dk, Ek, Fk, Hk, Jk, Kk, Lk, Ok, Nk, Mk, Wk, Zk, fl, gl, il, jl, nl, pl, tl, zl, Bl, Dl, El, Fl, Gl, Jl, Ll, Nl, Ol, Ql, cm, em, Rl, va, hm, im, km, mm, om, pm, qm, sm, tm, um, wm, Cm, Gm, Hm, Lm, Mm, Nm, Om, Rm, Pm, Sm, Um, Vm, Wm, Xm, Ym, an, bn, dn, hn, gn, kn, mn, sn, tn, vn, An, Bn, Dn, In, Mn, Pn, Nn, On, Vn, Xn, bo, co, no, lo, oo, ro, eo, Ao, Co, Do, Eo, Fo, Ho, Io, Jo, Qo, So, To, Vo, Wo, Xo, Yo, ap, cp, jp, dp, ep, $o, np, op, rp, Hp, Tp, Up, Wp, bq, eq, fq, gq, lq, mq, rq, sq, vq, Aq, Bq, Cq, xr, Ar, Br, Jr, Lr, Nr, Qr, Rr, Sr, Tr, Vr, Wr, Xr, Yr, Zr, $r, as, hs, is, js, Bb, Db, Eb, ls, os, ms, ns, ps, qs, us, xa, oa, pa, vs, ws, lf;
    ca = function(a) {
        return function() {
            return _.ba[a].apply(this, arguments)
        }
    };
    fa = function(a) {
        return a ? a.passive && ea() ? a : a.capture || !1 : !1
    };
    ka = function(a, b) {
        b = _.ha(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    };
    la = function(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };
    ma = function(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    ra = function(a) {
        for (var b = 0, c = 0, d = {}; c < a.length;) {
            var e = a[c++],
                f = _.na(e) ? "o" + (Object.prototype.hasOwnProperty.call(e, oa) && e[oa] || (e[oa] = ++pa)) : (typeof e).charAt(0) + e;
            Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e)
        }
        a.length = b
    };
    ua = function(a, b) {
        a.sort(b || _.sa)
    };
    wa = function(a) {
        for (var b = va, c = Array(a.length), d = 0; d < a.length; d++) c[d] = {
            index: d,
            value: a[d]
        };
        var e = b || _.sa;
        ua(c, function(f, g) {
            return e(f.value, g.value) || f.index - g.index
        });
        for (b = 0; b < a.length; b++) a[b] = c[b].value
    };
    Aa = function(a, b) {
        if (!xa(a) || !xa(b) || a.length != b.length) return !1;
        for (var c = a.length, d = ya, e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    };
    _.sa = function(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    };
    ya = function(a, b) {
        return a === b
    };
    Ba = function(a, b) {
        for (var c = {}, d = 0; d < a.length; d++) {
            var e = a[d],
                f = b.call(void 0, e, d, a);
            void 0 !== f && (c[f] || (c[f] = [])).push(e)
        }
        return c
    };
    Ca = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (Array.isArray(d))
                for (var e = 0; e < d.length; e += 8192)
                    for (var f = Ca.apply(null, ma(d, e, e + 8192)), g = 0; g < f.length; g++) b.push(f[g]);
            else b.push(d)
        }
        return b
    };
    Da = function(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    };
    Ea = function(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    };
    Ga = function(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return c
    };
    Ia = function(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ha.length; f++) c = Ha[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    Ja = function() {
        var a = _.q.navigator;
        return a && (a = a.userAgent) ? a : ""
    };
    Na = function(a) {
        return Ka ? La ? La.brands.some(function(b) {
            return (b = b.brand) && Ma(b, a)
        }) : !1 : !1
    };
    Oa = function(a) {
        return Ma(Ja(), a)
    };
    Pa = function(a) {
        for (var b = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
        return c
    };
    Qa = function() {
        return Ka ? !!La && 0 < La.brands.length : !1
    };
    Ra = function() {
        return Qa() ? !1 : Oa("Opera")
    };
    Sa = function() {
        return Qa() ? !1 : Oa("Trident") || Oa("MSIE")
    };
    Ua = function() {
        return Qa() ? Na("Microsoft Edge") : Oa("Edg/")
    };
    Va = function() {
        return Oa("Firefox") || Oa("FxiOS")
    };
    Xa = function() {
        return Oa("Safari") && !(Wa() || (Qa() ? 0 : Oa("Coast")) || Ra() || (Qa() ? 0 : Oa("Edge")) || Ua() || (Qa() ? Na("Opera") : Oa("OPR")) || Va() || Oa("Silk") || Oa("Android"))
    };
    Wa = function() {
        return Qa() ? Na("Chromium") : (Oa("Chrome") || Oa("CriOS")) && !(Qa() ? 0 : Oa("Edge")) || Oa("Silk")
    };
    Za = function(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[_.t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    };
    $a = function() {
        var a = Ja();
        if (Sa()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        a = Pa(a);
        b = Za(a);
        return Ra() ? b(["Version", "Opera"]) : (Qa() ? 0 : Oa("Edge")) ? b(["Edge"]) : Ua() ? b(["Edg"]) : Oa("Silk") ? b(["Silk"]) : Wa() ? b(["Chrome", "CriOS", "HeadlessChrome"]) : (a = a[2]) && a[1] || ""
    };
    ab = function() {
        var a = Pa(Ja());
        Za(a);
        return Va() ? (a = a[2]) && a[1] || "" : ""
    };
    bb = function() {
        if (Qa()) {
            var a = _.t(La.brands, "find").call(La.brands, function(b) {
                return "Firefox" === b.brand
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = ab();
            if ("" === a) return NaN;
            a = a.split(".")
        }
        return 0 === a.length ? NaN : Number(a[0])
    };
    _.fb = function(a) {
        if (a instanceof _.cb) a = _.db(a);
        else {
            b: if (eb) {
                try {
                    var b = new URL(a)
                } catch (c) {
                    b = "https:";
                    break b
                }
                b = b.protocol
            } else c: {
                b = document.createElement("a");
                try {
                    b.href = a
                } catch (c) {
                    b = void 0;
                    break c
                }
                b = b.protocol;b = ":" === b || "" === b ? "https:" : b
            }
            a = "javascript:" !== b ? a : void 0
        }
        return a
    };
    hb = function(a) {
        throw Error("unexpected value " + a + "!");
    };
    ib = function(a) {
        var b, c, d = null == (c = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document).querySelector) ? void 0 : c.call(b, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    kb = function(a, b) {
        a.textContent = _.jb(b);
        ib(a)
    };
    mb = function(a, b) {
        a.src = _.lb(b);
        ib(a)
    };
    pb = function(a, b) {
        a.write(_.nb(b))
    };
    rb = function(a) {
        return new qb(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    };
    _.vb = function(a) {
        var b = void 0 === b ? sb : b;
        a: {
            b = void 0 === b ? sb : b;
            for (var c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d instanceof qb && d.Ah(a)) {
                    a = tb(a);
                    break a
                }
            }
            a = void 0
        }
        return a || _.ub
    };
    xb = function(a) {
        for (var b = _.wb.apply(1, arguments), c = [a[0]], d = 0; d < b.length; d++) c.push(String(b[d])), c.push(a[d + 1]);
        return tb(c.join(""))
    };
    zb = function(a) {
        var b = window,
            c = !0;
        c = void 0 === c ? !1 : c;
        new _.v.Promise(function(d, e) {
            function f() {
                g.onload = null;
                g.onerror = null;
                var h;
                null == (h = g.parentElement) || h.removeChild(g)
            }
            var g = b.document.createElement("script");
            g.onload = function() {
                f();
                d()
            };
            g.onerror = function() {
                f();
                e(void 0)
            };
            g.type = "text/javascript";
            mb(g, a);
            c && "complete" !== b.document.readyState ? _.yb(b, "load", function() {
                b.document.body.appendChild(g)
            }) : b.document.body.appendChild(g)
        })
    };
    Fb = function(a) {
        var b, c, d, e, f, g;
        return _.Ab(function(h) {
            switch (h.j) {
                case 1:
                    return b = "https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=" + a.j + ("&tv=" + a.o + "&st=") + a.kc, c = void 0, h.m = 2, Bb(h, Cb(b), 4);
                case 4:
                    c = h.o;
                    Db(h, 3);
                    break;
                case 2:
                    Eb(h);
                case 3:
                    if (!c) return h.return(void 0);
                    d = a.Ic || c.sodar_query_id;
                    e = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n";
                    f = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms;
                    g = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
                    return d && c.bg_hash_basename && c.bg_binary ? h.return({
                        context: a.H,
                        Cg: c.bg_hash_basename,
                        Bg: c.bg_binary,
                        Gh: a.j + "_" + a.o,
                        Ic: d,
                        kc: a.kc,
                        Bd: e,
                        Id: f,
                        zd: g
                    }) : h.return(void 0)
            }
        })
    };
    Jb = function(a) {
        var b;
        return _.Ab(function(c) {
            if (1 == c.j) return Bb(c, Fb(a), 2);
            if (b = c.o) {
                var d = "sodar2";
                d = void 0 === d ? "sodar2" : d;
                var e = window,
                    f = e.GoogleGcLKhOms;
                f && "function" === typeof f.push || (f = e.GoogleGcLKhOms = []);
                var g = {};
                f.push((g._ctx_ = b.context, g._bgv_ = b.Cg, g._bgp_ = b.Bg, g._li_ = b.Gh, g._jk_ = b.Ic, g._st_ = b.kc, g._rc_ = b.Bd, g._dl_ = b.Id, g._g2_ = b.zd, g));
                if (f = e.GoogleDX5YKUSk) e.GoogleDX5YKUSk = void 0, f[1]();
                d = Hb(Ib, {
                    basename: d
                });
                zb(d)
            }
            return c.return(b)
        })
    };
    Mb = function(a) {
        var b = !1;
        b = void 0 === b ? !1 : b;
        if (Kb) {
            if (b && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(a)) throw Error("Found an unpaired surrogate");
            a = (Lb || (Lb = new TextEncoder)).encode(a)
        } else {
            for (var c = 0, d = new Uint8Array(3 * a.length), e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                if (128 > f) d[c++] = f;
                else {
                    if (2048 > f) d[c++] = f >> 6 | 192;
                    else {
                        if (55296 <= f && 57343 >= f) {
                            if (56319 >= f && e < a.length) {
                                var g = a.charCodeAt(++e);
                                if (56320 <= g && 57343 >= g) {
                                    f = 1024 * (f - 55296) + g - 56320 + 65536;
                                    d[c++] = f >> 18 | 240;
                                    d[c++] = f >> 12 & 63 | 128;
                                    d[c++] = f >> 6 & 63 | 128;
                                    d[c++] = f & 63 | 128;
                                    continue
                                } else e--
                            }
                            if (b) throw Error("Found an unpaired surrogate");
                            f = 65533
                        }
                        d[c++] = f >> 12 | 224;
                        d[c++] = f >> 6 & 63 | 128
                    }
                    d[c++] = f & 63 | 128
                }
            }
            a = c === d.length ? d : d.subarray(0, c)
        }
        return a
    };
    Qb = function(a) {
        if (!Nb) return Pb(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    };
    Sb = function(a) {
        return Rb[a] || ""
    };
    Wb = function(a) {
        return Tb && null != a && a instanceof Uint8Array
    };
    Yb = function(a) {
        if (a !== Xb) throw Error("illegal external caller");
    };
    cc = function(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = _.w(Zb(c, a)), b = c.next().value, a = c.next().value, c = b);
        ac = c >>> 0;
        bc = a >>> 0
    };
    ec = function(a) {
        if (16 > a.length) cc(Number(a));
        else if (dc) a = BigInt(a), ac = Number(a & BigInt(4294967295)) >>> 0, bc = Number(a >> BigInt(32) & BigInt(4294967295));
        else {
            var b = +("-" === a[0]);
            bc = ac = 0;
            for (var c = a.length, d = b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), bc *= 1E6, ac = 1E6 * ac + d, 4294967296 <= ac && (bc += ac / 4294967296 | 0, ac %= 4294967296);
            b && (b = _.w(Zb(ac, bc)), a = b.next().value, b = b.next().value, ac = a, bc = b)
        }
    };
    Zb = function(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    gc = function(a, b) {
        if (fc) return a[fc] |= b;
        if (void 0 !== a.fb) return a.fb |= b;
        Object.defineProperties(a, {
            fb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return b
    };
    hc = function(a, b) {
        fc ? a[fc] && (a[fc] &= ~b) : void 0 !== a.fb && (a.fb &= ~b)
    };
    ic = function(a) {
        var b;
        fc ? b = a[fc] : b = a.fb;
        return null == b ? 0 : b
    };
    jc = function(a, b) {
        fc ? a[fc] = b : void 0 !== a.fb ? a.fb = b : Object.defineProperties(a, {
            fb: {
                value: b,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        });
        return a
    };
    kc = function(a) {
        gc(a, 1);
        return a
    };
    pc = function(a) {
        return !!(ic(a) & 2)
    };
    qc = function(a) {
        gc(a, 18);
        return a
    };
    rc = function(a) {
        gc(a, 16);
        return a
    };
    sc = function(a, b) {
        jc(b, (a | 0) & -51)
    };
    tc = function(a, b) {
        jc(b, (a | 18) & -41)
    };
    uc = function(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    };
    yc = function(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new wc(a, Xb) : xc();
            else if (a.constructor !== wc)
            if (Wb(a)) {
                var d;
                c ? d = 0 == a.length ? xc() : new wc(a, Xb) : d = a.length ? new wc(new Uint8Array(a), Xb) : xc();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    };
    Ac = function(a) {
        zc(ic(a.fa))
    };
    zc = function(a) {
        if (a & 2) throw Error();
    };
    Bc = function(a) {
        var b = a.length;
        (b = b ? a[b - 1] : void 0) && uc(b) ? b.g = 1 : (b = {}, a.push((b.g = 1, b)))
    };
    _.Cc = function(a) {
        if (null != a && "number" !== typeof a) throw Error("Value of float/double field must be a number|null|undefined, found " + typeof a + ": " + a);
        return a
    };
    Dc = function(a) {
        if (null == a) return a;
        switch (typeof a) {
            case "string":
                return +a;
            case "number":
                return a
        }
    };
    Ec = function(a) {
        return a
    };
    Fc = function(a) {
        return a
    };
    Gc = function(a) {
        return a
    };
    _.Hc = function(a) {
        return a
    };
    Kc = function(a) {
        return a
    };
    Oc = function(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.xe === Lc) return a;
        if (!e) return c ? d & 2 ? Mc(b) : new b : void 0;
        Nc(a, d);
        return new b(a)
    };
    Nc = function(a, b) {
        var c = ic(a),
            d = c;
        0 === d && (d |= b & 16);
        d |= b & 2;
        d !== c && jc(a, d)
    };
    Mc = function(a) {
        var b = a[Pc];
        if (b) return b;
        b = new a;
        qc(b.fa);
        return a[Pc] = b
    };
    Qc = function(a) {
        return a
    };
    Rc = function(a, b, c) {
        return "string" === typeof a ? a : c ? "" : void 0
    };
    Tc = function(a, b, c, d, e, f) {
        a = Oc(a, d, c, f);
        e && (a = Sc(a));
        return a
    };
    Uc = function(a) {
        return a
    };
    Xc = function(a, b, c, d, e) {
        var f = y(a, b, d);
        Array.isArray(f) || (f = Vc);
        var g = ic(f);
        g & 1 || kc(f);
        if (e) g & 2 || qc(f), c & 1 || Object.freeze(f);
        else {
            e = !(c & 2);
            var h = g & 2;
            c & 1 || !h ? e && g & 16 && !h && hc(f, 16) : (f = kc(Array.prototype.slice.call(f)), Wc(a, b, f, d))
        }
        return f
    };
    Yc = function(a, b, c, d, e) {
        var f = pc(a.fa),
            g = Xc(a, b, e || 1, d, f),
            h = ic(g);
        if (!(h & 4)) {
            Object.isFrozen(g) && (g = kc(g.slice()), Wc(a, b, g, d));
            for (var k = 0, l = 0; k < g.length; k++) {
                var n = c(g[k]);
                null != n && (g[l++] = n)
            }
            l < k && (g.length = l);
            h |= 5;
            f && (h |= 18);
            jc(g, h);
            h & 2 && Object.freeze(g)
        }
        if (2 === e) return g;
        !f && (h & 2 || Object.isFrozen(g)) && (g = Array.prototype.slice.call(g), gc(g, 5), Wc(a, b, g, d));
        return g
    };
    Zc = function(a) {
        return yc(a, !0, !0)
    };
    $c = function(a) {
        return yc(a, !0, !1)
    };
    dd = function(a, b, c, d, e) {
        var f = pc(a.fa);
        a: {
            var g = b;b = !1;
            if (null == g) {
                if (f) {
                    a = ad || (ad = new bd(qc([])));
                    break a
                }
                g = []
            } else if (g.constructor === bd) {
                if (0 == (g.m & 2) || f) {
                    a = g;
                    break a
                }
                g = cd(g)
            } else Array.isArray(g) ? b = pc(g) : g = [];
            if (f) {
                if (!g.length) {
                    a = ad || (ad = new bd(qc([])));
                    break a
                }
                b || (b = !0, qc(g))
            } else if (b) {
                b = !1;
                g = Array.prototype.slice.call(g);
                for (var h = 0; h < g.length; h++) {
                    var k = g[h] = Array.prototype.slice.call(g[h]);
                    Array.isArray(k[1]) && (k[1] = qc(k[1]))
                }
            }
            b || (ic(g) & 32 ? hc(g, 16) : ic(a.fa) & 16 && rc(g));e = new bd(g, d, Rc, e);Wc(a, c, e, !1);a = e
        }
        if (null == a) return a;
        !f && d && (a.l = !0);
        return a
    };
    _.ed = function(a, b, c, d) {
        if (null == c) return _.z(a, b, Vc);
        var e = ic(c);
        if (!(e & 4)) {
            if (e & 2 || Object.isFrozen(c)) c = Array.prototype.slice.call(c);
            for (var f = 0; f < c.length; f++) c[f] = d(c[f]);
            jc(c, e | 5)
        }
        return _.z(a, b, c)
    };
    _.fd = function(a, b, c, d) {
        Ac(a);
        c !== d ? Wc(a, b, c) : Wc(a, b, void 0, !1);
        return a
    };
    kd = function(a, b, c, d, e) {
        var f = !!(e & 2);
        jd && !a.j && (a.j = {});
        var g = jd ? a.j[c] : void 0,
            h = Xc(a, c, 1 | (jd ? 2 : 0), void 0, f);
        if (jd ? !g : h === Vc || !(ic(h) & 4)) {
            var k = h;
            g = jd ? [] : void 0;
            h = !!(e & 2);
            f = !!(ic(k) & 2);
            var l = k;
            !h && f && (k = Array.prototype.slice.call(k));
            var n = e | (f ? 2 : 0);
            e = f;
            for (var m = 0, p = 0; m < k.length; m++) {
                var r = k[m];
                if (jd) {
                    var u = b;
                    Array.isArray(r) ? (Nc(r, n), r = new u(r)) : r = void 0
                } else r = Oc(r, b, !1, n);
                void 0 !== r && (e = e || !!(2 & ic(r.fa)), jd ? g.push(r) : k[p++] = r)
            }
            jd ? a.j[c] = g : p < m && (k.length = p);
            n = ic(k);
            b = n | 1;
            b = jd ? b | 32 : b | 4;
            b = e ? b & -9 : b | 8;
            n != b && (e = k, Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), jc(e, b), k = e);
            l !== k && Wc(a, c, k);
            jd && (h || 1 === d && f) && qc(g);
            (h || 1 === d) && Object.freeze(jd ? g : k);
            return jd ? g : k
        }
        if (3 === d) return jd ? g : h;
        f || (jd ? (f = Object.isFrozen(g), 1 !== d || f) ? 2 === d && f && (g = Array.prototype.slice.call(g), a.j[c] = g) : Object.freeze(g) : (f = Object.isFrozen(h), 1 === d ? f || Object.freeze(h) : (d = ic(h), l = d & -19, f && (h = Array.prototype.slice.call(h), d = 0, Wc(a, c, h)), d !== l && jc(h, l))));
        return jd ? g : h
    };
    _.ld = function(a, b, c) {
        return _.fd(a, b, null == c ? c : !!c, !1)
    };
    _.md = function(a, b, c) {
        return _.fd(a, b, c, 0)
    };
    _.nd = function(a, b, c) {
        return _.fd(a, b, c, "")
    };
    od = function(a, b) {
        return null == a ? b : a
    };
    qd = function(a, b) {
        pd = b;
        a = new a(b);
        pd = void 0;
        return a
    };
    sd = function(a, b) {
        return rd(b)
    };
    rd = function(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a)
                    if (Array.isArray(a)) {
                        if (0 !== (ic(a) & 128)) return a = Array.prototype.slice.call(a), Bc(a), a
                    } else {
                        if (Wb(a)) return Qb(a);
                        if (a instanceof wc) return td(a);
                        if (a instanceof bd) return ud(a)
                    }
        }
        return a
    };
    wd = function(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && ic(a) & 1 ? void 0 : f && ic(a) & 2 ? a : vd(a, b, c, void 0 !== d, e, f);
            else if (uc(a)) {
                var g = {},
                    h;
                for (h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = wd(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    };
    vd = function(a, b, c, d, e, f) {
        var g = ic(a);
        d = d ? !!(g & 16) : void 0;
        a = Array.prototype.slice.call(a);
        for (var h = 0; h < a.length; h++) a[h] = wd(a[h], b, c, d, e, f);
        c(g, a);
        return a
    };
    zd = function(a) {
        return wd(a, xd, yd, void 0, !1, !1)
    };
    xd = function(a) {
        return a.xe === Lc ? a.toJSON() : a instanceof bd ? ud(a, zd) : rd(a)
    };
    yd = function(a, b) {
        a & 128 && Bc(b)
    };
    Ad = function(a, b, c) {
        c = void 0 === c ? tc : c;
        if (null != a) {
            if (Tb && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = ic(a);
                if (d & 2) return a;
                if (b && !(d & 32) && (d & 16 || 0 === d)) return jc(a, d | 18), a;
                a = vd(a, Ad, d & 4 ? tc : c, !0, !1, !0);
                b = ic(a);
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.xe === Lc ? a = Bd(a) : a instanceof bd && (b = qc(cd(a, Ad)), a = new bd(b, a.o, a.H, a.C));
            return a
        }
    };
    Ed = function(a, b, c, d, e, f, g) {
        (a = jd ? a.j && a.j[c] : void 0) ? (d = ic(a), d & 2 ? d = a : (f = _.Cd(a, Bd), tc(d, f), Object.freeze(f), d = f), _.Dd(b, c, d, e)) : _.z(b, c, Ad(d, f, g), e)
    };
    Bd = function(a) {
        if (pc(a.fa)) return a;
        a = _.Id(a, !0);
        qc(a.fa);
        return a
    };
    _.Id = function(a, b) {
        var c = a.fa,
            d = rc([]),
            e = a.constructor.messageId;
        e && d.push(e);
        e = a.Ya;
        if (e) {
            d.length = c.length;
            var f = {};
            d[d.length - 1] = f
        }
        0 !== (ic(c) & 128) && Bc(d);
        b = b || pc(a.fa) ? tc : sc;
        d = qd(a.constructor, d);
        a.te && (d.te = a.te.slice());
        f = !!(ic(c) & 16);
        for (var g = e ? c.length - 1 : c.length, h = 0; h < g; h++) Ed(a, d, h - a.Cb, c[h], !1, f, b);
        if (e)
            for (var k in e) Ed(a, d, +k, e[k], !0, f, b);
        return d
    };
    Sc = function(a) {
        if (!pc(a.fa)) return a;
        var b = _.Id(a, !1);
        b.C = a;
        return b
    };
    Kd = function(a, b) {
        if (Array.isArray(a)) {
            var c = ic(a),
                d = 1;
            !b || c & 2 || (d |= 16);
            (c & d) !== d && jc(a, c | d)
        }
    };
    Ld = function(a, b) {
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        var c = ic(b);
        if (0 !== c) throw Error();
        jc(b, c | 64);
        return qd(a, rc(b))
    };
    Pd = function(a, b, c) {
        if (c) {
            var d = {},
                e;
            for (e in c) {
                if (Object.prototype.hasOwnProperty.call(c, e)) {
                    var f = c[e],
                        g = f.Ki;
                    g || (d.qc = f.Pj || f.Sj.Kd, f.zg ? (d.Pd = Md(f.zg), g = function(h) {
                        return function(k, l, n) {
                            return h.qc(k, l, n, h.Pd)
                        }
                    }(d)) : f.Hh ? (d.Od = Nd(f.Wg.jf, f.Hh), g = function(h) {
                        return function(k, l, n) {
                            return h.qc(k, l, n, h.Od)
                        }
                    }(d)) : g = d.qc, f.Ki = g);
                    g(b, a, f.Wg)
                }
                d = {
                    qc: d.qc,
                    Pd: d.Pd,
                    Od: d.Od
                }
            }
        }
        Od(b, a)
    };
    Sd = function(a, b) {
        var c = a[b];
        "function" == typeof c && 0 === c.length && (c = c(), a[b] = c);
        return Array.isArray(c) && (Qd in c || Rd in c || 0 < c.length && "function" == typeof c[0]) ? c : void 0
    };
    Md = function(a) {
        var b = a[Td];
        if (!b) {
            var c = Ud(a);
            b = function(d, e) {
                return Vd(d, e, c)
            };
            a[Td] = b
        }
        return b
    };
    Nd = function(a, b) {
        var c = a[Td];
        c || (c = function(d, e) {
            return Pd(d, e, b)
        }, a[Td] = c);
        return c
    };
    Wd = function(a, b) {
        a.push(b)
    };
    Xd = function(a, b, c) {
        a.push(b, c.Kd)
    };
    Yd = function(a, b, c, d) {
        var e = Md(d),
            f = Ud(d).jf,
            g = c.Kd;
        a.push(b, function(h, k, l) {
            return g(h, k, l, f, e)
        })
    };
    $d = function(a, b, c, d, e, f) {
        var g = Nd(d, f),
            h = c.Kd;
        a.push(b, function(k, l, n) {
            return h(k, l, n, d, g)
        })
    };
    Ud = function(a) {
        var b = a[Rd];
        if (b) return b;
        b = a[Rd] = [];
        var c = Wd,
            d = Xd,
            e = Yd,
            f = $d;
        b.jf = a[0];
        var g = 1;
        if (a.length > g && "number" !== typeof a[g]) {
            var h = a[g++];
            c(b, h)
        }
        for (; g < a.length;) {
            c = a[g++];
            for (var k = g + 1; k < a.length && "number" !== typeof a[k];) k++;
            h = a[g++];
            k -= g;
            switch (k) {
                case 0:
                    d(b, c, h);
                    break;
                case 1:
                    (k = Sd(a, g)) ? (g++, e(b, c, h, k)) : d(b, c, h, a[g++]);
                    break;
                case 2:
                    k = b;
                    var l = g++;
                    l = Sd(a, l);
                    e(k, c, h, l, a[g++]);
                    break;
                case 3:
                    f(b, c, h, a[g++], a[g++], a[g++]);
                    break;
                case 4:
                    f(b, c, h, a[g++], a[g++], a[g++], a[g++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + k);
            }
        }
        Qd in a && Rd in a && (a.length = 0);
        return b
    };
    Vd = function(a, b, c) {
        for (var d = c.length, e = 1 == d % 2, f = e ? 1 : 0; f < d; f += 2)(0, c[f + 1])(b, a, c[f]);
        Pd(a, b, e ? c[0] : void 0)
    };
    ae = function(a, b) {
        return {
            Rj: a,
            Kd: b
        }
    };
    ee = function(a, b, c) {
        b = y(b, c);
        null != b && ("string" === typeof b && be(b), null != b && (ce(a.j, 8 * c), "number" === typeof b ? (a = a.j, cc(b), de(a, ac, bc)) : (c = be(b), de(a.j, c.o, c.j))))
    };
    ge = function(a) {
        var b = fe;
        fe = void 0;
        if (!a) throw Error(b && b() || String(a));
    };
    je = function(a) {
        return function() {
            var b = new he;
            Vd(this, b, Ud(a));
            ie(b, b.j.end());
            for (var c = new Uint8Array(b.o), d = b.m, e = d.length, f = 0, g = 0; g < e; g++) {
                var h = d[g];
                c.set(h, f);
                f += h.length
            }
            b.m = [c];
            return c
        }
    };
    ke = function(a) {
        return function(b) {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = qd(a, rc(b))
            }
            return b
        }
    };
    le = function(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    };
    se = function(a, b, c, d) {
        d = void 0 === d ? [] : d;
        var e = new a.MutationObserver(function(f) {
            f = _.w(f);
            for (var g = f.next(); !g.done; g = f.next()) {
                g = _.w(g.value.removedNodes);
                for (var h = g.next(); !h.done; h = g.next())
                    if (h = h.value, d && (h === b || me(h, b))) {
                        f = _.w(d);
                        for (g = f.next(); !g.done; g = f.next()) g.value.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
            }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        pe(function(f) {
            if (!f.parent || !_.qe(f.parent)) return !1;
            for (var g = f.parent.document.getElementsByTagName("iframe"), h = 0; h < g.length; h++) try {
                if (re(g[h]) == f) {
                    se(f.parent, g[h], c, d);
                    break
                }
            } catch (k) {}
            return !1
        }, !1, !1, a)
    };
    te = function(a) {
        a = void 0 === a ? _.q : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (e) {}
        var c, d;
        return (null == (c = b) ? 0 : c.pageViewId) && (null == (d = b) ? 0 : d.canonicalUrl) ? b : null
    };
    _.A = function(a) {
        var b = _.wb.apply(1, arguments);
        if (0 === b.length) return ue(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return ue(c.join(""))
    };
    ve = function(a, b) {
        var c = _.lb(a).toString();
        if (/#/.test(c)) throw Error("");
        var d = /\?/.test(c) ? "&" : "?";
        b.forEach(function(e, f) {
            e = e instanceof Array ? e : [e];
            for (var g = 0; g < e.length; g++) {
                var h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return ue(c)
    };
    we = function(a) {
        return JSON.stringify([a.map(function(b) {
            var c = {};
            return [(c[b.Re] = b.message.toJSON(), c)]
        })])
    };
    ye = function(a) {
        a.Ne.apply(a, _.xe(_.wb.apply(1, arguments).map(function(b) {
            return {
                Re: 2,
                message: b
            }
        })))
    };
    ze = function(a) {
        a.Ne.apply(a, _.xe(_.wb.apply(1, arguments).map(function(b) {
            return {
                Re: 5,
                message: b
            }
        })))
    };
    Ae = function(a) {
        a && "function" == typeof a.Da && a.Da()
    };
    Be = function(a) {
        return a[_.t(_.v.Symbol, "iterator")]()
    };
    Ee = function(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        a.google_image_requests || (a.google_image_requests = []);
        var f = _.Ce("IMG", a.document);
        if (c || d) {
            var g = function(h) {
                c && c(h);
                d && ka(a.google_image_requests, f);
                _.De(f, "load", g);
                _.De(f, "error", g)
            };
            _.yb(f, "load", g);
            _.yb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    };
    Ge = function() {
        var a = Fe;
        return function(b) {
            for (var c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    Ie = function() {
        var a = He;
        return function(b) {
            return b instanceof a
        }
    };
    $e = function(a, b) {
        var c;
        a: {
            try {
                if (a) {
                    var d = a.getItem("google_experiment_mod");
                    break a
                }
            } catch (g) {}
            d = null
        }
        d = null != (c = d) ? c : "";
        try {
            var e = Me(d);
            if (d) {
                var f = Me(d);
                Ne(f, Oe(Pe(1), -1));
                Qe(f)
            }
        } catch (g) {
            Re(d), e = new Se
        }
        if (c = (_.B = Te(e, Ue, 1), _.t(_.B, "find")).call(_.B, function(g) {
                return _.Ve(g, 1, 0) === b
            }))
            if (f = We(c, 2), null === f || isNaN(f)) Re(d);
            else return f;
        d = (0, _.Xe)() ? null : Math.floor(1E3 * _.Ye());
        if (null === d) return null;
        c ? Oe(c, d) : Ne(e, Oe(Pe(b), d));
        return Ze(a, Qe(e)) ? d : null
    };
    Re = function(a) {
        .01 > Math.random() && af({
            data: a
        }, "ls_tamp")
    };
    bf = function(a) {
        var b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            Ie: b.__uspapiReturn.callId
        }
    };
    ef = function(a) {
        a = cf(a.data.__fciReturn);
        return {
            payload: a,
            Ie: _.df(a, 1)
        }
    };
    gf = function(a, b) {
        b = void 0 === b ? window : b;
        if (ff(a)) try {
            return b.localStorage
        } catch (c) {}
        return null
    };
    hf = function(a) {
        return "null" !== a.origin
    };
    kf = function(a, b, c) {
        b = ff(b) && hf(c) ? c.document.cookie : null;
        return null === b ? null : (new jf({
            cookie: b
        })).get(a) || ""
    };
    _.mf = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : lf()
    };
    _.nf = function(a) {
        a = void 0 === a ? _.q : a;
        return (a = a.performance) && a.now ? a.now() : null
    }; of = function(a, b) {
        b = void 0 === b ? _.q : b;
        var c, d;
        return (null == (c = b.performance) ? void 0 : null == (d = c.timing) ? void 0 : d[a]) || 0
    };
    pf = function(a) {
        a = void 0 === a ? _.q : a;
        var b = Math.min( of ("domLoading", a) || Infinity, of ("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max( of ("responseEnd", a), of ("navigationStart", a)) : b
    };
    qf = function(a, b, c) {
        return b[a] || c
    };
    tf = function(a) {
        _.rf(sf).H(a)
    };
    uf = function(a) {
        return _.rf(sf).m(a)
    };
    yf = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? {} : d;
        var e = vf.j();
        0 === e.j && (e.j = .001 > Math.random() ? 2 : 1);
        2 === e.j && (e = {}, af(_.t(Object, "assign").call(Object, {}, (e.c = String(a), e.pc = String(wf(window)), e.em = c, e.lid = b, e.eids = _.rf(sf).j().join(), e), d), "esp"))
    };
    zf = function() {
        var a = window;
        var b = void 0 === b ? function() {} : b;
        return new _.v.Promise(function(c) {
            var d = function() {
                c(b());
                _.De(a, "load", d)
            };
            _.yb(a, "load", d)
        })
    };
    Af = function(a) {
        var b = [],
            c = RegExp("^_GESPSK-(.+)$");
        try {
            for (var d = 0; d < a.length; d++) {
                var e = (c.exec(a.key(d)) || [])[1];
                e && b.push(e)
            }
        } catch (f) {}
        return b
    };
    _.C = function(a) {
        return _.rf(Bf).o(a.j, a.defaultValue)
    };
    _.Cf = function(a) {
        return _.rf(Bf).m(a.j, a.defaultValue)
    };
    Df = function(a) {
        return _.rf(Bf).H(a.j, a.defaultValue)
    };
    Jf = function(a, b, c, d, e) {
        var f = new Ef,
            g = Ff(c, b),
            h = _.t(g, "flatMap").call(g, function(k) {
                return k.m()
            }).map(function(k) {
                return k.m()
            });
        Gf(f, a, b, h, e);
        Hf(f, g.concat(null != d ? d : []), c, b, a);
        if (!Te(f, If, 2).length) return null;
        yf(50, "");
        return Pb(f.m(), 3)
    };
    Hf = function(a, b, c, d, e) {
        if (d && c && b && "function" === typeof c.getUserIdsAsEidBySource) {
            if ("function" === typeof c.getUserIdsAsEids) try {
                for (var f = _.w(c.getUserIdsAsEids()), g = f.next(); !g.done; g = f.next()) {
                    var h = g.value;
                    "string" === typeof h.source && yf(52, h.source)
                }
            } catch (m) {
                var k;
                yf(45, "", null == (k = m) ? void 0 : k.message)
            }
            b = _.w(b);
            for (f = b.next(); !f.done; f = b.next())
                if (f = f.value, String(_.Kf(f, 1)) === d)
                    for (f = _.w(f.m()), g = f.next(); !g.done; g = f.next())
                        if (g = g.value, _.E(g, Lf(g, Mf, 3)) && (g = g.m(), !Nf(a, g))) {
                            h = null;
                            try {
                                var l = k = void 0,
                                    n = void 0;
                                h = null == (k = c.getUserIdsAsEidBySource(g)) ? void 0 : null == (l = k.uids) ? void 0 : null == (n = l[0]) ? void 0 : n.id
                            } catch (m) {
                                k = void 0, yf(45, g, null == (k = m) ? void 0 : k.message)
                            }
                            h ? 300 < h.length ? (k = {}, yf(12, g, null, (k.sl = String(h.length), k.fp = "1", k))) : (k = Of(g), k = _.z(k, 2, h), k = _.z(k, 11, !0), _.Pf(a, 2, If, k), k = {}, yf(19, g, null, (k.fp = "1", k.hs = h ? "1" : "0", k))) : (k = h = void 0, e && (null == (h = Qf().get(g, e).zb) ? 0 : null == (k = y(h, 2)) ? 0 : k.length) && yf(51, g))
                        }
        }
    };
    Gf = function(a, b, c, d, e) {
        if (b)
            for (var f = _.w(Af(b)), g = f.next(); !g.done; g = f.next()) {
                g = g.value;
                var h = void 0;
                if (null == (h = d) || !_.t(h, "includes").call(h, g))
                    if (h = Qf().get(g, b).zb) {
                        var k = Rf(h);
                        if (2 !== k && 3 !== k) {
                            k = !1;
                            if (c) {
                                var l = void 0,
                                    n = null == (l = e) ? void 0 : l.get(c);
                                if (n && !n.has(g)) continue;
                                if ((l = /^(\d+)$/.exec(g)) && !(k = _.t(c.split(","), "includes").call(c.split(","), l[1]))) continue
                            }
                            _.z(h, 9, k);
                            k = y(h, 2);
                            _.Pf(a, 2, If, h);
                            h = {};
                            yf(19, g, null, (h.hs = k ? "1" : "0", h))
                        }
                    }
            }
    };
    Ff = function(a, b) {
        if (!b || "function" !== typeof(null == a ? void 0 : a.getUserIdsAsEidBySource)) return [];
        a = [];
        for (var c = _.w(Df(Sf)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = null;
            try {
                e = Tf(d)
            } catch (f) {
                d = void 0;
                yf(44, "UNKNOWN_ID", null == (d = f) ? void 0 : d.message);
                continue
            }
            _.Kf(e, 1) === b && a.push(e)
        }
        return a
    };
    Nf = function(a, b) {
        return Te(a, If, 2).some(function(c) {
            return y(c, 1) === b && _.Uf(c, 2)
        })
    };
    Xf = function(a, b, c) {
        var d, e, f, g, h, k;
        return _.Ab(function(l) {
            if (1 == l.j) return d = c ? a.filter(function(n) {
                return !n.Bb
            }) : a, Bb(l, _.v.Promise.all(d.map(function(n) {
                return n.jb.promise
            })), 2);
            if (4 != l.j) {
                if (a.length === d.length) return l.return(0);
                e = a.filter(function(n) {
                    return n.Bb
                });
                f = _.mf();
                if (_.C(Vf)) {
                    g = _.w(b);
                    for (h = g.next(); !h.done; h = g.next()) k = h.value, Wf(k);
                    return Bb(l, _.v.Promise.all(e.map(function(n) {
                        return n.jb.promise
                    })), 4)
                }
                return Bb(l, _.v.Promise.race([_.v.Promise.all(e.map(function(n) {
                    return n.jb.promise
                })), new _.v.Promise(function(n) {
                    return void setTimeout(n, c)
                })]), 4)
            }
            return l.return(_.mf() - f)
        })
    };
    Yf = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    bg = function(a, b, c, d) {
        yf(18, a);
        try {
            var e = _.mf();
            c().then(function(f) {
                yf(29, a, null, {
                    delta: String(_.mf() - e)
                });
                if (null == f) return yf(41, a), Zf(b, 111, d), b;
                null != f && ("string" !== typeof f ? yf(21, a) : f.length || yf(20, a));
                $f(_.z(b, 2, f), 10);
                Qf().set(b, d) && yf(27, a);
                return b
            }).catch(function(f) {
                Zf(b, 106, d);
                yf(28, a, ag(f));
                return b
            })
        } catch (f) {
            Zf(b, 107, d), yf(1, a, ag(f)), _.v.Promise.resolve(b)
        }
    };
    Zf = function(a, b, c) {
        var d;
        a.Fa(cg(null != (d = dg(a, eg, 10)) ? d : new eg, b));
        Qf().set(a, c)
    };
    og = function(a, b, c, d, e) {
        var f, g, h, k, l, n, m, p, r;
        return _.Ab(function(u) {
            return 1 == u.j ? (f = new fg, g = new gg(a, c, d, e), H(f, g), H(f, new hg(g.A, c, d, e)), h = new ig(g.l, e), H(f, h), k = new jg(h.l, e), H(f, k), l = new kg(b, k.l, e), H(f, l), H(f, new hg(l.l, c, d, e)), n = new lg(l.A, l.F, 300, 1E3, e), H(f, n), H(f, new hg(n.l, c, d, e)), H(f, new mg(b, k.A, c, d, e)), ng(f), r = a, Bb(u, n.l.promise, 2)) : u.return({
                id: r,
                collectorGeneratedData: null != (p = null == (m = u.o) ? void 0 : y(m, 2)) ? p : null
            })
        })
    };
    vg = function(a, b, c) {
        var d = {
            Te: _.C(pg)
        };
        d = void 0 === d ? qg : d;
        b ? rg() !== sg(window) ? yf(16, "") : tg(a, "encryptedSignalProviders", c) && tg(a, "secureSignalProviders", c) || (yf(38, ""), ug(a, "encryptedSignalProviders", b, c, d), ug(a, "secureSignalProviders", b, c, d)) : yf(15, "")
    };
    tg = function(a, b, c) {
        if (void 0 === a[b] || a[b] instanceof Array) return !1;
        a[b].addErrorHandler(c);
        return !0
    };
    ug = function(a, b, c, d, e) {
        var f, g = new wg(null != (f = a[b]) ? f : [], c, "secureSignalProviders" === b, e);
        a[b] = new xg(g);
        g.addErrorHandler(d)
    };
    Bg = function(a, b) {
        var c = new fg,
            d = new yg(b);
        a = new zg(d.B, a, b);
        Ag(c, [d, a]);
        ng(c)
    };
    Og = function(a, b, c, d, e) {
        if (!c) return null;
        var f = b.toString();
        if (Cg.has(f)) return null;
        Cg.add(f);
        f = new fg;
        a = new gg(a, c, d, e);
        var g = new hg(a.A, c, d, e),
            h = new Dg(a.l, e),
            k = new ig(h.l, e);
        b = new Eg(k.l, b, e);
        c = new hg(b.l, c, d, e);
        Ag(f, [a, g, h, k, b, c]);
        ng(f);
        return f
    };
    Pg = function(a, b) {
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !(_.B = c.allowedFeatures(), _.t(_.B, "includes")).call(_.B, a))
    };
    Rg = function(a) {
        _.rf(Qg).j(a)
    };
    Vg = function() {
        if (void 0 === b) {
            var a = void 0 === a ? _.q : a;
            var b = a.ggeac || (a.ggeac = {})
        }
        a = b;
        Sg(_.rf(sf), a);
        Tg(b);
        Ug(_.rf(Qg), b);
        _.rf(Bf).C()
    };
    Tg = function(a) {
        var b = _.rf(Bf);
        b.o = function(c, d) {
            return qf(5, a, function() {
                return !1
            })(c, d, 2)
        };
        b.m = function(c, d) {
            return qf(6, a, function() {
                return 0
            })(c, d, 2)
        };
        b.j = function(c, d) {
            return qf(7, a, function() {
                return ""
            })(c, d, 2)
        };
        b.H = function(c, d) {
            return qf(8, a, function() {
                return []
            })(c, d, 2)
        };
        b.C = function() {
            qf(15, a, function() {})(2)
        }
    };
    $g = function(a) {
        var b = void 0 === b ? Wg : b;
        var c = _.t(Object, "assign").call(Object, {}, a),
            d = a.id,
            e = a.style;
        a = a.data;
        c = (delete c.id, delete c.style, delete c.data, c);
        if (_.t(Object, "keys").call(Object, c).length) throw Error("Invalid attribute(s): " + _.t(Object, "keys").call(Object, c));
        d = {
            id: d,
            style: e ? e : void 0
        };
        if (a)
            for (e = _.w(_.t(a, "entries").call(a)), a = e.next(); !a.done; a = e.next()) c = _.w(a.value), a = c.next().value, c = c.next().value, ge(Xg.test(a)), d[a] = c;
        _.Yg("div");
        return _.Zg("div", d, b)
    };
    eh = function(a) {
        ah();
        var b = bh.googleToken[5] || 0;
        a && (0 != b || ch[3] >= lf() ? dh.bf(a) : (dh.vd().push(a), dh.Tf()));
        ch[3] >= lf() && ch[2] >= lf() || dh.Tf()
    };
    ih = function(a, b, c, d) {
        var e = new _.fh,
            f = "",
            g = function(k) {
                try {
                    var l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                    f === l.paw_id && (_.De(a, "message", g), l.error ? e.reject(Error(l.error)) : e.resolve(d(l)))
                } catch (n) {}
            },
            h = gh(a);
        return h ? (_.yb(a, "message", g), f = c(h), e.promise) : (c = hh(a)) ? (f = String(Math.floor(2147483647 * _.Ye())), _.yb(a, "message", g), b(c, f), e.promise) : null
    };
    jh = function(a) {
        return ih(a, function(b, c) {
            var d, e;
            return void(null == (d = null != (e = b.getGmaQueryInfo) ? e : b.getGmaSig) ? void 0 : d.postMessage(c))
        }, function(b) {
            return b.getQueryInfo()
        }, function(b) {
            return b.signal
        })
    };
    kh = function(a) {
        return !!gh(a) || !!hh(a)
    };
    gh = function(a) {
        var b;
        if ("function" === typeof(null == (b = a.gmaSdk) ? void 0 : b.getQueryInfo)) return a.gmaSdk
    };
    hh = function(a) {
        var b, c, d, e, f, g;
        if ("function" === typeof(null == (b = a.webkit) ? void 0 : null == (c = b.messageHandlers) ? void 0 : null == (d = c.getGmaQueryInfo) ? void 0 : d.postMessage) || "function" === typeof(null == (e = a.webkit) ? void 0 : null == (f = e.messageHandlers) ? void 0 : null == (g = f.getGmaSig) ? void 0 : g.postMessage)) return a.webkit.messageHandlers
    };
    lh = function(a) {
        var b, c;
        return null != (c = (_.B = ["pbjs"].concat(null != (b = a._pbjsGlobals) ? b : []).map(function(d) {
            return a[d]
        }), _.t(_.B, "find")).call(_.B, function(d) {
            return Array.isArray(null == d ? void 0 : d.que)
        })) ? c : null
    };
    mh = function(a, b, c, d) {
        try {
            if (a.setAttribute("data-google-query-id", c), !d) {
                null != b.googletag || (b.googletag = {
                    cmd: []
                });
                var e, f = null != (e = b.googletag.queryIds) ? e : [];
                f.push(c);
                500 < f.length && f.shift();
                b.googletag.queryIds = f
            }
        } catch (g) {}
    };
    _.uh = function(a) {
        var b = a.sa,
            c = a.ye,
            d = a.Cd,
            e = a.cf,
            f = a.Ja;
        a = a.Fg;
        var g = 0;
        try {
            g |= b != b.top ? 512 : 0;
            var h = Math.min(b.screen.width || 0, b.screen.height || 0);
            g |= h ? 320 > h ? 8192 : 0 : 2048;
            var k;
            if (k = b.navigator) {
                var l = b.navigator.userAgent;
                k = /Android 2/.test(l) || /iPhone OS [34]_/.test(l) || /Windows Phone (?:OS )?[67]/.test(l) || /MSIE.*Windows NT/.test(l) || /Windows NT.*Trident/.test(l)
            }
            g |= k ? 1048576 : 0;
            g = c ? g | (b.innerHeight >= c ? 0 : 1024) : g | (_.nh(b) ? 0 : 8);
            g |= oh(b, d);
            g |= ph(b)
        } catch (n) {
            g |= 32
        }
        switch (e) {
            case 2:
                c = f;
                c = void 0 === c ? null : c;
                d = qh(b.innerWidth, 3, 0, Math.min(Math.round(b.innerWidth / 320 * 50), rh) + 15, 3);
                null != sh(b, d, void 0 === c ? null : c) && (g |= 16777216);
                break;
            case 1:
                c = f, c = void 0 === c ? null : c, d = b.innerWidth, e = b.innerHeight, h = Math.min(Math.round(b.innerWidth / 320 * 50), rh) + 15, k = qh(d, 3, e - h, e, 3), 25 < h && k.push({
                    x: d - 25,
                    y: e - 25
                }), null != sh(b, k, void 0 === c ? null : c) && (g |= 16777216)
        }
        a && null != _.th(b, void 0 === f ? null : f) && (g |= 16777216);
        return g
    };
    _.th = function(a, b) {
        b = void 0 === b ? null : b;
        var c = a.innerHeight;
        c = qh(a.innerWidth, 10, c - 45, c, 10);
        return sh(a, c, b)
    };
    sh = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = _.w(b);
        for (var d = b.next(); !d.done; d = b.next()) {
            var e = a,
                f = d.value;
            d = c;
            d = void 0 === d ? null : d;
            var g = e.document;
            var h = f.x,
                k = f.y;
            g.hasOwnProperty("_goog_efp_called_") || (g._goog_efp_called_ = g.elementFromPoint(h, k));
            if (g = g.elementFromPoint(h, k)) {
                if (!(h = vh(g, e, f, d))) a: {
                    d = void 0 === d ? null : d;h = e.document;
                    for (g = g.offsetParent; g && g !== h.body; g = g.offsetParent)
                        if (k = vh(g, e, f, d)) {
                            h = k;
                            break a
                        }
                    h = null
                }
                d = h || null
            } else d = null;
            if (d) return d
        }
        return null
    };
    qh = function(a, b, c, d, e) {
        for (var f = [], g = 0; g < e; g++)
            for (var h = 0; h < b; h++) {
                var k = f,
                    l = b - 1,
                    n = e - 1;
                k.push.call(k, {
                    x: (0 === l ? 0 : h / l) * a,
                    y: c + (0 === n ? 0 : g / n) * (d - c)
                })
            }
        return f
    };
    vh = function(a, b, c, d) {
        d = void 0 === d ? null : d;
        if ("fixed" !== wh(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" === a.getAttribute("class") || 1 >= _.xh(_.yh, a).width && 1 >= _.xh(_.yh, a).height ? !0 : !1;
        if (d) {
            var f, g;
            _.zh(d, "ach_evt", {
                tn: a.tagName,
                id: null != (f = a.getAttribute("id")) ? f : "",
                cls: null != (g = a.getAttribute("class")) ? g : "",
                ign: String(e),
                pw: b.innerWidth,
                ph: b.innerHeight,
                x: c.x,
                y: c.y
            }, !0, 1)
        }
        return e ? null : a
    };
    Bh = function(a, b) {
        b = void 0 === b ? [] : b;
        var c = Date.now();
        return _.Ah(b, function(d) {
            return c - d < 1E3 * a
        })
    };
    Dh = function(a, b) {
        try {
            var c = a.getItem("__lsv__");
            if (!c) return [];
            try {
                var d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || _.Ch(d, function(e) {
                    return !_.t(Number, "isInteger").call(Number, e)
                })) return a.removeItem("__lsv__"), [];
            d = Bh(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (e) {
            return null
        }
    };
    Eh = function(a, b) {
        .001 > _.Ye() && af({
            c: a,
            s: b
        }, "gpt_whirs")
    };
    Fh = function(a) {
        var b = a.split("/");
        return "/" === a.charAt(0) && 2 <= b.length ? b[1] : "/" !== a.charAt(0) && 1 <= b.length ? b[0] : ""
    };
    _.Ih = function(a) {
        _.rf(Gh).j = !0;
        return Hh[a]
    };
    Mh = function(a) {
        var b = new Jh;
        b = _.md(b, 1, Date.now());
        b = _.md(b, 2, a.pvsid);
        b = _.nd(b, 3, a.nb || a.Wa);
        var c = _.rf(sf).j();
        b = _.ed(b, 4, c, Ec);
        b = _.md(b, 5, a.Fh);
        a = _.nd(b, 12, a.Pg);
        var d;
        if (b = null == (d = _.v.globalThis.performance) ? void 0 : d.memory) {
            d = new Kh;
            try {
                _.md(d, 1, b.jsHeapSizeLimit)
            } catch (e) {}
            try {
                _.md(d, 2, b.totalJSHeapSize)
            } catch (e) {}
            try {
                _.md(d, 3, b.usedJSHeapSize)
            } catch (e) {}
        } else d = void 0;
        d && _.Lh(a, 10, d);
        return a
    };
    Qh = function(a) {
        var b = pf();
        if (a.Rc) {
            var c = a.Pb;
            a = Mh(a);
            var d = new Nh;
            b = _.md(d, 2, b);
            b = _.Oh(a, 6, Ph, b);
            ze(c, b)
        }
    };
    I = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return function() {
            var e = _.wb.apply(0, arguments),
                f = Rh(a, b, c, d).apply(this, e);
            try {
                var g = e.length;
                if (a.Rc && a.mi) {
                    var h = a.Pb,
                        k = Mh(a);
                    var l = _.md(k, 5, a.Eh);
                    var n = new Sh;
                    var m = _.fd(n, 1, b, 0);
                    var p = _.fd(m, 2, g, 0);
                    var r = _.Oh(l, 9, Ph, p);
                    ze(h, r)
                }
            } catch (u) {}
            return f
        }
    };
    Rh = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        return function() {
            var e = _.wb.apply(0, arguments),
                f = void 0,
                g = !1,
                h = null,
                k = _.rf(Th);
            try {
                var l = _.C(Uh);
                l && k && (h = k.start(b.toString(), 3));
                f = c.apply(this, e);
                g = !0;
                l && k && k.end(h)
            } catch (n) {
                try {
                    if (g) Vh.call(this, a, 110, n);
                    else if (Vh.call(this, a, b, n), !d) throw n;
                } catch (m) {
                    if (_.Wh(h), !g && !d) throw n;
                }
            }
            return f
        }
    };
    Xh = function(a, b, c, d) {
        return Rh(a, b, c, void 0 === d ? !1 : d)()
    };
    Vh = function(a, b, c) {
        if (a.cg) {
            var d;
            c = c.error && c.meta && c.id ? c.error : c;
            var e = new Yh,
                f = new Zh;
            try {
                var g = wf(window);
                _.md(f, 1, g)
            } catch (n) {}
            try {
                var h = _.rf(sf).j();
                _.ed(f, 2, h, Ec)
            } catch (n) {}
            try {
                _.nd(f, 3, window.document.URL)
            } catch (n) {}
            g = _.Lh(e, 2, f);
            h = new $h;
            b = _.fd(h, 1, b, 0);
            try {
                _.nd(b, 2, "string" === typeof(null == c ? void 0 : c.name) ? c.name : "Unknown error")
            } catch (n) {}
            try {
                _.nd(b, 3, "string" === typeof(null == c ? void 0 : c.message) ? c.message : "Caught " + c)
            } catch (n) {}
            try {
                (d = "string" === typeof(null == c ? void 0 : c.stack) ? c.stack : Error().stack) && _.ed(b, 4, d.split(/\n\s*/), _.Hc)
            } catch (n) {}
            d = _.Lh(g, 1, b);
            b = new ai;
            try {
                _.nd(b, 1, a.nb || a.Wa)
            } catch (n) {}
            try {
                var k = bi();
                _.fd(b, 2, k, 0)
            } catch (n) {}
            try {
                var l = [].concat(_.xe(_.t(ci, "keys").call(ci)));
                _.ed(b, 3, l, _.Hc)
            } catch (n) {}
            _.Oh(d, 4, di, b);
            _.md(d, 5, a.lf);
            ye(a.Pb, d)
        }
    };
    gi = function(a, b) {
        var c, d;
        return null != (d = null == (c = _.t(a, "find").call(a, function(e) {
            e = dg(e, ei, 1);
            return fi(e, 1) <= fi(b, 1) && fi(e, 2) <= fi(b, 2)
        })) ? void 0 : Te(c, ei, 2)) ? d : null
    };
    ki = function(a, b, c) {
        return "number" === typeof b && "number" === typeof c && Te(a, hi, 6).length ? gi(Te(a, hi, 6), ii(ji(new ei, b), c)) : Te(a, ei, 5)
    };
    mi = function(a) {
        var b = void 0 === b ? window : b;
        var c = null;
        b.top === b && (b = li(!1, b), c = ki(a, b.width, b.height));
        null != c || (c = ki(a));
        return null == c ? [] : c.map(function(d) {
            return _.E(d, 3) ? "fluid" : [fi(d, 1), fi(d, 2)]
        })
    };
    ni = function(a) {
        var b = [],
            c = !1;
        a = _.w(mi(a));
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, Array.isArray(d) ? b.push(d.join("x")) : "fluid" === d ? c = !0 : b.push(d);
        c && b.unshift("320x50");
        return b.join("|")
    };
    pi = function(a, b) {
        b = void 0 === b ? null : b;
        var c = [];
        a && (c.push(y(a, 1)), c.push(ni(a)), c.push(y(a, 2)));
        if (b) {
            a = [];
            for (var d = 0; b && 25 > d; b = b.parentNode, ++d) 9 === b.nodeType ? a.push("") : a.push(b.id);
            (b = a.join()) && c.push(b)
        }
        return c.length ? _.oi(c.join(":")).toString() : "0"
    };
    qi = function(a) {
        return 0 !== a && 1 !== a
    };
    si = function(a, b) {
        var c;
        return !(null != (c = ri(b, 22)) ? !c : !_.E(a, 15))
    };
    Mi = function(a) {
        var b = a.document;
        return Li(a) ? b.URL : b.referrer
    };
    Pi = function(a) {
        try {
            return Ni(a, window.top)
        } catch (b) {
            return new _.Oi(-12245933, -12245933)
        }
    };
    Si = function(a) {
        if (!a) return null;
        var b, c;
        a.getBoundingClientRect ? (a = _.xh(Qi, a), a = new _.Ri(a.right - a.left, a.bottom - a.top)) : a = null;
        return null != (c = null == (b = a) ? void 0 : b.floor()) ? c : null
    };
    Ui = function(a, b) {
        for (var c = {}, d = _.w(_.t(Object, "keys").call(Object, b)), e = d.next(); !e.done; e = d.next()) {
            e = e.value;
            var f = _.Id(b[e], !1),
                g = _.rf(Ti),
                h = g.j.get(e);
            null == h ? h = ++_.rf(Th).m : g.j.delete(e);
            _.z(f, 20, h);
            c[e] = f
        }
        return {
            U: _.Id(a, !1),
            V: c
        }
    };
    Wi = function() {
        for (var a = "", b = _.w(Vi()), c = b.next(); !c.done; c = b.next()) c = c.value, 15 >= c && (a += "0"), a += c.toString(16);
        return a
    };
    Vi = function() {
        var a;
        if ("function" === typeof(null == (a = window.crypto) ? void 0 : a.getRandomValues)) return a = new Uint8Array(16), window.crypto.getRandomValues(a), a;
        a = window;
        var b;
        if ("function" === typeof(null == (b = a.msCrypto) ? void 0 : b.getRandomValues)) return b = new Uint8Array(16), a.msCrypto.getRandomValues(b), b;
        a = Array(16);
        for (b = 0; b < a.length; b++) a[b] = Math.floor(255 * Math.random());
        return a
    };
    cj = function(a, b, c, d) {
        var e = Xi(b, a) || Yi(b, a);
        if (!e) return null;
        var f = Pi(e),
            g = e === Yi(b, a),
            h = Zi(function() {
                var p = g ? Yi(b, a) : e;
                return p && $i(p, window)
            }),
            k = function(p) {
                var r;
                return null == (r = h()) ? void 0 : r.getPropertyValue(p)
            };
        c = mi(c)[0];
        var l = !1;
        Array.isArray(c) && (l = d ? g : 0 === f.x && "center" === k("text-align"));
        l && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - Number(c[0])) / 2));
        if (g) {
            var n;
            f.y += Math.round(Math.min(null != (n = aj(k("padding-top"))) ? n : 0, e.clientHeight));
            if (!l) {
                d = e.clientWidth;
                var m;
                f.x += Math.round(Math.min(null != (m = aj(k("padding-left"))) ? m : 0, d))
            }
        }
        return f && bj(e) ? f : new _.Oi(-12245933, -12245933)
    };
    dj = function(a, b, c, d) {
        var e = Yi(a, c),
            f = "none" === (null == e ? void 0 : e.style.display);
        f && (e.style.display = "block");
        a = cj(c, a, b, d);
        f && (e.style.display = "none");
        return a
    };
    ej = function(a) {
        return "google_ads_iframe_" + a.toString()
    };
    fj = function(a) {
        return ej(a) + "__container__"
    };
    Xi = function(a, b) {
        var c;
        return (null == (c = Yi(a, b)) ? void 0 : c.querySelector('[id="' + fj(a) + '"]')) || null
    };
    gj = function(a, b) {
        var c, d;
        return null != (d = null == (c = Xi(a, b)) ? void 0 : c.querySelector('iframe[id="' + ej(a) + '"]')) ? d : null
    };
    Yi = function(a, b) {
        b = void 0 === b ? document : b;
        return hj().m.get(a) || b.getElementById(a.getDomId())
    };
    ij = function(a) {
        return Math.round(Number(aj(a)))
    };
    kj = function(a, b, c) {
        for (var d = 100; a && a !== b && --d;) _.jj(a, c), a = a.parentElement
    };
    lj = function(a, b, c, d, e) {
        _.jj(a, {
            "margin-left": "0px",
            "margin-right": "0px"
        });
        var f = {},
            g = "rtl" === d.direction,
            h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
        d = function() {
            var k = a.getBoundingClientRect().left;
            return g ? h - k : k - h
        };
        b = d();
        return 0 !== b ? (c = function(k) {
            g ? f["margin-right"] = k + "px" : f["margin-left"] = k + "px"
        }, c(-b), _.jj(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.jj(a, f)), !0) : !1
    };
    nj = function(a, b, c, d, e, f, g, h, k) {
        var l = ni(d);
        _.q.setTimeout(Rh(a, 459, function() {
            return void mj(a, b, c, e, f, g, l, h, k)
        }), 500)
    };
    mj = function(a, b, c, d, e, f, g, h, k) {
        if (_.q.IntersectionObserver) {
            var l = null,
                n, m = null != (n = gj(c, b)) ? n : Yi(c, b);
            n = Rh(a, 459, function(p) {
                if (p = p && p[0]) {
                    var r = p.boundingClientRect,
                        u = window.innerWidth,
                        x = Math.round(r.left),
                        G = Math.round(r.right),
                        D = 0 > x + 2,
                        F = 0 < G - (u + 2);
                    if (p.intersectionRatio >= 1 - ((0 <= Math.round(r.left) ? 0 : 2) + (Math.round(r.right) <= window.innerWidth ? 0 : 2)) / e || D || F) oj(h, function(N) {
                        var L = D || F;
                        var R = new pj,
                            S = _.C(qj);
                        (L || S) && rj(m, L, S) && R.set(10);
                        L ? (R.set(8), L = sj(R)) : L = tj(b, c, R);
                        S = uj(c, m, f);
                        R = S.yh;
                        S = S.zh;
                        vj(N, a);
                        J(N, "qid", k);
                        J(N, "iu", c.getAdUnitPath());
                        J(N, "e", String(L));
                        D && J(N, "ofl", String(x));
                        F && J(N, "ofr", String(G - u));
                        J(N, "ret", e + "x" + f);
                        J(N, "req", g);
                        J(N, "bm", String(d));
                        J(N, "efh", Number(R));
                        J(N, "stk", Number(S));
                        J(N, "ifi", wj(window))
                    }, _.Cf(xj)), l && l.unobserve(m)
                }
            });
            m && (l = new _.q.IntersectionObserver(n, {
                threshold: [1]
            }), l.observe(m))
        }
    };
    tj = function(a, b, c) {
        var d = gj(b, a) || Yi(b, a);
        try {
            var e = d.getBoundingClientRect(),
                f = e.left,
                g = e.top,
                h = e.width,
                k = e.height,
                l = Yi(b, a),
                n = $i(l, window);
            if ("hidden" === n.visibility || "none" === n.display) return sj(c);
            var m = ij(n.getPropertyValue("border-top-width") || 0) + 1;
            b = f + h;
            k = g + k;
            var p = a.elementsFromPoint(f + m + 2, g + m);
            var r = a.elementsFromPoint(b - m - 2, g + m);
            var u = a.elementsFromPoint(b - m - 2, k - m);
            var x = a.elementsFromPoint(f + m + 2, k - m);
            var G = a.elementsFromPoint(b / 2, k - m)
        } catch (F) {
            return c.set(1), sj(c)
        }
        if (!(p && p.length && r && r.length && u && u.length && x && x.length && G && G.length)) return c.set(7), sj(c);
        a = function(F, N) {
            for (var L = !1, R = 0; R < F.length; R++) {
                var S = F[R];
                if (L) {
                    var V = $i(S, window);
                    if ("hidden" !== V.visibility && !yj(S) && !D(d, S)) {
                        c.set(N);
                        "absolute" === V.position && c.set(11);
                        break
                    }
                } else d === S && (L = !0)
            }
        };
        zj(d) && c.set(9);
        var D = function(F, N) {
            return Aj(F, N) || Aj(N, F)
        };
        f = p[0];
        d === f || D(d, f) || yj(f) || c.set(2);
        f = r[0];
        d === f || D(d, f) || yj(f) || c.set(3);
        f = u[0];
        d === f || D(d, f) || yj(f) || c.set(4);
        f = x[0];
        d === f || D(d, f) || yj(f) || c.set(5);
        if (yj(d)) return sj(c);
        a(p, 12);
        a(r, 13);
        a(u, 14);
        a(x, 15);
        a(G, 6);
        return sj(c)
    };
    rj = function(a, b, c) {
        var d = !1,
            e = !1;
        return Bj(a, function(f, g) {
            e = e || "scroll" === f.overflowX || "auto" === f.overflowX;
            d = d || "flex" === f.display;
            return b && d && e || c && "listbox" === g.role
        })
    };
    uj = function(a, b, c) {
        var d = (a = Yi(a)) && $i(a, window),
            e = d ? "absolute" !== d.position : !0,
            f = !1,
            g = a && a.parentElement,
            h = !1;
        Cj(b, function(k) {
            var l = k.style;
            if (e)
                if (h || (h = k === g)) e = Dj(k, _.q, -1, -1);
                else {
                    l = l && l.height;
                    var n = (l && _.t(l, "endsWith").call(l, "px") ? ij(l) : 0) >= c;
                    !l || n || "string" === typeof l && _.t(Ej, "includes").call(Ej, l) || (e = !1)
                }
            f || (k = $i(k, _.q), "sticky" !== k.position && "fixed" !== k.position) || (f = !0);
            return !(f && !e)
        }, 100);
        return {
            yh: e,
            zh: f
        }
    };
    Dj = function(a, b, c, d) {
        var e = a.style;
        return (null == e ? 0 : e.height) && !_.t(Ej, "includes").call(Ej, e.height) || (null == e ? 0 : e.maxHeight) && !_.t(Fj, "includes").call(Fj, e.maxHeight) || Gj(a, b.document, function(f) {
            var g = f.style.height;
            f = f.style.getPropertyValue("max-height");
            return !!g && !_.t(Ej, "includes").call(Ej, g) || !!f && !_.t(Fj, "includes").call(Fj, f)
        }, c, d) ? !1 : !0
    };
    Gj = function(a, b, c, d, e) {
        b = b.styleSheets;
        if (!b) return !1;
        var f = a.matches || a.msMatchesSelector;
        d = -1 === d ? Infinity : d;
        e = -1 === e ? Infinity : e;
        for (var g = 0; g < Math.min(b.length, d); ++g) {
            var h = null;
            try {
                var k = b[g],
                    l = null;
                try {
                    l = k.cssRules || k.rules
                } catch (N) {
                    if (15 == N.code) throw N.styleSheet = k, N;
                }
                h = l
            } catch (N) {
                continue
            }
            l = void 0;
            if (null != (l = h) && l.length)
                for (l = 0; l < Math.min(h.length, e); ++l) try {
                    var n = h[l],
                        m, p = c;
                    if (!(m = f.call(a, n.selectorText) && p(n))) a: {
                        var r = void 0;p = a;
                        var u = c,
                            x = e,
                            G = null != (r = n.cssRules) ? r : [];
                        for (r = 0; r < Math.min(G.length, x); r++) {
                            var D = G[r],
                                F = u;
                            if (f.call(p, D.selectorText) && F(D)) {
                                m = !0;
                                break a
                            }
                        }
                        m = !1
                    }
                    if (m) return !0
                } catch (N) {}
        }
        return !1
    };
    yj = function(a) {
        return Bj(a, function(b) {
            return "fixed" === b.position || "sticky" === b.position
        })
    };
    zj = function(a) {
        return Bj(a, function(b) {
            var c;
            return (_.B = ["left", "right"], _.t(_.B, "includes")).call(_.B, null != (c = b["float"]) ? c : b.cssFloat)
        })
    };
    Hj = function(a) {
        return "number" === typeof a || "string" === typeof a
    };
    Ij = function(a, b) {
        /^(uuid-in-package|urn:uuid):[0-9a-fA-F-]*$/.test(b) && (b = ue(b), a.src = _.lb(b).toString())
    };
    Kj = function(a, b, c) {
        c = void 0 === c ? Jj : c;
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? c(a, b) : _.yb(a, "load", function() {
            return void c(a, b)
        }))
    };
    Lj = function(a) {
        try {
            var b, c;
            return (null != (c = null == (b = a.top) ? void 0 : b.frames) ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    };
    Mj = function(a) {
        var b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    };
    Nj = function(a) {
        if (a === a.top || _.qe(a.top)) return _.v.Promise.resolve({
            status: 4
        });
        var b = Lj(a);
        if (!b) return _.v.Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && Mj(a.document.referrer)) return _.v.Promise.resolve({
            status: 3
        });
        var c = new _.fh;
        a = new MessageChannel;
        a.port1.onmessage = function(d) {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Bc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    Rj = function(a) {
        var b = void 0 === b ? Oj : b;
        var c = Pj(a);
        return c.messageChannelSendRequestFn ? _.v.Promise.resolve(c.messageChannelSendRequestFn) : new _.v.Promise(function(d) {
            function e(k) {
                return h.j(k).then(function(l) {
                    return l.data
                })
            }
            var f = _.Ce("IFRAME");
            f.style.display = "none";
            f.name = "goog_topics_frame";
            f.src = _.lb(b).toString();
            var g = (new URL(b.toString())).origin,
                h = Qj({
                    destination: a,
                    yd: f,
                    origin: g,
                    bb: "goog:gRpYw:doubleclick"
                });
            h.j("goog:topics:frame:handshake:ack").then(function(k) {
                "goog:topics:frame:handshake:ack" === k.data && d(e)
            });
            c.messageChannelSendRequestFn = e;
            a.document.documentElement.appendChild(f)
        })
    };
    Xj = function(a, b, c, d) {
        var e = _.C(Sj);
        e = void 0 === e ? !1 : e;
        var f = Tj(d),
            g = f.hd,
            h = f.gd;
        b = Pj(b);
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e
        }).then(function(k) {
            var l = h;
            if (k instanceof Uint8Array) l || (l = !(g instanceof Uint8Array && Aa(k, g)));
            else if (Ge()(k)) l || (l = k !== g);
            else return c.Yb(989, Error(JSON.stringify(k))), 7;
            if (l && d) try {
                var n = new Uj;
                var m = _.z(n, 2, _.mf());
                k instanceof Uint8Array ? Vj(m, 1, Wj, yc(k, !1, !1)) : Vj(m, 3, Wj, k);
                d.setItem("goog:cached:topics", Qe(m))
            } catch (p) {}
            return k
        }), b.getTopicsPromise = a);
        return g && !h ? _.v.Promise.resolve(g) : b.getTopicsPromise
    };
    Tj = function(a) {
        if (!a) return {
            hd: null,
            gd: !0
        };
        try {
            var b = a.getItem("goog:cached:topics");
            if (!b) return {
                hd: null,
                gd: !0
            };
            var c = Yj(b),
                d = Zj(c, Wj);
            switch (d) {
                case 0:
                    var e = null;
                    break;
                case 1:
                    var f = Lf(c, Wj, 1),
                        g = y(c, f),
                        h = yc(g, !0, !!(ic(c.fa) & 18));
                    null != h && h !== g && Wc(c, f, h);
                    var k = null == h ? xc() : h;
                    var l = ak(k);
                    e = l ? new Uint8Array(l) : bk || (bk = new Uint8Array(0));
                    break;
                case 3:
                    e = _.Ve(c, Lf(c, Wj, 3), 0);
                    break;
                default:
                    hb(d)
            }
            var n = _.df(c, 2) + 6048E5 < _.mf();
            return {
                hd: e,
                gd: n
            }
        } catch (m) {
            return {
                hd: null,
                gd: !0
            }
        }
    };
    Pj = function(a) {
        var b;
        return null != (b = a.google_tag_topics_state) ? b : a.google_tag_topics_state = {}
    };
    ek = function(a) {
        if (Wa()) {
            var b = a.document.documentElement.lang;
            ck(a) ? dk(wf(a), !0, "", b) : (new MutationObserver(function(c, d) {
                ck(a) && (dk(wf(a), !1, b, a.document.documentElement.lang), d.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    };
    ck = function(a) {
        var b, c;
        a = null == (b = a.document) ? void 0 : null == (c = b.documentElement) ? void 0 : c.classList;
        return !!((null == a ? 0 : a.contains("translated-rtl")) || (null == a ? 0 : a.contains("translated-ltr")))
    };
    dk = function(a, b, c, d) {
        af({
            ptt: "17",
            pvsid: "" + a,
            ibatl: String(b),
            pl: c,
            nl: d
        }, "translate-event")
    };
    fk = function(a) {
        var b = "";
        pe(function(c) {
            if (c === c.top) return !0;
            var d;
            if (null == (d = c.document) ? 0 : d.referrer) b = c.document.referrer;
            return !1
        }, !1, !1, a);
        return b
    };
    gk = function(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    };
    hk = function(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    };
    jk = function() {
        var a = window;
        if (!hk(a)) return null;
        var b = gk(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ik).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    };
    vk = function(a) {
        var b;
        return kk(lk(mk(nk(ok(pk(qk(rk(sk(new tk, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new uk;
            d = _.z(d, 1, c.brand);
            return _.z(d, 2, c.version)
        })) || []), a.wow64 || !1)
    };
    wk = function() {
        var a, b;
        return null != (b = null == (a = jk()) ? void 0 : a.then(function(c) {
            return vk(c)
        })) ? b : null
    };
    zk = function(a, b) {
        var c = xk.get(a);
        c || (b = c = b(), yk.set(b, a), xk.set(a, b));
        return c
    };
    Bk = function(a, b) {
        return zk(b, function() {
            return new Ak(a, b)
        })
    };
    K = function(a) {
        return function() {
            return new Ck(a, [].concat(_.xe(_.wb.apply(0, arguments))))
        }
    };
    Dk = function(a) {
        return "[" + a.map(function(b) {
            return "string" === typeof b ? "'" + b + "'" : Array.isArray(b) ? Dk(b) : String(b)
        }).join(", ") + "]"
    };
    Ek = function(a, b) {
        b = Dk(b);
        b = b.substring(1, b.length - 1);
        return new Ck(96, [a, b])
    };
    Fk = function(a) {
        return (_.B = "rewardedSlotReady rewardedSlotGranted rewardedSlotClosed slotAdded slotRequested slotResponseReceived slotRenderEnded slotOnload slotVisibilityChanged impressionViewable".split(" "), _.t(_.B, "includes")).call(_.B, a) ? a : null
    };
    Hk = function(a, b, c) {
        return zk(c, function() {
            return new Gk(a, b, c)
        })
    };
    Jk = function(a, b, c) {
        return zk(c, function() {
            return new Ik(a, b, c)
        })
    };
    Kk = function() {
        var a;
        return null != (a = _.q.googletag) ? a : _.q.googletag = {
            cmd: []
        }
    };
    Lk = function() {
        var a = Kk();
        a.hasOwnProperty("pubadsReady") || (a.pubadsReady = !0)
    };
    Ok = function(a) {
        var b = window;
        "complete" === _.q.document.readyState ? Xh(a, 94, function() {
            Kk()._pubconsole_disable_ || null !== Mk(b) && Nk(a, b)
        }) : _.yb(_.q, "load", Rh(a, 94, function() {
            Kk()._pubconsole_disable_ || null !== Mk(b) && Nk(a, b)
        }))
    };
    Nk = function(a, b) {
        b = void 0 === b ? _.q : b;
        if (!Pk) {
            var c = new Qk("gpt_pubconsole_loaded");
            vj(c, a);
            J(c, "param", String(Mk(b)));
            J(c, "api", String(Rk));
            Sk(c);
            Tk(b.document, Uk);
            Pk = !0
        }
    };
    Mk = function(a) {
        var b = Mi(a),
            c;
        return null != (c = (_.B = ["google_debug", "dfpdeb", "google_console", "google_force_console", "googfc"], _.t(_.B, "find")).call(_.B, function(d) {
            return null !== Vk(b, d)
        })) ? c : null
    };
    Wk = function() {
        Kk()._pubconsole_disable_ = !0
    };
    Zk = function() {
        Xk && (Kk().console.openConsole(Yk), Yk = void 0, Xk = !1)
    };
    fl = function(a, b, c, d, e) {
        if ("string" !== typeof c || $k(c)) M(e, Ek("Slot.setTargeting", [c, d]), a);
        else {
            var f = [];
            Array.isArray(d) ? f = d : xa(d) ? f = _.t(Array, "from").call(Array, d) : d && (f = [d]);
            f = f.map(String);
            (d = (_.B = al(b), _.t(_.B, "find")).call(_.B, function(g) {
                return y(g, 1) === c
            })) ? bl(d, f): (d = bl(cl(new dl, c), f), _.Pf(b, 9, dl, d));
            e.info(el(c, f.join(), b.getAdUnitPath()), a)
        }
    };
    gl = function(a, b, c, d) {
        if (null != c && "object" === typeof c)
            for (var e = _.w(_.t(Object, "keys").call(Object, c)), f = e.next(); !f.done; f = e.next()) f = f.value, fl(a, b, f, c[f], d);
        else d.error(Ek("Slot.updateTargetingFromMap", [c]), a)
    };
    il = function(a, b, c) {
        return zk(c, function() {
            return new hl(a, b, c, c.m)
        })
    };
    jl = function(a) {
        return _.t(Object, "assign").call(Object, {}, a, _.t(Object, "fromEntries").call(Object, _.t(Object, "entries").call(Object, a).map(function(b) {
            b = _.w(b);
            var c = b.next().value;
            return [b.next().value, c]
        })))
    };
    nl = function() {
        var a = {},
            b = jl(kl);
        a.OutOfPageFormat = b;
        b = jl(ll);
        a.TrafficSource = b;
        b = jl(ml);
        a.Taxonomy = b;
        return a
    };
    pl = function() {
        for (var a = _.rf(Bf).j(ol.j, ol.defaultValue) || "0-0-0", b = a.split("-").map(function(e) {
                return Number(e)
            }), c = ["1", "0", "40"].map(function(e) {
                return Number(e)
            }), d = 0; d < b.length; d++) {
            if (b[d] > c[d]) return a;
            if (b[d] < c[d]) break
        }
        return "1-0-40"
    };
    tl = function() {
        if (ql) return ql;
        for (var a = Df(rl), b = [], c = 0; c < a.length; c += 2) sl(a[c], a[c + 1], b);
        return ql = b.join("&")
    };
    zl = function(a, b) {
        if (!b || !_.na(b)) return null;
        var c = !1,
            d = new ul;
        _.vl(b, function(e, f) {
            var g = !1;
            switch (f) {
                case "allowOverlayExpansion":
                    "boolean" === typeof e ? _.z(d, 1, b.allowOverlayExpansion) : c = g = !0;
                    break;
                case "allowPushExpansion":
                    "boolean" === typeof e ? _.z(d, 2, b.allowPushExpansion) : c = g = !0;
                    break;
                case "sandbox":
                    !0 === e ? _.z(d, 3, b.sandbox) : c = g = !0;
                    break;
                case "useUniqueDomain":
                    wl();
                    return;
                default:
                    g = !0
            }
            g && a.error(xl("setSafeFrameConfig", yl(b), f, yl(e)))
        });
        return c ? null : d
    };
    Bl = function(a) {
        var b = new ul;
        a = _.w(a);
        for (var c = a.next(); !c.done; c = a.next())
            if (c = c.value) Al(c, 1) && _.z(b, 1, _.E(c, 1)), Al(c, 2) && _.z(b, 2, _.E(c, 2)), Al(c, 3) && _.z(b, 3, _.E(c, 3)), Al(c, 4) && _.z(b, 4, _.E(c, 4));
        return b
    };
    Dl = function() {
        var a, b, c;
        return "pagead2.googlesyndication.com" === (null != (c = Cl.exec(null != (b = null == (a = _.Ih(172)) ? void 0 : a.src) ? b : "")) ? c : [])[1]
    };
    El = function(a) {
        return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en'
    };
    Fl = function(a, b) {
        var c = b.m;
        return a.map(function(d) {
            return _.t(c, "find").call(c, function(e) {
                return e.ma === d
            })
        }).filter(Ie())
    };
    Gl = function(a, b) {
        var c = [];
        a = _.w(a);
        for (var d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            b.C = d;
            var e = uf(9);
            1 === e.length && (c.push(d), c.push(d + "-" + e[0]))
        }
        return c
    };
    Jl = function(a, b, c, d, e, f) {
        var g = Hl(f, a, b, d, e, void 0, !0);
        f = g.slotId;
        g = g.rb;
        if (!f || !g) return M(b, Ek("PubAdsService.definePassback", [d, e])), null;
        _.z(g, 17, !0);
        c.slotAdded(f, g);
        return {
            Qf: il(a, b, new Il(a, f, c)),
            rb: g
        }
    };
    Ll = function(a, b, c, d, e) {
        return zk(c, function() {
            return new Kl(a, b, c, d, e)
        })
    };
    Nl = function(a) {
        return Array.isArray(a) && 2 === a.length ? a.every(Ml) : "fluid" === a
    };
    Ol = function(a) {
        return Array.isArray(a) && 2 === a.length && Ml(a[0]) && Ml(a[1])
    };
    Ql = function(a) {
        return Array.isArray(a) ? ii(ji(new ei, a[0]), a[1]) : Pl()
    };
    cm = function(a) {
        var b = [];
        if (Rl(a)) b.push(Ql(a));
        else if (Array.isArray(a)) {
            a = _.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, Rl(c) ? b.push(Ql(c)) : Aa(c, ["fluid"]) && b.push(Pl())
        }
        return b
    };
    em = function(a) {
        var b = void 0 === b ? window : b;
        if (!a) return [];
        if (!a.length) {
            var c, d;
            null == (c = b.console) || null == (d = c.warn) || d.call(c, "Invalid GPT fixed size specification: " + JSON.stringify(a))
        }
        return cm(a)
    };
    Rl = function(a) {
        return _.C(fm) ? Array.isArray(a) && 2 === a.length ? a.every(gm) : "fluid" === a : Array.isArray(a) && 1 < a.length ? "number" === typeof a[0] && "number" === typeof a[1] : "fluid" === a
    };
    va = function(a, b) {
        a: {
            b = b[0];a = a[0];
            for (var c = _.sa, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                var f = c(b[e], a[e]);
                if (0 != f) {
                    b = f;
                    break a
                }
            }
            b = _.sa(b.length, a.length)
        }
        return b
    };
    hm = function(a) {
        return Array.isArray(a) && 2 === a.length && "number" === typeof a[0] && _.t(a, "includes").call(a, 0)
    };
    im = function(a) {
        return hm(a) ? [] : Array.isArray(a) && 0 < a.length && "number" !== typeof a[0] ? a.filter(function(b) {
            return !hm(b)
        }) : a
    };
    km = function(a) {
        if (!Array.isArray(a) || 2 !== a.length) throw new jm("Each mapping entry must be an array of size 2");
        var b = a[0];
        if (!Ol(b)) throw new jm("Size must be an array of two non-negative integers");
        b = ii(ji(new ei, b[0]), b[1]);
        if (Array.isArray(a[1]) && 0 === a[1].length) a = [];
        else if (a = cm(a[1]), 0 === a.length) throw new jm("At least one slot size must be present");
        var c = new hi;
        b = _.Lh(c, 1, b);
        return _.Dd(b, 2, a)
    };
    mm = function(a, b, c) {
        return zk(c, function() {
            return new lm(a, b, c)
        })
    };
    om = function(a) {
        a = (_.qe(a.top) ? a.top : a).AMP;
        return "object" === typeof a && !!nm(a, function(b, c) {
            return !/^inabox/i.test(c)
        })
    };
    pm = function(a, b, c, d) {
        var e = _.Ce("DIV");
        e.id = b;
        e.name = b;
        b = e.style;
        b.border = "0pt none";
        c && (b.margin = "auto", b.textAlign = "center");
        d && (c = Array.isArray(d), b.width = c ? d[0] + "px" : "100%", b.height = c ? d[1] + "px" : "0%");
        a.appendChild(e);
        return e
    };
    qm = function(a) {
        return "sticky" === (null == a ? void 0 : a.position) || "fixed" === (null == a ? void 0 : a.position)
    };
    sm = function(a, b, c, d) {
        try {
            var e;
            if (!(e = !b)) {
                var f;
                if (!(f = !rm(b, c, d))) {
                    a: {
                        do {
                            var g = $i(b, c);
                            if (g && "fixed" == g.position) {
                                var h = !1;
                                break a
                            }
                        } while (b = b.parentElement);h = !0
                    }
                    f = !h
                }
                e = f
            }
            e && (a.height = -1)
        } catch (k) {
            a.width = -1, a.height = -1
        }
    };
    tm = function(a, b) {
        for (var c = new pj, d = 0; d < a.length; d++) c.set(a.length - d - 1, b(a[d]));
        return sj(c)
    };
    um = function(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = void 0 === c.Cc ? "" : c.Cc;
        c = void 0 === c.la ? "," : c.la;
        var e = !1;
        a = a.map(function(f) {
            f = b(f);
            e || (e = !!f);
            return String(f || d)
        });
        return e ? a.join(c) : null
    };
    wm = function(a, b, c, d) {
        for (var e = _.w(_.t(Object, "entries").call(Object, vm)), f = e.next(); !f.done; f = e.next()) {
            var g = _.w(f.value);
            f = g.next().value;
            g = g.next().value;
            b & f && M(a, g(c, d))
        }
    };
    Cm = function(a, b, c) {
        c = void 0 === c ? null : c;
        b = (void 0 === b ? 0 : b) ? 604800 : -1;
        if (!(0 < b) || c && ff(c)) {
            c = c ? gf(c) : null;
            var d = _.C(xm),
                e = 0;
            try {
                e |= a != a.top ? 512 : 0;
                d = void 0 === d ? !1 : d;
                var f;
                if (!(f = !a.navigator)) {
                    var g;
                    if (g = void 0 === d ? !1 : d) {
                        var h = a.navigator;
                        g = "brave" in h && "isBrave" in h.brave || !1
                    }
                    f = g
                }
                e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
                e |= oh(a, 2500);
                if (_.C(ym)) {
                    var k = _.zm(a).clientHeight;
                    e |= k ? 320 > k ? 2097152 : 0 : 1073741824
                }
                e |= ph(a);
                0 < b && !_.Am(_.Bm(c, b)) && (e |= 134217728)
            } catch (l) {
                e |= 32
            }
            a = e
        } else a = 4194304;
        return a
    };
    Gm = function(a, b, c, d, e, f) {
        d = Dm(d);
        if (5 !== d) return !1;
        var g = Cm(e, !Em(c), f);
        if (g &= -134217729) oj("gpt_int_ns", function(h) {
            J(h, "nsr", g);
            vj(h, a)
        }, _.Cf(Fm)), wm(b, g, d, c.getAdUnitPath());
        return !!g
    };
    Hm = function(a) {
        switch (a) {
            case 4:
                return 11;
            case 2:
                return 2;
            case 3:
                return 1;
            case 5:
                return 8;
            case 6:
                return 42
        }
    };
    Lm = function(a, b) {
        a = Hm(a);
        if (!a) return null;
        var c = 0;
        if (11 !== a) {
            c |= _.q != _.q.top ? 512 : 0;
            var d = _.Im(_.q);
            d = 26 !== a && 27 !== a && 40 !== a && 41 !== a && 10 !== a && d.adCount ? 1 == a || 2 == a ? !(!d.adCount[1] && !d.adCount[2]) : (d = d.adCount[a]) ? 1 <= d : !1 : !1;
            d && (c |= 64);
            if (c) return c
        }
        2 === a || 1 === a ? (b = {
            sa: _.q,
            Cd: _.Jm,
            cf: b ? a : void 0
        }, 0 === (0, _.Km)() && (b.Cd = 3E3, b.ye = 650), c |= _.uh(b)) : 8 === a ? c |= Cm(_.q) : 11 !== a && 42 !== a && (c |= 32);
        c || (b = _.Im(_.q), b.adCount = b.adCount || {}, b.adCount[a] = b.adCount[a] + 1 || 1);
        return c
    };
    Mm = function(a) {
        if (61440 >= a.length) return {
            url: a,
            Td: 0
        };
        var b = a;
        61440 < b.length && (b = b.substring(0, 61432), b = b.replace(/%\w?$/, ""), b = b.replace(/&[^=]*=?$/, ""), b += "&trunc=1");
        return {
            url: b,
            Td: a.length - b.length + 8
        }
    };
    Nm = function(a, b) {
        b = void 0 === b ? window : b;
        return b.location ? b.URLSearchParams ? (a = (new URLSearchParams(b.location.search)).get(a), (null == a ? 0 : a.length) ? a : null) : (a = (new RegExp("[?&]" + a + "=([^&]*)")).exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null
    };
    Om = function(a, b) {
        b = void 0 === b ? window : b;
        return !!Nm(a, b)
    };
    Rm = function(a, b) {
        var c = b.V;
        return um(a, function(d) {
            return Pm(c[d.getDomId()]).join("&")
        }, Qm)
    };
    Pm = function(a) {
        a = Sm(a);
        var b = [];
        _.vl(a, function(c, d) {
            c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + "=" + c.join()))
        });
        return b
    };
    Sm = function(a) {
        for (var b = {}, c = _.w(al(a)), d = c.next(); !d.done; d = c.next()) d = d.value, b[_.Kf(d, 1)] = _.Tm(d, 2);
        a = _.Tm(a, 8);
        a.length && (null != b.excl_cat || (b.excl_cat = a));
        return b
    };
    Um = function(a) {
        var b = !1,
            c = Te(a, dl, 2).map(function(d) {
                var e = _.Kf(d, 1);
                b = "excl_cat" === e;
                d = _.Tm(d, 2);
                return encodeURIComponent(e) + "=" + encodeURIComponent(d.join())
            });
        a = _.Tm(a, 3);
        !b && a.length && c.push(encodeURIComponent("excl_cat") + "=" + encodeURIComponent(a.join()));
        return c
    };
    Vm = function(a) {
        var b, c;
        return null != (c = null == (b = _.t(a, "find").call(a, function(d) {
            return "page_url" === y(d, 1)
        })) ? void 0 : _.Tm(b, 2)[0]) ? c : null
    };
    Wm = function(a) {
        var b = a.indexOf("google_preview=", a.lastIndexOf("?")),
            c = a.indexOf("&", b); - 1 === c && (c = a.length - 1, --b);
        return a.substring(0, b) + a.substring(c + 1, a.length)
    };
    Xm = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        pe(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    Ym = function(a, b) {
        var c = b.V;
        return !!Vm(b.U.wa()) || a.some(function(d) {
            return null !== Vm(c[d.getDomId()].wa())
        })
    };
    an = function(a, b, c) {
        var d = null;
        try {
            var e = Zm(b.top.document, b.top).y;
            d = a.map(function(f) {
                var g = c.U,
                    h = c.V[f.getDomId()],
                    k;
                f = null == (k = dj(f, h, b.document, si(g, h))) ? void 0 : k.y;
                k = li(!0, b).height;
                return void 0 === f || -12245933 === f || -12245933 === k ? -1 : f < e + k ? 0 : ++$m
            })
        } catch (f) {}
        return d
    };
    bn = function(a) {
        return _.E(a, 8) ? "loc gpic cookie ms ppid top etu uule video_doc_id adsid".split(" ") : []
    };
    dn = function() {
        var a = void 0 === a ? window : a;
        cn = _.mf(a)
    };
    hn = function(a) {
        if (null == a || !a.aa.Y.length) return "";
        for (var b = new _.v.Set(Df(en)), c = _.w(bn(a.da.W)), d = c.next(); !d.done; d = c.next()) b.add(d.value);
        c = new _.v.Map;
        d = _.w(fn);
        for (var e = d.next(); !e.done; e = d.next()) e = e.value, e(a, c);
        a = "https://" + (gn(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
        c = _.w(c);
        for (d = c.next(); !d.done; d = c.next()) {
            e = _.w(d.value);
            d = e.next().value;
            var f = e.next().value;
            e = f.value;
            f = void 0 === f.options ? {} : f.options;
            (new RegExp("[?&]" + d + "=")).test(a);
            if (!b.has(d) && null != e) {
                var g = f;
                f = void 0 === g.la ? "," : g.la;
                g = void 0 === g.xa ? !1 : g.xa;
                if (e = "object" !== typeof e ? null == e || !g && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(f)) : null) "?" !== a[a.length - 1] && (a += "&"), a += d + "=" + e
            }
        }
        return a
    };
    gn = function(a) {
        var b = a.da.W,
            c, d;
        a = null != (d = null == (c = jn(a.aa.O.U)) ? void 0 : _.E(c, 9)) ? d : !1;
        c = _.E(b, 8);
        return a || c || !ff(b)
    };
    kn = function(a, b) {
        var c;
        return !(null != (c = ri(a, 11)) ? !c : !_.E(b, 10))
    };
    mn = function(a, b, c, d) {
        if (a = Yi(a, b)) {
            var e;
            if (c = null != (e = ri(c, 24)) ? e : _.E(d, 30)) c = a.getBoundingClientRect(), d = c.top, e = c.bottom, 0 === c.height ? c = !1 : (c = _.q.innerHeight, c = 0 < e && e < c || 0 < d && d < c);
            c || ln(a, !1)
        }
    };
    sn = function(a, b, c, d, e, f, g) {
        var h = new fg,
            k = new nn(a, d);
        H(h, k);
        f = new on(a, e, f);
        H(h, f);
        f = new pn(a, b, e, g, k.sb);
        H(h, f);
        b = new qn(a, b, c, e, d, g, k.sb);
        H(h, b);
        a = new rn(a, k.sb, b.l, f.l);
        H(h, a);
        ng(h);
        return {
            sb: a.B,
            Dc: h
        }
    };
    tn = function(a) {
        var b = a.match(/\/?([0-9]+)(?:,[0-9]+)?((?:\/.+?)+?)(?:\/*)$/);
        return 3 !== (null == b ? void 0 : b.length) ? a : "/" + b[1] + b[2]
    };
    vn = function(a, b) {
        var c, d;
        return null != (d = null != (c = null == b ? void 0 : b.get(_.C(un) ? tn(a) : a)) ? c : null == b ? void 0 : b.get(_.oi(a))) ? d : 0
    };
    An = function(a, b, c, d, e) {
        if (null != b && b.size) {
            var f, g;
            e = null != (g = null != (f = null == e ? void 0 : e.adUnits) ? f : null == a ? void 0 : a.adUnits) ? g : [];
            a = {};
            f = _.w(e);
            for (g = f.next(); !g.done; a = {
                    Yc: a.Yc
                }, g = f.next()) {
                e = g.value;
                g = e.code;
                var h = e.bids;
                e = void 0;
                if (g && null != (e = h) && e.length && (g = vn(g, b), a.Yc = g / 1E6, !(0 >= g))) {
                    var k = void 0;
                    e = {};
                    h = _.w(null != (k = h) ? k : []);
                    for (k = h.next(); !k.done; e = {
                            hb: e.hb,
                            Ld: e.Ld
                        }, k = h.next()) k = k.value, e.Ld = "function" === typeof k.getFloor ? k.getFloor : void 0, e.hb = wn(xn(yn(new zn, 4), g), c), k.getFloor = function(l, n) {
                        return function(m) {
                            4 === _.Ve(l.hb, 1, 0) && yn(l.hb, 1);
                            var p, r = null == (p = l.Ld) ? void 0 : p.apply(this, [m]);
                            m = c ? r || {} : {
                                currency: "USD",
                                floor: n.Yc
                            };
                            return null != r && r.floor ? (null == r ? 0 : r.currency) && "USD" !== r.currency ? (1 === _.Ve(l.hb, 1, 0) && (m = xn(yn(l.hb, 6), 1E6 * r.floor), _.z(m, 3, r.currency)), r) : (r.floor || 0) > n.Yc ? (1 === _.Ve(l.hb, 1, 0) && xn(yn(l.hb, 5), 1E6 * r.floor), r) : m : m
                        }
                    }(e, a), d.set(k.getFloor, e.hb)
                }
            }
        }
    };
    Bn = function(a, b) {
        var c = a.que,
            d = function() {
                var e;
                null == a || null == (e = a.requestBids) || e.before.call(b, function(f, g) {
                    return Kk().pbjs_hooks.push({
                        context: b,
                        nextFunction: f,
                        requestBidsConfig: g
                    })
                }, 0)
            };
        (null == c ? 0 : c.hasOwnProperty("push")) ? null == c || c.push(d): null == c || c.unshift(d)
    };
    Dn = function(a, b) {
        return zk(b, function() {
            return new Cn(a, b)
        })
    };
    In = function(a, b, c) {
        var d = window,
            e = new fg;
        d = new En(d);
        _.Fn(e, d);
        c = new Gn(a, d, c);
        H(e, c);
        a = new Hn(a, d, b, c.Wb);
        H(e, a);
        ng(e);
        return {
            Wb: c.Wb,
            rf: a.l,
            Dc: e
        }
    };
    Mn = function(a, b, c, d) {
        return _.C(Jn) ? new Kn(a, b, c, d) : new Ln(a, b, c, d)
    };
    Pn = function(a, b, c, d) {
        var e = d.fe,
            f = d.adUnitPath;
        d = void 0 === d.Ma ? !1 : d.Ma;
        return "string" === typeof f && f.length && (null == e || "string" === typeof e || "number" === typeof e && Nn(e)) ? On(a, b, f, c, {
            tb: "string" === typeof e ? e : void 0,
            format: "number" === typeof e ? e : 1,
            Ma: d
        }) : (b.error(Ek("googletag.defineOutOfPageSlot", [f, e])), null)
    };
    Nn = function(a) {
        return !!nm(kl, function(b) {
            return b === a
        }) || 6 === a
    };
    On = function(a, b, c, d, e) {
        var f = e.format;
        b = d.add(a, b, c, [1, 1], {
            tb: e.tb,
            format: f,
            Ma: e.Ma
        });
        a = b.slotId;
        b = b.rb;
        a && b && (_.z(b, 15, f), _.Qn(a, function() {
            var g = window,
                h = Hm(f);
            if (h) {
                g = _.Im(g);
                var k = g.adCount && g.adCount[h];
                k && (g.adCount[h] = k - 1)
            }
        }));
        return null != a ? a : null
    };
    Vn = function(a) {
        var b, c = null == (b = window.top) ? void 0 : b.location.href;
        if (!c) return !1;
        var d = _.oi(c),
            e;
        return null == (e = Te(a, Rn, 1)) ? void 0 : e.some(function(f) {
            switch (Zj(f, Sn)) {
                case 1:
                    f = dg(f, Tn, Lf(f, Sn, 1));
                    if (null != Un(f, 1) && null != Un(f, 2)) {
                        var g = We(f, 1);
                        f = 0 >= g || g > c.length ? !1 : We(f, 2) === _.oi(c.substring(0, g))
                    } else f = !1;
                    return f;
                case 2:
                    return We(f, Lf(f, Sn, 2)) === d;
                default:
                    return !1
            }
        })
    };
    Xn = function(a) {
        var b;
        return null == (b = Wn(a, 2)) ? void 0 : b.some(function(c) {
            switch (c) {
                case 0:
                    return !1;
                case 1:
                    return !0;
                case 2:
                    return 0 === (0, _.Km)();
                case 4:
                    return 2 === (0, _.Km)();
                case 3:
                    return 1 === (0, _.Km)();
                default:
                    return !1
            }
        })
    };
    bo = function(a, b, c, d, e) {
        var f = [];
        c = _.w(Te(c, Yn, 3));
        for (var g = c.next(); !g.done; g = c.next())
            if (g = g.value, _.Uf(g, 1) && _.Uf(g, 2) && null != Un(g, 3) && null != Un(g, 4)) {
                var h = a.querySelector(_.Kf(g, 1)),
                    k = void 0;
                if (null != (k = h) && k.parentElement) {
                    k = g.getAdUnitPath();
                    var l = "gpt_opp_" + k;
                    if (!a.getElementById(l)) {
                        var n = a.createElement("div");
                        n.id = l;
                        h.insertAdjacentElement("beforebegin", n);
                        if (g = b.defineSlot(k, [g.getWidth(), g.getHeight()], l)) g.addService(b.pubads()), h = Zn(hj(), g.getSlotElementId()), e && (k = void 0, null == (k = h) || $n(k, e)), f.push(g)
                    }
                }
            }
        f.length && ao(a, function() {
            for (var m = _.w(f), p = m.next(); !p.done; p = m.next()) b.display(p.value);
            _.E(d, 4) && b.pubads().refresh(f)
        })
    };
    co = function(a) {
        switch (Number(a)) {
            case 2:
            case 3:
                return "Anchor";
            case 5:
                return "Interstitial";
            case 6:
                return "Shoppit";
            default:
                return "Out-of-page creative"
        }
    };
    no = function(a, b, c, d, e) {
        var f = e.getBidResponsesForAdUnitCode;
        if (f) {
            var g, h, k, l = null != (k = null == (g = f(b.getDomId())) ? void 0 : g.bids) ? k : null == (h = f(b.getAdUnitPath())) ? void 0 : h.bids;
            if (null != l && l.length && (g = l.filter(function(p) {
                    var r = p.adId;
                    return p.auctionId !== c && d.some(function(u) {
                        return (_.B = _.Tm(u, 2), _.t(_.B, "includes")).call(_.B, r)
                    })
                }), g.length)) {
                var n, m;
                f = null == (n = e.adUnits) ? void 0 : null == (m = _.t(n, "find").call(n, function(p) {
                    p = p.code;
                    return p === b.getAdUnitPath() || p === b.getDomId()
                })) ? void 0 : m.mediaTypes;
                n = _.w(g);
                for (m = n.next(); !m.done; m = n.next()) m = m.value, g = eo(m, d, f), g = fo(a, go(_.z(ho(io(new jo, m.bidder), 1), 6, !0), g)), _.C(ko) && lo(m.bidder, e, g), "number" === typeof m.timeToRespond && mo(g, m.timeToRespond)
            }
        }
    };
    lo = function(a, b, c) {
        for (var d = []; a && !_.t(d, "includes").call(d, a);) {
            d.unshift(a);
            var e = void 0,
                f = void 0;
            a = null == (e = b) ? void 0 : null == (f = e.aliasRegistry) ? void 0 : f[a]
        }
        _.ed(c, 10, d, _.Hc)
    };
    oo = function(a, b, c) {
        null != y(a, 3) || (c === b.getAdUnitPath() ? _.z(a, 3, 1) : c === b.getDomId() && _.z(a, 3, 2))
    };
    ro = function(a, b, c, d, e, f, g) {
        f = f.get(null != g ? g : function() {
            return null
        });
        1 !== (null == f ? void 0 : _.Ve(f, 1, 0)) && _.Lh(b, 5, f);
        po(a, zn, 5) || (f ? 1 === _.Ve(f, 1, 0) ? qo(a, f) : qo(a, xn(yn(wn(new zn, e), 1), vn(c, d))) : qo(a, yn(wn(new zn, e), vn(c, d) ? 2 : 3)))
    };
    eo = function(a, b, c) {
        var d = a.cpm,
            e = a.originalCpm,
            f = a.currency,
            g = a.originalCurrency,
            h = a.dealId,
            k = a.adserverTargeting,
            l = a.bidder,
            n = a.adUnitCode,
            m = a.adId,
            p = a.mediaType,
            r = a.height;
        a = a.width;
        var u = new so;
        "number" === typeof d && (_.z(u, 2, Math.round(1E6 * d)), g && g !== f || (d = Math.round(1E6 * Number(e)), isNaN(d) || d === _.df(u, 2) || _.z(u, 8, d)));
        "string" === typeof f && _.z(u, 3, f);
        "string" === typeof h && to(u, uo(h));
        if ("object" === typeof k)
            for (b = _.t(Object, "fromEntries").call(Object, b.map(function(D) {
                    return [y(D, 1), _.Tm(D, 2)]
                })), f = _.w(["", "_" + l]), h = f.next(); !h.done; h = f.next()) {
                h = h.value;
                d = [];
                e = _.w(_.t(Object, "entries").call(Object, k));
                for (g = e.next(); !g.done; g = e.next()) {
                    g = _.w(g.value);
                    var x = g.next().value;
                    g = g.next().value;
                    x = (x + h).slice(0, 20);
                    var G = void 0;
                    if (null != (G = b[x]) && G.length)
                        if (b[x][0] === String(g)) d.push(x);
                        else {
                            d = [];
                            break
                        }
                }
                vo(u, _.Tm(u, 4).concat(d))
            }
        switch (p || "banner") {
            case "banner":
                _.z(u, 5, 1);
                break;
            case "native":
                _.z(u, 5, 2);
                oj("hbyg_nat", function(D) {
                    J(D, "pub_url", document.URL);
                    J(D, "b", l);
                    J(D, "auc", null != n ? n : "");
                    J(D, "hmt", Number(!!c));
                    var F;
                    J(D, "hat", Number(!!(null == c ? 0 : null == (F = c.native) ? 0 : F.adTemplate)))
                }, _.Cf(wo));
                break;
            case "video":
                _.z(u, 5, 3)
        }
        "number" === typeof r && "number" === typeof a && xo(u, yo(zo(a), r));
        "string" === typeof m && _.z(u, 1, m);
        return u
    };
    Ao = function(a, b) {
        var c = new _.v.Map,
            d = function(k) {
                var l = c.get(k);
                l || (l = {}, c.set(k, l));
                return l
            },
            e = [];
        a = _.w(a);
        for (var f = a.next(); !f.done; f = a.next()) {
            f = f.value;
            var g = f.args,
                h = f.eventType;
            f = f.elapsedTime;
            "bidTimeout" === h && e.push.apply(e, _.xe(g));
            switch (h) {
                case "bidRequested":
                    if (g.auctionId !== b) continue;
                    if (!Array.isArray(g.bids)) continue;
                    g = _.w(g.bids);
                    for (h = g.next(); !h.done; h = g.next())
                        if (h = h.value.bidId) d(h).requestTime = f;
                    break;
                case "noBid":
                    g.auctionId === b && g.bidId && (d(g.bidId).gi = f)
            }
        }
        d = new _.v.Map;
        a = _.w(_.t(c, "entries").call(c));
        for (f = a.next(); !f.done; f = a.next()) g = _.w(f.value), f = g.next().value, h = g.next().value, g = h.requestTime, h = h.gi, g && h && d.set(f, {
            latency: h - g,
            zf: !1
        });
        e = _.w(e);
        for (a = e.next(); !a.done; a = e.next())
            if (f = a.value, a = f.bidId, f = f.auctionId, a && f === b && (a = d.get(a))) a.zf = !0;
        return d
    };
    Co = function(a) {
        return null != Un(a, 1) ? null != Bo(a, 3) && 0 !== (0, _.Km)() ? Un(a, 1) * Bo(a, 3) : Un(a, 1) : null
    };
    Do = function(a, b) {
        return window.IntersectionObserver && new IntersectionObserver(a, {
            rootMargin: b
        })
    };
    Eo = function(a, b) {
        if ("undefined" !== typeof IntersectionObserver) return new IntersectionObserver(b, {
            rootMargin: a + "%"
        })
    };
    Fo = function(a) {
        var b = {};
        a = _.w(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[y(c, 1)] = y(c, 2);
        return b
    };
    Ho = function(a, b, c) {
        return Mn(c, a, Go, function(d) {
            d = d.detail.data;
            try {
                var e = JSON.parse(d);
                if ("rewarded" === e.type && e.message === b) return e
            } catch (f) {}
            return null
        })
    };
    Io = function(a) {
        var b = a.ae,
            c = a.Sb,
            d = void 0 === a.Hg ? [] : a.Hg,
            e = void 0 === a.kg ? !1 : a.kg,
            f = e ? "https://securepubads.g.doubleclick.net" : "https://pubads.g.doubleclick.net",
            g = e ? "https://securepubads.g.doubleclick.net/td/sjs" : "https://pubads.g.doubleclick.net/td/sjs",
            h = (void 0 === a.jg ? 0 : a.jg) ? b.directFromSellerSignals.promise : void 0,
            k;
        a = _.t(Object, "assign").call(Object, {}, {
            seller: f,
            decisionLogicUrl: g,
            trustedScoringSignalsUrl: e ? "https://securepubads.g.doubleclick.net/td/sts" : "https://pubads.g.doubleclick.net/td/sts",
            interestGroupBuyers: null != (k = a.interestGroupBuyers) ? k : ["https://googleads.g.doubleclick.net", "https://td.doubleclick.net"],
            sellerExperimentGroupId: 0,
            auctionSignals: b.auctionSignals.promise,
            sellerSignals: b.j.promise,
            sellerTimeout: 50,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: b.perBuyerSignals.promise,
            perBuyerTimeouts: b.perBuyerTimeouts.promise
        }, h ? {
            directFromSellerSignals: h
        } : {});
        return _.t(Object, "assign").call(Object, {}, {
            seller: f,
            decisionLogicUrl: g,
            interestGroupBuyers: [],
            auctionSignals: {},
            sellerExperimentGroupId: 0,
            sellerSignals: b.topLevelSellerSignals.promise,
            sellerTimeout: 50,
            signal: c.signal,
            perBuyerExperimentGroupIds: {},
            perBuyerSignals: {},
            perBuyerTimeouts: {},
            componentAuctions: [a].concat(_.xe(d))
        }, h ? {
            directFromSellerSignals: h
        } : {})
    };
    Jo = function(a, b) {
        b.topLevelSellerSignals.resolve(a.sellerSignals);
        b.directFromSellerSignals.resolve(a.directFromSellerSignals);
        var c;
        if (a = null == (c = a.componentAuctions) ? void 0 : _.t(c, "find").call(c, function(e) {
                return (_.B = ["https://securepubads.g.doubleclick.net", "https://pubads.g.doubleclick.net"], _.t(_.B, "includes")).call(_.B, e.seller)
            })) {
            b.auctionSignals.resolve(a.auctionSignals);
            b.j.resolve(a.sellerSignals);
            b.perBuyerSignals.resolve(a.perBuyerSignals);
            var d;
            b.perBuyerTimeouts.resolve(null != (d = a.perBuyerTimeouts) ? d : {})
        } else b.auctionSignals.resolve(void 0), b.j.resolve(void 0), b.perBuyerSignals.resolve({}), b.perBuyerTimeouts.resolve({})
    };
    Qo = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r;
        return _.Ab(function(u) {
            if (1 == u.j) return _.t(a, "startsWith").call(a, "urn:") && Ko.deprecatedURNToURL && Ko.deprecatedReplaceInURN ? Bb(u, Ko.deprecatedURNToURL(a), 2) : u.return();
            c = u.o;
            d = {};
            e = b.gdprApplies || "";
            (null != (f = c.match(Lo)) ? f : []).forEach(function(x) {
                d[x] = e
            });
            g = b.kh || "";
            (null != (h = c.match(Mo)) ? h : []).forEach(function(x) {
                d[x] = g
            });
            k = b.vg || "";
            (null != (l = c.match(No)) ? l : []).forEach(function(x) {
                d[x] = k
            });
            n = b.tg || "";
            (null != (m = c.match(Oo)) ? m : []).forEach(function(x) {
                d[x] = n
            });
            p = b.rg || "";
            (null != (r = c.match(Po)) ? r : []).forEach(function(x) {
                d[x] = p
            });
            return Bb(u, Ko.deprecatedReplaceInURN(a, d), 0)
        })
    };
    So = function(a, b, c) {
        var d = "https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner",
            e = _.E(c, 18),
            f = _.E(c, 7);
        if (f || e) d += "&isContextualWinner=1";
        f && (d += "&hasXfpAds=1");
        e = c.getEscapedQemQueryId();
        f = _.Kf(c, 6);
        e && (d += "&winner_qid=" + encodeURIComponent(e));
        f && (d += "&xfpQid=" + encodeURIComponent(f));
        _.E(c, 4) && (d += "&is_plog=1");
        (e = _.Kf(c, 11)) && (d += "&ecrs=" + e);
        (null == c ? 0 : _.E(c, 21)) || (d += "&turtlexTest=1");
        d += "&applied_timeout_ms=" + (b + "&duration_ms=" + Math.round(a));
        Ro(d)
    };
    To = function() {
        return new _.v.Promise(function(a) {
            setTimeout(function() {
                a(null)
            }, 0)
        })
    };
    Vo = function(a) {
        Uo = a
    };
    Wo = function(a, b, c, d) {
        M(a, xl("googletag.setConfig.commerce", yl(b), c, yl(d)))
    };
    Xo = function(a) {
        return "string" === typeof a && 0 < a.length && 5E3 > a.length
    };
    Yo = function(a) {
        if (!Array.isArray(a) || 0 === a.length) return !1;
        var b = a.length - 1;
        return a.every(function(c) {
            if ("string" !== typeof c || 0 === c.length) return !1;
            b += c.length;
            return 5E3 < b ? !1 : !0
        })
    };
    ap = function(a, b, c) {
        if ("object" === typeof a && null !== a && _.t(Object, "keys").call(Object, a).some(function(d) {
                return (_.B = _.t(Object, "values").call(Object, Zo), _.t(_.B, "includes")).call(_.B, Number(d))
            })) return !0;
        $o("taxonomies", a, b, c);
        return !1
    };
    cp = function(a, b) {
        var c = Te(b, bp, 1).filter(function(d) {
            return _.Ve(d, 1, 0) !== a
        });
        _.Dd(b, 1, c)
    };
    jp = function(a, b, c, d) {
        if (void 0 !== _.t(b, "values"))
            if (null === _.t(b, "values")) cp(a, c);
            else if (dp(_.t(b, "values"), d, b) && (b = ep(a, _.t(b, "values"), d, b), b.length)) {
            var e = (_.B = Te(c, bp, 1), _.t(_.B, "find")).call(_.B, function(f) {
                return _.Ve(f, 1, 0) === a
            });
            e ? fp(e, b) : gp(c, fp(hp(new bp, a), b));
            d.info(ip(yl(b), yl(a)))
        }
    };
    dp = function(a, b, c) {
        if (Array.isArray(a)) return !0;
        $o("taxonomyData.values", a, b, c);
        return !1
    };
    ep = function(a, b, c, d) {
        var e = [],
            f = [],
            g = !1;
        b = _.w(b);
        for (var h = b.next(); !h.done; h = b.next()) h = h.value, 5 <= e.length && (g = !0), "string" !== typeof h ? f.push(h) : g || h in e || e.push(h);
        0 < f.length && $o("taxonomyData.values", f, c, d);
        g && M(c, kp(yl(a), yl(5)));
        return e
    };
    $o = function(a, b, c, d) {
        M(c, xl("googletag.setConfig.pps", yl(d), a, yl(b)))
    };
    np = function() {
        for (var a = _.w(_.t(Array, "from").call(Array, document.getElementsByTagName("script"))), b = a.next(); !b.done; b = a.next()) {
            var c = b = b.value,
                d = b.src;
            d && (Ma(d, "/tag/js/gpt.js") || Ma(d, "/tag/js/gpt_mobile.js")) && !c.googletag_executed && b.textContent && (c.googletag_executed = !0, c = document.createElement("script"), kb(c, new _.lp(b.textContent, mp)), document.head.appendChild(c), document.head.removeChild(c))
        }
    };
    op = function(a, b) {
        b = _.w(_.t(Object, "entries").call(Object, b));
        for (var c = b.next(); !c.done; c = b.next()) {
            var d = _.w(c.value);
            c = d.next().value;
            d = d.next().value;
            a.hasOwnProperty(c) || (a[c] = d)
        }
    };
    rp = function(a, b, c) {
        var d = [];
        c = [].concat(_.xe(c.Y)).slice();
        if (b) {
            if (!Array.isArray(b)) return M(a, Ek("googletag.destroySlots", [b])), !1;
            ra(b);
            d = c.filter(function(e) {
                return _.t(b, "includes").call(b, e.ma)
            })
        } else d = c;
        if (!d.length) return !1;
        pp(d);
        qp(d);
        return !0
    };
    Hp = function(a, b, c, d, e, f, g, h, k, l) {
        var n = Kk(),
            m, p, r = I(a, 74, function(x, G, D) {
                return e.defineSlot(a, b, x, G, D)
            }),
            u = {};
        r = (u._loaded_ = !0, u.cmd = [], u._vars_ = n._vars_, u.evalScripts = function() {
            try {
                np()
            } catch (D) {
                Vh(a, 297, D);
                var x, G;
                null == (x = window.console) || null == (G = x.error) || G.call(x, D)
            }
        }, u.display = I(a, 95, function(x) {
            void sp(c, x, e)
        }), u.defineOutOfPageSlot = I(a, 73, function(x, G) {
            return (x = Pn(a, b, e, {
                fe: G,
                adUnitPath: x
            })) ? x.ma : null
        }), u.getVersion = I(a, 946, function() {
            return a.Lb ? String(a.Lb) : a.Wa
        }), u.pubads = I(a, 947, function() {
            return Ll(a, b, c, e, h)
        }), u.companionAds = I(a, 816, function() {
            null != m || (m = new tp(b, c, f, h));
            return Hk(a, b, m)
        }), u.content = I(a, 817, function() {
            null != p || (p = new up(b, g));
            return Jk(a, b, p)
        }), u.setAdIframeTitle = I(a, 729, Vo), u.getEventLog = I(a, 945, function() {
            return new vp(a, b)
        }), u.sizeMapping = I(a, 90, function() {
            return new wp(a, b)
        }), u.enableServices = I(a, 91, function() {
            for (var x = _.w(xp), G = x.next(); !G.done; G = x.next()) G = G.value, G.C && b.info(yp()), zp(G)
        }), u.destroySlots = I(a, 75, function(x) {
            return rp(b, x, e)
        }), u.enums = nl(), u.defineSlot = r, u.defineUnit = r, u.getWindowsThatCanCommunicateWithHostpageLibrary = I(a, 955, function(x) {
            return Ap(k, x).map(function(G) {
                var D;
                return null == (D = gj(G, document)) ? void 0 : D.contentWindow
            }).filter(function(G) {
                return !!G
            })
        }), u.disablePublisherConsole = I(a, 93, Wk), u.onPubConsoleJsLoad = I(a, 731, Zk), u.openConsole = I(a, 732, function(x) {
            Rk = !0;
            var G;
            (null == (G = Kk()) ? 0 : G.console) ? Kk().console.openConsole(x): (x && (Yk = x), Xk = !0, Nk(a))
        }), u.setConfig = I(a, 1034, function(x) {
            if (_.na(x)) {
                var G = x.commerce,
                    D = x.pps;
                if (null === G) $f(Bp(d, Cp, 33), 1);
                else if (void 0 !== G)
                    if (x = Bp(d, Cp, 33), _.na(G)) {
                        var F = G.query,
                            N = G.categories,
                            L = G.productIds,
                            R = G.filter,
                            S = _.Id(Dp(x, Ep, 1), !1);
                        null === F ? $f(S, 1) : Xo(F) ? _.z(S, 1, F) : void 0 !== F && Wo(b, G, "query", F);
                        null === N ? _.z(S, 2, Vc) : Yo(N) ? _.ed(S, 2, N, _.Hc) : void 0 !== N && Wo(b, G, "categories", N);
                        null === L ? _.z(S, 3, Vc) : Yo(L) ? _.ed(S, 3, L, _.Hc) : void 0 !== L && Wo(b, G, "productIds", L);
                        null === R ? $f(S, 4) : Xo(R) ? _.z(S, 4, R) : void 0 !== R && Wo(b, G, "filter", R);
                        _.Uf(S, 1) || _.Tm(S, 2).length ? _.Lh(x, 1, S) : M(b, Fp())
                    } else M(b, Ek("googletag.setConfig.commerce", [G]));
                if (null === D) $f(Bp(d, Cp, 33), 2);
                else if (void 0 !== D && (G = Bp(Bp(d, Cp, 33), Gp, 2), "object" === typeof D && D.hasOwnProperty("taxonomies") ? x = !0 : (M(b, Ek("googletag.setConfig.pps", [D])), x = !1), x))
                    if (x = D.taxonomies, void 0 === x) $o("taxonomies", x, b, D);
                    else if (null === x) _.Dd(G, 1);
                else if (ap(x, b, D))
                    for (D = _.w(_.t(Object, "entries").call(Object, x)), F = D.next(); !F.done; F = D.next()) {
                        F = _.w(F.value);
                        var V = F.next().value;
                        F = F.next().value;
                        N = G;
                        L = b;
                        S = x;
                        if (void 0 === V || null === V) $o("taxonomy", V, L, S);
                        else {
                            R = Number(V);
                            var ja = R,
                                da = L,
                                Fa = S;
                            (_.B = _.t(Object, "values").call(Object, ml), _.t(_.B, "includes")).call(_.B, Number(ja)) ? V = !0 : ($o("taxonomy", V, da, Fa), V = !1);
                            V && void 0 !== F && (null === F ? cp(R, N) : (V = L, "object" === typeof F && F.hasOwnProperty("values") ? S = !0 : ($o("taxonomyData", F, V, S), S = !1), S && jp(R, F, N, L)))
                        }
                    }
            } else M(b, Ek("googletag.setConfig", [x]))
        }), u.apiReady = !0, u);
        vg(n, l, function(x, G) {
            Vh(a, x, G);
            var D, F;
            null == (F = (D = window.console).error) || F.call(D, G)
        });
        op(n, r)
    };
    Tp = function(a) {
        var b = window,
            c = new fg,
            d = new Ip(a, b);
        d = H(c, d).B;
        if (_.C(Jp)) {
            var e = new fg;
            var f = new Kp(a, b);
            H(e, f);
            ng(e);
            e = f.B
        } else e = new Kp(a, b), H(c, e), e = e.B;
        if (_.C(Lp)) {
            var g = new fg;
            f = new Mp(a, b);
            H(g, f);
            ng(g);
            g = {
                He: f.l
            }
        } else {
            var h = new Mp(a, b);
            H(c, h);
            h = h.l
        }
        _.C(Np) && H(c, new Op(a, b));
        if (_.C(Pp)) {
            var k = new Qp(a, b);
            H(c, k);
            k = k.B
        }
        if (_.C(Rp)) {
            a = new Sp(a);
            H(c, a);
            var l = a.B
        }
        ng(c);
        return {
            He: h,
            Rh: g,
            gg: e,
            Bi: l,
            Xh: k,
            Lg: d
        }
    };
    Up = function(a) {
        var b = function() {
            return a.Reflect.construct(a.HTMLElement, [], this.constructor)
        };
        b.prototype = a.HTMLElement.prototype;
        b.prototype.constructor = b;
        _.t(Object, "setPrototypeOf").call(Object, b, a.HTMLElement);
        return b
    };
    Wp = function(a, b) {
        var c = _.Cf(Vp);
        Math.random() <= c && af(b, a)
    };
    bq = function(a, b, c) {
        var d = {};
        if (!c) return b.error(Xp("missing data-rendering attribute")), d;
        try {
            var e = Yp(Zp(c))
        } catch (k) {}
        var f;
        (null == (f = e) ? 0 : po(f, $p, 1)) ? (b = new aq, b = _.fd(b, 4, 1, 0), b = _.fd(b, 2, 7, 0), a = _.nd(b, 3, a.nb || a.Wa), b = dg(e, $p, 1), a = _.Lh(a, 5, b), a = _.ld(a, 6, !0), d.oi = a) : b.error(Xp("invalid data-rendering attribute"));
        var g;
        d.ei = null == (g = e) ? void 0 : _.Kf(g, 2);
        var h;
        d.Vd = null == (h = e) ? void 0 : _.Kf(h, 3);
        return d
    };
    eq = function(a, b) {
        var c = Vk(b, "ai");
        if (!c || 0 === c.length) return _.v.Promise.resolve(b);
        var d = cq();
        if (null == d ? 0 : d.gmaSdk) {
            if (c = d.gmaSdk.getClickSignalsWithTimeout ? d.gmaSdk.getClickSignalsWithTimeout(c, 200) : d.gmaSdk.getClickSignals(c)) return _.v.Promise.resolve(b.replace("?", "?ms=" + encodeURIComponent(c) + "&"))
        } else {
            var e, f;
            if (null == d ? 0 : null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaClickSignals) {
                e = new _.fh;
                var g = e.resolve;
                e = e.promise;
                dq(d.webkit.messageHandlers.getGmaClickSignals, {
                    click_string: c
                }, function(h) {
                    g(b.replace("?", "?" + h + "&"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return Rh(a, h, k)
                });
                return e
            }
        }
        return _.v.Promise.resolve(b)
    };
    fq = function(a, b, c, d) {
        var e, f, g;
        return _.Ab(function(h) {
            e = b.getBoundingClientRect();
            f = {};
            var k = d.replace;
            var l = (f.nx = Math.floor(c.clientX - e.x), f.ny = Math.floor(c.clientY - e.y), f.dim = Math.floor(e.width) + "x" + Math.floor(e.height), f);
            var n = [];
            for (m in l) sl(m, l[m], n);
            l = n.join("&");
            if (l) {
                n = -1;
                0 > n && (n = 0);
                var m = -1;
                if (0 > m || m > n) {
                    m = n;
                    var p = ""
                } else p = "".substring(m + 1, n);
                n = ["".slice(0, m), p, "".slice(n)];
                m = n[1];
                n[1] = l ? m ? m + "&" + l : l : m;
                l = n[0] + (n[1] ? "?" + n[1] : "") + n[2]
            } else l = "";
            g = k.call(d, "?", l + "&");
            return h.return(eq(a, g))
        })
    };
    gq = function(a, b, c) {
        var d;
        if (null == c ? 0 : null == (d = c.gmaSdk) ? 0 : d.getViewSignals) {
            if (c = c.gmaSdk.getViewSignals()) return c = b.replace(/^(.*?)(&adurl=)?$/, "$1&ms=" + c + "$2"), _.v.Promise.resolve(c)
        } else {
            var e, f;
            if (null == c ? 0 : null == (e = c.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals) {
                d = new _.fh;
                var g = d.resolve;
                d = d.promise;
                dq(c.webkit.messageHandlers.getGmaViewSignals, {}, function(h) {
                    g(b.replace(/^(.*?)(&adurl=)?$/, "$1&" + h + "$2"))
                }, function() {
                    g(b)
                }, function(h, k) {
                    return Rh(a, h, k)
                });
                return d
            }
        }
        return _.v.Promise.resolve(b)
    };
    lq = function(a, b) {
        var c = window;
        var d = void 0 === d ? Jb : d;
        var e;
        if (c.customElements && null != (e = c.Reflect) && e.construct && !c.customElements.get("google-product-ad")) {
            var f = cq(),
                g;
            null == (g = f ? new hq(function(k, l) {
                return Rh(a, k, l)
            }, function() {}) : void 0) || iq(g);
            var h = Up(c);
            e = function() {
                return h.apply(this, arguments) || this
            };
            _.O(e, h);
            e.prototype.connectedCallback = function() {
                var k = bq(a, b, this.dataset.rendering),
                    l = k.oi,
                    n = k.ei;
                k = k.Vd;
                l && d(jq(window, l));
                n && gq(a, n, f).then(function(m) {
                    return void Ro(m)
                });
                k && ("true" === this.getAttribute("data-enable-click") || this.querySelector('[data-enable-click="true"]') ? (this.Vd = k, this.addEventListener("click", this.j)) : M(b, kq(k)))
            };
            e.prototype.j = function(k) {
                var l = k.target instanceof c.HTMLElement ? k.target.closest("[data-enable-click]") : void 0;
                l instanceof c.HTMLElement && "true" === l.getAttribute("data-enable-click") && fq(a, this, k, this.Vd).then(function(n) {
                    return void Ro(n)
                })
            };
            c.customElements.define("google-product-ad", e)
        }
    };
    mq = function(a) {
        .001 > _.Ye() && af({
            c: "sd",
            s: String(a)
        }, "gpt_whirs")
    };
    rq = function(a, b, c, d) {
        d = d.xi;
        var e = b.kind;
        switch (e) {
            case 0:
                return new(d ? nq : oq)(a, b, c);
            case 1:
                return new pq(a, b, c);
            case 2:
                return new qq(a, b, c);
            default:
                hb(e)
        }
    };
    sq = function(a) {
        if (!_.qe(a)) return -1;
        a = a.pageYOffset;
        return 0 > a ? -1 : a
    };
    vq = function(a, b, c) {
        return Mn(a, b, Go, function(d) {
            d = d.detail;
            var e;
            return "asmreq" === (null == (e = d.data) ? void 0 : e.type) && tq(uq(d.data.payload), 1) === Number(c) ? d : null
        })
    };
    Aq = function(a, b, c, d) {
        var e = Yi(a, document);
        e && mh(e, window, d, !0);
        wq(_.rf(Th), "5", tq(c.V[a.getDomId()], 20));
        a.dispatchEvent(xq, 801, {
            gf: null,
            isBackfill: !1
        });
        if (_.yq(b, a) && !gj(a, document)) {
            b = c.U;
            c = c.V[a.getDomId()];
            var f;
            (null != (f = ri(c, 10)) ? f : _.E(b, 11)) && mn(a, document, c, b)
        }
        a.dispatchEvent(zq, 825, {
            isEmpty: !0
        })
    };
    Bq = function(a, b) {
        var c = _.Ce("DIV");
        c.id = a;
        c.textContent = b;
        _.jj(c, {
            height: "24px",
            "line-height": "24px",
            "text-align": "center",
            "vertical-align": "middle",
            color: "white",
            "background-color": "black",
            margin: "0",
            "font-family": "Roboto",
            "font-style": "normal",
            "font-weight": "500",
            "font-size": "11px",
            "letter-spacing": "0.08em"
        });
        return c
    };
    Cq = function(a) {
        var b = {
            threshold: [0, .3, .5, .75, 1]
        };
        return window.IntersectionObserver && new IntersectionObserver(a, b)
    };
    xr = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D, F, N) {
        var L = new fg,
            R = li(!0, window),
            S = k.U,
            V = k.V[e.getDomId()],
            ja = N.gg,
            da = N.Lg,
            Fa = new Dq(a, window);
        H(L, Fa);
        var ta = n.qh,
            qa = n.Hi,
            ia = n.bh,
            Ta = n.nf,
            gb = n.xg,
            za = n.vh,
            Ya = n.yi,
            Fd = n.jh,
            Gb = n.Yg,
            ne = n.fd,
            lc = n.zi,
            Ic = n.uh,
            Ub = n.Dh,
            gd = n.Se,
            Vb = n.Ei,
            Gd = n.Fi,
            mc = n.rh,
            Hd = n.Tg,
            nc = n.Sa,
            hd = n.hg,
            Jc = n.Ii;
        N = n.jc;
        n = n.Eg;
        .01 > Math.random() && (F = new Eq(a, Jc, null == F ? void 0 : F.Ze.Ea, Ya, Ta), H(L, F));
        Jc = new Fq;
        Jc.J(r);
        F = new Gq(a, window.top, Jc);
        H(L, F);
        m = new Hq(a, console, m, void 0, F.B);
        H(L, m);
        var id = new Iq(a, Dm(V), R.height, Gb, ta);
        H(L, id);
        m = function() {
            if (_.C(Jq)) {
                var oc = new Kq(a, e, Yi(e, p), e.getDomId(), fj(e), p.documentElement, Dm(V), h, f);
                L.I.push(oc);
                _.Fn(L, oc);
                var Jd = new Fq;
                Jd.Ka(oc.m.promise.then(function(oe) {
                    return oe.B
                }));
                return Jd
            }
            oc = new Lq(a, e, Yi(e, p), e.getDomId(), fj(e), p, Dm(V), h, f);
            H(L, oc);
            return oc.B
        }();
        var $b = new Mq(a, nc, gb, za, Ya);
        H(L, $b);
        nc = _.C(Nq);
        if (!nc) {
            var Ob = new Oq(a, S, V, gb, Ya, void 0);
            H(L, Ob)
        }
        Vb = new Pq(a, dg(S, Qq, 5), Vb);
        H(L, Vb);
        nc ? (ta = new Rq(a, window.location.hash, R.width, qa, ta, m), H(L, ta), qa = new Sq(a, e.getAdUnitPath(), V, f, ne, qa, id.B, ta.D, ta.A, $b.B, m)) : qa = new Sq(a, e.getAdUnitPath(), V, f, ne, qa, id.B, void 0, void 0, $b.B, m);
        H(L, qa);
        nc && (Ob = new Oq(a, S, V, gb, Ya, qa.D), H(L, Ob));
        Ya = new Tq(a, V, hd);
        H(L, Ya);
        r = new Uq(a, h, r, f, hd, Ya.B, qa.Sa, qa.F, m, u);
        H(L, r);
        if (g || _.C(Vq)) {
            var ob = new Wq(a, e, k, h, Ta, r.D);
            H(L, ob);
            D = new Xq(a, D, r.D);
            H(L, D);
            ob = new Yq(a, ob.l, D.B);
            H(L, ob);
            ob = ob.B
        }
        D = new Zq(a, e, S, V, Dm(V), p, h, m, Ob.B, r.A, ia, ob);
        H(L, D);
        g = new $q(a, D.B);
        H(L, g);
        u = new ar(a, e, R, h, g.B, Vb.l, ob);
        H(L, u);
        g = new br(a, window, m);
        H(L, g);
        Gd = new cr(a, u.B, D.B, Gd, Vb.l, ob);
        H(L, Gd);
        R = new dr(a, p, e, V, R, ia, m, D.B, r.A, qa.fd, g.B, Ta, ob);
        H(L, R);
        lc = new er(a, S, V, r.Sa, Ob.B, lc);
        H(L, lc);
        Hd = new fr(a, window, Hd, Fa.B, ob);
        H(L, Hd);
        g = new gr(a, Dm(V), p);
        H(L, g);
        G = new hr(a, G, Dm(V), Gb, Fd, ob);
        H(L, G);
        Ub = new ir(a, Ub, ob);
        H(L, Ub);
        _.C(Sj) && ja && (ja = new jr(a, window, ja, n), H(L, ja));
        l = new kr(a, e, h, k, x, l, window, r.Sa, Ob.B, Gd.B, m, D.B, r.A, Ta, ia, lc.B, za, Ic, gd, R.B, Hd.B, g.B, G.B, hd, da, ob);
        H(L, l);
        Ob = new lr(a, window, e, l.D, Jc);
        H(L, Ob);
        Gb = new mr(a, h, Dm(V), e, window, Gb, l.l, m, G.B);
        H(L, Gb);
        k = new nr(a, e, Dm(V), k.oc, Fd, l.l, m, F.B, G.B, Ta);
        H(L, k);
        4 === Dm(V) && (k = new or(a, e, x, window, l.l, m), _.Fn(L, k), ng(k));
        x = new pr(a, e, l.l, p, x);
        H(L, x);
        x = vq(a, e, qr(h, e));
        H(L, x);
        Fa = new rr(a, qr(h, e), window.top, l.l, Fa.B, x.B);
        H(L, Fa);
        _.C(sr) ? H(L, new tr(a, e, ia, gb, gd, l.l, D.B, l.A)) : H(L, new ur(a, e, ia, gb, gd, l.l, D.B, l.A));
        ia = new vr(a, window, mc, l.l, D.B, m);
        H(L, ia);
        H(L, new wr(a, Kk(), S, b, c, d, [N]));
        return L
    };
    Ar = function() {
        if (Xa()) {
            var a = $a();
            var b = 0;
            a = yr(String(a)).split(".");
            for (var c = yr("11").split("."), d = Math.max(a.length, c.length), e = 0; 0 == b && e < d; e++) {
                var f = a[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    b = zr(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || zr(0 == f[2].length, 0 == g[2].length) || zr(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == b)
            }
            b = 0 <= b
        } else b = 65 <= bb();
        return b
    };
    Br = function(a) {
        function b(f) {
            var g = f;
            return function() {
                var h = _.wb.apply(0, arguments);
                if (g) {
                    var k = g;
                    g = null;
                    k.apply(null, _.xe(h))
                }
            }
        }
        var c = null,
            d = 0,
            e = 0;
        return function() {
            var f, g, h, k;
            return _.Ab(function(l) {
                if (1 == l.j) return d && clearTimeout(d), d = 0, f = new _.fh, g = b(f.resolve), h = ++e, Bb(l, 0, 2);
                if (e !== h) return g(!1), l.return(f.promise);
                c ? c(!1) : g(!0);
                k = b(function() {
                    c = null;
                    d = 0;
                    g(!0)
                });
                d = setTimeout(k, 1E3);
                _.Qn(a, function() {
                    return void g(!1)
                });
                c = g;
                return l.return(f.promise)
            })
        }
    };
    Jr = function() {
        var a = new Cr;
        var b = (new Dr).setCorrelator(wf(_.q));
        var c = _.rf(sf).j().join();
        b = _.nd(b, 5, c);
        b = _.fd(b, 2, 1, 0);
        a = _.Lh(a, 1, b);
        b = new Er;
        c = _.C(Fr);
        b = _.ld(b, 7, c);
        c = _.C(Gr);
        b = _.ld(b, 8, c);
        c = _.C(Hr);
        b = _.ld(b, 9, c);
        b = _.ld(b, 10, !0);
        c = _.C(Ir);
        b = _.ld(b, 13, c);
        b = _.ld(b, 16, !0);
        a = _.Lh(a, 2, b);
        window.google_rum_config = a.toJSON()
    };
    Lr = function() {
        var a = Kr,
            b = Number(a);
        return 1 > b || Math.floor(b) !== b ? (af({
            v: a
        }, "gpt_inv_ver"), "1") : a
    };
    Nr = function(a) {
        var b = Mr() || (0, _.Xe)() ? 1 : _.Ye(),
            c = .001 > b;
        c ? (a.l = !0, tf(31067358)) : .002 > b && tf(31067357);
        uf(23);
        return {
            Rc: c,
            Fh: 1E3,
            mi: 1E-4 > b,
            Eh: 1E4,
            cg: c,
            lf: 1E3
        }
    };
    Qr = function(a) {
        var b = Lr();
        if (/m\d+/.test("m202304170101")) var c = Number("202304170101");
        else af({
            mjsv: "m202304170101"
        }, "gpt_inv_ver"), c = void 0;
        var d = wf(window),
            e = window.document.URL,
            f = _.Cf(Or);
        return _.t(Object, "assign").call(Object, {}, a, {
            Wa: b,
            nb: "m202304170101",
            Lb: c,
            pvsid: d,
            Pb: new _.Pr(f),
            Pg: e
        })
    };
    _.ba = [];
    Rr = function(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    };
    Sr = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };
    Tr = function(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    };
    _.Ur = Tr(this);
    Vr = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
    _.v = {};
    Wr = {};
    _.t = function(a, b, c) {
        if (!c || null != a) {
            c = Wr[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    };
    Xr = function(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in _.v ? f = _.v : f = _.Ur;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = Vr && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? Sr(_.v, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === Wr[d] && (a = 1E9 * Math.random() >>> 0, Wr[d] = Vr ? _.Ur.Symbol(d) : "$jscp$" + a + "$" + d), Sr(f, Wr[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    };
    Xr("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.j = f;
            Sr(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.j
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    }, "es6");
    Xr("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, _.v.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = _.Ur[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && Sr(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return Yr(Rr(this))
                }
            })
        }
        return a
    }, "es6");
    Yr = function(a) {
        a = {
            next: a
        };
        a[_.t(_.v.Symbol, "iterator")] = function() {
            return this
        };
        return a
    };
    _.P = function(a) {
        return a.raw = a
    };
    Zr = function(a, b) {
        a.raw = b;
        return a
    };
    _.w = function(a) {
        var b = "undefined" != typeof _.v.Symbol && _.t(_.v.Symbol, "iterator") && a[_.t(_.v.Symbol, "iterator")];
        if (b) return b.call(a);
        if ("number" == typeof a.length) return {
            next: Rr(a)
        };
        throw Error(String(a) + " is not an iterable or ArrayLike");
    };
    _.xe = function(a) {
        if (!(a instanceof Array)) {
            a = _.w(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    };
    $r = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    as = Vr && "function" == typeof _.t(Object, "assign") ? _.t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) $r(d, e) && (a[e] = d[e])
        }
        return a
    };
    Xr("Object.assign", function(a) {
        return a || as
    }, "es6");
    var bs = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        cs = function() {
            function a() {
                function c() {}
                new c;
                Reflect.construct(c, [], function() {});
                return new c instanceof c
            }
            if (Vr && "undefined" != typeof Reflect && Reflect.construct) {
                if (a()) return Reflect.construct;
                var b = Reflect.construct;
                return function(c, d, e) {
                    c = b(c, d);
                    e && Reflect.setPrototypeOf(c, e.prototype);
                    return c
                }
            }
            return function(c, d, e) {
                void 0 === e && (e = c);
                e = bs(e.prototype || Object.prototype);
                return Function.prototype.apply.call(c, e, d) || e
            }
        }(),
        ds;
    if (Vr && "function" == typeof _.t(Object, "setPrototypeOf")) ds = _.t(Object, "setPrototypeOf");
    else {
        var es;
        a: {
            var fs = {
                    a: !0
                },
                gs = {};
            try {
                gs.__proto__ = fs;
                es = gs.a;
                break a
            } catch (a) {}
            es = !1
        }
        ds = es ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    hs = ds;
    _.O = function(a, b) {
        a.prototype = bs(b.prototype);
        a.prototype.constructor = a;
        if (hs) hs(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.pi = b.prototype
    };
    is = function() {
        this.l = !1;
        this.H = null;
        this.o = void 0;
        this.j = 1;
        this.A = this.m = 0;
        this.C = null
    };
    js = function(a) {
        if (a.l) throw new TypeError("Generator is already running");
        a.l = !0
    };
    is.prototype.I = function(a) {
        this.o = a
    };
    var ks = function(a, b) {
        a.C = {
            pf: b,
            xh: !0
        };
        a.j = a.m || a.A
    };
    is.prototype.return = function(a) {
        this.C = {
            return: a
        };
        this.j = this.A
    };
    Bb = function(a, b, c) {
        a.j = c;
        return {
            value: b
        }
    };
    Db = function(a, b) {
        a.j = b;
        a.m = 0
    };
    Eb = function(a) {
        a.m = 0;
        var b = a.C.pf;
        a.C = null;
        return b
    };
    ls = function(a) {
        this.j = new is;
        this.o = a
    };
    os = function(a, b) {
        js(a.j);
        var c = a.j.H;
        if (c) return ms(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.j.return);
        a.j.return(b);
        return ns(a)
    };
    ms = function(a, b, c, d) {
        try {
            var e = b.call(a.j.H, c);
            if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object");
            if (!e.done) return a.j.l = !1, e;
            var f = e.value
        } catch (g) {
            return a.j.H = null, ks(a.j, g), ns(a)
        }
        a.j.H = null;
        d.call(a.j, f);
        return ns(a)
    };
    ns = function(a) {
        for (; a.j.j;) try {
            var b = a.o(a.j);
            if (b) return a.j.l = !1, {
                value: b.value,
                done: !1
            }
        } catch (c) {
            a.j.o = void 0, ks(a.j, c)
        }
        a.j.l = !1;
        if (a.j.C) {
            b = a.j.C;
            a.j.C = null;
            if (b.xh) throw b.pf;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    };
    ps = function(a) {
        this.next = function(b) {
            js(a.j);
            a.j.H ? b = ms(a, a.j.H.next, b, a.j.I) : (a.j.I(b), b = ns(a));
            return b
        };
        this.throw = function(b) {
            js(a.j);
            a.j.H ? b = ms(a, a.j.H["throw"], b, a.j.I) : (ks(a.j, b), b = ns(a));
            return b
        };
        this.return = function(b) {
            return os(a, b)
        };
        this[_.t(_.v.Symbol, "iterator")] = function() {
            return this
        }
    };
    qs = function(a) {
        function b(d) {
            return a.next(d)
        }

        function c(d) {
            return a.throw(d)
        }
        return new _.v.Promise(function(d, e) {
            function f(g) {
                g.done ? d(g.value) : _.v.Promise.resolve(g.value).then(b, c).then(f, e)
            }
            f(a.next())
        })
    };
    _.Ab = function(a) {
        return qs(new ps(new ls(a)))
    };
    _.wb = function() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    };
    Xr("Reflect", function(a) {
        return a ? a : {}
    }, "es6");
    Xr("Reflect.construct", function() {
        return cs
    }, "es6");
    Xr("Reflect.setPrototypeOf", function(a) {
        return a ? a : hs ? function(b, c) {
            try {
                return hs(b, c), !0
            } catch (d) {
                return !1
            }
        } : null
    }, "es6");
    Xr("Promise", function(a) {
        function b() {
            this.j = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.o = function(g) {
            if (null == this.j) {
                this.j = [];
                var h = this;
                this.m(function() {
                    h.C()
                })
            }
            this.j.push(g)
        };
        var d = _.Ur.setTimeout;
        b.prototype.m = function(g) {
            d(g, 0)
        };
        b.prototype.C = function() {
            for (; this.j && this.j.length;) {
                var g = this.j;
                this.j = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.H(l)
                    }
                }
            }
            this.j = null
        };
        b.prototype.H = function(g) {
            this.m(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.o = 0;
            this.m = void 0;
            this.j = [];
            this.I = !1;
            var h = this.H();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.H = function() {
            function g(l) {
                return function(n) {
                    k || (k = !0, l.call(h, n))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.R),
                reject: g(this.C)
            }
        };
        e.prototype.R = function(g) {
            if (g === this) this.C(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof e) this.K(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.D(g) : this.l(g)
            }
        };
        e.prototype.D = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.C(k);
                return
            }
            "function" == typeof h ? this.N(h, g) : this.l(g)
        };
        e.prototype.C = function(g) {
            this.A(2, g)
        };
        e.prototype.l = function(g) {
            this.A(1, g)
        };
        e.prototype.A = function(g, h) {
            if (0 != this.o) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.o);
            this.o = g;
            this.m = h;
            2 === this.o && this.F();
            this.M()
        };
        e.prototype.F = function() {
            var g = this;
            d(function() {
                if (g.ha()) {
                    var h = _.Ur.console;
                    "undefined" !== typeof h && h.error(g.m)
                }
            }, 1)
        };
        e.prototype.ha = function() {
            if (this.I) return !1;
            var g = _.Ur.CustomEvent,
                h = _.Ur.Event,
                k = _.Ur.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = _.Ur.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.m;
            return k(g)
        };
        e.prototype.M = function() {
            if (null != this.j) {
                for (var g = 0; g < this.j.length; ++g) f.o(this.j[g]);
                this.j = null
            }
        };
        var f = new b;
        e.prototype.K = function(g) {
            var h = this.H();
            g.jd(h.resolve, h.reject)
        };
        e.prototype.N = function(g, h) {
            var k = this.H();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, r) {
                return "function" == typeof p ? function(u) {
                    try {
                        l(p(u))
                    } catch (x) {
                        n(x)
                    }
                } : r
            }
            var l, n, m = new e(function(p, r) {
                l = p;
                n = r
            });
            this.jd(k(g, l), k(h, n));
            return m
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.jd = function(g, h) {
            function k() {
                switch (l.o) {
                    case 1:
                        g(l.m);
                        break;
                    case 2:
                        h(l.m);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.o);
                }
            }
            var l = this;
            null == this.j ? f.o(k) : this.j.push(k);
            this.I = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = _.w(g), n = l.next(); !n.done; n = l.next()) c(n.value).jd(h, k)
            })
        };
        e.all = function(g) {
            var h = _.w(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, n) {
                function m(u) {
                    return function(x) {
                        p[u] = x;
                        r--;
                        0 == r && l(p)
                    }
                }
                var p = [],
                    r = 0;
                do p.push(void 0), r++, c(k.value).jd(m(p.length - 1), n), k = h.next(); while (!k.done)
            })
        };
        return e
    }, "es6");
    Xr("Object.setPrototypeOf", function(a) {
        return a || hs
    }, "es6");
    Xr("WeakMap", function(a) {
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
                this.j = (e += Math.random() + 1).toString();
                if (g) {
                    g = _.w(g);
                    for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
                }
            };
        f.prototype.set = function(g, h) {
            if (!c(g)) throw Error("Invalid WeakMap key");
            if (!$r(g, d)) {
                var k = new b;
                Sr(g, d, {
                    value: k
                })
            }
            if (!$r(g, d)) throw Error("WeakMap key fail: " + g);
            g[d][this.j] = h;
            return this
        };
        f.prototype.get = function(g) {
            return c(g) && $r(g, d) ? g[d][this.j] : void 0
        };
        f.prototype.has = function(g) {
            return c(g) && $r(g, d) && $r(g[d], this.j)
        };
        f.prototype.delete = function(g) {
            return c(g) && $r(g, d) && $r(g[d], this.j) ? delete g[d][this.j] : !1
        };
        return f
    }, "es6");
    Xr("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(_.w([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = _.t(k, "entries").call(k),
                        n = l.next();
                    if (n.done || n.value[0] != h || "s" != n.value[1]) return !1;
                    n = l.next();
                    return n.done || 4 != n.value[0].x || "t" != n.value[1] || !l.next().done ? !1 : !0
                } catch (m) {
                    return !1
                }
            }()) return a;
        var b = new _.v.WeakMap,
            c = function(h) {
                this.o = {};
                this.j = f();
                this.size = 0;
                if (h) {
                    h = _.w(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.o[l.id] = []);
            l.Aa ? l.Aa.value = k : (l.Aa = {
                next: this.j,
                pb: this.j.pb,
                head: this.j,
                key: h,
                value: k
            }, l.list.push(l.Aa), this.j.pb.next = l.Aa, this.j.pb = l.Aa, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.Aa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.o[h.id], h.Aa.pb.next = h.Aa.next, h.Aa.next.pb = h.Aa.pb, h.Aa.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this.o = {};
            this.j = this.j.pb = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).Aa
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).Aa) && h.value
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
            for (var l = _.t(this, "entries").call(this), n; !(n = l.next()).done;) n = n.value, h.call(k, n[1], n[0], this)
        };
        c.prototype[_.t(_.v.Symbol, "iterator")] = _.t(c.prototype, "entries");
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var n = h.o[l];
                if (n && $r(h.o, l))
                    for (h = 0; h < n.length; h++) {
                        var m = n[h];
                        if (k !== k && m.key !== m.key || k === m.key) return {
                            id: l,
                            list: n,
                            index: h,
                            Aa: m
                        }
                    }
                return {
                    id: l,
                    list: n,
                    index: -1,
                    Aa: void 0
                }
            },
            e = function(h, k) {
                var l = h.j;
                return Yr(function() {
                    if (l) {
                        for (; l.head != h.j;) l = l.pb;
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
                return h.pb = h.next = h.head = h
            },
            g = 0;
        return c
    }, "es6");
    var rs = function(a, b) {
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
        e[_.t(_.v.Symbol, "iterator")] = function() {
            return e
        };
        return e
    };
    Xr("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return rs(this, function(b, c) {
                return [b, c]
            })
        }
    }, "es6");
    Xr("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return rs(this, function(b) {
                return b
            })
        }
    }, "es6");
    var ss = function(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    };
    Xr("String.prototype.endsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ss(this, b, "endsWith");
            void 0 === c && (c = d.length);
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var e = b.length; 0 < e && 0 < c;)
                if (d[--c] != b[--e]) return !1;
            return 0 >= e
        }
    }, "es6");
    var ts = function(a, b, c) {
        a instanceof String && (a = String(a));
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a[e];
            if (b.call(c, f, e, a)) return {
                i: e,
                lg: f
            }
        }
        return {
            i: -1,
            lg: void 0
        }
    };
    Xr("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            return ts(this, b, c).lg
        }
    }, "es6");
    Xr("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    }, "es6");
    Xr("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    }, "es6");
    Xr("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof _.v.Symbol && _.t(_.v.Symbol, "iterator") && b[_.t(_.v.Symbol, "iterator")];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    }, "es6");
    Xr("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return _.t(Number, "isFinite").call(Number, b) ? b === Math.floor(b) : !1
        }
    }, "es6");
    Xr("Array.prototype.values", function(a) {
        return a ? a : function() {
            return rs(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    Xr("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !_.t(a.prototype, "entries") || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(_.w([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = _.t(d, "entries").call(d),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.j = new _.v.Map;
            if (c) {
                c = _.w(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.j.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.j.set(c, c);
            this.size = this.j.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.j.delete(c);
            this.size = this.j.size;
            return c
        };
        b.prototype.clear = function() {
            this.j.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.j.has(c)
        };
        b.prototype.entries = function() {
            return _.t(this.j, "entries").call(this.j)
        };
        b.prototype.values = function() {
            return _.t(this.j, "values").call(this.j)
        };
        b.prototype.keys = _.t(b.prototype, "values");
        b.prototype[_.t(_.v.Symbol, "iterator")] = _.t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.j.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    Xr("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) $r(b, d) && c.push([d, b[d]]);
            return c
        }
    }, "es8");
    Xr("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = ss(this, b, "startsWith"),
                e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    }, "es6");
    Xr("globalThis", function(a) {
        return a || _.Ur
    }, "es_2020");
    Xr("Array.prototype.flatMap", function(a) {
        return a ? a : function(b, c) {
            var d = [];
            Array.prototype.forEach.call(this, function(e, f) {
                e = b.call(c, e, f, this);
                Array.isArray(e) ? d.push.apply(d, e) : d.push(e)
            });
            return d
        }
    }, "es9");
    Xr("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    }, "es6");
    Xr("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || _.t(Object, "is").call(Object, f, b)) return !0
            }
            return !1
        }
    }, "es7");
    Xr("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== ss(this, b, "includes").indexOf(b, c || 0)
        }
    }, "es6");
    Xr("AggregateError", function(a) {
        if (a) return a;
        a = function(b, c) {
            c = Error(c);
            "stack" in c && (this.stack = c.stack);
            this.errors = b;
            this.message = c.message
        };
        _.O(a, Error);
        a.prototype.name = "AggregateError";
        return a
    }, "es_2021");
    Xr("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : _.t(Array, "from").call(Array, b);
            return _.v.Promise.all(b.map(function(c) {
                return _.v.Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new _.v.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    Xr("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) $r(b, d) && c.push(b[d]);
            return c
        }
    }, "es8");
    Xr("Object.fromEntries", function(a) {
        return a ? a : function(b) {
            var c = {};
            if (!(_.t(_.v.Symbol, "iterator") in b)) throw new TypeError("" + b + " is not iterable");
            b = b[_.t(_.v.Symbol, "iterator")].call(b);
            for (var d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                c[d[0]] = d[1]
            }
            return c
        }
    }, "es_2019");
    Xr("Array.prototype.findIndex", function(a) {
        return a ? a : function(b, c) {
            return ts(this, b, c).i
        }
    }, "es6");
    Xr("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = _.t(Array.prototype, "flat").call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    }, "es9");
    Xr("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return _.v.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return _.v.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    Xr("String.raw", function(a) {
        return a ? a : function(b, c) {
            if (null == b) throw new TypeError("Cannot convert undefined or null to object");
            for (var d = b.raw, e = d.length, f = "", g = 0; g < e; ++g) f += d[g], g + 1 < e && g + 1 < arguments.length && (f += String(arguments[g + 1]));
            return f
        }
    }, "es6");
    _.q = this || self;
    us = function(a, b) {
        a: {
            var c = ["CLOSURE_FLAGS"];
            for (var d = _.q, e = 0; e < c.length; e++)
                if (d = d[c[e]], null == d) {
                    c = null;
                    break a
                }
            c = d
        }
        a = c && c[a];
        return null != a ? a : b
    };
    xa = function(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    };
    _.na = function(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    };
    oa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    pa = 0;
    vs = function(a, b, c) {
        return a.call.apply(a.bind, arguments)
    };
    ws = function(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    };
    _.xs = function(a, b, c) {
        _.xs = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? vs : ws;
        return _.xs.apply(null, arguments)
    };
    _.ys = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    };
    lf = function() {
        return Date.now()
    };
    var zs;
    var Es, Bs, As;
    _.Cs = function(a, b) {
        this.j = a === As && b || "";
        this.o = Bs
    };
    _.Cs.prototype.Xa = !0;
    _.Cs.prototype.Ia = function() {
        return this.j
    };
    _.Ds = function(a) {
        return a instanceof _.Cs && a.constructor === _.Cs && a.o === Bs ? a.j : "type_error:Const"
    };
    Es = function(a) {
        return new _.Cs(As, a)
    };
    Bs = {};
    As = {};
    var Ib = Es("https://tpc.googlesyndication.com/sodar/%{basename}.js");
    var Fs, Gs, Zi, Is;
    Fs = function() {
        return !0
    };
    Gs = function(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    };
    Zi = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    _.Hs = function(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    Is = function(a) {
        var b = 0,
            c = !1,
            d = [],
            e = function() {
                b = 0;
                c && (c = !1, f())
            },
            f = function() {
                b = _.q.setTimeout(e, 200);
                var g = d;
                d = [];
                a.apply(void 0, g)
            };
        return function(g) {
            d = arguments;
            b ? c = !0 : f()
        }
    };
    var Js, ea;
    Js = {
        passive: !0
    };
    ea = Zi(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            _.q.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });
    _.yb = function(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, fa(d)), !0) : !1
    };
    _.De = function(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, fa(d)), !0) : !1
    };
    var Os;
    _.ha = function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };
    _.Ks = function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    _.Ah = function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    };
    _.Cd = function(a, b) {
        return Array.prototype.map.call(a, b, void 0)
    };
    Os = function(a, b) {
        return Array.prototype.reduce.call(a, b, 0)
    };
    _.Ch = function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    };
    var Ha = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    var Ps = {
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
    var mp;
    mp = {};
    _.lp = function(a, b) {
        this.j = b === mp ? a : "";
        this.Xa = !0
    };
    _.lp.prototype.toString = function() {
        return this.j.toString()
    };
    _.lp.prototype.Ia = function() {
        return this.j.toString()
    };
    _.jb = function(a) {
        return a instanceof _.lp && a.constructor === _.lp ? a.j : "type_error:SafeScript"
    };
    var Zs, Hb, at, $s, Ts, Qs, ue, Vs;
    _.Rs = function(a, b) {
        this.j = b === Qs ? a : ""
    };
    _.Rs.prototype.toString = function() {
        return this.j + ""
    };
    _.Rs.prototype.Xa = !0;
    _.Rs.prototype.Ia = function() {
        return this.j.toString()
    };
    Zs = function(a, b) {
        a = Ts.exec(_.lb(a).toString());
        var c = a[3] || "";
        return ue(a[1] + Vs("?", a[2] || "", b) + Vs("#", c))
    };
    _.lb = function(a) {
        return a instanceof _.Rs && a.constructor === _.Rs ? a.j : "type_error:TrustedResourceUrl"
    };
    Hb = function(a, b) {
        var c = _.Ds(a);
        if (!$s.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(at, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof _.Cs ? _.Ds(d) : encodeURIComponent(String(d))
        });
        return ue(a)
    };
    at = /%{(\w+)}/g;
    $s = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i");
    Ts = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
    Qs = {};
    ue = function(a) {
        return new _.Rs(a, Qs)
    };
    Vs = function(a, b, c) {
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
    var bt = function(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        },
        $k = function(a) {
            return /^[\s\xa0]*$/.test(a)
        },
        yr = function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        jt = function(a) {
            if (!ct.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(dt, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(et, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ft, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(gt, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ht, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(it, "&#0;"));
            return a
        },
        dt = /&/g,
        et = /</g,
        ft = />/g,
        gt = /"/g,
        ht = /'/g,
        it = /\x00/g,
        ct = /[\x00&<>"']/,
        Ma = function(a, b) {
            return -1 != a.indexOf(b)
        },
        zr = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var lt, mt, ot, pt, qt, kt, tb;
    _.cb = function(a, b) {
        this.j = b === kt ? a : ""
    };
    _.cb.prototype.toString = function() {
        return this.j.toString()
    };
    _.cb.prototype.Xa = !0;
    _.cb.prototype.Ia = function() {
        return this.j.toString()
    };
    _.db = function(a) {
        return a instanceof _.cb && a.constructor === _.cb ? a.j : "type_error:SafeUrl"
    };
    lt = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;
    mt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    _.nt = function(a) {
        if (a instanceof _.cb) return a;
        a = "object" == typeof a && a.Xa ? a.Ia() : String(a);
        mt.test(a) ? a = tb(a) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(lt) ? tb(a) : null);
        return a
    };
    try {
        new URL("s://g"), ot = !0
    } catch (a) {
        ot = !1
    }
    pt = ot;
    qt = function(a) {
        if (a instanceof _.cb) return a;
        a = "object" == typeof a && a.Xa ? a.Ia() : String(a);
        a: {
            var b = a;
            if (pt) {
                try {
                    var c = new URL(b)
                } catch (d) {
                    b = "https:";
                    break a
                }
                b = c.protocol
            } else b: {
                c = document.createElement("a");
                try {
                    c.href = b
                } catch (d) {
                    b = void 0;
                    break b
                }
                b = c.protocol;b = ":" === b || "" === b ? "https:" : b
            }
        }
        "javascript:" === b && (a = "about:invalid#zClosurez");
        return tb(a)
    };
    kt = {};
    tb = function(a) {
        return new _.cb(a, kt)
    };
    _.ub = tb("about:invalid#zClosurez");
    _.rt = {};
    _.st = function(a, b) {
        this.j = b === _.rt ? a : "";
        this.Xa = !0
    };
    _.st.prototype.Ia = function() {
        return this.j
    };
    _.st.prototype.toString = function() {
        return this.j.toString()
    };
    _.tt = new _.st("", _.rt);
    _.ut = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$");
    _.vt = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g");
    _.wt = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g");
    var Ka = us(610401301, !1),
        xt = us(516931134, us(1, !0));
    var La, yt = _.q.navigator;
    La = yt ? yt.userAgentData || null : null;
    var zt, Ct, Ft, Dt, Ht, Et, Wg;
    zt = {};
    _.At = function(a, b) {
        this.j = b === zt ? a : "";
        this.Xa = !0
    };
    _.At.prototype.Ia = function() {
        return this.j.toString()
    };
    _.At.prototype.toString = function() {
        return this.j.toString()
    };
    _.nb = function(a) {
        return a instanceof _.At && a.constructor === _.At ? a.j : "type_error:SafeHtml"
    };
    Ct = function(a) {
        return a instanceof _.At ? a : _.Bt(jt("object" == typeof a && a.Xa ? a.Ia() : String(a)))
    };
    _.Yg = function(a) {
        if (!Dt.test(a)) throw Error("");
        if (a.toUpperCase() in Et) throw Error("");
    };
    Ft = function(a) {
        var b = Ct(Wg),
            c = [],
            d = function(e) {
                Array.isArray(e) ? e.forEach(d) : (e = Ct(e), c.push(_.nb(e).toString()))
            };
        a.forEach(d);
        return _.Bt(c.join(_.nb(b).toString()))
    };
    _.Gt = function(a) {
        return Ft(Array.prototype.slice.call(arguments))
    };
    _.Bt = function(a) {
        return new _.At(a, zt)
    };
    _.Zg = function(a, b, c) {
        var d = "";
        if (b)
            for (var e in b)
                if (Object.prototype.hasOwnProperty.call(b, e)) {
                    if (!Dt.test(e)) throw Error("");
                    var f = b[e];
                    if (null != f) {
                        var g = e;
                        if (f instanceof _.Cs) f = _.Ds(f);
                        else {
                            if ("style" == g.toLowerCase()) throw Error("");
                            if (/^on/i.test(g)) throw Error("");
                            if (g.toLowerCase() in Ht)
                                if (f instanceof _.Rs) f = _.lb(f).toString();
                                else if (f instanceof _.cb) f = _.db(f);
                            else if ("string" === typeof f) f = (_.nt(f) || _.ub).Ia();
                            else throw Error("");
                        }
                        f.Xa && (f = f.Ia());
                        f = g + '="' + jt(String(f)) + '"';
                        d += " " + f
                    }
                }
        b = "<" + a + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Ps[a.toLowerCase()] ? b += ">" : (c = _.Gt(c), b += ">" + _.nb(c).toString() + "</" + a + ">");
        return _.Bt(b)
    };
    Dt = /^[a-zA-Z0-9-]+$/;
    Ht = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    };
    Et = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };
    Wg = new _.At(_.q.trustedTypes && _.q.trustedTypes.emptyHTML || "", zt);
    _.It = _.Bt("<br>");
    var Jt;
    try {
        new URL("s://g"), Jt = !0
    } catch (a) {
        Jt = !1
    }
    var eb = Jt;
    var Kt = {
            ij: 0,
            ej: 1,
            fj: 2,
            0: "HTML_FORMATTED_CONTENT",
            1: "EMBEDDED_INTERNAL_CONTENT",
            2: "EMBEDDED_TRUSTED_EXTERNAL_CONTENT"
        },
        Lt = function(a, b) {
            b = Error.call(this, a + " cannot be used with intent " + Kt[b]);
            this.message = b.message;
            "stack" in b && (this.stack = b.stack);
            this.type = a;
            this.name = "TypeCannotBeUsedWithIntentError"
        };
    _.O(Lt, Error);
    var qb = function(a) {
            this.Ah = a
        },
        sb = [rb("data"), rb("http"), rb("https"), rb("mailto"), rb("ftp"), new qb(function(a) {
            return /^[^:]*([/?#]|$)/.test(a)
        })];
    var Cb = function(a) {
        return new _.v.Promise(function(b, c) {
            var d = new XMLHttpRequest;
            d.onreadystatechange = function() {
                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
            };
            d.open("GET", a, !0);
            d.send()
        })
    };
    var Lb, Kb = "undefined" !== typeof TextEncoder;
    _.Mt = function(a) {
        _.Mt[" "](a);
        return a
    };
    _.Mt[" "] = function() {};
    var Nt = function(a, b) {
        try {
            return _.Mt(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Ot, Qt, Rt, St, Tt, Ut;
    Ot = Ra();
    _.Pt = Sa();
    Qt = Oa("Edge");
    Rt = Oa("Gecko") && !(Ma(Ja().toLowerCase(), "webkit") && !Oa("Edge")) && !(Oa("Trident") || Oa("MSIE")) && !Oa("Edge");
    St = Ma(Ja().toLowerCase(), "webkit") && !Oa("Edge");
    Tt = function() {
        var a = _.q.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Vt = "",
            Wt = function() {
                var a = Ja();
                if (Rt) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Qt) return /Edge\/([\d\.]+)/.exec(a);
                if (_.Pt) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (St) return /WebKit\/(\S+)/.exec(a);
                if (Ot) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Wt && (Vt = Wt ? Wt[1] : "");
        if (_.Pt) {
            var Xt = Tt();
            if (null != Xt && Xt > parseFloat(Vt)) {
                Ut = String(Xt);
                break a
            }
        }
        Ut = Vt
    }
    var Yt = Ut,
        Zt;
    if (_.q.document && _.Pt) {
        var $t = Tt();
        Zt = $t ? $t : parseInt(Yt, 10) || void 0
    } else Zt = void 0;
    var au = Zt;
    !Oa("Android") || Wa();
    Wa();
    Xa();
    var bu = {},
        cu = null,
        du = Rt || St || "function" == typeof _.q.btoa,
        Pb = function(a, b) {
            void 0 === b && (b = 0);
            eu();
            b = bu[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
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
            return c.join("")
        },
        fu = function(a, b) {
            if (du && !b) a = _.q.btoa(a);
            else {
                for (var c = [], d = 0, e = 0; e < a.length; e++) {
                    var f = a.charCodeAt(e);
                    255 < f && (c[d++] = f & 255, f >>= 8);
                    c[d++] = f
                }
                a = Pb(c, b)
            }
            return a
        },
        Zp = function(a) {
            var b = "";
            gu(a, function(c) {
                b += String.fromCharCode(c)
            });
            return b
        },
        hu = function(a) {
            var b = a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : Ma("=.", a[b - 1]) && (c = Ma("=.", a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            gu(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        gu = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        n = cu[l];
                    if (null != n) return n;
                    if (!$k(l)) throw Error("Unknown base64 encoding at char: " + l);
                }
                return k
            }
            eu();
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
        eu = function() {
            if (!cu) {
                cu = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    bu[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e];
                        void 0 === cu[f] && (cu[f] = e)
                    }
                }
            }
        };
    var Tb = "undefined" !== typeof Uint8Array,
        Nb = !_.Pt && "function" === typeof btoa,
        iu = /[-_.]/g,
        Rb = {
            "-": "+",
            _: "/",
            ".": "="
        },
        bk, Xb = {};
    var ju, wc = function(a, b) {
            Yb(b);
            this.j = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        },
        xc = function() {
            return ju || (ju = new wc(null, Xb))
        },
        td = function(a) {
            var b = a.j;
            return null == b ? "" : "string" === typeof b ? b : a.j = Qb(b)
        };
    wc.prototype.isEmpty = function() {
        return null == this.j
    };
    var ak = function(a) {
        Yb(Xb);
        var b = a.j;
        if (null != b && !Wb(b))
            if ("string" === typeof b)
                if (Nb) {
                    iu.test(b) && (b = b.replace(iu, Sb));
                    b = atob(b);
                    for (var c = new Uint8Array(b.length), d = 0; d < b.length; d++) c[d] = b.charCodeAt(d);
                    b = c
                } else b = hu(b);
        else b = null;
        return null == b ? b : a.j = b
    };
    var ac = 0,
        bc = 0,
        dc = "function" === typeof BigInt;
    var ku = function(a, b) {
            this.o = a >>> 0;
            this.j = b >>> 0
        },
        mu = function(a) {
            if (!a) return lu || (lu = new ku(0, 0));
            if (!/^\d+$/.test(a)) return null;
            ec(a);
            return new ku(ac, bc)
        },
        lu, nu = function(a, b) {
            this.o = a >>> 0;
            this.j = b >>> 0
        },
        be = function(a) {
            if (!a) return ou || (ou = new nu(0, 0));
            if (!/^-?\d+$/.test(a)) return null;
            ec(a);
            return new nu(ac, bc)
        },
        ou;
    var pu = function() {
        this.j = []
    };
    pu.prototype.length = function() {
        return this.j.length
    };
    pu.prototype.end = function() {
        var a = this.j;
        this.j = [];
        return a
    };
    var de = function(a, b, c) {
            for (; 0 < c || 127 < b;) a.j.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
            a.j.push(b)
        },
        ce = function(a, b) {
            for (; 127 < b;) a.j.push(b & 127 | 128), b >>>= 7;
            a.j.push(b)
        },
        qu = function(a, b) {
            if (0 <= b) ce(a, b);
            else {
                for (var c = 0; 9 > c; c++) a.j.push(b & 127 | 128), b >>= 7;
                a.j.push(1)
            }
        };
    var he = function() {
            this.m = [];
            this.o = 0;
            this.j = new pu
        },
        ie = function(a, b) {
            0 !== b.length && (a.m.push(b), a.o += b.length)
        },
        ru = function(a, b) {
            ce(a.j, 8 * b + 2);
            b = a.j.end();
            ie(a, b);
            b.push(a.o);
            return b
        },
        su = function(a, b) {
            var c = b.pop();
            for (c = a.o + a.j.length() - c; 127 < c;) b.push(c & 127 | 128), c >>>= 7, a.o++;
            b.push(c);
            a.o++
        },
        Od = function(a, b) {
            if (b = b.te) {
                ie(a, a.j.end());
                for (var c = 0; c < b.length; c++) ie(a, ak(b[c]) || bk || (bk = new Uint8Array(0)))
            }
        },
        tu = function(a, b, c) {
            ce(a.j, 8 * b + 2);
            ce(a.j, c.length);
            ie(a, a.j.end());
            ie(a, c)
        };
    var fc = "function" === typeof _.v.Symbol && "symbol" === typeof(0, _.v.Symbol)() ? (0, _.v.Symbol)() : void 0;
    var Lc = {},
        uu, Vc = Object.freeze(jc([], 23)),
        vu = function(a) {
            this.xf = 0;
            this.Xe = a
        };
    vu.prototype.next = function() {
        return this.xf < this.Xe.length ? {
            done: !1,
            value: this.Xe[this.xf++]
        } : {
            done: !0,
            value: void 0
        }
    };
    vu.prototype[_.t(_.v.Symbol, "iterator")] = function() {
        return this
    };
    var jd = !xt;
    var Pc = "function" === typeof _.v.Symbol && "symbol" === typeof(0, _.v.Symbol)() ? (0, _.v.Symbol)() : "di";
    var bd = function(a, b, c, d) {
            c = void 0 === c ? Qc : c;
            d = void 0 === d ? Qc : d;
            var e = ic(a);
            e |= 32;
            jc(a, e);
            this.m = e;
            this.o = b;
            this.H = c || Qc;
            this.C = this.o ? Tc : d || Qc;
            var f = new _.v.Map;
            this.j = f;
            for (var g = 0; g < a.length; g++) {
                var h = a[g],
                    k = c(h[0], !1, !0),
                    l = h[1];
                b || (l = d(h[1], !1, !0, void 0, void 0, e));
                null != k && f.set(k, l)
            }
            this.size = f.size
        },
        wu = function(a) {
            if (a.m & 2) throw Error("Cannot mutate an immutable Map");
        },
        ud = function(a, b) {
            b = void 0 === b ? Uc : b;
            for (var c = _.t(Array, "from").call(Array, _.t(a.j, "keys").call(a.j)), d = 0; d < c.length; d++) {
                var e = c[d],
                    f = a.j.get(c[d]);
                c[d] = [b(e), b(f)]
            }
            return c
        },
        cd = function(a, b) {
            b = void 0 === b ? Uc : b;
            var c = [];
            a = _.t(a.j, "entries").call(a.j);
            for (var d; !(d = a.next()).done;) d = d.value, d[0] = b(d[0]), d[1] = b(d[1]), c.push(d);
            return c
        };
    _.aa = bd.prototype;
    _.aa.clear = function() {
        wu(this);
        this.j.clear();
        this.size = 0
    };
    _.aa.delete = function(a) {
        wu(this);
        return this.j.delete(a) ? (this.size = this.j.size, !0) : !1
    };
    _.aa.entries = function() {
        for (var a = _.t(Array, "from").call(Array, _.t(this.j, "keys").call(this.j)), b = 0; b < a.length; b++) {
            var c = a[b];
            a[b] = [c, this.get(c)]
        }
        return new vu(a)
    };
    _.aa.keys = function() {
        return _.t(this.j, "keys").call(this.j)
    };
    _.aa.values = function() {
        for (var a = _.t(Array, "from").call(Array, _.t(this.j, "keys").call(this.j)), b = 0; b < a.length; b++) a[b] = this.get(a[b]);
        return new vu(a)
    };
    _.aa.forEach = function(a, b) {
        var c = this;
        this.j.forEach(function(d, e) {
            a.call(b, c.get(e), e, c)
        })
    };
    _.aa.set = function(a, b) {
        wu(this);
        var c = this.j;
        a = this.H(a, !0, !1);
        if (null == a) return this;
        if (null == b) return c.delete(a), this;
        c.set(a, this.C(b, !0, !0, this.o, !1, this.m));
        this.size = c.size;
        return this
    };
    _.aa.get = function(a) {
        a = this.H(a, !1, !1);
        var b = this.j,
            c = b.get(a);
        if (void 0 !== c) {
            var d = this.m,
                e = this.o;
            return e ? (Array.isArray(c) && d & 16 && rc(c), d = this.C(c, !1, !0, e, this.l, d), d !== c && b.set(a, d), d) : c
        }
    };
    _.aa.has = function(a) {
        return this.o ? null != this.get(a) : this.j.has(a)
    };
    bd.prototype[_.t(_.v.Symbol, "iterator")] = function() {
        return _.t(this, "entries").call(this)
    };
    var xu, y, Wc, Al, po, Bo, zu, ad, $f, Vj, Lf, Zj, Bp, yu, Dp, dg, Te, Au, We, Un, ri, tq, fi, Bu, Du, Wn, Eu, Fu, Gu, Hu, Iu;
    xu = function(a) {
        var b = a.o + a.Cb;
        return a.Ya || (a.Ya = a.fa[b] = {})
    };
    y = function(a, b, c) {
        return -1 === b ? null : b >= a.o ? a.Ya ? a.Ya[b] : void 0 : c && a.Ya && (c = a.Ya[b], null != c) ? c : a.fa[b + a.Cb]
    };
    _.z = function(a, b, c, d) {
        Ac(a);
        return Wc(a, b, c, d)
    };
    Wc = function(a, b, c, d) {
        a.C && (a.C = void 0);
        if (b >= a.o || d) return xu(a)[b] = c, a;
        a.fa[b + a.Cb] = c;
        (c = a.Ya) && b in c && delete c[b];
        return a
    };
    Al = function(a, b) {
        return null != y(a, b, !1)
    };
    po = function(a, b, c) {
        return void 0 !== yu(a, b, c, !1)
    };
    Bo = function(a, b) {
        var c = y(a, b);
        var d = null == c ? c : "number" === typeof c || "NaN" === c || "Infinity" === c || "-Infinity" === c ? Number(c) : void 0;
        null != d && d !== c && Wc(a, b, d);
        return d
    };
    zu = function(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    };
    _.E = function(a, b, c) {
        return od(zu(a, b), void 0 === c ? !1 : c)
    };
    $f = function(a, b) {
        return _.z(a, b, void 0, !1)
    };
    Vj = function(a, b, c, d) {
        Ac(a);
        (c = Zj(a, c)) && c !== b && null != d && Wc(a, c, void 0, !1);
        return Wc(a, b, d)
    };
    Lf = function(a, b, c) {
        return Zj(a, b) === c ? c : -1
    };
    Zj = function(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != y(a, e) && (0 !== c && Wc(a, c, void 0, !1), c = e)
        }
        return c
    };
    Bp = function(a, b, c) {
        var d = ic(a.fa);
        zc(d);
        var e = y(a, c);
        b = Sc(Oc(e, b, !0, d));
        e !== b && Wc(a, c, b);
        return b
    };
    yu = function(a, b, c, d) {
        var e = y(a, c, d);
        b = Oc(e, b, !1, ic(a.fa));
        b !== e && null != b && Wc(a, c, b, d);
        return b
    };
    Dp = function(a, b, c) {
        return (a = yu(a, b, c, !1)) ? a : Mc(b)
    };
    dg = function(a, b, c) {
        var d = void 0 === d ? !1 : d;
        b = yu(a, b, c, d);
        if (null == b) return b;
        if (!pc(a.fa)) {
            var e = Sc(b);
            e !== b && (b = e, Wc(a, c, b, d))
        }
        return b
    };
    Te = function(a, b, c) {
        var d = ic(a.fa),
            e = !!(d & 2);
        b = kd(a, b, c, e ? 1 : 2, d);
        a = jd ? Xc(a, c, 3, void 0, e) : b;
        if (!(e || ic(a) & 8)) {
            for (e = 0; e < b.length; e++) c = b[e], d = Sc(c), c !== d && (b[e] = d, jd && (a[e] = d.fa));
            gc(a, 8)
        }
        return b
    };
    _.Lh = function(a, b, c) {
        Ac(a);
        null == c && (c = void 0);
        return Wc(a, b, c)
    };
    _.Oh = function(a, b, c, d) {
        Ac(a);
        null == d && (d = void 0);
        return Vj(a, b, c, d)
    };
    _.Dd = function(a, b, c, d) {
        Ac(a);
        var e = null == c ? Vc : jd ? kc([]) : c;
        if (null != c) {
            for (var f = !!c.length, g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !pc(h.fa);
                jd && (e[g] = h.fa)
            }
            f = 1 | (f ? 8 : 0) | (jd ? 0 : 4);
            g = ic(e);
            (g & f) !== f && (Object.isFrozen(e) && (e = Array.prototype.slice.call(e)), jc(e, g | f));
            jd && (a.j || (a.j = {}), a.j[b] = c)
        } else jd && a.j && (a.j[b] = void 0);
        return Wc(a, b, e, d)
    };
    Au = function(a, b, c, d) {
        var e = ic(a.fa);
        zc(e);
        e = kd(a, c, b, 2, e);
        c = null != d ? d : new c;
        a = jd ? Xc(a, b, 2, void 0, !1) : void 0;
        e.push(c);
        jd && a.push(c.fa);
        pc(c.fa) && hc(jd ? a : e, 8);
        return c
    };
    _.Pf = function(a, b, c, d) {
        Au(a, b, c, d);
        return a
    };
    We = function(a, b) {
        return od(y(a, b), 0)
    };
    Un = function(a, b) {
        return Dc(y(a, b))
    };
    ri = function(a, b) {
        a = zu(a, b);
        return null == a ? void 0 : a
    };
    tq = function(a, b) {
        return od(fi(a, b), 0)
    };
    fi = function(a, b) {
        a: if (a = y(a, b), null != a) {
            switch (typeof a) {
                case "string":
                    a = +a;
                    break a;
                case "number":
                    break a
            }
            a = void 0
        }return a
    };
    _.df = function(a, b, c) {
        return od(y(a, b), void 0 === c ? 0 : c)
    };
    Bu = function() {
        var a = hj().j;
        return y(a, 26)
    };
    Du = function(a) {
        var b = Cu;
        var c = void 0 === c ? 0 : c;
        return _.df(a, Lf(a, b, 3), c)
    };
    _.Tm = function(a, b, c, d) {
        return Yc(a, b, Kc, c, d)
    };
    Wn = function(a, b) {
        return Xc(a, b, 0, !1, pc(a.fa))
    };
    _.Kf = function(a, b) {
        return od(y(a, b), "")
    };
    _.Ve = function(a, b, c) {
        return od(y(a, b), void 0 === c ? 0 : c)
    };
    Eu = function(a, b, c) {
        a = _.Tm(a, b, void 0, 2);
        if (0 > c || c >= a.length) throw Error();
        return a[c]
    };
    Fu = function(a, b, c) {
        Ac(a);
        Xc(a, b, 2, !1, !1).push(c);
        return a
    };
    Gu = function(a, b) {
        return _.Kf(a, Lf(a, b, 2))
    };
    Hu = function(a, b) {
        a = y(a, b);
        return null == a ? void 0 : a
    };
    Iu = function(a, b) {
        a = y(a, b);
        return null == a ? void 0 : a
    };
    _.Uf = function(a, b) {
        return null != y(a, b)
    };
    var pd;
    _.Q = function(a, b, c, d) {
        null == a && (a = pd);
        pd = void 0;
        var e = this.constructor.messageId;
        if (null == a) {
            a = e ? [e] : [];
            var f = 48;
            var g = !0;
            d && (f |= 128);
            jc(a, f)
        } else {
            if (!Array.isArray(a)) throw Error();
            if (e && e !== a[0]) throw Error();
            f = gc(a, 0) | 32;
            g = 0 !== (16 & f);
            if (d) {
                if (f |= 128, 0 < a.length) {
                    var h = a[a.length - 1];
                    if (uc(h) && "g" in h) {
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
            jc(a, f)
        }
        this.Cb = e ? 0 : -1;
        this.j = void 0;
        this.fa = a;
        a: {
            f = this.fa.length;e = f - 1;
            if (f && (f = this.fa[e], uc(f))) {
                this.Ya = f;
                this.o = e - this.Cb;
                break a
            }
            void 0 !== b && -1 < b ? (this.o = Math.max(b, e + 1 - this.Cb), this.Ya = void 0) : this.o = Number.MAX_VALUE
        }
        if (!d && this.Ya && "g" in this.Ya) throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
        if (c) {
            b = g && !0;
            d = this.o;
            var n;
            for (g = 0; g < c.length; g++) e = c[g], e < d ? (e += this.Cb, (f = a[e]) ? Kd(f, b) : a[e] = Vc) : (n || (n = xu(this)), (f = n[e]) ? Kd(f, b) : n[e] = Vc)
        }
    };
    _.Q.prototype.toJSON = function() {
        var a = this.fa,
            b;
        uu ? b = a : b = vd(a, xd, yd, void 0, !1, !1);
        return b
    };
    var Qe = function(a) {
        uu = !0;
        try {
            return JSON.stringify(a.toJSON(), sd)
        } finally {
            uu = !1
        }
    };
    _.Q.prototype.xe = Lc;
    var Td = (0, _.v.Symbol)(),
        Rd = (0, _.v.Symbol)(),
        Qd = (0, _.v.Symbol)(),
        Ju = ae(function(a, b, c) {
            if (5 !== a.j()) return !1;
            _.z(b, c, a.l());
            return !0
        }, function(a, b, c) {
            b = Bo(b, c);
            if (null != b) {
                ce(a.j, 8 * c + 5);
                a = a.j;
                var d = +b;
                0 === d ? 0 < 1 / d ? ac = bc = 0 : (bc = 0, ac = 2147483648) : isNaN(d) ? (bc = 0, ac = 2147483647) : (d = (c = 0 > d ? -2147483648 : 0) ? -d : d, 3.4028234663852886E38 < d ? (bc = 0, ac = (c | 2139095040) >>> 0) : 1.1754943508222875E-38 > d ? (d = Math.round(d / Math.pow(2, -149)), bc = 0, ac = (c | d) >>> 0) : (b = Math.floor(Math.log(d) / Math.LN2), d *= Math.pow(2, -b), d = Math.round(8388608 * d), 16777216 <= d && ++b, bc = 0, ac = (c | b + 127 << 23 | d & 8388607) >>> 0));
                c = ac;
                a.j.push(c >>> 0 & 255);
                a.j.push(c >>> 8 & 255);
                a.j.push(c >>> 16 & 255);
                a.j.push(c >>> 24 & 255)
            }
        }),
        Ku = ae(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.M());
            return !0
        }, ee),
        Lu = ae(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.A());
            return !0
        }, ee),
        Mu = ae(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.ha());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && ("string" === typeof b && mu(b), null != b && (ce(a.j, 8 * c), "number" === typeof b ? (a = a.j, cc(b), de(a, ac, bc)) : (c = mu(b), de(a.j, c.o, c.j))))
        }),
        Nu = ae(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.I());
            return !0
        }, function(a, b, c) {
            b = Un(b, c);
            null != b && null != b && (ce(a.j, 8 * c), qu(a.j, b))
        }),
        Ou = ae(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.H());
            return !0
        }, function(a, b, c) {
            b = zu(b, c);
            null != b && (ce(a.j, 8 * c), a.j.j.push(b ? 1 : 0))
        }),
        Pu = ae(function(a, b, c) {
            if (2 !== a.j()) return !1;
            _.z(b, c, a.m());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && tu(a, c, Mb(b))
        }),
        Qu = ae(function(a, b, c) {
            if (2 !== a.j()) return !1;
            Fu(b, c, a.m());
            return !0
        }, function(a, b, c) {
            b = _.Tm(b, c);
            if (null != b)
                for (var d = 0; d < b.length; d++) {
                    var e = b[d];
                    null != e && tu(a, c, Mb(e))
                }
        }),
        Ru = ae(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.o(Bp(b, d, c), e);
            return !0
        }, function(a, b, c, d, e) {
            b = dg(b, d, c);
            null != b && (c = ru(a, c), e(b, a), su(a, c))
        }),
        Su = ae(function(a, b, c, d, e) {
            if (2 !== a.j()) return !1;
            a.o(Au(b, c, d), e);
            return !0
        }, function(a, b, c, d, e) {
            b = Te(b, d, c);
            if (null != b)
                for (d = 0; d < b.length; d++) {
                    var f = ru(a, c);
                    e(b[d], a);
                    su(a, f)
                }
        }),
        Tu = ae(function(a, b, c) {
            if (0 !== a.j()) return !1;
            _.z(b, c, a.C());
            return !0
        }, function(a, b, c) {
            b = y(b, c);
            null != b && (b = parseInt(b, 10), ce(a.j, 8 * c), qu(a.j, b))
        });
    var fe = void 0;
    var $p = function(a) {
        _.Q.call(this, a)
    };
    _.O($p, _.Q);
    var aq = function(a) {
        _.Q.call(this, a)
    };
    _.O(aq, _.Q);
    var Uu = function(a) {
            this.j = a.o;
            this.o = a.m;
            this.H = a.H;
            this.Ic = a.Ic;
            this.G = a.G;
            this.kc = a.kc;
            this.Bd = a.Bd;
            this.Id = a.Id;
            this.zd = a.zd;
            this.m = a.j
        },
        Vu = function(a, b, c) {
            this.o = a;
            this.m = b;
            this.H = c;
            this.G = window;
            this.kc = "env";
            this.Bd = "n";
            this.Id = "0";
            this.zd = "1";
            this.j = !0
        };
    Vu.prototype.build = function() {
        return new Uu(this)
    };
    var jq = function(a, b) {
        var c = void 0 === _.E(b, 6) ? !0 : _.E(b, 6),
            d, e;
        a: switch (_.Ve(b, 4, 0)) {
            case 1:
                var f = "pt";
                break a;
            case 2:
                f = "cr";
                break a;
            default:
                f = ""
        }
        f = new Vu(le(_.Ve(b, 2, 0)), _.Kf(b, 3), f);
        b = null != (e = null == (d = dg(b, $p, 5)) ? void 0 : _.Kf(d, 1)) ? e : "";
        f.Ic = b;
        f.j = c;
        f.G = a;
        return f.build()
    };
    var Wu = function(a) {
        _.Q.call(this, a)
    };
    _.O(Wu, _.Q);
    Wu.prototype.getId = function() {
        return _.Kf(this, 1)
    };
    var uo = function(a) {
            var b = new Wu;
            return _.z(b, 1, a)
        },
        Xu = [Wu, 1, Pu];
    var Yu = function(a) {
        _.Q.call(this, a)
    };
    _.O(Yu, _.Q);
    Yu.prototype.getWidth = function() {
        return We(this, 1)
    };
    var zo = function(a) {
        var b = new Yu;
        return _.z(b, 1, a)
    };
    Yu.prototype.getHeight = function() {
        return We(this, 2)
    };
    var yo = function(a, b) {
            return _.z(a, 2, b)
        },
        Zu = [Yu, 1, Nu, 2, Nu];
    var $u = function(a) {
        _.Q.call(this, a)
    };
    _.O($u, _.Q);
    var av = [$u, 1, Lu, 2, Ou];
    var so = function(a) {
        _.Q.call(this, a, -1, bv)
    };
    _.O(so, _.Q);
    var vo = function(a, b) {
            _.ed(a, 4, b, _.Hc)
        },
        to = function(a, b) {
            _.Lh(a, 6, b)
        },
        xo = function(a, b) {
            _.Lh(a, 7, b)
        },
        bv = [4],
        cv = [so, 1, Pu, 2, Lu, 8, Lu, 3, Pu, 4, Qu, 5, Tu, 6, Ru, Xu, 7, Ru, Zu, 9, Ru, av];
    var zn = function(a) {
        _.Q.call(this, a)
    };
    _.O(zn, _.Q);
    var yn = function(a, b) {
            return _.z(a, 1, b)
        },
        wn = function(a, b) {
            return _.z(a, 4, b)
        },
        xn = function(a, b) {
            return _.z(a, 2, b)
        },
        dv = [zn, 1, Tu, 4, Ou, 2, Nu, 3, Pu];
    var jo = function(a) {
        _.Q.call(this, a, -1, ev)
    };
    _.O(jo, _.Q);
    var io = function(a, b) {
            return _.z(a, 1, b)
        },
        mo = function(a, b) {
            _.z(a, 2, b)
        },
        go = function(a, b) {
            return _.Pf(a, 3, so, b)
        },
        ho = function(a, b) {
            return _.z(a, 4, b)
        };
    jo.prototype.tf = function() {
        return _.Ve(this, 7, 0)
    };
    var ev = [10, 3],
        fv = [jo, 1, Pu, 10, Qu, 2, Lu, 3, Su, cv, 4, Tu, 5, Ru, dv, 6, Ou, 7, Tu];
    var gv = function(a) {
        _.Q.call(this, a)
    };
    _.O(gv, _.Q);
    var hv = [gv, 1, Tu, 2, Ou];
    var jv = function(a) {
        _.Q.call(this, a, -1, iv)
    };
    _.O(jv, _.Q);
    var fo = function(a, b) {
            return Au(a, 2, jo, b)
        },
        qo = function(a, b) {
            _.Lh(a, 5, b)
        },
        kv = function(a, b) {
            _.Lh(a, 9, b)
        },
        iv = [2],
        lv = [jv, 1, Tu, 6, Pu, 2, Su, fv, 3, Tu, 4, Pu, 5, Ru, dv, 9, Ru, hv, 7, Ou, 8, Nu];
    var nv = function(a) {
        _.Q.call(this, a, -1, mv)
    };
    _.O(nv, _.Q);
    var ov = function(a) {
            var b = new jv;
            b = _.z(b, 1, 1);
            return Au(a, 1, jv, b)
        },
        mv = [1];
    nv.prototype.m = je([nv, 1, Su, lv]);
    var pv = function(a) {
        _.Q.call(this, a)
    };
    _.O(pv, _.Q);
    var Cu = [2, 3];
    var rv = function(a) {
        _.Q.call(this, a, -1, qv)
    };
    _.O(rv, _.Q);
    var qv = [1];
    var tv = function(a) {
        _.Q.call(this, a, -1, sv)
    };
    _.O(tv, _.Q);
    var sv = [1];
    var uv = function(a) {
        _.Q.call(this, a)
    };
    _.O(uv, _.Q);
    uv.prototype.m = function() {
        return _.Kf(this, 1)
    };
    uv.prototype.H = function() {
        return Gu(this, Mf)
    };
    var Mf = [2, 3];
    var wv = function(a) {
        _.Q.call(this, a, -1, vv)
    };
    _.O(wv, _.Q);
    wv.prototype.m = function() {
        return Te(this, uv, 2)
    };
    var Tf = ke(wv),
        vv = [2];
    var yv = function(a) {
        _.Q.call(this, a, -1, xv)
    };
    _.O(yv, _.Q);
    var xv = [4];
    var zv = function(a) {
        _.Q.call(this, a)
    };
    _.O(zv, _.Q);
    var Bv = function(a) {
        _.Q.call(this, a, -1, Av)
    };
    _.O(Bv, _.Q);
    Bv.prototype.xd = function() {
        return Dp(this, zv, 2)
    };
    var Av = [1];
    var Cv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Cv, _.Q);
    var Ev = function(a) {
        _.Q.call(this, a, -1, Dv)
    };
    _.O(Ev, _.Q);
    var Dv = [1];
    var Fv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Fv, _.Q);
    var Gv = [Fv, 1, Tu, 2, Lu];
    var Hv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Hv, _.Q);
    var Iv = [Hv, 1, Ku];
    var Jv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Jv, _.Q);
    Jv.prototype.getEscapedQemQueryId = function() {
        return _.Kf(this, 1)
    };
    var Kv = [Jv, 1, Pu, 2, Ru, Iv, 3, Ru, Gv];
    var Lv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Lv, _.Q);
    Lv.prototype.getAdUnitPath = function() {
        return _.Kf(this, 1)
    };
    var Tn = function(a) {
        _.Q.call(this, a)
    };
    _.O(Tn, _.Q);
    var Rn = function(a) {
        _.Q.call(this, a)
    };
    _.O(Rn, _.Q);
    var Sn = [1, 2];
    var Nv = function(a) {
        _.Q.call(this, a, -1, Mv)
    };
    _.O(Nv, _.Q);
    var Mv = [1, 2];
    var Yn = function(a) {
        _.Q.call(this, a)
    };
    _.O(Yn, _.Q);
    Yn.prototype.getAdUnitPath = function() {
        return _.Kf(this, 2)
    };
    Yn.prototype.getWidth = function() {
        return We(this, 3)
    };
    Yn.prototype.getHeight = function() {
        return We(this, 4)
    };
    var Pv = function(a) {
        _.Q.call(this, a, -1, Ov)
    };
    _.O(Pv, _.Q);
    var Ov = [3];
    var Rv = function(a) {
        _.Q.call(this, a, -1, Qv)
    };
    _.O(Rv, _.Q);
    var Qv = [5];
    var Tv = function(a) {
            _.Q.call(this, a, -1, Sv)
        },
        Sv;
    _.O(Tv, _.Q);
    _.Uv = function(a) {
        return Te(a, Rv, 15)
    };
    Sv = [15];
    var Vv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Vv, _.Q);
    Vv.prototype.getAdUnitPath = function() {
        return _.Kf(this, 2)
    };
    var Wv = function(a) {
        _.Q.call(this, a)
    };
    _.O(Wv, _.Q);
    var Xv = [5, 6, 7, 8, 9];
    var Zv = function(a) {
        _.Q.call(this, a, -1, Yv)
    };
    _.O(Zv, _.Q);
    var Yv = [4, 5, 6];
    var $v = function(a) {
        _.Q.call(this, a)
    };
    _.O($v, _.Q);
    $v.prototype.Ec = function() {
        return _.Uf(this, 2)
    };
    var bw = function(a) {
        _.Q.call(this, a, -1, aw)
    };
    _.O(bw, _.Q);
    var aw = [13];
    var dw = function(a) {
        _.Q.call(this, a, -1, cw)
    };
    _.O(dw, _.Q);
    var cw = [13];
    var eg = function(a) {
        _.Q.call(this, a)
    };
    _.O(eg, _.Q);
    var cg = function(a, b) {
            return _.z(a, 1, b)
        },
        ew = [eg, 1, Tu];
    var If = function(a) {
        _.Q.call(this, a)
    };
    _.O(If, _.Q);
    var Of = function(a) {
        var b = new If;
        return _.z(b, 1, a)
    };
    If.prototype.Fa = function(a) {
        return _.Lh(this, 10, a)
    };
    var fw = ke(If),
        gw = [If, 1, Pu, 2, Pu, 3, Lu, 7, Lu, 8, Ju, 4, Nu, 5, Nu, 6, Nu, 9, Ou, 11, Ou, 10, Ru, ew];
    var hw = function(a) {
        _.Q.call(this, a)
    };
    _.O(hw, _.Q);
    var iw = [hw, 4, Tu, 5, Pu];
    var jw = function(a) {
        _.Q.call(this, a)
    };
    _.O(jw, _.Q);
    var kw = [jw, 1, Mu, 2, Mu, 3, Mu];
    var lw = function(a) {
        _.Q.call(this, a)
    };
    _.O(lw, _.Q);
    lw.prototype.Fa = function(a) {
        return _.Lh(this, 7, a)
    };
    var mw = [lw, 5, Pu, 4, Pu, 2, Ru, kw, 3, Ru, kw, 6, Ou, 7, Ru, iw, 8, Lu];
    var Ef = function(a) {
        _.Q.call(this, a, -1, nw)
    };
    _.O(Ef, _.Q);
    var nw = [1, 2];
    Ef.prototype.m = je([Ef, 1, Su, mw, 2, Su, gw]);
    var ow = function(a) {
        _.Q.call(this, a)
    };
    _.O(ow, _.Q);
    ow.prototype.m = function() {
        return _.Kf(this, 1)
    };
    ow.prototype.H = function() {
        return Gu(this, pw)
    };
    var pw = [2, 3];
    var rw = function(a) {
        _.Q.call(this, a, -1, qw)
    };
    _.O(rw, _.Q);
    rw.prototype.m = function() {
        return Te(this, ow, 1)
    };
    var qw = [1];
    var sw = function(a) {
        _.Q.call(this, a)
    };
    _.O(sw, _.Q);
    sw.prototype.Ec = function() {
        return _.Uf(this, 1)
    };
    sw.prototype.getVersion = function() {
        return y(this, 5)
    };
    var tw = function(a) {
        _.Q.call(this, a)
    };
    _.O(tw, _.Q);
    var uw = function(a) {
        _.Q.call(this, a)
    };
    _.O(uw, _.Q);
    var vw = function(a) {
        _.Q.call(this, a)
    };
    _.O(vw, _.Q);
    var xw = function(a) {
        _.Q.call(this, a, -1, ww)
    };
    _.O(xw, _.Q);
    xw.prototype.getEscapedQemQueryId = function() {
        return _.Kf(this, 4)
    };
    var ww = [2];
    var yw = function(a) {
        _.Q.call(this, a)
    };
    _.O(yw, _.Q);
    var zw = function(a) {
        _.Q.call(this, a)
    };
    _.O(zw, _.Q);
    var Aw = function(a) {
        _.Q.call(this, a)
    };
    _.O(Aw, _.Q);
    var Bw = function(a) {
        _.Q.call(this, a)
    };
    _.O(Bw, _.Q);
    Bw.prototype.getEscapedQemQueryId = function() {
        return _.Kf(this, 2)
    };
    var Dw = function(a) {
        _.Q.call(this, a, -1, Cw)
    };
    _.O(Dw, _.Q);
    Dw.prototype.getWidth = function() {
        return We(this, 9)
    };
    Dw.prototype.getHeight = function() {
        return We(this, 10)
    };
    var Cw = [3, 7, 11];
    var Fw = function(a) {
        _.Q.call(this, a, -1, Ew)
    };
    _.O(Fw, _.Q);
    Fw.prototype.getHeight = function() {
        return Un(this, 6)
    };
    Fw.prototype.getWidth = function() {
        return Un(this, 7)
    };
    Fw.prototype.getEscapedQemQueryId = function() {
        return y(this, 34)
    };
    var Ew = [14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 23, 27, 38, 53, 62, 63],
        Gw = [39, 48];
    var Hw = function(a) {
        _.Q.call(this, a)
    };
    _.O(Hw, _.Q);
    var Yp = ke(Hw);
    var Jw = function(a) {
        _.Q.call(this, a, -1, Iw)
    };
    _.O(Jw, _.Q);
    var Kw = ke(Jw),
        Iw = [1, 2, 3];
    var Lw = window;
    var Er = function(a) {
        _.Q.call(this, a, -1, Mw)
    };
    _.O(Er, _.Q);
    var Mw = [15];
    var Dr = function(a) {
        _.Q.call(this, a)
    };
    _.O(Dr, _.Q);
    Dr.prototype.getCorrelator = function() {
        return _.df(this, 1)
    };
    Dr.prototype.setCorrelator = function(a) {
        return _.md(this, 1, a)
    };
    var Cr = function(a) {
        _.Q.call(this, a)
    };
    _.O(Cr, _.Q);
    var Nw = _.Pt || St;
    var Pw, Qw, Rw;
    _.Ow = Zi(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = _.nb(Wg);
        return !b.parentElement
    });
    Pw = function(a, b) {
        b = b instanceof _.cb ? b : qt(b);
        a.href = _.db(b)
    };
    Qw = /^[\w+/_-]+[=]{0,2}$/;
    Rw = function(a, b) {
        b = (b || _.q).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && Qw.test(a) ? a : "" : ""
    };
    _.Oi = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    _.Oi.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    _.Oi.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    _.Oi.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    _.Ri = function(a, b) {
        this.width = a;
        this.height = b
    };
    _.aa = _.Ri.prototype;
    _.aa.aspectRatio = function() {
        return this.width / this.height
    };
    _.aa.isEmpty = function() {
        return !(this.width * this.height)
    };
    _.aa.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    _.aa.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    _.aa.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Sw, Tw, Uw, Ww;
    Sw = function(a) {
        return a = jt(a)
    };
    Tw = function() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ lf()).toString(36)
    };
    Uw = 2147483648 * Math.random() | 0;
    _.Vw = function(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };
    Ww = function(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var Zw, ax, $w, dx, fx, me, re;
    Zw = function(a) {
        return a ? new _.Xw(_.Yw(a)) : zs || (zs = new _.Xw)
    };
    ax = function(a, b) {
        Da(b, function(c, d) {
            c && "object" == typeof c && c.Xa && (c = c.Ia());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : $w.hasOwnProperty(d) ? a.setAttribute($w[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    };
    $w = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    _.cx = function(a) {
        a = a.document;
        a = _.bx(a) ? a.documentElement : a.body;
        return new _.Ri(a.clientWidth, a.clientHeight)
    };
    dx = function(a) {
        return a.scrollingElement ? a.scrollingElement : !St && _.bx(a) ? a.documentElement : a.body || a.documentElement
    };
    _.ex = function(a) {
        return a ? a.parentWindow || a.defaultView : window
    };
    fx = function(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!xa(f) || _.na(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (_.na(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                _.Ks(g ? la(f) : f, d)
            }
        }
    };
    _.gx = function(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    };
    _.bx = function(a) {
        return "CSS1Compat" == a.compatMode
    };
    _.hx = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    _.ix = function(a) {
        var b;
        if (Nw && (b = a.parentElement)) return b;
        b = a.parentNode;
        return _.na(b) && 1 == b.nodeType ? b : null
    };
    me = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };
    _.Yw = function(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    };
    re = function(a) {
        try {
            return a.contentWindow || (a.contentDocument ? _.ex(a.contentDocument) : null)
        } catch (b) {}
        return null
    };
    _.Xw = function(a) {
        this.j = a || _.q.document || document
    };
    _.aa = _.Xw.prototype;
    _.aa.lh = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    _.aa.Mi = _.Xw.prototype.lh;
    _.aa.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    _.aa.createElement = function(a) {
        return _.gx(this.j, a)
    };
    _.aa.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    _.aa.append = function(a, b) {
        fx(_.Yw(a), a, arguments)
    };
    _.aa.qg = _.hx;
    var jx = function() {
        return Ka && La ? !La.mobile && (Oa("iPad") || Oa("Android") || Oa("Silk")) : Oa("iPad") || Oa("Android") && !Oa("Mobile") || Oa("Silk")
    };
    var lx, sl, mx, Vk;
    _.kx = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    lx = function(a) {
        return a ? decodeURI(a) : a
    };
    sl = function(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) sl(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    mx = /#|$/;
    Vk = function(a, b) {
        var c = a.search(mx);
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
    var pe, rg, nx, sg, Tk, $i, nm, Ze, Mr, px, qx, aj, rx, sx, tx, ux, vx, wx, xx, yx, zx, Aj, Cj, Bj, Ax, Bx, Dx, Ex, Fx, Gx, Hx, wf, Ix, ao, gm, Ml, yl, Jx;
    _.qe = function(a) {
        try {
            return !!a && null != a.location.href && Nt(a, "foo")
        } catch (b) {
            return !1
        }
    };
    pe = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        d = void 0 === d ? _.q : d;
        c = (void 0 === c ? 0 : c) ? nx(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !_.qe(c) || !a(c));) c = nx(c)
    };
    rg = function() {
        var a = window;
        pe(function(b) {
            a = b;
            return !1
        });
        return a
    };
    nx = function(a) {
        try {
            var b = a.parent;
            if (b && b != a) return b
        } catch (c) {}
        return null
    };
    sg = function(a) {
        return _.qe(a.top) ? a.top : null
    };
    Tk = function(a, b) {
        var c = _.Ce("SCRIPT", a);
        mb(c, b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    };
    $i = function(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    };
    _.Ye = function() {
        if (!_.v.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            _.v.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    };
    _.vl = function(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    };
    _.ox = function(a) {
        var b = [];
        _.vl(a, function(c) {
            b.push(c)
        });
        return b
    };
    nm = function(a, b) {
        return Ga(a, function(c, d) {
            return Object.prototype.hasOwnProperty.call(a, d) && b(c, d)
        })
    };
    _.oi = function(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    };
    _.Xe = Zi(function() {
        return _.Ch(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], px) || 1E-4 > Math.random()
    });
    Ze = function(a, b) {
        try {
            if (a) return a.setItem("google_experiment_mod", b), b
        } catch (c) {}
        return null
    };
    Mr = Zi(function() {
        return px("MSIE")
    });
    px = function(a) {
        return Ma(Ja(), a)
    };
    qx = /^([0-9.]+)px$/;
    aj = function(a) {
        return (a = qx.exec(a)) ? +a[1] : null
    };
    rx = function() {
        var a = window;
        try {
            for (var b = null; b != a; b = a, a = a.parent) switch (a.location.protocol) {
                case "https:":
                    return !0;
                case "file:":
                    return !0;
                case "http:":
                    return !1
            }
        } catch (c) {}
        return !0
    };
    sx = function(a) {
        if (!a) return "";
        var b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };
    tx = {
        Qi: "allow-forms",
        Ri: "allow-modals",
        Si: "allow-orientation-lock",
        Ti: "allow-pointer-lock",
        Ui: "allow-popups",
        Vi: "allow-popups-to-escape-sandbox",
        Wi: "allow-presentation",
        Xi: "allow-same-origin",
        Yi: "allow-scripts",
        Zi: "allow-top-navigation",
        aj: "allow-top-navigation-by-user-activation"
    };
    ux = Zi(function() {
        return _.ox(tx)
    });
    vx = function(a) {
        var b = ux();
        return a.length ? _.Ah(b, function(c) {
            return !(0 <= _.ha(a, c))
        }) : b
    };
    wx = function() {
        var a = _.Ce("IFRAME"),
            b = {};
        _.Ks(ux(), function(c) {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    };
    xx = function(a) {
        a = a && a.toString && a.toString();
        return "string" === typeof a && Ma(a, "[native code]")
    };
    yx = function(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (e) {
                d = !1
            }
            if (d) return a;
            if (!(a = nx(a))) break
        }
        return null
    };
    zx = function(a) {
        if (!a || !a.frames) return null;
        if (a.frames.google_ads_top_frame) return a.frames.google_ads_top_frame.frameElement;
        try {
            var b = a.document,
                c = b.head,
                d, e = null != (d = b.body) ? d : null == c ? void 0 : c.parentElement;
            if (e) {
                var f = _.Ce("IFRAME");
                f.name = "google_ads_top_frame";
                f.id = "google_ads_top_frame";
                f.style.display = "none";
                f.style.position = "fixed";
                f.style.left = "-999px";
                f.style.top = "-999px";
                f.style.width = "0px";
                f.style.height = "0px";
                e.appendChild(f);
                return f
            }
        } catch (g) {}
        return null
    };
    _.Km = Zi(function() {
        return (Ka && La ? La.mobile : !jx() && (Oa("iPod") || Oa("iPhone") || Oa("Android") || Oa("IEMobile"))) ? 2 : jx() ? 1 : 0
    });
    Aj = function(a, b) {
        var c;
        for (c = void 0 === c ? 100 : c; a && c--;) {
            if (a == b) return !0;
            a = a.parentElement
        }
        return !1
    };
    _.jj = function(a, b) {
        _.vl(b, function(c, d) {
            a.style.setProperty(d, c, "important")
        })
    };
    Cj = function(a, b, c) {
        for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);) a = a.parentElement
    };
    Bj = function(a, b) {
        for (var c = 100; a && c--;) {
            var d = $i(a, window);
            if (d) {
                if (b(d, a)) return !0;
                a = a.parentElement
            }
        }
        return !1
    };
    Ax = function(a) {
        if (!a) return null;
        a = a.transform;
        if (!a) return null;
        a = a.replace(/^.*\(([0-9., -]+)\)$/, "$1").split(/, /);
        return 6 != a.length ? null : _.Cd(a, parseFloat)
    };
    Bx = {};
    _.Cx = (Bx["http://googleads.g.doubleclick.net"] = !0, Bx["http://pagead2.googlesyndication.com"] = !0, Bx["https://googleads.g.doubleclick.net"] = !0, Bx["https://pagead2.googlesyndication.com"] = !0, Bx);
    Dx = function(a) {
        _.q.console && _.q.console.warn && _.q.console.warn(a)
    };
    Ex = [];
    Fx = function() {
        var a = Ex;
        Ex = [];
        a = _.w(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    };
    Gx = function(a) {
        return a.replace(/\\(n|r|\\)/g, function(b, c) {
            return "n" == c ? "\n" : "r" == c ? "\r" : "\\"
        })
    };
    Hx = function() {
        var a = void 0 === a ? Math.random : a;
        return Math.floor(a() * Math.pow(2, 52))
    };
    wf = function(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Hx(),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    };
    Ix = function(a, b) {
        se(_.ex(_.Yw(a)), a, b)
    };
    ao = function(a, b) {
        "complete" === a.readyState || "interactive" === a.readyState ? (Ex.push(b), 1 == Ex.length && (_.v.Promise ? _.v.Promise.resolve().then(Fx) : window.setImmediate ? setImmediate(Fx) : setTimeout(Fx, 0))) : a.addEventListener("DOMContentLoaded", b)
    };
    gm = function(a) {
        return "number" === typeof a && isFinite(a) && 0 == a % 1 && 0 < a
    };
    Ml = function(a) {
        return 0 === a || gm(a)
    };
    yl = function(a) {
        try {
            var b = JSON.stringify(a)
        } catch (c) {}
        return b || String(a)
    };
    _.Ce = function(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    Jx = function(a) {
        for (var b = a; a && a != a.parent;) a = a.parent, _.qe(a) && (b = a);
        return b
    };
    _.Kx = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    _.Kx.prototype.getWidth = function() {
        return this.right - this.left
    };
    _.Kx.prototype.getHeight = function() {
        return this.bottom - this.top
    };
    _.Lx = function(a) {
        return new _.Kx(a.top, a.right, a.bottom, a.left)
    };
    _.Kx.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    _.Kx.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    _.Kx.prototype.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    var Mx = function(a, b, c, d) {
            this.left = a;
            this.top = b;
            this.width = c;
            this.height = d
        },
        Nx = function(a) {
            return new _.Kx(a.top, a.left + a.width, a.top + a.height, a.left)
        },
        Ox = function(a, b) {
            var c = Math.max(a.left, b.left),
                d = Math.min(a.left + a.width, b.left + b.width);
            if (c <= d) {
                var e = Math.max(a.top, b.top);
                a = Math.min(a.top + a.height, b.top + b.height);
                if (e <= a) return new Mx(c, e, d - c, a - e)
            }
            return null
        };
    Mx.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    Mx.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    Mx.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    var Px = function(a) {
        return (a = void 0 === a ? te() : a) ? _.qe(a.master) ? a.master : null : null
    };
    var Sx, wh, Qi, Ux, Vx, Ni, ln;
    _.Rx = function(a, b, c) {
        if ("string" === typeof b)(b = _.Qx(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = _.Qx(c, d);
                f && (c.style[f] = e)
            }
    };
    Sx = {};
    _.Qx = function(a, b) {
        var c = Sx[b];
        if (!c) {
            var d = _.Vw(b);
            c = d;
            void 0 === a.style[d] && (d = (St ? "Webkit" : Rt ? "Moz" : _.Pt ? "ms" : null) + Ww(d), void 0 !== a.style[d] && (c = d));
            Sx[b] = c
        }
        return c
    };
    _.Tx = function(a, b) {
        var c = _.Yw(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    };
    wh = function(a, b) {
        return _.Tx(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    };
    Qi = function(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    };
    Ux = function(a) {
        if (_.Pt && !(8 <= Number(au))) return a.offsetParent;
        var b = _.Yw(a),
            c = wh(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = wh(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    Vx = function(a) {
        var b = _.Yw(a),
            c = new _.Oi(0, 0);
        var d = b ? _.Yw(b) : document;
        d = !_.Pt || 9 <= Number(au) || _.bx(Zw(d).j) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Qi(a);
        d = Zw(b).j;
        b = dx(d);
        d = d.parentWindow || d.defaultView;
        b = _.Pt && d.pageYOffset != b.scrollTop ? new _.Oi(b.scrollLeft, b.scrollTop) : new _.Oi(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    Ni = function(a, b) {
        var c = new _.Oi(0, 0),
            d = _.ex(_.Yw(a));
        if (!Nt(d, "parent")) return c;
        do {
            var e = d == b ? Vx(a) : _.Wx(a);
            c.x += e.x;
            c.y += e.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };
    _.Wx = function(a) {
        a = Qi(a);
        return new _.Oi(a.left, a.top)
    };
    _.Xx = function(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };
    _.xh = function(a, b) {
        if ("none" != wh(b, "display")) return a(b);
        var c = b.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = a(b);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    };
    _.yh = function(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = St && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Qi(a), new _.Ri(a.right - a.left, a.bottom - a.top)) : new _.Ri(b, c)
    };
    ln = function(a, b) {
        a.style.display = b ? "" : "none"
    };
    var wj = function(a) {
        a = Px(te(a)) || a;
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    };
    var Yx = function(a, b) {
        if (_.v.globalThis.fetch) _.v.globalThis.fetch(a, {
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
    var Zx = function(a) {
        _.Q.call(this, a)
    };
    _.O(Zx, _.Q);
    var $x = function(a) {
        _.Q.call(this, a)
    };
    _.O($x, _.Q);
    var Sh = function(a) {
        _.Q.call(this, a)
    };
    _.O(Sh, _.Q);
    var Nh = function(a) {
        _.Q.call(this, a)
    };
    _.O(Nh, _.Q);
    var Kh = function(a) {
        _.Q.call(this, a)
    };
    _.O(Kh, _.Q);
    var ay = function(a) {
        _.Q.call(this, a)
    };
    _.O(ay, _.Q);
    var Jh = function(a) {
        _.Q.call(this, a, -1, by)
    };
    _.O(Jh, _.Q);
    Jh.prototype.getTagSessionCorrelator = function() {
        return _.df(this, 2)
    };
    var by = [4],
        Ph = [6, 7, 8, 9, 11];
    var ai = function(a) {
        _.Q.call(this, a, -1, cy)
    };
    _.O(ai, _.Q);
    var cy = [3];
    var $h = function(a) {
        _.Q.call(this, a, -1, dy)
    };
    _.O($h, _.Q);
    var dy = [4, 5];
    var Zh = function(a) {
        _.Q.call(this, a, -1, ey)
    };
    _.O(Zh, _.Q);
    Zh.prototype.getTagSessionCorrelator = function() {
        return _.df(this, 1)
    };
    var ey = [2];
    var Yh = function(a) {
        _.Q.call(this, a)
    };
    _.O(Yh, _.Q);
    var di = [4];
    _.T = function() {
        this.H = this.H;
        this.ha = this.ha
    };
    _.T.prototype.H = !1;
    _.T.prototype.Da = function() {
        this.H || (this.H = !0, this.o())
    };
    _.Fn = function(a, b) {
        _.Qn(a, _.ys(Ae, b))
    };
    _.Qn = function(a, b) {
        a.H ? b() : (a.ha || (a.ha = []), a.ha.push(b))
    };
    _.T.prototype.o = function() {
        if (this.ha)
            for (; this.ha.length;) this.ha.shift()()
    };
    var fy = function(a, b, c, d, e) {
            this.l = a;
            this.C = b;
            this.I = c;
            this.m = d;
            this.H = e;
            this.j = [];
            this.o = null
        },
        gy = function(a) {
            null !== a.o && (clearTimeout(a.o), a.o = null);
            if (a.j.length) {
                var b = we(a.j);
                a.C(a.l + "?e=1", b);
                a.j = []
            }
        };
    fy.prototype.Ne = function() {
        var a = _.wb.apply(0, arguments),
            b = this;
        this.H && 65536 <= we(this.j.concat(a)).length && gy(this);
        this.j.push.apply(this.j, _.xe(a));
        this.j.length >= this.m && gy(this);
        this.j.length && null === this.o && (this.o = setTimeout(function() {
            gy(b)
        }, this.I))
    };
    _.Pr = function(a, b, c) {
        fy.call(this, "https://pagead2.googlesyndication.com/pagead/ping", Yx, void 0 === a ? 1E3 : a, void 0 === b ? 100 : b, (void 0 === c ? !1 : c) && !!_.v.globalThis.fetch)
    };
    _.O(_.Pr, fy);
    var U = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? !1 : b
        },
        hy = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? 0 : b
        },
        iy = function(a, b) {
            this.j = a;
            this.defaultValue = void 0 === b ? "" : b
        },
        jy = function(a) {
            var b = void 0 === b ? [] : b;
            this.j = a;
            this.defaultValue = b
        };
    var ky, xj, ly, qj, Nq, wo, my, ny, un, ko, oy, py, qy, ry, sy, ty, uy, vy, Lp, Jp, wy, xy, yy, zy, Ay, By, Cy, Vp, Dy, Vq, sr, Jn, Ey, Fy, Gy, Jq, Hy, Iy, Vf, Jy, Ky, Rp, Ly, My, xm, Fm, Ny, Oy, Py, Uh, Qy, Ry, Sy, Ty, Uy, Vy, Wy, Pp, Xy, Yy, Zy, $y, rl, ol, az, bz, cz, pg, en, fz, gz, fm, hz, iz, Or, Sj, jz, kz, lz, mz, nz, oz, pz, qz, rz, sz, tz, uz, vz, Sf, wz, xz, Gr, Hr, ym, Ir, Fr, yz, zz, Np, Az, Gz;
    ky = new U(1122, !0);
    xj = new hy(7, .1);
    ly = new U(212);
    qj = new U(520759457);
    Nq = new U(519393152);
    wo = new hy(474069761);
    my = new hy(455645877);
    ny = new hy(462420536);
    un = new U(476475256);
    ko = new U(514499457, !0);
    oy = new hy(448338836, .01);
    py = new hy(427198696, 1);
    qy = new hy(438663674);
    ry = new U(513922122);
    sy = new U(23);
    ty = new U(369430);
    uy = new U(513037477);
    vy = new U(503558781);
    Lp = new U(501616476);
    Jp = new U(513133013);
    wy = new hy(408380992, .01);
    xy = new hy(377289019, 1E4);
    yy = new hy(488);
    zy = new hy(529, 20);
    Ay = new iy(10);
    By = new U(489217043);
    Cy = new U(495013820);
    Vp = new hy(447000223, .01);
    Dy = new U(360245597, !0);
    Vq = new U(485209195);
    sr = new U(523120704);
    Jn = new U(521759470);
    Ey = new U(522655635);
    Fy = new U(522677843);
    Gy = new U(499996722);
    Jq = new U(522597402);
    Hy = new U(471855283);
    Iy = new U(523495418);
    Vf = new U(465118388);
    Jy = new U(220);
    Ky = new U(200);
    Rp = new U(494337909);
    Ly = new U(503331120, !0);
    My = new U(512833161);
    xm = new U(520704445);
    Fm = new hy(492, .01);
    Ny = new hy(363650251);
    Oy = new hy(474872234);
    Py = new U(83);
    Uh = new U(85);
    Qy = new U(437061931, !0);
    Ry = new jy(466086960);
    Sy = new U(45388169);
    Ty = new hy(398776877, 6E4);
    Uy = new hy(374201269, 6E4);
    Vy = new hy(371364213, 6E4);
    Wy = new hy(376149757, .0025);
    Pp = new U(517454235);
    Xy = new U(453275889);
    Yy = new U(377936516, !0);
    Zy = new U(503519166);
    $y = new hy(24);
    rl = new jy(1);
    ol = new iy(2, "1-0-40");
    az = new U(441529989);
    bz = new hy(524114909);
    cz = new U(514876375);
    pg = new U(516945042, !0);
    _.dz = new hy(506394061, 100);
    _.ez = new hy(506394060);
    en = new jy(489);
    fz = new U(392065905);
    gz = new hy(360245595, 500);
    fm = new U(45397804);
    hz = new U(45398607);
    iz = new U(424117738);
    Or = new hy(397316938, 1E3);
    Sj = new U(507033477, !0);
    jz = new U(518989998, !0);
    kz = new U(399705355);
    lz = new hy(514795754);
    mz = new U(521798275);
    nz = new U(515410344, !0);
    oz = new U(501);
    pz = new U(439828594);
    qz = new U(483962503);
    rz = new hy(494575051);
    sz = new jy(489560439);
    tz = new jy(505762507);
    uz = new U(453);
    vz = new U(454);
    Sf = new jy(471270390);
    wz = new U(512522806);
    xz = new U(506738118);
    Gr = new U(77);
    Hr = new U(78);
    ym = new U(309);
    Ir = new U(80);
    Fr = new U(76);
    yz = new U(84);
    zz = new U(1958);
    Np = new U(1973);
    Az = new U(188);
    _.Bz = new hy(1972);
    _.Cz = new U(1162);
    _.Dz = new U(501545961);
    _.Ez = new hy(1116, 300);
    _.Fz = new U(506852289);
    Gz = new U(485990406);
    var Hz = function(a, b, c, d, e, f) {
            try {
                var g = a.j,
                    h = _.Ce("SCRIPT", g);
                h.async = !0;
                mb(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", function() {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", function() {
                    0 < c ? Hz(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (k) {
                f()
            }
        },
        Iz = function(a, b, c, d) {
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            Hz(Zw(a), b, 0, !1, c, d)
        };
    Ea({
        tj: 0,
        sj: 1,
        pj: 2,
        kj: 3,
        qj: 4,
        lj: 5,
        rj: 6,
        nj: 7,
        oj: 8,
        jj: 9,
        mj: 10
    }).map(function(a) {
        return Number(a)
    });
    Ea({
        vj: 0,
        wj: 1,
        uj: 2
    }).map(function(a) {
        return Number(a)
    });
    var Jz = function(a, b) {
        this.j = Be(a);
        this.o = b
    };
    Jz.prototype[_.t(_.v.Symbol, "iterator")] = function() {
        return this
    };
    Jz.prototype.next = function() {
        var a = this.j.next();
        return {
            value: a.done ? void 0 : this.o.call(void 0, a.value),
            done: a.done
        }
    };
    var Kz = function(a, b) {
            return new Jz(a, b)
        },
        Lz = function(a) {
            this.o = a;
            this.j = 0
        };
    Lz.prototype[_.t(_.v.Symbol, "iterator")] = function() {
        return this
    };
    Lz.prototype.next = function() {
        for (; this.j < this.o.length;) {
            var a = this.o[this.j].next();
            if (!a.done) return a;
            this.j++
        }
        return {
            done: !0
        }
    };
    var Mz = function() {
        return new Lz(_.wb.apply(0, arguments).map(Be))
    };
    var Nz = window.URL,
        Oz;
    try {
        new Nz("http://example.com"), Oz = !0
    } catch (a) {
        Oz = !1
    }
    var Pz = Oz,
        Qz = function(a) {
            this.j = new _.v.Map;
            0 == a.indexOf("?") && (a = a.substring(1));
            a = _.w(a.split("&"));
            for (var b = a.next(); !b.done; b = a.next()) {
                var c = b.value;
                b = c;
                var d = "";
                c = c.split("=");
                1 < c.length && (b = decodeURIComponent(c[0].replace("+", " ")), d = decodeURIComponent(c[1].replace("+", " ")));
                c = this.j.get(b);
                null == c && (c = [], this.j.set(b, c));
                c.push(d)
            }
        };
    Qz.prototype.get = function(a) {
        return (a = this.j.get(a)) && a.length ? a[0] : null
    };
    Qz.prototype.getAll = function(a) {
        return [].concat(_.xe(this.j.get(a) || []))
    };
    Qz.prototype.has = function(a) {
        return this.j.has(a)
    };
    Qz.prototype[_.t(_.v.Symbol, "iterator")] = function() {
        return Mz.apply(null, _.xe(Kz(this.j, function(a) {
            var b = a[0];
            return Kz(a[1], function(c) {
                return [b, c]
            })
        })))
    };
    Qz.prototype.toString = function() {
        return Rz(this)
    };
    var Rz = function(a) {
            var b = function(c) {
                return encodeURIComponent(c).replace(/[!()~']|(%20)/g, function(d) {
                    return {
                        "!": "%21",
                        "(": "%28",
                        ")": "%29",
                        "%20": "+",
                        "'": "%27",
                        "~": "%7E"
                    }[d]
                })
            };
            return _.t(Array, "from").call(Array, a, function(c) {
                return b(c[0]) + "=" + b(c[1])
            }).join("&")
        },
        Tz = function(a) {
            var b = _.gx(document, "A");
            try {
                Pw(b, tb(a));
                var c = b.protocol
            } catch (e) {
                throw Error(a + " is not a valid URL.");
            }
            if ("" === c || ":" === c || ":" != c[c.length - 1]) throw Error(a + " is not a valid URL.");
            if (!Sz.has(c)) throw Error(a + " is not a valid URL.");
            if (!b.hostname) throw Error(a + " is not a valid URL.");
            var d = b.href;
            a = {
                href: d,
                protocol: b.protocol,
                username: "",
                password: "",
                hostname: b.hostname,
                pathname: "/" + b.pathname,
                search: b.search,
                hash: b.hash,
                toString: function() {
                    return d
                }
            };
            Sz.get(b.protocol) === b.port ? (a.host = a.hostname, a.port = "", a.origin = a.protocol + "//" + a.hostname) : (a.host = b.host, a.port = b.port, a.origin = a.protocol + "//" + a.hostname + ":" + a.port);
            return a
        },
        Uz = function(a) {
            if (Pz) {
                try {
                    var b = new Nz(a)
                } catch (d) {
                    throw Error(a + " is not a valid URL.");
                }
                var c = Sz.get(b.protocol);
                if (!c) throw Error(a + " is not a valid URL.");
                if (!b.hostname) throw Error(a + " is not a valid URL.");
                "null" == b.origin && (a = {
                    href: b.href,
                    protocol: b.protocol,
                    username: "",
                    password: "",
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    pathname: b.pathname,
                    search: b.search,
                    hash: b.hash
                }, a.origin = c === b.port ? b.protocol + "//" + b.hostname : b.protocol + "//" + b.hostname + ":" + b.port, b = a);
                return b
            }
            return Tz(a)
        },
        Sz = new _.v.Map([
            ["http:", "80"],
            ["https:", "443"],
            ["ws:", "80"],
            ["wss:", "443"],
            ["ftp:", "21"]
        ]),
        Vz = function(a) {
            return Pz && a.searchParams ? a.searchParams : new Qz(a.search)
        };
    var Wz = function(a) {
            var b = Vz(Uz(a.location.href));
            a = b.get("fcconsent");
            b = b.get("fc");
            return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
        },
        Xz = function(a) {
            a = Vz(Uz(a.location.href)).get("fctype");
            return -1 !== ["ab", "gdpr", "consent", "ccpa", "monetization"].indexOf(a) ? a : null
        };
    var Yz = function(a) {
        var b = a.document,
            c = function() {
                if (!a.frames.googlefcPresent)
                    if (b.body) {
                        var d = _.Ce("IFRAME", b);
                        d.style.display = "none";
                        d.style.width = "0px";
                        d.style.height = "0px";
                        d.style.border = "none";
                        d.style.zIndex = "-1000";
                        d.style.left = "-1000px";
                        d.style.top = "-1000px";
                        d.name = "googlefcPresent";
                        b.body.appendChild(d)
                    } else a.setTimeout(c, 5)
            };
        c()
    };
    var Zz = function(a, b, c, d, e) {
            Ee(a, b, void 0 === c ? null : c, void 0 === d ? !1 : d, void 0 === e ? !1 : e)
        },
        af = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
            _.vl(a, function(e, f) {
                if (e || 0 === e) d += "&" + f + "=" + encodeURIComponent("" + e)
            });
            Ro(d, c)
        },
        Ro = function(a, b) {
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
            }), c.fetch(a, b)) : Zz(c, a, void 0, b, d)
        };
    var $z = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        aA = function(a, b) {
            b = void 0 === b ? {} : b;
            _.T.call(this);
            this.m = a;
            this.j = null;
            this.l = {};
            this.M = 0;
            var c;
            this.A = null != (c = b.Za) ? c : 500;
            var d;
            this.I = null != (d = b.Ag) ? d : !1;
            this.C = null
        };
    _.O(aA, _.T);
    aA.prototype.o = function() {
        this.l = {};
        this.C && (_.De(this.m, "message", this.C), delete this.C);
        delete this.l;
        delete this.m;
        delete this.j;
        _.T.prototype.o.call(this)
    };
    var cA = function(a) {
        return "function" === typeof a.m.__tcfapi || null != bA(a)
    };
    aA.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.I
            },
            d = _.Hs(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = $z(c), c.internalBlockOnErrors = b.I, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            dA(this, "addEventListener", f)
        } catch (g) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    aA.prototype.removeEventListener = function(a) {
        a && a.listenerId && dA(this, "removeEventListener", null, a.listenerId)
    };
    var eA = function(a, b) {
            var c = void 0 === c ? "755" : c;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var d = a.publisher.restrictions[b];
                    if (void 0 !== d) {
                        d = d[void 0 === c ? "755" : c];
                        break a
                    }
                }
                d = void 0
            }
            if (0 === d) return !1;
            a.purpose && a.vendor ? (d = a.vendor.consents, (c = !(!d || !d[void 0 === c ? "755" : c])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
            return b
        },
        dA = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
            else if (bA(a)) {
                fA(a);
                var e = ++a.M;
                a.l[e] = c;
                a.j && (c = {}, a.j.postMessage((c.__tcfapiCall = {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }, c), "*"))
            } else c({}, !1)
        },
        bA = function(a) {
            if (a.j) return a.j;
            a.j = yx(a.m, "__tcfapiLocator");
            return a.j
        },
        fA = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.l[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, _.yb(a.m, "message", a.C))
        },
        gA = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = $z(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (af({
                e: String(a.internalErrorState)
            }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        },
        hA = function(a, b) {
            return !1 === a.gdprApplies ? !0 : b.every(function(c) {
                return eA(a, c)
            })
        };
    var iA = function(a, b, c) {
            this.j = a;
            this.m = b;
            this.o = void 0 === c ? function() {} : c
        },
        jA = function(a, b, c) {
            return new iA(a, b, c)
        };
    iA.prototype.start = function() {
        if (this.j === this.j.top) try {
            Yz(this.j), kA(this)
        } catch (a) {}
    };
    var kA = function(a) {
            var b = Wz(a.j),
                c = Xz(a.j),
                d = {};
            b = (d.fc = b, d.fctype = c, d);
            b = lA(a.m, b);
            Iz(a.j, b, function() {
                a.o(!0)
            }, function() {
                a.o(!1)
            })
        },
        lA = function(a, b) {
            var c = Es("https://fundingchoicesmessages.google.com/i/%{id}");
            b = _.t(Object, "assign").call(Object, {}, b, {
                ers: 3
            });
            return Zs(Hb(c, {
                id: a
            }), b)
        };
    var mA = _.v.Promise;
    var nA = function(a) {
        this.m = a
    };
    nA.prototype.o = function(a, b, c) {
        this.m.then(function(d) {
            d.o(a, b, c)
        })
    };
    nA.prototype.j = function(a, b) {
        return this.m.then(function(c) {
            return c.j(a, b)
        })
    };
    var oA = function(a) {
        this.data = a
    };
    var pA = function(a) {
        this.m = a
    };
    pA.prototype.o = function(a, b, c) {
        c = void 0 === c ? [] : c;
        var d = new MessageChannel;
        qA(d.port1, b);
        this.m.postMessage(a, [d.port2].concat(c))
    };
    pA.prototype.j = function(a, b) {
        var c = this;
        return new mA(function(d) {
            c.o(a, d, b)
        })
    };
    var rA = function(a, b) {
            qA(a, b);
            return new pA(a)
        },
        qA = function(a, b) {
            b && (a.onmessage = function(c) {
                b(new oA(c.data, rA(c.ports[0])))
            })
        };
    var Qj = function(a) {
            var b = a.yd,
                c = void 0 === a.bb ? "ZNWN1d" : a.bb,
                d = void 0 === a.onMessage ? void 0 : a.onMessage,
                e = void 0 === a.Fd ? void 0 : a.Fd;
            return sA({
                destination: a.destination,
                tf: function() {
                    return b.contentWindow
                },
                Nh: tA(a.origin),
                bb: c,
                onMessage: d,
                Fd: e
            })
        },
        sA = function(a) {
            var b = a.destination,
                c = a.tf,
                d = a.Nh,
                e = void 0 === a.Qe ? void 0 : a.Qe,
                f = a.bb,
                g = void 0 === a.onMessage ? void 0 : a.onMessage,
                h = void 0 === a.Fd ? void 0 : a.Fd,
                k = Object.create(null);
            d.forEach(function(l) {
                k[l] = !0
            });
            return new nA(new mA(function(l, n) {
                var m = function(p) {
                    p.source && p.source === c() && !0 === k[p.origin] && (p.data.n || p.data) === f && (b.removeEventListener("message", m, !1), e && p.data.t !== e ? n(Error('Token mismatch while establishing channel "' + f + '". Expected ' + e + ", but received " + p.data.t + ".")) : (l(rA(p.ports[0], g)), h && h(p)))
                };
                b.addEventListener("message", m, !1)
            }))
        },
        tA = function(a) {
            a = "string" === typeof a ? [a] : a;
            var b = Object.create(null);
            a.forEach(function(c) {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };
    var uA = navigator,
        vA = function(a) {
            var b = 1,
                c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        wA = function(a, b) {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return vA(a.toLowerCase())
        },
        xA = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        yA = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        zA = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var Li = function(a) {
            return !!a && a.top == a
        },
        AA = function(a, b, c) {
            b = b || a.google_ad_width;
            c = c || a.google_ad_height;
            if (Li(a)) return !1;
            var d = a.document,
                e = d.documentElement;
            if (b && c) {
                var f = 1,
                    g = 1;
                a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
                if (g > 2 * c || f > 2 * b) return !1
            }
            return !0
        };
    var BA = function(a) {
        a = void 0 === a ? window : a;
        return a._gmptnl ? "afma-gpt-sdk-a" : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? "afma-gpt-sdk-i" : null
    };
    var pj = function() {
        this.j = [];
        this.o = -1
    };
    pj.prototype.set = function(a, b) {
        b = void 0 === b ? !0 : b;
        0 <= a && 52 > a && _.t(Number, "isInteger").call(Number, a) && this.j[a] !== b && (this.j[a] = b, this.o = -1)
    };
    pj.prototype.get = function(a) {
        return !!this.j[a]
    };
    var sj = function(a) {
        -1 === a.o && (a.o = Os(a.j, function(b, c, d) {
            return c ? b + Math.pow(2, d) : b
        }));
        return a.o
    };
    var Ue = function(a) {
        _.Q.call(this, a)
    };
    _.O(Ue, _.Q);
    var Pe = function(a) {
            var b = new Ue;
            return _.fd(b, 1, a, 0)
        },
        Oe = function(a, b) {
            return _.fd(a, 2, b, 0)
        };
    var Se = function(a) {
        _.Q.call(this, a, -1, CA)
    };
    _.O(Se, _.Q);
    var Ne = function(a, b) {
            _.Pf(a, 1, Ue, b)
        },
        Me = ke(Se),
        CA = [1];
    var DA = function(a, b, c, d) {
        _.T.call(this);
        this.F = b;
        this.R = c;
        this.D = d;
        this.M = new _.v.Map;
        this.K = 0;
        this.l = new _.v.Map;
        this.A = new _.v.Map;
        this.I = new _.v.Map;
        this.C = void 0;
        this.m = a
    };
    _.O(DA, _.T);
    DA.prototype.o = function() {
        delete this.j;
        this.M.clear();
        this.l.clear();
        this.A.clear();
        this.I.clear();
        this.C && (_.De(this.m, "message", this.C), delete this.C);
        delete this.m;
        delete this.D;
        _.T.prototype.o.call(this)
    };
    var EA = function(a) {
            if (a.j) return a.j;
            a.R && a.R(a.m) ? a.j = a.m : a.j = yx(a.m, a.F);
            var b;
            return null != (b = a.j) ? b : null
        },
        GA = function(a, b) {
            if (EA(a))
                if (a.j === a.m) {
                    var c = a.M.get("getDataWithCallback");
                    c && c(a.j, b)
                } else if ((c = a.l.get("getDataWithCallback")) && c.ve) {
                FA(a);
                var d = ++a.K;
                a.A.set(d, c.Lf);
                a.I.set(d, c.Ff(b));
                a.j.postMessage(c.ve(b, d), "*")
            }
        },
        FA = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c = a.D ? a.D(b) : void 0;
                    if (c) {
                        var d = c.Ie,
                            e = a.A.get(d);
                        if (e) {
                            a.A.delete(d);
                            var f = a.I.get(c.Ie);
                            a.I.delete(d);
                            e(f, c.payload)
                        }
                    }
                } catch (g) {}
            }, _.yb(a.m, "message", a.C))
        };
    var HA = function(a, b) {
            (0, a.__uspapi)("getUSPData", 1, function(c, d) {
                b.zc({
                    consentData: null != c ? c : void 0,
                    mf: d ? void 0 : 2
                })
            })
        },
        IA = {
            Ff: function(a) {
                return a.zc
            },
            ve: function(a, b) {
                a = {};
                return a.__uspapiCall = {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }, a
            },
            Lf: function(a, b) {
                b = b.__uspapiReturn;
                var c;
                a({
                    consentData: null != (c = b.returnValue) ? c : void 0,
                    mf: b.success ? void 0 : 2
                })
            }
        },
        JA = function(a) {
            _.T.call(this);
            this.caller = new DA(a, "__uspapiLocator", function(b) {
                return "function" === typeof b.__uspapi
            }, bf);
            this.caller.M.set("getDataWithCallback", HA);
            this.caller.l.set("getDataWithCallback", IA)
        };
    _.O(JA, _.T);
    JA.prototype.o = function() {
        this.caller.Da();
        _.T.prototype.o.call(this)
    };
    var KA = function(a, b) {
        var c = {};
        if (EA(a.caller)) {
            var d = _.Hs(function() {
                b(c)
            });
            GA(a.caller, {
                zc: function(e) {
                    e.mf || (c = e.consentData);
                    d()
                }
            });
            setTimeout(d, 500)
        } else b(c)
    };
    var MA = function(a) {
        _.Q.call(this, a, -1, LA)
    };
    _.O(MA, _.Q);
    var LA = [1, 2];
    var NA = function(a) {
        _.Q.call(this, a)
    };
    _.O(NA, _.Q);
    var cf = ke(NA);
    var OA = function(a, b) {
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, function(c) {
                c = cf(c);
                b.zc({
                    consentData: c
                })
            })
        },
        PA = {
            Ff: function(a) {
                return a.zc
            },
            ve: function(a, b) {
                var c = {};
                return c.__fciCall = {
                    callId: b,
                    command: a.command
                }, c
            },
            Lf: function(a, b) {
                a({
                    consentData: b
                })
            }
        },
        En = function(a) {
            _.T.call(this);
            this.j = this.m = !1;
            this.caller = new DA(a, "googlefcPresent", void 0, ef);
            this.caller.M.set("getDataWithCallback", OA);
            this.caller.l.set("getDataWithCallback", PA)
        };
    _.O(En, _.T);
    En.prototype.o = function() {
        this.caller.Da();
        _.T.prototype.o.call(this)
    };
    var QA = function(a) {
            a.m || (a.j = !!EA(a.caller), a.m = !0);
            return a.j
        },
        RA = function(a) {
            return new _.v.Promise(function(b) {
                QA(a) && GA(a.caller, {
                    command: "loaded",
                    zc: function(c) {
                        b(c.consentData)
                    }
                })
            })
        };
    var jf = function(a) {
            this.j = a || {
                cookie: ""
            }
        },
        UA = function() {
            var a = SA;
            if (!_.q.navigator.cookieEnabled) return !1;
            if (!a.isEmpty()) return !0;
            a.set("TESTCOOKIESENABLED", "1", {
                we: 60
            });
            if ("1" !== a.get("TESTCOOKIESENABLED")) return !1;
            TA(a, "TESTCOOKIESENABLED");
            return !0
        };
    jf.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Tj;
            d = c.ki || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.we
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" + e : "")
    };
    jf.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.j.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = yr(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    var TA = function(a, b, c, d) {
        a.get(b);
        a.set(b, "", {
            we: 0,
            path: c,
            domain: d
        })
    };
    jf.prototype.isEmpty = function() {
        return !this.j.cookie
    };
    jf.prototype.clear = function() {
        for (var a = (this.j.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = yr(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) TA(this, b[a])
    };
    var SA = new jf("undefined" == typeof document ? null : document);
    _.VA = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ZA, YA, aB, $A;
    _.WA = function() {
        this.m = "&";
        this.o = {};
        this.H = 0;
        this.j = []
    };
    _.XA = function(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    };
    ZA = function(a, b, c, d, e) {
        var f = [];
        _.vl(a, function(g, h) {
            (g = YA(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    };
    YA = function(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(YA(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ZA(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    };
    aB = function(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = $A(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(n, m) {
            return n - m
        });
        b = null;
        for (var e = "", f = 0; f < a.j.length; f++)
            for (var g = a.j[f], h = a.o[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = ZA(h[k], a.m, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.m;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    };
    $A = function(a) {
        var b = 1,
            c;
        for (c in a.o) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    };
    _.bB = function() {
        this.j = _.C(Ly) ? .001 : _.Ih(23);
        this.o = Math.random()
    };
    _.zh = function(a, b, c, d, e) {
        if (((void 0 === d ? 0 : d) ? a.o : Math.random()) < (e || a.j)) try {
            if (c instanceof _.WA) var f = c;
            else f = new _.WA, _.vl(c, function(h, k) {
                var l = f,
                    n = l.H++;
                h = _.XA(k, h);
                l.j.push(n);
                l.o[n] = h
            });
            var g = aB(f, "/pagead/gen_204?id=" + b + "&");
            g && Zz(_.q, g)
        } catch (h) {}
    };
    var cB = null,
        dB = function() {
            if (null === cB) {
                cB = "";
                try {
                    var a = "";
                    try {
                        a = _.q.top.location.hash
                    } catch (c) {
                        a = _.q.location.hash
                    }
                    if (a) {
                        var b = a.match(/\bdeid=([\d,]+)/);
                        cB = b ? b[1] : ""
                    }
                } catch (c) {}
            }
            return cB
        };
    var eB = function(a, b, c, d, e) {
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = void 0 === d ? 0 : d;
        this.uniqueId = Math.random();
        this.slotId = e;
        this.taskId = void 0
    };
    var fB, gB, hB, iB, jB;
    fB = _.q.performance;
    gB = !!(fB && fB.mark && fB.measure && fB.clearMarks);
    hB = Zi(function() {
        var a;
        if (a = gB) a = dB(), a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    });
    iB = function(a, b) {
        this.o = [];
        var c = null;
        b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.o = b.google_js_reporting_queue, c = b.google_measure_js_timing);
        this.j = hB() || (null != c ? c : Math.random() < a)
    };
    _.Wh = function(a) {
        a && fB && hB() && (fB.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), fB.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    };
    jB = function(a, b, c, d, e, f) {
        a.j && (b = new eB(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.o.length || a.o.push(b))
    };
    iB.prototype.start = function(a, b) {
        if (!this.j) return null;
        a = new eB(a, b, _.nf() || _.mf());
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        fB && hB() && fB.mark(b);
        return a
    };
    iB.prototype.end = function(a) {
        if (this.j && "number" === typeof a.value) {
            a.duration = (_.nf() || _.mf()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            fB && hB() && fB.mark(b);
            !this.j || 2048 < this.o.length || this.o.push(a)
        }
    };
    var wq = function(a, b, c) {
        var d = _.nf();
        d && jB(a, b, 9, d, 0, c)
    };
    _.kB = function(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            for (var c; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (d) {
            return b
        }
    };
    var jm = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, jm.prototype)
    };
    _.O(jm, Error);
    jm.prototype.name = "PublisherInputError";
    var lB = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, lB.prototype)
    };
    _.O(lB, Error);
    lB.prototype.name = "ServerError";
    var mB = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, mB.prototype)
    };
    _.O(mB, Error);
    mB.prototype.name = "NetworkError";
    _.rf = function(a) {
        var b = "Hb";
        if (a.Hb && a.hasOwnProperty(b)) return a.Hb;
        b = new a;
        return a.Hb = b
    };
    var sf = function() {};
    sf.prototype.o = function() {};
    sf.prototype.H = function() {};
    sf.prototype.m = function() {
        return []
    };
    sf.prototype.j = function() {
        return []
    };
    var Sg = function(a, b) {
        a.o = qf(1, b, function() {});
        a.m = function(c) {
            return qf(2, b, function() {
                return []
            })(c, 2, void 0)
        };
        a.j = function() {
            return qf(3, b, function() {
                return []
            })(2)
        };
        a.H = function(c) {
            qf(16, b, function() {})(c, 2)
        }
    };
    var nB = function() {};
    nB.j = function() {
        throw Error("Must be overridden");
    };
    var vf = function() {
        this.j = 0
    };
    _.O(vf, nB);
    vf.Hb = void 0;
    vf.j = function() {
        return vf.Hb ? vf.Hb : vf.Hb = new vf
    };
    var oB = function() {
            this.cache = {}
        },
        Qf = function() {
            pB || (pB = new oB);
            return pB
        },
        Rf = function(a) {
            var b = y(a, 3);
            if (!b) return 3;
            if (void 0 === y(a, 2)) return 4;
            a = Date.now();
            return a > b + 2592E5 ? 2 : a > b + 432E5 ? 1 : 0
        };
    oB.prototype.get = function(a, b) {
        if (this.cache[a]) return {
            zb: this.cache[a],
            success: !0
        };
        var c = "";
        try {
            c = b.getItem("_GESPSK-" + a)
        } catch (g) {
            var d;
            yf(6, a, null == (d = g) ? void 0 : d.message);
            return {
                zb: null,
                success: !1
            }
        }
        if (!c) return {
            zb: null,
            success: !0
        };
        try {
            var e = fw(c);
            this.cache[a] = e;
            return {
                zb: e,
                success: !0
            }
        } catch (g) {
            var f;
            yf(5, a, null == (f = g) ? void 0 : f.message);
            return {
                zb: null,
                success: !1
            }
        }
    };
    oB.prototype.set = function(a, b) {
        var c = y(a, 1),
            d = "_GESPSK-" + c;
        _.z(a, 3, Date.now());
        try {
            b.setItem(d, Qe(a))
        } catch (f) {
            var e;
            yf(7, c, null == (e = f) ? void 0 : e.message);
            return !1
        }
        this.cache[c] = a;
        return !0
    };
    var pB = null;
    var Bf = function() {
        var a = {};
        this.o = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.H = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.C = function() {}
    };
    var qB = function(a) {
        _.T.call(this);
        this.I = a;
        this.j = [];
        this.m = [];
        this.l = [];
        this.C = []
    };
    _.O(qB, _.T);
    var sB = function(a, b, c) {
        a.m.push({
            Bb: void 0 === c ? !1 : c,
            jb: b
        });
        _.C(Hy) && rB(b, a.I)
    };
    qB.prototype.o = function() {
        this.j.length = 0;
        this.l.length = 0;
        if (_.C(Hy))
            for (var a = _.w(this.m), b = a.next(); !b.done; b = a.next()) b.value.jb.Ud();
        this.m.length = 0;
        this.C.length = 0;
        _.T.prototype.o.call(this)
    };
    _.fh = function() {
        var a = this;
        this.promise = new _.v.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };
    var tB = function(a) {
        a = Error.call(this, a);
        this.message = a.message;
        "stack" in a && (this.stack = a.stack);
        _.t(Object, "setPrototypeOf").call(Object, this, tB.prototype);
        this.name = "InputError"
    };
    _.O(tB, Error);
    var uB = function() {
            this.Na = !1
        },
        vB = function() {
            uB.apply(this, arguments);
            this.j = [];
            this.Lc = new _.fh
        };
    _.O(vB, uB);
    var xB = function(a, b) {
            a.Na || (a.Na = !0, a.bc = b, a.Lc.resolve(b), _.C(Hy) && wB(a))
        },
        yB = function(a, b) {
            a.Na = !0;
            a.Gd = b;
            a.Lc.reject(b);
            _.C(Hy) && wB(a)
        },
        wB = function(a) {
            for (var b = _.w(a.j), c = b.next(); !c.done; c = b.next()) c = c.value, c(a.bc);
            a.j.length = 0
        };
    vB.prototype.Ud = function() {
        this.j.length = 0
    };
    var rB = function(a, b) {
        _.C(Hy) && a.j.push(b)
    };
    _.Ur.Object.defineProperties(vB.prototype, {
        promise: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Lc.promise
            }
        },
        qb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Na
            }
        },
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Gd
            }
        }
    });
    var Fq = function() {
        vB.apply(this, arguments)
    };
    _.O(Fq, vB);
    Fq.prototype.J = function(a) {
        xB(this, a)
    };
    var zB = function(a, b) {
            xB(a, null != b ? b : null)
        },
        AB = function(a) {
            xB(a, null)
        };
    Fq.prototype.Ka = function(a) {
        var b = this;
        a.then(function(c) {
            b.J(c)
        })
    };
    Fq.prototype.Fa = function(a) {
        this.Na || (this.Na = !0, this.bc = null, this.Gd = a, this.Lc.reject(a), _.C(Hy) && wB(this))
    };
    var BB = function() {
        vB.apply(this, arguments)
    };
    _.O(BB, vB);
    BB.prototype.J = function(a) {
        xB(this, a)
    };
    BB.prototype.Ka = function(a) {
        var b = this;
        a.then(function(c) {
            return void b.J(c)
        })
    };
    BB.prototype.Fa = function(a) {
        this.Na || (this.Na = !0, this.Gd = a, this.Lc.reject(a))
    };
    var CB = function(a) {
        this.Na = !1;
        this.wb = a
    };
    _.O(CB, uB);
    CB.prototype.qb = function() {
        return this.wb.Na
    };
    CB.prototype.Ec = function() {
        return null != this.wb.bc
    };
    _.Ur.Object.defineProperties(CB.prototype, {
        error: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.wb.Gd
            }
        }
    });
    var DB = function(a) {
        CB.call(this, a);
        this.wb = a
    };
    _.O(DB, CB);
    _.Ur.Object.defineProperties(DB.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.wb.bc
            }
        }
    });
    var EB = function(a) {
        CB.call(this, a);
        this.wb = a
    };
    _.O(EB, CB);
    _.Ur.Object.defineProperties(EB.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.wb.bc) ? a : null
            }
        }
    });
    var FB = function() {
        CB.apply(this, arguments)
    };
    _.O(FB, CB);
    _.Ur.Object.defineProperties(FB.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null != (a = this.wb.bc) ? a : null
            }
        }
    });
    var GB = function() {
        vB.apply(this, arguments)
    };
    _.O(GB, vB);
    GB.prototype.notify = function() {
        xB(this, null)
    };
    var HB = function(a, b) {
            b.then(function() {
                a.notify()
            })
        },
        IB = function(a, b) {
            b = void 0 === b ? !1 : b;
            vB.call(this);
            var c = this;
            this.m = a;
            this.o = 0;
            if (_.C(Hy)) {
                a = {};
                for (var d = _.w(this.m), e = d.next(); !e.done; a = {
                        uc: a.uc
                    }, e = d.next()) a.uc = e.value, rB(a.uc, function(f) {
                    return function(g) {
                        c.o += 1;
                        f.uc.error ? yB(c, f.uc.error) : b || null !== g ? xB(c, null != g ? g : null) : c.o === c.m.length && xB(c, null)
                    }
                }(a))
            } else a = a.map(function(f) {
                return f.promise.then(function(g) {
                    if (b || null != g) return g;
                    throw g;
                }, function(g) {
                    yB(c, g);
                    return null
                })
            }), _.t(_.v.Promise, "any").call(_.v.Promise, a).then(function(f) {
                c.Na || xB(c, f)
            }, function() {
                c.Na || xB(c, null)
            })
        };
    _.O(IB, vB);
    var JB = function(a, b) {
        vB.call(this);
        this.Za = a;
        this.defaultValue = b
    };
    _.O(JB, vB);
    var Wf = function(a) {
        setTimeout(function() {
            var b;
            xB(a, null != (b = a.defaultValue) ? b : null)
        }, a.Za)
    };
    var LB = function(a, b) {
        _.T.call(this);
        var c = this;
        this.id = a;
        this.Za = b;
        this.oa = this.na = this.ja = this.M = !1;
        this.Pa = -1;
        this.C = new qB(function() {
            KB(c)
        });
        _.Fn(this, this.C)
    };
    _.O(LB, _.T);
    LB.prototype.start = function() {
        var a = this,
            b, c;
        return _.Ab(function(d) {
            switch (d.j) {
                case 1:
                    if (a.M) return d.return();
                    a.M = !0;
                    d.m = 2;
                    b = a;
                    return Bb(d, Xf(a.C.m, a.C.C, a.Za), 4);
                case 4:
                    b.Pa = d.o;
                    if (a.H) {
                        d.j = 5;
                        break
                    }
                    for (var e = 0, f = _.w(a.C.l), g = f.next(); !g.done; g = f.next()) {
                        if (!g.value.Ec()) throw Error("missing input: " + a.id + "/" + e);
                        ++e
                    }
                    return Bb(d, a.j(), 5);
                case 5:
                    Db(d, 0);
                    break;
                case 2:
                    c = Eb(d);
                    if (a.H) return d.return();
                    c instanceof tB ? a.I(c) : c instanceof Error && (a.R(c), a.m(c));
                    d.j = 0
            }
        })
    };
    var KB = function(a) {
            if (!a.M && a.ja) try {
                var b = a.C.m,
                    c = a.Za ? b.filter(function(k) {
                        return !k.Bb
                    }) : b,
                    d = b.filter(function(k) {
                        return k.Bb
                    }),
                    e, f = null == (e = _.t(b, "find").call(b, function(k) {
                        return void 0 !== k.jb.error
                    })) ? void 0 : e.jb.error;
                if (f) throw a.M = !0, f;
                if (!c.some(function(k) {
                        return !k.jb.qb
                    })) {
                    if (d.length)
                        if (_.C(Vf)) {
                            for (var g = _.w(a.C.C), h = g.next(); !h.done; h = g.next()) Wf(h.value);
                            if (d.some(function(k) {
                                    return !k.jb.qb
                                })) return
                        } else if (a.na || (a.na = !0, setTimeout(function() {
                            a.oa = !0;
                            KB(a)
                        }, a.Za)), d.some(function(k) {
                            return !k.jb.qb
                        }) && !a.oa) return;
                    a.M = !0;
                    a.j()
                }
            } catch (k) {
                a.H || (k instanceof tB ? a.I(k) : k instanceof Error && (a.R(k), a.m(k)))
            }
        },
        W = function(a) {
            var b = new Fq;
            a.C.j.push(b);
            return b
        },
        MB = function(a) {
            var b = new BB;
            a.C.j.push(b);
            return b
        },
        NB = function(a) {
            var b = new GB;
            a.C.j.push(b);
            return b
        },
        X = function(a, b) {
            sB(a.C, b);
            b = new DB(b);
            a.C.l.push(b);
            return b
        },
        Y = function(a, b) {
            sB(a.C, b);
            return new EB(b)
        },
        OB = function(a, b) {
            if (_.C(Vf)) {
                if (a.Za) {
                    var c = new JB(a.Za, void 0);
                    b = new IB([b, c], !0);
                    sB(a.C, b, !0);
                    a.C.C.push(c);
                    return new EB(b)
                }
                sB(a.C, b);
                return new EB(b)
            }
            sB(a.C, b, !0);
            return new EB(b)
        },
        PB = function(a, b) {
            sB(a.C, b)
        },
        QB = function(a, b) {
            if (_.C(Vf))
                if (a.Za) {
                    var c = new JB(a.Za);
                    b = new IB([b, c], !0);
                    sB(a.C, b, !0);
                    a.C.C.push(c)
                } else PB(a, b);
            else sB(a.C, b, !0)
        },
        RB = function(a, b) {
            b = new IB(b);
            sB(a.C, b);
            b = new DB(b);
            a.C.l.push(b);
            return b
        };
    LB.prototype.I = function() {};
    LB.prototype.m = function(a) {
        if (this.C.j.length) {
            a = new tB(a.message);
            for (var b = _.w(this.C.j), c = b.next(); !c.done; c = b.next()) c = c.value, c.qb || yB(c, a)
        }
    };
    var SB = function(a, b) {
        LB.call(this, a);
        this.id = a;
        this.D = b
    };
    _.O(SB, LB);
    SB.prototype.R = function(a) {
        this.D(this.id, a)
    };
    var hg = function(a, b, c, d) {
        SB.call(this, 1041, d);
        this.storage = b;
        this.l = c;
        this.F = X(this, a);
        this.l && (this.A = X(this, this.l))
    };
    _.O(hg, SB);
    hg.prototype.j = function() {
        var a = this.F.value,
            b, c, d = null != (c = null == (b = this.A) ? void 0 : b.value) ? c : this.storage;
        Qf().set(a, d) && _.Uf(a, 2) && yf(27, y(a, 1))
    };
    var jg = function(a, b) {
        SB.call(this, 1048, b);
        this.l = W(this);
        this.A = W(this);
        this.F = X(this, a)
    };
    _.O(jg, SB);
    jg.prototype.j = function() {
        var a = this.F.value,
            b = function(c) {
                var d = {};
                yf(c, y(a, 1), null, (d.tic = String(Math.round((Date.now() - y(a, 3)) / 6E4)), d))
            };
        switch (Rf(a)) {
            case 0:
                b(24);
                break;
            case 1:
                b(25);
                this.A.J(a);
                break;
            case 2:
                b(26);
                this.l.J(a);
                break;
            case 3:
                yf(9, y(a, 1));
                this.l.J(a);
                break;
            case 4:
                b(23), this.l.J(a)
        }
    };
    var TB = function(a, b, c) {
        SB.call(this, 1094, c);
        this.storage = a;
        this.l = NB(this);
        b && (this.A = X(this, b))
    };
    _.O(TB, SB);
    TB.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.A) ? void 0 : a.value) ? b : this.storage;
        if (void 0 !== c)
            for (a = _.w(_.t(Object, "keys").call(Object, c)), b = a.next(); !b.done; b = a.next())
                if (b = b.value, _.t(b, "startsWith").call(b, "_GESPSK")) try {
                    c.removeItem(b)
                } catch (d) {}
        pB = new oB;
        this.l.notify()
    };
    var zg = function(a, b, c) {
        SB.call(this, 1049, c);
        this.storage = b;
        PB(this, a)
    };
    _.O(zg, SB);
    zg.prototype.j = function() {
        for (var a = _.w(Af(this.storage)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Qf().get(b, this.storage).zb;
            if (c) {
                var d = Rf(c);
                if (2 === d || 3 === d) {
                    d = void 0;
                    var e = Qf();
                    c = y(c, 1);
                    try {
                        this.storage.removeItem("_GESPSK-" + c), delete e.cache[c]
                    } catch (f) {
                        yf(8, c, null == (d = f) ? void 0 : d.message)
                    }
                    yf(40, b)
                }
            }
        }
    };
    var gg = function(a, b, c, d) {
        SB.call(this, 1027, d);
        this.ld = a;
        this.storage = b;
        this.l = W(this);
        this.A = W(this);
        c && (this.F = X(this, c))
    };
    _.O(gg, SB);
    gg.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.F) ? void 0 : a.value) ? b : this.storage;
        a = Qf().get(this.ld, c).zb;
        a || (a = Of(this.ld), a = _.z(a, 3, Date.now()), this.A.J(a.Fa(cg(new eg, 100))));
        this.l.J(a)
    };
    var kg = function(a, b, c) {
        SB.call(this, 1047, c);
        this.collectorFunction = a;
        this.A = W(this);
        this.l = W(this);
        this.F = W(this);
        this.K = X(this, b)
    };
    _.O(kg, SB);
    kg.prototype.j = function() {
        var a = this,
            b = this.K.value,
            c = y(b, 1);
        yf(18, c);
        try {
            var d = _.mf();
            this.collectorFunction().then(function(e) {
                yf(29, c, null, {
                    delta: String(_.mf() - d)
                });
                a.A.J(_.z(b, 2, e));
                zB(a.F, e)
            }).catch(function(e) {
                yf(28, c, Yf(e));
                a.l.J(b.Fa(cg(new eg, 106)))
            })
        } catch (e) {
            yf(1, c, Yf(e)), this.l.J(b.Fa(cg(new eg, 107)))
        }
    };
    var ag = function(a) {
        return "string" === typeof a ? a : a instanceof Error ? a.message : null
    };
    var mg = function(a, b, c, d, e) {
        SB.call(this, 662, e);
        this.A = a;
        this.storage = c;
        this.F = X(this, b);
        d && (this.l = X(this, d))
    };
    _.O(mg, SB);
    mg.prototype.j = function() {
        var a = this,
            b, c, d = null != (c = null == (b = this.l) ? void 0 : b.value) ? c : this.storage;
        zf().then(function() {
            var e = a.F.value;
            bg(y(e, 1), e, a.A, d)
        })
    };
    var ig = function(a, b) {
        SB.call(this, 1028, b);
        this.l = W(this);
        this.A = X(this, a)
    };
    _.O(ig, SB);
    ig.prototype.j = function() {
        var a = this.A.value,
            b = y(a, 1);
        null != y(a, 3) || yf(35, b);
        this.l.J(a)
    };
    var lg = function(a, b, c, d, e) {
        SB.call(this, 1050, e);
        this.K = c;
        this.F = d;
        this.l = W(this);
        this.A = X(this, a);
        this.N = Y(this, b)
    };
    _.O(lg, SB);
    lg.prototype.j = function() {
        var a = this.A.value,
            b = y(a, 1),
            c = this.N.value;
        if (null == c) yf(41, b), a.Fa(cg(new eg, 111)), this.l.J(a);
        else if ("string" !== typeof c) yf(21, b), this.l.J(a.Fa(cg(new eg, 113)));
        else {
            if (c.length > (/^(\d+)$/.test(b) ? this.F : this.K)) {
                var d = {};
                yf(12, b, null, (d.sl = String(c.length), d));
                b = a.Fa(cg(new eg, 108));
                $f(b, 2)
            } else c.length || yf(20, b), $f(a, 10);
            this.l.J(a)
        }
    };
    var fg = function() {
        _.T.apply(this, arguments);
        this.l = [];
        this.I = [];
        this.A = {};
        this.C = [];
        this.m = new _.fh;
        this.j = {}
    };
    _.O(fg, _.T);
    var H = function(a, b) {
            _.Fn(a, b);
            a.l.push(b);
            return b
        },
        Ag = function(a, b) {
            b = _.w(b);
            for (var c = b.next(); !c.done; c = b.next()) H(a, c.value)
        },
        ng = function(a) {
            var b, c, d, e, f, g, h, k, l, n, m, p;
            return _.Ab(function(r) {
                switch (r.j) {
                    case 1:
                        if (!a.C.length) {
                            r.j = 2;
                            break
                        }
                        return Bb(r, _.v.Promise.all(a.C.map(function(u) {
                            return u.m.promise
                        })), 2);
                    case 2:
                        b = _.w(a.l);
                        for (c = b.next(); !c.done; c = b.next()) d = c.value, _.C(Hy) ? (d.ja = !0, KB(d)) : d.start();
                        e = _.w(a.I);
                        for (f = e.next(); !f.done; f = e.next()) g = f.value, ng(g);
                        if (!a.j) {
                            r.j = 4;
                            break
                        }
                        h = _.t(Object, "keys").call(Object, a.j);
                        if (!h.length) {
                            r.j = 4;
                            break
                        }
                        return Bb(r, _.v.Promise.all(_.t(Object, "values").call(Object, a.j).map(function(u) {
                            return u.promise
                        })), 6);
                    case 6:
                        for (k = r.o, l = 0, n = _.w(h), m = n.next(); !m.done; m = n.next()) p = m.value, a.A[p] = k[l++];
                    case 4:
                        return a.m.resolve(a.A), r.return(a.m.promise)
                }
            })
        };
    fg.prototype.o = function() {
        _.T.prototype.o.call(this);
        this.l.length = 0;
        this.I.length = 0;
        this.C.length = 0
    };
    var UB = function(a, b, c, d, e) {
        SB.call(this, 1059, e);
        this.K = b;
        this.storage = c;
        this.F = d;
        this.l = W(this);
        this.N = X(this, a);
        d && (this.A = Y(this, d))
    };
    _.O(UB, SB);
    UB.prototype.j = function() {
        var a, b, c = null != (b = this.storage) ? b : null == (a = this.A) ? void 0 : a.value;
        if (c) {
            var d = this.N.value;
            b = d.id;
            a = d.collectorFunction;
            var e;
            d = null != (e = d.networkCode) ? e : b;
            e = {};
            yf(42, d, null, (e.ea = String(Number(this.K)), e));
            this.l.Ka(og(d, a, c, this.F, this.D))
        }
    };
    var VB = function(a, b) {
        SB.call(this, 1057, b);
        this.l = a;
        this.A = W(this);
        this.F = W(this)
    };
    _.O(VB, SB);
    VB.prototype.j = function() {
        if (this.l)
            if ("object" !== typeof this.l) yf(46, "UNKNOWN_COLLECTOR_ID"), WB(this, "UNKNOWN_COLLECTOR_ID", 112);
            else {
                var a = this.l.id,
                    b = this.l.networkCode;
                a && b && (delete this.l.id, yf(47, a + ";" + b));
                a = null != b ? b : a;
                "string" !== typeof a ? (b = {}, yf(37, "INVALID_COLLECTOR_ID", null, (b.ii = JSON.stringify(a), b)), WB(this, "INVALID_COLLECTOR_ID", 102)) : "function" !== typeof this.l.collectorFunction ? (yf(14, a), WB(this, a, 105)) : (_.B = Df(tz), _.t(_.B, "includes")).call(_.B, a) ? (yf(22, a), WB(this, a, 104)) : this.F.J(this.l)
            }
        else yf(39, "UNKNOWN_COLLECTOR_ID"), WB(this, "UNKNOWN_COLLECTOR_ID", 110)
    };
    var WB = function(a, b, c) {
        a.A.J(Of(b).Fa(cg(new eg, c)))
    };
    var wg = function(a, b, c, d) {
        var e = void 0 === e ? document : e;
        this.storage = null;
        this.j = b;
        this.I = c;
        this.H = d;
        this.T = e;
        this.l = [];
        this.C = [];
        this.m = [];
        this.o = 0;
        a = _.w(a);
        for (b = a.next(); !b.done; b = a.next()) this.push(b.value)
    };
    _.aa = wg.prototype;
    _.aa.push = function(a) {
        var b = this,
            c = this.H.Te ? function(f, g) {
                return void b.Zc(f, g)
            } : this.Zc;
        a = new VB(a, c);
        var d = new hg(a.A, this.storage, this.j, c);
        c = new UB(a.F, this.I, this.storage, this.j, c);
        var e = new fg;
        Ag(e, [a, d, c]);
        ng(e);
        a = c.l.promise;
        this.l.push(a);
        d = _.w(this.C);
        for (c = d.next(); !c.done; c = d.next()) a.then(c.value)
    };
    _.aa.addOnSignalResolveCallback = function(a) {
        this.C.push(a);
        for (var b = _.w(this.l), c = b.next(); !c.done; c = b.next()) c.value.then(a)
    };
    _.aa.addErrorHandler = function(a) {
        this.m.push(a)
    };
    _.aa.clearAllCache = function() {
        var a = this,
            b = this.T.currentScript instanceof HTMLScriptElement ? this.T.currentScript.src : "";
        if (1 === this.o) {
            var c = {};
            yf(49, "", null, (c.url = b, c))
        } else if (c = String(_.oi(null != b ? b : "")), (_.B = Df(sz), _.t(_.B, "includes")).call(_.B, c)) c = {}, yf(48, "", null, (c.url = b, c));
        else {
            var d = new fg;
            c = new TB(this.storage, this.j, this.H.Te ? function(e, f) {
                return void a.Zc(e, f)
            } : this.Zc);
            H(d, c);
            ng(d);
            this.o = 1;
            setTimeout(function() {
                a.o = 0
            }, 1E3 * _.Cf(rz));
            d = {};
            yf(43, "", null, (d.url = b, d));
            return c.l.promise
        }
    };
    _.aa.Zc = function(a, b) {
        for (var c = _.w(this.m), d = c.next(); !d.done; d = c.next()) d = d.value, d(a, b)
    };
    var xg = function(a) {
        this.push = function(b) {
            a.push(b)
        };
        this.addOnSignalResolveCallback = function(b) {
            a.addOnSignalResolveCallback(b)
        };
        this.addErrorHandler = function(b) {
            a.addErrorHandler(b)
        };
        this.clearAllCache = function() {
            a.clearAllCache()
        }
    };
    var qg = {
        Te: !1
    };
    var Dg = function(a, b) {
        SB.call(this, 1036, b);
        this.l = W(this);
        this.A = X(this, a)
    };
    _.O(Dg, SB);
    Dg.prototype.j = function() {
        var a = this.A.value;
        0 !== Rf(a) && this.l.J(a)
    };
    var Eg = function(a, b, c) {
        SB.call(this, 1035, c);
        this.A = b;
        this.l = W(this);
        this.F = X(this, a)
    };
    _.O(Eg, SB);
    Eg.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c = y(b, 1),
            d = this.A.toString(),
            e = {};
        yf(30, c, null, (e.url = d, e));
        var f = document.createElement("script");
        f.setAttribute("esp-signal", "true");
        mb(f, this.A);
        var g = function() {
            var h = {};
            yf(31, c, null, (h.url = d, h));
            a.l.J(b.Fa(cg(new eg, 109)));
            _.De(f, "error", g)
        };
        document.head.appendChild(f);
        _.yb(f, "error", g)
    };
    var yg = function(a) {
        SB.call(this, 1046, a);
        this.B = NB(this)
    };
    _.O(yg, SB);
    yg.prototype.j = function() {
        var a = this;
        zf().then(function() {
            return a.B.notify()
        })
    };
    var Cg = new _.v.Set;
    var XB = 0,
        YB = ue(_.Ds(Es("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Qg = function() {
            this.j = function() {}
        },
        Ug = function(a, b) {
            a.j = qf(14, b, function() {})
        };
    var li = function(a, b, c) {
            a && null !== b && b != b.top && (b = b.top);
            try {
                return (void 0 === c ? 0 : c) ? (new _.Ri(b.innerWidth, b.innerHeight)).round() : _.cx(b || window).round()
            } catch (d) {
                return new _.Ri(-12245933, -12245933)
            }
        },
        ZB = function(a) {
            return "CSS1Compat" == a.compatMode ? a.documentElement : a.body
        },
        Zm = function(a, b) {
            b = void 0 === b ? _.q : b;
            a = a.scrollingElement || ZB(a);
            return new _.Oi(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
        },
        bj = function(a) {
            try {
                return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
            } catch (b) {
                return !1
            }
        };
    var $B = function(a) {
        _.Q.call(this, a)
    };
    _.O($B, _.Q);
    var ff = function(a) {
        return _.E(a, 5)
    };
    var cC, dC, eC;
    _.aC = function(a) {
        this.j = a;
        this.o = 0
    };
    cC = function(a, b) {
        if (0 === a.o) {
            if (_.bC(a, "__gads", b)) b = !0;
            else {
                var c = a.j;
                ff(b) && hf(c) && (new jf(c.document)).set("GoogleAdServingTest", "Good", void 0);
                if (c = "Good" === kf("GoogleAdServingTest", b, a.j)) {
                    var d = a.j;
                    ff(b) && hf(d) && TA(new jf(d.document), "GoogleAdServingTest")
                }
                b = c
            }
            a.o = b ? 2 : 1
        }
        return 2 === a.o
    };
    _.bC = function(a, b, c) {
        return c ? kf(b, c, a.j) : null
    };
    dC = function(a, b, c, d) {
        if (d) {
            var e = {
                we: Math.max(y(c, 2) - Date.now() / 1E3, 0),
                path: y(c, 3),
                domain: y(c, 4),
                ki: !1
            };
            a = a.j;
            ff(d) && hf(a) && (new jf(a.document)).set(b, y(c, 1), e)
        }
    };
    eC = function(a, b, c) {
        if (c && kf(b, c, a.j)) {
            var d = a.j.location.hostname;
            if ("localhost" === d) d = ["localhost"];
            else if (d = d.split("."), 2 > d.length) d = [];
            else {
                for (var e = [], f = 0; f < d.length - 1; ++f) e.push(d.slice(f).join("."));
                d = e
            }
            d = _.w(d);
            for (e = d.next(); !e.done; e = d.next()) f = a.j, ff(c) && hf(f) && TA(new jf(f.document), b, "/", e.value)
        }
    };
    var fC = {},
        gC = (fC[3] = ue(_.Ds(Es("https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js"))), fC);
    ({})[3] = ue(_.Ds(Es("https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js")));
    var hC = function(a) {
            this.j = a;
            this.o = Tw()
        },
        iC = function(a) {
            var b = {};
            _.Ks(a, function(c) {
                b[c.j] = c.o
            });
            return b
        };
    var jC = _.P(["https://adservice.google.com/adsid/integrator.", ""]),
        kC = _.P(["https://adservice.google.ad/adsid/integrator.", ""]),
        lC = _.P(["https://adservice.google.ae/adsid/integrator.", ""]),
        mC = _.P(["https://adservice.google.com.af/adsid/integrator.", ""]),
        nC = _.P(["https://adservice.google.com.ag/adsid/integrator.", ""]),
        oC = _.P(["https://adservice.google.com.ai/adsid/integrator.", ""]),
        pC = _.P(["https://adservice.google.al/adsid/integrator.", ""]),
        qC = _.P(["https://adservice.google.co.ao/adsid/integrator.", ""]),
        rC = _.P(["https://adservice.google.com.ar/adsid/integrator.", ""]),
        sC = _.P(["https://adservice.google.as/adsid/integrator.", ""]),
        tC = _.P(["https://adservice.google.at/adsid/integrator.", ""]),
        uC = _.P(["https://adservice.google.com.au/adsid/integrator.", ""]),
        vC = _.P(["https://adservice.google.az/adsid/integrator.", ""]),
        wC = _.P(["https://adservice.google.com.bd/adsid/integrator.", ""]),
        xC = _.P(["https://adservice.google.be/adsid/integrator.", ""]),
        yC = _.P(["https://adservice.google.bf/adsid/integrator.", ""]),
        zC = _.P(["https://adservice.google.bg/adsid/integrator.", ""]),
        AC = _.P(["https://adservice.google.com.bh/adsid/integrator.", ""]),
        BC = _.P(["https://adservice.google.bi/adsid/integrator.", ""]),
        CC = _.P(["https://adservice.google.bj/adsid/integrator.", ""]),
        DC = _.P(["https://adservice.google.com.bn/adsid/integrator.", ""]),
        EC = _.P(["https://adservice.google.com.bo/adsid/integrator.", ""]),
        FC = _.P(["https://adservice.google.com.br/adsid/integrator.", ""]),
        GC = _.P(["https://adservice.google.bs/adsid/integrator.", ""]),
        HC = _.P(["https://adservice.google.bt/adsid/integrator.", ""]),
        IC = _.P(["https://adservice.google.co.bw/adsid/integrator.", ""]),
        YC = _.P(["https://adservice.google.com.bz/adsid/integrator.", ""]),
        $C = _.P(["https://adservice.google.ca/adsid/integrator.", ""]),
        eD = _.P(["https://adservice.google.cd/adsid/integrator.", ""]),
        gD = _.P(["https://adservice.google.cf/adsid/integrator.", ""]),
        hD = _.P(["https://adservice.google.cg/adsid/integrator.", ""]),
        iD = _.P(["https://adservice.google.ch/adsid/integrator.", ""]),
        jD = _.P(["https://adservice.google.ci/adsid/integrator.", ""]),
        kD = _.P(["https://adservice.google.co.ck/adsid/integrator.", ""]),
        lD = _.P(["https://adservice.google.cl/adsid/integrator.", ""]),
        mD = _.P(["https://adservice.google.cm/adsid/integrator.", ""]),
        nD = _.P(["https://adservice.google.com.co/adsid/integrator.", ""]),
        oD = _.P(["https://adservice.google.co.cr/adsid/integrator.", ""]),
        pD = _.P(["https://adservice.google.com.cu/adsid/integrator.", ""]),
        qD = _.P(["https://adservice.google.cv/adsid/integrator.", ""]),
        rD = _.P(["https://adservice.google.com.cy/adsid/integrator.", ""]),
        sD = _.P(["https://adservice.google.cz/adsid/integrator.", ""]),
        tD = _.P(["https://adservice.google.de/adsid/integrator.", ""]),
        uD = _.P(["https://adservice.google.dj/adsid/integrator.", ""]),
        vD = _.P(["https://adservice.google.dk/adsid/integrator.", ""]),
        wD = _.P(["https://adservice.google.dm/adsid/integrator.", ""]),
        xD = _.P(["https://adservice.google.dz/adsid/integrator.", ""]),
        yD = _.P(["https://adservice.google.com.ec/adsid/integrator.", ""]),
        zD = _.P(["https://adservice.google.ee/adsid/integrator.", ""]),
        AD = _.P(["https://adservice.google.com.eg/adsid/integrator.", ""]),
        BD = _.P(["https://adservice.google.es/adsid/integrator.", ""]),
        CD = _.P(["https://adservice.google.com.et/adsid/integrator.", ""]),
        DD = _.P(["https://adservice.google.fi/adsid/integrator.", ""]),
        ED = _.P(["https://adservice.google.com.fj/adsid/integrator.", ""]),
        FD = _.P(["https://adservice.google.fm/adsid/integrator.", ""]),
        GD = _.P(["https://adservice.google.fr/adsid/integrator.", ""]),
        HD = _.P(["https://adservice.google.ga/adsid/integrator.", ""]),
        ID = _.P(["https://adservice.google.ge/adsid/integrator.", ""]),
        JD = _.P(["https://adservice.google.gg/adsid/integrator.", ""]),
        KD = _.P(["https://adservice.google.com.gh/adsid/integrator.", ""]),
        LD = _.P(["https://adservice.google.com.gi/adsid/integrator.", ""]),
        MD = _.P(["https://adservice.google.gl/adsid/integrator.", ""]),
        ND = _.P(["https://adservice.google.gm/adsid/integrator.", ""]),
        OD = _.P(["https://adservice.google.gr/adsid/integrator.", ""]),
        PD = _.P(["https://adservice.google.com.gt/adsid/integrator.", ""]),
        QD = _.P(["https://adservice.google.gy/adsid/integrator.", ""]),
        RD = _.P(["https://adservice.google.com.hk/adsid/integrator.", ""]),
        SD = _.P(["https://adservice.google.hn/adsid/integrator.", ""]),
        TD = _.P(["https://adservice.google.hr/adsid/integrator.", ""]),
        UD = _.P(["https://adservice.google.ht/adsid/integrator.", ""]),
        VD = _.P(["https://adservice.google.hu/adsid/integrator.", ""]),
        WD = _.P(["https://adservice.google.co.id/adsid/integrator.", ""]),
        XD = _.P(["https://adservice.google.ie/adsid/integrator.", ""]),
        YD = _.P(["https://adservice.google.co.il/adsid/integrator.", ""]),
        ZD = _.P(["https://adservice.google.im/adsid/integrator.", ""]),
        $D = _.P(["https://adservice.google.co.in/adsid/integrator.", ""]),
        aE = _.P(["https://adservice.google.iq/adsid/integrator.", ""]),
        bE = _.P(["https://adservice.google.is/adsid/integrator.", ""]),
        cE = _.P(["https://adservice.google.it/adsid/integrator.", ""]),
        dE = _.P(["https://adservice.google.je/adsid/integrator.", ""]),
        eE = _.P(["https://adservice.google.com.jm/adsid/integrator.", ""]),
        fE = _.P(["https://adservice.google.jo/adsid/integrator.", ""]),
        gE = _.P(["https://adservice.google.co.jp/adsid/integrator.", ""]),
        hE = _.P(["https://adservice.google.co.ke/adsid/integrator.", ""]),
        iE = _.P(["https://adservice.google.com.kh/adsid/integrator.", ""]),
        jE = _.P(["https://adservice.google.ki/adsid/integrator.", ""]),
        kE = _.P(["https://adservice.google.kg/adsid/integrator.", ""]),
        lE = _.P(["https://adservice.google.co.kr/adsid/integrator.", ""]),
        mE = _.P(["https://adservice.google.com.kw/adsid/integrator.", ""]),
        nE = _.P(["https://adservice.google.kz/adsid/integrator.", ""]),
        oE = _.P(["https://adservice.google.la/adsid/integrator.", ""]),
        pE = _.P(["https://adservice.google.com.lb/adsid/integrator.", ""]),
        qE = _.P(["https://adservice.google.li/adsid/integrator.", ""]),
        rE = _.P(["https://adservice.google.lk/adsid/integrator.", ""]),
        sE = _.P(["https://adservice.google.co.ls/adsid/integrator.", ""]),
        tE = _.P(["https://adservice.google.lt/adsid/integrator.", ""]),
        uE = _.P(["https://adservice.google.lu/adsid/integrator.", ""]),
        vE = _.P(["https://adservice.google.lv/adsid/integrator.", ""]),
        wE = _.P(["https://adservice.google.com.ly/adsid/integrator.", ""]),
        xE = _.P(["https://adservice.google.md/adsid/integrator.", ""]),
        yE = _.P(["https://adservice.google.me/adsid/integrator.", ""]),
        zE = _.P(["https://adservice.google.mg/adsid/integrator.", ""]),
        AE = _.P(["https://adservice.google.mk/adsid/integrator.", ""]),
        BE = _.P(["https://adservice.google.ml/adsid/integrator.", ""]),
        CE = _.P(["https://adservice.google.com.mm/adsid/integrator.", ""]),
        DE = _.P(["https://adservice.google.mn/adsid/integrator.", ""]),
        EE = _.P(["https://adservice.google.ms/adsid/integrator.", ""]),
        FE = _.P(["https://adservice.google.com.mt/adsid/integrator.", ""]),
        GE = _.P(["https://adservice.google.mu/adsid/integrator.", ""]),
        HE = _.P(["https://adservice.google.mv/adsid/integrator.", ""]),
        IE = _.P(["https://adservice.google.mw/adsid/integrator.", ""]),
        JE = _.P(["https://adservice.google.com.mx/adsid/integrator.", ""]),
        KE = _.P(["https://adservice.google.com.my/adsid/integrator.", ""]),
        LE = _.P(["https://adservice.google.co.mz/adsid/integrator.", ""]),
        ME = _.P(["https://adservice.google.com.na/adsid/integrator.", ""]),
        NE = _.P(["https://adservice.google.com.ng/adsid/integrator.", ""]),
        OE = _.P(["https://adservice.google.com.ni/adsid/integrator.", ""]),
        PE = _.P(["https://adservice.google.ne/adsid/integrator.", ""]),
        QE = _.P(["https://adservice.google.nl/adsid/integrator.", ""]),
        RE = _.P(["https://adservice.google.no/adsid/integrator.", ""]),
        SE = _.P(["https://adservice.google.com.np/adsid/integrator.", ""]),
        TE = _.P(["https://adservice.google.nr/adsid/integrator.", ""]),
        UE = _.P(["https://adservice.google.nu/adsid/integrator.", ""]),
        VE = _.P(["https://adservice.google.co.nz/adsid/integrator.", ""]),
        WE = _.P(["https://adservice.google.com.om/adsid/integrator.", ""]),
        XE = _.P(["https://adservice.google.com.pa/adsid/integrator.", ""]),
        YE = _.P(["https://adservice.google.com.pe/adsid/integrator.", ""]),
        ZE = _.P(["https://adservice.google.com.pg/adsid/integrator.", ""]),
        $E = _.P(["https://adservice.google.com.ph/adsid/integrator.", ""]),
        aF = _.P(["https://adservice.google.com.pk/adsid/integrator.", ""]),
        bF = _.P(["https://adservice.google.pl/adsid/integrator.", ""]),
        cF = _.P(["https://adservice.google.pn/adsid/integrator.", ""]),
        dF = _.P(["https://adservice.google.com.pr/adsid/integrator.", ""]),
        eF = _.P(["https://adservice.google.ps/adsid/integrator.", ""]),
        fF = _.P(["https://adservice.google.pt/adsid/integrator.", ""]),
        gF = _.P(["https://adservice.google.com.py/adsid/integrator.", ""]),
        hF = _.P(["https://adservice.google.com.qa/adsid/integrator.", ""]),
        iF = _.P(["https://adservice.google.ro/adsid/integrator.", ""]),
        jF = _.P(["https://adservice.google.rw/adsid/integrator.", ""]),
        kF = _.P(["https://adservice.google.com.sa/adsid/integrator.", ""]),
        lF = _.P(["https://adservice.google.com.sb/adsid/integrator.", ""]),
        mF = _.P(["https://adservice.google.sc/adsid/integrator.", ""]),
        nF = _.P(["https://adservice.google.se/adsid/integrator.", ""]),
        oF = _.P(["https://adservice.google.com.sg/adsid/integrator.", ""]),
        pF = _.P(["https://adservice.google.sh/adsid/integrator.", ""]),
        qF = _.P(["https://adservice.google.si/adsid/integrator.", ""]),
        rF = _.P(["https://adservice.google.sk/adsid/integrator.", ""]),
        sF = _.P(["https://adservice.google.sn/adsid/integrator.", ""]),
        tF = _.P(["https://adservice.google.so/adsid/integrator.", ""]),
        uF = _.P(["https://adservice.google.sm/adsid/integrator.", ""]),
        vF = _.P(["https://adservice.google.sr/adsid/integrator.", ""]),
        wF = _.P(["https://adservice.google.st/adsid/integrator.", ""]),
        xF = _.P(["https://adservice.google.com.sv/adsid/integrator.", ""]),
        yF = _.P(["https://adservice.google.td/adsid/integrator.", ""]),
        zF = _.P(["https://adservice.google.tg/adsid/integrator.", ""]),
        AF = _.P(["https://adservice.google.co.th/adsid/integrator.", ""]),
        BF = _.P(["https://adservice.google.com.tj/adsid/integrator.", ""]),
        CF = _.P(["https://adservice.google.tl/adsid/integrator.", ""]),
        DF = _.P(["https://adservice.google.tm/adsid/integrator.", ""]),
        EF = _.P(["https://adservice.google.tn/adsid/integrator.", ""]),
        FF = _.P(["https://adservice.google.to/adsid/integrator.", ""]),
        GF = _.P(["https://adservice.google.com.tr/adsid/integrator.", ""]),
        HF = _.P(["https://adservice.google.tt/adsid/integrator.", ""]),
        IF = _.P(["https://adservice.google.com.tw/adsid/integrator.", ""]),
        JF = _.P(["https://adservice.google.co.tz/adsid/integrator.", ""]),
        KF = _.P(["https://adservice.google.com.ua/adsid/integrator.", ""]),
        LF = _.P(["https://adservice.google.co.ug/adsid/integrator.", ""]),
        MF = _.P(["https://adservice.google.co.uk/adsid/integrator.", ""]),
        NF = _.P(["https://adservice.google.com.uy/adsid/integrator.", ""]),
        OF = _.P(["https://adservice.google.co.uz/adsid/integrator.", ""]),
        PF = _.P(["https://adservice.google.com.vc/adsid/integrator.", ""]),
        QF = _.P(["https://adservice.google.co.ve/adsid/integrator.", ""]),
        RF = _.P(["https://adservice.google.vg/adsid/integrator.", ""]),
        SF = _.P(["https://adservice.google.co.vi/adsid/integrator.", ""]),
        TF = _.P(["https://adservice.google.com.vn/adsid/integrator.", ""]),
        UF = _.P(["https://adservice.google.vu/adsid/integrator.", ""]),
        VF = _.P(["https://adservice.google.ws/adsid/integrator.", ""]),
        WF = _.P(["https://adservice.google.rs/adsid/integrator.", ""]),
        XF = _.P(["https://adservice.google.co.za/adsid/integrator.", ""]),
        YF = _.P(["https://adservice.google.co.zm/adsid/integrator.", ""]),
        ZF = _.P(["https://adservice.google.co.zw/adsid/integrator.", ""]),
        $F = _.P(["https://adservice.google.cat/adsid/integrator.", ""]),
        aG = new _.v.Map([
            [".google.com", function(a) {
                return _.A(jC, a)
            }],
            [".google.ad", function(a) {
                return _.A(kC, a)
            }],
            [".google.ae", function(a) {
                return _.A(lC, a)
            }],
            [".google.com.af", function(a) {
                return _.A(mC, a)
            }],
            [".google.com.ag", function(a) {
                return _.A(nC, a)
            }],
            [".google.com.ai", function(a) {
                return _.A(oC, a)
            }],
            [".google.al", function(a) {
                return _.A(pC, a)
            }],
            [".google.co.ao", function(a) {
                return _.A(qC, a)
            }],
            [".google.com.ar", function(a) {
                return _.A(rC, a)
            }],
            [".google.as", function(a) {
                return _.A(sC, a)
            }],
            [".google.at", function(a) {
                return _.A(tC, a)
            }],
            [".google.com.au", function(a) {
                return _.A(uC, a)
            }],
            [".google.az", function(a) {
                return _.A(vC, a)
            }],
            [".google.com.bd", function(a) {
                return _.A(wC, a)
            }],
            [".google.be", function(a) {
                return _.A(xC, a)
            }],
            [".google.bf", function(a) {
                return _.A(yC, a)
            }],
            [".google.bg", function(a) {
                return _.A(zC, a)
            }],
            [".google.com.bh", function(a) {
                return _.A(AC, a)
            }],
            [".google.bi", function(a) {
                return _.A(BC, a)
            }],
            [".google.bj", function(a) {
                return _.A(CC, a)
            }],
            [".google.com.bn", function(a) {
                return _.A(DC, a)
            }],
            [".google.com.bo", function(a) {
                return _.A(EC, a)
            }],
            [".google.com.br", function(a) {
                return _.A(FC, a)
            }],
            [".google.bs", function(a) {
                return _.A(GC, a)
            }],
            [".google.bt", function(a) {
                return _.A(HC, a)
            }],
            [".google.co.bw", function(a) {
                return _.A(IC, a)
            }],
            [".google.com.bz", function(a) {
                return _.A(YC, a)
            }],
            [".google.ca", function(a) {
                return _.A($C, a)
            }],
            [".google.cd", function(a) {
                return _.A(eD, a)
            }],
            [".google.cf", function(a) {
                return _.A(gD, a)
            }],
            [".google.cg", function(a) {
                return _.A(hD, a)
            }],
            [".google.ch", function(a) {
                return _.A(iD, a)
            }],
            [".google.ci", function(a) {
                return _.A(jD, a)
            }],
            [".google.co.ck", function(a) {
                return _.A(kD, a)
            }],
            [".google.cl", function(a) {
                return _.A(lD, a)
            }],
            [".google.cm", function(a) {
                return _.A(mD, a)
            }],
            [".google.com.co", function(a) {
                return _.A(nD, a)
            }],
            [".google.co.cr", function(a) {
                return _.A(oD, a)
            }],
            [".google.com.cu", function(a) {
                return _.A(pD, a)
            }],
            [".google.cv", function(a) {
                return _.A(qD, a)
            }],
            [".google.com.cy", function(a) {
                return _.A(rD, a)
            }],
            [".google.cz", function(a) {
                return _.A(sD, a)
            }],
            [".google.de", function(a) {
                return _.A(tD, a)
            }],
            [".google.dj", function(a) {
                return _.A(uD, a)
            }],
            [".google.dk", function(a) {
                return _.A(vD, a)
            }],
            [".google.dm", function(a) {
                return _.A(wD, a)
            }],
            [".google.dz", function(a) {
                return _.A(xD, a)
            }],
            [".google.com.ec", function(a) {
                return _.A(yD, a)
            }],
            [".google.ee", function(a) {
                return _.A(zD, a)
            }],
            [".google.com.eg", function(a) {
                return _.A(AD, a)
            }],
            [".google.es", function(a) {
                return _.A(BD, a)
            }],
            [".google.com.et", function(a) {
                return _.A(CD, a)
            }],
            [".google.fi", function(a) {
                return _.A(DD, a)
            }],
            [".google.com.fj", function(a) {
                return _.A(ED, a)
            }],
            [".google.fm", function(a) {
                return _.A(FD, a)
            }],
            [".google.fr", function(a) {
                return _.A(GD, a)
            }],
            [".google.ga", function(a) {
                return _.A(HD, a)
            }],
            [".google.ge", function(a) {
                return _.A(ID, a)
            }],
            [".google.gg", function(a) {
                return _.A(JD, a)
            }],
            [".google.com.gh", function(a) {
                return _.A(KD, a)
            }],
            [".google.com.gi", function(a) {
                return _.A(LD, a)
            }],
            [".google.gl", function(a) {
                return _.A(MD, a)
            }],
            [".google.gm", function(a) {
                return _.A(ND, a)
            }],
            [".google.gr", function(a) {
                return _.A(OD, a)
            }],
            [".google.com.gt", function(a) {
                return _.A(PD, a)
            }],
            [".google.gy", function(a) {
                return _.A(QD, a)
            }],
            [".google.com.hk", function(a) {
                return _.A(RD, a)
            }],
            [".google.hn", function(a) {
                return _.A(SD, a)
            }],
            [".google.hr", function(a) {
                return _.A(TD, a)
            }],
            [".google.ht", function(a) {
                return _.A(UD, a)
            }],
            [".google.hu", function(a) {
                return _.A(VD, a)
            }],
            [".google.co.id", function(a) {
                return _.A(WD, a)
            }],
            [".google.ie", function(a) {
                return _.A(XD, a)
            }],
            [".google.co.il", function(a) {
                return _.A(YD, a)
            }],
            [".google.im", function(a) {
                return _.A(ZD, a)
            }],
            [".google.co.in", function(a) {
                return _.A($D, a)
            }],
            [".google.iq", function(a) {
                return _.A(aE, a)
            }],
            [".google.is", function(a) {
                return _.A(bE, a)
            }],
            [".google.it", function(a) {
                return _.A(cE, a)
            }],
            [".google.je", function(a) {
                return _.A(dE, a)
            }],
            [".google.com.jm", function(a) {
                return _.A(eE, a)
            }],
            [".google.jo", function(a) {
                return _.A(fE, a)
            }],
            [".google.co.jp", function(a) {
                return _.A(gE, a)
            }],
            [".google.co.ke", function(a) {
                return _.A(hE, a)
            }],
            [".google.com.kh", function(a) {
                return _.A(iE, a)
            }],
            [".google.ki", function(a) {
                return _.A(jE, a)
            }],
            [".google.kg", function(a) {
                return _.A(kE, a)
            }],
            [".google.co.kr", function(a) {
                return _.A(lE, a)
            }],
            [".google.com.kw", function(a) {
                return _.A(mE, a)
            }],
            [".google.kz", function(a) {
                return _.A(nE, a)
            }],
            [".google.la", function(a) {
                return _.A(oE, a)
            }],
            [".google.com.lb", function(a) {
                return _.A(pE, a)
            }],
            [".google.li", function(a) {
                return _.A(qE, a)
            }],
            [".google.lk", function(a) {
                return _.A(rE, a)
            }],
            [".google.co.ls", function(a) {
                return _.A(sE, a)
            }],
            [".google.lt", function(a) {
                return _.A(tE, a)
            }],
            [".google.lu", function(a) {
                return _.A(uE, a)
            }],
            [".google.lv", function(a) {
                return _.A(vE, a)
            }],
            [".google.com.ly", function(a) {
                return _.A(wE, a)
            }],
            [".google.md", function(a) {
                return _.A(xE, a)
            }],
            [".google.me", function(a) {
                return _.A(yE, a)
            }],
            [".google.mg", function(a) {
                return _.A(zE, a)
            }],
            [".google.mk", function(a) {
                return _.A(AE, a)
            }],
            [".google.ml", function(a) {
                return _.A(BE, a)
            }],
            [".google.com.mm", function(a) {
                return _.A(CE, a)
            }],
            [".google.mn", function(a) {
                return _.A(DE, a)
            }],
            [".google.ms", function(a) {
                return _.A(EE, a)
            }],
            [".google.com.mt", function(a) {
                return _.A(FE, a)
            }],
            [".google.mu", function(a) {
                return _.A(GE, a)
            }],
            [".google.mv", function(a) {
                return _.A(HE, a)
            }],
            [".google.mw", function(a) {
                return _.A(IE, a)
            }],
            [".google.com.mx", function(a) {
                return _.A(JE, a)
            }],
            [".google.com.my", function(a) {
                return _.A(KE, a)
            }],
            [".google.co.mz", function(a) {
                return _.A(LE, a)
            }],
            [".google.com.na", function(a) {
                return _.A(ME, a)
            }],
            [".google.com.ng", function(a) {
                return _.A(NE, a)
            }],
            [".google.com.ni", function(a) {
                return _.A(OE, a)
            }],
            [".google.ne", function(a) {
                return _.A(PE, a)
            }],
            [".google.nl", function(a) {
                return _.A(QE, a)
            }],
            [".google.no", function(a) {
                return _.A(RE, a)
            }],
            [".google.com.np", function(a) {
                return _.A(SE, a)
            }],
            [".google.nr", function(a) {
                return _.A(TE, a)
            }],
            [".google.nu", function(a) {
                return _.A(UE, a)
            }],
            [".google.co.nz", function(a) {
                return _.A(VE, a)
            }],
            [".google.com.om", function(a) {
                return _.A(WE, a)
            }],
            [".google.com.pa", function(a) {
                return _.A(XE, a)
            }],
            [".google.com.pe", function(a) {
                return _.A(YE, a)
            }],
            [".google.com.pg", function(a) {
                return _.A(ZE, a)
            }],
            [".google.com.ph", function(a) {
                return _.A($E, a)
            }],
            [".google.com.pk", function(a) {
                return _.A(aF, a)
            }],
            [".google.pl", function(a) {
                return _.A(bF, a)
            }],
            [".google.pn", function(a) {
                return _.A(cF, a)
            }],
            [".google.com.pr", function(a) {
                return _.A(dF, a)
            }],
            [".google.ps", function(a) {
                return _.A(eF, a)
            }],
            [".google.pt", function(a) {
                return _.A(fF, a)
            }],
            [".google.com.py", function(a) {
                return _.A(gF, a)
            }],
            [".google.com.qa", function(a) {
                return _.A(hF, a)
            }],
            [".google.ro", function(a) {
                return _.A(iF, a)
            }],
            [".google.rw", function(a) {
                return _.A(jF, a)
            }],
            [".google.com.sa", function(a) {
                return _.A(kF, a)
            }],
            [".google.com.sb", function(a) {
                return _.A(lF, a)
            }],
            [".google.sc", function(a) {
                return _.A(mF, a)
            }],
            [".google.se", function(a) {
                return _.A(nF, a)
            }],
            [".google.com.sg", function(a) {
                return _.A(oF, a)
            }],
            [".google.sh", function(a) {
                return _.A(pF, a)
            }],
            [".google.si", function(a) {
                return _.A(qF, a)
            }],
            [".google.sk", function(a) {
                return _.A(rF, a)
            }],
            [".google.sn", function(a) {
                return _.A(sF, a)
            }],
            [".google.so", function(a) {
                return _.A(tF, a)
            }],
            [".google.sm", function(a) {
                return _.A(uF, a)
            }],
            [".google.sr", function(a) {
                return _.A(vF, a)
            }],
            [".google.st", function(a) {
                return _.A(wF, a)
            }],
            [".google.com.sv", function(a) {
                return _.A(xF, a)
            }],
            [".google.td", function(a) {
                return _.A(yF, a)
            }],
            [".google.tg", function(a) {
                return _.A(zF, a)
            }],
            [".google.co.th", function(a) {
                return _.A(AF, a)
            }],
            [".google.com.tj", function(a) {
                return _.A(BF, a)
            }],
            [".google.tl", function(a) {
                return _.A(CF, a)
            }],
            [".google.tm", function(a) {
                return _.A(DF, a)
            }],
            [".google.tn", function(a) {
                return _.A(EF, a)
            }],
            [".google.to", function(a) {
                return _.A(FF, a)
            }],
            [".google.com.tr", function(a) {
                return _.A(GF, a)
            }],
            [".google.tt", function(a) {
                return _.A(HF, a)
            }],
            [".google.com.tw", function(a) {
                return _.A(IF, a)
            }],
            [".google.co.tz", function(a) {
                return _.A(JF, a)
            }],
            [".google.com.ua", function(a) {
                return _.A(KF, a)
            }],
            [".google.co.ug", function(a) {
                return _.A(LF, a)
            }],
            [".google.co.uk", function(a) {
                return _.A(MF, a)
            }],
            [".google.com.uy", function(a) {
                return _.A(NF, a)
            }],
            [".google.co.uz", function(a) {
                return _.A(OF, a)
            }],
            [".google.com.vc", function(a) {
                return _.A(PF, a)
            }],
            [".google.co.ve", function(a) {
                return _.A(QF, a)
            }],
            [".google.vg", function(a) {
                return _.A(RF, a)
            }],
            [".google.co.vi", function(a) {
                return _.A(SF, a)
            }],
            [".google.com.vn", function(a) {
                return _.A(TF, a)
            }],
            [".google.vu", function(a) {
                return _.A(UF, a)
            }],
            [".google.ws", function(a) {
                return _.A(VF, a)
            }],
            [".google.rs", function(a) {
                return _.A(WF, a)
            }],
            [".google.co.za", function(a) {
                return _.A(XF, a)
            }],
            [".google.co.zm", function(a) {
                return _.A(YF, a)
            }],
            [".google.co.zw", function(a) {
                return _.A(ZF, a)
            }],
            [".google.cat", function(a) {
                return _.A($F, a)
            }]
        ].map(function(a) {
            var b = _.w(a);
            a = b.next().value;
            b = b.next().value;
            var c = {};
            return [a, (c.json = b("json"), c.js = b("js"), c["sync.js"] = b("sync.js"), c)]
        }));
    var bG = function(a, b, c) {
        var d = _.Ce("LINK", a);
        try {
            if (d.rel = "preload", Ma("preload", "stylesheet")) {
                d.href = _.lb(b).toString();
                var e = Rw('style[nonce],link[rel="stylesheet"][nonce]', d.ownerDocument && d.ownerDocument.defaultView);
                e && d.setAttribute("nonce", e)
            } else d.href = b instanceof _.Rs ? _.lb(b).toString() : b instanceof _.cb ? _.db(b) : _.db(qt(b))
        } catch (f) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (f) {}
    };
    var Xg = /^data-(?!xml)[_a-z][_a-z.0-9-]*$/;
    var bh = _.q,
        cG = function(a) {
            var b = new _.v.Map([
                ["domain", _.q.location.hostname]
            ]);
            ch[3] >= lf() && b.set("adsid", ch[1]);
            return ve(aG.get(a).js, b)
        },
        ch, dG, ah = function() {
            bh = _.q;
            ch = bh.googleToken = bh.googleToken || {};
            var a = lf();
            ch[1] && ch[3] > a && 0 < ch[2] || (ch[1] = "", ch[2] = -1, ch[3] = -1, ch[4] = "", ch[6] = "");
            dG = bh.googleIMState = bh.googleIMState || {};
            aG.has(dG[1]) || (dG[1] = ".google.com");
            Array.isArray(dG[5]) || (dG[5] = []);
            "boolean" !== typeof dG[6] && (dG[6] = !1);
            Array.isArray(dG[7]) || (dG[7] = []);
            "number" !== typeof dG[8] && (dG[8] = 0)
        },
        eG = function(a) {
            ah();
            aG.has(a) && (dG[1] = a)
        },
        dh = {
            pe: function() {
                return 0 < dG[8]
            },
            bi: function() {
                dG[8]++
            },
            ci: function() {
                0 < dG[8] && dG[8]--
            },
            di: function() {
                dG[8] = 0
            },
            Wj: function() {
                return !1
            },
            vd: function() {
                return dG[5]
            },
            bf: function(a) {
                try {
                    a()
                } catch (b) {
                    _.q.setTimeout(function() {
                        throw b;
                    }, 0)
                }
            },
            Tf: function() {
                if (!dh.pe()) {
                    var a = _.q.document,
                        b = function(e) {
                            e = cG(e);
                            a: {
                                try {
                                    var f = Rw("script[nonce]");
                                    break a
                                } catch (g) {}
                                f = void 0
                            }
                            bG(a, e.toString(), f);
                            f = _.Ce("SCRIPT", a);
                            f.type = "text/javascript";
                            f.onerror = function() {
                                return _.q.processGoogleToken({}, 2)
                            };
                            mb(f, e);
                            try {
                                (a.head || a.body || a.documentElement).appendChild(f), dh.bi()
                            } catch (g) {}
                        },
                        c = dG[1];
                    b(c);
                    ".google.com" != c && b(".google.com");
                    b = {};
                    var d = (b.newToken = "FBT", b);
                    _.q.setTimeout(function() {
                        return _.q.processGoogleToken(d, 1)
                    }, 1E3)
                }
            }
        },
        fG = function(a) {
            _.q.processGoogleToken = _.q.processGoogleToken || function(b, c) {
                var d = b;
                d = void 0 === d ? {} : d;
                c = void 0 === c ? 0 : c;
                b = d.newToken || "";
                var e = "NT" == b,
                    f = parseInt(d.freshLifetimeSecs || "", 10),
                    g = parseInt(d.validLifetimeSecs || "", 10),
                    h = d["1p_jar"] || "";
                d = d.pucrd || "";
                ah();
                1 == c ? dh.di() : dh.ci();
                var k = bh.googleToken = bh.googleToken || {},
                    l = 0 == c && b && "string" === typeof b && !e && "number" === typeof f && 0 < f && "number" === typeof g && 0 < g && "string" === typeof h;
                e = e && !dh.pe() && (!(ch[3] >= lf()) || "NT" == ch[1]);
                var n = !(ch[3] >= lf()) && 0 != c;
                if (l || e || n) e = lf(), f = e + 1E3 * f, g = e + 1E3 * g, 1E-5 > Math.random() && Zz(_.q, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=" + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, ah();
                if (l || !dh.pe()) {
                    c = dh.vd();
                    for (b = 0; b < c.length; b++) dh.bf(c[b]);
                    c.length = 0
                }
            };
            eh(a)
        };
    var gG = function(a, b, c, d, e, f) {
        _.T.call(this);
        this.bb = a;
        this.status = 1;
        this.C = b;
        this.m = c;
        this.F = d;
        this.Hc = !!e;
        this.l = Math.random();
        this.I = {};
        this.j = null;
        this.M = (0, _.xs)(this.R, this);
        this.A = f
    };
    _.O(gG, _.T);
    gG.prototype.R = function(a) {
        if (!("*" !== this.m && a.origin !== this.m || !this.Hc && a.source != this.C)) {
            var b = null;
            try {
                b = JSON.parse(a.data)
            } catch (c) {}
            if (_.na(b) && (a = b.i, b.c === this.bb && a != this.l)) {
                if (2 !== this.status) try {
                    this.status = 2, hG(this), this.j && (this.j(), this.j = null)
                } catch (c) {}
                a = b.s;
                b = b.p;
                if ("string" === typeof a && ("string" === typeof b || _.na(b)) && this.I.hasOwnProperty(a)) this.I[a](b)
            }
        }
    };
    var hG = function(a) {
        var b = {};
        b.c = a.bb;
        b.i = a.l;
        a.A && (b.e = a.A);
        a.C.postMessage(JSON.stringify(b), a.m)
    };
    gG.prototype.D = function() {
        if (1 === this.status) {
            try {
                this.C.postMessage && hG(this)
            } catch (a) {}
            window.setTimeout((0, _.xs)(this.D, this), 50)
        }
    };
    gG.prototype.connect = function(a) {
        a && (this.j = a);
        _.yb(window, "message", this.M);
        this.F && this.D()
    };
    var iG = function(a, b, c) {
            a.I[b] = c
        },
        jG = function(a, b, c) {
            var d = {};
            d.c = a.bb;
            d.i = a.l;
            d.s = b;
            d.p = c;
            try {
                a.C.postMessage(JSON.stringify(d), a.m)
            } catch (e) {}
        };
    gG.prototype.o = function() {
        this.status = 3;
        _.De(window, "message", this.M);
        _.T.prototype.o.call(this)
    };
    var kG = new _.v.Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        lG = new _.v.Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);
    var mG = function(a) {
        _.Q.call(this, a)
    };
    _.O(mG, _.Q);
    var uq = ke(mG);
    var nG = function(a) {
        _.Q.call(this, a)
    };
    _.O(nG, _.Q);
    var oG = function(a) {
        _.Q.call(this, a)
    };
    _.O(oG, _.Q);
    var pG = function(a) {
            return a.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
        },
        qG = function(a) {
            var b;
            a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
            return b
        },
        rG = function(a) {
            return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
        },
        sG = function(a, b) {
            if (3 == pG(b)) return !1;
            a();
            return !0
        },
        tG = function(a, b) {
            if (!sG(a, b)) {
                var c = !1,
                    d = qG(b),
                    e = function() {
                        !c && sG(a, b) && (c = !0, _.De(b, d, e))
                    };
                d && _.yb(b, d, e)
            }
        };
    var hq = function(a, b) {
            this.j = a;
            this.m = b;
            this.o = {}
        },
        iq = function(a) {
            cq() && (document.addEventListener("touchstart", function(b) {
                a.j(902, function() {
                    a.o[b.touches[0].identifier] = Date.now()
                })()
            }, Js), document.addEventListener("touchend", function(b) {
                a.j(902, function() {
                    var c = b.changedTouches[0],
                        d = c.clientX,
                        e = c.clientY,
                        f = c.force;
                    c = a.o[c.identifier];
                    if (void 0 !== c) try {
                        var g = cq(),
                            h = {
                                x: d,
                                y: e,
                                duration_ms: Date.now() - c
                            };
                        if (null == g ? 0 : g.gmaSdk) g.gmaSdk.reportTouchEvent(JSON.stringify(_.t(Object, "assign").call(Object, {}, h, {
                            type: 1,
                            force: f
                        })));
                        else {
                            var k, l, n;
                            null == g || null == (k = g.webkit) || null == (l = k.messageHandlers) || null == (n = l.reportGmaTouchEvent) || n.postMessage(h)
                        }
                    } catch (m) {
                        a.m("paw_sigs", {
                            msg: "reportTouchError",
                            err: m instanceof Error ? m.message : "nonError"
                        })
                    }
                })()
            }, Js))
        },
        dq = function(a, b, c, d, e) {
            var f = 200,
                g = Wp;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? function() {} : c;
            d = void 0 === d ? function() {} : d;
            f = void 0 === f ? 200 : f;
            var h = String(Math.floor(2147483647 * _.Ye())),
                k = 0,
                l = function(n) {
                    try {
                        var m = "object" === typeof n.data ? n.data : JSON.parse(n.data);
                        h === m.paw_id && (window.clearTimeout(k), window.removeEventListener("message", l), m.signal ? c(m.signal) : m.error && d(m.error))
                    } catch (p) {
                        g("paw_sigs", {
                            msg: "postmessageError",
                            err: p instanceof Error ? p.message : "nonError",
                            data: null == n.data ? "null" : 500 < n.data.length ? n.data.substring(0, 500) : n.data
                        })
                    }
                };
            window.addEventListener("message", function(n) {
                e(903, function() {
                    l(n)
                })()
            });
            a.postMessage(_.t(Object, "assign").call(Object, {}, {
                paw_id: h
            }, b));
            k = window.setTimeout(function() {
                window.removeEventListener("message", l);
                d("PAW GMA postmessage timed out.")
            }, f)
        },
        cq = function() {
            var a = window,
                b, c;
            if (a.gmaSdk || (null == (b = a.webkit) ? 0 : null == (c = b.messageHandlers) ? 0 : c.getGmaViewSignals)) return a;
            try {
                var d = window.parent,
                    e, f;
                if (d.gmaSdk || (null == (e = d.webkit) ? 0 : null == (f = e.messageHandlers) ? 0 : f.getGmaViewSignals)) return d
            } catch (g) {}
            return null
        };
    var vG = function(a) {
        _.Q.call(this, a, -1, uG)
    };
    _.O(vG, _.Q);
    var uG = [1];
    var wG = function(a) {
        _.Q.call(this, a)
    };
    _.O(wG, _.Q);
    var xG = function(a, b) {
        return _.fd(a, 1, b, 0)
    };
    var yG = function(a) {
        _.Q.call(this, a)
    };
    _.O(yG, _.Q);
    var AG = function(a) {
        _.Q.call(this, a, -1, zG)
    };
    _.O(AG, _.Q);
    var zG = [1],
        BG = [AG, 1, Su, Kv];
    var DG = function(a) {
        _.Q.call(this, a, -1, CG)
    };
    _.O(DG, _.Q);
    var CG = [1, 2];
    DG.prototype.m = je([DG, 1, Su, Kv, 2, Su, BG]);
    var FG, EG;
    FG = function() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new EG;
        this.sideRailProcessedFixedElements = new _.v.Set;
        this.sideRailAvailableSpace = new _.v.Map;
        this.sideRailPlasParam = new _.v.Map
    };
    _.Im = function(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new _.v.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new _.v.Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new _.v.Map)) : a.google_reactive_ads_global_state = new FG;
        return a.google_reactive_ads_global_state
    };
    EG = function() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };
    var KG, HG;
    _.GG = function(a) {
        this.j = _.Im(a).floatingAdsStacking
    };
    _.IG = function(a, b) {
        return new HG(a, b)
    };
    _.JG = function(a) {
        a = _.ox(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    };
    KG = function(a) {
        var b = _.JG(a);
        _.Ks(a.j.maxZIndexListeners, function(c) {
            return c(b)
        })
    };
    HG = function(a, b) {
        this.o = a;
        this.m = b;
        this.j = null
    };
    _.LG = function(a) {
        if (null == a.j) {
            var b = a.o,
                c = a.m,
                d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            KG(b);
            a.j = d
        }
    };
    _.MG = function(a) {
        if (null != a.j) {
            var b = a.o;
            delete b.j.maxZIndexRestrictions[a.j];
            KG(b);
            a.j = null
        }
    };
    var oh, ph;
    _.Jm = 728 * 1.38;
    _.nh = function(a) {
        return a.innerHeight >= a.innerWidth
    };
    _.NG = function(a) {
        var b = _.zm(a).clientWidth;
        a = a.innerWidth;
        return b && a ? b / a : 0
    };
    oh = function(a, b) {
        return (a = _.zm(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384
    };
    ph = function(a) {
        return (a = _.NG(a)) ? 1.05 < a ? 262144 : .95 > a ? 524288 : 0 : 131072
    };
    _.zm = function(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    };
    _.OG = function(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    };
    var rh = 90 * 1.38;
    var PG;
    _.QG = function(a, b) {
        if (!a.body) return null;
        var c = new PG;
        c.apply(a, b);
        return function() {
            _.Rx(a.body, {
                filter: c.j,
                webkitFilter: c.j,
                overflow: c.m,
                position: c.H,
                top: c.C
            });
            b.scrollTo(0, c.o)
        }
    };
    PG = function() {
        this.j = this.C = this.H = this.m = null;
        this.o = 0
    };
    PG.prototype.apply = function(a, b) {
        this.m = a.body.style.overflow;
        this.H = a.body.style.position;
        this.C = a.body.style.top;
        this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
        this.o = _.OG(b);
        _.Rx(a.body, "top", -this.o + "px")
    };
    _.Bm = function(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                var d = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var e = "__storage_test__" === d
            } catch (f) {
                e = !1
            }
            c = !e
        }
        return c ? null : Dh(a, b)
    };
    _.Am = function(a) {
        return !!a && 1 > a.length
    };
    var RG = {},
        Hh = (RG[23] = .001, RG[253] = !1, RG[246] = [], RG[150] = "", RG[221] = /^true$/.test("false"), RG[36] = /^true$/.test("false"), RG[172] = null, RG[260] = void 0, RG[251] = null, RG),
        Gh = function() {
            this.j = !1
        };
    var Qk = function(a) {
            var b = void 0 === b ? wf(_.q) : b;
            this.id = a;
            this.o = Math.random() < (_.C(Ly) ? .001 : _.Ih(23));
            this.j = {
                pvsid: String(b)
            }
        },
        SG = function(a) {
            a = Fh(a);
            var b;
            ci.set(a, (null != (b = ci.get(a)) ? b : 0) + 1)
        },
        bi = function() {
            return [].concat(_.xe(_.t(ci, "values").call(ci))).reduce(function(a, b) {
                return a + b
            }, 0)
        },
        J = function(a, b, c) {
            "string" !== typeof c && (c = String(c));
            /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b])
        },
        Sk = function(a) {
            var b = 1;
            b = void 0 === b ? null : b;
            if (TG()) b = !0;
            else {
                var c = a.o;
                b && 0 <= b && (c = Math.random() < b);
                b = c && !!a.id
            }
            b && Zz(window, UG(a) || "", void 0, _.C(Qy))
        },
        UG = function(a) {
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + encodeURIComponent(a.id);
            _.vl(a.j, function(c, d) {
                c && (b += "&" + d + "=" + encodeURIComponent(c))
            });
            return b
        },
        VG = function(a) {
            var b = [].concat(_.xe(_.t(ci, "keys").call(ci)));
            b = b.map(function(c) {
                return c.replace(/,/g, "\\,")
            });
            3 >= b.length ? J(a, "nw_id", b.join()) : (b = b.slice(0, 3), b.push("__extra__"), J(a, "nw_id", b.join()))
        },
        vj = function(a, b) {
            J(a, "vrg", String(b.Lb || b.Wa));
            VG(a);
            J(a, "nslots", bi().toString());
            b = _.rf(sf).j();
            b.length && J(a, "eid", b.join());
            J(a, "pub_url", document.URL)
        },
        oj = function(a, b, c) {
            c = void 0 === c ? _.C(Ly) ? .001 : _.Ih(23) : c;
            if (void 0 === c || 0 > c || 1 < c) c = _.C(Ly) ? .001 : _.Ih(23);
            Math.random() < c && (a = new Qk(a), b(a), Sk(a))
        },
        ci = new _.v.Map,
        TG = Zi(function() {
            return !!sx(_.q.location.href)
        });
    var Th = function() {
        iB.call(this, _.C(Uh) || _.C(yz) ? 1 : 0, _.q);
        this.m = 0;
        var a = _.C(Uh) || _.C(yz);
        _.q.google_measure_js_timing = a || _.q.google_measure_js_timing
    };
    _.O(Th, iB);
    _.WG = function(a) {
        this.context = a
    };
    _.WG.prototype.Nb = function(a, b) {
        return Xh(this.context, a, b)
    };
    _.WG.prototype.qa = function(a, b) {
        return Rh(this.context, a, b)
    };
    _.WG.prototype.Yb = function(a, b) {
        Vh(this.context, a, b);
        return !1
    };
    _.WG.prototype.Mc = ca(0);
    var XG = {},
        YG = (XG.companion_ads = "companionAds", XG.content = "content", XG.publisher_ads = "pubads", XG);
    var ei = function(a) {
        _.Q.call(this, a)
    };
    _.O(ei, _.Q);
    ei.prototype.getWidth = function() {
        return tq(this, 1)
    };
    var ji = function(a, b) {
        return _.z(a, 1, b)
    };
    ei.prototype.getHeight = function() {
        return tq(this, 2)
    };
    var ii = function(a, b) {
            return _.z(a, 2, b)
        },
        Pl = function() {
            var a = new ei;
            return _.z(a, 3, !0)
        };
    var Qq = function(a) {
        _.Q.call(this, a)
    };
    _.O(Qq, _.Q);
    var ZG = function(a, b) {
        return _.z(a, 3, _.Cc(b))
    };
    var dl = function(a) {
        _.Q.call(this, a, -1, $G)
    };
    _.O(dl, _.Q);
    var cl = function(a, b) {
            return _.z(a, 1, b)
        },
        bl = function(a, b) {
            return _.ed(a, 2, b, _.Hc)
        },
        aH = function(a, b) {
            return Fu(a, 2, b)
        },
        $G = [2];
    var bp = function(a) {
        _.Q.call(this, a, -1, bH)
    };
    _.O(bp, _.Q);
    var hp = function(a, b) {
            return _.z(a, 1, b)
        },
        fp = function(a, b) {
            return _.ed(a, 2, b, _.Hc)
        },
        bH = [2];
    var Gp = function(a) {
        _.Q.call(this, a, -1, cH)
    };
    _.O(Gp, _.Q);
    var gp = function(a, b) {
            _.Pf(a, 1, bp, b)
        },
        cH = [1];
    var Ep = function(a) {
        _.Q.call(this, a, -1, dH)
    };
    _.O(Ep, _.Q);
    var dH = [2, 3];
    var Cp = function(a) {
        _.Q.call(this, a)
    };
    _.O(Cp, _.Q);
    var eH = function(a) {
        _.Q.call(this, a)
    };
    _.O(eH, _.Q);
    eH.prototype.setTagForChildDirectedTreatment = function(a) {
        return _.z(this, 5, a)
    };
    eH.prototype.clearTagForChildDirectedTreatment = function() {
        return $f(this, 5)
    };
    eH.prototype.setTagForUnderAgeOfConsent = function(a) {
        return _.z(this, 6, a)
    };
    var ul = function(a) {
        _.Q.call(this, a)
    };
    _.O(ul, _.Q);
    var gH = function(a) {
        _.Q.call(this, a, -1, fH)
    };
    _.O(gH, _.Q);
    gH.prototype.getCategoryExclusions = function(a) {
        return Eu(this, 3, a)
    };
    gH.prototype.wa = function() {
        return Te(this, dl, 14)
    };
    gH.prototype.kb = function() {
        return dg(this, ul, 18)
    };
    var jn = function(a) {
        return dg(a, eH, 25)
    };
    gH.prototype.getCorrelator = function() {
        return od(y(this, 26), 0)
    };
    gH.prototype.setCorrelator = function(a) {
        return _.z(this, 26, a)
    };
    gH.prototype.xd = function() {
        return Dp(this, Cp, 33)
    };
    var fH = [2, 3, 14];
    var Ti = function() {
        this.j = new _.v.Map
    };
    var hH = function() {
            this.o = {};
            this.j = new gH;
            this.m = new _.v.Map;
            this.j.setCorrelator(Hx());
            _.Ih(36) && _.z(this.j, 15, !0)
        },
        iH = function(a) {
            var b = hj(),
                c = a.getDomId();
            if (c && !b.o.hasOwnProperty(c)) {
                var d = _.rf(Ti),
                    e = ++_.rf(Th).m;
                d.j.set(c, e);
                _.z(a, 20, e);
                b.o[c] = a
            }
        },
        Zn = function(a, b) {
            return a.o[b]
        },
        hj = function() {
            return _.rf(hH)
        };
    var jH = Zi(Wi);
    var Ej = ["auto", "inherit", "100%"],
        Fj = Ej.concat(["none"]);
    var rm = function(a, b, c) {
        if (!a) return !0;
        var d = !0;
        Cj(a, function(e) {
            return d = Dj(e, b, 10, 10)
        }, c);
        return d
    };
    var kH = function(a, b, c, d, e, f) {
            this.m = _.Lx(a);
            this.o = _.Lx(b);
            this.H = c;
            this.j = _.Lx(d);
            this.C = e;
            this.l = f
        },
        lH = function(a) {
            return JSON.stringify({
                windowCoords_t: a.m.top,
                windowCoords_r: a.m.right,
                windowCoords_b: a.m.bottom,
                windowCoords_l: a.m.left,
                frameCoords_t: a.o.top,
                frameCoords_r: a.o.right,
                frameCoords_b: a.o.bottom,
                frameCoords_l: a.o.left,
                styleZIndex: a.H,
                allowedExpansion_t: a.j.top,
                allowedExpansion_r: a.j.right,
                allowedExpansion_b: a.j.bottom,
                allowedExpansion_l: a.j.left,
                xInView: a.C,
                yInView: a.l
            })
        },
        mH = function(a) {
            var b = window,
                c = b.screenX || b.screenLeft || 0,
                d = b.screenY || b.screenTop || 0;
            b = new _.Kx(d, c + (b.outerWidth || document.documentElement.clientWidth || 0), d + (b.outerHeight || document.documentElement.clientHeight || 0), c);
            c = Vx(a);
            d = _.xh(_.yh, a);
            var e = new Mx(c.x, c.y, d.width, d.height);
            c = Nx(e);
            d = String(wh(a, "zIndex"));
            var f = new _.Kx(0, Infinity, Infinity, 0);
            for (var g = Zw(a), h = g.j.body, k = g.j.documentElement, l = dx(g.j); a = Ux(a);)
                if (!(_.Pt && 0 == a.clientWidth || St && 0 == a.clientHeight && a == h) && a != h && a != k && "visible" != wh(a, "overflow")) {
                    var n = Vx(a),
                        m = new _.Oi(a.clientLeft, a.clientTop);
                    n.x += m.x;
                    n.y += m.y;
                    f.top = Math.max(f.top, n.y);
                    f.right = Math.min(f.right, n.x + a.clientWidth);
                    f.bottom = Math.min(f.bottom, n.y + a.clientHeight);
                    f.left = Math.max(f.left, n.x)
                }
            a = l.scrollLeft;
            l = l.scrollTop;
            f.left = Math.max(f.left, a);
            f.top = Math.max(f.top, l);
            g = g.j;
            g = _.cx(g.parentWindow || g.defaultView || window);
            f.right = Math.min(f.right, a + g.width);
            f.bottom = Math.min(f.bottom, l + g.height);
            l = (f = (f = 0 <= f.top && 0 <= f.left && f.bottom > f.top && f.right > f.left ? f : null) ? new Mx(f.left, f.top, f.right - f.left, f.bottom - f.top) : null) ? Ox(e, f) : null;
            g = a = 0;
            l && !(new _.Ri(l.width, l.height)).isEmpty() && (a = l.width / e.width, g = l.height / e.height);
            l = new _.Kx(0, 0, 0, 0);
            if (h = f)(e = Ox(e, f)) ? (k = Nx(f), n = Nx(e), h = n.right != k.left && k.right != n.left, k = n.bottom != k.top && k.bottom != n.top, h = (0 != e.width || h) && (0 != e.height || k)) : h = !1;
            h && (l = new _.Kx(Math.max(c.top - f.top, 0), Math.max(f.left + f.width - c.right, 0), Math.max(f.top + f.height - c.bottom, 0), Math.max(c.left - f.left, 0)));
            return new kH(b, c, d, l, a, g)
        };
    var nH = function(a) {
        this.H = a;
        this.C = null;
        this.ha = this.status = 0;
        this.o = null;
        this.bb = "sfchannel" + a
    };
    var oH = function(a) {
        this.j = a
    };
    var pH = function(a, b) {
        this.pd = a;
        this.qd = b;
        this.o = this.j = !1
    };
    var qH = function(a, b, c, d, e, f, g, h) {
        h = void 0 === h ? [] : h;
        this.o = a;
        this.m = b;
        this.H = c;
        this.permissions = d;
        this.metadata = e;
        this.C = f;
        this.Hc = g;
        this.hostpageLibraryTokens = h;
        this.j = ""
    };
    var rH = function(a, b) {
        this.o = a;
        this.H = b
    };
    rH.prototype.j = function(a) {
        this.H && a && (a.sentinel = this.H);
        return JSON.stringify(a)
    };
    var sH = function(a, b, c) {
        rH.call(this, a, void 0 === c ? "" : c);
        this.version = b
    };
    _.O(sH, rH);
    sH.prototype.j = function() {
        return rH.prototype.j.call(this, {
            uid: this.o,
            version: this.version
        })
    };
    var tH = function(a, b, c, d) {
        rH.call(this, a, void 0 === d ? "" : d);
        this.C = b;
        this.m = c
    };
    _.O(tH, rH);
    tH.prototype.j = function() {
        return rH.prototype.j.call(this, {
            uid: this.o,
            initialWidth: this.C,
            initialHeight: this.m
        })
    };
    var uH = function(a, b, c) {
        rH.call(this, a, void 0 === c ? "" : c);
        this.description = b
    };
    _.O(uH, rH);
    uH.prototype.j = function() {
        return rH.prototype.j.call(this, {
            uid: this.o,
            description: this.description
        })
    };
    var vH = function(a, b, c, d) {
        rH.call(this, a, void 0 === d ? "" : d);
        this.m = b;
        this.push = c
    };
    _.O(vH, rH);
    vH.prototype.j = function() {
        return rH.prototype.j.call(this, {
            uid: this.o,
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        })
    };
    var wH = function(a, b) {
        rH.call(this, a, void 0 === b ? "" : b)
    };
    _.O(wH, rH);
    wH.prototype.j = function() {
        return rH.prototype.j.call(this, {
            uid: this.o
        })
    };
    var xH = function(a, b, c) {
        rH.call(this, a, void 0 === c ? "" : c);
        this.C = b
    };
    _.O(xH, rH);
    xH.prototype.j = function() {
        var a = {
            uid: this.o,
            newGeometry: lH(this.C)
        };
        return rH.prototype.j.call(this, a)
    };
    var yH = function(a, b, c, d, e, f) {
        xH.call(this, a, c, void 0 === f ? "" : f);
        this.success = b;
        this.m = d;
        this.push = e
    };
    _.O(yH, xH);
    yH.prototype.j = function() {
        var a = {
            uid: this.o,
            success: this.success,
            newGeometry: lH(this.C),
            expand_t: this.m.top,
            expand_r: this.m.right,
            expand_b: this.m.bottom,
            expand_l: this.m.left,
            push: this.push
        };
        this.H && (a.sentinel = this.H);
        return JSON.stringify(a)
    };
    var zH = function(a, b, c, d) {
        rH.call(this, a, void 0 === d ? "" : d);
        this.width = b;
        this.height = c
    };
    _.O(zH, rH);
    zH.prototype.j = function() {
        return rH.prototype.j.call(this, {
            uid: this.o,
            width: this.width,
            height: this.height
        })
    };
    var AH = function(a) {
        var b;
        if (null == (b = a.location) ? 0 : b.ancestorOrigins) return a.location.ancestorOrigins.length;
        var c = 0;
        pe(function() {
            c++;
            return !1
        }, !0, !0, a);
        return c
    };
    var BH = function() {
            this.j = []
        },
        DH = function(a, b, c, d, e) {
            a.j.push(new CH(b, c, d, e))
        },
        EH = function(a) {
            for (var b = a.j.length - 1; 0 <= b; b--) {
                var c = a.j[b];
                c.o ? (c.m.style.removeProperty(c.j), c.m.style.setProperty(c.j, String(c.H), c.C)) : c.m.style[c.j] = c.H
            }
            a.j.length = 0
        },
        CH = function(a, b, c, d) {
            this.m = a;
            this.j = (this.o = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, "-$1").toLowerCase() : b;
            this.H = this.o ? a.style.getPropertyValue(this.j) : a.style[this.j];
            this.C = this.o ? a.style.getPropertyPriority(this.j) : void 0;
            this.o ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c)
        };
    var FH = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        GH = function() {
            var a = window,
                b = _.nf(a);
            b && FH({
                label: "2",
                type: 9,
                value: b
            }, a)
        },
        HH = function(a, b, c) {
            var d = void 0 === d ? !1 : d;
            var e = window,
                f = "undefined" !== typeof queueMicrotask;
            return function() {
                d && f && queueMicrotask(function() {
                    e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1;
                    e.google_rum_task_id_counter += 1
                });
                var g = _.nf(),
                    h = 3;
                try {
                    var k = b.apply(this, arguments)
                } catch (l) {
                    h = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    e.google_measure_js_timing && g && FH(_.t(Object, "assign").call(Object, {}, {
                        label: a.toString(),
                        value: g,
                        duration: (_.nf() || 0) - g,
                        type: h
                    }, d && f && {
                        taskId: e.google_rum_task_id_counter = e.google_rum_task_id_counter || 1
                    }), e)
                }
                return k
            }
        };
    var MH = function(a) {
        nH.call(this, a.uniqueId);
        var b = this;
        this.I = a.Oj;
        this.M = 1 === a.size;
        this.P = new pH(a.permissions.pd && !this.M, a.permissions.qd && !this.M);
        this.l = a.Ge;
        var c;
        this.ka = null != (c = a.hostpageLibraryTokens) ? c : [];
        var d = window.location;
        c = d.protocol;
        d = d.host;
        this.ga = "file:" == c ? "*" : c + "//" + d;
        this.pa = !!a.Hc;
        this.K = a.Yf ? "//" + a.Yf + ".safeframe.googlesyndication.com" : "//tpc.googlesyndication.com";
        this.ca = a.yd ? "*" : "https:" + this.K;
        this.X = !!a.Sg;
        this.oa = IH(a);
        this.m = new BH;
        JH(this, a.Ge, a.size);
        this.C = this.na = mH(a.Ge);
        this.F = a.ji || "1-0-40";
        var e;
        this.ba = null != (e = a.Dg) ? e : "";
        KH(this, a);
        this.D = HH(412, function() {
            return LH(b)
        }, a.Ua);
        this.R = -1;
        this.A = 0;
        var f = HH(415, function() {
            b.j && (b.j.name = "", a.Mf && a.Mf(), _.De(b.j, "load", f))
        }, a.Ua);
        _.yb(this.j, "load", f);
        this.se = HH(413, this.se, a.Ua);
        this.Je = HH(417, this.Je, a.Ua);
        this.Le = HH(419, this.Le, a.Ua);
        this.me = HH(411, this.me, a.Ua);
        this.Xd = HH(409, this.Xd, a.Ua);
        this.N = HH(410, this.N, a.Ua);
        this.Be = HH(416, this.Be, a.Ua);
        this.o = new gG(this.bb, this.j.contentWindow, this.ca, !1);
        iG(this.o, "init_done", (0, _.xs)(this.se, this));
        iG(this.o, "register_done", (0, _.xs)(this.Je, this));
        iG(this.o, "report_error", (0, _.xs)(this.Le, this));
        iG(this.o, "expand_request", (0, _.xs)(this.me, this));
        iG(this.o, "collapse_request", (0, _.xs)(this.Xd, this));
        iG(this.o, "creative_geometry_update", (0, _.xs)(this.N, this));
        this.o.connect((0, _.xs)(this.Be, this))
    };
    _.O(MH, nH);
    var JH = function(a, b, c) {
            a.M ? (b.style.width = _.Xx("100%", !0), b.style.height = _.Xx("auto", !0)) : (b.style.width = _.Xx(c.width, !0), b.style.height = _.Xx(c.height, !0))
        },
        KH = function(a, b) {
            var c = b.yd,
                d = b.content,
                e = b.Fc,
                f = b.size,
                g = void 0 === b.Gc ? "3rd party ad content" : b.Gc,
                h = b.td;
            b = b.Sd;
            var k = {
                shared: {
                    sf_ver: a.F,
                    ck_on: UA() ? 1 : 0,
                    flash_ver: "0"
                }
            };
            d = c ? "" : null != d ? d : "";
            d = a.F + ";" + d.length + ";" + d;
            k = new qH(a.H, a.ga, a.na, a.P, new oH(k), a.M, a.pa, a.ka);
            var l = {};
            l.uid = k.o;
            l.hostPeerName = k.m;
            l.initialGeometry = lH(k.H);
            var n = k.permissions;
            n = JSON.stringify({
                expandByOverlay: n.pd,
                expandByPush: n.qd,
                readCookie: n.j,
                writeCookie: n.o
            });
            l = (l.permissions = n, l.metadata = JSON.stringify(k.metadata.j), l.reportCreativeGeometry = k.C, l.isDifferentSourceWindow = k.Hc, l.goog_safeframe_hlt = iC(k.hostpageLibraryTokens), l);
            k.j && (l.sentinel = k.j);
            k = JSON.stringify(l);
            d += k;
            a.X && f instanceof _.Ri && (k = _.ex(_.Yw(a.l)), l = _.ex(_.Yw(a.l)).location.protocol + a.K, XB || Tk(k.document, YB), XB++, k.google_eas_queue = k.google_eas_queue || [], k.google_eas_queue.push({
                a: e,
                b: l,
                c: f.width,
                d: f.height,
                e: "sf-gdn-exp-" + XB,
                f: void 0,
                g: void 0,
                h: void 0,
                i: void 0
            }));
            k = f.width;
            f = f.height;
            a.M && (f = k = 0);
            l = {};
            e = (l.id = e, l.title = g, l.name = d, l.scrolling = "no", l.marginWidth = "0", l.marginHeight = "0", l.width = String(k), l.height = String(f), l["data-is-safeframe"] = "true", l);
            void 0 === c && (g = _.ex(_.Yw(a.l)), f = a.ba, d = a.K, (k = f) && (k = "?" + k), d = (void 0 === d ? "//tpc.googlesyndication.com" : d) + ("/safeframe/" + a.F + "/html/container.html" + k), (k = AH(g)) && (d += (f ? "&" : "?") + "n=" + k), f = "https:" + d, d = [], a.X && (k = sx(g.location.href), g = d.push, k = [0 < k.length ? "google_debug" + (k ? "=" + k : "") + "&" : "", "xpc=", "sf-gdn-exp-" + a.H, "&p=", encodeURIComponent(_.q.document.location.protocol), "//", encodeURIComponent(_.q.document.location.host)].join(""), g.call(d, k)), d.length && (f += "#" + d.join("&")), e.src = f);
            null !== a.oa && (e.sandbox = a.oa);
            h && (e.allow = h);
            b && (e.credentialless = "true");
            e.role = "region";
            e["aria-label"] = "Advertisement";
            e.tabIndex = "0";
            c ? (a.j = c, ax(a.j, e)) : (c = {}, c = (c.frameborder = 0, c.allowTransparency = "true", c.style = "border:0;vertical-align:bottom;", c.src = "about:blank", c), e && Ia(c, e), h = _.Ce("IFRAME"), ax(h, c), a.j = h);
            a.M && (a.j.style.minWidth = "100%");
            a.l.appendChild(a.j)
        };
    _.aa = MH.prototype;
    _.aa.Be = function() {
        _.yb(window, "resize", this.D);
        _.yb(window, "scroll", this.D)
    };
    _.aa.se = function(a) {
        try {
            if (0 != this.status) throw Error("Container already initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !Hj(b.uid) || "string" !== typeof b.version) throw Error("Cannot parse JSON message");
            var c = new sH(b.uid, b.version, b.sentinel);
            if (this.H !== c.o || this.F !== c.version) throw Error("Wrong source container");
            this.status = 1
        } catch (e) {
            var d;
            null == (d = this.I) || d.error("Invalid INITIALIZE_DONE message. Reason: " + e.message)
        }
    };
    _.aa.Je = function(a) {
        try {
            if (1 != this.status) throw Error("Container not initialized");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !Hj(b.uid) || "number" !== typeof b.initialWidth || "number" !== typeof b.initialHeight) throw Error("Cannot parse JSON message");
            if (this.H !== (new tH(b.uid, b.initialWidth, b.initialHeight, b.sentinel)).o) throw Error("Wrong source container");
            this.status = 2
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid REGISTER_DONE message. Reason: " + d.message)
        }
    };
    _.aa.Le = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !Hj(b.uid) || "string" !== typeof b.description) throw Error("Cannot parse JSON message");
            var c = new uH(b.uid, b.description, b.sentinel);
            if (this.H !== c.o) throw Error("Wrong source container");
            var d;
            null == (d = this.I) || d.info("Ext reported an error. Description: " + c.description)
        } catch (f) {
            var e;
            null == (e = this.I) || e.error("Invalid REPORT_ERROR message. Reason: " + f.message)
        }
    };
    _.aa.me = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (0 != this.ha) throw Error("Container is not collapsed");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !Hj(b.uid) || "number" !== typeof b.expand_t || "number" !== typeof b.expand_r || "number" !== typeof b.expand_b || "number" !== typeof b.expand_l || "boolean" !== typeof b.push) throw Error("Cannot parse JSON message");
            var c = new vH(b.uid, new _.Kx(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
            if (this.H !== c.o) throw Error("Wrong source container");
            if (!(0 <= c.m.top && 0 <= c.m.left && 0 <= c.m.bottom && 0 <= c.m.right)) throw Error("Invalid expansion amounts");
            var d;
            if (d = c.push && this.P.qd || !c.push && this.P.pd) {
                var e = c.m,
                    f = c.push,
                    g = this.C = mH(this.j);
                if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                    if (!f)
                        for (var h = this.j.parentNode; h && h.style; h = h.parentNode) DH(this.m, h, "overflowX", "visible", "important"), DH(this.m, h, "overflowY", "visible", "important");
                    var k = Nx(new Mx(0, 0, this.C.o.getWidth(), this.C.o.getHeight()));
                    _.na(e) ? (k.top -= e.top, k.right += e.right, k.bottom += e.bottom, k.left -= e.left) : (k.top -= e, k.right += Number(void 0), k.bottom += Number(void 0), k.left -= Number(void 0));
                    DH(this.m, this.l, "position", "relative");
                    DH(this.m, this.j, "position", "absolute");
                    if (f) {
                        var l = k.getWidth();
                        DH(this.m, this.l, "width", l + "px");
                        var n = k.getHeight();
                        DH(this.m, this.l, "height", n + "px")
                    } else DH(this.m, this.j, "zIndex", "10000");
                    var m = k.getWidth();
                    DH(this.m, this.j, "width", m + "px");
                    var p = k.getHeight();
                    DH(this.m, this.j, "height", p + "px");
                    DH(this.m, this.j, "left", k.left + "px");
                    DH(this.m, this.j, "top", k.top + "px");
                    this.ha = 2;
                    this.C = mH(this.j);
                    d = !0
                } else d = !1
            }
            a = d;
            jG(this.o, "expand_response", (new yH(this.H, a, this.C, c.m, c.push)).j());
            if (!a) throw Error("Viewport or document body not large enough to expand into.");
        } catch (u) {
            var r;
            null == (r = this.I) || r.error("Invalid EXPAND_REQUEST message. Reason: " + u.message)
        }
    };
    _.aa.Xd = function(a) {
        try {
            if (2 != this.status) throw Error("Container is not registered");
            if (2 != this.ha) throw Error("Container is not expanded");
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !Hj(b.uid)) throw Error("Cannot parse JSON message");
            if (this.H !== (new wH(b.uid, b.sentinel)).o) throw Error("Wrong source container");
            EH(this.m);
            this.ha = 0;
            this.j && (this.C = mH(this.j));
            jG(this.o, "collapse_response", (new xH(this.H, this.C)).j())
        } catch (d) {
            var c;
            null == (c = this.I) || c.error("Invalid COLLAPSE_REQUEST message. Reason: " + d.message)
        }
    };
    var LH = function(a) {
        if (1 == a.status || 2 == a.status) switch (a.A) {
            case 0:
                NH(a);
                a.R = window.setTimeout((0, _.xs)(a.ja, a), 1E3);
                a.A = 1;
                break;
            case 1:
                a.A = 2;
                break;
            case 2:
                a.A = 2
        }
    };
    MH.prototype.N = function(a) {
        try {
            if ("string" !== typeof a) throw Error("Could not parse serialized message");
            var b = JSON.parse(a);
            if (!_.na(b) || !Hj(b.uid) || "number" !== typeof b.width || "number" !== typeof b.height || b.sentinel && "string" !== typeof b.sentinel) throw Error("Cannot parse JSON message");
            var c = new zH(b.uid, b.width, b.height, b.sentinel);
            if (this.H !== c.o) throw Error("Wrong source container");
            var d = String(c.height);
            if (this.M) d !== this.j.height && (this.j.height = d, LH(this));
            else {
                var e;
                null == (e = this.I) || e.error("Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.")
            }
        } catch (g) {
            var f;
            null == (f = this.I) || f.error("Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: " + g.message)
        }
    };
    MH.prototype.ja = function() {
        if (1 == this.status || 2 == this.status) switch (this.A) {
            case 1:
                this.A = 0;
                break;
            case 2:
                NH(this), this.R = window.setTimeout((0, _.xs)(this.ja, this), 1E3), this.A = 1
        }
    };
    var NH = function(a) {
            a.C = mH(a.j);
            jG(a.o, "geometry_update", (new xH(a.H, a.C)).j())
        },
        IH = function(a) {
            var b = null;
            a.bg && (b = a.bg);
            return null == b ? null : b.join(" ")
        },
        OH = ["allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"],
        PH = ["allow-top-navigation"],
        QH = ["allow-same-origin"],
        RH = vx([].concat(_.xe(OH), _.xe(PH)));
    vx([].concat(_.xe(OH), _.xe(QH)));
    vx([].concat(_.xe(OH), _.xe(PH), _.xe(QH)));
    var SH = _.P(["https://tpc.googlesyndication.com/safeframe/", "/html/container.html"]),
        TH = {
            Bh: function(a) {
                if ("string" !== typeof a.version) throw new TypeError("version is not a string");
                if (!/^[0-9]+-[0-9]+-[0-9]+$/.test(a.version)) throw new RangeError("Invalid version: " + a.version);
                if ("string" !== typeof a.Jd) throw new TypeError("subdomain is not a string");
                if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(a.Jd)) throw new RangeError("Invalid subdomain: " + a.Jd);
                return ue("https://" + a.Jd + ".safeframe.googlesyndication.com/safeframe/" + a.version + "/html/container.html")
            },
            Vj: function(a) {
                return _.A(SH, a)
            }
        };
    var Jj = function(a, b) {
        try {
            Jb(jq(a, b))
        } catch (c) {}
    };
    var UH = function(a) {
        _.Q.call(this, a)
    };
    _.O(UH, _.Q);
    UH.prototype.m = je([UH, 4, Lu, 2, Lu, 1, Lu, 3, Lu, 5, Ou]);
    var VH = [.05, .1, .2, .5],
        WH = [0, .5, 1],
        XH = function(a) {
            a = sg(a);
            if (!a) return -1;
            try {
                var b = ZB(a.document);
                var c = new _.Ri(b.clientWidth, b.clientHeight)
            } catch (d) {
                c = new _.Ri(-12245933, -12245933)
            }
            return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height
        },
        YH = function(a, b) {
            return 0 >= a || 0 >= b ? [] : _.Cd(VH, function(c) {
                return Math.min(a / b * c, 1)
            })
        },
        $H = function(a) {
            this.C = a.G;
            this.m = a.tb;
            this.l = a.Ab;
            this.o = null;
            this.H = a.Ua;
            this.j = ZH(this);
            this.I = a.ni || !1
        },
        aI = function() {
            var a;
            return !!window.IntersectionObserver && xx(null == (a = window.performance) ? void 0 : a.now)
        };
    $H.prototype.getSlotId = function() {
        return this.o
    };
    var cI = function(a, b) {
            if (a.j) {
                if (null != a.o) {
                    try {
                        bI(a, Math.round(performance.now()), 0, 0, 0, !1)
                    } catch (c) {
                        a.H && a.H(c)
                    }
                    a.j && a.j.unobserve(a.m)
                }
                a.o = b;
                a.j.observe(a.m)
            }
        },
        ZH = function(a) {
            if (!_.q.IntersectionObserver) return null;
            var b = a.m.offsetWidth * a.m.offsetHeight,
                c = XH(a.C);
            b = [].concat(_.xe(WH), _.xe(YH(c, b)));
            ra(b);
            return new _.q.IntersectionObserver(function(d) {
                return dI(a, d)
            }, {
                threshold: b
            })
        },
        dI = function(a, b) {
            try {
                var c = XH(a.C);
                _.Ks(b, function(d) {
                    a.I && bI(a, Math.round(d.time), d.boundingClientRect.width * d.boundingClientRect.height, d.intersectionRect.width * d.intersectionRect.height, c, d.isIntersecting)
                })
            } catch (d) {
                a.H && a.H(d)
            }
        },
        bI = function(a, b, c, d, e, f) {
            if (null == a.o) throw Error("Not Attached.");
            var g = new UH;
            c = _.z(g, 1, c);
            d = _.z(c, 2, d);
            e = _.z(d, 3, e);
            b = _.z(e, 4, b);
            f = _.z(b, 5, f);
            f = Pb(f.m(), 4);
            jB(a.l, "1", 10, f, void 0, a.o)
        };
    var eI = function(a, b) {
            this.j = a;
            this.o = b
        },
        fI = function(a) {
            if (a.j.frames.google_ads_top_frame) return !0;
            var b = zx(a.j);
            b = b && b.contentWindow;
            if (!b) return !1;
            b.addEventListener("message", function(c) {
                var d = c.ports;
                "__goog_top_url_req" === c.data.msgType && d.length && d[0].postMessage({
                    msgType: "__goog_top_url_resp",
                    topUrl: a.o
                })
            }, !1);
            return !0
        };
    var Uj = function(a) {
        _.Q.call(this, a)
    };
    _.O(Uj, _.Q);
    var Yj = ke(Uj),
        Wj = [1, 3];
    var Fe = {
        Kj: 0,
        Gj: 1,
        Hj: 9,
        Dj: 2,
        Ej: 3,
        Jj: 5,
        Ij: 7,
        Fj: 10
    };
    var gI = _.P(["https://securepubads.g.doubleclick.net/static/topics/topics_frame.html"]),
        Oj = _.A(gI);
    var uk = function(a) {
        _.Q.call(this, a)
    };
    _.O(uk, _.Q);
    uk.prototype.getVersion = function() {
        return _.Kf(this, 2)
    };
    var tk = function(a) {
        _.Q.call(this, a, -1, hI)
    };
    _.O(tk, _.Q);
    var nk = function(a, b) {
            return _.z(a, 2, b)
        },
        sk = function(a, b) {
            return _.z(a, 3, b)
        },
        pk = function(a, b) {
            return _.z(a, 4, b)
        },
        mk = function(a, b) {
            return _.z(a, 5, b)
        },
        rk = function(a, b) {
            return _.z(a, 9, b)
        },
        lk = function(a, b) {
            return _.Dd(a, 10, b)
        },
        kk = function(a, b) {
            return _.z(a, 11, b)
        },
        ok = function(a, b) {
            return _.z(a, 1, b)
        },
        qk = function(a, b) {
            return _.z(a, 7, b)
        },
        hI = [10, 6];
    var ik = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    var iI = function() {
            this.id = "goog_" + Uw++
        },
        jI = function(a) {
            _.T.call(this);
            this.context = a;
            this.j = new _.v.Map
        };
    _.O(jI, _.T);
    jI.prototype.o = function() {
        _.T.prototype.o.call(this);
        this.j.clear()
    };
    jI.prototype.Z = function(a, b) {
        var c = this;
        if (this.H) return function() {};
        var d = "string" === typeof a ? a : a.id,
            e, f, g = null != (f = null == (e = this.j.get(d)) ? void 0 : e.add(b)) ? f : new _.v.Set([b]);
        this.j.set(d, g);
        return function() {
            return void kI(c, a, b)
        }
    };
    var lI = function(a, b, c) {
            c = void 0 === c ? function() {
                return !0
            } : c;
            return new _.v.Promise(function(d) {
                var e = a.Z(b, function(f) {
                    c(f) && (e(), d(f))
                })
            })
        },
        kI = function(a, b, c) {
            var d;
            return !(null == (d = a.j.get("string" === typeof b ? b : b.id)) || !d.delete(c))
        };
    jI.prototype.dispatchEvent = function(a, b, c) {
        var d = this,
            e, f, g, h, k, l, n, m;
        return _.Ab(function(p) {
            e = "string" === typeof a ? a : a.id;
            f = d.j.get(e);
            if (null == (g = f) || !g.size) return p.return();
            h = "function" === typeof window.CustomEvent ? new CustomEvent(e, {
                detail: c,
                bubbles: !0,
                cancelable: !0
            }) : function() {
                var r = document.createEvent("CustomEvent");
                r.initCustomEvent(e, !0, !0, c);
                return r
            }();
            k = [];
            l = {};
            n = _.w(f);
            for (m = n.next(); !m.done; l = {
                    Wc: l.Wc
                }, m = n.next()) l.Wc = m.value, k.push(new _.v.Promise(function(r) {
                return function(u) {
                    return _.Ab(function(x) {
                        if (1 == x.j) return Bb(x, 0, 2);
                        Xh(d.context, b, function() {
                            d.j.has(e) && f.has(r.Wc) && r.Wc(h)
                        }, !0);
                        u();
                        x.j = 0
                    })
                }
            }(l)));
            return Bb(p, _.v.Promise.all(k), 0)
        })
    };
    var mI = new iI,
        nI = new iI,
        xq = new iI,
        oI = new iI,
        zq = new iI,
        pI = new iI,
        qI = new iI,
        Go = new iI,
        rI = new iI,
        sI = new iI;
    var tI = function() {
        this.data = void 0;
        this.status = 0;
        this.j = []
    };
    tI.prototype.vd = function() {
        return this.j
    };
    tI.prototype.Ud = function() {
        this.j = []
    };
    var uI, yI, BI, qr, CI, DI, xI, wI, vI, EI;
    uI = function() {
        this.j = new _.v.Map;
        this.C = 0;
        this.o = new _.v.Map;
        this.Bc = null;
        this.H = this.m = this.A = this.l = 0;
        this.I = new tI
    };
    yI = function(a, b) {
        a.j.get(b) || (a.j.set(b, {
            Ob: !0,
            Fe: "",
            xc: "",
            Vf: 0,
            Df: 0,
            Ce: [],
            De: [],
            Gb: !1
        }), _.Qn(b, function() {
            a.j.delete(b);
            vI(a, b)
        }), b.Z(nI, function(c) {
            c = c.detail;
            var d = a.j.get(b);
            d.Fe = y(c, 33) || "";
            d.Gb = !0;
            wI(a, b, function() {
                return void(d.Fe = "")
            });
            xI(a, b, function() {
                return void(d.Gb = !1)
            })
        }))
    };
    _.yq = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.Ob) ? d : !1
    };
    _.zI = function(a, b) {
        if (a = a.j.get(b)) a.Ob = !1
    };
    _.AI = function(a, b) {
        if (a = a.j.get(b)) a.Ob = !0
    };
    BI = function(a, b) {
        if (!b.length) return [];
        var c = Fh(b[0].getAdUnitPath());
        b.every(function(g) {
            return Fh(g.getAdUnitPath()) === c
        });
        var d = [];
        a = _.w(a.j);
        for (var e = a.next(); !e.done; e = a.next()) {
            var f = _.w(e.value);
            e = f.next().value;
            (f = f.next().value.Fe) && Fh(e.getAdUnitPath()) === c && !_.t(b, "includes").call(b, e) && d.push(f)
        }
        return d
    };
    qr = function(a, b) {
        var c, d;
        return null != (d = null == (c = a.j.get(b)) ? void 0 : c.xc) ? d : ""
    };
    CI = function(a, b) {
        return (a = a.j.get(b)) ? a.Vf - 1 : 0
    };
    DI = function(a, b) {
        var c = a.o.get(b) - 1;
        0 === c ? a.o.delete(b) : a.o.set(b, c);
        return c
    };
    xI = function(a, b, c) {
        (a = a.j.get(b)) && a.Ce.push(c)
    };
    wI = function(a, b, c) {
        (a = a.j.get(b)) && a.De.push(c)
    };
    vI = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.De.slice(), a.De.length = 0, a = _.w(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    EI = function(a, b) {
        if (a = a.j.get(b))
            for (b = a.Ce.slice(), a.Ce.length = 0, a = _.w(b), b = a.next(); !b.done; b = a.next()) b = b.value, b()
    };
    uI.prototype.Gb = function(a) {
        var b, c;
        return null != (c = null == (b = this.j.get(a)) ? void 0 : b.Gb) ? c : !1
    };
    var FI = function(a, b, c) {
            if (a = a.j.get(b)) a.Uf = c
        },
        GI = function(a, b) {
            if (a = a.j.get(b)) {
                var c;
                null == (c = a.Uf) || c.Da();
                delete a.Uf
            }
        };
    var HI = function() {
        var a = {};
        return a.adsense_channel_ids = "channel", a.adsense_ad_types = "ad_type", a.adsense_ad_format = "format", a.adsense_background_color = "color_bg", a.adsense_border_color = "color_border", a.adsense_link_color = "color_link", a.adsense_text_color = "color_text", a.adsense_url_color = "color_url", a.page_url = "url", a.adsense_allow_expandable_ads = "ea", a.adsense_encoding = "oe", a.adsense_family_safe = "adsafe", a.adsense_flash_version = "flash", a.adsense_font_face = "f", a.adsense_hints = "hints", a.adsense_keyword_type = "kw_type", a.adsense_keywords = "kw", a.adsense_test_mode = "adtest", a.alternate_ad_iframe_color = "alt_color", a.alternate_ad_url = "alternate_ad_url", a.demographic_age = "cust_age", a.demographic_gender = "cust_gender", a.document_language = "hl", a
    };
    var yk = new _.v.Map,
        xk = new _.v.Map;
    var Ak = function(a, b) {
        this.push = I(a, 76, b.push.bind(b))
    };
    var Ck = function(a, b) {
        this.messageId = a;
        this.messageArgs = b
    };
    Ck.prototype.getMessageId = function() {
        return this.messageId
    };
    Ck.prototype.getMessageArgs = function() {
        return this.messageArgs
    };
    var II = K(2),
        JI = K(3),
        KI = K(4),
        LI = K(5),
        MI = K(6),
        NI = K(12),
        OI = K(14),
        PI = K(16),
        QI = K(19),
        RI = K(20),
        SI = K(23),
        TI = K(26),
        UI = K(28),
        VI = K(149),
        WI = K(30),
        XI = K(31),
        YI = K(34),
        ZI = K(35),
        $I = K(36),
        yp = K(38),
        aJ = K(40),
        bJ = K(48),
        cJ = K(50),
        dJ = K(60),
        eJ = K(63),
        fJ = K(64),
        gJ = K(66),
        hJ = K(68),
        iJ = K(69),
        jJ = K(70),
        kJ = K(71),
        lJ = K(78),
        mJ = K(80),
        nJ = K(82),
        oJ = K(84),
        pJ = K(85),
        qJ = K(87),
        el = K(88),
        rJ = K(92),
        sJ = K(93),
        tJ = K(99),
        uJ = K(103),
        vJ = K(104),
        wJ = K(105),
        xJ = K(106),
        yJ = K(107),
        zJ = K(108),
        AJ = K(113),
        BJ = K(114),
        CJ = K(115),
        DJ = K(117),
        EJ = K(118),
        FJ = K(119),
        xl = K(121),
        GJ = K(122),
        HJ = K(123),
        Xp = K(125),
        IJ = K(126),
        JJ = K(127),
        KJ = K(144),
        ip = K(129),
        kp = K(132),
        LJ = K(134),
        MJ = K(135),
        NJ = K(136),
        OJ = K(137),
        PJ = K(138),
        QJ = K(139),
        RJ = K(140),
        kq = K(142),
        SJ = K(143),
        TJ = K(145),
        UJ = K(147),
        Fp = K(148),
        VJ = K(150);
    var WJ = function(a, b, c) {
        var d = this;
        this.addEventListener = I(a, 86, function(e, f) {
            if ("function" !== typeof f) return M(b, Ek("Service.addEventListener", [e, f])), d;
            var g = Fk(e);
            if (!g) return M(b, sJ(e)), d;
            c.addEventListener(g, f);
            return d
        });
        this.removeEventListener = I(a, 904, function(e, f) {
            var g = Fk(e);
            "function" === typeof f && g ? c.removeEventListener(g, f) : M(b, Ek("Service.removeEventListener", [e, f]))
        });
        this.getSlots = I(a, 573, function() {
            return c.m.map(function(e) {
                return e.ma
            })
        });
        this.getSlotIdMap = I(a, 574, function() {
            for (var e = {}, f = _.w(c.m), g = f.next(); !g.done; g = f.next()) g = g.value, e[g.toString()] = g.ma;
            return e
        });
        this.getName = I(a, 575, function() {
            return c.getName()
        })
    };
    var Gk = function(a, b, c) {
        WJ.call(this, a, b, c);
        this.notifyUnfilledSlots = I(a, 69, function(d) {
            c.Ob && XJ(c, YJ(c, d))
        });
        this.refreshAllSlots = I(a, 60, function() {
            c.Ob && XJ(c)
        });
        this.setVideoSession = I(a, 61, function(d, e, f) {
            c.F = e;
            c.K = f;
            "number" === typeof d && (e = hj().j, _.z(e, 29, d))
        });
        this.getDisplayAdsCorrelator = I(a, 62, function(d) {
            return ZJ(c, d)
        });
        this.getVideoStreamCorrelator = I(a, 63, function() {
            var d = hj().j;
            d = od(y(d, 29), 0);
            return null != d ? d : 0
        });
        this.isSlotAPersistentRoadblock = I(a, 64, function(d) {
            var e = _.t(c.m, "find").call(c.m, function(f) {
                return f.ma === d
            });
            return !!e && $J(c, e)
        });
        this.onImplementationLoaded = I(a, 65, function() {
            c.j.info(bJ("GPT CompanionAds"))
        });
        this.slotRenderEnded = I(a, 67, function(d, e, f) {
            var g = _.t(c.m, "find").call(c.m, function(h) {
                return h.ma === d
            });
            return g && aK(c, g, e, f)
        });
        this.setRefreshUnfilledSlots = I(a, 59, function(d) {
            return c.setRefreshUnfilledSlots(d)
        })
    };
    _.O(Gk, WJ);
    var Ik = function(a, b, c) {
        WJ.call(this, a, b, c);
        this.setContent = I(a, 72, function(d) {
            var e = _.t(c.m, "find").call(c.m, function(f) {
                return f.ma === d
            });
            M(b, KJ(), e)
        })
    };
    _.O(Ik, WJ);
    var bK = _.P(["https://console.googletagservices.com/pubconsole/loader.js"]),
        Uk = _.A(bK),
        Yk, Xk = !1,
        Pk = !1,
        Rk = !1;
    var vp = function(a, b) {
        this.getAllEvents = I(a, 563, function() {
            return Pk ? cK(b).slice() : []
        });
        this.getEventsBySlot = I(a, 565, function(c) {
            return Pk ? dK(b, c).slice() : []
        });
        this.getEventsByLevel = I(a, 566, function(c) {
            return Pk ? eK(b, c).slice() : []
        })
    };
    var hl = function(a, b, c, d) {
        var e = this,
            f = c.getSlotId(),
            g = hj().j,
            h = Zn(hj(), f.getDomId());
        this.set = I(a, 83, function(k, l) {
            "page_url" === k && l && (k = [bl(cl(new dl, k), [String(l)])], _.Dd(h, 3, k));
            return e
        });
        this.get = I(a, 84, function(k) {
            if ("page_url" !== k) return null;
            var l, n;
            return null != (n = null == (l = (_.B = h.wa(), _.t(_.B, "find")).call(_.B, function(m) {
                return y(m, 1) === k
            })) ? void 0 : _.Tm(l, 2)[0]) ? n : null
        });
        this.setClickUrl = I(a, 79, function(k) {
            "string" === typeof k ? h.setClickUrl(k) : M(b, Ek("Slot.setClickUrl", [k]), f);
            return e
        });
        this.setTargeting = I(a, 81, function(k, l) {
            fl(f, h, k, l, b);
            return e
        });
        this.updateTargetingFromMap = I(a, 85, function(k) {
            gl(f, h, k, b);
            return e
        });
        this.display = I(a, 78, function() {
            fK(d, f, Ui(g, hj().o))
        });
        this.setTagForChildDirectedTreatment = I(a, 80, function(k) {
            if (0 === k || 1 === k) {
                var l = jn(g) || new eH;
                l.setTagForChildDirectedTreatment(k);
                _.Lh(g, 25, l)
            }
            return e
        });
        this.setForceSafeFrame = I(a, 567, function(k) {
            "boolean" === typeof k ? _.z(h, 12, k) : M(b, Ek("PassbackSlot.setForceSafeFrame", [String(k)]), f);
            return e
        });
        this.setTagForUnderAgeOfConsent = I(a, 448, function(k) {
            if (0 === k || 1 === k) {
                var l = jn(g) || new eH;
                l.setTagForUnderAgeOfConsent(k);
                _.Lh(g, 25, l)
            }
            return e
        })
    };
    var Cn = function(a, b) {
        this.push = I(a, 932, function(c) {
            b.push(c)
        })
    };
    var Zo = {
        Cj: 0,
        zj: 1,
        Aj: 2,
        Bj: 3
    };
    var kl = {
            REWARDED: 4,
            TOP_ANCHOR: 2,
            BOTTOM_ANCHOR: 3,
            INTERSTITIAL: 5
        },
        ml = {
            IAB_AUDIENCE_1_1: 1,
            IAB_CONTENT_2_1: 2,
            IAB_CONTENT_2_2: 3
        },
        ll = {
            PURCHASED: 1,
            ORGANIC: 2
        };
    var Il = function(a, b, c) {
        jI.call(this, a);
        this.slotId = b;
        this.m = c
    };
    _.O(Il, jI);
    Il.prototype.getSlotId = function() {
        return this.slotId
    };
    var gK = "",
        ql = null,
        wl = _.Hs(function() {
            var a, b;
            null == (a = window.console) || null == (b = a.warn) || b.call(a, "googletag.pubads().setSafeFrameConfig({useUniqueDomain: ...}) has been removed, and no longer has any effect.")
        });
    var He = function(a, b, c, d) {
        jI.call(this, a);
        this.adUnitPath = b;
        this.tb = d;
        this.ma = null;
        this.id = this.adUnitPath + "_" + c
    };
    _.O(He, jI);
    _.aa = He.prototype;
    _.aa.getId = function() {
        return this.id
    };
    _.aa.getAdUnitPath = function() {
        return this.adUnitPath
    };
    _.aa.getName = function() {
        return this.adUnitPath
    };
    _.aa.toString = function() {
        return this.getId()
    };
    _.aa.getDomId = function() {
        return this.tb
    };
    var hK = function(a, b) {
        a.ma = b
    };
    var Cl = /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|(pagead2\.googlesyndication\.com))(\/tag\/js\/gpt(?:_[a-z]+)*\.js|\/pagead\/managed\/js\/gpt\.js)/;
    var iK = _.Hs(function() {
            return void Dx("google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.")
        }),
        jK = _.Hs(function() {
            return void Dx("googletag.pubads().setCookieOptions() has been removed, and no longer has any effect. Consider migrating to Limited Ads.")
        }),
        kK = _.Hs(function() {
            return void Dx("The following functions are deprecated: googletag.pubads().setTagForChildDirectedTreatment(), googletag.pubads().clearTagForChildDirectedTreatment(), googletag.pubads().setRequestNonPersonalizedAds(), and googletag.pubads().setTagForUnderAgeOfConsent(). Please use googletag.pubads().setPrivacySettings() instead.")
        }),
        lK = function() {
            Object.defineProperty(window, "google_DisableInitialLoad", {
                get: function() {
                    iK();
                    return !0
                },
                set: function() {
                    iK()
                },
                configurable: !0
            })
        },
        Kl = function(a, b, c, d, e) {
            WJ.call(this, a, b, c);
            var f = this,
                g = hj().j,
                h = hj().o,
                k = !1;
            this.setTargeting = I(a, 1, function(l, n) {
                var m = null;
                "string" === typeof n ? m = [n] : Array.isArray(n) ? m = n : xa(n) && (m = _.t(Array, "from").call(Array, n));
                var p = "string" === typeof l && !$k(l);
                m = m && Ca(m);
                var r, u = null != (r = null == m ? void 0 : m.every(function(x) {
                    return "string" === typeof x
                })) ? r : !1;
                if (!p || !u) return M(b, Ek("PubAdsService.setTargeting", [l, n])), f;
                n = m;
                p = (_.B = Te(g, dl, 2), _.t(_.B, "find")).call(_.B, function(x) {
                    return y(x, 1) === l
                });
                if ("gpt-beta" === l) {
                    if (c.C) return M(b, xJ(n.join())), f;
                    if (p) return M(b, yJ(n.join())), f;
                    n = Gl(n, e)
                }
                p ? bl(p, n) : (p = bl(cl(new dl, l), n), _.Pf(g, 2, dl, p));
                b.info(el(l, n.join(), c.getName()));
                return f
            });
            this.clearTargeting = I(a, 2, function(l) {
                if (void 0 === l) return _.Dd(g, 2), b.info(vJ(c.getName())), f;
                if ("gpt-beta" === l) return M(b, zJ(l)), f;
                var n = Te(g, dl, 2),
                    m = _.t(n, "findIndex").call(n, function(p) {
                        return y(p, 1) === l
                    });
                if (0 > m) return M(b, oJ(l, c.getName())), f;
                n.splice(m, 1);
                _.Dd(g, 2, n);
                b.info(nJ(l, c.getName()));
                return f
            });
            this.getTargeting = I(a, 38, function(l) {
                if ("string" !== typeof l) return M(b, Ek("PubAdsService.getTargeting", [l])), [];
                var n = (_.B = Te(g, dl, 2), _.t(_.B, "find")).call(_.B, function(m) {
                    return y(m, 1) === l
                });
                return n ? _.Tm(n, 2).slice() : []
            });
            this.getTargetingKeys = I(a, 39, function() {
                return Te(g, dl, 2).map(function(l) {
                    return _.Kf(l, 1)
                })
            });
            this.setCategoryExclusion = I(a, 3, function(l) {
                if ("string" !== typeof l || $k(l)) return M(b, Ek("PubAdsService.setCategoryExclusion", [l])), f;
                (_.B = _.Tm(g, 3), _.t(_.B, "includes")).call(_.B, l) || Fu(g, 3, l);
                b.info(pJ(l));
                return f
            });
            this.clearCategoryExclusions = I(a, 4, function() {
                _.z(g, 3, Vc);
                b.info(qJ());
                return f
            });
            this.disableInitialLoad = I(a, 5, function() {
                _.z(g, 4, !0);
                k || (k = !0, lK())
            });
            this.enableSingleRequest = I(a, 6, function() {
                if (c.C && !_.E(g, 6)) return M(b, dJ("PubAdsService.enableSingleRequest")), !1;
                b.info(eJ("single request"));
                _.z(g, 6, !0);
                return !0
            });
            this.enableAsyncRendering = I(a, 7, function() {
                return !0
            });
            this.enableSyncRendering = I(a, 8, function() {
                Dx("GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.");
                return !1
            });
            this.enableLazyLoad = I(a, 485, function(l) {
                var n = new Qq;
                n = _.z(n, 1, 800);
                n = _.z(n, 2, 400);
                n = ZG(n, 3);
                if (_.na(l)) {
                    var m = l.fetchMarginPercent;
                    "number" === typeof m && (0 <= m ? _.z(n, 1, m) : -1 === m && $f(n, 1));
                    m = l.renderMarginPercent;
                    "number" === typeof m && (0 <= m ? _.z(n, 2, m) : -1 === m && $f(n, 2));
                    l = l.mobileScaling;
                    "number" === typeof l && (0 < l ? _.z(n, 3, _.Cc(l)) : -1 === l && _.z(n, 3, _.Cc(1)))
                }
                window.IntersectionObserver || !Un(n, 1) && !Un(n, 2) ? _.Lh(g, 5, n) : M(b, VJ())
            });
            this.setCentering = I(a, 9, function(l) {
                l = !!l;
                b.info(fJ("centering", String(l)));
                _.z(g, 15, l)
            });
            this.definePassback = I(a, 10, function(l, n) {
                return (l = Jl(a, b, c, l, n, d)) && l.Qf
            });
            this.refresh = I(a, 11, function() {
                var l = _.wb.apply(0, arguments),
                    n = _.w(l),
                    m = n.next().value;
                n = n.next().value;
                n = void 0 === n ? {} : n;
                m && !Array.isArray(m) || !_.na(n) || n.changeCorrelator && "boolean" !== typeof n.changeCorrelator ? M(b, Ek("PubAdsService.refresh", l)) : (n && !1 === n.changeCorrelator || g.setCorrelator(Hx()), m = m ? Fl(m, c) : c.m, c.refresh(Ui(g, h), m) || M(b, Ek("PubAdsService.refresh", l)))
            });
            this.enableVideoAds = I(a, 12, function() {
                _.z(g, 21, !0);
                mK(c, g)
            });
            this.setVideoContent = I(a, 13, function(l, n) {
                nK(c, l, n, g)
            });
            this.collapseEmptyDivs = I(a, 14, function(l) {
                l = void 0 === l ? !1 : l;
                _.z(g, 11, !0);
                l = !!l;
                _.z(g, 10, l);
                b.info(lJ(String(l)));
                return !!_.E(g, 11)
            });
            this.clear = I(a, 15, function(l) {
                if (Array.isArray(l)) return oK(c, g, h, Fl(l, c));
                if (void 0 === l) return oK(c, g, h, c.m);
                M(b, Ek("PubAdsService.clear", [l]));
                return !1
            });
            this.setLocation = I(a, 16, function(l) {
                if ("string" !== typeof l) return M(b, Ek("PubAdsService.setLocation", [l])), f;
                _.z(g, 8, l);
                return f
            });
            this.setCookieOptions = I(a, 17, function() {
                jK();
                return f
            });
            this.setTagForChildDirectedTreatment = I(a, 18, function(l) {
                kK();
                if (1 !== l && 0 !== l) return M(b, GJ("PubadsService.setTagForChildDirectedTreatment", yl(l), "0,1")), f;
                var n = jn(g) || new eH;
                n.setTagForChildDirectedTreatment(l);
                _.Lh(g, 25, n);
                return f
            });
            this.clearTagForChildDirectedTreatment = I(a, 19, function() {
                kK();
                var l = jn(g);
                if (!l) return f;
                l.clearTagForChildDirectedTreatment();
                _.Lh(g, 25, l);
                return f
            });
            this.setPublisherProvidedId = I(a, 20, function(l) {
                l = String(l);
                b.info(fJ("PPID", l));
                _.z(g, 16, l);
                return f
            });
            this.set = I(a, 21, function(l, n) {
                if ("string" !== typeof l || !l.length || void 0 === HI()[l] || "string" !== typeof n) return M(b, Ek("PubAdsService.set", [l, n])), f;
                var m = (_.B = g.wa(), _.t(_.B, "find")).call(_.B, function(p) {
                    return y(p, 1) === l
                });
                m ? bl(m, [n]) : (m = aH(cl(new dl, l), n), _.Pf(g, 14, dl, m));
                b.info($I(l, String(n), c.getName()));
                return f
            });
            this.get = I(a, 22, function(l) {
                if ("string" !== typeof l) return M(b, Ek("PubAdsService.get", [l])), null;
                var n = (_.B = g.wa(), _.t(_.B, "find")).call(_.B, function(m) {
                    return y(m, 1) === l
                });
                return (n = n && _.Tm(n, 2)) ? n[0] : null
            });
            this.getAttributeKeys = I(a, 23, function() {
                return g.wa().map(function(l) {
                    return _.Kf(l, 1)
                })
            });
            this.display = I(a, 24, function(l, n, m, p) {
                return void c.display(l, n, d, m, p)
            });
            this.updateCorrelator = I(a, 25, function() {
                Dx(El("update"));
                M(b, CJ());
                g.setCorrelator(Hx());
                return f
            });
            this.defineOutOfPagePassback = I(a, 35, function(l) {
                l = Jl(a, b, c, l, [1, 1], d);
                if (!l) return null;
                _.z(l.rb, 15, 1);
                return l.Qf
            });
            this.setForceSafeFrame = I(a, 36, function(l) {
                if ("boolean" !== typeof l) return M(b, Ek("PubAdsService.setForceSafeFrame", [yl(l)])), f;
                _.z(g, 13, l);
                return f
            });
            this.setSafeFrameConfig = I(a, 37, function(l) {
                var n = zl(b, l);
                if (!n) return M(b, Ek("PubAdsService.setSafeFrameConfig", [l])), f;
                _.Lh(g, 18, n);
                return f
            });
            this.setRequestNonPersonalizedAds = I(a, 445, function(l) {
                kK();
                if (0 !== l && 1 !== l) return M(b, GJ("PubAdsService.setRequestNonPersonalizedAds", yl(l), "0,1")), f;
                var n = jn(g) || new eH;
                _.z(n, 8, !!l);
                _.Lh(g, 25, n);
                return f
            });
            this.setTagForUnderAgeOfConsent = I(a, 447, function(l) {
                l = void 0 === l ? 2 : l;
                kK();
                if (2 !== l && 0 !== l && 1 !== l) return M(b, GJ("PubadsService.setTagForUnderAgeOfConsent", yl(l), "2,0,1")), f;
                var n = jn(g) || new eH;
                n.setTagForUnderAgeOfConsent(l);
                _.Lh(g, 25, n);
                return f
            });
            this.getCorrelator = I(a, 27, function() {
                return String(y(g, 26))
            });
            this.getTagSessionCorrelator = I(a, 631, function() {
                return wf(_.q)
            });
            this.getVideoContent = I(a, 30, function() {
                return pK(c, g)
            });
            this.getVersion = I(a, 568, function() {
                return a.Lb ? String(a.Lb) : a.Wa
            });
            this.forceExperiment = I(a, 569, function(l) {
                return void c.forceExperiment(l)
            });
            this.setCorrelator = I(a, 28, function(l) {
                Dx(El("set"));
                M(b, BJ());
                if (Li(window)) return f;
                if (!gm(l)) return M(b, Ek("PubadsService.setCorrelator", [yl(l)])), f;
                l = g.setCorrelator(l);
                _.z(l, 27, !0);
                return f
            });
            this.markAsAmp = I(a, 570, function() {
                window.console && window.console.warn && window.console.warn("googletag.pubads().markAsAmp() is deprecated and ignored.")
            });
            this.isSRA = I(a, 571, function() {
                return !!_.E(g, 6)
            });
            this.setImaContent = I(a, 328, function(l, n) {
                _.Uf(g, 22) ? nK(c, l, n, g) : (_.z(g, 21, !0), mK(c, g), "string" === typeof l && _.z(g, 19, l), "string" === typeof n && _.z(g, 20, n))
            });
            this.getImaContent = I(a, 329, function() {
                return _.Uf(g, 22) ? pK(c, g) : c.C ? {
                    vid: _.Kf(g, 19) || "",
                    cmsid: _.Kf(g, 20) || ""
                } : null
            });
            this.isInitialLoadDisabled = I(a, 572, function() {
                return !!_.E(g, 4)
            });
            this.setPrivacySettings = I(a, 648, function(l) {
                if (!_.na(l)) return M(b, Ek("PubAdsService.setPrivacySettings", [l])), f;
                var n = l.restrictDataProcessing,
                    m = l.childDirectedTreatment,
                    p = l.underAgeOfConsent,
                    r = l.limitedAds,
                    u = l.nonPersonalizedAds,
                    x = l.userOptedOutOfPersonalization,
                    G = l.trafficSource,
                    D, F = null != (D = jn(g)) ? D : new eH;
                "boolean" === typeof u ? _.z(F, 8, u) : void 0 !== u && M(b, xl("PubAdsService.setPrivacySettings", yl(l), "nonPersonalizedAds", yl(u)));
                "boolean" === typeof x ? _.z(F, 13, x) : void 0 !== x && M(b, xl("PubAdsService.setPrivacySettings", yl(l), "userOptedOutOfPersonalization", yl(x)));
                "boolean" === typeof n ? _.z(F, 1, n) : void 0 !== n && M(b, xl("PubAdsService.setPrivacySettings", yl(l), "restrictDataProcessing", yl(n)));
                "boolean" === typeof r ? (n = Dl(), r && !_.E(F, 9) && a.Rc && (u = a.Pb, x = Mh(a), D = new ay, D = _.ld(D, 1, !0), D = _.ld(D, 2, n), x = _.Oh(x, 11, Ph, D), ze(u, x)), n ? _.z(F, 9, r) : r && M(b, UJ())) : void 0 !== r && M(b, xl("PubAdsService.setPrivacySettings", yl(l), "limitedAds", yl(r)));
                void 0 !== p && (null === p ? F.setTagForUnderAgeOfConsent(2) : !1 === p ? F.setTagForUnderAgeOfConsent(0) : !0 === p ? F.setTagForUnderAgeOfConsent(1) : M(b, xl("PubAdsService.setPrivacySettings", yl(l), "underAgeOfConsent", yl(p))));
                void 0 !== m && (null === m ? F.clearTagForChildDirectedTreatment() : !1 === m ? F.setTagForChildDirectedTreatment(0) : !0 === m ? F.setTagForChildDirectedTreatment(1) : M(b, xl("PubAdsService.setPrivacySettings", yl(l), "childDirectedTreatment", yl(m))));
                void 0 !== G && (null === G ? $f(F, 10) : (_.B = _.t(Object, "values").call(Object, ll), _.t(_.B, "includes")).call(_.B, G) ? _.z(F, 10, G) : M(b, xl("PubAdsService.setPrivacySettings", yl(l), "trafficSource", yl(G))));
                _.Lh(g, 25, F);
                return f
            })
        };
    _.O(Kl, WJ);
    var wp = function(a, b) {
        var c = this,
            d = [],
            e = [];
        this.addSize = Rh(a, 88, function(f, g) {
            var h;
            if (h = Ol(f)) h = g, h = Nl(h) || Array.isArray(h) && h.every(Nl);
            h ? (_.C(hz) && (h = im(g), h !== g && (g = Dk([f, g]), g = g.substring(1, g.length - 1), M(b, new Ck(151, ["SizeMappingBuilder.addSize", g])), g = h)), d.push([f, g])) : (e.push([f, g]), M(b, Ek("SizeMappingBuilder.addSize", [f, g])));
            return c
        });
        this.build = Rh(a, 89, function() {
            if (e.length) return M(b, YI(yl(e))), null;
            wa(d);
            return d
        })
    };
    var qK = function(a, b) {
        this.getId = I(a, 593, function() {
            return b.getId()
        });
        this.getAdUnitPath = I(a, 594, function() {
            return b.getAdUnitPath()
        });
        this.getName = I(a, 595, function() {
            return b.getName()
        });
        this.toString = I(a, 596, function() {
            return b.toString()
        });
        this.getDomId = I(a, 597, function() {
            return b.getDomId()
        })
    };
    var hi = function(a) {
        _.Q.call(this, a, -1, rK)
    };
    _.O(hi, _.Q);
    var rK = [2];
    var tK = function(a) {
        _.Q.call(this, a, -1, sK)
    };
    _.O(tK, _.Q);
    tK.prototype.getAdUnitPath = function() {
        return _.Kf(this, 1)
    };
    tK.prototype.getDomId = function() {
        return _.Kf(this, 2)
    };
    var uK = function(a, b) {
        _.z(a, 2, b)
    };
    tK.prototype.wa = function() {
        return Te(this, dl, 3)
    };
    tK.prototype.getServices = function(a) {
        return Eu(this, 4, a)
    };
    var vK = function(a, b) {
        _.Dd(a, 5, b)
    };
    tK.prototype.getClickUrl = function() {
        return _.Kf(this, 7)
    };
    tK.prototype.setClickUrl = function(a) {
        return _.z(this, 7, a)
    };
    tK.prototype.getCategoryExclusions = function(a) {
        return Eu(this, 8, a)
    };
    var al = function(a) {
        return Te(a, dl, 9)
    };
    tK.prototype.kb = function() {
        return dg(this, ul, 13)
    };
    var Dm = function(a) {
            return _.Ve(a, 15, 0)
        },
        $n = function(a, b) {
            _.Pf(a, 27, Jv, b)
        },
        wK = function(a) {
            return dd(a, y(a, 26), 26, void 0, Rc)
        },
        sK = [3, 4, 5, 6, 8, 9, 27];
    var xK = function() {
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
            this.isBackfill = !1;
            this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null
        },
        yK = function(a, b) {
            a.advertiserId = b
        },
        zK = function(a, b) {
            a.campaignId = b
        },
        AK = function(a, b) {
            a.yieldGroupIds = b
        },
        BK = function(a, b) {
            a.companyIds = b
        };
    var CK = function(a, b) {
        this.width = a;
        this.height = b
    };
    CK.prototype.getWidth = function() {
        return this.width
    };
    CK.prototype.getHeight = function() {
        return this.height
    };
    var lm = function(a, b, c) {
        var d = this,
            e = Zn(hj(), c.getDomId()),
            f = "",
            g = null,
            h = function() {
                return ""
            },
            k = "",
            l = !1;
        _.Qn(c, function() {
            e = new tK;
            f = "";
            g = null;
            h = function() {
                return ""
            };
            k = ""
        });
        c.Z(xq, function(m) {
            var p = m.detail;
            m = p.gf;
            p = p.isBackfill;
            m && (f = m, l = p)
        });
        this.set = I(a, 40, function(m, p) {
            if ("string" !== typeof m || "string" !== typeof p || void 0 === HI()[m]) return M(b, Ek("Slot.set", [m, p]), c), d;
            var r = (_.B = e.wa(), _.t(_.B, "find")).call(_.B, function(u) {
                return y(u, 1) === m
            });
            r ? bl(r, [p]) : (r = cl(new dl, m), aH(r, p), _.Pf(e, 3, dl, r));
            return d
        });
        this.get = I(a, 41, function(m) {
            if ("string" !== typeof m) return M(b, Ek("Slot.get", [m]), c), null;
            var p = (_.B = e.wa(), _.t(_.B, "find")).call(_.B, function(r) {
                return y(r, 1) === m
            });
            return (p = p && _.Tm(p, 2)) ? p[0] : null
        });
        this.getAttributeKeys = I(a, 42, function() {
            return e.wa().map(function(m) {
                return _.Kf(m, 1)
            })
        });
        this.addService = I(a, 43, function(m) {
            m = yk.get(m);
            if (!m) return M(b, Ek("Slot.addService", [m]), c), d;
            var p = m.getName();
            if ((_.B = _.Tm(e, 4), _.t(_.B, "includes")).call(_.B, p)) return b.info(NI(p, c.toString()), c), d;
            m.slotAdded(c, e);
            return d
        });
        this.defineSizeMapping = I(a, 44, function(m) {
            try {
                var p = e;
                if (!Array.isArray(m)) throw new jm("Size mapping must be an array");
                var r = m.map(km);
                _.Dd(p, 6, r)
            } catch (u) {
                m = u, Vh(a, 44, m), Dx("Incorrect usage of googletag.Slot defineSizeMapping: " + m.message)
            }
            return d
        });
        this.setClickUrl = I(a, 45, function(m) {
            if ("string" !== typeof m) return M(b, Ek("Slot.setClickUrl", [m]), c), d;
            e.setClickUrl(m);
            return d
        });
        this.setCategoryExclusion = I(a, 46, function(m) {
            "string" !== typeof m || $k(m) ? M(b, Ek("Slot.setCategoryExclusion", [m]), c) : ((_.B = _.Tm(e, 8), _.t(_.B, "includes")).call(_.B, m) || Fu(e, 8, m), b.info(OI(m), c));
            return d
        });
        this.clearCategoryExclusions = I(a, 47, function() {
            _.z(e, 8, Vc);
            b.info(PI(), c);
            return d
        });
        this.getCategoryExclusions = I(a, 48, function() {
            return _.Tm(e, 8).slice()
        });
        this.setTargeting = I(a, 49, function(m, p) {
            fl(c, e, m, p, b);
            return d
        });
        this.updateTargetingFromMap = I(a, 649, function(m) {
            gl(c, e, m, b);
            return d
        });
        this.clearTargeting = I(a, 50, function(m) {
            if (void 0 === m) return _.Dd(e, 9), b.info(QI(c.getAdUnitPath()), c), d;
            var p = al(e),
                r = _.t(p, "findIndex").call(p, function(u) {
                    return y(u, 1) === m
                });
            if (0 > r) return M(b, oJ(m, c.getAdUnitPath()), c), d;
            p.splice(r, 1);
            _.Dd(e, 9, p);
            b.info(uJ(m, c.getAdUnitPath()), c);
            return d
        });
        this.getTargeting = I(a, 51, function(m) {
            if ("string" !== typeof m) return M(b, Ek("Slot.getTargeting", [m]), c), [];
            var p = (_.B = al(e), _.t(_.B, "find")).call(_.B, function(r) {
                return y(r, 1) === m
            });
            return p ? _.Tm(p, 2).slice() : []
        });
        this.getTargetingKeys = I(a, 52, function() {
            return al(e).map(function(m) {
                return _.Kf(m, 1)
            })
        });
        this.setCollapseEmptyDiv = I(a, 53, function(m, p) {
            p = void 0 === p ? !1 : p;
            if ("boolean" !== typeof m || "boolean" !== typeof p) return M(b, Ek("Slot.setCollapseEmptyDiv", [m, p]), c), d;
            _.z(e, 10, m);
            _.z(e, 11, m && p);
            p && !m && M(b, RI(c.toString()), c);
            return d
        });
        this.getAdUnitPath = I(a, 54, function() {
            return c.getAdUnitPath()
        });
        this.getSlotElementId = I(a, 598, function() {
            return c.getDomId()
        });
        this.setForceSafeFrame = I(a, 55, function(m) {
            if ("boolean" !== typeof m) return M(b, Ek("Slot.setForceSafeFrame", [String(m)]), c), d;
            _.z(e, 12, m);
            return d
        });
        this.setSafeFrameConfig = I(a, 56, function(m) {
            var p = zl(b, m);
            if (!p) return b.error(Ek("Slot.setSafeFrameConfig", [m]), c), d;
            _.Lh(e, 13, p);
            return d
        });
        c.Z(nI, function(m) {
            m = m.detail;
            if (zu(m, 8)) g = null;
            else {
                g = new xK;
                var p = !!zu(m, 9);
                g.isBackfill = p;
                var r = Yc(m, 15, Fc),
                    u = Yc(m, 16, Fc);
                r.length && u.length && (g.sourceAgnosticCreativeId = r[0], g.sourceAgnosticLineItemId = u[0], p || (g.creativeId = r[0], g.lineItemId = u[0], (p = Yc(m, 22, Fc)) && p.length && (g.creativeTemplateId = p[0])));
                Yc(m, 17, Fc).length && yK(g, Yc(m, 17, Fc)[0]);
                Yc(m, 18, Fc).length && zK(g, Yc(m, 18, Fc)[0]);
                Yc(m, 19, Fc).length && AK(g, Yc(m, 19, Fc));
                Yc(m, 20, Fc).length && BK(g, Yc(m, 20, Fc));
                m = Yc(m, 45, ic(m.fa) & 18 ? Zc : $c).map(function(x) {
                    return td(x)
                });
                m.length && (g.encryptedTroubleshootingInfo = m[0])
            }
        });
        this.getResponseInformation = I(a, 355, function() {
            return g
        });
        this.getName = I(a, 170, function() {
            b.error(SJ());
            return c.getAdUnitPath()
        });
        var n = new qK(a, c);
        this.getSlotId = I(a, 579, function() {
            return n
        });
        this.getServices = I(a, 580, function() {
            return _.Tm(e, 4).map(function(m) {
                var p = YG[m];
                if (p) {
                    var r, u, x;
                    m = null != (x = null == (u = (r = Kk())[p]) ? void 0 : u.call(r)) ? x : null
                } else m = null;
                return m
            })
        });
        this.getSizes = I(a, 581, function(m, p) {
            var r, u;
            return null != (u = null == (r = ki(e, m, p)) ? void 0 : r.map(function(x) {
                return _.E(x, 3) ? "fluid" : new CK(x.getWidth(), x.getHeight())
            })) ? u : null
        });
        this.getClickUrl = I(a, 582, function() {
            var m;
            return null != (m = e.getClickUrl()) ? m : ""
        });
        this.getTargetingMap = I(a, 583, function() {
            for (var m = {}, p = _.w(al(e)), r = p.next(); !r.done; r = p.next()) r = r.value, _.Kf(r, 1) && (m[y(r, 1)] = _.Tm(r, 2));
            return m
        });
        this.getOutOfPage = I(a, 584, function(m) {
            return "number" === typeof m ? Dm(e) === m : 0 !== Dm(e)
        });
        this.getCollapseEmptyDiv = I(a, 585, function() {
            return Al(e, 10) ? _.E(e, 10) : null
        });
        this.getDivStartsCollapsed = I(a, 586, function() {
            return Al(e, 11) ? _.E(e, 11) : null
        });
        c.Z(oI, function(m) {
            h = m.detail.Kg
        });
        this.getContentUrl = I(a, 587, function() {
            return h()
        });
        this.getFirstLook = I(a, 588, function() {
            Dx("The getFirstLook method of SlotInterface is deprecated. Please update your code to no longer call this method.");
            return 0
        });
        c.Z(nI, function(m) {
            var p;
            k = null != (p = m.detail.getEscapedQemQueryId()) ? p : ""
        });
        this.getEscapedQemQueryId = I(a, 591, function() {
            return k
        });
        this.getHtml = I(a, 592, function() {
            return l ? (window.console && console.warn && console.warn("This ad's html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead."), "") : f
        });
        this.setConfig = I(a, 1022, function(m) {
            if (_.na(m)) {
                if (m = m.componentAuction, null != m) {
                    var p = {
                        componentAuction: m
                    };
                    if (_.na(p)) {
                        if (m = wK(e), void 0 !== p.componentAuction) {
                            p = _.w(p.componentAuction);
                            for (var r = p.next(); !r.done; r = p.next()) {
                                var u = r.value;
                                r = u.configKey;
                                u = u.auctionConfig;
                                "string" !== typeof r || $k(r) || (null === u ? m.delete(r) : u && m.set(r, JSON.stringify(u)))
                            }
                        }
                    } else M(b, Ek("googletag.Slot.setConfig", [p]))
                }
            } else M(b, Ek("googletag.slot.setConfig", [m]))
        })
    };
    var DK = null;
    var EK = {},
        vm = (EK[64] = LJ, EK[134217728] = MJ, EK[32768] = NJ, EK[536870912] = OJ, EK[8] = PJ, EK[512] = QJ, EK[1048576] = RJ, EK[4194304] = TJ, EK);
    var Em = function(a) {
        return "22639388115" === Fh(a.getAdUnitPath())
    };
    var Qm = {
        la: "|"
    };
    var $m = 0,
        FK = new _.Oi(-9, -9);
    var cn = 0;
    var fn = new _.v.Set([function(a, b) {
            var c = a.aa.O.U;
            b.set("pvsid", {
                value: a.da.context.pvsid
            }).set("correlator", {
                value: y(c, 26)
            })
        }, function(a, b) {
            a = a.mg;
            var c = a.yc;
            "wbn" === a.Kc && b.set("wbsu", {
                value: c
            })
        }, function(a, b) {
            var c = a.aa.O.U,
                d = a.Ih;
            a = d.wg;
            var e = d.ai;
            d = d.Ch;
            _.C(Ky) || (c = 0 === _.Ve(c, 24, 0), b.set("adsid", {
                value: c ? a : null
            }).set("pucrd", {
                value: c ? e : null
            }).set("jar", {
                value: d
            }))
        }, function(a, b) {
            var c = a.aa.O.U,
                d = a.Di;
            a = d.nc;
            d = d.mc;
            var e = _.E(c, 21);
            b = b.set("hxva", {
                value: e ? 1 : null
            }).set("cmsid", {
                value: e ? y(c, 23) : null
            }).set("vid", {
                value: e ? y(c, 22) : null
            }).set("pod", {
                value: d
            }).set("ppos", {
                value: a
            });
            c = y(c, 29);
            b.set.call(b, "scor", {
                value: null == c ? void 0 : c
            })
        }, function(a, b) {
            var c = a.aa,
                d = c.Y,
                e = c.O.V;
            c = a.Yh;
            var f = c.oh,
                g = c.ih;
            b.set("eid", {
                value: a.da.ne
            }).set("debug_experiment_id", {
                value: dB().split(",")
            }).set("expflags", {
                value: _.Ih(253) ? _.rf(Bf).j(Ay.j, Ay.defaultValue) || null : null
            }).set("pied", {
                value: function() {
                    var h = new DG,
                        k = !1,
                        l = !1;
                    f && (k = !0, _.Pf(h, 1, Jv, f));
                    var n = d.map(function(p) {
                        var r = new AG,
                            u;
                        p = null == (u = e[p.getDomId()]) ? void 0 : Te(u, Jv, 27);
                        if (null == p || !p.length) return r;
                        l = k = !0;
                        u = _.w(p);
                        for (p = u.next(); !p.done; p = u.next()) _.Pf(r, 1, Jv, p.value);
                        return r
                    });
                    l && _.Dd(h, 2, n);
                    n = _.w(null != g ? g : []);
                    for (var m = n.next(); !m.done; m = n.next()) _.Pf(h, 1, Jv, m.value), k = !0;
                    return k ? Pb(h.m(), 3) : null
                }()
            })
        }, function(a, b) {
            var c = a.da,
                d = c.context;
            c = c.Oa;
            b.set("output", {
                value: a.mg.Kc
            }).set("gdfp_req", {
                value: 1
            }).set("vrg", {
                value: d.Lb ? String(d.Lb) : d.Wa
            }).set("ptt", {
                value: 17
            }).set("impl", {
                value: c ? "fifs" : "fif"
            })
        }, function(a, b) {
            a = a.aa.O.U;
            b.set("co", {
                value: 0 !== _.Ve(a, 24, 0) ? _.Ve(a, 24, 0) : null,
                options: {
                    xa: !0
                }
            })
        }, function(a, b) {
            var c = a.da.W;
            a = jn(a.aa.O.U) || new eH;
            var d = _.Ve(a, 6, 2);
            b.set("rdp", {
                value: _.E(a, 1) ? "1" : null
            }).set("ltd", {
                value: _.E(a, 9) ? "1" : null
            }).set("gdpr_consent", {
                value: Hu(c, 2)
            }).set("gdpr", {
                value: Al(c, 3) ? _.E(c, 3) ? "1" : "0" : null,
                options: {
                    xa: !0
                }
            }).set("addtl_consent", {
                value: Hu(c, 4)
            }).set("tcfe", {
                value: Iu(c, 7)
            }).set("us_privacy", {
                value: Hu(c, 1)
            }).set("npa", {
                value: _.E(c, 6) || _.E(a, 8) ? 1 : null
            }).set("puo", {
                value: _.C(Xy) && _.E(a, 13) ? 1 : null
            }).set("tfua", {
                value: 2 !== d ? d : null,
                options: {
                    xa: !0
                }
            }).set("tfcd", {
                value: null != y(a, 5) ? _.Ve(a, 5, 0) : null,
                options: {
                    xa: !0
                }
            }).set("trt", {
                value: null != y(a, 10) ? _.Ve(a, 10, 0) : null,
                options: {
                    xa: !0
                }
            }).set("tad", {
                value: Al(c, 8) ? _.E(c, 8) ? "1" : "0" : null,
                options: {
                    xa: !0
                }
            })
        }, function(a, b) {
            var c = a.aa,
                d = c.O,
                e = c.Y,
                f = c.ue;
            a = a.da;
            var g = a.G,
                h = a.L,
                k = a.Oa;
            a = {
                la: "~"
            };
            var l = e.map(function(m) {
                    return d.V[m.getDomId()]
                }),
                n = [];
            c = e.map(function(m) {
                return m.getAdUnitPath().replace(/,/g, ":").split("/").map(function(p) {
                    if (!p) return "";
                    var r = _.t(n, "findIndex").call(n, function(u) {
                        return u === p
                    });
                    return 0 <= r ? r : n.push(p) - 1
                }).join("/")
            });
            b.set("iu_parts", {
                value: n
            }).set("enc_prev_ius", {
                value: c
            }).set("prev_iu_szs", {
                value: l.map(function(m) {
                    return ni(m)
                })
            }).set("fluid", {
                value: function() {
                    var m = !1,
                        p = l.map(function(r) {
                            r = (_.B = mi(r), _.t(_.B, "includes")).call(_.B, "fluid");
                            m || (m = r);
                            return r ? "height" : "0"
                        });
                    return m ? p : null
                }()
            }).set("ifi", {
                value: function() {
                    var m = wj(g);
                    if (!f) {
                        m += 1;
                        var p = g,
                            r = e.length;
                        r = void 0 === r ? 1 : r;
                        p = Px(te(p)) || p;
                        p.google_unique_id = (p.google_unique_id || 0) + r
                    }
                    return m
                }()
            }).set("adks", {
                value: e.map(function(m) {
                    if (k) {
                        var p = d.V[m.getDomId()];
                        p = pi(p);
                        if (m = h.j.get(m)) m.xc = p;
                        return p
                    }
                    p = d.U;
                    var r = d.V[m.getDomId()],
                        u;
                    if (!(u = qr(h, m))) {
                        p = pi(r, _.E(p, 6) || _.E(r, 17) ? null : Yi(m));
                        if (m = h.j.get(m)) m.xc = p;
                        u = p
                    }
                    return u
                })
            }).set("didk", {
                value: _.C(fz) ? um(e, function(m) {
                    return _.oi(m.getDomId())
                }, a) : null,
                options: _.t(Object, "assign").call(Object, {}, a, {
                    Ib: !0
                })
            })
        }, function(a, b) {
            var c = a.aa;
            a = c.Y;
            c = c.O;
            var d = c.U,
                e = c.V;
            b.set("sfv", {
                value: gK ? gK : gK = pl()
            }).set("fsfs", {
                value: um(a, function(f) {
                    f = e[f.getDomId()];
                    var g;
                    return Number(null != (g = null == f ? void 0 : ri(f, 12)) ? g : zu(d, 13))
                }, {
                    Cc: 0
                }),
                options: {
                    la: ",",
                    Zd: 0,
                    Ib: !0
                }
            }).set("fsbs", {
                value: um(a, function(f) {
                    f = e[f.getDomId()].kb();
                    var g = d.kb(),
                        h;
                    return (null != (h = null == f ? void 0 : ri(f, 3)) ? h : null == g ? 0 : _.E(g, 3)) ? 1 : 0
                }, {
                    Cc: 0
                }),
                options: {
                    Zd: 0,
                    Ib: !0
                }
            })
        }, function(a, b) {
            var c = a.da,
                d = c.L,
                e = c.G;
            a = a.aa;
            c = a.Y;
            var f = a.ue;
            b.set("ris", {
                value: um(c, function(g) {
                    var h, k;
                    g = null != (k = null == (h = d.j.get(g)) ? void 0 : h.Df) ? k : 0;
                    h = _.nf(e);
                    return g && h ? Math.round(Math.min((h - g) / 1E3, 1800)) : null
                }, {
                    la: "~"
                }),
                options: {
                    la: "~",
                    Ib: !0
                }
            }).set("rcs", {
                value: um(c, function(g) {
                    if (!f) {
                        var h = void 0 === h ? _.q : h;
                        var k = d.j.get(g);
                        k && (k.Df = _.nf(h) || 0, k.Vf++)
                    }
                    return CI(d, g)
                }, {
                    Cc: 0
                }),
                options: {
                    Zd: 0,
                    Ib: !0
                }
            })
        }, function(a, b) {
            var c = a.aa;
            a = a.da.Oa;
            c = c.O.V[c.Y[0].getDomId()];
            b.set("click", {
                value: !a && c.getClickUrl() ? y(c, 7) : null
            })
        }, function(a, b, c) {
            var d = a.aa,
                e = d.Y,
                f = d.O.V;
            a = a.da;
            var g = a.W,
                h = a.G;
            c = void 0 === c ? function(k, l) {
                return gf(k, l)
            } : c;
            a = e.map(function(k) {
                return f[k.getDomId()]
            });
            b.set("ists", {
                value: tm(a, function(k) {
                    return 0 !== Dm(k)
                }) || null
            }).set("fas", {
                value: um(a, function(k) {
                    return Hm(Dm(k))
                }, {
                    Cc: 0
                }),
                options: {
                    Zd: 0,
                    Ib: !0
                }
            }).set("itsi", {
                value: e.some(function(k) {
                    var l;
                    return !Em(k) && 5 === (null == (l = f[k.getDomId()]) ? void 0 : Dm(l))
                }) ? function() {
                    var k = c(g, h);
                    if (!k) return 1;
                    var l;
                    k = Math.max.apply(Math, _.xe(null != (l = _.Bm(k, 604800)) ? l : []));
                    return isFinite(k) ? Math.floor(Math.max((Date.now() - k) / 6E4, 1)) : null
                }() : null
            })
        }, function(a, b) {
            a = a.aa;
            var c = a.O.V;
            a = a.Y.map(function(d) {
                return c[d.getDomId()]
            });
            b.set("rbvs", {
                value: tm(a, function(d) {
                    return 4 === Dm(d)
                }) || null
            })
        }, function(a, b) {
            var c = a.aa,
                d = c.O,
                e = c.O.U,
                f = c.Y;
            c = c.yb;
            var g = a.da;
            a = g.isSecureContext;
            g = g.G;
            b = b.set("prev_scp", {
                value: Rm(f, d),
                options: {
                    Ib: !0,
                    la: "|"
                }
            });
            var h = b.set,
                k = d.U,
                l = d.V,
                n = new pj;
            n.set(0, 1 !== c);
            l = l[f[0].getDomId()];
            n.set(1, !!_.E(l, 17));
            n.set(2, Ym(f, d));
            n.set(3, _.E(k, 27) || !1);
            n.set(4, 3 === c);
            d = sj(n);
            h.call(b, "eri", {
                value: d
            }).set("cust_params", {
                value: Um(e),
                options: {
                    la: "&"
                }
            }).set("ppid", {
                value: 1 !== _.Ve(e, 24, 0) && _.Uf(e, 16) ? _.Kf(e, 16) : null,
                options: {
                    xa: !0
                }
            }).set("gct", {
                value: Nm("google_preview", g)
            }).set("sc", {
                value: a ? 1 : 0,
                options: {
                    xa: !0
                }
            })
        }, function(a, b) {
            var c = a.da,
                d = c.G,
                e = c.W;
            c = c.ua;
            a = a.aa.O.U;
            var f = Vm(a.wa());
            if (0 === _.Ve(a, 24, 0)) {
                var g = _.bC(c, "__gads", e);
                a = "1" === _.bC(c, "__gpi_opt_out", e) ? "1" : null;
                b = b.set("cookie", {
                    value: g,
                    options: {
                        xa: !0
                    }
                }).set("cookie_enabled", {
                    value: !g && cC(c, e) ? "1" : null
                });
                g = d.document;
                var h = g.domain;
                d = b.set.call(b, "cdm", {
                    value: (f || Mi(d)) === g.URL ? "" : h
                });
                f = d.set;
                e = (e = _.bC(c, "__gpi", e)) && !_.t(e, "includes").call(e, "&") ? e : null;
                f.call(d, "gpic", {
                    value: e
                }).set("gpico", {
                    value: a
                }).set("pdopt", {
                    value: a
                })
            }
        }, function(a, b) {
            a = a.da.G;
            b.set("arp", {
                value: om(a) ? 1 : null
            }).set("abxe", {
                value: _.qe(a.top) || xx(a.IntersectionObserver) ? 1 : null
            })
        }, function(a, b) {
            var c = a.da.G;
            a = Vm(a.aa.O.U.wa());
            b.set("dt", {
                value: (new Date).getTime()
            });
            if (!a) {
                try {
                    var d = Math.round(Date.parse(c.document.lastModified) / 1E3) || null
                } catch (e) {
                    d = null
                }
                b.set("lmt", {
                    value: d
                })
            }
            d = cn;
            c = pf(c);
            0 < c && d >= c && b.set("dlt", {
                value: c
            }).set("idt", {
                value: d - c
            })
        }, function(a, b) {
            var c = a.aa,
                d = c.O,
                e = c.Y,
                f = c.O;
            c = f.U;
            f = f.V;
            var g = a.da;
            a = g.G;
            var h = g.Oa;
            g = li(!0, a);
            for (var k = a.document, l = [], n = [], m = _.w(e), p = m.next(); !p.done; p = m.next()) {
                p = p.value;
                var r = f[p.getDomId()];
                p = dj(p, r, k, si(c, r));
                r = void 0;
                var u = h ? null != (r = p) ? r : FK : p;
                u && (l.push(Math.round(u.x)), n.push(Math.round(u.y)))
            }
            g && (d.oc = g);
            c = Li(a) ? null : li(!1, a);
            try {
                var x = a.top;
                var G = Zm(x.document, x)
            } catch (D) {
                G = new _.Oi(-12245933, -12245933)
            }
            b.set("adxs", {
                value: l
            }).set("adys", {
                value: n
            }).set("biw", {
                value: g ? g.width : null
            }).set("bih", {
                value: g ? g.height : null
            }).set("isw", {
                value: g ? null == c ? void 0 : c.width : null
            }).set("ish", {
                value: g ? null == c ? void 0 : c.height : null
            }).set("scr_x", {
                value: Math.round(G.x),
                options: {
                    xa: !0
                }
            }).set("scr_y", {
                value: Math.round(G.y),
                options: {
                    xa: !0
                }
            }).set("btvi", {
                value: an(e, a, d),
                options: {
                    xa: !0,
                    la: "|"
                }
            })
        }, function(a, b) {
            var c = a.da.L;
            b.set("ucis", {
                value: a.aa.Y.map(function(d) {
                    d = c.j.get(d);
                    null != d.Uc || (d.Uc = window === window.top ? (++c.A).toString(36) : Tw());
                    return d.Uc
                }),
                options: {
                    la: "|"
                }
            }).set("oid", {
                value: 2
            })
        }, function(a, b) {
            a = a.aa;
            var c = a.Y,
                d = a.O,
                e = d.V;
            a = new _.v.Map;
            d = _.w(d.U.wa());
            for (var f = d.next(); !f.done; f = d.next()) {
                var g = f.value;
                a.set(_.Kf(g, 1), [_.Tm(g, 2)[0]])
            }
            for (d = 0; d < c.length; d++)
                if (g = e[c[d].getDomId()])
                    for (g = _.w(g.wa()), f = g.next(); !f.done; f = g.next()) {
                        var h = f.value;
                        f = _.Kf(h, 1);
                        var k = a.get(f) || [];
                        h = _.Tm(h, 2)[0];
                        1 === c.length ? k[0] = h : h !== k[0] && (k[d + 1] = h);
                        a.set(f, k)
                    }
            c = [];
            e = _.w(_.t(a, "keys").call(a));
            for (d = e.next(); !d.done; d = e.next()) g = d.value, d = HI()[g], g = a.get(g), d && g && (1 < g.length ? (g = g.map(function(l) {
                return encodeURIComponent(l || "")
            }).join(), c.push(d + "," + g)) : 1 === g.length && "url" !== d && b.set(d, {
                value: g[0]
            }));
            c.length && b.set("sps", {
                value: c,
                options: {
                    la: "|"
                }
            })
        }, function(a, b) {
            var c = a.aa.O.U,
                d = a.da;
            a = d.G;
            var e = d.Ai;
            d = d.lb;
            e = e ? Qe(e) : _.Ih(251);
            var f, g, h, k, l, n, m;
            var p = a;
            p = void 0 === p ? Lw : p;
            try {
                var r = p.history.length
            } catch (gb) {
                r = 0
            }
            b = b.set("u_his", {
                value: r
            }).set("u_h", {
                value: null == (f = a.screen) ? void 0 : f.height
            }).set("u_w", {
                value: null == (g = a.screen) ? void 0 : g.width
            }).set("u_ah", {
                value: null == (h = a.screen) ? void 0 : h.availHeight
            }).set("u_aw", {
                value: null == (k = a.screen) ? void 0 : k.availWidth
            }).set("u_cd", {
                value: null == (l = a.screen) ? void 0 : l.colorDepth
            });
            f = b.set;
            g = a;
            g = void 0 === g ? _.q : g;
            g = g.devicePixelRatio;
            f = f.call(b, "u_sd", {
                value: "number" === typeof g ? +g.toFixed(3) : null
            }).set("u_tz", {
                value: -(new Date).getTimezoneOffset()
            });
            g = f.set;
            try {
                var u, x, G, D, F = null != (D = null == (u = a.external) ? void 0 : null == (x = u.getHostEnvironmentValue) ? void 0 : null == (G = x.bind(a.external)) ? void 0 : G("os-mode")) ? D : "",
                    N, L = Number(null == (N = JSON.parse(F)) ? void 0 : N["os-mode"]);
                var R = 0 <= L ? L + 1 : null
            } catch (gb) {
                R = null
            }
            R = g.call(f, "wsm", {
                value: R
            }).set("dmc", {
                value: null != (m = null == (n = a.navigator) ? void 0 : n.deviceMemory) ? m : null
            });
            n = R.set;
            (c = y(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = "a " + fu('role:1 producer:12 loc:"' + c + '"')) : c = "";
            c = n.call(R, "uule", {
                value: c
            });
            n = c.set;
            m = a;
            m = void 0 === m ? _.q : m;
            R = new pj;
            "SVGElement" in m && "createElementNS" in m.document && R.set(0);
            u = wx();
            u["allow-top-navigation-by-user-activation"] && R.set(1);
            u["allow-popups-to-escape-sandbox"] && R.set(2);
            m.crypto && m.crypto.subtle && R.set(3);
            "TextDecoder" in m && "TextEncoder" in m && R.set(4);
            m = sj(R);
            e = n.call(c, "bc", {
                value: m
            }).set("uach", {
                value: e ? fu(e, 3) : null
            });
            c = e.set;
            if (d) var S = null;
            else if (d = null == (S = a.navigator) ? void 0 : S.userActivation) {
                S = 0;
                if (null == d ? 0 : d.hasBeenActive) S |= 1;
                if (null == d ? 0 : d.isActive) S |= 2
            } else S = void 0;
            S = c.call(e, "uas", {
                value: S
            });
            d = S.set;
            a: {
                try {
                    var V, ja, da = null == (V = a.performance) ? void 0 : null == (ja = V.getEntriesByType("navigation")) ? void 0 : ja[0];
                    if (null == da ? 0 : da.type) {
                        var Fa;
                        var ta = null != (Fa = kG.get(da.type)) ? Fa : null;
                        break a
                    }
                } catch (gb) {}
                var qa, ia, Ta;ta = null != (Ta = lG.get(null == (qa = a.performance) ? void 0 : null == (ia = qa.navigation) ? void 0 : ia.type)) ? Ta : null
            }
            d.call(S, "nvt", {
                value: ta
            })
        }, function(a, b) {
            var c = a.da,
                d = c.G,
                e = c.L;
            c = c.Oa;
            a = a.aa;
            var f = a.Y;
            a = a.O;
            var g = a.U,
                h = a.V;
            a = Om("google_preview", d);
            var k = d.document,
                l = a ? Wm(k.URL) : k.URL;
            k = a ? Wm(k.referrer) : k.referrer;
            a = !1;
            if (c) c = Vm(g.wa());
            else {
                var n;
                c = null != (n = Vm(h[f[0].getDomId()].wa())) ? n : Vm(g.wa())
            }
            if (null != c) {
                var m = l;
                Li(d) || (k = "", a = !0)
            } else c = l;
            n = Xm(d);
            b.set("nhd", {
                value: n || null
            }).set("url", {
                value: c
            }).set("loc", {
                value: null !== m && m !== c ? m : null
            }).set("ref", {
                value: k
            });
            if (n) {
                m = b.set;
                var p, r;
                n = _.qe(d.top) && (null == (p = d.top) ? void 0 : null == (r = p.location) ? void 0 : r.href);
                var u;
                p = null == (u = d.location) ? void 0 : u.ancestorOrigins;
                d = fk(d) || "";
                u = (null == p ? void 0 : p[p.length - 1]) || "";
                d = (d = n || d || u) ? a ? lx(d.match(_.kx)[3] || null) : d : null;
                m.call(b, "top", {
                    value: d
                }).set("etu", {
                    value: e.Bc
                })
            }
        }, function(a, b) {
            a = a.da.context.pvsid;
            b.set("rumc", {
                value: _.C(yz) || _.rf(Th).j ? a : null
            }).set("rume", {
                value: _.C(Py) ? 1 : null
            })
        }, function(a, b) {
            a = a.da.G;
            var c = b.set;
            var d = Jx(a);
            var e = AA(a, a.google_ad_width, a.google_ad_height);
            var f = d.location.href;
            if (d === d.top) f = !0;
            else {
                var g = !1,
                    h = d.document;
                h && h.referrer && (f = h.referrer, d.parent === d.top && (g = !0));
                (d = d.location.ancestorOrigins) && (d = d[d.length - 1]) && -1 === f.indexOf(d) && (g = !1, f = d);
                f = g
            }
            g = a.top == a ? 0 : _.qe(a.top) ? 1 : 2;
            d = 4;
            e || 1 != g ? e || 2 != g ? e && 1 == g ? d = 7 : e && 2 == g && (d = 8) : d = 6 : d = 5;
            f && (d |= 16);
            e = "" + d;
            if (a != a.top)
                for (f = a; f && f != f.top && _.qe(f) && !f.sf_ && !f.$sf && !f.inGptIF && !f.inDapIF; f = f.parent);
            c.call(b, "frm", {
                value: e || null
            }).set("vis", {
                value: pG(a.document)
            })
        }, function(a, b) {
            var c = a.aa.Y;
            a = a.da.G;
            for (var d = [], e = [], f = _.w(c), g = f.next(); !g.done; g = f.next()) {
                var h = void 0,
                    k = void 0,
                    l = void 0;
                var n = a;
                g = Yi(g.value);
                var m = Ax((null == g ? void 0 : g.parentElement) && $i(g.parentElement, n) || null);
                !m || 1 === m[0] && 1 === m[3] ? (m = null != (l = null == g ? void 0 : g.parentElement) ? l : null, l = null != (k = Si(m)) ? k : new _.Ri(0, 0), sm(l, m, n, 100), k = null != (h = Si(g)) ? h : new _.Ri(0, 0), sm(k, g, n, 1), -1 === l.height && (k.height = -1), n = l, k = h = k, h = n.width + "x" + n.height, n = k.width + "x" + k.height) : n = h = "-1x-1";
                d.push(h);
                e.push(n)
            }
            null == DK && (f = AA(a, 500, 300), n = a.navigator, h = n.userAgent, k = n.platform, n = n.product, !/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && /^Opera/.test(h) ? h = !1 : /Win/.test(k) && /Trident/.test(h) && 11 <= a.document.documentMode ? h = !0 : (k = (/WebKit\/(\d+)/.exec(h) || [0, 0])[1], g = (/rv:(\d+\.\d+)/.exec(h) || [0, 0])[1], h = !k && "Gecko" === n && 27 <= g && !/ rv: 1\.8([^.] |\.0) /.test(h) || 536 <= k ? !0 : !1), DK = h && !f);
            g = 0 !== (0, _.Km)();
            f = li(!0, a, g).width;
            h = [];
            n = [];
            k = [];
            null !== a && a != a.top && (l = li(!1, a).width, (-12245933 === f || -12245933 === l || l < f) && k.push(8)); - 12245933 !== f && (1.5 * f < a.document.documentElement.scrollWidth ? k.push(10) : g && 1.5 * a.outerWidth < f && k.push(10));
            c = _.w(c);
            for (l = c.next(); !l.done; l = c.next()) {
                g = new pj;
                m = Yi(l.value);
                l = 0;
                var p = !1,
                    r = !1,
                    u = !1;
                if (m) {
                    for (var x = 0, G = m; G && 100 > x; x++, G = G.parentElement) {
                        var D = $i(G, a);
                        if (D) {
                            var F = D,
                                N = F.display,
                                L = F.overflowX;
                            if ("visible" !== F.overflowY && (g.set(2), (F = Si(G)) && (l = l ? Math.min(l, F.width) : F.width), g.get(9))) break;
                            qm(D) && g.set(9);
                            "none" === N && g.set(7);
                            "IFRAME" === G.nodeName && (D = parseInt(D.width, 10), D < f && (g.set(8), l = l ? Math.min(D, l) : D));
                            r || (r = "scroll" === L || "auto" === L);
                            p || (p = "flex" === N);
                            u || (u = "listbox" === G.role)
                        } else g.set(3)
                    }
                    if (!(u = _.C(qj) && u)) {
                        if (p = r && p) m = m.getBoundingClientRect().left, p = m > f || 0 > m;
                        u = p
                    }
                    u && g.set(11)
                } else g.set(1);
                m = _.w(k);
                for (p = m.next(); !p.done; p = m.next()) g.set(p.value);
                h.push(sj(g));
                n.push(l)
            }
            b.set("psz", {
                value: d,
                options: {
                    la: "|"
                }
            }).set("msz", {
                value: e,
                options: {
                    la: "|"
                }
            }).set("fws", {
                value: h
            }).set("ohw", {
                value: n
            }).set("ea", {
                value: DK ? null : "0",
                options: {
                    xa: !0
                }
            })
        }, function(a, b) {
            b.set("psts", {
                value: BI(a.da.L, a.aa.Y)
            })
        }, function(a, b) {
            var c = a.da;
            a = c.W;
            c = c.G;
            var d;
            var e = c.document.domain,
                f = null != (d = ff(a) && hf(c) ? c.document.cookie : null) ? d : "",
                g = c.history.length,
                h = c.screen,
                k = c.document.referrer;
            if (te()) var l = window.gaGlobal || {};
            else {
                var n = Math.round((new Date).getTime() / 1E3),
                    m = c.google_analytics_domain_name;
                e = "undefined" == typeof m ? wA("auto", e) : wA(m, e);
                var p = -1 < f.indexOf("__utma=" + e + "."),
                    r = -1 < f.indexOf("__utmb=" + e);
                (d = (Px() || window).gaGlobal) || (d = {}, (Px() || window).gaGlobal = d);
                var u = !1;
                if (p) {
                    var x = f.split("__utma=" + e + ".")[1].split(";")[0].split(".");
                    r ? d.sid = x[3] : d.sid || (d.sid = n + "");
                    d.vid = x[0] + "." + x[1];
                    d.from_cookie = !0
                } else {
                    d.sid || (d.sid = n + "");
                    if (!d.vid) {
                        u = !0;
                        r = Math.round(2147483647 * Math.random());
                        p = uA.appName;
                        var G = uA.version,
                            D = uA.language ? uA.language : uA.browserLanguage,
                            F = uA.platform,
                            N = uA.userAgent;
                        try {
                            x = uA.javaEnabled()
                        } catch (L) {
                            x = !1
                        }
                        x = [p, G, D, F, N, x ? 1 : 0].join("");
                        h ? x += h.width + "x" + h.height + h.colorDepth : _.q.java && _.q.java.awt && (h = _.q.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), x += h.screen.width + "x" + h.screen.height);
                        x = x + f + (k || "");
                        for (k = x.length; 0 < g;) x += g-- ^ k++;
                        d.vid = (r ^ vA(x) & 2147483647) + "." + n
                    }
                    d.from_cookie || (d.from_cookie = !1)
                }
                if (!d.cid) {
                    b: for (n = 999, m && (m = 0 == m.indexOf(".") ? m.substr(1) : m, n = m.split(".").length), m = 999, f = f.split(";"), x = 0; x < f.length; x++)
                        if (k = xA.exec(f[x]) || yA.exec(f[x]) || zA.exec(f[x])) {
                            h = k[1] || 0;
                            if (h == n) {
                                l = k[2];
                                break b
                            }
                            h < m && (m = h, l = k[2])
                        }u && l && -1 != l.search(/^\d+\.\d+$/) ? (d.vid = l, d.from_cookie = !0) : l != d.vid && (d.cid = l)
                }
                d.dh = e;
                d.hid || (d.hid = Math.round(2147483647 * Math.random()));
                l = d
            }
            e = l.sid;
            d = l.hid;
            u = l.from_cookie;
            f = l.cid;
            u && !ff(a) || b.set("ga_vid", {
                value: l.vid
            }).set("ga_sid", {
                value: e
            }).set("ga_hid", {
                value: d
            }).set("ga_fc", {
                value: u
            }).set("ga_cid", {
                value: f
            }).set("ga_wpids", {
                value: c.google_analytics_uacct
            })
        }, function(a, b) {
            a = a.da;
            var c = a.G;
            a = a.context.pvsid;
            b = b.set("js", {
                value: _.C(sy) ? BA(c) : null
            });
            var d = b.set;
            if (_.C(sy)) a: {
                var e = c;e = void 0 === e ? window : e;
                if (c = BA(e)) {
                    var f = null;
                    try {
                        "afma-gpt-sdk-a" == c ? f = e._gmptnl.pm("GAM=", a.toString()) || "5" : (f = e.__gmptnl_n || "5", e.webkit.messageHandlers._gmptnl.postMessage("GAM="))
                    } catch (g) {
                        a = "3";
                        break a
                    }
                    a = "string" === typeof f ? f : "3"
                } else a = null
            }
            else a = null;
            d.call(b, "ms", {
                value: a
            })
        }, function(a, b) {
            var c = a.da.G;
            a = c.navigator;
            c = c.document;
            _.C(Gz) || "runAdAuction" in a && "joinAdInterestGroup" in a && Pg("run-ad-auction", c) && b.set("td", {
                value: 1
            })
        }, function(a, b) {
            var c = a.ri.si;
            Pg("browsing-topics", a.da.G.document) && (b.set("topics", {
                value: c instanceof Uint8Array ? Pb(c, 3) : c
            }), !c || c instanceof Uint8Array || b.set("tps", {
                value: c
            }))
        }, function(a, b) {
            var c = a.da,
                d = c.G;
            c = c.W;
            var e = a.aa.Y,
                f = a.li;
            a = f.Th;
            var g = f.Ug;
            f = f.Kh;
            _.C(vz) || b.set("a3p", {
                value: Jf(gf(c, d), Fh(e[0].getAdUnitPath()), a, g, f)
            })
        }, function(a, b) {
            var c = a.dd.ed,
                d = a.aa.Y;
            a = {
                la: "~"
            };
            var e = function() {
                return c ? d.map(function(f) {
                    return c.get(f)
                }) : []
            }();
            b.set("cbidsp", {
                value: um(e, function(f) {
                    return Pb(f.m(), 3)
                }, a),
                options: _.t(Object, "assign").call(Object, {}, a, {
                    Ib: !0
                })
            })
        }, function(a, b) {
            a = a.aa.O.U;
            po(a.xd(), Ep, 1) && (a = Dp(a.xd(), Ep, 1), b.set("cmrv", {
                value: 1
            }).set("cmrq", {
                value: y(a, 1)
            }).set("cmrc", {
                value: _.Tm(a, 2),
                options: {
                    la: ">"
                }
            }).set("cmrids", {
                value: _.Tm(a, 3),
                options: {
                    la: "!"
                }
            }).set("cmrf", {
                value: y(a, 4)
            }))
        }, function(a, b) {
            var c = [];
            a = _.w(Te(Dp(a.aa.O.U.xd(), Gp, 2), bp, 1));
            for (var d = a.next(); !d.done; d = a.next()) d = d.value, _.Tm(d, 2).length && c.push(_.Ve(d, 1, 0) + "=" + _.Tm(d, 2).join("|"));
            b.set("pps", {
                value: c,
                options: {
                    la: "~"
                }
            })
        }, function(a, b) {
            b.set("scar", {
                value: a.Qh.mh
            })
        }, function(a, b) {
            a = a.da.G.document;
            _.C(xz) || Pg("attribution-reporting", a) && b.set("nt", {
                value: 1
            })
        }, function(a, b) {
            if (a = a.Wh.Vh) a = fu(Qe(a), 3), b.set("psd", {
                value: a
            })
        }]),
        HK = function(a) {
            if (null == a || !a.aa.Y.length) return "";
            for (var b = new _.v.Set(Df(en)), c = _.w(bn(a.da.W)), d = c.next(); !d.done; d = c.next()) b.add(d.value);
            c = new _.v.Map;
            d = _.w(fn);
            for (var e = d.next(); !e.done; e = d.next()) e = e.value, e(a, c);
            a = "https://" + (GK(a) ? "pagead2.googlesyndication.com" : "securepubads.g.doubleclick.net") + "/gampad/ads?";
            c = _.w(c);
            for (d = c.next(); !d.done; d = c.next()) {
                e = _.w(d.value);
                d = e.next().value;
                var f = e.next().value;
                e = f.value;
                f = void 0 === f.options ? {} : f.options;
                (new RegExp("[?&]" + d + "=")).test(a);
                if (!b.has(d) && null != e) {
                    var g = f;
                    f = void 0 === g.la ? "," : g.la;
                    g = void 0 === g.xa ? !1 : g.xa;
                    if (e = "object" !== typeof e ? null == e || !g && 0 === e ? null : encodeURIComponent(e) : Array.isArray(e) && e.length ? encodeURIComponent(e.join(f)) : null) "?" !== a[a.length - 1] && (a += "&"), a += d + "=" + e
                }
            }
            return a
        },
        GK = function(a) {
            var b = a.da.W,
                c, d;
            a = null != (d = null == (c = jn(a.aa.O.U)) ? void 0 : _.E(c, 9)) ? d : !1;
            c = _.E(b, 8);
            return a || c || !ff(b)
        };
    var LK = function(a, b, c, d) {
            var e = this;
            this.context = a;
            this.L = c;
            this.j = new _.v.Map;
            this.o = new _.v.Map;
            this.Ab = _.rf(Th);
            aI() && (_.yb(window, "DOMContentLoaded", Rh(a, 334, function() {
                for (var f = _.w(e.j), g = f.next(); !g.done; g = f.next()) {
                    var h = _.w(g.value);
                    g = h.next().value;
                    h = h.next().value;
                    IK(e, g, h) && e.j.delete(g)
                }
            })), b.Z(pI, function(f) {
                f = f.detail;
                var g = f.V;
                return void JK(e, KK(d, f.Pe), tq(g, 20))
            }), b.Z(qI, function(f) {
                f = f.detail;
                var g = f.V;
                f = KK(d, f.Pe);
                g = tq(g, 20);
                var h = e.o.get(f);
                null != h ? cI(h, g) : JK(e, f, g)
            }))
        },
        JK = function(a, b, c) {
            IK(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Qn(b, function() {
                return a.j.delete(b)
            }))
        },
        IK = function(a, b, c) {
            var d = Yi(b);
            if ("DIV" !== (null == d ? void 0 : d.nodeName)) return !1;
            d = new $H({
                G: window,
                Ab: a.Ab,
                tb: d,
                Ua: function(e) {
                    return void Vh(a.context, 336, e)
                },
                ni: _.C(yz)
            });
            if (!d.j) return !1;
            cI(d, c);
            a.o.set(b, d);
            xI(a.L, b, function() {
                return void a.o.delete(b)
            });
            return !0
        };
    var MK = function(a) {
        this.o = a;
        this.m = this.j = 0
    };
    MK.prototype.push = function() {
        for (var a = _.w(_.wb.apply(0, arguments)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                "function" === typeof b && (b.call(_.v.globalThis), this.j++)
            } catch (c) {
                this.m++, b = void 0, null == (b = window.console) || b.error("Exception in queued GPT command", c), this.o.error(WI(String(c)))
            }
        }
        this.o.info(XI(String(this.j), String(this.m)));
        return this.j
    };
    var Z = function(a, b, c) {
        LB.call(this, b, c);
        this.context = a
    };
    _.O(Z, LB);
    Z.prototype.R = function(a) {
        Vh(this.context, this.id, a);
        var b, c;
        null == (b = window.console) || null == (c = b.error) || c.call(b, a)
    };
    var NK = function(a, b, c, d, e) {
        var f = null,
            g = Rh(a.context, b, e);
        _.yb(c, d, g) && (f = function() {
            return _.De(c, d, g)
        }, _.Qn(a, f));
        return f
    };
    var OK = function(a, b, c) {
        Z.call(this, a, 937, _.Cf(Ty));
        this.window = c;
        this.Ra = W(this);
        this.Ub = W(this);
        this.l = W(this);
        this.A = W(this);
        this.ab = W(this);
        this.Db = W(this);
        this.D = OB(this, b)
    };
    _.O(OK, Z);
    OK.prototype.j = function() {
        if (this.window.top !== this.window) PK(this);
        else {
            var a = this.D.value;
            if (a) {
                var b = {},
                    c;
                if (null == (c = dg(a, zv, 2)) ? 0 : _.E(c, 2)) b["*"] = {
                    Zb: !0
                };
                c = new _.v.Set;
                for (var d = _.w(Te(a, yv, 1)), e = d.next(); !e.done; e = d.next()) {
                    e = e.value;
                    for (var f = _.w([_.Kf(e, 2), _.Kf(e, 1)].filter(function(r) {
                            return !!r
                        })), g = f.next(); !g.done; g = f.next()) b[g.value] = {
                        Zb: _.E(e, 3)
                    };
                    e = _.w(Yc(e, 4, Dc));
                    for (f = e.next(); !f.done; f = e.next()) c.add(f.value)
                }
                this.Ra.J(b);
                this.Ub.J([].concat(_.xe(c)));
                var h, k;
                b = null == (h = dg(a, zv, 2)) ? void 0 : null == (k = dg(h, tv, 1)) ? void 0 : Te(k, rv, 1);
                zB(this.l, (null == b ? 0 : b.length) ? b : null);
                var l;
                this.ab.J(!(null == (l = dg(a, zv, 2)) || !_.E(l, 4)));
                var n;
                this.Db.J(!(null == (n = dg(a, zv, 2)) || !_.E(n, 5)));
                var m, p;
                a = null == (m = dg(a, zv, 2)) ? void 0 : null == (p = dg(m, tv, 3)) ? void 0 : Te(p, rv, 1);
                zB(this.A, (null == a ? 0 : a.length) ? a : null)
            } else PK(this)
        }
    };
    var PK = function(a) {
        a.Ra.J({});
        a.Ub.J([]);
        AB(a.l);
        a.ab.J(!1);
        a.Db.J(!1);
        AB(a.A)
    };
    OK.prototype.I = function(a) {
        this.m(a)
    };
    OK.prototype.m = function() {
        PK(this)
    };
    var QK = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.l = d;
        this.B = new GB;
        this.A = [];
        this.l && (this.D = X(this, this.l.Jh), this.F = X(this, this.l.Ub), this.Ca = this.l.Ca);
        this.K = X(this, c);
        a = _.w(b);
        for (b = a.next(); !b.done; b = a.next()) this.A.push(X(this, b.value))
    };
    _.O(QK, Z);
    QK.prototype.j = function() {
        if (this.l) {
            (_.B = _.t(Object, "entries").call(Object, this.D.value), _.t(_.B, "find")).call(_.B, function(c) {
                var d = _.w(c);
                c = d.next().value;
                d = d.next().value;
                return "*" !== c && (null == d ? void 0 : d.Zb)
            }) && (this.Ca.o = !0);
            for (var a = _.w(this.F.value), b = a.next(); !b.done; b = a.next()) tf(b.value);
            uf(25)
        }
        a = _.w((_.B = [this.K.value, this.A.map(function(c) {
            return c.value
        })], _.t(_.B, "flat")).call(_.B));
        for (b = a.next(); !b.done; b = a.next()) tf(b.value);
        this.B.notify()
    };
    var RK = function(a, b) {
        Z.call(this, a, 892, _.Cf(Vy));
        this.l = W(this);
        this.D = W(this);
        this.A = W(this);
        this.Vb = W(this);
        this.jc = W(this);
        this.F = W(this);
        this.K = OB(this, b)
    };
    _.O(RK, Z);
    RK.prototype.j = function() {
        var a = this.K.value;
        if (!a) throw Error("config timeout");
        zB(this.l, dg(a, Bv, 3));
        zB(this.D, dg(a, Ev, 2));
        this.A.J(Yc(a, 4, Dc));
        zB(this.Vb, Te(a, wv, 6));
        zB(this.jc, Te(a, Wv, 5));
        zB(this.F, dg(a, Vv, 7))
    };
    RK.prototype.I = function(a) {
        this.m(a)
    };
    RK.prototype.m = function(a) {
        this.l.Fa(a);
        this.D.Fa(a);
        this.A.J([]);
        this.Vb.J([]);
        this.jc.J([]);
        AB(this.F)
    };
    var SK = function(a, b) {
        Z.call(this, a, 891);
        var c = this;
        this.l = W(this);
        this.error = void 0;
        var d = W(this);
        this.A = X(this, d);
        b ? b(function(e, f) {
            if (f) c.error = f, d.J([]);
            else try {
                if ("string" === typeof e) {
                    var g = JSON.parse(e || "[]");
                    Array.isArray(g) && d.J(g)
                }
            } catch (h) {} finally {
                d.qb || (c.error = Error("malformed response"), d.J([]))
            }
        }) : (this.error = Error("missing input"), d.J([]))
    };
    _.O(SK, Z);
    SK.prototype.j = function() {
        if (this.error) throw this.error;
        this.l.J(Ld(Zv, this.A.value))
    };
    var rn = function(a, b, c, d) {
        Z.call(this, a, 959);
        this.sb = b;
        this.B = W(this);
        this.l = X(this, b);
        PB(this, c);
        PB(this, d)
    };
    _.O(rn, Z);
    rn.prototype.j = function() {
        this.B.J(this.l.value)
    };
    var qn = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 874);
        this.A = b;
        this.L = c;
        this.G = d;
        this.F = e;
        this.l = NB(this);
        PB(this, f);
        this.D = X(this, g)
    };
    _.O(qn, Z);
    qn.prototype.j = function() {
        var a = this,
            b = new aA(this.G, {
                Za: -1,
                Ag: !0
            });
        _.Fn(this, b);
        if (cA(b)) {
            var c = this.L.I,
                d = c.status,
                e = function(f) {
                    var g = a.D.value,
                        h, k, l;
                    if (l = !(null == (h = a.F) ? 0 : _.E(h, 9))) {
                        var n = void 0 === n ? !1 : n;
                        l = gA(f) ? !1 === f.gdprApplies || "tcunavailable" === f.tcString || void 0 === f.gdprApplies && !n || "string" !== typeof f.tcString || !f.tcString.length ? !0 : eA(f, "1") : !1
                    }
                    h = _.z(g, 5, l);
                    l = !hA(f, ["3", "4"]);
                    h = _.z(h, 9, l);
                    h = _.z(h, 2, f.tcString);
                    l = null != (k = f.addtlConsent) ? k : "";
                    k = _.z(h, 4, l);
                    _.z(k, 7, f.internalErrorState);
                    null != f.gdprApplies && _.z(g, 3, f.gdprApplies);
                    _.C(iz) && !hA(f, ["2", "7", "9", "10"]) && _.z(g, 8, !0);
                    a.l.notify()
                };
            switch (d) {
                case 2:
                    e(c.data);
                    break;
                case 1:
                    c.j.push(e);
                    break;
                case 0:
                    c.data = void 0;
                    c.status = 1;
                    c.j.push(e);
                    this.A.info(EJ());
                    b.addEventListener(function(f) {
                        gA(f) ? ("tcunavailable" === f.tcString ? a.A.info(FJ("failed")) : a.A.info(FJ("succeeded")), c.data = f, c.status = 2, c.vd().forEach(function(g) {
                            g(f)
                        }), c.Ud()) : (c.data = void 0, c.status = 1)
                    });
                    break;
                default:
                    throw Error("Impossible TCDataCacheStatus: " + d);
            }
        } else this.l.notify()
    };
    var pn = function(a, b, c, d, e) {
        Z.call(this, a, 875);
        this.D = b;
        this.G = c;
        this.l = NB(this);
        PB(this, d);
        this.A = X(this, e)
    };
    _.O(pn, Z);
    pn.prototype.j = function() {
        var a = this,
            b = new JA(this.G);
        _.Fn(this, b);
        if (EA(b.caller)) {
            var c = Rh(this.context, 660, function(d) {
                d && "string" === typeof d.uspString && _.z(a.A.value, 1, d.uspString);
                a.l.notify()
            });
            this.D.info(DJ());
            KA(b, c)
        } else this.l.notify()
    };
    var nn = function(a, b) {
        Z.call(this, a, 958);
        this.l = b;
        this.sb = W(this)
    };
    _.O(nn, Z);
    nn.prototype.j = function() {
        var a = new $B,
            b, c = null == (b = this.l) ? void 0 : _.E(b, 9);
        _.z(a, 5, !c);
        this.sb.J(a)
    };
    var on = function(a, b, c, d) {
        d = void 0 === d ? .001 : d;
        Z.call(this, a, 960);
        this.G = b;
        this.A = d;
        this.l = X(this, c)
    };
    _.O(on, Z);
    on.prototype.j = function() {
        var a = this;
        Xh(this.context, 894, function() {
            return void oj("cmpMet", function(b) {
                vj(b, a.context);
                var c = new aA(a.G);
                _.Fn(a, c);
                var d = new JA(a.G);
                _.Fn(a, d);
                J(b, "fc", Number(a.l.value));
                J(b, "tcfv1", Number(!!a.G.__cmp));
                J(b, "tcfv2", Number(cA(c)));
                J(b, "usp", Number(!!EA(d.caller)));
                J(b, "ptt", 17)
            }, a.A)
        })
    };
    var TK = function(a, b, c, d) {
        Z.call(this, a, 980);
        this.Ca = b;
        this.B = new GB;
        this.l = X(this, c);
        this.A = X(this, d)
    };
    _.O(TK, Z);
    TK.prototype.j = function() {
        (_.B = _.t(Object, "entries").call(Object, this.l.value), _.t(_.B, "find")).call(_.B, function(c) {
            var d = _.w(c);
            c = d.next().value;
            d = d.next().value;
            return "*" !== c && (null == d ? void 0 : d.Zb)
        }) && (this.Ca.o = !0);
        uf(25);
        for (var a = _.w(this.A.value), b = a.next(); !b.done; b = a.next()) tf(b.value);
        this.B.notify()
    };
    var UK = function(a, b) {
        Z.call(this, a, 931);
        this.ob = W(this);
        this.ib = W(this);
        this.l = Y(this, b)
    };
    _.O(UK, Z);
    UK.prototype.j = function() {
        var a = this.l.value,
            b = new _.v.Map;
        this.ob.J(new _.v.Map);
        if (a) {
            var c;
            a = _.w(null != (c = this.l.value) ? c : []);
            for (c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = Te(d, pv, 1);
                c = 1 === _.Ve(c[0], 1, 0) ? Du(c[0]) : Gu(c[0], Cu);
                d = _.df(d, 2);
                var e = void 0;
                b.set(c, Math.min(null != (e = b.get(c)) ? e : Number.MAX_VALUE, d))
            }
        }
        this.ib.J(b)
    };
    UK.prototype.m = function() {
        this.ob.J(new _.v.Map);
        this.ib.J(new _.v.Map)
    };
    var VK = function(a, b) {
        Z.call(this, a, 981);
        this.A = W(this);
        this.l = W(this);
        this.D = Y(this, b)
    };
    _.O(VK, Z);
    VK.prototype.j = function() {
        var a = new _.v.Map,
            b, c = _.w(null != (b = this.D.value) ? b : []);
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            var d = Te(b, pv, 1);
            d = 1 === _.Ve(d[0], 1, 0) ? Du(d[0]) : Gu(d[0], Cu);
            a.set(d, _.df(b, 2))
        }
        this.A.J(a);
        this.l.J(new gv)
    };
    VK.prototype.m = function() {
        this.A.J(new _.v.Map);
        var a = this.l,
            b = a.J;
        var c = new gv;
        c = _.z(c, 1, 2);
        b.call(a, c)
    };
    var WK = function(a, b, c, d, e, f) {
        Z.call(this, a, 976);
        this.nextFunction = d;
        this.l = e;
        this.requestBidsConfig = f;
        PB(this, b);
        PB(this, c)
    };
    _.O(WK, Z);
    WK.prototype.j = function() {
        var a;
        null == (a = this.nextFunction) || a.apply(this.l, [this.requestBidsConfig])
    };
    var XK = function(a, b, c, d, e, f) {
        Z.call(this, a, 975);
        this.A = b;
        this.l = c;
        this.D = d;
        this.pbjs = e;
        this.requestBidsConfig = f;
        this.B = new GB
    };
    _.O(XK, Z);
    XK.prototype.j = function() {
        An(this.pbjs, this.A, this.l, this.D, this.requestBidsConfig);
        this.B.notify()
    };
    XK.prototype.m = function() {
        this.B.notify()
    };
    var YK = function(a, b, c, d, e, f) {
        Z.call(this, a, 1100);
        this.pbjs = b;
        this.l = c;
        this.A = d;
        this.D = e;
        this.requestBidsConfig = f;
        this.B = new GB
    };
    _.O(YK, Z);
    YK.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.l) ? void 0 : a.get("*")) ? b : _.Cf(qy);
        if (c) this.Bb(c);
        else {
            var d, e, f, g;
            a = null != (g = null != (f = null == (d = this.requestBidsConfig) ? void 0 : d.adUnits) ? f : null == (e = this.pbjs) ? void 0 : e.adUnits) ? g : [];
            d = _.w(a);
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value.code) c = b = a = g = void 0, f = null != (g = null != (a = null == (c = this.l) ? void 0 : c.get(_.C(un) ? tn(e) : e)) ? a : null == (b = this.l) ? void 0 : b.get(_.oi(e))) ? g : 0, this.Bb(f)
        }
        this.B.notify()
    };
    YK.prototype.Bb = function(a) {
        var b;
        null != (b = this.A) && _.z(b, 2, this.D);
        if (a) {
            var c;
            null == (c = this.A) || _.z(c, 1, 1);
            if (!this.D) {
                this.requestBidsConfig.timeout = a;
                var d, e, f;
                b = null != (f = null == (e = (d = this.pbjs).getConfig) ? void 0 : e.call(d).s2sConfig) ? f : [];
                if (Array.isArray(b))
                    for (d = _.w(b), e = d.next(); !e.done; e = d.next()) e.value.timeout = a;
                else b.timeout = a;
                var g, h;
                null == (h = (g = this.pbjs).setConfig) || h.call(g, {
                    bidderTimeout: a
                })
            }
        }
    };
    YK.prototype.m = function() {
        this.B.notify()
    };
    var ZK = function(a, b, c, d, e, f, g, h) {
        _.T.call(this);
        this.j = a;
        this.C = b;
        this.m = c;
        this.l = d;
        this.A = e;
        this.I = f;
        this.M = g;
        this.pbjs = h
    };
    _.O(ZK, _.T);
    ZK.prototype.push = function(a) {
        var b = a.context,
            c = a.nextFunction;
        a = a.requestBidsConfig;
        if (this.pbjs) {
            var d = new fg;
            _.Fn(this, d);
            var e = new YK(this.j, this.pbjs, this.A, this.I, this.M, a),
                f = new XK(this.j, this.C, this.m, this.l, this.pbjs, a);
            H(d, e);
            H(d, f);
            H(d, new WK(this.j, f.B, e.B, c, b, a));
            ng(d)
        }
    };
    var $K = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 951);
        this.G = window;
        this.cc = W(this);
        this.ec = W(this);
        this.F = X(this, b);
        this.A = Y(this, d);
        this.D = X(this, e);
        this.N = X(this, f);
        this.l = Y(this, g);
        this.P = Y(this, h);
        this.K = X(this, k);
        PB(this, c)
    };
    _.O($K, Z);
    $K.prototype.j = function() {
        var a = !!Kk().pbjs_hooks;
        this.ec.J(a);
        zB(this.cc, a ? null : _.mf());
        var b, c = null == (b = this.A.value) ? void 0 : b.size,
            d;
        b = (null == (d = this.l.value) ? void 0 : d.size) || _.Cf(qy);
        d = this.F.value;
        var e, f = null != (e = Kk().pbjs_hooks) ? e : [];
        e = new ZK(this.context, this.A.value, this.D.value, this.N.value, this.l.value, this.P.value, this.K.value, d);
        _.Fn(this, e);
        f = _.w(f);
        for (var g = f.next(); !g.done; g = f.next()) e.push(g.value);
        if (c || b || a) Kk().pbjs_hooks = Dn(this.context, e);
        !c && !b || a || Bn(d, this.G)
    };
    var aL = function(a, b, c) {
        Z.call(this, a, 1093);
        this.A = new FB(b);
        this.l = X(this, c)
    };
    _.O(aL, Z);
    aL.prototype.j = function() {
        var a = this.A.value;
        if (a) {
            var b;
            (null == (b = this.l.value["*"]) ? 0 : b.Zb) && Array.isArray(a.installedModules) && (b = new Qk("pbjs_modules"), vj(b, this.context), J(b, "pbmods", a.installedModules.join("~")), Sk(b))
        }
    };
    var bL = function(a, b) {
        Z.call(this, a, 966);
        this.G = b;
        this.Ea = W(this)
    };
    _.O(bL, Z);
    bL.prototype.j = function() {
        var a = this,
            b = lh(this.G);
        if (b) this.Ea.J(b);
        else if ((b = Object.getOwnPropertyDescriptor(this.G, "_pbjsGlobals")) && !b.configurable) oj("pdpg_error", function(d) {
            vj(d, a.context)
        }, _.Cf(oy));
        else {
            var c = null;
            Object.defineProperty(this.G, "_pbjsGlobals", {
                set: function(d) {
                    c = d;
                    (d = lh(a.G)) && a.Ea.J(d)
                },
                get: function() {
                    return c
                }
            })
        }
    };
    bL.prototype.m = function() {};
    var Hn = function(a, b, c, d) {
        Z.call(this, a, 879);
        this.A = b;
        this.l = W(this);
        c && (this.D = X(this, d))
    };
    _.O(Hn, Z);
    Hn.prototype.j = function() {
        var a, b;
        (null != (b = null == (a = this.D) ? void 0 : a.value) ? b : QA(this.A)) ? (a = RA(this.A), this.l.Ka(a)) : AB(this.l)
    };
    var Gn = function(a, b, c) {
        Z.call(this, a, 896);
        this.l = b;
        this.Wb = W(this);
        c && PB(this, c)
    };
    _.O(Gn, Z);
    Gn.prototype.j = function() {
        this.Wb.J(QA(this.l))
    };
    var cL = function(a, b) {
        Z.call(this, a, 1018);
        this.ud = NB(this);
        this.l = Y(this, b)
    };
    _.O(cL, Z);
    cL.prototype.j = function() {
        var a, b, c, d = _.w(null != (c = null == (a = this.l.value) ? void 0 : null == (b = dg(a, MA, 5)) ? void 0 : Yc(b, 1, Dc)) ? c : []);
        for (a = d.next(); !a.done; a = d.next()) tf(a.value);
        this.ud.notify()
    };
    var dL = function(a, b) {
        Z.call(this, a, 1070);
        this.l = W(this);
        this.A = Y(this, b)
    };
    _.O(dL, Z);
    dL.prototype.j = function() {
        var a, b = null == (a = this.A.value) ? void 0 : dg(a, MA, 5);
        if (b) {
            a = [];
            for (var c = _.w(Yc(b, 2, Gc)), d = c.next(); !d.done; d = c.next()) {
                var e = d.value;
                d = new Jv;
                var f = new Hv;
                e = _.z(f, 1, e);
                d = _.Lh(d, 2, e);
                null != Un(b, 3) && (e = new Fv, e = _.z(e, 1, 1), e = _.z(e, 2, We(b, 3)), _.Lh(d, 3, e));
                a.push(d)
            }
            this.l.J(a)
        } else this.l.J([])
    };
    var eL = function(a, b, c, d) {
        Z.call(this, a, 1016);
        this.B = W(this);
        this.A = Y(this, b);
        this.l = Y(this, c);
        this.D = RB(this, [b, d])
    };
    _.O(eL, Z);
    eL.prototype.j = function() {
        if (this.l.value) {
            var a = this.A.value || this.D.value;
            a && fL(this, a) ? this.B.J(a) : (AB(this.B), gL(this, a))
        } else AB(this.B)
    };
    eL.prototype.I = function(a) {
        this.m(a)
    };
    eL.prototype.m = function() {
        AB(this.B)
    };
    var fL = function(a, b) {
            return Te(a.l.value, Cv, 1).some(function(c) {
                return _.Kf(c, 1) === b
            })
        },
        gL = function(a, b) {
            oj("pp_iris_failure", function(c) {
                J(c, "fnc", b);
                vj(c, a.context)
            }, _.Cf(Wy))
        };
    var hL = function(a, b) {
        Z.call(this, a, 1015);
        this.l = W(this);
        this.A = Y(this, b)
    };
    _.O(hL, Z);
    hL.prototype.j = function() {
        if (this.A.value)
            if (Te(this.A.value, Cv, 1).length) {
                var a = Te(this.A.value, Cv, 1)[0];
                (_.B = [2, 3], _.t(_.B, "includes")).call(_.B, _.Ve(a, 3, 0)) ? this.l.J(_.Kf(a, 1)) : AB(this.l)
            } else AB(this.l);
        else AB(this.l)
    };
    hL.prototype.I = function(a) {
        this.m(a)
    };
    hL.prototype.m = function() {
        AB(this.l)
    };
    var iL = function(a, b, c) {
        Z.call(this, a, 1017);
        this.G = c;
        this.B = NB(this);
        this.l = Y(this, b)
    };
    _.O(iL, Z);
    iL.prototype.j = function() {
        var a = this;
        if (this.l.value) {
            var b = jA(this.G, this.l.value, function(c) {
                if (!c) {
                    c = Zw(b.j);
                    for (var d = _.w(document.getElementsByName("googlefcPresent")), e = d.next(); !e.done; e = d.next()) c.qg(e.value)
                }
                a.B.notify()
            });
            b.start()
        } else this.B.notify()
    };
    iL.prototype.I = function(a) {
        this.m(a)
    };
    iL.prototype.m = function() {
        this.B.notify()
    };
    var jL = function(a, b) {
        Z.call(this, a, 1056);
        this.B = W(this);
        this.l = X(this, b)
    };
    _.O(jL, Z);
    jL.prototype.j = function() {
        var a = Fh(this.l.value.getAdUnitPath());
        this.B.J(a)
    };
    jL.prototype.I = function(a) {
        this.m(a)
    };
    jL.prototype.m = function() {
        AB(this.B)
    };
    var Ln = function(a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.value = this.promise = null;
        this.B = W(this);
        this.promise = lI(b, c, function(f) {
            return null !== (e.value = d(f))
        })
    };
    _.O(Ln, Z);
    Ln.prototype.j = function() {
        var a = this;
        this.promise.then(function() {
            return void zB(a.B, a.value)
        })
    };
    var Kn = function(a, b, c, d) {
        Z.call(this, a, 1061);
        var e = this;
        this.B = W(this);
        this.B.Ka(new _.v.Promise(function(f) {
            var g = b.Z(c, function(h) {
                h = d(h);
                null !== h && (g(), f(h))
            });
            _.Qn(e, g)
        }))
    };
    _.O(Kn, Z);
    Kn.prototype.j = function() {};
    var kL = function(a, b, c, d) {
        Z.call(this, a, 906, _.Cf(Uy));
        this.l = NB(this);
        if (b === b.top) {
            var e = new fg;
            _.Fn(this, e);
            var f = new hL(a, c);
            H(e, f);
            d = Mn(a, d, pI, function(g) {
                return g.detail.V
            });
            H(e, d);
            d = new jL(a, d.B);
            H(e, d);
            a = new eL(a, f.l, c, d.B);
            H(e, a);
            b = new iL(this.context, a.B, b);
            H(e, b);
            QB(this, b.B);
            ng(e)
        } else this.l.notify()
    };
    _.O(kL, Z);
    kL.prototype.j = function() {
        this.l.notify()
    };
    kL.prototype.I = function(a) {
        this.m(a)
    };
    kL.prototype.m = function() {
        this.l.notify()
    };
    var lL = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1109);
        this.T = c;
        this.U = d;
        this.l = e;
        this.D = f;
        this.A = g;
        this.B = W(this);
        this.F = Y(this, b)
    };
    _.O(lL, Z);
    lL.prototype.j = function() {
        var a = this,
            b = this.F.value;
        b && (this.A.push(function() {
            b.addService(a.l)
        }), ao(this.T, function() {
            a.D(b);
            _.E(a.U, 4) && a.l.refresh([b])
        }))
    };
    var mL = function(a, b, c, d, e, f) {
        Z.call(this, a, 1108);
        this.adUnitPath = b;
        this.format = c;
        this.Ma = d;
        this.D = e;
        this.A = f;
        this.B = W(this);
        this.l = W(this)
    };
    _.O(mL, Z);
    mL.prototype.j = function() {
        var a = Pn(this.context, this.A, this.D, {
            fe: this.format,
            adUnitPath: this.adUnitPath,
            Ma: this.Ma
        });
        zB(this.l, a);
        zB(this.B, a ? a.ma : null)
    };
    var nL = function(a, b, c, d, e, f, g, h, k, l, n) {
        fg.call(this);
        this.context = a;
        this.T = b;
        this.adUnitPath = c;
        this.format = d;
        this.Ma = e;
        this.F = f;
        this.D = g;
        this.M = h;
        this.U = k;
        this.K = l;
        this.R = n;
        a = H(this, new mL(this.context, this.adUnitPath, this.format, this.Ma, this.K, this.R));
        H(this, new lL(this.context, a.B, this.T, this.U, this.F, this.D, this.M));
        this.j = {
            ma: a.B,
            Xj: a.l
        }
    };
    _.O(nL, fg);
    var oL = [{
            name: "Interstitial",
            format: 1,
            Ee: 5
        }, {
            name: "TopAnchor",
            format: 2,
            Ee: 2
        }, {
            name: "BottomAnchor",
            format: 3,
            Ee: 3
        }],
        pL = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 789);
            this.T = b;
            this.googletag = c;
            this.F = d;
            this.D = e;
            this.A = f;
            this.l = g;
            this.B = W(this)
        };
    _.O(pL, Z);
    pL.prototype.j = function() {
        var a = this;
        _.C(Zy) ? oL.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).forEach(function(b) {
            b = new nL(a.context, a.T, "/22639388115/example/" + b.name.toLowerCase(), b.Ee, !1, a.googletag.pubads(), function(c) {
                return void a.googletag.display(c)
            }, a.googletag.cmd, a.D.j, a.F, a.A);
            _.Fn(a, b);
            ng(b)
        }) : this.B.J(oL.filter(function(b) {
            return (new RegExp("gam" + b.name + "Demo", "i")).test(a.l)
        }).map(function(b) {
            var c = b.name;
            b = b.format;
            var d, e;
            null == (d = window.console) || null == (e = d.warn) || e.call(d, "GPT - Demo " + c + " ENABLED");
            d = new Wv;
            e = new Lv;
            b = _.z(e, 2, b);
            c = _.z(b, 1, "/22639388115/example/" + c.toLowerCase());
            return _.Oh(d, 5, Xv, c)
        }))
    };
    var qL = function(a, b) {
        Z.call(this, a, 1052);
        this.A = W(this);
        this.l = W(this);
        this.D = Y(this, b)
    };
    _.O(qL, Z);
    qL.prototype.j = function() {
        var a = this.D.value,
            b = new wv,
            c = new _.v.Map;
        if (a) {
            var d = new _.v.Set;
            a = _.w(a);
            for (var e = a.next(); !e.done; e = a.next()) {
                var f = e.value;
                if (_.Uf(f, 1)) {
                    e = new _.v.Set;
                    c.set(_.Kf(f, 1).toString(), e);
                    f = _.w(f.m());
                    for (var g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        var h = g.m();
                        e.add(h);
                        d.has(h) || _.Pf(b, 2, uv, g);
                        d.add(h)
                    }
                }
            }
        }
        this.A.J(c);
        this.l.J(b)
    };
    var rL = function(a, b, c, d, e) {
        Z.call(this, a, 1131);
        this.F = b;
        this.D = c;
        this.A = Y(this, e);
        this.l = X(this, d)
    };
    _.O(rL, Z);
    rL.prototype.j = function() {
        var a = this,
            b = this.A.value,
            c = this.l.value;
        null == b || !b.getUserIdsAsEids || this.D || _.E(c, 3) || _.E(c, 6) || _.E(c, 9) || oj("puisl", function(d) {
            try {
                var e, f;
                J(d, "l", (null != (f = null == (e = b.getUserIdsAsEids) ? void 0 : e.call(b)) ? f : []).map(function(k) {
                    return k.source + ":" + k.uids.map(function(l) {
                        return l.id.length
                    }).join("~")
                }).join(";"))
            } catch (k) {
                var g, h;
                J(d, "e", null != (h = null == (g = k) ? void 0 : g.message) ? h : "")
            }
            vj(d, a.context)
        }, this.F)
    };
    var Hq = function(a, b, c, d, e) {
        Z.call(this, a, 813);
        this.D = b;
        this.je = c;
        this.Kb = e;
        this.A = W(this);
        d && (this.F = Y(this, d));
        this.l = Y(this, e)
    };
    _.O(Hq, Z);
    Hq.prototype.j = function() {
        var a = this,
            b, c, d = null != (c = this.je) ? c : null == (b = this.F) ? void 0 : b.value;
        if (d && d.length && this.l.value && !_.C(uz)) {
            b = _.w(d);
            for (c = b.next(); !c.done; c = b.next()) d = c.value, c = d.ld, (d = d.url) && _.Fn(this, Og(c, d, this.l.value, this.Kb, function(e, f) {
                Vh(a.context, e, f);
                var g, h;
                null == (g = a.D) || null == (h = g.error) || h.call(g, f)
            }));
            this.A.J(!0)
        } else this.A.J(!1)
    };
    var sL = function(a, b) {
        Z.call(this, a, 1040);
        this.l = W(this);
        this.A = Y(this, b)
    };
    _.O(sL, Z);
    sL.prototype.j = function() {
        var a = this.A.value;
        a ? (a = a.m(), this.l.J(a.map(function(b) {
            var c = b.H();
            b = b.m();
            c = c && (_.t(c, "startsWith").call(c, location.protocol) || _.t(c, "startsWith").call(c, "data:") && 80 >= c.length) ? ue(null === c ? "null" : void 0 === c ? "undefined" : c) : void 0;
            return {
                ld: b,
                url: c
            }
        }))) : this.l.J([])
    };
    var tL = function(a, b, c) {
        Z.call(this, a, 1045);
        this.Kb = c;
        this.l = X(this, b)
    };
    _.O(tL, Z);
    tL.prototype.j = function() {
        var a = this.l.value;
        if (a) {
            var b = this.context,
                c = this.Kb;
            if (_.C(cz) || _.Uf(a, 1)) {
                var d = new fg,
                    e = new Fq;
                e.J(a);
                a = new sL(b, e);
                H(d, a);
                b = new Hq(b, console, void 0, a.l, c);
                H(d, b);
                ng(d)
            }
        }
    };
    var uL = function(a, b, c) {
        Z.call(this, a, 1051);
        this.A = b;
        this.l = Y(this, c)
    };
    _.O(uL, Z);
    uL.prototype.j = function() {
        var a = this;
        this.l.value && Bg(this.l.value, function(b, c) {
            Vh(a.context, b, c);
            var d, e;
            null == (d = a.A) || null == (e = d.error) || e.call(d, c)
        })
    };
    var Gq = function(a, b, c) {
        Z.call(this, a, 706);
        this.G = b;
        this.B = W(this);
        this.l = X(this, c)
    };
    _.O(Gq, Z);
    Gq.prototype.j = function() {
        zB(this.B, gf(this.l.value, this.G))
    };
    var vL = function(a, b, c, d, e, f) {
        Z.call(this, a, 1096);
        this.G = b;
        this.W = c;
        this.Ha = d;
        this.Va = e;
        this.l = Y(this, f)
    };
    _.O(vL, Z);
    vL.prototype.j = function() {
        var a, b = null == (a = this.l.value) ? void 0 : a.ug;
        b && b(this.Ha, this.W, this.G, this.Va)
    };
    var wL = function(a) {
        this.module = a
    };
    wL.prototype.toString = function() {
        return String(this.module)
    };
    _.xL = new wL(2);
    _.yL = new wL(5);
    var zL = function(a, b) {
        Z.call(this, a, 1095);
        this.l = b;
        this.B = W(this)
    };
    _.O(zL, Z);
    zL.prototype.j = function() {
        this.B.Ka(this.l.load(_.yL))
    };
    var AL = function(a, b, c, d, e) {
        Z.call(this, a, 1090);
        this.l = b;
        this.Va = c;
        this.A = X(this, d);
        this.D = Y(this, e)
    };
    _.O(AL, Z);
    AL.prototype.j = function() {
        var a = this.D.value,
            b;
        if (a && null != (b = dg(a, Tv, 1)) && _.Uv(b).length) {
            b = new fg;
            _.Fn(this, b);
            var c = new zL(this.context, this.l);
            H(b, c);
            a = new vL(this.context, window, this.A.value, dg(a, Tv, 1), this.Va, c.B);
            H(b, a);
            ng(b)
        }
    };
    var BL = function(a, b) {
        Z.call(this, a, 1081);
        this.ub = W(this);
        this.l = Y(this, b)
    };
    _.O(BL, Z);
    BL.prototype.j = function() {
        this.l.value ? this.ub.J(this.l.value) : AB(this.ub)
    };
    var CL = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1080);
        this.T = b;
        this.googletag = c;
        this.U = d;
        this.D = e;
        this.l = f;
        this.F = g;
        this.A = W(this)
    };
    _.O(CL, Z);
    CL.prototype.j = function() {
        var a;
        if (a = po(this.l, Nv, 2)) a = dg(this.l, Nv, 2), a = Vn(a) && Xn(a);
        if (a) {
            var b;
            bo(this.T, this.googletag, this.l, null != (b = this.U) ? b : this.D.j, this.F);
            null != Un(this.l, 1) ? this.A.J(We(this.l, 1)) : AB(this.A)
        } else AB(this.A)
    };
    var DL = new _.v.Map([
            [1, 5],
            [2, 2],
            [3, 3]
        ]),
        EL = function(a, b, c, d, e, f, g, h, k) {
            Z.call(this, a, 1079);
            this.T = b;
            this.googletag = c;
            this.U = d;
            this.F = e;
            this.l = f;
            this.A = g;
            this.K = h;
            this.D = k;
            this.N = W(this)
        };
    _.O(EL, Z);
    EL.prototype.j = function() {
        var a = this,
            b = this.K.getAdUnitPath(),
            c = DL.get(_.Ve(this.K, 2, 0));
        if (b && c)
            if (_.C(Zy)) {
                var d, e = null != (d = this.U) ? d : this.l.j;
                b = new nL(this.context, this.T, b, c, !0, this.googletag.pubads(), this.googletag.display, this.googletag.cmd, e, this.F, this.A);
                _.Fn(this, b);
                ng(b);
                this.N.Ka(b.m.promise)
            } else if (b = Pn(this.context, this.A, this.F, {
                fe: c,
                adUnitPath: b,
                Ma: !0
            })) {
            var f = b.ma;
            this.D && $n(Zn(this.l, f.getSlotElementId()), this.D);
            this.googletag.cmd.push(function() {
                f.addService(a.googletag.pubads())
            });
            ao(this.T, function() {
                a.googletag.display(f);
                var g;
                _.E(null != (g = a.U) ? g : a.l.j, 4) && a.googletag.pubads().refresh([f])
            })
        }
    };
    var FL = function(a, b, c, d) {
        Z.call(this, a, 1111);
        this.l = c;
        this.A = d;
        this.D = X(this, b)
    };
    _.O(FL, Z);
    FL.prototype.j = function() {
        var a = this.D.value.ma;
        a && $n(Zn(this.l, a.getSlotElementId()), this.A)
    };
    var wr = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 1082);
        this.googletag = b;
        this.U = c;
        this.P = d;
        this.l = e;
        this.N = f;
        this.F = [];
        this.K = W(this);
        this.D = new BL(this.context, this.K);
        this.A = [];
        this.ub = this.D.ub;
        _.Fn(this, this.D);
        a = _.w(g);
        for (b = a.next(); !b.done; b = a.next()) this.A.push(X(this, b.value))
    };
    _.O(wr, Z);
    wr.prototype.j = function() {
        if (_.C(Yy)) {
            var a = GL(this),
                b = a.sg,
                c = a.Zh,
                d;
            zB(this.K, null == (d = a.nh) ? void 0 : dg(d, Jv, 4));
            a = new fg;
            _.Fn(this, a);
            b = _.w(b);
            for (d = b.next(); !d.done; d = b.next()) {
                d = d.value;
                var e = dg(d, Jv, 4),
                    f = void 0,
                    g = H(a, new EL(this.context, document, this.googletag, null != (f = this.U) ? f : this.l.j, this.P, this.l, this.N, dg(d, Lv, Lf(d, Xv, 5)), e));
                e && _.C(Zy) && H(a, new FL(this.context, g.N, hj(), e))
            }
            c = _.w(c);
            for (d = c.next(); !d.done; d = c.next()) b = d.value, b = new CL(this.context, document, this.googletag, this.U, this.l, dg(b, Pv, Lf(b, Xv, 6)), dg(b, Jv, 4)), H(a, b), this.F.push(b.A);
            H(a, this.D);
            ng(a)
        } else AB(this.ub)
    };
    var GL = function(a) {
        var b = [],
            c = [];
        a = _.w(_.t(a.A, "flatMap").call(a.A, function(f) {
            return f.value
        }));
        for (var d = a.next(); !d.done; d = a.next()) switch (d = d.value, Zj(d, Xv)) {
            case 5:
                b.push(d);
                break;
            case 6:
                c.push(d);
                break;
            case 8:
                var e = d
        }
        return {
            sg: b,
            Zh: c,
            nh: e
        }
    };
    var HL = function(a, b, c, d, e, f, g, h) {
        _.T.call(this);
        this.context = a;
        this.X = b;
        this.P = c;
        this.R = d;
        this.L = e;
        this.N = f;
        this.Ca = g;
        this.ja = h;
        this.K = new SK(this.context, this.N);
        this.m = new RK(this.context, this.K.l);
        var k;
        this.F = new pL(this.context, document, Kk(), this.X, this.P, this.R, null != (k = window.location.hash) ? k : "");
        a = _.C(Zy) ? [this.m.jc] : [this.F.B, this.m.jc];
        this.M = new wr(this.context, Kk(), null, this.X, this.P, this.R, a);
        _.C(vy) ? this.I = new QK(this.context, this.M.F, this.m.A) : (this.j = new OK(this.context, this.m.l, window), this.C = new UK(this.context, this.j.l), this.l = new VK(this.context, this.j.A), this.A = new bL(this.context, window), this.I = new QK(this.context, this.M.F, this.m.A, {
            Ca: this.Ca,
            Jh: this.j.Ra,
            Ub: this.j.Ub
        }), this.D = new $K(this.context, this.A.Ea, this.I.B, this.C.ib, this.j.ab, this.C.ob, this.l.A, this.l.l, this.j.Db), _.Fn(this, this.A), _.Fn(this, this.j), _.Fn(this, this.C), _.Fn(this, this.l), _.Fn(this, this.D));
        _.Fn(this, this.I);
        _.Fn(this, this.K);
        _.Fn(this, this.m);
        _.Fn(this, this.F);
        _.Fn(this, this.M)
    };
    _.O(HL, _.T);
    var IL = function(a, b, c) {
        var d = new fg;
        _.Fn(a, d);
        H(d, a.K);
        H(d, a.m);
        H(d, a.I);
        b = new kL(a.context, window, a.m.D, b);
        H(d, b);
        H(d, a.F);
        H(d, a.M);
        if (_.C(vy)) {
            var e = a.context,
                f = a.Ca,
                g = a.m.l,
                h = window;
            var k = new fg;
            var l = new bL(e, h);
            H(k, l);
            g = new OK(e, g, h);
            H(k, g);
            var n = new TK(e, f, g.Ra, g.Ub);
            H(k, n);
            f = new UK(e, g.l);
            H(k, f);
            h = new VK(e, g.A);
            H(k, h);
            n = new $K(e, l.Ea, n.B, f.ib, g.ab, f.ob, h.A, h.l, g.ab);
            H(k, n);
            e = new aL(e, l.Ea, g.Ra);
            H(k, e);
            ng(k);
            k = {
                Ea: l.Ea,
                Ra: g.Ra,
                ib: f.ib,
                ab: g.ab,
                ob: f.ob,
                cc: n.cc,
                ec: n.ec,
                af: h.l,
                Db: g.Db,
                yg: k
            };
            _.Fn(a, k.yg)
        } else H(d, a.A), H(d, a.j), H(d, a.C), H(d, a.l), H(d, a.D), H(d, new aL(a.context, a.A.Ea, a.j.Ra)), k = {
            Ea: a.A.Ea,
            Ra: a.j.Ra,
            ib: a.C.ib,
            ab: a.j.ab,
            ob: a.C.ob,
            cc: a.D.cc,
            ec: a.D.ec,
            af: a.l.l,
            Db: a.j.Db
        };
        l = In(a.context, a.N, b.l);
        g = l.Wb;
        f = l.rf;
        _.Fn(d, l.Dc);
        l = new cL(a.context, f);
        H(d, l);
        e = new dL(a.context, f);
        H(d, e);
        f = sn(a.context, a.R, a.L, void 0, window, g, f);
        g = f.sb;
        _.Fn(a, f.Dc);
        if (!_.C(uz) && !Dl()) {
            var m = a.context;
            Kk();
            h = k.Ea;
            n = a.m.Vb;
            var p = window;
            f = new fg;
            var r = new Gq(m, p, g);
            p = r.B;
            H(f, r);
            n = new qL(m, n);
            H(f, n);
            H(f, new tL(m, n.l, p));
            _.C(wz) && (r = new uL(m, console, p), H(f, r));
            (r = _.Cf(bz)) && H(f, new rL(m, r, Dl(), g, h));
            ng(f);
            m = n.A;
            _.Fn(a, f)
        }
        h = a.context;
        n = a.ja;
        r = a.m.F;
        f = new fg;
        c = new AL(h, n, c, g, r);
        H(f, c);
        ng(f);
        _.Fn(a, f);
        ng(d);
        return {
            Ze: k,
            Mh: b.l,
            Ig: a.I.B,
            Lh: m,
            ub: a.M.ub,
            Vb: a.m.Vb,
            ud: l.ud,
            hh: e.l,
            Kb: p
        }
    };
    var JL = function(a, b, c) {
        Z.call(this, a, 1103);
        this.l = b;
        this.W = c;
        this.B = W(this)
    };
    _.O(JL, Z);
    JL.prototype.j = function() {
        this.B.J(!!ff(this.W) && !_.E(this.W, 9) && (this.l ? _.E(this.l, 9) || _.E(this.l, 8) || _.E(this.l, 1) || _.C(Xy) && _.E(this.l, 13) || 1 === _.Ve(this.l, 6, 2) || 1 === y(this.l, 5) ? !1 : !0 : !0))
    };
    var KL = ["Debug", "Info", "Warning", "Error", "Fatal"],
        LL = function(a, b, c) {
            this.level = a;
            this.message = b;
            this.ma = c;
            this.timestamp = new Date
        };
    _.aa = LL.prototype;
    _.aa.getSlot = function() {
        return this.ma
    };
    _.aa.getLevel = function() {
        return this.level
    };
    _.aa.getTimestamp = function() {
        return this.timestamp
    };
    _.aa.getMessage = function() {
        return this.message
    };
    _.aa.toString = function() {
        return this.timestamp.toTimeString() + ": " + KL[this.level] + ": " + this.message
    };
    var ML = {
            20: function(a) {
                return "Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: " + a[0] + "."
            },
            23: function(a) {
                return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + "."
            },
            34: function(a) {
                return "Size mapping is null because invalid mappings were added: " + a[0] + "."
            },
            60: function(a) {
                return "Ignoring the " + a[0] + "(" + (a[1] || "") + ") call since the service is already enabled."
            },
            66: function(a) {
                return "Slot " + a[0] + " cannot be refreshed until PubAdsService is enabled."
            },
            68: function() {
                return "Slots cannot be cleared until service is enabled."
            },
            80: function(a) {
                return "Slot object at position " + a[0] + " is of incorrect type."
            },
            84: function(a) {
                return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".'
            },
            93: function(a) {
                return "Failed to register listener. Unknown event type: " + a[0] + "."
            },
            96: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + ")."
            },
            122: function(a) {
                return "Invalid argument: " + a[0] + "(" + a[1] + "). Valid values: " + a[2] + "."
            },
            121: function(a) {
                return "Invalid object passed to " + a[0] + "(" + a[1] + "), for " + a[2] + ": " + a[3] + "."
            },
            151: function(a) {
                return "Invalid arguments: " + a[0] + "(" + a[1] + "). All zero-area slot sizes were removed."
            },
            105: function(a) {
                return "SRA requests may include a maximum of 30 ad slots. " + a[1] + " were requested, so the last " + a[2] + " were ignored."
            },
            106: function(a) {
                return "Publisher betas " + a[0] + " were declared after enableServices() was called."
            },
            107: function(a) {
                return "Publisher betas may only be declared once. " + a[0] + " were added after betas had already been declared."
            },
            108: function(a) {
                return "Beta keys cannot be cleared. clearTargeting() was called on " + a[0] + "."
            },
            123: function(a) {
                return "Refresh was throttled for slot: " + a[0] + "."
            },
            113: function(a) {
                return a[0] + " ad slot ineligible as page is not mobile optimized: " + a[1] + "."
            },
            116: function(a) {
                return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + " based on the API call."
            },
            114: function() {
                return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            115: function() {
                return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.'
            },
            132: function(a) {
                return "Taxonomy with id " + a[0] + " has reached the limit of " + a[1] + " values."
            },
            133: function() {
                return "No taxonomy values were cleared, either due to an invalid taxonomy or no values present."
            },
            134: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: Format already created on the page."
            },
            135: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: Frequency cap of 1 has been exceeded."
            },
            136: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: The viewport exceeds the current maximum width of 2500px."
            },
            137: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: Format currently only supported on mobile."
            },
            138: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: Format currently only supports portrait orientation."
            },
            139: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: GPT is not running in the top-level window."
            },
            140: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: Detected browser is currently unsupported."
            },
            142: function(a) {
                return "A google product ad tag with click url " + a[0] + " does not contain any elements enabled for clicking."
            },
            145: function(a) {
                return co(a[0]) + " " + a[1] + " not requested: Unable to access local storage to determine if the frequency cap has been exceeded due to insufficient user consent."
            },
            143: function() {
                return "getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead."
            },
            147: function() {
                return "GPT must be loaded from the limited ads URL to enable limited ads functionality."
            },
            148: function() {
                return "CommerceAdsConfig must contain a valid value for either categories or queries."
            },
            150: function() {
                return "Legacy browser does not support intersection observer causing lazy render/fetch as well as viewability events not to work properly."
            }
        },
        NL = {
            26: function(a) {
                return "Div ID passed to googletag.display() does not match any defined slots: " + a[0] + "."
            },
            28: function(a) {
                return "Error in googletag.defineSlot: Cannot create slot " + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + "."
            },
            149: function(a) {
                return "Error in googletag.defineSlot: Invalid ad unit path provided " + a[0] + ", see https://support.google.com/admanager/answer/10477476 for more information."
            },
            92: function(a) {
                return "Exception in " + a[1] + ' event listener: "' + a[0] + '".'
            },
            30: function(a) {
                return "Exception in googletag.cmd function: " + a[0] + "."
            },
            125: function(a) {
                return "google-product-ad element is invalid: " + a[0] + "."
            },
            126: function() {
                return "Attempted to collect prebid data but window.pbjs is undefined."
            },
            127: function(a) {
                return "Encountered the following error while attempting to collect prebid metadata: " + a[0] + "."
            },
            144: function() {
                return "ContentService is no longer available. Use the browser's built-in DOM APIs to directly add content to div elements instead."
            }
        };
    var OL = function(a) {
            this.context = a;
            this.m = this.H = this.j = 0;
            this.C = window;
            this.o = [];
            this.o.length = 1E3
        },
        cK = function(a) {
            return [].concat(_.xe(a.o.slice(a.j)), _.xe(a.o.slice(0, a.j))).filter(function(b) {
                return !!b
            })
        },
        dK = function(a, b) {
            return cK(a).filter(function(c) {
                return c.getSlot() === b
            })
        },
        eK = function(a, b) {
            return cK(a).filter(function(c) {
                return c.getLevel() >= b
            })
        };
    OL.prototype.log = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !1 : d;
        var f, g;
        c = new LL(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.ma) ? g : null);
        this.o[this.j] = c;
        this.j = (this.j + 1) % 1E3;
        g = _.Cf(yy) && 100 > this.H;
        f = 2 === a || 3 === a;
        var h = b.getMessageArgs(),
            k = b.getMessageId(),
            l = ML[k] || NL[k];
        g && f && (b = _.Cf(yy), oj("gpt_eventlog_messages", function(n) {
            ++e.H;
            vj(n, e.context);
            J(n, "level", a);
            J(n, "messageId", k);
            J(n, "args", h.join("|"));
            l || J(n, "noMsg", !0);
            var m = Error(),
                p;
            J(n, "stack", _.kB(null != (p = m.stack) ? p : "", m.message))
        }, b));
        if (l) {
            b = "[GPT] " + l(h);
            if (d) throw new jm(b);
            d = this.m < _.Cf(zy) && f && _.q.console;
            if (this.C === top && d || _.t(_.q.navigator.userAgent, "includes").call(_.q.navigator.userAgent, "Lighthouse"))(function(n) {
                var m, p, r, u;
                return void(2 === a ? null == (p = (m = _.q.console).warn) ? void 0 : p.call(m, n) : null == (u = (r = _.q.console).error) ? void 0 : u.call(r, n))
            })(b), this.m++
        }
        return c
    };
    OL.prototype.info = function(a, b) {
        return this.log(1, a, void 0 === b ? null : b)
    };
    var M = function(a, b, c) {
        a.log(2, b, c, !1)
    };
    OL.prototype.error = function(a, b, c) {
        return this.log(3, a, b, void 0 === c ? !1 : c)
    };
    var PL = function() {
            var a = this;
            var b = void 0 === b ? hj().j : b;
            this.C = "";
            this.j = this.storage = null;
            this.o = this.l = this.H = !1;
            this.m = function() {
                return !1
            };
            var c = {},
                d = {},
                e = {};
            this.I = (e[3] = (c[13] = function() {
                return _.wb.apply(0, arguments).some(function(f) {
                    return 0 == a.C.lastIndexOf(f, 0)
                })
            }, c[12] = function() {
                return !!_.E(b, 6)
            }, c[15] = function(f) {
                return a.m(f)
            }, c[48] = function() {
                return !!a.storage
            }, c[51] = function() {
                return a.H
            }, c[66] = function() {
                try {
                    return !!HTMLScriptElement.supports("webbundle")
                } catch (f) {
                    return !1
                }
            }, c[67] = function() {
                return a.l
            }, c[68] = function() {
                return a.o
            }, c), e[4] = (d[8] = function(f) {
                var g;
                return null != (g = $e(a.storage, Number(f))) ? g : void 0
            }, d[10] = function(f) {
                return a.j ? _.oi(f + a.j) % 1E3 : void 0
            }, d), e[5] = {}, e)
        },
        QL = function(a, b) {
            b && !a.j && (a.j = _.t(b.split(":"), "find").call(b.split(":"), function(c) {
                return 0 === c.indexOf("ID=")
            }) || null)
        };
    var RL = /(<head(\s+[^>]*)?>)/i,
        Mq = function(a, b, c, d, e) {
            Z.call(this, a, 665);
            this.B = W(this);
            this.l = X(this, b);
            this.A = Y(this, c);
            this.D = X(this, d);
            this.F = X(this, e)
        };
    _.O(Mq, Z);
    Mq.prototype.j = function() {
        var a;
        0 !== this.l.value.kind || null == (a = this.A.value) || !y(a, 1) || this.F.value ? this.B.J(this.l.value) : (a = this.l.value.eb, Va() || (a = a.replace(RL, "$1<meta http-equiv=Content-Security-Policy content=\"script-src https://cdn.ampproject.org/;object-src 'none';child-src blob:;frame-src 'none'\">")), this.D.value && (a = a.replace(RL, '$1<meta name="referrer" content="origin">')), this.B.J({
            kind: 0,
            eb: a
        }))
    };
    var SL = function(a, b, c, d) {
        Z.call(this, a, 1124);
        this.l = NB(this);
        this.D = X(this, b);
        this.A = X(this, c);
        PB(this, d)
    };
    _.O(SL, Z);
    SL.prototype.j = function() {
        _.Rx(this.A.value, {
            "min-width": "100%",
            visibility: "hidden"
        });
        _.Rx(this.D.value, "min-width", "100%");
        this.l.notify()
    };
    var TL = function(a, b, c, d, e) {
        Z.call(this, a, 1125);
        this.A = X(this, b);
        this.l = X(this, c);
        X(this, d);
        PB(this, e)
    };
    _.O(TL, Z);
    TL.prototype.j = function() {
        var a = this.A.value,
            b = a.contentDocument;
        b && (a.setAttribute("height", String(b.body.offsetHeight)), a.setAttribute("width", String(b.body.offsetWidth)), _.Rx(this.l.value, "visibility", "visible"))
    };
    var tr = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.slotId = b;
        this.Se = e;
        this.A = f;
        this.D = g;
        this.B = W(this);
        this.l = Mn(this.context, this.slotId, rI, function() {
            return null
        });
        this.K = Y(this, c);
        this.F = Y(this, d);
        this.N = X(this, h)
    };
    _.O(tr, Z);
    tr.prototype.j = function() {
        var a = !this.N.value;
        if (null == this.F.value || "height" !== this.K.value || a) this.l.Da(), this.B.J(!1);
        else {
            a = new fg;
            _.Fn(this, a);
            var b = new SL(this.context, this.A, this.D, this.Se);
            H(a, b);
            H(a, this.l);
            H(a, new TL(this.context, this.A, this.D, this.l.B, b.l));
            ng(a);
            this.B.J(!0)
        }
    };
    var ur = function(a, b, c, d, e, f, g, h) {
        Z.call(this, a, 718);
        this.D = Y(this, c);
        this.l = Y(this, d);
        PB(this, e);
        this.F = X(this, f);
        this.A = X(this, g);
        this.K = X(this, h);
        this.N = lI(b, rI)
    };
    _.O(ur, Z);
    ur.prototype.j = function() {
        var a = this,
            b, c, d;
        return _.Ab(function(e) {
            if (1 == e.j) {
                var f = !a.K.value;
                if (null == a.l.value || "height" !== a.D.value || f) return e.return();
                b = a.F.value;
                c = a.A.value;
                UL(c, !1);
                _.Rx(c, "min-width", "100%");
                _.Rx(b, "min-width", "100%");
                return Bb(e, a.N, 2)
            }
            if (a.H) return e.return();
            d = b.contentDocument;
            if (!d) return e.return();
            f = d.body.offsetWidth;
            b.setAttribute("height", String(d.body.offsetHeight));
            b.setAttribute("width", String(f));
            UL(c, !0);
            e.j = 0
        })
    };
    var UL = function(a, b) {
        _.Rx(a, "visibility", b ? "visible" : "hidden")
    };
    var dr = function(a, b, c, d, e, f, g, h, k, l, n, m, p) {
        Z.call(this, a, 699);
        this.T = b;
        this.slotId = c;
        this.l = d;
        this.oc = e;
        this.B = NB(this);
        this.K = Y(this, f);
        this.P = X(this, g);
        this.D = X(this, h);
        this.N = X(this, k);
        this.A = Y(this, l);
        this.X = X(this, n);
        this.F = X(this, m);
        p && PB(this, p)
    };
    _.O(dr, Z);
    dr.prototype.j = function() {
        var a = this.P.value,
            b = this.D.value;
        b.style.width = "";
        b.style.height = "";
        if ("height" !== this.K.value) {
            var c, d = null != (c = this.A.value) ? c : 0;
            c = this.N.value;
            var e = this.X.value,
                f = this.F.value,
                g = !1;
            switch (d) {
                case 1:
                case 2:
                    g = this.context;
                    var h = this.T,
                        k = this.slotId,
                        l = this.l,
                        n = this.oc;
                    var m = c.width,
                        p = c.height,
                        r = 0;
                    var u = 0;
                    var x = mi(l);
                    x = _.w(x);
                    for (var G = x.next(); !G.done; G = x.next()) {
                        var D = G.value;
                        Array.isArray(D) && (G = D[0], D = D[1], r < G && (r = G), u < D && (u = D))
                    }
                    u = [r, u];
                    r = u[0] < m;
                    p = u[1] < p;
                    if (r || p) {
                        u = m + "px";
                        x = {
                            "max-height": "none",
                            "max-width": u,
                            padding: "0px",
                            width: u
                        };
                        p && (x.height = "auto");
                        kj(b, a, x);
                        b = {};
                        r && (r = ij(e.width), m > r && (b.width = u, b["max-width"] = u));
                        p && (b.height = "auto", b["max-height"] = "none");
                        c: {
                            for (F in b)
                                if (Object.prototype.hasOwnProperty.call(b, F)) {
                                    var F = !1;
                                    break c
                                }
                            F = !0
                        }
                        F ? b = !1 : (b["padding-" + ("ltr" === e.direction ? "left" : "right")] = "0px", _.jj(a, b), b = !0)
                    } else b = !1;
                    b: switch (u = c.width, F = h.defaultView || h.parentWindow || _.q, d) {
                        case 2:
                            a = lj(a, F, u, e, n);
                            break b;
                        case 1:
                            if (e = a.parentElement)
                                if (n = Si(e)) {
                                    G = n.width;
                                    n = Yi(k, F.document);
                                    m = $i(n, F);
                                    p = m.position;
                                    D = ij(m.width) || 0;
                                    r = $i(e, F);
                                    x = "rtl" === r.direction ? "Right" : "Left";
                                    n = x.toLowerCase();
                                    F = "absolute" === p ? 0 : ij(r["padding" + x]);
                                    r = ij(r["border" + x + "Width"]);
                                    u = Math.max(Math.round((G - Math.max(D, u)) / 2), 0);
                                    G = {};
                                    D = 0;
                                    var N = Ax(m);
                                    N && (D = N[4] * ("Right" === x ? -1 : 1), x = N[3] || 1, 1 !== (N[0] || 1) || 1 !== x) && (N[0] = 1, N[3] = 1, G.transform = "matrix(" + N.join(",") + ")");
                                    x = 0;
                                    switch (p) {
                                        case "fixed":
                                            var L, R = null != (L = Number(aj(m.getPropertyValue(n)))) ? L : 0,
                                                S;
                                            L = null != (S = e.getBoundingClientRect().left) ? S : 0;
                                            x = R - L;
                                            break;
                                        case "relative":
                                            x = null != (R = Number(aj(m.getPropertyValue(n)))) ? R : 0;
                                            break;
                                        case "absolute":
                                            G[n] = "0"
                                    }
                                    G["margin-" + n] = u - F - r - x - D + "px";
                                    _.jj(a, G);
                                    a = !0
                                } else a = !1;
                            else a = !1;
                            break b;
                        default:
                            a = !1
                    }
                    b || a ? (nj(g, h, k, l, d, c.width, c.height, "gpt_slotexp", f), g = !0) : g = !1;
                    break;
                case 3:
                    d = this.context, g = this.T, h = this.slotId, k = this.l, L = this.oc, l = c.width, S = c.height, R = ij(e.height) || 0, S >= R || "none" === e.display || "hidden" === e.visibility || !L || -12245933 === L.width || a.getBoundingClientRect().bottom <= L.height ? g = !1 : (L = {
                        height: S + "px"
                    }, kj(b, a, L), _.jj(a, L), nj(d, g, h, k, 3, l, S, "gpt_slotred", f), g = !0)
            }!g && _.C(ly) && nj(this.context, this.T, this.slotId, this.l, 0, c.width, c.height, "gpt_pgbrk", f)
        }
        this.B.notify()
    };
    var Rq = function(a, b, c, d, e, f) {
        Z.call(this, a, 1114);
        this.K = b;
        this.N = c;
        this.D = W(this);
        this.A = W(this);
        this.F = X(this, d);
        this.l = X(this, e);
        this.P = X(this, f)
    };
    _.O(Rq, Z);
    Rq.prototype.j = function() {
        if (this.K) {
            var a = this.K.split(":");
            if (2 !== a.length || "#flexibleAdSlotDebugSize" !== a[0]) VL(this);
            else {
                var b = a[1];
                a = WL(this, b);
                var c;
                (c = /(?:.*)height=(ratio|[0-9]+)(?:;.*|$)/.exec(b)) ? (c = c[1], "ratio" === c ? c = a && this.F.value && this.l.value ? Math.floor(this.l.value / this.F.value * a) : null : (c = Number(c), c = 0 <= c ? c : null)) : c = null;
                b = (b = /(?:.*)ius=(.+,?)+(?:;.*|$)/.exec(b)) ? b[1].split(",") : [];
                a || c ? (this.D.J(new _.Ri(null != a ? a : this.F.value, null != c ? c : this.l.value)), this.A.J(b)) : VL(this)
            }
        } else VL(this)
    };
    var WL = function(a, b) {
            b = /(?:.*)width=(parent|viewport|[0-9]+)(?:;.*|$)/.exec(b);
            if (!b) return null;
            b = b[1];
            if ("viewport" === b) return a.N;
            if ("parent" === b) {
                var c, d, e;
                return (b = null != (e = null == (d = Si(null == (c = a.P.value) ? void 0 : c.parentElement)) ? void 0 : d.width) ? e : null) ? Math.min(b, a.N) : null
            }
            a = Number(b);
            return 0 <= a ? a : null
        },
        VL = function(a) {
            AB(a.D);
            a.A.J([])
        };
    var Sq = function(a, b, c, d, e, f, g, h, k, l, n) {
        Z.call(this, a, 681);
        this.adUnitPath = b;
        this.P = c;
        this.vb = d;
        this.Sa = W(this);
        this.F = W(this);
        this.fd = W(this);
        this.D = W(this);
        this.K = Y(this, e);
        this.ca = Y(this, f);
        this.ba = Y(this, g);
        h && (this.X = Y(this, h));
        k && (this.l = X(this, k));
        this.A = X(this, l);
        this.N = X(this, n)
    };
    _.O(Sq, Z);
    Sq.prototype.j = function() {
        var a = XL(this),
            b, c = null == (b = this.X) ? void 0 : b.value;
        if (b = !this.vb && a && c) {
            var d;
            null != (d = this.l) && d.value.length ? (d = this.adUnitPath.split("/"), b = _.t(this.l.value, "includes").call(this.l.value, d[d.length - 1])) : b = !0
        }
        if (b) {
            d = this.N.value;
            var e, f;
            b = null != (f = null == (e = Si(d.parentElement)) ? void 0 : e.width) ? f : 0;
            e = c.width;
            c = c.height;
            YL(this, !0, e, c, {
                kind: 0,
                eb: '<html><body style="height:' + (c - 2 + "px;width:" + (e - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;margin:0;"><p>Requested size:')) + (a.width + "x" + a.height + "</p><p>Rendered size:") + (e + "x" + c + "</p></body></html>")
            }, e <= b ? 1 : 2, d)
        } else if (a = this.ca.value, c = this.ba.value, this.vb) YL(this, !1, null != a ? a : 0, null != c ? c : 0, this.A.value);
        else {
            if (null == a) throw new jm("Missing 'width'.");
            if (null == c) throw new jm("Missing 'height'.");
            YL(this, !1, a, c, this.A.value)
        }
    };
    var XL = function(a) {
            a = mi(a.P)[0];
            return Array.isArray(a) && a.every(function(b) {
                return "number" === typeof b
            }) ? new _.Ri(a[0], a[1]) : null
        },
        YL = function(a, b, c, d, e, f, g) {
            f = void 0 === f ? a.K.value : f;
            a.D.J(b);
            a.F.J(new _.Ri(c, d));
            a.Sa.J(e);
            zB(a.fd, f);
            g && _.Rx(g, "opacity", .5)
        };
    var ZL = /^v?\d{1,3}(\.\d{1,3}){0,2}(-pre)?$/,
        $L = function(a, b, c, d, e, f, g) {
            Z.call(this, a, 920);
            this.K = b;
            this.V = c;
            this.Mb = d;
            this.D = W(this);
            this.F = W(this);
            this.l = W(this);
            this.N = [];
            this.A = new _.v.Map;
            this.ka = X(this, e);
            f && (this.ca = new FB(f.Ea), this.P = X(this, f.Ra), this.ba = Y(this, f.ib), this.X = X(this, f.ab), this.ta = X(this, f.ob), this.pa = Y(this, f.af));
            g && (this.ga = Y(this, g))
        };
    _.O($L, Z);
    $L.prototype.j = function() {
        if (aM(this)) {
            var a, b = null == (a = this.ca) ? void 0 : a.value;
            b && b.libLoaded ? "function" !== typeof b.getEvents ? (this.K.error(IJ()), bM(this)) : (a = cM(this, b)) ? (zB(this.l, a), this.D.J(this.A), this.F.J(this.N)) : bM(this) : bM(this)
        } else bM(this)
    };
    $L.prototype.I = function(a) {
        this.m(a)
    };
    $L.prototype.m = function(a) {
        this.K.error(JJ(a.message));
        bM(this)
    };
    var bM = function(a) {
            AB(a.l);
            AB(a.D);
            AB(a.F)
        },
        cM = function(a, b) {
            var c = (0, b.getEvents)(),
                d = c.filter(function(g) {
                    var h = g.args;
                    return "auctionEnd" === g.eventType && h.auctionId
                }),
                e = !1,
                f = a.ka.value.map(function(g) {
                    var h = new nv,
                        k = function(ta) {
                            return ta === g.getDomId() || ta === g.getAdUnitPath()
                        },
                        l, n = null != (l = dM.get(g)) ? l : 0,
                        m;
                    l = null != (m = d.filter(function(ta) {
                        var qa, ia, Ta;
                        return Number(null == (qa = ta.args) ? void 0 : qa.timestamp) > n && (null == (ia = ta.args) ? void 0 : null == (Ta = ia.adUnitCodes) ? void 0 : _.t(Ta, "find").call(Ta, k))
                    })) ? m : [];
                    if (!l.length) return a.N.push(g), [g, h];
                    var p;
                    m = null == (p = l.reduce(function(ta, qa) {
                        return Number(qa.args.timestamp) > Number(ta.args.timestamp) ? qa : ta
                    })) ? void 0 : p.args;
                    if (!m) return [g, h];
                    var r = void 0 === m.bidderRequests ? [] : m.bidderRequests;
                    p = void 0 === m.bidsReceived ? [] : m.bidsReceived;
                    var u = m.auctionId;
                    m = m.timestamp;
                    if (!u || null == m || !r.length) return [g, h];
                    dM.has(g) || _.Qn(g, function() {
                        return dM.delete(g)
                    });
                    dM.set(g, m);
                    m = ov(h);
                    Math.random() < _.Cf(py) && b.version && ZL.test(b.version) && _.z(m, 6, b.version);
                    var x;
                    kv(m, null == (x = a.pa) ? void 0 : x.value);
                    x = Zi(function() {
                        return Ao(c, u)
                    });
                    l = al(a.V[g.getDomId()]);
                    var G = {};
                    r = _.w(r);
                    for (var D = r.next(); !D.done; G = {
                            Vc: G.Vc,
                            Nd: G.Nd
                        }, D = r.next()) {
                        var F = D.value;
                        G.Vc = F.bidderCode;
                        var N = F.bids;
                        D = F.timeout;
                        G.Nd = F.src;
                        F = F.auctionStart;
                        var L = {};
                        N = _.w(N);
                        for (var R = N.next(); !R.done; L = {
                                rc: L.rc
                            }, R = N.next()) {
                            var S = R.value;
                            L.rc = S.bidId;
                            var V = S.transactionId;
                            R = S.adUnitCode;
                            var ja = S.getFloor;
                            S = S.mediaTypes;
                            if (L.rc && k(R)) {
                                e = !0;
                                oo(m, g, R);
                                V && (_.Uf(m, 4) || _.z(m, 4, V), a.A.has(V) || a.A.set(V, F));
                                null != Un(m, 8) || _.z(m, 8, D);
                                var da = _.t(p, "find").call(p, function(ta) {
                                    return function(qa) {
                                        return qa.requestId === ta.rc
                                    }
                                }(L));
                                V = fo(m, function(ta) {
                                    return function() {
                                        var qa = io(new jo, ta.Vc);
                                        _.C(ko) && lo(ta.Vc, b, qa);
                                        switch (ta.Nd) {
                                            case "client":
                                                _.z(qa, 7, 1);
                                                break;
                                            case "s2s":
                                                _.z(qa, 7, 2)
                                        }
                                        return qa
                                    }
                                }(G)());
                                ro(m, V, R, a.ba.value, a.X.value, a.ta.value, ja);
                                da ? (ho(V, 1), "number" === typeof da.timeToRespond && mo(V, da.timeToRespond), R = eo(da, l, S), go(V, R)) : (R = x().get(L.rc)) && !R.zf ? mo(ho(V, 2), Math.round(R.latency)) : mo(ho(V, 3), D)
                            }
                        }
                    }
                    var Fa;
                    (null == (Fa = b.getConfig) ? 0 : Fa.call(b).useBidCache) && no(m, g, u, l, b);
                    return [g, h]
                });
            return e ? new _.v.Map(f) : null
        },
        aM = function(a) {
            var b;
            if (null == (b = a.ga) ? 0 : b.value) return !0;
            var c, d = null == (c = a.P) ? void 0 : c.value;
            if (!d) return !1;
            var e;
            return (null == (e = d["*"]) ? void 0 : e.Zb) || a.Mb.split(",").some(function(f) {
                var g;
                return !(null == (g = d[f]) || !g.Zb)
            })
        },
        dM = new _.v.Map;
    var eM, fM = function(a, b, c, d, e, f) {
        Z.call(this, a, 1019);
        this.V = f;
        b && (this.l = new FB(b));
        c && (this.D = new FB(c.cc), this.F = new FB(c.ec));
        this.A = Y(this, d);
        this.K = Y(this, e)
    };
    _.O(fM, Z);
    fM.prototype.j = function() {
        gM(this);
        hM(this)
    };
    var hM = function(a) {
            if (!(Math.random() >= _.Cf(ny))) {
                var b = (a.K.value || []).filter(function(m) {
                    return al(a.V[m.getDomId()]).some(function(p) {
                        return "hb_pb" === y(p, 1)
                    })
                });
                if (b.length) {
                    var c, d, e, f, g, h, k, l, n = (null == (c = a.l) ? 0 : null == (d = c.value) ? 0 : null == (e = d.adUnits) ? 0 : e.length) ? [].concat(_.xe(new _.v.Set(null == (f = a.l) ? void 0 : null == (g = f.value) ? void 0 : g.adUnits.map(function(m) {
                        return m.code
                    })))) : _.t(Object, "keys").call(Object, (null == (h = a.l) ? void 0 : null == (k = h.value) ? void 0 : null == (l = k.getAdserverTargeting) ? void 0 : l.call(k)) || {});
                    c = new Qk("haux");
                    J(c, "ius", b.map(function(m) {
                        return m.getAdUnitPath()
                    }).join("~"));
                    J(c, "dids", b.map(function(m) {
                        return m.getDomId()
                    }).join("~"));
                    J(c, "paucs", n.join("~"));
                    vj(c, a.context);
                    Sk(c)
                }
            }
        },
        gM = function(a) {
            oj("ppc_hrc", function(b) {
                var c;
                null != eM || (eM = null == (c = (_.B = window.google_js_reporting_queue = window.google_js_reporting_queue || [], _.t(_.B, "find")).call(_.B, function(k) {
                    return "1" === k.label
                })) ? void 0 : c.value);
                var d = of ("navigationStart", window);
                eM && J(b, "lt", eM);
                var e;
                J(b, "tids", [].concat(_.xe((null == (e = a.A.value) ? void 0 : _.t(e, "keys").call(e)) || [])).join());
                var f;
                J(b, "asts", [].concat(_.xe((null == (f = a.A.value) ? void 0 : _.t(f, "values").call(f)) || [])).map(function(k) {
                    return k - d
                }).join());
                var g;
                if (null == (g = a.D) ? 0 : g.value) J(b, "ht", a.D.value - d);
                else {
                    var h;
                    (null == (h = a.F) ? 0 : h.value) && J(b, "ht", 0)
                }
                vj(b, a.context)
            }, a.A.value ? _.Cf(my) : 0)
        };
    var Eq = function(a, b, c, d, e) {
        Z.call(this, a, 982);
        this.l = Y(this, b);
        c && (this.D = new FB(c));
        this.F = X(this, d);
        this.A = X(this, e)
    };
    _.O(Eq, Z);
    Eq.prototype.j = function() {
        var a = this,
            b, c = null == (b = this.D) ? void 0 : b.value;
        if (this.l.value && null != c && c.onEvent) {
            b = {};
            for (var d = _.w(["bidWon", "staleRender", "adRenderFailed", "adRenderSucceeded"]), e = d.next(); !e.done; b = {
                    tc: b.tc,
                    Xc: b.Xc
                }, e = d.next()) b.tc = e.value, b.Xc = function(f) {
                return function(g) {
                    if (a.l.value === g.adId) {
                        var h = new Qk("hbm_brt");
                        vj(h, a.context);
                        J(h, "et", f.tc);
                        J(h, "sf", a.F.value);
                        J(h, "qqid", a.A.value);
                        var k, l, n;
                        J(h, "bc", String(null != (n = null != (l = g.bidderCode) ? l : null == (k = g.bid) ? void 0 : k.bidder) ? n : ""));
                        Sk(h)
                    }
                }
            }(b), c.onEvent(b.tc, b.Xc), _.Qn(this, function(f) {
                return function() {
                    return void Xh(a.context, a.id, function() {
                        var g;
                        return void(null == (g = c.offEvent) ? void 0 : g.call(c, f.tc, f.Xc))
                    }, !0)
                }
            }(b))
        }
    };
    Eq.prototype.m = function() {};
    var Ip = function(a, b) {
        Z.call(this, a, 1110);
        this.G = b;
        this.B = W(this)
    };
    _.O(Ip, Z);
    Ip.prototype.j = function() {
        var a = this.G;
        a = _.C(pz) && void 0 !== a.credentialless && (_.C(qz) || a.crossOriginIsolated);
        this.B.J(a)
    };
    var iM = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? Do : g;
        Z.call(this, a, 886);
        this.Y = b;
        this.L = c;
        this.l = d;
        this.T = e;
        this.A = g;
        this.B = NB(this);
        f && PB(this, f)
    };
    _.O(iM, Z);
    iM.prototype.j = function() {
        var a = this,
            b, c;
        return _.Ab(function(d) {
            if (1 == d.j) return _.C(Fy) || 3 !== pG(a.T) ? (d.j = 2, d = void 0) : d = Bb(d, new _.v.Promise(function(e) {
                return void tG(e, a.T)
            }), 2), d;
            if (5 != d.j) {
                b = a.l ? Co(a.l) : null;
                if (null == b || (c = a.Y.some(function(e) {
                        return !bj(Yi(e))
                    }))) return a.B.notify(), d.return();
                if (_.C(Fy)) {
                    HB(a.B, jM(a, b));
                    d.j = 0;
                    return
                }
                return Bb(d, jM(a, b), 5)
            }
            a.B.notify();
            d.j = 0
        })
    };
    var jM = function(a, b) {
        return new _.v.Promise(function(c) {
            var d = a.A(function(h, k) {
                h.some(function(l) {
                    return 0 < l.intersectionRatio
                }) && (k.disconnect(), c())
            }, b + "%");
            if (d) {
                _.Qn(a, function() {
                    return void d.disconnect()
                });
                for (var e = {}, f = _.w(a.Y), g = f.next(); !g.done; e = {
                        vc: e.vc
                    }, g = f.next()) {
                    g = g.value;
                    e.vc = Yi(g);
                    if (!e.vc) break;
                    d.observe(e.vc);
                    xI(a.L, g, function(h) {
                        return function() {
                            return void d.unobserve(h.vc)
                        }
                    }(e))
                }
            } else c()
        })
    };
    var Pq = function(a, b, c) {
        Z.call(this, a, 666);
        this.A = b;
        this.l = W(this);
        this.D = Y(this, c)
    };
    _.O(Pq, Z);
    Pq.prototype.j = function() {
        var a = new Qq;
        this.D.Ec() && ZG(_.z(a, 2, this.D.value), 1);
        if (this.A) {
            a = [this.A, a];
            var b = new Qq;
            a = _.w(a);
            for (var c = a.next(); !c.done; c = a.next()) c = c.value, null != Un(c, 1) && _.z(b, 1, Un(c, 1)), null != Un(c, 2) && _.z(b, 2, Un(c, 2)), null != Bo(c, 3) && ZG(b, Bo(c, 3));
            a = b
        }
        b = this.l;
        a = null != Un(a, 2) ? null != Bo(a, 3) && 0 !== (0, _.Km)() ? Un(a, 2) * Bo(a, 3) : Un(a, 2) : null;
        zB(b, a)
    };
    var cr = function(a, b, c, d, e, f, g) {
        g = void 0 === g ? Eo : g;
        Z.call(this, a, 666);
        this.A = g;
        this.B = NB(this);
        PB(this, b);
        f && PB(this, f);
        this.l = X(this, c);
        this.F = Y(this, d);
        this.D = Y(this, e)
    };
    _.O(cr, Z);
    cr.prototype.j = function() {
        var a = this.D.value,
            b = this.F.value,
            c = this.l.value;
        null == a || 0 > a || 0 === b || !bj(c) ? this.B.notify() : kM(this, a, b, c)
    };
    var kM = function(a, b, c, d) {
        var e = a.A(b, Rh(a.context, 291, function(f, g) {
            f = _.w(f);
            for (var h = f.next(); !h.done; h = f.next())
                if (h = h.value, !(0 >= h.intersectionRatio)) {
                    g.unobserve(h.target);
                    a.B.notify();
                    break
                }
        }));
        e ? (null != c && setTimeout(function() {
            a.B.notify();
            e.disconnect()
        }, c), e.observe(d), _.Qn(a, function() {
            e.disconnect()
        })) : a.B.notify()
    };
    var mr = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 682);
        this.L = b;
        this.format = c;
        this.slotId = d;
        this.G = e;
        this.l = Y(this, f);
        this.A = X(this, g);
        this.F = X(this, h);
        this.D = Y(this, k)
    };
    _.O(mr, Z);
    mr.prototype.j = function() {
        var a = this;
        if ((2 === this.format || 3 === this.format) && this.l.Ec() && _.E(this.l.value, 12, !1)) {
            var b = this.D.value.Zg,
                c = _.yq(this.L, this.slotId),
                d = this.F.value,
                e = this.A.value;
            _.jj(e, {
                "max-height": "30vh",
                overflow: "hidden"
            });
            if (lM) lM.Gi(e);
            else {
                lM = new b(this.context, this.format, e, this.G, d, this.L, this.slotId);
                b = {};
                d = _.w(Te(this.l.value, $v, 13));
                for (var f = d.next(); !f.done; f = d.next()) f = f.value, b[y(f, 1)] = y(f, 2);
                lM.Li(b);
                lM.md();
                wI(this.L, this.slotId, function() {
                    lM && (lM.Da(), lM = null);
                    c && _.AI(a.L, a.slotId)
                })
            }
            _.Qn(this, function() {
                return _.hx(e)
            })
        }
    };
    var lM = null;
    var nr = function(a, b, c, d, e, f, g, h, k, l) {
        Z.call(this, a, 683);
        this.slotId = b;
        this.format = c;
        this.X = d;
        this.l = Y(this, e);
        this.F = X(this, f);
        this.P = X(this, g);
        this.K = Y(this, h);
        this.N = Y(this, k);
        this.D = X(this, l);
        this.A = lI(b, Go, function(n) {
            n = n.detail;
            try {
                var m = JSON.parse(n.data);
                return "sth" === m.googMsgType && "i-adframe-load" === m.msg_type
            } catch (p) {
                return !1
            }
        })
    };
    _.O(nr, Z);
    nr.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r;
        return _.Ab(function(u) {
            switch (u.j) {
                case 1:
                    b = _.Cf(Ny);
                    c = a.l.value;
                    if (!c || 5 !== a.format) return u.return();
                    Math.random() < _.Cf(Oy) && _.v.Promise.race([a.A.then(function() {
                        return !1
                    }), new _.v.Promise(function(x) {
                        NK(a, a.id, window, "pagehide", function(G) {
                            G && x(!0)
                        })
                    })]).then(function(x) {
                        var G = new Qk("int_pm");
                        J(G, "ts", Date.now());
                        J(G, "flg", b);
                        J(G, "qem", a.D.value);
                        J(G, "ph", Number(x));
                        Sk(G)
                    });
                    d = a.P.value;
                    e = a.F.value;
                    f = a.N.value;
                    g = f.sh;
                    h = new _.WG(a.context);
                    n = (null == (k = a.l.value) ? 0 : null != fi(k, 14)) ? 60 * (null == (l = a.l.value) ? NaN : tq(l, 14)) : 604800;
                    switch (b) {
                        case 0:
                            m = {
                                tag: 0
                            };
                            p = 0;
                            break;
                        case 2:
                            m = {
                                tag: 0
                            };
                            p = 1;
                            break;
                        case 1:
                            u.j = 2;
                            return;
                        default:
                            return u.return()
                    }
                    u.j = 3;
                    break;
                case 2:
                    return Bb(u, a.A, 4);
                case 4:
                    if (a.H) return u.return();
                    m = {
                        tag: 2,
                        Oe: _.mf()
                    };
                    p = 1;
                    u.j = 3;
                    break;
                case 3:
                    r = new g(window, e, d, h, m, a.X, p, Fo(Te(c, $v, 13)), Em(a.slotId), function() {
                        return void a.Da()
                    }, n, a.K.value), _.Fn(a, r), u.j = 0
            }
        })
    };
    var hr = function(a, b, c, d, e, f) {
        Z.call(this, a, 846);
        this.D = b;
        this.format = c;
        this.B = W(this);
        this.l = Y(this, d);
        this.A = Y(this, e);
        f && PB(this, f)
    };
    _.O(hr, Z);
    hr.prototype.j = function() {
        var a, b = (2 === this.format || 3 === this.format) && !(null == (a = this.l.value) || !_.E(a, 12, !1));
        a = 5 === this.format && this.A.value;
        b || a ? this.B.Ka(this.D.load(_.xL)) : AB(this.B)
    };
    var mM = function(a, b) {
            this.serviceName = b;
            this.slot = a.ma
        },
        nM = function(a, b) {
            mM.call(this, a, b);
            this.isEmpty = !1;
            this.slotContentChanged = !0;
            this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
            this.isBackfill = !1;
            this.companyIds = this.yieldGroupIds = null
        };
    _.O(nM, mM);
    var oM = function() {
        mM.apply(this, arguments)
    };
    _.O(oM, mM);
    var pM = function(a, b, c) {
        mM.call(this, a, b);
        this.inViewPercentage = c
    };
    _.O(pM, mM);
    var qM = function() {
        mM.apply(this, arguments)
    };
    _.O(qM, mM);
    var rM = function() {
        mM.apply(this, arguments)
    };
    _.O(rM, mM);
    var sM = function() {
        mM.apply(this, arguments)
    };
    _.O(sM, mM);
    var tM = function() {
        mM.apply(this, arguments)
    };
    _.O(tM, mM);
    var uM = function(a, b, c, d) {
        mM.call(this, a, b);
        this.makeRewardedVisible = c;
        this.payload = d
    };
    _.O(uM, mM);
    var vM = function(a, b, c) {
        mM.call(this, a, b);
        this.payload = c
    };
    _.O(vM, mM);
    var wM = function() {
        mM.apply(this, arguments)
    };
    _.O(wM, mM);
    var xM = function(a, b, c, d, e, f) {
        Z.call(this, a, 696);
        this.slotId = b;
        this.ra = c;
        PB(this, d);
        RB(this, [e, f])
    };
    _.O(xM, Z);
    xM.prototype.j = function() {
        this.ra.dispatchEvent("rewardedSlotClosed", 703, new wM(this.slotId, "publisher_ads"))
    };
    var yM = function(a, b, c, d, e) {
        Z.call(this, a, 694);
        this.slotId = b;
        this.ra = c;
        PB(this, d);
        this.l = Y(this, e)
    };
    _.O(yM, Z);
    yM.prototype.j = function() {
        var a, b = null == (a = this.l.value) ? void 0 : a.payload;
        this.ra.dispatchEvent("rewardedSlotGranted", 702, new vM(this.slotId, "publisher_ads", null != b ? b : null))
    };
    var zM = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        AM = function(a, b, c, d, e, f) {
            Z.call(this, a, 693);
            this.G = b;
            this.F = f;
            this.B = NB(this);
            this.l = X(this, c);
            this.A = X(this, d);
            PB(this, e);
            this.D = new _.GG(this.G)
        };
    _.O(AM, Z);
    AM.prototype.j = function() {
        var a = this;
        if (!this.F.qb) {
            var b = 0 === (0, _.Km)() ? "rgba(1,1,1,0.5)" : "white";
            _.jj(this.A.value, _.t(Object, "assign").call(Object, {
                "background-color": b,
                opacity: "1",
                position: "fixed",
                margin: "0",
                padding: "0",
                "z-index": "2147483647",
                display: "block"
            }, zM));
            _.Qn(this, _.QG(this.G.document, this.G));
            re(this.l.value).postMessage(JSON.stringify({
                type: "rewarded",
                message: "visible"
            }), "*");
            if (this.G === this.G.top) {
                this.G.location.hash = "goog_rewarded";
                var c = _.IG(this.D, 2147483646);
                _.LG(c);
                _.Qn(this, function() {
                    _.MG(c);
                    "goog_rewarded" === a.G.location.hash && (a.G.location.hash = "")
                })
            }
            this.B.notify()
        }
    };
    var BM = function(a, b, c, d) {
        Z.call(this, a, 695);
        this.G = b;
        this.l = X(this, c);
        PB(this, d)
    };
    _.O(BM, Z);
    BM.prototype.j = function() {
        if (this.G === this.G.top) var a = re(this.l.value),
            b = NK(this, 503, this.G, "hashchange", function(c) {
                bt(c.oldURL, "#goog_rewarded") && (a.postMessage(JSON.stringify({
                    type: "rewarded",
                    message: "back_button"
                }), "*"), b())
            })
    };
    var CM = function(a, b, c, d) {
        Z.call(this, a, 692);
        this.slotId = b;
        this.ra = c;
        this.B = NB(this);
        this.l = X(this, d)
    };
    _.O(CM, Z);
    CM.prototype.j = function() {
        var a = this.l.value,
            b = new _.fh,
            c = b.promise,
            d;
        this.ra.dispatchEvent("rewardedSlotReady", 701, new uM(this.slotId, "publisher_ads", b.resolve, null != (d = a.payload) ? d : null));
        HB(this.B, c)
    };
    var DM = {
            width: "100%",
            height: "100%",
            left: "0",
            top: "0"
        },
        EM = {
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%"
        },
        FM = function(a, b, c, d, e) {
            Z.call(this, a, 691);
            this.D = W(this);
            this.A = NB(this);
            this.F = X(this, c);
            this.l = RB(this, [d, e])
        };
    _.O(FM, Z);
    FM.prototype.j = function() {
        "ha_before_make_visible" === this.l.value.message ? this.A.notify() : (_.jj(this.F.value, _.t(Object, "assign").call(Object, {
            position: "absolute"
        }, 0 === (0, _.Km)() ? EM : DM)), this.D.J(this.l.value))
    };
    var or = function(a, b, c, d, e, f) {
        fg.call(this);
        var g = Ho(b, "granted", a);
        H(this, g);
        var h = Ho(b, "prefetched", a);
        H(this, h);
        var k = Ho(b, "closed", a);
        H(this, k);
        var l = Ho(b, "ha_before_make_visible", a);
        H(this, l);
        var n = new FM(a, b, e, h.B, l.B);
        H(this, n);
        h = new CM(a, b, c, n.D);
        H(this, h);
        f = new AM(a, d, e, f, h.B, n.A);
        H(this, f);
        H(this, new BM(a, d, e, f.B));
        H(this, new yM(a, b, c, h.B, g.B));
        H(this, new xM(a, b, c, h.B, k.B, l.B))
    };
    _.O(or, fg);
    var Op = function(a, b) {
        Z.call(this, a, 1031);
        this.G = b
    };
    _.O(Op, Z);
    Op.prototype.j = function() {
        this.G === this.G.top && ek(this.G)
    };
    var Mp = function(a, b, c) {
        c = void 0 === c ? jh : c;
        Z.call(this, a, 1063);
        this.G = b;
        this.A = c;
        this.l = W(this)
    };
    _.O(Mp, Z);
    Mp.prototype.j = function() {
        var a = this;
        if (_.C(Dy) && kh(this.G)) {
            var b = null,
                c = 0,
                d = Rh(this.context, this.id, function() {
                    var f, g, h, k;
                    return _.Ab(function(l) {
                        switch (l.j) {
                            case 1:
                                return f = a.A(a.G), g = "0", l.m = 2, Bb(l, f, 4);
                            case 4:
                                g = null != (h = l.o) ? h : "0";
                                1E4 < g.length && (Vh(a.context, a.id, new jm("ML:" + g.length)), g = "0");
                                Db(l, 3);
                                break;
                            case 2:
                                k = Eb(l), Vh(a.context, a.id, k);
                            case 3:
                                b = g, c = _.mf(a.G) + 3E5, l.j = 0
                        }
                    })
                });
            var e = (_.B = d(), _.t(_.B, "finally")).call(_.B, function() {
                e = void 0
            });
            this.l.J(function() {
                var f, g;
                return _.Ab(function(h) {
                    if (1 == h.j) {
                        f = _.mf(a.G) >= c;
                        g = null === b || "0" === b;
                        if (!f && !g) {
                            h.j = 2;
                            return
                        }
                        e || (e = (_.B = d(), _.t(_.B, "finally")).call(_.B, function() {
                            e = void 0
                        }));
                        return Bb(h, e, 2)
                    }
                    return h.return(b)
                })
            })
        } else this.l.J(function() {
            return _.v.Promise.resolve("")
        })
    };
    Mp.prototype.m = function() {
        this.l.J(function() {
            return _.v.Promise.resolve("")
        })
    };
    var GM = function(a, b) {
        Z.call(this, a, 1091);
        this.B = W(this);
        b && (this.l = Y(this, b))
    };
    _.O(GM, Z);
    GM.prototype.j = function() {
        var a;
        null != (a = this.l) && a.value ? this.B.Ka(this.l.value()) : this.B.J("")
    };
    GM.prototype.m = function() {
        this.B.J("")
    };
    var HM = function(a, b, c) {
        Z.call(this, a, 1118);
        this.B = W(this);
        b && (this.l = Y(this, b));
        c && (this.A = Y(this, c))
    };
    _.O(HM, Z);
    HM.prototype.j = function() {
        var a, b = null == (a = this.l) ? void 0 : a.value;
        if (b) {
            a = new yG;
            a = _.fd(a, 1, b, 0);
            if (b & 1) {
                var c, d;
                b = IM(null != (d = null == (c = this.A) ? void 0 : c.value) ? d : null);
                _.Lh(a, 2, b)
            }
            this.B.J(a)
        } else AB(this.B)
    };
    var IM = function(a) {
        switch (_.Cf(lz)) {
            case 1:
                var b = 1;
                break;
            case 2:
                b = 2;
                break;
            case 3:
                b = 3;
                break;
            default:
                b = 0
        }
        var c = xG(new wG, b);
        null == a || a.forEach(function(d, e) {
            var f = dd(c, y(c, 2), 2, vG);
            var g = f.set,
                h = new vG;
            d = _.ed(h, 1, d, Ec);
            g.call(f, e, d)
        });
        return c
    };
    var Qp = function(a, b) {
        Z.call(this, a, 1107);
        this.G = b;
        this.B = W(this)
    };
    _.O(Qp, Z);
    Qp.prototype.j = function() {
        if (Wa()) {
            var a = Pg("run-ad-auction", this.G.document),
                b = Pg("browsing-topics", this.G.document),
                c = Pg("shared-storage", this.G.document),
                d = Pg("attribution-reporting", this.G.document),
                e = 0;
            a && (e |= 1);
            b && (e |= 4);
            c && (e |= 8);
            d && (e |= 2);
            0 === e ? AB(this.B) : this.B.J(e)
        } else AB(this.B)
    };
    Qp.prototype.m = function() {
        AB(this.B)
    };
    var JM = function(a, b) {
        Z.call(this, a, 820);
        this.G = b;
        this.B = W(this)
    };
    _.O(JM, Z);
    JM.prototype.j = function() {
        var a = this,
            b, c, d, e;
        return _.Ab(function(f) {
            if (1 == f.j) {
                if (!_.C(Iy)) {
                    a.B.Ka(Nj(a.G).then(function(g) {
                        var h = g.Bc;
                        KM(a, h, g.status);
                        return null != h ? h : ""
                    }));
                    f.j = 0;
                    return
                }
                return Bb(f, Nj(a.G), 3)
            }
            b = f.o;
            c = b.Bc;
            d = b.status;
            KM(a, c, d);
            a.B.J(null != (e = c) ? e : "");
            f.j = 0
        })
    };
    var KM = function(a, b, c) {
        b && oj("gpt_etu", function(d) {
            vj(d, a.context);
            J(d, "rsn", c)
        })
    };
    var fr = function(a, b, c, d, e) {
        Z.call(this, a, 807);
        this.G = b;
        this.B = NB(this);
        this.l = Y(this, c);
        this.A = X(this, d);
        e && PB(this, e)
    };
    _.O(fr, Z);
    fr.prototype.j = function() {
        var a = this.l.value;
        if (a && !this.A.value) {
            var b = Jx(this.G);
            fI(new eI(b, a)) || this.R(new jm("Cannot create top window frame"))
        }
        this.B.notify()
    };
    var jr = function(a, b, c, d) {
        Z.call(this, a, 1101);
        this.G = b;
        this.A = Y(this, d);
        this.l = Y(this, c)
    };
    _.O(jr, Z);
    jr.prototype.j = function() {
        if (Pg("browsing-topics", this.G.document) && this.A.value && this.l.value) {
            var a = this.l.value,
                b = Pj(this.G);
            b.setTopicsCalled ? _.v.Promise.resolve() : (b.setTopicsCalled = !0, a({
                message: "goog:topics:frame:get:topics",
                skipTopicsObservation: !1
            }))
        }
    };
    var Kp = function(a, b) {
        Z.call(this, a, 979);
        this.G = b;
        this.B = W(this)
    };
    _.O(Kp, Z);
    Kp.prototype.j = function() {
        var a = this,
            b = "function" !== typeof this.G.document.browsingTopics,
            c = !Pg("browsing-topics", this.G.document);
        b = b || c;
        !Pg("shared-storage", this.G.document) && b ? AB(this.B) : Rj(this.G).then(function(d) {
            a.B.J(d)
        })
    };
    Kp.prototype.m = function() {
        AB(this.B)
    };
    var LM = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 978);
        this.l = b;
        this.W = c;
        this.G = d;
        this.localStorage = e;
        this.B = W(this);
        f && (this.A = Y(this, f));
        g && (this.D = X(this, g))
    };
    _.O(LM, Z);
    LM.prototype.j = function() {
        var a;
        if (null != (a = this.A) && a.value && Pg("browsing-topics", this.G.document)) {
            var b;
            if (null != (a = null == (b = this.D) ? void 0 : b.value)) b = a;
            else {
                var c, d, e, f, g, h;
                b = !(null == (c = this.l) ? 0 : _.E(c, 8)) && (!_.C(Xy) || !(null == (d = this.l) ? 0 : _.E(d, 13))) && !(null == (e = this.l) ? 0 : _.E(e, 1)) && 1 !== (null == (f = this.l) ? void 0 : _.Ve(f, 6, 2)) && 1 !== (null == (g = this.l) ? void 0 : y(g, 5)) && !(null == (h = this.l) ? 0 : _.E(h, 9)) && !!ff(this.W) && !_.E(this.W, 9)
            }
            b ? (c = Xj(this.A.value, this.G, new _.WG(this.context), this.localStorage), this.B.Ka(c)) : this.B.J(5)
        } else AB(this.B)
    };
    LM.prototype.m = function() {
        AB(this.B)
    };
    var MM = function() {
            var a = this;
            this.promise = new _.v.Promise(function(b, c) {
                a.reject = c;
                a.resolve = b
            })
        },
        NM = function() {
            this.auctionSignals = new MM;
            this.topLevelSellerSignals = new MM;
            this.j = new MM;
            this.perBuyerSignals = new MM;
            this.perBuyerTimeouts = new MM;
            this.directFromSellerSignals = new MM
        },
        OM = function(a, b, c) {
            this.j = a;
            this.ae = b;
            this.Sb = c
        };
    var PM = navigator,
        QM = function(a, b, c, d, e, f) {
            Z.call(this, a, 1089);
            this.l = b;
            this.W = c;
            this.B = W(this);
            this.A = X(this, d);
            e && (this.D = X(this, e));
            f && (this.F = Y(this, f))
        };
    _.O(QM, Z);
    QM.prototype.j = function() {
        var a = _.C(kz),
            b, c, d = null != (c = null == (b = this.D) ? void 0 : b.value) ? c : !ff(this.W) || _.E(this.W, 9) ? !1 : this.l ? !_.E(this.l, 8) && (!_.C(Xy) || !_.E(this.l, 13)) && !_.E(this.l, 1) && 1 !== _.Ve(this.l, 6, 2) && 1 !== y(this.l, 5) && !_.E(this.l, 9) : !0;
        b = _.Cf(lz);
        c = 0 === b;
        var e = !("runAdAuction" in navigator && Pg("run-ad-auction", document));
        if (a || c || e || !d) AB(this.B);
        else {
            a = {};
            if (1 === b) {
                var f = _.w(this.A.value);
                for (b = f.next(); !b.done; b = f.next()) a[b.value.getId()] = RM()
            } else if (2 === b) {
                d = null == (f = this.F) ? void 0 : f.value;
                if (!d) {
                    AB(this.B);
                    return
                }
                f = _.w(this.A.value);
                for (b = f.next(); !b.done; b = f.next()) b = b.value, c = d.get(b.getId()), e = void 0, null != (e = c) && e.length && (a[b.getId()] = RM(c))
            }
            this.B.J(a)
        }
    };
    var RM = function(a) {
        var b = new NM,
            c = new AbortController;
        a = Io({
            ae: b,
            Sb: c,
            kg: _.C(nz),
            jg: _.C(mz),
            interestGroupBuyers: a
        });
        a = PM.runAdAuction(a).catch(function(d) {
            return d instanceof DOMException && "TimeoutError" === d.name ? 2 : 3
        });
        return new OM(a, b, c)
    };
    var Tq = function(a, b, c) {
        Z.call(this, a, 881);
        this.rb = b;
        this.B = W(this);
        this.l = Y(this, c)
    };
    _.O(Tq, Z);
    Tq.prototype.j = function() {
        if (_.C(kz) || !this.l.value) AB(this.B);
        else {
            for (var a = this.l.value, b = [], c = _.w((_.B = wK(this.rb), _.t(_.B, "values")).call(_.B)), d = c.next(); !d.done; d = c.next()) {
                d = d.value;
                try {
                    b.push(JSON.parse(d))
                } catch (m) {
                    Vh(this.context, 1023, m)
                }
            }
            c = this.B;
            d = c.J;
            for (var e = {}, f = _.w(Te(a, yw, 7)), g = f.next(); !g.done; g = f.next()) g = g.value, e[_.Kf(g, 1)] = JSON.parse(_.Kf(g, 2));
            if (f = dg(a, xw, 6)) e["https://googleads.g.doubleclick.net"] = f.toJSON(), e["https://td.doubleclick.net"] = f.toJSON();
            g = {};
            f = _.w(Te(a, zw, 11));
            for (var h = f.next(); !h.done; h = f.next()) h = h.value, g[_.Kf(h, 1)] = We(h, 2);
            var k = {};
            tq(a, 18) && (k["https://googleads.g.doubleclick.net"] = tq(a, 18), k["https://td.doubleclick.net"] = tq(a, 18));
            f = _.Kf(a, 1).split("/td/")[0];
            h = _.Kf(a, 19);
            h = "" !== h ? f + h : void 0;
            var l, n = _.t(Object, "assign").call(Object, {}, {
                seller: f,
                decisionLogicUrl: _.Kf(a, 1),
                trustedScoringSignalsUrl: _.Kf(a, 2),
                interestGroupBuyers: _.Tm(a, 3),
                sellerExperimentGroupId: tq(a, 17),
                auctionSignals: JSON.parse(_.Kf(a, 4) || "{}"),
                sellerSignals: (null == (l = dg(a, Bw, 5)) ? void 0 : l.toJSON()) || [],
                sellerTimeout: We(a, 15) || 50,
                perBuyerExperimentGroupIds: k,
                perBuyerSignals: e,
                perBuyerTimeouts: g
            }, h ? {
                directFromSellerSignals: h
            } : {});
            l = new Bw;
            "0" !== od(y(Dp(Dp(a, Bw, 5), Aw, 5), 2), "0") && (e = new Aw, g = od(y(Dp(Dp(a, Bw, 5), Aw, 5), 2), "0"), Ac(e), null != g && 0 !== +g ? Wc(e, 2, g) : Wc(e, 2, void 0, !1), _.Lh(l, 5, e));
            Dp(a, Bw, 5).getEscapedQemQueryId() && (e = Dp(a, Bw, 5).getEscapedQemQueryId(), _.nd(l, 2, e));
            a = _.t(Object, "assign").call(Object, {}, {
                seller: f,
                decisionLogicUrl: _.Kf(a, 1),
                sellerExperimentGroupId: tq(a, 17),
                sellerSignals: l.toJSON(),
                sellerTimeout: We(a, 15) || 50,
                interestGroupBuyers: [],
                auctionSignals: {},
                perBuyerExperimentGroupIds: {},
                perBuyerSignals: {},
                perBuyerTimeouts: {}
            }, h ? {
                directFromSellerSignals: h
            } : {}, {
                componentAuctions: [n].concat(_.xe(null != b ? b : []))
            });
            d.call(c, a)
        }
    };
    Tq.prototype.m = function() {
        AB(this.B)
    };
    var Ko = navigator,
        Lo = /(\$\{GDPR})/gi,
        Mo = /(\$\{GDPR_CONSENT_[0-9]+\})/gi,
        No = /(\$\{ADDTL_CONSENT})/gi,
        Oo = /(\$\{AD_WIDTH})/gi,
        Po = /(\$\{AD_HEIGHT})/gi;
    var SM = navigator,
        Uq = function(a, b, c, d, e, f, g, h, k, l) {
            Z.call(this, a, 882);
            this.L = b;
            this.W = c;
            this.ga = d;
            this.l = l;
            this.Sa = W(this);
            this.A = W(this);
            this.D = W(this);
            this.N = Y(this, e);
            this.P = Y(this, f);
            this.X = X(this, g);
            this.ca = X(this, h);
            this.ba = X(this, k)
        };
    _.O(Uq, Z);
    Uq.prototype.j = function() {
        var a = this,
            b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D;
        return _.Ab(function(F) {
            switch (F.j) {
                case 1:
                    if (TM(a)) return null == (b = a.l) || b.Sb.abort(), UM(a), F.return();
                    c = a.N.value;
                    d = c.getWidth();
                    e = c.getHeight();
                    if (!d || !e) return null == (f = a.l) || f.Sb.abort(), UM(a), F.return();
                    g = Dp(c, Bw, 5);
                    a.F = g.getEscapedQemQueryId();
                    a.K = _.Kf(g, 6);
                    h = _.E(g, 9);
                    if (k = _.E(g, 10))
                        if (UM(a), _.E(g, 17)) return So(0, 0, g), null == (l = a.l) || l.Sb.abort(), F.return();
                    oj("pre_run_ad_auction_ping", function(N) {
                        vj(N, a.context);
                        var L;
                        J(N, "winner_qid", null != (L = a.F) ? L : "");
                        var R;
                        J(N, "xfpQid", null != (R = a.K) ? R : "");
                        J(N, "publisher_tag", "gpt")
                    }, 1);
                    n = performance.now();
                    m = We(c, 8) || 1E3;
                    return Bb(F, VM(a, a.P.value, g, m, n), 2);
                case 2:
                    p = F.o;
                    r = Math.round(performance.now() - n);
                    u = 3 === p;
                    x = 2 === p;
                    G = 1 === p;
                    D = "string" === typeof p;
                    oj("run_ad_auction_stats", function(N) {
                        vj(N, a.context);
                        J(N, "duration_ms", r);
                        J(N, "applied_timeout_ms", m);
                        J(N, "timed_out", x ? 1 : 0);
                        J(N, "error", u ? 1 : 0);
                        J(N, "auction_skipped", G ? 1 : 0);
                        J(N, "auction_winner", D ? 1 : 0);
                        J(N, "thread_release_only", _.E(g, 15) ? 1 : 0);
                        var L;
                        J(N, "winner_qid", null != (L = a.F) ? L : "");
                        var R;
                        J(N, "xfpQid", null != (R = a.K) ? R : "");
                        J(N, "publisher_tag", "gpt");
                        a.l && J(N, "parallel", "1")
                    }, 1);
                    if (!D) return So(r, x ? m : 0, g), k || UM(a), F.return();
                    if (k) return Bb(F, SM.deprecatedURNToURL(p, !0), 7);
                    if (!h) {
                        F.j = 4;
                        break
                    }
                    return Bb(F, SM.deprecatedURNToURL(p, !0), 6);
                case 6:
                    return UM(a), F.return();
                case 7:
                    return F.return();
                case 4:
                    return Bb(F, Qo(p, {
                        gdprApplies: Al(a.W, 3) ? _.E(a.W, 3) ? "1" : "0" : null,
                        kh: y(a.W, 2),
                        vg: y(a.W, 4),
                        tg: c.getWidth() ? c.getWidth().toString() : null,
                        rg: c.getHeight() ? c.getHeight().toString() : null
                    }), 8);
                case 8:
                    ln(a.ba.value, !0), a.Sa.J({
                        kind: 2,
                        Qe: p
                    }), a.A.J(new _.Ri(d, e)), a.D.J(!1), F.j = 0
            }
        })
    };
    Uq.prototype.m = function() {
        UM(this)
    };
    var VM = function(a, b, c, d, e) {
            var f = We(c, 14) || -1;
            if (0 < f && a.L.m >= f) return 1;
            f = We(c, 13) || -1;
            if (0 < f && a.L.H >= f) return 1;
            ++a.L.m;
            ++a.L.H;
            b.signal = AbortSignal.timeout(d);
            b = a.l ? WM(a, b, d, e, a.l, _.E(c, 15)) : XM(a, b, d, e, _.E(c, 15));
            --a.L.m;
            return b
        },
        XM = function(a, b, c, d, e) {
            if (e) return To();
            var f;
            return null == (f = SM.runAdAuction) ? void 0 : f.call(SM, b).then(function(g) {
                YM(a, g, c, d);
                return g
            }).catch(function(g) {
                return g instanceof DOMException && "TimeoutError" === g.name ? 2 : 3
            })
        },
        WM = function(a, b, c, d, e, f) {
            if (f) return To();
            Jo(b, e.ae);
            setTimeout(function() {
                e.Sb.abort(new DOMException("runAdAuction", "TimeoutError"))
            }, c);
            return e.j.then(function(g) {
                null !== g && "string" !== typeof g || YM(a, g, c, d);
                return g
            })
        },
        YM = function(a, b, c, d) {
            oj("run_ad_auction_complete", function(e) {
                vj(e, a.context);
                J(e, "duration_ms", Math.round(performance.now() - d));
                J(e, "applied_timeout_ms", c);
                J(e, "auction_has_winner", !!b);
                a.F && J(e, "winner_qid", a.F);
                a.K && J(e, "xfpQid", a.K)
            }, 1)
        },
        TM = function(a) {
            var b = !!SM.runAdAuction && Pg("run-ad-auction", document);
            return _.C(kz) || !b || !a.N.value || !a.P.value
        },
        UM = function(a) {
            a.D.J(a.ga);
            a.Sa.J(a.X.value);
            a.A.J(a.ca.value)
        };
    var Uo = "3rd party ad content";
    var ZM = function(a, b, c) {
        _.T.call(this);
        this.context = a;
        this.La = b;
        this.m = c;
        a = c.slotId;
        b = c.size;
        this.j = "height" === c.ah ? "fluid" : [b.width, b.height];
        this.Fc = ej(a);
        this.Gc = Uo
    };
    _.O(ZM, _.T);
    ZM.prototype.render = function() {
        var a = this.La,
            b = this.m,
            c = b.slotId,
            d = b.O.V,
            e = b.size,
            f = b.ie,
            g = b.isBackfill,
            h = b.Uc;
        mh(b.lc, _.ex(b.T), null != f ? f : "", !1);
        wq(_.rf(Th), "5", tq(d[c.getDomId()], 20));
        c.dispatchEvent(xq, 801, {
            gf: 0 === a.kind ? a.eb : "",
            isBackfill: g
        });
        a = this.l();
        h && a && a.setAttribute("data-google-container-id", h);
        c.dispatchEvent(zq, 825, {
            size: e,
            isEmpty: !1
        });
        return a
    };
    ZM.prototype.loaded = function(a) {
        var b = this.m,
            c = b.slotId,
            d = b.ra;
        b = b.O.V;
        c.dispatchEvent(rI, 844, void 0);
        a && a.setAttribute("data-load-complete", !0);
        d.dispatchEvent("slotOnload", 710, new qM(c, "publisher_ads"));
        wq(_.rf(Th), "6", tq(b[c.getDomId()], 20))
    };
    var $M = function(a, b) {
        if (b) return null;
        a = a.La;
        a = 0 === a.kind ? a.eb : "";
        b = "";
        var c = !0,
            d = "sf";
        b = void 0 === b ? "" : b;
        c = void 0 === c ? !1 : c;
        d = void 0 === d ? "" : d;
        if (a) {
            var e = a.toLowerCase(); - 1 < e.indexOf("<!doctype") || -1 < e.indexOf("<html") ? c && Eh(d, 2) : (c && Eh(d, 3), a = _.C(zz) ? a : "<!doctype html><html><head>" + b + "</head><body>" + a + "</body></html>")
        } else c && Eh(d, 1);
        return a
    };
    ZM.prototype.o = function() {
        _.T.prototype.o.call(this);
        this.m.lc.removeAttribute("data-google-query-id")
    };
    ZM.prototype.I = function(a, b) {
        var c = this,
            d = aN(this, function() {
                return void c.loaded(d.j)
            }, a, b);
        _.Qn(this, function() {
            100 != d.status && (2 == d.ha && (EH(d.m), d.ha = 0), window.clearTimeout(d.R), d.R = -1, d.A = 3, d.o && (d.o.Da(), d.o = null), _.De(window, "resize", d.D), _.De(window, "scroll", d.D), d.l && d.j && d.l == _.ix(d.j) && d.l.removeChild(d.j), d.j = null, d.l = null, d.status = 100)
        });
        return d
    };
    var aN = function(a, b, c, d) {
        var e = a.m,
            f = e.Zf,
            g = e.isBackfill,
            h = e.th,
            k = e.Uc,
            l = e.td,
            n = e.Sd,
            m = e.Ba,
            p = Array.isArray(a.j) ? new _.Ri(Number(a.j[0]), Number(a.j[1])) : 1;
        return new MH({
            Ge: e.df,
            Fc: a.Fc,
            Gc: a.Gc,
            content: $M(a, d),
            size: p,
            Sg: !!h,
            Mf: b,
            bg: null != f ? f : void 0,
            permissions: {
                pd: Al(c, 1) ? !!_.E(c, 1) : !g,
                qd: Al(c, 2) ? !!_.E(c, 2) : !1
            },
            Hc: !!Kk().fifWin,
            ji: gK ? gK : gK = pl(),
            Dg: tl(),
            hostpageLibraryTokens: m.hostpageLibraryTokens,
            Ua: function(r, u) {
                return void Vh(a.context, r, u)
            },
            uniqueId: k,
            Yf: jH(),
            td: null != l ? l : void 0,
            yd: null != d ? d : void 0,
            Sd: null != n ? n : void 0
        })
    };
    var bN = function() {
        ZM.apply(this, arguments)
    };
    _.O(bN, ZM);
    var cN = function(a, b) {
            var c = _.Ce(b ? "fencedframe" : "IFRAME");
            b && (c.mode = "opaque-ads");
            c.id = a.Fc;
            c.name = a.Fc;
            c.title = a.Gc;
            Array.isArray(a.j) ? null != a.j[0] && null != a.j[1] && (c.width = String(a.j[0]), c.height = String(a.j[1])) : (c.width = "100%", c.height = "0");
            c.allowTransparency = "true";
            c.scrolling = "no";
            c.marginWidth = "0";
            c.marginHeight = "0";
            c.frameBorder = "0";
            c.style.border = "0";
            c.style.verticalAlign = "bottom";
            c.setAttribute("role", "region");
            c.setAttribute("aria-label", "Advertisement");
            c.tabIndex = 0;
            return c
        },
        dN = function(a, b) {
            "string" !== typeof a.j && (b.width = String(a.j[0]), b.height = String(a.j[1]));
            var c = Rh(a.context, 774, function() {
                a.loaded(b);
                _.De(b, "load", c)
            });
            _.yb(b, "load", c);
            _.Qn(a, function() {
                return _.De(b, "load", c)
            });
            a.m.df.appendChild(b)
        };
    var qq = function() {
        bN.apply(this, arguments)
    };
    _.O(qq, bN);
    qq.prototype.l = function() {
        var a = cN(this, !this.m.wi);
        Ij(a, this.La.Qe);
        dN(this, a);
        return a
    };
    qq.prototype.C = function() {
        return !1
    };
    var Sp = function(a) {
        Z.call(this, a, 1083);
        this.B = W(this)
    };
    _.O(Sp, Z);
    Sp.prototype.j = function() {
        var a = wk();
        a ? this.B.Ka(a) : AB(this.B)
    };
    var eN = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r) {
        Z.call(this, a, 866);
        this.F = b;
        this.l = c;
        this.D = d;
        this.Kc = e;
        this.yc = f;
        this.W = g;
        this.T = h;
        this.B = NB(this);
        this.A = X(this, k);
        this.N = Y(this, l);
        this.P = X(this, n);
        this.X = X(this, m);
        PB(this, p);
        this.K = X(this, r)
    };
    _.O(eN, Z);
    eN.prototype.j = function() {
        var a, b, c, d = this,
            e, f, g, h, k, l, n, m, p, r, u, x, G;
        return _.Ab(function(D) {
            switch (D.j) {
                case 1:
                    e = d.P.value;
                    if (!e) return d.B.notify(), D.return();
                    f = Hb(d.X.value, {
                        uuid: d.yc
                    });
                    g = document.createElement("script");
                    h = {
                        source: e,
                        credentials: d.K.value ? "include" : "omit",
                        resources: [f.toString()]
                    };
                    g.setAttribute("type", "webbundle");
                    kb(g, new _.lp(JSON.stringify(h).replace(/</g, "\\u003C"), mp));
                    d.T.head.appendChild(g);
                    d.B.notify();
                    D.m = 2;
                    return Bb(D, fN(f), 4);
                case 4:
                    k = D.o;
                    Db(D, 3);
                    break;
                case 2:
                    l = Eb(D);
                    if (l instanceof mB) return d.l(l), D.return();
                    throw l;
                case 3:
                    a = _.Tm(k, 1);
                    b = _.Tm(k, 2);
                    c = _.Tm(k, 3);
                    n = a;
                    m = b;
                    p = c;
                    if (n.length !== m.length) return d.l(new lB("Received " + n.length + " ad URLs but " + m.length + " metadatas")), D.return();
                    h.resources = [].concat(_.xe(n.filter(function(F) {
                        return F
                    })), _.xe(p.map(function(F) {
                        return "https://securepubads.g.doubleclick.net" + F
                    })));
                    h.resources.length ? (r = _.Ce("SCRIPT"), r.setAttribute("type", "webbundle"), kb(r, new _.lp(JSON.stringify(h).replace(/</g, "\\u003C"), mp)), d.T.head.removeChild(g), d.T.head.appendChild(r)) : d.T.head.removeChild(g);
                    for (u = 0; u < n.length; u++) x = n[u], G = m[u], d.F(u, G, {
                        kind: 1,
                        url: x
                    }, d.A.value, d.W, d.N.value);
                    d.D(n.length - 1, d.A.value, d.W);
                    D.j = 0
            }
        })
    };
    var fN = function(a) {
        var b, c;
        return _.Ab(function(d) {
            if (1 == d.j) return Bb(d, fetch(a.toString()).catch(function() {
                throw new mB("Failed to fetch bundle index.");
            }), 2);
            if (3 != d.j) return b = d.o, Bb(d, b.text(), 3);
            c = d.o;
            return d.return(Kw(c))
        })
    };
    var xp = new _.v.Set,
        gN = function(a, b, c) {
            var d = 0,
                e = function() {
                    d = 0
                };
            return function(f) {
                d || (d = _.q.setTimeout(e, b), a.apply(c, arguments))
            }
        }(function() {
            throw new jm("Reached Limit for addEventListener");
        }, 3E5),
        hN = function(a, b) {
            _.T.call(this);
            this.j = a;
            this.l = b;
            this.m = [];
            this.C = !1;
            this.D = 0;
            this.A = new _.v.Map;
            xp.add(this);
            this.j.info(ZI(this.getName()))
        };
    _.O(hN, _.T);
    var zp = function(a) {
        a.C || (a.C = !0, uf(6), a.R())
    };
    hN.prototype.slotAdded = function(a, b) {
        this.m.push(a);
        var c = new rM(a, this.getName());
        this.l.dispatchEvent("slotAdded", 818, c);
        this.j.info(aJ(this.getName(), a.getAdUnitPath()), a);
        a = this.getName();
        Fu(b, 4, a)
    };
    hN.prototype.destroySlots = function(a) {
        var b = this;
        return a.filter(function(c) {
            return ka(b.m, c)
        })
    };
    hN.prototype.addEventListener = function(a, b, c) {
        var d = this;
        c = void 0 === c ? window : c;
        if (this.D >= _.Cf(xy) && 0 < _.Cf(xy)) return gN(), !1;
        if (!c.IntersectionObserver && (_.B = ["impressionViewable", "slotVisibilityChanged"], _.t(_.B, "includes")).call(_.B, a)) return M(this.j, VJ()), !1;
        var e;
        if (null == (e = this.A.get(a)) ? 0 : e.has(b)) return !1;
        this.A.has(a) || this.A.set(a, new _.v.Map);
        c = function(f) {
            f = f.detail;
            try {
                b(f)
            } catch (k) {
                d.j.error(rJ(String(k), a));
                var g, h;
                null == (g = window.console) || null == (h = g.error) || h.call(g, k)
            }
        };
        this.A.get(a).set(b, c);
        this.l.Z(a, c);
        this.D++;
        return !0
    };
    hN.prototype.removeEventListener = function(a, b) {
        var c, d = null == (c = this.A.get(a)) ? void 0 : c.get(b);
        if (!d || !kI(this.l, a, d)) return !1;
        this.D--;
        return this.A.get(a).delete(b)
    };
    var pp = function(a) {
        for (var b = _.w(xp), c = b.next(); !c.done; c = b.next()) c.value.destroySlots(a)
    };
    var tp = function(a, b, c, d) {
        hN.call(this, a, c);
        this.I = b;
        this.ads = new _.v.Map;
        this.M = this.Ob = !1;
        d.H = !0
    };
    _.O(tp, hN);
    tp.prototype.slotAdded = function(a, b) {
        var c = this;
        a.Z(nI, function(d) {
            zu(d.detail, 11) && (iN(c, a).Sh = !0)
        });
        hN.prototype.slotAdded.call(this, a, b)
    };
    tp.prototype.R = function() {};
    tp.prototype.setRefreshUnfilledSlots = function(a) {
        "boolean" === typeof a && (this.Ob = a)
    };
    var ZJ = function(a, b) {
            b && !a.M && oj("ima_sdk_v", function(c) {
                a.M = !0;
                J(c, "v", b)
            });
            return String(Bu())
        },
        XJ = function(a, b) {
            var c = hj().j,
                d = hj().o;
            if (a.I.C) {
                var e = {
                    yb: 3
                };
                a.F && (e.mc = a.F);
                a.K && (e.nc = a.K);
                b = null != b ? b : a.m;
                c = Ui(c, d);
                d = e.mc;
                var f = e.nc;
                d && "number" !== typeof d || f && "number" !== typeof f || a.I.refresh(c, b, e)
            } else(null == b ? 0 : b[0]) && a.j.error(gJ(b[0].getDomId()))
        },
        $J = function(a, b) {
            var c;
            return a.I.C && !(null == (c = a.ads.get(b)) || !c.Sh)
        },
        YJ = function(a, b) {
            return a.m.filter(function(c) {
                return _.t(b, "includes").call(b, c.toString())
            })
        };
    tp.prototype.getName = function() {
        return "companion_ads"
    };
    var aK = function(a, b, c, d) {
            b = new nM(b, a.getName());
            null != c && null != d && (b.size = [c, d]);
            a.l.dispatchEvent("slotRenderEnded", 67, b)
        },
        iN = function(a, b) {
            var c = a.ads.get(b);
            c || (c = {}, a.ads.set(b, c), _.Qn(b, function() {
                return a.ads.delete(b)
            }));
            return c
        };
    var up = function(a, b) {
        hN.call(this, a, b)
    };
    _.O(up, hN);
    up.prototype.getName = function() {
        return "content"
    };
    up.prototype.R = function() {};
    var jN = function() {
            this.o = [];
            this.hostpageLibraryTokens = [];
            this.j = {}
        },
        kN = function(a, b) {
            if (!_.t(a.o, "includes").call(a.o, b) && (_.B = [1, 2, 3], _.t(_.B, "includes")).call(_.B, b)) {
                var c = gC[b];
                if (c) {
                    var d = b + "_hostpage_library";
                    if (c = Tk(document, c)) c.id = d
                }
                a.o.push(b);
                b = new hC(b);
                a.hostpageLibraryTokens.push(b);
                a = Kk();
                a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                a.hostpageLibraryTokens[b.j] = b.o
            }
        },
        lN = function(a, b, c) {
            var d;
            a.j[b] = null != (d = a.j[b]) ? d : new _.v.Set;
            a.j[b].add(c)
        },
        Ap = function(a, b) {
            var c, d;
            a = null != (d = null == (c = a.j[b]) ? void 0 : _.t(c, "values").call(c)) ? d : [];
            return [].concat(_.xe(a))
        };
    var mN = _.P(["https://securepubads.g.doubleclick.net/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        nN = _.P(["https://securepubads.g.doubleclick.net/gpt/pubads_impl_", "_", ".js"]),
        oN = _.P(["https://pagead2.googlesyndication.com/pagead/managed/js/gpt/", "/pubads_impl_", ".js"]),
        pN = _.P(["https://pagead2.googlesyndication.com/gpt/pubads_impl_", "_", ".js"]),
        qN = new _.v.Map([
            [2, {
                If: "page_level_ads"
            }],
            [5, {
                If: "shoppit"
            }]
        ]),
        rN = function(a) {
            var b = void 0 === b ? qN : b;
            this.context = a;
            this.j = b;
            this.o = new _.v.Map;
            this.loaded = new _.v.Set
        },
        tN;
    rN.prototype.load = function(a) {
        var b = _.sN(this, a),
            c, d = (null != (c = this.j.get(a.module)) ? c : {}).If;
        if (!d) throw Error("cannot load invalid module: " + d);
        if (!this.loaded.has(a.module)) {
            d = (c = _.Ih(172)) && "pagead2.googlesyndication.com" === lx((c.src || "").match(_.kx)[3] || null) ? this.context.nb ? _.A(oN, this.context.nb, d) : _.A(pN, d, this.context.Wa) : this.context.nb ? _.A(mN, this.context.nb, d) : _.A(nN, d, this.context.Wa);
            c = {};
            var e = _.Cf($y);
            e && (c.cb = e);
            d = _.t(Object, "keys").call(Object, c).length ? Zs(d, c) : d;
            tN(this, a);
            Tk(document, d);
            this.loaded.add(a.module)
        }
        return b.promise
    };
    _.sN = function(a, b) {
        b = b.module;
        a.o.has(b) || a.o.set(b, new _.fh);
        return a.o.get(b)
    };
    tN = function(a, b) {
        var c = b.module;
        b = "_gpt_js_load_" + c + "_";
        var d = Rh(a.context, 340, function(e) {
            if (a.j.has(c) && "function" === typeof e) {
                var f = a.j.get(c);
                f = (void 0 === f.Mg ? [] : f.Mg).map(function(g) {
                    return _.sN(a, g).promise
                });
                _.v.Promise.all(f).then(function() {
                    e.call(window, _, a)
                })
            }
        });
        Object.defineProperty(Kk(), b, {
            value: function(e) {
                if (d) {
                    var f = d;
                    d = null;
                    f(e)
                }
            },
            writable: !1,
            enumerable: !1
        })
    };
    var uN = function() {
        this.resources = {}
    };
    var nq = function() {
        ZM.apply(this, arguments)
    };
    _.O(nq, ZM);
    nq.prototype.l = function() {
        var a = this.m,
            b = a.O,
            c = b.U;
        a = b.V[a.slotId.getDomId()];
        b = new ul;
        c = Bl([b, c.kb(), null == a ? void 0 : a.kb()]);
        return ZM.prototype.I.call(this, c).j
    };
    nq.prototype.C = function() {
        return !1
    };
    var oq = function() {
        bN.apply(this, arguments)
    };
    _.O(oq, bN);
    oq.prototype.l = function() {
        var a = this,
            b = this.m,
            c = b.Zf;
        b = b.td;
        var d = cN(this);
        if (null == c ? 0 : c.length)
            if (_.Pt) {
                c = _.w(c);
                for (var e = c.next(); !e.done; e = c.next()) d.sandbox.add(e.value)
            } else d.sandbox.add.apply(d.sandbox, _.xe(c));
        b && (d.allow = b);
        dN(this, d);
        Xh(this.context, 653, function() {
            var f;
            if (f = _.Bt(a.La.eb)) {
                var g = f.toString().toLowerCase(); - 1 < g.indexOf("<!doctype") || -1 < g.indexOf("<html") ? mq(2) : (mq(3), f = _.C(zz) ? f : _.Bt("<!doctype html><html><head><script>var inDapIF=true,inGptIF=true;\x3c/script></head><body>" + f + "</body></html>"))
            } else mq(1);
            var h, k;
            g = null != (k = null == (h = d.contentWindow) ? void 0 : h.document) ? k : d.contentDocument;
            Va() && g.open("text/html", "replace");
            pb(g, f);
            var l, n, m;
            if (bt(null != (m = null == (l = d.contentWindow) ? void 0 : null == (n = l.location) ? void 0 : n.href) ? m : "", "#")) {
                var p, r;
                null == (p = d.contentWindow) || null == (r = p.history) || r.replaceState(null, "", "#" + Math.random())
            }
            g.close()
        }, !0);
        return d
    };
    oq.prototype.C = function() {
        return !0
    };
    var pq = function() {
        bN.apply(this, arguments)
    };
    _.O(pq, bN);
    pq.prototype.l = function() {
        var a = this.La.url,
            b = this.m,
            c = b.O,
            d = c.U;
        b = c.V[b.slotId.getDomId()];
        d = Bl([d.kb(), null == b ? void 0 : b.kb()]);
        var e = cN(this);
        Ij(e, a);
        bN.prototype.I.call(this, d, e);
        var f = function() {
            e.removeEventListener("load", f);
            vN(a)
        };
        e.addEventListener("load", f);
        Ix(e, function() {
            return void vN(a)
        });
        return e
    };
    var vN = function(a) {
        var b = document.querySelectorAll("script[type=webbundle]");
        if (b.length) {
            a: {
                for (var c = 0; c < b.length; c++) {
                    var d = void 0;
                    if (null == (d = b[c].textContent) ? 0 : d.match(a)) {
                        b = b[c];
                        break a
                    }
                }
                b = null
            }
            b && b.textContent && (c = JSON.parse(b.textContent)) && "object" === typeof c && (d = c.resources, a = d.indexOf(a, 0), -1 < a && d.splice(a, 1), 0 === d.length ? document.head.removeChild(b) : (a = _.Ce("SCRIPT"), a.setAttribute("type", "webbundle"), a.textContent = JSON.stringify(c), document.head.removeChild(b), document.head.appendChild(a)))
        }
    };
    pq.prototype.C = function() {
        return !1
    };
    var kr = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D, F, N, L, R, S, V, ja, da) {
        Z.call(this, a, 680);
        this.slotId = b;
        this.L = c;
        this.O = d;
        this.ra = e;
        this.Ba = f;
        this.G = g;
        this.l = W(this);
        this.A = W(this);
        this.D = NB(this);
        this.K = X(this, h);
        this.za = X(this, k);
        PB(this, l);
        this.ca = X(this, n);
        this.F = X(this, m);
        this.ba = X(this, p);
        PB(this, N);
        this.N = X(this, r);
        this.P = Y(this, u);
        this.Qa = Y(this, x);
        this.X = X(this, G);
        this.ta = Y(this, D);
        this.Eb = Y(this, F);
        PB(this, L);
        this.pa = X(this, R);
        PB(this, S);
        da && PB(this, da);
        this.ga = Y(this, V);
        ja && (this.ka = Y(this, ja))
    };
    _.O(kr, Z);
    kr.prototype.j = function() {
        var a = this,
            b = this.K.value;
        if (0 === b.kind && null == b.eb) throw new lB("invalid html");
        var c, d;
        b = rq(this.context, b, {
            T: document,
            slotId: this.slotId,
            L: this.L,
            O: this.O,
            ra: this.ra,
            size: this.ba.value,
            lc: this.ca.value,
            df: this.F.value,
            ie: this.N.value,
            ah: this.P.value,
            Zf: this.Qa.value,
            isBackfill: this.X.value,
            th: this.ta.value,
            Uc: this.Eb.value,
            td: this.pa.value,
            wi: null == (c = this.ga.value) ? void 0 : _.E(c, 14),
            Sd: null == (d = this.ka) ? void 0 : d.value,
            Ba: this.Ba
        }, {
            xi: this.za.value
        });
        _.Fn(this, b);
        var e = b.render();
        NK(this, this.id, this.G, "message", function(f) {
            e.contentWindow === f.source && a.slotId.dispatchEvent(Go, 824, f)
        });
        this.D.notify();
        this.l.J(e);
        this.A.J(b.C())
    };
    var rr = function(a, b, c, d, e, f) {
        Z.call(this, a, 863);
        this.l = c;
        this.xc = Number(b);
        this.A = X(this, d);
        this.D = X(this, e);
        this.F = X(this, f)
    };
    _.O(rr, Z);
    rr.prototype.j = function() {
        var a = sq(this.l),
            b = this.F.value,
            c = this.A.value,
            d = this.D.value,
            e = this.l;
        var f = sq(e);
        var g = c.getBoundingClientRect();
        e = _.qe(e) ? Ni(c, e) : {
            x: 0,
            y: 0
        };
        c = e.x;
        e = e.y;
        g = new _.Kx(e, c + g.right, e + g.bottom, c);
        c = new nG;
        c = _.z(c, 1, g.top);
        c = _.z(c, 3, g.bottom);
        c = _.z(c, 2, g.left);
        g = _.z(c, 4, g.right);
        c = new oG;
        c = _.z(c, 1, this.xc);
        d = _.z(c, 2, !d);
        d = _.Lh(d, 3, g);
        a = _.z(d, 4, a);
        f = _.z(a, 5, f);
        f = {
            type: "asmres",
            payload: Qe(f)
        };
        b.ports[0].postMessage(f)
    };
    var Iq = function(a, b, c, d, e) {
        Z.call(this, a, 720);
        this.format = b;
        this.D = c;
        this.B = W(this);
        this.l = Y(this, d);
        this.A = Y(this, e)
    };
    _.O(Iq, Z);
    Iq.prototype.j = function() {
        var a = this.A.value;
        if (null == a) AB(this.B);
        else {
            var b = Math.round(.3 * this.D),
                c;
            2 !== this.format && 3 !== this.format || null == (c = this.l.value) || !_.E(c, 12, !1) || 0 >= b || a <= b ? this.B.J(a) : this.B.J(b)
        }
    };
    var Xq = function(a, b, c) {
        Z.call(this, a, 1054);
        this.l = b;
        this.B = NB(this);
        this.A = X(this, c)
    };
    _.O(Xq, Z);
    Xq.prototype.j = function() {
        this.A.value || this.l();
        this.B.notify()
    };
    var Zq = function(a, b, c, d, e, f, g, h, k, l, n, m) {
        Z.call(this, a, 674);
        this.slotId = b;
        this.U = c;
        this.A = d;
        this.T = f;
        this.L = g;
        this.B = W(this);
        this.F = 2 === e || 3 === e;
        this.l = X(this, h);
        this.N = X(this, k);
        this.K = Y(this, l);
        this.D = Y(this, n);
        m && PB(this, m)
    };
    _.O(Zq, Z);
    Zq.prototype.j = function() {
        var a = si(this.U, this.A),
            b = Xi(this.slotId, this.T) || pm(this.l.value, fj(this.slotId), a);
        this.N.value && !a && (b.style.display = "inline-block");
        this.F ? wI(this.L, this.slotId, function() {
            return void _.hx(b)
        }) : _.Qn(this, function() {
            return void _.hx(b)
        });
        a = wN(this);
        0 < a && (b.style.paddingTop = a + "px");
        this.B.J(b)
    };
    var wN = function(a) {
        var b = a.l.value,
            c, d = null == (c = a.K.value) ? void 0 : c.height;
        if (b && !a.D.value && d) {
            var e;
            c = (null != (e = ri(a.A, 23)) ? e : _.E(a.U, 31)) ? Math.floor((b.offsetHeight - d) / 2) : 0
        } else c = 0;
        return c
    };
    var Dq = function(a, b) {
        Z.call(this, a, 859);
        this.G = b;
        this.B = W(this)
    };
    _.O(Dq, Z);
    Dq.prototype.j = function() {
        this.B.J(!_.qe(this.G.top))
    };
    var br = function(a, b, c) {
        Z.call(this, a, 698);
        this.G = b;
        this.B = W(this);
        this.l = X(this, c)
    };
    _.O(br, Z);
    br.prototype.j = function() {
        zB(this.B, $i(this.l.value, this.G))
    };
    var gr = function(a, b, c) {
        Z.call(this, a, 840);
        this.format = b;
        this.T = c;
        this.B = W(this)
    };
    _.O(gr, Z);
    gr.prototype.j = function() {
        var a = [],
            b = this.T;
        b = void 0 === b ? document : b;
        var c;
        null != (c = b.featurePolicy) && (_.B = c.features(), _.t(_.B, "includes")).call(_.B, "attribution-reporting") && a.push("attribution-reporting");
        5 !== this.format && 4 !== this.format || !_.C(ky) || a.push("autoplay");
        a.length ? this.B.J(a.join(";")) : this.B.J("")
    };
    var lr = function(a, b, c, d, e) {
        Z.call(this, a, 934);
        this.G = b;
        this.slotId = c;
        PB(this, d);
        this.l = X(this, e)
    };
    _.O(lr, Z);
    lr.prototype.j = function() {
        var a = this;
        this.slotId.Z(Go, function(b) {
            b = b.detail.data;
            try {
                var c = JSON.parse(b);
                if ("gpi-uoo" === c.googMsgType) {
                    var d = c.userOptOut,
                        e = c.clearAdsData,
                        f = a.l.value,
                        g = new sw;
                    var h = _.z(g, 1, d ? "1" : "0");
                    var k = _.z(h, 2, 2147483647);
                    var l = _.z(k, 3, "/");
                    var n = _.z(l, 4, a.G.location.hostname);
                    var m = new _.aC(a.G);
                    dC(m, "__gpi_opt_out", n, f);
                    if (d || e) eC(m, "__gads", f), eC(m, "__gpi", f)
                }
            } catch (p) {}
        })
    };
    var Wq = function(a, b, c, d, e, f) {
        Z.call(this, a, 1053);
        this.slotId = b;
        this.O = c;
        this.L = d;
        this.l = W(this);
        this.A = X(this, e);
        this.D = X(this, f)
    };
    _.O(Wq, Z);
    Wq.prototype.j = function() {
        this.D.value ? (Aq(this.slotId, this.L, this.O, this.A.value), this.l.J(!1)) : this.l.J(!0)
    };
    var vr = function(a, b, c, d, e, f) {
        Z.call(this, a, 721);
        this.G = b;
        this.F = Y(this, c);
        this.A = X(this, d);
        this.l = X(this, e);
        this.D = X(this, f)
    };
    _.O(vr, Z);
    vr.prototype.j = function() {
        var a = this,
            b = this.F.value,
            c, d = null == b ? void 0 : null == (c = y(b, 1)) ? void 0 : c.toUpperCase(),
            e;
        b = null == b ? void 0 : null == (e = y(b, 2)) ? void 0 : e.toUpperCase();
        if (d && b) {
            e = this.A.value;
            c = this.l.value;
            var f = this.D.value,
                g = f.style.height,
                h = f.style.width,
                k = f.style.display,
                l = f.style.position,
                n = Bq(e.id + "_top", d),
                m = Bq(e.id + "_bottom", b);
            _.jj(m, {
                position: "relative",
                top: "calc(100vh - 48px)"
            });
            f.appendChild(n);
            f.appendChild(m);
            _.jj(c, {
                position: "absolute",
                top: "24px",
                clip: "rect(0, auto, auto, 0)",
                width: "100vw",
                height: "calc(100vh - 48px)"
            });
            _.jj(e, {
                position: "fixed",
                top: "0",
                height: "100vh"
            });
            var p;
            _.jj(f, {
                position: "relative",
                display: (null == (p = this.G.screen.orientation) ? 0 : p.angle) ? "none" : "block",
                width: "100vw",
                height: "100vh"
            });
            NK(this, 722, this.G, "orientationchange", function() {
                var r;
                (null == (r = a.G.screen.orientation) ? 0 : r.angle) ? _.jj(f, {
                    display: "none"
                }): _.jj(f, {
                    display: "block"
                })
            });
            _.Qn(this, function() {
                _.hx(n);
                _.hx(m);
                f.style.position = l;
                f.style.height = g;
                f.style.width = h;
                f.style.display = k
            })
        }
    };
    var pr = function(a, b, c, d, e, f) {
        f = void 0 === f ? Cq : f;
        Z.call(this, a, 783);
        var g = this;
        this.slotId = b;
        this.T = d;
        this.ra = e;
        this.K = f;
        this.F = !1;
        this.l = null;
        this.D = this.A = -1;
        this.P = _.Hs(function() {
            g.ra.dispatchEvent("impressionViewable", 715, new oM(g.slotId, "publisher_ads"))
        });
        this.X = Is(function() {
            g.ra.dispatchEvent("slotVisibilityChanged", 716, new pM(g.slotId, "publisher_ads", g.D))
        });
        this.N = X(this, c);
        var h = new GB;
        lI(this.slotId, rI).then(function() {
            return void h.notify()
        });
        PB(this, h)
    };
    _.O(pr, Z);
    pr.prototype.j = function() {
        var a = this,
            b = this.K(Rh(this.context, this.id, function(c) {
                c = _.w(c);
                for (var d = c.next(); !d.done; d = c.next()) a.A = 100 * d.value.intersectionRatio, _.t(Number, "isFinite").call(Number, a.A) && xN(a)
            }));
        b && (b.observe(this.N.value), NK(this, this.id, this.T, "visibilitychange", function() {
            xN(a)
        }), _.Qn(this, function() {
            b.disconnect()
        }))
    };
    var xN = function(a) {
            var b = !rG(a.T);
            yN(a, 50 <= a.A && b);
            b = Math.floor(b ? a.A : 0);
            if (0 > b || 100 < b || b === a.D ? 0 : -1 !== a.D || 0 !== b) a.D = b, a.X()
        },
        yN = function(a, b) {
            a.F || (b ? null === a.l && (a.l = setTimeout(function() {
                rG(a.T) || (a.P(), a.F = !0);
                a.l = null
            }, 1E3)) : null !== a.l && (clearTimeout(a.l), a.l = null))
        };
    var zN = _.P(["https://td.doubleclick.net/td/kb?kbli=", ""]),
        ir = function(a, b, c) {
            Z.call(this, a, 1007);
            this.l = Y(this, b);
            c && PB(this, c)
        };
    _.O(ir, Z);
    ir.prototype.j = function() {
        var a = this.l.value;
        if (null != a && a.length && null === document.getElementById("koelBirdIGRegisterIframe")) {
            var b = document.createElement("iframe");
            a = xb(zN, encodeURIComponent(a.join()));
            b.removeAttribute("srcdoc");
            if (a instanceof _.Rs) throw new Lt("TrustedResourceUrl", 2);
            for (var c = "allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" "); 0 < b.sandbox.length;) b.sandbox.remove(b.sandbox.item(0));
            for (var d = 0; d < c.length; d++) b.sandbox.supports && !b.sandbox.supports(c[d]) || b.sandbox.add(c[d]);
            a = _.fb(a);
            void 0 !== a && (b.src = a);
            b.id = "koelBirdIGRegisterIframe";
            document.head.appendChild(b)
        }
    };
    var ar = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 664);
        this.slotId = b;
        this.oc = c;
        this.L = d;
        this.B = NB(this);
        this.A = X(this, e);
        this.l = Y(this, f);
        g && PB(this, g)
    };
    _.O(ar, Z);
    ar.prototype.j = function() {
        var a = this,
            b, c = null != (b = this.l.value) ? b : 0;
        if (0 !== (0, _.Km)() || 0 < c) {
            var d = document;
            b = qG(d);
            if (rG(d) && b && (0 < CI(this.L, this.slotId) || !AN(this)) && b) {
                var e = NK(this, 324, d, b, function() {
                    rG(d) || (e && e(), a.B.notify())
                });
                if (e) return
            }
        }
        this.B.notify()
    };
    var AN = function(a) {
        var b = a.A.value;
        try {
            var c, d = null != (c = top) ? c : void 0;
            if (void 0 === d) return !0;
            var e = Zm(null == d ? void 0 : d.document, d).y,
                f = e + a.oc.height;
            return b.y >= e && b.y <= f
        } catch (g) {
            return !0
        }
    };
    var Yq = function(a, b, c) {
        Z.call(this, a, 1055);
        this.B = NB(this);
        PB(this, c);
        this.l = X(this, b)
    };
    _.O(Yq, Z);
    Yq.prototype.j = function() {
        this.l.value && this.B.notify()
    };
    var Oq = function(a, b, c, d, e, f) {
        Z.call(this, a, 669);
        this.U = b;
        this.V = c;
        this.B = W(this);
        this.A = Y(this, d);
        this.l = X(this, e);
        f && (this.D = X(this, f))
    };
    _.O(Oq, Z);
    Oq.prototype.j = function() {
        var a;
        if (null == (a = this.D) ? 0 : a.value) this.B.J(!0);
        else {
            var b;
            a = !(null == (b = this.A.value) || !y(b, 1)) && (_.E(this.V, 12) || zu(this.U, 13)) || this.l.value;
            this.B.J(!!a)
        }
    };
    var er = function(a, b, c, d, e, f) {
        Z.call(this, a, 719);
        this.U = b;
        this.A = c;
        this.B = W(this);
        this.l = X(this, d);
        this.D = X(this, e);
        this.F = Y(this, f)
    };
    _.O(er, Z);
    er.prototype.j = function() {
        var a = this.l.value.kind;
        switch (a) {
            case 0:
                this.l.value.eb ? this.D.value ? BN(this) : AB(this.B) : AB(this.B);
                break;
            case 1:
                BN(this);
                break;
            case 2:
                AB(this.B);
                break;
            default:
                hb(a)
        }
    };
    var BN = function(a) {
        var b = a.F.value,
            c = new ul;
        b = _.z(c, 3, b);
        _.E(Bl([b, a.U.kb(), a.A.kb()]), 3) ? a.B.J(RH) : AB(a.B)
    };
    var CN = function(a, b, c, d, e, f) {
        Z.call(this, a, 1119);
        this.slotId = b;
        this.A = c;
        this.documentElement = d;
        this.L = e;
        this.l = f;
        this.B = MB(this)
    };
    _.O(CN, Z);
    CN.prototype.j = function() {
        var a = _.Ce("INS");
        a.id = this.A;
        _.jj(a, {
            display: "none"
        });
        this.documentElement.appendChild(a);
        var b = function() {
            return void _.hx(a)
        };
        (_.B = [2, 3], _.t(_.B, "includes")).call(_.B, this.l) ? wI(this.L, this.slotId, b) : _.Qn(this, b);
        this.B.J(a)
    };
    var DN = function(a, b, c, d, e) {
        Z.call(this, a, 1120);
        this.A = b;
        this.D = c;
        this.vb = d;
        this.l = e;
        this.B = MB(this);
        a = this.l;
        if (!_.na(a) || !_.na(a) || 1 !== a.nodeType || a.namespaceURI && "http://www.w3.org/1999/xhtml" !== a.namespaceURI) this.F = X(this, this.l)
    };
    _.O(DN, Z);
    DN.prototype.j = function() {
        var a, b, c = null != (b = null == (a = this.F) ? void 0 : a.value) ? b : this.l;
        if (!(_.B = [2, 3], _.t(_.B, "includes")).call(_.B, this.D)) {
            a = _.w(_.t(Array, "from").call(Array, c.childNodes));
            for (b = a.next(); !b.done; b = a.next()) b = b.value, 1 === b.nodeType && b.id !== this.A && _.hx(b);
            this.vb || ln(c, !0)
        }
        this.B.J(c)
    };
    var Kq = function(a, b, c, d, e, f, g, h, k) {
        fg.call(this);
        c ? (a = new DN(a, e, g, k, c), H(this, a), a = a.B) : qi(g) ? (a = new CN(a, b, d, f, h, g), H(this, a), a = a.B) : (b = Mn(a, b, mI, function(l) {
            return l.detail
        }), H(this, b), a = new DN(a, e, g, k, b.B), H(this, a), a = a.B);
        this.j = {
            B: a
        }
    };
    _.O(Kq, fg);
    var Lq = function(a, b, c, d, e, f, g, h, k) {
        Z.call(this, a, 673);
        this.slotId = b;
        this.lc = c;
        this.D = d;
        this.A = e;
        this.T = f;
        this.l = g;
        this.L = h;
        this.vb = k;
        this.B = W(this)
    };
    _.O(Lq, Z);
    Lq.prototype.j = function() {
        var a = this,
            b, c;
        return _.Ab(function(d) {
            if (1 == d.j) {
                if (a.lc) {
                    EN(a, a.lc);
                    a.B.J(a.lc);
                    d.j = 0;
                    return
                }
                if (qi(a.l)) {
                    a.B.J(FN(a));
                    d.j = 0;
                    return
                }
                return Bb(d, lI(a.slotId, mI), 4)
            }
            b = d.o;
            c = b.detail;
            if (a.H) return d.return();
            EN(a, c);
            a.B.J(c);
            d.j = 0
        })
    };
    var FN = function(a) {
            var b = _.Ce("INS");
            b.id = a.D;
            _.jj(b, {
                display: "none"
            });
            a.T.documentElement.appendChild(b);
            var c = function() {
                return void _.hx(b)
            };
            2 === a.l || 3 === a.l ? wI(a.L, a.slotId, c) : _.Qn(a, c);
            return b
        },
        EN = function(a, b) {
            if (2 !== a.l && 3 !== a.l) {
                for (var c = _.w(_.t(Array, "from").call(Array, b.childNodes)), d = c.next(); !d.done; d = c.next()) d = d.value, 1 === d.nodeType && d.id !== a.A && _.hx(d);
                a.vb || ln(b, !0)
            }
        };
    var $q = function(a, b) {
        Z.call(this, a, 676);
        this.B = W(this);
        this.l = X(this, b)
    };
    _.O($q, Z);
    $q.prototype.j = function() {
        var a = Pi(this.l.value);
        this.B.J(a)
    };
    var GN = function(a, b) {
            var c = hj();
            this.context = a;
            this.L = b;
            this.j = c
        },
        HN = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G) {
            var D = document,
                F = window;
            e || f || _.C(Vq) || GI(a.L, d);
            var N = xr(a.context, b, a.j, c, d, e, f, g, h, k, l, n, D, m, p, r, u, function() {
                GI(a.L, d);
                FI(a.L, d, N)
            }, x, G);
            f || _.C(Vq) || FI(a.L, d, N);
            _.Qn(d, function() {
                GI(a.L, d)
            });
            F.top !== F && F.addEventListener("pagehide", function(L) {
                L.persisted || GI(a.L, d)
            });
            ng(N)
        };
    var IN = function(a, b, c) {
        Z.call(this, a, 944);
        this.G = b;
        this.l = new _.aC(this.G);
        this.A = X(this, c)
    };
    _.O(IN, Z);
    IN.prototype.j = function() {
        var a = this.A.value;
        if (cC(this.l, a)) {
            var b = _.bC(this.l, "__gpi_opt_out", a);
            if (b) {
                var c = new sw;
                b = _.z(c, 1, b);
                b = _.z(b, 2, 2147483647);
                b = _.z(b, 3, "/");
                b = _.z(b, 4, this.G.location.hostname);
                dC(this.l, "__gpi_opt_out", b, a)
            }
        }
    };
    var JN = function(a, b, c, d) {
        d = void 0 === d ? Ar : d;
        Z.call(this, a, 883);
        this.Va = b;
        this.D = d;
        this.l = NB(this);
        this.A = X(this, c)
    };
    _.O(JN, Z);
    JN.prototype.j = function() {
        !ff(this.A.value) || _.C(Ky) ? this.l.notify() : (_.C(Jy) || eG(this.Va), this.D() ? HB(this.l, new _.v.Promise(function(a) {
            return void fG(a)
        })) : (fG(null), this.l.notify()))
    };
    var KN = function(a, b, c, d, e) {
        Z.call(this, a, 884);
        this.ua = b;
        this.Ca = c;
        this.l = W(this);
        this.D = Y(this, d);
        this.A = X(this, e)
    };
    _.O(KN, Z);
    KN.prototype.j = function() {
        this.Ca.storage = this.D.value;
        QL(this.Ca, _.bC(this.ua, "__gads", this.A.value));
        uf(20);
        uf(2);
        this.l.J(_.rf(sf).j())
    };
    var LN = function(a, b, c) {
        Z.call(this, a, 873);
        this.G = b;
        this.l = X(this, c)
    };
    _.O(LN, Z);
    LN.prototype.j = function() {
        var a = this.context,
            b = this.l.value,
            c = this.G;
        !Kk()._pubconsole_disable_ && (b = kf("google_pubconsole", b, c)) && (b = b.split("|"), "1" !== b[0] && "0" !== b[0] || Nk(a, c))
    };
    var MN = function(a, b, c, d, e) {
        Z.call(this, a, 1058);
        this.G = b;
        this.W = c;
        d && (this.l = Y(this, d));
        PB(this, e)
    };
    _.O(MN, Z);
    MN.prototype.j = function() {
        var a;
        if (Pg("shared-storage", this.G.document) && (null == (a = this.l) ? 0 : a.value) && ff(this.W)) {
            a = {
                message: "goog:spam:client_age",
                pvsid: this.context.pvsid,
                clientAgeIframe: _.C(uy)
            };
            var b = this.l.value;
            b(a)
        }
    };
    var NN = function(a, b, c) {
        Z.call(this, a, 798);
        this.B = W(this);
        this.l = Y(this, b);
        this.A = X(this, c)
    };
    _.O(NN, Z);
    NN.prototype.j = function() {
        var a = this,
            b = new _.v.Map;
        if (this.l.value) {
            var c = this.l.value,
                d = c.da.Oa,
                e = c.dd.ed;
            c = _.w(c.aa.Y);
            for (var f = c.next(); !f.done; f = c.next()) {
                f = f.value;
                var g = void 0,
                    h = null == (g = e) ? void 0 : g.get(f);
                b.set(f, d ? ON(this, f, h) : function() {
                    return a.A.value
                })
            }
        }
        this.B.J(b)
    };
    var ON = function(a, b, c) {
        return Zi(function() {
            var d = _.t(Object, "assign").call(Object, {}, a.l.value);
            d.aa.ue = !0;
            d.aa.Y = [b];
            c && (d.dd.ed = new _.v.Map, d.dd.ed.set(b, c));
            return Mm(_.C(ry) ? hn(d) : HK(d)).url
        })
    };
    var PN = function(a, b, c, d, e, f, g) {
        Z.call(this, a, 810);
        this.D = b;
        this.Oa = c;
        this.O = d;
        this.A = e;
        this.G = f;
        this.W = g;
        this.l = W(this)
    };
    _.O(PN, Z);
    PN.prototype.j = function() {
        var a = this,
            b = this.D;
        !this.Oa && 1 < this.D.length && (b = [b[0]]);
        b = b.filter(function(c) {
            if (c.H) return !1;
            var d = a.O.V[c.getDomId()],
                e;
            if (e = !(Nn(Dm(d)) && (_.B = Df(Ry), _.t(_.B, "includes")).call(_.B, String(Dm(d))))) ph(a.G) && 4 === Dm(d) ? (M(a.A, AJ("googletag.enums.OutOfPageFormat.REWARDED", String(c.getAdUnitPath()))), e = !0) : e = !1, e = !e;
            return e && !Gm(a.context, a.A, c, d, a.G, a.W)
        });
        30 < b.length && (M(this.A, wJ("30", String(b.length), String(b.length - 30))), b = b.slice(0, 30));
        this.l.J(b)
    };
    var QN = function(a, b, c) {
        Z.call(this, a, 919);
        this.l = b;
        this.W = c;
        this.B = W(this)
    };
    _.O(QN, Z);
    QN.prototype.j = function() {
        var a, b = !(null == (a = this.l) ? 0 : _.E(a, 9)) && !!ff(this.W);
        this.B.J(b)
    };
    var RN = function(a, b, c, d, e, f) {
        Z.call(this, a, 935);
        this.L = b;
        this.O = c;
        this.T = d;
        this.B = NB(this);
        this.l = X(this, e);
        PB(this, f)
    };
    _.O(RN, Z);
    RN.prototype.j = function() {
        var a = this.O,
            b = a.U;
        a = a.V;
        for (var c = _.w(this.l.value), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            var e = a[d.getDomId()],
                f = this.T;
            kn(e, b) && !this.L.Gb(d) && mn(d, f, e, b)
        }
        this.B.notify()
    };
    var SN = function(a, b, c, d, e, f) {
        f = void 0 === f ? Kj : f;
        Z.call(this, a, 939);
        this.A = b;
        this.G = c;
        this.W = d;
        this.l = f;
        PB(this, e)
    };
    _.O(SN, Z);
    SN.prototype.j = function() {
        var a = this.l,
            b = this.G,
            c = new aq;
        var d = new $p;
        d = _.nd(d, 1, String(this.A));
        c = _.Lh(c, 5, d);
        c = _.fd(c, 4, 1, 0);
        c = _.fd(c, 2, 2, 0);
        c = _.nd(c, 3, this.context.nb || this.context.Wa);
        c = _.ld(c, 6, ff(this.W));
        a.call(this, b, c)
    };
    var TN = function(a, b, c, d, e) {
        Z.call(this, a, 905);
        this.O = b;
        this.l = c;
        this.B = NB(this);
        this.A = X(this, d);
        PB(this, e)
    };
    _.O(TN, Z);
    TN.prototype.j = function() {
        for (var a = _.w(this.A.value), b = a.next(); !b.done; b = a.next()) {
            var c = void 0;
            switch (null == (c = this.O.V[b.value.getDomId()]) ? void 0 : Dm(c)) {
                case 2:
                case 3:
                case 5:
                    this.l.load(_.xL);
                    return
            }
        }
        this.B.notify()
    };
    var UN = function(a, b, c, d) {
        Z.call(this, a, 833);
        this.l = b;
        this.G = c;
        this.B = NB(this);
        PB(this, d)
    };
    _.O(UN, Z);
    UN.prototype.j = function() {
        if (!_.C(az)) {
            var a = this.l,
                b = this.G,
                c = jH();
            c = {
                version: gK ? gK : gK = pl(),
                Jd: c
            };
            c = TH.Bh(c);
            var d = AH(b);
            c = d ? ve(c, new _.v.Map([
                ["n", String(d)]
            ])) : c;
            d = Df(rl);
            for (var e = new _.v.Map, f = 0; f < d.length; f += 2) e.set(d[f], d[f + 1]);
            c = ve(c, e);
            var g;
            a.resources[c.toString()] || (null == (g = Kk()) ? 0 : g.fifWin) || (a.resources[c.toString()] = 1, b = b.document, a = _.Ce("IFRAME"), a.src = _.lb(c).toString(), a.style.visibility = "hidden", a.style.display = "none", b = b.getElementsByTagName("script"), b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)))
        }
        this.B.notify()
    };
    var VN = function(a, b) {
        Z.call(this, a, 1122);
        this.T = b;
        this.B = NB(this)
    };
    _.O(VN, Z);
    VN.prototype.j = function() {
        var a = this;
        3 === pG(this.T) ? HB(this.B, new _.v.Promise(function(b) {
            return void tG(b, a.T)
        })) : this.B.notify()
    };
    var WN = function(a, b, c, d) {
        Z.call(this, a, 928);
        this.requestId = b;
        this.B = NB(this);
        this.l = X(this, c);
        PB(this, d)
    };
    _.O(WN, Z);
    WN.prototype.j = function() {
        var a = this.context,
            b = this.requestId,
            c = this.l.value.length;
        if (a.Rc) {
            var d = a.Pb;
            a = Mh(a);
            var e = new Zx;
            b = _.md(e, 2, b);
            c = _.fd(b, 1, c, 0);
            c = _.Oh(a, 7, Ph, c);
            ze(d, c)
        }
        this.B.notify()
    };
    var XN = function(a, b, c, d) {
        Z.call(this, a, 867);
        this.ra = b;
        this.O = c;
        this.B = NB(this);
        this.l = X(this, d)
    };
    _.O(XN, Z);
    XN.prototype.j = function() {
        for (var a = _.w(this.l.value), b = a.next(); !b.done; b = a.next()) {
            var c = _.w(b.value);
            b = c.next().value;
            c = c.next().value;
            var d = fi(this.O.V[b.getDomId()], 20);
            b.dispatchEvent(oI, 808, {
                Kg: c,
                hi: d
            });
            this.ra.dispatchEvent("slotRequested", 705, new sM(b, "publisher_ads"))
        }
        this.B.notify()
    };
    var YN = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D, F, N, L, R, S, V, ja, da, Fa, ta, qa, ia, Ta, gb) {
        Z.call(this, a, 785, _.Cf(gz));
        this.Oa = b;
        this.L = c;
        this.ua = d;
        this.O = e;
        this.Kc = f;
        this.yb = g;
        this.nc = h;
        this.mc = k;
        this.ne = l;
        this.yc = n;
        this.Ab = m;
        this.W = p;
        this.isSecureContext = r;
        this.lb = u;
        this.G = x;
        this.l = W(this);
        this.D = W(this);
        this.A = W(this);
        PB(this, S);
        this.ka = OB(this, G);
        this.F = OB(this, D);
        this.K = X(this, F);
        this.P = OB(this, L);
        this.N = OB(this, R);
        PB(this, S);
        PB(this, V);
        ja && (this.ta = X(this, ja));
        da && (this.X = new FB(da));
        Fa && (this.pa = Y(this, Fa));
        ta && (this.ca = X(this, ta));
        qa && PB(this, qa);
        ia && (this.ga = X(this, ia));
        Ta && (this.Qa = OB(this, Ta));
        this.ba = Y(this, N);
        gb && (this.za = Y(this, gb))
    };
    _.O(YN, Z);
    YN.prototype.j = function() {
        if (this.K.value.length) {
            var a = !_.C(Ky);
            if (a) {
                ah();
                var b = ch[1]
            } else b = "";
            if (a) {
                ah();
                var c = ch[4]
            } else c = "";
            a ? (ah(), a = ch[6]) : a = "";
            var d = a;
            var e = (a = this.P.value) ? a : this.N && !this.N.qb() ? 9 : this.P.qb() ? null : 1;
            this.F.value && (this.L.Bc = this.F.value);
            var f, g, h, k, l, n, m, p, r;
            a = {
                da: {
                    G: this.G,
                    context: this.context,
                    L: this.L,
                    ua: this.ua,
                    W: this.W,
                    Oa: this.Oa,
                    ne: this.ne,
                    isSecureContext: this.isSecureContext,
                    Ai: null == (f = this.Qa) ? void 0 : f.value,
                    lb: this.lb
                },
                aa: {
                    Y: this.K.value,
                    O: this.O,
                    yb: this.yb,
                    ue: !1
                },
                Di: {
                    nc: this.nc,
                    mc: this.mc
                },
                Ih: {
                    wg: b,
                    Ch: c,
                    ai: d
                },
                Qh: {
                    mh: null != (p = this.ka.value) ? p : "0"
                },
                mg: {
                    Kc: this.Kc,
                    yc: this.yc
                },
                dd: {
                    ed: this.ba.value
                },
                ri: {
                    si: e
                },
                li: {
                    Kh: null != (r = null == (g = this.ta) ? void 0 : g.value) ? r : void 0,
                    Th: null == (h = this.X) ? void 0 : h.value,
                    Ug: null == (k = this.ca) ? void 0 : k.value
                },
                Yh: {
                    oh: null == (l = this.pa) ? void 0 : l.value,
                    ih: null == (n = this.ga) ? void 0 : n.value
                },
                Wh: {
                    Vh: null == (m = this.za) ? void 0 : m.value
                }
            };
            this.D.J(a);
            _.C(ry) ? (f = Mm(hn(a)), g = f.url, jB(this.Ab, (9).toString(), 9, f.Td), this.l.J(g), this.A.J(gn(a) ? Es("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : Es("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}"))) : (f = Mm(HK(a)), g = f.url, jB(this.Ab, (9).toString(), 9, f.Td), this.l.J(g), this.A.J(GK(a) ? Es("https://pagead2.googlesyndication.com/gampad/ads/%{uuid}") : Es("https://securepubads.g.doubleclick.net/gampad/ads/%{uuid}")))
        } else this.l.J(""), AB(this.D)
    };
    var ZN = function(a, b, c, d, e, f) {
        Z.call(this, a, 878);
        this.l = b;
        this.T = c;
        this.O = d;
        this.G = e;
        this.B = NB(this);
        PB(this, f)
    };
    _.O(ZN, Z);
    ZN.prototype.j = function() {
        for (var a = _.w(this.l), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = Yi(b, this.T);
            if (!Xi(b, this.T) && c) {
                a: {
                    var d = c;
                    var e = this.O.V[b.getDomId()],
                        f = 0,
                        g = 0;e = _.w(mi(e));
                    for (var h = e.next(); !h.done; h = e.next())
                        if (h = h.value, Array.isArray(h)) {
                            var k = _.w(h);
                            h = k.next().value;
                            k = k.next().value;
                            if (!("number" !== typeof h || "number" !== typeof k || 1 >= h || 1 >= k || (f = f || h, g = Math.min(g || Infinity, k), qm($i(d, this.G)) || !d.parentElement || qm($i(d.parentElement, this.G))))) {
                                d = [f, 0];
                                break a
                            }
                        }
                    d = f || g ? [f, g] : null
                }
                g = this.O;f = g.U;g = g.V[b.getDomId()];pm(c, fj(b), si(f, g), d)
            }
        }
        this.B.notify()
    };
    var $N = function(a, b, c, d, e, f) {
            this.l = a;
            this.I = b;
            this.C = c;
            this.Y = d;
            this.W = e;
            this.A = f;
            this.H = "";
            this.m = -1;
            this.j = 1;
            this.o = ""
        },
        bO = function(a, b) {
            if (b)
                if (1 !== a.j && 2 !== a.j) aO(a, new lB("state err: (" + ([a.j, a.o.length].join() + ")")));
                else {
                    a.o && (b = a.o + b);
                    var c = 0;
                    do {
                        var d = b.indexOf("\n", c);
                        var e = -1 !== d;
                        if (!e) break;
                        var f = a;
                        c = b.substr(c, d - c);
                        if (1 === f.j) f.H = c, ++f.m, f.j = 2;
                        else {
                            try {
                                f.l(f.m, f.H, {
                                    kind: 0,
                                    eb: Gx(c)
                                }, f.Y, f.W, f.A), f.H = ""
                            } catch (g) {}
                            f.j = 1
                        }
                        c = d + 1
                    } while (e && c < b.length);
                    a.o = b.substr(c)
                }
        },
        aO = function(a, b) {
            a.j = 4;
            try {
                a.I(b)
            } catch (c) {}
        },
        cO = function(a) {
            1 !== a.j || a.o ? aO(a, new lB("state err (" + ([a.j, a.o.length].join() + ")"))) : (a.j = 3, a.C(a.m, a.Y, a.W))
        };
    var dO = function(a, b, c, d, e, f, g, h, k, l, n, m) {
        Z.call(this, a, 788);
        this.N = b;
        this.K = c;
        this.F = d;
        this.W = e;
        this.B = NB(this);
        this.D = 0;
        this.A = !1;
        this.l = null != n ? n : new XMLHttpRequest;
        this.ba = X(this, f);
        this.ca = Y(this, g);
        this.ga = X(this, h);
        PB(this, k);
        this.P = X(this, l);
        m && (this.X = X(this, m))
    };
    _.O(dO, Z);
    dO.prototype.j = function() {
        var a = this,
            b = this.ga.value;
        if (b) {
            var c = new $N(this.N, this.K, this.F, this.ba.value, this.W, this.ca.value);
            this.l.open("GET", b);
            this.l.withCredentials = this.P.value;
            var d;
            if (null == (d = this.X) ? 0 : d.value) this.l.deprecatedBrowsingTopics = !0;
            this.l.onreadystatechange = function() {
                eO(a, c, !1)
            };
            this.l.onload = function() {
                eO(a, c, !0)
            };
            this.l.onerror = function() {
                aO(c, new mB("XHR error"))
            };
            this.l.send()
        }
        this.B.notify()
    };
    var eO = function(a, b, c) {
        try {
            if (3 === a.l.readyState || 4 === a.l.readyState)
                if (300 <= a.l.status) a.A || (aO(b, new mB("xhr_err-" + a.l.status)), a.A = !0);
                else {
                    var d = a.l.responseText.substr(a.D);
                    d && bO(b, d);
                    a.D = a.l.responseText.length;
                    c && 4 === a.l.readyState && cO(b)
                }
        } catch (e) {
            aO(b, e)
        }
    };
    var fO = function(a, b, c, d, e, f, g, h, k, l, n) {
        Z.call(this, a, 1078);
        this.D = b;
        this.A = c;
        this.l = d;
        this.W = e;
        this.B = NB(this);
        this.N = X(this, f);
        this.P = Y(this, g);
        this.X = X(this, h);
        PB(this, k);
        this.F = X(this, l);
        n && (this.K = X(this, n))
    };
    _.O(fO, Z);
    fO.prototype.j = function() {
        var a = this.X.value;
        a && gO(this, a);
        this.B.notify()
    };
    var gO = function(a, b) {
        var c, d, e, f, g, h, k, l, n, m, p, r, u, x, G;
        _.Ab(function(D) {
            switch (D.j) {
                case 1:
                    return c = new $N(a.D, a.A, a.l, a.N.value, a.W, a.P.value), e = a.F.value ? "include" : "same-origin", g = null == (f = a.K) ? void 0 : f.value, D.m = 2, Bb(D, fetch(b, g ? {
                        credentials: e,
                        browsingTopics: g
                    } : {
                        credentials: e
                    }), 4);
                case 4:
                    d = D.o;
                    Db(D, 3);
                    break;
                case 2:
                    h = Eb(D), aO(c, new mB("fetch error: " + (h instanceof Error ? h.message : void 0)));
                case 3:
                    if (!d) return D.return();
                    if (300 <= d.status) return aO(c, new mB("fetch_status-" + d.status)), D.return();
                    l = null == (k = d.body) ? void 0 : k.getReader();
                    if (!l) return D.return();
                    n = new TextDecoder;
                    m = !1;
                case 5:
                    if (m) {
                        D.j = 6;
                        break
                    }
                    D.m = 7;
                    return Bb(D, l.read(), 9);
                case 9:
                    u = D.o;
                    r = u.value;
                    m = u.done;
                    Db(D, 8);
                    break;
                case 7:
                    p = x = Eb(D), m = !0;
                case 8:
                    G = n.decode(r, {
                        stream: !m
                    });
                    bO(c, G);
                    D.j = 5;
                    break;
                case 6:
                    p && aO(c, new mB("fetch read error: " + (p instanceof Error ? p.message : void 0))), cO(c), D.j = 0
            }
        })
    };
    var hO = function(a, b, c, d, e) {
        Z.call(this, a, 918);
        this.O = b;
        this.Ab = c;
        this.B = NB(this);
        this.l = X(this, e);
        PB(this, d)
    };
    _.O(hO, Z);
    hO.prototype.j = function() {
        var a = this.l.value;
        a.length && wq(this.Ab, "3", tq(this.O.V[a[0].getDomId()], 20));
        this.B.notify()
    };
    var jO = function(a, b, c) {
        Z.call(this, a, 804);
        this.La = c;
        this.B = MB(this);
        this.A = [];
        this.ac = {
            qh: iO(this, function(d) {
                return Un(d, 6)
            }),
            Hi: iO(this, function(d) {
                return Un(d, 7)
            }),
            wh: iO(this, function(d) {
                return !!zu(d, 8)
            }),
            bh: iO(this, function(d) {
                return y(d, 10)
            }),
            nf: iO(this, function(d) {
                var e;
                return null != (e = d.getEscapedQemQueryId()) ? e : ""
            }),
            xg: iO(this, function(d) {
                return dg(d, tw, 43)
            }),
            vh: iO(this, function(d) {
                return !!zu(d, 9)
            }),
            yi: iO(this, function(d) {
                return !!zu(d, 12)
            }),
            jh: iO(this, function(d) {
                return dg(d, dw, Lf(d, Gw, 48))
            }),
            Yg: iO(this, function(d) {
                return dg(d, bw, Lf(d, Gw, 39))
            }),
            fd: iO(this, function(d) {
                return y(d, 36)
            }),
            zi: iO(this, function(d) {
                return zu(d, 13)
            }),
            uh: iO(this, function(d) {
                return zu(d, 3)
            }),
            Se: iO(this, function(d) {
                return y(d, 49)
            }),
            Ei: iO(this, function(d) {
                return Un(d, 29)
            }),
            Fi: iO(this, function(d) {
                return Un(d, 30)
            }),
            rh: iO(this, function(d) {
                return dg(d, vw, 51)
            }),
            Tg: iO(this, function(d) {
                return y(d, 61)
            }),
            Sa: W(this),
            hg: iO(this, function(d) {
                return dg(d, Dw, 58)
            }),
            Ii: iO(this, function(d) {
                var e, f;
                return null != (f = null == (e = dg(d, uw, 56)) ? void 0 : Hu(e, 1)) ? f : null
            }),
            jc: iO(this, function(d) {
                return Te(d, Wv, 62)
            }),
            Dh: iO(this, function(d) {
                return Yc(d, 63, Gc)
            }),
            Eg: iO(this, function(d) {
                return zu(d, 64)
            })
        };
        this.l = X(this, b)
    };
    _.O(jO, Z);
    var iO = function(a, b) {
        var c = W(a);
        a.A.push({
            B: c,
            Vg: b
        });
        return c
    };
    jO.prototype.j = function() {
        for (var a = _.w(this.A), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = b.Vg;
            zB(b.B, c(this.l.value))
        }
        0 === this.La.kind || 1 === this.La.kind && this.La.url ? this.ac.Sa.J(this.La) : this.ac.Sa.J({
            kind: 0,
            eb: y(this.l.value, 4) || ""
        });
        this.B.J(this.ac)
    };
    var kO = function(a, b, c, d) {
        Z.call(this, a, 822);
        this.slotId = b;
        this.Ba = c;
        this.l = NB(this);
        this.A = X(this, d)
    };
    _.O(kO, Z);
    kO.prototype.j = function() {
        for (var a = this, b = Wn(this.A.value, 23), c = _.w(b), d = c.next(); !d.done; d = c.next()) d = d.value, kN(this.Ba, d), lN(this.Ba, d, this.slotId);
        this.l.notify();
        b.length && oj("gpt_hp", function(e) {
            vj(e, a.context);
            J(e, "ls", b.join())
        }, _.Cf(wy))
    };
    var lO = function(a, b, c) {
        Z.call(this, a, 803);
        this.l = b;
        this.slotId = c;
        this.B = W(this);
        this.A = W(this)
    };
    _.O(lO, Z);
    lO.prototype.j = function() {
        var a = JSON.parse(this.l),
            b = nm(a, Fs);
        if (!b) throw Error("missing ad unit path");
        if (null == a || !a[b]) throw Error("invalid ad unit path: " + b);
        a = a[b];
        if (!Array.isArray(a)) throw Error("dictionary not an array: " + this.l);
        a = Ld(Fw, a);
        var c;
        b = _.w(null != (c = Yc(a, 27, Dc)) ? c : []);
        for (c = b.next(); !c.done; c = b.next()) c = c.value, _.rf(sf).o(c);
        uf(4);
        this.slotId.dispatchEvent(nI, 800, a);
        this.B.J(a);
        var d;
        zB(this.A, null != (d = dg(a, rw, 54)) ? d : null)
    };
    var mO = function(a, b, c, d) {
        Z.call(this, a, 823);
        this.slotId = b;
        this.L = c;
        this.l = NB(this);
        this.A = X(this, d)
    };
    _.O(mO, Z);
    mO.prototype.j = function() {
        var a = this;
        zu(this.A.value, 11) && (_.zI(this.L, this.slotId), wI(this.L, this.slotId, function() {
            _.AI(a.L, a.slotId)
        }));
        this.l.notify()
    };
    var nO = function(a, b, c, d) {
        Z.call(this, a, 821);
        this.W = b;
        this.ua = c;
        this.l = NB(this);
        this.A = X(this, d)
    };
    _.O(nO, Z);
    nO.prototype.j = function() {
        if (ff(this.W))
            for (var a = new _.v.Set, b = _.w(Te(this.A.value, sw, 14)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = void 0,
                    e = null != (d = Iu(c, 5)) ? d : 1;
                a.has(e) || (dC(this.ua, 2 === e ? "__gpi" : "__gads", c, this.W), a.add(e))
            }
        this.l.notify()
    };
    var oO = function(a, b, c, d) {
        fg.call(this);
        this.context = a;
        this.slotId = b;
        a = d.L;
        var e = d.W;
        b = d.Ba;
        var f = d.ua;
        d = d.La;
        var g = new lO(this.context, c, this.slotId);
        H(this, g);
        c = new sL(this.context, g.A);
        H(this, c);
        e = new nO(this.context, e, f, g.B);
        H(this, e);
        b = new kO(this.context, this.slotId, b, g.B);
        H(this, b);
        a = new mO(this.context, this.slotId, a, g.B);
        H(this, a);
        a = new jO(this.context, g.B, d);
        H(this, a);
        d = a.ac;
        this.j = {
            vb: d.wh,
            ie: d.nf,
            ti: d.hg,
            je: c.l,
            ac: a.B
        }
    };
    _.O(oO, fg);
    /* 
     
    Math.uuid.js (v1.4) 
    http://www.broofa.com 
    mailto:robert@broofa.com 
    Copyright (c) 2010 Robert Kieffer 
    Dual licensed under the MIT and GPL licenses. 
    */
    var pO = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        qO = function() {
            for (var a = Array(36), b = 0, c, d = 0; 36 > d; d++) 8 == d || 13 == d || 18 == d || 23 == d ? a[d] = "-" : 14 == d ? a[d] = "4" : (2 >= b && (b = 33554432 + 16777216 * Math.random() | 0), c = b & 15, b >>= 4, a[d] = pO[19 == d ? c & 3 | 8 : c]);
            return a.join("")
        };
    var rO = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D, F, N, L, R, S, V, ja, da) {
        Z.call(this, a, 973);
        this.ka = b;
        this.F = c;
        this.N = d;
        this.D = e;
        this.O = f;
        this.L = g;
        this.ua = h;
        this.ca = k;
        this.P = l;
        this.A = n;
        this.Nc = m;
        this.ga = p;
        this.Mb = r;
        this.isSecureContext = u;
        this.lb = x;
        this.Ba = G;
        this.G = D;
        this.T = F;
        this.Kb = N;
        this.ta = S;
        this.l = V;
        this.X = ja;
        this.pa = da;
        this.K = Y(this, N);
        this.ba = X(this, L);
        this.za = X(this, R);
        this.l && PB(this, this.l.Ig)
    };
    _.O(rO, Z);
    rO.prototype.j = function() {
        var a = this,
            b = new fg;
        _.Fn(this, b);
        var c = this.ba.value,
            d = jn(this.O.U);
        this.K.value && this.pa.J(this.K.value);
        _.C(wz) || H(b, new uL(this.context, console, this.Kb));
        var e = function() {
            if (_.C(Fy)) {
                var Fa = new VN(a.context, a.T);
                H(b, Fa);
                return Fa.B
            }
        }();
        e = new iM(this.context, this.N, this.L, dg(this.O.U, Qq, 5), this.T, e);
        H(b, e);
        var f = new ZN(this.context, this.N, this.T, this.O, this.G, e.B);
        H(b, f);
        var g = !!_.E(this.O.U, 6),
            h = new PN(this.context, this.N, g, this.O, this.F, this.G, c);
        H(b, h);
        if (_.C(jz)) {
            e = new JL(this.context, d, c);
            H(b, e);
            var k = e.B
        }
        var l = new QM(this.context, d, c, h.l, k);
        H(b, l);
        var n = new JM(this.context, this.G);
        H(b, n);
        var m = this.X,
            p = m.He,
            r = m.Rh;
        e = m.gg;
        var u = m.Bi,
            x = m.Xh,
            G, D = null != (G = this.l) ? G : {},
            F = D.Ze;
        G = D.Lh;
        m = D.ub;
        var N = D.Vb,
            L = D.ud;
        D = D.hh;
        var R = (null != F ? F : {}).Ea,
            S;
        r = new GM(this.context, null != (S = null == r ? void 0 : r.He) ? S : p);
        H(b, r);
        p = new $L(this.context, this.F, this.O.V, this.Mb, h.l, F, m);
        H(b, p);
        if (_.C(Pp)) {
            var V = new HM(this.context, x, void 0);
            H(b, V);
            V = V.B
        }
        H(b, new fM(this.context, R, F, p.D, p.F, this.O.V));
        x = new LM(this.context, d, c, this.G, this.K.value, e, k);
        H(b, x);
        k = window.isSecureContext && _.C(oz) ? "wbn" : "ldjh";
        var ja = ++this.L.l;
        S = "wbn" === k ? qO().toLowerCase() : void 0;
        F = this.Nc;
        V = new YN(this.context, g, this.L, this.ua, this.O, k, F.yb, F.nc, F.mc, this.za.value, S, _.rf(Th), c, this.isSecureContext, this.lb, this.G, r.B, n.B, h.l, p.l, x.B, e, f.B, this.ta, G, R, m, N, L, D, u, V);
        H(b, V);
        f = new hO(this.context, this.O, _.rf(Th), V.l, h.l);
        H(b, f);
        d = new QN(this.context, d, c);
        H(b, d);
        g = Rh(this.context, 646, function(Fa, ta, qa, ia, Ta, gb) {
            var za = function() {
                return void sO(a, Ta, Fa, ta, qa, ia, gb)
            };
            Fa && _.C(ty) ? setTimeout(Rh(a.context, 646, za), 0) : za()
        });
        n = Rh(this.context, 647, function(Fa, ta, qa) {
            var ia = function() {
                return void tO(a, ja, qa, ta, Fa)
            };
            _.C(ty) ? setTimeout(Rh(a.context, 646, ia), 0) : ia()
        });
        var da;
        "ldjh" === k ? (u = uO(this, 289, "strm_err"), _.C(By) && window.fetch || _.C(Cy) && xx(window.fetch) ? da = new fO(this.context, g, u, n, c, h.l, l.B, V.l, f.B, d.B) : da = new dO(this.context, g, u, n, c, h.l, l.B, V.l, f.B, d.B)) : da = new eN(this.context, g, uO(this, 1042, "Unknown web bundle error."), n, k, S, c, this.T, h.l, l.B, V.l, V.A, f.B, d.B);
        H(b, da);
        l = new WN(this.context, ja, h.l, da.B);
        H(b, l);
        l = new NN(this.context, V.D, V.l);
        H(b, l);
        l = new XN(this.context, this.A.ra, this.O, l.B);
        H(b, l);
        l = new UN(this.context, this.ca, this.G, l.B);
        H(b, l);
        l = new TN(this.context, this.O, this.P, h.l, l.B);
        H(b, l);
        h = new RN(this.context, this.L, this.O, this.T, h.l, l.B);
        H(b, h);
        h = new SN(this.context, wf(this.G), this.G, c, da.B);
        H(b, h);
        1 === ja && (c = new MN(this.context, this.G, c, e, da.B), H(b, c));
        ng(b)
    };
    var sO = function(a, b, c, d, e, f, g) {
            var h, k, l;
            return _.Ab(function(n) {
                h = f[c];
                if (!h) return Vh(a.context, 646, Error("missing slot")), n.return();
                0 === c && (k = tq(a.O.V[h.getDomId()], 20), wq(_.rf(Th), "4", k));
                return Bb(n, vO(a, h, d, e, b, null == (l = g) ? void 0 : l[h.getId()]), 0)
            })
        },
        tO = function(a, b, c, d, e) {
            var f, g, h;
            return _.Ab(function(k) {
                switch (k.j) {
                    case 1:
                        var l = a.context,
                            n = e + 1,
                            m = d.length;
                        if (l.Rc) {
                            var p = l.Pb;
                            l = Mh(l);
                            var r = new $x;
                            r = _.md(r, 3, b);
                            n = _.fd(r, 1, n, 0);
                            m = _.fd(n, 2, m, 0);
                            m = _.Oh(l, 8, Ph, m);
                            ze(p, m)
                        }
                        f = e + 1;
                    case 2:
                        if (!(f < d.length)) {
                            k.j = 4;
                            break
                        }
                        if (!d[f]) {
                            k.j = 3;
                            break
                        }
                        p = new Fw;
                        p = _.z(p, 8, !0);
                        g = Qe(p);
                        h = '{"empty":' + g + "}";
                        return Bb(k, sO(a, c, f, h, {
                            kind: 0,
                            eb: ""
                        }, d, null), 3);
                    case 3:
                        ++f;
                        k.j = 2;
                        break;
                    case 4:
                        DI(a.L, a.D) || a.A.qe.dispatchEvent(sI, 965, a.D), k.j = 0
                }
            })
        },
        vO = function(a, b, c, d, e, f) {
            var g, h, k, l, n, m, p, r, u, x, G;
            return _.Ab(function(D) {
                if (1 == D.j) return g = {
                    W: e,
                    Ba: a.Ba,
                    L: a.L,
                    ua: a.ua,
                    La: d
                }, h = new oO(a.context, b, c, g), Bb(D, ng(h), 2);
                k = D.o;
                l = k.vb;
                n = k.ie;
                m = k.ti;
                p = k.je;
                r = k.ac;
                if (b.H) return D.return();
                (u = !!m) && oj("gpt_td_init", function(F) {
                    vj(F, a.context);
                    J(F, "noFill", l ? "1" : "0");
                    J(F, "publisher_tag", "gpt");
                    var N = dg(m, Bw, 5);
                    N && (J(F, "winner_qid", N.getEscapedQemQueryId()), J(F, "xfpQid", _.Kf(N, 6)))
                }, 1);
                x = Dm(a.O.V[b.getDomId()]);
                ((G = Om("google_norender") || 5 === x && _.C(Sy)) || l && !u) && !_.C(Vq) ? Aq(b, a.L, a.O, n) : HN(a.ga, a.ka, a.F, b, l || G, u, a.L, a.O, a.Ba, r, p, e, f, a.A.ra, a.P, a.l, a.X);
                h.Da();
                D.j = 0
            })
        },
        uO = function(a, b, c) {
            return Rh(a.context, b, function(d) {
                d = d instanceof Error ? d : Error();
                d.message = d.message || c;
                Vh(a.context, b, d);
                DI(a.L, a.D) || a.A.qe.dispatchEvent(sI, 965, a.D)
            })
        };
    var wO = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D, F, N, L, R, S, V, ja) {
        Z.call(this, a, 885);
        this.ca = b;
        this.D = c;
        this.O = d;
        this.L = e;
        this.ua = f;
        this.Nc = g;
        this.X = h;
        this.K = k;
        this.l = l;
        this.F = n;
        this.ba = m;
        this.isSecureContext = p;
        this.Ca = r;
        this.P = u;
        this.lb = x;
        this.Ba = G;
        this.Va = D;
        this.G = F;
        this.T = N;
        this.A = S;
        this.N = V;
        this.ga = ja;
        this.ka = X(this, L);
        PB(this, R)
    };
    _.O(wO, Z);
    wO.prototype.j = function() {
        var a = this.ka.value;
        if (a.length) {
            var b = this.L,
                c = this.l,
                d = a.length;
            b.o.has(c);
            b.o.set(c, d);
            a = _.w(a);
            for (b = a.next(); !b.done; b = a.next()) {
                c = b.value;
                var e = void 0,
                    f = void 0;
                b = c.Mb;
                d = c.Y;
                c = new fg;
                _.Fn(this, c);
                var g = In(this.context, this.P, null == (f = this.A) ? void 0 : f.Mh);
                f = g.Wb;
                var h = g.rf;
                _.Fn(c, g.Dc);
                f = sn(this.context, this.D, this.L, jn(this.O.U), this.G, f, h);
                g = f.sb;
                _.Fn(c, f.Dc);
                f = new LN(this.context, this.G, g);
                H(c, f);
                f = new IN(this.context, this.G, g);
                H(c, f);
                f = new JN(this.context, null != (e = this.Va) ? e : _.Ih(150), g);
                H(c, f);
                e = new Gq(this.context, this.G, g);
                H(c, e);
                h = new KN(this.context, this.ua, this.Ca, e.B, g);
                H(c, h);
                b = new rO(this.context, this.ca, this.D, d, this.l, this.O, this.L, this.ua, this.X, this.K, this.F, this.Nc, this.ba, b, this.isSecureContext, this.lb, this.Ba, this.G, this.T, e.B, g, h.l, f.l, this.A, this.N, this.ga);
                H(c, b);
                ng(c)
            }
        } else this.F.qe.dispatchEvent(sI, 965, this.l)
    };
    var xO = new _.v.Map,
        yO = function(a, b, c, d) {
            d = void 0 === d ? xO : d;
            Z.call(this, a, 834);
            this.K = b;
            this.Y = c;
            this.l = d;
            this.A = W(this);
            _.C(Ey) ? this.A.Ka(_.v.Promise.all(this.Y.map(this.F, this)).then(function(e) {
                return e.filter(function(f) {
                    return null != f && !f.H
                })
            })) : this.D = _.v.Promise.all(this.Y.map(this.F, this))
        };
    _.O(yO, Z);
    yO.prototype.j = function() {
        var a = this,
            b;
        return _.Ab(function(c) {
            if (1 == c.j) return a.D ? c = Bb(c, a.D, 3) : (c.j = 0, c = void 0), c;
            b = c.o;
            a.A.J(b.filter(function(d) {
                return null != d && !d.H
            }));
            c.j = 0
        })
    };
    yO.prototype.F = function(a) {
        var b = this,
            c, d;
        return _.Ab(function(e) {
            if (1 == e.j) {
                if (a.H) return e.return();
                b.l.has(a) || (b.l.set(a, Br(a)), _.Qn(a, function() {
                    return void b.l.delete(a)
                }));
                c = b.l.get(a);
                return Bb(e, c(), 2)
            }
            d = e.o;
            if (b.H) return e.return();
            if (d) return e.return(a);
            M(b.K, HJ(a.getAdUnitPath()));
            return e.return()
        })
    };
    var zO = function(a, b, c, d, e) {
        Z.call(this, a, 847);
        this.L = b;
        this.Oa = c;
        this.A = d;
        this.l = W(this);
        this.D = X(this, e)
    };
    _.O(zO, Z);
    zO.prototype.j = function() {
        var a = this.D.value;
        if (a.length) {
            for (var b = _.w(a), c = b.next(); !c.done; c = b.next()) EI(this.L, c.value);
            this.A ? this.l.J([]) : this.Oa ? (b = Fh(a[0].getAdUnitPath()), a = AO(a, b), this.l.J(a)) : (a = a.map(function(d) {
                return {
                    Mb: Fh(d.getAdUnitPath()),
                    Y: [d]
                }
            }), this.l.J(a))
        } else this.l.J([])
    };
    var AO = function(a, b) {
        var c = [];
        a = Ba(a, function(f) {
            return Fh(f.getAdUnitPath())
        });
        a = _.w(_.t(Object, "entries").call(Object, a));
        for (var d = a.next(); !d.done; d = a.next()) {
            var e = _.w(d.value);
            d = e.next().value;
            e = e.next().value;
            d === b ? c.unshift({
                Mb: d,
                Y: e
            }) : c.push({
                Mb: d,
                Y: e
            })
        }
        return c
    };
    var BO = function(a, b, c) {
        Z.call(this, a, 845);
        this.V = b;
        this.l = W(this);
        this.A = W(this);
        this.D = X(this, c)
    };
    _.O(BO, Z);
    BO.prototype.j = function() {
        var a = this,
            b = function(d) {
                return !!mi(a.V[d.getDomId()]).length
            },
            c = this.D.value;
        this.l.J(c.filter(b));
        this.A.J(c.filter(Gs(b)))
    };
    var CO = function(a, b, c, d, e) {
        Z.call(this, a, 864);
        this.L = b;
        this.O = c;
        this.T = d;
        this.l = NB(this);
        this.A = X(this, e)
    };
    _.O(CO, Z);
    CO.prototype.j = function() {
        for (var a = _.w(this.A.value), b = a.next(); !b.done; b = a.next())
            if (b = b.value, _.yq(this.L, b)) {
                var c = this.O,
                    d = c.U;
                c = c.V[b.getDomId()];
                kn(c, d) && mn(b, this.T, c, d);
                EI(this.L, b);
                var e = void 0,
                    f = void 0;
                null != (e = null != (f = ri(c, 10)) ? f : _.E(d, 11)) && e && mn(b, this.T, c, d)
            }
        this.l.notify()
    };
    var DO = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x, G, D, F, N) {
        _.T.call(this);
        var L = this;
        this.context = a;
        this.F = b;
        this.C = c;
        this.L = d;
        this.ua = e;
        this.ra = f;
        this.D = g;
        this.I = h;
        this.R = k;
        this.isSecureContext = l;
        this.Ca = n;
        this.M = m;
        this.lb = p;
        this.Ba = r;
        this.Va = u;
        this.T = x;
        this.G = G;
        this.l = D;
        this.A = F;
        this.K = N;
        this.j = new _.v.Map;
        this.m = new jI(a);
        _.Fn(this, this.m);
        this.m.Z(sI, function(R) {
            R = R.detail;
            var S = L.j.get(R);
            S && (L.j.delete(R), S.Da())
        })
    };
    _.O(DO, _.T);
    var EO = function(a, b, c, d) {
        var e = ++a.L.C;
        a.j.has(e);
        var f = new fg;
        a.j.set(e, f);
        b = new yO(a.context, a.C, b);
        H(f, b);
        var g = new BO(a.context, d.V, b.A);
        H(f, g);
        b = new zO(a.context, a.L, !!_.E(d.U, 6), Om("google_nofetch"), g.l);
        H(f, b);
        g = new CO(a.context, a.L, d, document, g.A);
        H(f, g);
        a = new wO(a.context, a.F, a.C, d, a.L, a.ua, c, a.D, a.I, e, {
            qe: a.m,
            ra: a.ra
        }, a.R, a.isSecureContext, a.Ca, a.M, a.lb, a.Ba, a.Va, a.G, a.T, b.l, g.l, a.l, a.A, a.K);
        H(f, a);
        ng(f)
    };
    var FO = function(a, b, c, d, e, f, g, h, k, l, n, m, p, r, u, x) {
        hN.call(this, c, h);
        this.context = a;
        this.L = d;
        this.I = new _.v.Set;
        this.M = {};
        this.F = new GN(a, d);
        this.K = new DO(a, b, c, d, new _.aC(window), this.l, n, e, this.F, f, g, k, l, m, p, document, window, r, u, x);
        _.Fn(this, this.K)
    };
    _.O(FO, hN);
    FO.prototype.getName = function() {
        return "publisher_ads"
    };
    FO.prototype.display = function(a, b, c, d, e) {
        d = void 0 === d ? "" : d;
        e = void 0 === e ? "" : e;
        var f = "";
        if (d)
            if (_.na(d) && 1 == d.nodeType) {
                var g = d;
                f = g.id
            } else f = d;
        zp(this);
        var h = Hl(c, this.context, this.j, a, b, f),
            k = h.slotId;
        h = h.rb;
        if (k && h) {
            g && !f && (g.id = k.getDomId());
            this.slotAdded(k, h);
            h.setClickUrl(e);
            var l;
            sp(this, null != (l = g) ? l : k.getDomId(), c)
        } else M(this.j, Ek("PubAdsService.display", [a, b, d]))
    };
    var sp = function(a, b, c) {
            var d = GO(b, c);
            c = d.slotId;
            var e = d.Ng;
            d = d.Og;
            if (c) {
                if (b = hj(), (d = Zn(b, c.getDomId())) && !_.E(d, 19))
                    if (e && b.m.set(c, e), Yi(c) || qi(Dm(d))) {
                        if (_.z(d, 19, !0), e = Ui(b.j, b.o), a.C) {
                            zp(a);
                            a.C && yI(a.L, c);
                            a.j.info(cJ());
                            b = e.U;
                            d = e.V;
                            var f = _.E(b, 6);
                            if (f || !a.L.Gb(c)) f && (f = Yi(c)) && c.dispatchEvent(mI, 778, f), _.E(b, 4) && (d = d[c.getDomId()], kn(d, b) && !a.L.Gb(c) && mn(c, document, d, b)), HO(a, e, c)
                        }
                    } else M(a.j, SI(String(y(d, 1)), String(y(d, 2))), c)
            } else d ? a.j.error(TI(d)) : a.j.error(Ek("googletag.display", [String(b)]))
        },
        fK = function(a, b, c) {
            var d = void 0 === d ? document : d;
            var e;
            null != (e = c.V[b.getDomId()]) && _.z(e, 19, !0);
            e = {
                id: Sw(b.getDomId())
            };
            pb(d, $g(e));
            Yi(b, d) ? (zp(a), yI(a.L, b), HO(a, c, b)) : oj("gpt_pb_write", function(f) {
                vj(f, a.context)
            })
        };
    FO.prototype.slotAdded = function(a, b) {
        var c = this;
        _.E(b, 17) || this.C && yI(this.L, a);
        this.l.dispatchEvent(pI, 724, {
            Pe: a.getDomId(),
            V: b
        });
        var d = 0;
        a.Z(zq, function(e) {
            var f = e.detail;
            e = f.size;
            f = f.isEmpty;
            var g = new nM(a, "publisher_ads");
            f && (g.isEmpty = !0);
            var h = a.ma.getResponseInformation();
            e && h && (g.size = [e.width, e.height], g.sourceAgnosticCreativeId = h.sourceAgnosticCreativeId, g.sourceAgnosticLineItemId = h.sourceAgnosticLineItemId, g.isBackfill = h.isBackfill, g.creativeId = h.creativeId, g.lineItemId = h.lineItemId, g.creativeTemplateId = h.creativeTemplateId, g.advertiserId = h.advertiserId, g.campaignId = h.campaignId, g.yieldGroupIds = h.yieldGroupIds, g.companyIds = h.companyIds);
            _.C(Gy) && (e = new Qk("gpt_sree"), vj(e, c.context), J(e, "sid", c.context.pvsid), J(e, "adk", qr(c.L, a)), J(e, "nf", f), J(e, "rc", CI(c.L, a)), J(e, "sret", ((_.nf(_.q) || 0) - d).toFixed(3)), Sk(e));
            c.l.dispatchEvent("slotRenderEnded", 708, g)
        });
        a.Z(nI, function(e) {
            var f, g;
            d = null != (g = null != (f = e.timeStamp) ? f : _.nf(_.q)) ? g : 0;
            c.l.dispatchEvent("slotResponseReceived", 709, new tM(a, c.getName()))
        });
        hN.prototype.slotAdded.call(this, a, b)
    };
    var HO = function(a, b, c) {
            var d = IO(a, b, c);
            JO(a, d, b, {
                yb: 1
            });
            b = c.getAdUnitPath();
            if (c = a.M[b]) {
                c = _.w(c);
                for (d = c.next(); !d.done; d = c.next()) d = d.value, JO(a, d.Y, d.O, d.Nc);
                delete a.M[b]
            }
        },
        IO = function(a, b, c) {
            var d = b.U;
            b = b.V;
            if (_.E(d, 4)) return [];
            var e;
            return !_.E(d, 6) || (null == (e = b[c.getDomId()]) ? 0 : _.E(e, 17)) ? (a.I.add(c), _.Qn(c, function() {
                return void a.I.delete(c)
            }), [c]) : a.m.filter(function(f) {
                if (a.I.has(f)) return !1;
                a.I.add(f);
                _.Qn(f, function() {
                    return void a.I.delete(f)
                });
                return !0
            })
        },
        JO = function(a, b, c, d) {
            a.j.info(jJ());
            if (KO(a, b, d, c) && 1 !== d.yb)
                for (b = _.w(b), d = b.next(); !d.done; d = b.next()) d = d.value.getDomId(), a.l.dispatchEvent(qI, 725, {
                    Pe: d,
                    V: c.V[d]
                })
        },
        KO = function(a, b, c, d) {
            b = b.filter(function(e) {
                if (!_.yq(a.L, e)) return !1;
                var f = d.V[e.getDomId()];
                5 !== Dm(f) && 4 !== Dm(f) || _.zI(a.L, e);
                return !0
            });
            if (!b.length) return null;
            EO(a.K, b, c, d);
            return b
        };
    FO.prototype.refresh = function(a, b, c) {
        b = LO(this, b);
        if (!b.length) return !1;
        MO(this, a, b, null != c ? c : {
            yb: 2
        });
        return !0
    };
    var LO = function(a, b) {
            return b.filter(function(c, d) {
                if (!c.H) return !0;
                M(a.j, mJ(String(d)));
                return !1
            })
        },
        MO = function(a, b, c, d) {
            var e = c[0],
                f, g = null != (f = null == e ? void 0 : e.getDomId()) ? f : "";
            if (a.C) {
                var h = {};
                e = _.w(c);
                for (f = e.next(); !f.done; h = {
                        wc: h.wc
                    }, f = e.next()) h.wc = f.value, a.I.add(h.wc), _.Qn(h.wc, function(k) {
                    return function() {
                        return void a.I.delete(k.wc)
                    }
                }(h));
                JO(a, c, b, d)
            } else c.length && _.E(b.U, 6) ? (M(a.j, iJ(g), e), e = e.getAdUnitPath(), f = null != (h = a.M[e]) ? h : [], f.push({
                Y: c,
                O: b,
                Nc: d
            }), a.M[e] = f) : M(a.j, gJ(g), e)
        };
    FO.prototype.R = function() {
        var a = this,
            b = hj().j;
        if (_.E(b, 6))
            for (var c = _.w(this.m), d = c.next(); !d.done; d = c.next()) this.C && yI(this.L, d.value);
        mK(this, b);
        this.l.Z("rewardedSlotClosed", function(e) {
            var f = e.detail.slot;
            e = _.t(a.m, "find").call(a.m, function(g) {
                return f === g.ma
            });
            NO(a, [e], hj().j, hj().o, a.L)
        });
        Lk()
    };
    FO.prototype.destroySlots = function(a) {
        a = hN.prototype.destroySlots.call(this, a);
        if (a.length && this.C) {
            var b = hj();
            OO(this, a, b.j, b.o)
        }
        return a
    };
    var oK = function(a, b, c, d) {
            if (!a.C) return M(a.j, hJ(), d[0]), !1;
            var e = LO(a, d);
            if (!e.length) return M(a.j, Ek("PubAdsService.clear", [d].filter(function(f) {
                return void 0 !== f
            }))), !1;
            a.j.info(kJ());
            OO(a, e, b, c);
            return !0
        },
        OO = function(a, b, c, d) {
            for (var e = _.w(b), f = e.next(); !f.done; f = e.next()) vI(a.L, f.value);
            NO(a, b, c, d, a.L)
        };
    FO.prototype.forceExperiment = function(a) {
        a = Number(a);
        0 < a && _.rf(sf).o(a)
    };
    var NO = function(a, b, c, d, e) {
            var f = void 0 === f ? window : f;
            b = _.w(b);
            for (var g = b.next(); !g.done; g = b.next()) {
                g = g.value;
                GI(a.F.L, g);
                var h = d[g.getDomId()];
                kn(h, c) && mn(g, f.document, h, c);
                EI(e, g)
            }
        },
        nK = function(a, b, c, d) {
            if ("string" !== typeof b || "string" !== typeof c) M(a.j, Ek("PubAdsService.setVideoContent", [b, c]));
            else {
                var e = _.z(d, 21, !0);
                b = _.z(e, 22, b);
                _.z(b, 23, c);
                mK(a, d)
            }
        },
        pK = function(a, b) {
            if (!a.C) return null;
            var c, d;
            return {
                vid: null != (c = _.Kf(b, 22)) ? c : "",
                cmsid: null != (d = _.Kf(b, 23)) ? d : ""
            }
        },
        mK = function(a, b) {
            _.E(b, 21) && a.C && (a = Hx(), _.z(b, 29, a))
        },
        GO = function(a, b) {
            var c = "";
            if ("string" === typeof a) c = a, b = KK(b, c);
            else if (_.na(a) && 1 == a.nodeType) {
                var d = a;
                c = d.id;
                b = KK(b, c)
            } else b = (_.B = [].concat(_.xe(b.Y)), _.t(_.B, "find")).call(_.B, function(e) {
                return e.ma === a
            });
            return {
                slotId: b,
                Ng: d,
                Og: c
            }
        };
    var PO = _.P(["https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js"]),
        QO = _.P(["https://securepubads.g.doubleclick.net/pagead/js/rum.js"]);
    var RO = Zr(["^[-p{L}p{M}p{N}_,.!*<>():/]*$"], ["^[-\\p{L}\\p{M}\\p{N}_,\\.!*<>():/]*$"]),
        SO = _.Hs(function() {
            Dx("The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.")
        }),
        UO = function(a, b) {
            var c = this;
            var d = void 0 === d ? _.t(String, "raw").call(String, RO) : d;
            this.L = a;
            this.o = d;
            this.j = new _.v.Map;
            this.Y = new _.v.Set;
            b.m = function(e) {
                return TO(c, e)
            }
        };
    UO.prototype.defineSlot = function(a, b, c, d, e) {
        a = Hl(this, a, b, c, d, e);
        var f = a.slotId;
        if (f) return f.ma;
        a.od || b.error(Ek("googletag.defineSlot", [c, d, e]));
        return null
    };
    var Hl = function(a, b, c, d, e, f, g) {
        return "string" === typeof d && 0 < d.length && e && (void 0 === f || "string" === typeof f) ? a.add(b, c, d, e, {
            tb: f,
            Pf: void 0 === g ? !1 : g
        }) : {}
    };
    UO.prototype.add = function(a, b, c, d, e) {
        var f = this,
            g = e.tb,
            h = void 0 === e.format ? 0 : e.format,
            k = void 0 === e.Pf ? !1 : e.Pf;
        e = void 0 === e.Ma ? !1 : e.Ma;
        try {
            var l = new RegExp(this.o, "u");
            if (l.test("/1") && !l.test(c)) return b.error(VI(c)), {
                od: !0
            }
        } catch (m) {}
        if (l = Lm(h, e)) return wm(b, l, h, c), {};
        k && SO();
        h = this.j.get(c) || Number(k);
        b = VO(this, a, b, c, h, d, g || "gpt_unit_" + c + "_" + h);
        a = b.rb;
        var n = b.slotId;
        b = b.od;
        if (!n) return {
            od: b
        };
        this.j.set(c, h + 1);
        this.Y.add(n);
        _.Qn(n, function() {
            return void f.Y.delete(n)
        });
        SG(c);
        return {
            slotId: n,
            rb: a
        }
    };
    var KK = function(a, b) {
            a = _.w(a.Y);
            for (var c = a.next(); !c.done; c = a.next())
                if (c = c.value, c.getDomId() === b) return c
        },
        qp = function(a) {
            a = _.w(a);
            for (var b = a.next(); !b.done; b = a.next()) b.value.Da()
        },
        VO = function(a, b, c, d, e, f, g) {
            var h = KK(a, g);
            if (h) return c.error(UI(g, d, h.getAdUnitPath())), {
                od: !0
            };
            var k = new tK;
            uK(_.z(k, 1, d), g);
            vK(k, em(f));
            iH(k);
            var l = new He(b, d, e, g);
            hK(l, mm(b, c, l));
            _.Qn(l, function() {
                var n = hj(),
                    m = l.getDomId();
                delete n.o[m];
                n.m.delete(l);
                n = l.getAdUnitPath();
                n = Fh(n);
                var p;
                m = (null != (p = ci.get(n)) ? p : 0) - 1;
                0 >= m ? ci.delete(n) : ci.set(n, m);
                c.info(tJ(l.toString()), l);
                (p = xk.get(l)) && yk.delete(p);
                xk.delete(l)
            });
            c.info(II(l.toString()), l);
            l.Z(oI, function(n) {
                n = n.detail.hi;
                c.info(JI(l.getAdUnitPath()), l);
                jB(_.rf(Th), "7", 9, CI(a.L, l), 0, n)
            });
            l.Z(nI, function(n) {
                var m = n.detail;
                c.info(KI(l.getAdUnitPath()), l);
                var p;
                n = _.rf(Th);
                var r = tq(k, 20);
                m = null != (p = m.getEscapedQemQueryId()) ? p : "";
                n.j && (_.q.google_timing_params = _.q.google_timing_params || {}, _.q.google_timing_params["qqid." + r] = m)
            });
            l.Z(xq, function() {
                return void c.info(LI(l.getAdUnitPath()), l)
            });
            l.Z(zq, function() {
                return void c.info(MI(l.getAdUnitPath()), l)
            });
            return {
                rb: k,
                slotId: l
            }
        },
        TO = function(a, b) {
            var c = new RegExp("(^|,|/)" + b + "($|,|/)");
            return [].concat(_.xe(a.Y)).some(function(d) {
                return c.test(Fh(d.getAdUnitPath()))
            })
        };
    var Kr = "1";
    (function(a, b) {
        var c = null != a ? a : {
            Wa: Lr(),
            nb: "m202304170101",
            Pb: new _.Pr(0),
            cg: !0,
            lf: 1
        };
        try {
            var d = Kk();
            ge(!_.rf(Gh).j);
            _.t(Object, "assign").call(Object, Hh, d._vars_);
            d._vars_ = Hh;
            if (d.evalScripts) d.evalScripts();
            else {
                GH();
                try {
                    Vg()
                } catch (ia) {
                    Vh(c, 408, ia)
                }
                dn();
                var e = new PL;
                try {
                    Rg(e.I), uf(13), uf(3)
                } catch (ia) {
                    Vh(c, 408, ia)
                }
                var f = Nr(e),
                    g = null != a ? a : Qr(f),
                    h = null != b ? b : new OL(g);
                Qh(g);
                oj("gpt_fifwin", function(ia) {
                    vj(ia, g)
                }, d.fifWin ? .01 : 0);
                var k = new uI,
                    l = new UO(k, e),
                    n = new rN(g),
                    m = _.Ih(260),
                    p = new HL(g, l, hj(), h, k, m, e, n),
                    r = rx(),
                    u = Tp(g),
                    x = new jI(g),
                    G = new jI(g),
                    D = new jI(g),
                    F, N;
                _.C(My) && (N = _.Ih(150));
                m && (F = IL(p, x, N));
                var L = _.Ih(221),
                    R = new uN,
                    S = new jN,
                    V, ja, da = null != (ja = null == (V = F) ? void 0 : V.Kb) ? ja : new Fq,
                    Fa = new FO(g, l, h, k, n, r, e, x, m, L, R, S, N, F, u, da);
                _.C(yz) && new LK(g, x, k, l);
                var ta = hj().j;
                Hp(g, h, Fa, ta, l, G, D, e, S, da);
                var qa = Rh(g, 77, function() {
                    var ia = d.cmd;
                    if (!ia || Array.isArray(ia)) {
                        var Ta = new MK(h);
                        d.cmd = Bk(g, Ta);
                        null != ia && ia.length && Ta.push.apply(Ta, ia)
                    }
                });
                d.fifWin && "complete" !== document.readyState ? _.yb(window, "load", function() {
                    return window.setTimeout(qa, 0)
                }) : qa();
                np();
                if (_.C(yz) || _.rf(Th).j) Jr(), Tk(document, _.C(Az) ? _.A(PO) : _.A(QO));
                lq(g, h);
                Ok(g)
            }
        } catch (ia) {
            Vh(c, 106, ia)
        }
    })();
    var YO = function(a, b) {
        var c = this;
        this.m = a;
        this.j = !1;
        this.H = b;
        this.o = this.H.qa(264, function(d) {
            c.j && (WO || (d = Date.now()), c.m(d), WO ? XO.call(_.q, c.o) : _.q.setTimeout(c.o, 17))
        })
    };
    YO.prototype.start = function() {
        this.j || (this.j = !0, WO ? XO.call(_.q, this.o) : this.o(0))
    };
    YO.prototype.stop = function() {
        this.j = !1
    };
    var XO = _.q.requestAnimationFrame || _.q.webkitRequestAnimationFrame,
        WO = !!XO && !/'iPhone'/.test(_.q.navigator.userAgent);
    var ZO = function(a, b, c, d) {
        this.o = a;
        this.ha = b;
        this.K = c;
        this.progress = 0;
        this.H = null;
        this.C = !1;
        this.j = [];
        this.m = null;
        this.l = new YO((0, _.xs)(this.D, this), d)
    };
    ZO.prototype.D = function(a) {
        if (this.C) this.l.stop();
        else {
            null === this.H && (this.H = a);
            this.progress = (a - this.H) / this.K;
            1 <= this.progress && (this.progress = 1);
            a = this.m ? this.m(this.progress) : this.progress;
            this.j = [];
            for (var b = 0; b < this.o.length; b++) this.j.push((this.ha[b] - this.o[b]) * a + this.o[b]);
            this.M();
            1 == this.progress && (this.l.stop(), this.I())
        }
    };
    ZO.prototype.I = function() {};
    ZO.prototype.M = function() {};
    _.$O = function(a) {
        a.C = !1;
        a.l.start()
    };
    ZO.prototype.stop = function() {
        this.C = !0
    };
    _.aP = function(a) {
        return a * a * a
    };
    _.bP = function(a) {
        a = 1 - a;
        return 1 - a * a * a
    };
    _.cP = function(a, b, c, d, e, f, g, h) {
        ZO.call(this, [b], [c], d, f);
        this.R = a;
        this.F = e;
        this.A = g ? g : null;
        this.m = h || null
    };
    _.O(_.cP, ZO);
    _.cP.prototype.M = function() {
        var a = {};
        a[this.F] = this.j[0] + "px";
        _.Rx(this.R, a)
    };
    _.cP.prototype.I = function() {
        this.A && this.A()
    };
}).call(this, {});