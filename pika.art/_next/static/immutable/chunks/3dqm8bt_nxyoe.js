(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 867148, e => {
    "use strict";
    var t = e.i(301016);
    e.i(585496), e.s(["isMockMode", 0, () => !1, "mockUserId", 0, () => "1" === t.default.env.NEXT_PUBLIC_MOCK_SIGNED_OUT ? null : "user-me"])
}, 753630, e => {
    "use strict";
    var t = e.i(52644),
        r = e.i(136263),
        i = e.i(568238),
        n = e.i(811819),
        o = e.i(193961),
        s = e.i(898663),
        l = e.i(335029),
        a = r,
        u = e.i(145092);

    function d(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class c extends a.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if ((0, l.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                let e = t.offsetParent,
                    r = (0, l.isHTMLElement)(e) && e.offsetWidth || 0,
                    i = (0, l.isHTMLElement)(e) && e.offsetHeight || 0,
                    n = getComputedStyle(t),
                    o = this.props.sizeRef.current;
                o.height = parseFloat(n.height), o.width = parseFloat(n.width), o.top = t.offsetTop, o.left = t.offsetLeft, o.right = r - o.width - o.left, o.bottom = i - o.height - o.top, o.direction = n.direction
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function f({
        children: e,
        isPresent: i,
        anchorX: n,
        anchorY: o,
        root: s,
        pop: l
    }) {
        let p = (0, a.useId)(),
            m = (0, a.useRef)(null),
            g = (0, a.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                direction: "ltr"
            }),
            {
                nonce: h
            } = (0, a.useContext)(u.MotionConfigContext),
            b = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let r = !1,
                            i = e.map(e => {
                                let i = d(e, t);
                                return r || "function" != typeof i || (r = !0), i
                            });
                        if (r) return () => {
                            for (let t = 0; t < i.length; t++) {
                                let r = i[t];
                                "function" == typeof r ? r() : d(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(m, e.props ? .ref ? ? e ? .ref);
        return (0, a.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: a,
                right: u,
                bottom: d,
                direction: c
            } = g.current;
            if (i || !1 === l || !m.current || !e || !t) return;
            let f = "rtl" === c,
                b = "left" === n ? f ? `right: ${u}` : `left: ${a}` : f ? `left: ${a}` : `right: ${u}`,
                y = "bottom" === o ? `bottom: ${d}` : `top: ${r}`;
            m.current.dataset.motionPopId = p;
            let v = document.createElement("style");
            h && (v.nonce = h);
            let w = s ? ? document.head;
            return w.appendChild(v), v.sheet && v.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${b}px !important;
            ${y}px !important;
          }
        `), () => {
                m.current ? .removeAttribute("data-motion-pop-id"), w.contains(v) && w.removeChild(v)
            }
        }, [i]), (0, t.jsx)(c, {
            isPresent: i,
            childRef: m,
            sizeRef: g,
            pop: l,
            children: !1 === l ? e : a.cloneElement(e, {
                ref: b
            })
        })
    }
    let p = ({
        children: e,
        initial: i,
        isPresent: l,
        onExitComplete: a,
        custom: u,
        presenceAffectsLayout: d,
        mode: c,
        anchorX: p,
        anchorY: g,
        root: h
    }) => {
        let b = (0, n.useConstant)(m),
            y = (0, r.useId)(),
            v = (0, r.useRef)(l),
            w = (0, r.useRef)(a);
        (0, o.useIsomorphicLayoutEffect)(() => {
            v.current = l, w.current = a
        });
        let _ = !0,
            x = (0, r.useMemo)(() => (_ = !1, {
                id: y,
                initial: i,
                isPresent: l,
                custom: u,
                onExitComplete: e => {
                    for (let t of (b.set(e, !0), b.values()))
                        if (!t) return;
                    a && a()
                },
                register: e => (b.set(e, !1), () => {
                    b.delete(e), v.current || b.size || w.current ? .()
                })
            }), [l, b, a]);
        return d && _ && (x = { ...x
        }), (0, r.useMemo)(() => {
            b.forEach((e, t) => b.set(t, !1))
        }, [l]), r.useEffect(() => {
            l || b.size || !a || a()
        }, [l]), e = (0, t.jsx)(f, {
            pop: "popLayout" === c,
            isPresent: l,
            anchorX: p,
            anchorY: g,
            root: h,
            children: e
        }), (0, t.jsx)(s.PresenceContext.Provider, {
            value: x,
            children: e
        })
    };

    function m() {
        return new Map
    }
    var g = e.i(500580);
    let h = e => e.key || "";

    function b(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    e.s(["AnimatePresence", 0, ({
        children: e,
        custom: s,
        initial: l = !0,
        onExitComplete: a,
        presenceAffectsLayout: u = !0,
        mode: d = "sync",
        propagate: c = !1,
        anchorX: f = "left",
        anchorY: m = "top",
        root: y
    }) => {
        let [v, w] = (0, g.usePresence)(c), _ = (0, r.useMemo)(() => b(e), [e]), x = c && !v ? [] : _.map(h), P = (0, r.useRef)(!0), E = (0, r.useRef)(_), C = (0, n.useConstant)(() => new Map), j = (0, r.useRef)(new Set), [S, O] = (0, r.useState)(_), [R, M] = (0, r.useState)(_);
        (0, o.useIsomorphicLayoutEffect)(() => {
            P.current = !1, E.current = _;
            for (let e = 0; e < R.length; e++) {
                let t = h(R[e]);
                x.includes(t) ? (C.delete(t), j.current.delete(t)) : !0 !== C.get(t) && C.set(t, !1)
            }
        }, [R, x.length, x.join("-")]);
        let I = [];
        if (_ !== S) {
            let e = [..._];
            for (let t = 0; t < R.length; t++) {
                let r = R[t],
                    i = h(r);
                x.includes(i) || (e.splice(t, 0, r), I.push(r))
            }
            return "wait" === d && I.length && (e = I), M(b(e)), O(_), null
        }
        let {
            forceRender: z
        } = (0, r.useContext)(i.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: R.map(e => {
                let r = h(e),
                    i = (!c || !!v) && (_ === R || x.includes(r));
                return (0, t.jsx)(p, {
                    isPresent: i,
                    initial: (!P.current || !!l) && void 0,
                    custom: s,
                    presenceAffectsLayout: u,
                    mode: d,
                    root: y,
                    onExitComplete: i ? void 0 : () => {
                        if (j.current.has(r) || !C.has(r)) return;
                        j.current.add(r), C.set(r, !0);
                        let e = !0;
                        C.forEach(t => {
                            t || (e = !1)
                        }), e && (z ? .(), M(E.current), c && w ? .(), a && a())
                    },
                    anchorX: f,
                    anchorY: m,
                    children: e
                }, r)
            })
        })
    }], 753630)
}, 115615, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return _
        }
    });
    let i = e.r(836437),
        n = e.r(56421),
        o = e.r(52644),
        s = n._(e.r(136263)),
        l = i._(e.r(635179)),
        a = i._(e.r(194171)),
        u = e.r(498574),
        d = e.r(426943),
        c = e.r(157306),
        f = e.r(116398),
        p = i._(e.r(512758)),
        m = e.r(192246),
        g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function h(e, t, r, i, n, o, s) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && n(!0), r ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let i = !1,
                        n = !1;
                    r.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => i,
                        isPropagationStopped: () => n,
                        persist: () => {},
                        preventDefault: () => {
                            i = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            n = !0, t.stopPropagation()
                        }
                    })
                }
                i ? .current && i.current(e)
            }
        }))
    }

    function b(e) {
        return s.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let y = "u" < typeof window ? s.useEffect : s.useLayoutEffect,
        v = (0, s.forwardRef)(({
            src: e,
            srcSet: t,
            sizes: r,
            height: i,
            width: n,
            decoding: l,
            className: a,
            style: u,
            fetchPriority: d,
            placeholder: c,
            loading: f,
            unoptimized: p,
            fill: g,
            onLoadRef: v,
            onLoadingCompleteRef: w,
            setBlurComplete: _,
            setShowAltText: x,
            sizesInput: P,
            onLoad: E,
            onError: C,
            ...j
        }, S) => {
            let O = (0, s.useRef)(!1),
                R = (0, s.useRef)(null);
            y(() => {
                let {
                    current: e
                } = O, {
                    current: t
                } = R;
                e || null === t || (C && (t.src = t.src), t.complete && h(t, c, v, w, _, p, P), O.current = !0)
            }, [e, c, v, w, C, p, P]);
            let M = (0, m.useMergedRef)(S, R);
            return (0, o.jsx)("img", { ...j,
                ...b(d),
                loading: f,
                width: n,
                height: i,
                decoding: l,
                "data-nimg": g ? "fill" : "1",
                className: a,
                style: u,
                sizes: r,
                srcSet: t,
                src: e,
                ref: M,
                onLoad: e => {
                    h(e.currentTarget, c, v, w, _, p, P)
                },
                onError: e => {
                    x(!0), "empty" !== c && _(!0), C && C(e)
                }
            })
        });

    function w({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...b(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, r), null) : (0, o.jsx)(a.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let _ = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(f.RouterContext),
            i = (0, s.useContext)(c.ImageConfigContext),
            n = (0, s.useMemo)(() => {
                let e = g || i || d.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    n = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: n,
                    localPatterns: "u" < typeof window ? i ? .localPatterns : e.localPatterns
                }
            }, [i]),
            {
                onLoad: l,
                onLoadingComplete: a
            } = e,
            m = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
            m.current = l
        }, [l]);
        let h = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
            h.current = a
        }, [a]);
        let [b, y] = (0, s.useState)(!1), [_, x] = (0, s.useState)(!1), {
            props: P,
            meta: E
        } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: n,
            blurComplete: b,
            showAltText: _
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(v, { ...P,
                unoptimized: E.unoptimized,
                placeholder: E.placeholder,
                fill: E.fill,
                onLoadRef: m,
                onLoadingCompleteRef: h,
                setBlurComplete: y,
                setShowAltText: x,
                sizesInput: e.sizes,
                ref: t
            }), E.preload ? (0, o.jsx)(w, {
                isAppRouter: !r,
                imgAttributes: P
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 38482, (e, t, r) => {
    "use strict";

    function i(e, t) {
        let r = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, t.qualities[0]) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 498574, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let i = e.r(75111),
        n = e.r(870479),
        o = e.r(426943),
        s = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function a(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function u({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: d = !1,
        preload: c = !1,
        loading: f,
        className: p,
        quality: m,
        width: g,
        height: h,
        fill: b = !1,
        style: y,
        overrideSrc: v,
        onLoad: w,
        onLoadingComplete: _,
        placeholder: x = "empty",
        blurDataURL: P,
        fetchPriority: E,
        decoding: C = "async",
        layout: j,
        objectFit: S,
        objectPosition: O,
        lazyBoundary: R,
        lazyRoot: M,
        ...I
    }, z) {
        var $;
        let T, A, k, {
                imgConf: D,
                showAltText: L,
                blurComplete: U,
                defaultLoader: N
            } = z,
            B = D || o.imageConfigDefault;
        if ("allSizes" in B) T = B;
        else {
            let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
                t = B.deviceSizes.sort((e, t) => e - t),
                r = B.qualities ? .sort((e, t) => e - t);
            T = { ...B,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === N) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let F = I.loader || N;
        delete I.loader, delete I.srcSet;
        let q = "__next_img_default" in F;
        if (q) {
            if ("custom" === T.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = F;
            F = t => {
                let {
                    config: r,
                    ...i
                } = t;
                return e(i)
            }
        }
        if (j) {
            "fill" === j && (b = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[j];
            e && (y = { ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            }[j];
            r && !t && (t = r)
        }
        let G = "",
            W = a(g),
            X = a(h),
            H = !1;
        if (($ = e) && "object" == typeof $ && (l($) || void 0 !== $.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (A = t.blurWidth, k = t.blurHeight, P = P || t.blurDataURL, G = t.src, H = /\.avif(?:\?|$)/i.test(G), !b)
                if (W || X) {
                    if (W && !X) {
                        let e = W / t.width;
                        X = Math.round(t.height * e)
                    } else if (!W && X) {
                        let e = X / t.height;
                        W = Math.round(t.width * e)
                    }
                } else W = t.width, X = t.height
        }
        H && "blur" === x && !P && (x = "empty");
        let V = !d && !c && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : G) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, V = !1), T.unoptimized && (r = !0), q && !T.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let Y = a(m),
            K = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: S,
                objectPosition: O
            } : {}, L ? {} : {
                color: "transparent"
            }, y),
            J = U || "empty" === x ? null : "blur" === x ? `url("data:image/svg+xml;charset=utf-8,${(0,n.getImageBlurSvg)({widthInt:W,heightInt:X,blurWidth:A,blurHeight:k,blurDataURL:P||"",objectFit:K.objectFit})}")` : `url("${x}")`,
            Q = s.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
            Z = J ? {
                backgroundSize: Q,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: J
            } : {},
            ee = function({
                config: e,
                src: t,
                unoptimized: r,
                width: n,
                quality: o,
                sizes: s,
                loader: l
            }) {
                if (r) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, i.getDeploymentId)();
                        if (t.includes("/_next/static/immutable") && !(0, i.getAssetToken)()) e = void 0;
                        else if (e) {
                            let r = t.indexOf("?");
                            if (-1 !== r) {
                                let i = new URLSearchParams(t.slice(r + 1));
                                i.get("dpl") || (i.append("dpl", e), t = t.slice(0, r) + "?" + i.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: a,
                    kind: u
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, i) {
                    if (i) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            n = [];
                        for (let e; e = r.exec(i);) n.push(parseInt(e[2]));
                        if (n.length) {
                            let r = .01 * Math.min(...n);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, n, s), d = a.length - 1;
                return {
                    sizes: s || "w" !== u ? s : "100vw",
                    srcSet: a.map((r, i) => `${l({config:e,src:t,quality:o,width:r})} ${"w"===u?r:i+1}${u}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: o,
                        width: a[d]
                    })
                }
            }({
                config: T,
                src: e,
                unoptimized: r,
                width: W,
                quality: Y,
                sizes: t,
                loader: F
            }),
            et = V ? "lazy" : f;
        return {
            props: { ...I,
                loading: et,
                fetchPriority: E,
                width: W,
                height: X,
                decoding: C,
                className: p,
                style: { ...K,
                    ...Z
                },
                sizes: ee.sizes,
                srcSet: ee.srcSet,
                src: v || ee.src
            },
            meta: {
                unoptimized: r,
                preload: c || d,
                placeholder: x,
                fill: b
            }
        }
    }
}, 194171, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return g
        },
        defaultHead: function() {
            return c
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = e.r(836437),
        s = e.r(56421),
        l = e.r(52644),
        a = s._(e.r(136263)),
        u = o._(e.r(834696)),
        d = e.r(905432);

    function c() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function f(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, i, n;
        return e.reduce(f, []).reverse().concat(c().reverse()).filter((t = new Set, r = new Set, i = new Set, n = {}, e => {
            let o = !0,
                s = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                s = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? o = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? o = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) i.has(r) ? o = !1 : i.add(r);
                            else {
                                let t = e.props[r],
                                    i = n[r] || new Set;
                                ("name" !== r || !s) && i.has(t) ? o = !1 : (i.add(t), n[r] = i)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return a.default.cloneElement(e, {
                key: r
            })
        })
    }
    let g = function({
        children: e
    }) {
        let t = (0, a.useContext)(d.HeadManagerContext);
        return (0, l.jsx)(u.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 870479, (e, t, r) => {
    "use strict";

    function i({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: o,
        objectFit: s
    }) {
        let l = r ? 40 * r : e,
            a = n ? 40 * n : t,
            u = l && a ? `viewBox='0 0 ${l} ${a}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return i
        }
    })
}, 157306, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let i = e.r(836437)._(e.r(136263)),
        n = e.r(426943),
        o = i.default.createContext(n.imageConfigDefault)
}, 116398, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let i = e.r(836437)._(e.r(136263)).default.createContext(null)
}, 426943, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return s
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        s = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 270745, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var i = {
        default: function() {
            return d
        },
        getImageProps: function() {
            return u
        }
    };
    for (var n in i) Object.defineProperty(r, n, {
        enumerable: !0,
        get: i[n]
    });
    let o = e.r(836437),
        s = e.r(498574),
        l = e.r(115615),
        a = o._(e.r(512758));

    function u(e) {
        let {
            props: t
        } = (0, s.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let d = l.Image
}, 792402, (e, t, r) => {
    t.exports = e.r(270745)
}, 512758, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let i = e.r(38482),
        n = e.r(75111);

    function o({
        config: e,
        src: t,
        width: r,
        quality: s
    }) {
        let l = (0, n.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
            if (t.includes("/_next/static/immutable") && !(0, n.getAssetToken)()) l = void 0;
            else {
                let e = t.indexOf("?");
                if (-1 !== e) {
                    let r = new URLSearchParams(t.slice(e + 1)),
                        i = r.get("dpl");
                    if (i) {
                        l = i, r.delete("dpl");
                        let n = r.toString();
                        t = t.slice(0, e) + (n ? "?" + n : "")
                    }
                }
            }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, i.findClosestQuality)(s, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    o.__next_img_default = !0;
    let s = o
}, 834696, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let i = e.r(136263),
        n = "u" < typeof window,
        o = n ? () => {} : i.useLayoutEffect,
        s = n ? () => {} : i.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return n && (t ? .mountedInstances ? .add(e.children), l()), o(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), o(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), s(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 585496, e => {
    "use strict";
    let t = ["admin", "partner", "creator", "user"],
        r = ["control", "treatment", "excluded"];

    function i(e, t) {
        return "string" == typeof t && e.includes(t)
    }
    e.s(["APP_CONTENT_LIMITS", 0, {
        name: 80,
        tagline: 240,
        shortDescription: 120,
        promptPlaceholder: 500,
        seoTitle: 120,
        seoDescription: 320,
        description: 360,
        sectionTitle: 120,
        rowTitle: 80,
        rowBody: 600,
        mediaUrl: 500,
        rows: 12,
        badge: 24,
        provider: 80,
        landingDescription: 2e3,
        attribution: 120,
        question: 160,
        answer: 1200
    }, "APP_MIN_COMMUNITY_EXAMPLES", 0, 3, "appEligible", 0, function(e, t) {
        return "admin" === t || e.audience.includes(t) ? e.status : null
    }, "hasFeaturedAppsCollection", 0, function(e) {
        return e.rows.some(e => "featured apps" === e.title.trim().replace(/\s+/g, " ").toLowerCase())
    }, "isViewerGroup", 0, function(e) {
        return i(t, e)
    }, "parseExperimentArms", 0, function(e) {
        if (!("object" == typeof e && null !== e && !Array.isArray(e))) return {};
        let t = {};
        for (let [n, o] of Object.entries(e)) i(r, o) && (t[n] = o);
        return t
    }])
}, 894796, e => {
    "use strict";
    var t = e.i(52644),
        r = e.i(294237),
        i = e.i(635356);
    let n = (0, r.cva)("inline-flex items-center justify-center gap-0.5 whitespace-nowrap rounded-full border border-transparent text-center font-medium", {
        variants: {
            variant: {
                "subtle-dark": "bg-black/5 text-slate/60",
                "subtle-light": "bg-white/5 text-eggshell/70",
                "subtle-accent": "bg-accent-400 text-accent-700",
                "darkened-accent": "bg-accent-400 text-accent-900",
                "solid-accent": "bg-accent-700 text-black",
                "light-solid": "border-black/10 bg-white text-black",
                "dark-solid": "border-white/10 bg-slate text-eggshell",
                "butter-solid": "border-white/10 bg-butter text-slate",
                alert: "bg-alert text-white"
            },
            size: {
                sm: "h-4 min-w-4 px-1 text-[10px] leading-4 [&_svg]:size-2.5",
                md: "h-5 min-w-5 px-1.5 text-xs leading-4 [&_svg]:size-3",
                lg: "h-6 min-w-6 px-1.5 text-[15px] leading-none [&_svg]:size-4"
            }
        },
        defaultVariants: {
            variant: "subtle-dark",
            size: "lg"
        }
    });
    e.s(["Badge", 0, function({
        className: e,
        variant: r,
        size: o,
        ...s
    }) {
        return (0, t.jsx)("span", {
            className: (0, i.cn)(n({
                variant: r,
                size: o
            }), e),
            ...s
        })
    }, "badgeVariants", 0, n])
}]);