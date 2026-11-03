(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 580378, e => {
    "use strict";
    var t = "1.3.26";

    function i(e, t, i) {
        return Math.max(e, Math.min(t, i))
    }
    var n = class {
            isRunning = !1;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(e) {
                if (!this.isRunning) return;
                let t = !1;
                if (this.duration && this.easing) {
                    this.currentTime += e;
                    let n = i(0, this.currentTime / this.duration, 1),
                        s = (t = n >= 1) ? 1 : this.easing(n);
                    this.value = this.from + (this.to - this.from) * s
                } else if (this.lerp) {
                    var n, s, r, o;
                    this.value = (n = this.value, s = this.to, r = 60 * this.lerp, (1 - (o = 1 - Math.exp(-r * e))) * n + o * s), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)
                } else this.value = this.to, t = !0;
                t && this.stop(), this.onUpdate ? .(this.value, t)
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(e, t, {
                lerp: i,
                duration: n,
                easing: s,
                onStart: r,
                onUpdate: o
            }) {
                this.from = this.value = e, this.to = t, this.lerp = i, this.duration = n, this.easing = s, this.currentTime = 0, this.isRunning = !0, r ? .(), this.onUpdate = o
            }
        },
        s = class {
            width = 0;
            height = 0;
            scrollHeight = 0;
            scrollWidth = 0;
            debouncedResize;
            wrapperResizeObserver;
            contentResizeObserver;
            constructor(e, t, {
                autoResize: i = !0,
                debounce: n = 250
            } = {}) {
                this.wrapper = e, this.content = t, i && (this.debouncedResize = function(e, t) {
                    let i;
                    return function(...n) {
                        clearTimeout(i), i = setTimeout(() => {
                            i = void 0, e.apply(this, n)
                        }, t)
                    }
                }(this.resize, n), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            destroy() {
                this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize)
            }
            resize = () => {
                this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            };
            onContentResize = () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        },
        r = class {
            events = {};
            emit(e, ...t) {
                let i = this.events[e] || [];
                for (let e = 0, n = i.length; e < n; e++) i[e] ? .(...t)
            }
            on(e, t) {
                return this.events[e] ? this.events[e].push(t) : this.events[e] = [t], () => {
                    this.events[e] = this.events[e] ? .filter(e => t !== e)
                }
            }
            off(e, t) {
                this.events[e] = this.events[e] ? .filter(e => t !== e)
            }
            destroy() {
                this.events = {}
            }
        };
    let o = 100 / 6,
        l = {
            passive: !1
        };

    function a(e, t) {
        return 1 === e ? o : 2 === e ? t : 1
    }
    var c = class {
        touchStart = {
            x: 0,
            y: 0
        };
        lastDelta = {
            x: 0,
            y: 0
        };
        window = {
            width: 0,
            height: 0
        };
        emitter = new r;
        constructor(e, t = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onTouchMove, l), this.element.addEventListener("touchend", this.onTouchEnd, l)
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onTouchMove, l), this.element.removeEventListener("touchend", this.onTouchEnd, l)
        }
        onTouchStart = e => {
            let {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        };
        onTouchMove = e => {
            let {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e, n = -(t - this.touchStart.x) * this.options.touchMultiplier, s = -(i - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: n,
                y: s
            }, this.emitter.emit("scroll", {
                deltaX: n,
                deltaY: s,
                event: e
            })
        };
        onTouchEnd = e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        };
        onWheel = e => {
            let {
                deltaX: t,
                deltaY: i,
                deltaMode: n
            } = e, s = a(n, this.window.width), r = a(n, this.window.height);
            t *= s, i *= r, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: i,
                event: e
            })
        };
        onWindowResize = () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    };
    let h = e => Math.min(1, 1.001 - 2 ** (-10 * e));
    var u = class {
            _isScrolling = !1;
            _isStopped = !1;
            _isLocked = !1;
            _preventNextNativeScrollEvent = !1;
            _resetVelocityTimeout = null;
            _rafId = null;
            _isDraggingSelection = !1;
            reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
            isTouching;
            isIos;
            time = 0;
            userData = {};
            lastVelocity = 0;
            velocity = 0;
            direction = 0;
            options;
            targetScroll;
            animatedScroll;
            animate = new n;
            emitter = new r;
            dimensions;
            virtualScroll;
            constructor({
                wrapper: e = window,
                content: i = document.documentElement,
                eventsTarget: n = e,
                smoothWheel: r = !0,
                syncTouch: o = !1,
                syncTouchLerp: l = .075,
                touchInertiaExponent: a = 1.7,
                duration: u,
                easing: d,
                lerp: p = .1,
                infinite: m = !1,
                orientation: f = "vertical",
                gestureOrientation: v = "horizontal" === f ? "both" : "vertical",
                touchMultiplier: g = 1,
                wheelMultiplier: y = 1,
                autoResize: w = !0,
                prevent: x,
                virtualScroll: b,
                overscroll: S = !0,
                autoRaf: E = !1,
                anchors: N = !1,
                autoToggle: T = !1,
                allowNestedScroll: k = !1,
                __experimental__naiveDimensions: L = !1,
                naiveDimensions: M = L,
                stopInertiaOnNavigate: j = !1,
                respectReducedMotion: R = !0
            } = {}) {
                window.lenisVersion = t, window.lenis || (window.lenis = {}), window.lenis.version = t, "horizontal" === f && (window.lenis.horizontal = !0), !0 === o && (window.lenis.touch = !0), this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent), e && e !== document.documentElement || (e = window), "number" == typeof u && "function" != typeof d ? d = h : "function" == typeof d && "number" != typeof u && (u = 1), this.options = {
                    wrapper: e,
                    content: i,
                    eventsTarget: n,
                    smoothWheel: r,
                    syncTouch: o,
                    syncTouchLerp: l,
                    touchInertiaExponent: a,
                    duration: u,
                    easing: d,
                    lerp: p,
                    infinite: m,
                    gestureOrientation: v,
                    orientation: f,
                    touchMultiplier: g,
                    wheelMultiplier: y,
                    autoResize: w,
                    prevent: x,
                    virtualScroll: b,
                    overscroll: S,
                    autoRaf: E,
                    anchors: N,
                    autoToggle: T,
                    allowNestedScroll: k,
                    naiveDimensions: M,
                    stopInertiaOnNavigate: j,
                    respectReducedMotion: R
                }, this.dimensions = new s(e, i, {
                    autoResize: w
                }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new c(n, {
                    touchMultiplier: g,
                    wheelMultiplier: y
                }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            }
            destroy() {
                this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId)
            }
            on(e, t) {
                return this.emitter.on(e, t)
            }
            off(e, t) {
                return this.emitter.off(e, t)
            }
            onScrollEnd = e => {
                e instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || e.stopPropagation()
            };
            dispatchScrollendEvent = () => {
                this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                    bubbles: this.options.wrapper === window,
                    detail: {
                        lenisScrollEnd: !0
                    }
                }))
            };
            get overflow() {
                let e = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[e]
            }
            checkOverflow() {
                ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
            }
            onTransitionEnd = e => {
                e.propertyName ? .includes("overflow") && e.target === this.rootElement && this.checkOverflow()
            };
            setScroll(e) {
                this.isHorizontal ? this.options.wrapper.scrollTo({
                    left: e,
                    behavior: "instant"
                }) : this.options.wrapper.scrollTo({
                    top: e,
                    behavior: "instant"
                })
            }
            onClick = e => {
                let t = e.composedPath().filter(e => e instanceof HTMLAnchorElement && e.href).map(e => new URL(e.href)),
                    i = new URL(window.location.href);
                if (this.options.anchors) {
                    let e = t.find(e => i.host === e.host && i.pathname === e.pathname && e.hash);
                    if (e) {
                        let t = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
                            i = decodeURIComponent(e.hash);
                        this.scrollTo(i, t);
                        return
                    }
                }
                if (this.options.stopInertiaOnNavigate && t.some(e => i.host === e.host && i.pathname !== e.pathname)) return void this.reset()
            };
            onPointerDown = e => {
                1 === e.button && this.reset()
            };
            isTouchOnSelectionHandle(e) {
                let t = window.getSelection();
                if (!t || t.isCollapsed || 0 === t.rangeCount) return !1;
                let i = e.targetTouches[0] ? ? e.changedTouches[0];
                if (!i) return !1;
                let n = t.getRangeAt(0).getClientRects();
                if (0 === n.length) return !1;
                let s = n[0],
                    r = n[n.length - 1],
                    o = 40 >= Math.hypot(i.clientX - s.left, i.clientY - s.top),
                    l = 40 >= Math.hypot(i.clientX - r.right, i.clientY - r.bottom);
                return o || l
            }
            onVirtualScroll = e => {
                if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e)) return;
                let {
                    deltaX: t,
                    deltaY: i,
                    event: n
                } = e;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: t,
                        deltaY: i,
                        event: n
                    }), n.ctrlKey || n.lenisStopPropagation) return;
                let s = n.type.includes("touch"),
                    r = n.type.includes("wheel");
                if (s && this.isIos && ("touchstart" === n.type && (this._isDraggingSelection = this.isTouchOnSelectionHandle(n)), this._isDraggingSelection)) {
                    "touchend" === n.type && (this._isDraggingSelection = !1);
                    return
                }
                this.isTouching = "touchstart" === n.type || "touchmove" === n.type;
                let o = 0 === t && 0 === i;
                if (this.options.syncTouch && s && "touchstart" === n.type && o && !this.isStopped && !this.isLocked) return void this.reset();
                let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === t;
                if (o || l) return;
                let a = n.composedPath();
                a = a.slice(0, a.indexOf(this.rootElement));
                let c = this.options.prevent,
                    h = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
                if (a.find(e => e instanceof HTMLElement && ("function" == typeof c && c ? .(e) || e.hasAttribute ? .("data-lenis-prevent") || "vertical" === h && e.hasAttribute ? .("data-lenis-prevent-vertical") || "horizontal" === h && e.hasAttribute ? .("data-lenis-prevent-horizontal") || s && e.hasAttribute ? .("data-lenis-prevent-touch") || r && e.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(e, {
                        deltaX: t,
                        deltaY: i
                    })))) return;
                if (this.isStopped || this.isLocked) {
                    n.cancelable && n.preventDefault();
                    return
                }
                if (!(this.options.syncTouch && s || this.options.smoothWheel && r)) {
                    this.isScrolling = "native", this.animate.stop(), n.lenisStopPropagation = !0;
                    return
                }
                let u = i;
                "both" === this.options.gestureOrientation ? u = Math.abs(i) > Math.abs(t) ? i : t : "horizontal" === this.options.gestureOrientation && (u = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (n.lenisStopPropagation = !0), n.cancelable && n.preventDefault();
                let d = s && this.options.syncTouch,
                    p = s && "touchend" === n.type;
                p && (u = Math.sign(u) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + u, {
                    programmatic: !1,
                    ...d ? {
                        lerp: p ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
            };
            resize() {
                this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            onNativeScroll = () => {
                if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = !1;
                    return
                }
                if (!1 === this.isScrolling || "native" === this.isScrolling) {
                    let e = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            };
            reset() {
                this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
            }
            start() {
                if (this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
                    this.internalStart()
                }
            }
            internalStart() {
                this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
            }
            stop() {
                if (!this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
                    this.internalStop()
                }
            }
            internalStop() {
                this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
            }
            raf = e => {
                let t = e - (this.time || e);
                this.time = e, this.animate.advance(.001 * t), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            };
            scrollTo(e, {
                offset: t = 0,
                immediate: n = !1,
                lock: s = !1,
                programmatic: r = !0,
                lerp: o = r ? this.options.lerp : void 0,
                duration: l = r ? this.options.duration : void 0,
                easing: a = r ? this.options.easing : void 0,
                onStart: c,
                onComplete: u,
                force: d = !1,
                userData: p
            } = {}) {
                if (this.prefersReducedMotion && (r ? n = !0 : (o = 1, l = void 0, a = void 0)), (this.isStopped || this.isLocked) && !d) return;
                let m = e,
                    f = t;
                if ("string" == typeof m && ["top", "left", "start", "#"].includes(m)) m = 0;
                else if ("string" == typeof m && ["bottom", "right", "end"].includes(m)) m = this.limit;
                else {
                    let e = null;
                    if ("string" == typeof m ? (e = m.startsWith("#") ? document.getElementById(m.slice(1)) : document.querySelector(m)) || ("#top" === m ? m = 0 : console.warn("Lenis: Target not found", m)) : m instanceof HTMLElement && m ? .nodeType && (e = m), e) {
                        if (this.options.wrapper !== window) {
                            let e = this.rootElement.getBoundingClientRect();
                            f -= this.isHorizontal ? e.left : e.top
                        }
                        let t = e.getBoundingClientRect(),
                            i = getComputedStyle(e),
                            n = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop),
                            s = getComputedStyle(this.rootElement),
                            r = this.isHorizontal ? Number.parseFloat(s.scrollPaddingLeft) : Number.parseFloat(s.scrollPaddingTop);
                        m = (this.isHorizontal ? t.left : t.top) + this.animatedScroll - (Number.isNaN(n) ? 0 : n) - (Number.isNaN(r) ? 0 : r)
                    }
                }
                if ("number" == typeof m) {
                    if (m += f, this.options.infinite) {
                        if (r) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            let e = m - this.animatedScroll;
                            e > this.limit / 2 ? m -= this.limit : e < -this.limit / 2 && (m += this.limit)
                        }
                    } else m = i(0, m, this.limit);
                    if (m === this.targetScroll) {
                        c ? .(this), u ? .(this);
                        return
                    }
                    if (this.userData = p ? ? {}, n) {
                        this.animatedScroll = this.targetScroll = m, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u ? .(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        });
                        return
                    }
                    r || (this.targetScroll = m), "number" == typeof l && "function" != typeof a ? a = h : "function" == typeof a && "number" != typeof l && (l = 1), this.animate.fromTo(this.animatedScroll, m, {
                        duration: l,
                        easing: a,
                        lerp: o,
                        onStart: () => {
                            s && (this.isLocked = !0), this.isScrolling = "smooth", c ? .(this)
                        },
                        onUpdate: (e, t) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), r && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), u ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                this.dispatchScrollendEvent()
                            }), this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
            preventNextNativeScrollEvent() {
                this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                    this._preventNextNativeScrollEvent = !1
                })
            }
            hasNestedScroll(e, {
                deltaX: t,
                deltaY: i
            }) {
                let n, s, r, o, l, a, c, h, u, d, p, m, f, v, g, y, w = Date.now();
                e._lenis || (e._lenis = {});
                let x = e._lenis;
                if (w - (x.time ? ? 0) > 2e3) {
                    x.time = Date.now();
                    let t = window.getComputedStyle(e);
                    if (x.computedStyle = t, n = ["auto", "overlay", "scroll"].includes(t.overflowX), s = ["auto", "overlay", "scroll"].includes(t.overflowY), l = ["auto"].includes(t.overscrollBehaviorX), a = ["auto"].includes(t.overscrollBehaviorY), x.hasOverflowX = n, x.hasOverflowY = s, !(n || s)) return !1;
                    c = e.scrollWidth, h = e.scrollHeight, u = e.clientWidth, d = e.clientHeight, r = c > u, o = h > d, x.isScrollableX = r, x.isScrollableY = o, x.scrollWidth = c, x.scrollHeight = h, x.clientWidth = u, x.clientHeight = d, x.hasOverscrollBehaviorX = l, x.hasOverscrollBehaviorY = a
                } else r = x.isScrollableX, o = x.isScrollableY, n = x.hasOverflowX, s = x.hasOverflowY, c = x.scrollWidth, h = x.scrollHeight, u = x.clientWidth, d = x.clientHeight, l = x.hasOverscrollBehaviorX, a = x.hasOverscrollBehaviorY;
                if (!(n && r || s && o)) return !1;
                let b = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
                if ("horizontal" === b) p = Math.round(e.scrollLeft), m = c - u, f = t, v = n, g = r, y = l;
                else {
                    if ("vertical" !== b) return !1;
                    p = Math.round(e.scrollTop), m = h - d, f = i, v = s, g = o, y = a
                }
                return !y && (p >= m || p <= 0) || (f > 0 ? p < m : p > 0) && v && g
            }
            get rootElement() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
                return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
                return "horizontal" === this.options.orientation
            }
            get actualScroll() {
                let e = this.options.wrapper;
                return this.isHorizontal ? e.scrollX ? ? e.scrollLeft : e.scrollY ? ? e.scrollTop
            }
            get scroll() {
                var e;
                return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
            }
            get progress() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isScrolling() {
                return this._isScrolling
            }
            set isScrolling(e) {
                this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
            }
            get isStopped() {
                return this._isStopped
            }
            set isStopped(e) {
                this._isStopped !== e && (this._isStopped = e, this.updateClassName())
            }
            get isLocked() {
                return this._isLocked
            }
            set isLocked(e) {
                this._isLocked !== e && (this._isLocked = e, this.updateClassName())
            }
            get isSmooth() {
                return "smooth" === this.isScrolling
            }
            get prefersReducedMotion() {
                return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches
            }
            get className() {
                let e = "lenis";
                return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), "smooth" === this.isScrolling && (e += " lenis-smooth"), e
            }
            updateClassName() {
                this.cleanUpClassName(), this.className.split(" ").forEach(e => {
                    this.rootElement.classList.add(e)
                })
            }
            cleanUpClassName() {
                for (let e of Array.from(this.rootElement.classList))("lenis" === e || e.startsWith("lenis-")) && this.rootElement.classList.remove(e)
            }
        },
        d = e.i(829824),
        p = e.i(136263),
        m = e.i(500792);
    let f = !1,
        v = !1,
        g = 0,
        y = 0;
    e.s(["MarketingScroll", 0, function() {
        let e = (0, d.usePathname)();
        return (0, p.useEffect)(() => {
            let t;
            if (!e) return;
            let i = window.matchMedia("(prefers-reduced-motion: reduce)"),
                n = () => {
                    t && ([document.body, document.documentElement].some(e => {
                        let t = e.style.overflowY || e.style.overflow.trim().split(/\s+/).at(-1);
                        return "hidden" === t || "clip" === t
                    }) ? t.stop() : t.start())
                },
                s = () => {
                    (t ? .destroy(), t = void 0, i.matches) ? (0, m.publishLenis)(null) : (t = new u({
                        autoRaf: !0,
                        duration: 1.2,
                        allowNestedScroll: !0,
                        virtualScroll: e => (t && function(e, t) {
                            let i = document.querySelector("[data-scroll-hold]");
                            if (!i || 0 === t.deltaY) return;
                            let n = i.getBoundingClientRect().bottom + window.scrollY - window.innerHeight,
                                s = e.targetScroll;
                            if (s < n - 160 && (f = !0), t.deltaY < 0) {
                                v = !1;
                                return
                            }
                            if (v) {
                                if ((g += t.deltaY) >= 400 && performance.now() - y >= 400) {
                                    v = !1;
                                    return
                                }
                                t.deltaY *= .1;
                                return
                            }
                            f && s < n && s + t.deltaY > n && (t.deltaY = Math.max(0, n - s), f = !1, v = !0, g = 0, y = performance.now())
                        }(t, e), !0)
                    }), (0, m.publishLenis)(t), n())
                };
            s();
            let r = e => {
                if (!t || 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                let i = e.composedPath().find(e => e instanceof HTMLAnchorElement);
                !i ? .hasAttribute("href") || i.origin !== location.origin || i.hasAttribute("download") || i.target && "_self" !== i.target || i.pathname === location.pathname && i.search === location.search && !i.hash || "smooth" === t.isScrolling && t.scrollTo(window.scrollY, {
                    immediate: !0
                })
            };
            window.addEventListener("click", r, !0);
            let o = new MutationObserver(n);
            for (let e of [document.body, document.documentElement]) o.observe(e, {
                attributes: !0,
                attributeFilter: ["style"]
            });
            return i.addEventListener("change", s), () => {
                o.disconnect(), i.removeEventListener("change", s), window.removeEventListener("click", r, !0), t ? .destroy(), (0, m.publishLenis)(null)
            }
        }, [e]), null
    }], 580378)
}, 955400, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(635356),
        n = e.i(106510),
        s = e.i(496036),
        r = e.i(888978),
        o = e.i(451035),
        l = e.i(618373),
        a = e.i(136263),
        c = e.i(926368);
    let h = "M1604.4 63.0762C1788.28 63.0762 1870.25 120.784 1870.25 250.149V471.443C1870.25 531.118 1873.94 570.702 1874.06 571.061H1792.59C1792.59 570.875 1790.28 549.295 1792.59 514.545C1767.04 552.759 1677.94 578.453 1570.92 578.453C1491.44 578.453 1428.09 567.245 1392.54 546.856C1352.8 524.083 1333.49 488.791 1333.49 439.012C1333.49 312.09 1467.51 295.517 1689.56 268.094C1719.18 264.457 1749.48 260.701 1781.41 256.469C1781.41 175.809 1735.05 147.193 1604.4 147.193C1496.25 147.193 1448.02 177.836 1448.02 246.633H1357.67C1357.67 131.694 1449.89 63.0762 1604.4 63.0762ZM722.384 571.06H632.789V132.706H722.384V571.06ZM321.643 0C538.32 0 561.75 128.65 561.812 183.974C561.812 239.237 538.383 367.888 321.643 367.888H89.5947V571.058H0V0H321.643ZM888.579 303.384L1197.79 66.5312H1321.87L997.293 310.419L1330.62 571.058H1200.66L888.579 329.973V571.058H798.984V0H888.579V303.384ZM1781.47 331.466C1647.51 346.25 1553.23 358.709 1497.13 374.806C1445.08 389.71 1423.84 408.131 1423.84 438.297C1423.84 500.118 1505.25 509.358 1553.8 509.358C1633.02 509.358 1686.56 500.118 1722.18 480.325C1762.04 458.208 1781.41 421.186 1781.41 367.234H1781.47V331.466ZM89.5947 283.114H305.461C417.673 283.114 465.532 253.426 465.595 183.914C465.595 114.402 417.736 84.7735 305.523 84.7734H89.5947V283.114ZM722.384 92.6426H632.789V0H722.384V92.6426Z",
        u = "footer-logotype-fluid",
        d = {
            stiffness: 150,
            damping: 25
        };
    e.s(["FooterLogotype", 0, function() {
        let e = (0, a.useRef)(null),
            {
                scrollYProgress: p
            } = (0, r.useScroll)({
                target: e,
                offset: ["start end", "end end"]
            }),
            m = (0, o.useSpring)(p, c.SCRUB_SPRING),
            f = (0, l.useTransform)(m, [0, 1], ["100%", "0%"]),
            v = (0, s.useMotionValue)(.5),
            g = (0, o.useSpring)((0, l.useTransform)(v, [0, 1], [0, 1874]), d),
            y = (0, s.useMotionValue)(0),
            w = (0, o.useSpring)(y, d);
        return (0, t.jsx)("div", {
            ref: e,
            onPointerMove: e => {
                if ("mouse" !== e.pointerType) return;
                let t = e.currentTarget.getBoundingClientRect();
                v.set((e.clientX - t.left) / t.width), y.set(1)
            },
            onPointerLeave: e => {
                "mouse" === e.pointerType && (v.set(.5), y.set(0))
            },
            className: (0, i.cn)("relative aspect-1257/388 w-full", "overflow-hidden text-invert-900"),
            children: (0, t.jsx)(n.motion.div, {
                style: {
                    y: f
                },
                className: "motion-reduce:transform-none! absolute inset-0",
                children: (0, t.jsxs)("svg", {
                    viewBox: "0 0 1874 578.45",
                    "aria-hidden": !0,
                    fill: "none",
                    className: "absolute inset-0 size-full",
                    children: [(0, t.jsx)("path", {
                        d: h,
                        className: "fill-invert-200"
                    }), (0, t.jsx)(n.motion.path, {
                        d: h,
                        style: {
                            opacity: w
                        },
                        fill: `url(#${u})`,
                        className: "stroke-invert-300",
                        strokeWidth: 1,
                        strokeLinejoin: "round",
                        vectorEffect: "non-scaling-stroke"
                    }), (0, t.jsx)("defs", {
                        children: (0, t.jsxs)(n.motion.linearGradient, {
                            id: u,
                            x1: g,
                            y1: 0,
                            x2: 937,
                            y2: 578.45,
                            gradientUnits: "userSpaceOnUse",
                            children: [(0, t.jsx)("stop", {
                                offset: .625,
                                stopColor: "currentColor",
                                stopOpacity: 0
                            }), (0, t.jsx)("stop", {
                                offset: 1,
                                stopColor: "currentColor"
                            })]
                        })
                    })]
                })
            })
        })
    }])
}, 192935, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(745786),
        n = e.i(136263),
        s = e.i(926368);
    e.s(["LandingFooterEffects", 0, function({
        children: e
    }) {
        var r;
        let o = (0, n.useRef)(null);
        return r = !1 === (0, i.useReducedMotion)(), (0, n.useEffect)(() => {
            let e;
            if (!r || !o.current || !Element.prototype.animate) return;
            let t = o.current,
                i = Array.from(t.querySelectorAll('footer [role="img"], nav[aria-label="Social links"] > a, footer hr, nav[aria-label="Footer"] > div, footer p')),
                n = [],
                l = new Set(i),
                a = (t, i = 0) => {
                    if (!l.delete(t)) return;
                    t.style.removeProperty("opacity");
                    let r = "HR" === t.tagName;
                    n.push(t.animate([{
                        opacity: 0,
                        transform: r ? "scaleX(0.96)" : "translateY(14px)"
                    }, {
                        opacity: 1,
                        transform: r ? "scaleX(1)" : "translateY(0)"
                    }], {
                        duration: r ? 850 : 650,
                        delay: i,
                        easing: `cubic-bezier(${s.EASE_SMOOTH_OUT.join(", ")})`,
                        fill: "both"
                    })), e ? .unobserve(t)
                };
            if ("u" > typeof IntersectionObserver)
                for (let t of (e = new IntersectionObserver(e => {
                        let t = 0;
                        for (let i of e) i.isIntersecting && a(i.target, 65 * t++)
                    }, {
                        rootMargin: "0px 0px -24px 0px",
                        threshold: .1
                    }), i)) t.style.opacity = "0", e.observe(t);
            else i.forEach((e, t) => {
                a(e, 65 * Math.min(t, 4))
            });
            let c = () => {
                for (let e of l) e.style.removeProperty("opacity");
                for (let t of (l.clear(), e ? .disconnect(), n)) t.cancel()
            };
            return t.addEventListener("focusin", c), () => {
                for (let n of (e ? .disconnect(), t.removeEventListener("focusin", c), i)) n.style.removeProperty("opacity");
                for (let e of n) e.cancel()
            }
        }, [o, r]), (0, t.jsx)("div", {
            ref: o,
            children: e
        })
    }], 192935)
}, 734124, e => {
    "use strict";
    var t = e.i(52644),
        i = e.i(829824),
        n = e.i(664492),
        s = e.i(635356),
        r = e.i(894796),
        o = e.i(176570),
        l = e.i(378833),
        a = e.i(106510),
        c = e.i(745786),
        h = e.i(136263),
        u = e.i(336506),
        d = e.i(392739),
        p = e.i(384214),
        m = e.i(459771);
    let f = 1 / 60,
        v = ({
            value: e,
            stiffness: t,
            damping: i,
            epsilon: n = .001
        }) => ({
            position: e,
            target: e,
            velocity: 0,
            previousVelocity: 0,
            stiffness: t,
            damping: i,
            epsilon: n
        }),
        g = e => {
            let t = e.previousVelocity + (-e.stiffness * (e.position - e.target) - e.damping * e.previousVelocity) * f;
            e.previousVelocity = e.velocity, e.position += t * f, e.velocity = t
        },
        y = e => Math.abs(e.position - e.target) < e.epsilon && Math.abs(e.velocity) < e.epsilon,
        w = e => {
            e.position = e.target, e.velocity = 0, e.previousVelocity = 0
        };
    var x = e.i(926368),
        b = e.i(601664),
        S = e.i(148446),
        E = e.i(437102),
        N = e.i(92285),
        T = e.i(864132),
        k = e.i(51832),
        L = e.i(725061),
        M = e.i(564681),
        j = e.i(626687);
    let R = /^https:\/\/(?:[a-z0-9-]+\.)*pika\.art(?=[/?#:]|$)/i;
    var C = e.i(396065),
        _ = e.i(753630),
        z = e.i(792402);

    function H({
        src: e,
        reduceMotion: i
    }) {
        let [n, s] = (0, h.useState)(), r = (0, h.useRef)(new Set), o = (0, h.useRef)(new Set), l = (0, h.useRef)(e);
        l.current = e, (0, h.useEffect)(() => {
            !e || o.current.has(e) ? s(void 0) : r.current.has(e) && s(e)
        }, [e]);
        let c = Array.from(new Set([n, e])).filter(e => !!e);
        return (0, t.jsx)(_.AnimatePresence, {
            initial: !1,
            children: c.map(e => (0, t.jsx)(a.motion.div, {
                className: "absolute inset-0",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: +(e === n)
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: .18 * !i,
                    ease: x.EASE_OUT_STRONG
                },
                children: (0, t.jsx)(z.default, {
                    src: e,
                    alt: "",
                    fill: !0,
                    sizes: "277px",
                    loading: "eager",
                    className: "object-cover",
                    onLoad: () => {
                        r.current.add(e), l.current === e && s(e)
                    },
                    onError: () => {
                        o.current.add(e), l.current === e && s(void 0)
                    }
                })
            }, e))
        })
    }
    var O = e.i(84694);
    let A = "#hero-intro > div",
        I = {
            stiffness: 150,
            damping: 20
        },
        P = {
            stiffness: 300,
            damping: 30
        },
        V = "shadow-[0_16px_32px_rgba(0,0,0,0.1)]",
        F = "origin-top transition-[opacity,scale] duration-200 ease-out-strong starting:scale-[.97] starting:opacity-0 motion-reduce:transition-none",
        W = "pointer-events-none opacity-0 scale-[.97]",
        D = e => (0, s.cn)("focus-visible:outline-2 focus-visible:outline-offset-2", "dark" === e ? "focus-visible:outline-eggshell/60" : "focus-visible:outline-primary-500"),
        U = (e, t) => (0, s.cn)((0, l.buttonVariants)({
            variant: e,
            theme: "dark" === t ? "light" : "auto",
            size: "sm",
            shape: "pill"
        }), "px-5", "dark" === t && (0, s.cn)("focus-visible:outline-eggshell/60", "secondary" === e && "bg-eggshell/10 hover-focus:bg-eggshell/20")),
        B = e => (0, s.cn)("size-3 transition-opacity duration-200 ease-out-strong motion-reduce:transition-none", !e && "opacity-50"),
        Y = e => e.toLowerCase().replace(/\s+/g, "-"),
        q = e => e ? .art ? ? (0, u.findApp)(e ? .app) ? .thumbnail,
        $ = e => e.groups ? .flatMap(e => e.items).find(e => e.app || e.art);

    function X({
        label: e
    }) {
        return e ? (0, t.jsx)(r.Badge, {
            variant: "butter-solid",
            size: "sm",
            className: "border-primary-100 bg-banana text-primary-900",
            children: e
        }) : null
    }
    let G = "flex w-full items-center gap-4 rounded-xs py-4 text-left font-normal text-copy-24 text-invert-900",
        K = {
            open: {
                clipPath: "inset(0% 0% 0% 0%)"
            },
            closed: {
                clipPath: "inset(0% 0% 100% 0%)"
            }
        },
        Z = {
            open: {
                height: "auto",
                opacity: 1
            },
            closed: {
                height: 0,
                opacity: 0
            }
        };

    function Q({
        href: e,
        signedIn: i,
        className: n,
        children: r,
        ...o
    }) {
        let l = /^https?:\/\//.test(e);
        return (0, t.jsxs)(M.MarketingLink, { ...o,
            href: e,
            signedIn: i,
            target: l ? "_blank" : void 0,
            rel: l ? R.test(e) ? "noopener" : "noopener noreferrer" : void 0,
            className: (0, s.cn)("group/nav-link", n),
            children: [r, l && (0, t.jsx)(d.Icon, {
                name: "arrow-top-right",
                className: "size-3 origin-center opacity-50 transition-[opacity,scale] duration-200 ease-out-strong group-hover/nav-link:opacity-100 group-focus-visible/nav-link:opacity-100 motion-safe:group-focus-visible/nav-link:scale-110 motion-safe:group-hover/nav-link:scale-110 motion-reduce:transition-none"
            })]
        })
    }

    function J({
        context: e = "dark",
        signedIn: n = !1,
        animateEntrance: r = !0
    }) {
        let l = (0, k.useFeatureFlagOrDeleted)(L.H3_FLEX_MARKETING_FEATURE_FLAG) ? O.H3_FLEX_NAV : O.LANDING_NAV,
            u = e => r ? {
                animationDelay: `calc(var(--hero-intro-nav, 0ms) + ${e}ms)`
            } : {
                animation: "none"
            },
            M = (0, C.useLandingHeaderBackdrop)(),
            [R, _] = (0, h.useState)(null),
            [z, ee] = (0, h.useState)(null),
            [et, ei] = (0, h.useState)(!1),
            [en, es] = (0, h.useState)(!1),
            [er, eo] = (0, h.useState)(!1),
            [el, ea] = (0, h.useState)(e),
            [ec, eh] = (0, h.useState)({
                bar: !1,
                mark: !1,
                login: !1,
                cta: !1,
                menu: !1
            }),
            eu = (0, m.useFinePointer)(),
            ed = (0, i.usePathname)(),
            ep = (0, p.useBreakpoint)("xl"),
            em = (0, c.useReducedMotion)() ? ? !1,
            ef = function(e) {
                let [t, i] = (0, h.useState)({
                    current: e,
                    leaving: null
                });
                t.current !== e && i({
                    current: e,
                    leaving: null !== t.current && t.current !== e ? t.current : null
                });
                let n = t.current === e ? t.leaving : null;
                return (0, h.useEffect)(() => {
                    if (null === n) return;
                    let e = setTimeout(() => i(e => null === e.leaving ? e : { ...e,
                        leaving: null
                    }), 200);
                    return () => clearTimeout(e)
                }, [n, 200]), n
            }(R),
            ev = (0, h.useRef)(null),
            eg = (0, h.useRef)(null),
            ey = (0, h.useRef)(null),
            ew = (0, h.useRef)(null),
            ex = (0, h.useRef)(null),
            eb = (0, h.useRef)(null),
            eS = (0, h.useRef)(null),
            eE = (0, h.useRef)(null),
            eN = (0, h.useRef)(null),
            eT = (0, h.useRef)(null),
            ek = (0, h.useRef)(new Map),
            eL = (0, h.useRef)(null),
            eM = (0, h.useRef)(!1),
            ej = (0, h.useId)(),
            eR = en || er || null !== R,
            eC = et && !ep,
            e_ = e => eC ? "dark" : M ? .visible ? "light" : el,
            ez = e_(ec.mark),
            eH = e_(ec.bar),
            eO = e_(ec.login),
            eA = e_(ec.cta),
            eI = "dark" === eH,
            eP = "dark" === e_(ec.menu),
            eV = null !== R,
            eF = eV || null !== ef,
            eW = function(e, t, i = !1) {
                let n = (0, h.useRef)(null);
                if (null === n.current) {
                    let t = {};
                    for (let i of Object.keys(e)) t[i] = v(e[i]);
                    n.current = t
                }
                let s = (0, h.useRef)(t);
                s.current = t;
                let r = (0, h.useRef)(i);
                r.current = i;
                let o = (0, h.useRef)(null),
                    l = (0, h.useRef)({
                        last: 0,
                        carry: 0
                    }),
                    a = (0, h.useRef)(null);
                if (null === a.current) {
                    let e = () => s.current((() => {
                            let e = {};
                            for (let t of Object.keys(n.current)) e[t] = n.current[t].position;
                            return e
                        })()),
                        t = i => {
                            let s = (i - l.current.last) / 1e3;
                            l.current.last = i, l.current.carry = ((e, t, i) => {
                                let n = i + Math.min(t, .1);
                                for (; n >= f;) {
                                    for (let t of e) y(t) ? w(t) : g(t);
                                    n -= f
                                }
                                return n
                            })(Object.values(n.current), s, l.current.carry), e(), o.current = Object.values(n.current).every(y) ? null : requestAnimationFrame(t)
                        },
                        i = () => {
                            null === o.current && (l.current = {
                                last: performance.now(),
                                carry: 0
                            }, o.current = requestAnimationFrame(t))
                        },
                        c = e => n.current[e];
                    a.current = {
                        get: e => c(e).position,
                        set: (t, n, s) => {
                            let o = c(t);
                            if (s ? .stiffness !== void 0 && (o.stiffness = s.stiffness), s ? .damping !== void 0 && (o.damping = s.damping), o.target = n, r.current) {
                                w(o), e();
                                return
                            }
                            i()
                        },
                        kick: (e, t) => {
                            if (!r.current) {
                                var n;
                                let s;
                                n = c(e), s = Math.max(n.velocity + t, t), n.velocity = s, n.previousVelocity = s, i()
                            }
                        },
                        jump: (t, i) => {
                            let n = c(t);
                            n.target = i, w(n), e()
                        }
                    }
                }
                return (0, h.useEffect)(() => () => {
                    null !== o.current && cancelAnimationFrame(o.current), o.current = null
                }, []), a.current
            }({
                width: {
                    value: 0,
                    ...P,
                    epsilon: .05
                },
                height: {
                    value: 0,
                    ...I,
                    epsilon: .05
                }
            }, ({
                width: e,
                height: t
            }) => {
                let i = eT.current;
                i && (e > 0 && (i.style.width = `${e}px`), t > 0 && (i.style.height = `${t}px`))
            }, em),
            eD = e => {
                ev.current && clearTimeout(ev.current), _(e)
            },
            eU = () => {
                eg.current && clearTimeout(eg.current), eg.current = null
            },
            eB = (e, t, i = !1) => {
                eU();
                let n = () => ee({
                    panel: e,
                    src: t
                });
                i ? n() : eg.current = setTimeout(n, 60)
            };
        (0, h.useEffect)(() => {
            if (R) return () => {
                eg.current && clearTimeout(eg.current)
            }
        }, [R]);
        let eY = () => {
                ev.current && clearTimeout(ev.current), ev.current = setTimeout(() => _(null), 220)
            },
            eq = () => {
                ei(!1), _(null)
            };
        return (0, h.useEffect)(() => () => {
            ev.current && clearTimeout(ev.current)
        }, []), (0, h.useLayoutEffect)(() => {
            let e = R ? ek.current.get(R) : void 0;
            if (e) {
                let t = e.offsetWidth,
                    i = e.offsetHeight,
                    n = eM.current;
                n || (eW.jump("width", t), eW.jump("height", .7 * i)), eW.set("width", t), eW.set("height", i, n ? P : I)
            }
            eM.current = null !== R
        }, [R, eW]), (0, h.useLayoutEffect)(() => {
            let e = 0,
                t = () => {
                    var t;
                    let i, n;
                    e = 0;
                    let s = ew.current ? .getBoundingClientRect(),
                        r = s ? s.top + s.height / 2 : 0,
                        o = Array.from(document.querySelectorAll("[data-nav-cover]")).map(e => ({
                            cover: e,
                            top: e.getBoundingClientRect().top
                        })),
                        l = e => {
                            let t = e.getBoundingClientRect(),
                                i = t.bottom;
                            for (let {
                                    cover: t,
                                    top: n
                                } of o) {
                                let s = t.compareDocumentPosition(e);
                                (s & Node.DOCUMENT_POSITION_PRECEDING) != 0 && (s & Node.DOCUMENT_POSITION_CONTAINS) == 0 && (i = Math.min(i, n))
                            }
                            return {
                                top: t.top,
                                left: t.left,
                                right: t.right,
                                width: t.width,
                                bottom: i
                            }
                        },
                        a = Array.from(document.querySelectorAll("[data-nav-context='dark']")).find(e => {
                            let t = l(e);
                            return t.top <= r && t.bottom > r
                        });
                    ea(a ? "dark" : "light");
                    let c = document.querySelector(A);
                    t = c ? .getAnimations ? .().some(e => "running" === e.playState) && c ? c : a ? ? document.body, i = document.querySelector('meta[name="theme-color"]'), n = function(e) {
                        for (let t = e; t; t = t.parentElement) {
                            let e = getComputedStyle(t).backgroundColor;
                            if (e && "transparent" !== e && !/^rgba\(.*,\s*0\)$/.test(e)) return e
                        }
                        return null
                    }(t), i && n && i.content !== n && (i.content = n);
                    let h = s ? .height ? ? 0,
                        u = Array.from(document.querySelectorAll(S.MEDIA)).filter(e => !ey.current ? .contains(e) && "light" !== e.dataset.navContext).map(e => ({
                            el: e,
                            rect: l(e)
                        })).filter(({
                            rect: e
                        }) => e.width > 0 && e.bottom - e.top >= h),
                        d = new Map,
                        p = e => {
                            let t = d.get(e);
                            return void 0 === t && (t = (0, S.opaque)(e), d.set(e, t)), t
                        },
                        m = new Map,
                        f = e => {
                            if (!e) return !1;
                            let t = e.getBoundingClientRect();
                            if (0 === t.width) return !1;
                            let i = (0, S.span)(t.left + S.SAMPLE_INSET, t.right - S.SAMPLE_INSET),
                                n = (0, S.span)(t.top + S.SAMPLE_INSET, t.bottom - S.SAMPLE_INSET);
                            return i.some(e => n.some(t => ((e, t) => {
                                let i = u.filter(({
                                    el: i,
                                    rect: n
                                }) => {
                                    let s;
                                    return n.left <= e && e < n.right && n.top <= t && t < n.bottom && (0, S.inside)((void 0 === (s = m.get(i)) && (s = (0, S.paintedBox)(i), m.set(i, s)), s), e, t)
                                });
                                if (0 === i.length) return !1;
                                let n = document.elementsFromPoint ? .(e, t);
                                if (!n) return !0;
                                for (let e of n)
                                    if (!ey.current ? .contains(e)) {
                                        if (i.some(({
                                                el: t
                                            }) => t === e || e.contains(t))) return !0;
                                        if (p(e)) break
                                    }
                                return !1
                            })(e, t)))
                        },
                        v = {
                            bar: f(eb.current),
                            mark: f(ex.current),
                            login: f(eS.current),
                            cta: f(eE.current),
                            menu: f(eN.current)
                        };
                    eh(e => e.bar === v.bar && e.mark === v.mark && e.login === v.login && e.cta === v.cta && e.menu === v.menu ? e : v)
                },
                i = () => {
                    e || (e = requestAnimationFrame(t))
                },
                n = e => {
                    e.target.closest ? .(A) && i()
                };
            return t(), window.addEventListener("scroll", i, {
                passive: !0
            }), window.addEventListener("resize", i), document.addEventListener("animationend", n), () => {
                e && cancelAnimationFrame(e), window.removeEventListener("scroll", i), window.removeEventListener("resize", i), document.removeEventListener("animationend", n)
            }
        }, [ed, M ? .visible]), (0, h.useEffect)(() => {
            let e = !eu && null !== R;
            if (!et && !e) return;
            let t = e => {
                let t = e.target;
                t instanceof Node && ey.current ? .contains(t) || (ei(!1), _(null))
            };
            return window.addEventListener("pointerdown", t), () => window.removeEventListener("pointerdown", t)
        }, [eu, R, et]), (0, h.useEffect)(() => {
            ep && (ei(!1), _(null))
        }, [ep]), (0, h.useEffect)(() => {
            if (!et) return;
            let e = document.body.style.overflow;
            return document.body.style.overflow = "hidden", () => {
                document.body.style.overflow = e
            }
        }, [et]), (0, h.useEffect)(() => {
            let e = e => {
                "Escape" === e.key && (ei(!1), _(null))
            };
            return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e)
        }, []), (0, t.jsxs)("header", {
            ref: ey,
            "data-context": eH,
            className: "fixed inset-x-0 top-3 z-50 px-3 xl:top-6 xl:px-6",
            children: [(0, t.jsxs)("div", {
                ref: ew,
                className: "grid h-11 grid-cols-[1fr_auto_1fr] items-center xl:h-12",
                children: [(0, t.jsx)(E.TransitionLink, {
                    ref: ex,
                    href: "/",
                    "aria-label": "Pika home",
                    style: u(100),
                    className: (0, s.cn)("col-start-2 row-start-1 animate-arrive-fade justify-self-center rounded-xs transition-colors duration-200 motion-reduce:transition-none xl:col-start-1 xl:justify-self-start", "dark" === ez ? "text-white" : "text-black", D(ez)),
                    children: (0, t.jsx)(j.PikaWordmark, {
                        className: "h-5 w-auto"
                    })
                }), (0, t.jsx)("div", {
                    className: "justify-self-center max-xl:hidden",
                    children: (0, t.jsxs)("nav", {
                        ref: eb,
                        "aria-label": "Primary",
                        "data-hot": eR || void 0,
                        onMouseEnter: () => {
                            eu && es(!0)
                        },
                        onMouseLeave: () => {
                            eu && es(!1)
                        },
                        onFocus: () => eo(!0),
                        onBlur: e => {
                            e.currentTarget.contains(e.relatedTarget) || eo(!1)
                        },
                        className: "relative hidden h-12 justify-center xl:flex",
                        children: [(0, t.jsx)("div", {
                            "aria-hidden": !0,
                            style: u(0),
                            className: (0, s.cn)("absolute inset-0 animate-arrive-bar rounded-xs ring-1 ring-inset backdrop-blur-3xl transition-[background-color,box-shadow] motion-reduce:transition-none", eF ? "duration-200 ease-out-strong" : "duration-300 ease-in-out", eR ? (0, s.cn)("bg-black ring-transparent", V) : eI ? "bg-black/70 ring-primary-200" : "bg-[#8e8d8d]/10 ring-transparent")
                        }), (0, t.jsx)("ul", {
                            style: u(150),
                            className: "relative flex h-full animate-arrive-fade items-center gap-5 whitespace-nowrap px-8 2xl:gap-6",
                            children: l.map(e => {
                                let i = R === e.label,
                                    r = `${ej}-${Y(e.label)}`,
                                    o = D(eR ? "dark" : eH),
                                    l = e => i ? "text-white" : eR ? (0, s.cn)("text-invert-600", e) : eI ? "text-invert-600" : "text-primary-800/70",
                                    a = (0, s.cn)("flex h-full items-center gap-1 rounded-xs text-copy-14 transition-colors duration-200 motion-reduce:transition-none", l("hover-focus:text-white"), o),
                                    c = (0, s.cn)("flex h-full items-center gap-1 text-copy-14 transition-colors duration-200 motion-reduce:transition-none", l("hover:text-white has-[:focus-visible]:text-white")),
                                    h = (0, s.cn)("flex h-full items-center rounded-xs", o),
                                    u = t => {
                                        t.currentTarget.matches(":focus-visible") && eD(e.label)
                                    };
                                return (0, t.jsx)("li", {
                                    className: "flex h-full items-center",
                                    onMouseEnter: () => {
                                        eu && eD(e.groups ? e.label : null)
                                    },
                                    onMouseLeave: () => {
                                        eu && eY()
                                    },
                                    children: e.groups ? eu && e.href ? (0, t.jsxs)("span", {
                                        className: c,
                                        children: [(0, t.jsx)(Q, {
                                            href: e.href,
                                            signedIn: n,
                                            onFocus: u,
                                            onClick: () => _(null),
                                            className: h,
                                            children: e.label
                                        }), (0, t.jsx)("button", {
                                            type: "button",
                                            "aria-label": `Show ${e.label} menu`,
                                            "aria-expanded": i,
                                            "aria-controls": r,
                                            onClick: () => eD(i ? null : e.label),
                                            className: h,
                                            children: (0, t.jsx)(d.Icon, {
                                                name: "chevron-down",
                                                className: B(i)
                                            })
                                        })]
                                    }) : (0, t.jsxs)("button", {
                                        type: "button",
                                        "aria-expanded": i,
                                        "aria-controls": r,
                                        onFocus: u,
                                        onClick: () => eD(e.label),
                                        className: a,
                                        children: [e.label, (0, t.jsx)(d.Icon, {
                                            name: "chevron-down",
                                            className: B(i)
                                        })]
                                    }) : (0, t.jsx)(Q, {
                                        href: e.href,
                                        signedIn: n,
                                        onClick: () => _(null),
                                        className: a,
                                        children: e.label
                                    })
                                }, e.label)
                            })
                        })]
                    })
                }), (0, t.jsx)("span", {
                    ref: eN,
                    style: u(100),
                    className: "col-start-1 row-start-1 inline-flex animate-arrive-fade justify-self-start xl:hidden",
                    children: (0, t.jsx)("button", {
                        type: "button",
                        "data-context": eP ? "dark" : "light",
                        "aria-label": et ? "Close menu" : "Open menu",
                        "aria-expanded": et,
                        onClick: () => et ? eq() : ei(!0),
                        className: (0, s.cn)("grid size-11 place-items-center rounded-sm backdrop-blur-lg transition-colors duration-300 motion-reduce:transition-none", eP ? "bg-invert-200 text-invert-900" : "bg-primary-200 text-primary-800", D(eP ? "dark" : "light")),
                        children: (0, t.jsx)(b.MenuGlyph, {
                            open: et
                        })
                    })
                }), (0, t.jsx)("div", {
                    style: u(100),
                    className: "col-start-3 row-start-1 flex animate-arrive-fade items-center gap-2 justify-self-end",
                    children: n ? (0, t.jsxs)(E.TransitionLink, {
                        ref: eE,
                        href: N.LOGIN_REDIRECT_PATH,
                        "data-context": eA,
                        className: (0, s.cn)(U("primary", eA), "max-[360px]:px-3"),
                        children: [(0, t.jsx)(o.Beam, {
                            theme: "dark" === eA ? "light" : "dark"
                        }), "Open Pika"]
                    }) : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(E.TransitionLink, {
                            ref: eS,
                            href: (0, T.appUrl)("/login"),
                            "data-context": eO,
                            className: (0, s.cn)(U("secondary", eO), "hidden xl:inline-flex"),
                            children: "Login"
                        }), (0, t.jsxs)(E.TransitionLink, {
                            ref: eE,
                            href: (0, T.appUrl)("/signup"),
                            "data-context": eA,
                            className: (0, s.cn)(U("primary", eA), "max-xl:px-3"),
                            children: [(0, t.jsx)(o.Beam, {
                                theme: "dark" === eA ? "light" : "dark"
                            }), "Try Pika"]
                        })]
                    })
                })]
            }), (0, t.jsx)("div", {
                ref: eT,
                "data-state": eV ? "open" : "closing",
                className: (0, s.cn)("mx-auto mt-2 hidden overflow-clip rounded-xs bg-black", V, F, eF && "xl:grid", !eV && W),
                children: l.filter(e => e.groups).map(e => {
                    let i = R === e.label,
                        r = !i && ef === e.label,
                        o = i || r ? z ? .panel === e.label ? z.src : q($(e)) : void 0;
                    return (0, t.jsxs)("div", {
                        id: `${ej}-${Y(e.label)}`,
                        ref: t => {
                            t ? ek.current.set(e.label, t) : ek.current.delete(e.label)
                        },
                        onMouseEnter: () => {
                            eu && eD(e.label)
                        },
                        onMouseLeave: () => {
                            eu && eY()
                        },
                        className: (0, s.cn)("col-start-1 row-start-1 w-max items-start gap-6 self-start p-4", F, i || r ? "flex" : "hidden", r && W),
                        children: [(0, t.jsx)("div", {
                            className: "flex items-start gap-2",
                            children: e.groups ? .map((i, r) => (0, t.jsxs)("div", {
                                style: {
                                    transitionDelay: `${80+0*r}ms`
                                },
                                className: "flex w-[202px] starting:translate-y-1.5 flex-col gap-3 starting:opacity-0 transition-[opacity,translate] duration-300 ease-out-strong motion-reduce:transition-none",
                                children: [(0, t.jsx)("p", {
                                    className: "px-3 py-2 font-normal text-copy-14 text-invert-600",
                                    children: i.heading
                                }), (0, t.jsx)("ul", {
                                    className: "flex flex-col",
                                    children: i.items.map(i => (0, t.jsx)("li", {
                                        children: (0, t.jsxs)(Q, {
                                            href: i.href,
                                            signedIn: n,
                                            onClick: () => _(null),
                                            onMouseEnter: () => eB(e.label, q(i)),
                                            onMouseLeave: eU,
                                            onFocus: () => eB(e.label, q(i), !0),
                                            className: (0, s.cn)("flex items-center gap-1 rounded-xs px-3 py-2 font-normal text-copy-14 text-invert-800 transition-colors duration-200 hover-focus:bg-invert-200 motion-reduce:transition-none", i.badge && "gap-2", D("dark")),
                                            children: [i.label, (0, t.jsx)(X, {
                                                label: i.badge
                                            })]
                                        })
                                    }, `${i.href}-${i.label}`))
                                })]
                            }, i.heading))
                        }), (i || r) && $(e) ? (0, t.jsx)("div", {
                            style: {
                                transitionDelay: "200ms"
                            },
                            className: "relative aspect-[512/384] w-[277px] shrink-0 starting:scale-95 overflow-hidden rounded-xs starting:opacity-0 transition-[opacity,scale] duration-300 ease-out-strong motion-reduce:transition-none",
                            children: (0, t.jsx)(H, {
                                src: o,
                                reduceMotion: em
                            })
                        }) : null]
                    }, e.label)
                })
            }), (0, t.jsx)(a.motion.div, {
                initial: !1,
                animate: eC ? "open" : "closed",
                variants: K,
                transition: em ? {
                    duration: 0
                } : x.MENU_SPRING,
                inert: !eC,
                className: "fixed inset-0 -z-10 bg-primary-900 xl:hidden",
                children: (0, t.jsxs)(a.motion.nav, {
                    ref: eL,
                    "aria-label": "Mobile",
                    variants: em ? x.MENU_STILL : x.MENU_LIST,
                    className: "absolute inset-x-0 top-14 bottom-0 overflow-y-auto overscroll-contain px-5 pt-8 pb-10 [mask-image:linear-gradient(to_bottom,transparent,black_32px)]",
                    children: [(0, t.jsx)("ul", {
                        className: "flex flex-col",
                        children: l.map(e => {
                            let i = R === e.label,
                                r = `${ej}-sheet-${Y(e.label)}`;
                            return (0, t.jsxs)(a.motion.li, {
                                variants: em ? x.MENU_STILL : x.MENU_ITEM,
                                className: "flex flex-col border-invert-200 border-b",
                                children: [e.groups ? (0, t.jsxs)("button", {
                                    type: "button",
                                    "aria-expanded": i,
                                    "aria-controls": r,
                                    onClick: t => {
                                        eD(i ? null : e.label), i || (e => {
                                            let t = eL.current;
                                            if (!t) return;
                                            let i = performance.now() + 800,
                                                n = () => {
                                                    t.scrollTop += e.getBoundingClientRect().top - t.getBoundingClientRect().top - Number.parseFloat(getComputedStyle(t).paddingTop), performance.now() < i && requestAnimationFrame(n)
                                                };
                                            requestAnimationFrame(n)
                                        })(t.currentTarget)
                                    },
                                    className: (0, s.cn)(G, D("dark")),
                                    children: [(0, t.jsx)("span", {
                                        className: "flex-1",
                                        children: e.label
                                    }), (0, t.jsx)(d.Icon, {
                                        name: "chevron-down",
                                        className: (0, s.cn)("size-3 transition-[opacity,rotate] motion-reduce:transition-none", i ? "rotate-180 duration-[400ms] ease-[cubic-bezier(.3,2,.5,1)]" : "opacity-50 duration-200 ease-out-strong")
                                    })]
                                }) : (0, t.jsx)(Q, {
                                    href: e.href,
                                    signedIn: n,
                                    onClick: eq,
                                    className: (0, s.cn)(G, D("dark")),
                                    children: e.label
                                }), e.groups ? (0, t.jsx)(a.motion.div, {
                                    id: r,
                                    "data-state": i ? "open" : "closed",
                                    inert: !i,
                                    initial: !1,
                                    animate: i ? "open" : "closed",
                                    variants: Z,
                                    transition: em ? {
                                        duration: 0
                                    } : x.MENU_SPRING,
                                    className: "overflow-hidden",
                                    children: e.groups.map(e => (0, t.jsxs)("div", {
                                        className: "flex flex-col pl-6",
                                        children: [(0, t.jsx)("p", {
                                            className: "py-4 font-normal text-copy-16 text-invert-500",
                                            children: e.heading
                                        }), (0, t.jsx)("ul", {
                                            className: "flex flex-col",
                                            children: e.items.map(e => (0, t.jsx)("li", {
                                                children: (0, t.jsxs)(Q, {
                                                    href: e.href,
                                                    signedIn: n,
                                                    onClick: eq,
                                                    className: (0, s.cn)("flex w-full items-center gap-1 rounded-xs py-4 font-normal text-copy-16 text-invert-900", e.badge && "gap-2", D("dark")),
                                                    children: [e.label, (0, t.jsx)(X, {
                                                        label: e.badge
                                                    })]
                                                })
                                            }, `${e.href}-${e.label}`))
                                        })]
                                    }, e.heading))
                                }) : null]
                            }, e.label)
                        })
                    }), !n && (0, t.jsx)(a.motion.div, {
                        variants: em ? x.MENU_STILL : x.MENU_ITEM,
                        children: (0, t.jsx)(E.TransitionLink, {
                            href: (0, T.appUrl)("/login"),
                            onClick: eq,
                            className: (0, s.cn)(G, "border-invert-200 border-b", D("dark")),
                            children: "Login"
                        })
                    })]
                })
            })]
        })
    }
    let ee = new Set(["/", "/index"]);
    e.s(["SessionLandingHeader", 0, function() {
        let e = (0, i.usePathname)(),
            s = (0, n.useMarketingSignedIn)();
        return (0, t.jsx)(J, {
            context: ee.has(e) || "/mcp" === e ? "dark" : "light",
            animateEntrance: "/mcp" !== e,
            signedIn: s
        })
    }], 734124)
}]);