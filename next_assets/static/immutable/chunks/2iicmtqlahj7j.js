(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 853775, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263),
        n = e.i(418152),
        o = e.i(782655),
        r = e.i(326203),
        i = e.i(526851);
    let s = { ...r.popupStateMapping,
            ...i.transitionStatusMapping
        },
        l = t.forwardRef(function(e, t) {
            let {
                render: r,
                className: i,
                style: l,
                forceRender: a = !1,
                ...u
            } = e, {
                store: c
            } = (0, n.useDialogRootContext)(), d = c.useState("open"), p = c.useState("nested"), f = c.useState("mounted"), g = c.useState("transitionStatus");
            return (0, o.useRenderElement)("div", e, {
                state: {
                    open: d,
                    transitionStatus: g
                },
                ref: [c.context.backdropRef, t],
                stateAttributesMapping: s,
                props: [{
                    role: "presentation",
                    hidden: !f,
                    style: {
                        userSelect: "none",
                        WebkitUserSelect: "none"
                    }
                }, u],
                enabled: a || !p
            })
        });
    e.s(["DialogBackdrop", 0, l])
}, 478757, 817043, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(418152),
        o = e.i(782655),
        r = e.i(34709),
        i = e.i(276444),
        s = e.i(587758);
    let l = t.forwardRef(function(e, t) {
        let {
            render: l,
            className: a,
            style: u,
            disabled: c = !1,
            nativeButton: d = !0,
            ...p
        } = e, {
            store: f
        } = (0, n.useDialogRootContext)(), g = f.useState("open"), {
            getButtonProps: m,
            buttonRef: v
        } = (0, r.useButton)({
            disabled: c,
            native: d
        });
        return (0, o.useRenderElement)("button", e, {
            state: {
                disabled: c
            },
            ref: [t, v],
            props: [{
                onClick: function(e) {
                    g && f.setOpen(!1, (0, i.createChangeEventDetails)(s.REASONS.closePress, e.nativeEvent))
                }
            }, p, m]
        })
    });
    e.s(["DialogClose", 0, l], 478757);
    var a = e.i(230375);
    let u = t.forwardRef(function(e, t) {
        let {
            render: r,
            className: i,
            style: s,
            id: l,
            ...u
        } = e, {
            store: c
        } = (0, n.useDialogRootContext)(), d = (0, a.useBaseUiId)(l);
        return c.useSyncedValueWithCleanup("descriptionElementId", d), (0, o.useRenderElement)("p", e, {
            ref: t,
            props: [{
                id: d
            }, u]
        })
    });
    e.s(["DialogDescription", 0, u], 817043)
}, 824840, e => {
    "use strict";
    e.i(670661);
    var t = e.i(853775),
        n = e.i(478757),
        o = e.i(817043),
        r = e.i(114945),
        i = e.i(978534),
        s = e.i(521481),
        l = e.i(589211),
        a = e.i(384195),
        u = e.i(479972),
        c = e.i(279750);
    e.s(["Backdrop", () => t.DialogBackdrop, "Close", () => n.DialogClose, "Description", () => o.DialogDescription, "Handle", () => c.DialogHandle, "Popup", () => r.DialogPopup, "Portal", () => i.DialogPortal, "Root", () => s.DialogRoot, "Title", () => a.DialogTitle, "Trigger", () => u.DialogTrigger, "Viewport", () => l.DialogViewport, "createHandle", () => c.createDialogHandle], 99720);
    var d = e.i(99720);
    e.s(["Dialog", 0, d], 824840)
}, 670661, e => {
    "use strict";
    e.s([])
}, 114945, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263),
        n = e.i(267785),
        o = e.i(418152),
        r = e.i(782655),
        i = e.i(326203),
        s = e.i(526851),
        l = e.i(506800),
        a = e.i(536101),
        u = e.i(124434),
        c = e.i(467618),
        d = e.i(858049),
        p = e.i(12308),
        f = e.i(52644);
    let g = { ...i.popupStateMapping,
            ...s.transitionStatusMapping,
            nestedDialogOpen: e => e ? {
                [a.DialogPopupDataAttributes.nestedDialogOpen]: ""
            } : null
        },
        m = t.forwardRef(function(e, t) {
            let {
                render: i,
                className: s,
                style: a,
                finalFocus: m,
                initialFocus: v,
                ...b
            } = e, {
                store: h
            } = (0, o.useDialogRootContext)(), S = h.useState("descriptionElementId"), C = h.useState("disablePointerDismissal"), E = h.useState("floatingRootContext"), R = h.useState("popupProps"), D = h.useState("modal"), y = h.useState("mounted"), w = h.useState("nested"), x = h.useState("nestedOpenDialogCount"), O = h.useState("open"), k = h.useState("openMethod"), T = h.useState("titleElementId"), P = h.useState("transitionStatus"), A = h.useState("role"), I = E.useState("floatingId"), M = b.id ? ? I;
            (0, u.useDialogPortalContext)(), (0, c.useOpenChangeComplete)({
                open: O,
                ref: h.context.popupRef,
                onComplete() {
                    O && h.context.onOpenChangeComplete ? .(!0)
                }
            });
            let F = void 0 === v ? (0, p.createDefaultInitialFocus)(h.context.popupRef) : v,
                N = h.useStateSetter("popupElement"),
                L = (0, r.useRenderElement)("div", e, {
                    state: {
                        open: O,
                        nested: w,
                        transitionStatus: P,
                        nestedDialogOpen: x > 0
                    },
                    props: [R, {
                        id: M,
                        "aria-labelledby": T ? ? void 0,
                        "aria-describedby": S ? ? void 0,
                        role: A,
                        ...p.FOCUSABLE_POPUP_PROPS,
                        hidden: !y,
                        onKeyDown(e) {
                            d.COMPOSITE_KEYS.has(e.key) && e.stopPropagation()
                        },
                        style: {
                            [l.DialogPopupCssVars.nestedDialogs]: x
                        }
                    }, b],
                    ref: [t, h.context.popupRef, N],
                    stateAttributesMapping: g
                });
            return (0, f.jsx)(n.FloatingFocusManager, {
                context: E,
                openInteractionType: k,
                disabled: !y,
                closeOnFocusOut: !C,
                initialFocus: F,
                returnFocus: m,
                modal: !1 !== D,
                restoreFocus: "popup",
                children: L
            })
        });
    e.s(["DialogPopup", 0, m])
}, 506800, 536101, e => {
    "use strict";
    let t = ((n = {}).nestedDialogs = "--nested-dialogs", n);
    e.s(["DialogPopupCssVars", 0, t], 506800);
    var n, o, r = e.i(326203);
    let i = ((o = {})[o.open = r.CommonPopupDataAttributes.open] = "open", o[o.closed = r.CommonPopupDataAttributes.closed] = "closed", o[o.startingStyle = r.CommonPopupDataAttributes.startingStyle] = "startingStyle", o[o.endingStyle = r.CommonPopupDataAttributes.endingStyle] = "endingStyle", o.nested = "data-nested", o.nestedDialogOpen = "data-nested-dialog-open", o);
    e.s(["DialogPopupDataAttributes", 0, i], 536101)
}, 978534, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263),
        n = e.i(585636),
        o = e.i(312231),
        r = e.i(418152),
        i = e.i(124434),
        s = e.i(271523),
        l = e.i(52644);
    let a = t.forwardRef(function(e, t) {
        let {
            keepMounted: a = !1,
            ...u
        } = e, {
            store: c
        } = (0, r.useDialogRootContext)(), d = c.useState("mounted"), p = c.useState("modal"), f = c.useState("open");
        return d || a ? (0, l.jsx)(i.DialogPortalContext.Provider, {
            value: a,
            children: (0, l.jsxs)(o.FloatingPortal, {
                ref: t,
                ...u,
                children: [d && !0 === p && (0, l.jsx)(s.InternalBackdrop, {
                    ref: c.context.internalBackdropRef,
                    inert: (0, n.inertValue)(!f)
                }), e.children]
            })
        }) : null
    });
    e.s(["DialogPortal", 0, a])
}, 124434, e => {
    "use strict";
    e.i(301016);
    var t = e.i(335309),
        n = e.i(136263);
    let o = n.createContext(void 0);
    e.s(["DialogPortalContext", 0, o, "useDialogPortalContext", 0, function() {
        let e = n.useContext(o);
        if (void 0 === e) throw Error((0, t.default)(26));
        return e
    }])
}, 521481, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(418152),
        o = e.i(845848);
    e.s(["DialogRoot", 0, function(e) {
        let r = t.useContext(n.IsDrawerContext) ? "drawer" : "dialog";
        return (0, o.useRenderDialogRoot)(e, r)
    }])
}, 418152, e => {
    "use strict";
    e.i(301016);
    var t = e.i(335309),
        n = e.i(136263);
    let o = n.createContext(!1),
        r = n.createContext(void 0);
    e.s(["DialogRootContext", 0, r, "IsDrawerContext", 0, o, "useDialogRootContext", 0, function(e) {
        let o = n.useContext(r);
        if (!1 === e && void 0 === o) throw Error((0, t.default)(27));
        return o
    }])
}, 156514, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(50568),
        o = e.i(248134),
        r = e.i(900030),
        i = e.i(83054),
        s = e.i(276444),
        l = e.i(587758),
        a = e.i(12308);
    e.s(["DialogInteractions", 0, function({
        store: e,
        parentContext: s,
        isDrawer: l
    }) {
        let u = e.useState("open"),
            c = e.useState("disablePointerDismissal"),
            d = e.useState("modal"),
            p = e.useState("popupElement"),
            f = e.useState("floatingRootContext"),
            [g, m] = t.useState(0),
            [v, b] = t.useState(0),
            h = 0 === g,
            S = (0, r.useDismiss)(f, {
                outsidePressEvent: () => e.context.internalBackdropRef.current || e.context.backdropRef.current ? "intentional" : {
                    mouse: "trap-focus" === d ? "sloppy" : "intentional",
                    touch: "sloppy"
                },
                outsidePress(t) {
                    if (!e.context.outsidePressEnabledRef.current || "button" in t && 0 !== t.button || "touches" in t && 1 !== t.touches.length) return !1;
                    let n = (0, i.getTarget)(t);
                    return !!h && !c && (!d || !e.context.internalBackdropRef.current && !e.context.backdropRef.current || e.context.internalBackdropRef.current === n || e.context.backdropRef.current === n || (0, i.contains)(n, p) && !n ? .hasAttribute("data-base-ui-portal"))
                },
                escapeKey: h
            });
        (0, n.useScrollLock)(u && !0 === d, p), e.useContextCallback("onNestedDialogOpen", (e, t) => {
            m(e), b(t)
        }), e.useContextCallback("onNestedDialogClose", () => {
            m(0), b(0)
        }), t.useEffect(() => (s ? .onNestedDialogOpen && u && s.onNestedDialogOpen(g + 1, v + +!!l), s ? .onNestedDialogClose && !u && s.onNestedDialogClose(), () => {
            s ? .onNestedDialogClose && u && s.onNestedDialogClose()
        }), [l, u, g, v, s]);
        let C = S.reference ? ? o.EMPTY_OBJECT,
            E = S.trigger ? ? o.EMPTY_OBJECT,
            R = S.floating ? ? o.EMPTY_OBJECT;
        return (0, a.usePopupInteractionProps)(e, {
            activeTriggerProps: C,
            inactiveTriggerProps: E,
            popupProps: R,
            nestedOpenDialogCount: g,
            nestedOpenDrawerCount: v
        }), null
    }, "useDialogRoot", 0, function(e) {
        let {
            store: n,
            actionsRef: o
        } = e, r = n.useState("open");
        (0, a.usePopupRootSync)(n, r), (0, a.useImplicitActiveTrigger)(n);
        let {
            forceUnmount: i
        } = (0, a.useOpenStateTransitions)(r, n), u = t.useCallback(() => {
            n.setOpen(!1, (0, s.createChangeEventDetails)(l.REASONS.imperativeAction))
        }, [n]);
        t.useImperativeHandle(o, () => ({
            unmount: i,
            close: u
        }), [i, u])
    }])
}, 845848, 861139, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(12030),
        o = e.i(156514),
        r = e.i(418152),
        i = e.i(133342),
        s = e.i(424576),
        l = e.i(367345),
        a = e.i(355377),
        u = e.i(12308);
    let c = { ...l.popupStoreSelectors,
        modal: (0, i.createSelector)(e => e.modal),
        nested: (0, i.createSelector)(e => e.nested),
        nestedOpenDialogCount: (0, i.createSelector)(e => e.nestedOpenDialogCount),
        nestedOpenDrawerCount: (0, i.createSelector)(e => e.nestedOpenDrawerCount),
        disablePointerDismissal: (0, i.createSelector)(e => e.disablePointerDismissal),
        openMethod: (0, i.createSelector)(e => e.openMethod),
        descriptionElementId: (0, i.createSelector)(e => e.descriptionElementId),
        titleElementId: (0, i.createSelector)(e => e.titleElementId),
        viewportElement: (0, i.createSelector)(e => e.viewportElement),
        role: (0, i.createSelector)(e => e.role)
    };
    class d extends s.ReactStore {
        constructor(e, n, o = !1) {
            const r = new a.PopupTriggerMap,
                i = function(e = {}) {
                    return { ...(0, l.createInitialPopupStoreState)(),
                        modal: !0,
                        disablePointerDismissal: !1,
                        popupElement: null,
                        viewportElement: null,
                        descriptionElementId: void 0,
                        titleElementId: void 0,
                        openMethod: null,
                        nested: !1,
                        nestedOpenDialogCount: 0,
                        nestedOpenDrawerCount: 0,
                        role: "dialog",
                        ...e
                    }
                }(e);
            i.floatingRootContext = (0, l.createPopupFloatingRootContext)(r, n, o), super(i, {
                popupRef: t.createRef(),
                backdropRef: t.createRef(),
                internalBackdropRef: t.createRef(),
                outsidePressEnabledRef: {
                    current: !0
                },
                triggerElements: r,
                onOpenChange: void 0,
                onOpenChangeComplete: void 0
            }, c)
        }
        setOpen = (e, t) => {
            if (t.preventUnmountOnClose = () => {
                    this.set("preventUnmountingOnClose", !0)
                }, e || null != t.trigger || null == this.state.activeTriggerId || (t.trigger = this.state.activeTriggerElement ? ? void 0), this.context.onOpenChange ? .(e, t), t.isCanceled) return;
            this.state.floatingRootContext.dispatchOpenChange(e, t);
            let n = {
                open: e
            };
            (0, u.setPopupOpenState)(n, e, t.trigger), this.update(n)
        };
        static useStore(e, t) {
            return (0, u.usePopupStore)(e, (e, n) => new d(t, e, n), !0).store
        }
    }
    e.s(["DialogStore", 0, d], 861139);
    var p = e.i(52644);
    e.s(["useRenderDialogRoot", 0, function(e, i = "dialog") {
        let {
            children: s,
            open: l,
            defaultOpen: a = !1,
            onOpenChange: u,
            onOpenChangeComplete: c,
            disablePointerDismissal: f = !1,
            modal: g = !0,
            actionsRef: m,
            handle: v,
            triggerId: b,
            defaultTriggerId: h = null
        } = e, S = "alert-dialog" === i, C = (0, r.useDialogRootContext)(!0), E = {
            modal: !!S || g,
            disablePointerDismissal: S || f,
            nested: !!C,
            role: S ? "alertdialog" : "dialog"
        }, R = d.useStore(v ? .store, {
            open: a,
            openProp: l,
            activeTriggerId: h,
            triggerIdProp: b,
            ...E
        });
        (0, n.useOnFirstRender)(() => {
            let e = void 0 === l && !1 === R.state.open && !0 === a ? {
                open: !0,
                activeTriggerId: h
            } : null;
            S ? R.update(e ? { ...E,
                ...e
            } : E) : e && R.update(e)
        }), R.useControlledProp("openProp", l), R.useControlledProp("triggerIdProp", b), R.useSyncedValues(E), R.useContextCallback("onOpenChange", u), R.useContextCallback("onOpenChangeComplete", c);
        let D = R.useState("open"),
            y = R.useState("mounted"),
            w = R.useState("payload");
        (0, o.useDialogRoot)({
            store: R,
            actionsRef: m
        });
        let x = t.useMemo(() => ({
            store: R
        }), [R]);
        return (0, p.jsx)(r.IsDrawerContext.Provider, {
            value: !1,
            children: (0, p.jsxs)(r.DialogRootContext.Provider, {
                value: x,
                children: [(D || y) && (0, p.jsx)(o.DialogInteractions, {
                    store: R,
                    parentContext: C ? .store.context,
                    isDrawer: "drawer" === i
                }), "function" == typeof s ? s({
                    payload: w
                }) : s]
            })
        })
    }], 845848)
}, 279750, e => {
    "use strict";
    e.i(301016);
    var t = e.i(861139),
        n = e.i(276444),
        o = e.i(587758);
    class r {
        constructor(e) {
            this.store = e ? ? new t.DialogStore
        }
        open(e) {
            let t = e ? this.store.context.triggerElements.getById(e) : void 0;
            this.store.setOpen(!0, (0, n.createChangeEventDetails)(o.REASONS.imperativeAction, void 0, t))
        }
        openWithPayload(e) {
            this.store.set("payload", e), this.store.setOpen(!0, (0, n.createChangeEventDetails)(o.REASONS.imperativeAction, void 0, void 0))
        }
        close() {
            this.store.setOpen(!1, (0, n.createChangeEventDetails)(o.REASONS.imperativeAction, void 0, void 0))
        }
        get isOpen() {
            return this.store.select("open")
        }
    }
    e.s(["DialogHandle", 0, r, "createDialogHandle", 0, function() {
        return new r
    }])
}, 384195, 479972, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(418152),
        o = e.i(782655),
        r = e.i(230375);
    let i = t.forwardRef(function(e, t) {
        let {
            render: i,
            className: s,
            style: l,
            id: a,
            ...u
        } = e, {
            store: c
        } = (0, n.useDialogRootContext)(), d = (0, r.useBaseUiId)(a);
        return c.useSyncedValueWithCleanup("titleElementId", d), (0, o.useRenderElement)("h2", e, {
            ref: t,
            props: [{
                id: d
            }, u]
        })
    });
    e.s(["DialogTitle", 0, i], 384195);
    var s = e.i(335309),
        l = e.i(34709),
        a = e.i(326203),
        u = e.i(265620),
        c = e.i(12308),
        d = e.i(740922),
        p = e.i(275913);
    let f = t.forwardRef(function(e, i) {
        let {
            render: f,
            className: g,
            style: m,
            disabled: v = !1,
            nativeButton: b = !0,
            id: h,
            payload: S,
            handle: C,
            ...E
        } = e, R = (0, n.useDialogRootContext)(!0), D = C ? .store ? ? R ? .store;
        if (!D) throw Error((0, s.default)(79));
        let y = (0, r.useBaseUiId)(h),
            w = D.useState("floatingRootContext"),
            x = D.useState("isOpenedByTrigger", y),
            O = D.useState("triggerPopupId", y),
            k = t.useRef(null),
            {
                registerTrigger: T,
                isMountedByThisTrigger: P
            } = (0, c.useTriggerDataForwarding)(y, k, D, {
                payload: S
            }),
            {
                getButtonProps: A,
                buttonRef: I
            } = (0, l.useButton)({
                disabled: v,
                native: b
            }),
            M = (0, d.useClick)(w, {
                enabled: null != w
            }),
            F = (0, p.useOpenMethodTriggerProps)(() => D.select("open"), e => {
                D.set("openMethod", e)
            }),
            N = D.useState("triggerProps", P);
        return (0, o.useRenderElement)("button", e, {
            state: {
                disabled: v,
                open: x
            },
            ref: [I, i, T, k],
            props: [M.reference, N, F, {
                [u.CLICK_TRIGGER_IDENTIFIER]: "",
                id: y,
                "aria-haspopup": "dialog",
                "aria-expanded": x,
                "aria-controls": O
            }, E, A],
            stateAttributesMapping: a.triggerOpenStateMapping
        })
    });
    e.s(["DialogTrigger", 0, f], 479972)
}, 589211, e => {
    "use strict";
    var t, n = e.i(136263),
        o = e.i(782655),
        r = e.i(326203),
        i = e.i(526851),
        s = e.i(418152),
        l = e.i(124434);
    let a = ((t = {})[t.open = r.CommonPopupDataAttributes.open] = "open", t[t.closed = r.CommonPopupDataAttributes.closed] = "closed", t[t.startingStyle = r.CommonPopupDataAttributes.startingStyle] = "startingStyle", t[t.endingStyle = r.CommonPopupDataAttributes.endingStyle] = "endingStyle", t.nested = "data-nested", t.nestedDialogOpen = "data-nested-dialog-open", t),
        u = { ...r.popupStateMapping,
            ...i.transitionStatusMapping,
            nested: e => e ? {
                [a.nested]: ""
            } : null,
            nestedDialogOpen: e => e ? {
                [a.nestedDialogOpen]: ""
            } : null
        },
        c = n.forwardRef(function(e, t) {
            let {
                render: n,
                className: r,
                style: i,
                children: a,
                ...c
            } = e, d = (0, l.useDialogPortalContext)(), {
                store: p
            } = (0, s.useDialogRootContext)(), f = p.useState("open"), g = p.useState("nested"), m = p.useState("transitionStatus"), v = p.useState("nestedOpenDialogCount"), b = p.useState("mounted"), h = p.useStateSetter("viewportElement");
            return (0, o.useRenderElement)("div", e, {
                enabled: d || b,
                state: {
                    open: f,
                    nested: g,
                    transitionStatus: m,
                    nestedDialogOpen: v > 0
                },
                ref: [t, h],
                stateAttributesMapping: u,
                props: [{
                    role: "presentation",
                    hidden: !b,
                    style: {
                        pointerEvents: f ? void 0 : "none"
                    },
                    children: a
                }, c]
            })
        });
    e.s(["DialogViewport", 0, c], 589211)
}, 267785, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(92615),
        o = e.i(544570),
        r = e.i(367015),
        i = e.i(33609),
        s = e.i(822758),
        l = e.i(48164),
        a = e.i(599543),
        u = e.i(962599),
        c = e.i(903277),
        d = e.i(2063),
        p = e.i(521498),
        f = e.i(285182),
        g = e.i(990461),
        m = e.i(83054),
        v = e.i(89676),
        b = e.i(684864),
        h = e.i(974762),
        S = e.i(308304),
        C = e.i(885948),
        E = e.i(276444),
        R = e.i(587758),
        D = e.i(606397),
        y = e.i(151146);
    let w = {
            inert: new WeakMap,
            "aria-hidden": new WeakMap
        },
        x = "data-base-ui-inert",
        O = {
            inert: new WeakSet,
            "aria-hidden": new WeakSet
        },
        k = new WeakMap,
        T = 0,
        P = (e, t) => t.map(t => {
            if (e.contains(t)) return t;
            let o = function e(t) {
                return t ? (0, n.isShadowRoot)(t) ? t.host : e(t.parentNode) : null
            }(t);
            return e.contains(o) ? o : null
        }).filter(e => null != e),
        A = e => {
            let t = new Set;
            return e.forEach(e => {
                let n = e;
                for (; n && !t.has(n);) t.add(n), n = n.parentNode
            }), t
        },
        I = (e, t, o) => {
            let r = [],
                i = e => {
                    !e || o.has(e) || Array.from(e.children).forEach(e => {
                        "script" !== (0, n.getNodeName)(e) && (t.has(e) ? i(e) : r.push(e))
                    })
                };
            return i(e), r
        };

    function M(e, t = {}) {
        let {
            ariaHidden: n = !1,
            inert: o = !1,
            mark: r = !0
        } = t, i = (0, p.ownerDocument)(e[0]).body;
        return function(e, t, n, o, {
            mark: r = !0
        }) {
            let i = null;
            o ? i = "inert" : n && (i = "aria-hidden");
            let s = null,
                l = null,
                a = P(t, e),
                u = r ? I(t, A(a), new Set(a)) : [],
                c = [],
                d = [];
            if (i) {
                let e = w[i],
                    n = O[i];
                l = n, s = e;
                let o = P(t, Array.from(t.querySelectorAll("[aria-live]"))),
                    r = a.concat(o);
                I(t, A(r), new Set(r)).forEach(t => {
                    let o = t.getAttribute(i),
                        r = null !== o && "false" !== o,
                        s = (e.get(t) || 0) + 1;
                    e.set(t, s), c.push(t), 1 === s && r && n.add(t), r || t.setAttribute(i, "inert" === i ? "" : "true")
                })
            }
            return r && u.forEach(e => {
                let t = (k.get(e) || 0) + 1;
                k.set(e, t), d.push(e), 1 === t && e.setAttribute(x, "")
            }), T += 1, () => {
                s && c.forEach(e => {
                    let t = (s.get(e) || 0) - 1;
                    s.set(e, t), t || (!l ? .has(e) && i && e.removeAttribute(i), l ? .delete(e))
                }), r && d.forEach(e => {
                    let t = (k.get(e) || 0) - 1;
                    k.set(e, t), t || e.removeAttribute(x)
                }), (T -= 1) || (w.inert = new WeakMap, w["aria-hidden"] = new WeakMap, O.inert = new WeakSet, O["aria-hidden"] = new WeakSet, k = new WeakMap)
            }
        }(e, i, n, o, {
            mark: r
        })
    }
    var F = e.i(312231),
        N = e.i(350738),
        L = e.i(265620),
        B = e.i(692135),
        W = e.i(52644);
    let Y = [];

    function H() {
        Y = Y.filter(e => e.deref() ? .isConnected)
    }

    function j(e) {
        H(), e && "body" !== (0, n.getNodeName)(e) && (Y.push(new WeakRef(e)), Y.length > 20 && (Y = Y.slice(-20)))
    }

    function V() {
        return H(), Y[Y.length - 1] ? .deref()
    }

    function q(e) {
        if (e.hasAttribute("tabindex") && !e.hasAttribute("data-tabindex") || !e.getAttribute("role") ? .includes("dialog")) return;
        let t = (0, h.focusable)(e).filter(e => {
                let t = e.getAttribute("data-tabindex") || "";
                return (0, h.isTabbable)(e) || e.hasAttribute("data-tabindex") && !t.startsWith("-")
            }),
            n = e.getAttribute("tabindex");
        0 === t.length ? "0" !== n && (e.setAttribute("tabindex", "0"), e.setAttribute("data-tabindex", "0")) : ("-1" !== n || e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex")) && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"))
    }
    e.s(["FloatingFocusManager", 0, function(e) {
        let {
            context: w,
            children: x,
            disabled: O = !1,
            initialFocus: k = !0,
            returnFocus: T = !0,
            restoreFocus: P = !1,
            modal: A = !0,
            closeOnFocusOut: I = !0,
            openInteractionType: Y = "",
            nextFocusableElement: G,
            previousFocusableElement: $,
            beforeContentFocusGuardRef: U,
            externalTree: X,
            getInsideElements: _
        } = e, K = "rootStore" in w ? w.rootStore : w, z = K.useState("open"), J = K.useState("domReferenceElement"), Q = K.useState("floatingElement"), {
            events: Z,
            dataRef: ee
        } = K.context, et = (0, l.useStableCallback)(() => ee.current.floatingContext ? .nodeId), en = (0, v.isTypeableCombobox)(J) && !1 === k, eo = (0, s.useValueAsRef)(k), er = (0, s.useValueAsRef)(T), ei = (0, s.useValueAsRef)(Y), es = (0, s.useValueAsRef)(z), el = (0, N.useFloatingTree)(X), ea = (0, F.usePortalContext)(), eu = t.useRef(!1), ec = t.useRef(!1), ed = t.useRef(!1), ep = t.useRef(null), ef = t.useRef(""), eg = t.useRef(""), em = t.useRef(null), ev = t.useRef(null), eb = (0, i.useMergedRefs)(em, U, ea ? .beforeInsideRef), eh = (0, i.useMergedRefs)(ev, ea ? .afterInsideRef), eS = (0, u.useTimeout)(), eC = (0, u.useTimeout)(), eE = (0, d.useAnimationFrame)(), eR = null != ea, eD = (0, v.getFloatingFocusElement)(Q), ey = (0, l.useStableCallback)((e = eD) => e ? (0, h.tabbable)(e) : []), ew = (0, l.useStableCallback)(() => _ ? .().filter(e => null != e) ? ? []);
        t.useEffect(() => {
            if (O || !A) return;
            let e = (0, p.ownerDocument)(eD);
            return (0, o.addEventListener)(e, "keydown", function(e) {
                "Tab" === e.key && (0, m.contains)(eD, (0, m.activeElement)((0, p.ownerDocument)(eD))) && 0 === ey().length && !en && (0, b.stopEvent)(e)
            })
        }, [O, eD, A, en, ey]), t.useEffect(() => {
            if (O || !z) return;
            let e = (0, p.ownerDocument)(eD);

            function t() {
                ed.current = !1
            }
            return (0, r.mergeCleanups)((0, o.addEventListener)(e, "pointerdown", function(e) {
                let t = (0, m.getTarget)(e),
                    n = ew();
                ed.current = !((0, m.contains)(Q, t) || (0, m.contains)(J, t) || (0, m.contains)(ea ? .portalNode, t) || n.some(e => e === t || (0, m.contains)(e, t))), eg.current = e.pointerType || "keyboard", t ? .closest(`[${L.CLICK_TRIGGER_IDENTIFIER}]`) && (ec.current = !0, eC.start(0, () => {
                    ec.current = !1
                }))
            }, !0), (0, o.addEventListener)(e, "pointerup", t, !0), (0, o.addEventListener)(e, "pointercancel", t, !0), (0, o.addEventListener)(e, "keydown", function() {
                eg.current = "keyboard"
            }, !0), t)
        }, [O, Q, J, eD, z, ea, eC, ew]), t.useEffect(() => {
            if (O || !I) return;
            let e = (0, p.ownerDocument)(eD);

            function t(t) {
                let o = t.relatedTarget,
                    r = t.currentTarget,
                    i = (0, m.getTarget)(t);
                A && null == o && null != i && (0, m.contains)(Q, i) && j(i), queueMicrotask(() => {
                    let s = et(),
                        l = K.context.triggerElements,
                        a = ew(),
                        u = o ? .hasAttribute((0, D.createAttribute)("focus-guard")) && [em.current, ev.current, ea ? .beforeInsideRef.current, ea ? .afterInsideRef.current, ea ? .beforeOutsideRef.current, ea ? .afterOutsideRef.current, (0, B.resolveRef)($), (0, B.resolveRef)(G)].includes(o),
                        c = !((0, m.contains)(J, o) || (0, m.contains)(Q, o) || (0, m.contains)(o, Q) || (0, m.contains)(ea ? .portalNode, o) || a.some(e => e === o || (0, m.contains)(e, o)) || null != o && l.hasElement(o) || l.hasMatchingElement(e => (0, m.contains)(e, o)) || u || el && ((0, S.getNodeChildren)(el.nodesRef.current, s).find(e => (0, m.contains)(e.context ? .elements.floating, o) || (0, m.contains)(e.context ? .elements.domReference, o)) || (0, S.getNodeAncestors)(el.nodesRef.current, s).find(e => [e.context ? .elements.floating, (0, v.getFloatingFocusElement)(e.context ? .elements.floating)].includes(o) || e.context ? .elements.domReference === o)));
                    if (r === J && eD && q(eD), P && r !== J && !(0, C.isElementVisible)(i) && (0, m.activeElement)(e) === e.body) {
                        if ((0, n.isHTMLElement)(eD) && (eD.focus(), "popup" === P)) return void eE.request(() => {
                            eD.focus()
                        });
                        let e = ey(),
                            t = ep.current,
                            o = (t && e.includes(t) ? t : null) || e[e.length - 1] || eD;
                        (0, n.isHTMLElement)(o) && o.focus()
                    }
                    if (ee.current.insideReactTree) {
                        ee.current.insideReactTree = !1;
                        return
                    }(en || !A) && o && c && !ec.current && (en || o !== V()) && (eu.current = !0, K.setOpen(!1, (0, E.createChangeEventDetails)(R.REASONS.focusOut, t)))
                })
            }
            let i = (0, n.isHTMLElement)(J) ? J : null;
            if (Q || i) return (0, r.mergeCleanups)(i && (0, o.addEventListener)(i, "focusout", t), i && (0, o.addEventListener)(i, "pointerdown", function() {
                ec.current = !0, eC.start(0, () => {
                    ec.current = !1
                })
            }), Q && (0, o.addEventListener)(Q, "focusin", function(e) {
                let t = (0, m.getTarget)(e);
                (0, h.isTabbable)(t) && (ep.current = t)
            }), Q && (0, o.addEventListener)(Q, "focusout", t), Q && ea && (0, o.addEventListener)(Q, "focusout", function() {
                ed.current || (ee.current.insideReactTree = !0, eS.start(0, () => {
                    ee.current.insideReactTree = !1
                }))
            }, !0))
        }, [O, J, Q, eD, A, el, ea, K, I, P, ey, en, et, ee, eS, eC, eE, G, $, ew]), t.useEffect(() => {
            if (O || !Q || !z) return;
            let e = Array.from(ea ? .portalNode ? .querySelectorAll(`[${(0,D.createAttribute)("portal")}]`) || []),
                t = el ? (0, S.getNodeAncestors)(el.nodesRef.current, et()) : [],
                n = t.find(e => (0, v.isTypeableCombobox)(e.context ? .elements.domReference || null)) ? .context ? .elements.domReference,
                o = M([Q, ...e, em.current, ev.current, ea ? .beforeOutsideRef.current, ea ? .afterOutsideRef.current, ...ew(), n, (0, B.resolveRef)($), (0, B.resolveRef)(G), en ? J : null].filter(e => null != e), {
                    ariaHidden: A || en,
                    mark: !1
                }),
                r = M([Q, ...e].filter(e => null != e));
            return () => {
                r(), o()
            }
        }, [z, O, J, Q, A, ea, en, el, et, G, $, ew]), (0, a.useIsoLayoutEffect)(() => {
            if (!z || O || !(0, n.isHTMLElement)(eD)) return;
            let e = (0, p.ownerDocument)(eD),
                t = (0, m.activeElement)(e);
            queueMicrotask(() => {
                let n, o = eo.current,
                    r = "function" == typeof o ? o(ei.current || "") : o;
                if (void 0 === r || !1 === r || (0, m.contains)(eD, t)) return;
                let i = null,
                    s = () => (null == i && (i = ey(eD)), i[0] || eD);
                n = (n = !0 === r || null === r ? s() : (0, B.resolveRef)(r)) || s();
                let l = (0, m.contains)(eD, (0, m.activeElement)(e));
                (0, y.enqueueFocus)(n, {
                    preventScroll: n === eD,
                    shouldFocus() {
                        if (!es.current) return !1;
                        if (l) return !0;
                        let t = (0, m.activeElement)(e);
                        return !(t !== n && (0, m.contains)(eD, t))
                    }
                })
            })
        }, [O, z, eD, ey, eo, ei, es]), (0, a.useIsoLayoutEffect)(() => {
            if (O || !eD) return;
            let e = (0, p.ownerDocument)(eD),
                t = (0, m.activeElement)(e),
                o = null == ei.current;

            function r(e) {
                var t, n;
                let o;
                if (e.open || (t = e.nativeEvent, n = eg.current, o = (0, f.ownerWindow)((0, m.getTarget)(t)), ef.current = t instanceof o.KeyboardEvent ? "keyboard" : t instanceof o.FocusEvent ? n || "keyboard" : "pointerType" in t ? t.pointerType || "keyboard" : "touches" in t ? "touch" : t instanceof o.MouseEvent ? n || (0 === t.detail ? "keyboard" : "mouse") : ""), e.reason === R.REASONS.triggerHover && "mouseleave" === e.nativeEvent.type && (eu.current = !0), e.reason === R.REASONS.outsidePress)
                    if (e.nested) eu.current = !1;
                    else if ((0, b.isVirtualClick)(e.nativeEvent) || (0, b.isVirtualPointerEvent)(e.nativeEvent)) eu.current = !1;
                else {
                    let e = !1;
                    (0, p.ownerDocument)(eD).createElement("div").focus({
                        get preventScroll() {
                            return e = !0, !1
                        }
                    }), e ? eu.current = !1 : eu.current = !0
                }
            }
            return j(t), Z.on("openchange", r), () => {
                Z.off("openchange", r);
                let i = (0, m.activeElement)(e),
                    s = ew(),
                    l = (0, m.contains)(Q, i) || s.some(e => e === i || (0, m.contains)(e, i)) || el && (0, S.getNodeChildren)(el.nodesRef.current, et(), !1).some(e => (0, m.contains)(e.context ? .elements.floating, i)),
                    a = er.current,
                    u = function() {
                        let e = er.current,
                            r = "function" == typeof e ? e(ef.current) : e;
                        if (void 0 === r || !1 === r) return null;
                        null === r && (r = !0);
                        let i = J ? .isConnected ? J : null,
                            s = t ? .isConnected && "body" !== (0, n.getNodeName)(t) ? t : null,
                            l = o ? s || i : i || s;
                        return (l || (l = V() || null), "boolean" == typeof r) ? l : (0, B.resolveRef)(r) || l || null
                    }();
                queueMicrotask(() => {
                    let t = u ? (0, h.isTabbable)(u) ? u : (0, h.tabbable)(u)[0] || u : null;
                    a && !eu.current && (0, n.isHTMLElement)(t) && ("boolean" != typeof a || t === i || i === e.body || l) && t.focus({
                        preventScroll: !0
                    }), eu.current = !1
                })
            }
        }, [O, Q, eD, er, ei, Z, el, J, et, ew]), (0, a.useIsoLayoutEffect)(() => {
            if (!c.platform.engine.webkit || z || !Q) return;
            let e = (0, m.activeElement)((0, p.ownerDocument)(Q));
            (0, n.isHTMLElement)(e) && (0, v.isTypeableElement)(e) && (0, m.contains)(Q, e) && e.blur()
        }, [z, Q]), (0, a.useIsoLayoutEffect)(() => {
            if (!O && ea) return ea.setFocusManagerState({
                modal: A,
                closeOnFocusOut: I,
                open: z,
                onOpenChange: K.setOpen,
                domReference: J
            }), () => {
                ea.setFocusManagerState(null)
            }
        }, [O, ea, A, z, K, I, J]), (0, a.useIsoLayoutEffect)(() => {
            if (!O && eD) return q(eD), () => {
                queueMicrotask(H)
            }
        }, [O, eD]);
        let ex = !O && (!A || !en) && (eR || A);
        return (0, W.jsxs)(t.Fragment, {
            children: [ex && (0, W.jsx)(g.FocusGuard, {
                "data-type": "inside",
                ref: eb,
                onFocus: e => {
                    if (A) {
                        let e = ey();
                        (0, y.enqueueFocus)(e[e.length - 1])
                    } else if (ea ? .portalNode)
                        if (eu.current = !1, (0, h.isOutsideEvent)(e, ea.portalNode)) {
                            let e = (0, h.getNextTabbable)(J);
                            e ? .focus()
                        } else(0, B.resolveRef)($ ? ? ea.beforeOutsideRef) ? .focus()
                }
            }), x, ex && (0, W.jsx)(g.FocusGuard, {
                "data-type": "inside",
                ref: eh,
                onFocus: e => {
                    if (A)(0, y.enqueueFocus)(ey()[0]);
                    else if (ea ? .portalNode)
                        if (I && (eu.current = !0), (0, h.isOutsideEvent)(e, ea.portalNode)) {
                            let e = (0, h.getPreviousTabbable)(J);
                            e ? .focus()
                        } else(0, B.resolveRef)(G ? ? ea.afterOutsideRef) ? .focus()
                }
            })]
        })
    }], 267785)
}, 740922, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(2063),
        o = e.i(962599),
        r = e.i(248134),
        i = e.i(83054),
        s = e.i(89676),
        l = e.i(684864),
        a = e.i(276444),
        u = e.i(587758);
    e.s(["useClick", 0, function(e, c = {}) {
        let {
            enabled: d = !0,
            event: p = "click",
            toggle: f = !0,
            ignoreMouse: g = !1,
            stickIfOpen: m = !0,
            touchOpenDelay: v = 0,
            reason: b = u.REASONS.triggerPress
        } = c, h = "rootStore" in e ? e.rootStore : e, S = h.context.dataRef, C = t.useRef(void 0), E = (0, n.useAnimationFrame)(), R = (0, o.useTimeout)(), D = t.useMemo(() => {
            function e(e, t, n, o) {
                let r = (0, a.createChangeEventDetails)(b, t, n);
                e && "touch" === o && v > 0 ? R.start(v, () => {
                    h.setOpen(!0, r)
                }) : h.setOpen(e, r)
            }

            function t(e, t, n) {
                let o = S.current.openEvent,
                    r = h.select("domReferenceElement") !== t;
                return !!e && !!r || !e || !f || !!o && !!m && !n(o.type)
            }
            return {
                onPointerDown(e) {
                    C.current = e.pointerType
                },
                onMouseDown(n) {
                    let o = C.current,
                        r = n.nativeEvent,
                        a = h.select("open");
                    if (0 !== n.button || "click" === p || (0, l.isMouseLikePointerType)(o, !0) && g) return;
                    let u = t(a, n.currentTarget, e => "click" === e || "mousedown" === e),
                        c = (0, i.getTarget)(r);
                    if ((0, s.isTypeableElement)(c)) return void e(u, r, c, o);
                    let d = n.currentTarget;
                    E.request(() => {
                        e(u, r, d, o)
                    })
                },
                onClick(n) {
                    if ("mousedown-only" === p) return;
                    let o = C.current;
                    if ("mousedown" === p && o) {
                        C.current = void 0;
                        return
                    }(0, l.isMouseLikePointerType)(o, !0) && g || e(t(h.select("open"), n.currentTarget, e => "click" === e || "mousedown" === e || "keydown" === e || "keyup" === e), n.nativeEvent, n.currentTarget, o)
                },
                onKeyDown() {
                    C.current = void 0
                }
            }
        }, [S, p, g, b, h, m, f, E, R, v]);
        return t.useMemo(() => d ? {
            reference: D
        } : r.EMPTY_OBJECT, [d, D])
    }])
}, 151146, e => {
    "use strict";
    var t = e.i(248134);
    let n = 0;
    e.s(["enqueueFocus", 0, function(e, o = {}) {
        let {
            preventScroll: r = !1,
            sync: i = !1,
            shouldFocus: s
        } = o;

        function l() {
            (!s || s()) && e ? .focus({
                preventScroll: r
            })
        }
        if (cancelAnimationFrame(n), i) return l(), t.NOOP;
        let a = requestAnimationFrame(l);
        return n = a, () => {
            n === a && (cancelAnimationFrame(a), n = 0)
        }
    }])
}, 271523, e => {
    "use strict";
    e.i(301016);
    var t = e.i(136263),
        n = e.i(52644);
    let o = t.forwardRef(function(e, t) {
        let o, {
            cutout: r,
            ...i
        } = e;
        if (r) {
            let e = r.getBoundingClientRect();
            o = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${e.left}px ${e.top}px,${e.left}px ${e.bottom}px,${e.right}px ${e.bottom}px,${e.right}px ${e.top}px,${e.left}px ${e.top}px)`
        }
        return (0, n.jsx)("div", {
            ref: t,
            role: "presentation",
            "data-base-ui-inert": "",
            ...i,
            style: {
                position: "fixed",
                inset: 0,
                userSelect: "none",
                WebkitUserSelect: "none",
                clipPath: o
            }
        })
    });
    e.s(["InternalBackdrop", 0, o])
}, 275913, e => {
    "use strict";
    var t = e.i(136263),
        n = e.i(48164),
        o = e.i(903277),
        r = e.i(828539);

    function i(e, r) {
        var i;
        let s, l, {
            onClick: a,
            onPointerDown: u
        } = (i = (0, n.useStableCallback)((t, n) => {
            ("function" == typeof e ? e() : e) || r(n || (o.platform.os.ios ? "touch" : ""))
        }), s = t.useRef(""), l = t.useCallback(e => {
            e.defaultPrevented || (s.current = e.pointerType, i(e, e.pointerType))
        }, [i]), {
            onClick: t.useCallback(e => {
                0 === e.detail ? i(e, "keyboard") : ("pointerType" in e ? i(e, e.pointerType) : i(e, s.current), s.current = "")
            }, [i]),
            onPointerDown: l
        });
        return t.useMemo(() => ({
            onClick: a,
            onPointerDown: u
        }), [a, u])
    }
    e.s(["useOpenInteractionType", 0, function(e) {
        let [n, o] = t.useState(null), s = i(e, o);
        return (0, r.useValueChanged)(e, t => {
            t && !e && o(null)
        }), t.useMemo(() => ({
            openMethod: n,
            triggerProps: s
        }), [n, s])
    }, "useOpenMethodTriggerProps", 0, i], 275913)
}, 50568, e => {
    "use strict";
    var t = e.i(92615),
        n = e.i(544570),
        o = e.i(903277),
        r = e.i(521498),
        i = e.i(285182),
        s = e.i(599543),
        l = e.i(962599),
        a = e.i(2063),
        u = e.i(248134);
    let c = {},
        d = {},
        p = "";
    class f {
        lockCount = 0;
        restore = null;
        timeoutLock = l.Timeout.create();
        timeoutUnlock = l.Timeout.create();
        acquire(e) {
            return this.lockCount += 1, 1 === this.lockCount && null === this.restore && this.timeoutLock.start(0, () => this.lock(e)), this.release
        }
        release = () => {
            this.lockCount -= 1, 0 === this.lockCount && this.restore && this.timeoutUnlock.start(0, this.unlock)
        };
        unlock = () => {
            0 === this.lockCount && this.restore && (this.restore ? .(), this.restore = null)
        };
        lock(e) {
            let s, l, f, g, m;
            if (0 === this.lockCount || null !== this.restore) return;
            let v = (0, r.ownerDocument)(e).documentElement,
                b = (0, i.ownerWindow)(v).getComputedStyle(v).overflowY;
            if ("hidden" === b || "clip" === b) {
                this.restore = u.NOOP;
                return
            }
            let h = o.platform.os.ios || ! function(e) {
                if ("u" < typeof document) return !1;
                let t = (0, r.ownerDocument)(e);
                return (0, i.ownerWindow)(t).innerWidth - t.documentElement.clientWidth > 0
            }(e);
            this.restore = h ? (l = (s = (0, r.ownerDocument)(e)).documentElement, f = s.body, m = {
                overflowY: (g = (0, t.isOverflowElement)(l) ? l : f).style.overflowY,
                overflowX: g.style.overflowX
            }, Object.assign(g.style, {
                overflowY: "hidden",
                overflowX: "hidden"
            }), () => {
                Object.assign(g.style, m)
            }) : function(e) {
                let s = (0, r.ownerDocument)(e),
                    l = s.documentElement,
                    u = s.body,
                    f = (0, i.ownerWindow)(l),
                    g = 0,
                    m = 0,
                    v = !1,
                    b = a.AnimationFrame.create();
                if (o.platform.engine.webkit && (f.visualViewport ? .scale ? ? 1) !== 1) return () => {};

                function h() {
                    let n = f.getComputedStyle(l),
                        o = f.getComputedStyle(u),
                        i = (n.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
                    g = l.scrollTop, m = l.scrollLeft, c = {
                        scrollbarGutter: l.style.scrollbarGutter,
                        overflowY: l.style.overflowY,
                        overflowX: l.style.overflowX
                    }, p = l.style.scrollBehavior, d = {
                        position: u.style.position,
                        height: u.style.height,
                        width: u.style.width,
                        boxSizing: u.style.boxSizing,
                        overflowY: u.style.overflowY,
                        overflowX: u.style.overflowX,
                        scrollBehavior: u.style.scrollBehavior
                    };
                    let s = l.scrollHeight > l.clientHeight,
                        a = l.scrollWidth > l.clientWidth,
                        b = "scroll" === n.overflowY || "scroll" === o.overflowY,
                        h = "scroll" === n.overflowX || "scroll" === o.overflowX,
                        S = Math.max(0, f.innerWidth - u.clientWidth),
                        C = Math.max(0, f.innerHeight - u.clientHeight),
                        E = parseFloat(o.marginTop) + parseFloat(o.marginBottom),
                        R = parseFloat(o.marginLeft) + parseFloat(o.marginRight),
                        D = (0, t.isOverflowElement)(l) ? l : u;
                    if (v = function(e) {
                            if (!("u" > typeof CSS && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || "u" < typeof document) return !1;
                            let n = (0, r.ownerDocument)(e),
                                o = n.documentElement,
                                i = n.body,
                                s = (0, t.isOverflowElement)(o) ? o : i,
                                l = s.style.overflowY,
                                a = o.style.scrollbarGutter;
                            o.style.scrollbarGutter = "stable", s.style.overflowY = "scroll";
                            let u = s.offsetWidth;
                            s.style.overflowY = "hidden";
                            let c = s.offsetWidth;
                            return s.style.overflowY = l, o.style.scrollbarGutter = a, u === c
                        }(e)) {
                        l.style.scrollbarGutter = i, D.style.overflowY = "hidden", D.style.overflowX = "hidden";
                        return
                    }
                    Object.assign(l.style, {
                        scrollbarGutter: i,
                        overflowY: "hidden",
                        overflowX: "hidden"
                    }), (s || b) && (l.style.overflowY = "scroll"), (a || h) && (l.style.overflowX = "scroll"), Object.assign(u.style, {
                        position: "relative",
                        height: E || C ? `calc(100dvh - ${E+C}px)` : "100dvh",
                        width: R || S ? `calc(100vw - ${R+S}px)` : "100vw",
                        boxSizing: "border-box",
                        overflow: "hidden",
                        scrollBehavior: "unset"
                    }), u.scrollTop = g, u.scrollLeft = m, l.setAttribute("data-base-ui-scroll-locked", ""), l.style.scrollBehavior = "unset"
                }

                function S() {
                    Object.assign(l.style, c), Object.assign(u.style, d), v || (l.scrollTop = g, l.scrollLeft = m, l.removeAttribute("data-base-ui-scroll-locked"), l.style.scrollBehavior = p)
                }
                h();
                let C = (0, n.addEventListener)(f, "resize", function() {
                    S(), b.request(h)
                });
                return () => {
                    b.cancel(), S(), "function" == typeof f.removeEventListener && C()
                }
            }(e)
        }
    }
    let g = new f;
    e.s(["useScrollLock", 0, function(e = !0, t = null) {
        (0, s.useIsoLayoutEffect)(() => {
            if (e) return g.acquire(t)
        }, [e, t])
    }])
}]);