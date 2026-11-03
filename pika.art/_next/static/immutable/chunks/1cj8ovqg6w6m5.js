(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 500580, t => {
    "use strict";
    var e = t.i(136263),
        i = t.i(898663);
    t.s(["useIsPresent", 0, function() {
        var t;
        return null === (t = (0, e.useContext)(i.PresenceContext)) || t.isPresent
    }, "usePresence", 0, function(t = !0) {
        let s = (0, e.useContext)(i.PresenceContext);
        if (null === s) return [!0, null];
        let {
            isPresent: n,
            onExitComplete: r,
            register: o
        } = s, a = (0, e.useId)();
        (0, e.useEffect)(() => {
            if (t) return o(a)
        }, [t]);
        let l = (0, e.useCallback)(() => t && r && r(a), [a, r, t]);
        return !n && r ? [!1, l] : [!0]
    }])
}, 568238, t => {
    "use strict";
    let e = (0, t.i(136263).createContext)({});
    t.s(["LayoutGroupContext", 0, e])
}, 815131, 493722, 411829, 900645, 357135, 307768, 963554, t => {
    "use strict";
    var e = t.i(136263);
    let i = (0, e.createContext)({
        strict: !1
    });
    t.s(["LazyContext", 0, i], 815131);
    let s = (0, e.createContext)({});
    t.s(["MotionContext", 0, s], 493722);
    var n = t.i(587377),
        r = t.i(653425);

    function o(t) {
        return Array.isArray(t) ? t.join(" ") : t
    }
    t.s(["useCreateMotionContext", 0, function(t) {
        let {
            initial: i,
            animate: a
        } = function(t, e) {
            if ((0, n.isControllingVariants)(t)) {
                let {
                    initial: e,
                    animate: i
                } = t;
                return {
                    initial: !1 === e || (0, r.isVariantLabel)(e) ? e : void 0,
                    animate: (0, r.isVariantLabel)(i) ? i : void 0
                }
            }
            return !1 !== t.inherit ? e : {}
        }(t, (0, e.useContext)(s));
        return (0, e.useMemo)(() => ({
            initial: i,
            animate: a
        }), [o(i), o(a)])
    }], 411829);
    var a = t.i(140926),
        l = t.i(880925),
        u = t.i(493559);
    let h = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {}
    });

    function c(t, e, i) {
        for (let s in e)(0, a.isMotionValue)(e[s]) || (0, l.isForcedMotionValue)(s, i) || (t[s] = e[s])
    }
    t.s(["createHtmlRenderState", 0, h], 900645), t.s(["copyRawValuesOnly", 0, c, "useHTMLProps", 0, function(t, i) {
        let s, n, r = {},
            o = (s = t.style || {}, c(n = {}, s, t), Object.assign(n, function({
                transformTemplate: t
            }, i) {
                return (0, e.useMemo)(() => {
                    let e = h();
                    return (0, u.buildHTMLStyles)(e, i, t), Object.assign({}, e.vars, e.style)
                }, [i])
            }(t, i)), n);
        return t.drag && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = o, r
    }], 357135);
    var d = t.i(734225),
        p = t.i(997214);
    let m = () => ({ ...h(),
        attrs: {}
    });
    t.s(["createSvgRenderState", 0, m], 307768), t.s(["useSVGProps", 0, function(t, i, s, n) {
        let r = (0, e.useMemo)(() => {
            let e = m();
            return (0, d.buildSVGAttrs)(e, i, (0, p.isSVGTag)(n), t.transformTemplate, t.style), { ...e.attrs,
                style: { ...e.style
                }
            }
        }, [i]);
        if (t.style) {
            let e = {};
            c(e, t.style, t), r.style = { ...e,
                ...r.style
            }
        }
        return r
    }], 963554)
}, 145092, t => {
    "use strict";
    let e = (0, t.i(136263).createContext)({
        transformPagePoint: t => t,
        isStatic: !1,
        reducedMotion: "never"
    });
    t.s(["MotionConfigContext", 0, e])
}, 898663, t => {
    "use strict";
    let e = (0, t.i(136263).createContext)(null);
    t.s(["PresenceContext", 0, e])
}, 231978, 193518, 792075, 150936, 907178, 342288, 628453, 739204, 674153, 914712, 341761, 916441, 620021, 676374, t => {
    "use strict";
    var e = t.i(52644),
        i = t.i(136263),
        s = t.i(568238),
        n = t.i(815131),
        r = t.i(145092),
        o = t.i(493722),
        a = t.i(411829),
        l = t.i(518338),
        u = t.i(847272),
        h = t.i(246373),
        c = t.i(766438),
        d = t.i(587377),
        p = t.i(819673),
        m = t.i(923792),
        f = t.i(898663),
        v = t.i(811819);
    let g = t => (e, s) => {
        let n = (0, i.useContext)(o.MotionContext),
            r = (0, i.useContext)(f.PresenceContext),
            a = () => (function({
                scrapeMotionValuesFromProps: t,
                createRenderState: e
            }, i, s, n) {
                return {
                    latestValues: function(t, e, i, s) {
                        let n = {},
                            r = s(t, {});
                        for (let t in r) n[t] = (0, c.resolveMotionValue)(r[t]);
                        let {
                            initial: o,
                            animate: a
                        } = t, l = (0, d.isControllingVariants)(t), u = (0, d.isVariantNode)(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === o && (o = e.initial), void 0 === a && (a = e.animate));
                        let h = !!i && !1 === i.initial,
                            f = (h = h || !1 === o) ? a : o;
                        if (f && "boolean" != typeof f && !(0, p.isAnimationControls)(f)) {
                            let e = Array.isArray(f) ? f : [f];
                            for (let i = 0; i < e.length; i++) {
                                let s = (0, m.resolveVariantFromProps)(t, e[i]);
                                if (s) {
                                    let {
                                        transitionEnd: t,
                                        transition: e,
                                        ...i
                                    } = s;
                                    for (let t in i) {
                                        let e = i[t];
                                        if (Array.isArray(e)) {
                                            let t = h ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (n[t] = e)
                                    }
                                    for (let e in t) n[e] = t[e]
                                }
                            }
                        }
                        return n
                    }(i, s, n, t),
                    renderState: e()
                }
            })(t, e, n, r);
        return s ? a() : (0, v.useConstant)(a)
    };
    var y = t.i(900645);
    let x = g({
        scrapeMotionValuesFromProps: h.scrapeHTMLMotionValuesFromProps,
        createRenderState: y.createHtmlRenderState
    });
    var T = t.i(185747),
        T = T,
        b = t.i(307768);
    let S = g({
        scrapeMotionValuesFromProps: T.scrapeMotionValuesFromProps,
        createRenderState: b.createSvgRenderState
    });
    var P = t.i(453311);
    let w = {
            animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
            exit: ["exit"],
            drag: ["drag", "dragControls"],
            focus: ["whileFocus"],
            hover: ["whileHover", "onHoverStart", "onHoverEnd"],
            tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
            pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
            inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
            layout: ["layout", "layoutId"]
        },
        V = !1;

    function M() {
        return ! function() {
            if (V) return;
            let t = {};
            for (let e in w) t[e] = {
                isEnabled: t => w[e].some(e => !!t[e])
            };
            (0, P.setFeatureDefinitions)(t), V = !0
        }(), (0, P.getFeatureDefinitions)()
    }
    let A = Symbol.for("motionComponentSymbol");
    var E = t.i(182526);
    let C = (0, i.createContext)({});

    function D(t) {
        return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
    }
    t.s(["SwitchLayoutGroupContext", 0, C], 193518);
    var k = t.i(193961);

    function R(t, {
        forwardMotionProps: h = !1,
        type: c
    } = {}, d, p) {
        d && function(t) {
            let e = M();
            for (let i in t) e[i] = { ...e[i],
                ...t[i]
            };
            (0, P.setFeatureDefinitions)(e)
        }(d);
        let m = c ? "svg" === c : (0, u.isSVGComponent)(t),
            v = m ? S : x;

        function g(u, c) {
            var d;
            let g, y, x, T = { ...(0, i.useContext)(r.MotionConfigContext),
                    ...u,
                    layoutId: function({
                        layoutId: t
                    }) {
                        let e = (0, i.useContext)(s.LayoutGroupContext).id;
                        return e && void 0 !== t ? e + "-" + t : t
                    }(u)
                },
                {
                    isStatic: b
                } = T,
                S = (0, a.useCreateMotionContext)(u),
                P = v(u, b);
            if (!b && "u" > typeof window) {
                (0, i.useContext)(n.LazyContext).strict;
                let e = function(t) {
                    let {
                        drag: e,
                        layout: i
                    } = M();
                    if (!e && !i) return {};
                    let s = { ...e,
                        ...i
                    };
                    return {
                        MeasureLayout: e ? .isEnabled(t) || i ? .isEnabled(t) ? s.MeasureLayout : void 0,
                        ProjectionNode: s.ProjectionNode
                    }
                }(T);
                g = e.MeasureLayout, S.visualElement = function(t, e, s, a, l, u) {
                    let {
                        visualElement: h
                    } = (0, i.useContext)(o.MotionContext), c = (0, i.useContext)(n.LazyContext), d = (0, i.useContext)(f.PresenceContext), p = (0, i.useContext)(r.MotionConfigContext), m = p.reducedMotion, v = p.skipAnimations, g = (0, i.useRef)(null), y = (0, i.useRef)(!1);
                    a = a || c.renderer, !g.current && a && (g.current = a(t, {
                        visualState: e,
                        parent: h,
                        props: s,
                        presenceContext: d,
                        blockInitialAnimation: !!d && !1 === d.initial,
                        reducedMotionConfig: m,
                        skipAnimations: v,
                        isSVG: u
                    }), y.current && g.current && (g.current.manuallyAnimateOnMount = !0));
                    let x = g.current,
                        T = (0, i.useContext)(C);
                    x && !x.projection && l && ("html" === x.type || "svg" === x.type) && function(t, e, i, s) {
                        let {
                            layoutId: n,
                            layout: r,
                            drag: o,
                            dragConstraints: a,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: h,
                            layoutCrossfade: c
                        } = e;
                        t.projection = new i(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                            if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                        }(t.parent)), t.projection.setOptions({
                            layoutId: n,
                            layout: r,
                            alwaysMeasureLayout: !!o || a && D(a),
                            visualElement: t,
                            animationType: "string" == typeof r ? r : "both",
                            initialPromotionConfig: s,
                            crossfade: c,
                            layoutScroll: l,
                            layoutRoot: u,
                            layoutAnchor: h
                        })
                    }(g.current, s, l, T);
                    let b = (0, i.useRef)(!1);
                    (0, i.useInsertionEffect)(() => {
                        x && b.current && x.update(s, d)
                    });
                    let S = s[E.optimizedAppearDataAttribute],
                        P = (0, i.useRef)(!!S && "u" > typeof window && !window.MotionHandoffIsComplete ? .(S) && window.MotionHasOptimisedAnimation ? .(S));
                    return (0, k.useIsomorphicLayoutEffect)(() => {
                        y.current = !0, x && (b.current = !0, window.MotionIsMounted = !0, x.updateFeatures(), x.scheduleRenderMicrotask(), P.current && x.animationState && x.animationState.animateChanges())
                    }), (0, i.useEffect)(() => {
                        x && (!P.current && x.animationState && x.animationState.animateChanges(), P.current && (queueMicrotask(() => {
                            window.MotionHandoffMarkAsComplete ? .(S)
                        }), P.current = !1), x.enteringChildren = void 0)
                    }), x
                }(t, P, T, p, e.ProjectionNode, m)
            }
            return (0, e.jsxs)(o.MotionContext.Provider, {
                value: S,
                children: [g && S.visualElement ? (0, e.jsx)(g, {
                    visualElement: S.visualElement,
                    ...T
                }) : null, (0, l.useRender)(t, u, (d = S.visualElement, y = (0, i.useRef)(c), (0, i.useInsertionEffect)(() => {
                    y.current = c
                }), x = (0, i.useRef)(null), (0, i.useCallback)(t => {
                    t && P.onMount ? .(t), d && (t ? d.mount(t) : d.unmount());
                    let e = y.current;
                    if ("function" == typeof e)
                        if (t) {
                            let i = e(t);
                            "function" == typeof i && (x.current = i)
                        } else x.current ? (x.current(), x.current = null) : e(t);
                    else e && (e.current = t)
                }, [d])), P, b, h, m)]
            })
        }
        g.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
        let y = (0, i.forwardRef)(g);
        return y[A] = t, y
    }
    t.s(["createMotionProxy", 0, function(t, e) {
        if ("u" < typeof Proxy) return R;
        let i = new Map,
            s = (i, s) => R(i, s, t, e);
        return new Proxy((t, e) => s(t, e), {
            get: (n, r) => "create" === r ? s : (i.has(r) || i.set(r, R(r, void 0, t, e)), i.get(r))
        })
    }], 231978);
    class L {
        constructor(t) {
            this.isMounted = !1, this.node = t
        }
        update() {}
    }
    t.s(["Feature", 0, L], 792075);
    var B = t.i(488342),
        F = t.i(530754);

    function O(t, e, i, s = 0, n = 1) {
        let r = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
            o = t.size,
            a = (o - 1) * s;
        return "function" == typeof i ? i(r, o) : 1 === n ? r * s : a - r * s
    }

    function I(t, e, i = {}) {
        let s = (0, B.resolveVariant)(t, e, "exit" === i.type ? t.presenceContext ? .custom : void 0),
            {
                transition: n = t.getDefaultTransition() || {}
            } = s || {};
        i.transitionOverride && (n = i.transitionOverride);
        let r = s ? () => Promise.all((0, F.animateTarget)(t, s, i)) : () => Promise.resolve(),
            o = t.variantChildren && t.variantChildren.size ? (s = 0) => {
                let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a
                } = n;
                return function(t, e, i = 0, s = 0, n = 0, r = 1, o) {
                    let a = [];
                    for (let l of t.variantChildren) l.notify("AnimationStart", e), a.push(I(l, e, { ...o,
                        delay: i + ("function" == typeof s ? 0 : s) + O(t.variantChildren, l, s, n, r)
                    }).then(() => l.notify("AnimationComplete", e)));
                    return Promise.all(a)
                }(t, e, s, r, o, a, i)
            } : () => Promise.resolve(),
            {
                when: a
            } = n;
        if (!a) return Promise.all([r(), o(i.delay)]); {
            let [t, e] = "beforeChildren" === a ? [r, o] : [o, r];
            return t().then(() => e())
        }
    }
    var j = t.i(653425),
        N = t.i(250760);
    let U = N.variantProps.length;
    var W = t.i(154166);

    function G(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++)
            if (e[s] !== t[s]) return !1;
        return !0
    }
    let $ = [...N.variantPriorityOrder].reverse(),
        z = N.variantPriorityOrder.length;

    function K(t = !1) {
        return {
            isActive: t,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function H() {
        return {
            animate: K(!0),
            whileInView: K(),
            whileHover: K(),
            whileTap: K(),
            whileDrag: K(),
            whileFocus: K(),
            exit: K()
        }
    }
    let Y = 0;
    t.s(["animations", 0, {
        animation: {
            Feature: class extends L {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let s;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) s = Promise.all(e.map(e => I(t, e, i)));
                                else if ("string" == typeof e) s = I(t, e, i);
                                else {
                                    let n = "function" == typeof e ? (0, B.resolveVariant)(t, e, i.custom) : e;
                                    s = Promise.all((0, F.animateTarget)(t, n, i))
                                }
                                return s.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = H(),
                            s = !0,
                            n = !1,
                            r = e => (i, s) => {
                                let n = (0, B.resolveVariant)(t, s, "exit" === e ? t.presenceContext ? .custom : void 0);
                                if (n) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...s
                                    } = n;
                                    i = { ...i,
                                        ...s,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function o(o) {
                            let {
                                props: a
                            } = t, l = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < U; t++) {
                                    let s = N.variantProps[t],
                                        n = e.props[s];
                                    ((0, j.isVariantLabel)(n) || !1 === n) && (i[s] = n)
                                }
                                return i
                            }(t.parent) || {}, u = [], h = new Set, c = {}, d = 1 / 0;
                            for (let e = 0; e < z; e++) {
                                var m, f;
                                let v = $[e],
                                    g = i[v],
                                    y = void 0 !== a[v] ? a[v] : l[v],
                                    x = (0, j.isVariantLabel)(y),
                                    T = v === o ? g.isActive : null;
                                !1 === T && (d = e);
                                let b = y === l[v] && y !== a[v] && x;
                                if (b && (s || n) && t.manuallyAnimateOnMount && (b = !1), g.protectedKeys = { ...c
                                    }, !g.isActive && null === T || !y && !g.prevProp || (0, p.isAnimationControls)(y) || "boolean" == typeof y) continue;
                                if ("exit" === v && g.isActive && !0 !== T) {
                                    g.prevResolvedValues && (c = { ...c,
                                        ...g.prevResolvedValues
                                    });
                                    continue
                                }
                                let S = (m = g.prevProp, "string" == typeof(f = y) ? f !== m : !!Array.isArray(f) && !G(f, m)),
                                    P = S || v === o && g.isActive && !b && x || e > d && x,
                                    w = !1,
                                    V = Array.isArray(y) ? y : [y],
                                    M = V.reduce(r(v), {});
                                !1 === T && (M = {});
                                let {
                                    prevResolvedValues: A = {}
                                } = g, E = { ...A,
                                    ...M
                                }, C = e => {
                                    P = !0, h.has(e) && (w = !0, h.delete(e)), g.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in E) {
                                    let e = M[t],
                                        i = A[t];
                                    if (!c.hasOwnProperty(t))((0, W.isKeyframesTarget)(e) && (0, W.isKeyframesTarget)(i) ? !G(e, i) || S : e !== i) ? null != e ? C(t) : h.add(t) : void 0 !== e && h.has(t) ? C(t) : g.protectedKeys[t] = !0
                                }
                                g.prevProp = y, g.prevResolvedValues = M, g.isActive && (c = { ...c,
                                    ...M
                                }), (s || n) && t.blockInitialAnimation && (P = !1);
                                let D = b && S,
                                    k = !D || w;
                                P && k && u.push(...V.map(e => {
                                    let i = {
                                        type: v
                                    };
                                    if ("string" == typeof e && (s || n) && !D && t.manuallyAnimateOnMount && t.parent) {
                                        let {
                                            parent: s
                                        } = t, n = (0, B.resolveVariant)(s, e);
                                        if (s.enteringChildren && n) {
                                            let {
                                                delayChildren: e
                                            } = n.transition || {};
                                            i.delay = O(s.enteringChildren, t, e)
                                        }
                                    }
                                    return {
                                        animation: e,
                                        options: i
                                    }
                                }))
                            }
                            if (h.size) {
                                let e = {};
                                if ("boolean" != typeof a.initial) {
                                    let i = (0, B.resolveVariant)(t, Array.isArray(a.initial) ? a.initial[0] : a.initial);
                                    i && i.transition && (e.transition = i.transition)
                                }
                                h.forEach(i => {
                                    let s = t.getBaseTarget(i),
                                        n = t.getValue(i);
                                    n && (n.liveStyle = !0), e[i] = s ? ? null
                                }), u.push({
                                    animation: e
                                })
                            }
                            let v = !!u.length;
                            return s && (!1 === a.initial || a.initial === a.animate) && !t.manuallyAnimateOnMount && (v = !1), s = !1, n = !1, v ? e(u) : Promise.resolve()
                        }
                        return {
                            animateChanges: o,
                            setActive: function(e, s) {
                                if (i[e].isActive === s) return Promise.resolve();
                                t.variantChildren ? .forEach(t => t.animationState ? .setActive(e, s)), i[e].isActive = s;
                                let n = o(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return n
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = H(), n = !0
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    (0, p.isAnimationControls)(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls ? .()
                }
            }
        },
        exit: {
            Feature: class extends L {
                constructor() {
                    super(...arguments), this.id = Y++, this.isExitComplete = !1
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    if (t && !1 === i) {
                        if (this.isExitComplete) {
                            let {
                                initial: t,
                                custom: e
                            } = this.node.getProps();
                            if ("string" == typeof t || "object" == typeof t && null !== t && !Array.isArray(t)) {
                                let i = (0, B.resolveVariant)(this.node, t, e);
                                if (i) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...s
                                    } = i;
                                    for (let t in s) this.node.getValue(t) ? .jump(s[t])
                                }
                            }
                            this.node.animationState.reset(), this.node.animationState.animateChanges()
                        } else this.node.animationState.setActive("exit", !1);
                        this.isExitComplete = !1;
                        return
                    }
                    let s = this.node.animationState.setActive("exit", !t);
                    e && !t && s.then(() => {
                        this.isExitComplete = !0, e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
        }
    }], 150936);
    var X = t.i(120194),
        q = t.i(301219),
        Z = t.i(672357);

    function _(t) {
        return [t("x"), t("y")]
    }
    t.s(["eachAxis", 0, _], 907178);
    var J = t.i(123457),
        Q = t.i(627722),
        tt = t.i(707051),
        te = t.i(899565),
        ti = t.i(327745);

    function ts(t, e, i, s = {
        passive: !0
    }) {
        return t.addEventListener(e, i, s), () => t.removeEventListener(e, i, s)
    }
    t.s(["addDomEvent", 0, ts], 342288);
    let tn = {
        x: !1,
        y: !1
    };
    t.s(["isDragActive", 0, function() {
        return tn.x || tn.y
    }, "isDragging", 0, tn], 628453);
    var tr = t.i(561497);

    function to(t) {
        return t.max - t.min
    }

    function ta(t, e, i, s = .5) {
        t.origin = s, t.originPoint = (0, ti.mixNumber)(e.min, e.max, t.origin), t.scale = to(i) / to(e), t.translate = (0, ti.mixNumber)(i.min, i.max, t.origin) - t.originPoint, (t.scale >= .9999 && t.scale <= 1.0001 || isNaN(t.scale)) && (t.scale = 1), (t.translate >= -.01 && t.translate <= .01 || isNaN(t.translate)) && (t.translate = 0)
    }

    function tl(t, e, i, s = 0) {
        t.min = (s ? (0, ti.mixNumber)(i.min, i.max, s) : i.min) + e.min, t.max = t.min + to(e)
    }

    function tu(t, e, i, s = 0) {
        let n = s ? (0, ti.mixNumber)(i.min, i.max, s) : i.min;
        t.min = e.min - n, t.max = t.min + to(e)
    }
    t.s(["calcBoxDelta", 0, function(t, e, i, s) {
        ta(t.x, e.x, i.x, s ? s.originX : void 0), ta(t.y, e.y, i.y, s ? s.originY : void 0)
    }, "calcLength", 0, to, "calcRelativeBox", 0, function(t, e, i, s) {
        tl(t.x, e.x, i.x, s ? .x), tl(t.y, e.y, i.y, s ? .y)
    }, "calcRelativePosition", 0, function(t, e, i, s) {
        tu(t.x, e.x, i.x, s ? .x), tu(t.y, e.y, i.y, s ? .y)
    }, "isNear", 0, function(t, e, i) {
        return Math.abs(t - e) <= i
    }], 739204);
    var th = t.i(270736);
    let tc = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        td = new Set(["INPUT", "SELECT", "TEXTAREA"]);

    function tp(t) {
        return td.has(t.tagName) || !0 === t.isContentEditable
    }
    t.s(["isElementKeyboardAccessible", 0, function(t) {
        return tc.has(t.tagName) || !0 === t.isContentEditable
    }, "isElementTextInput", 0, tp], 674153);
    var tm = t.i(725542);
    let tf = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary;

    function tv(t) {
        return {
            point: {
                x: t.pageX,
                y: t.pageY
            }
        }
    }
    t.s(["isPrimaryPointer", 0, tf], 914712);
    let tg = t => e => tf(e) && t(e, tv(e));

    function ty(t, e, i, s) {
        return ts(t, e, tg(i), s)
    }
    t.s(["addPointerInfo", 0, tg, "extractEventInfo", 0, tv], 341761);
    let tx = ({
        current: t
    }) => t ? t.ownerDocument.defaultView : null;
    var tT = t.i(815645),
        tb = t.i(633836);
    let tS = (t, e) => Math.abs(t - e),
        tP = new Set(["auto", "scroll"]);
    class tw {
        constructor(t, e, {
            transformPagePoint: i,
            contextWindow: s = window,
            dragSnapToOrigin: n = !1,
            distanceThreshold: r = 3,
            element: o
        } = {}) {
            if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = t => {
                    this.handleScroll(t.target)
                }, this.onWindowScroll = () => {
                    this.handleScroll(window)
                }, this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    this.lastRawMoveEventInfo && (this.lastMoveEventInfo = tV(this.lastRawMoveEventInfo, this.transformPagePoint));
                    let i = tA(this.lastMoveEventInfo, this.history),
                        s = null !== this.startEvent,
                        n = (t = i.offset, e = {
                            x: 0,
                            y: 0
                        }, Math.sqrt(tS(t.x, e.x) ** 2 + tS(t.y, e.y) ** 2) >= this.distanceThreshold);
                    if (!s && !n) return;
                    let {
                        point: r
                    } = i, {
                        timestamp: o
                    } = Z.frameData;
                    this.history.push({ ...r,
                        timestamp: o
                    });
                    let {
                        onStart: a,
                        onMove: l
                    } = this.handlers;
                    s || (a && a(this.lastMoveEvent, i), this.startEvent = this.lastMoveEvent), l && l(this.lastMoveEvent, i)
                }, this.handlePointerMove = (t, e) => {
                    this.lastMoveEvent = t, this.lastRawMoveEventInfo = e, this.lastMoveEventInfo = tV(e, this.transformPagePoint), Z.frame.update(this.updatePoint, !0)
                }, this.handlePointerUp = (t, e) => {
                    this.end();
                    let {
                        onEnd: i,
                        onSessionEnd: s,
                        resumeAnimation: n
                    } = this.handlers;
                    if ((this.dragSnapToOrigin || !this.startEvent) && n && n(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                    let r = tA("pointercancel" === t.type ? this.lastMoveEventInfo : tV(e, this.transformPagePoint), this.history);
                    this.startEvent && i && i(t, r), s && s(t, r)
                }, !tf(t)) return;
            this.dragSnapToOrigin = n, this.handlers = e, this.transformPagePoint = i, this.distanceThreshold = r, this.contextWindow = s || window;
            const a = tV(tv(t), this.transformPagePoint),
                {
                    point: l
                } = a,
                {
                    timestamp: u
                } = Z.frameData;
            this.history = [{ ...l,
                timestamp: u
            }];
            const {
                onSessionStart: h
            } = e;
            h && h(t, tA(a, this.history));
            const c = {
                passive: !0,
                capture: !0
            };
            this.removeListeners = (0, tT.pipe)(ty(this.contextWindow, "pointermove", this.handlePointerMove, c), ty(this.contextWindow, "pointerup", this.handlePointerUp, c), ty(this.contextWindow, "pointercancel", this.handlePointerUp, c)), o && this.startScrollTracking(o)
        }
        startScrollTracking(t) {
            let e = t.parentElement;
            for (; e;) {
                let t = getComputedStyle(e);
                (tP.has(t.overflowX) || tP.has(t.overflowY)) && this.scrollPositions.set(e, {
                    x: e.scrollLeft,
                    y: e.scrollTop
                }), e = e.parentElement
            }
            this.scrollPositions.set(window, {
                x: window.scrollX,
                y: window.scrollY
            }), window.addEventListener("scroll", this.onElementScroll, {
                capture: !0
            }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, {
                    capture: !0
                }), window.removeEventListener("scroll", this.onWindowScroll)
            }
        }
        handleScroll(t) {
            let e = this.scrollPositions.get(t);
            if (!e) return;
            let i = t === window,
                s = i ? {
                    x: window.scrollX,
                    y: window.scrollY
                } : {
                    x: t.scrollLeft,
                    y: t.scrollTop
                },
                n = {
                    x: s.x - e.x,
                    y: s.y - e.y
                };
            (0 !== n.x || 0 !== n.y) && (i ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += n.x, this.lastMoveEventInfo.point.y += n.y) : this.history.length > 0 && (this.history[0].x -= n.x, this.history[0].y -= n.y), this.scrollPositions.set(t, s), Z.frame.update(this.updatePoint, !0))
        }
        updateHandlers(t) {
            this.handlers = t
        }
        end() {
            this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), (0, Z.cancelFrame)(this.updatePoint)
        }
    }

    function tV(t, e) {
        return e ? {
            point: e(t.point)
        } : t
    }

    function tM(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }

    function tA({
        point: t
    }, e) {
        return {
            point: t,
            delta: tM(t, tE(e)),
            offset: tM(t, e[0]),
            velocity: function(t) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                let e = t.length - 1,
                    i = null,
                    s = tE(t);
                for (; e >= 0 && (i = t[e], !(s.timestamp - i.timestamp > (0, tb.secondsToMilliseconds)(.1)));) e--;
                if (!i) return {
                    x: 0,
                    y: 0
                };
                i === t[0] && t.length > 2 && s.timestamp - i.timestamp > 2 * (0, tb.secondsToMilliseconds)(.1) && (i = t[1]);
                let n = (0, tb.millisecondsToSeconds)(s.timestamp - i.timestamp);
                if (0 === n) return {
                    x: 0,
                    y: 0
                };
                let r = {
                    x: (s.x - i.x) / n,
                    y: (s.y - i.y) / n
                };
                return r.x === 1 / 0 && (r.x = 0), r.y === 1 / 0 && (r.y = 0), r
            }(e)
        }
    }

    function tE(t) {
        return t[t.length - 1]
    }
    var tC = t.i(470934),
        tD = t.i(508983);

    function tk(t, e, i) {
        return {
            min: void 0 !== e ? t.min + e : void 0,
            max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
        }
    }

    function tR(t, e) {
        let i = e.min - t.min,
            s = e.max - t.max;
        return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
            min: i,
            max: s
        }
    }

    function tL(t, e, i) {
        return {
            min: tB(t, e),
            max: tB(t, i)
        }
    }

    function tB(t, e) {
        return "number" == typeof t ? t : t[e] || 0
    }
    let tF = new WeakMap;
    class tO {
        constructor(t) {
            this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                x: 0,
                y: 0
            }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, q.createBox)(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t
        }
        start(t, {
            snapToCursor: e = !1,
            distanceThreshold: i
        } = {}) {
            let {
                presenceContext: s
            } = this.visualElement;
            if (s && !1 === s.isPresent) return;
            let n = t => {
                    e && this.snapToCursor(tv(t).point), this.stopAnimation()
                },
                r = (t, e) => {
                    let {
                        drag: i,
                        dragPropagation: s,
                        onDragStart: n
                    } = this.getProps();
                    if (i && !s && (this.openDragLock && this.openDragLock(), this.openDragLock = function(t) {
                            if ("x" === t || "y" === t)
                                if (tn[t]) return null;
                                else return tn[t] = !0, () => {
                                    tn[t] = !1
                                };
                            return tn.x || tn.y ? null : (tn.x = tn.y = !0, () => {
                                tn.x = tn.y = !1
                            })
                        }(i), !this.openDragLock)) return;
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), _(t => {
                        let e = this.getAxisMotionValue(t).get() || 0;
                        if (tr.percent.test(e)) {
                            let {
                                projection: i
                            } = this.visualElement;
                            if (i && i.layout) {
                                let s = i.layout.layoutBox[t];
                                s && (e = to(s) * (parseFloat(e) / 100))
                            }
                        }
                        this.originPoint[t] = e
                    }), n && Z.frame.update(() => n(t, e), !1, !0), (0, tt.addValueToWillChange)(this.visualElement, "transform");
                    let {
                        animationState: r
                    } = this.visualElement;
                    r && r.setActive("whileDrag", !0)
                },
                o = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e;
                    let {
                        dragPropagation: i,
                        dragDirectionLock: s,
                        onDirectionLock: n,
                        onDrag: r
                    } = this.getProps();
                    if (!i && !this.openDragLock) return;
                    let {
                        offset: o
                    } = e;
                    if (s && null === this.currentDirection) {
                        this.currentDirection = function(t, e = 10) {
                            let i = null;
                            return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                        }(o), null !== this.currentDirection && n && n(this.currentDirection);
                        return
                    }
                    this.updateAxis("x", e.point, o), this.updateAxis("y", e.point, o), this.visualElement.render(), r && Z.frame.update(() => r(t, e), !1, !0)
                },
                a = (t, e) => {
                    this.latestPointerEvent = t, this.latestPanInfo = e, this.stop(t, e), this.latestPointerEvent = null, this.latestPanInfo = null
                },
                l = () => {
                    let {
                        dragSnapToOrigin: t
                    } = this.getProps();
                    (t || this.constraints) && this.startAnimation({
                        x: 0,
                        y: 0
                    })
                },
                {
                    dragSnapToOrigin: u
                } = this.getProps();
            this.panSession = new tw(t, {
                onSessionStart: n,
                onStart: r,
                onMove: o,
                onSessionEnd: a,
                resumeAnimation: l
            }, {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: u,
                distanceThreshold: i,
                contextWindow: tx(this.visualElement),
                element: this.visualElement.current
            })
        }
        stop(t, e) {
            let i = t || this.latestPointerEvent,
                s = e || this.latestPanInfo,
                n = this.isDragging;
            if (this.cancel(), !n || !s || !i) return;
            let {
                velocity: r
            } = s;
            this.startAnimation(r);
            let {
                onDragEnd: o
            } = this.getProps();
            o && Z.frame.postRender(() => o(i, s))
        }
        cancel() {
            this.isDragging = !1;
            let {
                projection: t,
                animationState: e
            } = this.visualElement;
            t && (t.isAnimationBlocked = !1), this.endPanSession();
            let {
                dragPropagation: i
            } = this.getProps();
            !i && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e && e.setActive("whileDrag", !1)
        }
        endPanSession() {
            this.panSession && this.panSession.end(), this.panSession = void 0
        }
        updateAxis(t, e, i) {
            let {
                drag: s
            } = this.getProps();
            if (!i || !tj(t, s, this.currentDirection)) return;
            let n = this.getAxisMotionValue(t),
                r = this.originPoint[t] + i[t];
            this.constraints && this.constraints[t] && (r = function(t, {
                min: e,
                max: i
            }, s) {
                return void 0 !== e && t < e ? t = s ? (0, ti.mixNumber)(e, t, s.min) : Math.max(t, e) : void 0 !== i && t > i && (t = s ? (0, ti.mixNumber)(i, t, s.max) : Math.min(t, i)), t
            }(r, this.constraints[t], this.elastic[t])), n.set(r)
        }
        resolveConstraints() {
            let {
                dragConstraints: t,
                dragElastic: e
            } = this.getProps(), i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection ? .layout, s = this.constraints;
            t && D(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && i ? this.constraints = function(t, {
                top: e,
                left: i,
                bottom: s,
                right: n
            }) {
                return {
                    x: tk(t.x, i, n),
                    y: tk(t.y, e, s)
                }
            }(i.layoutBox, t) : this.constraints = !1, this.elastic = function(t = .35) {
                return !1 === t ? t = 0 : !0 === t && (t = .35), {
                    x: tL(t, "left", "right"),
                    y: tL(t, "top", "bottom")
                }
            }(e), s !== this.constraints && !D(t) && i && this.constraints && !this.hasMutatedConstraints && _(t => {
                var e, s;
                let n;
                !1 !== this.constraints && this.getAxisMotionValue(t) && (this.constraints[t] = (e = i.layoutBox[t], s = this.constraints[t], n = {}, void 0 !== s.min && (n.min = s.min - e.min), void 0 !== s.max && (n.max = s.max - e.min), n))
            })
        }
        resolveRefConstraints() {
            var t;
            let {
                dragConstraints: e,
                onMeasureDragConstraints: i
            } = this.getProps();
            if (!e || !D(e)) return !1;
            let s = e.current;
            (0, tm.invariant)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
            let {
                projection: n
            } = this.visualElement;
            if (!n || !n.layout) return !1;
            n.root && (n.root.scroll = void 0, n.root.updateScroll());
            let r = (0, J.measurePageBox)(s, n.root, this.visualElement.getTransformPagePoint()),
                o = (t = n.layout.layoutBox, {
                    x: tR(t.x, r.x),
                    y: tR(t.y, r.y)
                });
            if (i) {
                let t = i((0, Q.convertBoxToBoundingBox)(o));
                this.hasMutatedConstraints = !!t, t && (o = (0, Q.convertBoundingBoxToBox)(t))
            }
            return o
        }
        startAnimation(t) {
            let {
                drag: e,
                dragMomentum: i,
                dragElastic: s,
                dragTransition: n,
                dragSnapToOrigin: r,
                onDragTransitionEnd: o
            } = this.getProps(), a = this.constraints || {};
            return Promise.all(_(o => {
                if (!tj(o, e, this.currentDirection)) return;
                let l = a && a[o] || {};
                (!0 === r || r === o) && (l = {
                    min: 0,
                    max: 0
                });
                let u = {
                    type: "inertia",
                    velocity: i ? t[o] : 0,
                    bounceStiffness: s ? 200 : 1e6,
                    bounceDamping: s ? 40 : 1e7,
                    timeConstant: 750,
                    restDelta: 1,
                    restSpeed: 10,
                    ...n,
                    ...l
                };
                return this.startAxisValueAnimation(o, u)
            })).then(o)
        }
        startAxisValueAnimation(t, e) {
            let i = this.getAxisMotionValue(t);
            return (0, tt.addValueToWillChange)(this.visualElement, t), i.start((0, te.animateMotionValue)(t, i, 0, e, this.visualElement, !1))
        }
        stopAnimation() {
            _(t => this.getAxisMotionValue(t).stop())
        }
        getAxisMotionValue(t) {
            let e = `_drag${t.toUpperCase()}`;
            return this.visualElement.getProps()[e] || this.visualElement.getValue(t, this.visualElement.latestValues[t] ? ? 0)
        }
        snapToCursor(t) {
            _(e => {
                let {
                    drag: i
                } = this.getProps();
                if (!tj(e, i, this.currentDirection)) return;
                let {
                    projection: s
                } = this.visualElement, n = this.getAxisMotionValue(e);
                if (s && s.layout) {
                    let {
                        min: i,
                        max: r
                    } = s.layout.layoutBox[e], o = n.get() || 0;
                    n.set(t[e] - (0, ti.mixNumber)(i, r, .5) + o)
                }
            })
        }
        scalePositionWithinConstraints() {
            if (!this.visualElement.current) return;
            let {
                drag: t,
                dragConstraints: e
            } = this.getProps(), {
                projection: i
            } = this.visualElement;
            if (!D(e) || !i || !this.constraints) return;
            this.stopAnimation();
            let s = {
                x: 0,
                y: 0
            };
            _(t => {
                let e = this.getAxisMotionValue(t);
                if (e && !1 !== this.constraints) {
                    var i, n;
                    let r, o, a, l = e.get();
                    s[t] = (i = {
                        min: l,
                        max: l
                    }, n = this.constraints[t], r = .5, o = to(i), (a = to(n)) > o ? r = (0, tC.progress)(n.min, n.max - o, i.min) : o > a && (r = (0, tC.progress)(i.min, i.max - a, n.min)), (0, tD.clamp)(0, 1, r))
                }
            });
            let {
                transformTemplate: n
            } = this.visualElement.getProps();
            this.visualElement.current.style.transform = n ? n({}, "") : "none", i.root && i.root.updateScroll(), i.updateLayout(), this.constraints = !1, this.resolveConstraints(), _(e => {
                if (!tj(e, t, null)) return;
                let i = this.getAxisMotionValue(e),
                    {
                        min: n,
                        max: r
                    } = this.constraints[e];
                i.set((0, ti.mixNumber)(n, r, s[e]))
            }), this.visualElement.render()
        }
        addListeners() {
            let t;
            if (!this.visualElement.current) return;
            tF.set(this.visualElement, this);
            let e = this.visualElement.current,
                i = ty(e, "pointerdown", t => {
                    let {
                        drag: i,
                        dragListener: s = !0
                    } = this.getProps(), n = t.target, r = n !== e && tp(n);
                    i && s && !r && this.start(t)
                }),
                s = () => {
                    var i, s, n;
                    let r, o, {
                        dragConstraints: a
                    } = this.getProps();
                    D(a) && a.current && (this.constraints = this.resolveRefConstraints(), t || (i = e, s = a.current, n = () => this.scalePositionWithinConstraints(), r = (0, th.resize)(i, tI(n)), o = (0, th.resize)(s, tI(n)), t = () => {
                        r(), o()
                    }))
                },
                {
                    projection: n
                } = this.visualElement,
                r = n.addEventListener("measure", s);
            n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), Z.frame.read(s);
            let o = ts(window, "resize", () => this.scalePositionWithinConstraints()),
                a = n.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e
                }) => {
                    this.isDragging && e && (_(e => {
                        let i = this.getAxisMotionValue(e);
                        i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                    }), this.visualElement.render())
                });
            return () => {
                o(), i(), r(), a && a(), t && t()
            }
        }
        getProps() {
            let t = this.visualElement.getProps(),
                {
                    drag: e = !1,
                    dragDirectionLock: i = !1,
                    dragPropagation: s = !1,
                    dragConstraints: n = !1,
                    dragElastic: r = .35,
                    dragMomentum: o = !0
                } = t;
            return { ...t,
                drag: e,
                dragDirectionLock: i,
                dragPropagation: s,
                dragConstraints: n,
                dragElastic: r,
                dragMomentum: o
            }
        }
    }

    function tI(t) {
        let e = !0;
        return () => {
            if (e) {
                e = !1;
                return
            }
            t()
        }
    }

    function tj(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t)
    }
    t.s(["DragGesture", 0, class extends L {
        constructor(t) {
            super(t), this.removeGroupControls = X.noop, this.removeListeners = X.noop, this.controls = new tO(t)
        }
        mount() {
            let {
                dragControls: t
            } = this.node.getProps();
            t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || X.noop
        }
        update() {
            let {
                dragControls: t
            } = this.node.getProps(), {
                dragControls: e
            } = this.node.prevProps || {};
            t !== e && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)))
        }
        unmount() {
            this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession()
        }
    }], 916441);
    let tN = t => (e, i) => {
        t && Z.frame.update(() => t(e, i), !1, !0)
    };
    t.s(["PanGesture", 0, class extends L {
        constructor() {
            super(...arguments), this.removePointerDownListener = X.noop
        }
        onPointerDown(t) {
            this.session = new tw(t, this.createPanHandlers(), {
                transformPagePoint: this.node.getTransformPagePoint(),
                contextWindow: tx(this.node)
            })
        }
        createPanHandlers() {
            let {
                onPanSessionStart: t,
                onPanStart: e,
                onPan: i,
                onPanEnd: s
            } = this.node.getProps();
            return {
                onSessionStart: tN(t),
                onStart: tN(e),
                onMove: tN(i),
                onEnd: (t, e) => {
                    delete this.session, s && Z.frame.postRender(() => s(t, e))
                }
            }
        }
        mount() {
            this.removePointerDownListener = ty(this.node.current, "pointerdown", t => this.onPointerDown(t))
        }
        update() {
            this.session && this.session.updateHandlers(this.createPanHandlers())
        }
        unmount() {
            this.removePointerDownListener(), this.session && this.session.end()
        }
    }], 620021), t.s(["globalProjectionState", 0, {
        hasAnimatedSinceResize: !0,
        hasEverUpdated: !1
    }], 676374)
}, 881255, 847272, t => {
    "use strict";
    var e = t.i(565274),
        i = t.i(777074),
        s = t.i(136263);
    let n = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function r(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (n.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1
    }
    t.s(["isSVGComponent", 0, r], 847272), t.s(["createDomVisualElement", 0, (t, n) => n.isSVG ? ? r(t) ? new e.SVGVisualElement(n) : new i.HTMLVisualElement(n, {
        allowProjection: t !== s.Fragment
    })], 881255)
}, 518338, 246373, 766438, t => {
    "use strict";
    var e = t.i(140926),
        i = t.i(136263),
        s = t.i(357135),
        n = t.i(963554),
        r = t.i(288780),
        o = t.i(847272);
    t.s(["useRender", 0, function(t, a, l, {
        latestValues: u
    }, h, c = !1, d) {
        let p = (d ? ? (0, o.isSVGComponent)(t) ? n.useSVGProps : s.useHTMLProps)(a, u, h, t),
            m = (0, r.filterProps)(a, "string" == typeof t, c),
            f = t !== i.Fragment ? { ...m,
                ...p,
                ref: l
            } : {},
            {
                children: v
            } = a,
            g = (0, i.useMemo)(() => (0, e.isMotionValue)(v) ? v.get() : v, [v]);
        return (0, i.createElement)(t, { ...f,
            children: g
        })
    }], 518338);
    var a = t.i(268162);
    t.s(["scrapeHTMLMotionValuesFromProps", () => a.scrapeMotionValuesFromProps], 246373), t.s(["resolveMotionValue", 0, function(t) {
        return (0, e.isMotionValue)(t) ? t.get() : t
    }], 766438)
}, 288780, t => {
    "use strict";
    var e = t.i(140926);
    let i = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);

    function s(t) {
        return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || i.has(t)
    }
    let n = t => !s(t);

    function r(t) {
        "function" == typeof t && (n = e => e.startsWith("on") ? !s(e) : t(e))
    }
    try {
        r((() => {
            let t = Error("Cannot find module '@emotion/is-prop-valid'");
            throw t.code = "MODULE_NOT_FOUND", t
        })().default)
    } catch {}
    t.s(["filterProps", 0, function(t, i, r) {
        let o = {};
        for (let a in t)("values" !== a || "object" != typeof t.values) && !(0, e.isMotionValue)(t[a]) && (n(a) || !0 === r && s(a) || !i && !s(a) || t.draggable && a.startsWith("onDrag")) && (o[a] = t[a]);
        return o
    }, "loadExternalIsValidProp", 0, r], 288780)
}, 811819, 193961, t => {
    "use strict";
    var e = t.i(136263);
    t.s(["useConstant", 0, function(t) {
        let i = (0, e.useRef)(null);
        return null === i.current && (i.current = t()), i.current
    }], 811819);
    let i = "u" > typeof window ? e.useLayoutEffect : e.useEffect;
    t.s(["useIsomorphicLayoutEffect", 0, i], 193961)
}, 332297, t => {
    "use strict";
    var e = t.i(719372),
        i = t.i(120194),
        s = t.i(655408),
        n = t.i(678923),
        r = t.i(367141),
        o = t.i(433040),
        a = t.i(240998),
        l = t.i(414116),
        u = t.i(152367),
        h = t.i(684075),
        c = t.i(761866),
        d = t.i(901608);
    let p = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        m = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        f = (0, c.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class v extends h.WithPromise {
        constructor({
            autoplay: t = !0,
            delay: e = 0,
            type: i = "keyframes",
            repeat: n = 0,
            repeatDelay: r = 0,
            repeatType: a = "loop",
            keyframes: l,
            name: u,
            motionValue: h,
            element: c,
            ...d
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline ? .()), this.keyframeResolver ? .cancel()
            }, this.createdAt = s.time.now();
            const p = {
                    autoplay: t,
                    delay: e,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: a,
                    name: u,
                    motionValue: h,
                    element: c,
                    ...d
                },
                m = c ? .KeyframeResolver || o.KeyframeResolver;
            this.keyframeResolver = new m(l, (t, e, i) => this.onKeyframesResolved(t, e, p, !i), u, h, c), this.keyframeResolver ? .scheduleResolve()
        }
        onKeyframesResolved(t, o, h, c) {
            let v;
            this.keyframeResolver = void 0;
            let {
                name: g,
                type: y,
                velocity: x,
                delay: T,
                isHandoff: b,
                onUpdate: S
            } = h;
            this.resolvedAt = s.time.now();
            let P = !0;
            (0, l.canAnimate)(t, g, y, x) || (P = !1, (e.MotionGlobalConfig.instantAnimations || !T) && S ? .((0, r.getFinalKeyframe)(t, h, o)), t[0] = t[t.length - 1], (0, u.makeAnimationInstant)(h), h.repeat = 0);
            let w = {
                    startTime: c ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: o,
                    ...h,
                    keyframes: t
                },
                V = P && !b && function(t) {
                    let {
                        motionValue: e,
                        name: i,
                        repeatDelay: s,
                        repeatType: n,
                        damping: r,
                        type: o,
                        keyframes: a
                    } = t;
                    if (!(e ? .owner ? .current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: l,
                        transformTemplate: u
                    } = e.owner.getProps();
                    return f() && i && (d.acceleratedValues.has(i) || m.has(i) && function(t) {
                        for (let e = 0; e < t.length; e++)
                            if ("string" == typeof t[e] && p.test(t[e])) return !0;
                        return !1
                    }(a)) && ("transform" !== i || !u) && !l && !s && "mirror" !== n && 0 !== r && "inertia" !== o
                }(w),
                M = w.motionValue ? .owner ? .current;
            if (V) try {
                v = new a.NativeAnimationExtended({ ...w,
                    element: M
                })
            } catch {
                v = new n.JSAnimation(w)
            } else v = new n.JSAnimation(w);
            v.finished.then(() => {
                this.notifyFinished()
            }).catch(i.noop), this.pendingTimeline && (this.stopTimeline = v.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = v
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(t, e) {
            return this.finished.finally(t).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver ? .resume(), (0, o.flushKeyframeResolvers)()), this._animation
        }
        get duration() {
            return this.animation.duration
        }
        get iterationDuration() {
            return this.animation.iterationDuration
        }
        get time() {
            return this.animation.time
        }
        set time(t) {
            this.animation.time = t
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(t) {
            this.animation.speed = t
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(t) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
        }
        play() {
            this.animation.play()
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.complete()
        }
        cancel() {
            this._animation && this.animation.cancel(), this.keyframeResolver ? .cancel()
        }
    }
    t.s(["AsyncMotionValueAnimation", 0, v], 332297)
}, 678923, t => {
    "use strict";
    t.i(301016);
    var e = t.i(815645),
        i = t.i(508983),
        s = t.i(633836),
        n = t.i(655408),
        r = t.i(899290),
        o = t.i(988876),
        a = t.i(962290),
        l = t.i(660195),
        u = t.i(659337),
        h = t.i(615768),
        c = t.i(367141),
        d = t.i(662305),
        p = t.i(684075);
    let m = t => t / 100;
    class f extends p.WithPromise {
        constructor(t) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                let {
                    motionValue: t
                } = this.options;
                t && t.updatedAt !== n.time.now() && this.tick(n.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop ? .())
            }, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: t
            } = this;
            (0, d.replaceTransitionType)(t);
            let {
                type: i = l.keyframes,
                repeat: s = 0,
                repeatDelay: n = 0,
                repeatType: o,
                velocity: a = 0
            } = t, {
                keyframes: h
            } = t, c = i || l.keyframes;
            c !== l.keyframes && "number" != typeof h[0] && (this.mixKeyframes = (0, e.pipe)(m, (0, r.mix)(h[0], h[1])), h = [0, 100]);
            let p = c({ ...t,
                keyframes: h
            });
            "mirror" === o && (this.mirroredGenerator = c({ ...t,
                keyframes: [...h].reverse(),
                velocity: -a
            })), null === p.calculatedDuration && (p.calculatedDuration = (0, u.calcGeneratorDuration)(p));
            let {
                calculatedDuration: f
            } = p;
            this.calculatedDuration = f, this.resolvedDuration = f + n, this.totalDuration = this.resolvedDuration * (s + 1) - n, this.generator = p
        }
        updateTime(t) {
            let e = Math.round(t - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
        }
        tick(t, e = !1) {
            let s, {
                generator: n,
                totalDuration: r,
                mixKeyframes: o,
                mirroredGenerator: l,
                resolvedDuration: u,
                calculatedDuration: h
            } = this;
            if (null === this.startTime) return n.next(0);
            let {
                delay: d = 0,
                keyframes: p,
                repeat: m,
                repeatType: f,
                repeatDelay: v,
                type: g,
                onUpdate: y,
                finalKeyframe: x
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - r / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
            let T = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1),
                b = this.playbackSpeed >= 0 ? T < 0 : T > r;
            this.currentTime = Math.max(T, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = r);
            let S = this.currentTime,
                P = n;
            if (m) {
                let t = Math.min(this.currentTime, r) / u,
                    e = Math.floor(t),
                    s = t % 1;
                !s && t >= 1 && (s = 1), 1 === s && e--, (e = Math.min(e, m + 1)) % 2 && ("reverse" === f ? (s = 1 - s, v && (s -= v / u)) : "mirror" === f && (P = l)), S = (0, i.clamp)(0, 1, s) * u
            }
            b ? (this.delayState.value = p[0], s = this.delayState) : s = P.next(S), o && !b && (s.value = o(s.value));
            let {
                done: w
            } = s;
            b || null === h || (w = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            let V = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return V && g !== a.inertia && (s.value = (0, c.getFinalKeyframe)(p, this.options, x, this.speed)), y && y(s.value), V && this.finish(), s
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
        get duration() {
            return (0, s.millisecondsToSeconds)(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + (0, s.millisecondsToSeconds)(t)
        }
        get time() {
            return (0, s.millisecondsToSeconds)(this.currentTime)
        }
        set time(t) {
            t = (0, s.secondsToMilliseconds)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = t, this.tick(t))
        }
        getGeneratorVelocity() {
            let t = this.currentTime;
            if (t <= 0) return this.options.velocity || 0;
            if (this.generator.velocity) return this.generator.velocity(t);
            let e = this.generator.next(t).value;
            return (0, h.getGeneratorVelocity)(t => this.generator.next(t).value, t, e)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(t) {
            let e = this.playbackSpeed !== t;
            e && this.driver && this.updateTime(n.time.now()), this.playbackSpeed = t, e && this.driver && (this.time = (0, s.millisecondsToSeconds)(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: t = o.frameloopDriver,
                startTime: e
            } = this.options;
            this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay ? .();
            let i = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = e ? ? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(n.time.now()), this.holdTime = this.currentTime
        }
        complete() {
            "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
        }
        finish() {
            this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete ? .()
        }
        cancel() {
            this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel ? .()
        }
        teardown() {
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(t) {
            return this.startTime = 0, this.tick(t, !0)
        }
        attachTimeline(t) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver ? .stop(), t.observe(this)
        }
    }
    t.s(["JSAnimation", 0, f])
}, 693660, t => {
    "use strict";
    var e = t.i(725542),
        i = t.i(633836),
        s = t.i(120194),
        n = t.i(913777),
        r = t.i(823928),
        o = t.i(367141),
        a = t.i(684075),
        l = t.i(847315),
        u = t.i(825763),
        h = t.i(855397);
    class c extends a.WithPromise {
        constructor(t) {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !t) return;
            const {
                element: i,
                name: s,
                keyframes: r,
                pseudoElement: a,
                allowFlatten: c = !1,
                finalKeyframe: d,
                onComplete: p
            } = t;
            this.isPseudoElement = !!a, this.allowFlatten = c, this.options = t, (0, e.invariant)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const m = function({
                type: t,
                ...e
            }) {
                return (0, h.isGenerator)(t) && (0, u.supportsLinearEasing)() ? t.applyToOptions(e) : (e.duration ? ? (e.duration = 300), e.ease ? ? (e.ease = "easeOut"), e)
            }(t);
            this.animation = (0, l.startWaapiAnimation)(i, s, r, m, a), !1 === m.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !a) {
                    let t = (0, o.getFinalKeyframe)(r, this.options, d, this.speed);
                    this.updateMotionValue && this.updateMotionValue(t), (0, n.setStyle)(i, s, t), this.animation.cancel()
                }
                p ? .(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
        }
        pause() {
            this.animation.pause()
        }
        complete() {
            this.animation.finish ? .()
        }
        cancel() {
            try {
                this.animation.cancel()
            } catch (t) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: t
            } = this;
            "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            let t = this.options ? .element;
            !this.isPseudoElement && t ? .isConnected && this.animation.commitStyles ? .()
        }
        get duration() {
            let t = this.animation.effect ? .getComputedTiming ? .().duration || 0;
            return (0, i.millisecondsToSeconds)(Number(t))
        }
        get iterationDuration() {
            let {
                delay: t = 0
            } = this.options || {};
            return this.duration + (0, i.millisecondsToSeconds)(t)
        }
        get time() {
            return (0, i.millisecondsToSeconds)(Number(this.animation.currentTime) || 0)
        }
        set time(t) {
            let e = null !== this.finishedTime;
            this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = (0, i.secondsToMilliseconds)(t), e && this.animation.pause()
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(t) {
            t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return this.manualStartTime ? ? Number(this.animation.startTime)
        }
        set startTime(t) {
            this.manualStartTime = this.animation.startTime = t
        }
        attachTimeline({
            timeline: t,
            rangeStart: e,
            rangeEnd: i,
            observe: n
        }) {
            return (this.allowFlatten && this.animation.effect ? .updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, t && (0, r.supportsScrollTimeline)()) ? (this.animation.timeline = t, e && (this.animation.rangeStart = e), i && (this.animation.rangeEnd = i), s.noop) : n(this)
        }
    }
    t.s(["NativeAnimation", 0, c], 693660)
}, 240998, 414116, 152367, t => {
    "use strict";
    var e = t.i(508983),
        i = t.i(655408),
        s = t.i(913777),
        n = t.i(678923),
        r = t.i(693660),
        o = t.i(662305),
        a = t.i(509),
        l = t.i(623016);
    let u = {
        anticipate: t.i(403981).anticipate,
        backInOut: l.backInOut,
        circInOut: a.circInOut
    };
    class h extends r.NativeAnimation {
        constructor(t) {
            ! function(t) {
                "string" == typeof t.ease && t.ease in u && (t.ease = u[t.ease])
            }(t), (0, o.replaceTransitionType)(t), super(t), void 0 !== t.startTime && !1 !== t.autoplay && (this.startTime = t.startTime), this.options = t
        }
        updateMotionValue(t) {
            let {
                motionValue: r,
                onUpdate: o,
                onComplete: a,
                element: l,
                ...u
            } = this.options;
            if (!r) return;
            if (void 0 !== t) return void r.set(t);
            let h = new n.JSAnimation({ ...u,
                    autoplay: !1
                }),
                c = Math.max(10, i.time.now() - this.startTime),
                d = (0, e.clamp)(0, 10, c - 10),
                p = h.sample(c).value,
                {
                    name: m
                } = this.options;
            l && m && (0, s.setStyle)(l, m, p), r.setWithVelocity(h.sample(Math.max(0, c - d)).value, p, d), h.stop()
        }
    }
    t.s(["NativeAnimationExtended", 0, h], 240998);
    var c = t.i(725542),
        d = t.i(855397),
        p = t.i(53768);
    let m = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (p.complex.test(t) || "0" === t) && !t.startsWith("url("));
    t.s(["canAnimate", 0, function(t, e, i, s) {
        let n = t[0];
        if (null === n) return !1;
        if ("display" === e || "visibility" === e) return !0;
        let r = t[t.length - 1],
            o = m(n, e),
            a = m(r, e);
        return (0, c.warning)(o === a, `You are trying to animate ${e} from "${n}" to "${r}". "${o?r:n}" is not an animatable value.`, "value-not-animatable"), !!o && !!a && (function(t) {
            let e = t[0];
            if (1 === t.length) return !0;
            for (let i = 0; i < t.length; i++)
                if (t[i] !== e) return !0
        }(t) || ("spring" === i || (0, d.isGenerator)(i)) && s)
    }], 414116), t.s(["makeAnimationInstant", 0, function(t) {
        t.duration = 0, t.type = "keyframes"
    }], 152367)
}, 754497, t => {
    "use strict";
    var e = t.i(899565),
        i = t.i(706221),
        s = t.i(140926);
    t.s(["animateSingleValue", 0, function(t, n, r) {
        let o = (0, s.isMotionValue)(t) ? t : (0, i.motionValue)(t);
        return o.start((0, e.animateMotionValue)("", o, n, r)), o.animation
    }])
}, 988876, t => {
    "use strict";
    var e = t.i(655408),
        i = t.i(672357);
    t.s(["frameloopDriver", 0, t => {
        let s = ({
            timestamp: e
        }) => t(e);
        return {
            start: (t = !0) => i.frame.update(s, t),
            stop: () => (0, i.cancelFrame)(s),
            now: () => i.frameData.isProcessing ? i.frameData.timestamp : e.time.now()
        }
    }])
}, 962290, 615768, 764350, 515745, t => {
    "use strict";
    var e = t.i(102710),
        i = t.i(398361);

    function s(t, e, s) {
        let n = Math.max(e - 5, 0);
        return (0, i.velocityPerSecond)(s - t(n), e - n)
    }
    t.s(["getGeneratorVelocity", 0, s], 615768), t.s(["inertia", 0, function({
        keyframes: t,
        velocity: i = 0,
        power: n = .8,
        timeConstant: r = 325,
        bounceDamping: o = 10,
        bounceStiffness: a = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: c = .5,
        restSpeed: d
    }) {
        let p, m, f = t[0],
            v = {
                done: !1,
                value: f
            },
            g = n * i,
            y = f + g,
            x = void 0 === l ? y : l(y);
        x !== y && (g = x - f);
        let T = t => -g * Math.exp(-t / r),
            b = t => x + T(t),
            S = t => {
                let e = T(t),
                    i = b(t);
                v.done = Math.abs(e) <= c, v.value = v.done ? x : i
            },
            P = t => {
                let i;
                if (i = v.value, void 0 !== u && i < u || void 0 !== h && i > h) {
                    var n;
                    p = t, m = (0, e.spring)({
                        keyframes: [v.value, (n = v.value, void 0 === u ? h : void 0 === h || Math.abs(u - n) < Math.abs(h - n) ? u : h)],
                        velocity: s(b, t, v.value),
                        damping: o,
                        stiffness: a,
                        restDelta: c,
                        restSpeed: d
                    })
                }
            };
        return P(0), {
            calculatedDuration: null,
            next: t => {
                let e = !1;
                return (m || void 0 !== p || (e = !0, S(t), P(t)), void 0 !== p && t >= p) ? m.next(t - p) : (e || S(t), v)
            }
        }
    }], 962290);
    var n = t.i(120194);
    let r = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

    function o(t, e, i, s) {
        return t === e && i === s ? n.noop : n => 0 === n || 1 === n ? n : r(function(t, e, i, s, n) {
            let o, a, l = 0;
            do(o = r(a = e + (i - e) / 2, s, n) - t) > 0 ? i = a : e = a; while (Math.abs(o) > 1e-7 && ++l < 12) return a
        }(n, 0, 1, t, i), e, s)
    }
    t.s(["cubicBezier", 0, o], 764350);
    let a = o(.42, 0, 1, 1),
        l = o(0, 0, .58, 1),
        u = o(.42, 0, .58, 1);
    t.s(["easeIn", 0, a, "easeInOut", 0, u, "easeOut", 0, l], 515745)
}, 660195, 111339, t => {
    "use strict";
    var e = t.i(515745),
        i = t.i(577182),
        s = t.i(725542),
        n = t.i(120194),
        r = t.i(403981),
        o = t.i(623016),
        a = t.i(509),
        l = t.i(764350),
        u = t.i(210514);
    let h = {
            linear: n.noop,
            easeIn: e.easeIn,
            easeInOut: e.easeInOut,
            easeOut: e.easeOut,
            circIn: a.circIn,
            circInOut: a.circInOut,
            circOut: a.circOut,
            backIn: o.backIn,
            backInOut: o.backInOut,
            backOut: o.backOut,
            anticipate: r.anticipate
        },
        c = t => {
            if ((0, u.isBezierDefinition)(t)) {
                (0, s.invariant)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [e, i, n, r] = t;
                return (0, l.cubicBezier)(e, i, n, r)
            }
            return "string" == typeof t ? ((0, s.invariant)(void 0 !== h[t], `Invalid easing type '${t}'`, "invalid-easing-type"), h[t]) : t
        };
    t.s(["easingDefinitionToFunction", 0, c], 111339);
    var d = t.i(226056),
        p = t.i(973626);
    t.s(["keyframes", 0, function({
        duration: t = 300,
        keyframes: s,
        times: n,
        ease: r = "easeInOut"
    }) {
        var o;
        let a = (0, i.isEasingArray)(r) ? r.map(c) : c(r),
            l = {
                done: !1,
                value: s[0]
            },
            u = (o = n && n.length === s.length ? n : (0, p.defaultOffset)(s), o.map(e => e * t)),
            h = (0, d.interpolate)(u, s, {
                ease: Array.isArray(a) ? a : s.map(() => a || e.easeInOut).splice(0, s.length - 1)
            });
        return {
            calculatedDuration: t,
            next: e => (l.value = h(e), l.done = e >= t, l)
        }
    }], 660195)
}, 102710, 659337, 10875, t => {
    "use strict";
    var e = t.i(633836),
        i = t.i(508983),
        s = t.i(725542),
        n = t.i(626122);

    function r(t) {
        let e = 0,
            i = t.next(e);
        for (; !i.done && e < 2e4;) e += 50, i = t.next(e);
        return e >= 2e4 ? 1 / 0 : e
    }

    function o(t, i = 100, s) {
        let n = s({ ...t,
                keyframes: [0, i]
            }),
            a = Math.min(r(n), 2e4);
        return {
            type: "keyframes",
            ease: t => n.next(a * t).value / i,
            duration: (0, e.millisecondsToSeconds)(a)
        }
    }
    t.s(["calcGeneratorDuration", 0, r, "maxGeneratorDuration", 0, 2e4], 659337), t.s(["createGeneratorEasing", 0, o], 10875);
    let a = .01,
        l = 2,
        u = .005,
        h = .5;

    function c(t, e) {
        return t * Math.sqrt(1 - e * e)
    }
    let d = ["duration", "bounce"],
        p = ["stiffness", "damping", "mass"];

    function m(t, e) {
        return e.some(e => void 0 !== t[e])
    }

    function f(t = .3, o = .3) {
        let v, g, y, x, T, b, S = "object" != typeof t ? {
                visualDuration: t,
                keyframes: [0, 1],
                bounce: o
            } : t,
            {
                restSpeed: P,
                restDelta: w
            } = S,
            V = S.keyframes[0],
            M = S.keyframes[S.keyframes.length - 1],
            A = {
                done: !1,
                value: V
            },
            {
                stiffness: E,
                damping: C,
                mass: D,
                duration: k,
                velocity: R,
                isResolvedFromDuration: L
            } = function(t) {
                let n = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!m(t, p) && m(t, d))
                    if (n.velocity = 0, t.visualDuration) {
                        let e = 2 * Math.PI / (1.2 * t.visualDuration),
                            s = e * e,
                            r = 2 * (0, i.clamp)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                        n = { ...n,
                            mass: 1,
                            stiffness: s,
                            damping: r
                        }
                    } else {
                        let r = function({
                            duration: t = 800,
                            bounce: n = .3,
                            velocity: r = 0,
                            mass: o = 1
                        }) {
                            let a, l;
                            (0, s.warning)(t <= (0, e.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let u = 1 - n;
                            u = (0, i.clamp)(.05, 1, u), t = (0, i.clamp)(.01, 10, (0, e.millisecondsToSeconds)(t)), u < 1 ? (a = e => {
                                let i = e * u,
                                    s = i * t;
                                return .001 - (i - r) / c(e, u) * Math.exp(-s)
                            }, l = e => {
                                let i = e * u * t,
                                    s = Math.pow(u, 2) * Math.pow(e, 2) * t,
                                    n = Math.exp(-i),
                                    o = c(Math.pow(e, 2), u);
                                return (i * r + r - s) * n * (-a(e) + .001 > 0 ? -1 : 1) / o
                            }) : (a = e => -.001 + Math.exp(-e * t) * ((e - r) * t + 1), l = e => t * t * (r - e) * Math.exp(-e * t));
                            let h = function(t, e, i) {
                                let s = i;
                                for (let i = 1; i < 12; i++) s -= t(s) / e(s);
                                return s
                            }(a, l, 5 / t);
                            if (t = (0, e.secondsToMilliseconds)(t), isNaN(h)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            }; {
                                let e = Math.pow(h, 2) * o;
                                return {
                                    stiffness: e,
                                    damping: 2 * u * Math.sqrt(o * e),
                                    duration: t
                                }
                            }
                        }({ ...t,
                            velocity: 0
                        });
                        (n = { ...n,
                            ...r,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    }
                return n
            }({ ...S,
                velocity: -(0, e.millisecondsToSeconds)(S.velocity || 0)
            }),
            B = R || 0,
            F = C / (2 * Math.sqrt(E * D)),
            O = M - V,
            I = (0, e.millisecondsToSeconds)(Math.sqrt(E / D)),
            j = 5 > Math.abs(O);
        if (P || (P = j ? a : l), w || (w = j ? u : h), F < 1) y = c(I, F), x = (B + F * I * O) / y, v = t => M - Math.exp(-F * I * t) * (x * Math.sin(y * t) + O * Math.cos(y * t)), T = F * I * x + O * y, b = F * I * O - x * y, g = t => Math.exp(-F * I * t) * (T * Math.sin(y * t) + b * Math.cos(y * t));
        else if (1 === F) {
            v = t => M - Math.exp(-I * t) * (O + (B + I * O) * t);
            let t = B + I * O;
            g = e => Math.exp(-I * e) * (I * t * e - B)
        } else {
            let t = I * Math.sqrt(F * F - 1);
            v = e => {
                let i = Math.exp(-F * I * e),
                    s = Math.min(t * e, 300);
                return M - i * ((B + F * I * O) * Math.sinh(s) + t * O * Math.cosh(s)) / t
            };
            let e = (B + F * I * O) / t,
                i = F * I * e - O * t,
                s = F * I * O - e * t;
            g = e => {
                let n = Math.exp(-F * I * e),
                    r = Math.min(t * e, 300);
                return n * (i * Math.sinh(r) + s * Math.cosh(r))
            }
        }
        let N = {
            calculatedDuration: L && k || null,
            velocity: t => (0, e.secondsToMilliseconds)(g(t)),
            next: t => {
                if (!L && F < 1) {
                    let i = Math.exp(-F * I * t),
                        s = Math.sin(y * t),
                        n = Math.cos(y * t),
                        r = M - i * (x * s + O * n);
                    return A.done = Math.abs((0, e.secondsToMilliseconds)(i * (T * s + b * n))) <= P && Math.abs(M - r) <= w, A.value = A.done ? M : r, A
                }
                let i = v(t);
                return L ? A.done = t >= k : A.done = Math.abs((0, e.secondsToMilliseconds)(g(t))) <= P && Math.abs(M - i) <= w, A.value = A.done ? M : i, A
            },
            toString: () => {
                let t = Math.min(r(N), 2e4),
                    e = (0, n.generateLinearEasing)(e => N.next(t * e).value, t, 30);
                return t + "ms " + e
            },
            toTransition: () => {}
        };
        return N
    }
    f.applyToOptions = t => {
        let i = o(t, 100, f);
        return t.ease = i.ease, t.duration = (0, e.secondsToMilliseconds)(i.duration), t.type = "keyframes", t
    }, t.s(["spring", 0, f], 102710)
}, 855397, t => {
    "use strict";
    t.s(["isGenerator", 0, function(t) {
        return "function" == typeof t && "applyToOptions" in t
    }])
}, 899565, t => {
    "use strict";
    var e = t.i(633836),
        i = t.i(719372),
        s = t.i(332297),
        n = t.i(678923),
        r = t.i(989445),
        o = t.i(152367),
        a = t.i(382053);
    let l = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        u = {
            type: "keyframes",
            duration: .8
        },
        h = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        };
    var c = t.i(367141);
    let d = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
    var p = t.i(672357);
    t.s(["animateMotionValue", 0, (t, m, f, v = {}, g, y) => x => {
        let T = (0, r.getValueTransition)(v, t) || {},
            b = T.delay || v.delay || 0,
            {
                elapsed: S = 0
            } = v;
        S -= (0, e.secondsToMilliseconds)(b);
        let P = {
            keyframes: Array.isArray(f) ? f : [null, f],
            ease: "easeOut",
            velocity: m.getVelocity(),
            ...T,
            delay: -S,
            onUpdate: t => {
                m.set(t), T.onUpdate && T.onUpdate(t)
            },
            onComplete: () => {
                x(), T.onComplete && T.onComplete()
            },
            name: t,
            motionValue: m,
            element: y ? void 0 : g
        };
        ! function(t) {
            for (let e in t)
                if (!d.has(e)) return !0;
            return !1
        }(T) && Object.assign(P, ((t, {
            keyframes: e
        }) => e.length > 2 ? u : a.transformProps.has(t) ? t.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : l : h)(t, P)), P.duration && (P.duration = (0, e.secondsToMilliseconds)(P.duration)), P.repeatDelay && (P.repeatDelay = (0, e.secondsToMilliseconds)(P.repeatDelay)), void 0 !== P.from && (P.keyframes[0] = P.from);
        let w = !1;
        if (!1 !== P.type && (0 !== P.duration || P.repeatDelay) || ((0, o.makeAnimationInstant)(P), 0 === P.delay && (w = !0)), (i.MotionGlobalConfig.instantAnimations || i.MotionGlobalConfig.skipAnimations || g ? .shouldSkipAnimations || T.skipAnimations) && (w = !0, (0, o.makeAnimationInstant)(P), P.delay = 0), P.allowFlatten = !T.type && !T.ease, w && !y && void 0 !== m.get()) {
            let t = (0, c.getFinalKeyframe)(P.keyframes, T);
            if (void 0 !== t) return void p.frame.update(() => {
                P.onUpdate(t), P.onComplete()
            })
        }
        return T.isSync ? new n.JSAnimation(P) : new s.AsyncMotionValueAnimation(P)
    }], 899565)
}, 530754, t => {
    "use strict";
    var e = t.i(989445),
        i = t.i(168185),
        s = t.i(470442),
        n = t.i(142555),
        r = t.i(707051),
        o = t.i(576243),
        a = t.i(899565),
        l = t.i(672357);
    t.s(["animateTarget", 0, function(t, u, {
        delay: h = 0,
        transitionOverride: c,
        type: d
    } = {}) {
        let {
            transition: p,
            transitionEnd: m,
            ...f
        } = u, v = t.getDefaultTransition();
        p = p ? (0, i.resolveTransition)(p, v) : v;
        let g = p ? .reduceMotion,
            y = p ? .skipAnimations;
        c && (p = c);
        let x = [],
            T = d && t.animationState && t.animationState.getState()[d],
            b = p ? .path;
        for (let i in b && b.animateVisualElement(t, f, p, h, x), f) {
            let n = t.getValue(i, t.latestValues[i] ? ? null),
                u = f[i];
            if (void 0 === u || T && function({
                    protectedKeys: t,
                    needsAnimating: e
                }, i) {
                    let s = t.hasOwnProperty(i) && !0 !== e[i];
                    return e[i] = !1, s
                }(T, i)) continue;
            let c = {
                delay: h,
                ...(0, e.getValueTransition)(p || {}, i)
            };
            y && (c.skipAnimations = !0);
            let d = n.get();
            if (void 0 !== d && !n.isAnimating() && !Array.isArray(u) && u === d && !c.velocity) {
                l.frame.update(() => n.set(u));
                continue
            }
            let m = !1;
            if (window.MotionHandoffAnimation) {
                let e = (0, o.getOptimisedAppearId)(t);
                if (e) {
                    let t = window.MotionHandoffAnimation(e, i, l.frame);
                    null !== t && (c.startTime = t, m = !0)
                }
            }(0, r.addValueToWillChange)(t, i);
            let v = g ? ? t.shouldReduceMotion;
            n.start((0, a.animateMotionValue)(i, n, u, v && s.positionalKeys.has(i) ? {
                type: !1
            } : c, t, m));
            let b = n.animation;
            b && x.push(b)
        }
        if (m) {
            let e = () => l.frame.update(() => {
                m && (0, n.setTarget)(t, m)
            });
            x.length ? Promise.all(x).then(e) : e()
        }
        return x
    }])
}, 432182, 874864, 56237, t => {
    "use strict";
    var e = t.i(470442),
        i = t.i(991053),
        s = t.i(62843),
        n = t.i(133071),
        r = t.i(433040);
    let o = t => /^0[^.\s]+$/u.test(t);
    t.s(["isZeroValueString", 0, o], 874864);
    var a = t.i(53768),
        l = t.i(325144),
        u = t.i(900162),
        h = t.i(685319);
    let c = new Set([l.filter, u.mask]);

    function d(t, e) {
        let i = (0, h.getDefaultValueType)(t);
        return c.has(i) || (i = a.complex), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
    }
    t.s(["getAnimatableNone", 0, d], 56237);
    let p = new Set(["auto", "none", "0"]);
    var m = t.i(788761);
    class f extends r.KeyframeResolver {
        constructor(t, e, i, s, n) {
            super(t, e, i, s, n, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                element: r,
                name: o
            } = this;
            if (!r || !r.current) return;
            super.readKeyframes();
            for (let e = 0; e < t.length; e++) {
                let i = t[e];
                if ("string" == typeof i && (i = i.trim(), (0, n.isCSSVariableToken)(i))) {
                    let n = (0, s.getVariableValue)(i, r.current);
                    void 0 !== n && (t[e] = n), e === t.length - 1 && (this.finalKeyframe = i)
                }
            }
            if (this.resolveNoneKeyframes(), !e.positionalKeys.has(o) || 2 !== t.length) return;
            let [a, l] = t, u = (0, i.findDimensionValueType)(a), h = (0, i.findDimensionValueType)(l);
            if ((0, n.containsCSSVariable)(a) !== (0, n.containsCSSVariable)(l) && m.positionalValues[o]) {
                this.needsMeasurement = !0;
                return
            }
            if (u !== h)
                if ((0, m.isNumOrPxType)(u) && (0, m.isNumOrPxType)(h))
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e];
                        "string" == typeof i && (t[e] = parseFloat(i))
                    } else m.positionalValues[o] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: e
            } = this, i = [];
            for (let e = 0; e < t.length; e++) {
                var s;
                (null === t[e] || ("number" == typeof(s = t[e]) ? 0 === s : null === s || "none" === s || "0" === s || o(s))) && i.push(e)
            }
            i.length && function(t, e, i) {
                let s, n = 0;
                for (; n < t.length && !s;) {
                    let e = t[n];
                    "string" == typeof e && !p.has(e) && (0, a.analyseComplexValue)(e).values.length && (s = t[n]), n++
                }
                if (s && i)
                    for (let n of e) t[n] = d(i, s)
            }(t, i, e)
        }
        measureInitialState() {
            let {
                element: t,
                unresolvedKeyframes: e,
                name: i
            } = this;
            if (!t || !t.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = m.positionalValues[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
            let s = e[e.length - 1];
            void 0 !== s && t.getValue(i, s).jump(s, !1)
        }
        measureEndState() {
            let {
                element: t,
                name: e,
                unresolvedKeyframes: i
            } = this;
            if (!t || !t.current) return;
            let s = t.getValue(e);
            s && s.jump(this.measuredOrigin, !1);
            let n = i.length - 1,
                r = i[n];
            i[n] = m.positionalValues[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms ? .length && this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    t.s(["DOMKeyframesResolver", 0, f], 432182)
}, 433040, 788761, t => {
    "use strict";
    var e = t.i(824995),
        i = t.i(104024),
        s = t.i(382053),
        n = t.i(243392),
        r = t.i(561497);
    let o = new Set(["x", "y", "z"]),
        a = s.transformPropOrder.filter(t => !o.has(t));

    function l(t) {
        let e = [];
        return a.forEach(i => {
            let s = t.getValue(i);
            void 0 !== s && (e.push([i, s.get()]), s.set(+!!i.startsWith("scale")))
        }), e
    }
    let u = {
        width: ({
            x: t
        }, {
            paddingLeft: e = "0",
            paddingRight: i = "0",
            boxSizing: s
        }) => {
            let n = t.max - t.min;
            return "border-box" === s ? n : n - parseFloat(e) - parseFloat(i)
        },
        height: ({
            y: t
        }, {
            paddingTop: e = "0",
            paddingBottom: i = "0",
            boxSizing: s
        }) => {
            let n = t.max - t.min;
            return "border-box" === s ? n : n - parseFloat(e) - parseFloat(i)
        },
        top: (t, {
            top: e
        }) => parseFloat(e),
        left: (t, {
            left: e
        }) => parseFloat(e),
        bottom: ({
            y: t
        }, {
            top: e
        }) => parseFloat(e) + (t.max - t.min),
        right: ({
            x: t
        }, {
            left: e
        }) => parseFloat(e) + (t.max - t.min),
        x: (t, {
            transform: e
        }) => (0, i.parseValueFromTransform)(e, "x"),
        y: (t, {
            transform: e
        }) => (0, i.parseValueFromTransform)(e, "y")
    };
    u.translateX = u.x, u.translateY = u.y, t.s(["isNumOrPxType", 0, t => t === n.number || t === r.px, "positionalValues", 0, u, "removeNonTranslationalTransform", 0, l], 788761);
    var h = t.i(672357);
    let c = new Set,
        d = !1,
        p = !1,
        m = !1;

    function f() {
        if (p) {
            let t = Array.from(c).filter(t => t.needsMeasurement),
                e = new Set(t.map(t => t.element)),
                i = new Map;
            e.forEach(t => {
                let e = l(t);
                e.length && (i.set(t, e), t.render())
            }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                t.render();
                let e = i.get(t);
                e && e.forEach(([e, i]) => {
                    t.getValue(e) ? .set(i)
                })
            }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
            })
        }
        p = !1, d = !1, c.forEach(t => t.complete(m)), c.clear()
    }

    function v() {
        c.forEach(t => {
            t.readKeyframes(), t.needsMeasurement && (p = !0)
        })
    }
    t.s(["KeyframeResolver", 0, class {
        constructor(t, e, i, s, n, r = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = s, this.element = n, this.isAsync = r
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (c.add(this), d || (d = !0, h.frame.read(v), h.frame.resolveKeyframes(f))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: t,
                name: i,
                element: s,
                motionValue: n
            } = this;
            if (null === t[0]) {
                let e = n ? .get(),
                    r = t[t.length - 1];
                if (void 0 !== e) t[0] = e;
                else if (s && i) {
                    let e = s.readValue(i, r);
                    null != e && (t[0] = e)
                }
                void 0 === t[0] && (t[0] = r), n && void 0 === e && n.set(t[0])
            }(0, e.fillWildcards)(t)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), c.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (c.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }, "flushKeyframeResolvers", 0, function() {
        m = !0, v(), f(), m = !1
    }], 433040)
}, 367141, t => {
    "use strict";
    let e = t => null !== t;
    t.s(["getFinalKeyframe", 0, function(t, {
        repeat: i,
        repeatType: s = "loop"
    }, n, r = 1) {
        let o = t.filter(e),
            a = r < 0 || i && "loop" !== s && i % 2 == 1 ? 0 : o.length - 1;
        return a && void 0 !== n ? n : o[a]
    }])
}, 973626, 302461, t => {
    "use strict";
    var e = t.i(470934),
        i = t.i(327745);

    function s(t, s) {
        let n = t[t.length - 1];
        for (let r = 1; r <= s; r++) {
            let o = (0, e.progress)(0, s, r);
            t.push((0, i.mixNumber)(n, 1, o))
        }
    }
    t.s(["fillOffset", 0, s], 302461), t.s(["defaultOffset", 0, function(t) {
        let e = [0];
        return s(e, t.length - 1), e
    }], 973626)
}, 824995, 104024, t => {
    "use strict";
    t.s(["fillWildcards", 0, function(t) {
        for (let e = 1; e < t.length; e++) t[e] ? ? (t[e] = t[e - 1])
    }], 824995);
    let e = t => 180 * t / Math.PI,
        i = t => n(e(Math.atan2(t[1], t[0]))),
        s = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
            rotate: i,
            rotateZ: i,
            skewX: t => e(Math.atan(t[1])),
            skewY: t => e(Math.atan(t[2])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
        },
        n = t => ((t %= 360) < 0 && (t += 360), t),
        r = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        o = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        a = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: r,
            scaleY: o,
            scale: t => (r(t) + o(t)) / 2,
            rotateX: t => n(e(Math.atan2(t[6], t[5]))),
            rotateY: t => n(e(Math.atan2(-t[2], t[0]))),
            rotateZ: i,
            rotate: i,
            skewX: t => e(Math.atan(t[4])),
            skewY: t => e(Math.atan(t[1])),
            skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
        };

    function l(t) {
        return +!!t.includes("scale")
    }

    function u(t, e) {
        let i, n;
        if (!t || "none" === t) return l(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) i = a, n = r;
        else {
            let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = s, n = e
        }
        if (!n) return l(e);
        let o = i[e],
            u = n[1].split(",").map(h);
        return "function" == typeof o ? o(u) : u[o]
    }

    function h(t) {
        return parseFloat(t.trim())
    }
    t.s(["defaultTransformValue", 0, l, "parseValueFromTransform", 0, u, "readTransformValue", 0, (t, e) => {
        let {
            transform: i = "none"
        } = getComputedStyle(t);
        return u(i, e)
    }], 104024)
}, 182526, t => {
    "use strict";
    let e = "data-" + (0, t.i(565764).camelToDash)("framerAppearId");
    t.s(["optimizedAppearDataAttribute", 0, e])
}, 576243, t => {
    "use strict";
    var e = t.i(182526);
    t.s(["getOptimisedAppearId", 0, function(t) {
        return t.props[e.optimizedAppearDataAttribute]
    }])
}, 684075, t => {
    "use strict";
    t.s(["WithPromise", 0, class {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(t => {
                this.resolve = t
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(t, e) {
            return this.finished.then(t, e)
        }
    }])
}, 989445, t => {
    "use strict";
    var e = t.i(168185);
    t.s(["getValueTransition", 0, function(t, i) {
        let s = t ? .[i] ? ? t ? .default ? ? t;
        return s !== t ? (0, e.resolveTransition)(s, t) : s
    }])
}, 133071, t => {
    "use strict";
    let e = t => e => "string" == typeof e && e.startsWith(t),
        i = e("--"),
        s = e("var(--"),
        n = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    t.s(["containsCSSVariable", 0, function(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--")
    }, "isCSSVariableName", 0, i, "isCSSVariableToken", 0, t => !!s(t) && n.test(t.split("/*")[0].trim())])
}, 662305, t => {
    "use strict";
    var e = t.i(962290),
        i = t.i(660195),
        s = t.i(102710);
    let n = {
        decay: e.inertia,
        inertia: e.inertia,
        tween: i.keyframes,
        keyframes: i.keyframes,
        spring: s.spring
    };
    t.s(["replaceTransitionType", 0, function(t) {
        "string" == typeof t.type && (t.type = n[t.type])
    }])
}, 168185, t => {
    "use strict";
    t.s(["resolveTransition", 0, function(t, e) {
        if (t ? .inherit && e) {
            let {
                inherit: i,
                ...s
            } = t;
            return { ...e,
                ...s
            }
        }
        return t
    }])
}, 847315, t => {
    "use strict";
    var e = t.i(210514),
        i = t.i(825763),
        s = t.i(626122);
    let n = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        r = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: n([0, .65, .55, 1]),
            circOut: n([.55, 0, 1, .45]),
            backIn: n([.31, .01, .66, -.59]),
            backOut: n([.33, 1.53, .69, .99])
        };
    t.s(["startWaapiAnimation", 0, function(t, o, a, {
        delay: l = 0,
        duration: u = 300,
        repeat: h = 0,
        repeatType: c = "loop",
        ease: d = "easeOut",
        times: p
    } = {}, m) {
        let f = {
            [o]: a
        };
        p && (f.offset = p);
        let v = function t(o, a) {
            if (o) return "function" == typeof o ? (0, i.supportsLinearEasing)() ? (0, s.generateLinearEasing)(o, a) : "ease-out" : (0, e.isBezierDefinition)(o) ? n(o) : Array.isArray(o) ? o.map(e => t(e, a) || r.easeOut) : r[o]
        }(d, u);
        Array.isArray(v) && (f.easing = v);
        let g = {
            delay: l,
            duration: u,
            easing: Array.isArray(v) ? "linear" : v,
            fill: "both",
            iterations: h + 1,
            direction: "reverse" === c ? "alternate" : "normal"
        };
        return m && (g.pseudoElement = m), t.animate(f, g)
    }], 847315)
}, 901608, t => {
    "use strict";
    let e = new Set(["opacity", "clipPath", "filter", "transform"]);
    t.s(["acceleratedValues", 0, e])
}, 626122, t => {
    "use strict";
    t.s(["generateLinearEasing", 0, (t, e, i = 10) => {
        let s = "",
            n = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < n; e++) s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
        return `linear(${s.substring(0,s.length-2)})`
    }])
}, 672357, 683669, t => {
    "use strict";
    var e = t.i(120194),
        i = t.i(719372);
    let s = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];

    function n(t, e) {
        let n = !1,
            r = !0,
            o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            a = () => n = !0,
            l = s.reduce((t, e) => (t[e] = function(t) {
                let e = new Set,
                    i = new Set,
                    s = !1,
                    n = !1,
                    r = new WeakSet,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    };

                function a(e) {
                    r.has(e) && (l.schedule(e), t()), e(o)
                }
                let l = {
                    schedule: (t, n = !1, o = !1) => {
                        let a = o && s ? e : i;
                        return n && r.add(t), a.add(t), t
                    },
                    cancel: t => {
                        i.delete(t), r.delete(t)
                    },
                    process: t => {
                        if (o = t, s) {
                            n = !0;
                            return
                        }
                        s = !0;
                        let r = e;
                        e = i, i = r, e.forEach(a), e.clear(), s = !1, n && (n = !1, l.process(t))
                    }
                };
                return l
            }(a), t), {}),
            {
                setup: u,
                read: h,
                resolveKeyframes: c,
                preUpdate: d,
                update: p,
                preRender: m,
                render: f,
                postRender: v
            } = l,
            g = () => {
                let s = i.MotionGlobalConfig.useManualTiming,
                    a = s ? o.timestamp : performance.now();
                n = !1, s || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(a - o.timestamp, 40), 1)), o.timestamp = a, o.isProcessing = !0, u.process(o), h.process(o), c.process(o), d.process(o), p.process(o), m.process(o), f.process(o), v.process(o), o.isProcessing = !1, n && e && (r = !1, t(g))
            };
        return {
            schedule: s.reduce((e, i) => {
                let s = l[i];
                return e[i] = (e, i = !1, a = !1) => (!n && (n = !0, r = !0, o.isProcessing || t(g)), s.schedule(e, i, a)), e
            }, {}),
            cancel: t => {
                for (let e = 0; e < s.length; e++) l[s[e]].cancel(t)
            },
            state: o,
            steps: l
        }
    }
    t.s(["createRenderBatcher", 0, n], 683669);
    let {
        schedule: r,
        cancel: o,
        state: a,
        steps: l
    } = n("u" > typeof requestAnimationFrame ? requestAnimationFrame : e.noop, !0);
    t.s(["cancelFrame", 0, o, "frame", 0, r, "frameData", 0, a, "frameSteps", 0, l], 672357)
}, 328744, t => {
    "use strict";
    let {
        schedule: e,
        cancel: i
    } = (0, t.i(683669).createRenderBatcher)(queueMicrotask, !1);
    t.s(["cancelMicrotask", 0, i, "microtask", 0, e])
}, 655408, t => {
    "use strict";
    let e;
    var i = t.i(719372),
        s = t.i(672357);

    function n() {
        e = void 0
    }
    let r = {
        now: () => (void 0 === e && r.set(s.frameData.isProcessing || i.MotionGlobalConfig.useManualTiming ? s.frameData.timestamp : performance.now()), e),
        set: t => {
            e = t, queueMicrotask(n)
        }
    };
    t.s(["time", 0, r])
}, 763994, 453311, t => {
    "use strict";
    var e = t.i(140926),
        i = t.i(432182),
        s = t.i(633836),
        n = t.i(423796),
        r = t.i(874864),
        o = t.i(810246),
        a = t.i(433040),
        l = t.i(693660),
        u = t.i(901608),
        h = t.i(328744),
        c = t.i(655408),
        d = t.i(301219),
        p = t.i(706221),
        m = t.i(53768),
        f = t.i(56237),
        v = t.i(938669),
        g = t.i(368623),
        y = t.i(587377),
        x = t.i(382053),
        T = t.i(81107),
        b = t.i(494004),
        S = t.i(923792),
        P = t.i(876009),
        w = t.i(672357);
    let V = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        M = {};
    class A {
        scrapeMotionValuesFromProps(t, e, i) {
            return {}
        }
        constructor({
            parent: t,
            props: i,
            presenceContext: s,
            reducedMotionConfig: n,
            skipAnimations: r,
            blockInitialAnimation: o,
            visualState: l
        }, u = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = a.KeyframeResolver, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let t = c.time.now();
                this.renderScheduledAt < t && (this.renderScheduledAt = t, w.frame.render(this.render, !1, !0))
            };
            const {
                latestValues: h,
                renderState: d
            } = l;
            this.latestValues = h, this.baseTarget = { ...h
            }, this.initialValues = i.initial ? { ...h
            } : {}, this.renderState = d, this.parent = t, this.props = i, this.presenceContext = s, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = n, this.skipAnimationsConfig = r, this.options = u, this.blockInitialAnimation = !!o, this.isControllingVariants = (0, y.isControllingVariants)(i), this.isVariantNode = (0, y.isVariantNode)(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
            const {
                willChange: p,
                ...m
            } = this.scrapeMotionValuesFromProps(i, {}, this);
            for (const t in m) {
                const i = m[t];
                void 0 !== h[t] && (0, e.isMotionValue)(i) && i.set(h[t])
            }
        }
        mount(t) {
            if (this.hasBeenMounted)
                for (let t in this.initialValues) this.values.get(t) ? .jump(this.initialValues[t]), this.latestValues[t] = this.initialValues[t];
            this.current = t, g.visualElementStore.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (P.hasReducedMotionListener.current || (0, b.initPrefersReducedMotion)(), this.shouldReduceMotion = P.prefersReducedMotion.current), this.shouldSkipAnimations = this.skipAnimationsConfig ? ? !1, this.parent ? .addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
            for (let t in this.projection && this.projection.unmount(), (0, w.cancelFrame)(this.notifyUpdate), (0, w.cancelFrame)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent ? .removeChild(this), this.events) this.events[t].clear();
            for (let t in this.features) {
                let e = this.features[t];
                e && (e.unmount(), e.isMounted = !1)
            }
            this.current = null
        }
        addChild(t) {
            this.children.add(t), this.enteringChildren ? ? (this.enteringChildren = new Set), this.enteringChildren.add(t)
        }
        removeChild(t) {
            this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
        }
        bindToMotionValue(t, e) {
            let i;
            if (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(), e.accelerate && u.acceleratedValues.has(t) && this.current instanceof HTMLElement) {
                let {
                    factory: i,
                    keyframes: n,
                    times: r,
                    ease: o,
                    duration: a
                } = e.accelerate, u = new l.NativeAnimation({
                    element: this.current,
                    name: t,
                    keyframes: n,
                    times: r,
                    ease: o,
                    duration: (0, s.secondsToMilliseconds)(a)
                }), h = i(u);
                this.valueSubscriptions.set(t, () => {
                    h(), u.cancel()
                });
                return
            }
            let n = x.transformProps.has(t);
            n && this.onBindTransform && this.onBindTransform();
            let r = e.on("change", e => {
                this.latestValues[t] = e, this.props.onUpdate && w.frame.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            "u" > typeof window && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                r(), i && i()
            })
        }
        sortNodePosition(t) {
            return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
        }
        updateFeatures() {
            let t = "animation";
            for (t in M) {
                let e = M[t];
                if (!e) continue;
                let {
                    isEnabled: i,
                    Feature: s
                } = e;
                if (!this.features[t] && s && i(this.props) && (this.features[t] = new s(this)), this.features[t]) {
                    let e = this.features[t];
                    e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, d.createBox)()
        }
        getStaticValue(t) {
            return this.latestValues[t]
        }
        setStaticValue(t, e) {
            this.latestValues[t] = e
        }
        update(t, e) {
            (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
            for (let e = 0; e < V.length; e++) {
                let i = V[e];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let s = t["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = (0, T.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(t) {
            return this.props.variants ? this.props.variants[t] : void 0
        }
        getDefaultTransition() {
            return this.props.transition
        }
        getTransformPagePoint() {
            return this.props.transformPagePoint
        }
        getClosestVariantNode() {
            return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
        }
        addVariantChild(t) {
            let e = this.getClosestVariantNode();
            if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
        }
        addValue(t, e) {
            let i = this.values.get(t);
            e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
        }
        removeValue(t) {
            this.values.delete(t);
            let e = this.valueSubscriptions.get(t);
            e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
        }
        hasValue(t) {
            return this.values.has(t)
        }
        getValue(t, e) {
            if (this.props.values && this.props.values[t]) return this.props.values[t];
            let i = this.values.get(t);
            return void 0 === i && void 0 !== e && (i = (0, p.motionValue)(null === e ? void 0 : e, {
                owner: this
            }), this.addValue(t, i)), i
        }
        readValue(t, i) {
            let s = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ? ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
            return null != s && ("string" == typeof s && ((0, n.isNumericalString)(s) || (0, r.isZeroValueString)(s)) ? s = parseFloat(s) : !(0, v.findValueType)(s) && m.complex.test(i) && (s = (0, f.getAnimatableNone)(t, i)), this.setBaseTarget(t, (0, e.isMotionValue)(s) ? s.get() : s)), (0, e.isMotionValue)(s) ? s.get() : s
        }
        setBaseTarget(t, e) {
            this.baseTarget[t] = e
        }
        getBaseTarget(t) {
            let i, {
                initial: s
            } = this.props;
            if ("string" == typeof s || "object" == typeof s) {
                let e = (0, S.resolveVariantFromProps)(this.props, s, this.presenceContext ? .custom);
                e && (i = e[t])
            }
            if (s && void 0 !== i) return i;
            let n = this.getBaseTargetFromProps(this.props, t);
            return void 0 === n || (0, e.isMotionValue)(n) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : n
        }
        on(t, e) {
            return this.events[t] || (this.events[t] = new o.SubscriptionManager), this.events[t].add(e)
        }
        notify(t, ...e) {
            this.events[t] && this.events[t].notify(...e)
        }
        scheduleRenderMicrotask() {
            h.microtask.render(this.render)
        }
    }
    t.s(["VisualElement", 0, A, "getFeatureDefinitions", 0, function() {
        return M
    }, "setFeatureDefinitions", 0, function(t) {
        M = t
    }], 453311), t.s(["DOMVisualElement", 0, class extends A {
        constructor() {
            super(...arguments), this.KeyframeResolver = i.DOMKeyframesResolver
        }
        sortInstanceNodePosition(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1
        }
        getBaseTargetFromProps(t, e) {
            let i = t.style;
            return i ? i[e] : void 0
        }
        removeValueFromRenderState(t, {
            vars: e,
            style: i
        }) {
            delete e[t], delete i[t]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: t
            } = this.props;
            (0, e.isMotionValue)(t) && (this.childSubscription = t.on("change", t => {
                this.current && (this.current.textContent = `${t}`)
            }))
        }
    }], 763994)
}, 913777, t => {
    "use strict";
    t.s(["setStyle", 0, function(t, e, i) {
        e.startsWith("--") ? t.style.setProperty(e, i) : t.style[e] = i
    }], 913777)
}, 565764, t => {
    "use strict";
    t.s(["camelToDash", 0, function(t) {
        return t.replace(/([A-Z])/g, t => `-${t.toLowerCase()}`)
    }])
}, 368623, t => {
    "use strict";
    let e = new WeakMap;
    t.s(["visualElementStore", 0, e])
}, 565274, 493559, 734225, 997214, 58198, 4075, 880925, 268162, 185747, 627722, 414449, 987826, 123457, 777074, t => {
    "use strict";
    var e = t.i(382053),
        i = t.i(685319),
        s = t.i(301219),
        n = t.i(763994),
        r = t.i(565764);
    let o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
    var a = t.i(426445),
        l = t.i(133071);
    let u = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        h = e.transformPropOrder.length;

    function c(t, i, s) {
        let {
            style: n,
            vars: r,
            transformOrigin: c
        } = t, d = !1, p = !1;
        for (let t in i) {
            let s = i[t];
            if (e.transformProps.has(t)) {
                d = !0;
                continue
            }
            if ((0, l.isCSSVariableName)(t)) {
                r[t] = s;
                continue
            } {
                let e = o(s, a.numberValueTypes[t]);
                t.startsWith("origin") ? (p = !0, c[t] = e) : n[t] = e
            }
        }
        if (!i.transform && (d || s ? n.transform = function(t, i, s) {
                let n = "",
                    r = !0;
                for (let l = 0; l < h; l++) {
                    let h = e.transformPropOrder[l],
                        c = t[h];
                    if (void 0 === c) continue;
                    let d = !0;
                    if ("number" == typeof c) d = c === +!!h.startsWith("scale");
                    else {
                        let t = parseFloat(c);
                        d = h.startsWith("scale") ? 1 === t : 0 === t
                    }
                    if (!d || s) {
                        let t = o(c, a.numberValueTypes[h]);
                        if (!d) {
                            r = !1;
                            let e = u[h] || h;
                            n += `${e}(${t}) `
                        }
                        s && (i[h] = t)
                    }
                }
                let l = t.pathRotation;
                return l && (r = !1, n += `rotate(${o(l,a.numberValueTypes.pathRotation)}) `), n = n.trim(), s ? n = s(i, r ? "" : n) : r && (n = "none"), n
            }(i, t.transform, s) : n.transform && (n.transform = "none")), p) {
            let {
                originX: t = "50%",
                originY: e = "50%",
                originZ: i = 0
            } = c;
            n.transformOrigin = `${t} ${e} ${i}`
        }
    }
    t.s(["buildHTMLStyles", 0, c], 493559);
    let d = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        p = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        },
        m = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];

    function f(t, {
        attrX: e,
        attrY: i,
        attrScale: s,
        pathLength: n,
        pathSpacing: r = 1,
        pathOffset: o = 0,
        ...a
    }, l, u, h) {
        if (c(t, a, u), l) {
            t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
            return
        }
        t.attrs = t.style, t.style = {};
        let {
            attrs: v,
            style: g
        } = t;
        for (let t of (v.transform && (g.transform = v.transform, delete v.transform), (g.transform || v.transformOrigin) && (g.transformOrigin = v.transformOrigin ? ? "50% 50%", delete v.transformOrigin), g.transform && (g.transformBox = h ? .transformBox ? ? "fill-box", delete v.transformBox), m)) void 0 !== v[t] && (g[t] = v[t], delete v[t]);
        void 0 !== e && (v.x = e), void 0 !== i && (v.y = i), void 0 !== s && (v.scale = s), void 0 !== n && function(t, e, i = 1, s = 0, n = !0) {
            t.pathLength = 1;
            let r = n ? d : p;
            t[r.offset] = `${-s}`, t[r.array] = `${e} ${i}`
        }(v, n, r, o, !1)
    }
    t.s(["buildSVGAttrs", 0, f], 734225);
    let v = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]),
        g = t => "string" == typeof t && "svg" === t.toLowerCase();

    function y(t, {
        style: e,
        vars: i
    }, s, n) {
        let r, o = t.style;
        for (r in e) o[r] = e[r];
        for (r in n ? .applyProjectionStyles(o, s), i) o.setProperty(r, i[r])
    }
    t.s(["isSVGTag", 0, g], 997214);
    var x = t.i(140926);
    let T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
    t.s(["cornerRadiusProps", 0, T], 58198);
    var b = t.i(561497);

    function S(t, e) {
        return e.max === e.min ? 0 : t / (e.max - e.min) * 100
    }
    let P = {
        correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
                if (!b.px.test(t)) return t;
                else t = parseFloat(t);
            let i = S(t, e.target.x),
                s = S(t, e.target.y);
            return `${i}% ${s}%`
        }
    };
    var w = t.i(53768),
        V = t.i(327745);
    let M = {
        borderRadius: { ...P,
            applyTo: [...T]
        },
        borderTopLeftRadius: P,
        borderTopRightRadius: P,
        borderBottomLeftRadius: P,
        borderBottomRightRadius: P,
        boxShadow: {
            correct: (t, {
                treeScale: e,
                projectionDelta: i
            }) => {
                let s = w.complex.parse(t);
                if (s.length > 5) return t;
                let n = w.complex.createTransformer(t),
                    r = +("number" != typeof s[0]),
                    o = i.x.scale * e.x,
                    a = i.y.scale * e.y;
                s[0 + r] /= o, s[1 + r] /= a;
                let l = (0, V.mixNumber)(o, a, .5);
                return "number" == typeof s[2 + r] && (s[2 + r] /= l), "number" == typeof s[3 + r] && (s[3 + r] /= l), n(s)
            }
        }
    };

    function A(t, {
        layout: i,
        layoutId: s
    }) {
        return e.transformProps.has(t) || t.startsWith("origin") || (i || void 0 !== s) && (!!M[t] || "opacity" === t)
    }

    function E(t, e, i) {
        let s = t.style,
            n = e ? .style,
            r = {};
        if (!s) return r;
        for (let e in s)((0, x.isMotionValue)(s[e]) || n && (0, x.isMotionValue)(n[e]) || A(e, t) || i ? .getValue(e) ? .liveStyle !== void 0) && (r[e] = s[e]);
        return r
    }

    function C(t, i, s) {
        let n = E(t, i, s);
        for (let s in t)((0, x.isMotionValue)(t[s]) || (0, x.isMotionValue)(i[s])) && (n[-1 !== e.transformPropOrder.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = t[s]);
        return n
    }
    t.s(["scaleCorrectors", 0, M], 4075), t.s(["isForcedMotionValue", 0, A], 880925), t.s(["scrapeMotionValuesFromProps", 0, E], 268162), t.s(["scrapeMotionValuesFromProps", 0, C], 185747);
    class D extends n.DOMVisualElement {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = s.createBox
        }
        getBaseTargetFromProps(t, e) {
            return t[e]
        }
        readValueFromInstance(t, s) {
            if (e.transformProps.has(s)) {
                let t = (0, i.getDefaultValueType)(s);
                return t && t.default || 0
            }
            return s = v.has(s) ? s : (0, r.camelToDash)(s), t.getAttribute(s)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return C(t, e, i)
        }
        build(t, e, i) {
            f(t, e, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(t, e, i, s) {
            for (let i in y(t, e, void 0, s), e.attrs) t.setAttribute(v.has(i) ? i : (0, r.camelToDash)(i), e.attrs[i])
        }
        mount(t) {
            this.isSVGTag = g(t.tagName), super.mount(t)
        }
    }
    t.s(["SVGVisualElement", 0, D], 565274);
    var k = t.i(104024);

    function R({
        top: t,
        left: e,
        right: i,
        bottom: s
    }) {
        return {
            x: {
                min: e,
                max: i
            },
            y: {
                min: t,
                max: s
            }
        }
    }

    function L(t, e) {
        if (!e) return t;
        let i = e({
                x: t.left,
                y: t.top
            }),
            s = e({
                x: t.right,
                y: t.bottom
            });
        return {
            top: i.y,
            left: i.x,
            bottom: s.y,
            right: s.x
        }
    }

    function B(t) {
        return void 0 === t || 1 === t
    }

    function F({
        scale: t,
        scaleX: e,
        scaleY: i
    }) {
        return !B(t) || !B(e) || !B(i)
    }

    function O(t) {
        return F(t) || I(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
    }

    function I(t) {
        var e, i;
        return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
    }
    t.s(["convertBoundingBoxToBox", 0, R, "convertBoxToBoundingBox", 0, function({
        x: t,
        y: e
    }) {
        return {
            top: e.min,
            right: t.max,
            bottom: e.max,
            left: t.min
        }
    }, "transformBoxPoints", 0, L], 627722);

    function j(t, e, i) {
        return i + e * (t - i)
    }

    function N(t, e, i, s, n) {
        return void 0 !== n && (t = j(t, n, s)), j(t, i, s) + e
    }

    function U(t, e = 0, i = 1, s, n) {
        t.min = N(t.min, e, i, s, n), t.max = N(t.max, e, i, s, n)
    }

    function W(t, {
        x: e,
        y: i
    }) {
        U(t.x, e.translate, e.scale, e.originPoint), U(t.y, i.translate, i.scale, i.originPoint)
    }

    function G(t, e) {
        t.min += e, t.max += e
    }

    function $(t, e, i, s, n = .5) {
        let r = (0, V.mixNumber)(t.min, t.max, n);
        U(t, e, i, r, s)
    }

    function z(t, e) {
        return "string" == typeof t ? parseFloat(t) / 100 * (e.max - e.min) : t
    }

    function K(t, e, i) {
        let s = i ? ? t;
        $(t.x, z(e.x, s.x), e.scaleX, e.scale, e.originX), $(t.y, z(e.y, s.y), e.scaleY, e.scale, e.originY)
    }

    function H(t, e) {
        return R(L(t.getBoundingClientRect(), e))
    }
    t.s(["has2DTranslate", 0, I, "hasScale", 0, F, "hasTransform", 0, O], 414449), t.s(["applyBoxDelta", 0, W, "applyTreeDeltas", 0, function(t, e, i, s = !1) {
        let n, r, o = i.length;
        if (o) {
            e.x = e.y = 1;
            for (let a = 0; a < o; a++) {
                r = (n = i[a]).projectionDelta;
                let {
                    visualElement: o
                } = n.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && (G(t.x, -n.scroll.offset.x), G(t.y, -n.scroll.offset.y)), r && (e.x *= r.x.scale, e.y *= r.y.scale, W(t, r)), s && O(n.latestValues) && K(t, n.latestValues, n.layout ? .layoutBox))
            }
            e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
        }
    }, "scalePoint", 0, j, "transformBox", 0, K, "translateAxis", 0, G], 987826), t.s(["measurePageBox", 0, function(t, e, i) {
        let s = H(t, i),
            {
                scroll: n
            } = e;
        return n && (G(s.x, n.offset.x), G(s.y, n.offset.y)), s
    }, "measureViewportBox", 0, H], 123457);
    var Y = n;
    class X extends Y.DOMVisualElement {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = y
        }
        readValueFromInstance(t, i) {
            if (e.transformProps.has(i)) return this.projection ? .isProjecting ? (0, k.defaultTransformValue)(i) : (0, k.readTransformValue)(t, i); {
                let e = window.getComputedStyle(t),
                    s = ((0, l.isCSSVariableName)(i) ? e.getPropertyValue(i) : e[i]) || 0;
                return "string" == typeof s ? s.trim() : s
            }
        }
        measureInstanceViewportBox(t, {
            transformPagePoint: e
        }) {
            return H(t, e)
        }
        build(t, e, i) {
            c(t, e, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(t, e, i) {
            return E(t, e, i)
        }
    }
    t.s(["HTMLVisualElement", 0, X], 777074)
}, 587377, 819673, 653425, 250760, 81107, t => {
    "use strict";

    function e(t) {
        return null !== t && "object" == typeof t && "function" == typeof t.start
    }

    function i(t) {
        return "string" == typeof t || Array.isArray(t)
    }
    t.s(["isAnimationControls", 0, e], 819673), t.s(["isVariantLabel", 0, i], 653425);
    let s = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        n = ["initial", ...s];

    function r(t) {
        return e(t.animate) || n.some(e => i(t[e]))
    }
    t.s(["variantPriorityOrder", 0, s, "variantProps", 0, n], 250760), t.s(["isControllingVariants", 0, r, "isVariantNode", 0, function(t) {
        return !!(r(t) || t.variants)
    }], 587377);
    var o = t.i(706221),
        a = t.i(140926);
    t.s(["updateMotionValuesFromProps", 0, function(t, e, i) {
        for (let s in e) {
            let n = e[s],
                r = i[s];
            if ((0, a.isMotionValue)(n)) t.addValue(s, n);
            else if ((0, a.isMotionValue)(r)) t.addValue(s, (0, o.motionValue)(n, {
                owner: t
            }));
            else if (r !== n)
                if (t.hasValue(s)) {
                    let e = t.getValue(s);
                    !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n)
                } else {
                    let e = t.getStaticValue(s);
                    t.addValue(s, (0, o.motionValue)(void 0 !== e ? e : n, {
                        owner: t
                    }))
                }
        }
        for (let s in i) void 0 === e[s] && t.removeValue(s);
        return e
    }], 81107)
}, 470442, t => {
    "use strict";
    let e = new Set(["width", "height", "top", "left", "right", "bottom", ...t.i(382053).transformPropOrder]);
    t.s(["positionalKeys", 0, e])
}, 382053, t => {
    "use strict";
    let e = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        i = new Set([...e, "pathRotation"]);
    t.s(["transformPropOrder", 0, e, "transformProps", 0, i])
}, 488342, t => {
    "use strict";
    var e = t.i(923792);
    t.s(["resolveVariant", 0, function(t, i, s) {
        let n = t.getProps();
        return (0, e.resolveVariantFromProps)(n, i, void 0 !== s ? s : n.custom, t)
    }])
}, 923792, t => {
    "use strict";

    function e(t) {
        let e = [{}, {}];
        return t ? .values.forEach((t, i) => {
            e[0][i] = t.get(), e[1][i] = t.getVelocity()
        }), e
    }
    t.s(["resolveVariantFromProps", 0, function(t, i, s, n) {
        if ("function" == typeof i) {
            let [r, o] = e(n);
            i = i(void 0 !== s ? s : t.custom, r, o)
        }
        if ("string" == typeof i && (i = t.variants && t.variants[i]), "function" == typeof i) {
            let [r, o] = e(n);
            i = i(void 0 !== s ? s : t.custom, r, o)
        }
        return i
    }])
}, 142555, 154166, 707051, t => {
    "use strict";
    var e = t.i(706221),
        i = t.i(488342);
    let s = t => Array.isArray(t);
    t.s(["isKeyframesTarget", 0, s], 154166), t.s(["setTarget", 0, function(t, n) {
        let {
            transitionEnd: r = {},
            transition: o = {},
            ...a
        } = (0, i.resolveVariant)(t, n) || {};
        for (let i in a = { ...a,
                ...r
            }) {
            var l;
            let n = s(l = a[i]) ? l[l.length - 1] || 0 : l;
            t.hasValue(i) ? t.getValue(i).set(n) : t.addValue(i, (0, e.motionValue)(n))
        }
    }], 142555);
    var n = t.i(719372),
        r = t.i(140926);
    t.s(["addValueToWillChange", 0, function(t, e) {
        let i = t.getValue("willChange");
        if ((0, r.isMotionValue)(i) && i.add) return i.add(e);
        if (!i && n.MotionGlobalConfig.WillChange) {
            let i = new n.MotionGlobalConfig.WillChange("auto");
            t.addValue("willChange", i), i.add(e)
        }
    }], 707051)
}, 270736, t => {
    "use strict";
    let e, i;
    var s = t.i(256650),
        n = t.i(513038);
    let r = new WeakMap,
        o = (t, e, i) => (n, r) => r && r[0] ? r[0][t + "Size"] : (0, s.isSVGElement)(n) && "getBBox" in n ? n.getBBox()[e] : n[i],
        a = o("inline", "width", "offsetWidth"),
        l = o("block", "height", "offsetHeight");

    function u({
        target: t,
        borderBoxSize: e
    }) {
        r.get(t) ? .forEach(i => {
            i(t, {
                get width() {
                    return a(t, e)
                },
                get height() {
                    return l(t, e)
                }
            })
        })
    }

    function h(t) {
        t.forEach(u)
    }
    let c = new Set;
    t.s(["resize", 0, function(t, s) {
        let o;
        return "function" == typeof t ? (c.add(t), i || (i = () => {
            let t = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            c.forEach(e => e(t))
        }, window.addEventListener("resize", i)), () => {
            c.delete(t), c.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
        }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(h)), (o = (0, n.resolveElements)(t)).forEach(t => {
            let i = r.get(t);
            i || (i = new Set, r.set(t, i)), i.add(s), e ? .observe(t)
        }), () => {
            o.forEach(t => {
                let i = r.get(t);
                i ? .delete(s), i ? .size || e ? .unobserve(t)
            })
        })
    }], 270736)
}, 226056, t => {
    "use strict";
    var e = t.i(725542),
        i = t.i(508983),
        s = t.i(719372),
        n = t.i(120194),
        r = t.i(815645),
        o = t.i(470934),
        a = t.i(899290);
    t.s(["interpolate", 0, function(t, l, {
        clamp: u = !0,
        ease: h,
        mixer: c
    } = {}) {
        let d = t.length;
        if ((0, e.invariant)(d === l.length, "Both input and output ranges must be the same length", "range-length"), 1 === d) return () => l[0];
        if (2 === d && l[0] === l[1]) return () => l[1];
        let p = t[0] === t[1];
        t[0] > t[d - 1] && (t = [...t].reverse(), l = [...l].reverse());
        let m = function(t, e, i) {
                let o = [],
                    l = i || s.MotionGlobalConfig.mix || a.mix,
                    u = t.length - 1;
                for (let i = 0; i < u; i++) {
                    let s = l(t[i], t[i + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[i] || n.noop : e;
                        s = (0, r.pipe)(t, s)
                    }
                    o.push(s)
                }
                return o
            }(l, h, c),
            f = m.length,
            v = e => {
                if (p && e < t[0]) return l[0];
                let i = 0;
                if (f > 1)
                    for (; i < t.length - 2 && !(e < t[i + 1]); i++);
                let s = (0, o.progress)(t[i], t[i + 1], e);
                return m[i](s)
            };
        return u ? e => v((0, i.clamp)(t[0], t[d - 1], e)) : v
    }])
}, 335029, t => {
    "use strict";
    var e = t.i(825465);
    t.s(["isHTMLElement", 0, function(t) {
        return (0, e.isObject)(t) && "offsetHeight" in t && !("ownerSVGElement" in t)
    }])
}, 256650, t => {
    "use strict";
    var e = t.i(825465);
    t.s(["isSVGElement", 0, function(t) {
        return (0, e.isObject)(t) && "ownerSVGElement" in t
    }])
}, 570615, t => {
    "use strict";
    var e = t.i(256650);
    t.s(["isSVGSVGElement", 0, function(t) {
        return (0, e.isSVGElement)(t) && "svg" === t.tagName
    }])
}, 899290, t => {
    "use strict";
    var e = t.i(815645),
        i = t.i(725542),
        s = t.i(133071),
        n = t.i(162158),
        r = t.i(53768),
        o = t.i(752934),
        a = t.i(87436);

    function l(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? t + (e - t) * 6 * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    var u = t.i(439327);

    function h(t, e) {
        return i => i > 0 ? e : t
    }
    var c = t.i(327745);
    let d = (t, e, i) => {
            let s = t * t,
                n = i * (e * e - s) + s;
            return n < 0 ? 0 : Math.sqrt(n)
        },
        p = [o.hex, u.rgba, a.hsla];

    function m(t) {
        let e = p.find(e => e.test(t));
        if ((0, i.warning)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
        let s = e.parse(t);
        return e === a.hsla && (s = function({
            hue: t,
            saturation: e,
            lightness: i,
            alpha: s
        }) {
            t /= 360, i /= 100;
            let n = 0,
                r = 0,
                o = 0;
            if (e /= 100) {
                let s = i < .5 ? i * (1 + e) : i + e - i * e,
                    a = 2 * i - s;
                n = l(a, s, t + 1 / 3), r = l(a, s, t), o = l(a, s, t - 1 / 3)
            } else n = r = o = i;
            return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s
            }
        }(s)), s
    }
    let f = (t, e) => {
            let i = m(t),
                s = m(e);
            if (!i || !s) return h(t, e);
            let n = { ...i
            };
            return t => (n.red = d(i.red, s.red, t), n.green = d(i.green, s.green, t), n.blue = d(i.blue, s.blue, t), n.alpha = (0, c.mixNumber)(i.alpha, s.alpha, t), u.rgba.transform(n))
        },
        v = new Set(["none", "hidden"]);

    function g(t, e) {
        return i => (0, c.mixNumber)(t, e, i)
    }

    function y(t) {
        return "number" == typeof t ? g : "string" == typeof t ? (0, s.isCSSVariableToken)(t) ? h : n.color.test(t) ? f : b : Array.isArray(t) ? x : "object" == typeof t ? n.color.test(t) ? f : T : h
    }

    function x(t, e) {
        let i = [...t],
            s = i.length,
            n = t.map((t, i) => y(t)(t, e[i]));
        return t => {
            for (let e = 0; e < s; e++) i[e] = n[e](t);
            return i
        }
    }

    function T(t, e) {
        let i = { ...t,
                ...e
            },
            s = {};
        for (let n in i) void 0 !== t[n] && void 0 !== e[n] && (s[n] = y(t[n])(t[n], e[n]));
        return t => {
            for (let e in s) i[e] = s[e](t);
            return i
        }
    }
    let b = (t, s) => {
        let n = r.complex.createTransformer(s),
            o = (0, r.analyseComplexValue)(t),
            a = (0, r.analyseComplexValue)(s);
        if (!(o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length)) return (0, i.warning)(!0, `Complex values '${t}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), h(t, s);
        if (v.has(t) && !a.values.length || v.has(s) && !o.values.length) return v.has(t) ? e => e <= 0 ? t : s : e => e >= 1 ? s : t;
        return (0, e.pipe)(x(function(t, e) {
            let i = [],
                s = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let n = 0; n < e.values.length; n++) {
                let r = e.types[n],
                    o = t.indexes[r][s[r]],
                    a = t.values[o] ? ? 0;
                i[n] = a, s[r]++
            }
            return i
        }(o, a), a.values), n)
    };
    t.s(["mix", 0, function(t, e, i) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof i ? (0, c.mixNumber)(t, e, i) : y(t)(t, e)
    }], 899290)
}, 327745, t => {
    "use strict";
    t.s(["mixNumber", 0, (t, e, i) => t + (e - t) * i])
}, 513038, t => {
    "use strict";
    t.s(["resolveElements", 0, function(t, e, i) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let s = document;
            e && (s = e.current);
            let n = i ? .[t] ? ? s.querySelectorAll(t);
            return n ? Array.from(n) : []
        }
        return Array.from(t).filter(t => null != t)
    }])
}, 825763, t => {
    "use strict";
    let e = (0, t.i(448216).memoSupports)(() => {
        try {
            document.createElement("div").animate({
                opacity: 0
            }, {
                easing: "linear(0, 1)"
            })
        } catch (t) {
            return !1
        }
        return !0
    }, "linearEasing");
    t.s(["supportsLinearEasing", 0, e])
}, 823928, 761866, 448216, t => {
    "use strict";

    function e(t) {
        let e;
        return () => (void 0 === e && (e = t()), e)
    }
    t.s(["memo", 0, e], 761866);
    let i = {};

    function s(t, s) {
        let n = e(t);
        return () => i[s] ? ? n()
    }
    t.s(["memoSupports", 0, s], 448216);
    let n = s(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        r = s(() => void 0 !== window.ViewTimeline, "viewTimeline");
    t.s(["supportsScrollTimeline", 0, n, "supportsViewTimeline", 0, r], 823928)
}, 706221, t => {
    "use strict";
    t.i(301016);
    var e = t.i(810246),
        i = t.i(398361),
        s = t.i(655408),
        n = t.i(672357);
    let r = {
        current: void 0
    };
    class o {
        constructor(t, e = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = t => {
                let e = s.time.now();
                if (this.updatedAt !== e && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t), this.current !== this.prev && (this.events.change ? .notify(this.current), this.dependents))
                    for (let t of this.dependents) t.dirty()
            }, this.hasAnimated = !1, this.setCurrent(t), this.owner = e.owner
        }
        setCurrent(t) {
            this.current = t, this.updatedAt = s.time.now(), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(t = this.current) {
            this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt
        }
        onChange(t) {
            return this.on("change", t)
        }
        on(t, i) {
            this.events[t] || (this.events[t] = new e.SubscriptionManager);
            let s = this.events[t].add(i);
            return "change" === t ? () => {
                s(), n.frame.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : s
        }
        clearListeners() {
            for (let t in this.events) this.events[t].clear()
        }
        attach(t, e) {
            this.passiveEffect = t, this.stopPassiveEffect = e
        }
        set(t) {
            this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t)
        }
        setWithVelocity(t, e, i) {
            this.set(e), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - i
        }
        jump(t, e = !0) {
            this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, e && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change ? .notify(this.current)
        }
        addDependent(t) {
            this.dependents || (this.dependents = new Set), this.dependents.add(t)
        }
        removeDependent(t) {
            this.dependents && this.dependents.delete(t)
        }
        get() {
            return r.current && r.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let t = s.time.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
            let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (0, i.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e)
        }
        start(t) {
            return this.stop(), new Promise(e => {
                this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents ? .clear(), this.events.destroy ? .notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    t.s(["collectMotionValues", 0, r, "motionValue", 0, function(t, e) {
        return new o(t, e)
    }])
}, 162158, 243392, 613140, 439327, 752934, 561497, 87436, 53768, t => {
    "use strict";
    var e = t.i(508983);
    let i = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        },
        s = { ...i,
            transform: t => (0, e.clamp)(0, 1, t)
        },
        n = { ...i,
            default: 1
        };
    t.s(["alpha", 0, s, "number", 0, i, "scale", 0, n], 243392);
    let r = t => Math.round(1e5 * t) / 1e5,
        o = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    t.s(["floatRegex", 0, o], 613140);
    let a = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        l = (t, e) => i => !!("string" == typeof i && a.test(i) && i.startsWith(t) || e && null != i && Object.prototype.hasOwnProperty.call(i, e)),
        u = (t, e, i) => s => {
            if ("string" != typeof s) return s;
            let [n, r, a, l] = s.match(o);
            return {
                [t]: parseFloat(n),
                [e]: parseFloat(r),
                [i]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        },
        h = { ...i,
            transform: t => Math.round((0, e.clamp)(0, 255, t))
        },
        c = {
            test: l("rgb", "red"),
            parse: u("red", "green", "blue"),
            transform: ({
                red: t,
                green: e,
                blue: i,
                alpha: n = 1
            }) => "rgba(" + h.transform(t) + ", " + h.transform(e) + ", " + h.transform(i) + ", " + r(s.transform(n)) + ")"
        };
    t.s(["rgba", 0, c], 439327);
    let d = {
        test: l("#"),
        parse: function(t) {
            let e = "",
                i = "",
                s = "",
                n = "";
            return t.length > 5 ? (e = t.substring(1, 3), i = t.substring(3, 5), s = t.substring(5, 7), n = t.substring(7, 9)) : (e = t.substring(1, 2), i = t.substring(2, 3), s = t.substring(3, 4), n = t.substring(4, 5), e += e, i += i, s += s, n += n), {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1
            }
        },
        transform: c.transform
    };
    t.s(["hex", 0, d], 752934);
    let p = t => ({
            test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        }),
        m = p("deg"),
        f = p("%"),
        v = p("px"),
        g = p("vh"),
        y = p("vw"),
        x = { ...f,
            parse: t => f.parse(t) / 100,
            transform: t => f.transform(100 * t)
        };
    t.s(["degrees", 0, m, "percent", 0, f, "progressPercentage", 0, x, "px", 0, v, "vh", 0, g, "vw", 0, y], 561497);
    let T = {
        test: l("hsl", "hue"),
        parse: u("hue", "saturation", "lightness"),
        transform: ({
            hue: t,
            saturation: e,
            lightness: i,
            alpha: n = 1
        }) => "hsla(" + Math.round(t) + ", " + f.transform(r(e)) + ", " + f.transform(r(i)) + ", " + r(s.transform(n)) + ")"
    };
    t.s(["hsla", 0, T], 87436);
    let b = {
        test: t => c.test(t) || d.test(t) || T.test(t),
        parse: t => c.test(t) ? c.parse(t) : T.test(t) ? T.parse(t) : d.parse(t),
        transform: t => "string" == typeof t ? t : t.hasOwnProperty("red") ? c.transform(t) : T.transform(t),
        getAnimatableNone: t => {
            let e = b.parse(t);
            return e.alpha = 0, b.transform(e)
        }
    };
    t.s(["color", 0, b], 162158);
    let S = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        P = "number",
        w = "color",
        V = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function M(t) {
        let e = t.toString(),
            i = [],
            s = {
                color: [],
                number: [],
                var: []
            },
            n = [],
            r = 0,
            o = e.replace(V, t => (b.test(t) ? (s.color.push(r), n.push(w), i.push(b.parse(t))) : t.startsWith("var(") ? (s.var.push(r), n.push("var"), i.push(t)) : (s.number.push(r), n.push(P), i.push(parseFloat(t))), ++r, "${}")).split("${}");
        return {
            values: i,
            split: o,
            indexes: s,
            types: n
        }
    }

    function A({
        split: t,
        types: e
    }) {
        let i = t.length;
        return s => {
            let n = "";
            for (let o = 0; o < i; o++)
                if (n += t[o], void 0 !== s[o]) {
                    let t = e[o];
                    t === P ? n += r(s[o]) : t === w ? n += b.transform(s[o]) : n += s[o]
                }
            return n
        }
    }
    t.s(["analyseComplexValue", 0, M, "complex", 0, {
        test: function(t) {
            return isNaN(t) && "string" == typeof t && (t.match(o) ? .length || 0) + (t.match(S) ? .length || 0) > 0
        },
        parse: function(t) {
            return M(t).values
        },
        createTransformer: function(t) {
            return A(M(t))
        },
        getAnimatableNone: function(t) {
            let e = M(t);
            return A(e)(e.values.map((t, i) => ((t, e) => "number" == typeof t ? e ? .trim().endsWith("/") ? t : 0 : "number" == typeof t ? 0 : b.test(t) ? b.getAnimatableNone(t) : t)(t, e.split[i])))
        }
    }], 53768)
}, 991053, 219387, 423796, 62843, t => {
    "use strict";
    var e = t.i(243392),
        i = t.i(561497);
    let s = t => e => e.test(t);
    t.s(["testValueType", 0, s], 219387);
    let n = [e.number, i.px, i.percent, i.degrees, i.vw, i.vh, {
        test: t => "auto" === t,
        parse: t => t
    }];
    t.s(["dimensionValueTypes", 0, n, "findDimensionValueType", 0, t => n.find(s(t))], 991053);
    var r = t.i(725542);
    let o = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
    t.s(["isNumericalString", 0, o], 423796);
    var a = t.i(133071);
    let l = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    t.s(["getVariableValue", 0, function t(e, i, s = 1) {
        (0, r.invariant)(s <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        let [n, u] = function(t) {
            let e = l.exec(t);
            if (!e) return [, ];
            let [, i, s, n] = e;
            return [`--${i??s}`, n]
        }(e);
        if (!n) return;
        let h = window.getComputedStyle(i).getPropertyValue(n);
        if (h) {
            let t = h.trim();
            return o(t) ? parseFloat(t) : t
        }
        return (0, a.isCSSVariableToken)(u) ? t(u, i, s + 1) : u
    }], 62843)
}, 685319, 325144, 900162, 426445, 301219, t => {
    "use strict";
    var e = t.i(162158),
        i = t.i(53768),
        s = t.i(613140);
    let n = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function r(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [r] = i.match(s.floatRegex) || [];
        if (!r) return t;
        let o = i.replace(r, ""),
            a = +!!n.has(e);
        return r !== i && (a *= 100), e + "(" + a + o + ")"
    }
    let o = /\b([a-z-]*)\(.*?\)/gu,
        a = { ...i.complex,
            getAnimatableNone: t => {
                let e = t.match(o);
                return e ? e.map(r).join(" ") : t
            }
        };
    t.s(["filter", 0, a], 325144);
    let l = { ...i.complex,
        getAnimatableNone: t => {
            let e = i.complex.parse(t);
            return i.complex.createTransformer(t)(e.map(t => "number" == typeof t ? 0 : "object" == typeof t ? { ...t,
                alpha: 1
            } : t))
        }
    };
    t.s(["mask", 0, l], 900162);
    var u = t.i(243392);
    let h = { ...u.number,
        transform: Math.round
    };
    var c = t.i(561497);
    let d = {
            rotate: c.degrees,
            pathRotation: c.degrees,
            rotateX: c.degrees,
            rotateY: c.degrees,
            rotateZ: c.degrees,
            scale: u.scale,
            scaleX: u.scale,
            scaleY: u.scale,
            scaleZ: u.scale,
            skew: c.degrees,
            skewX: c.degrees,
            skewY: c.degrees,
            distance: c.px,
            translateX: c.px,
            translateY: c.px,
            translateZ: c.px,
            x: c.px,
            y: c.px,
            z: c.px,
            perspective: c.px,
            transformPerspective: c.px,
            opacity: u.alpha,
            originX: c.progressPercentage,
            originY: c.progressPercentage,
            originZ: c.px
        },
        p = {
            borderWidth: c.px,
            borderTopWidth: c.px,
            borderRightWidth: c.px,
            borderBottomWidth: c.px,
            borderLeftWidth: c.px,
            borderRadius: c.px,
            borderTopLeftRadius: c.px,
            borderTopRightRadius: c.px,
            borderBottomRightRadius: c.px,
            borderBottomLeftRadius: c.px,
            width: c.px,
            maxWidth: c.px,
            height: c.px,
            maxHeight: c.px,
            top: c.px,
            right: c.px,
            bottom: c.px,
            left: c.px,
            inset: c.px,
            insetBlock: c.px,
            insetBlockStart: c.px,
            insetBlockEnd: c.px,
            insetInline: c.px,
            insetInlineStart: c.px,
            insetInlineEnd: c.px,
            padding: c.px,
            paddingTop: c.px,
            paddingRight: c.px,
            paddingBottom: c.px,
            paddingLeft: c.px,
            paddingBlock: c.px,
            paddingBlockStart: c.px,
            paddingBlockEnd: c.px,
            paddingInline: c.px,
            paddingInlineStart: c.px,
            paddingInlineEnd: c.px,
            margin: c.px,
            marginTop: c.px,
            marginRight: c.px,
            marginBottom: c.px,
            marginLeft: c.px,
            marginBlock: c.px,
            marginBlockStart: c.px,
            marginBlockEnd: c.px,
            marginInline: c.px,
            marginInlineStart: c.px,
            marginInlineEnd: c.px,
            fontSize: c.px,
            backgroundPositionX: c.px,
            backgroundPositionY: c.px,
            ...d,
            zIndex: h,
            fillOpacity: u.alpha,
            strokeOpacity: u.alpha,
            numOctaves: h
        };
    t.s(["numberValueTypes", 0, p], 426445);
    let m = { ...p,
        color: e.color,
        backgroundColor: e.color,
        outlineColor: e.color,
        fill: e.color,
        stroke: e.color,
        borderColor: e.color,
        borderTopColor: e.color,
        borderRightColor: e.color,
        borderBottomColor: e.color,
        borderLeftColor: e.color,
        filter: a,
        WebkitFilter: a,
        mask: l,
        WebkitMask: l
    };
    t.s(["getDefaultValueType", 0, t => m[t]], 685319);
    let f = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        v = () => ({
            min: 0,
            max: 0
        });
    t.s(["createBox", 0, () => ({
        x: v(),
        y: v()
    }), "createDelta", 0, () => ({
        x: f(),
        y: f()
    })], 301219)
}, 938669, t => {
    "use strict";
    var e = t.i(162158),
        i = t.i(53768),
        s = t.i(991053),
        n = t.i(219387);
    let r = [...s.dimensionValueTypes, e.color, i.complex];
    t.s(["findValueType", 0, t => r.find((0, n.testValueType)(t))])
}, 140926, t => {
    "use strict";
    t.s(["isMotionValue", 0, t => !!(t && t.getVelocity)])
}, 508983, t => {
    "use strict";
    t.s(["clamp", 0, (t, e, i) => i > e ? e : i < t ? t : i])
}, 403981, 623016, 509, t => {
    "use strict";
    var e = t.i(764350),
        i = t.i(897476),
        s = t.i(991388);
    let n = (0, e.cubicBezier)(.33, 1.53, .69, .99),
        r = (0, s.reverseEasing)(n),
        o = (0, i.mirrorEasing)(r);
    t.s(["backIn", 0, r, "backInOut", 0, o, "backOut", 0, n], 623016), t.s(["anticipate", 0, t => t >= 1 ? 1 : (t *= 2) < 1 ? .5 * r(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))], 403981);
    let a = t => 1 - Math.sin(Math.acos(t)),
        l = (0, s.reverseEasing)(a),
        u = (0, i.mirrorEasing)(a);
    t.s(["circIn", 0, a, "circInOut", 0, u, "circOut", 0, l], 509)
}, 897476, t => {
    "use strict";
    t.s(["mirrorEasing", 0, t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2])
}, 991388, t => {
    "use strict";
    t.s(["reverseEasing", 0, t => e => 1 - t(1 - e)])
}, 210514, t => {
    "use strict";
    t.s(["isBezierDefinition", 0, t => Array.isArray(t) && "number" == typeof t[0]])
}, 577182, t => {
    "use strict";
    t.s(["isEasingArray", 0, t => Array.isArray(t) && "number" != typeof t[0]])
}, 725542, t => {
    "use strict";
    t.i(301016).default, t.s(["invariant", 0, () => {}, "warning", 0, () => {}], 725542)
}, 719372, t => {
    "use strict";
    t.s(["MotionGlobalConfig", 0, {}])
}, 825465, t => {
    "use strict";
    t.s(["isObject", 0, t => "object" == typeof t && null !== t])
}, 120194, t => {
    "use strict";
    t.s(["noop", 0, t => t])
}, 815645, t => {
    "use strict";
    t.s(["pipe", 0, (...t) => t.reduce((t, e) => i => e(t(i)))])
}, 470934, t => {
    "use strict";
    t.s(["progress", 0, (t, e, i) => {
        let s = e - t;
        return s ? (i - t) / s : 1
    }])
}, 810246, 926935, t => {
    "use strict";

    function e(t, e) {
        -1 === t.indexOf(e) && t.push(e)
    }

    function i(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1)
    }
    t.s(["addUniqueItem", 0, e, "removeItem", 0, i], 926935), t.s(["SubscriptionManager", 0, class {
        constructor() {
            this.subscriptions = []
        }
        add(t) {
            return e(this.subscriptions, t), () => i(this.subscriptions, t)
        }
        notify(t, e, i) {
            let s = this.subscriptions.length;
            if (s)
                if (1 === s) this.subscriptions[0](t, e, i);
                else
                    for (let n = 0; n < s; n++) {
                        let s = this.subscriptions[n];
                        s && s(t, e, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }], 810246)
}, 633836, t => {
    "use strict";
    t.s(["millisecondsToSeconds", 0, t => t / 1e3, "secondsToMilliseconds", 0, t => 1e3 * t])
}, 398361, t => {
    "use strict";
    t.s(["velocityPerSecond", 0, (t, e) => e ? 1e3 / e * t : 0])
}, 106510, t => {
    "use strict";
    var e = t.i(881255),
        i = t.i(231978),
        s = t.i(150936),
        n = t.i(916441),
        r = t.i(620021),
        o = t.i(52644),
        a = t.i(676374),
        l = t.i(672357),
        u = t.i(328744),
        h = t.i(136263),
        c = t.i(500580),
        d = t.i(568238),
        p = t.i(193518);
    let m = !1;
    class f extends h.Component {
        componentDidMount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i,
                layoutId: s
            } = this.props, {
                projection: n
            } = t;
            n && (e.group && e.group.add(n), i && i.register && s && i.register(n), m && n.root.didUpdate(), n.addEventListener("animationComplete", () => {
                this.safeToRemove()
            }), n.setOptions({ ...n.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove()
            })), a.globalProjectionState.hasEverUpdated = !0
        }
        getSnapshotBeforeUpdate(t) {
            let {
                layoutDependency: e,
                visualElement: i,
                drag: s,
                isPresent: n
            } = this.props, {
                projection: r
            } = i;
            return r && (r.isPresent = n, t.layoutDependency !== e && r.setOptions({ ...r.options,
                layoutDependency: e
            }), m = !0, s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n ? r.willUpdate() : this.safeToRemove(), t.isPresent !== n && (n ? r.promote() : r.relegate() || l.frame.postRender(() => {
                let t = r.getStack();
                t && t.members.length || this.safeToRemove()
            }))), null
        }
        componentDidUpdate() {
            let {
                visualElement: t,
                layoutAnchor: e
            } = this.props, {
                projection: i
            } = t;
            i && (i.options.layoutAnchor = e, i.root.didUpdate(), u.microtask.postRender(() => {
                !i.currentAnimation && i.isLead() && this.safeToRemove()
            }))
        }
        componentWillUnmount() {
            let {
                visualElement: t,
                layoutGroup: e,
                switchLayoutGroup: i
            } = this.props, {
                projection: s
            } = t;
            m = !0, s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
        }
        safeToRemove() {
            let {
                safeToRemove: t
            } = this.props;
            t && t()
        }
        render() {
            return null
        }
    }

    function v(t) {
        let [e, i] = (0, c.usePresence)(), s = (0, h.useContext)(d.LayoutGroupContext);
        return (0, o.jsx)(f, { ...t,
            layoutGroup: s,
            switchLayoutGroup: (0, h.useContext)(p.SwitchLayoutGroupContext),
            isPresent: e,
            safeToRemove: i
        })
    }
    var g = t.i(810246),
        y = t.i(508983),
        x = t.i(120194),
        T = t.i(754497),
        b = t.i(576243),
        S = t.i(989445),
        P = t.i(655408),
        w = t.i(4075);
    t.i(633836);
    var V = t.i(256650),
        M = t.i(570615),
        A = t.i(327745),
        E = t.i(706221),
        C = t.i(766438),
        D = t.i(561497),
        k = t.i(470934),
        R = t.i(509),
        L = t.i(58198);
    let B = L.cornerRadiusProps.length,
        F = t => "string" == typeof t ? parseFloat(t) : t,
        O = t => "number" == typeof t || D.px.test(t);

    function I(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius
    }
    let j = U(0, .5, R.circOut),
        N = U(.5, .95, x.noop);

    function U(t, e, i) {
        return s => s < t ? 0 : s > e ? 1 : i((0, k.progress)(t, e, s))
    }

    function W(t, e) {
        t.min = e.min, t.max = e.max
    }

    function G(t, e) {
        W(t.x, e.x), W(t.y, e.y)
    }

    function $(t, e) {
        t.translate = e.translate, t.scale = e.scale, t.originPoint = e.originPoint, t.origin = e.origin
    }
    var z = t.i(987826),
        K = t.i(739204);

    function H(t, e, i, s, n) {
        return t -= e, t = (0, z.scalePoint)(t, 1 / i, s), void 0 !== n && (t = (0, z.scalePoint)(t, 1 / n, s)), t
    }

    function Y(t, e, [i, s, n], r, o) {
        ! function(t, e = 0, i = 1, s = .5, n, r = t, o = t) {
            if (D.percent.test(e) && (e = parseFloat(e), e = (0, A.mixNumber)(o.min, o.max, e / 100) - o.min), "number" != typeof e) return;
            let a = (0, A.mixNumber)(r.min, r.max, s);
            t === r && (a -= e), t.min = H(t.min, e, i, a, n), t.max = H(t.max, e, i, a, n)
        }(t, e[i], e[s], e[n], e.scale, r, o)
    }
    let X = ["x", "scaleX", "originX"],
        q = ["y", "scaleY", "originY"];

    function Z(t, e, i, s) {
        Y(t.x, e, X, i ? i.x : void 0, s ? s.x : void 0), Y(t.y, e, q, i ? i.y : void 0, s ? s.y : void 0)
    }
    var _ = t.i(301219);

    function J(t) {
        return 0 === t.translate && 1 === t.scale
    }

    function Q(t) {
        return J(t.x) && J(t.y)
    }

    function tt(t, e) {
        return t.min === e.min && t.max === e.max
    }

    function te(t, e) {
        return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max)
    }

    function ti(t, e) {
        return te(t.x, e.x) && te(t.y, e.y)
    }

    function ts(t) {
        return (0, K.calcLength)(t.x) / (0, K.calcLength)(t.y)
    }

    function tn(t, e) {
        return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint
    }
    var tr = t.i(926935);
    class to {
        constructor() {
            this.members = []
        }
        add(t) {
            (0, tr.addUniqueItem)(this.members, t);
            for (let e = this.members.length - 1; e >= 0; e--) {
                let i = this.members[e];
                if (i === t || i === this.lead || i === this.prevLead) continue;
                let s = i.instance;
                s && !1 !== s.isConnected || i.snapshot || ((0, tr.removeItem)(this.members, i), i.unmount())
            }
            t.scheduleRender()
        }
        remove(t) {
            if ((0, tr.removeItem)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                let t = this.members[this.members.length - 1];
                t && this.promote(t)
            }
        }
        relegate(t) {
            for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
                let t = this.members[e];
                if (!1 !== t.isPresent && t.instance ? .isConnected !== !1) return this.promote(t), !0
            }
            return !1
        }
        promote(t, e) {
            let i = this.lead;
            if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                i.updateSnapshot(), t.scheduleRender();
                let {
                    layoutDependency: s
                } = i.options, {
                    layoutDependency: n
                } = t.options;
                (void 0 === s || s !== n) && (t.resumeFrom = i, e && (i.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root ? .isUpdating && (t.isLayoutDirty = !0)), !1 === t.options.crossfade && i.hide()
            }
        }
        exitAnimationComplete() {
            this.members.forEach(t => {
                t.options.onExitComplete ? .(), t.resumingFrom ? .options.onExitComplete ? .()
            })
        }
        scheduleRender() {
            this.members.forEach(t => t.instance && t.scheduleRender(!1))
        }
        removeLeadSnapshot() {
            this.lead ? .snapshot && (this.lead.snapshot = void 0)
        }
    }
    var ta = t.i(907178);
    let tl = (t, e) => t.depth - e.depth;
    class tu {
        constructor() {
            this.children = [], this.isDirty = !1
        }
        add(t) {
            (0, tr.addUniqueItem)(this.children, t), this.isDirty = !0
        }
        remove(t) {
            (0, tr.removeItem)(this.children, t), this.isDirty = !0
        }
        forEach(t) {
            this.isDirty && this.children.sort(tl), this.isDirty = !1, this.children.forEach(t)
        }
    }
    var th = t.i(414449);
    let tc = ["", "X", "Y", "Z"],
        td = 0;

    function tp(t, e, i, s) {
        let {
            latestValues: n
        } = e;
        n[t] && (i[t] = n[t], e.setStaticValue(t, 0), s && (s[t] = 0))
    }

    function tm({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n
    }) {
        return class {
            constructor(t = {}, i = e ? .()) {
                this.id = td++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                    x: 1,
                    y: 1
                }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                    this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                }, this.updateProjection = () => {
                    this.projectionUpdateScheduled = !1, this.nodes.forEach(tg), this.nodes.forEach(tM), this.nodes.forEach(tA), this.nodes.forEach(ty)
                }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = i ? i.root || i : this, this.path = i ? [...i.path, i] : [], this.parent = i, this.depth = i ? i.depth + 1 : 0;
                for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                this.root === this && (this.nodes = new tu)
            }
            addEventListener(t, e) {
                return this.eventHandlers.has(t) || this.eventHandlers.set(t, new g.SubscriptionManager), this.eventHandlers.get(t).add(e)
            }
            notifyListeners(t, ...e) {
                let i = this.eventHandlers.get(t);
                i && i.notify(...e)
            }
            hasListeners(t) {
                return this.eventHandlers.has(t)
            }
            mount(e) {
                if (this.instance) return;
                this.isSVG = (0, V.isSVGElement)(e) && !(0, M.isSVGSVGElement)(e), this.instance = e;
                let {
                    layoutId: i,
                    layout: s,
                    visualElement: n
                } = this.options;
                if (n && !n.current && n.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (s || i) && (this.isLayoutDirty = !0), t) {
                    let i, s = 0,
                        n = () => this.root.updateBlockedByResize = !1;
                    l.frame.read(() => {
                        s = window.innerWidth
                    }), t(e, () => {
                        let t = window.innerWidth;
                        if (t !== s) {
                            let e, r;
                            s = t, this.root.updateBlockedByResize = !0, i && i(), e = P.time.now(), r = ({
                                timestamp: t
                            }) => {
                                let i = t - e;
                                i >= 250 && ((0, l.cancelFrame)(r), n())
                            }, l.frame.setup(r, !0), i = () => (0, l.cancelFrame)(r), a.globalProjectionState.hasAnimatedSinceResize && (a.globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(tV))
                        }
                    })
                }
                i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && n && (i || s) && this.addEventListener("didUpdate", ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s
                }) => {
                    if (this.isTreeAnimationBlocked()) {
                        this.target = void 0, this.relativeTarget = void 0;
                        return
                    }
                    let r = this.options.transition || n.getDefaultTransition() || tL,
                        {
                            onLayoutAnimationStart: o,
                            onLayoutAnimationComplete: a
                        } = n.getProps(),
                        l = !this.targetLayout || !ti(this.targetLayout, s),
                        u = !e && i;
                    if (this.options.layoutRoot || this.resumeFrom || u || e && (l || !this.currentAnimation)) {
                        this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
                        let e = { ...(0, S.getValueTransition)(r, "layout"),
                            onPlay: o,
                            onComplete: a
                        };
                        (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e), this.setAnimationOrigin(t, u, e.path)
                    } else e || tV(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                    this.targetLayout = s
                })
            }
            unmount() {
                this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                let t = this.getStack();
                t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, l.cancelFrame)(this.updateProjection)
            }
            blockUpdate() {
                this.updateManuallyBlocked = !0
            }
            unblockUpdate() {
                this.updateManuallyBlocked = !1
            }
            isUpdateBlocked() {
                return this.updateManuallyBlocked || this.updateBlockedByResize
            }
            isTreeAnimationBlocked() {
                return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
            }
            startUpdate() {
                !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach(tE), this.animationId++)
            }
            getTransformTemplate() {
                let {
                    visualElement: t
                } = this.options;
                return t && t.getProps().transformTemplate
            }
            willUpdate(t = !0) {
                if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                    this.options.onExitComplete && this.options.onExitComplete();
                    return
                }
                if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && function t(e) {
                        if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                        let {
                            visualElement: i
                        } = e.options;
                        if (!i) return;
                        let s = (0, b.getOptimisedAppearId)(i);
                        if (window.MotionHasOptimisedAnimation(s, "transform")) {
                            let {
                                layout: t,
                                layoutId: i
                            } = e.options;
                            window.MotionCancelOptimisedAnimation(s, "transform", l.frame, !(t || i))
                        }
                        let {
                            parent: n
                        } = e;
                        n && !n.hasCheckedOptimisedAppear && t(n)
                    }(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                this.isLayoutDirty = !0;
                for (let t = 0; t < this.path.length; t++) {
                    let e = this.path[t];
                    e.shouldResetTransform = !0, ("string" == typeof e.latestValues.x || "string" == typeof e.latestValues.y) && (e.isLayoutDirty = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                }
                let {
                    layoutId: e,
                    layout: i
                } = this.options;
                if (void 0 === e && !i) return;
                let s = this.getTransformTemplate();
                this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
            }
            update() {
                if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                    let t = this.updateBlockedByResize;
                    this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), t && this.nodes.forEach(tb), this.nodes.forEach(tT);
                    return
                }
                if (this.animationId <= this.animationCommitId) return void this.nodes.forEach(tS);
                this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(tP), this.nodes.forEach(tw), this.nodes.forEach(tf), this.nodes.forEach(tv)) : this.nodes.forEach(tS), this.clearAllSnapshots();
                let t = P.time.now();
                l.frameData.delta = (0, y.clamp)(0, 1e3 / 60, t - l.frameData.timestamp), l.frameData.timestamp = t, l.frameData.isProcessing = !0, l.frameSteps.update.process(l.frameData), l.frameSteps.preRender.process(l.frameData), l.frameSteps.render.process(l.frameData), l.frameData.isProcessing = !1
            }
            didUpdate() {
                this.updateScheduled || (this.updateScheduled = !0, u.microtask.read(this.scheduleUpdate))
            }
            clearAllSnapshots() {
                this.nodes.forEach(tx), this.sharedNodes.forEach(tC)
            }
            scheduleUpdateProjection() {
                this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, l.frame.preRender(this.updateProjection, !1, !0))
            }
            scheduleCheckAfterUnmount() {
                l.frame.postRender(() => {
                    this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                })
            }
            updateSnapshot() {
                !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || (0, K.calcLength)(this.snapshot.measuredBox.x) || (0, K.calcLength)(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
            }
            updateLayout() {
                if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                if (this.resumeFrom && !this.resumeFrom.instance)
                    for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                let t = this.layout;
                this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected || (this.layoutCorrected = (0, _.createBox)()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                let {
                    visualElement: e
                } = this.options;
                e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
            }
            updateScroll(t = "measure") {
                let e = !!(this.options.layoutScroll && this.instance);
                if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && this.instance) {
                    let e = s(this.instance);
                    this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: e,
                        offset: i(this.instance),
                        wasRoot: this.scroll ? this.scroll.isRoot : e
                    }
                }
            }
            resetTransform() {
                if (!n) return;
                let t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                    e = this.projectionDelta && !Q(this.projectionDelta),
                    i = this.getTransformTemplate(),
                    s = i ? i(this.latestValues, "") : void 0,
                    r = s !== this.prevTransformTemplateValue;
                t && this.instance && (e || (0, th.hasTransform)(this.latestValues) || r) && (n(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
            }
            measure(t = !0) {
                var e;
                let i = this.measurePageBox(),
                    s = this.removeElementScroll(i);
                return t && (s = this.removeTransform(s)), tO((e = s).x), tO(e.y), {
                    animationId: this.root.animationId,
                    measuredBox: i,
                    layoutBox: s,
                    latestValues: {},
                    source: this.id
                }
            }
            measurePageBox() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return (0, _.createBox)();
                let e = t.measureViewportBox();
                if (!(this.scroll ? .wasRoot || this.path.some(tj))) {
                    let {
                        scroll: t
                    } = this.root;
                    t && ((0, z.translateAxis)(e.x, t.offset.x), (0, z.translateAxis)(e.y, t.offset.y))
                }
                return e
            }
            removeElementScroll(t) {
                let e = (0, _.createBox)();
                if (G(e, t), this.scroll ? .wasRoot) return e;
                for (let i = 0; i < this.path.length; i++) {
                    let s = this.path[i],
                        {
                            scroll: n,
                            options: r
                        } = s;
                    s !== this.root && n && r.layoutScroll && (n.wasRoot && G(e, t), (0, z.translateAxis)(e.x, n.offset.x), (0, z.translateAxis)(e.y, n.offset.y))
                }
                return e
            }
            applyTransform(t, e = !1, i) {
                let s = i || (0, _.createBox)();
                G(s, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i = this.path[t];
                    !e && i.options.layoutScroll && i.scroll && i !== i.root && ((0, z.translateAxis)(s.x, -i.scroll.offset.x), (0, z.translateAxis)(s.y, -i.scroll.offset.y)), (0, th.hasTransform)(i.latestValues) && (0, z.transformBox)(s, i.latestValues, i.layout ? .layoutBox)
                }
                return (0, th.hasTransform)(this.latestValues) && (0, z.transformBox)(s, this.latestValues, this.layout ? .layoutBox), s
            }
            removeTransform(t) {
                let e = (0, _.createBox)();
                G(e, t);
                for (let t = 0; t < this.path.length; t++) {
                    let i, s = this.path[t];
                    (0, th.hasTransform)(s.latestValues) && (s.instance && ((0, th.hasScale)(s.latestValues) && s.updateSnapshot(), G(i = (0, _.createBox)(), s.measurePageBox())), Z(e, s.latestValues, s.snapshot ? .layoutBox, i))
                }
                return (0, th.hasTransform)(this.latestValues) && Z(e, this.latestValues), e
            }
            setTargetDelta(t) {
                this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
            }
            setOptions(t) {
                this.options = { ...this.options,
                    ...t,
                    crossfade: void 0 === t.crossfade || t.crossfade
                }
            }
            clearMeasurements() {
                this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
            }
            forceRelativeParentToResolveTarget() {
                this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== l.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0)
            }
            resolveTargetDelta(t = !1) {
                let e = this.getLead();
                this.isProjectionDirty || (this.isProjectionDirty = e.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = e.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
                let i = !!this.resumingFrom || this !== e;
                if (!(t || i && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent ? .isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                let {
                    layout: s,
                    layoutId: n
                } = this.options;
                if (!this.layout || !(s || n)) return;
                this.resolvedRelativeTargetAt = l.frameData.timestamp;
                let r = this.getClosestProjectingParent();
                r && this.linkedParentVersion !== r.layoutVersion && !r.options.layoutRoot && this.removeRelativeTarget(), this.targetDelta || this.relativeTarget || (!1 !== this.options.layoutAnchor && r && r.layout ? this.createRelativeTarget(r, this.layout.layoutBox, r.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = (0, _.createBox)(), this.targetWithTransforms = (0, _.createBox)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, K.calcRelativeBox)(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : G(this.target, this.layout.layoutBox), (0, z.applyBoxDelta)(this.target, this.targetDelta)) : G(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, !1 !== this.options.layoutAnchor && r && !!r.resumingFrom == !!this.resumingFrom && !r.options.layoutScroll && r.target && 1 !== this.animationProgress ? this.createRelativeTarget(r, this.target, r.target) : this.relativeParent = this.relativeTarget = void 0))
            }
            getClosestProjectingParent() {
                if (!(!this.parent || (0, th.hasScale)(this.parent.latestValues) || (0, th.has2DTranslate)(this.parent.latestValues)))
                    if (this.parent.isProjecting()) return this.parent;
                    else return this.parent.getClosestProjectingParent()
            }
            isProjecting() {
                return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
            }
            createRelativeTarget(t, e, i) {
                this.relativeParent = t, this.linkedParentVersion = t.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, _.createBox)(), this.relativeTargetOrigin = (0, _.createBox)(), (0, K.calcRelativePosition)(this.relativeTargetOrigin, e, i, this.options.layoutAnchor || void 0), G(this.relativeTarget, this.relativeTargetOrigin)
            }
            removeRelativeTarget() {
                this.relativeParent = this.relativeTarget = void 0
            }
            calcProjection() {
                let t = this.getLead(),
                    e = !!this.resumingFrom || this !== t,
                    i = !0;
                if ((this.isProjectionDirty || this.parent ? .isProjectionDirty) && (i = !1), e && (this.isSharedProjectionDirty || this.isTransformDirty) && (i = !1), this.resolvedRelativeTargetAt === l.frameData.timestamp && (i = !1), i) return;
                let {
                    layout: s,
                    layoutId: n
                } = this.options;
                if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(s || n)) return;
                G(this.layoutCorrected, this.layout.layoutBox);
                let r = this.treeScale.x,
                    o = this.treeScale.y;
                (0, z.applyTreeDeltas)(this.layoutCorrected, this.treeScale, this.path, e), t.layout && !t.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (t.target = t.layout.layoutBox, t.targetWithTransforms = (0, _.createBox)());
                let {
                    target: a
                } = t;
                if (!a) {
                    this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    return
                }
                this.projectionDelta && this.prevProjectionDelta ? ($(this.prevProjectionDelta.x, this.projectionDelta.x), $(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, K.calcBoxDelta)(this.projectionDelta, this.layoutCorrected, a, this.latestValues), this.treeScale.x === r && this.treeScale.y === o && tn(this.projectionDelta.x, this.prevProjectionDelta.x) && tn(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", a))
            }
            hide() {
                this.isVisible = !1
            }
            show() {
                this.isVisible = !0
            }
            scheduleRender(t = !0) {
                if (this.options.visualElement ? .scheduleRender(), t) {
                    let t = this.getStack();
                    t && t.scheduleRender()
                }
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
            }
            createProjectionDeltas() {
                this.prevProjectionDelta = (0, _.createDelta)(), this.projectionDelta = (0, _.createDelta)(), this.projectionDeltaWithTransform = (0, _.createDelta)()
            }
            setAnimationOrigin(t, e = !1, i) {
                let s, n = this.snapshot,
                    r = n ? n.latestValues : {},
                    o = { ...this.latestValues
                    },
                    a = (0, _.createDelta)();
                this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                let l = (0, _.createBox)(),
                    u = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                    h = this.getStack(),
                    c = !h || h.members.length <= 1,
                    d = !!(u && !c && !0 === this.options.crossfade && !this.path.some(tR));
                this.animationProgress = 0;
                let p = i ? .interpolateProjection(t);
                this.mixTargetDelta = e => {
                    let i = e / 1e3,
                        n = p ? .(i);
                    if (n ? (a.x.translate = n.x, a.x.scale = (0, A.mixNumber)(t.x.scale, 1, i), a.x.origin = t.x.origin, a.x.originPoint = t.x.originPoint, a.y.translate = n.y, a.y.scale = (0, A.mixNumber)(t.y.scale, 1, i), a.y.origin = t.y.origin, a.y.originPoint = t.y.originPoint) : (tD(a.x, t.x, i), tD(a.y, t.y, i)), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                        var h, m, f, v, g, y;
                        (0, K.calcRelativePosition)(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), f = this.relativeTarget, v = this.relativeTargetOrigin, g = l, y = i, tk(f.x, v.x, g.x, y), tk(f.y, v.y, g.y, y), s && (h = this.relativeTarget, m = s, tt(h.x, m.x) && tt(h.y, m.y)) && (this.isProjectionDirty = !1), s || (s = (0, _.createBox)()), G(s, this.relativeTarget)
                    }
                    u && (this.animationValues = o, function(t, e, i, s, n, r) {
                        n ? (t.opacity = (0, A.mixNumber)(0, i.opacity ? ? 1, j(s)), t.opacityExit = (0, A.mixNumber)(e.opacity ? ? 1, 0, N(s))) : r && (t.opacity = (0, A.mixNumber)(e.opacity ? ? 1, i.opacity ? ? 1, s));
                        for (let n = 0; n < B; n++) {
                            let r = L.cornerRadiusProps[n],
                                o = I(e, r),
                                a = I(i, r);
                            (void 0 !== o || void 0 !== a) && (o || (o = 0), a || (a = 0), 0 === o || 0 === a || O(o) === O(a) ? (t[r] = Math.max((0, A.mixNumber)(F(o), F(a), s), 0), (D.percent.test(a) || D.percent.test(o)) && (t[r] += "%")) : t[r] = a)
                        }(e.rotate || i.rotate) && (t.rotate = (0, A.mixNumber)(e.rotate || 0, i.rotate || 0, s))
                    }(o, r, this.latestValues, i, d, c)), n && void 0 !== n.rotate && (this.animationValues || (this.animationValues = o), this.animationValues.pathRotation = n.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = i
                }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
            }
            startAnimation(t) {
                this.notifyListeners("animationStart"), this.currentAnimation ? .stop(), this.resumingFrom ? .currentAnimation ? .stop(), this.pendingAnimation && ((0, l.cancelFrame)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = l.frame.update(() => {
                    a.globalProjectionState.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = (0, E.motionValue)(0)), this.motionValue.jump(0, !1), this.currentAnimation = (0, T.animateSingleValue)(this.motionValue, [0, 1e3], { ...t,
                        velocity: 0,
                        isSync: !0,
                        onUpdate: e => {
                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                        },
                        onComplete: () => {
                            t.onComplete && t.onComplete(), this.completeAnimation()
                        }
                    }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                })
            }
            completeAnimation() {
                this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                let t = this.getStack();
                t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
            }
            finishAnimation() {
                this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
            }
            applyTransformsToTarget() {
                let t = this.getLead(),
                    {
                        targetWithTransforms: e,
                        target: i,
                        layout: s,
                        latestValues: n
                    } = t;
                if (e && i && s) {
                    if (this !== t && this.layout && s && tI(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                        i = this.target || (0, _.createBox)();
                        let e = (0, K.calcLength)(this.layout.layoutBox.x);
                        i.x.min = t.target.x.min, i.x.max = i.x.min + e;
                        let s = (0, K.calcLength)(this.layout.layoutBox.y);
                        i.y.min = t.target.y.min, i.y.max = i.y.min + s
                    }
                    G(e, i), (0, z.transformBox)(e, n), (0, K.calcBoxDelta)(this.projectionDeltaWithTransform, this.layoutCorrected, e, n)
                }
            }
            registerSharedNode(t, e) {
                this.sharedNodes.has(t) || this.sharedNodes.set(t, new to), this.sharedNodes.get(t).add(e);
                let i = e.options.initialPromotionConfig;
                e.promote({
                    transition: i ? i.transition : void 0,
                    preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                })
            }
            isLead() {
                let t = this.getStack();
                return !t || t.lead === this
            }
            getLead() {
                let {
                    layoutId: t
                } = this.options;
                return t && this.getStack() ? .lead || this
            }
            getPrevLead() {
                let {
                    layoutId: t
                } = this.options;
                return t ? this.getStack() ? .prevLead : void 0
            }
            getStack() {
                let {
                    layoutId: t
                } = this.options;
                if (t) return this.root.sharedNodes.get(t)
            }
            promote({
                needsReset: t,
                transition: e,
                preserveFollowOpacity: i
            } = {}) {
                let s = this.getStack();
                s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                    transition: e
                })
            }
            relegate() {
                let t = this.getStack();
                return !!t && t.relegate(this)
            }
            resetSkewAndRotation() {
                let {
                    visualElement: t
                } = this.options;
                if (!t) return;
                let e = !1,
                    {
                        latestValues: i
                    } = t;
                if ((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e) return;
                let s = {};
                i.z && tp("z", t, s, this.animationValues);
                for (let e = 0; e < tc.length; e++) tp(`rotate${tc[e]}`, t, s, this.animationValues), tp(`skew${tc[e]}`, t, s, this.animationValues);
                for (let e in t.render(), s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
                t.scheduleRender()
            }
            applyProjectionStyles(t, e) {
                if (!this.instance || this.isSVG) return;
                if (!this.isVisible) {
                    t.visibility = "hidden";
                    return
                }
                let i = this.getTransformTemplate();
                if (this.needsReset) {
                    this.needsReset = !1, t.visibility = "", t.opacity = "", t.pointerEvents = (0, C.resolveMotionValue)(e ? .pointerEvents) || "", t.transform = i ? i(this.latestValues, "") : "none";
                    return
                }
                let s = this.getLead();
                if (!this.projectionDelta || !this.layout || !s.target) {
                    this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = (0, C.resolveMotionValue)(e ? .pointerEvents) || ""), this.hasProjected && !(0, th.hasTransform)(this.latestValues) && (t.transform = i ? i({}, "") : "none", this.hasProjected = !1);
                    return
                }
                t.visibility = "";
                let n = s.animationValues || s.latestValues;
                this.applyTransformsToTarget();
                let r = function(t, e, i) {
                    let s = "",
                        n = t.x.translate / e.x,
                        r = t.y.translate / e.y,
                        o = i ? .z || 0;
                    if ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                        let {
                            transformPerspective: t,
                            rotate: e,
                            pathRotation: n,
                            rotateX: r,
                            rotateY: o,
                            skewX: a,
                            skewY: l
                        } = i;
                        t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), n && (s += `rotate(${n}deg) `), r && (s += `rotateX(${r}deg) `), o && (s += `rotateY(${o}deg) `), a && (s += `skewX(${a}deg) `), l && (s += `skewY(${l}deg) `)
                    }
                    let a = t.x.scale * e.x,
                        l = t.y.scale * e.y;
                    return (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
                }(this.projectionDeltaWithTransform, this.treeScale, n);
                i && (r = i(n, r)), t.transform = r;
                let {
                    x: o,
                    y: a
                } = this.projectionDelta;
                for (let e in t.transformOrigin = `${100*o.origin}% ${100*a.origin}% 0`, s.animationValues ? t.opacity = s === this ? n.opacity ? ? this.latestValues.opacity ? ? 1 : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit : t.opacity = s === this ? void 0 !== n.opacity ? n.opacity : "" : void 0 !== n.opacityExit ? n.opacityExit : 0, w.scaleCorrectors) {
                    if (void 0 === n[e]) continue;
                    let {
                        correct: i,
                        applyTo: o,
                        isCSSVariable: a
                    } = w.scaleCorrectors[e], l = "none" === r ? n[e] : i(n[e], s);
                    if (o) {
                        let e = o.length;
                        for (let i = 0; i < e; i++) t[o[i]] = l
                    } else a ? this.options.visualElement.renderState.vars[e] = l : t[e] = l
                }
                this.options.layoutId && (t.pointerEvents = s === this ? (0, C.resolveMotionValue)(e ? .pointerEvents) || "" : "none")
            }
            clearSnapshot() {
                this.resumeFrom = this.snapshot = void 0
            }
            resetTree() {
                this.root.nodes.forEach(t => t.currentAnimation ? .stop()), this.root.nodes.forEach(tT), this.root.sharedNodes.clear()
            }
        }
    }

    function tf(t) {
        t.updateLayout()
    }

    function tv(t) {
        let e = t.resumeFrom ? .snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
            let {
                layoutBox: i,
                measuredBox: s
            } = t.layout, {
                animationType: n
            } = t.options, r = e.source !== t.layout.source;
            if ("size" === n)(0, ta.eachAxis)(t => {
                let s = r ? e.measuredBox[t] : e.layoutBox[t],
                    n = (0, K.calcLength)(s);
                s.min = i[t].min, s.max = s.min + n
            });
            else if ("x" === n || "y" === n) {
                let t = "x" === n ? "y" : "x";
                W(r ? e.measuredBox[t] : e.layoutBox[t], i[t])
            } else tI(n, e.layoutBox, i) && (0, ta.eachAxis)(s => {
                let n = r ? e.measuredBox[s] : e.layoutBox[s],
                    o = (0, K.calcLength)(i[s]);
                n.max = n.min + o, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[s].max = t.relativeTarget[s].min + o)
            });
            let o = (0, _.createDelta)();
            (0, K.calcBoxDelta)(o, i, e.layoutBox);
            let a = (0, _.createDelta)();
            r ? (0, K.calcBoxDelta)(a, t.applyTransform(s, !0), e.measuredBox) : (0, K.calcBoxDelta)(a, i, e.layoutBox);
            let l = !Q(o),
                u = !1;
            if (!t.resumeFrom) {
                let s = t.getClosestProjectingParent();
                if (s && !s.resumeFrom) {
                    let {
                        snapshot: n,
                        layout: r
                    } = s;
                    if (n && r) {
                        let o = t.options.layoutAnchor || void 0,
                            a = (0, _.createBox)();
                        (0, K.calcRelativePosition)(a, e.layoutBox, n.layoutBox, o);
                        let l = (0, _.createBox)();
                        (0, K.calcRelativePosition)(l, i, r.layoutBox, o), ti(a, l) || (u = !0), s.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = s)
                    }
                }
            }
            t.notifyListeners("didUpdate", {
                layout: i,
                snapshot: e,
                delta: a,
                layoutDelta: o,
                hasLayoutChanged: l,
                hasRelativeLayoutChanged: u
            })
        } else if (t.isLead()) {
            let {
                onExitComplete: e
            } = t.options;
            e && e()
        }
        t.options.transition = void 0
    }

    function tg(t) {
        t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
    }

    function ty(t) {
        t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
    }

    function tx(t) {
        t.clearSnapshot()
    }

    function tT(t) {
        t.clearMeasurements()
    }

    function tb(t) {
        t.isLayoutDirty = !0, t.updateLayout()
    }

    function tS(t) {
        t.isLayoutDirty = !1
    }

    function tP(t) {
        t.isAnimationBlocked && t.layout && !t.isLayoutDirty && (t.snapshot = t.layout, t.isLayoutDirty = !0)
    }

    function tw(t) {
        let {
            visualElement: e
        } = t.options;
        e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
    }

    function tV(t) {
        t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
    }

    function tM(t) {
        t.resolveTargetDelta()
    }

    function tA(t) {
        t.calcProjection()
    }

    function tE(t) {
        t.resetSkewAndRotation()
    }

    function tC(t) {
        t.removeLeadSnapshot()
    }

    function tD(t, e, i) {
        t.translate = (0, A.mixNumber)(e.translate, 0, i), t.scale = (0, A.mixNumber)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
    }

    function tk(t, e, i, s) {
        t.min = (0, A.mixNumber)(e.min, i.min, s), t.max = (0, A.mixNumber)(e.max, i.max, s)
    }

    function tR(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit
    }
    let tL = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        },
        tB = t => "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
        tF = tB("applewebkit/") && !tB("chrome/") ? Math.round : x.noop;

    function tO(t) {
        t.min = tF(t.min), t.max = tF(t.max)
    }

    function tI(t, e, i) {
        return "position" === t || "preserve-aspect" === t && !(0, K.isNear)(ts(e), ts(i), .2)
    }

    function tj(t) {
        return t !== t.root && t.scroll ? .wasRoot
    }
    var tN = t.i(342288);
    let tU = tm({
            attachResizeListener: (t, e) => (0, tN.addDomEvent)(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body ? .scrollLeft || 0,
                y: document.documentElement.scrollTop || document.body ? .scrollTop || 0
            }),
            checkIsScrollRoot: () => !0
        }),
        tW = {
            current: void 0
        },
        tG = tm({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!tW.current) {
                    let t = new tU({});
                    t.mount(window), t.setOptions({
                        layoutScroll: !0
                    }), tW.current = t
                }
                return tW.current
            },
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            },
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        }),
        t$ = {
            pan: {
                Feature: r.PanGesture
            },
            drag: {
                Feature: n.DragGesture,
                ProjectionNode: tG,
                MeasureLayout: v
            }
        };
    var tz = t.i(792075),
        tK = t.i(628453),
        tH = t.i(513038);

    function tY(t, e) {
        let i = (0, tH.resolveElements)(t),
            s = new AbortController;
        return [i, {
            passive: !0,
            ...e,
            signal: s.signal
        }, () => s.abort()]
    }
    var tX = t.i(341761);

    function tq(t, e, i) {
        let {
            props: s
        } = t;
        t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
        let n = s["onHover" + i];
        n && l.frame.postRender(() => n(e, (0, tX.extractEventInfo)(e)))
    }
    class tZ extends tz.Feature {
        mount() {
            let {
                current: t
            } = this.node;
            t && (this.unmount = function(t, e, i = {}) {
                let [s, n, r] = tY(t, i);
                return s.forEach(t => {
                    let i, s = !1,
                        r = !1,
                        o = e => {
                            i && (i(e), i = void 0), t.removeEventListener("pointerleave", l)
                        },
                        a = t => {
                            s = !1, window.removeEventListener("pointerup", a), window.removeEventListener("pointercancel", a), r && (r = !1, o(t))
                        },
                        l = t => {
                            if ("touch" !== t.pointerType) {
                                if (s) {
                                    r = !0;
                                    return
                                }
                                o(t)
                            }
                        };
                    t.addEventListener("pointerenter", s => {
                        if ("touch" === s.pointerType || (0, tK.isDragActive)()) return;
                        r = !1;
                        let o = e(t, s);
                        "function" == typeof o && (i = o, t.addEventListener("pointerleave", l, n))
                    }, n), t.addEventListener("pointerdown", () => {
                        s = !0, window.addEventListener("pointerup", a, n), window.addEventListener("pointercancel", a, n)
                    }, n)
                }), r
            }(t, (t, e) => (tq(this.node, e, "Start"), t => tq(this.node, t, "End"))))
        }
        unmount() {}
    }
    var t_ = tz,
        tJ = t.i(815645);
    class tQ extends t_.Feature {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let t = !1;
            try {
                t = this.node.current.matches(":focus-visible")
            } catch (e) {
                t = !0
            }
            t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = (0, tJ.pipe)((0, tN.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, tN.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    var t0 = tz,
        t1 = t.i(335029);
    let t3 = (t, e) => !!e && (t === e || t3(t, e.parentElement));
    var t2 = t.i(914712),
        t5 = t.i(674153);
    let t6 = new WeakSet;

    function t7(t) {
        return e => {
            "Enter" === e.key && t(e)
        }
    }

    function t4(t, e) {
        t.dispatchEvent(new PointerEvent("pointer" + e, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function t9(t) {
        return (0, t2.isPrimaryPointer)(t) && !(0, tK.isDragActive)()
    }
    let t8 = new WeakSet;

    function et(t, e, i) {
        let {
            props: s
        } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
        t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
        let n = s["onTap" + ("End" === i ? "" : i)];
        n && l.frame.postRender(() => n(e, (0, tX.extractEventInfo)(e)))
    }
    class ee extends t0.Feature {
        mount() {
            let {
                current: t
            } = this.node;
            if (!t) return;
            let {
                globalTapTarget: e,
                propagate: i
            } = this.node.props;
            this.unmount = function(t, e, i = {}) {
                let [s, n, r] = tY(t, i), o = t => {
                    let s = t.currentTarget;
                    if (!t9(t) || t8.has(t)) return;
                    t6.add(s), i.stopPropagation && t8.add(t);
                    let r = e(s, t),
                        o = { ...n,
                            capture: !0
                        },
                        a = (t, e) => {
                            window.removeEventListener("pointerup", l, o), window.removeEventListener("pointercancel", u, o), t6.has(s) && t6.delete(s), t9(t) && "function" == typeof r && r(t, {
                                success: e
                            })
                        },
                        l = t => {
                            a(t, s === window || s === document || i.useGlobalTarget || t3(s, t.target))
                        },
                        u = t => {
                            a(t, !1)
                        };
                    window.addEventListener("pointerup", l, o), window.addEventListener("pointercancel", u, o)
                };
                return s.forEach(t => {
                    (i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, n), (0, t1.isHTMLElement)(t) && (t.addEventListener("focus", t => ((t, e) => {
                        let i = t.currentTarget;
                        if (!i) return;
                        let s = t7(() => {
                            if (t6.has(i)) return;
                            t4(i, "down");
                            let t = t7(() => {
                                t4(i, "up")
                            });
                            i.addEventListener("keyup", t, e), i.addEventListener("blur", () => t4(i, "cancel"), e)
                        });
                        i.addEventListener("keydown", s, e), i.addEventListener("blur", () => i.removeEventListener("keydown", s), e)
                    })(t, n)), (0, t5.isElementKeyboardAccessible)(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                }), r
            }(t, (t, e) => (et(this.node, e, "Start"), (t, {
                success: e
            }) => et(this.node, t, e ? "End" : "Cancel")), {
                useGlobalTarget: e,
                stopPropagation: i ? .tap === !1
            })
        }
        unmount() {}
    }
    var ei = tz;
    let es = new WeakMap,
        en = new WeakMap,
        er = t => {
            let e = es.get(t.target);
            e && e(t)
        },
        eo = t => {
            t.forEach(er)
        },
        ea = {
            some: 0,
            all: 1
        };
    class el extends ei.Feature {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            var t;
            let e;
            this.stopObserver ? .();
            let {
                viewport: i = {}
            } = this.node.getProps(), {
                root: s,
                margin: n,
                amount: r = "some",
                once: o
            } = i, a = {
                root: s ? s.current : void 0,
                rootMargin: n,
                threshold: "number" == typeof r ? r : ea[r]
            }, l = t => {
                let {
                    isIntersecting: e
                } = t;
                if (this.isInView === e || (this.isInView = e, o && !e && this.hasEnteredView)) return;
                e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                let {
                    onViewportEnter: i,
                    onViewportLeave: s
                } = this.node.getProps(), n = e ? i : s;
                n && n(t)
            };
            this.stopObserver = (t = this.node.current, e = function({
                root: t,
                ...e
            }) {
                let i = t || document;
                en.has(i) || en.set(i, {});
                let s = en.get(i),
                    n = JSON.stringify(e);
                return s[n] || (s[n] = new IntersectionObserver(eo, {
                    root: t,
                    ...e
                })), s[n]
            }(a), es.set(t, l), e.observe(t), () => {
                es.delete(t), e.unobserve(t)
            })
        }
        mount() {
            this.startObserver()
        }
        update() {
            if ("u" < typeof IntersectionObserver) return;
            let {
                props: t,
                prevProps: e
            } = this.node;
            ["amount", "margin", "root"].some(function({
                viewport: t = {}
            }, {
                viewport: e = {}
            } = {}) {
                return i => t[i] !== e[i]
            }(t, e)) && this.startObserver()
        }
        unmount() {
            this.stopObserver ? .(), this.hasEnteredView = !1, this.isInView = !1
        }
    }
    let eu = { ...s.animations,
            inView: {
                Feature: el
            },
            tap: {
                Feature: ee
            },
            focus: {
                Feature: tQ
            },
            hover: {
                Feature: tZ
            },
            ...t$,
            layout: {
                ProjectionNode: tG,
                MeasureLayout: v
            }
        },
        eh = (0, i.createMotionProxy)(eu, e.createDomVisualElement);
    t.s(["motion", 0, eh], 106510)
}]);