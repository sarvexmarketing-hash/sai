(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 459771, t => {
    "use strict";
    var e = t.i(136263);
    let n = "(hover: hover) and (pointer: fine)";
    t.s(["useFinePointer", 0, function() {
        let t = (0, e.useCallback)(t => {
                if ("function" != typeof window.matchMedia) return () => {};
                let e = window.matchMedia(n);
                return e.addEventListener("change", t), () => e.removeEventListener("change", t)
            }, []),
            r = (0, e.useCallback)(() => "function" == typeof window.matchMedia && window.matchMedia(n).matches, []);
        return (0, e.useSyncExternalStore)(t, r, () => !1)
    }])
}, 601664, 148446, t => {
    "use strict";
    var e = t.i(52644),
        n = t.i(635356),
        r = t.i(392739);
    let o = "col-start-1 row-start-1 size-5 transition-[opacity,rotate,scale,filter] duration-300 ease-out-strong motion-reduce:transition-none";
    t.s(["MenuGlyph", 0, function({
        open: t
    }) {
        return (0, e.jsxs)(e.Fragment, {
            children: [(0, e.jsx)(r.Icon, {
                name: "2-line-menu-left",
                className: (0, n.cn)(o, t && "-rotate-45 scale-50 opacity-0 blur-[2px]")
            }), (0, e.jsx)(r.Icon, {
                name: "xmark",
                className: (0, n.cn)(o, !t && "rotate-45 scale-50 opacity-0 blur-[2px]")
            })]
        })
    }], 601664);
    let l = "video, img:not([data-app-icon])",
        i = t => {
            let e = getComputedStyle(t);
            return Number.parseFloat(e.opacity) >= .9 && ("none" !== e.backgroundImage || (t => {
                if ("transparent" === t) return 0;
                let e = t.lastIndexOf("/");
                if (-1 !== e) {
                    let n = t.slice(e + 1),
                        r = Number.parseFloat(n);
                    return n.includes("%") ? r / 100 : r
                }
                let n = t.slice(t.indexOf("(") + 1, t.lastIndexOf(")")).split(",");
                return 4 === n.length ? Number.parseFloat(n[3]) : 1
            })(e.backgroundColor) >= .9)
        },
        a = (t, e, n) => t.left <= e && e < t.right && t.top <= n && n < t.bottom,
        u = (t, e) => {
            let n = {
                left: Math.max(t.left, e.left),
                top: Math.max(t.top, e.top),
                right: Math.min(t.right, e.right),
                bottom: Math.min(t.bottom, e.bottom)
            };
            return n.right > n.left && n.bottom > n.top ? n : null
        },
        s = new Set(["hidden", "clip", "scroll", "auto"]),
        c = t => {
            let {
                left: e,
                top: n,
                right: r,
                bottom: o
            } = t.getBoundingClientRect();
            for (let l = t.parentElement; l && l !== document.body; l = l.parentElement) {
                let t = getComputedStyle(l);
                if (!s.has(t.overflowX) && !s.has(t.overflowY)) continue;
                let i = l.getBoundingClientRect();
                e = Math.max(e, i.left), n = Math.max(n, i.top), r = Math.min(r, i.right), o = Math.min(o, i.bottom)
            }
            return {
                left: e,
                top: n,
                right: r,
                bottom: o
            }
        },
        d = (t, e) => {
            if (e <= t) return [(t + e) / 2];
            let n = Math.max(2, Math.ceil((e - t) / 48) + 1);
            return Array.from({
                length: n
            }, (r, o) => t + (e - t) * o / (n - 1))
        },
        f = (t, e) => {
            let n = Number.parseFloat(t);
            return Number.isNaN(n) ? e / 2 : t.endsWith("%") ? e * n / 100 : n
        },
        m = t => {
            let e = t / 255;
            return e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4
        },
        h = new WeakSet;
    t.s(["MEDIA", 0, l, "MEDIA_EVENTS", 0, ["load", "loadeddata", "transitionend"], "SAMPLE_INSET", 0, 6, "inside", 0, a, "mediaProbe", 0, function(t) {
        let e, n = Array.from(document.querySelectorAll(l)).filter(e => !t ? .contains(e) && "light" !== e.dataset.navContext && !(.5 > Number.parseFloat(getComputedStyle(e).opacity)) && (e instanceof HTMLImageElement ? e.complete && e.naturalWidth > 0 : !(e instanceof HTMLVideoElement) || e.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA || "" !== e.poster)).map(t => ({
                el: t,
                box: c(t)
            })).filter(({
                box: t
            }) => t.right > t.left && t.bottom > t.top),
            r = new Map,
            o = t => {
                let e = r.get(t);
                return void 0 === e && (e = i(t), r.set(t, e)), e
            },
            s = (e, r) => {
                let l = n.filter(({
                    box: t
                }) => a(t, e, r));
                if (0 === l.length) return null;
                let i = document.elementsFromPoint ? .(e, r);
                if (!i) return l[0];
                let u = null;
                for (let e of i) {
                    if (t ? .contains(e)) continue;
                    let n = l.find(({
                        el: t
                    }) => t === e || e.contains(t));
                    if (n) {
                        if (n.el instanceof HTMLImageElement) return n;
                        u ? ? = n;
                        continue
                    }
                    if (o(e)) break
                }
                return u
            },
            p = (t, n) => {
                if (h.has(t)) return null;
                void 0 === e && (e = "u" < typeof OffscreenCanvas ? null : new OffscreenCanvas(8, 8).getContext("2d", {
                    willReadFrequently: !0
                }));
                let r = e ? ((t, e) => {
                    let {
                        naturalWidth: n,
                        naturalHeight: r
                    } = t, o = t.getBoundingClientRect();
                    if (!n || !r || !o.width || !o.height) return null;
                    let l = getComputedStyle(t),
                        i = l.getPropertyValue("object-fit"),
                        a = "cover" === i ? Math.max(o.width / n, o.height / r) : "contain" === i || "scale-down" === i ? Math.min(o.width / n, o.height / r) : "none" === i ? 1 : null,
                        s = a ? ? o.width / n,
                        c = a ? ? o.height / r,
                        [d = "", m = ""] = l.getPropertyValue("object-position").split(" "),
                        h = o.left + f(d, o.width - n * s),
                        p = o.top + f(m, o.height - r * c);
                    return u({
                        left: (e.left - h) / s,
                        top: (e.top - p) / c,
                        right: (e.right - h) / s,
                        bottom: (e.bottom - p) / c
                    }, {
                        left: 0,
                        top: 0,
                        right: n,
                        bottom: r
                    })
                })(t, n) : null;
                if (!e || !r) return null;
                try {
                    e.clearRect(0, 0, 8, 8), e.drawImage(t, r.left, r.top, r.right - r.left, r.bottom - r.top, 0, 0, 8, 8);
                    var o = e.getImageData(0, 0, 8, 8).data;
                    let n = 0;
                    for (let t = 0; t < o.length; t += 4) n += o[t + 3] / 255 * (.2126 * m(o[t]) + .7152 * m(o[t + 1]) + .0722 * m(o[t + 2]));
                    return n / (o.length / 4)
                } catch {
                    return h.add(t), null
                }
            };
        return (t, e = null) => {
            if (!t) return null;
            let n = t.getBoundingClientRect();
            if (0 === n.width) return null;
            let r = {
                    left: n.left + 6,
                    top: n.top + 6,
                    right: n.right - 6,
                    bottom: n.bottom - 6
                },
                o = new Set;
            for (let t of d(r.left, r.right))
                for (let e of d(r.top, r.bottom)) {
                    let n = s(t, e);
                    n && o.add(n)
                }
            if (0 === o.size) return null;
            let l = 0,
                i = 0;
            for (let {
                    el: t,
                    box: e
                } of o) {
                let n = t instanceof HTMLImageElement && u(r, e);
                if (!n) continue;
                let o = p(t, n);
                if (null === o) continue;
                let a = (n.right - n.left) * (n.bottom - n.top);
                l += o * a, i += a
            }
            if (0 === i) return e ?? "light";
            let a = l / i;
            return a >= .3 ? "light" : a <= .2 ? "dark" : e ? ? "dark"
        }
    }, "opaque", 0, i, "paintedBox", 0, c, "span", 0, d], 148446)
}, 626687, t => {
    "use strict";
    var e = t.i(52644),
        n = t.i(635356);
    t.s(["PikaWordmark", 0, function({
        className: t
    }) {
        return (0, e.jsxs)("svg", {
            viewBox: "0 0 50 16",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            role: "img",
            "aria-label": "Pika",
            className: (0, n.cn)("h-4 w-auto", t),
            children: [(0, e.jsx)("path", {
                d: "M19.2733 0H16.8828V2.56251H19.2733V0Z"
            }), (0, e.jsx)("path", {
                d: "M19.2733 3.67188H16.8828V15.7968H19.2733V3.67188Z"
            }), (0, e.jsx)("path", {
                d: "M35.2695 1.84026H31.9588L23.7088 8.39163V0H21.32H21.3184V15.7955H23.7088V9.12707L32.0355 15.7955H35.5029L26.6094 8.58621L35.2695 1.84026Z"
            }), (0, e.jsx)("path", {
                d: "M8.58172 0H0V15.7955H2.39048V10.1758H8.58172C14.3645 10.1758 14.9897 6.61734 14.9897 5.08874C14.988 3.55849 14.3629 0 8.58172 0ZM8.14996 7.83098H2.39048V2.34484H8.15163C11.1456 2.34484 12.4225 3.16438 12.4225 5.08709C12.4208 7.00979 11.1439 7.83098 8.14996 7.83098Z"
            }), (0, e.jsx)("path", {
                d: "M38.1088 12.125H38.0488V12.1547H38.1088V12.125Z"
            }), (0, e.jsx)("path", {
                d: "M38.1088 12.0938H38.0488V12.1234H38.1088V12.0938Z"
            }), (0, e.jsx)("path", {
                d: "M49.8993 13.0377V6.91667C49.8993 3.33839 47.7122 1.74219 42.8062 1.74219C38.6837 1.74219 36.2233 3.64016 36.2233 6.81938H38.6337C38.6337 4.91646 39.9207 4.06889 42.8062 4.06889C46.2919 4.06889 47.5288 4.8604 47.5288 7.09146C46.677 7.20854 45.8685 7.31242 45.0784 7.41301C39.1538 8.17154 35.5781 8.62995 35.5781 12.1406C35.5781 13.5175 36.0932 14.4937 37.1534 15.1236C38.102 15.6876 39.7923 15.9976 41.9127 15.9976C44.7683 15.9976 47.1454 15.2869 47.8272 14.2299C47.7656 15.1912 47.8272 15.7882 47.8272 15.7931H50.001C49.9977 15.7832 49.8993 14.6883 49.8993 13.0377ZM47.5288 10.1553C47.5288 11.6476 47.0121 12.6716 45.9485 13.2834C44.9983 13.8308 43.5697 14.0864 41.456 14.0864C40.1607 14.0864 37.9886 13.8308 37.9886 12.1208C37.9886 11.2865 38.5554 10.7769 39.944 10.3647C41.441 9.91945 43.9565 9.57482 47.5305 9.16587V10.1553H47.5288Z"
            })]
        })
    }])
}, 396065, t => {
    "use strict";
    var e = t.i(52644),
        n = t.i(136263);
    let r = (0, n.createContext)(null);
    t.s(["LandingHeaderBackdropProvider", 0, function({
        children: t
    }) {
        let [o, l] = (0, n.useState)(!1), i = (0, n.useMemo)(() => ({
            visible: o,
            setVisible: l
        }), [o]);
        return (0, e.jsx)(r.Provider, {
            value: i,
            children: t
        })
    }, "useLandingHeaderBackdrop", 0, function() {
        return (0, n.useContext)(r)
    }])
}, 500792, t => {
    "use strict";
    var e = t.i(136263);
    let n = null,
        r = new Set;
    t.s(["publishLenis", 0, function(t) {
        for (let e of (n = t, r)) e(t)
    }, "scrollWindowTo", 0, function(t, e = "smooth") {
        n ? n.scrollTo(t, {
            immediate: "instant" === e
        }) : window.scrollTo({
            top: t,
            behavior: e
        })
    }, "useScrollFrame", 0, function(t) {
        let o = (0, e.useRef)(t);
        o.current = t, (0, e.useEffect)(() => {
            let t = () => {},
                e = e => {
                    t();
                    let n = () => o.current();
                    e ? (e.on("scroll", n), t = () => e.off("scroll", n)) : (window.addEventListener("scroll", n, {
                        passive: !0
                    }), t = () => window.removeEventListener("scroll", n)), n()
                };
            return r.add(e), e(n), () => {
                r.delete(e), t()
            }
        }, [])
    }])
}]);