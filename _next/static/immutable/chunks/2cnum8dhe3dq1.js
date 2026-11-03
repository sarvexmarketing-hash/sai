(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 534916, e => {
    "use strict";
    var t = e.i(829824),
        r = e.i(136263),
        n = e.i(92285),
        a = e.i(575547),
        l = e.i(164715),
        o = e.i(517221);
    let u = "pika_google_signup:",
        i = new Set;
    async function s() {
        if ((0, o.googleAdsRegion)() && (0, l.isAuthConfigured)()) try {
            let {
                data: e,
                error: t
            } = await (0, l.createClient)().auth.getUser(), r = e.user;
            if (t || !r || function(e) {
                    if (i.has(e)) return !0;
                    try {
                        return "1" === localStorage.getItem(`${u}${e}`)
                    } catch {
                        return !1
                    }
                }(r.id)) return;
            let n = Date.parse(r.email_confirmed_at ? ? r.created_at),
                o = Date.parse(r.last_sign_in_at ? ? ""),
                s = Date.now() - n;
            if (!Number.isFinite(s) || Math.abs(s) > 36e5 || !Number.isFinite(o) || Math.abs(o - n) > 1e4 || !(0, a.sendGoogleRegistration)()) return;
            i.add(r.id);
            try {
                localStorage.setItem(`${u}${r.id}`, "1")
            } catch {}
        } catch {}
    }
    var d = e.i(38067),
        c = e.i(344805);
    e.s(["GooglePageViews", 0, function() {
        let e = (0, t.usePathname)(),
            l = (0, t.useSearchParams)() ? .toString() ? ? "",
            o = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            if (null === e) return;
            let t = (0, d.sanitizedPageLocation)(`${window.location.origin}${e}${l?`?${l}`:""}`);
            if ((0, c.isStaticPublicPath)(e)) {
                o.current = t;
                return
            }
            t !== o.current && ((0, a.sendGooglePageView)({
                location: t,
                referrer: o.current ? ? (0, d.sanitizedReferrer)(document.referrer)
            }), o.current = t), (0, a.primeGoogleIdentity)(), new URLSearchParams(l).get("auth_type") === n.SIGN_UP_KEY && s()
        }, [e, l]), null
    }], 534916)
}, 112046, e => {
    "use strict";
    var t = e.i(829824),
        r = e.i(136263),
        n = e.i(92285),
        a = e.i(445286),
        l = e.i(344805),
        o = e.i(164715);
    let u = new Set;
    async function i() {
        if (!(0, o.isAuthConfigured)()) return;
        let {
            data: e
        } = await (0, o.createClient)().auth.getSession(), t = e.session ? .user.id;
        !t || u.has(t) || (u.add(t), (0, a.sendMetaRegistration)(t))
    }
    e.s(["MetaPixelEvents", 0, function() {
        let e = (0, t.usePathname)(),
            o = (0, t.useSearchParams)() ? .toString() ? ? "",
            u = (0, r.useRef)(null);
        return (0, r.useEffect)(() => {
            if (null === e) return;
            let t = `${e}${o?`?${o}`:""}`;
            t === u.current || (u.current = t, (0, l.isStaticPublicPath)(e) || ((0, a.ensureMetaClickId)(`${window.location.origin}${t}`), (0, a.sendMetaPageView)(), new URLSearchParams(o).get("auth_type") === n.SIGN_UP_KEY && i().catch(() => {})))
        }, [e, o]), null
    }])
}, 620733, e => {
    "use strict";
    let t = /^[a-z0-9_]{1,48}$/,
        r = {
            callback: {
                otp_expired: "link_expired",
                bad_oauth_state: "oauth_expired",
                bad_code_verifier: "oauth_expired",
                flow_state_not_found: "oauth_expired",
                flow_state_expired: "oauth_expired",
                flow_state_already_used: "oauth_expired",
                access_denied: "oauth_cancelled"
            },
            confirm: {
                otp_expired: "link_expired",
                bad_oauth_state: "link_expired",
                bad_code_verifier: "link_expired",
                flow_state_not_found: "link_expired",
                flow_state_expired: "link_expired",
                flow_state_already_used: "link_expired",
                validation_failed: "invalid_link"
            }
        };

    function n(e) {
        return "string" == typeof e && t.test(e) ? e : null
    }
    e.s(["authErrorFor", 0, function(e, t, n) {
        let a = r[e];
        return null !== t && Object.hasOwn(a, t) ? a[t] : n
    }, "authReason", 0, n, "providerReason", 0, function(e) {
        return n(e.get("error_code")) ? ? n(e.get("error"))
    }])
}, 229078, e => {
    "use strict";
    let t = {
            oauth_failed: "We couldn't complete that sign-in. Please try again.",
            session_failed: "That link is no longer valid. Please request a new one.",
            confirmed_elsewhere: "That link was opened in a different browser. Your email is confirmed, so log in here to continue.",
            recovery_elsewhere: "That reset link was opened in a different browser. Request a new link here and open it on this device.",
            invalid_link: "That confirmation link is invalid. Please request a new one.",
            session_expired: "Your session has ended. Log in again to continue.",
            link_expired: "That link has expired or was already used. Send yourself a new one.",
            oauth_expired: "That sign-in expired or was already used. Please try again.",
            oauth_cancelled: "Sign-in was cancelled."
        },
        r = new Set(["link_expired", "session_failed", "confirmed_elsewhere", "recovery_elsewhere", "invalid_link"]);
    e.s(["SESSION_REJECTED", 0, "session_expired", "authErrorMessage", 0, function(e) {
        return "string" == typeof e && Object.hasOwn(t, e) ? t[e] : null
    }, "authErrorRedirect", 0, function(e, t, r, n, a = "/login") {
        let l = new URL(`${a}?error=${t}`, e);
        return r && l.searchParams.set("redirect", r), n && l.searchParams.set("reason", n), l
    }, "isLinkError", 0, function(e) {
        return "string" == typeof e && r.has(e)
    }])
}, 45744, e => {
    "use strict";
    var t = e.i(52644),
        r = e.i(136263),
        n = e.i(829824),
        a = e.i(767131);
    let l = null;

    function o() {
        let e, t;
        return e = (0, n.usePathname)(), t = (0, n.useSearchParams)() ? .toString() ? ? "", (0, r.useEffect)(() => {
            if (null === e) return;
            let r = `${window.location.origin}${e}${t?`?${t}`:""}${window.location.hash}`;
            if (r === l) return;
            let n = null === l;
            l = r;
            let o = n && function() {
                try {
                    let [e] = performance.getEntriesByType("navigation"), t = e ? .type;
                    return "reload" === t || "back_forward" === t
                } catch {
                    return !1
                }
            }() ? (0, a.forgetAcquisitionOutsideAdsRegion)(r) : (0, a.captureAcquisition)(r, n ? document.referrer : "");
            n && !o && (0, a.keepAcquisition)(r)
        }, [e, t]), null
    }

    function u() {
        return (0, t.jsx)(r.Suspense, {
            fallback: null,
            children: (0, t.jsx)(o, {})
        })
    }
    var i = e.i(92285),
        s = e.i(864132),
        d = e.i(975252),
        c = e.i(164715),
        f = e.i(620733),
        p = e.i(229078);
    let _ = new Set(["/login", "/signup"]);
    async function h() {
        if (!(0, c.isAuthConfigured)()) return !1;
        try {
            let {
                data: e
            } = await (0, c.createClient)().auth.getSession();
            return !!e.session
        } catch {
            return !1
        }
    }
    async function y() {
        let {
            hash: e,
            pathname: t,
            search: r,
            hostname: n,
            origin: a
        } = window.location, l = new URLSearchParams(e.slice(1));
        if (!(l.has("error") && (l.has("error_code") || l.has("error_description")))) return;
        let o = new URLSearchParams(r),
            u = _.has(t),
            c = u && o.has("error"),
            y = n === s.APEX_HOST,
            g = y || "/" === t,
            m = y ? s.APP_ORIGIN : a,
            b = !u && await h();
        if (b && g) return void window.location.replace(`${m}${i.LOGIN_REDIRECT_PATH}`);
        if (c || b) return void window.history.replaceState(window.history.state, "", `${t}${r}`);
        let P = u ? (0, d.safePath)(o.get("redirect")) : g ? null : `${t}${r}`,
            v = (0, f.providerReason)(l);
        window.location.replace((0, p.authErrorRedirect)(m, (0, f.authErrorFor)("callback", v, "oauth_failed"), P, v).toString())
    }

    function g() {
        return (0, r.useEffect)(() => {
            y()
        }, []), null
    }
    var m = e.i(309821),
        b = e.i(51832);
    e.s(["AnalyticsProvider", 0, function({
        children: e
    }) {
        return (0, r.useEffect)(() => {
            (0, m.initPostHog)()
        }, []), (0, r.useEffect)(() => {
            (0, b.initFeatureFlags)()
        }, []), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u, {}), (0, t.jsx)(g, {}), e]
        })
    }], 45744)
}, 975252, e => {
    "use strict";
    e.s(["safePath", 0, function(e) {
        return "string" != typeof e || !e.startsWith("/") || e.startsWith("//") || e.includes("\\") || /[\u0000-\u001f\u007f]/.test(e) || "https://internal.invalid" !== new URL(e, "https://internal.invalid").origin ? null : e
    }])
}, 762384, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useRouterBFCache", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(136263);

    function a(e, t, r) {
        let [a, l] = (0, n.useState)(() => ({
            tree: e,
            cacheNode: t,
            stateKey: r,
            next: null
        }));
        if (a.tree === e) return a;
        let o = {
                tree: e,
                cacheNode: t,
                stateKey: r,
                next: null
            },
            u = 1,
            i = a,
            s = o;
        for (; null !== i && u < 1;) {
            if (i.stateKey === r) {
                s.next = i.next;
                break
            } {
                u++;
                let e = {
                    tree: i.tree,
                    cacheNode: i.cacheNode,
                    stateKey: i.stateKey,
                    next: null
                };
                s.next = e, s = e
            }
            i = i.next
        }
        return l(o), o
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 430801, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ClientPageRoot", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(52644),
        a = e.r(459195),
        l = e.r(136263),
        o = e.r(937709),
        u = e.r(724621),
        i = e.r(817197);

    function s({
        Component: e,
        serverProvidedParams: t
    }) {
        let r, d;
        if (null !== t) r = t.searchParams, d = t.params;
        else {
            let e = (0, l.use)(a.LayoutRouterContext);
            d = null !== e ? e.parentParams : {}, r = (0, o.urlSearchParamsToParsedUrlQuery)((0, l.use)(u.SearchParamsContext))
        }
        let c = (0, i.createClientSearchParams)(r),
            f = (0, i.createClientParams)(d);
        return (0, n.jsx)(e, {
            params: f,
            searchParams: c
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18987, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ClientSegmentRoot", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(52644),
        a = e.r(459195),
        l = e.r(136263),
        o = e.r(817197);

    function u({
        Component: e,
        slots: t,
        serverProvidedParams: r
    }) {
        let i;
        if (null !== r) i = r.params;
        else {
            let e = (0, l.use)(a.LayoutRouterContext);
            i = null !== e ? e.parentParams : {}
        }
        let s = (0, o.createClientParams)(i);
        return (0, n.jsx)(e, { ...t,
            params: s
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 238600, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HTTPAccessFallbackBoundary", {
        enumerable: !0,
        get: function() {
            return d
        }
    });
    let n = e.r(56421),
        a = e.r(52644),
        l = n._(e.r(136263)),
        o = e.r(161681),
        u = e.r(15460),
        i = e.r(459195);
    class s extends l.default.Component {
        constructor(e) {
            super(e), this.state = {
                triggeredStatus: void 0,
                previousPathname: e.pathname
            }
        }
        componentDidCatch() {}
        static getDerivedStateFromError(e) {
            if ((0, u.isHTTPAccessFallbackError)(e)) return {
                triggeredStatus: (0, u.getAccessFallbackHTTPStatus)(e)
            };
            throw e
        }
        static getDerivedStateFromProps(e, t) {
            return e.pathname !== t.previousPathname && t.triggeredStatus ? {
                triggeredStatus: void 0,
                previousPathname: e.pathname
            } : {
                triggeredStatus: t.triggeredStatus,
                previousPathname: e.pathname
            }
        }
        render() {
            let {
                notFound: e,
                forbidden: t,
                unauthorized: r,
                children: n
            } = this.props, {
                triggeredStatus: l
            } = this.state, o = {
                [u.HTTPAccessErrorStatus.NOT_FOUND]: e,
                [u.HTTPAccessErrorStatus.FORBIDDEN]: t,
                [u.HTTPAccessErrorStatus.UNAUTHORIZED]: r
            };
            if (l) {
                let i = l === u.HTTPAccessErrorStatus.NOT_FOUND && e,
                    s = l === u.HTTPAccessErrorStatus.FORBIDDEN && t,
                    d = l === u.HTTPAccessErrorStatus.UNAUTHORIZED && r;
                return i || s || d ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }), !1, o[l]]
                }) : n
            }
            return n
        }
    }

    function d({
        notFound: e,
        forbidden: t,
        unauthorized: r,
        children: n
    }) {
        let u = (0, o.useUntrackedPathname)(),
            c = (0, l.useContext)(i.MissingSlotContext);
        return e || t || r ? (0, a.jsx)(s, {
            pathname: u,
            notFound: e,
            forbidden: t,
            unauthorized: r,
            missingSlots: c,
            children: n
        }) : (0, a.jsx)(a.Fragment, {
            children: n
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 666234, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        InstantValidationBoundaryContext: function() {
            return l
        },
        PlaceValidationBoundaryBelowThisLevel: function() {
            return o
        },
        RenderValidationBoundaryAtThisLevel: function() {
            return u
        },
        SlotMarker: function() {
            return i
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = null,
        o = null,
        u = null,
        i = null;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 889710, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        InstantValidationBoundaryContext: function() {
            return l.InstantValidationBoundaryContext
        },
        PlaceValidationBoundaryBelowThisLevel: function() {
            return l.PlaceValidationBoundaryBelowThisLevel
        },
        RenderValidationBoundaryAtThisLevel: function() {
            return l.RenderValidationBoundaryAtThisLevel
        },
        SlotMarker: function() {
            return l.SlotMarker
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(666234);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 756811, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        LoadingBoundaryProvider: function() {
            return S
        },
        default: function() {
            return C
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(836437),
        o = e.r(56421),
        u = e.r(52644),
        i = o._(e.r(136263)),
        s = l._(e.r(635179)),
        d = e.r(459195),
        c = e.r(563283),
        f = e.r(441655),
        p = e.r(923379),
        _ = e.r(734776),
        h = e.r(238600);
    e.r(889710);
    let y = e.r(489735),
        g = e.r(762384);
    e.r(588633);
    let m = e.r(724621),
        b = e.r(937709),
        P = e.r(57715);
    s.default.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

    function v(e, t, r) {
        let n = e.getClientRects();
        if (0 === n.length) return 0;
        let a = 1 / 0;
        for (let e = 0; e < n.length; e++) {
            let t = n[e];
            t.top < a && (a = t.top)
        }
        return a >= r() && a <= t ? 1 : 2
    }
    i.default.Component;
    let j = function(e) {
        let t = i.default.useRef(null);
        return (0, i.useLayoutEffect)(() => {
            let {
                focusAndScrollRef: r,
                cacheNode: n
            } = e, a = r.forceScroll ? r.scrollRef : n.scrollRef;
            if (null === a || !a.current) return;
            let l = null,
                o = r.hashFragment;
            if (o) {
                var u;
                if (null === (l = "top" === (u = o) ? document.body : document.getElementById(u) ? ? document.getElementsByName(u)[0] ? ? null)) {
                    a.current = !1, r.onlyHashChange = !1, r.hashFragment = null;
                    return
                }
            } else l = t.current;
            if (null === l) return;
            let i = !1;
            (0, p.disableSmoothScrollDuringRouteTransition)(() => {
                let e = document.documentElement,
                    t = null,
                    r = null,
                    n = null,
                    u = () => {
                        var r, a;
                        let l, o;
                        return null === n && (r = e, a = t, n = !Number.isFinite(o = Number.parseFloat(l = getComputedStyle(r).scrollPaddingTop)) || o < 0 ? 0 : l.endsWith("px") ? o : l.endsWith("%") ? o / 100 * a : 0), n
                    };
                (o || (t = e.clientHeight, 0 !== (r = v(l, t, u)))) && ((i = !0, a.current = !1, o) ? l.scrollIntoView() : 1 !== r && (e.scrollTop = 0, 2 === v(l, t, u) && l.scrollIntoView()))
            }, {
                dontForceLayout: !0,
                onlyHashChange: r.onlyHashChange
            }), i && (r.onlyHashChange = !1, r.hashFragment = null)
        }, void 0), (0, u.jsx)(i.Fragment, {
            ref: t,
            children: e.children
        })
    };

    function x({
        children: e,
        cacheNode: t
    }) {
        let r = (0, i.useContext)(d.GlobalLayoutRouterContext);
        if (!r) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: !1,
            configurable: !0
        });
        return (0, u.jsx)(j, {
            focusAndScrollRef: r.focusAndScrollRef,
            cacheNode: t,
            children: e
        })
    }

    function O({
        tree: e,
        segmentPath: t,
        debugNameContext: r,
        cacheNode: n,
        params: a,
        url: l,
        isActive: o
    }) {
        let s, f = (0, i.useContext)(d.GlobalLayoutRouterContext);
        if ((0, i.useContext)(m.NavigationPromisesContext), !f) throw Object.defineProperty(Error("invariant global layout router not mounted"), "__NEXT_ERROR_CODE", {
            value: "E473",
            enumerable: !1,
            configurable: !0
        });
        let p = null !== n ? n : (0, i.use)(c.unresolvedThenable),
            _ = null !== p.prefetchRsc ? p.prefetchRsc : p.rsc,
            h = (0, i.useDeferredValue)(p.rsc, _);
        if ((0, P.isDeferredRsc)(h)) {
            let e = (0, i.use)(h);
            null === e && (0, i.use)(c.unresolvedThenable), s = e
        } else null === h && (0, i.use)(c.unresolvedThenable), s = h;
        let y = s;
        return (0, u.jsx)(d.LayoutRouterContext.Provider, {
            value: {
                parentTree: e,
                parentCacheNode: p,
                parentSegmentPath: t,
                parentParams: a,
                parentLoadingData: null,
                debugNameContext: r,
                url: l,
                isActive: o
            },
            children: y
        })
    }

    function S({
        loading: e,
        children: t
    }) {
        let r = (0, i.use)(d.LayoutRouterContext);
        return null === r ? t : (0, u.jsx)(d.LayoutRouterContext.Provider, {
            value: {
                parentTree: r.parentTree,
                parentCacheNode: r.parentCacheNode,
                parentSegmentPath: r.parentSegmentPath,
                parentParams: r.parentParams,
                parentLoadingData: e,
                debugNameContext: r.debugNameContext,
                url: r.url,
                isActive: r.isActive
            },
            children: t
        })
    }

    function w({
        name: e,
        loading: t,
        children: r
    }) {
        if (null !== t) {
            let n = t[0],
                a = t[1],
                l = t[2];
            return (0, u.jsx)(i.Suspense, {
                name: e,
                fallback: (0, u.jsxs)(u.Fragment, {
                    children: [a, l, n]
                }),
                children: r
            })
        }
        return (0, u.jsx)(u.Fragment, {
            children: r
        })
    }

    function C({
        parallelRouterKey: e,
        error: t,
        errorStyles: r,
        errorScripts: n,
        templateStyles: a,
        templateScripts: l,
        template: o,
        notFound: s,
        forbidden: p,
        unauthorized: m,
        segmentViewBoundaries: P
    }) {
        let v = (0, i.useContext)(d.LayoutRouterContext);
        if (!v) throw Object.defineProperty(Error("invariant expected layout router to be mounted"), "__NEXT_ERROR_CODE", {
            value: "E56",
            enumerable: !1,
            configurable: !0
        });
        let {
            parentTree: j,
            parentCacheNode: S,
            parentSegmentPath: R,
            parentParams: E,
            parentLoadingData: T,
            url: M,
            isActive: k,
            debugNameContext: A
        } = v, N = j[0], I = null === R ? [e] : R.concat([N, e]), F = j[1][e], L = S.slots;
        (void 0 === F || null === L) && (0, i.use)(c.unresolvedThenable);
        let B = F[0],
            D = L[e] ? ? null,
            H = (0, y.createRouterCacheKey)(B, !0),
            $ = (0, g.useRouterBFCache)(F, D, H),
            U = [];
        do {
            let e = $.tree,
                i = $.cacheNode,
                c = $.stateKey,
                y = e[0],
                g = E;
            if (Array.isArray(y)) {
                let e = y[0],
                    t = y[1],
                    r = y[2],
                    n = (0, b.getParamValueFromCacheKey)(t, r);
                null !== n && (g = { ...E,
                    [e]: n
                })
            }
            let P = function(e) {
                    if ("/" === e) return "/";
                    if ("string" == typeof e)
                        if ("(__SLOT__)" === e) return;
                        else return e + "/";
                    return e[1] + "/"
                }(y),
                v = P ? ? A,
                j = void 0 === P ? void 0 : A,
                S = (0, u.jsxs)(x, {
                    cacheNode: i,
                    children: [(0, u.jsx)(f.ErrorBoundary, {
                        errorComponent: t,
                        errorStyles: r,
                        errorScripts: n,
                        children: (0, u.jsx)(w, {
                            name: j,
                            loading: T,
                            children: (0, u.jsx)(h.HTTPAccessFallbackBoundary, {
                                notFound: s,
                                forbidden: p,
                                unauthorized: m,
                                children: (0, u.jsxs)(_.RedirectBoundary, {
                                    children: [(0, u.jsx)(O, {
                                        url: M,
                                        tree: e,
                                        params: g,
                                        cacheNode: i,
                                        segmentPath: I,
                                        debugNameContext: v,
                                        isActive: k && c === H
                                    }), null]
                                })
                            })
                        })
                    }), null]
                }),
                C = (0, u.jsxs)(d.TemplateContext.Provider, {
                    value: S,
                    children: [a, l, o]
                }, c);
            U.push(C), $ = $.next
        } while (null !== $) return U
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 409879, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(56421),
        a = e.r(52644),
        l = n._(e.r(136263)),
        o = e.r(459195);

    function u() {
        let e = (0, l.useContext)(o.TemplateContext);
        return (0, a.jsx)(a.Fragment, {
            children: e
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 31098, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return o
        },
        requestIdleCallback: function() {
            return l
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        o = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 918909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        ESCAPE_REGEX: function() {
            return o
        },
        htmlEscapeAttributeString: function() {
            return d
        },
        htmlEscapeJsonString: function() {
            return s
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = {
            "&": "\\u0026",
            ">": "\\u003e",
            "<": "\\u003c",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029"
        },
        o = /[&><\u2028\u2029]/g,
        u = {
            "&": "&amp;",
            '"': "&quot;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;"
        },
        i = /[&"'<>]/g;

    function s(e) {
        return e.replace(o, e => l[e])
    }

    function d(e) {
        return e.replace(i, e => u[e])
    }
}, 680858, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return P
        },
        handleClientScriptLoad: function() {
            return g
        },
        initScriptLoader: function() {
            return m
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(836437),
        o = e.r(56421),
        u = e.r(52644),
        i = l._(e.r(635179)),
        s = o._(e.r(136263)),
        d = e.r(905432),
        c = e.r(77614),
        f = e.r(31098),
        p = e.r(918909),
        _ = new Map,
        h = new Set,
        y = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: a = null,
                dangerouslySetInnerHTML: l,
                children: o = "",
                strategy: u = "afterInteractive",
                onError: s,
                stylesheets: d
            } = e, f = r || t;
            if (f && h.has(f)) return;
            if (_.has(t)) {
                h.add(f), _.get(t).then(n, s);
                return
            }
            let p = () => {
                    a && a(), h.add(f)
                },
                y = document.createElement("script"),
                g = new Promise((e, t) => {
                    y.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), p()
                    }), y.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    s && s(e)
                });
            l ? (y.innerHTML = l.__html || "", p()) : o ? (y.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", p()) : t && (y.src = t, _.set(t, g)), (0, c.setAttributesFromProps)(y, e), "worker" === u && y.setAttribute("type", "text/partytown"), y.setAttribute("data-nscript", u), d && (e => {
                if (i.default.preinit) return e.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(d), document.body.appendChild(y)
        };

    function g(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, f.requestIdleCallback)(() => y(e))
        }) : y(e)
    }

    function m(e) {
        e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            h.add(t)
        })
    }

    function b(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: a = null,
            strategy: l = "afterInteractive",
            onError: o,
            stylesheets: c,
            ..._
        } = e, {
            updateScripts: g,
            scripts: m,
            getIsSsr: b,
            appDir: P,
            nonce: v
        } = (0, s.useContext)(d.HeadManagerContext);
        v = _.nonce || v;
        let j = (0, s.useRef)(!1);
        (0, s.useEffect)(() => {
            let e = t || r;
            j.current || (a && e && h.has(e) && a(), j.current = !0)
        }, [a, t, r]);
        let x = (0, s.useRef)(!1);
        if ((0, s.useEffect)(() => {
                if (!x.current) {
                    if ("afterInteractive" === l) y(e);
                    else "lazyOnload" === l && ("complete" === document.readyState ? (0, f.requestIdleCallback)(() => y(e)) : window.addEventListener("load", () => {
                        (0, f.requestIdleCallback)(() => y(e))
                    }));
                    x.current = !0
                }
            }, [e, l]), ("beforeInteractive" === l || "worker" === l) && (g ? (m[l] = (m[l] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: a,
                onError: o,
                ..._,
                nonce: v
            }]), g(m)) : b && b() ? h.add(t || r) : b && !b() && y({ ...e,
                nonce: v
            })), P) {
            if (c && c.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === l)
                if (!r) return _.dangerouslySetInnerHTML && (_.children = _.dangerouslySetInnerHTML.__html, delete _.dangerouslySetInnerHTML), (0, u.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([0,{..._,id:t}]))})`
                    }
                });
                else return i.default.preload(r, _.integrity ? {
                    as: "script",
                    integrity: _.integrity,
                    nonce: v,
                    crossOrigin: _.crossOrigin
                } : {
                    as: "script",
                    nonce: v,
                    crossOrigin: _.crossOrigin
                }), (0, u.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${(0,p.htmlEscapeJsonString)(JSON.stringify([r,{..._,id:t}]))})`
                    }
                });
            "afterInteractive" === l && r && i.default.preload(r, _.integrity ? {
                as: "script",
                integrity: _.integrity,
                nonce: v,
                crossOrigin: _.crossOrigin
            } : {
                as: "script",
                nonce: v,
                crossOrigin: _.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(b, "__nextScript", {
        value: !0
    });
    let P = b;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 485452, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = new WeakMap;

    function a(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return n.set(e, r), r
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 392203, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderParamsFromClient", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(485452).createRenderParamsFromClient;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 830002, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = new WeakMap;

    function a(e) {
        let t = n.get(e);
        if (t) return t;
        let r = Promise.resolve(e);
        return n.set(e, r), r
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 772736, (e, t, r) => {
    "use strict";
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "createRenderSearchParamsFromClient", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(830002).createRenderSearchParamsFromClient;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 817197, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        createClientParams: function() {
            return l.createRenderParamsFromClient
        },
        createClientSearchParams: function() {
            return o.createRenderSearchParamsFromClient
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let l = e.r(392203),
        o = e.r(772736);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 75155, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "IconMark", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(52644),
        a = () => "u" > typeof window ? null : (0, n.jsx)("meta", {
            name: "«nxt-icon»"
        })
}, 923379, (e, t, r) => {
    "use strict";

    function n(e, t = {}) {
        if (t.onlyHashChange) return void e();
        let r = document.documentElement;
        if ("smooth" !== r.dataset.scrollBehavior) return void e();
        let a = r.style.scrollBehavior;
        r.style.scrollBehavior = "auto", t.dontForceLayout || r.getClientRects(), e(), r.style.scrollBehavior = a
    }
    e.i(301016), Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "disableSmoothScrollDuringRouteTransition", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}]);