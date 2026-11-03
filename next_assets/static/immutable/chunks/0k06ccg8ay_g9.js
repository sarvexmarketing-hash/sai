(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 89676, 170693, e => {
    "use strict";
    var t = e.i(92615),
        r = e.i(903277);
    let n = "data-base-ui-focusable",
        o = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
    e.s(["ARROW_DOWN", 0, "ArrowDown", "ARROW_LEFT", 0, "ArrowLeft", "ARROW_RIGHT", 0, "ArrowRight", "ARROW_UP", 0, "ArrowUp", "FOCUSABLE_ATTRIBUTE", 0, n, "TYPEABLE_SELECTOR", 0, o], 170693);
    var i = e.i(83054);

    function s(e) {
        return (0, t.isHTMLElement)(e) && e.matches(o)
    }
    e.s(["getFloatingFocusElement", 0, function(e) {
        return e ? e.hasAttribute(n) ? e : e.querySelector(`[${n}]`) || e : null
    }, "isEventTargetWithin", 0, function(e, t) {
        return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target))
    }, "isInteractiveElement", 0, function(e) {
        return e ? .closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${o}`) != null
    }, "isRootElement", 0, function(e) {
        return e.matches("html,body")
    }, "isTargetInsideEnabledTrigger", 0, function(e, r) {
        if (!(0, t.isElement)(e)) return !1;
        if (r.hasElement(e)) return !e.hasAttribute("data-trigger-disabled");
        for (let [, t] of r.entries())
            if ((0, i.contains)(t, e)) return !t.hasAttribute("data-trigger-disabled");
        return !1
    }, "isTypeableCombobox", 0, function(e) {
        return !!e && "combobox" === e.getAttribute("role") && s(e)
    }, "isTypeableElement", 0, s, "matchesFocusVisible", 0, function(e) {
        if (!e || r.platform.env.jsdom) return !0;
        try {
            return e.matches(":focus-visible")
        } catch (e) {
            return !0
        }
    }], 89676)
}, 562736, e => {
    "use strict";
    e.s(["areArraysEqual", 0, function(e, t, r = (e, t) => e === t) {
        return e.length === t.length && e.every((e, n) => r(e, t[n]))
    }])
}, 166861, e => {
    "use strict";
    e.s(["clamp", 0, function(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
        return Math.max(t, Math.min(e, r))
    }])
}, 858049, e => {
    "use strict";
    var t = e.i(92615);
    let r = "ArrowUp",
        n = "ArrowDown",
        o = "ArrowLeft",
        i = "ArrowRight",
        s = "Home",
        l = new Set([o, i]),
        u = new Set([o, i, s, "End"]),
        a = new Set([r, n]),
        c = new Set([r, n, s, "End"]),
        d = new Set([...l, ...a]),
        f = new Set([...d, s, "End"]),
        C = "Shift",
        h = new Set([C, "Control", "Alt", "Meta"]);

    function g(e, t, r) {
        let n = "left" === r ? "offsetLeft" : "offsetTop",
            o = 0;
        for (; t.offsetParent && (o += t[n], t.offsetParent !== e);) t = t.offsetParent;
        return o
    }

    function p(e) {
        let t = getComputedStyle(e);
        return {
            scrollMarginTop: parseFloat(t.scrollMarginTop) || 0,
            scrollMarginRight: parseFloat(t.scrollMarginRight) || 0,
            scrollMarginBottom: parseFloat(t.scrollMarginBottom) || 0,
            scrollMarginLeft: parseFloat(t.scrollMarginLeft) || 0,
            scrollPaddingTop: parseFloat(t.scrollPaddingTop) || 0,
            scrollPaddingRight: parseFloat(t.scrollPaddingRight) || 0,
            scrollPaddingBottom: parseFloat(t.scrollPaddingBottom) || 0,
            scrollPaddingLeft: parseFloat(t.scrollPaddingLeft) || 0
        }
    }
    e.s(["ARROW_DOWN", 0, n, "ARROW_KEYS", 0, d, "ARROW_LEFT", 0, o, "ARROW_RIGHT", 0, i, "ARROW_UP", 0, r, "COMPOSITE_KEYS", 0, f, "END", 0, "End", "HOME", 0, s, "HORIZONTAL_KEYS", 0, l, "HORIZONTAL_KEYS_WITH_EXTRA_KEYS", 0, u, "MODIFIER_KEYS", 0, h, "PAGE_DOWN", 0, "PageDown", "PAGE_UP", 0, "PageUp", "SHIFT", 0, C, "VERTICAL_KEYS", 0, a, "VERTICAL_KEYS_WITH_EXTRA_KEYS", 0, c, "isNativeInput", 0, function(e) {
        return !!((0, t.isHTMLElement)(e) && "INPUT" === e.tagName && null != e.selectionStart || (0, t.isHTMLElement)(e) && "TEXTAREA" === e.tagName)
    }, "scrollIntoViewIfNeeded", 0, function(e, t, r, n) {
        if (!e || !t || !t.scrollTo) return;
        let o = e.scrollLeft,
            i = e.scrollTop,
            s = e.clientWidth < e.scrollWidth,
            l = e.clientHeight < e.scrollHeight;
        if (s && "vertical" !== n) {
            let n = g(e, t, "left"),
                i = p(e),
                s = p(t);
            "ltr" === r && (n + t.offsetWidth + s.scrollMarginRight > e.scrollLeft + e.clientWidth - i.scrollPaddingRight ? o = n + t.offsetWidth + s.scrollMarginRight - e.clientWidth + i.scrollPaddingRight : n - s.scrollMarginLeft < e.scrollLeft + i.scrollPaddingLeft && (o = n - s.scrollMarginLeft - i.scrollPaddingLeft)), "rtl" === r && (n - s.scrollMarginRight < e.scrollLeft + i.scrollPaddingLeft ? o = n - s.scrollMarginLeft - i.scrollPaddingLeft : n + t.offsetWidth + s.scrollMarginRight > e.scrollLeft + e.clientWidth - i.scrollPaddingRight && (o = n + t.offsetWidth + s.scrollMarginRight - e.clientWidth + i.scrollPaddingRight))
        }
        if (l && "horizontal" !== n) {
            let r = g(e, t, "top"),
                n = p(e),
                o = p(t);
            r - o.scrollMarginTop < e.scrollTop + n.scrollPaddingTop ? i = r - o.scrollMarginTop - n.scrollPaddingTop : r + t.offsetHeight + o.scrollMarginBottom > e.scrollTop + e.clientHeight - n.scrollPaddingBottom && (i = r + t.offsetHeight + o.scrollMarginBottom - e.clientHeight + n.scrollPaddingBottom)
        }
        e.scrollTo({
            left: o,
            top: i,
            behavior: "auto"
        })
    }])
}, 905167, e => {
    "use strict";
    var t = e.i(136263),
        r = e.i(591273),
        n = e.i(48164),
        o = e.i(599543),
        i = e.i(648878),
        s = e.i(52644);

    function l() {
        return new Map
    }

    function u() {
        return new Set
    }

    function a(e, t) {
        let r = e.compareDocumentPosition(t);
        return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
    }
    e.s(["CompositeList", 0, function(e) {
        let {
            children: c,
            elementsRef: d,
            labelsRef: f,
            onMapChange: C
        } = e, h = (0, n.useStableCallback)(C), g = t.useRef(0), p = (0, r.useRefWithInit)(u).current, v = (0, r.useRefWithInit)(l).current, [m, b] = t.useState(0), L = t.useRef(m), x = (0, n.useStableCallback)((e, t) => {
            v.set(e, t ? ? null), L.current += 1, b(L.current)
        }), E = (0, n.useStableCallback)(e => {
            v.delete(e), L.current += 1, b(L.current)
        }), O = t.useMemo(() => {
            let e = new Map;
            return Array.from(v.keys()).filter(e => e.isConnected).sort(a).forEach((t, r) => {
                let n = v.get(t) ? ? {};
                e.set(t, { ...n,
                    index: r
                })
            }), e
        }, [v, m]);
        (0, o.useIsoLayoutEffect)(() => {
            if ("function" != typeof MutationObserver || 0 === O.size) return;
            let e = new MutationObserver(e => {
                let t = new Set,
                    r = e => t.has(e) ? t.delete(e) : t.add(e);
                e.forEach(e => {
                    e.removedNodes.forEach(r), e.addedNodes.forEach(r)
                }), 0 === t.size && (L.current += 1, b(L.current))
            });
            return O.forEach((t, r) => {
                r.parentElement && e.observe(r.parentElement, {
                    childList: !0
                })
            }), () => {
                e.disconnect()
            }
        }, [O]), (0, o.useIsoLayoutEffect)(() => {
            L.current === m && (d.current.length !== O.size && (d.current.length = O.size), f && f.current.length !== O.size && (f.current.length = O.size), g.current = O.size), h(O)
        }, [h, O, d, f, m]), (0, o.useIsoLayoutEffect)(() => () => {
            d.current = []
        }, [d]), (0, o.useIsoLayoutEffect)(() => () => {
            f && (f.current = [])
        }, [f]);
        let I = (0, n.useStableCallback)(e => (p.add(e), () => {
            p.delete(e)
        }));
        (0, o.useIsoLayoutEffect)(() => {
            p.forEach(e => e(O))
        }, [p, O]);
        let y = t.useMemo(() => ({
            register: x,
            unregister: E,
            subscribeMapChange: I,
            elementsRef: d,
            labelsRef: f,
            nextIndexRef: g
        }), [x, E, I, d, f, g]);
        return (0, s.jsx)(i.CompositeListContext.Provider, {
            value: y,
            children: c
        })
    }])
}, 648878, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263);
    let r = t.createContext({
        register: () => {},
        unregister: () => {},
        subscribeMapChange: () => () => {},
        elementsRef: {
            current: []
        },
        nextIndexRef: {
            current: 0
        }
    });
    e.s(["CompositeListContext", 0, r, "useCompositeListContext", 0, function() {
        return t.useContext(r)
    }])
}, 471820, e => {
    "use strict";
    var t, r = e.i(136263),
        n = e.i(599543),
        o = e.i(648878);
    let i = ((t = {})[t.None = 0] = "None", t[t.GuessFromOrder = 1] = "GuessFromOrder", t);
    e.s(["IndexGuessBehavior", 0, i, "useCompositeListItem", 0, function(e = {}) {
        let {
            label: t,
            metadata: s,
            textRef: l,
            indexGuessBehavior: u,
            index: a
        } = e, {
            register: c,
            unregister: d,
            subscribeMapChange: f,
            elementsRef: C,
            labelsRef: h,
            nextIndexRef: g
        } = (0, o.useCompositeListContext)(), p = r.useRef(-1), [v, m] = r.useState(a ? ? (u === i.GuessFromOrder ? () => {
            if (-1 === p.current) {
                let e = g.current;
                g.current += 1, p.current = e
            }
            return p.current
        } : -1)), b = r.useRef(null), L = r.useCallback(e => {
            if (b.current = e, -1 !== v && null !== e && (C.current[v] = e, h)) {
                let r = void 0 !== t;
                h.current[v] = r ? t : l ? .current ? .textContent ? ? e.textContent
            }
        }, [v, C, h, t, l]);
        return (0, n.useIsoLayoutEffect)(() => {
            if (null != a) return;
            let e = b.current;
            if (e) return c(e, s), () => {
                d(e)
            }
        }, [a, c, d, s]), (0, n.useIsoLayoutEffect)(() => {
            if (null == a) return f(e => {
                let t = b.current ? e.get(b.current) ? .index : null;
                null != t && m(t)
            })
        }, [a, f, m]), {
            ref: L,
            index: v
        }
    }])
}, 340639, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263);
    let r = t.createContext(void 0),
        n = {
            disableStyleElements: !1
        };
    e.s(["useCSPContext", 0, function() {
        return t.useContext(r) ? ? n
    }])
}, 986716, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263);
    let r = t.createContext(void 0);
    e.s(["useDirection", 0, function() {
        let e = t.useContext(r);
        return e ? .direction ? ? "ltr"
    }])
}, 479039, e => {
    "use strict";
    var t = e.i(136263),
        r = e.i(599543),
        n = e.i(642920);
    e.s(["useRegisterFieldControl", 0, function(e, o, i, s, l = !0, u) {
        let {
            registerFieldControl: a
        } = (0, n.useFieldRootContext)(), c = t.useRef(null);
        c.current || (c.current = Symbol()), (0, r.useIsoLayoutEffect)(() => {
            let t = c.current;
            if (t && l) return a(t, {
                controlRef: e,
                getValue: s,
                id: o,
                name: u,
                value: i
            }), () => {
                a(t, void 0)
            }
        }, [e, l, s, o, u, a, i])
    }])
}, 642920, 509456, e => {
    "use strict";
    var t, r = e.i(335309),
        n = e.i(136263),
        o = e.i(248134);
    let i = ((t = {}).disabled = "data-disabled", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t),
        s = {
            badInput: !1,
            customError: !1,
            patternMismatch: !1,
            rangeOverflow: !1,
            rangeUnderflow: !1,
            stepMismatch: !1,
            tooLong: !1,
            tooShort: !1,
            typeMismatch: !1,
            valid: null,
            valueMissing: !1
        },
        l = {
            valid: null,
            touched: !1,
            dirty: !1,
            filled: !1,
            focused: !1
        },
        u = {
            disabled: !1,
            ...l
        };
    e.s(["DEFAULT_FIELD_ROOT_STATE", 0, u, "DEFAULT_FIELD_STATE_ATTRIBUTES", 0, l, "DEFAULT_VALIDITY_STATE", 0, s, "fieldValidityMapping", 0, {
        valid: e => null === e ? null : e ? {
            [i.valid]: ""
        } : {
            [i.invalid]: ""
        }
    }], 509456);
    let a = {
            invalid: void 0,
            name: void 0,
            validityData: {
                state: s,
                errors: [],
                error: "",
                value: "",
                initialValue: null
            },
            setValidityData: o.NOOP,
            disabled: void 0,
            touched: l.touched,
            setTouched: o.NOOP,
            dirty: l.dirty,
            setDirty: o.NOOP,
            filled: l.filled,
            setFilled: o.NOOP,
            focused: l.focused,
            setFocused: o.NOOP,
            validate: () => null,
            validationMode: "onSubmit",
            validationDebounceTime: 0,
            shouldValidateOnChange: () => !1,
            state: u,
            markedDirtyRef: {
                current: !1
            },
            registerFieldControl: o.NOOP,
            validation: {
                getValidationProps: (e, t = o.EMPTY_OBJECT) => t,
                inputRef: {
                    current: null
                },
                registerInput: o.NOOP,
                commit: async () => {},
                change: o.NOOP
            }
        },
        c = n.createContext(a);
    e.s(["useFieldRootContext", 0, function(e = !0) {
        let t = n.useContext(c);
        if (t.setValidityData === o.NOOP && !e) throw Error((0, r.default)(28));
        return t
    }], 642920)
}, 313587, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263),
        r = e.i(248134);
    let n = t.createContext({
        formRef: {
            current: {
                fields: new Map
            }
        },
        errors: {},
        clearErrors: r.NOOP,
        validationMode: "onSubmit",
        submitAttemptedRef: {
            current: !1
        }
    });
    e.s(["useFormContext", 0, function() {
        return t.useContext(n)
    }])
}, 167301, 472849, e => {
    "use strict";
    var t = e.i(92615),
        r = e.i(521498),
        n = e.i(48164),
        o = e.i(83054),
        i = e.i(599543),
        s = e.i(230375);

    function l(e, t) {
        let r = (0, s.useBaseUiId)(e);
        return (0, i.useIsoLayoutEffect)(() => (t(r), () => {
            t(void 0)
        }), [r, t]), r
    }
    e.s(["useRegisteredLabelId", 0, l], 472849);
    var u = e.i(307554);

    function a(e) {
        e.focus({
            focusVisible: !0
        })
    }
    e.s(["focusElementWithVisible", 0, a, "useLabel", 0, function(e = {}) {
        let {
            id: i,
            fallbackControlId: s,
            native: c = !1,
            setLabelId: d,
            focusControl: f
        } = e, {
            controlId: C,
            setLabelId: h
        } = (0, u.useLabelableContext)(), g = l(i, (0, n.useStableCallback)(e => {
            h(e), d ? .(e)
        })), p = C ? ? s;

        function v(e) {
            let n = (0, o.getTarget)(e.nativeEvent);
            n ? .closest("button,input,select,textarea") || (!e.defaultPrevented && e.detail > 1 && e.preventDefault(), c || function(e) {
                if (f) return f(e, p);
                if (!p) return;
                let n = (0, r.ownerDocument)(e.currentTarget).getElementById(p);
                (0, t.isHTMLElement)(n) && a(n)
            }(e))
        }
        return c ? {
            id: g,
            htmlFor: p ? ? void 0,
            onMouseDown: v
        } : {
            id: g,
            onClick: v,
            onPointerDown(e) {
                e.preventDefault()
            }
        }
    }], 167301)
}, 135311, 307554, e => {
    "use strict";
    var t = e.i(136263),
        r = e.i(599543),
        n = e.i(48164),
        o = e.i(591273),
        i = e.i(92615),
        s = e.i(248134),
        l = e.i(230375);
    let u = t.createContext({
        controlId: void 0,
        registerControlId: s.NOOP,
        labelId: void 0,
        setLabelId: s.NOOP,
        messageIds: [],
        setMessageIds: s.NOOP,
        getDescriptionProps: e => e
    });

    function a() {
        return t.useContext(u)
    }
    e.s(["useLabelableContext", 0, a], 307554), e.s(["useLabelableId", 0, function(e = {}) {
        let {
            id: u,
            implicit: c = !1,
            controlRef: d
        } = e, {
            controlId: f,
            registerControlId: C
        } = a(), h = (0, l.useBaseUiId)(u), g = c ? f : void 0, p = (0, o.useRefWithInit)(() => Symbol("labelable-control")), v = t.useRef(!1), m = t.useRef(null != u), b = (0, n.useStableCallback)(() => {
            v.current && C !== s.NOOP && (v.current = !1, C(p.current, void 0))
        });
        return (0, r.useIsoLayoutEffect)(() => {
            let e;
            if (C !== s.NOOP) {
                if (c) {
                    let t = d ? .current;
                    e = (0, i.isElement)(t) && null != t.closest("label") ? u ? ? null : g ? ? h
                } else if (null != u) m.current = !0, e = u;
                else {
                    if (!m.current) return void b();
                    e = h
                }
                if (void 0 === e) return void b();
                v.current = !0, C(p.current, e)
            }
        }, [u, d, g, C, c, h, p, b]), t.useEffect(() => b, [b]), f ? ? h
    }], 135311)
}, 83054, e => {
    "use strict";
    var t = e.i(92615);
    e.s(["activeElement", 0, function(e) {
        let t = e.activeElement;
        for (; t ? .shadowRoot ? .activeElement != null;) t = t.shadowRoot.activeElement;
        return t
    }, "contains", 0, function(e, r) {
        if (!e || !r) return !1;
        let n = r.getRootNode ? .();
        if (e.contains(r)) return !0;
        if (n && (0, t.isShadowRoot)(n)) {
            let t = r;
            for (; t;) {
                if (e === t) return !0;
                t = t.parentNode || t.host
            }
        }
        return !1
    }, "getTarget", 0, function(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target
    }])
}, 828539, e => {
    "use strict";
    var t = e.i(136263),
        r = e.i(599543),
        n = e.i(48164);
    e.s(["useValueChanged", 0, function(e, o) {
        let i = t.useRef(e),
            s = (0, n.useStableCallback)(o);
        (0, r.useIsoLayoutEffect)(() => {
            i.current !== e && s(i.current)
        }, [e, s]), (0, r.useIsoLayoutEffect)(() => {
            i.current = e
        }, [e])
    }])
}, 947208, e => {
    "use strict";
    e.s(["getDefaultLabelId", 0, function(e) {
        return null == e ? void 0 : `${e}-label`
    }, "resolveAriaLabelledBy", 0, function(e, t) {
        return e ? ? t
    }])
}, 544570, e => {
    "use strict";
    e.s(["addEventListener", 0, function(e, t, r, n) {
        return e.addEventListener(t, r, n), () => {
            e.removeEventListener(t, r, n)
        }
    }])
}, 521498, e => {
    "use strict";
    e.s(["ownerDocument", 0, function(e) {
        return e ? .ownerDocument || document
    }])
}, 903277, e => {
    "use strict";
    e.s([], 253008), e.i(253008);
    let {
        userAgent: t,
        platform: r,
        maxTouchPoints: n
    } = "u" < typeof navigator ? {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    } : {
        userAgent: navigator.userAgent,
        platform: navigator.platform ? ? "",
        maxTouchPoints: navigator.maxTouchPoints ? ? 0
    }, o = t.toLowerCase(), i = r.toLowerCase(), s = /^i(os$|p)/.test(i) || "macintel" === i && n > 1, l = "android", u = i === l || o.includes(l), a = !s && i.startsWith("mac"), c = i.startsWith("win"), d = !u && /^(linux|chrome os)/.test(i), f = a || s;
    e.s(["android", 0, u, "apple", 0, f, "ios", 0, s, "linux", 0, d, "mac", 0, a, "windows", 0, c], 37657);
    var C = e.i(37657);
    let h = "u" > typeof CSS && !!CSS.supports ? .("-webkit-backdrop-filter:none"),
        g = !h && o.includes("firefox"),
        p = !h && o.includes("chrom");
    e.s(["blink", 0, p, "gecko", 0, g, "webkit", 0, h], 320340);
    var v = e.i(320340);
    e.s(["voiceOver", 0, f], 782004);
    var m = e.i(782004);
    let b = /jsdom|happydom/.test(o);
    e.s(["jsdom", 0, b], 461686);
    var L = e.i(461686);
    e.s(["engine", 0, v, "env", 0, L, "os", 0, C, "screenReader", 0, m], 796303);
    var x = e.i(796303);
    e.s(["platform", 0, x], 903277)
}, 293035, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263);
    e.s(["useControlled", 0, function({
        controlled: e,
        default: r,
        name: n,
        state: o = "value"
    }) {
        let {
            current: i
        } = t.useRef(void 0 !== e), [s, l] = t.useState(r), u = t.useCallback(e => {
            i || l(e)
        }, []);
        return [i ? e : s, u]
    }])
}, 822758, e => {
    "use strict";
    var t = e.i(599543),
        r = e.i(591273);

    function n(e) {
        let t = {
            current: e,
            next: e,
            effect: () => {
                t.current = t.next
            }
        };
        return t
    }
    e.s(["useValueAsRef", 0, function(e) {
        let o = (0, r.useRefWithInit)(n, e).current;
        return o.next = e, (0, t.useIsoLayoutEffect)(o.effect), o
    }])
}, 617674, e => {
    "use strict";
    let t = {
            clipPath: "inset(50%)",
            overflow: "hidden",
            whiteSpace: "nowrap",
            border: 0,
            padding: 0,
            width: 1,
            height: 1,
            margin: -1
        },
        r = { ...t,
            position: "fixed",
            top: 0,
            left: 0
        },
        n = { ...t,
            position: "absolute"
        };
    e.s(["visuallyHidden", 0, r, "visuallyHiddenInput", 0, n])
}, 294997, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        bindSnapshot: function() {
            return a
        },
        createAsyncLocalStorage: function() {
            return u
        },
        createSnapshot: function() {
            return c
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let i = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
        value: "E504",
        enumerable: !1,
        configurable: !0
    });
    class s {
        disable() {
            throw i
        }
        getStore() {}
        run() {
            throw i
        }
        exit() {
            throw i
        }
        enterWith() {
            throw i
        }
        static bind(e) {
            return e
        }
    }
    let l = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

    function u() {
        return l ? new l : new s
    }

    function a(e) {
        return l ? l.bind(e) : s.bind(e)
    }

    function c() {
        return l ? l.snapshot() : function(e, ...t) {
            return e(...t)
        }
    }
}, 625300, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workAsyncStorageInstance", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = (0, e.r(294997).createAsyncLocalStorage)()
}, 913883, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "workAsyncStorage", {
        enumerable: !0,
        get: function() {
            return n.workAsyncStorageInstance
        }
    });
    let n = e.r(625300)
}, 101077, (e, t, r) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 579467, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(852447);

    function o({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 649630, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(52644),
        o = e.r(136263),
        i = e.r(579467),
        s = e.r(381898);

    function l(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let u = {
            loader: () => Promise.resolve(l(() => null)),
            loading: null,
            ssr: !0
        },
        a = function(e) {
            let t = { ...u,
                    ...e
                },
                r = (0, o.lazy)(() => t.loader().then(l)),
                a = t.loading;

            function c(e) {
                let l = a ? (0, n.jsx)(a, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    u = !t.ssr || !!t.loading,
                    c = u ? o.Suspense : o.Fragment,
                    d = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["u" < typeof window ? (0, n.jsx)(s.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, { ...e
                        })]
                    }) : (0, n.jsx)(i.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, { ...e
                        })
                    });
                return (0, n.jsx)(c, { ...u ? {
                        fallback: l
                    } : {},
                    children: d
                })
            }
            return c.displayName = "LoadableComponent", c
        }
}, 861895, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(836437)._(e.r(649630));

    function o(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let o = { ...r,
            ...t
        };
        return (0, n.default)({ ...o,
            modules: o.loadableGenerated ? .modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 381898, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(52644),
        o = e.r(635179),
        i = e.r(913883),
        s = e.r(101077),
        l = e.r(75111);

    function u({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = i.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let a = (0, l.getAssetTokenQuery)();
        return (0, n.jsx)(n.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/next_assets/${(0,s.encodeURIPath)(e)}${a}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, o.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 10171, (e, t, r) => {
    "use strict";
    var n = e.r(136263),
        o = "function" == typeof Object.is ? Object.is : function(e, t) {
            return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
        },
        i = n.useState,
        s = n.useEffect,
        l = n.useLayoutEffect,
        u = n.useDebugValue;

    function a(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var r = t();
            return !o(e, r)
        } catch (e) {
            return !0
        }
    }
    var c = "u" < typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
        return t()
    } : function(e, t) {
        var r = t(),
            n = i({
                inst: {
                    value: r,
                    getSnapshot: t
                }
            }),
            o = n[0].inst,
            c = n[1];
        return l(function() {
            o.value = r, o.getSnapshot = t, a(o) && c({
                inst: o
            })
        }, [e, r, t]), s(function() {
            return a(o) && c({
                inst: o
            }), e(function() {
                a(o) && c({
                    inst: o
                })
            })
        }, [e]), u(r), r
    };
    r.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
}, 118850, (e, t, r) => {
    "use strict";
    e.i(301016), t.exports = e.r(10171)
}, 376062, e => {
    "use strict";
    var t = e.i(52644);
    e.s(["AspectRatioIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.75,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("rect", {
                height: "14",
                rx: "3",
                width: "18",
                x: "3",
                y: "5"
            }), (0, t.jsx)("path", {
                d: "M11 8H7v4"
            }), (0, t.jsx)("path", {
                d: "M13 16h4v-4"
            })]
        })
    }, "CheckCircleFillIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: (0, t.jsx)("path", {
                d: "M12.002 1C18.0769 1.0002 23.002 5.92499 23.002 12C23.0018 18.0748 18.0768 22.9998 12.002 23C5.92694 23 1.00215 18.075 1.00195 12C1.00195 5.92487 5.92682 1 12.002 1ZM16.0615 7.9668C15.6046 7.65698 14.983 7.77573 14.6729 8.23242L10.6514 14.1572L8.75488 11.9756C8.39252 11.5592 7.7604 11.5149 7.34375 11.877C6.92722 12.2393 6.88312 12.8714 7.24512 13.2881L9.99512 16.4502C10.1987 16.6842 10.5 16.8104 10.8096 16.792C11.1192 16.7734 11.4029 16.6121 11.5771 16.3555L16.3271 9.35547C16.6371 8.8986 16.5182 8.27697 16.0615 7.9668Z"
            })
        })
    }, "CheckIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
                clipRule: "evenodd",
                d: "M12.3106 2.86512C12.5691 2.48449 13.0874 2.38544 13.4682 2.64377C13.8489 2.90222 13.9479 3.42054 13.6895 3.80131L7.35616 13.1346C7.21098 13.3484 6.97481 13.483 6.71683 13.4985C6.45866 13.514 6.20751 13.4085 6.03778 13.2134L2.37108 8.99724C2.06921 8.64997 2.10589 8.12344 2.45312 7.82147C2.80037 7.51959 3.32691 7.55633 3.62891 7.9035L6.58467 11.3026L12.3106 2.86512Z",
                fillRule: "evenodd"
            })
        })
    }, "CheckboxCheckIcon", 0, function() {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            fill: "none",
            height: "12",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 12 12",
            width: "12",
            children: (0, t.jsx)("path", {
                d: "M2.5 6.25 5 8.75 9.5 3.25"
            })
        })
    }, "ChevronDownIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            height: "16",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 16 16",
            width: "16",
            children: (0, t.jsx)("path", {
                d: "m4 6 4 4 4-4"
            })
        })
    }, "ChevronLeftIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            height: "12",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 12 12",
            width: "12",
            children: (0, t.jsx)("path", {
                d: "M8 2.5 4 6 8 9.5"
            })
        })
    }, "ChevronRightIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            height: "12",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 12 12",
            width: "12",
            children: (0, t.jsx)("path", {
                d: "M4 2.5 8 6 4 9.5"
            })
        })
    }, "ChevronUpIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            height: "16",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 16 16",
            width: "16",
            children: (0, t.jsx)("path", {
                d: "m4 10 4-4 4 4"
            })
        })
    }, "CloseIcon", 0, function({
        className: e,
        strokeWidth: r = 1.5
    } = {}) {
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: r,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
                d: "M18 6 6 18"
            }), (0, t.jsx)("path", {
                d: "m6 6 12 12"
            })]
        })
    }, "ExclamationCircleIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("path", {
                d: "M21.0016 11.9996C21.0016 16.9702 16.9721 20.9996 12.0016 20.9996C7.031 20.9996 3.00156 16.9702 3.00156 11.9996C3.00156 7.02905 7.031 2.99961 12.0016 2.99961C16.9721 2.99961 21.0016 7.02905 21.0016 11.9996ZM23.0016 11.9996C23.0016 5.92448 18.0767 0.999609 12.0016 0.999609C5.92643 0.999609 1.00156 5.92448 1.00156 11.9996C1.00156 18.0747 5.92643 22.9996 12.0016 22.9996C18.0767 22.9996 23.0016 18.0747 23.0016 11.9996Z"
            }), (0, t.jsx)("path", {
                d: "M12 14.75C12.6904 14.75 13.25 15.3096 13.25 16C13.25 16.6904 12.6904 17.25 12 17.25C11.3096 17.25 10.75 16.6904 10.75 16C10.75 15.3096 11.3096 14.75 12 14.75ZM12 6.75C12.6904 6.75 13.25 7.30964 13.25 8V12.5C13.25 13.1904 12.6904 13.75 12 13.75C11.3096 13.75 10.75 13.1904 10.75 12.5V8C10.75 7.30964 11.3096 6.75 12 6.75Z"
            })]
        })
    }, "MentionIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
                d: "M8 0.666667C6.05508 0.666667 4.18982 1.43928 2.81455 2.81455C1.43928 4.18982 0.666667 6.05508 0.666667 8C0.666667 9.94492 1.43928 11.8102 2.81455 13.1855C4.18982 14.5607 6.05508 15.3333 8 15.3333C9.51216 15.3333 11.1024 14.8764 12.2533 14.1111C12.4334 13.9914 12.5586 13.8051 12.6013 13.5932C12.644 13.3812 12.6008 13.161 12.4811 12.9809C12.3615 12.8008 12.1752 12.6756 11.9632 12.6329C11.7513 12.5902 11.531 12.6334 11.3509 12.7531C10.4682 13.3391 9.18556 13.7037 8 13.7037C6.87191 13.7037 5.76916 13.3692 4.83119 12.7425C3.89322 12.1157 3.16216 11.2249 2.73046 10.1827C2.29876 9.1405 2.18581 7.99367 2.40589 6.88726C2.62597 5.78085 3.16919 4.76455 3.96687 3.96687C4.76455 3.16919 5.78085 2.62597 6.88726 2.40589C7.99367 2.18581 9.1405 2.29876 10.1827 2.73046C11.2249 3.16216 12.1157 3.89322 12.7425 4.83119C13.3692 5.76916 13.7037 6.87191 13.7037 8C13.7037 8.6308 13.5903 9.15975 13.3852 9.49043C13.206 9.77833 12.9778 9.90123 12.6173 9.90123C12.2567 9.90123 12.0286 9.77833 11.8493 9.49043C11.6456 9.15975 11.5309 8.6308 11.5309 8V5.28395C11.5308 5.08844 11.4605 4.89945 11.3327 4.75147C11.2049 4.6035 11.0282 4.50641 10.8348 4.47792C10.6414 4.44942 10.4441 4.49143 10.2791 4.59628C10.1141 4.70112 9.99226 4.86181 9.93586 5.04901C9.37564 4.6809 8.72219 4.47986 8.05193 4.46942C7.38166 4.45898 6.72228 4.63955 6.15085 4.99003C5.57943 5.34051 5.11958 5.84642 4.82507 6.4486C4.53056 7.05079 4.41355 7.72437 4.48774 8.3906C4.56192 9.05683 4.82423 9.68817 5.24399 10.2108C5.66374 10.7335 6.22361 11.1258 6.85814 11.342C7.49266 11.5582 8.17562 11.5893 8.82717 11.4317C9.47872 11.2741 10.0719 10.9342 10.5375 10.4519C11.008 11.1438 11.7217 11.5309 12.6173 11.5309C14.2924 11.5309 15.3333 10.1783 15.3333 8C15.3312 6.05574 14.5579 4.19173 13.1831 2.81693C11.8083 1.44213 9.94426 0.668823 8 0.666667ZM8 9.90123C7.62397 9.90123 7.25639 9.78973 6.94373 9.58082C6.63107 9.37191 6.38739 9.07498 6.24349 8.72757C6.09959 8.38017 6.06194 7.99789 6.1353 7.62909C6.20866 7.26028 6.38973 6.92152 6.65562 6.65562C6.92152 6.38973 7.26028 6.20866 7.62909 6.1353C7.99789 6.06194 8.38017 6.09959 8.72757 6.24349C9.07498 6.38739 9.37191 6.63107 9.58082 6.94373C9.78973 7.25639 9.90123 7.62397 9.90123 8C9.90123 8.50424 9.70093 8.98783 9.34438 9.34438C8.98783 9.70093 8.50424 9.90123 8 9.90123Z"
            })
        })
    }, "MinusIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
                d: "M3.5 8h9"
            })
        })
    }, "PenSparkleFillIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 16 16",
            children: (0, t.jsx)("path", {
                d: "M11.6002 4.81836C11.7644 4.81841 11.9273 4.85072 12.0787 4.91406C12.2303 4.97744 12.3678 5.07047 12.483 5.1875H12.4823L13.6255 6.33203L13.7075 6.42188C13.7853 6.51534 13.8491 6.61993 13.8963 6.73242C13.9592 6.88242 13.992 7.04376 13.992 7.20638C13.992 7.36902 13.9592 7.53032 13.8963 7.68034C13.8338 7.82946 13.7417 7.96431 13.6268 8.07813L13.6275 8.07878L8.03141 13.6758C7.97592 13.7313 7.90257 13.7654 7.82439 13.7721L5.11685 14.0052C5.01881 14.0137 4.9221 13.9785 4.85254 13.9089C4.78304 13.8393 4.74769 13.7425 4.75619 13.6445L4.99056 10.9538L5.00097 10.8958C5.01626 10.8392 5.04662 10.7872 5.08886 10.7454L10.7168 5.1875C10.832 5.07051 10.9696 4.97743 11.1211 4.91406C11.2726 4.85071 11.4359 4.81836 11.6002 4.81836ZM4.91829 1.93359C4.99931 1.93355 5.07136 1.98553 5.09667 2.0625L5.69429 3.87956C5.71562 3.94542 5.75275 4.0051 5.80171 4.05404C5.85069 4.10298 5.91029 4.14018 5.97618 4.16146H5.97683L7.78923 4.75521C7.86614 4.7804 7.91862 4.85203 7.91878 4.93294C7.91883 5.01387 7.86669 5.08593 7.78989 5.11133L5.97292 5.70898H5.97227C5.9064 5.73032 5.84674 5.76743 5.7978 5.81641C5.74891 5.86535 5.71232 5.92506 5.69104 5.99089L5.69039 5.99154L5.09667 7.80404C5.07146 7.88099 4.9999 7.93348 4.91894 7.93359C4.83801 7.93364 4.76595 7.88152 4.74057 7.80469L4.14294 5.98763V5.98698C4.12164 5.92122 4.08504 5.86139 4.03618 5.8125C3.9872 5.76356 3.92694 5.72701 3.86106 5.70573L3.86041 5.70508L2.048 5.11133C1.97107 5.08611 1.91922 5.01455 1.9191 4.93359C1.91906 4.85257 1.97104 4.78052 2.048 4.75521L3.86496 4.15755C3.9307 4.13626 3.99055 4.09962 4.03943 4.05078C4.08837 4.0018 4.12557 3.94154 4.14685 3.87565V3.875L4.74057 2.0625C4.76576 1.98559 4.83739 1.93376 4.91829 1.93359Z"
            })
        })
    }, "PlusIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 16 16",
            children: [(0, t.jsx)("path", {
                d: "M8 3.5v9"
            }), (0, t.jsx)("path", {
                d: "M3.5 8h9"
            })]
        })
    }, "ResizeGripIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            height: "18",
            viewBox: "0 0 18 18",
            width: "18",
            children: [(0, t.jsx)("path", {
                d: "M15 6C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H15Z"
            }), (0, t.jsx)("path", {
                d: "M13 10C13.5523 10 14 10.4477 14 11C14 11.5523 13.5523 12 13 12H5C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H13Z"
            })]
        })
    }, "SearchIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: (0, t.jsx)("path", {
                d: "M3.33822 3.33822C6.122 0.554434 10.635 0.554434 13.4188 3.33822C16.003 5.92263 16.1863 9.99591 13.9722 12.7938L18.5059 17.3275C18.8313 17.6529 18.8313 18.1804 18.5059 18.5059C18.1804 18.8313 17.6529 18.8313 17.3275 18.5059L12.7938 13.9722C9.99591 16.1863 5.92263 16.003 3.33822 13.4188C0.554434 10.635 0.554434 6.122 3.33822 3.33822ZM12.2404 4.5166C10.1075 2.38369 6.64951 2.38369 4.5166 4.5166C2.38369 6.64951 2.38369 10.1075 4.5166 12.2404C6.64952 14.3731 10.1075 14.3732 12.2404 12.2404C14.3732 10.1075 14.3731 6.64952 12.2404 4.5166Z"
            })
        })
    }, "UserIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "none",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            viewBox: "0 0 24 24",
            children: [(0, t.jsx)("circle", {
                cx: "12",
                cy: "8",
                r: "4"
            }), (0, t.jsx)("path", {
                d: "M4 21a8 8 0 0 1 16 0"
            })]
        })
    }, "XCircleFillIcon", 0, function({
        className: e
    } = {}) {
        return (0, t.jsx)("svg", {
            "aria-hidden": "true",
            className: e,
            fill: "currentColor",
            viewBox: "0 0 20 20",
            children: (0, t.jsx)("path", {
                d: "M10 0.833333C15.0626 0.833333 19.1667 4.93739 19.1667 10C19.1667 15.0626 15.0626 19.1667 10 19.1667C4.93739 19.1667 0.833333 15.0626 0.833333 10C0.833333 4.93739 4.93739 0.833333 10 0.833333ZM12.8084 7.04753C12.483 6.72219 11.9555 6.72223 11.63 7.04753L9.92839 8.74919L8.22591 7.04753C7.90047 6.72222 7.37292 6.72214 7.04753 7.04753C6.72213 7.37292 6.72222 7.90046 7.04753 8.22591L8.74919 9.92839L7.04753 11.63C6.72211 11.9555 6.72214 12.483 7.04753 12.8084C7.37296 13.1339 7.90048 13.1339 8.22591 12.8084L9.92839 11.1068L11.63 12.8084C11.9555 13.1339 12.483 13.1339 12.8084 12.8084C13.1339 12.483 13.1339 11.9555 12.8084 11.63L11.1068 9.92839L12.8084 8.22591C13.1337 7.90046 13.1338 7.37292 12.8084 7.04753Z"
            })
        })
    }])
}]);