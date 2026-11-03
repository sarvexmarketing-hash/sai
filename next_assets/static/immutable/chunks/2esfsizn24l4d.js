(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 261773, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263);
    let n = t.createContext({
        disabled: !1
    });
    e.s(["useFieldItemContext", 0, function() {
        return t.useContext(n)
    }])
}, 885948, e => {
    "use strict";
    e.i(301016);
    var t = e.i(92615);

    function n(e, {
        startingIndex: t = -1,
        decrement: i = !1,
        disabledIndices: s,
        amount: u = 1
    } = {}) {
        let l = t;
        do l += i ? -u : u; while (l >= 0 && l <= e.length - 1 && r(e, l, s)) return l
    }

    function r(e, t, n) {
        if ("function" == typeof n ? n(t) : n ? .includes(t) ? ? !1) return !0;
        let r = e[t];
        return !!r && (!i(r) || !n && (r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled")))
    }

    function i(e, n = e ? (0, t.getComputedStyle)(e) : null) {
        var r;
        return !!e && !!e.isConnected && !!n && "hidden" !== (r = n).visibility && "collapse" !== r.visibility && ("function" == typeof e.checkVisibility ? e.checkVisibility() : "none" !== n.display && "contents" !== n.display)
    }
    e.s(["findNonDisabledListIndex", 0, n, "getMaxListIndex", 0, function(e, t) {
        return n(e.current, {
            decrement: !0,
            startingIndex: e.current.length,
            disabledIndices: t
        })
    }, "getMinListIndex", 0, function(e, t) {
        return n(e.current, {
            disabledIndices: t
        })
    }, "isElementVisible", 0, i, "isIndexOutOfListBounds", 0, function(e, t) {
        return t < 0 || t >= e.length
    }, "isListIndexDisabled", 0, r])
}, 276444, e => {
    "use strict";
    var t = e.i(248134);
    e.s(["createChangeEventDetails", 0, function(e, n, r, i) {
        let s = !1,
            u = !1,
            l = i ? ? t.EMPTY_OBJECT;
        return {
            reason: e,
            event: n ? ? new Event("base-ui"),
            cancel() {
                s = !0
            },
            allowPropagation() {
                u = !0
            },
            get isCanceled() {
                return s
            },
            get isPropagationAllowed() {
                return u
            },
            trigger: r,
            ...l
        }
    }, "createGenericEventDetails", 0, function(e, n, r) {
        let i = r ? ? t.EMPTY_OBJECT;
        return {
            reason: e,
            event: n ? ? new Event("base-ui"),
            ...i
        }
    }])
}, 806519, 535828, 120650, e => {
    "use strict";
    e.s(["getStateAttributesProps", 0, function(e, t) {
        let n = {};
        for (let r in e) {
            let i = e[r];
            if (t ? .hasOwnProperty(r)) {
                let e = t[r](i);
                null != e && Object.assign(n, e);
                continue
            }!0 === i ? n[`data-${r.toLowerCase()}`] = "" : i && (n[`data-${r.toLowerCase()}`] = i.toString())
        }
        return n
    }], 806519), e.s(["resolveClassName", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }], 535828), e.s(["resolveStyle", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }], 120650)
}, 505908, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(599543),
        r = e.i(230375);
    e.s(["useAriaLabelledBy", 0, function(e, i, s, u = !0, l) {
        let [o, a] = t.useState(), c = (0, r.useBaseUiId)(l ? `${l}-label` : void 0), f = e ? ? i ? ? o;
        return (0, n.useIsoLayoutEffect)(() => {
            let t = e || i || !u ? void 0 : function(e, t) {
                let n = function(e) {
                    if (!e) return;
                    let t = e.parentElement;
                    if (t && "LABEL" === t.tagName) return t;
                    let n = e.id;
                    if (n) {
                        let t = e.nextElementSibling;
                        if (t && t.htmlFor === n) return t
                    }
                    let r = e.labels;
                    return r && r[0]
                }(e);
                if (n) return !n.id && t && (n.id = t), n.id || void 0
            }(s.current, c);
            o !== t && a(t)
        }), f
    }])
}, 587758, e => {
    "use strict";
    e.s(["cancelOpen", 0, "cancel-open", "chipRemovePress", 0, "chip-remove-press", "clearPress", 0, "clear-press", "closePress", 0, "close-press", "closeWatcher", 0, "close-watcher", "decrementPress", 0, "decrement-press", "disabled", 0, "disabled", "drag", 0, "drag", "escapeKey", 0, "escape-key", "focusOut", 0, "focus-out", "imperativeAction", 0, "imperative-action", "incrementPress", 0, "increment-press", "initial", 0, "initial", "inputBlur", 0, "input-blur", "inputChange", 0, "input-change", "inputClear", 0, "input-clear", "inputPaste", 0, "input-paste", "inputPress", 0, "input-press", "itemPress", 0, "item-press", "keyboard", 0, "keyboard", "linkPress", 0, "link-press", "listNavigation", 0, "list-navigation", "missing", 0, "missing", "none", 0, "none", "outsidePress", 0, "outside-press", "pointer", 0, "pointer", "scrub", 0, "scrub", "siblingOpen", 0, "sibling-open", "swipe", 0, "swipe", "trackPress", 0, "track-press", "triggerFocus", 0, "trigger-focus", "triggerHover", 0, "trigger-hover", "triggerPress", 0, "trigger-press", "wheel", 0, "wheel", "windowResize", 0, "window-resize"], 646292);
    var t = e.i(646292);
    e.s(["REASONS", 0, t], 587758)
}, 788578, e => {
    "use strict";
    e.s(["serializeValue", 0, function(e) {
        if (null == e) return "";
        if ("string" == typeof e) return e;
        try {
            return JSON.stringify(e)
        } catch {
            return String(e)
        }
    }])
}, 526851, e => {
    "use strict";
    var t;
    let n = ((t = {}).startingStyle = "data-starting-style", t.endingStyle = "data-ending-style", t),
        r = {
            [n.startingStyle]: ""
        },
        i = {
            [n.endingStyle]: ""
        };
    e.s(["TransitionStatusDataAttributes", 0, n, "transitionStatusMapping", 0, {
        transitionStatus: e => "starting" === e ? r : "ending" === e ? i : null
    }])
}, 34709, 844145, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(92615),
        r = e.i(48164),
        i = e.i(599543),
        s = e.i(222971),
        u = e.i(335309);
    let l = t.createContext(void 0);

    function o(e = !1) {
        let n = t.useContext(l);
        if (void 0 === n && !e) throw Error((0, u.default)(16));
        return n
    }

    function a(e) {
        return (0, n.isHTMLElement)(e) && "BUTTON" === e.tagName
    }
    e.s(["CompositeRootContext", 0, l, "useCompositeRootContext", 0, o], 844145), e.s(["useButton", 0, function(e = {}) {
        let {
            disabled: n = !1,
            focusableWhenDisabled: u,
            tabIndex: l = 0,
            native: c = !0,
            composite: f
        } = e, d = t.useRef(null), p = o(!0), m = f ? ? void 0 !== p, {
            props: g
        } = function(e) {
            let {
                focusableWhenDisabled: n,
                disabled: r,
                composite: i = !1,
                tabIndex: s = 0,
                isNativeButton: u
            } = e, l = i && !1 !== n, o = i && !1 === n;
            return {
                props: t.useMemo(() => {
                    let e = {
                        onKeyDown(e) {
                            r && n && "Tab" !== e.key && e.preventDefault()
                        }
                    };
                    return i || (e.tabIndex = s, !u && r && (e.tabIndex = n ? s : -1)), (u && (n || l) || !u && r) && (e["aria-disabled"] = r), u && (!n || o) && (e.disabled = r), e
                }, [i, r, n, l, o, u, s])
            }
        }({
            focusableWhenDisabled: u,
            disabled: n,
            composite: m,
            tabIndex: l,
            isNativeButton: c
        }), b = t.useCallback(() => {
            let e = d.current;
            a(e) && m && n && void 0 === g.disabled && e.disabled && (e.disabled = !1)
        }, [n, g.disabled, m]);
        return (0, i.useIsoLayoutEffect)(b, [b]), {
            getButtonProps: t.useCallback((e = {}) => {
                let {
                    onClick: t,
                    onMouseDown: r,
                    onKeyUp: i,
                    onKeyDown: u,
                    onPointerDown: l,
                    ...o
                } = e;
                return (0, s.mergeProps)({
                    onClick(e) {
                        n ? e.preventDefault() : t ? .(e)
                    },
                    onMouseDown(e) {
                        n || r ? .(e)
                    },
                    onKeyDown(e) {
                        var r;
                        if (n || ((0, s.makeEventPreventable)(e), u ? .(e), e.baseUIHandlerPrevented)) return;
                        let i = e.target === e.currentTarget,
                            l = e.currentTarget,
                            o = a(l),
                            f = !c && (r = l, !!(r ? .tagName === "A" && r ? .href)),
                            d = i && (c ? o : !f),
                            p = "Enter" === e.key,
                            g = " " === e.key,
                            b = l.getAttribute("role"),
                            v = b ? .startsWith("menuitem") || "option" === b || "gridcell" === b;
                        if (i && m && g) {
                            if (e.defaultPrevented && v) return;
                            e.preventDefault(), f || c && o ? (l.click(), e.preventBaseUIHandler()) : d && (t ? .(e), e.preventBaseUIHandler());
                            return
                        }
                        d && (!c && (g || p) && e.preventDefault(), !c && p && t ? .(e))
                    },
                    onKeyUp(e) {
                        n || (((0, s.makeEventPreventable)(e), i ? .(e), e.target === e.currentTarget && c && m && a(e.currentTarget) && " " === e.key) ? e.preventDefault() : !e.baseUIHandlerPrevented && (e.target !== e.currentTarget || c || m || " " !== e.key || t ? .(e)))
                    },
                    onPointerDown(e) {
                        n ? e.preventDefault() : l ? .(e)
                    }
                }, c ? {
                    type: "button"
                } : {
                    role: "button"
                }, g, o)
            }, [n, g, m, c]),
            buttonRef: (0, r.useStableCallback)(e => {
                d.current = e, b()
            })
        }
    }], 34709)
}, 230375, e => {
    "use strict";
    var t = e.i(575565);
    e.s(["useBaseUiId", 0, function(e) {
        return (0, t.useId)(e, "base-ui")
    }])
}, 467618, 931893, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(48164),
        r = e.i(635179),
        i = e.i(2063),
        s = e.i(692135),
        u = e.i(526851);

    function l(e, t = !1, o = !0) {
        let a = (0, i.useAnimationFrame)();
        return (0, n.useStableCallback)((n, i = null) => {
            a.cancel();
            let l = (0, s.resolveRef)(e);
            if (null == l) return;
            let c = () => {
                r.flushSync(n)
            };
            if ("function" != typeof l.getAnimations || globalThis.BASE_UI_ANIMATIONS_DISABLED) return void n();

            function f() {
                Promise.all(l.getAnimations().map(e => e.finished)).then(() => {
                    i ? .aborted || c()
                }).catch(() => {
                    if (o) {
                        i ? .aborted || c();
                        return
                    }
                    let e = l.getAnimations();
                    !i ? .aborted && e.length > 0 && e.some(e => e.pending || "finished" !== e.playState) && f()
                })
            }
            if (t) {
                let e = u.TransitionStatusDataAttributes.startingStyle;
                if (!l.hasAttribute(e)) return void a.request(f);
                let t = new MutationObserver(() => {
                    l.hasAttribute(e) || (t.disconnect(), f())
                });
                return t.observe(l, {
                    attributes: !0,
                    attributeFilter: [e]
                }), void i ? .addEventListener("abort", () => t.disconnect(), {
                    once: !0
                })
            }
            a.request(f)
        })
    }
    e.s(["useAnimationsFinished", 0, l], 931893), e.s(["useOpenChangeComplete", 0, function(e) {
        let {
            enabled: r = !0,
            open: i,
            ref: s,
            onComplete: u
        } = e, o = (0, n.useStableCallback)(u), a = l(s, i, !1);
        t.useEffect(() => {
            if (!r) return;
            let e = new AbortController;
            return a(o, e.signal), () => {
                e.abort()
            }
        }, [r, i, o, a])
    }], 467618)
}, 782655, e => {
    "use strict";
    e.i(301016);
    var t = e.i(335309),
        n = e.i(136263),
        r = e.i(33609),
        i = e.i(380732),
        s = e.i(102866);
    e.i(513290);
    var u = e.i(248134),
        l = e.i(806519),
        o = e.i(535828),
        a = e.i(120650),
        c = e.i(222971);
    let f = Symbol.for("react.lazy");
    e.s(["useRenderElement", 0, function(e, d, p = {}) {
        let m = d.render,
            g = function(e, t = {}) {
                var n;
                let {
                    className: f,
                    style: d,
                    render: p
                } = e, {
                    state: m = u.EMPTY_OBJECT,
                    ref: g,
                    props: b,
                    stateAttributesMapping: v,
                    enabled: h = !0
                } = t, y = h ? (0, o.resolveClassName)(f, m) : void 0, E = h ? (0, a.resolveStyle)(d, m) : void 0, k = h ? (0, l.getStateAttributesProps)(m, v) : u.EMPTY_OBJECT, w = h && b ? Array.isArray(n = b) ? (0, c.mergePropsN)(n) : (0, c.mergeProps)(void 0, n) : void 0, C = h ? (0, s.mergeObjects)(k, w) ? ? {} : u.EMPTY_OBJECT;
                return ("u" > typeof document && (h ? Array.isArray(g) ? C.ref = (0, r.useMergedRefsN)([C.ref, (0, i.getReactElementRef)(p), ...g]) : C.ref = (0, r.useMergedRefs)(C.ref, (0, i.getReactElementRef)(p), g) : (0, r.useMergedRefs)(null, null)), h) ? (void 0 !== y && (C.className = (0, c.mergeClassNames)(C.className, y)), void 0 !== E && (C.style = (0, s.mergeObjects)(C.style, E)), C) : u.EMPTY_OBJECT
            }(d, p);
        return !1 === p.enabled ? null : function(e, r, i, s) {
            if (r) {
                if ("function" == typeof r) return r(i, s);
                let e = (0, c.mergeProps)(i, r.props);
                e.ref = i.ref;
                let t = r;
                return t ? .$$typeof === f && (t = n.Children.toArray(r)[0]), n.cloneElement(t, e)
            }
            if (e && "string" == typeof e) {
                var u, l;
                return u = e, l = i, "button" === u ? (0, n.createElement)("button", {
                    type: "button",
                    ...l,
                    key: l.key
                }) : "img" === u ? (0, n.createElement)("img", {
                    alt: "",
                    ...l,
                    key: l.key
                }) : n.createElement(u, l)
            }
            throw Error((0, t.default)(8))
        }(e, m, g, p.state ? ? u.EMPTY_OBJECT)
    }])
}, 755420, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(599543),
        r = e.i(2063);
    e.s(["useTransitionStatus", 0, function(e, i = !1, s = !1) {
        let [u, l] = t.useState(e && i ? "idle" : void 0), [o, a] = t.useState(e);
        return e && !o && (a(!0), l("starting")), e || !o || "ending" === u || s || l("ending"), e || o || "ending" !== u || l(void 0), (0, n.useIsoLayoutEffect)(() => {
            if (!e && o && "ending" !== u && s) {
                let e = r.AnimationFrame.request(() => {
                    l("ending")
                });
                return () => {
                    r.AnimationFrame.cancel(e)
                }
            }
        }, [e, o, u, s]), (0, n.useIsoLayoutEffect)(() => {
            if (!e || i) return;
            let t = r.AnimationFrame.request(() => {
                l(void 0)
            });
            return () => {
                r.AnimationFrame.cancel(t)
            }
        }, [i, e]), (0, n.useIsoLayoutEffect)(() => {
            if (!e || !i) return;
            e && o && "idle" !== u && l("starting");
            let t = r.AnimationFrame.request(() => {
                l("idle")
            });
            return () => {
                r.AnimationFrame.cancel(t)
            }
        }, [i, e, o, u]), {
            mounted: o,
            setMounted: a,
            transitionStatus: u
        }
    }])
}, 222971, e => {
    "use strict";
    var t = e.i(102866);
    let n = {};

    function r(e) {
        return u(e) ? { ...l(e, n)
        } : function(e) {
            let t = { ...e
            };
            for (let e in t) {
                let n = t[e];
                s(e, n) && (t[e] = o(n))
            }
            return t
        }(e)
    }

    function i(e, n) {
        return u(n) ? l(n, e) : function(e, n) {
            if (!n) return e;
            for (let r in n) {
                let i = n[r];
                switch (r) {
                    case "style":
                        e[r] = (0, t.mergeObjects)(e.style, i);
                        break;
                    case "className":
                        e[r] = c(e.className, i);
                        break;
                    default:
                        s(r, i) ? e[r] = function(e, t) {
                            return t ? e ? (...n) => {
                                let r = n[0];
                                if (f(r)) {
                                    a(r);
                                    let i = t(...n);
                                    return r.baseUIHandlerPrevented || e ? .(...n), i
                                }
                                let i = t(...n);
                                return e ? .(...n), i
                            } : o(t) : e
                        }(e[r], i) : e[r] = i
                }
            }
            return e
        }(e, n)
    }

    function s(e, t) {
        let n = e.charCodeAt(0),
            r = e.charCodeAt(1),
            i = e.charCodeAt(2);
        return 111 === n && 110 === r && i >= 65 && i <= 90 && ("function" == typeof t || void 0 === t)
    }

    function u(e) {
        return "function" == typeof e
    }

    function l(e, t) {
        return u(e) ? e(t) : e ? ? n
    }

    function o(e) {
        return e ? (...t) => {
            let n = t[0];
            return f(n) && a(n), e(...t)
        } : e
    }

    function a(e) {
        return e.preventBaseUIHandler = () => {
            e.baseUIHandlerPrevented = !0
        }, e
    }

    function c(e, t) {
        return t ? e ? t + " " + e : t : e
    }

    function f(e) {
        return null != e && "object" == typeof e && "nativeEvent" in e
    }
    e.s(["makeEventPreventable", 0, a, "mergeClassNames", 0, c, "mergeProps", 0, function(e, t, n, s, u) {
        if (!n && !s && !u && !e) return r(t);
        let l = r(e);
        return t && (l = i(l, t)), n && (l = i(l, n)), s && (l = i(l, s)), u && (l = i(l, u)), l
    }, "mergePropsN", 0, function(e) {
        if (0 === e.length) return n;
        if (1 === e.length) return r(e[0]);
        let t = r(e[0]);
        for (let n = 1; n < e.length; n += 1) t = i(t, e[n]);
        return t
    }])
}, 692135, e => {
    "use strict";
    e.s(["resolveRef", 0, function(e) {
        return null == e ? e : "current" in e ? e.current : e
    }])
}, 248134, e => {
    "use strict";
    let t = Object.freeze([]),
        n = Object.freeze({});
    e.s(["EMPTY_ARRAY", 0, t, "EMPTY_OBJECT", 0, n, "NOOP", 0, function() {}])
}, 335309, e => {
    "use strict";
    let t = function(e, ...t) {
        let n = new URL("https://base-ui.com/production-error");
        return n.searchParams.set("code", e.toString()), t.forEach(e => n.searchParams.append("args[]", e)), `Base UI error #${e}; visit ${n} for the full message.`
    };
    e.s(["default", 0, t])
}, 380732, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(932347);
    e.s(["getReactElementRef", 0, function(e) {
        if (!t.isValidElement(e)) return null;
        let r = e.props;
        return ((0, n.isReactVersionAtLeast)(19) ? r ? .ref : e.ref) ? ? null
    }])
}, 591074, e => {
    "use strict";
    e.s(["isElementDisabled", 0, function(e) {
        return null == e || e.hasAttribute("disabled") || "true" === e.getAttribute("aria-disabled")
    }])
}, 102866, e => {
    "use strict";
    e.s(["mergeObjects", 0, function(e, t) {
        return e && !t ? e : !e && t ? t : e || t ? { ...e,
            ...t
        } : void 0
    }])
}, 932347, e => {
    "use strict";
    let t = parseInt(e.i(136263).version, 10);
    e.s(["isReactVersionAtLeast", 0, function(e) {
        return t >= e
    }])
}, 625402, e => {
    "use strict";
    let t = { ...e.i(136263)
    };
    e.s(["SafeReact", 0, t])
}, 2063, 955603, e => {
    "use strict";
    var t = e.i(591273),
        n = e.i(136263);
    let r = [];

    function i(e) {
        n.useEffect(e, r)
    }
    e.s(["useOnMount", 0, i], 955603);
    let s = new class {
        callbacks = [];
        callbacksCount = 0;
        nextId = 1;
        startId = 1;
        isScheduled = !1;
        tick = e => {
            this.isScheduled = !1;
            let t = this.callbacks,
                n = this.callbacksCount;
            if (this.callbacks = [], this.callbacksCount = 0, this.startId = this.nextId, n > 0)
                for (let n = 0; n < t.length; n += 1) t[n] ? .(e)
        };
        request(e) {
            let t = this.nextId;
            return this.nextId += 1, this.callbacks.push(e), this.callbacksCount += 1, this.isScheduled || (requestAnimationFrame(this.tick), this.isScheduled = !0), t
        }
        cancel(e) {
            let t = e - this.startId;
            t < 0 || t >= this.callbacks.length || (this.callbacks[t] = null, this.callbacksCount -= 1)
        }
    };
    class u {
        static create() {
            return new u
        }
        static request(e) {
            return s.request(e)
        }
        static cancel(e) {
            return s.cancel(e)
        }
        currentId = null;
        request(e) {
            this.cancel(), this.currentId = s.request(() => {
                this.currentId = null, e()
            })
        }
        cancel = () => {
            null !== this.currentId && (s.cancel(this.currentId), this.currentId = null)
        };
        disposeEffect = () => this.cancel
    }
    e.s(["AnimationFrame", 0, u, "useAnimationFrame", 0, function() {
        let e = (0, t.useRefWithInit)(u.create).current;
        return i(e.disposeEffect), e
    }], 2063)
}, 575565, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(625402);
    let r = 0,
        i = n.SafeReact.useId;
    e.s(["useId", 0, function(e, n) {
        if (void 0 !== i) {
            let t = i();
            return e ? ? (n ? `${n}-${t}` : t)
        }
        return function(e, n = "mui") {
            let [i, s] = t.useState(e), u = e || i;
            return t.useEffect(() => {
                null == i && (r += 1, s(`${n}-${r}`))
            }, [i, n]), u
        }(e, n)
    }])
}, 599543, e => {
    "use strict";
    var t = e.i(136263);
    let n = "u" > typeof document ? t.useLayoutEffect : () => {};
    e.s(["useIsoLayoutEffect", 0, n])
}, 33609, e => {
    "use strict";
    var t = e.i(591273);

    function n() {
        return {
            callback: null,
            cleanup: null,
            refs: []
        }
    }

    function r(e, t) {
        if (e.refs = t, t.every(e => null == e)) {
            e.callback = null;
            return
        }
        e.callback = n => {
            if (e.cleanup && (e.cleanup(), e.cleanup = null), null != n) {
                let r = Array(t.length).fill(null);
                for (let e = 0; e < t.length; e += 1) {
                    let i = t[e];
                    if (null != i) switch (typeof i) {
                        case "function":
                            {
                                let t = i(n);
                                "function" == typeof t && (r[e] = t);
                                break
                            }
                        case "object":
                            i.current = n
                    }
                }
                e.cleanup = () => {
                    for (let e = 0; e < t.length; e += 1) {
                        let n = t[e];
                        if (null != n) switch (typeof n) {
                            case "function":
                                {
                                    let t = r[e];
                                    "function" == typeof t ? t() : n(null);
                                    break
                                }
                            case "object":
                                n.current = null
                        }
                    }
                }
            }
        }
    }
    e.s(["useMergedRefs", 0, function(e, i, s, u) {
        var l, o, a, c, f;
        let d = (0, t.useRefWithInit)(n).current;
        return l = d, o = e, a = i, c = s, f = u, (l.refs[0] !== o || l.refs[1] !== a || l.refs[2] !== c || l.refs[3] !== f) && r(d, [e, i, s, u]), d.callback
    }, "useMergedRefsN", 0, function(e) {
        var i, s;
        let u = (0, t.useRefWithInit)(n).current;
        return i = u, s = e, (i.refs.length !== s.length || i.refs.some((e, t) => e !== s[t])) && r(u, e), u.callback
    }])
}, 591273, e => {
    "use strict";
    var t = e.i(136263);
    let n = {};
    e.s(["useRefWithInit", 0, function(e, r) {
        let i = t.useRef(n);
        return i.current === n && (i.current = e(r)), i
    }])
}, 48164, e => {
    "use strict";
    e.i(301016);
    var t = e.i(625402),
        n = e.i(591273);
    let r = t.SafeReact.useInsertionEffect,
        i = r && r !== t.SafeReact.useLayoutEffect ? r : e => e();

    function s() {
        let e = {
            next: void 0,
            callback: u,
            trampoline: (...t) => e.callback ? .(...t),
            effect: () => {
                e.callback = e.next
            }
        };
        return e
    }

    function u() {}
    e.s(["useStableCallback", 0, function(e) {
        let t = (0, n.useRefWithInit)(s).current;
        return t.next = e, i(t.effect), t.trampoline
    }])
}, 513290, e => {
    "use strict";
    e.i(301016), e.s(["warn", 0, function() {}])
}, 92615, e => {
    "use strict";
    let t;

    function n() {
        return "u" > typeof window
    }

    function r(e) {
        return u(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }

    function i(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
    }

    function s(e) {
        var t;
        return null == (t = (u(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
    }

    function u(e) {
        return !!n() && (e instanceof Node || e instanceof i(e).Node)
    }

    function l(e) {
        return !!n() && (e instanceof Element || e instanceof i(e).Element)
    }

    function o(e) {
        return !!n() && (e instanceof HTMLElement || e instanceof i(e).HTMLElement)
    }

    function a(e) {
        return !(!n() || "u" < typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof i(e).ShadowRoot)
    }

    function c(e) {
        let {
            overflow: t,
            overflowX: n,
            overflowY: r,
            display: i
        } = h(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== i && "contents" !== i
    }

    function f(e) {
        try {
            if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
            return e.matches(":modal")
        } catch (e) {
            return !1
        }
    }
    let d = /transform|translate|scale|rotate|perspective|filter/,
        p = /paint|layout|strict|content/,
        m = e => !!e && "none" !== e;

    function g(e) {
        let t = l(e) ? h(e) : e;
        return m(t.transform) || m(t.translate) || m(t.scale) || m(t.rotate) || m(t.perspective) || !b() && (m(t.backdropFilter) || m(t.filter)) || d.test(t.willChange || "") || p.test(t.contain || "")
    }

    function b() {
        return null == t && (t = "u" > typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), t
    }

    function v(e) {
        return /^(html|body|#document)$/.test(r(e))
    }

    function h(e) {
        return i(e).getComputedStyle(e)
    }

    function y(e) {
        if ("html" === r(e)) return e;
        let t = e.assignedSlot || e.parentNode || a(e) && e.host || s(e);
        return a(t) ? t.host : t
    }

    function E(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
    }
    e.s(["getComputedStyle", 0, h, "getContainingBlock", 0, function(e) {
        let t = y(e);
        for (; o(t) && !v(t);) {
            if (g(t)) return t;
            if (f(t)) break;
            t = y(t)
        }
        return null
    }, "getDocumentElement", 0, s, "getFrameElement", 0, E, "getNodeName", 0, r, "getNodeScroll", 0, function(e) {
        return l(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.scrollX,
            scrollTop: e.scrollY
        }
    }, "getOverflowAncestors", 0, function e(t, n, r) {
        var s;
        void 0 === n && (n = []), void 0 === r && (r = !0);
        let u = function e(t) {
                let n = y(t);
                return v(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : o(n) && c(n) ? n : e(n)
            }(t),
            l = u === (null == (s = t.ownerDocument) ? void 0 : s.body),
            a = i(u);
        if (!l) return n.concat(u, e(u, [], r)); {
            let t = E(a);
            return n.concat(a, a.visualViewport || [], c(u) ? u : [], t && r ? e(t) : [])
        }
    }, "getParentNode", 0, y, "getWindow", 0, i, "isContainingBlock", 0, g, "isElement", 0, l, "isHTMLElement", 0, o, "isLastTraversableNode", 0, v, "isNode", 0, u, "isOverflowElement", 0, c, "isShadowRoot", 0, a, "isTableElement", 0, function(e) {
        return /^(table|td|th)$/.test(r(e))
    }, "isTopLayer", 0, f, "isWebKit", 0, b])
}, 285182, e => {
    "use strict";
    var t = e.i(92615);
    e.s(["ownerWindow", () => t.getWindow])
}]);