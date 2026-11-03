(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 728069, e => {
    "use strict";
    var t = e.i(52644),
        n = e.i(635356),
        i = e.i(407017),
        s = e.i(106510),
        r = e.i(496036),
        a = e.i(745786),
        l = e.i(618373),
        o = e.i(136263),
        u = e.i(926368);
    let c = {
            duration: .2,
            ease: "easeOut"
        },
        f = {
            type: "spring",
            stiffness: 260,
            damping: 6.9,
            mass: 1
        };
    e.s(["FaqRule", 0, function({
        delay: e,
        animate: m = !0,
        className: h
    }) {
        let p = (0, o.useRef)(null),
            d = (0, a.useReducedMotion)(),
            g = (0, r.useMotionValue)(.5),
            v = (0, r.useMotionValue)(100),
            y = (0, l.useTransform)([g, v], ([e, t]) => `M0,100 Q${1e3*e},${t} 1000,100`);
        return (0, o.useEffect)(() => {
            let e = p.current,
                t = e ? .closest("[data-rule-list]") ? ? e ? .parentElement;
            if (!e || !t) return;
            if (d || !m) {
                g.jump(.5), v.jump(100);
                return
            }
            if (!window.matchMedia("(pointer: fine)").matches) return;
            let n = !1,
                s = 0,
                r = () => {
                    n && (n = !1, s = 0, (0, i.animate)(g, .5, f), (0, i.animate)(v, 100, f))
                },
                a = t => {
                    let a = e.getBoundingClientRect(),
                        l = t.clientX - a.left,
                        o = t.clientY - a.top;
                    if ("touch" === t.pointerType || !a.width || l < 0 || l > a.width || Math.abs(o) > 10) return void r();
                    n || (n = !0, s = o < 0 ? 50 : -50);
                    let u = l / a.width,
                        f = 100 + 2 * o + s;
                    .004 > Math.abs(u - g.get()) && 1 > Math.abs(f - v.get()) || ((0, i.animate)(g, u, c), (0, i.animate)(v, f, c))
                };
            return t.addEventListener("pointermove", a, {
                passive: !0
            }), t.addEventListener("pointerleave", r), window.addEventListener("scroll", r, {
                passive: !0,
                capture: !0
            }), () => {
                t.removeEventListener("pointermove", a), t.removeEventListener("pointerleave", r), window.removeEventListener("scroll", r, !0), g.stop(), v.stop()
            }
        }, [d, m, g, v]), (0, t.jsx)(s.motion.div, {
            ref: p,
            "aria-hidden": "true",
            initial: !d && !!m && "hidden",
            whileInView: m ? "shown" : void 0,
            viewport: {
                once: !0,
                amount: .25
            },
            className: (0, n.cn)("pointer-events-none relative z-1 h-px", h),
            children: (0, t.jsx)(s.motion.svg, {
                viewBox: "0 0 1000 200",
                preserveAspectRatio: "none",
                focusable: "false",
                variants: m ? {
                    hidden: {
                        scaleX: 0
                    },
                    shown: {
                        scaleX: 1
                    }
                } : void 0,
                transition: d ? {
                    duration: 0
                } : {
                    duration: 3,
                    delay: e,
                    ease: u.EASE_SMOOTH_OUT
                },
                style: {
                    transformOrigin: "0% 50%"
                },
                className: "motion-reduce:transform-none! absolute inset-x-0 -top-[99px] h-[200px] w-full overflow-visible",
                children: (0, t.jsx)(s.motion.path, {
                    d: y,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 1,
                    vectorEffect: "non-scaling-stroke"
                })
            })
        })
    }])
}, 874749, e => {
    "use strict";
    var t = e.i(52644),
        n = e.i(635356),
        i = e.i(106510),
        s = e.i(888978),
        r = e.i(451035),
        a = e.i(618373),
        l = e.i(136263),
        o = e.i(926368);
    let u = "-my-[0.12em] block overflow-hidden py-[0.12em]";

    function c(e) {
        return "string" != typeof e
    }

    function f({
        style: e,
        className: c,
        children: m
    }) {
        let h = (0, l.useRef)(null),
            {
                scrollYProgress: p
            } = (0, s.useScroll)({
                target: h,
                offset: ["start 0.95", "start 0.72"]
            }),
            d = (0, r.useSpring)(p, o.SCRUB_SPRING),
            g = (0, a.useTransform)(d, [0, 1], ["100%", "0%"]);
        return (0, t.jsx)("span", {
            ref: h,
            style: e,
            className: (0, n.cn)(u, c),
            children: (0, t.jsx)(i.motion.span, {
                style: {
                    y: g
                },
                className: "motion-reduce:transform-none! block",
                children: m
            })
        })
    }

    function m({
        lines: e,
        trigger: i,
        delay: s,
        className: r,
        decorative: a
    }) {
        return (0, t.jsx)("span", {
            "aria-hidden": !!a || void 0,
            className: (0, n.cn)("flex flex-col", r),
            children: e.map((r, a) => {
                var l;
                let o, m = c(r) ? r.key : r,
                    h = c(r) ? r.node : `${r} `,
                    p = c(r) ? r.className : void 0,
                    d = (l = e.length, {
                        translate: `0 calc(var(--display-splay, 0px) * ${a-(l-1)/2})`
                    });
                return "scroll" === i ? (0, t.jsx)(f, {
                    style: d,
                    className: p,
                    children: h
                }, m) : (0, t.jsx)("span", {
                    style: d,
                    className: (0, n.cn)(u, p),
                    children: (0, t.jsx)("span", {
                        className: "block animate-display-line",
                        style: {
                            animationDelay: (o = 140 * a, "number" == typeof s ? `${s+o}ms` : `calc(${s} + ${o}ms)`)
                        },
                        children: h
                    })
                }, m)
            })
        })
    }
    e.s(["DisplayLines", 0, function({
        lines: e,
        linesMd: n,
        label: i,
        as: s = "h2",
        trigger: r = "scroll",
        delay: a = 0,
        id: l,
        style: o,
        className: u
    }) {
        return n ? (0, t.jsxs)(s, {
            id: l,
            style: o,
            "aria-label": i ? ? n.filter(e => "string" == typeof e).join(" "),
            className: u,
            children: [(0, t.jsx)(m, {
                lines: e,
                trigger: r,
                delay: a,
                className: "md:hidden",
                decorative: !0
            }), (0, t.jsx)(m, {
                lines: n,
                trigger: r,
                delay: a,
                className: "max-md:hidden",
                decorative: !0
            })]
        }) : (0, t.jsx)(s, {
            id: l,
            style: o,
            className: u,
            children: (0, t.jsx)(m, {
                lines: e,
                trigger: r,
                delay: a
            })
        })
    }])
}, 407017, e => {
    "use strict";
    class t {
        constructor(e) {
            this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
        }
        get finished() {
            return Promise.all(this.animations.map(e => e.finished))
        }
        getAll(e) {
            return this.animations[0][e]
        }
        setAll(e, t) {
            for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
        }
        attachTimeline(e) {
            let t = this.animations.map(t => t.attachTimeline(e));
            return () => {
                t.forEach((e, t) => {
                    e && e(), this.animations[t].stop()
                })
            }
        }
        get time() {
            return this.getAll("time")
        }
        set time(e) {
            this.setAll("time", e)
        }
        get speed() {
            return this.getAll("speed")
        }
        set speed(e) {
            this.setAll("speed", e)
        }
        get state() {
            return this.getAll("state")
        }
        get startTime() {
            return this.getAll("startTime")
        }
        get duration() {
            return n(this.animations, "duration")
        }
        get iterationDuration() {
            return n(this.animations, "iterationDuration")
        }
        runAll(e) {
            this.animations.forEach(t => t[e]())
        }
        play() {
            this.runAll("play")
        }
        pause() {
            this.runAll("pause")
        }
        cancel() {
            this.runAll("cancel")
        }
        complete() {
            this.runAll("complete")
        }
    }

    function n(e, t) {
        let n = 0;
        for (let i = 0; i < e.length; i++) {
            let s = e[i][t];
            null !== s && s > n && (n = s)
        }
        return n
    }
    class i extends t {
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
    }
    var s = e.i(926935),
        r = e.i(706221),
        a = e.i(102710),
        l = e.i(140926),
        o = e.i(973626),
        u = e.i(855397),
        c = e.i(10875),
        f = e.i(302461),
        m = e.i(470934),
        h = e.i(633836),
        p = e.i(725542),
        d = e.i(991388),
        g = e.i(577182);

    function v(e, t) {
        var n;
        let i;
        return (0, g.isEasingArray)(e) ? e[n = e.length, ((t - 0) % (i = n - 0) + i) % i + 0] : e
    }
    var y = e.i(513038);

    function A(e) {
        return "object" == typeof e && !Array.isArray(e)
    }

    function x(e, t, n, i) {
        return null == e ? [] : "string" == typeof e && A(t) ? (0, y.resolveElements)(e, n, i) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter(e => null != e) : [e]
    }

    function E(e, t, n, i) {
        return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : t.startsWith("<") ? Math.max(0, n + parseFloat(t.slice(1))) : i.get(t) ? ? e
    }
    var w = e.i(327745);

    function b(e, t) {
        return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
    }

    function j(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e)
    }

    function M(e, t) {
        return t[e] || (t[e] = []), t[e]
    }
    let S = e => "number" == typeof e,
        V = e => e.every(S);
    var N = e.i(754497),
        T = e.i(368623),
        O = e.i(530754),
        k = e.i(256650),
        R = e.i(570615),
        B = e.i(565274),
        I = e.i(777074),
        L = e.i(301219),
        $ = e.i(453311);
    class C extends $.VisualElement {
        constructor() {
            super(...arguments), this.type = "object"
        }
        readValueFromInstance(e, t) {
            if (t in e) {
                let n = e[t];
                if ("string" == typeof n || "number" == typeof n) return n
            }
        }
        getBaseTargetFromProps() {}
        removeValueFromRenderState(e, t) {
            delete t.output[e]
        }
        measureInstanceViewportBox() {
            return (0, L.createBox)()
        }
        build(e, t) {
            Object.assign(e.output, t)
        }
        renderInstance(e, {
            output: t
        }) {
            Object.assign(e, t)
        }
        sortInstanceNodePosition() {
            return 0
        }
    }

    function G(e) {
        let t = {
                presenceContext: null,
                props: {},
                visualState: {
                    renderState: {
                        transform: {},
                        transformOrigin: {},
                        style: {},
                        vars: {},
                        attrs: {}
                    },
                    latestValues: {}
                }
            },
            n = (0, k.isSVGElement)(e) && !(0, R.isSVGSVGElement)(e) ? new B.SVGVisualElement(t) : new I.HTMLVisualElement(t);
        n.mount(e), T.visualElementStore.set(e, n)
    }

    function F(e) {
        let t = new C({
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    output: {}
                },
                latestValues: {}
            }
        });
        t.mount(e), T.visualElementStore.set(e, t)
    }

    function P(e, t, n, i) {
        let s = [];
        if ((0, l.isMotionValue)(e) || "number" == typeof e || "string" == typeof e && !A(t)) s.push((0, N.animateSingleValue)(e, A(t) && t.default || t, n && n.default || n));
        else {
            if (null == e) return s;
            let r = x(e, t, i),
                a = r.length;
            (0, p.invariant)(!!a, "No valid elements provided.", "no-valid-elements");
            for (let e = 0; e < a; e++) {
                let i = r[e],
                    l = i instanceof Element ? G : F;
                T.visualElementStore.has(i) || l(i);
                let o = T.visualElementStore.get(i),
                    u = { ...n
                    };
                "delay" in u && "function" == typeof u.delay && (u.delay = u.delay(e, a)), s.push(...(0, O.animateTarget)(o, { ...t,
                    transition: u
                }, {}))
            }
        }
        return s
    }
    let U = function(e = {}) {
        let {
            scope: t,
            reduceMotion: n,
            skipAnimations: g
        } = e;
        return function(e, y, A) {
            var S;
            let N, T = [],
                O = {};
            if (void 0 !== n && (O.reduceMotion = n), void 0 !== g && (O.skipAnimations = g), Array.isArray(e) && e.some(Array.isArray)) {
                let n, {
                    onComplete: i,
                    ...g
                } = y || {};
                "function" == typeof i && (N = i), S = { ...O,
                    ...g
                }, n = [], (function(e, {
                    defaultTransition: t = {},
                    ...n
                } = {}, i, r) {
                    let a = t.duration || .3,
                        g = new Map,
                        y = new Map,
                        A = {},
                        S = new Map,
                        N = 0,
                        T = 0,
                        O = 0;
                    for (let n = 0; n < e.length; n++) {
                        let m = e[n];
                        if ("string" == typeof m) {
                            S.set(m, T);
                            continue
                        }
                        if (!Array.isArray(m)) {
                            S.set(m.name, E(T, m.at, N, S));
                            continue
                        }
                        let [g, b, B = {}] = m;
                        void 0 !== B.at && (T = E(T, B.at, N, S));
                        let I = 0,
                            L = (e, n, i, l = 0, m = 0) => {
                                var g;
                                let y = Array.isArray(g = e) ? g : [g],
                                    {
                                        delay: A = 0,
                                        times: x = (0, o.defaultOffset)(y),
                                        type: E = t.type || "keyframes",
                                        repeat: b,
                                        repeatType: j,
                                        repeatDelay: M = 0,
                                        ...S
                                    } = n,
                                    {
                                        ease: N = t.ease || "easeOut",
                                        duration: k
                                    } = n,
                                    R = "function" == typeof A ? A(l, m) : A,
                                    B = y.length,
                                    L = (0, u.isGenerator)(E) ? E : r ? .[E || "keyframes"];
                                if (B <= 2 && L) {
                                    let e = 100;
                                    2 === B && V(y) && (e = Math.abs(y[1] - y[0]));
                                    let n = { ...t,
                                        ...S
                                    };
                                    void 0 !== k && (n.duration = (0, h.secondsToMilliseconds)(k));
                                    let i = (0, c.createGeneratorEasing)(n, e, L);
                                    N = i.ease, k = i.duration
                                }
                                k ? ? (k = a);
                                let $ = T + R;
                                1 === x.length && 0 === x[0] && (x[1] = 1);
                                let C = x.length - y.length;
                                if (C > 0 && (0, f.fillOffset)(x, C), 1 === y.length && y.unshift(null), b && (0, p.warning)(b < 20, `Sequence segments can't repeat ${b} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`), b && b < 20) {
                                    let e = k > 0 ? M / k : 0;
                                    k = k * (b + 1) + M * b;
                                    let t = [...y],
                                        n = [...x],
                                        i = [...N = Array.isArray(N) ? [...N] : [N]],
                                        s = "reverse" === j || "mirror" === j,
                                        r = t,
                                        a = i;
                                    s && (r = [...t].reverse(), "reverse" === j && (a = [...i].reverse().map(e => "function" == typeof e ? (0, d.reverseEasing)(e) : e)));
                                    for (let l = 0; l < b; l++) {
                                        let o = s && l % 2 == 0,
                                            u = o ? r : t,
                                            c = o ? a : i,
                                            f = (l + 1) * (1 + e);
                                        e > 0 && (y.push(y[y.length - 1]), x.push(f), N.push("linear")), y.push(...u);
                                        for (let e = 0; e < u.length; e++) x.push(n[e] + f), N.push(0 === e ? "linear" : v(c, e - 1))
                                    }! function(e, t, n = 0) {
                                        let i = t + 1 + t * n;
                                        for (let t = 0; t < e.length; t++) e[t] = e[t] / i
                                    }(x, b, e)
                                }
                                let G = $ + k;
                                ! function(e, t, n, i, r, a) {
                                    for (let t = 0; t < e.length; t++) {
                                        let n = e[t];
                                        n.at > r && n.at < a && ((0, s.removeItem)(e, n), t--)
                                    }
                                    for (let s = 0; s < t.length; s++) e.push({
                                        value: t[s],
                                        at: (0, w.mixNumber)(r, a, i[s]),
                                        easing: v(n, s)
                                    })
                                }(i, y, N, x, $, G), I = Math.max(R + k, I), O = Math.max(G, O)
                            };
                        if ((0, l.isMotionValue)(g)) L(b, B, M("default", j(g, y)));
                        else {
                            let e = x(g, b, i, A),
                                t = e.length;
                            for (let n = 0; n < t; n++) {
                                let i = j(e[n], y);
                                for (let e in b) {
                                    var k, R;
                                    L(b[e], (k = B, R = e, k && k[R] ? { ...k,
                                        ...k[R]
                                    } : { ...k
                                    }), M(e, i), n, t)
                                }
                            }
                        }
                        N = T, T += I
                    }
                    return y.forEach((e, i) => {
                        for (let s in e) {
                            let r = e[s];
                            r.sort(b);
                            let a = [],
                                l = [],
                                o = [];
                            for (let e = 0; e < r.length; e++) {
                                let {
                                    at: t,
                                    value: n,
                                    easing: i
                                } = r[e];
                                a.push(n), l.push((0, m.progress)(0, O, t)), o.push(i || "easeOut")
                            }
                            0 !== l[0] && (l.unshift(0), a.unshift(a[0]), o.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), a.push(null)), g.has(i) || g.set(i, {
                                keyframes: {},
                                transition: {}
                            });
                            let u = g.get(i);
                            u.keyframes[s] = a;
                            let {
                                type: c,
                                ...f
                            } = t;
                            u.transition[s] = { ...f,
                                duration: O,
                                ease: o,
                                times: l,
                                ...n
                            }
                        }
                    }), g
                })(e.map(e => {
                    if (Array.isArray(e) && "function" == typeof e[0]) {
                        let t = e[0],
                            n = (0, r.motionValue)(0);
                        return (n.on("change", t), 1 === e.length) ? [n, [0, 1]] : 2 === e.length ? [n, [0, 1], e[1]] : [n, e[1], e[2]]
                    }
                    return e
                }), S, t, {
                    spring: a.spring
                }).forEach(({
                    keyframes: e,
                    transition: t
                }, i) => {
                    n.push(...P(i, e, t))
                }), T = n
            } else {
                let {
                    onComplete: n,
                    ...i
                } = A || {};
                "function" == typeof n && (N = n), T = P(e, y, { ...O,
                    ...i
                }, t)
            }
            let k = new i(T);
            return N && k.finished.then(N), t && (t.animations.push(k), k.finished.then(() => {
                (0, s.removeItem)(t.animations, k)
            })), k
        }
    }();
    e.s(["animate", 0, U], 407017)
}]);