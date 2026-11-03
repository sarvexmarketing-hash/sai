(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 299383, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(176570),
        n = e.i(378833),
        r = e.i(753630),
        s = e.i(106510),
        l = e.i(745786),
        o = e.i(136263),
        c = e.i(384214),
        p = e.i(688992),
        d = e.i(926368),
        m = e.i(564681),
        u = e.i(619266),
        x = e.i(864132),
        h = e.i(752312);
    let f = {
            opacity: 0,
            y: 28,
            z: 20,
            scale: 1.01
        },
        v = {
            opacity: 0,
            y: -20,
            z: -50,
            scale: .97
        },
        g = {
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1
        },
        w = {
            default: {
                duration: .3,
                ease: d.EASE_SMOOTH_OUT
            },
            opacity: {
                duration: 0
            }
        },
        y = 4 / 3;

    function b({
        apps: e,
        active: a,
        mobile: n = !1
    }) {
        let l = (0, o.useRef)(null),
            [c, p] = (0, o.useState)({
                width: 0,
                height: 0
            });
        (0, o.useEffect)(() => {
            let e = l.current ? .parentElement;
            if (!e || n) return;
            let t = () => {
                let t = e.clientWidth,
                    i = .7 * window.innerHeight;
                p(e => e.width === t && e.height === i ? e : {
                    width: t,
                    height: i
                })
            };
            t();
            let i = new ResizeObserver(t);
            return i.observe(e), window.addEventListener("resize", t), () => {
                i.disconnect(), window.removeEventListener("resize", t)
            }
        }, [n]);
        let d = Math.min(c.width, c.height * y);
        return (0, t.jsx)("div", {
            ref: l,
            "data-app-preview": e[a].id,
            style: !n && d ? {
                width: d,
                height: d / y
            } : void 0,
            className: (0, i.cn)("perspective-[1100px] pointer-events-none relative w-full", n ? "h-[min(calc((100vw_-_48px)*3/4),30svh)]" : "aspect-4/3 transition-[width,height] duration-700 ease-out-strong"),
            children: (0, t.jsx)(r.AnimatePresence, {
                initial: !1,
                children: e.map((e, i) => 1 >= Math.abs(i - a) ? (0, t.jsx)(s.motion.div, {
                    "aria-hidden": i !== a,
                    initial: f,
                    animate: i === a ? g : f,
                    exit: v,
                    transition: w,
                    style: {
                        zIndex: i === a ? 3 : 1
                    },
                    className: "absolute inset-0 overflow-hidden rounded-md bg-primary-100",
                    children: (0, t.jsx)(h.AppHeroMedia, {
                        app: e,
                        sizes: "(min-width: 1536px) calc(37.5vw - 28px), (min-width: 768px) calc(43.75vw - 30px), calc(100vw - 48px)",
                        playback: i === a ? "auto" : "hover"
                    })
                }, e.id) : null)
            })
        })
    }
    var j = e.i(874749),
        N = e.i(84694),
        k = e.i(866998),
        _ = e.i(373150),
        S = e.i(437102);

    function R({
        app: e,
        playing: a
    }) {
        let n = (0, o.useId)();
        return (0, t.jsxs)("article", {
            "aria-labelledby": n,
            className: "origin-top overflow-hidden rounded-md bg-invert-700 shadow-[0_-8px_16px_-12px_#0004] ring-1 ring-invert-700",
            children: [(0, t.jsx)("div", {
                "data-app-media": !0,
                className: "pointer-events-none relative h-[min(calc((100vw_-_48px)*3/4),30svh)] select-none bg-primary-100",
                children: (0, t.jsx)(h.AppHeroMedia, {
                    app: e,
                    sizes: "calc(100vw - 48px)",
                    playback: a ? "auto" : "static"
                })
            }), (0, t.jsxs)("div", {
                className: "bg-primary-100 px-4 pt-4 pb-3",
                children: [(0, t.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [(0, t.jsx)("span", {
                        className: (0, i.cn)("grid size-8 shrink-0 place-items-center overflow-hidden rounded-sm", (0, _.appIconPlate)(e.icon, "bg-invert-900")),
                        children: (0, t.jsx)(_.AppIcon, {
                            icon: e.icon,
                            className: "size-5",
                            loading: "lazy"
                        })
                    }), (0, t.jsx)("h3", {
                        id: n,
                        className: "font-normal text-copy-20 text-primary-700",
                        children: e.name
                    })]
                }), (0, t.jsx)("p", {
                    className: "mt-2 font-normal text-copy-16 text-primary-600",
                    children: e.tagline
                }), (0, t.jsxs)(S.TransitionLink, {
                    href: (0, k.appPath)(e.id),
                    className: "mt-2 inline-flex min-h-11 items-center font-medium text-copy-14 text-primary-700 underline decoration-primary-300 underline-offset-4 focus-visible:rounded-xs focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-2",
                    children: ["Try ", e.name]
                })]
            })]
        })
    }

    function z({
        apps: e,
        reduceMotion: a
    }) {
        let n = (0, o.useRef)(null),
            [r, s] = (0, o.useState)(!1),
            [l, c] = (0, o.useState)(-1);
        return (0, o.useEffect)(() => {
            let t = n.current;
            if (!t) return;
            let i = e.map((e, i) => t.children[i]),
                l = 0,
                o = () => {
                    l = 0;
                    let e = Number.parseFloat(getComputedStyle(t).getPropertyValue("--card-top")) || 80,
                        n = i.map(e => e.getBoundingClientRect()),
                        o = !a && window.matchMedia("(min-height: 35rem)").matches && n.every(t => t.height <= window.innerHeight - e - 24);
                    if (o !== r) return void s(o);
                    let p = i.map(e => e.querySelector("[data-app-media]") ? .offsetHeight ? ? 0),
                        d = 0,
                        m = Array(i.length).fill(0);
                    for (let t = i.length - 1; t >= 0; t -= 1) m[t] = d, o && p[t] > 0 && (d += Math.max(0, Math.min(1, 1 - (n[t].top - e) / p[t])));
                    let u = Math.min(e, n.at(-1) ? .top ? ? e),
                        x = i.map((t, i) => {
                            let a = n[i],
                                r = t.firstElementChild,
                                s = p[i],
                                l = o ? n[i + 1] ? .top ? ? 1 / 0 : 1 / 0,
                                c = Math.min(m[i], 3),
                                d = 1 - .025 * c,
                                x = 3 * c,
                                h = (Math.max(l, u) - u + x) / d + 24;
                            return r && (r.style.transform = c ? `translateY(${u-a.top-x}px) scale(${d})` : "", r.style.opacity = m[i] > 3 ? `${Math.max(0,4-m[i])}` : "", r.style.clipPath = c ? `inset(0 0 ${Math.max(0,a.height-h)}px 0)` : ""), Math.max(0, Math.min(a.top + s, l, window.innerHeight) - Math.max(a.top, e))
                        });
                    c(e => {
                        let t = Math.max(0, ...x);
                        if (a || 0 === t) return -1;
                        let i = x.findIndex(e => e > 0 && t - e < 1);
                        return e >= 0 && e < i && x[e] > 0 && x[e] + 12 >= t ? e : i
                    })
                },
                p = () => {
                    l && cancelAnimationFrame(l), o()
                };
            o();
            let d = new ResizeObserver(() => {
                l || (l = requestAnimationFrame(o))
            });
            for (let e of (d.observe(t), i)) d.observe(e);
            return window.addEventListener("scroll", p, {
                passive: !0
            }), window.addEventListener("resize", p), () => {
                l && cancelAnimationFrame(l), d.disconnect(), window.removeEventListener("scroll", p), window.removeEventListener("resize", p)
            }
        }, [e, a, r]), (0, t.jsx)("ul", {
            ref: n,
            "data-mobile-story": !0,
            "data-stacked": r ? "" : void 0,
            onFocus: e => {
                let t = n.current,
                    i = e.target.closest("li");
                if (!r || !t || !i || !e.target.matches(":focus-visible")) return;
                let a = Array.from(t.children),
                    s = a.indexOf(i);
                if (s < 0) return;
                let l = getComputedStyle(t),
                    o = Number.parseFloat(l.getPropertyValue("--card-top")) || 80,
                    c = Number.parseFloat(l.rowGap) || 0,
                    p = a.slice(0, s).reduce((e, t) => e + t.getBoundingClientRect().height + c, 0);
                window.scrollTo({
                    top: window.scrollY + t.getBoundingClientRect().top + p - o,
                    behavior: "instant"
                })
            },
            className: "relative isolate flex flex-col gap-5 [--card-top:80px] sm:[--card-top:84px]",
            children: e.map((e, n) => (0, t.jsx)("li", {
                "data-active": n === l ? "" : void 0,
                "data-open": !0,
                className: (0, i.cn)("min-w-0", r && "sticky top-(--card-top)"),
                children: (0, t.jsx)(R, {
                    app: e,
                    playing: n === l && !a
                })
            }, e.id))
        })
    }

    function E({
        app: e,
        active: a,
        staged: n,
        preview: r = !1,
        compact: s = !1
    }) {
        let l = (0, o.useId)(),
            c = !n || a;
        return (0, t.jsxs)("li", {
            "data-active": a ? "" : void 0,
            "data-open": c ? "" : void 0,
            className: "@container min-w-0",
            children: [r && (0, t.jsx)("div", {
                className: "relative mb-3 aspect-4/3 overflow-hidden rounded-md bg-primary-100",
                children: (0, t.jsx)(h.AppHeroMedia, {
                    app: e,
                    sizes: "(min-width: 768px) 50vw, calc(100vw - 48px)"
                })
            }), (0, t.jsxs)(S.TransitionLink, {
                href: (0, k.appPath)(e.id),
                "aria-labelledby": l,
                style: {
                    minHeight: n ? a ? "calc(100cqw * 3 / 4)" : "var(--closed-h, 0px)" : void 0
                },
                className: (0, i.cn)("w-full rounded-md bg-primary-100 p-4 transition-[min-height] duration-500 ease-out-strong focus-visible:outline-2 focus-visible:outline-primary-500 focus-visible:outline-offset-4 motion-reduce:transition-none md:p-6", s ? "grid grid-cols-[2.5rem_1fr] items-center gap-x-3 gap-y-2" : "flex flex-col items-start gap-4 md:gap-8", s && a && "ring-1 ring-primary-300 ring-inset"),
                children: [(0, t.jsx)("span", {
                    className: (0, i.cn)("grid size-10 shrink-0 place-items-center rounded-sm md:size-16", (0, _.appIconPlate)(e.icon, "bg-invert-900 ring-1 ring-primary-100 ring-inset")),
                    children: (0, t.jsx)(_.AppIcon, {
                        icon: e.icon,
                        className: "size-5 md:size-7",
                        loading: "lazy"
                    })
                }), (0, t.jsxs)("div", {
                    className: s ? "contents" : "flex w-full min-w-0 flex-1 flex-col justify-end",
                    children: [(0, t.jsx)("h3", {
                        id: l,
                        className: "font-normal text-copy-20 text-primary-700 md:text-copy-24 xl:text-[28px] 2xl:text-copy-36",
                        children: e.name
                    }), (0, t.jsx)("div", {
                        "aria-hidden": !c,
                        className: (0, i.cn)("grid transition-[grid-template-rows,opacity] duration-500 ease-out-strong motion-reduce:transition-none", c ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0", s && "col-span-2"),
                        children: (0, t.jsx)("div", {
                            className: "overflow-hidden",
                            children: (0, t.jsx)("p", {
                                className: (0, i.cn)("font-normal text-copy-16 text-primary-600 xl:text-copy-20 2xl:text-copy-24", !s && "pt-2"),
                                children: e.tagline
                            })
                        })
                    })]
                })]
            })]
        })
    }
    let M = {
            waiting: {
                y: "112%"
            },
            shown: {
                y: 0
            },
            leaving: {
                y: "-100%"
            }
        },
        P = "md:grid-cols-16 md:gap-x-4 lg:grid-cols-14 2xl:grid-cols-12",
        I = "md:col-span-9 md:col-start-8 lg:col-span-7 2xl:col-span-6 2xl:col-start-7";

    function C(e, t, i) {
        let a = Math.min(i, t.length - 1);
        for (let i = 0; i < t.length; i += 1) Math.abs(e - t[i]) + 24 < Math.abs(e - t[a]) && (a = i);
        return Math.max(0, a)
    }

    function L(e) {
        let t = Number.parseFloat(getComputedStyle(e).rowGap) || 0,
            i = 0;
        return Array.from(e.children, e => {
            let a = i,
                n = e.querySelector("a"),
                r = n ? .firstElementChild,
                s = e.querySelector("h3");
            if (!n || !r || !s) return a;
            let l = getComputedStyle(n),
                o = (Number.parseFloat(l.paddingTop) || 0) + (Number.parseFloat(l.paddingBottom) || 0) + (Number.parseFloat(l.rowGap) || 0) + r.getBoundingClientRect().height + s.getBoundingClientRect().height,
                c = `${o}px`;
            return n.style.getPropertyValue("--closed-h") !== c && n.style.setProperty("--closed-h", c), i += o + t, a
        })
    }

    function T({
        terms: e,
        reduceMotion: i
    }) {
        let [a, n] = (0, o.useState)(0);
        return (0, o.useEffect)(() => {
            if (i || e.length < 2) return;
            let t = window.setTimeout(() => n((a + 1) % e.length), 3e3);
            return () => window.clearTimeout(t)
        }, [a, e, i]), (0, t.jsxs)("span", {
            "aria-hidden": !0,
            onPointerEnter: t => {
                "touch" === t.pointerType || i || e.length < 2 || n(t => (t + 1) % e.length)
            },
            className: "relative -mb-[0.12em] block overflow-y-clip pb-[0.12em] [mask-image:linear-gradient(to_bottom,black_calc(100%_-_0.12em),transparent)]",
            children: [(0, t.jsx)("span", {
                className: "grid",
                children: e.map(e => (0, t.jsx)("span", {
                    className: "invisible col-start-1 row-start-1",
                    children: e
                }, e))
            }), (0, t.jsx)(r.AnimatePresence, {
                initial: !1,
                children: (0, t.jsx)(s.motion.span, {
                    "data-rotating-term": e[a],
                    initial: "waiting",
                    animate: "shown",
                    exit: "leaving",
                    className: "absolute inset-x-0 top-0 block whitespace-nowrap",
                    children: e[a].split(" ").map((e, a) => (0, t.jsx)(s.motion.span, {
                        variants: M,
                        transition: {
                            duration: .6 * !i,
                            delay: i ? 0 : .12 * a,
                            ease: d.EASE_OUT_STRONG
                        },
                        className: "inline-block whitespace-pre",
                        children: a > 0 ? ` ${e}` : e
                    }, `${e}-${a}`))
                }, e[a])
            })]
        })
    }
    e.s(["AppsSection", 0, function({
        apps: e
    }) {
        let r = (0, o.useId)(),
            h = (0, l.useReducedMotion)() ? ? !1,
            {
                ref: f,
                inView: v
            } = (0, p.useInView)("0px 0px -15% 0px"),
            g = (0, c.useBreakpoint)("md"),
            w = g && !h,
            y = (0, o.useRef)(null),
            k = (0, o.useRef)(null),
            [_, S] = function(e, t, i) {
                let [a, n] = (0, o.useState)(0);
                return (0, o.useEffect)(() => {
                    if (!i) return;
                    let a = e.current,
                        r = t.current;
                    if (!a || !r) return;
                    let s = 0,
                        l = () => {
                            s = 0;
                            let e = L(a),
                                t = r.getBoundingClientRect().top - a.getBoundingClientRect().top;
                            n(i => C(t, e, i))
                        },
                        o = () => {
                            s || (s = requestAnimationFrame(l))
                        };
                    l();
                    let c = new ResizeObserver(o);
                    return c.observe(a), c.observe(r), window.addEventListener("scroll", o, {
                        passive: !0
                    }), window.addEventListener("resize", o), () => {
                        s && cancelAnimationFrame(s), c.disconnect(), window.removeEventListener("scroll", o), window.removeEventListener("resize", o)
                    }
                }, [e, t, i]), [a, n]
            }(k, y, w),
            R = Math.max(...N.APP_USE_CASES.map(e => e.length));
        return (0, t.jsx)("section", {
            ref: f,
            id: "apps",
            "aria-labelledby": r,
            className: "px-6 pt-22 pb-20 max-md:scroll-mt-6 md:pt-[clamp(96px,calc(26.6667vw_-_256px),256px)] md:pb-[clamp(80px,7.5vw,144px)]",
            children: (0, t.jsxs)("div", {
                className: u.PAGE_GRID,
                children: [(0, t.jsxs)("div", {
                    className: "col-span-16 flex flex-col items-center gap-4 text-center md:gap-6 lg:col-span-12 lg:col-start-3 2xl:col-span-8 2xl:col-start-5 relative",
                    children: [(0, t.jsx)("div", {
                        className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.45)_0%,rgba(168,85,247,0.25)_38%,rgba(244,241,234,0)_72%)] blur-2xl -z-10",
                        "aria-hidden": !0
                    }), (0, t.jsx)("span", {
                        className: "font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-primary-700 font-semibold",
                        children: "INTRODUCING"
                    }), (0, t.jsx)("h2", {
                        id: r,
                        className: "w-full font-display font-medium text-[min(clamp(2rem,6.5vw,56px),calc((100vw_-_48px)/var(--headline-em)))] text-primary-900 uppercase leading-[1.0] tracking-[0.01em] md:text-[clamp(46px,4.5vw,76px)]",
                        children: "SAI TECHNOLOGIES"
                    }), (0, t.jsx)(s.motion.p, {
                        initial: !1,
                        animate: {
                            opacity: v || h ? 1 : 0,
                            y: v || h ? 0 : 12
                        },
                        transition: {
                            duration: .5 * !h,
                            ease: d.EASE_OUT_STRONG
                        },
                        className: "mx-auto max-w-150 text-pretty font-normal text-copy-16 text-primary-600 md:text-copy-20",
                        children: "Autonomous full-stack AI software development platform. Built around self-contained intelligent tools that turn your specifications into production applications."
                    })]
                }), (0, t.jsxs)("div", {
                    className: "@container col-span-16 mt-14 [overflow-anchor:none] md:mt-[clamp(40px,6.25vw,120px)] lg:col-span-14 lg:col-start-2 2xl:col-span-12 2xl:col-start-3 md:[--preview-h:calc(((100cqw_-_240px)*7/16_+_96px)*3/4)] lg:[--preview-h:calc((100cqw_-_16px)/2*3/4)]",
                    children: [(0, t.jsx)("div", {
                        className: "md:hidden",
                        children: !g && (0, t.jsx)(z, {
                            apps: e,
                            reduceMotion: h
                        })
                    }), h ? (0, t.jsx)("ul", {
                        className: "hidden gap-4 md:grid md:grid-cols-2",
                        children: e.map(e => (0, t.jsx)(E, {
                            app: e,
                            active: !1,
                            staged: !1,
                            preview: !0
                        }, e.id))
                    }) : (0, t.jsxs)("div", {
                        className: (0, i.cn)("hidden items-start md:grid", P),
                        children: [(0, t.jsx)("div", {
                            className: "sticky top-[max(6rem,calc((100svh_-_var(--preview-h))/2))] md:col-span-7 md:col-start-1 2xl:col-span-6",
                            children: (0, t.jsx)("div", {
                                ref: y,
                                className: "relative aspect-4/3 w-full",
                                children: (0, t.jsx)("div", {
                                    className: "absolute inset-0",
                                    children: (0, t.jsx)(b, {
                                        apps: e,
                                        active: _
                                    })
                                })
                            })
                        }), (0, t.jsx)("ul", {
                            ref: k,
                            onFocus: e => {
                                let t = k.current,
                                    i = y.current,
                                    a = e.target.closest("li");
                                if (!t || !i || !a) return;
                                let n = Array.prototype.indexOf.call(t.children, a);
                                if (n < 0 || n === _ || (S(n), !w)) return;
                                let r = L(t);
                                window.scrollTo({
                                    top: window.scrollY + t.getBoundingClientRect().top + r[n] - i.getBoundingClientRect().top,
                                    behavior: "instant"
                                })
                            },
                            className: (0, i.cn)("flex min-w-0 flex-col gap-4", I),
                            children: e.map((e, i) => (0, t.jsx)(E, {
                                app: e,
                                active: i === _,
                                staged: !0
                            }, e.id))
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, i.cn)("pt-8 md:grid md:py-12", P),
                        children: (0, t.jsx)("div", {
                            className: I,
                            children: (0, t.jsxs)(m.MarketingLink, {
                                href: (0, x.appUrl)("/apps"),
                                className: (0, i.cn)((0, n.buttonVariants)({
                                    variant: "primary",
                                    size: "md",
                                    shape: "pill"
                                }), "h-12 px-6 text-link-16 uppercase max-md:w-full 2xl:h-14 2xl:px-8"),
                                children: [(0, t.jsx)(a.Beam, {}), "Explore all Apps"]
                            })
                        })
                    })]
                })]
            })
        })
    }, "appAt", 0, C], 299383)
}, 85488, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(136263),
        a = e.i(619266),
        n = e.i(792402),
        r = e.i(392739),
        s = e.i(958666),
        l = e.i(396065);
    let o = "pika-h3-flex-home-promo-dismissed";

    function c() {
        return (0, t.jsx)("span", {
            className: "group/cta inline-flex shrink-0 transition-transform duration-300 ease-out pointer-fine:hover:scale-x-[1.02] pointer-fine:hover:[transition:scale_600ms_cubic-bezier(0.34,5.56,0.64,1)] pointer-fine:hover:[will-change:scale] motion-reduce:transition-none motion-reduce:hover:scale-x-100",
            children: (0, t.jsxs)("span", {
                className: "relative flex h-8 items-center justify-center whitespace-nowrap rounded-full border-2 border-transparent bg-white px-4 font-medium text-[12px] text-primary-900 uppercase transition-[border-color] duration-200 ease-out pointer-fine:group-hover/cta:border-white pointer-fine:group-hover/cta:[transition-delay:320ms] min-[568px]:h-[clamp(32px,10cqw,48px)] min-[568px]:px-[clamp(16px,5cqw,24px)] min-[568px]:text-[clamp(12px,3.5cqw,16px)]",
                children: [(0, t.jsx)("span", {
                    "aria-hidden": !0,
                    className: "transform-[translateZ(0)] pointer-events-none absolute inset-0 z-1 overflow-hidden rounded-full",
                    children: (0, t.jsx)("span", {
                        className: "block size-full translate-y-[101%] rounded-t-[50%] bg-black transition-[translate,border-radius] duration-500 ease-[cubic-bezier(0.4,0,0,1)] pointer-fine:group-hover/cta:translate-y-0 pointer-fine:group-hover/cta:rounded-none pointer-fine:group-hover/cta:[transition-duration:500ms,900ms] motion-reduce:transition-none motion-reduce:group-hover/cta:translate-y-[101%]"
                    })
                }), (0, t.jsx)("span", {
                    className: "relative z-2 block overflow-hidden",
                    children: (0, t.jsxs)("span", {
                        className: "block transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] pointer-fine:group-hover/cta:-translate-y-[110%] pointer-fine:group-hover/cta:[will-change:translate] motion-reduce:transition-none motion-reduce:group-hover/cta:translate-y-0",
                        children: [(0, t.jsx)("span", {
                            className: "block",
                            children: "Learn more"
                        }), (0, t.jsx)("span", {
                            "aria-hidden": !0,
                            className: "absolute top-[110%] left-0 block w-full text-white",
                            children: "Learn more"
                        })]
                    })
                })]
            })
        })
    }

    function p() {
        let [e, a] = (0, i.useState)(!1), p = (0, i.useId)(), d = (0, l.useLandingHeaderBackdrop)() ? .setVisible, [m, u] = (0, i.useState)(null), x = (0, i.useRef)(null), h = (0, i.useRef)(null), f = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
            (function() {
                try {
                    return "1" === (0, s.readCookie)(o, document.cookie)
                } catch {
                    return !1
                }
            })() && a(!0)
        }, []), (0, i.useEffect)(() => {
            let t = () => d ? .(!e && window.innerWidth < 568);
            return t(), window.addEventListener("resize", t), () => {
                window.removeEventListener("resize", t), d ? .(!1)
            }
        }, [e, d]), (0, i.useLayoutEffect)(() => {
            let e = h.current,
                t = f.current,
                i = x.current;
            if (!m || !e || !t || !i) return;
            let a = () => {
                let i = t.offsetParent ? {
                    x: t.offsetLeft - e.offsetLeft,
                    y: t.offsetTop - e.offsetTop
                } : {
                    x: 0,
                    y: 0
                };
                m.style.setProperty("--promo-cta-dx", `${i.x}px`), m.style.setProperty("--promo-cta-dy", `${i.y}px`)
            };
            a(), window.addEventListener("resize", a);
            let n = "u" < typeof ResizeObserver ? null : new ResizeObserver(a);
            return n ? .observe(i), () => {
                window.removeEventListener("resize", a), n ? .disconnect()
            }
        }, [m]), !0) ? null : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none fixed inset-x-0 top-0 z-30 h-20 bg-white min-[568px]:hidden"
            }), (0, t.jsxs)("aside", {
                ref: u,
                "aria-labelledby": p,
                className: "group/banner pointer-events-auto min-w-0 overflow-hidden bg-black text-white max-[567px]:fixed max-[567px]:inset-x-0 max-[567px]:top-20 max-[567px]:z-40 max-[567px]:h-[calc(11rem-7rem*var(--promo-collapse))] lg:min-h-0 min-[568px]:relative min-[568px]:aspect-[1236/858] min-[568px]:min-h-64 min-[568px]:rounded-sm min-[568px]:shadow-[0_8px_40px_rgb(0_0_0/0.18)] min-[568px]:[container-type:inline-size]",
                children: [(0, t.jsx)("div", {
                    className: "absolute inset-0 max-[567px]:bottom-auto max-[567px]:h-44",
                    children: (0, t.jsx)(n.default, {
                        src: "/marketing/h3-flex/home-promo.png",
                        alt: "",
                        fill: !0,
                        priority: !0,
                        sizes: "(min-width: 1536px) min(25vw, 500px), (min-width: 1024px) 31vw, (min-width: 568px) 44vw, 100vw",
                        className: "scale-[1.05] object-cover transition-[translate] duration-500 ease-out group-hover/banner:-translate-x-2 motion-reduce:transition-none motion-reduce:group-hover/banner:translate-x-0"
                    })
                }), (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "absolute inset-x-0 top-0 h-44 bg-black/60 opacity-[var(--promo-collapse)] will-change-[opacity] min-[568px]:hidden"
                }), (0, t.jsxs)("a", {
                    href: "https://pika.art/pika-h3-flex",
                    className: "absolute inset-0 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-[-4px]",
                    children: [(0, t.jsxs)("div", {
                        className: "absolute inset-0 flex flex-col p-4 max-[567px]:bottom-auto max-[567px]:h-44 min-[568px]:p-[clamp(16px,6cqw,32px)]",
                        children: [(0, t.jsx)("span", {
                            className: "inline-flex h-6 w-fit items-center rounded-full border border-white px-3 font-normal text-[14px] leading-none motion-reduce:translate-y-0! max-[567px]:translate-y-[calc(-0.5rem*var(--promo-collapse))] max-[567px]:opacity-[clamp(0,1-var(--promo-collapse)/0.5,1)] max-[567px]:will-change-[opacity,translate]",
                            children: "New"
                        }), (0, t.jsxs)("div", {
                            ref: x,
                            className: "mt-auto flex flex-col items-start gap-3 max-[567px]:flex-row max-[567px]:items-center max-[567px]:justify-between min-[568px]:gap-[clamp(8px,3cqw,16px)]",
                            children: [(0, t.jsxs)("div", {
                                className: "space-y-2 motion-reduce:translate-y-0! max-[567px]:translate-y-[calc(-0.5rem*var(--promo-collapse))] max-[567px]:opacity-[clamp(0,1-var(--promo-collapse)/0.5,1)] max-[567px]:will-change-[opacity,translate] min-[568px]:space-y-[clamp(8px,2cqw,12px)]",
                                children: [(0, t.jsx)("h2", {
                                    id: p,
                                    className: "max-w-[8em] font-display font-medium text-[24px] uppercase leading-none tracking-[0.01em] min-[568px]:text-[clamp(20px,6cqw,32px)]",
                                    children: "Pika H3 Flex is here"
                                }), (0, t.jsx)("p", {
                                    className: "max-w-[18em] font-normal text-[12px] leading-[1.25] min-[568px]:text-[clamp(12px,3.5cqw,20px)]",
                                    children: "Our faster-than-realtime model. Built for professional iteration."
                                })]
                            }), (0, t.jsx)("span", {
                                ref: h,
                                "data-promo-cta": "rest",
                                className: "inline-flex shrink-0 max-[567px]:translate-x-[calc(var(--promo-cta-dx)*var(--promo-collapse))] max-[567px]:translate-y-[calc(var(--promo-cta-dy)*var(--promo-collapse))] max-[567px]:will-change-[translate]",
                                children: (0, t.jsx)(c, {})
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        "aria-hidden": !0,
                        className: "absolute inset-x-0 bottom-0 flex h-16 translate-y-[calc(0.5rem*(1-var(--promo-collapse)))] items-center justify-between gap-2 py-2 pr-12 pl-3 opacity-[clamp(0,(var(--promo-collapse)-0.5)/0.5,1)] will-change-[opacity,translate] motion-reduce:translate-y-0! min-[568px]:hidden",
                        children: [(0, t.jsx)("span", {
                            className: "font-display font-medium text-[16px] uppercase leading-none tracking-[0.01em]",
                            children: "Pika H3 Flex is here"
                        }), (0, t.jsx)("span", {
                            ref: f,
                            "data-promo-cta": "target",
                            className: "invisible inline-flex shrink-0",
                            children: (0, t.jsx)(c, {})
                        })]
                    })]
                }), (0, t.jsx)("button", {
                    type: "button",
                    "aria-label": "Dismiss Pika H3 Flex announcement",
                    onClick: () => {
                        try {
                            document.cookie = `${o}=1; path=/; max-age=31536000; SameSite=Lax`
                        } catch {}
                        a(!0)
                    },
                    className: "absolute top-4 right-4 z-10 flex size-6 items-center justify-center rounded-full text-white transition-[background-color,scale] duration-200 ease-out after:absolute after:-inset-2.5 after:content-[''] hover:scale-105 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100 max-[567px]:translate-y-[calc(0.25rem*var(--promo-collapse))] min-[568px]:top-[clamp(16px,6cqw,32px)] min-[568px]:right-[clamp(16px,6cqw,32px)]",
                    children: (0, t.jsx)(r.Icon, {
                        name: "xmark",
                        className: "size-6"
                    })
                })]
            })]
        })
    }
    e.s(["H3FlexPromoPlacement", 0, function() {
        let e = (0, i.useRef)(null);
        return (0, i.useEffect)(() => {
            let t = e.current;
            if (!t) return;
            let i = 0,
                a = () => {
                    i = 0;
                    let e = t.getBoundingClientRect().top,
                        a = window.innerWidth < 568 ? Math.min(1, Math.max(0, (80 - e) / 112)) : 0;
                    t.style.setProperty("--promo-collapse", String(a)), t.dataset.collapse = a >= 1 ? "collapsed" : a > 0 ? "collapsing" : "rest"
                },
                n = () => {
                    i || (i = requestAnimationFrame(a))
                };
            return a(), window.addEventListener("scroll", n, {
                passive: !0
            }), window.addEventListener("resize", n), () => {
                i && cancelAnimationFrame(i), window.removeEventListener("scroll", n), window.removeEventListener("resize", n)
            }
        }, []), (0, t.jsx)("div", {
            className: "peer/promo pointer-events-none relative not-has-[aside]:hidden bg-white pt-2 min-[568px]:fixed min-[568px]:inset-x-0 min-[568px]:top-24 min-[568px]:z-40 min-[568px]:bg-transparent min-[568px]:px-5 min-[568px]:pt-0",
            children: (0, t.jsx)("div", {
                className: `${a.PAGE_GRID} items-start`,
                children: (0, t.jsx)("div", {
                    ref: e,
                    className: "col-span-16 w-full max-[567px]:h-44 max-[567px]:bg-black lg:col-span-5 lg:col-start-12 2xl:col-span-4 2xl:col-start-13 min-[568px]:col-span-7 min-[568px]:col-start-10 min-[568px]:min-w-0",
                    children: (0, t.jsx)(p, {})
                })
            })
        })
    }], 85488)
}, 187563, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(136263),
        a = e.i(626687);
    let n = "hero-intro",
        r = "hero-intro-play",
        s = "pika-hero-intro",
        l = `(function(){var seen=false;try{seen=!!sessionStorage.getItem("${s}");sessionStorage.setItem("${s}","1")}catch(e){}if(seen||matchMedia("(prefers-reduced-motion: reduce)").matches)return;var s=document.createElement("style");s.id="${r}";s.textContent=":root{--hero-intro:1800ms;--hero-intro-nav:2200ms}#${n}{display:block}";document.head.appendChild(s)})()`,
        o = () => () => {},
        c = () => !1,
        p = () => !0;
    e.s(["HeroIntro", 0, function() {
        let [e, s] = (0, i.useState)("pending"), d = (0, i.useRef)(null), m = (0, i.useRef)(!1), u = (0, i.useSyncExternalStore)(o, c, p);
        return (0, i.useLayoutEffect)(() => {
            let e = document.getElementById(r);
            if (e && (!e.dataset.played || m.current)) {
                e.dataset.played = "1", m.current = !0, s("playing");
                return
            }
            e ? .remove(), s("done")
        }, []), (0, i.useEffect)(() => {
            if ("playing" !== e) return;
            let t = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = t
            }
        }, [e]), (0, i.useEffect)(() => {
            if ("playing" !== e) return;
            let t = !0;
            return Promise.allSettled((d.current ? .getAnimations ? .() ? ? []).map(e => e.finished)).then(() => {
                t && s("done")
            }), () => {
                t = !1
            }
        }, [e]), (0, t.jsxs)(t.Fragment, {
            children: ["done" === e ? null : (0, t.jsxs)("div", {
                id: n,
                "aria-hidden": !0,
                className: "fixed inset-0 z-60 hidden",
                children: [(0, t.jsx)("div", {
                    ref: d,
                    style: {
                        animationDelay: "1100ms"
                    },
                    className: "absolute inset-0 origin-top animate-intro-curtain bg-invert-700"
                }), (0, t.jsx)("div", {
                    style: {
                        animationDelay: "1350ms"
                    },
                    className: "absolute inset-0 flex animate-intro-out items-center justify-center text-black",
                    children: (0, t.jsxs)("div", {
                        className: "relative flex flex-col items-center justify-center text-center px-4",
                        children: [(0, t.jsx)("div", {
                            className: "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.5)_0%,rgba(168,85,247,0.3)_35%,rgba(244,241,234,0)_70%)] blur-2xl -z-10",
                            "aria-hidden": !0
                        }), (0, t.jsx)("span", {
                            className: "flex animate-blur-in font-mono text-xs sm:text-sm tracking-[0.35em] uppercase text-primary-800 font-semibold mb-3",
                            children: "INTRODUCING"
                        }), (0, t.jsx)("span", {
                            className: "flex animate-blur-in font-display font-bold uppercase tracking-[0.02em] text-primary-900 text-[clamp(32px,5vw,84px)] leading-none",
                            children: "SAI TECHNOLOGIES"
                        })]
                    })
                })]
            }), u ? (0, t.jsx)("script", {
                dangerouslySetInnerHTML: {
                    __html: l
                }
            }) : null]
        })
    }])
}, 683371, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(792402),
        n = e.i(136263),
        r = e.i(84694);
    e.s(["HeroMedia", 0, function() {
        let e = (0, n.useRef)(null),
            [s, l] = (0, n.useState)(!1);
        return (0, n.useEffect)(() => {
            let t = e.current;
            t && !t.paused && t.readyState >= 3 && l(!0)
        }, []), (0, t.jsxs)("div", {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 -z-10 overflow-clip",
            children: [(0, t.jsx)(a.default, {
                src: r.HERO_POSTER,
                alt: "",
                fill: !0,
                priority: !0,
                sizes: "100vw",
                className: "object-cover object-[48%_center]"
            }), (0, t.jsx)("video", {
                ref: e,
                autoPlay: !0,
                loop: !0,
                muted: !0,
                playsInline: !0,
                preload: "auto",
                "data-playing": s || void 0,
                onPlaying: () => l(!0),
                className: (0, i.cn)("absolute inset-0 size-full object-cover object-[48%_center] transition-opacity duration-700 ease-out-strong motion-reduce:transition-none", s ? "opacity-100" : "opacity-0"),
                children: r.HERO_VIDEO_SOURCES.map(({
                    media: e,
                    type: i,
                    src: a
                }) => (0, t.jsx)("source", {
                    media: e,
                    type: i,
                    src: a
                }, a))
            }), (0, t.jsx)("div", {
                className: "absolute inset-0 bg-black/20"
            })]
        })
    }])
}, 393536, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(106510),
        n = e.i(496036),
        r = e.i(618373),
        s = e.i(619266),
        l = e.i(146214),
        o = e.i(84694);

    function c({
        copy: e = !1
    }) {
        return (0, t.jsx)("ul", {
            "aria-hidden": e || void 0,
            className: (0, i.cn)("flex shrink-0 items-center gap-10 pr-10 xl:gap-16 xl:pr-16", e && "motion-reduce:hidden"),
            children: o.SUPPORTED_MODELS.map(e => (0, t.jsxs)("li", {
                className: "flex shrink-0 items-center gap-3 font-normal text-copy-16 text-eggshell",
                children: [(0, t.jsx)("img", {
                    src: e.logo,
                    alt: "",
                    className: "size-6"
                }), e.name]
            }, e.name))
        })
    }

    function p() {
        return (0, t.jsxs)("section", {
            "aria-label": "Supported models",
            className: "col-span-16 mt-[clamp(32px,6.28vw,120px)] flex min-w-0 flex-col gap-[clamp(16px,1.67vw,32px)] border-eggshell/25 border-t py-[clamp(24px,2.51vw,48px)] lg:col-span-14 lg:col-start-2",
            children: [(0, t.jsx)("p", {
                className: "font-medium text-caption-12 text-white",
                children: "Every model you need to make anything you want"
            }), (0, t.jsx)("div", {
                className: "page-bleed overflow-hidden [-ms-overflow-style:none] [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [scrollbar-width:none] motion-reduce:overflow-x-auto lg:mx-0 lg:px-0 motion-reduce:[mask-image:none] [&::-webkit-scrollbar]:hidden",
                children: (0, t.jsxs)("div", {
                    className: "flex w-max animate-marquee motion-reduce:animate-none hover:[animation-play-state:paused]",
                    children: [(0, t.jsx)(c, {}), (0, t.jsx)(c, {
                        copy: !0
                    })]
                })
            })]
        })
    }
    e.s(["HeroModels", 0, function() {
        return null;
    }], 393536)
}, 766974, e => {
    "use strict";
    var t = e.i(136263);
    e.s(["LandingAnchors", 0, function() {
        return (0, t.useEffect)(() => {
            function e() {
                let e;
                try {
                    e = decodeURIComponent(location.hash.slice(1))
                } catch {
                    return
                }
                e && document.getElementById(e) ? .scrollIntoView({
                    behavior: "instant"
                })
            }
            return e(), window.addEventListener("hashchange", e), () => window.removeEventListener("hashchange", e)
        }, []), null
    }])
}, 274530, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(136263),
        a = e.i(635356),
        n = e.i(792402),
        r = e.i(437102),
        s = e.i(379767),
        l = e.i(465938);
    let o = {
        dark: {
            link: "focus-visible:outline-eggshell/60",
            media: "bg-invert-200",
            title: "text-invert-800 group-hover:text-invert-900",
            copy: "text-invert-600"
        },
        light: {
            link: "focus-visible:outline-primary-500",
            media: "bg-primary-100",
            title: "text-primary-900 group-hover:text-primary-700",
            copy: "text-primary-600"
        }
    };

    function c({
        post: e,
        surface: p,
        plateBleed: d = "md",
        className: m,
        style: u,
        sizes: x = "(min-width: 1024px) calc(29.17vw - 28px), (min-width: 768px) calc(33.33vw - 30px), calc(100vw - 48px)"
    }) {
        let h = (0, i.useId)(),
            f = o[p];
        return (0, t.jsx)("li", {
            className: (0, a.cn)("flex", m),
            style: u,
            children: (0, t.jsxs)(r.TransitionLink, {
                href: (0, s.postHref)(e),
                "aria-labelledby": h,
                className: (0, a.cn)("group relative isolate flex w-full flex-col gap-6 rounded-xs focus-visible:outline-2 focus-visible:outline-offset-4", f.link),
                children: [(0, t.jsx)(l.CoverPlate, {
                    surface: p,
                    bleed: d
                }), (0, t.jsx)("div", {
                    className: (0, a.cn)("relative aspect-[1080/895] overflow-hidden rounded-sm", f.media),
                    children: (0, t.jsx)(n.default, {
                        src: e.cover,
                        alt: "",
                        fill: !0,
                        sizes: x,
                        className: "object-cover transition-transform duration-700 ease-out-strong group-hover:scale-[1.03] motion-reduce:transition-none"
                    })
                }), (0, t.jsxs)("div", {
                    className: "flex flex-1 flex-col gap-4",
                    children: [(0, t.jsx)("h3", {
                        id: h,
                        className: (0, a.cn)("font-medium text-copy-24 transition-colors duration-200 ease-out-strong motion-reduce:transition-none", f.title),
                        children: e.title
                    }), (0, t.jsx)("p", {
                        className: (0, a.cn)("font-normal text-copy-16", f.copy),
                        children: e.description
                    })]
                }), (0, t.jsx)("p", {
                    className: (0, a.cn)("mt-6 font-medium text-copy-16", f.copy),
                    children: e.date
                })]
            })
        })
    }
    var p = e.i(718190);
    e.s(["LatestNewsCards", 0, function({
        posts: e,
        sizes: a,
        className: n
    }) {
        let r = (0, i.useRef)(null),
            s = (0, p.useSeenOnce)(r);
        return (0, t.jsx)("ul", {
            ref: r,
            className: n,
            children: e.map((e, i) => (0, t.jsx)(c, {
                post: e,
                surface: "dark",
                sizes: a,
                style: {
                    animationDelay: `${80*i}ms`
                },
                className: s ? "animate-blur-in" : "opacity-0"
            }, e.slug))
        })
    }], 274530)
}, 221787, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(378833),
        n = e.i(874560),
        r = e.i(407017),
        s = e.i(496036),
        l = e.i(136263),
        o = e.i(392739),
        c = e.i(437102),
        p = e.i(485603),
        d = e.i(64132),
        m = e.i(718190),
        u = e.i(552290),
        x = e.i(616339),
        h = e.i(585800),
        f = e.i(888978),
        v = e.i(451035),
        g = e.i(124620),
        w = e.i(926368),
        y = e.i(292985),
        b = e.i(1687);
    let j = "(prefers-reduced-motion: reduce)",
        N = e => {
            let t = window.matchMedia(j);
            return t.addEventListener("change", e), () => t.removeEventListener("change", e)
        },
        k = () => window.matchMedia(j).matches,
        _ = () => !1;

    function S() {
        return (0, l.useSyncExternalStore)(N, k, _)
    }
    let R = {
            duration: .4,
            ease: w.EASE_OUT_STRONG
        },
        z = {
            duration: .6,
            ease: "easeInOut"
        };

    function E({
        creator: e,
        decorative: i,
        paused: a
    }) {
        let n = (0, l.useRef)(null),
            r = (0, t.jsx)(c.TransitionLink, {
                href: (0, y.discoverDetailHref)(e.discoverId),
                "aria-label": `${e.handle} on Discover`,
                tabIndex: i ? -1 : void 0,
                className: "absolute inset-0 rounded-sm focus-visible:outline-2 focus-visible:outline-eggshell/60 focus-visible:-outline-offset-2"
            });
        return (0, t.jsxs)("li", {
            ref: n,
            "aria-hidden": i || void 0,
            style: {
                aspectRatio: `${e.width} / ${e.height}`
            },
            className: "group/tile motion-reduce:transform-none! relative h-(--creator-tile-height,clamp(240px,33.33vw,640px)) shrink-0 overflow-hidden rounded-sm bg-primary-100 motion-reduce:snap-start",
            children: ["video" === e.kind ? (0, t.jsx)(b.HoverMuteVideo, {
                src: e.video,
                poster: e.poster,
                playback: "hover",
                visibilityTargetRef: n,
                visibilityMargin: "800px 0px",
                paused: a,
                controlTabIndex: i ? -1 : void 0,
                className: "absolute inset-0",
                children: r
            }) : (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("img", {
                    src: e.poster,
                    alt: "",
                    draggable: !1,
                    decoding: "async",
                    className: "absolute inset-0 size-full object-cover"
                }), r]
            }), (0, t.jsxs)("div", {
                className: "pointer-events-none absolute bottom-2 left-2 hidden items-start gap-1.5 opacity-0 pointer-coarse:opacity-100 transition-opacity duration-200 ease-out-strong group-focus-within/tile:opacity-100 group-hover/tile:opacity-100 motion-reduce:transition-none sm:flex",
                children: [(0, t.jsx)(u.Avatar, {
                    src: e.avatar,
                    fallbackName: e.handle,
                    size: "md",
                    avatarClassName: "bg-slate/50 text-white backdrop-blur-lg"
                }), (0, t.jsx)("span", {
                    className: "flex h-10 items-center rounded-full bg-slate/50 px-4 font-normal text-caption-12 text-white backdrop-blur-lg",
                    children: e.handle
                })]
            })]
        })
    }

    function M({
        creators: e,
        speed: i,
        phase: a,
        direction: n,
        paused: o = !1,
        videosPaused: c = !1,
        onPause: p
    }) {
        let d = (0, l.useRef)(null),
            m = (0, l.useRef)(null),
            [u, w] = (0, l.useState)(1),
            y = (0, l.useRef)(null),
            b = (0, s.useMotionValue)(0),
            j = (0, s.useMotionValue)(1),
            N = (0, l.useRef)(null),
            k = S(),
            _ = (0, h.useInView)(d, {
                margin: "100px"
            }),
            P = (0, l.useRef)(!1),
            I = (0, l.useRef)(!1),
            C = (0, l.useRef)(null),
            L = (0, l.useRef)(!1),
            [T, A] = (0, l.useState)(!1),
            O = (0, l.useRef)(1),
            {
                scrollY: F
            } = (0, f.useScroll)(),
            B = (0, g.useVelocity)(F),
            $ = (0, v.useSpring)(B, {
                damping: 50,
                stiffness: 400
            }),
            D = () => {
                let e = I.current || C.current || o ? 0 : 1;
                j.get() !== e && (N.current ? .stop(), N.current = (0, r.animate)(j, e, 0 === e ? R : z))
            };
        return (0, x.useAnimationFrame)((e, t) => {
            var a, n;
            let r;
            if (k || o || C.current || !_ || document.hidden || P.current) return;
            let s = j.get();
            if (s <= 0) return;
            let l = (a = $.get(), n = O.current, {
                direction: r = Math.abs(a) > 5 ? Math.sign(a) : n,
                multiplier: r * (1 + Math.min(Math.abs(a) / 600, 1))
            });
            O.current = l.direction, b.set(b.get() + i * s * l.multiplier * Math.min(t, 64) / 1e3)
        }), (0, l.useEffect)(() => {
            if (o) {
                N.current ? .stop(), j.jump(0);
                return
            }
            I.current || C.current || 1 === j.get() || (N.current ? .stop(), N.current = (0, r.animate)(j, 1, z))
        }, [o, j]), (0, l.useEffect)(() => () => N.current ? .stop(), []), (0, l.useEffect)(() => {
            let t = m.current,
                r = d.current;
            if (!t || !r) return;
            if (k) {
                for (let e of (y.current = null, w(1), Array.from(t.children))) e.style.removeProperty("transform");
                return
            }
            let s = () => {
                    let e = y.current;
                    e && Array.from(t.children).forEach((t, i) => {
                        if (!(i >= e.tiles.length)) {
                            var a;
                            let n, r;
                            t.style.transform = `translate3d(${a=b.get(),n=e.tiles[i],r=a/e.ring-n.delay/e.duration,n.from+(n.to-n.from)*((r%1+1)%1)}px, 0, 0)`
                        }
                    })
                },
                l = () => {
                    let l = function({
                        widths: e,
                        gap: t,
                        viewport: i,
                        count: a,
                        speed: n,
                        phase: r,
                        direction: s
                    }) {
                        let l = e.slice(0, a),
                            o = Math.max(...l);
                        if (!(o > 0) || n <= 0) return null;
                        let c = l.reduce((e, i) => e + i + t, 0),
                            p = Math.max(1, Math.ceil((i + o) / c)),
                            d = c * p,
                            m = d / n,
                            u = 0,
                            x = e.map(e => {
                                let i = -(u + e),
                                    a = d - e - u,
                                    [n, l] = "left" === s ? [a, i] : [i, a],
                                    o = {
                                        from: n,
                                        to: l,
                                        delay: -(((-r * c - n) / (l - n) % 1 + 1) % 1) * m
                                    };
                                return u += e + t, o
                            });
                        return {
                            copies: p,
                            ring: d,
                            duration: m,
                            tiles: x
                        }
                    }({
                        widths: Array.from(t.children).map(e => Number.parseFloat(getComputedStyle(e).width) || e.offsetWidth),
                        gap: Number.parseFloat(getComputedStyle(t).columnGap) || 0,
                        viewport: r.clientWidth,
                        count: e.length,
                        speed: i,
                        phase: a,
                        direction: n
                    });
                    if (l) {
                        if (l.copies !== u) return void w(l.copies);
                        y.current = l, s()
                    }
                };
            l();
            let o = b.on("change", s),
                c = new ResizeObserver(l);
            return c.observe(r), c.observe(t), () => {
                o(), c.disconnect()
            }
        }, [e, i, a, n, u, b, k]), (0, t.jsx)("div", {
            ref: d,
            onPointerEnter: e => {
                "touch" !== e.pointerType && (I.current = !0, D())
            },
            onPointerDown: e => {
                L.current = !1, k || 0 !== e.button || !e.isPrimary || e.target.closest("button") || (C.current = {
                    pointerId: e.pointerId,
                    startX: e.clientX,
                    startY: e.clientY,
                    lastX: e.clientX,
                    active: !1
                }, N.current ? .stop(), j.jump(0))
            },
            onPointerMove: e => {
                let t = C.current;
                if (!t || t.pointerId !== e.pointerId) return;
                if (!t.active) {
                    let i = Math.abs(e.clientX - t.startX),
                        a = Math.abs(e.clientY - t.startY);
                    if (8 > Math.max(i, a)) return;
                    if (a >= i) {
                        C.current = null, D();
                        return
                    }
                    t.active = !0, L.current = !0, e.currentTarget.setPointerCapture(e.pointerId), A(!0), p ? .()
                }
                e.preventDefault();
                let i = e.currentTarget,
                    a = i.getBoundingClientRect().width / i.offsetWidth || 1,
                    r = (e.clientX - t.lastX) / a;
                b.set(b.get() + ("left" === n ? -r : r)), t.lastX = e.clientX
            },
            onPointerUp: e => {
                C.current ? .pointerId === e.pointerId && (C.current = null, A(!1), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId), D())
            },
            onPointerLeave: () => {
                I.current = !1, C.current ? .active || (C.current = null), D()
            },
            onPointerCancel: () => {
                C.current = null, A(!1), D()
            },
            onLostPointerCapture: e => {
                e.target === e.currentTarget && (C.current = null, A(!1), D())
            },
            onDragStartCapture: e => e.preventDefault(),
            onClickCapture: e => {
                L.current && 0 !== e.detail && (e.preventDefault(), e.stopPropagation(), L.current = !1)
            },
            onFocusCapture: e => {
                if (k || !e.target.matches(":focus-visible")) return;
                P.current = !0;
                let t = e.target.closest("li"),
                    i = d.current;
                if (!t || !i) return;
                let a = t.getBoundingClientRect(),
                    r = i.getBoundingClientRect();
                if (a.left < r.left || a.right > r.right) {
                    let e = (r.left + r.right - a.left - a.right) / 2,
                        t = r.width / i.offsetWidth || 1;
                    b.set(b.get() + ("left" === n ? -1 : 1) * e / t)
                }
            },
            onBlurCapture: e => {
                e.currentTarget.contains(e.relatedTarget) || (P.current = !1)
            },
            style: {
                cursor: k ? void 0 : T ? "grabbing" : "grab"
            },
            className: "flex w-full touch-pan-y touch-pinch-zoom select-none overflow-x-clip [scrollbar-width:none] motion-reduce:touch-auto motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:scroll-px-6 motion-reduce:overflow-x-auto motion-reduce:px-6 [&::-webkit-scrollbar]:hidden",
            children: (0, t.jsx)("ul", {
                ref: m,
                className: "flex w-max gap-2",
                children: Array.from({
                    length: u
                }, (i, a) => e.map(e => (0, t.jsx)(E, {
                    creator: e,
                    decorative: a > 0,
                    paused: c
                }, `${e.discoverId}-${a}`)))
            })
        })
    }
    e.s(["MadeWithPikaSection", 0, function({
        creators: e
    }) {
        let u = Math.ceil(e.length / 2),
            x = [e.slice(0, u), e.slice(u)],
            h = (0, l.useId)(),
            f = (0, l.useId)(),
            [v, g] = (0, l.useState)(!1),
            [w, y] = (0, l.useState)(!1),
            b = v || w,
            j = S(),
            N = (0, l.useRef)(null),
            k = (0, l.useRef)(null),
            _ = (0, m.useSeenOnce)(N, "0px 0px -20% 0px"),
            R = (0, m.useSeenOnce)(k),
            z = (0, s.useMotionValue)(0);
        return (0, l.useEffect)(() => {
            if (j) return void z.set(1);
            if (!_ || z.get() >= 1) return;
            let e = (0, r.animate)(z, 1, {
                duration: 1.2,
                ease: "linear"
            });
            return () => e.stop()
        }, [_, j, z]), (0, t.jsxs)("section", {
            "aria-labelledby": h,
            className: "grid grid-cols-[minmax(24px,1fr)_minmax(0,2000px)_minmax(24px,1fr)] overflow-x-clip pt-22 pb-20 [--creator-overhead:calc(88px_+_max(48px,1.04_*_clamp(1.75rem,8.85vw,46px)_+_clamp(0px,(560px_-_100vw)_*_1000,1.04_*_clamp(1.75rem,8.85vw,46px)))_+_clamp(32px,3.33vw,64px)_+_8px_+_80px_+_80px)] [--creator-tile-height:max(120px,min(clamp(240px,33.33vw,640px),calc((100svh_-_var(--creator-overhead))_/_2)))] md:pt-[clamp(88px,7.5vw,144px)] md:pb-[clamp(80px,7.5vw,144px)] md:[--creator-overhead:calc(clamp(88px,7.5vw,144px)_+_max(48px,1.04_*_clamp(46px,3.75vw,72px))_+_clamp(32px,3.33vw,64px)_+_8px_+_80px_+_clamp(80px,7.5vw,144px))] lg:[--creator-overhead:calc(clamp(88px,7.5vw,144px)_+_1.04_*_clamp(46px,3.75vw,72px)_+_clamp(32px,3.33vw,64px)_+_8px_+_clamp(80px,7.5vw,144px))]",
            children: [(0, t.jsx)("h2", {
                ref: N,
                id: h,
                className: "col-start-2 row-start-1 w-fit max-w-[calc(100%-64px)] font-display font-medium text-[clamp(1.75rem,8.85vw,46px)] text-primary-900 uppercase leading-[1.04] tracking-[0.01em] md:text-[clamp(46px,3.75vw,72px)] lg:max-w-none",
                children: (0, t.jsx)(p.DiaTextReveal, {
                    text: "Made with Pika",
                    progress: z,
                    reducedMotion: j
                })
            }), (0, t.jsx)("div", {
                id: f,
                className: "col-span-full row-start-2 mt-[clamp(32px,3.33vw,64px)] min-w-0",
                children: (0, t.jsx)(d.MediaReveal, {
                    scale: !1,
                    contentClassName: "flex min-w-0 flex-col gap-2",
                    children: x.map((e, i) => (0, t.jsx)(M, {
                        creators: e,
                        speed: 40,
                        phase: 0 === i ? .12 : .55,
                        direction: 0 === i ? "left" : "right",
                        paused: b,
                        videosPaused: v,
                        onPause: () => y(!0)
                    }, i))
                })
            }), (0, t.jsxs)("div", {
                className: "contents lg:col-start-2 lg:row-start-1 lg:flex lg:items-center lg:gap-4 lg:self-end lg:justify-self-end",
                children: [!j && (0, t.jsx)(n.IconButton, {
                    label: b ? "Resume motion" : "Pause motion",
                    "aria-controls": f,
                    onClick: () => {
                        b ? (g(!1), y(!1)) : g(!0)
                    },
                    variant: "tertiary",
                    shape: "circle",
                    size: "xl",
                    iconSlot: b ? (0, t.jsx)(o.Icon, {
                        name: "play-solid",
                        className: "size-3"
                    }) : (0, t.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        "aria-hidden": "true",
                        className: "size-4",
                        children: (0, t.jsx)("path", {
                            d: "M8 5v14M16 5v14"
                        })
                    }),
                    style: {
                        animationDelay: "300ms"
                    },
                    className: (0, i.cn)("col-start-2 row-start-1 shrink-0 self-start justify-self-end lg:self-auto 2xl:size-14", _ ? "animate-arrive" : "opacity-0")
                }), (0, t.jsx)(c.TransitionLink, {
                    ref: k,
                    href: "/discover",
                    style: {
                        animationDelay: "300ms"
                    },
                    className: (0, i.cn)((0, a.buttonVariants)({
                        variant: "tertiary",
                        size: "md",
                        shape: "pill"
                    }), "col-start-2 row-start-3 mt-8 h-12 w-full px-6 text-link-16 uppercase lg:mt-0 lg:w-auto 2xl:h-14 2xl:px-8", R ? "animate-arrive" : "opacity-0"),
                    children: "See all community templates"
                })]
            })]
        })
    }], 221787)
}, 614674, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(106510),
        n = e.i(745786),
        r = e.i(136263),
        s = e.i(392739),
        l = e.i(437102),
        o = e.i(728069);

    function c({
        entry: e
    }) {
        let i = (0, r.useId)();
        return (0, t.jsxs)(l.TransitionLink, {
            href: e.href,
            "aria-labelledby": i,
            className: "group flex items-center gap-6 rounded-xs py-[clamp(24px,2.5vw,48px)] focus-visible:outline-2 focus-visible:outline-eggshell/60 focus-visible:outline-offset-4",
            children: [(0, t.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col gap-4",
                children: [(0, t.jsxs)("p", {
                    className: "flex flex-wrap gap-x-2 font-normal text-copy-16 text-invert-600",
                    children: [(0, t.jsx)("span", {
                        children: e.kind
                    }), (0, t.jsx)("span", {
                        children: e.date
                    })]
                }), (0, t.jsx)("h3", {
                    id: i,
                    className: "font-normal text-copy-20 text-invert-800 transition-colors duration-200 ease-out-strong group-hover:text-invert-900 motion-reduce:transition-none",
                    children: e.title
                })]
            }), (0, t.jsx)("span", {
                "aria-hidden": "true",
                className: "flex size-14 shrink-0 -translate-x-4 pointer-coarse:translate-x-0 items-center justify-center rounded-full text-invert-800 opacity-0 pointer-coarse:opacity-100 transition-[opacity,translate,background-color,color] duration-300 ease-out-strong group-hover:translate-x-0 group-hover:bg-invert-200 group-hover:text-invert-900 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:bg-invert-200 group-focus-visible:opacity-100 motion-reduce:transition-none [&_svg]:size-5",
                children: (0, t.jsx)(s.Icon, {
                    name: "arrow-right"
                })
            })]
        })
    }
    e.s(["ResearchRows", 0, function({
        entries: e,
        className: r
    }) {
        let s = (0, n.useReducedMotion)();
        return (0, t.jsx)("ul", {
            "data-rule-list": !0,
            className: (0, i.cn)("flex flex-col gap-2.5", r),
            children: e.map((e, i) => (0, t.jsxs)("li", {
                children: [(0, t.jsx)(o.FaqRule, {
                    delay: .04 * i,
                    className: "text-invert-500"
                }), (0, t.jsx)(a.motion.div, {
                    initial: !s && {
                        opacity: 0,
                        y: 12
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0,
                        amount: .25
                    },
                    transition: s ? {
                        duration: 0
                    } : {
                        duration: .35,
                        delay: .04 * i,
                        ease: "easeOut"
                    },
                    className: "motion-reduce:transform-none! motion-reduce:opacity-100!",
                    children: (0, t.jsx)(c, {
                        entry: e
                    })
                })]
            }, e.title))
        })
    }])
}, 877054, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(874560),
        a = e.i(753630),
        n = e.i(106510),
        r = e.i(745786),
        s = e.i(136263),
        l = e.i(392739),
        o = e.i(688992),
        c = e.i(926368),
        p = e.i(619266),
        d = e.i(874749),
        m = e.i(84694),
        u = e.i(150721),
        x = e.i(258148),
        h = e.i(332568);

    function f({
        open: e,
        reduceMotion: i,
        value: a,
        onValueChange: n,
        scrollerRef: r
    }) {
        return (0, t.jsx)(h.LiquidDrop, {
            open: e,
            reduceMotion: i,
            children: (0, t.jsx)(u.FadeScroller, {
                ref: r,
                chevrons: !1,
                className: "flex w-auto min-w-0 rounded-full p-1",
                children: (0, t.jsx)(x.SegmentedControl, {
                    "aria-label": "Creative workflows",
                    variant: "solid",
                    value: a,
                    onValueChange: n,
                    className: "mx-auto shrink-0 bg-transparent",
                    children: m.WORKFLOWS.map(e => (0, t.jsx)(x.SegmentedControl.Item, {
                        value: e.id,
                        className: "sm:px-3 lg:px-4",
                        children: e.label
                    }, e.id))
                })
            })
        })
    }
    var v = e.i(635356),
        g = e.i(378833),
        w = e.i(500580),
        y = e.i(792402),
        b = e.i(437102),
        j = e.i(17188),
        N = e.i(1687);
    let k = {
            "ad-creatives": [11, 5, 5, 11],
            editors: [6, 6, 4, 10, 6],
            marketers: [11, 5, 5, 11],
            filmmakers: [6, 6, 4, 8, 8]
        },
        _ = {
            4: "xl:col-span-4",
            5: "xl:col-span-5",
            6: "xl:col-span-6",
            8: "xl:col-span-8",
            10: "xl:col-span-10",
            11: "xl:col-span-11"
        },
        S = "group size-full overflow-hidden rounded-md bg-black transition-transform duration-200 ease-out-strong has-[a:active]:scale-[0.985] motion-reduce:transition-none";

    function R({
        tile: e,
        span: i,
        orphan: a,
        paused: n,
        style: r,
        className: s
    }) {
        let l = (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                className: "pointer-events-none absolute inset-0 bg-black/20"
            }), (0, t.jsx)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-black/60 to-transparent"
            }), (0, t.jsxs)(b.TransitionLink, {
                href: (0, j.appHref)(e.app, void 0, void 0, e.mode),
                className: "absolute inset-0 flex flex-col items-start justify-end gap-3 rounded-md p-5 focus-visible:outline-2 focus-visible:outline-eggshell/60 focus-visible:-outline-offset-2 sm:p-4 xl:p-6",
                children: [(0, t.jsx)("h3", {
                    className: "line-clamp-2 font-display font-normal text-[26px] text-white leading-[1.2] [text-shadow:0_2px_4px_rgb(0_0_0/0.25)] sm:text-[22px] xl:text-[clamp(26px,1.67vw,var(--text-sub-sm))]",
                    children: e.title
                }), (0, t.jsxs)("span", {
                    className: (0, v.cn)((0, g.buttonVariants)({
                        variant: "secondary",
                        theme: "light",
                        size: "md",
                        shape: "pill"
                    }), "shrink-0 bg-eggshell/10 px-6 text-link-16 uppercase backdrop-blur-lg transition-colors duration-300 ease-out-strong group-hover:bg-eggshell/20 motion-reduce:transition-none"),
                    children: ["Try ", e.appName]
                })]
            })]
        });
        return (0, t.jsx)("div", {
            style: r,
            className: (0, v.cn)("aspect-[4/5] min-h-0 min-w-0 snap-start xl:aspect-auto", a ? "sm:col-span-2 sm:aspect-[16/9]" : "sm:aspect-[4/3]", _[i], s),
            children: e.video ? (0, t.jsx)(N.HoverMuteVideo, {
                src: e.video,
                poster: e.image,
                paused: n,
                className: S,
                videoClassName: "transition-[opacity,scale] duration-700 ease-out-strong group-hover:scale-[1.03] motion-reduce:transition-none",
                controlClassName: "top-5 right-5 md:top-6 md:right-6",
                children: l
            }) : (0, t.jsxs)("div", {
                className: (0, v.cn)("relative", S),
                children: [(0, t.jsx)(y.default, {
                    src: e.image,
                    alt: "",
                    fill: !0,
                    sizes: `(min-width: 1280px) ${Math.round(i/16*100)}vw, (min-width: 640px) ${a?"100vw":"50vw"}, 100vw`,
                    className: "object-cover transition-[scale] duration-700 ease-out-strong group-hover:scale-[1.03] motion-reduce:transition-none"
                }), l]
            })
        })
    }

    function z({
        workflow: e,
        paused: a,
        reducedMotion: r,
        entrance: o = !1,
        revealed: p = !0
    }) {
        let d = (0, w.useIsPresent)(),
            m = (0, s.useId)(),
            u = (0, s.useRef)(null),
            [x, h] = (0, s.useState)(0);
        (0, s.useEffect)(() => {
            let e = u.current;
            if (!e) return;
            let t = new ResizeObserver(() => {
                0 === e.scrollLeft && h(0)
            });
            return t.observe(e), () => t.disconnect()
        }, []);
        let f = e => {
            let t = u.current,
                i = t ? .children[0],
                a = t ? .children[1];
            t && i && a && t.scrollTo({
                left: (x + e) * (a.offsetLeft - i.offsetLeft),
                behavior: r ? "auto" : "smooth"
            })
        };
        return (0, t.jsxs)(n.motion.div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: .18 * !r,
                ease: c.EASE_OUT_STRONG
            },
            inert: !d,
            "aria-hidden": !d || void 0,
            className: "col-start-1 row-start-1 min-w-0",
            children: [(0, t.jsx)("section", {
                id: m,
                ref: u,
                "aria-label": `${e.label} previews`,
                onScroll: () => {
                    let t = u.current,
                        i = t ? .children[0],
                        a = t ? .children[1];
                    if (!t || !i || !a) return;
                    let n = a.offsetLeft - i.offsetLeft;
                    n <= 0 || h(Math.max(0, Math.min(e.tiles.length - 1, Math.round(t.scrollLeft / n))))
                },
                className: "-mx-6 grid snap-x snap-mandatory scroll-px-6 auto-cols-[calc(100%_-_32px)] grid-flow-col gap-3 overflow-x-auto overscroll-x-contain px-6 [scrollbar-width:none] sm:mx-0 sm:snap-none sm:auto-cols-auto sm:grid-flow-row sm:grid-cols-2 sm:items-start sm:gap-4 sm:overflow-visible sm:px-0 xl:auto-rows-[min(25vw,480px)] xl:grid-cols-16 xl:items-stretch xl:gap-3 [&::-webkit-scrollbar]:hidden",
                children: e.tiles.map((i, n) => (0, t.jsx)(R, {
                    tile: i,
                    span: k[e.id][n],
                    paused: a || !d,
                    orphan: e.tiles.length % 2 == 1 && n === e.tiles.length - 1,
                    style: o ? {
                        animationDelay: `${80*n}ms`
                    } : void 0,
                    className: o ? p ? "animate-stagger-rise" : "opacity-0" : void 0
                }, i.title))
            }), (0, t.jsxs)("div", {
                className: "mt-4 flex items-center justify-end sm:hidden",
                children: [(0, t.jsxs)("span", {
                    className: "sr-only",
                    "aria-live": "polite",
                    "aria-atomic": "true",
                    children: ["Preview ", x + 1, " of ", e.tiles.length]
                }), (0, t.jsxs)("div", {
                    className: "flex gap-2",
                    children: [(0, t.jsx)(i.IconButton, {
                        label: "Previous workflow preview",
                        "aria-controls": m,
                        disabled: 0 === x,
                        onClick: () => f(-1),
                        variant: "tertiary",
                        shape: "circle",
                        size: "lg",
                        iconSlot: (0, t.jsx)(l.Icon, {
                            name: "chevron-left",
                            className: "size-4"
                        })
                    }), (0, t.jsx)(i.IconButton, {
                        label: "Next workflow preview",
                        "aria-controls": m,
                        disabled: x === e.tiles.length - 1,
                        onClick: () => f(1),
                        variant: "tertiary",
                        shape: "circle",
                        size: "lg",
                        iconSlot: (0, t.jsx)(l.Icon, {
                            name: "chevron-left",
                            className: "size-4 rotate-180"
                        })
                    })]
                })]
            })]
        })
    }
    let E = "0px 0px -15% 0px";
    e.s(["WorkflowSection", 0, function() {
        let [e, u] = (0, s.useState)(m.WORKFLOWS[0].id), [x, h] = (0, s.useState)(!1), [v, g] = (0, s.useState)(!1), w = (0, s.useId)(), y = (0, s.useId)(), b = (0, r.useReducedMotion)() ? ? !1, {
            ref: j,
            inView: N
        } = (0, o.useInView)(E), {
            ref: k,
            inView: _
        } = (0, o.useInView)(E), S = (0, s.useRef)(null), R = m.WORKFLOWS.find(t => t.id === e) ? ? m.WORKFLOWS[0], M = N || b, P = R.tiles.some(e => e.video);
        return (0, t.jsx)("section", {
            ref: j,
            id: "workflow",
            "aria-labelledby": w,
            className: "px-6 pt-22 pb-20 max-md:scroll-mt-6 md:pt-[clamp(96px,10.42vw,200px)] md:pb-[clamp(80px,7.5vw,144px)]",
            children: (0, t.jsxs)("div", {
                className: p.PAGE_GRID,
                children: [(0, t.jsxs)("div", {
                    className: "col-span-16 flex flex-col gap-4 text-center md:gap-6 lg:col-span-12 lg:col-start-3 2xl:col-span-8 2xl:col-start-5",
                    children: [(0, t.jsx)(d.DisplayLines, {
                        as: "h2",
                        id: w,
                        lines: ["Where", "creativity", "goes to work"],
                        linesMd: ["Where creativity", "goes to work"],
                        className: "font-display font-medium text-[clamp(1.75rem,8.85vw,46px)] text-primary-900 uppercase leading-[1.04] tracking-[0.01em] md:text-[clamp(46px,3.75vw,72px)]"
                    }), (0, t.jsx)(n.motion.p, {
                        initial: !1,
                        animate: {
                            opacity: +!!M,
                            y: 12 * !M
                        },
                        transition: {
                            duration: .5 * !b,
                            ease: c.EASE_OUT_STRONG
                        },
                        className: "mx-auto max-w-150 text-pretty font-normal text-copy-16 text-primary-600 leading-normal tracking-normal md:text-copy-20",
                        children: "Pika serves a variety of industry professionals who share the same high standards for creative work."
                    })]
                }), (0, t.jsx)("div", {
                    inert: !M,
                    "aria-hidden": !M,
                    className: "z-20 col-span-full row-start-2 mt-10 w-fit min-w-0 max-w-full self-start justify-self-center sm:max-w-[calc(100%_-_120px)]",
                    children: (0, t.jsx)(f, {
                        open: M,
                        reduceMotion: b,
                        value: e,
                        onValueChange: e => {
                            u(e), g(!0), requestAnimationFrame(() => {
                                let e = S.current,
                                    t = e ? .querySelector("[data-checked]");
                                if (e && t) {
                                    let i = e.getBoundingClientRect(),
                                        a = t.getBoundingClientRect();
                                    a.left < i.left + 8 ? e.scrollLeft += a.left - i.left - 8 : a.right > i.right - 8 && (e.scrollLeft += a.right - i.right + 8)
                                }
                            })
                        },
                        scrollerRef: S
                    })
                }), (0, t.jsx)("div", {
                    className: "col-span-full row-start-3 mt-10 min-w-0 lg:col-span-14 lg:col-start-2",
                    children: (0, t.jsx)("div", {
                        id: y,
                        ref: k,
                        inert: !_ && !b,
                        className: "grid min-w-0",
                        children: (0, t.jsx)(a.AnimatePresence, {
                            initial: !1,
                            children: (0, t.jsx)(z, {
                                workflow: R,
                                paused: x || !_,
                                reducedMotion: b,
                                entrance: !v,
                                revealed: _ || b
                            }, e)
                        })
                    })
                }), P && !b && (0, t.jsx)("div", {
                    className: "z-20 col-span-full row-start-3 mr-24 self-end justify-self-end rounded-full bg-invert-700 sm:row-start-2 sm:mt-11 sm:mr-0 sm:self-start lg:col-span-14 lg:col-start-2",
                    children: (0, t.jsx)(i.IconButton, {
                        label: x ? "Play workflow previews" : "Pause workflow previews",
                        "aria-controls": y,
                        onClick: () => h(e => !e),
                        variant: "tertiary",
                        shape: "circle",
                        size: "xl",
                        className: "size-10 shrink-0 sm:size-12",
                        iconSlot: x ? (0, t.jsx)(l.Icon, {
                            name: "play-solid",
                            className: "size-3"
                        }) : (0, t.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            "aria-hidden": "true",
                            className: "size-4",
                            children: (0, t.jsx)("path", {
                                d: "M8 5v14M16 5v14"
                            })
                        })
                    })
                })]
            })
        })
    }], 877054)
}]);