(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 632686, e => {
    "use strict";
    var t = e.i(52644),
        a = e.i(635356),
        i = e.i(106510),
        r = e.i(437102),
        o = e.i(696069);
    let n = i.motion.create(r.TransitionLink);
    e.s(["AnimatedArrowLink", 0, function({
        children: e,
        className: i,
        arrowClassName: r,
        ...s
    }) {
        return (0, t.jsxs)(n, { ...s,
            initial: "rest",
            animate: "rest",
            whileHover: "active",
            whileFocus: "active",
            whileTap: "active",
            className: (0, a.cn)("inline-flex items-center gap-2", i),
            children: [e, (0, t.jsx)(o.AnimatedArrowRight, {
                className: r
            })]
        })
    }])
}, 696069, e => {
    "use strict";
    var t = e.i(52644),
        a = e.i(635356),
        i = e.i(106510),
        r = e.i(745786);
    let o = {
            duration: .35,
            ease: [.32, .72, 0, 1]
        },
        n = {
            rest: {
                d: "M11.032 9.05H11.982V10.95H11.032C10.506 10.95 10.08 10.53 10.08 10C10.08 9.47 10.506 9.05 11.032 9.05Z",
                opacity: 0
            },
            active: {
                d: "M3.331 9.05H15.315V10.95H3.331C2.805 10.95 2.379 10.53 2.379 10C2.379 9.47 2.805 9.05 3.331 9.05Z",
                opacity: 1
            }
        },
        s = {
            rest: {
                x: -3.333
            },
            active: {
                x: 0
            }
        };
    e.s(["AnimatedArrowRight", 0, function({
        className: e
    }) {
        let l = (0, r.useReducedMotion)() ? {
            duration: 0
        } : o;
        return (0, t.jsxs)("svg", {
            viewBox: "0 0 20 20",
            fill: "currentColor",
            "aria-hidden": "true",
            className: (0, a.cn)("size-5 shrink-0 p-0.5", e),
            children: [(0, t.jsx)(i.motion.path, {
                d: n.rest.d,
                variants: n,
                transition: l
            }), (0, t.jsx)(i.motion.path, {
                d: "M10.672 17.34C10.3 17.71 9.696 17.71 9.324 17.34C8.952 16.97 8.952 16.36 9.324 15.99L15.315 10L9.324 4.01C8.952 3.64 8.952 3.03 9.324 2.66C9.696 2.29 10.3 2.29 10.672 2.66L17.338 9.33C17.71 9.7 17.71 10.3 17.338 10.67L10.672 17.34Z",
                variants: s,
                transition: l
            })]
        })
    }])
}, 926368, e => {
    "use strict";
    e.s(["EASE_IN_OUT_STRONG", 0, [.77, 0, .175, 1], "EASE_OUT_STRONG", 0, [.23, 1, .32, 1], "EASE_SMOOTH_OUT", 0, [.22, 1, .36, 1], "MENU_ITEM", 0, {
        closed: {
            y: 16,
            opacity: 0,
            transition: {
                duration: .15
            }
        },
        open: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 320,
                damping: 30
            }
        }
    }, "MENU_LIST", 0, {
        closed: {
            transition: {
                staggerChildren: .03,
                staggerDirection: -1
            }
        },
        open: {
            transition: {
                delayChildren: .1,
                staggerChildren: .05
            }
        }
    }, "MENU_SPRING", 0, {
        type: "spring",
        stiffness: 260,
        damping: 30
    }, "MENU_STILL", 0, {
        closed: {
            opacity: 0,
            transition: {
                duration: 0
            }
        },
        open: {
            opacity: 1,
            transition: {
                duration: 0
            }
        }
    }, "SCRUB_SPRING", 0, {
        stiffness: 140,
        damping: 24,
        mass: .4
    }, "TILE_STAGGER", 0, .05])
}, 564681, e => {
    "use strict";
    var t = e.i(52644),
        a = e.i(632686),
        i = e.i(437102),
        r = e.i(664492);

    function o(e, t) {
        return t ? e.replace(/^((?:https?:\/\/[^/]+)?)\/apps(?=[?#]|$)/, "$1/home") : e
    }
    e.s(["MarketingAnimatedArrowLink", 0, function({
        href: e,
        ...i
    }) {
        let n = (0, r.useMarketingSignedIn)();
        return (0, t.jsx)(a.AnimatedArrowLink, { ...i,
            href: o(e, n)
        })
    }, "MarketingLink", 0, function({
        href: e,
        signedIn: a,
        ...n
    }) {
        let s = (0, r.useMarketingSignedIn)();
        return (0, t.jsx)(i.TransitionLink, { ...n,
            href: o(e, a ? ? s)
        })
    }])
}, 664492, e => {
    "use strict";
    var t = e.i(52644),
        a = e.i(136263),
        i = e.i(867148),
        r = e.i(164715);
    let o = (0, a.createContext)(null);
    e.s(["MarketingSessionProvider", 0, function({
        children: e
    }) {
        let [n, s] = (0, a.useState)(null);
        return (0, a.useEffect)(() => {
            if ((0, i.isMockMode)()) return void s((0, i.mockUserId)());
            let {
                data: e
            } = (0, r.createClient)().auth.onAuthStateChange((e, t) => {
                s(t ? .user ? .id ? ? null)
            });
            return () => e.subscription.unsubscribe()
        }, []), (0, t.jsx)(o.Provider, {
            value: n,
            children: e
        })
    }, "useMarketingAccount", 0, function() {
        return (0, a.useContext)(o)
    }, "useMarketingSignedIn", 0, function() {
        return null !== (0, a.useContext)(o)
    }])
}, 379767, 725061, e => {
    "use strict";
    let t = "pika-h3-flex-marketing-gate";
    e.s(["H3_FLEX_MARKETING_FEATURE_FLAG", 0, t], 725061);
    let a = [{
        slug: "pika-h3-flex",
        title: "Introducing Pika H3 Flex",
        subtitle: "Built for professional iteration.",
        description: "Our post-trained MiniMax H3 model, built for creative iteration — up to 12 references, five separate audio stems, finishing at up to 4K, and open weights.",
        date: "October 29, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "40623e1d26f4805eb58ddfc487557b5f",
        hiddenBlockIds: ["16848760fb664a8a83b50b99b41c403a", "c564062b8cad4e4d9ee4236a148f876b", "9ea89e0e7157472cb9e91cc3d1035e1c"],
        featureFlag: t,
        cover: "/blog/pika-h3-flex-cover.webp",
        ogImage: "/blog/pika-h3-flex-og.jpg"
    }, {
        slug: "pika-h3-flex-research",
        title: "Pika H3 Flex Technical Deep Dive",
        subtitle: "Post-Training H3 to Six-NFE Omni-Generator",
        description: "An omni-generator post-trained on MiniMax H3 that generates synchronized video and stereo audio of up to 15 seconds in six denoising steps, about 8× fewer than its 50-step teacher.",
        date: "October 29, 2026",
        authors: "Pika Fundamental Research Team",
        category: "research",
        notionPageId: "40423e1d26f4814cac35d50be123026e",
        featureFlag: t,
        cover: "/blog/pika-h3-flex-research-cover.webp",
        ogImage: "/blog/pika-h3-flex-research-og.jpg"
    }, {
        slug: "pika-chatgpt-plugin",
        title: "Pika Is Now Inside ChatGPT",
        subtitle: "A creative studio for the place where ideas already happen.",
        description: "Introducing the Pika x ChatGPT plugin extension: 40+ creative apps and 100+ gen media models for images, video, and sound, without leaving your conversation.",
        date: "October 16, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3fb23e1d26f480aa8b85cdef83de16d6",
        hiddenBlockIds: ["e9ba0e3875354e70a7727c43a6311235", "db4d02a049eb42cfab97092daf1dfff0", "ea4a17e3ef3e434598b412fd56ad8d8e"],
        cover: "/blog/pika-chatgpt-plugin-cover.webp",
        ogImage: "/blog/pika-chatgpt-plugin-og.jpg"
    }, {
        slug: "api-member-spotlights",
        title: "Pika API Club Member Spotlights",
        subtitle: "Vuvie, AI-Bridge and Secret Level are building bold new things—and making their generative media budgets go much further.",
        description: "Meet three Pika API Club members making anime, short dramas, creation tools and global campaigns, and see what member pricing saves them.",
        date: "September 24, 2026",
        authors: "Pika Team",
        category: "culture",
        notionPageId: "3e023e1d26f48094abdeeae1e56f3808",
        hiddenBlockIds: ["3e423e1d26f4803f8d14ed579e27f02d", "3e323e1d26f480cd87ead011003d73e1", "3e423e1d26f4802aaf90f9b95c3d0222"],
        cover: "/blog/api-member-spotlights-cover.webp",
        ogImage: "/blog/api-member-spotlights-og.jpg"
    }, {
        slug: "welcome-to-the-new-pika",
        title: "Welcome to the New Pika",
        subtitle: "We built the AI creative platform Creatives deserve.",
        description: "The new Pika brings video, image, and sound creation into one place, with the world’s leading gen media models underneath and focused creative apps on top.",
        date: "September 17, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3df23e1d26f48001a393e8d1d23ea451",
        hiddenBlockIds: ["efb3a0fc22b448578d7cf68ef8dd99b4", "875efa55336c40eda75e896122e72e58", "a9944ce5dacc4c6fa32d825eab2110e7"],
        cover: "/blog/welcome-to-the-new-pika-cover.webp",
        ogImage: "/blog/welcome-to-the-new-pika-og.jpg"
    }, {
        slug: "pika-soundtrack",
        title: "Introducing Pika Soundtrack",
        subtitle: "Sound that understands what happens—and when",
        description: "A model that turns video into a synchronized, full-scene soundscape — motion-aware sound effects, voice, music, and ambience that follow the action.",
        date: "August 18, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3b423e1d26f480a0862bf2ad9c862332",
        hiddenBlockIds: ["3b923e1d26f48095bb3be5eac428a5b1"],
        cover: "/blog/pika-soundtrack-cover.webp",
        ogImage: "/blog/pika-soundtrack-og.jpg"
    }, {
        slug: "pika-music",
        title: "Introducing Pika Music",
        subtitle: "One model, many ways to make a song.",
        description: "A new music generation model for turning creative direction into finished tracks — from text, lyrics, a reference voice, an existing track, or any combination.",
        date: "August 18, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3b423e1d26f4809a92efeed1823a49de",
        hiddenBlockIds: ["3ba23e1d26f480f0b2d8ec88fd66e62b"],
        cover: "/blog/pika-music-cover.webp",
        ogImage: "/blog/pika-music-og.jpg"
    }, {
        slug: "pika-sfx",
        title: "Now Hear This: Pika SFX",
        subtitle: "Production-ready sound from language, generated faster than real-time",
        description: "A new model that turns a written description into a focused, ready-to-use sound effect in real time — from a single event to a complete sound sequence.",
        date: "August 18, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3b423e1d26f480188494c70d71d4df62",
        hiddenBlockIds: ["3ba23e1d26f480ae973ef6a4f618d102"],
        cover: "/blog/pika-sfx-cover.webp",
        ogImage: "/blog/pika-sfx-og.jpg"
    }, {
        slug: "pika-speech",
        title: "Say Hello to Pika Speech",
        subtitle: "Any voice from five seconds of reference audio. Up to five minutes of speech per request. Spoken before you finish reading this sentence.",
        description: "Our text-to-speech model: a 3B flow-matching transformer that generates studio-quality 48 kHz speech, clones a voice from seconds of reference audio, and runs at a 0.02 real-time factor.",
        date: "August 18, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3b923e1d26f480dabacbcc22ce5bfe58",
        hiddenBlockIds: ["3c023e1d26f480d7bec6f5b101ded694"],
        cover: "/blog/pika-speech-cover.webp",
        ogImage: "/blog/pika-speech-og.jpg"
    }, {
        slug: "pika-audio-models",
        title: "Everything You Want to Hear",
        subtitle: "Introducing Pika Audio. Four frontier audio models. The lowest prices on the market.",
        description: "Pika Audio is our first family of frontier foundation sound models: Soundtrack, Music, SFX and Speech. Up to 20x cheaper than comparable audio models, available now through the Pika API Club.",
        date: "August 14, 2026",
        authors: "Pika Team",
        category: "research",
        notionPageId: "3bb23e1d26f480019787fb0ed735f2ba",
        cover: "/blog/pika-audio-cover.jpg",
        ogImage: "/blog/pika-audio-og.jpg"
    }, {
        slug: "pika-api-club",
        title: "Welcome to the Pika API Club",
        subtitle: "The best gen media models. Previously impossible prices. One API.",
        description: "A membership platform that gives builders access to 100+ leading video, image, audio, and LLM models through one API — at prices up to 88% cheaper than other API aggregators.",
        date: "August 05, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "3b323e1d26f48047bfc9c2138d7753e0",
        hiddenBlockIds: ["b0e996ce3f8347d3b324ff4de67fcc5d", "809e1efda46049738f877e5a597b9dec", "9bb17d8721334d4899b5e00a2e1048cf"],
        cover: "/blog/pika-api-club-cover.webp",
        ogImage: "/blog/pika-api-club-og.jpg"
    }, {
        slug: "founder-starter-kit",
        title: "Get Your Product Out There",
        subtitle: "The Pika MCP now has the ultimate Founder Starter Kit",
        description: "Four specialized Pika MCP skills that give technical founders the power to promote their products — build a brand, generate app store screens, a sizzle video, and a founder video.",
        date: "May 28, 2026",
        authors: "Pika Team",
        category: "research",
        notionPageId: "36e23e1d26f480d38c52c6c5297e2640",
        hiddenBlockIds: ["36e23e1d26f480e3b44df31437b8f15b", "36e23e1d26f480de8aecca57b60b66e0", "36e23e1d26f480a1b3b8d84e5cc7554b", "36e23e1d26f4807a86ecc0a9d9ffdbd1", "36e23e1d26f48049ad70dfcb96f74ecd"],
        cover: "/blog/founder-starter-kit-cover.webp",
        ogImage: "/blog/founder-starter-kit-og.jpg"
    }, {
        slug: "pika-experiments",
        title: "Every Breakthrough Starts With an Experiment",
        subtitle: "Introducing Pika Experiments: a public workshop of agent prototypes from Pika Labs",
        description: "We're opening up the Pika workshop — sharing rough experiments, prototypes, and tools still taking shape so you can test early explorations and make them your own.",
        date: "May 26, 2026",
        authors: "Pika Team",
        category: "research",
        notionPageId: "36c23e1d26f4800dacd2faab5edba32c",
        hiddenBlockIds: ["36c23e1d26f4800b9f8dc49bd9415c6d", "36c23e1d26f4804f916fc61332c35f7e", "36c23e1d26f480139f88d89cd56a7e6c", "36c23e1d26f4805a81fcf52da2426b4a", "36c23e1d26f4803ba94ad2d124164530"],
        cover: "/blog/pika-experiments-cover.webp",
        ogImage: "/blog/pika-experiments-og.jpg"
    }, {
        slug: "your-ai-self-just-got-a-job",
        title: "Your Pika Agent Just Got a Job",
        subtitle: "For the first time, agents can earn money on your behalf.",
        description: "We're making it possible for your Pika Agent to earn real money — every conversation, every skill used, every interaction counts.",
        date: "April 10, 2026",
        authors: "Pika Team",
        category: "release",
        notionPageId: "33b23e1d26f4819e9306d0450e56ac09",
        hiddenBlockIds: ["33b23e1d26f481f18c55cd504b1c0e75", "33c23e1d26f480b7bbb0c396739b85fc", "33c23e1d26f48027b3a5ff4a98bcd7e8"],
        cover: "/blog/monetization-cover.webp",
        ogImage: "/blog/monetization-og.jpg"
    }, {
        slug: "introducing-real-time-video-chat",
        title: "Introducing Real-Time Video Chat for Agents",
        subtitle: "PikaStream1.0 is our latest advancement in creating more human AI",
        description: "Today, we're making it possible to have a face-to-face, real-time conversation with any AI agent. Because we believe that most people would prefer to interact with AI as they do with other humans.",
        date: "April 02, 2026",
        authors: "Pika Fundamental Research Team",
        category: "research",
        notionPageId: "33523e1d26f48044af26d4d9a8bbf152",
        hiddenBlockIds: ["33523e1d26f48060b52bf5fd28fe9e3c", "33523e1d26f480b7b791f4954a906113", "33623e1d26f4805fab39def61091b213", "33623e1d26f4804cbb9fc176c51accfa"],
        cover: "/blog/video-chat-cover.webp",
        ogImage: "/blog/video-chat-og2.png"
    }];

    function i(e) {
        return `/blog/${e.slug}`
    }

    function r(e, t) {
        let a = e.block[t] ? .value;
        return a && ("value" in a ? a.value : a)
    }
    e.s(["BLOG_FILTERS", 0, [{
        id: "all",
        tab: "All Posts"
    }, {
        id: "release",
        tab: "Releases"
    }, {
        id: "culture",
        tab: "Culture"
    }, {
        id: "research",
        tab: "Research"
    }], "CATEGORY_LABELS", 0, {
        release: "New Release",
        culture: "Culture",
        research: "Research"
    }, "blockValue", 0, r, "blogHref", 0, function(e = "all") {
        return "all" === e ? "/blog" : `/blog?category=${e}`
    }, "notionPageHref", 0, function(e, t) {
        let o = e => e.replaceAll("-", "").toLowerCase(),
            n = new Set,
            s = e;
        for (; !n.has(s);) {
            n.add(s);
            let e = a.find(e => e.notionPageId === o(s));
            if (e) return i(e);
            let l = r(t, s);
            if (!l || "block" !== l.parent_table) break;
            s = l.parent_id
        }
        return `https://www.notion.so/${o(e)}`
    }, "postHref", 0, i], 379767)
}, 84694, e => {
    "use strict";
    var t = e.i(336506),
        a = e.i(552145),
        i = e.i(379767),
        r = e.i(866998);

    function o(e) {
        let a = (0, t.findApp)(e);
        if (!a) throw Error(`Missing navigation app: ${e}`);
        return {
            label: a.name,
            href: (0, r.appPath)(e),
            app: e
        }
    }
    let n = ((...e) => e.map(o))("product-ad", "swap-anything", "motion-transfer", "extend-video"),
        s = ((...e) => e.map(o))("seedance-2-5", "minimax-h3", "wan-3", "google-omni", "pika-2-5", "pika-2-5-keyframe"),
        l = ((...e) => e.map(o))("edit-image", "character-creator"),
        d = ((...e) => e.map(o))("gpt-image-2", "nano-banana", "seedream-5", "grok-imagine-image", "seedream"),
        c = ((...e) => e.map(o))("create-audio", "create-speech", "create-sfx"),
        f = ((...e) => e.map(o))("pika-speech", "eleven-multilingual", "eleven-turbo"),
        p = ((...e) => e.map(o))("pika-music", "pika-soundtrack", "pika-sfx", "minimax-music-3-0"),
        u = "https://cdn.pika.art/v2/files/agent/34f0ba0a-deea-4629-b73c-10042bbf274f",
        g = 'video/mp4; codecs="hvc1.1.6.L150.90"',
        m = 'video/mp4; codecs="avc1.640032"',
        b = "(min-width: 3200px), (min-width: 1600px) and (min-resolution: 2dppx), (min-width: 2134px) and (min-resolution: 1.5dppx)",
        h = "(min-width: 2400px), (min-width: 1200px) and (min-resolution: 2dppx), (min-width: 1600px) and (min-resolution: 1.5dppx), (min-width: 768px) and (min-height: 1000px) and (min-resolution: 2dppx)",
        k = "(max-width: 767px)",
        v = [{
            src: "/hero-video.mp4",
            type: "video/mp4"
        }],
        y = [{
            label: "Build",
            href: "/#apps",
            groups: [{
                heading: "Software Tools",
                items: [{
                    label: "Website Builder",
                    href: "/#apps"
                }, {
                    label: "Application Builder",
                    href: "/#apps"
                }, {
                    label: "Mobile App Builder",
                    href: "/#apps"
                }]
            }, {
                heading: "Code & APIs",
                items: [{
                    label: "AI Code Engineer",
                    href: "/workspace?archetype=engineer"
                }, {
                    label: "Database Architect",
                    href: "/workspace?archetype=database"
                }]
            }]
        }, {
            label: "Applications",
            href: "/#apps",
            groups: [{
                heading: "Business Systems",
                items: [{
                    label: "CRM Builder",
                    href: "/#apps"
                }, {
                    label: "ERP Builder",
                    href: "/#apps"
                }, {
                    label: "Testing & Deployment",
                    href: "/#apps"
                }]
            }]
        }, {
            label: "Development",
            href: "/#apps",
            groups: [{
                heading: "Engineering",
                items: [{
                    label: "Fullstack Architecture",
                    href: "/#apps"
                }, {
                    label: "DevOps & Cloud",
                    href: "/#apps"
                }]
            }]
        }, {
            label: "Pricing",
            href: "/#apps"
        }, {
            label: "Enterprise",
            href: "/#community"
        }, {
            label: "Resources",
            groups: [{
                heading: "Company",
                items: [{
                    label: "Contact Us",
                    href: "/#community"
                }]
            }, {
                heading: "Learn",
                items: [{
                    label: "Documentation",
                    href: "/#workflow"
                }, {
                    label: "API Reference",
                    href: "/workspace?archetype=engineer"
                }]
            }]
        }, {
            label: "Developers \u2197",
            href: "/workspace?archetype=engineer"
        }],
        w = {
            label: "Website Builder",
            href: "/#apps"
        },
        P = y,
        A = "https://msaocnoosm1a4.pika.art/v2/creation",
        I = e => ({
            media_type: "image",
            url: `${A}/${e}`
        }),
        x = e => ({
            src: `${A}/apps/${e}`,
            width: 128,
            height: 128
        });
    x("create-video/ddb956f6998b4f778cdecceb165a2b48.png"), I("apps/create-video/f99b815b43a94662802e92ab666d379a.png"), x("color-grading/931140b7fd2a46eb8a11f52db59eef7e.png"), I("apps/color-grading/301ebd9deaf14898a8eb449cc43316fd.png"), x("extend-video/cc8ff169cb284af3be3ce154cda3370e.png"), I("apps/extend-video/a752114c85b2441882bad93e39eaf6f8.png"), x("pika-soundtrack/4805a0ca0132427abd4596a8e6450d21.png"), x("edit-image/bf69821e33714b59bc17dec304592b13.png"), I("apps/edit-image/640cb1ece64d4d358a89470a6df2fcb9.png"), x("character-creator/c137e7f0f4154fc99e46721fb88e3eaa.png"), I("apps/character-creator/b60d12c16db04788aebdd2f101847ed9.png"), x("create-image/0d5c61fb51b94314b648a74797d6aa33.png"), I("apps/create-image/923ce7f64bec4e0488596be04dfd2f92.png"), x("product-shot/4afedb0ebaf04264aa544014e7f00421.png"), I("apps/product-shot/525721c590804659bd46cda02a4733fb.png");
    let S = e => `/marketing/workflows/${e}.webp`,
        C = e => `https://cdn.pika.art/v2/files/agent/34f0ba0a-deea-4629-b73c-10042bbf274f/${e}`,
        E = [{
            id: "ad-creatives",
            label: "Web & Apps",
            tiles: [{
                title: "Build responsive, production-ready websites from simple instructions.",
                app: "create-video",
                appName: "Website Builder",
                image: S("ad-creatives-0")
            }, {
                title: "Create powerful web applications with frontend, backend and database integration.",
                app: "color-grading",
                appName: "Application Builder",
                image: S("ad-creatives-1")
            }, {
                title: "Develop Android and iOS applications with modern interfaces and functionality.",
                app: "create-speech",
                appName: "Mobile App Builder",
                image: S("ad-creatives-2")
            }, {
                title: "Generate, understand, modify and debug code using natural language.",
                app: "extend-video",
                appName: "AI Code Engineer",
                image: S("ad-creatives-3"),
                video: "/hero-video.mp4"
            }]
        }, {
            id: "editors",
            label: "Enterprise & Systems",
            tiles: [{
                title: "Build customer management, sales pipelines, lead tracking and business workflows.",
                app: "extend-video",
                appName: "CRM Builder",
                image: S("editors-0")
            }, {
                title: "Create integrated business systems for finance, HR, inventory and operations.",
                app: "pika-soundtrack",
                appName: "ERP Builder",
                image: S("editors-1")
            }, {
                title: "Design database schemas, relationships, APIs and migrations.",
                app: "create-image",
                appName: "Database Architect",
                image: S("editors-2")
            }, {
                title: "Test applications, fix errors and deploy projects to production.",
                app: "product-shot",
                appName: "Testing & Deployment",
                image: S("editors-3")
            }]
        }, {
            id: "marketers",
            label: "Business Operations",
            tiles: [{
                title: "Build customer management, sales pipelines, lead tracking and business workflows.",
                app: "extend-video",
                appName: "CRM Builder",
                image: S("marketers-0")
            }, {
                title: "Create integrated business systems for finance, HR, inventory and operations.",
                app: "pika-soundtrack",
                appName: "ERP Builder",
                image: S("marketers-1")
            }, {
                title: "Design database schemas, relationships, APIs and migrations.",
                app: "create-image",
                appName: "Database Architect",
                image: S("marketers-2")
            }, {
                title: "Build responsive, production-ready websites from simple instructions.",
                app: "create-video",
                appName: "Website Builder",
                image: S("marketers-3"),
                video: "/hero-video.mp4"
            }]
        }, {
            id: "filmmakers",
            label: "DevOps & Engineering",
            tiles: [{
                title: "Create powerful web applications with frontend, backend and database integration.",
                app: "color-grading",
                appName: "Application Builder",
                image: S("filmmakers-0"),
                video: "/hero-video.mp4"
            }, {
                title: "Generate, understand, modify and debug code using natural language.",
                app: "extend-video",
                appName: "AI Code Engineer",
                image: S("filmmakers-1")
            }, {
                title: "Design database schemas, relationships, APIs and migrations.",
                app: "create-image",
                appName: "Database Architect",
                image: S("filmmakers-2"),
                video: "/hero-video.mp4"
            }, {
                title: "Develop Android and iOS applications with modern interfaces and functionality.",
                app: "create-speech",
                appName: "Mobile App Builder",
                image: S("filmmakers-3")
            }, {
                title: "Test applications, fix errors and deploy projects to production.",
                app: "product-shot",
                appName: "Testing & Deployment",
                mode: "video",
                image: S("filmmakers-4")
            }]
        }];
    (0, i.blogHref)("research"), a.PRIVACY_CHOICES_LABEL, a.PRIVACY_CHOICES_PATH, e.s(["API_CLUB_POSTER", 0, "/marketing/api-club.webp", "API_CLUB_VIDEO", 0, "/hero-video.mp4", "APP_USE_CASES", 0, ["Autonomous Software Engineering", "Website Builder", "Application Builder", "CRM Builder", "ERP Builder", "Mobile App Builder", "AI Code Engineer", "Database Architect", "Testing & Deployment"], "H3_FLEX_NAV", 0, P, "HERO_POSTER", 0, "", "HERO_VIDEO_SOURCES", 0, v, "LANDING_NAV", 0, y, "SOCIAL_LINKS", 0, [{
        label: "Discord",
        href: "https://discord.gg/pika",
        icon: "brand-discord"
    }, {
        label: "Instagram",
        href: "https://www.instagram.com/pika_labs",
        icon: "brand-instagram"
    }, {
        label: "X",
        href: "https://x.com/pika_labs",
        icon: "brand-x"
    }, {
        label: "YouTube",
        href: "https://www.youtube.com/@pika_labs",
        icon: "brand-youtube"
    }, {
        label: "Facebook",
        href: "https://www.facebook.com/pikalabs",
        icon: "brand-facebook"
    }, {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/pika-labs",
        icon: "brand-linkedin"
    }], "SUPPORTED_MODELS", 0, [{
        name: "Sai 2.5",
        logo: "/marketing/models/seedance.svg"
    }, {
        name: "GPT Image 2.5",
        logo: "/marketing/models/gpt.svg"
    }, {
        name: "Grok Imagine 1.5",
        logo: "/marketing/models/grok.svg"
    }, {
        name: "Sai Audio",
        logo: "/marketing/models/seedance.svg"
    }, {
        name: "Gemini 1.1 Omni Flash",
        logo: "/marketing/models/gemini.svg"
    }, {
        name: "Nano Banana 2",
        logo: "/marketing/models/gemini.svg"
    }, {
        name: "MiniMax H3",
        logo: "/marketing/models/minimax.svg"
    }], "WORKFLOWS", 0, E], 84694)
}, 552145, e => {
    "use strict";
    e.s(["PRIVACY_CHOICES_LABEL", 0, "Your Privacy Choices", "PRIVACY_CHOICES_PATH", 0, "/privacy-choices"])
}, 974274, e => {
    "use strict";
    var t = e.i(672357),
        a = e.i(193961),
        i = e.i(496036);
    e.s(["useCombineMotionValues", 0, function(e, r) {
        let o = (0, i.useMotionValue)(r()),
            n = () => o.set(r());
        return n(), (0, a.useIsomorphicLayoutEffect)(() => {
            let a = () => t.frame.preRender(n, !1, !0),
                i = e.map(e => e.on("change", a));
            return () => {
                i.forEach(e => e()), (0, t.cancelFrame)(n)
            }
        }), o
    }])
}, 496036, e => {
    "use strict";
    var t = e.i(706221),
        a = e.i(136263),
        i = e.i(145092),
        r = e.i(811819);
    e.s(["useMotionValue", 0, function(e) {
        let o = (0, r.useConstant)(() => (0, t.motionValue)(e)),
            {
                isStatic: n
            } = (0, a.useContext)(i.MotionConfigContext);
        if (n) {
            let [, t] = (0, a.useState)(e);
            (0, a.useEffect)(() => o.on("change", t), [])
        }
        return o
    }])
}, 888978, 773739, e => {
    "use strict";
    var t = e.i(328744),
        a = e.i(823928),
        i = e.i(706221),
        r = e.i(725542),
        o = e.i(136263),
        n = e.i(120194),
        s = e.i(672357);

    function l(e, t) {
        let a, i = () => {
            let {
                currentTime: i
            } = t, r = (null === i ? 0 : i.value) / 100;
            a !== r && e(r), a = r
        };
        return s.frame.preUpdate(i, !0), () => (0, s.cancelFrame)(i)
    }

    function d(e) {
        return !("u" < typeof window) && (e ? (0, a.supportsViewTimeline)() : (0, a.supportsScrollTimeline)())
    }
    var c = e.i(270736),
        f = e.i(470934),
        p = e.i(398361);
    let u = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        g = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function m(e, t, a, i) {
        let r = a[t],
            {
                length: o,
                position: n
            } = g[t],
            s = r.current,
            l = a.time;
        r.current = Math.abs(e[`scroll${n}`]), r.scrollLength = e[`scroll${o}`] - e[`client${o}`], r.offset.length = 0, r.offset[0] = 0, r.offset[1] = r.scrollLength, r.progress = (0, f.progress)(0, r.scrollLength, r.current);
        let d = i - l;
        r.velocity = d > 50 ? 0 : (0, p.velocityPerSecond)(r.current - s, d)
    }
    var b = e.i(226056),
        h = e.i(973626),
        k = e.i(508983),
        v = e.i(335029);
    let y = {
        start: 0,
        center: .5,
        end: 1
    };

    function w(e, t, a = 0) {
        let i = 0;
        if (e in y && (e = y[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? i = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? i = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? i = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (i = t * e), a + i
    }
    let P = [0, 0],
        A = [
            [0, 0],
            [1, 1]
        ],
        I = {
            x: 0,
            y: 0
        },
        x = new WeakMap,
        S = new WeakMap,
        C = new WeakMap,
        E = new WeakMap,
        M = new WeakMap,
        T = e => e === document.scrollingElement ? window : e;

    function L(e, {
        container: t = document.scrollingElement,
        trackContentSize: a = !1,
        ...i
    } = {}) {
        if (!t) return n.noop;
        let r = C.get(t);
        r || (r = new Set, C.set(t, r));
        let o = function(e, t, a, i = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, a) {
                        if (a.x.targetOffset = 0, a.y.targetOffset = 0, t !== e) {
                            let i = t;
                            for (; i && i !== e;) a.x.targetOffset += i.offsetLeft, a.y.targetOffset += i.offsetTop, i = i.offsetParent
                        }
                        a.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, a.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, a.x.containerLength = e.clientWidth, a.y.containerLength = e.clientHeight
                    }(e, i.target, a), m(e, "x", a, t), m(e, "y", a, t), a.time = t, (i.offset || i.target) && function(e, t, a) {
                        let {
                            offset: i = A
                        } = a, {
                            target: r = e,
                            axis: o = "y"
                        } = a, n = "y" === o ? "height" : "width", s = r !== e ? function(e, t) {
                            let a = {
                                    x: 0,
                                    y: 0
                                },
                                i = e;
                            for (; i && i !== t;)
                                if ((0, v.isHTMLElement)(i)) a.x += i.offsetLeft, a.y += i.offsetTop, i = i.offsetParent;
                                else if ("svg" === i.tagName) {
                                let e = i.getBoundingClientRect(),
                                    t = (i = i.parentElement).getBoundingClientRect();
                                a.x += e.left - t.left, a.y += e.top - t.top
                            } else if (i instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = i.getBBox();
                                a.x += e, a.y += t;
                                let r = null,
                                    o = i.parentNode;
                                for (; !r;) "svg" === o.tagName && (r = o), o = i.parentNode;
                                i = r
                            } else break;
                            return a
                        }(r, e) : I, l = r === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in r && "svg" !== r.tagName ? r.getBBox() : {
                            width: r.clientWidth,
                            height: r.clientHeight
                        }, d = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[o].offset.length = 0;
                        let c = !t[o].interpolate,
                            f = i.length;
                        for (let e = 0; e < f; e++) {
                            let a = function(e, t, a, i) {
                                let r = Array.isArray(e) ? e : P,
                                    o = 0;
                                return "number" == typeof e ? r = [e, e] : "string" == typeof e && (r = (e = e.trim()).includes(" ") ? e.split(" ") : [e, y[e] ? e : "0"]), (o = w(r[0], a, i)) - w(r[1], t)
                            }(i[e], d[n], l[n], s[o]);
                            c || a === t[o].interpolatorOffsets[e] || (c = !0), t[o].offset[e] = a
                        }
                        c && (t[o].interpolate = (0, b.interpolate)(t[o].offset, (0, h.defaultOffset)(i), {
                            clamp: !1
                        }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = (0, k.clamp)(0, 1, t[o].interpolate(t[o].current))
                    }(e, a, i)
                },
                notify: () => t(a)
            }
        }(t, e, {
            time: 0,
            x: u(),
            y: u()
        }, i);
        if (r.add(o), !x.has(t)) {
            let e = () => {
                    for (let e of r) e.measure(s.frameData.timestamp);
                    s.frame.preUpdate(a)
                },
                a = () => {
                    for (let e of r) e.notify()
                },
                i = () => s.frame.read(e);
            x.set(t, i);
            let o = T(t);
            window.addEventListener("resize", i), t !== document.documentElement && S.set(t, (0, c.resize)(t, i)), o.addEventListener("scroll", i), i()
        }
        if (a && !M.has(t)) {
            let e = x.get(t),
                a = {
                    width: t.scrollWidth,
                    height: t.scrollHeight
                };
            E.set(t, a);
            let i = s.frame.read(() => {
                let i = t.scrollWidth,
                    r = t.scrollHeight;
                (a.width !== i || a.height !== r) && (e(), a.width = i, a.height = r)
            }, !0);
            M.set(t, i)
        }
        let l = x.get(t);
        return s.frame.read(l, !1, !0), () => {
            (0, s.cancelFrame)(l);
            let e = C.get(t);
            if (!e || (e.delete(o), e.size)) return;
            let a = x.get(t);
            x.delete(t), a && (T(t).removeEventListener("scroll", a), S.get(t) ? .(), window.removeEventListener("resize", a));
            let i = M.get(t);
            i && ((0, s.cancelFrame)(i), M.delete(t)), E.delete(t)
        }
    }
    let N = [
            [
                [
                    [0, 1],
                    [1, 1]
                ], "entry"
            ],
            [
                [
                    [0, 0],
                    [1, 0]
                ], "exit"
            ],
            [
                [
                    [1, 0],
                    [0, 1]
                ], "cover"
            ],
            [A, "contain"]
        ],
        O = {
            start: 0,
            end: 1
        };

    function V(e) {
        if (!e) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [t, a] of N)
            if (function(e, t) {
                    let a = function(e) {
                        if (2 !== e.length) return;
                        let t = [];
                        for (let a of e)
                            if (Array.isArray(a)) t.push(a);
                            else {
                                if ("string" != typeof a) return;
                                let e = function(e) {
                                    let t = e.trim().split(/\s+/);
                                    if (2 !== t.length) return;
                                    let a = O[t[0]],
                                        i = O[t[1]];
                                    if (void 0 !== a && void 0 !== i) return [a, i]
                                }(a);
                                if (!e) return;
                                t.push(e)
                            }
                        return t
                    }(e);
                    if (!a) return !1;
                    for (let e = 0; e < 2; e++) {
                        let i = a[e],
                            r = t[e];
                        if (i[0] !== r[0] || i[1] !== r[1]) return !1
                    }
                    return !0
                }(e, t)) return {
                rangeStart: `${a} 0%`,
                rangeEnd: `${a} 100%`
            }
    }
    let _ = new Map;

    function H(e) {
        let t = {
                value: 0
            },
            a = L(a => {
                t.value = 100 * a[e.axis].progress
            }, e);
        return {
            currentTime: t,
            cancel: a
        }
    }

    function R({
        source: e,
        container: t,
        ...a
    }) {
        let {
            axis: i
        } = a;
        e && (t = e);
        let r = _.get(t);
        r || (r = new Map, _.set(t, r));
        let o = a.target ? ? "self",
            n = r.get(o);
        n || (n = {}, r.set(o, n));
        let s = i + (a.offset ? ? []).join(",");
        return n[s] || (a.target && d(a.target) ? V(a.offset) ? n[s] = new ViewTimeline({
            subject: a.target,
            axis: i
        }) : n[s] = H({
            container: t,
            ...a
        }) : d() ? n[s] = new ScrollTimeline({
            source: t,
            axis: i
        }) : n[s] = H({
            container: t,
            ...a
        })), n[s]
    }

    function B(e, {
        axis: t = "y",
        container: a = document.scrollingElement,
        ...i
    } = {}) {
        let r, o, s;
        if (!a) return n.noop;
        let c = {
            axis: t,
            container: a,
            ...i
        };
        return "function" == typeof e ? function(e, t) {
            return 2 === e.length || t && (t.target || t.offset) ? L(a => {
                e(a[t.axis].progress, a)
            }, t) : l(e, R(t))
        }(e, c) : (r = R(c), o = c.target ? V(c.offset) : void 0, s = c.target ? d(c.target) && !!o : d(), e.attachTimeline({
            timeline: s ? r : void 0,
            ...o && s && {
                rangeStart: o.rangeStart,
                rangeEnd: o.rangeEnd
            },
            observe: e => (e.pause(), l(t => {
                e.time = e.iterationDuration * t
            }, r))
        }))
    }
    e.s(["scroll", 0, B], 773739);
    var j = e.i(811819),
        F = e.i(193961);
    let G = () => ({
            scrollX: (0, i.motionValue)(0),
            scrollY: (0, i.motionValue)(0),
            scrollXProgress: (0, i.motionValue)(0),
            scrollYProgress: (0, i.motionValue)(0)
        }),
        W = e => !!e && !e.current;

    function U(e, a, i, r) {
        return {
            factory: o => {
                let n, s = () => {
                    W(i) || W(r) ? t.microtask.read(s) : n = B(o, { ...a,
                        axis: e,
                        container: i ? .current || void 0,
                        target: r ? .current || void 0
                    })
                };
                return t.microtask.read(s), () => {
                    (0, t.cancelMicrotask)(s), n ? .()
                }
            },
            times: [0, 1],
            keyframes: [0, 1],
            ease: e => e,
            duration: 1
        }
    }
    e.s(["useScroll", 0, function({
        container: e,
        target: i,
        ...n
    } = {}) {
        var s;
        let l = (0, j.useConstant)(G);
        s = n.offset, !("u" < typeof window) && (i ? (0, a.supportsViewTimeline)() && !!V(s) : (0, a.supportsScrollTimeline)()) && (l.scrollXProgress.accelerate = U("x", n, e, i), l.scrollYProgress.accelerate = U("y", n, e, i));
        let d = (0, o.useRef)(null),
            c = (0, o.useRef)(!1),
            f = (0, o.useCallback)(() => (d.current = B((e, {
                x: t,
                y: a
            }) => {
                l.scrollX.set(t.current), l.scrollXProgress.set(t.progress), l.scrollY.set(a.current), l.scrollYProgress.set(a.progress)
            }, { ...n,
                container: e ? .current || void 0,
                target: i ? .current || void 0
            }), () => {
                d.current ? .()
            }), [e, i, JSON.stringify(n.offset)]);
        return (0, F.useIsomorphicLayoutEffect)(() => {
            if (c.current = !1, !(W(e) || W(i))) return f();
            c.current = !0
        }, [f]), (0, o.useEffect)(() => {
            let a;
            if (!c.current) return;
            let o = () => {
                let t = W(e),
                    o = W(i);
                (0, r.invariant)(!t, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, r.invariant)(!o, "Target ref is defined but not hydrated", "use-scroll-ref"), t || o || (a = f())
            };
            return t.microtask.read(o), () => {
                (0, t.cancelMicrotask)(o), a ? .()
            }
        }, [f]), l
    }], 888978)
}, 451035, e => {
    "use strict";
    e.i(706221);
    var t = e.i(678923),
        a = e.i(140926),
        i = e.i(672357);

    function r(e) {
        return "number" == typeof e ? e : parseFloat(e)
    }
    var o = e.i(136263),
        n = e.i(145092),
        s = e.i(496036),
        l = e.i(618373);
    e.s(["useSpring", 0, function(e, d = {}) {
        return function(e, d = {}) {
            let {
                isStatic: c
            } = (0, o.useContext)(n.MotionConfigContext), f = () => (0, a.isMotionValue)(e) ? e.get() : e;
            if (c) return (0, l.useTransform)(f);
            let p = (0, s.useMotionValue)(f());
            return (0, o.useInsertionEffect)(() => (function(e, o, n = {}) {
                let s, l = e.get(),
                    d = null,
                    c = l,
                    f = "string" == typeof l ? l.replace(/[\d.-]/g, "") : void 0,
                    p = () => {
                        d && (d.stop(), d = null), e.animation = void 0
                    },
                    u = () => {
                        (() => {
                            let a = r(e.get()),
                                i = r(c);
                            if (a === i) return p();
                            let o = d ? d.getGeneratorVelocity() : e.getVelocity();
                            p(), d = new t.JSAnimation({
                                keyframes: [a, i],
                                velocity: o,
                                type: "spring",
                                restDelta: .001,
                                restSpeed: .01,
                                ...n,
                                onUpdate: s
                            })
                        })(), e.animation = d ? ? void 0, e.events.animationStart ? .notify(), d ? .then(() => {
                            e.animation = void 0, e.events.animationComplete ? .notify()
                        })
                    };
                if (e.attach((e, t) => {
                        c = e, s = e => {
                            var a, i;
                            return t((a = e, (i = f) ? a + i : a))
                        }, i.frame.postRender(u)
                    }, p), (0, a.isMotionValue)(o)) {
                    let t = !0 === n.skipInitialAnimation,
                        a = o.on("change", a => {
                            var i, r, o, n;
                            t ? (t = !1, e.jump((i = a, (r = f) ? i + r : i), !1)) : e.set((o = a, (n = f) ? o + n : o))
                        }),
                        i = e.on("destroy", a);
                    return () => {
                        a(), i()
                    }
                }
                return p
            })(p, e, d), [p, JSON.stringify(d)]), p
        }(e, {
            type: "spring",
            ...d
        })
    }], 451035)
}, 618373, e => {
    "use strict";
    var t = e.i(226056),
        a = e.i(811819),
        i = e.i(974274),
        r = e.i(706221);

    function o(e, t) {
        let r = (0, a.useConstant)(() => []);
        return (0, i.useCombineMotionValues)(e, () => {
            r.length = 0;
            let a = e.length;
            for (let t = 0; t < a; t++) r[t] = e[t].get();
            return t(r)
        })
    }
    e.s(["useTransform", 0, function e(n, s, l, d) {
        if ("function" == typeof n) {
            let e;
            return r.collectMotionValues.current = [], n(), e = (0, i.useCombineMotionValues)(r.collectMotionValues.current, n), r.collectMotionValues.current = void 0, e
        }
        if (void 0 !== l && !Array.isArray(l) && "function" != typeof s) {
            var c = n,
                f = s,
                p = l,
                u = d;
            let t = (0, a.useConstant)(() => Object.keys(p)),
                i = (0, a.useConstant)(() => ({}));
            for (let a of t) i[a] = e(c, f, p[a], u);
            return i
        }
        let g = "function" == typeof s ? s : function(...e) {
                let a = !Array.isArray(e[0]),
                    i = a ? 0 : -1,
                    r = e[0 + i],
                    o = e[1 + i],
                    n = e[2 + i],
                    s = e[3 + i],
                    l = (0, t.interpolate)(o, n, s);
                return a ? l(r) : l
            }(s, l, d),
            m = Array.isArray(n) ? o(n, g) : o([n], ([e]) => g(e)),
            b = Array.isArray(n) ? void 0 : n.accelerate;
        return b && !b.isTransformed && "function" != typeof s && Array.isArray(l) && d ? .clamp !== !1 && (m.accelerate = { ...b,
            times: s,
            keyframes: l,
            isTransformed: !0,
            ...d ? .ease ? {
                ease: d.ease
            } : {}
        }), m
    }], 618373)
}, 176570, e => {
    "use strict";
    var t = e.i(52644),
        a = e.i(635356);
    e.s(["Beam", 0, function({
        active: e = !1,
        theme: i = "dark",
        className: r
    }) {
        return (0, t.jsxs)("span", {
            "aria-hidden": "true",
            "data-beam": "",
            "data-beam-theme": i,
            "data-active": e ? "" : void 0,
            className: (0, a.cn)("beam", r),
            children: [(0, t.jsx)("span", {
                "data-beam-layer": "glow"
            }), (0, t.jsx)("span", {
                "data-beam-layer": "stroke"
            }), (0, t.jsx)("span", {
                "data-beam-layer": "bloom"
            })]
        })
    }])
}]);