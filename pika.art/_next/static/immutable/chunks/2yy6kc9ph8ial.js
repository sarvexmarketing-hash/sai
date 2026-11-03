(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 758839, e => {
    "use strict";
    var t, i, s, r = "u" > typeof window ? window : void 0,
        n = "u" > typeof globalThis ? globalThis : r;
    "u" < typeof self && (n.self = n), "u" < typeof File && (n.File = function() {});
    var o = null == n ? void 0 : n.navigator,
        a = null == n ? void 0 : n.document,
        l = null == n ? void 0 : n.location,
        u = null == n ? void 0 : n.fetch,
        h = null != n && n.XMLHttpRequest && "withCredentials" in new n.XMLHttpRequest ? n.XMLHttpRequest : void 0,
        c = null == n ? void 0 : n.AbortController,
        d = null == n ? void 0 : n.CompressionStream,
        p = null == o ? void 0 : o.userAgent,
        v = null != r ? r : {};

    function g() {
        return !(!r || !1 === r.navigator.onLine)
    }
    var _ = "1.398.6",
        f = {
            DEBUG: !1,
            LIB_VERSION: _,
            LIB_NAME: "web",
            JS_SDK_VERSION: _
        };

    function m(e, t, i, s, r, n, o) {
        try {
            var a = e[n](o),
                l = a.value
        } catch (e) {
            return void i(e)
        }
        a.done ? t(l) : Promise.resolve(l).then(s, r)
    }

    function y(e) {
        return function() {
            var t = this,
                i = arguments;
            return new Promise(function(s, r) {
                var n = e.apply(t, i);

                function o(e) {
                    m(n, s, r, o, a, "next", e)
                }

                function a(e) {
                    m(n, s, r, o, a, "throw", e)
                }
                o(void 0)
            })
        }
    }

    function b() {
        return (b = Object.assign.bind()).apply(null, arguments)
    }

    function w(e, t) {
        if (null == e) return {};
        var i = {};
        for (var s in e)
            if (({}).hasOwnProperty.call(e, s)) {
                if (-1 !== t.indexOf(s)) continue;
                i[s] = e[s]
            }
        return i
    }
    var x = e => {
        if ("string" != typeof e) return e;
        try {
            return JSON.parse(e)
        } catch (t) {
            return e
        }
    };

    function S(e) {
        return "string" == typeof e || e
    }

    function E(e) {
        return "string" == typeof e ? e : void 0
    }
    var k, P, F, $, I = ((k = {}).AnonymousId = "anonymous_id", k.DistinctId = "distinct_id", k.Props = "props", k.EnablePersonProcessing = "enable_person_processing", k.PersonMode = "person_mode", k.FeatureFlagDetails = "feature_flag_details", k.FeatureFlags = "feature_flags", k.FeatureFlagPayloads = "feature_flag_payloads", k.BootstrapFeatureFlagDetails = "bootstrap_feature_flag_details", k.BootstrapFeatureFlags = "bootstrap_feature_flags", k.BootstrapFeatureFlagPayloads = "bootstrap_feature_flag_payloads", k.OverrideFeatureFlags = "override_feature_flags", k.Queue = "queue", k.LogsQueue = "logs_queue", k.OptedOut = "opted_out", k.SessionId = "session_id", k.SessionStartTimestamp = "session_start_timestamp", k.SessionLastTimestamp = "session_timestamp", k.PersonProperties = "person_properties", k.GroupProperties = "group_properties", k.InstalledAppBuild = "installed_app_build", k.InstalledAppVersion = "installed_app_version", k.SessionReplay = "session_replay", k.SessionReplayEventTriggerActivatedSession = "session_replay_event_trigger_activated_session", k.SurveyLastSeenDate = "survey_last_seen_date", k.SurveysSeen = "surveys_seen", k.Surveys = "surveys", k.RemoteConfig = "remote_config", k.FlagsEndpointWasHit = "flags_endpoint_was_hit", k.DeviceId = "device_id", k),
        C = ((P = {}).GZipJS = "gzip-js", P.Base64 = "base64", P),
        R = ["$snapshot", "$pageview", "$pageleave", "$set", "survey dismissed", "survey sent", "survey shown", "$identify", "$groupidentify", "$create_alias", "$$client_ingestion_warning", "$web_experiment_applied", "$feature_enrollment_update", "$feature_flag_called"],
        T = ["token"],
        A = "NativeGzipValidationError",
        M = e => e.length >= 2 && 31 === e[0] && 139 === e[1],
        O = (e, t) => e === C.GZipJS || t === C.GZipJS || "gzip" === t,
        L = e => !(!e || "object" != typeof e) && "NotReadableError" === ("name" in e ? String(e.name) : ""),
        D = e => {
            var t = Error("Native gzip produced invalid output: " + e);
            throw t.name = A, t
        },
        N = (F = y(function*(e, t) {
            18 > e.size && D("too-short");
            var i = new Uint8Array((yield e.slice(0, 10).arrayBuffer()));
            M(i) && 8 === i[2] || D("invalid-header");
            var s = new DataView((yield e.slice(e.size - 8).arrayBuffer()));
            s.getUint32(0, !0) !== (e => {
                for (var t = (() => {
                        if ($) return $;
                        $ = [];
                        for (var e = 0; 256 > e; e++) {
                            for (var t = e, i = 0; 8 > i; i++) t = 1 & t ? 0xedb88320 ^ t >>> 1 : t >>> 1;
                            $[e] = t >>> 0
                        }
                        return $
                    })(), i = 0xffffffff, s = 0; e.length > s; s++) i = t[255 & (i ^ e[s])] ^ i >>> 8;
                return (0xffffffff ^ i) >>> 0
            })(t) && D("invalid-crc");
            var r = t.length >>> 0;
            s.getUint32(4, !0) !== r && D("invalid-size")
        }), function(e, t) {
            return F.apply(this, arguments)
        });

    function z() {
        return (z = y(function*(e, t, i) {
            void 0 === t && (t = !0);
            try {
                var s, r = (new TextEncoder).encode(e),
                    n = new CompressionStream("gzip"),
                    o = n.writable.getWriter(),
                    a = o.write(r).then(() => o.close()).catch((s = y(function*(e) {
                        try {
                            yield o.abort(e)
                        } catch (e) {}
                        throw e
                    }), function(e) {
                        return s.apply(this, arguments)
                    })),
                    l = new Response(n.readable).blob(),
                    [u] = yield Promise.all([l, a]);
                return yield N(u, r), u
            } catch (e) {
                if (null != i && i.rethrow) throw e;
                return t && console.error("Failed to gzip compress data", e), null
            }
        })).apply(this, arguments)
    }
    var j = ["amazonbot", "amazonproductbot", "app.hypefactors.com", "applebot", "archive.org_bot", "awariobot", "backlinksextendedbot", "baiduspider", "bingbot", "bingpreview", "chrome-lighthouse", "dataforseobot", "deepscan", "duckduckbot", "facebookexternal", "facebookcatalog", "http://yandex.com/bots", "hubspot", "ia_archiver", "leikibot", "linkedinbot", "meta-externalagent", "mj12bot", "msnbot", "nessus", "petalbot", "pinterest", "prerender", "rogerbot", "screaming frog", "sebot-wa", "sitebulb", "slackbot", "slurp", "trendictionbot", "turnitin", "twitterbot", "vercel-screenshot", "vercelbot", "yahoo! slurp", "yandexbot", "zoombot", "bot.htm", "bot.php", "(bot;", "bot/", "crawler", "ahrefsbot", "ahrefssiteaudit", "semrushbot", "siteauditbot", "splitsignalbot", "gptbot", "oai-searchbot", "chatgpt-user", "perplexitybot", "better uptime bot", "sentryuptimebot", "uptimerobot", "headlesschrome", "cypress", "google-hoteladsverifier", "adsbot-google", "apis-google", "duplexweb-google", "feedfetcher-google", "google favicon", "google web preview", "google-read-aloud", "googlebot", "googleother", "google-cloudvertexbot", "googleweblight", "mediapartners-google", "storebot-google", "google-inspectiontool", "bytespider"],
        q = function(e, t) {
            if (void 0 === t && (t = []), !e) return !1;
            var i = e.toLowerCase();
            return j.concat(t).some(e => {
                var t = e.toLowerCase();
                return -1 !== i.indexOf(t)
            })
        };

    function H(e, t) {
        return -1 !== e.indexOf(t)
    }
    var B = function(e) {
            return e.trim()
        },
        U = function(e) {
            return e.replace(/^\$/, "")
        },
        V = Object.prototype,
        W = V.hasOwnProperty,
        G = V.toString,
        J = Array.isArray || function(e) {
            return "[object Array]" === G.call(e)
        },
        Y = e => "function" == typeof e,
        K = e => e === Object(e) && !J(e),
        X = e => {
            if (K(e)) {
                for (var t in e)
                    if (W.call(e, t)) return !1;
                return !0
            }
            return !1
        },
        Q = e => void 0 === e,
        Z = e => "[object String]" == G.call(e),
        ee = e => Z(e) && 0 === e.trim().length,
        et = e => null === e,
        ei = e => Q(e) || et(e),
        es = e => "[object Number]" == G.call(e) && e == e,
        er = e => es(e) && e > 0,
        en = e => "[object Boolean]" === G.call(e),
        eo = e => H(R, e),
        ea = e => H(T, e);

    function el(e) {
        return null === e || "object" != typeof e
    }

    function eu(e, t) {
        return ({}).toString.call(e) === "[object " + t + "]"
    }

    function eh(e) {
        return "u" > typeof Event && function(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }(e, Event)
    }
    var ec = [!0, "true", 1, "1", "yes"],
        ed = [!1, "false", 0, "0", "no"];

    function ep(e, t, i, s, r) {
        return t > i && (s.warn("min cannot be greater than max."), t = i), es(e) ? e > i ? (s.warn(" cannot be  greater than max: " + i + ". Using max value instead."), i) : t > e ? (s.warn(" cannot be less than min: " + t + ". Using min value instead."), t) : e : (s.warn(" must be a number. using max or fallback. max: " + i + ", fallback: " + r), ep(r || i, t, i, s))
    }
    class ev {
        constructor(e) {
            this.Ee = {}, this.Pe = e.Pe, this.Fe = ep(e.bucketSize, 0, 100, e.Ae), this.$e = ep(e.refillRate, 0, this.Fe, e.Ae), this.De = ep(e.refillInterval, 0, 864e5, e.Ae)
        }
        Ne(e, t) {
            var i = Math.floor((t - e.lastAccess) / this.De);
            i > 0 && (e.tokens = Math.min(e.tokens + i * this.$e, this.Fe), e.lastAccess = e.lastAccess + i * this.De)
        }
        consumeRateLimit(e) {
            var t, i = Date.now(),
                s = String(e),
                r = this.Ee[s];
            return r ? this.Ne(r, i) : this.Ee[s] = r = {
                tokens: this.Fe,
                lastAccess: i
            }, 0 === r.tokens || (r.tokens--, 0 === r.tokens && (null == (t = this.Pe) || t.call(this, e)), 0 === r.tokens)
        }
        stop() {
            this.Ee = {}
        }
    }
    var eg = "Mobile",
        e_ = "Android",
        ef = "Tablet",
        em = e_ + " " + ef,
        ey = "iPad",
        eb = "Apple",
        ew = eb + " Watch",
        ex = "Safari",
        eS = "BlackBerry",
        eE = "Samsung",
        ek = eE + "Browser",
        eP = eE + " Internet",
        eF = "Chrome",
        e$ = eF + " OS",
        eI = eF + " iOS",
        eC = "Internet Explorer",
        eR = eC + " " + eg,
        eT = "Opera",
        eA = eT + " Mini",
        eM = "Edge",
        eO = "Microsoft " + eM,
        eL = "Firefox",
        eD = eL + " iOS",
        eN = "Nintendo",
        ez = "PlayStation",
        ej = "Xbox",
        eq = e_ + " " + eg,
        eH = eg + " " + ex,
        eB = "Windows",
        eU = eB + " Phone",
        eV = "Nokia",
        eW = "Ouya",
        eG = "Generic",
        eJ = eG + " " + eg.toLowerCase(),
        eY = eG + " " + ef.toLowerCase(),
        eK = "Konqueror",
        eX = "Oculus Browser",
        eQ = "Vivaldi",
        eZ = "Yandex",
        e0 = "Whale",
        e1 = "DuckDuckGo",
        e2 = "Pale Moon",
        e3 = "Waterfox",
        e5 = "Brave",
        e8 = "Google Search App",
        e6 = "(\\d+(\\.\\d+)?)",
        e4 = RegExp("Version/" + e6),
        e7 = RegExp(ej, "i"),
        e9 = RegExp(ez + " \\w+", "i"),
        te = RegExp(eN + " \\w+", "i"),
        tt = RegExp(eS + "|PlayBook|BB10", "i"),
        ti = {
            "NT3.51": "NT 3.11",
            "NT4.0": "NT 4.0",
            "5.0": "2000",
            5.1: "XP",
            5.2: "XP",
            "6.0": "Vista",
            6.1: "7",
            6.2: "8",
            6.3: "8.1",
            6.4: "10",
            "10.0": "10"
        },
        ts = function(e, t, i, s) {
            var r;
            return t = t || "", (null != i && i.brave ? e5 : null) || (null != s && s.detectGoogleSearchApp && H(e, "GSA/") ? e8 : H(e, " OPR/") && H(e, "Mini") ? eA : H(e, " OPR/") ? eT : tt.test(e) ? eS : H(e, "IE" + eg) || H(e, "WPDesktop") ? eR : H(e, "OculusBrowser") ? eX : H(e, ek) ? eP : H(e, eM) || H(e, "Edg/") ? eO : H(e, eQ + "/") ? eQ : H(e, "YaBrowser/") ? eZ : H(e, e0 + "/") ? e0 : H(e, e1 + "/") || H(e, "Ddg/") ? e1 : H(e, "FBIOS") ? "Facebook " + eg : H(e, "UCWEB") || H(e, "UCBrowser") ? "UC Browser" : H(e, "CriOS") ? eI : H(e, "CrMo") || H(e, eF) ? eF : H(e, e_) && H(e, ex) ? eq : H(e, "FxiOS") ? eD : H(e.toLowerCase(), eK.toLowerCase()) ? eK : H(e, e5 + "/") ? e5 : (r = t) && H(r, eb) || H(e, ex) && !H(e, eF) && !H(e, e_) ? H(e, eg) ? eH : ex : H(e, "PaleMoon/") ? e2 : H(e, e3 + "/") ? e3 : H(e, eL) ? eL : H(e, "MSIE") || H(e, "Trident/") ? eC : H(e, "Gecko") ? eL : "")
        },
        tr = {
            [eR]: [RegExp("rv:" + e6)],
            [eO]: [RegExp(eM + "?\\/" + e6)],
            [eF]: [RegExp("(" + eF + "|CrMo)\\/" + e6)],
            [eI]: [RegExp("CriOS\\/" + e6)],
            "UC Browser": [RegExp("(UCBrowser|UCWEB)\\/" + e6)],
            [ex]: [e4],
            [eH]: [e4],
            [eT]: [RegExp("(Opera|OPR)\\/" + e6)],
            [eL]: [RegExp(eL + "\\/" + e6)],
            [eD]: [RegExp("FxiOS\\/" + e6)],
            [eK]: [RegExp("Konqueror[:/]?" + e6, "i")],
            [eS]: [RegExp(eS + " " + e6), e4],
            [eq]: [RegExp("android\\s" + e6, "i")],
            [eP]: [RegExp(ek + "\\/" + e6)],
            [eX]: [RegExp("OculusBrowser\\/" + e6)],
            [eQ]: [RegExp(eQ + "\\/" + e6)],
            [eZ]: [RegExp("YaBrowser\\/" + e6)],
            [e0]: [RegExp(e0 + "\\/" + e6)],
            [e5]: [RegExp(e5 + "\\/" + e6)],
            [e1]: [RegExp("(DuckDuckGo|Ddg)\\/" + e6)],
            [e2]: [RegExp("PaleMoon\\/" + e6)],
            [e3]: [RegExp(e3 + "\\/" + e6)],
            [e8]: [RegExp("GSA\\/" + e6)],
            [eC]: [RegExp("(rv:|MSIE )" + e6)],
            Mozilla: [RegExp("rv:" + e6)]
        },
        tn = function(e, t, i, s) {
            var r = tr[ts(e, t, i, s)];
            if (Q(r)) return null;
            for (var n = 0; r.length > n; n++) {
                var o = e.match(r[n]);
                if (o) return parseFloat(o[o.length - 2])
            }
            return null
        },
        to = [
            [RegExp(ej + "; " + ej + " (.*?)[);]", "i"), e => [ej, e && e[1] || ""]],
            [RegExp(eN, "i"), [eN, ""]],
            [RegExp(ez, "i"), [ez, ""]],
            [tt, [eS, ""]],
            [RegExp(eB, "i"), (e, t) => {
                if (/Phone/.test(t) || /WPDesktop/.test(t)) return [eU, ""];
                if (new RegExp(eg).test(t) && !/IEMobile\b/.test(t)) return [eB + " " + eg, ""];
                var i = /Windows NT ([0-9.]+)/i.exec(t);
                if (i && i[1]) {
                    var s = ti[i[1]] || "";
                    return /arm/i.test(t) && (s = "RT"), [eB, s]
                }
                return [eB, ""]
            }],
            [/((iPhone|iPad|iPod).*?OS (\d+)_(\d+)_?(\d+)?|iPhone)/, e => e && e[3] ? ["iOS", [e[3], e[4], e[5] || "0"].join(".")] : ["iOS", ""]],
            [/(watch.*\/(\d+\.\d+\.\d+)|watch os,(\d+\.\d+),)/i, e => {
                var t = "";
                return e && e.length >= 3 && (t = Q(e[2]) ? e[3] : e[2]), ["watchOS", t]
            }],
            [RegExp("(" + e_ + " (\\d+)\\.(\\d+)\\.?(\\d+)?|" + e_ + ")", "i"), e => e && e[2] ? [e_, [e[2], e[3], e[4] || "0"].join(".")] : [e_, ""]],
            [/Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i, e => {
                var t = ["Mac OS X", ""];
                return e && e[1] && (t[1] = [e[1], e[2], e[3] || "0"].join(".")), t
            }],
            [/Mac/i, ["Mac OS X", ""]],
            [/CrOS/, [e$, ""]],
            [/Linux|debian/i, ["Linux", ""]]
        ],
        ta = function(e) {
            return te.test(e) ? eN : e9.test(e) ? ez : e7.test(e) ? ej : RegExp(eW, "i").test(e) ? eW : RegExp("(" + eU + "|WPDesktop)", "i").test(e) ? eU : /iPad/.test(e) ? ey : /iPod/.test(e) ? "iPod Touch" : /iPhone/.test(e) ? "iPhone" : /(watch)(?: ?os[,/]|\d,\d\/)[\d.]+/i.test(e) ? ew : tt.test(e) ? eS : /(kobo)\s(ereader|touch)/i.test(e) ? "Kobo" : RegExp(eV, "i").test(e) ? eV : /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i.test(e) || /(kf[a-z]+)( bui|\)).+silk\//i.test(e) ? "Kindle Fire" : /(Android|ZTE)/i.test(e) ? new RegExp(eg).test(e) && !/(9138B|TB782B|Nexus [97]|pixel c|HUAWEISHT|BTV|noble nook|smart ultra 6)/i.test(e) || /pixel[\daxl ]{1,6}/i.test(e) && !/pixel c/i.test(e) || /(huaweimed-al00|tah-|APA|SM-G92|i980|zte|U304AA)/i.test(e) || /lmy47v/i.test(e) && !/QTAQZ3/i.test(e) ? e_ : em : RegExp("(pda|" + eg + ")", "i").test(e) ? eJ : RegExp(ef, "i").test(e) && !RegExp(ef + " pc", "i").test(e) ? eY : ""
        },
        tl = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

    function tu(e, t) {
        return "string" == typeof e && tl.test(e) ? e : t()
    }

    function th(e) {
        return e ? e.split("#")[0] : e
    }

    function tc(e, t) {
        var i = setTimeout(e, t);
        return (null == i ? void 0 : i.unref) && (null == i || i.unref()), i
    }
    var td = e => e instanceof Error,
        tp = {
            trace: {
                text: "TRACE",
                number: 1
            },
            debug: {
                text: "DEBUG",
                number: 5
            },
            info: {
                text: "INFO",
                number: 9
            },
            warn: {
                text: "WARN",
                number: 13
            },
            error: {
                text: "ERROR",
                number: 17
            },
            fatal: {
                text: "FATAL",
                number: 21
            }
        },
        tv = tp.info;

    function tg(e) {
        var t = [];
        for (var i in e) {
            var s = e[i];
            et(s) || Q(s) || t.push({
                key: i,
                value: function e(t) {
                    if (en(t)) return {
                        boolValue: t
                    };
                    if ("number" == typeof t) return Number.isFinite(t) ? Number.isInteger(t) ? {
                        intValue: t
                    } : {
                        doubleValue: t
                    } : {
                        stringValue: String(t)
                    };
                    if ("string" == typeof t) return {
                        stringValue: t
                    };
                    if (J(t)) return {
                        arrayValue: {
                            values: t.map(t => e(t))
                        }
                    };
                    try {
                        return {
                            stringValue: JSON.stringify(t)
                        }
                    } catch (e) {
                        return {
                            stringValue: String(t)
                        }
                    }
                }(s)
            })
        }
        return t
    }

    function t_(e, t, i) {
        return b({}, e.resourceAttributes, {
            "service.name": e.serviceName || "unknown_service"
        }, e.environment && {
            "deployment.environment": e.environment
        }, e.serviceVersion && {
            "service.version": e.serviceVersion
        }, {
            "telemetry.sdk.name": t,
            "telemetry.sdk.version": i
        })
    }

    function tf(e, t, i, s) {
        return {
            resourceLogs: [{
                resource: {
                    attributes: tg(t)
                },
                scopeLogs: [{
                    scope: {
                        name: i,
                        version: s
                    },
                    logRecords: e
                }]
            }]
        }
    }
    let tm = class {
        constructor(e, t, i, s, r, n, o) {
            var a;
            void 0 === n && (n = () => Promise.resolve()), this._instance = e, this.Se = t, this.Ae = i, this.qe = s, this.Be = r, this.je = n, this.He = o, this.Ue = null, this.ze = 0, this.Ve = 0, this.We = 0, this.Ge = 0, this.Ze = !1, this.Qe = t.maxBufferSize, this.Je = Math.max(null != (a = t.maxQueueSize) ? a : t.maxBufferSize, t.maxBufferSize), this.Ye = t.flushIntervalMs, this.Ke = t.maxBatchRecordsPerPost, this.Xe = t.rateCapWindowMs, this.et = t.maxLogsPerInterval
        }
        reset() {
            this.tt(), this.Ue = null, this.We = 0, this.Ge = 0, this.Ze = !1, this.ze = 0, this.Ve = 0, this.Ke = this.Se.maxBatchRecordsPerPost
        }
        onReconnect() {
            this.Ve = 0, this.rt()
        }
        captureLog(e) {
            if (!this._instance.isDisabled && !this._instance.optedOut && null != e && e.body) {
                var t = this.it(e);
                if (null !== t)
                    if (t.body) {
                        if (this.nt()) {
                            var i = {
                                record: function(e, t) {
                                    var {
                                        text: i,
                                        number: s
                                    } = tp[e.level || "info"] || tv, r = String(Date.now()) + "000000", n = {};
                                    t.distinctId && (n.posthogDistinctId = t.distinctId), t.sessionId && (n.sessionId = t.sessionId), t.windowId && (n["window.id"] = t.windowId), ei(t.sessionStartTimestamp) || (n.sessionStartTimestamp = String(t.sessionStartTimestamp)), ei(t.lastActivityTimestamp) || (n.lastActivityTimestamp = String(t.lastActivityTimestamp)), t.currentUrl && (n["url.full"] = t.currentUrl), t.screenName && (n["screen.name"] = t.screenName), t.appState && (n["app.state"] = t.appState), t.activeFeatureFlags && t.activeFeatureFlags.length > 0 && (n.feature_flags = t.activeFeatureFlags);
                                    var o = b({}, n, e.attributes || {}),
                                        a = {
                                            timeUnixNano: r,
                                            observedTimeUnixNano: r,
                                            severityNumber: s,
                                            severityText: i,
                                            body: {
                                                stringValue: e.body
                                            },
                                            attributes: tg(o)
                                        };
                                    return e.trace_id && (a.traceId = e.trace_id), e.span_id && (a.spanId = e.span_id), Q(e.trace_flags) || (a.flags = e.trace_flags), a
                                }(t, this.qe())
                            };
                            this.Be(() => this.st(i))
                        }
                    } else this.Ae.info("Log was rejected in beforeSend function")
            }
        }
        it(e) {
            var t = this.Se.beforeSend;
            if (!t) return e;
            var i = J(t) ? t : [t],
                s = e;
            for (var r of i) try {
                var n = r(s);
                if (!n) return this.Ae.info("Log was rejected in beforeSend function"), null;
                s = n
            } catch (e) {
                return this.Ae.error("Error in beforeSend function for log:", e), null
            }
            return s
        }
        nt() {
            if (void 0 === this.et) return !0;
            var e = Date.now(),
                t = e - this.We;
            return this.Xe > t && t >= 0 || (this.We = e, this.Ge = 0, this.Ze = !1), this.et > this.Ge ? (this.Ge++, !0) : (this.Ze || (this.Ae.warn("captureLog dropping logs: exceeded " + this.et + " logs per " + this.Xe + "ms"), this.Ze = !0), !1)
        }
        flush() {
            var e = this;
            return y(function*() {
                if (!e._instance.isDisabled) return e.Ue || (e.Ue = e.ot().finally(() => {
                    e.Ue = null
                })), e.Ue
            })()
        }
        ot() {
            var e = this;
            return y(function*() {
                e.tt();
                var t = null != (r = e._instance.getPersistedProperty(I.LogsQueue)) ? r : [];
                if (0 !== t.length)
                    for (var i = t.length, s = 0; t.length > 0 && i > s;) {
                        e.ze = 0;
                        var r, n, o, a = Math.min(t.length, e.Ke),
                            l = t.slice(0, a),
                            u = tf(l.map(e => e.record), e.ut(), null != (n = e.He) ? n : e._instance.getLibraryId(), e._instance.getLibraryVersion()),
                            h = yield e._instance.ht(u);
                        if ("too-large" === h.kind && l.length > 1) e.Ke = Math.max(1, Math.floor(l.length / 2)), e.Ae.warn("Received 413 when sending logs batch of size " + l.length + ", reducing batch size to " + e.Ke);
                        else if ("retry-later" === h.kind || ("too-large" === h.kind ? e.Ae.warn("Dropping a single log record after 413 with batch size 1 — the record is larger than the server cap and cannot be split further.") : "ok" === h.kind && e.Se.maxBatchRecordsPerPost > e.Ke && (e.Ke = Math.min(e.Se.maxBatchRecordsPerPost, e.Ke + 1)), yield e.dt(l.length), t = null != (o = e._instance.getPersistedProperty(I.LogsQueue)) ? o : [], s += l.length, "fatal" === h.kind)) throw h.error
                    }
            })()
        }
        dt(e) {
            var t = this;
            return y(function*() {
                var i, s = Math.max(0, e - t.ze),
                    r = null != (i = t._instance.getPersistedProperty(I.LogsQueue)) ? i : [];
                t._instance.setPersistedProperty(I.LogsQueue, r.slice(s)), yield t.je()
            })()
        }
        ut() {
            return t_(this.Se, this._instance.getLibraryId(), this._instance.getLibraryVersion())
        }
        st(e) {
            var t;
            if (!this._instance.optedOut) {
                var i = null != (t = this._instance.getPersistedProperty(I.LogsQueue)) ? t : [];
                this.Je > i.length || (i.shift(), this.ze++, this.Ae.info("Logs queue is full, dropping oldest record.")), i.push(e), this._instance.setPersistedProperty(I.LogsQueue, i), this.Qe > i.length ? this.ct() : this.rt()
            }
        }
        ct(e) {
            void 0 === e && (e = this.Ye), this.vt || (this.vt = tc(() => {
                this.vt = void 0, this.rt()
            }, e))
        }
        ft() {
            var e = Math.min(Math.max(0, this.Ve - 1), 6);
            return this.Ye * Math.pow(2, e)
        }
        yt() {
            var e = this._instance.getPersistedProperty(I.LogsQueue);
            return !!e && e.length > 0
        }
        shutdown(e) {
            var t = this;
            return y(function*() {
                t.tt();
                var i = t.flush().catch(() => {});
                void 0 !== e ? yield Promise.race([i, new Promise(t => tc(t, e))]): yield i
            })()
        }
        flushWithTimeout(e) {
            var t = this;
            return y(function*() {
                var i = !1,
                    s = t.flush(),
                    r = new Promise(t => tc(() => {
                        i = !0, t()
                    }, e));
                try {
                    yield Promise.race([s, r])
                } finally {
                    i && s.catch(() => {})
                }
            })()
        }
        rt() {
            this.flush().then(() => {
                this.Ve = 0
            }, e => {
                this.Ve++, this.Ae.error("PostHog logs flush failed:", e)
            }).finally(() => {
                !this._instance.isDisabled && this.yt() && this.ct(this.ft())
            })
        }
        tt() {
            this.vt && (clearTimeout(this.vt), this.vt = void 0)
        }
    };
    class ty {
        constructor(e, t, i) {
            void 0 === i && (i = []), this.coercers = e, this.stackParser = t, this.modifiers = i
        }
        buildFromUnknown(e, t) {
            void 0 === t && (t = {});
            var i = t && t.mechanism || {
                    handled: !0,
                    type: "generic"
                },
                s = this.buildCoercingContext(i, t, 0).apply(e),
                r = this.buildParsingContext(t),
                n = this.parseStacktrace(s, r);
            return {
                $exception_list: this.convertToExceptionList(n, i),
                $exception_level: "error"
            }
        }
        modifyFrames(e) {
            var t = this;
            return y(function*() {
                for (var i of e) i.stacktrace && i.stacktrace.frames && J(i.stacktrace.frames) && (i.stacktrace.frames = yield t.applyModifiers(i.stacktrace.frames));
                return e
            })()
        }
        coerceFallback(e) {
            var t;
            return {
                type: "Error",
                value: "Unknown error",
                stack: null == (t = e.syntheticException) ? void 0 : t.stack,
                synthetic: !0
            }
        }
        parseStacktrace(e, t) {
            var i, s;
            return null != e.cause && (i = this.parseStacktrace(e.cause, t)), "" != e.stack && null != e.stack && (s = this.applyChunkIds(this.stackParser(e.stack, e.synthetic ? t.skipFirstLines : 0), t.chunkIdMap)), b({}, e, {
                cause: i,
                stack: s
            })
        }
        applyChunkIds(e, t) {
            return e.map(e => (e.filename && t && (e.chunk_id = t[e.filename]), e))
        }
        applyCoercers(e, t) {
            for (var i of this.coercers)
                if (i.match(e)) return i.coerce(e, t);
            return this.coerceFallback(t)
        }
        applyModifiers(e) {
            var t = this;
            return y(function*() {
                var i = e;
                for (var s of t.modifiers) i = yield s(i);
                return i
            })()
        }
        convertToExceptionList(e, t) {
            var i, s, r, n = {
                type: e.type,
                value: e.value,
                mechanism: {
                    type: null != (i = t.type) ? i : "generic",
                    handled: null == (s = t.handled) || s,
                    synthetic: null != (r = e.synthetic) && r
                }
            };
            e.stack && (n.stacktrace = {
                type: "raw",
                frames: e.stack
            });
            var o = [n];
            return null != e.cause && o.push(...this.convertToExceptionList(e.cause, b({}, t, {
                handled: !0
            }))), o
        }
        buildParsingContext(e) {
            var t;
            return {
                chunkIdMap: function(e) {
                    var t = globalThis._posthogChunkIds;
                    if (t) {
                        var i = Object.keys(t);
                        return sr && i.length === ss || (ss = i.length, sr = i.reduce((i, s) => {
                            si || (si = {});
                            var r = si[s];
                            if (r) i[r[0]] = r[1];
                            else
                                for (var n = e(s), o = n.length - 1; o >= 0; o--) {
                                    var a = n[o],
                                        l = null == a ? void 0 : a.filename,
                                        u = t[s];
                                    if (l && u) {
                                        i[l] = u, si[s] = [l, u];
                                        break
                                    }
                                }
                            return i
                        }, {})), sr
                    }
                }(this.stackParser),
                skipFirstLines: null != (t = e.skipFirstLines) ? t : 1
            }
        }
        buildCoercingContext(e, t, i) {
            void 0 === i && (i = 0);
            var s = (i, s) => {
                if (4 >= s) {
                    var r = this.buildCoercingContext(e, t, s);
                    return this.applyCoercers(i, r)
                }
            };
            return b({}, t, {
                syntheticException: 0 == i ? t.syntheticException : void 0,
                mechanism: e,
                apply: e => s(e, i),
                next: e => s(e, i + 1)
            })
        }
    }

    function tb(e, t, i, s, r) {
        var n = {
            platform: e,
            filename: t,
            function: "<anonymous>" === i ? "?" : i,
            in_app: !0
        };
        return Q(s) || (n.lineno = s), Q(r) || (n.colno = r), n
    }
    var tw = (e, t) => {
            var i = -1 !== e.indexOf("safari-extension"),
                s = -1 !== e.indexOf("safari-web-extension");
            return i || s ? [-1 !== e.indexOf("@") ? e.split("@")[0] : "?", i ? "safari-extension:" + t : "safari-web-extension:" + t] : [e, t]
        },
        tx = /^\s*at (\S+?)(?::(\d+))(?::(\d+))\s*$/i,
        tS = /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
        tE = /\((\S*)(?::(\d+))(?::(\d+))\)/,
        tk = (e, t) => {
            var i = tx.exec(e);
            if (i) {
                var [, s, r, n] = i;
                return tb(t, s, "?", +r, +n)
            }
            var o = tS.exec(e);
            if (o) {
                if (o[2] && 0 === o[2].indexOf("eval")) {
                    var a = tE.exec(o[2]);
                    a && (o[2] = a[1], o[3] = a[2], o[4] = a[3])
                }
                var [l, u] = tw(o[1] || "?", o[2]);
                return tb(t, u, l, o[3] ? +o[3] : void 0, o[4] ? +o[4] : void 0)
            }
        },
        tP = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
        tF = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
        t$ = (e, t) => {
            var i = tP.exec(e);
            if (i) {
                if (i[3] && i[3].indexOf(" > eval") > -1) {
                    var s = tF.exec(i[3]);
                    s && (i[1] = i[1] || "eval", i[3] = s[1], i[4] = s[2], i[5] = "")
                }
                var r = i[3],
                    n = i[1] || "?";
                return [n, r] = tw(n, r), tb(t, r, n, i[4] ? +i[4] : void 0, i[5] ? +i[5] : void 0)
            }
        },
        tI = /\(error: (.*)\)/;
    class tC {
        match(e) {
            return this.isDOMException(e) || this.isDOMError(e)
        }
        coerce(e, t) {
            var i = Z(e.stack);
            return {
                type: this.getType(e),
                value: this.getValue(e),
                stack: i ? e.stack : void 0,
                cause: e.cause ? t.next(e.cause) : void 0,
                synthetic: !1
            }
        }
        getType(e) {
            return this.isDOMError(e) ? "DOMError" : "DOMException"
        }
        getValue(e) {
            var t = e.name || (this.isDOMError(e) ? "DOMError" : "DOMException");
            return e.message ? t + ": " + e.message : t
        }
        isDOMException(e) {
            return eu(e, "DOMException")
        }
        isDOMError(e) {
            return eu(e, "DOMError")
        }
    }
    class tR {
        match(e) {
            return e instanceof Error
        }
        coerce(e, t) {
            return {
                type: this.getType(e),
                value: this.getMessage(e, t),
                stack: this.getStack(e),
                cause: e.cause ? t.next(e.cause) : void 0,
                synthetic: !1
            }
        }
        getType(e) {
            return e.name || e.constructor.name
        }
        getMessage(e, t) {
            var i = e.message;
            return String(i.error && "string" == typeof i.error.message ? i.error.message : i)
        }
        getStack(e) {
            return e.stacktrace || e.stack || void 0
        }
    }
    class tT {
        match(e) {
            return eu(e, "ErrorEvent") && null != e.error
        }
        coerce(e, t) {
            var i;
            return t.apply(e.error) || {
                type: "ErrorEvent",
                value: e.message,
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0
            }
        }
    }
    var tA = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
    class tM {
        match(e) {
            return "string" == typeof e
        }
        coerce(e, t) {
            var i, [s, r] = this.getInfos(e);
            return {
                type: null != s ? s : "Error",
                value: null != r ? r : e,
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0
            }
        }
        getInfos(e) {
            var t = "Error",
                i = e,
                s = e.match(tA);
            return s && (t = s[1], i = s[2]), [t, i]
        }
    }
    var tO = ["fatal", "error", "warning", "log", "info", "debug"];

    function tL(e, t) {
        void 0 === t && (t = 40);
        var i = Object.keys(e);
        if (i.sort(), !i.length) return "[object has no keys]";
        for (var s = i.length; s > 0; s--) {
            var r = i.slice(0, s).join(", ");
            if (t >= r.length) return s === i.length ? r : r.length > t ? r.slice(0, t) + "..." : r
        }
        return ""
    }
    class tD {
        match(e) {
            return "object" == typeof e && null !== e
        }
        coerce(e, t) {
            var i, s = this.getErrorPropertyFromObject(e);
            return s ? t.apply(s) : {
                type: this.getType(e),
                value: this.getValue(e),
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                level: this.isSeverityLevel(e.level) ? e.level : "error",
                synthetic: !0
            }
        }
        getType(e) {
            return eh(e) ? e.constructor.name : "Error"
        }
        getValue(e) {
            if ("name" in e && "string" == typeof e.name) {
                var t = "'" + e.name + "' captured as exception";
                return "message" in e && "string" == typeof e.message && (t += " with message: '" + e.message + "'"), t
            }
            if ("message" in e && "string" == typeof e.message) return e.message;
            var i = this.getObjectClassName(e);
            return (i && "Object" !== i ? "'" + i + "'" : "Object") + " captured as exception with keys: " + tL(e)
        }
        isSeverityLevel(e) {
            return Z(e) && !ee(e) && tO.indexOf(e) >= 0
        }
        getErrorPropertyFromObject(e) {
            for (var t in e)
                if (({}).hasOwnProperty.call(e, t)) {
                    var i = e[t];
                    if (td(i)) return i
                }
        }
        getObjectClassName(e) {
            try {
                var t = Object.getPrototypeOf(e);
                return t ? t.constructor.name : void 0
            } catch (e) {
                return
            }
        }
    }
    class tN {
        match(e) {
            return eh(e)
        }
        coerce(e, t) {
            var i, s = e.constructor.name;
            return {
                type: s,
                value: s + " captured as exception with keys: " + tL(e),
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0
            }
        }
    }
    class tz {
        match(e) {
            return el(e)
        }
        coerce(e, t) {
            var i;
            return {
                type: "Error",
                value: "Primitive value captured as exception: " + String(e),
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0
            }
        }
    }
    class tj {
        match(e) {
            return eu(e, "PromiseRejectionEvent") || this.isCustomEventWrappingRejection(e)
        }
        isCustomEventWrappingRejection(e) {
            if (!eh(e)) return !1;
            try {
                var t = e.detail;
                return null != t && "object" == typeof t && "reason" in t
            } catch (e) {
                return !1
            }
        }
        coerce(e, t) {
            var i, s = this.getUnhandledRejectionReason(e);
            return el(s) ? {
                type: "UnhandledRejection",
                value: "Non-Error promise rejection captured with value: " + String(s),
                stack: null == (i = t.syntheticException) ? void 0 : i.stack,
                synthetic: !0
            } : t.apply(s)
        }
        getUnhandledRejectionReason(e) {
            try {
                if ("reason" in e) return e.reason;
                if ("detail" in e && null != e.detail && "object" == typeof e.detail && "reason" in e.detail) return e.detail.reason
            } catch (e) {}
            return e
        }
    }
    var tq = "$message",
        tH = "$timestamp",
        tB = new Set([tq, tH]),
        tU = {
            enabled: !0,
            max_bytes: 32768
        };

    function tV(e) {
        var t;
        return e ? {
            enabled: null != (t = e.enabled) ? t : tU.enabled,
            max_bytes: function(e, t) {
                if (!es(e) || e === 1 / 0 || e === -1 / 0) return t;
                var i = Math.floor(e);
                return 0 > i ? t : i
            }(e.max_bytes, tU.max_bytes)
        } : b({}, tU)
    }
    class tW {
        constructor(e) {
            this.bt = [], this._t = 0, this.Se = tV(e)
        }
        setConfig(e) {
            this.Se = tV(e), this.wt()
        }
        add(e) {
            var t = function(e) {
                var t, i, s;
                try {
                    s = [], t = null != (i = JSON.stringify(e, function(e, t) {
                        if ("bigint" == typeof t) return t.toString();
                        if ("function" != typeof t && "symbol" != typeof t) {
                            if (t instanceof Error) return {
                                name: t.name,
                                message: t.message,
                                stack: t.stack
                            };
                            if (t && "object" == typeof t) {
                                for (; s.length > 0 && s[s.length - 1] !== this;) s.pop();
                                if (s.includes(t)) return "[Circular]";
                                s.push(t)
                            }
                            return t
                        }
                    })) ? i : "null"
                } catch (e) {
                    return
                }
                try {
                    var r = JSON.parse(t);
                    if (!K(r)) return;
                    var n = r[tq],
                        o = r[tH];
                    if (!Z(n) || 0 === n.trim().length || !Z(o) && !es(o)) return;
                    return {
                        step: r,
                        json: t
                    }
                } catch (e) {
                    return
                }
            }(e);
            if (t) {
                var i = function(e) {
                    if ("u" > typeof TextEncoder) return (new TextEncoder).encode(e).length;
                    for (var t = encodeURIComponent(e), i = 0, s = 0; t.length > s; s++) "%" === t[s] ? (i += 1, s += 2) : i += 1;
                    return i
                }(t.json);
                i > this.Se.max_bytes || (this.bt.push({
                    step: t.step,
                    bytes: i
                }), this._t += i, this.wt())
            }
        }
        getAttachable() {
            return this.bt.map(e => e.step)
        }
        clear() {
            this.bt = [], this._t = 0
        }
        size() {
            return this.bt.length
        }
        wt() {
            for (; this._t > this.Se.max_bytes && this.bt.length > 0;) {
                var e = this.bt.shift();
                e && (this._t -= e.bytes)
            }
        }
    }
    var tG = function(e, t) {
            var {
                debugEnabled: i
            } = void 0 === t ? {} : t, s = {
                k(t) {
                    if (r && (f.DEBUG || v.POSTHOG_DEBUG || i) && !Q(r.console) && r.console) {
                        for (var s = ("__rrweb_original__" in r.console[t]) ? r.console[t].__rrweb_original__ : r.console[t], n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; n > a; a++) o[a - 1] = arguments[a];
                        s(e, ...o)
                    }
                },
                debug() {
                    for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                    s.k("debug", ...t)
                },
                info() {
                    for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                    s.k("log", ...t)
                },
                warn() {
                    for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                    s.k("warn", ...t)
                },
                error() {
                    for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                    s.k("error", ...t)
                },
                critical() {
                    for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                    console.error(e, ...i)
                },
                uninitializedWarning(e) {
                    s.error("You must initialize PostHog before calling " + e)
                },
                createLogger: (t, i) => tG(e + " " + t, i)
            };
            return s
        },
        tJ = tG("[PostHog.js]"),
        tY = tJ.createLogger,
        tK = tY("[ExternalScriptsLoader]"),
        tX = (e, t, i) => {
            if (e.config.disable_external_dependency_loading) return tK.warn(t + " was requested but loading of external scripts is disabled."), i("Loading of external scripts is disabled");
            var s = null == a ? void 0 : a.querySelectorAll("script");
            if (s) {
                for (var r, n = 0; s.length > n; n++)
                    if (r = function() {
                            if (s[n].src === t) {
                                var e = s[n];
                                return e.__posthog_loading_callback_fired ? {
                                    v: i()
                                } : (e.addEventListener("load", t => {
                                    e.__posthog_loading_callback_fired = !0, i(void 0, t)
                                }), e.onerror = e => i(e), {
                                    v: void 0
                                })
                            }
                        }()) return r.v
            }
            var o = () => {
                if (!a) return i("document not found");
                var s = a.createElement("script");
                if (s.type = "text/javascript", s.crossOrigin = "anonymous", s.src = t, s.onload = e => {
                        s.__posthog_loading_callback_fired = !0, i(void 0, e)
                    }, s.onerror = e => i(e), e.config.prepare_external_dependency_script && (s = e.config.prepare_external_dependency_script(s)), !s) return i("prepare_external_dependency_script returned null");
                if ("head" === e.config.external_scripts_inject_target) a.head.appendChild(s);
                else {
                    var r, n = a.querySelectorAll("body > script");
                    n.length > 0 ? null == (r = n[0].parentNode) || r.insertBefore(s, n[0]) : a.body.appendChild(s)
                }
            };
            null != a && a.body ? o() : null == a || a.addEventListener("DOMContentLoaded", o)
        };
    v.__PosthogExtensions__ = v.__PosthogExtensions__ || {}, v.__PosthogExtensions__.loadExternalDependency = (e, t, i) => {
        if ("remote-config" !== t) {
            var s;
            if (e.config.strict_script_versioning) s = e.requestRouter.endpointFor("assets", "/static/" + e.version + "/" + t + ".js");
            else {
                var r = "/static/" + t + ".js?v=" + e.version;
                "toolbar" === t && (r = r + "&t=" + 3e5 * Math.floor(Date.now() / 3e5)), s = e.requestRouter.endpointFor("assets", r)
            }
            tX(e, s, i)
        } else {
            var n = e.requestRouter.endpointFor("assets", "/array/" + e.config.token + "/config.js");
            tX(e, n, i)
        }
    }, v.__PosthogExtensions__.loadSiteApp = (e, t, i) => {
        var s = e.requestRouter.endpointFor("api", t);
        tX(e, s, i)
    };
    var tQ = "$people_distinct_id",
        tZ = "$device_id",
        t0 = "$device_model",
        t1 = "__alias",
        t2 = "__timers",
        t3 = "$autocapture_disabled_server_side",
        t5 = "$heatmaps_enabled_server_side",
        t8 = "$exception_capture_enabled_server_side",
        t6 = "$error_tracking_suppression_rules",
        t4 = "$error_tracking_capture_extension_exceptions",
        t7 = "$web_vitals_enabled_server_side",
        t9 = "$dead_clicks_enabled_server_side",
        ie = "$product_tours_enabled_server_side",
        it = "$web_vitals_allowed_metrics",
        ii = "$session_recording_remote_config",
        is = "$replay_sample_rate",
        ir = "$replay_override_sampling",
        io = "$replay_override_linked_flag",
        ia = "$replay_override_url_trigger",
        il = "$replay_override_event_trigger",
        iu = "$sesid",
        ih = "$session_is_sampled",
        ic = "$enabled_feature_flags",
        id = "$active_feature_flags",
        ip = "$early_access_features",
        iv = "$feature_flag_details",
        ig = "$feature_flag_payloads",
        i_ = "$feature_flag_request_id",
        im = "$override_feature_flags",
        iy = "$override_feature_flag_payloads",
        ib = "$stored_person_properties",
        iw = "$stored_group_properties",
        ix = "$surveys",
        iS = "$surveys_loaded_at",
        iE = "$surveys_activated",
        ik = "ph_product_tours",
        iP = "$flag_call_reported",
        iF = "$flag_call_reported_session_id",
        i$ = "$feature_flag_errors",
        iI = "$feature_flag_evaluated_at",
        iC = "$user_state",
        iR = "$client_session_props",
        iT = "$capture_rate_limit",
        iA = "$initial_campaign_params",
        iM = "$initial_referrer_info",
        iO = "$initial_person_info",
        iL = "$epp",
        iD = "__POSTHOG_TOOLBAR__",
        iN = "$posthog_cookieless",
        iz = "$sdk_debug_extensions_init_method",
        ij = "$sdk_debug_extensions_init_time_ms",
        iq = "$sdk_debug_recording_script_not_loaded",
        iH = "PostHog loadExternalDependency extension not found.",
        iB = "on_reject",
        iU = "always",
        iV = "anonymous",
        iW = "identified",
        iG = "identified_only",
        iJ = "visibilitychange",
        iY = "beforeunload",
        iK = "$pageview",
        iX = "$pageleave",
        iQ = "$identify",
        iZ = "$groupidentify";

    function i0(e, t) {
        J(e) && e.forEach(t)
    }

    function i1(e, t) {
        if (!ei(e))
            if (J(e)) e.forEach(t);
            else if (e instanceof FormData) e.forEach((e, i) => t(e, i));
        else
            for (var i in e) W.call(e, i) && t(e[i], i)
    }
    var i2 = function(e) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; t > s; s++) i[s - 1] = arguments[s];
        for (var r of i)
            for (var n in r) void 0 !== r[n] && (e[n] = r[n]);
        return e
    };

    function i3(e) {
        for (var t = Object.keys(e), i = t.length, s = Array(i); i--;) s[i] = [t[i], e[t[i]]];
        return s
    }
    var i5 = function(e) {
            try {
                return e()
            } catch (e) {
                return
            }
        },
        i8 = function(e) {
            return function() {
                try {
                    for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                    return e.apply(this, i)
                } catch (e) {
                    tJ.critical("Implementation error. Please turn on debug mode and open a ticket on https://app.posthog.com/home#panel=support%3Asupport%3A."), tJ.critical(e)
                }
            }
        },
        i6 = function(e) {
            var t = {};
            return i1(e, function(e, i) {
                (Z(e) && e.length > 0 || es(e)) && (t[i] = e)
            }), t
        },
        i4 = ["herokuapp.com", "vercel.app", "netlify.app"];

    function i7(e, t, i, s) {
        var {
            capture: r = !1,
            passive: n = !0
        } = null != s ? s : {};
        null == e || e.addEventListener(t, i, {
            capture: r,
            passive: n
        })
    }

    function i9(e) {
        return "ph_toolbar_internal" === e.name
    }
    Math.trunc || (Math.trunc = function(e) {
        return 0 > e ? Math.ceil(e) : Math.floor(e)
    }), Number.isInteger || (Number.isInteger = function(e) {
        return es(e) && isFinite(e) && Math.floor(e) === e
    });
    class se {
        constructor(e) {
            if (this.bytes = e, 16 !== e.length) throw TypeError("not 128-bit length")
        }
        static fromFieldsV7(e, t, i, s) {
            if (!Number.isInteger(e) || !Number.isInteger(t) || !Number.isInteger(i) || !Number.isInteger(s) || 0 > e || 0 > t || 0 > i || 0 > s || e > 0xffffffffffff || t > 4095 || i > 0x3fffffff || s > 0xffffffff) throw RangeError("invalid field value");
            var r = new Uint8Array(16);
            return r[0] = e / 0x10000000000, r[1] = e / 0x100000000, r[2] = e / 0x1000000, r[3] = e / 65536, r[4] = e / 256, r[5] = e, r[6] = 112 | t >>> 8, r[7] = t, r[8] = 128 | i >>> 24, r[9] = i >>> 16, r[10] = i >>> 8, r[11] = i, r[12] = s >>> 24, r[13] = s >>> 16, r[14] = s >>> 8, r[15] = s, new se(r)
        }
        toString() {
            for (var e = "", t = 0; this.bytes.length > t; t++) e = e + (this.bytes[t] >>> 4).toString(16) + (15 & this.bytes[t]).toString(16), 3 !== t && 5 !== t && 7 !== t && 9 !== t || (e += "-");
            if (36 !== e.length) throw Error("Invalid UUIDv7 was generated");
            return e
        }
        clone() {
            return new se(this.bytes.slice(0))
        }
        equals(e) {
            return 0 === this.compareTo(e)
        }
        compareTo(e) {
            for (var t = 0; 16 > t; t++) {
                var i = this.bytes[t] - e.bytes[t];
                if (0 !== i) return Math.sign(i)
            }
            return 0
        }
    }
    class st {
        constructor() {
            this.S = 0, this.C = 0, this.I = new sa
        }
        generate() {
            var e = this.generateOrAbort();
            if (Q(e)) {
                this.S = 0;
                var t = this.generateOrAbort();
                if (Q(t)) throw Error("Could not generate UUID after timestamp reset");
                return t
            }
            return e
        }
        generateOrAbort() {
            var e = Date.now();
            if (e > this.S) this.S = e, this.M();
            else {
                if (this.S >= e + 1e4) return;
                this.C++, this.C > 0x3ffffffffff && (this.S++, this.M())
            }
            return se.fromFieldsV7(this.S, Math.trunc(this.C / 0x40000000), 0x3fffffff & this.C, this.I.nextUint32())
        }
        M() {
            this.C = 1024 * this.I.nextUint32() + (1023 & this.I.nextUint32())
        }
    }
    var si, ss, sr, sn, so = e => {
        if ("u" > typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG) throw Error("no cryptographically strong RNG available");
        for (var t = 0; e.length > t; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
        return e
    };
    r && !Q(r.crypto) && crypto.getRandomValues && (so = e => crypto.getRandomValues(e));
    class sa {
        constructor() {
            this.R = new Uint32Array(8), this.O = 1 / 0
        }
        nextUint32() {
            return this.R.length > this.O || (so(this.R), this.O = 0), this.R[this.O++]
        }
    }
    var sl = () => su().toString(),
        su = () => (sn || (sn = new st)).generate(),
        sh = "",
        sc = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i,
        sd = {
            N: () => !!a,
            D(e) {
                tJ.error("cookieStore error: " + e)
            },
            A(e) {
                if (a) {
                    try {
                        for (var t = e + "=", i = a.cookie.split(";").filter(e => e.length), s = 0; i.length > s; s++) {
                            for (var r = i[s];
                                " " == r.charAt(0);) r = r.substring(1, r.length);
                            if (0 === r.indexOf(t)) return decodeURIComponent(r.substring(t.length, r.length))
                        }
                    } catch (e) {}
                    return null
                }
            },
            F(e) {
                var t;
                try {
                    t = JSON.parse(sd.A(e)) || {}
                } catch (e) {}
                return t
            },
            q(e, t, i, s, r) {
                if (!a) return !1;
                try {
                    var n = "",
                        o = "",
                        l = function(e, t) {
                            if (t) {
                                var i = function(e, t) {
                                    if (void 0 === t && (t = a), sh) return sh;
                                    if (!t || ["localhost", "127.0.0.1"].includes(e)) return "";
                                    for (var i = e.split("."), s = Math.min(i.length, 8), r = "dmn_chk_" + sl(); !sh && s--;) {
                                        var n = i.slice(s).join("."),
                                            o = r + "=1;domain=." + n + ";path=/";
                                        t.cookie = o + ";max-age=3", t.cookie.includes(r) && (t.cookie = o + ";max-age=0", sh = n)
                                    }
                                    return sh
                                }(e);
                                if (!i) {
                                    var s, r = (s = e.match(sc)) ? s[0] : "";
                                    r !== i && tJ.info("Warning: cookie subdomain discovery mismatch", r, i), i = r
                                }
                                return i ? "; domain=." + i : ""
                            }
                            return ""
                        }(a.location.hostname, s);
                    if (i) {
                        var u = new Date;
                        u.setTime(u.getTime() + 864e5 * i), n = "; expires=" + u.toUTCString()
                    }
                    r && (o = "; secure");
                    var h = e + "=" + encodeURIComponent(JSON.stringify(t)) + n + "; SameSite=Lax; path=/" + l + o;
                    return h.length > 3686.4 && tJ.warn("cookieStore warning: large cookie, len=" + h.length), a.cookie = h, !0
                } catch (e) {
                    return !1
                }
            },
            P(e, t) {
                if (null != a && a.cookie) try {
                    sd.q(e, "", -1, t)
                } catch (e) {
                    return
                }
            }
        },
        sp = null,
        sv = {
            N() {
                if (!et(sp)) return sp;
                var e = !0;
                if (Q(r)) e = !1;
                else try {
                    var t = "__mplssupport__";
                    sv.q(t, "xyz"), '"xyz"' !== sv.A(t) && (e = !1), sv.P(t)
                } catch (t) {
                    e = !1
                }
                return e || tJ.error("localStorage unsupported; falling back to cookie store"), sp = e, e
            },
            D(e) {
                tJ.error("localStorage error: " + e)
            },
            A(e) {
                try {
                    return null == r ? void 0 : r.localStorage.getItem(e)
                } catch (e) {
                    sv.D(e)
                }
                return null
            },
            F(e) {
                try {
                    return JSON.parse(sv.A(e)) || {}
                } catch (e) {}
                return null
            },
            q(e, t) {
                try {
                    return null == r || r.localStorage.setItem(e, JSON.stringify(t)), !0
                } catch (e) {
                    sv.D(e)
                }
                return !1
            },
            P(e) {
                try {
                    null == r || r.localStorage.removeItem(e)
                } catch (e) {
                    sv.D(e)
                }
            }
        },
        sg = [tZ, "distinct_id", iu, ih, iL, iO, iC],
        s_ = {},
        sf = {
            N: () => !0,
            D(e) {
                tJ.error("memoryStorage error: " + e)
            },
            A: e => s_[e] || null,
            F: e => s_[e] || null,
            q: (e, t) => (s_[e] = t, !0),
            P(e) {
                delete s_[e]
            }
        },
        sm = null,
        sy = {
            N() {
                if (!et(sm)) return sm;
                if (sm = !0, Q(r)) sm = !1;
                else try {
                    var e = "__support__";
                    sy.q(e, "xyz"), '"xyz"' !== sy.A(e) && (sm = !1), sy.P(e)
                } catch (e) {
                    sm = !1
                }
                return sm
            },
            D(e) {
                tJ.error("sessionStorage error: ", e)
            },
            A(e) {
                try {
                    return null == r ? void 0 : r.sessionStorage.getItem(e)
                } catch (e) {
                    sy.D(e)
                }
                return null
            },
            F(e) {
                try {
                    return JSON.parse(sy.A(e)) || null
                } catch (e) {}
                return null
            },
            q(e, t) {
                try {
                    return null == r || r.sessionStorage.setItem(e, JSON.stringify(t)), !0
                } catch (e) {
                    sy.D(e)
                }
                return !1
            },
            P(e) {
                try {
                    null == r || r.sessionStorage.removeItem(e)
                } catch (e) {
                    sy.D(e)
                }
            }
        };
    class sb {
        constructor(e) {
            this._instance = e
        }
        get Se() {
            return this._instance.config
        }
        get consent() {
            return this.kt() ? 0 : this.St
        }
        isOptedOut() {
            return this.Se.cookieless_mode === iU || this.isRejected() || -1 === this.consent && this.Se.cookieless_mode === iB
        }
        isOptedIn() {
            return !this.isOptedOut()
        }
        isExplicitlyOptedOut() {
            return 0 === this.consent
        }
        isRejected() {
            return 0 === this.consent || -1 === this.consent && this.Se.opt_out_capturing_by_default
        }
        optInOut(e) {
            this.Ct.q(this.It, +!!e, this.Se.cookie_expiration, this.Se.cross_subdomain_cookie, this.Se.secure_cookie)
        }
        reset() {
            this.Ct.P(this.It, this.Se.cross_subdomain_cookie)
        }
        get It() {
            var {
                token: e,
                opt_out_capturing_cookie_prefix: t,
                consent_persistence_name: i
            } = this._instance.config;
            return i || (t ? t + e : "__ph_opt_in_out_" + e)
        }
        get St() {
            var e = this.Ct.A(this.It);
            return H(ec, e) ? 1 : H(ed, e) ? 0 : -1
        }
        get Ct() {
            var e = this.Se.opt_out_capturing_persistence_type,
                t = "localStorage" === e ? sv : sd;
            if (!this.Tt || this.Tt !== t) {
                this.Tt = t;
                var i = "localStorage" === e ? sd : sv;
                i.A(this.It) && (this.Tt.A(this.It) || this.optInOut(H(ec, i.A(this.It))), i.P(this.It, this.Se.cross_subdomain_cookie))
            }
            return this.Tt
        }
        kt() {
            return !!this.Se.respect_dnt && [null == o ? void 0 : o.doNotTrack, null == o ? void 0 : o.msDoNotTrack, v.doNotTrack].some(e => H(ec, e))
        }
    }

    function sw(e, t) {
        var i, s = null == e || null == (i = e.config) ? void 0 : i.get_current_url;
        if (!Y(s)) return t;
        try {
            var r = s(t);
            return Z(r) && r ? r : t
        } catch (e) {
            return tJ.error("Error in get_current_url, falling back to window.location.href", e), t
        }
    }

    function sx(e) {
        return e instanceof Element && (e.id === iD || !(null == e.closest || !e.closest(".toolbar-global-fade-container")))
    }

    function sS(e) {
        return !!e && 1 === e.nodeType
    }

    function sE(e, t) {
        return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase()
    }

    function sk(e) {
        return !!e && 3 === e.nodeType
    }

    function sP(e) {
        return !!e && 11 === e.nodeType && sS(e.host)
    }

    function sF(e) {
        return e ? B(e).split(/\s+/) : []
    }

    function s$(e, t) {
        var i, s, n = Q(s = null == r || null == (i = r.location) ? void 0 : i.href) ? void 0 : sw(t, s);
        return !!(n && e && e.some(e => n.match(e)))
    }

    function sI(e) {
        var t = "";
        switch (typeof e.className) {
            case "string":
                t = e.className;
                break;
            case "object":
                t = (e.className && "baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
                break;
            default:
                t = ""
        }
        return sF(t)
    }

    function sC(e) {
        return ei(e) ? null : B(e).split(/(\s+)/).filter(e => sZ(e)).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
    }

    function sR(e) {
        var t = "";
        return sV(e) && !sW(e) && e.childNodes && e.childNodes.length && i1(e.childNodes, function(e) {
            var i;
            sk(e) && e.textContent && (t += null != (i = sC(e.textContent)) ? i : "")
        }), B(t)
    }

    function sT(e) {
        var t;
        return Q(e.target) ? e.srcElement || null : null != (t = e.target) && t.shadowRoot ? e.composedPath()[0] || null : e.target || null
    }
    var sA = ["a", "button", "form", "input", "select", "textarea", "label"];

    function sM(e, t) {
        if (Q(t)) return !0;
        var i, s = function(e) {
            if (t.some(t => (function(e, t) {
                    var i = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
                    try {
                        return !!i && i.call(e, t)
                    } catch (e) {
                        return !1
                    }
                })(e, t))) return {
                v: !0
            }
        };
        for (var r of e)
            if (i = s(r)) return i.v;
        return !1
    }

    function sO(e) {
        var t = e.parentNode;
        return !(!t || !sS(t)) && t
    }
    var sL = [".ph-no-autocapture", "[data-ph-no-autocapture]"],
        sD = ["next", "previous", "prev", ">", "<"],
        sN = [...sD, "+", "-", "−", "–"],
        sz = (e, t) => /[a-z0-9]/i.test(t) ? e.includes(t) : e === t,
        sj = [".ph-no-rageclick", ".ph-no-capture"],
        sq = ["", "text", "search", "email", "password", "url", "tel", "number"];

    function sH(e, t) {
        if (!r || sB(e) || (en(t) ? (s = !!t && sj, n = void 0, o = !1) : (s = null != (a = null == t ? void 0 : t.css_selector_ignorelist) ? a : sj, n = null == t ? void 0 : t.content_ignorelist, o = null != (l = null == t ? void 0 : t.ignore_text_selection) && l), !1 === s) || o && !(!(i = e) || !sS(i)) && (sE(i, "textarea") || (sE(i, "input") ? H(sq, (i.getAttribute("type") || "").toLowerCase()) : function(e) {
                if (e.isContentEditable) return !0;
                var t = null == e.getAttribute ? void 0 : e.getAttribute("contenteditable");
                return "true" === t || "" === t
            }(i)))) return !1;
        var i, s, n, o, a, l, {
            targetElementList: u
        } = sU(e, !1);
        return ! function(e, t) {
            var i;
            if (!1 === e || Q(e)) return !1;
            if (!0 === e) i = sD;
            else {
                if (!J(e)) return !1;
                if (e.length > 10) return tJ.error("[PostHog] content_ignorelist array cannot exceed 10 items. Use css_selector_ignorelist for more complex matching."), !1;
                i = e.map(e => e.toLowerCase())
            }
            return t.some(e => {
                var {
                    safeText: t,
                    ariaLabel: s
                } = e;
                return i.some(e => sz(t, e) || sz(s, e))
            })
        }(n, u.map(e => {
            var t;
            return {
                safeText: sR(e).toLowerCase(),
                ariaLabel: (null == (t = e.getAttribute("aria-label")) ? void 0 : t.toLowerCase().trim()) || ""
            }
        })) && !sM(u, s)
    }
    var sB = e => !e || sE(e, "html") || !sS(e),
        sU = (e, t) => {
            if (!r || sB(e)) return {
                parentIsUsefulElement: !1,
                targetElementList: []
            };
            for (var i = !1, s = [e], n = e; n.parentNode && !sE(n, "body");)
                if (sP(n.parentNode)) s.push(n.parentNode.host), n = n.parentNode.host;
                else {
                    var o = sO(n);
                    if (!o) break;
                    if (t || sA.indexOf(o.tagName.toLowerCase()) > -1) i = !0;
                    else try {
                        var a = r.getComputedStyle(o);
                        a && "pointer" === a.getPropertyValue("cursor") && (i = !0)
                    } catch (e) {}
                    s.push(o), n = o
                }
            return {
                parentIsUsefulElement: i,
                targetElementList: s
            }
        };

    function sV(e) {
        for (var t = e; t.parentNode && !sE(t, "body"); t = t.parentNode) {
            var i = sI(t);
            if (H(i, "ph-sensitive") || H(i, "ph-no-capture")) return !1
        }
        if (H(sI(e), "ph-include")) return !0;
        var s = e.type || "";
        if (Z(s)) switch (s.toLowerCase()) {
            case "hidden":
            case "password":
                return !1
        }
        var r = e.name || e.id || "";
        return !Z(r) || !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(r.replace(/[^a-zA-Z0-9]/g, ""))
    }

    function sW(e) {
        return !!(sE(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type) || sE(e, "select") || sE(e, "textarea") || "true" === e.getAttribute("contenteditable"))
    }
    var sG = "(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11})",
        sJ = RegExp("^(?:" + sG + ")$"),
        sY = new RegExp(sG),
        sK = "\\d{3}-?\\d{2}-?\\d{4}",
        sX = RegExp("^(" + sK + ")$"),
        sQ = RegExp("(" + sK + ")");

    function sZ(e, t) {
        return void 0 === t && (t = !0), !(ei(e) || Z(e) && (e = B(e), (t ? sJ : sY).test((e || "").replace(/[- ]/g, "")) || (t ? sX : sQ).test(e))) && !0
    }

    function s0(e) {
        var t = sR(e);
        return sZ(t = (t + " " + function e(t) {
            var i = "";
            return t && t.childNodes && t.childNodes.length && i1(t.childNodes, function(t) {
                var s;
                if (t && "span" === (null == (s = t.tagName) ? void 0 : s.toLowerCase())) try {
                    var r = sR(t);
                    i = (i + " " + r).trim(), t.childNodes && t.childNodes.length && (i = (i + " " + e(t)).trim())
                } catch (e) {
                    tJ.error("[AutoCapture]", e)
                }
            }), i
        }(e)).trim()) ? t : ""
    }

    function s1(e) {
        return e.replace(/"|\\"/g, '\\"')
    }
    var s2 = tY("[Dead Clicks]"),
        s3 = () => !0,
        s5 = e => {
            var t, i = !(null == (t = e.instance.persistence) || !t.get_property(t9)),
                s = e.instance.config.capture_dead_clicks;
            return en(s) ? s : !!K(s) || i
        };
    class s8 {
        get lazyLoadedDeadClicksAutocapture() {
            return this.Et
        }
        constructor(e, t, i) {
            this.instance = e, this.isEnabled = t, this.onCapture = i, this.startIfEnabledOrStop()
        }
        onRemoteConfig(e) {
            "captureDeadClicks" in e && (this.instance.persistence && this.instance.persistence.register({
                [t9]: e.captureDeadClicks
            }), this.startIfEnabledOrStop())
        }
        startIfEnabledOrStop() {
            this.isEnabled(this) ? this.Mt(() => {
                this.Pt()
            }) : this.stop()
        }
        Mt(e) {
            var t, i;
            null != (t = v.__PosthogExtensions__) && t.initDeadClicksAutocapture ? e() : null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this.instance, "dead-clicks-autocapture", t => {
                t ? s2.error("failed to load script", t) : e()
            })
        }
        Pt() {
            var e;
            if (a) {
                if (!this.Et && null != (e = v.__PosthogExtensions__) && e.initDeadClicksAutocapture) {
                    var t = K(this.instance.config.capture_dead_clicks) ? this.instance.config.capture_dead_clicks : {};
                    t.__onCapture = this.onCapture, this.Et = v.__PosthogExtensions__.initDeadClicksAutocapture(this.instance, t), this.Et.start(a), s2.info("starting...")
                }
            } else s2.error("`document` not found. Cannot start.")
        }
        stop() {
            this.Et && (this.Et.stop(), this.Et = void 0, s2.info("stopping..."))
        }
    }
    var s6 = tY("[SegmentIntegration]"),
        s4 = "posthog-js";

    function s7(e, t) {
        var {
            organization: i,
            projectId: s,
            prefix: r,
            severityAllowList: n = ["error"],
            sendExceptionsToPostHog: o = !0
        } = void 0 === t ? {} : t;
        return t => {
            if ("*" !== n && !n.includes(t.level) || !e.__loaded) return t;
            t.tags || (t.tags = {});
            var a = e.requestRouter.endpointFor("ui", "/project/" + e.config.token + "/person/" + e.get_distinct_id());
            t.tags["PostHog Person URL"] = a, e.sessionRecordingStarted() && (t.tags["PostHog Recording URL"] = e.get_session_replay_url({
                withTimestamp: !0
            }));
            var l, u, h, c, d, p, v = (null == (l = t.exception) ? void 0 : l.values) || [],
                g = v.map(e => b({}, e, {
                    stacktrace: e.stacktrace ? b({}, e.stacktrace, {
                        type: "raw",
                        frames: (e.stacktrace.frames || []).map(e => b({}, e, {
                            platform: "web:javascript"
                        }))
                    }) : void 0
                })),
                _ = {
                    $exception_message: (null == (u = v[0]) ? void 0 : u.value) || t.message,
                    $exception_type: null == (h = v[0]) ? void 0 : h.type,
                    $exception_level: t.level,
                    $exception_list: g,
                    $sentry_event_id: t.event_id,
                    $sentry_exception: t.exception,
                    $sentry_exception_message: (null == (c = v[0]) ? void 0 : c.value) || t.message,
                    $sentry_exception_type: null == (d = v[0]) ? void 0 : d.type,
                    $sentry_tags: t.tags
                };
            return i && s && (_.$sentry_url = (r || "https://sentry.io/organizations/") + i + "/issues/?project=" + s + "&query=" + t.event_id), o && (null == (p = e.exceptions) || p.sendExceptionEvent(_)), t
        }
    }
    class s9 {
        constructor(e, t, i, s, r, n) {
            this.name = s4, this.setupOnce = function(o) {
                o(s7(e, {
                    organization: t,
                    projectId: i,
                    prefix: s,
                    severityAllowList: r,
                    sendExceptionsToPostHog: null == n || n
                }))
            }
        }
    }
    class re {
        constructor(e) {
            this.Rt = (e, t, i) => {
                i && (i.noSessionId || i.activityTimeout || i.sessionPastMaximumLength || i.crossTabAdoption) && (tJ.info("[PageViewManager] Session rotated, clearing pageview state", {
                    sessionId: e,
                    changeReason: i
                }), this.Ot = void 0, this._instance.scrollManager.resetContext())
            }, this._instance = e, this.Lt()
        }
        Lt() {
            var e;
            this.Ft = null == (e = this._instance.sessionManager) ? void 0 : e.onSessionId(this.Rt)
        }
        destroy() {
            var e;
            null == (e = this.Ft) || e.call(this), this.Ft = void 0
        }
        doPageView(e, t) {
            var i, s = this.At(e, t);
            return this.Ot = {
                pathname: null != (i = null == r ? void 0 : r.location.pathname) ? i : "",
                pageViewId: t,
                timestamp: e
            }, this._instance.scrollManager.resetContext(), s
        }
        doPageLeave(e) {
            var t;
            return this.At(e, null == (t = this.Ot) ? void 0 : t.pageViewId)
        }
        doEvent() {
            var e;
            return {
                $pageview_id: null == (e = this.Ot) ? void 0 : e.pageViewId
            }
        }
        At(e, t) {
            var i = this.Ot;
            if (!i) return {
                $pageview_id: t
            };
            var s = {
                    $pageview_id: t,
                    $prev_pageview_id: i.pageViewId
                },
                r = this._instance.scrollManager.getContext();
            if (r && !this._instance.config.disable_scroll_properties) {
                var {
                    maxScrollHeight: n,
                    lastScrollY: o,
                    maxScrollY: a,
                    maxContentHeight: l,
                    lastContentY: u,
                    maxContentY: h
                } = r;
                if (!(Q(n) || Q(o) || Q(a) || Q(l) || Q(u) || Q(h))) {
                    n = Math.ceil(n), o = Math.ceil(o), a = Math.ceil(a), l = Math.ceil(l), u = Math.ceil(u), h = Math.ceil(h);
                    var c = n > 1 ? ep(o / n, 0, 1, tJ) : 1,
                        d = n > 1 ? ep(a / n, 0, 1, tJ) : 1,
                        p = l > 1 ? ep(u / l, 0, 1, tJ) : 1,
                        v = l > 1 ? ep(h / l, 0, 1, tJ) : 1;
                    s = i2(s, {
                        $prev_pageview_last_scroll: o,
                        $prev_pageview_last_scroll_percentage: c,
                        $prev_pageview_max_scroll: a,
                        $prev_pageview_max_scroll_percentage: d,
                        $prev_pageview_last_content: u,
                        $prev_pageview_last_content_percentage: p,
                        $prev_pageview_max_content: h,
                        $prev_pageview_max_content_percentage: v
                    })
                }
            }
            return i.pathname && (s.$prev_pageview_pathname = i.pathname), i.timestamp && (s.$prev_pageview_duration = (e.getTime() - i.timestamp.getTime()) / 1e3), s
        }
    }
    var rt = ["flags", "surveys"],
        ri = {
            [tQ]: {
                exposure: "hidden"
            },
            [t1]: {
                exposure: "hidden"
            },
            __cmpns: {
                exposure: "hidden"
            },
            [t2]: {
                exposure: "hidden"
            },
            [t3]: {
                exposure: "event"
            },
            [t5]: {
                exposure: "hidden"
            },
            [t8]: {
                exposure: "event"
            },
            [t6]: {
                exposure: "hidden"
            },
            [t4]: {
                exposure: "event"
            },
            [t7]: {
                exposure: "event"
            },
            [t9]: {
                exposure: "event"
            },
            [ie]: {
                exposure: "hidden"
            },
            [it]: {
                exposure: "event"
            },
            [ii]: {
                exposure: "hidden"
            },
            $session_recording_enabled_server_side: {
                exposure: "hidden"
            },
            [iu]: {
                exposure: "hidden"
            },
            [ih]: {
                exposure: "event"
            },
            [is]: {
                exposure: "event",
                shouldSkipFromEventProperties: e => et(e)
            },
            $session_past_minimum_duration: {
                exposure: "event"
            },
            $session_recording_url_trigger_activated_session: {
                exposure: "event"
            },
            $session_recording_event_trigger_activated_session: {
                exposure: "event"
            },
            $debug_first_full_snapshot_timestamp: {
                exposure: "event"
            },
            $sess_rec_flush_size: {
                exposure: "hidden"
            },
            [ic]: {
                exposure: "derived",
                storageGroup: "flags",
                shouldSkipFromEventProperties: (e, t) => t(),
                transformToEventProperties(e) {
                    if (!K(e)) return {};
                    for (var t = {}, i = Object.keys(e), s = 0; i.length > s; s++) t["$feature/" + i[s]] = e[i[s]];
                    return t
                }
            },
            [id]: {
                exposure: "event",
                storageGroup: "flags"
            },
            [ip]: {
                exposure: "hidden"
            },
            [iv]: {
                exposure: "hidden",
                storageGroup: "flags"
            },
            [ig]: {
                exposure: "event",
                storageGroup: "flags"
            },
            [i_]: {
                exposure: "event",
                storageGroup: "flags",
                volatile: !0
            },
            [im]: {
                exposure: "event"
            },
            [iy]: {
                exposure: "hidden"
            },
            [ib]: {
                exposure: "hidden"
            },
            [iw]: {
                exposure: "hidden"
            },
            [ix]: {
                exposure: "hidden",
                storageGroup: "surveys"
            },
            [iS]: {
                exposure: "hidden",
                storageGroup: "surveys",
                volatile: !0
            },
            [iE]: {
                exposure: "event"
            },
            [ik]: {
                exposure: "hidden"
            },
            $product_tours_activated: {
                exposure: "hidden"
            },
            $conversations_widget_session_id: {
                exposure: "event"
            },
            $conversations_ticket_id: {
                exposure: "event"
            },
            $conversations_widget_state: {
                exposure: "event"
            },
            $conversations_user_traits: {
                exposure: "event"
            },
            [iP]: {
                exposure: "hidden"
            },
            [iF]: {
                exposure: "hidden"
            },
            [i$]: {
                exposure: "hidden"
            },
            [iI]: {
                exposure: "hidden",
                storageGroup: "flags",
                volatile: !0
            },
            [iC]: {
                exposure: "hidden"
            },
            [iR]: {
                exposure: "hidden"
            },
            [iT]: {
                exposure: "hidden"
            },
            [iA]: {
                exposure: "hidden"
            },
            [iM]: {
                exposure: "hidden"
            },
            [iO]: {
                exposure: "hidden"
            },
            [iL]: {
                exposure: "hidden"
            },
            [ir]: {
                exposure: "event"
            },
            [io]: {
                exposure: "event"
            },
            [ia]: {
                exposure: "event"
            },
            [il]: {
                exposure: "event"
            },
            [iz]: {
                exposure: "event"
            },
            [ij]: {
                exposure: "event"
            },
            [iq]: {
                exposure: "event"
            },
            $sdk_debug_replay_event_trigger_status: {
                exposure: "event"
            },
            $sdk_debug_replay_linked_flag_trigger_status: {
                exposure: "event"
            },
            $sdk_debug_replay_matched_recording_trigger_groups: {
                exposure: "event"
            },
            $sdk_debug_replay_remote_trigger_matching_config: {
                exposure: "event"
            },
            $sdk_debug_replay_trigger_groups_count: {
                exposure: "event"
            },
            $sdk_debug_replay_url_trigger_status: {
                exposure: "event"
            },
            $session_recording_start_reason: {
                exposure: "event"
            }
        },
        rs = [
            ["$posthog_sr_group_event_trigger_", {
                exposure: "hidden"
            }],
            ["$posthog_sr_group_url_trigger_", {
                exposure: "hidden"
            }],
            ["$posthog_sr_group_sampling_", {
                exposure: "hidden"
            }]
        ],
        rr = e => {
            var t = ri[e];
            if (t) return t;
            for (var [i, s] of rs)
                if (0 === e.indexOf(i)) return s
        },
        rn = e => {
            var t = null == a ? void 0 : a.createElement("a");
            return Q(t) ? null : (t.href = e, t)
        },
        ro = function(e, t) {
            for (var i, s = ((e.split("#")[0] || "").split(/\?(.*)/)[1] || "").replace(/^\?+/g, "").split("&"), r = 0; s.length > r; r++) {
                var n = s[r].split("=");
                if (n[0] === t) {
                    i = n;
                    break
                }
            }
            if (!J(i) || 2 > i.length) return "";
            var o = i[1];
            try {
                o = decodeURIComponent(o)
            } catch (e) {
                tJ.error("Skipping decoding for malformed query param: " + o)
            }
            return o.replace(/\+/g, " ")
        },
        ra = function(e, t, i) {
            if (!e || !t || !t.length) return e;
            for (var s = e.split("#"), r = s[1], n = (s[0] || "").split("?"), o = n[1], a = n[0], l = (o || "").split("&"), u = [], h = 0; l.length > h; h++) {
                var c = l[h].split("=");
                J(c) && (t.includes(c[0]) ? u.push(c[0] + "=" + i) : u.push(l[h]))
            }
            var d = a;
            return null != o && (d += "?" + u.join("&")), null != r && (d += "#" + r), d
        },
        rl = function(e, t) {
            var i = e.match(RegExp(t + "=([^&]*)"));
            return i ? i[1] : null
        },
        ru = (e, t) => e >= t && g(),
        rh = (e, t, i, s) => {
            if (0 === e) {
                if (g()) {
                    var r = t + 1;
                    return r === i && s(), r
                }
                return t
            }
            return 0
        },
        rc = "https?://(.*)",
        rd = ["gclid", "gclsrc", "dclid", "gbraid", "wbraid", "fbclid", "msclkid", "twclid", "li_fat_id", "igshid", "ttclid", "rdt_cid", "epik", "qclid", "sccid", "irclid", "_kx"],
        rp = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gad_source", "mc_cid", ...rd],
        rv = "<masked>",
        rg = ["li_fat_id"];

    function r_(e, t, i) {
        if (!a) return {};
        var s, r = t ? [...rd, ...i || []] : [],
            n = rf(ra(a.URL, r, rv), e);
        return i2((s = {}, i1(rg, function(e) {
            var t = sd.A(e);
            s[e] = t || null
        }), s), n)
    }

    function rf(e, t) {
        var i = rp.concat(t || []),
            s = {};
        return i1(i, function(t) {
            var i = ro(e, t);
            s[t] = i || null
        }), s
    }

    function rm(e) {
        var t = e ? 0 === e.search(rc + "google.([^/?]*)") ? "google" : 0 === e.search(rc + "bing.com") ? "bing" : 0 === e.search(rc + "yahoo.com") ? "yahoo" : 0 === e.search(rc + "duckduckgo.com") ? "duckduckgo" : null : null,
            i = {};
        if (!et(t)) {
            i.$search_engine = t;
            var s = a ? ro(a.referrer, "yahoo" != t ? "q" : "p") : "";
            s.length && (i.ph_keyword = s)
        }
        return i
    }

    function ry() {
        return navigator.language || navigator.userLanguage
    }
    var rb = "$direct";

    function rw() {
        return (null == a ? void 0 : a.referrer) || rb
    }

    function rx(e, t, i) {
        void 0 === i && (i = !1);
        var s = e ? [...rd, ...t || []] : [],
            r = i ? th(null == l ? void 0 : l.href) : null == l ? void 0 : l.href,
            n = null == r ? void 0 : r.substring(0, 1e3);
        return {
            r: rw().substring(0, 1e3),
            u: n ? ra(n, s, rv) : void 0
        }
    }

    function rS(e, t) {
        void 0 === t && (t = !1);
        var i, {
                r: s,
                u: r
            } = e,
            n = t ? th(r) : r,
            o = {
                $referrer: s,
                $referring_domain: null == s ? void 0 : s == rb ? rb : null == (i = rn(s)) ? void 0 : i.host
            };
        if (n) {
            o.$current_url = n;
            var a = rn(n);
            o.$host = null == a ? void 0 : a.host, o.$pathname = null == a ? void 0 : a.pathname, i2(o, rf(n))
        }
        return s && i2(o, rm(s)), o
    }

    function rE() {
        try {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
        } catch (e) {
            return
        }
    }
    var rk = {
            flags: iI,
            surveys: iS
        },
        rP = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
        rF = "main";
    class r$ {
        constructor(e, t, i) {
            if (void 0 === i && (i = !0), this.$t = {}, this.Dt = !1, this.Nt = !1, this.Se = e, this.qt = i, this.props = {}, this.Bt = !1, this.jt = (e => {
                    var t = "";
                    return e.token && (t = e.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")), e.persistence_name ? "ph_" + e.persistence_name : "ph_" + t + "_posthog"
                })(e), this.Ct = this.Ht(e), this.Nt = this.Ut(e), this.load(), e.debug && tJ.info("Persistence loaded", e.persistence, b({}, this.props)), this.update_config(e, e, t), this.save(), r) {
                var s = () => this.flush();
                i7(r, "beforeunload", s, {
                    capture: !1
                }), i7(r, "pagehide", s, {
                    capture: !1
                })
            }
        }
        zt() {
            var e, t = null == (e = this.Se) ? void 0 : e.persistence_save_debounce_ms;
            return es(t) && t > 0 ? t : 0
        }
        isDisabled() {
            return !!this.Vt
        }
        Ht(e) {
            -1 === rP.indexOf(e.persistence.toLowerCase()) && (tJ.critical("Unknown persistence type " + e.persistence + "; falling back to localStorage+cookie"), e.persistence = "localStorage+cookie");
            var t, i, s, n, o = (t = e.cookie_persisted_properties || [], i = e.__preview_cookie_wins_on_conflict || !1, void 0 === t && (t = []), void 0 === i && (i = !1), s = [...sg, ...t], b({}, sv, {
                    F(e) {
                        try {
                            var t = {};
                            try {
                                t = sd.F(e) || {}
                            } catch (e) {}
                            var s, r = JSON.parse(sv.A(e) || "{}");
                            if (i) {
                                var n = {};
                                for (var o in t) {
                                    var a = t[o];
                                    et(a) || "" === a || (n[o] = a)
                                }
                                s = i2(r, n)
                            } else s = i2(t, r);
                            return sv.q(e, s), s
                        } catch (e) {}
                        return null
                    },
                    q(e, t, i, r, n, o) {
                        var a = sv.q(e, t, void 0, void 0, o);
                        try {
                            var l = {};
                            s.forEach(e => {
                                t[e] && (l[e] = t[e])
                            }), Object.keys(l).length && sd.q(e, l, i, r, n, o)
                        } catch (e) {
                            sv.D(e)
                        }
                        return a
                    },
                    P(e, t) {
                        try {
                            null == r || r.localStorage.removeItem(e), sd.P(e, t)
                        } catch (e) {
                            sv.D(e)
                        }
                    }
                })),
                a = !1,
                l = e.persistence.toLowerCase();
            return "localstorage" === l && sv.N() ? (n = sv, a = !0) : "localstorage+cookie" === l && o.N() ? (n = o, a = !0) : "sessionstorage" === l && sy.N() ? n = sy : "memory" === l ? n = sf : "cookie" === l ? n = sd : o.N() ? (n = o, a = !0) : n = sd, this.Dt = a, n
        }
        Wt(e) {
            return this.jt + "__" + e
        }
        Ut(e) {
            return this.Dt && !!e.split_storage
        }
        Gt(e) {
            var t = null != e ? e : this.Se.feature_flag_cache_ttl_ms;
            if (!t || 0 >= t) return !1;
            var i = this.props[iI];
            return !i || "number" != typeof i || Date.now() - i > t
        }
        properties() {
            var e = {};
            return i1(this.props, (t, i) => {
                var s = rr(i);
                if ("derived" === (null == s ? void 0 : s.exposure)) {
                    if (null != s.shouldSkipFromEventProperties && s.shouldSkipFromEventProperties(t, i === ic ? () => this.Gt() : () => !1)) return;
                    s.transformToEventProperties && i2(e, s.transformToEventProperties(t))
                } else if (!s || "event" === s.exposure) {
                    if (null != s && null != s.shouldSkipFromEventProperties && s.shouldSkipFromEventProperties(t, () => !1)) return;
                    e[i] = t
                }
            }), e
        }
        load() {
            if (!this.Vt) {
                var e = this.Ct.F(this.jt);
                e && (this.props = i2({}, e)), this.Nt && this.Zt()
            }
        }
        Zt() {
            for (var e of rt) {
                var t = sv.F(this.Wt(e));
                if (t && !X(t)) {
                    var i = this.Qt(e);
                    i.persisted = !0, this.Jt(e) || (i.fingerprint = this.Yt(t, e)), this.Kt(e, t) || i2(this.props, t)
                }
            }
        }
        Jt(e) {
            return Object.keys(this.props).some(t => {
                var i;
                return (null == (i = rr(t)) ? void 0 : i.storageGroup) === e
            })
        }
        Kt(e, t) {
            var i = rk[e];
            if (!i) return !1;
            var s = t[i],
                r = this.props[i];
            return es(s) && es(r) && r > s
        }
        refreshKey(e) {
            var t;
            if (!this.Vt) {
                var i = this.Nt ? null == (t = rr(e)) ? void 0 : t.storageGroup : void 0,
                    s = i ? sv.F(this.Wt(i)) : this.Ct.F(this.jt);
                if (s && e in s) this.Xt(e, s[e]);
                else {
                    if (i) {
                        var r = this.Ct.F(this.jt);
                        if (r && e in r) return void this.Xt(e, r[e])
                    }
                    this.er(e)
                }
            }
        }
        save() {
            if (!this.Vt) {
                var e = this.zt();
                e > 0 ? Q(this.tr) && (this.tr = setTimeout(() => {
                    this.tr = void 0, this.rr()
                }, e)) : this.rr()
            }
        }
        flush() {
            Q(this.tr) || (clearTimeout(this.tr), this.tr = void 0, this.rr())
        }
        rr() {
            this.Vt || (this.Nt ? this.ir() : this.nr(this.Ct, this.jt, this.props, rF))
        }
        ir() {
            var {
                main: e,
                groups: t
            } = this.sr();
            for (var i of (this.nr(this.Ct, this.jt, e, rF), rt)) {
                var s, r = t[i];
                (!X(r) || null != (s = this.$t[i]) && s.persisted) && this.nr(sv, this.Wt(i), r, i)
            }
        }
        sr() {
            var e = {},
                t = {};
            for (var i of rt) t[i] = {};
            return i1(this.props, (i, s) => {
                var r, n = null == (r = rr(s)) ? void 0 : r.storageGroup;
                n ? t[n][s] = i : e[s] = i
            }), {
                main: e,
                groups: t
            }
        }
        Yt(e, t) {
            if (t === rF) return JSON.stringify(e) + "|" + this.ar + "|" + this.lr + "|" + this.ur;
            var i = {};
            return i1(e, (e, t) => {
                var s;
                i[t] = null != (s = rr(t)) && s.volatile ? "__volatile__" : e
            }), JSON.stringify(i)
        }
        nr(e, t, i, s) {
            var r, n = this.Qt(s);
            if (s === rF || n.dirty || Q(n.fingerprint)) {
                try {
                    if ((r = this.Yt(i, s)) === n.fingerprint) return void(n.dirty = !1)
                } catch (e) {
                    r = void 0
                }
                e.q(t, i, this.ar, this.lr, this.ur, this.Se.debug) ? (n.dirty = !1, s !== rF && (n.persisted = !0), Q(r) || (n.fingerprint = r)) : this.Se.debug && tJ.warn('failed to persist storage entry "' + t + '"; will retry on next save')
            }
        }
        remove(e) {
            var {
                keepGroupEntries: t = !1
            } = void 0 === e ? {} : e;
            if (Q(this.tr) || (clearTimeout(this.tr), this.tr = void 0), this.Ct.P(this.jt, !1), this.Ct.P(this.jt, !0), !t && this.qt)
                for (var i of rt) sv.P(this.Wt(i));
            t ? delete this.$t[rF] : this.$t = {}
        }
        clear() {
            this.remove(), this.props = {}
        }
        register_once(e, t, i) {
            if (K(e)) {
                Q(t) && (t = "None"), this.ar = Q(i) ? this.hr : i;
                var s = !1;
                if (i1(e, (e, i) => {
                        this.props.hasOwnProperty(i) && this.props[i] !== t || (this.Xt(i, e), s = !0)
                    }), s) return this.save(), !0
            }
            return !1
        }
        register(e, t) {
            if (K(e)) {
                this.ar = Q(t) ? this.hr : t;
                var i = !1;
                if (i1(e, (t, s) => {
                        e.hasOwnProperty(s) && this.props[s] !== t && (this.Xt(s, t), i = !0)
                    }), i) return this.save(), !0
            }
            return !1
        }
        unregister(e) {
            e in this.props && (this.er(e), this.save())
        }
        update_campaign_params() {
            if (!this.Bt) {
                var e = r_(this.Se.custom_campaign_params, this.Se.mask_personal_data_properties, this.Se.custom_personal_data_properties);
                X(i6(e)) || this.register(e), this.Bt = !0
            }
        }
        update_search_keyword() {
            var e;
            this.register((e = null == a ? void 0 : a.referrer) ? rm(e) : {})
        }
        update_referrer_info() {
            var e;
            this.register_once({
                $referrer: rw(),
                $referring_domain: null != a && a.referrer && (null == (e = rn(a.referrer)) ? void 0 : e.host) || rb
            }, void 0)
        }
        set_initial_person_info() {
            this.props[iA] || this.props[iM] || this.register_once({
                [iO]: rx(this.Se.mask_personal_data_properties, this.Se.custom_personal_data_properties, this.Se.disable_capture_url_hashes)
            }, void 0)
        }
        get_initial_props() {
            var e, t, i, s = {};
            i1([iM, iA], e => {
                var t = this.props[e];
                t && i1(t, function(e, t) {
                    s["$initial_" + U(t)] = e
                })
            });
            var r = this.props[iO];
            return r && i2(s, (void 0 === (e = this.Se.disable_capture_url_hashes) && (e = !1), t = rS(r, e), i = {}, i1(t, function(e, t) {
                i["$initial_" + U(t)] = e
            }), i)), s
        }
        safe_merge(e) {
            return i1(this.props, function(t, i) {
                i in e || (e[i] = t)
            }), e
        }
        update_config(e, t, i) {
            this.hr = this.ar = e.cookie_expiration, this.set_disabled(e.disable_persistence || !!i), this.set_cross_subdomain(e.cross_subdomain_cookie), this.set_secure(e.secure_cookie);
            var s = e.persistence !== t.persistence || !((e, t) => {
                    if (e.length !== t.length) return !1;
                    var i = [...e].sort(),
                        s = [...t].sort();
                    return i.every((e, t) => e === s[t])
                })(e.cookie_persisted_properties || [], t.cookie_persisted_properties || []),
                r = s ? this.Ht(e) : this.Ct,
                n = this.Ut(e);
            if (s || n !== this.Nt) {
                var o = this.props;
                this.clear(), this.Ct = r, this.Nt = n, this.props = o, this.save()
            }
        }
        set_disabled(e) {
            this.Vt = e, this.Vt ? this.remove() : this.save()
        }
        set_cross_subdomain(e) {
            e !== this.lr && (this.lr = e, this.remove({
                keepGroupEntries: !0
            }), this.save())
        }
        set_secure(e) {
            e !== this.ur && (this.ur = e, this.remove({
                keepGroupEntries: !0
            }), this.save())
        }
        set_event_timer(e, t) {
            var i = this.props[t2] || {};
            i[e] = t, this.Xt(t2, i), this.save()
        }
        remove_event_timer(e) {
            var t = this.props[t2] || {},
                i = t[e];
            return Q(i) || (delete t[e], this.Xt(t2, t), this.save()), i
        }
        get_property(e) {
            return this.props[e]
        }
        set_property(e, t) {
            this.Xt(e, t), this.save()
        }
        Xt(e, t) {
            var i;
            this.props[e] = t, null != (i = rr(e)) && i.volatile || this.dr(e)
        }
        er(e) {
            delete this.props[e], this.dr(e)
        }
        dr(e) {
            var t, i = null == (t = rr(e)) ? void 0 : t.storageGroup;
            i && (this.Qt(i).dirty = !0)
        }
        Qt(e) {
            return this.$t[e] || (this.$t[e] = {})
        }
    }
    var rI = "events",
        rC = "cancelEvents",
        rR = "survey shown",
        rT = "survey dismissed",
        rA = "survey sent",
        rM = "popover",
        rO = tY("[RateLimiter]");
    class rL {
        constructor(e) {
            this.serverLimits = {}, this.lastEventRateLimited = !1, this.checkForLimiting = e => {
                var t = e.text;
                if (t && t.length) try {
                    (JSON.parse(t).quota_limited || []).forEach(e => {
                        rO.info((e || "events") + " is quota limited."), this.serverLimits[e] = (new Date).getTime() + 6e4
                    })
                } catch (e) {
                    return void rO.warn('could not rate limit - continuing. Error: "' + (null == e ? void 0 : e.message) + '"', {
                        text: t
                    })
                }
            }, this.instance = e, this.lastEventRateLimited = this.clientRateLimitContext(!0).isRateLimited
        }
        get captureEventsPerSecond() {
            var e;
            return (null == (e = this.instance.config.rate_limiting) ? void 0 : e.events_per_second) || 10
        }
        get captureEventsBurstLimit() {
            var e;
            return Math.max((null == (e = this.instance.config.rate_limiting) ? void 0 : e.events_burst_limit) || 10 * this.captureEventsPerSecond, this.captureEventsPerSecond)
        }
        clientRateLimitContext(e) {
            void 0 === e && (e = !1);
            var t, i, s, {
                    captureEventsBurstLimit: r,
                    captureEventsPerSecond: n
                } = this,
                o = (new Date).getTime(),
                a = null != (t = null == (i = this.instance.persistence) ? void 0 : i.get_property(iT)) ? t : {
                    tokens: r,
                    last: o
                };
            a.tokens += (o - a.last) / 1e3 * n, a.last = o, a.tokens > r && (a.tokens = r);
            var l = 1 > a.tokens;
            return l || e || (a.tokens = Math.max(0, a.tokens - 1)), !l || this.lastEventRateLimited || e || this.instance.capture("$$client_ingestion_warning", {
                $$client_ingestion_warning_message: "posthog-js client rate limited. Config is set to " + n + " events per second and " + r + " events burst limit."
            }, {
                skip_client_rate_limiting: !0
            }), this.lastEventRateLimited = l, null == (s = this.instance.persistence) || s.set_property(iT, a), {
                isRateLimited: l,
                remainingTokens: a.tokens
            }
        }
        isServerRateLimited(e) {
            var t = this.serverLimits[e || "events"] || !1;
            return !1 !== t && (new Date).getTime() < t
        }
    }
    var rD = tY("[RemoteConfig]");
    class rN {
        constructor(e) {
            this._instance = e
        }
        get remoteConfig() {
            var e;
            return null == (e = v._POSTHOG_REMOTE_CONFIG) || null == (e = e[this._instance.config.token]) ? void 0 : e.config
        }
        cr(e) {
            var t, i;
            null != (t = v.__PosthogExtensions__) && t.loadExternalDependency ? null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, "remote-config", () => e(this.remoteConfig)) : e()
        }
        vr(e) {
            this._instance._send_request({
                method: "GET",
                url: this._instance.requestRouter.endpointFor("assets", "/array/" + this._instance.config.token + "/config"),
                callback(t) {
                    e(t.json)
                }
            })
        }
        load() {
            try {
                if (this.remoteConfig) return rD.info("Using preloaded remote config", this.remoteConfig), this.pr(this.remoteConfig), void this.gr();
                if (this._instance.mr()) return void rD.warn("Remote config is disabled. Falling back to local config.");
                this.cr(e => {
                    e ? (this.pr(e), this.gr()) : (rD.info("No config found after loading remote JS config. Falling back to JSON."), this.vr(e => {
                        this.pr(e), this.gr()
                    }))
                })
            } catch (e) {
                rD.error("Error loading remote config", e)
            }
        }
        stop() {
            this.yr && (clearInterval(this.yr), this.yr = void 0)
        }
        refresh() {
            !this._instance.mr() && a && "hidden" !== a.visibilityState && this._instance.reloadFeatureFlags()
        }
        gr() {
            var e;
            if (!this.yr) {
                var t = null != (e = this._instance.config.remote_config_refresh_interval_ms) ? e : 3e5;
                0 !== t && (this.yr = setInterval(() => {
                    this.refresh()
                }, t))
            }
        }
        pr(e) {
            var t;
            e || rD.error("Failed to fetch remote config from PostHog."), this._instance.pr(null != e ? e : {}), !1 !== (null == e ? void 0 : e.hasFeatureFlags) && (this._instance.config.advanced_disable_feature_flags_on_first_load || null == (t = this._instance.featureFlags) || t.ensureFlagsLoaded())
        }
    }
    var rz = "gzip-js",
        rj = "base64",
        rq = Uint8Array,
        rH = Uint16Array,
        rB = Uint32Array,
        rU = new rq([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
        rV = new rq([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
        rW = new rq([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
        rG = function(e, t) {
            for (var i = new rH(31), s = 0; 31 > s; ++s) i[s] = t += 1 << e[s - 1];
            var r = new rB(i[30]);
            for (s = 1; 30 > s; ++s)
                for (var n = i[s]; i[s + 1] > n; ++n) r[n] = n - i[s] << 5 | s;
            return [i, r]
        },
        rJ = rG(rU, 2),
        rY = rJ[1];
    rJ[0][28] = 258, rY[258] = 28;
    for (var rK = rG(rV, 0)[1], rX = new rH(32768), rQ = 0; 32768 > rQ; ++rQ) {
        var rZ = (43690 & rQ) >>> 1 | (21845 & rQ) << 1;
        rX[rQ] = ((65280 & (rZ = (61680 & (rZ = (52428 & rZ) >>> 2 | (13107 & rZ) << 2)) >>> 4 | (3855 & rZ) << 4)) >>> 8 | (255 & rZ) << 8) >>> 1
    }
    var r0 = function(e, t, i) {
            for (var s = e.length, r = 0, n = new rH(t); s > r; ++r) ++n[e[r] - 1];
            var o, a = new rH(t);
            for (r = 0; t > r; ++r) a[r] = a[r - 1] + n[r - 1] << 1;
            if (i) {
                o = new rH(1 << t);
                var l = 15 - t;
                for (r = 0; s > r; ++r)
                    if (e[r])
                        for (var u = r << 4 | e[r], h = t - e[r], c = a[e[r] - 1]++ << h, d = c | (1 << h) - 1; d >= c; ++c) o[rX[c] >>> l] = u
            } else
                for (o = new rH(s), r = 0; s > r; ++r) o[r] = rX[a[e[r] - 1]++] >>> 15 - e[r];
            return o
        },
        r1 = new rq(288);
    for (rQ = 0; 144 > rQ; ++rQ) r1[rQ] = 8;
    for (rQ = 144; 256 > rQ; ++rQ) r1[rQ] = 9;
    for (rQ = 256; 280 > rQ; ++rQ) r1[rQ] = 7;
    for (rQ = 280; 288 > rQ; ++rQ) r1[rQ] = 8;
    var r2 = new rq(32);
    for (rQ = 0; 32 > rQ; ++rQ) r2[rQ] = 5;
    var r3 = r0(r1, 9, 0),
        r5 = r0(r2, 5, 0),
        r8 = function(e) {
            return (e / 8 | 0) + (7 & e && 1)
        },
        r6 = function(e, t, i) {
            (null == i || i > e.length) && (i = e.length);
            var s = new(e instanceof rH ? rH : e instanceof rB ? rB : rq)(i - t);
            return s.set(e.subarray(t, i)), s
        },
        r4 = function(e, t, i) {
            var s = t / 8 | 0;
            e[s] |= i <<= 7 & t, e[s + 1] |= i >>> 8
        },
        r7 = function(e, t, i) {
            var s = t / 8 | 0;
            e[s] |= i <<= 7 & t, e[s + 1] |= i >>> 8, e[s + 2] |= i >>> 16
        },
        r9 = function(e, t) {
            for (var i = [], s = 0; e.length > s; ++s) e[s] && i.push({
                s: s,
                f: e[s]
            });
            var r = i.length,
                n = i.slice();
            if (!r) return [new rq(0), 0];
            if (1 == r) {
                var o = new rq(i[0].s + 1);
                return o[i[0].s] = 1, [o, 1]
            }
            i.sort(function(e, t) {
                return e.f - t.f
            }), i.push({
                s: -1,
                f: 25001
            });
            var a = i[0],
                l = i[1],
                u = 0,
                h = 1,
                c = 2;
            for (i[0] = {
                    s: -1,
                    f: a.f + l.f,
                    l: a,
                    r: l
                }; h != r - 1;) a = i[i[c].f > i[u].f ? u++ : c++], l = i[u != h && i[c].f > i[u].f ? u++ : c++], i[h++] = {
                s: -1,
                f: a.f + l.f,
                l: a,
                r: l
            };
            var d = n[0].s;
            for (s = 1; r > s; ++s) n[s].s > d && (d = n[s].s);
            var p = new rH(d + 1),
                v = ne(i[h - 1], p, 0);
            if (v > t) {
                s = 0;
                var g = 0,
                    _ = v - t,
                    f = 1 << _;
                for (n.sort(function(e, t) {
                        return p[t.s] - p[e.s] || e.f - t.f
                    }); r > s; ++s) {
                    var m = n[s].s;
                    if (t >= p[m]) break;
                    g += f - (1 << v - p[m]), p[m] = t
                }
                for (g >>>= _; g > 0;) {
                    var y = n[s].s;
                    t > p[y] ? g -= 1 << t - p[y]++ - 1 : ++s
                }
                for (; s >= 0 && g; --s) {
                    var b = n[s].s;
                    p[b] == t && (--p[b], ++g)
                }
                v = t
            }
            return [new rq(p), v]
        },
        ne = function(e, t, i) {
            return -1 == e.s ? Math.max(ne(e.l, t, i + 1), ne(e.r, t, i + 1)) : t[e.s] = i
        },
        nt = function(e) {
            for (var t = e.length; t && !e[--t];);
            for (var i = new rH(++t), s = 0, r = e[0], n = 1, o = function(e) {
                    i[s++] = e
                }, a = 1; t >= a; ++a)
                if (e[a] == r && a != t) ++n;
                else {
                    if (!r && n > 2) {
                        for (; n > 138; n -= 138) o(32754);
                        n > 2 && (o(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0)
                    } else if (n > 3) {
                        for (o(r), --n; n > 6; n -= 6) o(8304);
                        n > 2 && (o(n - 3 << 5 | 8208), n = 0)
                    }
                    for (; n--;) o(r);
                    n = 1, r = e[a]
                }
            return [i.subarray(0, s), t]
        },
        ni = function(e, t) {
            for (var i = 0, s = 0; t.length > s; ++s) i += e[s] * t[s];
            return i
        },
        ns = function(e, t, i) {
            var s = i.length,
                r = r8(t + 2);
            e[r] = 255 & s, e[r + 1] = s >>> 8, e[r + 2] = 255 ^ e[r], e[r + 3] = 255 ^ e[r + 1];
            for (var n = 0; s > n; ++n) e[r + n + 4] = i[n];
            return 8 * (r + 4 + s)
        },
        nr = function(e, t, i, s, r, n, o, a, l, u, h) {
            r4(t, h++, i), ++r[256];
            for (var c = r9(r, 15), d = c[0], p = c[1], v = r9(n, 15), g = v[0], _ = v[1], f = nt(d), m = f[0], y = f[1], b = nt(g), w = b[0], x = b[1], S = new rH(19), E = 0; m.length > E; ++E) S[31 & m[E]]++;
            for (E = 0; w.length > E; ++E) S[31 & w[E]]++;
            for (var k = r9(S, 7), P = k[0], F = k[1], $ = 19; $ > 4 && !P[rW[$ - 1]]; --$);
            var I, C, R, T, A = u + 5 << 3,
                M = ni(r, r1) + ni(n, r2) + o,
                O = ni(r, d) + ni(n, g) + o + 14 + 3 * $ + ni(S, P) + (2 * S[16] + 3 * S[17] + 7 * S[18]);
            if (M >= A && O >= A) return ns(t, h, e.subarray(l, l + u));
            if (r4(t, h, 1 + (M > O)), h += 2, M > O) {
                I = r0(d, p, 0), C = d, R = r0(g, _, 0), T = g;
                var L = r0(P, F, 0);
                for (r4(t, h, y - 257), r4(t, h + 5, x - 1), r4(t, h + 10, $ - 4), h += 14, E = 0; $ > E; ++E) r4(t, h + 3 * E, P[rW[E]]);
                h += 3 * $;
                for (var D = [m, w], N = 0; 2 > N; ++N) {
                    var z = D[N];
                    for (E = 0; z.length > E; ++E) r4(t, h, L[j = 31 & z[E]]), h += P[j], j > 15 && (r4(t, h, z[E] >>> 5 & 127), h += z[E] >>> 12)
                }
            } else I = r3, C = r1, R = r5, T = r2;
            for (E = 0; a > E; ++E)
                if (s[E] > 255) {
                    r7(t, h, I[257 + (j = s[E] >>> 18 & 31)]), h += C[j + 257], j > 7 && (r4(t, h, s[E] >>> 23 & 31), h += rU[j]);
                    var j, q = 31 & s[E];
                    r7(t, h, R[q]), h += T[q], q > 3 && (r7(t, h, s[E] >>> 5 & 8191), h += rV[q])
                } else r7(t, h, I[s[E]]), h += C[s[E]];
            return r7(t, h, I[256]), h + C[256]
        },
        nn = new rB([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
        no = function() {
            for (var e = new rB(256), t = 0; 256 > t; ++t) {
                for (var i = t, s = 9; --s;) i = (1 & i && 0xedb88320) ^ i >>> 1;
                e[t] = i
            }
            return e
        }(),
        na = function(e, t, i) {
            for (; i; ++t) e[t] = i, i >>>= 8
        },
        nl = !!h || !!u,
        nu = "text/plain",
        nh = !1,
        nc = (e, t) => {
            var [i, s] = e.split("#"), [r, n] = i.split("?");
            if (!n) return e;
            var o = n.split("&").filter(e => e.split("=")[0] !== t).join("&");
            return r + (o ? "?" + o : "") + (s ? "#" + s : "")
        },
        nd = function(e, t, i) {
            void 0 === i && (i = !0);
            var s, r, n, o, a, [l, u] = e.split("?"),
                h = b({}, t),
                c = null != (a = null == u ? void 0 : u.split("&").map(e => {
                    var t, [s, r] = e.split("="),
                        n = i && null != (t = h[s]) ? t : r;
                    return delete h[s], s + "=" + n
                })) ? a : [],
                d = (void 0 === s && (s = "&"), o = [], i1(h, function(e, t) {
                    Q(e) || Q(t) || "undefined" === t || (r = encodeURIComponent(e instanceof File ? e.name : e.toString()), n = encodeURIComponent(t), o[o.length] = n + "=" + r)
                }), o.join(s));
            return d && c.push(d), l + "?" + c.join("&")
        },
        np = (e, t) => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() : t, t),
        nv = e => {
            if (e.xt) return e.xt;
            var {
                data: t,
                compression: i
            } = e;
            if (t) {
                if (i === rz) {
                    var s, r, n, o, a, l, u, h, c = (s = function(e) {
                        var t = e.length;
                        if ("u" > typeof TextEncoder) return (new TextEncoder).encode(e);
                        for (var i = new rq(e.length + (e.length >>> 1)), s = 0, r = function(e) {
                                i[s++] = e
                            }, n = 0; t > n; ++n) {
                            if (s + 5 > i.length) {
                                var o = new rq(s + 8 + (t - n << 1));
                                o.set(i), i = o
                            }
                            var a = e.charCodeAt(n);
                            128 > a ? r(a) : (2048 > a ? r(192 | a >>> 6) : (a > 55295 && 57344 > a ? (r(240 | (a = 65536 + (1047552 & a) | 1023 & e.charCodeAt(++n)) >>> 18), r(128 | a >>> 12 & 63)) : r(224 | a >>> 12), r(128 | a >>> 6 & 63)), r(128 | 63 & a))
                        }
                        return r6(i, 0, s)
                    }(np(t)), r = {
                        mtime: 0
                    }, n = 0xffffffff, o = {
                        p(e) {
                            for (var t = n, i = 0; e.length > i; ++i) t = no[255 & t ^ e[i]] ^ t >>> 8;
                            n = t
                        },
                        d: () => 0xffffffff ^ n
                    }, a = s.length, o.p(s), h = (l = 10 + (r.filename && r.filename.length + 1 || 0), u = function(e, t, i, s) {
                        var r = e.length,
                            n = new rq(s + r + 5 * (1 + Math.floor(r / 7e3)) + 8),
                            o = n.subarray(s, n.length - 8),
                            a = 0;
                        if (!t || 8 > r)
                            for (var l = 0; r >= l; l += 65535) {
                                var u = l + 65535;
                                r > u ? a = ns(o, a, e.subarray(l, u)) : (o[l] = !0, a = ns(o, a, e.subarray(l, r)))
                            } else {
                                for (var h = nn[t - 1], c = h >>> 13, d = 8191 & h, p = (1 << i) - 1, v = new rH(32768), g = new rH(p + 1), _ = Math.ceil(i / 3), f = 2 * _, m = function(t) {
                                        return (e[t] ^ e[t + 1] << _ ^ e[t + 2] << f) & p
                                    }, y = new rB(25e3), b = new rH(288), w = new rH(32), x = 0, S = 0, E = (l = 0, 0), k = 0, P = 0; r > l; ++l) {
                                    var F = m(l),
                                        $ = 32767 & l,
                                        I = g[F];
                                    if (v[$] = I, g[F] = $, l >= k) {
                                        var C = r - l;
                                        if ((x > 7e3 || E > 24576) && C > 423) {
                                            a = nr(e, o, 0, y, b, w, S, E, P, l - P, a), E = x = S = 0, P = l;
                                            for (var R = 0; 286 > R; ++R) b[R] = 0;
                                            for (R = 0; 30 > R; ++R) w[R] = 0
                                        }
                                        var T = 2,
                                            A = 0,
                                            M = d,
                                            O = $ - I & 32767;
                                        if (C > 2 && F == m(l - O))
                                            for (var L = Math.min(c, C) - 1, D = Math.min(32767, l), N = Math.min(258, C); D >= O && --M && $ != I;) {
                                                if (e[l + T] == e[l + T - O]) {
                                                    for (var z = 0; N > z && e[l + z] == e[l + z - O]; ++z);
                                                    if (z > T) {
                                                        if (T = z, A = O, z > L) break;
                                                        var j = Math.min(O, z - 2),
                                                            q = 0;
                                                        for (R = 0; j > R; ++R) {
                                                            var H = l - O + R + 32768 & 32767,
                                                                B = H - v[H] + 32768 & 32767;
                                                            B > q && (q = B, I = H)
                                                        }
                                                    }
                                                }
                                                O += ($ = I) - (I = v[$]) + 32768 & 32767
                                            }
                                        if (A) {
                                            y[E++] = 0x10000000 | rY[T] << 18 | rK[A];
                                            var U = 31 & rY[T],
                                                V = 31 & rK[A];
                                            S += rU[U] + rV[V], ++b[257 + U], ++w[V], k = l + T, ++x
                                        } else y[E++] = e[l], ++b[e[l]]
                                    }
                                }
                                a = nr(e, o, !0, y, b, w, S, E, P, l - P, a)
                            }
                        return r6(n, 0, s + r8(a) + 8)
                    }(s, null == r.level ? 6 : r.level, null == r.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(s.length)))) : 12 + r.mem, l)).length, function(e, t) {
                        var i = t.filename;
                        if (e[0] = 31, e[1] = 139, e[2] = 8, e[8] = 2 > t.level ? 4 : 2 * (9 == t.level), e[9] = 3, 0 != t.mtime && na(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)), i) {
                            e[3] = 8;
                            for (var s = 0; i.length >= s; ++s) e[s + 10] = i.charCodeAt(s)
                        }
                    }(u, r), na(u, h - 8, o.d()), na(u, h - 4, a), u);
                    return {
                        contentType: nu,
                        body: c.buffer.slice(c.byteOffset, c.byteOffset + c.byteLength),
                        estimatedSize: c.byteLength
                    }
                }
                if (i === rj) {
                    let e;
                    var d, p = "data=" + encodeURIComponent("string" == typeof(e = (d = np(t)) ? btoa(encodeURIComponent(d).replace(/%([0-9A-F]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16)))) : d) ? e : np(e));
                    return {
                        contentType: "application/x-www-form-urlencoded",
                        body: p,
                        estimatedSize: new Blob([p]).size
                    }
                }
                var v = np(t);
                return {
                    contentType: "application/json",
                    body: v,
                    estimatedSize: new Blob([v]).size
                }
            }
        },
        ng = e => {
            var t, i, s = () => ({
                url: nc(e.url, "compression"),
                encodedBody: nv(b({}, e, {
                    compression: void 0,
                    xt: void 0
                }))
            });
            try {
                t = nv(e)
            } catch (t) {
                if (O(e.compression, ro(e.url, "compression"))) return tJ.error("Failed to gzip request body, sending uncompressed payload", t), s();
                throw t
            }
            return !(t && O(e.compression, ro(e.url, "compression"))) || ((i = t.body) instanceof ArrayBuffer ? M(new Uint8Array(i)) : ArrayBuffer.isView(i) && M(new Uint8Array(i.buffer, i.byteOffset, i.byteLength))) ? {
                url: e.url,
                encodedBody: t
            } : (nh = !0, s())
        },
        n_ = e => {
            try {
                return ng(e)
            } catch (t) {
                return tJ.error(t), void(null == e.callback || e.callback({
                    statusCode: 0,
                    error: t
                }))
            }
        },
        nf = (t = y(function*(e) {
            var t = np(e.data),
                i = yield function(e, t, i) {
                    return z.apply(this, arguments)
                }(t, f.DEBUG, {
                    rethrow: !0
                });
            if (!i) return e;
            var s = yield i.arrayBuffer();
            return b({}, e, {
                xt: {
                    contentType: nu,
                    body: s,
                    estimatedSize: s.byteLength
                }
            })
        }), function(e) {
            return t.apply(this, arguments)
        }),
        nm = ["/e/", "/s/"],
        ny = (e, t) => {
            var i, s, r, n = (r = (s = (null == (i = rn(e)) ? void 0 : i.pathname) || e.split(/[?#]/)[0]) ? "/" === s[0] ? s : "/" + s : "/", nm.some(e => r.slice(r.length - e.length) === e)),
                o = n ? nc(e, "ver") : e;
            return nd(t === rz ? nc(o, "compression") : o, b({
                _: (new Date).getTime().toString()
            }, n ? {} : {
                ver: f.JS_SDK_VERSION
            }, t === rz ? {} : {
                compression: t
            }))
        },
        nb = [];
    u && nb.push({
        transport: "fetch",
        method(e) {
            var t, i = n_(e);
            if (i) {
                var {
                    url: s,
                    encodedBody: r
                } = i, {
                    contentType: n,
                    body: o,
                    estimatedSize: a
                } = null != r ? r : {}, l = new Headers;
                i1(e.headers, function(e, t) {
                    l.append(t, e)
                }), n && l.append("Content-Type", n);
                var h = null,
                    d = !1;
                if (c) {
                    var p = new c;
                    h = {
                        signal: p.signal,
                        timeout: setTimeout(() => {
                            var t, i;
                            d = !0, p.abort(((i = Error("PostHog request timed out" + ((t = e.timeout) ? " after " + t + "ms" : ""))).name = "AbortError", i))
                        }, e.timeout)
                    }
                }
                u(s, b({
                    method: (null == e ? void 0 : e.method) || "GET",
                    headers: l,
                    keepalive: "POST" === e.method && 52428.8 > (a || 0),
                    body: o,
                    signal: null == (t = h) ? void 0 : t.signal
                }, e.fetchOptions)).then(t => t.text().then(i => {
                    var s = {
                        statusCode: t.status,
                        text: i
                    };
                    if (200 === t.status) try {
                        s.json = JSON.parse(i)
                    } catch (e) {
                        tJ.error(e)
                    }
                    null == e.callback || e.callback(s)
                })).catch(t => {
                    d && "AbortError" === (null == t ? void 0 : t.name) ? tJ.warn(t) : tJ.error(t), null == e.callback || e.callback({
                        statusCode: 0,
                        error: t
                    })
                }).finally(() => h ? clearTimeout(h.timeout) : null)
            }
        }
    }), h && nb.push({
        transport: "XHR",
        method(e) {
            var t = n_(e);
            if (t) {
                var i = new h,
                    {
                        url: s,
                        encodedBody: r
                    } = t;
                i.open(e.method || "GET", s, !0);
                var {
                    contentType: n,
                    body: o
                } = null != r ? r : {};
                i1(e.headers, function(e, t) {
                    i.setRequestHeader(t, e)
                }), n && i.setRequestHeader("Content-Type", n), e.timeout && (i.timeout = e.timeout), i.onreadystatechange = () => {
                    if (4 === i.readyState) {
                        var t = {
                            statusCode: i.status,
                            text: i.responseText
                        };
                        if (200 === i.status) try {
                            t.json = JSON.parse(i.responseText)
                        } catch (e) {}
                        null == e.callback || e.callback(t)
                    }
                }, i.send(o)
            }
        }
    }), null != o && o.sendBeacon && nb.push({
        transport: "sendBeacon",
        method(e) {
            try {
                var {
                    url: t,
                    encodedBody: i
                } = ng(e), {
                    contentType: s,
                    body: r
                } = null != i ? i : {};
                if (!r) return;
                var n = r instanceof Blob ? r : new Blob([r], {
                    type: s
                });
                o.sendBeacon(t, n)
            } catch (e) {}
        }
    });
    class nw {
        constructor(e, t) {
            this.br = !0, this._r = [], this.wr = ep((null == t ? void 0 : t.flush_interval_ms) || 3e3, 250, 5e3, tJ.createLogger("flush interval"), 3e3), this.kr = e
        }
        enqueue(e) {
            this._r.push(e), this.Sr || this.Cr()
        }
        unload() {
            this.Ir();
            var e = Object.values(this._r.length > 0 ? this.Tr() : {});
            [...e.filter(e => 0 === e.url.indexOf("/e")), ...e.filter(e => 0 !== e.url.indexOf("/e"))].map(e => {
                this.Er(b({}, e, {
                    transport: "sendBeacon"
                }))
            })
        }
        enable() {
            this.br = !1, this.Cr()
        }
        Cr() {
            var e = this;
            this.br || (this.Sr = setTimeout(() => {
                if (this.Ir(), this._r.length > 0) {
                    var t = this.Tr();
                    for (var i in t) ! function() {
                        var s = t[i],
                            r = (new Date).getTime();
                        s.data && J(s.data) && i1(s.data, e => {
                            e.offset = Math.abs(e.timestamp - r), delete e.timestamp
                        }), e.Er(s)
                    }()
                }
            }, this.wr))
        }
        Er(e) {
            try {
                this.kr(e)
            } catch (e) {
                tJ.error(e)
            }
        }
        Ir() {
            clearTimeout(this.Sr), this.Sr = void 0
        }
        Tr() {
            var e = {};
            return i1(this._r, t => {
                var i, s = (t ? t.batchKey : null) || t.url;
                Q(e[s]) && (e[s] = b({}, t, {
                    data: []
                })), null == (i = e[s].data) || i.push(t.data)
            }), this._r = [], e
        }
    }
    var nx = ["retriesPerformedSoFar"];
    class nS {
        constructor(e) {
            this.Mr = !1, this.Pr = 3e3, this._r = [], this._instance = e, this._r = [], this.Rr = !0, !Q(r) && "onLine" in r.navigator && (this.Rr = r.navigator.onLine, this.Or = () => {
                this.Rr = !0, this.Lr()
            }, this.Fr = () => {
                this.Rr = !1
            }, i7(r, "online", this.Or), i7(r, "offline", this.Fr))
        }
        get length() {
            return this._r.length
        }
        retriableRequest(e) {
            var {
                retriesPerformedSoFar: t
            } = e, i = w(e, nx);
            er(t) && (i.url = nd(i.url, {
                retry_count: t
            })), this._instance._send_request(b({}, i, {
                callback: e => {
                    if (200 !== e.statusCode && (400 > e.statusCode || e.statusCode >= 500)) {
                        if ((0 === e.statusCode ? 3 : 10) > (null != t ? t : 0)) return void this.st(b({
                            retriesPerformedSoFar: t
                        }, i));
                        0 === e.statusCode && tJ.warn("Request failed before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped retrying after " + (null != t ? t : 0) + " retries.")
                    }
                    null == i.callback || i.callback(e)
                }
            }))
        }
        st(e) {
            var t, i, s = e.retriesPerformedSoFar || 0;
            e.retriesPerformedSoFar = s + 1;
            var r = Math.ceil((i = Math.min(18e5, t = 3e3 * Math.pow(2, s))) + (Math.random() - .5) * (i - t / 2)),
                n = Date.now() + r;
            this._r.push({
                retryAt: n,
                requestOptions: e
            });
            var o = "Enqueued failed request for retry in " + r;
            navigator.onLine || (o += " (Browser is offline)"), tJ.warn(o), this.Mr || (this.Mr = !0, this.Ar())
        }
        Ar() {
            (this.$r && clearTimeout(this.$r), 0 === this._r.length) ? (this.Mr = !1, this.$r = void 0) : this.$r = setTimeout(() => {
                this.Rr && this._r.length > 0 && this.Lr(), this.Ar()
            }, this.Pr)
        }
        Lr() {
            var e = Date.now(),
                t = [],
                i = this._r.filter(i => e > i.retryAt || (t.push(i), !1));
            if (this._r = t, i.length > 0)
                for (var {
                        requestOptions: s
                    } of i) this.retriableRequest(s)
        }
        unload() {
            for (var {
                    requestOptions: e
                } of (this.$r && (clearTimeout(this.$r), this.$r = void 0), this.Mr = !1, Q(r) || (this.Or && (r.removeEventListener("online", this.Or), this.Or = void 0), this.Fr && (r.removeEventListener("offline", this.Fr), this.Fr = void 0)), this._r)) try {
                this._instance._send_request(b({}, e, {
                    transport: "sendBeacon"
                }))
            } catch (e) {
                tJ.error(e)
            }
            this._r = []
        }
    }
    class nE {
        constructor(e) {
            this.Dr = () => {
                this.Nr || (this.Nr = {});
                var e, t, i, s, r = this.scrollElement(),
                    n = this.scrollY(),
                    o = r ? Math.max(0, r.scrollHeight - r.clientHeight) : 0,
                    a = n + ((null == r ? void 0 : r.clientHeight) || 0),
                    l = (null == r ? void 0 : r.scrollHeight) || 0;
                this.Nr.lastScrollY = Math.ceil(n), this.Nr.maxScrollY = Math.max(n, null != (e = this.Nr.maxScrollY) ? e : 0), this.Nr.maxScrollHeight = Math.max(o, null != (t = this.Nr.maxScrollHeight) ? t : 0), this.Nr.lastContentY = a, this.Nr.maxContentY = Math.max(a, null != (i = this.Nr.maxContentY) ? i : 0), this.Nr.maxContentHeight = Math.max(l, null != (s = this.Nr.maxContentHeight) ? s : 0)
            }, this._instance = e
        }
        get qr() {
            return this._instance.config.scroll_root_selector
        }
        getContext() {
            return this.Nr
        }
        resetContext() {
            var e = this.Nr;
            return setTimeout(this.Dr, 0), e
        }
        startMeasuringScrollPosition() {
            i7(r, "scroll", this.Dr, {
                capture: !0
            }), i7(r, "scrollend", this.Dr, {
                capture: !0
            }), i7(r, "resize", this.Dr)
        }
        scrollElement() {
            if (!this.qr) return null == r ? void 0 : r.document.documentElement;
            for (var e of J(this.qr) ? this.qr : [this.qr]) {
                var t = null == r ? void 0 : r.document.querySelector(e);
                if (t) return t
            }
        }
        Br(e) {
            if (this.qr) {
                var t = this.scrollElement();
                return t && t["y" === e ? "scrollTop" : "scrollLeft"] || 0
            }
            return r ? "y" === e ? r.scrollY || r.pageYOffset || r.document.documentElement.scrollTop || 0 : r.scrollX || r.pageXOffset || r.document.documentElement.scrollLeft || 0 : 0
        }
        scrollY() {
            return this.Br("y")
        }
        scrollX() {
            return this.Br("x")
        }
    }
    var nk = e => rx(null == e ? void 0 : e.config.mask_personal_data_properties, null == e ? void 0 : e.config.custom_personal_data_properties, null == e ? void 0 : e.config.disable_capture_url_hashes);
    class nP {
        constructor(e, t, i, s) {
            this.jr = e => {
                var t = this.Hr();
                if (!t || t.sessionId !== e) {
                    var i = {
                        sessionId: e,
                        props: this.Ur(this._instance)
                    };
                    this.zr.register({
                        [iR]: i
                    })
                }
            }, this._instance = e, this.Vr = t, this.zr = i, this.Ur = s || nk, this.Vr.onSessionId(this.jr)
        }
        Hr() {
            return this.zr.props[iR]
        }
        getSetOnceProps() {
            var e, t = null == (e = this.Hr()) ? void 0 : e.props;
            return t ? "r" in t ? rS(t, this._instance.config.disable_capture_url_hashes) : {
                $referring_domain: t.referringDomain,
                $pathname: t.initialPathName,
                utm_source: t.utm_source,
                utm_campaign: t.utm_campaign,
                utm_medium: t.utm_medium,
                utm_content: t.utm_content,
                utm_term: t.utm_term
            } : {}
        }
        getSessionProps() {
            var e = {};
            return i1(i6(this.getSetOnceProps()), (t, i) => {
                "$current_url" === i && (i = "url"), e["$session_entry_" + U(i)] = t
            }), e
        }
    }
    class nF {
        constructor() {
            this.Wr = {}
        }
        on(e, t) {
            return this.Wr[e] || (this.Wr[e] = []), this.Wr[e].push(t), () => {
                this.Wr[e] = this.Wr[e].filter(e => e !== t)
            }
        }
        emit(e, t) {
            for (var i of this.Wr[e] || []) i(t);
            for (var s of this.Wr["*"] || []) s(e, t)
        }
    }
    var n$ = tY("[SessionId]");
    class nI {
        on(e, t) {
            return this.Gr.on(e, t)
        }
        constructor(e, t, i) {
            if (this.Zr = null, this.Qr = [], this.Jr = void 0, this.Yr = !1, this.Gr = new nF, this.Kr = (e, t) => !(!er(e) || !er(t)) && Math.abs(e - t) > this.sessionTimeoutMs, !e.persistence) throw Error("SessionIdManager requires a PostHogPersistence instance");
            if (e.config.cookieless_mode === iU) throw Error('SessionIdManager cannot be used with cookieless_mode="always"');
            this.Se = e.config, this.zr = e.persistence, this.Xr = void 0, this.ei = void 0, this._sessionStartTimestamp = null, this._sessionActivityTimestamp = null, this.ti = t || sl, this.ri = i || sl;
            var s, r = this.Se.persistence_name || this.Se.token;
            if (this._sessionTimeoutMs = 1e3 * ep(this.Se.session_idle_timeout_seconds || 1800, 60, 36e3, n$.createLogger("session_idle_timeout_seconds"), 1800), e.register({
                    $configured_session_timeout_ms: this._sessionTimeoutMs
                }), this.ii(), this.ni = "ph_" + r + "_window_id", this.si = "ph_" + r + "_primary_window_exists", this.oi()) {
                var n = sy.F(this.ni),
                    o = sy.F(this.si);
                n && !o ? this.Xr = n : sy.P(this.ni), sy.q(this.si, !0)
            }
            if (null != (s = this.Se.bootstrap) && s.sessionID) try {
                var a = (() => {
                    var e = this.Se.bootstrap.sessionID.replace(/-/g, "");
                    if (32 !== e.length) throw Error("Not a valid UUID");
                    if ("7" !== e[12]) throw Error("Not a UUIDv7");
                    return parseInt(e.substring(0, 12), 16)
                })();
                this.ai(this.Se.bootstrap.sessionID, (new Date).getTime(), a)
            } catch (e) {
                n$.error("Invalid sessionID in bootstrap", e)
            }
            this.li()
        }
        get sessionTimeoutMs() {
            return this._sessionTimeoutMs
        }
        onSessionId(e) {
            return Q(this.Qr) && (this.Qr = []), this.Qr.push(e), this.ei && e(this.ei, this.Xr), () => {
                this.Qr = this.Qr.filter(t => t !== e)
            }
        }
        oi() {
            return "memory" !== this.Se.persistence && !this.zr.Vt && sy.N()
        }
        ui(e) {
            e !== this.Xr && (this.Xr = e, this.oi() && sy.q(this.ni, e))
        }
        hi() {
            return this.Xr ? this.Xr : this.oi() ? sy.F(this.ni) : null
        }
        di(e) {
            var t = this.Zr;
            return !et(t) && !et(e) && 5e3 > Math.abs(e - t)
        }
        ai(e, t, i) {
            var s = t !== this._sessionActivityTimestamp,
                r = e === this.ei && i === this._sessionStartTimestamp;
            this._sessionStartTimestamp = i, this._sessionActivityTimestamp = t, this.ei = e, r && !s || r && this.di(t) || (this.Zr = t, this.zr.register({
                [iu]: [t, e, i]
            }))
        }
        ci() {
            var e, t = null == (e = this.Se) ? void 0 : e.persistence_save_debounce_ms;
            return er(t) && t > 0
        }
        vi() {
            this.ci() ? this.zr.refreshKey(iu) : (this.zr.flush(), this.zr.load())
        }
        fi() {
            var e;
            if (!et(this._sessionActivityTimestamp) && this._sessionActivityTimestamp !== this.Zr) {
                this.vi();
                var [, t, i] = this.pi();
                t === this.ei && i === this._sessionStartTimestamp && (this.Zr = this._sessionActivityTimestamp, this.zr.register({
                    [iu]: [this._sessionActivityTimestamp, null != (e = this.ei) ? e : null, this._sessionStartTimestamp]
                }), this.zr.flush())
            }
        }
        gi() {
            var [e] = this.pi();
            return Math.max(er(e) ? e : 0, er(this._sessionActivityTimestamp) ? this._sessionActivityTimestamp : 0)
        }
        mi(e) {
            return this.vi(), this.Kr(e, this.gi())
        }
        pi() {
            var e = this.zr.props[iu];
            return J(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0]
        }
        resetSessionId() {
            this.Zr = null, clearTimeout(this.yi), this.yi = void 0, this.ai(null, null, null)
        }
        destroy() {
            this.Yr = !0, this.fi(), clearTimeout(this.yi), this.yi = void 0, this.Jr && r && (r.removeEventListener(iY, this.Jr, {
                capture: !1
            }), this.Jr = void 0), this.Qr = []
        }
        li() {
            this.Jr = () => {
                this.fi(), this.oi() && sy.P(this.si)
            }, i7(r, iY, this.Jr, {
                capture: !1
            })
        }
        checkAndGetSessionAndWindowId(e, t) {
            if (void 0 === e && (e = !1), void 0 === t && (t = null), this.Se.cookieless_mode === iU) throw Error('checkAndGetSessionAndWindowId should not be called with cookieless_mode="always"');
            var i = t || (new Date).getTime(),
                [, s, r] = this.pi(),
                n = this.gi(),
                o = this.hi(),
                a = er(r) && Math.abs(i - r) > 864e5,
                l = !1,
                u = !1,
                h = !s,
                c = s,
                d = !h && !e && this.Kr(i, n);
            d && ((d = this.mi(i)) || n$.info("cross-tab refresh kept the session alive", {
                sessionId: s
            }), [, s, r] = this.pi()), h || d || a ? (s = this.ti(), o = this.ri(), n$.info("new session ID generated", {
                sessionId: s,
                windowId: o,
                changeReason: {
                    noSessionId: h,
                    activityTimeout: d,
                    sessionPastMaximumLength: a
                }
            }), r = i, l = !0) : (o || (o = this.ri(), l = !0), (u = s !== c) && (n$.info("adopted cross-tab session id", {
                sessionId: s,
                windowId: o
            }), l = !0));
            var p = er(n) && e && !a ? n : i,
                v = er(r) ? r : (new Date).getTime();
            this.ui(o), this.ai(s, p, v), e || this.ii();
            var g = {
                noSessionId: h,
                activityTimeout: d,
                sessionPastMaximumLength: a,
                crossTabAdoption: u
            };
            return l && this.Qr.forEach(e => e(s, o, g)), {
                sessionId: s,
                windowId: o,
                sessionStartTimestamp: v,
                changeReason: l ? g : void 0,
                lastActivityTimestamp: n
            }
        }
        ii() {
            this.Yr || (clearTimeout(this.yi), this.yi = setTimeout(() => {
                if (!this.Yr)
                    if (this.mi((new Date).getTime())) {
                        var e = this.ei;
                        this.resetSessionId(), this.Gr.emit("forcedIdleReset", {
                            idleSessionId: e
                        })
                    } else this.ii()
            }, 1.1 * this.sessionTimeoutMs))
        }
    }
    var nC = function(e, t) {
        if (!e) return !1;
        var i = e.userAgent;
        if (i && q(i, t)) return !0;
        try {
            var s = null == e ? void 0 : e.userAgentData;
            if (null != s && s.brands && s.brands.some(e => q(null == e ? void 0 : e.brand, t))) return !0
        } catch (e) {}
        return !!e.webdriver
    };

    function nR() {
        return (nR = y(function*() {
            var e = null == o ? void 0 : o.userAgentData;
            if (null != e && e.getHighEntropyValues) try {
                var t = yield e.getHighEntropyValues(["model"]), i = null == t ? void 0 : t.model;
                return Z(i) && i.length > 0 ? i : void 0
            } catch (e) {
                return void tJ.info("Unable to resolve $device_model from userAgentData.getHighEntropyValues", e)
            }
        })).apply(this, arguments)
    }
    var nT = function(e, t) {
        if (! function(e) {
                try {
                    new RegExp(e)
                } catch (e) {
                    return !1
                }
                return !0
            }(t)) return !1;
        try {
            return new RegExp(t).test(e)
        } catch (e) {
            return !1
        }
    };

    function nA(e, t, i) {
        return np({
            distinct_id: e,
            userPropertiesToSet: t,
            userPropertiesToSetOnce: i
        })
    }
    var nM = {
            exact: (e, t) => t.some(t => e.some(e => t === e)),
            is_not: (e, t) => t.every(t => e.every(e => t !== e)),
            regex: (e, t) => t.some(t => e.some(e => nT(t, e))),
            not_regex: (e, t) => t.every(t => e.every(e => !nT(t, e))),
            icontains: (e, t) => t.map(nO).some(t => e.map(nO).some(e => t.includes(e))),
            not_icontains: (e, t) => t.map(nO).every(t => e.map(nO).every(e => !t.includes(e))),
            gt: (e, t) => t.some(t => {
                var i = parseFloat(t);
                return !isNaN(i) && e.some(e => i > parseFloat(e))
            }),
            lt: (e, t) => t.some(t => {
                var i = parseFloat(t);
                return !isNaN(i) && e.some(e => i < parseFloat(e))
            })
        },
        nO = e => e.toLowerCase();

    function nL(e, t) {
        return !e || Object.entries(e).every(e => {
            var [i, s] = e, r = null == t ? void 0 : t[i];
            if (Q(r) || et(r)) return !1;
            var n = [String(r)],
                o = nM[s.operator];
            return !!o && o(s.values, n)
        })
    }
    var nD = "custom",
        nN = "i.posthog.com",
        nz = /^\/static\//;
    class nj {
        constructor(e) {
            this.bi = {}, this.instance = e
        }
        get apiHost() {
            var e = this.instance.config.api_host.trim().replace(/\/$/, "");
            return "https://app.posthog.com" === e ? "https://us.i.posthog.com" : e
        }
        get flagsApiHost() {
            var e = this.instance.config.flags_api_host;
            return e ? e.trim().replace(/\/$/, "") : this.apiHost
        }
        get uiHost() {
            var e, t = null == (e = this.instance.config.ui_host) ? void 0 : e.replace(/\/$/, "");
            return t || (t = this.apiHost.replace("." + nN, ".posthog.com")), "https://app.posthog.com" === t ? "https://us.posthog.com" : t
        }
        get region() {
            return this.bi[this.apiHost] || (this.bi[this.apiHost] = /https:\/\/(app|us|us-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "us" : /https:\/\/(eu|eu-assets)(\.i)?\.posthog\.com/i.test(this.apiHost) ? "eu" : nD), this.bi[this.apiHost]
        }
        wi(e) {
            if (nz.test(e)) {
                var t = this.instance.config.asset_host;
                if ("string" == typeof t) return t.trim().replace(/\/$/, "") || void 0
            }
        }
        endpointFor(e, t) {
            if (void 0 === t && (t = ""), t && (t = "/" === t[0] ? t : "/" + t), "ui" === e) return this.uiHost + t;
            if ("flags" === e) return this.flagsApiHost + t;
            if ("assets" === e) {
                var i = this.wi(t);
                if (i) return "" + i + t
            }
            if (this.region === nD) return this.apiHost + t;
            var s = nN + t;
            switch (e) {
                case "assets":
                    return "https://" + this.region + "-assets." + s;
                case "api":
                    return "https://" + this.region + "." + s
            }
        }
    }
    var nq = tY("[Surveys]"),
        nH = "seenSurvey_",
        nB = e => {
            try {
                var t, i = (t = "" + nH + e.id, e.current_iteration && e.current_iteration > 0 && (t = "" + nH + e.id + "_" + e.current_iteration), t);
                if (localStorage.getItem(i)) return;
                localStorage.setItem(i, "true")
            } catch (e) {
                nq.error("Failed to persist survey seen state", e)
            }
        },
        nU = ["popover", "widget", "api"],
        nV = {
            ignoreConditions: !1,
            ignoreDelay: !1,
            displayType: rM
        },
        nW = tY("[PostHog ExternalIntegrations]"),
        nG = {
            intercom: "intercom-integration",
            crispChat: "crisp-chat-integration"
        };
    class nJ {
        constructor(e) {
            this._instance = e
        }
        Mt(e, t) {
            var i;
            null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, e, e => {
                if (e) return nW.error("failed to load script", e);
                t()
            })
        }
        startIfEnabledOrStop() {
            var e, t = this,
                i = function(e) {
                    var i, s, n;
                    !r || null != (i = v.__PosthogExtensions__) && null != (i = i.integrations) && i[e] || t.Mt(nG[e], () => {
                        var i;
                        null == (i = v.__PosthogExtensions__) || null == (i = i.integrations) || null == (i = i[e]) || i.start(t._instance)
                    }), !r && null != (s = v.__PosthogExtensions__) && null != (s = s.integrations) && s[e] && (null == (n = v.__PosthogExtensions__) || null == (n = n.integrations) || null == (n = n[e]) || n.stop())
                };
            for (var [s, r] of Object.entries(null != (e = this._instance.config.integrations) ? e : {})) i(s)
        }
    }
    var nY = {},
        nK = 0,
        nX = () => {},
        nQ = 'Consent opt in/out is not valid with cookieless_mode="always" and will be ignored',
        nZ = "Surveys module not available",
        n0 = "sanitize_properties is deprecated. Use before_send instead",
        n1 = "Invalid value for property_denylist config: ",
        n2 = "posthog",
        n3 = !nl && -1 === (null == p ? void 0 : p.indexOf("MSIE")) && -1 === (null == p ? void 0 : p.indexOf("Mozilla")),
        n5 = e => {
            var t;
            return b({
                api_host: "https://us.i.posthog.com",
                flags_api_host: null,
                ui_host: null,
                asset_host: null,
                token: "",
                autocapture: !0,
                cross_subdomain_cookie: function(e) {
                    var t = null == e ? void 0 : e.hostname;
                    if (!Z(t)) return !1;
                    var i = t.split(".").slice(-2).join(".");
                    for (var s of i4)
                        if (i === s) return !1;
                    return !0
                }(null == a ? void 0 : a.location),
                persistence: "localStorage+cookie",
                persistence_name: "",
                cookie_persisted_properties: [],
                loaded: nX,
                save_campaign_params: !0,
                custom_campaign_params: [],
                custom_blocked_useragents: [],
                save_referrer: !0,
                capture_pageleave: "if_capture_pageview",
                defaults: null != e ? e : "unset",
                __preview_deferred_init_extensions: !1,
                __preview_external_dependency_versioned_paths: !1,
                __preview_cookie_wins_on_conflict: !1,
                debug: l && Z(null == l ? void 0 : l.search) && -1 !== l.search.indexOf("__posthog_debug=true") || !1,
                cookie_expiration: 365,
                upgrade: !1,
                disable_session_recording: !1,
                disable_persistence: !1,
                disable_web_experiments: !0,
                disable_surveys: !1,
                disable_surveys_automatic_display: !1,
                disable_conversations: !1,
                disable_product_tours: !1,
                disableDeviceModel: !1,
                disable_external_dependency_loading: !1,
                strict_script_versioning: !1,
                enable_recording_console_log: void 0,
                secure_cookie: "https:" === (null == r || null == (t = r.location) ? void 0 : t.protocol),
                ip: !1,
                opt_out_capturing_by_default: !1,
                opt_out_persistence_by_default: !1,
                opt_out_useragent_filter: !1,
                opt_out_capturing_persistence_type: "localStorage",
                consent_persistence_name: null,
                opt_out_capturing_cookie_prefix: null,
                opt_in_site_apps: !1,
                property_denylist: [],
                respect_dnt: !1,
                sanitize_properties: null,
                request_headers: {},
                request_batching: !0,
                properties_string_max_length: 65535,
                mask_all_element_attributes: !1,
                mask_all_text: !1,
                mask_personal_data_properties: !1,
                custom_personal_data_properties: [],
                advanced_disable_flags: !1,
                advanced_disable_decide: !1,
                advanced_disable_feature_flags: !1,
                advanced_disable_feature_flags_on_first_load: !1,
                advanced_only_evaluate_survey_feature_flags: !1,
                advanced_feature_flags_dedup_per_session: !1,
                advanced_enable_surveys: !1,
                advanced_disable_toolbar_metrics: !1,
                feature_flag_request_timeout_ms: 3e3,
                surveys_request_timeout_ms: 1e4,
                on_request_error(e) {
                    tJ.error("Bad HTTP status: " + e.statusCode + " " + e.text)
                },
                get_device_id: e => e,
                capture_performance: void 0,
                name: "posthog",
                bootstrap: {},
                disable_compression: !1,
                session_idle_timeout_seconds: 1800,
                person_profiles: iG,
                before_send: void 0,
                get_current_url: void 0,
                request_queue_config: {
                    flush_interval_ms: 3e3
                },
                error_tracking: {},
                _onCapture: nX
            }, {
                rageclick: e && e >= "2026-05-30" ? {
                    content_ignorelist: sN,
                    ignore_text_selection: !0
                } : !e || "2025-11-30" > e || {
                    content_ignorelist: !0
                },
                capture_pageview: !e || "2025-05-24" > e || "history_change",
                session_recording: e && e >= "2026-06-25" ? {
                    strictMinimumDuration: !0,
                    canvasCapture: {
                        resolutionScale: .6
                    },
                    streamNetworkBody: !0
                } : e && e >= "2026-05-30" ? {
                    strictMinimumDuration: !0,
                    canvasCapture: {
                        resolutionScale: .6
                    }
                } : e && e >= "2025-11-30" ? {
                    strictMinimumDuration: !0
                } : {},
                external_scripts_inject_target: e && e >= "2026-01-30" ? "head" : "body",
                internal_or_test_user_hostname: e && e >= "2026-01-30" ? /^(localhost|127\.0\.0\.1)$/ : void 0,
                persistence_save_debounce_ms: e && e >= "2026-05-30" ? 250 : 0,
                split_storage: !(!e || "2026-05-30" > e),
                detect_google_search_app: !(!e || "2026-05-30" > e),
                disable_capture_url_hashes: !(!e || "2026-06-25" > e)
            })
        },
        n8 = [
            ["process_person", "person_profiles"],
            ["xhr_headers", "request_headers"],
            ["cookie_name", "persistence_name"],
            ["disable_cookie", "disable_persistence"],
            ["__preview_disable_beacon", "disable_beacon"],
            ["store_google", "save_campaign_params"],
            ["verbose", "debug"]
        ],
        n6 = e => {
            var t = {};
            for (var [i, s] of n8) Q(e[i]) || (t[s] = e[i]);
            var r = i2({}, t, e),
                n = e.__preview_external_dependency_versioned_paths;
            return Q(n) || (Q(e.strict_script_versioning) && (r.strict_script_versioning = !!n), Z(n) && Q(e.asset_host) && (r.asset_host = n)), J(e.property_blacklist) && (Q(e.property_denylist) ? r.property_denylist = e.property_blacklist : J(e.property_denylist) ? r.property_denylist = [...e.property_blacklist, ...e.property_denylist] : tJ.error(n1 + e.property_denylist)), r
        };
    class n4 {
        constructor() {
            this.__forceAllowLocalhost = !1
        }
        get xi() {
            return this.__forceAllowLocalhost
        }
        set xi(e) {
            tJ.error("WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"), this.__forceAllowLocalhost = e
        }
    }
    class n7 {
        ki(e, t) {
            if (e) {
                var i = this.Si.indexOf(e); - 1 !== i && this.Si.splice(i, 1)
            }
            return this.Si.push(t), null == t.initialize || t.initialize(), t
        }
        Ci() {
            return this.config.cookieless_mode === iU || this.config.cookieless_mode === iB && this.consent.isRejected()
        }
        get decideEndpointWasHit() {
            var e, t;
            return null != (e = null == (t = this.featureFlags) ? void 0 : t.hasLoadedFlags) && e
        }
        get flagsEndpointWasHit() {
            var e, t;
            return null != (e = null == (t = this.featureFlags) ? void 0 : t.hasLoadedFlags) && e
        }
        constructor() {
            this.webPerformance = new n4, this.Ii = !1, this.version = f.LIB_VERSION, this.Ti = new nF, this.Si = [], this._calculate_event_properties = this.calculateEventProperties.bind(this), this.config = n5(), this.SentryIntegration = s9, this.sentryIntegration = e => {
                var t;
                return t = s7(this, e), {
                    name: s4,
                    processEvent: e => t(e)
                }
            }, this.__request_queue = [], this.__loaded = !1, this.analyticsDefaultEndpoint = "/e/", this.Ei = !1, this.Mi = null, this.Pi = null, this.Ri = null, this.scrollManager = new nE(this), this.pageViewManager = new re(this), this.rateLimiter = new rL(this), this.requestRouter = new nj(this), this.consent = new sb(this), this.externalIntegrations = new nJ(this);
            var e, t = null != (e = n7.__defaultExtensionClasses) ? e : {};
            this.featureFlags = t.featureFlags && new t.featureFlags(this), this.toolbar = t.toolbar && new t.toolbar(this), this.surveys = t.surveys && new t.surveys(this), this.conversations = t.conversations && new t.conversations(this), this.logs = t.logs && new t.logs(this), this.experiments = t.experiments && new t.experiments(this), this.exceptions = t.exceptions && new t.exceptions(this), this.people = {
                set: (e, t, i) => {
                    var s = Z(e) ? {
                        [e]: t
                    } : e;
                    this.setPersonProperties(s), null == i || i({})
                },
                set_once: (e, t, i) => {
                    var s = Z(e) ? {
                        [e]: t
                    } : e;
                    this.setPersonProperties(void 0, s), null == i || i({})
                }
            }, this.on("eventCaptured", e => tJ.info('send "' + (null == e ? void 0 : e.event) + '"', e))
        }
        init(e, t, i) {
            if (i && i !== n2) {
                var s, r = null != (s = nY[i]) ? s : new n7;
                return r._init(e, t, i), nY[i] = r, nY[n2][i] = r, r
            }
            return this._init(e, t, i)
        }
        _init(e, t, i) {
            void 0 === t && (t = {});
            var s, n, o = Z(e) ? e.trim() : "";
            if (!o) return tJ.critical("PostHog was initialized without a token. This likely indicates a misconfiguration. Please check the first argument passed to posthog.init()"), this;
            if (this.__loaded) return console.warn("[PostHog.js]", "You have already initialized PostHog! Re-initializing is a no-op"), this;
            this.__loaded = !0, this.config = {}, t.debug = this.Oi(t.debug), this.Li = t, this.Fi = [], t.person_profiles ? this.Pi = t.person_profiles : t.process_person && (this.Pi = t.process_person);
            var a = n5(t.defaults),
                l = n6(t),
                u = i2({}, a, l, {
                    name: i,
                    token: o
                });
            K(a.rageclick) && K(l.rageclick) && (u.rageclick = i2({}, a.rageclick, l.rageclick)), K(a.session_recording) && K(l.session_recording) && (u.session_recording = i2({}, a.session_recording, l.session_recording)), this.set_config(u), this.config.on_xhr_error && tJ.error("on_xhr_error is deprecated. Use on_request_error instead"), this.compression = t.disable_compression ? void 0 : rz;
            var h = this.Ai();
            this.persistence = new r$(this.config, h), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new r$(b({}, this.config, {
                persistence: "sessionStorage"
            }), h, !1);
            var c = b({}, this.persistence.props),
                d = b({}, this.sessionPersistence.props);
            this.register({
                $initialization_time: (new Date).toISOString()
            }), this.$i = new nw(e => this.Di(e), this.config.request_queue_config), this.Ni = new nS(this), this.__request_queue = [];
            var p = this.Ci();
            if (p || (this.sessionManager = new nI(this), this.sessionPropsManager = new nP(this, this.sessionManager, this.persistence)), this.config.__preview_deferred_init_extensions ? (tJ.info("Deferring extension initialization to improve startup performance"), setTimeout(() => {
                    this.qi(p)
                }, 0)) : (tJ.info("Initializing extensions synchronously"), this.qi(p)), f.DEBUG = f.DEBUG || this.config.debug, f.DEBUG && tJ.info("Starting in debug mode", {
                    this: this,
                    config: t,
                    thisC: b({}, this.config),
                    p: c,
                    s: d
                }), !this.config.identity_distinct_id || null != (s = t.bootstrap) && s.distinctID || (t.bootstrap = b({}, t.bootstrap, {
                    distinctID: this.config.identity_distinct_id,
                    isIdentifiedID: !0
                })), void 0 !== (null == (n = t.bootstrap) ? void 0 : n.distinctID)) {
                var v = t.bootstrap.distinctID,
                    g = this.get_distinct_id(),
                    _ = this.persistence.get_property(iC);
                if (t.bootstrap.isIdentifiedID && null != g && g !== v && _ === iV) this.identify(v);
                else if (t.bootstrap.isIdentifiedID && null != g && g !== v && _ === iW) tJ.warn("Bootstrap distinctID differs from an already-identified user. The existing identity is preserved. Call reset() before reinitializing if you intend to switch users.");
                else {
                    var m = this.config.get_device_id(sl()),
                        y = t.bootstrap.isIdentifiedID ? m : v;
                    this.persistence.set_property(iC, t.bootstrap.isIdentifiedID ? iW : iV), this.register({
                        distinct_id: v,
                        $device_id: y
                    })
                }
            }
            if (p) this.register_once({
                distinct_id: iN,
                $device_id: null
            }, "");
            else if (!this.get_distinct_id()) {
                var w = this.config.get_device_id(sl());
                this.register_once({
                    distinct_id: w,
                    $device_id: w
                }, ""), this.persistence.set_property(iC, iV)
            }
            return i7(r, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this), {
                passive: !1
            }), t.segment ? function(e, t) {
                var i = e.config.segment;
                if (!i) return t();
                ! function(e, t) {
                    var i = e.config.segment;
                    if (!i) return t();
                    var s = i => {
                            var s = () => i.anonymousId() || sl();
                            e.config.get_device_id = s, i.id() && (e.register({
                                distinct_id: i.id(),
                                $device_id: s()
                            }), e.persistence.set_property(iC, iW)), t()
                        },
                        r = i.user();
                    "then" in r && Y(r.then) ? r.then(s) : s(r)
                }(e, () => {
                    var s;
                    i.register(("u" > typeof Promise && Promise.resolve || s6.warn("This browser does not have Promise support, and can not use the segment integration"), s = (t, i) => {
                        if (!i) return t;
                        t.event.userId || t.event.anonymousId === e.get_distinct_id() || (s6.info("No userId set, resetting PostHog"), e.reset()), t.event.userId && t.event.userId !== e.get_distinct_id() && (s6.info("UserId set, identifying with PostHog"), e.identify(t.event.userId));
                        var s = e.calculateEventProperties(i, t.event.properties);
                        return t.event.properties = Object.assign({}, s, t.event.properties), t
                    }, {
                        name: "PostHog JS",
                        type: "enrichment",
                        version: "1.0.0",
                        isLoaded: () => !0,
                        load: () => Promise.resolve(),
                        track: e => s(e, e.event.event),
                        page: e => s(e, iK),
                        identify: e => s(e, iQ),
                        screen: e => s(e, "$screen")
                    })).then(() => {
                        t()
                    })
                })
            }(this, () => this.Bi()) : this.Bi(), Y(this.config._onCapture) && this.config._onCapture !== nX && (tJ.warn("onCapture is deprecated. Please use `before_send` instead"), this.on("eventCaptured", e => this.config._onCapture(e.event, e))), this.config.ip && tJ.warn('The `ip` config option has NO EFFECT AT ALL and has been deprecated. Use a custom transformation or "Discard IP data" project setting instead. See https://posthog.com/tutorials/web-redact-properties#hiding-customer-ip-address for more information.'), this.config.disableDeviceModel || (function() {
                return nR.apply(this, arguments)
            })().then(e => {
                e && this.register({
                    [t0]: e
                })
            }).catch(nX), this
        }
        qi(e) {
            var t, i, s, r, n, o, a, l = performance.now(),
                u = b({}, n7.__defaultExtensionClasses, this.config.__extensionClasses),
                h = [];
            u.featureFlags && this.Si.push(this.featureFlags = null != (t = this.featureFlags) ? t : new u.featureFlags(this)), u.exceptions && this.Si.push(this.exceptions = null != (i = this.exceptions) ? i : new u.exceptions(this)), u.historyAutocapture && this.Si.push(this.historyAutocapture = new u.historyAutocapture(this)), u.tracingHeaders && this.Si.push(this.tracingHeaders = new u.tracingHeaders(this)), u.siteApps && this.Si.push(this.siteApps = new u.siteApps(this)), u.sessionRecording && !e && this.Si.push(this.sessionRecording = new u.sessionRecording(this)), this.config.disable_scroll_properties || h.push(() => {
                this.scrollManager.startMeasuringScrollPosition()
            }), u.autocapture && this.Si.push(this.autocapture = new u.autocapture(this)), u.surveys && this.Si.push(this.surveys = null != (s = this.surveys) ? s : new u.surveys(this)), u.logs && this.Si.push(this.logs = null != (r = this.logs) ? r : new u.logs(this)), u.conversations && this.Si.push(this.conversations = null != (n = this.conversations) ? n : new u.conversations(this)), u.productTours && this.Si.push(this.productTours = new u.productTours(this)), u.heatmaps && this.Si.push(this.heatmaps = new u.heatmaps(this)), u.webVitalsAutocapture && this.Si.push(this.webVitalsAutocapture = new u.webVitalsAutocapture(this)), u.exceptionObserver && this.Si.push(this.exceptionObserver = new u.exceptionObserver(this)), u.deadClicksAutocapture && this.Si.push(this.deadClicksAutocapture = new u.deadClicksAutocapture(this, s5)), u.toolbar && this.Si.push(this.toolbar = null != (o = this.toolbar) ? o : new u.toolbar(this)), u.experiments && this.Si.push(this.experiments = null != (a = this.experiments) ? a : new u.experiments(this)), this.Si.forEach(e => {
                e.initialize && h.push(() => {
                    null == e.initialize || e.initialize()
                })
            }), h.push(() => {
                if (this.ji) {
                    var e = this.ji;
                    this.ji = void 0, this.pr(e)
                }
            }), this.Hi(h, l)
        }
        Hi(e, t) {
            for (; e.length > 0;) {
                if (this.config.__preview_deferred_init_extensions && performance.now() - t >= 30 && e.length > 0) return void setTimeout(() => {
                    this.Hi(e, t)
                }, 0);
                var i = e.shift();
                if (i) try {
                    i()
                } catch (e) {
                    tJ.error("Error initializing extension:", e)
                }
            }
            var s = Math.round(performance.now() - t);
            this.register_for_session({
                [iz]: this.config.__preview_deferred_init_extensions ? "deferred" : "synchronous",
                [ij]: s
            }), this.config.__preview_deferred_init_extensions && tJ.info("PostHog extensions initialized (" + s + "ms)")
        }
        pr(e) {
            var t;
            a && a.body ? (this.config.__preview_deferred_init_extensions && (this.ji = e), this.Ui = e, this.compression = void 0, e.supportedCompression && !this.config.disable_compression && (this.compression = H(e.supportedCompression, rz) ? rz : H(e.supportedCompression, rj) ? rj : void 0), null != (t = e.analytics) && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint), this.set_config({
                person_profiles: this.Pi ? this.Pi : iG
            }), this.Si.forEach(t => null == t.onRemoteConfig ? void 0 : t.onRemoteConfig(e))) : (tJ.info("document not ready yet, trying again in 500 milliseconds..."), setTimeout(() => {
                this.pr(e)
            }, 500))
        }
        Bi() {
            try {
                this.config.loaded(this)
            } catch (e) {
                tJ.critical("`loaded` function failed", e)
            }
            if (this.zi(), this.config.internal_or_test_user_hostname && null != l && l.hostname) {
                var e = l.hostname,
                    t = this.config.internal_or_test_user_hostname;
                ("string" == typeof t ? e === t : t.test(e)) && this.setInternalOrTestUser()
            }
            this.config.capture_pageview && setTimeout(() => {
                (this.consent.isOptedIn() || this.Ci()) && this.Vi()
            }, 1), this.Wi = new rN(this), this.Wi.load()
        }
        zi() {
            var e;
            this.is_capturing() && this.config.request_batching && (null == (e = this.$i) || e.enable())
        }
        _dom_loaded() {
            this.is_capturing() && i0(this.__request_queue, e => this.Di(e)), this.__request_queue = [], this.zi()
        }
        _handle_unload() {
            var e, t, i, s;
            null == (e = this.surveys) || null == e.handlePageUnload || e.handlePageUnload(), this.config.request_batching ? (this.Gi() && this.capture(iX), null == (t = this.logs) || t.flushLogs("sendBeacon"), null == (i = this.$i) || i.unload(), null == (s = this.Ni) || s.unload()) : this.Gi() && this.capture(iX, null, {
                transport: "sendBeacon"
            })
        }
        _send_request(e) {
            this.__loaded ? n3 ? this.__request_queue.push(e) : this.rateLimiter.isServerRateLimited(e.batchKey) ? e.fireCallbackOnDrop && (null == e.callback || e.callback({
                statusCode: 429
            })) : (e.transport = e.transport || this.config.api_transport, e.headers = b({}, this.config.request_headers, e.headers), e.compression = "best-available" === e.compression ? this.compression : e.compression, (Q(this.config.disable_beacon) ? this.config.__preview_disable_beacon : this.config.disable_beacon) && (e.disableTransport = ["sendBeacon"]), e.fetchOptions = e.fetchOptions || this.config.fetch_options, (e => {
                var t, i, s, r = b({}, e);
                r.timeout = r.timeout || 6e4, r.url = ny(r.url, r.compression);
                var n = null != (t = r.transport) ? t : "fetch",
                    o = nb.filter(e => !r.disableTransport || !e.transport || !r.disableTransport.includes(e.transport)),
                    a = null != (i = null == (s = function(e) {
                        for (var t = 0; e.length > t; t++)
                            if (e[t].transport === n) return e[t]
                    }(o)) ? void 0 : s.method) ? i : o[0].method;
                if (!a) throw Error("No available transport method");
                "sendBeacon" !== n && r.data && r.compression === rz && d && "u" > typeof Promise && !nh ? nf(r).then(e => {
                    a(e)
                }).catch(t => {
                    L(t) ? (nh = !0, a(b({}, r, {
                        compression: void 0,
                        url: ny(e.url, void 0)
                    }))) : ((e => {
                        if (!e || "object" != typeof e) return !1;
                        var t = "name" in e ? String(e.name) : "";
                        return L(e) || t === A
                    })(t) && (nh = !0), a(r))
                }) : a(r)
            })(b({}, e, {
                callback: t => {
                    var i, s;
                    this.rateLimiter.checkForLimiting(t), 400 > t.statusCode || null == (i = (s = this.config).on_request_error) || i.call(s, t), null == e.callback || e.callback(t)
                }
            }))) : e.fireCallbackOnDrop && (null == e.callback || e.callback({
                statusCode: 0
            }))
        }
        Di(e) {
            this.Ni ? this.Ni.retriableRequest(e) : this._send_request(e)
        }
        _execute_array(e) {
            nK++;
            try {
                var t, i = [],
                    s = [],
                    r = [];
                i0(e, e => {
                    if (e)
                        if (J(t = e[0])) r.push(e);
                        else if (Y(e)) try {
                        e.call(this)
                    } catch (t) {
                        tJ.error("Error executing queued PostHog call", e, t)
                    } else J(e) && "alias" === t ? i.push(e) : J(e) && -1 !== t.indexOf("capture") && Y(this[t]) ? r.push(e) : s.push(e)
                });
                var n = function(e, t) {
                    i0(e, function(e) {
                        try {
                            if (J(e[0])) {
                                var i = t;
                                i1(e, function(e) {
                                    i = i[e[0]].apply(i, e.slice(1))
                                })
                            } else t[e[0]].apply(t, e.slice(1))
                        } catch (t) {
                            tJ.error("Error executing queued PostHog call", e, t)
                        }
                    })
                };
                n(i, this), n(s, this), n(r, this)
            } finally {
                nK--
            }
        }
        push(e) {
            if (nK > 0 && J(e) && Z(e[0])) {
                var t = n7.prototype[e[0]];
                Y(t) && t.apply(this, e.slice(1))
            } else this._execute_array([e])
        }
        capture(e, t, i) {
            var s, r, n, o, a;
            if (this.__loaded && this.persistence && this.sessionPersistence && this.$i) {
                if (this.is_capturing())
                    if (!Q(e) && Z(e)) {
                        var l = !this.config.opt_out_useragent_filter && this._is_bot();
                        if (!l || this.config.__preview_capture_bot_pageviews) {
                            var u = null != i && i.skip_client_rate_limiting ? void 0 : this.rateLimiter.clientRateLimitContext();
                            if (null == u || !u.isRateLimited) {
                                null != t && t.$current_url && !Z(null == t ? void 0 : t.$current_url) && (tJ.error("Invalid `$current_url` property provided to `posthog.capture`. Input must be a string. Ignoring provided value."), null == t || delete t.$current_url), "$exception" !== e || null != i && i.Zi || tJ.warn("Using `posthog.capture('$exception')` is unreliable because it does not attach required metadata. Use `posthog.captureException(error)` instead, which attaches required metadata automatically."), this.sessionPersistence.update_search_keyword(), this.config.save_campaign_params && this.sessionPersistence.update_campaign_params(), this.config.save_referrer && this.sessionPersistence.update_referrer_info(), (this.config.save_campaign_params || this.config.save_referrer) && this.persistence.set_initial_person_info();
                                var h = new Date,
                                    c = (null == i ? void 0 : i.timestamp) || h,
                                    d = tu(null == i ? void 0 : i.uuid, sl),
                                    p = {
                                        uuid: d,
                                        event: e,
                                        properties: this.calculateEventProperties(e, t || {}, c, d)
                                    };
                                e === iK && this.config.__preview_capture_bot_pageviews && l && (p.event = "$bot_pageview", p.properties.$browser_type = "bot"), u && (p.properties.$lib_rate_limit_remaining_tokens = u.remainingTokens), (null == i ? void 0 : i.$set) && (p.$set = null == i ? void 0 : i.$set);
                                var v = null == i ? void 0 : i.$unset;
                                v && (p.$unset = v);
                                var g, _, f, m = this.Qi(null == i ? void 0 : i.$set_once, e !== iZ, e === iQ);
                                if (m && (p.$set_once = m), null != i && i._noTruncate || (r = this.config.properties_string_max_length, n = p, o = e => Z(e) ? e.slice(0, r) : e, a = new Set, p = function e(t, i) {
                                        var s;
                                        return t !== Object(t) ? o ? o(t) : t : a.has(t) ? void 0 : (a.add(t), J(t) ? (s = [], i0(t, t => {
                                            s.push(e(t))
                                        })) : (s = {}, i1(t, (t, i) => {
                                            a.has(t) || (s[i] = e(t, i))
                                        })), s)
                                    }(n)), p.timestamp = c, Q(null == i ? void 0 : i.timestamp) || (p.properties.$event_time_override_provided = !0, p.properties.$event_time_override_system_time = h), e === rT || e === rA) {
                                    var y = null == t ? void 0 : t.$survey_id,
                                        w = null == t ? void 0 : t.$survey_iteration;
                                    nB({
                                        id: y,
                                        current_iteration: w
                                    }), p.$set = b({}, p.$set, {
                                        [(g = {
                                            id: y,
                                            current_iteration: w
                                        }, f = "$survey_" + (_ = e === rA ? "responded" : "dismissed") + "/" + g.id, g.current_iteration && g.current_iteration > 0 && (f = "$survey_" + _ + "/" + g.id + "/" + g.current_iteration), f)]: !0
                                    })
                                } else e === rR && (p.$set = b({}, p.$set, {
                                    $survey_last_seen_date: (new Date).toISOString()
                                }));
                                if ("product tour shown" === e) {
                                    var x = null == t ? void 0 : t.$product_tour_type;
                                    x && (p.$set = b({}, p.$set, {
                                        ["$product_tour_last_seen_date/" + x]: (new Date).toISOString()
                                    }))
                                }
                                var S = b({}, p.properties.$set, p.$set);
                                if (X(S) || this.setPersonPropertiesForFlags(S), !ei(this.config.before_send)) {
                                    var E = this.it(p);
                                    if (!E) return;
                                    (p = E).uuid = tu(p.uuid, sl)
                                }
                                this.Ti.emit("eventCaptured", p);
                                var k = {
                                    method: "POST",
                                    url: null != (s = null == i ? void 0 : i._url) ? s : this.requestRouter.endpointFor("api", this.analyticsDefaultEndpoint),
                                    data: p,
                                    compression: "best-available",
                                    batchKey: null == i ? void 0 : i._batchKey,
                                    transport: null == i ? void 0 : i.transport
                                };
                                return !this.config.request_batching || i && (null == i || !i._batchKey) || null != i && i.send_instantly ? this.Di(k) : this.$i.enqueue(k), p
                            }
                            tJ.critical("This capture call is ignored due to client rate limiting.")
                        }
                    } else tJ.error("No event name provided to posthog.capture")
            } else tJ.uninitializedWarning("posthog.capture")
        }
        _addCaptureHook(e) {
            return this.on("eventCaptured", t => e(t.event, t))
        }
        calculateEventProperties(e, t, i, s, n) {
            if (i = i || new Date, !this.persistence || !this.sessionPersistence) return t;
            var o, u = n ? void 0 : this.persistence.remove_event_timer(e),
                h = b({}, t);
            if (h.token = this.config.token, h.$config_defaults = this.config.defaults, this.Ci() && (h.$cookieless_mode = !0), "$snapshot" === e) {
                var c = b({}, this.persistence.properties(), this.sessionPersistence.properties());
                return h.distinct_id = c.distinct_id, (!Z(h.distinct_id) && !es(h.distinct_id) || ee(h.distinct_id)) && tJ.error("Invalid distinct_id for replay event. This indicates a bug in your implementation"), h
            }
            var d, v = function(e, t, i, s) {
                if (void 0 === s && (s = !1), !p) return {};
                var n, o, a, u, h, c, d, v, g, _, m, y, b = e ? [...rd, ...t || []] : [],
                    [w, x] = function(e) {
                        for (var t = 0; to.length > t; t++) {
                            var [i, s] = to[t], r = i.exec(e), n = r && (Y(s) ? s(r, e) : s);
                            if (n) return n
                        }
                        return ["", ""]
                    }(p),
                    S = null != (h = "u" > typeof navigator ? navigator : void 0) && h.brave ? {
                        brave: !0
                    } : {},
                    E = {
                        detectGoogleSearchApp: i
                    },
                    k = i2(i6({
                        $os: w,
                        $os_version: x,
                        $browser: ts(p, navigator.vendor, S, E),
                        $device: ta(p),
                        $device_type: (d = {
                            userAgentDataPlatform: null == (n = navigator) || null == (n = n.userAgentData) ? void 0 : n.platform,
                            maxTouchPoints: null == (o = navigator) ? void 0 : o.maxTouchPoints,
                            screenWidth: null == r || null == (a = r.screen) ? void 0 : a.width,
                            screenHeight: null == r || null == (u = r.screen) ? void 0 : u.height,
                            devicePixelRatio: null == r ? void 0 : r.devicePixelRatio
                        }, (y = ta(p)) === ey || y === em || "Kobo" === y || "Kindle Fire" === y || y === eY ? ef : y === eN || y === ej || y === ez || y === eW ? "Console" : y === ew ? "Wearable" : y ? eg : "Android" === (null == d ? void 0 : d.userAgentDataPlatform) && (null != (v = null == d ? void 0 : d.maxTouchPoints) ? v : 0) > 0 ? 600 > Math.min(null != (g = null == d ? void 0 : d.screenWidth) ? g : 0, null != (_ = null == d ? void 0 : d.screenHeight) ? _ : 0) / (null != (m = null == d ? void 0 : d.devicePixelRatio) ? m : 1) ? eg : ef : "Desktop"),
                        $timezone: rE(),
                        $timezone_offset: function() {
                            try {
                                return (new Date).getTimezoneOffset()
                            } catch (e) {
                                return
                            }
                        }()
                    }), {
                        $current_url: ra(s ? th(null == l ? void 0 : l.href) : null == l ? void 0 : l.href, b, rv),
                        $host: null == l ? void 0 : l.host,
                        $pathname: null == l ? void 0 : l.pathname,
                        $raw_user_agent: p.length > 1e3 ? p.substring(0, 997) + "..." : p,
                        $browser_version: tn(p, navigator.vendor, S, E),
                        $browser_language: ry(),
                        $browser_language_prefix: "string" == typeof(c = ry()) ? c.split("-")[0] : void 0,
                        $screen_height: null == r ? void 0 : r.screen.height,
                        $screen_width: null == r ? void 0 : r.screen.width,
                        $viewport_height: null == r ? void 0 : r.innerHeight,
                        $viewport_width: null == r ? void 0 : r.innerWidth,
                        $lib: f.LIB_NAME,
                        $lib_version: f.LIB_VERSION,
                        $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                        $time: Date.now() / 1e3
                    });
                return f.SDK_DIST_CHANNEL && (k.$sdk_dist_channel = f.SDK_DIST_CHANNEL), k
            }(this.config.mask_personal_data_properties, this.config.custom_personal_data_properties, this.config.detect_google_search_app, this.config.disable_capture_url_hashes);
            if (this.sessionManager) {
                var {
                    sessionId: g,
                    windowId: _
                } = this.sessionManager.checkAndGetSessionAndWindowId(n, i.getTime());
                h.$session_id = g, h.$window_id = _
            }
            this.sessionPropsManager && i2(h, this.sessionPropsManager.getSessionProps());
            try {
                this.sessionRecording && i2(h, this.sessionRecording.sdkDebugProperties), h.$sdk_debug_retry_queue_size = null == (o = this.Ni) ? void 0 : o.length
            } catch (e) {
                h.$sdk_debug_error_capturing_properties = String(e)
            }
            if (this.requestRouter.region === nD && (h.$lib_custom_api_host = this.config.api_host), d = e !== iK || n ? e !== iX || n ? this.pageViewManager.doEvent() : this.pageViewManager.doPageLeave(i) : this.pageViewManager.doPageView(i, s), h = i2(h, d), e === iK && a && (h.title = a.title), !Q(u)) {
                var m = i.getTime() - u;
                h.$duration = parseFloat((m / 1e3).toFixed(3))
            }
            p && this.config.opt_out_useragent_filter && (h.$browser_type = this._is_bot() ? "bot" : "browser"), (h = i2({}, v, this.persistence.properties(), this.sessionPersistence.properties(), h)).$is_identified = this._isIdentified(), J(this.config.property_denylist) ? i1(this.config.property_denylist, function(e) {
                delete h[e]
            }) : tJ.error(n1 + this.config.property_denylist + " or property_blacklist config: " + this.config.property_blacklist);
            var y = this.config.sanitize_properties;
            y && (tJ.error(n0), h = y(h, e));
            var w = this.Ji();
            return h.$process_person_profile = w, w && !n && this.Yi("_calculate_event_properties"), h
        }
        Qi(e, t, i) {
            if (void 0 === t && (t = !0), void 0 === i && (i = !1), !this.persistence || !this.Ji() || this.Ii && !i) return e;
            var s, r = i2({}, this.persistence.get_initial_props(), (null == (s = this.sessionPropsManager) ? void 0 : s.getSetOnceProps()) || {}, e || {}),
                n = this.config.sanitize_properties;
            return n && (tJ.error(n0), r = n(r, "$set_once")), t && (this.Ii = !0), X(r) ? void 0 : r
        }
        register(e, t) {
            var i;
            null == (i = this.persistence) || i.register(e, t)
        }
        register_once(e, t, i) {
            var s;
            null == (s = this.persistence) || s.register_once(e, t, i)
        }
        register_for_session(e) {
            var t;
            null == (t = this.sessionPersistence) || t.register(e)
        }
        unregister(e) {
            var t;
            null == (t = this.persistence) || t.unregister(e)
        }
        unregister_for_session(e) {
            var t;
            null == (t = this.sessionPersistence) || t.unregister(e)
        }
        Ki(e, t) {
            this.register({
                [e]: t
            })
        }
        getFeatureFlag(e, t) {
            var i;
            return null == (i = this.featureFlags) ? void 0 : i.getFeatureFlag(e, t)
        }
        getFeatureFlagPayload(e) {
            var t;
            return null == (t = this.featureFlags) ? void 0 : t.getFeatureFlagPayload(e)
        }
        getFeatureFlagResult(e, t) {
            var i;
            return null == (i = this.featureFlags) ? void 0 : i.getFeatureFlagResult(e, t)
        }
        getAllFeatureFlags() {
            var e, t;
            return null != (e = null == (t = this.featureFlags) ? void 0 : t.getAllFeatureFlags()) ? e : []
        }
        isFeatureEnabled(e, t) {
            var i;
            return null == (i = this.featureFlags) ? void 0 : i.isFeatureEnabled(e, t)
        }
        reloadFeatureFlags() {
            var e;
            null == (e = this.featureFlags) || e.reloadFeatureFlags()
        }
        updateFlags(e, t, i) {
            var s;
            null == (s = this.featureFlags) || s.updateFlags(e, t, i)
        }
        updateEarlyAccessFeatureEnrollment(e, t, i) {
            var s;
            null == (s = this.featureFlags) || s.updateEarlyAccessFeatureEnrollment(e, t, i)
        }
        getEarlyAccessFeatures(e, t, i) {
            var s;
            return void 0 === t && (t = !1), null == (s = this.featureFlags) ? void 0 : s.getEarlyAccessFeatures(e, t, i)
        }
        on(e, t) {
            return this.Ti.on(e, t)
        }
        onFeatureFlags(e) {
            return this.featureFlags ? this.featureFlags.onFeatureFlags(e) : (e([], {}, {
                errorsLoading: !0
            }), () => {})
        }
        onSurveysLoaded(e) {
            return this.surveys ? this.surveys.onSurveysLoaded(e) : (e([], {
                isLoaded: !1,
                error: nZ
            }), () => {})
        }
        onSessionId(e) {
            var t, i;
            return null != (t = null == (i = this.sessionManager) ? void 0 : i.onSessionId(e)) ? t : () => {}
        }
        getSurveys(e, t) {
            void 0 === t && (t = !1), this.surveys ? this.surveys.getSurveys(e, t) : e([], {
                isLoaded: !1,
                error: nZ
            })
        }
        getActiveMatchingSurveys(e, t) {
            void 0 === t && (t = !1), this.surveys ? this.surveys.getActiveMatchingSurveys(e, t) : e([], {
                isLoaded: !1,
                error: nZ
            })
        }
        renderSurvey(e, t) {
            var i;
            null == (i = this.surveys) || i.renderSurvey(e, t)
        }
        displaySurvey(e, t) {
            var i;
            void 0 === t && (t = nV), null == (i = this.surveys) || i.displaySurvey(e, t)
        }
        cancelPendingSurvey(e) {
            var t;
            null == (t = this.surveys) || t.cancelPendingSurvey(e)
        }
        canRenderSurvey(e) {
            var t, i;
            return null != (t = null == (i = this.surveys) ? void 0 : i.canRenderSurvey(e)) ? t : {
                visible: !1,
                disabledReason: nZ
            }
        }
        canRenderSurveyAsync(e, t) {
            var i, s;
            return void 0 === t && (t = !1), null != (i = null == (s = this.surveys) ? void 0 : s.canRenderSurveyAsync(e, t)) ? i : Promise.resolve({
                visible: !1,
                disabledReason: nZ
            })
        }
        Xi(e) {
            return !e || ee(e) ? (tJ.critical("Unique user id has not been set in posthog.identify"), !1) : e === iN ? (tJ.critical('The string "' + e + '" was set in posthog.identify which indicates an error. This ID is only used as a sentinel value.'), !1) : !["distinct_id", "distinctid"].includes(e.toLowerCase()) && !["undefined", "null"].includes(e.toLowerCase()) || (tJ.critical('The string "' + e + '" was set in posthog.identify which indicates an error. This ID should be unique to the user and not a hardcoded string.'), !1)
        }
        identify(e, t, i) {
            if (!this.__loaded || !this.persistence) return tJ.uninitializedWarning("posthog.identify");
            if (es(e) && (e = e.toString(), tJ.warn("The first argument to posthog.identify was a number, but it should be a string. It has been converted to a string.")), this.Xi(e) && this.Yi("posthog.identify")) {
                var s = this.get_distinct_id();
                this.register({
                    $user_id: e
                }), this.get_property(tZ) || this.register_once({
                    $had_persisted_distinct_id: !0,
                    $device_id: s
                }, ""), e !== s && e !== this.get_property(t1) && (this.unregister(t1), this.register({
                    distinct_id: e
                }));
                var r, n = (this.persistence.get_property(iC) || iV) === iV;
                e !== s && n ? (this.persistence.set_property(iC, iW), this.setPersonPropertiesForFlags({
                    $set: t || {},
                    $set_once: i || {}
                }, !1), this.capture(iQ, {
                    distinct_id: e,
                    $anon_distinct_id: s
                }, {
                    $set: t || {},
                    $set_once: i || {}
                }), this.Ri = nA(e, t, i), null == (r = this.featureFlags) || r.setAnonymousDistinctId(s)) : (t || i) && this.setPersonProperties(t, i), e !== s && (this.reloadFeatureFlags(), this.unregister(iP))
            }
        }
        setPersonProperties(e, t) {
            if ((e || t) && this.Yi("posthog.setPersonProperties")) {
                var i = nA(this.get_distinct_id(), e, t);
                this.Ri !== i ? (this.setPersonPropertiesForFlags({
                    $set: e || {},
                    $set_once: t || {}
                }, !0), this.capture("$set", {
                    $set: e || {},
                    $set_once: t || {}
                }), this.Ri = i) : tJ.info("A duplicate setPersonProperties call was made with the same properties. It has been ignored.")
            }
        }
        unsetPersonProperties(e) {
            var t, i = (J(e) ? e : [e]).filter(e => Z(e) && e.length > 0);
            0 !== i.length && this.Yi("posthog.unsetPersonProperties") && (null == (t = this.featureFlags) || t.unsetPersonPropertiesForFlags(i, !0), this.capture("$set", {
                $unset: i
            }), this.Ri = null)
        }
        group(e, t, i) {
            if (e && t) {
                var s = this.getGroups(),
                    r = s[e] !== t;
                if (r && this.resetGroupPropertiesForFlags(e), this.register({
                        $groups: b({}, s, {
                            [e]: t
                        })
                    }), r || i) {
                    var n = {
                        $group_type: e,
                        $group_key: t
                    };
                    i && (n.$group_set = i), this.capture(iZ, n)
                }
                i && this.setGroupPropertiesForFlags({
                    [e]: i
                }), r && !i && this.reloadFeatureFlags()
            } else tJ.error("posthog.group requires a group type and group key")
        }
        resetGroups() {
            this.register({
                $groups: {}
            }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags()
        }
        setPersonPropertiesForFlags(e, t) {
            var i;
            void 0 === t && (t = !0), null == (i = this.featureFlags) || i.setPersonPropertiesForFlags(e, t)
        }
        resetPersonPropertiesForFlags(e) {
            var t;
            void 0 === e && (e = !0), null == (t = this.featureFlags) || t.resetPersonPropertiesForFlags(e)
        }
        setGroupPropertiesForFlags(e, t) {
            var i;
            void 0 === t && (t = !0), this.Yi("posthog.setGroupPropertiesForFlags") && (null == (i = this.featureFlags) || i.setGroupPropertiesForFlags(e, t))
        }
        resetGroupPropertiesForFlags(e) {
            var t;
            null == (t = this.featureFlags) || t.resetGroupPropertiesForFlags(e)
        }
        reset(e) {
            if (tJ.info("reset"), !this.__loaded) return tJ.uninitializedWarning("posthog.reset");
            var t, i, s, r, n, o, a, l, u, h, c = this.get_property(tZ),
                d = this.get_property(t0),
                p = this.get_property(ii);
            if (this.consent.reset(), null == (t = this.persistence) || t.clear(), null == (i = this.sessionPersistence) || i.clear(), Q(p) || null == (h = this.persistence) || h.register({
                    [ii]: p
                }), null == (s = this.surveys) || s.reset(), null == (r = this.Wi) || r.stop(), null == (n = this.featureFlags) || n.reset(), null == (o = this.conversations) || o.reset(), null == (a = this.logs) || a.reset(), null == (l = this.persistence) || l.set_property(iC, iV), null == (u = this.sessionManager) || u.resetSessionId(), this.Ri = null, this.config.cookieless_mode === iU) this.register_once({
                distinct_id: iN,
                $device_id: null
            }, "");
            else {
                var v = this.config.get_device_id(sl());
                this.register_once({
                    distinct_id: v,
                    $device_id: e ? v : c
                }, ""), e || Q(d) || this.register({
                    [t0]: d
                })
            }
            this.register({
                $last_posthog_reset: (new Date).toISOString()
            }, 1), delete this.config.identity_distinct_id, delete this.config.identity_hash, this.reloadFeatureFlags()
        }
        shutdown(e) {
            var t = this;
            return y(function*() {
                var e, i, s, r;
                t.__loaded ? (null == (e = t.logs) || e.flushLogs("sendBeacon"), null == (i = t.$i) || i.unload(), null == (s = t.Ni) || s.unload(), null == (r = t.featureFlags) || r.destroy()) : tJ.uninitializedWarning("posthog.shutdown")
            })()
        }
        setIdentity(e, t) {
            var i;
            this.config.identity_distinct_id = e, this.config.identity_hash = t, this.alias(e), null == (i = this.conversations) || i.en()
        }
        clearIdentity() {
            var e;
            delete this.config.identity_distinct_id, delete this.config.identity_hash, null == (e = this.conversations) || e.tn()
        }
        get_distinct_id() {
            return this.get_property("distinct_id")
        }
        getGroups() {
            return this.get_property("$groups") || {}
        }
        get_session_id() {
            var e, t;
            return null != (e = null == (t = this.sessionManager) ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) ? e : ""
        }
        get_session_replay_url(e) {
            if (!this.sessionManager) return "";
            var {
                sessionId: t,
                sessionStartTimestamp: i
            } = this.sessionManager.checkAndGetSessionAndWindowId(!0), s = this.requestRouter.endpointFor("ui", "/project/" + this.config.token + "/replay/" + t);
            if (null != e && e.withTimestamp && i) {
                var r, n = null != (r = e.timestampLookBack) ? r : 10;
                if (!i) return s;
                s += "?t=" + Math.max(Math.floor(((new Date).getTime() - i) / 1e3) - n, 0)
            }
            return s
        }
        alias(e, t) {
            return e === this.get_property(tQ) ? (tJ.critical("Attempting to create alias for existing People user - aborting."), -2) : this.Yi("posthog.alias") ? (Q(t) && (t = this.get_distinct_id()), e !== t ? (this.Ki(t1, e), this.capture("$create_alias", {
                alias: e,
                distinct_id: t
            })) : (tJ.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1)) : void 0
        }
        set_config(e) {
            var t = b({}, this.config);
            if (K(e)) {
                i2(this.config, n6(e));
                var i, s, r, n, o, a, l, u, h, c, d, p = this.Ai();
                null == (i = this.persistence) || i.update_config(this.config, t, p), this.sessionPersistence = "sessionStorage" === this.config.persistence || "memory" === this.config.persistence ? this.persistence : new r$(b({}, this.config, {
                    persistence: "sessionStorage"
                }), p, !1);
                var v = this.Oi(this.config.debug);
                en(v) && (this.config.debug = v), en(this.config.debug) && (this.config.debug ? (f.DEBUG = !0, sv.N() && sv.q("ph_debug", !0), tJ.info("set_config", {
                    config: e,
                    oldConfig: t,
                    newConfig: b({}, this.config)
                })) : (f.DEBUG = !1, sv.N() && sv.P("ph_debug"))), null == (s = this.exceptionObserver) || s.onConfigChange(), null == (r = this.exceptions) || r.onConfigChange(), null == (n = this.sessionRecording) || n.startIfEnabledOrStop(), null == (o = this.tracingHeaders) || o.startIfEnabledOrStop(), null == (a = this.autocapture) || a.startIfEnabled(), null == (l = this.heatmaps) || l.startIfEnabled(), null == (u = this.exceptionObserver) || u.startIfEnabledOrStop(), null == (h = this.deadClicksAutocapture) || h.startIfEnabledOrStop(), null == (c = this.surveys) || c.loadIfEnabled(), this.rn(), null == (d = this.externalIntegrations) || d.startIfEnabledOrStop()
            }
        }
        _overrideSDKInfo(e, t) {
            f.LIB_NAME = e, f.LIB_VERSION = t
        }
        startSessionRecording(e) {
            var t, i, s, r, n, o = !0 === e,
                a = {
                    sampling: o || !(null == e || !e.sampling),
                    linked_flag: o || !(null == e || !e.linked_flag),
                    url_trigger: o || !(null == e || !e.url_trigger),
                    event_trigger: o || !(null == e || !e.event_trigger)
                };
            Object.values(a).some(Boolean) && (null == (t = this.sessionManager) || t.checkAndGetSessionAndWindowId(), a.sampling && (null == (i = this.sessionRecording) || i.overrideSampling()), a.linked_flag && (null == (s = this.sessionRecording) || s.overrideLinkedFlag()), a.url_trigger && (null == (r = this.sessionRecording) || r.overrideTrigger("url")), a.event_trigger && (null == (n = this.sessionRecording) || n.overrideTrigger("event"))), this.set_config({
                disable_session_recording: !1
            })
        }
        stopSessionRecording() {
            this.set_config({
                disable_session_recording: !0
            })
        }
        sessionRecordingStarted() {
            var e;
            return !(null == (e = this.sessionRecording) || !e.started)
        }
        captureException(e, t) {
            if (this.exceptions) {
                var i = Error("PostHog syntheticException"),
                    s = this.exceptions.buildProperties(e, {
                        handled: !0,
                        syntheticException: i
                    });
                return this.exceptions.sendExceptionEvent(b({}, s, t))
            }
        }
        addExceptionStep(e, t) {
            var i;
            null == (i = this.exceptions) || i.addExceptionStep(e, t)
        }
        captureLog(e) {
            var t;
            null == (t = this.logs) || t.captureLog(e)
        }
        get logger() {
            var e, t;
            return null != (e = null == (t = this.logs) ? void 0 : t.logger) ? e : n7.nn
        }
        startExceptionAutocapture(e) {
            this.set_config({
                capture_exceptions: null == e || e
            })
        }
        stopExceptionAutocapture() {
            this.set_config({
                capture_exceptions: !1
            })
        }
        loadToolbar(e) {
            var t, i;
            return null != (t = null == (i = this.toolbar) ? void 0 : i.loadToolbar(e)) && t
        }
        get_property(e) {
            var t;
            return null == (t = this.persistence) ? void 0 : t.props[e]
        }
        getSessionProperty(e) {
            var t;
            return null == (t = this.sessionPersistence) ? void 0 : t.props[e]
        }
        toString() {
            var e, t = null != (e = this.config.name) ? e : n2;
            return t !== n2 && (t = n2 + "." + t), t
        }
        _isIdentified() {
            var e, t;
            return (null == (e = this.persistence) ? void 0 : e.get_property(iC)) === iW || (null == (t = this.sessionPersistence) ? void 0 : t.get_property(iC)) === iW
        }
        Ji() {
            var e, t;
            return !("never" === this.config.person_profiles || this.config.person_profiles === iG && !this._isIdentified() && X(this.getGroups()) && (null == (e = this.persistence) || null == (e = e.props) || !e[t1]) && (null == (t = this.persistence) || null == (t = t.props) || !t[iL]))
        }
        Gi() {
            return !0 === this.config.capture_pageleave || "if_capture_pageview" === this.config.capture_pageleave && (!0 === this.config.capture_pageview || "history_change" === this.config.capture_pageview)
        }
        createPersonProfile() {
            this.Ji() || this.Yi("posthog.createPersonProfile") && this.setPersonProperties({}, {})
        }
        setInternalOrTestUser() {
            this.Yi("posthog.setInternalOrTestUser") && this.setPersonProperties({
                $internal_or_test_user: !0
            })
        }
        Yi(e) {
            return "never" === this.config.person_profiles ? (tJ.error(e + ' was called, but process_person is set to "never". This call will be ignored.'), !1) : (this.Ki(iL, !0), !0)
        }
        Ai() {
            if ("always" === this.config.cookieless_mode) return !0;
            var e = this.consent.isOptedOut();
            return this.config.disable_persistence || e && !(!this.config.opt_out_persistence_by_default && this.config.cookieless_mode !== iB)
        }
        rn() {
            var e, t, i, s, r = this.Ai();
            return (null == (e = this.persistence) ? void 0 : e.Vt) !== r && (null == (i = this.persistence) || i.set_disabled(r)), (null == (t = this.sessionPersistence) ? void 0 : t.Vt) !== r && (null == (s = this.sessionPersistence) || s.set_disabled(r)), r
        }
        opt_in_capturing(e) {
            var t;
            if (this.config.cookieless_mode !== iU) {
                if (this.Ci()) {
                    this.reset(!0), null == (r = this.sessionManager) || r.destroy(), null == (n = this.pageViewManager) || n.destroy(), this.sessionManager = new nI(this), this.pageViewManager = new re(this), this.persistence && (this.sessionPropsManager = new nP(this, this.sessionManager, this.persistence));
                    var i, s, r, n, o, a, l, u, h = null != (o = null == (a = this.config.__extensionClasses) ? void 0 : a.sessionRecording) ? o : null == (l = n7.__defaultExtensionClasses) ? void 0 : l.sessionRecording;
                    h && (this.sessionRecording = this.ki(this.sessionRecording, new h(this)), this.Ui && (null == (u = this.sessionRecording) || null == u.onRemoteConfig || u.onRemoteConfig(this.Ui)))
                }
                this.consent.optInOut(!0), this.rn(), this.zi(), null == (t = this.sessionRecording) || t.startIfEnabledOrStop(), this.config.cookieless_mode == iB && (null == (i = this.surveys) || i.loadIfEnabled()), (Q(null == e ? void 0 : e.captureEventName) || null != e && e.captureEventName) && this.capture(null != (s = null == e ? void 0 : e.captureEventName) ? s : "$opt_in", null == e ? void 0 : e.captureProperties, {
                    send_instantly: !0
                }), this.config.capture_pageview && this.Vi()
            } else tJ.warn(nQ)
        }
        opt_out_capturing() {
            var e, t, i;
            this.config.cookieless_mode !== iU ? (this.config.cookieless_mode === iB && this.consent.isOptedIn() && this.reset(!0), this.consent.optInOut(!1), this.rn(), this.config.cookieless_mode === iB && (this.register({
                distinct_id: iN,
                $device_id: null
            }), null == (e = this.sessionRecording) || e.stopRecording(), this.sessionRecording = void 0, null == (t = this.sessionManager) || t.destroy(), null == (i = this.pageViewManager) || i.destroy(), this.sessionManager = void 0, this.sessionPropsManager = void 0, this.config.capture_pageview && this.Vi(), this.zi())) : tJ.warn(nQ)
        }
        has_opted_in_capturing() {
            return this.consent.isOptedIn()
        }
        has_opted_out_capturing() {
            return this.consent.isOptedOut()
        }
        get_explicit_consent_status() {
            var e = this.consent.consent;
            return 1 === e ? "granted" : 0 === e ? "denied" : "pending"
        }
        is_capturing() {
            return this.config.cookieless_mode === iU || (this.config.cookieless_mode === iB ? this.consent.isRejected() || this.consent.isOptedIn() : !this.has_opted_out_capturing())
        }
        clear_opt_in_out_capturing() {
            this.consent.reset(), this.rn()
        }
        _is_bot() {
            return o ? nC(o, this.config.custom_blocked_useragents) : void 0
        }
        Vi() {
            a && ("visible" === a.visibilityState ? this.Ei || (this.Ei = !0, this.capture(iK, {
                title: a.title
            }, {
                send_instantly: !0
            }), this.Mi && (a.removeEventListener(iJ, this.Mi), this.Mi = null)) : this.Mi || (this.Mi = this.Vi.bind(this), i7(a, iJ, this.Mi)))
        }
        debug(e) {
            !1 === e ? (null == r || r.console.log("You've disabled debug mode."), this.set_config({
                debug: !1
            })) : (null == r || r.console.log("You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."), this.set_config({
                debug: !0
            }))
        }
        mr() {
            var e, t, i, s, r = this.Li || {};
            return "advanced_disable_flags" in r ? !!r.advanced_disable_flags : !1 !== this.config.advanced_disable_flags ? !!this.config.advanced_disable_flags : !0 === this.config.advanced_disable_decide ? (tJ.warn("Config field 'advanced_disable_decide' is deprecated. Please use 'advanced_disable_flags' instead. The old field will be removed in a future major version."), !0) : (t = "advanced_disable_decide", i = (e = "advanced_disable_flags") in r && !ei(r[e]), s = t in r && !ei(r[t]), i ? r[e] : !!s && (tJ && tJ.warn("Config field '" + t + "' is deprecated. Please use '" + e + "' instead. The old field will be removed in a future major version."), r[t]))
        }
        it(e) {
            if (ei(this.config.before_send)) return e;
            var t, i = Object.keys(null != (t = e.properties) ? t : {}).filter(ea),
                s = J(this.config.before_send) ? this.config.before_send : [this.config.before_send],
                r = e;
            for (var n of s) {
                if (ei(r = n(r))) {
                    var o = "Event '" + e.event + "' was rejected in beforeSend function";
                    return eo(e.event) ? tJ.warn(o + ". This can cause unexpected behavior.") : tJ.info(o), null
                }
                r.properties && !X(r.properties) || tJ.warn("Event '" + e.event + "' has no properties after beforeSend function, this is likely an error.")
            }
            for (var a of i)
                if (r.properties && ei(r.properties[a])) return tJ.warn("Event '" + e.event + "' had its '" + a + "' property removed in a beforeSend function. This property is required for ingestion, so the event will be dropped."), null;
            return r
        }
        getPageViewId() {
            var e;
            return null == (e = this.pageViewManager.Ot) ? void 0 : e.pageViewId
        }
        captureTraceFeedback(e, t) {
            this.capture("$ai_feedback", {
                $ai_trace_id: String(e),
                $ai_feedback_text: t
            })
        }
        captureTraceMetric(e, t, i) {
            this.capture("$ai_metric", {
                $ai_trace_id: String(e),
                $ai_metric_name: t,
                $ai_metric_value: String(i)
            })
        }
        Oi(e) {
            var t = en(e) && !e,
                i = sv.N() && "true" === sv.A("ph_debug");
            return !t && (!!i || e)
        }
    }
    n7.__defaultExtensionClasses = {}, n7.nn = {
            trace: i = () => {},
            debug: i,
            info: i,
            warn: i,
            error: i,
            fatal: i
        },
        function(e, t) {
            for (var i = 0; t.length > i; i++) e.prototype[t[i]] = i8(e.prototype[t[i]])
        }(n7, ["identify"]);
    class n9 {
        constructor(e) {
            this.disabled = !1 === e;
            var t = K(e) ? e : {};
            this.thresholdPx = t.threshold_px || 30, this.timeoutMs = t.timeout_ms || 1e3, this.clickCount = t.click_count || 3, this.clicks = []
        }
        isRageClick(e, t, i) {
            if (this.disabled) return !1;
            var s = this.clicks[this.clicks.length - 1];
            if (s && Math.abs(e - s.x) + Math.abs(t - s.y) < this.thresholdPx && this.timeoutMs > i - s.timestamp) {
                if (this.clicks.push({
                        x: e,
                        y: t,
                        timestamp: i
                    }), this.clicks.length === this.clickCount) return !0
            } else this.clicks = [{
                x: e,
                y: t,
                timestamp: i
            }];
            return !1
        }
    }
    var oe = "$copy_autocapture",
        ot = tY("[AutoCapture]");

    function oi(e, t) {
        return t.length > e ? t.slice(0, e) + "..." : t
    }
    var os = tY("[ExceptionAutocapture]"),
        or = () => {},
        on = tY("[TracingHeaders]"),
        oo = tY("[Web Vitals]"),
        oa = "disabled",
        ol = "lazy_loading",
        ou = "awaiting_config",
        oh = "missing_config";
    tY("[SessionRecording]"), tY("[SessionRecording]");
    var oc = "[SessionRecording]",
        od = tY(oc),
        op = tY("[Heatmaps]");

    function ov(e) {
        return K(e) && "clientX" in e && "clientY" in e && es(e.clientX) && es(e.clientY)
    }
    var og = tY("[Product Tours]"),
        o_ = e => {
            var t;
            return !e.config.disable_product_tours && !(null == (t = e.persistence) || !t.get_property(ie))
        },
        of = ["$set_once", "$set"],
        om = tY("[SiteApps]"),
        oy = "Error while initializing PostHog app with config id ";

    function ob(e, t, i) {
        if (ei(e)) return !1;
        switch (i) {
            case "exact":
                return e === t;
            case "contains":
                return RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/_/g, ".").replace(/%/g, ".*"), "i").test(e);
            case "regex":
                try {
                    return new RegExp(t).test(e)
                } catch (e) {
                    return !1
                }
            default:
                return !1
        }
    }
    class ow {
        constructor(e) {
            this.sn = new nF, this.an = (e, t) => this.ln(e, t) && this.un(e, t) && this.hn(e, t) && this.dn(e, t), this.ln = (e, t) => null == t || !t.event || (null == e ? void 0 : e.event) === (null == t ? void 0 : t.event), this._instance = e, this.cn = new Set, this.vn = new Set
        }
        init() {
            var e, t;
            Q(null == (e = this._instance) ? void 0 : e._addCaptureHook) || null == (t = this._instance) || t._addCaptureHook((e, t) => {
                this.on(e, t)
            })
        }
        register(e) {
            var t, i;
            if (!Q(null == (t = this._instance) ? void 0 : t._addCaptureHook) && (e.forEach(e => {
                    var t, i;
                    null == (t = this.vn) || t.add(e), null == (i = e.steps) || i.forEach(e => {
                        var t;
                        null == (t = this.cn) || t.add((null == e ? void 0 : e.event) || "")
                    })
                }), null != (i = this._instance) && i.autocapture)) {
                var s, r = new Set;
                e.forEach(e => {
                    var t;
                    null == (t = e.steps) || t.forEach(e => {
                        null != e && e.selector && r.add(null == e ? void 0 : e.selector)
                    })
                }), null == (s = this._instance) || s.autocapture.setElementSelectors(r)
            }
        }
        on(e, t) {
            var i;
            null != t && 0 != e.length && (this.cn.has(e) || this.cn.has(null == t ? void 0 : t.event)) && this.vn && (null == (i = this.vn) ? void 0 : i.size) > 0 && this.vn.forEach(e => {
                this.fn(t, e) && this.sn.emit("actionCaptured", e.name)
            })
        }
        pn(e) {
            this.onAction("actionCaptured", t => e(t))
        }
        fn(e, t) {
            if (null == (null == t ? void 0 : t.steps)) return !1;
            for (var i of t.steps)
                if (this.an(e, i)) return !0;
            return !1
        }
        onAction(e, t) {
            return this.sn.on(e, t)
        }
        un(e, t) {
            if (null != t && t.url) {
                var i, s = null == e || null == (i = e.properties) ? void 0 : i.$current_url;
                if (!s || "string" != typeof s || !ob(s, t.url, t.url_matching || "contains")) return !1
            }
            return !0
        }
        hn(e, t) {
            return !!this.gn(e, t) && !!this.mn(e, t) && !!this.yn(e, t)
        }
        gn(e, t) {
            if (null == t || !t.href) return !0;
            var i = this.bn(e);
            if (i.length > 0) return i.some(e => ob(e.href, t.href, t.href_matching || "exact"));
            var s, r, n = (null == e || null == (s = e.properties) ? void 0 : s.$elements_chain) || "";
            return !!n && ob((r = n.match(/(?::|")href="(.*?)"/)) ? r[1] : "", t.href, t.href_matching || "exact")
        }
        mn(e, t) {
            if (null == t || !t.text) return !0;
            var i = this.bn(e);
            if (i.length > 0) return i.some(e => ob(e.text, t.text, t.text_matching || "exact") || ob(e.$el_text, t.text, t.text_matching || "exact"));
            var s, r, n, o, a = (null == e || null == (s = e.properties) ? void 0 : s.$elements_chain) || "";
            return !!a && (r = function(e) {
                for (var t, i = [], s = /(?::|")text="(.*?)"/g; !ei(t = s.exec(e));) i.includes(t[1]) || i.push(t[1]);
                return i
            }(a), n = t.text, o = t.text_matching || "exact", r.some(e => ob(e, n, o)))
        }
        yn(e, t) {
            if (null == t || !t.selector) return !0;
            var i, s, r = null == e || null == (i = e.properties) ? void 0 : i.$element_selectors;
            if (null != r && r.includes(t.selector)) return !0;
            var n = (null == e || null == (s = e.properties) ? void 0 : s.$elements_chain) || "";
            if (t.selector_regex && n) try {
                return new RegExp(t.selector_regex).test(n)
            } catch (e) {}
            return !1
        }
        bn(e) {
            var t;
            return null == (null == e || null == (t = e.properties) ? void 0 : t.$elements) ? [] : null == e ? void 0 : e.properties.$elements
        }
        dn(e, t) {
            return null == t || !t.properties || 0 === t.properties.length || nL(t.properties.reduce((e, t) => {
                var i = J(t.value) ? t.value.map(String) : null != t.value ? [String(t.value)] : [];
                return e[t.key] = {
                    values: i,
                    operator: t.operator || "exact"
                }, e
            }, {}), null == e ? void 0 : e.properties)
        }
    }
    class ox {
        constructor(e) {
            this._n = [], this._instance = e, this.wn = new Map, this.xn = new Map, this.kn = new Map
        }
        Sn(e, t) {
            return !!e && nL(e.propertyFilters, null == t ? void 0 : t.properties)
        }
        Cn(e, t) {
            var i = new Map;
            return e.forEach(e => {
                var s;
                null == (s = e.conditions) || null == (s = s[t]) || null == (s = s.values) || s.forEach(t => {
                    if (null != t && t.name) {
                        var s = i.get(t.name) || [];
                        s.push(e.id), i.set(t.name, s)
                    }
                })
            }), i
        }
        In(e, t, i) {
            var s = (i === rI ? this.wn : this.xn).get(e),
                r = [];
            return this.Tn(e => {
                r = e.filter(e => null == s ? void 0 : s.includes(e.id))
            }), r.filter(s => {
                var r, n = null == (r = s.conditions) || null == (r = r[i]) || null == (r = r.values) ? void 0 : r.find(t => t.name === e);
                return this.Sn(n, t)
            })
        }
        register(e) {
            var t;
            Q(null == (t = this._instance) ? void 0 : t._addCaptureHook) || (this.En(e), this.Mn(e))
        }
        Mn(e) {
            var t = e.filter(e => {
                var t, i;
                return (null == (t = e.conditions) ? void 0 : t.actions) && (null == (i = e.conditions) || null == (i = i.actions) || null == (i = i.values) ? void 0 : i.length) > 0
            });
            0 !== t.length && (null == this.Pn && (this.Pn = new ow(this._instance), this.Pn.init(), this.Pn.pn(e => {
                this.onAction(e)
            })), t.forEach(e => {
                var t, i, s, r, n;
                e.conditions && null != (t = e.conditions) && t.actions && null != (i = e.conditions) && null != (i = i.actions) && i.values && (null == (s = e.conditions) || null == (s = s.actions) || null == (s = s.values) ? void 0 : s.length) > 0 && (null == (r = this.Pn) || r.register(e.conditions.actions.values), null == (n = e.conditions) || null == (n = n.actions) || null == (n = n.values) || n.forEach(t => {
                    if (t && t.name) {
                        var i = this.kn.get(t.name);
                        i && i.push(e.id), this.kn.set(t.name, i || [e.id])
                    }
                }))
            }))
        }
        En(e) {
            var t, i = e.filter(e => {
                    var t, i;
                    return (null == (t = e.conditions) ? void 0 : t.events) && (null == (i = e.conditions) || null == (i = i.events) || null == (i = i.values) ? void 0 : i.length) > 0
                }),
                s = e.filter(e => {
                    var t, i;
                    return (null == (t = e.conditions) ? void 0 : t.cancelEvents) && (null == (i = e.conditions) || null == (i = i.cancelEvents) || null == (i = i.values) ? void 0 : i.length) > 0
                });
            0 === i.length && 0 === s.length || (null == (t = this._instance) || t._addCaptureHook((e, t) => {
                this.onEvent(e, t)
            }), this.wn = this.Cn(e, rI), this.xn = this.Cn(e, rC))
        }
        onEvent(e, t) {
            var i, s, r = this.Rn(),
                n = (null == t || null == (i = t.properties) ? void 0 : i.$survey_id) || (null == t || null == (s = t.properties) ? void 0 : s.$product_tour_id);
            if (n && this.getActivatedIds().includes(n)) {
                var o = this.On(e, n);
                if ("consume" === o) return r.info("event consumed activated item, removing it", {
                    event: e,
                    itemId: n
                }), void this.Ln([n]);
                if ("persist" === o) return r.info("shown item promoted to persisted activation", {
                    event: e,
                    itemId: n
                }), void this.Fn(n)
            }
            if (this.xn.has(e)) {
                var a = this.In(e, t, rC);
                a.length > 0 && (r.info("cancel event matched, cancelling items", {
                    event: e,
                    itemsToCancel: a.map(e => e.id)
                }), this.Ln(a.map(e => e.id)), a.forEach(e => this.An(e.id)))
            }
            if (this.wn.has(e)) {
                r.info("event name matched", {
                    event: e,
                    eventPayload: t,
                    items: this.wn.get(e)
                });
                var l = this.In(e, t, rI);
                this.$n(l.map(e => e.id))
            }
        }
        onAction(e) {
            this.kn.has(e) && this.$n(this.kn.get(e) || [])
        }
        $n(e) {
            0 !== e.length && (this._n = [...new Set([...this._n, ...e])], this.Rn().info("updating activated items", {
                activatedItems: this.getActivatedIds()
            }))
        }
        Fn(e) {
            this._n = this._n.filter(t => t !== e);
            var t = this.Dn();
            t.includes(e) || this.Nn([...t, e])
        }
        Ln(e) {
            var t = new Set(e);
            this._n = this._n.filter(e => !t.has(e));
            var i = this.Dn(),
                s = i.filter(e => !t.has(e));
            s.length !== i.length && this.Nn(s)
        }
        Dn() {
            var e, t = this.qn();
            return (null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.props[t]) || []
        }
        getActivatedIds() {
            return [...new Set([...this.Dn(), ...this._n])].filter(e => !this.Bn(e))
        }
        reset() {
            this._n = [], this.Dn().length > 0 && this.Nn([])
        }
        getEventToItemsMap() {
            return this.wn
        }
        jn() {
            return this.Pn
        }
    }
    class oS extends ox {
        constructor(e) {
            super(e)
        }
        qn() {
            return iE
        }
        Hn() {
            return rR
        }
        Tn(e) {
            var t;
            null == (t = this._instance) || t.getSurveys(e)
        }
        An(e) {
            var t;
            null == (t = this._instance) || t.cancelPendingSurvey(e)
        }
        Rn() {
            return nq
        }
        Nn(e) {
            var t;
            null == (t = this._instance) || null == (t = t.persistence) || t.register({
                [iE]: e
            })
        }
        Bn() {
            return !1
        }
        On(e, t) {
            var i, s, r, n, o, a;
            return this.Tn(e => {
                a = e.find(e => e.id === t)
            }), !a || (o = (null != (s = null == (r = (i = a).conditions) || null == (r = r.events) || null == (r = r.values) ? void 0 : r.length) ? s : 0) > 0, "always" === i.schedule || null != (n = i.conditions) && null != (n = n.events) && n.repeatedActivation && o) ? e === rR ? "consume" : "ignore" : e === rR ? "persist" : e === rT || e === rA ? "consume" : "ignore"
        }
        getSurveys() {
            return this.getActivatedIds()
        }
        getEventToSurveys() {
            return this.getEventToItemsMap()
        }
    }
    var oE = "SDK is not enabled or survey functionality is not yet loaded",
        ok = "Disabled. Not loading surveys.",
        oP = null != r && r.location ? rl(r.location.hash, "__posthog") || rl(location.hash, "state") : null,
        oF = "_postHogToolbarParams",
        o$ = tY("[Toolbar]"),
        oI = tY("[FeatureFlags]"),
        oC = tY("[FeatureFlags]", {
            debugEnabled: !0
        }),
        oR = "\" failed. Feature flags didn't load in time.",
        oT = e => {
            for (var t = {}, i = 0; e.length > i; i++) t[e[i]] = !0;
            return t
        },
        oA = e => {
            var t = {};
            for (var [i, s] of i3(e || {})) s && (t[i] = s);
            return t
        },
        oM = tY("[Error tracking]"),
        oO = "Refusing to render web experiment since the viewer is a likely bot",
        oL = {
            icontains: (e, t) => t.toLowerCase().indexOf(e.toLowerCase()) > -1,
            not_icontains: (e, t) => -1 === t.toLowerCase().indexOf(e.toLowerCase()),
            regex: (e, t) => nT(t, e),
            not_regex: (e, t) => !nT(t, e),
            exact: (e, t) => t === e,
            is_not: (e, t) => t !== e
        };
    class oD {
        get Se() {
            return this._instance.config
        }
        constructor(e) {
            var t = this;
            this.getWebExperimentsAndEvaluateDisplayLogic = function(e) {
                void 0 === e && (e = !1), t.getWebExperiments(e => {
                    oD.Un("retrieved web experiments from the server"), t.zn = new Map, e.forEach(e => {
                        if (e.feature_flag_key) {
                            t.zn && (oD.Un("setting flag key ", e.feature_flag_key, " to web experiment ", e), null == (i = t.zn) || i.set(e.feature_flag_key, e));
                            var i, s = t._instance.getFeatureFlag(e.feature_flag_key);
                            Z(s) && e.variants[s] && t.Vn(e.name, s, e.variants[s].transforms)
                        } else if (e.variants)
                            for (var r in e.variants) {
                                var n = e.variants[r];
                                oD.Wn(n, t._instance) && t.Vn(e.name, r, n.transforms)
                            }
                    })
                }, e)
            }, this._instance = e, this._instance.onFeatureFlags(e => {
                this.onFeatureFlags(e)
            })
        }
        initialize() {}
        onFeatureFlags(e) {
            if (this._is_bot()) oD.Un(oO);
            else if (!this.Se.disable_web_experiments) {
                if (ei(this.zn)) return this.zn = new Map, this.loadIfEnabled(), void this.previewWebExperiment();
                oD.Un("applying feature flags", e), e.forEach(e => {
                    var t;
                    if (this.zn && null != (t = this.zn) && t.has(e)) {
                        var i, s = this._instance.getFeatureFlag(e),
                            r = null == (i = this.zn) ? void 0 : i.get(e);
                        s && null != r && r.variants[s] && this.Vn(r.name, s, r.variants[s].transforms)
                    }
                })
            }
        }
        previewWebExperiment() {
            var e = oD.getWindowLocation();
            if (null != e && e.search) {
                var t = ro(null == e ? void 0 : e.search, "__experiment_id"),
                    i = ro(null == e ? void 0 : e.search, "__experiment_variant");
                t && i && (oD.Un("previewing web experiments " + t + " && " + i), this.getWebExperiments(e => {
                    this.Gn(parseInt(t), i, e)
                }, !1, !0))
            }
        }
        loadIfEnabled() {
            this.Se.disable_web_experiments || this.getWebExperimentsAndEvaluateDisplayLogic()
        }
        getWebExperiments(e, t, i) {
            if (this.Se.disable_web_experiments && !i) return e([]);
            var s = this._instance.get_property("$web_experiments");
            if (s && !t) return e(s);
            this._instance._send_request({
                url: this._instance.requestRouter.endpointFor("api", "/api/web_experiments/?token=" + this.Se.token),
                method: "GET",
                callback: t => e(200 === t.statusCode && t.json && t.json.experiments || [])
            })
        }
        Gn(e, t, i) {
            var s = i.filter(t => t.id === e);
            s && s.length > 0 && (oD.Un("Previewing web experiment [" + s[0].name + "] with variant [" + t + "]"), this.Vn(s[0].name, t, s[0].variants[t].transforms))
        }
        static Wn(e, t) {
            return !ei(e.conditions) && oD.Zn(e, t) && oD.Qn(e)
        }
        static Zn(e, t) {
            if (ei(e.conditions) || ei(null == (s = e.conditions) ? void 0 : s.url)) return !0;
            var i = oD.getWindowLocation();
            if (i) {
                var s, r, n, o, a = sw(t, i.href);
                return null == (r = e.conditions) || !r.url || oL[null != (n = null == (o = e.conditions) ? void 0 : o.urlMatchType) ? n : "icontains"](e.conditions.url, a)
            }
            return !1
        }
        static getWindowLocation() {
            return null == r ? void 0 : r.location
        }
        static Qn(e) {
            if (ei(e.conditions) || ei(null == (i = e.conditions) ? void 0 : i.utm)) return !0;
            var t = r_();
            if (t.utm_source) {
                var i, s, r, n, o, a, l, u, h, c = null == (s = e.conditions) || null == (s = s.utm) || !s.utm_campaign || (null == (r = e.conditions) || null == (r = r.utm) ? void 0 : r.utm_campaign) == t.utm_campaign,
                    d = null == (n = e.conditions) || null == (n = n.utm) || !n.utm_source || (null == (o = e.conditions) || null == (o = o.utm) ? void 0 : o.utm_source) == t.utm_source,
                    p = null == (a = e.conditions) || null == (a = a.utm) || !a.utm_medium || (null == (l = e.conditions) || null == (l = l.utm) ? void 0 : l.utm_medium) == t.utm_medium,
                    v = null == (u = e.conditions) || null == (u = u.utm) || !u.utm_term || (null == (h = e.conditions) || null == (h = h.utm) ? void 0 : h.utm_term) == t.utm_term;
                return c && p && v && d
            }
            return !1
        }
        static Un(e) {
            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; t > s; s++) i[s - 1] = arguments[s];
            tJ.info("[WebExperiments] " + e, i)
        }
        Vn(e, t, i) {
            this._is_bot() ? oD.Un(oO) : "control" !== t ? i.forEach(i => {
                if (i.selector) {
                    oD.Un("applying transform of variant " + t + " for experiment " + e + " ", i);
                    var s, r = null == (s = document) ? void 0 : s.querySelectorAll(i.selector);
                    null == r || r.forEach(e => {
                        i.html && (e.innerHTML = i.html), i.css && e.setAttribute("style", i.css)
                    })
                }
            }) : oD.Un("Control variants leave the page unmodified.")
        }
        _is_bot() {
            return o && this._instance ? nC(o, this.Se.custom_blocked_useragents) : void 0
        }
    }
    var oN = tY("[Conversations]"),
        oz = "Conversations not available yet.",
        oj = "console",
        oq = {
            featureFlags: class {
                constructor(e) {
                    this.Jn = !1, this.Yn = !1, this.Kn = !1, this.Xn = !1, this.es = !1, this.ts = !1, this.rs = !1, this.ns = !1, this.ss = 0, this.os = () => {
                        var e = this.ls();
                        this.ss = 0, e && this.reloadFeatureFlags()
                    }, this._instance = e, this.featureFlagEventHandlers = [], r && i7(r, "online", this.os)
                }
                destroy() {
                    null == r || r.removeEventListener("online", this.os)
                }
                get Se() {
                    return this._instance.config
                }
                get zr() {
                    return this._instance.persistence
                }
                us(e) {
                    return this._instance.get_property(e)
                }
                hs() {
                    var e, t;
                    return null != (e = null == (t = this.zr) ? void 0 : t.Gt(this.Se.feature_flag_cache_ttl_ms)) && e
                }
                ds() {
                    return !!this.hs() && (this.ns || this.Kn || (this.ns = !0, oI.warn("Feature flag cache is stale, triggering refresh..."), this.reloadFeatureFlags()), !0)
                }
                cs() {
                    var e, t = null != (e = this.Se.evaluation_contexts) ? e : this.Se.evaluation_environments;
                    return !this.Se.evaluation_environments || this.Se.evaluation_contexts || this.rs || (oI.warn("evaluation_environments is deprecated. Use evaluation_contexts instead. evaluation_environments will be removed in a future version."), this.rs = !0), null != t && t.length ? t.filter(e => {
                        var t = e && "string" == typeof e && e.trim().length > 0;
                        return t || oI.error("Invalid evaluation context found:", e, "Expected non-empty string"), t
                    }) : []
                }
                vs() {
                    return this.cs().length > 0
                }
                fs() {
                    var e = this.Se.flag_keys;
                    if (!Q(e)) {
                        if (J(e)) return e.filter(e => {
                            var t = e && "string" == typeof e && e.trim().length > 0;
                            return t || oI.error("Invalid flag key found:", e, "Expected non-empty string"), t
                        });
                        oI.error("Invalid flag_keys found:", e, "Expected array of non-empty strings")
                    }
                }
                initialize() {
                    var e, t, {
                            config: i
                        } = this._instance,
                        s = null != (e = null == (t = i.bootstrap) ? void 0 : t.featureFlags) ? e : {};
                    if (Object.keys(s).length) {
                        var r, n, o = null != (r = null == (n = i.bootstrap) ? void 0 : n.featureFlagPayloads) ? r : {},
                            a = Object.keys(s).filter(e => !!s[e]).reduce((e, t) => (e[t] = s[t] || !1, e), {}),
                            l = Object.keys(o).filter(e => a[e]).reduce((e, t) => (o[t] && (e[t] = o[t]), e), {});
                        this.receivedFeatureFlags({
                            featureFlags: a,
                            featureFlagPayloads: l
                        })
                    }
                }
                updateFlags(e, t, i) {
                    var s, r, n = null != i && i.merge && null != (s = this.us(ic)) ? s : {},
                        o = null != i && i.merge && null != (r = this.us(ig)) ? r : {},
                        a = b({}, n, e),
                        l = b({}, o, t),
                        u = {};
                    for (var [h, c] of Object.entries(a)) u[h] = {
                        key: h,
                        enabled: S(c),
                        variant: E(c),
                        reason: void 0,
                        metadata: Q(null == l ? void 0 : l[h]) ? void 0 : {
                            id: 0,
                            version: void 0,
                            description: void 0,
                            payload: l[h]
                        }
                    };
                    this.receivedFeatureFlags({
                        flags: u
                    })
                }
                get hasLoadedFlags() {
                    return this.Yn
                }
                getFlags() {
                    return Object.keys(this.getFlagVariants())
                }
                getFlagsWithDetails() {
                    var e = this.us(iv),
                        t = this.us(im),
                        i = this.us(iy);
                    if (!i && !t) return e || {};
                    var s = i2({}, e || {});
                    for (var r of [...new Set([...Object.keys(i || {}), ...Object.keys(t || {})])]) {
                        var n, o, a = s[r],
                            l = null == t ? void 0 : t[r],
                            u = Q(l) ? null != (n = null == a ? void 0 : a.enabled) && n : !!l,
                            h = Q(l) ? a.variant : "string" == typeof l ? l : void 0,
                            c = null == i ? void 0 : i[r],
                            d = b({}, a, {
                                enabled: u,
                                variant: u ? null != h ? h : null == a ? void 0 : a.variant : void 0
                            });
                        u !== (null == a ? void 0 : a.enabled) && (d.original_enabled = null == a ? void 0 : a.enabled), h !== (null == a ? void 0 : a.variant) && (d.original_variant = null == a ? void 0 : a.variant), c && (d.metadata = b({}, null == a ? void 0 : a.metadata, {
                            payload: c,
                            original_payload: null == a || null == (o = a.metadata) ? void 0 : o.payload
                        })), s[r] = d
                    }
                    return this.Jn || (oI.warn(" Overriding feature flag details!", {
                        flagDetails: e,
                        overriddenPayloads: i,
                        finalDetails: s
                    }), this.Jn = !0), s
                }
                getAllFeatureFlags() {
                    var e = this.getFlagVariants(),
                        t = this.getFlagPayloads();
                    return Object.keys(e).map(i => {
                        var s = e[i];
                        return {
                            key: i,
                            enabled: S(s),
                            variant: E(s),
                            payload: x(t[i])
                        }
                    })
                }
                getFlagVariants() {
                    var e = this.us(ic),
                        t = this.us(im);
                    if (!t) return e || {};
                    for (var i = i2({}, e), s = Object.keys(t), r = 0; s.length > r; r++) i[s[r]] = t[s[r]];
                    return this.Jn || (oI.warn(" Overriding feature flags!", {
                        enabledFlags: e,
                        overriddenFlags: t,
                        finalFlags: i
                    }), this.Jn = !0), i
                }
                getFlagPayloads() {
                    var e = this.us(ig),
                        t = this.us(iy);
                    if (!t) return e || {};
                    for (var i = i2({}, e || {}), s = Object.keys(t), r = 0; s.length > r; r++) i[s[r]] = t[s[r]];
                    return this.Jn || (oI.warn(" Overriding feature flag payloads!", {
                        flagPayloads: e,
                        overriddenPayloads: t,
                        finalPayloads: i
                    }), this.Jn = !0), i
                }
                reloadFeatureFlags() {
                    this.Xn || this.Se.advanced_disable_feature_flags || this.ls() || this.ps || (this._instance.Ti.emit("featureFlagsReloading", !0), this.ps = setTimeout(() => {
                        this.gs()
                    }, 5))
                }
                ys() {
                    clearTimeout(this.ps), this.ps = void 0
                }
                ensureFlagsLoaded() {
                    this.Yn || this.Kn || this.ps || this.reloadFeatureFlags()
                }
                setAnonymousDistinctId(e) {
                    this.$anon_distinct_id = e
                }
                setReloadingPaused(e) {
                    this.Xn = e
                }
                gs(e) {
                    var t;
                    if (this.ys(), !this._instance.mr() && !this.ls())
                        if (this.Kn) this.es = !0;
                        else {
                            var i = this.Se.token,
                                s = this.us(tZ),
                                r = {
                                    token: i,
                                    distinct_id: this._instance.get_distinct_id(),
                                    groups: this._instance.getGroups(),
                                    $anon_distinct_id: this.$anon_distinct_id,
                                    person_properties: b({}, (null == (t = this.zr) ? void 0 : t.get_initial_props()) || {}, this.us(ib) || {}),
                                    group_properties: this.us(iw),
                                    timezone: rE()
                                };
                            et(s) || Q(s) || (r.$device_id = s), (null != e && e.disableFlags || this.Se.advanced_disable_feature_flags) && (r.disable_flags = !0), this.vs() && (r.evaluation_contexts = this.cs());
                            var n = this.fs();
                            Q(n) || (r.flag_keys = n);
                            var o = !!this.Se.advanced_only_evaluate_survey_feature_flags,
                                a = this._instance.requestRouter.endpointFor("flags", "/flags/?v=2" + (this.Se.advanced_only_evaluate_survey_feature_flags ? "&only_evaluate_survey_feature_flags=true" : ""));
                            this.Kn = !0, this._instance._send_request({
                                method: "POST",
                                url: a,
                                data: r,
                                compression: this.Se.disable_compression ? void 0 : rj,
                                timeout: this.Se.feature_flag_request_timeout_ms,
                                callback: e => {
                                    var t, i, s, n = !0;
                                    if (this.bs(e.statusCode), 200 === e.statusCode && (this.es || (this.$anon_distinct_id = void 0), n = !1), this.Kn = !1, !r.disable_flags || this.es) {
                                        this.ts = !n;
                                        var a = [];
                                        e.error ? e.error instanceof Error ? a.push("AbortError" === e.error.name ? "timeout" : "connection_error") : a.push("unknown_error") : 200 !== e.statusCode && a.push("api_error_" + e.statusCode), null != (t = e.json) && t.errorsWhileComputingFlags && a.push("errors_while_computing_flags");
                                        var l, u = !(null == (i = e.json) || null == (i = i.quotaLimited) || !i.includes("feature_flags"));
                                        (u && a.push("quota_limited"), null == (s = this.zr) || s.register({
                                            [i$]: a
                                        }), u) ? oI.warn("You have hit your feature flags quota limit, and will not be able to load feature flags until the quota is reset.  Please visit https://posthog.com/docs/billing/limits-alerts to learn more."): (r.disable_flags || this.receivedFeatureFlags(null != (l = e.json) ? l : {}, n, {
                                            partialResponse: o
                                        }), this.es && (this.es = !1, this.gs()))
                                    }
                                }
                            })
                        }
                }
                ls() {
                    return ru(this.ss, 3)
                }
                bs(e) {
                    this.ss = rh(e, this.ss, 3, () => oI.warn("Feature flag requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped refreshing feature flags; will try again when connectivity changes."))
                }
                getFeatureFlag(e, t) {
                    var i;
                    if (void 0 === t && (t = {}), !t.fresh || this.ts)
                        if (this.Yn || this.getFlags() && this.getFlags().length > 0) {
                            if (!this.ds()) {
                                var s = this.getFeatureFlagResult(e, t);
                                return null != (i = null == s ? void 0 : s.variant) ? i : null == s ? void 0 : s.enabled
                            }
                        } else oI.warn('getFeatureFlag for key "' + e + oR)
                }
                getFeatureFlagDetails(e) {
                    return this.getFlagsWithDetails()[e]
                }
                getFeatureFlagPayload(e) {
                    var t = this.getFeatureFlagResult(e, {
                        send_event: !1
                    });
                    return null == t ? void 0 : t.payload
                }
                getFeatureFlagResult(e, t) {
                    if (void 0 === t && (t = {}), !t.fresh || this.ts)
                        if (this.Yn || this.getFlags() && this.getFlags().length > 0) {
                            if (!this.ds()) {
                                var i = this.getFlagVariants(),
                                    s = e in i,
                                    r = i[e],
                                    n = this.getFlagPayloads()[e],
                                    o = String(r),
                                    a = this.us(i_) || void 0,
                                    l = this.us(iI) || void 0,
                                    u = this.us(iP) || {};
                                if (this.Se.advanced_feature_flags_dedup_per_session) {
                                    var h, c = this._instance.get_session_id(),
                                        d = this.us(iF);
                                    c && c !== d && (u = {}, null == (h = this.zr) || h.register({
                                        [iP]: u,
                                        [iF]: c
                                    }))
                                }
                                if ((t.send_event || !("send_event" in t)) && (!(e in u) || !u[e].includes(o))) {
                                    J(u[e]) ? u[e].push(o) : u[e] = [o], null == (_ = this.zr) || _.register({
                                        [iP]: u
                                    });
                                    var p = this.getFeatureFlagDetails(e),
                                        v = [...null != (f = this.us(i$)) ? f : []];
                                    Q(r) && v.push("flag_missing");
                                    var g = {
                                        $feature_flag: e,
                                        $feature_flag_response: r,
                                        $feature_flag_payload: n || null,
                                        $feature_flag_request_id: a,
                                        $feature_flag_evaluated_at: l,
                                        $feature_flag_bootstrapped_response: (null == (m = this.Se.bootstrap) || null == (m = m.featureFlags) ? void 0 : m[e]) || null,
                                        $feature_flag_bootstrapped_payload: (null == (y = this.Se.bootstrap) || null == (y = y.featureFlagPayloads) ? void 0 : y[e]) || null,
                                        $used_bootstrap_value: !this.ts
                                    };
                                    Q(null == p || null == (b = p.metadata) ? void 0 : b.version) || (g.$feature_flag_version = p.metadata.version);
                                    var _, f, m, y, b, w, S, E, k, P, F, $ = null != (w = null == p || null == (S = p.reason) ? void 0 : S.description) ? w : null == p || null == (E = p.reason) ? void 0 : E.code;
                                    $ && (g.$feature_flag_reason = $), null != p && null != (k = p.metadata) && k.id && (g.$feature_flag_id = p.metadata.id), Q(null == p ? void 0 : p.original_variant) && Q(null == p ? void 0 : p.original_enabled) || (g.$feature_flag_original_response = Q(p.original_variant) ? p.original_enabled : p.original_variant), null != p && null != (P = p.metadata) && P.original_payload && (g.$feature_flag_original_payload = null == p || null == (F = p.metadata) ? void 0 : F.original_payload), v.length && (g.$feature_flag_error = v.join(",")), this._instance.capture("$feature_flag_called", g)
                                }
                                if (s) return {
                                    key: e,
                                    enabled: !!r,
                                    variant: "string" == typeof r ? r : void 0,
                                    payload: x(n)
                                }
                            }
                        } else oI.warn('getFeatureFlagResult for key "' + e + oR)
                }
                getRemoteConfigPayload(e, t) {
                    var i = this.Se.token,
                        s = {
                            distinct_id: this._instance.get_distinct_id(),
                            token: i
                        };
                    this.vs() && (s.evaluation_contexts = this.cs());
                    var r = this.fs();
                    Q(r) || (s.flag_keys = r), this._instance._send_request({
                        method: "POST",
                        url: this._instance.requestRouter.endpointFor("flags", "/flags/?v=2"),
                        data: s,
                        compression: this.Se.disable_compression ? void 0 : rj,
                        timeout: this.Se.feature_flag_request_timeout_ms,
                        callback(i) {
                            var s, r = null == (s = i.json) ? void 0 : s.featureFlagPayloads;
                            t((null == r ? void 0 : r[e]) || void 0)
                        }
                    })
                }
                isFeatureEnabled(e, t) {
                    if (void 0 === t && (t = {}), !t.fresh || this.ts) {
                        if (this.Yn || this.getFlags() && this.getFlags().length > 0) {
                            var i = this.getFeatureFlag(e, t);
                            return Q(i) ? void 0 : !!i
                        }
                        oI.warn('isFeatureEnabled for key "' + e + oR)
                    }
                }
                addFeatureFlagsHandler(e) {
                    this.featureFlagEventHandlers.push(e)
                }
                removeFeatureFlagsHandler(e) {
                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(t => t !== e)
                }
                receivedFeatureFlags(e, t, i) {
                    if (this.zr) {
                        this.Yn = !0;
                        var s = this.getFlagVariants(),
                            r = this.getFlagPayloads(),
                            n = this.getFlagsWithDetails();
                        ! function(e, t, i, s, r, n) {
                            void 0 === i && (i = {}), void 0 === s && (s = {}), void 0 === r && (r = {});
                            var o, a = ((o = e.flags) ? (e.featureFlags = Object.fromEntries(Object.keys(o).map(e => {
                                    var t;
                                    return [e, null != (t = o[e].variant) ? t : o[e].enabled]
                                })), e.featureFlagPayloads = Object.fromEntries(Object.keys(o).filter(e => o[e].enabled).filter(e => {
                                    var t;
                                    return null == (t = o[e].metadata) ? void 0 : t.payload
                                }).map(e => {
                                    var t;
                                    return [e, null == (t = o[e].metadata) ? void 0 : t.payload]
                                }))) : e.featureFlags && oI.warn("Using an older version of the feature flags endpoint. Please upgrade your PostHog server to the latest version"), e),
                                l = a.flags,
                                u = a.featureFlags,
                                h = a.featureFlagPayloads;
                            if (u) {
                                var c = e.requestId,
                                    d = e.evaluatedAt;
                                if (J(u)) {
                                    oI.warn("v1 of the feature flags endpoint is deprecated. Please use the latest version.");
                                    var p = {};
                                    if (u)
                                        for (var v = 0; u.length > v; v++) p[u[v]] = !0;
                                    t && t.register({
                                        [id]: u,
                                        [ic]: p
                                    })
                                } else {
                                    var g = u,
                                        _ = h,
                                        f = l;
                                    if (null != n && n.partialResponse) g = b({}, i, g), _ = b({}, s, _), f = b({}, r, f);
                                    else if (e.errorsWhileComputingFlags)
                                        if (l) {
                                            var m = new Set(Object.keys(l).filter(e => {
                                                var t;
                                                return !(null != (t = l[e]) && t.failed)
                                            }));
                                            g = b({}, i, Object.fromEntries(Object.entries(g).filter(e => {
                                                var [t] = e;
                                                return m.has(t)
                                            }))), _ = b({}, s, Object.fromEntries(Object.entries(_ || {}).filter(e => {
                                                var [t] = e;
                                                return m.has(t)
                                            }))), f = b({}, r, Object.fromEntries(Object.entries(f || {}).filter(e => {
                                                var [t] = e;
                                                return m.has(t)
                                            })))
                                        } else g = b({}, i, g), _ = b({}, s, _), f = b({}, r, f);
                                    t && t.register(b({
                                        [id]: Object.keys(oA(g)),
                                        [ic]: g || {},
                                        [ig]: _ || {},
                                        [iv]: f || {}
                                    }, c ? {
                                        [i_]: c
                                    } : {}, d ? {
                                        [iI]: d
                                    } : {}))
                                }
                            }
                        }(e, this.zr, s, r, n, i), t || (this.ns = !1), this._s(t)
                    }
                }
                override(e, t) {
                    void 0 === t && (t = !1), oI.warn("override is deprecated. Please use overrideFeatureFlags instead."), this.overrideFeatureFlags({
                        flags: e,
                        suppressWarning: t
                    })
                }
                overrideFeatureFlags(e) {
                    if (!this._instance.__loaded || !this.zr) return oI.uninitializedWarning("posthog.featureFlags.overrideFeatureFlags");
                    if (!1 === e) return this.zr.unregister(im), this.zr.unregister(iy), this._s(), oC.info("All overrides cleared");
                    if (J(e)) {
                        var t, i = oT(e);
                        return this.zr.register({
                            [im]: i
                        }), this._s(), oC.info("Flag overrides set", {
                            flags: e
                        })
                    }
                    if (e && "object" == typeof e && ("flags" in e || "payloads" in e)) {
                        if (this.Jn = !!(null != (t = e.suppressWarning) && t), "flags" in e) {
                            if (!1 === e.flags) this.zr.unregister(im), oC.info("Flag overrides cleared");
                            else if (e.flags) {
                                if (J(e.flags)) {
                                    var s = oT(e.flags);
                                    this.zr.register({
                                        [im]: s
                                    })
                                } else this.zr.register({
                                    [im]: e.flags
                                });
                                oC.info("Flag overrides set", {
                                    flags: e.flags
                                })
                            }
                        }
                        return "payloads" in e && (!1 === e.payloads ? (this.zr.unregister(iy), oC.info("Payload overrides cleared")) : e.payloads && (this.zr.register({
                            [iy]: e.payloads
                        }), oC.info("Payload overrides set", {
                            payloads: e.payloads
                        }))), void this._s()
                    }
                    if (e && "object" == typeof e) return this.zr.register({
                        [im]: e
                    }), this._s(), oC.info("Flag overrides set", {
                        flags: e
                    });
                    oI.warn("Invalid overrideOptions provided to overrideFeatureFlags", {
                        overrideOptions: e
                    })
                }
                onFeatureFlags(e) {
                    if (this.addFeatureFlagsHandler(e), this.Yn) {
                        var {
                            flags: t,
                            flagVariants: i
                        } = this.ws();
                        try {
                            e(t, i)
                        } catch (e) {
                            oI.error("Error while running feature flags callback", e)
                        }
                    }
                    return () => this.removeFeatureFlagsHandler(e)
                }
                updateEarlyAccessFeatureEnrollment(e, t, i) {
                    var s, r = (this.us(ip) || []).find(t => t.flagKey === e),
                        n = {
                            ["$feature_enrollment/" + e]: t
                        },
                        o = {
                            $feature_flag: e,
                            $feature_enrollment: t,
                            $set: n
                        };
                    r && (o.$early_access_feature_name = r.name), i && (o.$feature_enrollment_stage = i), this._instance.capture("$feature_enrollment_update", o), this.setPersonPropertiesForFlags(n, !1);
                    var a = b({}, this.getFlagVariants(), {
                        [e]: t
                    });
                    null == (s = this.zr) || s.register({
                        [id]: Object.keys(oA(a)),
                        [ic]: a
                    }), this._s()
                }
                getEarlyAccessFeatures(e, t, i) {
                    void 0 === t && (t = !1);
                    var s = this.us(ip),
                        r = i ? "&" + i.map(e => "stage=" + e).join("&") : "";
                    if (s && !t) return e(s);
                    this._instance._send_request({
                        url: this._instance.requestRouter.endpointFor("api", "/api/early_access_features/?token=" + this.Se.token + r),
                        method: "GET",
                        callback: t => {
                            var i, s;
                            if (t.json) {
                                var r = t.json.earlyAccessFeatures;
                                return null == (i = this.zr) || i.unregister(ip), null == (s = this.zr) || s.register({
                                    [ip]: r
                                }), e(r)
                            }
                        }
                    })
                }
                ws() {
                    var e = this.getFlags(),
                        t = this.getFlagVariants();
                    return {
                        flags: e.filter(e => t[e]),
                        flagVariants: Object.keys(t).filter(e => t[e]).reduce((e, i) => (e[i] = t[i], e), {})
                    }
                }
                _s(e) {
                    var {
                        flags: t,
                        flagVariants: i
                    } = this.ws();
                    this.featureFlagEventHandlers.forEach(s => {
                        try {
                            s(t, i, {
                                errorsLoading: e
                            })
                        } catch (e) {
                            oI.error("Error while running feature flags callback", e)
                        }
                    })
                }
                setPersonPropertiesForFlags(e, t) {
                    void 0 === t && (t = !0);
                    var i = this.us(ib) || {},
                        s = (null == e ? void 0 : e.$set) || (null != e && e.$set_once ? {} : e),
                        r = null == e ? void 0 : e.$set_once,
                        n = {};
                    if (r)
                        for (var o in r)({}).hasOwnProperty.call(r, o) && (o in i || (n[o] = r[o]));
                    this._instance.register({
                        [ib]: b({}, i, n, s)
                    }), t && this._instance.reloadFeatureFlags()
                }
                unsetPersonPropertiesForFlags(e, t) {
                    void 0 === t && (t = !0);
                    var i = b({}, this.us(ib) || {});
                    e.forEach(e => {
                        delete i[e]
                    }), this._instance.register({
                        [ib]: i
                    }), t && this._instance.reloadFeatureFlags()
                }
                resetPersonPropertiesForFlags(e) {
                    void 0 === e && (e = !0), this._instance.unregister(ib), e && this._instance.reloadFeatureFlags()
                }
                setGroupPropertiesForFlags(e, t) {
                    void 0 === t && (t = !0);
                    var i = this.us(iw) || {};
                    0 !== Object.keys(i).length && Object.keys(i).forEach(t => {
                        i[t] = b({}, i[t], e[t]), delete e[t]
                    }), this._instance.register({
                        [iw]: b({}, i, e)
                    }), t && this._instance.reloadFeatureFlags()
                }
                resetGroupPropertiesForFlags(e) {
                    if (e) {
                        var t = this.us(iw) || {};
                        this._instance.register({
                            [iw]: b({}, t, {
                                [e]: {}
                            })
                        })
                    } else this._instance.unregister(iw)
                }
                reset() {
                    this.Yn = !1, this.Kn = !1, this.Xn = !1, this.es = !1, this.ts = !1, this.$anon_distinct_id = void 0, this.ys(), this.Jn = !1, this.ss = 0
                }
            }
        },
        oH = b({
            productTours: class {
                get zr() {
                    return this._instance.persistence
                }
                constructor(e) {
                    this.Fo = null, this.Ao = null, this._instance = e
                }
                initialize() {
                    this.loadIfEnabled()
                }
                onRemoteConfig(e) {
                    if ("productTours" in e) {
                        var t, i;
                        if (this.zr && this.zr.register({
                                [ie]: !!e.productTours
                            }), !o_(this._instance)) return !this.Fo && ei(null == (t = this.zr) ? void 0 : t.props[ik]) || og.info("product tours disabled; stopping and clearing cached tours"), null == (i = this.Fo) || i.stop(), this.Fo = null, void this.clearCache();
                        this.loadIfEnabled()
                    }
                }
                loadIfEnabled() {
                    !this.Fo && o_(this._instance) && this.Mt(() => this.$o())
                }
                Mt(e) {
                    var t, i;
                    null != (t = v.__PosthogExtensions__) && t.generateProductTours ? e() : null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, "product-tours", t => {
                        t ? og.error("Could not load product tours script", t) : e()
                    })
                }
                $o() {
                    var e;
                    !this.Fo && null != (e = v.__PosthogExtensions__) && e.generateProductTours && (this.Fo = v.__PosthogExtensions__.generateProductTours(this._instance, !0))
                }
                getProductTours(e, t) {
                    if (void 0 === t && (t = !1), !J(this.Ao) || t) {
                        var i = this.zr;
                        if (i) {
                            var s = i.props[ik];
                            if (J(s) && !t) return this.Ao = s, void e(s, {
                                isLoaded: !0
                            })
                        }
                        this._instance._send_request({
                            url: this._instance.requestRouter.endpointFor("api", "/api/product_tours/?token=" + this._instance.config.token),
                            method: "GET",
                            callback: t => {
                                if (o_(this._instance)) {
                                    var s = t.statusCode;
                                    if (200 !== s || !t.json) {
                                        var r = "Product Tours API could not be loaded, status: " + s;
                                        return og.error(r), void e([], {
                                            isLoaded: !1,
                                            error: r
                                        })
                                    }
                                    var n = J(t.json.product_tours) ? t.json.product_tours : [];
                                    this.Ao = n, i && i.register({
                                        [ik]: n
                                    }), e(n, {
                                        isLoaded: !0
                                    })
                                } else e([], {
                                    isLoaded: !0
                                })
                            }
                        })
                    } else e(this.Ao, {
                        isLoaded: !0
                    })
                }
                getActiveProductTours(e) {
                    ei(this.Fo) ? e([], {
                        isLoaded: !1,
                        error: "Product tours not loaded"
                    }) : this.Fo.getActiveProductTours(e)
                }
                showProductTour(e) {
                    var t;
                    null == (t = this.Fo) || t.showTourById(e)
                }
                previewTour(e) {
                    this.Fo ? this.Fo.previewTour(e) : this.Mt(() => {
                        var t;
                        this.$o(), null == (t = this.Fo) || t.previewTour(e)
                    })
                }
                dismissProductTour() {
                    var e;
                    null == (e = this.Fo) || e.dismissTour("user_clicked_skip")
                }
                nextStep() {
                    var e;
                    null == (e = this.Fo) || e.nextStep()
                }
                previousStep() {
                    var e;
                    null == (e = this.Fo) || e.previousStep()
                }
                clearCache() {
                    var e;
                    this.Ao = null, null == (e = this.zr) || e.unregister(ik)
                }
                resetTour(e) {
                    var t;
                    null == (t = this.Fo) || t.resetTour(e)
                }
                resetAllTours() {
                    var e;
                    null == (e = this.Fo) || e.resetAllTours()
                }
                cancelPendingTour(e) {
                    var t;
                    null == (t = this.Fo) || t.cancelPendingTour(e)
                }
            }
        }, oq),
        oB = b({
            surveys: class {
                get Se() {
                    return this._instance.config
                }
                constructor(e) {
                    this.Xo = void 0, this._surveyManager = null, this.ea = !1, this.ta = [], this.ra = null, this.ia = null, this._instance = e, this._surveyEventReceiver = null
                }
                initialize() {
                    this.loadIfEnabled()
                }
                onRemoteConfig(e) {
                    if (!this.Se.disable_surveys) {
                        var t = e.surveys;
                        if (ei(t)) return nq.warn("Flags not loaded yet. Not loading surveys.");
                        var i = J(t);
                        this.Xo = i ? t.length > 0 : t, nq.info("flags response received, isSurveysEnabled: " + this.Xo), this.loadIfEnabled()
                    }
                }
                reset() {
                    try {
                        var e;
                        null == (e = this._surveyEventReceiver) || e.reset(), localStorage.removeItem("lastSeenSurveyDate");
                        for (var t = [], i = 0; i < localStorage.length; i++) {
                            var s = localStorage.key(i);
                            (null != s && s.startsWith(nH) || null != s && s.startsWith("inProgressSurvey_")) && t.push(s)
                        }
                        t.forEach(e => localStorage.removeItem(e))
                    } catch (e) {}
                }
                loadIfEnabled() {
                    if (!this._surveyManager)
                        if (this.ea) nq.info("Already initializing surveys, skipping...");
                        else if (this.Se.disable_surveys) nq.info(ok);
                    else if (this.Se.cookieless_mode && this._instance.consent.isOptedOut()) nq.info("Not loading surveys in cookieless mode without consent.");
                    else {
                        var e = null == v ? void 0 : v.__PosthogExtensions__;
                        if (e) {
                            if (!Q(this.Xo) || this.Se.advanced_enable_surveys) {
                                var t = this.Xo || this.Se.advanced_enable_surveys;
                                this.ea = !0;
                                try {
                                    var i = e.generateSurveys;
                                    if (i) return void this.na(i, t);
                                    var s = e.loadExternalDependency;
                                    if (!s) return void this.sa(iH);
                                    s(this._instance, "surveys", i => {
                                        i || !e.generateSurveys ? this.sa("Could not load surveys script", i) : this.na(e.generateSurveys, t)
                                    })
                                } catch (e) {
                                    throw this.sa("Error initializing surveys", e), e
                                } finally {
                                    this.ea = !1
                                }
                            }
                        } else nq.error("PostHog Extensions not found.")
                    }
                }
                na(e, t) {
                    this._surveyManager = e(this._instance, t), this._surveyEventReceiver = new oS(this._instance), nq.info("Surveys loaded successfully"), this.oa({
                        isLoaded: !0
                    })
                }
                sa(e, t) {
                    nq.error(e, t), this.oa({
                        isLoaded: !1,
                        error: e
                    })
                }
                onSurveysLoaded(e) {
                    return this.ta.push(e), this._surveyManager && this.oa({
                        isLoaded: !0
                    }), () => {
                        this.ta = this.ta.filter(t => t !== e)
                    }
                }
                getSurveys(e, t) {
                    if (void 0 === t && (t = !1), this.Se.disable_surveys) return nq.info(ok), e([]);
                    var i, s = this._instance.get_property(ix);
                    s && !t ? (e(s, {
                        isLoaded: !0
                    }), this.aa() && this.getSurveys(() => {}, !0)) : "u" > typeof Promise && this.ra ? this.ra.then(t => {
                        var {
                            surveys: i,
                            context: s
                        } = t;
                        return e(i, s)
                    }) : ("u" > typeof Promise && (this.ra = new Promise(e => {
                        i = e
                    })), this._instance._send_request({
                        url: this._instance.requestRouter.endpointFor("api", "/api/surveys/?token=" + this.Se.token),
                        method: "GET",
                        timeout: this.Se.surveys_request_timeout_ms,
                        callback: t => {
                            this.ra = null;
                            var s = t.statusCode;
                            if (200 !== s || !t.json) {
                                var r = "Surveys API could not be loaded, status: " + s;
                                nq.error(r), this.ia = Date.now();
                                var n = {
                                    isLoaded: !1,
                                    error: r
                                };
                                return e([], n), void(null == i || i({
                                    surveys: [],
                                    context: n
                                }))
                            }
                            this.ia = null;
                            var o, a, l = t.json.surveys || [],
                                u = l.filter(e => {
                                    var t, i;
                                    return !(!e.start_date || e.end_date) && (!(null == (t = e.conditions) || null == (t = t.events) || null == (t = t.values) || !t.length) || !(null == (i = e.conditions) || null == (i = i.actions) || null == (i = i.values) || !i.length))
                                });
                            u.length > 0 && (null == (a = this._surveyEventReceiver) || a.register(u)), null == (o = this._instance.persistence) || o.register({
                                [ix]: l,
                                [iS]: Date.now()
                            });
                            var h = {
                                isLoaded: !0
                            };
                            e(l, h), null == i || i({
                                surveys: l,
                                context: h
                            })
                        }
                    }))
                }
                aa() {
                    return this.la() && !this.ra && !this.ua()
                }
                la() {
                    var e = this._instance.get_property(iS);
                    return es(e) && Date.now() - e > 3e5
                }
                ua() {
                    return es(this.ia) && 3e5 > Date.now() - this.ia
                }
                markSurveyAsSeen(e, t) {
                    var i;
                    nB({
                        id: e,
                        current_iteration: null != (i = null == t ? void 0 : t.iteration) ? i : null
                    });
                    try {
                        localStorage.setItem("lastSeenSurveyDate", (new Date).toISOString())
                    } catch (e) {}
                }
                oa(e) {
                    for (var t of this.ta) try {
                        if (!e.isLoaded) return t([], e);
                        this.getSurveys(t)
                    } catch (e) {
                        nq.error("Error in survey callback", e)
                    }
                }
                getActiveMatchingSurveys(e, t) {
                    if (void 0 === t && (t = !1), !ei(this._surveyManager)) return this._surveyManager.getActiveMatchingSurveys(e, t);
                    nq.warn("init was not called")
                }
                ha(e) {
                    var t = null;
                    return this.getSurveys(i => {
                        var s;
                        t = null != (s = i.find(t => t.id === e)) ? s : null
                    }), t
                }
                da(e) {
                    if (ei(this._surveyManager)) return {
                        eligible: !1,
                        reason: oE
                    };
                    var t = "string" == typeof e ? this.ha(e) : e;
                    return t ? this._surveyManager.checkSurveyEligibility(t) : {
                        eligible: !1,
                        reason: "Survey not found"
                    }
                }
                canRenderSurvey(e) {
                    if (ei(this._surveyManager)) return nq.warn("init was not called"), {
                        visible: !1,
                        disabledReason: oE
                    };
                    var t = this.da(e);
                    return {
                        visible: t.eligible,
                        disabledReason: t.reason
                    }
                }
                canRenderSurveyAsync(e, t) {
                    return ei(this._surveyManager) ? (nq.warn("init was not called"), Promise.resolve({
                        visible: !1,
                        disabledReason: oE
                    })) : new Promise(i => {
                        this.getSurveys(t => {
                            var s, r = null != (s = t.find(t => t.id === e)) ? s : null;
                            if (r) {
                                var n = this.da(r);
                                i({
                                    visible: n.eligible,
                                    disabledReason: n.reason
                                })
                            } else i({
                                visible: !1,
                                disabledReason: "Survey not found"
                            })
                        }, t)
                    })
                }
                renderSurvey(e, t, i) {
                    var s;
                    if (ei(this._surveyManager)) nq.warn("init was not called");
                    else {
                        var r = "string" == typeof e ? this.ha(e) : e;
                        if (null != r && r.id)
                            if (nU.includes(r.type)) {
                                var n = null == a ? void 0 : a.querySelector(t);
                                if (n) return null != (s = r.appearance) && s.surveyPopupDelaySeconds ? (nq.info("Rendering survey " + r.id + " with delay of " + r.appearance.surveyPopupDelaySeconds + " seconds"), void setTimeout(() => {
                                    var e, t;
                                    nq.info("Rendering survey " + r.id + " with delay of " + (null == (e = r.appearance) ? void 0 : e.surveyPopupDelaySeconds) + " seconds"), null == (t = this._surveyManager) || t.renderSurvey(r, n, i), nq.info("Survey " + r.id + " rendered")
                                }, 1e3 * r.appearance.surveyPopupDelaySeconds)) : void this._surveyManager.renderSurvey(r, n, i);
                                nq.warn("Survey element not found")
                            } else nq.warn("Surveys of type " + r.type + " cannot be rendered in the app");
                        else nq.warn("Survey not found")
                    }
                }
                displaySurvey(e, t) {
                    var i;
                    if (ei(this._surveyManager)) nq.warn("init was not called");
                    else {
                        var s = this.ha(e);
                        if (s) {
                            var r = s;
                            if (null != (i = s.appearance) && i.surveyPopupDelaySeconds && t.ignoreDelay && (r = b({}, s, {
                                    appearance: b({}, s.appearance, {
                                        surveyPopupDelaySeconds: 0
                                    })
                                })), t.displayType !== rM && t.initialResponses && nq.warn("initialResponses is only supported for popover surveys. prefill will not be applied."), !1 === t.ignoreConditions) {
                                var n = this.canRenderSurvey(s);
                                if (!n.visible) return void nq.warn("Survey is not eligible to be displayed: ", n.disabledReason)
                            }
                            "inline" !== t.displayType ? this._surveyManager.handlePopoverSurvey(r, t) : this.renderSurvey(r, t.selector, t.properties)
                        } else nq.warn("Survey not found")
                    }
                }
                cancelPendingSurvey(e) {
                    ei(this._surveyManager) ? nq.warn("init was not called") : this._surveyManager.cancelSurvey(e)
                }
                handlePageUnload() {
                    var e;
                    null == (e = this._surveyManager) || e.handlePageUnload()
                }
            }
        }, oq),
        oU = b({
            experiments: oD
        }, oq),
        oV = b({}, oq, {
            sessionRecording: class {
                get Se() {
                    return this._instance.config
                }
                get zr() {
                    return this._instance.persistence
                }
                get started() {
                    var e;
                    return !(null == (e = this.xs) || !e.isStarted)
                }
                get status() {
                    var e, t;
                    return this.ks === ou || this.ks === oh ? this.ks : null != (e = null == (t = this.xs) ? void 0 : t.status) ? e : this.ks
                }
                constructor(e) {
                    if (this._forceAllowLocalhostNetworkCapture = !1, this.ks = oa, this.Ss = void 0, this._instance = e, !this._instance.sessionManager) throw od.error("started without valid sessionManager"), Error(oc + " started without valid sessionManager. This is a bug.");
                    if (this.Se.cookieless_mode === iU) throw Error(oc + ' cannot be used with cookieless_mode="always"')
                }
                initialize() {
                    this.startIfEnabledOrStop()
                }
                get Cs() {
                    var e, t = !(null == (e = this._instance.get_property(ii)) || !e.enabled),
                        i = !this.Se.disable_session_recording,
                        s = this.Se.disable_session_recording || this._instance.consent.isOptedOut();
                    return r && t && i && !s
                }
                startIfEnabledOrStop(e) {
                    var t;
                    if (!this.Cs || null == (t = this.xs) || !t.isStarted) {
                        var i = !Q(Object.assign) && !Q(Array.from);
                        this.Cs && i ? (this.Is(e), od.info("starting")) : (this.ks = oa, this.stopRecording())
                    }
                }
                Is(e) {
                    var t, i, s;
                    this.Cs && (this.ks !== ou && this.ks !== oh && (this.ks = ol), null != v && null != (t = v.__PosthogExtensions__) && null != (t = t.rrweb) && t.record && null != (i = v.__PosthogExtensions__) && i.initSessionRecording ? this.Ts(e) : null == (s = v.__PosthogExtensions__) || null == s.loadExternalDependency || s.loadExternalDependency(this._instance, this.Es, t => {
                        if (t) return od.error("could not load recorder", t);
                        this.Ts(e)
                    }))
                }
                stopRecording() {
                    var e, t;
                    null == (e = this.Ss) || e.call(this), this.Ss = void 0, null == (t = this.xs) || t.stop()
                }
                Ms() {
                    var e, t;
                    null == (e = this.Ss) || e.call(this), this.Ss = void 0, null == (t = this.xs) || t.discard()
                }
                Ps() {
                    var e, t;
                    null == (e = this.zr) || e.unregister(ih), null == (t = this.zr) || t.unregister(is)
                }
                Rs(e, t) {
                    if (ei(e)) return null;
                    var i = es(e) ? e : parseFloat(e);
                    return "number" != typeof i || !Number.isFinite(i) || 0 > i || i > 1 ? (od.warn(t + " must be between 0 and 1. Ignoring invalid value:", e), null) : i
                }
                Os(e) {
                    if (this.zr) {
                        var t, i, s = this.zr,
                            r = () => {
                                var t, i = !1 === e.sessionRecording ? void 0 : e.sessionRecording,
                                    r = this.Rs(null == (t = this.Se.session_recording) ? void 0 : t.sampleRate, "session_recording.sampleRate"),
                                    n = this.Rs(null == i ? void 0 : i.sampleRate, "remote config sampleRate"),
                                    o = null != r ? r : n;
                                ei(o) && this.Ps();
                                var a = null == i ? void 0 : i.minimumDurationMilliseconds;
                                s.register({
                                    [ii]: b({
                                        cache_timestamp: Date.now(),
                                        enabled: !!i
                                    }, i, {
                                        networkPayloadCapture: b({
                                            capturePerformance: e.capturePerformance
                                        }, null == i ? void 0 : i.networkPayloadCapture),
                                        canvasRecording: {
                                            enabled: null == i ? void 0 : i.recordCanvas,
                                            fps: null == i ? void 0 : i.canvasFps,
                                            quality: null == i ? void 0 : i.canvasQuality
                                        },
                                        sampleRate: o,
                                        minimumDurationMilliseconds: Q(a) ? null : a,
                                        endpoint: null == i ? void 0 : i.endpoint,
                                        triggerMatchType: null == i ? void 0 : i.triggerMatchType,
                                        masking: null == i ? void 0 : i.masking,
                                        urlTriggers: null == i ? void 0 : i.urlTriggers,
                                        version: null == i ? void 0 : i.version,
                                        triggerGroups: null == i ? void 0 : i.triggerGroups
                                    })
                                })
                            };
                        r(), null == (t = this.Ss) || t.call(this), this.Ss = null == (i = this._instance.sessionManager) ? void 0 : i.onSessionId(r)
                    }
                }
                onRemoteConfig(e) {
                    return "sessionRecording" in e ? !1 === e.sessionRecording ? (this.Os(e), void this.Ms()) : (this.Os(e), void this.startIfEnabledOrStop()) : (this.ks === ou && (this.ks = oh, od.warn("config refresh failed, recording will not start until page reload")), void this.startIfEnabledOrStop())
                }
                log(e, t) {
                    var i;
                    void 0 === t && (t = "log"), null != (i = this.xs) && i.log ? this.xs.log(e, t) : od.warn("log called before recorder was ready")
                }
                get Es() {
                    var e, t, i = null == (e = this._instance) || null == (e = e.persistence) ? void 0 : e.get_property(ii);
                    return (null == i || null == (t = i.scriptConfig) ? void 0 : t.script) || "lazy-recorder"
                }
                Ls() {
                    var e, t, i = this._instance.get_property(ii);
                    if (!i) return !1;
                    try {
                        t = "object" == typeof i ? i : JSON.parse(i)
                    } catch (e) {
                        return od.warn("persisted remote config for session recording is invalid and will be ignored", e), !1
                    }
                    var s = null != (e = t.cache_timestamp) ? e : Date.now();
                    return 36e5 >= Date.now() - s
                }
                Ts(e) {
                    var t, i;
                    if (null == (t = v.__PosthogExtensions__) || !t.initSessionRecording) return od.warn("Called on script loaded before session recording is available. This can be caused by adblockers."), void this._instance.register_for_session({
                        [iq]: !0
                    });
                    if (this.xs || (this.xs = null == (i = v.__PosthogExtensions__) ? void 0 : i.initSessionRecording(this._instance), this.xs._forceAllowLocalhostNetworkCapture = this._forceAllowLocalhostNetworkCapture), !this.Ls()) {
                        if (this.ks === oh || this.ks === ou) return;
                        return this.ks = ou, od.info("persisted remote config is stale, requesting fresh config before starting"), void new rN(this._instance).load()
                    }
                    this.ks = ol, this.xs.start(e)
                }
                onRRwebEmit(e) {
                    var t;
                    null == (t = this.xs) || null == t.onRRwebEmit || t.onRRwebEmit(e)
                }
                overrideLinkedFlag() {
                    var e, t;
                    this.xs || null == (t = this.zr) || t.register({
                        [io]: !0
                    }), null == (e = this.xs) || e.overrideLinkedFlag()
                }
                overrideSampling() {
                    var e, t;
                    this.xs || null == (t = this.zr) || t.register({
                        [ir]: !0
                    }), null == (e = this.xs) || e.overrideSampling()
                }
                overrideTrigger(e) {
                    var t, i;
                    this.xs || null == (i = this.zr) || i.register({
                        ["url" === e ? ia : il]: !0
                    }), null == (t = this.xs) || t.overrideTrigger(e)
                }
                get sdkDebugProperties() {
                    var e;
                    return (null == (e = this.xs) ? void 0 : e.sdkDebugProperties) || {
                        $recording_status: this.status
                    }
                }
                tryAddCustomEvent(e, t) {
                    var i;
                    return !(null == (i = this.xs) || !i.tryAddCustomEvent(e, t))
                }
            }
        }, {
            autocapture: class {
                constructor(e) {
                    this.Fs = !1, this.As = null, this.$s = !1, this.instance = e, this.rageclicks = new n9(e.config.rageclick), this.Ds = null
                }
                initialize() {
                    this.startIfEnabled()
                }
                get Se() {
                    var e, t, i = K(this.instance.config.autocapture) ? this.instance.config.autocapture : {};
                    return i.url_allowlist = null == (e = i.url_allowlist) ? void 0 : e.map(e => new RegExp(e)), i.url_ignorelist = null == (t = i.url_ignorelist) ? void 0 : t.map(e => new RegExp(e)), i
                }
                Ns() {
                    if (this.isBrowserSupported()) {
                        if (r && a) {
                            var e = e => {
                                e = e || (null == r ? void 0 : r.event);
                                try {
                                    this.qs(e)
                                } catch (e) {
                                    ot.error("Failed to capture event", e)
                                }
                            };
                            if (i7(a, "submit", e, {
                                    capture: !0
                                }), i7(a, "change", e, {
                                    capture: !0
                                }), i7(a, "click", e, {
                                    capture: !0
                                }), this.Se.capture_copied_text) {
                                var t = e => {
                                    e = e || (null == r ? void 0 : r.event);
                                    try {
                                        this.qs(e, oe)
                                    } catch (e) {
                                        ot.error("Failed to capture copy/cut event", e)
                                    }
                                };
                                i7(a, "copy", t, {
                                    capture: !0
                                }), i7(a, "cut", t, {
                                    capture: !0
                                })
                            }
                        }
                    } else ot.info("Disabling Automatic Event Collection because this browser is not supported")
                }
                startIfEnabled() {
                    this.isEnabled && !this.Fs && (this.Ns(), this.Fs = !0)
                }
                onRemoteConfig(e) {
                    e.elementsChainAsString && (this.$s = e.elementsChainAsString), this.instance.persistence && this.instance.persistence.register({
                        [t3]: !!e.autocapture_opt_out
                    }), this.As = !!e.autocapture_opt_out, this.startIfEnabled()
                }
                setElementSelectors(e) {
                    this.Ds = e
                }
                getElementSelectors(e) {
                    var t, i = [];
                    return null == (t = this.Ds) || t.forEach(t => {
                        var s = null == a ? void 0 : a.querySelectorAll(t);
                        null == s || s.forEach(s => {
                            e === s && i.push(t)
                        })
                    }), i
                }
                get isEnabled() {
                    var e, t, i = null == (e = this.instance.persistence) ? void 0 : e.props[t3];
                    if (et(this.As) && !en(i) && !this.instance.mr()) return !1;
                    var s = null != (t = this.As) ? t : !!i;
                    return !!this.instance.config.autocapture && !s
                }
                qs(e, t) {
                    if (void 0 === t && (t = "$autocapture"), this.isEnabled) {
                        var i, s = sT(e);
                        sk(s) && (s = s.parentNode || null), "$autocapture" === t && "click" === e.type && e instanceof MouseEvent && this.instance.config.rageclick && null != (i = this.rageclicks) && i.isRageClick(e.clientX, e.clientY, e.timeStamp || (new Date).getTime()) && sH(s, this.instance.config.rageclick) && this.qs(e, "$rageclick");
                        var n = t === oe;
                        if (s && function(e, t, i, s, n, o) {
                                if (void 0 === i && (i = void 0), !r || sB(e) || null != (a = i) && a.url_allowlist && !s$(i.url_allowlist, o) || null != (l = i) && l.url_ignorelist && s$(i.url_ignorelist, o)) return !1;
                                if (null != (u = i) && u.dom_event_allowlist) {
                                    var a, l, u, h, c, d, p = i.dom_event_allowlist;
                                    if (p && !p.some(e => t.type === e)) return !1
                                }
                                var {
                                    parentIsUsefulElement: v,
                                    targetElementList: g
                                } = sU(e, s);
                                if (! function(e, t) {
                                        var i = null == t ? void 0 : t.element_allowlist;
                                        if (Q(i)) return !0;
                                        var s, r = function(e) {
                                            if (i.some(t => e.tagName.toLowerCase() === t)) return {
                                                v: !0
                                            }
                                        };
                                        for (var n of e)
                                            if (s = r(n)) return s.v;
                                        return !1
                                    }(g, i) || !sM(g, null == (h = i) ? void 0 : h.css_selector_allowlist) || sM(g, null != (c = null == (d = i) ? void 0 : d.css_selector_ignorelist) ? c : sL)) return !1;
                                try {
                                    var _ = r.getComputedStyle(e);
                                    if (_ && "pointer" === _.getPropertyValue("cursor") && "click" === t.type) return !0
                                } catch (e) {}
                                var f = e.tagName.toLowerCase();
                                switch (f) {
                                    case "html":
                                        return !1;
                                    case "form":
                                        return (n || ["submit"]).indexOf(t.type) >= 0;
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        return (n || ["change", "click"]).indexOf(t.type) >= 0;
                                    default:
                                        return v ? (n || ["click"]).indexOf(t.type) >= 0 : (n || ["click"]).indexOf(t.type) >= 0 && (sA.indexOf(f) > -1 || "true" === e.getAttribute("contenteditable"))
                                }
                            }(s, e, this.Se, n, n ? ["copy", "cut"] : void 0, this.instance)) {
                            var {
                                props: o,
                                explicitNoCapture: a
                            } = function(e, t) {
                                var i, s, {
                                    e: n,
                                    maskAllElementAttributes: o,
                                    maskAllText: a,
                                    elementAttributeIgnoreList: l,
                                    elementsChainAsString: u,
                                    disableCaptureUrlHashes: h
                                } = t;
                                if (!sS(e)) return {
                                    props: {}
                                };
                                for (var c = [e], d = e; d.parentNode && !sE(d, "body");)
                                    if (sP(d.parentNode)) c.push(d.parentNode.host), d = d.parentNode.host;
                                    else {
                                        if (!sS(d.parentNode)) break;
                                        c.push(d.parentNode), d = d.parentNode
                                    }
                                var p, v = [],
                                    g = {},
                                    _ = !1,
                                    f = !1;
                                if (i1(c, e => {
                                        var t = sV(e);
                                        if (sE(e, "a")) {
                                            var i = e.getAttribute("href");
                                            _ = !!(t && i && sZ(i)) && (h ? th(i) : i)
                                        }
                                        H(sI(e), "ph-no-capture") && (f = !0), v.push(function(e, t, i, s, r) {
                                            void 0 === r && (r = !1);
                                            var n = e.tagName.toLowerCase(),
                                                o = {
                                                    tag_name: n
                                                };
                                            sA.indexOf(n) > -1 && !i && (o.$el_text = "a" === n.toLowerCase() || "button" === n.toLowerCase() ? oi(1024, s0(e)) : oi(1024, sR(e)));
                                            var a = sI(e);
                                            a.length > 0 && (o.classes = a.filter(function(e) {
                                                return "" !== e
                                            })), i1(e.attributes, function(i) {
                                                var n;
                                                if ((!sW(e) || -1 !== ["name", "id", "class", "aria-label"].indexOf(i.name)) && (null == s || !s.includes(i.name)) && !t && sZ(i.value) && (!Z(n = i.name) || "_ngcontent" !== n.substring(0, 10) && "_nghost" !== n.substring(0, 7))) {
                                                    var a = i.value;
                                                    "class" === i.name && (a = sF(a).join(" ")), o["attr__" + i.name] = oi(1024, "href" === i.name && r ? th(a) : a)
                                                }
                                            });
                                            for (var l = 1, u = 1, h = e; h = function(e) {
                                                    if (e.previousElementSibling) return e.previousElementSibling;
                                                    var t = e;
                                                    do t = t.previousSibling; while (t && !sS(t)) return t
                                                }(h);) l++, h.tagName === e.tagName && u++;
                                            return o.nth_child = l, o.nth_of_type = u, o
                                        }(e, o, a, l, h)), i2(g, function(e) {
                                            if (!sV(e)) return {};
                                            var t = {};
                                            return i1(e.attributes, function(e) {
                                                if (e.name && 0 === e.name.indexOf("data-ph-capture-attribute")) {
                                                    var i = e.name.replace("data-ph-capture-attribute-", ""),
                                                        s = e.value;
                                                    i && s && sZ(s) && (t[i] = s)
                                                }
                                            }), t
                                        }(e))
                                    }), f) return {
                                    props: {},
                                    explicitNoCapture: f
                                };
                                if (a || (v[0].$el_text = sE(e, "a") || sE(e, "button") ? s0(e) : sR(e)), _) {
                                    v[0].attr__href = _;
                                    var m, y, w = null == (m = rn(_)) ? void 0 : m.host,
                                        x = null == r || null == (y = r.location) ? void 0 : y.host;
                                    w && x && w !== x && (p = _)
                                }
                                return {
                                    props: i2({
                                        $event_type: n.type,
                                        $ce_version: 1
                                    }, u ? {} : {
                                        $elements: v
                                    }, {
                                        $elements_chain: v.map(e => {
                                            var t, i, s, r = {
                                                text: null == (i = e.$el_text) ? void 0 : i.slice(0, 400),
                                                tag_name: e.tag_name,
                                                href: null == (s = e.attr__href) ? void 0 : s.slice(0, 2048),
                                                attr_class: (t = e.attr__class) ? J(t) ? t : sF(t) : void 0,
                                                attr_id: e.attr__id,
                                                nth_child: e.nth_child,
                                                nth_of_type: e.nth_of_type,
                                                attributes: {}
                                            };
                                            return i3(e).filter(e => {
                                                var [t] = e;
                                                return 0 === t.indexOf("attr__")
                                            }).forEach(e => {
                                                var [t, i] = e;
                                                return r.attributes[t] = i
                                            }), r
                                        }).map(e => {
                                            var t, i, s = "";
                                            if (e.tag_name && (s += e.tag_name), e.attr_class)
                                                for (var r of (e.attr_class.sort(), e.attr_class)) s += "." + r.replace(/"/g, "");
                                            var n = b({}, e.text ? {
                                                    text: e.text
                                                } : {}, {
                                                    "nth-child": null != (t = e.nth_child) ? t : 0,
                                                    "nth-of-type": null != (i = e.nth_of_type) ? i : 0
                                                }, e.href ? {
                                                    href: e.href
                                                } : {}, e.attr_id ? {
                                                    attr_id: e.attr_id
                                                } : {}, e.attributes),
                                                o = {};
                                            return i3(n).sort((e, t) => {
                                                var [i] = e, [s] = t;
                                                return i.localeCompare(s)
                                            }).forEach(e => {
                                                var [t, i] = e;
                                                return o[s1(t.toString())] = s1(i.toString())
                                            }), (s += ":") + i3(o).map(e => {
                                                var [t, i] = e;
                                                return t + '="' + i + '"'
                                            }).join("")
                                        }).join(";")
                                    }, null != (i = v[0]) && i.$el_text ? {
                                        $el_text: null == (s = v[0]) ? void 0 : s.$el_text
                                    } : {}, p && "click" === n.type ? {
                                        $external_click_url: p
                                    } : {}, g)
                                }
                            }(s, {
                                e: e,
                                maskAllElementAttributes: this.instance.config.mask_all_element_attributes,
                                maskAllText: this.instance.config.mask_all_text,
                                elementAttributeIgnoreList: this.Se.element_attribute_ignorelist,
                                elementsChainAsString: this.$s,
                                disableCaptureUrlHashes: this.instance.config.disable_capture_url_hashes
                            });
                            if (a) return !1;
                            var l = this.getElementSelectors(s);
                            if (l && l.length > 0 && (o.$element_selectors = l), t === oe) {
                                var u, h = sC(null == r || null == (u = r.getSelection()) ? void 0 : u.toString()),
                                    c = e.type || "clipboard";
                                if (!h) return !1;
                                o.$selected_content = h, o.$copy_type = c
                            }
                            return this.instance.capture(t, o), !0
                        }
                    }
                }
                isBrowserSupported() {
                    return Y(null == a ? void 0 : a.querySelectorAll)
                }
            },
            historyAutocapture: class {
                constructor(e) {
                    var t;
                    this._instance = e, this.Bs = (null == r || null == (t = r.location) ? void 0 : t.pathname) || ""
                }
                initialize() {
                    this.startIfEnabled()
                }
                get isEnabled() {
                    return "history_change" === this._instance.config.capture_pageview
                }
                startIfEnabled() {
                    this.isEnabled && (tJ.info("History API monitoring enabled, starting..."), this.monitorHistoryChanges())
                }
                stop() {
                    this.js && this.js(), this.js = void 0, tJ.info("History API monitoring stopped")
                }
                monitorHistoryChanges() {
                    r && r.history && (this.Hs("pushState"), this.Hs("replaceState"), this.Us())
                }
                Hs(e) {
                    var t;
                    if (r && (null == (t = r.history[e]) || !t.__posthog_wrapped__)) {
                        var i = this;
                        ! function(e, t, i) {
                            try {
                                if (!(t in e)) return or;
                                var s = {
                                        next: e[t]
                                    },
                                    r = i(function() {
                                        for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
                                        return s.next.apply(this, t)
                                    });
                                Y(r) && (r.prototype = r.prototype || {}, Object.defineProperties(r, {
                                    __posthog_wrapped__: {
                                        enumerable: !1,
                                        value: !0
                                    },
                                    __posthog_layer__: {
                                        enumerable: !1,
                                        value: s
                                    }
                                })), e[t] = r
                            } catch (e) {
                                return or
                            }
                        }(r.history, e, t => function(s, r, n) {
                            t.call(this, s, r, n), i.zs(e)
                        })
                    }
                }
                zs(e) {
                    try {
                        var t, i = null == r || null == (t = r.location) ? void 0 : t.pathname;
                        if (!i) return;
                        i !== this.Bs && this.isEnabled && this._instance.capture(iK, {
                            navigation_type: e
                        }), this.Bs = i
                    } catch (t) {
                        tJ.error("Error capturing " + e + " pageview", t)
                    }
                }
                Us() {
                    if (!this.js) {
                        var e = () => {
                            this.zs("popstate")
                        };
                        i7(r, "popstate", e), this.js = () => {
                            r && r.removeEventListener("popstate", e)
                        }
                    }
                }
            },
            heatmaps: class {
                get Se() {
                    return this.instance.config
                }
                constructor(e) {
                    var t;
                    this.Vs = !1, this.Fs = !1, this.Ws = null, this.instance = e, this.Vs = !(null == (t = this.instance.persistence) || !t.props[t5]), this.rageclicks = new n9(e.config.rageclick)
                }
                initialize() {
                    this.startIfEnabled()
                }
                get flushIntervalMilliseconds() {
                    var e = 5e3;
                    return K(this.Se.capture_heatmaps) && this.Se.capture_heatmaps.flush_interval_milliseconds && (e = this.Se.capture_heatmaps.flush_interval_milliseconds), e
                }
                get isEnabled() {
                    return ei(this.Se.capture_heatmaps) ? ei(this.Se.enable_heatmaps) ? this.Vs : this.Se.enable_heatmaps : !1 !== this.Se.capture_heatmaps
                }
                startIfEnabled() {
                    if (this.isEnabled) this.Fs || (op.info("starting..."), this.Gs(), this.ke());
                    else {
                        var e;
                        clearInterval(null != (e = this.Ws) ? e : void 0), this.Zs(), this.getAndClearBuffer()
                    }
                }
                onRemoteConfig(e) {
                    if ("heatmaps" in e) {
                        var t = !!e.heatmaps;
                        this.instance.persistence && this.instance.persistence.register({
                            [t5]: t
                        }), this.Vs = t, this.startIfEnabled()
                    }
                }
                getAndClearBuffer() {
                    var e = this.R;
                    return this.R = void 0, e
                }
                Qs(e) {
                    this.fe(e.originalEvent, "deadclick")
                }
                ke() {
                    this.Ws && clearInterval(this.Ws), this.Ws = "visible" === (null == a ? void 0 : a.visibilityState) ? setInterval(this.Lr.bind(this), this.flushIntervalMilliseconds) : null
                }
                Gs() {
                    r && a && (this.Js = this.Lr.bind(this), i7(r, iY, this.Js), this.Ys = e => this.fe(e || (null == r ? void 0 : r.event)), i7(a, "click", this.Ys, {
                        capture: !0
                    }), this.Ks = e => this.Xs(e || (null == r ? void 0 : r.event)), i7(a, "mousemove", this.Ks, {
                        capture: !0
                    }), this.eo = new s8(this.instance, s3, this.Qs.bind(this)), this.eo.startIfEnabledOrStop(), this.ro = this.ke.bind(this), i7(a, iJ, this.ro), this.Fs = !0)
                }
                Zs() {
                    var e;
                    r && a && (this.Js && r.removeEventListener(iY, this.Js), this.Ys && a.removeEventListener("click", this.Ys, {
                        capture: !0
                    }), this.Ks && a.removeEventListener("mousemove", this.Ks, {
                        capture: !0
                    }), this.ro && a.removeEventListener(iJ, this.ro), clearTimeout(this.io), null == (e = this.eo) || e.stop(), this.Fs = !1)
                }
                no(e, t) {
                    var i = this.instance.scrollManager.scrollY(),
                        s = this.instance.scrollManager.scrollX(),
                        n = this.instance.scrollManager.scrollElement(),
                        o = function(e, t, i) {
                            for (var s = e; s && sS(s) && !sE(s, "body") && s !== i;) {
                                var n, o, a, l = void 0;
                                try {
                                    l = null == (n = null != (o = null == (a = s.ownerDocument) ? void 0 : a.defaultView) ? o : r) ? void 0 : n.getComputedStyle(s).position
                                } catch (e) {
                                    break
                                }
                                if (H(t, l)) return !0;
                                s = sO(s)
                            }
                            return !1
                        }(sT(e), ["fixed", "sticky"], n);
                    return {
                        x: e.clientX + (o ? 0 : s),
                        y: e.clientY + (o ? 0 : i),
                        target_fixed: o,
                        type: t
                    }
                }
                fe(e, t) {
                    var i;
                    if (void 0 === t && (t = "click"), !sx(e.target) && ov(e)) {
                        var s = this.no(e, t);
                        null != (i = this.rageclicks) && i.isRageClick(e.clientX, e.clientY, (new Date).getTime()) && sH(sT(e), this.instance.config.rageclick) && this.so(b({}, s, {
                            type: "rageclick"
                        })), this.so(s)
                    }
                }
                Xs(e) {
                    !sx(e.target) && ov(e) && (clearTimeout(this.io), this.io = setTimeout(() => {
                        this.so(this.no(e, "mousemove"))
                    }, 500))
                }
                so(e) {
                    if (r) {
                        var t = this.Se.disable_capture_url_hashes ? th(r.location.href) : r.location.href,
                            i = this.Se.custom_personal_data_properties,
                            s = ra(t, this.Se.mask_personal_data_properties ? [...rd, ...i || []] : [], rv);
                        this.R = this.R || {}, this.R[s] || (this.R[s] = []), this.R[s].push(e)
                    }
                }
                Lr() {
                    this.R && !X(this.R) && this.instance.capture("$$heatmap", {
                        $heatmap_data: this.getAndClearBuffer()
                    })
                }
            },
            deadClicksAutocapture: s8,
            webVitalsAutocapture: class {
                constructor(e) {
                    var t;
                    this.Vs = !1, this.Fs = !1, this.R = {
                        url: void 0,
                        metrics: [],
                        firstMetricTimestamp: void 0
                    }, this.oo = () => {
                        clearTimeout(this.ao), 0 !== this.R.metrics.length && (this._instance.capture("$web_vitals", this.R.metrics.reduce((e, t) => b({}, e, {
                            ["$web_vitals_" + t.name + "_event"]: b({}, t),
                            ["$web_vitals_" + t.name + "_value"]: t.value
                        }), {})), this.R = {
                            url: void 0,
                            metrics: [],
                            firstMetricTimestamp: void 0
                        })
                    }, this.lo = e => {
                        this.R = this.R || {
                            url: void 0,
                            metrics: [],
                            firstMetricTimestamp: void 0
                        };
                        var t, i = this.uo();
                        if (!Q(i))
                            if (ei(null == e ? void 0 : e.name) || ei(null == e ? void 0 : e.value)) oo.error("Invalid metric received", e);
                            else if (!this.ho || this.ho > e.value) {
                            this.R.url !== i && (this.oo(), this.ao = setTimeout(this.oo, this.flushToCaptureTimeoutMs)), Q(this.R.url) && (this.R.url = i), this.R.firstMetricTimestamp = Q(this.R.firstMetricTimestamp) ? Date.now() : this.R.firstMetricTimestamp, e.attribution && e.attribution.interactionTargetElement && (e.attribution.interactionTargetElement = void 0);
                            var s = null == (t = this._instance.sessionManager) ? void 0 : t.checkAndGetSessionAndWindowId(!0),
                                r = b({}, e, {
                                    $current_url: i,
                                    timestamp: Date.now()
                                });
                            Q(s) || (r.$session_id = s.sessionId, r.$window_id = s.windowId), this.R.metrics.push(r), this.R.metrics.length === this.allowedMetrics.length && this.oo()
                        } else oo.error("Ignoring metric with value >= " + this.ho, e)
                    }, this.do = () => {
                        if (!this.Fs) {
                            var e, t, i, s, r = v.__PosthogExtensions__;
                            Q(r) || Q(r.postHogWebVitalsCallbacks) || ({
                                onLCP: e,
                                onCLS: t,
                                onFCP: i,
                                onINP: s
                            } = r.postHogWebVitalsCallbacks), e && t && i && s ? (this.allowedMetrics.indexOf("LCP") > -1 && e(this.lo.bind(this)), this.allowedMetrics.indexOf("CLS") > -1 && t(this.lo.bind(this)), this.allowedMetrics.indexOf("FCP") > -1 && i(this.lo.bind(this)), this.allowedMetrics.indexOf("INP") > -1 && s(this.lo.bind(this)), this.Fs = !0) : oo.error("web vitals callbacks not loaded - not starting")
                        }
                    }, this._instance = e, this.Vs = !(null == (t = this._instance.persistence) || !t.props[t7]), this.startIfEnabled()
                }
                get co() {
                    return this._instance.config.capture_performance
                }
                get allowedMetrics() {
                    var e, t, i = K(this.co) ? null == (e = this.co) ? void 0 : e.web_vitals_allowed_metrics : void 0;
                    return ei(i) ? (null == (t = this._instance.persistence) ? void 0 : t.props[it]) || ["CLS", "FCP", "INP", "LCP"] : i
                }
                get flushToCaptureTimeoutMs() {
                    return (K(this.co) ? this.co.web_vitals_delayed_flush_ms : void 0) || 5e3
                }
                get useAttribution() {
                    var e = K(this.co) ? this.co.web_vitals_attribution : void 0;
                    return null != e && e
                }
                get ho() {
                    var e = K(this.co) && es(this.co.__web_vitals_max_value) ? this.co.__web_vitals_max_value : 9e5;
                    return e > 0 && 6e4 >= e ? 9e5 : e
                }
                get isEnabled() {
                    var e = null == l ? void 0 : l.protocol;
                    if ("http:" !== e && "https:" !== e) return oo.info("Web Vitals are disabled on non-http/https protocols"), !1;
                    var t = K(this.co) ? this.co.web_vitals : en(this.co) ? this.co : void 0;
                    return en(t) ? t : this.Vs
                }
                startIfEnabled() {
                    this.isEnabled && !this.Fs && (oo.info("enabled, starting..."), this.Mt(this.do))
                }
                onRemoteConfig(e) {
                    if ("capturePerformance" in e) {
                        var t = K(e.capturePerformance) && !!e.capturePerformance.web_vitals,
                            i = K(e.capturePerformance) ? e.capturePerformance.web_vitals_allowed_metrics : void 0;
                        this._instance.persistence && (this._instance.persistence.register({
                            [t7]: t
                        }), this._instance.persistence.register({
                            [it]: i
                        })), this.Vs = t, this.startIfEnabled()
                    }
                }
                Mt(e) {
                    var t, i;
                    null != (t = v.__PosthogExtensions__) && t.postHogWebVitalsCallbacks ? e() : null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, this.useAttribution ? "web-vitals-with-attribution" : "web-vitals", t => {
                        t ? oo.error("failed to load script", t) : e()
                    })
                }
                uo() {
                    var e = r ? this._instance.config.disable_capture_url_hashes ? th(r.location.href) : r.location.href : void 0;
                    if (e) {
                        var t = this._instance.config.custom_personal_data_properties;
                        return ra(e, this._instance.config.mask_personal_data_properties ? [...rd, ...t || []] : [], rv)
                    }
                    oo.error("Could not determine current URL")
                }
            }
        }, {
            exceptionObserver: class {
                constructor(e) {
                    var t, i, s;
                    this.do = () => {
                        var e;
                        if (r && this.isEnabled && null != (e = v.__PosthogExtensions__) && e.errorWrappingFunctions) {
                            var t = v.__PosthogExtensions__.errorWrappingFunctions.wrapOnError,
                                i = v.__PosthogExtensions__.errorWrappingFunctions.wrapUnhandledRejection,
                                s = v.__PosthogExtensions__.errorWrappingFunctions.wrapConsoleError;
                            try {
                                !this.vo && this.Se.capture_unhandled_errors && (this.vo = t(this.captureException.bind(this))), !this.fo && this.Se.capture_unhandled_rejections && (this.fo = i(this.captureException.bind(this))), !this.po && this.Se.capture_console_errors && (this.po = s(this.captureException.bind(this)))
                            } catch (e) {
                                os.error("failed to start", e), this.mo()
                            }
                        }
                    }, this._instance = e, this.yo = !(null == (t = this._instance.persistence) || !t.props[t8]), this.bo = new ev({
                        refillRate: null != (i = this._instance.config.error_tracking.__exceptionRateLimiterRefillRate) ? i : 1,
                        bucketSize: null != (s = this._instance.config.error_tracking.__exceptionRateLimiterBucketSize) ? s : 10,
                        refillInterval: 1e4,
                        Ae: os
                    }), this.Se = this._o(), this.startIfEnabledOrStop()
                }
                _o() {
                    var e = this._instance.config.capture_exceptions,
                        t = {
                            capture_unhandled_errors: !1,
                            capture_unhandled_rejections: !1,
                            capture_console_errors: !1
                        };
                    return K(e) ? t = b({}, t, e) : (Q(e) ? this.yo : e) && (t = b({}, t, {
                        capture_unhandled_errors: !0,
                        capture_unhandled_rejections: !0
                    })), t
                }
                get isEnabled() {
                    return this.Se.capture_console_errors || this.Se.capture_unhandled_errors || this.Se.capture_unhandled_rejections
                }
                startIfEnabledOrStop() {
                    this.isEnabled ? (os.info("enabled"), this.mo(), this.Mt(this.do)) : this.mo()
                }
                Mt(e) {
                    var t, i;
                    null != (t = v.__PosthogExtensions__) && t.errorWrappingFunctions ? e() : null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, "exception-autocapture", t => {
                        if (t) return os.error("failed to load script", t);
                        e()
                    })
                }
                mo() {
                    var e, t, i;
                    null == (e = this.vo) || e.call(this), this.vo = void 0, null == (t = this.fo) || t.call(this), this.fo = void 0, null == (i = this.po) || i.call(this), this.po = void 0
                }
                onRemoteConfig(e) {
                    "autocaptureExceptions" in e && (this.yo = !!e.autocaptureExceptions, this._instance.persistence && this._instance.persistence.register({
                        [t8]: this.yo
                    }), this.Se = this._o(), this.startIfEnabledOrStop())
                }
                onConfigChange() {
                    this.Se = this._o()
                }
                captureException(e) {
                    var t, i, s, r = null != (t = null == e || null == (i = e.$exception_list) || null == (i = i[0]) ? void 0 : i.type) ? t : "Exception";
                    this.bo.consumeRateLimit(r) ? os.info("Skipping exception capture because of client rate limiting.", {
                        exception: r
                    }) : null == (s = this._instance.exceptions) || s.sendExceptionEvent(e)
                }
            },
            exceptions: class {
                constructor(e) {
                    var t, i;
                    this.wo = [], this.xo = new ty([new tC, new tj, new tT, new tR, new tN, new tD, new tM, new tz], function(e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; t > s; s++) i[s - 1] = arguments[s];
                        return function(t, s) {
                            void 0 === s && (s = 0);
                            for (var r = [], n = t.split("\n"), o = s; n.length > o; o++) {
                                var a = n[o];
                                if (1024 >= a.length) {
                                    var l = tI.test(a) ? a.replace(tI, "$1") : a;
                                    if (!l.match(/\S*Error: /)) {
                                        for (var u of i) {
                                            var h = u(l, e);
                                            if (h) {
                                                r.push(h);
                                                break
                                            }
                                        }
                                        if (r.length >= 50) break
                                    }
                                }
                            }
                            if (!r.length) return [];
                            var c = Array.from(r);
                            return c.reverse(), c.slice(0, 50).map(e => b({}, e, {
                                filename: e.filename || (c[c.length - 1] || {}).filename,
                                function: e.function || "?"
                            }))
                        }
                    }("web:javascript", tk, t$)), this._instance = e, this.wo = null != (t = null == (i = this._instance.persistence) ? void 0 : i.get_property(t6)) ? t : [], this.ko = tV(this.So()), this.Co = new tW(this.ko)
                }
                onConfigChange() {
                    this.ko = tV(this.So()), this.Co.setConfig(this.ko)
                }
                onRemoteConfig(e) {
                    var t, i, s;
                    if ("errorTracking" in e) {
                        var r = null != (t = null == (i = e.errorTracking) ? void 0 : i.suppressionRules) ? t : [],
                            n = null == (s = e.errorTracking) ? void 0 : s.captureExtensionExceptions;
                        this.wo = r, this._instance.persistence && this._instance.persistence.register({
                            [t6]: this.wo,
                            [t4]: n
                        })
                    }
                }
                get Io() {
                    var e, t = !!this._instance.get_property(t4),
                        i = this._instance.config.error_tracking.captureExtensionExceptions;
                    return null != (e = null != i ? i : t) && e
                }
                buildProperties(e, t) {
                    return this.xo.buildFromUnknown(e, {
                        syntheticException: null == t ? void 0 : t.syntheticException,
                        mechanism: {
                            handled: null == t ? void 0 : t.handled
                        }
                    })
                }
                addExceptionStep(e, t) {
                    if (this.ko.enabled) try {
                        if (!Z(e) || 0 === e.trim().length) return void oM.warn("Ignoring exception step because message must be a non-empty string");
                        var i = this.To(t),
                            {
                                sanitizedProperties: s,
                                droppedKeys: r
                            } = function(e) {
                                if (!e) return {
                                    sanitizedProperties: {},
                                    droppedKeys: []
                                };
                                var t = [];
                                return {
                                    sanitizedProperties: Object.keys(e).reduce((i, s) => (tB.has(s) ? t.push(s) : i[s] = e[s], i), {}),
                                    droppedKeys: t
                                }
                            }(i);
                        r.length > 0 && oM.warn("Ignoring reserved exception step fields", {
                            droppedKeys: r
                        }), this.Co.add(b({
                            [tq]: e,
                            [tH]: (new Date).toISOString()
                        }, s))
                    } catch (e) {
                        oM.error("Failed to add exception step. Ignoring breadcrumb.", e)
                    }
                }
                sendExceptionEvent(e) {
                    try {
                        var t = e.$exception_list;
                        if (this.Eo(t)) {
                            if (this.Mo(t)) return this.Po("Exception dropped: matched a suppression rule"), void oM.info("Skipping exception capture because a suppression rule matched");
                            if (!this.Io && this.Ro(t)) return this.Po("Exception dropped: thrown by a browser extension"), void oM.info("Skipping exception capture because it was thrown by an extension");
                            if (!this._instance.config.error_tracking.__capturePostHogExceptions && this.Oo(t)) return this.Po("Exception dropped: thrown by the PostHog SDK"), void oM.info("Skipping exception capture because it was thrown by the PostHog SDK")
                        }
                        var i = this.ko.enabled && ei(e.$exception_steps) ? this.Lo(e) : e;
                        try {
                            var s = this._instance.capture("$exception", i, {
                                _noTruncate: !0,
                                _batchKey: "exceptionEvent",
                                Zi: !0
                            });
                            return s && this.Co.clear(), s
                        } catch (e) {
                            return oM.error("Failed to capture exception event. Dropping this exception.", e), void this.Co.clear()
                        }
                    } catch (e) {
                        return void oM.error("Failed to process exception event. Ignoring this exception.", e)
                    }
                }
                Lo(e) {
                    try {
                        var t = this.Co.getAttachable();
                        return 0 === t.length ? e : b({}, e, {
                            $exception_steps: t
                        })
                    } catch (t) {
                        return oM.error("Failed to read buffered exception steps. Capturing exception without steps.", t), e
                    }
                }
                Po(e) {
                    this.ko.enabled && this.Co.add({
                        [tq]: e,
                        [tH]: (new Date).toISOString()
                    })
                }
                To(e) {
                    return K(e) ? b({}, e) : {}
                }
                So() {
                    var e, t;
                    return null != (e = null == (t = this._instance.config.error_tracking) ? void 0 : t.exception_steps) ? e : {}
                }
                Mo(e) {
                    if (0 === e.length) return !1;
                    var t = e.reduce((e, t) => {
                        var {
                            type: i,
                            value: s
                        } = t;
                        return Z(i) && i.length > 0 && e.$exception_types.push(i), Z(s) && s.length > 0 && e.$exception_values.push(s), e
                    }, {
                        $exception_types: [],
                        $exception_values: []
                    });
                    return this.wo.some(e => {
                        var i = e.values.map(e => {
                            var i, s = nM[e.operator],
                                r = J(e.value) ? e.value : [e.value],
                                n = null != (i = t[e.key]) ? i : [];
                            return r.length > 0 && s(r, n)
                        });
                        return "OR" === e.type ? i.some(Boolean) : i.every(Boolean)
                    })
                }
                Ro(e) {
                    return e.flatMap(e => {
                        var t, i;
                        return null != (t = null == (i = e.stacktrace) ? void 0 : i.frames) ? t : []
                    }).some(e => e.filename && e.filename.startsWith("chrome-extension://"))
                }
                Oo(e) {
                    if (e.length > 0) {
                        var t, i, s, r, n = null != (t = null == (i = e[0].stacktrace) ? void 0 : i.frames) ? t : [],
                            o = n[n.length - 1];
                        return null != (s = null == o || null == (r = o.filename) ? void 0 : r.includes("posthog.com/static")) && s
                    }
                    return !1
                }
                Eo(e) {
                    return !ei(e) && J(e)
                }
            }
        }, oH, {
            siteApps: class {
                constructor(e) {
                    this.Do = 0, this._instance = e, this.No = [], this.apps = {}
                }
                get isEnabled() {
                    return !!this._instance.config.opt_in_site_apps
                }
                qo(e, t) {
                    if (t) {
                        var i = this.globalsForEvent(t);
                        this.No.push(i), this.No.length > 1e3 && (this.No = this.No.slice(10))
                    }
                }
                get siteAppLoaders() {
                    var e;
                    return null == (e = v._POSTHOG_REMOTE_CONFIG) || null == (e = e[this._instance.config.token]) ? void 0 : e.siteApps
                }
                initialize() {
                    if (this.isEnabled) {
                        var e = this._instance._addCaptureHook(this.qo.bind(this));
                        this.Bo = () => {
                            e(), this.No = [], this.Bo = void 0
                        }
                    }
                }
                globalsForEvent(e) {
                    if (!e) throw Error("Event payload is required");
                    var t, i, s, r, n, o, a, l = {},
                        u = this._instance.get_property("$groups") || [];
                    for (var [h, c] of Object.entries(this._instance.get_property("$stored_group_properties") || {})) l[h] = {
                        id: u[h],
                        type: h,
                        properties: c
                    };
                    var {
                        $set_once: d,
                        $set: p
                    } = e;
                    return {
                        event: b({}, w(e, of ), {
                            properties: b({}, e.properties, p ? {
                                $set: b({}, null != (t = null == (i = e.properties) ? void 0 : i.$set) ? t : {}, p)
                            } : {}, d ? {
                                $set_once: b({}, null != (s = null == (r = e.properties) ? void 0 : r.$set_once) ? s : {}, d)
                            } : {}),
                            elements_chain: null != (n = null == (o = e.properties) ? void 0 : o.$elements_chain) ? n : "",
                            distinct_id: null == (a = e.properties) ? void 0 : a.distinct_id
                        }),
                        person: {
                            properties: this._instance.get_property("$stored_person_properties")
                        },
                        groups: l
                    }
                }
                jo(e) {
                    var t, i = null == (t = e.tagName) ? void 0 : t.toLowerCase();
                    return "style" === i && this._instance.config.prepare_external_dependency_stylesheet ? this._instance.config.prepare_external_dependency_stylesheet(e) || (om.error("prepare_external_dependency_stylesheet returned null"), null) : "script" === i && this._instance.config.prepare_external_dependency_script ? this._instance.config.prepare_external_dependency_script(e) || (om.error("prepare_external_dependency_script returned null"), null) : e
                }
                Ho() {
                    if (!this._instance.config.prepare_external_dependency_stylesheet && !this._instance.config.prepare_external_dependency_script) return () => {};
                    var e, t, i, s, r, n, o, l, u = null == a ? void 0 : a.defaultView,
                        h = null == u || null == (e = u.Node) ? void 0 : e.prototype;
                    if (!u || !h) return () => {};
                    if (this.Do++, this.Uo) return this.zo();
                    var c = [],
                        d = this,
                        p = new WeakSet,
                        v = (e, t, i) => {
                            if (null != e && e[t]) {
                                var s = e[t];
                                e[t] = i(s), c.push(() => {
                                    e[t] = s
                                })
                            }
                        },
                        g = e => {
                            if (p.has(e)) return e;
                            var t = d.jo(e);
                            return t && p.add(t), t
                        },
                        _ = e => e.map(e => "string" == typeof e ? e : g(e)).filter(e => !et(e));
                    return v(h, "appendChild", e => function(t) {
                        var i = g(t);
                        return i ? e.call(this, i) : t
                    }), v(h, "insertBefore", e => function(t, i) {
                        var s = g(t);
                        return s ? e.call(this, s, i) : t
                    }), v(h, "replaceChild", e => function(t, i) {
                        var s = g(t);
                        return s ? e.call(this, s, i) : i
                    }), [null == (t = u.Element) ? void 0 : t.prototype, null == (i = u.Document) ? void 0 : i.prototype, null == (s = u.DocumentFragment) ? void 0 : s.prototype].forEach(e => {
                        v(e, "append", e => function() {
                            for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                            return e.apply(this, _(i))
                        }), v(e, "prepend", e => function() {
                            for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                            return e.apply(this, _(i))
                        })
                    }), [null == (r = u.Element) ? void 0 : r.prototype, null == (n = u.CharacterData) ? void 0 : n.prototype, null == (o = u.DocumentType) ? void 0 : o.prototype].forEach(e => {
                        v(e, "before", e => function() {
                            for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                            return e.apply(this, _(i))
                        }), v(e, "after", e => function() {
                            for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                            return e.apply(this, _(i))
                        }), v(e, "replaceWith", e => function() {
                            for (var t = arguments.length, i = Array(t), s = 0; t > s; s++) i[s] = arguments[s];
                            var r = _(i);
                            return i.length && !r.length ? void 0 : e.apply(this, r)
                        })
                    }), v(null == (l = u.Element) ? void 0 : l.prototype, "insertAdjacentElement", e => function(t, i) {
                        var s = g(i);
                        return s ? e.call(this, t, s) : null
                    }), this.Uo = () => {
                        c.forEach(e => e()), this.Uo = void 0
                    }, this.zo()
                }
                zo() {
                    var e = !1;
                    return () => {
                        var t;
                        e || (e = !0, this.Do--, 0 === this.Do && (null == (t = this.Uo) || t.call(this)))
                    }
                }
                Vo(e, t) {
                    void 0 === t && (t = !0);
                    var i = this.Ho();
                    try {
                        var s = e(i);
                        return t && i(), s
                    } catch (e) {
                        throw i(), e
                    }
                }
                setupSiteApp(e) {
                    var t = this.apps[e.id],
                        i = () => {
                            var i;
                            !t.errored && this.No.length && (om.info("Processing " + this.No.length + " events for site app with id " + e.id), this.No.forEach(e => this.Vo(() => null == t.processEvent ? void 0 : t.processEvent(e))), t.processedBuffer = !0), Object.values(this.apps).every(e => e.processedBuffer || e.errored) && (null == (i = this.Bo) || i.call(this))
                        },
                        s = !1,
                        r = r => {
                            t.errored = !r, t.loaded = !0, om.info("Site app with id " + e.id + " " + (r ? "loaded" : "errored")), s && i()
                        };
                    try {
                        var {
                            processEvent: n
                        } = this.Vo(t => e.init({
                            posthog: this._instance,
                            callback(e) {
                                t(), r(e)
                            }
                        }), !1);
                        n && (t.processEvent = n), s = !0
                    } catch (t) {
                        om.error(oy + e.id, t), r(!1)
                    }
                    if (s && t.loaded) try {
                        i()
                    } catch (i) {
                        om.error("Error while processing buffered events PostHog app with config id " + e.id, i), t.errored = !0
                    }
                }
                Wo() {
                    var e = this.siteAppLoaders || [];
                    for (var t of e) this.apps[t.id] = {
                        id: t.id,
                        loaded: !1,
                        errored: !1,
                        processedBuffer: !1
                    };
                    for (var i of e) this.setupSiteApp(i)
                }
                Go(e) {
                    var t = this;
                    if (0 !== Object.keys(this.apps).length) {
                        var i = this.globalsForEvent(e),
                            s = function(s) {
                                try {
                                    t.Vo(() => null == s.processEvent ? void 0 : s.processEvent(i))
                                } catch (t) {
                                    om.error("Error while processing event " + e.event + " for site app " + s.id, t)
                                }
                            };
                        for (var r of Object.values(this.apps)) s(r)
                    }
                }
                onRemoteConfig(e) {
                    var t, i, s, r = this;
                    if (null != (t = this.siteAppLoaders) && t.length) return this.isEnabled ? (this.Wo(), void this._instance.on("eventCaptured", e => this.Go(e))) : void om.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                    if (null == (i = this.Bo) || i.call(this), null != (s = e.siteApps) && s.length)
                        if (this.isEnabled) {
                            var n = function(e) {
                                var t;
                                v["__$$ph_site_app_" + e] = r._instance, null == (t = v.__PosthogExtensions__) || null == t.loadSiteApp || t.loadSiteApp(r._instance, a, t => {
                                    if (t) return om.error(oy + e, t)
                                })
                            };
                            for (var {
                                    id: o,
                                    url: a
                                } of e.siteApps) n(o)
                        } else om.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.')
                }
            }
        }, oB, {
            tracingHeaders: class {
                constructor(e) {
                    this.Zo = void 0, this.Qo = void 0, this.Jo = void 0, this.do = () => {
                        var e, t, i = this.Yo();
                        i ? (Q(this.Zo) && (this.Zo = null == (e = v.__PosthogExtensions__) || null == (e = e.tracingHeadersPatchFns) ? void 0 : e._patchXHR(i, () => this._instance.get_distinct_id(), this._instance.sessionManager)), Q(this.Qo) && (this.Qo = null == (t = v.__PosthogExtensions__) || null == (t = t.tracingHeadersPatchFns) ? void 0 : t._patchFetch(i, () => this._instance.get_distinct_id(), this._instance.sessionManager))) : this.mo()
                    }, this._instance = e
                }
                initialize() {
                    this.startIfEnabledOrStop()
                }
                Mt(e) {
                    var t, i;
                    null != (t = v.__PosthogExtensions__) && t.tracingHeadersPatchFns ? e() : null == (i = v.__PosthogExtensions__) || null == i.loadExternalDependency || i.loadExternalDependency(this._instance, "tracing-headers", t => {
                        if (t) return on.error("failed to load script", t);
                        e()
                    })
                }
                Ko() {
                    var e, t;
                    return null != (e = null != (t = this._instance.config.tracing_headers) ? t : this._instance.config.addTracingHeaders) ? e : this._instance.config.__add_tracing_headers
                }
                Yo() {
                    var e = this.Ko();
                    return J(e) ? (J(this.Jo) ? this.Jo.splice(0, this.Jo.length, ...e) : this.Jo = [...e], e.length > 0 ? this.Jo : void 0) : (J(this.Jo) && this.Jo.splice(0), this.Jo = e || void 0, this.Jo)
                }
                mo() {
                    var e, t;
                    null == (e = this.Zo) || e.call(this), null == (t = this.Qo) || t.call(this), this.Zo = void 0, this.Qo = void 0
                }
                startIfEnabledOrStop() {
                    this.Yo() ? this.Mt(this.do) : this.mo()
                }
            }
        }, {
            toolbar: class {
                constructor(e) {
                    this.instance = e
                }
                ca(e) {
                    v.ph_toolbar_state = e
                }
                va() {
                    var e;
                    return null != (e = v.ph_toolbar_state) ? e : 0
                }
                initialize() {
                    return this.maybeLoadToolbar()
                }
                maybeLoadToolbar(e, t, i) {
                    if (void 0 === e && (e = void 0), void 0 === t && (t = void 0), void 0 === i && (i = void 0), i9(this.instance.config) || !r || !a) return !1;
                    e = null != e ? e : r.location, i = null != i ? i : r.history;
                    try {
                        if (!t) {
                            try {
                                r.localStorage.setItem("test", "test"), r.localStorage.removeItem("test")
                            } catch (e) {
                                return !1
                            }
                            t = null == r ? void 0 : r.localStorage
                        }
                        var s, n = oP || rl(e.hash, "__posthog") || rl(e.hash, "state"),
                            o = n ? i5(() => JSON.parse(atob(decodeURIComponent(n)))) || i5(() => JSON.parse(decodeURIComponent(n))) : null;
                        return o && "ph_authorize" === o.action ? ((s = o).source = "url", s && Object.keys(s).length > 0 && (o.desiredHash ? e.hash = o.desiredHash : i ? i.replaceState(i.state, "", e.pathname + e.search) : e.hash = "")) : ((s = JSON.parse(t.getItem(oF) || "{}")).source = "localstorage", delete s.userIntent), !(!s.token || this.instance.config.token !== s.token || (this.loadToolbar(s), 0))
                    } catch (e) {
                        return !1
                    }
                }
                fa(e) {
                    var t = v.ph_load_toolbar || v.ph_load_editor;
                    !ei(t) && Y(t) ? t(e, this.instance) : o$.warn("No toolbar load function found")
                }
                loadToolbar(e) {
                    var t, i = !(null == a || !a.getElementById(iD));
                    if (!r || i) return !1;
                    var s = "custom" === this.instance.requestRouter.region && this.instance.config.advanced_disable_toolbar_metrics,
                        n = b({
                            token: this.instance.config.token
                        }, e, {
                            apiURL: this.instance.requestRouter.endpointFor("ui")
                        }, s ? {
                            instrument: !1
                        } : {});
                    return (r.localStorage.setItem(oF, JSON.stringify(b({}, n, {
                        source: void 0
                    }))), 2 === this.va()) ? this.fa(n) : 0 === this.va() && (this.ca(1), null == (t = v.__PosthogExtensions__) || null == t.loadExternalDependency || t.loadExternalDependency(this.instance, "toolbar", e => {
                        e ? (o$.error("[Toolbar] Failed to load", e), this.ca(0)) : (this.ca(2), this.fa(n))
                    }), i7(r, "turbolinks:load", () => {
                        this.ca(0), this.loadToolbar(n)
                    })), !0
                }
                pa(e) {
                    return this.loadToolbar(e)
                }
                maybeLoadEditor(e, t, i) {
                    return void 0 === e && (e = void 0), void 0 === t && (t = void 0), void 0 === i && (i = void 0), this.maybeLoadToolbar(e, t, i)
                }
            }
        }, oU, {
            conversations: class {
                constructor(e) {
                    this.ga = void 0, this._conversationsManager = null, this.ma = !1, this.ya = null, this._instance = e
                }
                initialize() {
                    this.loadIfEnabled()
                }
                onRemoteConfig(e) {
                    if (!this._instance.config.disable_conversations) {
                        var t = e.conversations;
                        ei(t) || (en(t) ? this.ga = t : (this.ga = t.enabled, this.ya = t), this.loadIfEnabled())
                    }
                }
                reset() {
                    var e;
                    null == (e = this._conversationsManager) || e.reset(), this._conversationsManager = null, this.ga = void 0, this.ya = null
                }
                loadIfEnabled() {
                    if (!(this._conversationsManager || this.ma || this._instance.config.disable_conversations || i9(this._instance.config) || this._instance.config.cookieless_mode && this._instance.consent.isOptedOut())) {
                        var e = null == v ? void 0 : v.__PosthogExtensions__;
                        if (e && !Q(this.ga) && this.ga)
                            if (this.ya && this.ya.token) {
                                this.ma = !0;
                                try {
                                    var t = e.initConversations;
                                    if (t) return this.ba(t), void(this.ma = !1);
                                    var i = e.loadExternalDependency;
                                    if (!i) return void this._a(iH);
                                    i(this._instance, "conversations", t => {
                                        t || !e.initConversations ? this._a("Could not load conversations script", t) : this.ba(e.initConversations), this.ma = !1
                                    })
                                } catch (e) {
                                    this._a("Error initializing conversations", e), this.ma = !1
                                }
                            } else oN.error("Conversations enabled but missing token in remote config.")
                    }
                }
                ba(e) {
                    if (this.ya) try {
                        this._conversationsManager = e(this.ya, this._instance), oN.info("Conversations loaded successfully")
                    } catch (e) {
                        this._a("Error completing conversations initialization", e)
                    } else oN.error("Cannot complete initialization: remote config is null")
                }
                _a(e, t) {
                    oN.error(e, t), this._conversationsManager = null, this.ma = !1
                }
                show() {
                    this._conversationsManager ? this._conversationsManager.show() : oN.warn("Conversations not loaded yet.")
                }
                hide() {
                    this._conversationsManager && this._conversationsManager.hide()
                }
                isAvailable() {
                    return !0 === this.ga && !et(this._conversationsManager)
                }
                isVisible() {
                    var e, t;
                    return null != (e = null == (t = this._conversationsManager) ? void 0 : t.isVisible()) && e
                }
                sendMessage(e, t, i) {
                    var s = this;
                    return y(function*() {
                        return s._conversationsManager ? s._conversationsManager.sendMessage(e, t, i) : (oN.warn(oz), null)
                    })()
                }
                getMessages(e, t) {
                    var i = this;
                    return y(function*() {
                        return i._conversationsManager ? i._conversationsManager.getMessages(e, t) : (oN.warn(oz), null)
                    })()
                }
                markAsRead(e) {
                    var t = this;
                    return y(function*() {
                        return t._conversationsManager ? t._conversationsManager.markAsRead(e) : (oN.warn(oz), null)
                    })()
                }
                getTickets(e) {
                    var t = this;
                    return y(function*() {
                        return t._conversationsManager ? t._conversationsManager.getTickets(e) : (oN.warn(oz), null)
                    })()
                }
                requestRestoreLink(e) {
                    var t = this;
                    return y(function*() {
                        return t._conversationsManager ? t._conversationsManager.requestRestoreLink(e) : (oN.warn(oz), null)
                    })()
                }
                restoreFromToken(e) {
                    var t = this;
                    return y(function*() {
                        return t._conversationsManager ? t._conversationsManager.restoreFromToken(e) : (oN.warn(oz), null)
                    })()
                }
                restoreFromUrlToken() {
                    var e = this;
                    return y(function*() {
                        return e._conversationsManager ? e._conversationsManager.restoreFromUrlToken() : (oN.warn(oz), null)
                    })()
                }
                getCurrentTicketId() {
                    var e, t;
                    return null != (e = null == (t = this._conversationsManager) ? void 0 : t.getCurrentTicketId()) ? e : null
                }
                getWidgetSessionId() {
                    var e, t;
                    return null != (e = null == (t = this._conversationsManager) ? void 0 : t.getWidgetSessionId()) ? e : null
                }
                en() {
                    var e;
                    null == (e = this._conversationsManager) || e.setIdentity()
                }
                tn() {
                    var e;
                    null == (e = this._conversationsManager) || e.clearIdentity()
                }
            }
        }, {
            logs: class {
                constructor(e) {
                    var t;
                    this.wa = !1, this.xa = !1, this.Ae = tY("[logs]"), this._r = [], this.ka = [], this.ss = 0, this.Sa = () => {
                        var e, t;
                        this.ss = 0, null == (e = this.Ca) || e.onReconnect(), null == (t = this.Ia) || t.onReconnect()
                    }, this._instance = e, this._instance && null != (t = this._instance.config.logs) && t.captureConsoleLogs && (this.wa = !0), r && i7(r, "online", this.Sa)
                }
                Ta(e, t, i, s) {
                    var r, n, o, a, l, u, h, c, d, p, v, g, _, f, m = (r = null == (f = this._instance) || null == (f = f.config) ? void 0 : f.logs, d = null != (n = null == r ? void 0 : r.flushIntervalMs) ? n : 3e3, p = null != (o = null == r ? void 0 : r.maxBufferSize) ? o : 100, g = Q(v = null != i && i.consoleCapture ? void 0 : null != (a = null == r ? void 0 : r.maxLogsPerInterval) ? a : 1e3) ? Math.max(p, 2048) : Math.max(p, v), {
                        serviceName: null != (l = null != (u = null == (_ = null == r ? void 0 : r.resourceAttributes) ? void 0 : _["service.name"]) ? u : null == r ? void 0 : r.serviceName) ? l : null == i ? void 0 : i.serviceNameDefault,
                        serviceVersion: null != (h = null == _ ? void 0 : _["service.version"]) ? h : null == r ? void 0 : r.serviceVersion,
                        environment: null != (c = null == _ ? void 0 : _["deployment.environment"]) ? c : null == r ? void 0 : r.environment,
                        resourceAttributes: _,
                        beforeSend: null == r ? void 0 : r.beforeSend,
                        flushIntervalMs: d,
                        maxBufferSize: p,
                        maxQueueSize: g,
                        maxBatchRecordsPerPost: 100,
                        rateCapWindowMs: d,
                        maxLogsPerInterval: v,
                        backgroundFlushBudgetMs: 0,
                        terminationFlushBudgetMs: 0
                    });
                    return [new tm(this.Ea(e, t), m, this.Ae, () => this.Ma(), e => e(), void 0, s), m]
                }
                Pa() {
                    var e, t, i = null == (e = this._instance) || null == (e = e.config) ? void 0 : e.logs;
                    return this.Ca && this.Ra === i || (null == (t = this.Ca) || t.reset(), this.Ra = i, [this.Ca, this.Oa] = this.Ta(() => this._r, e => {
                        this._r = e
                    })), this.Ca
                }
                La() {
                    var e, t, i = null == (e = this._instance) || null == (e = e.config) ? void 0 : e.logs;
                    return this.Ia && this.Fa === i || (null == (t = this.Ia) || t.reset(), this.Fa = i, [this.Ia, this.Aa] = this.Ta(() => this.ka, e => {
                        this.ka = e
                    }, {
                        serviceNameDefault: "posthog-browser-logs",
                        consoleCapture: !0
                    }, oj)), this.Ia
                }
                initialize() {
                    this.loadIfEnabled()
                }
                onRemoteConfig(e) {
                    var t, i = null == (t = e.logs) ? void 0 : t.captureConsoleLogs;
                    !ei(i) && i && (this.wa = !0, this.loadIfEnabled())
                }
                reset() {
                    var e, t;
                    this._r = [], null == (e = this.Ca) || e.reset(), this.ka = [], null == (t = this.Ia) || t.reset(), this.ss = 0
                }
                captureLog(e) {
                    this.Pa().captureLog(e)
                }
                le(e) {
                    this.La().captureLog(e)
                }
                get logger() {
                    return this.$a || (this.$a = {
                        trace: (e, t) => this.captureLog({
                            body: e,
                            level: "trace",
                            attributes: t
                        }),
                        debug: (e, t) => this.captureLog({
                            body: e,
                            level: "debug",
                            attributes: t
                        }),
                        info: (e, t) => this.captureLog({
                            body: e,
                            level: "info",
                            attributes: t
                        }),
                        warn: (e, t) => this.captureLog({
                            body: e,
                            level: "warn",
                            attributes: t
                        }),
                        error: (e, t) => this.captureLog({
                            body: e,
                            level: "error",
                            attributes: t
                        }),
                        fatal: (e, t) => this.captureLog({
                            body: e,
                            level: "fatal",
                            attributes: t
                        })
                    }), this.$a
                }
                flushLogs(e) {
                    e ? this.Da(e) : (this.Ca && this.Ca.flush().catch(e => this.Ae.error("PostHog logs flush failed:", e)), this.Ia && this.Ia.flush().catch(e => this.Ae.error("PostHog logs flush failed:", e)))
                }
                loadIfEnabled() {
                    if (this.wa && !this.xa) {
                        var e = null == v ? void 0 : v.__PosthogExtensions__;
                        if (e) {
                            var t = e.loadExternalDependency;
                            t ? t(this._instance, "logs", t => {
                                var i;
                                t || null == (i = e.logs) || !i.initializeLogs ? this.Ae.error("Could not load logs script", t) : (e.logs.initializeLogs(this._instance), this.xa = !0)
                            }) : this.Ae.error(iH)
                        } else this.Ae.error("PostHog Extensions not found.")
                    }
                }
                Ea(e, t) {
                    var i = this._instance;
                    return {
                        get isDisabled() {
                            return !1
                        },
                        get optedOut() {
                            return !i.is_capturing()
                        },
                        getPersistedProperty: t => t === I.LogsQueue ? e() : void 0,
                        setPersistedProperty(e, i) {
                            e === I.LogsQueue && t(null != i ? i : [])
                        },
                        ht: e => this.ht(e),
                        getLibraryId: () => f.LIB_NAME,
                        getLibraryVersion: () => f.LIB_VERSION
                    }
                }
                ht(e) {
                    return new Promise(t => {
                        if (ru(this.ss, 3)) t({
                            kind: "fatal",
                            error: Error("logs endpoint is unreachable, dropping batch")
                        });
                        else {
                            var i = !1,
                                s = e => {
                                    i || (i = !0, clearTimeout(r), t(e))
                                },
                                r = setTimeout(() => s({
                                    kind: "retry-later",
                                    error: Error("logs request timed out")
                                }), 9e4);
                            this._instance._send_request({
                                method: "POST",
                                url: this.Na(),
                                data: e,
                                compression: "best-available",
                                batchKey: "logs",
                                fireCallbackOnDrop: !0,
                                callback: e => {
                                    var t, i = e.statusCode;
                                    (this.qa(i), i >= 200 && 300 > i) ? s({
                                        kind: "ok"
                                    }): 413 === i ? s({
                                        kind: "too-large"
                                    }) : 0 !== i && 429 !== i && 500 > i ? s({
                                        kind: "fatal",
                                        error: Error("logs request failed with status " + i)
                                    }) : s({
                                        kind: "retry-later",
                                        error: null != (t = e.error) ? t : Error("logs request failed with status " + i)
                                    })
                                }
                            })
                        }
                    })
                }
                qa(e) {
                    (0 !== e || this._instance.__loaded) && (this.ss = rh(e, this.ss, 3, () => this.Ae.warn("Log requests are failing before receiving an HTTP response; this can happen due to network issues, CORS, browser blocking, or ad blockers. Stopped sending logs; will try again when connectivity changes.")))
                }
                Da(e) {
                    this._r.length > 0 && this.Ba(e, this._r, this.Oa, f.LIB_NAME, e => {
                        this._r = e
                    }), this.ka.length > 0 && this.Ba(e, this.ka, this.Aa, oj, e => {
                        this.ka = e
                    })
                }
                Ba(e, t, i, s, r) {
                    if (0 !== t.length) {
                        var n = t.map(e => e.record);
                        r([]);
                        var o = tf(n, t_(i, f.LIB_NAME, f.LIB_VERSION), s, f.LIB_VERSION);
                        this._instance._send_request({
                            method: "POST",
                            url: this.Na(),
                            data: o,
                            compression: "best-available",
                            batchKey: "logs",
                            transport: e
                        })
                    }
                }
                Na() {
                    return this._instance.requestRouter.endpointFor("api", "/i/v1/logs") + "?token=" + encodeURIComponent(this._instance.config.token)
                }
                Ma() {
                    var e, t = {};
                    if (t.distinctId = this._instance.get_distinct_id(), this._instance.sessionManager) {
                        var {
                            sessionId: i,
                            windowId: s,
                            sessionStartTimestamp: r,
                            lastActivityTimestamp: n
                        } = this._instance.sessionManager.checkAndGetSessionAndWindowId(!0);
                        t.sessionId = i, t.windowId = s, ei(r) || (t.sessionStartTimestamp = r), ei(n) || (t.lastActivityTimestamp = n)
                    }
                    if (null != v && null != (e = v.location) && e.href && (t.currentUrl = this._instance.config.disable_capture_url_hashes ? th(v.location.href) : v.location.href), this._instance.featureFlags) {
                        var o = this._instance.featureFlags.getFlags();
                        o && o.length > 0 && (t.activeFeatureFlags = o)
                    }
                    return t
                }
            }
        });
    n7.__defaultExtensionClasses = b({}, oV);
    var oW = (f.SDK_DIST_CHANNEL = "npm", s = nY[n2] = new n7, function() {
        function e() {
            e.done || (e.done = !0, n3 = !1, i1(nY, function(e) {
                e._dom_loaded()
            }))
        }
        null != a && a.addEventListener ? "complete" === a.readyState ? e() : i7(a, "DOMContentLoaded", e, {
            capture: !1
        }) : r && tJ.error("Browser doesn't support `document.addEventListener` so PostHog couldn't be initialized")
    }(), s);
    e.s(["default", 0, oW])
}]);