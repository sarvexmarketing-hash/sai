(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 92285, t => {
    "use strict";
    t.i(301016);
    let e = encodeURIComponent,
        n = "https://creation-api.pika.art/v1",
        r = {
            account: `${n}/account`,
            onboarding: `${n}/onboarding`,
            projects: `${n}/projects`,
            brands: `${n}/brands`,
            brand: t => `${n}/brands/${e(t)}`,
            brandDraft: t => `${n}/brands/${e(t)}/draft`,
            brandPublish: t => `${n}/brands/${e(t)}/publish`,
            brandRevisions: t => `${n}/brands/${e(t)}/revisions`,
            brandExtractions: `${n}/brands/extractions`,
            brandExtractionQuote: `${n}/brands/extraction-quote`,
            projectArtifacts: t => `${n}/projects/${e(t)}/artifacts`,
            artifactTimeline: t => `${n}/artifacts/${e(t)}/timeline`,
            artifactExports: t => `${n}/artifacts/${e(t)}/exports`,
            artifactExportLatest: t => `${n}/artifacts/${e(t)}/exports/latest`,
            artifact: t => `${n}/artifacts/${e(t)}`,
            agentAvailability: `${n}/agent/availability`,
            agentConversations: t => `${n}/projects/${e(t)}/agent/conversations`,
            agentProjectSpend: t => `${n}/projects/${e(t)}/agent-spend`,
            agentConversation: t => `${n}/agent/conversations/${e(t)}`,
            agentBudget: t => `${n}/agent/conversations/${e(t)}/budget`,
            agentMessages: t => `${n}/agent/conversations/${e(t)}/messages`,
            agentEvents: t => `${n}/agent/conversations/${e(t)}/events`,
            agentRuns: t => `${n}/agent/conversations/${e(t)}/runs`,
            agentRunReply: (t, r) => `${n}/agent/conversations/${e(t)}/runs/${e(r)}/reply`,
            agentRunCalls: (t, r) => `${n}/agent/conversations/${e(t)}/runs/${e(r)}/calls`,
            agentOperation: t => `${n}/agent/operations/${e(t)}`,
            agentDecisions: t => `${n}/agent/operations/${e(t)}/decisions`,
            agentCancel: t => `${n}/agent/runs/${e(t)}/cancel`,
            skills: `${n}/skills`,
            skillStarter: `${n}/skills/starter`,
            skillDrafts: `${n}/skills/drafts`,
            skillDraft: t => `${n}/skills/${e(t)}/draft`,
            skillReview: t => `${n}/skills/${e(t)}/review`,
            skillReleases: t => `${n}/skills/${e(t)}/releases`,
            skillRelease: (t, r) => `${n}/skills/${e(t)}/releases/${e(r)}`,
            projectSkillCreations: t => `${n}/projects/${e(t)}/skill-creations`,
            skillCreation: t => `${n}/skill-creations/${e(t)}`,
            skillCreationActions: t => `${n}/skill-creations/${e(t)}/actions`,
            skillCreationExports: t => `${n}/skill-creations/${e(t)}/exports`,
            skillCreationHistory: t => `${n}/skill-creations/${e(t)}/history`,
            skillCreationUndo: t => `${n}/skill-creations/${e(t)}/undo`,
            skillCreationFocus: t => `${n}/skill-creations/${e(t)}/focus`,
            skillOrigin: t => `${n}/library/${e(t)}/skill-origin`,
            projectCreations: t => `${n}/projects/${e(t)}/creations`,
            creation: t => `${n}/creations/${e(t)}`,
            creationEdits: t => `${n}/creations/${e(t)}/edits`,
            moodboardPublishStyle: t => `${n}/creations/${e(t)}/moodboard/publish-style`,
            project: t => `${n}/projects/${e(t)}`,
            projectAssets: t => `${n}/projects/${e(t)}/assets`,
            projectAsset: (t, r) => `${n}/projects/${e(t)}/assets/${e(r)}`,
            projectAutoTitle: t => `${n}/projects/${e(t)}/auto-title`,
            projectTimeline: t => `${n}/projects/${e(t)}/timeline`,
            projectAppState: (t, r) => `${n}/projects/${e(t)}/app-state/${e(r)}`,
            projectExports: t => `${n}/projects/${e(t)}/exports`,
            projectExportLatest: t => `${n}/projects/${e(t)}/exports/latest`,
            library: `${n}/library`,
            libraryItem: t => `${n}/library/${e(t)}`,
            libraryUpload: `${n}/library/upload`,
            libraryRegister: `${n}/library/register`,
            libraryPublish: t => `${n}/library/${e(t)}/publish`,
            libraryUnpublish: t => `${n}/library/${e(t)}/unpublish`,
            discover: `${n}/discover`,
            discoverFavorites: `${n}/discover/favorites`,
            discoverFavoriteIds: `${n}/discover/favorites/ids`,
            discoverFavorite: t => `${n}/discover/favorites/${e(t)}`,
            discoverItem: t => `${n}/discover/${e(t)}`,
            discoverRemix: t => `${n}/discover/${e(t)}/remix`,
            credits: `${n}/credits`,
            creditsHistory: `${n}/credits/history`,
            creditsPacks: `${n}/credits/packs`,
            creditsAutoTopup: `${n}/credits/auto-topup`,
            creditsAutoTopupSetup: `${n}/credits/auto-topup/setup`,
            creditsAutoTopupSetupConfirm: `${n}/credits/auto-topup/setup/confirm`,
            creditsFreeGrant: `${n}/credits/free-grant`,
            subscription: `${n}/billing/subscription`,
            subscriptionPlans: `${n}/billing/plans`,
            subscriptionCheckout: `${n}/billing/checkout`,
            subscriptionCancel: `${n}/billing/cancel`,
            subscriptionCancelScheduled: `${n}/billing/cancel-scheduled`,
            subscriptionCancelOffer: `${n}/billing/cancel-offer`,
            subscriptionCancelOfferAccept: `${n}/billing/cancel-offer/accept`,
            subscriptionPortal: `${n}/billing/portal`,
            promosActive: `${n}/promos/active`,
            paymentMethods: `${n}/billing/payment-methods`,
            paymentMethod: t => `${n}/billing/payment-methods/${e(t)}`,
            paymentMethodSetup: `${n}/billing/payment-methods/setup`,
            paymentMethodSetupConfirm: `${n}/billing/payment-methods/setup/confirm`,
            teams: `${n}/teams`,
            team: t => `${n}/teams/${e(t)}`,
            teamAvatar: t => `${n}/teams/${e(t)}/avatar`,
            teamCredits: t => `${n}/teams/${e(t)}/credits`,
            teamCreditAlerts: t => `${n}/teams/${e(t)}/credit-alerts`,
            teamCreditsHistory: t => `${n}/teams/${e(t)}/credits/history`,
            teamJoinRequests: t => `${n}/teams/${e(t)}/join-requests`,
            teamJoinRequestDecline: (t, r) => `${n}/teams/${e(t)}/join-requests/${e(r)}/decline`,
            teamJoinRequestApprove: (t, r) => `${n}/teams/${e(t)}/join-requests/${e(r)}/approve`,
            teamInviteLink: t => `${n}/teams/${e(t)}/invite-link`,
            teamMembers: t => `${n}/teams/${e(t)}/members`,
            teamMember: (t, r) => `${n}/teams/${e(t)}/members/${e(r)}`,
            teamMemberCreditLimit: (t, r) => `${n}/teams/${e(t)}/members/${e(r)}/credit-limit`,
            teamMemberRole: (t, r) => `${n}/teams/${e(t)}/members/${e(r)}/role`,
            teamTransferOwnership: t => `${n}/teams/${e(t)}/ownership/transfer`,
            teamLeave: t => `${n}/teams/${e(t)}/leave`,
            teamEmailInvites: t => `${n}/teams/${e(t)}/email-invites`,
            teamEmailInvitePreview: t => `${n}/teams/${e(t)}/email-invites/preview`,
            teamEmailInviteBatch: (t, r) => `${n}/teams/${e(t)}/email-invite-batches/${e(r)}`,
            teamEmailInviteAction: (t, r, i) => `${n}/teams/${e(t)}/email-invites/${e(r)}/${i}`,
            teamSeats: t => `${n}/teams/${e(t)}/seats`,
            teamBillingClaim: t => `${n}/teams/${e(t)}/billing/claim`,
            teamCreditRequests: t => `${n}/teams/${e(t)}/credit-requests`,
            teamSeatPreview: t => `${n}/teams/${e(t)}/seats/preview`,
            teamCheckout: `${n}/teams/checkout`,
            teamInvitePreview: `${n}/team-invites/preview`,
            teamInviteStatus: `${n}/team-invites/status`,
            teamInviteAccept: `${n}/team-invites/accept`,
            teamInviteDecline: `${n}/team-invites/decline`,
            teamEmailInviteRecipient: t => `${n}/team-email-invites/${t}`,
            favorites: `${n}/favorites`,
            favorite: t => `${n}/favorites/${e(t)}`,
            modelLaunchSubscription: t => `${n}/model-launches/${e(t)}/subscription`,
            connections: `${n}/connections`,
            connection: t => `${n}/connections/${e(t)}`,
            connectionAuthorize: t => `${n}/connections/${e(t)}/authorize`,
            connectionComplete: t => `${n}/connections/${e(t)}/complete`,
            connectionImport: t => `${n}/connections/${e(t)}/import`,
            connectionCollections: t => `${n}/connections/${e(t)}/collections`,
            connectionCollectionItems: (t, r) => `${n}/connections/${e(t)}/collections/${e(r)}/items`,
            arenaChannel: t => `${n}/connections/arena/channels/${e(t)}`,
            arenaChannelItems: t => `${n}/connections/arena/channels/${e(t)}/items`,
            models: `${n}/models`,
            voices: `${n}/voices`,
            voice: t => `${n}/voices/${e(t)}`,
            uploads: `${n}/uploads`,
            quotes: `${n}/quotes`,
            jobs: `${n}/jobs`,
            jobReplay: `${n}/jobs/replay`,
            job: t => `${n}/jobs/${e(t)}`,
            jobRetry: t => `${n}/jobs/${e(t)}/retry`,
            jobCancel: t => `${n}/jobs/${e(t)}/cancel`
        };
    t.s(["API", 0, r, "EMAIL_LINK_CONTINUE_PATH", 0, "/auth/continue", "FORGOT_PASSWORD_PATH", 0, "/forgot-password", "GENERATE_AFTER_AUTH_PARAM", 0, "generate_after_auth", "LOGIN_REDIRECT_PATH", 0, "/home", "NOTIFY_AFTER_AUTH_PARAM", 0, "notify_after_auth", "REFRESH_INTERVAL_INITIAL", 0, 5e3, "REFRESH_INTERVAL_MEDIUM", 0, 15e3, "REFRESH_INTERVAL_SLOW", 0, 3e4, "SIGN_UP_KEY", 0, "sign-up"])
}, 767131, t => {
    "use strict";
    var e = t.i(92285),
        n = t.i(344805),
        r = t.i(958666);
    let i = "pika_acq",
        o = "pika_acq_del";

    function s(t) {
        return `${i}=${t}`.length
    }

    function a(t) {
        return "number" == typeof t && Number.isSafeInteger(t) && t > 0 ? t : void 0
    }
    var c = t.i(517221),
        u = t.i(38067);
    let l = {
            f: "first",
            s: "signup",
            l: "latest"
        },
        p = /^[A-Za-z0-9._~-]+$/,
        h = /^[0-9]+$/,
        f = /^[a-z0-9.-]+$/,
        d = /[\p{Cc}\p{Cs}]/u,
        m = /[?#]/,
        g = "auth_type",
        v = "error",
        y = "expires=Thu, 01 Jan 1970 00:00:00 GMT",
        b = ["pika.art", "pikalabs.app", "stripe.com", "supabase.co", "accounts.google.com", "discord.com"];

    function $(t) {
        return "string" == typeof t && t.length <= 150 && p.test(t) ? t : void 0
    }

    function k(t) {
        return "string" == typeof t && t.length <= 100 && f.test(t) ? t : void 0
    }

    function _(t, e, n) {
        if ("string" != typeof t || d.test(t)) return;
        let r = "",
            i = 0;
        for (let o of t.trim()) {
            let t = i + n(o);
            if (t > e) break;
            r += o, i = t
        }
        return r.trimEnd() || void 0
    }

    function w(t) {
        if (!("string" != typeof t || (0, u.looksLikeEmail)(t))) return _(t, 100, t => t.length)
    }

    function x(t) {
        return (0, u.looksLikeEmail)(function(t) {
            try {
                return decodeURIComponent(t)
            } catch {
                return t
            }
        }(t)) ? "-" : t
    }

    function E(t) {
        return t.split("/").map(x).join("/")
    }

    function S(t) {
        if ("string" != typeof t || !t.startsWith("/") || m.test(t)) return;
        let e = _(E(t), 120, t => encodeURIComponent(t).length);
        return void 0 === e ? void 0 : E(e)
    }
    let I = [
            ["referrer_host", "r", k],
            ["gclid", "gc", $],
            ["gbraid", "gb", $],
            ["wbraid", "wb", $],
            ["gad_campaignid", "gi", function(t) {
                return "string" == typeof t && t.length <= 32 && h.test(t) ? t : void 0
            }],
            ["utm_source", "us", w],
            ["utm_medium", "um", w],
            ["utm_campaign", "uc", w],
            ["utm_term", "ut", w],
            ["utm_content", "ux", w]
        ],
        T = I.filter(([t]) => "referrer_host" !== t),
        R = [
            ["l", "utm_term"],
            ["l", "utm_content"],
            ["s", "utm_term"],
            ["s", "utm_content"],
            ["f", "utm_term"],
            ["f", "utm_content"],
            ["s", "referrer_host"],
            ["s", "gad_campaignid"],
            ["s", "utm_medium"],
            ["s", "utm_source"],
            ["s", "utm_campaign"],
            ["l", "referrer_host"],
            ["l", "gad_campaignid"],
            ["l", "utm_medium"],
            ["l", "utm_source"],
            ["l", "utm_campaign"],
            ["f", "referrer_host"],
            ["f", "gad_campaignid"],
            ["f", "utm_medium"],
            ["f", "utm_source"],
            ["f", "utm_campaign"],
            ["s", "wbraid"],
            ["s", "gbraid"],
            ["s", "gclid"],
            ["s", null],
            ["l", "wbraid"],
            ["l", "gbraid"],
            ["l", "gclid"]
        ];

    function C(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }

    function A(t) {
        let e = JSON.stringify(T.map(([e]) => t[e] ? ? null)),
            n = 0x811c9dc5;
        for (let t = 0; t < e.length; t++) n = Math.imul(n ^ e.charCodeAt(t), 0x1000193) >>> 0;
        return n
    }

    function O(t) {
        let e = {
            t: Math.floor(Date.parse(t.at) / 1e3),
            p: t.landing_path
        };
        for (let [n, r] of I) {
            let i = t[n];
            void 0 !== i && (e[r] = i)
        }
        return e
    }

    function N(t) {
        if (!C(t)) return;
        let e = t.t;
        if ("number" != typeof e || !Number.isSafeInteger(e) || e <= 0) return;
        let n = S(t.p);
        if (!n) return;
        let r = {
            at: new Date(1e3 * e).toISOString(),
            landing_path: n
        };
        for (let [e, n, i] of I) {
            let o = i(t[n]);
            "string" == typeof o && (r[e] = o)
        }
        return r
    }

    function P(t, e) {
        return void 0 !== t && void 0 !== e && JSON.stringify(O(t)) === JSON.stringify(O(e))
    }

    function U(t) {
        let {
            first: e,
            signup: n,
            latest: r
        } = t, i = {
            v: 1
        };
        return void 0 !== t.epoch && (i.e = t.epoch), t.signedUp && (i.sd = 1), void 0 !== t.latestCampaign && (i.h = t.latestCampaign), e && (i.f = O(e)), n && (i.s = n === t.first ? "f" : n === t.latest ? "l" : O(n)), r && r !== e && (i.l = O(r)), encodeURIComponent(JSON.stringify(i))
    }

    function j() {
        var t;
        return (t = (0, r.readCookie)(o, document.cookie)) && /^[1-9][0-9]*$/.test(t) ? a(Number(t)) : void 0
    }

    function L() {
        try {
            let t, e;
            return t = function() {
                var t;
                let e = (0, r.readCookie)(i, document.cookie);
                if (!e || s(encodeURIComponent(e)) > 1024) return null;
                let n = JSON.parse(e);
                if (!C(n) || 1 !== n.v) return null;
                let o = a(n.e),
                    c = N(n.f);
                if (!c) return 1 === n.sd ? {
                    signedUp: !0,
                    epoch: o
                } : null;
                let u = N(n.l) ? ? c,
                    l = "f" === n.s ? c : "l" === n.s ? u : N(n.s);
                return {
                    first: c,
                    signup: l,
                    latest: u,
                    latestCampaign: "number" == typeof(t = n.h) && Number.isInteger(t) && t >= 0 && t <= 0xffffffff ? t : void 0,
                    signedUp: 1 === n.sd || void 0 !== l,
                    epoch: o
                }
            }(), e = j(), t && (void 0 === e || t.epoch === e) ? t : null
        } catch {
            return null
        }
    }
    let M = null,
        F = 0;

    function D() {
        let t = `${i}=`,
            e = document.cookie.split("; ").find(e => e.startsWith(t));
        return e && e.slice(t.length) || null
    }

    function H() {
        let t = D(),
            e = F;
        try {
            fetch("/api/acquisition", {
                method: "POST",
                credentials: "same-origin",
                cache: "no-store",
                keepalive: !0
            }).then(() => (function(t, e) {
                try {
                    M && F !== e && t !== M.value && D() === t && (null === M.value ? K(i, "", M.landing, y) : q(M.value, M.landing))
                } catch {}
            })(t, e), () => {})
        } catch {}
    }

    function q(t, e) {
        K(i, t, e, "max-age=7776000"), M = D() === t ? {
            value: t,
            landing: e
        } : null, F++, H()
    }

    function K(t, e, n, r) {
        let i = [`${t}=${e}`, "path=/", r],
            o = (0, c.pikaCookieDomain)(n.hostname);
        o && i.push(`domain=${o}`), i.push("SameSite=Lax"), "https:" === n.protocol && i.push("Secure"), document.cookie = i.join("; ")
    }

    function G() {
        let t = `${i}=`;
        return document.cookie.split("; ").some(e => e.startsWith(t))
    }

    function B(t) {
        if ("u" < typeof document) return null;
        let e = new URL(t);
        return (0, n.isStaticPublicPath)(e.pathname) ? null : e
    }

    function J(t) {
        if ("other" === (0, c.parseAdsRegion)((0, r.readCookie)(c.ADS_REGION_COOKIE, document.cookie))) return M = {
            value: null,
            landing: t
        }, F++, !!G() && (K(o, String(Math.max(Math.floor(Date.now() / 1e3), (j() ? ? 0) + 1)), t, "max-age=7862400"), K(i, "", t, y), H(), !0);
        return W(t), !1
    }

    function W(t) {
        G() && void 0 !== j() && !L() && K(i, "", t, y)
    }
    t.s(["captureAcquisition", 0, function(t, n) {
        try {
            let r, i = B(t);
            if (!i) return !1;
            let o = J(i);
            if (!(0, c.googleAdsRegion)()) return o;
            let a = function(t, n, r) {
                    let i = S(t.pathname);
                    if (!i) return null;
                    let o = {
                        at: r.toISOString(),
                        landing_path: i
                    };
                    for (let [e, , n] of T) {
                        let r = n(t.searchParams.get(e) ? ? void 0);
                        "string" == typeof r && (o[e] = r)
                    }
                    let s = function(t, n) {
                        let r;
                        if (!t || n.pathname === e.EMAIL_LINK_CONTINUE_PATH || n.searchParams.has(g) || n.searchParams.has(v) || new URLSearchParams(n.hash.slice(1)).has(v)) return;
                        try {
                            r = new URL(t)
                        } catch {
                            return
                        }
                        if ("https:" !== r.protocol && "http:" !== r.protocol) return;
                        let i = r.hostname.toLowerCase();
                        if (!(i === n.hostname.toLowerCase() || b.some(t => i === t || i.endsWith(`.${t}`))) && i !== function() {
                                try {
                                    return new URL("https://xrcfahrzkjpblmrsaknx.supabase.co").hostname.toLowerCase()
                                } catch {
                                    return
                                }
                            }()) return k(i)
                    }(n, t);
                    return s && (o.referrer_host = s), Object.keys(o).length > 2 ? o : null
                }(i, n, new Date),
                u = L(),
                p = u ? .latest ? ? u ? .first,
                h = a && !(u && (r = u.latest) && T.some(([t]) => void 0 !== a[t]) && (void 0 === u.latestCampaign ? T.every(([t]) => a[t] === r[t]) : A(a) === u.latestCampaign && T.every(([t]) => void 0 === r[t] || a[t] === r[t]))) ? a : void 0,
                f = i.searchParams.get(g) === e.SIGN_UP_KEY && !u ? .signedUp;
            if (!h && !f) return !1;
            let d = function(t) {
                let e = t.first && { ...t.first
                    },
                    n = P(t.latest, e) ? e : t.latest && { ...t.latest
                    },
                    r = P(t.signup, e) ? e : P(t.signup, n) ? n : t.signup && { ...t.signup
                    },
                    i = {
                        first: e,
                        signup: r,
                        latest: n,
                        latestCampaign: t.latestCampaign,
                        signedUp: t.signedUp,
                        epoch: t.epoch
                    },
                    o = U(i);
                for (let [t, e] of R) {
                    if (1024 >= s(o)) return o;
                    let n = i[l[t]];
                    if (!(!n || ("l" === t ? i.latest === i.first : "s" === t && (i.signup === i.first || i.signup === i.latest)))) {
                        if (null === e) i.signup = void 0;
                        else {
                            if (void 0 === n[e]) continue;
                            n === i.latest && "referrer_host" !== e && (i.latestCampaign ? ? = A(n)), delete n[e]
                        }
                        o = U(i)
                    }
                }
                return 1024 >= s(o) ? o : null
            }({
                first: u ? .first ? ? h,
                latest: h ? ? p,
                latestCampaign: h ? void 0 : u ? .latestCampaign,
                signup: u ? .signup ? ? (f ? p ? ? h : void 0),
                signedUp: !!u ? .signedUp || f,
                epoch: j()
            });
            if (!d) return !1;
            return q(d, i), !0
        } catch {
            return !1
        }
    }, "cleanedTouch", 0, function(t, e) {
        let n = S(t.landing_path);
        if (!n) return;
        let r = {
            at: e,
            landing_path: n
        };
        for (let [e, , n] of I) {
            let i = n(t[e]);
            void 0 !== i && (r[e] = i)
        }
        return r
    }, "forgetAcquisitionOutsideAdsRegion", 0, function(t) {
        try {
            let e = B(t);
            return !!e && J(e)
        } catch {
            return !1
        }
    }, "keepAcquisition", 0, function(t) {
        try {
            let e = B(t);
            if (!e) return;
            W(e), ((0, c.googleAdsRegion)() && L() || void 0 !== j()) && H()
        } catch {}
    }, "readAcquisition", 0, function() {
        try {
            if (!(0, c.googleAdsRegion)()) return;
            let t = L();
            if (!t ? .first) return;
            let e = {
                first_touch: t.first
            };
            return t.signup && (e.signup_touch = t.signup), e.latest_touch = t.latest ? ? t.first, e
        } catch {
            return
        }
    }], 767131)
}, 517221, t => {
    "use strict";
    var e = t.i(958666);
    let n = "pika_ads_region",
        r = "pika.art";

    function i(t) {
        return "us" === t || "other" === t ? t : null
    }
    t.s(["ADS_OPT_OUT_COOKIE", 0, "pika_ads_optout", "ADS_REGION_COOKIE", 0, n, "adsOptedOut", 0, function(t, e) {
        return t ? .trim() === "1" || "1" === e
    }, "googleAdsRegion", 0, function() {
        if ("u" < typeof document) return !1;
        try {
            return "us" === i((0, e.readCookie)(n, document.cookie))
        } catch {
            return !1
        }
    }, "parseAdsRegion", 0, i, "pikaCookieDomain", 0, function(t) {
        let e = t ? .toLowerCase();
        if (e) return e === r || e.endsWith(`.${r}`) ? `.${r}` : void 0
    }])
}, 575547, t => {
    "use strict";
    t.i(301016);
    var e = t.i(517221),
        n = t.i(38067);
    let r = ["client_id", "session_id", "session_number"],
        i = {},
        o = 0;

    function s() {
        window["ga-disable-G-7FM72SP0NE"] = !0
    }

    function a() {
        let t = window.gtag;
        return "function" != typeof t ? null : (0, e.googleAdsRegion)() ? t : (s(), null)
    }

    function c(t) {
        if ("string" == typeof t || "number" == typeof t) return String(t) || void 0
    }

    function u(t) {
        try {
            a() ? .("set", {
                user_id: t
            })
        } catch {}
    }
    t.s(["clearGoogleIdentity", 0, function() {
        o += 1, i = {}, u(null)
    }, "disableGoogleTag", 0, s, "googleIdentity", 0, function() {
        return { ...i
        }
    }, "primeGoogleIdentity", 0, function() {
        try {
            let t = a(),
                e = "G-7FM72SP0NE";
            if (!t || !e) return;
            let n = o += 1,
                s = {},
                u = r.length;
            for (let a of r) t("get", e, a, t => {
                n !== o || a in s || (s[a] = t, u -= 1, 0 === u && (i = function(t) {
                    let e = {},
                        n = c(t.client_id),
                        r = c(t.session_id),
                        i = function(t) {
                            if ("string" != typeof t && "number" != typeof t || "" === t) return;
                            let e = Number(t);
                            return Number.isFinite(e) ? e : void 0
                        }(t.session_number);
                    return void 0 !== n && (e.ga_client_id = n), void 0 !== r && (e.ga_session_id = r), void 0 !== i && (e.ga_session_number = i), e
                }(s)))
            })
        } catch {}
    }, "sendGooglePageView", 0, function({
        location: t,
        referrer: e
    }) {
        try {
            let r = a();
            if (!r || !t) return;
            let i = {
                page_location: t,
                page_referrer: e,
                page_title: n.PAGE_TITLE
            };
            r("set", i), r("event", "page_view", i)
        } catch {}
    }, "sendGoogleRegistration", 0, function() {
        try {
            let t = a(),
                e = "G-7FM72SP0NE";
            if (!t || !e) return !1;
            return t("event", "web_sign_up_success", {
                send_to: e
            }), !0
        } catch {
            return !1
        }
    }, "setGoogleUserId", 0, u])
}, 309821, t => {
    "use strict";
    t.i(301016);
    var e = t.i(758839);
    let n = "phc_x26FZR94e7rNEDxEK5xf3Bcpid53DQjpoY8ewdH6C4E9",
        r = !!n,
        i = !1;

    function o() {
        n && !i && (i = !0, e.default.init(n, {
            api_host: "https://us.i.posthog.com",
            defaults: "2026-05-30",
            person_profiles: "identified_only",
            enable_heatmaps: !0,
            capture_performance: {
                web_vitals: !1
            }
        }))
    }
    t.s(["captureExperimentExposure", 0, function(t) {
        if (r)
            for (let [n, r] of Object.entries(t)) e.default.capture("experiment_exposure", {
                experiment_key: n,
                arm: r
            })
    }, "captureFlagExposure", 0, function(t, n) {
        r && e.default.capture("experiment_exposure", {
            experiment_key: t,
            arm: n,
            $set: {
                [`experiment/${t}`]: n
            }
        })
    }, "identifyUser", 0, function(t, n = {}) {
        if (!r) return;
        let i = {};
        n.email && (i.email = n.email), n.displayName && (i.name = n.displayName), o(), e.default.identify(t, i)
    }, "initPostHog", 0, o, "resetAnalyticsIdentity", 0, function() {
        r && e.default.reset()
    }])
}, 445286, t => {
    "use strict";
    var e = t.i(958666),
        n = t.i(517221);
    let r = "_fbc",
        i = /^[A-Za-z0-9._-]{1,200}$/;

    function o() {
        let t = window.fbq;
        return "function" == typeof t ? t : null
    }

    function s() {
        try {
            o() ? .("consent", "revoke")
        } catch {}
    }

    function a() {
        let t = o();
        return t ? (0, n.googleAdsRegion)() ? t : (s(), null) : null
    }
    t.s(["ensureMetaClickId", 0, function(t, o = Date.now()) {
        try {
            if (!(0, n.googleAdsRegion)()) return;
            let s = new URL(t),
                a = s.searchParams.get("fbclid");
            if (!a || !i.test(a)) return;
            let c = (0, e.readCookie)(r, document.cookie);
            if (c ? .endsWith(`.${a}`)) return;
            let u = [`${r}=fb.1.${o}.${a}`, "path=/", "max-age=7776000"],
                l = (0, n.pikaCookieDomain)(s.hostname);
            l && u.push(`domain=${l}`), u.push("SameSite=Lax"), "https:" === s.protocol && u.push("Secure"), document.cookie = u.join("; ")
        } catch {}
    }, "metaIdentity", 0, function() {
        let t = {};
        try {
            let n = (0, e.readCookie)("_fbp", document.cookie),
                i = (0, e.readCookie)(r, document.cookie);
            n && (t.meta_fbp = n), i && (t.meta_fbc = i)
        } catch {}
        return t
    }, "revokeMetaPixel", 0, s, "sendMetaPageView", 0, function() {
        try {
            a() ? .("track", "PageView")
        } catch {}
    }, "sendMetaRegistration", 0, function(t) {
        try {
            a() ? .("track", "CompleteRegistration", {}, {
                eventID: `registration_${t}`
            })
        } catch {}
    }])
}, 38067, t => {
    "use strict";
    let e = new Set(["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "utm_source_platform", "utm_creative_format", "utm_marketing_tactic", "gclid", "gbraid", "wbraid", "gad_source", "gad_campaignid", "dclid"]),
        n = RegExp("@|%(?:25)*40", "i");

    function r(t) {
        return n.test(t)
    }

    function i(t) {
        try {
            let e = new URL(t);
            return "https:" === e.protocol || "http:" === e.protocol ? e : null
        } catch {
            return null
        }
    }
    t.s(["PAGE_TITLE", 0, "Pika", "looksLikeEmail", 0, r, "sanitizedPageLocation", 0, function(t) {
        let n = i(t);
        if (!n) return "";
        let o = new URLSearchParams;
        for (let [t, i] of n.searchParams) e.has(t) && !r(i) && o.append(t, i);
        let s = o.toString();
        return `${n.origin}${n.pathname}${s?`?${s}`:""}`
    }, "sanitizedReferrer", 0, function(t) {
        let e = i(t);
        return e ? `${e.origin}${e.pathname}` : ""
    }])
}, 864132, t => {
    "use strict";
    t.i(301016);
    let e = "pika.art",
        n = `https://${e}`;
    t.s(["APEX_HOST", 0, e, "APEX_ORIGIN", 0, n, "APP_ORIGIN", 0, "https://create.pika.art", "appUrl", 0, function(t) {
        let e = "https://create.pika.art".replace(/\/+$/, "") ? ? "";
        return `${e}${t}`
    }])
}, 51832, t => {
    "use strict";
    var e = t.i(301016),
        n = t.i(136263),
        r = function(t, e) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })(t, e)
        };

    function i(t, e) {
        if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }
    var o = function() {
        return (o = Object.assign || function(t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
                for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    };

    function s(t, e, n, r) {
        return new(n || (n = Promise))(function(i, o) {
            function s(t) {
                try {
                    c(r.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    c(r.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function c(t) {
                var e;
                t.done ? i(t.value) : ((e = t.value) instanceof n ? e : new n(function(t) {
                    t(e)
                })).then(s, a)
            }
            c((r = r.apply(t, e || [])).next())
        })
    }

    function a(t, e) {
        var n, r, i, o = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            },
            s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }), s;

        function a(a) {
            return function(c) {
                var u = [a, c];
                if (n) throw TypeError("Generator is already executing.");
                for (; s && (s = 0, u[0] && (o = 0)), o;) try {
                    if (n = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                    switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                        case 0:
                        case 1:
                            i = u;
                            break;
                        case 4:
                            return o.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            o.label++, r = u[1], u = [0];
                            continue;
                        case 7:
                            u = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                o = 0;
                                continue
                            }
                            if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                o.label = u[1];
                                break
                            }
                            if (6 === u[0] && o.label < i[1]) {
                                o.label = i[1], i = u;
                                break
                            }
                            if (i && o.label < i[2]) {
                                o.label = i[2], o.ops.push(u);
                                break
                            }
                            i[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    u = e.call(t, o)
                } catch (t) {
                    u = [6, t], r = 0
                } finally {
                    n = i = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function c(t, e, n) {
        if (n || 2 == arguments.length)
            for (var r, i = 0, o = e.length; i < o; i++) !r && i in e || (r || (r = Array.prototype.slice.call(e, 0, i)), r[i] = e[i]);
        return t.concat(r || Array.prototype.slice.call(e))
    }
    "function" == typeof SuppressedError && SuppressedError;
    var u, l = {
            exports: {}
        },
        p = function() {
            if (u) return l.exports;

            function t() {}
            return u = 1, t.prototype = {
                on: function(t, e, n) {
                    var r = this.e || (this.e = {});
                    return (r[t] || (r[t] = [])).push({
                        fn: e,
                        ctx: n
                    }), this
                },
                once: function(t, e, n) {
                    var r = this;

                    function i() {
                        r.off(t, i), e.apply(n, arguments)
                    }
                    return i._ = e, this.on(t, i, n)
                },
                emit: function(t) {
                    for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), r = 0, i = n.length; r < i; r++) n[r].fn.apply(n[r].ctx, e);
                    return this
                },
                off: function(t, e) {
                    var n = this.e || (this.e = {}),
                        r = n[t],
                        i = [];
                    if (r && e)
                        for (var o = 0, s = r.length; o < s; o++) r[o].fn !== e && r[o].fn._ !== e && i.push(r[o]);
                    return i.length ? n[t] = i : delete n[t], this
                }
            }, l.exports = t, l.exports.TinyEmitter = t, l.exports
        }(),
        h = function(t) {
            return null != t[1]
        },
        f = function(t) {
            var e = t.properties,
                n = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && 0 > e.indexOf(r) && (n[r] = t[r]);
                    if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(t); i < r.length; i++) 0 > e.indexOf(r[i]) && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]])
                    }
                    return n
                }(t, ["properties"]),
                r = function(t) {
                    return Object.entries(t).sort(function(t, e) {
                        var n = t[0],
                            r = e[0];
                        return n.localeCompare(r, void 0)
                    })
                };
            return JSON.stringify([r(n), r(void 0 === e ? {} : e)])
        },
        d = function(t) {
            return s(void 0, void 0, void 0, function() {
                var e;
                return a(this, function(n) {
                    var r;
                    switch (n.label) {
                        case 0:
                            e = f(t), n.label = 1;
                        case 1:
                            return n.trys.push([1, 3, , 4]), [4, (r = e, s(void 0, void 0, void 0, function() {
                                var t, e, n, i;
                                return a(this, function(o) {
                                    switch (o.label) {
                                        case 0:
                                            if (t = "u" > typeof globalThis && (null == (n = globalThis.crypto) ? void 0 : n.subtle) ? null == (i = globalThis.crypto) ? void 0 : i.subtle : void 0, "u" < typeof TextEncoder || !(null == t ? void 0 : t.digest) || "u" < typeof Uint8Array) throw Error("Hashing function not available");
                                            return e = (new TextEncoder).encode(r), [4, t.digest("SHA-256", e)];
                                        case 1:
                                            return [2, Array.from(new Uint8Array(o.sent())).map(function(t) {
                                                return t.toString(16).padStart(2, "0")
                                            }).join("")]
                                    }
                                })
                            }))];
                        case 2:
                            return [2, n.sent()];
                        case 3:
                            return n.sent(), [2, e];
                        case 4:
                            return [2]
                    }
                })
            })
        },
        m = function(t) {
            var e, n = t.clientKey,
                r = t.appName,
                i = t.connectionId,
                o = t.customHeaders,
                s = t.headerName,
                a = t.etag,
                c = t.isPost,
                u = ((e = {
                    accept: "application/json"
                })[(void 0 === s ? "authorization" : s).toLocaleLowerCase()] = n, e["unleash-sdk"] = "unleash-js-sdk:3.8.2", e["unleash-appname"] = r, e);
            return c && (u["content-type"] = "application/json"), a && (u["if-none-match"] = a), Object.entries(o || {}).filter(h).forEach(function(t) {
                var e = t[0],
                    n = t[1];
                return u[e.toLocaleLowerCase()] = n
            }), u["unleash-connection-id"] = i, u
        },
        g = function() {},
        v = function() {
            function t(t) {
                var e = t.onError,
                    n = t.onSent,
                    r = t.appName,
                    i = t.metricsInterval,
                    o = t.disableMetrics,
                    s = t.url,
                    a = t.clientKey,
                    c = t.fetch,
                    u = t.headerName,
                    l = t.customHeaders,
                    p = t.metricsIntervalInitial,
                    h = t.connectionId,
                    f = t.metricRegistry;
                this.onError = e, this.onSent = n || g, this.disabled = void 0 !== o && o, this.metricsInterval = 1e3 * i, this.metricsIntervalInitial = 1e3 * p, this.appName = r, this.url = s instanceof URL ? s : new URL(s), this.clientKey = a, this.bucket = this.createEmptyBucket(), this.fetch = c, this.headerName = u, this.customHeaders = void 0 === l ? {} : l, this.connectionId = h, this.metricRegistry = f
            }
            return t.prototype.start = function() {
                var t = this;
                if (this.disabled) return !1;
                this.setupMetricsFlushOnPageUnload(), "number" == typeof this.metricsInterval && this.metricsInterval > 0 && (this.metricsIntervalInitial > 0 ? setTimeout(function() {
                    t.startTimer(), t.sendMetrics()
                }, this.metricsIntervalInitial) : this.startTimer())
            }, t.prototype.stop = function() {
                this.timer && (clearInterval(this.timer), delete this.timer), this.removeMetricsFlushOnPageUnload()
            }, t.prototype.createEmptyBucket = function() {
                return {
                    start: new Date,
                    stop: null,
                    toggles: {}
                }
            }, t.prototype.getHeaders = function() {
                return m({
                    clientKey: this.clientKey,
                    appName: this.appName,
                    connectionId: this.connectionId,
                    customHeaders: this.customHeaders,
                    headerName: this.headerName,
                    isPost: !0
                })
            }, t.prototype.sendMetrics = function() {
                return s(this, arguments, void 0, function(t) {
                    var e, n, r, i = (void 0 === t ? {} : t).fireAndForget,
                        o = void 0 !== i && i;
                    return a(this, function(t) {
                        switch (t.label) {
                            case 0:
                                if (e = "".concat(this.url.toString().replace(/\/$/, ""), "/client/metrics"), n = this.getPayload(), this.bucketIsEmpty(n) && (!n.impactMetrics || 0 === n.impactMetrics.length)) return [2];
                                t.label = 1;
                            case 1:
                                return t.trys.push([1, 3, , 4]), [4, this.fetch(e, {
                                    cache: "no-cache",
                                    method: "POST",
                                    headers: this.getHeaders(),
                                    body: JSON.stringify(n),
                                    keepalive: o
                                })];
                            case 2:
                                return t.sent(), this.onSent(n), [3, 4];
                            case 3:
                                return console.error("Unleash: unable to send feature metrics", r = t.sent()), this.onError(r), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, t.prototype.count = function(t, e) {
                return !(this.disabled || !this.bucket) && (this.assertBucket(t), this.bucket.toggles[t][e ? "yes" : "no"]++, !0)
            }, t.prototype.countVariant = function(t, e) {
                return !(this.disabled || !this.bucket) && (this.assertBucket(t), this.bucket.toggles[t].variants[e] ? this.bucket.toggles[t].variants[e] += 1 : this.bucket.toggles[t].variants[e] = 1, !0)
            }, t.prototype.assertBucket = function(t) {
                if (this.disabled || !this.bucket) return !1;
                this.bucket.toggles[t] || (this.bucket.toggles[t] = {
                    yes: 0,
                    no: 0,
                    variants: {}
                })
            }, t.prototype.startTimer = function() {
                var t = this;
                this.timer = setInterval(function() {
                    t.sendMetrics()
                }, this.metricsInterval)
            }, t.prototype.bucketIsEmpty = function(t) {
                return 0 === Object.keys(t.bucket.toggles).length
            }, t.prototype.getPayload = function() {
                var t, e = o(o({}, this.bucket), {
                    stop: new Date
                });
                this.bucket = this.createEmptyBucket();
                var n = {
                    bucket: e,
                    appName: this.appName,
                    instanceId: "browser"
                };
                return n.impactMetrics = (null == (t = this.metricRegistry) ? void 0 : t.collect()) || [], n
            }, t.prototype.setupMetricsFlushOnPageUnload = function() {
                var t = this;
                "u" < typeof document || "u" < typeof window || "function" != typeof document.addEventListener || document.addEventListener("visibilitychange", this.flushMetricsOnPageUnload = function() {
                    "hidden" === document.visibilityState && t.sendMetrics({
                        fireAndForget: !0
                    })
                })
            }, t.prototype.removeMetricsFlushOnPageUnload = function() {
                this.flushMetricsOnPageUnload && (document.removeEventListener("visibilitychange", this.flushMetricsOnPageUnload), this.flushMetricsOnPageUnload = void 0)
            }, t
        }(),
        y = function() {
            function t() {
                this.store = new Map
            }
            return t.prototype.save = function(t, e) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(n) {
                        return this.store.set(t, e), [2]
                    })
                })
            }, t.prototype.get = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(e) {
                        return [2, this.store.get(t)]
                    })
                })
            }, t
        }(),
        b = function() {
            function t(t) {
                void 0 === t && (t = "unleash:repository"), this.prefix = t
            }
            return t.prototype.save = function(t, e) {
                return s(this, void 0, void 0, function() {
                    var n, r;
                    return a(this, function(i) {
                        n = JSON.stringify(e), r = "".concat(this.prefix, ":").concat(t);
                        try {
                            window.localStorage.setItem(r, n)
                        } catch (t) {
                            console.error(t)
                        }
                        return [2]
                    })
                })
            }, t.prototype.get = function(t) {
                try {
                    var e = "".concat(this.prefix, ":").concat(t),
                        n = window.localStorage.getItem(e);
                    return n ? JSON.parse(n) : void 0
                } catch (t) {
                    console.error(t)
                }
            }, t
        }(),
        $ = function() {
            var t;
            return "u" > typeof globalThis && (null == (t = globalThis.crypto) ? void 0 : t.randomUUID) ? globalThis.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" === t ? e : 3 & e | 8).toString(16)
            })
        },
        k = function() {
            function t() {}
            return t.prototype.generateEventId = function() {
                return $()
            }, t.prototype.createImpressionEvent = function(t, e, n, r, i, s) {
                var a = this.createBaseEvent(t, e, n, r, i);
                return s ? o(o({}, a), {
                    variant: s
                }) : a
            }, t.prototype.createBaseEvent = function(t, e, n, r, i) {
                return {
                    eventType: r,
                    eventId: this.generateEventId(),
                    context: t,
                    enabled: e,
                    featureName: n,
                    impressionData: i
                }
            }, t
        }();

    function _(t) {
        return void 0 !== t && !Number.isFinite(t)
    }

    function w(t) {
        return t ? Object.keys(t).sort().map(function(e) {
            return "".concat(e, "=").concat(t[e])
        }).join(",") : ""
    }

    function x(t) {
        var e = {};
        if (!t) return e;
        for (var n = 0, r = t.split(","); n < r.length; n++) {
            var i = r[n].split("="),
                o = i[0],
                s = i[1];
            e[o] = s
        }
        return e
    }
    var E = function(t) {
            return "buckets" in t
        },
        S = function() {
            function t(t) {
                this.opts = t, this.values = new Map
            }
            return t.prototype.inc = function(t, e) {
                var n;
                if (!_(t)) {
                    var r = null != t ? t : 1;
                    if (!(r <= 0)) {
                        var i = w(e),
                            o = null != (n = this.values.get(i)) ? n : 0;
                        this.values.set(i, o + r)
                    }
                }
            }, t.prototype.collect = function() {
                var t = Array.from(this.values.entries()).map(function(t) {
                    var e = t[0],
                        n = t[1];
                    return {
                        labels: x(e),
                        value: n
                    }
                });
                return this.values.clear(), 0 === t.length && t.push({
                    labels: {},
                    value: 0
                }), {
                    name: this.opts.name,
                    help: this.opts.help,
                    type: "counter",
                    samples: t
                }
            }, t
        }(),
        I = function() {
            function t(t) {
                this.opts = t, this.values = new Map;
                var e = Array.from(new Set((t.buckets && t.buckets.length > 0 ? t.buckets : [.005, .01, .025, .05, .1, .25, .5, 1, 2.5, 5, 10]).filter(function(t) {
                    return t !== 1 / 0
                }))).sort(function(t, e) {
                    return t - e
                });
                this.buckets = c(c([], e, !0), [1 / 0], !1)
            }
            return t.prototype.restore = function(t) {
                var e = w(t.labels),
                    n = {
                        count: t.count,
                        sum: t.sum,
                        buckets: new Map(t.buckets.map(function(t) {
                            return ["+Inf" === t.le ? 1 / 0 : t.le, t.count]
                        }))
                    };
                this.values.set(e, n)
            }, t.prototype.observe = function(t, e) {
                var n;
                if (!_(t)) {
                    var r = w(e),
                        i = this.values.get(r);
                    if (!i) {
                        for (var o = new Map, s = 0, a = this.buckets; s < a.length; s++) {
                            var c = a[s];
                            o.set(c, 0)
                        }
                        i = {
                            count: 0,
                            sum: 0,
                            buckets: o
                        }, this.values.set(r, i)
                    }
                    i.count++, i.sum += t;
                    for (var u = 0, l = this.buckets; u < l.length; u++)
                        if (t <= (c = l[u])) {
                            var p = null != (n = i.buckets.get(c)) ? n : 0;
                            i.buckets.set(c, p + 1)
                        }
                }
            }, t.prototype.collect = function() {
                var t = Array.from(this.values.entries()).map(function(t) {
                    var e = t[0],
                        n = t[1];
                    return {
                        labels: x(e),
                        count: n.count,
                        sum: n.sum,
                        buckets: Array.from(n.buckets.entries()).map(function(t) {
                            var e = t[0];
                            return {
                                le: e === 1 / 0 ? "+Inf" : e,
                                count: t[1]
                            }
                        })
                    }
                });
                return this.values.clear(), 0 === t.length && t.push({
                    labels: {},
                    count: 0,
                    sum: 0,
                    buckets: this.buckets.map(function(t) {
                        return {
                            le: t === 1 / 0 ? "+Inf" : t,
                            count: 0
                        }
                    })
                }), {
                    name: this.opts.name,
                    help: this.opts.help,
                    type: "histogram",
                    samples: t
                }
            }, t
        }(),
        T = function() {
            function t() {
                this.counters = new Map, this.histograms = new Map
            }
            return t.prototype.getCounter = function(t) {
                return this.counters.get(t)
            }, t.prototype.getHistogram = function(t) {
                return this.histograms.get(t)
            }, t.prototype.counter = function(t) {
                var e = t.name,
                    n = this.counters.get(e);
                return n || (n = new S(t), this.counters.set(e, n)), n
            }, t.prototype.histogram = function(t) {
                var e = t.name,
                    n = this.histograms.get(e);
                return n || (n = new I(t), this.histograms.set(e, n)), n
            }, t.prototype.collect = function() {
                var t = Array.from(this.counters.values()).map(function(t) {
                        return t.collect()
                    }),
                    e = Array.from(this.histograms.values()).map(function(t) {
                        return t.collect()
                    }),
                    n = c(c([], t, !0), e, !0).filter(function(t) {
                        return t.samples.length > 0
                    });
                return n.length > 0 ? n : []
            }, t.prototype.restore = function(t) {
                for (var e = this, n = 0; n < t.length; n++) ! function(t) {
                    switch (t.type) {
                        case "counter":
                            for (var n = e.counter({
                                    name: t.name,
                                    help: t.help
                                }), r = 0, i = t.samples; r < i.length; r++) {
                                var o = i[r];
                                "value" in o && n.inc(o.value, o.labels)
                            }
                            break;
                        case "histogram":
                            var s = t.samples.find(E);
                            if (s) {
                                var a = s.buckets.map(function(t) {
                                        return "+Inf" === t.le ? 1 / 0 : t.le
                                    }),
                                    c = e.histogram({
                                        name: t.name,
                                        help: t.help,
                                        buckets: a
                                    });
                                t.samples.filter(E).forEach(function(t) {
                                    c.restore(t)
                                })
                            }
                    }
                }(t[n])
            }, t
        }(),
        R = "error",
        C = "ready",
        A = "update",
        O = "impression",
        N = "warn",
        P = function(t) {
            function e(e, n, r) {
                var i = t.call(this) || this;
                return i.metricRegistry = e, i.appName = n, i.environment = r, i
            }
            return i(e, t), e.prototype.defineCounter = function(t, e) {
                t && e ? this.metricRegistry.counter({
                    name: t,
                    help: e,
                    labelNames: ["featureName", "appName", "environment"]
                }) : this.emit(N, "Counter name or help cannot be empty: ".concat(t, ", ").concat(e, "."))
            }, e.prototype.defineHistogram = function(t, e, n) {
                t && e ? this.metricRegistry.histogram({
                    name: t,
                    help: e,
                    labelNames: ["featureName", "appName", "environment"],
                    buckets: n
                }) : this.emit(N, "Histogram name or help cannot be empty: ".concat(t, ", ").concat(e, "."))
            }, e.prototype.incrementCounter = function(t, e) {
                var n = this.metricRegistry.getCounter(t);
                if (n) {
                    var r = {
                        appName: this.appName,
                        environment: this.environment
                    };
                    n.inc(e, r)
                } else this.emit(N, "Counter ".concat(t, " not defined, this counter will not be incremented."))
            }, e.prototype.observeHistogram = function(t, e) {
                var n = this.metricRegistry.getHistogram(t);
                if (n) {
                    var r = {
                        appName: this.appName,
                        environment: this.environment
                    };
                    n.observe(e, r)
                } else this.emit(N, "Histogram ".concat(t, " not defined, this histogram will not be updated."))
            }, e
        }(p.TinyEmitter),
        U = ["userId", "sessionId", "remoteAddress", "currentTime"],
        j = function(t) {
            return U.includes(t)
        },
        L = {
            name: "disabled",
            enabled: !1,
            feature_enabled: !1
        },
        M = "repo",
        F = "repoLastUpdateTimestamp",
        D = function() {
            try {
                if ("u" > typeof window && "fetch" in window) return fetch.bind(window);
                if ("fetch" in globalThis) return fetch.bind(globalThis)
            } catch (t) {
                console.error('Unleash failed to resolve "fetch"', t)
            }
        },
        H = function(t) {
            function e(e) {
                var n, r = e.storageProvider,
                    i = e.url,
                    s = e.clientKey,
                    a = e.disableRefresh,
                    c = e.refreshInterval,
                    u = e.metricsInterval,
                    l = e.metricsIntervalInitial,
                    p = e.disableMetrics,
                    h = e.appName,
                    f = e.environment,
                    d = void 0 === f ? "default" : f,
                    m = e.context,
                    g = e.fetch,
                    _ = void 0 === g ? D() : g,
                    w = e.createAbortController,
                    x = void 0 === w ? function() {
                        try {
                            if ("u" > typeof window && "AbortController" in window) return function() {
                                return new window.AbortController
                            };
                            if ("fetch" in globalThis) return function() {
                                return new globalThis.AbortController
                            }
                        } catch (t) {
                            console.error('Unleash failed to resolve "AbortController" factory', t)
                        }
                    }() : w,
                    E = e.bootstrap,
                    S = e.bootstrapOverride,
                    I = e.headerName,
                    C = void 0 === I ? "Authorization" : I,
                    A = e.customHeaders,
                    O = void 0 === A ? {} : A,
                    N = e.impressionDataAll,
                    U = e.usePOSTrequests,
                    j = e.experimental,
                    L = t.call(this) || this;
                if (L.toggles = [], L.etag = "", L.readyEventEmitted = !1, L.fetchedFromServer = !1, L.usePOSTrequests = !1, L.started = !1, !i) throw Error("url is required");
                if (!s) throw Error("clientKey is required");
                if (!h) throw Error("appName is required.");
                L.eventsHandler = new k, L.impressionDataAll = void 0 !== N && N, L.toggles = E && E.length > 0 ? E : [], L.url = i instanceof URL ? i : new URL(i), L.clientKey = s, L.headerName = C, L.customHeaders = O, L.storage = r || ("u" > typeof window ? new b : new y), L.refreshInterval = void 0 !== a && a ? 0 : 1e3 * (void 0 === c ? 30 : c), L.context = o({
                    appName: h,
                    environment: d
                }, m), L.usePOSTrequests = void 0 !== U && U, L.sdkState = "initializing";
                var M = null == j ? void 0 : j.metricsUrl;
                !M || M instanceof URL || (M = new URL(M)), L.experimental = o(o({}, j), {
                    metricsUrl: M
                }), (null == j ? void 0 : j.togglesStorageTTL) && (null == j ? void 0 : j.togglesStorageTTL) > 0 && (L.experimental.togglesStorageTTL = 1e3 * j.togglesStorageTTL), L.lastRefreshTimestamp = 0, L.ready = new Promise(function(t) {
                    L.init().then(t).catch(function(e) {
                        console.error(e), L.sdkState = "error", L.emit(R, e), L.lastError = e, t()
                    })
                }), _ || console.error('Unleash: You must either provide your own "fetch" implementation or run in an environment where "fetch" is available.'), x || console.error('Unleash: You must either provide your own "AbortController" implementation or run in an environment where "AbortController" is available.'), L.fetch = _, L.createAbortController = x, L.bootstrap = E && E.length > 0 ? E : void 0, L.bootstrapOverride = void 0 === S || S, L.connectionId = $(), L.metricRegistry = new T;
                var F = L.resolveEnvironment(s, d);
                return L.impactMetrics = new P(L.metricRegistry, h, F), L.metrics = new v({
                    onError: function(t) {
                        return L.emit(R, {
                            type: "metrics",
                            error: t
                        })
                    },
                    onSent: L.emit.bind(L, "sent"),
                    appName: h,
                    metricsInterval: void 0 === u ? 30 : u,
                    disableMetrics: void 0 !== p && p,
                    url: (null == (n = L.experimental) ? void 0 : n.metricsUrl) || L.url,
                    clientKey: s,
                    fetch: _,
                    headerName: C,
                    customHeaders: O,
                    metricsIntervalInitial: void 0 === l ? 2 : l,
                    connectionId: L.connectionId,
                    metricRegistry: L.metricRegistry
                }), L
            }
            return i(e, t), e.prototype.getAllToggles = function() {
                return c([], this.toggles, !0)
            }, e.prototype.isEnabled = function(t) {
                var e, n = this.toggles.find(function(e) {
                        return e.name === t
                    }),
                    r = !!n && n.enabled;
                if (this.metrics.count(t, r), (null == n ? void 0 : n.impressionData) || this.impressionDataAll) {
                    var i = this.eventsHandler.createImpressionEvent(this.context, r, t, "isEnabled", null != (e = null == n ? void 0 : n.impressionData) ? e : void 0);
                    this.emit(O, i)
                }
                return r
            }, e.prototype.getVariant = function(t) {
                var e, n = this.toggles.find(function(e) {
                        return e.name === t
                    }),
                    r = (null == n ? void 0 : n.enabled) || !1,
                    i = n ? n.variant : L;
                if (i.name && this.metrics.countVariant(t, i.name), this.metrics.count(t, r), (null == n ? void 0 : n.impressionData) || this.impressionDataAll) {
                    var s = this.eventsHandler.createImpressionEvent(this.context, r, t, "getVariant", null != (e = null == n ? void 0 : n.impressionData) ? e : void 0, i.name);
                    this.emit(O, s)
                }
                return o(o({}, i), {
                    feature_enabled: r
                })
            }, e.prototype.updateToggles = function() {
                return s(this, void 0, void 0, function() {
                    var t = this;
                    return a(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.timerRef || this.fetchedFromServer ? [4, this.fetchToggles()] : [3, 2];
                            case 1:
                                return e.sent(), [3, 4];
                            case 2:
                                return this.started ? [4, new Promise(function(e) {
                                    var n = function() {
                                        t.fetchToggles().then(function() {
                                            t.off(C, n), e()
                                        })
                                    };
                                    t.once(C, n)
                                })] : [3, 4];
                            case 3:
                                e.sent(), e.label = 4;
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.prototype.updateContext = function(t) {
                return s(this, void 0, void 0, function() {
                    var e;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return (t.appName || t.environment) && this.emit(N, "appName and environment are static. They can't be updated with updateContext."), e = {
                                    environment: this.context.environment,
                                    appName: this.context.appName,
                                    sessionId: this.context.sessionId
                                }, this.context = o(o({}, e), t), [4, this.updateToggles()];
                            case 1:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.prototype.getContext = function() {
                return o({}, this.context)
            }, e.prototype.setContextField = function(t, e) {
                return s(this, void 0, void 0, function() {
                    var n, r, i;
                    return a(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return j(t) ? this.context = o(o({}, this.context), ((r = {})[t] = e, r)) : (n = o(o({}, this.context.properties), ((i = {})[t] = e, i)), this.context = o(o({}, this.context), {
                                    properties: n
                                })), [4, this.updateToggles()];
                            case 1:
                                return s.sent(), [2]
                        }
                    })
                })
            }, e.prototype.removeContextField = function(t) {
                return s(this, void 0, void 0, function() {
                    var e;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return j(t) ? this.context = o(o({}, this.context), ((e = {})[t] = void 0, e)) : "object" == typeof this.context.properties && delete this.context.properties[t], [4, this.updateToggles()];
                            case 1:
                                return n.sent(), [2]
                        }
                    })
                })
            }, e.prototype.setReady = function() {
                this.readyEventEmitted = !0, this.emit(C)
            }, e.prototype.init = function() {
                return s(this, void 0, void 0, function() {
                    var t, e, n;
                    return a(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.resolveSessionId()];
                            case 1:
                                return t = r.sent(), this.context = o({
                                    sessionId: t
                                }, this.context), [4, this.storage.get(M)];
                            case 2:
                                return e = r.sent() || [], n = this, [4, this.getLastRefreshTimestamp()];
                            case 3:
                                return n.lastRefreshTimestamp = r.sent(), this.bootstrap && (this.bootstrapOverride || 0 === e.length) ? [4, this.storage.save(M, this.bootstrap)] : [3, 6];
                            case 4:
                                return r.sent(), this.toggles = this.bootstrap, this.sdkState = "healthy", [4, this.storeLastRefreshTimestamp()];
                            case 5:
                                return r.sent(), this.setReady(), [3, 7];
                            case 6:
                                this.toggles = e, r.label = 7;
                            case 7:
                                return this.sdkState = "healthy", this.emit("initialized"), [2]
                        }
                    })
                })
            }, e.prototype.start = function() {
                return s(this, void 0, void 0, function() {
                    var t, e = this;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return this.started = !0, this.timerRef ? (console.error("Unleash SDK has already started, if you want to restart the SDK you should call client.stop() before starting again."), [2]) : [4, this.ready];
                            case 1:
                                return n.sent(), this.metrics.start(), t = this.refreshInterval, [4, this.initialFetchToggles()];
                            case 2:
                                return n.sent(), t > 0 && (this.timerRef = setInterval(function() {
                                    return e.fetchToggles()
                                }, t)), [2]
                        }
                    })
                })
            }, e.prototype.stop = function() {
                this.timerRef && (clearInterval(this.timerRef), this.timerRef = void 0), this.metrics.stop()
            }, e.prototype.isReady = function() {
                return this.readyEventEmitted
            }, e.prototype.getError = function() {
                return "error" === this.sdkState ? this.lastError : void 0
            }, e.prototype.sendMetrics = function() {
                return this.metrics.sendMetrics()
            }, e.prototype.resolveSessionId = function() {
                return s(this, void 0, void 0, function() {
                    var t;
                    return a(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.context.sessionId ? [2, this.context.sessionId] : [4, this.storage.get("sessionId")];
                            case 1:
                                return (t = e.sent()) ? [3, 3] : (t = Math.floor(1e9 * Math.random()), [4, this.storage.save("sessionId", t.toString(10))]);
                            case 2:
                                e.sent(), e.label = 3;
                            case 3:
                                return [2, t.toString(10)]
                        }
                    })
                })
            }, e.prototype.getHeaders = function() {
                return m({
                    clientKey: this.clientKey,
                    connectionId: this.connectionId,
                    appName: this.context.appName,
                    customHeaders: this.customHeaders,
                    headerName: this.headerName,
                    etag: this.etag,
                    isPost: this.usePOSTrequests
                })
            }, e.prototype.storeToggles = function(t) {
                return s(this, void 0, void 0, function() {
                    return a(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.toggles = t, this.emit(A), [4, this.storage.save(M, t)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.isTogglesStorageTTLEnabled = function() {
                var t;
                return !!((null == (t = this.experimental) ? void 0 : t.togglesStorageTTL) && this.experimental.togglesStorageTTL > 0)
            }, e.prototype.isUpToDate = function() {
                if (!this.isTogglesStorageTTLEnabled()) return !1;
                var t, e = Date.now(),
                    n = (null == (t = this.experimental) ? void 0 : t.togglesStorageTTL) || 0;
                return this.lastRefreshTimestamp > 0 && this.lastRefreshTimestamp <= e && e - this.lastRefreshTimestamp <= n
            }, e.prototype.getLastRefreshTimestamp = function() {
                return s(this, void 0, void 0, function() {
                    var t, e;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return this.isTogglesStorageTTLEnabled() ? [4, this.storage.get(F)] : [3, 3];
                            case 1:
                                return t = n.sent(), [4, d(this.context)];
                            case 2:
                                return e = n.sent(), [2, (null == t ? void 0 : t.key) === e ? t.timestamp : 0];
                            case 3:
                                return [2, 0]
                        }
                    })
                })
            }, e.prototype.storeLastRefreshTimestamp = function() {
                return s(this, void 0, void 0, function() {
                    var t, e;
                    return a(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return this.isTogglesStorageTTLEnabled() ? (this.lastRefreshTimestamp = Date.now(), e = {}, [4, d(this.context)]) : [3, 3];
                            case 1:
                                return e.key = n.sent(), e.timestamp = this.lastRefreshTimestamp, t = e, [4, this.storage.save(F, t)];
                            case 2:
                                n.sent(), n.label = 3;
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.initialFetchToggles = function() {
                if (!this.isUpToDate()) return this.fetchToggles();
                this.fetchedFromServer || (this.fetchedFromServer = !0, this.setReady())
            }, e.prototype.fetchToggles = function() {
                return s(this, void 0, void 0, function() {
                    var t, e, n, r, i, o, s, c, u;
                    return a(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!this.fetch) return [3, 9];
                                this.abortController && !this.abortController.signal.aborted && this.abortController.abort(), this.abortController = null == (u = this.createAbortController) ? void 0 : u.call(this), t = this.abortController ? this.abortController.signal : void 0, a.label = 1;
                            case 1:
                                var l, p, f;
                                return a.trys.push([1, 7, 8, 9]), n = (e = this.usePOSTrequests) ? this.url : (l = this.url, p = this.context, f = new URL(l.toString()), Object.entries(p).filter(h).forEach(function(t) {
                                    var e = t[0],
                                        n = t[1];
                                    "properties" === e && n ? Object.entries(n).filter(h).forEach(function(t) {
                                        var e = t[0],
                                            n = t[1];
                                        return f.searchParams.append("properties[".concat(e, "]"), n)
                                    }) : f.searchParams.append(e, n)
                                }), f), r = e ? "POST" : "GET", i = e ? JSON.stringify({
                                    context: this.context
                                }) : void 0, [4, this.fetch(n.toString(), {
                                    method: r,
                                    cache: "no-cache",
                                    headers: this.getHeaders(),
                                    body: i,
                                    signal: t
                                })];
                            case 2:
                                return o = a.sent(), "error" === this.sdkState && o.status < 400 && (this.sdkState = "healthy", this.emit("recovered")), o.ok ? (this.etag = o.headers.get("ETag") || "", [4, o.json()]) : [3, 5];
                            case 3:
                                return s = a.sent(), [4, this.storeToggles(s.toggles)];
                            case 4:
                                return a.sent(), "healthy" !== this.sdkState && (this.sdkState = "healthy"), this.fetchedFromServer || (this.fetchedFromServer = !0, this.setReady()), this.storeLastRefreshTimestamp(), [3, 6];
                            case 5:
                                304 === o.status ? this.storeLastRefreshTimestamp() : (console.error("Unleash: Fetching feature toggles did not have an ok response"), this.sdkState = "error", this.emit(R, {
                                    type: "HttpError",
                                    code: o.status
                                }), this.lastError = {
                                    type: "HttpError",
                                    code: o.status
                                }), a.label = 6;
                            case 6:
                                return [3, 9];
                            case 7:
                                return "object" == typeof(c = a.sent()) && null !== c && "name" in c && "AbortError" === c.name || (console.error("Unleash: unable to fetch feature toggles", c), this.sdkState = "error", this.emit(R, {
                                    type: "fetch-toggles",
                                    error: c
                                }), this.lastError = c), [3, 9];
                            case 8:
                                return this.abortController = null, [7];
                            case 9:
                                return [2]
                        }
                    })
                })
            }, e.prototype.resolveEnvironment = function(t, e) {
                return function(t) {
                    var e = t.indexOf(":");
                    if (-1 !== e) {
                        var n = t.slice(e + 1),
                            r = n.lastIndexOf(".");
                        if (-1 !== r) return n.slice(0, r)
                    }
                }(t) || e
            }, e
        }(p.TinyEmitter),
        q = t.i(309821),
        K = t.i(164715);
    let G = e.default.env.NEXT_PUBLIC_UNLEASH_URL || "/unleash",
        B = "*:production.122cb859555bfc56064d83ee97a8271aad29a8d1b69b78ea17b62103",
        J = new H({
            url: new URL(G, window.location.origin),
            clientKey: B,
            appName: "creation-web"
        }),
        W = !1,
        z = !1,
        V = 0,
        Y = new Set,
        X = new Map;

    function Z() {
        for (let t of Y) t()
    }

    function Q(t) {
        return J ? (J.on(C, t), J.on(A, t), J.on(R, t), Y.add(t), () => {
            Y.delete(t), J.off(C, t), J.off(A, t), J.off(R, t)
        }) : () => {}
    }
    let tt = new Set;
    t.s(["initFeatureFlags", 0, function() {
        if (!J || W) return;
        if (W = !0, J.on(R, () => {
                z = !0
            }), !(0, K.isAuthConfigured)()) return void J.start();
        let t = !0;
        (0, K.createClient)().auth.onAuthStateChange((e, n) => {
            let r = function(t) {
                if (!t) return {};
                let e = Math.floor(Date.parse(t.created_at) / 1e3);
                return {
                    userId: t.id,
                    properties: Number.isNaN(e) ? void 0 : {
                        accountCreatedAt: String(e)
                    }
                }
            }(n ? .user);
            if (t) {
                t = !1, J.updateContext(r).finally(() => J.start());
                return
            }
            r.userId !== J.getContext().userId && (V += 1, Z(), J.updateContext(r).finally(() => void(V += -1, Z())))
        })
    }, "useExperimentVariant", 0, function(t) {
        let e = (0, n.useSyncExternalStore)(Q, () => {
            if (!J ? .isReady()) return null;
            let e = J.getVariant(t);
            return e.enabled ? e.name : null
        }, () => null);
        return (0, n.useEffect)(() => {
            null === e || tt.has(`${t}:${e}`) || (tt.add(`${t}:${e}`), (0, q.captureFlagExposure)(t, e))
        }, [t, e]), e
    }, "useFeatureFlag", 0, function(t, e) {
        return (0, n.useSyncExternalStore)(Q, () => J ? .isReady() ? J.isEnabled(t) : e, () => e)
    }, "useFeatureFlagOrDeleted", 0, function(t) {
        return (0, n.useEffect)(() => (function(t) {
            if (!J || !B || X.has(t)) return;
            X.set(t, "pending");
            let e = new URL(G, window.location.origin);
            e.pathname = `${e.pathname.replace(/\/$/,"")}/features/${encodeURIComponent(t)}`, e.searchParams.set("appName", "creation-web"), fetch(e, {
                headers: {
                    Authorization: B
                }
            }).then(t => 404 === t.status ? "missing" : t.ok ? "exists" : "unknown").catch(() => "unknown").then(e => {
                X.set(t, e), Z()
            })
        })(t), [t]), (0, n.useSyncExternalStore)(Q, () => {
            let e = X.get(t);
            return !J || "missing" === e || "unknown" === e || (J.isReady() ? "exists" === e && J.isEnabled(t) : z)
        }, () => !B)
    }, "useFeatureFlagsSettled", 0, function() {
        return (0, n.useSyncExternalStore)(Q, () => !J || z || J.isReady() && 0 === V, () => !B)
    }], 51832)
}, 344805, t => {
    "use strict";
    let e = ["/privacy-policy", "/terms-of-service", "/acceptable-use-policy"],
        n = new Set([...e, "/robots.txt", "/sitemap.xml", "/llms.txt", "/blog/feed.xml"]),
        r = ["/pricing", "/use-cases", "/model", "/experiments", "/ai-self", "/ai-trendmaker", "/pikaffects", "/directors-suite", "/image-studio", "/pika-h3-flex", "/mcp", "/contact", "/careers", "/blog", "/learn", "/faq", "/support", "/press", "/privacy-choices", ...e],
        i = new Set(["/", "/projects", "/library", "/jobs", "/account", "/subscription"]),
        o = ["/pika-fonts", "/icons", "/home", "/apps", "/discover", "/invite", ...r];

    function s(t) {
        return n.has(t)
    }
    t.s(["isPublic", 0, function(t) {
        return !!(i.has(t) || s(t)) || o.some(e => t === e || t.startsWith(`${e}/`))
    }, "isStaticPublicPath", 0, s])
}, 958666, t => {
    "use strict";
    let e = "welcome";
    t.s(["ANONYMOUS_MARK", 0, "1", "RETURNING_COOKIE", 0, "pika-returning", "WELCOME_PARAM", 0, e, "WELCOME_SEEN_COOKIE", 0, "pika-welcome-seen", "isWelcomeReplay", 0, function(t) {
        return "1" === t.get(e)
    }, "markSaysReturning", 0, function(t, e) {
        return !!t && ("1" === t || (e ? t === `${e}:${1}` : t.endsWith(":1")))
    }, "readCookie", 0, function(t, e) {
        let n = `${t}=`;
        for (let t of e.split("; "))
            if (t.startsWith(n)) return decodeURIComponent(t.slice(n.length));
        return null
    }])
}, 829824, (t, e, n) => {
    e.exports = t.r(64593)
}]);