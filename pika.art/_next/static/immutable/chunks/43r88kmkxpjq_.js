(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 745098, e => {
    "use strict";
    var t = e.i(52644),
        r = e.i(136263),
        i = e.i(836306);
    let a = "composer-draft-migrated:pikaframes-split",
        n = "composer-draft-migrated:pika-2-5-i2v",
        l = "composer-draft-migrated:pika-2-5-omni",
        o = "composer-draft:pika-2-5:",
        s = [
            ["source", "source"],
            ["prompt", "prompt"],
            ["duration", "duration"],
            ["resolution", "resolution"]
        ],
        u = [
            ["keyframes", "keyframes"],
            ["prompt", "frame-prompt"],
            ["duration", "frame-duration"],
            ["resolution", "resolution"]
        ];

    function d(e) {
        return u.some(([t]) => null !== e.getItem(`composer-draft:pika-2-5-keyframe:${t}`))
    }
    let c = "composer-draft-migrated:image-expand",
        f = ["source", "ratio", "resolution", "direction"],
        m = "composer-draft-migrated:seedance-source",
        p = ["seedance-2-5", "seedance-2", "seedance-2-mini"];

    function g(e) {
        if (null === e) return [];
        try {
            let t = JSON.parse(e);
            return Array.isArray(t) ? t : []
        } catch {
            return []
        }
    }

    function h(e) {
        if ("object" != typeof e || null === e) return null;
        let {
            url: t
        } = e;
        return "string" == typeof t ? t : null
    }
    let v = "composer-draft-migrated:reframe-anything";
    try {
        var x = window.sessionStorage;
        for (let {
                done: e,
                renames: t
            } of [{
                done: "composer-draft-migrated:audio-voice",
                renames: [
                    ["create-audio", "create-voice"],
                    ["create-music", "create-audio"]
                ]
            }, {
                done: "composer-draft-migrated:extend-video",
                renames: [
                    ["expand-video", "extend-video"]
                ]
            }, {
                done: "composer-draft-migrated:veo-3-1",
                renames: [
                    ["veo-3", "veo-3-1"]
                ]
            }, {
                done: "composer-draft-migrated:motion-transfer",
                renames: [
                    ["kling-3-motion", "motion-transfer"]
                ]
            }, {
                done: "composer-draft-migrated:create-speech",
                renames: [
                    ["create-voice", "create-speech"]
                ]
            }, {
                done: "composer-draft-migrated:swap-anything",
                renames: [
                    ["reskin-video", "swap-anything"]
                ]
            }, {
                done: "composer-draft-migrated:kling-4",
                renames: [
                    ["kling-3", "kling-4"]
                ]
            }])
            if (null === x.getItem(e)) {
                for (let [e, r] of t) {
                    let t = `composer-draft:${e}:`;
                    for (let e of Array.from({
                            length: x.length
                        }, (e, t) => x.key(t))) {
                        if (null === e || !e.startsWith(t)) continue;
                        let i = x.getItem(e);
                        null !== i && (x.setItem(`composer-draft:${r}:${e.slice(t.length)}`, i), x.removeItem(e))
                    }
                }
                x.setItem(e, "1")
            }! function(e) {
            if (null !== e.getItem(n)) return;
            let t = Array.from({
                    length: e.length
                }, (t, r) => e.key(r)).some(e => e ? .startsWith(o)),
                r = !1;
            for (let [i, a] of s) {
                let n = `composer-draft:pika-2-5-i2v:${i}`,
                    l = e.getItem(n);
                if (null === l) continue;
                r = !0;
                let o = `composer-draft:pika-2-5:${a}`;
                t || null !== e.getItem(o) || e.setItem(o, l), e.removeItem(n)
            }
            let i = "composer-draft:pika-2-5:workflow";
            !r || t || null !== e.getItem(i) || d(e) || e.setItem(i, JSON.stringify("omni")), e.setItem(n, "1")
        }(x),
        function(e) {
            if (null !== e.getItem(l)) return;
            let t = "composer-draft:pika-2-5:mode",
                r = e.getItem(t);
            if (null !== r) {
                let i = "composer-draft:pika-2-5:workflow";
                null === e.getItem(i) && (r === JSON.stringify("text") && e.removeItem("composer-draft:pika-2-5:source"), d(e) || e.setItem(i, JSON.stringify("omni"))), e.removeItem(t)
            }
            e.setItem(l, "1")
        }(x),
        function(e) {
            if (null !== e.getItem(a)) return;
            let t = ["keyframes", "frame-prompt", "frame-duration"].some(t => null !== e.getItem(`${o}${t}`));
            for (let [r, i] of u) {
                let a = `${o}${i}`,
                    n = `composer-draft:pika-2-5-keyframe:${r}`,
                    l = e.getItem(a);
                t && null !== l && null === e.getItem(n) && e.setItem(n, l), "resolution" !== i && e.removeItem(a)
            }
            e.removeItem(`${o}workflow`), e.setItem(a, "1")
        }(x),
        function(e) {
            if (null !== e.getItem(c)) return;
            let t = Array.from({
                    length: e.length
                }, (t, r) => e.key(r)).some(e => e ? .startsWith("composer-draft:edit-image:")),
                r = !1;
            for (let i of f) {
                let a = `composer-draft:image-expand:${i}`,
                    n = e.getItem(a);
                null !== n && (r = !0, t || e.setItem(`composer-draft:edit-image:${i}`, n), e.removeItem(a))
            }
            e.removeItem("composer-draft:image-expand:quality"), r && !t && e.setItem("composer-draft:edit-image:mode", JSON.stringify("expand")), e.setItem(c, "1")
        }(x),
        function(e) {
            if (null === e.getItem(m)) {
                for (let t of p) {
                    let r = `composer-draft:${t}:source`,
                        i = e.getItem(r);
                    if (null === i) continue;
                    let a = e.getItem(`composer-draft:${t}:mode`) === JSON.stringify("edit"),
                        n = g(i);
                    if (a && n.length > 0) {
                        let r = `composer-draft:${t}:videos`,
                            i = g(e.getItem(r)),
                            a = new Set(i.map(h));
                        e.setItem(r, JSON.stringify([...n.filter(e => {
                            let t = h(e);
                            return null === t || !a.has(t)
                        }), ...i]))
                    }
                    e.removeItem(r)
                }
                e.setItem(m, "1")
            }
        }(x),
        function(e) {
            if (null !== e.getItem(v)) return;
            let t = Array.from({
                length: e.length
            }, (t, r) => e.key(r)).filter(e => null !== e);
            for (let r of new Set(t.flatMap(e => {
                    let t = e.match(/^((?:project|workspace)-draft:[^:]+:)?composer-draft:resize-images:/);
                    return t ? [t[1] ? ? ""] : []
                }))) {
                let a = `${r}${i.RESIZE_IMAGE_DRAFT_PREFIX}`,
                    n = `${r}${i.SMART_RESIZE_DRAFT_PREFIX}`,
                    l = t.some(e => e.startsWith(n)),
                    o = i.RESIZE_IMAGE_DRAFT_FIELDS.some(([t]) => null !== e.getItem(`composer-draft-seed:${a}${t}`));
                for (let [t, r] of i.RESIZE_IMAGE_DRAFT_FIELDS) {
                    let i = `${a}${t}`,
                        s = `${n}${r}`,
                        u = e.getItem(i),
                        d = `composer-draft-seed:${i}`;
                    null !== u && (!l || o) && (e.setItem(s, u), null !== e.getItem(d) && e.setItem(`composer-draft-seed:${s}`, "1")), e.removeItem(i), e.removeItem(d)
                }
            }
            e.setItem(v, "1")
        }(x)
    } catch {}
    let y = (0, r.createContext)({
        signedIn: !0,
        userId: null
    });
    e.s(["SessionProvider", 0, function({
        signedIn: e,
        userId: i = null,
        children: a
    }) {
        let n = (0, r.useMemo)(() => ({
            signedIn: e,
            userId: i
        }), [e, i]);
        return (0, t.jsx)(y.Provider, {
            value: n,
            children: a
        })
    }, "useSignedIn", 0, function() {
        return (0, r.useContext)(y).signedIn
    }, "useUserId", 0, function() {
        return (0, r.useContext)(y).userId
    }], 745098)
}, 836306, e => {
    "use strict";
    e.s(["RESIZE_IMAGE_DRAFT_FIELDS", 0, [
        ["source", "videos"],
        ["image-model", "image-model"],
        ["ratio", "image-ratio"],
        ["resolution", "image-resolution"],
        ["quality", "image-quality"],
        ["format", "image-format"],
        ["prompt", "image-prompt"],
        ["runs", "runs"]
    ], "RESIZE_IMAGE_DRAFT_PREFIX", 0, "composer-draft:resize-images:", "SMART_RESIZE_DRAFT_PREFIX", 0, "composer-draft:smart-resize:"])
}, 121121, 943187, e => {
    "use strict";
    let t = "data-composite-item-active";
    e.s(["ACTIVE_COMPOSITE_ITEM", 0, t], 121121);
    var r = e.i(136263),
        i = e.i(248134),
        a = e.i(905167),
        n = e.i(591074),
        l = e.i(48164),
        o = e.i(33609),
        s = e.i(599543),
        u = e.i(858049),
        d = e.i(885948),
        c = e.i(83054);
    let f = [];
    var m = e.i(844145),
        p = e.i(782655),
        g = e.i(986716),
        h = e.i(52644);
    e.s(["CompositeRoot", 0, function(e) {
        let {
            render: v,
            className: x,
            style: y,
            refs: I = i.EMPTY_ARRAY,
            props: b = i.EMPTY_ARRAY,
            state: R = i.EMPTY_OBJECT,
            stateAttributesMapping: k,
            highlightedIndex: E,
            onHighlightedIndexChange: C,
            orientation: _,
            grid: A,
            loopFocus: O,
            onLoop: S,
            enableHomeAndEndKeys: w,
            onMapChange: T,
            stopEventPropagation: M = !0,
            rootRef: P,
            disabledIndices: $,
            modifierKeys: z,
            highlightItemOnHover: N = !1,
            tag: L = "div",
            ...W
        } = e, {
            props: D,
            highlightedIndex: F,
            onHighlightedIndexChange: j,
            elementsRef: K,
            onMapChange: Y,
            relayKeyboardEvent: H
        } = function(e) {
            let {
                loopFocus: i = !0,
                orientation: a = "both",
                grid: m,
                onLoop: p,
                direction: g,
                highlightedIndex: h,
                onHighlightedIndexChange: v,
                rootRef: x,
                enableHomeAndEndKeys: y = !1,
                stopEventPropagation: I = !1,
                disabledIndices: b,
                modifierKeys: R = f
            } = e, [k, E] = r.useState(0), C = null != m, _ = r.useRef(null), A = (0, o.useMergedRefs)(_, x), O = r.useRef([]), S = r.useRef(!1), w = h ? ? k, T = (0, l.useStableCallback)((e, t = !1) => {
                if ((v ? ? E)(e), t) {
                    let t = O.current[e];
                    (0, u.scrollIntoViewIfNeeded)(_.current, t, g, a)
                }
            }), M = (0, l.useStableCallback)(e => {
                if (0 === e.size || S.current) return;
                S.current = !0;
                let r = Array.from(e.keys()),
                    i = r.find(e => e ? .hasAttribute(t)) ? ? null,
                    n = i ? r.indexOf(i) : -1;
                if (-1 !== n) T(n);
                else if ((0, d.isListIndexDisabled)(r, w, b)) {
                    let e = (0, d.findNonDisabledListIndex)(r, {
                        disabledIndices: b
                    });
                    (0, d.isIndexOutOfListBounds)(r, e) || T(e)
                }(0, u.scrollIntoViewIfNeeded)(_.current, i, g, a)
            });
            (0, s.useIsoLayoutEffect)(() => {
                if (null == b || null != h || !S.current) return;
                let e = O.current;
                if ((0, d.isListIndexDisabled)(e, w, b)) {
                    let t = (0, d.findNonDisabledListIndex)(e, {
                        disabledIndices: b
                    });
                    (0, d.isIndexOutOfListBounds)(e, t) || T(t)
                }
            }, [b, h, w, O, T]);
            let P = (0, l.useStableCallback)((e, t, r) => p ? p(e, t, r, O) : r),
                $ = (0, l.useStableCallback)(e => {
                    let t = y ? u.COMPOSITE_KEYS : u.ARROW_KEYS;
                    if (!t.has(e.key) || function(e, t) {
                            for (let r of u.MODIFIER_KEYS.values())
                                if (!t.includes(r) && e.getModifierState(r)) return !0;
                            return !1
                        }(e, R) || !_.current) return;
                    let r = "rtl" === g,
                        l = r ? u.ARROW_LEFT : u.ARROW_RIGHT,
                        o = {
                            horizontal: l,
                            vertical: u.ARROW_DOWN,
                            both: l
                        }[a],
                        s = r ? u.ARROW_RIGHT : u.ARROW_LEFT,
                        f = {
                            horizontal: s,
                            vertical: u.ARROW_UP,
                            both: s
                        }[a],
                        h = (0, c.getTarget)(e.nativeEvent);
                    if (null != h && (0, u.isNativeInput)(h) && !(0, n.isElementDisabled)(h)) {
                        let t = h.selectionStart,
                            r = h.selectionEnd,
                            i = h.value ? ? "";
                        if (null == t || e.shiftKey || t !== r || e.key !== f && t < i.length || e.key !== o && t > 0) return
                    }
                    let v = w,
                        x = (0, d.getMinListIndex)(O, b),
                        k = (0, d.getMaxListIndex)(O, b);
                    null != m && (v = m({
                        disabledIndices: b,
                        elementsRef: O,
                        event: e,
                        highlightedIndex: w,
                        loopFocus: i,
                        maxIndex: k,
                        minIndex: x,
                        onLoop: P,
                        orientation: a,
                        rtl: r
                    }));
                    let E = {
                            horizontal: [l],
                            vertical: [u.ARROW_DOWN],
                            both: [l, u.ARROW_DOWN]
                        }[a],
                        A = {
                            horizontal: [s],
                            vertical: [u.ARROW_UP],
                            both: [s, u.ARROW_UP]
                        }[a],
                        S = C ? t : ({
                            horizontal: y ? u.HORIZONTAL_KEYS_WITH_EXTRA_KEYS : u.HORIZONTAL_KEYS,
                            vertical: y ? u.VERTICAL_KEYS_WITH_EXTRA_KEYS : u.VERTICAL_KEYS,
                            both: t
                        })[a];
                    y && (e.key === u.HOME ? v = x : e.key === u.END && (v = k)), v === w && (E.includes(e.key) || A.includes(e.key)) && (i && v === k && E.includes(e.key) ? (v = x, p && (v = p(e, w, v, O))) : i && v === x && A.includes(e.key) ? (v = k, p && (v = p(e, w, v, O))) : v = (0, d.findNonDisabledListIndex)(O.current, {
                        startingIndex: v,
                        decrement: A.includes(e.key),
                        disabledIndices: b
                    })), v === w || (0, d.isIndexOutOfListBounds)(O.current, v) || (I && e.stopPropagation(), S.has(e.key) && e.preventDefault(), T(v, !0), queueMicrotask(() => {
                        O.current[v] ? .focus()
                    }))
                });
            return {
                props: {
                    ref: A,
                    onFocus(e) {
                        let t = _.current,
                            r = (0, c.getTarget)(e.nativeEvent);
                        t && null != r && (0, u.isNativeInput)(r) && r.setSelectionRange(0, r.value.length ? ? 0)
                    },
                    onKeyDown: $
                },
                highlightedIndex: w,
                onHighlightedIndexChange: T,
                elementsRef: O,
                disabledIndices: b,
                onMapChange: M,
                relayKeyboardEvent: $
            }
        }({
            grid: A,
            loopFocus: O,
            onLoop: S,
            orientation: _,
            highlightedIndex: E,
            onHighlightedIndexChange: C,
            rootRef: P,
            stopEventPropagation: M,
            enableHomeAndEndKeys: w,
            direction: (0, g.useDirection)(),
            disabledIndices: $,
            modifierKeys: z
        }), B = (0, p.useRenderElement)(L, e, {
            state: R,
            ref: I,
            props: [D, ...b, W],
            stateAttributesMapping: k
        }), V = r.useMemo(() => ({
            highlightedIndex: F,
            onHighlightedIndexChange: j,
            highlightItemOnHover: N,
            relayKeyboardEvent: H
        }), [F, j, N, H]);
        return (0, h.jsx)(m.CompositeRootContext.Provider, {
            value: V,
            children: (0, h.jsx)(a.CompositeList, {
                elementsRef: K,
                onMapChange: e => {
                    T ? .(e), Y(e)
                },
                children: B
            })
        })
    }], 943187)
}, 533551, 379451, e => {
    "use strict";
    var t = e.i(248134),
        r = e.i(782655),
        i = e.i(136263),
        a = e.i(33609),
        n = e.i(844145),
        l = e.i(471820);

    function o(e = {}) {
        let {
            highlightItemOnHover: t,
            highlightedIndex: r,
            onHighlightedIndexChange: s
        } = (0, n.useCompositeRootContext)(), {
            ref: u,
            index: d
        } = (0, l.useCompositeListItem)(e), c = r === d, f = i.useRef(null), m = (0, a.useMergedRefs)(u, f);
        return {
            compositeProps: {
                tabIndex: c ? 0 : -1,
                onFocus() {
                    s(d)
                },
                onMouseMove() {
                    let e = f.current;
                    if (!t || !e) return;
                    let r = e.hasAttribute("disabled") || "true" === e.ariaDisabled;
                    c || r || e.focus()
                }
            },
            compositeRef: m,
            index: d
        }
    }
    e.s(["useCompositeItem", 0, o], 379451), e.s(["CompositeItem", 0, function(e) {
        let {
            render: i,
            className: a,
            style: n,
            state: l = t.EMPTY_OBJECT,
            props: s = t.EMPTY_ARRAY,
            refs: u = t.EMPTY_ARRAY,
            metadata: d,
            stateAttributesMapping: c,
            tag: f = "div",
            ...m
        } = e, {
            compositeProps: p,
            compositeRef: g
        } = o({
            metadata: d
        });
        return (0, r.useRenderElement)(f, e, {
            state: l,
            ref: [...u, g],
            props: [p, ...s, m],
            stateAttributesMapping: c
        })
    }], 533551)
}, 722569, 635243, e => {
    "use strict";
    e.s([], 640122), e.i(640122);
    var t, r = e.i(136263),
        i = e.i(33609),
        a = e.i(599543),
        n = e.i(48164),
        l = e.i(617674),
        o = e.i(248134),
        s = e.i(285182),
        u = e.i(276444),
        d = e.i(587758),
        c = e.i(526851),
        f = e.i(509456);
    let m = ((t = {}).checked = "data-checked", t.unchecked = "data-unchecked", t.disabled = "data-disabled", t.readonly = "data-readonly", t.required = "data-required", t.valid = "data-valid", t.invalid = "data-invalid", t.touched = "data-touched", t.dirty = "data-dirty", t.filled = "data-filled", t.focused = "data-focused", t),
        p = {
            checked: e => e ? {
                [m.checked]: ""
            } : {
                [m.unchecked]: ""
            },
            ...c.transitionStatusMapping,
            ...f.fieldValidityMapping
        };
    var g = e.i(230375),
        h = e.i(782655),
        v = e.i(34709),
        x = e.i(121121),
        y = e.i(533551),
        I = e.i(642920),
        b = e.i(261773),
        R = e.i(307554),
        k = e.i(505908),
        E = e.i(135311);
    let C = r.createContext(void 0);
    var _ = e.i(788578),
        A = e.i(335309);
    let O = r.createContext(void 0);
    var S = e.i(52644);
    let w = r.forwardRef(function(e, t) {
        let {
            render: c,
            className: f,
            disabled: m = !1,
            readOnly: A = !1,
            required: w = !1,
            "aria-labelledby": T,
            value: M,
            inputRef: P,
            nativeButton: $ = !1,
            id: z,
            style: N,
            ...L
        } = e, W = r.useContext(C), {
            disabled: D,
            readOnly: F,
            required: j,
            form: K,
            checkedValue: Y,
            touched: H = !1,
            validation: B,
            name: V
        } = W ? ? {}, q = W ? .setCheckedValue ? ? o.NOOP, J = W ? .setTouched ? ? o.NOOP, G = W ? .registerControlRef ? ? o.NOOP, Z = W ? .registerInputRef ? ? o.NOOP, {
            setTouched: U,
            setFilled: X,
            state: Q,
            disabled: ee
        } = (0, I.useFieldRootContext)(), et = (0, b.useFieldItemContext)(), {
            labelId: er,
            getDescriptionProps: ei
        } = (0, R.useLabelableContext)(), ea = ee || et.disabled || D || m, en = F || A, el = j || w, eo = W ? Y === M : "" === M, es = r.useRef(null), eu = r.useRef(null), ed = (0, n.useStableCallback)(e => {
            e && G(e, ea)
        }), ec = (0, i.useMergedRefs)(P, eu, Z);
        (0, a.useIsoLayoutEffect)(() => {
            eu.current ? .checked && X(!0)
        }, [X]), (0, a.useIsoLayoutEffect)(() => {
            if (eu.current) {
                if (ea && eo) return void Z(null);
                es.current && G(es.current, ea), Z(eu.current)
            }
        }, [eo, ea, G, Z]);
        let ef = (0, g.useBaseUiId)(),
            em = (0, E.useLabelableId)({
                id: z,
                implicit: !1,
                controlRef: es
            }),
            ep = $ ? void 0 : em,
            eg = {
                role: "radio",
                "aria-checked": eo,
                "aria-required": el || void 0,
                "aria-readonly": en || void 0,
                "aria-labelledby": (0, k.useAriaLabelledBy)(T, er, eu, !$, ep),
                [x.ACTIVE_COMPOSITE_ITEM]: eo ? "" : void 0,
                id: $ ? em : ef,
                onKeyDown(e) {
                    "Enter" === e.key && e.preventDefault()
                },
                onClick(e) {
                    if (e.defaultPrevented || ea || en) return;
                    e.preventDefault();
                    let t = eu.current;
                    t && t.dispatchEvent(new((0, s.ownerWindow)(t)).PointerEvent("click", {
                        bubbles: !0,
                        shiftKey: e.shiftKey,
                        ctrlKey: e.ctrlKey,
                        altKey: e.altKey,
                        metaKey: e.metaKey
                    }))
                },
                onFocus(e) {
                    e.defaultPrevented || ea || en || !H || (eu.current ? .click(), J(!1))
                }
            },
            {
                getButtonProps: eh,
                buttonRef: ev
            } = (0, v.useButton)({
                disabled: ea,
                native: $,
                composite: !1
            }),
            ex = {
                type: "radio",
                ref: ec,
                form: K,
                id: ep,
                name: V,
                tabIndex: -1,
                style: V ? l.visuallyHiddenInput : l.visuallyHidden,
                "aria-hidden": !0,
                ...void 0 !== M ? {
                    value: (0, _.serializeValue)(M)
                } : o.EMPTY_OBJECT,
                disabled: ea,
                checked: eo,
                required: el,
                readOnly: en,
                onChange(e) {
                    if (e.nativeEvent.defaultPrevented || ea || en || void 0 === M) return;
                    let t = (0, u.createChangeEventDetails)(d.REASONS.none, e.nativeEvent);
                    q(M, t), t.isCanceled || U(!0)
                },
                onFocus() {
                    es.current ? .focus()
                }
            },
            ey = r.useMemo(() => ({ ...Q,
                required: el,
                disabled: ea,
                readOnly: en,
                checked: eo
            }), [Q, ea, en, eo, el]),
            eI = void 0 !== W,
            eb = [t, es, ev, ed],
            eR = [eg, L, eh, ei, B ? e => B.getValidationProps(ea, e) : o.EMPTY_OBJECT],
            ek = (0, h.useRenderElement)("span", e, {
                enabled: !eI,
                state: ey,
                ref: eb,
                props: eR,
                stateAttributesMapping: p
            });
        return (0, S.jsxs)(O.Provider, {
            value: ey,
            children: [eI ? (0, S.jsx)(y.CompositeItem, {
                tag: "span",
                render: c,
                className: f,
                style: N,
                state: ey,
                refs: eb,
                props: eR,
                stateAttributesMapping: p
            }) : ek, (0, S.jsx)("input", { ...ex,
                suppressHydrationWarning: !0
            })]
        })
    });
    var T = e.i(467618),
        M = e.i(755420);
    let P = r.forwardRef(function(e, t) {
        let {
            render: i,
            className: a,
            style: n,
            keepMounted: l = !1,
            ...o
        } = e, s = function() {
            let e = r.useContext(O);
            if (void 0 === e) throw Error((0, A.default)(52));
            return e
        }(), u = s.checked, {
            mounted: d,
            transitionStatus: c,
            setMounted: f
        } = (0, M.useTransitionStatus)(u), m = { ...s,
            transitionStatus: c
        }, g = r.useRef(null), v = (0, h.useRenderElement)("span", e, {
            ref: [t, g],
            state: m,
            props: o,
            stateAttributesMapping: p
        });
        return ((0, T.useOpenChangeComplete)({
            open: u,
            ref: g,
            onComplete() {
                u || f(!1)
            }
        }), l || d) ? v : null
    });
    e.s(["Indicator", 0, P, "Root", 0, w], 961628);
    var $ = e.i(961628);
    e.s(["Radio", 0, $], 722569);
    var z = e.i(293035),
        N = e.i(83054),
        L = e.i(858049),
        W = e.i(943187),
        D = e.i(479039);
    let F = r.createContext(void 0);
    var j = e.i(313587),
        K = e.i(828539);
    let Y = [L.SHIFT],
        H = r.forwardRef(function(e, t) {
            let {
                render: i,
                className: a,
                disabled: l,
                readOnly: o,
                required: s,
                onValueChange: u,
                value: d,
                defaultValue: c,
                form: m,
                name: p,
                inputRef: h,
                id: v,
                style: x,
                ...y
            } = e, {
                setTouched: b,
                setFocused: k,
                validationMode: E,
                name: _,
                disabled: O,
                state: w,
                validation: T,
                setDirty: M,
                setFilled: P,
                validityData: $
            } = (0, I.useFieldRootContext)(), {
                labelId: L
            } = (0, R.useLabelableContext)(), {
                clearErrors: H
            } = (0, j.useFormContext)(), B = function(e = !1) {
                let t = r.useContext(F);
                if (!t && !e) throw Error((0, A.default)(86));
                return t
            }(!0), V = O || l, q = _ ? ? p, J = (0, g.useBaseUiId)(v), [G, Z] = (0, z.useControlled)({
                controlled: d,
                default: c,
                name: "RadioGroup",
                state: "value"
            }), [U, X] = r.useState(!1), Q = (0, n.useStableCallback)((e, t) => {
                u ? .(e, t), t.isCanceled || Z(e)
            }), ee = r.useRef(null), et = r.useRef(null), er = r.useRef(null);

            function ei(e) {
                let t;
                return h && ("function" == typeof h ? t = h(e) : h.current = e), et.current = e, T.inputRef.current = e, t
            }
            let ea = (0, n.useStableCallback)((e, t = !1) => {
                    if (e) {
                        if (t) {
                            ee.current === e && (ee.current = null);
                            return
                        }
                        null == ee.current && (ee.current = e)
                    }
                }),
                en = (0, n.useStableCallback)(e => {
                    if (!e || e.disabled) return;
                    er.current || (er.current = e);
                    let t = et.current;
                    if (e.checked || null == t || t.disabled) return ei(e)
                }),
                el = (0, n.useStableCallback)(() => {
                    let e = et.current;
                    return e && !e.disabled && e.checked ? G ? ? null : null
                });
            (0, D.useRegisterFieldControl)(ee, J, G ? ? null, el, !V, p), (0, K.useValueChanged)(G, () => {
                H(q), M(G !== $.initialValue), P(null != G), T.change(G);
                let e = er.current;
                null == G && e && !e.disabled && ei(e)
            });
            let eo = y["aria-labelledby"] ? ? L ? ? B ? .legendId,
                es = { ...w,
                    disabled: V ? ? !1,
                    required: s ? ? !1,
                    readOnly: o ? ? !1
                },
                eu = r.useMemo(() => ({ ...w,
                    checkedValue: G,
                    disabled: V,
                    form: m,
                    validation: T,
                    name: q,
                    readOnly: o,
                    registerControlRef: ea,
                    registerInputRef: en,
                    required: s,
                    setCheckedValue: Q,
                    setTouched: X,
                    touched: U
                }), [G, V, m, T, w, q, o, ea, en, s, Q, X, U]);
            return (0, S.jsx)(C.Provider, {
                value: eu,
                children: (0, S.jsx)(W.CompositeRoot, {
                    render: i,
                    className: a,
                    style: x,
                    state: es,
                    props: [{
                        id: v,
                        role: "radiogroup",
                        "aria-required": s || void 0,
                        "aria-disabled": V || void 0,
                        "aria-readonly": o || void 0,
                        "aria-labelledby": eo,
                        onFocus() {
                            k(!0)
                        },
                        onBlur(e) {
                            (0, N.contains)(e.currentTarget, e.relatedTarget) || (b(!0), k(!1), "onBlur" === E && T.commit(G))
                        },
                        onKeyDownCapture(e) {
                            e.key.startsWith("Arrow") && (X(!0), k(!0))
                        }
                    }, y, e => T.getValidationProps(V ? ? !1, e)],
                    refs: [t],
                    stateAttributesMapping: f.fieldValidityMapping,
                    enableHomeAndEndKeys: !1,
                    modifierKeys: Y
                })
            })
        });
    e.s(["RadioGroup", 0, H], 635243)
}, 874560, e => {
    "use strict";
    var t = e.i(52644),
        r = e.i(635356),
        i = e.i(378833);
    let a = {
        xxs: "size-5 [&_svg]:size-3",
        xs: "size-6 [&_svg]:size-3.5",
        sm: "size-8 [&_svg]:size-4",
        md: "size-9 [&_svg]:size-4",
        lg: "size-10 [&_svg]:size-5",
        xl: "size-12 [&_svg]:size-5"
    };
    e.s(["IconButton", 0, function({
        label: e,
        iconSlot: n,
        loading: l = !1,
        shape: o = "rect",
        size: s = "md",
        className: u,
        ...d
    }) {
        return (0, t.jsx)(i.Button, { ...d,
            shape: "circle" === o ? "pill" : "rounded",
            size: "xxs" === s || "xs" === s ? "sm" : "xl" === s ? "lg" : s,
            loading: l,
            "aria-label": e,
            className: (0, r.cn)("shrink-0 px-0", "circle" === o ? (0, r.cn)("min-w-0 rounded-full", a[s]) : "xxs" === s ? "h-5 min-w-5 rounded-xs text-xs leading-3 [&_svg]:size-3" : "xs" === s ? "h-6 min-w-6 rounded-xs text-xs leading-3 [&_svg]:size-3.5" : "sm" === s && "h-8 min-w-8 rounded-xs [&_svg]:size-4", u),
            leftSlot: l ? void 0 : n
        })
    }])
}, 258148, e => {
    "use strict";
    var t = e.i(52644),
        r = e.i(722569),
        i = e.i(635243),
        a = e.i(294237),
        n = e.i(136263),
        l = e.i(635356);
    let o = (0, n.createContext)(null),
        s = (0, n.createContext)(!1),
        u = (0, a.cva)("group/sc relative isolate flex p-0.5", {
            variants: {
                variant: {
                    default: "",
                    solid: ""
                },
                theme: {
                    auto: "",
                    light: "",
                    dark: ""
                },
                shape: {
                    pill: "rounded-full",
                    rounded: "rounded-sm"
                },
                fullWidth: {
                    true: "w-full",
                    false: "w-fit"
                }
            },
            compoundVariants: [{
                variant: "default",
                theme: "auto",
                class: "bg-primary-200"
            }, {
                variant: "default",
                theme: "light",
                class: "bg-black/5"
            }, {
                variant: "default",
                theme: "dark",
                class: "bg-eggshell/5"
            }, {
                variant: "solid",
                theme: "auto",
                class: "bg-invert-200"
            }, {
                variant: "solid",
                theme: "light",
                class: "bg-eggshell/5"
            }, {
                variant: "solid",
                theme: "dark",
                class: "bg-black/5"
            }],
            defaultVariants: {
                variant: "default",
                theme: "auto",
                shape: "pill",
                fullWidth: !1
            }
        }),
        d = "inset(0 100% 0 0)",
        c = {
            pill: {
                md: "9999px",
                sm: "9999px",
                lg: "9999px"
            },
            rounded: {
                md: "calc(var(--radius-sm) - 2px)",
                sm: "calc(var(--radius-sm) - 2px)",
                lg: "var(--radius-sm)"
            }
        };

    function f(e) {
        return e.map(e => e.dataset.value ? ? "").join("\x1f")
    }
    let m = {
            md: "h-11 px-4 [&_svg]:size-5",
            sm: "h-9 px-3 [&_svg]:size-4",
            lg: "h-[72px] flex-col gap-2 px-4 [&_svg]:size-5"
        },
        p = {
            md: "px-2 font-medium text-copy-14",
            sm: "px-1 font-medium text-copy-14",
            lg: "font-medium text-copy-14"
        },
        g = {
            pill: "p-1",
            rounded: "rounded-md p-1"
        };

    function h(e, t) {
        return "pill" === e ? "rounded-full" : "lg" === t ? "rounded-sm" : "rounded-[calc(var(--radius-sm)-2px)]"
    }
    let v = {
            default: {
                auto: "text-primary-500 group-data-[ready=false]/sc:data-checked:text-primary-800",
                light: "text-slate/50 group-data-[ready=false]/sc:data-checked:text-slate",
                dark: "text-eggshell/50 group-data-[ready=false]/sc:data-checked:text-eggshell"
            },
            solid: {
                auto: "text-primary-600 group-data-[ready=false]/sc:data-checked:text-invert-900",
                light: "text-slate/60 group-data-[ready=false]/sc:data-checked:text-white",
                dark: "text-eggshell/70 group-data-[ready=false]/sc:data-checked:text-black"
            }
        },
        x = {
            default: {
                auto: "text-primary-800",
                light: "text-slate",
                dark: "text-eggshell"
            },
            solid: {
                auto: "text-invert-900",
                light: "text-white",
                dark: "text-black"
            }
        },
        y = {
            default: {
                auto: "bg-invert-900",
                light: "bg-white",
                dark: "not-dark:bg-primary-700 dark:bg-invert-700"
            },
            solid: {
                auto: "bg-primary-700",
                light: "bg-slate",
                dark: "bg-eggshell"
            }
        },
        I = {
            auto: "inset-ring inset-ring-primary-100",
            light: "inset-ring inset-ring-black/3",
            dark: "inset-ring inset-ring-white/3"
        },
        b = {
            auto: "focus-visible:outline-primary-300",
            light: "focus-visible:outline-black/10",
            dark: "focus-visible:outline-white/10"
        },
        R = Object.assign(function({
            value: e,
            defaultValue: r,
            onValueChange: a,
            size: m = "md",
            theme: p,
            variant: v = "default",
            shape: x = "pill",
            fullWidth: b = !1,
            indicatorHairline: R = !0,
            className: k,
            children: E,
            ...C
        }) {
            let [_, A] = (0, n.useState)(r), O = (0, n.useRef)(null), S = (0, n.useRef)(null), w = (0, n.useRef)(!1), T = (0, n.useRef)(""), M = (0, n.useRef)({
                width: 0,
                height: 0
            }), P = (0, n.useRef)(null), $ = (0, n.useRef)(() => {}), z = e ? ? _, N = (0, n.useCallback)(t => {
                void 0 === e && A(t), a ? .(t)
            }, [e, a]), L = (0, n.useCallback)(e => {
                var t, r;
                let i, a, n, l, o = O.current,
                    s = S.current;
                if (!o || !s) return;
                let u = Array.from(o.children),
                    p = u.find(e => e.dataset.value === z),
                    g = p ? {
                        left: p.offsetLeft,
                        top: p.offsetTop,
                        width: p.offsetWidth,
                        height: p.offsetHeight
                    } : null,
                    h = g ? (t = {
                        width: o.offsetWidth,
                        height: o.offsetHeight
                    }, r = c[x][m], i = Math.max(0, g.top), a = Math.max(0, t.width - g.left - g.width), n = Math.max(0, t.height - g.top - g.height), l = Math.max(0, g.left), `inset(${i}px ${a}px ${n}px ${l}px round ${r})`) : d;
                T.current = f(u), M.current = {
                    width: o.offsetWidth,
                    height: o.offsetHeight
                };
                let v = () => {
                    o.style.clipPath = h, s.style.left = `${g?.left??0}px`, s.style.top = `${g?.top??0}px`, s.style.width = `${g?.width??0}px`, s.style.height = `${g?.height??0}px`
                };
                e ? v() : (o.style.transitionProperty = "none", s.style.transitionProperty = "none", v(), o.getBoundingClientRect(), o.style.transitionProperty = "", s.style.transitionProperty = "")
            }, [z, x, m]), W = (0, n.useCallback)(() => {
                let e = O.current,
                    t = P.current;
                if (e && t)
                    for (let r of (t.disconnect(), t.observe(e), e.children)) t.observe(r)
            }, []);
            return (0, n.useLayoutEffect)(() => {
                let e = new ResizeObserver(() => $.current(!1));
                return P.current = e, W(), () => {
                    e.disconnect(), P.current = null
                }
            }, [W]), (0, n.useLayoutEffect)(() => {
                $.current = L;
                let e = O.current;
                if (e) {
                    if (!w.current) {
                        w.current = !0, L(!1);
                        let t = () => {
                                if (!e.isConnected) return;
                                $.current(!1);
                                let t = e.parentElement;
                                t && (t.dataset.ready = "true")
                            },
                            r = document.fonts;
                        r && "loaded" !== r.status ? r.ready.then(t) : t();
                        return
                    }
                    L(f(Array.from(e.children)) === T.current)
                }
            }, [L]), (0, n.useLayoutEffect)(() => {
                let e = O.current;
                if (!e || !w.current) return;
                let t = Array.from(e.children),
                    {
                        width: r,
                        height: i
                    } = M.current;
                (f(t) !== T.current || e.offsetWidth !== r || e.offsetHeight !== i) && (W(), $.current(!1))
            }), (0, t.jsx)(o.Provider, {
                value: {
                    value: z,
                    size: m,
                    theme: p,
                    variant: v,
                    shape: x,
                    fullWidth: b,
                    indicatorHairline: R
                },
                children: (0, t.jsxs)(i.RadioGroup, {
                    className: (0, l.cn)(u({
                        variant: v,
                        theme: p,
                        shape: x,
                        fullWidth: b
                    }), "lg" === m && g[x], k),
                    "data-ready": "false",
                    "data-variant": v,
                    onValueChange: N,
                    value: z,
                    ...C,
                    children: [E, (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: (0, l.cn)("pointer-events-none absolute -z-10 opacity-0 transition-none duration-250 ease-out-strong group-data-[ready=true]/sc:opacity-100 group-data-[ready=true]/sc:transition-[left,top,width,height] motion-reduce:transition-none", h(x, m), y[v][p ? ? "auto"], "default" === v && R && I[p ? ? "auto"]),
                        ref: S,
                        style: {
                            height: 0,
                            left: 0,
                            top: 0,
                            width: 0
                        }
                    }), (0, t.jsx)("div", {
                        "aria-hidden": "true",
                        className: "pointer-events-none absolute inset-0 flex p-[inherit] transition-none duration-250 ease-out-strong group-data-[ready=true]/sc:transition-[clip-path] motion-reduce:transition-none",
                        ref: O,
                        style: {
                            clipPath: d
                        },
                        children: (0, t.jsx)(s.Provider, {
                            value: !0,
                            children: E
                        })
                    })]
                })
            })
        }, {
            Item: function({
                value: e,
                leftSlot: i,
                rightSlot: a,
                disabled: u,
                className: d,
                children: c
            }) {
                let f = function() {
                        let e = (0, n.useContext)(o);
                        if (!e) throw Error("SegmentedControl.Item must be rendered within a SegmentedControl");
                        return e
                    }(),
                    g = (0, n.useContext)(s),
                    R = f.theme ? ? "auto",
                    k = f.value === e,
                    E = h(f.shape, f.size),
                    C = (0, t.jsx)("span", {
                        className: (0, l.cn)("min-w-0 max-w-full truncate", p[f.size]),
                        children: c
                    });
                return g ? (0, t.jsxs)("span", {
                    className: (0, l.cn)("relative flex min-w-0 select-none items-center justify-center whitespace-nowrap [&_svg]:shrink-0", m[f.size], x[f.variant][R], f.fullWidth && "flex-1", u && "opacity-60", d),
                    "data-value": e,
                    children: [i, C, a]
                }) : (0, t.jsxs)(r.Radio.Root, {
                    className: (0, l.cn)("relative flex min-w-0 cursor-pointer select-none items-center justify-center whitespace-nowrap transition-colors duration-200 ease-out-strong focus-visible:outline-2 focus-visible:outline-offset-2 data-disabled:cursor-not-allowed data-disabled:opacity-60 motion-reduce:transition-none [&_svg]:shrink-0", E, m[f.size], v[f.variant][R], b[R], f.fullWidth && "flex-1", d),
                    disabled: u,
                    value: e,
                    children: [k ? (0, t.jsx)("span", {
                        "aria-hidden": "true",
                        className: (0, l.cn)("absolute inset-0 -z-10 hidden group-data-[ready=false]/sc:block", E, y[f.variant][R], "default" === f.variant && f.indicatorHairline && I[R])
                    }) : null, i, C, a]
                })
            }
        });
    e.s(["SegmentedControl", 0, R])
}]);