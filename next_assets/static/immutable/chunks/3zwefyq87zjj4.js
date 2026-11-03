(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 377339, e => {
    "use strict";
    e.i(301016);
    var t = e.i(393055);
    let r = "https://creation-api.pika.art";

    function n(e) {
        return 401 === e ? "UNAUTHORIZED" : 403 === e ? "FORBIDDEN" : `HTTP_${e}`
    }
    class a extends Error {
        code;
        status;
        constructor(e, t, r) {
            super(t), this.name = "ApiError", this.code = e, this.status = r
        }
    }

    function i(e, r) {
        return e ? {
            Authorization: `Bearer ${e}`,
            [t.WORKSPACE_HEADER]: r ? ? (0, t.pageWorkspace)()
        } : {}
    }
    async function s(e, {
        token: t,
        method: n,
        body: o,
        searchParams: l,
        headers: c,
        workspace: d
    } = {}) {
        let f, g = new URL(e.startsWith("http") ? e : `${r}${e}`);
        if (l)
            for (let [e, t] of Object.entries(l))
                if (Array.isArray(t))
                    for (let r of t) g.searchParams.append(e, r);
                else g.searchParams.set(e, t);
        let p = { ...c,
            ...i(t, d)
        };
        !o || o instanceof FormData || (p["Content-Type"] = "application/json");
        try {
            f = await fetch(g, {
                method: n ? ? (o ? "POST" : "GET"),
                headers: p,
                body: o
            })
        } catch (e) {
            throw new a("NETWORK", e.message, 0)
        }
        return u(f)
    }

    function o(e, t) {
        let r = e.split(/\r?\n\r?\n/),
            n = r.pop() ? ? "";
        for (let e of r) {
            let r = "message",
                n = [];
            for (let t of e.split(/\r?\n/)) t.startsWith("event:") ? r = t.slice(6).trim() : t.startsWith("data:") && n.push(t.slice(5).trimStart());
            n.length && t(r, n.join("\n"))
        }
        return n
    }
    async function l(e, {
        token: t,
        workspace: s,
        signal: c
    }, d) {
        let f;
        try {
            f = await fetch(e.startsWith("http") ? e : `${r}${e}`, {
                headers: {
                    Accept: "text/event-stream",
                    ...i(t, s)
                },
                signal: c
            })
        } catch (e) {
            if (c ? .aborted) return "aborted";
            throw new a("NETWORK", e.message, 0)
        }
        if (204 === f.status) return "empty";
        if (!f.ok) throw await u(f), new a(n(f.status), "Stream refused", f.status);
        let g = f.body ? .getReader();
        if (!g) return "ended";
        let p = new TextDecoder,
            h = "";
        try {
            for (;;) {
                let {
                    done: e,
                    value: t
                } = await g.read();
                if (e) break;
                h = o(h + p.decode(t, {
                    stream: !0
                }), d)
            }
            o(h + p.decode(), d)
        } catch (e) {
            if (c ? .aborted) return "aborted";
            throw e
        }
        return c ? .aborted ? "aborted" : "ended"
    }
    async function u(e) {
        let t;
        try {
            t = await e.json()
        } catch {
            throw new a("NETWORK", `Non-JSON response (${e.status})`, e.status)
        }
        let r = t;
        if (!e.ok || !r || !0 !== r.success) {
            if (r && !1 === r.success && r.error) throw new a(r.error.code, r.error.message, e.status);
            let i = t,
                s = t,
                o = "string" == typeof s ? .message ? s.message : "string" == typeof s ? .detail ? s.detail : "string" == typeof i ? .data ? .message ? i.data.message : null;
            if (o) throw new a(n(e.status), o, e.status);
            throw new a("NETWORK", `Request failed (${e.status})`, e.status)
        }
        return r.data
    }
    async function c(e, {
        token: t,
        workspace: r,
        stopWhen: n,
        maxPages: a = 20,
        cursorParam: i = "cursor",
        limit: o = 100,
        searchParams: l
    } = {}) {
        let u = [],
            d = null;
        for (let c = 0; c < a; c++) {
            let a = { ...l,
                limit: String(o)
            };
            d && (a[i] = d);
            let c = await s(e, {
                token: t,
                workspace: r,
                searchParams: a
            });
            if (u.push(c), !(d = c.next_cursor) || n ? .(c)) return {
                pages: u,
                truncated: !1
            }
        }
        return {
            pages: u,
            truncated: null !== d
        }
    }
    async function d(e, t = {}) {
        let {
            pages: r
        } = await c(e, t);
        return r
    }
    e.s(["ApiError", 0, a, "apiEventStream", 0, l, "apiFetch", 0, s, "apiFetchAllPages", 0, d, "apiFetchPagesUntil", 0, c, "isAuthError", 0, function(e) {
        return e instanceof a && 401 === e.status
    }, "isDefiniteRejection", 0, function(e) {
        return e instanceof a && "NETWORK" !== e.code && e.status >= 400 && e.status < 500 && 408 !== e.status
    }, "readApiResponse", 0, u])
}, 392212, 255207, e => {
    "use strict";
    var t = e.i(164715),
        r = e.i(867148);
    async function n() {
        if ((0, r.isMockMode)()) return (0, r.mockUserId)() ? "mock" : null;
        let {
            data: e
        } = await (0, t.createClient)().auth.getSession();
        return e.session ? .access_token ? ? null
    }
    async function a(e) {
        return e && "token" in e ? e.token ? ? null : n()
    }
    e.s(["getClientToken", 0, n], 255207), e.s(["readToken", 0, a], 392212)
}, 683399, e => {
    "use strict";
    var t = e.i(136263),
        r = e.i(284412),
        n = e.i(912788),
        a = e.i(165199),
        i = e.i(316047),
        i = i,
        s = e.i(525881),
        o = e.i(284509),
        l = e.i(680565),
        u = e.i(955023),
        c = e.i(336349),
        d = e.i(315929),
        f = e.i(680331),
        g = e.i(118850);
    let p = () => {},
        h = p(),
        w = Object,
        E = e => e === h,
        m = new WeakMap,
        y = (e, t) => e === `[object ${t}]`,
        b = 0,
        v = e => {
            let t, r, n = typeof e,
                a = w.prototype.toString.call(e),
                i = y(a, "Date"),
                s = y(a, "RegExp"),
                o = y(a, "Object");
            if (w(e) !== e || i || s) t = i ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
            else {
                if (t = m.get(e)) return t;
                if (t = ++b + "~", m.set(e, t), Array.isArray(e)) {
                    for (r = 0, t = "@"; r < e.length; r++) t += v(e[r]) + ",";
                    m.set(e, t)
                }
                if (o) {
                    t = "#";
                    let n = w.keys(e).sort();
                    for (; !E(r = n.pop());) E(e[r]) || (t += r + ":" + v(e[r]) + ",");
                    m.set(e, t)
                }
            }
            return t
        },
        R = e => (e => {
            if ("function" == typeof e) try {
                e = e()
            } catch (t) {
                e = ""
            }
            let t = e;
            return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? v(e) : "", t]
        })(e ? e(0, null) : null)[0],
        _ = Promise.resolve(),
        k = (0, r.withMiddleware)(n.default, e => (r, n, p) => {
            let h, w = (0, t.useRef)(!1),
                {
                    cache: E,
                    initialSize: m = 1,
                    revalidateAll: y = !1,
                    persistSize: b = !1,
                    revalidateFirstPage: v = !0,
                    revalidateOnMount: k = !1,
                    parallel: O = !1
                } = p,
                [, , , T] = a.SWRGlobalState.get(i.c);
            try {
                (h = R(r)) && (h = s.INFINITE_PREFIX + h)
            } catch (e) {}
            let [S, C, A] = (0, o.createCacheHelper)(E, h), N = (0, t.useCallback)(() => (0, l.isUndefined)(S()._l) ? m : S()._l, [E, h, m]);
            (0, g.useSyncExternalStore)((0, t.useCallback)(e => h ? A(h, () => {
                e()
            }) : () => {}, [E, h]), N, N);
            let I = (0, t.useCallback)(() => {
                    let e = S()._l;
                    return (0, l.isUndefined)(e) ? m : e
                }, [h, m]),
                D = (0, t.useRef)(I());
            (0, u.useIsomorphicLayoutEffect)(() => {
                if (!w.current) {
                    w.current = !0;
                    return
                }
                h && C({
                    _l: b ? D.current : I()
                })
            }, [h, E]);
            let W = k && !w.current,
                P = e(h, async e => {
                    let t = S()._i,
                        a = S()._r;
                    C({
                        _r: c.UNDEFINED
                    });
                    let i = [],
                        s = I(),
                        [u] = (0, o.createCacheHelper)(E, e),
                        f = u().data,
                        g = [],
                        h = null;
                    for (let e = 0; e < s; ++e) {
                        let [s, u] = (0, d.serialize)(r(e, O ? null : h));
                        if (!s) break;
                        let [c, w] = (0, o.createCacheHelper)(E, s), m = c().data, b = y || t || (0, l.isUndefined)(m) || v && !e && !(0, l.isUndefined)(f) || W || f && !(0, l.isUndefined)(f[e]) && !p.compare(f[e], m);
                        if (n && ("function" == typeof a ? a(m, u) : b)) {
                            let t = async () => {
                                if (s in T) {
                                    let e = T[s];
                                    delete T[s], m = await e
                                } else m = await n(u);
                                w({
                                    data: m,
                                    _k: u
                                }), i[e] = m
                            };
                            O ? g.push(t) : await t()
                        } else i[e] = m;
                        O || (h = m)
                    }
                    return O && await Promise.all(g.map(e => e())), C({
                        _i: c.UNDEFINED
                    }), i
                }, p),
                U = (0, t.useCallback)(function(e, t) {
                    let r = "boolean" == typeof t ? {
                            revalidate: t
                        } : t || {},
                        n = !1 !== r.revalidate;
                    return h ? (n && ((0, l.isUndefined)(e) ? C({
                        _i: !0,
                        _r: r.revalidate
                    }) : C({
                        _i: !1,
                        _r: r.revalidate
                    })), arguments.length ? P.mutate(e, { ...r,
                        revalidate: n
                    }) : P.mutate()) : _
                }, [h, E]),
                L = (0, t.useCallback)(e => {
                    let t;
                    if (!h) return _;
                    let [, n] = (0, o.createCacheHelper)(E, h);
                    if ((0, f.isFunction)(e) ? t = e(I()) : "number" == typeof e && (t = e), "number" != typeof t) return _;
                    n({
                        _l: t
                    }), D.current = t;
                    let a = [],
                        [i] = (0, o.createCacheHelper)(E, h),
                        s = null;
                    for (let e = 0; e < t; ++e) {
                        let [t] = (0, d.serialize)(r(e, s)), [n] = (0, o.createCacheHelper)(E, t), u = t ? n().data : c.UNDEFINED;
                        if ((0, l.isUndefined)(u)) return U(i().data);
                        a.push(u), s = u
                    }
                    return U(a)
                }, [h, E, U, I]);
            return {
                size: I(),
                setSize: L,
                mutate: U,
                get data() {
                    return P.data
                },
                get error() {
                    return P.error
                },
                get isValidating() {
                    return P.isValidating
                },
                get isLoading() {
                    return P.isLoading
                }
            }
        }),
        O = [],
        T = (e, t) => (r, n) => t && (!n || n.next_cursor) ? [...e, 0 === r ? "" : n ? .next_cursor ? ? ""] : null,
        S = e => {
            let t;
            return t = T(e, !0), s.INFINITE_PREFIX + R(t)
        };
    e.s(["cursorPagesKey", 0, S, "useCursorPages", 0, function(e, n, a) {
        let {
            enabled: i = !0,
            pollWhere: s,
            ...o
        } = a ? ? {}, {
            cache: l
        } = (0, r.useSWRConfig)(), {
            data: u,
            isLoading: c,
            error: d,
            size: f,
            setSize: g,
            mutate: p
        } = k(T(e, i), e => n(e.at(-1) || null), {
            initialSize: Array.isArray(o.fallbackData) ? Math.max(1, o.fallbackData.length) : 1,
            ...o
        }), h = i && !!o.keepPreviousData && void 0 !== u && l.get(S(e)) ? .data === void 0, w = !i || !u || h && d ? O : u, E = h && !d, m = !E && !!w.at(-1) ? .next_cursor, y = (0, t.useCallback)(() => p(), [p]), b = (0, t.useCallback)(() => g(f + 1), [g, f]), v = (0, t.useCallback)(e => p(e => e, {
            revalidate: t => e(t)
        }), [p]), R = s ? .predicate, _ = s ? .interval, C = i && !!R && w.some(R);
        return (0, t.useEffect)(() => {
            if (!C || !R || !_) return;
            let e = setInterval(() => {
                "visible" === document.visibilityState && v(R)
            }, _);
            return () => clearInterval(e)
        }, [C, R, _, v]), {
            pages: w,
            isLoading: c && !E,
            stale: E,
            error: d,
            loadMoreError: m && f > w.length ? d : void 0,
            isLoadingMore: !E && !d && f > 0 && !!u && void 0 === u[f - 1],
            hasMore: m,
            loadMore: b,
            refresh: y,
            revalidateWhere: v,
            mutate: p
        }
    }], 683399)
}, 393055, e => {
    "use strict";
    let t = "personal";

    function r(e) {
        return `team:${e}`
    }
    let n = null,
        a = null;

    function i() {
        return n ? ? t
    }

    function s(e) {
        document.cookie = `creation-workspace=${a??""}|${e}; path=/; max-age=31536000; samesite=lax`
    }

    function o(e, t) {
        return e.startsWith(`${t}/`) && e.length > t.length + 1
    }

    function l(e, t) {
        s(e), window.location.assign(t)
    }
    e.s(["PERSONAL", 0, t, "WORKSPACE_HEADER", 0, "X-Creation-Workspace", "enterWorkspace", 0, l, "followWorkspace", 0, function(e) {
        s(e), window.location.reload()
    }, "isProjectScopedPath", 0, o, "leaveWorkspace", 0, function(e) {
        l(t, e)
    }, "pageWorkspace", 0, i, "pinWorkspace", 0, function(e) {
        return n ? ? = e
    }, "pinWorkspaceOwner", 0, function(e) {
        a = e
    }, "projectWorkspace", 0, function(e) {
        return e.team_id ? r(e.team_id) : t
    }, "switchWorkspace", 0, function(e) {
        s(e);
        let t = new URL(window.location.href);
        o(t.pathname, "/projects") || o(t.pathname, "/agent") || t.searchParams.has("project_id") ? window.location.assign("/home") : t.searchParams.has("job") ? (t.searchParams.delete("job"), window.location.assign(t.href)) : window.location.reload()
    }, "teamWorkspace", 0, r, "workspaceArg", 0, function(e = 0) {
        let r = i();
        return r === t ? [] : e ? [void 0, r] : [r]
    }, "workspaceTeamId", 0, function(e) {
        return e === t ? null : e.slice(5)
    }])
}, 864636, e => {
    "use strict";
    var t = e.i(316047);
    e.s(["mutate", () => t.j])
}, 284412, 447493, 316047, 525881, e => {
    "use strict";
    var t = e.i(136263);
    e.s(["ERROR_REVALIDATE_EVENT", 0, 3, "FOCUS_EVENT", 0, 0, "MUTATE_EVENT", 0, 2, "RECONNECT_EVENT", 0, 1], 447493);
    var r = Object.prototype.hasOwnProperty;
    let n = new WeakMap,
        a = () => {},
        i = a(),
        s = Object,
        o = e => e === i,
        l = e => "function" == typeof e,
        u = (e, t) => ({ ...e,
            ...t
        }),
        c = e => l(e.then),
        d = {},
        f = {},
        g = "undefined",
        p = typeof window != g,
        h = typeof document != g,
        w = p && "Deno" in window,
        E = (e, t) => {
            let r = n.get(e);
            return [() => !o(t) && e.get(t) || d, n => {
                if (!o(t)) {
                    let a = e.get(t);
                    t in f || (f[t] = a), r[5](t, u(a, n), a || d)
                }
            }, r[6], () => !o(t) && t in f ? f[t] : !o(t) && e.get(t) || d]
        },
        m = !0,
        [y, b] = p && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [a, a],
        v = {
            initFocus: e => (h && document.addEventListener("visibilitychange", e), y("focus", e), () => {
                h && document.removeEventListener("visibilitychange", e), b("focus", e)
            }),
            initReconnect: e => {
                let t = () => {
                        m = !0, e()
                    },
                    r = () => {
                        m = !1
                    };
                return y("online", t), y("offline", r), () => {
                    b("online", t), b("offline", r)
                }
            }
        },
        R = !t.default.useId,
        _ = !p || w,
        k = _ ? t.useEffect : t.useLayoutEffect,
        O = "u" > typeof navigator && navigator.connection,
        T = !_ && O && (["slow-2g", "2g"].includes(O.effectiveType) || O.saveData),
        S = new WeakMap,
        C = (e, t) => e === `[object ${t}]`,
        A = 0,
        N = e => {
            let t, r, n = typeof e,
                a = s.prototype.toString.call(e),
                i = C(a, "Date"),
                l = C(a, "RegExp"),
                u = C(a, "Object");
            if (s(e) !== e || i || l) t = i ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
            else {
                if (t = S.get(e)) return t;
                if (t = ++A + "~", S.set(e, t), Array.isArray(e)) {
                    for (r = 0, t = "@"; r < e.length; r++) t += N(e[r]) + ",";
                    S.set(e, t)
                }
                if (u) {
                    t = "#";
                    let n = s.keys(e).sort();
                    for (; !o(r = n.pop());) o(e[r]) || (t += r + ":" + N(e[r]) + ",");
                    S.set(e, t)
                }
            }
            return t
        },
        I = e => {
            if (l(e)) try {
                e = e()
            } catch (t) {
                e = ""
            }
            let t = e;
            return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? N(e) : "", t]
        },
        D = 0,
        W = () => ++D;
    async function P(...e) {
        let [t, r, a, s] = e, d = u({
            populateCache: !0,
            throwOnError: !0
        }, "boolean" == typeof s ? {
            revalidate: s
        } : s || {}), f = d.populateCache, g = d.rollbackOnError, p = d.optimisticData, h = d.throwOnError;
        if (l(r)) {
            let e = [];
            for (let n of t.keys()) !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
            return Promise.all(e.map(w))
        }
        return w(r);
        async function w(r) {
            let s, [u] = I(r);
            if (!u) return;
            let [w, m] = E(t, u), [y, b, v, R] = n.get(t), _ = () => {
                let e = y[u];
                return (l(d.revalidate) ? d.revalidate(w().data, r) : !1 !== d.revalidate) && (delete v[u], delete R[u], e && e[0]) ? e[0](2).then(() => w().data) : w().data
            };
            if (e.length < 3) return _();
            let k = a,
                O = !1,
                T = W();
            b[u] = [T, 0];
            let S = !o(p),
                C = w(),
                A = C.data,
                N = C._c,
                D = o(N) ? A : N;
            if (S && m({
                    data: p = l(p) ? p(D, A) : p,
                    _c: D
                }), l(k)) try {
                k = k(D)
            } catch (e) {
                s = e, O = !0
            }
            if (k && c(k)) {
                let e;
                if (k = await k.catch(e => {
                        s = e, O = !0
                    }), T !== b[u][0]) {
                    if (O) throw s;
                    return k
                }
                O && S && (e = s, "function" == typeof g ? g(e) : !1 !== g) && (f = !0, m({
                    data: D,
                    _c: i
                }))
            }
            if (f && !O && (l(f) ? m({
                    data: f(k, D),
                    error: i,
                    _c: i
                }) : m({
                    data: k,
                    error: i,
                    _c: i
                })), b[u][1] = W(), Promise.resolve(_()).then(() => {
                    m({
                        _c: i
                    })
                }), O) {
                if (h) throw s;
                return
            }
            return k
        }
    }
    let U = (e, t) => {
            for (let r in e) e[r][0] && e[r][0](t)
        },
        L = (e, t) => {
            if (!n.has(e)) {
                let r = u(v, t),
                    s = Object.create(null),
                    o = P.bind(i, e),
                    l = a,
                    c = Object.create(null),
                    d = (e, t) => {
                        let r = c[e] || [];
                        return c[e] = r, r.push(t), () => {
                            let e = r.indexOf(t);
                            e >= 0 && (r[e] = r[r.length - 1], r.pop())
                        }
                    },
                    f = (t, r, n) => {
                        e.set(t, r);
                        let a = c[t];
                        if (a)
                            for (let e of a) e(r, n)
                    },
                    g = () => {
                        if (!n.has(e) && (n.set(e, [s, Object.create(null), Object.create(null), Object.create(null), o, f, d]), !_)) {
                            let t = r.initFocus(setTimeout.bind(i, U.bind(i, s, 0))),
                                a = r.initReconnect(setTimeout.bind(i, U.bind(i, s, 1)));
                            l = () => {
                                t && t(), a && a(), n.delete(e)
                            }
                        }
                    };
                return g(), [e, o, g, l]
            }
            return [e, n.get(e)[4]]
        },
        [V, j] = L(new Map),
        F = u({
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: (e, t, r, n, a) => {
                let i = r.errorRetryCount,
                    s = a.retryCount,
                    l = ~~((Math.random() + .5) * (1 << (s < 8 ? s : 8))) * r.errorRetryInterval;
                (o(i) || !(s > i)) && setTimeout(n, l, a)
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: T ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: T ? 5e3 : 3e3,
            compare: function e(t, n) {
                var a, i;
                if (t === n) return !0;
                if (t && n && (a = t.constructor) === n.constructor) {
                    if (a === Date) return t.getTime() === n.getTime();
                    if (a === RegExp) return t.toString() === n.toString();
                    if (a === Array) {
                        if ((i = t.length) === n.length)
                            for (; i-- && e(t[i], n[i]););
                        return -1 === i
                    }
                    if (!a || "object" == typeof t) {
                        for (a in i = 0, t)
                            if (r.call(t, a) && ++i && !r.call(n, a) || !(a in n) || !e(t[a], n[a])) return !1;
                        return Object.keys(n).length === i
                    }
                }
                return t != t && n != n
            },
            isPaused: () => !1,
            cache: V,
            mutate: j,
            fallback: {}
        }, {
            isOnline: () => m,
            isVisible: () => {
                let e = h && document.visibilityState;
                return o(e) || "hidden" !== e
            }
        }),
        x = (e, t) => {
            let r = u(e, t);
            if (t) {
                let {
                    use: n,
                    fallback: a
                } = e, {
                    use: i,
                    fallback: s
                } = t;
                n && i && (r.use = n.concat(i)), a && s && (r.fallback = u(a, s))
            }
            return r
        },
        M = (0, t.createContext)({});
    e.s(["A", 0, a, "B", 0, c, "I", 0, _, "O", 0, s, "S", 0, M, "U", 0, i, "a", 0, l, "b", 0, n, "c", 0, V, "d", 0, F, "e", 0, o, "f", 0, x, "g", 0, e => {
        let {
            value: r
        } = e, n = (0, t.useContext)(M), a = l(r), s = (0, t.useMemo)(() => a ? r(n) : r, [a, n, r]), o = (0, t.useMemo)(() => a ? s : x(n, s), [a, n, s]), c = s && s.provider, d = (0, t.useRef)(i);
        c && !d.current && (d.current = L(c(o.cache || V), s));
        let f = d.current;
        return f && (o.cache = f[0], o.mutate = f[1]), k(() => {
            if (f) return f[2] && f[2](), f[3]
        }, []), (0, t.createElement)(M.Provider, u(e, {
            value: o
        }))
    }, "i", 0, p, "j", 0, j, "m", 0, u, "n", 0, P, "o", 0, W, "r", 0, R, "s", 0, I, "t", 0, e => p && typeof window.requestAnimationFrame != g ? window.requestAnimationFrame(e) : setTimeout(e, 1), "u", 0, k, "z", 0, E], 316047), e.i(447493);
    let $ = "$inf$";
    e.s(["INFINITE_PREFIX", 0, $], 525881);
    let H = p && window.__SWR_DEVTOOLS_USE__,
        z = H ? window.__SWR_DEVTOOLS_USE__ : [],
        K = e => l(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        B = () => {
            let e = (0, t.useContext)(M);
            return (0, t.useMemo)(() => u(F, e), [e])
        },
        J = z.concat(e => (t, r, a) => {
            let i = r && ((...e) => {
                let [a] = I(t), [, , , i] = n.get(V);
                if (a.startsWith($)) return r(...e);
                let s = i[a];
                return o(s) ? r(...e) : (delete i[a], s)
            });
            return e(t, i, a)
        });
    H && (window.__SWR_DEVTOOLS_REACT__ = t.default), e.s(["subscribeCallback", 0, (e, t, r) => {
        let n = t[e] || (t[e] = []);
        return n.push(r), () => {
            let e = n.indexOf(r);
            e >= 0 && (n[e] = n[n.length - 1], n.pop())
        }
    }, "useSWRConfig", 0, B, "withArgs", 0, e => function(...t) {
        let r = B(),
            [n, a, i] = K(t),
            s = x(r, i),
            o = e,
            {
                use: l
            } = s,
            u = (l || []).concat(J);
        for (let e = u.length; e--;) o = u[e](o);
        return o(n, a || s.fetcher || null, s)
    }, "withMiddleware", 0, (e, t) => (...r) => {
        let [n, a, i] = K(r), s = (i.use || []).concat(t);
        return e(n, a, { ...i,
            use: s
        })
    }], 284412)
}, 912788, 336349, 165199, 315929, 284509, 680565, 680331, 955023, e => {
    "use strict";
    var t = e.i(136263),
        r = e.i(118850),
        n = e.i(316047);
    e.s(["UNDEFINED", () => n.U], 336349);
    var n = n,
        a = n,
        i = n,
        s = n,
        o = e.i(284412),
        l = n;
    e.s(["SWRGlobalState", () => l.b], 165199);
    var l = n,
        u = n;
    e.s(["serialize", () => u.s], 315929);
    var u = n,
        c = n;
    e.s(["createCacheHelper", () => c.z], 284509);
    var c = n,
        d = n;
    e.s(["isUndefined", () => d.e], 680565);
    var d = n,
        f = n,
        g = n,
        p = n,
        h = n,
        w = n;
    e.s(["isFunction", () => w.a], 680331);
    var w = n,
        E = e.i(447493),
        E = E,
        m = n,
        y = n;
    e.s(["useIsomorphicLayoutEffect", () => y.u], 955023);
    var y = n,
        b = n,
        v = n,
        R = n;
    let _ = () => {},
        k = _(),
        O = (new WeakMap, t.default.use || (e => {
            switch (e.status) {
                case "pending":
                    throw e;
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason;
                default:
                    throw e.status = "pending", e.then(t => {
                        e.status = "fulfilled", e.value = t
                    }, t => {
                        e.status = "rejected", e.reason = t
                    }), e
            }
        })),
        T = {
            dedupe: !0
        },
        S = Promise.resolve(n.U);
    S.status = "fulfilled", S.value = n.U;
    let C = () => p.A,
        A = a.O.defineProperty(i.g, "defaultValue", {
            value: s.d
        }),
        N = (0, o.withArgs)((e, a, i) => {
            let {
                cache: s,
                compare: p,
                suspense: _,
                fallbackData: k,
                revalidateOnMount: A,
                revalidateIfStale: N,
                refreshInterval: I,
                refreshWhenHidden: D,
                refreshWhenOffline: W,
                keepPreviousData: P,
                strictServerPrefetchWarning: U
            } = i, [L, V, j, F] = l.b.get(s), [x, M] = (0, u.s)(e), $ = (0, t.useRef)(!1), H = (0, t.useRef)(!1), z = (0, t.useRef)(x), K = (0, t.useRef)(a), B = (0, t.useRef)(i), J = () => B.current.isVisible() && B.current.isOnline(), [q, X, G, Y] = (0, c.z)(s, x), Z = (0, t.useRef)({}).current, Q = (0, d.e)(k) ? (0, d.e)(i.fallback) ? n.U : i.fallback[x] : k, ee = (e, t) => {
                for (let r in Z)
                    if ("data" === r) {
                        if (!p(e[r], t[r]) && (!(0, d.e)(e[r]) || !p(eu, t[r]))) return !1
                    } else if (t[r] !== e[r]) return !1;
                return !0
            }, et = !$.current, er = (0, t.useMemo)(() => {
                let e = q(),
                    t = Y(),
                    r = e => {
                        let t = (0, R.m)(e);
                        return (delete t._k, (() => {
                            if (!x || !a || B.current.isPaused()) return !1;
                            if (et && !(0, d.e)(A)) return A;
                            let e = (0, d.e)(Q) ? t.data : Q;
                            return (0, d.e)(e) || N
                        })()) ? {
                            isValidating: !0,
                            isLoading: !0,
                            ...t
                        } : t
                    },
                    n = r(e),
                    i = e === t ? n : r(t),
                    s = n;
                return [() => {
                    let e = r(q());
                    return ee(e, s) ? (s.data = e.data, s.isLoading = e.isLoading, s.isValidating = e.isValidating, s.error = e.error, s) : (s = e, e)
                }, () => i]
            }, [s, x]), en = (0, r.useSyncExternalStore)((0, t.useCallback)(e => G(x, (t, r) => {
                ee(r, t) || e()
            }), [s, x]), er[0], er[1]), ea = L[x] && L[x].length > 0, ei = en.data, es = (0, d.e)(ei) ? Q && (0, f.B)(Q) ? O(Q) : Q : ei, eo = en.error, el = (0, t.useRef)(es), eu = P ? (0, d.e)(ei) ? (0, d.e)(el.current) ? es : el.current : ei : es, ec = x && (0, d.e)(es), ed = (0, t.useRef)(null);
            g.I || (0, r.useSyncExternalStore)(C, () => (ed.current = !1, ed), () => (ed.current = !0, ed));
            let ef = ed.current;
            U && ef && !_ && ec && console.warn(`Missing pre-initiated data for serialized key "${x}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
            let eg = !(!x || !a || B.current.isPaused()) && (!ea || !!(0, d.e)(eo)) && (et && !(0, d.e)(A) ? A : _ ? !(0, d.e)(es) && N : (0, d.e)(es) || N),
                ep = et && eg,
                eh = (0, d.e)(en.isValidating) ? ep : en.isValidating,
                ew = (0, d.e)(en.isLoading) ? ep : en.isLoading,
                eE = (0, t.useCallback)(async e => {
                    let t, r, a = K.current;
                    if (!x || !a || H.current || B.current.isPaused()) return !1;
                    let s = !0,
                        o = e || {},
                        l = !j[x] || !o.dedupe,
                        u = () => v.r ? !H.current && x === z.current && $.current : x === z.current,
                        c = {
                            isValidating: !1,
                            isLoading: !1
                        },
                        f = () => {
                            X(c)
                        },
                        g = () => {
                            let e = j[x];
                            e && e[1] === r && delete j[x]
                        },
                        m = {
                            isValidating: !0
                        };
                    (0, d.e)(q().data) && (m.isLoading = !0);
                    try {
                        if (l && (X(m), i.loadingTimeout && (0, d.e)(q().data) && setTimeout(() => {
                                s && u() && B.current.onLoadingSlow(x, i)
                            }, i.loadingTimeout), j[x] = [a(M), (0, h.o)()]), [t, r] = j[x], t = await t, l && setTimeout(g, i.dedupingInterval), !j[x] || j[x][1] !== r) return l && u() && B.current.onDiscarded(x), !1;
                        c.error = n.U;
                        let e = V[x];
                        if (!(0, d.e)(e) && (r <= e[0] || r <= e[1] || 0 === e[1])) return f(), l && u() && B.current.onDiscarded(x), !1;
                        let o = q().data;
                        c.data = p(o, t) ? o : t, l && u() && B.current.onSuccess(t, x, i)
                    } catch (r) {
                        g();
                        let e = B.current,
                            {
                                shouldRetryOnError: t
                            } = e;
                        !e.isPaused() && (c.error = r, l && u() && (e.onError(r, x, e), (!0 === t || (0, w.a)(t) && t(r)) && (!B.current.revalidateOnFocus || !B.current.revalidateOnReconnect || J()) && e.onErrorRetry(r, x, e, e => {
                            let t = L[x];
                            t && t[0] && t[0](E.ERROR_REVALIDATE_EVENT, e)
                        }, {
                            retryCount: (o.retryCount || 0) + 1,
                            dedupe: !0
                        })))
                    }
                    return s = !1, f(), !0
                }, [x, s]),
                em = (0, t.useCallback)((...e) => (0, m.n)(s, z.current, ...e), []);
            if ((0, y.u)(() => {
                    K.current = a, B.current = i, (0, d.e)(ei) || (el.current = ei)
                }), (0, y.u)(() => {
                    if (!x) return;
                    let e = eE.bind(n.U, T),
                        t = 0;
                    B.current.revalidateOnFocus && (t = Date.now() + B.current.focusThrottleInterval);
                    let r = (0, o.subscribeCallback)(x, L, (r, n = {}) => {
                        if (r == E.FOCUS_EVENT) {
                            let r = Date.now();
                            B.current.revalidateOnFocus && r > t && J() && (t = r + B.current.focusThrottleInterval, e())
                        } else if (r == E.RECONNECT_EVENT) B.current.revalidateOnReconnect && J() && e();
                        else if (r == E.MUTATE_EVENT) return eE();
                        else if (r == E.ERROR_REVALIDATE_EVENT) return eE(n)
                    });
                    return H.current = !1, z.current = x, $.current = !0, X({
                        _k: M
                    }), eg && !j[x] && ((0, d.e)(es) || g.I ? e() : (0, b.t)(e)), () => {
                        H.current = !0, r()
                    }
                }, [x]), (0, y.u)(() => {
                    let e;

                    function t() {
                        let t = (0, w.a)(I) ? I(q().data) : I;
                        t && -1 !== e && (e = setTimeout(r, t))
                    }

                    function r() {
                        !q().error && (D || B.current.isVisible()) && (W || B.current.isOnline()) ? eE(T).then(t) : t()
                    }
                    return t(), () => {
                        e && (clearTimeout(e), e = -1)
                    }
                }, [I, D, W, x]), (0, t.useDebugValue)(eu), _) {
                if (!v.r && g.I && ec) throw Error("Fallback data is required when using Suspense in SSR.");
                ec && (K.current = a, B.current = i, H.current = !1);
                let e = F[x];
                if (O(!(0, d.e)(e) && ec ? em(e) : S), !(0, d.e)(eo) && ec) throw eo;
                let t = ec ? eE(T) : S;
                !(0, d.e)(eu) && ec && (t.status = "fulfilled", t.value = !0), O(t)
            }
            return {
                mutate: em,
                get data() {
                    return Z.data = !0, eu
                },
                get error() {
                    return Z.error = !0, eo
                },
                get isValidating() {
                    return Z.isValidating = !0, eh
                },
                get isLoading() {
                    return Z.isLoading = !0, ew
                }
            }
        });
    e.s(["SWRConfig", 0, A, "default", 0, N], 912788)
}]);