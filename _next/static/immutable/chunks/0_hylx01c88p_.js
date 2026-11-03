(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 17188, e => {
    "use strict";
    var t = e.i(866998),
        i = e.i(184667),
        a = e.i(808146);

    function n(e, t) {
        return "frames" === t && "pika-2-5" === e ? "pika-2-5-keyframe" : e
    }
    e.s(["appEntryId", 0, n, "appHref", 0, function(e, r, s, l) {
        let o = new URLSearchParams;
        l && "omni" !== l && "frames" !== l && o.set("mode", l), r && r !== a.DEFAULT_TAB && o.set("tab", r), s ? .length && (0, i.writeFacetParams)(o, s);
        let c = o.toString();
        return `${(0,t.appPath)(n(e,l))}${c?`?${c}`:""}`
    }, "catalogReturnQuery", 0, function(e) {
        let t = new URLSearchParams(e),
            n = new URLSearchParams,
            r = t.get("tab");
        return (0, a.isCatalogTab)(r) && n.set("tab", r), (0, i.writeFacetParams)(n, (0, i.parseFacets)(t)), n.toString()
    }])
}, 184667, 57294, 954641, 453071, e => {
    "use strict";
    var t = e.i(336506);
    e.i(752192);
    var i = e.i(709620);
    let a = {
        edit: {
            label: "Editing tools",
            category: "ai-video-toolkit"
        },
        kits: {
            label: "Kits",
            category: "templates"
        },
        models: {
            label: "Models",
            category: "models"
        }
    };

    function n(e, t) {
        return e.categories.includes(a[t].category)
    }
    var r = e.i(808146),
        s = e.i(285164);

    function l(e, t) {
        let i = new Map(e.map(e => [e.id, e])),
            a = e => {
                let t = i.get(e);
                return void 0 === t ? "not_found" : "coming_soon" === t.status ? "unavailable" : "render"
            },
            n = new Map;
        for (let e of t) {
            let t = (0, s.entryAppId)(e, a),
                r = null === t ? void 0 : i.get(t);
            void 0 === r || n.has(r.id) || n.set(r.id, r)
        }
        return [...n.values()]
    }
    e.s(["entryApps", 0, l], 57294);
    let o = ["edit", "kits", "models"];

    function c(e, t, i = null) {
        let a = e.filter(e => (0, r.matchesTab)(e, [], t)),
            s = r.NAV_CATEGORY_LABELS[t],
            u = i ? .media_tabs ? .find(e => e.tab === t);
        if (u) {
            let t = [...e, ...a];
            return {
                label: s,
                create: l(t, u.create_ids),
                rows: u.rows.flatMap(e => {
                    let i = l(t, e.app_ids);
                    return i.length ? [{
                        id: e.collection,
                        title: e.title,
                        apps: i
                    }] : []
                })
            }
        }
        return {
            label: s,
            create: a.filter(e => e.categories.includes("create-media")),
            rows: o.flatMap(e => {
                let t = a.filter(t => n(t, e)),
                    i = "edit" === e ? "Editing Tools" : `${s} ${"kits"===e?"Kits":"Models"}`;
                return t.length ? [{
                    id: e,
                    title: i,
                    apps: t
                }] : []
            })
        }
    }

    function u(e, t = null) {
        let i = new Map,
            a = new Set,
            s = new Map;
        for (let n of r.RAIL_CATEGORIES) {
            let r = c(e, n, t);
            for (let e of r.create) i.has(e.id) || i.set(e.id, e), a.add(e.id);
            for (let e of r.rows) {
                let t = s.get(e.id) ? ? new Set;
                for (let i of e.apps) t.add(i.id), a.add(i.id);
                s.set(e.id, t)
            }
        }
        return {
            create: [...i.values()],
            inCollection: (e, t) => a.has(e.id) ? s.get(t) ? .has(e.id) ? ? !1 : n(e, t)
        }
    }
    e.s(["selectAllAppsCatalog", 0, u, "selectMediaCatalog", 0, c], 954641);
    let d = [{
        id: "seedance",
        label: "Seedance",
        appIds: ["seedance-2", "seedance-2-5", "seedance-2-mini"]
    }, {
        id: "seedream",
        label: "Seedream",
        appIds: ["seedream", "seedream-5"]
    }, {
        id: "pika",
        label: "Pika 2.5",
        appIds: ["pika-2-5", "pika-2-5-keyframe"]
    }, {
        id: "veo",
        label: "Veo",
        appIds: ["veo-3-1"]
    }, {
        id: "nano-banana",
        label: "Nano Banana",
        appIds: ["nano-banana"]
    }, {
        id: "gpt-image",
        label: "GPT Image",
        appIds: ["gpt-image-2"]
    }, {
        id: "grok-imagine",
        label: "Grok Imagine",
        appIds: ["grok-imagine-1-5", "grok-imagine-image"]
    }, {
        id: "kling",
        label: "Kling",
        appIds: ["kling-4", "motion-transfer"]
    }, {
        id: "minimax",
        label: "MiniMax",
        appIds: ["minimax-h3", "minimax-music-3-0"]
    }, {
        id: "eleven",
        label: "Eleven",
        appIds: ["eleven-multilingual", "eleven-turbo"]
    }];
    e.s(["MODEL_FAMILIES", 0, d], 453071);
    let m = [{
        id: "pika",
        label: "Pika Labs",
        logo: null,
        appIds: ["create-audio", "create-video", "create-speech", "pika-2-5", "pika-2-5-keyframe", "pika-h3-flex", "pika-music", "pika-sfx", "pika-soundtrack", "pika-speech", "pikadditions", "pikaffects", "pikaperformance", "product-ad", "video-trim"]
    }, {
        id: "bytedance",
        label: "ByteDance",
        logo: "/app-icons/labs/bytedance.svg",
        appIds: ["character-creator", "color-grading", "create-image", "create-video", "edit-image", "headshot", "podcast-creator", "product-ad", "product-shot", "relight-media", "seedance-2", "seedance-2-5", "seedance-2-mini", "seedream", "seedream-5", "short-film"]
    }, {
        id: "google",
        label: "Google",
        logo: "/app-icons/labs/google.svg",
        appIds: ["character-creator", "create-audio", "create-image", "create-video", "edit-image", "google-omni", "nano-banana", "product-shot", "relight-media", "veo-3-1"]
    }, {
        id: "openai",
        label: "Open AI",
        logo: "/app-icons/labs/openai.svg",
        appIds: ["color-grading", "create-image", "edit-image", "gpt-image-2", "headshot", "product-ad", "product-shot", "short-film"]
    }, {
        id: "elevenlabs",
        label: "ElevenLabs",
        logo: "/app-icons/labs/elevenlabs.svg",
        appIds: ["create-audio", "create-sfx", "create-speech", "eleven-multilingual", "eleven-turbo", "short-film", "talking-head-studio"]
    }, {
        id: "minimax",
        label: "MiniMax",
        logo: "/app-icons/labs/minimax.svg",
        appIds: ["create-audio", "create-video", "create-speech", "minimax-h3", "minimax-music-3-0"]
    }, {
        id: "x-ai",
        label: "xAi",
        logo: "/app-icons/labs/xai.svg",
        appIds: ["create-image", "create-video", "edit-image", "grok-imagine-1-5", "grok-imagine-image"]
    }, {
        id: "kling",
        label: "Kling",
        logo: "/app-icons/labs/kling.svg",
        appIds: ["create-video", "motion-transfer", "product-ad", "short-film", "talking-head-studio"]
    }, {
        id: "sonilo",
        label: "Sonilo",
        logo: "/app-icons/labs/sonilo.svg",
        appIds: ["create-audio", "create-sfx", "short-film"]
    }, {
        id: "topaz",
        label: "Topaz Labs",
        logo: "/app-icons/labs/topaz.svg",
        appIds: ["edit-image", "upscale"]
    }, {
        id: "black-forest-labs",
        label: "Black Forest Labs",
        logo: "/app-icons/labs/black-forest-labs.svg",
        appIds: ["extend-video"]
    }, {
        id: "recraft",
        label: "Recraft",
        logo: "/app-icons/labs/recraft.svg",
        appIds: ["product-shot"]
    }];

    function p(e) {
        throw Error(`Unhandled catalog facet: ${JSON.stringify(e)}`)
    }

    function f(e) {
        return new Map(e.map(e => [e.id, new Set(e.appIds)]))
    }
    let h = new Map(m.map(e => [e.id, e])),
        v = f(m),
        g = new Map(d.map(e => [e.id, e])),
        x = f(d),
        y = Object.keys(i.EDIT_ACTIONS),
        b = new Set(y),
        w = new Set(t.APPS.flatMap(e => (e.edits ? ? []).map(e => e.action)));

    function k(e) {
        switch (e.kind) {
            case "lab":
                return `lab:${e.id}`;
            case "keyword":
                return `q:${e.text.trim().toLowerCase()}`;
            case "family":
                return `fam:${e.id}`;
            case "function":
                return `fn:${e.id}`;
            case "collection":
                return `collection:${e.id}`;
            default:
                return p(e)
        }
    }
    let j = {
            animate: "video-line",
            "edit-image": "pencil-line",
            "swap-subject": "arrow-right-left",
            "add-element": "image-plus",
            "lip-sync": "microphone-line",
            "apply-effect": "wand-sparkles"
        },
        M = "sliders-vertical";

    function C(e, t) {
        switch (t.kind) {
            case "lab":
                return v.get(t.id) ? .has(e.id) ? ? !1;
            case "keyword":
                return (0, r.matchesQuery)(e, t.text);
            case "family":
                return x.get(t.id) ? .has(e.id) ? ? !1;
            case "function":
                return e.edits ? .some(e => e.action === t.id) ? ? !1;
            case "collection":
                return n(e, t.id);
            default:
                return p(t)
        }
    }
    let I = ["lab", "q", "fam", "fn", "collection"];

    function E(e, t, i, a, n = null) {
        let s = a.filter(e => "collection" === e.kind);
        if ((0, r.isMediaHomeTab)(i) && s.length > 0) {
            let {
                rows: t
            } = c(e, i, n), r = s.map(e => t.find(t => t.id === e.id) ? .apps ? ? []);
            return r[0].filter(e => r.every(t => t.includes(e)) && a.every(t => "collection" === t.kind || C(e, t)))
        }
        let {
            inCollection: l
        } = u(e, n);
        return e.filter(e => (0, r.matchesTab)(e, t, i) && a.every(t => "collection" === t.kind ? l(e, t.id) : C(e, t)))
    }
    let A = [...m.map(e => ({
        facet: {
            kind: "lab",
            id: e.id
        },
        label: e.label
    })), ...d.map(e => ({
        facet: {
            kind: "family",
            id: e.id
        },
        label: e.label
    })), ...y.filter(e => w.has(e)).map(e => ({
        facet: {
            kind: "function",
            id: e
        },
        label: i.EDIT_ACTIONS[e].label
    }))];
    e.s(["facetKey", 0, k, "facetLabel", 0, function(e) {
        var t, n;
        switch (e.kind) {
            case "lab":
                return (t = e.id, h.get(t)) ? .label ? ? e.id;
            case "keyword":
                return e.text;
            case "family":
                return (n = e.id, g.get(n)) ? .label ? ? e.id;
            case "function":
                return i.EDIT_ACTIONS[e.id].label;
            case "collection":
                return a[e.id].label;
            default:
                return p(e)
        }
    }, "facetMedia", 0, function(e) {
        switch (e.kind) {
            case "lab":
                {
                    var t;
                    let i = (t = e.id, h.get(t)) ? .logo;
                    return i ? {
                        kind: "logo",
                        src: i
                    } : {
                        kind: "icon",
                        name: "brand-pika"
                    }
                }
            case "function":
                return {
                    kind: "icon",
                    name: j[e.id] ? ? M
                };
            case "family":
            case "keyword":
            case "collection":
                return {
                    kind: "icon",
                    name: M
                };
            default:
                return p(e)
        }
    }, "filterCatalog", 0, E, "parseFacets", 0, function(e) {
        let t = [],
            i = new Set,
            n = e => {
                let a = k(e);
                i.has(a) || (i.add(a), t.push(e))
            };
        for (let t of e.getAll("lab")) h.get(t) && n({
            kind: "lab",
            id: t
        });
        for (let t of e.getAll("q")) {
            let e = t.trim();
            e && n({
                kind: "keyword",
                text: e
            })
        }
        for (let t of e.getAll("fam")) g.get(t) && n({
            kind: "family",
            id: t
        });
        for (let t of e.getAll("fn")) b.has(t) && n({
            kind: "function",
            id: t
        });
        for (let t of e.getAll("collection")) Object.hasOwn(a, t) && n({
            kind: "collection",
            id: t
        });
        return t
    }, "suggestFacets", 0, function(e, i) {
        let a = e.trim().toLowerCase();
        if (!a) return [];
        let n = new Set(i.facets.map(k)),
            s = E(i.apps ? ? t.APPS, i.favorites, i.tab, i.facets, i.layout),
            l = A.map((e, t) => ({
                candidate: e,
                order: t,
                rank: (0, r.hitRank)(e.label, a)
            })).filter(e => e.rank >= 0 && !n.has(k(e.candidate.facet))).sort((e, t) => e.rank - t.rank || e.order - t.order),
            o = [];
        for (let {
                candidate: e
            } of l) {
            if (3 === o.length) break;
            let t = s.filter(t => C(t, e.facet)).length;
            0 !== t && o.push({
                facet: e.facet,
                label: e.label,
                count: t
            })
        }
        return o
    }, "writeFacetParams", 0, function(e, t) {
        for (let t of I) e.delete(t);
        for (let i of t) switch (i.kind) {
            case "lab":
                e.append("lab", i.id);
                break;
            case "keyword":
                e.append("q", i.text);
                break;
            case "family":
                e.append("fam", i.id);
                break;
            case "function":
                e.append("fn", i.id);
                break;
            case "collection":
                e.append("collection", i.id);
                break;
            default:
                p(i)
        }
    }], 184667)
}, 292985, e => {
    "use strict";
    var t = e.i(829824),
        i = e.i(136263),
        a = e.i(945956);

    function n(e, t) {
        return t ? `/discover/${e}?${t}` : `/discover/${e}`
    }
    e.s(["discoverDetailHref", 0, n, "useDiscoverDetailHref", 0, function() {
        let e = (0, t.useSearchParams)().toString();
        return (0, i.useCallback)(t => n(t, e), [e])
    }, "useDiscoverSiblings", 0, function(e) {
        let {
            items: t
        } = (0, a.useDiscoverFeed)((0, a.useCurrentDiscoverFeed)());
        return (0, i.useMemo)(() => t.some(t => t.id === e.id) ? t : [e], [t, e])
    }])
}, 485603, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(106510),
        n = e.i(618373);
    let r = ["var(--ds-grape)", "var(--ds-lilac)", "var(--ds-sakura)", "var(--ds-banana)"];
    e.s(["DiaTextReveal", 0, function({
        text: e,
        progress: s,
        reducedMotion: l = !1,
        colors: o = r,
        textColor: c = "var(--ds-primary-900)",
        className: u
    }) {
        let d = (0, n.useTransform)(s, e => (function(e, t, i) {
            let a = Math.max(0, Math.min(1, e)),
                n = -17 + 134 * (a < .5 ? 4 * a ** 3 : 1 - (-2 * a + 2) ** 3 / 2),
                s = n - 17,
                l = n + 17;
            if (s >= 100) return `linear-gradient(90deg, ${i}, ${i})`;
            let o = t.length > 0 ? t : r,
                c = [];
            return s > 0 && c.push(`${i} 0%`, `${i} ${s.toFixed(2)}%`), o.forEach((e, t) => {
                let i = 1 === o.length ? n : s + t / (o.length - 1) * 34;
                c.push(`${e} ${i.toFixed(2)}%`)
            }), l < 100 && c.push(`transparent ${l.toFixed(2)}%`, "transparent 100%"), `linear-gradient(90deg, ${c.join(", ")})`
        })(e, o, c));
        return l ? (0, t.jsx)("span", {
            className: u,
            style: {
                color: c
            },
            children: e
        }) : (0, t.jsx)(a.motion.span, {
            className: (0, i.cn)("bg-clip-text text-transparent motion-reduce:bg-none! motion-reduce:text-primary-900!", u),
            style: {
                backgroundImage: d,
                backgroundSize: "100% 100%",
                WebkitBackgroundClip: "text"
            },
            children: e
        })
    }])
}, 728069, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(407017),
        n = e.i(106510),
        r = e.i(496036),
        s = e.i(745786),
        l = e.i(618373),
        o = e.i(136263),
        c = e.i(926368);
    let u = {
            duration: .2,
            ease: "easeOut"
        },
        d = {
            type: "spring",
            stiffness: 260,
            damping: 6.9,
            mass: 1
        };
    e.s(["FaqRule", 0, function({
        delay: e,
        animate: m = !0,
        className: p
    }) {
        let f = (0, o.useRef)(null),
            h = (0, s.useReducedMotion)(),
            v = (0, r.useMotionValue)(.5),
            g = (0, r.useMotionValue)(100),
            x = (0, l.useTransform)([v, g], ([e, t]) => `M0,100 Q${1e3*e},${t} 1000,100`);
        return (0, o.useEffect)(() => {
            let e = f.current,
                t = e ? .closest("[data-rule-list]") ? ? e ? .parentElement;
            if (!e || !t) return;
            if (h || !m) {
                v.jump(.5), g.jump(100);
                return
            }
            if (!window.matchMedia("(pointer: fine)").matches) return;
            let i = !1,
                n = 0,
                r = () => {
                    i && (i = !1, n = 0, (0, a.animate)(v, .5, d), (0, a.animate)(g, 100, d))
                },
                s = t => {
                    let s = e.getBoundingClientRect(),
                        l = t.clientX - s.left,
                        o = t.clientY - s.top;
                    if ("touch" === t.pointerType || !s.width || l < 0 || l > s.width || Math.abs(o) > 10) return void r();
                    i || (i = !0, n = o < 0 ? 50 : -50);
                    let c = l / s.width,
                        d = 100 + 2 * o + n;
                    .004 > Math.abs(c - v.get()) && 1 > Math.abs(d - g.get()) || ((0, a.animate)(v, c, u), (0, a.animate)(g, d, u))
                };
            return t.addEventListener("pointermove", s, {
                passive: !0
            }), t.addEventListener("pointerleave", r), window.addEventListener("scroll", r, {
                passive: !0,
                capture: !0
            }), () => {
                t.removeEventListener("pointermove", s), t.removeEventListener("pointerleave", r), window.removeEventListener("scroll", r, !0), v.stop(), g.stop()
            }
        }, [h, m, v, g]), (0, t.jsx)(n.motion.div, {
            ref: f,
            "aria-hidden": "true",
            initial: !h && !!m && "hidden",
            whileInView: m ? "shown" : void 0,
            viewport: {
                once: !0,
                amount: .25
            },
            className: (0, i.cn)("pointer-events-none relative z-1 h-px", p),
            children: (0, t.jsx)(n.motion.svg, {
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
                transition: h ? {
                    duration: 0
                } : {
                    duration: 3,
                    delay: e,
                    ease: c.EASE_SMOOTH_OUT
                },
                style: {
                    transformOrigin: "0% 50%"
                },
                className: "motion-reduce:transform-none! absolute inset-x-0 -top-[99px] h-[200px] w-full overflow-visible",
                children: (0, t.jsx)(n.motion.path, {
                    d: x,
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 1,
                    vectorEffect: "non-scaling-stroke"
                })
            })
        })
    }])
}, 1687, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(874560),
        n = e.i(48665),
        r = e.i(136263);
    let s = 0,
        l = [];

    function o() {
        for (; s < 3 && l.length;) {
            let e = l.shift();
            e && (s++, e())
        }
    }
    let c = null;

    function u(e) {
        e.muted = !0, c === e && (c = null)
    }
    e.s(["HoverMuteVideo", 0, function({
        className: e,
        videoClassName: d,
        controlClassName: m,
        controlTabIndex: p,
        src: f,
        poster: h,
        priority: v = !1,
        paused: g = !1,
        playback: x = "auto",
        visibilityTargetRef: y,
        visibilityMargin: b,
        children: w,
        ...k
    }) {
        let j = (0, r.useRef)(null),
            M = (0, r.useRef)(null),
            C = (0, r.useRef)(!1),
            I = (0, r.useRef)(!1),
            E = (0, r.useRef)(g),
            A = (0, r.useRef)(null),
            [S, N] = (0, r.useState)(!1),
            [_, T] = (0, r.useState)(!!h);
        (0, r.useEffect)(() => {
            E.current = g;
            let e = M.current;
            e && (g ? (u(e), e.pause(), N(!1)) : A.current ? .(C.current))
        }, [g]), (0, r.useEffect)(() => {
            let e = y ? .current ? ? j.current,
                t = M.current;
            if (!e || !t) return;
            t.muted = !0;
            let i = !1,
                a = !1,
                n = !1,
                r = function() {
                    if ("u" < typeof navigator) return !1;
                    if (window.matchMedia ? .("(prefers-reduced-motion: reduce)").matches) return !0;
                    let e = navigator.connection;
                    return !!e && (!!e.saveData || "slow-2g" === e.effectiveType || "2g" === e.effectiveType)
                }(),
                u = "hover" === x && !!window.matchMedia ? .("(hover: none)").matches,
                d = () => "auto" === x || u && I.current,
                m = () => {
                    i && (i = !1, s = Math.max(0, s - 1), o())
                },
                p = () => {
                    T(!0), m()
                },
                h = () => {
                    "hover" === x && t.paused && (t.currentTime = .001)
                },
                g = e => {
                    if (C.current = e, e) {
                        if (!r && !E.current) {
                            if (a) {
                                d() && t.play().catch(() => {});
                                return
                            }
                            i || (i = !0, function(e, t = !1) {
                                if (t) {
                                    s++, e();
                                    return
                                }
                                l.push(e), o()
                            }(() => {
                                n || n || a ? m() : (a = !0, t.getAttribute("src") !== f && (t.setAttribute("src", f), t.load()), C.current && !E.current && d() && t.play().catch(() => {}))
                            }, v))
                        }
                    } else t.pause(), c === t && (t.muted = !0, c = null)
                };
            A.current = g, t.addEventListener("loadedmetadata", h), t.addEventListener("loadeddata", p), t.addEventListener("error", m);
            let w = window.setTimeout(m, 8e3);
            if ("u" < typeof IntersectionObserver) return I.current = u, g(!0), () => {
                n = !0, A.current = null, window.clearTimeout(w), t.removeEventListener("loadedmetadata", h), t.removeEventListener("loadeddata", p), t.removeEventListener("error", m), m()
            };
            let k = new IntersectionObserver(e => {
                for (let t of e) g(t.isIntersecting)
            }, {
                rootMargin: b ? ? (v ? "0px" : "100px 0px"),
                threshold: .01
            });
            k.observe(e);
            let S = u ? new IntersectionObserver(e => {
                for (let i of e) I.current = i.isIntersecting, i.isIntersecting ? g(!0) : t.pause()
            }, {
                threshold: .5
            }) : null;
            return S ? .observe(e), () => {
                n = !0, A.current = null, k.disconnect(), S ? .disconnect(), window.clearTimeout(w), t.removeEventListener("loadedmetadata", h), t.removeEventListener("loadeddata", p), t.removeEventListener("error", m), m(), c === t && (c = null)
            }
        }, [f, v, x, y, b]), (0, r.useEffect)(() => {
            let e = () => {
                let e = M.current;
                e && (document.hidden ? (c === e && (c = null), e.muted = !0, e.pause()) : C.current && A.current ? .(!0))
            };
            return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e)
        }, []);
        let R = e => {
            e.getAttribute("src") || (e.setAttribute("src", f), e.load())
        };
        return (0, t.jsxs)("div", {
            ref: j,
            className: (0, i.cn)("group/audio relative", e),
            onMouseEnter: () => {
                let e = M.current;
                e && !E.current && (R(e), e.play().catch(() => {}))
            },
            onMouseLeave: () => {
                let e = M.current;
                e && (u(e), N(!1), "hover" === x && e.pause())
            },
            children: [(0, t.jsx)("video", {
                ref: M,
                muted: !0,
                loop: !0,
                playsInline: !0,
                preload: "hover" === x ? "metadata" : "none",
                disableRemotePlayback: !0,
                poster: h,
                ...k,
                className: (0, i.cn)("h-full w-full object-cover transition-opacity duration-500", _ ? "opacity-100" : "opacity-0", d)
            }), w, (0, t.jsx)(a.IconButton, {
                label: S ? "Mute" : "Unmute",
                "aria-pressed": S,
                tabIndex: p,
                disabled: g,
                onClick: () => {
                    let e = M.current;
                    if (e && !E.current)
                        if (R(e), S) u(e), N(!1);
                        else {
                            c && c !== e && (c.muted = !0), c = e, e.muted = !1;
                            try {
                                e.volume = 1
                            } catch {}
                            let t = e.play();
                            t && "function" == typeof t.catch && t.catch(() => {}), N(!0)
                        }
                },
                variant: "tertiary",
                theme: "light",
                shape: "circle",
                size: "lg",
                iconSlot: S ? (0, t.jsx)(n.VolumeFullIcon, {}) : (0, t.jsx)(n.VolumeMutedIcon, {}),
                className: (0, i.cn)("absolute top-2 right-2 opacity-0 pointer-coarse:opacity-100 transition-[color,background-color,border-color,scale,opacity] duration-200 ease-out-strong focus-visible:opacity-100 group-hover/audio:opacity-100 motion-reduce:transition-none", m)
            })]
        })
    }])
}, 332568, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(136263);
    let n = {
            stiffness: 320,
            damping: 17
        },
        r = {
            stiffness: 400,
            damping: 34
        },
        s = {
            stiffness: 170,
            damping: 17.5
        },
        l = {
            stiffness: 260,
            damping: 26
        },
        o = {
            stiffness: 170,
            damping: 22
        };

    function c(e, t, i, a, n) {
        let r = Math.max(1, Math.ceil(240 * n)),
            s = n / r,
            l = e,
            o = t;
        for (; r-- > 0;) o += (-a.stiffness * (l - i) - a.damping * o) * s, l += o * s;
        return [l, o]
    }

    function u(e, t, i) {
        return .5 > Math.abs(e - i) && 5 > Math.abs(t)
    }

    function d(e) {
        return Math.min(1, Math.max(0, e))
    }

    function m({
        width: e,
        height: i,
        style: n,
        children: r
    }) {
        let s = `liquid-${(0,a.useId)().replace(/[^a-zA-Z0-9_-]/g,"")}`,
            l = Math.round((.5 - 5 / 12 * 18) * 100) / 100;
        return (0, t.jsxs)("svg", {
            "aria-hidden": "true",
            focusable: "false",
            className: "pointer-events-none absolute inset-0 size-full overflow-visible",
            style: n,
            children: [(0, t.jsx)("defs", {
                children: (0, t.jsxs)("filter", {
                    id: s,
                    filterUnits: "userSpaceOnUse",
                    x: -160,
                    y: -160,
                    width: e + 320,
                    height: i + 320,
                    colorInterpolationFilters: "sRGB",
                    children: [(0, t.jsx)("feGaussianBlur", { in: "SourceGraphic",
                        stdDeviation: 6,
                        result: "blur"
                    }), (0, t.jsx)("feColorMatrix", { in: "blur",
                        type: "matrix",
                        values: `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 ${l}`,
                        result: "goo"
                    }), (0, t.jsx)("feComposite", { in: "SourceGraphic",
                        in2: "goo",
                        operator: "atop",
                        result: "shape"
                    }), (0, t.jsx)("feFlood", {
                        style: {
                            floodColor: "var(--color-primary-100)"
                        },
                        result: "tint"
                    }), (0, t.jsx)("feComposite", { in: "tint",
                        in2: "shape",
                        operator: "in",
                        result: "tinted"
                    }), (0, t.jsxs)("feMerge", {
                        children: [(0, t.jsx)("feMergeNode", { in: "shape"
                        }), (0, t.jsx)("feMergeNode", { in: "tinted"
                        })]
                    })]
                })
            }), (0, t.jsx)("g", {
                filter: `url(#${s})`,
                style: {
                    fill: "var(--color-invert-700)"
                },
                children: r
            })]
        })
    }
    e.s(["LiquidDrop", 0, function({
        open: e,
        reduceMotion: p,
        className: f,
        children: h
    }) {
        let v = (0, a.useRef)(null),
            g = (0, a.useRef)(null),
            x = (0, a.useRef)(null),
            y = (0, a.useRef)(null),
            b = (0, a.useRef)(null),
            w = (0, a.useRef)(null),
            k = function(e) {
                let [t, i] = (0, a.useState)(null);
                return (0, a.useLayoutEffect)(() => {
                    let t = e.current;
                    if (!t) return;
                    let a = () => {
                        let e = {
                            width: t.offsetWidth,
                            height: t.offsetHeight
                        };
                        i(t => t && t.width === e.width && t.height === e.height ? t : e)
                    };
                    a();
                    let n = new ResizeObserver(a);
                    return n.observe(t), document.fonts ? .ready.then(a), () => n.disconnect()
                }, [e]), t
            }(g),
            [j, M] = (0, a.useState)(!1),
            [C, I] = (0, a.useState)(!1);
        return (0, a.useEffect)(() => {
            let t = v.current,
                i = g.current,
                a = x.current,
                m = y.current,
                f = b.current;
            if (!k || !t || !i || !a || !m || !f) return;
            let {
                width: h,
                height: j
            } = k, C = j + 48, E = h / 2, A = i.offsetLeft, S = t.offsetWidth, N = e ? 0 : C, _ = e ? h : j, T = (e, t, i, n, r) => {
                let s = E - t / 2;
                m.setAttribute("x", s.toFixed(1)), m.setAttribute("y", e.toFixed(1)), m.setAttribute("width", t.toFixed(1)), f.setAttribute("cx", E.toFixed(1)), f.setAttribute("cy", i.toFixed(1)), f.setAttribute("r", n.toFixed(1)), a.style.transform = `translateY(${e.toFixed(1)}px)`, a.style.clipPath = `inset(0 ${(S-(E+t/2)-A).toFixed(1)}px 0 ${(s+A).toFixed(1)}px round ${j/2}px)`, a.style.filter = r > .3 ? `blur(${r.toFixed(1)}px)` : ""
            }, R = w.current ? ? {
                y: C,
                vy: 0,
                w: j,
                vw: 0,
                tailY: C + j / 2,
                tailVy: 0,
                tailR: 0,
                env: 0,
                t: 0
            };
            if (w.current = R, R.t = 0, p) {
                R.y = N, R.w = _, R.vy = 0, R.vw = 0, R.tailR = 0, T(N, _, N + j / 2, 0, 0), M(e), I(e);
                return
            }
            e ? (T(R.y, Math.max(j, R.w), R.tailY, R.tailR, 0), M(!0), I(!0)) : I(!1);
            let V = e ? n : r,
                L = e ? s : l,
                P = performance.now(),
                H = 0,
                O = () => {
                    let t = performance.now(),
                        i = Math.min(.05, Math.max(.001, (t - P) / 1e3));
                    P = t, R.t += i;
                    let a = !e && R.t < .08 ? R.y : N,
                        n = e && R.t < .12 ? j : _;
                    [R.y, R.vy] = c(R.y, R.vy, a, V, i), [R.w, R.vw] = c(R.w, R.vw, n, L, i);
                    let r = R.y + j / 2;
                    [R.tailY, R.tailVy] = c(R.tailY, R.tailVy, r, o, i);
                    let s = j / 2,
                        l = s + +s,
                        m = R.tailY - r;
                    Math.abs(m) > l && (R.tailY = r + Math.sign(m) * l);
                    let p = Math.abs(R.vy),
                        f = d((p - 20) / 120),
                        h = !e && R.y > C - j ? 30 : 10;
                    R.tailR += (.46 * s * f - R.tailR) * Math.min(1, i * h);
                    let v = d((p + Math.abs(R.vw)) / 900);
                    if (R.env = Math.max(v, R.env - 3.2 * i), R.t > .12 && u(R.y, R.vy, N) && u(R.w, R.vw, _) && R.tailR < .3) {
                        R.y = N, R.w = _, R.vy = 0, R.vw = 0, R.tailY = N + j / 2, R.tailR = 0, R.env = 0, T(N, _, R.tailY, 0, 0), e || M(!1);
                        return
                    }
                    T(R.y, Math.max(j, R.w), R.tailY, R.tailR < .3 ? 0 : R.tailR, R.env * R.env * 5), H = requestAnimationFrame(O)
                };
            return H = requestAnimationFrame(O), () => cancelAnimationFrame(H)
        }, [e, k, p]), (0, t.jsxs)("div", {
            ref: v,
            "data-open": e,
            className: (0, i.cn)("relative isolate", f),
            children: [(0, t.jsx)("div", {
                ref: g,
                className: "absolute inset-1 -z-10",
                children: k && (0, t.jsxs)(m, {
                    width: k.width,
                    height: k.height,
                    style: {
                        opacity: +!!j,
                        transition: "opacity 150ms ease-out"
                    },
                    children: [(0, t.jsx)("rect", {
                        ref: y,
                        height: k.height,
                        rx: k.height / 2
                    }), (0, t.jsx)("circle", {
                        ref: b,
                        r: 0
                    })]
                })
            }), (0, t.jsx)("div", {
                ref: x,
                className: "relative",
                style: {
                    opacity: +!!C,
                    transition: "opacity 150ms ease-out"
                },
                children: h
            })]
        })
    }], 332568)
}, 64132, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(106510),
        n = e.i(745786),
        r = e.i(888978),
        s = e.i(618373),
        l = e.i(136263);
    let o = {
        opacity: 1,
        y: 0
    };
    e.s(["MediaReveal", 0, function({
        children: e,
        className: c,
        contentClassName: u,
        trigger: d = "view",
        delay: m = 0,
        scale: p = !0
    }) {
        let f = (0, l.useRef)(null),
            h = (0, n.useReducedMotion)(),
            {
                scrollYProgress: v
            } = (0, r.useScroll)({
                target: f,
                offset: ["start end", "end start"]
            }),
            g = (0, s.useTransform)(v, [0, .4], [.9, 1]);
        return (0, t.jsx)("div", {
            ref: f,
            className: c,
            children: (0, t.jsx)(a.motion.div, {
                initial: !h && {
                    opacity: 0,
                    y: 40
                },
                animate: "load" === d ? o : void 0,
                whileInView: "view" === d ? o : void 0,
                viewport: {
                    once: !0,
                    amount: "some"
                },
                transition: h ? {
                    duration: 0
                } : {
                    duration: .8,
                    delay: m,
                    ease: "easeOut"
                },
                style: {
                    scale: h || !p ? 1 : g
                },
                className: (0, i.cn)("motion-reduce:transform-none! motion-reduce:opacity-100!", u),
                children: e
            })
        })
    }])
}, 465938, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356);
    let a = {
            dark: "bg-invert-200",
            light: "bg-black/5"
        },
        n = {
            sm: "-inset-x-3 -inset-y-5 rounded-[24px]",
            md: "-inset-x-4 -inset-y-5 rounded-[28px]",
            lg: "-inset-5 rounded-[32px]"
        };
    e.s(["CoverPlate", 0, function({
        surface: e,
        bleed: r,
        className: s
    }) {
        return (0, t.jsx)("div", {
            "aria-hidden": "true",
            className: (0, i.cn)("absolute -z-10 scale-90 opacity-0 transition-[opacity,scale] duration-300 ease-out-strong group-hover:scale-100 group-hover:opacity-100 motion-reduce:transition-none", a[e], n[r], s)
        })
    }])
}, 425490, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(176570),
        n = e.i(378833),
        r = e.i(407017),
        s = e.i(764350),
        l = e.i(515745),
        o = e.i(106510),
        c = e.i(496036),
        u = e.i(745786),
        d = e.i(888978),
        m = e.i(451035),
        p = e.i(618373),
        f = e.i(136263),
        h = e.i(392739),
        v = e.i(384214),
        g = e.i(926368),
        x = e.i(437102),
        y = e.i(485603),
        b = e.i(718190);

    function w({
        className: e
    }) {
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 296 56",
            fill: "white",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-label": "Pika API Club",
            className: (0, i.cn)("h-14 w-auto", e),
            children: [(0, t.jsx)("path", {
                d: "M157.278 6.09863C175.301 6.09863 183.333 11.6841 183.333 24.2061V45.6191C183.333 51.3996 183.694 55.2264 183.694 55.2627H175.709C175.709 55.2627 175.484 53.1586 175.709 49.79C173.205 53.4895 164.475 55.9746 153.982 55.9746H153.978V55.9785C146.185 55.9785 139.978 54.8901 136.499 52.918C132.607 50.7146 130.713 47.3011 130.713 42.4863C130.713 30.209 143.851 28.604 165.615 25.9473C168.517 25.5937 171.49 25.2309 174.622 24.8184C174.622 17.0067 170.083 14.2412 157.273 14.2412C146.673 14.2413 141.946 17.2108 141.946 23.8662H133.095C133.095 12.7405 142.134 6.09867 157.278 6.09863ZM31.5312 0.000976562C52.7703 0.00111914 55.0635 12.451 55.0635 17.8008C55.0634 23.1508 52.7698 35.6044 31.5264 35.6045H8.78223V55.2715H0V0.000976562H31.5312ZM70.8164 55.2666H62.0342V12.8447H70.8164V55.2666ZM87.0957 29.3613L117.398 6.44336H129.561L97.7432 30.041L130.418 55.2666H117.68L87.0859 31.9404V55.2666H78.3047V0.000976562H87.0957V29.3613ZM174.612 32.0723C161.487 33.5047 152.247 34.7062 146.748 36.2656C141.647 37.7119 139.564 39.494 139.564 42.4092C139.564 48.3937 147.549 49.2871 152.304 49.2871C160.073 49.2871 165.315 48.3934 168.808 46.4756C172.713 44.3312 174.612 40.75 174.612 35.5273V32.0723ZM8.78223 27.3984H29.9463C40.9455 27.3984 45.6385 24.5286 45.6387 17.8008C45.6387 11.0728 40.9457 8.20218 29.9463 8.20215H8.78223V27.3984ZM70.8164 8.96387H62.0342V0.000976562H70.8164V8.96387Z"
            }), (0, t.jsx)("path", {
                d: "M291.402 0H213.44C211.047 0 209.108 1.87555 209.108 4.18917V51.0951C209.108 53.4087 211.047 55.2843 213.44 55.2843H291.402C293.795 55.2843 295.734 53.4087 295.734 51.0951V4.18917C295.734 1.87555 293.795 0 291.402 0Z"
            }), (0, t.jsx)("path", {
                d: "M255.928 41.9556C255.928 45.7183 258.329 47.3413 261.737 47.3413C265.146 47.3412 267.574 45.7951 267.574 41.978V30.7163H270.186V42.3901C270.186 46.7198 267.199 49.5806 261.657 49.5806C256.115 49.5806 253.312 46.6924 253.312 42.4126L253.316 42.4175V30.7163H255.928V41.9556ZM225.109 30.272C229.803 30.272 233.001 32.7699 234.145 36.5102L231.664 37.1811C230.919 34.3205 228.518 32.5163 225.054 32.5161C220.736 32.5161 217.697 35.3765 217.697 39.9145C217.697 44.4528 220.684 47.3364 225.054 47.3364C228.57 47.3363 230.947 45.4276 231.692 42.644L234.196 43.2876C233.052 47.0505 229.826 49.5765 225.054 49.5767C219.372 49.5767 215.268 46.0193 215.018 40.5005L215.006 39.9643C215.006 34.1116 219.193 30.272 225.109 30.272ZM240.221 46.8472H251.042V49.1411H237.604V30.7114H240.221V46.8472ZM282.958 30.7114C287.492 30.7115 289.381 32.7469 289.381 35.272C289.381 37.3847 288.05 38.6995 286.582 39.2163C288.317 39.7558 289.995 41.1253 289.995 43.9858C289.995 47.1549 287.89 49.141 283.174 49.1411H273.815V30.7114H282.958ZM276.437 47.0054H283.042C286.132 47.0054 287.389 45.7948 287.389 43.7319C287.389 41.9005 286.375 40.4595 283.019 40.4595H276.437V47.0054ZM276.427 38.396H282.958C285.597 38.396 286.821 37.3898 286.821 35.6128C286.821 33.8356 285.621 32.8287 282.799 32.8286H276.427V38.396ZM245.51 6.14306C249.589 6.14317 252.734 7.56236 252.734 11.6333C252.734 15.7046 249.377 17.4097 245.298 17.4097H239.325V24.5776H236.714V6.14306H245.51ZM234.037 24.5727H231.21L228.917 19.2632H219.694L217.401 24.5727H214.654L222.784 6.14306H225.799L234.037 24.5727ZM258.395 24.5727H255.782V6.14306H258.395V24.5727ZM220.6 17.1235H227.988L224.308 8.61865H224.279L220.6 17.1235ZM239.325 15.2427H245.51C248.44 15.2426 250.118 14.1313 250.118 11.7104C250.118 9.28964 248.571 8.35991 245.669 8.35986H239.325V15.2427Z",
                fill: "#111111"
            })]
        })
    }
    var k = e.i(824840),
        j = e.i(874560),
        M = e.i(919698),
        C = e.i(84694);

    function I({
        reducedMotion: e,
        frameStyle: i,
        mediaStyle: a,
        gradientStyle: n,
        filmStyle: r,
        toggleStyle: s,
        showFilmButton: l = !0
    }) {
        let c = (0, f.useRef)(null),
            u = (0, f.useRef)(!1),
            [d, m] = (0, f.useState)(!1),
            [p, v] = (0, f.useState)(null),
            [g, x] = (0, f.useState)(!1),
            y = C.API_CLUB_VIDEO,
            b = C.API_CLUB_POSTER;
        return (0, f.useEffect)(() => {
            let t, i = c.current;
            if (!i || "u" < typeof IntersectionObserver) return;
            i.muted = !0, i.defaultMuted = !0;
            let a = p ? ? (!e && (t = navigator.connection, !t ? .saveData && t ? .effectiveType !== "slow-2g" && t ? .effectiveType !== "2g")),
                n = !1,
                r = () => {
                    u.current = n && !document.hidden && !g && a, u.current ? i.play().then(() => {
                        u.current || i.pause()
                    }).catch(() => {}) : i.pause()
                },
                s = new IntersectionObserver(e => {
                    n = e.some(e => e.isIntersecting), r()
                }, {
                    threshold: .15
                });
            return s.observe(i), i.addEventListener("canplay", r), document.addEventListener("visibilitychange", r), () => {
                u.current = !1, s.disconnect(), i.removeEventListener("canplay", r), document.removeEventListener("visibilitychange", r), i.pause()
            }
        }, [g, p, e]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsxs)(o.motion.div, {
                style: { ...i,
                    backgroundImage: `url(${b})`
                },
                className: "motion-reduce:visible! absolute inset-0 overflow-hidden rounded-[8px] bg-center bg-cover bg-primary-100 motion-safe:rounded-[calc(var(--p,1)*8px)] motion-reduce:opacity-100! motion-reduce:[clip-path:none]!",
                children: [(0, t.jsx)(o.motion.video, {
                    ref: c,
                    src: y,
                    poster: b,
                    loop: !0,
                    muted: !0,
                    playsInline: !0,
                    preload: "metadata",
                    "aria-hidden": !0,
                    onPlay: () => m(!0),
                    onPause: () => m(!1),
                    onEmptied: () => m(!1),
                    style: a,
                    className: "motion-reduce:transform-none! pointer-events-none absolute inset-x-0 top-0 h-[calc(60%+40lvh)] w-full object-cover"
                }), (0, t.jsxs)(o.motion.div, {
                    "aria-hidden": !0,
                    style: n,
                    className: "pointer-events-none absolute inset-0 motion-reduce:opacity-100!",
                    children: [(0, t.jsx)("div", {
                        className: "absolute inset-x-0 top-0 h-[calc(2*var(--inset)+24px)] bg-linear-to-b from-white/80 via-70% via-white/50 to-transparent md:h-[max(40%,calc(2*var(--inset)+168px))]"
                    }), (0, t.jsx)("div", {
                        className: "absolute inset-0 bg-linear-to-t from-black/40 to-30% to-transparent"
                    })]
                })]
            }), (0, t.jsxs)("div", {
                className: `absolute inset-x-(--inset) bottom-(--inset) z-10 flex items-center ${l?"justify-between":"justify-start"}`,
                children: [(0, t.jsx)(o.motion.div, {
                    style: r,
                    className: "motion-reduce:visible! motion-reduce:transform-none! motion-reduce:opacity-100!",
                    children: l ? (0, t.jsxs)(k.Dialog.Root, {
                        open: g,
                        onOpenChange: x,
                        children: [(0, t.jsxs)(k.Dialog.Trigger, {
                            className: "inline-flex h-11 cursor-pointer items-center gap-2.5 rounded-full border border-white/25 bg-black/20 px-5 font-medium text-link-16 text-white uppercase backdrop-blur-md transition-colors hover:bg-black/40 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4",
                            children: [(0, t.jsx)(h.Icon, {
                                name: "play-solid",
                                className: "size-3"
                            }), "Watch the film"]
                        }), (0, t.jsxs)(k.Dialog.Portal, {
                            children: [(0, t.jsx)(k.Dialog.Backdrop, {
                                className: "fixed inset-0 z-50 bg-black/80 transition-opacity duration-300 ease-out-strong data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
                            }), (0, t.jsx)(k.Dialog.Viewport, {
                                className: "fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4",
                                children: (0, t.jsx)(k.Dialog.Popup, {
                                    "aria-label": "Pika API Club film",
                                    className: "w-full max-w-5xl outline-hidden transition-[opacity,translate,scale] duration-300 ease-out-strong data-ending-style:translate-y-3 data-starting-style:translate-y-3 data-ending-style:scale-96 data-starting-style:scale-96 data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
                                    children: g && (0, t.jsx)(M.VideoPlayer, {
                                        src: C.API_CLUB_VIDEO,
                                        poster: C.API_CLUB_POSTER,
                                        label: "Pika API Club film",
                                        autoPlay: !0,
                                        className: "aspect-video max-h-[calc(100svh-8rem)] w-full rounded-lg"
                                    })
                                })
                            })]
                        })]
                    }) : null
                }), (0, t.jsx)(o.motion.div, {
                    style: s,
                    className: "motion-reduce:visible! motion-reduce:transform-none! motion-reduce:opacity-100!",
                    children: (0, t.jsx)(j.IconButton, {
                        label: d ? "Pause background video" : "Play background video",
                        onClick: () => v(!d),
                        variant: "tertiary",
                        theme: "light",
                        shape: "circle",
                        size: "lg",
                        iconSlot: d ? (0, t.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            "aria-hidden": "true",
                            className: "size-4",
                            children: (0, t.jsx)("path", {
                                d: "M8 5v14M16 5v14"
                            })
                        }) : (0, t.jsx)(h.Icon, {
                            name: "play-solid",
                            className: "size-3"
                        }),
                        className: "size-11 border border-white/25 bg-black/20 backdrop-blur-md hover:bg-black/40"
                    })
                })]
            })]
        })
    }
    let E = (0, i.cn)("[--rest-w:min(100cqw_-_24px,2000px)] md:[--rest-w:min(100cqw_-_48px,2000px)]", "[--rest-h:min(var(--rest-w)_*_5_/_4,max(200px,100svh_-_340px))] md:[--rest-h:min(var(--rest-w)_*_1056_/_1872,100svh_-_128px)]", "[--rest-top:64px] md:[--rest-top:calc((100svh_-_var(--rest-h))_/_2)]", "h-[240svh] motion-reduce:h-auto"),
        A = (0, i.cn)("[--lift:calc((1_-_var(--p))_*_var(--rest-top))] motion-reduce:[--lift:0px]", "pt-[calc(var(--p)_*_var(--rest-top))] motion-reduce:max-w-500 motion-reduce:pt-0"),
        S = (0, i.cn)("relative mx-auto h-[calc(100svh_-_var(--p)_*_(100svh_-_var(--rest-h)))] w-[calc(100cqw_-_var(--p)_*_(100cqw_-_var(--rest-w)))]", "motion-reduce:-mx-3 motion-reduce:aspect-4/5 motion-reduce:h-auto motion-reduce:max-h-[max(200px,calc(100svh-340px))] motion-reduce:w-[calc(100%+24px)]", "md:motion-reduce:mx-0 md:motion-reduce:aspect-[1872/1056] md:motion-reduce:max-h-[calc(100svh-128px)] md:motion-reduce:w-full"),
        N = (0, i.cn)("px-6 motion-reduce:px-0 md:px-0", "md:top-[calc(var(--inset)_+_var(--rest-top))] md:right-[calc(var(--inset)_+_var(--p)_*_(100cqw_-_var(--rest-w))_/_2)] md:motion-reduce:top-(--inset) md:motion-reduce:right-(--inset)");
    e.s(["ApiClubSection", 0, function({
        variant: e = "landing"
    }) {
        let k = "enterprise" === e,
            j = !k,
            M = (0, v.useBreakpoint)("2xl"),
            C = (0, f.useId)(),
            _ = (0, f.useRef)(null),
            T = (0, f.useRef)(null),
            R = (0, u.useReducedMotion)() ? ? !1,
            V = (0, b.useSeenOnce)(T, "0px 0px -20% 0px"),
            L = (0, c.useMotionValue)(0),
            P = (0, p.useTransform)(L, [.12, .66], [0, 1]),
            H = (0, p.useTransform)(L, [0, .17], [0, 1]),
            O = (0, p.useTransform)(L, [0, .22], [20, 0], {
                ease: (0, s.cubicBezier)(...g.EASE_SMOOTH_OUT)
            }),
            $ = (0, p.useTransform)(H, e => 0 === e ? "hidden" : "visible"),
            F = (0, p.useTransform)(L, [.05, .17], [0, 1]),
            z = (0, p.useTransform)(L, [.12, .82], [0, 1], {
                ease: (0, s.cubicBezier)(.4, 0, .2, 1)
            }),
            B = (0, p.useTransform)(z, e => {
                if (1 === e) return "none";
                let t = 1 - e;
                return `inset(${52*t}% ${26*t}% ${7*t}% ${26*t}% round 8px)`
            }),
            D = (0, p.useTransform)(z, [0, 1], [1.08, 1]),
            G = (0, c.useMotionValue)(0),
            U = (0, p.useTransform)(G, e => -.4 * e),
            Z = (0, p.useTransform)(F, e => 0 === e ? "hidden" : "visible"),
            q = (0, p.useTransform)(L, [.29, .52], [0, 1]),
            Y = (0, p.useTransform)(L, [.64, .82], [0, 1]),
            {
                scrollYProgress: W
            } = (0, d.useScroll)({
                target: _,
                offset: ["start start", "end end"]
            }),
            K = (0, m.useSpring)(W, g.SCRUB_SPRING),
            J = (0, p.useTransform)(K, [.2, .85], [0, 1], {
                ease: l.easeInOut
            }),
            {
                scrollYProgress: Q
            } = (0, d.useScroll)({
                target: _,
                offset: j ? ["start end", "start start"] : ["start end", "end end"]
            }),
            X = (0, m.useSpring)(Q, g.SCRUB_SPRING),
            ee = (0, p.useTransform)(X, [.4, .85], [48, 0]),
            et = (0, p.useTransform)(X, [.4, .85], [0, 1]),
            ei = (0, p.useTransform)(() => et.get() * Y.get()),
            ea = (0, p.useTransform)(ei, e => 0 === e ? "hidden" : "visible"),
            en = (0, p.useTransform)(X, [.5, .95], [48, 0]),
            er = (0, p.useTransform)(X, [.5, .95], [0, 1]),
            es = (0, p.useTransform)(() => er.get() * Y.get()),
            el = (0, p.useTransform)(es, e => 0 === e ? "hidden" : "visible"),
            eo = R ? {
                opacity: 1,
                y: 0,
                visibility: "visible"
            } : {
                opacity: H,
                y: O,
                visibility: $
            },
            ec = R || j ? {
                opacity: 1,
                clipPath: "none",
                visibility: "visible"
            } : {
                opacity: F,
                clipPath: B,
                visibility: Z
            },
            eu = j ? {
                "--p": J
            } : void 0;
        return (0, f.useEffect)(() => {
            if (R) return void L.set(1);
            if (!V || L.get() >= 1) return;
            let e = (0, r.animate)(L, 1, {
                duration: 2.2,
                ease: "linear"
            });
            return () => e.stop()
        }, [V, R, L]), (0, f.useLayoutEffect)(() => {
            let e = T.current;
            if (!e) return;
            let t = () => {
                G.set(e.getBoundingClientRect().top)
            };
            t();
            let i = new ResizeObserver(t);
            return i.observe(e), window.addEventListener("scroll", t, {
                passive: !0
            }), window.addEventListener("resize", t), () => {
                i.disconnect(), window.removeEventListener("scroll", t), window.removeEventListener("resize", t)
            }
        }, [G]), (0, t.jsx)("section", {
            id: "club",
            "aria-labelledby": C,
            className: (0, i.cn)("relative py-6 [--inset:clamp(24px,3.33vw,64px)]", j ? "@container px-0 motion-reduce:px-6" : "px-6"),
            children: (0, t.jsx)("div", {
                ref: _,
                className: (0, i.cn)(j && E),
                children: (0, t.jsx)("div", {
                    className: (0, i.cn)(j && "sticky top-0 motion-reduce:static"),
                    children: (0, t.jsxs)(o.motion.div, {
                        style: eu,
                        className: (0, i.cn)("relative isolate mx-auto w-full", j ? A : "max-w-500"),
                        children: [(0, t.jsxs)("div", {
                            ref: T,
                            className: j ? S : "relative -mx-3 aspect-4/5 max-h-[max(200px,calc(100svh-340px))] w-[calc(100%+24px)] md:mx-0 md:aspect-[1872/1056] md:max-h-[calc(100svh-128px)] md:w-full",
                            children: [(0, t.jsx)(I, {
                                reducedMotion: R,
                                frameStyle: ec,
                                mediaStyle: {
                                    scale: R || j ? 1 : D,
                                    y: R ? 0 : U
                                },
                                gradientStyle: {
                                    opacity: R ? 1 : q
                                },
                                filmStyle: R ? {
                                    opacity: 1,
                                    y: 0,
                                    visibility: "visible"
                                } : {
                                    opacity: ei,
                                    y: ee,
                                    visibility: ea
                                },
                                toggleStyle: R ? {
                                    opacity: 1,
                                    y: 0,
                                    visibility: "visible"
                                } : {
                                    opacity: es,
                                    y: en,
                                    visibility: el
                                },
                                showFilmButton: !k
                            }), (0, t.jsx)(o.motion.div, {
                                style: eo,
                                className: "motion-reduce:visible! motion-reduce:transform-none! absolute top-[calc(var(--inset)+var(--lift,0px))] left-(--inset) z-10 mix-blend-difference motion-reduce:opacity-100!",
                                children: (0, t.jsx)(w, {
                                    className: "h-12 2xl:h-14"
                                })
                            })]
                        }), (0, t.jsxs)(o.motion.div, {
                            style: eo,
                            className: (0, i.cn)("motion-reduce:visible! motion-reduce:transform-none! relative z-10 mt-6 flex flex-col items-start gap-6 motion-reduce:opacity-100! md:absolute md:mt-0 md:w-1/2 md:gap-9 xl:w-[505px]", j ? N : "md:top-(--inset) md:right-(--inset)"),
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, t.jsx)("h2", {
                                    id: C,
                                    className: (0, i.cn)("font-medium text-copy-16 text-primary-900 md:text-copy-20", k && "sr-only"),
                                    children: k ? "Pika API Club" : (0, t.jsx)(y.DiaTextReveal, {
                                        text: "For Creative Developers",
                                        progress: P,
                                        reducedMotion: R
                                    })
                                }), (0, t.jsx)("p", {
                                    className: "font-normal text-copy-16 text-primary-600 md:text-copy-20 md:text-primary-900",
                                    children: k ? "For larger teams and ambitious projects, we offer custom plans designed for creating and optimizing generative media at scale." : "A membership program that provides access to top gen media models at previously impossible prices, all through one API"
                                })]
                            }), (0, t.jsxs)(x.TransitionLink, {
                                href: "https://dev.pika.art",
                                target: "_blank",
                                rel: "noopener",
                                className: (0, i.cn)((0, n.buttonVariants)({
                                    variant: "primary",
                                    size: M ? "lg" : "md",
                                    shape: "pill"
                                }), "gap-2 text-link-16 uppercase max-md:w-full", M ? "px-8 pl-10" : "px-6 pl-8"),
                                children: [(0, t.jsx)(a.Beam, {}), "Join the Club", (0, t.jsx)(h.Icon, {
                                    name: "arrow-top-right"
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    }], 425490)
}, 874749, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(106510),
        n = e.i(888978),
        r = e.i(451035),
        s = e.i(618373),
        l = e.i(136263),
        o = e.i(926368);
    let c = "-my-[0.12em] block overflow-hidden py-[0.12em]";

    function u(e) {
        return "string" != typeof e
    }

    function d({
        style: e,
        className: u,
        children: m
    }) {
        let p = (0, l.useRef)(null),
            {
                scrollYProgress: f
            } = (0, n.useScroll)({
                target: p,
                offset: ["start 0.95", "start 0.72"]
            }),
            h = (0, r.useSpring)(f, o.SCRUB_SPRING),
            v = (0, s.useTransform)(h, [0, 1], ["100%", "0%"]);
        return (0, t.jsx)("span", {
            ref: p,
            style: e,
            className: (0, i.cn)(c, u),
            children: (0, t.jsx)(a.motion.span, {
                style: {
                    y: v
                },
                className: "motion-reduce:transform-none! block",
                children: m
            })
        })
    }

    function m({
        lines: e,
        trigger: a,
        delay: n,
        className: r,
        decorative: s
    }) {
        return (0, t.jsx)("span", {
            "aria-hidden": !!s || void 0,
            className: (0, i.cn)("flex flex-col", r),
            children: e.map((r, s) => {
                var l;
                let o, m = u(r) ? r.key : r,
                    p = u(r) ? r.node : `${r} `,
                    f = u(r) ? r.className : void 0,
                    h = (l = e.length, {
                        translate: `0 calc(var(--display-splay, 0px) * ${s-(l-1)/2})`
                    });
                return "scroll" === a ? (0, t.jsx)(d, {
                    style: h,
                    className: f,
                    children: p
                }, m) : (0, t.jsx)("span", {
                    style: h,
                    className: (0, i.cn)(c, f),
                    children: (0, t.jsx)("span", {
                        className: "block animate-display-line",
                        style: {
                            animationDelay: (o = 140 * s, "number" == typeof n ? `${n+o}ms` : `calc(${n} + ${o}ms)`)
                        },
                        children: p
                    })
                }, m)
            })
        })
    }
    e.s(["DisplayLines", 0, function({
        lines: e,
        linesMd: i,
        label: a,
        as: n = "h2",
        trigger: r = "scroll",
        delay: s = 0,
        id: l,
        style: o,
        className: c
    }) {
        return i ? (0, t.jsxs)(n, {
            id: l,
            style: o,
            "aria-label": a ? ? i.filter(e => "string" == typeof e).join(" "),
            className: c,
            children: [(0, t.jsx)(m, {
                lines: e,
                trigger: r,
                delay: s,
                className: "md:hidden",
                decorative: !0
            }), (0, t.jsx)(m, {
                lines: i,
                trigger: r,
                delay: s,
                className: "max-md:hidden",
                decorative: !0
            })]
        }) : (0, t.jsx)(n, {
            id: l,
            style: o,
            className: c,
            children: (0, t.jsx)(m, {
                lines: e,
                trigger: r,
                delay: s
            })
        })
    }])
}, 156162, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(106510),
        n = e.i(496036),
        r = e.i(888978),
        s = e.i(618373),
        l = e.i(136263),
        o = e.i(619266);

    function c(e) {
        let {
            scrollY: t
        } = (0, r.useScroll)(), i = (0, n.useMotionValue)(1);
        (0, l.useLayoutEffect)(() => {
            let t = e.current;
            if (!t) return;
            let a = () => i.set(t.offsetHeight || 1);
            a();
            let n = new ResizeObserver(a);
            return n.observe(t), () => n.disconnect()
        }, [e, i]);
        let a = (0, s.useTransform)(() => {
                let a = e.current && Number.parseFloat(getComputedStyle(e.current).getPropertyValue("--hero-fade-delay")) || 0;
                return t.get() / i.get() - a
            }),
            o = (0, s.useTransform)(a, [.05, .6], [1, 0]),
            c = (0, s.useTransform)(a, [.05, .6], ["blur(0px)", "blur(12px)"]),
            u = (0, s.useTransform)(o, e => 0 === e ? "hidden" : "visible");
        return {
            opacity: o,
            filter: c,
            visibility: u
        }
    }
    e.s(["HeroContent", 0, function({
        children: e
    }) {
        let n = (0, l.useRef)(null),
            {
                opacity: r,
                filter: s,
                visibility: u
            } = c(n);
        return (0, t.jsx)("div", {
            ref: n,
            className: (0, i.cn)(o.PAGE_GRID, "relative min-h-svh items-end pt-[var(--hero-content-pt,7rem)] pb-[var(--hero-content-pb,1.5rem)] sm:min-h-[calc(100svh-4px)]"),
            children: (0, t.jsx)(a.motion.div, {
                style: {
                    opacity: r,
                    filter: s,
                    visibility: u
                },
                className: "motion-reduce:visible! motion-reduce:filter-none! col-span-16 flex min-w-0 flex-col gap-[var(--hero-copy-gap,2rem)] motion-reduce:opacity-100! lg:col-span-14 lg:col-start-2 xl:flex-row xl:items-start xl:justify-between xl:gap-10 2xl:flex-col 2xl:gap-[clamp(24px,2.85vw,55px)]",
                children: e
            })
        })
    }, "useHeroScrollFade", 0, c])
}, 146214, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(496036),
        n = e.i(107442),
        r = e.i(888978),
        s = e.i(136263);
    let l = (0, s.createContext)(null);
    e.s(["PinnedFold", 0, function({
        clearance: e = 0,
        className: o,
        children: c
    }) {
        let u = (0, s.useRef)(null),
            d = (0, s.useRef)(null),
            m = (0, a.useMotionValue)(0),
            {
                scrollY: p
            } = (0, r.useScroll)(),
            f = (0, s.useCallback)(() => {
                let e = u.current,
                    t = d.current;
                if (!e || !t) return;
                let {
                    top: i,
                    bottom: a
                } = e.getBoundingClientRect(), n = t.getBoundingClientRect().top;
                m.set(Math.max(0, a - n)), e.style.opacity = n > i ? "" : "0"
            }, [m]);
        return (0, n.useMotionValueEvent)(p, "change", f), (0, s.useLayoutEffect)(() => {
            let t = u.current;
            if (!t) return;
            let i = () => {
                t.style.top = `min(${e}px, calc(100svh - ${t.offsetHeight}px))`, f()
            };
            i();
            let a = new ResizeObserver(i);
            return a.observe(t), () => a.disconnect()
        }, [e, f]), (0, t.jsxs)(l.Provider, {
            value: m,
            children: [(0, t.jsx)("div", {
                ref: u,
                className: (0, i.cn)("sticky", o),
                children: c
            }), (0, t.jsx)("div", {
                ref: d,
                "aria-hidden": !0
            })]
        })
    }, "usePinnedShift", 0, function() {
        return (0, s.useContext)(l)
    }])
}, 221876, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        a = e.i(136263),
        n = e.i(718190);
    e.s(["WORD_STAGGER_MS", 0, 70, "WordReveal", 0, function({
        text: e,
        lines: r,
        as: s = "p",
        trigger: l = "load",
        delay: o = 0,
        stagger: c = 70,
        lineClassName: u = "sm:block",
        id: d,
        style: m,
        className: p
    }) {
        let f = (0, a.useRef)(null),
            h = (0, n.useSeenOnce)(f),
            v = "load" === l || h,
            g = (r ? ? [e ? ? ""]).map(e => e.split(" ")),
            x = 0;
        return (0, t.jsx)(s, {
            ref: f,
            id: d,
            style: m,
            className: p,
            children: g.map((e, n) => (0, t.jsxs)(a.Fragment, {
                children: [(0, t.jsx)("span", {
                    className: r ? u : void 0,
                    children: e.map((r, s) => {
                        let l = o + x * c;
                        return x += 1, (0, t.jsxs)(a.Fragment, {
                            children: [(0, t.jsx)("span", {
                                className: (0, i.cn)("inline-block", v ? "animate-word-crossfade" : "opacity-0"),
                                style: {
                                    animationDelay: `${l}ms`
                                },
                                children: r
                            }), s < e.length - 1 ? " " : null]
                        }, `${n}-${s}-${r}`)
                    })
                }), n < g.length - 1 ? " " : null]
            }, e.join(" ")))
        })
    }])
}, 718190, e => {
    "use strict";
    var t = e.i(136263);
    e.s(["useSeenOnce", 0, function(e, i = "0px 0px -15% 0px") {
        let [a, n] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = e.current;
            if (!t || a) return;
            if ("u" < typeof IntersectionObserver) return void n(!0);
            let r = new IntersectionObserver(e => {
                e.some(e => e.isIntersecting) && (n(!0), r.disconnect())
            }, {
                rootMargin: i
            });
            return r.observe(t), () => r.disconnect()
        }, [e, i, a]), a
    }])
}, 619266, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356);
    let a = "mx-auto grid w-full max-w-500 grid-cols-16 gap-x-4";
    e.s(["PAGE_GRID", 0, a, "PageGrid", 0, function({
        className: e,
        gridClassName: n,
        children: r
    }) {
        return (0, t.jsx)("div", {
            className: (0, i.cn)(a, n),
            children: (0, t.jsx)("div", {
                className: (0, i.cn)("col-span-16", e),
                children: r
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
            for (let i = 0; i < this.animations.length; i++) this.animations[i][e] = t
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
            return i(this.animations, "duration")
        }
        get iterationDuration() {
            return i(this.animations, "iterationDuration")
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

    function i(e, t) {
        let i = 0;
        for (let a = 0; a < e.length; a++) {
            let n = e[a][t];
            null !== n && n > i && (i = n)
        }
        return i
    }
    class a extends t {
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
    }
    var n = e.i(926935),
        r = e.i(706221),
        s = e.i(102710),
        l = e.i(140926),
        o = e.i(973626),
        c = e.i(855397),
        u = e.i(10875),
        d = e.i(302461),
        m = e.i(470934),
        p = e.i(633836),
        f = e.i(725542),
        h = e.i(991388),
        v = e.i(577182);

    function g(e, t) {
        var i;
        let a;
        return (0, v.isEasingArray)(e) ? e[i = e.length, ((t - 0) % (a = i - 0) + a) % a + 0] : e
    }
    var x = e.i(513038);

    function y(e) {
        return "object" == typeof e && !Array.isArray(e)
    }

    function b(e, t, i, a) {
        return null == e ? [] : "string" == typeof e && y(t) ? (0, x.resolveElements)(e, i, a) : e instanceof NodeList ? Array.from(e) : Array.isArray(e) ? e.filter(e => null != e) : [e]
    }

    function w(e, t, i, a) {
        return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? i : t.startsWith("<") ? Math.max(0, i + parseFloat(t.slice(1))) : a.get(t) ? ? e
    }
    var k = e.i(327745);

    function j(e, t) {
        return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
    }

    function M(e, t) {
        return t.has(e) || t.set(e, {}), t.get(e)
    }

    function C(e, t) {
        return t[e] || (t[e] = []), t[e]
    }
    let I = e => "number" == typeof e,
        E = e => e.every(I);
    var A = e.i(754497),
        S = e.i(368623),
        N = e.i(530754),
        _ = e.i(256650),
        T = e.i(570615),
        R = e.i(565274),
        V = e.i(777074),
        L = e.i(301219),
        P = e.i(453311);
    class H extends P.VisualElement {
        constructor() {
            super(...arguments), this.type = "object"
        }
        readValueFromInstance(e, t) {
            if (t in e) {
                let i = e[t];
                if ("string" == typeof i || "number" == typeof i) return i
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

    function O(e) {
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
            i = (0, _.isSVGElement)(e) && !(0, T.isSVGSVGElement)(e) ? new R.SVGVisualElement(t) : new V.HTMLVisualElement(t);
        i.mount(e), S.visualElementStore.set(e, i)
    }

    function $(e) {
        let t = new H({
            presenceContext: null,
            props: {},
            visualState: {
                renderState: {
                    output: {}
                },
                latestValues: {}
            }
        });
        t.mount(e), S.visualElementStore.set(e, t)
    }

    function F(e, t, i, a) {
        let n = [];
        if ((0, l.isMotionValue)(e) || "number" == typeof e || "string" == typeof e && !y(t)) n.push((0, A.animateSingleValue)(e, y(t) && t.default || t, i && i.default || i));
        else {
            if (null == e) return n;
            let r = b(e, t, a),
                s = r.length;
            (0, f.invariant)(!!s, "No valid elements provided.", "no-valid-elements");
            for (let e = 0; e < s; e++) {
                let a = r[e],
                    l = a instanceof Element ? O : $;
                S.visualElementStore.has(a) || l(a);
                let o = S.visualElementStore.get(a),
                    c = { ...i
                    };
                "delay" in c && "function" == typeof c.delay && (c.delay = c.delay(e, s)), n.push(...(0, N.animateTarget)(o, { ...t,
                    transition: c
                }, {}))
            }
        }
        return n
    }
    let z = function(e = {}) {
        let {
            scope: t,
            reduceMotion: i,
            skipAnimations: v
        } = e;
        return function(e, x, y) {
            var I;
            let A, S = [],
                N = {};
            if (void 0 !== i && (N.reduceMotion = i), void 0 !== v && (N.skipAnimations = v), Array.isArray(e) && e.some(Array.isArray)) {
                let i, {
                    onComplete: a,
                    ...v
                } = x || {};
                "function" == typeof a && (A = a), I = { ...N,
                    ...v
                }, i = [], (function(e, {
                    defaultTransition: t = {},
                    ...i
                } = {}, a, r) {
                    let s = t.duration || .3,
                        v = new Map,
                        x = new Map,
                        y = {},
                        I = new Map,
                        A = 0,
                        S = 0,
                        N = 0;
                    for (let i = 0; i < e.length; i++) {
                        let m = e[i];
                        if ("string" == typeof m) {
                            I.set(m, S);
                            continue
                        }
                        if (!Array.isArray(m)) {
                            I.set(m.name, w(S, m.at, A, I));
                            continue
                        }
                        let [v, j, R = {}] = m;
                        void 0 !== R.at && (S = w(S, R.at, A, I));
                        let V = 0,
                            L = (e, i, a, l = 0, m = 0) => {
                                var v;
                                let x = Array.isArray(v = e) ? v : [v],
                                    {
                                        delay: y = 0,
                                        times: b = (0, o.defaultOffset)(x),
                                        type: w = t.type || "keyframes",
                                        repeat: j,
                                        repeatType: M,
                                        repeatDelay: C = 0,
                                        ...I
                                    } = i,
                                    {
                                        ease: A = t.ease || "easeOut",
                                        duration: _
                                    } = i,
                                    T = "function" == typeof y ? y(l, m) : y,
                                    R = x.length,
                                    L = (0, c.isGenerator)(w) ? w : r ? .[w || "keyframes"];
                                if (R <= 2 && L) {
                                    let e = 100;
                                    2 === R && E(x) && (e = Math.abs(x[1] - x[0]));
                                    let i = { ...t,
                                        ...I
                                    };
                                    void 0 !== _ && (i.duration = (0, p.secondsToMilliseconds)(_));
                                    let a = (0, u.createGeneratorEasing)(i, e, L);
                                    A = a.ease, _ = a.duration
                                }
                                _ ? ? (_ = s);
                                let P = S + T;
                                1 === b.length && 0 === b[0] && (b[1] = 1);
                                let H = b.length - x.length;
                                if (H > 0 && (0, d.fillOffset)(b, H), 1 === x.length && x.unshift(null), j && (0, f.warning)(j < 20, `Sequence segments can't repeat ${j} times — ignoring repeat option. Use a value below 20 or apply repeat at the sequence level instead.`), j && j < 20) {
                                    let e = _ > 0 ? C / _ : 0;
                                    _ = _ * (j + 1) + C * j;
                                    let t = [...x],
                                        i = [...b],
                                        a = [...A = Array.isArray(A) ? [...A] : [A]],
                                        n = "reverse" === M || "mirror" === M,
                                        r = t,
                                        s = a;
                                    n && (r = [...t].reverse(), "reverse" === M && (s = [...a].reverse().map(e => "function" == typeof e ? (0, h.reverseEasing)(e) : e)));
                                    for (let l = 0; l < j; l++) {
                                        let o = n && l % 2 == 0,
                                            c = o ? r : t,
                                            u = o ? s : a,
                                            d = (l + 1) * (1 + e);
                                        e > 0 && (x.push(x[x.length - 1]), b.push(d), A.push("linear")), x.push(...c);
                                        for (let e = 0; e < c.length; e++) b.push(i[e] + d), A.push(0 === e ? "linear" : g(u, e - 1))
                                    }! function(e, t, i = 0) {
                                        let a = t + 1 + t * i;
                                        for (let t = 0; t < e.length; t++) e[t] = e[t] / a
                                    }(b, j, e)
                                }
                                let O = P + _;
                                ! function(e, t, i, a, r, s) {
                                    for (let t = 0; t < e.length; t++) {
                                        let i = e[t];
                                        i.at > r && i.at < s && ((0, n.removeItem)(e, i), t--)
                                    }
                                    for (let n = 0; n < t.length; n++) e.push({
                                        value: t[n],
                                        at: (0, k.mixNumber)(r, s, a[n]),
                                        easing: g(i, n)
                                    })
                                }(a, x, A, b, P, O), V = Math.max(T + _, V), N = Math.max(O, N)
                            };
                        if ((0, l.isMotionValue)(v)) L(j, R, C("default", M(v, x)));
                        else {
                            let e = b(v, j, a, y),
                                t = e.length;
                            for (let i = 0; i < t; i++) {
                                let a = M(e[i], x);
                                for (let e in j) {
                                    var _, T;
                                    L(j[e], (_ = R, T = e, _ && _[T] ? { ..._,
                                        ..._[T]
                                    } : { ..._
                                    }), C(e, a), i, t)
                                }
                            }
                        }
                        A = S, S += V
                    }
                    return x.forEach((e, a) => {
                        for (let n in e) {
                            let r = e[n];
                            r.sort(j);
                            let s = [],
                                l = [],
                                o = [];
                            for (let e = 0; e < r.length; e++) {
                                let {
                                    at: t,
                                    value: i,
                                    easing: a
                                } = r[e];
                                s.push(i), l.push((0, m.progress)(0, N, t)), o.push(a || "easeOut")
                            }
                            0 !== l[0] && (l.unshift(0), s.unshift(s[0]), o.unshift("easeInOut")), 1 !== l[l.length - 1] && (l.push(1), s.push(null)), v.has(a) || v.set(a, {
                                keyframes: {},
                                transition: {}
                            });
                            let c = v.get(a);
                            c.keyframes[n] = s;
                            let {
                                type: u,
                                ...d
                            } = t;
                            c.transition[n] = { ...d,
                                duration: N,
                                ease: o,
                                times: l,
                                ...i
                            }
                        }
                    }), v
                })(e.map(e => {
                    if (Array.isArray(e) && "function" == typeof e[0]) {
                        let t = e[0],
                            i = (0, r.motionValue)(0);
                        return (i.on("change", t), 1 === e.length) ? [i, [0, 1]] : 2 === e.length ? [i, [0, 1], e[1]] : [i, e[1], e[2]]
                    }
                    return e
                }), I, t, {
                    spring: s.spring
                }).forEach(({
                    keyframes: e,
                    transition: t
                }, a) => {
                    i.push(...F(a, e, t))
                }), S = i
            } else {
                let {
                    onComplete: i,
                    ...a
                } = y || {};
                "function" == typeof i && (A = i), S = F(e, x, { ...N,
                    ...a
                }, t)
            }
            let _ = new a(S);
            return A && _.finished.then(A), t && (t.animations.push(_), _.finished.then(() => {
                (0, n.removeItem)(t.animations, _)
            })), _
        }
    }();
    e.s(["animate", 0, z], 407017)
}, 585800, e => {
    "use strict";
    var t = e.i(136263),
        i = e.i(513038);
    let a = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: n,
        margin: r,
        amount: s,
        once: l = !1,
        initial: o = !1
    } = {}) {
        let [c, u] = (0, t.useState)(o);
        return (0, t.useEffect)(() => {
            if (!e.current || l && c) return;
            let t = {
                root: n && n.current || void 0,
                margin: r,
                amount: s
            };
            return function(e, t, {
                root: n,
                margin: r,
                amount: s = "some"
            } = {}) {
                let l = (0, i.resolveElements)(e),
                    o = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let i = o.get(e.target);
                            if (!!i !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let i = t(e.target, e);
                                    "function" == typeof i ? o.set(e.target, i) : c.unobserve(e.target)
                                } else "function" == typeof i && (i(e), o.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: r,
                        threshold: "number" == typeof s ? s : a[s]
                    });
                return l.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (u(!0), l ? void 0 : () => u(!1)), t)
        }, [n, e, r, l, s]), c
    }], 585800)
}, 107442, e => {
    "use strict";
    var t = e.i(136263);
    e.s(["useMotionValueEvent", 0, function(e, i, a) {
        (0, t.useInsertionEffect)(() => e.on(i, a), [e, i, a])
    }])
}, 124620, e => {
    "use strict";
    var t = e.i(672357),
        i = e.i(107442),
        a = e.i(496036);
    e.s(["useVelocity", 0, function(e) {
        let n = (0, a.useMotionValue)(e.getVelocity()),
            r = () => {
                let i = e.getVelocity();
                n.set(i), i && t.frame.update(r)
            };
        return (0, i.useMotionValueEvent)(e, "change", () => {
            t.frame.update(r, !1, !0)
        }), n
    }])
}, 320156, e => {
    "use strict";
    let t = ["forest", "blush", "amber", "ultramarine", "merlot", "lava", "lime", "lavender", "sakura", "gold", "haze", "sand", "sky", "green"],
        i = {
            forest: "#0a1e05",
            blush: "#fccbeb",
            amber: "#ffcf0b",
            ultramarine: "#3e49ee",
            merlot: "#640000",
            lava: "#ff5955",
            lime: "#b2f691",
            lavender: "#cfc3ff",
            sakura: "#ffd2fd",
            gold: "#ffe762",
            haze: "#b8a8f5",
            sand: "#f7f2a4",
            sky: "#b4dcff",
            green: "#15cb74"
        };

    function a(e, t) {
        let i = Number.parseInt(e.slice(t, t + 2), 16) / 255;
        return i <= .03928 ? i / 12.92 : ((i + .055) / 1.055) ** 2.4
    }

    function n(e) {
        return .2126 * a(e, 1) + .7152 * a(e, 3) + .0722 * a(e, 5)
    }
    let r = n("#111111");

    function s(e, t) {
        return (Math.max(e, t) + .05) / (Math.min(e, t) + .05)
    }
    let l = {
        A: [0, .034],
        C: [-.031, 0],
        D: [-.038, 0],
        E: [-.05, 0],
        F: [-.087, -.083],
        J: [.097, .062],
        K: [-.068, 0],
        L: [-.107, .098],
        P: [-.06, -.072],
        R: [-.042, -.025],
        T: [0, -.117],
        Y: [0, -.071],
        1: [.07, -.029],
        3: [.034, 0],
        4: [.03, 0],
        7: [0, -.092]
    };
    e.s(["avatarColor", 0, function(e) {
        return t[function(e) {
            let t = 0;
            for (let i = 0; i < e.length; i += 1) t = 31 * t + e.charCodeAt(i) >>> 0;
            return t
        }(e.trim().toLowerCase()) % t.length] ? ? "forest"
    }, "avatarColorFill", 0, function(e) {
        let t, a = i[e];
        return {
            background: a,
            ink: s(t = n(a), r) >= s(t, 1) ? "black" : "white"
        }
    }, "avatarInitial", 0, function(e) {
        let t = Array.from(e.trim())[0];
        return void 0 === t ? "" : t.toUpperCase()
    }, "avatarOpticalNudge", 0, function(e) {
        let t = l[e];
        if (!t) return null;
        let i = e => `${Math.round(-500*e)/1e3}em`;
        return `${i(t[0])} ${i(t[1])}`
    }])
}, 552290, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(136263),
        a = e.i(376062),
        n = e.i(635356),
        r = e.i(320156);
    let s = {
            xs: "size-6 text-caption-12 [&_svg]:size-3",
            sm: "size-8 text-copy-14 [&_svg]:size-4",
            md: "size-10 text-copy-16 [&_svg]:size-5",
            lg: "size-12 text-copy-20 [&_svg]:size-6",
            xl: "size-18 text-copy-24 [&_svg]:size-9",
            "2xl": "size-50 text-sub-lg [&_svg]:size-24"
        },
        l = {
            xs: "ring-2",
            sm: "ring-2",
            md: "ring-2",
            lg: "ring-[3px]",
            xl: "ring-[3px]",
            "2xl": "ring-4"
        },
        o = {
            xs: "h-6 px-2",
            sm: "h-8 px-3",
            md: "h-10 px-4",
            lg: "h-12 px-4",
            xl: "h-12 px-4",
            "2xl": "h-12 px-4"
        };
    e.s(["Avatar", 0, function({
        src: e,
        alt: c = "",
        name: u,
        fallbackName: d,
        href: m,
        target: p,
        rel: f,
        size: h = "sm",
        ring: v = !1,
        fallback: g = "neutral",
        color: x,
        seed: y,
        className: b,
        avatarClassName: w,
        nameClassName: k,
        ...j
    }) {
        let [M, C] = (0, i.useState)(null), I = (0, i.useRef)(null), E = "string" == typeof e && "" !== e && e !== M;
        (0, i.useEffect)(() => {
            let e = I.current;
            e ? .complete && 0 === e.naturalWidth && C(e.getAttribute("src"))
        }, []);
        let A = u ? .trim() ? ? "",
            S = "string" == typeof m && "" !== m.trim(),
            N = "" === A && !S,
            _ = "" === A ? d ? ? "" : A,
            T = (0, r.avatarInitial)(_),
            R = "string" == typeof y && "" !== y.trim() ? y : _,
            V = "generated" !== g || E || "" === T ? null : x ? ? (0, r.avatarColor)(R),
            L = null === V ? null : (0, r.avatarColorFill)(V),
            P = (0, t.jsx)("span", {
                className: (0, n.cn)("relative inline-flex shrink-0 select-none items-center justify-center overflow-hidden rounded-full bg-primary-200 align-middle font-medium text-primary-800", s[h], v ? (0, n.cn)(l[h], "ring-background") : null, L && (0, n.cn)("@container", "white" === L.ink ? "text-white" : "text-black"), N ? b : null, w),
                style: L ? {
                    backgroundColor: L.background
                } : void 0,
                "data-fallback": L ? "generated" : void 0,
                "data-color": V ? ? void 0,
                ...E ? {} : "" === c ? {
                    "aria-hidden": !0
                } : {
                    role: "img",
                    "aria-label": c
                },
                ...N ? j : {},
                children: E ? (0, t.jsx)("img", {
                    ref: I,
                    src: e,
                    alt: c,
                    className: "size-full object-cover",
                    onError: () => C(e)
                }) : "" === T ? (0, t.jsx)(a.UserIcon, {
                    className: "text-primary-500"
                }) : L ? (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    className: "font-display font-medium text-[61cqw] leading-none [text-box-edge:cap_alphabetic] [text-box-trim:trim-both]",
                    style: {
                        translate: (0, r.avatarOpticalNudge)(T) ? ? void 0
                    },
                    children: T
                }) : (0, t.jsx)("span", {
                    "aria-hidden": "true",
                    children: T
                })
            });
        return N ? P : (0, t.jsxs)(S ? "a" : "span", {
            href: S ? m : void 0,
            target: S ? p : void 0,
            rel: S ? f : void 0,
            className: (0, n.cn)("group/avatar inline-flex min-w-0 max-w-full items-start gap-1.5 align-middle", S ? "rounded-full focus-visible:outline-2 focus-visible:outline-primary-400 focus-visible:outline-offset-2" : null, b),
            ...j,
            children: [P, "" !== A ? (0, t.jsx)("span", {
                title: A,
                className: (0, n.cn)("flex min-w-0 items-center justify-center rounded-full bg-primary-200 font-normal text-caption-12 text-primary-800 backdrop-blur-[16px]", S ? "transition-colors duration-200 ease-out-strong group-hover/avatar:bg-primary-300 group-focus-visible/avatar:bg-primary-300 motion-reduce:transition-none" : null, o[h], k),
                children: (0, t.jsx)("span", {
                    className: "truncate",
                    children: A
                })
            }) : null]
        })
    }])
}]);