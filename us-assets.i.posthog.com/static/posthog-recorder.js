! function() {
    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }

    function e(e, n, i) {
        return (n = function(e) {
            var n = function(e) {
                if ("object" != t(e) || !e) return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var i = n.call(e, "string");
                    if ("object" != t(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(e)
            }(e);
            return "symbol" == t(n) ? n : n + ""
        }(n)) in e ? Object.defineProperty(e, n, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = i, e
    }

    function n(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function i(t) {
        for (var i = 1; arguments.length > i; i++) {
            var r = null != arguments[i] ? arguments[i] : {};
            i % 2 ? n(Object(r), !0).forEach(function(n) {
                e(t, n, r[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return t
    }

    function r(t, e, n, i, r, s, o) {
        try {
            var a = t[s](o),
                l = a.value
        } catch (t) {
            return void n(t)
        }
        a.done ? e(l) : Promise.resolve(l).then(i, r)
    }

    function s(t) {
        return function() {
            var e = this,
                n = arguments;
            return new Promise(function(i, s) {
                var o = t.apply(e, n);

                function a(t) {
                    r(o, i, s, a, l, "next", t)
                }

                function l(t) {
                    r(o, i, s, a, l, "throw", t)
                }
                a(void 0)
            })
        }
    }
    const o = ["type"];
    var a = function(t) {
            return t[t.DomContentLoaded = 0] = "DomContentLoaded", t[t.Load = 1] = "Load", t[t.FullSnapshot = 2] = "FullSnapshot", t[t.IncrementalSnapshot = 3] = "IncrementalSnapshot", t[t.Meta = 4] = "Meta", t[t.Custom = 5] = "Custom", t[t.Plugin = 6] = "Plugin", t
        }({}),
        l = function(t) {
            return t[t.Mutation = 0] = "Mutation", t[t.MouseMove = 1] = "MouseMove", t[t.MouseInteraction = 2] = "MouseInteraction", t[t.Scroll = 3] = "Scroll", t[t.ViewportResize = 4] = "ViewportResize", t[t.Input = 5] = "Input", t[t.TouchMove = 6] = "TouchMove", t[t.MediaInteraction = 7] = "MediaInteraction", t[t.StyleSheetRule = 8] = "StyleSheetRule", t[t.CanvasMutation = 9] = "CanvasMutation", t[t.Font = 10] = "Font", t[t.Log = 11] = "Log", t[t.Drag = 12] = "Drag", t[t.StyleDeclaration = 13] = "StyleDeclaration", t[t.Selection = 14] = "Selection", t[t.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", t[t.CustomElement = 16] = "CustomElement", t
        }({}),
        u = function(t) {
            return t[t.MouseUp = 0] = "MouseUp", t[t.MouseDown = 1] = "MouseDown", t[t.Click = 2] = "Click", t[t.ContextMenu = 3] = "ContextMenu", t[t.DblClick = 4] = "DblClick", t[t.Focus = 5] = "Focus", t[t.Blur = 6] = "Blur", t[t.TouchStart = 7] = "TouchStart", t[t.TouchMove_Departed = 8] = "TouchMove_Departed", t[t.TouchEnd = 9] = "TouchEnd", t[t.TouchCancel = 10] = "TouchCancel", t
        }({}),
        c = function(t) {
            return t[t.Mouse = 0] = "Mouse", t[t.Pen = 1] = "Pen", t[t.Touch = 2] = "Touch", t
        }({}),
        h = function(t) {
            return t[t["2D"] = 0] = "2D", t[t.WebGL = 1] = "WebGL", t[t.WebGL2 = 2] = "WebGL2", t
        }({}),
        d = function(t) {
            return t[t.Play = 0] = "Play", t[t.Pause = 1] = "Pause", t[t.Seeked = 2] = "Seeked", t[t.VolumeChange = 3] = "VolumeChange", t[t.RateChange = 4] = "RateChange", t
        }({}),
        f = function(t) {
            return t[t.Document = 0] = "Document", t[t.DocumentType = 1] = "DocumentType", t[t.Element = 2] = "Element", t[t.Text = 3] = "Text", t[t.CDATA = 4] = "CDATA", t[t.Comment = 5] = "Comment", t
        }({});

    function v(t, e) {
        return -1 !== t.indexOf(e)
    }
    "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
    var p = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
    new RegExp(`^${p.source}`, "i"), new RegExp(p.source, "gi");
    var m = {
            Node: ["childNodes", "parentNode", "parentElement", "textContent", "previousSibling", "nextSibling", "lastChild"],
            ShadowRoot: ["host", "styleSheets"],
            Element: ["shadowRoot"],
            MutationObserver: []
        },
        g = {
            Node: ["contains", "getRootNode"],
            ShadowRoot: ["getSelection"],
            Element: ["querySelector", "querySelectorAll"],
            MutationObserver: ["constructor"]
        },
        y = {};

    function b(t) {
        if (y[t]) return y[t];
        const e = function(t) {
                var e, n;
                const i = null === (e = globalThis) || void 0 === e || null === (e = e.Zone) || void 0 === e || null === (n = e.__symbol__) || void 0 === n ? void 0 : n.call(e, t);
                return i && globalThis[i] ? globalThis[i] : void 0
            }(t) || globalThis[t],
            n = e.prototype,
            i = t in m ? m[t] : void 0,
            r = Boolean(i && i.every(t => {
                var e;
                return Boolean(null === (e = Object.getOwnPropertyDescriptor(n, t)) || void 0 === e || null === (e = e.get) || void 0 === e ? void 0 : e.toString().includes("[native code]"))
            })),
            s = t in g ? g[t] : void 0,
            o = Boolean(s && s.every(t => {
                var e;
                return "function" == typeof n[t] && (null === (e = n[t]) || void 0 === e ? void 0 : e.toString().includes("[native code]"))
            }));
        if (r && o) return y[t] = e.prototype, e.prototype;
        const a = document.createElement("iframe");
        a.style.display = "none";
        let l = !1;
        try {
            document.body.appendChild(a);
            const i = a.contentWindow;
            if (!i) return e.prototype;
            const r = i[t].prototype;
            return r ? (v(u = navigator.userAgent, "AppleWebKit") && !v(u, "Chrome") && (a.classList.add("rr-block", "ph-no-capture"), a.setAttribute("__rrwebUntaintedPrototype", t), l = !0), y[t] = r) : n
        } catch (t) {
            return n
        } finally {
            !l && a.parentNode && document.body.removeChild(a)
        }
        var u
    }
    var w = Object.create(null);

    function k(t, e, n) {
        var i;
        const r = w[t],
            s = r[n];
        if (s) return s.call(e);
        const o = b(t),
            a = null === (i = Object.getOwnPropertyDescriptor(o, n)) || void 0 === i ? void 0 : i.get;
        return a ? (r[n] = a, a.call(e)) : e[n]
    }
    w.Node = Object.create(null), w.ShadowRoot = Object.create(null), w.MutationObserver = Object.create(null), w.Element = Object.create(null);
    var S, _ = {};

    function C(t, e, n) {
        const i = `${t}.${String(n)}`;
        if (_[i]) return _[i].bind(e);
        const r = b(t)[n];
        return "function" != typeof r ? e[n] : (_[i] = r, r.bind(e))
    }

    function I() {
        return b("MutationObserver").constructor
    }

    function M(t, e, n) {
        try {
            if (!(e in t)) return () => {};
            const i = t[e],
                r = {
                    next: i
                },
                s = n(function(...t) {
                    return r.next.apply(this, t)
                });
            return "function" == typeof s && (s.prototype = s.prototype || {}, Object.defineProperties(s, {
                __rrweb_original__: {
                    enumerable: !1,
                    value: i
                },
                __rrweb_layer__: {
                    enumerable: !1,
                    value: r
                }
            })), t[e] = s, () => {
                if (t[e] === s) return void(t[e] = r.next);
                const n = t => {
                    var e;
                    return "function" == typeof t ? null !== (e = t.__rrweb_layer__) && void 0 !== e ? e : t.__posthog_layer__ : void 0
                };
                let i = t[e],
                    o = n(i);
                for (; o;) {
                    if (o.next === s) return void(o.next = r.next);
                    i = o.next, o = n(i)
                }
            }
        } catch (t) {
            return () => {}
        }
    }
    var R = {
        childNodes: t => k("Node", t, "childNodes"),
        parentNode: t => k("Node", t, "parentNode"),
        parentElement: t => k("Node", t, "parentElement"),
        textContent: t => k("Node", t, "textContent"),
        previousSibling: t => k("Node", t, "previousSibling"),
        nextSibling: t => k("Node", t, "nextSibling"),
        lastChild: t => k("Node", t, "lastChild"),
        isConnected(t) {
            if (void 0 === S) {
                var e;
                const t = null === (e = Object.getOwnPropertyDescriptor(b("Node"), "isConnected")) || void 0 === e ? void 0 : e.get;
                S = (null == t ? void 0 : t.toString().includes("[native code]")) ? t : null
            }
            return null == S ? void 0 : S.call(t)
        },
        contains: (t, e) => C("Node", t, "contains")(e),
        getRootNode: t => C("Node", t, "getRootNode")(),
        host: t => t && "host" in t ? k("ShadowRoot", t, "host") : null,
        styleSheets: t => t.styleSheets,
        shadowRoot: t => t && "shadowRoot" in t ? k("Element", t, "shadowRoot") : null,
        querySelector: (t, e) => C("Element", t, "querySelector")(e),
        querySelectorAll: (t, e) => C("Element", t, "querySelectorAll")(e),
        mutationObserver: I,
        patch: M
    };

    function A() {
        try {
            if ("undefined" != typeof performance && performance.now) return performance.now()
        } catch (t) {}
        return Date.now()
    }
    var x = 0,
        T = 0;

    function O() {
        x += 1
    }

    function E() {
        return x
    }

    function F(t, e) {
        return (e !== x || t > 6e4) && (T += 1, !0)
    }
    var L = 0,
        D = 0,
        N = 0,
        P = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
        },
        j = null,
        B = null,
        z = [],
        W = 0,
        U = 0,
        q = {
            slowestBatchMs: 0
        },
        H = {
            deferredCount: 0,
            failedCount: 0,
            abandonedCount: 0,
            totalMs: 0,
            slowestSliceMs: 0
        };

    function G(t) {
        var e;
        (L += 1) > 1 || (P = {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
        }, z = [], W = 0, B = (e = t) && e > 0 ? e : null, D = A(), N = x)
    }

    function V() {
        return 0 === L ? j || {
            durationMs: 0,
            stylesheetMs: 0,
            nodeCount: 0,
            cssRuleCount: 0,
            nonDeferrableCssRuleCount: 0,
            deferredStylesheetCount: 0
        } : (L -= 1) > 0 ? P : (P.durationMs = A() - D, P.deferredStylesheetCount = W, H.deferredCount += W, B = null, F(P.durationMs, N) ? P : j = P)
    }

    function Z(t, e, n) {
        let i = t.length;
        if (n >= 32) return i;
        for (let r = 0; t.length > r; r++) {
            const s = t[r];
            try {
                const t = s.cssRules;
                if (t && t.length) i += Z(t, e, n + 1);
                else if (e && s.styleSheet) {
                    const t = s.styleSheet;
                    if (!e.has(t)) {
                        e.add(t);
                        const r = t.rules || t.cssRules;
                        r && (i += Z(r, e, n + 1))
                    }
                }
            } catch (t) {}
        }
        return i
    }

    function J(t) {
        if (0 === L) return;
        const e = Z(t, null, 0);
        P.cssRuleCount += e, U > 0 && (P.nonDeferrableCssRuleCount += e)
    }

    function Q(t) {
        U += 1;
        try {
            return t()
        } finally {
            U -= 1
        }
    }

    function X(t) {
        L > 0 && (P.stylesheetMs += t)
    }

    function Y(t) {
        if (0 === L || null === B) return !1;
        const e = P.cssRuleCount - P.nonDeferrableCssRuleCount;
        return e >= B || e + function(t) {
            try {
                const e = t && (t.rules || t.cssRules);
                if (!e) return 0;
                const n = new WeakSet;
                return n.add(t), Z(e, n, 0)
            } catch (t) {
                return 0
            }
        }(t) > B
    }

    function K() {
        const t = z;
        return z = [], t
    }

    function tt() {
        H.failedCount += 1
    }

    function et(t) {
        t > 0 && (H.abandonedCount += t)
    }

    function nt(t) {
        return nt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, nt(t)
    }

    function it(t, e, n) {
        return (e = function(t) {
            var e = function(t) {
                if ("object" != nt(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != nt(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == nt(e) ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function rt(t) {
        return t.nodeType === t.ELEMENT_NODE
    }

    function st(t) {
        const e = t && "host" in t && "mode" in t && R.host(t) || null;
        return Boolean(e && "shadowRoot" in e && R.shadowRoot(e) === t)
    }

    function ot(t) {
        return "[object ShadowRoot]" === {}.toString.call(t)
    }

    function at(t) {
        return t.includes(" background-clip: text;") && !t.includes(" -webkit-background-clip: text;") && (t = t.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), t
    }

    function lt(t) {
        const {
            cssText: e
        } = t;
        if (3 > e.split('"').length) return e;
        const n = ["@import", `url(${JSON.stringify(t.href)})`];
        return "" === t.layerName ? n.push("layer") : t.layerName && n.push(`layer(${t.layerName})`), t.supportsText && n.push(`supports(${t.supportsText})`), t.media.length && n.push(t.media.mediaText), n.join(" ") + ";"
    }
    var ut = 0;

    function ct(t) {
        const e = 0 === ut,
            n = e ? A() : 0;
        ut += 1;
        try {
            const e = t.rules || t.cssRules;
            if (!e) return null;
            J(e);
            let n = t.href;
            return !n && t.ownerNode && (n = t.ownerNode.baseURI), at(Array.from(e, t => ht(t, n)).join(""))
        } catch (t) {
            return null
        } finally {
            ut -= 1, e && X(A() - n)
        }
    }

    function ht(t, e) {
        if (ft(t)) {
            let e;
            try {
                e = ct(t.styleSheet) || lt(t)
            } catch (n) {
                e = t.cssText
            }
            try {
                var n;
                if (e && (null === (n = t.styleSheet) || void 0 === n ? void 0 : n.href)) return xt(e, t.styleSheet.href)
            } catch (t) {}
            return e
        } {
            let n = t.cssText;
            return vt(t) && t.selectorText.includes(":") && (n = dt(n)), e ? xt(n, e) : n
        }
    }

    function dt(t) {
        return t.replace(/(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm, "$1\\$2")
    }

    function ft(t) {
        return "styleSheet" in t
    }

    function vt(t) {
        return "selectorText" in t
    }
    var pt = /^-?[A-Za-z_][\w-]*$/,
        mt = /^-?[A-Za-z_][\w-]*(\.-?[A-Za-z_][\w-]*)*$/;

    function gt(t) {
        const e = [];
        let n = !1,
            i = null;
        const r = new Map;

        function s(t) {
            const r = e.pop();
            if ("group" === r.kind) {
                if (null === t) {
                    for (; e.length > 0 && "group" === e[e.length - 1].kind;) e.pop();
                    return void s(null)
                }
                const n = e[e.length - 1];
                return n.parts.push(t), void(n.index += 1)
            }
            if (!r.importRule) return n = !0, void(i = t);
            o(e[e.length - 1], r.importRule, t)
        }

        function o(t, e, n) {
            try {
                let r;
                try {
                    r = n || lt(e)
                } catch (t) {
                    r = e.cssText
                }
                try {
                    var i;
                    r && (null === (i = e.styleSheet) || void 0 === i ? void 0 : i.href) && (r = xt(r, e.styleSheet.href))
                } catch (t) {}
                r && t.parts.push(r), t.index += 1
            } catch (t) {
                s(null)
            }
        }

        function a(t) {
            const n = t.rules[t.index];
            if ("sheet" === t.kind && ft(n)) {
                const i = r.get(n);
                return null === i ? (t.parts.push(n.cssText), void(t.index += 1)) : i ? void e.push({
                    kind: "sheet",
                    sheet: i.sheet,
                    rules: i.rules,
                    sheetHref: i.sheetHref,
                    index: 0,
                    parts: [],
                    importRule: n
                }) : void o(t, n, null)
            }
            if (function(t, n) {
                    try {
                        const i = function(t) {
                            const e = t;
                            if (!e.cssRules || 0 === e.cssRules.length) return null;
                            if (e.media && "string" == typeof e.media.mediaText) return `@media ${e.media.mediaText} {`;
                            if (vt(t)) {
                                if ("number" == typeof e.type && 1 !== e.type) return null;
                                const n = e.style ? e.style.cssText : "";
                                return `${t.selectorText} {${n?" "+n:""}`
                            }
                            if ("containerName" in e) return "string" != typeof e.containerQuery || e.containerName && !pt.test(e.containerName) ? null : `@container ${e.containerName?`${e.containerName} `:""}${e.containerQuery} {`;
                            if ("string" == typeof e.conditionText) {
                                let i = "";
                                try {
                                    var n;
                                    i = (null === (n = t.constructor) || void 0 === n ? void 0 : n.name) || ""
                                } catch (t) {
                                    return null
                                }
                                return "" === i || "Object" === i || "CSSSupportsRule" === i ? `@supports ${e.conditionText} {` : null
                            }
                            return "string" == typeof e.name ? "keyText" in e.cssRules[0] ? pt.test(e.name) ? `@keyframes ${e.name} {` : null : "" === e.name ? "@layer {" : mt.test(e.name) ? `@layer ${e.name} {` : null : null
                        }(t);
                        if (null === i) return !1;
                        const r = n.sheetHref;
                        return e.push({
                            kind: "group",
                            rules: Array.from(t.cssRules),
                            sheetHref: r,
                            index: 0,
                            parts: [],
                            prelude: r ? xt(i, r) : i,
                            fixColons: "sheet" === n.kind && vt(t) && t.selectorText.includes(":")
                        }), !0
                    } catch (t) {
                        return !1
                    }
                }(n, t)) return;
            let i = n.cssText;
            "sheet" === t.kind && vt(n) && n.selectorText.includes(":") && (i = dt(i)), t.parts.push(t.sheetHref ? xt(i, t.sheetHref) : i), t.index += 1
        }
        return function(t) {
            try {
                const n = t.rules || t.cssRules;
                if (!n) return !1;
                J(n);
                let i = t.href;
                !i && t.ownerNode && (i = t.ownerNode.baseURI);
                const s = Array.from(n);
                return e.push({
                        kind: "sheet",
                        sheet: t,
                        rules: s,
                        sheetHref: i,
                        index: 0,
                        parts: [],
                        importRule: null
                    }),
                    function(t, e) {
                        const n = [{
                            sheet: e,
                            rules: t,
                            index: 0
                        }];
                        for (; n.length > 0;) {
                            const t = n[n.length - 1];
                            if (t.index >= t.rules.length) {
                                n.pop();
                                continue
                            }
                            const e = t.rules[t.index];
                            if (t.index += 1, !ft(e) || r.has(e)) continue;
                            let i = null;
                            try {
                                i = e.styleSheet
                            } catch (t) {
                                r.set(e, null);
                                continue
                            }
                            if (i && !n.some(t => t.sheet === i)) try {
                                const t = i.rules || i.cssRules;
                                if (!t) continue;
                                J(t);
                                let s = i.href;
                                !s && i.ownerNode && (s = i.ownerNode.baseURI);
                                const o = Array.from(t);
                                r.set(e, {
                                    sheet: i,
                                    rules: o,
                                    sheetHref: s
                                }), n.push({
                                    sheet: i,
                                    rules: o,
                                    index: 0
                                })
                            } catch (t) {}
                        }
                    }(s, t), !0
            } catch (t) {
                return !1
            }
        }(t) || (n = !0), {
            advance(t) {
                if (n) return !0;
                const r = A();
                let o = t > 0 ? t : 1;
                try {
                    for (; !n && o > 0;) {
                        const t = e[e.length - 1];
                        if (t.index >= t.rules.length) {
                            let e = null;
                            try {
                                if ("group" === t.kind) {
                                    const n = t.prelude + t.parts.join("") + "}";
                                    e = t.fixColons ? dt(n) : n
                                } else e = at(t.parts.join(""))
                            } catch (t) {}
                            s(e);
                            continue
                        }
                        o -= 1;
                        try {
                            a(t)
                        } catch (t) {
                            s(null)
                        }
                    }
                } catch (t) {
                    n = !0, i = null
                } finally {
                    X(A() - r)
                }
                return n
            },
            text: () => n ? i : null,
            remainingRules() {
                if (n) return 0;
                let t = 0;
                for (const n of e) t += n.rules.length - n.index;
                return t
            }
        }
    }
    var yt = class {
        constructor() {
            it(this, "idNodeMap", new Map), it(this, "nodeMetaMap", new WeakMap)
        }
        getId(t) {
            var e, n;
            return t && null !== (e = null === (n = this.getMeta(t)) || void 0 === n ? void 0 : n.id) && void 0 !== e ? e : -1
        }
        getNode(t) {
            return this.idNodeMap.get(t) || null
        }
        getIds() {
            return Array.from(this.idNodeMap.keys())
        }
        getMeta(t) {
            return this.nodeMetaMap.get(t) || null
        }
        removeNodeFromMap(t) {
            const e = this.getId(t);
            if (this.idNodeMap.delete(e), t.childNodes && t.childNodes.forEach(t => this.removeNodeFromMap(t)), rt(t)) {
                const e = R.shadowRoot(t);
                e && this.removeNodeFromMap(e), "IFRAME" === t.nodeName && t.contentDocument && this.removeNodeFromMap(t.contentDocument)
            }
        }
        has(t) {
            return this.idNodeMap.has(t)
        }
        hasNode(t) {
            return this.nodeMetaMap.has(t)
        }
        add(t, e) {
            this.idNodeMap.set(e.id, t), this.nodeMetaMap.set(t, e)
        }
        replace(t, e) {
            const n = this.getNode(t);
            if (n) {
                const t = this.nodeMetaMap.get(n);
                t && this.nodeMetaMap.set(e, t)
            }
            this.idNodeMap.set(t, e)
        }
        reset() {
            this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
        }
    };

    function bt({
        element: t,
        maskInputOptions: e,
        tagName: n,
        type: i,
        value: r,
        maskInputFn: s
    }) {
        let o = r || "";
        const a = i && wt(i);
        return (e[n.toLowerCase()] || a && e[a]) && (o = s ? s(o, t) : "*".repeat(o.length)), o
    }

    function wt(t) {
        return t.toLowerCase()
    }
    var kt = new Set(["rr_width", "rr_height", "rr_left", "rr_top", "rr_position", "rr_transform", "rr_display", "rr_scrollleft", "rr_scrolltop", "rr_mediastate", "rr_open_mode"]);

    function St({
        element: t,
        name: e,
        value: n,
        maskAllElementAttributes: i,
        maskAttributeFn: r,
        isGenerated: s = !1
    }) {
        return n ? i ? s && kt.has(wt(e)) ? n : "*".repeat(n.length) : r ? r(e, n, t) : n : n
    }
    var _t = "__rrweb_original__";

    function Ct(t) {
        try {
            const e = t.type;
            return t.hasAttribute("data-rr-is-password") ? "password" : e ? wt(e) : null
        } catch (t) {
            return null
        }
    }
    var It = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
        Mt = /^(?:[a-z+]+:)?\/\//i,
        Rt = /^www\..*/i,
        At = /^(data:)([^,]*),(.*)/i;

    function xt(t, e) {
        return (t || "").replace(It, (t, n, i, r, s, o) => {
            const a = i || s || o,
                l = n || r || "";
            if (!a) return t;
            if (Mt.test(a) || Rt.test(a)) return `url(${l}${a}${l})`;
            if (At.test(a)) return `url(${l}${a}${l})`;
            if ("/" === a[0]) return `url(${l}${function(t){let e="";return e=t.indexOf("//")>-1?t.split("/").slice(0,3).join("/"):t.split("/")[0],e=e.split("?")[0],e}(e)+a}${l})`;
            const u = e.split("/"),
                c = a.split("/");
            u.pop();
            for (const t of c) "." !== t && (".." === t ? u.pop() : u.push(t));
            return `url(${l}${u.join("/")}${l})`
        })
    }
    var Tt, Ot, Et = new Map,
        Ft = 1,
        Lt = new RegExp("[^a-z0-9-_:]");

    function $t() {
        return Ft++
    }
    var Dt = !1,
        Nt = /^[^ \t\n\r\u000c]+/,
        Pt = /^[, \t\n\r\u000c]+/,
        jt = new WeakMap;

    function Bt(t, e) {
        return e && "" !== e.trim() ? zt(t, e) : e
    }

    function zt(t, e) {
        let n = jt.get(t);
        if (n || (n = t.createElement("a"), jt.set(t, n)), e) {
            if (e.startsWith("blob:") || e.startsWith("data:")) return e
        } else e = "";
        return n.setAttribute("href", e), n.href
    }

    function Wt(t, e) {
        return (null == e ? void 0 : e.maxBase64ImageLength) ? function(t, e) {
            return e && t.length > e ? "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxkZWZzPgogICAgPHBhdHRlcm4gaWQ9InN0cmlwZXMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+CiAgICAgIDxyZWN0IHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iYmxhY2siLz4KICAgICAgPHBhdGggZD0iTTggMEgxNkwwIDE2VjhMOCAwWiIgZmlsbD0iIzJEMkQyRCIvPgogICAgICA8cGF0aCBkPSJNMTYgOFYxNkg4TDE2IDhaIiBmaWxsPSIjMkQyRDJEIi8+CiAgICA8L3BhdHRlcm4+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc3RyaXBlcykiLz4KPC9zdmc+Cg==" : t
        }(t, e.maxBase64ImageLength) : t
    }

    function Ut(t, e, n, i, r, s) {
        if (!i) return i;
        if ("src" === n || "href" === n && ("use" !== e || "#" !== i[0])) {
            const n = Bt(t, i);
            if (n.startsWith("data:")) {
                if ("img" === e && r) {
                    let t = n;
                    return ((null == s ? void 0 : s.type) || void 0 !== (null == s ? void 0 : s.quality)) && (t = function(t, e, n, i) {
                        if (1e5 > e.length) return e;
                        if (!t.complete || 0 === t.naturalWidth) return e;
                        if (t.naturalWidth > 4096 || t.naturalHeight > 4096) return e;
                        const r = Et.get(e);
                        if (r && r.type === n && r.quality === i) return r.result;
                        try {
                            const r = document.createElement("canvas");
                            r.width = t.naturalWidth, r.height = t.naturalHeight;
                            const s = r.getContext("2d");
                            if (!s) return e;
                            s.drawImage(t, 0, 0);
                            const o = r.toDataURL(n || "image/webp", null != i ? i : .4),
                                a = e.length > o.length ? o : e;
                            if (Et.size >= 10) {
                                const t = Et.keys().next().value;
                                void 0 !== t && Et.delete(t)
                            }
                            return Et.set(e, {
                                type: n,
                                quality: i,
                                result: a
                            }), a
                        } catch (t) {
                            return e
                        }
                    }(r, n, s.type, s.quality)), Wt(t, s)
                }
                if ("image" === e) return Wt(n, s)
            }
            return n
        }
        if ("xlink:href" === n && "#" !== i[0]) {
            const n = Bt(t, i);
            return "image" === e && n.startsWith("data:") ? Wt(n, s) : n
        }
        return "background" !== n || "table" !== e && "td" !== e && "th" !== e ? "srcset" === n ? function(t, e) {
            if ("" === e.trim()) return e;
            let n = 0;

            function i(t) {
                let i;
                const r = t.exec(e.substring(n));
                return r ? (i = r[0], n += i.length, i) : ""
            }
            const r = [];
            for (; i(Pt), e.length > n;) {
                let s = i(Nt);
                if ("," === s.slice(-1)) s = Bt(t, s.substring(0, s.length - 1)), r.push(s);
                else {
                    let i = "";
                    s = Bt(t, s);
                    let o = !1;
                    for (;;) {
                        const t = e.charAt(n);
                        if ("" === t) {
                            r.push((s + i).trim());
                            break
                        }
                        if (o) ")" === t && (o = !1);
                        else {
                            if ("," === t) {
                                n += 1, r.push((s + i).trim());
                                break
                            }
                            "(" === t && (o = !0)
                        }
                        i += t, n += 1
                    }
                }
            }
            return r.join(", ")
        }(t, i) : "style" === n ? xt(i, zt(t)) : "object" === e && "data" === n ? Bt(t, i) : i : Bt(t, i)
    }

    function qt(t, e, n) {
        return ("video" === t || "audio" === t) && "autoplay" === wt(e)
    }

    function Ht(t) {
        return "string" == typeof t && wt(t).split(/\s+/).includes("stylesheet")
    }

    function Gt(t, e, n) {
        if (!t) return !1;
        if (t.nodeType !== t.ELEMENT_NODE) return !!n && Gt(R.parentNode(t), e, n);
        for (let n = t.classList.length; n--;)
            if (e.test(t.classList[n])) return !0;
        return !!n && Gt(R.parentNode(t), e, n)
    }

    function Vt(t, e, n, i) {
        let r;
        if (rt(t)) {
            if (r = t, !R.childNodes(r).length) return !1
        } else {
            if (null === R.parentElement(t)) return !1;
            r = R.parentElement(t)
        }
        try {
            if ("string" == typeof e) {
                if (i) {
                    if (r.closest(`.${e}`)) return !0
                } else if (r.classList.contains(e)) return !0
            } else if (Gt(r, e, i)) return !0;
            if (n)
                if (i) {
                    if (r.closest(n)) return !0
                } else if (r.matches(n)) return !0
        } catch (t) {}
        return !1
    }

    function Zt(t, e, n) {
        const i = t.removeEventListener;
        "function" == typeof i && i.call(t, e, n)
    }
    var Jt = new Map;

    function Qt(t = {}) {
        Jt.forEach((e, n) => {
            t.keepChangedLinks && e.changedLinkBaseline || (e.controller.abort(), Jt.delete(n))
        })
    }

    function Xt(t) {
        try {
            return t.sheet
        } catch (t) {
            return null
        }
    }

    function Yt(t, e, n, i, r) {
        const s = new AbortController,
            o = () => {
                var e;
                (null === (e = Jt.get(t)) || void 0 === e ? void 0 : e.controller) === s && Jt.delete(t), s.abort()
            };
        let a = !1;
        const l = () => {
            if (!a) {
                a = !0;
                try {
                    e()
                } finally {
                    o()
                }
            }
        };
        t.addEventListener("load", l, {
            signal: s.signal,
            once: !0
        }), t.addEventListener("error", o, {
            signal: s.signal,
            once: !0
        });
        const u = Date.now() + 6e4;
        let c;
        const h = e => {
            const r = i.length > e ? i[e] : Math.max(i[i.length - 1], 1e3);
            c = setTimeout(() => {
                t.isConnected ? n() ? l() : Date.now() < u ? h(e + 1) : o() : o()
            }, r)
        };
        s.signal.addEventListener("abort", () => clearTimeout(c), {
            once: !0
        }), h(0), Jt.set(t, {
            controller: s,
            changedLinkBaseline: r
        })
    }
    var Kt = [100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600];

    function te(t, e) {
        return Array.from(t.styleSheets).find(t => t.href === e)
    }

    function ee(t) {
        return null == t ? "" : t.toLowerCase()
    }
    var ne = !1,
        ie = !1;

    function re(t, e) {
        const {
            doc: n,
            mirror: i,
            blockClass: r,
            blockSelector: s,
            maskTextClass: o,
            maskTextSelector: a,
            skipChild: l = !1,
            inlineStylesheet: u = !0,
            maskInputOptions: c = {},
            maskTextFn: h,
            maskInputFn: d,
            maskAllElementAttributes: v = !1,
            maskAttributeFn: p,
            slimDOMOptions: m,
            dataURLOptions: g = {},
            inlineImages: y = !1,
            recordCanvas: b = !1,
            canvasMaskingConfigured: w,
            onSerialize: k,
            onIframeLoad: S,
            iframeLoadTimeout: _ = 5e3,
            onIframeListenerRegistered: C,
            onStylesheetLoad: I,
            stylesheetLoadTimeout: M = 5e3,
            keepIframeSrcFn: A = () => !1,
            newlyAddedElement: x = !1,
            depth: T = 0,
            maxDepth: O = 50
        } = e;
        let {
            needsMask: E
        } = e, {
            preserveWhiteSpace: F = !0
        } = e;
        if (T >= O) return ie = !0, ne || (ne = !0, console.warn(`[rrweb-snapshot] DOM tree depth exceeded max depth of ${O}. Children beyond this depth will not be recorded. This may indicate deeply nested DOM structures.`)), null;
        E || (E = Vt(t, o, a, void 0 === E)), L > 0 && (P.nodeCount += 1);
        const D = function(t, e) {
            const {
                doc: n,
                mirror: i,
                blockClass: r,
                blockSelector: s,
                needsMask: o,
                inlineStylesheet: a,
                maskInputOptions: l = {},
                maskTextFn: u,
                maskInputFn: c,
                maskAllElementAttributes: h = !1,
                maskAttributeFn: d,
                dataURLOptions: v = {},
                inlineImages: p,
                recordCanvas: m,
                canvasMaskingConfigured: g,
                keepIframeSrcFn: y,
                newlyAddedElement: b = !1
            } = e, w = function(t, e) {
                if (!e.hasNode(t)) return;
                const n = e.getId(t);
                return 1 === n ? void 0 : n
            }(n, i);
            switch (t.nodeType) {
                case t.DOCUMENT_NODE:
                    return "CSS1Compat" !== t.compatMode ? {
                        type: f.Document,
                        childNodes: [],
                        compatMode: t.compatMode
                    } : {
                        type: f.Document,
                        childNodes: []
                    };
                case t.DOCUMENT_TYPE_NODE:
                    return {
                        type: f.DocumentType,
                        name: t.name,
                        publicId: t.publicId,
                        systemId: t.systemId,
                        rootId: w
                    };
                case t.ELEMENT_NODE:
                    return function(t, e) {
                        const {
                            doc: n,
                            blockClass: i,
                            blockSelector: r,
                            inlineStylesheet: s,
                            maskInputOptions: o = {},
                            maskInputFn: a,
                            maskAllElementAttributes: l = !1,
                            maskAttributeFn: u,
                            dataURLOptions: c = {},
                            inlineImages: h,
                            recordCanvas: d,
                            canvasMaskingConfigured: v,
                            keepIframeSrcFn: p,
                            newlyAddedElement: m = !1,
                            rootId: g
                        } = e, y = function(t, e, n) {
                            try {
                                if ("string" == typeof e) {
                                    if (t.classList.contains(e)) return !0
                                } else
                                    for (let n = t.classList.length; n--;)
                                        if (e.test(t.classList[n])) return !0;
                                if (n) return t.matches(n)
                            } catch (t) {}
                            return !1
                        }(t, i, r), b = function(t) {
                            if (t instanceof HTMLFormElement) return "form";
                            const e = wt(t.tagName);
                            return Lt.test(e) ? "div" : e
                        }(t), w = new Set;
                        let k = {};
                        const S = t.attributes.length;
                        for (let e = 0; S > e; e++) {
                            const i = t.attributes[e];
                            qt(b, i.name) || (k[i.name] = Ut(n, b, wt(i.name), i.value, t, c))
                        }
                        if ("link" === b && "string" == typeof k.href) {
                            var _;
                            const e = null === (_ = Xt(t)) || void 0 === _ ? void 0 : _.href;
                            e && (k.href = e)
                        }
                        if ("link" === b && s && !y && Ht(k.rel)) {
                            let e = t.sheet;
                            if (!e) {
                                const i = function(t) {
                                    return t.href
                                }(t);
                                i && (e = te(n, i), !e && i.includes(".css")) && (e = te(n, window.location.origin + "/" + i.replace(window.location.href, "")))
                            }
                            let i = null;
                            e && (Y(e) ? L > 0 && (z.push(t), W += 1) : i = ct(e)), i && (delete k.rel, delete k.href, k._cssText = i)
                        }
                        var C;
                        if ("style" === b && t.sheet && !(t.innerText || R.textContent(t) || "").trim().length) {
                            const e = Q(() => ct(t.sheet));
                            e && (k._cssText = e)
                        }
                        if ("input" === b || "textarea" === b || "select" === b) {
                            const e = t.value,
                                n = t.checked;
                            "radio" !== k.type && "checkbox" !== k.type && "submit" !== k.type && "button" !== k.type && e ? k.value = bt({
                                element: t,
                                type: Ct(t),
                                tagName: b,
                                value: e,
                                maskInputOptions: o,
                                maskInputFn: a
                            }) : n && (k.checked = n)
                        }
                        if ("option" === b && (t.selected && !o.select ? k.selected = !0 : delete k.selected), "dialog" === b && t.open) {
                            try {
                                k.rr_open_mode = t.matches("dialog:modal") ? "modal" : "non-modal"
                            } catch (t) {
                                k.rr_open_mode = "modal", k.ph_rr_could_not_detect_modal = !0
                            }
                            w.add("rr_open_mode")
                        }
                        if ("canvas" === b && d && !(null == v ? void 0 : v())) try {
                            if ("2d" === t.__context)(function(t) {
                                const e = t.getContext("2d");
                                if (!e) return !0;
                                for (let n = 0; t.width > n; n += 50)
                                    for (let i = 0; t.height > i; i += 50) {
                                        const r = e.getImageData,
                                            s = _t in r ? r[_t] : r;
                                        let o;
                                        try {
                                            o = s.call(e, n, i, Math.min(50, t.width - n), Math.min(50, t.height - i))
                                        } catch (t) {
                                            return !1
                                        }
                                        if (new Uint32Array(o.data.buffer).some(t => 0 !== t)) return !1
                                    }
                                return !0
                            })(t) || (k.rr_dataURL = t.toDataURL(c.type, c.quality));
                            else if (!("__context" in t)) {
                                const e = t.toDataURL(c.type, c.quality),
                                    i = n.createElement("canvas");
                                i.width = t.width, i.height = t.height, e !== i.toDataURL(c.type, c.quality) && (k.rr_dataURL = e)
                            }
                        } catch (t) {
                            "SecurityError" === (null == (C = t) ? void 0 : C.name) ? Dt || (Dt = !0, console.warn("Cannot read canvas pixels, so this canvas is left out of the recording. A cross-origin image or video drawn into it taints it.", C)): console.warn("Cannot read canvas pixels, so this canvas is left out of the recording.", C)
                        }
                        let I, M = !1;
                        if ("img" === b && h) {
                            Tt || (Tt = n.createElement("canvas"), Ot = Tt.getContext("2d"));
                            const e = t,
                                i = e.currentSrc || e.getAttribute("src") || "<unknown-src>",
                                r = e.crossOrigin,
                                s = (e, n) => M ? St({
                                    element: t,
                                    name: e,
                                    value: n,
                                    maskAllElementAttributes: l,
                                    maskAttributeFn: u
                                }) : n,
                                o = () => {
                                    Zt(e, "load", o);
                                    try {
                                        Tt.width = e.naturalWidth, Tt.height = e.naturalHeight, Ot.drawImage(e, 0, 0);
                                        const t = Tt.toDataURL(c.type, c.quality);
                                        k.rr_dataURL = s("rr_dataURL", t)
                                    } catch (t) {
                                        if ("anonymous" !== e.crossOrigin) return e.crossOrigin = "anonymous", void(e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o));
                                        console.warn(`Cannot inline img src=${i}! Error: ${t}`)
                                    }
                                    "anonymous" === e.crossOrigin && (r ? k.crossOrigin = s("crossOrigin", r) : e.removeAttribute("crossorigin"))
                                };
                            e.complete && 0 !== e.naturalWidth ? o() : e.addEventListener("load", o)
                        }
                        if ("audio" === b || "video" === b) {
                            const e = k;
                            e.rr_mediaState = t.paused ? "paused" : "played", w.add("rr_mediaState"), e.rr_mediaCurrentTime = t.currentTime, e.rr_mediaPlaybackRate = t.playbackRate, e.rr_mediaMuted = t.muted, e.rr_mediaLoop = t.loop, e.rr_mediaVolume = t.volume
                        }
                        if (m || (t.scrollLeft && (k.rr_scrollLeft = t.scrollLeft), t.scrollTop && (k.rr_scrollTop = t.scrollTop)), y) {
                            var A, x, T;
                            const {
                                width: e,
                                height: i,
                                left: r,
                                top: s
                            } = t.getBoundingClientRect(), o = null === (A = n.defaultView) || void 0 === A ? void 0 : A.getComputedStyle(t);
                            k = {
                                class: k.class,
                                rr_width: `${e}px`,
                                rr_height: `${i}px`,
                                rr_left: `${Math.floor(r+((null===(x=n.defaultView)||void 0===x?void 0:x.scrollX)||0))}px`,
                                rr_top: `${Math.floor(s+((null===(T=n.defaultView)||void 0===T?void 0:T.scrollY)||0))}px`
                            }, w.add("rr_width"), w.add("rr_height"), w.add("rr_left"), w.add("rr_top"), o && (k.rr_position = o.position || "static", w.add("rr_position"), o.transform && "none" !== o.transform && (k.rr_transform = o.transform, w.add("rr_transform")), o.display && o.display.startsWith("inline") && (k.rr_display = o.display, w.add("rr_display")))
                        }
                        if ("iframe" !== b || p(k.src) || (t.contentDocument || (k.rr_src = k.src), delete k.src), l || u)
                            for (const [e, n] of Object.entries(k)) "string" != typeof n && null !== n || (k[e] = St({
                                element: t,
                                name: e,
                                value: n,
                                maskAllElementAttributes: l,
                                maskAttributeFn: u,
                                isGenerated: w.has(e)
                            }));
                        M = !0;
                        try {
                            customElements.get(b) && (I = !0)
                        } catch (t) {}
                        return {
                            type: f.Element,
                            tagName: b,
                            attributes: k,
                            childNodes: [],
                            isSVG: (O = t, Boolean("svg" === O.tagName || O.ownerSVGElement) || void 0),
                            needBlock: y,
                            rootId: g,
                            isCustom: I
                        };
                        var O
                    }(t, {
                        doc: n,
                        blockClass: r,
                        blockSelector: s,
                        inlineStylesheet: a,
                        maskInputOptions: l,
                        maskInputFn: c,
                        maskAllElementAttributes: h,
                        maskAttributeFn: d,
                        dataURLOptions: v,
                        inlineImages: p,
                        recordCanvas: m,
                        canvasMaskingConfigured: g,
                        keepIframeSrcFn: y,
                        newlyAddedElement: b,
                        rootId: w
                    });
                case t.TEXT_NODE:
                    return function(t, e) {
                        const {
                            needsMask: n,
                            maskTextFn: i,
                            rootId: r
                        } = e, s = R.parentNode(t), o = s && s.tagName;
                        let a = R.textContent(t);
                        const l = "STYLE" === o || void 0,
                            u = "SCRIPT" === o || void 0;
                        if (l && a) {
                            try {
                                var c;
                                if (t.nextSibling || t.previousSibling);
                                else if (Y(s.sheet));
                                else if (null === (c = s.sheet) || void 0 === c ? void 0 : c.cssRules) {
                                    const t = ct(s.sheet);
                                    t && !/(?:^|[\s;{}])-?[a-zA-Z][\w-]*\s*:\s*;/.test(t) && (a = t)
                                }
                            } catch (e) {
                                console.warn(`Cannot get CSS styles from text's parentNode. Error: ${e}`, t)
                            }
                            a = xt(a, zt(e.doc))
                        }
                        return u && (a = "SCRIPT_PLACEHOLDER"), !l && !u && a && n && (a = i ? i(a, R.parentElement(t)) : a.replace(/[\S]/g, "*")), {
                            type: f.Text,
                            textContent: a || "",
                            isStyle: l,
                            rootId: r
                        }
                    }(t, {
                        doc: n,
                        needsMask: o,
                        maskTextFn: u,
                        rootId: w
                    });
                case t.CDATA_SECTION_NODE:
                    return {
                        type: f.CDATA,
                        textContent: "",
                        rootId: w
                    };
                case t.COMMENT_NODE:
                    return {
                        type: f.Comment,
                        textContent: R.textContent(t) || "",
                        rootId: w
                    };
                default:
                    return !1
            }
        }(t, {
            doc: n,
            mirror: i,
            blockClass: r,
            blockSelector: s,
            needsMask: E,
            inlineStylesheet: u,
            maskInputOptions: c,
            maskTextFn: h,
            maskInputFn: d,
            maskAllElementAttributes: v,
            maskAttributeFn: p,
            dataURLOptions: g,
            inlineImages: y,
            recordCanvas: b,
            canvasMaskingConfigured: w,
            keepIframeSrcFn: A,
            newlyAddedElement: x
        });
        if (!D) return console.warn(t, "not serialized"), null;
        let N;
        N = i.hasNode(t) ? i.getId(t) : function(t, e) {
            if (e.comment && t.type === f.Comment) return !0;
            if (t.type === f.Element) {
                if (e.script && ("script" === t.tagName || "link" === t.tagName && ("preload" === t.attributes.rel && "script" === t.attributes.as || "modulepreload" === t.attributes.rel) || "link" === t.tagName && "prefetch" === t.attributes.rel && "string" == typeof t.attributes.href && "js" === function(t) {
                        var e;
                        let n;
                        try {
                            n = new URL(t, window.location.href)
                        } catch (t) {
                            return null
                        }
                        const i = n.pathname.match(/\.([0-9a-z]+)(?:$)/i);
                        return null !== (e = null == i ? void 0 : i[1]) && void 0 !== e ? e : null
                    }(t.attributes.href))) return !0;
                if (e.headFavicon && ("link" === t.tagName && "shortcut icon" === t.attributes.rel || "meta" === t.tagName && (ee(t.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === ee(t.attributes.name) || ["icon", "apple-touch-icon", "shortcut icon"].includes(ee(t.attributes.rel))))) return !0;
                if ("meta" === t.tagName) {
                    if (e.headMetaDescKeywords && ee(t.attributes.name).match(/^description|keywords$/)) return !0;
                    if (e.headMetaSocial && (ee(t.attributes.property).match(/^(og|twitter|fb):/) || ee(t.attributes.name).match(/^(og|twitter):/) || "pinterest" === ee(t.attributes.name))) return !0;
                    if (e.headMetaRobots && ["robots", "googlebot", "bingbot"].includes(ee(t.attributes.name))) return !0;
                    if (e.headMetaHttpEquiv && void 0 !== t.attributes["http-equiv"]) return !0;
                    if (e.headMetaAuthorship && (["author", "generator", "framework", "publisher", "progid"].includes(ee(t.attributes.name)) || ee(t.attributes.property).match(/^article:/) || ee(t.attributes.property).match(/^product:/))) return !0;
                    if (e.headMetaVerification && ["google-site-verification", "yandex-verification", "csrf-token", "p:domain_verify", "verify-v1", "verification", "shopify-checkout-api-token"].includes(ee(t.attributes.name))) return !0
                }
            }
            return !1
        }(D, m) || !F && D.type === f.Text && !D.isStyle && !D.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : $t();
        const j = Object.assign(D, {
            id: N
        });
        if (i.add(t, j), -2 === N) return null;
        k && k(t);
        let B = !l;
        if (j.type === f.Element) {
            B = B && !j.needBlock, delete j.needBlock;
            const e = R.shadowRoot(t);
            e && ot(e) && (j.isShadowHost = !0)
        }
        if ((j.type === f.Document || j.type === f.Element) && B) {
            m.headWhitespace && j.type === f.Element && "head" === j.tagName && (F = !1);
            const e = {
                doc: n,
                mirror: i,
                blockClass: r,
                blockSelector: s,
                needsMask: E,
                maskTextClass: o,
                maskTextSelector: a,
                skipChild: l,
                inlineStylesheet: u,
                maskInputOptions: c,
                maskTextFn: h,
                maskInputFn: d,
                maskAllElementAttributes: v,
                maskAttributeFn: p,
                slimDOMOptions: m,
                dataURLOptions: g,
                inlineImages: y,
                recordCanvas: b,
                canvasMaskingConfigured: w,
                preserveWhiteSpace: F,
                onSerialize: k,
                onIframeLoad: S,
                iframeLoadTimeout: _,
                onIframeListenerRegistered: C,
                onStylesheetLoad: I,
                stylesheetLoadTimeout: M,
                keepIframeSrcFn: A,
                depth: T + 1,
                maxDepth: O
            };
            if (j.type === f.Element && "textarea" === j.tagName && void 0 !== j.attributes.value);
            else
                for (const n of Array.from(R.childNodes(t))) {
                    const t = re(n, e);
                    t && j.childNodes.push(t)
                }
            let x = null;
            if (rt(t) && (x = R.shadowRoot(t)))
                for (const t of Array.from(R.childNodes(x))) {
                    const n = re(t, e);
                    n && (ot(x) && (n.isShadow = !0), j.childNodes.push(n))
                }
        }
        const U = R.parentNode(t);
        if (U && st(U) && ot(U) && (j.isShadow = !0), j.type === f.Element && "iframe" === j.tagName) {
            const e = function(t, e, n) {
                const i = () => {},
                    r = t.contentWindow;
                if (!r) return i;
                let s;
                try {
                    s = r.document.readyState
                } catch (t) {
                    return i
                }
                const o = () => e();
                if ("complete" !== s) {
                    let i = !1,
                        r = null;
                    const s = () => {
                            i || (i = !0, null !== r && (clearTimeout(r), r = null), Zt(t, "load", a), t.addEventListener("load", o), e())
                        },
                        a = () => s();
                    return r = setTimeout(s, n), t.addEventListener("load", a), () => {
                        null !== r && (clearTimeout(r), r = null), i ? Zt(t, "load", o) : (i = !0, Zt(t, "load", a))
                    }
                }
                const a = "about:blank";
                let l;
                try {
                    l = r.location.href
                } catch (t) {
                    return i
                }
                if (l !== a || t.src === a || "" === t.src) {
                    const n = setTimeout(e, 0);
                    return t.addEventListener("load", o), () => {
                        clearTimeout(n), Zt(t, "load", o)
                    }
                }
                return t.addEventListener("load", o), () => {
                    Zt(t, "load", o)
                }
            }(t, () => {
                const e = t.contentDocument;
                if (e && S) {
                    const n = re(e, {
                        doc: e,
                        mirror: i,
                        blockClass: r,
                        blockSelector: s,
                        needsMask: E,
                        maskTextClass: o,
                        maskTextSelector: a,
                        skipChild: !1,
                        inlineStylesheet: u,
                        maskInputOptions: c,
                        maskTextFn: h,
                        maskInputFn: d,
                        maskAllElementAttributes: v,
                        maskAttributeFn: p,
                        slimDOMOptions: m,
                        dataURLOptions: g,
                        inlineImages: y,
                        recordCanvas: b,
                        canvasMaskingConfigured: w,
                        preserveWhiteSpace: F,
                        onSerialize: k,
                        onIframeLoad: S,
                        iframeLoadTimeout: _,
                        onIframeListenerRegistered: C,
                        onStylesheetLoad: I,
                        stylesheetLoadTimeout: M,
                        keepIframeSrcFn: A,
                        depth: T + 1,
                        maxDepth: O
                    });
                    n && S(t, n)
                }
            }, _);
            null == C || C(t, e)
        }
        var q, H, G;
        return j.type === f.Element && "link" === j.tagName && Ht(j.attributes.rel) && (H = () => {
            if (I) {
                const e = i.getMeta(t),
                    l = re(t, {
                        doc: n,
                        mirror: i,
                        blockClass: r,
                        blockSelector: s,
                        needsMask: E,
                        maskTextClass: o,
                        maskTextSelector: a,
                        skipChild: !1,
                        inlineStylesheet: u,
                        maskInputOptions: c,
                        maskTextFn: h,
                        maskInputFn: d,
                        maskAllElementAttributes: v,
                        maskAttributeFn: p,
                        slimDOMOptions: m,
                        dataURLOptions: g,
                        inlineImages: y,
                        recordCanvas: b,
                        canvasMaskingConfigured: w,
                        preserveWhiteSpace: F,
                        onSerialize: k,
                        onIframeLoad: S,
                        iframeLoadTimeout: _,
                        onStylesheetLoad: I,
                        stylesheetLoadTimeout: M,
                        keepIframeSrcFn: A,
                        depth: T,
                        maxDepth: O
                    });
                l && I(t, l, e)
            }
        }, G = M, Jt.has(q = t) || Xt(q) || Yt(q, H, () => Boolean(Xt(q)), [G])), j
    }

    function se(t) {
        return !0 === t || "all" === t ? {
            script: !0,
            comment: !0,
            headFavicon: !0,
            headWhitespace: !0,
            headMetaSocial: !0,
            headMetaRobots: !0,
            headMetaHttpEquiv: !0,
            headMetaVerification: !0,
            headMetaAuthorship: "all" === t,
            headMetaDescKeywords: "all" === t,
            headTitleMutations: "all" === t
        } : !1 === t ? {} : t
    }
    var oe = class t {
        constructor(...t) {
            it(this, "parentElement", null), it(this, "parentNode", null), it(this, "ownerDocument", void 0), it(this, "firstChild", null), it(this, "lastChild", null), it(this, "previousSibling", null), it(this, "nextSibling", null), it(this, "ELEMENT_NODE", 1), it(this, "TEXT_NODE", 3), it(this, "nodeType", void 0), it(this, "nodeName", void 0), it(this, "RRNodeType", void 0)
        }
        get childNodes() {
            const t = [];
            let e = this.firstChild;
            for (; e;) t.push(e), e = e.nextSibling;
            return t
        }
        contains(e) {
            if (!(e instanceof t)) return !1;
            if (e.ownerDocument !== this.ownerDocument) return !1;
            if (e === this) return !0;
            for (; e.parentNode;) {
                if (e.parentNode === this) return !0;
                e = e.parentNode
            }
            return !1
        }
        appendChild(t) {
            throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
        }
        insertBefore(t, e) {
            throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
        }
        removeChild(t) {
            throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
        }
        toString() {
            return "RRNode"
        }
    };

    function ae(t, e, n = document) {
        const i = {
            capture: !0,
            passive: !0
        };
        return n.addEventListener(t, e, i), () => le(n, t, e, i)
    }

    function le(t, e, n, i) {
        ue(() => {
            const r = t.removeEventListener;
            "function" == typeof r && (void 0 !== i ? r.call(t, e, n, i) : r.call(t, e, n))
        })
    }

    function ue(t) {
        try {
            t()
        } catch (t) {
            if (!(t instanceof DOMException && "SecurityError" === t.name)) throw t
        }
    }

    function ce(t) {
        t.forEach(t => {
            if ("function" == typeof t) try {
                t()
            } catch (t) {}
        })
    }
    var he = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.",
        de = {
            map: {},
            getId() {
                return console.warn(he), -1
            },
            getNode() {
                return console.warn(he), null
            },
            removeNodeFromMap() {
                console.warn(he)
            },
            has() {
                return console.warn(he), !1
            },
            reset() {
                console.warn(he)
            }
        };

    function fe(t, e, n = {}) {
        let i = null,
            r = 0;
        return function(...s) {
            const o = Date.now();
            r || !1 !== n.leading || (r = o);
            const a = e - (o - r),
                l = this;
            0 >= a || a > e ? (i && (clearTimeout(i), i = null), r = o, t.apply(l, s)) : i || !1 === n.trailing || (i = setTimeout(() => {
                r = !1 === n.leading ? 0 : Date.now(), i = null, t.apply(l, s)
            }, a))
        }
    }

    function ve(t, e, n, i, r = window) {
        const s = r.Object.getOwnPropertyDescriptor(t, e),
            o = () => ve(t, e, s || {}, !0);
        if (i) return r.Object.defineProperty(t, e, n), o;
        const a = function(t) {
            let e = "function" == typeof t.setTimeout ? t.setTimeout : void 0;
            try {
                var n, i;
                const r = null === (n = t.Zone) || void 0 === n || null === (i = n.__symbol__) || void 0 === i ? void 0 : i.call(n, "setTimeout"),
                    s = r ? t[r] : void 0;
                "function" == typeof s && (e = s)
            } catch (t) {}
            if (!e) return () => {};
            const r = e;
            return e => {
                try {
                    r.call(t, e, 0)
                } catch (t) {}
            }
        }(r);
        return r.Object.defineProperty(t, e, {
            set(t) {
                if (a(() => {
                        try {
                            n.set.call(this, t)
                        } catch (t) {}
                    }), s && s.set) {
                    if (s.get) try {
                        s.get.call(this)
                    } catch (t) {
                        return
                    }
                    s.set.call(this, t)
                }
            }
        }), o
    }
    "undefined" != typeof window && window.Proxy && window.Reflect && (de = new Proxy(de, {
        get(t, e, n) {
            return "map" === e && console.warn(he), Reflect.get(t, e, n)
        }
    }));
    var pe = Date.now;

    function me(t) {
        var e, n, i, r;
        const s = t.document;
        return {
            left: s.scrollingElement ? s.scrollingElement.scrollLeft : void 0 !== t.pageXOffset ? t.pageXOffset : s.documentElement.scrollLeft || (null == s ? void 0 : s.body) && (null === (e = R.parentElement(s.body)) || void 0 === e ? void 0 : e.scrollLeft) || (null == s || null === (n = s.body) || void 0 === n ? void 0 : n.scrollLeft) || 0,
            top: s.scrollingElement ? s.scrollingElement.scrollTop : void 0 !== t.pageYOffset ? t.pageYOffset : (null == s ? void 0 : s.documentElement.scrollTop) || (null == s ? void 0 : s.body) && (null === (i = R.parentElement(s.body)) || void 0 === i ? void 0 : i.scrollTop) || (null == s || null === (r = s.body) || void 0 === r ? void 0 : r.scrollTop) || 0
        }
    }

    function ge() {
        return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function ye() {
        return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function be(t) {
        return t ? t.nodeType === t.ELEMENT_NODE ? t : R.parentElement(t) : null
    }

    function we(t, e, n, i) {
        if (!t) return !1;
        const r = be(t);
        if (!r) return !1;
        try {
            if ("string" == typeof e) {
                if (r.classList.contains(e)) return !0;
                if (i && null !== r.closest("." + e)) return !0
            } else if (Gt(r, e, i)) return !0
        } catch (t) {}
        if (n) {
            if (r.matches(n)) return !0;
            if (i && null !== r.closest(n)) return !0
        }
        return !1
    }

    function ke(t, e, n) {
        const i = e && "string" != typeof e && (e.global || e.sticky) ? new RegExp(e) : null;
        for (; t;) {
            if (i && (i.lastIndex = 0), we(t, i || e, n, !0)) return !0;
            const r = "getRootNode" in t ? R.getRootNode(t) : null;
            t = (null == r ? void 0 : r.nodeType) === Node.DOCUMENT_FRAGMENT_NODE ? R.host(r) : null
        }
        return !1
    }

    function Se(t, e, n) {
        return !("TITLE" !== t.tagName || !n.headTitleMutations) || -2 === e.getId(t)
    }

    function _e(t, e) {
        if (st(t)) return !1;
        const n = e.getId(t);
        if (!e.has(n)) return !0;
        const i = R.parentNode(t);
        return (!i || i.nodeType !== t.DOCUMENT_NODE) && (!i || _e(i, e))
    }

    function Ce(t) {
        return Boolean(t.changedTouches)
    }

    function Ie(t, e) {
        return Boolean("IFRAME" === t.nodeName && e.getMeta(t))
    }

    function Me(t, e) {
        return Boolean("LINK" === t.nodeName && t.nodeType === t.ELEMENT_NODE && t.getAttribute && "stylesheet" === t.getAttribute("rel") && e.getMeta(t))
    }

    function Re(t) {
        return !!t && (t instanceof oe && "shadowRoot" in t ? Boolean(t.shadowRoot) : Boolean(R.shadowRoot(t)))
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (pe = () => (new Date).getTime());
    var Ae = class {
        constructor() {
            it(this, "id", 1), it(this, "styleIDMap", new WeakMap), it(this, "idStyleMap", new Map)
        }
        getId(t) {
            var e;
            return null !== (e = this.styleIDMap.get(t)) && void 0 !== e ? e : -1
        }
        has(t) {
            return this.styleIDMap.has(t)
        }
        add(t, e) {
            if (this.has(t)) return this.getId(t);
            let n;
            return n = void 0 === e ? this.id++ : e, this.styleIDMap.set(t, n), this.idStyleMap.set(n, t), n
        }
        getStyle(t) {
            return this.idStyleMap.get(t) || null
        }
        reset() {
            this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
        }
        generateId() {
            return this.id++
        }
    };

    function xe(t) {
        var e;
        let n = null;
        return "getRootNode" in t && (null === (e = R.getRootNode(t)) || void 0 === e ? void 0 : e.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && R.host(R.getRootNode(t)) && (n = R.host(R.getRootNode(t))), n
    }

    function Te(t) {
        const e = t.ownerDocument;
        if (!e) return !1;
        if (R.contains(e, t)) return !0;
        const n = R.isConnected(t);
        return "boolean" == typeof n ? n : function(t) {
            const e = t.ownerDocument;
            if (!e) return !1;
            const n = function(t) {
                let e, n = t;
                for (; e = xe(n);) n = e;
                return n
            }(t);
            return R.contains(e, n)
        }(t)
    }
    var Oe, Ee = (t, e) => `${t}@${e}`,
        Fe = class {
            constructor() {
                it(this, "frozen", !1), it(this, "locked", !1), it(this, "takePendingRecords", void 0), it(this, "texts", []), it(this, "attributes", []), it(this, "attributeMap", new WeakMap), it(this, "generatedAttributes", new WeakMap), it(this, "removes", []), it(this, "mapRemoves", new Set), it(this, "movedMap", {}), it(this, "addedSet", new Set), it(this, "movedSet", new Set), it(this, "droppedSet", new Set), it(this, "removesSubTreeCache", new Set), it(this, "mutationCb", void 0), it(this, "blockClass", void 0), it(this, "blockSelector", void 0), it(this, "maskTextClass", void 0), it(this, "maskTextSelector", void 0), it(this, "inlineStylesheet", void 0), it(this, "maskInputOptions", void 0), it(this, "maskTextFn", void 0), it(this, "maskInputFn", void 0), it(this, "maskAllElementAttributes", void 0), it(this, "maskAttributeFn", void 0), it(this, "keepIframeSrcFn", void 0), it(this, "recordCanvas", void 0), it(this, "canvasMaskingConfigured", void 0), it(this, "inlineImages", void 0), it(this, "slimDOMOptions", void 0), it(this, "dataURLOptions", void 0), it(this, "doc", void 0), it(this, "mirror", void 0), it(this, "iframeManager", void 0), it(this, "stylesheetManager", void 0), it(this, "shadowDomManager", void 0), it(this, "canvasManager", void 0), it(this, "processedNodeManager", void 0), it(this, "unattachedDoc", void 0), it(this, "canvasManagerReleased", !1), it(this, "processMutations", t => {
                    t.forEach(this.processMutation), this.emit()
                }), it(this, "emit", () => {
                    if (this.frozen || this.locked) return;
                    const t = A(),
                        e = E();
                    try {
                        this.processBufferedMutations()
                    } finally {
                        n = A() - t, i = e, L > 0 || F(n, null != i ? i : x) || n > q.slowestBatchMs && (q.slowestBatchMs = n)
                    }
                    var n, i
                }), it(this, "processBufferedMutations", () => {
                    const t = [],
                        e = new Set,
                        n = t => {
                            let e = t,
                                n = -2;
                            for (; - 2 === n;) e = e && e.nextSibling, n = e && this.mirror.getId(e);
                            return n
                        };
                    let r;
                    const s = i => {
                        var s;
                        const o = R.parentNode(i);
                        if (!o || !Te(i) || "TEXTAREA" === o.tagName) return !0;
                        if (this.isBlockedAtEmission(o)) return !0;
                        const a = st(o) ? this.mirror.getId(xe(i)) : this.mirror.getId(o),
                            l = n(i);
                        if (-1 === a || -1 === l) return !1;
                        null !== (s = r) && void 0 !== s || (r = this.buildSerializationOptions());
                        const u = re(i, r);
                        return u && (t.push({
                            parentId: a,
                            nextId: l,
                            node: u
                        }), e.add(u.id)), !0
                    };
                    for (const t of this.mapRemoves) this.mapRemoves.delete(t), this.mirror.removeNodeFromMap(t);
                    for (const t of this.movedSet) $e(this.removesSubTreeCache, t) && !this.movedSet.has(R.parentNode(t)) || this.addedSet.add(t);
                    for (const t of Array.from(this.addedSet)) {
                        const e = De(this.droppedSet, t),
                            n = $e(this.removesSubTreeCache, t),
                            i = this.movedSet.has(t) || De(this.movedSet, t);
                        !e && !n || i || (this.droppedSet.add(t), this.addedSet.delete(t))
                    }
                    const o = new Set;
                    let a = null;
                    const l = this.addedSet.values();
                    let u = l.next();
                    for (; this.addedSet.size;) {
                        let t = null;
                        if (null !== a)
                            for (t = R.previousSibling(a); t && -2 === this.mirror.getId(t);) t = R.previousSibling(t);
                        if (t && this.addedSet.has(t)) a = t;
                        else {
                            for (this.addedSet.has(u.value) || (u = l.next()), a = u.value;;) {
                                const t = R.parentNode(a),
                                    e = t && t.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? R.host(t) : t;
                                if (!e || !this.addedSet.has(e)) break;
                                a = e
                            }
                            const t = R.parentNode(a);
                            if (t && this.addedSet.has(R.lastChild(t))) a = R.lastChild(t);
                            else if (t)
                                for (;;) {
                                    let t = R.nextSibling(a);
                                    for (; t && -2 === this.mirror.getId(t);) t = R.nextSibling(t);
                                    if (!t || !this.addedSet.has(t)) break;
                                    a = t
                                }
                        }
                        this.addedSet.delete(a);
                        const e = R.parentNode(a),
                            n = e && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? R.host(e) : e;
                        n && o.has(n) ? o.add(a) : s(a) || o.add(a)
                    }
                    o.size > 0 && console.warn(`[rrweb] dropped ${o.size} node(s) with unresolved parent at emit`);
                    const c = {
                            texts: this.texts.filter(t => !this.isBlockedAtEmission(t.node)).map(t => {
                                const e = t.node,
                                    n = R.parentNode(e);
                                return n && "TEXTAREA" === n.tagName && this.genTextAreaValueMutation(n), {
                                    id: this.mirror.getId(e),
                                    value: t.value
                                }
                            }).filter(t => !e.has(t.id)).filter(t => this.mirror.has(t.id)),
                            attributes: this.attributes.filter(t => !this.isBlockedAtEmission(t.node)).map(t => {
                                const {
                                    attributes: e
                                } = t;
                                if (!this.maskAllElementAttributes && !this.maskAttributeFn && "string" == typeof e.style) {
                                    const n = JSON.stringify(t.styleDiff),
                                        i = JSON.stringify(t._unchangedStyles);
                                    e.style.length > n.length && (n + i).split("var(").length === e.style.split("var(").length && (e.style = t.styleDiff)
                                }
                                if (this.maskAllElementAttributes || this.maskAttributeFn)
                                    for (const [i, r] of Object.entries(e))
                                        if ("string" == typeof r || null === r) {
                                            var n;
                                            e[i] = St({
                                                element: t.node,
                                                name: i,
                                                value: r,
                                                maskAllElementAttributes: this.maskAllElementAttributes,
                                                maskAttributeFn: this.maskAttributeFn,
                                                isGenerated: null === (n = this.generatedAttributes.get(t.node)) || void 0 === n ? void 0 : n.has(i)
                                            })
                                        }
                                return {
                                    id: this.mirror.getId(t.node),
                                    attributes: e
                                }
                            }).filter(t => !e.has(t.id)).filter(t => this.mirror.has(t.id)),
                            removes: this.removes,
                            adds: t
                        },
                        h = [];
                    if (this.inlineStylesheet)
                        for (const {
                                id: t,
                                attributes: e
                            } of c.attributes) {
                            if (!("rel" in e) && !("href" in e)) continue;
                            const n = this.mirror.getNode(t);
                            n && "link" === wt(n.nodeName) && Ht(n.getAttribute("rel")) && n.getAttribute("href") && !n.disabled && h.push(n)
                        }
                    if (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.generatedAttributes = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, c.texts.length || c.attributes.length || c.removes.length || c.adds.length) {
                        this.mutationCb(c);
                        for (const t of h) this.stylesheetManager.inlineLinkStylesheetAfterChange(t, {
                            currentId: () => this.mirror.getId(t),
                            reserializeWithoutCss: () => ({
                                previous: this.mirror.getMeta(t),
                                current: re(t, i(i({}, this.buildSerializationOptions()), {}, {
                                    inlineStylesheet: !1
                                }))
                            }),
                            lastSerialization: () => this.mirror.getMeta(t),
                            readdAsMove: () => this.recordReinsertion(t)
                        })
                    }
                }), it(this, "bufferBelongsToIframe", t => this.doc === t.contentDocument), it(this, "genTextAreaValueMutation", t => {
                    let e = this.attributeMap.get(t);
                    e || (e = {
                        node: t,
                        attributes: {},
                        styleDiff: {},
                        _unchangedStyles: {}
                    }, this.attributes.push(e), this.attributeMap.set(t, e));
                    const n = Array.from(R.childNodes(t), t => R.textContent(t) || "").join("");
                    e.attributes.value = bt({
                        element: t,
                        maskInputOptions: this.maskInputOptions,
                        tagName: t.tagName,
                        type: Ct(t),
                        value: n,
                        maskInputFn: this.maskInputFn
                    })
                }), it(this, "processMutation", t => {
                    if (!Se(t.target, this.mirror, this.slimDOMOptions)) switch (t.type) {
                        case "characterData":
                            {
                                const e = R.textContent(t.target);we(t.target, this.blockClass, this.blockSelector, !1) || e === t.oldValue || this.texts.push({
                                    value: Vt(t.target, this.maskTextClass, this.maskTextSelector, !0) && e ? this.maskTextFn ? this.maskTextFn(e, be(t.target)) : e.replace(/[\S]/g, "*") : e,
                                    node: t.target
                                });
                                break
                            }
                        case "attributes":
                            {
                                var e;
                                const i = t.target,
                                    r = wt(i.tagName),
                                    s = t.attributeName,
                                    o = null !== (e = t.attributeNamespace) && void 0 !== e ? e : null;
                                let a = function(t, e, n) {
                                        if (!n) return e;
                                        const i = t.getAttributeNodeNS(n, e);
                                        if (i) return i.name;
                                        if ("http://www.w3.org/1999/xlink" === n) return `xlink:${e}`;
                                        if ("http://www.w3.org/XML/1998/namespace" === n) return `xml:${e}`;
                                        if ("http://www.w3.org/2000/xmlns/" === n) return "xmlns" === e ? e : `xmlns:${e}`;
                                        const r = t.lookupPrefix(n);
                                        return r ? `${r}:${e}` : e
                                    }(i, s, o),
                                    l = o ? i.getAttributeNS(o, s) : t.target.getAttribute(s);
                                if ("value" === a) {
                                    const t = i,
                                        e = Ct(t);
                                    l = bt({
                                        element: t,
                                        maskInputOptions: this.maskInputOptions,
                                        tagName: i.tagName,
                                        type: e,
                                        value: l,
                                        maskInputFn: this.maskInputFn
                                    })
                                }
                                if (we(t.target, this.blockClass, this.blockSelector, !1) || l === t.oldValue) return;
                                let u = this.attributeMap.get(t.target);
                                const c = "iframe" === r && "src" === a;
                                if (c && !this.keepIframeSrcFn(l) && i.contentDocument) return;
                                if ("type" === a && "input" === r && "password" === (t.oldValue || "").toLowerCase() && i.setAttribute("data-rr-is-password", "true"), !qt(r, a)) {
                                    var n;
                                    u || (u = {
                                        node: t.target,
                                        attributes: {},
                                        styleDiff: {},
                                        _unchangedStyles: {}
                                    }, this.attributes.push(u), this.attributeMap.set(t.target, u));
                                    const e = Ut(this.doc, r, wt(a), l, i, this.dataURLOptions);
                                    if (c && !this.keepIframeSrcFn(l) && (a = "rr_src"), u.attributes[a] = e, null === (n = this.generatedAttributes.get(t.target)) || void 0 === n || n.delete(a), "style" === a) {
                                        if (!this.unattachedDoc) try {
                                            this.unattachedDoc = document.implementation.createHTMLDocument()
                                        } catch (t) {
                                            this.unattachedDoc = this.doc
                                        }
                                        const e = this.unattachedDoc.createElement("span"),
                                            n = i.style;
                                        t.oldValue && (e.style.cssText = t.oldValue);
                                        for (const t of Array.from(n)) {
                                            const i = n.getPropertyValue(t),
                                                r = n.getPropertyPriority(t);
                                            i !== e.style.getPropertyValue(t) || r !== e.style.getPropertyPriority(t) ? u.styleDiff[t] = "" === r ? i : [i, r] : u._unchangedStyles[t] = [i, r]
                                        }
                                        for (const t of Array.from(e.style)) "" === n.getPropertyValue(t) && (u.styleDiff[t] = !1)
                                    } else if ("open" === a && "dialog" === r) {
                                        u.attributes.rr_open_mode = i.matches("dialog:modal") ? "modal" : "non-modal";
                                        let e = this.generatedAttributes.get(t.target);
                                        e || (e = new Set, this.generatedAttributes.set(t.target, e)), e.add("rr_open_mode")
                                    }
                                }
                                break
                            }
                        case "childList":
                            if (t.removedNodes.forEach(t => {
                                    Te(t) || this.shadowDomManager.removeShadowRootsIn(t)
                                }), we(t.target, this.blockClass, this.blockSelector, !0)) return;
                            if ("TEXTAREA" === t.target.tagName) return void this.genTextAreaValueMutation(t.target);
                            t.addedNodes.forEach(e => this.genAdds(e, t.target)), t.removedNodes.forEach(e => {
                                const n = this.mirror.getId(e),
                                    i = st(t.target) ? this.mirror.getId(R.host(t.target)) : this.mirror.getId(t.target);
                                we(t.target, this.blockClass, this.blockSelector, !1) || Se(e, this.mirror, this.slimDOMOptions) || ! function(t, e) {
                                    return -1 !== e.getId(t)
                                }(e, this.mirror) || (this.addedSet.has(e) ? (Le(this.addedSet, e), this.droppedSet.add(e)) : this.addedSet.has(t.target) && -1 === n || _e(t.target, this.mirror) || (this.movedSet.has(e) && this.movedMap[Ee(n, i)] ? Le(this.movedSet, e) : (this.removes.push({
                                    parentId: i,
                                    id: n,
                                    isShadow: !(!st(t.target) || !ot(t.target)) || void 0
                                }), function(t, e) {
                                    const n = [t];
                                    for (; n.length;) {
                                        const t = n.pop();
                                        e.has(t) || (e.add(t), R.childNodes(t).forEach(t => n.push(t)))
                                    }
                                }(e, this.removesSubTreeCache))), this.mapRemoves.add(e))
                            })
                    }
                }), it(this, "genAdds", (t, e) => {
                    if (!this.processedNodeManager.inOtherBuffer(t, this)) {
                        if (this.addedSet.has(t)) return this.addedSet.delete(t), void this.addedSet.add(t);
                        if (!this.movedSet.has(t)) {
                            if (this.mirror.hasNode(t)) {
                                if (Se(t, this.mirror, this.slimDOMOptions)) return;
                                this.movedSet.add(t);
                                let n = null;
                                e && this.mirror.hasNode(e) && (n = this.mirror.getId(e)), n && -1 !== n && (this.movedMap[Ee(this.mirror.getId(t), n)] = !0)
                            } else this.addedSet.add(t), this.droppedSet.delete(t);
                            if (!we(t, this.blockClass, this.blockSelector, !1)) {
                                if (t.nodeType === t.TEXT_NODE) return;
                                const e = R.childNodes(t);
                                for (let t = 0, n = e.length; n > t; t++) {
                                    const n = e[t];
                                    n && this.genAdds(n)
                                }
                                if (Re(t)) {
                                    const e = R.childNodes(R.shadowRoot(t));
                                    for (let n = 0, i = e.length; i > n; n++) {
                                        const i = e[n];
                                        i && (this.processedNodeManager.add(i, this), this.genAdds(i, t))
                                    }
                                }
                            }
                        }
                    }
                })
            }
            init(t) {
                ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "maskAllElementAttributes", "maskAttributeFn", "keepIframeSrcFn", "recordCanvas", "canvasMaskingConfigured", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach(e => {
                    this[e] = t[e]
                }), this.canvasManager.acquire()
            }
            freeze() {
                this.frozen = !0, this.canvasManager.freeze()
            }
            unfreeze() {
                this.frozen = !1, this.canvasManager.unfreeze(), this.emit()
            }
            isFrozen() {
                return this.frozen
            }
            lock() {
                this.locked = !0, this.canvasManager.lock()
            }
            unlock() {
                this.locked = !1, this.canvasManager.unlock(), this.emit()
            }
            readPendingRecordsFrom(t) {
                this.takePendingRecords = () => t.takeRecords()
            }
            reset() {
                this.releaseCanvasManager()
            }
            releaseCanvasManager() {
                this.canvasManagerReleased || (this.canvasManagerReleased = !0, this.canvasManager.reset())
            }
            bufferDoc() {
                return this.doc
            }
            destroy() {
                for (const t of this.mapRemoves) this.mapRemoves.delete(t), this.mirror.removeNodeFromMap(t)
            }
            isBlockedAtEmission(t) {
                return ke(t, this.blockClass, this.blockSelector)
            }
            recordReinsertion(t) {
                var e;
                const n = R.parentNode(t);
                if (!n) return;
                null === (e = this.takePendingRecords) || void 0 === e || e.call(this).forEach(this.processMutation);
                const i = (t, e) => ({
                    type: "childList",
                    target: n,
                    removedNodes: t,
                    addedNodes: e,
                    oldValue: null,
                    attributeName: null
                });
                this.processMutation(i([t], [])), this.processMutation(i([], [t])), this.emit()
            }
            buildSerializationOptions() {
                return {
                    doc: this.doc,
                    mirror: this.mirror,
                    blockClass: this.blockClass,
                    blockSelector: this.blockSelector,
                    maskTextClass: this.maskTextClass,
                    maskTextSelector: this.maskTextSelector,
                    skipChild: !0,
                    newlyAddedElement: !0,
                    inlineStylesheet: this.inlineStylesheet,
                    maskInputOptions: this.maskInputOptions,
                    maskTextFn: this.maskTextFn,
                    maskInputFn: this.maskInputFn,
                    maskAllElementAttributes: this.maskAllElementAttributes,
                    maskAttributeFn: this.maskAttributeFn,
                    slimDOMOptions: this.slimDOMOptions,
                    dataURLOptions: this.dataURLOptions,
                    recordCanvas: this.recordCanvas,
                    canvasMaskingConfigured: this.canvasMaskingConfigured,
                    inlineImages: this.inlineImages,
                    onSerialize: t => {
                        Ie(t, this.mirror) && this.iframeManager.addIframe(t), Me(t, this.mirror) && this.stylesheetManager.trackLinkElement(t), Re(t) && !we(t, this.blockClass, this.blockSelector, !0) && this.shadowDomManager.addShadowRoot(R.shadowRoot(t), this.doc)
                    },
                    onIframeLoad: (t, e) => {
                        this.iframeManager.attachIframe(t, e), this.shadowDomManager.observeAttachShadow(t)
                    },
                    onIframeListenerRegistered: (t, e) => {
                        this.iframeManager.registerLoadListenerDisposer(t, e)
                    },
                    onStylesheetLoad: (t, e, n) => {
                        this.stylesheetManager.attachLinkElement(t, e, n)
                    }
                }
            }
        };

    function Le(t, e) {
        const n = [e];
        for (; n.length;) {
            const e = n.pop();
            if (t.delete(e), e.nodeType === e.TEXT_NODE) continue;
            const i = R.childNodes(e);
            for (let t = 0, e = i.length; e > t; t++) {
                const e = i[t];
                e && n.push(e)
            }
        }
    }

    function $e(t, e, n) {
        return 0 !== t.size && function(t, e) {
            const n = R.parentNode(e);
            return !!n && t.has(n)
        }(t, e)
    }

    function De(t, e) {
        if (0 === t.size) return !1;
        let n = R.parentNode(e);
        for (; n;) {
            if (t.has(n)) return !0;
            n = R.parentNode(n)
        }
        return !1
    }

    function Ne(t) {
        Oe = t
    }

    function Pe() {
        Oe = void 0
    }
    var je = (t, e = "rrweb") => Oe ? (...n) => {
            try {
                return t(...n)
            } catch (t) {
                if (Oe && !0 === Oe(t, e)) return;
                throw t
            }
        } : t,
        Be = [];

    function ze(t) {
        try {
            if ("composedPath" in t) {
                const e = t.composedPath();
                if (e.length) return e[0]
            } else if ("path" in t && t.path.length) return t.path[0]
        } catch (t) {}
        return t && t.target
    }

    function We(t, e) {
        const n = new Fe;
        let i;
        n.init(t);
        try {
            i = new(I())(je(n.processMutations.bind(n)));
            const r = {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            };
            return t.attributeFilter && t.attributeFilter.length > 0 && (r.attributeFilter = t.attributeFilter), i.observe(e, r), n.readPendingRecordsFrom(i), Be.push(n), {
                observer: i,
                buffer: n
            }
        } catch (t) {
            try {
                null == i || i.disconnect(), n.destroy(), n.reset()
            } catch (t) {}
            throw t
        }
    }

    function Ue({
        scrollCb: t,
        doc: e,
        mirror: n,
        blockClass: i,
        blockSelector: r,
        sampling: s
    }) {
        const o = new Map,
            a = s => {
                const a = ze(s);
                if (!a || we(a, i, r, !0)) return;
                const l = n.getId(a);
                let u, c;
                if (a === e && e.defaultView) {
                    const t = me(e.defaultView);
                    u = t.left, c = t.top
                } else u = a.scrollLeft, c = a.scrollTop;
                const h = `${u},${c}`;
                o.get(l) !== h && (o.set(l, h), t({
                    id: l,
                    x: u,
                    y: c
                }))
            },
            l = [ae("scroll", je(fe(je(t => a(t)), s.scroll || 100)), e)];
        return "onscrollend" in e && l.push(ae("scrollend", je(a), e)), () => l.forEach(t => t())
    }

    function qe(t, e) {
        for (let n = Be.length - 1; n >= 0; n--) {
            const i = Be[n];
            if (!i) continue;
            let r = i.bufferBelongsToIframe(t);
            !r && e && e.has(i.bufferDoc()) && (r = !0), r && (i.reset(), Be.splice(n, 1))
        }
    }
    var He = ["INPUT", "TEXTAREA", "SELECT"],
        Ge = new WeakMap;

    function Ve(t) {
        return function t(e, n) {
            if (Ye("CSSGroupingRule") && e.parentRule instanceof CSSGroupingRule || Ye("CSSMediaRule") && e.parentRule instanceof CSSMediaRule || Ye("CSSSupportsRule") && e.parentRule instanceof CSSSupportsRule || Ye("CSSConditionRule") && e.parentRule instanceof CSSConditionRule) {
                const i = Array.from(e.parentRule.cssRules).indexOf(e);
                return n.unshift(i), t(e.parentRule, n)
            }
            if (e.parentStyleSheet) {
                const t = Array.from(e.parentStyleSheet.cssRules).indexOf(e);
                n.unshift(t)
            }
            return n
        }(t, [])
    }

    function Ze(t, e, n) {
        let i, r;
        return t ? (t.ownerNode ? i = e.getId(t.ownerNode) : r = n.getId(t), {
            styleId: r,
            id: i
        }) : {}
    }

    function Je({
        mirror: t,
        stylesheetManager: e
    }, n) {
        var i, r;
        let s = null;
        s = t.getId("#document" === n.nodeName ? n : R.host(n));
        const o = "#document" === n.nodeName ? null === (i = n.defaultView) || void 0 === i ? void 0 : i.Document : null === (r = n.ownerDocument) || void 0 === r || null === (r = r.defaultView) || void 0 === r ? void 0 : r.ShadowRoot,
            a = (null == o ? void 0 : o.prototype) ? Object.getOwnPropertyDescriptor(null == o ? void 0 : o.prototype, "adoptedStyleSheets") : void 0;
        return null !== s && -1 !== s && o && a ? (Object.defineProperty(n, "adoptedStyleSheets", {
            configurable: a.configurable,
            enumerable: a.enumerable,
            get() {
                var t;
                return null === (t = a.get) || void 0 === t ? void 0 : t.call(this)
            },
            set(t) {
                let n;
                try {
                    var i;
                    n = null === (i = a.set) || void 0 === i ? void 0 : i.call(this, t)
                } catch (t) {
                    if (t && "object" == typeof t && "NotAllowedError" === t.name) return;
                    throw t
                }
                if (null !== s && -1 !== s) try {
                    e.adoptStyleSheets(t, s)
                } catch (t) {}
                return n
            }
        }), je(() => {
            Object.defineProperty(n, "adoptedStyleSheets", {
                configurable: a.configurable,
                enumerable: a.enumerable,
                get: a.get,
                set: a.set
            })
        })) : () => {}
    }
    var Qe = new Set;

    function Xe(t, e = {}) {
        const n = t.doc.defaultView;
        if (!n) return () => {};
        let r, s;
        ! function(t, e) {
            const {
                mutationCb: n,
                mousemoveCb: i,
                mouseInteractionCb: r,
                scrollCb: s,
                viewportResizeCb: o,
                inputCb: a,
                mediaInteractionCb: l,
                styleSheetRuleCb: u,
                styleDeclarationCb: c,
                canvasMutationCb: h,
                fontCb: d,
                selectionCb: f,
                customElementCb: v
            } = t;
            t.mutationCb = (...t) => {
                e.mutation && e.mutation(...t), n(...t)
            }, t.mousemoveCb = (...t) => {
                e.mousemove && e.mousemove(...t), i(...t)
            }, t.mouseInteractionCb = (...t) => {
                e.mouseInteraction && e.mouseInteraction(...t), r(...t)
            }, t.scrollCb = (...t) => {
                e.scroll && e.scroll(...t), s(...t)
            }, t.viewportResizeCb = (...t) => {
                e.viewportResize && e.viewportResize(...t), o(...t)
            }, t.inputCb = (...t) => {
                e.input && e.input(...t), a(...t)
            }, t.mediaInteractionCb = (...t) => {
                e.mediaInteaction && e.mediaInteaction(...t), l(...t)
            }, t.styleSheetRuleCb = (...t) => {
                e.styleSheetRule && e.styleSheetRule(...t), u(...t)
            }, t.styleDeclarationCb = (...t) => {
                e.styleDeclaration && e.styleDeclaration(...t), c(...t)
            }, t.canvasMutationCb = (...t) => {
                e.canvasMutation && e.canvasMutation(...t), h(...t)
            }, t.fontCb = (...t) => {
                e.font && e.font(...t), d(...t)
            }, t.selectionCb = (...t) => {
                e.selection && e.selection(...t), f(...t)
            }, t.customElementCb = (...t) => {
                e.customElement && e.customElement(...t), v(...t)
            }
        }(t, e);
        const o = [],
            a = je(() => {
                try {
                    if (s) try {
                        s.destroy(), s.reset()
                    } finally {
                        const t = Be.indexOf(s); - 1 !== t && Be.splice(t, 1)
                    }
                    t.shadowDomManager.resetForDoc(t.doc), null == r || r.disconnect()
                } finally {
                    ce(o)
                }
            }),
            h = (t, e) => {
                const n = je(() => {
                    try {
                        return e()
                    } catch (e) {
                        throw Qe.add(t), e
                    }
                })();
                "function" == typeof n && o.push(n)
            };
        try {
            if (t.recordDOM && h("mutation", () => {
                    const e = We(t, t.doc);
                    r = e.observer, s = e.buffer
                }), h("move", () => function({
                    mousemoveCb: t,
                    sampling: e,
                    doc: n,
                    mirror: i
                }) {
                    if (!1 === e.mousemove) return () => {};
                    const r = "number" == typeof e.mousemove ? e.mousemove : 50,
                        s = "number" == typeof e.mousemoveCallback ? e.mousemoveCallback : 500;
                    let o, a = [];
                    const u = fe(je(e => {
                            const n = Date.now() - o;
                            t(a.map(t => (t.timeOffset -= n, t)), e), a = [], o = null
                        }), s),
                        c = je(fe(je(t => {
                            const e = ze(t),
                                {
                                    clientX: n,
                                    clientY: r
                                } = Ce(t) ? t.changedTouches[0] : t;
                            o || (o = pe()), a.push({
                                x: n,
                                y: r,
                                id: i.getId(e),
                                timeOffset: pe() - o
                            }), u("drag" === t.type ? l.Drag : "touchmove" === t.type ? l.TouchMove : l.MouseMove)
                        }), r, {
                            trailing: !1
                        })),
                        h = [ae("mousemove", c, n), ae("touchmove", c, n), ae("drag", c, n)];
                    return je(() => {
                        h.forEach(t => t())
                    })
                }(t)), h("mouseInteraction", () => function({
                    mouseInteractionCb: t,
                    doc: e,
                    mirror: n,
                    blockClass: r,
                    blockSelector: s,
                    sampling: o
                }) {
                    if (!1 === o.mouseInteraction) return () => {};
                    const a = !0 === o.mouseInteraction || void 0 === o.mouseInteraction ? {} : o.mouseInteraction,
                        l = [];
                    let h = null;
                    return Object.keys(u).filter(t => Number.isNaN(Number(t)) && !t.endsWith("_Departed") && !1 !== a[t]).forEach(o => {
                        let a = wt(o);
                        const d = (e => o => {
                            const a = ze(o);
                            if (we(a, r, s, !0)) return;
                            let l = null,
                                d = e;
                            if ("pointerType" in o) {
                                switch (o.pointerType) {
                                    case "mouse":
                                        l = c.Mouse;
                                        break;
                                    case "touch":
                                        l = c.Touch;
                                        break;
                                    case "pen":
                                        l = c.Pen
                                }
                                l === c.Touch && (u[e] === u.MouseDown ? d = "TouchStart" : u[e] === u.MouseUp && (d = "TouchEnd"))
                            } else Ce(o) && (l = c.Touch);
                            null !== l ? (h = l, (d.startsWith("Touch") && l === c.Touch || d.startsWith("Mouse") && l === c.Mouse) && (l = null)) : u[e] === u.Click && (l = h, h = null);
                            const f = Ce(o) ? o.changedTouches[0] : o;
                            if (!f) return;
                            const v = n.getId(a),
                                {
                                    clientX: p,
                                    clientY: m
                                } = f;
                            je(t)(i({
                                type: u[d],
                                id: v,
                                x: p,
                                y: m
                            }, null !== l && {
                                pointerType: l
                            }))
                        })(o);
                        if (window.PointerEvent) switch (u[o]) {
                            case u.MouseDown:
                            case u.MouseUp:
                                a = a.replace("mouse", "pointer");
                                break;
                            case u.TouchStart:
                            case u.TouchEnd:
                                return
                        }
                        l.push(ae(a, d, e))
                    }), je(() => {
                        l.forEach(t => t())
                    })
                }(t)), h("scroll", () => Ue(t)), h("viewportResize", () => function({
                    viewportResizeCb: t
                }, {
                    win: e
                }) {
                    let n = -1,
                        i = -1;
                    return ae("resize", je(fe(je(() => {
                        const e = ge(),
                            r = ye();
                        n === e && i === r || (t({
                            width: Number(r),
                            height: Number(e)
                        }), n = e, i = r)
                    }), 200)), e)
                }(t, {
                    win: n
                })), h("input", () => function({
                    inputCb: t,
                    doc: e,
                    mirror: n,
                    blockClass: r,
                    blockSelector: s,
                    ignoreClass: o,
                    ignoreSelector: a,
                    maskInputOptions: l,
                    maskInputFn: u,
                    sampling: c,
                    userTriggeredOnInput: h
                }) {
                    function d(t) {
                        let n = ze(t);
                        const i = t.isTrusted,
                            c = e.defaultView;
                        if (n && c && !(n instanceof c.HTMLElement)) return;
                        const d = n && n.tagName;
                        if (n && "OPTION" === d && (n = R.parentElement(n)), !n || !d || 0 > He.indexOf(d) || we(n, r, s, !0)) return;
                        if (n.classList.contains(o) || a && n.matches(a)) return;
                        let v = n.value,
                            p = !1;
                        const m = Ct(n) || "";
                        "radio" === m || "checkbox" === m ? p = n.checked : (l[d.toLowerCase()] || l[m]) && (v = bt({
                            element: n,
                            maskInputOptions: l,
                            tagName: d,
                            type: m,
                            value: v,
                            maskInputFn: u
                        })), f(n, h ? {
                            text: v,
                            isChecked: p,
                            userTriggered: i
                        } : {
                            text: v,
                            isChecked: p
                        });
                        const g = n.name;
                        "radio" === m && g && p && e.querySelectorAll(`input[type="radio"][name="${g}"]`).forEach(t => {
                            if (t !== n) {
                                const e = t.value;
                                f(t, h ? {
                                    text: e,
                                    isChecked: !p,
                                    userTriggered: !1
                                } : {
                                    text: e,
                                    isChecked: !p
                                })
                            }
                        })
                    }

                    function f(e, r) {
                        const s = Ge.get(e);
                        if (!s || s.text !== r.text || s.isChecked !== r.isChecked) {
                            Ge.set(e, r);
                            const s = n.getId(e);
                            je(t)(i(i({}, r), {}, {
                                id: s
                            }))
                        }
                    }
                    const v = ("last" === c.input ? ["change"] : ["input", "change"]).map(t => ae(t, je(d), e)),
                        p = e.defaultView;
                    if (!p) return () => {
                        v.forEach(t => t())
                    };
                    const m = p.Object.getOwnPropertyDescriptor(p.HTMLInputElement.prototype, "value");
                    return m && m.set && v.push(...[
                        [p.HTMLInputElement.prototype, "value"],
                        [p.HTMLInputElement.prototype, "checked"],
                        [p.HTMLSelectElement.prototype, "value"],
                        [p.HTMLTextAreaElement.prototype, "value"],
                        [p.HTMLSelectElement.prototype, "selectedIndex"],
                        [p.HTMLOptionElement.prototype, "selected"]
                    ].map(t => ve(t[0], t[1], {
                        set() {
                            je(d)({
                                target: this,
                                isTrusted: !1
                            })
                        }
                    }, !1, p))), je(() => {
                        ce(v)
                    })
                }(t)), h("mediaInteraction", () => function({
                    mediaInteractionCb: t,
                    blockClass: e,
                    blockSelector: n,
                    mirror: i,
                    sampling: r,
                    doc: s
                }) {
                    const o = je(s => fe(je(r => {
                            const o = ze(r);
                            if (!o || we(o, e, n, !0)) return;
                            const {
                                currentTime: a,
                                volume: l,
                                muted: u,
                                playbackRate: c,
                                loop: h
                            } = o;
                            t({
                                type: s,
                                id: i.getId(o),
                                currentTime: a,
                                volume: l,
                                muted: u,
                                playbackRate: c,
                                loop: h
                            })
                        }), r.media || 500)),
                        a = [ae("play", o(d.Play), s), ae("pause", o(d.Pause), s), ae("seeked", o(d.Seeked), s), ae("volumechange", o(d.VolumeChange), s), ae("ratechange", o(d.RateChange), s)];
                    return je(() => {
                        a.forEach(t => t())
                    })
                }(t)), t.recordDOM) {
                const e = function(t) {
                    const e = new Map,
                        n = new Set;
                    let i = !0;
                    const r = t => {
                            if (i) try {
                                t()
                            } catch (t) {}
                        },
                        s = t => {
                            var n;
                            const i = e.get(t);
                            if (i) {
                                for (; null === (n = i[0]) || void 0 === n ? void 0 : n.ready;) {
                                    const t = i.shift();
                                    (null == t ? void 0 : t.emit) && r(t.emit)
                                }
                                0 === i.length && e.delete(t)
                            }
                        };
                    return {
                        queueMutation(t, n) {
                            if (!t) return void r(n);
                            const i = e.get(t);
                            i ? (i.push({
                                emit: n,
                                ready: !0
                            }), s(t)) : r(n)
                        },
                        queuePendingMutation(o, a, l) {
                            if (!i) return () => {};
                            let u = e.get(o);
                            u || (u = [], e.set(o, u));
                            const c = {
                                emit: a,
                                ready: !1
                            };
                            u.push(c);
                            let h, d = !1,
                                f = !1;
                            const v = () => {
                                d || f || (d = !0, void 0 !== h && n.delete(h), c.ready = !0, c.emit = void 0, s(o))
                            };
                            try {
                                h = t.setTimeout(v, 5e3), d || f ? t.clearTimeout(h) : n.add(h)
                            } catch (t) {
                                v()
                            }
                            return e => {
                                !f && i && (f = !0, void 0 !== h && (t.clearTimeout(h), n.delete(h)), d ? e && r(l) : (c.ready = !0, e || (c.emit = void 0), s(o)))
                            }
                        },
                        reset() {
                            i = !1, n.forEach(e => t.clearTimeout(e)), n.clear(), e.clear()
                        }
                    }
                }(n);
                o.push(e.reset), h("styleSheet", () => function({
                    styleSheetRuleCb: t,
                    mirror: e,
                    stylesheetManager: n
                }, {
                    win: i,
                    mutationQueue: r
                }) {
                    if (!i.CSSStyleSheet || !i.CSSStyleSheet.prototype) return () => {};
                    const s = i.CSSStyleSheet.prototype.insertRule;
                    i.CSSStyleSheet.prototype.insertRule = new Proxy(s, {
                        apply: je((i, s, o) => {
                            const [a] = o, l = i.apply(s, o);
                            n.onCssomSheetMutation(s);
                            const {
                                id: u,
                                styleId: c
                            } = Ze(s, e, n.styleMirror);
                            return (u && -1 !== u || c && -1 !== c) && r.queueMutation(s, () => t({
                                id: u,
                                styleId: c,
                                adds: [{
                                    rule: a,
                                    index: l
                                }]
                            })), l
                        }, "host")
                    }), i.CSSStyleSheet.prototype.addRule = function(t, e, n = this.cssRules.length) {
                        return i.CSSStyleSheet.prototype.insertRule.apply(this, [`${t} { ${e} }`, n])
                    };
                    const o = i.CSSStyleSheet.prototype.deleteRule;
                    let a, l;
                    i.CSSStyleSheet.prototype.deleteRule = new Proxy(o, {
                        apply: je((i, s, o) => {
                            const [a] = o, l = i.apply(s, o);
                            n.onCssomSheetMutation(s);
                            const {
                                id: u,
                                styleId: c
                            } = Ze(s, e, n.styleMirror);
                            return (u && -1 !== u || c && -1 !== c) && r.queueMutation(s, () => t({
                                id: u,
                                styleId: c,
                                removes: [{
                                    index: a
                                }]
                            })), l
                        }, "host")
                    }), i.CSSStyleSheet.prototype.removeRule = function(t) {
                        return i.CSSStyleSheet.prototype.deleteRule.apply(this, [t])
                    }, i.CSSStyleSheet.prototype.replace && (a = i.CSSStyleSheet.prototype.replace, i.CSSStyleSheet.prototype.replace = new Proxy(a, {
                        apply: je((i, s, o) => {
                            const [a] = o, l = i.apply(s, o);
                            try {
                                const i = null == l ? void 0 : l.then;
                                if (s.ownerNode || !l || "function" != typeof i) return l;
                                n.onCssomSheetMutation(s);
                                const {
                                    id: o,
                                    styleId: u
                                } = Ze(s, e, n.styleMirror);
                                if (!(o && -1 !== o || u && -1 !== u)) return l;
                                const c = r.queuePendingMutation(s, () => t({
                                    id: o,
                                    styleId: u,
                                    replace: a
                                }), () => {
                                    const e = ct(s);
                                    null !== e && t({
                                        id: o,
                                        styleId: u,
                                        replace: e
                                    })
                                });
                                try {
                                    i.call(l, () => c(!0), () => c(!1))
                                } catch (t) {
                                    c(!1)
                                }
                            } catch (t) {}
                            return l
                        }, "host")
                    })), i.CSSStyleSheet.prototype.replaceSync && (l = i.CSSStyleSheet.prototype.replaceSync, i.CSSStyleSheet.prototype.replaceSync = new Proxy(l, {
                        apply: je((i, s, o) => {
                            const [a] = o, l = i.apply(s, o);
                            n.onCssomSheetMutation(s);
                            const {
                                id: u,
                                styleId: c
                            } = Ze(s, e, n.styleMirror);
                            return (u && -1 !== u || c && -1 !== c) && r.queueMutation(s, () => t({
                                id: u,
                                styleId: c,
                                replaceSync: a
                            })), l
                        }, "host")
                    }));
                    const u = {};
                    Ke("CSSGroupingRule") ? u.CSSGroupingRule = i.CSSGroupingRule : (Ke("CSSMediaRule") && (u.CSSMediaRule = i.CSSMediaRule), Ke("CSSConditionRule") && (u.CSSConditionRule = i.CSSConditionRule), Ke("CSSSupportsRule") && (u.CSSSupportsRule = i.CSSSupportsRule));
                    const c = {};
                    return Object.entries(u).forEach(([i, s]) => {
                        c[i] = {
                            insertRule: s.prototype.insertRule,
                            deleteRule: s.prototype.deleteRule
                        }, s.prototype.insertRule = new Proxy(c[i].insertRule, {
                            apply: je((i, s, o) => {
                                const [a] = o, l = i.apply(s, o);
                                n.onCssomSheetMutation(s.parentStyleSheet);
                                const {
                                    id: u,
                                    styleId: c
                                } = Ze(s.parentStyleSheet, e, n.styleMirror);
                                if (s.parentStyleSheet && (u && -1 !== u || c && -1 !== c)) {
                                    const e = [...Ve(s), l];
                                    r.queueMutation(s.parentStyleSheet, () => t({
                                        id: u,
                                        styleId: c,
                                        adds: [{
                                            rule: a,
                                            index: e
                                        }]
                                    }))
                                }
                                return l
                            }, "host")
                        }), s.prototype.deleteRule = new Proxy(c[i].deleteRule, {
                            apply: je((i, s, o) => {
                                const [a] = o, l = i.apply(s, o);
                                n.onCssomSheetMutation(s.parentStyleSheet);
                                const {
                                    id: u,
                                    styleId: c
                                } = Ze(s.parentStyleSheet, e, n.styleMirror);
                                if (s.parentStyleSheet && (u && -1 !== u || c && -1 !== c)) {
                                    const e = [...Ve(s), a];
                                    r.queueMutation(s.parentStyleSheet, () => t({
                                        id: u,
                                        styleId: c,
                                        removes: [{
                                            index: e
                                        }]
                                    }))
                                }
                                return l
                            }, "host")
                        })
                    }), je(() => {
                        i.CSSStyleSheet.prototype.insertRule = s, i.CSSStyleSheet.prototype.deleteRule = o, a && (i.CSSStyleSheet.prototype.replace = a), l && (i.CSSStyleSheet.prototype.replaceSync = l), Object.entries(u).forEach(([t, e]) => {
                            e.prototype.insertRule = c[t].insertRule, e.prototype.deleteRule = c[t].deleteRule
                        })
                    })
                }(t, {
                    win: n,
                    mutationQueue: e
                })), h("adoptedStyleSheet", () => Je(t, t.doc)), h("styleDeclaration", () => function({
                    styleDeclarationCb: t,
                    mirror: e,
                    ignoreCSSAttributes: n,
                    stylesheetManager: i
                }, {
                    win: r,
                    mutationQueue: s
                }) {
                    const o = r.CSSStyleDeclaration.prototype.setProperty;
                    r.CSSStyleDeclaration.prototype.setProperty = new Proxy(o, {
                        apply: je((r, o, a) => {
                            var l;
                            const [u, c, h] = a, d = r.apply(o, a);
                            if (n.has(u)) return d;
                            const f = null === (l = o.parentRule) || void 0 === l ? void 0 : l.parentStyleSheet;
                            i.onCssomSheetMutation(f);
                            const {
                                id: v,
                                styleId: p
                            } = Ze(f, e, i.styleMirror);
                            if (v && -1 !== v || p && -1 !== p) {
                                const e = Ve(o.parentRule);
                                s.queueMutation(f, () => t({
                                    id: v,
                                    styleId: p,
                                    set: {
                                        property: u,
                                        value: c,
                                        priority: h
                                    },
                                    index: e
                                }))
                            }
                            return d
                        }, "host")
                    });
                    const a = r.CSSStyleDeclaration.prototype.removeProperty;
                    return r.CSSStyleDeclaration.prototype.removeProperty = new Proxy(a, {
                        apply: je((r, o, a) => {
                            var l;
                            const [u] = a, c = r.apply(o, a);
                            if (n.has(u)) return c;
                            const h = null === (l = o.parentRule) || void 0 === l ? void 0 : l.parentStyleSheet;
                            i.onCssomSheetMutation(h);
                            const {
                                id: d,
                                styleId: f
                            } = Ze(h, e, i.styleMirror);
                            if (d && -1 !== d || f && -1 !== f) {
                                const e = Ve(o.parentRule);
                                s.queueMutation(h, () => t({
                                    id: d,
                                    styleId: f,
                                    remove: {
                                        property: u
                                    },
                                    index: e
                                }))
                            }
                            return c
                        }, "host")
                    }), je(() => {
                        r.CSSStyleDeclaration.prototype.setProperty = o, r.CSSStyleDeclaration.prototype.removeProperty = a
                    })
                }(t, {
                    win: n,
                    mutationQueue: e
                })), t.collectFonts && h("font", () => function({
                    fontCb: t,
                    doc: e
                }) {
                    const n = e.defaultView;
                    if (!n) return () => {};
                    const i = [],
                        r = new WeakMap,
                        s = n.FontFace;
                    n.FontFace = function(t, e, n) {
                        const i = new s(t, e, n);
                        return r.set(i, {
                            family: t,
                            buffer: "string" != typeof e,
                            descriptors: n,
                            fontSource: "string" == typeof e ? e : JSON.stringify(Array.from(new Uint8Array(e)))
                        }), i
                    };
                    const o = M(e.fonts, "add", function(e) {
                        return function(n) {
                            return setTimeout(je(() => {
                                const e = r.get(n);
                                e && (t(e), r.delete(n))
                            }), 0), e.apply(this, [n])
                        }
                    });
                    return i.push(() => {
                        n.FontFace = s
                    }), i.push(o), je(() => {
                        i.forEach(t => t())
                    })
                }(t))
            }
            h("selection", () => function(t) {
                const {
                    doc: e,
                    mirror: n,
                    blockClass: i,
                    blockSelector: r,
                    selectionCb: s
                } = t;
                let o = !0;
                const a = je(() => {
                    const t = e.getSelection();
                    if (!t || o && (null == t ? void 0 : t.isCollapsed)) return;
                    o = t.isCollapsed || !1;
                    const a = [],
                        l = t.rangeCount || 0;
                    for (let e = 0; l > e; e++) {
                        const {
                            startContainer: s,
                            startOffset: o,
                            endContainer: l,
                            endOffset: u
                        } = t.getRangeAt(e);
                        we(s, i, r, !0) || we(l, i, r, !0) || a.push({
                            start: n.getId(s),
                            startOffset: o,
                            end: n.getId(l),
                            endOffset: u
                        })
                    }
                    s({
                        ranges: a
                    })
                });
                return a(), ae("selectionchange", a)
            }(t)), h("customElement", () => function({
                doc: t,
                customElementCb: e
            }) {
                const n = t.defaultView;
                return n && n.customElements ? M(n.customElements, "define", function(t) {
                    return function(n, i, r) {
                        try {
                            e({
                                define: {
                                    name: n
                                }
                            })
                        } catch (t) {
                            console.warn(`Custom element callback failed for ${n}`)
                        }
                        return t.apply(this, [n, i, r])
                    }
                }) : () => {}
            }(t));
            for (const e of t.plugins) h(`plugin:${e.name}`, () => e.observer(e.callback, n, e.options))
        } catch (t) {
            try {
                a()
            } catch (t) {}
            throw t
        }
        return a
    }

    function Ye(t) {
        return void 0 !== window[t]
    }

    function Ke(t) {
        return Boolean(void 0 !== window[t] && window[t].prototype && "insertRule" in window[t].prototype && "deleteRule" in window[t].prototype)
    }

    function tn(t) {
        const e = window;
        if ("function" == typeof e.requestIdleCallback) {
            const n = e.requestIdleCallback(t, {
                timeout: 2e3
            });
            return {
                cancel() {
                    var t;
                    return null === (t = e.cancelIdleCallback) || void 0 === t ? void 0 : t.call(e, n)
                }
            }
        }
        const n = setTimeout(t, 250);
        return {
            cancel: () => clearTimeout(n)
        }
    }
    var en = class {
            constructor(t) {
                it(this, "generateIdFn", void 0), it(this, "iframeRemoteIdToLocalIdMap", new WeakMap), it(this, "iframeLocalIdToRemoteIdMap", new WeakMap), this.generateIdFn = t
            }
            getId(t, e, n, i) {
                if (0 > e) return e;
                const r = n || this.getRemoteIdToLocalIdMap(t),
                    s = i || this.getLocalIdToRemoteIdMap(t);
                let o = r.get(e);
                return void 0 === o && (o = this.generateIdFn(), r.set(e, o), s.set(o, e)), o
            }
            getIds(t, e) {
                const n = this.getRemoteIdToLocalIdMap(t),
                    i = this.getLocalIdToRemoteIdMap(t);
                return e.map(e => this.getId(t, e, n, i))
            }
            getRemoteId(t, e, n) {
                var i;
                return "number" != typeof e || 0 > e ? e : null !== (i = (n || this.getLocalIdToRemoteIdMap(t)).get(e)) && void 0 !== i ? i : -1
            }
            getRemoteIds(t, e) {
                const n = this.getLocalIdToRemoteIdMap(t);
                return e.map(e => this.getRemoteId(t, e, n))
            }
            reset(t) {
                if (!t) return this.iframeRemoteIdToLocalIdMap = new WeakMap, void(this.iframeLocalIdToRemoteIdMap = new WeakMap);
                this.iframeRemoteIdToLocalIdMap.delete(t), this.iframeLocalIdToRemoteIdMap.delete(t)
            }
            getRemoteIdToLocalIdMap(t) {
                let e = this.iframeRemoteIdToLocalIdMap.get(t);
                return e || (e = new Map, this.iframeRemoteIdToLocalIdMap.set(t, e)), e
            }
            getLocalIdToRemoteIdMap(t) {
                let e = this.iframeLocalIdToRemoteIdMap.get(t);
                return e || (e = new Map, this.iframeLocalIdToRemoteIdMap.set(t, e)), e
            }
        },
        nn = class {
            constructor(t) {
                it(this, "iframes", new WeakMap), it(this, "crossOriginIframeMap", new WeakMap), it(this, "crossOriginIframeMirror", new en($t)), it(this, "crossOriginIframeStyleMirror", void 0), it(this, "crossOriginIframeRootIdMap", new WeakMap), it(this, "mirror", void 0), it(this, "mutationCb", void 0), it(this, "wrappedEmit", void 0), it(this, "loadListener", void 0), it(this, "pageHideListener", void 0), it(this, "stylesheetManager", void 0), it(this, "recordCrossOriginIframes", void 0), it(this, "messageHandler", void 0), it(this, "nestedIframeListeners", new Map), it(this, "attachedWindows", new WeakMap), it(this, "attachedDocuments", new WeakMap), it(this, "attachedIframes", new Map), it(this, "loadListenerDisposers", new WeakMap), it(this, "iframeElementsById", new Map), it(this, "pageHideHandlers", new WeakMap), this.mutationCb = t.mutationCb, this.wrappedEmit = t.wrappedEmit, this.stylesheetManager = t.stylesheetManager, this.recordCrossOriginIframes = t.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new en(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = t.mirror, this.messageHandler = this.handleMessage.bind(this), this.recordCrossOriginIframes && window.addEventListener("message", this.messageHandler)
            }
            addIframe(t) {
                this.iframes.set(t, !0), t.contentWindow && this.crossOriginIframeMap.set(t.contentWindow, t)
            }
            registerLoadListenerDisposer(t, e) {
                let n = this.loadListenerDisposers.get(t);
                n || (n = new Set, this.loadListenerDisposers.set(t, n)), n.add(e);
                const i = this.mirror.getId(t); - 1 !== i && this.iframeElementsById.set(i, t)
            }
            getIframeElementById(t) {
                var e, n, i;
                return null !== (e = null !== (n = null === (i = this.attachedIframes.get(t)) || void 0 === i ? void 0 : i.element) && void 0 !== n ? n : this.iframeElementsById.get(t)) && void 0 !== e ? e : null
            }
            forgetIframeId(t) {
                this.attachedIframes.delete(t), this.iframeElementsById.delete(t)
            }
            disposeLoadListeners(t) {
                const e = this.loadListenerDisposers.get(t);
                e && (e.forEach(t => ue(t)), this.loadListenerDisposers.delete(t))
            }
            removePageHideListener(t) {
                const e = this.pageHideHandlers.get(t);
                e && (e.forEach(({
                    win: t,
                    handler: e
                }) => {
                    le(t, "pagehide", e)
                }), this.pageHideHandlers.delete(t))
            }
            addLoadListener(t) {
                this.loadListener = t
            }
            addPageHideListener(t) {
                this.pageHideListener = t
            }
            removeLoadListener() {
                this.loadListener = void 0
            }
            trackIframeContent(t, e) {
                const n = this.mirror.getId(t);
                return this.attachedIframes.set(n, {
                    element: t,
                    content: e
                }), n
            }
            attachIframe(t, e) {
                var n;
                const i = this.trackIframeContent(t, e);
                if (t.contentDocument) {
                    let e = this.attachedDocuments.get(t);
                    e || (e = new Set, this.attachedDocuments.set(t, e)), e.add(t.contentDocument)
                }
                this.mutationCb({
                    adds: [{
                        parentId: i,
                        nextId: null,
                        node: e
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                });
                const r = t.contentWindow;
                if (this.recordCrossOriginIframes && r && !this.nestedIframeListeners.has(r)) {
                    const e = this.handleMessage.bind(this);
                    ue(() => {
                        r.addEventListener("message", e), this.nestedIframeListeners.set(r, e);
                        let n = this.attachedWindows.get(t);
                        n || (n = new Set, this.attachedWindows.set(t, n)), n.add(r)
                    })
                }
                ue(() => {
                    const e = t.contentWindow;
                    if (!e) return;
                    let n = this.pageHideHandlers.get(t);
                    if (n)
                        for (const t of n)
                            if (t.win === e) return;
                    const i = () => {
                        var e;
                        null === (e = this.pageHideListener) || void 0 === e || e.call(this, t), t.contentDocument && this.mirror.removeNodeFromMap(t.contentDocument)
                    };
                    e.addEventListener("pagehide", i), n || (n = new Set, this.pageHideHandlers.set(t, n)), n.add({
                        win: e,
                        handler: i
                    })
                }), null === (n = this.loadListener) || void 0 === n || n.call(this, t), t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, this.mirror.getId(t.contentDocument))
            }
            handleMessage(t) {
                const e = t;
                if ("rrweb" !== e.data.type || e.origin !== e.data.origin) return;
                if (!t.source) return;
                const n = this.crossOriginIframeMap.get(t.source);
                if (!n) return;
                const i = this.transformCrossOriginEvent(n, e.data.event);
                i && this.wrappedEmit(i, e.data.isCheckout)
            }
            transformCrossOriginEvent(t, e) {
                switch (e.type) {
                    case a.FullSnapshot:
                        {
                            this.crossOriginIframeMirror.reset(t),
                            this.crossOriginIframeStyleMirror.reset(t),
                            this.replaceIdOnNode(e.data.node, t);
                            const n = e.data.node.id;
                            return this.crossOriginIframeRootIdMap.set(t, n),
                            this.patchRootIdOnNode(e.data.node, n),
                            this.trackIframeContent(t, e.data.node),
                            {
                                timestamp: e.timestamp,
                                type: a.IncrementalSnapshot,
                                data: {
                                    source: l.Mutation,
                                    adds: [{
                                        parentId: this.mirror.getId(t),
                                        nextId: null,
                                        node: e.data.node
                                    }],
                                    removes: [],
                                    texts: [],
                                    attributes: [],
                                    isAttachIframe: !0
                                }
                            }
                        }
                    case a.Meta:
                    case a.Load:
                    case a.DomContentLoaded:
                        return !1;
                    case a.Plugin:
                        return e;
                    case a.Custom:
                        return this.replaceIds(e.data.payload, t, ["id", "parentId", "previousId", "nextId"]), e;
                    case a.IncrementalSnapshot:
                        switch (e.data.source) {
                            case l.Mutation:
                                return e.data.adds.forEach(e => {
                                    this.replaceIds(e, t, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(e.node, t);
                                    const n = this.crossOriginIframeRootIdMap.get(t);
                                    n && this.patchRootIdOnNode(e.node, n)
                                }), e.data.removes.forEach(e => {
                                    this.replaceIds(e, t, ["parentId", "id"])
                                }), e.data.attributes.forEach(e => {
                                    this.replaceIds(e, t, ["id"])
                                }), e.data.texts.forEach(e => {
                                    this.replaceIds(e, t, ["id"])
                                }), e;
                            case l.Drag:
                            case l.TouchMove:
                            case l.MouseMove:
                                return e.data.positions.forEach(e => {
                                    this.replaceIds(e, t, ["id"])
                                }), e;
                            case l.ViewportResize:
                                return !1;
                            case l.MediaInteraction:
                            case l.MouseInteraction:
                            case l.Scroll:
                            case l.CanvasMutation:
                            case l.Input:
                                return this.replaceIds(e.data, t, ["id"]), e;
                            case l.StyleSheetRule:
                            case l.StyleDeclaration:
                                return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleId"]), e;
                            case l.Font:
                                return e;
                            case l.Selection:
                                return e.data.ranges.forEach(e => {
                                    this.replaceIds(e, t, ["start", "end"])
                                }), e;
                            case l.AdoptedStyleSheet:
                                var n;
                                return this.replaceIds(e.data, t, ["id"]), this.replaceStyleIds(e.data, t, ["styleIds"]), null === (n = e.data.styles) || void 0 === n || n.forEach(e => {
                                    this.replaceStyleIds(e, t, ["styleId"])
                                }), e
                        }
                }
                return !1
            }
            replace(t, e, n, i) {
                for (const r of i)(Array.isArray(e[r]) || "number" == typeof e[r]) && (e[r] = Array.isArray(e[r]) ? t.getIds(n, e[r]) : t.getId(n, e[r]));
                return e
            }
            replaceIds(t, e, n) {
                return this.replace(this.crossOriginIframeMirror, t, e, n)
            }
            replaceStyleIds(t, e, n) {
                return this.replace(this.crossOriginIframeStyleMirror, t, e, n)
            }
            replaceIdOnNode(t, e) {
                this.replaceIds(t, e, ["id", "rootId"]), "childNodes" in t && t.childNodes.forEach(t => {
                    this.replaceIdOnNode(t, e)
                })
            }
            patchRootIdOnNode(t, e) {
                t.type === f.Document || t.rootId || (t.rootId = e), "childNodes" in t && t.childNodes.forEach(t => {
                    this.patchRootIdOnNode(t, e)
                })
            }
            removeIframeById(t) {
                const e = this.attachedIframes.get(t),
                    n = (null == e ? void 0 : e.element) || this.iframeElementsById.get(t) || this.mirror.getNode(t);
                if (this.iframeElementsById.delete(t), n) {
                    const t = n.contentWindow,
                        e = this.attachedWindows.get(n);
                    e && (e.forEach(t => {
                        const e = this.nestedIframeListeners.get(t);
                        e && (le(t, "message", e), this.nestedIframeListeners.delete(t)), this.crossOriginIframeMap.delete(t)
                    }), this.attachedWindows.delete(n)), t && this.nestedIframeListeners.has(t) && (le(t, "message", this.nestedIframeListeners.get(t)), this.nestedIframeListeners.delete(t)), t && this.crossOriginIframeMap.delete(t), this.iframes.delete(n), this.disposeLoadListeners(n), this.removePageHideListener(n);
                    const i = this.attachedDocuments.get(n);
                    i && (i.forEach(t => {
                        ue(() => this.mirror.removeNodeFromMap(t))
                    }), ue(() => qe(n, i)), this.attachedDocuments.delete(n))
                }
                e && this.attachedIframes.delete(t)
            }
            cleanupDetachedIframes() {
                if (0 === this.attachedIframes.size) return;
                const t = [];
                this.attachedIframes.forEach((e, n) => {
                    this.mirror.has(n) || t.push(n)
                }), t.forEach(t => this.removeIframeById(t))
            }
            reattachIframes() {
                this.attachedIframes.forEach(({
                    content: t
                }, e) => {
                    this.mirror.has(e) ? this.mutationCb({
                        adds: [{
                            parentId: e,
                            nextId: null,
                            node: t
                        }],
                        removes: [],
                        texts: [],
                        attributes: [],
                        isAttachIframe: !0
                    }) : this.attachedIframes.delete(e)
                })
            }
            destroy() {
                this.recordCrossOriginIframes && le(window, "message", this.messageHandler), this.nestedIframeListeners.forEach((t, e) => {
                    le(e, "message", t)
                }), this.nestedIframeListeners.clear();
                const t = new Set;
                this.iframeElementsById.forEach(e => t.add(e)), this.attachedIframes.forEach(({
                    element: e
                }) => t.add(e)), t.forEach(t => {
                    this.disposeLoadListeners(t), this.removePageHideListener(t)
                }), this.crossOriginIframeMirror.reset(), this.crossOriginIframeStyleMirror.reset(), this.attachedIframes.clear(), this.crossOriginIframeMap = new WeakMap, this.iframes = new WeakMap, this.crossOriginIframeRootIdMap = new WeakMap, this.loadListenerDisposers = new WeakMap, this.pageHideHandlers = new WeakMap, this.attachedDocuments = new WeakMap, this.attachedWindows = new WeakMap, this.iframeElementsById = new Map
            }
        },
        rn = class {
            constructor(t) {
                it(this, "shadowDoms", new Map), it(this, "mutationCb", void 0), it(this, "scrollCb", void 0), it(this, "bypassOptions", void 0), it(this, "mirror", void 0), it(this, "restoreHandlers", []), this.mutationCb = t.mutationCb, this.scrollCb = t.scrollCb, this.bypassOptions = t.bypassOptions, this.mirror = t.mirror, this.init()
            }
            init() {
                this.reset(), this.patchAttachShadow(Element, document)
            }
            addShadowRoot(t, e) {
                var n, r;
                if (!ot(t)) return;
                if (this.shadowDoms.has(t)) return;
                const s = null !== (n = null === (r = R.host(t)) || void 0 === r ? void 0 : r.ownerDocument) && void 0 !== n ? n : e,
                    o = {
                        doc: s,
                        handlers: []
                    };
                this.shadowDoms.set(t, o);
                const {
                    observer: a,
                    buffer: l
                } = We(i(i({}, this.bypassOptions), {}, {
                    doc: s,
                    mutationCb: this.mutationCb,
                    mirror: this.mirror,
                    shadowDomManager: this
                }), t);
                o.handlers.push(() => {
                    a.disconnect(), l.destroy(), l.releaseCanvasManager();
                    const t = Be.indexOf(l); - 1 !== t && Be.splice(t, 1)
                }), o.handlers.push(Ue(i(i({}, this.bypassOptions), {}, {
                    scrollCb: this.scrollCb,
                    doc: t,
                    mirror: this.mirror
                }))), setTimeout(() => {
                    this.shadowDoms.get(t) === o && (t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(R.host(t))), o.handlers.push(Je({
                        mirror: this.mirror,
                        stylesheetManager: this.bypassOptions.stylesheetManager
                    }, t)))
                }, 0)
            }
            removeShadowRootsIn(t) {
                if (0 === this.shadowDoms.size) return;
                const e = R.shadowRoot(t);
                e && (this.shadowDoms.has(e) && this.removeShadowRoot(e), this.removeShadowRootsIn(e)), R.childNodes(t).forEach(t => this.removeShadowRootsIn(t))
            }
            removeShadowRoot(t) {
                const e = this.shadowDoms.get(t);
                this.shadowDoms.delete(t), null == e || e.handlers.forEach(sn)
            }
            observeAttachShadow(t) {
                ue(() => {
                    const e = t.contentWindow,
                        n = t.contentDocument;
                    e && n && this.patchAttachShadow(e.Element, n)
                })
            }
            patchAttachShadow(t, e) {
                const n = this;
                this.restoreHandlers.push({
                    doc: e,
                    handler: M(t.prototype, "attachShadow", function(t) {
                        return function(i) {
                            const r = t.call(this, i),
                                s = R.shadowRoot(this);
                            return s && Te(this) && n.addShadowRoot(s, e), r
                        }
                    })
                })
            }
            reset() {
                this.restoreHandlers.forEach(({
                    handler: t
                }) => sn(t)), this.restoreHandlers = [];
                const t = this.shadowDoms;
                this.shadowDoms = new Map, t.forEach(({
                    handlers: t
                }) => t.forEach(sn))
            }
            resetForDoc(t) {
                const e = [];
                for (const n of this.restoreHandlers) n.doc === t ? sn(n.handler) : e.push(n);
                this.restoreHandlers = e, this.shadowDoms.forEach((e, n) => {
                    e.doc === t && this.removeShadowRoot(n)
                })
            }
        };

    function sn(t) {
        try {
            t()
        } catch (t) {}
    }
    var on = "skip-frame";

    function an(t) {
        if ("object" != typeof t || null === t) return !1;
        const {
            x: e,
            y: n,
            width: i,
            height: r
        } = t;
        return Number.isFinite(e) && Number.isFinite(n) && Number.isFinite(i) && Number.isFinite(r) && i >= 0 && r >= 0
    }
    for (var ln = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", un = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), cn = 0; 64 > cn; cn++) un[ln.charCodeAt(cn)] = cn;
    var hn = function(t) {
            var e, n = new Uint8Array(t),
                i = n.length,
                r = "";
            for (e = 0; i > e; e += 3) r += ln[n[e] >> 2], r += ln[(3 & n[e]) << 4 | n[e + 1] >> 4], r += ln[(15 & n[e + 1]) << 2 | n[e + 2] >> 6], r += ln[63 & n[e + 2]];
            return i % 3 == 2 ? r = r.substring(0, r.length - 1) + "=" : i % 3 == 1 && (r = r.substring(0, r.length - 2) + "=="), r
        },
        dn = !1,
        fn = new Map,
        vn = (t, e, n) => {
            if (!t || !gn(t, e) && "object" != typeof t) return;
            const i = function(t, e) {
                let n = fn.get(t);
                return n || (n = new Map, fn.set(t, n)), n.has(e) || n.set(e, []), n.get(e)
            }(n, t.constructor.name);
            let r = i.indexOf(t);
            return -1 === r && (r = i.length, i.push(t)), r
        };

    function pn(t, e, n, i) {
        if (t instanceof Array) return t.map(t => pn(t, e, n, i));
        if (null === t) return t;
        if (t instanceof Float32Array || t instanceof Float64Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Uint8Array || t instanceof Uint16Array || t instanceof Int16Array || t instanceof Int8Array || t instanceof Uint8ClampedArray) return {
            rr_type: t.constructor.name,
            args: [Object.values(t)]
        };
        if (t instanceof ArrayBuffer) return {
            rr_type: t.constructor.name,
            base64: hn(t)
        };
        if (t instanceof DataView) return {
            rr_type: t.constructor.name,
            args: [pn(t.buffer, e, n, i), t.byteOffset, t.byteLength]
        };
        if (t instanceof HTMLImageElement) {
            const e = t.constructor.name,
                {
                    src: n
                } = t;
            return {
                rr_type: e,
                src: n
            }
        }
        if (t instanceof HTMLCanvasElement) {
            const e = "HTMLImageElement";
            let n;
            try {
                n = t.toDataURL(i.type, i.quality)
            } catch (t) {
                throw function(t) {
                    "SecurityError" === (null == t ? void 0 : t.name) ? dn || (dn = !0, console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read. A cross-origin image or video drawn into it taints it.", t)): console.warn("[replay] canvas capture: skipping a canvas draw because its pixels cannot be read.", t)
                }(t), t
            }
            return {
                rr_type: e,
                src: n
            }
        }
        return t instanceof ImageData ? {
            rr_type: t.constructor.name,
            args: [pn(t.data, e, n, i), t.width, t.height]
        } : gn(t, e) || "object" == typeof t ? {
            rr_type: t.constructor.name,
            index: vn(t, e, n)
        } : t
    }
    var mn = (t, e, n, i) => t.map(t => pn(t, e, n, i)),
        gn = (t, e) => {
            const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(t => "function" == typeof e[t]);
            return Boolean(n.find(n => t instanceof e[n]))
        },
        yn = ["webgl", "webgl2"];

    function bn(t) {
        return "nodeType" in t
    }

    function wn(t, e, n, r) {
        const s = [];
        try {
            if (r) {
                const r = function(t, e, n) {
                    const r = t.GPUCanvasContext;
                    if ((null == r ? void 0 : r.prototype) && "function" == typeof r.prototype.configure) return M(r.prototype, "configure", function(r) {
                        return function(s) {
                            const o = function(t) {
                                const {
                                    canvas: e
                                } = t;
                                return e && "object" == typeof e ? e : null
                            }(this);
                            if (!o || bn(o) && we(o, e, n, !0)) return r.call(this, s);
                            bn(o) && !("__context" in o) && (o.__context = "webgpu");
                            const a = function(t) {
                                const e = t.GPUTextureUsage;
                                return e ? e.COPY_SRC | e.RENDER_ATTACHMENT : null
                            }(t);
                            return r.call(this, null !== a && s ? i(i({}, s), {}, {
                                usage: "number" == typeof s.usage ? s.usage | a : a
                            }) : s)
                        }
                    })
                }(t, e, n);
                r && s.push(r)
            }
            const o = M(t.HTMLCanvasElement.prototype, "getContext", function(t) {
                return function(i, ...s) {
                    const o = function(t) {
                        return "experimental-webgl" === t ? "webgl" : t
                    }(i);
                    if (!we(this, e, n, !0) && ("__context" in this || (this.__context = o), r && yn.includes(o)))
                        if (s[0] && "object" == typeof s[0]) {
                            const t = s[0];
                            t.preserveDrawingBuffer || (t.preserveDrawingBuffer = !0)
                        } else s.splice(0, 1, {
                            preserveDrawingBuffer: !0
                        });
                    return t.apply(this, [i, ...s])
                }
            });
            s.push(o)
        } catch (t) {
            console.warn("failed to patch HTMLCanvasElement.prototype.getContext")
        }
        return () => {
            s.forEach(t => t())
        }
    }

    function kn(t, e, n, i, r, s, o) {
        const a = [],
            l = Object.getOwnPropertyNames(t);
        for (const u of l)
            if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(u)) try {
                if ("function" != typeof t[u]) continue;
                const l = M(t, u, function(t) {
                    return function(...a) {
                        const l = t.apply(this, a);
                        if (vn(l, s, this), this.canvas && "tagName" in this.canvas && !we(this.canvas, i, r, !0)) {
                            let t;
                            try {
                                t = mn(a, s, this, o)
                            } catch (t) {}
                            t && n(this.canvas, {
                                type: e,
                                property: u,
                                args: t
                            })
                        }
                        return l
                    }
                });
                a.push(l)
            } catch (s) {
                const o = ve(t, u, {
                    set(t) {
                        this.canvas && "tagName" in this.canvas && !we(this.canvas, i, r, !0) && n(this.canvas, {
                            type: e,
                            property: u,
                            args: [t],
                            setter: !0
                        })
                    }
                });
                a.push(o)
            }
        return a
    }
    var Sn = '(function() {\n\t//#region ../../../../../../setup-pnpm/node_modules/.bin/store/v11/links/@/base64-arraybuffer/1.0.2/f63fa6b5c318cf1c9f6bdd1d4292ad2f15f76f2ec78475025a2d44070e896fe9/node_modules/base64-arraybuffer/dist/base64-arraybuffer.es5.js\n\tvar chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n\tvar lookup = typeof Uint8Array === "undefined" ? [] : /* @__PURE__ */ new Uint8Array(256);\n\tfor (var i = 0; i < chars.length; i++) lookup[chars.charCodeAt(i)] = i;\n\tvar encode = function(arraybuffer) {\n\t\tvar bytes = new Uint8Array(arraybuffer), i, len = bytes.length, base64 = "";\n\t\tfor (i = 0; i < len; i += 3) {\n\t\t\tbase64 += chars[bytes[i] >> 2];\n\t\t\tbase64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];\n\t\t\tbase64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];\n\t\t\tbase64 += chars[bytes[i + 2] & 63];\n\t\t}\n\t\tif (len % 3 === 2) base64 = base64.substring(0, base64.length - 1) + "=";\n\t\telse if (len % 3 === 1) base64 = base64.substring(0, base64.length - 2) + "==";\n\t\treturn base64;\n\t};\n\t//#endregion\n\t//#region ../rrweb/src/record/workers/image-bitmap-data-url-worker.ts\n\tconst lastFingerprintMap = /* @__PURE__ */ new Map();\n\tconst transparentFingerprintMap = /* @__PURE__ */ new Map();\n\tconst lastSentAtMap = /* @__PURE__ */ new Map();\n\tconst PROVIDER_KEYFRAME_INTERVAL_MS = 3e4;\n\tfunction hashPixels(data) {\n\t\tconst view = new Uint32Array(data.buffer, data.byteOffset, data.byteLength >>> 2);\n\t\tlet primaryHash = 2166136261;\n\t\tlet secondaryHash = 2654435769;\n\t\tfor (let i = 0; i < view.length; i++) {\n\t\t\tprimaryHash ^= view[i];\n\t\t\tprimaryHash = Math.imul(primaryHash, 16777619);\n\t\t\tsecondaryHash ^= view[i];\n\t\t\tsecondaryHash = Math.imul(secondaryHash, 2246822507);\n\t\t}\n\t\treturn `${(primaryHash >>> 0).toString(16)}:${(secondaryHash >>> 0).toString(16)}`;\n\t}\n\tfunction frameFingerprint(width, height, data) {\n\t\treturn `${width}x${height}:${hashPixels(data)}`;\n\t}\n\tfunction transparentFingerprint(width, height) {\n\t\tconst pixelCount = width * height;\n\t\tlet hash = transparentFingerprintMap.get(pixelCount);\n\t\tif (hash === void 0) {\n\t\t\thash = hashPixels(new Uint8ClampedArray(pixelCount * 4));\n\t\t\ttransparentFingerprintMap.set(pixelCount, hash);\n\t\t}\n\t\treturn `${width}x${height}:${hash}`;\n\t}\n\tconst worker = self;\n\tlet reusableCanvas = null;\n\tlet reusableCtx = null;\n\tworker.onmessage = async function(e) {\n\t\tif ("resetFrameDedup" in e.data) {\n\t\t\tlastFingerprintMap.clear();\n\t\t\treturn;\n\t\t}\n\t\tif ("OffscreenCanvas" in globalThis) {\n\t\t\tconst { id, bitmap, width, height, displayWidth, displayHeight, dataURLOptions, maskRegions } = e.data;\n\t\t\ttry {\n\t\t\t\tif (!reusableCanvas || reusableCanvas.width !== width || reusableCanvas.height !== height) {\n\t\t\t\t\treusableCanvas = new OffscreenCanvas(width, height);\n\t\t\t\t\treusableCtx = reusableCanvas.getContext("2d", { willReadFrequently: true });\n\t\t\t\t}\n\t\t\t\tconst ctx = reusableCtx;\n\t\t\t\tctx.clearRect(0, 0, width, height);\n\t\t\t\tctx.drawImage(bitmap, 0, 0);\n\t\t\t\tbitmap.close();\n\t\t\t\tif (maskRegions) {\n\t\t\t\t\tctx.fillStyle = "black";\n\t\t\t\t\tfor (const region of maskRegions) ctx.fillRect(region.x, region.y, region.width, region.height);\n\t\t\t\t}\n\t\t\t\tconst fingerprint = frameFingerprint(width, height, ctx.getImageData(0, 0, width, height).data);\n\t\t\t\tif (fingerprint === (lastFingerprintMap.get(id) ?? transparentFingerprint(width, height))) {\n\t\t\t\t\tconst lastSentAt = lastSentAtMap.get(id);\n\t\t\t\t\tif (!(maskRegions !== void 0 && lastSentAt !== void 0 && Date.now() - lastSentAt >= PROVIDER_KEYFRAME_INTERVAL_MS)) return worker.postMessage({ id });\n\t\t\t\t}\n\t\t\t\tconst blob = await reusableCanvas.convertToBlob(dataURLOptions);\n\t\t\t\tconst arrayBuffer = await blob.arrayBuffer();\n\t\t\t\tworker.postMessage({\n\t\t\t\t\tid,\n\t\t\t\t\ttype: blob.type,\n\t\t\t\t\tbase64: encode(arrayBuffer),\n\t\t\t\t\tdisplayWidth,\n\t\t\t\t\tdisplayHeight\n\t\t\t\t});\n\t\t\t\tlastFingerprintMap.set(id, fingerprint);\n\t\t\t\tlastSentAtMap.set(id, Date.now());\n\t\t\t} catch {\n\t\t\t\tworker.postMessage({ id });\n\t\t\t}\n\t\t} else {\n\t\t\te.data.bitmap.close();\n\t\t\treturn worker.postMessage({ id: e.data.id });\n\t\t}\n\t};\n\t//#endregion\n})();\n',
        _n = "undefined" != typeof self && self.Blob && new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);", Sn], {
            type: "text/javascript;charset=utf-8"
        });

    function Cn(t) {
        let e;
        try {
            if (e = _n && (self.URL || self.webkitURL).createObjectURL(_n), !e) throw "";
            const n = new Worker(e, {
                name: null == t ? void 0 : t.name
            });
            return n.addEventListener("error", () => {
                (self.URL || self.webkitURL).revokeObjectURL(e)
            }), n
        } catch (e) {
            return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Sn), {
                name: null == t ? void 0 : t.name
            })
        }
    }
    var In = "A page CSP that omits blob: from worker-src or script-src blocks it";

    function Mn(t, ...e) {
        console.warn(`[replay] canvas capture: ${t}`, ...e)
    }
    var Rn = class {
        onFullSnapshot() {
            var t;
            null === (t = this.resetFrameDedup) || void 0 === t || t.call(this)
        }
        acquire() {
            this.refCount += 1
        }
        reset() {
            this.refCount > 0 && (this.refCount -= 1), this.refCount > 0 || this.teardown()
        }
        teardown() {
            this.torndown || (this.torndown = !0, this.pendingCanvasMutations.clear(), this.resetObservers && this.resetObservers(), null !== this.rafIdTimestamp && (cancelAnimationFrame(this.rafIdTimestamp), this.rafIdTimestamp = null), null !== this.rafIdFlush && (cancelAnimationFrame(this.rafIdFlush), this.rafIdFlush = null))
        }
        freeze() {
            this.frozen = !0
        }
        unfreeze() {
            this.frozen = !1
        }
        lock() {
            this.locked = !0
        }
        unlock() {
            this.locked = !1
        }
        constructor(t) {
            it(this, "pendingCanvasMutations", new Map), it(this, "rafStamps", {
                latestId: 0,
                invokeId: null
            }), it(this, "mirror", void 0), it(this, "mutationCb", void 0), it(this, "resetObservers", void 0), it(this, "frozen", !1), it(this, "locked", !1), it(this, "rafIdTimestamp", null), it(this, "rafIdFlush", null), it(this, "refCount", 0), it(this, "torndown", !1), it(this, "resetFrameDedup", null), it(this, "processMutation", (t, e) => {
                (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(t) || this.pendingCanvasMutations.set(t, []), this.pendingCanvasMutations.get(t).push(e)
            });
            const {
                sampling: e = "all",
                win: n,
                blockClass: i,
                blockSelector: r,
                recordCanvas: s,
                dataURLOptions: o,
                resolutionScale: a,
                canvasMasking: l
            } = t;
            this.mutationCb = t.mutationCb, this.mirror = t.mirror, s && "all" === e && this.initCanvasMutationObserver(n, i, r, o), s && "number" == typeof e && this.initCanvasFPSObserver(e, n, i, r, {
                dataURLOptions: o,
                resolutionScale: a,
                canvasMasking: l
            })
        }
        initCanvasFPSObserver(t, e, n, i, r) {
            var o = this;
            if (!("OffscreenCanvas" in e)) return void Mn("disabled because this browser does not support OffscreenCanvas");
            const a = "number" == typeof r.resolutionScale && Number.isFinite(r.resolutionScale) ? Math.min(1, Math.max(.1, r.resolutionScale)) : 1,
                l = wn(e, n, i, !0),
                u = new Map;
            let c;
            try {
                c = new Cn
            } catch (t) {
                return Mn(`disabled because the encode worker did not start. ${In}`, t), void l()
            }
            let d = !1;
            c.onerror = t => {
                var e;
                d = !0, Mn(`stopped because the encode worker failed. ${In}`, t), cancelAnimationFrame(m), null === (e = c.terminate) || void 0 === e || e.call(c), this.resetFrameDedup = null
            }, this.resetFrameDedup = () => {
                c.postMessage({
                    resetFrameDedup: !0
                })
            }, c.onmessage = t => {
                const {
                    id: e
                } = t.data;
                if (u.set(e, !1), !("base64" in t.data)) return;
                const {
                    base64: n,
                    type: i,
                    displayWidth: r,
                    displayHeight: s
                } = t.data;
                this.mutationCb({
                    id: e,
                    type: h["2D"],
                    commands: [{
                        property: "clearRect",
                        args: [0, 0, r, s]
                    }, {
                        property: "drawImage",
                        args: [{
                            rr_type: "ImageBitmap",
                            args: [{
                                rr_type: "Blob",
                                data: [{
                                    rr_type: "ArrayBuffer",
                                    base64: n
                                }],
                                type: i
                            }]
                        }, 0, 0, r, s]
                    }],
                    displayWidth: r,
                    displayHeight: s
                })
            };
            let f = !1,
                v = !1;
            const p = 1e3 / t;
            let m, g = 0;
            const y = t => {
                var l;
                d || (g && p > t - g || (g = t, (() => {
                    const t = [],
                        r = e => {
                            try {
                                e.querySelectorAll("canvas").forEach(e => {
                                    we(e, n, i, !0) || t.push(e)
                                }), e.querySelectorAll("*").forEach(t => {
                                    t.shadowRoot && r(t.shadowRoot)
                                })
                            } catch (t) {}
                        };
                    return r(e.document), t
                })().forEach((l = s(function*(t) {
                    const e = o.mirror.getId(t);
                    if (-1 !== e && !u.get(e) && 0 !== t.width && 0 !== t.height) {
                        u.set(e, !0);
                        try {
                            if (["webgl", "webgl2"].includes(t.__context)) {
                                var n, i;
                                const r = t.getContext(t.__context);
                                if (null == r || null === (n = r.isContextLost) || void 0 === n ? void 0 : n.call(r)) return void u.set(e, !1);
                                !1 === (null == r || null === (i = r.getContextAttributes()) || void 0 === i ? void 0 : i.preserveDrawingBuffer) && r.clear(r.COLOR_BUFFER_BIT)
                            }
                            const s = t.clientWidth || t.width,
                                o = t.clientHeight || t.height,
                                l = Math.max(1, Math.round(s * a)),
                                h = Math.max(1, Math.round(o * a)),
                                d = function(t, e, n, i, r, s) {
                                    if (!t || "function" != typeof t.regionsFn) return;
                                    let o;
                                    try {
                                        o = t.regionsFn(e)
                                    } catch (t) {
                                        return on
                                    }
                                    if (void 0 === o) return;
                                    if (!Array.isArray(o) || !o.every(an)) return on;
                                    const a = n / r,
                                        l = i / s;
                                    return o.filter(t => t.width > 0 && t.height > 0).map(t => {
                                        const e = Math.floor(t.x * a),
                                            n = Math.floor(t.y * l);
                                        return {
                                            x: e,
                                            y: n,
                                            width: Math.ceil((t.x + t.width) * a) - e,
                                            height: Math.ceil((t.y + t.height) * l) - n
                                        }
                                    })
                                }(r.canvasMasking, t, l, h, s, o);
                            if ("skip-frame" === d) return f || (f = !0, Mn("dropped a frame because the mask provider did not return valid regions. A provider that always fails records no canvas frames at all")), void u.set(e, !1);
                            const v = yield createImageBitmap(t, 1 > a ? {
                                resizeWidth: l,
                                resizeHeight: h,
                                resizeQuality: "medium"
                            } : {
                                resizeWidth: l,
                                resizeHeight: h
                            });
                            c.postMessage({
                                id: e,
                                bitmap: v,
                                width: l,
                                height: h,
                                displayWidth: s,
                                displayHeight: o,
                                dataURLOptions: r.dataURLOptions,
                                maskRegions: d
                            }, [v])
                        } catch (t) {
                            v || (v = !0, Mn("dropped a frame because the snapshot failed. A canvas that fails every frame records no canvas frames at all", t)), u.set(e, !1)
                        }
                    }
                }), function(t) {
                    return l.apply(this, arguments)
                }))), m = requestAnimationFrame(y))
            };
            m = requestAnimationFrame(y), this.resetObservers = () => {
                var t;
                l(), cancelAnimationFrame(m), null === (t = c.terminate) || void 0 === t || t.call(c), this.resetFrameDedup = null
            }
        }
        initCanvasMutationObserver(t, e, n, i) {
            this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
            const r = wn(t, e, n, !1),
                s = function(t, e, n, i, r) {
                    const s = [],
                        o = Object.getOwnPropertyNames(e.CanvasRenderingContext2D.prototype);
                    for (const a of o) try {
                        if ("function" != typeof e.CanvasRenderingContext2D.prototype[a]) continue;
                        const o = M(e.CanvasRenderingContext2D.prototype, a, function(s) {
                            return function(...o) {
                                return we(this.canvas, n, i, !0) || setTimeout(() => {
                                    let n;
                                    try {
                                        n = mn(o, e, this, r)
                                    } catch (t) {
                                        return
                                    }
                                    t(this.canvas, {
                                        type: h["2D"],
                                        property: a,
                                        args: n
                                    })
                                }, 0), s.apply(this, o)
                            }
                        });
                        s.push(o)
                    } catch (r) {
                        const o = ve(e.CanvasRenderingContext2D.prototype, a, {
                            set(e) {
                                we(this.canvas, n, i, !0) || t(this.canvas, {
                                    type: h["2D"],
                                    property: a,
                                    args: [e],
                                    setter: !0
                                })
                            }
                        });
                        s.push(o)
                    }
                    return () => {
                        s.forEach(t => t())
                    }
                }(this.processMutation.bind(this), t, e, n, i),
                o = function(t, e, n, i, r) {
                    const s = [];
                    return void 0 !== e.WebGLRenderingContext && s.push(...kn(e.WebGLRenderingContext.prototype, h.WebGL, t, n, i, e, r)), void 0 !== e.WebGL2RenderingContext && s.push(...kn(e.WebGL2RenderingContext.prototype, h.WebGL2, t, n, i, e, r)), () => {
                        s.forEach(t => t())
                    }
                }(this.processMutation.bind(this), t, e, n, i);
            this.resetObservers = () => {
                r(), s(), o()
            }
        }
        startPendingCanvasMutationFlusher() {
            this.rafIdFlush = requestAnimationFrame(() => this.flushPendingCanvasMutations())
        }
        startRAFTimestamping() {
            const t = e => {
                this.rafStamps.latestId = e, this.rafIdTimestamp = requestAnimationFrame(t)
            };
            this.rafIdTimestamp = requestAnimationFrame(t)
        }
        flushPendingCanvasMutations() {
            this.pendingCanvasMutations.forEach((t, e) => {
                const n = this.mirror.getId(e);
                this.flushPendingCanvasMutationFor(e, n)
            }), this.rafIdFlush = requestAnimationFrame(() => this.flushPendingCanvasMutations())
        }
        flushPendingCanvasMutationFor(t, e) {
            if (this.frozen || this.locked) return;
            const n = this.pendingCanvasMutations.get(t);
            if (!n || -1 === e) return;
            const i = n.map(t => function(t, e) {
                    if (null == t) return {};
                    var n, i, r = function(t, e) {
                        if (null == t) return {};
                        var n = {};
                        for (var i in t)
                            if ({}.hasOwnProperty.call(t, i)) {
                                if (e.includes(i)) continue;
                                n[i] = t[i]
                            }
                        return n
                    }(t, e);
                    if (Object.getOwnPropertySymbols) {
                        var s = Object.getOwnPropertySymbols(t);
                        for (i = 0; s.length > i; i++) e.includes(n = s[i]) || {}.propertyIsEnumerable.call(t, n) && (r[n] = t[n])
                    }
                    return r
                }(t, o)),
                {
                    type: r
                } = n[0];
            this.mutationCb({
                id: e,
                type: r,
                commands: i
            }), this.pendingCanvasMutations.delete(t)
        }
    };

    function An(t) {
        var e, n, i;
        const r = {};
        for (const i of Object.keys(null !== (e = null === (n = t.previous) || void 0 === n ? void 0 : n.attributes) && void 0 !== e ? e : {})) r[i] = null;
        return Object.assign(r, null === (i = t.current) || void 0 === i ? void 0 : i.attributes), delete r.rel, delete r.href, r
    }
    var xn, Tn, On, En = class {
            constructor(t) {
                var e, n, i;
                it(this, "trackedLinkElements", new WeakSet), it(this, "pendingDeferredSheets", new Set), it(this, "stopped", !1), it(this, "changedLinkJobs", new Map), it(this, "linksInlinedSinceSnapshot", new WeakSet), it(this, "mutationCb", void 0), it(this, "adoptedStyleSheetCb", void 0), it(this, "maskAllElementAttributes", void 0), it(this, "maskAttributeFn", void 0), it(this, "blockClass", void 0), it(this, "blockSelector", void 0), it(this, "styleMirror", new Ae), this.mutationCb = t.mutationCb, this.adoptedStyleSheetCb = t.adoptedStyleSheetCb, this.maskAllElementAttributes = null !== (e = t.maskAllElementAttributes) && void 0 !== e && e, this.maskAttributeFn = t.maskAttributeFn, this.blockClass = null !== (n = t.blockClass) && void 0 !== n ? n : "rr-block", this.blockSelector = null !== (i = t.blockSelector) && void 0 !== i ? i : null
            }
            isLinkBlocked(t) {
                return ke(t, this.blockClass, this.blockSelector)
            }
            attachLinkElement(t, e, n = null) {
                this.stopped || !("_cssText" in e.attributes) || this.isLinkBlocked(t) || (this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: e.id,
                        attributes: An({
                            previous: n,
                            current: e
                        })
                    }]
                }), this.linksInlinedSinceSnapshot.add(t)), this.trackLinkElement(t)
            }
            beginDeferredLinkInlining(t, e, n = {}) {
                var i;
                const r = null !== (i = n.emitCssText) && void 0 !== i ? i : n => this.emitCssTextMutation(t, e, n);
                if (-1 === e || !t.isConnected) return null;
                let s = null,
                    o = null;
                try {
                    o = t.sheet, o && (s = gt(o))
                } catch (t) {}
                var a;
                if (!s || !o) return tt(), null === (a = n.onUninlinable) || void 0 === a || a.call(n), null;
                const l = s;
                let u = !1;
                const c = {
                    sheet: o,
                    invalidate() {
                        u = !0
                    }
                };
                this.pendingDeferredSheets.add(c);
                let h = !1;
                return {
                    advance: e => {
                        if (h) return !0;
                        const i = A(),
                            s = E();
                        let a = !0;
                        try {
                            if (u) return h = !0, n.onInvalidatedBySheetMutation ? n.onInvalidatedBySheetMutation() : tt(), !0;
                            if (!l.advance(e)) return a = !1, !1;
                            h = !0;
                            const i = l.text();
                            if (!t.isConnected) return !0;
                            let s = null;
                            try {
                                s = t.sheet
                            } catch (t) {}
                            return s !== o ? (tt(), !0) : i ? (this.isLinkBlocked(t) || r(i), !0) : (tt(), null === (d = n.onUninlinable) || void 0 === d || d.call(n), !0);
                            var d
                        } finally {
                            a && this.pendingDeferredSheets.delete(c), F(f = A() - i, null != (v = s) ? v : x) || (H.totalMs += f, f > H.slowestSliceMs && (H.slowestSliceMs = f))
                        }
                        var f, v
                    },
                    remainingRules: () => l.remainingRules(),
                    discard: () => {
                        this.pendingDeferredSheets.delete(c)
                    }
                }
            }
            onCssomSheetMutation(t) {
                if (t && 0 !== this.pendingDeferredSheets.size)
                    for (const e of this.pendingDeferredSheets) e.sheet === t && (this.pendingDeferredSheets.delete(e), e.invalidate())
            }
            inlineLinkStylesheetAfterChange(t, e) {
                this.stopped || -1 === e.currentId() || function(t, e) {
                    const n = Xt(t),
                        i = Jt.get(t);
                    if (i) return void(i.changedLinkBaseline && (i.changedLinkBaseline.sheetAtLatestChange = n));
                    const r = {
                            sheetAtLatestChange: n
                        },
                        s = () => {
                            const e = Xt(t);
                            return Boolean(e && (e !== r.sheetAtLatestChange || e.href === t.href))
                        };
                    s() ? e() : Yt(t, e, s, Kt, r)
                }(t, () => this.inlineChangedLinkStylesheet(t, e, 3))
            }
            inlineChangedLinkStylesheet(t, e, n) {
                var i;
                const r = e.currentId();
                if (this.stopped || !t.isConnected || -1 === r || this.isLinkBlocked(t)) return;
                null === (i = this.changedLinkJobs.get(t)) || void 0 === i || i.drop();
                let s = !1;
                const o = this.beginDeferredLinkInlining(t, r, {
                    emitCssText: n => this.emitCssTextMutation(t, r, n, An(e.reserializeWithoutCss())),
                    onInvalidatedBySheetMutation() {
                        s = !0
                    },
                    onUninlinable: () => this.readdAsPlainLink(t, e)
                });
                if (!o) return;
                let a = null;
                const l = () => {
                        o.discard(), null == a || a.cancel(), a = null, this.changedLinkJobs.get(t) === u && this.changedLinkJobs.delete(t)
                    },
                    u = {
                        remainingRules: () => o.remainingRules(),
                        runSlice: () => {
                            try {
                                return this.stopped || this.changedLinkJobs.get(t) !== u || -1 === e.currentId() || this.isLinkBlocked(t) ? (l(), !0) : !!o.advance(200) && (l(), !s || (n > 0 ? this.inlineChangedLinkStylesheet(t, e, n - 1) : tt(), !0))
                            } catch (t) {
                                return l(), !0
                            }
                        },
                        drop: l
                    };
                this.changedLinkJobs.set(t, u);
                const c = t => {
                    a = null;
                    let e, n = 0;
                    do {
                        e = u.runSlice(), n += 1
                    } while (!e && (t ? !t.didTimeout && t.timeRemaining() > 5 : 10 > n));
                    e || (a = tn(c))
                };
                a = tn(c)
            }
            flushChangedLinkInlining(t) {
                let e = 0;
                for (const n of this.changedLinkJobs.values()) {
                    let i = !1;
                    for (; !i;) {
                        if (Math.floor(n.remainingRules() / 200) + 1 > t - e) {
                            n.drop(), et(1);
                            break
                        }
                        i = n.runSlice(), e += 1
                    }
                }
                return e
            }
            inlineDeferredLinkElement(t, e) {
                var n;
                null === (n = this.beginDeferredLinkInlining(t, e)) || void 0 === n || n.advance(1 / 0)
            }
            emitCssTextMutation(t, e, n, r = {}) {
                this.stopped || (this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: e,
                        attributes: i(i({}, r), {}, {
                            _cssText: St({
                                element: t,
                                name: "_cssText",
                                value: n,
                                maskAllElementAttributes: this.maskAllElementAttributes,
                                maskAttributeFn: this.maskAttributeFn
                            })
                        })
                    }]
                }), this.linksInlinedSinceSnapshot.add(t))
            }
            readdAsPlainLink(t, e) {
                try {
                    var n, i;
                    if (this.stopped || !t.isConnected || this.isLinkBlocked(t)) return;
                    if (!this.linksInlinedSinceSnapshot.has(t) && !("_cssText" in (null !== (n = null === (i = e.lastSerialization()) || void 0 === i ? void 0 : i.attributes) && void 0 !== n ? n : {}))) return;
                    this.linksInlinedSinceSnapshot.delete(t), e.readdAsMove()
                } catch (t) {}
            }
            trackLinkElement(t) {
                this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t), this.trackStylesheetInLinkElement(t))
            }
            adoptStyleSheets(t, e) {
                if (0 === t.length) return;
                const n = {
                        id: e,
                        styleIds: []
                    },
                    i = [];
                for (const e of t) {
                    let t;
                    if (this.styleMirror.has(e)) t = this.styleMirror.getId(e);
                    else {
                        const n = this.styleMirror.add(e);
                        t = n;
                        const r = A();
                        try {
                            Q(() => {
                                try {
                                    const t = e.rules || e.cssRules;
                                    t && J(t)
                                } catch (t) {}
                                i.push({
                                    styleId: n,
                                    rules: Array.from(e.rules || CSSRule, (t, n) => ({
                                        rule: ht(t, e.href),
                                        index: n
                                    }))
                                })
                            })
                        } finally {
                            X(A() - r)
                        }
                    }
                    n.styleIds.push(t)
                }
                i.length > 0 && (n.styles = i), this.adoptedStyleSheetCb(n)
            }
            stop() {
                this.stopped = !0, this.dropChangedLinkJobs(), Qt()
            }
            dropChangedLinkJobs() {
                Array.from(this.changedLinkJobs.values()).forEach(t => t.drop())
            }
            reset() {
                this.styleMirror.reset(), this.trackedLinkElements = new WeakSet, this.pendingDeferredSheets.clear(), this.dropChangedLinkJobs(), this.linksInlinedSinceSnapshot = new WeakSet, Qt({
                    keepChangedLinks: !0
                })
            }
            trackStylesheetInLinkElement(t) {}
        },
        Fn = class {
            constructor() {
                it(this, "nodeMap", new WeakMap), it(this, "active", !1)
            }
            inOtherBuffer(t, e) {
                const n = this.nodeMap.get(t);
                return n && Array.from(n).some(t => t !== e)
            }
            add(t, e) {
                this.active || (this.active = !0, requestAnimationFrame(() => {
                    this.nodeMap = new WeakMap, this.active = !1
                })), this.nodeMap.set(t, (this.nodeMap.get(t) || new Set).add(e))
            }
            destroy() {}
        },
        Ln = !1;
    try {
        if (2 !== Array.from([1], t => 2 * t)[0]) {
            var $n;
            const t = document.createElement("iframe");
            document.body.appendChild(t), Array.from = (null === ($n = t.contentWindow) || void 0 === $n ? void 0 : $n.Array.from) || Array.from, document.body.removeChild(t)
        }
    } catch (t) {
        console.debug("Unable to override Array.from", t)
    }
    var Dn = new yt,
        Nn = new Set([l.Mutation, l.MediaInteraction, l.StyleSheetRule, l.CanvasMutation, l.Font, l.Log, l.StyleDeclaration, l.AdoptedStyleSheet]);

    function Pn(t = {}) {
        let e, n = !1,
            r = !1;
        const {
            emit: s,
            checkoutEveryNms: o,
            checkoutEveryNth: u,
            blockClass: c = "rr-block",
            blockSelector: h = null,
            ignoreClass: d = "rr-ignore",
            ignoreSelector: f = null,
            maskTextClass: v = "rr-mask",
            maskTextSelector: p = null,
            inlineStylesheet: m = !0,
            inlineStylesheetBudgetRules: g,
            maskAllInputs: y,
            maskInputOptions: b,
            slimDOMOptions: w,
            maskInputFn: k,
            maskTextFn: S,
            maskAllElementAttributes: _ = !1,
            maskAttributeFn: C,
            hooks: I,
            packFn: M,
            sampling: A = {},
            dataURLOptions: x = {},
            canvasResolutionScale: T,
            canvasMasking: E,
            mousemoveWait: F,
            recordDOM: L = !0,
            recordCanvas: D = !1,
            recordCrossOriginIframes: N = !1,
            recordAfter: P = ("DOMContentLoaded" === t.recordAfter ? t.recordAfter : "load"),
            userTriggeredOnInput: j = !1,
            collectFonts: B = !1,
            inlineImages: z = !1,
            plugins: W,
            keepIframeSrcFn: U = () => !1,
            ignoreCSSAttributes: q = new Set([]),
            attributeFilter: H,
            errorHandler: Z
        } = t;
        Ne(Z);
        const J = i({
                type: "image/webp",
                quality: .4,
                maxBase64ImageLength: 1048576
            }, x),
            Q = !N || window.parent === window;
        let X = !1;
        if (!Q) try {
            window.parent.document && (X = !1)
        } catch (t) {
            X = !0
        }
        if (Q && !s) throw new Error("emit function is required");
        if (!Q && !X) return () => {};
        void 0 !== F && void 0 === A.mousemove && (A.mousemove = F), Dn.reset(), Qt();
        const Y = !0 === y ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                password: !0
            } : void 0 !== b ? b : {
                password: !0
            },
            tt = se(void 0 !== w && w);
        let nt;
        ! function(t = window) {
            "NodeList" in t && !t.NodeList.prototype.forEach && (t.NodeList.prototype.forEach = [].forEach), "DOMTokenList" in t && !t.DOMTokenList.prototype.forEach && (t.DOMTokenList.prototype.forEach = [].forEach)
        }();
        let it = 0;
        const rt = new Map;
        let st, ot;
        const at = t => {
            for (const e of W || []) e.eventProcessor && (t = e.eventProcessor(t));
            return M && !X && (t = M(t)), t
        };
        xn = (t, e) => {
            var n;
            const i = t;
            if (i.timestamp = pe(), !(null === (n = Be[0]) || void 0 === n ? void 0 : n.isFrozen()) || i.type === a.FullSnapshot || i.type === a.IncrementalSnapshot && Nn.has(i.data.source) || Be.forEach(t => t.unfreeze()), Q) null == s || s(at(i), e);
            else if (X) {
                const t = {
                    type: "rrweb",
                    event: at(i),
                    origin: window.location.origin,
                    isCheckout: e
                };
                window.parent.postMessage(t, "*")
            }
            if (i.type === a.FullSnapshot) nt = i, it = 0;
            else if (i.type === a.IncrementalSnapshot) {
                if (i.data.source === l.Mutation && i.data.isAttachIframe) return;
                it++, (u && it >= u || o && i.timestamp - nt.timestamp > o) && Tn(!0)
            }
        };
        const lt = t => {
                if (t.removes && t.removes.length > 0) {
                    const e = t.adds.length > 0 ? new Set(t.adds.map(t => t.node.id)) : null,
                        n = new Set;
                    if (t.adds.length > 0)
                        for (const e of t.adds) {
                            const t = Dn.getNode(e.node.id);
                            t && "IFRAME" === t.nodeName && n.add(t)
                        }
                    t.removes.forEach(({
                        id: t
                    }) => {
                        if (e && e.has(t)) return;
                        const i = vt.getIframeElementById(t);
                        i && n.has(i) ? vt.forgetIframeId(t) : (null == st || st(t), vt.removeIframeById(t))
                    }), null == ot || ot(), vt.cleanupDetachedIframes()
                }
                xn({
                    type: a.IncrementalSnapshot,
                    data: i({
                        source: l.Mutation
                    }, t)
                })
            },
            ut = t => xn({
                type: a.IncrementalSnapshot,
                data: i({
                    source: l.Scroll
                }, t)
            }),
            ct = t => xn({
                type: a.IncrementalSnapshot,
                data: i({
                    source: l.CanvasMutation
                }, t)
            }),
            ht = new En({
                mutationCb: lt,
                adoptedStyleSheetCb: t => xn({
                    type: a.IncrementalSnapshot,
                    data: i({
                        source: l.AdoptedStyleSheet
                    }, t)
                }),
                maskAllElementAttributes: _,
                maskAttributeFn: C,
                blockClass: c,
                blockSelector: h
            });
        let dt = !1;
        const ft = () => {
                if (!dt) {
                    dt = !0;
                    try {
                        var t;
                        const n = null !== (t = null == e ? void 0 : e.flush()) && void 0 !== t ? t : 0;
                        ht.flushChangedLinkInlining(50 - n)
                    } finally {
                        dt = !1
                    }
                }
            },
            vt = new nn({
                mirror: Dn,
                mutationCb: lt,
                stylesheetManager: ht,
                recordCrossOriginIframes: N,
                wrappedEmit: xn
            });
        for (const t of W || []) t.getMirror && t.getMirror({
            nodeMirror: Dn,
            crossOriginIframeMirror: vt.crossOriginIframeMirror,
            crossOriginIframeStyleMirror: vt.crossOriginIframeStyleMirror
        });
        const pt = new Fn,
            mt = null == E ? void 0 : E.configured;
        On = new Rn({
            recordCanvas: D,
            mutationCb: ct,
            win: window,
            blockClass: c,
            blockSelector: h,
            mirror: Dn,
            sampling: A.canvas,
            dataURLOptions: J,
            resolutionScale: T,
            canvasMasking: E
        });
        const gt = new rn({
            mutationCb: lt,
            scrollCb: ut,
            bypassOptions: {
                blockClass: c,
                blockSelector: h,
                maskTextClass: v,
                maskTextSelector: p,
                inlineStylesheet: m,
                maskInputOptions: Y,
                dataURLOptions: J,
                maskTextFn: S,
                maskInputFn: k,
                maskAllElementAttributes: _,
                maskAttributeFn: C,
                recordCanvas: D,
                canvasMaskingConfigured: mt,
                inlineImages: z,
                sampling: A,
                slimDOMOptions: tt,
                iframeManager: vt,
                stylesheetManager: ht,
                canvasManager: On,
                keepIframeSrcFn: U,
                processedNodeManager: pt,
                attributeFilter: H
            },
            mirror: Dn
        });
        Tn = (t = !1) => {
            if (L) {
                G(g);
                try {
                    if (xn({
                            type: a.Meta,
                            data: {
                                href: window.location.href,
                                width: ye(),
                                height: ge()
                            }
                        }, t), n) return;
                    null == e || e.cancel(), e = void 0, ht.reset(), gt.init(), Be.forEach(t => t.lock());
                    let i = null,
                        r = [];
                    try {
                        i = function(t, e) {
                            const {
                                mirror: n = new yt,
                                blockClass: i = "rr-block",
                                blockSelector: r = null,
                                maskTextClass: s = "rr-mask",
                                maskTextSelector: o = null,
                                inlineStylesheet: a = !0,
                                inlineImages: l = !1,
                                recordCanvas: u = !1,
                                canvasMaskingConfigured: c,
                                maskAllInputs: h = !1,
                                maskTextFn: d,
                                maskInputFn: f,
                                maskAllElementAttributes: v = !1,
                                maskAttributeFn: p,
                                slimDOM: m = !1,
                                dataURLOptions: g,
                                preserveWhiteSpace: y,
                                onSerialize: b,
                                onIframeLoad: w,
                                iframeLoadTimeout: k,
                                onIframeListenerRegistered: S,
                                onStylesheetLoad: _,
                                stylesheetLoadTimeout: C,
                                keepIframeSrcFn: I = () => !1,
                                maxDepth: M,
                                inlineStylesheetBudgetRules: R
                            } = e || {}, A = !0 === h ? {
                                color: !0,
                                date: !0,
                                "datetime-local": !0,
                                email: !0,
                                month: !0,
                                number: !0,
                                range: !0,
                                search: !0,
                                tel: !0,
                                text: !0,
                                time: !0,
                                url: !0,
                                week: !0,
                                textarea: !0,
                                select: !0,
                                password: !0
                            } : !1 === h ? {
                                password: !0
                            } : h, x = se(m);
                            G(R);
                            try {
                                return re(t, {
                                    doc: t,
                                    mirror: n,
                                    blockClass: i,
                                    blockSelector: r,
                                    maskTextClass: s,
                                    maskTextSelector: o,
                                    skipChild: !1,
                                    inlineStylesheet: a,
                                    maskInputOptions: A,
                                    maskTextFn: d,
                                    maskInputFn: f,
                                    maskAllElementAttributes: v,
                                    maskAttributeFn: p,
                                    slimDOMOptions: x,
                                    dataURLOptions: g,
                                    inlineImages: l,
                                    recordCanvas: u,
                                    canvasMaskingConfigured: c,
                                    preserveWhiteSpace: y,
                                    onSerialize: b,
                                    onIframeLoad: w,
                                    iframeLoadTimeout: k,
                                    onIframeListenerRegistered: S,
                                    onStylesheetLoad: _,
                                    stylesheetLoadTimeout: C,
                                    keepIframeSrcFn: I,
                                    newlyAddedElement: !1,
                                    maxDepth: M
                                })
                            } finally {
                                V()
                            }
                        }(document, {
                            mirror: Dn,
                            blockClass: c,
                            blockSelector: h,
                            maskTextClass: v,
                            maskTextSelector: p,
                            inlineStylesheet: m,
                            maskAllInputs: Y,
                            inlineStylesheetBudgetRules: g,
                            maskTextFn: S,
                            maskInputFn: k,
                            maskAllElementAttributes: _,
                            maskAttributeFn: C,
                            slimDOM: tt,
                            dataURLOptions: J,
                            recordCanvas: D,
                            canvasMaskingConfigured: mt,
                            inlineImages: z,
                            onSerialize(t) {
                                Ie(t, Dn) && vt.addIframe(t), Me(t, Dn) && ht.trackLinkElement(t), Re(t) && gt.addShadowRoot(R.shadowRoot(t), document)
                            },
                            onIframeLoad(t, e) {
                                vt.attachIframe(t, e), gt.observeAttachShadow(t)
                            },
                            onIframeListenerRegistered(t, e) {
                                vt.registerLoadListenerDisposer(t, e)
                            },
                            onStylesheetLoad(t, e, n) {
                                ht.attachLinkElement(t, e, n)
                            },
                            keepIframeSrcFn: U
                        })
                    } finally {
                        r = K()
                    }
                    if (n) return;
                    if (!i) return console.warn("Failed to snapshot the document");
                    if (xn({
                            type: a.FullSnapshot,
                            data: {
                                node: i,
                                initialOffset: me(window)
                            }
                        }, t), n) return;
                    if (Be.forEach(t => t.unlock()), On.onFullSnapshot(), r.length) {
                        const t = function(t, e, n) {
                            let i = !1,
                                r = null,
                                s = 0,
                                o = null;
                            const a = () => null !== o || t.length > s,
                                l = () => {
                                    const n = t[s];
                                    t[s] = null, s += 1, n && ue(() => {
                                        o = e.beginDeferredLinkInlining(n, Dn.getId(n))
                                    })
                                },
                                u = () => {
                                    if (!o) return;
                                    const t = o;
                                    let e = !0;
                                    ue(() => {
                                        e = t.advance(200)
                                    }), e && (o = null)
                                },
                                c = () => {
                                    o || l(), u()
                                },
                                h = t => {
                                    if (r = null, i) return;
                                    let e = 0;
                                    do {
                                        try {
                                            c()
                                        } catch (t) {
                                            null == o || o.discard(), o = null, et(1)
                                        }
                                        e += 1
                                    } while (!i && a() && (t ? !t.didTimeout && t.timeRemaining() > 5 : 10 > e));
                                    i || (a() ? r = tn(h) : n())
                                };
                            return r = tn(h), {
                                cancel() {
                                    i = !0, null == o || o.discard(), o = null, null == r || r.cancel(), r = null
                                },
                                flush() {
                                    if (i) return 0;
                                    i = !0, null == r || r.cancel(), r = null;
                                    let e = 0,
                                        c = 0;
                                    for (; a() && 50 > e;) {
                                        o || l();
                                        const t = o;
                                        if (t)
                                            if (Math.floor(t.remainingRules() / 200) + 1 > 50 - e) t.discard(), o = null, c += 1;
                                            else {
                                                try {
                                                    u()
                                                } catch (t) {
                                                    null == o || o.discard(), o = null, c += 1
                                                }
                                                e += 1
                                            }
                                    }
                                    if (a() || c > 0) {
                                        let e = c + (null !== o ? 1 : 0);
                                        for (let n = s; t.length > n; n++) null !== t[n] && (e += 1);
                                        et(e), null == o || o.discard(), o = null
                                    }
                                    return n(), e
                                }
                            }
                        }(r, ht, () => {
                            e === t && (e = void 0)
                        });
                        e = t
                    }
                    N && vt.reattachIframes(), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ht.adoptStyleSheets(document.adoptedStyleSheets, Dn.getId(document))
                } finally {
                    V()
                }
            }
        };
        try {
            const t = [];
            t.push(ae("pagehide", () => {
                try {
                    ft()
                } catch (t) {}
                e = void 0
            }, window));
            for (const e of ["visibilitychange", "freeze", "resume"]) t.push(ae(e, O, document));
            st = e => {
                const n = rt.get(e);
                n && (n.forEach(e => {
                    ue(e);
                    const n = t.indexOf(e); - 1 !== n && t.splice(n, 1)
                }), rt.delete(e))
            }, ot = () => {
                for (const [t] of rt) {
                    const e = Dn.getNode(t);
                    if (e) try {
                        e.contentDocument && e.contentDocument.defaultView || null == st || st(t)
                    } catch (e) {
                        null == st || st(t)
                    } else null == st || st(t)
                }
            };
            const s = t => {
                var e;
                return je(Xe)({
                    mutationCb: lt,
                    mousemoveCb: (t, e) => xn({
                        type: a.IncrementalSnapshot,
                        data: {
                            source: e,
                            positions: t
                        }
                    }),
                    mouseInteractionCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.MouseInteraction
                        }, t)
                    }),
                    scrollCb: ut,
                    viewportResizeCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.ViewportResize
                        }, t)
                    }),
                    inputCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.Input
                        }, t)
                    }),
                    mediaInteractionCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.MediaInteraction
                        }, t)
                    }),
                    styleSheetRuleCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.StyleSheetRule
                        }, t)
                    }),
                    styleDeclarationCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.StyleDeclaration
                        }, t)
                    }),
                    canvasMutationCb: ct,
                    fontCb: t => xn({
                        type: a.IncrementalSnapshot,
                        data: i({
                            source: l.Font
                        }, t)
                    }),
                    selectionCb(t) {
                        xn({
                            type: a.IncrementalSnapshot,
                            data: i({
                                source: l.Selection
                            }, t)
                        })
                    },
                    customElementCb(t) {
                        xn({
                            type: a.IncrementalSnapshot,
                            data: i({
                                source: l.CustomElement
                            }, t)
                        })
                    },
                    blockClass: c,
                    ignoreClass: d,
                    ignoreSelector: f,
                    maskTextClass: v,
                    maskTextSelector: p,
                    maskInputOptions: Y,
                    inlineStylesheet: m,
                    sampling: A,
                    recordDOM: L,
                    recordCanvas: D,
                    canvasMaskingConfigured: mt,
                    inlineImages: z,
                    userTriggeredOnInput: j,
                    collectFonts: B,
                    doc: t,
                    maskInputFn: k,
                    maskTextFn: S,
                    maskAllElementAttributes: _,
                    maskAttributeFn: C,
                    keepIframeSrcFn: U,
                    blockSelector: h,
                    slimDOMOptions: tt,
                    dataURLOptions: J,
                    mirror: Dn,
                    iframeManager: vt,
                    stylesheetManager: ht,
                    shadowDomManager: gt,
                    processedNodeManager: pt,
                    canvasManager: On,
                    ignoreCSSAttributes: q,
                    attributeFilter: H,
                    plugins: (null == W || null === (e = W.filter(t => t.observer)) || void 0 === e ? void 0 : e.map(t => ({
                        name: t.name,
                        observer: t.observer,
                        options: t.options,
                        callback: e => xn({
                            type: a.Plugin,
                            data: {
                                plugin: t.name,
                                payload: e
                            }
                        })
                    }))) || []
                }, I)
            };
            vt.addLoadListener(e => {
                try {
                    const n = Dn.getId(e),
                        i = s(e.contentDocument);
                    if ("function" == typeof i && (t.push(i), -1 !== n)) {
                        let t = rt.get(n);
                        t || (t = new Set, rt.set(n, t)), t.add(i)
                    }
                } catch (t) {
                    console.warn(t)
                }
            }), vt.addPageHideListener(t => {
                const e = Dn.getId(t);
                null == st || st(e), qe(t)
            });
            let o = -1;
            const u = t => xn({
                    type: a.Custom,
                    data: {
                        tag: "rrweb/fullscreen",
                        payload: t
                    }
                }),
                g = () => {
                    var t, e, n, i;
                    const r = document,
                        s = null !== (t = null !== (e = null !== (n = null !== (i = r.fullscreenElement) && void 0 !== i ? i : r.webkitFullscreenElement) && void 0 !== n ? n : r.mozFullScreenElement) && void 0 !== e ? e : r.msFullscreenElement) && void 0 !== t ? t : null,
                        a = s ? Dn.getId(s) : -1;
                    a !== o && (-1 !== o && u({
                        id: o,
                        enter: !1
                    }), o = a, -1 !== a && u({
                        id: a,
                        enter: !0
                    }))
                },
                y = () => {
                    if (n || r) return;
                    if (r = !0, Tn(), n) return;
                    const e = s(document);
                    n ? "function" == typeof e && ce([e]) : ("function" == typeof e && t.push(e), t.push(ae("fullscreenchange", g)), t.push(ae("webkitfullscreenchange", g)), t.push(ae("mozfullscreenchange", g)), t.push(ae("MSFullscreenChange", g)), Ln = !0)
                };
            return ["interactive", "complete"].includes(document.readyState) ? y() : (t.push(ae("DOMContentLoaded", () => {
                xn({
                    type: a.DomContentLoaded,
                    data: {}
                }), "DOMContentLoaded" === P && setTimeout(y, 0)
            })), t.push(ae("load", () => {
                xn({
                    type: a.Load,
                    data: {}
                }), "load" === P && y()
            }, window))), () => {
                n = !0;
                try {
                    ft()
                } catch (t) {}
                e = void 0, ht.stop(), ce(t), pt.destroy(), vt.removeLoadListener(), vt.destroy(), rt.clear(), gt.reset(), Dn.reset(), Ln = !1, Pe()
            }
        } catch (t) {
            console.warn(t)
        }
    }
    Pn.addCustomEvent = (t, e) => {
        if (!Ln) throw new Error("please add custom event after start recording");
        xn({
            type: a.Custom,
            data: {
                tag: t,
                payload: e
            }
        })
    }, Pn.freezePage = () => {
        Be.forEach(t => t.freeze())
    }, Pn.takeFullSnapshot = t => {
        if (!Ln) throw new Error("please take full snapshot after start recording");
        Tn(t)
    }, Pn.isRecording = () => Ln, Pn.mirror = Dn, "Mobile".toLowerCase(), "Tablet".toLowerCase(), new RegExp("Xbox", "i"), new RegExp("Nintendo", "i"), new RegExp("PlayStation", "i"), new RegExp("Windows", "i"), Date, Date, new RegExp(/[a-z][a-z0-9+.-]{0,63}:[^\s<>"]+/gi.source, "i");
    var jn = /[a-z][a-z0-9+.-]{0,63}:\/\//i;
    new RegExp(`^${jn.source}`, "i"), new RegExp(jn.source, "gi");
    var Bn = Object.create(null);

    function zn(t) {
        return zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, zn(t)
    }

    function Wn(t, e, n) {
        return (e = function(t) {
            var e = function(t) {
                if ("object" != zn(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                    var n = e.call(t, "string");
                    if ("object" != zn(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(t)
            }(t);
            return "symbol" == zn(e) ? e : e + ""
        }(e)) in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
    Bn.Node = Object.create(null), Bn.ShadowRoot = Object.create(null), Bn.MutationObserver = Object.create(null), Bn.Element = Object.create(null);
    var Un = class {
            constructor(t) {
                Wn(this, "fileName", void 0), Wn(this, "functionName", void 0), Wn(this, "lineNumber", void 0), Wn(this, "columnNumber", void 0), this.fileName = t.fileName || "", this.functionName = t.functionName || "", this.lineNumber = t.lineNumber, this.columnNumber = t.columnNumber
            }
            toString() {
                const t = this.lineNumber || "",
                    e = this.columnNumber || "";
                return this.functionName ? `${this.functionName} (${this.fileName}:${t}:${e})` : `${this.fileName}:${t}:${e}`
            }
        },
        qn = /(^|@)\S+:\d+/,
        Hn = /^\s*at .*(\S+:\d+|\(native\))/m,
        Gn = /^(eval@)?(\[native code])?$/,
        Vn = {
            parse(t) {
                return t ? void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"] ? this.parseOpera(t) : t.stack && t.stack.match(Hn) ? this.parseV8OrIE(t) : t.stack ? this.parseFFOrSafari(t) : [] : []
            },
            extractLocation(t) {
                if (-1 === t.indexOf(":")) return [t];
                const e = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g, ""));
                if (!e) throw new Error(`Cannot parse given url: ${t}`);
                return [e[1], e[2] || void 0, e[3] || void 0]
            },
            parseV8OrIE(t) {
                return t.stack.split("\n").filter(function(t) {
                    return !!t.match(Hn)
                }, this).map(function(t) {
                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                    let e = t.replace(/^\s+/, "").replace(/\(eval code/g, "(");
                    const n = e.match(/ (\((.+):(\d+):(\d+)\)$)/);
                    e = n ? e.replace(n[0], "") : e;
                    const i = e.split(/\s+/).slice(1),
                        r = this.extractLocation(n ? n[1] : i.pop());
                    return new Un({
                        functionName: i.join(" ") || void 0,
                        fileName: ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? void 0 : r[0],
                        lineNumber: r[1],
                        columnNumber: r[2]
                    })
                }, this)
            },
            parseFFOrSafari(t) {
                return t.stack.split("\n").filter(function(t) {
                    return !t.match(Gn)
                }, this).map(function(t) {
                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new Un({
                        functionName: t
                    }); {
                        const e = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            n = t.match(e),
                            i = n && n[1] ? n[1] : void 0,
                            r = this.extractLocation(t.replace(e, ""));
                        return new Un({
                            functionName: i,
                            fileName: r[0],
                            lineNumber: r[1],
                            columnNumber: r[2]
                        })
                    }
                }, this)
            },
            parseOpera(t) {
                return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
            },
            parseOpera9(t) {
                const e = /Line (\d+).*script (?:in )?(\S+)/i,
                    n = t.message.split("\n"),
                    i = [];
                for (let t = 2, r = n.length; r > t; t += 2) {
                    const r = e.exec(n[t]);
                    r && i.push(new Un({
                        fileName: r[2],
                        lineNumber: parseFloat(r[1])
                    }))
                }
                return i
            },
            parseOpera10(t) {
                const e = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                    n = t.stacktrace.split("\n"),
                    i = [];
                for (let t = 0, r = n.length; r > t; t += 2) {
                    const r = e.exec(n[t]);
                    r && i.push(new Un({
                        functionName: r[3] || void 0,
                        fileName: r[2],
                        lineNumber: parseFloat(r[1])
                    }))
                }
                return i
            },
            parseOpera11(t) {
                return t.stack.split("\n").filter(function(t) {
                    return !!t.match(qn) && !t.match(/^Error created at/)
                }, this).map(function(t) {
                    const e = t.split("@"),
                        n = this.extractLocation(e.pop());
                    return new Un({
                        functionName: (e.shift() || "").replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0,
                        fileName: n[0],
                        lineNumber: n[1],
                        columnNumber: n[2]
                    })
                }, this)
            }
        };

    function Zn(t) {
        if (!t || !t.outerHTML) return "";
        let e = "";
        for (; t.parentElement;) {
            let n = t.localName;
            if (!n) break;
            n = n.toLowerCase();
            const i = t.parentElement,
                r = [];
            if (i.children && i.children.length > 0)
                for (let t = 0; i.children.length > t; t++) {
                    const e = i.children[t];
                    e.localName && e.localName.toLowerCase && e.localName.toLowerCase() === n && r.push(e)
                }
            r.length > 1 && (n += `:eq(${r.indexOf(t)})`), e = n + (e ? ">" + e : ""), t = i
        }
        return e
    }

    function Jn(t) {
        return Array.isArray(t)
    }

    function Qn(t) {
        return "object" == typeof t && null !== t && !Jn(t)
    }

    function Xn(t, e) {
        if (0 === e) return !0;
        const n = Object.keys(t);
        for (const i of n)
            if (Qn(t[i]) && Xn(t[i], e - 1)) return !0;
        return !1
    }

    function Yn(t, e) {
        const n = {
            numOfKeysLimit: 50,
            depthOfLimit: 4
        };
        Object.assign(n, e);
        const i = [],
            r = [];
        return JSON.stringify(t, function(t, e) {
            if (i.length > 0) {
                const n = i.indexOf(this);
                ~n ? i.splice(n + 1) : i.push(this), ~n ? r.splice(n, 1 / 0, t) : r.push(t), ~i.indexOf(e) && (e = i[0] === e ? "[Circular ~]" : "[Circular ~." + r.slice(0, i.indexOf(e)).join(".") + "]")
            } else i.push(e);
            if (null === e) return e;
            if (void 0 === e) return "undefined";
            if (Qn(s = e) && Object.keys(s).length > n.numOfKeysLimit || "function" == typeof s || Qn(s) && Xn(s, n.depthOfLimit)) return function(t) {
                let e = t.toString();
                return n.stringLengthLimit && e.length > n.stringLengthLimit && (e = `${e.slice(0,n.stringLengthLimit)}...`), e
            }(e);
            var s;
            if ("bigint" == typeof e) return e.toString() + "n";
            if (e instanceof Event) {
                const t = {};
                for (const n in e) {
                    const i = e[n];
                    t[n] = Jn(i) ? Zn(i.length ? i[0] : null) : i
                }
                return t
            }
            return e instanceof Node ? e instanceof HTMLElement ? e ? e.outerHTML : "" : e.nodeName : e instanceof Error ? e.stack ? e.stack + "\nEnd of stack for Error object" : e.name + ": " + e.message : e
        })
    }
    var Kn = {
        level: ["assert", "clear", "count", "countReset", "debug", "dir", "dirxml", "error", "group", "groupCollapsed", "groupEnd", "info", "log", "table", "time", "timeEnd", "timeLog", "trace", "warn"],
        lengthThreshold: 1e3,
        logger: "console"
    };

    function ti(t, e, n) {
        const i = n ? Object.assign({}, Kn, n) : Kn,
            r = i.logger;
        if (!r) return () => {};
        let s;
        s = "string" == typeof r ? e[r] : r;
        let o = 0,
            a = !1,
            l = !0;
        const u = [];
        if (i.level.includes("error")) {
            const n = e => {
                const n = e.message;
                t({
                    level: "error",
                    trace: Vn.parse(e.error).map(t => t.toString()),
                    payload: [Yn(n, i.stringifyOptions)]
                })
            };
            e.addEventListener("error", n), u.push(() => {
                e.removeEventListener("error", n)
            });
            const r = e => {
                let n, r;
                e.reason instanceof Error ? (n = e.reason, r = [Yn(`Uncaught (in promise) ${n.name}: ${n.message}`, i.stringifyOptions)]) : (n = new Error, r = [Yn("Uncaught (in promise)", i.stringifyOptions), Yn(e.reason, i.stringifyOptions)]), t({
                    level: "error",
                    trace: Vn.parse(n).map(t => t.toString()),
                    payload: r
                })
            };
            e.addEventListener("unhandledrejection", r), u.push(() => {
                e.removeEventListener("unhandledrejection", r)
            })
        }
        for (const t of i.level) u.push(c(s, t));
        return () => {
            l = !1, u.forEach(t => t())
        };

        function c(e, n) {
            return e[n] ? function(r, s) {
                try {
                    if (!(s in r)) return () => {};
                    const u = r[s],
                        c = {
                            next: u
                        },
                        h = (r => (...s) => {
                            if (r.apply(e, s), l && !("assert" === n && s[0] || a)) {
                                a = !0;
                                try {
                                    const e = Vn.parse(new Error).map(t => t.toString()).splice(1),
                                        r = ("assert" === n ? s.slice(1) : s).map(t => Yn(t, i.stringifyOptions));
                                    o++, i.lengthThreshold > o ? t({
                                        level: n,
                                        trace: e,
                                        payload: r
                                    }) : o === i.lengthThreshold && t({
                                        level: "warn",
                                        trace: [],
                                        payload: [Yn("The number of log records reached the threshold.")]
                                    })
                                } catch (t) {
                                    r.apply(e, ["rrweb logger error:", t, ...s])
                                } finally {
                                    a = !1
                                }
                            }
                        })(function(...t) {
                            return c.next.apply(this, t)
                        });
                    return "function" == typeof h && (h.prototype = h.prototype || {}, Object.defineProperties(h, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: u
                        },
                        __rrweb_layer__: {
                            enumerable: !1,
                            value: c
                        }
                    })), r[s] = h, () => {
                        if (r[s] === h) return void(r[s] = c.next);
                        const t = t => {
                            var e;
                            return "function" == typeof t ? null !== (e = t.__rrweb_layer__) && void 0 !== e ? e : t.__posthog_layer__ : void 0
                        };
                        let e = r[s],
                            n = t(e);
                        for (; n;) {
                            if (n.next === h) return void(n.next = c.next);
                            e = n.next, n = t(e)
                        }
                    }
                } catch (t) {
                    return () => {}
                }
            }(e, n) : () => {}
        }
    }
    const ei = "u" > typeof window ? window : void 0,
        ni = "u" > typeof globalThis ? globalThis : ei,
        ii = null == ni ? void 0 : ni.document,
        ri = null == ni ? void 0 : ni.location;
    null != ni && ni.XMLHttpRequest && new ni.XMLHttpRequest;
    const si = "undefined" != typeof globalThis ? globalThis : ei;
    si && "undefined" == typeof self && (si.self = si), si && "undefined" == typeof File && (si.File = function() {});
    const oi = null != ei ? ei : {},
        ai = Object.prototype,
        li = ai.hasOwnProperty,
        ui = ai.toString,
        ci = Array.isArray || function(t) {
            return "[object Array]" === ui.call(t)
        },
        hi = t => "function" == typeof t,
        di = t => t === Object(t) && !ci(t),
        fi = t => void 0 === t,
        vi = t => "[object String]" == ui.call(t),
        pi = t => null === t,
        mi = t => fi(t) || pi(t),
        gi = t => "[object Number]" == ui.call(t) && t == t,
        yi = t => "[object Boolean]" === ui.call(t),
        bi = t => t instanceof FormData;

    function wi(t, e, n, i, r) {
        return e > n && (i.warn("min cannot be greater than max."), e = n), gi(t) ? t > n ? (i.warn(" cannot be  greater than max: " + n + ". Using max value instead."), n) : e > t ? (i.warn(" cannot be less than min: " + e + ". Using min value instead."), e) : t : (i.warn(" must be a number. using max or fallback. max: " + n + ", fallback: " + r), wi(null != r ? r : n, e, n, i))
    }
    var ki = class {
        constructor(t) {
            this.C = {}, this.I = t.I, this.R = wi(t.bucketSize, 0, 100, t.A), this.O = wi(t.refillRate, 0, this.R, t.A), this.$ = wi(t.refillInterval, 0, 864e5, t.A)
        }
        F(t, e) {
            const n = Math.floor((e - t.lastAccess) / this.$);
            n > 0 && (t.tokens = Math.min(t.tokens + n * this.O, this.R), t.lastAccess = t.lastAccess + n * this.$)
        }
        consumeRateLimit(t) {
            var e;
            const n = Date.now(),
                i = String(t);
            let r = this.C[i];
            return r ? this.F(r, n) : (r = {
                tokens: this.R,
                lastAccess: n
            }, this.C[i] = r), 0 === r.tokens || (r.tokens--, 0 === r.tokens && (null === (e = this.I) || void 0 === e || e.call(this, t)), 0 === r.tokens)
        }
        stop() {
            this.C = {}
        }
    };

    function Si(t) {
        return t ? t.split("#")[0] : t
    }
    const _i = "NativeGzipValidationError";
    let Ci;
    const Ii = t => {
            throw function(t, e) {
                const n = new Error(e);
                try {
                    Object.defineProperty(n, "name", {
                        value: t,
                        writable: !0,
                        enumerable: !0,
                        configurable: !0
                    })
                } catch (t) {}
                return n
            }(_i, `Native gzip produced invalid output: ${t}`)
        },
        Mi = (Ri = s(function*(t, e) {
            18 > t.size && Ii("too-short");
            const n = new Uint8Array(yield t.slice(0, 10).arrayBuffer());
            var i;
            (2 > (i = n).length || 31 !== i[0] || 139 !== i[1] || 8 !== n[2]) && Ii("invalid-header");
            const r = new DataView(yield t.slice(t.size - 8).arrayBuffer());
            r.getUint32(0, !0) !== (t => {
                const e = (() => {
                    if (Ci) return Ci;
                    Ci = [];
                    for (let t = 0; 256 > t; t++) {
                        let e = t;
                        for (let t = 0; 8 > t; t++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                        Ci[t] = e >>> 0
                    }
                    return Ci
                })();
                let n = 4294967295;
                for (let i = 0; t.length > i; i++) n = e[255 & (n ^ t[i])] ^ n >>> 8;
                return (4294967295 ^ n) >>> 0
            })(e) && Ii("invalid-crc");
            const s = e.length >>> 0;
            r.getUint32(4, !0) !== s && Ii("invalid-size")
        }), function(t, e) {
            return Ri.apply(this, arguments)
        });
    var Ri;

    function Ai() {
        return Ai = s(function*(t, e = !0, n) {
            try {
                const e = (new TextEncoder).encode(t),
                    n = new globalThis.CompressionStream("gzip"),
                    r = n.writable.getWriter(),
                    o = r.write(e).then(() => r.close()).catch((i = s(function*(t) {
                        try {
                            yield r.abort(t)
                        } catch (t) {}
                        throw t
                    }), function(t) {
                        return i.apply(this, arguments)
                    })),
                    a = new Response(n.readable).blob(),
                    [l] = yield Promise.all([a, o]);
                return yield Mi(l, e), l
            } catch (t) {
                if (null == n ? void 0 : n.rethrow) throw t;
                return e && console.error("Failed to gzip compress data", t), null
            }
            var i
        }), Ai.apply(this, arguments)
    }
    const xi = "0.10.4",
        Ti = {
            DEBUG: !1,
            LIB_VERSION: xi,
            LIB_NAME: "browser-common",
            JS_SDK_VERSION: xi
        },
        Oi = (t, {
            debugEnabled: e
        } = {}) => {
            const n = {
                N(n, ...i) {
                    let r;
                    try {
                        r = typeof window > "u" ? void 0 : window
                    } catch (t) {
                        return
                    }
                    r && (Ti.DEBUG || r.POSTHOG_DEBUG || e) && !fi(r.console) && r.console && ("__rrweb_original__" in r.console[n] ? r.console[n].__rrweb_original__ : r.console[n])(t, ...i)
                },
                debug(...t) {
                    n.N("debug", ...t)
                },
                info(...t) {
                    n.N("log", ...t)
                },
                warn(...t) {
                    n.N("warn", ...t)
                },
                error(...t) {
                    n.N("error", ...t)
                },
                critical(...e) {
                    console.error(t, ...e)
                },
                uninitializedWarning(t) {
                    n.error(`You must initialize PostHog before calling ${t}`)
                },
                createLogger: (e, n) => Oi(`${t} ${e}`, n)
            };
            return n
        },
        Ei = Oi("[PostHog.js]"),
        Fi = Ei.createLogger;

    function Li(t, e) {
        if (!mi(t))
            if (ci(t)) t.forEach(e);
            else if (bi(t)) t.forEach((t, n) => e(t, n));
        else
            for (const n in t) li.call(t, n) && e(t[n], n)
    }

    function $i(t, e, n, i) {
        const {
            capture: r = !1,
            passive: s = !0
        } = null != i ? i : {};
        null == t || t.addEventListener(e, n, {
            capture: r,
            passive: s
        })
    }
    const Di = t => {
            const e = typeof document > "u" ? void 0 : document,
                n = null == e ? void 0 : e.createElement("a");
            return fi(n) ? null : (n.href = t, n)
        },
        Ni = ["localhost", "127.0.0.1"],
        Pi = () => {},
        ji = t => {
            var e;
            if (hi(t)) return null !== (e = t.__posthog_layer__) && void 0 !== e ? e : t.__rrweb_layer__
        };

    function Bi(t, e, n) {
        try {
            if (!(e in t)) return Pi;
            const i = {
                    next: t[e]
                },
                r = n(function(...t) {
                    return i.next.apply(this, t)
                });
            return hi(r) && (r.prototype = r.prototype || {}, Object.defineProperties(r, {
                __posthog_wrapped__: {
                    enumerable: !1,
                    value: !0
                },
                __posthog_layer__: {
                    enumerable: !1,
                    value: i
                }
            })), t[e] = r, () => {
                if (t[e] === r) return void(t[e] = i.next);
                let n = t[e],
                    s = ji(n);
                for (; s;) {
                    if (s.next === r) return void(s.next = i.next);
                    n = s.next, s = ji(n)
                }
            }
        } catch (t) {
            return Pi
        }
    }

    function zi(t, e) {
        var n;
        const i = function(t) {
                try {
                    return "string" == typeof t ? new URL(t).hostname : "url" in t ? new URL(t.url).hostname : t.hostname
                } catch (t) {
                    return null
                }
            }(t),
            r = {
                hostname: i,
                isHostDenied: !1
            };
        if (!(null === (n = e.payloadHostDenyList) || void 0 === n ? void 0 : n.length) || !(null == i ? void 0 : i.trim().length)) return r;
        for (const t of e.payloadHostDenyList)
            if (i.endsWith(t)) return {
                hostname: i,
                isHostDenied: !0
            };
        return r
    }

    function Wi(t) {
        var e;
        const n = typeof window > "u" ? void 0 : window,
            i = null == n || null === (e = n.location) || void 0 === e ? void 0 : e.href;
        return fi(i) ? void 0 : function(t, e) {
            var n;
            const i = null == t || null === (n = t.config) || void 0 === n ? void 0 : n.get_current_url;
            if (!hi(i)) return e;
            try {
                const t = i(e);
                return vi(t) && t ? t : e
            } catch (t) {
                return Ei.error("Error in get_current_url, falling back to window.location.href", t), e
            }
        }(t, i)
    }
    const Ui = "$stored_person_properties",
        qi = new RegExp("^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$"),
        Hi = /(^|[^0-9A-Za-z_])([0-9][0-9 -]*[0-9])(?=$|[^0-9A-Za-z_])/g,
        Gi = [16, 15, 14, 13],
        Vi = new RegExp("^(\\d{3}-?\\d{2}-?\\d{4})$"),
        Zi = new RegExp("(^|[^0-9])((?!000|666)[0-9]{3}-?(?!00)[0-9]{2}-?(?!0000)[0-9]{4})(?=$|([^0-9]))", "g"),
        Ji = /[0-9A-Za-z_]/;

    function Qi(t) {
        let e = 0,
            n = !1;
        for (let i = t.length - 1; i >= 0; i--) {
            let r = t.charCodeAt(i) - 48;
            n && (r *= 2, r > 9 && (r -= 9)), e += r, n = !n
        }
        return e % 10 == 0
    }
    const Xi = 1e6;

    function Yi(t) {
        var e;
        return Math.min(Xi, null !== (e = t.payloadSizeLimitBytes) && void 0 !== e ? e : Xi)
    }
    const Ki = {
            initiatorTypes: ["audio", "beacon", "body", "css", "early-hint", "embed", "fetch", "frame", "iframe", "icon", "image", "img", "input", "link", "navigation", "object", "ping", "script", "track", "video", "xmlhttprequest"],
            maskRequestFn: t => t,
            recordHeaders: !1,
            recordBody: !1,
            recordInitialRequests: !1,
            recordPerformance: !1,
            performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
            payloadSizeLimitBytes: Xi,
            payloadHostDenyList: [".lr-ingest.io", ".ingest.sentry.io", ".clarity.ms", "google-analytics.com", "analytics.google.com", "nr-data.net", "datadoghq.com", "datadoghq.eu", "ddog-gov.com", "segment.io", "rudderstack.com", "amplitude.com", "mixpanel.com", "hotjar.com", "hotjar.io", "fullstory.com"],
            streamNetworkBody: !1
        },
        tr = ["authorization", "x-forwarded-for", "authorization", "cookie", "set-cookie", "x-api-key", "x-real-ip", "remote-addr", "forwarded", "proxy-authorization", "x-csrf-token", "x-csrftoken", "x-xsrf-token"],
        er = ["password", "secret", "passwd", "api_key", "apikey", "auth", "credentials", "mysql_pwd", "privatekey", "private_key", "token"],
        nr = ["auth", "token", "secret", "session", "api-key", "apikey", "api_key", "credential", "password", "passwd", "cookie", "csrf", "xsrf"],
        ir = t => {
            mi(t) || Li(Object.keys(t), e => {
                (t => {
                    const e = t.toLowerCase();
                    return tr.includes(e) || nr.some(t => e.includes(t))
                })(e) && (t[e] = "redacted")
            })
        },
        rr = ["/s/", "/e/", "/i/"];

    function sr(t, e, n, i) {
        if (mi(t)) return t;
        let r = (null == e ? void 0 : e["content-length"]) || function(t) {
            return new Blob([t]).size
        }(t);
        return vi(r) && (r = parseInt(r)), r > n ? `[SessionRecording] ${i} body too large to record (${r} bytes)` : t
    }

    function or(t, e) {
        if (mi(t)) return t;
        let n = t;
        return function(t, e = !0) {
            if (mi(t)) return !1;
            if (vi(t)) {
                if (t = t.trim(), e ? qi.test((t || "").replace(/[- ]/g, "")) : function(t) {
                        let e;
                        for (Hi.lastIndex = 0; e = Hi.exec(t);) {
                            const t = e[2];
                            if (!t) continue;
                            const n = t.replace(/[- ]/g, "");
                            for (let t = 0; n.length > t; t++)
                                for (const e of Gi) {
                                    const i = t + e;
                                    if (n.length >= i) {
                                        const e = n.slice(t, i);
                                        if (qi.test(e) && Qi(e)) return !0
                                    }
                                }
                        }
                        return !1
                    }(t)) return !1;
                if (e ? Vi.test(t) : function(t) {
                        let e;
                        for (Zi.lastIndex = 0; e = Zi.exec(t);) {
                            const t = e[1],
                                n = e[3];
                            if (!(t && n && Ji.test(t) && Ji.test(n))) return !0
                        }
                        return !1
                    }(t)) return !1
            }
            return !0
        }(n, !1) || (n = "[SessionRecording] " + e + " body redacted"), Li(er, t => {
            (null == n ? void 0 : n.length) && -1 !== (null == n ? void 0 : n.indexOf(t)) && (n = "[SessionRecording] " + e + " body redacted as might contain: " + t)
        }), n
    }
    const ar = new WeakSet,
        lr = Fi("[Recorder]"),
        ur = t => "navigation" === t.entryType,
        cr = t => "resource" === t.entryType,
        hr = () => {};

    function dr(t, e) {
        var n;
        return ur(e) && "complete" === (null === (n = t.document) || void 0 === n ? void 0 : n.readyState) && e.loadEventEnd > 0
    }

    function fr(t, e) {
        return e.recordInitialRequests ? t.performance.getEntries().filter(n => dr(t, n) || cr(n) && e.initiatorTypes.includes(n.initiatorType)) : e.performanceEntryTypeToObserve.includes("navigation") ? function(t) {
            var e;
            return "complete" !== (null === (e = t.document) || void 0 === e ? void 0 : e.readyState) ? [] : t.performance.getEntriesByType("navigation").filter(e => dr(t, e))
        }(t) : []
    }

    function vr(t, e) {
        return !!e && (yi(e) || e[t])
    }

    function pr(t) {
        if ("undefined" == typeof Request) return !1;
        if (t instanceof Request) return !0;
        try {
            return "[object Request]" === {}.toString.call(t)
        } catch (t) {
            return !1
        }
    }
    const mr = ["image/", "video/", "audio/", "font/", "application/octet-stream", "application/pdf", "application/zip", "application/wasm"];

    function gr({
        type: t,
        recordBody: e,
        headers: n,
        url: i
    }) {
        function r(t) {
            const e = Object.keys(n).find(t => "content-type" === t.toLowerCase()),
                i = e && n[e];
            return t.some(t => null == i ? void 0 : i.toLowerCase().includes(t))
        }
        if (!e) return !1;
        if (function t(e) {
                try {
                    return "string" == typeof e ? e.startsWith("blob:") : e instanceof URL ? "blob:" === e.protocol : !!pr(e) && t(e.url)
                } catch (t) {
                    return !1
                }
            }(i)) return !1;
        if (r(mr)) return !1;
        if (yi(e)) return !0;
        if (ci(e)) return r(e);
        const s = e[t];
        return yi(s) ? s : r(s)
    }

    function yr(t, e, n, i, r) {
        return br.apply(this, arguments)
    }

    function br() {
        return br = s(function*(t, e, n, i, r, s = 0) {
            if (s > 10) return lr.warn("Failed to get performance entry for request", {
                url: n,
                initiatorType: e
            }), null;
            const o = function(t, e) {
                for (let n = t.length - 1; n >= 0; n -= 1)
                    if (e(t[n])) return t[n]
            }(t.performance.getEntriesByName(n), t => cr(t) && t.initiatorType === e && (fi(i) || t.startTime >= i) && (fi(r) || r >= t.startTime));
            return o || (yield new Promise(t => setTimeout(t, 50 * s)), yr(t, e, n, i, r, s + 1))
        }), br.apply(this, arguments)
    }

    function wr({
        body: t,
        options: e,
        url: n
    }) {
        if (mi(t)) return null;
        const {
            hostname: i,
            isHostDenied: r
        } = zi(n, e);
        if (r) return i + " is in deny list";
        if (vi(t)) return t;
        if ((t => "u" > typeof Document && t instanceof Document)(t)) return t.textContent;
        if (bi(t)) return function(t, e = "&") {
            let n, i;
            const r = [];
            return Li(t, function(t, e) {
                fi(t) || fi(e) || "undefined" === e || (n = encodeURIComponent((t => t instanceof File)(t) ? t.name : t.toString()), i = encodeURIComponent(e), r[r.length] = i + "=" + n)
            }), r.join(e)
        }(t);
        if (di(t)) try {
            return JSON.stringify(t)
        } catch (t) {
            return "[SessionReplay] Failed to stringify response object"
        }
        return "[SessionReplay] Cannot read body of type " + toString.call(t)
    }
    const kr = t => !pi(t) && ("navigation" === t.entryType || "resource" === t.entryType);

    function Sr(t, {
        entry: e,
        method: n,
        status: r,
        networkRequest: s,
        isInitial: o,
        start: a,
        end: l,
        url: u,
        initiatorType: c
    }) {
        a = e ? e.startTime : a, l = e ? e.responseEnd : l;
        const h = Math.floor(Date.now() - t.performance.now()),
            d = Math.floor(h + (a || 0)),
            f = [i(i({}, e ? JSON.parse(JSON.stringify(e.toJSON())) : {
                name: u
            }), {}, {
                startTime: fi(a) ? void 0 : Math.round(a),
                endTime: fi(l) ? void 0 : Math.round(l),
                timeOrigin: h,
                timestamp: d,
                method: n,
                initiatorType: c || (e ? e.initiatorType : void 0),
                status: r,
                requestHeaders: s.requestHeaders,
                requestBody: s.requestBody,
                responseHeaders: s.responseHeaders,
                responseBody: s.responseBody,
                isInitial: o
            })];
        if (kr(e))
            for (const t of e.serverTiming || []) f.push({
                timeOrigin: h,
                timestamp: d,
                startTime: Math.round(e.startTime),
                name: t.name,
                duration: t.duration,
                entryType: "serverTiming"
            });
        return f
    }
    const _r = ["video/", "audio/"];

    function Cr(t) {
        return di(t) && hi(t.getReader) && hi(t.tee)
    }
    const Ir = "[SessionReplay] Timeout while trying to read body",
        Mr = "[SessionReplay] Failed to read body";

    function Rr(t) {
        return `${Mr}: ${t}`
    }

    function Ar(t) {
        return `[SessionReplay] Body too large to record (> ${t} bytes)`
    }

    function xr(t, e) {
        if (!e.streamNetworkBody) return function(t) {
            return new Promise(e => {
                const n = setTimeout(() => e(Ir), 500);
                try {
                    t.clone().text().then(t => e(t), t => e(Rr(t))).finally(() => clearTimeout(n))
                } catch (t) {
                    clearTimeout(n), e(Mr)
                }
            })
        }(t);
        const n = Yi(e);
        return function(t, e) {
            try {
                var n, i;
                const r = null === (n = t.headers) || void 0 === n || null === (i = n.get) || void 0 === i ? void 0 : i.call(n, "content-length");
                if (!r) return !1;
                const s = parseInt(r, 10);
                return Number.isFinite(s) && s > e
            } catch (t) {
                return !1
            }
        }(t, n) ? Promise.resolve(Ar(n)) : function(t, e) {
            return new Promise(n => {
                let i, r = !1;

                function s() {
                    try {
                        null == i || i.cancel().catch(() => {})
                    } catch (t) {}
                }

                function o(t) {
                    r || (r = !0, clearTimeout(a), s(), n(t))
                }
                const a = setTimeout(() => o(Ir), 500);
                let l;
                try {
                    l = t.clone()
                } catch (t) {
                    return void o(Mr)
                }
                const u = l.body;
                if (!Cr(u) || "undefined" == typeof TextDecoder) {
                    try {
                        l.text().then(t => o(t), t => o(Rr(t)))
                    } catch (t) {
                        o(Mr)
                    }
                    return
                }
                try {
                    i = u.getReader()
                } catch (t) {
                    return void o(Mr)
                }
                const c = [];
                let h = 0;
                ! function t() {
                    i.read().then(({
                        done: n,
                        value: i
                    }) => {
                        if (r) s();
                        else if (n) o((new TextDecoder).decode(function(t, e) {
                            const n = new Uint8Array(e);
                            let i = 0;
                            for (const e of t) n.set(e, i), i += e.byteLength;
                            return n
                        }(c, h)));
                        else {
                            if (i) {
                                if (h + i.byteLength > e) return void o(Ar(e));
                                h += i.byteLength, c.push(i)
                            }
                            t()
                        }
                    }, t => o(Rr(t)))
                }()
            })
        }(t, n)
    }

    function Tr(t) {
        return Or.apply(this, arguments)
    }

    function Or() {
        return (Or = s(function*({
            r: t,
            options: e,
            url: n
        }) {
            const {
                hostname: i,
                isHostDenied: r
            } = zi(n, e);
            return r ? Promise.resolve(i + " is in deny list") : xr(t, e)
        })).apply(this, arguments)
    }

    function Er(t) {
        return Fr.apply(this, arguments)
    }

    function Fr() {
        return (Fr = s(function*({
            r: t,
            options: e,
            url: n
        }) {
            const i = function({
                r: t,
                options: e,
                url: n
            }) {
                var i;
                if ("chunked" === t.headers.get("Transfer-Encoding")) return "Chunked Transfer-Encoding is not supported";
                const r = null === (i = t.headers.get("Content-Type")) || void 0 === i ? void 0 : i.toLowerCase(),
                    s = _r.some(t => null == r ? void 0 : r.startsWith(t));
                if (r && s) return `Content-Type ${r} is not supported`;
                const {
                    hostname: o,
                    isHostDenied: a
                } = zi(n, e);
                return a ? o + " is in deny list" : null
            }({
                r: t,
                options: e,
                url: n
            });
            return pi(i) ? xr(t, e) : Promise.resolve(i)
        })).apply(this, arguments)
    }
    let Lr = null;

    function $r(t, e, n) {
        if (!("performance" in e)) return () => {};
        if (Lr) return lr.warn("Network observer already initialised, doing nothing"), () => {};
        const r = n ? Object.assign({}, Ki, n) : Ki;
        let o = !0,
            a = !1;
        const l = e => {
                if (!o) return;
                const n = [];
                let s = !1;
                e.requests.forEach(t => {
                    const e = "serverTiming" === t.entryType;
                    if (e && s) return;
                    let i;
                    try {
                        i = r.maskRequestFn(t)
                    } catch (t) {
                        return a || (a = !0, lr.warn("Network capture masking callback failed; dropping the record. Further masking failures will not be logged for this observer.")), void(e || (s = !0))
                    }
                    e || (s = !i || (t => !!t && ar.has(t))(i)), i && n.push(i)
                }), n.length > 0 && t(i(i({}, e), {}, {
                    requests: n
                }))
            },
            u = function(t, e, n) {
                try {
                    t({
                        requests: fr(e, n).flatMap(t => Sr(e, {
                            entry: t,
                            method: void 0,
                            status: void 0,
                            networkRequest: {},
                            isInitial: !0
                        })),
                        isInitial: !0
                    })
                } catch (t) {
                    lr.error("Failed to capture initial performance entries for network capture", t)
                }
                const i = e.PerformanceObserver,
                    r = null == i ? void 0 : i.supportedEntryTypes;
                if (!i || !ci(r)) return;
                const s = r.filter(t => n.performanceEntryTypeToObserve.includes(t));
                if (!s.length) return;
                const o = new i(i => {
                    t({
                        requests: i.getEntries().filter(t => ur(t) || cr(t) && n.initiatorTypes.includes(t.initiatorType) && (t => !n.recordBody && !n.recordHeaders || "xmlhttprequest" !== t.initiatorType && "fetch" !== t.initiatorType)(t)).flatMap(t => Sr(e, {
                            entry: t,
                            method: void 0,
                            status: void 0,
                            networkRequest: {}
                        }))
                    })
                });
                return o.observe({
                    entryTypes: s
                }), () => {
                    o.disconnect()
                }
            }(l, e, r),
            c = r.recordHeaders || r.recordBody;
        if (!u && !c) return o = !1, hr;
        let h = () => {},
            d = () => {};
        return c && (h = function(t, e, n) {
            if (!n.initiatorTypes.includes("xmlhttprequest")) return () => {};
            const i = vr("request", n.recordHeaders),
                r = vr("response", n.recordHeaders),
                s = Bi(e.XMLHttpRequest.prototype, "open", s => function(o, a, l = !0, u, c) {
                    const h = this;
                    try {
                        const s = new Request(a),
                            l = {};
                        let u, c;
                        const d = {},
                            f = h.setRequestHeader.bind(h);
                        h.setRequestHeader = (t, e) => (d[t] = e, f(t, e)), i && (l.requestHeaders = d);
                        const v = h.send.bind(h);
                        h.send = t => (gr({
                            type: "request",
                            headers: d,
                            url: a,
                            recordBody: n.recordBody
                        }) && (l.requestBody = wr({
                            body: t,
                            options: n,
                            url: a
                        })), u = e.performance.now(), v(t));
                        const p = () => {
                                h.removeEventListener("readystatechange", m), h.removeEventListener("error", p), h.removeEventListener("abort", p), h.removeEventListener("timeout", p)
                            },
                            m = () => {
                                if (h.readyState !== h.DONE) return;
                                p(), c = e.performance.now();
                                const i = {};
                                h.getAllResponseHeaders().trim().split(/[\r\n]+/).forEach(t => {
                                    const e = t.split(": "),
                                        n = e.shift(),
                                        r = e.join(": ");
                                    n && (i[n] = r)
                                }), r && (l.responseHeaders = i), gr({
                                    type: "response",
                                    headers: i,
                                    url: a,
                                    recordBody: n.recordBody
                                }) && (l.responseBody = wr({
                                    body: h.response,
                                    options: n,
                                    url: a
                                })), yr(e, "xmlhttprequest", s.url, u, c).then(n => {
                                    t({
                                        requests: Sr(e, {
                                            entry: n,
                                            method: o,
                                            status: null == h ? void 0 : h.status,
                                            networkRequest: l,
                                            start: u,
                                            end: c,
                                            url: a.toString(),
                                            initiatorType: "xmlhttprequest"
                                        })
                                    })
                                }).catch(() => {})
                            };
                        h.addEventListener("readystatechange", m), h.addEventListener("error", p), h.addEventListener("abort", p), h.addEventListener("timeout", p)
                    } catch (t) {
                        lr.error("Failed to instrument XHR for network capture", t)
                    }
                    s.call(h, o, a.toString(), l, u, c)
                });
            return () => {
                s()
            }
        }(l, e, r), d = !0 === r.captureFetchSynchronously ? function(t, e, n) {
            if (!n.initiatorTypes.includes("fetch")) return () => {};
            const i = vr("request", n.recordHeaders),
                r = vr("response", n.recordHeaders),
                o = Bi(e, "fetch", o => function(a, l) {
                    let u;
                    try {
                        u = new Request(a, l)
                    } catch (t) {
                        lr.error("Failed to instrument fetch for network capture", t);
                        try {
                            return Promise.resolve(o(a, l))
                        } catch (t) {
                            return new Promise((e, n) => n(t))
                        }
                    }
                    const c = {};
                    let h, d;
                    const f = s(function*() {
                            try {
                                const t = {};
                                u.headers.forEach((e, n) => {
                                    t[n] = e
                                }), i && (c.requestHeaders = t), !Cr(null == l ? void 0 : l.body) && gr({
                                    type: "request",
                                    headers: t,
                                    url: a,
                                    recordBody: n.recordBody
                                }) && (c.requestBody = yield Tr({
                                    r: u,
                                    options: n,
                                    url: a
                                }))
                            } catch (t) {
                                lr.error("Failed to record fetch request for network capture", t)
                            }
                        })(),
                        v = (p = s(function*(t) {
                            try {
                                const e = {};
                                t.headers.forEach((t, n) => {
                                    e[n] = t
                                }), r && (c.responseHeaders = e), gr({
                                    type: "response",
                                    headers: e,
                                    url: a,
                                    recordBody: n.recordBody
                                }) && (c.responseBody = yield Er({
                                    r: t,
                                    options: n,
                                    url: a
                                }))
                            } catch (t) {
                                lr.error("Failed to record fetch response for network capture", t)
                            }
                        }), function(t) {
                            return p.apply(this, arguments)
                        });
                    var p;
                    try {
                        h = e.performance.now()
                    } catch (t) {}
                    let m;
                    try {
                        m = pr(a) ? o(u) : o(a, l)
                    } catch (t) {
                        m = new Promise((e, n) => n(t))
                    }
                    const g = Promise.resolve(m).then(t => {
                        try {
                            d = e.performance.now()
                        } catch (t) {}
                        return {
                            status: "fulfilled",
                            response: t
                        }
                    }, t => ({
                        status: "rejected",
                        error: t
                    }));
                    return s(function*() {
                        let n;
                        try {
                            yield f;
                            const t = yield g;
                            if ("rejected" === t.status) throw t.error;
                            return n = t.response, yield v(n), n
                        } finally {
                            (i = n, yr(e, "fetch", u.url, h, d).then(n => {
                                t({
                                    requests: Sr(e, {
                                        entry: n,
                                        method: u.method,
                                        status: null == i ? void 0 : i.status,
                                        networkRequest: c,
                                        start: h,
                                        end: d,
                                        url: u.url,
                                        initiatorType: "fetch"
                                    })
                                })
                            })).catch(() => {})
                        }
                        var i
                    })()
                });
            return () => {
                o()
            }
        }(l, e, r) : function(t, e, n) {
            if (!n.initiatorTypes.includes("fetch")) return () => {};
            const i = vr("request", n.recordHeaders),
                r = vr("response", n.recordHeaders),
                o = Bi(e, "fetch", o => function() {
                    var a = s(function*(s, a) {
                        let l, u;
                        try {
                            l = new Request(s, a)
                        } catch (t) {
                            return lr.error("Failed to instrument fetch for network capture", t), o(s, a)
                        }
                        const c = {};
                        let h, d;
                        try {
                            try {
                                const t = {};
                                l.headers.forEach((e, n) => {
                                    t[n] = e
                                }), i && (c.requestHeaders = t), !Cr(null == a ? void 0 : a.body) && gr({
                                    type: "request",
                                    headers: t,
                                    url: s,
                                    recordBody: n.recordBody
                                }) && (c.requestBody = yield Tr({
                                    r: l,
                                    options: n,
                                    url: s
                                }))
                            } catch (t) {
                                lr.error("Failed to record fetch request for network capture", t)
                            }
                            h = e.performance.now(), u = pr(s) ? yield o(l): yield o(s, a), d = e.performance.now();
                            try {
                                const t = {};
                                u.headers.forEach((e, n) => {
                                    t[n] = e
                                }), r && (c.responseHeaders = t), gr({
                                    type: "response",
                                    headers: t,
                                    url: s,
                                    recordBody: n.recordBody
                                }) && (c.responseBody = yield Er({
                                    r: u,
                                    options: n,
                                    url: s
                                }))
                            } catch (t) {
                                lr.error("Failed to record fetch response for network capture", t)
                            }
                            return u
                        } finally {
                            yr(e, "fetch", l.url, h, d).then(n => {
                                t({
                                    requests: Sr(e, {
                                        entry: n,
                                        method: l.method,
                                        status: null == u ? void 0 : u.status,
                                        networkRequest: c,
                                        start: h,
                                        end: d,
                                        url: l.url,
                                        initiatorType: "fetch"
                                    })
                                })
                            }).catch(() => {})
                        }
                    });
                    return function(t, e) {
                        return a.apply(this, arguments)
                    }
                }());
            return () => {
                o()
            }
        }(l, e, r)), Lr = () => {
            o = !1, null == u || u(), h(), d(), Lr = null
        }, Lr
    }
    const Dr = "$replay_override_sampling",
        Nr = "$replay_override_linked_flag",
        Pr = "$replay_override_url_trigger",
        jr = "$replay_override_event_trigger",
        Br = "$session_is_sampled",
        zr = "$session_recording_url_trigger_activated_session",
        Wr = "$session_recording_event_trigger_activated_session",
        Ur = "$posthog_sr_group_event_trigger_",
        qr = "$posthog_sr_group_url_trigger_",
        Hr = "$sess_rec_flush_size",
        Gr = "$sdk_debug_replay_event_trigger_status",
        Vr = "$sdk_debug_replay_linked_flag_trigger_status",
        Zr = "$sdk_debug_replay_matched_recording_trigger_groups",
        Jr = "$sdk_debug_replay_pending_trigger_conditions",
        Qr = "$sdk_debug_replay_remote_trigger_matching_config",
        Xr = "$sdk_debug_replay_trigger_groups_count",
        Yr = "$sdk_debug_replay_url_trigger_status",
        Kr = "$sdk_debug_rrweb_attached",
        ts = "$sdk_debug_rrweb_start_attempted",
        es = "$session_recording_start_reason",
        ns = "disabled",
        is = "sampled",
        rs = "active",
        ss = "buffering",
        os = "paused",
        as = "rrweb_error",
        ls = "trigger_activated",
        us = "trigger_pending",
        cs = "trigger_disabled";

    function hs(t, e, n, i, r, s) {
        return 0 === e ? cs : (null == t ? void 0 : t.get_property(n ? i + n : r)) === s ? ls : us
    }

    function ds(t, e, n) {
        return e.some(e => {
            var i;
            return "regex" === e.matching && (null !== (i = null == n ? void 0 : n.get(e.url)) && void 0 !== i ? i : new RegExp(e.url)).test(t)
        })
    }

    function fs(t) {
        return t.includes("trigger_activated") ? ls : t.includes("trigger_pending") ? us : cs
    }

    function vs(t) {
        const e = new Set(t);
        switch (e.delete(cs), e.size) {
            case 0:
                return cs;
            case 1:
                return Array.from(e)[0];
            default:
                return us
        }
    }
    var ps = class {
            constructor(t) {
                this.j = t
            }
            triggerStatus(t) {
                return fs(this.j.map(e => e.triggerStatus(t)))
            }
            triggerStatusNoSideEffects(t) {
                return fs(this.j.map(e => e.triggerStatusNoSideEffects(t)))
            }
            stop() {
                this.j.forEach(t => t.stop())
            }
        },
        ms = class {
            constructor(t) {
                this.j = t
            }
            triggerStatus(t) {
                return vs(this.j.map(e => e.triggerStatus(t)))
            }
            triggerStatusNoSideEffects(t) {
                return vs(this.j.map(e => e.triggerStatusNoSideEffects(t)))
            }
            stop() {
                this.j.forEach(t => t.stop())
            }
        },
        gs = class {
            triggerStatus() {
                return this.triggerStatusNoSideEffects()
            }
            triggerStatusNoSideEffects() {
                return ls
            }
            stop() {}
        };
    const ys = t => "sessionRecording" in t;
    var bs = class {
            constructor(t, e) {
                this._instance = t, this.B = [], this.H = [], this.U = new Map, this.W = new Map, this.G = "", this.urlBlocked = !1, this.V = e
            }
            onConfig(t) {
                var e, n;
                this.B = (ys(t) ? di(t.sessionRecording) ? null === (e = t.sessionRecording) || void 0 === e ? void 0 : e.urlTriggers : [] : null == t ? void 0 : t.urlTriggers) || [], this.H = (ys(t) ? di(t.sessionRecording) ? null === (n = t.sessionRecording) || void 0 === n ? void 0 : n.urlBlocklist : [] : null == t ? void 0 : t.urlBlocklist) || [], this.Z()
            }
            Z() {
                this.U.clear(), this.W.clear();
                for (const t of this.B)
                    if ("regex" === t.matching && !this.U.has(t.url)) try {
                        this.U.set(t.url, new RegExp(t.url))
                    } catch (e) {
                        Ei.error("Invalid URL trigger regex pattern:", t.url, e)
                    }
                for (const t of this.H)
                    if ("regex" === t.matching && !this.W.has(t.url)) try {
                        this.W.set(t.url, new RegExp(t.url))
                    } catch (e) {
                        Ei.error("Invalid URL blocklist regex pattern:", t.url, e)
                    }
            }
            onRemoteConfig(t) {
                this.onConfig(t)
            }
            J(t) {
                return hs(this._instance, this.B.length, this.V, qr, zr, t)
            }
            triggerStatus(t) {
                const e = this.triggerStatusNoSideEffects(t);
                return this._instance.register_for_session({
                    [Yr]: e
                }), e
            }
            triggerStatusNoSideEffects(t) {
                return this.J(t)
            }
            isCurrentUrlBlocked() {
                const t = Wi(this._instance);
                if (!t) return !1;
                try {
                    return ds(t, this.H, this.W)
                } catch (t) {
                    return !0
                }
            }
            checkUrlBlocklist(t, e) {
                const n = Wi(this._instance);
                if (!n) return;
                if (n === this.G) return;
                this.G = n;
                const i = this.urlBlocked,
                    r = ds(n, this.H, this.W);
                i && r || (r && !i ? t() : !r && i && e())
            }
            checkUrlTriggerConditions(t, e, n, i) {
                const r = Wi(this._instance);
                if (!r) return;
                if (r === this.G) return;
                this.G = r;
                const s = this.urlBlocked,
                    o = ds(r, this.H, this.W);
                o && !s ? t() : !o && s && e();
                const a = this.J(i) === ls,
                    l = ds(r, this.B, this.U);
                !a && l && n("url", r)
            }
            stop() {
                this.G = ""
            }
        },
        ws = class {
            constructor(t) {
                this._instance = t, this.linkedFlag = null, this.linkedFlagSeen = !1, this.Y = () => {}
            }
            triggerStatus() {
                const t = this.triggerStatusNoSideEffects();
                return this._instance.register_for_session({
                    [Vr]: t
                }), t
            }
            triggerStatusNoSideEffects() {
                let t = us;
                return mi(this.linkedFlag) && (t = cs), this.linkedFlagSeen && (t = ls), t
            }
            onConfig(t, e) {
                var n;
                if (this.linkedFlag = (ys(t) ? di(t.sessionRecording) ? null === (n = t.sessionRecording) || void 0 === n ? void 0 : n.linkedFlag : null : null == t ? void 0 : t.linkedFlag) || null, !mi(this.linkedFlag) && !this.linkedFlagSeen) {
                    const t = vi(this.linkedFlag) ? this.linkedFlag : this.linkedFlag.flag,
                        n = vi(this.linkedFlag) ? null : this.linkedFlag.variant;
                    this.Y = this._instance.onFeatureFlags((i, r) => {
                        let s = !1;
                        if (di(r) && t in r) {
                            const e = r[t];
                            s = yi(e) ? !0 === e : n ? e === n : !!e
                        }
                        const o = s && !this.linkedFlagSeen;
                        this.linkedFlagSeen = s, o && e(t, n)
                    })
                }
            }
            onRemoteConfig(t, e) {
                this.onConfig(t, e)
            }
            stop() {
                this.Y()
            }
        },
        ks = class {
            constructor(t, e) {
                this._instance = t, this.K = [], this.V = e
            }
            onConfig(t) {
                var e;
                this.K = (ys(t) ? di(t.sessionRecording) ? null === (e = t.sessionRecording) || void 0 === e ? void 0 : e.eventTriggers : [] : null == t ? void 0 : t.eventTriggers) || []
            }
            onRemoteConfig(t) {
                this.onConfig(t)
            }
            X(t) {
                return hs(this._instance, this.K.length, this.V, Ur, Wr, t)
            }
            triggerStatus(t) {
                const e = this.triggerStatusNoSideEffects(t);
                return this._instance.register_for_session({
                    [Gr]: e
                }), e
            }
            triggerStatusNoSideEffects(t) {
                return this.X(t)
            }
            checkEventTriggerConditions(t, e, n) {
                if (0 === this.K.length) return;
                const i = this.X(n) === ls,
                    r = this.K.includes(t);
                !i && r && e("event", t)
            }
            stop() {}
        },
        Ss = class {
            constructor(t, e, n) {
                if (this._instance = t, this.group = e, this.tt = new bs(t, e.id), this.et = new ks(t, e.id), this.nt = new ws(t), e.conditions.events && e.conditions.events.length > 0 || e.conditions.urls && e.conditions.urls.length > 0 || e.conditions.flag) {
                    const t = (e.conditions.events || []).map(t => t.name),
                        i = {
                            urlTriggers: e.conditions.urls || [],
                            eventTriggers: t,
                            linkedFlag: e.conditions.flag || null,
                            urlBlocklist: []
                        };
                    this.tt.onConfig(i), this.et.onConfig(i), this.nt.onConfig(i, n);
                    const r = [this.et, this.tt, this.nt];
                    this.it = "any" === e.conditions.matchType ? new ps(r) : new ms(r)
                } else this.it = new gs
            }
            triggerStatus(t) {
                return this.it.triggerStatus(t)
            }
            triggerStatusNoSideEffects(t) {
                return this.it.triggerStatusNoSideEffects(t)
            }
            getPendingTriggerConditions(t) {
                return "trigger_pending" !== this.triggerStatusNoSideEffects(t) ? [] : [{
                    label: "URL condition not matched",
                    status: this.tt.triggerStatusNoSideEffects(t)
                }, {
                    label: "event condition not matched",
                    status: this.et.triggerStatusNoSideEffects(t)
                }, {
                    label: "linked flag condition not matched",
                    status: this.nt.triggerStatusNoSideEffects()
                }].filter(({
                    status: t
                }) => t === us).map(({
                    label: t
                }) => t)
            }
            checkEventTriggerConditions(t, e, n) {
                this.et.checkEventTriggerConditions(t, e, n)
            }
            checkUrlTriggerConditions(t, e, n, i) {
                this.tt.checkUrlTriggerConditions(t, e, n, i)
            }
            activateTrigger(t, e) {
                var n;
                const i = "url" === t ? qr + this.group.id : Ur + this.group.id;
                null === (n = this._instance.persistence) || void 0 === n || n.register({
                    [i]: e
                })
            }
            stop() {
                this.tt.stop(), this.et.stop(), this.nt.stop()
            }
        };

    function _s(t) {
        if (t.rrwebError) return as;
        if (!t.receivedFlags) return ss;
        if (!t.isRecordingEnabled) return ns;
        if (t.urlTriggerMatching.urlBlocked) return os;
        const e = !0 === t.isSampled,
            n = new ps([t.eventTriggerMatching, t.urlTriggerMatching, t.linkedFlagMatching]).triggerStatus(t.sessionId);
        return e ? is : "trigger_activated" === n ? rs : "trigger_pending" === n ? ss : !1 === t.isSampled ? ns : rs
    }

    function Cs(t) {
        if (t.rrwebError) return as;
        if (!t.receivedFlags) return ss;
        if (!t.isRecordingEnabled) return ns;
        if (t.urlTriggerMatching.urlBlocked) return os;
        const e = new ms([t.eventTriggerMatching, t.urlTriggerMatching, t.linkedFlagMatching]).triggerStatus(t.sessionId),
            n = e !== cs,
            i = yi(t.isSampled);
        return n && "trigger_pending" === e ? ss : n && "trigger_disabled" === e || i && !t.isSampled ? ns : !0 === t.isSampled ? is : rs
    }

    function Is() {
        const t = [];
        return function(e, n) {
            if (di(n) || ci(n)) {
                for (; t.length > 0 && t[t.length - 1] !== this;) t.pop();
                return t.includes(n) ? "[Circular]" : (t.push(n), n)
            }
            return n
        }
    }

    function Ms(t) {
        try {
            const e = JSON.stringify(t, Is());
            return e ? new Blob([e]).size : 0
        } catch (t) {
            return -1
        }
    }

    function Rs(t) {
        if (pi(t)) return 4;
        if (fi(t)) return 0;
        switch (typeof t) {
            case "string":
                return t.length + 2;
            case "number":
                return String(t).length;
            case "boolean":
                return t ? 4 : 5;
            case "object":
                {
                    if (ci(t)) {
                        let e = 2;
                        for (let n = 0; t.length > n; n++) {
                            n > 0 && (e += 1);
                            const i = t[n];
                            e += fi(i) || pi(i) ? 4 : Rs(i)
                        }
                        return e
                    }
                    const e = t;
                    let n = 2,
                        i = !0;
                    for (const t in e) {
                        if (!{}.hasOwnProperty.call(e, t)) continue;
                        const r = e[t];
                        fi(r) || (i || (n += 1), i = !1, n += t.length + 3 + Rs(r))
                    }
                    return n
                }
            default:
                return 0
        }
    }

    function As(t, e = 6606028.8) {
        if (t.size >= e && t.data.length > 1) {
            const e = Math.floor(t.data.length / 2),
                n = t.sizes.slice(0, e),
                i = t.sizes.slice(e);
            return [As({
                size: n.reduce((t, e) => t + e, 0),
                data: t.data.slice(0, e),
                sizes: n,
                sessionId: t.sessionId,
                windowId: t.windowId
            }), As({
                size: i.reduce((t, e) => t + e, 0),
                data: t.data.slice(e),
                sizes: i,
                sessionId: t.sessionId,
                windowId: t.windowId
            })].flatMap(t => t)
        }
        return [t]
    }
    var xs = Uint8Array,
        Ts = Uint16Array,
        Os = Uint32Array,
        Es = new xs([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        Fs = new xs([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        Ls = new xs([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        $s = function(t, e) {
            for (var n = new Ts(31), i = 0; 31 > i; ++i) n[i] = e += 1 << t[i - 1];
            var r = new Os(n[30]);
            for (i = 1; 30 > i; ++i)
                for (var s = n[i]; n[i + 1] > s; ++s) r[s] = s - n[i] << 5 | i;
            return [n, r]
        },
        Ds = $s(Es, 2),
        Ns = Ds[1];
    Ds[0][28] = 258, Ns[258] = 28;
    for (var Ps = $s(Fs, 0)[1], js = new Ts(32768), Bs = 0; 32768 > Bs; ++Bs) {
        var zs = (43690 & Bs) >>> 1 | (21845 & Bs) << 1;
        js[Bs] = ((65280 & (zs = (61680 & (zs = (52428 & zs) >>> 2 | (13107 & zs) << 2)) >>> 4 | (3855 & zs) << 4)) >>> 8 | (255 & zs) << 8) >>> 1
    }
    var Ws = function(t, e, n) {
            for (var i = t.length, r = 0, s = new Ts(e); i > r; ++r) ++s[t[r] - 1];
            var o, a = new Ts(e);
            for (r = 0; e > r; ++r) a[r] = a[r - 1] + s[r - 1] << 1;
            if (n) {
                o = new Ts(1 << e);
                var l = 15 - e;
                for (r = 0; i > r; ++r)
                    if (t[r])
                        for (var u = r << 4 | t[r], c = e - t[r], h = a[t[r] - 1]++ << c, d = h | (1 << c) - 1; d >= h; ++h) o[js[h] >>> l] = u
            } else
                for (o = new Ts(i), r = 0; i > r; ++r) o[r] = js[a[t[r] - 1]++] >>> 15 - t[r];
            return o
        },
        Us = new xs(288);
    for (Bs = 0; 144 > Bs; ++Bs) Us[Bs] = 8;
    for (Bs = 144; 256 > Bs; ++Bs) Us[Bs] = 9;
    for (Bs = 256; 280 > Bs; ++Bs) Us[Bs] = 7;
    for (Bs = 280; 288 > Bs; ++Bs) Us[Bs] = 8;
    var qs = new xs(32);
    for (Bs = 0; 32 > Bs; ++Bs) qs[Bs] = 5;
    var Hs = Ws(Us, 9, 0),
        Gs = Ws(qs, 5, 0),
        Vs = function(t) {
            return (t / 8 | 0) + (7 & t && 1)
        },
        Zs = function(t, e, n) {
            (null == e || 0 > e) && (e = 0), (null == n || n > t.length) && (n = t.length);
            var i = new(t instanceof Ts ? Ts : t instanceof Os ? Os : xs)(n - e);
            return i.set(t.subarray(e, n)), i
        },
        Js = function(t, e, n) {
            var i = e / 8 | 0;
            t[i] |= n <<= 7 & e, t[i + 1] |= n >>> 8
        },
        Qs = function(t, e, n) {
            var i = e / 8 | 0;
            t[i] |= n <<= 7 & e, t[i + 1] |= n >>> 8, t[i + 2] |= n >>> 16
        },
        Xs = function(t, e) {
            for (var n = [], i = 0; t.length > i; ++i) t[i] && n.push({
                s: i,
                f: t[i]
            });
            var r = n.length,
                s = n.slice();
            if (!r) return [new xs(0), 0];
            if (1 == r) {
                var o = new xs(n[0].s + 1);
                return o[n[0].s] = 1, [o, 1]
            }
            n.sort(function(t, e) {
                return t.f - e.f
            }), n.push({
                s: -1,
                f: 25001
            });
            var a = n[0],
                l = n[1],
                u = 0,
                c = 1,
                h = 2;
            for (n[0] = {
                    s: -1,
                    f: a.f + l.f,
                    l: a,
                    r: l
                }; c != r - 1;) a = n[n[h].f > n[u].f ? u++ : h++], l = n[u != c && n[h].f > n[u].f ? u++ : h++], n[c++] = {
                s: -1,
                f: a.f + l.f,
                l: a,
                r: l
            };
            var d = s[0].s;
            for (i = 1; r > i; ++i) s[i].s > d && (d = s[i].s);
            var f = new Ts(d + 1),
                v = Ys(n[c - 1], f, 0);
            if (v > e) {
                i = 0;
                var p = 0,
                    m = v - e,
                    g = 1 << m;
                for (s.sort(function(t, e) {
                        return f[e.s] - f[t.s] || t.f - e.f
                    }); r > i; ++i) {
                    var y = s[i].s;
                    if (e >= f[y]) break;
                    p += g - (1 << v - f[y]), f[y] = e
                }
                for (p >>>= m; p > 0;) {
                    var b = s[i].s;
                    e > f[b] ? p -= 1 << e - f[b]++ - 1 : ++i
                }
                for (; i >= 0 && p; --i) {
                    var w = s[i].s;
                    f[w] == e && (--f[w], ++p)
                }
                v = e
            }
            return [new xs(f), v]
        },
        Ys = function(t, e, n) {
            return -1 == t.s ? Math.max(Ys(t.l, e, n + 1), Ys(t.r, e, n + 1)) : e[t.s] = n
        },
        Ks = function(t) {
            for (var e = t.length; e && !t[--e];);
            for (var n = new Ts(++e), i = 0, r = t[0], s = 1, o = function(t) {
                    n[i++] = t
                }, a = 1; e >= a; ++a)
                if (t[a] == r && a != e) ++s;
                else {
                    if (!r && s > 2) {
                        for (; s > 138; s -= 138) o(32754);
                        s > 2 && (o(s > 10 ? s - 11 << 5 | 28690 : s - 3 << 5 | 12305), s = 0)
                    } else if (s > 3) {
                        for (o(r), --s; s > 6; s -= 6) o(8304);
                        s > 2 && (o(s - 3 << 5 | 8208), s = 0)
                    }
                    for (; s--;) o(r);
                    s = 1, r = t[a]
                }
            return [n.subarray(0, i), e]
        },
        to = function(t, e) {
            for (var n = 0, i = 0; e.length > i; ++i) n += t[i] * e[i];
            return n
        },
        eo = function(t, e, n) {
            var i = n.length,
                r = Vs(e + 2);
            t[r] = 255 & i, t[r + 1] = i >>> 8, t[r + 2] = 255 ^ t[r], t[r + 3] = 255 ^ t[r + 1];
            for (var s = 0; i > s; ++s) t[r + s + 4] = n[s];
            return 8 * (r + 4 + i)
        },
        no = function(t, e, n, i, r, s, o, a, l, u, c) {
            Js(e, c++, n), ++r[256];
            for (var h = Xs(r, 15), d = h[0], f = h[1], v = Xs(s, 15), p = v[0], m = v[1], g = Ks(d), y = g[0], b = g[1], w = Ks(p), k = w[0], S = w[1], _ = new Ts(19), C = 0; y.length > C; ++C) _[31 & y[C]]++;
            for (C = 0; k.length > C; ++C) _[31 & k[C]]++;
            for (var I = Xs(_, 7), M = I[0], R = I[1], A = 19; A > 4 && !M[Ls[A - 1]]; --A);
            var x, T, O, E, F = u + 5 << 3,
                L = to(r, Us) + to(s, qs) + o,
                D = to(r, d) + to(s, p) + o + 14 + 3 * A + to(_, M) + (2 * _[16] + 3 * _[17] + 7 * _[18]);
            if (L >= F && D >= F) return eo(e, c, t.subarray(l, l + u));
            if (Js(e, c, 1 + (L > D)), c += 2, L > D) {
                x = Ws(d, f, 0), T = d, O = Ws(p, m, 0), E = p;
                var N = Ws(M, R, 0);
                for (Js(e, c, b - 257), Js(e, c + 5, S - 1), Js(e, c + 10, A - 4), c += 14, C = 0; A > C; ++C) Js(e, c + 3 * C, M[Ls[C]]);
                c += 3 * A;
                for (var P = [y, k], j = 0; 2 > j; ++j) {
                    var B = P[j];
                    for (C = 0; B.length > C; ++C) Js(e, c, N[z = 31 & B[C]]), c += M[z], z > 15 && (Js(e, c, B[C] >>> 5 & 127), c += B[C] >>> 12)
                }
            } else x = Hs, T = Us, O = Gs, E = qs;
            for (C = 0; a > C; ++C)
                if (i[C] > 255) {
                    var z;
                    Qs(e, c, x[257 + (z = i[C] >>> 18 & 31)]), c += T[z + 257], z > 7 && (Js(e, c, i[C] >>> 23 & 31), c += Es[z]);
                    var W = 31 & i[C];
                    Qs(e, c, O[W]), c += E[W], W > 3 && (Qs(e, c, i[C] >>> 5 & 8191), c += Fs[W])
                } else Qs(e, c, x[i[C]]), c += T[i[C]];
            return Qs(e, c, x[256]), c + T[256]
        },
        io = new Os([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        ro = new xs(0),
        so = function() {
            for (var t = new Os(256), e = 0; 256 > e; ++e) {
                for (var n = e, i = 9; --i;) n = (1 & n && 3988292384) ^ n >>> 1;
                t[e] = n
            }
            return t
        }(),
        oo = function(t, e, n) {
            for (; n; ++e) t[e] = n, n >>>= 8
        };

    function ao(t, e) {
        void 0 === e && (e = {});
        var n = function() {
                var t = 4294967295;
                return {
                    p(e) {
                        for (var n = t, i = 0; e.length > i; ++i) n = so[255 & n ^ e[i]] ^ n >>> 8;
                        t = n
                    },
                    d() {
                        return 4294967295 ^ t
                    }
                }
            }(),
            i = t.length;
        n.p(t);
        var r, s, o, a, l, u, c = (a = 10 + ((r = e).filename && r.filename.length + 1 || 0), l = 8, function(t, e, n, i, r, s) {
                var o = t.length,
                    a = new xs(i + o + 5 * (1 + Math.floor(o / 7e3)) + r),
                    l = a.subarray(i, a.length - r),
                    u = 0;
                if (!e || 8 > o)
                    for (var c = 0; o >= c; c += 65535) {
                        var h = c + 65535;
                        o > h ? u = eo(l, u, t.subarray(c, h)) : (l[c] = s, u = eo(l, u, t.subarray(c, o)))
                    } else {
                        for (var d = io[e - 1], f = d >>> 13, v = 8191 & d, p = (1 << n) - 1, m = new Ts(32768), g = new Ts(p + 1), y = Math.ceil(n / 3), b = 2 * y, w = function(e) {
                                return (t[e] ^ t[e + 1] << y ^ t[e + 2] << b) & p
                            }, k = new Os(25e3), S = new Ts(288), _ = new Ts(32), C = 0, I = 0, M = (c = 0, 0), R = 0, A = 0; o > c; ++c) {
                            var x = w(c),
                                T = 32767 & c,
                                O = g[x];
                            if (m[T] = O, g[x] = T, c >= R) {
                                var E = o - c;
                                if ((C > 7e3 || M > 24576) && E > 423) {
                                    u = no(t, l, 0, k, S, _, I, M, A, c - A, u), M = C = I = 0, A = c;
                                    for (var F = 0; 286 > F; ++F) S[F] = 0;
                                    for (F = 0; 30 > F; ++F) _[F] = 0
                                }
                                var L = 2,
                                    D = 0,
                                    N = v,
                                    P = T - O & 32767;
                                if (E > 2 && x == w(c - P))
                                    for (var j = Math.min(f, E) - 1, B = Math.min(32767, c), z = Math.min(258, E); B >= P && --N && T != O;) {
                                        if (t[c + L] == t[c + L - P]) {
                                            for (var W = 0; z > W && t[c + W] == t[c + W - P]; ++W);
                                            if (W > L) {
                                                if (L = W, D = P, W > j) break;
                                                var U = Math.min(P, W - 2),
                                                    q = 0;
                                                for (F = 0; U > F; ++F) {
                                                    var H = c - P + F + 32768 & 32767,
                                                        G = H - m[H] + 32768 & 32767;
                                                    G > q && (q = G, O = H)
                                                }
                                            }
                                        }
                                        P += (T = O) - (O = m[T]) + 32768 & 32767
                                    }
                                if (D) {
                                    k[M++] = 268435456 | Ns[L] << 18 | Ps[D];
                                    var V = 31 & Ns[L],
                                        Z = 31 & Ps[D];
                                    I += Es[V] + Fs[Z], ++S[257 + V], ++_[Z], R = c + L, ++C
                                } else k[M++] = t[c], ++S[t[c]]
                            }
                        }
                        u = no(t, l, s, k, S, _, I, M, A, c - A, u), s || (u = eo(l, u, ro))
                    }
                return Zs(a, 0, i + Vs(u) + r)
            }(s = t, null == (o = e).level ? 6 : o.level, null == o.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(s.length)))) : 12 + o.mem, a, l, !u)),
            h = c.length;
        return function(t, e) {
            var n = e.filename;
            if (t[0] = 31, t[1] = 139, t[2] = 8, t[8] = 2 > e.level ? 4 : 9 == e.level ? 2 : 0, t[9] = 3, 0 != e.mtime && oo(t, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)), n) {
                t[3] = 8;
                for (var i = 0; n.length >= i; ++i) t[i + 10] = n.charCodeAt(i)
            }
        }(c, e), oo(c, h - 8, n.d()), oo(c, h - 4, i), c
    }

    function lo(t, e) {
        var n = "";
        if (!e && "undefined" != typeof TextDecoder) return (new TextDecoder).decode(t);
        for (var i = 0; t.length > i;) {
            var r = t[i++];
            128 > r || e ? n += String.fromCharCode(r) : 224 > r ? n += String.fromCharCode((31 & r) << 6 | 63 & t[i++]) : 240 > r ? n += String.fromCharCode((15 & r) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) : (r = ((15 & r) << 18 | (63 & t[i++]) << 12 | (63 & t[i++]) << 6 | 63 & t[i++]) - 65536, n += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r))
        }
        return n
    }
    var uo = class {
        constructor(t, e = {}) {
            var n, i, r, s;
            this._rrweb = t, this.rt = e, this.ot = {}, this.st = Date.now(), this.ut = -1 / 0, this.ct = () => {
                const t = Date.now(),
                    e = t - this.st;
                e > 0 ? (this.dt = Math.min(this.ht, this.dt + e / 1e3 * this.ft), this.st = t) : this.st = t
            }, this.vt = t => {
                if (!this.ot[t]) {
                    var e, n;
                    this.ot[t] = !0;
                    const i = this.yt(t);
                    null === (e = (n = this.rt).onBlockedNode) || void 0 === e || e.call(n, t, i)
                }
            }, this.bt = t => {
                const e = this.yt(t);
                if ("svg" !== (null == e ? void 0 : e.nodeName) && e instanceof Element) {
                    const t = e.closest("svg");
                    if (t) return [this._rrweb.mirror.getId(t), t]
                }
                return [t, e]
            }, this.yt = t => this._rrweb.mirror.getNode(t), this.wt = t => {
                var e, n, i, r, s, o, a, l;
                return (null !== (e = null === (n = t.removes) || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0) + (null !== (i = null === (r = t.attributes) || void 0 === r ? void 0 : r.length) && void 0 !== i ? i : 0) + (null !== (s = null === (o = t.texts) || void 0 === o ? void 0 : o.length) && void 0 !== s ? s : 0) + (null !== (a = null === (l = t.adds) || void 0 === l ? void 0 : l.length) && void 0 !== a ? a : 0)
            }, this.throttleMutations = t => {
                if (3 !== t.type || 0 !== t.data.source) return t;
                const e = t.data,
                    n = this.wt(e);
                if (e.attributes) {
                    const t = e.attributes.length;
                    e.attributes = e.attributes.filter(t => {
                        const [e] = this.bt(t.id);
                        return !this.kt.consumeRateLimit(e) && t
                    });
                    const n = t - e.attributes.length;
                    var i, r;
                    n > 0 && (null === (i = (r = this.rt).onDroppedAttributeMutations) || void 0 === i || i.call(r, n))
                }
                const s = this.wt(e);
                if (0 === s && n !== s) return;
                if (this.St) return t;
                this.ct();
                const o = Rs(t);
                var a, l;
                return o > this.dt ? (null === (a = (l = this.rt).onDroppedOversizedMutation) || void 0 === a || a.call(l, o), void this._t()) : (this.dt -= o, t)
            }, this._t = () => {
                if (this.xt) return;
                const t = Math.max(0, this.Ct - (Date.now() - this.ut));
                this.xt = setTimeout(() => {
                    var t, e;
                    this.xt = void 0, this.ut = Date.now(), null === (t = (e = this.rt).requestFullSnapshot) || void 0 === t || t.call(e)
                }, t)
            }, this.kt = new ki({
                bucketSize: null !== (n = this.rt.bucketSize) && void 0 !== n ? n : 100,
                refillRate: null !== (i = this.rt.refillRate) && void 0 !== i ? i : 10,
                refillInterval: 1e3,
                I: this.vt,
                A: Ei
            }), this.ht = null !== (r = this.rt.bytesBucketSize) && void 0 !== r ? r : 0, this.ft = null !== (s = this.rt.bytesRefillRate) && void 0 !== s ? s : 25600, this.St = !Number.isFinite(this.ht) || 0 >= this.ht, this.dt = this.ht;
            const o = this.rt.resyncIntervalMs;
            this.Ct = gi(o) && Number.isFinite(o) && o > 0 ? o : 3e5
        }
        reset() {
            this.ot = {}, this.xt && (clearTimeout(this.xt), this.xt = void 0), this.ut = Date.now()
        }
        stop() {
            this.kt.stop(), this.reset(), this.dt = this.ht, this.st = Date.now(), this.ut = -1 / 0
        }
    };
    let co = null;
    const ho = {
        Ot() {
            if (!pi(co)) return co;
            if (co = !0, fi(ei)) co = !1;
            else try {
                const t = "__support__";
                ho.$t(t, "xyz"), '"xyz"' !== ho.Lt(t) && (co = !1), ho.Dt(t)
            } catch (t) {
                co = !1
            }
            return co
        },
        Pt(t) {
            Ei.error("sessionStorage error: ", t)
        },
        Lt(t) {
            try {
                return null == ei ? void 0 : ei.sessionStorage.getItem(t)
            } catch (t) {
                ho.Pt(t)
            }
            return null
        },
        Ft(t) {
            try {
                return JSON.parse(ho.Lt(t)) || null
            } catch (t) {}
            return null
        },
        $t(t, e) {
            try {
                return null == ei || ei.sessionStorage.setItem(t, JSON.stringify(e)), !0
            } catch (t) {
                ho.Pt(t)
            }
            return !1
        },
        Dt(t) {
            try {
                null == ei || ei.sessionStorage.removeItem(t)
            } catch (t) {
                ho.Pt(t)
            }
        }
    };
    Ti.DEBUG = !1, Ti.LIB_VERSION = "1.444.4", Ti.LIB_NAME = "web";
    var fo = Ti,
        vo = class {
            constructor(t) {
                if (!t.persistence) throw new Error("it is not valid to not have persistence and be this far into setting up the application");
                this.Nt = t.get_property.bind(t), this.qt = t.persistence.set_property.bind(t.persistence)
            }
            trackSize(t, e) {
                this.qt(Hr, {
                    sessionId: t,
                    size: this.currentTrackedSize(t) + e
                })
            }
            currentTrackedSize(t) {
                const e = this.Nt(Hr);
                return di(n = e) && vi(n.sessionId) && gi(n.size) && e.sessionId === t ? e.size : 0;
                var n
            }
        };

    function po(t, e) {
        return function(t) {
            let e = 0;
            for (let n = 0; t.length > n; n++) e = (e << 5) - e + t.charCodeAt(n), e |= 0;
            return Math.abs(e)
        }(t) % 100 < wi(100 * e, 0, 100, Ei)
    }
    const mo = (t, e) => {
            if (!(t => {
                    try {
                        new RegExp(t)
                    } catch (t) {
                        return !1
                    }
                    return !0
                })(e)) return !1;
            try {
                return new RegExp(e).test(t)
            } catch (t) {
                return !1
            }
        },
        go = t => t.toLowerCase(),
        yo = {
            exact: (t, e) => e.some(e => t.some(t => e === t)),
            is_not: (t, e) => e.every(e => t.every(t => e !== t)),
            regex: (t, e) => e.some(e => t.some(t => mo(e, t))),
            not_regex: (t, e) => e.every(e => t.every(t => !mo(e, t))),
            icontains: (t, e) => e.map(go).some(e => t.map(go).some(t => e.includes(t))),
            not_icontains: (t, e) => e.map(go).every(e => t.map(go).every(t => !e.includes(t))),
            gt: (t, e) => e.some(e => {
                const n = parseFloat(e);
                return !isNaN(n) && t.some(t => n > parseFloat(t))
            }),
            lt: (t, e) => e.some(e => {
                const n = parseFloat(e);
                return !isNaN(n) && t.some(t => n < parseFloat(t))
            })
        },
        bo = new Set(["is_not", "not_icontains", "not_regex"]);

    function wo(t, e, n) {
        return !t || 0 === t.length || t.every(t => {
            const i = "person" === t.type ? n : e,
                r = null == i ? void 0 : i[t.key],
                s = t.operator || "exact";
            if (fi(r) || pi(r)) return bo.has(s);
            const o = yo[s];
            return !!o && !fi(t.value) && !pi(t.value) && o(ci(t.value) ? t.value.map(String) : [String(t.value)], ci(r) ? r.map(String) : [String(r)])
        })
    }
    const ko = Fi("[SessionRecording]");

    function So(t, e) {
        return e ? t : "!" + t
    }

    function _o(t, e) {
        return t === e || t !== "!" + e && null
    }
    var Co = class {
            constructor(t, e, n, i, r, s, o) {
                this._instance = t, this.tt = e, this.et = n, this.nt = i, this.jt = r, this.Bt = s, this.zt = o, this.Ht = null, this.Ut = Cs
            }
            onRemoteConfig(t) {
                this.Ht = gi(t.sampleRate) ? t.sampleRate : null, "any" === t.triggerMatchType ? (this.Wt = new ps([this.et, this.tt]), this.Ut = _s) : (this.Wt = new ms([this.et, this.tt]), this.Ut = Cs), this._instance.register_for_session({
                    [Qr]: t.triggerMatchType
                }), this.tt.onConfig(t), this.et.onConfig(t), this.nt.onConfig(t, (t, e) => {
                    this.jt("linked_flag_matched", {
                        flag: t,
                        variant: e
                    }), this.zt()
                })
            }
            getStatus(t) {
                return this.Ut({
                    receivedFlags: !0,
                    isRecordingEnabled: !0,
                    isSampled: t.isSampled,
                    rrwebError: t.rrwebError,
                    urlTriggerMatching: t.urlTriggerMatching,
                    eventTriggerMatching: t.eventTriggerMatching,
                    linkedFlagMatching: t.linkedFlagMatching,
                    sessionId: t.sessionId
                })
            }
            getMinimumDuration(t) {
                const e = this._instance.get_property("$session_recording_remote_config"),
                    n = null == e ? void 0 : e.minimumDurationMilliseconds;
                return gi(n) ? n : null
            }
            checkUrlTriggers(t, e, n, i) {
                this.tt.checkUrlTriggerConditions(e, n, i, t)
            }
            setupEventTriggerListeners(t, e, n) {
                if (0 !== this.et.K.length && mi(this.Gt)) return this.Gt = t(t => {
                    try {
                        this.et.checkEventTriggerConditions(t.event, n, e)
                    } catch (t) {
                        ko.error("Could not activate event trigger", t)
                    }
                }), this.Gt
            }
            makeSamplingDecisions(t) {
                var e;
                const n = this.Ht;
                var i, r;
                if (!gi(n)) return null === (i = this._instance.persistence) || void 0 === i || i.unregister("$session_is_sampled"), void(null === (r = this._instance.persistence) || void 0 === r || r.unregister("$replay_sample_rate"));
                const s = this._instance.get_property(Br),
                    o = this._instance.get_property("$replay_sample_rate"),
                    a = _o(s, t),
                    l = gi(o) && o !== n,
                    u = fi(o) && s === t,
                    c = l || u || !yi(a),
                    h = c ? po(t, n) : a;
                c && (h ? this.jt("sampled") : ko.warn(`Sample rate (${n}) has determined that this sessionId (${t}) will not be sent to the server.`)), null === (e = this._instance.persistence) || void 0 === e || e.register({
                    $session_is_sampled: So(t, h),
                    $replay_sample_rate: pi(o) && s === t ? null : n
                })
            }
            ensureSamplingDecision(t) {
                if (!gi(this.Ht)) return;
                const e = this._instance.get_property(Br);
                yi(_o(e, t)) || this.makeSamplingDecisions(t)
            }
            onFlushComplete() {}
            clearConditionalRecordingPersistence() {
                var t, e, n, i, r;
                null === (t = this._instance.persistence) || void 0 === t || t.unregister("$session_recording_event_trigger_activated_session"), null === (e = this._instance.persistence) || void 0 === e || e.unregister("$session_recording_url_trigger_activated_session"), null === (n = this._instance.persistence) || void 0 === n || n.unregister("$session_is_sampled"), null === (i = this._instance.persistence) || void 0 === i || i.unregister("$replay_sample_rate"), null === (r = this._instance.persistence) || void 0 === r || r.unregister("$session_past_minimum_duration")
            }
            updateActiveTriggers(t) {}
            hasPendingTriggers(t) {
                var e;
                return (null === (e = this.Wt) || void 0 === e ? void 0 : e.triggerStatus(t)) === us
            }
            getPendingTriggerConditions(t) {
                return [{
                    label: "URL condition not matched",
                    status: this.tt.triggerStatusNoSideEffects(t)
                }, {
                    label: "event condition not matched",
                    status: this.et.triggerStatusNoSideEffects(t)
                }, {
                    label: "linked flag condition not matched",
                    status: this.nt.triggerStatusNoSideEffects()
                }].filter(({
                    status: t
                }) => t === us).map(({
                    label: t
                }) => t)
            }
            stop() {
                var t;
                null === (t = this.Gt) || void 0 === t || t.call(this), this.Gt = void 0, this.et.stop(), this.tt.stop(), this.nt.stop()
            }
        },
        Io = class {
            constructor(t, e, n, i, r) {
                this._instance = t, this.tt = e, this.jt = n, this.Vt = i, this.zt = r, this.Qt = [], this.Zt = new Map, this.Jt = !1
            }
            onRemoteConfig(t) {
                t.triggerGroups && 0 !== t.triggerGroups.length ? (this.Yt(t.triggerGroups), this._instance.register_for_session({
                    [Qr]: "v2_trigger_groups",
                    [Xr]: t.triggerGroups.length
                }), this.tt.onConfig(t)) : ko.warn("[V2Strategy] No trigger groups configured")
            }
            getStatus(t) {
                return function(t) {
                    if (t.rrwebError) return as;
                    if (!t.receivedFlags) return ss;
                    if (!t.isRecordingEnabled) return ns;
                    if (t.urlTriggerMatching.urlBlocked) return os;
                    const e = t.triggerGroupMatchers,
                        n = t.triggerGroupSamplingResults;
                    if (0 === e.length) return ns;
                    let i = !1,
                        r = !1;
                    for (const s of e) {
                        const e = s.triggerStatus(t.sessionId);
                        if ("trigger_activated" === e) {
                            const t = s.group.id,
                                e = n.get(t);
                            fi(e) ? Ei.warn("[V2 Triggers] Group activated but no sampling decision found", {
                                groupId: t
                            }) : !0 === e && (r = !0)
                        } else "trigger_pending" === e && (i = !0)
                    }
                    return r ? is : i ? ss : ns
                }({
                    receivedFlags: !0,
                    isRecordingEnabled: !0,
                    isSampled: t.isSampled,
                    rrwebError: t.rrwebError,
                    urlTriggerMatching: t.urlTriggerMatching,
                    eventTriggerMatching: t.eventTriggerMatching,
                    linkedFlagMatching: t.linkedFlagMatching,
                    sessionId: t.sessionId,
                    triggerGroupMatchers: this.Qt,
                    triggerGroupSamplingResults: this.Zt,
                    minimumDuration: this.getMinimumDuration(t.sessionId)
                })
            }
            getMinimumDuration(t) {
                let e = null;
                for (const n of this.Qt)
                    if ("trigger_activated" === n.triggerStatus(t)) {
                        const t = n.group.minDurationMs;
                        gi(t) && (pi(e) || e > t) && (e = t)
                    }
                return e
            }
            checkUrlTriggers(t, e, n, i) {
                this.tt.checkUrlBlocklist(e, n);
                for (const i of this.Qt) i.checkUrlTriggerConditions(e, n, e => {
                    this.Kt(i, void 0) && (i.activateTrigger(e, t), this.updateActiveTriggers(t), this.zt(e))
                }, t)
            }
            setupEventTriggerListeners(t, e, n) {
                return this.Gt = t(t => {
                    var n;
                    if (this.Jt) return ko.info("[SessionRecorder] Stopping trigger checks - initial buffer flushed"), null === (n = this.Gt) || void 0 === n || n.call(this), void(this.Gt = void 0);
                    try {
                        for (const n of this.Qt) n.checkEventTriggerConditions(t.event, i => {
                            if (!this.Kt(n, t.properties)) return;
                            const r = (n.group.conditions.events || []).filter(e => e.name === t.event),
                                s = this._instance.get_property(Ui);
                            r.some(e => !e.properties || 0 === e.properties.length || wo(e.properties, t.properties, s)) && (n.activateTrigger(i, e), this.updateActiveTriggers(e), this.zt(i))
                        }, e)
                    } catch (t) {
                        ko.error("Could not activate event trigger for trigger groups", t)
                    }
                }), this.Gt
            }
            makeSamplingDecisions(t) {
                for (const n of this.Qt) {
                    var e;
                    const i = n.group,
                        r = i.id,
                        s = i.sampleRate,
                        o = "$posthog_sr_group_sampling_" + r,
                        a = this._instance.get_property(o);
                    let l = null,
                        u = !1,
                        c = !1,
                        h = !1;
                    if (di(a)) {
                        const e = a.sessionId,
                            n = a.sampleRate,
                            i = a.sampled;
                        u = "string" == typeof e && e !== t, c = gi(n) && n !== s, l = e === t && gi(n) && n === s && yi(i) ? i : null
                    } else l = a === t || null, u = "string" == typeof a && a !== t, h = a === t;
                    const d = u || c || h || !yi(l),
                        f = d ? po(t + r, s) : l;
                    d && this.Vt("triggerGroupSamplingDecisionMade", {
                        group_id: r,
                        group_name: i.name,
                        sampleRate: s,
                        isSampled: f
                    }), this.Zt.set(r, f), null === (e = this._instance.persistence) || void 0 === e || e.register({
                        [o]: {
                            sessionId: t,
                            sampleRate: s,
                            sampled: f
                        }
                    })
                }
                this.updateActiveTriggers(t)
            }
            ensureSamplingDecision(t) {}
            onFlushComplete() {
                this.Jt = !0
            }
            clearConditionalRecordingPersistence() {
                var t, e, n;
                null === (t = this._instance.persistence) || void 0 === t || t.unregister("$session_is_sampled"), null === (e = this._instance.persistence) || void 0 === e || e.unregister("$replay_sample_rate"), null === (n = this._instance.persistence) || void 0 === n || n.unregister("$session_past_minimum_duration");
                for (const t of this.Qt) {
                    var i, r, s;
                    const e = t.group.id;
                    null === (i = this._instance.persistence) || void 0 === i || i.unregister("$posthog_sr_group_event_trigger_" + e), null === (r = this._instance.persistence) || void 0 === r || r.unregister("$posthog_sr_group_url_trigger_" + e), null === (s = this._instance.persistence) || void 0 === s || s.unregister("$posthog_sr_group_sampling_" + e)
                }
            }
            updateActiveTriggers(t) {
                const e = [];
                for (const n of this.Qt) {
                    const i = n.group,
                        r = i.id,
                        s = "trigger_activated" === n.triggerStatus(t),
                        o = !0 === this.Zt.get(r);
                    s && e.push({
                        id: r,
                        name: i.name,
                        matched: !0,
                        sampled: o
                    })
                }
                this._instance.register_for_session({
                    [Zr]: e
                })
            }
            hasPendingTriggers(t) {
                for (const e of this.Qt)
                    if ("trigger_pending" === e.triggerStatus(t)) return !0;
                return !1
            }
            getPendingTriggerConditions(t) {
                return this.Qt.flatMap(e => "trigger_pending" !== e.triggerStatusNoSideEffects(t) ? [] : e.getPendingTriggerConditions(t).map(t => `trigger group "${e.group.name}": ${t}`))
            }
            stop() {
                var t;
                null === (t = this.Gt) || void 0 === t || t.call(this), this.Gt = void 0, this.Qt.forEach(t => t.stop()), this.Qt = [], this.Zt.clear(), this.tt.stop()
            }
            Kt(t, e) {
                const n = t.group.conditions.properties;
                return !n || 0 === n.length || wo(n, e, this._instance.get_property(Ui))
            }
            Yt(t) {
                this.Qt.forEach(t => t.stop()), this.Qt = [], this.Zt.clear();
                for (const e of t) {
                    const t = new Ss(this._instance, e, (t, n) => {
                        this.jt("linked_flag_matched", {
                            flag: t,
                            variant: n,
                            group_id: e.id,
                            group_name: e.name
                        }), this.zt()
                    });
                    this.Qt.push(t)
                }
            }
        };
    const Mo = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "oppref", "bfcid", "irclid", "_kx"],
        Ro = 1e5,
        Ao = /^[A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*$/,
        xo = [],
        To = () => !1,
        Oo = "@type @id actionStatus availability bestRating contentRating encodingFormat eventAttendanceMode eventStatus highPrice inLanguage isAccessibleForFree isFamilyFriendly itemCondition itemListOrder lowPrice maximumAttendeeCapacity nonprofitStatus numberOfItems offerCount position price priceCurrency priceValidUntil publicAccess ratingCount ratingValue reviewCount smokingAllowed worstRating".split(" "),
        Eo = "Action BorrowAction ReadAction SearchAction SeekToAction SolveMathAction WatchAction".split(" "),
        Fo = "AutoDealer Bakery BarOrPub CafeOrCoffeeShop CollegeOrUniversity Corporation DaySpa Dentist EducationalOrganization Electrician FoodEstablishment GovernmentOrganization HealthClub Hotel LegalService Library LibrarySystem LocalBusiness Locksmith LodgingBusiness MedicalBusiness NGO OnlineStore Organization PerformingGroup Pharmacy Physician Plumber RealEstateAgent Restaurant School SportsOrganization Store".split(" "),
        Lo = "Accommodation AdministrativeArea Country Place State".split(" "),
        $o = {
            AggregateOffer: {
                offers: ["Offer"]
            },
            Brand: {
                name: !0
            },
            BreadcrumbList: {
                itemListElement: ["ListItem"]
            },
            CreativeWork: {
                genre: !0,
                dateCreated: !0,
                dateModified: !0,
                datePublished: !0,
                expires: !0,
                learningResourceType: !0,
                educationalLevel: !0,
                educationalUse: !0,
                interactivityType: !0,
                aggregateRating: ["AggregateRating"],
                potentialAction: Eo,
                publisher: Fo
            },
            Event: {
                startDate: !0,
                endDate: !0,
                previousStartDate: !0,
                aggregateRating: ["AggregateRating"],
                offers: ["AggregateOffer", "Offer"]
            },
            ItemList: {
                itemListElement: ["ListItem"]
            },
            ListItem: {
                item: xo
            },
            Offer: {
                seller: Fo
            },
            Organization: {
                name: !0,
                legalName: !0,
                foundingDate: !0,
                dissolutionDate: !0,
                aggregateRating: ["AggregateRating"],
                brand: ["Brand"]
            },
            Place: {
                aggregateRating: ["AggregateRating"]
            },
            Product: {
                name: !0,
                sku: !0,
                mpn: !0,
                gtin: !0,
                gtin8: !0,
                gtin12: !0,
                gtin13: !0,
                gtin14: !0,
                productID: !0,
                productGroupID: !0,
                asin: !0,
                model: !0,
                category: !0,
                color: !0,
                material: !0,
                pattern: !0,
                size: !0,
                productionDate: !0,
                releaseDate: !0,
                brand: ["Brand", "Organization"],
                manufacturer: Fo,
                offers: ["Offer", "AggregateOffer"],
                aggregateRating: ["AggregateRating"]
            },
            Service: {
                name: !0,
                serviceType: !0,
                category: !0,
                provider: Fo,
                areaServed: Lo,
                offers: ["AggregateOffer", "Offer"],
                aggregateRating: ["AggregateRating"]
            },
            OfferCatalog: {
                name: !0,
                itemListElement: xo
            }
        },
        Do = [
            ["3DModel AboutPage Answer Article AudioObject Blog BlogPosting Book Clip CollectionPage Comment ContactPage Course CreativeWorkSeason CreativeWorkSeries DataCatalog DataDownload DataFeed Dataset DiscussionForumPosting Episode FAQPage Game HowTo HowToDirection HowToSection HowToStep HowToTip ImageObject LearningResource MediaObject Message MobileApplication Movie MusicPlaylist MusicRecording NewsArticle Photograph PodcastEpisode PodcastSeries ProfilePage QAPage Question Quiz Recipe Review ScholarlyArticle SearchResultsPage SiteNavigationElement SocialMediaPosting SoftwareApplication TVEpisode TVSeries TechArticle VacationRental VideoGame VideoObject WebApplication WebPage WebPageElement WebSite".split(" "), $o.CreativeWork],
            ["BroadcastEvent BusinessEvent EducationEvent Festival MusicEvent SportsEvent TheaterEvent".split(" "), $o.Event],
            [Fo, $o.Organization],
            [Lo, $o.Place],
            ["Car IndividualProduct ProductGroup ProductModel".split(" "), $o.Product]
        ];

    function No(t, e) {
        return li.call(t, e) ? t[e] : void 0
    }

    function Po(t) {
        const e = typeof t;
        return pi(t) || "string" === e || "number" === e || "boolean" === e
    }

    function jo(t, e) {
        return e && function(t) {
            return vi(t) && /^(https?:\/\/|\/|\.\.?\/)/i.test(t.trim())
        }(t) ? e(t.trim()) || void 0 : t
    }

    function Bo(t, e) {
        return ci(t) && t.every(Po) ? t.map(t => jo(t, e)).filter(t => !fi(t)) : Po(t) ? jo(t, e) : void 0
    }

    function zo(t, e) {
        if ("string" != typeof t) return;
        const n = t.trim(),
            i = n.indexOf("#"),
            r = 0 > i ? n : n.slice(i + 1);
        if (!(!r || 0 > i && (/^[a-z][a-z\d+.-]*:/i.test(n) || n.includes("/") || n.includes("?")))) try {
            return e(r) ? r : void 0
        } catch (t) {
            return
        }
    }

    function Wo(t) {
        if (li.call($o, t)) return $o[t];
        for (const [e, n] of Do)
            if (e.includes(t)) return n
    }

    function Uo(t, e, n) {
        Object.defineProperty(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        })
    }

    function qo(t, e, n, i) {
        if (ci(t)) {
            const r = t.map(t => qo(t, e, n, i)).filter(t => !fi(t));
            return r.length ? r : void 0
        }
        return Ho(t, e, n, i) || void 0
    }

    function Ho(t, e, n, i) {
        if (!di(t) || ! function(t) {
                return t.remainingNodes ? (t.remainingNodes--, !0) : (t.exceeded = !0, !1)
            }(n)) return null;
        const r = No(t, "@type"),
            s = function(t) {
                const e = new Set,
                    n = "string" == typeof t ? [t] : ci(t) ? t : [],
                    i = [];
                for (const t of n) {
                    if ("string" != typeof t) continue;
                    const n = t.replace(/^https?:\/\/schema\.org\//, "");
                    if (100 >= n.length && Ao.test(n) && !e.has(n) && (e.add(n), i.push(n), 20 === i.length)) break
                }
                return i
            }(r),
            o = s.filter(t => !!Wo(t) && (!i || !i.length || i.includes(t))),
            a = {};
        for (const i of Oo) {
            const o = "@type" === i ? s.length ? "string" == typeof r ? s[0] : s : void 0 : "@id" === i ? zo(No(t, i), e) : Bo(No(t, i), n.maskUrl);
            fi(o) || Uo(a, i, o)
        }
        for (const i of o) {
            const r = Wo(i);
            for (const i of Object.keys(r)) {
                const s = No(t, i),
                    o = r[i];
                if (!0 === o) {
                    const t = Bo(s, n.maskUrl);
                    fi(t) || Uo(a, i, t)
                } else {
                    const t = qo(s, e, n, o);
                    fi(t) || Uo(a, i, t)
                }
            }
        }
        const l = qo(No(t, "@graph"), e, n);
        return fi(l) || Uo(a, "@graph", l), Object.keys(a).length ? a : null
    }

    function Go(t, e, n) {
        if (!di(t)) return null;
        const r = No(t, "@context");
        if ("string" != typeof r || !/^https?:\/\/schema\.org\/?$/.test(r)) return null;
        const s = Ho(t, e, n);
        return s ? i({
            "@context": "https://schema.org"
        }, s) : null
    }

    function Vo(t) {
        var e;
        return "SCRIPT" === t.nodeName && "application/ld+json" === (null === (e = t.getAttribute("type")) || void 0 === e ? void 0 : e.trim().toLowerCase())
    }

    function Zo(t, e, n) {
        if ("string" == typeof e ? t.classList.contains(e) : e && Array.from(t.classList).some(t => (e.lastIndex = 0, e.test(t)))) return !0;
        try {
            return !!n && t.matches(n)
        } catch (t) {
            return !1
        }
    }

    function Jo(t, e, n) {
        for (let i = t; i;) {
            if (Zo(i, e, n)) return !0;
            const t = i.parentNode;
            i = i.parentElement || (t && t.nodeType === t.DOCUMENT_FRAGMENT_NODE ? t.host : null)
        }
        return !1
    }

    function Qo(t) {
        return Vo(t) ? [t] : t.nodeType !== t.ELEMENT_NODE ? [] : Array.from(t.querySelectorAll("script")).filter(Vo)
    }

    function Xo(t) {
        return di(t) ? t.network_timing : t
    }
    const Yo = Fi("[SessionRecording]"),
        Ko = [1, 2, 3, 4, 5, 6, 7, 12],
        ta = t => ({
            rrwebMethod: t,
            enqueuedAt: Date.now(),
            attempt: 1
        });

    function ea() {
        var t;
        return null == oi || null === (t = oi.__PosthogExtensions__) || void 0 === t ? void 0 : t.rrweb
    }

    function na() {
        var t;
        return null === (t = ea()) || void 0 === t ? void 0 : t.record
    }

    function ia(t) {
        try {
            return JSON.stringify(t)
        } catch (e) {
            if (e instanceof RangeError) throw e;
            return JSON.stringify(t, Is())
        }
    }

    function ra(t) {
        return lo(ao(function(t) {
            var e = t.length;
            if ("undefined" != typeof TextEncoder) return (new TextEncoder).encode(t);
            for (var n = new xs(t.length + (t.length >>> 1)), i = 0, r = function(t) {
                    n[i++] = t
                }, s = 0; e > s; ++s) {
                if (i + 5 > n.length) {
                    var o = new xs(i + 8 + (e - s << 1));
                    o.set(n), n = o
                }
                var a = t.charCodeAt(s);
                128 > a ? r(a) : 2048 > a ? (r(192 | a >>> 6), r(128 | 63 & a)) : a > 55295 && 57344 > a ? (r(240 | (a = 65536 + (1047552 & a) | 1023 & t.charCodeAt(++s)) >>> 18), r(128 | a >>> 12 & 63), r(128 | a >>> 6 & 63), r(128 | 63 & a)) : (r(224 | a >>> 12), r(128 | a >>> 6 & 63), r(128 | 63 & a))
            }
            return Zs(n, 0, i)
        }(ia(t))), !0)
    }

    function sa(t) {
        return oa.apply(this, arguments)
    }

    function oa() {
        return oa = s(function*(t) {
            const e = yield function(t) {
                return Ai.apply(this, arguments)
            }(ia(t), fo.DEBUG, {
                rethrow: !0
            });
            return lo(new Uint8Array(yield e.arrayBuffer()), !0)
        }), oa.apply(this, arguments)
    }
    let aa, la;
    const ua = "undefined" != typeof globalThis && "CompressionStream" in globalThis && "TextEncoder" in globalThis && "Response" in globalThis && "function" == typeof Response.prototype.blob;
    let ca = !1;

    function ha(t) {
        var e;
        return ci(t) && 0 === t.length ? (aa = null !== (e = aa) && void 0 !== e ? e : ra([]), aa) : ra(t)
    }

    function da(t) {
        return fa.apply(this, arguments)
    }

    function fa() {
        return (fa = s(function*(t) {
            var e;
            return ci(t) && 0 === t.length ? aa || (la = null !== (e = la) && void 0 !== e ? e : sa([]).then(t => (aa = t, t)).catch(t => {
                throw aa = void 0, la = void 0, t
            }), la) : sa(t)
        })).apply(this, arguments)
    }

    function va(t) {
        return ua && !ca && function(t) {
            return 2 === t.type || 3 === t.type && (0 === t.data.source || 8 === t.data.source)
        }(t)
    }

    function pa(t) {
        return {
            event: t,
            size: Rs(t)
        }
    }

    function ma(t, e) {
        return i(i({}, t), {}, {
            data: e,
            cv: "2024-10"
        })
    }

    function ga(t, e) {
        return i(i({}, t), {}, {
            cv: "2024-10",
            data: i(i({}, t.data), e)
        })
    }

    function ya(t) {
        try {
            if (2 === t.type) return pa(ma(t, ra(t.data)));
            if (3 === t.type && 0 === t.data.source) return pa(ga(t, {
                texts: ha(t.data.texts),
                attributes: ha(t.data.attributes),
                removes: ha(t.data.removes),
                adds: ha(t.data.adds)
            }));
            if (3 === t.type && 8 === t.data.source) return pa(ga(t, {
                adds: t.data.adds ? ra(t.data.adds) : void 0,
                removes: t.data.removes ? ra(t.data.removes) : void 0
            }))
        } catch (t) {
            Yo.warn("could not compress event - will use uncompressed event", t)
        }
        return {
            event: t,
            size: Ms(t)
        }
    }

    function ba() {
        return (ba = s(function*(t) {
            try {
                if (2 === t.type) return pa(ma(t, yield sa(t.data)));
                if (3 === t.type && 0 === t.data.source) {
                    const [e, n, i, r] = yield Promise.all([da(t.data.texts), da(t.data.attributes), da(t.data.removes), da(t.data.adds)]);
                    return pa(ga(t, {
                        texts: e,
                        attributes: n,
                        removes: i,
                        adds: r
                    }))
                }
                if (3 === t.type && 8 === t.data.source) {
                    const [e, n] = yield Promise.all([t.data.adds ? sa(t.data.adds) : void 0, t.data.removes ? sa(t.data.removes) : void 0]);
                    return pa(ga(t, {
                        adds: e,
                        removes: n
                    }))
                }
            } catch (e) {
                return (t => {
                    if (!t || "object" != typeof t) return !1;
                    const e = "name" in t ? String(t.name) : "";
                    return (t => !(!t || "object" != typeof t) && "NotReadableError" === ("name" in t ? String(t.name) : ""))(t) || e === _i
                })(e) && (ca = !0), Yo.warn("could not compress event asynchronously - trying synchronous compression", e), ya(t)
            }
            return {
                event: t,
                size: Ms(t)
            }
        })).apply(this, arguments)
    }

    function wa(t, e) {
        return 5 === t.type && t.data.tag === e
    }

    function ka(t) {
        return wa(t, "sessionIdle")
    }

    function Sa(t) {
        return wa(t, "$session_ending")
    }

    function _a(t) {
        return wa(t, "$session_starting")
    }
    var Ca = class {
        get sessionId() {
            return this.Xt
        }
        get te() {
            if (!this._instance.sessionManager) throw new Error("[SessionRecording] must be started with a valid sessionManager.");
            return this._instance.sessionManager
        }
        get ee() {
            return this._instance.config.session_recording.session_idle_threshold_ms || 3e5
        }
        get ne() {
            return _o(this._instance.get_property(Br), this.sessionId)
        }
        get Ht() {
            var t;
            const e = null === (t = this.ie) || void 0 === t ? void 0 : t.sampleRate;
            return gi(e) ? e : null
        }
        get re() {
            var t, e;
            return null !== (t = null === (e = this.oe) || void 0 === e ? void 0 : e.getMinimumDuration(this.sessionId)) && void 0 !== t ? t : null
        }
        constructor(t, e) {
            this._instance = t, this.se = "/s/", this._forceAllowLocalhostNetworkCapture = !1, this.ae = void 0, this.le = !1, this.ue = Date.now(), this.ce = !1, this.de = [], this.he = "unknown", this.fe = 0, this.ve = 0, this.pe = 0, this.me = 0, this.ge = 0, this.ye = !1, this.be = !1, this.we = !1, this.ke = !1, this.Se = !1, this._e = !1, this.xe = !1, this.Ce = !1, this.Te = !1, this.Ie = !1, this.Me = !1, this.Re = void 0, this.Ae = void 0, this.Ee = !1, this.Oe = [], this.$e = 0, this.Le = 0, this.De = !1, this.Pe = void 0, this.Gt = void 0, this.Fe = void 0, this.Ne = void 0, this.qe = void 0, this.je = (t, e, n) => {
                var i, r, s, o;
                if (!n) return;
                if (t === this.Xt && e === this.Be) return;
                const a = !n.noSessionId && (n.activityTimeout || n.sessionPastMaximumLength),
                    l = this.Xt,
                    u = this.Be;
                var c;
                if (a && this.Vt("$session_ending", {
                        currentSessionId: l,
                        currentWindowId: u,
                        nextSessionId: t,
                        nextWindowId: e,
                        changeReason: n,
                        lastActivityTimestamp: this.ue,
                        flushed_size: null === (c = this.ze) || void 0 === c ? void 0 : c.currentTrackedSize(l)
                    }), null === (i = this._instance.persistence) || void 0 === i || i.unregister("$debug_first_full_snapshot_timestamp"), null === (r = ea()) || void 0 === r || null === (s = r.resetMaxDepthState) || void 0 === s || s.call(r), this.Vt("$session_id_change", {
                        sessionId: t,
                        windowId: e,
                        changeReason: n
                    }), this.He(), !(!1 === this.he && this.isStarted || this.Xt === t && this.Be === e)) {
                    const e = this.Xt !== t && !1 !== this.he;
                    this.he = "unknown", this.Ue(e)
                }
                a && this.Vt("$session_starting", {
                    previousSessionId: l,
                    previousWindowId: u,
                    nextSessionId: t,
                    nextWindowId: e,
                    changeReason: n,
                    lastActivityTimestamp: this.ue
                }), null === (o = this.oe) || void 0 === o || o.makeSamplingDecisions(t)
            }, this.We = !1, this.Ge = () => {
                var t;
                return (null === (t = this._instance.persistence) || void 0 === t ? void 0 : t.props.$session_past_minimum_duration) === this.Xt
            }, this.Ve = () => {
                var t, e;
                if (0 === this.At.data.length) return null;
                const n = null === (t = this.At.data[0]) || void 0 === t ? void 0 : t.timestamp,
                    i = null === (e = this.At.data[this.At.data.length - 1]) || void 0 === e ? void 0 : e.timestamp;
                return gi(n) && gi(i) ? i - n : null
            }, this.Qe = () => {
                var t, e;
                const n = this.re;
                if (!gi(n)) return !1;
                if (null === (t = null === (e = this._instance.config.session_recording) || void 0 === e ? void 0 : e.strictMinimumDuration) || void 0 === t || !t) {
                    const t = this.Ze;
                    return gi(t) && t >= 0 && n > t
                }
                if (this.Ge()) return !1;
                const i = this.Ve();
                return !!pi(i) || n > i || (null === (r = this._instance.persistence) || void 0 === r || r.register({
                    $session_past_minimum_duration: this.Xt
                }), !1);
                var r
            }, this.Je = () => {
                "buffering" !== this.status ? (this.ye && this.be && this.Ye && (this.Ke(void 0), this.we && (this.we = !1, this.Bt())), this.Xe(), this.tn(!0)) : this.en()
            }, this.nn = () => {
                this.Je()
            }, this.rn = () => {
                this.Vt("browser offline", {})
            }, this.sn = () => {
                this.Vt("browser online", {})
            }, this.an = () => {
                (null == ii ? void 0 : ii.visibilityState) && ("visible" === ii.visibilityState && (this.Ye = !0), this.Vt("window " + ii.visibilityState, {}))
            }, this.Ye = null == e || e;
            const {
                sessionId: n,
                windowId: i,
                sessionStartTimestamp: r
            } = this.te.checkAndGetSessionAndWindowId();
            this.Xt = n, this.Be = i, this._sessionStartTimestamp = r, this.nt = new ws(this._instance), this.tt = new bs(this._instance), this.et = new ks(this._instance), this.At = this.en(), this.ln = "ph_replay_pending_buffer_" + JSON.stringify([this._instance.config.persistence_name || this._instance.config.token, this._instance.config.token]), this.te.sessionTimeoutMs > this.ee || Yo.warn(`session_idle_threshold_ms (${this.ee}) is greater than the session timeout (${this.te.sessionTimeoutMs}). Session will never be detected as idle`), this.ze = new vo(this._instance)
        }
        setDocumentWasEverVisible(t) {
            t && (this.Ye = !0)
        }
        get un() {
            var t, e, n, i, r, s, o, a, l;
            const u = null === (t = this.ie) || void 0 === t ? void 0 : t.masking,
                c = {
                    maskAllInputs: null === (e = this._instance.config.session_recording) || void 0 === e ? void 0 : e.maskAllInputs,
                    maskTextSelector: null === (n = this._instance.config.session_recording) || void 0 === n ? void 0 : n.maskTextSelector,
                    blockSelector: null === (i = this._instance.config.session_recording) || void 0 === i ? void 0 : i.blockSelector,
                    maskAllElementAttributes: null === (r = this._instance.config.session_recording) || void 0 === r ? void 0 : r.maskAllElementAttributes
                },
                h = null !== (s = null == c ? void 0 : c.maskAllInputs) && void 0 !== s ? s : null == u ? void 0 : u.maskAllInputs,
                d = null !== (o = null == c ? void 0 : c.maskTextSelector) && void 0 !== o ? o : null == u ? void 0 : u.maskTextSelector,
                f = null !== (a = null == c ? void 0 : c.blockSelector) && void 0 !== a ? a : null == u ? void 0 : u.blockSelector,
                v = null !== (l = null == c ? void 0 : c.maskAllElementAttributes) && void 0 !== l ? l : null == u ? void 0 : u.maskAllElementAttributes;
            return fi(h) && fi(d) && fi(f) && fi(v) ? void 0 : {
                maskAllInputs: null == h || h,
                maskTextSelector: d,
                blockSelector: f,
                maskAllElementAttributes: v
            }
        }
        cn() {
            var t;
            if (this.Ce) return;
            const e = null === (t = this.ie) || void 0 === t ? void 0 : t.masking;
            if (mi(e)) return;
            const n = this._instance.config.session_recording,
                i = ["maskAllInputs", "maskTextSelector", "blockSelector", "maskAllElementAttributes"].filter(t => {
                    const i = null == n ? void 0 : n[t],
                        r = e[t];
                    return !fi(i) && i !== r
                });
            0 !== i.length && (this.Ce = !0, Yo.warn('Session recording masking is configured both in `posthog.init` and in your project settings, and they differ. The `session_recording` options in `posthog.init` take precedence, so the project ("Privacy and masking") setting is ignored for: ' + i.join(", ") + ". Remove these masking options from `posthog.init` to use the project setting instead. See https://posthog.com/docs/session-replay/privacy", {
                client: {
                    maskAllInputs: null == n ? void 0 : n.maskAllInputs,
                    maskTextSelector: null == n ? void 0 : n.maskTextSelector,
                    blockSelector: null == n ? void 0 : n.blockSelector,
                    maskAllElementAttributes: null == n ? void 0 : n.maskAllElementAttributes
                },
                project: e
            }))
        }
        get dn() {
            var t;
            return wi(null === (t = this._instance.config.session_recording.canvasCapture) || void 0 === t ? void 0 : t.resolutionScale, .1, 1, Fi("canvas recording resolution scale"), 1)
        }
        get hn() {
            var t, e, n, i, r, s, o;
            const a = this._instance.config.session_recording.captureCanvas,
                l = null === (t = this.ie) || void 0 === t ? void 0 : t.canvasRecording,
                u = null !== (e = null !== (n = null == a ? void 0 : a.recordCanvas) && void 0 !== n ? n : null == l ? void 0 : l.enabled) && void 0 !== e && e,
                c = null !== (i = null !== (r = null == a ? void 0 : a.canvasFps) && void 0 !== r ? r : null == l ? void 0 : l.fps) && void 0 !== i ? i : 4;
            let h = null !== (s = null !== (o = null == a ? void 0 : a.canvasQuality) && void 0 !== o ? o : null == l ? void 0 : l.quality) && void 0 !== s ? s : .4;
            if ("string" == typeof h) {
                const t = parseFloat(h);
                h = isNaN(t) ? .4 : t
            }
            return {
                enabled: u,
                fps: wi(c, 0, 12, Fi("canvas recording fps"), 4),
                quality: wi(h, 0, 1, Fi("canvas recording quality"), .4)
            }
        }
        get fn() {
            var t;
            const e = !!(null === (t = this.ie) || void 0 === t ? void 0 : t.consoleLogRecordingEnabled),
                n = this._instance.config.enable_recording_console_log;
            return null != n ? n : e
        }
        get vn() {
            var t, e, n;
            const i = null === (t = this.ie) || void 0 === t ? void 0 : t.networkPayloadCapture,
                r = {
                    recordHeaders: null === (e = this._instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                    recordBody: null === (n = this._instance.config.session_recording) || void 0 === n ? void 0 : n.recordBody
                },
                s = !1 !== r.recordHeaders && (r.recordHeaders || (null == i ? void 0 : i.recordHeaders)),
                o = !1 !== r.recordBody && (r.recordBody || (null == i ? void 0 : i.recordBody)),
                a = Xo(this._instance.config.capture_performance),
                l = Xo(null == i ? void 0 : i.capturePerformance),
                u = !!(yi(a) ? a : l);
            return s || o || u ? {
                recordHeaders: s,
                recordBody: o,
                recordPerformance: u
            } : void 0
        }
        pn() {
            var t, e;
            const n = [],
                r = null === (t = oi.__PosthogExtensions__) || void 0 === t || null === (t = t.rrwebPlugins) || void 0 === t ? void 0 : t.getRecordConsolePlugin;
            r && this.fn && n.push(r());
            const s = null === (e = oi.__PosthogExtensions__) || void 0 === e || null === (e = e.rrwebPlugins) || void 0 === e ? void 0 : e.getRecordNetworkPlugin;
            if (this.vn && hi(s))
                if (!Ni.includes(ri.hostname) || this._forceAllowLocalhostNetworkCapture) {
                    const t = hi(this._instance.requestRouter.isIngestionEndpoint) ? this._instance.requestRouter.isIngestionEndpoint.bind(this._instance.requestRouter) : void 0;
                    n.push(s(i(i({}, ((t, e, n) => {
                        const r = {
                                payloadSizeLimitBytes: Ki.payloadSizeLimitBytes,
                                performanceEntryTypeToObserve: [...Ki.performanceEntryTypeToObserve],
                                payloadHostDenyList: [...e.payloadHostDenyList || [], ...Ki.payloadHostDenyList]
                            },
                            s = !1 !== t.session_recording.recordHeaders && e.recordHeaders,
                            o = !1 !== t.session_recording.recordBody && e.recordBody,
                            a = !1 !== t.capture_performance && e.recordPerformance,
                            l = (t => {
                                const e = Yi(t);
                                return t => ((null == t ? void 0 : t.requestBody) && (t.requestBody = sr(t.requestBody, t.requestHeaders, e, "Request")), (null == t ? void 0 : t.responseBody) && (t.responseBody = sr(t.responseBody, t.responseHeaders, e, "Response")), t)
                            })(r),
                            u = e => {
                                return l(((t, e, n) => {
                                    var i;
                                    if (null == n ? void 0 : n(t.name)) return;
                                    const r = Di(t.name);
                                    let s = 0 === e.indexOf("http") ? null === (i = Di(e)) || void 0 === i ? void 0 : i.pathname : e;
                                    "/" === s && (s = "");
                                    const o = null == r ? void 0 : r.pathname.replace(s || "", "");
                                    return r && o && rr.some(t => 0 === o.indexOf(t)) ? void 0 : t
                                })((ir((i = e).requestHeaders), ir(i.responseHeaders), i), t.api_host, n));
                                var i
                            },
                            c = hi(t.session_recording.maskNetworkRequestFn);
                        return c && hi(t.session_recording.maskCapturedNetworkRequestFn) ? Ei.warn("Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored.") : c && (t.session_recording.maskCapturedNetworkRequestFn = e => {
                            const n = t.session_recording.maskNetworkRequestFn({
                                url: e.name
                            });
                            if (n || !e.isInitial) return i(i({}, e), {}, {
                                name: null == n ? void 0 : n.url
                            })
                        }), r.maskRequestFn = hi(t.session_recording.maskCapturedNetworkRequestFn) ? e => {
                            var n, i;
                            const r = u(e);
                            if (!r) return;
                            const s = r.isInitial ? {
                                    name: "",
                                    entryType: r.entryType,
                                    startTime: r.startTime,
                                    duration: r.duration,
                                    endTime: r.endTime,
                                    timeOrigin: r.timeOrigin,
                                    timestamp: r.timestamp,
                                    isInitial: !0
                                } : void 0,
                                o = null === (n = (i = t.session_recording).maskCapturedNetworkRequestFn) || void 0 === n ? void 0 : n.call(i, r);
                            return mi(o) && s ? (ar.add(s), s) : null != o ? o : void 0
                        } : t => function(t) {
                            if (!fi(t)) return t.requestBody = or(t.requestBody, "Request"), t.responseBody = or(t.responseBody, "Response"), t
                        }(u(t)), i(i(i({}, Ki), r), {}, {
                            recordHeaders: s,
                            recordBody: o,
                            recordPerformance: a,
                            recordInitialRequests: a,
                            streamNetworkBody: !0 === t.session_recording.streamNetworkBody
                        })
                    })(this._instance.config, this.vn, t)), {}, {
                        captureFetchSynchronously: !0 === this._instance.config.__preview_replay_sync_fetch
                    })))
                } else Yo.info("NetworkCapture not started because we are on localhost.");
            return n
        }
        mn(t) {
            return this._instance.config.disable_capture_url_hashes ? Si(t) : t
        }
        gn(t, e = !1) {
            const n = e ? Si(t) : this.mn(t),
                i = this._instance.config.mask_personal_data_properties ? [...Mo, ...this._instance.config.custom_personal_data_properties || []] : [];
            return this.yn(function(t, e) {
                if (!t || !e || !e.length) return t;
                const n = t.split(/#(.*)/),
                    i = n[1],
                    r = (n[0] || "").split(/\?(.*)/),
                    s = r[1],
                    o = r[0],
                    a = (s || "").split("&"),
                    l = [];
                for (let t = 0; a.length > t; t++) {
                    const n = a[t].split("?");
                    let i = 0;
                    for (; n.length > i && !e.includes(n[i].split("=")[0]);) i++;
                    l.push(n.length > i ? n.slice(0, i).concat(n[i].split("=")[0] + "=<masked>").join("?") : a[t])
                }
                let u = o;
                return null != s && (u += "?" + l.join("&")), null != i && (u += "#" + i), u
            }(n, i))
        }
        yn(t) {
            const e = this._instance.config.session_recording;
            if (e.maskCapturedNetworkRequestFn) {
                var n;
                const i = e.maskCapturedNetworkRequestFn({
                    name: t
                });
                return null !== (n = null == i ? void 0 : i.name) && void 0 !== n ? n : null == i ? void 0 : i.url
            }
            if (e.maskNetworkRequestFn) {
                const n = e.maskNetworkRequestFn({
                    url: t
                });
                return null == n ? void 0 : n.url
            }
            return t
        }
        bn(t) {
            try {
                return t.rrwebMethod(), !0
            } catch (e) {
                return 10 > this.de.length ? this.de.push({
                    enqueuedAt: t.enqueuedAt || Date.now(),
                    attempt: t.attempt + 1,
                    rrwebMethod: t.rrwebMethod
                }) : Yo.warn("could not emit queued rrweb event.", e, t), !1
            }
        }
        Vt(t, e) {
            return this.bn(ta(() => na().addCustomEvent(t, e)))
        }
        wn() {
            var t;
            return this.le && !0 === (null === (t = this._instance.config.session_recording) || void 0 === t ? void 0 : t.captureJsonLd) && !this.tt.urlBlocked && !0 !== this.he
        }
        kn(t) {
            if (!this.wn()) return !1;
            try {
                const e = na();
                return !!e && (e.addCustomEvent("$json_ld", t), this.wn())
            } catch (t) {
                return !1
            }
        }
        Sn(t = !1) {
            Promise.resolve().then(() => {
                var e;
                return null === (e = this._n) || void 0 === e ? void 0 : e.scan(t)
            })
        }
        xn() {
            try {
                if (this._instance.config.capture_pageview || !ei) return;
                const t = new URL(ei.location.href),
                    e = this.gn(t.origin + t.pathname + t.search);
                this.Cn !== e && (this.Cn = e, this.Vt("$url_changed", {
                    href: e
                }))
            } catch (t) {}
        }
        Tn() {
            if (this.de.length) {
                const t = [...this.de];
                this.de = [], t.forEach(t => {
                    Date.now() - t.enqueuedAt > 2e3 || this.bn(t)
                })
            }
        }
        Bt() {
            return this.bn(ta(() => na().takeFullSnapshot()))
        }
        get In() {
            var t, e, n;
            if ((null === (t = this.oe) || void 0 === t ? void 0 : t.hasPendingTriggers(this.sessionId)) && !["sampled", "active"].includes(this.status)) {
                var i;
                const t = null === (i = this._instance.config.session_recording) || void 0 === i ? void 0 : i.trigger_pending_buffer_interval_millis;
                return gi(t) && Number.isFinite(t) && t >= 1e3 && 36e5 >= t ? t : 6e4
            }
            return null !== (e = null === (n = this._instance.config.session_recording) || void 0 === n ? void 0 : n.full_snapshot_interval_millis) && void 0 !== e ? e : 3e5
        }
        Mn() {
            if (this.Rn && clearInterval(this.Rn), !0 === this.he) return;
            const t = this.In;
            t && (this.Rn = setInterval(() => {
                this.Bt()
            }, t))
        }
        zt(t) {
            "event" === t && this.An(), !this.tt.urlBlocked && ["sampled", "active"].includes(this.status) && this.Mn()
        }
        En() {
            var t;
            this.tt.urlBlocked || (this.tt.urlBlocked = !0, null === (t = this._n) || void 0 === t || t.scan(), clearInterval(this.Rn), Yo.info("recording paused due to URL blocker"), this.Vt("recording paused", {
                reason: "url blocker"
            }))
        }
        On() {
            var t;
            this.tt.urlBlocked && (null === (t = this._n) || void 0 === t || t.scan(), this.tt.urlBlocked = !1, this.Bt(), this.Sn(), this.Mn(), this.Vt("recording resumed", {
                reason: "left blocked url"
            }), Yo.info("recording resumed"))
        }
        $n(t, e) {
            var n;
            if ("event" === t && this.An(), !this.ce && (null === (n = this.oe) || void 0 === n ? void 0 : n.hasPendingTriggers(this.sessionId))) {
                this.ce = !0;
                try {
                    var i, r;
                    const n = "url" === t ? zr : Wr;
                    null === (i = this._instance.persistence) || void 0 === i || i.register({
                        [n]: this.sessionId
                    }), null === (r = this.oe) || void 0 === r || r.updateActiveTriggers(this.sessionId), this.zt(), this.tn(), this.jt(t + "_trigger_matched", {
                        ["url" === t ? "matchedUrl" : "matchedEvent"]: e
                    })
                } finally {
                    this.ce = !1
                }
            }
        }
        get isStarted() {
            return !!this.ae
        }
        get ie() {
            const t = this._instance.get_property("$session_recording_remote_config");
            if (!t) return;
            let e;
            try {
                e = di(t) ? t : JSON.parse(t)
            } catch (t) {
                return void Yo.warn("persisted remote config for session recording is invalid and will be ignored", t)
            }
            if (!this.isStarted && !this.We) {
                var n;
                const i = null !== (n = e.cache_timestamp) && void 0 !== n ? n : Date.now();
                if (Date.now() - i > 36e5) return void Yo.info("persisted remote config for session recording is stale and will be ignored", {
                    cacheTimestamp: i,
                    persistedConfig: t
                })
            }
            return e
        }
        Ln(t, e, n) {
            this._instance.get_property(t) && (e(), n())
        }
        start(t) {
            var e, n;
            const i = this.ie;
            if (!i) return void Yo.info("remote config must be stored in persistence before recording can start");
            if (!this.isStarted) {
                const t = !1 !== this.he && !this.ke;
                this.Ke(t ? "no_interaction_since_recording_started" : void 0), this.ke = !1, this.be = t, this.we = !1
            }
            this.De && (this.Dn(), this.en());
            const {
                sessionId: r,
                windowId: s,
                sessionStartTimestamp: o
            } = this.te.checkAndGetSessionAndWindowId();
            this.Xt = r, this.Be = s, this._sessionStartTimestamp = o, this.Pn(), null === (e = this._instance.persistence) || void 0 === e || e.unregister("$debug_first_full_snapshot_timestamp"), (null == i ? void 0 : i.endpoint) && (this.se = null == i ? void 0 : i.endpoint), this.oe = 2 === (null == i ? void 0 : i.version) && (null == i ? void 0 : i.triggerGroups) && i.triggerGroups.length > 0 ? new Io(this._instance, this.tt, this.jt.bind(this), this.Vt.bind(this), this.zt.bind(this)) : new Co(this._instance, this.tt, this.et, this.nt, this.jt.bind(this), this.Bt.bind(this), this.zt.bind(this)), this.oe.onRemoteConfig(i), null === (n = this.Gt) || void 0 === n || n.call(this), this.Gt = this.oe.setupEventTriggerListeners(this._instance.on.bind(this._instance, "eventCaptured"), this.sessionId, (t, e) => this.$n(t, e)), this.Ln(Dr, () => {
                this.overrideSampling()
            }, () => {
                var t;
                return null === (t = this._instance.persistence) || void 0 === t ? void 0 : t.unregister(Dr)
            }), this.Ln(Nr, () => {
                this.overrideLinkedFlag()
            }, () => {
                var t;
                return null === (t = this._instance.persistence) || void 0 === t ? void 0 : t.unregister(Nr)
            }), this.Ln(jr, () => {
                this.overrideTrigger("event")
            }, () => {
                var t;
                return null === (t = this._instance.persistence) || void 0 === t ? void 0 : t.unregister(jr)
            }), this.Ln(Pr, () => {
                this.overrideTrigger("url")
            }, () => {
                var t;
                return null === (t = this._instance.persistence) || void 0 === t ? void 0 : t.unregister(Pr)
            }), this.oe.makeSamplingDecisions(this.sessionId), this.Fn(), this.Se || ($i(ei, "beforeunload", this.Je), $i(ei, "pagehide", this.nn), $i(ei, "offline", this.rn), $i(ei, "online", this.sn), $i(ii, "visibilitychange", this.an), !this.Fe && hi(this.te.onSessionId) && (this.Fe = this.te.onSessionId(this.je)), !this.Ne && hi(this.te.on) ? this.Ne = this.te.on("forcedIdleReset", () => {
                this.He(), this.he = "unknown", this.stop(), this.qe = this.te.onSessionId((t, e, n) => {
                    var i;
                    null === (i = this.qe) || void 0 === i || i.call(this), this.qe = void 0, this.je(t, e, n)
                })
            }) : hi(this.te.on) || Yo.warn("bundled core has no SessionIdManager.on (requires posthog-js >= 1.268.6); recording will start but skip forced-idle-reset handling"), mi(this.Pe) && (this.Pe = this._instance.on("eventCaptured", t => {
                try {
                    if ("$pageview" === t.event) {
                        const e = (null == t ? void 0 : t.properties.$current_url) ? this.gn(t.properties.$current_url) : "";
                        if (!e) return;
                        this.Vt("$pageview", {
                            href: e
                        })
                    }
                } catch (t) {
                    Yo.error("Could not add $pageview to rrweb session", t)
                }
            })), "active" === this.status && this.jt(t || "recording_initialized"))
        }
        Nn() {
            var t, e, n, i, r, s;
            null == ei || ei.removeEventListener("beforeunload", this.Je), null == ei || ei.removeEventListener("pagehide", this.nn), null == ei || ei.removeEventListener("offline", this.rn), null == ei || ei.removeEventListener("online", this.sn), null == ii || ii.removeEventListener("visibilitychange", this.an), clearInterval(this.Rn), this.qn(), null === (t = this.Pe) || void 0 === t || t.call(this), this.Pe = void 0, null === (e = this.Gt) || void 0 === e || e.call(this), this.Gt = void 0, null === (n = this.Fe) || void 0 === n || n.call(this), this.Fe = void 0, null === (i = this.Ne) || void 0 === i || i.call(this), this.Ne = void 0, null === (r = this.qe) || void 0 === r || r.call(this), this.qe = void 0, null === (s = this.oe) || void 0 === s || s.stop(), this.jn(), this.Dn()
        }
        Dn() {
            this.Le += 1, this.Oe = [], this.$e = 0, this.Bn = void 0, this.De = !1
        }
        jn() {
            var t, e;
            null === (t = this.zn) || void 0 === t || t.stop(), this.de = [], null === (e = this._n) || void 0 === e || e.stop(), this._n = void 0, this.le = !1;
            try {
                var n;
                null === (n = this.ae) || void 0 === n || n.call(this)
            } catch (t) {
                Yo.warn("could not stop rrweb", t)
            }
            this.ae = void 0
        }
        Hn() {
            if (!this.Bn || 0 === this.$e) return !1;
            if (this.De) return !0;
            this.De = !0, this.Un = void 0;
            const t = this.Le;
            return this.qn(), this.jn(), this.Bn.catch(() => {}).then(() => {
                t === this.Le && (this.De = !1, this.tn(), this.en(), this.Wn(), this.Nn(), Yo.info("stopped"))
            }).catch(() => {
                this.De = !1, this.Wn(), this.Nn(), Yo.info("stopped")
            }), !0
        }
        stop() {
            if (this.jn(), this.We) this.Xe();
            else if (this.Hn()) return;
            this.tn(), this.en(), this.Wn(), this.Nn(), Yo.info("stopped")
        }
        Wn() {
            this.Ke(void 0, {
                preserveLogDedup: this.We
            }), this.be = !1
        }
        flushBeforeIdentityReset() {
            (this.isStarted || this.De) && (this.Xe(), this.tn())
        }
        Ue(t) {
            this.We = !0, this.ue = Date.now();
            try {
                var e, n;
                this.stop(), this.Gn = void 0, this.ge = 0, this.ve = 0, this.pe = 0, this.me = 0, null === (e = ea()) || void 0 === e || null === (n = e.resetSnapshotCostState) || void 0 === n || n.call(e), this.start("session_id_changed")
            } finally {
                this.We = !1
            }
            this.Ke(t ? "no_interaction_since_session_rotated" : void 0), this.be = !1
        }
        Ke(t, {
            preserveLogDedup: e = !1
        } = {}) {
            if (this.ye = !fi(t), this.Un = t, fi(t)) return void(e || (this.Vn = void 0));
            if (this.We) return;
            const n = `${this.sessionId}:${t}`;
            n !== this.Vn && (this.Vn = n, Yo.info(`holding buffer: ${t}. nothing is uploaded until the user interacts with the page`))
        }
        An() {
            this.isStarted || (this.ke = !0), this.ye && (this.Ke(void 0), this.be = !1, this.we && (this.we = !1, this.Bt()), this.Qn())
        }
        discard({
            discardProducerEvents: t = !1
        } = {}) {
            this.ye = !0, t && (this.en(), this.jn()), this.en(), this.Nn(), this.en(), this.Wn(), Yo.info("discarded")
        }
        Zn(t, e, n, i, r) {
            if (-1 === n) return this.ge += 1, void Yo.warn("could not stringify event - dropping it to keep the rest of the recording");
            const s = {
                $snapshot_bytes: n,
                $snapshot_data: e,
                $session_id: i,
                $window_id: r
            };
            "disabled" !== this.status ? (this.Jn(t, i), this.Yn(s)) : this.en()
        }
        Kn() {
            try {
                this.Xn()
            } catch (t) {
                this.xe || (this.xe = !0, Yo.error("could not track full snapshot cost", t))
            }
        }
        Xn() {
            var t, e;
            const n = null === (t = ea()) || void 0 === t || null === (e = t.getLastSnapshotCost) || void 0 === e ? void 0 : e.call(t);
            n && n !== this.Gn && (this.Gn = n, 500 > n.durationMs || Yo.warn("full snapshot was slow, the page may have been unresponsive while it ran", {
                durationMs: Math.round(n.durationMs),
                stylesheetMs: Math.round(n.stylesheetMs),
                nodeCount: n.nodeCount,
                cssRuleCount: n.cssRuleCount,
                nonDeferrableCssRuleCount: n.nonDeferrableCssRuleCount,
                deferredStylesheetCount: n.deferredStylesheetCount
            }))
        }
        Jn(t, e) {
            2 !== t.type ? 3 === t.type && (fi(this.Re) || this.Re === e || this.Ae === e || (this.Ae = e, Yo.info("incremental snapshot for a session with no full snapshot - requesting one", {
                sessionId: e
            }), this.Bt())) : this.Re = e
        }
        ti(t) {
            t.counted && t.generation === this.Le && (this.$e = Math.max(0, this.$e - 1)), t.counted = !1, this.Oe = this.Oe.filter(e => e !== t)
        }
        ei(t, e, n) {
            t.processed || t.generation !== this.Le || (t.processed = !0, this.Zn(t.event, e, n, t.targetSessionId, t.targetWindowId))
        }
        ni(t) {
            try {
                let e, n = t.event;
                if (t.compressionEnabled) try {
                    ({
                        event: n,
                        size: e
                    } = ya(t.event))
                } catch (t) {
                    Yo.warn("could not process queued compression event - will use uncompressed event", t)
                }
                fi(e) && (e = Ms(t.event));
                try {
                    this.ei(t, n, e)
                } catch (t) {
                    Yo.warn("could not capture queued compression event", t)
                }
            } finally {
                this.ti(t)
            }
        }
        Xe() {
            [...this.Oe].forEach(t => {
                try {
                    this.ni(t)
                } catch (t) {
                    Yo.warn("could not drain queued compression event", t)
                }
            })
        }
        ii(t, e, n, i) {
            var r = this;
            const o = {
                event: t,
                compressionEnabled: e,
                targetSessionId: n,
                targetWindowId: i,
                generation: this.Le,
                processed: !1,
                counted: !0
            };
            this.Oe.push(o), this.$e += 1;
            const a = (l = s(function*() {
                try {
                    if (o.processed) return;
                    let n, i;
                    try {
                        const r = e ? va(t) ? yield function(t) {
                            return ba.apply(this, arguments)
                        }(t): ya(t): {
                            event: t,
                            size: Ms(t)
                        };
                        n = r.event, i = r.size
                    } catch (e) {
                        Yo.warn("could not process queued compression event - will use uncompressed event", e), n = t, i = Ms(t)
                    }
                    r.ei(o, n, i)
                } finally {
                    r.ti(o)
                }
            }), function() {
                return l.apply(this, arguments)
            });
            var l;
            this.Bn = this.Bn ? this.Bn.catch(() => {}).then(a) : a()
        }
        onRRwebEmit(t) {
            var e, n, i, r, s, o, a, l, u, c, h, d;
            if (!this._instance.sessionManager) return;
            if (this.Tn(), !t || !di(t)) return;
            if (4 === t.type) {
                const e = this.gn(t.data.href);
                if (this.Cn = e, !e) return;
                t.data.href = e
            } else this.xn();
            if (null === (e = this.oe) || void 0 === e || e.checkUrlTriggers(this.sessionId, () => this.En(), () => this.On(), (t, e) => this.$n(t, e)), this.tt.urlBlocked && (5 !== (c = t).type || "recording paused" !== c.data.tag)) return;
            2 === t.type && (this.Kn(), Promise.resolve().then(() => this.Kn()), this.Mn(), null === (h = this.zn) || void 0 === h || h.reset(), null === (d = this._instance.persistence) || void 0 === d || d.register_once({
                $debug_first_full_snapshot_timestamp: t.timestamp
            }, void 0));
            const f = 2 === t.type && (null === (n = this.oe) || void 0 === n ? void 0 : n.hasPendingTriggers(this.sessionId));
            f && this.ri();
            const v = this.zn ? this.zn.throttleMutations(t) : t;
            if (!v) return void(!0 === this.he && this.fe++);
            const p = function(t) {
                    const e = t;
                    if (e && di(e) && 6 === e.type && di(e.data) && "rrweb/console@1" === e.data.plugin) {
                        e.data.payload.payload.length > 10 && (e.data.payload.payload = e.data.payload.payload.slice(0, 10), e.data.payload.payload.push("...[truncated]"));
                        const n = [];
                        for (let t = 0; e.data.payload.payload.length > t; t++) n.push(e.data.payload.payload[t] && e.data.payload.payload[t].length > 2e3 ? e.data.payload.payload[t].slice(0, 2e3) + "...[truncated]" : e.data.payload.payload[t]);
                        return e.data.payload.payload = n, t
                    }
                    return t
                }(v),
                m = function(t) {
                    return Sa(t) ? t.data.payload : null
                }(p),
                g = function(t) {
                    return _a(t) ? t.data.payload : null
                }(p),
                y = function(t) {
                    return ka(t) ? t.data.payload : null
                }(p);
            m || g ? (null == m ? void 0 : m.lastActivityTimestamp) && (p.timestamp = m.lastActivityTimestamp) : (null == y ? void 0 : y.sessionId) || this.oi(p);
            const b = null !== (i = null !== (r = null !== (s = null == m ? void 0 : m.currentSessionId) && void 0 !== s ? s : null == g ? void 0 : g.nextSessionId) && void 0 !== r ? r : null == y ? void 0 : y.sessionId) && void 0 !== i ? i : this.Xt,
                w = null !== (o = null !== (a = null !== (l = null == m ? void 0 : m.currentWindowId) && void 0 !== l ? l : null == g ? void 0 : g.nextWindowId) && void 0 !== a ? a : null == y ? void 0 : y.windowId) && void 0 !== o ? o : this.Be;
            if (!0 === this.he && ! function(t) {
                    return ka(t) || Sa(t) || _a(t)
                }(p)) return void(function(t) {
                return 2 === t.type || 4 === t.type || 3 === t.type && 9 !== t.data.source
            }(p) && this.fe++);
            2 === p.type && (this.fe = 0), y && (p.timestamp = y.lastActivityTimestamp + y.threshold);
            const k = this.le;
            this.le = !0, f ? this.Sn(!0) : k || this.Sn();
            const S = null === (u = this._instance.config.session_recording.compress_events) || void 0 === u || u;
            if (5 === p.type && "$json_ld" === p.data.tag) {
                let t;
                try {
                    t = ei ? this.gn(ei.location.href) : void 0
                } catch (t) {}
                p.data.href = t
            }
            if (this.$e > 0 || S && va(p)) return void this.ii(p, S, b, w);
            const {
                event: _,
                size: C
            } = S ? ya(p) : {
                event: p,
                size: Ms(p)
            };
            this.Zn(p, _, C, b, w)
        }
        get status() {
            return this.oe ? this.oe.getStatus({
                instance: this._instance,
                sessionId: this.sessionId,
                isSampled: this.ne,
                rrwebError: this.Se,
                urlTriggerMatching: this.tt,
                eventTriggerMatching: this.et,
                linkedFlagMatching: this.nt,
                remoteConfig: this.ie
            }) : ns
        }
        log(t, e = "log") {
            var n;
            null === (n = this._instance.sessionRecording) || void 0 === n || n.onRRwebEmit({
                type: 6,
                data: {
                    plugin: "rrweb/console@1",
                    payload: {
                        level: e,
                        trace: [],
                        payload: [JSON.stringify(t)]
                    }
                },
                timestamp: Date.now()
            })
        }
        overrideLinkedFlag() {
            this.nt.linkedFlagSeen = !0, this.Bt(), this.An(), this.jt("linked_flag_overridden")
        }
        overrideSampling() {
            var t;
            null === (t = this._instance.persistence) || void 0 === t || t.register({
                $session_is_sampled: this.sessionId,
                $replay_sample_rate: null
            }), this.Bt(), this.An(), this.jt("sampling_overridden")
        }
        overrideTrigger(t) {
            this.$n(t), this.An()
        }
        si() {
            try {
                var t;
                const e = null == ei || null === (t = ei.location) || void 0 === t ? void 0 : t.href;
                if (!e) return;
                const n = this.gn(e);
                if (!n) return;
                return new URL(n).hostname || void 0
            } catch (t) {
                return
            }
        }
        qn() {
            this.ai && (clearTimeout(this.ai), this.ai = void 0)
        }
        Qn() {
            this.ai || (this.ai = setTimeout(() => {
                this.tn()
            }, 2e3))
        }
        li() {
            return this.Re !== this.At.sessionId && 0 !== this.At.data.length && this.At.data.every(t => 5 === (null == t ? void 0 : t.type) && !Sa(t) && !_a(t))
        }
        ui() {
            var t, e;
            return null !== (t = null === (e = this.oe) || void 0 === e ? void 0 : e.getPendingTriggerConditions(this.sessionId)) && void 0 !== t ? t : []
        }
        ci(t) {
            if ("buffering" !== t) return fi(this.di) || this._instance.register_for_session({
                [Jr]: []
            }), void(this.di = void 0);
            const e = this.ui();
            if (0 === e.length) return fi(this.di) || this._instance.register_for_session({
                [Jr]: []
            }), void(this.di = void 0);
            const n = e.join(", "),
                i = `${this.sessionId}:${n}`;
            i !== this.di && (this.di = i, this._instance.register_for_session({
                [Jr]: e
            }), Yo.info(`buffering: ${n}`))
        }
        hi() {
            var t;
            return "memory" !== this._instance.config.persistence && !0 !== (null === (t = this._instance.persistence) || void 0 === t ? void 0 : t.fi) && ho.Ot()
        }
        pi() {
            0 !== this.At.data.length && this.At.size !== this.mi && 943718.4 >= this.At.size && this.hi() && (this.mi = this.At.size, ho.$t(this.ln, this.At))
        }
        Pn() {
            if (this.Ee || !this.hi()) return;
            this.Ee = !0;
            const t = ho.Ft(this.ln);
            ho.Dt(this.ln), di(t) && ci(t.data) && 0 !== t.data.length && ci(t.sizes) && t.sizes.length === t.data.length && gi(t.size) && t.sessionId === this.Xt && t.windowId === this.Be && (this.At.data.length > 0 || (this.At = t))
        }
        tn(t = !1) {
            var e;
            if (this.qn(), this.ye) return this.At;
            if (this.li()) return this.At.size > 943718.4 ? this.en() : (t && this.pi(), this.At);
            const n = this.At;
            null === (e = this.oe) || void 0 === e || e.ensureSamplingDecision(this.sessionId);
            const r = this.Qe(),
                s = this.status;
            if (this.ci(s), "buffering" === s || "paused" === s || "disabled" === s || r) return !t || "active" !== s && "sampled" !== s || this.pi(), this.Qn(), this.At;
            if (this.At !== n) return this.At;
            if (n.data.length > 0) {
                var o;
                const t = this.si();
                As(n).forEach(e => {
                    try {
                        var n;
                        null === (n = this.ze) || void 0 === n || n.trackSize(e.sessionId, e.size), this.gi(i(i(i(i({
                            $snapshot_bytes: e.size,
                            $snapshot_data: e.data,
                            $session_id: e.sessionId,
                            $window_id: e.windowId,
                            $lib: fo.LIB_NAME,
                            $lib_version: fo.LIB_VERSION,
                            $snapshot_host: t
                        }, this.ve > 0 ? {
                            $sdk_debug_replay_throttled_mutations_dropped: this.ve
                        } : {}), this.pe > 0 ? {
                            $sdk_debug_replay_oversized_mutations_dropped: this.pe
                        } : {}), this.me > 0 ? {
                            $sdk_debug_replay_oversized_mutation_bytes_dropped: this.me
                        } : {}), this.ge > 0 ? {
                            $sdk_debug_replay_unstringifiable_events_dropped: this.ge
                        } : {}))
                    } catch (t) {
                        Yo.warn("could not capture snapshot chunk - skipping it", t)
                    }
                }), fi(this.mi) || (ho.Dt(this.ln), this.mi = void 0), null === (o = this.oe) || void 0 === o || o.onFlushComplete()
            }
            return this.en()
        }
        Yn(t) {
            var e;
            const n = 2 + ((null === (e = this.At) || void 0 === e ? void 0 : e.data.length) || 0),
                i = t.$session_id,
                r = this.At.sessionId !== i;
            if (r || !0 !== this.he && !this.ye && this.At.size + t.$snapshot_bytes + n > 943718.4) {
                const e = this.Xt;
                if (this.At = this.tn(), this.Xt !== e) return;
                r && this.At.data.length > 0 && (this.At = this.en()), this.At.sessionId = i, this.At.windowId = t.$window_id
            }
            this.ye && (this.we || this.At.size + t.$snapshot_bytes + n > 943718.4) ? this.we = !0 : (this.At.size += t.$snapshot_bytes, this.At.data.push(t.$snapshot_data), this.At.sizes.push(t.$snapshot_bytes), !0 === this.he || this.ye || this.Qn())
        }
        gi(t) {
            this._instance.capture("$snapshot", t, {
                _url: this._instance.requestRouter.endpointFor("api", this.se),
                _noTruncate: !0,
                _batchKey: "recordings",
                skip_client_rate_limiting: !0
            })
        }
        get Ze() {
            var t, e;
            const n = null === (t = this.At) || void 0 === t ? void 0 : t.data[(null === (e = this.At) || void 0 === e ? void 0 : e.data.length) - 1];
            return n ? n.timestamp - this._sessionStartTimestamp : null
        }
        ri() {
            if (!this.At || 0 === this.At.data.length) return this.en();
            let t = -1;
            for (let e = this.At.data.length - 1; e >= 0; e--)
                if (4 === this.At.data[e].type) {
                    t = e;
                    break
                }
            return 0 > t ? this.en() : (this.At.data = this.At.data.slice(t), this.At.sizes = this.At.sizes.slice(t), this.At.size = this.At.sizes.reduce((t, e) => t + e, 0), this.At)
        }
        en() {
            return this.At = {
                size: 0,
                data: [],
                sizes: [],
                sessionId: this.Xt,
                windowId: this.Be
            }, this.At
        }
        jt(t, e) {
            this._instance.register_for_session({
                [es]: t
            }), Yo.info(t.replace("_", " "), e), "session_id_changed" !== t && this.Vt("$recording_started", i({
                reason: t
            }, e))
        }
        yi(t) {
            var e;
            return 3 === t.type && -1 !== Ko.indexOf(null === (e = t.data) || void 0 === e ? void 0 : e.source)
        }
        oi(t) {
            const e = this.yi(t);
            e || !0 === this.he || t.timestamp - this.ue > this.ee && (this.he = !0, clearInterval(this.Rn), this.Vt("sessionIdle", {
                eventTimestamp: t.timestamp,
                lastActivityTimestamp: this.ue,
                threshold: this.ee,
                bufferLength: this.At.data.length,
                bufferSize: this.At.size,
                sessionId: this.Xt,
                windowId: this.Be
            }), this.tn());
            const {
                windowId: n,
                sessionId: i
            } = this.te.checkAndGetSessionAndWindowId(!e, t.timestamp);
            let r = !1;
            if (e && (this.ue = t.timestamp, this.he)) {
                const e = "unknown" === this.he;
                this.he = !1, e || (this.Vt("sessionNoLongerIdle", {
                    reason: "user activity",
                    type: t.type
                }), r = !0)
            }
            const s = this.Xt !== i,
                o = this.Be !== n;
            if (this.Be = n, this.Xt = i, s || o) {
                const t = s && !1 !== this.he;
                t && (this.he = "unknown"), this.Ue(t)
            } else if (e && this.An(), r) {
                var a;
                const t = ["sampled", "active"].includes(this.status) || (null === (a = this.oe) || void 0 === a ? void 0 : a.hasPendingTriggers(this.sessionId));
                this.fe > 0 && t && this.Bt(), this.Sn(), this.Mn()
            }
        }
        He() {
            var t;
            null === (t = this.oe) || void 0 === t || t.clearConditionalRecordingPersistence()
        }
        get sdkDebugProperties() {
            var t;
            return {
                $recording_status: this.status,
                $sdk_debug_replay_flush_hold_reason: this.Un,
                $sdk_debug_replay_internal_buffer_length: this.At.data.length,
                $sdk_debug_replay_internal_buffer_size: this.At.size,
                $sdk_debug_session_start: this._sessionStartTimestamp,
                $sdk_debug_replay_flushed_size: null === (t = this.ze) || void 0 === t ? void 0 : t.currentTrackedSize(this.sessionId),
                $sdk_debug_replay_rrweb_error: this.Se,
                [Kr]: this.bi,
                [ts]: this._e
            }
        }
        get bi() {
            var t, e, n;
            return !!this.ae && (null === (t = null === (e = na()) || void 0 === e || null === (n = e.isRecording) || void 0 === n ? void 0 : n.call(e)) || void 0 === t || t)
        }
        Fn() {
            var t;
            if (this.ae) return;
            this._e = !0;
            const e = {
                    blockClass: "ph-no-capture",
                    blockSelector: void 0,
                    ignoreClass: "ph-ignore-input",
                    maskTextClass: "ph-mask",
                    maskTextSelector: void 0,
                    maskTextFn: void 0,
                    maskAllInputs: !0,
                    maskInputOptions: {
                        password: !0
                    },
                    maskInputFn: void 0,
                    maskAllElementAttributes: !1,
                    maskAttributeFn: void 0,
                    slimDOMOptions: {},
                    collectFonts: !1,
                    inlineStylesheet: !0,
                    inlineStylesheetBudgetRules: 1e4,
                    recordCrossOriginIframes: !1,
                    sampling: void 0,
                    attributeFilter: void 0
                },
                n = this._instance.config.session_recording;
            for (const [t, r] of Object.entries(n || {}))
                if (t in e)
                    if ("maskInputOptions" === t) e.maskInputOptions = i({
                        password: !0
                    }, r);
                    else if ("sampling" === t) {
                const t = null != r ? r : {},
                    n = {};
                fi(t.mousemove) || (n.mousemove = t.mousemove), fi(t.mouseInteraction) || (n.mouseInteraction = t.mouseInteraction), e.sampling = n
            } else e[t] = r;
            var r, s, o, a;
            !0 === (null == n ? void 0 : n.captureJsonLd) && !0 !== e.slimDOMOptions && "all" !== e.slimDOMOptions && (e.slimDOMOptions = i(i({}, e.slimDOMOptions), {}, {
                script: !0
            })), this.hn && this.hn.enabled && (e.recordCanvas = !0, e.sampling = i(i({}, e.sampling), {}, {
                canvas: this.hn.fps
            }), e.dataURLOptions = {
                type: "image/webp",
                quality: this.hn.quality
            }, e.canvasResolutionScale = this.dn, e.canvasMasking = {
                configured: () => {
                    var t;
                    return hi(null === (t = this._instance.config.session_recording) || void 0 === t || null === (t = t.canvasCapture) || void 0 === t ? void 0 : t.maskRegionsFn)
                },
                regionsFn: t => {
                    var e;
                    const n = null === (e = this._instance.config.session_recording) || void 0 === e || null === (e = e.canvasCapture) || void 0 === e ? void 0 : e.maskRegionsFn;
                    if (hi(n)) try {
                        var i;
                        return null !== (i = n(t)) && void 0 !== i ? i : null
                    } catch (t) {
                        return this.Ie || (this.Ie = !0, Yo.warn("canvasCapture.maskRegionsFn threw, canvas frames will be skipped", t)), null
                    }
                }
            }), this.un && (e.maskAllInputs = null === (r = this.un.maskAllInputs) || void 0 === r || r, e.maskTextSelector = null !== (s = this.un.maskTextSelector) && void 0 !== s ? s : void 0, e.blockSelector = null !== (o = this.un.blockSelector) && void 0 !== o ? o : void 0, e.maskAllElementAttributes = null !== (a = this.un.maskAllElementAttributes) && void 0 !== a && a), e.maskAllElementAttributes && e.maskAttributeFn && (e.maskAttributeFn = void 0, this.Te || (this.Te = !0, Yo.warn('`maskAllElementAttributes` and `maskAttributeFn` are mutually exclusive, and `maskAttributeFn` is being ignored. Remove one of the two. Note that `maskAllElementAttributes` can also come from your project\'s "Privacy and masking" settings. See https://posthog.com/docs/session-replay/privacy'))), this.cn();
            const l = na();
            if (!l) return void Yo.error("_startRecorder was called but rrwebRecord is not available. This indicates something has gone wrong.");
            this.zn = null !== (t = this.zn) && void 0 !== t ? t : new uo(l, {
                refillRate: this._instance.config.session_recording.__mutationThrottlerRefillRate,
                bucketSize: this._instance.config.session_recording.__mutationThrottlerBucketSize,
                onBlockedNode: (t, e) => {
                    const n = `Too many mutations on node '${t}'. Rate limiting. This could be due to SVG animations or something similar`;
                    Yo.info(n, {
                        node: e
                    }), this.log("[SessionRecording] " + n, "warn")
                },
                onDroppedAttributeMutations: t => this.ve += t,
                bytesRefillRate: this._instance.config.session_recording.__mutationBytesRefillRate,
                bytesBucketSize: this._instance.config.session_recording.__mutationBytesBucketSize,
                resyncIntervalMs: this.In,
                onDroppedOversizedMutation: t => {
                    0 === this.pe && this.log("[SessionRecording] Dropped an oversized DOM mutation to keep the recording playable. The recording will resync with a full snapshot.", "warn"), this.pe += 1, this.me += t
                },
                requestFullSnapshot: () => this.Bt()
            });
            const u = this.pn();
            if (this.ae = l(i(i({
                    emit: t => {
                        this.onRRwebEmit(t)
                    },
                    plugins: u,
                    errorHandler: (t, e) => "rrweb" === e && (this.Me || (this.Me = !0, Yo.error("rrweb internal error - recording will continue but may be incomplete", t)), !0)
                }, e), {}, {
                    recordAfter: "DOMContentLoaded"
                })), !this.ae) return this.Se = !0, void Yo.error("rrweb failed to start - Loss of recording data is possible. Check the browser console for rrweb errors.");
            this.Se = !1, !0 === (null == n ? void 0 : n.captureJsonLd) && ii && (null == ei ? void 0 : ei.MutationObserver) && !this._n && (this._n = function(t, e, n) {
                const i = new WeakMap,
                    r = n.getCaptureState || (() => !0);
                let s = Ro;
                const o = function(t, e) {
                        const n = e.attributeFilter;
                        return e.maskAllElementAttributes || e.maskAttributeFn || (null == n ? void 0 : n.length) && !n.includes("id") ? To : n => {
                            const i = t.getElementById(n);
                            return !!i && "SCRIPT" !== i.nodeName && (!e.isRecordedElement || e.isRecordedElement(i)) && !Jo(i, e.blockClass, e.blockSelector)
                        }
                    }(t, n),
                    a = e => {
                        try {
                            const a = r();
                            if (!s || !1 === a || !e.isConnected || e.ownerDocument !== t || function(t, e) {
                                    return Jo(t, e.blockClass, e.blockSelector) || Jo(t, e.maskTextClass, e.maskTextSelector)
                                }(e, n)) return;
                            const l = function(t, e = To, n) {
                                if (!t || t.length > Ro) return null;
                                try {
                                    const i = JSON.parse(t),
                                        r = {
                                            maskUrl: n,
                                            remainingNodes: 2048,
                                            exceeded: !1
                                        },
                                        s = ci(i) ? i.map(t => Go(t, e, r)) : Go(i, e, r);
                                    if (r.exceeded || pi(s) || ci(s) && (!s.length || s.some(pi))) return null;
                                    const o = JSON.stringify(s);
                                    return o.length > 2e4 ? null : [s, o]
                                } catch (t) {
                                    return null
                                }
                            }(e.text, o, n.maskUrl);
                            if (!l) return void i.delete(e);
                            const [u, c] = l;
                            if (pi(a)) return void i.set(e, c);
                            if (i.get(e) !== c) {
                                if (c.length > s) return void(s = 0);
                                n.emit(u) && (i.set(e, c), s -= c.length)
                            }
                        } catch (t) {
                            return
                        }
                    };
                try {
                    const n = new e(t => {
                        try {
                            if (!s || !1 === r()) return;
                            const e = t => {
                                for (const e of Qo(t)) a(e)
                            };
                            for (const n of t)
                                if ("childList" === n.type) Vo(n.target) && a(n.target), n.addedNodes.forEach(e);
                                else if ("characterData" === n.type) {
                                const t = n.target.parentNode;
                                t && Vo(t) && a(t)
                            } else "attributes" === n.type && Vo(n.target) && a(n.target)
                        } catch (t) {
                            return
                        }
                    });
                    return n.observe(t, {
                        attributes: !0,
                        attributeFilter: ["type"],
                        characterData: !0,
                        childList: !0,
                        subtree: !0
                    }), {
                        scan(e = !1) {
                            s && !1 !== r() && Qo(t.documentElement).forEach(t => {
                                e && i.delete(t), a(t)
                            })
                        },
                        stop() {
                            return n.disconnect()
                        }
                    }
                } catch (t) {
                    return {
                        scan() {},
                        stop() {}
                    }
                }
            }(ii, ei.MutationObserver, {
                maskUrl: t => this.gn(t),
                attributeFilter: e.attributeFilter,
                blockClass: e.blockClass,
                blockSelector: e.blockSelector,
                isRecordedElement: t => l.mirror.getId(t) > 0,
                maskAllElementAttributes: e.maskAllElementAttributes,
                maskAttributeFn: e.maskAttributeFn,
                maskTextClass: e.maskTextClass,
                maskTextSelector: e.maskTextSelector,
                getCaptureState: () => {
                    var t;
                    return !0 !== (null === (t = this._instance.config.session_recording) || void 0 === t ? void 0 : t.captureJsonLd) || this.tt.urlBlocked || this.tt.isCurrentUrlBlocked() ? null : this.wn()
                },
                emit: t => this.kn(t)
            }), this.tt.isCurrentUrlBlocked() && this._n.scan()), this.ue = Date.now(), this.he = yi(this.he) ? this.he : "unknown", this.tryAddCustomEvent("$remote_config_received", this.ie), this.Vt("$session_options", {
                sessionRecordingOptions: e,
                activePlugins: u.map(t => null == t ? void 0 : t.name)
            }), this.Vt("$posthog_config", {
                config: this._instance.config
            })
        }
        tryAddCustomEvent(t, e) {
            return this.Vt(t, e)
        }
    };
    oi.__PosthogExtensions__ = oi.__PosthogExtensions__ || {}, oi.__PosthogExtensions__.rrwebPlugins = {
        getRecordConsolePlugin: t => ({
            name: "rrweb/console@1",
            observer: ti,
            options: t
        }),
        getRecordNetworkPlugin: t => ({
            name: "rrweb/network@1",
            observer: $r,
            options: t
        })
    }, oi.__PosthogExtensions__.rrweb = {
        record: Pn,
        version: "v2",
        wasMaxDepthReached: () => ie,
        resetMaxDepthState() {
            ie = !1, ne = !1
        },
        getLastSnapshotCost: () => j,
        getMutationCost: () => i({}, q),
        getDeferredStylesheetStats: () => i({}, H),
        getDiscardedDurationSamples: () => T,
        getObserverInitFailures: () => Qe.size ? Array.from(Qe) : void 0,
        resetSnapshotCostState() {
            L = 0, D = 0, N = 0, x = 0, T = 0, P = {
                durationMs: 0,
                stylesheetMs: 0,
                nodeCount: 0,
                cssRuleCount: 0,
                nonDeferrableCssRuleCount: 0,
                deferredStylesheetCount: 0
            }, j = null, B = null, z = [], W = 0, U = 0, q = {
                slowestBatchMs: 0
            }, H = {
                deferredCount: 0,
                failedCount: 0,
                abandonedCount: 0,
                totalMs: 0,
                slowestSliceMs: 0
            }
        }
    }, oi.__PosthogExtensions__.initSessionRecording = (t, e) => new Ca(t, e)
}();
//# sourceMappingURL=posthog-recorder.js.map