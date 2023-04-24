/* prebid.js v6.27.0
Updated : 2023-03-04*/
/*! For license information please see prebid-core.js.LICENSE.txt */
! function() {
    var e, n = {
            4877: function(e, n, t) {
                "use strict";
                t.d(n, {
                    Pd: function() {
                        return s
                    },
                    Th: function() {
                        return c
                    },
                    _U: function() {
                        return d
                    }
                });
                var r = t(6996),
                    i = t(9853),
                    o = t(265),
                    a = t(1879),
                    u = "outstream";

                function c(e) {
                    var n = this,
                        t = e.url,
                        o = e.config,
                        a = e.id,
                        c = e.callback,
                        s = e.loaded,
                        d = e.adUnitCode;
                    this.url = t, this.config = o, this.handlers = {}, this.id = a, this.loaded = s, this.cmd = [], this.push = function(e) {
                        "function" == typeof e ? n.loaded ? e.call() : n.cmd.push(e) : (0, i.logError)("Commands given to Renderer.push must be wrapped in a function")
                    }, this.callback = c || function() {
                        n.loaded = !0, n.process()
                    }, this.render = function() {
                        var e = this,
                            n = arguments,
                            o = function() {
                                e._render ? e._render.apply(e, n) : (0, i.logWarn)("No render function was provided, please use .setRender on the renderer")
                            };
                        f(d) ? ((0, i.logWarn)("External Js not loaded by Renderer since renderer url and callback is already defined on adUnit ".concat(d)), o()) : (this.cmd.unshift(o), (0, r.B)(t, u, this.callback, this.documentContext))
                    }.bind(this)
                }

                function s(e) {
                    return !(!e || !e.url)
                }

                function d(e, n, t) {
                    var r = null;
                    e.config && e.config.documentResolver && (r = e.config.documentResolver(n, document, t)), r || (r = document), e.documentContext = r, e.render(n, e.documentContext)
                }

                function f(e) {
                    var n = fusePbjs.adUnits,
                        t = (0, a.sE)(n, (function(n) {
                            return n.code === e
                        }));
                    if (!t) return !1;
                    var r = (0, o.Z)(t, "renderer"),
                        i = !!(r && r.url && r.render),
                        u = (0, o.Z)(t, "mediaTypes.video.renderer"),
                        c = !!(u && u.url && u.render);
                    return !!(i && !0 !== r.backupOnly || c && !0 !== u.backupOnly)
                }
                c.install = function(e) {
                    return new c({
                        url: e.url,
                        config: e.config,
                        id: e.id,
                        callback: e.callback,
                        loaded: e.loaded,
                        adUnitCode: e.adUnitCode
                    })
                }, c.prototype.getConfig = function() {
                    return this.config
                }, c.prototype.setRender = function(e) {
                    this._render = e
                }, c.prototype.setEventHandlers = function(e) {
                    this.handlers = e
                }, c.prototype.handleVideoEvent = function(e) {
                    var n = e.id,
                        t = e.eventName;
                    "function" == typeof this.handlers[t] && this.handlers[t](), (0, i.logMessage)("Prebid Renderer event for id ".concat(n, " type ").concat(t))
                }, c.prototype.process = function() {
                    for (; this.cmd.length > 0;) try {
                        this.cmd.shift().call()
                    } catch (e) {
                        (0, i.logError)("Error processing Renderer command: ", e)
                    }
                }
            },
            7263: function(e, n, t) {
                "use strict";
                t.d(n, {
                    f: function() {
                        return a
                    }
                });
                var r = t(265),
                    i = {};

                function o(e, n, t) {
                    var r = function(e, n) {
                        var t = i[e] = i[e] || {
                            bidders: {}
                        };
                        return n ? t.bidders[n] = t.bidders[n] || {} : t
                    }(e, t);
                    return r[n] = (r[n] || 0) + 1, r[n]
                }
                var a = {
                    incrementRequestsCounter: function(e) {
                        return o(e, "requestsCounter")
                    },
                    incrementBidderRequestsCounter: function(e, n) {
                        return o(e, "requestsCounter", n)
                    },
                    incrementBidderWinsCounter: function(e, n) {
                        return o(e, "winsCounter", n)
                    },
                    getRequestsCounter: function(e) {
                        return (0, r.Z)(i, "".concat(e, ".requestsCounter")) || 0
                    },
                    getBidderRequestsCounter: function(e, n) {
                        return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".requestsCounter")) || 0
                    },
                    getBidderWinsCounter: function(e, n) {
                        return (0, r.Z)(i, "".concat(e, ".bidders.").concat(n, ".winsCounter")) || 0
                    }
                }
            },
            2801: function(e, n, t) {
                "use strict";

                function r(e) {
                    var n = e;
                    return {
                        callBids: function() {},
                        setBidderCode: function(e) {
                            n = e
                        },
                        getBidderCode: function() {
                            return n
                        }
                    }
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            7602: function(e, n, t) {
                "use strict";
                t.d(n, {
                    qJ: function() {
                        return z
                    },
                    VP: function() {
                        return X
                    },
                    ZP: function() {
                        return re
                    },
                    JO: function() {
                        return Q
                    },
                    rp: function() {
                        return J
                    },
                    uV: function() {
                        return ee
                    },
                    Ct: function() {
                        return ne
                    },
                    nX: function() {
                        return Y
                    }
                });
                var r = t(9853),
                    i = t(265),
                    o = t(1269),
                    a = t(9017),
                    u = t(1609),
                    c = t(5755),
                    s = t(8962),
                    d = t(3494),
                    f = t(1879),
                    l = t(7263),
                    g = t(2661);

                function p(e) {
                    return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, p(e)
                }

                function v(e, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), n && y(e, n)
                }

                function y(e, n) {
                    return y = Object.setPrototypeOf || function(e, n) {
                        return e.__proto__ = n, e
                    }, y(e, n)
                }

                function b(e) {
                    var n = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch (e) {
                            return !1
                        }
                    }();
                    return function() {
                        var t, r = m(e);
                        if (n) {
                            var i = m(this).constructor;
                            t = Reflect.construct(r, arguments, i)
                        } else t = r.apply(this, arguments);
                        return h(this, t)
                    }
                }

                function h(e, n) {
                    if (n && ("object" === p(n) || "function" == typeof n)) return n;
                    if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                    return function(e) {
                        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }

                function m(e) {
                    return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, m(e)
                }

                function E(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }

                function C(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function w(e, n, t) {
                    return n && C(e.prototype, n), t && C(e, t), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e
                }

                function S(e, n, t) {
                    ! function(e, n) {
                        if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                    }(e, n), n.set(e, t)
                }

                function A(e, n) {
                    return function(e, n) {
                        return n.get ? n.get.call(e) : n.value
                    }(e, T(e, n, "get"))
                }

                function I(e, n, t) {
                    return function(e, n, t) {
                        if (n.set) n.set.call(e, t);
                        else {
                            if (!n.writable) throw new TypeError("attempted to set read only private field");
                            n.value = t
                        }
                    }(e, T(e, n, "set"), t), t
                }

                function T(e, n, t) {
                    if (!n.has(e)) throw new TypeError("attempted to " + t + " private field on non-instance");
                    return n.get(e)
                }
                var O = new WeakMap,
                    U = new WeakMap,
                    B = new WeakMap,
                    j = new WeakMap,
                    k = new WeakMap,
                    P = function() {
                        function e() {
                            var n, t;
                            E(this, e), S(this, O, {
                                writable: !0,
                                value: void 0
                            }), S(this, U, {
                                writable: !0,
                                value: void 0
                            }), S(this, B, {
                                writable: !0,
                                value: void 0
                            }), S(this, j, {
                                writable: !0,
                                value: void 0
                            }), S(this, k, {
                                writable: !0,
                                value: void 0
                            }), t = void 0, (n = "generatedTime") in this ? Object.defineProperty(this, n, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : this[n] = t, this.reset()
                        }
                        return w(e, [{
                            key: "reset",
                            value: function() {
                                var e = this;
                                I(this, B, new Promise((function(n) {
                                    I(e, j, (function(t) {
                                        I(e, k, !0), I(e, U, t), n(t)
                                    }))
                                }))), I(this, O, !1), I(this, U, null), I(this, k, !1), this.generatedTime = null
                            }
                        }, {
                            key: "enable",
                            value: function() {
                                I(this, O, !0)
                            }
                        }, {
                            key: "enabled",
                            get: function() {
                                return A(this, O)
                            }
                        }, {
                            key: "ready",
                            get: function() {
                                return A(this, k)
                            }
                        }, {
                            key: "promise",
                            get: function() {
                                return A(this, k) ? Promise.resolve(A(this, U)) : (A(this, O) || A(this, j).call(this, null), A(this, B))
                            }
                        }, {
                            key: "setConsentData",
                            value: function(e) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.timestamp)();
                                this.generatedTime = n, A(this, j).call(this, e)
                            }
                        }, {
                            key: "getConsentData",
                            value: function() {
                                return A(this, U)
                            }
                        }]), e
                    }(),
                    _ = function(e) {
                        v(t, e);
                        var n = b(t);

                        function t() {
                            return E(this, t), n.apply(this, arguments)
                        }
                        return w(t, [{
                            key: "getConsentMeta",
                            value: function() {
                                var e = this.getConsentData();
                                if (e && this.generatedTime) return {
                                    usp: e,
                                    generatedAt: this.generatedTime
                                }
                            }
                        }]), t
                    }(P),
                    R = function(e) {
                        v(t, e);
                        var n = b(t);

                        function t() {
                            return E(this, t), n.apply(this, arguments)
                        }
                        return w(t, [{
                            key: "getConsentMeta",
                            value: function() {
                                var e = this.getConsentData();
                                if (e && e.vendorData && this.generatedTime) return {
                                    gdprApplies: e.gdprApplies,
                                    consentStringSize: (0, r.isStr)(e.vendorData.tcString) ? e.vendorData.tcString.length : 0,
                                    generatedAt: this.generatedTime,
                                    apiVersion: e.apiVersion
                                }
                            }
                        }]), t
                    }(P),
                    D = t(2319),
                    x = t(5644);

                function q(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function N(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? q(Object(t), !0).forEach((function(n) {
                            F(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : q(Object(t)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }

                function M(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function F(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function W() {
                    return W = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, W.apply(this, arguments)
                }
                var z = {
                        CLIENT: "client",
                        SERVER: "server"
                    },
                    K = {},
                    L = K.bidderRegistry = {},
                    Z = K.aliasRegistry = {},
                    H = [];
                s.vc.getConfig("s2sConfig", (function(e) {
                    e && e.s2sConfig && (H = (0, r.isArray)(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig])
                }));
                var G = {},
                    V = (0, d.z3)("sync", (function(e) {
                        var n = e.bidderCode,
                            t = e.auctionId,
                            o = e.bidderRequestId,
                            a = e.adUnits,
                            u = e.src;
                        return a.reduce((function(e, a) {
                            return e.push(a.bids.filter((function(e) {
                                return e.bidder === n
                            })).reduce((function(e, n) {
                                var c = null == (n = W({}, n, (0, r.getDefinedParams)(a, ["nativeParams", "ortb2Imp", "mediaType", "renderer", "storedAuctionResponse"]))).mediaTypes ? a.mediaTypes : n.mediaTypes;
                                return (0, r.isValidMediaTypes)(c) ? n = W({}, n, {
                                    mediaTypes: c
                                }) : (0, r.logError)("mediaTypes is not correctly configured for adunit ".concat(a.code)), e.push(W({}, n, {
                                    adUnitCode: a.code,
                                    transactionId: a.transactionId,
                                    sizes: (0, i.Z)(c, "banner.sizes") || (0, i.Z)(c, "video.playerSize") || [],
                                    bidId: n.bid_id || (0, r.getUniqueIdentifierStr)(),
                                    bidderRequestId: o,
                                    auctionId: t,
                                    src: u,
                                    bidRequestsCount: l.f.getRequestsCounter(a.code),
                                    bidderRequestsCount: l.f.getBidderRequestsCounter(a.code, n.bidder),
                                    bidderWinsCount: l.f.getBidderWinsCounter(a.code, n.bidder)
                                })), e
                            }), [])), e
                        }), []).reduce(r.flatten, []).filter((function(e) {
                            return "" !== e
                        }))
                    }), "getBids"),
                    Q = (0, d.z3)("sync", (function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = t.getS2SBidders,
                            i = void 0 === r ? ee : r;
                        if (null == n) return e;
                        var o = i(n);
                        return e.filter((function(e) {
                            return o.has(e.bidder)
                        }))
                    }), "filterBidsForAdUnit"),
                    J = new R,
                    Y = new _,
                    X = {
                        getCoppa: function() {
                            return !!s.vc.getConfig("coppa")
                        }
                    },
                    $ = (0, d.z3)("sync", (function(e, n) {
                        return (0, o.UB)(e, n)
                    }), "setupAdUnitMediaTypes");

                function ee(e) {
                    (0, r.isArray)(e) || (e = [e]);
                    var n = new Set([null]);
                    return e.filter((function(e) {
                        return e && e.enabled
                    })).flatMap((function(e) {
                        return e.bidders
                    })).forEach((function(e) {
                        return n.add(e)
                    })), n
                }
                var ne = (0, d.z3)("sync", (function(e, n) {
                    var t, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = i.getS2SBidders,
                        a = void 0 === o ? ee : o,
                        u = a(n);
                    return (0, r.getBidderCodes)(e).reduce((function(e, n) {
                        return e[u.has(n) ? z.SERVER : z.CLIENT].push(n), e
                    }), (F(t = {}, z.CLIENT, []), F(t, z.SERVER, []), t))
                }), "partitionBidders");

                function te(e, n, t) {
                    try {
                        var i = L[e].getSpec();
                        i && i[n] && "function" == typeof i[n] && ((0, r.logInfo)("Invoking ".concat(e, ".").concat(n)), s.vc.runWithBidder(e, r.bind.call(i[n], i, t)))
                    } catch (t) {
                        (0, r.logWarn)("Error calling ".concat(n, " of ").concat(e))
                    }
                }
                K.makeBidRequests = (0, d.z3)("sync", (function(e, n, t, i, o) {
                    D.j8(x.FP.BEFORE_REQUEST_BIDS, e), (0, a.Fb)(e), e = $(e, o);
                    var u = ne(e, H),
                        c = u[z.CLIENT],
                        d = u[z.SERVER];
                    s.vc.getConfig("bidderSequence") === s.FD && (c = (0, r.shuffle)(c));
                    var l = (0, g.n)(),
                        p = [];
                    H.forEach((function(i) {
                        if (i && i.enabled) {
                            var o = function(e, n) {
                                    var t = (0, r.deepClone)(e);
                                    return t.forEach((function(e) {
                                        e.bids = Q(e.bids, n).map((function(e) {
                                            return e.bid_id = (0, r.getUniqueIdentifierStr)(), e
                                        }))
                                    })), t.filter((function(e) {
                                        return 0 !== e.bids.length
                                    }))
                                }(e, i),
                                a = (0, r.generateUUID)();
                            d.forEach((function(e) {
                                var u = (0, r.getUniqueIdentifierStr)(),
                                    c = {
                                        bidderCode: e,
                                        auctionId: t,
                                        bidderRequestId: u,
                                        uniquePbsTid: a,
                                        bids: V({
                                            bidderCode: e,
                                            auctionId: t,
                                            bidderRequestId: u,
                                            adUnits: (0, r.deepClone)(o),
                                            src: x.os.YZ
                                        }),
                                        auctionStart: n,
                                        timeout: i.timeout,
                                        src: x.os.YZ,
                                        refererInfo: l
                                    };
                                0 !== c.bids.length && p.push(c)
                            })), o.forEach((function(e) {
                                var n = e.bids.filter((function(e) {
                                    return (0, f.sE)(p, (function(n) {
                                        return (0, f.sE)(n.bids, (function(n) {
                                            return n.bidId === e.bid_id
                                        }))
                                    }))
                                }));
                                e.bids = n
                            })), p.forEach((function(e) {
                                void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = o.filter((function(e) {
                                    return e.bids.length > 0
                                })))
                            }))
                        }
                    }));
                    var v = function(e) {
                        var n = (0, r.deepClone)(e);
                        return n.forEach((function(e) {
                            e.bids = Q(e.bids, null)
                        })), n.filter((function(e) {
                            return 0 !== e.bids.length
                        }))
                    }(e);
                    return c.forEach((function(e) {
                        var a = (0, r.getUniqueIdentifierStr)(),
                            u = {
                                bidderCode: e,
                                auctionId: t,
                                bidderRequestId: a,
                                bids: V({
                                    bidderCode: e,
                                    auctionId: t,
                                    bidderRequestId: a,
                                    adUnits: (0, r.deepClone)(v),
                                    labels: o,
                                    src: "client"
                                }),
                                auctionStart: n,
                                timeout: i,
                                refererInfo: l
                            },
                            c = L[e];
                        c || (0, r.logError)("Trying to make a request for bidder that does not exist: ".concat(e)), c && u.bids && 0 !== u.bids.length && p.push(u)
                    })), J.getConsentData() && p.forEach((function(e) {
                        e.gdprConsent = J.getConsentData()
                    })), Y.getConsentData() && p.forEach((function(e) {
                        e.uspConsent = Y.getConsentData()
                    })), p
                }), "makeBidRequests"), K.callBids = function(e, n, t, i, o, a, u) {
                    if (n.length) {
                        var d = (y = n.reduce((function(e, n) {
                                return e[Number(void 0 !== n.src && n.src === x.os.YZ)].push(n), e
                            }), [
                                [],
                                []
                            ]), b = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(y) || function(e, n) {
                                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != t) {
                                    var r, i, o = [],
                                        a = !0,
                                        u = !1;
                                    try {
                                        for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                                    } catch (e) {
                                        u = !0, i = e
                                    } finally {
                                        try {
                                            a || null == t.return || t.return()
                                        } finally {
                                            if (u) throw i
                                        }
                                    }
                                    return o
                                }
                            }(y, b) || function(e, n) {
                                if (e) {
                                    if ("string" == typeof e) return M(e, n);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? M(e, n) : void 0
                                }
                            }(y, b) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            f = d[0],
                            l = d[1],
                            g = [];
                        l.forEach((function(e) {
                            for (var n = -1, t = 0; t < g.length; ++t)
                                if (e.uniquePbsTid === g[t].uniquePbsTid) {
                                    n = t;
                                    break
                                }
                            n <= -1 && g.push(e)
                        }));
                        var p = 0,
                            v = (0, r.generateUUID)();
                        H.forEach((function(e) {
                            if (e && g[p] && ee(e).has(g[p].bidderCode)) {
                                var n = (0, c.O)(a, o ? {
                                        request: o.request.bind(null, "s2s"),
                                        done: o.done
                                    } : void 0),
                                    u = e.bidders,
                                    s = L[e.adapter],
                                    d = g[p].uniquePbsTid,
                                    f = g[p].adUnitsS2SCopy,
                                    y = l.filter((function(e) {
                                        return e.uniquePbsTid === d
                                    }));
                                if (s) {
                                    var b = {
                                        tid: v,
                                        ad_units: f,
                                        s2sConfig: e
                                    };
                                    if (b.ad_units.length) {
                                        var h = y.map((function(e) {
                                                return e.start = (0, r.timestamp)(), i.bind(e)
                                            })),
                                            m = (0, r.getBidderCodes)(b.ad_units).filter((function(e) {
                                                return u.includes(e)
                                            }));
                                        (0, r.logMessage)("CALLING S2S HEADER BIDDERS ==== ".concat(m.length > 0 ? m.join(", ") : 'No bidder specified, using "ortb2Imp" definition(s) only')), y.forEach((function(e) {
                                            D.j8(x.FP.BID_REQUESTED, N(N({}, e), {}, {
                                                tid: v
                                            }))
                                        })), s.callBids(b, l, t, (function() {
                                            return h.forEach((function(e) {
                                                return e()
                                            }))
                                        }), n)
                                    }
                                } else(0, r.logError)("missing " + e.adapter);
                                p++
                            }
                        })), f.forEach((function(e) {
                            e.start = (0, r.timestamp)();
                            var n = L[e.bidderCode];
                            s.vc.runWithBidder(e.bidderCode, (function() {
                                (0, r.logMessage)("CALLING BIDDER"), D.j8(x.FP.BID_REQUESTED, e)
                            }));
                            var d = (0, c.O)(a, o ? {
                                    request: o.request.bind(null, e.bidderCode),
                                    done: o.done
                                } : void 0),
                                f = i.bind(e);
                            try {
                                s.vc.runWithBidder(e.bidderCode, r.bind.call(n.callBids, n, e, t, f, d, u, s.vc.callbackWithBidder(e.bidderCode)))
                            } catch (n) {
                                (0, r.logError)("".concat(e.bidderCode, " Bid Adapter emitted an uncaught error when parsing their bidRequest"), {
                                    e: n,
                                    bidRequest: e
                                }), f()
                            }
                        }))
                    } else(0, r.logWarn)("callBids executed with no bidRequests.  Were they filtered by labels or sizing?");
                    var y, b
                }, K.videoAdapters = [], K.registerBidAdapter = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = t.supportedMediaTypes,
                        o = void 0 === i ? [] : i;
                    e && n ? "function" == typeof e.callBids ? (L[n] = e, (0, f.q9)(o, "video") && K.videoAdapters.push(n), (0, f.q9)(o, "native") && a.Sg.push(n)) : (0, r.logError)("Bidder adaptor error for bidder code: " + n + "bidder must implement a callBids() function") : (0, r.logError)("bidAdapter or bidderCode not specified")
                }, K.aliasBidAdapter = function(e, n, t) {
                    if (void 0 === L[n]) {
                        var i = L[e];
                        if (void 0 === i) {
                            var o = [];
                            H.forEach((function(t) {
                                if (t.bidders && t.bidders.length) {
                                    var r = t && t.bidders;
                                    t && (0, f.q9)(r, n) ? Z[n] = e : o.push(e)
                                }
                            })), o.forEach((function(e) {
                                (0, r.logError)('bidderCode "' + e + '" is not an existing bidder.', "adapterManager.aliasBidAdapter")
                            }))
                        } else try {
                            var c, s = function(e) {
                                var n = [];
                                return (0, f.q9)(K.videoAdapters, e) && n.push("video"), (0, f.q9)(a.Sg, e) && n.push("native"), n
                            }(e);
                            if (i.constructor.prototype != Object.prototype)(c = new i.constructor).setBidderCode(n);
                            else {
                                var d = i.getSpec(),
                                    l = t && t.gvlid,
                                    g = t && t.skipPbsAliasing;
                                c = (0, u.PZ)(W({}, d, {
                                    code: n,
                                    gvlid: l,
                                    skipPbsAliasing: g
                                })), Z[n] = e
                            }
                            K.registerBidAdapter(c, n, {
                                supportedMediaTypes: s
                            })
                        } catch (n) {
                            (0, r.logError)(e + " bidder does not currently support aliasing.", "adapterManager.aliasBidAdapter")
                        }
                    } else(0, r.logMessage)('alias name "' + n + '" has been already specified.')
                }, K.registerAnalyticsAdapter = function(e) {
                    var n = e.adapter,
                        t = e.code,
                        i = e.gvlid;
                    n && t ? "function" == typeof n.enableAnalytics ? (n.code = t, G[t] = {
                        adapter: n,
                        gvlid: i
                    }) : (0, r.logError)('Prebid Error: Analytics adaptor error for analytics "'.concat(t, '"\n        analytics adapter must implement an enableAnalytics() function')) : (0, r.logError)("Prebid Error: analyticsAdapter or analyticsCode not specified")
                }, K.enableAnalytics = function(e) {
                    (0, r.isArray)(e) || (e = [e]), (0, r._each)(e, (function(e) {
                        var n = G[e.provider];
                        n && n.adapter ? n.adapter.enableAnalytics(e) : (0, r.logError)("Prebid Error: no analytics adapter found in registry for '".concat(e.provider, "'."))
                    }))
                }, K.getBidAdapter = function(e) {
                    return L[e]
                }, K.getAnalyticsAdapter = function(e) {
                    return G[e]
                }, K.callTimedOutBidders = function(e, n, t) {
                    n = n.map((function(n) {
                        return n.params = (0, r.getUserConfiguredParams)(e, n.adUnitCode, n.bidder), n.timeout = t, n
                    })), n = (0, r.groupBy)(n, "bidder"), Object.keys(n).forEach((function(e) {
                        te(e, "onTimeout", n[e])
                    }))
                }, K.callBidWonBidder = function(e, n, t) {
                    n.params = (0, r.getUserConfiguredParams)(t, n.adUnitCode, n.bidder), l.f.incrementBidderWinsCounter(n.adUnitCode, n.bidder), te(e, "onBidWon", n)
                }, K.callSetTargetingBidder = function(e, n) {
                    te(e, "onSetTargeting", n)
                }, K.callBidViewableBidder = function(e, n) {
                    te(e, "onBidViewable", n)
                }, K.callBidderError = function(e, n, t) {
                    te(e, "onBidderError", {
                        error: n,
                        bidderRequest: t
                    })
                };
                var re = K
            },
            1609: function(e, n, t) {
                "use strict";
                t.d(n, {
                    JY: function() {
                        return _
                    },
                    Ks: function() {
                        return j
                    },
                    PZ: function() {
                        return U
                    },
                    Q1: function() {
                        return k
                    },
                    dX: function() {
                        return O
                    },
                    uA: function() {
                        return B
                    }
                });
                var r = t(2801),
                    i = t(7602),
                    o = t(8962),
                    a = t(1477),
                    u = t(7112),
                    c = t(9017),
                    s = t(1929),
                    d = t(5644),
                    f = t(2319),
                    l = t(1879),
                    g = t(5755),
                    p = t(9853),
                    v = t(265),
                    y = t(8265),
                    b = t(3494),
                    h = t(5849),
                    m = t(4766),
                    E = t(9624);

                function C(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, i, o = [],
                                a = !0,
                                u = !1;
                            try {
                                for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                            } catch (e) {
                                u = !0, i = e
                            } finally {
                                try {
                                    a || null == t.return || t.return()
                                } finally {
                                    if (u) throw i
                                }
                            }
                            return o
                        }
                    }(e, n) || function(e, n) {
                        if (e) {
                            if ("string" == typeof e) return w(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? w(e, n) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function w(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function S(e) {
                    return S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, S(e)
                }

                function A() {
                    return A = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, A.apply(this, arguments)
                }
                var I = (0, h.eA)("bidderFactory"),
                    T = ["cpm", "ttl", "creativeId", "netRevenue", "currency"];

                function O(e) {
                    var n = Array.isArray(e.supportedMediaTypes) ? {
                        supportedMediaTypes: e.supportedMediaTypes
                    } : void 0;

                    function t(e) {
                        var t = U(e);
                        i.ZP.registerBidAdapter(t, e.code, n)
                    }
                    t(e), Array.isArray(e.aliases) && e.aliases.forEach((function(n) {
                        var r, o, a = n;
                        (0, p.isPlainObject)(n) && (a = n.code, r = n.gvlid, o = n.skipPbsAliasing), i.ZP.aliasRegistry[a] = e.code, t(A({}, e, {
                            code: a,
                            gvlid: r,
                            skipPbsAliasing: o
                        }))
                    }))
                }

                function U(e) {
                    return A(new r.Z(e.code), {
                        getSpec: function() {
                            return Object.freeze(e)
                        },
                        registerSyncs: n,
                        callBids: function(r, u, c, s, l, g) {
                            if (Array.isArray(r.bids)) {
                                var v = {},
                                    y = [],
                                    b = r.bids.filter(t);
                                if (0 !== b.length) {
                                    var h = {};
                                    b.forEach((function(e) {
                                        h[e.bidId] = e, e.adUnitCode || (e.adUnitCode = e.placementCode)
                                    })), B(e, b, r, s, g, {
                                        onRequest: function(e) {
                                            return f.j8(d.FP.BEFORE_BIDDER_HTTP, r, e)
                                        },
                                        onResponse: function(n) {
                                            l(e.code), y.push(n)
                                        },
                                        onError: function(n, t) {
                                            l(e.code), i.ZP.callBidderError(e.code, t, r), f.j8(d.FP.BIDDER_ERROR, {
                                                error: t,
                                                bidderRequest: r
                                            }), (0, p.logError)("Server call for ".concat(e.code, " failed: ").concat(n, " ").concat(t.status, ". Continuing without bids."))
                                        },
                                        onBid: function(n) {
                                            var t, r, i, o, c = h[n.requestId];
                                            if (c) {
                                                if (n.adapterCode = c.bidder, t = n.bidderCode, r = c.bidder, i = E.S.get(r, "allowAlternateBidderCodes"), o = E.S.get(r, "allowedAlternateBidderCodes"), t && r && r !== t && (void 0 !== i && !i || (0, p.isArray)(o) && "*" !== o[0] && !o.includes(t))) return void(0, p.logWarn)("".concat(n.bidderCode, " is not a registered partner or known bidder of ").concat(c.bidder, ", hence continuing without bid. If you wish to support this bidder, please mark allowAlternateBidderCodes as true in bidderSettings."));
                                                n.originalCpm = n.cpm, n.originalCurrency = n.currency, n.meta = n.meta || A({}, n[c.bidder]);
                                                var s = A((0, a.m)(d.Q_.GOOD, c), n);
                                                ! function(e, n) {
                                                    v[e] = !0, _(e, n) && u(e, n)
                                                }(c.adUnitCode, s)
                                            } else(0, p.logWarn)("Bidder ".concat(e.code, " made bid for unknown request ID: ").concat(n.requestId, ". Ignoring."))
                                        },
                                        onCompletion: m
                                    })
                                } else m()
                            }

                            function m() {
                                c(), o.vc.runWithBidder(e.code, (function() {
                                    f.j8(d.FP.BIDDER_DONE, r), n(y, r.gdprConsent, r.uspConsent)
                                }))
                            }
                        }
                    });

                    function n(n, t, r) {
                        j(e, n, t, r)
                    }

                    function t(n) {
                        return !!e.isBidRequestValid(n) || ((0, p.logWarn)("Invalid bid sent to bidder ".concat(e.code, ": ").concat(JSON.stringify(n))), !1)
                    }
                }
                var B = (0, b.z3)("sync", (function(e, n, t, r, i, o) {
                        var a = o.onRequest,
                            u = o.onResponse,
                            c = o.onError,
                            s = o.onBid,
                            d = o.onCompletion,
                            f = e.buildRequests(n, t);
                        if (f && 0 !== f.length) {
                            Array.isArray(f) || (f = [f]);
                            var l = (0, p.delayExecution)(d, f.length);
                            f.forEach((function(n) {
                                var t, o = i((function(t, r) {
                                        try {
                                            t = JSON.parse(t)
                                        } catch (e) {}
                                        var i;
                                        t = {
                                            body: t,
                                            headers: {
                                                get: r.getResponseHeader.bind(r)
                                            }
                                        }, u(t);
                                        try {
                                            i = e.interpretResponse(t, n)
                                        } catch (n) {
                                            return (0, p.logError)("Bidder ".concat(e.code, " failed to interpret the server's response. Continuing without bids"), null, n), void l()
                                        }
                                        i && ((0, p.isArray)(i) ? i.forEach(s) : s(i)), l()
                                    })),
                                    d = i((function(e, n) {
                                        c(e, n), l()
                                    }));
                                switch (a(n), n.method) {
                                    case "GET":
                                        r("".concat(n.url).concat((t = n.data) ? "?".concat("object" === S(t) ? (0, p.parseQueryStringParameters)(t) : t) : ""), {
                                            success: o,
                                            error: d
                                        }, void 0, A({
                                            method: "GET",
                                            withCredentials: !0
                                        }, n.options));
                                        break;
                                    case "POST":
                                        r(n.url, {
                                            success: o,
                                            error: d
                                        }, "string" == typeof n.data ? n.data : JSON.stringify(n.data), A({
                                            method: "POST",
                                            contentType: "text/plain",
                                            withCredentials: !0
                                        }, n.options));
                                        break;
                                    default:
                                        (0, p.logWarn)("Skipping invalid request from ".concat(e.code, ". Request type ").concat(n.type, " must be GET or POST")), l()
                                }
                            }))
                        } else d()
                    }), "processBidderRequests"),
                    j = (0, b.z3)("async", (function(e, n, t, r) {
                        var a = o.vc.getConfig("userSync.aliasSyncEnabled");
                        if (e.getUserSyncs && (a || !i.ZP.aliasRegistry[e.code])) {
                            var c = o.vc.getConfig("userSync.filterSettings"),
                                s = e.getUserSyncs({
                                    iframeEnabled: !(!c || !c.iframe && !c.all),
                                    pixelEnabled: !(!c || !c.image && !c.all)
                                }, n, t, r);
                            s && (Array.isArray(s) || (s = [s]), s.forEach((function(n) {
                                u.k_.registerSync(n.type, e.code, n.url)
                            })))
                        }
                    }), "registerSyncs");

                function k(e, n) {
                    var t = i.ZP.getBidAdapter(e);
                    if (t.getSpec().getMappingFileInfo) {
                        var r = t.getSpec().getMappingFileInfo(),
                            o = r.localStorageKey ? r.localStorageKey : t.getBidderCode(),
                            a = I.getDataFromLocalStorage(o);
                        if (a) {
                            try {
                                a = JSON.parse(a)
                            } catch (n) {
                                (0, p.logError)("Failed to parse ".concat(e, " mapping data stored in local storage"))
                            }
                            return a.mapping[n] ? a.mapping[n] : null
                        }
                    }
                }

                function P(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.index,
                        i = void 0 === r ? m.K.index : r;
                    if ((n.width || 0 === parseInt(n.width, 10)) && (n.height || 0 === parseInt(n.height, 10))) return n.width = parseInt(n.width, 10), n.height = parseInt(n.height, 10), !0;
                    var o = i.getBidRequest(n),
                        a = i.getMediaTypes(n),
                        u = o && o.sizes || a && a.banner && a.banner.sizes,
                        c = (0, p.parseSizesInput)(u);
                    if (1 === c.length) {
                        var s = c[0].split("x"),
                            d = C(s, 2),
                            f = d[0],
                            l = d[1];
                        return n.width = parseInt(f, 10), n.height = parseInt(l, 10), !0
                    }
                    return !1
                }

                function _(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.index,
                        i = void 0 === r ? m.K.index : r;

                    function o() {
                        var e = Object.keys(n);
                        return T.every((function(t) {
                            return (0, l.q9)(e, t) && !(0, l.q9)([void 0, null], n[t])
                        }))
                    }

                    function a(e) {
                        return "Invalid bid from ".concat(n.bidderCode, ". Ignoring bid: ").concat(e)
                    }
                    return e ? n ? o() ? "native" !== n.mediaType || (0, c.r4)(n, {
                        index: i
                    }) ? "video" !== n.mediaType || (0, s.Dn)(n, {
                        index: i
                    }) ? !("banner" === n.mediaType && !P(e, n, {
                        index: i
                    }) && ((0, p.logError)(a("Banner bids require a width and height")), 1)) : ((0, p.logError)(a("Video bid does not have required vastUrl or renderer property")), !1) : ((0, p.logError)(a("Native bid missing some required properties.")), !1) : ((0, p.logError)(a("Bidder ".concat(n.bidderCode, " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params."))), !1) : ((0, p.logWarn)("Some adapter tried to add an undefined bid for ".concat(e, ".")), !1) : ((0, p.logWarn)("No adUnitCode was supplied to addBidResponse."), !1)
                }(0, b.v5)("checkAdUnitSetup").before((function(e, n) {
                    if (!o.vc.getConfig("adpod.brandCategoryExclusion")) return e.call(this, n);
                    n.filter((function(e) {
                        return (0, v.Z)(e, "mediaTypes.video.context") === y.Oh
                    })).map((function(e) {
                        return e.bids.map((function(e) {
                            return e.bidder
                        }))
                    })).reduce(p.flatten, []).filter(p.uniques).forEach((function(e) {
                        var n = i.ZP.getBidAdapter(e);
                        if (n.getSpec().getMappingFileInfo) {
                            var t = n.getSpec().getMappingFileInfo(),
                                r = t.refreshInDays ? t.refreshInDays : 1,
                                o = t.localStorageKey ? t.localStorageKey : n.getSpec().code,
                                a = I.getDataFromLocalStorage(o);
                            try {
                                (!(a = a ? JSON.parse(a) : void 0) || (0, p.timestamp)() > a.lastUpdated + 24 * r * 60 * 60 * 1e3) && (0, g.h)(t.url, {
                                    success: function(n) {
                                        try {
                                            n = JSON.parse(n);
                                            var t = {
                                                lastUpdated: (0, p.timestamp)(),
                                                mapping: n.mapping
                                            };
                                            I.setDataInLocalStorage(o, JSON.stringify(t))
                                        } catch (n) {
                                            (0, p.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                                        }
                                    },
                                    error: function() {
                                        (0, p.logError)("Failed to load ".concat(e, " bidder translation file"))
                                    }
                                })
                            } catch (n) {
                                (0, p.logError)("Failed to parse ".concat(e, " bidder translation mapping file"))
                            }
                        }
                    })), e.call(this, n)
                }))
            },
            6996: function(e, n, t) {
                "use strict";
                t.d(n, {
                    B: function() {
                        return u
                    }
                });
                var r = t(1879),
                    i = t(9853),
                    o = new WeakMap,
                    a = ["adloox", "criteo", "outstream", "adagio", "browsi", "brandmetrics", "justtag", "akamaidap"];

                function u(e, n, t, u) {
                    if (n && e) {
                        if ((0, r.q9)(a, n)) {
                            u || (u = document);
                            var c = f(u, e);
                            if (c) return t && "function" == typeof t && (c.loaded ? t() : c.callbacks.push(t)), c.tag;
                            var s = o.get(u) || {},
                                d = {
                                    loaded: !1,
                                    tag: null,
                                    callbacks: []
                                };
                            return s[e] = d, o.set(u, s), t && "function" == typeof t && d.callbacks.push(t), (0, i.logWarn)("module ".concat(n, " is loading external JavaScript")),
                                function(n, t, r) {
                                    r || (r = document);
                                    var o = r.createElement("script");
                                    o.type = "text/javascript", o.async = !0;
                                    var a = f(r, e);
                                    return a && (a.tag = o), o.readyState ? o.onreadystatechange = function() {
                                        "loaded" !== o.readyState && "complete" !== o.readyState || (o.onreadystatechange = null, t())
                                    } : o.onload = function() {
                                        t()
                                    }, o.src = n, (0, i.insertElement)(o, r), o
                                }(e, (function() {
                                    d.loaded = !0;
                                    try {
                                        for (var e = 0; e < d.callbacks.length; e++) d.callbacks[e]()
                                    } catch (e) {
                                        (0, i.logError)("Error executing callback", "adloader.js:loadExternalScript", e)
                                    }
                                }), u)
                        }(0, i.logError)("".concat(n, " not whitelisted for loading external JavaScript"))
                    } else(0, i.logError)("cannot load external script without url and moduleCode");

                    function f(e, n) {
                        var t = o.get(e);
                        return t && t[n] ? t[n] : null
                    }
                }
            },
            5755: function(e, n, t) {
                "use strict";
                t.d(n, {
                    O: function() {
                        return c
                    },
                    h: function() {
                        return u
                    }
                });
                var r = t(8962),
                    i = t(9853);

                function o() {
                    return o = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, o.apply(this, arguments)
                }

                function a(e) {
                    return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, a(e)
                }
                var u = c();

                function c() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.request,
                        u = n.done;
                    return function(n, c, s) {
                        var d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            var f, l = d.method || (s ? "POST" : "GET"),
                                g = document.createElement("a");
                            g.href = n;
                            var p = "object" === a(c) && null !== c ? c : {
                                success: function() {
                                    (0, i.logMessage)("xhr success")
                                },
                                error: function(e) {
                                    (0, i.logError)("xhr error", null, e)
                                }
                            };
                            if ("function" == typeof c && (p.success = c), (f = new window.XMLHttpRequest).onreadystatechange = function() {
                                    if (4 === f.readyState) {
                                        "function" == typeof u && u(g.origin);
                                        var e = f.status;
                                        e >= 200 && e < 300 || 304 === e ? p.success(f.responseText, f) : p.error(f.statusText, f)
                                    }
                                }, r.vc.getConfig("disableAjaxTimeout") || (f.ontimeout = function() {
                                    (0, i.logError)("  xhr timeout after ", f.timeout, "ms")
                                }), "GET" === l && s) {
                                var v = (0, i.parseUrl)(n, d);
                                o(v.search, s), n = (0, i.buildUrl)(v)
                            }
                            f.open(l, n, !0), r.vc.getConfig("disableAjaxTimeout") || (f.timeout = e), d.withCredentials && (f.withCredentials = !0), (0, i._each)(d.customHeaders, (function(e, n) {
                                f.setRequestHeader(n, e)
                            })), d.preflight && f.setRequestHeader("X-Requested-With", "XMLHttpRequest"), f.setRequestHeader("Content-Type", d.contentType || "text/plain"), "function" == typeof t && t(g.origin), "POST" === l && s ? f.send(s) : f.send()
                        } catch (e) {
                            (0, i.logError)("xhr construction", e), "object" === a(c) && null !== c && c.error(e)
                        }
                    }
                }
            },
            4892: function(e, n, t) {
                "use strict";
                t.d(n, {
                    D$: function() {
                        return D
                    },
                    LX: function() {
                        return W
                    },
                    RH: function() {
                        return N
                    },
                    Yt: function() {
                        return B
                    },
                    Yw: function() {
                        return S
                    },
                    dg: function() {
                        return M
                    },
                    e0: function() {
                        return j
                    },
                    lU: function() {
                        return _
                    },
                    mv: function() {
                        return A
                    },
                    sq: function() {
                        return P
                    },
                    vO: function() {
                        return U
                    }
                });
                var r = t(9853),
                    i = t(265),
                    o = t(5553),
                    a = t(9017),
                    u = t(905),
                    c = t(4877),
                    s = t(8962),
                    d = t(7112),
                    f = t(3494),
                    l = t(1879),
                    g = t(1929),
                    p = t(8265),
                    v = t(4766),
                    y = t(9624),
                    b = t(2319),
                    h = t(7602),
                    m = t(5644);

                function E(e) {
                    return E = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, E(e)
                }

                function C() {
                    return C = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, C.apply(this, arguments)
                }
                var w = d.k_.syncUsers,
                    S = "inProgress",
                    A = "completed";
                b.on(m.FP.BID_ADJUSTMENT, (function(e) {
                    ! function(e) {
                        var n = e.bidderCode,
                            t = e.cpm,
                            i = y.S.get(n || null, "bidCpmAdjustment");
                        if (i && "function" == typeof i) try {
                            t = i(e.cpm, C({}, e))
                        } catch (e) {
                            (0, r.logError)("Error during bid adjustment", "bidmanager.js", e)
                        }
                        t >= 0 && (e.cpm = t)
                    }(e)
                }));
                var I = {},
                    T = {},
                    O = [];

                function U(e) {
                    var n, t, i, o, a = e.adUnits,
                        u = e.adUnitCodes,
                        c = e.callback,
                        d = e.cbTimeout,
                        f = e.labels,
                        g = e.auctionId,
                        p = a,
                        y = f,
                        E = u,
                        C = [],
                        U = [],
                        P = [],
                        D = g || (0, r.generateUUID)(),
                        q = c,
                        N = d,
                        M = [],
                        F = new Set;

                    function W() {
                        return {
                            auctionId: D,
                            timestamp: n,
                            auctionEnd: t,
                            auctionStatus: i,
                            adUnits: p,
                            adUnitCodes: E,
                            labels: y,
                            bidderRequests: C,
                            noBids: P,
                            bidsReceived: U,
                            winningBids: M,
                            timeout: N
                        }
                    }

                    function z(e, n) {
                        if (n && clearTimeout(o), void 0 === t) {
                            var u = [];
                            e && ((0, r.logMessage)("Auction ".concat(D, " timedOut")), c = F, (u = C.map((function(e) {
                                return (e.bids || []).filter((function(e) {
                                    return !c.has(e.bidder)
                                }))
                            })).reduce(r.flatten, [])).length && b.j8(m.FP.BID_TIMEOUT, u)), i = A, t = Date.now(), b.j8(m.FP.AUCTION_END, W()), k(p, (function() {
                                try {
                                    if (null != q) {
                                        var n = E,
                                            t = U.filter(r.bind.call(r.adUnitsFilter, this, n)).reduce(K, {});
                                        q.apply(fusePbjs, [t, e, D]), q = null
                                    }
                                } catch (e) {
                                    (0, r.logError)("Error executing bidsBackHandler", null, e)
                                } finally {
                                    u.length && h.ZP.callTimedOutBidders(a, u, N);
                                    var i = s.vc.getConfig("userSync") || {};
                                    i.enableOverride || w(i.syncDelay)
                                }
                            }))
                        }
                        var c
                    }

                    function L() {
                        s.vc.resetBidder(), (0, r.logInfo)("Bids Received for Auction with id: ".concat(D), U), i = A, z(!1, !0)
                    }

                    function Z(e) {
                        F.add(e)
                    }

                    function H(e) {
                        var n = this;
                        e.forEach((function(e) {
                            var n;
                            n = e, C = C.concat(n)
                        }));
                        var t = {},
                            a = {
                                bidRequests: e,
                                run: function() {
                                    var a, d;
                                    a = z.bind(null, !0), d = setTimeout(a, N), o = d, i = S, b.j8(m.FP.AUCTION_INIT, W());
                                    var f = function(e, n) {
                                        var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                                            i = void 0 === t ? v.K.index : t,
                                            o = 0,
                                            a = !1,
                                            u = new Set,
                                            c = {},
                                            d = {};

                                        function f(e, n) {
                                            null == d[e] && (d[e] = Promise.resolve()), d[e] = d[e].then((function() {
                                                return Promise.resolve(n).catch((function() {}))
                                            }))
                                        }

                                        function g(e, t) {
                                            var r = e.timeout;
                                            (null == r || r > n.getTimeout()) && (r = n.getTimeout());
                                            var i = n.getAuctionStart() + r - Date.now(),
                                                o = d[e.bidderRequestId],
                                                a = d[""];
                                            (null != o || null != a) && i > 0 ? Promise.race([new Promise((function(e) {
                                                return setTimeout(e, i)
                                            })), Promise.resolve(a).then((function() {
                                                return o
                                            }))]).then(t) : t()
                                        }

                                        function p() {
                                            o--, a && 0 === o && e()
                                        }

                                        function y(e, t) {
                                            c[t.requestId] = !0, o++;
                                            var r = x({
                                                adUnitCode: e,
                                                bid: t,
                                                auctionId: n.getAuctionId()
                                            });
                                            "video" === r.mediaType ? R(n, r, p) : (_(n, r), p())
                                        }

                                        function h() {
                                            var t = n.getBidRequests(),
                                                i = s.vc.getConfig("auctionOptions");
                                            if (u.add(this), i && !(0, r.isEmpty)(i)) {
                                                var d = i.secondaryBidders;
                                                d && !t.every((function(e) {
                                                    return (0, l.q9)(d, e.bidderCode)
                                                })) && (t = t.filter((function(e) {
                                                    return !(0, l.q9)(d, e.bidderCode)
                                                })))
                                            }
                                            a = t.every((function(e) {
                                                return u.has(e)
                                            })), this.bids.forEach((function(e) {
                                                c[e.bidId] || (n.addNoBid(e), b.j8(m.FP.NO_BID, e))
                                            })), a && 0 === o && e()
                                        }
                                        return {
                                            addBidResponse: function(e, n) {
                                                var t = i.getBidderRequest(n);
                                                f(t && t.bidderRequestId || "", B.call({
                                                    dispatch: y
                                                }, e, n))
                                            },
                                            adapterDone: function() {
                                                g(this, h.bind(this))
                                            }
                                        }
                                    }(L, n);
                                    h.ZP.callBids(p, e, f.addBidResponse, f.adapterDone, {
                                        request: function(e, n) {
                                            c(I, n), c(t, e), T[e] || (T[e] = {
                                                SRA: !0,
                                                origin: n
                                            }), t[e] > 1 && (T[e].SRA = !1)
                                        },
                                        done: function(e) {
                                            I[e]--, O[0] && u(O[0]) && O.shift()
                                        }
                                    }, N, Z)
                                }
                            };

                        function u(e) {
                            var n = !0,
                                t = s.vc.getConfig("maxRequestsPerOrigin") || 4;
                            return e.bidRequests.some((function(e) {
                                var r = 1,
                                    i = void 0 !== e.src && e.src === m.os.YZ ? "s2s" : e.bidderCode;
                                return T[i] && (!1 === T[i].SRA && (r = Math.min(e.bids.length, t)), I[T[i].origin] + r > t && (n = !1)), !n
                            })), n && e.run(), n
                        }

                        function c(e, n) {
                            void 0 === e[n] ? e[n] = 1 : e[n]++
                        }
                        u(a) || ((0, r.logWarn)("queueing auction due to limited endpoint capacity"), O.push(a))
                    }
                    return {
                        addBidReceived: function(e) {
                            U = U.concat(e)
                        },
                        addNoBid: function(e) {
                            P = P.concat(e)
                        },
                        executeCallback: z,
                        callBids: function() {
                            i = "started", n = Date.now();
                            var e = h.ZP.makeBidRequests(p, n, D, N, y);
                            (0, r.logInfo)("Bids Requested for Auction with id: ".concat(D), e), e.length < 1 ? ((0, r.logWarn)("No valid bid requests returned for auction"), L()) : j.call({
                                dispatch: H,
                                context: this
                            }, e)
                        },
                        addWinningBid: function(e) {
                            M = M.concat(e), h.ZP.callBidWonBidder(e.bidder, e, a)
                        },
                        setBidTargeting: function(e) {
                            h.ZP.callSetTargetingBidder(e.bidder, e)
                        },
                        getWinningBids: function() {
                            return M
                        },
                        getAuctionStart: function() {
                            return n
                        },
                        getTimeout: function() {
                            return N
                        },
                        getAuctionId: function() {
                            return D
                        },
                        getAuctionStatus: function() {
                            return i
                        },
                        getAdUnits: function() {
                            return p
                        },
                        getAdUnitCodes: function() {
                            return E
                        },
                        getBidRequests: function() {
                            return C
                        },
                        getBidsReceived: function() {
                            return U
                        },
                        getNoBids: function() {
                            return P
                        }
                    }
                }
                var B = (0, f.z3)("sync", (function(e, n) {
                        this.dispatch.call(null, e, n)
                    }), "addBidResponse"),
                    j = (0, f.z3)("sync", (function(e) {
                        this.dispatch.call(this.context, e)
                    }), "addBidderRequests"),
                    k = (0, f.z3)("async", (function(e, n) {
                        n && n()
                    }), "bidsBackCallback");

                function P(e, n) {
                    n.timeToRespond > e.getTimeout() + s.vc.getConfig("timeoutBuffer") && e.executeCallback(!0)
                }

                function _(e, n) {
                    var t, r, i;
                    t = n, i = !0 === y.S.get(t.bidderCode, "allowZeroCpmBids") ? t.cpm >= 0 : t.cpm > 0, t.bidderCode && (i || t.dealId) && (r = function(e, n) {
                        var t = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).index,
                            r = void 0 === t ? v.K.index : t;
                        if (!n) return {};
                        var i = r.getBidRequest(n),
                            o = {},
                            u = W(n.mediaType, e);
                        return z(o, u, n, i), e && y.S.getOwn(e, m.k2.xn) && (z(o, y.S.ownSettingsFor(e), n, i), n.sendStandardTargeting = y.S.get(e, "sendStandardTargeting")), n.native && (o = C({}, o, (0, a.Ur)(n))), o
                    }(t.bidderCode, t)), t.adserverTargeting = C(t.adserverTargeting || {}, r), b.j8(m.FP.BID_RESPONSE, n), e.addBidReceived(n), P(e, n)
                }

                function R(e, n, t) {
                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        a = o.index,
                        u = void 0 === a ? v.K.index : a,
                        c = !0,
                        d = (0, i.Z)(u.getMediaTypes({
                            requestId: n.originalRequestId || n.requestId,
                            transactionId: n.transactionId
                        }), "video"),
                        f = d && (0, i.Z)(d, "context");
                    s.vc.getConfig("cache.url") && f !== g.gZ && (!n.videoCacheKey || s.vc.getConfig("cache.ignoreBidderCacheKey") ? (c = !1, D(e, n, t, d)) : n.vastUrl || ((0, r.logError)("videoCacheKey specified but not required vastUrl for video bid"), c = !1)), c && (_(e, n), t())
                }
                var D = (0, f.z3)("async", (function(e, n, t, i) {
                    (0, u.h)([n], (function(i, o) {
                        i ? ((0, r.logWarn)("Failed to save to the video cache: ".concat(i, ". Video bid must be discarded.")), P(e, n)) : "" === o[0].uuid ? ((0, r.logWarn)("Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded."), P(e, n)) : (n.videoCacheKey = o[0].uuid, n.vastUrl || (n.vastUrl = (0, u.z)(n.videoCacheKey)), _(e, n), t())
                    }))
                }), "callPrebidCache");

                function x(e) {
                    var n = e.adUnitCode,
                        t = e.bid,
                        i = e.auctionId,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        u = a.index,
                        d = void 0 === u ? v.K.index : u,
                        f = d.getBidderRequest(t),
                        l = f && f.start || t.requestTimestamp,
                        g = C({}, t, {
                            auctionId: i,
                            responseTimestamp: (0, r.timestamp)(),
                            requestTimestamp: l,
                            cpm: parseFloat(t.cpm) || 0,
                            bidder: t.bidderCode,
                            adUnitCode: n
                        });
                    g.timeToRespond = g.responseTimestamp - g.requestTimestamp, b.j8(m.FP.BID_ADJUSTMENT, g);
                    var p = d.getAdUnit(g).renderer,
                        y = g.mediaType,
                        h = d.getMediaTypes(g),
                        w = h && h[y],
                        S = w && w.renderer,
                        A = null;
                    S && S.url && S.render && (!0 !== S.backupOnly || !t.renderer) ? A = S : p && p.url && p.render && (!0 !== p.backupOnly || !t.renderer) && (A = p), A && (g.renderer = c.Th.install({
                        url: A.url,
                        config: A.options
                    }), g.renderer.setRender(A.render));
                    var I = q(t.mediaType, h, s.vc.getConfig("mediaTypePriceGranularity")),
                        T = (0, o.D)(g.cpm, "object" === E(I) ? I : s.vc.getConfig("customPriceBucket"), s.vc.getConfig("currency.granularityMultiplier"));
                    return g.pbLg = T.low, g.pbMg = T.med, g.pbHg = T.high, g.pbAg = T.auto, g.pbDg = T.dense, g.pbCg = T.custom, g
                }

                function q(e, n, t) {
                    if (e && t) {
                        if (e === p.pX) {
                            var r = (0, i.Z)(n, "".concat(p.pX, ".context"), "instream");
                            if (t["".concat(p.pX, "-").concat(r)]) return t["".concat(p.pX, "-").concat(r)]
                        }
                        return t[e]
                    }
                }
                var N = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            t = n.index,
                            r = void 0 === t ? v.K.index : t,
                            i = q(e.mediaType, r.getMediaTypes(e), s.vc.getConfig("mediaTypePriceGranularity")),
                            o = "string" == typeof e.mediaType && i ? "string" == typeof i ? i : "custom" : s.vc.getConfig("priceGranularity");
                        return o
                    },
                    M = function(e) {
                        return function(n) {
                            var t = e || N(n);
                            return t === m.Ql.B7 ? n.pbAg : t === m.Ql.uN ? n.pbDg : t === m.Ql.yE ? n.pbLg : t === m.Ql.M2 ? n.pbMg : t === m.Ql.lj ? n.pbHg : t === m.Ql.qN ? n.pbCg : void 0
                        }
                    };

                function F(e, n) {
                    return {
                        key: e,
                        val: "function" == typeof n ? function(e, t) {
                            return n(e, t)
                        } : function(e) {
                            return (0, r.getValue)(e, n)
                        }
                    }
                }

                function W(e, n) {
                    var t = m.TD,
                        o = C({}, y.S.settingsFor(null));
                    if (o[m.k2.xn] || (o[m.k2.xn] = function() {
                            var e = m.TD;
                            return [F(e.BIDDER, "bidderCode"), F(e.AD_ID, "adId"), F(e.PRICE_BUCKET, M()), F(e.SIZE, "size"), F(e.DEAL, "dealId"), F(e.SOURCE, "source"), F(e.FORMAT, "mediaType"), F(e.ADOMAIN, (function(e) {
                                return e.meta && e.meta.advertiserDomains && e.meta.advertiserDomains.length > 0 ? e.meta.advertiserDomains[0] : ""
                            }))]
                        }()), "video" === e) {
                        var a = o[m.k2.xn].slice();
                        if (o[m.k2.xn] = a, [t.UUID, t.CACHE_ID].forEach((function(e) {
                                void 0 === (0, l.sE)(a, (function(n) {
                                    return n.key === e
                                })) && a.push(F(e, "videoCacheKey"))
                            })), s.vc.getConfig("cache.url") && (!n || !1 !== y.S.get(n, "sendStandardTargeting"))) {
                            var u = (0, r.parseUrl)(s.vc.getConfig("cache.url"));
                            void 0 === (0, l.sE)(a, (function(e) {
                                return e.key === t.CACHE_HOST
                            })) && a.push(F(t.CACHE_HOST, (function(e) {
                                return (0, i.Z)(e, "adserverTargeting.".concat(t.CACHE_HOST)) ? e.adserverTargeting[t.CACHE_HOST] : u.hostname
                            })))
                        }
                    }
                    return o
                }

                function z(e, n, t, i) {
                    var o = n[m.k2.xn];
                    return t.size = t.getSize(), (0, r._each)(o, (function(o) {
                        var a = o.key,
                            u = o.val;
                        if (e[a] && (0, r.logWarn)("The key: " + a + " is being overwritten"), (0, r.isFn)(u)) try {
                            u = u(t, i)
                        } catch (e) {
                            (0, r.logError)("bidmanager", "ERROR", e)
                        }(void 0 === n.suppressEmptyKeys || !0 !== n.suppressEmptyKeys) && a !== m.TD.DEAL || !(0, r.isEmptyStr)(u) && null != u ? e[a] = u : (0, r.logInfo)("suppressing empty key '" + a + "' from adserver targeting")
                    })), e
                }

                function K(e, n) {
                    return e[n.adUnitCode] || (e[n.adUnitCode] = {
                        bids: []
                    }), e[n.adUnitCode].bids.push(n), e
                }
            },
            4766: function(e, n, t) {
                "use strict";
                t.d(n, {
                    K: function() {
                        return s
                    }
                });
                var r = t(9853),
                    i = t(4892),
                    o = t(1879);

                function a() {
                    return a = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, a.apply(this, arguments)
                }

                function u(e) {
                    a(this, {
                        getAuction: function(n) {
                            var t = n.auctionId;
                            if (null != t) return e().find((function(e) {
                                return e.getAuctionId() === t
                            }))
                        },
                        getAdUnit: function(n) {
                            var t = n.transactionId;
                            if (null != t) return e().flatMap((function(e) {
                                return e.getAdUnits()
                            })).find((function(e) {
                                return e.transactionId === t
                            }))
                        },
                        getMediaTypes: function(e) {
                            var n = e.transactionId,
                                t = e.requestId;
                            if (null != t) {
                                var r = this.getBidRequest({
                                    requestId: t
                                });
                                if (null != r && (null == n || r.transactionId === n)) return r.mediaTypes
                            } else if (null != n) {
                                var i = this.getAdUnit({
                                    transactionId: n
                                });
                                if (null != i) return i.mediaTypes
                            }
                        },
                        getBidderRequest: function(n) {
                            var t = n.requestId,
                                r = n.bidderRequestId;
                            if (null != t || null != r) {
                                var i = e().flatMap((function(e) {
                                    return e.getBidRequests()
                                }));
                                return null != r && (i = i.filter((function(e) {
                                    return e.bidderRequestId === r
                                }))), null == t ? i[0] : i.find((function(e) {
                                    return e.bids && null != e.bids.find((function(e) {
                                        return e.bidId === t
                                    }))
                                }))
                            }
                        },
                        getBidRequest: function(n) {
                            var t = n.requestId;
                            if (null != t) return e().flatMap((function(e) {
                                return e.getBidRequests()
                            })).flatMap((function(e) {
                                return e.bids
                            })).find((function(e) {
                                return e && e.bidId === t
                            }))
                        }
                    })
                }
                var c = t(5644),
                    s = function() {
                        var e = [],
                            n = {
                                addWinningBid: function(n) {
                                    var t = (0, o.sE)(e, (function(e) {
                                        return e.getAuctionId() === n.auctionId
                                    }));
                                    t ? (n.status = c.UE.fe, t.addWinningBid(n)) : (0, r.logWarn)("Auction not found when adding winning bid")
                                },
                                getAllWinningBids: function() {
                                    return e.map((function(e) {
                                        return e.getWinningBids()
                                    })).reduce(r.flatten, [])
                                },
                                getBidsRequested: function() {
                                    return e.map((function(e) {
                                        return e.getBidRequests()
                                    })).reduce(r.flatten, [])
                                },
                                getNoBids: function() {
                                    return e.map((function(e) {
                                        return e.getNoBids()
                                    })).reduce(r.flatten, [])
                                },
                                getBidsReceived: function() {
                                    return e.map((function(e) {
                                        if (e.getAuctionStatus() === i.mv) return e.getBidsReceived()
                                    })).reduce(r.flatten, []).filter((function(e) {
                                        return e
                                    }))
                                },
                                getAllBidsForAdUnitCode: function(n) {
                                    return e.map((function(e) {
                                        return e.getBidsReceived()
                                    })).reduce(r.flatten, []).filter((function(e) {
                                        return e && e.adUnitCode === n
                                    }))
                                },
                                getAdUnits: function() {
                                    return e.map((function(e) {
                                        return e.getAdUnits()
                                    })).reduce(r.flatten, [])
                                },
                                getAdUnitCodes: function() {
                                    return e.map((function(e) {
                                        return e.getAdUnitCodes()
                                    })).reduce(r.flatten, []).filter(r.uniques)
                                },
                                createAuction: function(n) {
                                    var t = n.adUnits,
                                        r = n.adUnitCodes,
                                        o = n.callback,
                                        a = n.cbTimeout,
                                        u = n.labels,
                                        c = n.auctionId,
                                        s = (0, i.vO)({
                                            adUnits: t,
                                            adUnitCodes: r,
                                            callback: o,
                                            cbTimeout: a,
                                            labels: u,
                                            auctionId: c
                                        });
                                    return function(n) {
                                        e.push(n)
                                    }(s), s
                                },
                                findBidByAdId: function(n) {
                                    return (0, o.sE)(e.map((function(e) {
                                        return e.getBidsReceived()
                                    })).reduce(r.flatten, []), (function(e) {
                                        return e.adId === n
                                    }))
                                },
                                getStandardBidderAdServerTargeting: function() {
                                    return (0, i.LX)()[c.k2.xn]
                                },
                                setStatusForBids: function(t, r) {
                                    var i = n.findBidByAdId(t);
                                    if (i && (i.status = r), i && r === c.UE.CK) {
                                        var a = (0, o.sE)(e, (function(e) {
                                            return e.getAuctionId() === i.auctionId
                                        }));
                                        a && a.setBidTargeting(i)
                                    }
                                },
                                getLastAuctionId: function() {
                                    return e.length && e[e.length - 1].getAuctionId()
                                },
                                clearAllAuctions: function() {
                                    e.length = 0
                                }
                            };
                        return n.index = new u((function() {
                            return e
                        })), n
                    }()
            },
            9624: function(e, n, t) {
                "use strict";
                t.d(n, {
                    S: function() {
                        return f
                    }
                });
                var r = t(265),
                    i = t(9853),
                    o = t(2528),
                    a = t(5644);

                function u(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function c(e, n, t) {
                    if (!n.has(e)) throw new TypeError("attempted to get private field on non-instance");
                    return t
                }
                var s = new WeakSet;

                function d(e) {
                    return null == e ? this.defaultScope : e
                }
                var f = new(function() {
                    function e(n, t) {
                        var r, i;
                        ! function(e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, e),
                        function(e, n) {
                            if (n.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                        }(r = this, i = s), i.add(r), this.getSettings = n, this.defaultScope = t
                    }
                    var n, t;
                    return n = e, (t = [{
                        key: "get",
                        value: function(e, n) {
                            var t = this.getOwn(e, n);
                            return void 0 === t && (t = this.getOwn(null, n)), t
                        }
                    }, {
                        key: "getOwn",
                        value: function(e, n) {
                            return e = c(this, s, d).call(this, e), (0, r.Z)(this.getSettings(), "".concat(e, ".").concat(n))
                        }
                    }, {
                        key: "getScopes",
                        value: function() {
                            var e = this;
                            return Object.keys(this.getSettings()).filter((function(n) {
                                return n !== e.defaultScope
                            }))
                        }
                    }, {
                        key: "settingsFor",
                        value: function(e) {
                            return (0, i.mergeDeep)({}, this.ownSettingsFor(null), this.ownSettingsFor(e))
                        }
                    }, {
                        key: "ownSettingsFor",
                        value: function(e) {
                            return e = c(this, s, d).call(this, e), this.getSettings()[e] || {}
                        }
                    }]) && u(n.prototype, t), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), e
                }())((function() {
                    return (0, o.R)().bidderSettings || {}
                }), a.k2.zF)
            },
            1477: function(e, n, t) {
                "use strict";
                t.d(n, {
                    m: function() {
                        return o
                    }
                });
                var r = t(9853);

                function i(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.src,
                        i = void 0 === t ? "client" : t,
                        o = n.bidder,
                        a = void 0 === o ? "" : o,
                        u = n.bidId,
                        c = n.transactionId,
                        s = n.auctionId,
                        d = i,
                        f = e || 0;

                    function l() {
                        switch (f) {
                            case 0:
                                return "Pending";
                            case 1:
                                return "Bid available";
                            case 2:
                                return "Bid returned empty or error response";
                            case 3:
                                return "Bid timed out"
                        }
                    }
                    this.bidderCode = a, this.width = 0, this.height = 0, this.statusMessage = l(), this.adId = (0, r.getUniqueIdentifierStr)(), this.requestId = u, this.transactionId = c, this.auctionId = s, this.mediaType = "banner", this.source = d, this.getStatusCode = function() {
                        return f
                    }, this.getSize = function() {
                        return this.width + "x" + this.height
                    }, this.getIdentifiers = function() {
                        return {
                            src: this.source,
                            bidder: this.bidderCode,
                            bidId: this.requestId,
                            transactionId: this.transactionId,
                            auctionId: this.auctionId
                        }
                    }
                }

                function o(e, n) {
                    return new i(e, n)
                }
            },
            8962: function(e, n, t) {
                "use strict";
                t.d(n, {
                    FD: function() {
                        return v
                    },
                    vc: function() {
                        return m
                    }
                });
                var r = t(5553),
                    i = t(1879),
                    o = t(9853),
                    a = t(265),
                    u = t(5644),
                    c = ["fpd"];

                function s(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function d(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function f(e) {
                    return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, f(e)
                }

                function l() {
                    return l = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, l.apply(this, arguments)
                }
                var g = "TRUE" === (0, o.getParameterByName)(u.f).toUpperCase(),
                    p = window.location.origin,
                    v = "random",
                    y = {};
                y[v] = !0, y.fixed = !0;
                var b = v,
                    h = {
                        LOW: "low",
                        MEDIUM: "medium",
                        HIGH: "high",
                        AUTO: "auto",
                        DENSE: "dense",
                        CUSTOM: "custom"
                    },
                    m = function() {
                        var e, n, t, u = [],
                            v = null;

                        function m() {
                            e = {};
                            var a = {
                                _debug: g,
                                get debug() {
                                    return this._debug
                                },
                                set debug(e) {
                                    this._debug = e
                                },
                                _bidderTimeout: 3e3,
                                get bidderTimeout() {
                                    return this._bidderTimeout
                                },
                                set bidderTimeout(e) {
                                    this._bidderTimeout = e
                                },
                                _publisherDomain: p,
                                get publisherDomain() {
                                    return this._publisherDomain
                                },
                                set publisherDomain(e) {
                                    this._publisherDomain = e
                                },
                                _priceGranularity: h.MEDIUM,
                                set priceGranularity(e) {
                                    c(e) && ("string" == typeof e ? this._priceGranularity = u(e) ? e : h.MEDIUM : (0, o.isPlainObject)(e) && (this._customPriceBucket = e, this._priceGranularity = h.CUSTOM, (0, o.logMessage)("Using custom price granularity")))
                                },
                                get priceGranularity() {
                                    return this._priceGranularity
                                },
                                _customPriceBucket: {},
                                get customPriceBucket() {
                                    return this._customPriceBucket
                                },
                                _mediaTypePriceGranularity: {},
                                get mediaTypePriceGranularity() {
                                    return this._mediaTypePriceGranularity
                                },
                                set mediaTypePriceGranularity(e) {
                                    var n = this;
                                    this._mediaTypePriceGranularity = Object.keys(e).reduce((function(t, r) {
                                        return c(e[r]) ? "string" == typeof e ? t[r] = u(e[r]) ? e[r] : n._priceGranularity : (0, o.isPlainObject)(e) && (t[r] = e[r], (0, o.logMessage)("Using custom price granularity for ".concat(r))) : (0, o.logWarn)("Invalid price granularity for media type: ".concat(r)), t
                                    }), {})
                                },
                                _sendAllBids: !0,
                                get enableSendAllBids() {
                                    return this._sendAllBids
                                },
                                set enableSendAllBids(e) {
                                    this._sendAllBids = e
                                },
                                _useBidCache: !1,
                                get useBidCache() {
                                    return this._useBidCache
                                },
                                set useBidCache(e) {
                                    this._useBidCache = e
                                },
                                _deviceAccess: !0,
                                get deviceAccess() {
                                    return this._deviceAccess
                                },
                                set deviceAccess(e) {
                                    this._deviceAccess = e
                                },
                                _bidderSequence: b,
                                get bidderSequence() {
                                    return this._bidderSequence
                                },
                                set bidderSequence(e) {
                                    y[e] ? this._bidderSequence = e : (0, o.logWarn)("Invalid order: ".concat(e, ". Bidder Sequence was not set."))
                                },
                                _timeoutBuffer: 400,
                                get timeoutBuffer() {
                                    return this._timeoutBuffer
                                },
                                set timeoutBuffer(e) {
                                    this._timeoutBuffer = e
                                },
                                _disableAjaxTimeout: !1,
                                get disableAjaxTimeout() {
                                    return this._disableAjaxTimeout
                                },
                                set disableAjaxTimeout(e) {
                                    this._disableAjaxTimeout = e
                                },
                                _maxNestedIframes: 10,
                                get maxNestedIframes() {
                                    return this._maxNestedIframes
                                },
                                set maxNestedIframes(e) {
                                    this._maxNestedIframes = e
                                },
                                _auctionOptions: {},
                                get auctionOptions() {
                                    return this._auctionOptions
                                },
                                set auctionOptions(e) {
                                    (function(e) {
                                        if (!(0, o.isPlainObject)(e)) return (0, o.logWarn)("Auction Options must be an object"), !1;
                                        for (var n = 0, t = Object.keys(e); n < t.length; n++) {
                                            var r = t[n];
                                            if ("secondaryBidders" !== r && "suppressStaleRender" !== r) return (0, o.logWarn)("Auction Options given an incorrect param: ".concat(r)), !1;
                                            if ("secondaryBidders" === r) {
                                                if (!(0, o.isArray)(e[r])) return (0, o.logWarn)("Auction Options ".concat(r, " must be of type Array")), !1;
                                                if (!e[r].every(o.isStr)) return (0, o.logWarn)("Auction Options ".concat(r, " must be only string")), !1
                                            } else if ("suppressStaleRender" === r && !(0, o.isBoolean)(e[r])) return (0, o.logWarn)("Auction Options ".concat(r, " must be of type boolean")), !1
                                        }
                                        return !0
                                    })(e) && (this._auctionOptions = e)
                                }
                            };

                            function u(e) {
                                return (0, i.sE)(Object.keys(h), (function(n) {
                                    return e === h[n]
                                }))
                            }

                            function c(e) {
                                if (!e) return (0, o.logError)("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                                if ("string" == typeof e) u(e) || (0, o.logWarn)("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                                else if ((0, o.isPlainObject)(e) && !(0, r.t)(e)) return (0, o.logError)("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                                return !0
                            }
                            n && I(Object.keys(n).reduce((function(e, t) {
                                return n[t] !== a[t] && (e[t] = a[t] || {}), e
                            }), {})), n = a, t = {}
                        }

                        function E() {
                            if (v && t && (0, o.isPlainObject)(t[v])) {
                                var e = t[v],
                                    r = new Set(Object.keys(n).concat(Object.keys(e)));
                                return (0, i.Oc)(r).reduce((function(t, r) {
                                    return void 0 === e[r] ? t[r] = n[r] : void 0 === n[r] ? t[r] = e[r] : (0, o.isPlainObject)(e[r]) ? t[r] = (0, o.mergeDeep)({}, n[r], e[r]) : t[r] = e[r], t
                                }), {})
                            }
                            return l({}, n)
                        }

                        function C(e) {
                            var n = {};
                            return Object.keys(e).forEach((function(t) {
                                var r = "context" === t ? "site" : t;
                                n[r] = "site" === r || "user" === r ? Object.keys(e[t]).reduce((function(n, r) {
                                    return "data" === r ? (0, o.mergeDeep)(n, {
                                        ext: {
                                            data: e[t][r]
                                        }
                                    }) : (0, o.mergeDeep)(n, d({}, r, e[t][r])), n
                                }), {}) : e[t]
                            })), n
                        }

                        function w(e) {
                            var n = {};
                            return Object.keys(e).filter((function(e) {
                                return "context" === e
                            })).forEach((function(t) {
                                Object.keys(e[t]).forEach((function(r) {
                                    "data" === r ? (0, o.mergeDeep)(n, {
                                        ext: {
                                            data: e[t][r]
                                        }
                                    }) : "object" !== f(e[t][r]) || Array.isArray(e[t][r]) ? (0, o.mergeDeep)(n, {
                                        ext: {
                                            data: d({}, r.toLowerCase(), e[t][r])
                                        }
                                    }) : Object.keys(e[t][r]).forEach((function(i) {
                                        (0, o.mergeDeep)(n, {
                                            ext: {
                                                data: d({}, r.toLowerCase(), d({}, i.toLowerCase(), e[t][r][i]))
                                            }
                                        })
                                    }))
                                }))
                            })), n
                        }

                        function S(t) {
                            if ((0, o.isPlainObject)(t)) {
                                var r = Object.keys(t),
                                    i = {};
                                r.forEach((function(r) {
                                    var a = "fpd" === r ? "ortb2" : r,
                                        u = "fpd" === r ? C(t[r]) : t[r];
                                    (0, o.isPlainObject)(e[a]) && (0, o.isPlainObject)(u) && (u = l({}, e[a], u)), i[a] = n[a] = u
                                })), I(i)
                            } else(0, o.logError)("setConfig options must be an object")
                        }

                        function A(e, n) {
                            var t = n;
                            if ("string" != typeof e && (t = e, e = "*"), "function" == typeof t) {
                                var r = {
                                    topic: e,
                                    callback: t
                                };
                                return u.push(r),
                                    function() {
                                        u.splice(u.indexOf(r), 1)
                                    }
                            }(0, o.logError)("listener must be a function")
                        }

                        function I(e) {
                            var n = Object.keys(e);
                            u.filter((function(e) {
                                return (0, i.q9)(n, e.topic)
                            })).forEach((function(n) {
                                n.callback(d({}, n.topic, e[n.topic]))
                            })), u.filter((function(e) {
                                return "*" === e.topic
                            })).forEach((function(n) {
                                return n.callback(e)
                            }))
                        }

                        function T(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            try {
                                r(e), e.bidders.forEach((function(r) {
                                    t[r] || (t[r] = {}), Object.keys(e.config).forEach((function(i) {
                                        var a = "fpd" === i ? "ortb2" : i,
                                            u = "fpd" === i ? C(e.config[i]) : e.config[i];
                                        if ((0, o.isPlainObject)(u)) {
                                            var c = n ? o.mergeDeep : Object.assign;
                                            t[r][a] = c({}, t[r][a] || {}, u)
                                        } else t[r][a] = u
                                    }))
                                }))
                            } catch (e) {
                                (0, o.logError)(e)
                            }

                            function r(e) {
                                if (!(0, o.isPlainObject)(e)) throw "setBidderConfig bidder options must be an object";
                                if (!Array.isArray(e.bidders) || !e.bidders.length) throw "setBidderConfig bidder options must contain a bidders list with at least 1 bidder";
                                if (!(0, o.isPlainObject)(e.config)) throw "setBidderConfig bidder options must contain a config object"
                            }
                        }

                        function O(e, n) {
                            v = e;
                            try {
                                return n()
                            } finally {
                                U()
                            }
                        }

                        function U() {
                            v = null
                        }
                        return m(), {
                            getCurrentBidder: function() {
                                return v
                            },
                            resetBidder: U,
                            getConfig: function() {
                                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                                    var e = arguments.length <= 0 ? void 0 : arguments[0];
                                    return e ? (0, a.Z)(E(), e) : E()
                                }
                                return A.apply(void 0, arguments)
                            },
                            readConfig: function() {
                                if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                                    var e = arguments.length <= 0 ? void 0 : arguments[0],
                                        n = (0, o.deepClone)(E());
                                    return e ? (0, a.Z)(n, e) : n
                                }
                                return A.apply(void 0, arguments)
                            },
                            setConfig: S,
                            mergeConfig: function(e) {
                                if ((0, o.isPlainObject)(e)) {
                                    var n = Object.keys(e).reduce((function(n, t) {
                                        var r = E()[t] || {};
                                        return n[t] = (0, o.mergeDeep)(r, e[t]), n
                                    }), {});
                                    return S(function(e) {
                                        for (var n = 1; n < arguments.length; n++) {
                                            var t = null != arguments[n] ? arguments[n] : {};
                                            n % 2 ? s(Object(t), !0).forEach((function(n) {
                                                d(e, n, t[n])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
                                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                                            }))
                                        }
                                        return e
                                    }({}, n)), n
                                }(0, o.logError)("mergeConfig input must be an object")
                            },
                            setDefaults: function(t) {
                                (0, o.isPlainObject)(e) ? (l(e, t), l(n, t)) : (0, o.logError)("defaults must be an object")
                            },
                            resetConfig: m,
                            runWithBidder: O,
                            callbackWithBidder: function(e) {
                                return function(n) {
                                    return function() {
                                        if ("function" == typeof n) {
                                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                                            return O(e, o.bind.call.apply(o.bind, [n, this].concat(r)))
                                        }(0, o.logWarn)("config.callbackWithBidder callback is not a function")
                                    }
                                }
                            },
                            setBidderConfig: T,
                            getBidderConfig: function() {
                                return t
                            },
                            mergeBidderConfig: function(e) {
                                return T(e, !0)
                            },
                            convertAdUnitFpd: function(e) {
                                var n = [];
                                return e.forEach((function(e) {
                                    var t;
                                    e.fpd ? (e.ortb2Imp ? (0, o.mergeDeep)(e.ortb2Imp, w(e.fpd)) : e.ortb2Imp = w(e.fpd), n.push(((t = e).fpd, function(e, n) {
                                        if (null == e) return {};
                                        var t, r, i = function(e, n) {
                                            if (null == e) return {};
                                            var t, r, i = {},
                                                o = Object.keys(e);
                                            for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || (i[t] = e[t]);
                                            return i
                                        }(e, n);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < o.length; r++) t = o[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t])
                                        }
                                        return i
                                    }(t, c)))) : n.push(e)
                                })), n
                            },
                            getLegacyFpd: function(e) {
                                if ("object" === f(e)) {
                                    var n = {};
                                    return Object.keys(e).forEach((function(t) {
                                        var r = "site" === t ? "context" : t;
                                        n[r] = "context" === r || "user" === r ? Object.keys(e[t]).filter((function(e) {
                                            return "data" !== e
                                        })).reduce((function(n, r) {
                                            return "ext" === r ? (0, o.mergeDeep)(n, e[t][r]) : (0, o.mergeDeep)(n, d({}, r, e[t][r])), n
                                        }), {}) : e[t]
                                    })), n
                                }
                            },
                            getLegacyImpFpd: function(e) {
                                if ("object" === f(e)) {
                                    var n = {};
                                    return (0, a.Z)(e, "ext.data") && Object.keys(e.ext.data).forEach((function(t) {
                                        "pbadslot" === t ? (0, o.mergeDeep)(n, {
                                            context: {
                                                pbAdSlot: e.ext.data[t]
                                            }
                                        }) : "adserver" === t ? (0, o.mergeDeep)(n, {
                                            context: {
                                                adServer: e.ext.data[t]
                                            }
                                        }) : (0, o.mergeDeep)(n, {
                                            context: {
                                                data: d({}, t, e.ext.data[t])
                                            }
                                        })
                                    })), n
                                }
                            }
                        }
                    }()
            },
            5553: function(e, n, t) {
                "use strict";
                t.d(n, {
                    D: function() {
                        return d
                    },
                    t: function() {
                        return l
                    }
                });
                var r = t(1879),
                    i = t(9853),
                    o = {
                        buckets: [{
                            max: 5,
                            increment: .5
                        }]
                    },
                    a = {
                        buckets: [{
                            max: 20,
                            increment: .1
                        }]
                    },
                    u = {
                        buckets: [{
                            max: 20,
                            increment: .01
                        }]
                    },
                    c = {
                        buckets: [{
                            max: 3,
                            increment: .01
                        }, {
                            max: 8,
                            increment: .05
                        }, {
                            max: 20,
                            increment: .5
                        }]
                    },
                    s = {
                        buckets: [{
                            max: 5,
                            increment: .05
                        }, {
                            max: 10,
                            increment: .1
                        }, {
                            max: 20,
                            increment: .5
                        }]
                    };

                function d(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = parseFloat(e);
                    return isNaN(r) && (r = ""), {
                        low: "" === r ? "" : f(e, o, t),
                        med: "" === r ? "" : f(e, a, t),
                        high: "" === r ? "" : f(e, u, t),
                        auto: "" === r ? "" : f(e, s, t),
                        dense: "" === r ? "" : f(e, c, t),
                        custom: "" === r ? "" : f(e, n, t)
                    }
                }

                function f(e, n, t) {
                    var i = "";
                    if (!l(n)) return i;
                    var o = n.buckets.reduce((function(e, n) {
                            return e.max > n.max ? e : n
                        }), {
                            max: 0
                        }),
                        a = 0,
                        u = (0, r.sE)(n.buckets, (function(n) {
                            if (e > o.max * t) {
                                var r = n.precision;
                                void 0 === r && (r = 2), i = (n.max * t).toFixed(r)
                            } else {
                                if (e <= n.max * t && e >= a * t) return n.min = a, n;
                                a = n.max
                            }
                        }));
                    return u && (i = function(e, n, t) {
                        var r = void 0 !== n.precision ? n.precision : 2,
                            i = n.increment * t,
                            o = n.min * t,
                            a = Math.pow(10, r + 2),
                            u = (e * a - o * a) / (i * a),
                            c = Math.floor(u) * i + o;
                        return (c = Number(c.toFixed(10))).toFixed(r)
                    }(e, u, t)), i
                }

                function l(e) {
                    if ((0, i.isEmpty)(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
                    var n = !0;
                    return e.buckets.forEach((function(e) {
                        e.max && e.increment || (n = !1)
                    })), n
                }
            },
            3636: function(e, n, t) {
                "use strict";
                t.d(n, {
                    $8: function() {
                        return w
                    },
                    JI: function() {
                        return l
                    },
                    gF: function() {
                        return g
                    },
                    wt: function() {
                        return S
                    }
                });
                var r, i, o = t(8962),
                    a = t(4892),
                    u = t(3494),
                    c = (0, t(9853).prefixLog)("DEBUG:"),
                    s = c.logWarn,
                    d = c.logMessage,
                    f = "fusePbjs:debugging",
                    l = [function(e) {
                        p(),
                            function(e) {
                                r = E.bind(e), a.Yt.before(r, 5), i = C.bind(e), a.e0.before(i, 5)
                            }(e)
                    }],
                    g = [p];

                function p() {
                    a.Yt.getHooks({
                        hook: r
                    }).remove(), a.e0.getHooks({
                        hook: i
                    }).remove()
                }

                function v(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    o.vc.setConfig({
                        debug: !0
                    }), l.forEach((function(n) {
                        return n(e)
                    })), d("bidder overrides enabled".concat(n ? " from session" : ""))
                }

                function y() {
                    g.forEach((function(e) {
                        return e()
                    })), d("bidder overrides disabled")
                }

                function b(e, n, t) {
                    return !(!e.bidder || e.bidder === n) || !(!e.adUnitCode || e.adUnitCode === t)
                }

                function h(e, n) {
                    return Array.isArray(e) && -1 === e.indexOf(n)
                }

                function m(e, n, t) {
                    return Object.keys(e).filter((function(e) {
                        return -1 === ["adUnitCode", "bidder"].indexOf(e)
                    })).reduce((function(n, r) {
                        return d("bidder overrides changed '".concat(n.adUnitCode, "/").concat(n.bidderCode, "' ").concat(t, ".").concat(r, " from '").concat(n[r], ".js' to '").concat(e[r], "'")), n[r] = e[r], n.isDebug = !0, n
                    }), n)
                }

                function E(e, n, t) {
                    var r = this;
                    h(r.bidders, t.bidderCode) ? s("bidder '".concat(t.bidderCode, "' excluded from auction by bidder overrides")) : (Array.isArray(r.bids) && r.bids.forEach((function(e) {
                        b(e, t.bidderCode, n) || m(e, t, "bidder")
                    })), e(n, t))
                }

                function C(e, n) {
                    var t = this,
                        r = n.filter((function(e) {
                            return !h(t.bidders, e.bidderCode) || (s("bidRequest '".concat(e.bidderCode, "' excluded from auction by bidder overrides")), !1)
                        }));
                    Array.isArray(t.bidRequests) && r.forEach((function(e) {
                        t.bidRequests.forEach((function(n) {
                            e.bids.forEach((function(t) {
                                b(n, e.bidderCode, t.adUnitCode) || m(n, t, "bidRequest")
                            }))
                        }))
                    })), e(r)
                }
                var w = (0, u.z3)("sync", (function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.sessionStorage,
                        r = void 0 === t ? window.sessionStorage : t;
                    if (e.enabled) try {
                        r.setItem(f, JSON.stringify(e))
                    } catch (e) {} else try {
                        r.removeItem(f)
                    } catch (e) {}
                }));

                function S(e) {
                    var n;
                    try {
                        e = e || window.sessionStorage, n = JSON.parse(e.getItem(f))
                    } catch (e) {}
                    n && v(n, !0)
                }
                o.vc.getConfig("debugging", (function(e) {
                    return function(e) {
                        var n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).sessionStorage,
                            t = void 0 === n ? window.sessionStorage : n;
                        w(e, {
                            sessionStorage: t
                        }), e.enabled ? v(e) : y()
                    }(e.debugging)
                }))
            },
            2319: function(e, n, t) {
                "use strict";
                t.d(n, {
                    S1: function() {
                        return g
                    },
                    j8: function() {
                        return v
                    },
                    on: function() {
                        return l
                    },
                    vw: function() {
                        return p
                    }
                });
                var r = t(9853),
                    i = t(5644);

                function o() {
                    return o = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, o.apply(this, arguments)
                }
                var a = Array.prototype.slice,
                    u = Array.prototype.push,
                    c = r._map(i.FP, (function(e) {
                        return e
                    })),
                    s = i.aI,
                    d = [],
                    f = function() {
                        var e = {},
                            n = {};

                        function t(n, t) {
                            r.logMessage("Emitting event for: " + n);
                            var i = t[0] || {},
                                o = i[s[n]],
                                a = e[n] || {
                                    que: []
                                },
                                c = r._map(a, (function(e, n) {
                                    return n
                                })),
                                f = [];
                            d.push({
                                eventType: n,
                                args: i,
                                id: o,
                                elapsedTime: r.getPerformanceNow()
                            }), o && r.contains(c, o) && u.apply(f, a[o].que), u.apply(f, a.que), r._each(f, (function(e) {
                                if (e) try {
                                    e.apply(null, t)
                                } catch (e) {
                                    r.logError("Error executing handler:", "events.js", e)
                                }
                            }))
                        }
                        return n.on = function(n, t, i) {
                            if (function(e) {
                                    return r.contains(c, e)
                                }(n)) {
                                var o = e[n] || {
                                    que: []
                                };
                                i ? (o[i] = o[i] || {
                                    que: []
                                }, o[i].que.push(t)) : o.que.push(t), e[n] = o
                            } else r.logError("Wrong event name : " + n + " Valid event names :" + c)
                        }, n.emit = function(e) {
                            var n = a.call(arguments, 1);
                            t(e, n)
                        }, n.off = function(n, t, i) {
                            var o = e[n];
                            r.isEmpty(o) || r.isEmpty(o.que) && r.isEmpty(o[i]) || i && (r.isEmpty(o[i]) || r.isEmpty(o[i].que)) || (i ? r._each(o[i].que, (function(e) {
                                var n = o[i].que;
                                e === t && n.splice(n.indexOf(e), 1)
                            })) : r._each(o.que, (function(e) {
                                var n = o.que;
                                e === t && n.splice(n.indexOf(e), 1)
                            })), e[n] = o)
                        }, n.get = function() {
                            return e
                        }, n.getEvents = function() {
                            var e = [];
                            return r._each(d, (function(n) {
                                var t = o({}, n);
                                e.push(t)
                            })), e
                        }, n
                    }();
                r._setEventEmitter(f.emit.bind(f));
                var l = f.on,
                    g = f.off,
                    p = (f.get, f.getEvents),
                    v = f.emit
            },
            3494: function(e, n, t) {
                "use strict";
                t.d(n, {
                    Bx: function() {
                        return v
                    },
                    Cd: function() {
                        return d
                    },
                    bA: function() {
                        return p
                    },
                    o0: function() {
                        return l
                    },
                    v5: function() {
                        return f
                    },
                    z3: function() {
                        return c
                    }
                });
                var r = t(1432),
                    i = t.n(r),
                    o = t(9367);

                function a(e) {
                    return function(e) {
                        if (Array.isArray(e)) return u(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, n) {
                        if (e) {
                            if ("string" == typeof e) return u(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? u(e, n) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function u(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }
                var c = i()({
                        ready: i().SYNC | i().ASYNC | i().QUEUE
                    }),
                    s = (0, o.v)();
                c.ready = function() {
                    var e = c.ready;
                    return function() {
                        try {
                            return e.apply(c, arguments)
                        } finally {
                            s.resolve()
                        }
                    }
                }();
                var d = s.promise,
                    f = c.get;

                function l(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 15,
                        r = e.getHooks({
                            hook: n
                        });
                    0 === r.length && e.before(n, t)
                }
                var g = {};

                function p(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.postInstallAllowed,
                        i = void 0 !== r && r;
                    c("async", (function(t) {
                        t.forEach((function(e) {
                            return n.apply(void 0, a(e))
                        })), i && (g[e] = n)
                    }), e)([])
                }

                function v(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    var i = g[e];
                    if (i) return i.apply(void 0, t);
                    f(e).before((function(e, n) {
                        n.push(t), e(n)
                    }))
                }
            },
            8265: function(e, n, t) {
                "use strict";
                t.d(n, {
                    B5: function() {
                        return r
                    },
                    Mk: function() {
                        return o
                    },
                    Oh: function() {
                        return a
                    },
                    pX: function() {
                        return i
                    }
                });
                var r = "native",
                    i = "video",
                    o = "banner",
                    a = "adpod"
            },
            9017: function(e, n, t) {
                "use strict";
                t.d(n, {
                    Fb: function() {
                        return v
                    },
                    JL: function() {
                        return E
                    },
                    Sg: function() {
                        return l
                    },
                    Ur: function() {
                        return h
                    },
                    e6: function() {
                        return b
                    },
                    eK: function() {
                        return m
                    },
                    r4: function() {
                        return y
                    },
                    xc: function() {
                        return g
                    }
                });
                var r = t(265),
                    i = t(9853),
                    o = t(1879),
                    a = t(4766),
                    u = t(5644);

                function c(e) {
                    return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, c(e)
                }

                function s(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function d(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? s(Object(t), !0).forEach((function(n) {
                            f(e, n, t[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : s(Object(t)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }))
                    }
                    return e
                }

                function f(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }
                var l = [],
                    g = Object.keys(u.FY).map((function(e) {
                        return u.FY[e]
                    })),
                    p = {
                        image: {
                            image: {
                                required: !0
                            },
                            title: {
                                required: !0
                            },
                            sponsoredBy: {
                                required: !0
                            },
                            clickUrl: {
                                required: !0
                            },
                            body: {
                                required: !1
                            },
                            icon: {
                                required: !1
                            }
                        }
                    };

                function v(e) {
                    e.forEach((function(e) {
                        var n, t, a = e.nativeParams || (0, r.Z)(e, "mediaTypes.native");
                        a && (e.nativeParams = (n = a) && n.type && ((t = n.type) && (0, o.q9)(Object.keys(p), t) || ((0, i.logError)("".concat(t, " nativeParam is not supported")), 0)) ? p[n.type] : n)
                    }))
                }

                function y(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        i = void 0 === t ? a.K.index : t;
                    if (!(0, r.Z)(e, "native.clickUrl")) return !1;
                    var u = i.getAdUnit(e).nativeParams;
                    if (!u) return !0;
                    var c = Object.keys(u).filter((function(e) {
                            return u[e].required
                        })),
                        s = Object.keys(e.native).filter((function(n) {
                            return e.native[n]
                        }));
                    return c.every((function(e) {
                        return (0, o.q9)(s, e)
                    }))
                }

                function b(e, n) {
                    var t;
                    return "click" === e.action ? t = n.native && n.native.clickTrackers : (t = n.native && n.native.impressionTrackers, n.native && n.native.javascriptTrackers && (0, i.insertHtmlIntoIframe)(n.native.javascriptTrackers)), (t || []).forEach(i.triggerPixel), e.action
                }

                function h(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        i = void 0 === t ? a.K.index : t,
                        o = {},
                        u = i.getAdUnit(e);
                    (0, r.Z)(u, "nativeParams.rendererUrl") ? e.native.rendererUrl = C(u.nativeParams.rendererUrl): (0, r.Z)(u, "nativeParams.adTemplate") && (e.native.adTemplate = C(u.nativeParams.adTemplate));
                    var c = !1 !== (0, r.Z)(u, "nativeParams.sendTargetingKeys"),
                        s = w(u),
                        f = d(d({}, e.native), e.native.ext);
                    return delete f.ext, Object.keys(f).forEach((function(n) {
                        var t = s[n],
                            i = C(e.native[n]) || C((0, r.Z)(e, "native.ext.".concat(n)));
                        if ("adTemplate" !== n && t && i) {
                            var a = (0, r.Z)(u, "nativeParams.".concat(n, ".sendId"));
                            "boolean" != typeof a && (a = (0, r.Z)(u, "nativeParams.ext.".concat(n, ".sendId"))), a && (i = "".concat(t, ":").concat(e.adId));
                            var d = (0, r.Z)(u, "nativeParams.".concat(n, ".sendTargetingKeys"));
                            "boolean" != typeof d && (d = (0, r.Z)(u, "nativeParams.ext.".concat(n, ".sendTargetingKeys"))), ("boolean" == typeof d ? d : c) && (o[t] = i)
                        }
                    })), o
                }

                function m(e, n) {
                    var t = {
                        message: "assetResponse",
                        adId: e.adId,
                        assets: []
                    };
                    return n.native.hasOwnProperty("adTemplate") && (t.adTemplate = C(n.native.adTemplate)), n.native.hasOwnProperty("rendererUrl") && (t.rendererUrl = C(n.native.rendererUrl)), e.assets.forEach((function(e) {
                        var r = (0, i.getKeyByValue)(u.FY, e),
                            o = C(n.native[r]);
                        t.assets.push({
                            key: r,
                            value: o
                        })
                    })), t
                }

                function E(e, n) {
                    var t = {
                        message: "assetResponse",
                        adId: e.adId,
                        assets: []
                    };
                    return Object.keys(n.native).forEach((function(e, r) {
                        if ("adTemplate" === e && n.native[e]) t.adTemplate = C(n.native[e]);
                        else if ("rendererUrl" === e && n.native[e]) t.rendererUrl = C(n.native[e]);
                        else if ("ext" === e) Object.keys(n.native[e]).forEach((function(r) {
                            if (n.native[e][r]) {
                                var i = C(n.native[e][r]);
                                t.assets.push({
                                    key: r,
                                    value: i
                                })
                            }
                        }));
                        else if (n.native[e] && u.FY.hasOwnProperty(e)) {
                            var i = C(n.native[e]);
                            t.assets.push({
                                key: e,
                                value: i
                            })
                        }
                    })), t
                }

                function C(e) {
                    return "object" === c(e) && e.url ? e.url : e
                }

                function w(e) {
                    var n = {};
                    return (0, r.Z)(e, "nativeParams.ext") && Object.keys(e.nativeParams.ext).forEach((function(e) {
                        n[e] = "hb_native_".concat(e)
                    })), d(d({}, u.FY), n)
                }
            },
            1879: function(e, n, t) {
                "use strict";

                function r(e, n, t) {
                    return e && e.includes(n, t) || !1
                }

                function i() {
                    return Array.from.apply(Array, arguments)
                }

                function o(e, n, t) {
                    return e && e.find(n, t)
                }

                function a(e, n, t) {
                    return e && e.findIndex(n, t)
                }
                t.d(n, {
                    Oc: function() {
                        return i
                    },
                    cx: function() {
                        return a
                    },
                    q9: function() {
                        return r
                    },
                    sE: function() {
                        return o
                    }
                })
            },
            2786: function(e, n, t) {
                "use strict";
                t.d(n, {
                    zh: function() {
                        return ee
                    },
                    O5: function() {
                        return ne
                    }
                });
                var r = t(2528),
                    i = t(9853),
                    o = t(265),
                    a = t(2319),
                    u = t(9017),
                    c = t(5644),
                    s = t(4766),
                    d = t(1879),
                    f = t(4877),
                    l = t(8962),
                    g = c.FP,
                    p = g.AD_RENDER_FAILED,
                    v = g.AD_RENDER_SUCCEEDED;

                function y(e) {
                    var n = e.reason,
                        t = e.message,
                        r = e.bid,
                        o = e.id,
                        u = {
                            reason: n,
                            message: t
                        };
                    r && (u.bid = r), o && (u.adId = o), (0, i.logError)(t), a.j8(p, u)
                }

                function b(e) {
                    var n = e.doc,
                        t = e.bid,
                        r = e.id,
                        i = {
                            doc: n
                        };
                    t && (i.bid = t), r && (i.adId = r), a.j8(v, i)
                }
                var h = c.FP.BID_WON,
                    m = c.FP.STALE_RENDER,
                    E = {
                        "Prebid Request": function(e, n, t) {
                            if (null != t) {
                                if (t.status !== c.UE.fe || ((0, i.logWarn)("Ad id ".concat(t.adId, " has been rendered before")), a.j8(m, t), !(0, o.Z)(l.vc.getConfig("auctionOptions"), "suppressStaleRender"))) {
                                    try {
                                        ! function(e, n) {
                                            var t = e.adId,
                                                r = e.ad,
                                                o = e.adUrl,
                                                a = e.width,
                                                u = e.height,
                                                c = e.renderer,
                                                s = e.cpm,
                                                d = e.originalCpm;
                                            (0, f.Pd)(c) ? (0, f._U)(c, e) : t && (w(e), n({
                                                message: "Prebid Response",
                                                ad: (0, i.replaceAuctionPrice)(r, d || s),
                                                adUrl: (0, i.replaceAuctionPrice)(o, d || s),
                                                adId: t,
                                                width: a,
                                                height: u
                                            }))
                                        }(t, e)
                                    } catch (e) {
                                        return void y({
                                            reason: c.q_.EXCEPTION,
                                            message: e.message,
                                            id: n.adId,
                                            bid: t
                                        })
                                    }
                                    s.K.addWinningBid(t), a.j8(h, t)
                                }
                            } else y({
                                reason: c.q_.CANNOT_FIND_AD,
                                message: "Cannot find ad '".concat(n.adId, "' for cross-origin render request"),
                                id: n.adId
                            })
                        },
                        "Prebid Native": function(e, n, t) {
                            if (null != t) switch (n.action) {
                                case "assetRequest":
                                    e((0, u.eK)(n, t));
                                    break;
                                case "allAssetRequest":
                                    e((0, u.JL)(n, t));
                                    break;
                                case "resizeNativeHeight":
                                    t.height = n.height, t.width = n.width, w(t);
                                    break;
                                default:
                                    if ("click" === (0, u.e6)(n, t)) return;
                                    s.K.addWinningBid(t), a.j8(h, t)
                            } else(0, i.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"))
                        },
                        "Prebid Event": function(e, n, t) {
                            if (null != t)
                                if (t.status === c.UE.fe) switch (n.event) {
                                    case c.FP.AD_RENDER_FAILED:
                                        y({
                                            bid: t,
                                            id: n.adId,
                                            reason: n.info.reason,
                                            message: n.info.message
                                        });
                                        break;
                                    case c.FP.AD_RENDER_SUCCEEDED:
                                        b({
                                            doc: null,
                                            bid: t,
                                            id: n.adId
                                        });
                                        break;
                                    default:
                                        (0, i.logError)("Received x-origin event request for unsupported event: '".concat(n.event, "' (adId: '").concat(n.adId, "')"))
                                } else(0, i.logWarn)("Received x-origin event request without corresponding render request for ad '".concat(n.adId, "'"));
                                else(0, i.logError)("Cannot find ad '".concat(n.adId, "' for x-origin event request"))
                        }
                    };

                function C(e) {
                    var n = e.message ? "message" : "data",
                        t = {};
                    try {
                        t = JSON.parse(e[n])
                    } catch (e) {
                        return
                    }
                    if (t && t.adId && t.message) {
                        var r = (0, d.sE)(s.K.getBidsReceived(), (function(e) {
                            return e.adId === t.adId
                        }));
                        E.hasOwnProperty(t.message) && E[t.message](function(e) {
                            return null == e.origin && 0 === e.ports.length ? function() {
                                var e = "Cannot post message to a frame with null origin. Please update creatives to use MessageChannel, see https://github.com/prebid/Prebid.js/issues/7870";
                                throw (0, i.logError)(e), new Error(e)
                            } : e.ports.length > 0 ? function(n) {
                                e.ports[0].postMessage(JSON.stringify(n))
                            } : function(n) {
                                e.source.postMessage(JSON.stringify(n), e.origin)
                            }
                        }(e), t, r)
                    }
                }

                function w(e) {
                    var n = e.adId,
                        t = e.adUnitCode,
                        r = e.width,
                        o = e.height;
                    ["div", "iframe"].forEach((function(e) {
                        var a = function(e) {
                            var r = function(e, n) {
                                    return (0, i.isGptPubadsDefined)() ? function(e) {
                                        var n = (0, d.sE)(window.googletag.pubads().getSlots(), (function(n) {
                                            return (0, d.sE)(n.getTargetingKeys(), (function(t) {
                                                return (0, d.q9)(n.getTargeting(t), e)
                                            }))
                                        }));
                                        return n ? n.getSlotElementId() : null
                                    }(e) : (0, i.isApnGetTagDefined)() ? function(e) {
                                        var n = window.apntag.getTag(e);
                                        return n && n.targetId
                                    }(n) : n
                                }(n, t),
                                o = document.getElementById(r);
                            return o && o.querySelector(e)
                        }(e + ':not([style*="display: none"])');
                        if (a) {
                            var u = a.style;
                            u.width = r + "px", u.height = o + "px"
                        } else(0, i.logWarn)("Unable to locate matching page element for adUnitCode ".concat(t, ".  Can't resize it to ad's dimensions.  Please review setup."))
                    }))
                }
                var S = t(7112),
                    A = t(9742),
                    I = t(3494),
                    T = t(3636),
                    O = t(7263),
                    U = t(1477),
                    B = t(5849),
                    j = t(7602);

                function k() {
                    return k = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, k.apply(this, arguments)
                }
                var P = (0, r.R)(),
                    _ = S.k_.triggerUserSyncs,
                    R = c.FP,
                    D = R.ADD_AD_UNITS,
                    x = R.BID_WON,
                    q = R.REQUEST_BIDS,
                    N = R.SET_TARGETING,
                    M = R.STALE_RENDER,
                    F = c.q_,
                    W = F.PREVENT_WRITING_ON_MAIN_DOCUMENT,
                    z = F.NO_AD,
                    K = F.EXCEPTION,
                    L = F.CANNOT_FIND_AD,
                    Z = F.MISSING_DOC_OR_ADID,
                    H = {
                        bidWon: function(e) {
                            var n = s.K.getBidsRequested().map((function(e) {
                                return e.bids.map((function(e) {
                                    return e.adUnitCode
                                }))
                            })).reduce(i.flatten).filter(i.uniques);
                            if ((0, i.contains)(n, e)) return !0;
                            (0, i.logError)('The "' + e + '" placement is not defined.')
                        }
                    };

                function G(e, n, t) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = n, e.defaultView.frameElement.height = t)
                }

                function V(e, n) {
                    var t = [];
                    return (0, i.isArray)(e) && (n ? e.length === n : e.length > 0) && (e.every((function(e) {
                        return (0, i.isArrayOfNums)(e, 2)
                    })) ? t = e : (0, i.isArrayOfNums)(e, 2) && t.push(e)), t
                }

                function Q(e) {
                    var n = (0, i.deepClone)(e),
                        t = n.mediaTypes.banner,
                        r = V(t.sizes);
                    return r.length > 0 ? (t.sizes = r, n.sizes = r) : ((0, i.logError)("Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request."), delete n.mediaTypes.banner), n
                }

                function J(e) {
                    var n = (0, i.deepClone)(e),
                        t = n.mediaTypes.video;
                    if (t.playerSize) {
                        var r = "number" == typeof t.playerSize[0] ? 2 : 1,
                            o = V(t.playerSize, r);
                        o.length > 0 ? (2 === r && (0, i.logInfo)("Transforming video.playerSize from [640,480] to [[640,480]] so it's in the proper format."), t.playerSize = o, n.sizes = o) : ((0, i.logError)("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete n.mediaTypes.video.playerSize)
                    }
                    return n
                }

                function Y(e) {
                    var n = (0, i.deepClone)(e),
                        t = n.mediaTypes.native;
                    return t.image && t.image.sizes && !Array.isArray(t.image.sizes) && ((0, i.logError)("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete n.mediaTypes.native.image.sizes), t.image && t.image.aspect_ratios && !Array.isArray(t.image.aspect_ratios) && ((0, i.logError)("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete n.mediaTypes.native.image.aspect_ratios), t.icon && t.icon.sizes && !Array.isArray(t.icon.sizes) && ((0, i.logError)("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete n.mediaTypes.native.icon.sizes), n
                }

                function X(e, n) {
                    var t = (0, o.Z)(e, "mediaTypes.".concat(n, ".pos"));
                    if (!(0, i.isNumber)(t) || isNaN(t) || !isFinite(t)) {
                        var r = "Value of property 'pos' on ad unit ".concat(e.code, " should be of type: Number");
                        (0, i.logWarn)(r), a.j8(c.FP.AUCTION_DEBUG, {
                            type: "WARNING",
                            arguments: r
                        }), delete e.mediaTypes[n].pos
                    }
                    return e
                }

                function $(e) {
                    var n = function(n) {
                            return "adUnit.code '".concat(e.code, "' ").concat(n)
                        },
                        t = e.mediaTypes,
                        r = e.bids;
                    return null == r || (0, i.isArray)(r) ? null == r && null == e.ortb2Imp ? ((0, i.logError)(n("has no 'adUnit.bids' and no 'adUnit.ortb2Imp'. Removing adUnit from auction")), null) : t && 0 !== Object.keys(t).length ? (null == e.ortb2Imp || null != r && 0 !== r.length || (e.bids = [{
                        bidder: null
                    }], (0, i.logMessage)(n("defines 'adUnit.ortb2Imp' with no 'adUnit.bids'; it will be seen only by S2S adapters"))), e) : ((0, i.logError)(n("does not define a 'mediaTypes' object.  This is a required field for the auction, so this adUnit has been removed.")), null) : ((0, i.logError)(n("defines 'adUnit.bids' that is not an array. Removing adUnit from auction")), null)
                }(0, T.wt)(), P.bidderSettings = P.bidderSettings || {}, P.libLoaded = !0, P.version = "v6.27.0", (0, i.logInfo)("Prebid.js v6.27.0 loaded"), P.installedModules = P.installedModules || [], P.adUnits = P.adUnits || [], P.triggerUserSyncs = _;
                var ee = {
                        validateAdUnit: $,
                        validateBannerMediaType: Q,
                        validateVideoMediaType: J,
                        validateNativeMediaType: Y,
                        validateSizes: V
                    },
                    ne = (0, I.z3)("sync", (function(e) {
                        var n = [];
                        return e.forEach((function(e) {
                            if (null != (e = $(e))) {
                                var t, r, i, o = e.mediaTypes;
                                o.banner && (t = Q(e), o.banner.hasOwnProperty("pos") && (t = X(t, "banner"))), o.video && (r = J(t || e), o.video.hasOwnProperty("pos") && (r = X(r, "video"))), o.native && (i = Y(r || t || e));
                                var a = k({}, t, r, i);
                                n.push(a)
                            }
                        })), n
                    }), "checkAdUnitSetup");

                function te(e) {
                    var n = s.K[e]().filter(i.bind.call(i.adUnitsFilter, this, s.K.getAdUnitCodes())),
                        t = s.K.getLastAuctionId();
                    return n.map((function(e) {
                        return e.adUnitCode
                    })).filter(i.uniques).map((function(e) {
                        return n.filter((function(n) {
                            return n.auctionId === t && n.adUnitCode === e
                        }))
                    })).filter((function(e) {
                        return e && e[0] && e[0].adUnitCode
                    })).map((function(e) {
                        return n = {}, r = {
                            bids: e
                        }, (t = e[0].adUnitCode) in n ? Object.defineProperty(n, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[t] = r, n;
                        var n, t, r
                    })).reduce((function(e, n) {
                        return k(e, n)
                    }), {})
                }

                function re(e, n, t) {
                    var r = n.querySelector(t);
                    e.parentNode && e.parentNode === r || (0, i.insertElement)(e, n, t)
                }
                P.getAdserverTargetingForAdUnitCodeStr = function(e) {
                    if ((0, i.logInfo)("Invoking fusePbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                        var n = P.getAdserverTargetingForAdUnitCode(e);
                        return (0, i.transformAdServerTargetingObj)(n)
                    }(0, i.logMessage)("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
                }, P.getHighestUnusedBidResponseForAdUnitCode = function(e) {
                    if (e) {
                        var n = s.K.getAllBidsForAdUnitCode(e).filter(A.u8.isUnusedBid).filter(A.u8.isBidNotExpired);
                        return n.length ? n.reduce(i.getHighestCpm) : {}
                    }(0, i.logMessage)("Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode")
                }, P.getAdserverTargetingForAdUnitCode = function(e) {
                    return P.getAdserverTargeting(e)[e]
                }, P.getAdserverTargeting = function(e) {
                    return (0, i.logInfo)("Invoking fusePbjs.getAdserverTargeting", arguments), A.q0.getAllTargeting(e)
                }, P.getConsentMetadata = function() {
                    return (0, i.logInfo)("Invoking fusePbjs.getConsentMetadata"), {
                        gdpr: j.rp.getConsentMeta(),
                        usp: j.nX.getConsentMeta(),
                        coppa: !!l.vc.getConfig("coppa")
                    }
                }, P.getNoBids = function() {
                    return (0, i.logInfo)("Invoking fusePbjs.getNoBids", arguments), te("getNoBids")
                }, P.getNoBidsForAdUnitCode = function(e) {
                    return {
                        bids: s.K.getNoBids().filter((function(n) {
                            return n.adUnitCode === e
                        }))
                    }
                }, P.getBidResponses = function() {
                    return (0, i.logInfo)("Invoking fusePbjs.getBidResponses", arguments), te("getBidsReceived")
                }, P.getBidResponsesForAdUnitCode = function(e) {
                    return {
                        bids: s.K.getBidsReceived().filter((function(n) {
                            return n.adUnitCode === e
                        }))
                    }
                }, P.setTargetingForGPTAsync = function(e, n) {
                    if ((0, i.logInfo)("Invoking fusePbjs.setTargetingForGPTAsync", arguments), (0, i.isGptPubadsDefined)()) {
                        var t = A.q0.getAllTargeting(e);
                        A.q0.resetPresetTargeting(e, n), A.q0.setTargetingForGPT(t, n), Object.keys(t).forEach((function(e) {
                            Object.keys(t[e]).forEach((function(n) {
                                "hb_adid" === n && s.K.setStatusForBids(t[e][n], c.UE.CK)
                            }))
                        })), a.j8(N, t)
                    } else(0, i.logError)("window.googletag is not defined on the page")
                }, P.setTargetingForAst = function(e) {
                    (0, i.logInfo)("Invoking fusePbjs.setTargetingForAn", arguments), A.q0.isApntagDefined() ? (A.q0.setTargetingForAst(e), a.j8(N, A.q0.getAllTargeting())) : (0, i.logError)("window.apntag is not defined on the page")
                }, P.renderAd = (0, I.z3)("async", (function(e, n, t) {
                    if ((0, i.logInfo)("Invoking fusePbjs.renderAd", arguments), (0, i.logMessage)("Calling renderAd with adId :" + n), e && n) try {
                        var r = s.K.findBidByAdId(n);
                        if (r) {
                            var u = !0;
                            if (r && r.status === c.UE.fe && ((0, i.logWarn)("Ad id ".concat(r.adId, " has been rendered before")), a.j8(M, r), (0, o.Z)(l.vc.getConfig("auctionOptions"), "suppressStaleRender") && (u = !1)), u) {
                                if (r.ad = (0, i.replaceAuctionPrice)(r.ad, r.originalCpm || r.cpm), r.adUrl = (0, i.replaceAuctionPrice)(r.adUrl, r.originalCpm || r.cpm), t && t.clickThrough) {
                                    var d = t.clickThrough;
                                    r.ad = (0, i.replaceClickThrough)(r.ad, d), r.adUrl = (0, i.replaceClickThrough)(r.adUrl, d)
                                }
                                s.K.addWinningBid(r), a.j8(x, r);
                                var g = r.height,
                                    p = r.width,
                                    v = r.ad,
                                    h = r.mediaType,
                                    m = r.adUrl,
                                    E = r.renderer,
                                    C = document.createComment("Creative ".concat(r.creativeId, " served by ").concat(r.bidder, " Prebid.js Header Bidding"));
                                if ((0, i.insertElement)(C, e, "html"), (0, f.Pd)(E))(0, f._U)(E, r, e), re(C, e, "html"), b({
                                    doc: e,
                                    bid: r,
                                    id: n
                                });
                                else if (e === document && !(0, i.inIframe)() || "video" === h) {
                                    var w = "Error trying to write ad. Ad render call ad id ".concat(n, " was prevented from writing to the main document.");
                                    y({
                                        reason: W,
                                        message: w,
                                        bid: r,
                                        id: n
                                    })
                                } else if (v) e.write(v), e.close(), G(e, p, g), re(C, e, "html"), (0, i.callBurl)(r), b({
                                    doc: e,
                                    bid: r,
                                    id: n
                                });
                                else if (m) {
                                    var S = (0, i.createInvisibleIframe)();
                                    S.height = g, S.width = p, S.style.display = "inline", S.style.overflow = "hidden", S.src = m, (0, i.insertElement)(S, e, "body"), G(e, p, g), re(C, e, "html"), (0, i.callBurl)(r), b({
                                        doc: e,
                                        bid: r,
                                        id: n
                                    })
                                } else {
                                    var A = "Error trying to write ad. No ad for bid response id: ".concat(n);
                                    y({
                                        reason: z,
                                        message: A,
                                        bid: r,
                                        id: n
                                    })
                                }
                            }
                        } else {
                            var I = "Error trying to write ad. Cannot find ad by given id : ".concat(n);
                            y({
                                reason: L,
                                message: I,
                                id: n
                            })
                        }
                    } catch (e) {
                        var T = "Error trying to write ad Id :".concat(n, " to the page:").concat(e.message);
                        y({
                            reason: K,
                            message: T,
                            id: n
                        })
                    } else {
                        var O = "Error trying to write ad Id :".concat(n, " to the page. Missing document or adId");
                        y({
                            reason: Z,
                            message: O,
                            id: n
                        })
                    }
                })), P.removeAdUnit = function(e) {
                    (0, i.logInfo)("Invoking fusePbjs.removeAdUnit", arguments), e ? ((0, i.isArray)(e) ? e : [e]).forEach((function(e) {
                        for (var n = P.adUnits.length - 1; n >= 0; n--) P.adUnits[n].code === e && P.adUnits.splice(n, 1)
                    })) : P.adUnits = []
                }, P.requestBids = (0, I.z3)("async", (function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.bidsBackHandler,
                        t = e.timeout,
                        r = e.adUnits,
                        o = e.adUnitCodes,
                        u = e.labels,
                        c = e.auctionId;
                    a.j8(q);
                    var f = t || l.vc.getConfig("bidderTimeout");
                    r = r && l.vc.convertAdUnitFpd((0, i.isArray)(r) ? r : [r]) || P.adUnits, (0, i.logInfo)("Invoking fusePbjs.requestBids", arguments);
                    var g = (0, j.uV)(l.vc.getConfig("s2sConfig") || []);
                    if (r = ne(r), o && o.length ? r = r.filter((function(e) {
                            return (0, d.q9)(o, e.code)
                        })) : o = r && r.map((function(e) {
                            return e.code
                        })), r.forEach((function(e) {
                            var n = Object.keys(e.mediaTypes || {
                                    banner: "banner"
                                }),
                                t = e.bids.map((function(e) {
                                    return e.bidder
                                })),
                                r = j.ZP.bidderRegistry,
                                o = t.filter((function(e) {
                                    return !g.has(e)
                                }));
                            e.transactionId = (0, i.generateUUID)(), o.forEach((function(t) {
                                var o = r[t],
                                    a = o && o.getSpec && o.getSpec(),
                                    u = a && a.supportedMediaTypes || ["banner"];
                                n.some((function(e) {
                                    return (0, d.q9)(u, e)
                                })) ? O.f.incrementBidderRequestsCounter(e.code, t) : ((0, i.logWarn)((0, i.unsupportedBidderMessage)(e, t)), e.bids = e.bids.filter((function(e) {
                                    return e.bidder !== t
                                })))
                            })), O.f.incrementRequestsCounter(e.code)
                        })), r && 0 !== r.length) {
                        var p = s.K.createAuction({
                                adUnits: r,
                                adUnitCodes: o,
                                callback: n,
                                cbTimeout: f,
                                labels: u,
                                auctionId: c
                            }),
                            v = r.length;
                        v > 15 && (0, i.logInfo)("Current auction ".concat(p.getAuctionId(), " contains ").concat(v, " adUnits."), r), o.forEach((function(e) {
                            return A.q0.setLatestAuctionForAdUnit(e, p.getAuctionId())
                        })), p.callBids()
                    } else if ((0, i.logMessage)("No adUnits configured. No bids requested."), "function" == typeof n) try {
                        n()
                    } catch (e) {
                        (0, i.logError)("Error executing bidsBackHandler", null, e)
                    }
                })), P.requestBids.before((function(e, n) {
                    function t(e) {
                        for (var n; n = e.shift();) n()
                    }
                    t(B.Ld), t(ie), e.call(this, n)
                }), 49), P.addAdUnits = function(e) {
                    (0, i.logInfo)("Invoking fusePbjs.addAdUnits", arguments), P.adUnits.push.apply(P.adUnits, l.vc.convertAdUnitFpd((0, i.isArray)(e) ? e : [e])), a.j8(D)
                }, P.onEvent = function(e, n, t) {
                    (0, i.logInfo)("Invoking fusePbjs.onEvent", arguments), (0, i.isFn)(n) ? !t || H[e].call(null, t) ? a.on(e, n, t) : (0, i.logError)('The id provided is not valid for event "' + e + '" and no handler was set.'): (0, i.logError)('The event handler provided is not a function and was not set on event "' + e + '".')
                }, P.offEvent = function(e, n, t) {
                    (0, i.logInfo)("Invoking fusePbjs.offEvent", arguments), t && !H[e].call(null, t) || a.S1(e, n, t)
                }, P.getEvents = function() {
                    return (0, i.logInfo)("Invoking fusePbjs.getEvents"), a.vw()
                }, P.registerBidAdapter = function(e, n) {
                    (0, i.logInfo)("Invoking fusePbjs.registerBidAdapter", arguments);
                    try {
                        j.ZP.registerBidAdapter(e(), n)
                    } catch (e) {
                        (0, i.logError)("Error registering bidder adapter : " + e.message)
                    }
                }, P.registerAnalyticsAdapter = function(e) {
                    (0, i.logInfo)("Invoking fusePbjs.registerAnalyticsAdapter", arguments);
                    try {
                        j.ZP.registerAnalyticsAdapter(e)
                    } catch (e) {
                        (0, i.logError)("Error registering analytics adapter : " + e.message)
                    }
                }, P.createBid = function(e) {
                    return (0, i.logInfo)("Invoking fusePbjs.createBid", arguments), (0, U.m)(e)
                };
                var ie = [],
                    oe = (0, I.z3)("async", (function(e) {
                        e && !(0, i.isEmpty)(e) ? ((0, i.logInfo)("Invoking fusePbjs.enableAnalytics for: ", e), j.ZP.enableAnalytics(e)) : (0, i.logError)("fusePbjs.enableAnalytics should be called with option {}")
                    }), "enableAnalyticsCb");

                function ae(e) {
                    e.forEach((function(e) {
                        if (void 0 === e.called) try {
                            e.call(), e.called = !0
                        } catch (e) {
                            (0, i.logError)("Error processing command :", "prebid.js", e)
                        }
                    }))
                }
                P.enableAnalytics = function(e) {
                    ie.push(oe.bind(this, e))
                }, P.aliasBidder = function(e, n, t) {
                    (0, i.logInfo)("Invoking fusePbjs.aliasBidder", arguments), e && n ? j.ZP.aliasBidAdapter(e, n, t) : (0, i.logError)("bidderCode and alias must be passed as arguments", "fusePbjs.aliasBidder")
                }, P.getAllWinningBids = function() {
                    return s.K.getAllWinningBids()
                }, P.getAllPrebidWinningBids = function() {
                    return s.K.getBidsReceived().filter((function(e) {
                        return e.status === c.UE.CK
                    }))
                }, P.getHighestCpmBids = function(e) {
                    return A.q0.getWinningBids(e)
                }, P.markWinningBidAsUsed = function(e) {
                    var n = [];
                    e.adUnitCode && e.adId ? n = s.K.getBidsReceived().filter((function(n) {
                        return n.adId === e.adId && n.adUnitCode === e.adUnitCode
                    })) : e.adUnitCode ? n = A.q0.getWinningBids(e.adUnitCode) : e.adId ? n = s.K.getBidsReceived().filter((function(n) {
                        return n.adId === e.adId
                    })) : (0, i.logWarn)("Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function."), n.length > 0 && (n[0].status = c.UE.fe)
                }, P.getConfig = l.vc.getConfig, P.readConfig = l.vc.readConfig, P.mergeConfig = l.vc.mergeConfig, P.mergeBidderConfig = l.vc.mergeBidderConfig, P.setConfig = l.vc.setConfig, P.setBidderConfig = l.vc.setBidderConfig, P.que.push((function() {
                    window.addEventListener("message", C, !1)
                })), P.cmd.push = function(e) {
                    if ("function" == typeof e) try {
                        e.call()
                    } catch (e) {
                        (0, i.logError)("Error processing command :", e.message, e.stack)
                    } else(0, i.logError)("Commands written into fusePbjs.cmd.push must be wrapped in a function")
                }, P.que.push = P.cmd.push, P.processQueue = function() {
                    I.z3.ready(), ae(P.que), ae(P.cmd)
                }
            },
            2528: function(e, n, t) {
                "use strict";

                function r() {
                    return window.fusePbjs
                }
                t.d(n, {
                    R: function() {
                        return r
                    }
                }), window.fusePbjs = window.fusePbjs || {}, window.fusePbjs.cmd = window.fusePbjs.cmd || [], window.fusePbjs.que = window.fusePbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push("fusePbjs")
            },
            2661: function(e, n, t) {
                "use strict";
                t.d(n, {
                    n: function() {
                        return o
                    }
                });
                var r = t(8962),
                    i = t(9853),
                    o = function(e) {
                        function n(e) {
                            var n = r.vc.getConfig("pageUrl");
                            if (n) return n;
                            try {
                                var t = e.querySelector("link[rel='canonical']");
                                if (null !== t) return t.href
                            } catch (e) {}
                            return null
                        }
                        return function() {
                            var t, o, a, u = [],
                                c = function(e) {
                                    try {
                                        if (!e.location.ancestorOrigins) return;
                                        return e.location.ancestorOrigins
                                    } catch (e) {}
                                }(e),
                                s = r.vc.getConfig("maxNestedIframes"),
                                d = !1,
                                f = 0,
                                l = !1,
                                g = !1;
                            do {
                                var p = t,
                                    v = g,
                                    y = void 0,
                                    b = !1,
                                    h = null;
                                g = !1, t = t ? t.parent : e;
                                try {
                                    y = t.location.href || null
                                } catch (e) {
                                    b = !0
                                }
                                if (b)
                                    if (v) {
                                        var m = p.context;
                                        try {
                                            o = h = m.sourceUrl, l = !0, t === e.top && (d = !0), m.canonicalUrl && (a = m.canonicalUrl)
                                        } catch (e) {}
                                    } else {
                                        (0, i.logWarn)("Trying to access cross domain iframe. Continuing without referrer and location");
                                        try {
                                            var E = p.document.referrer;
                                            E && (h = E, t === e.top && (d = !0))
                                        } catch (e) {}!h && c && c[f - 1] && (h = c[f - 1]), h && !l && (o = h)
                                    }
                                else {
                                    if (y && (o = h = y, l = !1, t === e.top)) {
                                        d = !0;
                                        var C = n(t.document);
                                        C && (a = C)
                                    }
                                    t.context && t.context.sourceUrl && (g = !0)
                                }
                                u.push(h), f++
                            } while (t !== e.top && f < s);
                            return u.reverse(), {
                                referer: o || null,
                                reachedTop: d,
                                isAmp: l,
                                numIframes: f - 1,
                                stack: u,
                                canonicalUrl: a || null
                            }
                        }
                    }(window)
            },
            1269: function(e, n, t) {
                "use strict";
                t.d(n, {
                    UB: function() {
                        return g
                    },
                    lO: function() {
                        return d
                    }
                });
                var r = t(8962),
                    i = t(9853),
                    o = t(265),
                    a = t(1879);

                function u(e) {
                    return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, u(e)
                }
                var c = [];

                function s(e, n) {
                    return e.labelAll ? {
                        labelAll: !0,
                        labels: e.labelAll,
                        activeLabels: n
                    } : {
                        labelAll: !1,
                        labels: e.labelAny,
                        activeLabels: n
                    }
                }

                function d(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c,
                        t = l(n);
                    return !t.shouldFilter || !!t.sizesSupported[e]
                }

                function f() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.labels,
                        t = void 0 === n ? [] : n,
                        r = e.labelAll,
                        u = void 0 !== r && r,
                        s = e.activeLabels,
                        d = void 0 === s ? [] : s,
                        f = arguments.length > 1 ? arguments[1] : void 0,
                        g = arguments.length > 2 ? arguments[2] : void 0,
                        p = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
                        v = l(p);
                    f = (0, i.isPlainObject)(f) ? (0, i.deepClone)(f) : g ? {
                        banner: {
                            sizes: g
                        }
                    } : {};
                    var y = (0, o.Z)(f, "banner.sizes");
                    v.shouldFilter && y && (f.banner.sizes = y.filter((function(e) {
                        return v.sizesSupported[e]
                    })));
                    var b = Object.keys(f),
                        h = {
                            active: b.every((function(e) {
                                return "banner" !== e
                            })) || b.some((function(e) {
                                return "banner" === e
                            })) && (0, o.Z)(f, "banner.sizes.length") > 0 && (0 === t.length || !u && (t.some((function(e) {
                                return v.labels[e]
                            })) || t.some((function(e) {
                                return (0, a.q9)(d, e)
                            }))) || u && t.reduce((function(e, n) {
                                return e ? v.labels[n] || (0, a.q9)(d, n) : e
                            }), !0)),
                            mediaTypes: f
                        };
                    return y && y.length !== f.banner.sizes.length && (h.filterResults = {
                        before: y,
                        after: f.banner.sizes
                    }), h
                }

                function l(e) {
                    return e.reduce((function(e, n) {
                        if ("object" === u(n) && "string" == typeof n.mediaQuery && n.mediaQuery.length > 0) {
                            var t = !1;
                            try {
                                t = (0, i.getWindowTop)().matchMedia(n.mediaQuery).matches
                            } catch (e) {
                                (0, i.logWarn)("Unfriendly iFrame blocks sizeConfig from being correctly evaluated"), t = matchMedia(n.mediaQuery).matches
                            }
                            t && (Array.isArray(n.sizesSupported) && (e.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                                return (n[t] || []).forEach((function(n) {
                                    return e[t][n] = !0
                                }))
                            })))
                        } else(0, i.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                        return e
                    }), {
                        labels: {},
                        sizesSupported: {},
                        shouldFilter: !1
                    })
                }

                function g(e, n) {
                    return e.reduce((function(e, t) {
                        var r = f(s(t, n), t.mediaTypes, t.sizes),
                            o = r.active,
                            a = r.mediaTypes,
                            u = r.filterResults;
                        return o ? (u && (0, i.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" banner sizes from '), u.before, "to ", u.after), t.mediaTypes = a, t.bids = t.bids.reduce((function(e, r) {
                            var o = f(s(r, n), t.mediaTypes),
                                a = o.active,
                                u = o.mediaTypes,
                                c = o.filterResults;
                            return a ? (c && ((0, i.logInfo)('Size mapping filtered adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '" banner sizes from '), c.before, "to ", c.after), r.mediaTypes = u), e.push(r)) : (0, i.logInfo)('Size mapping deactivated adUnit "'.concat(t.code, '" bidder "').concat(r.bidder, '"')), e
                        }), []), e.push(t)) : (0, i.logInfo)('Size mapping disabled adUnit "'.concat(t.code, '"')), e
                    }), [])
                }
                r.vc.getConfig("sizeConfig", (function(e) {
                    return function(e) {
                        c = e
                    }(e.sizeConfig)
                }))
            },
            5849: function(e, n, t) {
                "use strict";
                t.d(n, {
                    Ld: function() {
                        return c
                    },
                    S6: function() {
                        return d
                    },
                    df: function() {
                        return l
                    },
                    eA: function() {
                        return f
                    }
                });
                var r = t(3494),
                    i = t(9853),
                    o = t(1879),
                    a = t(9624),
                    u = ["core", "prebid-module"],
                    c = [];

                function s() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.gvlid,
                        t = e.moduleName,
                        r = e.bidderCode,
                        s = e.moduleType,
                        f = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        l = f.bidderSettings,
                        g = void 0 === l ? a.S : l;

                    function p() {
                        if (null == r) return !1;
                        var e = g.get(r, "storageAllowed");
                        return null != e && !e
                    }

                    function v(e) {
                        return (0, o.q9)(u, s) ? e({
                            valid: !0
                        }) : p() ? ((0, i.logInfo)("bidderSettings denied access to device storage for bidder '".concat(r, "'")), e({
                            valid: !1
                        })) : (d(n, r || t, {
                            hasEnforcementHook: !1
                        }, (function(n) {
                            if (n && n.hasEnforcementHook) a = e(n);
                            else {
                                var t = {
                                    hasEnforcementHook: !1,
                                    valid: (0, i.hasDeviceAccess)()
                                };
                                a = e(t)
                            }
                        })), a);
                        var a
                    }
                    var y = function(e, n, t, r, i, o) {
                            var a = function(o) {
                                if (o && o.valid) {
                                    var a = i && "" !== i ? " ;domain=".concat(encodeURIComponent(i)) : "",
                                        u = t && "" !== t ? " ;expires=".concat(t) : "",
                                        c = null != r && "none" == r.toLowerCase() ? "; Secure" : "";
                                    document.cookie = "".concat(e, "=").concat(encodeURIComponent(n)).concat(u, "; path=/").concat(a).concat(r ? "; SameSite=".concat(r) : "").concat(c)
                                }
                            };
                            if (!o || "function" != typeof o) return v(a);
                            c.push((function() {
                                var e = v(a);
                                o(e)
                            }))
                        },
                        b = function(e, n) {
                            var t = function(n) {
                                if (n && n.valid) {
                                    var t = window.document.cookie.match("(^|;)\\s*" + e + "\\s*=\\s*([^;]*)\\s*(;|$)");
                                    return t ? decodeURIComponent(t[2]) : null
                                }
                                return null
                            };
                            if (!n || "function" != typeof n) return v(t);
                            c.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        },
                        h = function(e) {
                            var n = function(e) {
                                if (e && e.valid) try {
                                    return localStorage.setItem("prebid.cookieTest", "1"), "1" === localStorage.getItem("prebid.cookieTest")
                                } catch (e) {} finally {
                                    try {
                                        localStorage.removeItem("prebid.cookieTest")
                                    } catch (e) {}
                                }
                                return !1
                            };
                            if (!e || "function" != typeof e) return v(n);
                            c.push((function() {
                                var t = v(n);
                                e(t)
                            }))
                        },
                        m = function(e) {
                            var n = function(e) {
                                return !(!e || !e.valid || !(0, i.checkCookieSupport)() && (window.document.cookie = "prebid.cookieTest", -1 === window.document.cookie.indexOf("prebid.cookieTest")))
                            };
                            if (!e || "function" != typeof e) return v(n);
                            c.push((function() {
                                var t = v(n);
                                e(t)
                            }))
                        },
                        E = function(e, n, t) {
                            var r = function(t) {
                                t && t.valid && S() && window.localStorage.setItem(e, n)
                            };
                            if (!t || "function" != typeof t) return v(r);
                            c.push((function() {
                                var e = v(r);
                                t(e)
                            }))
                        },
                        C = function(e, n) {
                            var t = function(n) {
                                return n && n.valid && S() ? window.localStorage.getItem(e) : null
                            };
                            if (!n || "function" != typeof n) return v(t);
                            c.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        },
                        w = function(e, n) {
                            var t = function(n) {
                                n && n.valid && S() && window.localStorage.removeItem(e)
                            };
                            if (!n || "function" != typeof n) return v(t);
                            c.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        },
                        S = function(e) {
                            var n = function(e) {
                                if (e && e.valid) try {
                                    return !!window.localStorage
                                } catch (e) {
                                    (0, i.logError)("Local storage api disabled")
                                }
                                return !1
                            };
                            if (!e || "function" != typeof e) return v(n);
                            c.push((function() {
                                var t = v(n);
                                e(t)
                            }))
                        },
                        A = function(e, n) {
                            var t = function(n) {
                                if (n && n.valid) {
                                    var t = [];
                                    if ((0, i.hasDeviceAccess)())
                                        for (var r = document.cookie.split(";"); r.length;) {
                                            var o = r.pop(),
                                                a = o.indexOf("=");
                                            a = a < 0 ? o.length : a, decodeURIComponent(o.slice(0, a).replace(/^\s+/, "")).indexOf(e) >= 0 && t.push(decodeURIComponent(o.slice(a + 1)))
                                        }
                                    return t
                                }
                            };
                            if (!n || "function" != typeof n) return v(t);
                            c.push((function() {
                                var e = v(t);
                                n(e)
                            }))
                        };
                    return {
                        setCookie: y,
                        getCookie: b,
                        localStorageIsEnabled: h,
                        cookiesAreEnabled: m,
                        setDataInLocalStorage: E,
                        getDataFromLocalStorage: C,
                        removeDataFromLocalStorage: w,
                        hasLocalStorage: S,
                        findSimilarCookies: A
                    }
                }
                var d = (0, r.z3)("async", (function(e, n, t, r) {
                    r(t)
                }), "validateStorageEnforcement");

                function f(e) {
                    return s({
                        moduleName: e,
                        moduleType: "core"
                    })
                }

                function l() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.gvlid,
                        t = e.moduleName,
                        r = e.bidderCode;
                    if (arguments.length > 1 || arguments.length > 0 && !(0, i.isPlainObject)(arguments[0])) throw new Error("Invalid invocation for getStorageManager");
                    return s({
                        gvlid: n,
                        moduleName: t,
                        bidderCode: r
                    })
                }
            },
            9742: function(e, n, t) {
                "use strict";
                t.d(n, {
                    bP: function() {
                        return I
                    },
                    ol: function() {
                        return A
                    },
                    q0: function() {
                        return T
                    },
                    u8: function() {
                        return S
                    }
                });
                var r = t(9853),
                    i = t(265),
                    o = t(8962),
                    a = t(9017),
                    u = t(4766),
                    c = t(1269),
                    s = t(8265),
                    d = t(3494),
                    f = t(9624),
                    l = t(1879),
                    g = t(5644);

                function p() {
                    return p = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, p.apply(this, arguments)
                }

                function v(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function y(e) {
                    return function(e) {
                        if (Array.isArray(e)) return b(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, n) {
                        if (e) {
                            if ("string" == typeof e) return b(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? b(e, n) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function b(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }
                var h = [],
                    m = "targetingControls.allowTargetingKeys",
                    E = "targetingControls.addTargetingKeys",
                    C = 'Only one of "'.concat(m, '" or "').concat(E, '" can be set'),
                    w = Object.keys(g.TD).map((function(e) {
                        return g.TD[e]
                    })),
                    S = {
                        isBidNotExpired: function(e) {
                            return e.responseTimestamp + 1e3 * e.ttl - 1e3 > (0, r.timestamp)()
                        },
                        isUnusedBid: function(e) {
                            return e && (e.status && !(0, l.q9)([g.UE.fe], e.status) || !e.status)
                        }
                    },
                    A = (0, d.z3)("sync", (function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        if (!i) {
                            var a = [],
                                u = o.vc.getConfig("sendBidsControl.dealPrioritization"),
                                c = (0, r.groupBy)(e, "adUnitCode");
                            return Object.keys(c).forEach((function(e) {
                                var i = [],
                                    o = (0, r.groupBy)(c[e], "bidderCode");
                                Object.keys(o).forEach((function(e) {
                                    return i.push(o[e].reduce(n))
                                })), t > 0 ? (i = u ? i.sort(I(!0)) : i.sort((function(e, n) {
                                    return n.cpm - e.cpm
                                })), a.push.apply(a, y(i.slice(0, t)))) : a.push.apply(a, y(i))
                            })), a
                        }
                        return e
                    }));

                function I() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return function(n, t) {
                        return void 0 !== n.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === n.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : e ? t.cpm - n.cpm : t.adserverTargeting.hb_pb - n.adserverTargeting.hb_pb
                    }
                }
                var T = function(e) {
                    var n = {},
                        t = {};

                    function u(e, n) {
                        return e.adserverTargeting && n && ((0, r.isArray)(n) && (0, l.q9)(n, e.adUnitCode) || "string" == typeof n && e.adUnitCode === n)
                    }

                    function d(e, n) {
                        if (!0 === o.vc.getConfig("targetingControls.alwaysIncludeDeals")) {
                            var t = w.concat(a.xc);
                            return A(n, r.getHighestCpm).map((function(n) {
                                if (n.dealId && u(n, e)) return v({}, n.adUnitCode, q(n, t.filter((function(e) {
                                    return void 0 !== n.adserverTargeting[e]
                                }))))
                            })).filter((function(e) {
                                return e
                            }))
                        }
                        return []
                    }

                    function b(e, n) {
                        var t = p({}, g.TD, g.FY),
                            i = Object.keys(t),
                            o = {};
                        (0, r.logInfo)("allowTargetingKeys - allowed keys [ ".concat(n.map((function(e) {
                            return t[e]
                        })).join(", "), " ]")), e.map((function(e) {
                            var r = Object.keys(e)[0],
                                a = e[r].filter((function(e) {
                                    var r = Object.keys(e)[0],
                                        a = 0 === i.filter((function(e) {
                                            return 0 === r.indexOf(t[e])
                                        })).length || (0, l.sE)(n, (function(e) {
                                            var n = t[e];
                                            return 0 === r.indexOf(n)
                                        }));
                                    return o[r] = !a, a
                                }));
                            e[r] = a
                        }));
                        var a = Object.keys(o).filter((function(e) {
                            return o[e]
                        }));
                        return (0, r.logInfo)("allowTargetingKeys - removed keys [ ".concat(a.join(", "), " ]")), e.filter((function(e) {
                            return e[Object.keys(e)[0]].length > 0
                        }))
                    }

                    function T(e, n) {
                        var t = (0, r.deepClone)(e);
                        return Object.keys(t).map((function(e) {
                            return {
                                adUnitCode: e,
                                adserverTargeting: t[e]
                            }
                        })).sort(I()).reduce((function(e, i, o, a) {
                            var u, c = (u = i.adserverTargeting, Object.keys(u).reduce((function(e, n) {
                                return e + "".concat(n, "%3d").concat(encodeURIComponent(u[n]), "%26")
                            }), ""));
                            o + 1 === a.length && (c = c.slice(0, -3));
                            var s = i.adUnitCode,
                                d = c.length;
                            return d <= n ? (n -= d, (0, r.logInfo)("AdUnit '".concat(s, "' auction keys comprised of ").concat(d, " characters.  Deducted from running threshold; new limit is ").concat(n), t[s]), e[s] = t[s]) : (0, r.logWarn)("The following keys for adUnitCode '".concat(s, "' exceeded the current limit of the 'auctionKeyMaxChars' setting.\nThe key-set size was ").concat(d, ", the current allotted amount was ").concat(n, ".\n"), t[s]), o + 1 === a.length && 0 === Object.keys(e).length && (0, r.logError)("No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting."), e
                        }), {})
                    }

                    function O(e) {
                        var n = e.map((function(e) {
                            return v({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                                return v({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(","))
                            })).reduce((function(e, n) {
                                return p(n, e)
                            }), {}))
                        })).reduce((function(e, n) {
                            var t = Object.keys(n)[0];
                            return e[t] = p({}, e[t], n[t]), e
                        }), {});
                        return n
                    }

                    function U(n) {
                        return "string" == typeof n ? [n] : (0, r.isArray)(n) ? n : e.getAdUnitCodes() || []
                    }

                    function B() {
                        var n = e.getBidsReceived();
                        if (o.vc.getConfig("useBidCache")) {
                            var a = o.vc.getConfig("bidCacheFilterFunction");
                            "function" == typeof a && (n = n.filter((function(e) {
                                return t[e.adUnitCode] === e.auctionId || !!a(e)
                            })))
                        } else n = n.filter((function(e) {
                            return t[e.adUnitCode] === e.auctionId
                        }));
                        return n = n.filter((function(e) {
                            return (0, i.Z)(e, "video.context") !== s.Oh
                        })).filter((function(e) {
                            return "banner" !== e.mediaType || (0, c.lO)([e.width, e.height])
                        })).filter(S.isUnusedBid).filter(S.isBidNotExpired), A(n, r.getOldestHighestCpmBid)
                    }

                    function j(e, t) {
                        var r = n.getWinningBids(e, t),
                            i = k();
                        return r = r.map((function(e) {
                            return v({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter((function(n) {
                                return void 0 === e.sendStandardTargeting || e.sendStandardTargeting || -1 === i.indexOf(n)
                            })).reduce((function(n, t) {
                                var r = [e.adserverTargeting[t]],
                                    i = v({}, t.substring(0, 20), r);
                                if (t === g.TD.DEAL) {
                                    var o = v({}, "".concat(t, "_").concat(e.bidderCode).substring(0, 20), r);
                                    return [].concat(y(n), [i, o])
                                }
                                return [].concat(y(n), [i])
                            }), []))
                        })), r
                    }

                    function k() {
                        return e.getStandardBidderAdServerTargeting().map((function(e) {
                            return e.key
                        })).concat(w).filter(r.uniques)
                    }

                    function P(e, n, t, i) {
                        return Object.keys(n.adserverTargeting).filter(_()).forEach((function(t) {
                            e.length && e.filter(function(e) {
                                return function(t) {
                                    return t.adUnitCode === n.adUnitCode && t.adserverTargeting[e]
                                }
                            }(t)).forEach(function(e) {
                                return function(t) {
                                    (0, r.isArray)(t.adserverTargeting[e]) || (t.adserverTargeting[e] = [t.adserverTargeting[e]]), t.adserverTargeting[e] = t.adserverTargeting[e].concat(n.adserverTargeting[e]).filter(r.uniques), delete n.adserverTargeting[e]
                                }
                            }(t))
                        })), e.push(n), e
                    }

                    function _() {
                        var e = k().concat(a.xc);
                        return function(n) {
                            return -1 === e.indexOf(n)
                        }
                    }

                    function R(e) {
                        return v({}, e.adUnitCode, Object.keys(e.adserverTargeting).filter(_()).map((function(n) {
                            return v({}, n.substring(0, 20), [e.adserverTargeting[n]])
                        })))
                    }

                    function D(e, n) {
                        return n.filter((function(n) {
                            return (0, l.q9)(e, n.adUnitCode)
                        })).map((function(e) {
                            return p({}, e)
                        })).reduce(P, []).map(R).filter((function(e) {
                            return e
                        }))
                    }

                    function x(e, n) {
                        var t = w.concat(a.xc),
                            i = o.vc.getConfig("sendBidsControl.bidLimit"),
                            c = A(n, r.getHighestCpm, i),
                            s = o.vc.getConfig("targetingControls.allowSendAllBidsTargetingKeys"),
                            d = s ? s.map((function(e) {
                                return g.TD[e]
                            })) : t;
                        return c.map((function(n) {
                            if (u(n, e)) return v({}, n.adUnitCode, q(n, t.filter((function(e) {
                                return void 0 !== n.adserverTargeting[e] && -1 !== d.indexOf(e)
                            }))))
                        })).filter((function(e) {
                            return e
                        }))
                    }

                    function q(e, n) {
                        return n.map((function(n) {
                            return v({}, "".concat(n, "_").concat(e.bidderCode).substring(0, 20), [e.adserverTargeting[n]])
                        }))
                    }

                    function N(n) {
                        function t(e) {
                            return (0, i.Z)(e, g.k2.xn)
                        }
                        return e.getAdUnits().filter((function(e) {
                            return (0, l.q9)(n, e.code) && t(e)
                        })).map((function(e) {
                            return v({}, e.code, function(e) {
                                var n = t(e);
                                return Object.keys(n).map((function(e) {
                                    return (0, r.isStr)(n[e]) && (n[e] = n[e].split(",").map((function(e) {
                                        return e.trim()
                                    }))), (0, r.isArray)(n[e]) || (n[e] = [n[e]]), v({}, e, n[e])
                                }))
                            }(e))
                        }))
                    }
                    return n.setLatestAuctionForAdUnit = function(e, n) {
                        t[e] = n
                    }, n.resetPresetTargeting = function(n, t) {
                        if ((0, r.isGptPubadsDefined)()) {
                            var i = U(n),
                                o = e.getAdUnits().filter((function(e) {
                                    return (0, l.q9)(i, e.code)
                                })),
                                a = h.reduce((function(e, n) {
                                    return e[n] = null, e
                                }), {});
                            window.googletag.pubads().getSlots().forEach((function(e) {
                                var n = (0, r.isFn)(t) && t(e);
                                o.forEach((function(t) {
                                    (t.code === e.getAdUnitPath() || t.code === e.getSlotElementId() || (0, r.isFn)(n) && n(t.code)) && e.updateTargetingFromMap(a)
                                }))
                            }))
                        }
                    }, n.resetPresetTargetingAST = function(e) {
                        U(e).forEach((function(e) {
                            var n = window.apntag.getTag(e);
                            if (n && n.keywords) {
                                var t = Object.keys(n.keywords),
                                    r = {};
                                t.forEach((function(e) {
                                    (0, l.q9)(h, e.toLowerCase()) || (r[e] = n.keywords[e])
                                })), window.apntag.modifyTag(e, {
                                    keywords: r
                                })
                            }
                        }))
                    }, n.getAllTargeting = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
                            t = U(e),
                            i = j(t, n).concat(D(t, n)).concat(o.vc.getConfig("enableSendAllBids") ? x(t, n) : d(t, n)).concat(N(t));
                        i.map((function(e) {
                            Object.keys(e).map((function(n) {
                                e[n].map((function(e) {
                                    -1 === h.indexOf(Object.keys(e)[0]) && (h = Object.keys(e).concat(h))
                                }))
                            }))
                        }));
                        var a = Object.keys(p({}, g.kF, g.FY)),
                            u = o.vc.getConfig(m),
                            c = o.vc.getConfig(E);
                        if (null != c && null != u) throw new Error(C);
                        u = null != c ? a.concat(c) : u || a, Array.isArray(u) && u.length > 0 && (i = b(i, u)), i = O(i);
                        var s = o.vc.getConfig("targetingControls.auctionKeyMaxChars");
                        return s && ((0, r.logInfo)("Detected 'targetingControls.auctionKeyMaxChars' was active for this auction; set with a limit of ".concat(s, " characters.  Running checks on auction keys...")), i = T(i, s)), t.forEach((function(e) {
                            i[e] || (i[e] = {})
                        })), i
                    }, o.vc.getConfig("targetingControls", (function(e) {
                        null != (0, i.Z)(e, m) && null != (0, i.Z)(e, E) && (0, r.logError)(C)
                    })), n.setTargetingForGPT = function(e, n) {
                        window.googletag.pubads().getSlots().forEach((function(t) {
                            Object.keys(e).filter(n ? n(t) : (0, r.isAdUnitCodeMatchingSlot)(t)).forEach((function(n) {
                                Object.keys(e[n]).forEach((function(t) {
                                    var r = e[n][t];
                                    "string" == typeof r && -1 !== r.indexOf(",") && (r = r.split(",")), e[n][t] = r
                                })), (0, r.logMessage)("Attempting to set targeting-map for slot: ".concat(t.getSlotElementId(), " with targeting-map:"), e[n]), t.updateTargetingFromMap(e[n])
                            }))
                        }))
                    }, n.getWinningBids = function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : B(),
                            t = U(e);
                        return n.filter((function(e) {
                            return (0, l.q9)(t, e.adUnitCode)
                        })).filter((function(e) {
                            return !0 === f.S.get(e.bidderCode, "allowZeroCpmBids") ? e.cpm >= 0 : e.cpm > 0
                        })).map((function(e) {
                            return e.adUnitCode
                        })).filter(r.uniques).map((function(e) {
                            return n.filter((function(n) {
                                return n.adUnitCode === e ? n : null
                            })).reduce(r.getHighestCpm)
                        }))
                    }, n.setTargetingForAst = function(e) {
                        var t = n.getAllTargeting(e);
                        try {
                            n.resetPresetTargetingAST(e)
                        } catch (e) {
                            (0, r.logError)("unable to reset targeting for AST" + e)
                        }
                        Object.keys(t).forEach((function(e) {
                            return Object.keys(t[e]).forEach((function(n) {
                                if ((0, r.logMessage)("Attempting to set targeting for targetId: ".concat(e, " key: ").concat(n, " value: ").concat(t[e][n])), (0, r.isStr)(t[e][n]) || (0, r.isArray)(t[e][n])) {
                                    var i = {};
                                    n.search(/pt[0-9]/) < 0 ? i[n.toUpperCase()] = t[e][n] : i[n] = t[e][n], window.apntag.setKeywords(e, i, {
                                        overrideKeyValue: !0
                                    })
                                }
                            }))
                        }))
                    }, n.isApntagDefined = function() {
                        if (window.apntag && (0, r.isFn)(window.apntag.setKeywords)) return !0
                    }, n
                }(u.K)
            },
            7112: function(e, n, t) {
                "use strict";
                t.d(n, {
                    k_: function() {
                        return l
                    }
                });
                var r = t(9853),
                    i = t(8962),
                    o = t(1879),
                    a = t(5849);

                function u(e, n) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, n) {
                        var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != t) {
                            var r, i, o = [],
                                a = !0,
                                u = !1;
                            try {
                                for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                            } catch (e) {
                                u = !0, i = e
                            } finally {
                                try {
                                    a || null == t.return || t.return()
                                } finally {
                                    if (u) throw i
                                }
                            }
                            return o
                        }
                    }(e, n) || function(e, n) {
                        if (e) {
                            if ("string" == typeof e) return c(e, n);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? c(e, n) : void 0
                        }
                    }(e, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function c(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function s() {
                    return s = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, s.apply(this, arguments)
                }
                i.vc.setDefaults({
                    userSync: (0, r.deepClone)({
                        syncEnabled: !0,
                        filterSettings: {
                            image: {
                                bidders: "*",
                                filter: "include"
                            }
                        },
                        syncsPerBidder: 5,
                        syncDelay: 3e3,
                        auctionDelay: 0
                    })
                });
                var d = (0, a.eA)("usersync"),
                    f = !(0, r.isSafariBrowser)() && d.cookiesAreEnabled(),
                    l = function(e) {
                        var n = {},
                            t = {
                                image: [],
                                iframe: []
                            },
                            a = new Set,
                            c = {},
                            d = {
                                image: !0,
                                iframe: !1
                            },
                            f = e.config;

                        function l() {
                            if (f.syncEnabled && e.browserSupportsCookies) {
                                try {
                                    d.iframe && g(t.iframe, (function(e) {
                                        var n = u(e, 2),
                                            i = n[0],
                                            o = n[1];
                                        (0, r.logMessage)("Invoking iframe user sync for bidder: ".concat(i)), (0, r.insertUserSyncIframe)(o),
                                        function(e, n) {
                                            e.image = e.image.filter((function(e) {
                                                return e[0] !== n
                                            }))
                                        }(t, i)
                                    })), d.image && g(t.image, (function(e) {
                                        var n = u(e, 2),
                                            t = n[0],
                                            i = n[1];
                                        (0, r.logMessage)("Invoking image pixel user sync for bidder: ".concat(t)), (0, r.triggerPixel)(i)
                                    }))
                                } catch (e) {
                                    return (0, r.logError)("Error firing user syncs", e)
                                }
                                t = {
                                    image: [],
                                    iframe: []
                                }
                            }
                        }

                        function g(e, n) {
                            (0, r.shuffle)(e).forEach((function(e) {
                                n(e), a.add(e[0])
                            }))
                        }
                        return i.vc.getConfig("userSync", (function(e) {
                            if (e.userSync) {
                                var n = e.userSync.filterSettings;
                                (0, r.isPlainObject)(n) && (n.image || n.all || (e.userSync.filterSettings.image = {
                                    bidders: "*",
                                    filter: "include"
                                }))
                            }
                            f = s(f, e.userSync)
                        })), n.registerSync = function(e, i, o) {
                            return a.has(i) ? (0, r.logMessage)('already fired syncs for "'.concat(i, '", ignoring registerSync call')) : f.syncEnabled && (0, r.isArray)(t[e]) ? i ? 0 !== f.syncsPerBidder && Number(c[i]) >= f.syncsPerBidder ? (0, r.logWarn)('Number of user syncs exceeded for "'.concat(i, '"')) : n.canBidderRegisterSync(e, i) ? (t[e].push([i, o]), void(c = function(e, n) {
                                return e[n] ? e[n] += 1 : e[n] = 1, e
                            }(c, i))) : (0, r.logWarn)('Bidder "'.concat(i, '" not permitted to register their "').concat(e, '" userSync pixels.')) : (0, r.logWarn)("Bidder is required for registering sync") : (0, r.logWarn)('User sync type "'.concat(e, '" not supported'))
                        }, n.syncUsers = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            if (e) return setTimeout(l, Number(e));
                            l()
                        }, n.triggerUserSyncs = function() {
                            f.enableOverride && n.syncUsers()
                        }, n.canBidderRegisterSync = function(e, n) {
                            return !f.filterSettings || ! function(e, n) {
                                var t = f.filterSettings;
                                if (function(e, n) {
                                        if (e.all && e[n]) return (0, r.logWarn)('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(n, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                                        var t = e.all ? e.all : e[n],
                                            i = e.all ? "all" : n;
                                        if (!t) return !1;
                                        var o = t.filter,
                                            a = t.bidders;
                                        return o && "include" !== o && "exclude" !== o ? ((0, r.logWarn)('UserSync "filterSettings.'.concat(i, ".filter\" setting '").concat(o, "' is not a valid option; use either 'include' or 'exclude'.")), !1) : !!("*" === a || Array.isArray(a) && a.length > 0 && a.every((function(e) {
                                            return (0, r.isStr)(e) && "*" !== e
                                        }))) || ((0, r.logWarn)('Detected an invalid setup in userSync "filterSettings.'.concat(i, ".bidders\"; use either '*' (to represent all bidders) or an array of bidders.")), !1)
                                    }(t, e)) {
                                    d[e] = !0;
                                    var i = t.all ? t.all : t[e],
                                        a = "*" === i.bidders ? [n] : i.bidders,
                                        u = {
                                            include: function(e, n) {
                                                return !(0, o.q9)(e, n)
                                            },
                                            exclude: function(e, n) {
                                                return (0, o.q9)(e, n)
                                            }
                                        };
                                    return u[i.filter || "include"](a, n)
                                }
                                return !d[e]
                            }(e, n)
                        }, n
                    }({
                        config: i.vc.getConfig("userSync"),
                        browserSupportsCookies: f
                    })
            },
            9853: function(e, n, t) {
                "use strict";
                t.r(n), t.d(n, {
                    _each: function() {
                        return fe
                    },
                    _map: function() {
                        return ge
                    },
                    _setEventEmitter: function() {
                        return S
                    },
                    adUnitsFilter: function() {
                        return Ne
                    },
                    bind: function() {
                        return j
                    },
                    buildUrl: function() {
                        return wn
                    },
                    callBurl: function() {
                        return he
                    },
                    checkCookieSupport: function() {
                        return Ge
                    },
                    chunk: function() {
                        return vn
                    },
                    cleanObj: function() {
                        return sn
                    },
                    compareOn: function() {
                        return hn
                    },
                    contains: function() {
                        return le
                    },
                    convertCamelToUnderscore: function() {
                        return cn
                    },
                    convertTypes: function() {
                        return ln
                    },
                    createInvisibleIframe: function() {
                        return ee
                    },
                    createTrackPixelHtml: function() {
                        return Ce
                    },
                    createTrackPixelIframeHtml: function() {
                        return we
                    },
                    cyrb53Hash: function() {
                        return In
                    },
                    debugTurnedOn: function() {
                        return $
                    },
                    deepAccess: function() {
                        return c.Z
                    },
                    deepClone: function() {
                        return Me
                    },
                    deepEqual: function() {
                        return Sn
                    },
                    deepSetValue: function() {
                        return s.Z
                    },
                    delayExecution: function() {
                        return Ve
                    },
                    fill: function() {
                        return pn
                    },
                    flatten: function() {
                        return Ie
                    },
                    formatQS: function() {
                        return En
                    },
                    generateUUID: function() {
                        return _
                    },
                    getAdUnitSizes: function() {
                        return N
                    },
                    getBidIdParameter: function() {
                        return R
                    },
                    getBidRequest: function() {
                        return Te
                    },
                    getBidderCodes: function() {
                        return je
                    },
                    getDNT: function() {
                        return en
                    },
                    getDefinedParams: function() {
                        return Je
                    },
                    getGptSlotInfoForAdUnitCode: function() {
                        return on
                    },
                    getHighestCpm: function() {
                        return _e
                    },
                    getKeyByValue: function() {
                        return Be
                    },
                    getKeys: function() {
                        return Oe
                    },
                    getLatestHighestCpmBid: function() {
                        return De
                    },
                    getMaxValueFromArray: function() {
                        return bn
                    },
                    getMinValueFromArray: function() {
                        return yn
                    },
                    getOldestHighestCpmBid: function() {
                        return Re
                    },
                    getOrigin: function() {
                        return $e
                    },
                    getParameterByName: function() {
                        return ne
                    },
                    getPerformanceNow: function() {
                        return Ze
                    },
                    getPrebidInternal: function() {
                        return O
                    },
                    getUniqueIdentifierStr: function() {
                        return P
                    },
                    getUserConfiguredParams: function() {
                        return Xe
                    },
                    getValue: function() {
                        return Ue
                    },
                    getValueString: function() {
                        return Se
                    },
                    getWindowFromDocument: function() {
                        return Tn
                    },
                    getWindowLocation: function() {
                        return Z
                    },
                    getWindowSelf: function() {
                        return L
                    },
                    getWindowTop: function() {
                        return K
                    },
                    groupBy: function() {
                        return Qe
                    },
                    hasConsoleLogger: function() {
                        return X
                    },
                    hasDeviceAccess: function() {
                        return He
                    },
                    hasOwn: function() {
                        return pe
                    },
                    inIframe: function() {
                        return Fe
                    },
                    insertElement: function() {
                        return ve
                    },
                    insertHtmlIntoIframe: function() {
                        return me
                    },
                    insertUserSyncIframe: function() {
                        return Ee
                    },
                    internal: function() {
                        return I
                    },
                    isA: function() {
                        return te
                    },
                    isAdUnitCodeMatchingSlot: function() {
                        return tn
                    },
                    isApnGetTagDefined: function() {
                        return Pe
                    },
                    isArray: function() {
                        return oe
                    },
                    isArrayOfNums: function() {
                        return gn
                    },
                    isBoolean: function() {
                        return ce
                    },
                    isEmpty: function() {
                        return se
                    },
                    isEmptyStr: function() {
                        return de
                    },
                    isFn: function() {
                        return re
                    },
                    isGptPubadsDefined: function() {
                        return ke
                    },
                    isInteger: function() {
                        return un
                    },
                    isNumber: function() {
                        return ae
                    },
                    isPlainObject: function() {
                        return ue
                    },
                    isSafariBrowser: function() {
                        return We
                    },
                    isSlotMatchingAdUnitCode: function() {
                        return rn
                    },
                    isStr: function() {
                        return ie
                    },
                    isValidMediaTypes: function() {
                        return Ye
                    },
                    logError: function() {
                        return Q
                    },
                    logInfo: function() {
                        return G
                    },
                    logMessage: function() {
                        return H
                    },
                    logWarn: function() {
                        return V
                    },
                    mergeDeep: function() {
                        return An
                    },
                    parseGPTSingleSizeArray: function() {
                        return F
                    },
                    parseGPTSingleSizeArrayToRtbSize: function() {
                        return W
                    },
                    parseQS: function() {
                        return mn
                    },
                    parseQueryStringParameters: function() {
                        return x
                    },
                    parseSizesInput: function() {
                        return M
                    },
                    parseUrl: function() {
                        return Cn
                    },
                    pick: function() {
                        return dn
                    },
                    prefixLog: function() {
                        return J
                    },
                    replaceAuctionPrice: function() {
                        return ze
                    },
                    replaceClickThrough: function() {
                        return Ke
                    },
                    safeJSONParse: function() {
                        return On
                    },
                    shuffle: function() {
                        return qe
                    },
                    timestamp: function() {
                        return Le
                    },
                    transformAdServerTargetingObj: function() {
                        return q
                    },
                    transformBidderParamKeywords: function() {
                        return fn
                    },
                    triggerPixel: function() {
                        return be
                    },
                    tryAppendQueryString: function() {
                        return D
                    },
                    uniques: function() {
                        return Ae
                    },
                    unsupportedBidderMessage: function() {
                        return an
                    },
                    waitForElementToLoad: function() {
                        return ye
                    }
                });
                var r = t(8962),
                    i = t(7079),
                    o = t.n(i),
                    a = t(1879),
                    u = t(5644),
                    c = t(265),
                    s = t(4806);

                function d(e) {
                    return function(e) {
                        if (Array.isArray(e)) return l(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || f(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function f(e, n) {
                    if (e) {
                        if ("string" == typeof e) return l(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? l(e, n) : void 0
                    }
                }

                function l(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function g(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function p() {
                    return p = Object.assign || function(e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var t = arguments[n];
                            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                        }
                        return e
                    }, p.apply(this, arguments)
                }

                function v(e) {
                    return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, v(e)
                }
                var y, b = Object.prototype.toString,
                    h = Boolean(window.console),
                    m = Boolean(h && window.console.log),
                    E = Boolean(h && window.console.info),
                    C = Boolean(h && window.console.warn),
                    w = Boolean(h && window.console.error);

                function S(e) {
                    y = e
                }

                function A() {
                    null != y && y.apply(void 0, arguments)
                }
                var I = {
                        checkCookieSupport: Ge,
                        createTrackPixelIframeHtml: we,
                        getWindowSelf: L,
                        getWindowTop: K,
                        getWindowLocation: Z,
                        insertUserSyncIframe: Ee,
                        insertElement: ve,
                        isFn: re,
                        triggerPixel: be,
                        logError: Q,
                        logWarn: V,
                        logMessage: H,
                        logInfo: G,
                        parseQS: mn,
                        formatQS: En,
                        deepEqual: Sn
                    },
                    T = {};

                function O() {
                    return T
                }
                var U, B = {},
                    j = function(e, n) {
                        return n
                    }.bind(null, 1, B)() === B ? Function.prototype.bind : function(e) {
                        var n = this,
                            t = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            return n.apply(e, t.concat(Array.prototype.slice.call(arguments)))
                        }
                    },
                    k = (U = 0, function() {
                        return ++U
                    });

                function P() {
                    return k() + Math.random().toString(16).substr(2)
                }

                function _(e) {
                    return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, _)
                }

                function R(e, n) {
                    return n && n[e] ? n[e] : ""
                }

                function D(e, n, t) {
                    return t ? e + n + "=" + encodeURIComponent(t) + "&" : e
                }

                function x(e) {
                    var n = "";
                    for (var t in e) e.hasOwnProperty(t) && (n += t + "=" + encodeURIComponent(e[t]) + "&");
                    return n.replace(/&$/, "")
                }

                function q(e) {
                    return e && Object.getOwnPropertyNames(e).length > 0 ? Oe(e).map((function(n) {
                        return "".concat(n, "=").concat(encodeURIComponent(Ue(e, n)))
                    })).join("&") : ""
                }

                function N(e) {
                    if (e) {
                        var n = [];
                        if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                            var t = e.mediaTypes.banner.sizes;
                            Array.isArray(t[0]) ? n = t : n.push(t)
                        } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes));
                        return n
                    }
                }

                function M(e) {
                    var n = [];
                    if ("string" == typeof e) {
                        var t = e.split(","),
                            r = /^(\d)+x(\d)+$/i;
                        if (t)
                            for (var i in t) pe(t, i) && t[i].match(r) && n.push(t[i])
                    } else if ("object" === v(e)) {
                        var o = e.length;
                        if (o > 0)
                            if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) n.push(F(e));
                            else
                                for (var a = 0; a < o; a++) n.push(F(e[a]))
                    }
                    return n
                }

                function F(e) {
                    if (z(e)) return e[0] + "x" + e[1]
                }

                function W(e) {
                    if (z(e)) return {
                        w: e[0],
                        h: e[1]
                    }
                }

                function z(e) {
                    return oe(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])
                }

                function K() {
                    return window.top
                }

                function L() {
                    return window.self
                }

                function Z() {
                    return window.location
                }

                function H() {
                    $() && m && console.log.apply(console, Y(arguments, "MESSAGE:"))
                }

                function G() {
                    $() && E && console.info.apply(console, Y(arguments, "INFO:"))
                }

                function V() {
                    $() && C && console.warn.apply(console, Y(arguments, "WARNING:")), A(u.FP.AUCTION_DEBUG, {
                        type: "WARNING",
                        arguments: arguments
                    })
                }

                function Q() {
                    $() && w && console.error.apply(console, Y(arguments, "ERROR:")), A(u.FP.AUCTION_DEBUG, {
                        type: "ERROR",
                        arguments: arguments
                    })
                }

                function J(e) {
                    function n(n) {
                        return function() {
                            for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                            n.apply(void 0, [e].concat(r))
                        }
                    }
                    return {
                        logError: n(Q),
                        logWarn: n(V),
                        logMessage: n(H),
                        logInfo: n(G)
                    }
                }

                function Y(e, n) {
                    e = [].slice.call(e);
                    var t = r.vc.getCurrentBidder();
                    return n && e.unshift(n), t && e.unshift(i("#aaa")), e.unshift(i("#3b88c3")), e.unshift("%cPrebid" + (t ? "%c".concat(t) : "")), e;

                    function i(e) {
                        return "display: inline-block; color: #fff; background: ".concat(e, "; padding: 1px 4px; border-radius: 3px;")
                    }
                }

                function X() {
                    return m
                }

                function $() {
                    return !!r.vc.getConfig("debug")
                }

                function ee() {
                    var e = document.createElement("iframe");
                    return e.id = P(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
                }

                function ne(e) {
                    return mn(Z().search)[e] || ""
                }

                function te(e, n) {
                    return b.call(e) === "[object " + n + "]"
                }

                function re(e) {
                    return te(e, "Function")
                }

                function ie(e) {
                    return te(e, "String")
                }

                function oe(e) {
                    return te(e, "Array")
                }

                function ae(e) {
                    return te(e, "Number")
                }

                function ue(e) {
                    return te(e, "Object")
                }

                function ce(e) {
                    return te(e, "Boolean")
                }

                function se(e) {
                    if (!e) return !0;
                    if (oe(e) || ie(e)) return !(e.length > 0);
                    for (var n in e)
                        if (hasOwnProperty.call(e, n)) return !1;
                    return !0
                }

                function de(e) {
                    return ie(e) && (!e || 0 === e.length)
                }

                function fe(e, n) {
                    if (!se(e)) {
                        if (re(e.forEach)) return e.forEach(n, this);
                        var t = 0,
                            r = e.length;
                        if (r > 0)
                            for (; t < r; t++) n(e[t], t, e);
                        else
                            for (t in e) hasOwnProperty.call(e, t) && n.call(this, e[t], t)
                    }
                }

                function le(e, n) {
                    if (se(e)) return !1;
                    if (re(e.indexOf)) return -1 !== e.indexOf(n);
                    for (var t = e.length; t--;)
                        if (e[t] === n) return !0;
                    return !1
                }

                function ge(e, n) {
                    if (se(e)) return [];
                    if (re(e.map)) return e.map(n);
                    var t = [];
                    return fe(e, (function(r, i) {
                        t.push(n(r, i, e))
                    })), t
                }

                function pe(e, n) {
                    return e.hasOwnProperty ? e.hasOwnProperty(n) : void 0 !== e[n] && e.constructor.prototype[n] !== e[n]
                }

                function ve(e, n, t, r) {
                    var i;
                    n = n || document, i = t ? n.getElementsByTagName(t) : n.getElementsByTagName("head");
                    try {
                        if ((i = i.length ? i : n.getElementsByTagName("body")).length) {
                            i = i[0];
                            var o = r ? null : i.firstChild;
                            return i.insertBefore(e, o)
                        }
                    } catch (e) {}
                }

                function ye(e, n) {
                    var t = null;
                    return new Promise((function(r) {
                        var i = function n() {
                            e.removeEventListener("load", n), e.removeEventListener("error", n), null != t && window.clearTimeout(t), r()
                        };
                        e.addEventListener("load", i), e.addEventListener("error", i), null != n && (t = window.setTimeout(i, n))
                    }))
                }

                function be(e, n, t) {
                    var r = new Image;
                    n && I.isFn(n) && ye(r, t).then(n), r.src = e
                }

                function he(e) {
                    var n = e.source,
                        t = e.burl;
                    n === u.os.YZ && t && I.triggerPixel(t)
                }

                function me(e) {
                    if (e) {
                        var n = document.createElement("iframe");
                        n.id = P(), n.width = 0, n.height = 0, n.hspace = "0", n.vspace = "0", n.marginWidth = "0", n.marginHeight = "0", n.style.display = "none", n.style.height = "0px", n.style.width = "0px", n.scrolling = "no", n.frameBorder = "0", n.allowtransparency = "true", I.insertElement(n, document, "body"), n.contentWindow.document.open(), n.contentWindow.document.write(e), n.contentWindow.document.close()
                    }
                }

                function Ee(e, n, t) {
                    var r = I.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                        i = document.createElement("div");
                    i.innerHTML = r;
                    var o = i.firstChild;
                    n && I.isFn(n) && ye(o, t).then(n), I.insertElement(o, document, "html", !0)
                }

                function Ce(e) {
                    return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">' + '<img src="' + encodeURI(e) + '"></div>' : ""
                }

                function we(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    return e ? (n && (e = encodeURI(e)), t && (t = 'sandbox="'.concat(t, '"')), "<iframe ".concat(t, ' id="').concat(P(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : ""
                }

                function Se(e, n, t) {
                    return null == n ? t : ie(n) ? n : ae(n) ? n.toString() : void I.logWarn("Unsuported type for param: " + e + " required type: String")
                }

                function Ae(e, n, t) {
                    return t.indexOf(e) === n
                }

                function Ie(e, n) {
                    return e.concat(n)
                }

                function Te(e, n) {
                    var t;
                    if (e) return n.some((function(n) {
                        var r = (0, a.sE)(n.bids, (function(n) {
                            return ["bidId", "adId", "bid_id"].some((function(t) {
                                return n[t] === e
                            }))
                        }));
                        return r && (t = r), r
                    })), t
                }

                function Oe(e) {
                    return Object.keys(e)
                }

                function Ue(e, n) {
                    return e[n]
                }

                function Be(e, n) {
                    for (var t in e)
                        if (e.hasOwnProperty(t) && e[t] === n) return t
                }

                function je() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fusePbjs.adUnits;
                    return e.map((function(e) {
                        return e.bids.map((function(e) {
                            return e.bidder
                        })).reduce(Ie, [])
                    })).reduce(Ie, []).filter(Ae)
                }

                function ke() {
                    if (window.googletag && re(window.googletag.pubads) && re(window.googletag.pubads().getSlots)) return !0
                }

                function Pe() {
                    if (window.apntag && re(window.apntag.getTag)) return !0
                }
                var _e = xe("timeToRespond", (function(e, n) {
                        return e > n
                    })),
                    Re = xe("responseTimestamp", (function(e, n) {
                        return e > n
                    })),
                    De = xe("responseTimestamp", (function(e, n) {
                        return e < n
                    }));

                function xe(e, n) {
                    return function(t, r) {
                        return t.cpm === r.cpm ? n(t[e], r[e]) ? r : t : t.cpm < r.cpm ? r : t
                    }
                }

                function qe(e) {
                    for (var n = e.length; n > 0;) {
                        var t = Math.floor(Math.random() * n),
                            r = e[--n];
                        e[n] = e[t], e[t] = r
                    }
                    return e
                }

                function Ne(e, n) {
                    return (0, a.q9)(e, n && n.adUnitCode)
                }

                function Me(e) {
                    return o()(e)
                }

                function Fe() {
                    try {
                        return I.getWindowSelf() !== I.getWindowTop()
                    } catch (e) {
                        return !0
                    }
                }

                function We() {
                    return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent)
                }

                function ze(e, n) {
                    if (e) return e.replace(/\$\{AUCTION_PRICE\}/g, n)
                }

                function Ke(e, n) {
                    if (e && n && "string" == typeof n) return e.replace(/\${CLICKTHROUGH}/g, n)
                }

                function Le() {
                    return (new Date).getTime()
                }

                function Ze() {
                    return window.performance && window.performance.now && window.performance.now() || 0
                }

                function He() {
                    return !1 !== r.vc.getConfig("deviceAccess")
                }

                function Ge() {
                    if (window.navigator.cookieEnabled || document.cookie.length) return !0
                }

                function Ve(e, n) {
                    if (n < 1) throw new Error("numRequiredCalls must be a positive number. Got ".concat(n));
                    var t = 0;
                    return function() {
                        ++t === n && e.apply(this, arguments)
                    }
                }

                function Qe(e, n) {
                    return e.reduce((function(e, t) {
                        return (e[t[n]] = e[t[n]] || []).push(t), e
                    }), {})
                }

                function Je(e, n) {
                    return n.filter((function(n) {
                        return e[n]
                    })).reduce((function(n, t) {
                        return p(n, g({}, t, e[t]))
                    }), {})
                }

                function Ye(e) {
                    var n = ["banner", "native", "video"];
                    return !!Object.keys(e).every((function(e) {
                        return (0, a.q9)(n, e)
                    })) && (!e.video || !e.video.context || (0, a.q9)(["instream", "outstream", "adpod"], e.video.context))
                }

                function Xe(e, n, t) {
                    return e.filter((function(e) {
                        return e.code === n
                    })).map((function(e) {
                        return e.bids
                    })).reduce(Ie, []).filter((function(e) {
                        return e.bidder === t
                    })).map((function(e) {
                        return e.params || {}
                    }))
                }

                function $e() {
                    return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
                }

                function en() {
                    return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
                }
                var nn = function(e, n) {
                    return e.getAdUnitPath() === n || e.getSlotElementId() === n
                };

                function tn(e) {
                    return function(n) {
                        return nn(e, n)
                    }
                }

                function rn(e) {
                    return function(n) {
                        return nn(n, e)
                    }
                }

                function on(e) {
                    var n;
                    return ke() && (n = (0, a.sE)(window.googletag.pubads().getSlots(), rn(e))), n ? {
                        gptSlot: n.getAdUnitPath(),
                        divId: n.getSlotElementId()
                    } : {}
                }

                function an(e, n) {
                    var t = Object.keys(e.mediaTypes || {
                        banner: "banner"
                    }).join(", ");
                    return "\n    ".concat(e.code, " is a ").concat(t, " ad unit\n    containing bidders that don't support ").concat(t, ": ").concat(n, ".\n    This bidder won't fetch demand.\n  ")
                }

                function un(e) {
                    return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
                }

                function cn(e) {
                    return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, n) {
                        return "_" + n.toLowerCase()
                    })).replace(/^_/, "")
                }

                function sn(e) {
                    return Object.keys(e).reduce((function(n, t) {
                        return void 0 !== e[t] && (n[t] = e[t]), n
                    }), {})
                }

                function dn(e, n) {
                    return "object" !== v(e) ? {} : n.reduce((function(t, r, i) {
                        if ("function" == typeof r) return t;
                        var o = r,
                            a = r.match(/^(.+?)\sas\s(.+?)$/i);
                        a && (r = a[1], o = a[2]);
                        var u = e[r];
                        return "function" == typeof n[i + 1] && (u = n[i + 1](u, t)), void 0 !== u && (t[o] = u), t
                    }), {})
                }

                function fn(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "keywords",
                        t = [];
                    return fe(e, (function(e, r) {
                        if (oe(e)) {
                            var i = [];
                            fe(e, (function(e) {
                                ((e = Se(n + "." + r, e)) || "" === e) && i.push(e)
                            })), e = i
                        } else {
                            if (!ie(e = Se(n + "." + r, e))) return;
                            e = [e]
                        }
                        t.push({
                            key: r,
                            value: e
                        })
                    })), t
                }

                function ln(e, n) {
                    return Object.keys(e).forEach((function(t) {
                        var r, i;
                        n[t] && (re(e[t]) ? n[t] = e[t](n[t]) : n[t] = (r = e[t], i = n[t], "string" === r ? i && i.toString() : "number" === r ? Number(i) : i), isNaN(n[t]) && delete n.key)
                    })), n
                }

                function gn(e, n) {
                    return oe(e) && (!n || e.length === n) && e.every((function(e) {
                        return un(e)
                    }))
                }

                function pn(e, n) {
                    for (var t = [], r = 0; r < n; r++) {
                        var i = ue(e) ? Me(e) : e;
                        t.push(i)
                    }
                    return t
                }

                function vn(e, n) {
                    for (var t = [], r = 0; r < Math.ceil(e.length / n); r++) {
                        var i = r * n,
                            o = i + n;
                        t.push(e.slice(i, o))
                    }
                    return t
                }

                function yn(e) {
                    return Math.min.apply(Math, d(e))
                }

                function bn(e) {
                    return Math.max.apply(Math, d(e))
                }

                function hn(e) {
                    return function(n, t) {
                        return n[e] < t[e] ? 1 : n[e] > t[e] ? -1 : 0
                    }
                }

                function mn(e) {
                    return e ? e.replace(/^\?/, "").split("&").reduce((function(e, n) {
                        var t, r, i = (t = n.split("="), r = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(t) || function(e, n) {
                                var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != t) {
                                    var r, i, o = [],
                                        a = !0,
                                        u = !1;
                                    try {
                                        for (t = t.call(e); !(a = (r = t.next()).done) && (o.push(r.value), !n || o.length !== n); a = !0);
                                    } catch (e) {
                                        u = !0, i = e
                                    } finally {
                                        try {
                                            a || null == t.return || t.return()
                                        } finally {
                                            if (u) throw i
                                        }
                                    }
                                    return o
                                }
                            }(t, r) || f(t, r) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            o = i[0],
                            a = i[1];
                        return /\[\]$/.test(o) ? (e[o = o.replace("[]", "")] = e[o] || [], e[o].push(a)) : e[o] = a || "", e
                    }), {}) : {}
                }

                function En(e) {
                    return Object.keys(e).map((function(n) {
                        return Array.isArray(e[n]) ? e[n].map((function(e) {
                            return "".concat(n, "[]=").concat(e)
                        })).join("&") : "".concat(n, "=").concat(e[n])
                    })).join("&")
                }

                function Cn(e, n) {
                    var t = document.createElement("a");
                    n && "noDecodeWholeURL" in n && n.noDecodeWholeURL ? t.href = e : t.href = decodeURIComponent(e);
                    var r = n && "decodeSearchAsString" in n && n.decodeSearchAsString;
                    return {
                        href: t.href,
                        protocol: (t.protocol || "").replace(/:$/, ""),
                        hostname: t.hostname,
                        port: +t.port,
                        pathname: t.pathname.replace(/^(?!\/)/, "/"),
                        search: r ? t.search : I.parseQS(t.search || ""),
                        hash: (t.hash || "").replace(/^#/, ""),
                        host: t.host || window.location.host
                    }
                }

                function wn(e) {
                    return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":".concat(e.port) : "")) + (e.pathname || "") + (e.search ? "?".concat(I.formatQS(e.search || "")) : "") + (e.hash ? "#".concat(e.hash) : "")
                }

                function Sn(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = t.checkTypes,
                        i = void 0 !== r && r;
                    if (e === n) return !0;
                    if ("object" !== v(e) || null === e || "object" !== v(n) || null === n || i && e.constructor !== n.constructor) return !1;
                    if (Object.keys(e).length !== Object.keys(n).length) return !1;
                    for (var o in e) {
                        if (!n.hasOwnProperty(o)) return !1;
                        if (!Sn(e[o], n[o], {
                                checkTypes: i
                            })) return !1
                    }
                    return !0
                }

                function An(e) {
                    for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                    if (!t.length) return e;
                    var i = t.shift();
                    if (ue(e) && ue(i)) {
                        var o = function(n) {
                            ue(i[n]) ? (e[n] || p(e, g({}, n, {})), An(e[n], i[n])) : oe(i[n]) ? e[n] ? oe(e[n]) && i[n].forEach((function(t) {
                                for (var r = 1, i = 0; i < e[n].length; i++)
                                    if (Sn(e[n][i], t)) {
                                        r = 0;
                                        break
                                    }
                                r && e[n].push(t)
                            })) : p(e, g({}, n, d(i[n]))) : p(e, g({}, n, i[n]))
                        };
                        for (var a in i) o(a)
                    }
                    return An.apply(void 0, [e].concat(t))
                }

                function In(e) {
                    for (var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r = function(e, n) {
                            if (re(Math.imul)) return Math.imul(e, n);
                            var t = (4194303 & e) * (n |= 0);
                            return 4290772992 & e && (t += (4290772992 & e) * n | 0), 0 | t
                        }, i = 3735928559 ^ t, o = 1103547991 ^ t, a = 0; a < e.length; a++) i = r(i ^ (n = e.charCodeAt(a)), 2654435761), o = r(o ^ n, 1597334677);
                    return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString()
                }

                function Tn(e) {
                    return e ? e.defaultView : null
                }

                function On(e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {}
                }
            },
            9367: function(e, n, t) {
                "use strict";

                function r() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = e.promiseFactory,
                        t = void 0 === n ? function(e) {
                            return new Promise(e)
                        } : n,
                        r = {};

                    function i(e) {
                        return function(n) {
                            "function" == typeof r[e] ? r[e](n) : r[e] || (r[e] = !0, r[2] = n)
                        }
                    }
                    return {
                        promise: t((function(e, n) {
                            null != r[0] ? e(r[2]) : null != r[1] ? n(r[2]) : (r[0] = e, r[1] = n)
                        })),
                        resolve: i(0),
                        reject: i(1)
                    }
                }
                t.d(n, {
                    v: function() {
                        return r
                    }
                })
            },
            1929: function(e, n, t) {
                "use strict";
                t.d(n, {
                    Dn: function() {
                        return d
                    },
                    LD: function() {
                        return s
                    },
                    gZ: function() {
                        return c
                    },
                    hD: function() {
                        return f
                    }
                });
                var r = t(265),
                    i = t(9853),
                    o = t(8962),
                    a = t(3494),
                    u = t(4766),
                    c = "outstream",
                    s = "instream";

                function d(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        i = void 0 === t ? u.K.index : t,
                        o = (0, r.Z)(i.getMediaTypes(e), "video"),
                        a = o && (0, r.Z)(o, "context"),
                        c = i.getAdUnit(e);
                    return f(e, c, o, a)
                }
                var f = (0, a.z3)("sync", (function(e, n, t, r) {
                    return t && r !== c ? o.vc.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, i.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with fusePbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !!(e.renderer || n && n.renderer || t.renderer)
                }), "checkVideoBidSetup")
            },
            905: function(e, n, t) {
                "use strict";
                t.d(n, {
                    h: function() {
                        return c
                    },
                    z: function() {
                        return s
                    }
                });
                var r = t(5755),
                    i = t(8962),
                    o = t(4766);

                function a(e, n) {
                    var t = n ? "<![CDATA[".concat(n, "]]>") : "";
                    return '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(e, "]]></VASTAdTagURI>\n        <Impression>").concat(t, "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
                }

                function u(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = n.index,
                        r = void 0 === t ? o.K.index : t,
                        u = e.vastXml ? e.vastXml : a(e.vastUrl, e.vastImpUrl),
                        c = r.getAuction(e),
                        s = {
                            type: "xml",
                            value: u,
                            ttlseconds: Number(e.ttl)
                        };
                    return i.vc.getConfig("cache.vasttrack") && (s.bidder = e.bidder, s.bidid = e.requestId, s.aid = e.auctionId), null != c && (s.timestamp = c.getAuctionStart()), "string" == typeof e.customCacheKey && "" !== e.customCacheKey && (s.key = e.customCacheKey), s
                }

                function c(e, n) {
                    var t = {
                        puts: e.map(u)
                    };
                    (0, r.h)(i.vc.getConfig("cache.url"), function(e) {
                        return {
                            success: function(n) {
                                var t;
                                try {
                                    t = JSON.parse(n).responses
                                } catch (n) {
                                    return void e(n, [])
                                }
                                t ? e(null, t) : e(new Error("The cache server didn't respond with a responses property."), [])
                            },
                            error: function(n, t) {
                                e(new Error("Error storing video ad in the cache: ".concat(n, ": ").concat(JSON.stringify(t))), [])
                            }
                        }
                    }(n), JSON.stringify(t), {
                        contentType: "text/plain",
                        withCredentials: !0
                    })
                }

                function s(e) {
                    return "".concat(i.vc.getConfig("cache.url"), "?uuid=").concat(e)
                }
            },
            265: function(e, n, t) {
                "use strict";

                function r(e, n, t, r, i) {
                    for (n = n.split ? n.split(".") : n, r = 0; r < n.length; r++) e = e ? e[n[r]] : i;
                    return e === i ? t : e
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            4806: function(e, n, t) {
                "use strict";

                function r(e, n, t) {
                    n.split && (n = n.split("."));
                    for (var r, i = 0, o = n.length, a = e; i < o; ++i) r = a[n[i]], a = a[n[i]] = i === o - 1 ? t : null != r ? r : !~n[i + 1].indexOf(".") && +n[i + 1] > -1 ? [] : {}
                }
                t.d(n, {
                    Z: function() {
                        return r
                    }
                })
            },
            1432: function(e) {
                a.SYNC = 1, a.ASYNC = 2, a.QUEUE = 4;
                var n = Object.freeze({
                        useProxy: !0,
                        ready: 0
                    }),
                    t = new WeakMap,
                    r = "2,1,0" === [1].reduce((function(e, n, t) {
                        return [e, n, t]
                    }), 2).toString() ? Array.prototype.reduce : function(e, n) {
                        var t, r = Object(this),
                            i = r.length >>> 0,
                            o = 0;
                        if (n) t = n;
                        else {
                            for (; o < i && !(o in r);) o++;
                            t = r[o++]
                        }
                        for (; o < i;) o in r && (t = e(t, r[o], o, r)), o++;
                        return t
                    };

                function i(e, n) {
                    return Array.prototype.slice.call(e, n)
                }
                var o = Object.assign || function(e) {
                    return r.call(i(arguments, 1), (function(e, n) {
                        return n && Object.keys(n).forEach((function(t) {
                            e[t] = n[t]
                        })), e
                    }), e)
                };

                function a(e) {
                    var u, c = {},
                        s = [];

                    function d(e, n) {
                        return "function" == typeof e ? p.call(null, "sync", e, n) : "string" == typeof e && "function" == typeof n ? p.apply(null, arguments) : "object" == typeof e ? f.apply(null, arguments) : void 0
                    }

                    function f(e, n, t) {
                        var r = !0;
                        void 0 === n && (n = Object.getOwnPropertyNames(e), r = !1);
                        var i = {},
                            o = ["constructor"];
                        do {
                            (n = n.filter((function(n) {
                                return !("function" != typeof e[n] || -1 !== o.indexOf(n) || n.match(/^_/))
                            }))).forEach((function(n) {
                                var r = n.split(":"),
                                    o = r[0],
                                    a = r[1] || "sync";
                                if (!i[o]) {
                                    var u = e[o];
                                    i[o] = e[o] = p(a, u, t ? [t, o] : void 0)
                                }
                            })), e = Object.getPrototypeOf(e)
                        } while (r && e);
                        return i
                    }

                    function l(e) {
                        var n = Array.isArray(e) ? e : e.split(".");
                        return r.call(n, (function(t, r, i) {
                            var o = t[r],
                                a = !1;
                            return o || (i === n.length - 1 ? (u || s.push((function() {
                                a || console.warn("fun-hooks: referenced '" + e + "' but it was never created")
                            })), t[r] = g((function(e) {
                                t[r] = e, a = !0
                            }))) : t[r] = {})
                        }), c)
                    }

                    function g(e) {
                        var n = [],
                            r = [],
                            i = function() {},
                            a = {
                                before: function(e, t) {
                                    return c.call(this, n, "before", e, t)
                                },
                                after: function(e, n) {
                                    return c.call(this, r, "after", e, n)
                                },
                                getHooks: function(e) {
                                    var t = n.concat(r);
                                    "object" == typeof e && (t = t.filter((function(n) {
                                        return Object.keys(e).every((function(t) {
                                            return n[t] === e[t]
                                        }))
                                    })));
                                    try {
                                        o(t, {
                                            remove: function() {
                                                return t.forEach((function(e) {
                                                    e.remove()
                                                })), this
                                            }
                                        })
                                    } catch (e) {
                                        console.error("error adding `remove` to array, did you modify Array.prototype?")
                                    }
                                    return t
                                },
                                removeAll: function() {
                                    return this.getHooks().remove()
                                }
                            },
                            u = {
                                install: function(t, o, a) {
                                    this.type = t, i = a, a(n, r), e && e(o)
                                }
                            };
                        return t.set(a.after, u), a;

                        function c(e, t, o, a) {
                            var u = {
                                hook: o,
                                type: t,
                                priority: a || 10,
                                remove: function() {
                                    var t = e.indexOf(u); - 1 !== t && (e.splice(t, 1), i(n, r))
                                }
                            };
                            return e.push(u), e.sort((function(e, n) {
                                return n.priority - e.priority
                            })), i(n, r), this
                        }
                    }

                    function p(n, r, c) {
                        var d = r.after && t.get(r.after);
                        if (d) {
                            if (d.type !== n) throw "fun-hooks: recreated hookable with different type";
                            return r
                        }
                        var f, p, v = c ? l(c) : g(),
                            y = {
                                get: function(e, n) {
                                    return v[n] || Reflect.get.apply(Reflect, arguments)
                                }
                            };
                        return u || s.push(b), e.useProxy && "function" == typeof Proxy && Proxy.revocable ? p = new Proxy(r, y) : (p = function() {
                            return y.apply ? y.apply(r, this, i(arguments)) : r.apply(this, arguments)
                        }, o(p, v)), t.get(p.after).install(n, p, (function(e, t) {
                            var r, o = [];

                            function a(e) {
                                o.push(e.hook)
                            }
                            e.length || t.length ? (e.forEach(a), r = o.push(void 0) - 1, t.forEach(a), f = function(e, t, a) {
                                var u, c = 0,
                                    s = "async" === n && "function" == typeof a[a.length - 1] && a.pop();

                                function d(e) {
                                    "sync" === n ? u = e : s && s.apply(null, arguments)
                                }

                                function f(e) {
                                    if (o[c]) {
                                        var r = i(arguments);
                                        return f.bail = d, r.unshift(f), o[c++].apply(t, r)
                                    }
                                    "sync" === n ? u = e : s && s.apply(null, arguments)
                                }
                                return o[r] = function() {
                                    var r = i(arguments, 1);
                                    "async" === n && s && (delete f.bail, r.push(f));
                                    var o = e.apply(t, r);
                                    "sync" === n && f(o)
                                }, f.apply(null, a), u
                            }) : f = void 0, b()
                        })), p;

                        function b() {
                            !u && ("sync" !== n || e.ready & a.SYNC) && ("async" !== n || e.ready & a.ASYNC) ? "sync" !== n && e.ready & a.QUEUE ? y.apply = function() {
                                var e = arguments;
                                s.push((function() {
                                    p.apply(e[1], e[2])
                                }))
                            } : y.apply = function() {
                                throw "fun-hooks: hooked function not ready"
                            } : y.apply = f
                        }
                    }
                    return (e = o({}, n, e)).ready ? d.ready = function() {
                        u = !0,
                            function(e) {
                                for (var n; n = e.shift();) n()
                            }(s)
                    } : u = !0, d.get = l, d
                }
                e.exports = a
            },
            7079: function(e) {
                e.exports = function e(n) {
                    var t = Array.isArray(n) ? [] : {};
                    for (var r in n) {
                        var i = n[r];
                        t[r] = i && "object" == typeof i ? e(i) : i
                    }
                    return t
                }
            },
            5644: function(e) {
                "use strict";
                e.exports = JSON.parse('{"k2":{"xn":"adserverTargeting","zF":"standard"},"f":"pbjs_debug","Q_":{"GOOD":1,"NO_BID":2},"FP":{"AUCTION_INIT":"auctionInit","AUCTION_END":"auctionEnd","BID_ADJUSTMENT":"bidAdjustment","BID_TIMEOUT":"bidTimeout","BID_REQUESTED":"bidRequested","BID_RESPONSE":"bidResponse","NO_BID":"noBid","BID_WON":"bidWon","BIDDER_DONE":"bidderDone","BIDDER_ERROR":"bidderError","SET_TARGETING":"setTargeting","BEFORE_REQUEST_BIDS":"beforeRequestBids","BEFORE_BIDDER_HTTP":"beforeBidderHttp","REQUEST_BIDS":"requestBids","ADD_AD_UNITS":"addAdUnits","AD_RENDER_FAILED":"adRenderFailed","AD_RENDER_SUCCEEDED":"adRenderSucceeded","TCF2_ENFORCEMENT":"tcf2Enforcement","AUCTION_DEBUG":"auctionDebug","BID_VIEWABLE":"bidViewable","STALE_RENDER":"staleRender","BILLABLE_EVENT":"billableEvent"},"q_":{"PREVENT_WRITING_ON_MAIN_DOCUMENT":"preventWritingOnMainDocument","NO_AD":"noAd","EXCEPTION":"exception","CANNOT_FIND_AD":"cannotFindAd","MISSING_DOC_OR_ADID":"missingDocOrAdid"},"aI":{"bidWon":"adUnitCode"},"Ql":{"yE":"low","M2":"medium","lj":"high","B7":"auto","uN":"dense","qN":"custom"},"TD":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","SOURCE":"hb_source","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_ID":"hb_cache_id","CACHE_HOST":"hb_cache_host","ADOMAIN":"hb_adomain"},"kF":{"BIDDER":"hb_bidder","AD_ID":"hb_adid","PRICE_BUCKET":"hb_pb","SIZE":"hb_size","DEAL":"hb_deal","FORMAT":"hb_format","UUID":"hb_uuid","CACHE_HOST":"hb_cache_host"},"FY":{"title":"hb_native_title","body":"hb_native_body","body2":"hb_native_body2","privacyLink":"hb_native_privacy","privacyIcon":"hb_native_privicon","sponsoredBy":"hb_native_brand","image":"hb_native_image","icon":"hb_native_icon","clickUrl":"hb_native_linkurl","displayUrl":"hb_native_displayurl","cta":"hb_native_cta","rating":"hb_native_rating","address":"hb_native_address","downloads":"hb_native_downloads","likes":"hb_native_likes","phone":"hb_native_phone","price":"hb_native_price","salePrice":"hb_native_saleprice","rendererUrl":"hb_renderer_url","adTemplate":"hb_adTemplate"},"os":{"YZ":"s2s"},"UE":{"CK":"targetingSet","fe":"rendered","G9":"bidRejected"}}')
            }
        },
        t = {};

    function r(e) {
        var i = t[e];
        if (void 0 !== i) return i.exports;
        var o = t[e] = {
            exports: {}
        };
        return n[e].call(o.exports, o, o.exports, r), o.exports
    }
    r.m = n, e = [], r.O = function(n, t, i, o) {
            if (!t) {
                var a = 1 / 0;
                for (d = 0; d < e.length; d++) {
                    t = e[d][0], i = e[d][1], o = e[d][2];
                    for (var u = !0, c = 0; c < t.length; c++)(!1 & o || a >= o) && Object.keys(r.O).every((function(e) {
                        return r.O[e](t[c])
                    })) ? t.splice(c--, 1) : (u = !1, o < a && (a = o));
                    if (u) {
                        e.splice(d--, 1);
                        var s = i();
                        void 0 !== s && (n = s)
                    }
                }
                return n
            }
            o = o || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
            e[d] = [t, i, o]
        }, r.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return r.d(n, {
                a: n
            }), n
        }, r.d = function(e, n) {
            for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, {
                enumerable: !0,
                get: n[t]
            })
        }, r.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
        }, r.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        },
        function() {
            var e = {
                5602: 0
            };
            r.O.j = function(n) {
                return 0 === e[n]
            };
            var n = function(n, t) {
                    var i, o, a = t[0],
                        u = t[1],
                        c = t[2],
                        s = 0;
                    if (a.some((function(n) {
                            return 0 !== e[n]
                        }))) {
                        for (i in u) r.o(u, i) && (r.m[i] = u[i]);
                        if (c) var d = c(r)
                    }
                    for (n && n(t); s < a.length; s++) o = a[s], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return r.O(d)
                },
                t = self.fusePbjsChunk = self.fusePbjsChunk || [];
            t.forEach(n.bind(null, 0)), t.push = n.bind(null, t.push.bind(t))
        }();
    var i = r(2786);
    i = r.O(i)
}();
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [5301], {
        8612: function(e, t, n) {
            var r = n(1609),
                i = n(8265),
                o = n(9853),
                a = n(265),
                u = n(8962);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, d(e)
            }
            var p = (0, n(5849).df)({
                    gvlid: 737,
                    bidderCode: "amx"
                }),
                f = /\.com?\.\w{2,4}$/,
                m = /^\s*<\??(?:vast|xml)/i,
                b = "__amuidpb";

            function h(e, t) {
                return null == e ? [] : e.map(t).reduce((function(e, t) {
                    return null != t && e.concat(t)
                }), [])
            }
            var g = function(e, t) {
                return null == e || d(e) === t
            };

            function y(e) {
                var t = e.hostname.split("."),
                    n = t.slice(t.length - (f.test(e.hostname) ? 3 : 2)).join(".");
                return btoa(n).replace(/=+$/, "")
            }
            var v = encodeURIComponent;

            function w() {
                try {
                    return p.getDataFromLocalStorage(b)
                } catch (e) {
                    return null
                }
            }
            var O = function(e, t) {
                return (0, o.triggerPixel)("".concat("https://1x1.a-mo.net/hbx/", "g_").concat(e, "?").concat((0, o.formatQS)(s(s({}, t), {}, {
                    ts: Date.now(),
                    eid: (0, o.getUniqueIdentifierStr)()
                }))))
            };

            function j(e) {
                if (!(0, o.isFn)(e.getFloor)) return (0, a.Z)(e, "params.floor", 0);
                try {
                    return e.getFloor({
                        currency: "USD",
                        mediaType: "*",
                        size: "*",
                        bidRequest: e
                    }).floor
                } catch (e) {
                    return (0, o.logError)("call to getFloor failed: ", e), 0
                }
            }
            var I = {
                code: "amx",
                supportedMediaTypes: [i.Mk, i.pX],
                isBidRequestValid: function(e) {
                    return g((0, a.Z)(e, "params.endpoint", null), "string") && g((0, a.Z)(e, "params.tagId", null), "string")
                },
                buildRequests: function(e, t) {
                    var n, r, c, s, l = function(e) {
                            var t = e.refererInfo;
                            if (null == t) return (0, o.parseUrl)(location.href);
                            if (t.isAmp && null != t.referer) return (0, o.parseUrl)(t.referer);
                            var n = t.numIframes > 0 && null != t.stack[0] ? t.stack[0] : location.href;
                            return (0, o.parseUrl)(n)
                        }(t),
                        d = (0, a.Z)(e[0], "params.tagId", null),
                        p = (0, a.Z)(e[0], "params.testMode", 0),
                        f = null != e[0] ? e[0] : {
                            bidderRequestsCount: 0,
                            bidderWinsCount: 0,
                            bidRequestsCount: 0
                        };
                    return {
                        data: {
                            a: t.auctionId,
                            B: 0,
                            b: l.host,
                            brc: f.bidderRequestsCount || 0,
                            bwc: f.bidderWinsCount || 0,
                            trc: f.bidRequestsCount || 0,
                            tm: (r = p, !0 === r || 1 === r || "true" === r),
                            V: "6.27.0",
                            vg: "fusePbjs",
                            i: p && null != d ? d : y(l),
                            l: {},
                            f: .01,
                            cv: "pba1.3.1",
                            st: "prebid",
                            h: screen.height,
                            w: screen.width,
                            gs: (0, a.Z)(t, "gdprConsent.gdprApplies", ""),
                            gc: (0, a.Z)(t, "gdprConsent.consentString", ""),
                            u: (0, a.Z)(t, "refererInfo.canonicalUrl", l.href),
                            do: l.hostname,
                            re: (0, a.Z)(t, "refererInfo.referer"),
                            am: w(),
                            usp: t.uspConsent || "1---",
                            smt: 1,
                            d: "",
                            m: (c = e, s = {}, (0, o._each)(c, (function(e) {
                                s[e.bidId] = function(e) {
                                    var t, n, r, o = (n = e.sizes, r = e.mediaTypes, n.concat((0, a.Z)(r, "".concat(i.Mk, ".sizes"), []) || []).concat((0, a.Z)(r, "".concat(i.pX, ".sizes"), []) || []).sort((function(e, t) {
                                            return t[0] * t[1] - e[0] * e[1]
                                        }))[0] || [0, 0]),
                                        u = e.mediaType === i.pX || i.pX in e.mediaTypes,
                                        c = u || o[1] > 100,
                                        s = (0, a.Z)(e, "params.tagId"),
                                        l = null != e.params && "string" == typeof e.params.adUnitId ? e.params.adUnitId : e.adUnitCode,
                                        d = [e.sizes, (0, a.Z)(e, "mediaTypes.".concat(i.Mk, ".sizes"), []) || [], (0, a.Z)(e, "mediaTypes.".concat(i.pX, ".sizes"), []) || []],
                                        p = {
                                            au: l,
                                            av: c,
                                            vd: (0, a.Z)(e, "mediaTypes.".concat(i.pX), {}) || {},
                                            vr: u,
                                            ms: d,
                                            aw: o[0],
                                            ah: o[1],
                                            tf: 0,
                                            sc: e.schain || {},
                                            f: (t = j(e), "number" == typeof t && isFinite(t) && t > 0 ? t : 0)
                                        };
                                    return "string" == typeof s && s.length > 0 && (p.i = s), p
                                }(e)
                            })), s),
                            cpp: u.vc.getConfig("coppa") ? 1 : 0,
                            fpd2: u.vc.getConfig("ortb2"),
                            tmax: u.vc.getConfig("bidderTimeout"),
                            eids: (n = e.reduce((function(e, t) {
                                return null == t || null == t.userIdAsEids || (0, o._each)(t.userIdAsEids, (function(t) {
                                    null != t && (e[t.source] = t)
                                })), e
                            }), {}), null != Object.values ? Object.values(n) : Object.keys(n).map((function(e) {
                                return n[e]
                            })))
                        },
                        method: "POST",
                        url: (0, a.Z)(e[0], "params.endpoint", "https://prebid.a-mo.net/a/c"),
                        withCredentials: !0
                    }
                },
                getUserSyncs: function(e, t) {
                    if (null == t || 0 === t.length) return [];
                    var n = [];
                    return (0, o._each)(t, (function(t) {
                        var r = t.body;
                        null != r && null != r.p && r.p.hreq && (0, o._each)(r.p.hreq, (function(t) {
                            var r = -1 !== t.indexOf("__st=iframe") ? "iframe" : "image";
                            (e.iframeEnabled || "image" === r) && n.push({
                                url: t,
                                type: r
                            })
                        }))
                    })), n
                },
                interpretResponse: function(e, t) {
                    var n = e.body;
                    return null == n || "string" == typeof n ? [] : (n.am && "string" == typeof n.am && function(e) {
                        try {
                            p.setDataInLocalStorage(b, e)
                        } catch (e) {}
                    }(n.am), h(Object.keys(n.r), (function(e) {
                        return h(n.r[e], (function(n) {
                            return n.b.map((function(n) {
                                var r, o = function(e) {
                                        return null != (t = e.adm) && m.test(t) ? i.pX : i.Mk;
                                        var t
                                    }(n),
                                    u = o === i.Mk ? function(e) {
                                        var t = (0, a.Z)(e, "ext.himp", []).concat(null != e.nurl ? [e.nurl] : []).filter((function(e) {
                                            return null != e && e.length > 0
                                        })).map((function(e) {
                                            return '<img src="'.concat(e, '" width="0" height="0"/>')
                                        })).join("");
                                        return e.adm + t
                                    }(n) : n.adm;
                                if (null == u) return null;
                                var c = function(e, t, n) {
                                        if (null != e.w && e.w > 1 && null != e.h && e.h > 1) return [e.w, e.h];
                                        var r = t.m[n];
                                        return null == r ? [0, 0] : [r.aw, r.ah]
                                    }(n, t.data, e),
                                    s = o === i.Mk ? 240 : 300;
                                return l(r = {
                                    requestId: e,
                                    cpm: n.price,
                                    width: c[0],
                                    height: c[1],
                                    creativeId: n.crid,
                                    currency: "USD",
                                    netRevenue: !0
                                }, o === i.pX ? "vastXml" : "ad", u), l(r, "meta", {
                                    advertiserDomains: n.adomain,
                                    mediaType: o
                                }), l(r, "mediaType", o), l(r, "ttl", "number" == typeof n.exp ? n.exp : s), r
                            }))
                        })).filter((function(e) {
                            return null != e
                        }))
                    })))
                },
                onSetTargeting: function(e) {
                    var t, n;
                    null != e && O("pbst", {
                        A: e.bidder,
                        w: e.width,
                        h: e.height,
                        bid: e.adId,
                        c1: e.mediaType,
                        np: e.cpm,
                        aud: e.requestId,
                        a: e.adUnitCode,
                        c2: (t = e.adserverTargeting, n = [], Object.keys(t || {}).forEach((function(e) {
                            n.push(v(e) + "=" + v(String(t[e])))
                        })), v(n.join("&")))
                    })
                },
                onTimeout: function(e) {
                    null != e && O("pbto", {
                        A: e.bidder,
                        bid: e.bidId,
                        a: e.adUnitCode,
                        cn: e.timeout,
                        aud: e.auctionId
                    })
                },
                onBidWon: function(e) {
                    null != e && O("pbwin", {
                        A: e.bidder,
                        w: e.width,
                        h: e.height,
                        bid: e.adId,
                        C: e.mediaType === i.Mk ? 0 : 1,
                        np: e.cpm,
                        a: e.adUnitCode
                    })
                }
            };
            (0, r.dX)(I), window.fusePbjs.installedModules.push("amxBidAdapter")
        }
    },
    function(e) {
        e(e.s = 8612)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [3864], {
        3231: function(e, r, a) {
            a.d(r, {
                p: function() {
                    return S
                }
            });
            var t = a(9853),
                n = a(265),
                i = a(4877),
                s = a(8962),
                o = a(1609),
                d = a(8265),
                p = a(4766),
                u = a(1879),
                c = a(1929),
                l = a(5849),
                m = a(9624);

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function v() {
                return v = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var a = arguments[r];
                        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }, v.apply(this, arguments)
            }

            function y(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return g(e, r);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === a && e.constructor && (a = e.constructor.name), "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? g(e, r) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var a = 0, t = new Array(r); a < r; a++) t[a] = e[a];
                return t
            }
            var b = "appnexus",
                h = ["id", "minduration", "maxduration", "skippable", "playback_method", "frameworks", "context", "skipoffset"],
                _ = ["minduration", "maxduration", "skip", "skipafter", "playbackmethod", "api"],
                k = ["age", "externalUid", "segments", "gender", "dnt", "language"],
                I = ["geo", "device_id"],
                w = ["enabled", "dongle", "member_id", "debug_timeout"],
                C = {
                    playback_method: {
                        unknown: 0,
                        auto_play_sound_on: 1,
                        auto_play_sound_off: 2,
                        click_to_play: 3,
                        mouse_over: 4,
                        auto_play_sound_unknown: 5
                    },
                    context: {
                        unknown: 0,
                        pre_roll: 1,
                        mid_roll: 2,
                        post_roll: 3,
                        outstream: 4,
                        "in-banner": 5
                    }
                },
                x = {
                    body: "description",
                    body2: "desc2",
                    cta: "ctatext",
                    image: {
                        serverName: "main_image",
                        requiredParams: {
                            required: !0
                        }
                    },
                    icon: {
                        serverName: "icon",
                        requiredParams: {
                            required: !0
                        }
                    },
                    sponsoredBy: "sponsored_by",
                    privacyLink: "privacy_link",
                    salePrice: "saleprice",
                    displayUrl: "displayurl"
                },
                E = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/,
                A = (0, l.df)({
                    gvlid: 32,
                    bidderCode: b
                }),
                S = {
                    code: b,
                    gvlid: 32,
                    aliases: [{
                        code: "appnexusAst",
                        gvlid: 32
                    }, {
                        code: "brealtime"
                    }, {
                        code: "emxdigital",
                        gvlid: 183
                    }, {
                        code: "pagescience"
                    }, {
                        code: "defymedia"
                    }, {
                        code: "gourmetads"
                    }, {
                        code: "matomy"
                    }, {
                        code: "featureforward"
                    }, {
                        code: "oftmedia"
                    }, {
                        code: "districtm",
                        gvlid: 144
                    }, {
                        code: "adasta"
                    }, {
                        code: "beintoo",
                        gvlid: 618
                    }],
                    supportedMediaTypes: [d.Mk, d.pX, d.B5],
                    isBidRequestValid: function(e) {
                        return !!(e.params.placementId || e.params.member && e.params.invCode)
                    },
                    buildRequests: function(e, r) {
                        var a = e.map(R),
                            i = (0, u.sE)(e, q),
                            o = {};
                        !0 === s.vc.getConfig("coppa") && (o = {
                            coppa: !0
                        }), i && Object.keys(i.params.user).filter((function(e) {
                            return (0, u.q9)(k, e)
                        })).forEach((function(e) {
                            var r = (0, t.convertCamelToUnderscore)(e);
                            if ("segments" === e && (0, t.isArray)(i.params.user[e])) {
                                var a = [];
                                i.params.user[e].forEach((function(e) {
                                    (0, t.isNumber)(e) ? a.push({
                                        id: e
                                    }): (0, t.isPlainObject)(e) && a.push(e)
                                })), o[r] = a
                            } else "segments" !== e && (o[r] = i.params.user[e])
                        }));
                        var d, p = (0, u.sE)(e, N);
                        p && p.params && p.params.app && (d = {}, Object.keys(p.params.app).filter((function(e) {
                            return (0, u.q9)(I, e)
                        })).forEach((function(e) {
                            return d[e] = p.params.app[e]
                        })));
                        var c, l = (0, u.sE)(e, M);
                        l && l.params && p.params.app && p.params.app.id && (c = {
                            appid: l.params.app.id
                        });
                        var m = {},
                            f = {},
                            v = A.getCookie("apn_prebid_debug") || null;
                        if (v) try {
                            m = JSON.parse(v)
                        } catch (e) {
                            (0, t.logError)("AppNexus Debug Auction Cookie Error:\n\n" + e)
                        } else {
                            var g = (0, u.sE)(e, Z);
                            g && g.debug && (m = g.debug)
                        }
                        m && m.enabled && Object.keys(m).filter((function(e) {
                            return (0, u.q9)(w, e)
                        })).forEach((function(e) {
                            f[e] = m[e]
                        }));
                        var b = (0, u.sE)(e, B),
                            h = b ? parseInt(b.params.member, 10) : 0,
                            _ = e[0].schain,
                            C = (0, u.sE)(e, z),
                            x = {
                                tags: y(a),
                                user: o,
                                sdk: {
                                    source: "pbjs",
                                    version: "6.27.0"
                                },
                                schain: _
                            };
                        C && (x.iab_support = {
                            omidpn: "Appnexus",
                            omidpv: "6.27.0"
                        }), h > 0 && (x.member_id = h), p && (x.device = d), l && (x.app = c);
                        var E = s.vc.getConfig("appnexusAuctionKeywords");
                        if ((0, t.isPlainObject)(E)) {
                            var S = (0, t.transformBidderParamKeywords)(E);
                            S.length > 0 && S.forEach(P), x.keywords = S
                        }
                        if (s.vc.getConfig("adpod.brandCategoryExclusion") && (x.brand_category_uniqueness = !0), f.enabled && (x.debug = f, (0, t.logInfo)("AppNexus Debug Auction Settings:\n\n" + JSON.stringify(f, null, 4))), r && r.gdprConsent && (x.gdpr_consent = {
                                consent_string: r.gdprConsent.consentString,
                                consent_required: r.gdprConsent.gdprApplies
                            }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf("~"))) {
                            var T = r.gdprConsent.addtlConsent,
                                O = T.substring(T.indexOf("~") + 1);
                            x.gdpr_consent.addtl_consent = O.split(".").map((function(e) {
                                return parseInt(e, 10)
                            }))
                        }
                        if (r && r.uspConsent && (x.us_privacy = r.uspConsent), r && r.refererInfo) {
                            var U = {
                                    rd_ref: encodeURIComponent(r.refererInfo.referer),
                                    rd_top: r.refererInfo.reachedTop,
                                    rd_ifs: r.refererInfo.numIframes,
                                    rd_stk: r.refererInfo.stack.map((function(e) {
                                        return encodeURIComponent(e)
                                    })).join(",")
                                },
                                F = s.vc.getConfig("pageUrl");
                            (0, t.isStr)(F) && "" !== F && (U.rd_can = F), x.referrer_detection = U
                        }
                        if ((0, u.sE)(e, D) && e.filter(D).forEach((function(e) {
                                var r = function(e, r) {
                                        var a = r.mediaTypes.video,
                                            n = a.durationRangeSec,
                                            i = a.requireExactDuration,
                                            s = function(e) {
                                                var r = e.adPodDurationSec,
                                                    a = e.durationRangeSec,
                                                    n = e.requireExactDuration,
                                                    i = (0, t.getMinValueFromArray)(a),
                                                    s = Math.floor(r / i);
                                                return n ? Math.max(s, a.length) : s
                                            }(r.mediaTypes.video),
                                            o = (0, t.getMaxValueFromArray)(n),
                                            d = e.filter((function(e) {
                                                return e.uuid === r.bidId
                                            })),
                                            p = t.fill.apply(void 0, y(d).concat([s]));
                                        if (i) {
                                            var u = Math.ceil(s / n.length),
                                                c = (0, t.chunk)(p, u);
                                            n.forEach((function(e, r) {
                                                c[r].map((function(r) {
                                                    X(r, "minduration", e), X(r, "maxduration", e)
                                                }))
                                            }))
                                        } else p.map((function(e) {
                                            return X(e, "maxduration", o)
                                        }));
                                        return p
                                    }(a, e),
                                    n = x.tags.filter((function(r) {
                                        return r.uuid !== e.bidId
                                    }));
                                x.tags = [].concat(y(n), y(r))
                            })), e[0].userId) {
                            var V = [];
                            K(V, (0, n.Z)(e[0], "userId.flocId.id"), "chrome.com", null), K(V, (0, n.Z)(e[0], "userId.criteoId"), "criteo.com", null), K(V, (0, n.Z)(e[0], "userId.netId"), "netid.de", null), K(V, (0, n.Z)(e[0], "userId.idl_env"), "liveramp.com", null), K(V, (0, n.Z)(e[0], "userId.tdid"), "adserver.org", "TDID"), K(V, (0, n.Z)(e[0], "userId.uid2.id"), "uidapi.com", "UID2"), e[0].userId.pubProvidedId && e[0].userId.pubProvidedId.forEach((function(e) {
                                e.uids.forEach((function(r) {
                                    V.push({
                                        source: e.source,
                                        id: r.id
                                    })
                                }))
                            })), V.length && (x.eids = V)
                        }
                        a[0].publisher_id && (x.publisher_id = a[0].publisher_id);
                        var W = function(e, r) {
                            var a = [],
                                n = {
                                    withCredentials: !0
                                },
                                i = "https://ib.adnxs.com/ut/v3/prebid";
                            if (j(r) || (i = "https://ib.adnxs-simple.com/ut/v3/prebid"), "TRUE" !== (0, t.getParameterByName)("apn_test").toUpperCase() && !0 !== s.vc.getConfig("apn_test") || (n.customHeaders = {
                                    "X-Is-Test": 1
                                }), e.tags.length > 15) {
                                var o = (0, t.deepClone)(e);
                                (0, t.chunk)(e.tags, 15).forEach((function(e) {
                                    o.tags = e;
                                    var t = JSON.stringify(o);
                                    a.push({
                                        method: "POST",
                                        url: i,
                                        data: t,
                                        bidderRequest: r,
                                        options: n
                                    })
                                }))
                            } else {
                                var d = JSON.stringify(e);
                                a = {
                                    method: "POST",
                                    url: i,
                                    data: d,
                                    bidderRequest: r,
                                    options: n
                                }
                            }
                            return a
                        }(x, r);
                        return W
                    },
                    interpretResponse: function(e, r) {
                        var a = this,
                            s = r.bidderRequest;
                        e = e.body;
                        var p = [];
                        if (!e || e.error) {
                            var l = "in response for ".concat(s.bidderCode, " adapter");
                            return e && e.error && (l += ": ".concat(e.error)), (0, t.logError)(l), p
                        }
                        if (e.tags && e.tags.forEach((function(e) {
                                var r, l = (r = e) && r.ads && r.ads.length && (0, u.sE)(r.ads, (function(e) {
                                    return e.rtb
                                }));
                                if (l && (!0 === m.S.get(s.bidderCode, "allowZeroCpmBids") ? l.cpm >= 0 : l.cpm > 0) && (0, u.q9)(a.supportedMediaTypes, l.ad_type)) {
                                    var f = function(e, r, a) {
                                        var s = (0, t.getBidRequest)(e.uuid, [a]),
                                            p = {
                                                requestId: e.uuid,
                                                cpm: r.cpm,
                                                creativeId: r.creative_id,
                                                dealId: r.deal_id,
                                                currency: "USD",
                                                netRevenue: !0,
                                                ttl: 300,
                                                adUnitCode: s.adUnitCode,
                                                appnexus: {
                                                    buyerMemberId: r.buyer_member_id,
                                                    dealPriority: r.deal_priority,
                                                    dealCode: r.deal_code
                                                }
                                            };
                                        if (r.adomain && (p.meta = v({}, p.meta, {
                                                advertiserDomains: []
                                            })), r.advertiser_id && (p.meta = v({}, p.meta, {
                                                advertiserId: r.advertiser_id
                                            })), r.buyer_member_id && (p.meta = v({}, p.meta, {
                                                dchain: function(e) {
                                                    return {
                                                        ver: "1.0",
                                                        complete: 0,
                                                        nodes: [{
                                                            bsid: e.buyer_member_id.toString()
                                                        }]
                                                    }
                                                }(r)
                                            })), r.brand_id && (p.meta = v({}, p.meta, {
                                                brandId: r.brand_id
                                            })), r.rtb.video) switch (v(p, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        }), (0, n.Z)(s, "mediaTypes.video.context")) {
                                            case d.Oh:
                                                var l = (0, o.Q1)(s.bidder, r.brand_category_id);
                                                p.meta = v({}, p.meta, {
                                                    primaryCatId: l
                                                });
                                                var m = r.deal_priority;
                                                p.video = {
                                                    context: d.Oh,
                                                    durationSeconds: Math.floor(r.rtb.video.duration_ms / 1e3),
                                                    dealTier: m
                                                }, p.vastUrl = r.rtb.video.asset_url;
                                                break;
                                            case c.gZ:
                                                if (p.adResponse = e, p.adResponse.ad = p.adResponse.ads[0], p.adResponse.ad.video = p.adResponse.ad.rtb.video, p.vastXml = r.rtb.video.content, r.renderer_url) {
                                                    var f = (0, u.sE)(a.bids, (function(r) {
                                                            return r.bidId === e.uuid
                                                        })),
                                                        y = (0, n.Z)(f, "mediaTypes.video.renderer.options");
                                                    y || (y = (0, n.Z)(f, "renderer.options")), p.renderer = function(e, r) {
                                                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                            n = i.Th.install({
                                                                id: r.renderer_id,
                                                                url: r.renderer_url,
                                                                config: a,
                                                                loaded: !1,
                                                                adUnitCode: e
                                                            });
                                                        try {
                                                            n.setRender(F)
                                                        } catch (e) {
                                                            (0, t.logWarn)("Prebid Error calling setRender on renderer", e)
                                                        }
                                                        return n.setEventHandlers({
                                                            impression: function() {
                                                                return (0, t.logMessage)("AppNexus outstream video impression event")
                                                            },
                                                            loaded: function() {
                                                                return (0, t.logMessage)("AppNexus outstream video loaded event")
                                                            },
                                                            ended: function() {
                                                                (0, t.logMessage)("AppNexus outstream renderer video event"), document.querySelector("#".concat(e)).style.display = "none"
                                                            }
                                                        }), n
                                                    }(p.adUnitCode, r, y)
                                                }
                                                break;
                                            case c.LD:
                                                p.vastUrl = r.notify_url + "&redir=" + encodeURIComponent(r.rtb.video.asset_url)
                                        } else if (r.rtb[d.B5]) {
                                            var g = r.rtb[d.B5],
                                                b = r.viewability.config.replace("src=", "data-src="),
                                                h = g.javascript_trackers;
                                            null == h ? h = b : (0, t.isStr)(h) ? h = [h, b] : h.push(b), p[d.B5] = {
                                                title: g.title,
                                                body: g.desc,
                                                body2: g.desc2,
                                                cta: g.ctatext,
                                                rating: g.rating,
                                                sponsoredBy: g.sponsored,
                                                privacyLink: g.privacy_link,
                                                address: g.address,
                                                downloads: g.downloads,
                                                likes: g.likes,
                                                phone: g.phone,
                                                price: g.price,
                                                salePrice: g.saleprice,
                                                clickUrl: g.link.url,
                                                displayUrl: g.displayurl,
                                                clickTrackers: g.link.click_trackers,
                                                impressionTrackers: g.impression_trackers,
                                                javascriptTrackers: h
                                            }, g.main_img && (p.native.image = {
                                                url: g.main_img.url,
                                                height: g.main_img.height,
                                                width: g.main_img.width
                                            }), g.icon && (p.native.icon = {
                                                url: g.icon.url,
                                                height: g.icon.height,
                                                width: g.icon.width
                                            })
                                        } else {
                                            v(p, {
                                                width: r.rtb.banner.width,
                                                height: r.rtb.banner.height,
                                                ad: r.rtb.banner.content
                                            });
                                            try {
                                                if (r.rtb.trackers)
                                                    for (var _ = 0; _ < r.rtb.trackers[0].impression_urls.length; _++) {
                                                        var k = r.rtb.trackers[0].impression_urls[_],
                                                            I = (0, t.createTrackPixelHtml)(k);
                                                        p.ad += I
                                                    }
                                            } catch (e) {
                                                (0, t.logError)("Error appending tracking pixel", e)
                                            }
                                        }
                                        return p
                                    }(e, l, s);
                                    f.mediaType = function(e) {
                                        var r = e.ad_type;
                                        return r === d.pX ? d.pX : r === d.B5 ? d.B5 : d.Mk
                                    }(l), p.push(f)
                                }
                            })), e.debug && e.debug.debug_info) {
                            var f = "AppNexus Debug Auction for Prebid\n\n" + e.debug.debug_info;
                            f = f.replace(/(<td>|<th>)/gm, "\t").replace(/(<\/td>|<\/th>)/gm, "\n").replace(/^<br>/gm, "").replace(/(<br>\n|<br>)/gm, "\n").replace(/<h1>(.*)<\/h1>/gm, "\n\n===== $1 =====\n\n").replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, "\n\n*** $1 ***\n\n").replace(/(<([^>]+)>)/gim, ""), (0, t.logMessage)("https://console.appnexus.com/docs/understanding-the-debug-auction"), (0, t.logMessage)(f)
                        }
                        return p
                    },
                    getMappingFileInfo: function() {
                        return {
                            url: "https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json",
                            refreshInDays: 2
                        }
                    },
                    getUserSyncs: function(e, r, a) {
                        if (e.iframeEnabled && j({
                                gdprConsent: a
                            })) return [{
                            type: "iframe",
                            url: "https://acdn.adnxs.com/dmp/async_usersync.html"
                        }]
                    },
                    transformBidParams: function(e, r, a, i) {
                        var o = t.transformBidderParamKeywords;
                        if (!0 === r) {
                            var d = null,
                                p = s.vc.getConfig("s2sConfig");
                            (0, t.isPlainObject)(p) ? d = (0, n.Z)(p, "endpoint.p1Consent"): (0, t.isArray)(p) && p.forEach((function(e) {
                                (0, u.q9)(e.bidders, a.bids[0].bidder) && (d = (0, n.Z)(e, "endpoint.p1Consent"))
                            })), d && d.match("/openrtb2/prebid") && (o = W)
                        }
                        return e = (0, t.convertTypes)({
                            member: "string",
                            invCode: "string",
                            placementId: "number",
                            keywords: o,
                            publisherId: "number"
                        }, e), r && (e.use_pmt_rule = "boolean" == typeof e.usePaymentRule && e.usePaymentRule, e.usePaymentRule && delete e.usePaymentRule, T(e.keywords) && e.keywords.forEach(P), Object.keys(e).forEach((function(r) {
                            var a = (0, t.convertCamelToUnderscore)(r);
                            a !== r && (e[a] = e[r], delete e[r])
                        }))), e
                    },
                    onBidWon: function(e) {
                        e.native && function(e) {
                            var r = function(e) {
                                var r;
                                if ((0, t.isStr)(e) && O(e)) r = e;
                                else if ((0, t.isArray)(e))
                                    for (var a = 0; a < e.length; a++) {
                                        var n = e[a];
                                        O(n) && (r = n)
                                    }
                                return r
                            }(e.native.javascriptTrackers);
                            if (r)
                                for (var a = "pbjs_adid=" + e.adId + ";pbjs_auc=" + e.adUnitCode, n = function(e) {
                                        var r = e.indexOf('src="') + 5,
                                            a = e.indexOf('"', r);
                                        return e.substring(r, a)
                                    }(r), i = n.replace("dom_id=%native_dom_id%", a), s = document.getElementsByTagName("iframe"), o = !1, d = 0; d < s.length && !o; d++) {
                                    var p = s[d];
                                    try {
                                        var u = p.contentDocument || p.contentWindow.document;
                                        if (u)
                                            for (var c = u.getElementsByTagName("script"), l = 0; l < c.length && !o; l++) {
                                                var m = c[l];
                                                m.getAttribute("data-src") == n && (m.setAttribute("src", i), m.setAttribute("data-src", ""), m.removeAttribute && m.removeAttribute("data-src"), o = !0)
                                            }
                                    } catch (e) {
                                        if (!(e instanceof DOMException && "SecurityError" === e.name)) throw e
                                    }
                                }
                        }(e)
                    }
                };

            function T(e) {
                return !!((0, t.isArray)(e) && e.length > 0)
            }

            function P(e) {
                T(e.value) && "" === e.value[0] && delete e.value
            }

            function O(e) {
                var r = e.match(E),
                    a = null != r && r.length >= 1,
                    t = e.match("trk.js"),
                    n = null != t && t.length >= 1;
                return e.startsWith("<script") && n && a
            }

            function j(e) {
                var r = !0;
                return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== (0, n.Z)(e.gdprConsent, "vendorData.purpose.consents.1"))), r
            }

            function R(e) {
                var r = {};
                r.sizes = U(e.sizes), r.primary_size = r.sizes[0], r.ad_types = [], r.uuid = e.bidId, e.params.placementId ? r.id = parseInt(e.params.placementId, 10) : r.code = e.params.invCode, r.allow_smaller_sizes = e.params.allowSmallerSizes || !1, r.use_pmt_rule = e.params.usePaymentRule || !1, r.prebid = !0, r.disable_psa = !0;
                var a = function(e) {
                    if (!(0, t.isFn)(e.getFloor)) return e.params.reserve ? e.params.reserve : null;
                    var r = e.getFloor({
                        currency: "USD",
                        mediaType: "*",
                        size: "*"
                    });
                    return (0, t.isPlainObject)(r) && !isNaN(r.floor) && "USD" === r.currency ? r.floor : null
                }(e);
                if (a && (r.reserve = a), e.params.position) r.position = {
                    above: 1,
                    below: 2
                }[e.params.position] || 0;
                else {
                    var i = (0, n.Z)(e, "mediaTypes.banner.pos") || (0, n.Z)(e, "mediaTypes.video.pos");
                    0 !== i && 1 !== i && 3 !== i || (r.position = 3 === i ? 2 : i)
                }
                if (e.params.trafficSourceCode && (r.traffic_source_code = e.params.trafficSourceCode), e.params.privateSizes && (r.private_sizes = U(e.params.privateSizes)), e.params.supplyType && (r.supply_type = e.params.supplyType), e.params.pubClick && (r.pubclick = e.params.pubClick), e.params.extInvCode && (r.ext_inv_code = e.params.extInvCode), e.params.publisherId && (r.publisher_id = parseInt(e.params.publisherId, 10)), e.params.externalImpId && (r.external_imp_id = e.params.externalImpId), !(0, t.isEmpty)(e.params.keywords)) {
                    var s = (0, t.transformBidderParamKeywords)(e.params.keywords);
                    s.length > 0 && s.forEach(P), r.keywords = s
                }
                var o, c, l = (0, n.Z)(e, "ortb2Imp.ext.data.pbadslot");
                if (l && (r.gpid = l), (e.mediaType === d.B5 || (0, n.Z)(e, "mediaTypes.".concat(d.B5))) && (r.ad_types.push(d.B5), 0 === r.sizes.length && (r.sizes = U([1, 1])), e.nativeParams)) {
                    var m = (o = e.nativeParams, c = {}, Object.keys(o).forEach((function(e) {
                        var r = x[e] && x[e].serverName || x[e] || e,
                            a = x[e] && x[e].requiredParams;
                        if (c[r] = v({}, a, o[e]), (r === x.image.serverName || r === x.icon.serverName) && c[r].sizes) {
                            var n = c[r].sizes;
                            ((0, t.isArrayOfNums)(n) || (0, t.isArray)(n) && n.length > 0 && n.every((function(e) {
                                return (0, t.isArrayOfNums)(e)
                            }))) && (c[r].sizes = U(c[r].sizes))
                        }
                        r === x.privacyLink && (c.privacy_supported = !0)
                    })), c);
                    r[d.B5] = {
                        layouts: [m]
                    }
                }
                var f = (0, n.Z)(e, "mediaTypes.".concat(d.pX)),
                    y = (0, n.Z)(e, "mediaTypes.video.context");
                r.hb_source = f && "adpod" === y ? 7 : 1, (e.mediaType === d.pX || f) && r.ad_types.push(d.pX), (e.mediaType === d.pX || f && "outstream" !== y) && (r.require_asset_url = !0), e.params.video && (r.video = {}, Object.keys(e.params.video).filter((function(e) {
                    return (0, u.q9)(h, e)
                })).forEach((function(a) {
                    switch (a) {
                        case "context":
                        case "playback_method":
                            var n = e.params.video[a];
                            n = (0, t.isArray)(n) ? n[0] : n, r.video[a] = C[a][n];
                            break;
                        case "frameworks":
                            break;
                        default:
                            r.video[a] = e.params.video[a]
                    }
                })), e.params.video.frameworks && (0, t.isArray)(e.params.video.frameworks) && (r.video_frameworks = e.params.video.frameworks)), f && (r.video = r.video || {}, Object.keys(f).filter((function(e) {
                    return (0, u.q9)(_, e)
                })).forEach((function(e) {
                    switch (e) {
                        case "minduration":
                        case "maxduration":
                            "number" != typeof r.video[e] && (r.video[e] = f[e]);
                            break;
                        case "skip":
                            "boolean" != typeof r.video.skippable && (r.video.skippable = 1 === f[e]);
                            break;
                        case "skipafter":
                            "number" != typeof r.video.skipoffset && (r.video.skippoffset = f[e]);
                            break;
                        case "playbackmethod":
                            if ("number" != typeof r.video.playback_method) {
                                var a = f[e];
                                (a = (0, t.isArray)(a) ? a[0] : a) >= 1 && a <= 4 && (r.video.playback_method = a)
                            }
                            break;
                        case "api":
                            if (!r.video_frameworks && (0, t.isArray)(f[e])) {
                                var n = f[e].map((function(e) {
                                    var r = 4 === e ? 5 : 5 === e ? 4 : e;
                                    if (r >= 1 && r <= 5) return r
                                })).filter((function(e) {
                                    return e
                                }));
                                r.video_frameworks = n
                            }
                    }
                }))), e.renderer && (r.video = v({}, r.video, {
                    custom_renderer_present: !0
                })), e.params.frameworks && (0, t.isArray)(e.params.frameworks) && (r.banner_frameworks = e.params.frameworks);
                var g = (0, u.sE)(p.K.getAdUnits(), (function(r) {
                    return e.transactionId === r.transactionId
                }));
                return g && g.mediaTypes && g.mediaTypes.banner && r.ad_types.push(d.Mk), 0 === r.ad_types.length && delete r.ad_types, r
            }

            function U(e) {
                var r = [],
                    a = {};
                if ((0, t.isArray)(e) && 2 === e.length && !(0, t.isArray)(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
                else if ("object" === f(e))
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        (a = {}).width = parseInt(i[0], 10), a.height = parseInt(i[1], 10), r.push(a)
                    }
                return r
            }

            function q(e) {
                return !!e.params.user
            }

            function B(e) {
                return !!parseInt(e.params.member, 10)
            }

            function N(e) {
                if (e.params) return !!e.params.app
            }

            function M(e) {
                return e.params && e.params.app ? !!e.params.app.id : !!e.params.app
            }

            function Z(e) {
                return !!e.debug
            }

            function D(e) {
                return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === d.Oh
            }

            function z(e) {
                var r = !1,
                    a = e.params,
                    n = e.params.video;
                return a.frameworks && (0, t.isArray)(a.frameworks) && (r = (0, u.q9)(e.params.frameworks, 6)), !r && n && n.frameworks && (0, t.isArray)(n.frameworks) && (r = (0, u.q9)(e.params.video.frameworks, 6)), r
            }

            function X(e, r, a) {
                (0, t.isEmpty)(e.video) && (e.video = {}), e.video[r] = a
            }

            function F(e, r) {
                ! function(e) {
                    try {
                        var r = document.getElementById(e).querySelectorAll("div[id^='google_ads']");
                        r[0] && r[0].style.setProperty("display", "none")
                    } catch (e) {}
                }(e.adUnitCode),
                function(e) {
                    try {
                        var r = document.getElementById(e).querySelectorAll("script[id^='sas_script']");
                        r[0].nextSibling && "iframe" === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty("display", "none")
                    } catch (e) {}
                }(e.adUnitCode), e.renderer.push((function() {
                    ((0, t.getWindowFromDocument)(r) || window).ANOutstreamVideo.renderAd({
                        tagId: e.adResponse.tag_id,
                        sizes: [e.getSize().split("x")],
                        targetId: e.adUnitCode,
                        uuid: e.adResponse.uuid,
                        adResponse: e.adResponse,
                        rendererOptions: e.renderer.getConfig()
                    }, V.bind(null, e))
                }))
            }

            function V(e, r, a) {
                e.renderer.handleVideoEvent({
                    id: r,
                    eventName: a
                })
            }

            function K(e, r, a, t) {
                return r && (t ? e.push({
                    source: a,
                    id: r,
                    rti_partner: t
                }) : e.push({
                    source: a,
                    id: r
                })), e
            }

            function W(e) {
                var r = "";
                return Object.keys(e).forEach((function(a) {
                    (0, t.isStr)(e[a]) ? "" !== e[a] ? r += "".concat(a, "=").concat(e[a], ",") : r += "".concat(a, ","): (0, t.isArray)(e[a]) && ("" === e[a][0] ? r += "".concat(a, ",") : e[a].forEach((function(e) {
                        r += "".concat(a, "=").concat(e, ",")
                    })))
                })), r = r.substring(0, r.length - 1)
            }(0, o.dX)(S), window.fusePbjs.installedModules.push("appnexusBidAdapter")
        }
    },
    function(e) {
        e(e.s = 3231)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [1391], {
        2902: function(e, t, r) {
            var n = r(4806),
                i = r(9853),
                o = r(1609),
                a = r(8265),
                c = r(8962),
                s = r(2224);

            function u() {
                return u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, u.apply(this, arguments)
            }
            var d = {
                    code: "connectad",
                    gvlid: 138,
                    aliases: ["connectadrealtime"],
                    supportedMediaTypes: [a.Mk],
                    isBidRequestValid: function(e) {
                        return !(!e.params.networkId || !e.params.siteId)
                    },
                    buildRequests: function(e, t) {
                        var r = {
                            method: "POST",
                            url: "",
                            data: "",
                            bidRequest: []
                        };
                        if (e.length < 1) return r;
                        var i, o = u({
                            placements: [],
                            time: Date.now(),
                            user: {},
                            url: t.refererInfo && t.refererInfo.referer ? t.refererInfo.referer : window.location.href,
                            referrer: window.document.referrer,
                            referrer_info: t.refererInfo,
                            screensize: [window.screen.width, window.screen.height].join("x"),
                            dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                            language: navigator.language,
                            ua: navigator.userAgent,
                            pversion: "6.27.0"
                        });
                        return !0 === c.vc.getConfig("coppa") && (0, n.Z)(o, "user.coppa", 1), e[0].schain && (0, n.Z)(o, "source.ext.schain", e[0].schain), t.gdprConsent && ("boolean" == typeof t.gdprConsent.gdprApplies && (i = t.gdprConsent.gdprApplies ? 1 : 0), (0, n.Z)(o, "user.ext.gdpr", i), (0, n.Z)(o, "user.ext.consent", t.gdprConsent.consentString)), t.uspConsent && (0, n.Z)(o, "user.ext.us_privacy", t.uspConsent), e[0].userId && (0, n.Z)(o, "user.ext.eids", (0, s.HQ)(e[0].userId)), e.map((function(e) {
                            var t, r, n, i, a = u({
                                id: e.transactionId,
                                divName: e.bidId,
                                pisze: e.mediaTypes.banner.sizes[0] || e.sizes[0],
                                sizes: e.mediaTypes.banner.sizes,
                                adTypes: (n = e.mediaTypes.banner.sizes || e.sizes, i = [], n.forEach((function(e) {
                                    var t = p.indexOf(e[0] + "x" + e[1]);
                                    t >= 0 && i.push(t)
                                })), i),
                                bidfloor: (t = e, r = {}, "function" == typeof t.getFloor && (r = t.getFloor({
                                    currency: "USD",
                                    mediaType: "banner",
                                    size: "*"
                                })), r.floor || t.params.bidfloor || t.params.floorprice || 0),
                                siteId: e.params.siteId,
                                networkId: e.params.networkId
                            });
                            a.networkId && a.siteId && o.placements.push(a)
                        })), r.data = JSON.stringify(o), r.bidRequest = e, r.url = "https://i.connectad.io/api/v2", r
                    },
                    interpretResponse: function(e, t, r) {
                        var n, i, o, a = [];
                        i = t.bidRequest, e = (e || {}).body;
                        for (var c = 0; c < i.length; c++)
                            if (n = {}, o = i[c].bidId, e) {
                                var s = e.decisions && e.decisions[o],
                                    u = s && s.pricing && s.pricing.clearPrice;
                                s && u && (n.requestId = o, n.cpm = u, n.width = s.width, n.height = s.height, n.dealid = s.dealid || null, n.meta = {
                                    advertiserDomains: s && s.adomain ? s.adomain : []
                                }, n.ad = f(s), n.currency = "USD", n.creativeId = s.adId, n.ttl = 360, n.netRevenue = !0, a.push(n))
                            }
                        return a
                    },
                    transformBidParams: function(e, t) {
                        return (0, i.convertTypes)({
                            siteId: "number",
                            networkId: "number"
                        }, e)
                    },
                    getUserSyncs: function(e, t, r, n) {
                        var o = "https://cdn.connectad.io/connectmyusers.php?";
                        if (r && (o = (0, i.tryAppendQueryString)(o, "gdpr", r.gdprApplies ? 1 : 0)), r && "string" == typeof r.consentString && (o = (0, i.tryAppendQueryString)(o, "gdpr_consent", r.consentString)), n && (o = (0, i.tryAppendQueryString)(o, "us_privacy", n)), !0 === c.vc.getConfig("coppa") && (o = (0, i.tryAppendQueryString)(o, "coppa", 1)), e.iframeEnabled) return [{
                            type: "iframe",
                            url: o
                        }];
                        (0, i.logWarn)("Bidder ConnectAd: Please activate iFrame Sync")
                    }
                },
                p = [null, "120x90", "200x200", "468x60", "728x90", "300x250", "160x600", "120x600", "300x100", "180x150", "336x280", "240x400", "234x60", "88x31", "120x60", "120x240", "125x125", "220x250", "250x250", "250x90", "0x0", "200x90", "300x50", "320x50", "320x480", "185x185", "620x45", "300x125", "800x250", "980x120", "980x150", "320x150", "300x300", "200x600", "320x500", "320x320"];

            function f(e) {
                return e.contents && e.contents[0] && e.contents[0].body
            }
            p[77] = "970x90", p[123] = "970x250", p[43] = "300x600", p[286] = "970x66", p[3230] = "970x280", p[429] = "486x60", p[374] = "700x500", p[934] = "300x1050", p[1578] = "320x100", p[331] = "320x250", p[3301] = "320x267", p[2730] = "728x250", (0, o.dX)(d), window.fusePbjs.installedModules.push("connectadBidAdapter")
        },
        2224: function(e, t, r) {
            r.d(t, {
                HQ: function() {
                    return c
                },
                Pv: function() {
                    return s
                },
                UR: function() {
                    return o
                }
            });
            var n = r(9853),
                i = r(265),
                o = {
                    trustpid: {
                        source: "trustpid.com",
                        atype: 1,
                        getValue: function(e) {
                            return e
                        }
                    },
                    intentIqId: {
                        source: "intentiq.com",
                        atype: 1
                    },
                    naveggId: {
                        source: "navegg.com",
                        atype: 1
                    },
                    justId: {
                        source: "justtag.com",
                        atype: 1
                    },
                    pubcid: {
                        source: "pubcid.org",
                        atype: 1
                    },
                    tdid: {
                        source: "adserver.org",
                        atype: 1,
                        getUidExt: function() {
                            return {
                                rtiPartner: "TDID"
                            }
                        }
                    },
                    id5id: {
                        getValue: function(e) {
                            return e.uid
                        },
                        source: "id5-sync.com",
                        atype: 1,
                        getUidExt: function(e) {
                            if (e.ext) return e.ext
                        }
                    },
                    ftrackId: {
                        source: "flashtalking.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.uid
                        },
                        getUidExt: function(e) {
                            if (e.ext) return e.ext
                        }
                    },
                    parrableId: {
                        source: "parrable.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.eid ? e.eid : e.ccpaOptout ? "" : null
                        },
                        getUidExt: function(e) {
                            var t = (0, n.pick)(e, ["ibaOptout", "ccpaOptout"]);
                            if (Object.keys(t).length) return t
                        }
                    },
                    idl_env: {
                        source: "liveramp.com",
                        atype: 3
                    },
                    lipb: {
                        getValue: function(e) {
                            return e.lipbid
                        },
                        source: "liveintent.com",
                        atype: 3,
                        getEidExt: function(e) {
                            if (Array.isArray(e.segments) && e.segments.length) return {
                                segments: e.segments
                            }
                        }
                    },
                    britepoolid: {
                        source: "britepool.com",
                        atype: 3
                    },
                    dmdId: {
                        source: "hcn.health",
                        atype: 3
                    },
                    lotamePanoramaId: {
                        source: "crwdcntrl.net",
                        atype: 1
                    },
                    criteoId: {
                        source: "criteo.com",
                        atype: 1
                    },
                    merkleId: {
                        source: "merkleinc.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        },
                        getUidExt: function(e) {
                            return e && e.keyID ? {
                                keyID: e.keyID
                            } : void 0
                        }
                    },
                    netId: {
                        source: "netid.de",
                        atype: 1
                    },
                    IDP: {
                        source: "zeotap.com",
                        atype: 1
                    },
                    hadronId: {
                        source: "audigent.com",
                        atype: 1
                    },
                    haloId: {
                        source: "audigent.com",
                        atype: 1
                    },
                    quantcastId: {
                        source: "quantcast.com",
                        atype: 1
                    },
                    nextrollId: {
                        source: "nextroll.com",
                        atype: 1
                    },
                    idx: {
                        source: "idx.lat",
                        atype: 1
                    },
                    connectid: {
                        source: "verizonmedia.com",
                        atype: 3
                    },
                    fabrickId: {
                        source: "neustar.biz",
                        atype: 1
                    },
                    mwOpenLinkId: {
                        source: "mediawallahscript.com",
                        atype: 1
                    },
                    tapadId: {
                        source: "tapad.com",
                        atype: 1
                    },
                    novatiq: {
                        getValue: function(e) {
                            return e.snowflake
                        },
                        source: "novatiq.com",
                        atype: 1
                    },
                    uid2: {
                        source: "uidapi.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        }
                    },
                    dapId: {
                        source: "akamai.com",
                        atype: 1
                    },
                    deepintentId: {
                        source: "deepintent.com",
                        atype: 3
                    },
                    admixerId: {
                        source: "admixer.net",
                        atype: 3
                    },
                    adtelligentId: {
                        source: "adtelligent.com",
                        atype: 3
                    },
                    amxId: {
                        source: "amxrtb.com",
                        atype: 1
                    },
                    publinkId: {
                        source: "epsilon.com",
                        atype: 3
                    },
                    kpuid: {
                        source: "kpuid.com",
                        atype: 3
                    },
                    imuid: {
                        source: "intimatemerger.com",
                        atype: 1
                    },
                    connectId: {
                        source: "yahoo.com",
                        atype: 3
                    },
                    qid: {
                        source: "adquery.io",
                        atype: 1
                    },
                    dacId: {
                        source: "impact-ad.jp",
                        atype: 1
                    },
                    "33acrossId": {
                        source: "33across.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.envelope
                        }
                    },
                    gravitompId: {
                        source: "gravito.net",
                        atype: 1
                    }
                };

            function a(e, t) {
                var r = o[t];
                if (r && e) {
                    var i = {};
                    i.source = r.source;
                    var a = (0, n.isFn)(r.getValue) ? r.getValue(e) : e;
                    if ((0, n.isStr)(a)) {
                        var c = {
                            id: a,
                            atype: r.atype
                        };
                        if ((0, n.isFn)(r.getUidExt)) {
                            var s = r.getUidExt(e);
                            s && (c.ext = s)
                        }
                        if (i.uids = [c], (0, n.isFn)(r.getEidExt)) {
                            var u = r.getEidExt(e);
                            u && (i.ext = u)
                        }
                        return i
                    }
                }
                return null
            }

            function c(e) {
                var t = [];
                for (var r in e)
                    if (e.hasOwnProperty(r))
                        if ("pubProvidedId" === r) t = t.concat(e.pubProvidedId);
                        else {
                            var n = a(e[r], r);
                            n && t.push(n)
                        }
                return t
            }

            function s(e) {
                var t = [];
                return e.filter((function(e) {
                    return (0, n.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                })).forEach((function(e) {
                    Object.keys(e.idObj).forEach((function(r) {
                        (0, i.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, i.Z)(o, r + ".source") && t.push({
                            source: o[r].source,
                            bidders: e.config.bidders
                        })
                    }))
                })), t
            }
        }
    },
    function(e) {
        e(e.s = 2902)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [1266], {
        1654: function(n, e, t) {
            var o = t(9853),
                a = t(8962),
                r = t(7602),
                i = t(1879);

            function s(n) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
                    return typeof n
                } : function(n) {
                    return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
                }, s(n)
            }

            function c(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, o)
                }
                return t
            }

            function l(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(t), !0).forEach((function(e) {
                        d(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }

            function d(n, e, t) {
                return e in n ? Object.defineProperty(n, e, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[e] = t, n
            }
            var u, f, p, g, v, m = {
                    value: !0,
                    definedInConfig: !1
                },
                b = 0,
                C = !1,
                y = {
                    iab: function(n) {
                        var e = n.onSuccess,
                            t = n.onError,
                            a = n.width,
                            r = n.height;

                        function s(n, a) {
                            (0, o.logInfo)("Received a response from CMP", n), a ? !1 !== n.gdprApplies && "tcloaded" !== n.eventStatus && "useractioncomplete" !== n.eventStatus || D(n, {
                                onSuccess: e,
                                onError: t
                            }) : t("CMP unable to register callback function.  Please check CMP setup.")
                        }
                        var c = function() {
                                var n = {};

                                function a() {
                                    n.getConsentData && n.getVendorConsents && ((0, o.logInfo)("Received all requested responses from CMP", n), D(n, {
                                        onSuccess: e,
                                        onError: t
                                    }))
                                }
                                return {
                                    consentDataCallback: function(e) {
                                        n.getConsentData = e, a()
                                    },
                                    vendorConsentsCallback: function(e) {
                                        n.getVendorConsents = e, a()
                                    }
                                }
                            }(),
                            l = {},
                            u = function() {
                                for (var n, e, t = window; !n;) {
                                    try {
                                        if ("function" == typeof t.__tcfapi || "function" == typeof t.__cmp) {
                                            "function" == typeof t.__tcfapi ? (b = 2, e = t.__tcfapi) : (b = 1, e = t.__cmp), n = t;
                                            break
                                        }
                                    } catch (n) {}
                                    try {
                                        if (t.frames.__tcfapiLocator) {
                                            b = 2, n = t;
                                            break
                                        }
                                    } catch (n) {}
                                    try {
                                        if (t.frames.__cmpLocator) {
                                            b = 1, n = t;
                                            break
                                        }
                                    } catch (n) {}
                                    if (t === window.top) break;
                                    t = t.parent
                                }
                                return {
                                    cmpFrame: n,
                                    cmpFunction: e
                                }
                            }(),
                            f = u.cmpFrame,
                            p = u.cmpFunction;
                        if (!f) return t("CMP not found.");

                        function g(n, e) {
                            window.$sf.ext.register(a, r, (function(t, o) {
                                if ("cmpReturn" === t) {
                                    var a = "getConsentData" === n ? o.vendorConsentData : o.vendorConsents;
                                    e(a)
                                }
                            })), window.$sf.ext.cmp(n)
                        }

                        function v(n, e, t) {
                            var o = 2 === b ? "__tcfapi" : "__cmp",
                                a = "".concat(o, "Call");

                            function r(n) {
                                var e = "".concat(o, "Return"),
                                    t = "string" == typeof n.data && (0, i.q9)(n.data, e) ? JSON.parse(n.data) : n.data;
                                if (t[e] && t[e].callId) {
                                    var a = t[e];
                                    void 0 !== l[a.callId] && l[a.callId](a.returnValue, a.success)
                                }
                            }
                            2 === b ? (window[o] = function(n, t, o, r) {
                                var i = Math.random() + "",
                                    s = d({}, a, {
                                        command: n,
                                        version: t,
                                        parameter: r,
                                        callId: i
                                    });
                                l[i] = o, e.postMessage(s, "*")
                            }, window.addEventListener("message", r, !1), window[o](n, b, t)) : (window[o] = function(n, t, o) {
                                var r = Math.random() + "",
                                    i = d({}, a, {
                                        command: n,
                                        parameter: t,
                                        callId: r
                                    });
                                l[r] = o, e.postMessage(i, "*")
                            }, window.addEventListener("message", r, !1), window[o](n, void 0, t))
                        }(0, o.isFn)(p) ? ((0, o.logInfo)("Detected CMP API is directly accessible, calling it now..."), 1 === b ? (p("getConsentData", null, c.consentDataCallback), p("getVendorConsents", null, c.vendorConsentsCallback)) : 2 === b && p("addEventListener", b, s)) : 1 === b && window.$sf && window.$sf.ext && "function" == typeof window.$sf.ext.cmp ? ((0, o.logInfo)("Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now..."), g("getConsentData", c.consentDataCallback), g("getVendorConsents", c.vendorConsentsCallback)) : ((0, o.logInfo)("Detected CMP is outside the current iframe where Prebid.js is located, calling it now..."), 1 === b ? (v("getConsentData", f, c.consentDataCallback), v("getVendorConsents", f, c.vendorConsentsCallback)) : 2 === b && v("addEventListener", f, s))
                    },
                    static: function(n) {
                        var e = n.onSuccess,
                            t = n.onError;
                        D(g, {
                            onSuccess: e,
                            onError: t
                        })
                    }
                };

            function w(n) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    o = !1,
                    a = null;

                function s(e, t, i) {
                    if (null != a && clearTimeout(a), o = !0, r.rp.setConsentData(e), null != n) {
                        for (var s = arguments.length, c = new Array(s > 3 ? s - 3 : 0), l = 3; l < s; l++) c[l - 3] = arguments[l];
                        n.apply(void 0, [t, i].concat(c))
                    }
                }
                if ((0, i.q9)(Object.keys(y), u)) {
                    var c = {
                        onSuccess: function(n) {
                            return s(n, !1)
                        },
                        onError: function(n) {
                            var e = null,
                                t = !0;
                            m.value && 1 === b && (e = P(void 0), t = !1);
                            for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), r = 1; r < o; r++) a[r - 1] = arguments[r];
                            s.apply(void 0, [e, t, n].concat(a))
                        }
                    };
                    y[u](l({
                        width: e,
                        height: t
                    }, c)), o || (0 === f ? D(void 0, c) : a = setTimeout((function() {
                        2 === b ? s(P(void 0), !1, "No response from CMP, continuing auction...") : c.onError("CMP workflow exceeded timeout threshold.")
                    }), f))
                } else s(null, !1, "CMP framework (".concat(u, ") is not a supported framework.  Aborting consentManagement module and resuming auction."))
            }

            function h(n, e) {
                ! function() {
                    if (v) return (0, o.logInfo)("User consent information already known.  Pulling internally stored information..."),
                        function(n) {
                            n(!1)
                        };
                    var n = e.adUnits || fusePbjs.adUnits,
                        t = 1,
                        a = 1;
                    if (Array.isArray(n) && n.length > 0) {
                        var r, i, s = (0, o.getAdUnitSizes)(n[0]);
                        t = (null == s || null === (r = s[0]) || void 0 === r ? void 0 : r[0]) || 1, a = (null == s || null === (i = s[0]) || void 0 === i ? void 0 : i[1]) || 1
                    }
                    return function(n) {
                        w(n, t, a)
                    }
                }()((function(t, a) {
                    if (a) {
                        var r = o.logWarn;
                        1 !== b || t ? t && (r = o.logError, a = "".concat(a, " Canceling auction as per consentManagement config.")) : a = "".concat(a, " 'allowAuctionWithoutConsent' activated.");
                        for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), c = 2; c < i; c++) s[c - 2] = arguments[c];
                        r.apply(void 0, [a].concat(s))
                    }
                    t ? "function" == typeof e.bidsBackHandler ? e.bidsBackHandler() : (0, o.logError)("Error executing bidsBackHandler") : n.call(this, e)
                }))
            }

            function D(n, e) {
                var t = e.onSuccess,
                    a = e.onError;
                "static" === u && 2 == (b = n.getConsentData ? 1 : n.getTCData ? 2 : 0) && (n = n.getTCData);
                var r = 1 === b ? function(n) {
                    var e = n && n.getConsentData && n.getConsentData.gdprApplies;
                    return !("boolean" == typeof e && (!0 !== e || (0, o.isStr)(n.getConsentData.consentData) && (0, o.isPlainObject)(n.getVendorConsents) && Object.keys(n.getVendorConsents).length > 1))
                } : 2 === b ? function() {
                    var e = n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : p,
                        t = n && n.tcString;
                    return !("boolean" == typeof e && (!0 !== e || (0, o.isStr)(t)))
                } : null;
                (0, o.isFn)(r) ? r(n) ? a("CMP returned unexpected value during lookup process.", n) : t(P(n)): a("Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.", n)
            }

            function P(n) {
                return 1 === b ? v = {
                    consentString: n ? n.getConsentData.consentData : void 0,
                    vendorData: n ? n.getVendorConsents : void 0,
                    gdprApplies: n ? n.getConsentData.gdprApplies : p
                } : (v = {
                    consentString: n ? n.tcString : void 0,
                    vendorData: n || void 0,
                    gdprApplies: n && "boolean" == typeof n.gdprApplies ? n.gdprApplies : p
                }, n && n.addtlConsent && (0, o.isStr)(n.addtlConsent) && (v.addtlConsent = n.addtlConsent)), v.apiVersion = b, v
            }
            a.vc.getConfig("consentManagement", (function(n) {
                return function(n) {
                    (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && "object" === s(n) ? ((0, o.isStr)(n.cmpApi) ? u = n.cmpApi : (u = "iab", (0, o.logInfo)("consentManagement config did not specify cmp.  Using system default setting (".concat("iab", ")."))), (0, o.isNumber)(n.timeout) ? f = n.timeout : (f = 1e4, (0, o.logInfo)("consentManagement config did not specify timeout.  Using system default setting (".concat(1e4, ")."))), "boolean" == typeof n.allowAuctionWithoutConsent && (m.value = n.allowAuctionWithoutConsent, m.definedInConfig = !0), p = !0 === n.defaultGdprScope, (0, o.logInfo)("consentManagement module has been activated..."), "static" === u && ((0, o.isPlainObject)(n.consentData) ? (g = n.consentData, f = 0) : (0, o.logError)("consentManagement config with cmpApi: 'static' did not specify consentData. No consents will be available to adapters.")), C || fusePbjs.requestBids.before(h, 50), C = !0, r.rp.enable(), w(), m.definedInConfig && 2 === b ? (0, o.logWarn)("'allowAuctionWithoutConsent' ignored for TCF 2") : m.definedInConfig || 1 !== b || (0, o.logInfo)("'allowAuctionWithoutConsent' using system default: (".concat(!0, ")."))) : (0, o.logWarn)("consentManagement config not defined, exiting consent manager")
                }(n.consentManagement)
            })), window.fusePbjs.installedModules.push("consentManagement")
        }
    },
    function(n) {
        n(n.s = 1654)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [6406], {
        6201: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            var _src_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9853),
                _src_utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(265),
                _src_adloader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6996),
                _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1609),
                _src_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8962),
                _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8265),
                _src_polyfill_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1879),
                criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1582),
                _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5849);

            function _extends() {
                return _extends = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i])
                    }
                    return t
                }, _extends.apply(this, arguments)
            }
            var GVLID = 91,
                ADAPTER_VERSION = 34,
                BIDDER_CODE = "criteo",
                CDB_ENDPOINT = "https://bidder.criteo.com/cdb",
                PROFILE_ID_INLINE = 207,
                PROFILE_ID_PUBLISHERTAG = 185,
                storage = (0, _src_storageManager_js__WEBPACK_IMPORTED_MODULE_1__.df)({
                    gvlid: GVLID,
                    bidderCode: BIDDER_CODE
                }),
                LOG_PREFIX = "Criteo: ",
                FAST_BID_VERSION_PLACEHOLDER = "%FAST_BID_VERSION%",
                FAST_BID_VERSION_CURRENT = 117,
                FAST_BID_VERSION_LATEST = "latest",
                FAST_BID_VERSION_NONE = "none",
                PUBLISHER_TAG_URL_TEMPLATE = "https://static.criteo.net/js/ld/publishertag.prebid" + FAST_BID_VERSION_PLACEHOLDER + ".js",
                FAST_BID_PUBKEY_E = 65537,
                FAST_BID_PUBKEY_N = "ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=",
                spec = {
                    code: BIDDER_CODE,
                    gvlid: GVLID,
                    supportedMediaTypes: [_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.Mk, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX, _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5],
                    isBidRequestValid: function(t) {
                        return !(!t || !t.params || !t.params.zoneId && !t.params.networkId || hasVideoMediaType(t) && !hasValidVideoMediaType(t))
                    },
                    buildRequests: function(t, e) {
                        var r, i, s, a, o = _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("ortb2") || {};
                        _extends(e, {
                            publisherExt: null === (r = o.site) || void 0 === r ? void 0 : r.ext,
                            userExt: null === (i = o.user) || void 0 === i ? void 0 : i.ext,
                            ceh: _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.ceh")
                        });
                        var n = _src_config_js__WEBPACK_IMPORTED_MODULE_3__.vc.getConfig("criteo.fastBidVersion"),
                            _ = canFastBid(n);
                        if (!publisherTagAvailable() && _) {
                            window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid();
                            var p = getFastBidUrl(n);
                            setTimeout((function() {
                                (0, _src_adloader_js__WEBPACK_IMPORTED_MODULE_4__.B)(p, BIDDER_CODE)
                            }), e.timeout)
                        }
                        if (publisherTagAvailable()) {
                            var d = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, "6.27.0");
                            s = d.buildCdbUrl(), a = d.buildCdbRequest()
                        } else {
                            var u = buildContext(t, e);
                            s = buildCdbUrl(u), a = buildCdbRequest(u, t, e)
                        }
                        if (a) return {
                            method: "POST",
                            url: s,
                            data: a,
                            bidRequests: t
                        }
                    },
                    interpretResponse: function(t, e) {
                        var r = t.body || t;
                        if (publisherTagAvailable()) {
                            var i = Criteo.PubTag.Adapters.Prebid.GetAdapter(e);
                            if (i) return i.interpretResponse(r, e)
                        }
                        var s = [];
                        return r && r.slots && (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.isArray)(r.slots) && r.slots.forEach((function(i) {
                            var a, o, n, _, p = (0, _src_polyfill_js__WEBPACK_IMPORTED_MODULE_6__.sE)(e.bidRequests, (function(t) {
                                    return t.adUnitCode === i.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === i.zoneid)
                                })),
                                d = p.bidId,
                                u = {
                                    requestId: d,
                                    adId: i.bidId || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.getUniqueIdentifierStr)(),
                                    cpm: i.cpm,
                                    currency: i.currency,
                                    netRevenue: !0,
                                    ttl: i.ttl || 60,
                                    creativeId: i.creativecode,
                                    width: i.width,
                                    height: i.height,
                                    dealId: i.dealCode
                                };
                            if (null !== (a = r.ext) && void 0 !== a && null !== (o = a.paf) && void 0 !== o && o.transmission && null !== (n = i.ext) && void 0 !== n && null !== (_ = n.paf) && void 0 !== _ && _.content_id) {
                                var c = {
                                    content_id: i.ext.paf.content_id,
                                    transmission: t.ext.paf.transmission
                                };
                                u.meta = _extends({}, u.meta, {
                                    paf: c
                                })
                            }
                            i.adomain && (u.meta = _extends({}, u.meta, {
                                advertiserDomains: i.adomain
                            })), i.native ? p.params.nativeCallback ? u.ad = createNativeAd(d, i.native, p.params.nativeCallback) : (u.native = createPrebidNativeAd(i.native), u.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5) : i.video ? (u.vastUrl = i.displayurl, u.mediaType = _src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.pX) : u.ad = i.creative, s.push(u)
                        })), s
                    },
                    onTimeout: function(t) {
                        if (publisherTagAvailable() && Array.isArray(t)) {
                            var e = [];
                            t.forEach((function(t) {
                                -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout())
                            }))
                        }
                    },
                    onBidWon: function(t) {
                        publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t)
                    },
                    onSetTargeting: function(t) {
                        publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t)
                    }
                };

            function publisherTagAvailable() {
                return "undefined" != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid
            }

            function buildContext(t, e) {
                var r = "";
                e && e.refererInfo && (r = e.refererInfo.referer);
                var i = (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.parseUrl)(r).search,
                    s = {
                        url: r,
                        debug: "1" === i.pbt_debug,
                        noLog: "1" === i.pbt_nolog,
                        amp: !1
                    };
                return t.forEach((function(t) {
                    "amp" === t.params.integrationMode && (s.amp = !0)
                })), s
            }

            function buildCdbUrl(t) {
                var e = CDB_ENDPOINT;
                return e += "?profileId=" + PROFILE_ID_INLINE, e += "&av=" + String(ADAPTER_VERSION), e += "&wv=" + encodeURIComponent("6.27.0"), e += "&cb=" + String(Math.floor(99999999999 * Math.random())), t.amp && (e += "&im=1"), t.debug && (e += "&debug=1"), t.noLog && (e += "&nolog=1"), e
            }

            function checkNativeSendId(t) {
                return !(t.nativeParams && (t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys)))
            }

            function buildCdbRequest(t, e, r) {
                var i, s, a = {
                    publisher: {
                        url: t.url,
                        ext: r.publisherExt
                    },
                    slots: e.map((function(t) {
                        i = t.params.networkId || i, s = t.schain || s;
                        var e = {
                            impid: t.adUnitCode,
                            transactionid: t.transactionId,
                            auctionId: t.auctionId
                        };
                        if (t.params.zoneId && (e.zoneid = t.params.zoneId), (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "ortb2Imp.ext") && (e.ext = t.ortb2Imp.ext), t.params.ext && (e.ext = _extends({}, e.ext, t.params.ext)), t.params.publisherSubId && (e.publishersubid = t.params.publisherSubId), t.params.nativeCallback || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.".concat(_src_mediaTypes_js__WEBPACK_IMPORTED_MODULE_2__.B5)) ? (e.native = !0, checkNativeSendId(t) || (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)(LOG_PREFIX + "all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)"), e.sizes = parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.banner.sizes"), parseNativeSize)) : e.sizes = parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.banner.sizes"), parseSize), hasVideoMediaType(t)) {
                            var r = {
                                    playersizes: parseSizes((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.video.playerSize"), parseSize),
                                    mimes: t.mediaTypes.video.mimes,
                                    protocols: t.mediaTypes.video.protocols,
                                    maxduration: t.mediaTypes.video.maxduration,
                                    api: t.mediaTypes.video.api,
                                    skip: t.mediaTypes.video.skip,
                                    placement: t.mediaTypes.video.placement,
                                    minduration: t.mediaTypes.video.minduration,
                                    playbackmethod: t.mediaTypes.video.playbackmethod,
                                    startdelay: t.mediaTypes.video.startdelay
                                },
                                a = t.params.video;
                            void 0 !== a && (r.skip = r.skip || a.skip || 0, r.placement = r.placement || a.placement, r.minduration = r.minduration || a.minduration, r.playbackmethod = r.playbackmethod || a.playbackmethod, r.startdelay = r.startdelay || a.startdelay || 0), e.video = r
                        }
                        return e
                    }))
                };
                return i && (a.publisher.networkid = i), s && (a.source = {
                    ext: {
                        schain: s
                    }
                }), a.user = {
                    ext: r.userExt
                }, r && r.ceh && (a.user.ceh = r.ceh), r && r.gdprConsent && (a.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (a.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), a.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (a.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (a.user.uspIab = r.uspConsent), a
            }

            function parseSizes(t, e) {
                return null == t ? [] : Array.isArray(t[0]) ? t.map((function(t) {
                    return e(t)
                })) : [e(t)]
            }

            function parseSize(t) {
                return t[0] + "x" + t[1]
            }

            function parseNativeSize(t) {
                return void 0 === t[0] && void 0 === t[1] ? "2x2" : t[0] + "x" + t[1]
            }

            function hasVideoMediaType(t) {
                return void 0 !== (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.video")
            }

            function hasValidVideoMediaType(t) {
                var e = !0;
                if (["mimes", "playerSize", "maxduration", "protocols", "api", "skip", "placement", "playbackmethod"].forEach((function(r) {
                        void 0 === (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "mediaTypes.video." + r) && void 0 === (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_7__.Z)(t, "params.video." + r) && (e = !1, (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logError)("Criteo Bid Adapter: mediaTypes.video." + r + " is required"))
                    })), e) {
                    var r = t.mediaTypes.video.placement || t.params.video.placement;
                    if ("instream" == t.mediaTypes.video.context && 1 === r) return !0;
                    if ("outstream" == t.mediaTypes.video.context && 1 !== r) return !0
                }
                return !1
            }

            function createPrebidNativeAd(t) {
                return {
                    sendTargetingKeys: !1,
                    title: t.products[0].title,
                    body: t.products[0].description,
                    sponsoredBy: t.advertiser.description,
                    icon: t.advertiser.logo,
                    image: t.products[0].image,
                    clickUrl: t.products[0].click_url,
                    privacyLink: t.privacy.optout_click_url,
                    privacyIcon: t.privacy.optout_image_url,
                    cta: t.products[0].call_to_action,
                    price: t.products[0].price,
                    impressionTrackers: t.impression_pixels.map((function(t) {
                        return t.url
                    }))
                }
            }

            function createNativeAd(t, e, r) {
                var i = "criteo_prebid_native_slots";
                return window[i] = window[i] || {}, window[i][t] = {
                    callback: r,
                    payload: e
                }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n<\/script>')
            }

            function canFastBid(t) {
                return t !== FAST_BID_VERSION_NONE
            }

            function getFastBidUrl(t) {
                var e;
                return t === FAST_BID_VERSION_LATEST ? e = "" : t ? (String(t).split(".")[0] < 102 && (0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)("Specifying a Fastbid version which is not supporting version selection."), e = "." + t) : e = "." + FAST_BID_VERSION_CURRENT, PUBLISHER_TAG_URL_TEMPLATE.replace(FAST_BID_VERSION_PLACEHOLDER, e)
            }

            function tryGetCriteoFastBid() {
                try {
                    var fastBidStorageKey = "criteo_fast_bid",
                        hashPrefix = "// Hash: ",
                        fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey);
                    if (null !== fastBidFromStorage) {
                        var firstLineEndPosition = fastBidFromStorage.indexOf("\n"),
                            firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim();
                        if (firstLine.substr(0, hashPrefix.length) !== hashPrefix)(0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)("No hash found in FastBid"), storage.removeDataFromLocalStorage(fastBidStorageKey);
                        else {
                            var publisherTagHash = firstLine.substr(hashPrefix.length),
                                publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1);
                            (0, criteo_direct_rsa_validate_build_verify_js__WEBPACK_IMPORTED_MODULE_0__.T)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logInfo)("Using Criteo FastBid"), eval(publisherTag)) : ((0, _src_utils_js__WEBPACK_IMPORTED_MODULE_5__.logWarn)("Invalid Criteo FastBid found"), storage.removeDataFromLocalStorage(fastBidStorageKey))
                        }
                    }
                } catch (t) {}
            }(0, _src_adapters_bidderFactory_js__WEBPACK_IMPORTED_MODULE_8__.dX)(spec), window.fusePbjs.installedModules.push("criteoBidAdapter")
        },
        4611: function(t, e) {
            var r;
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = function() {
                function t(t) {
                    null !== t && this.fromHexString(t)
                }
                return t.prototype.toHexString = function() {
                    if (this.s < 0) return "-" + this.negate().toHexString();
                    var t, e = !1,
                        r = "",
                        i = this.t,
                        s = this.DB - i * this.DB % 4;
                    if (i-- > 0)
                        for (s < this.DB && (t = this[i] >> s) > 0 && (e = !0, r = d(t)); i >= 0;) s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), t > 0 && (e = !0), e && (r += d(t));
                    return e ? r : "0"
                }, t.prototype.fromHexString = function(e) {
                    if (null !== e) {
                        this.t = 0, this.s = 0;
                        for (var r = e.length, i = !1, s = 0; --r >= 0;) {
                            var a = p(e, r);
                            a < 0 ? "-" == e.charAt(r) && (i = !0) : (i = !1, 0 == s ? this[this.t++] = a : s + 4 > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s, this[this.t++] = a >> this.DB - s) : this[this.t - 1] |= a << s, (s += 4) >= this.DB && (s -= this.DB))
                        }
                        this.clamp(), i && t.ZERO.subTo(this, this)
                    }
                }, t.prototype.negate = function() {
                    var e = s();
                    return t.ZERO.subTo(this, e), e
                }, t.prototype.abs = function() {
                    return this.s < 0 ? this.negate() : this
                }, t.prototype.mod = function(e) {
                    var r = s();
                    return this.abs().divRemTo(e, null, r), this.s < 0 && r.compareTo(t.ZERO) > 0 && e.subTo(r, r), r
                }, t.prototype.copyTo = function(t) {
                    for (var e = this.t - 1; e >= 0; --e) t[e] = this[e];
                    t.t = this.t, t.s = this.s
                }, t.prototype.lShiftTo = function(t, e) {
                    for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), o = this.s << r & this.DM, n = this.t - 1; n >= 0; --n) e[n + a + 1] = this[n] >> i | o, o = (this[n] & s) << r;
                    for (n = a - 1; n >= 0; --n) e[n] = 0;
                    e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp()
                }, t.prototype.invDigit = function() {
                    if (this.t < 1) return 0;
                    var t = this[0];
                    if (0 == (1 & t)) return 0;
                    var e = 3 & t;
                    return (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) > 0 ? this.DV - e : -e
                }, t.prototype.dlShiftTo = function(t, e) {
                    var r;
                    for (r = this.t - 1; r >= 0; --r) e[r + t] = this[r];
                    for (r = t - 1; r >= 0; --r) e[r] = 0;
                    e.t = this.t + t, e.s = this.s
                }, t.prototype.squareTo = function(t) {
                    for (var e = this.abs(), r = t.t = 2 * e.t; --r >= 0;) t[r] = 0;
                    for (r = 0; r < e.t - 1; ++r) {
                        var i = e.am(r, e[r], t, 2 * r, 0, 1);
                        (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1)
                    }
                    t.t > 0 && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp()
                }, t.prototype.multiplyTo = function(e, r) {
                    var i = this.abs(),
                        s = e.abs(),
                        a = i.t;
                    for (r.t = a + s.t; --a >= 0;) r[a] = 0;
                    for (a = 0; a < s.t; ++a) r[a + i.t] = i.am(0, s[a], r, a, 0, i.t);
                    r.s = 0, r.clamp(), this.s != e.s && t.ZERO.subTo(r, r)
                }, t.prototype.divRemTo = function(e, r, i) {
                    var o = e.abs();
                    if (!(o.t <= 0)) {
                        var n = this.abs();
                        if (n.t < o.t) return null != r && r.fromHexString("0"), void(null != i && this.copyTo(i));
                        null == i && (i = s());
                        var _ = s(),
                            p = this.s,
                            d = e.s,
                            u = this.DB - a(o[o.t - 1]);
                        u > 0 ? (o.lShiftTo(u, _), n.lShiftTo(u, i)) : (o.copyTo(_), n.copyTo(i));
                        var c = _.t,
                            l = _[c - 1];
                        if (0 != l) {
                            var h = l * (1 << this.F1) + (c > 1 ? _[c - 2] >> this.F2 : 0),
                                f = this.FV / h,
                                m = (1 << this.F1) / h,
                                v = 1 << this.F2,
                                E = i.t,
                                T = E - c,
                                D = null == r ? s() : r;
                            for (_.dlShiftTo(T, D), i.compareTo(D) >= 0 && (i[i.t++] = 1, i.subTo(D, i)), t.ONE.dlShiftTo(c, D), D.subTo(_, _); _.t < c;) _[_.t++] = 0;
                            for (; --T >= 0;) {
                                var y = i[--E] == l ? this.DM : Math.floor(i[E] * f + (i[E - 1] + v) * m);
                                if ((i[E] += _.am(0, y, i, T, 0, c)) < y)
                                    for (_.dlShiftTo(T, D), i.subTo(D, i); i[E] < --y;) i.subTo(D, i)
                            }
                            null != r && (i.drShiftTo(c, r), p != d && t.ZERO.subTo(r, r)), i.t = c, i.clamp(), u > 0 && i.rShiftTo(u, i), p < 0 && t.ZERO.subTo(i, i)
                        }
                    }
                }, t.prototype.rShiftTo = function(t, e) {
                    e.s = this.s;
                    var r = Math.floor(t / this.DB);
                    if (r >= this.t) e.t = 0;
                    else {
                        var i = t % this.DB,
                            s = this.DB - i,
                            a = (1 << i) - 1;
                        e[0] = this[r] >> i;
                        for (var o = r + 1; o < this.t; ++o) e[o - r - 1] |= (this[o] & a) << s, e[o - r] = this[o] >> i;
                        i > 0 && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, e.clamp()
                    }
                }, t.prototype.drShiftTo = function(t, e) {
                    for (var r = t; r < this.t; ++r) e[r - t] = this[r];
                    e.t = Math.max(this.t - t, 0), e.s = this.s
                }, t.prototype.subTo = function(t, e) {
                    for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;) i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
                    if (t.t < this.t) {
                        for (i -= t.s; r < this.t;) i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                        i += this.s
                    } else {
                        for (i += this.s; r < t.t;) i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                        i -= t.s
                    }
                    e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : i > 0 && (e[r++] = i), e.t = r, e.clamp()
                }, t.prototype.clamp = function() {
                    for (var t = this.s & this.DM; this.t > 0 && this[this.t - 1] == t;) --this.t
                }, t.prototype.modPowInt = function(t, e) {
                    var r;
                    return r = t < 256 || e.isEven() ? new u(e) : new c(e), this.exp(t, r)
                }, t.prototype.exp = function(e, r) {
                    if (e > 4294967295 || e < 1) return t.ONE;
                    var i = s(),
                        o = s(),
                        n = r.convert(this),
                        _ = a(e) - 1;
                    for (n.copyTo(i); --_ >= 0;)
                        if (r.sqrTo(i, o), (e & 1 << _) > 0) r.mulTo(o, n, i);
                        else {
                            var p = i;
                            i = o, o = p
                        }
                    return r.revert(i)
                }, t.prototype.isEven = function() {
                    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
                }, t.prototype.compareTo = function(t) {
                    var e = this.s - t.s;
                    if (0 != e) return e;
                    var r = this.t;
                    if (0 != (e = r - t.t)) return this.s < 0 ? -e : e;
                    for (; --r >= 0;)
                        if (0 != (e = this[r] - t[r])) return e;
                    return 0
                }, t.prototype.am1 = function(t, e, r, i, s, a) {
                    for (; --a >= 0;) {
                        var o = e * this[t++] + r[i] + s;
                        s = Math.floor(o / 67108864), r[i++] = 67108863 & o
                    }
                    return s
                }, t.prototype.am2 = function(t, e, r, i, s, a) {
                    for (var o = 32767 & e, n = e >> 15; --a >= 0;) {
                        var _ = 32767 & this[t],
                            p = this[t++] >> 15,
                            d = n * _ + p * o;
                        s = ((_ = o * _ + ((32767 & d) << 15) + r[i] + (1073741823 & s)) >>> 30) + (d >>> 15) + n * p + (s >>> 30), r[i++] = 1073741823 & _
                    }
                    return s
                }, t.prototype.am3 = function(t, e, r, i, s, a) {
                    for (var o = 16383 & e, n = e >> 14; --a >= 0;) {
                        var _ = 16383 & this[t],
                            p = this[t++] >> 14,
                            d = n * _ + p * o;
                        s = ((_ = o * _ + ((16383 & d) << 14) + r[i] + s) >> 28) + (d >> 14) + n * p, r[i++] = 268435455 & _
                    }
                    return s
                }, t
            }();

            function s() {
                return new i(null)
            }

            function a(t) {
                var e, r = 1;
                return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r
            }
            e.BigInteger = i, e.nbi = s, e.nbits = a;
            var o, n, _ = [];
            for (o = "0".charCodeAt(0), n = 0; n <= 9; ++n) _[o++] = n;
            for (o = "a".charCodeAt(0), n = 10; n < 36; ++n) _[o++] = n;
            for (o = "A".charCodeAt(0), n = 10; n < 36; ++n) _[o++] = n;

            function p(t, e) {
                var r = _[t.charCodeAt(e)];
                return null == r ? -1 : r
            }

            function d(t) {
                return "0123456789abcdefghijklmnopqrstuvwxyz".charAt(t)
            }
            e.intAt = p, e.int2char = d, e.b64toHex = function(t) {
                var e, r = "",
                    i = 0,
                    s = 0;
                for (e = 0; e < t.length && "=" != t.charAt(e); ++e) {
                    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(t.charAt(e));
                    a < 0 || (0 == i ? (r += d(a >> 2), s = 3 & a, i = 1) : 1 == i ? (r += d(s << 2 | a >> 4), s = 15 & a, i = 2) : 2 == i ? (r += d(s), r += d(a >> 2), s = 3 & a, i = 3) : (r += d(s << 2 | a >> 4), r += d(15 & a), i = 0))
                }
                return 1 == i && (r += d(s << 2)), r
            }, e.removeExtraSymbols = function(t) {
                return t.replace(/^1f+00/, "").replace("3031300d060960864801650304020105000420", "")
            };
            var u = function() {
                    function t(t) {
                        this.m = t
                    }
                    return t.prototype.convert = function(t) {
                        return t.s < 0 || t.compareTo(this.m) >= 0 ? t.mod(this.m) : t
                    }, t.prototype.revert = function(t) {
                        return t
                    }, t.prototype.reduce = function(t) {
                        t.divRemTo(this.m, null, t)
                    }, t.prototype.mulTo = function(t, e, r) {
                        t.multiplyTo(e, r), this.reduce(r)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }(),
                c = function() {
                    function t(t) {
                        this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t
                    }
                    return t.prototype.convert = function(t) {
                        var e = s();
                        return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && e.compareTo(i.ZERO) > 0 && this.m.subTo(e, e), e
                    }, t.prototype.revert = function(t) {
                        var e = s();
                        return t.copyTo(e), this.reduce(e), e
                    }, t.prototype.reduce = function(t) {
                        for (; t.t <= this.mt2;) t[t.t++] = 0;
                        for (var e = 0; e < this.m.t; ++e) {
                            var r = 32767 & t[e],
                                i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                            for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;) t[r] -= t.DV, t[++r]++
                        }
                        t.clamp(), t.drShiftTo(this.m.t, t), t.compareTo(this.m) >= 0 && t.subTo(this.m, t)
                    }, t.prototype.mulTo = function(t, e, r) {
                        t.multiplyTo(e, r), this.reduce(r)
                    }, t.prototype.sqrTo = function(t, e) {
                        t.squareTo(e), this.reduce(e)
                    }, t
                }();

            function l(t) {
                var e = s();
                return e.fromHexString(t.toString()), e
            }
            e.nbv = l, i.ZERO = l(0), i.ONE = l(1), "Microsoft Internet Explorer" == navigator.appName ? (i.prototype.am = i.prototype.am2, r = 30) : "Netscape" != navigator.appName ? (i.prototype.am = i.prototype.am1, r = 26) : (i.prototype.am = i.prototype.am3, r = 28), i.prototype.DB = r, i.prototype.DM = (1 << r) - 1, i.prototype.DV = 1 << r, i.prototype.FV = Math.pow(2, 52), i.prototype.F1 = 52 - r, i.prototype.F2 = 2 * r - 52
        },
        4950: function(t, e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = function() {
                function t() {}
                return t.hash = function(e) {
                    e = t.utf8Encode(e || "");
                    for (var r = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], i = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], s = (e += String.fromCharCode(128)).length / 4 + 2, a = Math.ceil(s / 16), o = new Array(a), n = 0; n < a; n++) {
                        o[n] = new Array(16);
                        for (var _ = 0; _ < 16; _++) o[n][_] = e.charCodeAt(64 * n + 4 * _) << 24 | e.charCodeAt(64 * n + 4 * _ + 1) << 16 | e.charCodeAt(64 * n + 4 * _ + 2) << 8 | e.charCodeAt(64 * n + 4 * _ + 3) << 0
                    }
                    var p = 8 * (e.length - 1) / Math.pow(2, 32),
                        d = 8 * (e.length - 1) >>> 0;
                    for (o[a - 1][14] = Math.floor(p), o[a - 1][15] = d, n = 0; n < a; n++) {
                        for (var u = new Array(64), c = 0; c < 16; c++) u[c] = o[n][c];
                        for (c = 16; c < 64; c++) u[c] = t.q1(u[c - 2]) + u[c - 7] + t.q0(u[c - 15]) + u[c - 16] >>> 0;
                        var l = i[0],
                            h = i[1],
                            f = i[2],
                            m = i[3],
                            v = i[4],
                            E = i[5],
                            T = i[6],
                            D = i[7];
                        for (c = 0; c < 64; c++) {
                            var y = D + t.z1(v) + t.Ch(v, E, T) + r[c] + u[c],
                                b = t.z0(l) + t.Maj(l, h, f);
                            D = T, T = E, E = v, v = m + y >>> 0, m = f, f = h, h = l, l = y + b >>> 0
                        }
                        i[0] = i[0] + l >>> 0, i[1] = i[1] + h >>> 0, i[2] = i[2] + f >>> 0, i[3] = i[3] + m >>> 0, i[4] = i[4] + v >>> 0, i[5] = i[5] + E >>> 0, i[6] = i[6] + T >>> 0, i[7] = i[7] + D >>> 0
                    }
                    var g = new Array(i.length);
                    for (D = 0; D < i.length; D++) g[D] = ("00000000" + i[D].toString(16)).slice(-8);
                    return g.join("")
                }, t.utf8Encode = function(t) {
                    try {
                        return (new TextEncoder).encode(t).reduce((function(t, e) {
                            return t + String.fromCharCode(e)
                        }), "")
                    } catch (e) {
                        return unescape(encodeURIComponent(t))
                    }
                }, t.ROTR = function(t, e) {
                    return e >>> t | e << 32 - t
                }, t.z0 = function(e) {
                    return t.ROTR(2, e) ^ t.ROTR(13, e) ^ t.ROTR(22, e)
                }, t.z1 = function(e) {
                    return t.ROTR(6, e) ^ t.ROTR(11, e) ^ t.ROTR(25, e)
                }, t.q0 = function(e) {
                    return t.ROTR(7, e) ^ t.ROTR(18, e) ^ e >>> 3
                }, t.q1 = function(e) {
                    return t.ROTR(17, e) ^ t.ROTR(19, e) ^ e >>> 10
                }, t.Ch = function(t, e, r) {
                    return t & e ^ ~t & r
                }, t.Maj = function(t, e, r) {
                    return t & e ^ t & r ^ e & r
                }, t
            }();
            e.Sha256 = r
        },
        1582: function(t, e, r) {
            var i = r(4611),
                s = r(4950);
            e.T = function(t, e, r, a) {
                var o = new i.BigInteger(i.b64toHex(e)),
                    n = new i.BigInteger(i.b64toHex(r)),
                    _ = o.modPowInt(a, n);
                return i.removeExtraSymbols(_.toHexString()) === s.Sha256.hash(t)
            }
        }
    },
    function(t) {
        t(t.s = 6201)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [9226], {
        3452: function(e, n, r) {
            var o = r(9853),
                c = r(2528),
                t = r(1477),
                i = r(5644),
                s = r(5755),
                u = r(8962),
                a = r(3494),
                f = r(9367);

            function l(e) {
                return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, l(e)
            }
            var d, y = "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$",
                v = [],
                g = {},
                p = !1,
                h = !0,
                b = "USD",
                C = !1,
                m = {},
                S = {},
                R = function() {
                    var e;

                    function n() {
                        e = (0, f.v)()
                    }
                    return n(), {
                        done: function() {
                            return e.resolve()
                        },
                        reset: n,
                        promise: function() {
                            return e.promise
                        }
                    }
                }();

            function w(e) {
                d ? ((0, o.logWarn)(e), (0, o.logWarn)("Currency failed loading rates, falling back to currency.defaultRates")) : (0, o.logError)(e)
            }

            function D(e) {
                g = {}, C = !0, (0, o.logInfo)("Installing addBidResponse decorator for currency module", arguments), (0, c.R)().convertCurrency = function(e, n, r) {
                    return parseFloat(e) * O(n, r)
                }, (0, a.v5)("addBidResponse").before(F, 100), h ? (h = !1, (0, s.h)(e, {
                    success: function(e) {
                        try {
                            m = JSON.parse(e), (0, o.logInfo)("currencyRates set to " + JSON.stringify(m)), p = !0, j(), R.done()
                        } catch (n) {
                            w("Failed to parse currencyRates response: " + e)
                        }
                    },
                    error: function() {
                        w.apply(void 0, arguments), R.done()
                    }
                })) : R.done()
            }

            function I() {
                (0, o.logInfo)("Uninstalling addBidResponse decorator for currency module", arguments), (0, a.v5)("addBidResponse").getHooks({
                    hook: F
                }).remove(), delete(0, c.R)().convertCurrency, b = "USD", g = {}, C = !1, p = !1, h = !0, m = {}, S = {}
            }

            function F(e, n, r) {
                if (!r) return e.call(this, n);
                var c = r.bidderCode || r.bidder;
                if (S[c]) {
                    var s = S[c];
                    r.currency && s !== r.currency ? (0, o.logWarn)("Currency default '".concat(c, ": ").concat(s, "' ignored. adapter specified '").concat(r.currency, "'")) : r.currency = s
                }
                if (r.currency || ((0, o.logWarn)('Currency not specified on bid.  Defaulted to "USD"'), r.currency = "USD"), r.getCpmInNewCurrency = function(e) {
                        return (parseFloat(this.cpm) * O(this.currency, e)).toFixed(3)
                    }, r.currency === b) return e.call(this, n, r);
                v.push(function(e, n, r) {
                    return function() {
                        var c = r[1];
                        if (void 0 !== c && "currency" in c && "cpm" in c) {
                            var s = c.currency;
                            try {
                                var u = O(s);
                                1 !== u && (c.cpm = (parseFloat(c.cpm) * u).toFixed(4), c.currency = b)
                            } catch (e) {
                                (0, o.logWarn)("Returning NO_BID, getCurrencyConversion threw error: ", e), r[1] = (0, t.m)(i.Q_.NO_BID, c.getIdentifiers())
                            }
                        }
                        return e.apply(n, r)
                    }
                }(e, this, [n, r])), !C || p ? j() : e.bail(R.promise())
            }

            function j() {
                for (; v.length > 0;) v.shift()()
            }

            function O(e) {
                var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                    c = null,
                    t = "".concat(e, "->").concat(r);
                if (t in g) c = g[t], (0, o.logMessage)("Using conversionCache value " + c + " for " + t);
                else if (!1 === C) {
                    if ("USD" !== e) throw new Error("Prebid currency support has not been enabled and fromCurrency is not USD");
                    c = 1
                } else if (e === r) c = 1;
                else if (e in m.conversions) {
                    if (!(r in (n = m.conversions[e]))) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                    c = n[r], (0, o.logInfo)("getCurrencyConversion using direct " + e + " to " + r + " conversionRate " + c)
                } else if (r in m.conversions) {
                    if (!(e in (n = m.conversions[r]))) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                    c = U(1 / n[e], 4), (0, o.logInfo)("getCurrencyConversion using reciprocal " + e + " to " + r + " conversionRate " + c)
                } else {
                    var i = Object.keys(m.conversions)[0];
                    if (!(e in m.conversions[i])) throw new Error("Specified fromCurrency '" + e + "' not found in the currency rates file");
                    var s = 1 / m.conversions[i][e];
                    if (!(r in m.conversions[i])) throw new Error("Specified adServerCurrency in config '" + r + "' not found in the currency rates file");
                    var u = m.conversions[i][r];
                    c = U(s * u, 4), (0, o.logInfo)("getCurrencyConversion using intermediate " + e + " thru " + i + " to " + r + " conversionRate " + c)
                }
                return t in g || ((0, o.logMessage)("Adding conversionCache value " + c + " for " + t), g[t] = c), c
            }

            function U(e, n) {
                for (var r = 1, o = 0; o < n; o++) r += "0";
                return Math.round(e * r) / r
            }
            u.vc.getConfig("currency", (function(e) {
                return function(e) {
                    var n = y;
                    if ("object" === l(e.rates) && (m.conversions = e.rates, p = !0, h = !1), "object" === l(e.defaultRates) && (d = e.defaultRates, m.conversions = d, p = !0), "string" == typeof e.adServerCurrency) {
                        (0, o.logInfo)("enabling currency support", arguments), b = e.adServerCurrency, e.conversionRateFile && ((0, o.logInfo)("currency using override conversionRateFile:", e.conversionRateFile), n = e.conversionRateFile);
                        var r = n.indexOf("$$TODAY$$");
                        if (-1 !== r) {
                            var c = new Date,
                                t = "".concat(c.getMonth() + 1),
                                i = "".concat(c.getDate());
                            t.length < 2 && (t = "0".concat(t)), i.length < 2 && (i = "0".concat(i));
                            var s = "".concat(c.getFullYear()).concat(t).concat(i);
                            n = "".concat(n.substring(0, r)).concat(s).concat(n.substring(r + 9, n.length))
                        }
                        D(n)
                    } else(0, o.logInfo)("disabling currency support"), I();
                    "object" === l(e.bidderCurrencyDefault) && (S = e.bidderCurrencyDefault)
                }(e.currency)
            })), window.fusePbjs.installedModules.push("currency")
        }
    },
    function(e) {
        e(e.s = 3452)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [8534], {
        498: function(e, t, n) {
            var r = n(265),
                a = n(9853),
                i = n(4806),
                o = n(8962),
                d = n(1609),
                s = n(8265),
                c = n(1879);

            function u(e) {
                return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, u(e)
            }

            function p(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            var m = [s.Mk, s.pX],
                l = ["startdelay", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playbackmethod", "api", "protocols", "boxingallowed", "linearity", "delivery", "protocol", "placement", "minbitrate", "maxbitrate"],
                f = {
                    britepoolid: "britepoolid",
                    criteoId: "criteoid",
                    fabrickId: "nuestarid",
                    haloId: "audigentid",
                    id5id: "id5id",
                    idl_env: "lre",
                    IDP: "zeotapid",
                    idxId: "idxid",
                    intentIqId: "intentiqid",
                    lipb: "lipbid",
                    lotamePanoramaId: "lotameid",
                    merkleId: "merkleid",
                    netId: "netid",
                    parrableId: "parrableid",
                    pubcid: "pubcid",
                    quantcastId: "quantcastid",
                    tapadId: "tapadid",
                    tdid: "ttduuid",
                    uid2: "uid2",
                    flocId: "floc",
                    admixerId: "admixerid",
                    deepintentId: "deepintentid",
                    dmdId: "dmdid",
                    nextrollId: "nextrollid",
                    novatiq: "novatiqid",
                    mwOpenLinkId: "mwopenlinkid",
                    dapId: "dapid",
                    amxId: "amxid",
                    kpuid: "kpuid",
                    publinkId: "publinkid",
                    naveggId: "naveggid",
                    imuid: "imuid",
                    adtelligentId: "adtelligentid"
                },
                h = {
                    code: "openx",
                    gvlid: 69,
                    supportedMediaTypes: m,
                    isBidRequestValid: function(e) {
                        var t = e.params.delDomain || e.params.platform;
                        return (0, r.Z)(e, "mediaTypes.banner") && t ? !!e.params.unit || (0, r.Z)(e, "mediaTypes.banner.sizes.length") > 0 : !(!e.params.unit || !t)
                    },
                    buildRequests: function(e, t) {
                        if (0 === e.length) return [];
                        var n, i, d = [],
                            u = function(e) {
                                return e.reduce((function(e, t) {
                                    var n;
                                    return n = t, (0, r.Z)(n, "mediaTypes.video") && !(0, r.Z)(n, "mediaTypes.banner") || n.mediaType === s.pX ? e[0].push(t) : e[1].push(t), e
                                }), [
                                    [],
                                    []
                                ])
                            }(e),
                            m = (i = 2, function(e) {
                                if (Array.isArray(e)) return e
                            }(n = u) || function(e, t) {
                                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (null != n) {
                                    var r, a, i = [],
                                        o = !0,
                                        d = !1;
                                    try {
                                        for (n = n.call(e); !(o = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); o = !0);
                                    } catch (e) {
                                        d = !0, a = e
                                    } finally {
                                        try {
                                            o || null == n.return || n.return()
                                        } finally {
                                            if (d) throw a
                                        }
                                    }
                                    return i
                                }
                            }(n, i) || function(e, t) {
                                if (e) {
                                    if ("string" == typeof e) return p(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0
                                }
                            }(n, i) || function() {
                                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }()),
                            f = m[0],
                            h = m[1];
                        return h.length > 0 && d.push(function(e, t) {
                            var n = [],
                                i = !1,
                                d = b(e, t),
                                c = (0, a._map)(e, (function(e) {
                                    return e.params.unit
                                }));
                            return d.aus = (0, a._map)(e, (function(e) {
                                return (0, a.parseSizesInput)(e.mediaTypes.banner.sizes).join(",")
                            })).join("|"), d.divids = (0, a._map)(e, (function(e) {
                                return encodeURIComponent(e.adUnitCode)
                            })).join(","), d.aucs = (0, a._map)(e, (function(e) {
                                var t = (0, r.Z)(e, "ortb2Imp.ext.data.pbadslot");
                                return encodeURIComponent(t || "")
                            })).join(","), c.some((function(e) {
                                return e
                            })) && (d.auid = c.join(",")), e.some((function(e) {
                                return e.params.doNotTrack
                            })) && (d.ns = 1), (!0 === o.vc.getConfig("coppa") || e.some((function(e) {
                                return e.params.coppa
                            }))) && (d.tfcd = 1), e.forEach((function(e) {
                                if (e.params.customParams) {
                                    var t = (0, a._map)(Object.keys(e.params.customParams), (function(t) {
                                            return function(e, t) {
                                                var n = t[e];
                                                return (0, a.isArray)(n) && (n = n.join(",")), (e.toLowerCase() + "=" + n.toLowerCase()).replace("+", ".").replace("/", "_")
                                            }(t, e.params.customParams)
                                        })),
                                        r = window.btoa(t.join("&"));
                                    i = !0, n.push(r)
                                } else n.push("")
                            })), i && (d.tps = n.join(",")), g(d, s.Mk, e), {
                                method: "GET",
                                url: d.ph ? "https://u.openx.net/w/1.0/arj" : "https://".concat(e[0].params.delDomain, "/w/1.0/arj"),
                                data: d,
                                payload: {
                                    bids: e,
                                    startTime: new Date
                                }
                            }
                        }(h, t)), f.length > 0 && f.forEach((function(e) {
                            d.push(function(e, t) {
                                var n = function(e, t) {
                                    var n, i, o = (0, r.Z)(e, "mediaTypes.video"),
                                        d = b([e], t),
                                        u = (0, r.Z)(e, "params.video") || {},
                                        p = (0, r.Z)(e, "mediaTypes.video.context"),
                                        m = (0, r.Z)(e, "mediaTypes.video.playerSize");
                                    (0, a.isArray)(e.sizes) && 2 === e.sizes.length && !(0, a.isArray)(e.sizes[0]) ? (n = parseInt(e.sizes[0], 10), i = parseInt(e.sizes[1], 10)) : (0, a.isArray)(e.sizes) && (0, a.isArray)(e.sizes[0]) && 2 === e.sizes[0].length ? (n = parseInt(e.sizes[0][0], 10), i = parseInt(e.sizes[0][1], 10)) : (0, a.isArray)(m) && 2 === m.length && (n = parseInt(m[0], 10), i = parseInt(m[1], 10));
                                    var f = {
                                            w: n,
                                            h: i
                                        },
                                        h = e.params.video || e.params.openrtb || {};
                                    h.openrtb && (h = h.openrtb), (0, a.isArray)(h.imp) && (h = h.imp[0].video), Object.keys(h).filter((function(e) {
                                        return (0, c.q9)(l, e)
                                    })).forEach((function(e) {
                                        return f[e] = h[e]
                                    })), Object.keys(o).filter((function(e) {
                                        return (0, c.q9)(l, e)
                                    })).forEach((function(e) {
                                        return f[e] = o[e]
                                    }));
                                    var v = {
                                        imp: [{
                                            video: f
                                        }]
                                    };
                                    d.openrtb = JSON.stringify(v), d.auid = e.params.unit, d.vwd = n || u.vwd, d.vht = i || u.vht, "outstream" === p && (d.vos = "101"), u.mimes && (d.vmimes = u.mimes), e.params.test && (d.vtest = 1);
                                    var y = (0, r.Z)(e, "ortb2Imp.ext.data.pbadslot");
                                    return y && (d.aucs = encodeURIComponent(y)), g(d, s.pX, [e]), d
                                }(e, t);
                                return {
                                    method: "GET",
                                    url: n.ph ? "https://u.openx.net/v/1.0/avjp" : "https://".concat(e.params.delDomain, "/v/1.0/avjp"),
                                    data: n,
                                    payload: {
                                        bid: e,
                                        startTime: new Date
                                    }
                                }
                            }(e, t))
                        })), d
                    },
                    interpretResponse: function(e, t) {
                        var n = e.body,
                            r = function(e) {
                                return /avjp$/.test(e.url) ? s.pX : s.Mk
                            }(t);
                        return r === s.pX ? function(e, t) {
                            var n = t.bid,
                                r = (t.startTime, []);
                            if (void 0 !== e && "" !== e.vastUrl && e.pub_rev > 0) {
                                var i = (0, a.parseUrl)(e.vastUrl).search || {},
                                    o = {};
                                o.requestId = n.bidId, e.deal_id && (o.dealId = e.deal_id), o.ttl = 300, o.netRevenue = !0, o.currency = e.currency, o.cpm = parseInt(e.pub_rev, 10) / 1e3, o.width = parseInt(e.width, 10), o.height = parseInt(e.height, 10), o.creativeId = e.adid, o.vastUrl = e.vastUrl, o.mediaType = s.pX, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, r.push(o)
                            }
                            return r
                        }(n, t.payload) : function(e, t) {
                            for (var n = t.bids, r = (t.startTime, e.ads.ad), a = [], i = 0; i < r.length; i++) {
                                var o = r[i],
                                    d = parseInt(o.idx, 10),
                                    s = {};
                                if (s.requestId = n[d].bidId, o.pub_rev) {
                                    s.cpm = Number(o.pub_rev) / 1e3;
                                    var c = o.creative[0];
                                    c && (s.width = c.width, s.height = c.height), s.creativeId = c.id, s.ad = o.html, o.deal_id && (s.dealId = o.deal_id), s.ttl = 300, s.netRevenue = !0, s.currency = o.currency, o.tbd && (s.tbd = o.tbd), s.ts = o.ts, s.meta = {}, o.brand_id && (s.meta.brandId = o.brand_id), o.adomain && length(o.adomain) > 0 ? s.meta.advertiserDomains = o.adomain : s.meta.advertiserDomains = [], o.adv_id && (s.meta.dspid = o.adv_id), a.push(s)
                                }
                            }
                            return a
                        }(n, t.payload)
                    },
                    getUserSyncs: function(e, t, n, a) {
                        if (e.iframeEnabled || e.pixelEnabled) {
                            var i = e.iframeEnabled ? "iframe" : "image",
                                o = (0, r.Z)(t, "0.body.ads.pixels") || (0, r.Z)(t, "0.body.pixels") || function(e, t) {
                                    var n = [];
                                    return e && (n.push("gdpr=" + (e.gdprApplies ? 1 : 0)), n.push("gdpr_consent=" + encodeURIComponent(e.consentString || ""))), t && n.push("us_privacy=" + encodeURIComponent(t)), "".concat("https://u.openx.net/w/1.0/pd").concat(n.length > 0 ? "?" + n.join("&") : "")
                                }(n, a);
                            return [{
                                type: i,
                                url: o
                            }]
                        }
                    },
                    transformBidParams: function(e, t) {
                        return (0, a.convertTypes)({
                            unit: "string",
                            customFloor: "number"
                        }, e)
                    }
                };

            function v(e) {
                var t, n, r, a = window,
                    i = document,
                    o = i.documentElement;
                if (e) {
                    try {
                        a = window.top, i = window.top.document
                    } catch (e) {
                        return
                    }
                    o = i.documentElement, r = i.body, t = a.innerWidth || o.clientWidth || r.clientWidth, n = a.innerHeight || o.clientHeight || r.clientHeight
                } else o = i.documentElement, t = a.innerWidth || o.clientWidth, n = a.innerHeight || o.clientHeight;
                return "".concat(t, "x").concat(n)
            }

            function b(e, t) {
                var n, d = (0, a.inIframe)();
                n = {
                    ju: o.vc.getConfig("pageUrl") || t.refererInfo.referer,
                    ch: document.charSet || document.characterSet,
                    res: "".concat(screen.width, "x").concat(screen.height, "x").concat(screen.colorDepth),
                    ifr: d,
                    tz: (new Date).getTimezoneOffset(),
                    tws: v(d),
                    be: 1,
                    bc: e[0].params.bc || "".concat("hb_pb", "_").concat("3.0.3"),
                    dddid: (0, a._map)(e, (function(e) {
                        return e.transactionId
                    })).join(","),
                    nocache: (new Date).getTime()
                };
                var s = y("ortb2.user.data");
                s.length > 0 && (n.sm = s);
                var c, u, p, m, l, h = y("ortb2.site.content.data");
                if (h.length > 0 && (n.scsm = h), e[0].params.platform && (n.ph = e[0].params.platform), t.gdprConsent) {
                    var b = t.gdprConsent;
                    void 0 !== b.consentString && (n.gdpr_consent = b.consentString), void 0 !== b.gdprApplies && (n.gdpr = b.gdprApplies ? 1 : 0), "iab" === o.vc.getConfig("consentManagement.cmpApi") && (n.x_gdpr_f = 1)
                }
                return t && t.uspConsent && (n.us_privacy = t.uspConsent), (0, r.Z)(e[0], "crumbs.pubcid") && (0, i.Z)(e[0], "userId.pubcid", (0, r.Z)(e[0], "crumbs.pubcid")), c = n, u = e[0].userId, (0, a._each)(u, (function(e, t) {
                    var n = f[t];
                    if (f.hasOwnProperty(t)) switch (t) {
                        case "merkleId":
                        case "flocId":
                        case "uid2":
                            c[n] = e.id;
                            break;
                        case "lipb":
                            if (c[n] = e.lipbid, Array.isArray(e.segments) && e.segments.length > 0) {
                                var r = "liveintent:" + e.segments.join("|");
                                c.sm = "".concat(c.sm ? c.sm + "," : "").concat(r)
                            }
                            break;
                        case "parrableId":
                            c[n] = e.eid;
                            break;
                        case "id5id":
                            c[n] = e.uid;
                            break;
                        case "novatiq":
                            c[n] = e.snowflake;
                            break;
                        default:
                            c[n] = e
                    }
                })), n = c, e[0].schain && (n.schain = (p = e[0].schain, "".concat(p.ver, ",").concat(p.complete, "!").concat((m = p.nodes, l = ["asi", "sid", "hp", "rid", "name", "domain"], m.map((function(e) {
                    return l.map((function(t) {
                        return e[t] || ""
                    })).join(",")
                })).join("!"))))), n
            }

            function y(e) {
                var t = o.vc.getConfig(e);
                if (!Array.isArray(t) || !t.length) return "";
                var n = t.filter((function(e) {
                    return Array.isArray(e.segment) && e.segment.length > 0 && void 0 !== e.name && e.name.length > 0
                })).reduce((function(e, t) {
                    var n = "object" === u(t.ext) && t.ext.segtax ? "".concat(t.name, "/").concat(t.ext.segtax) : t.name;
                    return e[n] = (e[n] || []).concat(t.segment.map((function(e) {
                        return e.id
                    }))), e
                }), {});
                return Object.keys(n).map((function(e, t) {
                    return e + ":" + n[e].join("|")
                })).join(",")
            }

            function g(e, t, n) {
                var r = [],
                    a = !1;
                n.forEach((function(e) {
                    var n = function(e, t) {
                        var n = {},
                            r = o.vc.getConfig("currency.adServerCurrency") || "USD";
                        "function" == typeof e.getFloor && (n = e.getFloor({
                            currency: r,
                            mediaType: t,
                            size: "*"
                        }));
                        var a = n.floor || e.params.customFloor || 0;
                        return Math.round(1e3 * a)
                    }(e, t);
                    n ? (r.push(n), a = !0) : r.push(0)
                })), a && (e.aumfs = r.join(","))
            }(0, d.dX)(h), window.fusePbjs.installedModules.push("openxBidAdapter")
        }
    },
    function(e) {
        e(e.s = 498)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [5126], {
        8139: function(e, r, a) {
            var t = a(9853),
                i = a(265),
                n = a(4806),
                s = a(1609),
                o = a(8265),
                d = a(8962),
                p = a(4877),
                c = a(9624);

            function l() {
                return l = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var a = arguments[r];
                        for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                    }
                    return e
                }, l.apply(this, arguments)
            }

            function u(e, r) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    r && (t = t.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), a.push.apply(a, t)
                }
                return a
            }

            function m(e, r, a) {
                return r in e ? Object.defineProperty(e, r, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = a, e
            }

            function g(e) {
                return g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, g(e)
            }
            var f = "PubMatic: ",
                h = "USD",
                b = void 0,
                y = "https://pubmatic.bbvms.com/r/".concat("$RENDERER", ".js"),
                v = {
                    kadpageurl: "",
                    gender: "",
                    yob: "",
                    lat: "",
                    lon: "",
                    wiid: "",
                    profId: "",
                    verId: ""
                },
                E = "number",
                I = "array",
                w = {
                    mimes: I,
                    minduration: E,
                    maxduration: E,
                    startdelay: E,
                    playbackmethod: I,
                    api: I,
                    protocols: I,
                    w: E,
                    h: E,
                    battr: I,
                    linearity: E,
                    placement: E,
                    minbitrate: E,
                    maxbitrate: E,
                    skip: E
                },
                P = {
                    TITLE: {
                        ID: 1,
                        KEY: "title",
                        TYPE: 0
                    },
                    IMAGE: {
                        ID: 2,
                        KEY: "image",
                        TYPE: 0
                    },
                    ICON: {
                        ID: 3,
                        KEY: "icon",
                        TYPE: 0
                    },
                    SPONSOREDBY: {
                        ID: 4,
                        KEY: "sponsoredBy",
                        TYPE: 1
                    },
                    BODY: {
                        ID: 5,
                        KEY: "body",
                        TYPE: 2
                    },
                    CLICKURL: {
                        ID: 6,
                        KEY: "clickUrl",
                        TYPE: 0
                    },
                    VIDEO: {
                        ID: 7,
                        KEY: "video",
                        TYPE: 0
                    },
                    EXT: {
                        ID: 8,
                        KEY: "ext",
                        TYPE: 0
                    },
                    DATA: {
                        ID: 9,
                        KEY: "data",
                        TYPE: 0
                    },
                    LOGO: {
                        ID: 10,
                        KEY: "logo",
                        TYPE: 0
                    },
                    SPONSORED: {
                        ID: 11,
                        KEY: "sponsored",
                        TYPE: 1
                    },
                    DESC: {
                        ID: 12,
                        KEY: "data",
                        TYPE: 2
                    },
                    RATING: {
                        ID: 13,
                        KEY: "rating",
                        TYPE: 3
                    },
                    LIKES: {
                        ID: 14,
                        KEY: "likes",
                        TYPE: 4
                    },
                    DOWNLOADS: {
                        ID: 15,
                        KEY: "downloads",
                        TYPE: 5
                    },
                    PRICE: {
                        ID: 16,
                        KEY: "price",
                        TYPE: 6
                    },
                    SALEPRICE: {
                        ID: 17,
                        KEY: "saleprice",
                        TYPE: 7
                    },
                    PHONE: {
                        ID: 18,
                        KEY: "phone",
                        TYPE: 8
                    },
                    ADDRESS: {
                        ID: 19,
                        KEY: "address",
                        TYPE: 9
                    },
                    DESC2: {
                        ID: 20,
                        KEY: "desc2",
                        TYPE: 10
                    },
                    DISPLAYURL: {
                        ID: 21,
                        KEY: "displayurl",
                        TYPE: 11
                    },
                    CTA: {
                        ID: 22,
                        KEY: "cta",
                        TYPE: 12
                    }
                },
                O = [{
                    id: P.SPONSOREDBY.ID,
                    required: !0,
                    data: {
                        type: 1
                    }
                }, {
                    id: P.TITLE.ID,
                    required: !0
                }, {
                    id: P.IMAGE.ID,
                    required: !0
                }],
                T = {
                    1: "PMP",
                    5: "PREF",
                    6: "PMPG"
                },
                D = {
                    bootstrapPlayer: function(e) {
                        var r = {
                            code: e.adUnitCode
                        };
                        if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                            for (var a, i = D.getRendererId("pubmatic", e.rendererCode), n = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++)
                                if (window.bluebillywig.renderers[s]._id === i) {
                                    a = window.bluebillywig.renderers[s];
                                    break
                                }
                            a ? a.bootstrap(r, n) : (0, t.logWarn)("".concat(f, ": Couldn't find a renderer with ").concat(i))
                        } else(0, t.logWarn)("".concat(f, ": No vastXml or vastUrl on bid, bailing..."))
                    },
                    newRenderer: function(e, r) {
                        var a = y.replace("$RENDERER", e),
                            i = p.Th.install({
                                url: a,
                                loaded: !1,
                                adUnitCode: r
                            });
                        try {
                            i.setRender(D.outstreamRender)
                        } catch (e) {
                            (0, t.logWarn)("".concat(f, ": Error tying to setRender on renderer"), e)
                        }
                        return i
                    },
                    outstreamRender: function(e) {
                        e.renderer.push((function() {
                            D.bootstrapPlayer(e)
                        }))
                    },
                    getRendererId: function(e, r) {
                        return "".concat(e, "-").concat(r)
                    }
                },
                S = [o.Mk, o.pX, o.B5],
                x = 0,
                Y = !1,
                k = {},
                C = {};

            function R(e, r) {
                if (!(0, t.isStr)(r)) return r && (0, t.logWarn)("PubMatic: Ignoring param key: " + e + ", expects string-value, found " + g(r)), b;
                switch (e) {
                    case "pmzoneid":
                        return r.split(",").slice(0, 50).map((function(e) {
                            return e.trim()
                        })).join();
                    case "kadfloor":
                    case "lat":
                    case "lon":
                        return parseFloat(r) || b;
                    case "yob":
                        return parseInt(r) || b;
                    default:
                        return r
                }
            }

            function A(e, r, a) {
                var i, n = "Ignoring param key: " + e + ", expects " + a + ", found " + g(r);
                switch (a) {
                    case "boolean":
                        i = t.isBoolean;
                        break;
                    case E:
                        i = t.isNumber;
                        break;
                    case "string":
                        i = t.isStr;
                        break;
                    case I:
                        i = t.isArray
                }
                return i(r) ? r : ((0, t.logWarn)(f + n), b)
            }

            function M(e, r) {
                var a = e.KEY;
                return {
                    id: e.ID,
                    required: r[a].required ? 1 : 0,
                    data: {
                        type: e.TYPE,
                        len: r[a].len,
                        ext: r[a].ext
                    }
                }
            }

            function z(e) {
                var r = {
                    assets: []
                };
                for (var a in e) {
                    if (e.hasOwnProperty(a)) {
                        var i = {};
                        if (!(r.assets && r.assets.length > 0 && r.assets.hasOwnProperty(a))) switch (a) {
                            case P.TITLE.KEY:
                                e[a].len || e[a].length ? i = {
                                    id: P.TITLE.ID,
                                    required: e[a].required ? 1 : 0,
                                    title: {
                                        len: e[a].len || e[a].length,
                                        ext: e[a].ext
                                    }
                                } : (0, t.logWarn)("PubMatic: Error: Title Length is required for native ad: " + JSON.stringify(e));
                                break;
                            case P.IMAGE.KEY:
                                e[a].sizes && e[a].sizes.length > 0 ? i = {
                                    id: P.IMAGE.ID,
                                    required: e[a].required ? 1 : 0,
                                    img: {
                                        type: 3,
                                        w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : b),
                                        h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : b),
                                        wmin: e[a].wmin || e[a].minimumWidth || (e[a].minsizes ? e[a].minsizes[0] : b),
                                        hmin: e[a].hmin || e[a].minimumHeight || (e[a].minsizes ? e[a].minsizes[1] : b),
                                        mimes: e[a].mimes,
                                        ext: e[a].ext
                                    }
                                } : (0, t.logWarn)("PubMatic: Error: Image sizes is required for native ad: " + JSON.stringify(e));
                                break;
                            case P.ICON.KEY:
                                e[a].sizes && e[a].sizes.length > 0 ? i = {
                                    id: P.ICON.ID,
                                    required: e[a].required ? 1 : 0,
                                    img: {
                                        type: 1,
                                        w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : b),
                                        h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : b)
                                    }
                                } : (0, t.logWarn)("PubMatic: Error: Icon sizes is required for native ad: " + JSON.stringify(e));
                                break;
                            case P.VIDEO.KEY:
                                i = {
                                    id: P.VIDEO.ID,
                                    required: e[a].required ? 1 : 0,
                                    video: {
                                        minduration: e[a].minduration,
                                        maxduration: e[a].maxduration,
                                        protocols: e[a].protocols,
                                        mimes: e[a].mimes,
                                        ext: e[a].ext
                                    }
                                };
                                break;
                            case P.EXT.KEY:
                                i = {
                                    id: P.EXT.ID,
                                    required: e[a].required ? 1 : 0
                                };
                                break;
                            case P.LOGO.KEY:
                                i = {
                                    id: P.LOGO.ID,
                                    required: e[a].required ? 1 : 0,
                                    img: {
                                        type: 2,
                                        w: e[a].w || e[a].width || (e[a].sizes ? e[a].sizes[0] : b),
                                        h: e[a].h || e[a].height || (e[a].sizes ? e[a].sizes[1] : b)
                                    }
                                };
                                break;
                            case P.SPONSOREDBY.KEY:
                            case P.BODY.KEY:
                            case P.RATING.KEY:
                            case P.LIKES.KEY:
                            case P.DOWNLOADS.KEY:
                            case P.PRICE.KEY:
                            case P.SALEPRICE.KEY:
                            case P.PHONE.KEY:
                            case P.ADDRESS.KEY:
                            case P.DESC2.KEY:
                            case P.DISPLAYURL.KEY:
                            case P.CTA.KEY:
                                i = M(C[a], e)
                        }
                    }
                    i && i.id && (r.assets[r.assets.length] = i)
                }
                var n = O.length,
                    s = 0;
                return O.forEach((function(e) {
                    for (var a = r.assets.length, t = 0; t < a; t++)
                        if (e.id == r.assets[t].id) {
                            s++;
                            break
                        }
                })), Y = n != s, r
            }

            function K(e) {
                var r, a = e.mediaTypes.banner.sizes,
                    i = [];
                if (a !== b && (0, t.isArray)(a)) {
                    if (r = {}, e.params.width || e.params.height) r.w = e.params.width, r.h = e.params.height;
                    else {
                        if (0 === a.length) return r = b, (0, t.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r;
                        r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1)
                    }
                    a.length > 0 && (i = [], a.forEach((function(e) {
                        e.length > 1 && i.push({
                            w: e[0],
                            h: e[1]
                        })
                    })), i.length > 0 && (r.format = i)), r.pos = 0, r.topframe = (0, t.inIframe)() ? 0 : 1
                } else(0, t.logWarn)("PubMatic: Error: mediaTypes.banner.size missing for adunit: " + e.params.adUnit + ". Ignoring the banner impression in the adunit."), r = b;
                return r
            }

            function N(e) {
                var r, a = (0, t.mergeDeep)((0, i.Z)(e.mediaTypes, "video"), e.params.video);
                if (a !== b) {
                    for (var n in r = {},
                            function(e, r) {
                                (0, i.Z)(e, "placement") || (0, t.logWarn)("Video.Placement param missing for " + r)
                            }(a, e.adUnitCode), w) a.hasOwnProperty(n) && (r[n] = A(n, a[n], w[n]));
                    (0, t.isArray)(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : (0, t.isNumber)(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10))
                } else r = b, (0, t.logWarn)("PubMatic: Error: Video config params missing for adunit: " + e.params.adUnit + " with mediaType set as video. Ignoring video impression in the adunit.");
                return r
            }

            function j(e, r, a) {
                var t = r.rtd && r.rtd.jwplayer && r.rtd.jwplayer.targeting || void 0,
                    i = "";
                if (void 0 !== t && "" !== t && t.hasOwnProperty("segments")) {
                    var n, s = t.segments.length;
                    i += "jw-id=" + t.content.id;
                    for (var o = 0; o < s; o++) i += "|jw-" + t.segments[o] + "=1";
                    a ? void 0 === e.dctr || 0 == e.dctr.length ? e.dctr = i : e.dctr += "|" + i : (n = e.ext) && void 0 === n.key_val ? n.key_val = i : n.key_val += "|" + i
                }
            }

            function U(e, r) {
                var a = null,
                    t = (0, i.Z)(e, "0.userId.flocId");
                return t && t.id && (a = 2 === r ? {
                    id: "FLOC",
                    name: "FLOC",
                    ext: {
                        ver: t.version
                    },
                    segment: [{
                        id: t.id,
                        name: "chrome.com",
                        value: t.id.toString()
                    }]
                } : {
                    source: "chrome.com",
                    uids: [{
                        atype: 1,
                        id: t.id,
                        ext: {
                            ver: t.version
                        }
                    }]
                }), a
            }

            function q(e, r) {
                (r = r.filter((function(e) {
                    return "string" == typeof e || ((0, t.logWarn)("PubMatic: acat: Each category should be a string, ignoring category: " + e), !1)
                })).map((function(e) {
                    return e.trim()
                })).filter((function(e, r, a) {
                    return a.indexOf(e) === r
                }))).length > 0 && ((0, t.logWarn)("PubMatic: acat: Selected: ", r), e.ext.acat = r)
            }

            function W(e) {
                return !0 === (0, t.isArray)(e) && e.length > 0
            }(0, t._each)(P, (function(e) {
                k[e.ID] = e.KEY
            })), (0, t._each)(P, (function(e) {
                C[e.KEY] = e
            }));
            var L = {
                code: "pubmatic",
                gvlid: 76,
                supportedMediaTypes: [o.Mk, o.pX, o.B5],
                isBidRequestValid: function(e) {
                    if (e && e.params) {
                        if (!(0, t.isStr)(e.params.publisherId)) return (0, t.logWarn)("PubMatic: Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: " + JSON.stringify(e)), !1;
                        if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.pX)) {
                            var r = (0, i.Z)(e.mediaTypes, "video.mimes"),
                                a = (0, i.Z)(e, "params.video.mimes");
                            if (!1 === W(r) && !1 === W(a)) return (0, t.logWarn)("PubMatic: Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:" + JSON.stringify(e)), !1;
                            if (!e.mediaTypes[o.pX].hasOwnProperty("context")) return (0, t.logError)("".concat(f, ": no context specified in bid. Rejecting bid: "), e), !1;
                            if ("outstream" === e.mediaTypes[o.pX].context && !(0, t.isStr)(e.params.outstreamAU) && !e.hasOwnProperty("renderer") && !e.mediaTypes[o.pX].hasOwnProperty("renderer")) return e.mediaTypes.hasOwnProperty(o.Mk) || e.mediaTypes.hasOwnProperty(o.B5) ? (delete e.mediaTypes[o.pX], (0, t.logWarn)("".concat(f, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting mediatype Video of bid: '), e), !0) : ((0, t.logError)("".concat(f, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1)
                        }
                        return !0
                    }
                    return !1
                },
                buildRequests: function(e, r) {
                    var a, s, p, y, E;
                    r && r.refererInfo && (E = r.refererInfo);
                    var I, w = function(e) {
                            return {
                                pageURL: e && e.referer ? e.referer : window.location.href,
                                refURL: window.document.referrer
                            }
                        }(E),
                        P = function(e) {
                            return {
                                id: "" + (new Date).getTime(),
                                at: 1,
                                cur: [h],
                                imp: [],
                                site: {
                                    page: e.pageURL,
                                    ref: e.refURL,
                                    publisher: {}
                                },
                                device: {
                                    ua: navigator.userAgent,
                                    js: 1,
                                    dnt: "yes" == navigator.doNotTrack || "1" == navigator.doNotTrack || "1" == navigator.msDoNotTrack ? 1 : 0,
                                    h: screen.height,
                                    w: screen.width,
                                    language: navigator.language
                                },
                                user: {},
                                ext: {}
                            }
                        }(w),
                        O = "",
                        T = [],
                        D = [],
                        S = [];
                    if (e.forEach((function(e) {
                            if ((I = (0, t.deepClone)(e)).params.adSlot = I.params.adSlot || "", function(e) {
                                    var r;
                                    e.params.adUnit = "", e.params.adUnitIndex = "0", e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, (0, t.isStr)(r) ? r.replace(/^\s+/g, "").replace(/\s+$/g, "") : (r && (0, t.logWarn)("pubmatic: adSlot must be a string. Ignoring adSlot"), ""));
                                    var a = e.params.adSlot,
                                        i = a.split(":");
                                    if (a = i[0], 2 == i.length && (e.params.adUnitIndex = i[1]), i = a.split("@"), e.params.adUnit = i[0], i.length > 1) {
                                        if (2 != (i = i[1].split("x")).length) return void(0, t.logWarn)("PubMatic: AdSlot Error: adSlot not in required format");
                                        e.params.width = parseInt(i[0], 10), e.params.height = parseInt(i[1], 10)
                                    } else if (e.hasOwnProperty("mediaTypes") && e.mediaTypes.hasOwnProperty(o.Mk) && e.mediaTypes.banner.hasOwnProperty("sizes")) {
                                        for (var n = 0, s = []; n < e.mediaTypes.banner.sizes.length; n++) 2 === e.mediaTypes.banner.sizes[n].length && s.push(e.mediaTypes.banner.sizes[n]);
                                        e.mediaTypes.banner.sizes = s, e.mediaTypes.banner.sizes.length >= 1 && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1))
                                    }
                                }(I), I.mediaTypes && I.mediaTypes.hasOwnProperty("video") || I.params.hasOwnProperty("video"));
                            else if (!(I.hasOwnProperty("mediaTypes") && I.mediaTypes.hasOwnProperty(o.B5) || 0 !== I.params.width || 0 !== I.params.height)) return void(0, t.logWarn)("PubMatic: Skipping the non-standard adslot: ", I.params.adSlot, JSON.stringify(I));
                            w.pubId = w.pubId || I.params.publisherId, (w = function(e, r) {
                                var a, i, n;
                                for (a in r.kadpageurl || (r.kadpageurl = r.pageURL), v) v.hasOwnProperty(a) && (i = e[a]) && ("object" === g(n = v[a]) && (i = n.f(i, r)), (0, t.isStr)(i) ? r[a] = i : (0, t.logWarn)("PubMatic: Ignoring param : " + a + " with value : " + v[a] + ", expects string-value, found " + g(i)));
                                return r
                            }(I.params, w)).transactionId = I.transactionId, "" === O ? O = I.params.currency || b : I.params.hasOwnProperty("currency") && O !== I.params.currency && (0, t.logWarn)("PubMatic: Currency specifier ignored. Only one currency permitted."), I.params.currency = O, I.params.hasOwnProperty("dctr") && (0, t.isStr)(I.params.dctr) && T.push(I.params.dctr), I.params.hasOwnProperty("bcat") && (0, t.isArray)(I.params.bcat) && (D = D.concat(I.params.bcat)), I.params.hasOwnProperty("acat") && (0, t.isArray)(I.params.acat) && (S = S.concat(I.params.acat));
                            var r = function(e, r) {
                                var a, s, p = {},
                                    c = {},
                                    l = e.hasOwnProperty("sizes") ? e.sizes : [],
                                    y = "",
                                    v = [];
                                if (function(e, r) {
                                        r.params.deals && ((0, t.isArray)(r.params.deals) ? r.params.deals.forEach((function(r) {
                                            (0, t.isStr)(r) && r.length > 3 ? (e.pmp || (e.pmp = {
                                                private_auction: 0,
                                                deals: []
                                            }), e.pmp.deals.push({
                                                id: r
                                            })) : (0, t.logWarn)("PubMatic: Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: " + r)
                                        })) : (0, t.logWarn)("PubMatic: Error: bid.params.deals should be an array of strings."))
                                    }(p = {
                                        id: e.bidId,
                                        tagid: e.params.adUnit || void 0,
                                        bidfloor: R("kadfloor", e.params.kadfloor),
                                        secure: 1,
                                        ext: {
                                            pmZoneId: R("pmzoneid", e.params.pmzoneid)
                                        },
                                        bidfloorcur: e.params.currency ? R("currency", e.params.currency) : h
                                    }, e), function(e, r) {
                                        var a, i = "";
                                        if (r.params.dctr)
                                            if (i = r.params.dctr, (0, t.isStr)(i) && i.length > 0) {
                                                var n = i.split("|");
                                                i = "", n.forEach((function(e) {
                                                    i += e.length > 0 ? e.trim() + "|" : ""
                                                })), a = i.length, "|" === i.substring(a, a - 1) && (i = i.substring(0, a - 1)), e.ext.key_val = i.trim()
                                            } else(0, t.logWarn)("PubMatic: Ignoring param : dctr with value : " + i + ", expects string-value, found empty or non-string value")
                                    }(p, e), j(p, e), e.hasOwnProperty("mediaTypes"))
                                    for (y in e.mediaTypes) switch (y) {
                                        case o.Mk:
                                            (a = K(e)) !== b && (p.banner = a);
                                            break;
                                        case o.B5:
                                            c.request = JSON.stringify(z(e.nativeParams)), Y ? (0, t.logWarn)("PubMatic: Error: Error in Native adunit " + e.params.adUnit + ". Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.") : p.native = c;
                                            break;
                                        case o.pX:
                                            (s = N(e)) !== b && (p.video = s)
                                    } else a = {
                                        pos: 0,
                                        w: e.params.width,
                                        h: e.params.height,
                                        topframe: (0, t.inIframe)() ? 0 : 1
                                    }, (0, t.isArray)(l) && l.length > 1 && ((l = l.splice(1, l.length - 1)).forEach((function(e) {
                                        v.push({
                                            w: e[0],
                                            h: e[1]
                                        })
                                    })), a.format = v), p.banner = a;
                                return function(e, r) {
                                        var a = function(e) {
                                            for (var r = 1; r < arguments.length; r++) {
                                                var a = null != arguments[r] ? arguments[r] : {};
                                                r % 2 ? u(Object(a), !0).forEach((function(r) {
                                                    m(e, r, a[r])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach((function(r) {
                                                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(a, r))
                                                }))
                                            }
                                            return e
                                        }({}, (0, i.Z)(r, "ortb2Imp.ext.data"));
                                        Object.keys(a).forEach((function(r) {
                                            "pbadslot" === r ? "string" == typeof a[r] && a[r] && (0, n.Z)(e, "ext.data.pbadslot", a[r]) : "adserver" === r ? ["name", "adslot"].forEach((function(r) {
                                                var t = (0, i.Z)(a, "adserver.".concat(r));
                                                "string" == typeof t && t && ((0, n.Z)(e, "ext.data.adserver.".concat(r.toLowerCase()), t), "adslot" === r && (0, n.Z)(e, "ext.dfp_ad_unit_code", t))
                                            })) : (0, n.Z)(e, "ext.data.".concat(r), a[r])
                                        }))
                                    }(p, e),
                                    function(e, r) {
                                        var a = -1;
                                        "function" != typeof r.getFloor || d.vc.getConfig("pubmatic.disableFloors") || [o.Mk, o.pX, o.B5].forEach((function(i) {
                                            if (e.hasOwnProperty(i)) {
                                                var n = [];
                                                "banner" === i && (e[i].w && e[i].h && n.push([e[i].w, e[i].h]), (0, t.isArray)(e[i].format) && e[i].format.forEach((function(e) {
                                                    return n.push([e.w, e.h])
                                                }))), 0 === n.length && n.push("*"), n.forEach((function(n) {
                                                    var s = r.getFloor({
                                                        currency: e.bidfloorcur,
                                                        mediaType: i,
                                                        size: n
                                                    });
                                                    if ((0, t.logInfo)(f, "floor from floor module returned for mediatype:", i, " and size:", n, " is: currency", s.currency, "floor", s.floor), "object" === g(s) && s.currency === e.bidfloorcur && !isNaN(parseInt(s.floor))) {
                                                        var o = parseFloat(s.floor);
                                                        (0, t.logInfo)(f, "floor from floor module:", o, "previous floor value", a, "Min:", Math.min(o, a)), a = -1 === a ? o : Math.min(o, a), (0, t.logInfo)(f, "new floor value:", a)
                                                    }
                                                }))
                                            }
                                        })), e.bidfloor && ((0, t.logInfo)(f, "floor from floor module:", a, "impObj.bidfloor", e.bidfloor, "Max:", Math.max(a, e.bidfloor)), a = Math.max(a, e.bidfloor)), e.bidfloor = !isNaN(a) && a > 0 ? a : b, (0, t.logInfo)(f, "new impObj.bidfloor value:", e.bidfloor)
                                    }(p, e), p.hasOwnProperty(o.Mk) || p.hasOwnProperty(o.B5) || p.hasOwnProperty(o.pX) ? p : b
                            }(I);
                            r && P.imp.push(r)
                        })), 0 != P.imp.length) {
                        var k, C;
                        P.site.publisher.id = w.pubId.trim(), x = w.pubId.trim(), P.ext.wrapper = {}, P.ext.wrapper.profile = parseInt(w.profId) || b, P.ext.wrapper.version = parseInt(w.verId) || b, P.ext.wrapper.wiid = w.wiid || r.auctionId, P.ext.wrapper.wv = "prebid_prebid_6.27.0", P.ext.wrapper.transactionId = w.transactionId, P.ext.wrapper.wp = "pbjs", r && r.bidderCode && (P.ext.allowAlternateBidderCodes = c.S.get(r.bidderCode, "allowAlternateBidderCodes"), P.ext.allowedAlternateBidderCodes = c.S.get(r.bidderCode, "allowedAlternateBidderCodes")), P.user.gender = w.gender ? w.gender.trim() : b, P.user.geo = {}, P.user.geo.lat = R("lat", w.lat), P.user.geo.lon = R("lon", w.lon), P.user.yob = R("yob", w.yob), P.device.geo = P.user.geo, P.site.page = w.kadpageurl.trim() || P.site.page.trim(), P.site.domain = (k = P.site.page, (C = document.createElement("a")).href = k, C.hostname), "object" === g(d.vc.getConfig("content")) && (P.site.content = d.vc.getConfig("content")), "object" === g(d.vc.getConfig("device")) && (P.device = l(P.device, d.vc.getConfig("device"))), (0, n.Z)(P, "source.tid", w.transactionId), -1 !== window.location.href.indexOf("pubmaticTest=true") && (P.test = 1), e[0].schain && (0, n.Z)(P, "source.ext.schain", e[0].schain), r && r.gdprConsent && ((0, n.Z)(P, "user.ext.consent", r.gdprConsent.consentString), (0, n.Z)(P, "regs.ext.gdpr", r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && (0, n.Z)(P, "regs.ext.us_privacy", r.uspConsent), !0 === d.vc.getConfig("coppa") && (0, n.Z)(P, "regs.coppa", 1),
                            function(e, r) {
                                var a = (0, i.Z)(r, "0.userIdAsEids"),
                                    s = U(r, 1);
                                s && (a || (a = []), a.push(s)), (0, t.isArray)(a) && a.length > 0 && (0, n.Z)(e, "user.eids", a)
                            }(P, e),
                            function(e, r) {
                                var a = U(r, 2);
                                a && (e.user || (e.user = {}), e.user.data || (e.user.data = []), e.user.data.push(a))
                            }(P, e);
                        var A = d.vc.getConfig("ortb2") || {};
                        if (A.site && (0, t.mergeDeep)(P, {
                                site: A.site
                            }), A.user && (0, t.mergeDeep)(P, {
                                user: A.user
                            }), A.bcat && (D = D.concat(A.bcat)), null !== (a = A.ext) && void 0 !== a && null !== (s = a.prebid) && void 0 !== s && null !== (p = s.bidderparams) && void 0 !== p && null !== (y = p[r.bidderCode]) && void 0 !== y && y.acat) {
                            var M = A.ext.prebid.bidderparams[r.bidderCode].acat;
                            q(P, M)
                        } else S.length && q(P, S);
                        return function(e, r) {
                            (r = r.filter((function(e) {
                                return "string" == typeof e || ((0, t.logWarn)("PubMatic: bcat: Each category should be a string, ignoring category: " + e), !1)
                            })).map((function(e) {
                                return e.trim()
                            })).filter((function(e, r, a) {
                                if (e.length > 3) return a.indexOf(e) === r;
                                (0, t.logWarn)("PubMatic: bcat: Each category should have a value of a length of more than 3 characters, ignoring category: " + e)
                            }))).length > 0 && ((0, t.logWarn)("PubMatic: bcat: Selected: ", r), e.bcat = r)
                        }(P, D), "object" === g(d.vc.getConfig("app")) && (P.app = d.vc.getConfig("app"), P.app.publisher = P.site.publisher, P.app.ext = P.site.ext || b, "object" !== g(P.app.content) && (P.app.content = P.site.content || b), delete P.site), {
                            method: "POST",
                            url: "https://hbopenbid.pubmatic.com/translator?source=prebid-client",
                            data: JSON.stringify(P),
                            bidderRequest: r
                        }
                    }
                },
                interpretResponse: function(e, r) {
                    var a = [],
                        i = h,
                        n = JSON.parse(r.data),
                        s = n.site && n.site.ref ? n.site.ref : "";
                    try {
                        e.body && e.body.seatbid && (0, t.isArray)(e.body.seatbid) && (i = e.body.cur || i, e.body.seatbid.forEach((function(e) {
                            e.bid && (0, t.isArray)(e.bid) && e.bid.forEach((function(d) {
                                var p = {
                                    requestId: d.impid,
                                    cpm: (parseFloat(d.price) || 0).toFixed(2),
                                    width: d.w,
                                    height: d.h,
                                    creativeId: d.crid || d.id,
                                    dealId: d.dealid,
                                    currency: i,
                                    netRevenue: !0,
                                    ttl: 300,
                                    referrer: s,
                                    ad: d.adm,
                                    pm_seat: e.seat || null,
                                    pm_dspid: d.ext && d.ext.dspid ? d.ext.dspid : null,
                                    partnerImpId: d.id || ""
                                };
                                n.imp && n.imp.length > 0 && n.imp.forEach((function(e) {
                                    if (d.impid === e.id) switch (function(e, r) {
                                        if (e.ext && null != e.ext.bidtype) r.mediaType = S[e.ext.bidtype];
                                        else {
                                            (0, t.logInfo)("PubMatic: bid.ext.bidtype does not exist, checking alternatively for mediaType");
                                            var a = e.adm,
                                                i = "",
                                                n = new RegExp(/VAST\s+version/);
                                            if (a.indexOf('span class="PubAPIAd"') >= 0) r.mediaType = o.Mk;
                                            else if (n.test(a)) r.mediaType = o.pX;
                                            else try {
                                                (i = JSON.parse(a.replace(/\\/g, ""))) && i.native && (r.mediaType = o.B5)
                                            } catch (e) {
                                                (0, t.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + a)
                                            }
                                        }
                                    }(d, p), p.mediaType) {
                                        case o.Mk:
                                            break;
                                        case o.pX:
                                            p.width = d.hasOwnProperty("w") ? d.w : e.video.w, p.height = d.hasOwnProperty("h") ? d.h : e.video.h, p.vastXml = d.adm,
                                                function(e, r) {
                                                    var a, t, i;
                                                    if (r.bidderRequest && r.bidderRequest.bids) {
                                                        for (var n = 0; n < r.bidderRequest.bids.length; n++) r.bidderRequest.bids[n].bidId === e.requestId && (a = r.bidderRequest.bids[n].params, t = r.bidderRequest.bids[n].mediaTypes[o.pX].context, i = r.bidderRequest.bids[n].adUnitCode);
                                                        t && "outstream" === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = D.newRenderer(e.rendererCode, i))
                                                    }
                                                }(p, r);
                                            break;
                                        case o.B5:
                                            ! function(e, r) {
                                                if (r.native = {}, e.hasOwnProperty("adm")) {
                                                    var a = "";
                                                    try {
                                                        a = JSON.parse(e.adm.replace(/\\/g, ""))
                                                    } catch (e) {
                                                        return void(0, t.logWarn)("PubMatic: Error: Cannot parse native reponse for ad response: " + r.adm)
                                                    }
                                                    if (a && a.native && a.native.assets && a.native.assets.length > 0) {
                                                        r.mediaType = o.B5;
                                                        for (var i = 0, n = a.native.assets.length; i < n; i++) switch (a.native.assets[i].id) {
                                                            case P.TITLE.ID:
                                                                r.native.title = a.native.assets[i].title && a.native.assets[i].title.text;
                                                                break;
                                                            case P.IMAGE.ID:
                                                                r.native.image = {
                                                                    url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                    height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                    width: a.native.assets[i].img && a.native.assets[i].img.w
                                                                };
                                                                break;
                                                            case P.ICON.ID:
                                                                r.native.icon = {
                                                                    url: a.native.assets[i].img && a.native.assets[i].img.url,
                                                                    height: a.native.assets[i].img && a.native.assets[i].img.h,
                                                                    width: a.native.assets[i].img && a.native.assets[i].img.w
                                                                };
                                                                break;
                                                            case P.SPONSOREDBY.ID:
                                                            case P.BODY.ID:
                                                            case P.LIKES.ID:
                                                            case P.DOWNLOADS.ID:
                                                            case P.PRICE:
                                                            case P.SALEPRICE.ID:
                                                            case P.PHONE.ID:
                                                            case P.ADDRESS.ID:
                                                            case P.DESC2.ID:
                                                            case P.CTA.ID:
                                                            case P.RATING.ID:
                                                            case P.DISPLAYURL.ID:
                                                                r.native[k[a.native.assets[i].id]] = a.native.assets[i].data && a.native.assets[i].data.value
                                                        }
                                                        r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0)
                                                    }
                                                }
                                            }(d, p)
                                    }
                                })), d.ext && d.ext.deal_channel && (p.dealChannel = T[d.ext.deal_channel] || null), p.meta = {}, d.ext && d.ext.dspid && (p.meta.networkId = d.ext.dspid), d.ext && d.ext.advid && (p.meta.buyerId = d.ext.advid), d.adomain && d.adomain.length > 0 && (p.meta.advertiserDomains = d.adomain, p.meta.clickUrl = d.adomain[0]), e.ext && e.ext.buyid && (p.adserverTargeting = {
                                    hb_buyid_pubmatic: e.ext.buyid
                                }), d.ext && d.ext.marketplace && (p.bidderCode = d.ext.marketplace), a.push(p)
                            }))
                        })))
                    } catch (e) {
                        (0, t.logError)(e)
                    }
                    return a
                },
                getUserSyncs: function(e, r, a, t) {
                    var i = "" + x;
                    return a && (i += "&gdpr=" + (a.gdprApplies ? 1 : 0), i += "&gdpr_consent=" + encodeURIComponent(a.consentString || "")), t && (i += "&us_privacy=" + encodeURIComponent(t)), !0 === d.vc.getConfig("coppa") && (i += "&coppa=1"), e.iframeEnabled ? [{
                        type: "iframe",
                        url: "https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=" + i
                    }] : [{
                        type: "image",
                        url: "https://image8.pubmatic.com/AdServer/ImgSync?p=" + i
                    }]
                },
                transformBidParams: function(e, r, a, i) {
                    return j(e, a.bids[0], !0), (0, t.convertTypes)({
                        publisherId: "string",
                        adSlot: "string"
                    }, e)
                }
            };
            (0, s.dX)(L), window.fusePbjs.installedModules.push("pubmaticBidAdapter")
        }
    },
    function(e) {
        e(e.s = 8139)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [2229], {
        6476: function(e, r, t) {
            var i = t(9853),
                n = t(265),
                o = t(4806),
                a = t(1609),
                s = t(8962),
                c = t(8265),
                d = t(1879),
                u = t(4877),
                p = t(2528);

            function l(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    r && (i = i.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function m(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? l(Object(t), !0).forEach((function(r) {
                        b(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : l(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function f() {
                return f = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                    }
                    return e
                }, f.apply(this, arguments)
            }

            function v(e, r) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, r) {
                    var t = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != t) {
                        var i, n, o = [],
                            a = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(a = (i = t.next()).done) && (o.push(i.value), !r || o.length !== r); a = !0);
                        } catch (e) {
                            s = !0, n = e
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (s) throw n
                            }
                        }
                        return o
                    }
                }(e, r) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return g(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? g(e, r) : void 0
                    }
                }(e, r) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, i = new Array(r); t < r; t++) i[t] = e[t];
                return i
            }

            function b(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }

            function y(e) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, y(e)
            }
            var x = {};
            s.vc.getConfig("rubicon", (function(e) {
                (0, i.mergeDeep)(x, e.rubicon)
            }));
            var h = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                7: "125x125",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                17: "240x400",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                39: "750x100",
                40: "750x200",
                41: "750x300",
                42: "2x4",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                66: "930x600",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                85: "300x120",
                90: "548x150",
                94: "970x310",
                95: "970x100",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                105: "250x800",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                145: "980x150",
                152: "1000x250",
                156: "640x320",
                159: "320x250",
                179: "250x600",
                195: "600x300",
                198: "640x360",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                221: "1x1",
                229: "320x180",
                230: "2000x1400",
                232: "580x400",
                234: "6x6",
                251: "2x2",
                256: "480x820",
                257: "400x600",
                258: "500x200",
                259: "998x200",
                264: "970x1000",
                265: "1920x1080",
                274: "1800x200",
                278: "320x500",
                282: "320x400",
                288: "640x380",
                548: "500x1000",
                550: "980x480",
                552: "300x200",
                558: "640x640",
                562: "300x431",
                564: "320x431",
                566: "320x300",
                568: "300x150",
                570: "300x125",
                572: "250x350",
                574: "620x891",
                576: "610x877",
                578: "980x552",
                580: "505x656"
            };
            (0, i._each)(h, (function(e, r) {
                return h[e] = r
            }));
            var _ = {
                code: "rubicon",
                gvlid: 52,
                supportedMediaTypes: [c.Mk, c.pX],
                isBidRequestValid: function(e) {
                    if ("object" !== y(e.params)) return !1;
                    for (var r = 0, t = ["accountId", "siteId", "zoneId"]; r < t.length; r++)
                        if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]])) return (0, i.logError)("Rubicon: wrong format of accountId or siteId or zoneId."), !1;
                    var o = S(e, !0);
                    return !!o && ("video" !== o || function(e) {
                        var r = !0,
                            t = Object.prototype.toString.call([]),
                            o = {
                                mimes: t,
                                protocols: t,
                                linearity: Object.prototype.toString.call(0),
                                api: t
                            };
                        return Object.keys(o).forEach((function(t) {
                            Object.prototype.toString.call((0, n.Z)(e, "mediaTypes.video." + t)) !== o[t] && (r = !1, (0, i.logError)("Rubicon: mediaTypes.video." + t + " is required and must be of type: " + o[t]))
                        })), r
                    }(e))
                },
                buildRequests: function(e, r) {
                    var t = [],
                        a = e.filter((function(e) {
                            return "video" === S(e)
                        })).map((function(e) {
                            e.startTime = (new Date).getTime();
                            var t, a = {
                                id: e.transactionId,
                                test: s.vc.getConfig("debug") ? 1 : 0,
                                cur: ["USD"],
                                source: {
                                    tid: e.transactionId
                                },
                                tmax: r.timeout,
                                imp: [{
                                    exp: s.vc.getConfig("s2sConfig.defaultTtl"),
                                    id: e.adUnitCode,
                                    secure: 1,
                                    ext: b({}, e.bidder, e.params),
                                    video: (0, n.Z)(e, "mediaTypes.video") || {}
                                }],
                                ext: {
                                    prebid: {
                                        channel: {
                                            name: "pbjs",
                                            version: fusePbjs.version
                                        },
                                        cache: {
                                            vastxml: {
                                                returnCreative: !0 === x.returnVast
                                            }
                                        },
                                        targeting: {
                                            includewinners: !0,
                                            includebidderkeys: !1,
                                            pricegranularity: (t = s.vc, {
                                                ranges: {
                                                    low: [{
                                                        max: 5,
                                                        increment: .5
                                                    }],
                                                    medium: [{
                                                        max: 20,
                                                        increment: .1
                                                    }],
                                                    high: [{
                                                        max: 20,
                                                        increment: .01
                                                    }],
                                                    auto: [{
                                                        max: 5,
                                                        increment: .05
                                                    }, {
                                                        min: 5,
                                                        max: 10,
                                                        increment: .1
                                                    }, {
                                                        min: 10,
                                                        max: 20,
                                                        increment: .5
                                                    }],
                                                    dense: [{
                                                        max: 3,
                                                        increment: .01
                                                    }, {
                                                        min: 3,
                                                        max: 8,
                                                        increment: .05
                                                    }, {
                                                        min: 8,
                                                        max: 20,
                                                        increment: .5
                                                    }],
                                                    custom: t.getConfig("customPriceBucket") && t.getConfig("customPriceBucket").buckets
                                                }[t.getConfig("priceGranularity")]
                                            })
                                        },
                                        bidders: {
                                            rubicon: {
                                                integration: x.int_type || "pbjs"
                                            }
                                        }
                                    }
                                }
                            };
                            "rubicon" !== e.bidder && (a.ext.prebid.aliases = b({}, e.bidder, "rubicon"));
                            var d, u, l, m, v = (0, p.R)().installedModules;
                            if (!v || v.length && -1 === v.indexOf("rubiconAnalyticsAdapter") || (0, o.Z)(a, "ext.prebid.analytics", {
                                    rubicon: {
                                        "client-analytics": !0
                                    }
                                }), "function" != typeof e.getFloor || x.disableFloors) d = parseFloat((0, n.Z)(e, "params.floor"));
                            else {
                                var g;
                                try {
                                    g = e.getFloor({
                                        currency: "USD",
                                        mediaType: "video",
                                        size: I(e, "video")
                                    })
                                } catch (e) {
                                    (0, i.logError)("Rubicon: getFloor threw an error: ", e)
                                }
                                d = "object" !== y(g) || "USD" !== g.currency || isNaN(parseInt(g.floor)) ? void 0 : parseFloat(g.floor)
                            }
                            isNaN(d) || (a.imp[0].bidfloor = d), "object" === y(e.floorData) && (a.ext.prebid.floors = {
                                    enabled: !1
                                }), a.imp[0].ext[e.bidder].video.size_id = (l = e, m = parseInt((0, n.Z)(l, "params.video.size_id")), isNaN(m) ? "outstream" === (0, n.Z)(l, "mediaTypes.".concat(c.pX, ".context")) ? 203 : 201 : m),
                                function(e, r, t) {
                                    e && ("object" === y(s.vc.getConfig("app")) ? e.app = s.vc.getConfig("app") : e.site = {
                                        page: j(r, t)
                                    }, "object" === y(s.vc.getConfig("device")) && (e.device = s.vc.getConfig("device")), r.params.video.language && ["site", "device"].forEach((function(t) {
                                        e[t] && ("site" === t ? e[t].content = f({
                                            language: r.params.video.language
                                        }, e[t].content) : e[t] = f({
                                            language: r.params.video.language
                                        }, e[t]))
                                    })))
                                }(a, e, r),
                                function(e, r) {
                                    "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip), "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay), "object" === y(e.imp[0].video) && void 0 === e.imp[0].video.pos && ("atf" === r.params.position ? e.imp[0].video.pos = 1 : "btf" === r.params.position && (e.imp[0].video.pos = 3));
                                    var t = I(r, "video");
                                    e.imp[0].video.w = t[0], e.imp[0].video.h = t[1]
                                }(a, e), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (u = r.gdprConsent.gdprApplies ? 1 : 0), (0, o.Z)(a, "regs.ext.gdpr", u), (0, o.Z)(a, "user.ext.consent", r.gdprConsent.consentString)), r.uspConsent && (0, o.Z)(a, "regs.ext.us_privacy", r.uspConsent);
                            var h = (0, n.Z)(r, "bids.0.userIdAsEids");
                            h && h.length && (0, o.Z)(a, "user.ext.eids", h);
                            var _ = s.vc.getConfig("user.id");
                            _ && (0, o.Z)(a, "user.id", _), !0 === s.vc.getConfig("coppa") && (0, o.Z)(a, "regs.coppa", 1), e.schain && O(e.schain) && (0, o.Z)(a, "source.ext.schain", e.schain);
                            var C = s.vc.getConfig("multibid");
                            return C && (0, o.Z)(a, "ext.prebid.multibid", C.reduce((function(e, r) {
                                var t = {};
                                return Object.keys(r).forEach((function(e) {
                                    t[e.toLowerCase()] = r[e]
                                })), e.push(t), e
                            }), [])), k(e, c.pX, a), e.storedAuctionResponse && (0, o.Z)(a.imp[0], "ext.prebid.storedauctionresponse.id", e.storedAuctionResponse.toString()), (0, o.Z)(a.imp[0], "ext.prebid.auctiontimestamp", r.auctionStart), {
                                method: "POST",
                                url: "https://".concat(x.videoHost || "prebid-server", ".rubiconproject.com/openrtb2/auction"),
                                data: a,
                                bidRequest: e
                            }
                        }));
                    if (!0 !== x.singleRequest) t = a.concat(e.filter((function(e) {
                        return "banner" === S(e)
                    })).map((function(e) {
                        var t = _.createSlotParams(e, r);
                        return {
                            method: "GET",
                            url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                            data: _.getOrderedParams(t).reduce((function(e, r) {
                                var n = t[r];
                                return (0, i.isStr)(n) && "" !== n || (0, i.isNumber)(n) ? "".concat(e).concat(R(r, n), "&") : e
                            }), "") + "slots=1&rand=".concat(Math.random()),
                            bidRequest: e
                        }
                    })));
                    else {
                        var d = e.filter((function(e) {
                            return "banner" === S(e)
                        })).reduce((function(e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                        }), {});
                        t = a.concat(Object.keys(d).reduce((function(e, t) {
                            var n;
                            return (n = d[t], 10, n.map((function(e, r) {
                                return r % 10 == 0 ? n.slice(r, r + 10) : null
                            })).filter((function(e) {
                                return e
                            }))).forEach((function(t) {
                                var n = _.combineSlotUrlParams(t.map((function(e) {
                                    return _.createSlotParams(e, r)
                                })));
                                e.push({
                                    method: "GET",
                                    url: "https://".concat(x.bannerHost || "fastlane", ".rubiconproject.com/a/api/fastlane.json"),
                                    data: _.getOrderedParams(n).reduce((function(e, r) {
                                        var t = n[r];
                                        return (0, i.isStr)(t) && "" !== t || (0, i.isNumber)(t) ? "".concat(e).concat(R(r, t), "&") : e
                                    }), "") + "slots=".concat(t.length, "&rand=").concat(Math.random()),
                                    bidRequest: t
                                })
                            })), e
                        }), []))
                    }
                    return t
                },
                getOrderedParams: function(e) {
                    var r = /^tg_v/,
                        t = /^tg_i/,
                        i = /^eid_|^tpid_/,
                        n = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "us_privacy", "rp_schain"].concat(Object.keys(e).filter((function(e) {
                            return i.test(e)
                        }))).concat(["x_liverampidl", "ppuid", "rf", "p_geo.latitude", "p_geo.longitude", "kw"]).concat(Object.keys(e).filter((function(e) {
                            return r.test(e)
                        }))).concat(Object.keys(e).filter((function(e) {
                            return t.test(e)
                        }))).concat(["tk_flint", "x_source.tid", "l_pb_bid_id", "x_source.pchain", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                    return n.concat(Object.keys(e).filter((function(e) {
                        return -1 === n.indexOf(e)
                    })))
                },
                combineSlotUrlParams: function(e) {
                    if (1 === e.length) return e[0];
                    var r = e.reduce((function(r, t, i) {
                            return Object.keys(t).forEach((function(n) {
                                r.hasOwnProperty(n) || (r[n] = new Array(e.length)), r[n].splice(i, 1, t[n])
                            })), r
                        }), {}),
                        t = new RegExp("^([^;]*)(;\\1)+$");
                    return Object.keys(r).forEach((function(e) {
                        var i = r[e].join(";"),
                            n = i.match(t);
                        r[e] = n ? n[1] : i
                    })), r
                },
                createSlotParams: function(e, r) {
                    e.startTime = (new Date).getTime();
                    var t = e.params,
                        o = I(e, "banner"),
                        a = v(t.latLong || [], 2),
                        u = a[0],
                        p = a[1],
                        l = {
                            account_id: t.accountId,
                            site_id: t.siteId,
                            zone_id: t.zoneId,
                            size_id: o[0],
                            alt_size_ids: o.slice(1).join(",") || void 0,
                            rp_floor: (t.floor = parseFloat(t.floor)) >= .01 ? t.floor : void 0,
                            rp_secure: "1",
                            tk_flint: "".concat(x.int_type || "pbjs_lite", "_v6.27.0"),
                            "x_source.tid": e.transactionId,
                            l_pb_bid_id: e.bidId,
                            "x_source.pchain": t.pchain,
                            p_screen_res: [window.screen.width, window.screen.height].join("x"),
                            tk_user_key: t.userId,
                            "p_geo.latitude": isNaN(parseFloat(u)) ? void 0 : parseFloat(u).toFixed(4),
                            "p_geo.longitude": isNaN(parseFloat(p)) ? void 0 : parseFloat(p).toFixed(4),
                            "tg_fl.eid": e.code,
                            rf: j(e, r)
                        };
                    if ("function" == typeof e.getFloor && !x.disableFloors) {
                        var m;
                        try {
                            m = e.getFloor({
                                currency: "USD",
                                mediaType: "banner",
                                size: "*"
                            })
                        } catch (e) {
                            (0, i.logError)("Rubicon: getFloor threw an error: ", e)
                        }
                        l.rp_hard_floor = "object" !== y(m) || "USD" !== m.currency || isNaN(parseInt(m.floor)) ? void 0 : m.floor
                    }
                    var f = {
                        1: "atf",
                        3: "btf"
                    }[(0, n.Z)(e, "mediaTypes.banner.pos")] || "";
                    l.p_pos = "atf" === t.position || "btf" === t.position ? t.position : f;
                    var g = s.vc.getConfig("user.id");
                    return g && (l.ppuid = g), e.userIdAsEids && e.userIdAsEids.forEach((function(e) {
                        try {
                            if ("adserver.org" === e.source ? (l.tpid_tdid = e.uids[0].id, l["eid_adserver.org"] = e.uids[0].id) : "liveintent.com" === e.source ? (l["tpid_liveintent.com"] = e.uids[0].id, l["eid_liveintent.com"] = e.uids[0].id, e.ext && Array.isArray(e.ext.segments) && e.ext.segments.length && (l["tg_v.LIseg"] = e.ext.segments.join(","))) : "liveramp.com" === e.source ? l.x_liverampidl = e.uids[0].id : "id5-sync.com" === e.source ? l["eid_id5-sync.com"] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype, "^").concat(e.uids[0].ext && e.uids[0].ext.linkType || "") : l["eid_".concat(e.source)] = "".concat(e.uids[0].id, "^").concat(e.uids[0].atype || ""), !l.ppuid) {
                                var r = (0, d.sE)(e.uids, (function(e) {
                                    return e.ext && "ppuid" === e.ext.stype
                                }));
                                r && r.id && (l.ppuid = r.id)
                            }
                        } catch (r) {
                            (0, i.logWarn)("Rubicon: error reading eid:", e, r)
                        }
                    })), r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (l.gdpr = Number(r.gdprConsent.gdprApplies)), l.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (l.us_privacy = encodeURIComponent(r.uspConsent)), l.rp_maxbids = r.bidLimit || 1, k(e, c.Mk, l), !0 === s.vc.getConfig("coppa") && (l.coppa = 1), e.schain && O(e.schain) && (l.rp_schain = _.serializeSupplyChain(e.schain)), l
                },
                serializeSupplyChain: function(e) {
                    if (!O(e)) return "";
                    var r = e.ver,
                        t = e.complete,
                        i = e.nodes;
                    return "".concat(r, ",").concat(t, "!").concat(_.serializeSupplyChainNodes(i))
                },
                serializeSupplyChainNodes: function(e) {
                    var r = ["asi", "sid", "hp", "rid", "name", "domain"];
                    return e.map((function(e) {
                        return r.map((function(r) {
                            return encodeURIComponent(e[r] || "")
                        })).join(",")
                    })).join("!")
                },
                interpretResponse: function(e, r) {
                    var t = r.bidRequest;
                    if (!(e = e.body) || "object" !== y(e)) return [];
                    if (e.seatbid) {
                        var a = (0, n.Z)(e, "ext.errors.rubicon");
                        Array.isArray(a) && a.length > 0 && (0, i.logWarn)("Rubicon: Error in video response");
                        var s = [];
                        return e.seatbid.forEach((function(r) {
                            (r.bid || []).forEach((function(a) {
                                var d = {
                                    requestId: t.bidId,
                                    currency: e.cur || "USD",
                                    creativeId: a.crid,
                                    cpm: a.price || 0,
                                    bidderCode: r.seat,
                                    ttl: 300,
                                    netRevenue: !1 !== x.netRevenue,
                                    width: a.w || (0, n.Z)(t, "mediaTypes.video.w") || (0, n.Z)(t, "params.video.playerWidth"),
                                    height: a.h || (0, n.Z)(t, "mediaTypes.video.h") || (0, n.Z)(t, "params.video.playerHeight")
                                };
                                a.id && (d.seatBidId = a.id), a.dealid && (d.dealId = a.dealid), a.adomain && (0, o.Z)(d, "meta.advertiserDomains", Array.isArray(a.adomain) ? a.adomain : [a.adomain]), (0, n.Z)(a, "ext.bidder.rp.advid") && (0, o.Z)(d, "meta.advertiserId", a.ext.bidder.rp.advid);
                                var p = (0, n.Z)(e, "ext.responsetimemillis.rubicon");
                                if (t && p && (t.serverResponseTimeMs = p), (0, n.Z)(a, "ext.prebid.type") === c.pX) {
                                    d.mediaType = c.pX, (0, o.Z)(d, "meta.mediaType", c.pX);
                                    var l = (0, n.Z)(a, "ext.prebid.targeting");
                                    l && "object" === y(l) && (d.adserverTargeting = l), a.ext.prebid.cache && "object" === y(a.ext.prebid.cache.vastXml) && a.ext.prebid.cache.vastXml.cacheId && a.ext.prebid.cache.vastXml.url ? (d.videoCacheKey = a.ext.prebid.cache.vastXml.cacheId, d.vastUrl = a.ext.prebid.cache.vastXml.url) : l && l.hb_uuid && l.hb_cache_host && l.hb_cache_path && (d.videoCacheKey = l.hb_uuid, d.vastUrl = "https://".concat(l.hb_cache_host).concat(l.hb_cache_path, "?uuid=").concat(l.hb_uuid)), a.adm && (d.vastXml = a.adm), a.nurl && (d.vastUrl = a.nurl), !d.vastUrl && a.nurl && (d.vastUrl = a.nurl), "outstream" === (0, n.Z)(t, "mediaTypes.video.context").toLowerCase() && (d.renderer = function(e) {
                                        var r = u.Th.install({
                                            id: e.adId,
                                            url: x.rendererUrl || "https://video-outstream.rubiconproject.com/apex-2.2.1.js",
                                            config: x.rendererConfig || {},
                                            loaded: !1,
                                            adUnitCode: e.adUnitCode
                                        });
                                        try {
                                            r.setRender(C)
                                        } catch (e) {
                                            (0, i.logWarn)("Prebid Error calling setRender on renderer", e)
                                        }
                                        return r
                                    }(d))
                                } else(0, i.logWarn)("Rubicon: video response received non-video media type");
                                s.push(d)
                            }))
                        })), s
                    }
                    var d, p = e.ads,
                        l = 0;
                    return "object" !== y(t) || Array.isArray(t) || "video" !== S(t) || "object" !== y(p) || (p = p[t.adUnitCode]), !Array.isArray(p) || p.length < 1 ? [] : p.reduce((function(r, n, o) {
                        if (n.impression_id && d === n.impression_id ? l++ : d = n.impression_id, "ok" !== n.status) return r;
                        var a, s, u = Array.isArray(t) ? t[o - l] : t;
                        if (u && "object" === y(u)) {
                            var p = {
                                requestId: u.bidId,
                                currency: "USD",
                                creativeId: n.creative_id || "".concat(n.network || "", "-").concat(n.advertiser || ""),
                                cpm: n.cpm || 0,
                                dealId: n.deal,
                                ttl: 300,
                                netRevenue: !1 !== x.netRevenue,
                                rubicon: {
                                    advertiserId: n.advertiser,
                                    networkId: n.network
                                },
                                meta: {
                                    advertiserId: n.advertiser,
                                    networkId: n.network,
                                    mediaType: c.Mk
                                }
                            };
                            if (n.creative_type && (p.mediaType = n.creative_type), n.adomain && (p.meta.advertiserDomains = Array.isArray(n.adomain) ? n.adomain : [n.adomain]), n.creative_type === c.pX) p.width = u.params.video.playerWidth, p.height = u.params.video.playerHeight, p.vastUrl = n.creative_depot_url, p.impression_id = n.impression_id, p.videoCacheKey = n.impression_id;
                            else {
                                p.ad = (a = n.script, s = n.impression_id, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='".concat(s, "'>\n<script type='text/javascript'>").concat(a, "<\/script>\n</div>\n</body>\n</html>"));
                                var m = v(h[n.size_id].split("x").map((function(e) {
                                    return Number(e)
                                })), 2);
                                p.width = m[0], p.height = m[1]
                            }
                            p.rubiconTargeting = (Array.isArray(n.targeting) ? n.targeting : []).reduce((function(e, r) {
                                return e[r.key] = r.values[0], e
                            }), {
                                rpfl_elemid: u.adUnitCode
                            }), r.push(p)
                        } else(0, i.logError)("Rubicon: bidRequest undefined at index position:".concat(o), t, e);
                        return r
                    }), []).sort((function(e, r) {
                        return (r.cpm || 0) - (e.cpm || 0)
                    }))
                },
                getUserSyncs: function(e, r, t, n) {
                    if (!T && e.iframeEnabled) {
                        var o = {};
                        return t && ("boolean" == typeof t.gdprApplies && (o.gdpr = Number(t.gdprApplies)), "string" == typeof t.consentString && (o.gdpr_consent = t.consentString)), n && (o.us_privacy = encodeURIComponent(n)), o = Object.keys(o).length ? "?".concat((0, i.formatQS)(o)) : "", T = !0, {
                            type: "iframe",
                            url: "https://".concat(x.syncHost || "eus", ".rubiconproject.com/usync.html") + o
                        }
                    }
                },
                transformBidParams: function(e, r) {
                    return (0, i.convertTypes)({
                        accountId: "number",
                        siteId: "number",
                        zoneId: "number"
                    }, e)
                }
            };

            function j(e, r) {
                var t = s.vc.getConfig("pageUrl");
                return e.params.referrer ? t = e.params.referrer : t || (t = r.refererInfo.referer), e.params.secure ? t.replace(/^http:/i, "https:") : t
            }

            function C(e) {
                var r, t = document.getElementById(e.adUnitCode);
                (r = t.querySelector("div[id^='google_ads']")) && r.style.setProperty("display", "none"),
                    function(e) {
                        var r = e.querySelector("script[id^='sas_script']"),
                            t = r && r.nextSibling;
                        t && "iframe" === t.localName && t.style.setProperty("display", "none")
                    }(t);
                var i = e.renderer.getConfig();
                e.renderer.push((function() {
                    window.MagniteApex.renderAd({
                        width: e.width,
                        height: e.height,
                        vastUrl: e.vastUrl,
                        placement: {
                            attachTo: t,
                            align: i.align || "center",
                            position: i.position || "append"
                        },
                        closeButton: i.closeButton || !1,
                        label: i.label || void 0,
                        collapse: i.collapse || !0
                    })
                }))
            }

            function I(e, r) {
                var t = e.params;
                if ("video" === r) {
                    var o = [];
                    return t.video && t.video.playerWidth && t.video.playerHeight ? o = [t.video.playerWidth, t.video.playerHeight] : Array.isArray((0, n.Z)(e, "mediaTypes.video.playerSize")) && 1 === e.mediaTypes.video.playerSize.length ? o = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && e.sizes.length > 0 && Array.isArray(e.sizes[0]) && e.sizes[0].length > 1 && (o = e.sizes[0]), o
                }
                var a = [];
                return Array.isArray(t.sizes) ? a = t.sizes : void 0 !== (0, n.Z)(e, "mediaTypes.banner.sizes") ? a = A(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && e.sizes.length > 0 ? a = A(e.sizes) : (0, i.logWarn)("Rubicon: no sizes are setup or found"),
                    function(e) {
                        var r = [15, 2, 9];
                        return e.sort((function(e, t) {
                            var i = r.indexOf(e),
                                n = r.indexOf(t);
                            return i > -1 || n > -1 ? -1 === i ? 1 : -1 === n ? -1 : i - n : e - t
                        }))
                    }(a)
            }

            function k(e, r, t) {
                var o = {
                    user: {
                        ext: {
                            data: m({}, e.params.visitor)
                        }
                    },
                    site: {
                        ext: {
                            data: m({}, e.params.inventory)
                        }
                    }
                };
                e.params.keywords && (o.site.keywords = (0, i.isArray)(e.params.keywords) ? e.params.keywords.join(",") : e.params.keywords);
                var a = (0, i.mergeDeep)({}, s.vc.getConfig("ortb2") || {}, o),
                    d = (0, n.Z)(e.ortb2Imp, "ext.data") || {},
                    u = (0, n.Z)(e, "ortb2Imp.ext.gpid"),
                    p = {
                        user: [4],
                        site: [1, 2, 5, 6]
                    },
                    l = {
                        user: "tg_v.",
                        site: "tg_i.",
                        adserver: "tg_i.dfp_ad_unit_code",
                        pbadslot: "tg_i.pbadslot",
                        keywords: "kw"
                    },
                    f = function(e, r, t) {
                        if ("data" === r && Array.isArray(e)) return e.filter((function(e) {
                            return e.segment && (0, n.Z)(e, "ext.segtax") && p[t] && -1 !== p[t].indexOf((0, n.Z)(e, "ext.segtax"))
                        })).map((function(e) {
                            var r = e.segment.filter((function(e) {
                                return e.id
                            })).reduce((function(e, r) {
                                return e.push(r.id), e
                            }), []);
                            if (r.length > 0) return r.toString()
                        })).toString();
                        if ("object" !== y(e) || Array.isArray(e)) {
                            if (void 0 !== e) return Array.isArray(e) ? e.filter((function(e) {
                                if ("object" !== y(e) && void 0 !== e) return e.toString();
                                (0, i.logWarn)("Rubicon: Filtered value: ", e, "for key", r, ": Expected value to be string, integer, or an array of strings/ints")
                            })).toString() : e.toString()
                        } else(0, i.logWarn)("Rubicon: Filtered FPD key: ", r, ": Expected value to be string, integer, or an array of strings/ints")
                    },
                    v = function(e, r, i) {
                        var n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                            o = f(e, i, r),
                            a = l[i] && n ? "".concat(l[i]) : "data" === i ? "".concat(l[r], "iab") : "".concat(l[r]).concat(i);
                        t[a] = t[a] ? t[a].concat(",", o) : o
                    };
                r === c.Mk ? (["site", "user"].forEach((function(e) {
                    Object.keys(a[e]).forEach((function(r) {
                        "site" === e && "content" === r && a[e][r].data ? v(a[e][r].data, e, "data") : "ext" !== r ? v(a[e][r], e, r) : a[e][r].data && Object.keys(a[e].ext.data).forEach((function(r) {
                            v(a[e].ext.data[r], e, r, !1)
                        }))
                    }))
                })), Object.keys(d).forEach((function(e) {
                    "adserver" !== e ? v(d[e], "site", e) : "gam" === d[e].name && v(d[e].adslot, name, e)
                })), u && (t.p_gpid = u), t["tg_i.pbadslot"] && delete t["tg_i.dfp_ad_unit_code"]) : (Object.keys(d).length && (0, i.mergeDeep)(t.imp[0].ext, {
                    data: d
                }), u && (t.imp[0].ext.gpid = u), (0, i.mergeDeep)(t, a))
            }

            function A(e) {
                return (0, i.parseSizesInput)(e).reduce((function(e, r) {
                    var t = parseInt(h[r], 10);
                    return t && e.push(t), e
                }), [])
            }

            function w(e) {
                return "object" === y((0, n.Z)(e, "params.video")) && void 0 !== (0, n.Z)(e, "mediaTypes.".concat(c.pX))
            }

            function S(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return w(e) ? -1 === ["outstream", "instream"].indexOf((0, n.Z)(e, "mediaTypes.".concat(c.pX, ".context"))) ? void(r && (0, i.logError)("Rubicon: mediaTypes.video.context must be outstream or instream")) : I(e, "video").length < 2 ? void(r && (0, i.logError)("Rubicon: could not determine the playerSize of the video")) : (r && (0, i.logMessage)("Rubicon: making video request for adUnit", e.adUnitCode), "video") : 0 === I(e, "banner").length ? void(r && (0, i.logError)("Rubicon: could not determine the sizes for banner request")) : (r && (0, i.logMessage)("Rubicon: making banner request for adUnit", e.adUnitCode), "banner")
            }

            function O(e) {
                var r = !1,
                    t = ["asi", "sid", "hp"];
                return e.nodes ? ((r = e.nodes.reduce((function(e, r) {
                    return e ? t.every((function(e) {
                        return r.hasOwnProperty(e)
                    })) : e
                }), !0)) || (0, i.logError)("Rubicon: required schain params missing"), r) : r
            }

            function R(e, r) {
                return "rp_schain" === e ? "rp_schain=".concat(r) : "".concat(e, "=").concat(encodeURIComponent(r))
            }
            var T = !1;
            (0, a.dX)(_), window.fusePbjs.installedModules.push("rubiconBidAdapter")
        }
    },
    function(e) {
        e(e.s = 6476)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [9225], {
        3019: function(n, i, e) {
            var o = e(8962),
                s = e(7602),
                c = e(9853),
                t = "Invalid schain object found: ",
                a = " should be a string",
                r = " should be an Integer",
                f = " should be an object",
                d = {
                    STRICT: "strict",
                    RELAXED: "relaxed",
                    OFF: "off"
                },
                h = [];
            (0, c._each)(d, (function(n) {
                return h.push(n)
            })), s.ZP.makeBidRequests.after((function(n, i) {
                var e = o.vc.getConfig("schain"),
                    s = o.vc.getBidderConfig();
                i.forEach((function(n) {
                    var i = n.bidderCode,
                        o = function(n) {
                            return s[n] && s[n].schain || e
                        }(i);
                    n.bids.forEach((function(n) {
                        var e = function(n, i) {
                            var e = d.STRICT;
                            if (function(n) {
                                    return !(void 0 === n || !(0, c.isPlainObject)(n) && ((0, c.logError)(t + "the following schain config will not be used as schain is not an object.", n), 1))
                                }(n)) {
                                if ((0, c.isStr)(n.validation) && -1 != h.indexOf(n.validation) && (e = n.validation), e === d.OFF) return n.config;
                                if (function(n, i) {
                                        var e = "Detected something wrong within an schain config:",
                                            o = "";

                                        function s(n) {
                                            o += "\n" + n
                                        }

                                        function t() {
                                            !0 === i ? (0, c.logError)(e, n, o) : (0, c.logWarn)(e, n, o)
                                        }
                                        if (!(0, c.isPlainObject)(n) && (s("schain.config" + f), t(), i)) return !1;
                                        if ((0, c.isNumber)(n.complete) && (0, c.isInteger)(n.complete) || s("schain.config.complete" + r), (0, c.isStr)(n.ver) || s("schain.config.ver" + a), (0, c.hasOwn)(n, "ext") && ((0, c.isPlainObject)(n.ext) || s("schain.config.ext" + f)), (0, c.isArray)(n.nodes)) n.nodes.forEach((function(n, i) {
                                            (0, c.isStr)(n.asi) || s("schain.config.nodes[".concat(i, "].asi") + a), (0, c.isStr)(n.sid) || s("schain.config.nodes[".concat(i, "].sid") + a), (0, c.isNumber)(n.hp) && (0, c.isInteger)(n.hp) || s("schain.config.nodes[".concat(i, "].hp") + r), (0, c.hasOwn)(n, "rid") && ((0, c.isStr)(n.rid) || s("schain.config.nodes[".concat(i, "].rid") + a)), (0, c.hasOwn)(n, "name") && ((0, c.isStr)(n.name) || s("schain.config.nodes[".concat(i, "].name") + a)), (0, c.hasOwn)(n, "domain") && ((0, c.isStr)(n.domain) || s("schain.config.nodes[".concat(i, "].domain") + a)), (0, c.hasOwn)(n, "ext") && ((0, c.isPlainObject)(n.ext) || s("schain.config.nodes[".concat(i, "].ext") + f))
                                        }));
                                        else if (s("schain.config.nodes should be an Array"), t(), i) return !1;
                                        return !(o.length > 0 && (t(), i))
                                    }(n.config, !(e !== d.STRICT))) return n.config;
                                (0, c.logError)(t + "due to the 'strict' validation setting, this schain config will not be passed to bidder '".concat(i, "'.  See above error for details."))
                            }
                            return null
                        }(o, i);
                        e && (n.schain = e)
                    }))
                })), n(i)
            })), window.fusePbjs.installedModules.push("schain")
        }
    },
    function(n) {
        n(n.s = 3019)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [1215], {
        2139: function(e, r, t) {
            var a = t(265),
                i = t(9853),
                o = t(8265),
                n = t(8962),
                d = t(2224),
                s = t(1609),
                u = {
                    code: "smartadserver",
                    gvlid: 45,
                    aliases: ["smart"],
                    supportedMediaTypes: [o.Mk, o.pX],
                    isBidRequestValid: function(e) {
                        return !!(e.params && e.params.siteId && e.params.pageId && e.params.formatId)
                    },
                    serializeSupplyChain: function(e) {
                        if (!e || !e.nodes) return null;
                        var r = ["asi", "sid", "hp", "rid", "name", "domain"];
                        return "".concat(e.ver, ",").concat(e.complete, "!") + e.nodes.map((function(e) {
                            return r.map((function(r) {
                                return e[r] ? encodeURIComponent(e[r]) : ""
                            })).join(",")
                        })).join("!")
                    },
                    adaptBannerSizes: function(e) {
                        return e.map((function(e) {
                            return {
                                w: e[0],
                                h: e[1]
                            }
                        }))
                    },
                    fillPayloadForVideoBidRequest: function(e, r, t) {
                        var a = r.playerSize[0];
                        e.isVideo = "instream" === r.context, e.mediaType = o.pX, e.videoData = {
                            videoProtocol: this.getProtocolForVideoBidRequest(r, t),
                            playerWidth: a[0],
                            playerHeight: a[1],
                            adBreak: this.getStartDelayForVideoBidRequest(r, t)
                        }
                    },
                    getProtocolForVideoBidRequest: function(e, r) {
                        return void 0 !== r && r.protocol ? r.protocol : void 0 !== e && Array.isArray(e.protocols) ? Math.max.apply(Math, e.protocols) : null
                    },
                    getStartDelayForVideoBidRequest: function(e, r) {
                        if (void 0 !== r && r.startDelay) return r.startDelay;
                        if (void 0 !== e) {
                            if (0 == e.startdelay) return 1;
                            if (-1 == e.startdelay) return 2;
                            if (-2 == e.startdelay) return 3
                        }
                        return 2
                    },
                    createServerRequest: function(e, r) {
                        return {
                            method: "POST",
                            url: (void 0 !== r ? r : "https://prg.smartadserver.com") + "/prebid/v1",
                            data: JSON.stringify(e)
                        }
                    },
                    buildRequests: function(e, r) {
                        var t = n.vc.getConfig("currency.adServerCurrency");
                        return e.reduce((function(e, o) {
                            var s = {
                                siteid: o.params.siteId,
                                pageid: o.params.pageId,
                                formatid: o.params.formatId,
                                currencyCode: t,
                                bidfloor: o.params.bidfloor || u.getBidFloor(o, t),
                                targeting: o.params.target && "" !== o.params.target ? o.params.target : void 0,
                                buid: o.params.buId && "" !== o.params.buId ? o.params.buId : void 0,
                                appname: o.params.appName && "" !== o.params.appName ? o.params.appName : void 0,
                                ckid: o.params.ckId || 0,
                                tagId: o.adUnitCode,
                                pageDomain: r && r.refererInfo && r.refererInfo.referer ? r.refererInfo.referer : void 0,
                                transactionId: o.transactionId,
                                timeout: n.vc.getConfig("bidderTimeout"),
                                bidId: o.bidId,
                                prebidVersion: "6.27.0",
                                schain: u.serializeSupplyChain(o.schain)
                            };
                            r && r.gdprConsent && (s.addtl_consent = r.gdprConsent.addtlConsent, s.gdpr_consent = r.gdprConsent.consentString, s.gdpr = r.gdprConsent.gdprApplies), o && o.userId && (s.eids = (0, d.HQ)(o.userId)), r && r.uspConsent && (s.us_privacy = r.uspConsent);
                            var c = (0, a.Z)(o, "mediaTypes.video"),
                                p = (0, a.Z)(o, "mediaTypes.banner"),
                                l = c && ("instream" === c.context || "outstream" === c.context);
                            if (!l && p) s.sizes = u.adaptBannerSizes(p.sizes), e.push(u.createServerRequest(s, o.params.domain));
                            else if (l && !p) u.fillPayloadForVideoBidRequest(s, c, o.params.video), e.push(u.createServerRequest(s, o.params.domain));
                            else if (l && p) {
                                var m = (0, i.deepClone)(s);
                                u.fillPayloadForVideoBidRequest(m, c, o.params.video), e.push(u.createServerRequest(m, o.params.domain)), s.sizes = u.adaptBannerSizes(p.sizes), e.push(u.createServerRequest(s, o.params.domain))
                            } else e.push({});
                            return e
                        }), [])
                    },
                    interpretResponse: function(e, r) {
                        var t = [],
                            a = e.body;
                        try {
                            if (a && !a.isNoAd) {
                                var n = JSON.parse(r.data),
                                    d = {
                                        requestId: n.bidId,
                                        cpm: a.cpm,
                                        width: a.width,
                                        height: a.height,
                                        creativeId: a.creativeId,
                                        dealId: a.dealId,
                                        currency: a.currency,
                                        netRevenue: a.isNetCpm,
                                        ttl: a.ttl,
                                        dspPixels: a.dspPixels,
                                        meta: {
                                            advertiserDomains: a.adomain ? a.adomain : []
                                        }
                                    };
                                n.mediaType === o.pX ? (d.mediaType = o.pX, d.vastUrl = a.adUrl, d.vastXml = a.ad, d.content = a.ad) : (d.adUrl = a.adUrl, d.ad = a.ad), t.push(d)
                            }
                        } catch (e) {
                            (0, i.logError)("Error while parsing smart server response", e)
                        }
                        return t
                    },
                    getBidFloor: function(e, r) {
                        if (!(0, i.isFn)(e.getFloor)) return 0;
                        var t = e.getFloor({
                            currency: r || "USD",
                            mediaType: "*",
                            size: "*"
                        });
                        return (0, i.isPlainObject)(t) && !isNaN(t.floor) ? t.floor : 0
                    },
                    getUserSyncs: function(e, r) {
                        var t = [];
                        return e.iframeEnabled && r.length > 0 && null != r[0].body.cSyncUrl ? t.push({
                            type: "iframe",
                            url: r[0].body.cSyncUrl
                        }) : e.pixelEnabled && r.length > 0 && void 0 !== r[0].body.dspPixels && r[0].body.dspPixels.forEach((function(e) {
                            t.push({
                                type: "image",
                                url: e
                            })
                        })), t
                    }
                };
            (0, s.dX)(u), window.fusePbjs.installedModules.push("smartadserverBidAdapter")
        },
        2224: function(e, r, t) {
            t.d(r, {
                HQ: function() {
                    return d
                },
                Pv: function() {
                    return s
                },
                UR: function() {
                    return o
                }
            });
            var a = t(9853),
                i = t(265),
                o = {
                    trustpid: {
                        source: "trustpid.com",
                        atype: 1,
                        getValue: function(e) {
                            return e
                        }
                    },
                    intentIqId: {
                        source: "intentiq.com",
                        atype: 1
                    },
                    naveggId: {
                        source: "navegg.com",
                        atype: 1
                    },
                    justId: {
                        source: "justtag.com",
                        atype: 1
                    },
                    pubcid: {
                        source: "pubcid.org",
                        atype: 1
                    },
                    tdid: {
                        source: "adserver.org",
                        atype: 1,
                        getUidExt: function() {
                            return {
                                rtiPartner: "TDID"
                            }
                        }
                    },
                    id5id: {
                        getValue: function(e) {
                            return e.uid
                        },
                        source: "id5-sync.com",
                        atype: 1,
                        getUidExt: function(e) {
                            if (e.ext) return e.ext
                        }
                    },
                    ftrackId: {
                        source: "flashtalking.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.uid
                        },
                        getUidExt: function(e) {
                            if (e.ext) return e.ext
                        }
                    },
                    parrableId: {
                        source: "parrable.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.eid ? e.eid : e.ccpaOptout ? "" : null
                        },
                        getUidExt: function(e) {
                            var r = (0, a.pick)(e, ["ibaOptout", "ccpaOptout"]);
                            if (Object.keys(r).length) return r
                        }
                    },
                    idl_env: {
                        source: "liveramp.com",
                        atype: 3
                    },
                    lipb: {
                        getValue: function(e) {
                            return e.lipbid
                        },
                        source: "liveintent.com",
                        atype: 3,
                        getEidExt: function(e) {
                            if (Array.isArray(e.segments) && e.segments.length) return {
                                segments: e.segments
                            }
                        }
                    },
                    britepoolid: {
                        source: "britepool.com",
                        atype: 3
                    },
                    dmdId: {
                        source: "hcn.health",
                        atype: 3
                    },
                    lotamePanoramaId: {
                        source: "crwdcntrl.net",
                        atype: 1
                    },
                    criteoId: {
                        source: "criteo.com",
                        atype: 1
                    },
                    merkleId: {
                        source: "merkleinc.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        },
                        getUidExt: function(e) {
                            return e && e.keyID ? {
                                keyID: e.keyID
                            } : void 0
                        }
                    },
                    netId: {
                        source: "netid.de",
                        atype: 1
                    },
                    IDP: {
                        source: "zeotap.com",
                        atype: 1
                    },
                    hadronId: {
                        source: "audigent.com",
                        atype: 1
                    },
                    haloId: {
                        source: "audigent.com",
                        atype: 1
                    },
                    quantcastId: {
                        source: "quantcast.com",
                        atype: 1
                    },
                    nextrollId: {
                        source: "nextroll.com",
                        atype: 1
                    },
                    idx: {
                        source: "idx.lat",
                        atype: 1
                    },
                    connectid: {
                        source: "verizonmedia.com",
                        atype: 3
                    },
                    fabrickId: {
                        source: "neustar.biz",
                        atype: 1
                    },
                    mwOpenLinkId: {
                        source: "mediawallahscript.com",
                        atype: 1
                    },
                    tapadId: {
                        source: "tapad.com",
                        atype: 1
                    },
                    novatiq: {
                        getValue: function(e) {
                            return e.snowflake
                        },
                        source: "novatiq.com",
                        atype: 1
                    },
                    uid2: {
                        source: "uidapi.com",
                        atype: 3,
                        getValue: function(e) {
                            return e.id
                        }
                    },
                    dapId: {
                        source: "akamai.com",
                        atype: 1
                    },
                    deepintentId: {
                        source: "deepintent.com",
                        atype: 3
                    },
                    admixerId: {
                        source: "admixer.net",
                        atype: 3
                    },
                    adtelligentId: {
                        source: "adtelligent.com",
                        atype: 3
                    },
                    amxId: {
                        source: "amxrtb.com",
                        atype: 1
                    },
                    publinkId: {
                        source: "epsilon.com",
                        atype: 3
                    },
                    kpuid: {
                        source: "kpuid.com",
                        atype: 3
                    },
                    imuid: {
                        source: "intimatemerger.com",
                        atype: 1
                    },
                    connectId: {
                        source: "yahoo.com",
                        atype: 3
                    },
                    qid: {
                        source: "adquery.io",
                        atype: 1
                    },
                    dacId: {
                        source: "impact-ad.jp",
                        atype: 1
                    },
                    "33acrossId": {
                        source: "33across.com",
                        atype: 1,
                        getValue: function(e) {
                            return e.envelope
                        }
                    },
                    gravitompId: {
                        source: "gravito.net",
                        atype: 1
                    }
                };

            function n(e, r) {
                var t = o[r];
                if (t && e) {
                    var i = {};
                    i.source = t.source;
                    var n = (0, a.isFn)(t.getValue) ? t.getValue(e) : e;
                    if ((0, a.isStr)(n)) {
                        var d = {
                            id: n,
                            atype: t.atype
                        };
                        if ((0, a.isFn)(t.getUidExt)) {
                            var s = t.getUidExt(e);
                            s && (d.ext = s)
                        }
                        if (i.uids = [d], (0, a.isFn)(t.getEidExt)) {
                            var u = t.getEidExt(e);
                            u && (i.ext = u)
                        }
                        return i
                    }
                }
                return null
            }

            function d(e) {
                var r = [];
                for (var t in e)
                    if (e.hasOwnProperty(t))
                        if ("pubProvidedId" === t) r = r.concat(e.pubProvidedId);
                        else {
                            var a = n(e[t], t);
                            a && r.push(a)
                        }
                return r
            }

            function s(e) {
                var r = [];
                return e.filter((function(e) {
                    return (0, a.isPlainObject)(e.idObj) && Object.keys(e.idObj).length
                })).forEach((function(e) {
                    Object.keys(e.idObj).forEach((function(t) {
                        (0, i.Z)(e, "config.bidders") && Array.isArray(e.config.bidders) && (0, i.Z)(o, t + ".source") && r.push({
                            source: o[t].source,
                            bidders: e.config.bidders
                        })
                    }))
                })), r
            }
        }
    },
    function(e) {
        e(e.s = 2139)
    }
]);
"use strict";
(self.fusePbjsChunk = self.fusePbjsChunk || []).push([
    [2599], {
        455: function(e, r, t) {
            var n = t(9853),
                i = t(8265),
                o = t(1609),
                u = t(8962);

            function a() {
                return a = Object.assign || function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }, a.apply(this, arguments)
            }

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function c(e, r) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(e, r).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function s(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {};
                    r % 2 ? c(Object(t), !0).forEach((function(r) {
                        d(e, r, t[r])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(r) {
                        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                    }))
                }
                return e
            }

            function d(e, r, t) {
                return r in e ? Object.defineProperty(e, r, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[r] = t, e
            }

            function l(e) {
                return function(e) {
                    if (Array.isArray(e)) return f(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                }(e) || function(e, r) {
                    if (e) {
                        if ("string" == typeof e) return f(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? f(e, r) : void 0
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(e, r) {
                (null == r || r > e.length) && (r = e.length);
                for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
                return n
            }
            var y = !0,
                m = null,
                b = {
                    gvlid: 28,
                    code: "triplelift",
                    supportedMediaTypes: [i.Mk, i.pX],
                    isBidRequestValid: function(e) {
                        return void 0 !== e.params.inventoryCode
                    },
                    buildRequests: function(e, r) {
                        var t = "https://tlx.3lift.com/header/auction?",
                            i = function(e) {
                                var r, t, i, o, p, c, d = {},
                                    f = e[0].schain,
                                    y = (r = {}, t = {}, i = {}, o = u.vc.getConfig("ortb2") || {}, p = a({}, o.site), c = a({}, o.user), h(t, p), h(i, c), (0, n.isEmpty)(t) || (r.context = t), (0, n.isEmpty)(i) || (r.user = i), r);
                                d.imp = e.map((function(e, r) {
                                    var t, i = {
                                        id: r,
                                        tagid: e.params.inventoryCode,
                                        floor: v(e)
                                    };
                                    return g(e) ? i.video = function(e) {
                                        var r = s(s({}, e.params.video), e.mediaTypes.video);
                                        return r.w || (r.w = r.playerSize[0][0]), r.h || (r.h = r.playerSize[0][1]), "instream" === r.context && (r.placement = 1), delete r.playerSize, r
                                    }(e) : e.mediaTypes.banner && (i.banner = {
                                        format: (t = e.sizes, t.filter(A).map((function(e) {
                                            return {
                                                w: e[0],
                                                h: e[1]
                                            }
                                        })))
                                    }), (0, n.isEmpty)(e.ortb2Imp) || (i.fpd = function(e) {
                                        var r = {},
                                            t = {};
                                        return h(t, e.ext), (0, n.isEmpty)(t) || (r.context = t), r
                                    }(e.ortb2Imp)), i
                                }));
                                var m = [].concat(l(S([e[0]], "tdid", "adserver.org", "TDID")), l(function(e) {
                                    return S(e, "idl_env", "liveramp.com", "idl")
                                }([e[0]])), l(function(e) {
                                    return S(e, "criteoId", "criteo.com", "criteoId")
                                }([e[0]])), l(function(e) {
                                    return S(e, "pubcid", "pubcid.org", "pubcid")
                                }([e[0]])));
                                m.length > 0 && (d.user = {
                                    ext: {
                                        eids: m
                                    }
                                });
                                var b = function(e, r) {
                                    var t = {};
                                    return (0, n.isEmpty)(e) || (t.schain = s({}, e)), (0, n.isEmpty)(r) || (t.fpd = s({}, r)), t
                                }(f, y);
                                return (0, n.isEmpty)(b) || (d.ext = b), d
                            }(e);
                        if (t = (0, n.tryAppendQueryString)(t, "lib", "prebid"), t = (0, n.tryAppendQueryString)(t, "v", "6.27.0"), r && r.refererInfo) {
                            var o = r.refererInfo.referer;
                            t = (0, n.tryAppendQueryString)(t, "referrer", o)
                        }
                        return r && r.timeout && (t = (0, n.tryAppendQueryString)(t, "tmax", r.timeout)), r && r.gdprConsent && (void 0 !== r.gdprConsent.gdprApplies && (y = r.gdprConsent.gdprApplies, t = (0, n.tryAppendQueryString)(t, "gdpr", y.toString())), void 0 !== r.gdprConsent.consentString && (m = r.gdprConsent.consentString, t = (0, n.tryAppendQueryString)(t, "cmp_cs", m))), r && r.uspConsent && (t = (0, n.tryAppendQueryString)(t, "us_privacy", r.uspConsent)), !0 === u.vc.getConfig("coppa") && (t = (0, n.tryAppendQueryString)(t, "coppa", !0)), t.lastIndexOf("&") === t.length - 1 && (t = t.substring(0, t.length - 1)), (0, n.logMessage)("tlCall request built: " + t), {
                            method: "POST",
                            url: t,
                            data: i,
                            bidderRequest: r
                        }
                    },
                    interpretResponse: function(e, r) {
                        var t = r.bidderRequest;
                        return (e.body.bids || []).map((function(e) {
                            return function(e, r) {
                                var t = {},
                                    n = r.width || 1,
                                    i = r.height || 1,
                                    o = r.deal_id || "",
                                    u = r.crid || "",
                                    a = e.bids[r.imp_id];
                                return 0 != r.cpm && r.ad && (t = {
                                    requestId: a.bidId,
                                    cpm: r.cpm,
                                    width: n,
                                    height: i,
                                    netRevenue: !0,
                                    ad: r.ad,
                                    creativeId: u,
                                    dealId: o,
                                    currency: "USD",
                                    ttl: 300,
                                    tl_source: r.tl_source,
                                    meta: {}
                                }, g(a) && (t.vastXml = r.ad, t.mediaType = "video", t.ttl = 3600), r.advertiser_name && (t.meta.advertiserName = r.advertiser_name), r.adomain && r.adomain.length && (t.meta.advertiserDomains = r.adomain), r.tl_source && "hdx" == r.tl_source && (t.meta.mediaType = "banner"), r.tl_source && "tlx" == r.tl_source && (t.meta.mediaType = "native")), t
                            }(t, e)
                        }))
                    },
                    getUserSyncs: function(e, r, t, i) {
                        var o = function(e) {
                            if (e) return e.iframeEnabled ? "iframe" : e.pixelEnabled ? "image" : void 0
                        }(e);
                        if (o) {
                            var u = "https://eb2.3lift.com/sync?";
                            return "image" === o && (u = (0, n.tryAppendQueryString)(u, "px", 1), u = (0, n.tryAppendQueryString)(u, "src", "prebid")), null !== m && (u = (0, n.tryAppendQueryString)(u, "gdpr", y), u = (0, n.tryAppendQueryString)(u, "cmp_cs", m)), i && (u = (0, n.tryAppendQueryString)(u, "us_privacy", i)), [{
                                type: o,
                                url: u
                            }]
                        }
                    }
                };

            function g(e) {
                return !!e.mediaTypes.video && !!e.mediaTypes.video.context && "instream" === e.mediaTypes.video.context.toLowerCase()
            }

            function v(e) {
                var r = null;
                if ("function" == typeof e.getFloor) try {
                    var t = e.getFloor({
                        currency: "USD",
                        mediaType: g(e) ? "video" : "banner",
                        size: "*"
                    });
                    "object" !== p(t) || "USD" !== t.currency || isNaN(parseFloat(t.floor)) || (r = parseFloat(t.floor))
                } catch (e) {
                    (0, n.logError)("Triplelift: getFloor threw an error: ", e)
                }
                return null !== r ? r : e.params.floor
            }

            function h(e, r) {
                (0, n.isEmpty)(r) || Object.keys(r).forEach((function(t) {
                    null != r[t] && (e[t] = r[t])
                }))
            }

            function S(e, r, t, n) {
                return e.map(function(e) {
                    return function(r) {
                        return r && r.userId && r.userId[e]
                    }
                }(r)).filter(O(r)).map(function(e, r) {
                    return function(t) {
                        return {
                            source: e,
                            uids: [{
                                id: t.id ? t.id : t,
                                ext: {
                                    rtiPartner: r
                                }
                            }]
                        }
                    }
                }(t, n))
            }
            var O = function(e) {
                return function(r, t, i) {
                    var o = !!r && ((0, n.isStr)(r) ? !!r : (0, n.isPlainObject)(r) && !(0, n.isArray)(r) && !(0, n.isEmpty)(r) && r.id && (0, n.isStr)(r.id) && !!r.id);
                    return o || void 0 === i[0] || (0, n.logWarn)("Triplelift: invalid ".concat(e, " userId format")), o
                }
            };

            function A(e) {
                return 2 === e.length && "number" == typeof e[0] && "number" == typeof e[1]
            }(0, o.dX)(b), window.fusePbjs.installedModules.push("tripleliftBidAdapter")
        }
    },
    function(e) {
        e(e.s = 455)
    }
]);
fusePbjs.processQueue();