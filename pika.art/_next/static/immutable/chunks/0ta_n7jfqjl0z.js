(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 906605, 452104, 781583, 997304, e => {
    "use strict";
    e.s([], 691616), e.i(691616);
    var t, r = e.i(136263),
        n = e.i(521498),
        i = e.i(293035),
        l = e.i(48164),
        u = e.i(822758),
        a = e.i(599543),
        o = e.i(276444),
        s = e.i(828539),
        c = e.i(230375),
        d = e.i(782655),
        f = e.i(166861),
        p = e.i(562736),
        v = e.i(83054),
        b = e.i(905167),
        h = e.i(642920),
        m = e.i(479039),
        g = e.i(313587),
        y = e.i(307554),
        x = e.i(947208);

    function E(e, t) {
        return e - t
    }

    function R(e, t, r, n, i, l) {
        var u;
        let a, o = e;
        return o = (0, f.clamp)(o, r, n), i && (u = (0, f.clamp)(o, l[t - 1] ? ? -1 / 0, l[t + 1] ? ? 1 / 0), (a = l.slice())[t] = u, o = a.sort(E)), o
    }

    function S(e, t, r) {
        return !Array.isArray(e) || Math.min(...e.reduce((e, t, r, n) => (r === n.length - 1 || e.push(Math.abs(t - n[r + 1])), e), [])) >= t * r
    }
    let w = {
        activeThumbIndex: () => null,
        max: () => null,
        min: () => null,
        minStepsBetweenValues: () => null,
        step: () => null,
        values: () => null,
        ...e.i(509456).fieldValidityMapping
    };
    var C = e.i(335309);
    let A = r.createContext(void 0);

    function I() {
        let e = r.useContext(A);
        if (void 0 === e) throw Error((0, C.default)(62));
        return e
    }
    var P = e.i(587758),
        k = e.i(52644);
    let N = r.forwardRef(function(e, t) {
        let {
            "aria-labelledby": C,
            className: I,
            defaultValue: N,
            disabled: M = !1,
            id: T,
            format: L,
            largeStep: D = 10,
            locale: F,
            render: V,
            max: O = 100,
            min: $ = 0,
            minStepsBetweenValues: B = 0,
            form: W,
            name: j,
            onValueChange: H,
            onValueCommitted: _,
            orientation: q = "horizontal",
            step: K = 1,
            thumbCollisionBehavior: z = "push",
            thumbAlignment: U = "center",
            value: G,
            style: Y,
            ...X
        } = e, J = (0, c.useBaseUiId)(T), Q = (0, x.getDefaultLabelId)(J), Z = (0, l.useStableCallback)(H), ee = (0, l.useStableCallback)(_), {
            clearErrors: et
        } = (0, g.useFormContext)(), {
            state: er,
            disabled: en,
            name: ei,
            setTouched: el,
            setDirty: eu,
            validityData: ea,
            validation: eo
        } = (0, h.useFieldRootContext)(), {
            labelId: es
        } = (0, y.useLabelableContext)(), [ec, ed] = r.useState(), ef = C ? ? (0, x.resolveAriaLabelledBy)(es, ec), ep = en || M, ev = ei ? ? j, [eb, eh] = (0, i.useControlled)({
            controlled: G,
            default: N ? ? $,
            name: "Slider"
        }), em = r.useRef(null), eg = r.useRef(null), ey = r.useRef([]), ex = r.useRef(null), eE = r.useRef(null), eR = r.useRef(-1), eS = r.useRef(null), ew = r.useRef("none"), eC = (0, u.useValueAsRef)(L), [eA, eI] = r.useState(-1), [eP, ek] = r.useState(-1), [eN, eM] = r.useState(!1), [eT, eL] = r.useState(() => new Map), [eD, eF] = r.useState([void 0, void 0]), eV = (0, l.useStableCallback)(e => {
            eI(e), -1 !== e && ek(e)
        });
        (0, m.useRegisterFieldControl)(eo.inputRef, J, eb, void 0, !ep, j), (0, s.useValueChanged)(eb, () => {
            et(ev), eo.change(eb);
            let e = ea.initialValue;
            eu(Array.isArray(eb) && Array.isArray(e) ? !(0, p.areArraysEqual)(eb, e) : eb !== e)
        });
        let eO = (0, l.useStableCallback)(e => {
                e && (eg.current = e)
            }),
            e$ = Array.isArray(eb),
            eB = r.useMemo(() => e$ ? eb.slice().sort(E) : [(0, f.clamp)(eb, $, O)], [O, $, e$, eb]),
            eW = (0, l.useStableCallback)((e, t) => {
                if (Number.isNaN(e) || ("number" == typeof e && "number" == typeof eb ? e === eb : !!(Array.isArray(e) && Array.isArray(eb)) && (0, p.areArraysEqual)(e, eb))) return !1;
                let r = t ? ? (0, o.createChangeEventDetails)(P.REASONS.none, void 0, void 0, {
                        activeThumbIndex: -1
                    }),
                    n = r.event,
                    i = new(n.constructor ? ? Event)(n.type, n);
                return Object.defineProperty(i, "target", {
                    writable: !0,
                    value: {
                        value: e,
                        name: ev
                    }
                }), r.event = i, Z(e, r), !r.isCanceled && (ew.current = r.reason, eh(e), !0)
            }),
            ej = (0, l.useStableCallback)((e, t, r) => {
                let n = R(e, t, $, O, e$, eB);
                if (S(n, K, B)) {
                    let e = "key" in r ? P.REASONS.keyboard : P.REASONS.inputChange,
                        i = eW(n, (0, o.createChangeEventDetails)(e, r.nativeEvent, void 0, {
                            activeThumbIndex: t
                        }));
                    el(!0), i && ee(n, (0, o.createGenericEventDetails)(e, r.nativeEvent))
                }
            });
        (0, a.useIsoLayoutEffect)(() => {
            let e = (0, v.activeElement)((0, n.ownerDocument)(em.current));
            ep && (0, v.contains)(em.current, e) && e.blur()
        }, [ep]), ep && -1 !== eA && eV(-1);
        let eH = r.useMemo(() => ({ ...er,
                activeThumbIndex: eA,
                disabled: ep,
                dragging: eN,
                orientation: q,
                max: O,
                min: $,
                minStepsBetweenValues: B,
                step: K,
                values: eB
            }), [er, eA, ep, eN, O, $, B, q, K, eB]),
            e_ = r.useMemo(() => ({
                active: eA,
                controlRef: eg,
                disabled: ep,
                dragging: eN,
                validation: eo,
                formatOptionsRef: eC,
                handleInputChange: ej,
                indicatorPosition: eD,
                inset: "center" !== U,
                labelId: ef,
                rootLabelId: Q,
                largeStep: D,
                lastUsedThumbIndex: eP,
                lastChangeReasonRef: ew,
                form: W,
                locale: F,
                max: O,
                min: $,
                minStepsBetweenValues: B,
                name: ev,
                onValueCommitted: ee,
                orientation: q,
                pressedInputRef: ex,
                pressedThumbCenterOffsetRef: eE,
                pressedThumbIndexRef: eR,
                pressedValuesRef: eS,
                registerFieldControlRef: eO,
                renderBeforeHydration: "edge" === U,
                setActive: eV,
                setDragging: eM,
                setIndicatorPosition: eF,
                setLabelId: ed,
                setValue: eW,
                state: eH,
                step: K,
                thumbCollisionBehavior: z,
                thumbMap: eT,
                thumbRefs: ey,
                values: eB
            }), [eA, eg, ef, Q, ep, eN, eo, eC, ej, eD, D, eP, ew, W, F, O, $, B, ev, ee, q, ex, eE, eR, eS, eO, eV, eM, eF, ed, eW, eH, K, z, U, eT, ey, eB]),
            eq = (0, d.useRenderElement)("div", e, {
                state: eH,
                ref: [t, em],
                props: [{
                    "aria-labelledby": ef,
                    id: J,
                    role: "group"
                }, X, e => eo.getValidationProps(ep, e)],
                stateAttributesMapping: w
            });
        return (0, k.jsx)(A.Provider, {
            value: e_,
            children: (0, k.jsx)(b.CompositeList, {
                elementsRef: ey,
                onMapChange: eL,
                children: eq
            })
        })
    });
    var M = e.i(92615),
        T = e.i(167301);
    let L = r.forwardRef(function(e, t) {
        let {
            render: r,
            className: i,
            style: l,
            ...u
        } = e;
        delete u.id;
        let {
            state: a,
            setLabelId: o,
            controlRef: s,
            rootLabelId: c
        } = I(), f = (0, T.useLabel)({
            id: c,
            setLabelId: o,
            focusControl: function(e, t) {
                if (t) {
                    let r = (0, n.ownerDocument)(e.currentTarget).getElementById(t);
                    if ((0, M.isHTMLElement)(r)) return void(0, T.focusElementWithVisible)(r)
                }
                let r = s.current ? .querySelectorAll('input[type="range"]'),
                    i = r ? .length === 1 ? r[0] : null;
                (0, M.isHTMLElement)(i) && (0, T.focusElementWithVisible)(i)
            }
        });
        return (0, d.useRenderElement)("div", e, {
            ref: t,
            state: a,
            props: [f, u],
            stateAttributesMapping: w
        })
    });
    var D = e.i(182663);
    let F = r.forwardRef(function(e, t) {
        let {
            "aria-live": n = "off",
            render: i,
            className: l,
            children: u,
            style: a,
            ...o
        } = e, {
            thumbMap: s,
            state: c,
            values: f,
            formatOptionsRef: p,
            locale: v
        } = I(), b = "";
        for (let e of s.values()) e ? .inputId && (b += `${e.inputId} `);
        let h = "" === b.trim() ? void 0 : b.trim(),
            m = r.useMemo(() => {
                let e = [];
                for (let t = 0; t < f.length; t += 1) e.push((0, D.formatNumber)(f[t], v, p.current ? ? void 0));
                return e
            }, [p, v, f]),
            g = f.map((e, t) => m[t] || e).join(" – ");
        return (0, d.useRenderElement)("output", e, {
            state: c,
            ref: t,
            props: [{
                "aria-live": n,
                children: "function" == typeof u ? u(m, f) : g,
                htmlFor: h
            }, o],
            stateAttributesMapping: w
        })
    });
    var V = e.i(544570),
        O = e.i(285182),
        $ = e.i(2063),
        B = e.i(986716);

    function W(e) {
        let t = e.getBoundingClientRect();
        return {
            x: (t.left + t.right) / 2,
            y: (t.top + t.bottom) / 2
        }
    }

    function j(e) {
        if (0 === e) return 0;
        if (1 > Math.abs(e)) {
            let t = e.toExponential().split("e-"),
                r = t[0].split(".")[1];
            return (r ? r.length : 0) + parseInt(t[1], 10)
        }
        let t = e.toString().split(".")[1];
        return t ? t.length : 0
    }

    function H(e, t, r) {
        return Number((Math.round((e - r) / t) * t + r).toFixed(Math.max(j(t), j(r))))
    }

    function _({
        values: e,
        index: t,
        nextValue: r,
        min: n,
        max: i,
        step: l,
        minStepsBetweenValues: u,
        initialValues: a
    }) {
        if (0 === e.length) return [];
        let o = e.slice(),
            s = l * u,
            c = o.length - 1,
            d = a ? ? e;
        o[t] = (0, f.clamp)(r, n + t * s, i - (c - t) * s);
        for (let e = t + 1; e <= c; e += 1) {
            let t = o[e - 1] + s,
                r = i - (c - e) * s,
                n = d[e] ? ? o[e],
                l = Math.max(o[e], t);
            n < l && (l = Math.max(n, t)), o[e] = (0, f.clamp)(l, t, r)
        }
        for (let e = t - 1; e >= 0; e -= 1) {
            let t = o[e + 1] - s,
                r = n + e * s,
                i = d[e] ? ? o[e],
                l = Math.min(o[e], t);
            i > l && (l = Math.min(i, t)), o[e] = (0, f.clamp)(l, r, t)
        }
        for (let e = 0; e <= c; e += 1) o[e] = Number(o[e].toFixed(12));
        return o
    }

    function q(e, t) {
        if (null != t.current && e.changedTouches) {
            for (let r = 0; r < e.changedTouches.length; r += 1) {
                let n = e.changedTouches[r];
                if (n.identifier === t.current) return {
                    x: n.clientX,
                    y: n.clientY
                }
            }
            return null
        }
        return {
            x: e.clientX,
            y: e.clientY
        }
    }
    let K = r.forwardRef(function(e, t) {
            let {
                render: i,
                className: a,
                style: s,
                ...c
            } = e, {
                disabled: p,
                dragging: b,
                inset: h,
                lastChangeReasonRef: m,
                max: g,
                min: y,
                minStepsBetweenValues: x,
                onValueCommitted: E,
                orientation: R,
                pressedInputRef: C,
                pressedThumbCenterOffsetRef: A,
                pressedThumbIndexRef: k,
                pressedValuesRef: N,
                registerFieldControlRef: T,
                renderBeforeHydration: L,
                setActive: D,
                setDragging: F,
                setValue: j,
                state: K,
                step: z,
                thumbCollisionBehavior: U,
                thumbRefs: G,
                values: Y
            } = I(), X = (0, B.useDirection)(), J = Y.length > 1, Q = "vertical" === R, Z = r.useRef(null), ee = r.useRef(null), et = (0, l.useStableCallback)(e => {
                e && null == ee.current && (ee.current = (0, O.ownerWindow)(e).getComputedStyle(e))
            }), er = r.useRef(null), en = r.useRef(0), ei = r.useRef(0), el = r.useRef(null), eu = (0, u.useValueAsRef)(Y);

            function ea(e) {
                k.current !== e && (k.current = e);
                let t = G.current[e];
                if (!t) {
                    A.current = null, C.current = null;
                    return
                }
                C.current = t.querySelector('input[type="range"]')
            }

            function eo() {
                k.current = -1, A.current = null, C.current = null
            }

            function es(e) {
                return !!(0, M.isElement)(e) && G.current.some(t => !!(0, M.isElement)(t) && !!(0, v.contains)(t, e) && t.querySelector('input[type="range"]') ? .disabled === !0)
            }

            function ec(e) {
                let t = Z.current,
                    r = k.current;
                if (!t || !J && (r < 0 || r >= Y.length)) return null;
                let {
                    width: n,
                    height: i,
                    bottom: l,
                    left: u,
                    right: a
                } = t.getBoundingClientRect(), o = function(e, t) {
                    if (!e) return {
                        start: 0,
                        end: 0
                    };

                    function r(e) {
                        let t = null != e ? parseFloat(e) : 0;
                        return Number.isNaN(t) ? 0 : t
                    }
                    let n = t ? "Top" : "InlineStart",
                        i = t ? "Bottom" : "InlineEnd";
                    return {
                        start: r(e[`border${n}Width`]) + r(e[`padding${n}`]),
                        end: r(e[`border${i}Width`]) + r(e[`padding${i}`])
                    }
                }(ee.current, Q), s = ei.current, c = (Q ? i : n) - o.start - o.end - 2 * s, d = A.current ? ? 0, p = e.x - d, v = e.y - d, b = Q ? l - v - o.end : ("rtl" === X ? a - p : p - u) - o.start, h = (g - y) * (0, f.clamp)((b - s) / c, 0, 1) + y;
                return (h = H(h, z, y), h = (0, f.clamp)(h, y, g), J) ? r < 0 ? null : function({
                    behavior: e,
                    values: t,
                    currentValues: r,
                    initialValues: n,
                    pressedIndex: i,
                    nextValue: l,
                    min: u,
                    max: a,
                    step: o,
                    minStepsBetweenValues: s
                }) {
                    let c = r ? ? t,
                        d = n ? ? t;
                    if (!(c.length > 1)) return {
                        value: l,
                        thumbIndex: 0,
                        didSwap: !1
                    };
                    let p = o * s;
                    switch (e) {
                        case "swap":
                            {
                                let e = c[i],
                                    t = c.slice(),
                                    r = t[i - 1],
                                    n = t[i + 1],
                                    v = null != r ? r + p : u,
                                    b = null != n ? n - p : a,
                                    h = Number((0, f.clamp)(l, v, b).toFixed(12));t[i] = h;
                                let m = l > e,
                                    g = l < e,
                                    y = m && null != n && l >= n - 1e-7,
                                    x = g && null != r && l <= r + 1e-7;
                                if (!y && !x) return {
                                    value: t,
                                    thumbIndex: i,
                                    didSwap: !1
                                };
                                let E = y ? i + 1 : i - 1,
                                    R = t.map((e, t) => {
                                        if (t === i) return h;
                                        let r = d[t];
                                        return null != r ? r : c[t]
                                    }),
                                    S = l;S = y ? Math.max(l, t[E]) : Math.min(l, t[E]);
                                let w = _({
                                        values: t,
                                        index: E,
                                        nextValue: S,
                                        min: u,
                                        max: a,
                                        step: o,
                                        minStepsBetweenValues: s,
                                        initialValues: R
                                    }),
                                    C = y ? E - 1 : E + 1;
                                if (C >= 0 && C < w.length) {
                                    let e = w[C - 1],
                                        t = w[C + 1],
                                        r = null != e ? e + p : u;
                                    r = Math.max(r, u + C * p);
                                    let n = null != t ? t - p : a;
                                    n = Math.min(n, a - (w.length - 1 - C) * p);
                                    let i = (0, f.clamp)(h, r, n);
                                    w[C] = Number(i.toFixed(12))
                                }
                                return {
                                    value: w,
                                    thumbIndex: E,
                                    didSwap: !0
                                }
                            }
                        case "push":
                            return {
                                value: _({
                                    values: c,
                                    index: i,
                                    nextValue: l,
                                    min: u,
                                    max: a,
                                    step: o,
                                    minStepsBetweenValues: s
                                }),
                                thumbIndex: i,
                                didSwap: !1
                            };
                        default:
                            {
                                let e = c.slice(),
                                    t = e[i - 1],
                                    r = e[i + 1],
                                    n = null != t ? t + p : u,
                                    o = null != r ? r - p : a,
                                    s = (0, f.clamp)(l, n, o);
                                return e[i] = Number(s.toFixed(12)),
                                {
                                    value: e,
                                    thumbIndex: i,
                                    didSwap: !1
                                }
                            }
                    }
                }({
                    behavior: U,
                    values: Y,
                    currentValues: eu.current ? ? Y,
                    initialValues: N.current,
                    pressedIndex: r,
                    nextValue: h,
                    min: y,
                    max: g,
                    step: z,
                    minStepsBetweenValues: x
                }) : {
                    value: h,
                    thumbIndex: r,
                    didSwap: !1
                }
            }

            function ed(e) {
                N.current = J ? Y.slice() : null, el.current = null, eu.current = Y;
                let t = k.current,
                    r = t;
                if (t > -1 && t < Y.length) {
                    if (Y[t] === g) {
                        let e = t;
                        for (; e > 0 && Y[e - 1] === g;) e -= 1;
                        r = e
                    }
                } else {
                    let t, n = Q ? "y" : "x";
                    r = -1;
                    for (let i = 0; i < G.current.length; i += 1) {
                        let l = G.current[i];
                        if ((0, M.isElement)(l) && !l.querySelector('input[type="range"]') ? .disabled) {
                            let u = W(l),
                                a = Math.abs(e[n] - u[n]);
                            (void 0 === t || a <= t) && (r = i, t = a)
                        }
                    }
                }
                if (r > -1 && r !== t && ea(r), h) {
                    let e = G.current[r];
                    (0, M.isElement)(e) && (ei.current = e.getBoundingClientRect()[Q ? "height" : "width"] / 2)
                }
            }

            function ef(e) {
                let t = G.current ? .[e] ? .querySelector('input[type="range"]');
                t && t.focus({
                    preventScroll: !0,
                    focusVisible: !1
                })
            }

            function ep(e, t, r) {
                let n = j(e.value, (0, o.createChangeEventDetails)(t, r, void 0, {
                    activeThumbIndex: e.thumbIndex
                }));
                return n && (el.current = e.value, eu.current = Array.isArray(e.value) ? e.value : [e.value], e.didSwap && ea(e.thumbIndex)), n
            }
            let ev = (0, l.useStableCallback)(e => {
                    let t = q(e, er);
                    if (null == t) return;
                    if (en.current += 1, "pointermove" === e.type && 0 === e.buttons) return void eb(e);
                    let r = ec(t);
                    null != r && S(r.value, z, x) && (!b && en.current > 2 && F(!0), ep(r, P.REASONS.drag, e) && r.didSwap && ef(r.thumbIndex))
                }),
                eb = (0, l.useStableCallback)(e => {
                    if (D(-1), F(!1), C.current = null, A.current = null, null != el.current) {
                        let t = m.current;
                        E(el.current, (0, o.createGenericEventDetails)(t, e))
                    }
                    "pointerType" in e && Z.current ? .hasPointerCapture(e.pointerId) && Z.current ? .releasePointerCapture(e.pointerId), k.current = -1, er.current = null, N.current = null, el.current = null, em()
                }),
                eh = (0, l.useStableCallback)(e => {
                    if (p) return;
                    if (es((0, v.getTarget)(e))) return void eo();
                    let t = e.changedTouches[0];
                    null != t && (er.current = t.identifier);
                    let r = q(e, er);
                    if (null != r) {
                        ed(r);
                        let t = ec(r);
                        if (null == t) return;
                        ef(t.thumbIndex), ep(t, P.REASONS.trackPress, e) && t.didSwap && ef(t.thumbIndex)
                    }
                    en.current = 0;
                    let i = (0, n.ownerDocument)(Z.current);
                    i.addEventListener("touchmove", ev, {
                        passive: !0
                    }), i.addEventListener("touchend", eb, {
                        passive: !0
                    })
                }),
                em = (0, l.useStableCallback)(() => {
                    let e = (0, n.ownerDocument)(Z.current);
                    e.removeEventListener("pointermove", ev), e.removeEventListener("pointerup", eb), e.removeEventListener("touchmove", ev), e.removeEventListener("touchend", eb), N.current = null, el.current = null
                }),
                eg = (0, $.useAnimationFrame)();
            return r.useEffect(() => {
                let e = Z.current;
                if (!e) return () => em();
                let t = (0, V.addEventListener)(e, "touchstart", eh, {
                    passive: !0
                });
                return () => {
                    t(), eg.cancel(), em()
                }
            }, [em, eh, Z, eg]), r.useEffect(() => {
                p && em()
            }, [p, em]), (0, d.useRenderElement)("div", e, {
                state: K,
                ref: [t, T, Z, et],
                props: [{
                    "data-base-ui-slider-control": L ? "" : void 0,
                    onPointerDown(e) {
                        let t = Z.current,
                            r = (0, v.getTarget)(e.nativeEvent);
                        if (!t || p || e.defaultPrevented || !(0, M.isElement)(r) || 0 !== e.button) return;
                        if (es(r)) return void eo();
                        let i = q(e, er);
                        if (null != i) {
                            ed(i);
                            let r = ec(i);
                            if (null == r) return;
                            (0, v.contains)(G.current[r.thumbIndex], (0, v.activeElement)((0, n.ownerDocument)(t))) ? e.preventDefault(): eg.request(() => {
                                ef(r.thumbIndex)
                            }), F(!0), null == A.current && ep(r, P.REASONS.trackPress, e.nativeEvent) && r.didSwap && ef(r.thumbIndex)
                        }
                        e.nativeEvent.pointerId && t.setPointerCapture(e.nativeEvent.pointerId), en.current = 0;
                        let l = (0, n.ownerDocument)(Z.current);
                        l.addEventListener("pointermove", ev, {
                            passive: !0
                        }), l.addEventListener("pointerup", eb, {
                            once: !0
                        })
                    }
                }, c],
                stateAttributesMapping: w
            })
        }),
        z = r.forwardRef(function(e, t) {
            let {
                render: r,
                className: n,
                style: i,
                ...l
            } = e, {
                state: u
            } = I();
            return (0, d.useRenderElement)("div", e, {
                state: u,
                ref: t,
                props: [{
                    style: {
                        position: "relative"
                    }
                }, l],
                stateAttributesMapping: w
            })
        });
    var U = e.i(33609),
        G = e.i(617674),
        Y = e.i(222971),
        X = e.i(555071);

    function J(e, t, r) {
        return (e - t) * 100 / (r - t)
    }
    e.s(["valueToPercent", 0, J], 452104);
    var Q = e.i(858049),
        Z = e.i(471820),
        ee = e.i(340639),
        et = e.i(89676),
        er = e.i(135311);
    let en = ((t = {}).index = "data-index", t.dragging = "data-dragging", t.orientation = "data-orientation", t.disabled = "data-disabled", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.focused = "data-focused", t),
        ei = new Set([...Q.COMPOSITE_KEYS, Q.PAGE_UP, Q.PAGE_DOWN]);

    function el(e, t, r, n, i) {
        let l = Number((1 === r ? e + t : e - t).toFixed(Math.max(j(e), j(t), j(n))));
        return (0, f.clamp)(l, n, i)
    }
    let eu = r.forwardRef(function(e, t) {
            let n, i, u, {
                    render: o,
                    children: s,
                    className: f,
                    "aria-describedby": p,
                    "aria-label": v,
                    "aria-labelledby": b,
                    "aria-valuetext": m,
                    disabled: g = !1,
                    getAriaLabel: y,
                    getAriaValueText: x,
                    id: E,
                    index: S,
                    inputRef: C,
                    onBlur: A,
                    onFocus: P,
                    onKeyDown: N,
                    tabIndex: M,
                    style: T,
                    ...L
                } = e,
                {
                    nonce: F
                } = (0, ee.useCSPContext)(),
                V = (0, c.useBaseUiId)(E),
                {
                    active: $,
                    lastUsedThumbIndex: j,
                    controlRef: _,
                    disabled: q,
                    validation: K,
                    formatOptionsRef: z,
                    handleInputChange: eu,
                    inset: ea,
                    labelId: eo,
                    largeStep: es,
                    locale: ec,
                    max: ed,
                    min: ef,
                    minStepsBetweenValues: ep,
                    form: ev,
                    name: eb,
                    orientation: eh,
                    pressedInputRef: em,
                    pressedThumbCenterOffsetRef: eg,
                    pressedThumbIndexRef: ey,
                    renderBeforeHydration: ex,
                    setActive: eE,
                    setIndicatorPosition: eR,
                    state: eS,
                    step: ew,
                    values: eC
                } = I(),
                eA = (0, B.useDirection)(),
                eI = g || q,
                eP = eC.length > 1,
                ek = "vertical" === eh,
                eN = "rtl" === eA,
                {
                    setTouched: eM,
                    setFocused: eT,
                    validationMode: eL
                } = (0, h.useFieldRootContext)(),
                eD = r.useRef(null),
                eF = r.useRef(null),
                eV = r.useRef(!1),
                eO = (0, c.useBaseUiId)(),
                e$ = (0, er.useLabelableId)(),
                eB = eP ? eO : e$,
                eW = r.useMemo(() => ({
                    inputId: eB
                }), [eB]),
                {
                    ref: ej,
                    index: eH
                } = (0, Z.useCompositeListItem)({
                    metadata: eW
                }),
                e_ = eP ? S ? ? eH : 0,
                eq = e_ === eC.length - 1,
                eK = eC[e_],
                ez = J(eK, ef, ed),
                [eU, eG] = r.useState(),
                eY = (0, X.useIsHydrating)(),
                eX = j >= 0 && j < eC.length ? j : -1,
                eJ = (0, l.useStableCallback)(() => {
                    let e = _.current,
                        t = eD.current;
                    if (!e || !t) return;
                    let r = t.getBoundingClientRect(),
                        n = e.getBoundingClientRect(),
                        i = ek ? "height" : "width",
                        l = n[i] - r[i],
                        u = (r[i] / 2 + l * ez / 100) / n[i] * 100,
                        a = Number.isFinite(u) ? u : void 0;
                    eG(a), 0 === e_ ? eR(e => [a, e[1]]) : eq && eR(e => [e[0], a])
                });
            (0, a.useIsoLayoutEffect)(() => {
                ea && queueMicrotask(eJ)
            }, [eJ, ea]), (0, a.useIsoLayoutEffect)(() => {
                ea && eJ()
            }, [eJ, ea, ez]), (0, a.useIsoLayoutEffect)(() => {
                if (!ea) return;
                let e = _.current,
                    t = eD.current;
                if (!e || !t) return;
                let r = (0, O.ownerWindow)(e).ResizeObserver;
                if ("function" != typeof r) return;
                let n = new r(eJ);
                return n.observe(e), n.observe(t), () => {
                    n.disconnect()
                }
            }, [_, eJ, ea]);
            let eQ = ek ? "bottom" : "insetInlineStart",
                eZ = ek ? "left" : "top";
            eP ? $ === e_ ? n = 2 : eX === e_ && (n = 1) : $ === e_ && (n = 1), i = ea ? {
                "--position": `${eU??0}%`,
                visibility: ex && eY || void 0 === eU ? "hidden" : void 0,
                position: "absolute",
                [eQ]: "var(--position)",
                [eZ]: "50%",
                translate: `${(ek||!eN?-1:1)*50}% ${(ek?1:-1)*50}%`,
                zIndex: n
            } : Number.isFinite(ez) ? {
                position: "absolute",
                [eQ]: `${ez}%`,
                [eZ]: "50%",
                translate: `${(ek||!eN?-1:1)*50}% ${(ek?1:-1)*50}%`,
                zIndex: n
            } : G.visuallyHidden, "vertical" === eh && (u = eN ? "vertical-rl" : "vertical-lr");
            let e0 = "function" == typeof y ? y(e_) : v,
                e1 = (0, Y.mergeProps)({
                    "aria-label": e0,
                    "aria-labelledby": b ? ? (null == e0 ? eo : void 0),
                    "aria-describedby": p,
                    "aria-orientation": eh,
                    "aria-valuenow": eK,
                    "aria-valuetext": "function" == typeof x ? x((0, D.formatNumber)(eK, ec, z.current ? ? void 0), eK, e_) : m ? ? function(e, t, r, n) {
                        if (!(t < 0)) return 2 === e.length ? 0 === t ? `${(0,D.formatNumber)(e[t],n,r)} start range` : `${(0,D.formatNumber)(e[t],n,r)} end range` : r ? (0, D.formatNumber)(e[t], n, r) : void 0
                    }(eC, e_, z.current ? ? void 0, ec),
                    disabled: eI,
                    form: ev,
                    id: eB,
                    max: ed,
                    min: ef,
                    name: eb,
                    onChange(e) {
                        eu(e.currentTarget.valueAsNumber, e_, e)
                    },
                    onFocus(e) {
                        let t = eV.current;
                        eV.current = !1, eE(e_), eT(!0), t && e.stopPropagation()
                    },
                    onBlur(e) {
                        eV.current ? e.stopPropagation() : eD.current && (eE(-1), eM(!0), eT(!1), "onBlur" === eL && K.commit(R(eK, e_, ef, ed, eP, eC)))
                    },
                    onKeyDown(e) {
                        if (e.defaultPrevented || !ei.has(e.key)) return;
                        Q.COMPOSITE_KEYS.has(e.key) && e.stopPropagation();
                        let t = null,
                            r = H(eK, ew, ef);
                        switch (e.key) {
                            case Q.ARROW_UP:
                                t = el(r, e.shiftKey ? es : ew, 1, ef, ed);
                                break;
                            case Q.ARROW_RIGHT:
                                t = el(r, e.shiftKey ? es : ew, eN ? -1 : 1, ef, ed);
                                break;
                            case Q.ARROW_DOWN:
                                t = el(r, e.shiftKey ? es : ew, -1, ef, ed);
                                break;
                            case Q.ARROW_LEFT:
                                t = el(r, e.shiftKey ? es : ew, eN ? 1 : -1, ef, ed);
                                break;
                            case Q.PAGE_UP:
                                t = el(r, es, 1, ef, ed);
                                break;
                            case Q.PAGE_DOWN:
                                t = el(r, es, -1, ef, ed);
                                break;
                            case Q.END:
                                t = ed, eP && (t = Number.isFinite(eC[e_ + 1]) ? eC[e_ + 1] - ew * ep : ed);
                                break;
                            case Q.HOME:
                                t = ef, eP && (t = Number.isFinite(eC[e_ - 1]) ? eC[e_ - 1] + ew * ep : ef)
                        }
                        if (null !== t) {
                            let r = e.currentTarget;
                            (0, et.matchesFocusVisible)(r) || (eV.current = !0, r.blur(), r.focus({
                                preventScroll: !0,
                                focusVisible: !0
                            })), eu(t, e_, e), e.preventDefault()
                        }
                    },
                    step: ew,
                    style: { ...G.visuallyHidden,
                        width: "100%",
                        height: "100%",
                        writingMode: u
                    },
                    tabIndex: M ? ? void 0,
                    type: "range",
                    value: eK ? ? ""
                }, e => K.getValidationProps(eI, e), {
                    onKeyDown: N
                }),
                e2 = (0, U.useMergedRefs)(eF, K.inputRef, C);
            return (0, d.useRenderElement)("div", e, {
                state: eS,
                ref: [t, ej, eD],
                props: [{
                    [en.index]: e_,
                    children: (0, k.jsxs)(r.Fragment, {
                        children: [s, (0, k.jsx)("input", {
                            ref: e2,
                            ...e1,
                            suppressHydrationWarning: !0
                        }), ea && eY && ex && eq && (0, k.jsx)("script", {
                            nonce: F,
                            dangerouslySetInnerHTML: {
                                __html: '!function(){const t=document.currentScript?.parentElement;if(!t)return;const e=t.closest("[data-base-ui-slider-control]");if(!e)return;const r=e.querySelector("[data-base-ui-slider-indicator]"),i=e.getBoundingClientRect(),n="vertical"===e.getAttribute("data-orientation")?"height":"width",o=e.querySelectorAll(\'input[type="range"]\'),l=o.length>1,s=o.length-1;let a=null,u=null;for(let t=0;t<o.length;t+=1){const e=o[t],y=parseFloat(e.getAttribute("value")??"");if(Number.isNaN(y))return;const c=e.parentElement;if(!c)return;const p=parseFloat(e.getAttribute("max")??"100"),g=parseFloat(e.getAttribute("min")??"0"),b=c?.getBoundingClientRect(),d=i[n]-b[n],m=100*(y-g)/(p-g),v=(b[n]/2+d*m/100)/i[n]*100;c.style.setProperty("--position",`${v}%`),Number.isFinite(v)&&(c.style.removeProperty("visibility"),r&&(0===t?(a=v,r.style.setProperty("--start-position",`${v}%`),l||r.style.removeProperty("visibility")):t===s&&(u=v-(a??0),r.style.setProperty("--end-position",`${v}%`),r.style.setProperty("--relative-size",`${u}%`),r.style.removeProperty("visibility"))))}}();'
                            },
                            suppressHydrationWarning: !0
                        })]
                    }),
                    id: V,
                    onBlur: A,
                    onFocus: P,
                    onPointerDown(e) {
                        if (!eI) {
                            if (ey.current = e_, null != eD.current) {
                                let t = "horizontal" === eh ? "x" : "y",
                                    r = W(eD.current);
                                eg.current = ("horizontal" === eh ? e.clientX : e.clientY) - r[t]
                            }
                            null != eF.current && em.current !== eF.current && (em.current = eF.current)
                        }
                    },
                    style: i,
                    suppressHydrationWarning: ex || void 0
                }, L],
                stateAttributesMapping: w
            })
        }),
        ea = r.forwardRef(function(e, t) {
            var r, n;
            let i, l, u, a, {
                    render: o,
                    className: s,
                    style: c,
                    ...f
                } = e,
                {
                    indicatorPosition: p,
                    inset: v,
                    max: b,
                    min: h,
                    orientation: m,
                    renderBeforeHydration: g,
                    state: y,
                    values: x
                } = I(),
                E = (0, X.useIsHydrating)(),
                R = "vertical" === m,
                S = x.length > 1,
                C = v ? (r = p[0], n = p[1], i = void 0 === r || S && void 0 === n ? "hidden" : void 0, l = R ? "bottom" : "insetInlineStart", u = R ? "height" : "width", ((a = {
                    visibility: g && E ? "hidden" : i,
                    position: R ? "absolute" : "relative",
                    [R ? "width" : "height"]: "inherit"
                })["--start-position"] = `${r??0}%`, S) ? (a["--relative-size"] = `${(n??0)-(r??0)}%`, a[l] = "var(--start-position)", a[u] = "var(--relative-size)") : (a[l] = 0, a[u] = "var(--start-position)"), a) : function(e, t, r, n) {
                    let i = e ? "bottom" : "insetInlineStart",
                        l = e ? "height" : "width",
                        u = {
                            position: e ? "absolute" : "relative",
                            [e ? "width" : "height"]: "inherit"
                        };
                    if (!t) return u[i] = 0, u[l] = `${r}%`, u;
                    let a = n - r;
                    return u[i] = `${r}%`, u[l] = `${a}%`, u
                }(R, S, J(x[0], h, b), J(x[x.length - 1], h, b));
            return (0, d.useRenderElement)("div", e, {
                state: y,
                ref: t,
                props: [{
                    "data-base-ui-slider-indicator": g ? "" : void 0,
                    style: C,
                    suppressHydrationWarning: g || void 0
                }, f],
                stateAttributesMapping: w
            })
        });
    e.s(["Control", 0, K, "Indicator", 0, ea, "Label", 0, L, "Root", 0, N, "Thumb", 0, eu, "Track", 0, z, "Value", 0, F], 213089);
    var eo = e.i(213089);
    e.s(["Slider", 0, eo], 906605), e.s(["useVideoPlayback", 0, function(e, t, n) {
        let i = (0, r.useRef)(0),
            l = (0, r.useRef)(n),
            [u, a] = (0, r.useState)(null);
        (0, r.useEffect)(() => {
            l.current = n
        }, [n]), (0, r.useEffect)(() => {
            i.current += 1, a(null);
            let t = e.current;
            if (!t) return;
            let r = () => a("failed"),
                n = () => a(null);
            return t.addEventListener("error", r), t.addEventListener("playing", n), () => {
                t.removeEventListener("error", r), t.removeEventListener("playing", n)
            }
        }, [t, e]);
        let o = (0, r.useCallback)(() => {
                let r = e.current;
                if (!r) return;
                let n = i.current,
                    u = (e, o) => {
                        if (i.current !== n || r.getAttribute("src") !== t) return;
                        let s = e instanceof Error ? e.name : "";
                        if ("AbortError" !== s) {
                            if ("NotAllowedError" === s && o && l.current ? .()) return void r.play() ? .catch(e => u(e, !1));
                            a("NotAllowedError" === s ? "blocked" : "failed")
                        }
                    };
                r.play() ? .catch(e => u(e, !0))
            }, [t, e]),
            s = (0, r.useCallback)(() => {
                a(null), e.current ? .load(), o()
            }, [o, e]);
        return {
            problem: u,
            play: o,
            retry: s
        }
    }], 781583), e.s(["VideoPlaybackNotice", 0, function({
        problem: e,
        onPlay: t,
        onRetry: r,
        onDownload: n
    }) {
        return e ? (0, k.jsxs)("div", {
            className: "absolute inset-0 z-30 flex flex-col items-center justify-center gap-3 rounded-[inherit] bg-black/85 p-4 text-center text-sm text-white",
            onClick: e => e.stopPropagation(),
            onPointerDown: e => e.stopPropagation(),
            children: [(0, k.jsx)("p", {
                role: "failed" === e ? "alert" : "status",
                children: "blocked" === e ? "Click Play to start this video." : "This video could not play in your browser. Retry playback or download the original to try another player; it may help, but playback is not guaranteed."
            }), (0, k.jsxs)("div", {
                className: "flex flex-wrap justify-center gap-3",
                children: [(0, k.jsx)("button", {
                    type: "button",
                    className: "rounded-full border border-white/40 px-4 py-2 focus-visible:outline-2 focus-visible:outline-white",
                    onClick: n => {
                        n.stopPropagation(), "blocked" === e ? t() : r()
                    },
                    children: "blocked" === e ? "Play" : "Retry playback"
                }), "failed" === e && n ? (0, k.jsx)("button", {
                    type: "button",
                    className: "rounded-full border border-white/40 px-4 py-2 focus-visible:outline-2 focus-visible:outline-white",
                    onClick: e => {
                        e.stopPropagation(), n()
                    },
                    children: "Download original"
                }) : null]
            })]
        }) : null
    }], 997304)
}]);