! function(e) {
    "function" == typeof fuseDefine && fuseDefine.amd ? fuseDefine(e) : e()
}(function() {
    "use strict";

    function L(e) {
        return (L = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function l(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function B(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function g(e, t, i) {
        return t && B(e.prototype, t), i && B(e, i), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function N(e, t, i) {
        return t in e ? Object.defineProperty(e, t, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = i, e
    }

    function U(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && F(e, t)
    }

    function G(e) {
        return (G = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function F(e, t) {
        return (F = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function W(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        t = e;
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function j(i) {
        var n = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var e, t = G(i);
            return W(this, n ? (e = G(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }

    function V(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != i) {
                var n, r, o = [],
                    s = !0,
                    a = !1;
                try {
                    for (i = i.call(e); !(s = (n = i.next()).done) && (o.push(n.value), !t || o.length !== t); s = !0);
                } catch (e) {
                    a = !0, r = e
                } finally {
                    try {
                        s || null == i.return || i.return()
                    } finally {
                        if (a) throw r
                    }
                }
                return o
            }
        }(e, t) || H(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function s(e) {
        return function(e) {
            if (Array.isArray(e)) return q(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || H(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function H(e, t) {
        var i;
        if (e) return "string" == typeof e ? q(e, t) : "Map" === (i = "Object" === (i = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : i) || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? q(e, t) : void 0
    }

    function q(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
        return n
    }
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = Object(this),
                n = i.length >>> 0;
            if (0 != n)
                for (var r, o, t = 0 | t, s = Math.max(0 <= t ? t : n - Math.abs(t), 0); s < n;) {
                    if ((r = i[s]) === (o = e) || "number" == typeof r && "number" == typeof o && isNaN(r) && isNaN(o)) return !0;
                    s++
                }
            return !1
        }
    }), "undefined" != typeof window && window.NodeList && !window.NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", {
        configurable: !0,
        value: function i() {
            var n = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
            return n ? Array.prototype.reduce.call(this, function(e, t) {
                return Array.isArray(t) ? e.push.apply(e, i.call(t, n - 1)) : e.push(t), e
            }, []) : Array.prototype.slice.call(this)
        },
        writable: !0
    }), Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
        configurable: !0,
        value: function(e) {
            return Array.prototype.map.apply(this, arguments).flat()
        },
        writable: !0
    });
    var Z = ["verbose", "debug", "info", "warn", "error", "off"],
        Q = function() {
            function r(e, t, i) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "off";
                l(this, r), this.console = e, this.logName = t, this.fuseDob = i, this.logLevel = n, this.logs = []
            }
            return g(r, [{
                key: "setFuseDob",
                value: function(e) {
                    this.fuseDob = e
                }
            }, {
                key: "getTimestamp",
                value: function() {
                    return this.fuseDob ? " [".concat(Date.now() - this.fuseDob, "]") : ""
                }
            }, {
                key: "callLogMethod",
                value: function(e) {
                    if ("off" !== e) {
                        for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                        var r = ["[".concat(this.logName, "]-").concat(i[0]).concat(this.getTimestamp())].concat(s(i.slice(1)));
                        "warn" !== e && "error" !== e || (1e3 <= this.logs.length && (this.logs = []), this.logs.push({
                            level: e,
                            params: r
                        })), "error" !== e && Z.indexOf(e) < Z.indexOf(this.logLevel) || this.console["verbose" != e ? e : "debug"].apply(null, r)
                    }
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    this.callLogMethod("error", t)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    this.callLogMethod("warn", t)
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    this.callLogMethod("info", t)
                }
            }, {
                key: "info",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    this.callLogMethod("info", t)
                }
            }, {
                key: "debug",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    this.callLogMethod("debug", t)
                }
            }, {
                key: "setLogLevel",
                value: function(e) {
                    this.logLevel = e
                }
            }, {
                key: "getLogLevel",
                value: function() {
                    return this.logLevel
                }
            }, {
                key: "getLogs",
                value: function() {
                    return this.logs
                }
            }]), r
        }();

    function h(e) {
        return null == e
    }

    function J(e) {
        return void 0 === e
    }

    function p(e) {
        return !h(e)
    }

    function Y(e) {
        throw new Error("exhaustiveCheck(".concat(e, ") should not have been called"))
    }

    function K(e) {
        if (!(e instanceof Error)) throw e
    }
    var f = new(function() {
        function e() {
            l(this, e), this.sessionId = function() {
                for (var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 20, t = "", i = 0; i < e; ++i) t += Math.floor(16 * Math.random()).toString(16);
                return t
            }()
        }
        return g(e, [{
            key: "isInDebugMode",
            value: function() {
                return "true" === this.getQueryParam("fuse_debug")[1]
            }
        }, {
            key: "getWindowLocation",
            value: function() {
                if (!this.location) try {
                    this.location = this.getBrowserWindowObject().self.location
                } catch (e) {
                    this.location = this.getBrowserWindowObject().location
                }
                return this.location
            }
        }, {
            key: "getFuseDob",
            value: function() {
                return this.getBrowserWindowObject().performance.timing.navigationStart
            }
        }, {
            key: "getPackageMajorVersion",
            value: function() {
                return 2
            }
        }, {
            key: "getBrowserWindowObject",
            value: function() {
                return window.self
            }
        }, {
            key: "getQueryParam",
            value: function(t) {
                return this.getWindowLocation().search.split(/[?&]/).filter(function(e) {
                    return "" !== e
                }).map(function(e) {
                    return e.split("=")
                }).filter(function(e) {
                    return e[0] === t
                })[0] || []
            }
        }, {
            key: "getMainLogPrefix",
            value: function() {
                return "FUSE"
            }
        }, {
            key: "getLogLevel",
            value: function() {
                var e;
                return this.isInDebugMode() || p(this.fuseDebugger) ? "debug" : this.getQueryParam("fuse_log_level") && this.getQueryParam("fuse_log_level")[1] && (e = this.getQueryParam("fuse_log_level")[1], -1 !== Z.indexOf(e)) ? e : "off"
            }
        }, {
            key: "getLogger",
            value: function() {
                return this.logger || (this.logger = new Q(this.getBrowserWindowObject().console, this.getMainLogPrefix(), this.getFuseDob(), this.getLogLevel())), this.logger
            }
        }, {
            key: "getFuseDebugger",
            value: function() {
                var e;
                return J(this.fuseDebugger) && (e = f.getBrowserWindowObject().fuseDebugger, this.fuseDebugger = null != e ? e : null, this.fuseDebugger) && (this.fuseDebugger.connect(), this.getLogger().debug("[MONITORING]: Debugger attached")), null != (e = this.fuseDebugger) ? e : void 0
            }
        }, {
            key: "getSessionId",
            value: function() {
                return this.sessionId
            }
        }]), e
    }());

    function X(e, t) {
        e && t()
    }

    function $(e, t, i, n) {
        e && 0 < e ? (i.info("[DELAY]: Delaying by ".concat(e, "ms to ").concat(t)), setTimeout(n, e)) : n()
    }
    var i, d, n, ee = {
            isEdgeBrowser: function(e) {
                return /[E]dge/.test(e.navigator.userAgent)
            }
        },
        te = f.getBrowserWindowObject(),
        ie = f.getLogger(),
        ne = function(t, e) {
            ie.debug("[INIT]: Downloading library ".concat(t.name));
            var i, n, r = te.document.createElement("script");
            r.async = !0, r.type = "text/javascript", t.id && (r.id = t.id), t.attributes && Object.keys(t.attributes).forEach(function(e) {
                r.setAttribute(e, t.attributes[e])
            }), "function" == typeof e && (r.readyState ? r.onreadystatechange = function() {
                "loaded" !== r.readyState && "complete" !== r.readyState || (r.onreadystatechange = null, e())
            } : r.onload = function() {
                e()
            }), r.src = "https:".concat(t.url).concat(t.file), t.query && (r.src = "".concat(r.src, "?").concat(t.query)), t.insertSelector ? (n = te.document.querySelector(t.insertSelector)) ? n.appendChild(r) : ie.warn("[INIT]: Injection library ".concat(t.name, ". Element with selector ").concat(t.insertSelector, " not found")) : null != (i = (n = te.document.getElementsByTagName("script")[0]).parentNode) && i.insertBefore(r, n)
        },
        re = ((e = i = i || {}).Desktop = "desktop", e.Tablet = "tablet", e.Mobile = "mobile", (e = d = d || {}).Chrome = "chrome", e.Safari = "safari", e.Opera = "opera", e.Edge = "edge", e.IE11 = "ie11", e.Firefox = "firefox", e.Other = "other", (e = n = n || {}).IOS = "ios", e.MacOS = "mac", e.Android = "android", e.Windows = "windows", e.Linux = "linux", e.ChromeOs = "chromeos", e.Other = "other", [{
            regex: /chrome|crios|crmo/i,
            browser: d.Chrome
        }, {
            regex: /firefox|iceweasel|fxios/i,
            browser: d.Firefox
        }, {
            regex: /safari|applewebkit/i,
            browser: d.Safari
        }, {
            regex: /opera/i,
            browser: d.Opera
        }, {
            regex: /opr\/|opios/i,
            browser: d.Opera
        }, {
            regex: /\sedg\//i,
            browser: d.Edge
        }, {
            regex: /edg([ea]|ios)/i,
            browser: d.Edge
        }]),
        oe = [{
            regex: /huawei/i,
            device: i.Mobile
        }, {
            regex: /nexus\s*(?:7|8|9|10).*/i,
            device: i.Tablet
        }, {
            regex: /ipad/i,
            device: i.Tablet
        }, {
            regex: /tablet(?! pc)/i,
            device: i.Tablet
        }, {
            regex: /(ipod|iphone)/i,
            device: i.Mobile
        }, {
            regex: /nexus\s*[0-6].*/i,
            device: i.Mobile
        }, {
            regex: /[^-]mobi/i,
            device: i.Mobile
        }],
        se = [{
            os: n.MacOS,
            regex: /macintosh/i
        }, {
            os: n.IOS,
            regex: /(ipod|iphone|ipad)/i
        }, {
            os: n.Android,
            regex: /android/i
        }, {
            os: n.Windows,
            regex: /windows /i
        }, {
            os: n.Linux,
            regex: /linux/i
        }, {
            os: n.ChromeOs,
            regex: /CrOS/
        }],
        ae = function() {
            function t(e) {
                l(this, t), this.browserWindow = e, this.userAgent = e.navigator.userAgent, this.device = this.parseDevice(), this.browser = this.parseBrowser(), this.os = this.parseOperatingSystem()
            }
            return g(t, [{
                key: "parseDevice",
                value: function() {
                    var t = this,
                        e = oe.filter(function(e) {
                            return e.regex.test(t.userAgent)
                        });
                    return 0 < e.length ? e[0].device : null != (e = this.browserWindow.navigator.userAgentData) && e.mobile ? i.Mobile : i.Desktop
                }
            }, {
                key: "parseBrowser",
                value: function() {
                    var t = this,
                        e = re.filter(function(e) {
                            return e.regex.test(t.userAgent)
                        });
                    return 0 < e.length ? e[0].browser : d.Other
                }
            }, {
                key: "parseOperatingSystem",
                value: function() {
                    var t = this,
                        e = se.filter(function(e) {
                            return e.regex.test(t.userAgent)
                        });
                    return 0 < e.length ? e[0].os : n.Other
                }
            }, {
                key: "getDevice",
                value: function() {
                    return this.device
                }
            }, {
                key: "getBrowser",
                value: function() {
                    return this.browser
                }
            }, {
                key: "getOperatingSystem",
                value: function() {
                    return this.os
                }
            }]), t
        }(),
        de = function() {
            function r(e, t) {
                var i, n = this,
                    e = (l(this, r), this.fuseDob = e, this.states = [], this.events = [], this.slotProblems = [], this.firstSlotLoaded = !1, this.firstSlotRenderEnded = !1, this.firstImpressionViewed = !1, Date.now());
                this._tagLoadedMs = e - this.getFuseDob(), this.states.push((N(i = {}, "tag_loaded", !0), N(i, "ts", e), N(i, "load_time_ms", this._tagLoadedMs), i)), t.onSlotLoaded.subscribe(function(e) {
                    n.firstSlotLoaded || (n.setStateStatus("gpt_first_slot_loaded"), n.firstSlotLoaded = !0), n.addAdEvent("gpt_slot_loaded_".concat(e.slot.getSlotElementId()))
                }), t.onSlotResponse.subscribe(function(e) {
                    n.firstSlotRenderEnded || (n.setStateStatus("gpt_first_slot_render_ended"), n.firstSlotRenderEnded = !0), n.addAdEvent("gpt_slot_render_ended_".concat(e.slot.getSlotElementId()))
                }), t.onImpressionViewable.subscribe(function(e) {
                    n.firstImpressionViewed || (n.setStateStatus("gpt_first_impression_viewable"), n.firstImpressionViewed = !0), n.addAdEvent("gpt_impression_viewable_".concat(e.slot.getSlotElementId()))
                })
            }
            return g(r, [{
                key: "getSlotProblems",
                value: function() {
                    return this.slotProblems
                }
            }, {
                key: "addSlotProblem",
                value: function(e) {
                    1e3 <= this.slotProblems.length && (this.slotProblems = this.slotProblems.slice(100)), this.slotProblems.push(Object.assign(Object.assign({}, e), {
                        time: this.getElapsedTime()
                    }))
                }
            }, {
                key: "getFuseDob",
                value: function() {
                    return this.fuseDob
                }
            }, {
                key: "getElapsedTime",
                value: function() {
                    return (new Date).getTime() - this.getFuseDob()
                }
            }, {
                key: "reportFirstGptRequest",
                value: function() {
                    this._firstGptRequestMs = this.getElapsedTime()
                }
            }, {
                key: "firstGptRequestMs",
                get: function() {
                    return this._firstGptRequestMs
                }
            }, {
                key: "reportCmpLoadFinish",
                value: function() {
                    this._cmpLoadFinishMs = this._cmpLoadFinishMs || this.getElapsedTime()
                }
            }, {
                key: "cmpLoadFinishMs",
                get: function() {
                    return this._cmpLoadFinishMs
                }
            }, {
                key: "cmpGdprCached",
                get: function() {
                    return Boolean(this._cmpGdprElapsedMs && this._cmpGdprElapsedMs <= 10)
                }
            }, {
                key: "reportCmpGdprDetermined",
                value: function() {
                    this._cmpGdprElapsedMs = this._cmpGdprElapsedMs || this.getElapsedTime() - this.cmpLoadFinishMs
                }
            }, {
                key: "cmpGdprElapsedMs",
                get: function() {
                    return this._cmpGdprElapsedMs
                }
            }, {
                key: "reportFirstZone",
                value: function() {
                    this._firstZoneMs = this._firstZoneMs || this.getElapsedTime()
                }
            }, {
                key: "firstZoneMs",
                get: function() {
                    return this._firstZoneMs
                }
            }, {
                key: "reportHbAuctionStart",
                value: function() {
                    this._hbAuctionStartMs = this._hbAuctionStartMs || this.getElapsedTime()
                }
            }, {
                key: "hbAuctionStartMs",
                get: function() {
                    return this._hbAuctionStartMs
                }
            }, {
                key: "tagLoadedMs",
                get: function() {
                    return this._tagLoadedMs
                }
            }, {
                key: "setStateStatus",
                value: function(e) {
                    var t, i = Date.now();
                    this.states.push((N(t = {}, e, !0), N(t, "ts", i), N(t, "load_time_ms", i - this.getFuseDob()), t))
                }
            }, {
                key: "addAdEvent",
                value: function(e, t) {
                    var i = Date.now();
                    this.events.push(Object.assign(Object.assign({
                        adEvent: e
                    }, t), {
                        ts: i,
                        event_time_ms: i - this.getFuseDob()
                    }))
                }
            }, {
                key: "getIsCmpPromptShown",
                value: function() {
                    return Boolean(this.states.find(function(e) {
                        return e.cmp_prompt_shown
                    }))
                }
            }]), r
        }();

    function ce(e) {
        var t;
        return 1e4 <= e ? "over_9999" : (t = e < 4e3 ? 500 : 1e3, e = Math.floor(e / t) * t, "".concat(e, "-").concat(e + t - 1))
    }

    function ue() {
        return {
            _tag: "deferred"
        }
    }

    function le() {
        return {
            _tag: "disabled"
        }
    }

    function ge() {
        return {
            _tag: "cancelled"
        }
    }

    function he(e, t) {
        return {
            _tag: "loading",
            loadStart: e,
            deferredLoad: 1 < arguments.length && void 0 !== t && t
        }
    }

    function pe(e, t, i) {
        return {
            _tag: "ready",
            loadStart: e.loadStart,
            loadFinish: t,
            loadElapsed: t - e.loadStart,
            deferredLoad: e.deferredLoad,
            output: i
        }
    }
    var fe = function() {
        function n(e, t, i) {
            l(this, n), this.onComponentInitEvent = e, this.logger = t, this.reporter = i, this._state = {
                yandex: {
                    _tag: "pending"
                },
                gpt: {
                    _tag: "pending"
                },
                prebid: {
                    _tag: "pending"
                },
                cmp: {
                    _tag: "pending"
                },
                uam: {
                    _tag: "pending"
                },
                docReadyScan: {
                    _tag: "pending"
                }
            }
        }
        return g(n, [{
            key: "state",
            get: function() {
                return this._state
            }
        }, {
            key: "updateState",
            value: function(e, t) {
                this._state[e] = t, this.reporter.setStateStatus("component_init_".concat(e, "_").concat(t._tag)), "ready" === t._tag && this.logger.log("[INIT]: Component ".concat(e, " is ready")), this.onComponentInitEvent.emit({
                    component: e,
                    state: t
                })
            }
        }]), n
    }();

    function be(e) {
        return "disabled" == e._tag || "ready" === e._tag && e.output.allowPersonalisation
    }

    function me(e) {
        return "ready" == e._tag ? e.output.jurisdiction : "unknown"
    }

    function ve(e) {
        return e.split("x").map(Number)
    }

    function Se(e) {
        var t = [1, 1];
        return e.forEach(function(e) {
            e[0] > t[0] && (t[0] = e[0]), e[1] > t[1] && (t[1] = e[1])
        }), t
    }

    function ye(e, t) {
        return parseInt((100 * (e / t - 1)).toFixed())
    }

    function xe(a, d) {
        d = d || {}, Ze(Ue(function() {
            function e(e) {
                e.forEach(function(e) {
                    var t, i;
                    e.hadRecentInput || (t = o[0], i = o[o.length - 1], r && e.startTime - i.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (r += e.value, o.push(e)) : (r = e.value, o = [e]))
                }), r > n.value && (n.value = r, n.entries = o, t())
            }
            var t, i = [.1, .25],
                n = c("CLS", 0),
                r = 0,
                o = [],
                s = Le("layout-shift", e);
            s && (t = b(a, n, i, d.reportAllChanges), Ne(function() {
                e(s.takeRecords()), t(!0)
            }), De(function() {
                n = c("CLS", r = 0), t = b(a, n, i, d.reportAllChanges), Be(function() {
                    return t()
                })
            }), setTimeout(t, 0))
        }))
    }

    function Ie(a, d) {
        d = d || {}, qe(function() {
            function e(e) {
                e.forEach(r)
            }
            var t = [100, 300],
                i = He(),
                n = c("FID"),
                r = function(e) {
                    e.startTime < i.firstHiddenTime && (n.value = e.processingStart - e.startTime, n.entries.push(e), s(!0))
                },
                o = Le("first-input", e),
                s = b(a, n, t, d.reportAllChanges);
            o && Ne(Ue(function() {
                e(o.takeRecords()), o.disconnect()
            })), o && De(function() {
                var e;
                n = c("FID"), s = b(a, n, t, d.reportAllChanges), Te = [], Ee = -1, we = null, $e(addEventListener), e = r, Te.push(e), Ke()
            })
        })
    }

    function ke(o, s) {
        s = s || {}, qe(function() {
            var e = [200, 500];
            ot();

            function t(e) {
                e.forEach(function(t) {
                    t.interactionId && ct(t), "first-input" !== t.entryType || a.some(function(e) {
                        return e.entries.some(function(e) {
                            return t.duration === e.duration && t.startTime === e.startTime
                        })
                    }) || ct(t)
                }), e = Math.min(a.length - 1, Math.floor(at() / 50)), (e = a[e]) && e.latency !== i.value && (i.value = e.latency, i.entries = e.entries, r())
            }
            var i = c("INP"),
                n = Le("event", t, {
                    durationThreshold: s.durationThreshold || 40
                }),
                r = b(o, i, e, s.reportAllChanges);
            n && (n.observe({
                type: "first-input",
                buffered: !0
            }), Ne(function() {
                t(n.takeRecords()), i.value < 0 && 0 < at() && (i.value = 0, i.entries = []), r(!0)
            }), De(function() {
                a = [], st = rt(), i = c("INP"), r = b(o, i, e, s.reportAllChanges)
            }))
        })
    }

    function Ce(a, d) {
        d = d || {}, qe(function() {
            function e(e) {
                var t;
                (e = e[e.length - 1]) && (t = Math.max(e.startTime - Me(), 0)) < r.firstHiddenTime && (o.value = t, o.entries = [e], i())
            }
            var i, t, n = [2500, 4e3],
                r = He(),
                o = c("LCP"),
                s = Le("largest-contentful-paint", e);
            s && (i = b(a, o, n, d.reportAllChanges), t = Ue(function() {
                ut[o.id] || (e(s.takeRecords()), s.disconnect(), ut[o.id] = !0, i(!0))
            }), ["keydown", "click"].forEach(function(e) {
                addEventListener(e, t, !0)
            }), Ne(t), De(function(e) {
                o = c("LCP"), i = b(a, o, n, d.reportAllChanges), Be(function() {
                    o.value = performance.now() - e.timeStamp, ut[o.id] = !0, i(!0)
                })
            }))
        })
    }
    var we, Ee, _e, Te, Ae, Re = function(e) {
            return e[0] + "x" + e[1]
        },
        ze = function(e, t) {
            for (var i = [], n = new Set(t), r = 0, o = e.length; r < o; ++r) n.has(e[r]) && i.push(e[r]);
            return i
        },
        Pe = -1,
        De = function(t) {
            addEventListener("pageshow", function(e) {
                e.persisted && (Pe = e.timeStamp, t(e))
            }, !0)
        },
        Oe = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        Me = function() {
            var e = Oe();
            return e && e.activationStart || 0
        },
        c = function(e, t) {
            var i = Oe(),
                n = "navigate";
            return 0 <= Pe ? n = "back-forward-cache" : i && (n = document.prerendering || 0 < Me() ? "prerender" : document.wasDiscarded ? "restore" : i.type.replace(/_/g, "-")), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: n
            }
        },
        Le = function(e, t, i) {
            try {
                var n;
                if (PerformanceObserver.supportedEntryTypes.includes(e)) return (n = new PerformanceObserver(function(e) {
                    Promise.resolve().then(function() {
                        t(e.getEntries())
                    })
                })).observe(Object.assign({
                    type: e,
                    buffered: !0
                }, i || {})), n
            } catch (e) {}
        },
        b = function(t, i, n, r) {
            var o, s;
            return function(e) {
                0 <= i.value && (e || r) && ((s = i.value - (o || 0)) || void 0 === o) && (o = i.value, i.delta = s, i.rating = (e = i.value) > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good", t(i))
            }
        },
        Be = function(e) {
            requestAnimationFrame(function() {
                return requestAnimationFrame(function() {
                    return e()
                })
            })
        },
        Ne = function(t) {
            function e(e) {
                "pagehide" !== e.type && "hidden" !== document.visibilityState || t(e)
            }
            addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0)
        },
        Ue = function(t) {
            var i = !1;
            return function(e) {
                i || (t(e), i = !0)
            }
        },
        Ge = -1,
        Fe = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        We = function(e) {
            "hidden" === document.visibilityState && -1 < Ge && (Ge = "visibilitychange" === e.type ? e.timeStamp : 0, Ve())
        },
        je = function() {
            addEventListener("visibilitychange", We, !0), addEventListener("prerenderingchange", We, !0)
        },
        Ve = function() {
            removeEventListener("visibilitychange", We, !0), removeEventListener("prerenderingchange", We, !0)
        },
        He = function() {
            return Ge < 0 && (Ge = Fe(), je(), De(function() {
                setTimeout(function() {
                    Ge = Fe(), je()
                }, 0)
            })), {
                get firstHiddenTime() {
                    return Ge
                }
            }
        },
        qe = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", function() {
                return e()
            }, !0) : e()
        },
        Ze = function(s, a) {
            a = a || {}, qe(function() {
                var t, i = [1800, 3e3],
                    n = He(),
                    r = c("FCP"),
                    o = Le("paint", function(e) {
                        e.forEach(function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < n.firstHiddenTime) && (r.value = Math.max(e.startTime - Me(), 0), r.entries.push(e), t(!0))
                        })
                    });
                o && (t = b(s, r, i, a.reportAllChanges), De(function(e) {
                    r = c("FCP"), t = b(s, r, i, a.reportAllChanges), Be(function() {
                        r.value = performance.now() - e.timeStamp, t(!0)
                    })
                }))
            })
        },
        Qe = {
            passive: !0,
            capture: !0
        },
        Je = new Date,
        Ye = function(e, t) {
            we || (we = t, Ee = e, _e = new Date, $e(removeEventListener), Ke())
        },
        Ke = function() {
            var t;
            0 <= Ee && Ee < _e - Je && (t = {
                entryType: "first-input",
                name: we.type,
                target: we.target,
                cancelable: we.cancelable,
                startTime: we.timeStamp,
                processingStart: we.timeStamp + Ee
            }, Te.forEach(function(e) {
                e(t)
            }), Te = [])
        },
        Xe = function(e) {
            var t, i, n, r;

            function o() {
                Ye(i, n), r()
            }

            function s() {
                r()
            }
            e.cancelable && (t = (1e12 < e.timeStamp ? new Date : performance.now()) - e.timeStamp, "pointerdown" == e.type ? (i = t, n = e, r = function() {
                removeEventListener("pointerup", o, Qe), removeEventListener("pointercancel", s, Qe)
            }, addEventListener("pointerup", o, Qe), addEventListener("pointercancel", s, Qe)) : Ye(t, e))
        },
        $e = function(t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(e) {
                return t(e, Xe, Qe)
            })
        },
        et = 0,
        tt = 1 / 0,
        it = 0,
        nt = function(e) {
            e.forEach(function(e) {
                e.interactionId && (tt = Math.min(tt, e.interactionId), it = Math.max(it, e.interactionId), et = it ? (it - tt) / 7 + 1 : 0)
            })
        },
        rt = function() {
            return Ae ? et : performance.interactionCount || 0
        },
        ot = function() {
            "interactionCount" in performance || (Ae = Ae || Le("event", nt, {
                type: "event",
                buffered: !0,
                durationThreshold: 0
            }))
        },
        st = 0,
        at = function() {
            return rt() - st
        },
        a = [],
        dt = {},
        ct = function(e) {
            var t = a[a.length - 1],
                i = dt[e.interactionId];
            (i || a.length < 10 || e.duration > t.latency) && (i ? (i.entries.push(e), i.latency = Math.max(i.latency, e.duration)) : (t = {
                id: e.interactionId,
                latency: e.duration,
                entries: [e]
            }, dt[t.id] = t, a.push(t)), a.sort(function(e, t) {
                return t.latency - e.latency
            }), a.splice(10).forEach(function(e) {
                delete dt[e.id]
            }))
        },
        ut = {},
        lt = function e(t) {
            document.prerendering ? qe(function() {
                return e(t)
            }) : "complete" !== document.readyState ? addEventListener("load", function() {
                return e(t)
            }, !0) : setTimeout(t, 0)
        },
        gt = function(e) {
            var t, i, n;
            return e && e.tagName && e.classList ? (t = e.tagName.toLowerCase(), i = e.id ? " #".concat(e.id) : "", n = 0 < e.classList.length ? " .".concat(e.classList.value) : "", e = (e = e.getAttribute("data-fuse")) ? ' [data-fuse="'.concat(e, '"]') : "", "".concat(t).concat(i).concat(n).concat(e)) : ""
        },
        ht = function() {
            function u(e, t, i, n, r, o, s, a, d) {
                var c = this;
                l(this, u), this.componentState = e, this.deviceInfo = t, this.logger = i, this.browserWindow = n, this.sessionId = r, this.reporter = o, this.requestMethod = s, this.backgroundRequestTimeout = 0, this.requestQueue = new Set, this.baseUrl = a.getFuseCDN(), this.fuseUuid = a.getFuseUUID(), this.fuseId = a.getFuseId(), this.publicationId = a.getPublicationId(), this.adServer = a.isYandexEnabled() ? "yandex" : "gpt", this.useWebVitalsRepeatCLSTelemetry = a.getUseWebVitalsRepeatCLSTelemetry(), this.useWebVitalsAllLCPTelemetry = a.getUseWebVitalsAllLCPTelemetry(), a.getUseTelemetry() && d.onSlotRequested.subscribe(function(e) {
                    var t = e.slot.getAdUnitPath(),
                        e = a.getFuseSlots().filter(function(e) {
                            return e.slot === t
                        })[0];
                    e && c.recordSlotRequest(e.id)
                })
            }
            return g(u, [{
                key: "recordSlotRequest",
                value: function(e) {
                    var t = "slot-request",
                        i = this.makeUrl(t, {
                            auid: e
                        }, this.getCmpData());
                    this.logDetails(e, t), this.requestMethod(i)
                }
            }, {
                key: "recordFuseLoad",
                value: function() {
                    this.requestMethod(this.makeUrl("fuse-load"))
                }
            }, {
                key: "recordRogueBidderResponse",
                value: function(e, t, i) {
                    this.requestMethod(this.makeUrl("rogue-bidder-response", {
                        slotId: e,
                        bidder: t.bidder,
                        pbTrId: t.transactionId,
                        pbReqId: t.requestId,
                        pbAdId: t.adId,
                        pbCrId: t.creativeId,
                        pbSize: t.size,
                        size: Re(i),
                        wDiff: ye(t.width, i[0]),
                        hDiff: ye(t.height, i[1])
                    }, this.getCmpData()))
                }
            }, {
                key: "recordRogueAdxResponse",
                value: function(e, t, i) {
                    var n = t.size;
                    this.requestMethod(this.makeUrl("rogue-bidder-response", {
                        slotId: e,
                        bidder: "adx",
                        pbAdId: null == (e = t.sourceAgnosticLineItemId) ? void 0 : e.toString(),
                        pbCrId: null == (e = t.sourceAgnosticCreativeId) ? void 0 : e.toString(),
                        pbSize: Re(n),
                        size: Re(i),
                        wDiff: ye(n[0], i[0]),
                        hDiff: ye(n[1], i[1])
                    }, this.getCmpData()))
                }
            }, {
                key: "prepareRecordingWebVitals",
                value: function() {
                    var e, i, n, r, o, s, a = this;
                    this.deviceInfo.getBrowser() !== d.Chrome ? this.logInfo("[WEB-VITALS]: Disabled web vitals recording for non-chrome browser") : (e = function(e) {
                        "LCP" === (e = e).name ? null != (i = e.entries[0]) && i.element && (t = gt(e.entries[0].element)) : "CLS" === e.name && (t = (i = e.entries.reduce(function(e, t) {
                            return !e || t.value > e.value ? t : e
                        }, void 0)) ? gt(null == (i = i.sources[i.sources.length - 1]) ? void 0 : i.node) : void 0);
                        var t, i = {
                            name: e.name,
                            value: "".concat(e.value),
                            rating: e.rating,
                            id: e.id,
                            delta: "".concat(e.delta),
                            element: t
                        };
                        a.logInfo("[WEB-VITALS]: ".concat(JSON.stringify(i))), a.queueBackgroundRequest("web-vitals", {
                            cwvRep: [i]
                        }, a.getCmpData())
                    }, this.logInfo("[WEB-VITALS]: Set up web vitals callbacks"), xe(e, {
                        reportAllChanges: this.useWebVitalsRepeatCLSTelemetry
                    }), Ze(e), Ie(e), ke(e), Ce(e, {
                        reportAllChanges: this.useWebVitalsAllLCPTelemetry
                    }), i = e, n = n || {}, r = [800, 1800], o = c("TTFB"), s = b(i, o, r, n.reportAllChanges), lt(function() {
                        var e, t = Oe();
                        !t || (e = t.responseStart) <= 0 || e > performance.now() || (o.value = Math.max(e - Me(), 0), o.entries = [t], s(!0), De(function() {
                            o = c("TTFB", 0), (s = b(i, o, r, n.reportAllChanges))(!0)
                        }))
                    }))
                }
            }, {
                key: "prepareBackgroundRequestProcessor",
                value: function() {
                    var e = this;
                    this.browserWindow.addEventListener("visibilitychange", function() {
                        "hidden" === e.browserWindow.document.visibilityState && e.flushQueue()
                    })
                }
            }, {
                key: "logInfo",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    this.logger.info("".concat(t.map(function(e) {
                        return JSON.stringify(e)
                    })))
                }
            }, {
                key: "flushQueue",
                value: function() {
                    var e;
                    if (0 < this.requestQueue.size) {
                        this.logInfo("Flushing request queue");
                        var t, i, n = [],
                            r = function(e, t) {
                                var i, n, r, o, s = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (s) return n = !(i = !0), {
                                    s: function() {
                                        s = s.call(e)
                                    },
                                    n: function() {
                                        var e = s.next();
                                        return i = e.done, e
                                    },
                                    e: function(e) {
                                        n = !0, r = e
                                    },
                                    f: function() {
                                        try {
                                            i || null == s.return || s.return()
                                        } finally {
                                            if (n) throw r
                                        }
                                    }
                                };
                                if (Array.isArray(e) || (s = H(e)) || t && e && "number" == typeof e.length) return s && (e = s), o = 0, {
                                    s: t = function() {},
                                    n: function() {
                                        return o >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[o++]
                                        }
                                    },
                                    e: function(e) {
                                        throw e
                                    },
                                    f: t
                                };
                                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(this.requestQueue);
                        try {
                            for (r.s(); !(i = r.n()).done;) {
                                var o = i.value;
                                "web-vitals" === o.eventType && null != (e = o.record) && e.cwvRep ? (n.push.apply(n, s(o.record.cwvRep)), o.cmpData && (t = o.cmpData)) : this.requestMethod(this.makeUrl(o.eventType, o.record, o.cmpData))
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                        if (n.length)
                            for (; n.length;) this.requestMethod(this.makeUrl("web-vitals", {
                                cwvRep: n.splice(0, 10)
                            }, t));
                        this.requestQueue.clear()
                    }
                }
            }, {
                key: "makeUrl",
                value: function(e, t, i) {
                    var n = i && !["none", "unknown"].includes(i.jurisdiction) && null != i && i.personalisation ? "consent" : "noconsent",
                        t = this.buildQueryParameters(Object.assign(Object.assign(Object.assign({}, t), {
                            cmpj: null == i ? void 0 : i.jurisdiction,
                            cmpdialog: null == i ? void 0 : i.dialogShown
                        }), this.getCommonMetadata(e))),
                        i = "https:".concat(this.baseUrl);
                    return "https://".concat(this.getHostName(i), "/telemetry/").concat(n).concat(t)
                }
            }, {
                key: "queueBackgroundRequest",
                value: function(e, t, i) {
                    var n = this;
                    this.requestQueue.add({
                        eventType: e,
                        record: t,
                        cmpData: i
                    }), clearTimeout(this.backgroundRequestTimeout), this.backgroundRequestTimeout = setTimeout(function() {
                        n.flushQueue()
                    }, 5e3)
                }
            }, {
                key: "logDetails",
                value: function(e, t) {
                    this.logger.debug("[STATS]: Record ".concat(t, " event for fuse ").concat(this.fuseId, ", ad ").concat(e, " on device ").concat(this.deviceInfo.getDevice(), " and browser ").concat(this.deviceInfo.getBrowser()))
                }
            }, {
                key: "buildQueryParameters",
                value: function(e) {
                    return Object.entries(e).reduce(function(e, t) {
                        var t = V(t, 2),
                            i = t[0],
                            t = t[1];
                        return t ? ("object" === L(t) && (t = JSON.stringify(t)), "".concat(e ? e + "&" : "?").concat(encodeURIComponent(i), "=").concat(encodeURIComponent(t))) : e
                    }, "")
                }
            }, {
                key: "getCommonMetadata",
                value: function(e) {
                    var t = [this.browserWindow.location.href, this.getReferrer()],
                        i = t[0],
                        t = t[1];
                    return {
                        v: "1",
                        ttm: Date.now(),
                        cookie: this.browserWindow.navigator.cookieEnabled,
                        res: "".concat(screen.width, "x").concat(screen.height),
                        device: this.deviceInfo.getDevice(),
                        browser: this.deviceInfo.getBrowser(),
                        fuuid: this.fuseUuid,
                        fid: this.fuseId,
                        pubid: this.publicationId,
                        url: this.purify(i),
                        refr: this.purify(t),
                        sid: this.sessionId,
                        srate: 100,
                        adserver: this.adServer,
                        etm: this.reporter.getElapsedTime(),
                        e: e
                    }
                }
            }, {
                key: "getCmpData",
                value: function() {
                    var e = this.componentState.state.cmp;
                    return {
                        jurisdiction: me(e),
                        personalisation: be(e),
                        dialogShown: this.reporter.getIsCmpPromptShown()
                    }
                }
            }, {
                key: "getHostName",
                value: function(e) {
                    var t = /^(?:(?:https?|ftp):)\/*(?:[^@]+@)?([^:/#]+)/.exec(e);
                    return t ? t[1] : e
                }
            }, {
                key: "getParameter",
                value: function(e, t) {
                    e = /^(?:https?|ftp)(?::\/*(?:[^?]+))([?][^#]+)/.exec(e);
                    return e && 1 < (null == e ? void 0 : e.length) ? this.fromQuerystring(t, e[1]) : null
                }
            }, {
                key: "fromQuerystring",
                value: function(e, t) {
                    e = new RegExp("^[^#]*[?&]" + e + "=([^&#]*)").exec(t);
                    return e ? decodeURIComponent(e[1].replace(/\+/g, " ")) : null
                }
            }, {
                key: "getReferrer",
                value: function(e) {
                    var t = this.fromQuerystring("referrer", this.browserWindow.location.href) || this.fromQuerystring("referer", this.browserWindow.location.href);
                    if (t) return t;
                    if (e) return e;
                    try {
                        if (this.browserWindow.top) return this.browserWindow.top.document.referrer;
                        if (this.browserWindow.parent) return this.browserWindow.parent.document.referrer
                    } catch (e) {}
                    return this.browserWindow.document.referrer
                }
            }, {
                key: "purify",
                value: function(e) {
                    return e.replace(/#.*/, "").replace(/[{}]/g, "")
                }
            }]), u
        }(),
        pt = function() {
            function t(e) {
                l(this, t), this.initialiser = e, this._field = null
            }
            return g(t, [{
                key: "field",
                get: function() {
                    var e;
                    return null != (e = this._field) ? e : this._field = this.initialiser()
                }
            }]), t
        }();

    function ft(e) {
        return function() {
            return new pt(e).field
        }
    }

    function bt(e) {
        return f.getQueryParam(e)[1] || ""
    }
    var mt = function() {
            function i(e, t) {
                l(this, i), this.logger = e, this.eventName = t, this.subscribers = [], this.lastEmitted = null, this.wrapped = []
            }
            return g(i, [{
                key: "subscribe",
                value: function(e) {
                    this.subscribers.push(e)
                }
            }, {
                key: "_unsubscribe",
                value: function(e) {
                    e = this.subscribers.indexOf(e);
                    return 0 <= e && (this.subscribers.splice(e, 1), !0)
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    var t = this.findWrapper(e);
                    return t ? this._unsubscribe(t) : this._unsubscribe(e)
                }
            }, {
                key: "findWrapper",
                value: function(t) {
                    var e;
                    return null == (e = this.wrapped.filter(function(e) {
                        return e.subscriber === t
                    }).shift()) ? void 0 : e.wrapper
                }
            }, {
                key: "once",
                value: function(t) {
                    function i(e) {
                        t(e), n.unsubscribe(i)
                    }
                    var n = this;
                    this.subscribe(i), this.wrapped.push({
                        wrapper: i,
                        subscriber: t
                    })
                }
            }, {
                key: "immediateOrOnce",
                value: function(e) {
                    return p(this.lastEmitted) ? (this.logger.debug("[EVENT][".concat(this.eventName, "]: Already triggered, invoking callback synchronously")), e(this.lastEmitted), !0) : (this.once(e), !1)
                }
            }, {
                key: "emit",
                value: function(t) {
                    var i = this,
                        e = this.subscribers.length;
                    0 < e ? this.logger.debug("[EVENT][".concat(this.eventName, "]: Fired, start processing ").concat(e, " callbacks")) : this.logger.debug("[EVENT][".concat(this.eventName, "]: Fired, no pending callbacks")), this.lastEmitted = t, this.subscribers.map(function(e) {
                        return e
                    }).forEach(function(e) {
                        try {
                            e(t)
                        } catch (e) {
                            e instanceof Error ? i.logger.error("[EVENT][".concat(i.eventName, "]: Caught exception in callback with item ").concat(t), e.message, e.stack) : i.logger.error("[EVENT][".concat(i.eventName, "]: Caught exception of invalid type in callback with item ").concat(t))
                        }
                    })
                }
            }, {
                key: "getSubscriberCount",
                value: function() {
                    return this.subscribers.length
                }
            }]), i
        }(),
        vt = function() {
            function o(e, t, i, n) {
                var r = this;
                l(this, o), this.logger = e, this.eventName = t, this.source = i, this.filter = n, this.delegate = new mt(e, t), i.subscribe(function(e) {
                    e = r.filter(e);
                    p(e) && r.delegate.emit(e)
                })
            }
            return g(o, [{
                key: "subscribe",
                value: function(e) {
                    this.delegate.subscribe(e)
                }
            }, {
                key: "unsubscribe",
                value: function(e) {
                    this.delegate.unsubscribe(e)
                }
            }, {
                key: "once",
                value: function(e) {
                    this.delegate.once(e)
                }
            }, {
                key: "immediateOrOnce",
                value: function(e) {
                    return this.delegate.immediateOrOnce(e)
                }
            }]), o
        }(),
        m = new(function() {
            function i(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function() {};
                l(this, i), this.logger = e, this.addDebugProxy = t, this.emitters = {}, this.observables = {}
            }
            return g(i, [{
                key: "onTagInitComplete",
                get: function() {
                    return this.getEmitter("onTagInitComplete")
                }
            }, {
                key: "pageInitObservable",
                get: function() {
                    return this.onPageInit
                }
            }, {
                key: "onPageInit",
                get: function() {
                    return this.getEmitter("onPageInit")
                }
            }, {
                key: "onPageReset",
                get: function() {
                    return this.getEmitter("onPageReset")
                }
            }, {
                key: "onZoneEvent",
                get: function() {
                    return this.getEmitter("onZoneEvent")
                }
            }, {
                key: "onAuctionEvent",
                get: function() {
                    return this.getEmitter("onAuctionEvent")
                }
            }, {
                key: "onZoneRegistered",
                get: function() {
                    return this.getFiltered("register_zone", this.onZoneEvent, function(e) {
                        return "registered" == e.zoneEventType ? e : null
                    })
                }
            }, {
                key: "onZoneActivateApi",
                get: function() {
                    return this.getFiltered("activate_zone_api", this.onZoneEvent, function(e) {
                        return "activate_zone_api" == e.zoneEventType ? e : null
                    })
                }
            }, {
                key: "activateZoneCalledObservable",
                get: function() {
                    return this.onZoneActivateApi
                }
            }, {
                key: "onComponentInitEvent",
                get: function() {
                    return this.getEmitter("onComponentInitEvent")
                }
            }, {
                key: "onInitManagerReady",
                get: function() {
                    return this.getEmitter("onInitManagerReady")
                }
            }, {
                key: "onWindowResized",
                get: function() {
                    return this.getEmitter("onWindowResized")
                }
            }, {
                key: "onSlotLoaded",
                get: function() {
                    return this.getEmitter("onSlotLoaded")
                }
            }, {
                key: "onSlotRender",
                get: function() {
                    return this.getEmitter("onSlotRender")
                }
            }, {
                key: "onSlotResponse",
                get: function() {
                    return this.getEmitter("onSlotResponse")
                }
            }, {
                key: "onSlotRequested",
                get: function() {
                    return this.getEmitter("onSlotRequested")
                }
            }, {
                key: "onImpressionViewable",
                get: function() {
                    return this.getEmitter("onImpressionViewable")
                }
            }, {
                key: "onBreakpointChanged",
                get: function() {
                    return this.getFiltered("onBreakpointChanged", this.onWindowResized, function(e) {
                        return e.crossedBp ? e : null
                    })
                }
            }, {
                key: "getEmitter",
                value: function(e) {
                    var t, i = new mt(this.logger(), e),
                        n = this.addDebugProxy(),
                        n = n ? n(i) : i;
                    return null != (t = (i = this.emitters)[e]) ? t : i[e] = n
                }
            }, {
                key: "getFiltered",
                value: function(e, t, i) {
                    var n, r;
                    return null != (n = (r = this.observables)[e]) ? n : r[e] = new vt(this.logger(), e, t, i)
                }
            }]), i
        }())(ft(function() {
            return f.getLogger()
        }), ft(function() {
            var e;
            return null == (e = f.getFuseDebugger()) ? void 0 : e.fuseEventEmitterWrapper()
        })),
        St = function() {
            function t(e) {
                l(this, t), this.options = {
                    capture: !0,
                    passive: !0
                }, this.window = e.api.viewportInfo.browserWindow, this.triggeredCB = e.onTriggeredCB, this.window.addEventListener("scroll", this.triggeredCB, this.options)
            }
            return g(t, [{
                key: "destroy",
                value: function() {
                    this.window.removeEventListener("scroll", this.triggeredCB, this.options)
                }
            }]), t
        }(),
        yt = "InView",
        xt = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = yt
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new St(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    e = t.slotRegistry.getSlot(e);
                    return !!e && (t = t.viewportInfo.getCurrentBreakpoint().name, !(!h(t = this.params[t]) && !1 !== t) || e.isInView(t))
                }
            }]), t
        }(),
        It = function() {
            function r(t, e, i) {
                l(this, r);

                function n(e) {
                    i(e) && t.onTriggeredCB()
                }
                this.unsubscribe = function() {
                    return e.unsubscribe(n)
                }, e.subscribe(n)
            }
            return g(r, [{
                key: "destroy",
                value: function() {
                    this.unsubscribe()
                }
            }]), r
        }(),
        kt = function() {
            U(r, It);
            var n = j(r);

            function r(e) {
                l(this, r);
                var t = e.api.slotRegistry.getSlot(e.id).zoneInstanceId,
                    i = e.api.events.onZoneActivateApi;
                return n.call(this, e, i, function(e) {
                    return e.instanceId === t
                })
            }
            return g(r)
        }(),
        Ct = "ManualActivate",
        wt = function() {
            function e() {
                l(this, e), this.name = Ct
            }
            return g(e, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new kt(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    e = null == (e = t.slotRegistry.getSlot(e)) ? void 0 : e.zoneInstanceId;
                    return p(e) && t.zoneRegistry.isManuallyActivated(e)
                }
            }]), e
        }(),
        Et = f.getLogger(),
        _t = function() {
            return t("fuseDelayQuantcastInit")
        },
        Tt = function() {
            return t("fuseDelayGptInit")
        },
        At = function() {
            return t("fuseDelayPrebidInit")
        },
        Rt = function() {
            return t("fuseDelayUamInit")
        },
        t = function(e) {
            var t = f.getQueryParam(e)[1];
            if (t) {
                var i = parseInt(t);
                if (Number.isInteger(i)) return i;
                Et.info("[SETTINGS]: Could not parse ".concat(e, " with value ").concat(t, " as a number"))
            }
            return null
        },
        zt = function(e) {
            var t, i = f.getQueryParam(e)[1];
            return h(i) ? null : (h(t = /^(false|true|1|0)$/i.test(i) ? Boolean(/^(true|1)$/i.test(i)) : null) && Et.info("[SETTINGS] Could not parse ".concat(e, " with value: ").concat(i, " as a boolean")), t)
        },
        Pt = {
            fuse_blocked_url: [],
            fuse_breakpoints: {
                m: 960,
                s: 600,
                xs: 0
            },
            fuse_cdn: "//cdn.fuseplatform.net/publift/tags/",
            fuse_id: 2548,
            fuse_industry: ["IAB1"],
            fuse_settings: {
                adblock: !1,
                amazonUam: {
                    enabled: !1
                },
                blockthrough: !0,
                cmp: "script",
                cmpProvider: {
                    partner: "quantcast"
                },
                confiant: !1,
                disableAutoLoadSlots: !1,
                disableGdprPersonalisation: !1,
                enableAutoRegistration: !1,
                enableMiniScrollers: !1,
                fuse_test_urls: [],
                headerbidding: 1e3,
                id5: {
                    enabled: !1
                },
                identity: {
                    enabled: !1
                },
                inskinWidth: 1200,
                onLoadCallback: "",
                prebid: {
                    analytics: [],
                    breakpoint_options: {
                        m: {
                            enabled: !0,
                            timeout: 1e3
                        },
                        s: {
                            enabled: !0,
                            timeout: 1e3
                        },
                        xs: {
                            enabled: !0,
                            timeout: 1e3
                        }
                    },
                    defaultTimeout: 1e3,
                    enabled: !0,
                    sendAllBids: !1
                },
                quickstart: !1,
                responsive: !0,
                strict_cmp: !1,
                telemetry: "default",
                useDomObserver: !1,
                videoSettings: {
                    enabled: !1
                },
                yandex: !1,
                yandexBlockId: ""
            },
            fuse_slots: [{
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "22428464"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965193_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965193_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965193_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965193_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965193_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/instrument_leaderboard",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22584965193",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                mediaTypes: [],
                sizeMapping: {
                    l: [],
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [320, 100],
                        [468, 60]
                    ],
                    xl: [],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/instrument_leaderboard",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1,
                    scrollCreative: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "22428465"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965196_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965196_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965196_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965196_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22584965196_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/instrument_mrec_1",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22584965196",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                mediaTypes: [],
                sizeMapping: {
                    l: [],
                    m: [
                        [300, 250]
                    ],
                    s: [
                        [320, 100],
                        [468, 60]
                    ],
                    xl: [],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [300, 250],
                    [320, 50],
                    [320, 100],
                    [468, 60]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/instrument_mrec_1",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1,
                    scrollCreative: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23431174"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22650756333_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22650756333_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22650756333_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22650756333_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22650756333_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/middle_leaderboard",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22650756333",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/middle_leaderboard",
                stickyAttributes: {
                    allowClose: !1,
                    bgOpacity: 0,
                    compact: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23527470"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298282_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298282_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298282_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298282_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298282_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/instrument_leaderboard_1",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22653298282",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/instrument_leaderboard_1",
                stickyAttributes: {
                    allowClose: !1,
                    bgOpacity: 0,
                    compact: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23527471"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298285_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298285_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298285_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298285_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22653298285_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/instrument_mrec_2",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x250", "300x50", "320x100", "320x50", "468x60"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22653298285",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    l: [],
                    m: [
                        [300, 250]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xl: [],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [300, 250],
                    [320, 50],
                    [320, 100],
                    [468, 60]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/instrument_mrec_2",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684158"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345922_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345922_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345922_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345922_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345922_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/middle_leaderboard_gr",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658345922",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/middle_leaderboard_gr"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684160"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345925_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345925_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345925_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345925_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658345925_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_vn",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658345925",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_vn"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684329"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392668_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392668_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392668_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392668_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392668_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_id",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658392668",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_id"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684332"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392674_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392674_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392674_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392674_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392674_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_it",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658392674",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_it"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684335"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392677_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392677_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392677_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392677_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658392677_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_cn",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658392677",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_cn"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684157"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436982_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436982_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436982_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436982_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436982_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/middle_leaderboard_vn",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658436982",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/middle_leaderboard_vn"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684159"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436985_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436985_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436985_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436985_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436985_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/middle_leaderboard_jp",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658436985",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/middle_leaderboard_jp"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684161"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436988_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436988_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436988_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436988_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436988_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_gr",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658436988",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_gr"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684162"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436991_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436991_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436991_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436991_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658436991_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_jp",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658436991",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_jp"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684330"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484010_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484010_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484010_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484010_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484010_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_es",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658484010",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_es"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684331"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484013_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484013_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484013_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484013_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484013_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_fr",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658484013",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_fr"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684333"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484016_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484016_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484016_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484016_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484016_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_pl",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658484016",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_pl"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684334"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484019_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484019_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484019_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484019_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484019_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_tr",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658484019",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_tr"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684336"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484022_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484022_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484022_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484022_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484022_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_pt",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658484022",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_pt"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "23684337"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484025_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484025_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484025_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484025_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22658484025_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_ru",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22658484025",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_ru"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    refresh: 30,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "24238958"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22681929853_1486317_300x50",
                        zoneId: 1486317
                    }
                }, {
                    bidSizes: ["300x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22681929853_1486318_300x100",
                        zoneId: 1486318
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22681929853_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22681929853_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22681929853_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/exercise_leaderboard",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x100", "300x50", "320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22681929853",
                sizeMapping: {
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xs: [
                        [300, 50],
                        [300, 100],
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/exercise_leaderboard"
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x250"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "25247662"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22742092708_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/left_rectangle_en",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22742092708",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    l: [],
                    m: [
                        [300, 250]
                    ],
                    s: [],
                    xl: [],
                    xs: []
                },
                sizes: [
                    [300, 250]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/left_rectangle_en",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x250"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "25247665"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22742093404_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/left_rectangle_jp",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x250", "336x280"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22742093404",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    l: [],
                    m: [
                        [300, 250]
                    ],
                    s: [],
                    xl: [],
                    xs: []
                },
                sizes: [
                    [300, 250]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/left_rectangle_jp",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x250"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "25247667"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22742093407_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/left_rectangle_es",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x250", "336x280"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22742093407",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    l: [],
                    m: [
                        [300, 250]
                    ],
                    s: [],
                    xl: [],
                    xs: []
                },
                sizes: [
                    [300, 250]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/left_rectangle_es",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["300x250"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "25247666"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22742439794_1486321_300x250",
                        zoneId: 1486321
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/left_rectangle_it",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["300x250"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["300x250", "336x280"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                dynamicAttributes: {
                    each: 0,
                    incrementEach: 0,
                    position: "in",
                    repeatHeight: 1e3,
                    skip: 0
                },
                id: "22742439794",
                interscrollerAttributes: {
                    showBanner: !1,
                    zIndex: 0
                },
                sizeMapping: {
                    l: [],
                    m: [
                        [300, 250]
                    ],
                    s: [],
                    xl: [],
                    xs: []
                },
                sizes: [
                    [300, 250]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/left_rectangle_it",
                stickyAttributes: {
                    allowClose: !1,
                    allowReopen: !1,
                    bgOpacity: 0,
                    compact: !1,
                    isButtonOutside: !1,
                    isHideForever: !1,
                    isTop: !1
                }
            }, {
                activateConditionConfig: {
                    type: "none"
                },
                attributes: {
                    adblock: !1,
                    dynamic: !1,
                    headerbidding: !0,
                    interscroller: !1,
                    interstitial: !1,
                    miniscroller: !1,
                    refresh: 30,
                    scrollToStick: !1,
                    sticky: !1
                },
                bids: [{
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "amx",
                    params: {
                        tagId: "cHVibGlmdC5jb20"
                    }
                }, {
                    bidSizes: [],
                    bidder: "appnexus",
                    params: {
                        placementId: "25456215"
                    }
                }, {
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "connectad",
                    params: {
                        networkId: 10047,
                        siteId: 1052615
                    }
                }, {
                    bidSizes: ["320x50"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22749982663_1486319_320x50",
                        zoneId: 1486319
                    }
                }, {
                    bidSizes: ["320x100"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22749982663_1486320_320x100",
                        zoneId: 1486320
                    }
                }, {
                    bidSizes: ["728x90"],
                    bidder: "criteo",
                    params: {
                        publisherSubId: "22749982663_1486324_728x90",
                        zoneId: 1486324
                    }
                }, {
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "openx",
                    params: {
                        delDomain: "publift-d.openx.net",
                        unit: "545690757"
                    }
                }, {
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "pubmatic",
                    params: {
                        adSlot: "71161633/MUSIC_musicca/top_leaderboard_ko",
                        publisherId: "156762"
                    }
                }, {
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "rubicon",
                    params: {
                        accountId: "20884",
                        siteId: "388260",
                        zoneId: "2434972"
                    }
                }, {
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "smartadserver",
                    params: {
                        domain: "https://prg-apac.smartadserver.com",
                        formatId: 116284,
                        pageId: 1720333,
                        siteId: 566977
                    }
                }, {
                    bidSizes: ["320x100", "320x50", "468x60", "728x90"],
                    bidder: "triplelift",
                    params: {
                        inventoryCode: "Musicca_StandardDisplay"
                    }
                }],
                id: "22749982663",
                sizeMapping: {
                    l: [],
                    m: [
                        [468, 60],
                        [728, 90]
                    ],
                    s: [
                        [320, 50],
                        [320, 100],
                        [468, 60]
                    ],
                    xl: [],
                    xs: [
                        [320, 50],
                        [320, 100]
                    ]
                },
                sizes: [
                    [320, 50],
                    [320, 100],
                    [468, 60],
                    [728, 90]
                ],
                slot: "/71161633,22631137699/MUSIC_musicca/top_leaderboard_ko"
            }],
            fuse_tenant: "publift",
            fuse_uuid: "583b39b9-afba-5d88-96db-ad93c6f3ccaa",
            sco: {
                asi: "publift.com",
                sellerId: "01F60V4ZS24GYTZEMRAV81KV2E"
            },
            supported_sizes: {
                l: [],
                m: [
                    [160, 600],
                    [300, 250],
                    [468, 60],
                    [728, 90]
                ],
                s: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100],
                    [468, 60]
                ],
                xl: [],
                xs: [
                    [300, 50],
                    [300, 100],
                    [320, 50],
                    [320, 100]
                ]
            },
            tenantId: "DGKSPXNV53",
            fuse_flavour: "default",
            publication_metadata: {
                publication_id: 1,
                generation_version: "4.86254.0",
                generation_time: "2023-03-10T01:37:18.375Z",
                revision: "v4"
            },
            fuse_prebid_hash: "d0a3f503dd6df5689b4d3cfe5cd992cf"
        },
        Dt = new(function() {
            function t(e) {
                l(this, t), this.myWindow = e
            }
            return g(t, [{
                key: "isDevelopmentMode",
                value: function() {
                    return 0 == Pt.publication_metadata.publication_id
                }
            }, {
                key: "getAccountSettings",
                value: function() {
                    var e = this.myWindow.field;
                    return this.isDevelopmentMode() && e.fuseConfig ? e.fuseConfig : Pt
                }
            }, {
                key: "getBreakpoints",
                value: function() {
                    var e = {},
                        t = this.getAccountSettings();
                    return t.fuse_breakpoints.xl && (e.xl = t.fuse_breakpoints.xl), t.fuse_breakpoints.l && (e.l = t.fuse_breakpoints.l), e.m = t.fuse_breakpoints.m, e.s = t.fuse_breakpoints.s, e.xs = t.fuse_breakpoints.xs, e
                }
            }, {
                key: "isUseBrowserOuterwidth",
                value: function() {
                    var e;
                    return null != (e = null != (e = zt("fuseUseBrowserOuterwidth")) ? e : this.getAccountSettings().fuse_settings.isUseBrowserOuterwidth) && e
                }
            }]), t
        }())(new pt(function() {
            return f.getBrowserWindowObject()
        }));

    function Ot(t, i, n) {
        function r() {
            var e = Date.now() - d;
            e < t && 0 <= e ? o = setTimeout(r, t - e) : (o = null, n || (c = i.apply(a, s), o) || (a = s = null))
        }
        var o, s, a, d, c;
        return function() {
            a = this, s = arguments, d = Date.now();
            var e = n && !o;
            return o = o || setTimeout(r, t), e && (c = i.apply(a, s), a = s = null), c
        }
    }
    var Mt = function() {
        function o(e, t, i, n, r) {
            l(this, o), this.logger = e, this.browserWindow = t, this.breakpoints = i, this.onWindowResized = n, this.options = r, this.initBpWatch(), this.logger.debug("[VIEWPORT]: Initialised at breakpoint ".concat(this.getCurrentBreakpoint().name))
        }
        return g(o, [{
            key: "getCurrentBreakpoint",
            value: function() {
                return e = this.breakpoints, i = this.getViewportStatus().width, n = null, Object.entries(e).forEach(function(e) {
                    var e = V(e, 2),
                        t = e[0],
                        e = e[1];
                    e <= i && (!n || e > n.size) && (n = {
                        size: e,
                        name: t
                    })
                }), n;
                var e, i, n
            }
        }, {
            key: "breakpointSupplier",
            value: function() {
                return this.getCurrentBreakpoint.bind(this)
            }
        }, {
            key: "isNotXsBreakpoint",
            value: function() {
                return "xs" !== this.getCurrentBreakpoint().name
            }
        }, {
            key: "getViewportStatus",
            value: function() {
                var e = this.browserWindow;
                return {
                    width: this.options.isUseOuterwidth.field ? e.outerWidth : e.innerWidth,
                    innerHeight: e.innerHeight,
                    outerHeight: e.outerHeight,
                    hidden: e.document.hidden,
                    offset: {
                        x: e.scrollX,
                        y: e.scrollY
                    }
                }
            }
        }, {
            key: "initBpWatch",
            value: function() {
                var n = this,
                    r = this.getCurrentBreakpoint().size;
                this.browserWindow.addEventListener("resize", Ot(500, function() {
                    var e = n.getCurrentBreakpoint(),
                        t = e.size,
                        e = e.name,
                        i = r !== t;
                    return r = t, n.onWindowResized.emit({
                        crossedBp: i,
                        name: e,
                        currentFrom: t
                    })
                }))
            }
        }]), o
    }();
    var u, o = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getViewportInfo",
                value: function() {
                    return this.viewportInfo || (this.viewportInfo = new Mt(f.getLogger(), f.getBrowserWindowObject(), Dt.getBreakpoints(), m.onWindowResized, {
                        isUseOuterwidth: new pt(function() {
                            return Dt.isUseBrowserOuterwidth()
                        })
                    })), this.viewportInfo
                }
            }]), e
        }()),
        v = Dt.getAccountSettings(),
        Lt = !1,
        r = v.fuse_settings,
        Bt = f.getLogger(),
        S = new(function() {
            function i(e, t) {
                var o = this;
                l(this, i), this.breakpoints = e, this.viewportInfo = t, this.fuseSettings = v.fuse_settings, this.cleaned_fuse_slots = !1, this.v2Compatibility = {
                    disableWidgetsRenderer: !1
                }, this.isUamEnabled = function() {
                    return !o.isYandexEnabled() && r.amazonUam && r.amazonUam.enabled
                }, this.isResponsiveEnabled = function() {
                    return r.responsive
                }, this.getInskinWidth = function() {
                    return r.inskinWidth
                }, this.getSupportedSizes = function(e) {
                    return v.supported_sizes[e]
                }, this.getCurrentBreakpoint = function(e) {
                    var i, n = o.breakpoints,
                        r = null != e ? e : o.viewportInfo.getViewportStatus().width;
                    return Object.keys(n).forEach(function(e) {
                        var t = n[e];
                        t <= r && (!i || t > i.size) && (i = {
                            size: t,
                            name: e
                        })
                    }), i
                }
            }
            return g(i, [{
                key: "getUamSettings",
                value: function() {
                    return r.amazonUam
                }
            }, {
                key: "isPrebidEnabled",
                value: function() {
                    return !this.isYandexEnabled() && !Lt && r.prebid && r.prebid.enabled
                }
            }, {
                key: "isPrebidServer",
                value: function() {
                    return 0 < this.getPrebidServerBidders().length && !zt("fuseDisablePrebidServer")
                }
            }, {
                key: "getPrebidServerBidders",
                value: function() {
                    return this.fuseSettings.prebidServerBidderCodes || []
                }
            }, {
                key: "getPrebidSettings",
                value: function() {
                    return r.prebid
                }
            }, {
                key: "getFuseUUID",
                value: function() {
                    return v.fuse_uuid
                }
            }, {
                key: "getSco",
                value: function() {
                    return v.sco
                }
            }, {
                key: "getFuseId",
                value: function() {
                    return v.fuse_id
                }
            }, {
                key: "getUseTelemetry",
                value: function() {
                    return "disabled" !== r.telemetry
                }
            }, {
                key: "getUseWebVitalsTelemetry",
                value: function() {
                    return Boolean(r.useWebVitalsTelemetry)
                }
            }, {
                key: "getUseWebVitalsRepeatCLSTelemetry",
                value: function() {
                    return Boolean(r.useWebVitalsRepeatCLSTelemetry)
                }
            }, {
                key: "getUseWebVitalsAllLCPTelemetry",
                value: function() {
                    return Boolean(r.useWebVitalsAllLCPTelemetry)
                }
            }, {
                key: "getConfiantId",
                value: function() {
                    return r.confiantId
                }
            }, {
                key: "getLowDwellPages",
                value: function() {
                    return r.lowDwellPages || []
                }
            }, {
                key: "getMaxViewportsFirstAuction",
                value: function() {
                    return r.maxViewportsFirstAuction
                }
            }, {
                key: "getCmpProvider",
                value: function() {
                    return this.isCmpRequired() ? r.cmpProvider : {
                        partner: "none"
                    }
                }
            }, {
                key: "isCmpRequired",
                value: function() {
                    return !this.isYandexEnabled() && "none" !== r.cmp
                }
            }, {
                key: "getCmpMode",
                value: function() {
                    return this.isYandexEnabled() || !r.cmp ? "disabled" : r.strict_cmp ? "strict" : "enabled"
                }
            }, {
                key: "getGdprTimeoutMillis",
                value: function() {
                    var e;
                    return null != (e = t("fuseTagGdprTimeoutMs")) ? e : 2e4
                }
            }, {
                key: "getUspTimeoutMillis",
                value: function() {
                    return 100
                }
            }, {
                key: "getTagStartCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fuseTagStartCutoffMs")) ? e : r.tagStartCutoffMs
                }
            }, {
                key: "getPrebidDownloadCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fusePrebidDownloadCutoffMs")) ? e : r.prebidDownloadCutoffMs
                }
            }, {
                key: "getPrebidTagStartCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fusePrebidTagStartCutoffMs")) ? e : r.prebidTagStartCutoffMs
                }
            }, {
                key: "getUamTagStartCutoffMs",
                value: function() {
                    var e;
                    return null != (e = t("fuseUamTagStartCutoffMs")) ? e : r.uamTagStartCutoffMs
                }
            }, {
                key: "getAuctionMaxSlots",
                value: function() {
                    var e;
                    return null != (e = null != (e = t("fuseAuctionMaxSlots")) ? e : r.auctionMaxSlots) ? e : 99
                }
            }, {
                key: "isIdentityEnabled",
                value: function() {
                    var e;
                    return null != (e = null == (e = r.identity) ? void 0 : e.enabled) && e
                }
            }, {
                key: "getIdentitySettings",
                value: function() {
                    return r.identity
                }
            }, {
                key: "isId5Enabled",
                value: function() {
                    var e;
                    return null != (e = null == (e = r.id5) ? void 0 : e.enabled) && e
                }
            }, {
                key: "isAutoRegistrationEnabled",
                value: function() {
                    return Boolean(r.enableAutoRegistration)
                }
            }, {
                key: "getId5Settings",
                value: function() {
                    return r.id5
                }
            }, {
                key: "getVideoSettings",
                value: function() {
                    var e;
                    return null != (e = r.videoSettings) ? e : {
                        enabled: !1
                    }
                }
            }, {
                key: "isConfiantEnabled",
                value: function() {
                    return !this.isYandexEnabled() && r.confiant
                }
            }, {
                key: "isPubstackEnabled",
                value: function() {
                    return !!r.pubstackId
                }
            }, {
                key: "getPubstackId",
                value: function() {
                    return r.pubstackId
                }
            }, {
                key: "isGptPreAuctionEnabled",
                value: function() {
                    return Boolean(r.useGptPreAuctionModule)
                }
            }, {
                key: "isBlockthroughEnabled",
                value: function() {
                    return !this.isYandexEnabled() && r.blockthrough
                }
            }, {
                key: "isWidgetRendererEnabled",
                value: function() {
                    return !this.v2Compatibility.disableWidgetsRenderer && !r.disableWidgetsRenderer
                }
            }, {
                key: "setDisableWidgetRenderer",
                value: function() {
                    this.v2Compatibility.disableWidgetsRenderer = !0
                }
            }, {
                key: "isStrictCmp",
                value: function() {
                    return Boolean(r.strict_cmp)
                }
            }, {
                key: "isRequestGdprPersonalisation",
                value: function() {
                    return !r.disableGdprPersonalisation
                }
            }, {
                key: "isIframeCmp",
                value: function() {
                    return "iframe" === r.cmp
                }
            }, {
                key: "setForceDisablePrebid",
                value: function() {
                    Bt.log("[CONFIG]: Forcefully disabling prebid"), Lt = !0
                }
            }, {
                key: "isMiniScrollersEnabled",
                value: function() {
                    return Boolean(this.fuseSettings.enableMiniScrollers)
                }
            }, {
                key: "getTopStickyHeaderSelector",
                value: function() {
                    var e;
                    return (null == (e = null == (e = this.getFuseSlots().filter(function(e) {
                        var t;
                        return (null == (t = e.attributes) ? void 0 : t.miniscroller) && (null == (t = e.miniscrollerAttributes) ? void 0 : t.topStickyHeaderSelector)
                    })[0]) ? void 0 : e.miniscrollerAttributes) ? void 0 : e.topStickyHeaderSelector) || bt("fuseTopStickyHeaderSelector") || r.topStickyHeaderSelector
                }
            }, {
                key: "getSlotRefWithoutMcm",
                value: function(e) {
                    var t = /^(\/\d*),(\d*)(\/.*)$/i;
                    if (!1 === t.test(e)) return Bt.debug("[SETTINGS]: regExGamAdUnitRef.test(slotRef): ".concat(JSON.stringify(t.test(e)), ", slotRef: ").concat(e)), e;
                    Bt.debug("[SETTINGS]: regExGamAdUnitRef.test(slotRef): ".concat(JSON.stringify(t.test(e)), ", slotRef: ").concat(e));
                    t = t.exec(e);
                    return Bt.debug("[SETTINGS]: slotRef: ".concat(e, ", matches: ").concat(JSON.stringify(t))), "".concat(t[1]).concat(t[3])
                }
            }, {
                key: "cleanSlotBasedOnMcmMode",
                value: function(e) {
                    var t = this.getSlotRefWithoutMcm(e.slot);
                    return Bt.debug("[SETTINGS]: before: with MCM: ".concat(e.slot, ", after: without MCM: ").concat(t)), Object.assign(Object.assign({}, e), {
                        slot: t
                    })
                }
            }, {
                key: "cleanSlotSizeMapping",
                value: function(e) {
                    var t, i = {};
                    return null != (t = e.sizeMapping) && t.xl && (i.xl = e.sizeMapping.xl), null != (t = e.sizeMapping) && t.l && (i.l = e.sizeMapping.l), i.m = null == (t = e.sizeMapping) ? void 0 : t.m, i.s = null == (t = e.sizeMapping) ? void 0 : t.s, i.xs = null == (t = e.sizeMapping) ? void 0 : t.xs, Object.assign(Object.assign({}, e), {
                        sizeMapping: i
                    })
                }
            }, {
                key: "getFuseSlots",
                value: function() {
                    var n, r = this;
                    return this.cleaned_fuse_slots || (n = zt("fuseMcmOff"), v.fuse_slots = v.fuse_slots.map(function(e) {
                        n && (Bt.debug("[SETTINGS]: will".concat(n ? "" : " NOT", " remove MCM child reference from the slot ref - ").concat(e.slot)), e = r.cleanSlotBasedOnMcmMode(e));
                        var t = e.activateConditionConfig;
                        switch (t.type) {
                            case "none":
                                e.activateCondition = void 0;
                                break;
                            case "lazy":
                                var i = r.getCurrentBreakpoint().name,
                                    i = t.scrollDistance[i];
                                h(i) || !1 === i ? e.activateCondition = void 0 : e.activateCondition = {
                                    type: "condition",
                                    name: yt,
                                    params: t.scrollDistance
                                };
                                break;
                            case "manual":
                                e.activateCondition = {
                                    type: "condition",
                                    name: Ct
                                };
                                break;
                            case "custom":
                                e.activateCondition = t.config;
                                break;
                            default:
                                Y(t)
                        }
                        return e = r.applyOverrides(e), r.cleanSlotSizeMapping(e)
                    }), this.cleaned_fuse_slots = !0), v.fuse_slots
                }
            }, {
                key: "applyOverrides",
                value: function(e) {
                    var t;
                    return Object.assign(Object.assign({}, e), {
                        attributes: Object.assign(Object.assign({}, e.attributes), {
                            interscroller: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.interscrollersParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.interscroller),
                            sticky: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.stickiesParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.sticky),
                            dynamic: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.dynamicParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.dynamic) || (null == (t = this.overrideParams) ? void 0 : t.dynamicParams[e.id]),
                            scrollToStick: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.scrollToStickParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.scrollToStick),
                            miniscroller: void 0 !== (null == (t = this.overrideParams) ? void 0 : t.miniscrollersParams[e.id]) || (null == (t = e.attributes) ? void 0 : t.miniscroller)
                        }),
                        interscrollerAttributes: Object.assign(Object.assign({}, e.interscrollerAttributes), null == (t = this.overrideParams) ? void 0 : t.interscrollersParams[e.id]),
                        stickyAttributes: Object.assign(Object.assign({}, e.stickyAttributes), null == (t = this.overrideParams) ? void 0 : t.stickiesParams[e.id]),
                        dynamicAttributes: Object.assign(Object.assign({}, e.dynamicAttributes), null == (t = this.overrideParams) ? void 0 : t.dynamicParams[e.id]),
                        miniscrollerAttributes: Object.assign(Object.assign({}, e.miniscrollerAttributes), null == (t = this.overrideParams) ? void 0 : t.miniscrollersParams[e.id])
                    })
                }
            }, {
                key: "getSlotTemplate",
                value: function(t) {
                    return this.getFuseSlots().filter(function(e) {
                        return e.id == t
                    })[0]
                }
            }, {
                key: "isScanDOMOnPageLoad",
                value: function() {
                    var e = r.disableAutoLoadSlots;
                    return h(e) || !e
                }
            }, {
                key: "isHeaderBiddingSlot",
                value: function(e) {
                    return !e.attributes.interstitial && e.attributes.headerbidding && 0 < e.bids.length
                }
            }, {
                key: "isSlotWidget",
                value: function(e) {
                    var t;
                    return (null == (t = e.attributes) ? void 0 : t.interscroller) || (null == (t = e.attributes) ? void 0 : t.sticky) || (null == (t = e.attributes) ? void 0 : t.dynamic) || null
                }
            }, {
                key: "maxSlotHeightForBreakpoint",
                value: function(e, t) {
                    return null == (e = e.sizeMapping[t]) ? void 0 : e.reduce(function(e, t) {
                        return t[1] > e ? Number(t[1]) : e
                    }, 0)
                }
            }, {
                key: "getPrebidOptions",
                value: function(e) {
                    if (this.isPrebidEnabled() && r.prebid.breakpoint_options) {
                        var e = r.prebid.breakpoint_options[e];
                        if (e) return {
                            enabled: e.enabled,
                            sendAllBids: !0 === r.prebid.sendAllBids,
                            timeout: null != (e = null != (e = e.timeout) ? e : r.prebid.defaultTimeout) ? e : 1e3
                        }
                    }
                    return {
                        enabled: this.isPrebidEnabled(),
                        sendAllBids: !0 === r.prebid.sendAllBids,
                        timeout: null != (e = r.prebid.defaultTimeout) ? e : 1e3
                    }
                }
            }, {
                key: "isPrebidEnabledAtBP",
                value: function(e) {
                    return this.isPrebidEnabled() && this.getPrebidOptions(e).enabled
                }
            }, {
                key: "isUamEnabledAtBP",
                value: function(e) {
                    return this.isUamEnabled() && this.getPrebidOptions(e).enabled
                }
            }, {
                key: "getHbTimeout",
                value: function(e) {
                    return this.getPrebidOptions(e).timeout
                }
            }, {
                key: "getPrebidMediaTypes",
                value: function() {
                    return r.prebidMediaTypes || ["banner"]
                }
            }, {
                key: "isPrebidBannerEnabled",
                value: function() {
                    return this.getPrebidMediaTypes().includes("banner")
                }
            }, {
                key: "isPrebidVideoEnabled",
                value: function() {
                    return this.getPrebidMediaTypes().includes("video")
                }
            }, {
                key: "isPrebidNativeEnabled",
                value: function() {
                    return this.getPrebidMediaTypes().includes("native")
                }
            }, {
                key: "isSlotEnabledForBreakpoint",
                value: function(e, t) {
                    var e = this.getSlotTemplate(e);
                    return !!e && 0 < (null != (e = null == (e = e.sizeMapping) ? void 0 : e[t]) ? e : []).length
                }
            }, {
                key: "getPublicationId",
                value: function() {
                    return v.publication_metadata.publication_id
                }
            }, {
                key: "getFuseCDN",
                value: function() {
                    return v.fuse_cdn
                }
            }, {
                key: "getPrebidHash",
                value: function() {
                    return v.fuse_prebid_hash
                }
            }, {
                key: "getBlockedUrls",
                value: function() {
                    return v.fuse_blocked_url || []
                }
            }, {
                key: "getFuseIndustry",
                value: function() {
                    return v.fuse_industry
                }
            }, {
                key: "getFuseSettings",
                value: function() {
                    return this.fuseSettings
                }
            }, {
                key: "getEdgeHtmlMaxAdsRefreshLimit",
                value: function() {
                    return this.fuseSettings.edgeHtmlMaxAdsRefreshLimit || 60
                }
            }, {
                key: "getDefaultRefreshInterval",
                value: function() {
                    return this.fuseSettings.refresh
                }
            }, {
                key: "getAccountSettings",
                value: function() {
                    return v
                }
            }, {
                key: "getV2CompatOverrides",
                value: function() {
                    return this.v2Compatibility
                }
            }, {
                key: "isTestCreatives",
                value: function() {
                    return zt("fuseTestCreatives") || !1
                }
            }, {
                key: "getSlotTestUrls",
                value: function() {
                    return r.fuse_test_urls || []
                }
            }, {
                key: "getYandexBlockId",
                value: function() {
                    return bt("fuseYandexBlockId") || r.yandexBlockId
                }
            }, {
                key: "isYandexEnabled",
                value: function() {
                    return r.yandex || zt("fuseYandex") || "" !== bt("fuseYandexBlockId")
                }
            }, {
                key: "isPubxaiEnabled",
                value: function() {
                    return r.usePubxai || !1
                }
            }, {
                key: "isArctagEnabled",
                value: function() {
                    return r.useArctag || !1
                }
            }, {
                key: "isBidCacheEnabled",
                value: function() {
                    return r.useBidCache || !1
                }
            }]), i
        }())(Dt.getBreakpoints(), o.getViewportInfo()),
        y = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getDeviceInfo",
                value: function() {
                    return this.deviceInfo || (this.deviceInfo = new ae(f.getBrowserWindowObject())), this.deviceInfo
                }
            }, {
                key: "getTelemetry",
                value: function() {
                    var i = this;
                    return this.telemetry || (this.telemetry = new ht(this.getComponentStatusStore(), this.getDeviceInfo(), f.getLogger(), f.getBrowserWindowObject(), f.getSessionId(), this.getReporter(), function(e) {
                        var t = f.getBrowserWindowObject();
                        t.fetch ? t.fetch(e, {
                            credentials: "omit",
                            mode: "cors",
                            keepalive: !0
                        }).catch(function(e) {
                            var t = String(e).toLowerCase();
                            if (t.includes("TypeError: NetworkError when attempting to fetch resource".toLowerCase())) f.getLogger().warn("Unable to fire telemetry request, possibly unable to outlive environment.");
                            else {
                                if (!t.includes("TypeError: Load failed".toLowerCase()) || i.getDeviceInfo().getBrowser() !== d.Safari) throw e;
                                f.getLogger().warn("Unable to fire telemetry request, unknown network error.")
                            }
                        }) : ((t = new XMLHttpRequest).open("GET", e, !0), t.send())
                    }, S, {
                        onSlotRequested: m.onSlotRequested
                    })), this.telemetry
                }
            }, {
                key: "getReporter",
                value: function() {
                    var e;
                    return this.reporter || (e = f.getFuseDob(), this.reporter = new de(e, {
                        onSlotLoaded: m.onSlotLoaded,
                        onSlotResponse: m.onSlotResponse,
                        onImpressionViewable: m.onImpressionViewable
                    })), this.reporter
                }
            }, {
                key: "getComponentStatusStore",
                value: function() {
                    return this.pluginStateStore || (this.pluginStateStore = new fe(m.onComponentInitEvent, f.getLogger(), this.getReporter())), this.pluginStateStore
                }
            }]), e
        }()),
        Nt = f.getLogger(),
        Ut = [5068036699, 5101751880, 5189144814, 5144578315, 5221077018, 5104488413],
        Gt = function(e) {
            e = e.slot.getResponseInformation();
            return Boolean((null == e ? void 0 : e.advertiserId) && Ut.includes(e.advertiserId))
        },
        Ft = function(e, t, i) {
            e.debug("".concat(Gt(i) ? "[IN2W]" : "", "[EVENT][").concat(i.slot.getSlotElementId(), "]: ").concat(t, " event details: ").concat(JSON.stringify(i)))
        },
        Wt = function(t, i) {
            return function(e) {
                if (Ft(Nt, t, e), !Gt(e)) return i(e)
            }
        },
        jt = {
            name: "Google Publisher Tag",
            url: "//securepubads.g.doubleclick.net/tag/js/",
            file: "gpt.js"
        },
        Vt = "is_refresh",
        Ht = "adunit_prev_count",
        qt = "slot_prev_count",
        Zt = {},
        Qt = {},
        Jt = !1,
        x = f.getLogger(),
        I = f.getBrowserWindowObject(),
        Yt = f.getWindowLocation(),
        k = y.getReporter(),
        Kt = y.getComponentStatusStore(),
        Xt = function() {
            var e = Yt.host;
            return e.substring(e.length - 40, e.length)
        },
        $t = function() {
            var e = Yt.pathname;
            return e.substring(e.length - 40, e.length)
        },
        ei = function() {
            var e = Yt.search;
            return e.substring(e.length - 40, e.length)
        },
        ti = function() {
            for (var e = [], t = Yt.pathname.split("/"), i = 0; i < t.length; i += 1) t[i].length && -1 === t[i].indexOf(".") && e.push(t[i]);
            return e
        },
        ii = function(e) {
            var t = Yt.host,
                i = Yt.pathname,
                n = "false";
            return e.forEach(function(e) {
                -1 < e.indexOf(t + i) && (n = "true")
            }), n
        };

    function ni(e) {
        return "function" == typeof e.getVersion ? "v".concat(e.getVersion()) : "unknown version"
    }
    var ri = function(e) {
            var t = oi();
            I.googletag && I.googletag._loadStarted_ ? x.debug("[INIT]: GPT ".concat(ni(t), " is already on the page, skip loading another copy")) : ne(jt, function() {
                x.debug("[INIT]: GPT ".concat(I.googletag && I.googletag._loadStarted_ ? "".concat(ni(t), " is loaded") : "not loaded")), e()
            })
        },
        oi = function() {
            return I.googletag ? I.googletag.cmd || (x.info("[GPT]: Initialised window.googletag.cmd as it was missing"), I.googletag.cmd = []) : I.googletag = {
                cmd: []
            }, u = I.googletag, I.googletag
        },
        C = function(e) {
            return oi().cmd.push(e)
        };
    var si = function(e) {
            e.forEach(function(e) {
                var t = e[1],
                    i = t.getSlotElementId(),
                    e = e[0].slotTemplate.id,
                    i = Zt[i] || 0,
                    e = Qt[e] || 0;
                t.setTargeting(Vt, (0 < i).toString()), t.setTargeting(qt, i.toString()), t.setTargeting(Ht, e.toString())
            })
        },
        ai = function(e) {
            e.forEach(function(e) {
                var t = e[1].getSlotElementId(),
                    e = e[0].slotTemplate.id;
                Qt[e] = (Qt[e] || 0) + 1, Zt[t] = (Zt[t] || 0) + 1
            })
        };

    function di(n, a) {
        C(function() {
            var t, s = [],
                i = (n.forEach(function(e) {
                    t = [e.slotDivId], o = a;
                    var t, i, n, r, o = (u ? t ? ((i = (r = u.pubads().getSlots()).filter(function(e) {
                        return 0 <= t.indexOf(e.getSlotElementId())
                    })).length !== t.length && (n = r.map(function(e) {
                        return e.getSlotElementId()
                    }), r = t.filter(function(e) {
                        return -1 === n.indexOf(e)
                    }), x.warn("[AUCTION][".concat(o, "]: Could not find a GPT slot for all fuse slots.\n      Missing Slots=").concat(JSON.stringify(r), ",\n      All GPT Slots: ").concat(JSON.stringify(n)))), i) : (x.error("Called getGPTSlot() without a fuseSlotCode"), []) : (x.error("Called getGPTSlot(".concat(t, ") but googletag not defined")), []))[0];
                    o ? s.push([e, o]) : x.warn("[AUCTION][".concat(a, "]: Could not find GPT Slot corresponding to ").concat(e.slotDivId))
                }), s.map(function(e) {
                    e = V(e, 2);
                    return e[0], e[1]
                }));

            function e() {
                si(s);
                var e = JSON.stringify(i.map(function(e) {
                    return e.getSlotElementId()
                }));
                k.addAdEvent("gpt_pubads_refresh_".concat(e), {
                    requestId: a
                }), Jt || (k.reportFirstGptRequest(), k.setStateStatus("first_gpt_request"), fi(be(Kt.state.cmp))), li(), Jt = !0, x.debug("[AUCTION][".concat(a, "]: Calling googletag.pubads().refresh(").concat(e, ")")), u.pubads().refresh(i), ai(s)
            }
            i && 0 !== i.length ? !0 === ee.isEdgeBrowser(I) ? (x.debug("[GC] will trigger GC for iFrames in Edge browser"), t = I.document.querySelectorAll("div[data-fuse] iframe"), new Promise(function(e) {
                setTimeout(function() {
                    try {
                        e()
                    } catch (e) {}
                }, 5), t.forEach(function(e) {
                    e.addEventListener("load", function() {
                        try {
                            for (; this.contentWindow.lastChild;) this.contentWindow.removeChild(this.contentWindow.lastChild);
                            x.debug("[GC]: cleaned iFrame contentWindow")
                        } catch (e) {
                            x.error("[GC]: error in cleaning iFrame contentWindow => ".concat(e))
                        }
                    }, {
                        once: !0
                    })
                }), t.forEach(function(e) {
                    e.setAttribute("src", "about:blank")
                }), e()
            }).then(function() {
                try {
                    CollectGarbage()
                } catch (e) {
                    x.error("[GC]: error in CollectGarbage => ".concat(e))
                }
                e()
            }).catch(function(e) {
                x.error("[GC]: error in purgeIframes => ".concat(e))
            })) : e() : x.info("[AUCTION][".concat(a, "]: Cancelled adserver request because no matching GPT slots found"))
        })
    }
    var w = function(e, t) {
            x.debug("[GPT]: Setting page targeting for [key: ".concat(e, ", value: ").concat(t, "]")), u.pubads().setTargeting(e, t)
        },
        ci = function(e, t) {
            C(function() {
                return w(e, t)
            })
        };

    function ui(e) {
        switch (e._tag) {
            case "ready":
                return ce(e.loadFinish);
            case "deferred":
            case "disabled":
                return "disabled";
            case "cancelled":
                return e._tag;
            case "pending":
            case "loading":
                return "not_ready";
            default:
                Y(e)
        }
    }
    var li = function() {
            x.debug("[GPT]: Applying page targeting"), w("fuse_profanity", ii(S.getBlockedUrls())), w("fuse_site", Xt()), w("fuse_path", $t()), w("fuse_query", ei()), w("fuse_category", ti());

            function i(e, t) {
                w(e, Jt ? "refresh" : t)
            }

            function e(e, t) {
                t && i(e, ce(t))
            }
            var t = S.getFuseIndustry(),
                t = (t && w("fuse_industry", t), w("testmode", "".concat(S.isTestCreatives())), S.getInskinWidth()),
                t = "".concat(p(t) && I.screen.width >= t),
                t = (w("inskin_yes", t), w("fuse_uuid", S.getFuseUUID()), w("fuse_publication_id", S.getPublicationId().toString()), i("GPT_READY_MS", ui(Kt.state.gpt)), i("PREBID_READY_MS", ui(Kt.state.prebid)), i("UAM_READY_MS", ui(Kt.state.uam)), i("CMP_DETERMINED_MS", ui(Kt.state.cmp)), i("CMP_GDPR_CACHED", String(k.cmpGdprCached)), e("FUSE_LOADED_MS", k.tagLoadedMs), k.firstGptRequestMs && e("GPT_AUCTION_START_MS", k.firstGptRequestMs), k.cmpLoadFinishMs && e("CMP_LOAD_FINISH_MS", k.cmpLoadFinishMs), k.cmpGdprElapsedMs && e("CMP_GDPR_ELAPSED_MS", k.cmpGdprElapsedMs), k.firstZoneMs && e("FIRST_ZONE_MS", k.firstZoneMs), k.hbAuctionStartMs && e("HB_AUCTION_START_MS", k.hbAuctionStartMs), me(Kt.state.cmp));
            w("CMP_JURISDICTION", t), w("CMP_ALLOW_PERSONAL", "".concat(be(Kt.state.cmp)))
        },
        gi = function() {
            C(function() {
                li()
            })
        },
        hi = function() {
            u.pubads().disableInitialLoad(), u.pubads().collapseEmptyDivs(!0), u.pubads().setCentering(!0), u.pubads().enableSingleRequest(), u.pubads().addEventListener("slotRequested", Wt("requested", function(e) {
                m.onSlotRequested.emit(e)
            })), u.pubads().addEventListener("slotResponseReceived", Wt("response", function(e) {
                m.onSlotResponse.emit(e)
            })), u.pubads().addEventListener("slotOnload", Wt("load", function(e) {
                m.onSlotLoaded.emit(e)
            })), u.pubads().addEventListener("slotRenderEnded", Wt("render", function(e) {
                m.onSlotRender.emit(e)
            })), u.pubads().addEventListener("impressionViewable", Wt("viewable", function(e) {
                m.onImpressionViewable.emit(e)
            })), li()
        };
    var pi = function(e) {
            C(function() {
                u.pubads().addEventListener("slotRenderEnded", e)
            })
        },
        fi = function(e) {
            e = {
                nonPersonalizedAds: !e
            };
            x.info("[GPT]: googletag.pubads().setPrivacySettings(".concat(JSON.stringify(e), ")")), I.googletag.pubads().setPrivacySettings(e)
        },
        bi = function(e) {
            u.destroySlots(e)
        },
        mi = f.getLogger(),
        vi = y.getReporter(),
        Si = {
            name: "Blockthrough",
            url: "//btloader.com/",
            file: "tag?o=5708166709903360&upapi=true"
        };
    var yi = {
            enableIfApplicable: function(e) {
                S.isBlockthroughEnabled() ? o.getViewportInfo().isNotXsBreakpoint() ? (vi.setStateStatus("blockthrough_load_start"), ne(Si, function() {
                    mi.log("[BLOCKTHROUGH]: Tag loaded"), vi.setStateStatus("blockthrough_load_finish"), e && e()
                })) : mi.debug("[INIT]: Skip loading blockthrough because page on XS breakpoint") : mi.debug("[INIT]: Skip loading blockthrough because it is not enabled")
            }
        },
        xi = "ZVeqITFg3t0RVj7Gh41kEbdx9DA",
        Ii = f.getLogger(),
        ki = y.getReporter(),
        Ci = f.getBrowserWindowObject(),
        wi = function(e) {
            return {
                name: "Confiant",
                url: "//cdn.confiant-integrations.net/".concat(e, "/gpt_and_prebid/"),
                file: "config.js"
            }
        };
    var Ei = {
            enable: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : xi,
                    t = 1 < arguments.length ? arguments[1] : void 0,
                    i = (ki.setStateStatus("confiant_load_start"), Ci.confiant || {}),
                    n = (i[e] = i[e] || {
                        clientSettings: {}
                    }, i[e].clientSettings || (i[e].clientSettings = {}));
                n.callback = function(e, t, i, n, r, o) {
                    Ii.log("[CONFIANT]: Has blocked the ad: ", e, t, i, n, r, JSON.stringify(o))
                }, n.prebidExcludeBidders = [], n.prebidNameSpace = "fusePbjs", n.on_prebid_error = function(e) {
                    Ii.log("[CONFIANT]: failed to scan an ad", e)
                }, n.onRendered = function(e) {
                    Ii.log("[CONFIANT]: Rendered the ad", e)
                }, Ci.confiant = i, ne(wi(e), function() {
                    Ii.log("[CONFIANT]: Script loaded"), ki.setStateStatus("confiant_load_finish"), t && t()
                })
            }
        },
        _i = f.getLogger(),
        Ti = y.getReporter(),
        Ai = function(e) {
            return {
                name: "Pubstack",
                url: "//boot.pbstck.com/v1/tag/",
                file: e
            }
        };
    var Ri, zi = {
            enable: function(e, t) {
                Ti.setStateStatus("pubstack_load_start"), ne(Ai(e), function() {
                    _i.log("[PUBSTACK]: Script loaded"), Ti.setStateStatus("pubstack_load_finish"), t && t()
                })
            }
        },
        Pi = function() {
            function t(e) {
                l(this, t), this.partnerId = e
            }
            return g(t, [{
                key: "configPrebid",
                value: function(e) {
                    var t = e.userSync;
                    return Object.assign(Object.assign({}, e), {
                        userSync: Object.assign(Object.assign({}, t), {
                            userIds: [].concat(s(t.userIds || []), [{
                                name: "id5Id",
                                params: {
                                    partner: this.partnerId
                                },
                                storage: {
                                    type: "html5",
                                    name: "id5id",
                                    expires: 90,
                                    refreshInSeconds: 28800
                                }
                            }])
                        })
                    })
                }
            }]), t
        }();
    var Di, Oi = {
            UserId5: Pi,
            enable: function() {
                var e = S.getId5Settings();
                !Ri && e.enabled && (Ri = new Pi(e.partnerId))
            },
            getId5Module: function() {
                return Ri
            }
        },
        Mi = function() {
            function n(e, t, i) {
                l(this, n), this.browserWindow = e, this.userIdentityGlobal = t, this.placementId = i
            }
            return g(n, [{
                key: "setup",
                value: function() {
                    var e, t = this,
                        i = this.browserWindow[this.userIdentityGlobal],
                        n = (i && "object" === L(n = i) && null !== n && (i.email || i.phoneNumber || i.emailHashes) ? (e = {
                            placementID: this.placementId
                        }, i.email ? e.email = i.email : i.phoneNumber ? e.phoneNumber = i.phoneNumber : e.emailHashes = i.emailHashes) : e = {
                            placementID: this.placementId,
                            storageType: "localStorage",
                            detectionType: "scrapeAndUrl",
                            cssSelectors: ["input[type=text]", "input[type=email]"],
                            detectionSubject: "all",
                            urlParameter: "user_id",
                            logging: "debug"
                        }, document.createElement("script")),
                        i = (n.src = "https://ats.rlcdn.com/ats.js", n.onload = function() {
                            t.browserWindow.ats.start(e)
                        }, this.browserWindow.document.getElementsByTagName("script")[0]);
                    i.parentNode.insertBefore(n, i)
                }
            }, {
                key: "configPrebid",
                value: function(e) {
                    var t = e.userSync;
                    return Object.assign(Object.assign({}, e), {
                        userSync: Object.assign(Object.assign({}, t), {
                            userIds: [].concat(s(t.userIds || []), [{
                                name: "identityLink",
                                params: {
                                    pid: this.placementId
                                },
                                storage: {
                                    type: "cookie",
                                    name: "idl_env",
                                    expires: 7
                                }
                            }])
                        })
                    })
                }
            }]), n
        }();
    var Li = {
            UserIdentity: Mi,
            enable: function(e) {
                Di || (Di = new Mi(e, S.getFuseSettings().identity.userIdentityGlobal, S.getFuseSettings().identity.placementId)).setup()
            },
            getIdentityModule: function() {
                return Di
            }
        },
        Bi = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getPrebidGlobal",
                value: function() {
                    var e = f.getBrowserWindowObject();
                    return e.fusePbjs || (e.fusePbjs = {
                        que: []
                    }), e.fusePbjs
                }
            }]), e
        }()),
        Ni = this && this.__rest || function(e, t) {
            var i = {};
            for (r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (i[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var n = 0, r = Object.getOwnPropertySymbols(e); n < r.length; n++) t.indexOf(r[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[n]) && (i[r[n]] = e[r[n]]);
            return i
        },
        E = f.getLogger(),
        Ui = f.getPackageMajorVersion(),
        _ = Bi.getPrebidGlobal(),
        Gi = y.getReporter(),
        Fi = "https://mpbs.rubiconproject.com/openrtb2/auction",
        Wi = "https://mpbs.rubiconproject.com/cookie_sync";

    function ji(e) {
        return e.hasOwnProperty("libLoaded")
    }
    var Vi = function(e) {
            var t, i;
            if (Gi.setStateStatus("prebid_load_script_start"), !ji(_)) return t = S.getPrebidHash(), i = S.getFuseCDN(), ne(Object.assign({
                name: "Prebid.org"
            }, t ? {
                url: "//".concat(new URL("https:" + i).hostname, "/prebid/"),
                file: "prebid-".concat(t, ".js")
            } : {
                url: "".concat(i).concat(Ui, "/").concat(S.getFuseId(), "/"),
                file: "prebid.js"
            }), function() {
                E.debug("[INIT]: Prebid ".concat(ji(_) && _.libLoaded ? "".concat(_.version, " is loaded and ready") : "not loaded")), Gi.setStateStatus("prebid_onload_received"), e()
            });
            E.warn("[INIT]: Prebid ".concat(_.version, " is already loaded skip loading it again"))
        },
        Hi = function(e) {
            _.que.push(function() {
                try {
                    e.call(void 0)
                } catch (e) {
                    e instanceof Error ? E.error("Error processing command :", e.message, e.stack) : E.error("Error processing command :", e)
                }
            })
        };

    function qi(e) {
        return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
            enableSendAllBids: e && !0 === e.sendAllBids,
            priceGranularity: {
                buckets: [{
                    max: 3,
                    increment: .01,
                    precision: 2
                }, {
                    max: 10,
                    increment: .1,
                    precision: 2
                }, {
                    max: 50,
                    increment: 1,
                    precision: 2
                }, {
                    max: 100,
                    increment: 10,
                    precision: 2
                }]
            },
            sizeConfig: S.isResponsiveEnabled() && !Dt.isUseBrowserOuterwidth() ? (n = null, r = [], Object.keys(Dt.getBreakpoints()).forEach(function(e) {
                var t = Dt.getBreakpoints()[e],
                    i = n ? n - 1 : null;
                E.debug("[PREBID]: Configured breakpoint ".concat(e, " ").concat(t, "px to ").concat(i)), r.push({
                    mediaQuery: "(min-width:".concat(t, "px)").concat(n ? " and (max-width: ".concat(i, "px)") : ""),
                    sizesSupported: S.getSupportedSizes(e),
                    labels: [e]
                }), n = t
            }), r) : (t = o.getViewportInfo().getCurrentBreakpoint().name, [{
                mediaQuery: "(min-width: ".concat(0, "px)"),
                sizesSupported: S.getSupportedSizes(t),
                labels: [t]
            }]),
            userSync: {
                filterSettings: {
                    iframe: {
                        bidders: "*",
                        filter: "include"
                    }
                },
                enableOverride: !0
            }
        }, S.isCmpRequired() && (E.debug("[PREBID]: Configured CMP module"), {
            consentManagement: {
                gdpr: {
                    cmpApi: "iab",
                    timeout: S.getUspTimeoutMillis(),
                    defaultGdprScope: S.isStrictCmp(),
                    allowAuctionWithoutConsent: !S.isStrictCmp()
                },
                usp: {
                    cmpApi: "iab",
                    timeout: S.getUspTimeoutMillis()
                }
            }
        })), S.isGptPreAuctionEnabled() && (E.debug("[PREBID]: Configured GPT Pre auction module"), {
            gptPreAuction: {
                enabled: !0,
                customPreAuction: function(e) {
                    return null == (e = document.querySelector('div[data-fuse-slot="'.concat(e.code, '"]'))) ? void 0 : e.getAttribute("data-gpid")
                }
            }
        })), e.sco && {
            schain: {
                validation: "strict",
                config: {
                    ver: "1.0",
                    complete: 1,
                    nodes: [{
                        asi: (t = e.sco).asi,
                        sid: t.sellerId,
                        hp: 1
                    }]
                }
            }
        }), 0 < e.prebidServerBidders.length && (e = e.prebidServerBidders, E.debug("[PREBID]: Enabling Prebid Server for ".concat(JSON.stringify(e))), {
            s2sConfig: {
                accountId: "20884",
                bidders: e,
                adapter: "prebidServer",
                enabled: !0,
                endpoint: Fi,
                syncEndpoint: Wi,
                timeout: 750,
                extPrebid: {
                    cache: {
                        vastxml: {
                            returnCreative: !1
                        }
                    }
                }
            }
        })), {
            currency: {
                adServerCurrency: "USD",
                granularityMultiplier: 1,
                defaultRates: {
                    AUD: {
                        USD: .67
                    }
                }
            }
        }), S.isBidCacheEnabled() && {
            useBidCache: !0
        });
        var n, r, t
    }
    var Zi = function(e) {
            return E.debug("[PREBID]: Applied config settings ".concat(JSON.stringify(e))), _.setConfig(Object.assign(Object.assign({}, e), S.isPrebidVideoEnabled() && {
                cache: {
                    url: "https://prebid.adnxs.com/pbc/v1/cache"
                },
                rubicon: {
                    rendererConfig: {
                        align: "center",
                        position: "append",
                        closeButton: !0,
                        label: "Advertisement",
                        collapse: !0
                    }
                }
            })), e
        },
        Qi = function() {
            _.enableAnalytics([{
                provider: "pubxai",
                options: {
                    samplingRate: 10,
                    pubxId: "e81e688b-e119-4bf8-af5e-9c6af50622c1"
                }
            }])
        },
        Ji = function(e) {
            var t, i = e.sizesHb.map(function(e) {
                    return Re(e)
                }),
                n = e.slotTemplate.bids.filter(function(e) {
                    e = e.bidSizes;
                    return !(e && 0 < e.length) || 0 < ze(i, e).length
                }).map(function(e) {
                    return e.bidSizes, Ni(e, ["bidSizes"])
                });
            return S.isPrebidVideoEnabled() && null != (e = e.mediaTypes) && e.includes("video") ? (t = {
                w: 640,
                h: 480,
                context: "outstream",
                language: "en",
                mimes: ["video/mp4"]
            }, n.map(function(e) {
                return Object.assign(Object.assign({}, e), {
                    params: Object.assign(Object.assign(Object.assign({}, t), e.params), "pubmatic" === e.bidder && {
                        outstreamAU: "renderer_test_pubmatic"
                    })
                })
            })) : n
        };

    function Yi(e) {
        var t;
        return {
            code: e.slotDivId,
            mediaTypes: Object.assign(Object.assign(Object.assign({}, S.isPrebidBannerEnabled() && {
                banner: {
                    sizes: e.sizesHb
                }
            }), S.isPrebidNativeEnabled() && (null == (t = e.mediaTypes) ? void 0 : t.includes("native")) && {
                native: {
                    sendTargetingKeys: !1
                }
            }), S.isPrebidVideoEnabled() && (null == (t = e.mediaTypes) ? void 0 : t.includes("video")) && (t = e, {
                video: Object.assign(Object.assign({}, {
                    context: "outstream",
                    playerSize: [640, 480],
                    mimes: ["video/mp4"],
                    protocols: [2, 3, 4],
                    playbackmethod: [2],
                    maxduration: 30,
                    minduration: 6,
                    skip: 1,
                    linearity: 2,
                    api: [2]
                }), t.videoAttributes)
            })),
            bids: Ji(e)
        }
    }
    var Ki = {
            loadPrebidLibrary: Vi,
            pushToPrebidQue: Hi,
            getPrebidDefaultConfig: qi,
            setPrebidConfig: Zi,
            getPrebidUnitIndex: function(t) {
                return ji(_) ? _.adUnits.findIndex(function(e) {
                    return e.code === t
                }) : void 0
            },
            getPrebidUnits: function(e) {
                var i = {},
                    n = (_.adUnits.forEach(function(e) {
                        return i[e.code] = e
                    }), {});
                return e.forEach(function(e) {
                    var t = i[e];
                    t ? n[e] = JSON.parse(JSON.stringify(t)) : E.warn("[PREBID]: No prebid unit found for ".concat(e))
                }), n
            },
            enable: function(n) {
                Hi(function() {
                    var e = qi({
                            sendAllBids: S.getPrebidSettings() && !0 === S.getPrebidSettings().sendAllBids,
                            sco: S.getSco(),
                            prebidServerBidders: S.isPrebidServer() ? S.getPrebidServerBidders() : []
                        }),
                        t = Li.getIdentityModule(),
                        t = (S.isIdentityEnabled() && t && (E.debug("[PREBID] Enabled identity module"), e = t.configPrebid(e)), Oi.getId5Module());
                    S.isId5Enabled() && t && (E.debug("[PREBID] Enabled id5 module"), e = t.configPrebid(e)), Zi(e), E.debug("[PREBID]: Enabled prebid ".concat(JSON.stringify(e))), S.isPubxaiEnabled() && (E.debug("[PREBID] Enabled prebid analytics"), Qi())
                }), $(At(), "simulate prebid download delay", E, function() {
                    var i = Gi.getElapsedTime();
                    Vi(function() {
                        var e = f.getBrowserWindowObject(),
                            t = e.pbjs;
                        J(t) || !ji(t) ? e.pbjs = _ : t.renderAd && (t.renderAd = _.renderAd), n(i)
                    })
                })
            },
            reset: function() {
                ji(_) && _.removeAdUnit()
            },
            setSiteCategoryAsync: function(i) {
                Hi(function() {
                    var e = f.getBrowserWindowObject(),
                        t = f.getWindowLocation();
                    _.setConfig({
                        ortb2: {
                            site: {
                                name: t.hostname,
                                domain: t.hostname,
                                cat: i.iabCodes || S.getFuseIndustry(),
                                sectioncat: i.iabCodes,
                                pagecat: i.iabCodes,
                                page: t.href,
                                ref: e.document.referrer,
                                keywords: i.keywords.join(",")
                            }
                        }
                    }), ci("CATEGORY_IAB", i.keywords), ci("CATEGORY_IAB_Codes", i.iabCodes)
                })
            }
        },
        Xi = f.getLogger(),
        $i = y.getReporter(),
        en = function() {
            return {
                name: "ArcTag",
                url: "//silo25.p7cloud.net/",
                file: "as.js"
            }
        };
    var tn = function() {
            var i = 0,
                n = setInterval(function() {
                    var e, t = f.getBrowserWindowObject().arcobj1;
                    t ? (clearInterval(n), null != (e = t.page_iab_codes) && e.text || null != (e = t.page_iab) && e.text ? (Xi.debug("[ARCTAG]: Applying prebid site categories from window.arcobj1 ".concat(JSON.stringify(t))), Ki.setSiteCategoryAsync({
                        iabCodes: (null == (e = t.page_iab_codes) ? void 0 : e.text) || [],
                        keywords: (null == (e = t.page_iab) ? void 0 : e.text) || []
                    })) : Xi.debug("[ARCTAG]: No codes and keyword in retrieved data")) : (i++, Xi.debug("[ARCTAG]: window.arcobj1 not inited yet ".concat(i)), 30 < i && (clearInterval(n), Xi.debug("[ARCTAG]: window.arcobj1 check cancelled")))
                }, 100)
        },
        nn = {
            enable: function() {
                $i.setStateStatus("arctag_load_start"), ne(en(), function() {
                    Xi.log("[ARCTAG]: Script loaded"), $i.setStateStatus("arctag_load_finish"), tn()
                })
            }
        },
        rn = function() {
            function o(e, t) {
                var i = this;
                l(this, o), this.logger = e, this.gptDestroySlots = t, this.templateTargetings = {}, this.slots = {}, this.destroySlotsFunc = function(e) {
                    var t = e.map(function(e) {
                        return e.getSlotElementId()
                    });
                    i.logger.debug("[GPT-REGISTRY]: Calling googletag.destroySlots(".concat(JSON.stringify(t), ")")), i.gptDestroySlots(e)
                }
            }
            return g(o, [{
                key: "add",
                value: function(e, t) {
                    var i = this,
                        n = o.getLCTemplateId(e),
                        r = (Array.isArray(this.slots[n]) || (this.slots[n] = []), this.logger.debug("[GPT-REGISTRY]: Added ".concat(n)), this.slots[n].push(t), this.templateTargetings[n]);
                    r ? (Object.keys(r).forEach(function(e) {
                        t.setTargeting(e, r[e]), i.logger.debug("[GPT-REGISTRY]: Set targeting. slotTemplateId: ".concat(n, ", gpt slot id: ").concat(t.getSlotElementId(), ", key: ").concat(e, ", value: ").concat(r[e]))
                    }), this.logger.debug("[GPT-REGISTRY]: Applied targeting for ".concat(n, " on newly added gpt slot - id: ").concat(t.getSlotElementId()))) : this.logger.debug("[GPT-REGISTRY]: No template targeting set for slotTemplateId: ".concat(n))
                }
            }, {
                key: "purgeAll",
                value: function() {
                    var t = this;
                    Object.keys(this.slots).forEach(function(e) {
                        return t.purge(e)
                    })
                }
            }, {
                key: "purge",
                value: function(e) {
                    var e = o.getLCTemplateId(e),
                        t = (this.logger.debug("[GPT REGISTRY]: Purging ".concat(e)), this.slots[e]);
                    t && (this.destroySlotsFunc(t), delete this.slots[e], delete this.templateTargetings[e])
                }
            }, {
                key: "purgeByElement",
                value: function(e, t) {
                    var i = this.getSlots(e) || [],
                        n = i.find(function(e) {
                            return e.getSlotElementId() === t
                        });
                    n ? (this.destroySlotsFunc([n]), this.slots[o.getLCTemplateId(e)] = i.filter(function(e) {
                        return e.getSlotElementId() !== t
                    })) : this.logger.warn("[GPT-REGISTRY]: No slot found for key: ".concat(e, " code: ").concat(t))
                }
            }, {
                key: "getSlotsLength",
                value: function() {
                    return Object.keys(this.slots).length
                }
            }, {
                key: "getSlots",
                value: function(e) {
                    return e && "string" == typeof e && Array.isArray(this.slots[o.getLCTemplateId(e)]) ? this.slots[o.getLCTemplateId(e)] : []
                }
            }, {
                key: "addTemplateTargetings",
                value: function(e, t, i) {
                    e = o.getLCTemplateId(e);
                    this.templateTargetings[e] || (this.templateTargetings[e] = {}), this.templateTargetings[e][t] = i
                }
            }, {
                key: "getTemplateTargetings",
                value: function(e) {
                    e = o.getLCTemplateId(e);
                    return this.templateTargetings[e] || null
                }
            }, {
                key: "setSlotTargetingById",
                value: function(t, i, n) {
                    var r = this;
                    this.addTemplateTargetings(t, i, n), this.logger.debug("[GPT-REGISTRY]: Template targeting set. slotTemplateId: ".concat(t, ", key: ").concat(i, ", value: ").concat(JSON.stringify(n))), this.getSlots(t).forEach(function(e) {
                        try {
                            e.setTargeting(i, n), r.logger.debug("[GPT-REGISTRY]: Applied template targetings. slot id: ".concat(e.getSlotElementId(), ", key: ").concat(i, ", value: ").concat(JSON.stringify(n)))
                        } catch (e) {
                            e instanceof Error ? r.logger.error("[GPT-REGISTRY]: Error occurred while individually setTargeting for slot ".concat(t, "."), e.message, e.stack) : r.logger.error("[GPT-REGISTRY]: Error of unexpected type occurred while individually setTargeting for slot ".concat(t, "."))
                        }
                    })
                }
            }], [{
                key: "getLCTemplateId",
                value: function(e) {
                    return e.toLowerCase()
                }
            }]), o
        }(),
        on = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getGptSlotRegistry",
                value: function() {
                    return this.gptSlotRegistry || (this.gptSlotRegistry = new rn(f.getLogger(), bi)), this.gptSlotRegistry
                }
            }]), e
        }()),
        sn = function() {
            function o(e, t, i, n) {
                var r = this;
                l(this, o), this.logger = e, this.reporter = t, this.events = i, this.componentState = n, this.state = {
                    tag_initialised: !1,
                    on_low_dwell_page: !1
                }, i.onComponentInitEvent.subscribe(function(e) {
                    return r.checkAndTrigger()
                })
            }
            return g(o, [{
                key: "getInitStatus",
                value: function() {
                    var e = this.componentState.state.cmp._tag,
                        t = this.componentState.state.docReadyScan._tag;
                    return {
                        cmpOk: "ready" === e || "disabled" === e,
                        docReady: "ready" == t || "disabled" === t,
                        anyBidLibraryReady: this.isAnyBidLibraryReady()
                    }
                }
            }, {
                key: "isReadyForInit",
                value: function() {
                    var e = this.getInitStatus();
                    return 0 === Object.values(e).filter(function(e) {
                        return !e
                    }).length
                }
            }, {
                key: "checkAndTrigger",
                value: function() {
                    h(this.firedInitReady) && this.isReadyForInit() && (this.reporter.setStateStatus("initmanager_fired_auction_ready"), this.firedInitReady = this.reporter.getElapsedTime(), this.events.onInitManagerReady.emit({
                        eventType: "onInitManagerReady"
                    }))
                }
            }, {
                key: "isComponentReady",
                value: function(e) {
                    return "ready" === this.componentState.state[e]._tag
                }
            }, {
                key: "isAnyBidLibraryReady",
                value: function() {
                    return "disabled" !== this.componentState.state.yandex._tag ? this.isComponentReady("yandex") : this.isComponentReady("prebid") || this.isComponentReady("gpt") || this.isComponentReady("uam")
                }
            }, {
                key: "setTagInitialised",
                value: function() {
                    this.state.tag_initialised = !0
                }
            }, {
                key: "isTagInitialised",
                value: function() {
                    return this.state.tag_initialised
                }
            }, {
                key: "setIsLowDwellPage",
                value: function(e) {
                    this.state.on_low_dwell_page = e
                }
            }, {
                key: "isLowDwellPage",
                value: function() {
                    return this.state.on_low_dwell_page
                }
            }]), o
        }(),
        an = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getInitManager",
                value: function() {
                    return this.initManager || (this.initManager = new sn(f.getLogger(), y.getReporter(), m, y.getComponentStatusStore())), this.initManager
                }
            }]), e
        }()),
        dn = f.getLogger(),
        cn = [];

    function un() {
        var e;
        dn.info("[TARGETING] Clearing page targeting"), e = cn, C(function() {
            e.forEach(function(e) {
                u.pubads().clearTargeting(e.key)
            })
        }), cn = []
    }

    function ln(i, e) {
        var n = -1;
        cn.forEach(function(e, t) {
            -1 === n && e.key === i && (n = t)
        }), dn.info("[TARGETING]: Updating custom targeting for [key: ".concat(i, ", value: ").concat(e, "]")), -1 < n ? cn[n].value = e : cn.push({
            key: i,
            value: e
        }), ci(i, e)
    }
    var gn = function() {
            function o(e, t, i, n, r) {
                l(this, o), this.logger = e, this.context = t, this.rootCondition = i, this.api = n, this.onSatisfiedCB = r, this.firedCallback = !1
            }
            return g(o, [{
                key: "enableTriggers",
                value: function() {
                    this.rootCondition.enableTriggers(this.api)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.rootCondition.destroyTriggers()
                }
            }, {
                key: "checkCondition",
                value: function() {
                    return this.rootCondition.checkCondition()
                }
            }, {
                key: "checkAndFire",
                value: function() {
                    this.firedCallback || this.rootCondition.checkCondition() && (this.logger.info("[ACTIVATOR][".concat(this.context, "]: Conditions are satisfied. Destroying triggers and invoking callback")), this.rootCondition.destroyTriggers(), this.firedCallback = !0, this.onSatisfiedCB(this.context))
                }
            }]), o
        }(),
        hn = function() {
            function e() {
                l(this, e), this.name = "AlwaysTrue"
            }
            return g(e, [{
                key: "check",
                value: function() {
                    return !0
                }
            }, {
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }]), e
        }(),
        pn = function() {
            function e() {
                l(this, e), this.name = "AlwaysFalse"
            }
            return g(e, [{
                key: "check",
                value: function() {
                    return !1
                }
            }, {
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }]), e
        }(),
        fn = function() {
            function t(e) {
                l(this, t), this.conditions = e, this.name = "AndCondition"
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function() {
                    return this.conditions.reduce(function(e, t) {
                        return e && t.checkCondition()
                    }, !0)
                }
            }]), t
        }(),
        bn = function() {
            function t(e) {
                l(this, t), this.conditions = e, this.name = "OrCondition"
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function() {
                    return this.conditions.reduce(function(e, t) {
                        return e || t.checkCondition()
                    }, !1)
                }
            }]), t
        }(),
        mn = function() {
            U(i, It);
            var t = j(i);

            function i(e) {
                return l(this, i), t.call(this, e, e.api.events.onWindowResized, function(e) {
                    return !e.crossedBp
                })
            }
            return g(i)
        }(),
        vn = function() {
            function o(e, t, i, n, r) {
                l(this, o), this.id = e, this.condition = t, this.api = i, this.activatorCallback = n, this.logger = r, this.triggers = null, this.satisfied = !1
            }
            return g(o, [{
                key: "checkCondition",
                value: function() {
                    return this.checkConditionAndNotify(!1)
                }
            }, {
                key: "checkConditionAndNotify",
                value: function(e) {
                    if (!this.satisfied) {
                        try {
                            this.satisfied = this.condition.check(this.id, this.api)
                        } catch (e) {
                            return K(e), this.logger.warn("[CONDITION][".concat(this.condition.name, "][").concat(this.id, "]: Caught exception while checking condition"), e.message, e.stack), !1
                        }
                        this.satisfied && e && this.activatorCallback()
                    }
                    return this.satisfied
                }
            }, {
                key: "destroyTriggers",
                value: function() {
                    return o.visitConditions(this, function(e) {
                        e.triggers && e.triggers.forEach(function(e) {
                            e.destroy()
                        })
                    })
                }
            }, {
                key: "enableTriggers",
                value: function(n) {
                    var r = this;
                    return o.visitConditions(this, function(e) {
                        var t = e.condition,
                            i = {
                                id: r.id,
                                api: n,
                                logger: r.logger,
                                onTriggeredCB: function() {
                                    return e.checkConditionAndNotify(!0)
                                }
                            };
                        e.triggers = [].concat(s(t.buildTriggers(i)), [new mn(i)])
                    })
                }
            }], [{
                key: "visitConditions",
                value: function(t, i) {
                    var n = t.condition;
                    if (n instanceof fn || n instanceof bn) n.conditions.forEach(function(e) {
                        return o.visitConditions(e, i)
                    });
                    else try {
                        i(t)
                    } catch (e) {
                        K(e), t.logger.warn("[CONDITION][".concat(n.name, "][").concat(t.id, "]: Caught exception while visiting condition:"), e.message, e.stack)
                    }
                }
            }]), o
        }(),
        Sn = function() {
            function t(e) {
                l(this, t), this.logger = e, this.internalConditions = {
                    AlwaysTrue: function() {
                        return new hn
                    },
                    AlwaysFalse: function() {
                        return new pn
                    }
                }, this.conditions = {}
            }
            return g(t, [{
                key: "buildActivator",
                value: function(e, t, i, n) {
                    var e = this.buildCondition(t, e, i, function() {
                            return r.checkAndFire()
                        }),
                        r = new gn(this.logger, t, e, i, n);
                    return r
                }
            }, {
                key: "registerCondition",
                value: function(e, t) {
                    if (this.conditions[e]) throw Error("Condition with ".concat(e, " already registered"));
                    this.conditions[e] = t
                }
            }, {
                key: "buildCondition",
                value: function(e, t, i, n) {
                    var r = t.type;
                    switch (r) {
                        case "and":
                            return this.buildBooleanCondition(e, t, i, n, function(e) {
                                return new fn(e)
                            });
                        case "or":
                            return this.buildBooleanCondition(e, t, i, n, function(e) {
                                return new bn(e)
                            });
                        case "condition":
                        case "custom-condition":
                            return this.buildTriggerCondition(e, t, i, n);
                        default:
                            Y(r)
                    }
                }
            }, {
                key: "buildTriggerCondition",
                value: function(e, t, i, n) {
                    var r;
                    return this.internalConditions[t.name] ? new vn(e, this.internalConditions[t.name](), i, n, this.logger) : (r = this.conditions[t.name]) ? (r = new r(null != (r = t.params) ? r : {}), new vn(e, r, i, n, this.logger)) : (this.logger.error("[CONDITION-FACTORY]: Could not find condition ".concat(t.name, ", it will be deemed false")), this.buildAlwaysFalseCondition(e, i, n))
                }
            }, {
                key: "buildAlwaysFalseCondition",
                value: function(e, t, i) {
                    return new vn(e, new pn, t, i, this.logger)
                }
            }, {
                key: "buildBooleanCondition",
                value: function(t, e, i, n, r) {
                    var o = this,
                        e = e.subConditions;
                    return e && 0 !== e.length ? (r = r(e.map(function(e) {
                        return o.buildCondition(t, e, i, n)
                    })), new vn(t, r, i, n, this.logger)) : (this.logger.error("[CONDITION-FACTORY]: Boolean condition with no sub-conditions"), this.buildAlwaysFalseCondition(t, i, n))
                }
            }]), t
        }(),
        yn = "AbsoluteScrollDistance",
        xn = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = yn
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new St(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return t.getWindow().scrollY >= ((null == (t = this.params) ? void 0 : t.pixelsDistance) || 0)
                }
            }]), t
        }(),
        In = "BreakpointMatch",
        kn = function() {
            function n(e) {
                l(this, n), this.params = e, this.name = In
            }
            return g(n, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    var t = t.viewportInfo.getCurrentBreakpoint().name,
                        i = !("gte" in this.params) || n.compareBp(this.params.gte, t, "gte"),
                        t = !("lte" in this.params) || n.compareBp(this.params.lte, t, "lte");
                    return i && t
                }
            }], [{
                key: "compareBp",
                value: function(e, t, i) {
                    e = this.BpOrder[e], t = this.BpOrder[t];
                    return "gte" === i ? e <= t : t <= e
                }
            }]), n
        }(),
        Cn = (kn.BpOrder = {
            xs: 1,
            s: 2,
            m: 3,
            l: 4,
            xl: 5
        }, function() {
            function t(e) {
                l(this, t), this.window = e.api.viewportInfo.browserWindow, this.triggeredCB = e.onTriggeredCB, document.addEventListener("readystatechange", this.triggeredCB)
            }
            return g(t, [{
                key: "destroy",
                value: function() {
                    this.window.removeEventListener("readystatechange", this.triggeredCB)
                }
            }]), t
        }()),
        wn = "DocumentStatus",
        En = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = wn
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new Cn(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return -1 !== this.params.state.indexOf(document.readyState)
                }
            }]), t
        }(),
        _n = function() {
            function i(e, t) {
                l(this, i), this.ctx = e, this.intervalMs = t, this.intervalId = setInterval(this.ctx.onTriggeredCB, this.intervalMs)
            }
            return g(i, [{
                key: "destroy",
                value: function() {
                    clearInterval(this.intervalId)
                }
            }]), i
        }(),
        Tn = "DomElementExists",
        An = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = Tn
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new _n(e, 250)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return null !== document.querySelector(this.params.selector)
                }
            }]), t
        }(),
        Rn = "PageCount",
        zn = function() {
            function n(e) {
                l(this, n), this.params = e, this.name = Rn, this.hasChecked = !1, this.isOver = !1
            }
            return g(n, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    var i;
                    return this.hasChecked || (n.incrementPageCount(e, t.getWindow()), this.hasChecked = !0, i = n.getPageCount(e, t.getWindow()), this.isOver = i >= ((null == (i = this.params) ? void 0 : i.pageCount) || 1), this.isOver && n.resetPageCount(e, t.getWindow())), this.isOver
                }
            }], [{
                key: "getCountKey",
                value: function(e) {
                    return "fuse-page-views-".concat(e)
                }
            }, {
                key: "getPageCount",
                value: function(e, t) {
                    return Number(t.sessionStorage.getItem(n.getCountKey(e)) || 0)
                }
            }, {
                key: "incrementPageCount",
                value: function(e, t) {
                    t.sessionStorage.setItem(n.getCountKey(e), "".concat(this.getPageCount(e, t) + 1))
                }
            }, {
                key: "resetPageCount",
                value: function(e, t) {
                    t.sessionStorage.setItem(n.getCountKey(e), "0")
                }
            }]), n
        }(),
        Pn = "UrlRegex",
        Dn = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = Pn
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    t = t.getWindow().location.toString().match(this.params.regex);
                    return p(t) && 0 < t.length
                }
            }]), t
        }(),
        On = "WindowHeightDistance",
        Mn = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = On
            }
            return g(t, [{
                key: "buildTriggers",
                value: function(e) {
                    return [new St(e)]
                }
            }, {
                key: "check",
                value: function(e, t) {
                    var t = t.getWindow();
                    return t.scrollY >= t.innerHeight * ((null == (t = this.params) ? void 0 : t.windowHeightDistance) || 0)
                }
            }]), t
        }(),
        Ln = "WindowValue",
        Bn = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = Ln
            }
            return g(t, [{
                key: "buildTriggers",
                value: function() {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return t.viewportInfo.browserWindow[this.params.name] === this.params.value
                }
            }]), t
        }(),
        Nn = "LocalStorageValue",
        Un = function() {
            function t(e) {
                l(this, t), this.params = e, this.name = Nn
            }
            return g(t, [{
                key: "buildTriggers",
                value: function() {
                    return []
                }
            }, {
                key: "check",
                value: function(e, t) {
                    return t.viewportInfo.browserWindow.localStorage.getItem(this.params.name) === this.params.value
                }
            }]), t
        }();
    var Gn = new(function() {
            function t(e) {
                l(this, t), this.logger = e, this.slotConditionFactory = null, this.insertConditionFactory = null
            }
            return g(t, [{
                key: "getSlotConditionFactory",
                value: function() {
                    var e;
                    return this.slotConditionFactory || (this.slotConditionFactory = new Sn(this.logger), (e = this.slotConditionFactory).registerCondition(yn, xn), e.registerCondition(In, kn), e.registerCondition(Tn, An), e.registerCondition(yt, xt), e.registerCondition(Ct, wt), e.registerCondition(Rn, zn), e.registerCondition(Pn, Dn), e.registerCondition(On, Mn), e.registerCondition(Ln, Bn), e.registerCondition(Nn, Un)), this.slotConditionFactory
                }
            }, {
                key: "getInsertConditionFactory",
                value: function() {
                    var e;
                    return this.insertConditionFactory || (this.insertConditionFactory = new Sn(this.logger), (e = this.insertConditionFactory).registerCondition(wn, En), e.registerCondition(yn, xn), e.registerCondition(In, kn), e.registerCondition(On, Mn), e.registerCondition(Pn, Dn), e.registerCondition(Tn, An), e.registerCondition(Rn, zn), e.registerCondition(Ln, Bn), e.registerCondition(Nn, Un)), this.insertConditionFactory
                }
            }]), t
        }())(f.getLogger()),
        Fn = function() {
            function n(e, t, i) {
                l(this, n), this.logger = e, this.browserWindow = t, this.reporter = i
            }
            return g(n, [{
                key: "load",
                value: function(e) {
                    switch (this.reporter.setStateStatus("cmp_load_quantcast_start"), e.partner) {
                        case "quantcast":
                            return this.loadQuantcast();
                        case "cookiebot":
                            return this.loadCookieBot(e.domainGroupId)
                    }
                }
            }, {
                key: "loadQuantcast",
                value: function() {
                    this.logger.log("[CMP]: Loading Quantcast CMP provider");
                    var e = this,
                        t = this.browserWindow.document.location.hostname,
                        i = this.browserWindow.document.createElement("script"),
                        n = this.browserWindow.document.getElementsByTagName("script")[0],
                        r = this.browserWindow.document.getElementsByTagName("head")[0] || this.browserWindow.document.documentElement,
                        o = "https://cmp.quantcast.com".concat("/choice/", "PRrmquD1Ggcb1", "/", t, "/choice.js?tag_version=V2"),
                        s = new XMLHttpRequest;
                    s.onreadystatechange = function() {
                        4 === this.readyState && (i.async = !0, i.type = "text/javascript", 200 === this.status ? i.src = o : e.logger.error("GET call to CMP script with ".concat(t, " responed with the status code - ").concat(this.status)), n && n.parentNode ? n.parentNode.insertBefore(i, n) : (e.logger.debug("First script element not fully initialised, falling back to head-based insertion"), r.insertBefore(i, r.firstChild)), e.logger.log("[CMP]: Added Quantcast script to document"))
                    }, this.logger.log("[CMP]: Opening Quantcast URL"), s.open("GET", o, !0), s.send()
                }
            }, {
                key: "loadCookieBot",
                value: function(e) {
                    var t = this;
                    this.logger.log("[CMP]: Loading Cookie Bot - ".concat(e)), ne({
                        name: "CookieBot",
                        url: "//consent.cookiebot.com/",
                        file: "uc.js",
                        insertSelector: "head",
                        attributes: {
                            "data-cbid": e,
                            "data-blockingmode": "auto",
                            "data-framework": "IAB"
                        }
                    }, function() {
                        t.logger.log("[CMP]: Cookie Bot script loaded")
                    })
                }
            }]), n
        }(),
        Wn = function() {
            function i(e, t) {
                l(this, i), this.logger = e, this.browserWindow = t
            }
            return g(i, [{
                key: "generate",
                value: function() {
                    this.createStubFunctionV2()
                }
            }, {
                key: "createStubFunctionV2",
                value: function() {
                    var o = this;
                    o.logger.debug("[CMP]: Generating V2 stub");
                    for (var r = "__tcfapiLocator", i = [], s = o.browserWindow, e = void 0, t = function e() {
                            var t, i = s.document,
                                n = !!s.frames[r];
                            return n ? o.logger.debug("[CMP] Found existing version 2 stub") : (o.logger.debug("[CMP] Version 2 stub not found - generating"), i.body ? ((t = i.createElement("iframe")).style.cssText = "display:none", t.name = r, i.body.appendChild(t)) : setTimeout(e, 5)), !n
                        }, n = s; n;) {
                        try {
                            if (n.frames[r]) {
                                e = n, o.logger.debug("[CMP] Found locator frame");
                                break
                            }
                        } catch (e) {
                            "{}" !== JSON.stringify(e) && o.logger.log("[CMP]:", JSON.stringify(e))
                        }
                        if (n === o.browserWindow.top) break;
                        n = n.parent
                    }
                    e || (o.logger.debug("[CMP] Locator frame not found"), t(), s.__tcfapi = function() {
                        var e = arguments,
                            t = void 0;
                        if (!e.length) return i;
                        "setGdprApplies" === e[0] ? 3 < e.length && 2 === e[2] && "boolean" == typeof e[3] && (t = e[3], "function" == typeof e[2]) && e[2]("set", !0) : "ping" === e[0] ? "function" == typeof e[2] && e[2]({
                            gdprApplies: t,
                            cmpLoaded: !1,
                            cmpStatus: "stub"
                        }) : (t = "init" === e[0] && "object" === L(e[3]) ? [e[0], e[1], e[2], Object.assign(e[3], {
                            tag_version: "V2"
                        })].concat(Array.from(e).slice(4)) : e, i.push(t))
                    }, s.addEventListener("message", function(i) {
                        var n = "string" == typeof i.data,
                            e = void 0;
                        try {
                            e = n ? JSON.parse(i.data) : i.data
                        } catch (e) {
                            "{}" !== JSON.stringify(e) && o.logger.error("[CMP]:", JSON.stringify(e))
                        }
                        var r = null == e ? void 0 : e.__tcfapiCall;
                        r && o.browserWindow.__tcfapi(r.command, r.version, function(e, t) {
                            e = {
                                __tcfapiReturn: {
                                    returnValue: e,
                                    success: t,
                                    callId: r.callId
                                }
                            };
                            i && i.source && i.source.postMessage && i.source.postMessage(n ? JSON.stringify(e) : e, "*")
                        }, r.parameter)
                    }, !1))
                }
            }]), i
        }(),
        jn = function() {
            function n(e, t, i) {
                l(this, n), this.logger = e, this.consentUIPrompt = i, this.uspTries = 0, this.uspTriesLimit = 3, this.callCount = -1, this.browserWindow = t, this.createUspStub()
            }
            return g(n, [{
                key: "checkForCCPA",
                value: function(i) {
                    var n = this;
                    this.browserWindow.Cookiebot ? (this.logger.log("[CMP-v2]: Checking CCPA with cookiebot"), this.browserWindow.Cookiebot.regulations.ccpaApplies ? (this.logger.log("[CMP-V2]: CCPA Region from Cookiebot"), this.browserWindow.__uspapi("getUSPData", 1, function(e, t) {
                        if (!t) return n.logger.log("[CMP-V2]: Failed retrieving USP data use default instead"), i({
                            applies: !0,
                            privacyString: "1---"
                        });
                        i({
                            applies: !0,
                            privacyString: e.uspString
                        })
                    })) : i({
                        applies: !1
                    })) : this.browserWindow.__uspapi("uspPing", 1, function(e, t) {
                        t && e.mode.includes("USP") && e.jurisdiction.includes(e.location.toUpperCase()) ? (n.logger.log("[CMP-V2]: CCPA Region"), n.browserWindow.__uspapi("setUspDftData", 1, function(e, t) {
                            n.logger.log("[CMP-V2]: Setting up data for USP API", JSON.stringify(e), t), n.browserWindow.__uspapi("getUSPData", 1, function(e, t) {
                                if (!t) return n.logger.log("[CMP-V2]: Failed retrieving USP data use default instead"), i({
                                    applies: !0,
                                    privacyString: "1---"
                                });
                                i({
                                    applies: !0,
                                    privacyString: e.uspString
                                })
                            })
                        })) : i({
                            applies: !1
                        })
                    })
                }
            }, {
                key: "setGDPRConsentPrompt",
                value: function() {
                    var e = this;
                    this.consentUIPrompt.setup("Privacy Settings", function() {
                        e.browserWindow.__tcfapi("displayConsentUi", 2, function() {
                            return e.logger.log("[CMP-V2]: GDPR Consent UI displayed")
                        })
                    })
                }
            }, {
                key: "setCCPAConsentPrompt",
                value: function() {
                    var e = this;
                    this.consentUIPrompt.setup("Do Not Sell My Data", function() {
                        e.browserWindow.__uspapi("displayUspUi")
                    })
                }
            }, {
                key: "cmpLoaded",
                value: function(t) {
                    var i = !1;
                    setTimeout(function() {
                        if (!i) return t(!1)
                    }, 1e3), this.browserWindow.__tcfapi("ping", 2, function(e) {
                        return i = !0, e && e.cmpLoaded ? t(!0) : t(!1)
                    })
                }
            }, {
                key: "getConsentData",
                value: function(i) {
                    var n = this;
                    this.browserWindow.__tcfapi("getTCData", 2, function(e, t) {
                        return n.callCount++, t && e ? h(e.gdprApplies) || "loading" === (null == (t = null == e ? void 0 : e.cmpStatus) ? void 0 : t.toLowerCase()) ? i({
                            dataAvailable: !0,
                            gdprApplies: void 0,
                            cmpStatus: null == e ? void 0 : e.cmpStatus,
                            eventStatus: null == e ? void 0 : e.eventStatus
                        }) : !1 === e.gdprApplies ? i({
                            dataAvailable: !0,
                            gdprApplies: !1,
                            cmpStatus: null == e ? void 0 : e.cmpStatus,
                            eventStatus: null == e ? void 0 : e.eventStatus
                        }) : !0 === e.gdprApplies ? n.handleGdprApplies(e, i) : void n.logger.warn("[CMP-V2]: Unexpected gdprApplies status. Data: ".concat(JSON.stringify(e))) : i({
                            dataAvailable: !1,
                            cmpStatus: null == e ? void 0 : e.cmpStatus,
                            eventStatus: null == e ? void 0 : e.eventStatus
                        })
                    })
                }
            }, {
                key: "handleGdprApplies",
                value: function(e, t) {
                    var i, n, r, o, s = e.eventStatus.toLowerCase();
                    return "useractioncomplete" === s || "tcloaded" === s ? (i = (null == (i = null == (i = e.purpose) ? void 0 : i.consents) ? void 0 : i[2]) || (null == (i = e.purposeConsents) ? void 0 : i[2]), n = (null == (n = null == (n = e.purpose) ? void 0 : n.consents) ? void 0 : n[3]) || (null == (n = e.purposeConsents) ? void 0 : n[3]), r = !h(i), o = !h(n), o = (r = r && o) && i && n, this.logger.debug("[CMP-V2]: Purposes available: ".concat(r, ", Consent: ").concat(o, " Data: ").concat(JSON.stringify(e))), t({
                        dataAvailable: !0,
                        gdprChoiceReceived: !0,
                        personalisedAdsConsent: o,
                        gdprApplies: !0,
                        cmpStatus: null == e ? void 0 : e.cmpStatus,
                        eventStatus: null == e ? void 0 : e.eventStatus
                    })) : ("cmpuishown" === s || this.callCount % 8 == 0 && this.logger.warn("[CMP-V2]: Unexpected eventStatus. Data: ".concat(JSON.stringify(e))), t({
                        dataAvailable: !0,
                        gdprChoiceReceived: !1,
                        gdprApplies: !0,
                        cmpStatus: null == e ? void 0 : e.cmpStatus,
                        eventStatus: null == e ? void 0 : e.eventStatus
                    }))
                }
            }, {
                key: "createUspStub",
                value: function() {
                    function e() {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        n.warn("[CMP-V2] USP is still in stub mode. Calling to ".concat(t[0], " API will be unsuccessful")), "function" == typeof t[2] && t[2](void 0, !1)
                    }
                    var t, i = this,
                        n = this.logger,
                        r = this.browserWindow;
                    void 0 === r.__uspapi && (r.__uspapi = e, t = setInterval(function() {
                        i.uspTries++, r.__uspapi !== e ? (n.debug("[CMP-V2]: USP stub function has been replaced"), clearInterval(t)) : i.uspTries < i.uspTriesLimit ? n.debug("[CMP-V2]: USP stub function has NOT been replaced, will retry") : (n.warn("[CMP-V2]: USP stub function has NOT been replaced, but the timeout has been reached"), clearInterval(t))
                    }, 300))
                }
            }]), n
        }(),
        Vn = function() {
            function a(e, t, i, n, r, o, s) {
                l(this, a), this.logger = t, this.reporter = i, this.stubFunctionsGenerator = n, this.consentUIPrompt = r, this.componentStateStore = o, this.settings = s, this.cmpLoadCounter = 0, this.dialogShown = !1, this.browserWindow = e
            }
            return g(a, [{
                key: "enable",
                value: function() {
                    this.componentStateStore.updateState("cmp", he(this.reporter.getElapsedTime())), this.generateStubs(), this.loadVersion()
                }
            }, {
                key: "generateStubs",
                value: function() {
                    this.stubFunctionsGenerator.generate()
                }
            }, {
                key: "loadVersion",
                value: function() {
                    this.reporter.setStateStatus("cmp_load_wait_start"), this.logger.info("[CMP]: Wait for CMP to load"), this.checkForVersion2()
                }
            }, {
                key: "versionLoader",
                value: function(e) {
                    var t = this,
                        i = e.found,
                        e = e.versionNumber;
                    p(this.version) ? this.logger.warn("[CMP]: Version already loaded: ".concat(e)) : i ? 2 === e ? (this.reporter.setStateStatus("cmp_load_wait_finish"), this.reporter.reportCmpLoadFinish(), this.logger.debug("[CMP]: Loaded version ".concat(e)), this.version = new jn(this.logger, this.browserWindow, this.consentUIPrompt), this.handleCmpLoaded()) : (this.logger.warn("[CMP]: Version ".concat(e, " is not supported, disabling personalisation")), this.setDetermination("none", !0, !0)) : (++this.cmpLoadCounter % 10 == 0 && this.logger.debug("[CMP] Waiting for load"), setTimeout(function() {
                        return t.checkForVersion2()
                    }, 50))
                }
            }, {
                key: "checkForVersion2",
                value: function() {
                    var n = this;
                    this.browserWindow.__tcfapi("ping", null, function(e, t) {
                        var i = e.cmpLoaded;
                        i && n.browserWindow.Cookiebot && !n.browserWindow.Cookiebot.userCountry && (n.logger.log("[CMP]: CookieBot ping response when no user country: ".concat(t, " - ").concat(JSON.stringify(e))), i = !1), n.versionLoader({
                            found: i,
                            versionNumber: 2
                        })
                    })
                }
            }, {
                key: "checkForCCPA",
                value: function(e) {
                    var t;
                    null != (t = this.version) && t.checkForCCPA(e)
                }
            }, {
                key: "cmpLoaded",
                value: function(e) {
                    if (!p(this.version)) return e(!1);
                    this.version.cmpLoaded(e)
                }
            }, {
                key: "getConsentData",
                value: function(e) {
                    var t;
                    null != (t = this.version) && t.getConsentData(e)
                }
            }, {
                key: "setGDPRConsentPrompt",
                value: function() {
                    var e;
                    null != (e = this.version) && e.setGDPRConsentPrompt()
                }
            }, {
                key: "setCCPAConsentPrompt",
                value: function() {
                    var e;
                    null != (e = this.version) && e.setCCPAConsentPrompt()
                }
            }, {
                key: "setNonPrivacyRegionsPrompt",
                value: function() {
                    this.consentUIPrompt.setup("You are outside the CCPA jurisdiction.")
                }
            }, {
                key: "handleGdprNotApplies",
                value: function() {
                    var i, n = this,
                        r = (this.logger.info("[CMP]: GDPR does not apply"), !1);
                    setTimeout(function() {
                        r || (r = !0, n.reporter.setStateStatus("cmp_check_for_ccpa_timeout"), n.logger.warn("[CMP]: USP API is not responding, continue as if not in CCPA region"), n.setDetermination("none", !0, !0))
                    }, 2e3), this.reporter.setStateStatus("cmp_check_for_ccpa_start"), this.checkForCCPA(function(e) {
                        var t = e.applies,
                            e = e.privacyString;
                        r ? n.logger.warn("[CMP]: Got CCPA response, but timeout already reached") : (r = !0, n.reporter.setStateStatus("cmp_check_for_ccpa_finish"), t ? (n.setCCPAConsentPrompt(), i = "Y" === (null == e ? void 0 : e[2].toUpperCase()), n.logger.info("[CMP]: CCPA applies. disablePersonalisation: ".concat(i)), n.setDetermination("ccpa", !i, !1)) : (n.logger.info("[CMP]: Not in CCPA region, continue with personalisation"), n.setNonPrivacyRegionsPrompt(), n.setDetermination("none", !0, !1)))
                    })
                }
            }, {
                key: "handleGdprApplies",
                value: function() {
                    var r, o, s = this,
                        a = (this.logger.log("[CMP]: GDPR applies, checking if personalisation is allowed"), this.reporter.setStateStatus("cmp_gdpr_choice_wait_start"), this.setGDPRConsentPrompt(), !1);
                    this.getConsentData(function(e) {
                        var t = e.gdprChoiceReceived,
                            e = e.personalisedAdsConsent;
                        t && (a = !0, s.reporter.setStateStatus("cmp_gdpr_choice_wait_finish"), s.logger.info("[CMP]: GDPR decision received via short-circuit. Allow personalisation: ".concat(e)), s.setDetermination("gdpr", e, !1))
                    }), a || (this.dialogShown = !0, this.reporter.setStateStatus("cmp_prompt_shown"), r = 0, o = setInterval(function() {
                        s.getConsentData(function(e) {
                            var t = e.gdprChoiceReceived,
                                i = e.personalisedAdsConsent,
                                n = e.cmpStatus,
                                e = e.eventStatus;
                            t ? (a = !0, s.reporter.setStateStatus("cmp_gdpr_choice_wait_finish"), s.logger.info("[CMP]: GDPR decision received. Allow personalisation: ".concat(i)), clearInterval(o), s.setDetermination("gdpr", i, !1)) : ++r % 10 == 0 && s.logger.info("[CMP]: Waiting for GDPR personalisation choice. cmpStatus: ".concat(n, ", eventStatus: ").concat(e))
                        })
                    }, 100))
                }
            }, {
                key: "handleCmpLoaded",
                value: function() {
                    function r(e) {
                        o.reporter.setStateStatus("cmp_gdpr_applies_check_finish"), !1 === e ? o.handleGdprNotApplies() : o.settings.isRequestGdprPersonalisation() ? o.handleGdprApplies() : (o.reporter.setStateStatus("cmp_gdpr_choice_wait_finish"), o.logger.info("[CMP]: The GDPR applies, but we will assume they do not allow personalisation"), o.setDetermination("gdpr", !1, !1))
                    }
                    var o = this;
                    this.logger.info("[CMP]: Checking if the GDPR applies"), this.reporter.setStateStatus("cmp_gdpr_applies_check_start");
                    this.getConsentData(function(e) {
                        var t, i, n, e = e.gdprApplies;
                        h(e) ? (t = 0, o.logger.debug("[CMP]: Setting a check interval of ".concat(250, "ms")), i = !1, n = setInterval(function() {
                            o.getConsentData(function(e) {
                                e = e.gdprApplies;
                                h(e) ? t++ % 4 == 0 && o.logger.info("[CMP]: Waiting for GDPR determination") : (clearInterval(n), i || (i = !0, r(e)))
                            })
                        }, 250)) : (o.logger.debug("[CMP]: GDPR status already available, processing immediately"), r(e))
                    })
                }
            }, {
                key: "setDetermination",
                value: function(e, t, i) {
                    var n = this.componentStateStore.state.cmp._tag;
                    "gdpr" === e && this.reporter.reportCmpGdprDetermined(), "loading" == n ? (e = {
                        jurisdiction: e,
                        timeout: i,
                        allowPersonalisation: t,
                        dialogShown: this.dialogShown
                    }, this.logger.info("[CMP]: Determination: ".concat(JSON.stringify(e))), i = this.reporter.getElapsedTime(), this.componentStateStore.updateState("cmp", pe(this.componentStateStore.state.cmp, i, e))) : this.logger.error("[CMP]: CMP in unexpected state: ".concat(n))
                }
            }]), a
        }(),
        Hn = function() {
            function n(e) {
                var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "div[data-fuse-privacy-tool]",
                    i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "fuse-privacy-tool";
                l(this, n), this.browserWindow = e, this.domSelector = t, this.elementId = i
            }
            return g(n, [{
                key: "setup",
                value: function(e, t) {
                    var i, n = this.browserWindow.document.querySelector(this.domSelector);
                    n && (t ? ((i = document.createElement("a")).href = "javascript:void(0)", i.id = this.elementId, i.innerHTML = e, i.addEventListener("click", t), n.appendChild(i)) : n.textContent = e)
                }
            }]), n
        }(),
        qn = function() {
            function i(e, t) {
                l(this, i), this.logger = e, this.tcData = {
                    cmpStatus: "loaded",
                    eventStatus: "tcloaded",
                    tcfPolicyVersion: 2,
                    cmpVersion: 44,
                    cmpId: 10
                }, this._listenerId = 1, this.browserWindow = t, this.allowedOrigin = t.document.referrer ? new URL(t.document.referrer).origin : ""
            }
            return g(i, [{
                key: "load",
                value: function() {
                    var o = this;
                    this.browserWindow.__tcfapi = function(e, t, i, n) {
                        switch (e) {
                            case "ping":
                                return o._handlePing(i);
                            case "getTCData":
                                return o._handleGetTCData(i);
                            case "addEventListener":
                                o.logger.log("[CMP]: Add Event Listener command does nothing. Listener ID: ".concat(o._listenerId));
                                var r = Object.assign(Object.assign({}, o.tcData), {
                                    listenerId: o._listenerId
                                });
                                return o._listenerId++, i(r, !0);
                            case "removeEventListener":
                                return o.logger.log("[CMP]: Remove Event Listener command does nothing. Listener ID: ".concat(n)), i(Object.assign({}, o.tcData), !0);
                            default:
                                return o.logger.log("[CMP]: Unsupported command: ".concat(e)), i({}, !1)
                        }
                    }, this.browserWindow.addEventListener("message", function(e) {
                        o.allowedOrigin && e.origin !== o.allowedOrigin ? o.logger.log("[CMP]: Ignoring message from origin ".concat(e.origin)) : "set-tc-data" === e.data.type ? o.tcData = Object.assign({}, e.data.data) : o.logger.log("[CMP]: unknown iframe message: ".concat(null == (e = e.data) ? void 0 : e.type))
                    })
                }
            }, {
                key: "_handlePing",
                value: function(e) {
                    e({
                        cmpLoaded: !0,
                        cmpStatus: this.tcData.cmpStatus,
                        cmpVersion: this.tcData.cmpVersion,
                        displayStatus: "disabled",
                        apiVersion: "2",
                        cmpId: this.tcData.cmpId,
                        gdprApplies: this.tcData.gdprApplies
                    })
                }
            }, {
                key: "_handleGetTCData",
                value: function(e) {
                    e(Object.assign({}, this.tcData), !0)
                }
            }]), i
        }(),
        Zn = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getStubFunctionsGenerator",
                value: function() {
                    return this.stubFunctionsGenerator || (this.stubFunctionsGenerator = new Wn(f.getLogger(), f.getBrowserWindowObject())), this.stubFunctionsGenerator
                }
            }, {
                key: "getConsentManager",
                value: function() {
                    return this.consentManager || (this.consentManager = new Vn(f.getBrowserWindowObject(), f.getLogger(), y.getReporter(), this.getStubFunctionsGenerator(), new Hn(f.getBrowserWindowObject()), y.getComponentStatusStore(), S)), this.consentManager
                }
            }, {
                key: "getCmpProviderLoader",
                value: function() {
                    return this.cmpProviderLoader || (this.cmpProviderLoader = new Fn(f.getLogger(), f.getBrowserWindowObject(), y.getReporter())), this.cmpProviderLoader
                }
            }, {
                key: "getIframeCmpManager",
                value: function() {
                    return this.iframeCmpManager || (this.iframeCmpManager = new qn(f.getLogger(), f.getBrowserWindowObject())), this.iframeCmpManager
                }
            }]), e
        }()),
        Qn = function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "code",
                value: function() {
                    return "1---"
                }
            }]), e
        }(),
        Jn = function() {
            function d(e, t, i, n, r, o, s, a) {
                l(this, d), this.pubId = e, this.adServer = t, this.logger = i, this.browserWindow = n, this.consentManager = r, this.reporter = o, this.gptPushFn = s, this.sco = a
            }
            return g(d, [{
                key: "loadAmazonUam",
                value: function(i, n, e, t, r, o) {
                    var s;

                    function a(e, t) {
                        n[i]._Q.push([e, t])
                    }
                    n[i] || (n[i] = {
                        init: function() {
                            a("i", arguments)
                        },
                        fetchBids: function() {
                            a("f", arguments)
                        },
                        setDisplayBids: function() {},
                        targetingKeys: function() {
                            return []
                        },
                        _Q: []
                    }, (s = e.createElement(t)).async = !0, s.src = r, "function" == typeof o && (s.readyState ? s.onreadystatechange = function() {
                        "loaded" !== s.readyState && "complete" !== s.readyState || (s.onreadystatechange = null, o())
                    } : s.onload = function() {
                        o()
                    }), (r = e.getElementsByTagName(t)[0]).parentNode.insertBefore(s, r))
                }
            }, {
                key: "load",
                value: function(e, t) {
                    var i = this;
                    if (this.logger.debug("[UAM]: Loading script"), this.reporter.setStateStatus("uam_script_load_start"), this.loadAmazonUam("apstag", this.browserWindow, this.browserWindow.document, "script", "//c.amazon-adsystem.com/aax2/apstag.js", function() {
                            i.reporter.setStateStatus("uam_script_load_finish"), i.init(e, t)
                        }), !this.browserWindow.apstag) return this.logger.error("[INIT]: UAM script load failed.")
                }
            }, {
                key: "init",
                value: function(e, t) {
                    var i = this;
                    this.reporter.setStateStatus("uam_initialise_start"), this.browserWindow.apstag.init(this.getUamConfig(e), function() {
                        i.logger.info("[UAM]: Initialisation finished"), i.reporter.setStateStatus("uam_initialise_finish"), t()
                    })
                }
            }, {
                key: "getUamConfig",
                value: function(e) {
                    var t = {};
                    return e || (t.gdpr = {
                        cmpTimeout: 0
                    }), !h(this.sco) && Object.getOwnPropertyNames(this.sco).length && (t.schain = {
                        ver: "1.0",
                        complete: 1,
                        nodes: [{
                            asi: this.sco.asi,
                            sid: this.sco.sellerId,
                            hp: 1
                        }]
                    }), Object.assign({
                        pubID: this.pubId,
                        adServer: this.adServer
                    }, t)
                }
            }, {
                key: "makeBids",
                value: function(e, t) {
                    var i = this;
                    this.browserWindow.apstag.fetchBids({
                        slots: e
                    }, function(e) {
                        i.gptPushFn(function() {
                            i.browserWindow.apstag.setDisplayBids(), t(e)
                        })
                    })
                }
            }]), d
        }(),
        Yn = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getCcpaPrivacyStringCoder",
                value: function() {
                    return new Qn
                }
            }, {
                key: "getUamAdServer",
                value: function() {
                    return "googletag"
                }
            }, {
                key: "getSco",
                value: function() {
                    return S.getSco()
                }
            }, {
                key: "getUam",
                value: function() {
                    return this.uam || (this.uam = new Jn(S.getUamSettings().pubID, Yn.getUamAdServer(), f.getLogger(), f.getBrowserWindowObject(), Zn.getConsentManager(), y.getReporter(), C, Yn.getSco())), this.uam
                }
            }]), e
        }());
    var T, A, Kn = function() {
            function o(e, t, i, n, r) {
                l(this, o), this.logger = e, this.settings = t, this.viewportInfo = i, this.isLowDwellPage = n, this.componentStateStore = r, this.auctionCounter = 0
            }
            return g(o, [{
                key: "plan",
                value: function(e, t) {
                    var i = "".concat(++this.auctionCounter),
                        n = this.viewportInfo.getCurrentBreakpoint().name,
                        r = this.settings.getHbTimeout(n),
                        o = this.isLowDwellPage(),
                        s = this.settings.isUamEnabledAtBP(n),
                        a = this.settings.isPrebidEnabledAtBP(n),
                        d = (s || a || this.logger.debug("[PLANNER][".concat(i, "]: Headerbidding is not configured at breakpoint ").concat(n)), this.getMaxOffset(t)),
                        t = this.settings.getAuctionMaxSlots(),
                        e = this.sortSlotsByViewport(i, e).filter(function(e) {
                            return e.zoneDiv.getBoundingClientRect().top < d
                        }).slice(0, t),
                        t = e.filter(function(e) {
                            return e.allowHeaderBidding
                        }),
                        c = 0 < t.length;
                    return {
                        auctionId: i,
                        usePrebid: !o && this.isUsePrebid(a, i, c),
                        useUam: !o && this.isUseUam(s, i, c),
                        hbTimeout: r,
                        hbSlots: t,
                        breakpointName: n,
                        slots: e
                    }
                }
            }, {
                key: "sortSlotsByViewport",
                value: function(e, t) {
                    var t = t.sort(function(e, t) {
                            e = e.zoneDiv.getBoundingClientRect(), t = t.zoneDiv.getBoundingClientRect();
                            return e.top - t.top
                        }),
                        i = t.map(function(e) {
                            return e.slotDivId
                        });
                    return this.logger.debug("[PLANNER][".concat(e, "]: Slot priority order: ").concat(JSON.stringify(i))), t
                }
            }, {
                key: "getMaxOffset",
                value: function(e) {
                    var t = this.viewportInfo.getViewportStatus(),
                        i = t.offset,
                        t = t.innerHeight;
                    return e ? i.y + t + t * e : 1 / 0
                }
            }, {
                key: "isUseUam",
                value: function(e, t, i) {
                    var n = "ready" === this.componentStateStore.state.uam._tag;
                    return e && !n ? this.logger.info("[AUCTION][".concat(t, "]: UAM has not finished loading and will be excluded from the auction")) : e && !i && this.logger.debug("[AUCTION][".concat(t, "]: UAM has been excluded from the auction because no headerbidding slots are enabled")), e && n && i
                }
            }, {
                key: "isUsePrebid",
                value: function(e, t, i) {
                    var n = "ready" === this.componentStateStore.state.prebid._tag;
                    return e && !n ? this.logger.info("[AUCTION][".concat(t, "]: Prebid has not finished loading and will be excluded from the auction")) : e && !i && this.logger.debug("[AUCTION][".concat(t, "]: Prebid has been excluded from the auction because no headerbidding slots are enabled")), e && n && i
                }
            }]), o
        }(),
        Xn = ((e = T = T || {}).GPT_REQUEST = "GPT_REQUEST", e.GPT_RESPONSE = "GPT_RESPONSE", e.GPT_RENDERED = "GPT_RENDERED", e.GPT_LOADED = "GPT_LOADED", e.CANCELLED = "CANCELLED", e.SUPERSEDED = "SUPERSEDED", (e = A = A || {})[e.PREBID_REQUEST = 0] = "PREBID_REQUEST", e[e.PREBID_RESPONSE = 1] = "PREBID_RESPONSE", e[e.PREBID_SKIPPED = 2] = "PREBID_SKIPPED", e[e.UAM_REQUEST = 3] = "UAM_REQUEST", e[e.UAM_RESPONSE = 4] = "UAM_RESPONSE", e[e.UAM_SKIPPED = 5] = "UAM_SKIPPED", e[e.GPT_REQUEST = 6] = "GPT_REQUEST", e[e.CANCELLED = 7] = "CANCELLED", function() {
            function i(e, t) {
                l(this, i), this.logger = e, this.reporter = t, this.auctions = {}, this.activeGptCalls = {}
            }
            return g(i, [{
                key: "createNewAuction",
                value: function(e, t, i) {
                    this.auctions[e.auctionId] = {
                        started: this.reporter.getElapsedTime(),
                        creativeDivIds: e.slots.map(function(e) {
                            return e.slotDivId
                        }),
                        slotNames: e.slots.map(function(e) {
                            return e.slotTemplate.slot
                        }),
                        hbDivIds: e.hbSlots.map(function(e) {
                            return e.slotDivId
                        }),
                        uamIncluded: e.useUam,
                        uamResponded: !1,
                        uamSkipped: !1,
                        prebidIncluded: e.usePrebid,
                        prebidResponded: !1,
                        prebidSkipped: !1,
                        uamCancelled: !1,
                        prebidCancelled: !1,
                        gptRequestSent: !1,
                        auctionPhaseCallback: t,
                        slotStatus: e.slots.reduce(function(e, t) {
                            return Object.assign(Object.assign({}, e), N({}, t.slotDivId, {
                                slotPhaseCallback: function(e) {
                                    return i(t, e)
                                }
                            }))
                        }, {})
                    }
                }
            }, {
                key: "getAuctionStatus",
                value: function(e) {
                    return this.auctions[e]
                }
            }, {
                key: "getActiveGptCalls",
                value: function() {
                    return Object.keys(this.activeGptCalls)
                }
            }, {
                key: "getSlotStatus",
                value: function(e, t) {
                    return this.auctions[e].slotStatus[t]
                }
            }, {
                key: "getSlotStatusInferredAuction",
                value: function(e, t) {
                    var i = this.activeGptCalls[e];
                    if (i) return this.auctions[i].slotStatus[e];
                    this.logger.debug("[AUCTION-STATUS][".concat(t, "]: Could not find active GPT call for ").concat(e))
                }
            }, {
                key: "onPrebidRequest",
                value: function(e) {
                    e = this.auctions[e];
                    e.prebidRequestTime = this.reporter.getElapsedTime(), e.auctionPhaseCallback(A.PREBID_REQUEST)
                }
            }, {
                key: "onPrebidResponse",
                value: function(e) {
                    e = this.auctions[e];
                    e.prebidResponseTime = this.reporter.getElapsedTime(), e.prebidResponded = !0, e.auctionPhaseCallback(A.PREBID_RESPONSE)
                }
            }, {
                key: "onPrebidSkipped",
                value: function(e) {
                    e = this.auctions[e];
                    e.prebidSkipped = !0, e.auctionPhaseCallback(A.PREBID_SKIPPED)
                }
            }, {
                key: "onUamRequest",
                value: function(e) {
                    e = this.auctions[e];
                    e.uamRequestTime = this.reporter.getElapsedTime(), e.auctionPhaseCallback(A.UAM_REQUEST)
                }
            }, {
                key: "onUamSkipped",
                value: function(e) {
                    e = this.auctions[e];
                    e.uamSkipped = !0, e.auctionPhaseCallback(A.UAM_SKIPPED)
                }
            }, {
                key: "onUamResponse",
                value: function(e) {
                    e = this.auctions[e];
                    e.uamResponseTime = this.reporter.getElapsedTime(), e.uamResponded = !0, e.auctionPhaseCallback(A.UAM_RESPONSE)
                }
            }, {
                key: "cancelAuction",
                value: function(e) {
                    e = this.auctions[e];
                    e.cancelled = this.reporter.getElapsedTime(), e.auctionPhaseCallback(A.CANCELLED)
                }
            }, {
                key: "removeFromGptActive",
                value: function(e) {
                    var t = this.activeGptCalls[e];
                    t ? (this.logger.debug("[AUCTION][".concat(t, "]: Removed ").concat(e, " from GPT active list")), delete this.activeGptCalls[e]) : this.logger.debug("[AUCTION]: Could not find ".concat(e, " in the GPT active list"))
                }
            }, {
                key: "onGptRequest",
                value: function(i, e) {
                    var n = this;
                    e.forEach(function(e) {
                        var t = n.getSlotStatus(i, e);
                        t && (t.gptRequestTime = n.reporter.getElapsedTime(), t.slotPhaseCallback(T.GPT_REQUEST), (t = n.activeGptCalls[e]) && (n.logger.warn("[AUCTION][".concat(i, "]: ").concat(e, " is part of an uncompleted auction: ").concat(t, " and is marked superseded")), n.auctions[t].slotStatus[e].supersededTime = n.reporter.getElapsedTime(), n.auctions[t].slotStatus[e].slotPhaseCallback(T.SUPERSEDED)), n.activeGptCalls[e] = i)
                    }), this.auctions[i].gptRequestSent = !0, this.auctions[i].auctionPhaseCallback(A.GPT_REQUEST)
                }
            }, {
                key: "onGptResponse",
                value: function(e) {
                    e = this.getSlotStatusInferredAuction(e, T.GPT_RESPONSE);
                    e && (e.gptResponseTime = this.reporter.getElapsedTime(), e.slotPhaseCallback(T.GPT_RESPONSE))
                }
            }, {
                key: "onGptSlotRendered",
                value: function(e, t) {
                    var i = this.getSlotStatusInferredAuction(e, T.GPT_RENDERED);
                    i && (i.gptOnRenderTime = this.reporter.getElapsedTime(), t || this.removeFromGptActive(e), i.slotPhaseCallback(T.GPT_RENDERED))
                }
            }, {
                key: "onGptSlotLoaded",
                value: function(e) {
                    var t = this.getSlotStatusInferredAuction(e, T.GPT_LOADED);
                    t && (t.gptOnLoadTime = this.reporter.getElapsedTime(), this.removeFromGptActive(e), t.slotPhaseCallback(T.GPT_LOADED))
                }
            }, {
                key: "cancelSlotAuction",
                value: function(e, t, i) {
                    this.logger.info("[AUCTION][".concat(e, "]: Cancelled auction for ").concat(t, " because ").concat(i));
                    i = this.getSlotStatus(e, t);
                    i && (i.cancelledTime = this.reporter.getElapsedTime(), this.removeFromGptActive(t), i.slotPhaseCallback(T.CANCELLED))
                }
            }, {
                key: "getAuctions",
                value: function() {
                    return this.auctions
                }
            }]), i
        }()),
        $n = function(e) {
            return Array.isArray(e) ? "fluid" !== e[0] : "fluid" !== e
        },
        er = function(e) {
            return e.filter($n)
        };

    function tr(e, t, i) {
        function n(e) {
            if (e.includes("px")) return e = Number(e.split("px")[0]), Number.isNaN(e) ? void 0 : e
        }
        var r = n(e.getComputedStyle(t).maxWidth),
            o = n(e.getComputedStyle(t).maxHeight);
        return i.filter(function(e) {
            return !$n(e) || !p(r) || e[0] <= r
        }).filter(function(e) {
            return !$n(e) || !p(o) || e[1] <= o
        })
    }
    var ir = function() {
            function c(e, t, i, n, r, o, s, a) {
                var d = this;
                l(this, c), this.fuseSlotRegistry = e, this.prebidGlobal = t, this.uam = i, this.logger = n, this.reporter = r, this.settings = o, this.events = s, this.telemetry = a, this.firstPrebidRequest = !1, this.firstUamRequest = !1, this.firstPrebidResponse = !1, this.firstUamResponse = !1, this.auctionState = new Xn(n, r), m.onSlotLoaded.subscribe(function(e) {
                    d.reportOnLoadEvent(e)
                }), m.onSlotResponse.subscribe(function(e) {
                    d.reportSlotResponseReceived(e)
                }), m.onSlotRender.subscribe(function(e) {
                    d.reportOnRenderEndedEvent(e)
                })
            }
            return g(c, [{
                key: "sendGptRequest",
                value: function(e, t) {
                    var i = this,
                        n = this.fuseSlotRegistry.filterUndeleted(e, function(e) {
                            i.auctionState.cancelSlotAuction(t, e, "slot DOM element was deleted")
                        });
                    this.auctionState.onGptRequest(t, e), this.fuseSlotRegistry.clearFuseSkins(), di(this.fuseSlotRegistry.getSlots(n), t)
                }
            }, {
                key: "handleHBResponse",
                value: function(e, t, i) {
                    var n, r, o = this.auctionState.getAuctionStatus(e);
                    o.gptRequestSent ? t && this.logger.debug("[AUCTION][".concat(e, "]: Received ").concat(t, " bid after adserver request already sent")) : (n = o.prebidIncluded, r = o.uamIncluded, i ? (this.logger.info("[AUCTION][".concat(e, "]: Timeout reached with missing responses, sending to GPT.\n          Status: ").concat(JSON.stringify(o))), this.sendGptRequest(o.creativeDivIds, e)) : r && n ? (o.uamResponded || o.uamCancelled) && (o.prebidResponded || o.prebidCancelled) ? (this.logger.info("[AUCTION][".concat(e, "]: All necessary responses received, sending to GPT")), this.sendGptRequest(o.creativeDivIds, e)) : this.logger.debug("[AUCTION][".concat(e, "]: Still waiting for responses. Status: ").concat(JSON.stringify(o))) : (this.logger.debug("[AUCTION][".concat(e, "]: ").concat(t, " complete, calling GPT")), this.sendGptRequest(o.creativeDivIds, e)))
                }
            }, {
                key: "setAuctionTimeout",
                value: function(e, t) {
                    var i = this,
                        e = e + 250;
                    this.logger.debug("[AUCTION][".concat(t, "]: Set auction failure timeout of ").concat(e)), setTimeout(function() {
                        return i.handleHBResponse(t, null, !0)
                    }, e)
                }
            }, {
                key: "startPrebidAuction",
                value: function(o, s, e) {
                    var a, d = this,
                        t = JSON.stringify(s);
                    this.reporter.addAdEvent("prebid_request_".concat(t), {
                        auctionId: o
                    }), this.logger.info("[AUCTION][".concat(o, "]: Requesting prebid for: ").concat(t)), 0 < s.length ? (this.firstPrebidRequest || (this.firstPrebidRequest = !0, this.reporter.setStateStatus("first_prebid_request")), (a = this.prebidGlobal).requestBids({
                        auctionId: o,
                        adUnitCodes: s,
                        timeout: e,
                        bidsBackHandler: function(t, e) {
                            d.auctionState.onPrebidResponse(o);
                            var r, i = Object.keys(t);
                            if (d.logger.info("[AUCTION][".concat(o, "]: Prebid auction complete. Any-bidder-timeout?=").concat(e, ". Responding slots: ").concat(JSON.stringify(i))), 0 < i.length) {
                                if (d.logger.debug("[AUCTION][".concat(o, "]: Prebid response details: ").concat(JSON.stringify(t))), d.telemetry)
                                    for (var n in t) ! function(i) {
                                        var n, e = d.fuseSlotRegistry.getSlot(i);
                                        null != (r = null == e ? void 0 : e.sizesHb) && r.length && (n = Se(e.sizesHb), t[i].bids.forEach(function(e) {
                                            var t;
                                            (e.width > n[0] || e.height > n[1]) && (d.logger.debug("[AUCTION][".concat(o, "][").concat(i, "]: Received a rogue bid ").concat(e.width, "x").concat(e.height, "  with mismatch maxArea ").concat(n, " from ").concat(e.bidder, ": ").concat(JSON.stringify(e))), null != (t = d.telemetry)) && t.recordRogueBidderResponse(i, e, n)
                                        }))
                                    }(n)
                            } else d.logger.warn("[AUCTION][".concat(o, "]: No bid responses received from prebid"));
                            d.reporter.addAdEvent("prebid_response_".concat(JSON.stringify(i)), {
                                auctionId: o
                            }), d.firstPrebidResponse || (d.firstPrebidResponse = !0, d.reporter.setStateStatus("first_prebid_response"));
                            try {
                                a.setTargetingForGPTAsync(s), d.handleHBResponse(o, "prebid", !1)
                            } catch (e) {
                                d.logger.error("[AUCTION][".concat(o, "]: ").concat(e.message, " ").concat(e.stack))
                            }
                        }
                    })) : (this.logger.warn("[AUCTION][".concat(o, "]: Skipped prebid call because no eligible slots available")), this.auctionState.onPrebidSkipped(o))
                }
            }, {
                key: "startUamAuction",
                value: function(t, e) {
                    var i, n = this;
                    e.length ? (i = JSON.stringify(e.map(function(e) {
                        return e.slotID
                    })), this.reporter.addAdEvent("uam_request_".concat(i), {
                        auctionId: t
                    }), this.logger.info("[AUCTION][".concat(t, "]: Sending UAM request for ").concat(i)), this.logger.debug("[AUCTION][".concat(t, "]: Sending UAM request with slot details: ").concat(JSON.stringify(e))), this.firstUamRequest || (this.firstUamRequest = !0, this.reporter.setStateStatus("first_uam_request")), this.uam.makeBids(e, function(e) {
                        n.logger.info("[AUCTION][".concat(t, "]: Received UAM response")), n.logger.debug("[AUCTION][".concat(t, "]: UAM response details: "), JSON.stringify(e)), n.reporter.addAdEvent("uam_response_".concat(i), {
                            auctionId: t
                        }), n.firstUamResponse || (n.firstUamResponse = !0, n.reporter.setStateStatus("first_uam_response")), n.auctionState.onUamResponse(t), n.handleHBResponse(t, "uam", !1)
                    })) : (this.logger.warn("[AUCTION][".concat(t, "]: Skipped UAM bid because no UAM slots found")), this.auctionState.onUamSkipped(t))
                }
            }, {
                key: "startGptOnlyAuction",
                value: function(e, t) {
                    this.logger.debug("[AUCTION][".concat(e, "]: Starting GPT-only auction")), this.sendGptRequest(t, e)
                }
            }, {
                key: "prepareUamRequest",
                value: function(e, t) {
                    return t.map(function(e) {
                        return {
                            slotID: e.slotDivId,
                            slotName: e.slotTemplate.slot,
                            sizes: e.sizesHb
                        }
                    })
                }
            }, {
                key: "executeAuction",
                value: function(e, t, i) {
                    var n, r = this,
                        o = (this.events.onAuctionEvent.emit(Object.assign({
                            auctionEventType: "started"
                        }, e)), e.auctionId),
                        s = e.slots.map(function(e) {
                            return e.slotDivId
                        });
                    this.auctionState.createNewAuction(e, t, i), this.logger.log("[AUCTION][".concat(o, "]: Running with plan: ").concat((t = {
                        auctionId: (t = e).auctionId,
                        usePrebid: t.usePrebid,
                        useUam: t.useUam,
                        hbSlots: t.hbSlots.map(function(e) {
                            return e.slotDivId
                        }),
                        gptSlots: t.slots.map(function(e) {
                            return e.slotDivId
                        }),
                        gpids: t.slots.map(function(e) {
                            return e.gpid
                        }),
                        hbTimeout: t.hbTimeout,
                        breakpointName: t.breakpointName
                    }, JSON.stringify(t)))), this.settings.isYandexEnabled() ? (n = this.settings.getYandexBlockId()) ? (this.logger.log("[AUCTION][".concat(o, "]: Run Yandex with blockId ").concat(n)), window.yaContextCb.push(function() {
                        e.slots.forEach(function(e) {
                            var t = e.slotDivId,
                                e = e.slotTemplate.id,
                                e = Number(e.substring(7) + t.substring(t.lastIndexOf("-") + 1));
                            r.logger.log("[AUCTION][".concat(o, "][").concat(t, "]: Set pageNumber ").concat(e)), Ya.Context.AdvManager.render({
                                renderTo: "".concat(t),
                                blockId: n,
                                pageNumber: e,
                                onRender: function() {
                                    r.reporter.setStateStatus("yandex_unit_rendered")
                                }
                            })
                        })
                    })) : this.logger.error("[AUCTION][".concat(o, "]: Cannot run Yandex cause yandexBlockId is not set")) : (e.usePrebid && (i = e.hbSlots.map(function(e) {
                        return e.slotDivId
                    }), this.startPrebidAuction(o, i, e.hbTimeout)), e.useUam && (t = this.prepareUamRequest(o, e.hbSlots), this.startUamAuction(o, t)), i = e.usePrebid && !this.auctionState.getAuctionStatus(o).prebidCancelled, t = e.useUam && !this.auctionState.getAuctionStatus(o).uamCancelled, i || t ? (this.reporter.reportHbAuctionStart(), this.setAuctionTimeout(e.hbTimeout, o)) : this.startGptOnlyAuction(o, s))
                }
            }, {
                key: "reportOnLoadEvent",
                value: function(e) {
                    e = e.slot.getSlotElementId();
                    this.auctionState.onGptSlotLoaded(e)
                }
            }, {
                key: "reportSlotResponseReceived",
                value: function(e) {
                    e = e.slot.getSlotElementId();
                    this.auctionState.onGptResponse(e)
                }
            }, {
                key: "reportOnRenderEndedEvent",
                value: function(e) {
                    var t, i = !e.isEmpty,
                        n = e.slot.getSlotElementId(),
                        r = (this.logger.debug("[AUCTION]: ".concat(n, " render event details: ").concat(JSON.stringify(e))), this.fuseSlotRegistry.getSlot(n));
                    r ? (i ? this.logger.info("[AUCTION]: Adserver responded with creative for ".concat(n)) : (t = {
                        fuseSlotId: r.slotTemplate.id,
                        fuseSlotCode: n,
                        errorType: "MISSING_CREATIVE"
                    }, this.reporter.addSlotProblem(t), this.logger.warn("[AUCTION]: Adserver responded without creative for ".concat(n))), this.telemetry && r.sizes && (t = Se(r.sizes.filter(function(e) {
                        return $n(e)
                    })), 2 === (null == (r = Array.isArray(e.size) ? e.size : null) ? void 0 : r.length)) && (r[1] > t[0] || r[1] > t[1]) && (50 < ye(r[0], t[0]) || 50 < ye(r[1], t[1])) && (this.logger.debug("[AUCTION][".concat(n, "]: Received a rogue bid ").concat(r, "  with mismatch maxArea ").concat(t, " from adx: ").concat(JSON.stringify(e))), null != (r = this.telemetry)) && r.recordRogueAdxResponse(n, e, t), this.auctionState.onGptSlotRendered(n, i)) : this.fuseSlotRegistry.isDeletedSlot(n) ? (this.logger.info("[AUCTION]: Slot Render Ended Event fired for deleted unit ".concat(n)), this.auctionState.onGptSlotRendered(n, i)) : this.logger.debug("[AUCTION]: SlotRenderEnded Event fired for non fuse units: ".concat(n, ". HasCreative: ").concat(i))
                }
            }, {
                key: "getStateView",
                value: function() {
                    return this.auctionState
                }
            }]), c
        }(),
        nr = function() {
            function a(e, t, i, n, r, o, s) {
                l(this, a), this.logger = e, this.browserWindow = t, this.executeAuction = i, this.planAuction = n, this.isDeletedSlot = r, this.getCurrentBreakpointName = o, this.settings = s, this.refreshTimers = {}, this.refreshCounts = {}, this.scheduledRefresh = {}, this.disabledSlots = [], this.queuedSlots = [], this.triggeredAuctions = {}, this.auctionBlockSlots = [], this.auctionBlockTimeoutHandle = null, this.auctionBlockTriggered = null, this.anyAuctionExecuted = !1
            }
            return g(a, [{
                key: "queueSlots",
                value: function(e) {
                    var t, i = this,
                        n = this.getCurrentBreakpointName(),
                        e = e.filter(function(e) {
                            return i.settings.isSlotEnabledForBreakpoint(e.slotTemplate.id, n) ? e.currentlyActive ? i.isScheduled(e) ? (i.logger.debug("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because it is already scheduled")), !1) : !i.isRefreshDisabled(e.slotDivId) || (i.logger.debug("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because it is disabled")), !1) : (i.logger.info("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because it is hasn't activated")), !1) : (i.logger.debug("[SCHEDULER]: Skipped ".concat(e.slotDivId, " because no sizes mapped at the current breakpoint (").concat(n, ")")), !1)
                        });
                    0 < e.length && (t = e.map(function(e) {
                        return e.slotDivId
                    }), this.logger.info("[SCHEDULER]: Added ".concat(t, " to auction queue")), e.forEach(function(e) {
                        return i.queuedSlots.push(e)
                    }))
                }
            }, {
                key: "isScheduled",
                value: function(t) {
                    return 0 < this.queuedSlots.filter(function(e) {
                        return e.slotDivId === t.slotDivId
                    }).length
                }
            }, {
                key: "isTemplateScheduled",
                value: function(t) {
                    return 0 < this.queuedSlots.filter(function(e) {
                        return e.slotTemplate.id === t
                    }).length
                }
            }, {
                key: "isRefreshDisabled",
                value: function(t) {
                    return 0 < this.disabledSlots.filter(function(e) {
                        return e === t
                    }).length
                }
            }, {
                key: "purgeDeletedFromQueue",
                value: function() {
                    var t = this;
                    this.queuedSlots = this.queuedSlots.filter(function(e) {
                        return !t.isDeletedSlot(e.slotDivId) || (t.logger.info("[SCHEDULER]: Removed deleted slot ".concat(e.slotDivId, " from queue")), !1)
                    })
                }
            }, {
                key: "runAuction",
                value: function() {
                    if (this.purgeDeletedFromQueue(), 0 === this.queuedSlots.length) return this.logger.log("[SCHEDULER]: Auction will not run because no slots are queued"), [];
                    var e, t = this.getMissingAuctionBlockSlots();
                    if (0 < t.length) {
                        if (this.auctionBlockTimeoutHandle) return e = this.queuedSlots.map(function(e) {
                            return e.slotDivId
                        }), this.logger.info("[SCHEDULER] Deferred the auction for ".concat(JSON.stringify(e), " because slots missing from the auction block: ").concat(JSON.stringify(t))), this.auctionBlockTriggered = !0, []
                    } else this.auctionBlockTimeoutHandle && (this.logger.info("[SCHEDULER]: Auction block cleared, as requirements satisfied "), this.clearAuctionBlock());
                    var i = this.planAuction(this.queuedSlots, this.getAuctionMaxViewports());
                    return this.queuedSlots = this.queuedSlots.filter(function(e) {
                        return -1 === i.slots.indexOf(e)
                    }), this.logger.log("[SCHEDULER]: Starting auction with ".concat(i.slots.length, " slots, ").concat(this.queuedSlots.length, " slots remaining")), this.startAuction(i), i.slots.map(function(e) {
                        return e.slotDivId
                    })
                }
            }, {
                key: "forceRunAuction",
                value: function(e) {
                    var t = this.planAuction([e]);
                    this.logger.log("[SCHEDULER][".concat(t.auctionId, "]: Forcing auction for ").concat(e.slotDivId)), this.startAuction(t)
                }
            }, {
                key: "disableSlotRefresh",
                value: function(t) {
                    this.disabledSlots = this.disabledSlots.filter(function(e) {
                        return e !== t
                    }).concat(t)
                }
            }, {
                key: "enableSlotRefresh",
                value: function(t) {
                    this.disabledSlots = this.disabledSlots.filter(function(e) {
                        return e !== t
                    })
                }
            }, {
                key: "getAuctionMaxViewports",
                value: function() {
                    return this.isAnyAuctionExecuted() ? void 0 : this.settings.getMaxViewportsFirstAuction()
                }
            }, {
                key: "handleOnSlotOutcome",
                value: function(e, t, i) {
                    i !== T.GPT_LOADED || this.triggeredAuctions[e] || (this.triggeredAuctions[e] = !0, 0 < this.queuedSlots.length && (this.logger.debug("[SCHEDULER][".concat(e, "]: The first slot has received a render event, initiating the next auction")), this.runAuction())), i !== T.GPT_LOADED && i !== T.GPT_RENDERED || this.scheduleRefreshTimer(t)
                }
            }, {
                key: "startAuction",
                value: function(i) {
                    var n = this;
                    this.anyAuctionExecuted = !0, this.executeAuction(i, function() {}, function(e, t) {
                        return n.handleOnSlotOutcome(i.auctionId, e, t)
                    })
                }
            }, {
                key: "scheduleRefreshTimer",
                value: function(e) {
                    this.scheduledRefresh[e.slotDivId] || (this.scheduledRefresh[e.slotDivId] = !0, this.setRefreshTimer(e))
                }
            }, {
                key: "getRefreshIntervals",
                value: function() {
                    return JSON.parse(JSON.stringify(this.refreshTimers))
                }
            }, {
                key: "getRefreshingCodes",
                value: function() {
                    return Object.keys(this.refreshTimers)
                }
            }, {
                key: "clearRefreshIntervals",
                value: function() {
                    var t = this;
                    Object.keys(this.refreshTimers).forEach(function(e) {
                        t.logger.debug("[REFRESH]: Clearing refresh timer for ".concat(e)), clearInterval(t.refreshTimers[e])
                    }), this.refreshTimers = {}
                }
            }, {
                key: "reset",
                value: function() {
                    this.clearRefreshIntervals(), this.clearAuctionBlock(), this.refreshCounts = {}, this.scheduledRefresh = {}, this.queuedSlots = []
                }
            }, {
                key: "clearPendingAuctions",
                value: function() {
                    this.queuedSlots = []
                }
            }, {
                key: "setRefreshTimer",
                value: function(e) {
                    var t, i = e.slotTemplate.attributes.refresh,
                        n = e.slotDivId;
                    "number" == typeof(t = i) && t == t && 0 < i ? (this.logger.log("[SCHEDULER]: Setting custom refresh time of ".concat(i, " seconds for ").concat(n)), this.addRefreshInterval(e, i)) : 0 === i ? this.logger.log("[SCHEDULER]: No refresh timer set for ".concat(n)) : (t = this.settings.getDefaultRefreshInterval()) && 0 < t ? (this.logger.log("[SCHEDULER]: Setting default refresh time of ".concat(t, " seconds for ").concat(n)), this.addRefreshInterval(e, t)) : this.logger.debug("[SCHEDULER]: No default refresh timer exists in account settings.")
                }
            }, {
                key: "isSkipRefreshInEdgeBrowser",
                value: function(e) {
                    this.refreshCounts[e.slotDivId] = this.refreshCounts[e.slotDivId] || 0;
                    var t = this.refreshCounts[e.slotDivId] > this.settings.getEdgeHtmlMaxAdsRefreshLimit();
                    return (t || !this.browserWindow.document.hasFocus()) && (this.logger.log((t ? 'will skip refreshing ad(code: "'.concat(e.slotDivId, '") as it reached Edge browser ads refresh limit of ').concat(this.settings.getEdgeHtmlMaxAdsRefreshLimit(), " at the moment - ") : "will skip refreshing ad as browser page/tab is NOT active at the moment - ").concat((new Date).toISOString(), ".")), !0)
                }
            }, {
                key: "isSkipRefreshByCallback",
                value: function(t) {
                    try {
                        return !t.isAllowRefresh()
                    } catch (e) {
                        return this.logger.error("[SCHEDULER][".concat(t.slotDivId, "]: Refresh callback failed with ").concat(e)), !0
                    }
                }
            }, {
                key: "refreshCallback",
                value: function(e) {
                    ee.isEdgeBrowser(this.browserWindow) && this.isSkipRefreshInEdgeBrowser(e) || (this.isSkipRefreshByCallback(e) ? this.logger.log("[".concat(e.slotDivId, "] Refresh blocked by callback")) : this.browserWindow.document.getElementById(e.slotDivId) ? e.zoneDiv && e.isInView() ? (ee.isEdgeBrowser(this.browserWindow) && (this.refreshCounts[e.slotDivId] += 1), this.queueSlots([e]), this.runAuction()) : this.logger.debug("[SCHEDULER]: Not refreshing ".concat(e.slotDivId, " because it is not in view")) : this.logger.warn("[AUCTION]: Could not refresh ".concat(e.slotDivId, " because a div with that id was not found in the DOM")))
                }
            }, {
                key: "addRefreshInterval",
                value: function(e, t) {
                    var i = this;
                    this.refreshTimers[e.slotDivId] && (this.logger.warn("[SCHEDULER]: Refresh timer already set for ".concat(e.slotDivId)), clearInterval(this.refreshTimers[e.slotDivId])), this.refreshTimers[e.slotDivId] = setInterval(function() {
                        i.refreshCallback(e)
                    }, 1e3 * t)
                }
            }, {
                key: "setAuctionBlock",
                value: function(e, t) {
                    var i = this;
                    this.auctionBlockSlots = e.filter(function(e) {
                        var t = i.settings.getSlotTemplate(e);
                        return t ? t.activateCondition ? (i.logger.warn("[SLOTS][".concat(e, "]: Excluded from next-auction slot requirement, because the slot has an activation condition")), !1) : (t = i.getCurrentBreakpointName(), !!i.settings.isSlotEnabledForBreakpoint(e, t) || (i.logger.info("[SLOTS][".concat(e, "]: Excluded from next-auction slot requirement, because it is not enabled at the ").concat(t, " breakpoint")), !1)) : (i.logger.warn("[SLOTS][".concat(e, "]: Excluded from next-auction slot requirement, because the slot does not exist in this tag")), !1)
                    }), 0 < this.auctionBlockSlots.length ? (this.logger.info("[SCHEDULER]: Enabled auction block. Will not proceed until Zones with FuseIds ".concat(JSON.stringify(this.auctionBlockSlots), " are registered, or ").concat(t, "ms have elapsed")), this.auctionBlockTimeoutHandle = setTimeout(function() {
                        i.auctionBlockTriggered ? (i.logger.warn("[SCHEDULER]: Auction block timeout reached, missing: ".concat(JSON.stringify(i.getMissingAuctionBlockSlots()), ". Running deferred auction")), i.clearAuctionBlock(), i.runAuction()) : (0 < i.getMissingAuctionBlockSlots().length && i.logger.warn("[SCHEDULER]: Auction block timeout reached, missing: ".concat(i.getMissingAuctionBlockSlots())), i.clearAuctionBlock())
                    }, t)) : this.logger.info("[SCHEDULER]: Did not enable AuctionBlock, because no (valid) slots specified")
                }
            }, {
                key: "getMissingAuctionBlockSlots",
                value: function() {
                    var t = this;
                    return this.auctionBlockSlots.filter(function(e) {
                        return !t.isTemplateScheduled(e)
                    })
                }
            }, {
                key: "isAnyAuctionExecuted",
                value: function() {
                    return this.anyAuctionExecuted
                }
            }, {
                key: "clearAuctionBlock",
                value: function() {
                    this.auctionBlockSlots = [], this.auctionBlockTriggered = null, this.auctionBlockTimeoutHandle && clearTimeout(this.auctionBlockTimeoutHandle), this.auctionBlockTimeoutHandle = null
                }
            }]), a
        }(),
        rr = "data-fuse",
        or = "".concat("div", "[").concat(rr, "]"),
        sr = "data-fuse-reset-at",
        ar = function() {
            function a(e, t, i, n, r) {
                l(this, a), this.logger = e, this.document = t, this.templateSettings = i, this.fuseSlotFormatter = n, this.getElapsedTime = r, this.slotCounter = {}, this.zoneCounter = {}
            }
            return g(a, [{
                key: "prepareZoneDiv",
                value: function(e, t, i, n, r) {
                    return this.logger.debug("[SLOTS][".concat(e, ": Preparing the element")), n.setAttribute("data-fuse-code", "".concat(e)), n.setAttribute("data-fuse-zone-instance", "".concat(t)), n.setAttribute("data-fuse-slot", "".concat(e)), this.templateSettings.isGptPreAuctionEnabled() && n.setAttribute("data-gpid", i), n.setAttribute("data-fuse-processed-at", this.getElapsedTime().toString()), n.removeAttribute(sr), this.document.getElementById(e) ? this.logger.warn("[DOM-SCAN]: Found existing slot element with id ".concat(e)) : ((t = this.document.createElement("div")).setAttribute("id", "".concat(e)), t.classList.add("fuse-slot"), t.style.maxWidth = "inherit", t.style.maxHeight = "inherit", this.fuseSlotFormatter.format(n, r), this.templateSettings.isYandexEnabled() && this.fuseSlotFormatter.updateSlotForYandex(t, r), n.appendChild(t)), n
                }
            }, {
                key: "assignSlotDivId",
                value: function(e) {
                    return "fuse-slot-".concat(e, "-").concat(a.assignCounter(e, this.slotCounter))
                }
            }, {
                key: "assignZoneInstanceId",
                value: function(e) {
                    return "zone-instance-".concat(e, "-").concat(a.assignCounter(e, this.zoneCounter))
                }
            }, {
                key: "assignGpid",
                value: function(e, t, i) {
                    return "".concat(t, "#").concat(i, "-").concat(this.slotCounter[e])
                }
            }, {
                key: "processRawElement",
                value: function(e, t) {
                    var i = e.getAttribute(rr),
                        n = i ? this.templateSettings.getSlotTemplate(i) : null;
                    if (!i || !n) return this.logger.warn("[SLOTS]: Unknown FuseId ".concat(i)), null;
                    var r = e.getAttribute("data-fuse-code"),
                        o = e.getAttribute(sr),
                        s = null == (s = e.id) || !s.trim() || null == (s = e.id) ? void 0 : s.trim();
                    if (t) {
                        if (r && !o) return this.logger.debug("[SLOTS]: Skip ".concat(r, " because it was already processed")), null;
                        r && o && this.logger.debug("[SLOTS]: Processing ".concat(r, " again because it has been reset"))
                    } else r && this.logger.warn("[SLOTS]: Processing ".concat(r, " again. This is likely to be an error, but preserved for backwards compatibility"));
                    t = this.assignSlotDivId(i), o = this.assignZoneInstanceId(i), r = this.assignGpid(i, n.slot, "single");
                    return this.prepareZoneDiv(t, o, r, e, n), {
                        slotTemplate: n,
                        slotDivId: t,
                        zoneDiv: e,
                        zoneDivId: s,
                        zoneInstanceId: o,
                        gpid: r,
                        targeting: a.extractTargeting(e)
                    }
                }
            }, {
                key: "findElementWithDomId",
                value: function(e) {
                    var t = this.document.querySelectorAll("".concat("div", '[id="').concat(e, '"][').concat(rr, "]"));
                    return 0 == t.length ? this.logger.warn("[SLOTS]: No DOM element found with both id='".concat(e, "' AND a data-fuse attribute")) : 1 < t.length && this.logger.warn("[SLOTS]: Multiple DOM elements found with id '".concat(e, "'")), t
                }
            }, {
                key: "findAllFuseElements",
                value: function() {
                    return this.document.querySelectorAll(or)
                }
            }, {
                key: "findElementsWithTemplateId",
                value: function(e) {
                    return this.document.querySelectorAll("".concat("div", "[").concat(rr, '="').concat(e, '"]'))
                }
            }, {
                key: "processRawElements",
                value: function(e, t) {
                    var i = this,
                        n = [];
                    return e.forEach(function(e) {
                        e = i.processRawElement(e, t);
                        e && n.push(e)
                    }), n
                }
            }, {
                key: "processSlots",
                value: function(e) {
                    var t = this.findAllFuseElements();
                    return this.processRawElements(t, e)
                }
            }, {
                key: "processZoneWithDivId",
                value: function(e, t) {
                    e = this.findElementWithDomId(e), e = this.processRawElements(e, t);
                    return e[e.length - 1]
                }
            }, {
                key: "processLastSlotWithFuseId",
                value: function(e, t) {
                    e = this.findElementsWithTemplateId(e), e = this.processRawElements(e, t);
                    return e[e.length - 1]
                }
            }, {
                key: "processSlotsWithFuseId",
                value: function(e, t) {
                    e = this.findElementsWithTemplateId(e);
                    return this.processRawElements(e, t)
                }
            }], [{
                key: "assignCounter",
                value: function(e, t) {
                    return t[e] || (t[e] = 0), ++t[e]
                }
            }, {
                key: "getTargetingValue",
                value: function(e) {
                    return 0 < e.indexOf(",") ? e.split(",").map(function(e) {
                        return e.trim()
                    }).filter(function(e) {
                        return "" !== e
                    }) : e
                }
            }, {
                key: "extractTargeting",
                value: function(t) {
                    var e = t.getAttributeNames().filter(function(e) {
                            return "data-targeting-key" !== e && "data-targeting-value" !== e
                        }).filter(function(e) {
                            return 0 === e.indexOf("data-targeting-", 0)
                        }).map(function(e) {
                            return {
                                attributeKey: e,
                                targetingKey: e.replace("data-targeting-", "").trim()
                            }
                        }).map(function(e) {
                            return {
                                key: e.targetingKey,
                                value: t.getAttribute(e.attributeKey)
                            }
                        }).filter(function(e) {
                            var t = e.key,
                                e = e.value;
                            return t && t.length && e && e.length
                        }).map(function(e) {
                            var t = e.key,
                                e = e.value;
                            return {
                                key: t,
                                value: a.getTargetingValue(e)
                            }
                        }),
                        i = t.getAttribute("data-targeting-key"),
                        n = t.getAttribute("data-targeting-value");
                    return i && i.length && n && n.length && !e.some(function(e) {
                        return e.key === i
                    }) && e.push({
                        key: i,
                        value: a.getTargetingValue(n)
                    }), e
                }
            }]), a
        }(),
        dr = function() {
            function n(e, t, i) {
                l(this, n), this.logger = e, this.templateSettings = t, this.viewportInfo = i
            }
            return g(n, [{
                key: "logContext",
                value: function(e) {
                    return "[SLOT-FORMAT][".concat(e.id, "]:")
                }
            }, {
                key: "hasOverflow",
                value: function(e, i, n) {
                    for (var r = this, o = e.parentElement, s = ["hidden", "scroll", "auto"], t = ["overflow", "overflow-x", "overflow-y"]; o;) t.forEach(function(e) {
                        var t = r.viewportInfo.browserWindow.getComputedStyle(o)[e];
                        if (p(t) && -1 !== s.indexOf(t)) {
                            if (!n) return r.logger.debug("".concat(r.logContext(i), " Miniscroller was not applied. ").concat(e, ' on "').concat(o.id, " ").concat(o.className, '"')), !0;
                            o.style[e] = "visible", r.logger.debug("".concat(r.logContext(i), " Force miniscroller. Update ").concat(e, ' on "').concat(o.id, " ").concat(o.className, '"'))
                        }
                    }), o = o.parentElement;
                    return !1
                }
            }, {
                key: "hasHeight",
                value: function(e, t, i) {
                    var n = e,
                        r = this.viewportInfo.browserWindow.getComputedStyle(e),
                        o = r.height,
                        r = r.minHeight;
                    if (this.logger.debug("".concat(this.logContext(t), ' applying miniscroller on element with height "').concat(o, '" min-height: "').concat(r, '"')), -1 === ["0px", "auto"].indexOf(o)) {
                        if (!i) return this.logger.debug("".concat(this.logContext(t), " Miniscroller was not applied because of height ").concat(o, ' already set for element "').concat(e.id, '"')), !0;
                        this.logger.debug("".concat(this.logContext(t), ' Force miniscroller. Update height on "').concat(n.className, '"'))
                    }
                    return !1
                }
            }, {
                key: "format",
                value: function(e, t) {
                    var i = t.attributes;
                    !this.templateSettings.isMiniScrollersEnabled() || !1 === i.miniscroller || i.sticky || i.interscroller || i.interstitial || i.scrollToStick || this.hasHeight(e, t) || this.hasOverflow(e, t) || (this.logger.debug("".concat(this.logContext(t), ' Update slot element "').concat(e.id, '" to miniscroller')), this.updateSlotElementToMiniScroller(e, t))
                }
            }, {
                key: "updateSlotElementToMiniScroller",
                value: function(e, t) {
                    var i = this.viewportInfo.getCurrentBreakpoint().name,
                        t = (e.classList.add("fuse-slot-mini-scroller"), this.templateSettings.maxSlotHeightForBreakpoint(t, i));
                    e.style.minHeight = "".concat(t, "px")
                }
            }, {
                key: "updateSlotForYandex",
                value: function(e, t) {
                    var i = this.viewportInfo.getCurrentBreakpoint().name,
                        t = null == (t = t.sizeMapping) ? void 0 : t[i],
                        n = 0,
                        r = 0;
                    t && 0 < t.length && (t.forEach(function(e) {
                        "fluid" !== e && "fluid" !== e[0] && (Number(e[0]) > r && (r = Number(e[0])), Number(e[1]) > n) && (n = Number(e[1]))
                    }), e.style.width = "".concat(r, "px"), e.style.height = "".concat(n, "px"), e.style.margin = "auto")
                }
            }]), n
        }(),
        cr = function(e, t, i, n, r) {
            var o = e.top,
                s = e.bottom,
                a = e.left,
                d = e.right,
                c = e.width,
                e = e.height * r,
                c = c * r;
            return 0 <= o + e + n && 0 <= a + c && s - e - n <= i && d - c <= t
        };

    function ur(e, t, i, n) {
        t = t.getBoundingClientRect(), t = cr(t, e.width, e.innerHeight, n, i / 100);
        return !e.hidden && t
    }

    function lr() {
        br.debug("[QUEUE]: Cleared fuse queue with ".concat(vr(), " remaining items")), mr().splice(0, mr().length)
    }
    var gr = function() {
            function d(e, t, i, n, r, o, s, a) {
                l(this, d), this.logger = e, this.reporter = t, this.browserWindow = i, this.gptSlotRegistry = n, this.settings = r, this.conditionFactory = o, this.viewportInfo = s, this.events = a, this.DELETED_FUSE_DIVS = [], this.REGISTERED_SLOTS = {}, this.SLOT_ACTIVATOR = {}, this.slotInitialised = new mt(this.logger, "onSlotCreated"), this.slotsInitialised = new mt(this.logger, "onSlotsInitialised")
            }
            return g(d, [{
                key: "getZoneDivs",
                value: function() {
                    var t = this,
                        i = {};
                    return Object.keys(this.REGISTERED_SLOTS).forEach(function(e) {
                        e = t.REGISTERED_SLOTS[e];
                        i[e.slotDivId] = e.zoneDiv
                    }), i
                }
            }, {
                key: "getSlotTemplates",
                value: function() {
                    var t = this,
                        i = {};
                    return Object.keys(this.REGISTERED_SLOTS).forEach(function(e) {
                        e = t.REGISTERED_SLOTS[e];
                        i[e.slotDivId] = e.slotTemplate
                    }), i
                }
            }, {
                key: "getSlotsForTemplateId",
                value: function(t) {
                    var i = this;
                    return Object.keys(this.REGISTERED_SLOTS).filter(function(e) {
                        return i.REGISTERED_SLOTS[e].slotTemplate.id === t
                    }).map(function(e) {
                        return i.REGISTERED_SLOTS[e]
                    })
                }
            }, {
                key: "getActiveSlots",
                value: function() {
                    var t = this;
                    return Object.keys(this.REGISTERED_SLOTS).filter(function(e) {
                        return t.REGISTERED_SLOTS[e].currentlyActive
                    }).map(function(e) {
                        return t.REGISTERED_SLOTS[e]
                    })
                }
            }, {
                key: "getSlotInitObservable",
                value: function() {
                    return this.slotInitialised
                }
            }, {
                key: "getSlotsInitObservable",
                value: function() {
                    return this.slotsInitialised
                }
            }, {
                key: "isInDom",
                value: function(e) {
                    return p(window.document.getElementById(e))
                }
            }, {
                key: "isDeletedSlot",
                value: function(e) {
                    return -1 !== this.DELETED_FUSE_DIVS.indexOf(e)
                }
            }, {
                key: "filterUndeleted",
                value: function(e, i) {
                    var n = this;
                    return e.filter(function(e) {
                        var t = !n.isDeletedSlot(e);
                        return !t && i && i(e), t
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    var t = this,
                        i = (Object.keys(this.REGISTERED_SLOTS).forEach(function(e) {
                            t.isDeletedSlot(e) && t.logger.log("[EVENT]: resetSlots() unit already deleted ".concat(e)), t.DELETED_FUSE_DIVS.push(e)
                        }), this.getZoneDivs());
                    Object.keys(i).forEach(function(e) {
                        i[e].setAttribute(sr, t.reporter.getElapsedTime().toString())
                    }), Object.keys(this.SLOT_ACTIVATOR).forEach(function(e) {
                        t.SLOT_ACTIVATOR[e].destroy()
                    }), this.REGISTERED_SLOTS = {}, this.SLOT_ACTIVATOR = {}, this.clearFuseSkins()
                }
            }, {
                key: "registeredSlotConfig",
                value: function(i, e, n, t, r) {
                    var o = this;
                    return {
                        slotDivId: i,
                        zoneDiv: t,
                        zoneDivId: r,
                        zoneInstanceId: e,
                        slotTemplate: n,
                        slotTemplateId: n.id,
                        isInView: function() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                                t = n.attributes.interscroller ? o.browserWindow.document.querySelector(".publift-widget-".concat(n.id, "-container")) : o.browserWindow.document.getElementById(i);
                            return ur(o.viewportInfo.getViewportStatus(), t, 50, e)
                        },
                        isAllowRefresh: function() {
                            return !0
                        }
                    }
                }
            }, {
                key: "registerActiveSlot",
                value: function(e, t) {
                    e.currentlyActive = !0, this.enablePartners(e, t), this.events.onZoneEvent.emit({
                        zoneTemplateId: e.slotTemplate.id,
                        zoneDivId: e.zoneDivId,
                        zoneEventType: "registered",
                        instanceId: e.zoneInstanceId,
                        status: "active",
                        gpid: e.gpid
                    })
                }
            }, {
                key: "registerInactiveSlot",
                value: function(e, t) {
                    this.SLOT_ACTIVATOR[e.slotDivId] = t, this.events.onZoneEvent.emit({
                        zoneTemplateId: e.slotTemplate.id,
                        zoneDivId: e.zoneDivId,
                        zoneEventType: "registered",
                        instanceId: e.zoneInstanceId,
                        status: "inactive",
                        gpid: e.gpid
                    })
                }
            }, {
                key: "activateInactiveSlot",
                value: function(e, t, i) {
                    var n = e.slotDivId;
                    this.REGISTERED_SLOTS[n] && !0 === this.REGISTERED_SLOTS[n].currentlyActive ? this.logger.warn("[SLOTS][".concat(n, "]: Skipped activation because the slot was already activated")) : this.isInDom(n) ? (this.SLOT_ACTIVATOR[n].destroy(), e.currentlyActive = !0, this.enablePartners(e, t), this.events.onZoneEvent.emit({
                        zoneTemplateId: e.slotTemplate.id,
                        zoneDivId: e.zoneDivId,
                        zoneEventType: "activated",
                        instanceId: e.zoneInstanceId,
                        gpid: e.gpid
                    }), i([e])) : (this.logger.warn("[SLOTS][".concat(n, "]: Skipped activation because the slot was removed from the DOM")), this.deleteSlot(n))
                }
            }, {
                key: "enablePartners",
                value: function(e, t) {
                    this.enableGptAsync(e, t), e.allowHeaderBidding ? this.enablePrebidAsync(e) : this.logger.debug("[SLOTS][".concat(e.slotDivId, "]: Skip prebid registration because headerbidding not enabled"))
                }
            }, {
                key: "enablePrebidAsync",
                value: function(i) {
                    var n = this;
                    Ki.pushToPrebidQue(function() {
                        var e, t;
                        n.isDeletedSlot(i.slotDivId) ? n.logger.log("[SLOTS][".concat(i.slotDivId, "]: Skip prebid registration because div deleted")) : (t = Yi(e = i), E.debug("[PREBID][".concat(e.slotDivId, "]: Registered with mediaTypes: ").concat(JSON.stringify(t.mediaTypes))), _.addAdUnits(t))
                    })
                }
            }, {
                key: "enableGptAsync",
                value: function(r, o) {
                    var s = this;
                    C(function() {
                        var e, t, i, n;
                        s.isDeletedSlot(r.slotDivId) ? s.logger.log("[SLOTS][".concat(r.slotDivId, "]: Skip GPT registration because div deleted")) : (t = o, i = (e = r).slotTemplate.slot, (n = u.defineSlot(i, e.sizes, e.slotDivId)) ? (k.addAdEvent("register_gpt_slot_".concat(e.slotDivId), {
                            gpid: e.gpid
                        }), n.addService(u.pubads()), t.forEach(function(e) {
                            n.setTargeting(e.key, e.value)
                        })) : x.warn("[GPT]: googletag.defineSlot(".concat(i, ", ").concat(JSON.stringify(e.sizes), ", ").concat(e.slotDivId, ") returned null")), (t = n) && (s.gptSlotRegistry.add(r.slotTemplate.id, t), i = r.slotDivId, x.debug("[GPT]: googletag.display(".concat(i, ")")), u.display(i)))
                    })
                }
            }, {
                key: "deleteSlot",
                value: function(e) {
                    this.logger.debug("[SLOTS][".concat(e, "]: Deleting slot")), this.DELETED_FUSE_DIVS.push(e), delete this.REGISTERED_SLOTS[e], this.SLOT_ACTIVATOR[e].destroy(), delete this.SLOT_ACTIVATOR[e]
                }
            }, {
                key: "getSlot",
                value: function(e) {
                    return this.REGISTERED_SLOTS[e]
                }
            }, {
                key: "getSlotByZoneDivId",
                value: function(t) {
                    var i = this;
                    return this.REGISTERED_SLOTS[Object.keys(this.REGISTERED_SLOTS).find(function(e) {
                        return i.REGISTERED_SLOTS[e].zoneDivId === t
                    })]
                }
            }, {
                key: "getSlots",
                value: function(e) {
                    var t = this,
                        i = [];
                    return e.forEach(function(e) {
                        e = t.getSlot(e);
                        e && i.push(e)
                    }), i
                }
            }, {
                key: "buildActivator",
                value: function(e, t, i, n, r) {
                    var o = this;
                    return this.conditionFactory.buildActivator(t, e.slotDivId, i, function() {
                        return o.activateInactiveSlot(e, n, r)
                    })
                }
            }, {
                key: "registerFuseSlot",
                value: function(e, t, i, n, r, o, s, a, d, c) {
                    var u = this,
                        l = this.viewportInfo.getCurrentBreakpoint().name,
                        g = tr(this.browserWindow, t, null != (g = r.sizeMapping[l]) ? g : []),
                        h = 0 < g.length ? g : void 0,
                        g = 0 < (g = er(g = g)).length ? g : void 0,
                        i = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.registeredSlotConfig(e, i, r, t, n)), {
                            currentlyActive: !1,
                            storedAt: this.reporter.getElapsedTime(),
                            breakpoint: l,
                            sizes: h,
                            sizesHb: g,
                            allowHeaderBidding: p(g) && 0 < g.length && this.settings.isHeaderBiddingSlot(r)
                        }), r.mediaTypes && {
                            mediaTypes: r.mediaTypes
                        }), r.videoAttributes && {
                            prebidVideoConfig: r.videoAttributes
                        }), {
                            gpid: o
                        }), this.allowSlotRefreshCallback ? {
                            isAllowRefresh: function() {
                                return u.allowSlotRefreshCallback(e)
                            }
                        } : {});
                    return this.REGISTERED_SLOTS[e] = i, J(h) ? this.logger.info("[SLOTS][".concat(e, "]: Registered as inactive because no sizes available")) : (t = i, a ? (this.logger.info("[SLOTS][".concat(e, "]: Registering as active because it is forced")), this.registerActiveSlot(t, s)) : r.activateCondition ? (n = this.buildActivator(t, r.activateCondition, d, s, c)).checkCondition() ? (this.logger.info("[SLOTS][".concat(e, "]: Registering as active because conditions already satisfied")), this.registerActiveSlot(t, s)) : (this.logger.info("[SLOTS][".concat(e, "]: Registering as inactive and enabling triggers")), this.registerInactiveSlot(t, n), n.enableTriggers()) : (this.logger.log("[SLOTS][".concat(e, "]: Registering as active because no conditions defined")), this.registerActiveSlot(t, s)), this.slotInitialised.emit({})), i
                }
            }, {
                key: "register",
                value: function(e, t, i, n) {
                    var r = this,
                        e = e.map(function(e) {
                            return r.registerFuseSlot(e.slotDivId, e.zoneDiv, e.zoneInstanceId, e.zoneDivId, e.slotTemplate, e.gpid, e.targeting, i, t, n)
                        }).filter(p);
                    return this.logger.debug("[SLOTS]: Registered ".concat(e.length, " slots")), this.slotsInitialised.emit({}), e
                }
            }, {
                key: "clearFuseSkins",
                value: function() {
                    this.logger.debug("[DOM]: Clearing fuse skins");
                    for (var e = this.browserWindow.document.querySelectorAll("div.fuse-custom-skin"), t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t])
                }
            }, {
                key: "setAllowSlotRefreshCallback",
                value: function(e) {
                    this.allowSlotRefreshCallback = e, this.logger.debug("[SLOTS]: Registered setAllowSlotRefreshCallback")
                }
            }]), d
        }(),
        hr = function() {
            function d(e, t, i, n, r, o, s) {
                var a = this;
                l(this, d), this.fuseSlotRegistry = e, this.zoneRegistry = t, this.logger = i, this.auctionScheduler = n, this.settings = r, this.domProcessor = o, this.isTagInitialised = s, this.runAuctionFn = function(e) {
                    a.auctionScheduler.queueSlots(e), a.runAuction()
                }
            }
            return g(d, [{
                key: "registerAndQueue",
                value: function(e, t, i) {
                    e = this.domProcessor.processSlots(e), e = this.registerSlots(e, i, t), i = e.filter(function(e) {
                        return e.currentlyActive
                    });
                    return this.auctionScheduler.queueSlots(i), e
                }
            }, {
                key: "registerAndRunAuction",
                value: function(e, t, i) {
                    e = this.registerAndQueue(e, t, i);
                    return this.runAuction(), e
                }
            }, {
                key: "registerZoneAndQueue",
                value: function(e, t, i, n) {
                    e = this.domProcessor.processZoneWithDivId(e, t);
                    return e ? (null != (t = this.registerSlots([e], n, i)[0]) && t.currentlyActive && this.auctionScheduler.queueSlots([t]), t) : null
                }
            }, {
                key: "activateZone",
                value: function(e) {
                    this.zoneRegistry.activateZone(e)
                }
            }, {
                key: "registerAndQueueLastSlotWithFuseId",
                value: function(e, t, i, n) {
                    e = this.domProcessor.processLastSlotWithFuseId(e, t);
                    if (e) return (t = this.registerSlots([e], n, i)[0]) && t.currentlyActive && this.auctionScheduler.queueSlots([t]), t
                }
            }, {
                key: "registerSlots",
                value: function(e, t, i) {
                    var n = this;
                    return e.forEach(function(e) {
                        n.zoneRegistry.register(e)
                    }), this.fuseSlotRegistry.register(e, t, i, this.runAuctionFn)
                }
            }, {
                key: "registerAndQueueWithFuseId",
                value: function(e, t, i, n) {
                    e = this.domProcessor.processSlotsWithFuseId(e, t), t = this.registerSlots(e, n, i), e = t.filter(function(e) {
                        return e.currentlyActive
                    });
                    return this.auctionScheduler.queueSlots(e), t
                }
            }, {
                key: "runAuction",
                value: function() {
                    return this.isTagInitialised() ? this.auctionScheduler.runAuction() : (this.logger.info("[CONTROLLER] Deferred the auction start until the tag is initialised"), !1)
                }
            }, {
                key: "forceRunAuction",
                value: function(e) {
                    var t = this.fuseSlotRegistry.getSlot(e);
                    t ? this.auctionScheduler.forceRunAuction(t) : this.logger.warn("[CONTROLLER]: Could not force auction because slot ".concat(e, " not found"))
                }
            }, {
                key: "runAuctionAllActiveSlots",
                value: function() {
                    this.auctionScheduler.queueSlots(this.fuseSlotRegistry.getActiveSlots()), this.runAuction()
                }
            }, {
                key: "reset",
                value: function() {
                    this.logger.log("[CONTROLLER]: resetSlots()"), this.fuseSlotRegistry.reset(), this.auctionScheduler.reset(), this.zoneRegistry.reset()
                }
            }, {
                key: "clearRefreshIntervals",
                value: function() {
                    this.auctionScheduler.clearRefreshIntervals()
                }
            }, {
                key: "getRefreshIntervals",
                value: function() {
                    return this.auctionScheduler.getRefreshIntervals()
                }
            }, {
                key: "handleBreakpointChange",
                value: function() {
                    this.auctionScheduler.clearPendingAuctions(), this.auctionScheduler.clearAuctionBlock(), this.auctionScheduler.clearRefreshIntervals();
                    var e = this.fuseSlotRegistry.getActiveSlots();
                    this.auctionScheduler.queueSlots(e), this.auctionScheduler.runAuction()
                }
            }, {
                key: "loadSlots",
                value: function(e, t, i) {
                    e ? (i(), this.registerAndQueue(!1, !1, t), this.runAuction()) : (this.logger.warn("[CONTROLLER]: loadSlots() called during initialisation. Translating call to registerSlots() to avoid reset"), this.registerAndRunAuction(!0, !1, t))
                }
            }]), d
        }(),
        pr = function() {
            function n(e, t, i) {
                l(this, n), this.logger = e, this.reporter = t, this.zoneEventEmitter = i, this.DELETED_ZONES = [], this.REGISTERED_ZONES = {}, this.MANUAL_ACTIVATE_API = {}
            }
            return g(n, [{
                key: "register",
                value: function(e) {
                    var t = e.zoneInstanceId;
                    if (!this.REGISTERED_ZONES[t]) {
                        var i = e.zoneDivId ? this.findByDivId(e.zoneDivId) : void 0;
                        if (i) {
                            var n = i.zoneDiv,
                                i = i.zoneInstanceId;
                            if (i === t) return void this.logger.error("[ZONE][".concat(i, "]: Ignoring unexpected re-registration"));
                            this.logger.warn("[ZONE][".concat(i, "]: Div ").concat(n.id, " replaced in DOM without pageInit(). Registering ").concat(t)), this.DELETED_ZONES.push(i), delete this.REGISTERED_ZONES[i], delete this.MANUAL_ACTIVATE_API[i]
                        }
                        this.logger.info("[ZONE][".concat(t, "]: Registered with DivId ").concat(e.zoneDiv.id)), this.reporter.reportFirstZone();
                        n = {
                            zoneInstanceId: t,
                            zoneDiv: e.zoneDiv,
                            zoneDivId: e.zoneDivId,
                            zoneTemplateId: e.slotTemplate.id,
                            gpid: e.gpid
                        };
                        return this.REGISTERED_ZONES[t] = n
                    }
                    this.logger.error("[ZONE][".concat(t, "]: Already registered"))
                }
            }, {
                key: "isDeletedZone",
                value: function(e) {
                    return -1 !== this.DELETED_ZONES.indexOf(e)
                }
            }, {
                key: "findByDivId",
                value: function(t) {
                    var i = this;
                    return Object.keys(this.REGISTERED_ZONES).map(function(e) {
                        return i.REGISTERED_ZONES[e]
                    }).filter(function(e) {
                        return e.zoneDivId == t
                    }).shift()
                }
            }, {
                key: "activateZone",
                value: function(e) {
                    var t, i = this.findByDivId(e);
                    return i ? (t = i.zoneInstanceId, !this.MANUAL_ACTIVATE_API[t] && (this.MANUAL_ACTIVATE_API[t] = !0, this.zoneEventEmitter.emit({
                        zoneTemplateId: i.zoneTemplateId,
                        zoneDivId: i.zoneDivId,
                        zoneEventType: "activate_zone_api",
                        instanceId: i.zoneInstanceId,
                        gpid: i.gpid
                    }), !0)) : (this.logger.error("[ZONE][".concat(e, "]: Unknown zone")), !1)
                }
            }, {
                key: "isManuallyActivated",
                value: function(e) {
                    var t;
                    return this.REGISTERED_ZONES[e] ? null != (t = this.MANUAL_ACTIVATE_API[e]) && t : (this.logger.error("[ZONE][".concat(e, "]: Unknown zone")), !1)
                }
            }, {
                key: "getRegisteredZones",
                value: function() {
                    var t = this;
                    return Object.keys(this.REGISTERED_ZONES).map(function(e) {
                        return t.REGISTERED_ZONES[e]
                    })
                }
            }, {
                key: "reset",
                value: function() {
                    var t = this;
                    Object.keys(this.REGISTERED_ZONES).forEach(function(e) {
                        t.isDeletedZone(e) ? t.logger.debug("[EVENT]: resetSlots() unit already deleted ".concat(e)) : t.DELETED_ZONES.push(e)
                    }), this.MANUAL_ACTIVATE_API = {}, this.REGISTERED_ZONES = {}
                }
            }]), n
        }(),
        fr = !1,
        br = f.getLogger(),
        mr = function() {
            return f.getBrowserWindowObject().fusetag.que
        },
        vr = function() {
            return mr().length
        },
        Sr = function() {
            mr().push = function(e) {
                if ("function" == typeof e) try {
                    e.call()
                } catch (e) {
                    br.error("Error processing command :", e.message, e.stack)
                } else br.error("Commands written into fusetag.que.push must be wrapped in a function");
                return 0
            }
        };
    var yr = function() {
        function n(e, t) {
            var i = this;
            l(this, n), this.f = t, e.immediateOrOnce(function(e) {
                return i.f = e
            })
        }
        return g(n, [{
            key: "value",
            get: function() {
                return this.f
            }
        }, {
            key: "asSupplier",
            value: function() {
                var e = this;
                return function() {
                    return e.f
                }
            }
        }]), n
    }();

    function xr(e, t) {
        if (e && t) return e = new URL(e), t = new URL(t), e.hash = "", t.hash = "", e.toString() == t.toString()
    }
    var Ir = function() {
            function c(e, t, i, n, r, o, s, a) {
                var d = this;
                l(this, c), this.logger = e, this.initialUrl = t, this.resetPageFn = i, this.setAuctionBlockFn = n, this.setPageTargeting = r, this.events = o, this.currentBreakpoint = s, this.lowDwellPages = a, this.lastPageInitUrl = null, this.tagInitOnce = new yr(this.events.onTagInitComplete), this.events.onTagInitComplete.immediateOrOnce(function(e) {
                    d.emitPageInit(e.tagInitUrl, !0)
                })
            }
            return g(c, [{
                key: "reset",
                value: function() {
                    this.logger.info("[PAGE]: Resetting all page state"), this.resetPageFn(), this.emitPageReset()
                }
            }, {
                key: "handlePageInitCall",
                value: function(e, t, i) {
                    this.logger.info("[PAGE]: pageInit('".concat(e, "', ").concat(t, ", ").concat(JSON.stringify(i)));
                    var n, r = null === this.lastPageInitUrl,
                        o = p(this.tagInitOnce.value);
                    if (r)
                        if (o) {
                            if (xr(e, this.initialUrl)) return void this.logger.warn("[PAGE]: Ignored pageInit(), because URL unchanged since tag init");
                            this.logger.info("[PAGE]: First pageInit() call, and URL changed since tag init. Resetting."), this.reset(), n = !0
                        } else n = !1;
                    else {
                        if (xr(e, this.lastPageInitUrl)) return void this.logger.warn("[PAGE]: Ignored pageInit(), because URL unchanged since last pageInit call");
                        this.logger.info("[PAGE]: pageInit() called, and the URL has changed. Resetting."), n = !0, this.reset()
                    }
                    this.lastPageInitUrl = e, null != i && i.pageTargets && this.setPageTargeting(null == i ? void 0 : i.pageTargets), null != i && i.blockingFuseIds && this.setBlock(null != (r = null == i ? void 0 : i.blockingTimeout) ? r : 2e3, i.blockingFuseIds, n, t), o && this.emitPageInit(e, !1)
                }
            }, {
                key: "isPageInitCalled",
                value: function() {
                    return p(this.lastPageInitUrl)
                }
            }, {
                key: "isLowDwellUrl",
                value: function(t) {
                    return 0 < this.lowDwellPages.filter(function(e) {
                        e = t.match(e);
                        return e && 0 < e.length
                    }).length
                }
            }, {
                key: "emitPageInit",
                value: function(e, t) {
                    t = {
                        url: e,
                        isFirstPageInit: t,
                        isLowDwellPage: this.isLowDwellUrl(e),
                        breakpoint: this.currentBreakpoint().name
                    };
                    this.events.onPageInit.emit(t)
                }
            }, {
                key: "emitPageReset",
                value: function() {
                    this.events.onPageReset.emit({
                        breakpoint: this.currentBreakpoint().name
                    })
                }
            }, {
                key: "setBlock",
                value: function(e, t, i, n) {
                    i = i ? e : e - n;
                    i <= 0 ? this.logger.info("[PAGE][pageInit]: Skipped setting auction block, because there is no time left on the timeout") : (e = t.map(function(e) {
                        return "".concat(e)
                    }), this.setAuctionBlockFn(e, i))
                }
            }]), c
        }(),
        kr = function() {
            function u(e, t, i, n, r, o, s, a, d, c) {
                l(this, u), this.logger = e, this.settingsGlobal = t, this.slotsController = i, this.slotRegistry = n, this.zoneRegistry = r, this.auctionScheduler = o, this.insertConditionFactory = s, this.slotConditionFactory = a, this.events = d, this.viewportInfo = c, this.settings = new Cr(this.settingsGlobal)
            }
            return g(u, [{
                key: "getCurrentBreakpointName",
                value: function() {
                    return this.viewportInfo.getCurrentBreakpoint().name
                }
            }, {
                key: "getWindow",
                value: function() {
                    return this.viewportInfo.browserWindow
                }
            }, {
                key: "registerAll",
                value: function() {
                    this.logger.debug("[APIV3]: registerAll() started");
                    var e = this.slotsController.registerAndRunAuction(!0, !1, this);
                    this.logger.debug("[APIV3]: registerAll() finished, ".concat(e.length, " slots found"))
                }
            }, {
                key: "processNewSlots",
                value: function() {
                    this.registerAll()
                }
            }, {
                key: "registerZone",
                value: function(e) {
                    this.logger.debug("[APIV3]: registerZone('".concat(e, "') started"));
                    e = this.slotsController.registerZoneAndQueue(e, !0, !1, this);
                    return e && this.slotsController.runAuction(), e
                }
            }, {
                key: "queueZone",
                value: function(e) {
                    return this.logger.debug("[APIV3]: queueZone('".concat(e, "') started")), this.slotsController.registerZoneAndQueue(e, !0, !1, this)
                }
            }, {
                key: "runAuction",
                value: function() {
                    return this.logger.debug("[APIV3]: runAuction() started"), this.slotsController.runAuction()
                }
            }, {
                key: "disableRefreshByZone",
                value: function(e) {
                    return this.auctionScheduler.disableSlotRefresh(e)
                }
            }, {
                key: "enableRefreshByZone",
                value: function(e) {
                    return this.auctionScheduler.enableSlotRefresh(e)
                }
            }, {
                key: "getSlotsForTemplateId",
                value: function(e) {
                    return this.slotRegistry.getSlotsForTemplateId(e)
                }
            }]), u
        }(),
        Cr = function() {
            function t(e) {
                l(this, t), this.settings = e
            }
            return g(t, [{
                key: "getSlotTemplate",
                value: function(e) {
                    return this.settings.getSlotTemplate(e)
                }
            }, {
                key: "setDisableWidgetRenderer",
                value: function(e) {
                    this.settings.getV2CompatOverrides().disableWidgetsRenderer = e
                }
            }]), t
        }(),
        R = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "configureResponsive",
                value: function() {
                    var t = this,
                        i = new yr(m.onTagInitComplete);
                    m.onBreakpointChanged.subscribe(function(e) {
                        f.getLogger().info("[RESPONSIVE]: Switching page to breakpoint '".concat(e.name, "'")), t.resetAfterChangedBreakpoint(), p(i.value) ? t.getController().registerAndRunAuction(!0, !1, t.getApiV3()) : t.getController().registerAndQueue(!0, !1, t.getApiV3())
                    })
                }
            }, {
                key: "getAuctionExecutor",
                value: function() {
                    return this.auctionExecutor || (this.auctionExecutor = new ir(this.getFuseSlotRegistry(), Bi.getPrebidGlobal(), Yn.getUam(), f.getLogger(), y.getReporter(), S, m, S.getUseTelemetry() && y.getTelemetry())), this.auctionExecutor
                }
            }, {
                key: "getFuseSlotRegistry",
                value: function() {
                    return this.fuseSlotRegistry || (this.fuseSlotRegistry = new gr(f.getLogger(), y.getReporter(), f.getBrowserWindowObject(), on.getGptSlotRegistry(), S, Gn.getSlotConditionFactory(), o.getViewportInfo(), m)), this.fuseSlotRegistry
                }
            }, {
                key: "getZoneRegistry",
                value: function() {
                    return this.zoneRegistry || (this.zoneRegistry = new pr(f.getLogger(), y.getReporter(), m.onZoneEvent)), this.zoneRegistry
                }
            }, {
                key: "getAuctionScheduler",
                value: function() {
                    var i = this;
                    return this.auctionScheduler || (this.auctionScheduler = new nr(f.getLogger(), f.getBrowserWindowObject(), function() {
                        var e;
                        return (e = i.getAuctionExecutor()).executeAuction.apply(e, arguments)
                    }, function(e, t) {
                        return i.getAuctionPlanner().plan(e, t)
                    }, function(e) {
                        return i.getFuseSlotRegistry().isDeletedSlot(e)
                    }, function() {
                        return o.getViewportInfo().getCurrentBreakpoint().name
                    }, S)), this.auctionScheduler
                }
            }, {
                key: "getAuctionPlanner",
                value: function() {
                    return this.auctionPlanner || (this.auctionPlanner = new Kn(f.getLogger(), S, o.getViewportInfo(), function() {
                        return an.getInitManager().isLowDwellPage()
                    }, y.getComponentStatusStore())), this.auctionPlanner
                }
            }, {
                key: "getController",
                value: function() {
                    return this.controller || (this.controller = new hr(this.getFuseSlotRegistry(), this.getZoneRegistry(), f.getLogger(), this.getAuctionScheduler(), S, this.getDomProcessor(), function() {
                        return an.getInitManager().isTagInitialised()
                    })), this.controller
                }
            }, {
                key: "getDomProcessor",
                value: function() {
                    return this.domProcessor || (this.domProcessor = new ar(f.getLogger(), f.getBrowserWindowObject().document, S, this.getFuseSlotFormatter(), function() {
                        return y.getReporter().getElapsedTime()
                    })), this.domProcessor
                }
            }, {
                key: "getFuseSlotFormatter",
                value: function() {
                    return this.fuseSlotFormatter || (this.fuseSlotFormatter = new dr(f.getLogger(), S, o.getViewportInfo())), this.fuseSlotFormatter
                }
            }, {
                key: "getPageManager",
                value: function() {
                    var e = this;
                    return this.pageManager || (this.pageManager = new Ir(f.getLogger(), f.getBrowserWindowObject().location.href, function() {
                        return e.resetPage()
                    }, function() {
                        return R.getAuctionScheduler().isAnyAuctionExecuted()
                    }, function(e) {
                        e.forEach(function(e) {
                            return ln(e.key, e.value)
                        })
                    }, m, o.getViewportInfo().breakpointSupplier(), S.getLowDwellPages())), this.pageManager
                }
            }, {
                key: "resetAfterChangedBreakpoint",
                value: function() {
                    on.getGptSlotRegistry().purgeAll(), Ki.reset(), this.getController().reset()
                }
            }, {
                key: "resetPage",
                value: function() {
                    un(), lr(), gi(), Qt = {}, Zt = {}, on.getGptSlotRegistry().purgeAll(), Ki.reset(), R.getController().reset(), un(), lr()
                }
            }, {
                key: "getApiV3",
                value: function() {
                    return this.apiV3 || (this.apiV3 = new kr(f.getLogger(), S, this.getController(), this.getFuseSlotRegistry(), this.getZoneRegistry(), this.getAuctionScheduler(), Gn.getInsertConditionFactory(), Gn.getSlotConditionFactory(), m, o.getViewportInfo())), this.apiV3
                }
            }]), e
        }()),
        wr = function() {
            function r(e, t, i, n) {
                l(this, r), this.logger = e, this.settings = t, this.insertFactory = i, this.apiV3 = n, this._hasInterstitial = !1
            }
            return g(r, [{
                key: "hasInterstitial",
                get: function() {
                    return this._hasInterstitial
                }
            }, {
                key: "initInterstitial",
                value: function() {
                    var e, t, i = this;
                    this._hasInterstitial ? this.logger.log("[INTERSTITIAL]: Already present") : (this.logger.info("[INTERSTITIAL]: Initialising"), null != (e = this.getInterstitialSlot()) && e.injectConditionConfig ? (t = this.insertFactory.buildActivator(e.injectConditionConfig, e.id, this.apiV3, function() {
                        i.setInterstitialSlot(e)
                    })).checkCondition() ? this.setInterstitialSlot(e) : t.enableTriggers() : e && this.setInterstitialSlot(e))
                }
            }, {
                key: "clearInterstitial",
                value: function() {
                    var t, e;
                    this._hasInterstitial ? (this.logger.info("[INTERSTITIAL]: Clearing"), (e = this.getInterstitialSlot()) && (t = e.slot, e = u.pubads().getSlots().filter(function(e) {
                        return e.getOutOfPage() && t === e.getAdUnitPath()
                    }), bi(e), this._hasInterstitial = !1)) : this.logger.log("[INTERSTITIAL]: No interstitial to clear")
                }
            }, {
                key: "getInterstitialSlot",
                value: function() {
                    return this.settings.getFuseSlots().find(function(e) {
                        e = e.attributes;
                        return !0 === (null == e ? void 0 : e.interstitial)
                    })
                }
            }, {
                key: "setInterstitialSlot",
                value: function(e) {
                    (e = u.defineOutOfPageSlot(e.slot, u.enums.OutOfPageFormat.INTERSTITIAL)) ? (e.addService(u.pubads()), u.enableServices(), u.display(e), li(), x.info("[GPT]: Requesting interstitial refresh for ".concat(e.getSlotElementId())), u.pubads().refresh([e])) : x.warn("setInterstitialSlot(): googletag.defineOutOfPageSlot returned undefined"), this._hasInterstitial = !0
                }
            }]), r
        }(),
        Er = function() {
            function n(e, t, i) {
                l(this, n), this.slot = e, this.logger = t, this.viewportInfo = i, this.incrementalCounter = 0
            }
            return g(n, [{
                key: "getZoneDivId",
                value: function() {
                    return "fuse-injected-".concat(this.slot.id, "-").concat(++this.incrementalCounter)
                }
            }, {
                key: "createSlotElement",
                value: function() {
                    return this.toHTML('<div id="'.concat(this.getZoneDivId(), '" data-fuse="').concat(this.slot.id, '" data-fuse-injected-at="').concat((new Date).getTime(), '" class="fuse-slot-').concat(this.type, '"></div>'))
                }
            }, {
                key: "toHTML",
                value: function(e) {
                    var t = document.createElement("div");
                    return t.innerHTML = e, t.firstElementChild
                }
            }, {
                key: "getSlotNonFluidSizes",
                value: function() {
                    var e, t = this.viewportInfo.getCurrentBreakpoint().name;
                    return null == (e = null == (e = this.slot.sizeMapping) ? void 0 : e[t]) ? void 0 : e.filter(function(e) {
                        return "fluid" !== e
                    })
                }
            }, {
                key: "getSlotMaxNonFluidHeight",
                value: function() {
                    var e = this.getSlotNonFluidSizes(),
                        e = e ? e.map(function(e) {
                            return Number(e[1])
                        }) : [];
                    return e.length ? Math.max.apply(Math, s(e)) : 0
                }
            }, {
                key: "getSlotMaxNonFluidWidth",
                value: function() {
                    var e = this.getSlotNonFluidSizes(),
                        e = e ? e.map(function(e) {
                            return Number(e[0])
                        }) : [];
                    return e.length ? Math.max.apply(Math, s(e)) : 0
                }
            }, {
                key: "getLogContext",
                value: function() {
                    return "[".concat(this.type, "][").concat(this.slot.id, "]:")
                }
            }, {
                key: "getClassName",
                value: function() {
                    return "publift-widget-".concat(this.slot.id)
                }
            }, {
                key: "getContainerElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName(), "-container"))
                }
            }, {
                key: "getStylesElement",
                value: function() {
                    return document.querySelector("#".concat(this.getClassName(), "-styles"))
                }
            }, {
                key: "getWidgetElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName()))
                }
            }]), n
        }(),
        _r = function() {
            U(c, Er);
            var d = j(c);

            function c(e, t, i, n, r, o) {
                var s, a = !(6 < arguments.length && void 0 !== arguments[6]) || arguments[6];
                return l(this, c), (s = d.call(this, e, t, i)).slot = e, s.logger = t, s.viewportInfo = i, s.registerAdRendered = n, s.apiV3 = r, s.onShowCloseCallback = o, s.waitForCreative = a, s.loadingByCreative = !1, s.hiddenForever = !1, s.hasLoadedCreative = !1, s.type = "sticky", s.barScrollHeight = 0, s.barHeight = 60, s.scrollingHeight = 500, s.scrollCreative = !1, s.creativeHeight = 0, s.scrollOffset = 0, s.scrollPosition = 0, s.scrollMultiplier = 0, s.slotRenderCallbackRegistered = !1, s.attributes = s.makeAttributes(), s.scrollCreative = (null == (e = s.slot.stickyAttributes) ? void 0 : e.scrollCreative) || !1, s.scrollableElement = null != (t = s.slot.stickyAttributes) && t.scrollableSelector ? i.browserWindow.document.querySelector(null == (n = s.slot.stickyAttributes) ? void 0 : n.scrollableSelector) : i.browserWindow, s.setHeights(0), s
            }
            return g(c, [{
                key: "createWidget",
                value: function(e) {
                    var t = this.getClassName();
                    return this.toHTML('\n<div class="'.concat(t, '-container closed" style="display: ').concat(0 === e ? "none" : "block", '">\n<div class="').concat(t, '-container-background">\n</div>\n  <div class="').concat(t, '-button">\n    <div></div>\n    <div></div>\n  </div>\n  <div class="').concat(t, '">\n  </div>\n</div>\n'))
                }
            }, {
                key: "getHideAtElement",
                value: function() {
                    var e = this.getAttributes().hideSelector;
                    return e ? document.querySelector(e) : null
                }
            }, {
                key: "getFixedElement",
                value: function() {
                    var e = this.getAttributes().fixedSelector;
                    return e ? document.querySelector(e) : null
                }
            }, {
                key: "getFixedClass",
                value: function() {
                    return "".concat(this.getClassName(), "-fixed")
                }
            }, {
                key: "getWidgetCloseButtonElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName(), "-button"))
                }
            }, {
                key: "makeAttributes",
                value: function() {
                    var e = Object.assign({
                        bgColor: "#EFEFEF",
                        bgOpacity: .7,
                        allowClose: !1,
                        buttonColor: "#313131",
                        barColor: "#EFEFEF",
                        borderWidth: "0px",
                        zIndex: 2147483645,
                        compact: !1
                    }, this.slot.stickyAttributes);
                    return e.compact && (e.bgOpacity = 1, e.bgColor = e.barColor), e
                }
            }, {
                key: "addContent",
                value: function(e, t) {
                    var i = this,
                        n = this.getClassName(),
                        r = e.querySelector(".".concat(n)),
                        o = this.createSlotElement(),
                        r = (r.appendChild(o), e.querySelector(".".concat(n, "-button")).addEventListener("click", function() {
                            e.classList.contains("closed") ? i.onShow() : i.onClose(), clearInterval(i.hideAtElementInterval)
                        }), document.querySelector("body"));
                    return null != r && r.insertAdjacentElement("beforeend", t), null != r && r.insertAdjacentElement("beforeend", e), o
                }
            }, {
                key: "getButtonStyles",
                value: function(e, t, i, n, r) {
                    return e ? t ? "border-radius: 0 0 2px 2px; top: ".concat(i, "px;") : "border-radius: 2px 2px 0 0; top: -20px;" : t ? "border-radius: 2px 2px 0 0; top: ".concat(n - 20 + r, "px;") : "border-radius: 0 0 2px 2px; top: 0px;"
                }
            }, {
                key: "getFixedSelectorStyles",
                value: function(e, t, i, n, r) {
                    return t ? ".".concat(e, "-fixed {\n  ").concat(i ? "top" : "bottom", " : ").concat(n ? r : 0, "px !important;\n}\n").concat(t, " {\n  transition: ").concat(i ? "top" : "bottom", " .3s linear;\n}") : ""
                }
            }, {
                key: "createStyles",
                value: function() {
                    var e = this.getAttributes(),
                        t = e.zIndex,
                        i = e.compact,
                        n = e.isTop,
                        r = e.isButtonOutside,
                        o = e.bgColor,
                        s = e.bgOpacity,
                        a = e.barColor,
                        d = e.allowClose,
                        c = e.allowReopen,
                        u = e.buttonColor,
                        l = e.fixedSelector,
                        e = e.borderWidth,
                        g = this.getSlotMaxNonFluidHeight(),
                        h = this.getContainerBordersSize(),
                        p = this.getContainerBorderSize(),
                        f = g + h,
                        h = this.getSlotMaxNonFluidWidth() + h,
                        b = c && r ? p : 0,
                        m = this.getClassName();
                    return this.toHTML('\n<style id="'.concat(m, '-styles">\n.').concat(m, "-container {\n  direction: ltr;\n  z-index: ").concat(t, ";\n  position: fixed;\n  ").concat(n ? "top: 0" : "bottom: 0", ";\n  width: ").concat(i ? h + "px" : "100%", ";\n  height: ").concat(f, "px;\n  transition: transform .3s linear, height .3s linear;\n  ").concat(r ? "" : "overflow: hidden;", "\n  ").concat(i ? "left: 50%; transform: translateX(-50%);" : "left: 0;", "\n}\n\n.").concat(m, "-container-background {\n  background-color: ").concat(o, ";\n  opacity: ").concat(s, ";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n}\n\n.").concat(m, "-button {\n  width: 40px;\n  margin-left: 2px;\n  height: 20px;\n  background-color: ").concat(a, ";\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  display: ").concat(d ? "flex" : "none", ";\n  transition: top .3s linear;\n  ").concat(this.getButtonStyles(Boolean(r), Boolean(n), f, g, p), "\n}\n.").concat(m, "-button :first-child, .").concat(m, "-button :last-child  {\n  background-color: ").concat(u, ";\n  width: 13px;\n  height: 3px;\n  border-radius: 2px;\n}\n.").concat(m, "-button :first-child {\n  transform: rotate(").concat(n ? "-" : "", "30deg) translateX(2px);\n}\n.").concat(m, "-button :last-child {\n  transform: rotate(").concat(n ? "" : "-", "30deg) translateX(-2px);\n}\n.").concat(m, " {\n  width: ").concat(i ? h + "px" : "100%", ";\n  height: ").concat(f, "px;\n  display: flex;\n  justify-content: center;\n  align-items: ").concat(this.scrollCreative ? "baseline" : "center", ";\n  transition: transform .3s linear, height .3s linear;\n  border").concat(i ? "" : n ? "-bottom" : "-top", ": ").concat(e, " solid ").concat(a, ";\n  ").concat(null != (t = this.slot.stickyAttributes) && t.scrollCreative ? "overflow: hidden" : "", "\n}\n.").concat(m, "-container.closed {\n  ").concat(n ? "transform: translateY(-".concat(f - b, "px)").concat(i ? " TranslateX(-50%)" : "", ";") : "height: " + b + "px !important;", "\n}\n.").concat(m, "-container.closed .").concat(m, "-button {\n  visibility: ").concat(c ? "visible" : "hidden", ";\n  ").concat(c ? "" : "display: none;", "\n}\n.").concat(m, "-container.closed .").concat(m, "-button :first-child {\n  transform: rotate(").concat(n ? "" : "-", "30deg) translateX(2px);\n}\n.").concat(m, "-container.closed .").concat(m, "-button :last-child {\n  transform: rotate(").concat(n ? "-" : "", "30deg) translateX(-2px);\n}\n").concat(this.getFixedSelectorStyles(m, l, Boolean(n), g, f), "\n</style>\n"))
                }
            }, {
                key: "getContainerBorderSize",
                value: function() {
                    var e = this.getAttributes().borderWidth;
                    return Number(e.substring(0, e.length - 2))
                }
            }, {
                key: "getContainerBordersSize",
                value: function() {
                    var e = this.getAttributes().compact;
                    return this.getContainerBorderSize() * (e ? 2 : 1)
                }
            }, {
                key: "getAttributes",
                value: function() {
                    return this.attributes
                }
            }, {
                key: "insert",
                value: function() {
                    var e = this,
                        t = (this.logger.debug("".concat(this.getLogContext(), " add widget")), this.createWidget(this.getSlotMaxNonFluidHeight())),
                        i = this.createStyles(),
                        t = this.addContent(t, i);
                    return this.viewportInfo.browserWindow.requestAnimationFrame(function() {
                        e.show()
                    }), this.getHideAtElement() && this.setHideAtElementListener(), this.scrollCreative && this.scrollableElement && this.scrollableElement.addEventListener("scroll", function() {
                        e.updateWidgetPosition()
                    }), [t]
                }
            }, {
                key: "getSlotMaxNonFluidHeight",
                value: function() {
                    return this.barHeight
                }
            }, {
                key: "setHeights",
                value: function(e) {
                    this.creativeHeight = e;
                    var t = this.getSlotNonFluidSizes(),
                        i = t && t.length ? t.map(function(e) {
                            return Number(e[1])
                        }) : [0],
                        t = this.slot.stickyAttributes.heightCalculationMethod,
                        n = i.sort(function(e, t) {
                            return t - e
                        });
                    if (this.scrollCreative) switch (t) {
                        case "half_max":
                            this.barHeight = n[0] / 2 + 1;
                            break;
                        case "second_max":
                            this.barHeight = n[1] || n[0];
                            break;
                        case "min":
                            this.barHeight = Math.min.apply(Math, s(i));
                            break;
                        default:
                            this.barHeight = Math.max.apply(Math, s(i))
                    } else this.barHeight = Math.max.apply(Math, s(i));
                    this.barScrollHeight = e ? e - this.barHeight : 0
                }
            }, {
                key: "hideAtElementListener",
                value: function() {
                    var e = this.getContainerElement(),
                        t = this.getHideAtElement(),
                        i = this.getAttributes().isHideForever;
                    p(t) && e && (ur(this.viewportInfo.getViewportStatus(), t, 1, 0) ? e.classList.contains("closed") || (this.hide(), i && clearInterval(this.hideAtElementInterval)) : e.classList.contains("closed") && this.show())
                }
            }, {
                key: "setHideAtElementListener",
                value: function() {
                    var e = this;
                    this.getHideAtElement() && (this.hideAtElementInterval = setInterval(function() {
                        e.hideAtElementListener()
                    }, 500))
                }
            }, {
                key: "isHideSelectorVisible",
                value: function() {
                    var e = this.getHideAtElement();
                    return !(!e || !ur(this.viewportInfo.getViewportStatus(), e, 1, 0))
                }
            }, {
                key: "onBreakpointChange",
                value: function() {
                    var e, t, i, n, r = this.getAttributes().compact,
                        o = this.getContainerElement(),
                        s = this.getWidgetElement();
                    s && (this.setHeights(0), e = this.barHeight, n = (t = this.getSlotMaxNonFluidWidth()) + (i = this.getContainerBordersSize()), o.style.height = (0 === e ? 0 : e + i) + "px", o.style.display = 0 === e ? "none" : "block", r && e && (o.style.width = n + "px", s.style.width = t + "px"), s.style.height = e + "px", 0 === e || this.isHideSelectorVisible() ? this.updateFixedElement(!0) : this.updateFixedElement(), this.getStylesElement().innerHTML = this.createStyles().innerHTML)
                }
            }, {
                key: "delete",
                value: function() {
                    this.logger.debug("".concat(this.getLogContext(), " delete sticky"));
                    var e = this.getStylesElement(),
                        t = this.getContainerElement();
                    return this.updateFixedElement(!0), this.getAttributes().hideSelector && clearInterval(this.hideAtElementInterval), e && e.remove(), t && t.remove(), !0
                }
            }, {
                key: "getSlotElement",
                value: function() {
                    return document.querySelector(".".concat(this.getClassName(), " .fuse-slot-sticky"))
                }
            }, {
                key: "getScrollY",
                value: function() {
                    var e;
                    return null != (e = this.slot.stickyAttributes) && e.scrollableSelector ? this.scrollableElement.scrollTop : this.scrollableElement.scrollY
                }
            }, {
                key: "updateWidgetPosition",
                value: function(e) {
                    var t, i, n;
                    this.scrollCreative && this.hasLoadedCreative && (i = (t = this.slot.stickyAttributes).scrollingHeight, t = t.scrollableSelector, i && (-1 !== (i = i.trim()).indexOf("vh") ? this.scrollingHeight = t ? this.scrollableElement.scrollHeight - (this.scrollableElement.offsetHeight || 0) : Number(i.replace("vh", "")) * this.viewportInfo.browserWindow.innerHeight : this.scrollingHeight = Number(i.replace("px", ""))), this.scrollMultiplier = this.barScrollHeight / this.scrollingHeight, t = this.getScrollY(), this.logger.debug("".concat(this.getLogContext(), " updateWidgetPosition before"), e, this.creativeHeight, this.barHeight, this.scrollOffset, this.scrollPosition, this.getWidgetElement().style.marginTop, t, this.scrollingHeight), e ? this.getWidgetElement().style.alignItems = this.creativeHeight > this.barHeight ? "baseline" : this.attributes.isTop ? "start" : "end" : this.creativeHeight > this.barHeight && (n = (i = t - this.scrollPosition) * this.scrollMultiplier, this.scrollOffset += n, this.logger.debug("".concat(this.getLogContext(), " updateWidgetPosition check"), n, i, this.scrollOffset), i <= 0 ? this.scrollOffset <= 0 && (this.scrollOffset = 0) : this.scrollOffset > this.barScrollHeight && (this.scrollOffset = this.barScrollHeight), this.getSlotElement().style.marginTop = "-" + this.scrollOffset + "px", this.scrollPosition = t), this.logger.debug("".concat(this.getLogContext(), " updateWidgetPosition after"), e, this.creativeHeight, this.barHeight, this.scrollOffset, this.scrollPosition, this.getWidgetElement().style.marginTop, this.scrollMultiplier, this.barScrollHeight))
                }
            }, {
                key: "show",
                value: function() {
                    var r = this,
                        o = this.slot.id;
                    return this.logger.debug("".concat(this.getLogContext(), " showing with waitForCreative ").concat(this.waitForCreative)), this.loadingByCreative || (this.waitForCreative && !this.hasLoadedCreative ? (this.loadingByCreative = !0, this.slotRenderCallbackRegistered || (this.logger.debug("".concat(this.getLogContext(), " register slotRender callback")), this.registerAdRendered(function(e) {
                        var t, i, n; - 1 !== e.slot.getSlotElementId().indexOf(o) && (r.scrollCreative && e.size && (t = Number(e.size[1]), i = 0, n = e.slot.getTargeting("hb_size")[0] || e.slot.getTargeting("amznsz")[0], 1 === t && n && (i = ve(n)[1], r.logger.debug("".concat(r.getLogContext(), " get height ").concat(i, " from targeting"))), r.setHeights(i || t), r.updateWidgetPosition(!0)), r.logger.debug("".concat(r.getLogContext(), " show widget by creative ").concat(e.slot.getSlotElementId())), !r.isHideSelectorVisible() && r.loadingByCreative && r.onShow(), r.loadingByCreative = !1, r.hasLoadedCreative = !0)
                    }), this.slotRenderCallbackRegistered = !0)) : this.onShow()), !0
                }
            }, {
                key: "onShow",
                value: function() {
                    var t = this,
                        e = this.getContainerElement();
                    e && (e.classList.remove("closed"), this.updateFixedElement(), this.apiV3.getSlotsForTemplateId(this.slot.id).forEach(function(e) {
                        e && t.apiV3.enableRefreshByZone(e.slotDivId)
                    }), this.onShowCloseCallback())
                }
            }, {
                key: "onClose",
                value: function() {
                    var t = this,
                        e = this.getContainerElement();
                    e && (e.classList.add("closed"), this.updateFixedElement(!0), this.apiV3.getSlotsForTemplateId(this.slot.id).forEach(function(e) {
                        e && t.apiV3.disableRefreshByZone(e.slotDivId)
                    }), this.onShowCloseCallback())
                }
            }, {
                key: "hide",
                value: function() {
                    return this.logger.debug("".concat(this.getLogContext(), " hiding")), this.onClose(), !0
                }
            }, {
                key: "updateFixedElement",
                value: function() {
                    var e, t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                        i = (this.logger.debug("".concat(this.getLogContext(), " updateFixedElement ").concat(t ? "restore" : "update")), this.getFixedElement());
                    i && (e = this.getFixedClass(), t ? i.classList.remove(e) : i.classList.add(e))
                }
            }]), c
        }(),
        Tr = function() {
            U(a, Er);
            var s = j(a);

            function a(e, t, i, n, r) {
                var o;
                return l(this, a), (o = s.call(this, e, t, i)).slot = e, o.logger = t, o.viewportInfo = i, o.registerAdRendered = n, o.widgetsRenderer = r, o.type = "interscroller", o
            }
            return g(a, [{
                key: "getAttributes",
                value: function() {
                    return Object.assign({
                        selector: ".adBreak",
                        showBanner: !1,
                        height: "100vh",
                        zIndex: 1e7,
                        top: "auto"
                    }, this.slot.interscrollerAttributes)
                }
            }, {
                key: "getTopOffset",
                value: function() {
                    return this.widgetsRenderer.getMiniScrollersTopOffset()
                }
            }, {
                key: "insert",
                value: function() {
                    var n = this,
                        e = this.getAttributes(),
                        t = e.showBanner,
                        i = e.zIndex,
                        r = e.top,
                        o = e.height,
                        e = e.selector,
                        s = this.getSlotMaxNonFluidHeight(),
                        a = this.createSlotElement(),
                        d = this.getClassName(),
                        t = t ? '<div class="'.concat(d, '-container-message banner_top">Advertisement</div>') : "",
                        t = this.toHTML('\n    <div class="'.concat(d, '-container">\n      ').concat(t, '\n        <div class="').concat(d, '-scroll-clip">\n          <div class="').concat(d, ' publift-widget-interscroller">').concat(a.outerHTML, "</div>\n        </div>\n    </div>\n  ")),
                        i = this.toHTML('\n  <style id="'.concat(d, '-styles">\n  .').concat(d, "-container {\n    width: 100vw;\n    min-height: ").concat(o, ";\n    z-index: ").concat(i, ";\n    position: relative;\n    display: ").concat(0 === s ? "none" : "block", ";\n  }\n\n  .").concat(d, "-container-message {\n    position: absolute;\n    background-color: black;\n    color: white;\n    padding: .5em;\n    text-align: center;\n    font-family: sans-serif;\n    width: calc(100% - 1em);\n    z-index: 9999;\n  }\n\n  .").concat(d, "-scroll-clip {\n    position: absolute;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    clip-path: inset(0px);\n    clip: rect(0px, auto, auto, 0px);\n    min-height: ").concat(o, "\n  }\n\n  .").concat(d, " {\n    position: fixed;\n    top: ").concat(r || this.widgetsRenderer.getMiniScrollersTopOffset() + "px", " !important;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    bottom: 0;\n    transform: translateZ(0px);\n  }\n  </style>\n  ")),
                        s = document.querySelector("body");
                    if (s) {
                        o = document.querySelector(e);
                        if (o) return s.insertAdjacentElement("beforeend", i), o.appendChild(t), d = t.getBoundingClientRect().x - s.getBoundingClientRect().x, t.style.marginLeft = "-".concat(d, "px"), t.style.marginRight = "-".concat(d, "px"), [a];
                        this.logger.info("".concat(this.getLogContext(), " insertionPoint with selector not found: ").concat(e))
                    }
                    return this.registerAdRendered(function(e) {
                        var t, i;
                        n.logger.debug("".concat(n.getLogContext(), " gpt event ").concat(JSON.stringify(e))), -1 !== e.slot.getSlotElementId().indexOf(n.slot.id) && (n.logger.debug("".concat(n.getLogContext(), " gpt event suit")), e.creativeId) && e.size && (n.logger.debug("".concat(n.getLogContext(), " gpt event creative ").concat(e.size[1])), t = Number(e.size[1]), i = 0, e = e.slot.getTargeting("hb_size")[0] || e.slot.getTargeting("amznsz")[0], 1 === t && e && (i = ve(e)[1], n.logger.debug("".concat(n.getLogContext(), " get height ").concat(i, " from targeting"))), n.updateWidgetPosition(i || t))
                    }), []
                }
            }, {
                key: "updateWidgetPosition",
                value: function(e) {
                    var t = this.getSlotMaxNonFluidHeight(),
                        i = this.widgetsRenderer.getMiniScrollersTopOffset(),
                        n = (this.viewportInfo.browserWindow.innerHeight - (1 < e ? e : t)) / 2,
                        r = i;
                    this.logger.debug("".concat(this.getLogContext(), " get top offset ").concat(r, " for adunit size ").concat(e, " maxHeight ").concat(t, " topOffsetCentered ").concat(n, " topOffsetSettings ").concat(i)), this.getWidgetElement().style.top = "".concat(r, "px")
                }
            }, {
                key: "onBreakpointChange",
                value: function() {
                    var e = this.getSlotMaxNonFluidHeight(),
                        t = this.getContainerElement();
                    t && (t.style.display = 0 === e ? "none" : "block")
                }
            }, {
                key: "delete",
                value: function() {
                    var e = this.getStylesElement(),
                        t = this.getContainerElement();
                    return !(!e || !t || (e.remove(), t.remove(), 0))
                }
            }, {
                key: "hide",
                value: function() {
                    return this.getContainerElement().style.display = "none", !0
                }
            }, {
                key: "show",
                value: function() {
                    return this.getContainerElement().style.display = "block", !0
                }
            }]), a
        }(),
        Ar = function() {
            U(i, Er);
            var t = j(i);

            function i() {
                var e;
                return l(this, i), (e = t.apply(this, arguments)).type = "dynamic", e
            }
            return g(i, [{
                key: "getAttributes",
                value: function() {
                    return Object.assign(Object.assign({}, this.slot.dynamicAttributes), {
                        skip: Number(this.slot.dynamicAttributes.skip || 0),
                        each: Number(this.slot.dynamicAttributes.each || 0),
                        incrementEach: Number(this.slot.dynamicAttributes.incrementEach || 0),
                        repeatHeight: Number(this.slot.dynamicAttributes.repeatHeight || 1e3)
                    })
                }
            }, {
                key: "createElement",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
                        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
                        i = this.createSlotElement();
                    return e && e.split(" ").forEach(function(e) {
                        return i.classList.add(e)
                    }), t && (i.style.cssText = t), i
                }
            }, {
                key: "canBeInserted",
                value: function(e) {
                    var t, i = this.getLogContext();
                    return e ? (t = document.querySelectorAll(e)).length ? (this.logger.debug("".concat(i, " Page has ").concat(t.length, " elements suitable for selector ").concat(e)), !0) : (this.logger.info("".concat(i, " No element with selector ").concat(e, " found")), !1) : (this.logger.warn("".concat(i, " Selector should be defined")), !1)
                }
            }, {
                key: "notFuseSlot",
                value: function(e) {
                    return !e || e.getAttribute("data-fuse") !== this.slot.id || (this.logger.debug("".concat(this.getLogContext(), " Skip insertion cause slot already inserted")), !1)
                }
            }, {
                key: "filterNodes",
                value: function(e) {
                    var t = this.getAttributes(),
                        i = t.skip,
                        n = t.each,
                        r = t.position,
                        o = t.incrementEach,
                        s = [],
                        a = 0,
                        d = n;
                    return e.forEach(function(e, t) {
                        t += 1;
                        if (i && t <= i) return !1;
                        if ("incontent" !== r && d) {
                            if ((t - i - a) % d != 0) return !1;
                            o && (a += d, d += o)
                        }
                        s.push(e)
                    }), s
                }
            }, {
                key: "getZoneDiv",
                value: function(e) {
                    return 1 < arguments.length && void 0 !== arguments[1] && arguments[1] ? e.querySelector("div[data-fuse]") : e
                }
            }, {
                key: "insert",
                value: function() {
                    var d, c, u = this,
                        e = this.getAttributes(),
                        t = e.selector,
                        l = e.position,
                        g = e.classNames,
                        h = e.css,
                        p = e.wrapperContent,
                        f = e.repeatHeight;
                    return this.canBeInserted(t) ? (e = document.querySelectorAll(t), d = 0, c = [], this.filterNodes(e).forEach(function(e) {
                        var t = u.createElement(g, h),
                            i = t,
                            n = (p && (t = u.wrapElement(t, p)), e.nextElementSibling),
                            r = e.parentNode,
                            o = e.previousElementSibling,
                            s = e.lastElementChild;
                        switch (l) {
                            case "after":
                                u.notFuseSlot(n) && (r.insertBefore(t, n), c.push(i));
                                break;
                            case "before":
                                u.notFuseSlot(o) && (r.insertBefore(t, e), c.push(i));
                                break;
                            case "replace":
                                e.replaceWith(t), c.push(i);
                                break;
                            case "incontent":
                                var a = e.getBoundingClientRect().top + e.getBoundingClientRect().height + document.documentElement.scrollTop,
                                    a = Math.floor(a / f);
                                d < a && (d = a, u.notFuseSlot(n)) && (r.insertBefore(t, n), c.push(i));
                                break;
                            default:
                                u.notFuseSlot(s) && (e.appendChild(t), c.push(i))
                        }
                    }), c) : (this.logger.debug("".concat(this.getLogContext(), " Injection skipped")), [])
                }
            }, {
                key: "wrapElement",
                value: function(e, t) {
                    var i = document.createElement("div");
                    return i.innerHTML = t, i.firstElementChild.appendChild(e), i.firstElementChild
                }
            }, {
                key: "delete",
                value: function() {
                    var e = document.querySelectorAll('[data-fuse="'.concat(this.slot.id, '"]'));
                    return e.forEach(function(e) {
                        e.remove()
                    }), 0 < e.length
                }
            }, {
                key: "hide",
                value: function() {
                    throw new Error("Method not implemented.")
                }
            }, {
                key: "show",
                value: function() {
                    throw new Error("Method not implemented.")
                }
            }, {
                key: "onBreakpointChange",
                value: function() {
                    throw new Error("Method not implemented.")
                }
            }]), i
        }(),
        Rr = function() {
            function i(e, t) {
                l(this, i), this.logger = e, this.widgetsRenderer = t, this.checkInterval = null, this.statuses = []
            }
            return g(i, [{
                key: "getStatuses",
                value: function() {
                    return this.statuses
                }
            }, {
                key: "start",
                value: function(e) {
                    var i = this;
                    (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || !this.statuses.length) && (this.logger.debug("[WIDGETS][CHECKER] Start to check slots"), this.statuses = e.filter(function(e) {
                        var t;
                        return (null == (t = e.dynamicAttributes) ? void 0 : t.selector) || (null == (t = e.interscrollerAttributes) ? void 0 : t.selector)
                    }).map(function(e) {
                        var t = (null == (t = e.dynamicAttributes) ? void 0 : t.selector) || (null == (t = e.interscrollerAttributes) ? void 0 : t.selector);
                        return {
                            slot: e,
                            selector: t,
                            countSelector: i.countSelector(t),
                            countSlot: i.countSlot(e.id)
                        }
                    }), this.statuses.length) && (this.checkInterval = setInterval(function() {
                        return i.check()
                    }, 100))
                }
            }, {
                key: "stop",
                value: function() {
                    this.checkInterval && clearInterval(this.checkInterval), this.statuses = []
                }
            }, {
                key: "check",
                value: function() {
                    var r = this;
                    this.statuses.forEach(function(e) {
                        var t = e.slot,
                            i = r.countSelector(e.selector),
                            n = r.countSlot(t.id);
                        e.countSelector === i && e.countSlot === n || t.injectConditionConfig || (r.logger.debug("[WIDGETS][".concat(t.id, '] Injecting by selector "').concat(e.selector, '" change: selectors ').concat(i, " slots ").concat(n)), r.widgetsRenderer.injectWidget(e.slot), e.countSelector = r.countSelector(e.selector), e.countSlot = r.countSlot(e.slot.id))
                    })
                }
            }, {
                key: "countSelector",
                value: function(e) {
                    return document.querySelectorAll(e).length
                }
            }, {
                key: "countSlot",
                value: function(e) {
                    return document.querySelectorAll('[data-fuse="'.concat(e, '"]')).length
                }
            }]), i
        }(),
        zr = function() {
            function d(e, t, i, n, r, o, s) {
                var a = this;
                l(this, d), this.logger = e, this.settings = t, this.apiV3 = i, this.conditionFactory = n, this.viewportInfo = r, this.events = o, this.videoManager = s, this.inited = !1, this.widgets = [], this.widgetsChecker = new Rr(this.logger, this), this.events.onBreakpointChanged.subscribe(function() {
                    return a.handleBreakpointChange()
                }), this.events.onPageInit.subscribe(function(e) {
                    e.isFirstPageInit || a.reset()
                })
            }
            return g(d, [{
                key: "getStickySlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.sticky
                    })
                }
            }, {
                key: "getInterscrollerSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.interscroller
                    })
                }
            }, {
                key: "getDynamicSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.dynamic
                    })
                }
            }, {
                key: "getScrollToStickSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.scrollToStick
                    })
                }
            }, {
                key: "getMiniscrollerSlots",
                value: function() {
                    return this.settings.getFuseSlots().filter(function(e) {
                        return null == (e = e.attributes) ? void 0 : e.miniscroller
                    })
                }
            }, {
                key: "isSlotInjected",
                value: function(e) {
                    return null !== document.querySelector('[data-fuse="'.concat(e.id, '"]'))
                }
            }, {
                key: "getWidget",
                value: function(t) {
                    return this.widgets.filter(function(e) {
                        return e.slot.id === t.id
                    })[0]
                }
            }, {
                key: "removeWidget",
                value: function(e) {
                    var t = this.getWidget(e);
                    return t ? (t.delete(), this.logger.debug("[WIDGETS][".concat(e.id, "] Widget deleted")), !0) : (this.logger.debug("[WIDGETS][".concat(e.id, "] Widget was not found")), !1)
                }
            }, {
                key: "handleBreakpointChange",
                value: function() {
                    var t = this,
                        e = this.getStickySlots(),
                        i = this.getInterscrollerSlots();
                    this.logger.info("[WIDGETS] onBreakpointChange Stickies: ".concat(e.length, " Scrolls: ").concat(i.length)), [].concat(e, i).forEach(function(e) {
                        e = t.getWidget(e);
                        e && e.onBreakpointChange()
                    })
                }
            }, {
                key: "getWidgetSlots",
                value: function() {
                    return [].concat(this.getDynamicSlots(), this.getInterscrollerSlots(), this.getStickySlots())
                }
            }, {
                key: "getWidgetsWithSelector",
                value: function() {
                    return [].concat(this.getDynamicSlots(), this.getInterscrollerSlots())
                }
            }, {
                key: "insertStyles",
                value: function(e) {
                    var t = document.createElement("div");
                    t.innerHTML = e, document.querySelector("body").insertAdjacentElement("beforeend", t.firstElementChild)
                }
            }, {
                key: "cleanupDynamicSlots",
                value: function() {
                    this.getDynamicSlots().forEach(function(e) {
                        document.querySelectorAll('[data-fuse="'.concat(e.id, '"]')).forEach(function(e) {
                            e.remove()
                        })
                    })
                }
            }, {
                key: "injectWidget",
                value: function(e) {
                    var t = this,
                        i = (this.logger.debug("[WIDGETS][".concat(e.id, "] Inject widget")), e.attributes),
                        n = i.sticky,
                        r = i.interscroller,
                        i = i.dynamic,
                        o = this.getWidget(e),
                        s = !1;
                    if ((n || r) && this.isSlotInjected(e)) this.logger.debug("[WIDGETS][".concat(e.id, "] Skip injection. DOM element exists"));
                    else {
                        if (!o) {
                            if (n) o = new _r(e, this.logger, this.viewportInfo, function(e) {
                                return pi(e)
                            }, this.apiV3, function() {
                                t.updateFuseStyles()
                            }, !this.settings.isYandexEnabled()), s = e.stickyAttributes.isTop;
                            else if (r) o = new Tr(e, this.logger, this.viewportInfo, function(e) {
                                return pi(e)
                            }, this);
                            else {
                                if (!i) return void this.logger.warn("[WIDGETS][".concat(e.id, "] Skip injection of unknown widget"));
                                this.logger.debug("[WIDGETS][".concat(e.id, "] Injecting dynamic slot with attributes ").concat(JSON.stringify(e.dynamicAttributes))), o = new Ar(e, this.logger, this.viewportInfo)
                            }
                            this.widgets.push(o)
                        }
                        var n = o.insert(),
                            a = this.videoManager.getSettings();
                        n.forEach(function(e) {
                            t.logger.debug("[WIDGETS][".concat(e.id, "] Run queueZone")), t.apiV3.queueZone(e.id), a.enabled && a.injectedAdUnitId && e.id.includes(a.injectedAdUnitId) && t.videoManager.initVideo(!0)
                        }), 0 < n.length && this.apiV3.runAuction(), s && this.updateFuseStyles()
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var i = this;
                    this.getWidgetSlots().forEach(function(e) {
                        var t;
                        !e.injectConditionConfig || (t = i.conditionFactory.buildActivator(e.injectConditionConfig, e.id, i.apiV3, function() {
                            i.injectWidget(e)
                        })).checkCondition() ? i.injectWidget(e) : t.enableTriggers()
                    })
                }
            }, {
                key: "init",
                value: function() {
                    this.logger.debug("[WIDGETS] Init"), this.inited ? this.logger.debug("[WIDGETS] Skipped initialisation as it is already initialised") : (this.inited = !1, this.render(), this.widgetsChecker.start(this.getWidgetsWithSelector()), this.addScrollToStickListener(), this.injectFuseStyles(), this.inited = !0)
                }
            }, {
                key: "cleanup",
                value: function() {
                    var e, t = this;
                    this.logger.debug("[WIDGETS] cleanup"), this.widgetsChecker.stop(), this.getWidgetSlots().forEach(function(e) {
                        return t.removeWidget(e)
                    }), null != (e = document.getElementById("publift-fuse-styles")) && e.remove()
                }
            }, {
                key: "reset",
                value: function() {
                    this.cleanup(), this.logger.debug("[WIDGETS] reset"), this.render(), this.widgetsChecker.start(this.getWidgetsWithSelector(), !0)
                }
            }, {
                key: "getMiniScrollersTopOffset",
                value: function() {
                    var i = this,
                        n = 0,
                        e = this.settings.getTopStickyHeaderSelector();
                    return e && (e = document.querySelector(e)) && (n += e.clientHeight, this.logger.debug("[WIDGETS] miniscrollers offset set to ".concat(n, " because of topStickyHeader"))), this.getStickySlots().forEach(function(e) {
                        var t;
                        null != (t = e.stickyAttributes) && t.isTop && (t = i.getWidget(e)) && t.getContainerElement() && !t.getContainerElement().classList.contains("closed") && (t = i.settings.maxSlotHeightForBreakpoint(e, i.viewportInfo.getCurrentBreakpoint().name), n += null != t ? t : 0, i.logger.debug("[WIDGETS] miniscrollers offset set to ".concat(n, " because of top sticky")))
                    }), n
                }
            }, {
                key: "injectFuseStyles",
                value: function() {
                    var e, t, i;
                    document.getElementById("publift-fuse-styles") ? this.logger.debug("[WIDGETS] styles already injected") : (e = "", t = this.getMiniScrollersTopOffset(), this.settings.isMiniScrollersEnabled() && (this.logger.debug("[WIDGETS] inject fuse styles"), i = "\n      .fuse-slot-mini-scroller .fuse-slot {\n        top: ".concat(0 | t, "px;\n        position: sticky !important;\n        overflow: hidden !important;\n      }\n      .fuse-slot-mini-scroller {\n        overflow: initial !important;\n        display: block !important;\n      }\n      "), this.logger.debug("[WIDGETS] injected miniScroller styles"), e += i), e += "\n    .fuse-slot-scroll-to-stick .fuse-slot {\n      z-index: 9999;\n      top: ".concat(0 | t, "px;\n      position: fixed;\n      width: 100%;\n      left: 0px;\n      pointer-events: none;\n    }\n    .publift-widget-interscroller {\n      top: ").concat(0 | t, "px;\n    }"), this.insertStyles('<style id="publift-fuse-styles">'.concat(e, "</style>")))
                }
            }, {
                key: "updateFuseStyles",
                value: function() {
                    var e = document.getElementById("publift-fuse-styles");
                    e && e.remove(), this.injectFuseStyles()
                }
            }, {
                key: "getScrollToStickPrevElement",
                value: function(e) {
                    var t = e.previousElementSibling;
                    return t || this.getScrollToStickPrevElement(e.parentElement)
                }
            }, {
                key: "addScrollToStickListener",
                value: function() {
                    var n = this,
                        r = this.getMiniScrollersTopOffset(),
                        e = this.getScrollToStickSlots();
                    e.length && (this.logger.debug("[WIDGETS] scrollToStick slots found ".concat(this.getScrollToStickSlots().length, ". Attach scroll listener")), this.viewportInfo.browserWindow.addEventListener("scroll", function() {
                        n.logger.debug("[WIDGETS] scrollToStickListener"), e.forEach(function(i) {
                            document.querySelectorAll('[data-fuse="'.concat(i.id, '"]')).forEach(function(e) {
                                var t = n.getScrollToStickPrevElement(e);
                                t && t.getBoundingClientRect().y + t.getBoundingClientRect().height - r < 0 ? (n.logger.debug("[WIDGETS][".concat(i.id, "] scrollToStick set")), e.classList.add("fuse-slot-scroll-to-stick")) : (n.logger.debug("[WIDGETS][".concat(i.id, "] scrollToStick removed")), e.classList.remove("fuse-slot-scroll-to-stick"))
                            })
                        })
                    }, !0))
                }
            }]), d
        }(),
        Pr = "publift-primis-script",
        Dr = "primisPlayer",
        Or = function() {
            function s(e, t, i, n, r, o) {
                l(this, s), this.logger = e, this.settings = t, this.browserWindow = i, this.viewportInfo = n, this.events = r, this.scoSettings = o, this._hasVideo = !1, this.inited = !1
            }
            return g(s, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.logger.log("[VIDEO]: Video init"), this.settings.enabled && !this.inited && (this.logger.log("[VIDEO]: Video init events"), this.events.onBreakpointChanged.subscribe(function() {
                        return e.resetVideo(e.settings.enabled && !!e.settings.injectedAdUnitId)
                    }), this.events.onPageInit.subscribe(function() {
                        return e.initVideo()
                    }), this.events.onPageReset.subscribe(function() {
                        return e.removeVideo()
                    }), this.initVideo(), this.inited = !0)
                }
            }, {
                key: "getSettings",
                value: function() {
                    return this.settings
                }
            }, {
                key: "initVideo",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.logger.log("[VIDEO]: Video initVideo"), this.settings.enabled && (e && !this.settings.injectedAdUnitId || !e && this.settings.injectedAdUnitId ? this.logger.log("[VIDEO]: Video initVideo skipped -  dynamic: ".concat(e, ", injectedAdUnitId: ").concat(this.settings.injectedAdUnitId)) : this._hasVideo ? this.logger.log("[VIDEO]: Video all ready setup") : this.settings.breakpoints && !this.settings.breakpoints[this.viewportInfo.getCurrentBreakpoint().name] ? this.logger.log("[VIDEO]: Not starting video at breakpoint ".concat(this.viewportInfo.getCurrentBreakpoint().name)) : ("primis" === this.settings.partner && this.setupPrimis(this.settings.placementId), this._hasVideo = !0))
                }
            }, {
                key: "resetVideo",
                value: function() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    this.logger.log("[VIDEO]: Resetting video"), this.removeVideo(), this.initVideo(e)
                }
            }, {
                key: "removeVideo",
                value: function() {
                    this.settings.enabled && this._hasVideo && ("primis" === this.settings.partner && this.resetPrimis(), this._hasVideo = !1, this.logger.log("[VIDEO]: Removed video script ".concat(Pr)))
                }
            }, {
                key: "setupPrimis",
                value: function(e) {
                    var t, i, n, r = this,
                        o = (this.logger.log("[INIT]: Setup primis"), this.scoSettings ? "&schain=1.0,1!".concat(this.scoSettings.asi, ",").concat(this.scoSettings.sellerId, ",1") : "");
                    this.settings.enabled && this.settings.injectedAdUnitId && (t = '[data-fuse="'.concat(this.settings.injectedAdUnitId, '"]'), (i = this.browserWindow.document.querySelector(t)) ? ((n = this.browserWindow.document.createElement("div")).id = Dr, i.appendChild(n)) : this.logger.warn("[INIT]: Injection video library. Element with selector ".concat(t, " not found"))), ne({
                        name: "Primis",
                        url: "//live.primis.tech/live/",
                        file: "liveView.php",
                        query: "s=".concat(e).concat(o, "&playerApiId=publift-primis-video"),
                        id: Pr,
                        insertSelector: this.settings.enabled && this.settings.injectedAdUnitId ? "#".concat(Dr) : "body"
                    }, function() {
                        r.logger.log("[VIDEO]: Primis video loaded")
                    })
                }
            }, {
                key: "resetPrimis",
                value: function() {
                    var e;
                    null != (e = this.browserWindow.document.getElementById(Pr)) && e.remove(), null != (e = this.browserWindow.document.getElementById(Dr)) && e.remove(), null != (e = this.browserWindow.document.getElementById("primisPlayerContainerDiv")) && e.remove()
                }
            }]), s
        }(),
        Mr = new(function() {
            function e() {
                l(this, e)
            }
            return g(e, [{
                key: "getWidgetsRenderer",
                value: function() {
                    return this.widgetsRenderer || (this.widgetsRenderer = new zr(f.getLogger(), S, R.getApiV3(), Gn.getInsertConditionFactory(), o.getViewportInfo(), m, this.getVideoManager())), this.widgetsRenderer
                }
            }, {
                key: "getInterstitialManager",
                value: function() {
                    return this.interstitialManager || (this.interstitialManager = new wr(f.getLogger(), S, Gn.getInsertConditionFactory(), R.getApiV3())), this.interstitialManager
                }
            }, {
                key: "getVideoManager",
                value: function() {
                    return this.videoManager || (this.videoManager = new Or(f.getLogger(), S.getVideoSettings(), f.getBrowserWindowObject(), o.getViewportInfo(), m, S.getSco())), this.videoManager
                }
            }]), e
        }()),
        z = f.getLogger(),
        Lr = on.getGptSlotRegistry(),
        Br = y.getReporter(),
        Nr = R.getFuseSlotRegistry(),
        P = R.getController(),
        Ur = an.getInitManager(),
        Gr = f.getBrowserWindowObject(),
        e = "onTagInitialised",
        Fr = new mt(z, e),
        Wr = R.getApiV3(),
        jr = R.getPageManager(),
        Vr = function(e, t) {
            var i;
            z.debug("[API]: loadSlotById(".concat(e, ", ").concat(t, ")")), (t ? P.registerZoneAndQueue(t, !0, !0, Wr) : P.registerAndQueueLastSlotWithFuseId("".concat(e), !0, !0, Wr)) || z.debug("[API]: loadSlotById(".concat(e, ", ").concat(t, ") did not register a slot")), t && !1 === (null == (i = Nr.getSlotByZoneDivId(t)) ? void 0 : i.currentlyActive) && (z.debug("[API]: loadSlotById(".concat(e, ", ").concat(t, ") activate zone")), P.activateZone(t)), P.runAuction()
        },
        Hr = function(e, t, i) {
            !e || "string" != typeof e && "number" != typeof e ? z.error("[API]: setSlotTargetingById with invalid fuseId: ".concat(e)) : "string" != typeof t ? z.error("[API]: setSlotTargetingById with invalid key: ".concat(t)) : "string" == typeof i || Array.isArray(i) ? (z.debug("[API]: setSlotTargetingById(".concat(e, ", ").concat(t, ", ").concat(i, ") started")), Lr.setSlotTargetingById("".concat(e), t, i)) : z.error("[API]: setSlotTargetingById with invalid value: ".concat(i))
        },
        qr = function(e) {
            if (e && ("string" == typeof e || "number" == typeof e)) return Lr.getSlots("".concat(e));
            z.warn("[API]: getAdSlotsById with invalid fuseId: ".concat(e))
        };
    var Zr = {
        enableApi: function(e) {
            z.debug("[INIT]: Enabling Fuse API"), e.fuseUUID = S.getFuseUUID(), e.initialised = !1, e.init = !1, e.getCurrentBreakpoint = function() {
                return o.getViewportInfo().getCurrentBreakpoint()
            }, e.pageInit = function(e) {
                return z.debug("[API]: pageInit(".concat(JSON.stringify(e), ")")), jr.handlePageInitCall(Gr.location.href, Br.getElapsedTime(), e)
            }, e.registerAll = function() {
                return z.debug("[API]: registerAll()"), P.registerAndRunAuction(!0, !1, Wr)
            }, e.registerZone = function(e) {
                var t;
                if (e && "string" == typeof e) return z.debug("[API]: registerZone('".concat(e, "')")), (t = null == (t = P.registerZoneAndQueue(e, !0, !1, Wr)) ? void 0 : t.slotDivId) && P.runAuction(), t;
                z.error("[API]: registerZone with invalid zonDivId: ".concat(e))
            }, e.activateZone = function(e) {
                e && "string" == typeof e ? (z.debug("[API]: activateZone('".concat(e, "')")), P.activateZone(e)) : z.error("[API]: activateZone with invalid zonDivId: ".concat(e))
            }, e.states = Br.states, e.events = Br.events, e.setTargeting = function(e, t) {
                if ("string" != typeof e) z.error("[API]: setTargeting with invalid key: ".concat(e));
                else {
                    if ("string" == typeof t || Array.isArray(t)) return z.debug("[API]: setTargeting(".concat(e, ", ").concat(JSON.stringify(t), ")")), ln(e, t);
                    z.error("[API]: setTargeting with invalid value: ".concat(t))
                }
            }, e.onSlotRenderEnded = function(t) {
                return pi(function(e) {
                    e = {
                        slotId: e.slot.getSlotElementId(),
                        hasCreative: !e.isEmpty,
                        gptEvent: e
                    };
                    t(e)
                })
            }, e.onTagInitialised = function(e) {
                Fr.once(e)
            }, e.onSlotsInitialised = function(e) {
                Nr.getSlotsInitObservable().once(e)
            }, e.onSlotInitialised = function(e) {
                Nr.getSlotInitObservable().once(e)
            }, e.setAllowRefreshCallback = function(e) {
                Nr.setAllowSlotRefreshCallback(e)
            }, e.privateApi = {
                getWidgetRenderer: function() {
                    return Mr.getWidgetsRenderer()
                },
                getInitStatus: function() {
                    return Ur.getInitStatus()
                },
                getSlotProblems: function() {
                    return Br.getSlotProblems()
                },
                resetPage: function() {
                    return z.debug("[API]: resetPage()"), jr.reset()
                },
                runAuctionAllActiveSlots: function() {
                    return z.debug("[API]: runAuctionAllActiveSlots()"), P.runAuctionAllActiveSlots()
                },
                setLogLevel: function(e) {
                    return z.setLogLevel(e)
                },
                getLogLevel: function() {
                    return z.getLogLevel()
                },
                getLogs: function() {
                    return z.getLogs()
                },
                getAuctionState: function() {
                    return R.getAuctionExecutor().getStateView()
                },
                getSlotTestUrls: function() {
                    return S.getSlotTestUrls()
                },
                isYandexEnabled: function() {
                    return S.isYandexEnabled()
                },
                isPrebidEnabled: function() {
                    return S.isPrebidEnabled()
                },
                isCmpEnabled: function() {
                    return S.isCmpRequired()
                },
                isUamEnabled: function() {
                    return S.isUamEnabled()
                },
                isBlockthroughEnabled: function() {
                    return S.isBlockthroughEnabled()
                }
            }, e.loadSlots = function() {
                z.debug("[API]: loadSlots()"), P.loadSlots(e.initialised, Wr, function() {
                    return jr.reset()
                })
            }, e.getUnits = function() {
                return Nr.getZoneDivs()
            }, e.loadSlotById = function(e, t) {
                return Vr(e, t)
            }, e.refreshSlots = function() {
                return z.debug("[API]: refreshSlots()"), P.runAuctionAllActiveSlots()
            }, e.refreshSlotByCode = function(e) {
                if (e && "string" == typeof e) return z.debug("[API]: refreshSlotByCode(".concat(e, ")")), P.forceRunAuction(e);
                z.error("[API]: refreshSlotByCode with invalid creativeDivId: ".concat(e))
            }, e.getAdSlotsById = function(e) {
                return qr(e)
            }, e.processNewSlots = function() {
                return z.debug("[API]: processNewSlots()"), P.registerAndRunAuction(!0, !1, Wr)
            }, e.getTargeting = function() {
                return cn
            }, e.getAdSlotsByFuseId = e.getAdSlotsById, e.getFuseUnits = e.getUnits, e.loadFuseSlots = e.loadSlots, e.resetSlots = function() {
                return z.debug("[API]: resetSlots()"), jr.reset()
            }, e.resetFuseSlots = function() {
                return z.debug("[API]: resetFuseSlots()"), jr.reset()
            }, e.loadFuseSlotById = e.loadSlotById, e.setSlotTargetingById = function(e, t, i) {
                return Hr(e, t, i)
            }, e.widgetsRenderer = e.privateApi.getWidgetRenderer(), e.setDefaultTargeting = function() {
                return z.debug("[API]: setDefaultTargeting()"), gi()
            }, e.getRefreshIntervals = function() {
                return P.getRefreshIntervals()
            }, e.disableRefresh = function() {
                return z.debug("[API]: disableRefresh()"), P.clearRefreshIntervals()
            }, e.getSlots = function() {
                return Nr.getSlotTemplates()
            }, e.getSettings = function() {
                return Object.assign({}, S.getAccountSettings())
            }
        },
        tagInitEmitter: Fr,
        ON_TAG_INIT_EVENT: e
    };
    if (null != (e = window.self.fusetag) && e.loading) throw e = "[FUSE]: Fusetag is already initialising, and may have been included in the page twice", console.error(e), new Error(e);
    if (null != (e = window.self.fusetag) && e.init) throw e = "[FUSE]: Fusetag is already initialised, and may have been included in the page twice", console.error(e), new Error(e);
    var Qr = window.self.fusetag || (window.self.fusetag = {
            que: []
        }),
        D = (Qr.loading = !0, y.getReporter()),
        O = f.getLogger(),
        Jr = (O.log("[INIT] Initialising with UUID ".concat(S.getFuseUUID())), Yn.getUam()),
        Yr = Zn.getConsentManager(),
        Kr = R.getController(),
        Xr = an.getInitManager(),
        $r = Mr.getWidgetsRenderer(),
        eo = Mr.getInterstitialManager(),
        to = R.getApiV3(),
        io = y.getTelemetry(),
        no = R.getPageManager(),
        ro = o.getViewportInfo(),
        M = y.getComponentStatusStore();

    function oo() {
        if (D.setStateStatus("fuse_queue_start"), fr) br.error("[INIT] processBacklog() called, but it already ran");
        else {
            for (fr = !0, br.log("[INIT]: Processing fuse queue with ".concat(mr().length, " pending items")); 0 < mr().length;) {
                var e = mr().shift();
                if ("function" == typeof e) try {
                    br.debug("[INIT]: Calling queued function"), e.call(), e.called = !0
                } catch (e) {
                    br.error("[INIT]: Error calling queued function:", e.message, e.stack)
                } else br.error("[INIT]: Commands written into fusetag.que.push must be wrapped in a function")
            }
            Sr()
        }
        D.setStateStatus("fuse_queue_finish")
    }

    function so(e, t, i) {
        e ? (O.debug("[INIT]: Running second (".concat(t, ") docReady auto-scan and auction")), D.setStateStatus("second_autoscan_".concat(t, "_start")), Kr.registerAndRunAuction(!0, !1, to), D.setStateStatus("second_autoscan_".concat(t, "_finish")), O.debug("[INIT]: Finished second docReady DOM scan")) : M.updateState("docReadyScan", pe(i, D.getElapsedTime(), void 0))
    }

    function ao() {
        var e, t = he(D.getElapsedTime());
        M.updateState("gpt", t), e = function(e) {
            M.updateState("gpt", pe(t, D.getElapsedTime(), void 0)), eo.initInterstitial()
        }, C(function() {
            x.debug("[GPT]: Queued events beginning to execute"), k.setStateStatus("gpt_queue_start"), X(!S.isCmpRequired(), function() {
                fi(!0)
            }), hi(), u.enableServices(), e(u)
        }), $(Tt(), "simulate gpt init delay", x, function() {
            k.setStateStatus("gpt_load_start"), ri(function() {
                k.setStateStatus("gpt_load_finish")
            })
        })
    }

    function co() {
        D.setStateStatus("fuse_bootstrap_start"), Zr.enableApi(Qr);
        var t = S.getTagStartCutoffMs(),
            e = D.getElapsedTime();
        if (h(t) || e < t) {
            S.isCmpRequired() ? ("none" !== S.getCmpProvider().partner && $(_t(), "simulate quantcast load delay", O, function() {
                return Zn.getCmpProviderLoader().load(S.getCmpProvider())
            }), Yr.enable()) : M.updateState("cmp", le()), S.isIframeCmp() && Zn.getIframeCmpManager().load(), S.isPrebidEnabled() ? (t = S.getPrebidTagStartCutoffMs(), r = D.getElapsedTime(), h(t) || r < t ? (i = function(e) {
                var i = he(D.getElapsedTime(), e);
                M.updateState("prebid", i), Ki.enable(function(e) {
                    var e = D.getElapsedTime() - e,
                        t = S.getPrebidDownloadCutoffMs();
                    h(t) || e <= t ? M.updateState("prebid", pe(i, D.getElapsedTime(), void 0)) : (O.log("[PREBID]: Not enabling because library took ".concat(e, "ms to download")), M.updateState("prebid", ge()))
                })
            }, n = ro.getCurrentBreakpoint().name, S.isPrebidEnabledAtBP(n) ? i(!1) : (O.info("[INIT]: Prebid not enabled at breakpoint ".concat(n, ", deferring initialisation")), M.updateState("prebid", ue()), m.onBreakpointChanged.subscribe(function(e) {
                e = e.name;
                S.isPrebidEnabledAtBP(e) && "deferred" === M.state.prebid._tag && (O.info("[INIT]: Prebid is enabled for breakpoint ".concat(n, ", loading it now")), i(!0))
            }))) : (M.updateState("prebid", ge()), O.info("[INIT]: Skipping prebid load because fuse took ".concat(r, "ms to begin loading")))) : (M.updateState("prebid", le()), O.info("[INIT]: Not loading Prebid because it is disabled")), S.isUamEnabled() ? (t = S.getUamTagStartCutoffMs(), r = D.getElapsedTime(), h(t) || r < t ? (o = function(t) {
                $(Rt(), "simulate uam download delay", O, function() {
                    var e = he(D.getElapsedTime(), t);
                    M.updateState("uam", e), Jr.load(S.isCmpRequired(), function() {
                        M.updateState("uam", pe(e, D.getElapsedTime(), void 0))
                    })
                })
            }, S.isUamEnabledAtBP(ro.getCurrentBreakpoint().name) ? o(!1) : (M.updateState("uam", ue()), m.onBreakpointChanged.subscribe(function(e) {
                e = e.name;
                S.isUamEnabledAtBP(e) && "deferred" === M.state.uam._tag && (O.info("[INIT]: UAM is enabled for breakpoint ".concat(e, ", loading it now")), o(!0))
            }))) : (M.updateState("uam", ge()), O.info("[INIT]: Deferring UAM load because fuse took ".concat(r, "ms to begin loading")))) : (M.updateState("uam", le()), O.info("[INIT]: Not loading Uam because it is disabled")), S.isYandexEnabled() ? (M.updateState("gpt", le()), a = he(D.getElapsedTime()), M.updateState("yandex", a), window.yaContextCb ? M.updateState("yandex", pe(a, D.getElapsedTime(), void 0)) : ((c = (t = f.getBrowserWindowObject().document).createElement("script")).innerHTML = "window.yaContextCb=window.yaContextCb||[]", t.head.appendChild(c), (c = t.createElement("script")).src = "https://yandex.ru/ads/system/context.js", c.async = !0, t.head.appendChild(c), s = setInterval(function() {
                var e;
                null != (e = null == (e = window.Ya) ? void 0 : e.Context) && e.AdvManager && (M.updateState("yandex", pe(a, D.getElapsedTime(), void 0)), clearInterval(s))
            }, 100))) : (M.updateState("yandex", le()), ao(), C(function() {
                yi.enableIfApplicable()
            }));
            var i, n, r, o, s, a, d, c, u, l = f.getBrowserWindowObject(),
                t = (X(S.isConfiantEnabled(), function() {
                    Ei.enable(S.getConfiantId())
                }), X(S.isId5Enabled(), function() {
                    Oi.enable()
                }), X(S.isIdentityEnabled(), function() {
                    Li.enable(l)
                }), X(S.isResponsiveEnabled(), function() {
                    O.info("[INIT]: Enabling responsive"), R.configureResponsive()
                }), X(S.isPubstackEnabled(), function() {
                    zi.enable(S.getPubstackId())
                }), S.isArctagEnabled() && S.isPrebidEnabled() ? nn.enable() : O.info("[INIT]: Not loading Arctag because it(or prebid) is disabled"), Xr.setIsLowDwellPage(no.isLowDwellUrl(l.location.toString())), O);
            S.getV2CompatOverrides(), R.getApiV3();
            try {
                t.log("[INIT][onFuseLoadCallback] Start"), t.debug("[INIT][onFuseLoadCallback] Finish")
            } catch (e) {
                t.error("[INIT][onFuseLoadCallback] Encountered error during evaluation", e)
            }
            S.getUseTelemetry() && io.recordFuseLoad(), S.isScanDOMOnPageLoad() ? (c = document.readyState, u = he(D.getElapsedTime()), M.updateState("docReadyScan", u), "complete" === c ? (O.info("[INIT]: Document state is already 'complete'"), so(!1, c, u)) : (d = !1, "interactive" === c && (O.info("[INIT]: Document state is already 'interactive'"), so(!(d = !0), c, u)), document.addEventListener("readystatechange", function() {
                var e = document.readyState,
                    t = (D.setStateStatus("document_readystatechange_".concat(e)), O.info("[INIT]: Received document '".concat(e, "' listener callback")), d);
                d = !0, so(t, e, u)
            }))) : M.updateState("docReadyScan", le()), m.onInitManagerReady.immediateOrOnce(function() {
                oo(), S.isWidgetRendererEnabled() && $r.init(), Qr.initialised = !0, Qr.init = !0, Qr.loading = !1, D.setStateStatus("tag_initialised"), Xr.setTagInitialised(), (no.isPageInitCalled() || S.isScanDOMOnPageLoad() || S.isAutoRegistrationEnabled()) && (D.setStateStatus("fuse_trigger_auto_auction_start"), Kr.registerAndQueue(!0, !1, to), D.setStateStatus("fuse_trigger_auto_auction_finish"), S.isAutoRegistrationEnabled()) && (Qr.registerAll(), setInterval(function() {
                    Qr.registerAll()
                }, 1e3)), D.setStateStatus("on_tag_init_event_start"), Zr.tagInitEmitter.emit({}), m.onTagInitComplete.emit({
                    tagInitUrl: l.location.href
                }), D.setStateStatus("on_tag_init_event_finish"), Kr.runAuction();
                var e = m.onPageInit;
                e.subscribe(function() {
                    return eo.initInterstitial()
                }), e.subscribe(function() {
                    O.debug("[PAGE]: Registering slots and running auction after PageInit"), Xr.setIsLowDwellPage(no.isLowDwellUrl(l.location.toString())), Kr.registerAndRunAuction(!0, !1, to)
                }), Mr.getVideoManager().init(), m.onPageReset.subscribe(function() {
                    O.debug("[PAGE]: Received page reset event"), eo.clearInterstitial()
                })
            })
        } else O.warn("[INIT]: Fuse will not show ads because it took ".concat(e, "ms before it began loading"));
        D.setStateStatus("fuse_bootstrap_finish")
    }
    S.getUseTelemetry() && S.getUseWebVitalsTelemetry() && (io.prepareBackgroundRequestProcessor(), io.prepareRecordingWebVitals()), $(t("fuseDelayInit"), "simulate slow fuse download", O, co)
});